// Generated from UnitForm_budce.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitForm_budce", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "XDBGrids", "StdCtrls", "ExtCtrls", "db", "TransactionDataModuleUnit", "TransactionPropertiesImpl"]);
  const C = [U];
  U.defClass("TForm_budce", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "button2": {"name": "Button2", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("Form_budce", null, "TForm_budce");
  });
  U.method("TForm_budce", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Form_budce")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_budce", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "Ods_budce_copy")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "Ods_budce_copy")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_budce", "OperationCancel1", async function OperationCancel1(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.wobj(C, "transactionDataModule"));
    const $t2 = (await $.wv([$t1], "Transactions", C, false));
    if ($.truthy($.in_((await $.wv([$t1, $t2], "State", C, false)), [(await $.wv([$t1, $t2], "dsInsert", C, false)), (await $.wv([$t1, $t2], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t1, $t2], "Cancel", [], C));
      await $.stmt($.wcall([$t1, $t2], "RefreshRecord", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TForm_budce", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": 0, "say": 0, "i": 0, "x": 0, "transactionid": 0, "transactiondate": 0, "transactionno": '', "debitid": 0, "creditid": 0, "debitamount": 0, "creditamount": 0, "lamount": 0, "debitrate": 0, "creditrate": 0, "cashsymbol": '', "convertationsymbol": 0, "operationcode": null, "flags": 0, "transactionname": '', "reportid": 0, "countrid": 0, "trname": '', "inbalancechar": '', "outbalancechar": 0, "operatorid": 0, "budce": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.wobj(C, "TransactionEditForm"));
    const $t4 = (await $.wv([$t3], "TransactionDataModule", C, false));
    const $t5 = (await $.wv([$t3, $t4], "Ods_budce_copy_cum", C, false));
    await $.mcall((await $.wv([$t3, $t4, $t5], "Ods_budce_copy", C, false)), "Refresh", []);
    await $.stmt($.wcall([$t3, $t4, $t5], "Refresh", [], C));
    if ($.truthy($.gt((await $.mv((await $.mcall((await $.wv([$t3, $t4, $t5], "Ods_budce_copy_cum", C, false)), "FieldByName", ["AMMOUNT"])), "AsFloat")), 0))) {
      if ($.truthy($.ne((await $.mv((await $.wv([$t3, $t4, $t5], "CurrencyEditLammount", C, false)), "Value")), (await $.wcall([$t3, $t4, $t5], "FloatToCurr", [(await $.mv((await $.mcall((await $.wv([$t3, $t4, $t5], "Ods_budce_copy_cum", C, false)), "FieldByName", ["AMMOUNT"])), "AsFloat"))], C))))) {
        await $.stmt((await $.wcall([$t3, $t4, $t5], "showmessage", ["Məbləğlərin cəmi əsas məbləğlə eyni olmalıdır !"], C)));
        return L0.result;
      }
    }
  }
  {
    const $t6 = (await $.wobj(C, "TransactionEditForm"));
    const $t7 = (await $.wv([$t6], "TransactionDataModule", C, false));
    const $t8 = (await $.wv([$t6, $t7], "Ods_budce_copy", C, false));
    await $.wset([$t6, $t7, $t8], "transactiondate", (await $.wcall([$t6, $t7, $t8], "Int", [(await $.mv((await $.wv([$t6, $t7, $t8], "TransDate", C, false)), "DateTime"))], C)), { get: async () => L0["transactiondate"], set: async (v) => { L0["transactiondate"] = v; }, local: true });
    await $.wset([$t6, $t7, $t8], "debitid", (await $.mv((await $.mcall((await $.wv([$t6, $t7, $t8], "DebitAccData", C, false)), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["debitid"], set: async (v) => { L0["debitid"] = v; }, local: true });
    await $.wset([$t6, $t7, $t8], "creditid", (await $.mv((await $.mcall((await $.wv([$t6, $t7, $t8], "CreditAccData", C, false)), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true });
    await $.wset([$t6, $t7, $t8], "trname", (await $.mv((await $.wv([$t6, $t7, $t8], "DBEditDestination", C, false)), "text")), { get: async () => L0["trname"], set: async (v) => { L0["trname"] = v; }, local: true });
    await $.wset([$t6, $t7, $t8], "flags", 0, { get: async () => L0["flags"], set: async (v) => { L0["flags"] = v; }, local: true });
    await $.wset([$t6, $t7, $t8], "inbalancechar", (await $.mv((await $.mcall((await $.wv([$t6, $t7, $t8], "CashSymbols", C, false)), "FieldByName", ["SYMBOL"])), "AsString")), { get: async () => L0["inbalancechar"], set: async (v) => { L0["inbalancechar"] = v; }, local: true });
    await $.wset([$t6, $t7, $t8], "outbalancechar", (await $.mv((await $.mcall((await $.wv([$t6, $t7, $t8], "ConvertationSymbols", C, false)), "FieldByName", ["id"])), "AsInteger")), { get: async () => L0["outbalancechar"], set: async (v) => { L0["outbalancechar"] = v; }, local: true });
    if ($.truthy($.eq((await $.mv((await $.wv([$t6, $t7, $t8], "OperationTypeLookUp", C, false)), "Text")), ""))) {
      await $.wset([$t6, $t7, $t8], "OperationCode", "", { get: async () => L0["operationcode"], set: async (v) => { L0["operationcode"] = v; }, local: true });
    } else {
      await $.wset([$t6, $t7, $t8], "OperationCode", (await $.mv((await $.mcall((await $.wv([$t6, $t7, $t8], "OperationTypes", C, false)), "FieldByName", ["id"])), "AsString")), { get: async () => L0["operationcode"], set: async (v) => { L0["operationcode"] = v; }, local: true });
    }
    await $.wset([$t6, $t7, $t8], "transactionno", (await $.mv((await $.wv([$t6, $t7, $t8], "DBEditOperationNo", C, false)), "text")), { get: async () => L0["transactionno"], set: async (v) => { L0["transactionno"] = v; }, local: true });
    await $.wset([$t6, $t7, $t8], "ReportID", (await $.mv((await $.mcall((await $.wv([$t6, $t7, $t8], "ReportDesc", C, false)), "FieldByName", ["id"])), "AsInteger")), { get: async () => L0["reportid"], set: async (v) => { L0["reportid"] = v; }, local: true });
    await $.wset([$t6, $t7, $t8], "CountrID", (await $.mv((await $.mcall((await $.wv([$t6, $t7, $t8], "Country", C, false)), "FieldByName", ["ID"])), "AsVariant")), { get: async () => L0["countrid"], set: async (v) => { L0["countrid"] = v; }, local: true });
    await $.mcall((await $.wv([$t6, $t7, $t8], "Ods_budce_copy", C, false)), "First", []);
    { const $t9 = (await $.mv((await $.wv([$t6, $t7, $t8], "Ods_budce_copy", C, false)), "RecordCount"));
      await $.wset([$t6, $t7, $t8], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t10 = true;
      for (;;) {
        if (!$t10) { await $.wset([$t6, $t7, $t8], "i", $.succ((await $.wv([$t6, $t7, $t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t10 = false;
        if (!($.ord((await $.wv([$t6, $t7, $t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t9))) break;
        if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.wv([$t6, $t7, $t8], "TransactionDataModule", C, false)), "Ods_budce_copy")), "FieldByName", ["AMMOUNT"])), "AsFloat")), 0))) {
          await $.mset((await $.wv([$t6, $t7, $t8], "CurrencyEditLammount", C, false)), "Value", (await $.mv((await $.mcall((await $.mv((await $.wv([$t6, $t7, $t8], "TransactionDataModule", C, false)), "Ods_budce_copy")), "FieldByName", ["AMMOUNT"])), "AsFloat")));
          await $.wset([$t6, $t7, $t8], "Budce", (await $.mv((await $.mcall((await $.mv((await $.wv([$t6, $t7, $t8], "TransactionDataModule", C, false)), "Ods_budce_copy")), "FieldByName", ["CODE"])), "asstring")), { get: async () => L0["budce"], set: async (v) => { L0["budce"] = v; }, local: true });
          await $.wset([$t6, $t7, $t8], "lamount", (await $.mv((await $.wv([$t6, $t7, $t8], "CurrencyEditLammount", C, false)), "Value")), { get: async () => L0["lamount"], set: async (v) => { L0["lamount"] = v; }, local: true });
          await $.mset((await $.wv([$t6, $t7, $t8], "CurrencyEditCredit", C, false)), "Value", (await $.wcall([$t6, $t7, $t8], "RoundNew", [$.fdiv((await $.mv((await $.wv([$t6, $t7, $t8], "CurrencyEditLammount", C, false)), "Value")), (await $.mv((await $.mcall((await $.wv([$t6, $t7, $t8], "CreditCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsFloat"))), 100], C)));
          await $.wset([$t6, $t7, $t8], "creditamount", (await $.mv((await $.wv([$t6, $t7, $t8], "CurrencyEditCredit", C, false)), "Value")), { get: async () => L0["creditamount"], set: async (v) => { L0["creditamount"] = v; }, local: true });
          await $.mset((await $.wv([$t6, $t7, $t8], "CurrencyEditDebit", C, false)), "Value", (await $.wcall([$t6, $t7, $t8], "RoundNew", [$.fdiv((await $.mv((await $.wv([$t6, $t7, $t8], "CurrencyEditLammount", C, false)), "Value")), (await $.mv((await $.mcall((await $.wv([$t6, $t7, $t8], "DebitCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsFloat"))), 100], C)));
          await $.wset([$t6, $t7, $t8], "debitamount", (await $.mv((await $.wv([$t6, $t7, $t8], "CurrencyEditDebit", C, false)), "Value")), { get: async () => L0["debitamount"], set: async (v) => { L0["debitamount"] = v; }, local: true });
          await $.wset([$t6, $t7, $t8], "a", (await $.mcall((await $.wv([$t6, $t7, $t8], "SBTransaction1", C, false)), "CallIntegerFunction", ["transaction_add", [(await $.wv([$t6, $t7, $t8], "transactiondate", { get: async () => L0["transactiondate"], set: async (v) => { L0["transactiondate"] = v; }, local: true }, false)), (await $.wv([$t6, $t7, $t8], "debitid", { get: async () => L0["debitid"], set: async (v) => { L0["debitid"] = v; }, local: true }, false)), (await $.wv([$t6, $t7, $t8], "creditid", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false)), (await $.wv([$t6, $t7, $t8], "debitamount", { get: async () => L0["debitamount"], set: async (v) => { L0["debitamount"] = v; }, local: true }, false)), (await $.wv([$t6, $t7, $t8], "creditamount", { get: async () => L0["creditamount"], set: async (v) => { L0["creditamount"] = v; }, local: true }, false)), (await $.wv([$t6, $t7, $t8], "lamount", { get: async () => L0["lamount"], set: async (v) => { L0["lamount"] = v; }, local: true }, false)), (await $.wcall([$t6, $t7, $t8], "StrToFloat", [(await $.mv((await $.wv([$t6, $t7, $t8], "DebitCurrencyRate", C, false)), "text"))], C)), (await $.wcall([$t6, $t7, $t8], "StrToFloat", [(await $.mv((await $.wv([$t6, $t7, $t8], "CreditCurrencyRate", C, false)), "text"))], C)), (await $.wv([$t6, $t7, $t8], "trname", { get: async () => L0["trname"], set: async (v) => { L0["trname"] = v; }, local: true }, false)), (await $.wv([$t6, $t7, $t8], "flags", { get: async () => L0["flags"], set: async (v) => { L0["flags"] = v; }, local: true }, false)), (await $.wv([$t6, $t7, $t8], "inbalancechar", { get: async () => L0["inbalancechar"], set: async (v) => { L0["inbalancechar"] = v; }, local: true }, false)), (await $.wv([$t6, $t7, $t8], "outbalancechar", { get: async () => L0["outbalancechar"], set: async (v) => { L0["outbalancechar"] = v; }, local: true }, false)), (await $.wv([$t6, $t7, $t8], "NULL", C, false)), (await $.wv([$t6, $t7, $t8], "OperationCode", { get: async () => L0["operationcode"], set: async (v) => { L0["operationcode"] = v; }, local: true }, false)), (await $.wv([$t6, $t7, $t8], "NULL", C, false)), (await $.wv([$t6, $t7, $t8], "null", C, false)), (await $.wv([$t6, $t7, $t8], "null", C, false)), (await $.wv([$t6, $t7, $t8], "transactionno", { get: async () => L0["transactionno"], set: async (v) => { L0["transactionno"] = v; }, local: true }, false)), (await $.wv([$t6, $t7, $t8], "ReportID", { get: async () => L0["reportid"], set: async (v) => { L0["reportid"] = v; }, local: true }, false)), (await $.wv([$t6, $t7, $t8], "CountrID", { get: async () => L0["countrid"], set: async (v) => { L0["countrid"] = v; }, local: true }, false)), (await $.wv([$t6, $t7, $t8], "null", C, false)), (await $.wv([$t6, $t7, $t8], "Budce", { get: async () => L0["budce"], set: async (v) => { L0["budce"] = v; }, local: true }, false))]])), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.wv([$t6, $t7, $t8], "OP_MMX", C, false)), "CallProcedure", ["ins_mmx_transinfo", [(await $.mv((await $.mv((await $.wv([$t6, $t7, $t8], "TransactionEditForm", C, false)), "DBLC_MMX_Transmode")), "Keyvalue")), (await $.wv([$t6, $t7, $t8], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t6, $t7, $t8], "ODS_DebtCustomerID", C, false)), "AsInteger")), (await $.mv((await $.wv([$t6, $t7, $t8], "ODS_CredCustomerID", C, false)), "AsInteger"))]])));
          await $.stmt((await $.mcall((await $.wv([$t6, $t7, $t8], "OP_MMX", C, false)), "CallProcedure", ["mmx_transaction", [(await $.mv((await $.mcall((await $.wv([$t6, $t7, $t8], "DebitAccData", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t6, $t7, $t8], "Sysdat", C, false)), "FieldByName", ["tek_dat"])), "AsDateTime")), (await $.mv((await $.wv([$t6, $t7, $t8], "CurrencyEditLammount", C, false)), "Value")), (await $.mv((await $.wv([$t6, $t7, $t8], "DBLC_MMX_Transmode", C, false)), "KeyValue"))]])));
          await $.stmt((await $.mcall((await $.wv([$t6, $t7, $t8], "OP_MMX", C, false)), "CallProcedure", ["mmx_transaction", [(await $.mv((await $.mcall((await $.wv([$t6, $t7, $t8], "CreditAccData", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t6, $t7, $t8], "Sysdat", C, false)), "FieldByName", ["tek_dat"])), "AsDateTime")), (await $.mv((await $.wv([$t6, $t7, $t8], "CurrencyEditLammount", C, false)), "Value")), (await $.mv((await $.wv([$t6, $t7, $t8], "DBLC_MMX_Transmode", C, false)), "KeyValue"))]])));
        }
        await $.mcall((await $.wv([$t6, $t7, $t8], "Ods_budce_copy", C, false)), "Next", []);
        await $.tick();
      }
    }
  }
  await $.mcall((await $.v(C, "Form_budce")), "Close", []);
  await $.stmt($.call(C, "OperationCancel1", []));
  await $.mcall((await $.v(C, "TransactionEditForm")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "TransactionDataModule")), "SBCommit", [])));
  await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "Transactions")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
