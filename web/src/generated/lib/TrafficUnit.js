// Generated from TrafficUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TrafficUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "ExtCtrls", "StdCtrls", "TrafficDataModuleUnit", "DepositDataModuleUnit"]);
  const C = [U];
  U.defClass("TFrmTraffic", "TForm", {"trafficviewer": {"name": "TrafficViewer", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "fcontractid": {"name": "FContractID", "type": "LongInt"}}, {});
  U.init(async () => {
    U.var_("FrmTraffic", null, "TFrmTraffic");
  });
  U.method("TFrmTraffic", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "TrafficDataModule", (await $.mcall((await $.v(C, "TTrafficDataModule")), "Create", [Self])));
  await $.set(C, "Caption", $.add((await $.v(C, "Caption")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DepositDataModule")), "Deposits")), "fieldbyname", ["ContractNo"])), "AsString"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTraffic", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "TrafficDataModule")), "TrafficData"));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["ID#", (await $.wv([$t1], "FContractID", C, false))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTraffic", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "TrafficDataModule")), "TrafficData")), "CloseAll", []);
  await L0["action"].set((await $.v(C, "caFree")));
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmTraffic", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.mcall((await $.v(C, "ButtonCancel")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
