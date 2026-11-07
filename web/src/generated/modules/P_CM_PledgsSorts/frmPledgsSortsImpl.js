// Generated from frmPledgsSortsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmPledgsSortsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "Grids", "DBGridEh", "StdCtrls", "Buttons", "Db", "OracleData", "DBCtrls", "NLSLocalizer", "DBGridEhGrouping", "GridsEh", "sboapiDataModuleImpl", "CommonDecls"]);
  const C = [U];
  U.defClass("TfrmPledgsSorts", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "pledgsortsdatsrc": {"name": "PledgsortsDatSrc", "type": "TDataSource"}, "pledgsorts": {"name": "Pledgsorts", "type": "TOracleDataSet"}, "pledgsortsid": {"name": "PledgsortsID", "type": "TFloatField"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "pledgsortsname": {"name": "PledgsortsNAME", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("frmPledgsSorts", null, "TfrmPledgsSorts");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "frmPledgsSorts")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmPledgsSorts", "RefreshPldg", async function RefreshPldg(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "Pledgsorts")), "Refresh", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmPledgsSorts", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmPledgsSorts", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmPledgsSorts", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Pledgsorts")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPledgsSorts", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Pledgsorts")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPledgsSorts", "PledgsortsAfterPost", async function PledgsortsAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "savebookmark": null};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t1 = L0["dataset"];
    await $.wset([$t1], "SaveBookmark", (await $.wv([$t1], "GetBookmark", C, false)), { get: async () => L0["savebookmark"], set: async (v) => { L0["savebookmark"] = v; }, local: true });
    await $.stmt($.wcall([$t1], "Refresh", [], C));
    await $.stmt((await $.wcall([$t1], "GotoBookmark", [(await $.wv([$t1], "SaveBookmark", { get: async () => L0["savebookmark"], set: async (v) => { L0["savebookmark"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmPledgsSorts", (await $.mcall((await $.v(C, "TfrmPledgsSorts")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
