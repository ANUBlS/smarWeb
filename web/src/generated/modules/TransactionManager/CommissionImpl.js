// Generated from CommissionImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CommissionImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "Grids", "DBGrids", "Mask", "DBCtrls", "TransactionDataModuleUnit", "TransactionManagerImpl", "TransactionPropertiesImpl"]);
  const C = [U];
  U.defClass("TCommissionForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "gridcommission": {"name": "GridCommission", "type": "TDBGrid"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "buttonrefresh": {"name": "ButtonRefresh", "type": "TButton"}, "buttonclose": {"name": "ButtonClose", "type": "TButton"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "button3": {"name": "Button3", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("CommissionForm", null, "TCommissionForm");
  });
  U.method("TCommissionForm", "ButtonRefreshClick", async function ButtonRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.mv((await $.v(C, "GridCommission")), "DataSource")), "DataSet"));
    await $.stmt($.wcall([$t1], "Close", [], C));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCommissionForm", "ButtonCloseClick", async function ButtonCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCommissionForm", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.mcall((await $.v(C, "GridCommission")), "OnDblClick", [L0["sender"]])));
  } else {
    if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
      await $.stmt($.call(C, "Close", []));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TCommissionForm", "GridCommissionDblClick", async function GridCommissionDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "TransactionManagerForm"));
    const $t3 = (await $.wv([$t2], "TransactionDataModule", C, false));
    await $.wset([$t2, $t3], "OperationMode", (await $.wv([$t2, $t3], "omCommission", C, false)), C);
    await $.mcall((await $.wv([$t2, $t3], "Transactions", C, false)), "Insert", []);
    await $.stmt($.wcall([$t2, $t3], "InitProperties", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCommissionForm", "MouseWheelHandler", async function MouseWheelHandler(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TCommissionForm", "MouseWheelHandler", null, arguments);
  if ($.truthy((await $.mv((await $.v(C, "GridCommission")), "Focused")))) {
    {
      const $t4 = (await $.call(C, "TCMMouseWheel", [(await L0["message"].get())]));
      const $t5 = (await $.mv((await $.mv((await $.wv([$t4], "GridCommission", C, false)), "DataSource")), "DataSet"));
      if ($.truthy($.lt((await $.wv([$t4, $t5], "WheelDelta", C, false)), 0))) {
        await $.stmt($.wcall([$t4, $t5], "Next", [], C));
      } else {
        await $.stmt($.wcall([$t4, $t5], "Prior", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TCommissionForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.mv((await $.mv((await $.v(C, "GridCommission")), "DataSource")), "DataSet"));
    if ($.truthy($.not((await $.wv([$t6], "Active", C, false))))) {
      await $.stmt($.wcall([$t6], "Open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCommissionForm", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "GridCommission")), "OnDblClick", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCommissionForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "TransactionManagerForm"));
    await $.stmt((await $.wcall([$t7], "ActionRefreshExecute", [(await $.wv([$t7], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  return U;
}
