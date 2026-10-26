// Generated from UnitExAccModify.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitExAccModify", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "DBCtrls", "StdCtrls", "Buttons", "Mask", "Unit_ExchangeMGR", "UnitDateExch", "IniFiles", "sboapiDataModuleImpl", "SBTranslateProc", "UnitExchAccount"]);
  const C = [U];
  U.defClass("TFormExAccModify", "TForm", {"panelmain": {"name": "PanelMain", "type": "TPanel"}, "dbcboxvalute": {"name": "DBCBoxValute", "type": "TDBLookupComboBox"}, "btnok": {"name": "BtnOk", "type": "TBitBtn"}, "labelval": {"name": "LabelVal", "type": "TLabel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "cb_purchase_acc_no": {"name": "CB_Purchase_Acc_No", "type": "TDBLookupComboBox"}, "cb_selling_acc_no": {"name": "CB_Selling_Acc_No", "type": "TDBLookupComboBox"}, "cb_profit_acc_no": {"name": "CB_Profit_Acc_No", "type": "TDBLookupComboBox"}, "cb_harm_acc_no": {"name": "CB_Harm_Acc_No", "type": "TDBLookupComboBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "all_filial": {"name": "all_filial", "type": "TDBLookupComboBox"}, "label6": {"name": "Label6", "type": "TLabel"}, "cb_cash_acc_no": {"name": "CB_Cash_Acc_No", "type": "TDBLookupComboBox"}, "cb_pur_acc_no": {"name": "CB_Pur_Acc_No", "type": "TDBLookupComboBox"}, "label8": {"name": "Label8", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("FormExAccModify", null, "TFormExAccModify");
    U.var_("ExchangeMGR_X", null, "TExchangeMGR_X");
    U.var_("r", 0, "integer");
    U.var_("v_ex_id", 0, "integer");
  });
  U.method("TFormExAccModify", "BtnOkClick", async function BtnOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_id": 0, "v_val_id": 0, "v_val_name": '', "v_purchase_acc_id": 0, "v_selling_acc_id": 0, "v_profit_acc_id": 0, "v_harm_acc_id": 0, "v_cash_acc_id": 0, "v_pur_acc_id": 0, "v_filial": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t1 = (await $.mv((await $.v(C, "FormAccount")), "EditOrInsert"));
    if ($.eq($t1, 1)) {
      if ($.truthy(($.ne((await $.mv((await $.v(C, "DBCBoxValute")), "KeyValue")), (-(1)))))) {
        {
          const $t2 = (await $.v(C, "DataModExch"));
          await $.wset([$t2], "v_ex_id", (await $.mv((await $.mcall((await $.wv([$t2], "ODSExchOffice", C, false)), "FieldByName", ["ex_no"])), "AsInteger")), C);
          await $.wset([$t2], "v_val_id", (await $.mv((await $.wv([$t2], "DBCBoxValute", C, false)), "KeyValue")), { get: async () => L0["v_val_id"], set: async (v) => { L0["v_val_id"] = v; }, local: true });
          await $.wset([$t2], "v_val_name", (await $.mv((await $.wv([$t2], "DBCBoxValute", C, false)), "Text")), { get: async () => L0["v_val_name"], set: async (v) => { L0["v_val_name"] = v; }, local: true });
          await $.wset([$t2], "v_purchase_acc_id", (await $.mv((await $.wv([$t2], "CB_Purchase_Acc_No", C, false)), "KeyValue")), { get: async () => L0["v_purchase_acc_id"], set: async (v) => { L0["v_purchase_acc_id"] = v; }, local: true });
          await $.wset([$t2], "v_selling_acc_id", (await $.mv((await $.wv([$t2], "CB_Selling_Acc_No", C, false)), "KeyValue")), { get: async () => L0["v_selling_acc_id"], set: async (v) => { L0["v_selling_acc_id"] = v; }, local: true });
          await $.wset([$t2], "v_profit_acc_id", (await $.mv((await $.wv([$t2], "CB_Profit_Acc_No", C, false)), "KeyValue")), { get: async () => L0["v_profit_acc_id"], set: async (v) => { L0["v_profit_acc_id"] = v; }, local: true });
          await $.wset([$t2], "v_harm_acc_id", (await $.mv((await $.wv([$t2], "CB_Harm_Acc_No", C, false)), "KeyValue")), { get: async () => L0["v_harm_acc_id"], set: async (v) => { L0["v_harm_acc_id"] = v; }, local: true });
          await $.wset([$t2], "v_cash_acc_id", (await $.mv((await $.wv([$t2], "CB_Cash_Acc_No", C, false)), "KeyValue")), { get: async () => L0["v_cash_acc_id"], set: async (v) => { L0["v_cash_acc_id"] = v; }, local: true });
          await $.wset([$t2], "v_pur_acc_id", (await $.mv((await $.wv([$t2], "CB_Pur_Acc_No", C, false)), "KeyValue")), { get: async () => L0["v_pur_acc_id"], set: async (v) => { L0["v_pur_acc_id"] = v; }, local: true });
          await $.wset([$t2], "r", (await $.mcall((await $.wv([$t2], "OPExchMgr", C, false)), "CallIntegerFunction", ["ex_accounts_add", [(await $.wv([$t2], "v_ex_id", C, false)), (await $.wv([$t2], "v_val_id", { get: async () => L0["v_val_id"], set: async (v) => { L0["v_val_id"] = v; }, local: true }, false)), (await $.wv([$t2], "v_val_name", { get: async () => L0["v_val_name"], set: async (v) => { L0["v_val_name"] = v; }, local: true }, false)), (await $.wv([$t2], "v_purchase_acc_id", { get: async () => L0["v_purchase_acc_id"], set: async (v) => { L0["v_purchase_acc_id"] = v; }, local: true }, false)), (await $.wv([$t2], "v_selling_acc_id", { get: async () => L0["v_selling_acc_id"], set: async (v) => { L0["v_selling_acc_id"] = v; }, local: true }, false)), (await $.wv([$t2], "v_profit_acc_id", { get: async () => L0["v_profit_acc_id"], set: async (v) => { L0["v_profit_acc_id"] = v; }, local: true }, false)), (await $.wv([$t2], "v_harm_acc_id", { get: async () => L0["v_harm_acc_id"], set: async (v) => { L0["v_harm_acc_id"] = v; }, local: true }, false)), (await $.wv([$t2], "v_cash_acc_id", { get: async () => L0["v_cash_acc_id"], set: async (v) => { L0["v_cash_acc_id"] = v; }, local: true }, false)), (await $.wv([$t2], "v_pur_acc_id", { get: async () => L0["v_pur_acc_id"], set: async (v) => { L0["v_pur_acc_id"] = v; }, local: true }, false))]])), C);
          await $.mcall((await $.wv([$t2], "ODSExchAcc", C, false)), "Refresh", []);
        }
      }
      await $.stmt($.call(C, "Close", []));
    }
    else if ($.eq($t1, 2)) {
      if ($.truthy(($.ne((await $.mv((await $.v(C, "DBCBoxValute")), "KeyValue")), (-(1)))))) {
        {
          const $t3 = (await $.v(C, "DataModExch"));
          await $.wset([$t3], "v_id", (await $.mv((await $.mcall((await $.wv([$t3], "ODSExchAcc", C, false)), "fieldbyname", ["id"])), "AsInteger")), { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true });
          await $.wset([$t3], "v_ex_id", (await $.mv((await $.mcall((await $.wv([$t3], "ODSExchOffice", C, false)), "FieldByName", ["ex_no"])), "AsInteger")), C);
          await $.wset([$t3], "v_val_id", (await $.mv((await $.wv([$t3], "DBCBoxValute", C, false)), "KeyValue")), { get: async () => L0["v_val_id"], set: async (v) => { L0["v_val_id"] = v; }, local: true });
          await $.wset([$t3], "v_val_name", (await $.mv((await $.wv([$t3], "DBCBoxValute", C, false)), "Text")), { get: async () => L0["v_val_name"], set: async (v) => { L0["v_val_name"] = v; }, local: true });
          await $.wset([$t3], "v_purchase_acc_id", (await $.mv((await $.wv([$t3], "CB_Purchase_Acc_No", C, false)), "KeyValue")), { get: async () => L0["v_purchase_acc_id"], set: async (v) => { L0["v_purchase_acc_id"] = v; }, local: true });
          await $.wset([$t3], "v_selling_acc_id", (await $.mv((await $.wv([$t3], "CB_Selling_Acc_No", C, false)), "KeyValue")), { get: async () => L0["v_selling_acc_id"], set: async (v) => { L0["v_selling_acc_id"] = v; }, local: true });
          await $.wset([$t3], "v_profit_acc_id", (await $.mv((await $.wv([$t3], "CB_Profit_Acc_No", C, false)), "KeyValue")), { get: async () => L0["v_profit_acc_id"], set: async (v) => { L0["v_profit_acc_id"] = v; }, local: true });
          await $.wset([$t3], "v_harm_acc_id", (await $.mv((await $.wv([$t3], "CB_Harm_Acc_No", C, false)), "KeyValue")), { get: async () => L0["v_harm_acc_id"], set: async (v) => { L0["v_harm_acc_id"] = v; }, local: true });
          await $.wset([$t3], "v_cash_acc_id", (await $.mv((await $.wv([$t3], "CB_Cash_Acc_No", C, false)), "KeyValue")), { get: async () => L0["v_cash_acc_id"], set: async (v) => { L0["v_cash_acc_id"] = v; }, local: true });
          await $.wset([$t3], "v_pur_acc_id", (await $.mv((await $.wv([$t3], "CB_Pur_Acc_No", C, false)), "KeyValue")), { get: async () => L0["v_pur_acc_id"], set: async (v) => { L0["v_pur_acc_id"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.wv([$t3], "OPExchMgr", C, false)), "CallProcedure", ["ex_accounts_edit", [(await $.wv([$t3], "v_id", { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true }, false)), (await $.wv([$t3], "v_ex_id", C, false)), (await $.wv([$t3], "v_val_id", { get: async () => L0["v_val_id"], set: async (v) => { L0["v_val_id"] = v; }, local: true }, false)), (await $.wv([$t3], "v_val_name", { get: async () => L0["v_val_name"], set: async (v) => { L0["v_val_name"] = v; }, local: true }, false)), (await $.wv([$t3], "v_purchase_acc_id", { get: async () => L0["v_purchase_acc_id"], set: async (v) => { L0["v_purchase_acc_id"] = v; }, local: true }, false)), (await $.wv([$t3], "v_selling_acc_id", { get: async () => L0["v_selling_acc_id"], set: async (v) => { L0["v_selling_acc_id"] = v; }, local: true }, false)), (await $.wv([$t3], "v_profit_acc_id", { get: async () => L0["v_profit_acc_id"], set: async (v) => { L0["v_profit_acc_id"] = v; }, local: true }, false)), (await $.wv([$t3], "v_harm_acc_id", { get: async () => L0["v_harm_acc_id"], set: async (v) => { L0["v_harm_acc_id"] = v; }, local: true }, false)), (await $.wv([$t3], "v_cash_acc_id", { get: async () => L0["v_cash_acc_id"], set: async (v) => { L0["v_cash_acc_id"] = v; }, local: true }, false)), (await $.wv([$t3], "v_pur_acc_id", { get: async () => L0["v_pur_acc_id"], set: async (v) => { L0["v_pur_acc_id"] = v; }, local: true }, false))]])));
          await $.mcall((await $.wv([$t3], "ODSExchAcc", C, false)), "Refresh", []);
        }
      }
      await $.stmt($.call(C, "Close", []));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormExAccModify", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormExAccModify", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ini": null, "ini1": null, "bal_manat": '', "bal_valuta": '', "bal_gelir": '', "bal_zerer": '', "bal_kassam": '', "bal_kassav": '', "v_filial": 0, "v_val_id": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "DataModExch"));
    await $.mcall((await $.wv([$t4], "ODSExchRateAll", C, false)), "Refresh", []);
    await $.mset((await $.wv([$t4], "DBCBoxValute", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t4], "ODSExchAcc", C, false)), "FieldByName", ["val_id"])), "AsInteger")));
    await $.mset((await $.wv([$t4], "all_filial", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t4], "ODSExchOffice", C, false)), "FieldByName", ["filial"])), "AsInteger")));
    await $.wset([$t4], "Ini", (await $.mcall((await $.wv([$t4], "TIniFile", C, false)), "Create", [$.add((await $.wcall([$t4], "ExtractFilePath", [(await $.wcall([$t4], "paramstr", [0], C))], C)), "ExchangeBalance.ini")])), { get: async () => L0["ini"], set: async (v) => { L0["ini"] = v; }, local: true });
    await $.wset([$t4], "Ini1", (await $.mcall((await $.wv([$t4], "TIniFile", C, false)), "Create", [$.add((await $.wcall([$t4], "ExtractFilePath", [(await $.wcall([$t4], "paramstr", [0], C))], C)), "Exchange.ini")])), { get: async () => L0["ini1"], set: async (v) => { L0["ini1"] = v; }, local: true });
    await $.wset([$t4], "Bal_Manat", (await $.mcall((await $.wv([$t4], "Ini", { get: async () => L0["ini"], set: async (v) => { L0["ini"] = v; }, local: true }, false)), "ReadString", ["DefaultBalance", "Bal_Manat", ""])), { get: async () => L0["bal_manat"], set: async (v) => { L0["bal_manat"] = v; }, local: true });
    await $.wset([$t4], "Bal_Valuta", (await $.mcall((await $.wv([$t4], "Ini", { get: async () => L0["ini"], set: async (v) => { L0["ini"] = v; }, local: true }, false)), "ReadString", ["DefaultBalance", "Bal_Valuta", ""])), { get: async () => L0["bal_valuta"], set: async (v) => { L0["bal_valuta"] = v; }, local: true });
    await $.wset([$t4], "Bal_Gelir", (await $.mcall((await $.wv([$t4], "Ini", { get: async () => L0["ini"], set: async (v) => { L0["ini"] = v; }, local: true }, false)), "ReadString", ["DefaultBalance", "Bal_Gelir", ""])), { get: async () => L0["bal_gelir"], set: async (v) => { L0["bal_gelir"] = v; }, local: true });
    await $.wset([$t4], "Bal_Zerer", (await $.mcall((await $.wv([$t4], "Ini", { get: async () => L0["ini"], set: async (v) => { L0["ini"] = v; }, local: true }, false)), "ReadString", ["DefaultBalance", "Bal_Zerer", ""])), { get: async () => L0["bal_zerer"], set: async (v) => { L0["bal_zerer"] = v; }, local: true });
    await $.wset([$t4], "Bal_KassaM", (await $.mcall((await $.wv([$t4], "Ini1", { get: async () => L0["ini1"], set: async (v) => { L0["ini1"] = v; }, local: true }, false)), "ReadString", ["DefaultBalance", "Balance_Main_Debt", ""])), { get: async () => L0["bal_kassam"], set: async (v) => { L0["bal_kassam"] = v; }, local: true });
    await $.wset([$t4], "Bal_KassaV", (await $.mcall((await $.wv([$t4], "Ini1", { get: async () => L0["ini1"], set: async (v) => { L0["ini1"] = v; }, local: true }, false)), "ReadString", ["DefaultBalance", "Balance_Main_Cred", ""])), { get: async () => L0["bal_kassav"], set: async (v) => { L0["bal_kassav"] = v; }, local: true });
    if ($.truthy($.eq((await $.wcall([$t4], "Trim", [(await $.wv([$t4], "Bal_Manat", { get: async () => L0["bal_manat"], set: async (v) => { L0["bal_manat"] = v; }, local: true }, false))], C)), ""))) {
      await $.wset([$t4], "Bal_Manat", "-1", { get: async () => L0["bal_manat"], set: async (v) => { L0["bal_manat"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.wcall([$t4], "Trim", [(await $.wv([$t4], "Bal_Valuta", { get: async () => L0["bal_valuta"], set: async (v) => { L0["bal_valuta"] = v; }, local: true }, false))], C)), ""))) {
      await $.wset([$t4], "Bal_Valuta", "-1", { get: async () => L0["bal_valuta"], set: async (v) => { L0["bal_valuta"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.wcall([$t4], "Trim", [(await $.wv([$t4], "Bal_Gelir", { get: async () => L0["bal_gelir"], set: async (v) => { L0["bal_gelir"] = v; }, local: true }, false))], C)), ""))) {
      await $.wset([$t4], "Bal_Gelir", "-1", { get: async () => L0["bal_gelir"], set: async (v) => { L0["bal_gelir"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.wcall([$t4], "Trim", [(await $.wv([$t4], "Bal_Zerer", { get: async () => L0["bal_zerer"], set: async (v) => { L0["bal_zerer"] = v; }, local: true }, false))], C)), ""))) {
      await $.wset([$t4], "Bal_Zerer", "-1", { get: async () => L0["bal_zerer"], set: async (v) => { L0["bal_zerer"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.wcall([$t4], "Trim", [(await $.wv([$t4], "Bal_KassaM", { get: async () => L0["bal_kassam"], set: async (v) => { L0["bal_kassam"] = v; }, local: true }, false))], C)), ""))) {
      await $.wset([$t4], "Bal_KassaM", "-1", { get: async () => L0["bal_kassam"], set: async (v) => { L0["bal_kassam"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.wcall([$t4], "Trim", [(await $.wv([$t4], "Bal_KassaV", { get: async () => L0["bal_kassav"], set: async (v) => { L0["bal_kassav"] = v; }, local: true }, false))], C)), ""))) {
      await $.wset([$t4], "Bal_KassaV", "-1", { get: async () => L0["bal_kassav"], set: async (v) => { L0["bal_kassav"] = v; }, local: true });
    }
    await $.mcall((await $.wv([$t4], "ODSAcc_main_debt", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t4], "ODSAcc_main_debt", C, false)), "SetVariable", ["balance", (await $.wv([$t4], "Bal_Manat", { get: async () => L0["bal_manat"], set: async (v) => { L0["bal_manat"] = v; }, local: true }, false))])));
    await $.stmt((await $.mcall((await $.wv([$t4], "ODSAcc_main_debt", C, false)), "SetVariable", ["filial", (await $.mv((await $.wv([$t4], "all_filial", C, false)), "KeyValue"))])));
    await $.mcall((await $.wv([$t4], "ODSAcc_main_debt", C, false)), "Open", []);
    await $.mcall((await $.wv([$t4], "ODSAcc_child_debt", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t4], "ODSAcc_child_debt", C, false)), "SetVariable", ["balance", (await $.wv([$t4], "Bal_Gelir", { get: async () => L0["bal_gelir"], set: async (v) => { L0["bal_gelir"] = v; }, local: true }, false))])));
    await $.stmt((await $.mcall((await $.wv([$t4], "ODSAcc_child_debt", C, false)), "SetVariable", ["filial", (await $.mv((await $.wv([$t4], "all_filial", C, false)), "KeyValue"))])));
    await $.mcall((await $.wv([$t4], "ODSAcc_child_debt", C, false)), "Open", []);
    await $.mcall((await $.wv([$t4], "ODSAcc_child_cred", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t4], "ODSAcc_child_cred", C, false)), "SetVariable", ["balance", (await $.wv([$t4], "Bal_Zerer", { get: async () => L0["bal_zerer"], set: async (v) => { L0["bal_zerer"] = v; }, local: true }, false))])));
    await $.stmt((await $.mcall((await $.wv([$t4], "ODSAcc_child_cred", C, false)), "SetVariable", ["filial", (await $.mv((await $.wv([$t4], "all_filial", C, false)), "KeyValue"))])));
    await $.mcall((await $.wv([$t4], "ODSAcc_child_cred", C, false)), "Open", []);
    await $.mcall((await $.wv([$t4], "ODSCashDebt", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t4], "ODSCashDebt", C, false)), "SetVariable", ["balance", (await $.wv([$t4], "Bal_KassaM", { get: async () => L0["bal_kassam"], set: async (v) => { L0["bal_kassam"] = v; }, local: true }, false))])));
    await $.stmt((await $.mcall((await $.wv([$t4], "ODSCashDebt", C, false)), "SetVariable", ["filial", (await $.mv((await $.wv([$t4], "all_filial", C, false)), "KeyValue"))])));
    await $.mcall((await $.wv([$t4], "ODSCashDebt", C, false)), "Open", []);
    await $.mcall((await $.wv([$t4], "ODSFilial", C, false)), "Open", []);
    { const $t5 = (await $.mv((await $.wv([$t4], "FormAccount", C, false)), "EditOrInsert"));
      if ($.eq($t5, 1)) {
        await $.mset((await $.wv([$t4], "DBCBoxValute", C, false)), "KeyValue", (-(1)));
        await $.mset((await $.wv([$t4], "CB_Harm_Acc_No", C, false)), "KeyValue", (-(1)));
        await $.mset((await $.wv([$t4], "CB_Profit_Acc_No", C, false)), "KeyValue", (-(1)));
        await $.mset((await $.wv([$t4], "CB_Purchase_Acc_No", C, false)), "KeyValue", (-(1)));
        await $.mset((await $.wv([$t4], "CB_Cash_Acc_No", C, false)), "KeyValue", (-(1)));
        await $.mset((await $.wv([$t4], "CB_Pur_Acc_No", C, false)), "KeyValue", (-(1)));
        await $.wset([$t4], "Caption", "AddAccount", C);
        await $.mcall((await $.wv([$t4], "ODSAcc_main_cred", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t4], "ODSAcc_main_cred", C, false)), "SetVariable", ["balance", (await $.wv([$t4], "Bal_Valuta", { get: async () => L0["bal_valuta"], set: async (v) => { L0["bal_valuta"] = v; }, local: true }, false))])));
        await $.stmt((await $.mcall((await $.wv([$t4], "ODSAcc_main_cred", C, false)), "SetVariable", ["val_id", (-(1))])));
        await $.stmt((await $.mcall((await $.wv([$t4], "ODSAcc_main_cred", C, false)), "SetVariable", ["filial", (await $.mv((await $.wv([$t4], "all_filial", C, false)), "KeyValue"))])));
        await $.mcall((await $.wv([$t4], "ODSAcc_main_cred", C, false)), "Open", []);
        await $.mcall((await $.wv([$t4], "ODSCashKredit", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t4], "ODSCashKredit", C, false)), "SetVariable", ["balance", (await $.wv([$t4], "Bal_KassaV", { get: async () => L0["bal_kassav"], set: async (v) => { L0["bal_kassav"] = v; }, local: true }, false))])));
        await $.stmt((await $.mcall((await $.wv([$t4], "ODSCashKredit", C, false)), "SetVariable", ["val_id", (-(1))])));
        await $.stmt((await $.mcall((await $.wv([$t4], "ODSCashKredit", C, false)), "SetVariable", ["filial", (await $.mv((await $.wv([$t4], "all_filial", C, false)), "KeyValue"))])));
        await $.mcall((await $.wv([$t4], "ODSCashKredit", C, false)), "Open", []);
      }
      else if ($.eq($t5, 2)) {
        await $.wset([$t4], "Caption", "EditAccount", C);
        await $.mcall((await $.wv([$t4], "ODSAcc_main_cred", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t4], "ODSAcc_main_cred", C, false)), "SetVariable", ["balance", (await $.wv([$t4], "Bal_Valuta", { get: async () => L0["bal_valuta"], set: async (v) => { L0["bal_valuta"] = v; }, local: true }, false))])));
        await $.stmt((await $.mcall((await $.wv([$t4], "ODSAcc_main_cred", C, false)), "SetVariable", ["val_id", (await $.mv((await $.wv([$t4], "DBCBoxValute", C, false)), "KeyValue"))])));
        await $.stmt((await $.mcall((await $.wv([$t4], "ODSAcc_main_cred", C, false)), "SetVariable", ["filial", (await $.mv((await $.wv([$t4], "all_filial", C, false)), "KeyValue"))])));
        await $.mcall((await $.wv([$t4], "ODSAcc_main_cred", C, false)), "Open", []);
        await $.mcall((await $.wv([$t4], "ODSCashKredit", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t4], "ODSCashKredit", C, false)), "SetVariable", ["balance", (await $.wv([$t4], "Bal_KassaV", { get: async () => L0["bal_kassav"], set: async (v) => { L0["bal_kassav"] = v; }, local: true }, false))])));
        await $.stmt((await $.mcall((await $.wv([$t4], "ODSCashKredit", C, false)), "SetVariable", ["val_id", (await $.mv((await $.wv([$t4], "DBCBoxValute", C, false)), "KeyValue"))])));
        await $.stmt((await $.mcall((await $.wv([$t4], "ODSCashKredit", C, false)), "SetVariable", ["filial", (await $.mv((await $.wv([$t4], "all_filial", C, false)), "KeyValue"))])));
        await $.mcall((await $.wv([$t4], "ODSCashKredit", C, false)), "Open", []);
        await $.mset((await $.wv([$t4], "CB_Purchase_Acc_No", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t4], "ODSExchAcc", C, false)), "FieldByName", ["purchase_acc_id"])), "AsVariant")));
        await $.mset((await $.wv([$t4], "CB_Selling_Acc_No", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t4], "ODSExchAcc", C, false)), "FieldByName", ["selling_acc_id"])), "AsVariant")));
        await $.mset((await $.wv([$t4], "CB_Profit_Acc_No", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t4], "ODSExchAcc", C, false)), "FieldByName", ["profit_acc_id"])), "AsVariant")));
        await $.mset((await $.wv([$t4], "CB_Harm_Acc_No", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t4], "ODSExchAcc", C, false)), "FieldByName", ["harm_acc_id"])), "AsVariant")));
        await $.mset((await $.wv([$t4], "CB_Cash_Acc_No", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t4], "ODSExchAcc", C, false)), "FieldByName", ["cash_acc_id"])), "AsVariant")));
        await $.mset((await $.wv([$t4], "CB_Pur_Acc_No", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t4], "ODSExchAcc", C, false)), "FieldByName", ["pur_acc_id"])), "AsVariant")));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormExAccModify", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormExAccModify", "DBCBoxValuteClick", async function DBCBoxValuteClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "DataModExch"));
    await $.mcall((await $.wv([$t6], "ODSAcc_main_cred", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t6], "ODSAcc_main_cred", C, false)), "SetVariable", ["val_id", (await $.mv((await $.wv([$t6], "DBCBoxValute", C, false)), "KeyValue"))])));
    await $.stmt((await $.mcall((await $.wv([$t6], "ODSAcc_main_cred", C, false)), "SetVariable", ["filial", (await $.mv((await $.wv([$t6], "all_filial", C, false)), "KeyValue"))])));
    await $.mcall((await $.wv([$t6], "ODSAcc_main_cred", C, false)), "Open", []);
    await $.mcall((await $.wv([$t6], "ODSCashKredit", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t6], "ODSCashKredit", C, false)), "SetVariable", ["val_id", (await $.mv((await $.wv([$t6], "DBCBoxValute", C, false)), "KeyValue"))])));
    await $.stmt((await $.mcall((await $.wv([$t6], "ODSCashKredit", C, false)), "SetVariable", ["filial", (await $.mv((await $.wv([$t6], "all_filial", C, false)), "KeyValue"))])));
    await $.mcall((await $.wv([$t6], "ODSCashKredit", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormExAccModify", "all_FilialClick", async function all_FilialClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSFilial")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
