// Generated from ProlongMainFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ProlongMainFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "ToolWin", "ComCtrls", "ActnList", "ImgList", "Grids", "DBGridEh", "CMExcelExport", "DBGridEhGrouping", "GridsEh", "ProlongDataModuleImpl", "CommonDecls", "SbSystem", "ProlongAddForm", "MaxiImplpas"]);
  const C = [U];
  U.defClass("TProlongMainForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "actnaddprolong": {"name": "ActnAddProlong", "type": "TAction"}, "actndel": {"name": "ActnDel", "type": "TAction"}, "actnexport": {"name": "ActnExport", "type": "TAction"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "actnquit": {"name": "ActnQuit", "type": "TAction"}, "eexporter": {"name": "EExporter", "type": "TCMExcelExport"}}, {});
  U.init(async () => {
    U.var_("ProlongMainForm", null, "TProlongMainForm");
  });
  U.method("TProlongMainForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TProlongMainForm", "ShowProlongForm", async function ShowProlongForm(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "creditid": 0};
  L0["rsformcaption"] = "%s № li müqavilə . Restrukturizasiya";
  L0["creditid"] = (await $.v(C, "get_SelectedCrdID"));
  {
    const $t1 = (await $.wobj(C, "ProlongDataMod"));
    {
      const $t2 = (await $.wv([$t1], "ProlongsData", C, false));
      await $.stmt($.wcall([$t1, $t2], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["CreditID", (await $.wv([$t1, $t2], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    }
    {
      const $t3 = (await $.wv([$t1], "CreditInfo", C, false));
      await $.stmt($.wcall([$t1, $t3], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t1, $t3], "SetVariable", ["ID", (await $.wv([$t1, $t3], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t3], "Open", [], C));
    }
  }
  await $.set(C, "Caption", (await $.call(C, "Format", [L0["rsformcaption"], [(await $.v(C, "get_SelectedCrdNo"))]])));
  await $.stmt($.call(C, "ShowModal", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TProlongMainForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "ProlongMainForm")), "ShowProlongForm", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TProlongMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ProlongDataMod", (await $.mcall((await $.v(C, "TProlongDataMod")), "Create", [Self])));
  await $.set(C, "MaxiFrm", (await $.mcall((await $.v(C, "TMaxiFrm")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProlongMainForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.wobj(C, "ProlongDataMod"));
    await $.mcall((await $.wv([$t4], "ProlongsData", C, false)), "Close", []);
    await $.mcall((await $.wv([$t4], "CreditInfo", C, false)), "Close", []);
  }
  await $.stmt((await $.call(C, "SafeRefresh", [true, (await $.v(C, "rmLocateAfterRefresh"))])));
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TProlongMainForm", "ActnQuitExecute", async function ActnQuitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProlongMainForm", "ActnExportExecute", async function ActnExportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.wobj(C, "EExporter"));
    await $.stmt($.wcall([$t5], "Connect", [], C));
    await $.stmt((await $.wcall([$t5], "ExportDataset", [(await $.mv((await $.wv([$t5], "ProlongDataMod", C, false)), "ProlongsData")), "Prolongations", (await $.wv([$t5], "True", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProlongMainForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ProlongDataMod")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProlongMainForm", "ActnAddProlongExecute", async function ActnAddProlongExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "ProlongDataMod")), "CreditInfo")), "FieldByName", ["credittype"])), "AsInteger")), 20))) {
    await $.mcall((await $.v(C, "MaxiFrm")), "ShowModal", []);
  } else {
    {
      const $t6 = (await $.mcall((await $.v(C, "TfrmProlongAdd")), "Create", [Self]));
      try {
        await $.stmt($.wcall([$t6], "ShowModal", [], C));
      } finally {
        await $.stmt($.wcall([$t6], "Release", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProlongMainForm", "ActnDelExecute", async function ActnDelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "creditid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rssurewantdelete"] = "Sonuncu prolongosiya silinsin ?";
  if ($.truthy($.ne((await $.call(C, "MessageDlg", [L0["rssurewantdelete"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  L0["creditid"] = (await $.v(C, "Get_SelectedCrdID"));
  {
    const $t7 = (await $.mv((await $.v(C, "ProlongDataMod")), "CM_PROLONGATION"));
    await $.stmt((await $.wcall([$t7], "CallProcedure", ["DelLastProlongation", [(await $.wv([$t7], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))]], C)));
  }
  {
    const $t8 = (await $.wobj(C, "ProlongDataMod"));
    await $.mcall((await $.wv([$t8], "ProlongsData", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t8], "CreditInfo", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "ProlongMainForm", (await $.mcall((await $.v(C, "TProlongMainForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
