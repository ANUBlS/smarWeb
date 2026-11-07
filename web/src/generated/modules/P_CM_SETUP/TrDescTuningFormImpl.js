// Generated from TrDescTuningFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TrDescTuningFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Grids", "DBGrids", "Db", "OracleData", "ExtCtrls", "Mask", "DBCtrls", "ActnList", "DBCtrlsEh", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TTrDescTuningForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "trdescdata": {"name": "TrDescData", "type": "TOracleDataSet"}, "datasrctrdescdata": {"name": "DataSrcTrDescData", "type": "TDataSource"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "button1": {"name": "Button1", "type": "TButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "listbox1": {"name": "ListBox1", "type": "TListBox"}, "button2": {"name": "Button2", "type": "TButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "savechanges": {"name": "SaveChanges", "type": "TAction"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "trdescdatainame": {"name": "TrDescDataINAME", "type": "TWideStringField"}, "trdescdatadescription": {"name": "TrDescDataDESCRIPTION", "type": "TWideStringField"}, "trdescdatatrdescription": {"name": "TrDescDataTRDESCRIPTION", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("TrDescTuningForm", null, "TTrDescTuningForm");
  });
  U.method("TTrDescTuningForm", "SaveChangesExecute", async function SaveChangesExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "TrDescData"));
    if ($.truthy($.in_((await $.wv([$t1], "State", C, false)), [(await $.wv([$t1], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t1], "Post", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrDescTuningForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "TrDescData")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrDescTuningForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "TrDescData")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrDescTuningForm", "ListBox1DblClick", async function ListBox1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.wobj(C, "TrDescData"));
    const $t3 = (await $.wv([$t2], "ListBox1", C, false));
    await $.stmt($.wcall([$t2, $t3], "Edit", [], C));
    await $.mset((await $.wcall([$t2, $t3], "FieldByName", ["TrDescription"], C)), "AsString", $.add((await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["TrDescription"], C)), "AsString")), (await $.wcall([$t2, $t3], "Copy", [(await $.idx((await $.wv([$t2, $t3], "Items", C, false)), [(await $.wv([$t2, $t3], "ItemIndex", C, false))])), 1, 2], C))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTrDescTuningForm", "DBEditEh1KeyPress", async function DBEditEh1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "SelectNext", [L0["sender"], true, true])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
