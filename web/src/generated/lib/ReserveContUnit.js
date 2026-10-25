// Generated from ReserveContUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ReserveContUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBViewComboBox", "CurrencyEdit", "Mask", "DBCtrls", "ExtCtrls", "StoredProgramsUnit", "sbcmMainDataModule", "UntExpireDataModule"]);
  const C = [U];
  U.defClass("TFrmReserveCont", "TForm", {"panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "statictext7": {"name": "StaticText7", "type": "TStaticText"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "btnapplyexpire": {"name": "BtnApplyExpire", "type": "TButton"}, "btncancel": {"name": "BtnCancel", "type": "TButton"}, "cbusetransactions": {"name": "cbUseTransactions", "type": "TCheckBox"}, "cbchangesecondaryresreve": {"name": "cbChangeSecondaryResreve", "type": "TCheckBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "statictext8": {"name": "StaticText8", "type": "TStaticText"}, "expiredreserveedit": {"name": "ExpiredReserveEdit", "type": "TCurrencyEdit"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "statictext10": {"name": "StaticText10", "type": "TStaticText"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "cbchangeprimaryresreve": {"name": "cbChangePrimaryResreve", "type": "TCheckBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "groupbox12": {"name": "GroupBox12", "type": "TGroupBox"}, "statictext11": {"name": "StaticText11", "type": "TStaticText"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "groupbox14": {"name": "GroupBox14", "type": "TGroupBox"}, "statictext13": {"name": "StaticText13", "type": "TStaticText"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "cbreliabilitypercent": {"name": "CBReliabilityPercent", "type": "TDBViewComboBox"}, "cboverduereliabilitypercent": {"name": "CBOverdueReliabilityPercent", "type": "TDBViewComboBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "facticalreserveedit": {"name": "FacticalReserveEdit", "type": "TCurrencyEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "fcontractid": {"name": "FContractID", "type": "Integer"}}, {});
  U.init(async () => {
    U.var_("FrmReserveCont", null, "TFrmReserveCont");
  });
  U.method("TFrmReserveCont", "cbChangePrimaryResreveClick", async function cbChangePrimaryResreveClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CBReliabilityPercent")), "Enabled", (await $.mv((L0["sender"]), "Checked")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmReserveCont", "cbChangeSecondaryResreveClick", async function cbChangeSecondaryResreveClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CBOverdueReliabilityPercent")), "Enabled", (await $.mv((L0["sender"]), "Checked")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmReserveCont", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModExpire", (await $.mcall((await $.v(C, "TDataModExpire")), "Create", [Self])));
  await $.set(C, "Caption", $.add("Reserve contoller of contract №  ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainDataModule")), "Contracts")), "FieldByName", ["ContractNo"])), "AsString"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmReserveCont", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "clientaccid": 0, "preserveaccid": 0, "sreserveaccid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "MainDataModule")), "Contracts"));
    await $.wset([$t1], "ClientAccID", (await $.mv((await $.wcall([$t1], "FieldByName", ["ClientAccID"], C)), "AsInteger")), { get: async () => L0["clientaccid"], set: async (v) => { L0["clientaccid"] = v; }, local: true });
    await $.wset([$t1], "PReserveAccID", (await $.mv((await $.wcall([$t1], "FieldByName", ["ReserveAccID"], C)), "AsInteger")), { get: async () => L0["preserveaccid"], set: async (v) => { L0["preserveaccid"] = v; }, local: true });
    await $.wset([$t1], "SReserveAccID", (await $.mv((await $.wcall([$t1], "FieldByName", ["OverdueReserveAccID"], C)), "AsInteger")), { get: async () => L0["sreserveaccid"], set: async (v) => { L0["sreserveaccid"] = v; }, local: true });
  }
  await $.mcall((await $.mv((await $.v(C, "DataModExpire")), "ReliabilityPercentData")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModExpire")), "OverdueReserveData")), "Open", []);
  await $.mset((await $.v(C, "CBReliabilityPercent")), "Enabled", (await $.mv((await $.v(C, "cbChangePrimaryResreve")), "Checked")));
  await $.mset((await $.v(C, "CBOverdueReliabilityPercent")), "Enabled", (await $.mv((await $.v(C, "cbChangeSecondaryResreve")), "Checked")));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModExpire")), "MainReserve")), "SetVariable", ["id", (await $.v(C, "FContractID"))])));
  await $.mcall((await $.mv((await $.v(C, "DataModExpire")), "MainReserve")), "Open", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModExpire")), "ExpiredReserve")), "SetVariable", ["id", (await $.v(C, "FContractID"))])));
  await $.mcall((await $.mv((await $.v(C, "DataModExpire")), "ExpiredReserve")), "Open", []);
  await $.mset((await $.v(C, "FacticalReserveEdit")), "Value", $.fdiv($.mul((await $.mv((await $.mcall((await $.mv((await $.v(C, "MainDataModule")), "Contracts")), "FieldByName", ["FacticalDebt"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExpire")), "MainReserve")), "FieldByName", ["Percent"])), "AsFloat"))), 100));
  await $.mset((await $.v(C, "ExpiredReserveEdit")), "Value", $.fdiv($.mul((await $.mv((await $.mcall((await $.mv((await $.v(C, "MainDataModule")), "Contracts")), "FieldByName", ["OverdueDebt"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExpire")), "ExpiredReserve")), "FieldByName", ["Percent"])), "AsFloat"))), 100));
  {
    const $t2 = (await $.v(C, "DataModExpire"));
    {
      const $t3 = (await $.wv([$t2], "ClientAccData", C, false));
      await $.stmt((await $.wcall([$t2, $t3], "SetVariable", ["ClientAccID", (await $.wv([$t2, $t3], "ClientAccID", { get: async () => L0["clientaccid"], set: async (v) => { L0["clientaccid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t2, $t3], "Open", [], C));
    }
    {
      const $t4 = (await $.wv([$t2], "PReserveData", C, false));
      await $.stmt((await $.wcall([$t2, $t4], "SetVariable", ["ClientAccID", (await $.wv([$t2, $t4], "PReserveAccID", { get: async () => L0["preserveaccid"], set: async (v) => { L0["preserveaccid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t2, $t4], "Open", [], C));
    }
    {
      const $t5 = (await $.wv([$t2], "SReserveData", C, false));
      await $.stmt((await $.wcall([$t2, $t5], "SetVariable", ["ClientAccID", (await $.wv([$t2, $t5], "SReserveAccID", { get: async () => L0["sreserveaccid"], set: async (v) => { L0["sreserveaccid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t2, $t5], "Open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmReserveCont", "BtnApplyExpireClick", async function BtnApplyExpireClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "contractid": 0, "hdate": 0, "changepreserve": false, "changesreserve": false, "newreserveid": 0, "newexpiredreserveid": 0, "transactionson": false};
  await $.fixArgs(L0, ["sender"]);
  L0["contractid"] = (await $.v(C, "FContractID"));
  L0["hdate"] = (await $.call(C, "Trunc", [(await $.v(C, "GetBankDate"))]));
  L0["changepreserve"] = (await $.mv((await $.v(C, "cbChangePrimaryResreve")), "Checked"));
  L0["changesreserve"] = (await $.mv((await $.v(C, "cbChangeSecondaryResreve")), "Checked"));
  L0["newreserveid"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CBReliabilityPercent")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"));
  L0["newexpiredreserveid"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CBOverdueReliabilityPercent")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"));
  L0["transactionson"] = (await $.mv((await $.v(C, "cbUseTransactions")), "Checked"));
  {
    const $t6 = (await $.mv((await $.v(C, "DataModExpire")), "ReserveCont"));
    await $.stmt((await $.wcall([$t6], "CallProcedure", ["ChangeReserve", [(await $.wv([$t6], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false)), (await $.wv([$t6], "HDate", { get: async () => L0["hdate"], set: async (v) => { L0["hdate"] = v; }, local: true }, false)), (await $.wv([$t6], "newReserveID", { get: async () => L0["newreserveid"], set: async (v) => { L0["newreserveid"] = v; }, local: true }, false)), (await $.wv([$t6], "newExpiredReserveID", { get: async () => L0["newexpiredreserveid"], set: async (v) => { L0["newexpiredreserveid"] = v; }, local: true }, false)), (await $.wv([$t6], "changePReserve", { get: async () => L0["changepreserve"], set: async (v) => { L0["changepreserve"] = v; }, local: true }, false)), (await $.wv([$t6], "changeSReserve", { get: async () => L0["changesreserve"], set: async (v) => { L0["changesreserve"] = v; }, local: true }, false)), (await $.wv([$t6], "TransactionsON", { get: async () => L0["transactionson"], set: async (v) => { L0["transactionson"] = v; }, local: true }, false))]], C)));
  }
  await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
