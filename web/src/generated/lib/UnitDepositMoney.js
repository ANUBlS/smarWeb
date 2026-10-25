// Generated from UnitDepositMoney.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitDepositMoney", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "Mask", "DBCtrls", "CurrencyEdit", "ComCtrls", "Oracle", "Db", "OracleData", "DepositDataModuleUnit", "StoredProgramsUnit", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFrmDepositMoney", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "applybtn": {"name": "ApplyBtn", "type": "TButton"}, "cancelbtn": {"name": "CancelBtn", "type": "TButton"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "dtpcurrentdate": {"name": "DTPCurrentDate", "type": "TDateTimePicker"}, "amountedit": {"name": "AmountEdit", "type": "TCurrencyEdit"}, "depositmoneypackage": {"name": "DepositMoneyPackage", "type": "TOraclePackage"}, "percentedit": {"name": "PercentEdit", "type": "TCurrencyEdit"}, "percentlabel": {"name": "PercentLabel", "type": "TLabel"}, "cbusetransaction": {"name": "CBUseTransaction", "type": "TCheckBox"}, "fcontractid": {"name": "FContractID", "type": "LongInt"}}, {});
  U.init(async () => {
    U.var_("FrmDepositMoney", null, "TFrmDepositMoney");
  });
  U.method("TFrmDepositMoney", "DepositCommited", async function DepositCommited(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"contractid": $.copyArg(p0), "hdate": $.copyArg(p1), "total": $.copyArg(p2), "percent": $.copyArg(p3), "usetransaction": $.copyArg(p4), result: false};
  await $.fixArgs(L0, ["contractid", "hdate", "total", "percent", "usetransaction"]);
  L0["result"] = true;
  {
    const $t1 = (await $.v(C, "DepositMoneyPackage"));
    try {
      await $.stmt((await $.wcall([$t1], "CallProcedure", ["DepositMoney", [(await $.wv([$t1], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false)), (await $.wv([$t1], "HDate", { get: async () => L0["hdate"], set: async (v) => { L0["hdate"] = v; }, local: true }, false)), (await $.wv([$t1], "Total", { get: async () => L0["total"], set: async (v) => { L0["total"] = v; }, local: true }, false)), (await $.wv([$t1], "Percent", { get: async () => L0["percent"], set: async (v) => { L0["percent"] = v; }, local: true }, false)), (await $.wv([$t1], "UseTransaction", { get: async () => L0["usetransaction"], set: async (v) => { L0["usetransaction"] = v; }, local: true }, false))]], C)));
    } catch ($t2) {
      $.rethrowControl($t2);
      $.handled($t2);
      throw $t2;
    }
  }
  return L0.result;
}, {"params": ["ContractID", "HDate", "Total", "Percent", "UseTransaction"], "kind": "function", "ptypes": ["LongInt", "TDateTime", "Real", "Real", "Boolean"]});
  U.method("TFrmDepositMoney", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTPCurrentDate")), "DateTime", (await $.v(C, "GetBankDate")));
  await $.set(C, "Caption", $.add((await $.v(C, "Caption")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DepositDataModule")), "Deposits")), "FieldByName", ["ContractNo"])), "AsString"))));
  await $.mset((await $.v(C, "PercentEdit")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DepositDataModule")), "Percents")), "FieldByName", ["Interest"])), "AsCurrency")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositMoney", "ApplyBtnClick", async function ApplyBtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "DepositCommited", [(await $.v(C, "FContractID")), (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPCurrentDate")), "DateTime"))])), (await $.mv((await $.v(C, "AmountEdit")), "Value")), (await $.mv((await $.v(C, "PercentEdit")), "Value")), (await $.mv((await $.v(C, "CBUseTransaction")), "Checked"))])))) {
    await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositMoney", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Percentedit")), "Visible", $.eq((await $.call(C, "GetAdditionalDepositType", [(await $.v(C, "FContractID"))])), "Collection"));
  await $.mset((await $.v(C, "PercentLabel")), "Visible", (await $.mv((await $.v(C, "Percentedit")), "Visible")));
  await $.stmt((await $.call(C, "DTPCurrentDateExit", [null])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositMoney", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmDepositMoney", "DTPCurrentDateExit", async function DTPCurrentDateExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CBUseTransaction")), "Checked", $.ge((await $.mv((await $.v(C, "DTPCurrentDate")), "Date")), (await $.v(C, "GetBankDate"))));
  await $.mset((await $.v(C, "CBUseTransaction")), "Enabled", $.ge((await $.mv((await $.v(C, "DTPCurrentDate")), "Date")), (await $.v(C, "GetBankDate"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
