// Generated from UntContractState.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntContractState", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "Grids", "DBGrids", "DBCGrids", "Mask", "DBCtrls", "ComCtrls", "Oracle", "OracleData", "Menus", "sbcmMainDataModule", "UnitStateDataModule", "OrderUnit"]);
  const C = [U];
  U.defClass("TFrmContractState", "TForm", {"pagecontrol": {"name": "PageControl", "type": "TPageControl"}, "tsheettranches": {"name": "TSheetTranches", "type": "TTabSheet"}, "tsheetpayments": {"name": "TSheetPayments", "type": "TTabSheet"}, "tsheetprolongations": {"name": "TSheetProlongations", "type": "TTabSheet"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext7": {"name": "StaticText7", "type": "TStaticText"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "paymentpopupmenu": {"name": "PaymentPopupMenu", "type": "TPopupMenu"}, "miprintpaymentorder": {"name": "miPrintPaymentOrder", "type": "TMenuItem"}, "fcontractid": {"name": "FContractID", "type": "LongInt"}}, {});
  U.init(async () => {
    U.var_("FrmContractState", null, "TFrmContractState");
  });
  U.method("TFrmContractState", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Caption", $.add("Traffic of Contract. №  ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainDataModule")), "Contracts")), "FieldByName", ["ContractNo"])), "AsString"))));
  {
    const $t1 = (await $.mv((await $.v(C, "TrafficDataModule")), "TranchesData"));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["ID#", (await $.wv([$t1], "FContractID", C, false))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  {
    const $t2 = (await $.mv((await $.v(C, "TrafficDataModule")), "PaymentsData"));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["ID#", (await $.wv([$t2], "FContractID", C, false))], C)));
    await $.stmt($.wcall([$t2], "Open", [], C));
  }
  {
    const $t3 = (await $.mv((await $.v(C, "TrafficDataModule")), "ProlongationsData"));
    await $.stmt((await $.wcall([$t3], "SetVariable", ["ID#", (await $.wv([$t3], "FContractID", C, false))], C)));
    await $.stmt($.wcall([$t3], "Open", [], C));
  }
  await $.mcall((await $.mv((await $.v(C, "TrafficDataModule")), "CustomerData")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContractState", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "TrafficDataModule", (await $.mcall((await $.v(C, "TTrafficDataModule")), "Create", [Self])));
  await $.set(C, "PaymentOrder", (await $.mcall((await $.v(C, "TPaymentOrder")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContractState", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmContractState", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "TrafficDataModule")), "TranchesData")), "CloseAll", []);
  await $.mcall((await $.mv((await $.v(C, "TrafficDataModule")), "PaymentsData")), "CloseAll", []);
  await $.mcall((await $.mv((await $.v(C, "TrafficDataModule")), "ProlongationsData")), "CloseAll", []);
  await $.mcall((await $.mv((await $.v(C, "TrafficDataModule")), "Rates")), "CloseAll", []);
  await $.mcall((await $.mv((await $.v(C, "TrafficDataModule")), "PaymentOrderData")), "CloseAll", []);
  await $.mcall((await $.mv((await $.v(C, "TrafficDataModule")), "CustomerData")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmContractState", "miPrintPaymentOrderClick", async function miPrintPaymentOrderClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "currentid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["currentid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "TrafficDataModule")), "PaymentsData")), "FieldByName", ["ID"])), "AsInteger"));
  {
    const $t4 = (await $.mv((await $.v(C, "TrafficDataModule")), "PaymentsData"));
    try {
      await $.wset([$t4], "Filter", $.add("ID = ", (await $.wcall([$t4], "IntToStr", [(await $.wv([$t4], "CurrentID", { get: async () => L0["currentid"], set: async (v) => { L0["currentid"] = v; }, local: true }, false))], C))), C);
      await $.wset([$t4], "Filtered", (await $.wv([$t4], "True", C, false)), C);
      {
        const $t5 = (await $.mv((await $.wv([$t4], "TrafficDataModule", C, false)), "PaymentOrderData"));
        await $.stmt((await $.wcall([$t4, $t5], "SetVariable", ["ContractID", (await $.wv([$t4, $t5], "FContractID", C, false))], C)));
        await $.stmt($.wcall([$t4, $t5], "Open", [], C));
      }
      {
        const $t6 = (await $.wv([$t4], "PaymentOrder", C, false));
        await $.mset((await $.wv([$t4, $t6], "FacticalDebtChild", C, false)), "Enabled", $.ne((await $.mv((await $.wcall([$t4, $t6], "FieldByName", ["FacticalDebt"], C)), "AsFloat")), 0));
        await $.mset((await $.wv([$t4, $t6], "FacticalInterestDebtChild", C, false)), "Enabled", $.ne((await $.mv((await $.wcall([$t4, $t6], "FieldByName", ["InterestDebt"], C)), "AsFloat")), 0));
        await $.mset((await $.wv([$t4, $t6], "OverdueDebtChild", C, false)), "Enabled", $.ne((await $.mv((await $.wcall([$t4, $t6], "FieldByName", ["OverdueDebt"], C)), "AsFloat")), 0));
        await $.mset((await $.wv([$t4, $t6], "OverdueInterestDebtChild", C, false)), "Enabled", $.ne((await $.mv((await $.wcall([$t4, $t6], "FieldByName", ["OverdueInterestDebt"], C)), "AsFloat")), 0));
        await $.stmt($.wcall([$t4, $t6], "Preview", [], C));
      }
    } finally {
      await $.wset([$t4], "Filter", "", C);
      await $.wset([$t4], "Filtered", (await $.wv([$t4], "False", C, false)), C);
      await $.mcall((await $.mv((await $.wv([$t4], "TrafficDataModule", C, false)), "PaymentOrderData")), "CloseAll", []);
      await $.stmt((await $.wcall([$t4], "Locate", ["ID", (await $.wv([$t4], "CurrentID", { get: async () => L0["currentid"], set: async (v) => { L0["currentid"] = v; }, local: true }, false)), []], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
