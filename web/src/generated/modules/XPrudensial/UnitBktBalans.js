// Generated from UnitBktBalans.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitBktBalans", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "DBCtrls", "ExtCtrls", "DB", "OracleData", "StdCtrls", "CMExcelExport", "Menus", "DBGridEh", "Mask", "DBCtrlsEh", "DBLookupEh", "sboapiDataModuleImpl", "UnitBalansAdd"]);
  const C = [U];
  U.defClass("TBKTBalans", "TForm", {"bktbalans": {"name": "BKTBalans", "type": "TOracleDataSet"}, "dsbktbalans": {"name": "DSBKTBalans", "type": "TDataSource"}, "bktname": {"name": "BKTName", "type": "TOracleDataSet"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "button4": {"name": "Button4", "type": "TButton"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dsbktname": {"name": "DSBKTName", "type": "TDataSource"}, "bktbalansbkt": {"name": "BKTBalansBKT", "type": "TFloatField"}, "bktbalanstip": {"name": "BKTBalansTIP", "type": "TIntegerField"}, "bktbalansbalans_h": {"name": "BKTBalansBALANS_H", "type": "TIntegerField"}, "bktbalansname": {"name": "BKTBalansNAME", "type": "TWideStringField"}, "bktbalansdescription": {"name": "BKTBalansDESCRIPTION", "type": "TWideStringField"}, "bktbalansbalans": {"name": "BKTBalansBALANS", "type": "TIntegerField"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "button5": {"name": "Button5", "type": "TButton"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.var_("BKTBalans", null, "TBKTBalans");
  });
  U.method("TBKTBalans", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "FormAdd")), "DBLookupComboboxEh1")), "KeyValue", (await $.v(C, "null")));
  await $.mset((await $.mv((await $.v(C, "FormAdd")), "DBLookupComboboxEh2")), "KeyValue", (-(1)));
  await $.mset((await $.mv((await $.v(C, "FormAdd")), "DBLookupComboboxEh3")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "FormAdd")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBKTBalans", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "bkttype": null, "tip": null, "balans": null};
  await $.fixArgs(L0, ["sender"]);
  L0["bkttype"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["bkt"])), "AsVariant"));
  L0["tip"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["tip"])), "AsVariant"));
  L0["balans"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["balans_h"])), "AsVariant"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "FormAdd")), "Prudensial")), "CallProcedure", ["BktDelete", [L0["bkttype"], L0["tip"], L0["balans"]]])));
  await $.mcall((await $.v(C, "BKTBalans")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBKTBalans", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BKTBalans")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBKTBalans", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CMExcelExport1")), "Connect", []);
  await $.stmt((await $.mcall((await $.v(C, "CMExcelExport1")), "ExportDataset", [(await $.v(C, "BKTBalans")), "BKTBalans", true])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBKTBalans", "Button5Click", async function Button5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.mv((await $.v(C, "Panel3")), "Visible")))))) {
    await $.mset((await $.v(C, "Panel3")), "Visible", true);
    await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (-(1)));
    await $.mset((await $.v(C, "CheckBox1")), "Checked", false);
  } else {
    await $.mset((await $.v(C, "Panel3")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBKTBalans", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "BKTBalans"));
    if ($.truthy((await $.mv((await $.wv([$t1], "CheckBox1", C, false)), "Checked")))) {
      await $.stmt($.wcall([$t1], "close", [], C));
      { const $t2 = await $.iset((await $.wv([$t1], "SQL", C, false)), [16], $.add("where bkt=", (await $.wcall([$t1], "VarToStr", [(await $.mv((await $.wv([$t1], "DBLookupComboboxEh1", C, false)), "KeyValue"))], C)))); if ($t2 !== undefined) { await $.wset([$t1], "SQL", $t2, C); } }
      await $.stmt($.wcall([$t1], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t1], "Close", [], C));
      { const $t3 = await $.iset((await $.wv([$t1], "sql", C, false)), [16], ""); if ($t3 !== undefined) { await $.wset([$t1], "sql", $t3, C); } }
      await $.stmt($.wcall([$t1], "Open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBKTBalans", "DBLookupComboboxEh1Change", async function DBLookupComboboxEh1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CheckBox1Click", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBKTBalans", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "Panel3")), "Visible")))) {
    await $.mset((await $.v(C, "Panel3")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
