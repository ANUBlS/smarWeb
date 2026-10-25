// Generated from P_AccState_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("P_AccState_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExcelExporter", "Db", "OracleData", "Grids", "DBGrids", "ComCtrls", "StdCtrls", "Buttons", "ExtCtrls", "sboapiDataModuleImpl", "CO_datamod_impl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TP_AccState", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "closebutton": {"name": "CloseButton", "type": "TButton"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "accamountsheet": {"name": "AccAmountSheet", "type": "TTabSheet"}, "dbgridaccstate": {"name": "DBGridAccState", "type": "TDBGrid"}, "accturnoversheet": {"name": "AccTurnoverSheet", "type": "TTabSheet"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "accstate": {"name": "AccState", "type": "TDataSource"}, "accstatedata": {"name": "AccStateData", "type": "TOracleDataSet"}, "accstatedataaccid": {"name": "AccStateDataACCID", "type": "TFloatField"}, "accstatedataamount": {"name": "AccStateDataAMOUNT", "type": "TFloatField"}, "accstatedatalamount": {"name": "AccStateDataLAMOUNT", "type": "TFloatField"}, "accstatedatadebitturnover": {"name": "AccStateDataDEBITTURNOVER", "type": "TFloatField"}, "accstatedatadebitlturnover": {"name": "AccStateDataDEBITLTURNOVER", "type": "TFloatField"}, "accstatedatacreditturnover": {"name": "AccStateDataCREDITTURNOVER", "type": "TFloatField"}, "accstatedatacreditlturnover": {"name": "AccStateDataCREDITLTURNOVER", "type": "TFloatField"}, "accstatedataarchivedate": {"name": "AccStateDataARCHIVEDATE", "type": "TDateTimeField"}, "accstateexporter": {"name": "AccStateExporter", "type": "TExcelExporter"}}, {});
  U.init(async () => {
    U.var_("P_AccState", null, "TP_AccState");
    U.var_("AccountNumber", '', "String");
    U.var_("PriorAccountID", 0, "Longint");
    U.var_("AccountID", 0, "Longint");
  });
  U.method("TP_AccState", "WMNCACTIVATE", async function WMNCACTIVATE(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "s": null};
  await $.inherited(Self, "TP_AccState", "WMNCACTIVATE", null, arguments);
  await $.stmt((await $.call(C, "WMNCPaint", [$.ref(async () => L0["s"], async ($t1) => { L0["s"] = $t1; })])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCActivate"]});
  U.method("TP_AccState", "WMNCPaint", async function WMNCPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "dc": null};
  L0["capt"] = "Hesabın qalıqları";
  await $.inherited(Self, "TP_AccState", "WMNCPaint", null, arguments);
  await $.set(C, "Caption", "");
  L0["dc"] = (await $.call(C, "GetWindowDC", [(await $.v(C, "Handle"))]));
  await $.stmt((await $.call(C, "SetBkMode", [L0["dc"], (await $.v(C, "Transparent"))])));
  await $.stmt((await $.call(C, "SetTextColor", [L0["dc"], (await $.v(C, "clWhite"))])));
  await $.stmt((await $.call(C, "SelectObject", [L0["dc"], (await $.mv((await $.v(C, "Font")), "Handle"))])));
  await $.stmt((await $.call(C, "TextOut", [L0["dc"], 23, 6, L0["capt"], (await $.call(C, "Length", [L0["capt"]]))])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCPaint"]});
  U.method("TP_AccState", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "AccStateExporter"));
    if ($.truthy((await $.and_((await $.mv((await $.mv((await $.wv([$t2], "ExportSource", C, false)), "DataSet")), "Active")), async () => ($.gt((await $.mv((await $.mv((await $.wv([$t2], "ExportSource", C, false)), "DataSet")), "RecordCount")), 0)))))) {
      await $.mcall((await $.mv((await $.wv([$t2], "ExportSource", C, false)), "DataSet")), "Last", []);
      await $.mcall((await $.mv((await $.wv([$t2], "ExportSource", C, false)), "DataSet")), "First", []);
      await $.stmt($.wcall([$t2], "Report", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_AccState", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.mv((await $.v(C, "CO_Datamod")), "Account"));
    await $.stmt($.wcall([$t3], "Open", [], C));
    await $.wset([$t3], "AccountID", (await $.mv((await $.wcall([$t3], "FieldByName", ["ID"], C)), "AsInteger")), C);
    await $.wset([$t3], "AccountNumber", (await $.mv((await $.wcall([$t3], "FieldByName", ["accno"], C)), "AsString")), C);
  }
  if ($.truthy($.ne((await $.v(C, "AccountID")), (await $.v(C, "PriorAccountID"))))) {
    {
      const $t4 = (await $.v(C, "AccStateData"));
      await $.stmt($.wcall([$t4], "CloseAll", [], C));
      await $.stmt((await $.wcall([$t4], "SetVariable", ["AccID", (await $.wv([$t4], "AccountID", C, false))], C)));
      await $.stmt($.wcall([$t4], "Open", [], C));
    }
  }
  await $.set(C, "PriorAccountID", (await $.v(C, "AccountID")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_AccState", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "PriorAccountID", (-(1)));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_AccState", "CloseButtonClick", async function CloseButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
