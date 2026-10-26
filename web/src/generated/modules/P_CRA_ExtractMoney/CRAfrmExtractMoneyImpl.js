// Generated from CRAfrmExtractMoneyImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CRAfrmExtractMoneyImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "ComCtrls", "ImgList", "ToolWin", "Grids", "DBGridEh", "ActnList", "CMExcelExport", "Menus", "DBGridEhGrouping", "GridsEh", "CRADMExtractMoneyImpl", "CRAfrmAddExtractMoneyImpl", "CRACommonDeclsImpl"]);
  const C = [U];
  U.defClass("TfrmExtractMoney", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnadd": {"name": "ActnAdd", "type": "TAction"}, "actndel": {"name": "ActnDel", "type": "TAction"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "actnexprt": {"name": "ActnExprt", "type": "TAction"}, "pmshowtr": {"name": "PMShowTr", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "refreshafteroperation": {"name": "RefreshAfterOperation", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("CRAfrmExtractMoney", null, "TfrmExtractMoney");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined, "contractid": 0, "custaccid": 0};
  await $.fixArgs(L0, ["s"]);
  L0["contractid"] = (await $.v(C, "Get_SelectedContID"));
  {
    const $t1 = (await $.v(C, "CRADMExtractMoney"));
    {
      const $t2 = (await $.wv([$t1], "Payments", C, false));
      if ($.truthy((await $.wv([$t1, $t2], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t2], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["ContractID", (await $.wv([$t1, $t2], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    }
    {
      const $t3 = (await $.wv([$t1], "DepositInfo", C, false));
      if ($.truthy((await $.wv([$t1, $t3], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t3], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t3], "SetVariable", ["ContractID", (await $.wv([$t1, $t3], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t3], "Open", [], C));
    }
    {
      const $t4 = (await $.wv([$t1], "CustAcc", C, false));
      if ($.truthy((await $.wv([$t1, $t4], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t4], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t4], "SetVariable", ["ContractID", (await $.wv([$t1, $t4], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t4], "Open", [], C));
      await $.wset([$t1, $t4], "CustAccID", (await $.mv((await $.wcall([$t1, $t4], "FieldByName", ["ClientACCID"], C)), "AsInteger")), { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true });
    }
    {
      const $t5 = (await $.wv([$t1], "CreditAccs", C, false));
      if ($.truthy($.not((await $.wv([$t1, $t5], "Active", C, false))))) {
        await $.stmt($.wcall([$t1, $t5], "Open", [], C));
      }
      if ($.truthy((await $.wcall([$t1, $t5], "Locate", ["ID", (await $.wv([$t1, $t5], "CustAccID", { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true }, false)), []], C)))) {
        await $.mset((await $.mv((await $.wv([$t1, $t5], "CRAfrmAddExtractMoney", C, false)), "AccountListCB")), "KeyValue", (await $.wv([$t1, $t5], "CustAccID", { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true }, false)));
      }
    }
  }
  {
    const $t6 = (await $.v(C, "CRAfrmExtractMoney"));
    await $.wset([$t6], "Caption", $.add((await $.wv([$t6], "Get_SelectedContNo", C, false)), " nömrəli depozitin ödənişləri"), C);
    await $.stmt($.wcall([$t6], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmExtractMoney", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmExtractMoney", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmExtractMoney", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CRADMExtractMoney", (await $.mcall((await $.v(C, "TDMExtractMoney")), "Create", [Self])));
  await $.set(C, "CRAfrmAddExtractMoney", (await $.mcall((await $.v(C, "TfrmAddExtractMoney")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmExtractMoney", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CRADMExtractMoney")), "Free", []);
  await $.mcall((await $.v(C, "CRAfrmAddExtractMoney")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmExtractMoney", "ActnAddExecute", async function ActnAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CRAfrmAddExtractMoney")), "ShowModal")), (await $.v(C, "mrOk"))))) {
    await $.set(C, "RefreshAfterOperation", true);
    await $.mcall((await $.mv((await $.v(C, "CRADMExtractMoney")), "Payments")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmExtractMoney", "ActnDelExecute", async function ActnDelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_checkbefointtrid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Silinməsinə əminsinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNo"))))) {
    return L0.result;
  }
  {
    const $t7 = (await $.v(C, "CRADMExtractMoney"));
    const $t8 = (await $.wv([$t7], "Payments", C, false));
    const $t9 = (await $.wv([$t7, $t8], "cra_contract", C, false));
    await $.stmt((await $.wcall([$t7, $t8, $t9], "CallProcedure", ["DeleteWithDrawMoney", ["P_DepWMoneyID", (await $.mv((await $.wcall([$t7, $t8, $t9], "FieldByName", ["ID"], C)), "AsInteger"))]], C)));
    await $.stmt($.wcall([$t7, $t8, $t9], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmExtractMoney", "ToolButton9Click", async function ToolButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmExtractMoney", "ActnExprtExecute", async function ActnExprtExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t10], "Connect", [], C));
    await $.stmt((await $.wcall([$t10], "ExportDataset", [(await $.mv((await $.wv([$t10], "CRADMExtractMoney", C, false)), "Payments")), "Ödənilmiş əmanətlər", (await $.wv([$t10], "True", C, false)), (await $.wv([$t10], "false", C, false))], C)));
    await $.stmt($.wcall([$t10], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmExtractMoney", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "RefreshAfterOperation")))) {
    await $.stmt((await $.call(C, "RefreshWithSavely", [true])));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TfrmExtractMoney", "ActnDelUpdate", async function ActnDelUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (L0["sender"]);
    await $.wset([$t11], "Enabled", $.gt((await $.mv((await $.mv((await $.wv([$t11], "CRADMExtractMoney", C, false)), "Payments")), "RecordCount")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmExtractMoney", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "trid": ''};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "CRAfrmExtractMoney", (await $.mcall((await $.v(C, "TfrmExtractMoney")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
