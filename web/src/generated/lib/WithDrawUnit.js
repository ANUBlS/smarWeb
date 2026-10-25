// Generated from WithDrawUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("WithDrawUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "CurrencyEdit", "Oracle", "sboapiDataModuleImpl", "StoredProgramsUnit", "DepositDataModuleUnit"]);
  const C = [U];
  U.defClass("TFrmWithDraw", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "statictext7": {"name": "StaticText7", "type": "TStaticText"}, "maindebtincreaseedit": {"name": "MainDebtIncreaseEdit", "type": "TCurrencyEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "statictext8": {"name": "StaticText8", "type": "TStaticText"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "statictext9": {"name": "StaticText9", "type": "TStaticText"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "statictext10": {"name": "StaticText10", "type": "TStaticText"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "statictext11": {"name": "StaticText11", "type": "TStaticText"}, "interestdebtincreaseedit": {"name": "InterestDebtIncreaseEdit", "type": "TCurrencyEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "statictext12": {"name": "StaticText12", "type": "TStaticText"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "btncommit": {"name": "BtnCommit", "type": "TButton"}, "btncancel": {"name": "BtnCancel", "type": "TButton"}, "withdrawpackage": {"name": "WithdrawPackage", "type": "TOraclePackage"}, "cbusetransactions": {"name": "CBUseTransactions", "type": "TCheckBox"}, "fcontractid": {"name": "FContractID", "type": "LongInt"}}, {});
  U.init(async () => {
    U.var_("FrmWithDraw", null, "TFrmWithDraw");
  });
  U.method("TFrmWithDraw", "WithDrawMoney", async function WithDrawMoney(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"contractid": $.copyArg(p0), "hdate": $.copyArg(p1), "maindebtwithdraw": $.copyArg(p2), "interestdebtwithdraw": $.copyArg(p3), "usetransations": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["contractid", "hdate", "maindebtwithdraw", "interestdebtwithdraw", "usetransations"]);
  {
    const $t1 = (await $.v(C, "WithdrawPackage"));
    await $.stmt((await $.wcall([$t1], "CallProcedure", ["WithDrawMoney", [(await $.wv([$t1], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false)), (await $.wv([$t1], "HDate", { get: async () => L0["hdate"], set: async (v) => { L0["hdate"] = v; }, local: true }, false)), (await $.wv([$t1], "MainDebtWithdraw", { get: async () => L0["maindebtwithdraw"], set: async (v) => { L0["maindebtwithdraw"] = v; }, local: true }, false)), (await $.wv([$t1], "InterestDebtWithdraw", { get: async () => L0["interestdebtwithdraw"], set: async (v) => { L0["interestdebtwithdraw"] = v; }, local: true }, false)), (await $.wv([$t1], "UseTransations", { get: async () => L0["usetransations"], set: async (v) => { L0["usetransations"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["ContractID", "HDate", "MainDebtWithdraw", "InterestDebtWithdraw", "UseTransations"], "kind": "procedure", "ptypes": ["LongInt", "TDateTime", "Real", "Real", "Boolean"]});
  U.method("TFrmWithDraw", "BtnCommitClick", async function BtnCommitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "WithDrawMoney", [(await $.v(C, "FContractID")), (await $.v(C, "GetBankDate")), (await $.mv((await $.v(C, "MainDebtIncreaseEdit")), "Value")), (await $.mv((await $.v(C, "InterestDebtIncreaseEdit")), "Value")), (await $.mv((await $.v(C, "CBUseTransactions")), "Checked"))])));
  await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
