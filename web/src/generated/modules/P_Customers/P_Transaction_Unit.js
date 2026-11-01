// Generated from P_Transaction_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("P_Transaction_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "ActnList", "ComCtrls", "StdCtrls", "CurrencyEdit", "Mask", "DBCtrls", "SearchEdit", "ExtCtrls", "NLSLocalizer", "Db", "OracleData", "Variants", "P_Datamod_Unit", "sboapiDataModuleImpl", "SBTranslateProc", "P_CO_In_Form"]);
  const C = [U];
  U.enumType("ttransactionside", 3);
  U.const("tsDebet", 0);
  U.const("tsCredit", 1);
  U.const("tsUnknown", 2);
  U.defClass("TP_Transaction", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "headercontrol1": {"name": "HeaderControl1", "type": "THeaderControl"}, "paneldebet": {"name": "PanelDebet", "type": "TPanel"}, "paneldebit": {"name": "PanelDebit", "type": "TPanel"}, "paneldebitrest": {"name": "PanelDebitRest", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dblookupdebtaccname": {"name": "DBLookupDebtAccName", "type": "TDBLookupComboBox"}, "dbeditdebtaccname": {"name": "DBEditDebtAccName", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "debtaccsearchedit": {"name": "DebtAccSearchEdit", "type": "TSearchEdit"}, "dblookupdebtacc": {"name": "DBLookupDebtAcc", "type": "TDBLookupComboBox"}, "dbeditdebtaccno": {"name": "DBEditDebtAccNo", "type": "TDBEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "panelcredit": {"name": "PanelCredit", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "c_ostat": {"name": "C_Ostat", "type": "TLabel"}, "c_pok_ostat": {"name": "C_Pok_Ostat", "type": "TLabel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "dblookupcredaccname": {"name": "DBLookupCredAccName", "type": "TDBLookupComboBox"}, "dbeditcredaccname": {"name": "DBEditCredAccName", "type": "TDBEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "creditaccsearchedit": {"name": "CreditAccSearchEdit", "type": "TSearchEdit"}, "dblookupcredacc": {"name": "DBLookupCredAcc", "type": "TDBLookupComboBox"}, "dbeditcredaccno": {"name": "DBEditCredAccNO", "type": "TDBEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "credcurcode": {"name": "CredCurCode", "type": "TEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "debtvalue": {"name": "DebtValue", "type": "TCurrencyEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "creditvalue": {"name": "CreditValue", "type": "TCurrencyEdit"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "ekv": {"name": "Ekv", "type": "TCurrencyEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "convertationsymbollookup": {"name": "ConvertationSymbolLookUp", "type": "TDBLookupComboBox"}, "seditconvertationid": {"name": "SEditConvertationID", "type": "TSearchEdit"}, "cashpanel": {"name": "CashPanel", "type": "TPanel"}, "cashsymbollookup": {"name": "CashSymbolLookUp", "type": "TDBLookupComboBox"}, "seditcashsymbol": {"name": "SEditCashSymbol", "type": "TSearchEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "transdate": {"name": "TransDate", "type": "TDateTimePicker"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "buttonapply": {"name": "ButtonApply", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "buttonclose": {"name": "ButtonClose", "type": "TButton"}, "trdest": {"name": "TrDest", "type": "TEdit"}, "acc_id": {"name": "acc_id", "type": "TDBEdit"}, "acc_id_": {"name": "acc_id_", "type": "TDBEdit"}, "debitcurrencydata": {"name": "DebitCurrencyData", "type": "TOracleDataSet"}, "debitcurrencydataid": {"name": "DebitCurrencyDataID", "type": "TIntegerField"}, "debitcurrencydatasname": {"name": "DebitCurrencyDataSNAME", "type": "TWideStringField"}, "debitcurrencydataname": {"name": "DebitCurrencyDataNAME", "type": "TWideStringField"}, "debitcurrencydatarate": {"name": "DebitCurrencyDataRATE", "type": "TFloatField"}, "debitcurrency": {"name": "DebitCurrency", "type": "TDataSource"}, "debitaccdata": {"name": "DebitAccData", "type": "TOracleDataSet"}, "debitaccs": {"name": "DebitAccs", "type": "TDataSource"}, "debtcurcode": {"name": "DebtCurCode", "type": "TEdit"}, "creditcurrencydata": {"name": "CreditCurrencyData", "type": "TOracleDataSet"}, "creditcurrencydataid": {"name": "CreditCurrencyDataID", "type": "TIntegerField"}, "creditcurrencydatasname": {"name": "CreditCurrencyDataSNAME", "type": "TWideStringField"}, "creditcurrencydataname": {"name": "CreditCurrencyDataNAME", "type": "TWideStringField"}, "creditcurrencydatarate": {"name": "CreditCurrencyDataRATE", "type": "TFloatField"}, "creditcurrency": {"name": "CreditCurrency", "type": "TDataSource"}, "editcredvalute": {"name": "EditCredValute", "type": "TDBLookupComboBox"}, "creditaccdata": {"name": "CreditAccData", "type": "TOracleDataSet"}, "creditaccs": {"name": "CreditAccs", "type": "TDataSource"}, "d_ostat": {"name": "D_Ostat", "type": "TLabel"}, "dbedittransname": {"name": "DBEditTransName", "type": "TEdit"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "reportiddbedit": {"name": "ReportIDDBEdit", "type": "TEdit"}, "reportidlookup": {"name": "ReportIDLookUp", "type": "TDBLookupComboBox"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "countriddbedit": {"name": "CountrIDDBEdit", "type": "TEdit"}, "countridlookup": {"name": "CountrIDLookUp", "type": "TDBLookupComboBox"}, "editdebtvalute": {"name": "EditDebtValute", "type": "TDBLookupComboBox"}, "btnfullrefresh": {"name": "BtnFullRefresh", "type": "TButton"}, "d_pok_ostat": {"name": "D_Pok_Ostat", "type": "TLabel"}, "debitaccdataid": {"name": "DebitAccDataID", "type": "TFloatField"}, "debitaccdataacc_no": {"name": "DebitAccDataACC_NO", "type": "TWideStringField"}, "debitaccdataval_acc": {"name": "DebitAccDataVAL_ACC", "type": "TIntegerField"}, "debitaccdataname": {"name": "DebitAccDataNAME", "type": "TWideStringField"}, "debitaccdataiscacheaccount": {"name": "DebitAccDataISCACHEACCOUNT", "type": "TFloatField"}, "debitaccdataostat": {"name": "DebitAccDataOSTAT", "type": "TFloatField"}, "debitaccdatapok_ostat": {"name": "DebitAccDataPOK_OSTAT", "type": "TFloatField"}, "creditaccdataid": {"name": "CreditAccDataID", "type": "TFloatField"}, "creditaccdataacc_no": {"name": "CreditAccDataACC_NO", "type": "TWideStringField"}, "creditaccdataval_acc": {"name": "CreditAccDataVAL_ACC", "type": "TIntegerField"}, "creditaccdataname": {"name": "CreditAccDataNAME", "type": "TWideStringField"}, "creditaccdataiscacheaccount": {"name": "CreditAccDataISCACHEACCOUNT", "type": "TFloatField"}, "creditaccdataostat": {"name": "CreditAccDataOSTAT", "type": "TFloatField"}, "creditaccdatapok_ostat": {"name": "CreditAccDataPOK_OSTAT", "type": "TFloatField"}, "editdebtrate": {"name": "EditDebtRate", "type": "TEdit"}, "debitaccdatafromtrans": {"name": "DebitAccDataFROMTRANS", "type": "TFloatField"}, "creditaccdatafromtrans": {"name": "CreditAccDataFROMTRANS", "type": "TFloatField"}, "editcredrate": {"name": "EditCredRate", "type": "TEdit"}, "label6": {"name": "Label6", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "ods_settings": {"name": "ODS_Settings", "type": "TOracleDataSet"}, "ods_settingsvalue": {"name": "ODS_SettingsVALUE", "type": "TWideStringField"}, "creditaccdataacc_no_search": {"name": "CreditAccDataACC_NO_SEARCH", "type": "TWideStringField"}, "debitaccdataacc_no_search": {"name": "DebitAccDataACC_NO_SEARCH", "type": "TWideStringField"}, "modifed": {"name": "Modifed", "type": "boolean"}, "debt": {"name": "Debt", "type": "boolean"}, "transactionside": {"name": "TransactionSide", "type": "TTransactionSide"}}, {});
  U.init(async () => {
    U.var_("P_Transaction", null, "TP_Transaction");
    U.var_("TransTypeIncOutDC", 0, "Integer");
  });
  U.func("LoadPlugin", async function LoadPlugin(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"pluginname": $.copyArg(p0), "pluginparam": $.copyArg(p1), result: undefined, "pluginhandle": 0, "exportproc": null};
  await $.fixArgs(L0, ["pluginname", "pluginparam"]);
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), L0["pluginname"])]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportproc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], "InitPlugin"]));
    await $.stmt((await $.callv(L0["exportproc"], [L0["pluginparam"]])));
  }
  return L0.result;
}, {"params": ["PluginName", "PluginParam"], "kind": "procedure", "ptypes": ["String", "String"]});
  U.method("TP_Transaction", "DebtAccSearchEditChange", async function DebtAccSearchEditChange(Self, p0) {
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
  U.method("TP_Transaction", "DBEditDebtAccNoChange", async function DBEditDebtAccNoChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "DBLookupDebtAccClick", async function DBLookupDebtAccClick(Self, p0) {
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
  U.method("TP_Transaction", "DBLookupDebtAccNameClick", async function DBLookupDebtAccNameClick(Self, p0) {
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
  U.method("TP_Transaction", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Sysdat")), "Open", []);
  await $.mset((await $.v(C, "TransDate")), "Date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Sysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
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
  if ($.truthy($.not((await $.mv((await $.v(C, "DebitAccData")), "Active"))))) {
    await $.mcall((await $.v(C, "DebitAccData")), "Open", []);
  } else {
    await $.mcall((await $.v(C, "DebitAccData")), "Refresh", []);
  }
  if ($.truthy($.not((await $.mv((await $.v(C, "CreditAccData")), "Active"))))) {
    await $.mcall((await $.v(C, "CreditAccData")), "Open", []);
  } else {
    await $.mcall((await $.v(C, "CreditAccData")), "Refresh", []);
  }
  if ($.truthy($.eq((await $.v(C, "TransTypeIncOutDC")), 1))) {
    await $.mset((await $.v(C, "PanelDebet")), "Enabled", false);
    await $.mset((await $.v(C, "PanelCredit")), "Enabled", false);
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["TYPEID"])), "AsInteger")), 1))) {
      {
        const $t1 = (await $.wobj(C, "P_DataModule"));
        await $.mset((await $.wv([$t1], "DebtCurCode", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t1], "Account", C, false)), "FieldByName", ["AccValCode"])), "AsString")));
        await $.mset((await $.wv([$t1], "DebtAccSearchEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t1], "Account", C, false)), "FieldByName", ["AccNO"])), "AsString")));
        await $.mset((await $.wv([$t1], "DBLookupDebtAcc", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t1], "Account", C, false)), "FieldByName", ["AccNO"])), "AsString")));
        await $.mcall((await $.wv([$t1], "DebitAccData", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t1], "DebitAccData", C, false)), "SetVAriable", ["v_accNo", (await $.mv((await $.mcall((await $.wv([$t1], "Account", C, false)), "FieldByName", ["AccNO"])), "AsString"))])));
        await $.mcall((await $.wv([$t1], "DebitAccData", C, false)), "Open", []);
        await $.stmt((await $.wcall([$t1], "DBLookupDebtAccClick", [(await $.wv([$t1], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
        await $.mset((await $.wv([$t1], "CredCurCode", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t1], "CO_Out", C, false)), "FieldByName", ["CreditCurCode"])), "AsString")));
        await $.mset((await $.wv([$t1], "CreditAccSearchEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t1], "CO_Out", C, false)), "FieldByName", ["CREDITACCOUNT"])), "AsString")));
        await $.mset((await $.wv([$t1], "DBLookupCredAcc", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t1], "CO_Out", C, false)), "FieldByName", ["CREDITACCOUNT"])), "AsString")));
        await $.mcall((await $.wv([$t1], "CreditAccData", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t1], "CreditAccData", C, false)), "SetVAriable", ["v_accNo", (await $.mv((await $.mcall((await $.wv([$t1], "CO_Out", C, false)), "FieldByName", ["CREDITACCOUNT"])), "AsString"))])));
        await $.mcall((await $.wv([$t1], "CreditAccData", C, false)), "Open", []);
        await $.stmt((await $.wcall([$t1], "DBLookupCredAccClick", [(await $.wv([$t1], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
        await $.mset((await $.wv([$t1], "DBEditTransName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t1], "CO_Out", C, false)), "FieldByName", ["ASSIGNMENT"])), "AsString")));
      }
    } else {
      {
        const $t2 = (await $.wobj(C, "P_DataModule"));
        await $.mset((await $.wv([$t2], "DebtCurCode", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t2], "CO_In", C, false)), "FieldByName", ["DebitCurCode"])), "AsString")));
        await $.mset((await $.wv([$t2], "DebtAccSearchEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t2], "CO_In", C, false)), "FieldByName", ["DebitAccount"])), "AsString")));
        await $.mset((await $.wv([$t2], "DBLookupDebtAcc", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t2], "CO_In", C, false)), "FieldByName", ["DebitAccount"])), "AsString")));
        await $.mcall((await $.wv([$t2], "DebitAccData", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t2], "DebitAccData", C, false)), "SetVAriable", ["v_accNo", (await $.mv((await $.mcall((await $.wv([$t2], "CO_In", C, false)), "FieldByName", ["DebitAccount"])), "AsString"))])));
        await $.mcall((await $.wv([$t2], "DebitAccData", C, false)), "Open", []);
        await $.stmt((await $.wcall([$t2], "DBLookupDebtAccClick", [(await $.wv([$t2], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
        await $.mset((await $.wv([$t2], "CredCurCode", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t2], "Account", C, false)), "FieldByName", ["AccValCode"])), "AsString")));
        await $.mset((await $.wv([$t2], "CreditAccSearchEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t2], "Account", C, false)), "FieldByName", ["AccNO"])), "AsString")));
        await $.mset((await $.wv([$t2], "DBLookupCredAcc", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t2], "Account", C, false)), "FieldByName", ["AccNO"])), "AsString")));
        await $.mcall((await $.wv([$t2], "CreditAccData", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t2], "CreditAccData", C, false)), "SetVAriable", ["v_accNo", (await $.mv((await $.mcall((await $.wv([$t2], "Account", C, false)), "FieldByName", ["AccNO"])), "AsString"))])));
        await $.mcall((await $.wv([$t2], "CreditAccData", C, false)), "Open", []);
        await $.stmt((await $.wcall([$t2], "DBLookupCredAccClick", [(await $.wv([$t2], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
        await $.mset((await $.wv([$t2], "DBEditTransName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t2], "CO_In", C, false)), "FieldByName", ["ASSIGNMENT"])), "AsString")));
      }
    }
  }
  if ($.truthy($.eq((await $.v(C, "TransTypeIncOutDC")), 2))) {
    await $.mset((await $.v(C, "PanelDebet")), "Enabled", false);
    await $.mset((await $.v(C, "PanelCredit")), "Enabled", false);
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["TYPEID"])), "AsInteger")), 1))) {
      {
        const $t3 = (await $.wobj(C, "P_DataModule"));
        await $.mset((await $.wv([$t3], "DebtCurCode", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t3], "CO_In", C, false)), "FieldByName", ["DebitCurCode"])), "AsString")));
        await $.mset((await $.wv([$t3], "DebtAccSearchEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t3], "CO_In", C, false)), "FieldByName", ["DebitAccount"])), "AsString")));
        await $.mset((await $.wv([$t3], "DBLookupDebtAcc", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t3], "CO_In", C, false)), "FieldByName", ["DebitAccount"])), "AsString")));
        await $.mcall((await $.wv([$t3], "DebitAccData", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t3], "DebitAccData", C, false)), "SetVAriable", ["v_accNo", (await $.mv((await $.mcall((await $.wv([$t3], "CO_In", C, false)), "FieldByName", ["DebitAccount"])), "AsString"))])));
        await $.mcall((await $.wv([$t3], "DebitAccData", C, false)), "Open", []);
        await $.stmt((await $.wcall([$t3], "DBLookupDebtAccClick", [(await $.wv([$t3], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
        await $.mset((await $.wv([$t3], "CredCurCode", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t3], "Account", C, false)), "FieldByName", ["AccValCode"])), "AsString")));
        await $.mset((await $.wv([$t3], "CreditAccSearchEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t3], "Account", C, false)), "FieldByName", ["AccNO"])), "AsString")));
        await $.mset((await $.wv([$t3], "DBLookupCredAcc", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t3], "Account", C, false)), "FieldByName", ["AccNO"])), "AsString")));
        await $.mcall((await $.wv([$t3], "CreditAccData", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t3], "CreditAccData", C, false)), "SetVAriable", ["v_accNo", (await $.mv((await $.mcall((await $.wv([$t3], "Account", C, false)), "FieldByName", ["AccNO"])), "AsString"))])));
        await $.mcall((await $.wv([$t3], "CreditAccData", C, false)), "Open", []);
        await $.stmt((await $.wcall([$t3], "DBLookupCredAccClick", [(await $.wv([$t3], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
        await $.mset((await $.wv([$t3], "DBEditTransName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t3], "CO_In", C, false)), "FieldByName", ["ASSIGNMENT"])), "AsString")));
      }
    } else {
      {
        const $t4 = (await $.wobj(C, "P_DataModule"));
        await $.mset((await $.wv([$t4], "DebtCurCode", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t4], "Account", C, false)), "FieldByName", ["AccValCode"])), "AsString")));
        await $.mset((await $.wv([$t4], "DebtAccSearchEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t4], "Account", C, false)), "FieldByName", ["AccNO"])), "AsString")));
        await $.mset((await $.wv([$t4], "DBLookupDebtAcc", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t4], "Account", C, false)), "FieldByName", ["AccNO"])), "AsString")));
        await $.mcall((await $.wv([$t4], "DebitAccData", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t4], "DebitAccData", C, false)), "SetVAriable", ["v_accNo", (await $.mv((await $.mcall((await $.wv([$t4], "Account", C, false)), "FieldByName", ["AccNO"])), "AsString"))])));
        await $.mcall((await $.wv([$t4], "DebitAccData", C, false)), "Open", []);
        await $.stmt((await $.wcall([$t4], "DBLookupDebtAccClick", [(await $.wv([$t4], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
        await $.mset((await $.wv([$t4], "CredCurCode", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t4], "CO_Out", C, false)), "FieldByName", ["CreditCurCode"])), "AsString")));
        await $.mset((await $.wv([$t4], "CreditAccSearchEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t4], "CO_Out", C, false)), "FieldByName", ["CREDITACCOUNT"])), "AsString")));
        await $.mset((await $.wv([$t4], "DBLookupCredAcc", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t4], "CO_Out", C, false)), "FieldByName", ["CREDITACCOUNT"])), "AsString")));
        await $.mcall((await $.wv([$t4], "CreditAccData", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t4], "CreditAccData", C, false)), "SetVAriable", ["v_accNo", (await $.mv((await $.mcall((await $.wv([$t4], "CO_Out", C, false)), "FieldByName", ["CREDITACCOUNT"])), "AsString"))])));
        await $.mcall((await $.wv([$t4], "CreditAccData", C, false)), "Open", []);
        await $.stmt((await $.wcall([$t4], "DBLookupCredAccClick", [(await $.wv([$t4], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
        await $.mset((await $.wv([$t4], "DBEditTransName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t4], "CO_Out", C, false)), "FieldByName", ["ASSIGNMENT"])), "AsString")));
      }
    }
  }
  if ($.truthy($.eq((await $.v(C, "TransTypeIncOutDC")), 3))) {
    await $.mset((await $.v(C, "PanelDebet")), "Enabled", false);
    await $.mset((await $.v(C, "PanelCredit")), "Enabled", true);
    await $.mcall((await $.v(C, "DebitAccData")), "Close", []);
    await $.stmt((await $.mcall((await $.v(C, "DebitAccData")), "SetVAriable", ["v_accNo", "%%"])));
    await $.mcall((await $.v(C, "DebitAccData")), "Open", []);
    await $.mset((await $.v(C, "DebtCurCode")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["AccValCode"])), "AsString")));
    await $.mset((await $.v(C, "DebtAccSearchEdit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["AccNO"])), "AsString")));
    await $.mset((await $.v(C, "DBLookupDebtAcc")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["AccNO"])), "AsString")));
    await $.stmt((await $.call(C, "DBLookupDebtAccClick", [L0["sender"]])));
    await $.mcall((await $.v(C, "CreditAccData")), "Close", []);
    await $.stmt((await $.mcall((await $.v(C, "CreditAccData")), "SetVAriable", ["v_accNo", "%%"])));
    await $.mcall((await $.v(C, "CreditAccData")), "Open", []);
    await $.mset((await $.v(C, "CredCurCode")), "Text", "0");
    await $.mset((await $.v(C, "CreditAccSearchEdit")), "Text", "");
    await $.mset((await $.v(C, "DBEditCredAccNO")), "Text", "");
    await $.mset((await $.v(C, "DBEditCredAccName")), "Text", "");
    await $.mset((await $.v(C, "C_Ostat")), "Caption", "0");
    await $.mset((await $.v(C, "C_Pok_Ostat")), "Caption", "0");
  }
  if ($.truthy($.eq((await $.v(C, "TransTypeIncOutDC")), 4))) {
    await $.mset((await $.v(C, "PanelDebet")), "Enabled", true);
    await $.mset((await $.v(C, "PanelCredit")), "Enabled", false);
    await $.mcall((await $.v(C, "DebitAccData")), "Close", []);
    await $.stmt((await $.mcall((await $.v(C, "DebitAccData")), "SetVAriable", ["v_accNo", "%%"])));
    await $.mcall((await $.v(C, "DebitAccData")), "Open", []);
    await $.mset((await $.v(C, "DebtCurCode")), "Text", "0");
    await $.mset((await $.v(C, "DebtAccSearchEdit")), "Text", "");
    await $.mset((await $.v(C, "DBEditDebtAccNo")), "Text", "");
    await $.mset((await $.v(C, "DBEditDebtAccName")), "Text", "");
    await $.mset((await $.v(C, "D_Ostat")), "Caption", "0");
    await $.mset((await $.v(C, "D_Pok_Ostat")), "Caption", "0");
    await $.mcall((await $.v(C, "CreditAccData")), "Close", []);
    await $.stmt((await $.mcall((await $.v(C, "CreditAccData")), "SetVAriable", ["v_accNo", "%%"])));
    await $.mcall((await $.v(C, "CreditAccData")), "Open", []);
    await $.mset((await $.v(C, "CredCurCode")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["AccValCode"])), "AsString")));
    await $.mset((await $.v(C, "CreditAccSearchEdit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["AccNO"])), "AsString")));
    await $.mset((await $.v(C, "DBLookupCredAcc")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["AccNO"])), "AsString")));
    await $.stmt((await $.call(C, "DBLookupCredAccClick", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "ODS_Settings")), "Active"))))) {
    await $.mcall((await $.v(C, "ODS_Settings")), "Open", []);
    await $.mcall((await $.v(C, "DebitAccData")), "Close", []);
    await $.stmt((await $.mcall((await $.v(C, "DebitAccData")), "SetVariable", ["SRC_POS", (await $.mv((await $.v(C, "ODS_SettingsVALUE")), "AsInteger"))])));
    await $.stmt((await $.mcall((await $.v(C, "CreditAccData")), "SetVariable", ["SRC_POS", (await $.mv((await $.v(C, "ODS_SettingsVALUE")), "AsInteger"))])));
  }
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
  U.method("TP_Transaction", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BtnFullRefresh")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "CredCurCodeChange", async function CredCurCodeChange(Self, p0) {
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
  await $.mset((await $.v(C, "DBEditCredAccNO")), "Text", "");
  await $.mset((await $.v(C, "DebtValue")), "Value", 0);
  await $.mset((await $.v(C, "CreditValue")), "Value", 0);
  await $.mset((await $.v(C, "Ekv")), "Value", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "CreditAccSearchEditChange", async function CreditAccSearchEditChange(Self, p0) {
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
  U.method("TP_Transaction", "DBLookupCredAccClick", async function DBLookupCredAccClick(Self, p0) {
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
  U.method("TP_Transaction", "DBLookupCredAccNameClick", async function DBLookupCredAccNameClick(Self, p0) {
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
    const $t5 = (await $.call(C, "TCurrencyEdit", [L0["sender"]]));
    if ($.truthy($.eq((await $.wv([$t5], "DecimalSeparator", C, false)), (await $.wv([$t5], "ThousandSeparator", C, false))))) {
      return L0.result;
    }
    if ($.truthy($.eq((await $.wcall([$t5], "Pos", [(await $.wv([$t5], "DecimalSeparator", C, false)), (await $.wv([$t5], "Text", C, false))], C)), 0))) {
      return L0.result;
    }
    await $.wset([$t5], "Sel", (await $.wv([$t5], "SelStart", C, false)), { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true });
    await $.wset([$t5], "X", $.sub($.sub((await $.wcall([$t5], "Length", [(await $.wv([$t5], "Text", C, false))], C)), (await $.wcall([$t5], "Pos", [(await $.wv([$t5], "DecimalSeparator", C, false)), (await $.wv([$t5], "Text", C, false))], C))), (await $.wv([$t5], "CurrencyDecimals", C, false))), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
    if ($.truthy(($.gt((await $.wv([$t5], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 0)))) {
      await $.wset([$t5], "Text", (await $.wcall([$t5], "Copy", [(await $.wv([$t5], "Text", C, false)), 0, ($.sub((await $.wcall([$t5], "Length", [(await $.wv([$t5], "Text", C, false))], C)), (await $.wv([$t5], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))))], C)), C);
      await $.wset([$t5], "SelStart", (await $.wv([$t5], "Sel", { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true }, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "RoundNew", async function RoundNew(Self, p0, p1) {
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
  U.method("TP_Transaction", "SetAmmounts", async function SetAmmounts(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionside": $.copyArg(p0), result: undefined, "debetrate": 0, "creditrate": 0, "debitammount": 0, "creditammount": 0, "lammount": 0};
  await $.fixArgs(L0, ["transactionside"]);
  L0["debetrate"] = (await $.mv((await $.mcall((await $.v(C, "DebitCurrencyData")), "FieldByName", ["Rate"])), "Asfloat"));
  L0["creditrate"] = (await $.mv((await $.mcall((await $.v(C, "CreditCurrencyData")), "FieldByName", ["Rate"])), "Asfloat"));
  { const $t6 = L0["transactionside"];
    if ($.eq($t6, (await $.v(C, "tsDebet")))) {
      L0["lammount"] = (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "DebtValue")), "Value")), L0["debetrate"]), 1000000]));
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "DebitCurrencyData")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.v(C, "CreditCurrencyData")), "FieldByName", ["ID"])), "AsInteger"))))) {
        L0["creditammount"] = (await $.mv((await $.v(C, "DebtValue")), "Value"));
      } else {
        L0["creditammount"] = (await $.call(C, "RoundNew", [$.fdiv(L0["lammount"], L0["creditrate"]), 1000000]));
      }
      await $.mset((await $.v(C, "Ekv")), "Value", (await $.call(C, "RoundNew", [L0["lammount"], 100])));
      await $.mset((await $.v(C, "CreditValue")), "Value", (await $.call(C, "RoundNew", [L0["creditammount"], 100])));
    }
    else if ($.eq($t6, (await $.v(C, "tsCredit")))) {
      L0["lammount"] = (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "CreditValue")), "Value")), L0["creditrate"]), 1000000]));
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "DebitCurrencyData")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.v(C, "CreditCurrencyData")), "FieldByName", ["ID"])), "AsInteger"))))) {
        L0["debitammount"] = (await $.mv((await $.v(C, "CreditValue")), "Value"));
      } else {
        L0["debitammount"] = (await $.call(C, "RoundNew", [$.fdiv(L0["lammount"], L0["debetrate"]), 1000000]));
      }
      await $.mset((await $.v(C, "Ekv")), "Value", (await $.call(C, "RoundNew", [L0["lammount"], 100])));
      await $.mset((await $.v(C, "DebtValue")), "Value", (await $.call(C, "RoundNew", [L0["debitammount"], 100])));
    }
    else if ($.eq($t6, (await $.v(C, "tsUnknown")))) {
      {
        const $t7 = Self;
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t7], "DebitCurrencyData", C, false)), "FieldByName", ["ID"])), "AsInteger")), 0))) {
          await $.mset((await $.wv([$t7], "DebtValue", C, false)), "Value", (await $.mv((await $.wv([$t7], "Ekv", C, false)), "Value")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t7], "CreditCurrencyData", C, false)), "FieldByName", ["ID"])), "AsInteger")), 0))) {
          await $.mset((await $.wv([$t7], "CreditValue", C, false)), "Value", (await $.mv((await $.wv([$t7], "Ekv", C, false)), "Value")));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["TransactionSide"], "kind": "procedure", "ptypes": ["TTransactionSide"]});
  U.method("TP_Transaction", "DebtValueChange", async function DebtValueChange(Self, p0) {
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
  { const $t8 = (await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Tag"));
    if ($.eq($t8, 1)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsDebet")));
    }
    else if ($.eq($t8, 2)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsCredit")));
    }
    else if ($.eq($t8, 3)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsUnknown")));
    }
  }
  await $.stmt((await $.call(C, "SetAmmounts", [(await $.v(C, "TransactionSide"))])));
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "TrDestChange", async function TrDestChange(Self, p0) {
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
  U.method("TP_Transaction", "DBLookupComboBox5Click", async function DBLookupComboBox5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "TrDest")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboBox5")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
  await $.mset((await $.v(C, "DBEditTransName")), "Text", (await $.mv((await $.v(C, "DBLookupComboBox5")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "DebtCurCodeKeyPress", async function DebtCurCodeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "DebtAccSearchEdit")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Transaction", "DebtAccSearchEditKeyPress", async function DebtAccSearchEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "DebtValue")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Transaction", "CredCurCodeKeyPress", async function CredCurCodeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "CreditAccSearchEdit")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Transaction", "CreditAccSearchEditKeyPress", async function CreditAccSearchEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "DebtValue")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Transaction", "DebtValueKeyPress", async function DebtValueKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "CreditValue")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Transaction", "TrDestKeyPress", async function TrDestKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "ReportIDLookUp")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Transaction", "ButtonApplyKeyPress", async function ButtonApplyKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t9 = L0["sender"];
        { const $t10 = (await $.wv([$t9], "Tag", C, false));
          if ($.eq($t10, 1)) {
            await $.stmt((await $.wcall([$t9], "SelectNext", [(await $.wv([$t9], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t9], "True", C, false)), (await $.wv([$t9], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Transaction", "ButtonApplyClick", async function ButtonApplyClick(Self, p0) {
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
  L0["transid"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "SB_TRANSACTION")), "CallIntegerFunction", ["Transaction_Add", ["DebitID", (await $.mv((await $.mcall((await $.v(C, "DebitAccData")), "FieldByName", ["ID"])), "AsInteger")), "CreditID", (await $.mv((await $.mcall((await $.v(C, "CreditAccData")), "FieldByName", ["ID"])), "AsInteger")), "DebitAmount", (await $.mv((await $.v(C, "DebtValue")), "Value")), "CreditAmount", (await $.mv((await $.v(C, "CreditValue")), "Value")), "Lamount", (await $.mv((await $.v(C, "Ekv")), "Value")), "DebitRate", (await $.mv((await $.v(C, "EditDebtRate")), "Text")), "CreditRate", (await $.mv((await $.v(C, "EditCredRate")), "Text")), "TrName", (await $.mv((await $.v(C, "DBEditTransName")), "Text")), "pReportID", (await $.mv((await $.v(C, "ReportIDLookUp")), "KeyValue")), "pCountrID", (await $.mv((await $.v(C, "CountrIDLookUp")), "KeyValue")), "InBalanceChar", (await $.mv((await $.v(C, "CashSymbolLookUp")), "KeyValue")), "OutBalanceChar", (await $.mv((await $.v(C, "ConvertationSymbolLookUp")), "KeyValue"))]]));
  if ($.truthy((await $.or_(($.eq((await $.v(C, "TransTypeIncOutDC")), 1)), async () => ($.eq((await $.v(C, "TransTypeIncOutDC")), 2)))))) {
    L0["comissionid"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "P_CO_TransTypeIncOut")), "SettingsBrowser")), "DataSource")), "Dataset")), "FieldByName", ["ID"])), "AsInteger"));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "OSCT")), "CallProcedure", ["SetTransactions", [L0["comissionid"], (await $.mv((await $.mcall((await $.v(C, "DebitAccData")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.v(C, "CreditAccData")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.v(C, "DebtValue")), "Value")), (await $.mv((await $.v(C, "CreditValue")), "Value")), (await $.v(C, "null")), L0["transid"]]])));
  }
  if ($.truthy($.eq((await $.v(C, "TransTypeIncOutDC")), 3))) {
    await $.mset((await $.v(C, "CreditAccSearchEdit")), "Text", "");
    await $.mset((await $.v(C, "DBEditCredAccName")), "Text", "");
    await $.mset((await $.v(C, "DBEditCredAccNO")), "Text", "");
  }
  if ($.truthy($.eq((await $.v(C, "TransTypeIncOutDC")), 4))) {
    await $.mset((await $.v(C, "DebtAccSearchEdit")), "Text", "");
    await $.mset((await $.v(C, "DBEditDebtAccNo")), "Text", "");
    await $.mset((await $.v(C, "DBEditDebtAccName")), "Text", "");
  }
  await $.mset((await $.v(C, "DebtValue")), "Text", "");
  await $.mset((await $.v(C, "CreditValue")), "Text", "");
  await $.mset((await $.v(C, "Ekv")), "Text", "");
  await $.mset((await $.v(C, "TrDest")), "Text", "");
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Transactions")), "Refresh", []);
  await $.mcall((await $.v(C, "P_Transaction")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "ButtonCloseClick", async function ButtonCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "ButtonCancelClick", async function ButtonCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebtValue")), "Text", "");
  await $.mset((await $.v(C, "CreditValue")), "Text", "");
  await $.mset((await $.v(C, "Ekv")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "SetCurrencyFilter", async function SetCurrencyFilter(Self, p0, p1) {
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
  U.method("TP_Transaction", "EditDebtValuteCloseUp", async function EditDebtValuteCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.wobj(C, "DebtAccSearchEdit"));
    const $t12 = (await $.wv([$t11], "P_DataModule", C, false));
    await $.mset((await $.mv((await $.wv([$t11, $t12], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t11, $t12], "False", C, false)));
    await $.mset((await $.mv((await $.wv([$t11, $t12], "DataSource", C, false)), "DataSet")), "Filter", $.add("val_acc= ", (await $.mv((await $.mcall((await $.wv([$t11, $t12], "DebitCurrencyData", C, false)), "FieldByName", ["ID"])), "AsString"))));
    await $.mset((await $.mv((await $.wv([$t11, $t12], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t11, $t12], "True", C, false)));
    await $.wset([$t11, $t12], "Text", "", C);
  }
  {
    const $t13 = (await $.mv((await $.v(C, "P_DataModule")), "temprate"));
    await $.stmt($.wcall([$t13], "Close", [], C));
    await $.mset((await $.wv([$t13], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from temprate c where val_kod= ", "'"), (await $.mv((await $.wv([$t13], "DebtCurCode", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t13], "Open", [], C));
    await $.mset((await $.wv([$t13], "EditDebtRate", C, false)), "Text", (await $.mv((await $.wcall([$t13], "FieldByName", ["ostat"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "editrateChange", async function editrateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "DebtCurCodeChange", async function DebtCurCodeChange(Self, p0) {
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
  U.method("TP_Transaction", "EditDebtValuteClick", async function EditDebtValuteClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebtCurCode")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "EditDebtValute")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "DBLookupComboBox7Click", async function DBLookupComboBox7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CredCurCode")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "EditCredValute")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "EditCredValuteCloseUp", async function EditCredValuteCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t14 = (await $.wobj(C, "CreditAccSearchEdit"));
    const $t15 = (await $.wv([$t14], "P_DataModule", C, false));
    await $.mset((await $.mv((await $.wv([$t14, $t15], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t14, $t15], "False", C, false)));
    await $.mset((await $.mv((await $.wv([$t14, $t15], "DataSource", C, false)), "DataSet")), "Filter", $.add("val_acc= ", (await $.mv((await $.mcall((await $.wv([$t14, $t15], "CreditCurrencyData", C, false)), "FieldByName", ["ID"])), "AsString"))));
    await $.mset((await $.mv((await $.wv([$t14, $t15], "DataSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t14, $t15], "True", C, false)));
    await $.wset([$t14, $t15], "Text", "", C);
  }
  {
    const $t16 = (await $.mv((await $.v(C, "P_DataModule")), "temprate"));
    await $.stmt($.wcall([$t16], "Close", [], C));
    await $.mset((await $.wv([$t16], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from temprate c where val_kod= ", "'"), (await $.mv((await $.wv([$t16], "CredCurCode", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t16], "Open", [], C));
    await $.mset((await $.wv([$t16], "EditCredRate", C, false)), "Text", (await $.mv((await $.wcall([$t16], "FieldByName", ["ostat"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "ReportIDDBEditChange", async function ReportIDDBEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ReportIDLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "CountrIDDBEditChange", async function CountrIDDBEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CountrIDLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "ReportIDLookUpCloseUp", async function ReportIDLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ReportIDDBEdit")), "Text", (await $.mv((L0["sender"]), "KeyValue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "CountrIDLookUpCloseUp", async function CountrIDLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CountrIDDBEdit")), "Text", (await $.mv((L0["sender"]), "KeyValue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "ConvertationSymbolLookUpCloseUp", async function ConvertationSymbolLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "SEditConvertationID")), "Text", (await $.mv((L0["sender"]), "KeyValue")));
  } catch ($t17) {
    $.rethrowControl($t17);
    $.handled($t17);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "CashSymbolLookUpCloseUp", async function CashSymbolLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "SEditCashSymbol")), "Text", (await $.mv((L0["sender"]), "KeyValue")));
  } catch ($t18) {
    $.rethrowControl($t18);
    $.handled($t18);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "SEditCashSymbolChange", async function SEditCashSymbolChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CashSymbolLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "SEditConvertationIDChange", async function SEditConvertationIDChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ConvertationSymbolLookUp")), "KeyValue", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "BtnFullRefreshClick", async function BtnFullRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.wobj(C, "P_DataModule"));
    if ($.truthy($.not((await $.mv((await $.wv([$t19], "Cntries", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t19], "Cntries", C, false)), "Open", []);
    } else {
      await $.mcall((await $.wv([$t19], "Cntries", C, false)), "Refresh", []);
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t19], "ReportDesc", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t19], "ReportDesc", C, false)), "Open", []);
    } else {
      await $.mcall((await $.wv([$t19], "ReportDesc", C, false)), "Refresh", []);
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t19], "ConvertationSymbols", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t19], "ConvertationSymbols", C, false)), "Open", []);
    } else {
      await $.mcall((await $.wv([$t19], "ConvertationSymbols", C, false)), "Refresh", []);
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t19], "CashSymbols", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t19], "CashSymbols", C, false)), "Open", []);
    } else {
      await $.mcall((await $.wv([$t19], "CashSymbols", C, false)), "Refresh", []);
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t19], "Trdestination", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t19], "Trdestination", C, false)), "Open", []);
    } else {
      await $.mcall((await $.wv([$t19], "Trdestination", C, false)), "Refresh", []);
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t19], "DebitAccData", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t19], "DebitAccData", C, false)), "Open", []);
    } else {
      await $.mcall((await $.wv([$t19], "DebitAccData", C, false)), "Refresh", []);
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t19], "CreditAccData", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t19], "CreditAccData", C, false)), "Open", []);
    } else {
      await $.mcall((await $.wv([$t19], "CreditAccData", C, false)), "Refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "SetCashSymbol", async function SetCashSymbol(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t20 = (await $.wobj(C, "P_DataModule"));
    const $t21 = (await $.wv([$t20], "CashSymbolLookUp", C, false));
    await $.stmt((await $.mcall((await $.wv([$t20, $t21], "DebitAccData", C, false)), "Locate", ["acc_no", (await $.mv((await $.wv([$t20, $t21], "DebtAccSearchEdit", C, false)), "Text")), []])));
    await $.stmt((await $.mcall((await $.wv([$t20, $t21], "CreditAccData", C, false)), "Locate", ["acc_no", (await $.mv((await $.wv([$t20, $t21], "CreditAccSearchEdit", C, false)), "Text")), []])));
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t20, $t21], "DebitAccData", C, false)), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t20, $t21], "DebitAccData", C, false)), "FieldByName", ["val_acc"])), "AsInteger")), 0)))))) {
      await $.mset((await $.mv((await $.wv([$t20, $t21], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = 0");
    } else {
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t20, $t21], "CreditAccData", C, false)), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t20, $t21], "CreditAccData", C, false)), "FieldByName", ["val_acc"])), "AsInteger")), 0)))))) {
        await $.mset((await $.mv((await $.wv([$t20, $t21], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = 1");
      } else {
        await $.mset((await $.mv((await $.wv([$t20, $t21], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = -1");
      }
    }
    await $.mset((await $.mv((await $.wv([$t20, $t21], "ListSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t20, $t21], "False", C, false)));
    await $.mset((await $.mv((await $.wv([$t20, $t21], "ListSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t20, $t21], "True", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TP_Transaction", "SEditCashSymbolEnter", async function SEditCashSymbolEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetCashSymbol", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "EkvChange", async function EkvChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), (await $.v(C, "EmptyStr"))))) {
    await $.mset((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Value", 0);
  }
  { const $t22 = (await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Tag"));
    if ($.eq($t22, 1)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsDebet")));
    }
    else if ($.eq($t22, 2)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsCredit")));
    }
    else if ($.eq($t22, 3)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsUnknown")));
    }
  }
  await $.stmt((await $.call(C, "SetAmmounts", [(await $.v(C, "TransactionSide"))])));
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Transaction", "CreditValueKeyPress", async function CreditValueKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "CashSymbolLookUp")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Transaction", "CashSymbolLookUpKeyPress", async function CashSymbolLookUpKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "SEditCashSymbol")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Transaction", "SEditCashSymbolKeyPress", async function SEditCashSymbolKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "ConvertationSymbolLookUp")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Transaction", "ConvertationSymbolLookUpKeyPress", async function ConvertationSymbolLookUpKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "SEditConvertationID")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Transaction", "SEditConvertationIDKeyPress", async function SEditConvertationIDKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "DBEditTransName")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Transaction", "DBEditTransNameKeyPress", async function DBEditTransNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "TrDest")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Transaction", "ReportIDLookUpKeyPress", async function ReportIDLookUpKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "ReportIDDBEdit")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Transaction", "ReportIDDBEditKeyPress", async function ReportIDDBEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "CountrIDLookUp")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Transaction", "CountrIDLookUpKeyPress", async function CountrIDLookUpKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "CountrIDDBEdit")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Transaction", "CountrIDDBEditKeyPress", async function CountrIDDBEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await L0["key"].get()), "\r")), async () => ((await $.mv((await $.v(C, "ButtonApply")), "Enabled"))))))) {
    await $.mcall((await $.v(C, "ButtonApply")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Transaction", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PanelDebet")), "Enabled", true);
  await $.mset((await $.v(C, "PanelCredit")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  return U;
}
