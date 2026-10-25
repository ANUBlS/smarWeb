// Generated from CapitalizationUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CapitalizationUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "ComCtrls", "CurrencyEdit", "Oracle", "sboapiDataModuleImpl", "StoredProgramsUnit", "DepositDataModuleUnit"]);
  const C = [U];
  U.defClass("TFrmCapitalization", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "statictext7": {"name": "StaticText7", "type": "TStaticText"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "statictext8": {"name": "StaticText8", "type": "TStaticText"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "statictext9": {"name": "StaticText9", "type": "TStaticText"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "statictext10": {"name": "StaticText10", "type": "TStaticText"}, "dtpcurentdate": {"name": "DTPCurentDate", "type": "TDateTimePicker"}, "statictext11": {"name": "StaticText11", "type": "TStaticText"}, "capitalizationamountedit": {"name": "CapitalizationAmountEdit", "type": "TCurrencyEdit"}, "btncommit": {"name": "BtnCommit", "type": "TButton"}, "btncancel": {"name": "BtnCancel", "type": "TButton"}, "capitalizationpackage": {"name": "CapitalizationPackage", "type": "TOraclePackage"}, "cbusetransaction": {"name": "CBUseTransaction", "type": "TCheckBox"}, "fcontractid": {"name": "FContractID", "type": "LongInt"}}, {});
  U.init(async () => {
    U.var_("FrmCapitalization", null, "TFrmCapitalization");
  });
  U.method("TFrmCapitalization", "Capitalization", async function Capitalization(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"contractid": $.copyArg(p0), "hdate": $.copyArg(p1), "total": $.copyArg(p2), "usetransaction": $.copyArg(p3), result: false};
  await $.fixArgs(L0, ["contractid", "hdate", "total", "usetransaction"]);
  L0["result"] = true;
  {
    const $t1 = (await $.v(C, "CapitalizationPackage"));
    try {
      await $.stmt((await $.wcall([$t1], "CallProcedure", ["Capitalization", [(await $.wv([$t1], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false)), (await $.wv([$t1], "HDate", { get: async () => L0["hdate"], set: async (v) => { L0["hdate"] = v; }, local: true }, false)), (await $.wv([$t1], "Total", { get: async () => L0["total"], set: async (v) => { L0["total"] = v; }, local: true }, false)), (await $.wv([$t1], "UseTransaction", { get: async () => L0["usetransaction"], set: async (v) => { L0["usetransaction"] = v; }, local: true }, false))]], C)));
    } catch ($t2) {
      $.rethrowControl($t2);
      $.handled($t2);
      throw $t2;
    }
  }
  return L0.result;
}, {"params": ["ContractID", "HDate", "Total", "useTransaction"], "kind": "function", "ptypes": ["LongInt", "TDateTime", "Real", "Boolean"]});
  U.method("TFrmCapitalization", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.mv((await $.v(C, "DepositDataModule")), "Deposits"));
    await $.mset((await $.wv([$t3], "CapitalizationAmountEdit", C, false)), "Value", (await $.mv((await $.wcall([$t3], "FieldByName", ["FacticalInterestDebt"], C)), "AsCurrency")));
    await $.wset([$t3], "Caption", $.add((await $.wv([$t3], "Caption", C, false)), (await $.mv((await $.wcall([$t3], "FieldByName", ["ContractNo"], C)), "AsString"))), C);
  }
  await $.mset((await $.v(C, "DTPCurentDate")), "DateTime", (await $.v(C, "GetBankDate")));
  await $.stmt((await $.call(C, "DTPCurentDateExit", [(await $.v(C, "DTPCurentDate"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCapitalization", "BtnCommitClick", async function BtnCommitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "Capitalization", [(await $.v(C, "FContractID")), (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPCurentDate")), "DateTime"))])), (await $.mv((await $.v(C, "CapitalizationAmountEdit")), "Value")), (await $.mv((await $.v(C, "CBUseTransaction")), "Checked"))])))) {
    await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCapitalization", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.mcall((await $.v(C, "BtnCancel")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmCapitalization", "DTPCurentDateExit", async function DTPCurentDateExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CBUseTransaction")), "Enabled", $.ge((await $.mv((L0["sender"]), "DateTime")), (await $.v(C, "GetBankDate"))));
  await $.mset((await $.v(C, "CBUseTransaction")), "Checked", $.ge((await $.mv((L0["sender"]), "DateTime")), (await $.v(C, "GetBankDate"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
