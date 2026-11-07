// Generated from AEMainFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AEMainFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ImgList", "ExtCtrls", "ComCtrls", "ToolWin", "Grids", "DBGridEh", "ActnList", "CMExcelExport", "StdCtrls", "DBGridEhGrouping", "GridsEh", "AEDataModuleImpl", "CommonDecls", "sbsystem", "AEProgressFormImpl", "CreditStateViewImpl", "PayUnit"]);
  const C = [U];
  U.defClass("TAEMainForm", "TForm", {"imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "expireexcelexport": {"name": "ExpireExcelExport", "type": "TCMExcelExport"}, "actncheck": {"name": "ActnCheck", "type": "TAction"}, "actnexport": {"name": "ActnExport", "type": "TAction"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "actnabout": {"name": "ActnAbout", "type": "TAction"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "lblselectedcount": {"name": "lblSelectedCount", "type": "TLabel"}, "lblduecount": {"name": "lblDueCount", "type": "TLabel"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "payexcexp": {"name": "PayExcExp", "type": "TCMExcelExport"}}, {});
  U.init(async () => {
    U.var_("AEMainForm", null, "TAEMainForm");
  });
  U.func("ShowExpireForm", async function ShowExpireForm(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "CommonDBGrid")), "SelectedRows")), "Count")), 0))) {
    await $.mset((await $.mv((await $.v(C, "AEMainForm")), "lblSelectedCount")), "Caption", (await $.call(C, "IntToStr", [(await $.mv((await $.mv((await $.v(C, "CommonDBGrid")), "SelectedRows")), "Count"))])));
  } else {
    await $.mset((await $.mv((await $.v(C, "AEMainForm")), "lblSelectedCount")), "Caption", "1");
  }
  await $.mcall((await $.v(C, "AEMainForm")), "ShowModal", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TAEMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModAE", (await $.mcall((await $.v(C, "TDataModAE")), "Create", [Self])));
  await $.set(C, "AEProgressForm", (await $.mcall((await $.v(C, "TAEProgressForm")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAEMainForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "frmStateViewer")), "Free", []);
  await $.mcall((await $.v(C, "DataModAE")), "Free", []);
  await $.mcall((await $.v(C, "AEProgressForm")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAEMainForm", "ActnExportExecute", async function ActnExportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "ExpireExcelExport"));
    await $.stmt($.wcall([$t1], "Connect", [], C));
    await $.stmt((await $.wcall([$t1], "ExportDataset", [(await $.mv((await $.wv([$t1], "DataModAE", C, false)), "ExpiresData")), "Expired Contracts", (await $.wv([$t1], "True", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAEMainForm", "ActnCheckExecute", async function ActnCheckExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "countofselectedrows": 0, "i": 0, "creditid": 0, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rsconfirmcheck1"] = "Bu əməliyyatın yerinə yetrilməsi bir qədər vaxt alacaq .";
  L0["rsconfirmcheck2"] = "Davam edək ?";
  L0["checkforone"] = $.fn(async function CheckForOne(p0, p1) {
  const L1 = {"crdid": $.copyArg(p0), "dat": $.copyArg(p1), result: undefined};
  await $.fixArgs(L1, ["crdid", "dat"]);
  try {
    {
      const $t3 = (await $.mv((await $.v(C, "DataModAE")), "CM_AUTO_EXPIRE"));
      await $.stmt((await $.wcall([$t3], "CallProcedure", ["PastDueLoan", [(await $.wv([$t3], "CrdID", { get: async () => L1["crdid"], set: async (v) => { L1["crdid"] = v; }, local: true }, false)), (await $.wv([$t3], "Dat", { get: async () => L1["dat"], set: async (v) => { L1["dat"] = v; }, local: true }, false))]], C)));
    }
  } catch ($t2) {
    $.rethrowControl($t2);
    if ($.excIs($t2, "Exception")) {
      L1["e"] = $.exc($t2);
      await $.stmt((await $.call(C, "LogError", [(await $.mv(L1["e"], "Message"))])));
    }
    else { throw $t2; }
  }
  return L1.result;
});
  L0["dat"] = (await $.v(C, "Get_CurrentDate"));
  L0["creditid"] = (await $.v(C, "Get_SelectedCrdID"));
  {
    const $t4 = (await $.mv((await $.v(C, "DataModAE")), "CM_AUTO_EXPIRE"));
    await $.stmt((await $.wcall([$t4], "CallProcedure", ["ClearExpireMarks", []], C)));
  }
  {
    const $t5 = (await $.wobj(C, "CommonDBGrid"));
    const $t6 = (await $.mv((await $.wv([$t5], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t5, $t6], "DisableControls", [], C));
    try {
      await $.wset([$t5, $t6], "CountOfSelectedRows", (await $.mv((await $.wv([$t5, $t6], "SelectedRows", C, false)), "Count")), { get: async () => L0["countofselectedrows"], set: async (v) => { L0["countofselectedrows"] = v; }, local: true });
      if ($.truthy($.gt((await $.wv([$t5, $t6], "CountOfSelectedRows", { get: async () => L0["countofselectedrows"], set: async (v) => { L0["countofselectedrows"] = v; }, local: true }, false)), 1))) {
        if ($.truthy($.ne((await $.wcall([$t5, $t6], "MessageDlg", [$.add($.add((await $.wv([$t5, $t6], "rsConfirmCheck1", { get: async () => L0["rsconfirmcheck1"], set: async (v) => { L0["rsconfirmcheck1"] = v; }, local: true }, false)), "\r"), (await $.wv([$t5, $t6], "rsConfirmCheck2", { get: async () => L0["rsconfirmcheck2"], set: async (v) => { L0["rsconfirmcheck2"] = v; }, local: true }, false))), (await $.wv([$t5, $t6], "mtConfirmation", C, false)), [(await $.wv([$t5, $t6], "mbYes", C, false)), (await $.wv([$t5, $t6], "mbNo", C, false))], 0], C)), (await $.wv([$t5, $t6], "mrYes", C, false))))) {
          return L0.result;
        }
        await $.mcall(Self, "Update", []);
        {
          const $t7 = (await $.wv([$t5, $t6], "AEProgressForm", C, false));
          await $.mset((await $.wv([$t5, $t6, $t7], "ProgressShower", C, false)), "Max", (await $.wv([$t5, $t6, $t7], "CountOfSelectedRows", { get: async () => L0["countofselectedrows"], set: async (v) => { L0["countofselectedrows"] = v; }, local: true }, false)));
          await $.stmt($.wcall([$t5, $t6, $t7], "Show", [], C));
        }
        { const $t8 = $.sub((await $.wv([$t5, $t6], "CountOfSelectedRows", { get: async () => L0["countofselectedrows"], set: async (v) => { L0["countofselectedrows"] = v; }, local: true }, false)), 1);
          await $.wset([$t5, $t6], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t9 = true;
          for (;;) {
            if (!$t9) { await $.wset([$t5, $t6], "I", $.succ((await $.wv([$t5, $t6], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t9 = false;
            if (!($.ord((await $.wv([$t5, $t6], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t8))) break;
            await $.stmt((await $.wcall([$t5, $t6], "GotoBookmark", [(await $.wcall([$t5, $t6], "Pointer", [(await $.idx((await $.wv([$t5, $t6], "SelectedRows", C, false)), [(await $.wv([$t5, $t6], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            await $.wset([$t5, $t6], "CreditID", (await $.wv([$t5, $t6], "Get_SelectedCrdID", C, false)), { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true });
            await $.stmt((await $.wcall([$t5, $t6], "CheckForOne", [(await $.wv([$t5, $t6], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false)), (await $.wv([$t5, $t6], "Dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], { get: async () => L0["checkforone"], set: async (v) => { L0["checkforone"] = v; }, local: true })));
            await $.mset((await $.mv((await $.wv([$t5, $t6], "AEProgressForm", C, false)), "ProgressShower")), "Position", $.add((await $.mv((await $.mv((await $.wv([$t5, $t6], "AEProgressForm", C, false)), "ProgressShower")), "Position")), 1));
            await $.tick();
          }
        }
      } else {
        await $.stmt((await $.wcall([$t5, $t6], "CheckForOne", [(await $.wv([$t5, $t6], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false)), (await $.wv([$t5, $t6], "Dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], { get: async () => L0["checkforone"], set: async (v) => { L0["checkforone"] = v; }, local: true })));
      }
      if ($.truthy((await $.mv((await $.mv((await $.wv([$t5, $t6], "DataModAE", C, false)), "ExpiresData")), "Active")))) {
        await $.mcall((await $.mv((await $.wv([$t5, $t6], "DataModAE", C, false)), "ExpiresData")), "Refresh", []);
      } else {
        await $.mcall((await $.mv((await $.wv([$t5, $t6], "DataModAE", C, false)), "ExpiresData")), "Open", []);
      }
      await $.mset((await $.wv([$t5, $t6], "lblDueCount", C, false)), "Caption", (await $.wcall([$t5, $t6], "IntToStr", [(await $.mv((await $.mv((await $.wv([$t5, $t6], "DataModAE", C, false)), "ExpiresData")), "RecordCount"))], C)));
    } finally {
      await $.stmt($.wcall([$t5, $t6], "EnableControls", [], C));
      {
        const $t10 = (await $.wv([$t5, $t6], "AEProgressForm", C, false));
        await $.mset((await $.wv([$t5, $t6, $t10], "ProgressShower", C, false)), "Position", 0);
        if ($.truthy((await $.wv([$t5, $t6, $t10], "Visible", C, false)))) {
          await $.stmt($.wcall([$t5, $t6, $t10], "Close", [], C));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAEMainForm", "DBGridEh1DblClick", async function DBGridEh1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ActnAbout")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.stmt($.call(C, "ShowExpireForm", []));
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TAEMainForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.mv((await $.v(C, "DataModAE")), "CM_AUTO_EXPIRE"));
    await $.stmt((await $.wcall([$t11], "CallProcedure", ["ClearExpireMarks", []], C)));
  }
  await $.mcall((await $.mv((await $.v(C, "DataModAE")), "ExpiresData")), "Close", []);
  await $.mset((await $.v(C, "lblSelectedCount")), "Caption", "-");
  await $.mset((await $.v(C, "lblDueCount")), "Caption", "-");
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TAEMainForm", "ActnAboutExecute", async function ActnAboutExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "creditid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "frmStateViewer", (await $.mcall((await $.v(C, "TfrmStateViewer")), "Create", [Self])));
  L0["creditid"] = (await $.v(C, "Get_SelectedCrdID"));
  {
    const $t12 = (await $.wobj(C, "DataModAE"));
    {
      const $t13 = (await $.wv([$t12], "Payments", C, false));
      await $.stmt($.wcall([$t12, $t13], "Close", [], C));
      await $.stmt($.wcall([$t12, $t13], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t12, $t13], "SetVariable", ["CrdID", (await $.wv([$t12, $t13], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t12, $t13], "Open", [], C));
    }
    {
      const $t14 = (await $.wv([$t12], "Schedule", C, false));
      await $.stmt($.wcall([$t12, $t14], "Close", [], C));
      await $.stmt($.wcall([$t12, $t14], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t12, $t14], "SetVariable", ["CrdID", (await $.wv([$t12, $t14], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t12, $t14], "Open", [], C));
    }
  }
  await $.mcall((await $.v(C, "frmStateViewer")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAEMainForm", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "PayForm", (await $.mcall((await $.v(C, "TPayForm")), "Create", [Self])));
  await $.mcall((await $.v(C, "PayForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "AEMainForm", (await $.mcall((await $.v(C, "TAEMainForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
