// Generated from UntPayments.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntPayments", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "CurrencyEdit", "StoredProgramsUnit", "sbcmMainDataModule", "UntPaymentsDataModule"]);
  const C = [U];
  U.defClass("TFrmPayments", "TForm", {"panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "statictext7": {"name": "StaticText7", "type": "TStaticText"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "groupbox17": {"name": "GroupBox17", "type": "TGroupBox"}, "statictext17": {"name": "StaticText17", "type": "TStaticText"}, "dbedit17": {"name": "DBEdit17", "type": "TDBEdit"}, "groupbox18": {"name": "GroupBox18", "type": "TGroupBox"}, "statictext18": {"name": "StaticText18", "type": "TStaticText"}, "dbedit18": {"name": "DBEdit18", "type": "TDBEdit"}, "groupbox19": {"name": "GroupBox19", "type": "TGroupBox"}, "statictext19": {"name": "StaticText19", "type": "TStaticText"}, "dbedit19": {"name": "DBEdit19", "type": "TDBEdit"}, "groupbox20": {"name": "GroupBox20", "type": "TGroupBox"}, "statictext20": {"name": "StaticText20", "type": "TStaticText"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "statictext8": {"name": "StaticText8", "type": "TStaticText"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "statictext9": {"name": "StaticText9", "type": "TStaticText"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "statictext10": {"name": "StaticText10", "type": "TStaticText"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "statictext11": {"name": "StaticText11", "type": "TStaticText"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "groupbox12": {"name": "GroupBox12", "type": "TGroupBox"}, "statictext12": {"name": "StaticText12", "type": "TStaticText"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "groupbox13": {"name": "GroupBox13", "type": "TGroupBox"}, "statictext13": {"name": "StaticText13", "type": "TStaticText"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "groupbox14": {"name": "GroupBox14", "type": "TGroupBox"}, "statictext14": {"name": "StaticText14", "type": "TStaticText"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEdit"}, "groupbox15": {"name": "GroupBox15", "type": "TGroupBox"}, "statictext15": {"name": "StaticText15", "type": "TStaticText"}, "dbedit13": {"name": "DBEdit13", "type": "TDBEdit"}, "groupbox16": {"name": "GroupBox16", "type": "TGroupBox"}, "statictext16": {"name": "StaticText16", "type": "TStaticText"}, "groupbox21": {"name": "GroupBox21", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbedit14": {"name": "DBEdit14", "type": "TDBEdit"}, "dbedit15": {"name": "DBEdit15", "type": "TDBEdit"}, "cbusetransaction": {"name": "CBUseTransaction", "type": "TCheckBox"}, "facticaldebtpaymentedit": {"name": "FacticalDebtPaymentEdit", "type": "TCurrencyEdit"}, "facticalinterestdebtpaymentedit": {"name": "FacticalInterestDebtPaymentEdit", "type": "TCurrencyEdit"}, "overduedebtpaymentedit": {"name": "OverdueDebtPaymentEdit", "type": "TCurrencyEdit"}, "overdueinterestdebtpaymentedit": {"name": "OverdueInterestDebtPaymentEdit", "type": "TCurrencyEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "btnapplypayment": {"name": "BtnApplyPayment", "type": "TButton"}, "btnclose": {"name": "BtnClose", "type": "TButton"}, "fcontractid": {"name": "FContractID", "type": "LongInt"}}, {});
  U.init(async () => {
    U.var_("FrmPayments", null, "TFrmPayments");
  });
  U.method("TFrmPayments", "BtnApplyPaymentClick", async function BtnApplyPaymentClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "facticaldebt": 0, "overduedebt": 0, "facticalinterestdebt": 0, "overdueinterestdebt": 0, "canpayment": false, "usetransaction": false};
  await $.fixArgs(L0, ["sender"]);
  L0["facticaldebt"] = (await $.mv((await $.v(C, "FacticalDebtPaymentEdit")), "Value"));
  L0["overduedebt"] = (await $.mv((await $.v(C, "OverdueDebtPaymentEdit")), "Value"));
  L0["facticalinterestdebt"] = (await $.mv((await $.v(C, "FacticalInterestDebtPaymentEdit")), "Value"));
  L0["overdueinterestdebt"] = (await $.mv((await $.v(C, "OverdueInterestDebtPaymentEdit")), "Value"));
  L0["canpayment"] = $.ne(($.add($.add($.add(L0["facticaldebt"], L0["overduedebt"]), L0["facticalinterestdebt"]), L0["overdueinterestdebt"])), 0);
  L0["usetransaction"] = (await $.mv((await $.v(C, "CBUseTransaction")), "Checked"));
  if ($.truthy(L0["canpayment"])) {
    {
      const $t1 = (await $.mv((await $.v(C, "DataModPayments")), "PaymentsPackage"));
      await $.stmt((await $.wcall([$t1], "CallProcedure", ["AddPayment", [(await $.wv([$t1], "FContractID", C, false)), (await $.wv([$t1], "GetBankDate", C, false)), (await $.wv([$t1], "FacticalDebt", { get: async () => L0["facticaldebt"], set: async (v) => { L0["facticaldebt"] = v; }, local: true }, false)), (await $.wv([$t1], "OverdueDebt", { get: async () => L0["overduedebt"], set: async (v) => { L0["overduedebt"] = v; }, local: true }, false)), (await $.wv([$t1], "FacticalInterestDebt", { get: async () => L0["facticalinterestdebt"], set: async (v) => { L0["facticalinterestdebt"] = v; }, local: true }, false)), (await $.wv([$t1], "OverdueInterestDebt", { get: async () => L0["overdueinterestdebt"], set: async (v) => { L0["overdueinterestdebt"] = v; }, local: true }, false)), (await $.wv([$t1], "UseTransaction", { get: async () => L0["usetransaction"], set: async (v) => { L0["usetransaction"] = v; }, local: true }, false))]], C)));
    }
    await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Senseless Payment!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPayments", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModPayments", (await $.mcall((await $.v(C, "TDataModPayments")), "Create", [Self])));
  await $.set(C, "Caption", $.add("Payments for contract № ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainDataModule")), "Contracts")), "FieldByName", ["ContractNo"])), "AsString"))));
  await $.mset((await $.v(C, "CBUseTransaction")), "Checked", $.eq((await $.call(C, "SBCMGetOption", ["cmrAutoTransactionPayment"])), "ON"));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPayments", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "clientaccid": 0, "overdueaccid": 0, "interestaccid": 0, "ointerestaccid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.mv((await $.v(C, "MainDataModule")), "Contracts"));
    await $.wset([$t2], "ClientAccID", (await $.mv((await $.wcall([$t2], "FieldByName", ["ClientAccID"], C)), "AsInteger")), { get: async () => L0["clientaccid"], set: async (v) => { L0["clientaccid"] = v; }, local: true });
    await $.wset([$t2], "OverdueAccID", (await $.mv((await $.wcall([$t2], "FieldByName", ["OverdueAccID"], C)), "AsInteger")), { get: async () => L0["overdueaccid"], set: async (v) => { L0["overdueaccid"] = v; }, local: true });
    await $.wset([$t2], "InterestAccID", (await $.mv((await $.wcall([$t2], "FieldByName", ["InterestAccID"], C)), "AsInteger")), { get: async () => L0["interestaccid"], set: async (v) => { L0["interestaccid"] = v; }, local: true });
    await $.wset([$t2], "OInterestAccID", (await $.mv((await $.wcall([$t2], "FieldByName", ["OverdueInterestAccID"], C)), "AsInteger")), { get: async () => L0["ointerestaccid"], set: async (v) => { L0["ointerestaccid"] = v; }, local: true });
  }
  {
    const $t3 = (await $.v(C, "DataModPayments"));
    {
      const $t4 = (await $.wv([$t3], "AccountRests", C, false));
      await $.stmt((await $.wcall([$t3, $t4], "SetVariable", ["AccID", (await $.wv([$t3, $t4], "ClientAccID", { get: async () => L0["clientaccid"], set: async (v) => { L0["clientaccid"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t3, $t4], "SetVariable", ["HDate", (await $.wv([$t3, $t4], "GetBankDate", C, false))], C)));
      await $.stmt($.wcall([$t3, $t4], "Open", [], C));
    }
    {
      const $t5 = (await $.wv([$t3], "ClentAccData", C, false));
      await $.stmt((await $.wcall([$t3, $t5], "SetVariable", ["ClientAccID", (await $.wv([$t3, $t5], "ClientAccID", { get: async () => L0["clientaccid"], set: async (v) => { L0["clientaccid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t3, $t5], "Open", [], C));
    }
    {
      const $t6 = (await $.wv([$t3], "OverdueAccData", C, false));
      await $.stmt((await $.wcall([$t3, $t6], "SetVariable", ["ClientAccID", (await $.wv([$t3, $t6], "OverdueAccID", { get: async () => L0["overdueaccid"], set: async (v) => { L0["overdueaccid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t3, $t6], "Open", [], C));
    }
    {
      const $t7 = (await $.wv([$t3], "InterestAccData", C, false));
      await $.stmt((await $.wcall([$t3, $t7], "SetVariable", ["ClientAccID", (await $.wv([$t3, $t7], "InterestAccID", { get: async () => L0["interestaccid"], set: async (v) => { L0["interestaccid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t3, $t7], "Open", [], C));
    }
    {
      const $t8 = (await $.wv([$t3], "OInterestAccData", C, false));
      await $.stmt((await $.wcall([$t3, $t8], "SetVariable", ["ClientAccID", (await $.wv([$t3, $t8], "OInterestAccID", { get: async () => L0["ointerestaccid"], set: async (v) => { L0["ointerestaccid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t3, $t8], "Open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPayments", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModPayments")), "AccountRests")), "Close", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmPayments", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.mcall((await $.v(C, "BtnClose")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
