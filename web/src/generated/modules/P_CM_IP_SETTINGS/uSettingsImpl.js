// Generated from uSettingsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("uSettingsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "StdCtrls", "DBCtrls", "Grids", "DBGrids", "ExtCtrls", "cmoracleapidatamoduleimpl"]);
  const C = [U];
  U.defClass("TfrmSettings", "TForm", {"odssettings": {"name": "ODSSettings", "type": "TOracleDataSet"}, "odssets": {"name": "ODSSets", "type": "TOracleDataSet"}, "dbcombobox1": {"name": "DBComboBox1", "type": "TDBLookupComboBox"}, "settingsd": {"name": "Settingsd", "type": "TDataSource"}, "sets": {"name": "Sets", "type": "TDataSource"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}}, {});
  U.init(async () => {
    U.var_("frmSettings", null, "TfrmSettings");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "frmSettings")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmSettings", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODSSettings")), "Close", []);
  await $.mcall((await $.v(C, "ODSSettings")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmSettings", "DBComboBox1Change", async function DBComboBox1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "ODSSets"));
    await $.stmt($.wcall([$t1], "close", [], C));
    await $.mset((await $.wv([$t1], "SQL", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t1], "ODSSettings", C, false)), "fieldbyname", ["QUERY"])), "AsString")));
    await $.stmt($.wcall([$t1], "open", [], C));
    await $.mset((await $.wcall([$t1], "FieldByName", ["ID"], C)), "Required", (await $.wv([$t1], "False", C, false)));
    await $.mset((await $.wcall([$t1], "FieldByName", ["ID"], C)), "Visible", (await $.wv([$t1], "False", C, false)));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t1], "DBGrid1", C, false)), "Columns")), [0])), "Title")), "Caption", "Adı");
    await $.mset((await $.idx((await $.mv((await $.wv([$t1], "DBGrid1", C, false)), "Columns")), [0])), "Width", $.sub((await $.mv((await $.wv([$t1], "DBGrid1", C, false)), "Width")), 35));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmSettings", "ODSSetsAfterPost", async function ODSSetsAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall(L0["dataset"], "Refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmSettings", (await $.mcall((await $.v(C, "TfrmSettings")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}
