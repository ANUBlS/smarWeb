// Generated from CO_Transact_Unitp.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CO_Transact_Unitp", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActnList", "ComCtrls", "StdCtrls", "CurrencyEdit", "Mask", "DBCtrls", "SearchEdit", "ExtCtrls", "Db", "OracleData", "Variants", "co_datamod_impl", "sboapiDataModuleImpl", "SBTranslateProc", "CO_In_Unit"]);
  const C = [U];
  U.enumType("ttransactionside", 3);
  U.const("tsDebet", 0);
  U.const("tsCredit", 1);
  U.const("tsUnknown", 2);
  U.defClass("TCO_Transactions", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "headercontrol1": {"name": "HeaderControl1", "type": "THeaderControl"}, "paneldebet": {"name": "PanelDebet", "type": "TPanel"}, "paneldebit": {"name": "PanelDebit", "type": "TPanel"}, "paneldebitrest": {"name": "PanelDebitRest", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "d_pok_ostat": {"name": "D_Pok_Ostat", "type": "TLabel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dblookupdebtaccname": {"name": "DBLookupDebtAccName", "type": "TDBLookupComboBox"}, "dbeditdebtaccname": {"name": "DBEditDebtAccName", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "debtaccsearchedit": {"name": "DebtAccSearchEdit", "type": "TSearchEdit"}, "dblookupdebtacc": {"name": "DBLookupDebtAcc", "type": "TDBLookupComboBox"}, "dbeditdebtaccno": {"name": "DBEditDebtAccNo", "type": "TDBEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "panelcredit": {"name": "PanelCredit", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "c_ostat": {"name": "C_Ostat", "type": "TLabel"}, "c_pok_ostat": {"name": "C_Pok_Ostat", "type": "TLabel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "dblookupcredaccname": {"name": "DBLookupCredAccName", "type": "TDBLookupComboBox"}, "dbeditcredaccname": {"name": "DBEditCredAccName", "type": "TDBEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "creditaccsearchedit": {"name": "CreditAccSearchEdit", "type": "TSearchEdit"}, "dblookupcredacc": {"name": "DBLookupCredAcc", "type": "TDBLookupComboBox"}, "dbeditcredaccno": {"name": "DBEditCredAccNo", "type": "TDBEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "credcurcode": {"name": "CredCurCode", "type": "TEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "debtvalue": {"name": "DebtValue", "type": "TCurrencyEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "creditvalue": {"name": "CreditValue", "type": "TCurrencyEdit"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "ekv": {"name": "Ekv", "type": "TCurrencyEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "convertationsymbollookup": {"name": "ConvertationSymbolLookUp", "type": "TDBLookupComboBox"}, "seditconvertationid": {"name": "SEditConvertationID", "type": "TSearchEdit"}, "cashpanel": {"name": "CashPanel", "type": "TPanel"}, "cashsymbollookup": {"name": "CashSymbolLookUp", "type": "TDBLookupComboBox"}, "seditcashsymbol": {"name": "SEditCashSymbol", "type": "TSearchEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "transdate": {"name": "TransDate", "type": "TDateTimePicker"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "buttonapply": {"name": "ButtonApply", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "buttonclose": {"name": "ButtonClose", "type": "TButton"}, "trdest": {"name": "Trdest", "type": "TEdit"}, "debitcurrencydata": {"name": "DebitCurrencyData", "type": "TOracleDataSet"}, "debitcurrency": {"name": "DebitCurrency", "type": "TDataSource"}, "debitaccdata": {"name": "DebitAccData", "type": "TOracleDataSet"}, "debitaccs": {"name": "DebitAccs", "type": "TDataSource"}, "debtcurcode": {"name": "DebtCurCode", "type": "TEdit"}, "creditcurrencydata": {"name": "CreditCurrencyData", "type": "TOracleDataSet"}, "creditcurrency": {"name": "CreditCurrency", "type": "TDataSource"}, "editcredvalute": {"name": "EditCredValute", "type": "TDBLookupComboBox"}, "creditaccdata": {"name": "CreditAccData", "type": "TOracleDataSet"}, "creditaccs": {"name": "CreditAccs", "type": "TDataSource"}, "d_ostat": {"name": "D_Ostat", "type": "TLabel"}, "dbedittransname": {"name": "DBEditTransName", "type": "TEdit"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "reportiddbedit": {"name": "ReportIDDBEdit", "type": "TEdit"}, "reportidlookup": {"name": "ReportIDLookUp", "type": "TDBLookupComboBox"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "countriddbedit": {"name": "CountrIDDBEdit", "type": "TEdit"}, "countridlookup": {"name": "CountrIDLookUp", "type": "TDBLookupComboBox"}, "editdebtvalute": {"name": "EditDebtValute", "type": "TDBLookupComboBox"}, "button1": {"name": "Button1", "type": "TButton"}, "debitcurrencydataid": {"name": "DebitCurrencyDataID", "type": "TIntegerField"}, "debitcurrencydatasname": {"name": "DebitCurrencyDataSNAME", "type": "TWideStringField"}, "debitcurrencydataname": {"name": "DebitCurrencyDataNAME", "type": "TWideStringField"}, "debitcurrencydatarate": {"name": "DebitCurrencyDataRATE", "type": "TFloatField"}, "creditcurrencydataid": {"name": "CreditCurrencyDataID", "type": "TIntegerField"}, "creditcurrencydatasname": {"name": "CreditCurrencyDataSNAME", "type": "TWideStringField"}, "creditcurrencydataname": {"name": "CreditCurrencyDataNAME", "type": "TWideStringField"}, "creditcurrencydatarate": {"name": "CreditCurrencyDataRATE", "type": "TFloatField"}, "debitaccdataid": {"name": "DebitAccDataID", "type": "TFloatField"}, "debitaccdataacc_no": {"name": "DebitAccDataACC_NO", "type": "TWideStringField"}, "debitaccdataval_acc": {"name": "DebitAccDataVAL_ACC", "type": "TIntegerField"}, "debitaccdataname": {"name": "DebitAccDataNAME", "type": "TWideStringField"}, "debitaccdataiscacheaccount": {"name": "DebitAccDataISCACHEACCOUNT", "type": "TFloatField"}, "debitaccdataostat": {"name": "DebitAccDataOSTAT", "type": "TFloatField"}, "debitaccdatapok_ostat": {"name": "DebitAccDataPOK_OSTAT", "type": "TFloatField"}, "debitaccdatafromtrans": {"name": "DebitAccDataFROMTRANS", "type": "TFloatField"}, "creditaccdataid": {"name": "CreditAccDataID", "type": "TFloatField"}, "creditaccdataacc_no": {"name": "CreditAccDataACC_NO", "type": "TWideStringField"}, "creditaccdataval_acc": {"name": "CreditAccDataVAL_ACC", "type": "TIntegerField"}, "creditaccdataname": {"name": "CreditAccDataNAME", "type": "TWideStringField"}, "creditaccdataiscacheaccount": {"name": "CreditAccDataISCACHEACCOUNT", "type": "TFloatField"}, "creditaccdataostat": {"name": "CreditAccDataOSTAT", "type": "TFloatField"}, "creditaccdatapok_ostat": {"name": "CreditAccDataPOK_OSTAT", "type": "TFloatField"}, "creditaccdatafromtrans": {"name": "CreditAccDataFROMTRANS", "type": "TFloatField"}, "editcredrate": {"name": "EditCredRate", "type": "TEdit"}, "acc_id_": {"name": "Acc_ID_", "type": "TDBEdit"}, "acc_id": {"name": "Acc_ID", "type": "TDBEdit"}, "editdebtrate": {"name": "EditDebtRate", "type": "TEdit"}, "debitaccdataaccnosearch": {"name": "DebitAccDataACCNOSEARCH", "type": "TWideStringField"}, "creditaccdataaccnosearch": {"name": "CreditAccDataACCNOSEARCH", "type": "TWideStringField"}, "modifed": {"name": "Modifed", "type": "boolean"}, "transactionside": {"name": "TransactionSide", "type": "TTransactionSide"}}, {});
  U.init(async () => {
    U.var_("CO_Transactions", null, "TCO_Transactions");
    U.var_("TransTypeIncOutDC", 0, "Integer");
  });
  U.method("TCO_Transactions", "SetCashSymbol", async function SetCashSymbol(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.v(C, "CO_DataMod"));
    const $t2 = (await $.wv([$t1], "CashSymbolLookUp", C, false));
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t1, $t2], "DebitAccData", C, false)), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t1, $t2], "DebitAccData", C, false)), "FieldByName", ["val_acc"])), "AsInteger")), 0)))))) {
      await $.mset((await $.mv((await $.wv([$t1, $t2], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = 0");
    } else {
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t1, $t2], "CreditAccData", C, false)), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t1, $t2], "CreditAccData", C, false)), "FieldByName", ["val_acc"])), "AsInteger")), 0)))))) {
        await $.mset((await $.mv((await $.wv([$t1, $t2], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = 1");
      } else {
        await $.mset((await $.mv((await $.wv([$t1, $t2], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = -1");
      }
    }
    await $.mset((await $.mv((await $.wv([$t1, $t2], "ListSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t1, $t2], "False", C, false)));
    await $.mset((await $.mv((await $.wv([$t1, $t2], "ListSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t1, $t2], "True", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCO_Transactions", "DebtAccSearchEditChange", async function DebtAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "D_Ostat")), "Visible", true);
  await $.mset((await $.v(C, "D_Pok_Ostat")), "Visible", true);
  await $.mset((await $.v(C, "D_Ostat")), "Caption", (await $.mv((await $.mcall((await $.v(C, "DebitAccData")), "FieldByName", ["Ostat"])), "AsString")));
  await $.mset((await $.v(C, "D_Pok_Ostat")), "Caption", (await $.mv((await $.mcall((await $.v(C, "DebitAccData")), "FieldByName", ["Pok_Ostat"])), "AsString")));
  await $.mset((await $.v(C, "CashPanel")), "Enabled", (await $.or_(($.eq((await $.mv((await $.v(C, "DebitAccDataISCACHEACCOUNT")), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.v(C, "CreditAccDataISCACHEACCOUNT")), "AsInteger")), 1)))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "DBLookupDebtAccClick", async function DBLookupDebtAccClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "Text", (await $.mv((await $.v(C, "DBLookupDebtAcc")), "Text")));
  await $.mset((await $.v(C, "D_Ostat")), "Visible", true);
  await $.mset((await $.v(C, "D_Pok_Ostat")), "Visible", true);
  await $.mset((await $.v(C, "D_Ostat")), "Caption", (await $.mv((await $.mcall((await $.v(C, "DebitAccData")), "FieldByName", ["Ostat"])), "AsString")));
  await $.mset((await $.v(C, "D_Pok_Ostat")), "Caption", (await $.mv((await $.mcall((await $.v(C, "DebitAccData")), "FieldByName", ["Pok_Ostat"])), "AsString")));
  await $.mset((await $.v(C, "CashPanel")), "Enabled", (await $.or_(($.eq((await $.mv((await $.v(C, "DebitAccDataISCACHEACCOUNT")), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.v(C, "CreditAccDataISCACHEACCOUNT")), "AsInteger")), 1)))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "DBLookupDebtAccNameClick", async function DBLookupDebtAccNameClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "Text", (await $.mv((await $.v(C, "DBLookupDebtAcc")), "Text")));
  await $.mset((await $.v(C, "D_Ostat")), "Visible", true);
  await $.mset((await $.v(C, "D_Pok_Ostat")), "Visible", true);
  await $.mset((await $.v(C, "D_Ostat")), "Caption", (await $.mv((await $.mcall((await $.v(C, "DebitAccData")), "FieldByName", ["Ostat"])), "AsString")));
  await $.mset((await $.v(C, "D_Pok_Ostat")), "Caption", (await $.mv((await $.mcall((await $.v(C, "DebitAccData")), "FieldByName", ["Pok_Ostat"])), "AsString")));
  await $.mset((await $.v(C, "CashPanel")), "Enabled", (await $.or_(($.eq((await $.mv((await $.v(C, "DebitAccDataISCACHEACCOUNT")), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.v(C, "CreditAccDataISCACHEACCOUNT")), "AsInteger")), 1)))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Sysdat")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "CashSymbols")), "Open", []);
  await $.mset((await $.v(C, "TransDate")), "Date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Sysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  await $.mset((await $.v(C, "EditDebtRate")), "Text", (await $.mv((await $.mcall((await $.v(C, "DebitCurrencyData")), "FieldByName", ["Rate"])), "AsString")));
  await $.mset((await $.v(C, "EditCredRate")), "Text", (await $.mv((await $.mcall((await $.v(C, "CreditCurrencyData")), "FieldByName", ["Rate"])), "AsString")));
  await $.mset((await $.v(C, "ReportIDDBEdit")), "Text", "0");
  await $.mset((await $.v(C, "CountrIDDBEdit")), "Text", "0");
  await $.mset((await $.v(C, "DBEditTransName")), "Text", "");
  await $.mset((await $.v(C, "DebtValue")), "Text", "");
  await $.mset((await $.v(C, "CreditValue")), "Text", "");
  await $.mset((await $.v(C, "Ekv")), "Text", "");
  await $.mset((await $.v(C, "SEditCashSymbol")), "Text", "");
  await $.mset((await $.v(C, "SEditConvertationID")), "Text", "");
  if ($.truthy($.eq((await $.v(C, "TransTypeIncOutDC")), 1))) {
    await $.mset((await $.v(C, "PanelDebet")), "Enabled", false);
    await $.mset((await $.v(C, "PanelCredit")), "Enabled", false);
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "FieldByName", ["TYPEID"])), "AsInteger")), 1))) {
      {
        const $t3 = (await $.v(C, "CO_DataMod"));
        await $.mset((await $.wv([$t3], "DebtCurCode", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t3], "Account", C, false)), "FieldByName", ["AccValCode"])), "AsString")));
        await $.mset((await $.wv([$t3], "DebtAccSearchEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t3], "Account", C, false)), "FieldByName", ["AccNO"])), "AsString")));
        await $.mset((await $.wv([$t3], "DBLookupDebtAcc", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t3], "Account", C, false)), "FieldByName", ["AccNO"])), "AsString")));
        await $.stmt((await $.wcall([$t3], "DBLookupDebtAccClick", [(await $.wv([$t3], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
        await $.mset((await $.wv([$t3], "CredCurCode", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t3], "CO_Out", C, false)), "FieldByName", ["CreditCurCode"])), "AsString")));
        await $.mset((await $.wv([$t3], "CreditAccSearchEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t3], "CO_Out", C, false)), "FieldByName", ["CREDITACCOUNT"])), "AsString")));
        await $.mset((await $.wv([$t3], "DBLookupCredAcc", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t3], "CO_Out", C, false)), "FieldByName", ["CREDITACCOUNT"])), "AsString")));
        await $.stmt((await $.wcall([$t3], "DBLookupCredAccClick", [(await $.wv([$t3], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
        await $.mset((await $.wv([$t3], "DBEditTransName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t3], "CO_Out", C, false)), "FieldByName", ["ASSIGNMENT"])), "AsString")));
      }
    } else {
      {
        const $t4 = (await $.v(C, "CO_DataMod"));
        await $.mset((await $.wv([$t4], "DebtCurCode", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t4], "CO_In", C, false)), "FieldByName", ["DebitCurCode"])), "AsString")));
        await $.mset((await $.wv([$t4], "DebtAccSearchEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t4], "CO_In", C, false)), "FieldByName", ["DebitAccount"])), "AsString")));
        await $.mset((await $.wv([$t4], "DBLookupDebtAcc", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t4], "CO_In", C, false)), "FieldByName", ["DebitAccount"])), "AsString")));
        await $.stmt((await $.wcall([$t4], "DBLookupDebtAccClick", [(await $.wv([$t4], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
        await $.mset((await $.wv([$t4], "CredCurCode", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t4], "Account", C, false)), "FieldByName", ["AccValCode"])), "AsString")));
        await $.mset((await $.wv([$t4], "CreditAccSearchEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t4], "Account", C, false)), "FieldByName", ["AccNO"])), "AsString")));
        await $.mset((await $.wv([$t4], "DBLookupCredAcc", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t4], "Account", C, false)), "FieldByName", ["AccNO"])), "AsString")));
        await $.stmt((await $.wcall([$t4], "DBLookupCredAccClick", [(await $.wv([$t4], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
        await $.mset((await $.wv([$t4], "DBEditTransName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t4], "CO_In", C, false)), "FieldByName", ["ASSIGNMENT"])), "AsString")));
      }
    }
  }
  if ($.truthy($.eq((await $.v(C, "TransTypeIncOutDC")), 2))) {
    await $.mset((await $.v(C, "PanelDebet")), "Enabled", false);
    await $.mset((await $.v(C, "PanelCredit")), "Enabled", false);
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "FieldByName", ["TYPEID"])), "AsInteger")), 1))) {
      {
        const $t5 = (await $.v(C, "CO_DataMod"));
        await $.mset((await $.wv([$t5], "DebtCurCode", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t5], "CO_In", C, false)), "FieldByName", ["DebitCurCode"])), "AsString")));
        await $.mset((await $.wv([$t5], "DebtAccSearchEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t5], "CO_In", C, false)), "FieldByName", ["DebitAccount"])), "AsString")));
        await $.mset((await $.wv([$t5], "DBLookupDebtAcc", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t5], "CO_In", C, false)), "FieldByName", ["DebitAccount"])), "AsString")));
        await $.stmt((await $.wcall([$t5], "DBLookupDebtAccClick", [(await $.wv([$t5], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
        await $.mset((await $.wv([$t5], "CredCurCode", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t5], "Account", C, false)), "FieldByName", ["AccValCode"])), "AsString")));
        await $.mset((await $.wv([$t5], "CreditAccSearchEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t5], "Account", C, false)), "FieldByName", ["AccNO"])), "AsString")));
        await $.mset((await $.wv([$t5], "DBLookupCredAcc", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t5], "Account", C, false)), "FieldByName", ["AccNO"])), "AsString")));
        await $.stmt((await $.wcall([$t5], "DBLookupCredAccClick", [(await $.wv([$t5], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
        await $.mset((await $.wv([$t5], "DBEditTransName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t5], "CO_In", C, false)), "FieldByName", ["ASSIGNMENT"])), "AsString")));
      }
    } else {
      {
        const $t6 = (await $.v(C, "CO_DataMod"));
        await $.mset((await $.wv([$t6], "DebtCurCode", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t6], "Account", C, false)), "FieldByName", ["AccValCode"])), "AsString")));
        await $.mset((await $.wv([$t6], "DebtAccSearchEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t6], "Account", C, false)), "FieldByName", ["AccNO"])), "AsString")));
        await $.mset((await $.wv([$t6], "DBLookupDebtAcc", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t6], "Account", C, false)), "FieldByName", ["AccNO"])), "AsString")));
        await $.stmt((await $.wcall([$t6], "DBLookupDebtAccClick", [(await $.wv([$t6], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
        await $.mset((await $.wv([$t6], "CredCurCode", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t6], "CO_Out", C, false)), "FieldByName", ["CreditCurCode"])), "AsString")));
        await $.mset((await $.wv([$t6], "CreditAccSearchEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t6], "CO_Out", C, false)), "FieldByName", ["CREDITACCOUNT"])), "AsString")));
        await $.mset((await $.wv([$t6], "DBLookupCredAcc", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t6], "CO_Out", C, false)), "FieldByName", ["CREDITACCOUNT"])), "AsString")));
        await $.stmt((await $.wcall([$t6], "DBLookupCredAccClick", [(await $.wv([$t6], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
        await $.mset((await $.wv([$t6], "DBEditTransName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t6], "CO_Out", C, false)), "FieldByName", ["ASSIGNMENT"])), "AsString")));
      }
    }
  }
  if ($.truthy($.eq((await $.v(C, "TransTypeIncOutDC")), 3))) {
    await $.mset((await $.v(C, "PanelDebet")), "Enabled", false);
    await $.mset((await $.v(C, "PanelCredit")), "Enabled", true);
    await $.mset((await $.v(C, "DebtCurCode")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "FieldByName", ["AccValCode"])), "AsString")));
    await $.mset((await $.v(C, "DebtAccSearchEdit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "FieldByName", ["AccNO"])), "AsString")));
    await $.mset((await $.v(C, "DBLookupDebtAcc")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "FieldByName", ["AccNO"])), "AsString")));
    await $.stmt((await $.call(C, "DBLookupDebtAccClick", [L0["sender"]])));
    await $.mset((await $.v(C, "CredCurCode")), "Text", "0");
    await $.mset((await $.v(C, "CreditAccSearchEdit")), "Text", "");
    await $.mset((await $.v(C, "DBEditCredAccNo")), "Text", "");
    await $.mset((await $.v(C, "DBEditCredAccName")), "Text", "");
    await $.mset((await $.v(C, "C_Ostat")), "Caption", "0");
    await $.mset((await $.v(C, "C_Pok_Ostat")), "Caption", "0");
  }
  if ($.truthy($.eq((await $.v(C, "TransTypeIncOutDC")), 4))) {
    await $.mset((await $.v(C, "PanelDebet")), "Enabled", true);
    await $.mset((await $.v(C, "PanelCredit")), "Enabled", false);
    await $.mset((await $.v(C, "DebtCurCode")), "Text", "0");
    await $.mset((await $.v(C, "DebtAccSearchEdit")), "Text", "");
    await $.mset((await $.v(C, "DBEditDebtAccNo")), "Text", "");
    await $.mset((await $.v(C, "DBEditDebtAccName")), "Text", "");
    await $.mset((await $.v(C, "D_Ostat")), "Caption", "0");
    await $.mset((await $.v(C, "D_Pok_Ostat")), "Caption", "0");
    await $.mset((await $.v(C, "CredCurCode")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "FieldByName", ["AccValCode"])), "AsString")));
    await $.mset((await $.v(C, "CreditAccSearchEdit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "FieldByName", ["AccNO"])), "AsString")));
    await $.mset((await $.v(C, "DBLookupCredAcc")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "FieldByName", ["AccNO"])), "AsString")));
    await $.stmt((await $.call(C, "DBLookupCredAccClick", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "DebitAccData")), "Active"))))) {
    await $.mcall((await $.v(C, "DebitAccData")), "Open", []);
  }
  if ($.truthy($.not((await $.mv((await $.v(C, "CreditAccData")), "Active"))))) {
    await $.mcall((await $.v(C, "CreditAccData")), "Open", []);
  }
  await $.mset((await $.v(C, "EditDebtValute")), "KeyValue", 0);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "CredCurCodeChange", async function CredCurCodeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((L0["sender"]), "Text")), ""))) {
    await $.mset((await $.v(C, "EditCredValute")), "KeyValue", (await $.call(C, "StrToInt", [(await $.mv((L0["sender"]), "Text"))])));
  } else {
    await $.mset((await $.v(C, "EditCredValute")), "KeyValue", (await $.v(C, "null")));
  }
  await $.stmt((await $.call(C, "EditCredValuteCloseUp", [L0["sender"]])));
  await $.mset((await $.v(C, "DBEditCredAccName")), "Text", "");
  await $.mset((await $.v(C, "DBEditCredAccNo")), "Text", "");
  await $.mset((await $.v(C, "DebtValue")), "Value", 0);
  await $.mset((await $.v(C, "CreditValue")), "Value", 0);
  await $.mset((await $.v(C, "Ekv")), "Value", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "editvalute_Change", async function editvalute_Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t7], "Close", [], C));
    await $.mcall((await $.wv([$t7], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t7], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute c where valu_name= ", "'"), (await $.mv((await $.wv([$t7], "EditCredValute", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t7], "Open", [], C));
    await $.mset((await $.wv([$t7], "CredCurCode", C, false)), "Text", (await $.mv((await $.wcall([$t7], "FieldByName", ["valute"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "CreditAccSearchEditChange", async function CreditAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "C_Ostat")), "Visible", true);
  await $.mset((await $.v(C, "C_Pok_Ostat")), "Visible", true);
  await $.mset((await $.v(C, "C_Ostat")), "Caption", (await $.mv((await $.mcall((await $.v(C, "CreditAccData")), "FieldByName", ["Ostat"])), "AsString")));
  await $.mset((await $.v(C, "C_Pok_Ostat")), "Caption", (await $.mv((await $.mcall((await $.v(C, "CreditAccData")), "FieldByName", ["Pok_Ostat"])), "AsString")));
  await $.mset((await $.v(C, "CashPanel")), "Enabled", (await $.or_(($.eq((await $.mv((await $.v(C, "DebitAccDataISCACHEACCOUNT")), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.v(C, "CreditAccDataISCACHEACCOUNT")), "AsInteger")), 1)))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "DBLookupCredAccClick", async function DBLookupCredAccClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CreditAccSearchEdit")), "Text", (await $.mv((await $.v(C, "DBLookupCredAcc")), "Text")));
  await $.mset((await $.v(C, "C_Ostat")), "Visible", true);
  await $.mset((await $.v(C, "C_Pok_Ostat")), "Visible", true);
  await $.mset((await $.v(C, "C_Ostat")), "Caption", (await $.mv((await $.mcall((await $.v(C, "CreditAccData")), "FieldByName", ["Ostat"])), "AsString")));
  await $.mset((await $.v(C, "C_Pok_Ostat")), "Caption", (await $.mv((await $.mcall((await $.v(C, "CreditAccData")), "FieldByName", ["Pok_Ostat"])), "AsString")));
  await $.mset((await $.v(C, "CashPanel")), "Enabled", (await $.or_(($.eq((await $.mv((await $.v(C, "DebitAccDataISCACHEACCOUNT")), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.v(C, "CreditAccDataISCACHEACCOUNT")), "AsInteger")), 1)))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "DBLookupCredAccNameClick", async function DBLookupCredAccNameClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "DBLookupCredAccClick", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("CutEditText", async function CutEditText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "x": 0, "sel": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.call(C, "TCurrencyEdit", [L0["sender"]]));
    if ($.truthy($.eq((await $.wv([$t8], "DecimalSeparator", C, false)), (await $.wv([$t8], "ThousandSeparator", C, false))))) {
      return L0.result;
    }
    if ($.truthy($.eq((await $.wcall([$t8], "Pos", [(await $.wv([$t8], "DecimalSeparator", C, false)), (await $.wv([$t8], "Text", C, false))], C)), 0))) {
      return L0.result;
    }
    await $.wset([$t8], "Sel", (await $.wv([$t8], "SelStart", C, false)), { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true });
    await $.wset([$t8], "X", $.sub($.sub((await $.wcall([$t8], "Length", [(await $.wv([$t8], "Text", C, false))], C)), (await $.wcall([$t8], "Pos", [(await $.wv([$t8], "DecimalSeparator", C, false)), (await $.wv([$t8], "Text", C, false))], C))), (await $.wv([$t8], "CurrencyDecimals", C, false))), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
    if ($.truthy(($.gt((await $.wv([$t8], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 0)))) {
      await $.wset([$t8], "Text", (await $.wcall([$t8], "Copy", [(await $.wv([$t8], "Text", C, false)), 0, ($.sub((await $.wcall([$t8], "Length", [(await $.wv([$t8], "Text", C, false))], C)), (await $.wv([$t8], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))))], C)), C);
      await $.wset([$t8], "SelStart", (await $.wv([$t8], "Sel", { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true }, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "RoundNew", async function RoundNew(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"x": $.copyArg(p0), "precision": $.copyArg(p1), result: 0, "scaledfractpart": 0, "temp": 0};
  await $.fixArgs(L0, ["x", "precision"]);
  L0["scaledfractpart"] = $.mul((await $.call(C, "Frac", [L0["x"]])), L0["precision"]);
  L0["temp"] = (await $.call(C, "Frac", [L0["scaledfractpart"]]));
  L0["scaledfractpart"] = (await $.call(C, "Int", [L0["scaledfractpart"]]));
  if ($.truthy($.ge((await $.call(C, "Round", [$.mul(L0["temp"], 100)])), 50))) {
    L0["scaledfractpart"] = $.add(L0["scaledfractpart"], 1);
  }
  if ($.truthy($.le((await $.call(C, "Round", [$.mul(L0["temp"], 100)])), (-(50))))) {
    L0["scaledfractpart"] = $.sub(L0["scaledfractpart"], 1);
  }
  L0.result = $.add((await $.call(C, "Int", [L0["x"]])), $.fdiv(L0["scaledfractpart"], L0["precision"]));
  return L0.result;
}, {"params": ["X", "Precision"], "kind": "function", "ptypes": ["Double", "Integer"]});
  U.method("TCO_Transactions", "SetAmmounts", async function SetAmmounts(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionside": $.copyArg(p0), result: undefined, "debetrate": 0, "creditrate": 0, "debitammount": 0, "creditammount": 0, "lammount": 0};
  await $.fixArgs(L0, ["transactionside"]);
  L0["debetrate"] = (await $.mv((await $.mcall((await $.v(C, "DebitCurrencyData")), "FieldByName", ["Rate"])), "AsFloat"));
  L0["creditrate"] = (await $.mv((await $.mcall((await $.v(C, "CreditCurrencyData")), "FieldByName", ["Rate"])), "AsFloat"));
  { const $t9 = L0["transactionside"];
    if ($.eq($t9, (await $.v(C, "tsDebet")))) {
      L0["lammount"] = (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "DebtValue")), "Value")), L0["debetrate"]), 1000000]));
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "DebitCurrencyData")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.v(C, "CreditCurrencyData")), "FieldByName", ["ID"])), "AsInteger"))))) {
        L0["creditammount"] = (await $.mv((await $.v(C, "DebtValue")), "Value"));
      } else {
        L0["creditammount"] = (await $.call(C, "RoundNew", [$.fdiv(L0["lammount"], L0["creditrate"]), 1000000]));
      }
      await $.mset((await $.v(C, "Ekv")), "Value", (await $.call(C, "RoundNew", [L0["lammount"], 100])));
      await $.mset((await $.v(C, "CreditValue")), "Value", (await $.call(C, "RoundNew", [L0["creditammount"], 100])));
    }
    else if ($.eq($t9, (await $.v(C, "tsCredit")))) {
      L0["lammount"] = (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "CreditValue")), "Value")), L0["creditrate"]), 1000000]));
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "DebitCurrencyData")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.v(C, "CreditCurrencyData")), "FieldByName", ["ID"])), "AsInteger"))))) {
        L0["debitammount"] = (await $.mv((await $.v(C, "CreditValue")), "Value"));
      } else {
        L0["debitammount"] = (await $.call(C, "RoundNew", [$.fdiv(L0["lammount"], L0["debetrate"]), 1000000]));
      }
      await $.mset((await $.v(C, "Ekv")), "Value", (await $.call(C, "RoundNew", [L0["lammount"], 100])));
      await $.mset((await $.v(C, "DebtValue")), "Value", (await $.call(C, "RoundNew", [L0["debitammount"], 100])));
    }
    else if ($.eq($t9, (await $.v(C, "tsUnknown")))) {
      {
        const $t10 = Self;
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t10], "DebitCurrencyData", C, false)), "FieldByName", ["ID"])), "AsInteger")), 0))) {
          await $.mset((await $.wv([$t10], "DebtValue", C, false)), "Value", (await $.mv((await $.wv([$t10], "Ekv", C, false)), "Value")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t10], "CreditCurrencyData", C, false)), "FieldByName", ["ID"])), "AsInteger")), 0))) {
          await $.mset((await $.wv([$t10], "CreditValue", C, false)), "Value", (await $.mv((await $.wv([$t10], "Ekv", C, false)), "Value")));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["TransactionSide"], "kind": "procedure", "ptypes": ["TTransactionSide"]});
  U.method("TCO_Transactions", "DebtValueChange", async function DebtValueChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), (await $.v(C, "EmptyStr"))))) {
    await $.mset((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Value", 0);
  }
  if ($.truthy($.ne((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Value")), 0.0))) {
    await $.mset((await $.v(C, "ButtonApply")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "ButtonApply")), "Enabled", false);
  }
  { const $t11 = (await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Tag"));
    if ($.eq($t11, 1)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsDebet")));
    }
    else if ($.eq($t11, 2)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsCredit")));
    }
    else if ($.eq($t11, 3)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsUnknown")));
    }
  }
  await $.stmt((await $.call(C, "SetAmmounts", [(await $.v(C, "TransactionSide"))])));
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "creditvalueChange", async function creditvalueChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DebtValue")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "DebtValue")), "Text")), "0")))), async () => ($.ne((await $.mv((await $.v(C, "CreditValue")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "CreditValue")), "Text")), "0")))), async () => ($.ne((await $.mv((await $.v(C, "Ekv")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "Ekv")), "Text")), "0")))))) {
    await $.mset((await $.v(C, "ButtonCancel")), "Enabled", true);
    await $.mset((await $.v(C, "ButtonApply")), "Enabled", true);
  }
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "CreditValue")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "CreditValue")), "Text")), "0")))))) {
    await $.mset((await $.v(C, "Ekv")), "Text", (await $.call(C, "FormatFloat", ["#.##", $.mul((await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "CreditValue")), "Text"))])), (await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "EditCredRate")), "Text"))])))])));
    await $.mset((await $.v(C, "DebtValue")), "Text", (await $.call(C, "FormatFloat", ["#.##", $.fdiv((await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "Ekv")), "Text"))])), (await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "EditDebtRate")), "Text"))])))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "TrdestChange", async function TrdestChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((L0["sender"]), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboBox5")), "KeyValue", (await $.call(C, "StrToInt", [(await $.mv((L0["sender"]), "Text"))])));
  } else {
    await $.mset((await $.v(C, "DBLookupComboBox5")), "KeyValue", (await $.v(C, "null")));
  }
  await $.mset((await $.v(C, "DBEditTransName")), "Text", (await $.mv((await $.v(C, "DBLookupComboBox5")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "DBLookupComboBox5Click", async function DBLookupComboBox5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Trdest")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboBox5")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
  await $.mset((await $.v(C, "DBEditTransName")), "Text", (await $.mv((await $.v(C, "DBLookupComboBox5")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "DebtCurCodeKeyPress", async function DebtCurCodeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "DebtAccSearchEdit")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Transactions", "DebtAccSearchEditKeyPress", async function DebtAccSearchEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "DebtValue")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Transactions", "CredCurCodeKeyPress", async function CredCurCodeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "CreditAccSearchEdit")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Transactions", "CreditAccSearchEditKeyPress", async function CreditAccSearchEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "DebtValue")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Transactions", "DebtValueKeyPress", async function DebtValueKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "Trdest")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Transactions", "TrdestKeyPress", async function TrdestKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "ButtonApply")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Transactions", "ButtonApplyKeyPress", async function ButtonApplyKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t12 = L0["sender"];
        { const $t13 = (await $.wv([$t12], "Tag", C, false));
          if ($.eq($t13, 1)) {
            await $.stmt((await $.wcall([$t12], "SelectNext", [(await $.wv([$t12], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t12], "True", C, false)), (await $.wv([$t12], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Transactions", "ButtonApplyClick", async function ButtonApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "transid": 0, "comissionid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DebtValue")), "Value")), 0.0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Məbləği daxil edin   !"])));
    return L0.result;
  }
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.mcall((await $.v(C, "DebitAccData")), "FieldByName", ["fromTrans"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.v(C, "CreditAccData")), "FieldByName", ["fromTrans"])), "AsInteger")), 1)))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Bu balans hesab(lar)ı ilə bu moduldan əməliyyat aparmaq olmaz"])));
    return L0.result;
  }
  L0["transid"] = (await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "SB_TRANSACTION")), "CallIntegerFunction", ["Transaction_Add", ["DebitID", (await $.mv((await $.mcall((await $.v(C, "DebitAccData")), "FieldByName", ["ID"])), "AsInteger")), "CreditID", (await $.mv((await $.mcall((await $.v(C, "CreditAccData")), "FieldByName", ["ID"])), "AsInteger")), "DebitAmount", (await $.mv((await $.v(C, "DebtValue")), "Value")), "CreditAmount", (await $.mv((await $.v(C, "CreditValue")), "Value")), "Lamount", (await $.mv((await $.v(C, "Ekv")), "Value")), "DebitRate", (await $.mv((await $.v(C, "EditDebtRate")), "Text")), "CreditRate", (await $.mv((await $.v(C, "EditCredRate")), "Text")), "TrName", (await $.mv((await $.v(C, "DBEditTransName")), "Text")), "pReportID", (await $.mv((await $.v(C, "ReportIDLookUp")), "KeyValue")), "pCountrID", (await $.mv((await $.v(C, "CountrIDLookUp")), "KeyValue")), "InBalanceChar", (await $.mv((await $.v(C, "CashSymbolLookUp")), "KeyValue")), "OutBalanceChar", (await $.mv((await $.v(C, "ConvertationSymbolLookUp")), "KeyValue"))]]));
  if ($.truthy((await $.or_(($.eq((await $.v(C, "TransTypeIncOutDC")), 1)), async () => ($.eq((await $.v(C, "TransTypeIncOutDC")), 2)))))) {
    L0["comissionid"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "CO_TransTypeIncOut")), "SettingsBrowser")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OSCT")), "CallProcedure", ["SetTransactions", [L0["comissionid"], (await $.mv((await $.mcall((await $.v(C, "DebitAccData")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.v(C, "CreditAccData")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.v(C, "DebtValue")), "Value")), (await $.mv((await $.v(C, "CreditValue")), "Value")), (await $.v(C, "null")), L0["transid"]]])));
  }
  if ($.truthy($.eq((await $.v(C, "TransTypeIncOutDC")), 3))) {
    await $.mset((await $.v(C, "CreditAccSearchEdit")), "Text", "");
    await $.mset((await $.v(C, "DBEditCredAccName")), "Text", "");
    await $.mset((await $.v(C, "DBEditCredAccNo")), "Text", "");
  }
  if ($.truthy($.eq((await $.v(C, "TransTypeIncOutDC")), 4))) {
    await $.mset((await $.v(C, "DebtAccSearchEdit")), "Text", "");
    await $.mset((await $.v(C, "DBEditDebtAccNo")), "Text", "");
    await $.mset((await $.v(C, "DBEditDebtAccName")), "Text", "");
  }
  await $.mset((await $.v(C, "DebtValue")), "Text", "");
  await $.mset((await $.v(C, "CreditValue")), "Text", "");
  await $.mset((await $.v(C, "Ekv")), "Text", "");
  await $.mset((await $.v(C, "Trdest")), "Text", "");
  await $.mcall((await $.mv((await $.mv((await $.v(C, "CO_DataMod")), "Transactions")), "Session")), "Commit", []);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Transactions")), "Refresh", []);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "ButtonCloseClick", async function ButtonCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "ButtonCancelClick", async function ButtonCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebtValue")), "Text", "");
  await $.mset((await $.v(C, "CreditValue")), "Text", "");
  await $.mset((await $.v(C, "Ekv")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "SetCurrencyFilter", async function SetCurrencyFilter(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"accountdataset": $.copyArg(p0), "currencydataset": $.copyArg(p1), result: undefined, "accountid": 0};
  await $.fixArgs(L0, ["accountdataset", "currencydataset"]);
  L0["accountid"] = (await $.mv((await $.mcall(L0["accountdataset"], "FieldByName", ["ID"])), "AsInteger"));
  await $.mset(L0["accountdataset"], "Filtered", false);
  await $.mset(L0["accountdataset"], "Filter", $.add("val_acc=", (await $.mv((await $.mcall(L0["currencydataset"], "FieldByName", ["ID"])), "AsString"))));
  await $.mset(L0["accountdataset"], "Filtered", true);
  await $.stmt((await $.mcall(L0["accountdataset"], "Locate", ["ID", L0["accountid"], []])));
  return L0.result;
}, {"params": ["AccountDataSet", "CurrencyDataSet"], "kind": "procedure", "ptypes": ["TDataSet", "TDataSet"]});
  U.method("TCO_Transactions", "EditDebtValuteCloseUp", async function EditDebtValuteCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t14 = (await $.v(C, "DebtAccSearchEdit"));
    const $t15 = (await $.wv([$t14], "CO_DataMod", C, false));
    await $.mset((await $.mv((await $.wv([$t14, $t15], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t14, $t15], "False", C, false)));
    await $.mset((await $.mv((await $.wv([$t14, $t15], "DataSource", C, false)), "DataSet")), "Filter", $.add("val_acc= ", (await $.mv((await $.mcall((await $.wv([$t14, $t15], "DebitCurrencyData", C, false)), "FieldByName", ["ID"])), "AsString"))));
    await $.mset((await $.mv((await $.wv([$t14, $t15], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t14, $t15], "True", C, false)));
    await $.wset([$t14, $t15], "Text", "", C);
  }
  {
    const $t16 = (await $.mv((await $.v(C, "CO_DataMod")), "temprate"));
    await $.stmt($.wcall([$t16], "Close", [], C));
    await $.mset((await $.wv([$t16], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from temprate c where val_kod= ", "'"), (await $.mv((await $.wv([$t16], "DebtCurCode", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t16], "Open", [], C));
    await $.mset((await $.wv([$t16], "EditDebtRate", C, false)), "Text", (await $.mv((await $.wcall([$t16], "FieldByName", ["ostat"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "editrateChange", async function editrateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "DebtCurCodeChange", async function DebtCurCodeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((L0["sender"]), "Text")), ""))) {
    await $.mset((await $.v(C, "EditDebtValute")), "KeyValue", (await $.call(C, "StrToInt", [(await $.mv((L0["sender"]), "Text"))])));
  } else {
    await $.mset((await $.v(C, "EditDebtValute")), "KeyValue", (await $.v(C, "null")));
  }
  await $.stmt((await $.call(C, "EditDebtValuteCloseUp", [L0["sender"]])));
  await $.mset((await $.v(C, "DBEditDebtAccNo")), "Text", "");
  await $.mset((await $.v(C, "DBEditDebtAccName")), "Text", "");
  await $.mset((await $.v(C, "DebtValue")), "Value", 0);
  await $.mset((await $.v(C, "CreditValue")), "Value", 0);
  await $.mset((await $.v(C, "Ekv")), "Value", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "EditDebtValuteClick", async function EditDebtValuteClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebtCurCode")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "EditDebtValute")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "editvalute_Click", async function editvalute_Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CredCurCode")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "EditDebtValute")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "DBLookupComboBox7Click", async function DBLookupComboBox7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CredCurCode")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "EditCredValute")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "EditCredValuteCloseUp", async function EditCredValuteCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.v(C, "CreditAccSearchEdit"));
    const $t18 = (await $.wv([$t17], "CO_DataMod", C, false));
    await $.mset((await $.mv((await $.wv([$t17, $t18], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t17, $t18], "False", C, false)));
    await $.mset((await $.mv((await $.wv([$t17, $t18], "DataSource", C, false)), "DataSet")), "Filter", $.add("val_acc= ", (await $.mv((await $.mcall((await $.wv([$t17, $t18], "CreditCurrencyData", C, false)), "FieldByName", ["ID"])), "AsString"))));
    await $.mset((await $.mv((await $.wv([$t17, $t18], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t17, $t18], "True", C, false)));
    await $.wset([$t17, $t18], "Text", "", C);
  }
  {
    const $t19 = (await $.mv((await $.v(C, "CO_DataMod")), "temprate"));
    await $.stmt($.wcall([$t19], "Close", [], C));
    await $.mcall((await $.wv([$t19], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t19], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from temprate c where val_kod= ", "'"), (await $.mv((await $.wv([$t19], "CredCurCode", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t19], "Open", [], C));
    await $.mset((await $.wv([$t19], "EditCredRate", C, false)), "Text", (await $.mv((await $.wcall([$t19], "FieldByName", ["ostat"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "ReportIDDBEditChange", async function ReportIDDBEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ReportIDLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "CountrIDDBEditChange", async function CountrIDDBEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CountrIDLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "ReportIDLookUpCloseUp", async function ReportIDLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ReportIDDBEdit")), "Text", (await $.mv((L0["sender"]), "KeyValue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "CountrIDLookUpCloseUp", async function CountrIDLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CountrIDDBEdit")), "Text", (await $.mv((L0["sender"]), "KeyValue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "ConvertationSymbolLookUpCloseUp", async function ConvertationSymbolLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "SEditConvertationID")), "Text", (await $.mv((L0["sender"]), "KeyValue")));
  } catch ($t20) {
    $.rethrowControl($t20);
    $.handled($t20);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "CashSymbolLookUpCloseUp", async function CashSymbolLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "SEditCashSymbol")), "Text", (await $.mv((L0["sender"]), "KeyValue")));
  } catch ($t21) {
    $.rethrowControl($t21);
    $.handled($t21);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "SEditCashSymbolChange", async function SEditCashSymbolChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CashSymbolLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "SEditConvertationIDChange", async function SEditConvertationIDChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ConvertationSymbolLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t22 = (await $.v(C, "CO_DataMod"));
    await $.mcall((await $.wv([$t22], "Cntries", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "ReportDesc", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "ConvertationSymbols", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "CashSymbols", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t22], "Trdestination", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Transactions", "SEditCashSymbolEnter", async function SEditCashSymbolEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetCashSymbol", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
