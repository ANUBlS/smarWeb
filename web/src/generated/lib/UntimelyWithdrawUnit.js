// Generated from UntimelyWithdrawUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntimelyWithdrawUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "Buttons", "DBCtrls", "Mask", "CurrencyEdit", "DepositDataModuleUnit", "DataModuleUWUnit", "StoredProgramsUnit"]);
  const C = [U];
  U.defClass("TFrmUntimelyWithdraw", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "btncancel": {"name": "BtnCancel", "type": "TBitBtn"}, "btnok": {"name": "BtnOk", "type": "TBitBtn"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "editdaysinterval": {"name": "EditDaysInterval", "type": "TStaticText"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "groupbox12": {"name": "GroupBox12", "type": "TGroupBox"}, "statictext7": {"name": "StaticText7", "type": "TStaticText"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "groupbox14": {"name": "GroupBox14", "type": "TGroupBox"}, "statictext8": {"name": "StaticText8", "type": "TStaticText"}, "groupbox15": {"name": "GroupBox15", "type": "TGroupBox"}, "statictext9": {"name": "StaticText9", "type": "TStaticText"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "groupbox13": {"name": "GroupBox13", "type": "TGroupBox"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "currencyedit3": {"name": "CurrencyEdit3", "type": "TCurrencyEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "groupbox16": {"name": "GroupBox16", "type": "TGroupBox"}, "statictext11": {"name": "StaticText11", "type": "TStaticText"}, "groupbox17": {"name": "GroupBox17", "type": "TGroupBox"}, "statictext12": {"name": "StaticText12", "type": "TStaticText"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "groupbox18": {"name": "GroupBox18", "type": "TGroupBox"}, "statictext13": {"name": "StaticText13", "type": "TStaticText"}, "otherdepositsdbedit": {"name": "OtherDepositsDBEdit", "type": "TDBEdit"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "currentdateedit": {"name": "CurrentDateEdit", "type": "TEdit"}, "totaldebtcurrencyedit": {"name": "TotalDebtCurrencyEdit", "type": "TCurrencyEdit"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "totalcalcedpercentsedit": {"name": "TotalCalcedPercentsEdit", "type": "TCurrencyEdit"}, "paidamountedit": {"name": "PaidAmountEdit", "type": "TCurrencyEdit"}, "fcontractid": {"name": "FContractID", "type": "LongInt"}}, {});
  U.init(async () => {
    U.var_("FrmUntimelyWithdraw", null, "TFrmUntimelyWithdraw");
  });
  U.method("TFrmUntimelyWithdraw", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "UWDataModule", (await $.mcall((await $.v(C, "TUWDataModule")), "Create", [Self])));
  await $.set(C, "Caption", $.add((await $.v(C, "Caption")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DepositDataModule")), "Deposits")), "FieldByName", ["ContractNO"])), "AsString"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmUntimelyWithdraw", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmUntimelyWithdraw", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "daysinterval": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "UWDataModule")), "ContractTypeData"));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["ID", (await $.wv([$t1], "FContractID", C, false))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  {
    const $t2 = (await $.mv((await $.v(C, "UWDataModule")), "OtherDeposits"));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["ContractID", (await $.wv([$t2], "FContractID", C, false))], C)));
    await $.stmt($.wcall([$t2], "Open", [], C));
    await $.mset((await $.wv([$t2], "OtherDepositsDBEdit", C, false)), "Enabled", $.not(((await $.mv((await $.wcall([$t2], "FieldByName", ["TotalDeposits"], C)), "IsNull")))));
    if ($.truthy((await $.mv((await $.wv([$t2], "OtherDepositsDBEdit", C, false)), "Enabled")))) {
      await $.mset((await $.wv([$t2], "OtherDepositsDBEdit", C, false)), "Color", (await $.wv([$t2], "clWhite", C, false)));
    } else {
      await $.mset((await $.wv([$t2], "OtherDepositsDBEdit", C, false)), "Color", (await $.wv([$t2], "clInactiveCaption", C, false)));
    }
  }
  {
    const $t3 = (await $.mv((await $.v(C, "DepositDataModule")), "Deposits"));
    await $.mset((await $.wv([$t3], "TotalDebtCurrencyEdit", C, false)), "Value", $.add((await $.mv((await $.wcall([$t3], "FieldByName", ["FacticalDebt"], C)), "AsCurrency")), (await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "UWDataModule", C, false)), "OtherDeposits")), "FieldByName", ["TotalDeposits"])), "AsCurrency"))));
    await $.mset((await $.wv([$t3], "TotalCalcedPercentsEdit", C, false)), "Value", (await $.mv((await $.wcall([$t3], "FieldByName", ["TotalCalcedInterest"], C)), "AsCurrency")));
    await $.wset([$t3], "DaysInterval", (await $.wcall([$t3], "Trunc", [$.sub((await $.wv([$t3], "GetBankDate", C, false)), (await $.mv((await $.wcall([$t3], "FieldByName", ["OpenDate"], C)), "AsDateTime")))], C)), { get: async () => L0["daysinterval"], set: async (v) => { L0["daysinterval"] = v; }, local: true });
  }
  await $.mset((await $.v(C, "EditDaysInterval")), "Caption", (await $.call(C, "IntToStr", [L0["daysinterval"]])));
  await $.mset((await $.v(C, "CurrentDateEdit")), "Text", (await $.call(C, "DateToStr", [(await $.v(C, "GetBankDate"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmUntimelyWithdraw", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.mv((await $.v(C, "UWDataModule")), "ContractTypeData"));
    await $.stmt($.wcall([$t4], "CloseAll", [], C));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmUntimelyWithdraw", "TotalCalcedPercentsEditKeyPress", async function TotalCalcedPercentsEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
