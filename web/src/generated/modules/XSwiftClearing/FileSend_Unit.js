// Generated from FileSend_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FileSend_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "StdCtrls", "Buttons", "sboapiDataModuleImpl", "Db", "OracleData", "FileCtrl", "shellapi", "ExtCtrls", "ComCtrls"]);
  const C = [U];
  U.defClass("TSendFileForm", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "but_cancel": {"name": "But_cancel", "type": "TBitBtn"}, "mt150": {"name": "Mt150", "type": "TOracleDataSet"}, "mt150_datasource": {"name": "Mt150_DataSource", "type": "TDataSource"}, "forcheck": {"name": "ForCheck", "type": "TOracleDataSet"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("SendFileForm", null, "TSendFileForm");
  });
  U.method("TSendFileForm", "RefDate", async function RefDate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "dtst": 0, "dtend": 0};
  L0["dtst"] = (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]));
  L0["dtend"] = (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]));
  await $.mcall((await $.v(C, "Mt150")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "Mt150")), "SetVariable", ["BeginDate", L0["dtst"]])));
  await $.stmt((await $.mcall((await $.v(C, "Mt150")), "SetVariable", ["EndDate", L0["dtend"]])));
  await $.mcall((await $.v(C, "Mt150")), "Open", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TSendFileForm", "But_cancelClick", async function But_cancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSendFileForm", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Mt150")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.mcall((await $.v(C, "ForCheck")), "Open", []);
  if ($.truthy((await $.call(C, "FileExists", [$.add($.add($.add((await $.mv((await $.mcall((await $.v(C, "ForCheck")), "fieldbyname", ["hox_out_dir"])), "AsString")), "\\"), (await $.mv((await $.mcall((await $.v(C, "Mt150")), "fieldbyname", ["user_reference"])), "AsString"))), ".xml")])))) {
    await $.stmt((await $.call(C, "ShellExecute", [(await $.mv((await $.v(C, "Application")), "Handle")), "open", (await $.call(C, "pchar", [$.add($.add($.add((await $.mv((await $.mcall((await $.v(C, "ForCheck")), "fieldbyname", ["hox_out_dir"])), "AsString")), "\\"), (await $.mv((await $.mcall((await $.v(C, "Mt150")), "fieldbyname", ["user_reference"])), "AsString"))), ".xml")])), 0, 0, (await $.v(C, "SW_SHOW"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSendFileForm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "RefDate", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
