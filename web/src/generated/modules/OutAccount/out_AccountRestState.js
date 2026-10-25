// Generated from out_AccountRestState.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("out_AccountRestState", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "Grids", "DBGrids", "ComCtrls", "ExcelExporter", "Db", "OracleData", "Buttons", "sboapiDataModuleImpl", "AccountDataModuleImpl"]);
  const C = [U];
  U.defClass("TFormAccountState", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "closebutton": {"name": "CloseButton", "type": "TButton"}, "accstate": {"name": "AccState", "type": "TDataSource"}, "accstatedata": {"name": "AccStateData", "type": "TOracleDataSet"}, "accstatedataaccid": {"name": "AccStateDataACCID", "type": "TFloatField"}, "accstatedataamount": {"name": "AccStateDataAMOUNT", "type": "TFloatField"}, "accstatedatalamount": {"name": "AccStateDataLAMOUNT", "type": "TFloatField"}, "accstatedatadebitturnover": {"name": "AccStateDataDEBITTURNOVER", "type": "TFloatField"}, "accstatedatadebitlturnover": {"name": "AccStateDataDEBITLTURNOVER", "type": "TFloatField"}, "accstatedatacreditturnover": {"name": "AccStateDataCREDITTURNOVER", "type": "TFloatField"}, "accstatedatacreditlturnover": {"name": "AccStateDataCREDITLTURNOVER", "type": "TFloatField"}, "accstatedataarchivedate": {"name": "AccStateDataARCHIVEDATE", "type": "TDateTimeField"}, "accstateexporter": {"name": "AccStateExporter", "type": "TExcelExporter"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "accamountsheet": {"name": "AccAmountSheet", "type": "TTabSheet"}, "dbgridaccstate": {"name": "DBGridAccState", "type": "TDBGrid"}, "accturnoversheet": {"name": "AccTurnoverSheet", "type": "TTabSheet"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "accountnumber": {"name": "AccountNumber", "type": "String"}, "prioraccountid": {"name": "PriorAccountID", "type": "Longint"}, "accountid": {"name": "AccountID", "type": "Longint"}}, {});
  U.init(async () => {
    U.var_("FormAccountState", null, "TFormAccountState");
  });
  U.method("TFormAccountState", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["cs_message"] = "Rest & TurnOvers for account \"%s\"";
  {
    const $t1 = (await $.mv((await $.v(C, "AccDataModule")), "Account"));
    await $.wset([$t1], "AccountID", (await $.mv((await $.wcall([$t1], "FieldByName", ["ID"], C)), "AsInteger")), C);
    await $.wset([$t1], "AccountNumber", (await $.mv((await $.wcall([$t1], "FieldByName", ["acc_no"], C)), "AsString")), C);
  }
  await $.set(C, "Caption", (await $.call(C, "Format", [L0["cs_message"], [(await $.v(C, "AccountNumber"))]])));
  if ($.truthy($.ne((await $.v(C, "AccountID")), (await $.v(C, "PriorAccountID"))))) {
    {
      const $t2 = (await $.v(C, "AccStateData"));
      await $.stmt($.wcall([$t2], "CloseAll", [], C));
      await $.stmt((await $.wcall([$t2], "SetVariable", ["AccID", (await $.wv([$t2], "AccountID", C, false))], C)));
      await $.stmt($.wcall([$t2], "Open", [], C));
    }
  }
  await $.set(C, "PriorAccountID", (await $.v(C, "AccountID")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccountState", "CloseButtonClick", async function CloseButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccountState", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormAccountState", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "PriorAccountID", (-(1)));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccountState", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "AccStateExporter"));
    if ($.truthy((await $.and_((await $.mv((await $.mv((await $.wv([$t3], "ExportSource", C, false)), "DataSet")), "Active")), async () => ($.gt((await $.mv((await $.mv((await $.wv([$t3], "ExportSource", C, false)), "DataSet")), "RecordCount")), 0)))))) {
      await $.mcall((await $.mv((await $.wv([$t3], "ExportSource", C, false)), "DataSet")), "Last", []);
      await $.mcall((await $.mv((await $.wv([$t3], "ExportSource", C, false)), "DataSet")), "First", []);
      await $.stmt($.wcall([$t3], "Report", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
