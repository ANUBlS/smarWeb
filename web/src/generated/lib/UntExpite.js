// Generated from UntExpite.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntExpite", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "ComCtrls", "CurrencyEdit", "DBViewComboBox", "StoredProgramsUnit", "sbcmMainDataModule", "UntExpireDataModule"]);
  const C = [U];
  U.defClass("TFrmExpire", "TForm", {"panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "statictext7": {"name": "StaticText7", "type": "TStaticText"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "btnapplyexpire": {"name": "BtnApplyExpire", "type": "TButton"}, "btncancel": {"name": "BtnCancel", "type": "TButton"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "statictext9": {"name": "StaticText9", "type": "TStaticText"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "dtpexpiredate": {"name": "DTPExpireDate", "type": "TDateTimePicker"}, "cbusetransactions": {"name": "cbUseTransactions", "type": "TCheckBox"}, "facticaldebtedit": {"name": "FacticalDebtEdit", "type": "TCurrencyEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "statictext8": {"name": "StaticText8", "type": "TStaticText"}, "expireddebtedit": {"name": "ExpiredDebtEdit", "type": "TCurrencyEdit"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "statictext10": {"name": "StaticText10", "type": "TStaticText"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "groupbox12": {"name": "GroupBox12", "type": "TGroupBox"}, "statictext11": {"name": "StaticText11", "type": "TStaticText"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "groupbox14": {"name": "GroupBox14", "type": "TGroupBox"}, "statictext13": {"name": "StaticText13", "type": "TStaticText"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "cbreliabilitypercent": {"name": "CBReliabilityPercent", "type": "TDBViewComboBox"}, "cboverduereliabilitypercent": {"name": "CBOverdueReliabilityPercent", "type": "TDBViewComboBox"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "fcontractid": {"name": "FContractID", "type": "LongInt"}}, {});
  U.init(async () => {
    U.var_("FrmExpire", null, "TFrmExpire");
  });
  U.method("TFrmExpire", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModExpire", (await $.mcall((await $.v(C, "TDataModExpire")), "Create", [Self])));
  await $.mset((await $.v(C, "DTPExpireDate")), "DateTime", (await $.v(C, "GetBankDate")));
  await $.set(C, "Caption", $.add("Expire of contract №  ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainDataModule")), "Contracts")), "FieldByName", ["ContractNo"])), "AsString"))));
  await $.mset((await $.v(C, "FacticalDebtEdit")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainDataModule")), "Contracts")), "FieldByName", ["FacticalDebt"])), "AsCurrency")));
  await $.mset((await $.v(C, "CBUseTransactions")), "Checked", $.eq((await $.call(C, "SBCMGetOption", ["cmrAutoTransactionExpire"])), "ON"));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmExpire", "BtnApplyExpireClick", async function BtnApplyExpireClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "usetransactions": false, "changeprimaryreserve": false, "changesecondaryreserve": false, "facticaldebt": 0, "expireddebt": 0, "hdate": 0, "newprimaryreserveid": 0, "newsecondaryreserveid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["hdate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPExpireDate")), "DateTime"))]));
  L0["facticaldebt"] = (await $.mv((await $.v(C, "FacticalDebtEdit")), "Value"));
  L0["expireddebt"] = (await $.mv((await $.v(C, "ExpiredDebtEdit")), "Value"));
  L0["changeprimaryreserve"] = true;
  L0["changesecondaryreserve"] = true;
  L0["usetransactions"] = (await $.mv((await $.v(C, "cbUseTransactions")), "Checked"));
  L0["newprimaryreserveid"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CBReliabilityPercent")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"));
  L0["newsecondaryreserveid"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CBOverdueReliabilityPercent")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"));
  {
    const $t1 = (await $.mv((await $.v(C, "DataModExpire")), "ExpirePackage"));
    await $.stmt((await $.wcall([$t1], "CallProcedure", ["AddExpire", [(await $.wv([$t1], "FContractID", C, false)), (await $.wv([$t1], "HDate", { get: async () => L0["hdate"], set: async (v) => { L0["hdate"] = v; }, local: true }, false)), (await $.wv([$t1], "FacticalDebt", { get: async () => L0["facticaldebt"], set: async (v) => { L0["facticaldebt"] = v; }, local: true }, false)), (await $.wv([$t1], "ExpiredDebt", { get: async () => L0["expireddebt"], set: async (v) => { L0["expireddebt"] = v; }, local: true }, false)), (await $.wv([$t1], "newPrimaryReserveID", { get: async () => L0["newprimaryreserveid"], set: async (v) => { L0["newprimaryreserveid"] = v; }, local: true }, false)), (await $.wv([$t1], "newSecondaryReserveID", { get: async () => L0["newsecondaryreserveid"], set: async (v) => { L0["newsecondaryreserveid"] = v; }, local: true }, false)), (await $.wv([$t1], "changePrimaryReserve", { get: async () => L0["changeprimaryreserve"], set: async (v) => { L0["changeprimaryreserve"] = v; }, local: true }, false)), (await $.wv([$t1], "changeSecondaryReserve", { get: async () => L0["changesecondaryreserve"], set: async (v) => { L0["changesecondaryreserve"] = v; }, local: true }, false)), (await $.wv([$t1], "useTransactions", { get: async () => L0["usetransactions"], set: async (v) => { L0["usetransactions"] = v; }, local: true }, false))]], C)));
  }
  await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmExpire", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "clientaccid": 0, "overdueaccid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModExpire")), "ReliabilityPercentData")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModExpire")), "OverdueReserveData")), "Open", []);
  await $.stmt((await $.call(C, "DTPExpireDateExit", [(await $.v(C, "DTPExpireDate"))])));
  {
    const $t2 = (await $.mv((await $.v(C, "MainDataModule")), "Contracts"));
    await $.wset([$t2], "ClientAccID", (await $.mv((await $.wcall([$t2], "FieldByName", ["ClientAccID"], C)), "AsInteger")), { get: async () => L0["clientaccid"], set: async (v) => { L0["clientaccid"] = v; }, local: true });
    await $.wset([$t2], "OverdueAccID", (await $.mv((await $.wcall([$t2], "FieldByName", ["OverdueAccID"], C)), "AsInteger")), { get: async () => L0["overdueaccid"], set: async (v) => { L0["overdueaccid"] = v; }, local: true });
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModExpire")), "MainReserve")), "SetVariable", ["id", (await $.v(C, "FContractID"))])));
  await $.mcall((await $.mv((await $.v(C, "DataModExpire")), "MainReserve")), "Open", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModExpire")), "ExpiredReserve")), "SetVariable", ["id", (await $.v(C, "FContractID"))])));
  await $.mcall((await $.mv((await $.v(C, "DataModExpire")), "ExpiredReserve")), "Open", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "CBReliabilityPercent")), "ListSource")), "DataSet")), "Locate", ["id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExpire")), "MainReserve")), "FieldByName", ["ID"])), "AsInteger")), []])));
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "CBOverdueReliabilityPercent")), "ListSource")), "DataSet")), "Locate", ["id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExpire")), "ExpiredReserve")), "FieldByName", ["ID"])), "AsInteger")), []])));
  {
    const $t3 = (await $.v(C, "DataModExpire"));
    {
      const $t4 = (await $.wv([$t3], "OverdueAccData", C, false));
      await $.stmt((await $.wcall([$t3, $t4], "SetVariable", ["ClientAccID", (await $.wv([$t3, $t4], "OverdueAccID", { get: async () => L0["overdueaccid"], set: async (v) => { L0["overdueaccid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t3, $t4], "Open", [], C));
    }
    {
      const $t5 = (await $.wv([$t3], "ClientAccData", C, false));
      await $.stmt((await $.wcall([$t3, $t5], "SetVariable", ["ClientAccID", (await $.wv([$t3, $t5], "ClientAccID", { get: async () => L0["clientaccid"], set: async (v) => { L0["clientaccid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t3, $t5], "Open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmExpire", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["action"].set((await $.v(C, "caFree")));
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmExpire", "DTPExpireDateExit", async function DTPExpireDateExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CBUseTransactions")), "Enabled", $.ge((await $.mv((L0["sender"]), "DateTime")), (await $.v(C, "GetBankDate"))));
  await $.mset((await $.v(C, "CBUseTransactions")), "Checked", $.ge((await $.mv((L0["sender"]), "DateTime")), (await $.v(C, "GetBankDate"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmExpire", "FacticalDebtEditChange", async function FacticalDebtEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ExpiredDebtEdit")), "Value", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmExpire", "ExpiredDebtEditChange", async function ExpiredDebtEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FacticalDebtEdit")), "Value", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
