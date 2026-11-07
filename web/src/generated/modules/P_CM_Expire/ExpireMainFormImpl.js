// Generated from ExpireMainFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ExpireMainFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "ComCtrls", "ExtCtrls", "ImgList", "ToolWin", "ActnList", "Grids", "DBGridEh", "CMExcelExport", "DBGridEhGrouping", "GridsEh", "CommonDecls", "sbSystem", "ExpireDataModuleImpl", "ExpireAddFormImpl"]);
  const C = [U];
  U.defClass("TExpMainForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "action1": {"name": "Action1", "type": "TAction"}, "action2": {"name": "Action2", "type": "TAction"}, "action3": {"name": "Action3", "type": "TAction"}, "action4": {"name": "Action4", "type": "TAction"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "expireexport": {"name": "ExpireExport", "type": "TCMExcelExport"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}}, {});
  U.init(async () => {
    U.var_("ExpMainForm", null, "TExpMainForm");
    U.var_("NeedRefreshAfterClose", false, "Boolean");
  });
  U.method("TExpMainForm", "ShowExpireForm", async function ShowExpireForm(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "creditid": 0, "sreserveid": 0};
  L0["rsexpireformcaption"] = "%s - № li kreditin gecikdirilməsi.";
  L0["creditid"] = (await $.v(C, "Get_SelectedCrdID"));
  await $.set(C, "Caption", (await $.call(C, "Format", [L0["rsexpireformcaption"], [(await $.v(C, "Get_SelectedCrdNo"))]])));
  {
    const $t1 = (await $.wobj(C, "ExpireDataModule"));
    {
      const $t2 = (await $.wv([$t1], "ExpireData", C, false));
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["CreditID", (await $.wv([$t1, $t2], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    }
    {
      const $t3 = (await $.wv([$t1], "LoanRest", C, false));
      await $.stmt((await $.wcall([$t1, $t3], "SetVariable", ["CreditID", (await $.wv([$t1, $t3], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t3], "Open", [], C));
    }
    {
      const $t4 = (await $.wv([$t1], "DueRest", C, false));
      await $.stmt((await $.wcall([$t1, $t4], "SetVariable", ["CreditID", (await $.wv([$t1, $t4], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t4], "Open", [], C));
    }
    {
      const $t5 = (await $.wv([$t1], "CreditInfo", C, false));
      await $.stmt((await $.wcall([$t1, $t5], "SetVariable", ["CreditID", (await $.wv([$t1, $t5], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t5], "Open", [], C));
      await $.wset([$t1, $t5], "SReserveID", (await $.mv((await $.wcall([$t1, $t5], "FieldByName", ["DueReserveID"], C)), "AsInteger")), { get: async () => L0["sreserveid"], set: async (v) => { L0["sreserveid"] = v; }, local: true });
    }
    {
      const $t6 = (await $.wv([$t1], "SReserves", C, false));
      await $.stmt($.wcall([$t1, $t6], "Open", [], C));
      if ($.truthy((await $.wcall([$t1, $t6], "Locate", ["ID", (await $.wv([$t1, $t6], "SReserveID", { get: async () => L0["sreserveid"], set: async (v) => { L0["sreserveid"] = v; }, local: true }, false)), []], C)))) {
        await $.mset((await $.mv((await $.wv([$t1, $t6], "ExpireAddForm", C, false)), "DBLookupComboboxEh2")), "KeyValue", (await $.wv([$t1, $t6], "SReserveID", { get: async () => L0["sreserveid"], set: async (v) => { L0["sreserveid"] = v; }, local: true }, false)));
      }
    }
  }
  await $.set(C, "NeedRefreshAfterClose", false);
  await $.stmt($.call(C, "ShowModal", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TExpMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ExpireDataModule", (await $.mcall((await $.v(C, "TExpireDataModule")), "Create", [Self])));
  await $.set(C, "ExpireAddForm", (await $.mcall((await $.v(C, "TExpireAddForm")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpMainForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ExpireAddForm")), "Free", []);
  await $.mcall((await $.v(C, "ExpireDataModule")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpMainForm", "Action4Execute", async function Action4Execute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpMainForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.wobj(C, "ExpireDataModule"));
    {
      const $t8 = (await $.wv([$t7], "SReserves", C, false));
      await $.stmt($.wcall([$t7, $t8], "Close", [], C));
    }
    {
      const $t9 = (await $.wv([$t7], "LoanRest", C, false));
      await $.stmt($.wcall([$t7, $t9], "Close", [], C));
    }
    {
      const $t10 = (await $.wv([$t7], "DueRest", C, false));
      await $.stmt($.wcall([$t7, $t10], "Close", [], C));
    }
    {
      const $t11 = (await $.wv([$t7], "CreditInfo", C, false));
      await $.stmt($.wcall([$t7, $t11], "Close", [], C));
    }
    {
      const $t12 = (await $.wv([$t7], "ExpireData", C, false));
      await $.stmt($.wcall([$t7, $t12], "Close", [], C));
    }
  }
  if ($.truthy((await $.v(C, "NeedRefreshAfterClose")))) {
    await $.stmt((await $.call(C, "SafeRefresh", [true, (await $.v(C, "rmLocateAfterRefresh"))])));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TExpMainForm", "Action1Execute", async function Action1Execute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ExpireAddForm")), "ActiveControl", (await $.mv((await $.v(C, "ExpireAddForm")), "ExpiredAmountEdit")));
  await $.mcall((await $.mv((await $.v(C, "ExpireAddForm")), "ExpiredAmountEdit")), "SelectAll", []);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ExpireAddForm")), "ShowModal")), (await $.v(C, "mrOk"))))) {
    {
      const $t13 = (await $.mv((await $.v(C, "ExpireDataModule")), "ExpireData"));
      await $.stmt($.wcall([$t13], "Refresh", [], C));
    }
    await $.set(C, "NeedRefreshAfterClose", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpMainForm", "Action3Execute", async function Action3Execute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t14 = (await $.wobj(C, "ExpireExport"));
    await $.stmt($.wcall([$t14], "Connect", [], C));
    await $.stmt((await $.wcall([$t14], "ExportDataset", [(await $.mv((await $.wv([$t14], "ExpireDataModule", C, false)), "ExpireData")), "Expire", (await $.wv([$t14], "True", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpMainForm", "Action2Execute", async function Action2Execute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "expid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rsaskbeforedelete"] = "Gecikdirilmə silinəcək ! Əminsiniz?";
  if ($.truthy($.ne((await $.call(C, "MessageDlg", [L0["rsaskbeforedelete"], (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  await $.set(C, "NeedRefreshAfterClose", true);
  {
    const $t15 = (await $.wobj(C, "ExpireDataModule"));
    await $.wset([$t15], "ExpID", (await $.mv((await $.mcall((await $.wv([$t15], "ExpireData", C, false)), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["expid"], set: async (v) => { L0["expid"] = v; }, local: true });
    await $.stmt((await $.mcall((await $.wv([$t15], "CM_EXPIRE", C, false)), "CallProcedure", ["Expire_Delete", ["p_ExpID", (await $.wv([$t15], "ExpID", { get: async () => L0["expid"], set: async (v) => { L0["expid"] = v; }, local: true }, false))]])));
    await $.mcall((await $.wv([$t15], "ExpireData", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpMainForm", "Action2Update", async function Action2Update(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t16 = (await $.mv((await $.v(C, "ExpireDataModule")), "ExpireData"));
    await $.mset((await $.wv([$t16], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Enabled", (await $.and_((await $.wv([$t16], "Active", C, false)), async () => ($.gt((await $.wv([$t16], "RecordCount", C, false)), 0)))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "ExpMainForm")), "ShowExpireForm", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "ExpMainForm", (await $.mcall((await $.v(C, "TExpMainForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
