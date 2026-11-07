// Generated from TransactionPropertiesImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TransactionPropertiesImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "ImgList", "ExtCtrls", "CurrencyEdit", "DBCtrls", "Mask", "DBViewComboBox", "Db", "SearchEdit", "ActnList", "Variants", "Buttons", "XFSCtrls", "OracleData", "FormAccountsImpl", "CMDBSearchEdit", "TransactionDataModuleUnit", "TransactionManagerImpl", "sboapidatamoduleimpl", "TransactionDestinationImpl", "BProcTrans", "SBTranslateProc", "FormBalCnImpl", "UnitForm_budce", "CustUnit", "Unittrid"]);
  const C = [U];
  U.enumType("ttransactionside", 3);
  U.const("tsDebet", 0);
  U.const("tsCredit", 1);
  U.const("tsUnknown", 2);
  U.defClass("TTransactionEditForm", "TForm", {"groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "buttonclose": {"name": "ButtonClose", "type": "TButton"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "transdate": {"name": "TransDate", "type": "TDateTimePicker"}, "label6": {"name": "Label6", "type": "TLabel"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actioninsert": {"name": "ActionInsert", "type": "TAction"}, "actioncancel": {"name": "ActionCancel", "type": "TAction"}, "actionexit": {"name": "ActionExit", "type": "TAction"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "button1": {"name": "Button1", "type": "TButton"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbeditoperationno": {"name": "DBEditOperationNo", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "operationtypelookup": {"name": "OperationTypeLookUp", "type": "TDBLookupComboBox"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "currencyeditdebit": {"name": "CurrencyEditDebit", "type": "TCurrencyEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "currencyeditcredit": {"name": "CurrencyEditCredit", "type": "TCurrencyEdit"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "currencyeditlammount": {"name": "CurrencyEditLammount", "type": "TCurrencyEdit"}, "headercontrol1": {"name": "HeaderControl1", "type": "THeaderControl"}, "goaml": {"name": "GoAml", "type": "TButton"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "cashsymbollookup": {"name": "CashSymbolLookUp", "type": "TDBLookupComboBox"}, "cashsymboldbedit": {"name": "CashSymbolDBEdit", "type": "TDBEdit"}, "konvertasya_teynat": {"name": "Konvertasya_teynat", "type": "TPanel"}, "convertationsymbolidbedit": {"name": "ConvertationSymbolIDBEdit", "type": "TDBEdit"}, "convertationsymbollookup": {"name": "ConvertationSymbolLookUp", "type": "TDBLookupComboBox"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "trdestnoedit": {"name": "TrDestNoEdit", "type": "TEdit"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "dbeditdestination": {"name": "DBEditDestination", "type": "TDBEdit"}, "panel_contires": {"name": "Panel_contires", "type": "TPanel"}, "label8": {"name": "Label8", "type": "TLabel"}, "countriddbedit": {"name": "CountrIDDBEdit", "type": "TDBEdit"}, "countridlookup": {"name": "CountrIDLookUp", "type": "TDBLookupComboBox"}, "hesabat_teynat": {"name": "Hesabat_teynat", "type": "TPanel"}, "reportiddbedit": {"name": "ReportIDDBEdit", "type": "TDBEdit"}, "reportidlookup": {"name": "ReportIDLookUp", "type": "TDBLookupComboBox"}, "emelyyatn_novu": {"name": "Emelyyatn_novu", "type": "TPanel"}, "label9": {"name": "Label9", "type": "TLabel"}, "dblc_mmx_transmode": {"name": "DBLC_MMX_Transmode", "type": "TDBLookupComboBox"}, "edittransmodecode": {"name": "EditTransModeCode", "type": "TEdit"}, "panel21": {"name": "Panel21", "type": "TPanel"}, "dblookupcombob_budce": {"name": "DBLookupComboB_budce", "type": "TDBLookupComboBox"}, "dbedit_buccode": {"name": "DBEdit_BucCode", "type": "TDBEdit"}, "panel_budce": {"name": "Panel_Budce", "type": "TPanel"}, "ods_debit_accno": {"name": "ODS_DEBIT_ACCNO", "type": "TOracleDataSet"}, "dsrc_debit_accno": {"name": "Dsrc_DEBIT_ACCNO", "type": "TDataSource"}, "ods_debit_accnoid": {"name": "ODS_DEBIT_ACCNOID", "type": "TFloatField"}, "ods_debit_accnoacc_no": {"name": "ODS_DEBIT_ACCNOACC_NO", "type": "TWideStringField"}, "ods_debit_accnoacc_no_search": {"name": "ODS_DEBIT_ACCNOACC_NO_SEARCH", "type": "TWideStringField"}, "ods_debit_accnoval_acc": {"name": "ODS_DEBIT_ACCNOVAL_ACC", "type": "TIntegerField"}, "ods_debit_accnoname": {"name": "ODS_DEBIT_ACCNONAME", "type": "TWideStringField"}, "ods_debit_accnoiscacheaccount": {"name": "ODS_DEBIT_ACCNOISCACHEACCOUNT", "type": "TFloatField"}, "ods_debit_accnokli_id": {"name": "ODS_DEBIT_ACCNOKLI_ID", "type": "TFloatField"}, "transcation_musteri_kodu": {"name": "transcation_musteri_kodu", "type": "TPanel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "btndebtcustomer": {"name": "BtnDebtCustomer", "type": "TSpeedButton"}, "btncredcustomer": {"name": "BtnCredCustomer", "type": "TSpeedButton"}, "edit_ccustid": {"name": "Edit_CCustId", "type": "TEdit"}, "edit_dcustid": {"name": "Edit_DCustId", "type": "TEdit"}, "dcust": {"name": "DCust", "type": "TDBEdit"}, "ccust": {"name": "CCust", "type": "TDBEdit"}, "ods_credit_accno": {"name": "ODS_CREDIT_ACCNO", "type": "TOracleDataSet"}, "floatfield1": {"name": "FloatField1", "type": "TFloatField"}, "widestringfield1": {"name": "WideStringField1", "type": "TWideStringField"}, "widestringfield2": {"name": "WideStringField2", "type": "TWideStringField"}, "integerfield1": {"name": "IntegerField1", "type": "TIntegerField"}, "widestringfield3": {"name": "WideStringField3", "type": "TWideStringField"}, "floatfield2": {"name": "FloatField2", "type": "TFloatField"}, "floatfield3": {"name": "FloatField3", "type": "TFloatField"}, "dsrc_credit_accno": {"name": "Dsrc_CREDIT_ACCNO", "type": "TDataSource"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "paneldebit": {"name": "PanelDebit", "type": "TPanel"}, "paneldebitrest": {"name": "PanelDebitRest", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbtext2": {"name": "DBText2", "type": "TDBText"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "paneldebt_acc_nosearch": {"name": "PANELDEBT_ACC_NOSEARCH", "type": "TPanel"}, "cmsearchedit1": {"name": "CMSearchEdit1", "type": "TCMSearchEdit"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "paneldebt_acc_no": {"name": "PANELDEBT_ACC_NO", "type": "TPanel"}, "editdebtbal_cn": {"name": "EditDebtBal_CN", "type": "TSearchEdit"}, "editdebtaccno": {"name": "EditDebtAccNo", "type": "TEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "debitcurrencyidedit": {"name": "DebitCurrencyIDEdit", "type": "TDBEdit"}, "debitcurrencyrate": {"name": "DebitCurrencyRate", "type": "TDBEdit"}, "debitcurrencylookup": {"name": "DebitCurrencyLookUp", "type": "TDBLookupComboBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panelcredit": {"name": "PanelCredit", "type": "TPanel"}, "panelcreditrest": {"name": "PanelCreditRest", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbtext3": {"name": "DBText3", "type": "TDBText"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbtext4": {"name": "DBText4", "type": "TDBText"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panelcredt_acc_no": {"name": "PANELCREDT_ACC_NO", "type": "TPanel"}, "editkredbal_cn": {"name": "EditKredBal_CN", "type": "TSearchEdit"}, "editcredaccno": {"name": "EditCredAccNo", "type": "TEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "creditcurrencyidedit": {"name": "CreditCurrencyIDEdit", "type": "TDBEdit"}, "creditcurrencyrate": {"name": "CreditCurrencyRate", "type": "TDBEdit"}, "creditcurrencylookup": {"name": "CreditCurrencyLookUp", "type": "TDBLookupComboBox"}, "panelcredt_acc_nosearch": {"name": "PANELCREDT_ACC_NOSEARCH", "type": "TPanel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "cmsearchedit2": {"name": "CMSearchEdit2", "type": "TCMSearchEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "label12": {"name": "Label12", "type": "TLabel"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "label13": {"name": "Label13", "type": "TLabel"}, "tesnf_kodu": {"name": "Tesnf_kodu", "type": "TPanel"}, "dblc_mmx_reportcode": {"name": "DBLC_MMX_reportcode", "type": "TDBLookupComboBox"}, "editreportcode": {"name": "Editreportcode", "type": "TEdit"}, "label14": {"name": "Label14", "type": "TLabel"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "buttonapply": {"name": "ButtonApply", "type": "TButton"}, "ods_reportcode": {"name": "Ods_reportCode", "type": "TOracleDataSet"}, "ods_reportcodeid": {"name": "Ods_reportCodeID", "type": "TFloatField"}, "ods_reportcodekli_id": {"name": "Ods_reportCodeKLI_ID", "type": "TFloatField"}, "ods_blr": {"name": "ods_blr", "type": "TOracleDataSet"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset1kli_id": {"name": "OracleDataSet1KLI_ID", "type": "TFloatField"}, "oracledataset2kli_id": {"name": "OracleDataSet2KLI_ID", "type": "TFloatField"}, "oracledataset1bal_cn1": {"name": "OracleDataSet1BAL_CN1", "type": "TFloatField"}, "oracledataset2bal_cn1": {"name": "OracleDataSet2BAL_CN1", "type": "TFloatField"}, "ods_bankinfo": {"name": "ods_bankinfo", "type": "TOracleDataSet"}, "ods_bankinfoswift": {"name": "ods_bankinfoSWIFT", "type": "TWideStringField"}, "label15": {"name": "Label15", "type": "TLabel"}, "transactionside": {"name": "TransactionSide", "type": "TTransactionSide"}, "debitcurrencyid": {"name": "DebitCurrencyID", "type": "Word"}, "creditcurrencyid": {"name": "CreditCurrencyID", "type": "Word"}, "modifed": {"name": "Modifed", "type": "Boolean"}, "debitt": {"name": "debitt", "type": "integer"}, "creditt": {"name": "creditt", "type": "integer"}}, {});
  U.init(async () => {
    U.var_("TransactionEditForm", null, "TTransactionEditForm");
    U.var_("report", '', "String");
  });
  U.method("TTransactionEditForm", "SIK", async function SIK(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TTransactionEditForm", "SIK", null, arguments);
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TTransactionEditForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "monex_id", false);
  await $.set(C, "nocustId", false);
  await $.mcall((await $.v(C, "formcust")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "monex_id", true);
  await $.set(C, "nocustId", true);
  await $.mcall((await $.v(C, "formcust")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("LoadPlugin", async function LoadPlugin(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pluginname": $.copyArg(p0), "pluginparam": $.copyArg(p1), "pluginparam2": $.copyArg(p2), result: undefined, "pluginhandle": 0, "exportproc": null};
  await $.fixArgs(L0, ["pluginname", "pluginparam", "pluginparam2"]);
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), L0["pluginname"])]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportproc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], "InitPlugin"]));
    await $.stmt((await $.callv(L0["exportproc"], [L0["pluginparam"], L0["pluginparam2"]])));
  }
  return L0.result;
}, {"params": ["PluginName", "PluginParam", "PluginParam2"], "kind": "procedure", "ptypes": ["String", "String", "String"]});
  U.method("TTransactionEditForm", "SetCurrencyFilter", async function SetCurrencyFilter(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"accountdataset": $.copyArg(p0), "currencydataset": $.copyArg(p1), result: undefined, "accountid": 0};
  await $.fixArgs(L0, ["accountdataset", "currencydataset"]);
  L0["accountid"] = (await $.mv((await $.mcall(L0["accountdataset"], "FieldByName", ["ID"])), "AsInteger"));
  await $.stmt((await $.mcall(L0["accountdataset"], "Locate", ["ID", L0["accountid"], []])));
  return L0.result;
}, {"params": ["AccountDataSet", "CurrencyDataSet"], "kind": "procedure", "ptypes": ["TDataSet", "TDataSet"]});
  U.method("TTransactionEditForm", "OperationCancel", async function OperationCancel(Self) {
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
  U.method("TTransactionEditForm", "SetAmmounts", async function SetAmmounts(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionside": $.copyArg(p0), result: undefined, "debetrate": 0, "creditrate": 0, "debitammount": 0, "creditammount": 0, "lammount": 0};
  await $.fixArgs(L0, ["transactionside"]);
  {
    const $t3 = (await $.wobj(C, "TransactionDataModule"));
    await $.wset([$t3], "DebetRate", (await $.mv((await $.mcall((await $.wv([$t3], "DebitCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsFloat")), { get: async () => L0["debetrate"], set: async (v) => { L0["debetrate"] = v; }, local: true });
    await $.wset([$t3], "CreditRate", (await $.mv((await $.mcall((await $.wv([$t3], "CreditCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsFloat")), { get: async () => L0["creditrate"], set: async (v) => { L0["creditrate"] = v; }, local: true });
  }
  { const $t4 = L0["transactionside"];
    if ($.eq($t4, (await $.v(C, "tsDebet")))) {
      L0["lammount"] = (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "CurrencyEditDebit")), "Value")), L0["debetrate"]), 1000000]));
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "DebitCurrencyData")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "CreditCurrencyData")), "FieldByName", ["ID"])), "AsInteger"))))) {
        L0["creditammount"] = (await $.mv((await $.v(C, "CurrencyEditDebit")), "Value"));
      } else {
        L0["creditammount"] = (await $.call(C, "RoundNew", [$.fdiv(L0["lammount"], L0["creditrate"]), 1000000]));
      }
      await $.mset((await $.v(C, "CurrencyEditLammount")), "Value", (await $.call(C, "RoundNew", [L0["lammount"], 100])));
      await $.mset((await $.v(C, "CurrencyEditCredit")), "Value", (await $.call(C, "RoundNew", [L0["creditammount"], 100])));
    }
    else if ($.eq($t4, (await $.v(C, "tsCredit")))) {
      L0["lammount"] = (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "CurrencyEditCredit")), "Value")), L0["creditrate"]), 1000000]));
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "DebitCurrencyData")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "CreditCurrencyData")), "FieldByName", ["ID"])), "AsInteger"))))) {
        L0["debitammount"] = (await $.mv((await $.v(C, "CurrencyEditCredit")), "Value"));
      } else {
        L0["debitammount"] = (await $.call(C, "RoundNew", [$.fdiv(L0["lammount"], L0["debetrate"]), 1000000]));
      }
      await $.mset((await $.v(C, "CurrencyEditLammount")), "Value", (await $.call(C, "RoundNew", [L0["lammount"], 100])));
      await $.mset((await $.v(C, "CurrencyEditDebit")), "Value", (await $.call(C, "RoundNew", [L0["debitammount"], 100])));
    }
    else if ($.eq($t4, (await $.v(C, "tsUnknown")))) {
      {
        const $t5 = (await $.wobj(C, "TransactionDataModule"));
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t5], "DebitCurrencyData", C, false)), "FieldByName", ["ID"])), "AsInteger")), 0))) {
          await $.mset((await $.wv([$t5], "CurrencyEditDebit", C, false)), "Value", (await $.mv((await $.wv([$t5], "CurrencyEditLammount", C, false)), "Value")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t5], "CreditCurrencyData", C, false)), "FieldByName", ["ID"])), "AsInteger")), 0))) {
          await $.mset((await $.wv([$t5], "CurrencyEditCredit", C, false)), "Value", (await $.mv((await $.wv([$t5], "CurrencyEditLammount", C, false)), "Value")));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["TransactionSide"], "kind": "procedure", "ptypes": ["TTransactionSide"]});
  U.method("TTransactionEditForm", "SetCashSymbol", async function SetCashSymbol(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t6 = (await $.wobj(C, "TransactionDataModule"));
    const $t7 = (await $.wv([$t6], "CashSymbolLookUp", C, false));
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t6, $t7], "DebitAccData", C, false)), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t6, $t7], "DebitAccData", C, false)), "FieldByName", ["val_acc"])), "AsInteger")), 0)))))) {
      await $.mset((await $.mv((await $.wv([$t6, $t7], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = 0");
    } else {
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t6, $t7], "CreditAccData", C, false)), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t6, $t7], "CreditAccData", C, false)), "FieldByName", ["val_acc"])), "AsInteger")), 0)))))) {
        await $.mset((await $.mv((await $.wv([$t6, $t7], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = 1");
      } else {
        await $.mset((await $.mv((await $.wv([$t6, $t7], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = -1");
      }
    }
    await $.mset((await $.mv((await $.wv([$t6, $t7], "ListSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t6, $t7], "False", C, false)));
    await $.mset((await $.mv((await $.wv([$t6, $t7], "ListSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t6, $t7], "True", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionEditForm", "CMDialogKey", async function CMDialogKey(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TTransactionEditForm", "CMDialogKey", null, arguments);
  return L0.result;
}, {"params": ["Msg"], "kind": "procedure", "ptypes": ["TWMKey"]});
  U.method("TTransactionEditForm", "CMSearchEdit1Click", async function CMSearchEdit1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CMSearchEdit1Enter", async function CMSearchEdit1Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "ODS_DEBIT_ACCNO")), "Active"))))) {
    if ($.truthy($.eq((await $.v(C, "Insert_Edit")), true))) {
      await $.mcall((await $.v(C, "ODS_DEBIT_ACCNO")), "Close", []);
      await $.stmt((await $.mcall((await $.v(C, "ODS_DEBIT_ACCNO")), "SetVariable", ["V_val", (0)])));
      await $.mcall((await $.v(C, "ODS_DEBIT_ACCNO")), "open", []);
    }
    if ($.truthy($.eq((await $.v(C, "Insert_Edit")), false))) {
      await $.mcall((await $.v(C, "ODS_DEBIT_ACCNO")), "Close", []);
      await $.stmt((await $.mcall((await $.v(C, "ODS_DEBIT_ACCNO")), "SetVariable", ["V_val", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "DebitCurrencyIDEdit")), "Text"))]))])));
      await $.mcall((await $.v(C, "ODS_DEBIT_ACCNO")), "open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CMSearchEdit1Exit", async function CMSearchEdit1Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": '', "b": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CMSearchEdit1")), "Text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "Transactions")), "FieldByName", ["debitaccno"])), "AsString"))))) {
    return L0.result;
  } else {
    if ($.truthy($.ne((await $.mv((await $.v(C, "CMSearchEdit1")), "Text")), ""))) {
      await $.mcall((await $.v(C, "ODS_DEBIT_ACCNO")), "Open", []);
      {
        const $t8 = (await $.wobj(C, "TransactionDataModule"));
        await $.mcall((await $.wv([$t8], "DebitAccData", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t8], "DebitAccData", C, false)), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.wv([$t8], "ODS_DEBIT_ACCNO", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
        await $.mcall((await $.wv([$t8], "DebitAccData", C, false)), "Open", []);
        await $.mset((await $.wv([$t8], "Edit_DCustId", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t8], "TransactionDataModule", C, false)), "DebitAccData")), "FieldByName", ["cust_id"])), "AsString")));
        if ($.truthy($.ne((await $.wcall([$t8], "trim", [(await $.mv((await $.wv([$t8], "Edit_DCustID", C, false)), "Text"))], C)), ""))) {
          {
            const $t9 = (await $.mv((await $.wv([$t8], "TransactionDataModule", C, false)), "ODS_DebtCustomer"));
            await $.stmt($.wcall([$t8, $t9], "Close", [], C));
            await $.stmt((await $.wcall([$t8, $t9], "SetVariable", ["v_CustID", (await $.mv((await $.wv([$t8, $t9], "Edit_DCustID", C, false)), "Text"))], C)));
            await $.stmt($.wcall([$t8, $t9], "Open", [], C));
          }
        }
        await $.mset((await $.wv([$t8], "Edit1", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t8], "TransactionDataModule", C, false)), "DebitAccData")), "FieldByName", ["bal_cn"])), "AsString")));
      }
      if ($.truthy($.ne((await $.mv((await $.v(C, "CMSearchEdit1")), "Text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "DebitAccData")), "FieldByName", ["acc_no"])), "AsString"))))) {
        await $.mset((await $.v(C, "CMSearchEdit1")), "Color", (await $.v(C, "clRed")));
        if ($.truthy($.eq((await $.mv((await $.v(C, "CMSearchEdit1")), "Color")), (await $.v(C, "clRed"))))) {
          await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_DebtCustomer")), "close", []);
          await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "DebitAccData")), "Close", []);
          await $.mcall((await $.v(C, "Edit_DCustID")), "Clear", []);
          await $.mcall((await $.v(C, "Edit1")), "Clear", []);
        }
      }
      await $.mset((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "Transactions")), "FieldByName", ["DEBITID"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "DebitAccData")), "FieldByName", ["ID"])), "AsInteger")));
      {
        const $t10 = (await $.wobj(C, "TransactionDataModule"));
        const $t11 = (await $.wv([$t10], "Ods_budce", C, false));
        await $.stmt($.wcall([$t10, $t11], "Close", [], C));
        await $.wset([$t10, $t11], "debitt", (await $.mv((await $.mcall((await $.wv([$t10, $t11], "DebitAccData", C, false)), "FieldByName", ["ID"])), "AsInteger")), C);
        await $.stmt((await $.wcall([$t10, $t11], "SetVariable", ["debtid", (await $.wv([$t10, $t11], "debitt", C, false))], C)));
        await $.stmt($.wcall([$t10, $t11], "open", [], C));
        if ($.truthy($.gt((await $.mv((await $.wv([$t10, $t11], "Ods_budce", C, false)), "RecordCount")), 0))) {
          await $.mset((await $.wv([$t10, $t11], "ButtonApply", C, false)), "Caption", "Büdcə maddələri");
          await $.mset((await $.wv([$t10, $t11], "ButtonApply", C, false)), "Width", 100);
          await $.mset((await $.wv([$t10, $t11], "ButtonApply", C, false)), "Left", 372);
          await $.mset((await $.wv([$t10, $t11], "CurrencyEditLammount", C, false)), "Enabled", (await $.wv([$t10, $t11], "false", C, false)));
        } else {
          await $.mset((await $.wv([$t10, $t11], "ButtonApply", C, false)), "Caption", "&Qəbul");
          await $.mset((await $.wv([$t10, $t11], "ButtonApply", C, false)), "Width", 75);
          await $.mset((await $.wv([$t10, $t11], "ButtonApply", C, false)), "Left", 398);
          await $.mset((await $.wv([$t10, $t11], "CurrencyEditLammount", C, false)), "Enabled", (await $.wv([$t10, $t11], "true", C, false)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CMSearchEdit1KeyPress", async function CMSearchEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.call(C, "chr", [(await $.v(C, "VK_RETURN"))]))))) {
    await $.mcall((await $.v(C, "DBEdit1")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "CMSearchEdit2Enter", async function CMSearchEdit2Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.v(C, "ODS_CREDIT_ACCNO")), "Active"))))) {
    if ($.truthy($.eq((await $.v(C, "Insert_Edit")), true))) {
      await $.mcall((await $.v(C, "ODS_CREDIT_ACCNO")), "Close", []);
      await $.stmt((await $.mcall((await $.v(C, "ODS_CREDIT_ACCNO")), "SetVariable", ["V_val", (0)])));
      await $.mcall((await $.v(C, "ODS_CREDIT_ACCNO")), "open", []);
    }
    if ($.truthy($.eq((await $.v(C, "Insert_Edit")), false))) {
      await $.mcall((await $.v(C, "ODS_CREDIT_ACCNO")), "Close", []);
      await $.stmt((await $.mcall((await $.v(C, "ODS_CREDIT_ACCNO")), "SetVariable", ["V_val", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "CreditCurrencyIDEdit")), "Text"))]))])));
      await $.mcall((await $.v(C, "ODS_CREDIT_ACCNO")), "open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CMSearchEdit2Exit", async function CMSearchEdit2Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CMSearchEdit2")), "Text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "Transactions")), "FieldByName", ["creditaccno"])), "AsString"))))) {
    return L0.result;
  } else {
    if ($.truthy($.ne((await $.mv((await $.v(C, "CMSearchEdit2")), "Text")), ""))) {
      await $.mcall((await $.v(C, "ODS_CREDIT_ACCNO")), "Open", []);
      {
        const $t12 = (await $.wobj(C, "TransactionDataModule"));
        await $.mcall((await $.wv([$t12], "CreditAccData", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t12], "CreditAccData", C, false)), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.wv([$t12], "ODS_CREDIT_ACCNO", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
        await $.mcall((await $.wv([$t12], "CreditAccData", C, false)), "Open", []);
        await $.mset((await $.wv([$t12], "Edit_CCustId", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t12], "TransactionDataModule", C, false)), "CreditAccData")), "FieldByName", ["cust_id"])), "AsString")));
        if ($.truthy($.ne((await $.wcall([$t12], "trim", [(await $.mv((await $.wv([$t12], "Edit_CCustID", C, false)), "Text"))], C)), ""))) {
          {
            const $t13 = (await $.mv((await $.wv([$t12], "TransactionDataModule", C, false)), "ODS_CredCustomer"));
            await $.stmt($.wcall([$t12, $t13], "Close", [], C));
            await $.stmt((await $.wcall([$t12, $t13], "SetVariable", ["v_CustID", (await $.mv((await $.wv([$t12, $t13], "Edit_CCustID", C, false)), "Text"))], C)));
            await $.stmt($.wcall([$t12, $t13], "Open", [], C));
          }
        }
        await $.mset((await $.wv([$t12], "Edit2", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t12], "TransactionDataModule", C, false)), "CreditAccData")), "FieldByName", ["bal_cn"])), "AsString")));
      }
      if ($.truthy($.ne((await $.mv((await $.v(C, "CMSearchEdit2")), "Text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "CreditAccData")), "FieldByName", ["acc_no"])), "AsString"))))) {
        await $.mset((await $.v(C, "CMSearchEdit2")), "Color", (await $.v(C, "clRed")));
        if ($.truthy($.eq((await $.mv((await $.v(C, "CMSearchEdit2")), "Color")), (await $.v(C, "clRed"))))) {
          await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_CredCustomer")), "close", []);
          await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "CreditAccData")), "Close", []);
          await $.mcall((await $.v(C, "Edit_CCustId")), "Clear", []);
          await $.mcall((await $.v(C, "Edit2")), "Clear", []);
        }
      }
      await $.mset((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "Transactions")), "FieldByName", ["CREDITID"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "CreditAccData")), "FieldByName", ["ID"])), "AsInteger")));
      {
        const $t14 = (await $.wobj(C, "TransactionDataModule"));
        const $t15 = (await $.wv([$t14], "Ods_budce", C, false));
        await $.stmt($.wcall([$t14, $t15], "Close", [], C));
        await $.wset([$t14, $t15], "creditt", (await $.mv((await $.mcall((await $.wv([$t14, $t15], "CreditAccData", C, false)), "FieldByName", ["ID"])), "AsInteger")), C);
        await $.stmt((await $.wcall([$t14, $t15], "SetVariable", ["CREDITID", (await $.wv([$t14, $t15], "creditt", C, false))], C)));
        await $.stmt($.wcall([$t14, $t15], "Open", [], C));
        if ($.truthy($.gt((await $.mv((await $.wv([$t14, $t15], "Ods_budce", C, false)), "RecordCount")), 0))) {
          await $.mset((await $.wv([$t14, $t15], "ButtonApply", C, false)), "Caption", "Büdcə maddələri");
          await $.mset((await $.wv([$t14, $t15], "ButtonApply", C, false)), "Width", 100);
          await $.mset((await $.wv([$t14, $t15], "ButtonApply", C, false)), "Left", 372);
          await $.mset((await $.wv([$t14, $t15], "CurrencyEditLammount", C, false)), "Enabled", (await $.wv([$t14, $t15], "false", C, false)));
        } else {
          await $.mset((await $.wv([$t14, $t15], "ButtonApply", C, false)), "Caption", "&Qəbul");
          await $.mset((await $.wv([$t14, $t15], "ButtonApply", C, false)), "Width", 75);
          await $.mset((await $.wv([$t14, $t15], "ButtonApply", C, false)), "Left", 398);
          await $.mset((await $.wv([$t14, $t15], "CurrencyEditLammount", C, false)), "Enabled", (await $.wv([$t14, $t15], "true", C, false)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CMSearchEdit2KeyPress", async function CMSearchEdit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.call(C, "chr", [(await $.v(C, "VK_RETURN"))]))))) {
    await $.mcall((await $.v(C, "DBEdit2")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "Init", async function Init(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t16 = (await $.wobj(C, "TransactionManagerForm"));
    const $t17 = (await $.wv([$t16], "TransactionDataModule", C, false));
    const $t18 = (await $.wv([$t16, $t17], "Transactions", C, false));
    { const $t19 = (await $.wv([$t16, $t17, $t18], "OperationMode", C, false));
      if ($.eq($t19, (await $.wv([$t16, $t17, $t18], "omInsert", C, false)))) {
        await $.mset((await $.wcall([$t16, $t17, $t18], "FieldByName", ["DebitCurrencyID"], C)), "AsInteger", 0);
        await $.mset((await $.wcall([$t16, $t17, $t18], "FieldByName", ["CreditCurrencyID"], C)), "AsInteger", 0);
        await $.mset((await $.wcall([$t16, $t17, $t18], "FieldByName", ["DebitRate"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18], "DebitCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsFloat")));
        await $.mset((await $.wcall([$t16, $t17, $t18], "FieldByName", ["CreditRate"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18], "CreditCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsFloat")));
        await $.mcall((await $.wcall([$t16, $t17, $t18], "FieldByName", ["DebitID"], C)), "Clear", []);
        await $.mcall((await $.wcall([$t16, $t17, $t18], "FieldByName", ["CreditID"], C)), "Clear", []);
        await $.stmt((await $.mcall((await $.wv([$t16, $t17, $t18], "Country", C, false)), "Locate", ["name", "Azərbaycan", [(await $.wv([$t16, $t17, $t18], "loCaseInsensitive", C, false))]])));
        await $.mset((await $.wv([$t16, $t17, $t18], "CountrIDDBEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18], "Country", C, false)), "FieldByName", ["id"])), "AsString")));
        await $.mset((await $.wv([$t16, $t17, $t18], "CountrIDLookUp", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18], "Country", C, false)), "FieldByName", ["id"])), "AsInteger")));
      }
      else if ($.eq($t19, (await $.wv([$t16, $t17, $t18], "omEdit", C, false)))) {
        await $.mset((await $.wv([$t16, $t17, $t18], "TransDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t16, $t17, $t18], "FieldByName", ["TransactionDate"], C)), "AsDateTime")));
        {
          const $t20 = (await $.wv([$t16, $t17, $t18], "DebitAccData", C, false));
          await $.stmt($.wcall([$t16, $t17, $t18, $t20], "Close", [], C));
          await $.stmt((await $.wcall([$t16, $t17, $t18, $t20], "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18, $t20], "Transactions", C, false)), "FieldByName", ["DEBITID"])), "asInteger"))], C)));
          await $.stmt($.wcall([$t16, $t17, $t18, $t20], "Open", [], C));
          await $.mset((await $.wv([$t16, $t17, $t18, $t20], "EditDebtBal_CN", C, false)), "Text", (await $.mv((await $.wcall([$t16, $t17, $t18, $t20], "FieldByName", ["BAL_CN"], C)), "asString")));
          await $.mset((await $.wv([$t16, $t17, $t18, $t20], "CMSearchEdit1", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18, $t20], "Transactions", C, false)), "FieldByName", ["DebitAccNo"])), "asString")));
          await $.mset((await $.wv([$t16, $t17, $t18, $t20], "Edit1", C, false)), "text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t16, $t17, $t18, $t20], "TransactionDataModule", C, false)), "Transactions")), "FieldByName", ["DebitBalance"])), "AsString")));
        }
        {
          const $t21 = (await $.wv([$t16, $t17, $t18], "CreditAccData", C, false));
          await $.stmt($.wcall([$t16, $t17, $t18, $t21], "Close", [], C));
          await $.stmt((await $.wcall([$t16, $t17, $t18, $t21], "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18, $t21], "Transactions", C, false)), "FieldByName", ["CREDITID"])), "asInteger"))], C)));
          await $.stmt($.wcall([$t16, $t17, $t18, $t21], "Open", [], C));
          await $.mset((await $.wv([$t16, $t17, $t18, $t21], "EditKredBal_CN", C, false)), "Text", (await $.mv((await $.wcall([$t16, $t17, $t18, $t21], "FieldByName", ["BAL_CN"], C)), "asString")));
          await $.mset((await $.wv([$t16, $t17, $t18, $t21], "CMSearchEdit2", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18, $t21], "Transactions", C, false)), "FieldByName", ["CREDITACCNO"])), "asString")));
          await $.mset((await $.wv([$t16, $t17, $t18, $t21], "Edit2", C, false)), "text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t16, $t17, $t18, $t21], "TransactionDataModule", C, false)), "Transactions")), "FieldByName", ["KreditBalance"])), "AsString")));
        }
        await $.mset((await $.wv([$t16, $t17, $t18], "EditDebtAccNo", C, false)), "Text", (await $.mv((await $.wcall([$t16, $t17, $t18], "FieldByName", ["DebitAccNo"], C)), "AsString")));
        await $.mset((await $.wv([$t16, $t17, $t18], "EditCredAccNo", C, false)), "Text", (await $.mv((await $.wcall([$t16, $t17, $t18], "FieldByName", ["CREDITACCNO"], C)), "AsString")));
        await $.mset((await $.wv([$t16, $t17, $t18], "CurrencyEditDebit", C, false)), "Value", (await $.mv((await $.wcall([$t16, $t17, $t18], "FieldByName", ["DebitAmount"], C)), "AsCurrency")));
        await $.mset((await $.wv([$t16, $t17, $t18], "CurrencyEditCredit", C, false)), "Value", (await $.mv((await $.wcall([$t16, $t17, $t18], "FieldByName", ["CreditAmount"], C)), "AsCurrency")));
        await $.mset((await $.wv([$t16, $t17, $t18], "CurrencyEditLammount", C, false)), "Value", (await $.mv((await $.wcall([$t16, $t17, $t18], "FieldByName", ["Lamount"], C)), "AsCurrency")));
        await $.mcall((await $.wv([$t16, $t17, $t18], "ODS_TransInfo", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t16, $t17, $t18], "ODS_TransInfo", C, false)), "SetVariable", ["v_trID", (await $.mv((await $.wv([$t16, $t17, $t18], "TransactionsID", C, false)), "AsFloat"))])));
        await $.mcall((await $.wv([$t16, $t17, $t18], "ODS_TransInfo", C, false)), "Open", []);
        await $.mset((await $.wv([$t16, $t17, $t18], "DBLC_MMX_Transmode", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18], "ODS_TransInfo", C, false)), "FieldByName", ["TRANSMODE_CODE"])), "AsInteger")));
        await $.mset((await $.wv([$t16, $t17, $t18], "EditTransModeCode", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18], "ODS_TransInfo", C, false)), "FieldByName", ["TRANSMODE_CODE"])), "AsString")));
        await $.mset((await $.wv([$t16, $t17, $t18], "DBLC_MMX_reportcode", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18], "ODS_TransInfo", C, false)), "FieldByName", ["report_code"])), "Asstring")));
        await $.mset((await $.wv([$t16, $t17, $t18], "Editreportcode", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18], "ODS_TransInfo", C, false)), "FieldByName", ["report_code"])), "AsString")));
        if ($.truthy($.ne((await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18], "ODS_TransInfo", C, false)), "FieldByName", ["dcustid"])), "AsInteger")), 0))) {
          await $.mcall((await $.wv([$t16, $t17, $t18], "ODS_DebtCustomer", C, false)), "CloseAll", []);
          await $.stmt((await $.mcall((await $.wv([$t16, $t17, $t18], "ODS_DebtCustomer", C, false)), "SetVariable", ["v_custid", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18], "ODS_TransInfo", C, false)), "FieldByName", ["dcustid"])), "AsInteger"))])));
          await $.mcall((await $.wv([$t16, $t17, $t18], "ODS_DebtCustomer", C, false)), "Open", []);
          await $.mset((await $.wv([$t16, $t17, $t18], "Edit_DCustId", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18], "ODS_TransInfo", C, false)), "FieldByName", ["dcustid"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t16, $t17, $t18], "Edit_DCustId", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18], "DebitAccData", C, false)), "FieldByName", ["cust_id"])), "AsString")));
          await $.mset((await $.wv([$t16, $t17, $t18], "DCust", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18], "DebitAccData", C, false)), "FieldByName", ["cust_name"])), "AsString")));
        }
        if ($.truthy($.ne((await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18], "ODS_TransInfo", C, false)), "FieldByName", ["ccustid"])), "AsInteger")), 0))) {
          await $.mcall((await $.wv([$t16, $t17, $t18], "ODS_CredCustomer", C, false)), "CloseAll", []);
          await $.stmt((await $.mcall((await $.wv([$t16, $t17, $t18], "ODS_CredCustomer", C, false)), "SetVariable", ["v_custid", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18], "ODS_TransInfo", C, false)), "FieldByName", ["ccustid"])), "AsInteger"))])));
          await $.mcall((await $.wv([$t16, $t17, $t18], "ODS_CredCustomer", C, false)), "Open", []);
          await $.mset((await $.wv([$t16, $t17, $t18], "Edit_CCustId", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18], "ODS_TransInfo", C, false)), "FieldByName", ["ccustid"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t16, $t17, $t18], "Edit_CCustId", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18], "CreditAccData", C, false)), "FieldByName", ["cust_id"])), "AsString")));
          await $.mset((await $.wv([$t16, $t17, $t18], "CCust", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18], "CreditAccData", C, false)), "FieldByName", ["cust_name"])), "AsString")));
        }
      }
      else if ($.eq($t19, (await $.wv([$t16, $t17, $t18], "omCommission", C, false)))) {
        await $.mset((await $.wcall([$t16, $t17, $t18], "FieldByName", ["DebitCurrencyID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18], "Commission", C, false)), "FieldByName", ["DebitCurrencyID"])), "AsInteger")));
        await $.mset((await $.wcall([$t16, $t17, $t18], "FieldByName", ["CreditCurrencyID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18], "Commission", C, false)), "FieldByName", ["CreditCurrencyID"])), "AsInteger")));
        await $.mset((await $.wcall([$t16, $t17, $t18], "FieldByName", ["DebitID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18], "Commission", C, false)), "FieldByName", ["Debt"])), "AsInteger")));
        await $.mset((await $.wcall([$t16, $t17, $t18], "FieldByName", ["CreditID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18], "Commission", C, false)), "FieldByName", ["Credit"])), "AsInteger")));
        await $.mset((await $.wv([$t16, $t17, $t18], "EditDebtAccNo", C, false)), "Text", (await $.mv((await $.wcall([$t16, $t17, $t18], "FieldByName", ["DebitAccNo"], C)), "AsString")));
        await $.mset((await $.wv([$t16, $t17, $t18], "EditCreditAccNo", C, false)), "Text", (await $.mv((await $.wcall([$t16, $t17, $t18], "FieldByName", ["CreditAccNo"], C)), "AsString")));
        await $.mset((await $.wcall([$t16, $t17, $t18], "FieldByName", ["Name"], C)), "AsString", (await $.mv((await $.mcall((await $.wv([$t16, $t17, $t18], "Commission", C, false)), "FieldByName", ["Assignment"])), "AsString")));
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("CutEditText", async function CutEditText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "x": 0, "sel": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t22 = (await $.call(C, "TCurrencyEdit", [L0["sender"]]));
    if ($.truthy($.eq((await $.wv([$t22], "DecimalSeparator", C, false)), (await $.wv([$t22], "ThousandSeparator", C, false))))) {
      return L0.result;
    }
    if ($.truthy($.eq((await $.wcall([$t22], "Pos", [(await $.wv([$t22], "DecimalSeparator", C, false)), (await $.wv([$t22], "Text", C, false))], C)), 0))) {
      return L0.result;
    }
    await $.wset([$t22], "Sel", (await $.wv([$t22], "SelStart", C, false)), { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true });
    await $.wset([$t22], "X", $.sub($.sub((await $.wcall([$t22], "Length", [(await $.wv([$t22], "Text", C, false))], C)), (await $.wcall([$t22], "Pos", [(await $.wv([$t22], "DecimalSeparator", C, false)), (await $.wv([$t22], "Text", C, false))], C))), (await $.wv([$t22], "CurrencyDecimals", C, false))), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
    if ($.truthy(($.gt((await $.wv([$t22], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 0)))) {
      await $.wset([$t22], "Text", (await $.wcall([$t22], "Copy", [(await $.wv([$t22], "Text", C, false)), 0, ($.sub((await $.wcall([$t22], "Length", [(await $.wv([$t22], "Text", C, false))], C)), (await $.wv([$t22], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))))], C)), C);
      await $.wset([$t22], "SelStart", (await $.wv([$t22], "Sel", { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true }, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "RoundNew", async function RoundNew(Self, p0, p1) {
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
  U.method("TTransactionEditForm", "ClearAmmounts", async function ClearAmmounts(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "CurrencyEditDebit")), "Value", 0.0);
  await $.mset((await $.v(C, "CurrencyEditCredit")), "Value", 0.0);
  await $.mset((await $.v(C, "CurrencyEditLammount")), "Value", 0.0);
  await $.mset((await $.mv((await $.v(C, "TransactionDataModule")), "TransactionsREPORTID")), "Value", 0);
  await $.mset((await $.mv((await $.v(C, "TransactionDataModule")), "TransactionsCOUNTRID")), "Value", 1);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionEditForm", "ReportIDDBEditKeyPress", async function ReportIDDBEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "ReportIDLookUp")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "ReportIDLookUpKeyPress", async function ReportIDLookUpKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "Emelyyatn_novu")), "Visible")), true))) {
      await $.mcall((await $.v(C, "EditTransModeCode")), "SetFocus", []);
    } else {
      if ($.truthy($.eq((await $.mv((await $.v(C, "Tesnf_kodu")), "Visible")), true))) {
        await $.mcall((await $.v(C, "Editreportcode")), "SetFocus", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "ResetAccountFilter", async function ResetAccountFilter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"accountdataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["accountdataset"]);
  {
    const $t23 = L0["accountdataset"];
    if ($.truthy($.ne((await $.wv([$t23], "Filter", C, false)), ""))) {
      await $.wset([$t23], "Filtered", (await $.wv([$t23], "False", C, false)), C);
      await $.wset([$t23], "Filter", "", C);
    }
  }
  return L0.result;
}, {"params": ["AccountDataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionEditForm", "SaveTransaction", async function SaveTransaction(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t24 = (await $.wobj(C, "TransactionDataModule"));
    const $t25 = (await $.wv([$t24], "Transactions", C, false));
    if ($.truthy($.in_((await $.wv([$t24, $t25], "State", C, false)), [(await $.wv([$t24, $t25], "dsEdit", C, false)), (await $.wv([$t24, $t25], "dsInsert", C, false))]))) {
      if ($.truthy((await $.or_(($.eq((await $.mv((await $.mcall((await $.wv([$t24, $t25], "DebitAccData", C, false)), "FieldByName", ["fromTrans"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t24, $t25], "CreditAccData", C, false)), "FieldByName", ["fromTrans"])), "AsInteger")), 1)))))) {
        await $.stmt((await $.wcall([$t24, $t25], "ShowMessage", ["Bu balans hesabı ilə bu moduldan əməliyyat aparmaq olmaz!"], C)));
        return L0.result;
      }
      {
        const $t26 = (await $.wv([$t24, $t25], "ods_vidopUser", C, false));
        await $.stmt($.wcall([$t24, $t25, $t26], "close", [], C));
        await $.stmt((await $.wcall([$t24, $t25, $t26], "SetVariable", ["v_vidop", (await $.mv((await $.mcall((await $.mv((await $.wv([$t24, $t25, $t26], "TransactionDataModule", C, false)), "Transactions")), "FieldByName", ["OperationCode"])), "AsInteger"))], C)));
        await $.stmt($.wcall([$t24, $t25, $t26], "open", [], C));
        if ($.truthy($.eq((await $.mv((await $.wv([$t24, $t25, $t26], "ods_vidopUser", C, false)), "RecordCount")), 0))) {
          {
            const $t27 = (await $.wv([$t24, $t25, $t26], "ODS_VidOPTrDel", C, false));
            await $.stmt($.wcall([$t24, $t25, $t26, $t27], "Close", [], C));
            await $.stmt((await $.wcall([$t24, $t25, $t26, $t27], "SetVariable", ["v_ID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t24, $t25, $t26, $t27], "TransactionDataModule", C, false)), "Transactions")), "FieldByName", ["OperationCode"])), "AsInteger"))], C)));
            await $.stmt($.wcall([$t24, $t25, $t26, $t27], "Open", [], C));
          }
          if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t24, $t25, $t26], "ODS_VidOPTrDel", C, false)), "FieldByName", ["Cnt"])), "AsInteger")), 1))) {
            await $.stmt((await $.wcall([$t24, $t25, $t26], "ShowMessage", ["Bu növ əməliyyatı bu moduldan redaktə etmək olmaz."], C)));
            return L0.result;
          }
        }
      }
      await $.mset((await $.wcall([$t24, $t25], "FieldByName", ["TransactionDate"], C)), "AsDateTime", (await $.wcall([$t24, $t25], "Int", [(await $.mv((await $.wv([$t24, $t25], "TransDate", C, false)), "DateTime"))], C)));
      await $.mset((await $.wcall([$t24, $t25], "FieldByName", ["DebitAmount"], C)), "AsCurrency", (await $.mv((await $.wv([$t24, $t25], "CurrencyEditDebit", C, false)), "Value")));
      await $.mset((await $.wcall([$t24, $t25], "FieldByName", ["CreditAmount"], C)), "AsCurrency", (await $.mv((await $.wv([$t24, $t25], "CurrencyEditCredit", C, false)), "Value")));
      await $.mset((await $.wcall([$t24, $t25], "FieldByName", ["Lamount"], C)), "AsCurrency", (await $.mv((await $.wv([$t24, $t25], "CurrencyEditLammount", C, false)), "Value")));
      await $.mset((await $.wcall([$t24, $t25], "FieldByName", ["Status"], C)), "AsInteger", 1);
      await $.mset((await $.wcall([$t24, $t25], "FieldByName", ["DebitAccNo"], C)), "AsString", (await $.mv((await $.wv([$t24, $t25], "EditDebtAccNo", C, false)), "Text")));
      await $.mset((await $.wcall([$t24, $t25], "FieldByName", ["CreditAccNo"], C)), "AsString", (await $.mv((await $.wv([$t24, $t25], "EditCredAccNo", C, false)), "Text")));
      await $.mset((await $.wcall([$t24, $t25], "FieldByName", ["DebitCurrencySName"], C)), "AsString", (await $.mv((await $.mcall((await $.wv([$t24, $t25], "DebitCurrencyData", C, false)), "FieldByName", ["SName"])), "AsString")));
      await $.mset((await $.wcall([$t24, $t25], "FieldByName", ["CreditCurrencySName"], C)), "AsString", (await $.mv((await $.mcall((await $.wv([$t24, $t25], "CreditCurrencyData", C, false)), "FieldByName", ["SName"])), "AsString")));
      await $.mset((await $.wcall([$t24, $t25], "FieldByName", ["OperationNo"], C)), "AsString", (await $.mv((await $.wv([$t24, $t25], "DBEditOperationNo", C, false)), "Text")));
      await $.mset((await $.wcall([$t24, $t25], "FieldByName", ["COUNTRID"], C)), "AsString", (await $.mv((await $.wv([$t24, $t25], "CountrIDDBEdit", C, false)), "Text")));
      if ($.truthy($.eq((await $.mv((await $.wv([$t24, $t25], "OperationTypeLookUp", C, false)), "Text")), (await $.wv([$t24, $t25], "EmptyStr", C, false))))) {
        await $.mset((await $.wcall([$t24, $t25], "FieldByName", ["OperationCode"], C)), "Value", (await $.wv([$t24, $t25], "Null", C, false)));
      }
      await $.stmt((await $.mcall((await $.wv([$t24, $t25], "OP_MMX", C, false)), "CallProcedure", ["mmx_transaction", [(await $.mv((await $.mcall((await $.wv([$t24, $t25], "DebitAccData", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t24, $t25], "Sysdat", C, false)), "FieldByName", ["tek_dat"])), "AsDateTime")), (await $.mv((await $.wv([$t24, $t25], "CurrencyEditLammount", C, false)), "Value")), (await $.mv((await $.wv([$t24, $t25], "DBLC_MMX_Transmode", C, false)), "KeyValue"))]])));
      await $.stmt((await $.mcall((await $.wv([$t24, $t25], "OP_MMX", C, false)), "CallProcedure", ["mmx_transaction", [(await $.mv((await $.mcall((await $.wv([$t24, $t25], "CreditAccData", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t24, $t25], "Sysdat", C, false)), "FieldByName", ["tek_dat"])), "AsDateTime")), (await $.mv((await $.wv([$t24, $t25], "CurrencyEditLammount", C, false)), "Value")), (await $.mv((await $.wv([$t24, $t25], "DBLC_MMX_Transmode", C, false)), "KeyValue"))]])));
      await $.stmt($.wcall([$t24, $t25], "Post", [], C));
      await $.stmt((await $.wcall([$t24, $t25], "SBCommit", [], C)));
      await $.mcall((await $.mv((await $.wv([$t24, $t25], "TransactionDataModule", C, false)), "Transactions")), "Refresh", []);
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionEditForm", "ResetTransaction", async function ResetTransaction(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "OperationCancel", []));
  await $.stmt($.call(C, "ClearAmmounts", []));
  {
    const $t28 = (await $.wobj(C, "TransactionDataModule"));
    const $t29 = (await $.wv([$t28], "Transactions", C, false));
    await $.stmt($.wcall([$t28, $t29], "Insert", [], C));
    await $.mset((await $.wcall([$t28, $t29], "FieldByName", ["DebitCurrencyID"], C)), "AsInteger", (await $.wv([$t28, $t29], "DebitCurrencyID", C, false)));
    await $.mset((await $.wcall([$t28, $t29], "FieldByName", ["CreditCurrencyID"], C)), "AsInteger", (await $.wv([$t28, $t29], "CreditCurrencyID", C, false)));
  }
  await $.mcall((await $.v(C, "EditDebtAccNo")), "Clear", []);
  await $.mcall((await $.v(C, "EditDebtBal_CN")), "Clear", []);
  await $.mcall((await $.v(C, "EditKredBal_CN")), "Clear", []);
  await $.mcall((await $.v(C, "EditCredAccNo")), "Clear", []);
  await $.mset((await $.v(C, "DBLC_MMX_Transmode")), "KeyValue", (await $.v(C, "null")));
  await $.mset((await $.v(C, "DBLC_MMX_reportcode")), "KeyValue", (await $.v(C, "null")));
  await $.mcall((await $.v(C, "EditTransModeCode")), "Clear", []);
  await $.mset((await $.v(C, "EditTransModeCode")), "Color", (await $.v(C, "clWhite")));
  await $.mcall((await $.v(C, "Editreportcode")), "Clear", []);
  await $.mset((await $.v(C, "Editreportcode")), "Color", (await $.v(C, "clWhite")));
  await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "DebitAccData")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "CreditAccData")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_DebtCustomer")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_CredCustomer")), "Close", []);
  await $.mcall((await $.v(C, "Edit_DCustId")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_CCustId")), "Clear", []);
  await $.mset((await $.v(C, "DBLookupComboB_budce")), "KeyValue", (await $.v(C, "null")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionEditForm", "Scroll", async function Scroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq((await $.mv((await $.v(C, "TransactionManagerForm")), "OperationMode")), (await $.v(C, "omEdit"))))) {
    {
      const $t30 = (await $.wobj(C, "TransactionDataModule"));
      await $.mcall((await $.wv([$t30], "DebitAccData", C, false)), "Next", []);
      await $.mcall((await $.wv([$t30], "DebitAccData", C, false)), "Prior", []);
      await $.mcall((await $.wv([$t30], "CreditAccData", C, false)), "Next", []);
      await $.mcall((await $.wv([$t30], "CreditAccData", C, false)), "Prior", []);
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("CheckCurrency", async function CheckCurrency(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["value"]);
  {
    const $t31 = (await $.wobj(C, "TransactionDataModule"));
    const $t32 = (await $.wv([$t31], "Currency", C, false));
    await $.wset([$t31, $t32], "Result", (await $.wcall([$t31, $t32], "Locate", ["valute", (await $.wv([$t31, $t32], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["Value"], "kind": "function", "ptypes": ["Variant"]});
  U.method("TTransactionEditForm", "Edit_DCustIdChange", async function Edit_DCustIdChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "Edit_DCustIdKeyPress", async function Edit_DCustIdKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_DCustID")), "Text"))])), ""))) {
      {
        const $t33 = (await $.mv((await $.v(C, "TransactionDataModule")), "ODS_DebtCustomer"));
        await $.stmt($.wcall([$t33], "Close", [], C));
        await $.stmt((await $.wcall([$t33], "SetVariable", ["v_CustID", (await $.mv((await $.wv([$t33], "Edit_DCustID", C, false)), "Text"))], C)));
        await $.stmt($.wcall([$t33], "Open", [], C));
        await $.mcall((await $.wv([$t33], "CreditCurrencyIDEdit", C, false)), "SetFocus", []);
      }
    } else {
      await $.mcall((await $.v(C, "DCust")), "Clear", []);
    }
  } else {
    if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b"]))))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "Edit_CCustIDKeyPress", async function Edit_CCustIDKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_CCustID")), "Text"))])), ""))) {
      {
        const $t34 = (await $.mv((await $.v(C, "TransactionDataModule")), "ODS_CredCustomer"));
        await $.stmt($.wcall([$t34], "Close", [], C));
        await $.stmt((await $.wcall([$t34], "SetVariable", ["v_CustID", (await $.mv((await $.wv([$t34], "Edit_CCustID", C, false)), "Text"))], C)));
        await $.stmt($.wcall([$t34], "Open", [], C));
        await $.mcall((await $.wv([$t34], "CurrencyEditDebit", C, false)), "SetFocus", []);
      }
    } else {
      await $.mcall((await $.v(C, "CCust")), "Clear", []);
    }
  } else {
    if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b"]))))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    {
      const $t36 = (await $.wobj(C, "TransactionDataModule"));
      await $.stmt((await $.wcall([$t36], "ResetAccountFilter", [(await $.wv([$t36], "DebitAccData", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "ResetAccountFilter", [(await $.wv([$t36], "CreditAccData", C, false))], C)));
      await $.stmt((await $.wcall([$t36], "ResetAccountFilter", [(await $.wv([$t36], "CashSymbols", C, false))], C)));
      await $.mcall((await $.wv([$t36], "DebitAccData", C, false)), "Close", []);
      await $.mcall((await $.wv([$t36], "CreditAccData", C, false)), "Close", []);
      await $.wset([$t36], "kli_id1", (-(1)), C);
      await $.wset([$t36], "kli_id2", (-(1)), C);
      await $.wset([$t36], "id1", (-(1)), C);
      await $.wset([$t36], "id2", (-(1)), C);
    }
    await $.stmt($.call(C, "OperationCancel", []));
  } catch ($t35) {
    $.rethrowControl($t35);
    if ($.excIs($t35, "Exception")) {
      L0["e"] = $.exc($t35);
      await $.stmt((await $.call(C, "ShowMessage", [(await $.mv(L0["e"], "Message"))])));
    }
    else { throw $t35; }
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TTransactionEditForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tt": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DebitCurrencyIDEdit")), "SetFocus", []);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DebitCurrencyLookUp")), "KeyValue")), (await $.mv((await $.v(C, "CreditCurrencyLookUp")), "KeyValue"))))) {
    await $.mset((await $.v(C, "Label15")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "Label15")), "Visible", false);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["TransactionManager", "TransactionEditForm", "PANELDEBT_ACC_NO"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "PANELDEBT_ACC_NO")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "PANELDEBT_ACC_NO")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["TransactionManager", "TransactionEditForm", "PANELDEBT_ACC_NOSEARCH"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "PANELDEBT_ACC_NOSEARCH")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "PANELDEBT_ACC_NOSEARCH")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["TransactionManager", "TransactionEditForm", "PANELCREDT_ACC_NO"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "PANELCREDT_ACC_NO")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "PANELCREDT_ACC_NO")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["TransactionManager", "TransactionEditForm", "PANELCREDT_ACC_NOSEARCH"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "PANELCREDT_ACC_NOSEARCH")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "PANELCREDT_ACC_NOSEARCH")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["TransactionManager", "TransactionEditForm", "Konvertasya_teynat"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Konvertasya_teynat")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Konvertasya_teynat")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["TransactionManager", "TransactionEditForm", "Hesabat_teynat"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Hesabat_teynat")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Hesabat_teynat")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["TransactionManager", "TransactionEditForm", "Emelyyatn_novu"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Emelyyatn_novu")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Emelyyatn_novu")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["TransactionManager", "TransactionEditForm", "Tesnf_kodu"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Tesnf_kodu")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Tesnf_kodu")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["TransactionManager", "TransactionEditForm", "transcation_musteri_kodu"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "transcation_musteri_kodu")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "transcation_musteri_kodu")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["TransactionManager", "TransactionEditForm", "Panel_contires"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Panel_contires")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Panel_contires")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["mmx_transmode", "description"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Label9")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label9")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["mmx_reportcode", "description"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Label14")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label14")), "Visible", true);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "TransactionManagerForm")), "OperationMode")), (await $.v(C, "omInsert"))))) {
    await $.mset((await $.v(C, "DBEdit_BucCode")), "Visible", false);
    await $.mset((await $.v(C, "DBLookupComboB_budce")), "Visible", false);
    await $.mset((await $.v(C, "Panel_Budce")), "Visible", false);
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "TransactionManagerForm")), "OperationMode")), (await $.v(C, "omEdit"))))) {
      await $.mset((await $.v(C, "DBEdit_BucCode")), "Visible", true);
      await $.mset((await $.v(C, "DBLookupComboB_budce")), "Visible", true);
      await $.mset((await $.v(C, "Panel_Budce")), "Visible", true);
      L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["TransactionManager", "TransactionEditForm", "Panel_Budce"]]));
      if ($.truthy($.eq(L0["tt"], 0))) {
        await $.mset((await $.v(C, "Panel_Budce")), "Visible", false);
      } else {
        await $.mset((await $.v(C, "Panel_Budce")), "Visible", true);
      }
    }
  }
  await $.stmt($.call(C, "Init", []));
  await $.mcall((await $.v(C, "Ods_reportCode")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "Ods_reportCode")), "SetVariable", ["v_accno", (await $.mv((await $.v(C, "EditDebtAccNo")), "Text"))])));
  await $.mcall((await $.v(C, "Ods_reportCode")), "Open", []);
  await $.set(C, "id1", (await $.mv((await $.mcall((await $.v(C, "Ods_reportCode")), "FieldByName", ["ID"])), "AsInteger")));
  await $.set(C, "kli_id1", (await $.mv((await $.mcall((await $.v(C, "Ods_reportCode")), "FieldByName", ["KLI_ID"])), "AsInteger")));
  await $.mcall((await $.v(C, "Ods_reportCode")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "Ods_reportCode")), "SetVariable", ["v_accno", (await $.mv((await $.v(C, "EditCredAccNo")), "Text"))])));
  await $.mcall((await $.v(C, "Ods_reportCode")), "Open", []);
  await $.set(C, "id2", (await $.mv((await $.mcall((await $.v(C, "Ods_reportCode")), "FieldByName", ["ID"])), "AsInteger")));
  await $.set(C, "kli_id2", (await $.mv((await $.mcall((await $.v(C, "Ods_reportCode")), "FieldByName", ["KLI_ID"])), "AsInteger")));
  await $.set(C, "Modifed", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "GoAmlClick", async function GoAmlClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CreditAccNoLookUpDropDown", async function CreditAccNoLookUpDropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t37 = (await $.wobj(C, "TransactionDataModule"));
    await $.stmt((await $.wcall([$t37], "SetCurrencyFilter", [(await $.wv([$t37], "CreditAccData", C, false)), (await $.wv([$t37], "CreditCurrencyData", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DebtAccSearchEditChange", async function DebtAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t38 = (await $.call(C, "TSearchEdit", [L0["sender"]]));
    const $t39 = (await $.wv([$t38], "TransactionDataModule", C, false));
    const $t40 = (await $.wv([$t38, $t39], "Transactions", C, false));
    if ($.truthy($.eq((await $.wv([$t38, $t39, $t40], "Text", C, false)), (await $.wv([$t38, $t39, $t40], "EmptyStr", C, false))))) {
      await $.mcall((await $.wcall([$t38, $t39, $t40], "FieldByName", ["DebitID"], C)), "Clear", []);
      await $.mcall((await $.wcall([$t38, $t39, $t40], "FieldByName", ["InBalanceChar"], C)), "Clear", []);
    }
    await $.wset([$t38, $t39, $t40], "Modifed", (await $.wv([$t38, $t39, $t40], "True", C, false)), C);
    await $.mset((await $.wv([$t38, $t39, $t40], "PanelDebitRest", C, false)), "Visible", (await $.and_($.not(($.eq((await $.wcall([$t38, $t39, $t40], "Trim", [(await $.wv([$t38, $t39, $t40], "Text", C, false))], C)), (await $.wv([$t38, $t39, $t40], "EmptyStr", C, false))))), async () => ($.not((await $.mv((await $.wcall([$t38, $t39, $t40], "FieldByName", ["DebitID"], C)), "IsNull")))))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CashSymbolDBEditEnter", async function CashSymbolDBEditEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetCashSymbol", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DebtAccSearchEditEnter", async function DebtAccSearchEditEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t41 = (await $.wobj(C, "TransactionDataModule"));
    await $.stmt((await $.wcall([$t41], "SetCurrencyFilter", [(await $.wv([$t41], "DebitAccData", C, false)), (await $.wv([$t41], "DebitCurrencyData", C, false))], C)));
    if ($.truthy($.eq((await $.mv((await $.wcall([$t41], "TEdit", [(await $.wv([$t41], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "Text")), (await $.wv([$t41], "EmptyStr", C, false))))) {
      await $.mcall((await $.mcall((await $.wv([$t41], "Transactions", C, false)), "FieldByName", ["DebitID"])), "Clear", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "Edit_CCustIdChange", async function Edit_CCustIdChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "EditreportcodeEnter", async function EditreportcodeEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLC_MMX_reportcode")), "KeyValue", (await $.mv((await $.v(C, "Editreportcode")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "EditreportcodeKeyPress", async function EditreportcodeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLC_MMX_reportcode")), "KeyValue", (await $.mv((await $.v(C, "Editreportcode")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "EditCredAccNoDblClick", async function EditCredAccNoDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "ClearAmmounts", []));
  await $.mset((await $.v(C, "EditTransModeCode")), "Text", "");
  await $.stmt((await $.call(C, "EditTransModeCodeEnter", [L0["sender"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "Country")), "Locate", ["name", "Azərbaycan", [(await $.v(C, "loCaseInsensitive"))]])));
  await $.mset((await $.v(C, "CountrIDDBEdit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "Country")), "FieldByName", ["id"])), "AsString")));
  await $.mset((await $.v(C, "CountrIDLookUp")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "Country")), "FieldByName", ["id"])), "AsInteger")));
  if ($.truthy(($.eq((await $.mv((await $.v(C, "Panel_contires")), "Visible")), true)))) {
    await $.mcall((await $.v(C, "CountrIDLookUp")), "SetFocus", []);
  }
  await $.set(C, "v_reoprt_code", false);
  await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "SetVariable", ["V_BALCN", (await $.mv((await $.v(C, "EditKredBal_CN")), "Text"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "SetVariable", ["V_val", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "CreditCurrencyIDEdit")), "Text"))]))])));
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_CCustId")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "SetVariable", ["V_KliID", $.add("=", (await $.mv((await $.v(C, "Edit_CCustId")), "Text")))])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "SetVariable", ["V_KliID", ">0"])));
  }
  await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "Open", []);
  await $.mset((await $.v(C, "FormAccounts")), "DebOrKred", false);
  await $.mset((await $.v(C, "FormAccounts")), "v_AccNo", (await $.mv((await $.v(C, "EditCredAccNo")), "Text")));
  await $.mcall((await $.v(C, "FormAccounts")), "ShowModal", []);
  await $.mset((await $.v(C, "EditCredAccNo")), "Text", (await $.mv((await $.v(C, "FormAccounts")), "v_AccNo")));
  if ($.truthy($.eq((await $.mv((await $.v(C, "transcation_musteri_kodu")), "Visible")), true))) {
    await $.mset((await $.v(C, "Edit_CCustId")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.v(C, "FormAccounts")), "v_KliID"))])));
    await $.mcall((await $.v(C, "Edit_CCustId")), "SetFocus", []);
  }
  await $.stmt((await $.call(C, "keybd_event", [(await $.v(C, "VK_RETURN")), 0, 0, 0])));
  {
    const $t42 = (await $.wobj(C, "TransactionDataModule"));
    await $.mcall((await $.wv([$t42], "CreditAccData", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t42], "CreditAccData", C, false)), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.wv([$t42], "ODS_Account", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t42], "CreditAccData", C, false)), "Open", []);
    await $.mset((await $.mcall((await $.wv([$t42], "Transactions", C, false)), "FieldByName", ["CREDITID"])), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t42], "CreditAccData", C, false)), "FieldByName", ["ID"])), "AsInteger")));
  }
  {
    const $t43 = (await $.wobj(C, "TransactionDataModule"));
    const $t44 = (await $.wv([$t43], "Ods_budce", C, false));
    await $.stmt($.wcall([$t43, $t44], "Close", [], C));
    await $.wset([$t43, $t44], "creditt", (await $.mv((await $.mcall((await $.wv([$t43, $t44], "CreditAccData", C, false)), "FieldByName", ["ID"])), "AsInteger")), C);
    await $.stmt((await $.wcall([$t43, $t44], "SetVariable", ["CREDITID", (await $.wv([$t43, $t44], "creditt", C, false))], C)));
    await $.stmt($.wcall([$t43, $t44], "Open", [], C));
    if ($.truthy($.gt((await $.mv((await $.wv([$t43, $t44], "Ods_budce", C, false)), "RecordCount")), 0))) {
      await $.mset((await $.wv([$t43, $t44], "ButtonApply", C, false)), "Caption", "Büdcə maddələri");
      await $.mset((await $.wv([$t43, $t44], "ButtonApply", C, false)), "Width", 100);
      await $.mset((await $.wv([$t43, $t44], "ButtonApply", C, false)), "Left", 372);
      await $.mset((await $.wv([$t43, $t44], "CurrencyEditLammount", C, false)), "Enabled", (await $.wv([$t43, $t44], "false", C, false)));
    } else {
      await $.mset((await $.wv([$t43, $t44], "ButtonApply", C, false)), "Caption", "&Qəbul");
      await $.mset((await $.wv([$t43, $t44], "ButtonApply", C, false)), "Width", 75);
      await $.mset((await $.wv([$t43, $t44], "ButtonApply", C, false)), "Left", 398);
      await $.mset((await $.wv([$t43, $t44], "CurrencyEditLammount", C, false)), "Enabled", (await $.wv([$t43, $t44], "true", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "EditCredAccNoKeyPress", async function EditCredAccNoKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "v_reoprt_code", false);
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "EditCredAccNo")), "Text")), "")), async () => ($.eq((await L0["key"].get()), "\r")))))) {
    await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "SetVariable", ["V_BALCN", (await $.mv((await $.v(C, "EditKredBal_CN")), "Text"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "SetVariable", ["V_val", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "CreditCurrencyIDEdit")), "Text"))]))])));
    if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_CCustId")), "Text")), ""))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "SetVariable", ["V_KliID", $.add("=", (await $.mv((await $.v(C, "Edit_CCustId")), "Text")))])));
    } else {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "SetVariable", ["V_KliID", ">0"])));
    }
    await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "Open", []);
    await $.mset((await $.v(C, "FormAccounts")), "DebOrKred", false);
    await $.mset((await $.v(C, "FormAccounts")), "v_AccNo", (await $.mv((await $.v(C, "EditCredAccNo")), "Text")));
    await $.mcall((await $.v(C, "FormAccounts")), "ShowModal", []);
    await $.mset((await $.v(C, "EditCredAccNo")), "Text", (await $.mv((await $.v(C, "FormAccounts")), "v_AccNo")));
    if ($.truthy($.eq((await $.mv((await $.v(C, "transcation_musteri_kodu")), "Visible")), true))) {
      await $.mset((await $.v(C, "Edit_CCustId")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.v(C, "FormAccounts")), "v_KliID"))])));
      await $.mcall((await $.v(C, "Edit_CCustId")), "SetFocus", []);
      await $.stmt((await $.call(C, "keybd_event", [(await $.v(C, "VK_RETURN")), 0, 0, 0])));
    }
    {
      const $t45 = (await $.wobj(C, "TransactionDataModule"));
      await $.mcall((await $.wv([$t45], "CreditAccData", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t45], "CreditAccData", C, false)), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.wv([$t45], "ODS_Account", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t45], "CreditAccData", C, false)), "Open", []);
      await $.mset((await $.mcall((await $.wv([$t45], "Transactions", C, false)), "FieldByName", ["CREDITID"])), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t45], "CreditAccData", C, false)), "FieldByName", ["ID"])), "AsInteger")));
    }
  } else {
    if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
      if ($.truthy(($.eq((await $.mv((await $.v(C, "transcation_musteri_kodu")), "Visible")), true)))) {
        await $.mcall((await $.v(C, "Edit_DCustId")), "SetFocus", []);
      }
    }
  }
  {
    const $t46 = (await $.wobj(C, "TransactionDataModule"));
    const $t47 = (await $.wv([$t46], "Ods_budce", C, false));
    await $.stmt($.wcall([$t46, $t47], "Close", [], C));
    await $.wset([$t46, $t47], "creditt", (await $.mv((await $.mcall((await $.wv([$t46, $t47], "CreditAccData", C, false)), "FieldByName", ["ID"])), "AsInteger")), C);
    await $.stmt((await $.wcall([$t46, $t47], "SetVariable", ["CREDITID", (await $.wv([$t46, $t47], "creditt", C, false))], C)));
    await $.stmt($.wcall([$t46, $t47], "Open", [], C));
    if ($.truthy($.gt((await $.mv((await $.wv([$t46, $t47], "Ods_budce", C, false)), "RecordCount")), 0))) {
      await $.mset((await $.wv([$t46, $t47], "ButtonApply", C, false)), "Caption", "Büdcə maddələri");
      await $.mset((await $.wv([$t46, $t47], "ButtonApply", C, false)), "Width", 100);
      await $.mset((await $.wv([$t46, $t47], "ButtonApply", C, false)), "Left", 372);
      await $.mset((await $.wv([$t46, $t47], "CurrencyEditLammount", C, false)), "Enabled", (await $.wv([$t46, $t47], "false", C, false)));
    } else {
      await $.mset((await $.wv([$t46, $t47], "ButtonApply", C, false)), "Caption", "&Qəbul");
      await $.mset((await $.wv([$t46, $t47], "ButtonApply", C, false)), "Width", 75);
      await $.mset((await $.wv([$t46, $t47], "ButtonApply", C, false)), "Left", 398);
      await $.mset((await $.wv([$t46, $t47], "CurrencyEditLammount", C, false)), "Enabled", (await $.wv([$t46, $t47], "true", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "EditDebtAccNoDblClick", async function EditDebtAccNoDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "ClearAmmounts", []));
  await $.mset((await $.v(C, "EditTransModeCode")), "Text", "");
  await $.stmt((await $.call(C, "EditTransModeCodeEnter", [L0["sender"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "Country")), "Locate", ["name", "Azərbaycan", [(await $.v(C, "loCaseInsensitive"))]])));
  await $.mset((await $.v(C, "CountrIDDBEdit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "Country")), "FieldByName", ["id"])), "AsString")));
  await $.mset((await $.v(C, "CountrIDLookUp")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "Country")), "FieldByName", ["id"])), "AsInteger")));
  if ($.truthy(($.eq((await $.mv((await $.v(C, "Panel_contires")), "Visible")), true)))) {
    await $.mcall((await $.v(C, "CountrIDLookUp")), "SetFocus", []);
  }
  await $.set(C, "v_reoprt_code", true);
  await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "SetVariable", ["V_BALCN", (await $.mv((await $.v(C, "EditDebtBal_CN")), "Text"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "SetVariable", ["V_val", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "DebitCurrencyIDEdit")), "Text"))]))])));
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_DCustId")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "SetVariable", ["V_KliID", $.add("=", (await $.mv((await $.v(C, "Edit_DCustId")), "Text")))])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "SetVariable", ["V_KliID", ">0"])));
  }
  await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "Open", []);
  await $.mset((await $.v(C, "FormAccounts")), "DebOrKred", true);
  await $.mset((await $.v(C, "FormAccounts")), "v_AccNo", (await $.mv((await $.v(C, "EditDebtAccNo")), "Text")));
  await $.mcall((await $.v(C, "FormAccounts")), "ShowModal", []);
  await $.mset((await $.v(C, "EditDebtAccNo")), "Text", (await $.mv((await $.v(C, "FormAccounts")), "v_AccNo")));
  if ($.truthy($.eq((await $.mv((await $.v(C, "transcation_musteri_kodu")), "Visible")), true))) {
    await $.mset((await $.v(C, "Edit_DCustId")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.v(C, "FormAccounts")), "v_KliID"))])));
    await $.mcall((await $.v(C, "Edit_DCustId")), "SetFocus", []);
  }
  await $.stmt((await $.call(C, "keybd_event", [(await $.v(C, "VK_RETURN")), 0, 0, 0])));
  {
    const $t48 = (await $.wobj(C, "TransactionDataModule"));
    await $.mcall((await $.wv([$t48], "DebitAccData", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t48], "DebitAccData", C, false)), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.wv([$t48], "ODS_Account", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t48], "DebitAccData", C, false)), "Open", []);
  }
  await $.mset((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "Transactions")), "FieldByName", ["DEBITID"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "DebitAccData")), "FieldByName", ["ID"])), "AsInteger")));
  {
    const $t49 = (await $.wobj(C, "TransactionDataModule"));
    const $t50 = (await $.wv([$t49], "Ods_budce", C, false));
    await $.stmt($.wcall([$t49, $t50], "Close", [], C));
    await $.wset([$t49, $t50], "debitt", (await $.mv((await $.mcall((await $.wv([$t49, $t50], "DebitAccData", C, false)), "FieldByName", ["ID"])), "AsInteger")), C);
    await $.stmt((await $.wcall([$t49, $t50], "SetVariable", ["debtid", (await $.wv([$t49, $t50], "debitt", C, false))], C)));
    await $.stmt($.wcall([$t49, $t50], "open", [], C));
    if ($.truthy($.gt((await $.mv((await $.wv([$t49, $t50], "Ods_budce", C, false)), "RecordCount")), 0))) {
      await $.mset((await $.wv([$t49, $t50], "ButtonApply", C, false)), "Caption", "Büdcə maddələri");
      await $.mset((await $.wv([$t49, $t50], "ButtonApply", C, false)), "Width", 100);
      await $.mset((await $.wv([$t49, $t50], "ButtonApply", C, false)), "Left", 372);
      await $.mset((await $.wv([$t49, $t50], "CurrencyEditLammount", C, false)), "Enabled", (await $.wv([$t49, $t50], "false", C, false)));
    } else {
      await $.mset((await $.wv([$t49, $t50], "ButtonApply", C, false)), "Caption", "&Qəbul");
      await $.mset((await $.wv([$t49, $t50], "ButtonApply", C, false)), "Width", 75);
      await $.mset((await $.wv([$t49, $t50], "ButtonApply", C, false)), "Left", 398);
      await $.mset((await $.wv([$t49, $t50], "CurrencyEditLammount", C, false)), "Enabled", (await $.wv([$t49, $t50], "true", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "EditDebtAccNoKeyPress", async function EditDebtAccNoKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "v_reoprt_code", true);
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "EditDebtAccNo")), "Text")), "")), async () => ($.eq((await L0["key"].get()), "\r")))))) {
    await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "SetVariable", ["V_BALCN", (await $.mv((await $.v(C, "EditDebtBal_CN")), "Text"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "SetVariable", ["V_val", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "DebitCurrencyIDEdit")), "Text"))]))])));
    if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_DCustId")), "Text")), ""))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "SetVariable", ["V_KliID", $.add("=", (await $.mv((await $.v(C, "Edit_DCustId")), "Text")))])));
    } else {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "SetVariable", ["V_KliID", ">0"])));
    }
    await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "Open", []);
    await $.mset((await $.v(C, "FormAccounts")), "DebOrKred", true);
    await $.mset((await $.v(C, "FormAccounts")), "v_AccNo", (await $.mv((await $.v(C, "EditDebtAccNo")), "Text")));
    await $.mcall((await $.v(C, "FormAccounts")), "ShowModal", []);
    await $.mset((await $.v(C, "EditDebtAccNo")), "Text", (await $.mv((await $.v(C, "FormAccounts")), "v_AccNo")));
    if ($.truthy($.eq((await $.mv((await $.v(C, "transcation_musteri_kodu")), "Visible")), true))) {
      await $.mset((await $.v(C, "Edit_DCustId")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.v(C, "FormAccounts")), "v_KliID"))])));
      await $.mcall((await $.v(C, "Edit_DCustId")), "SetFocus", []);
      await $.stmt((await $.call(C, "keybd_event", [(await $.v(C, "VK_RETURN")), 0, 0, 0])));
    }
    {
      const $t51 = (await $.wobj(C, "TransactionDataModule"));
      await $.mcall((await $.wv([$t51], "DebitAccData", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t51], "DebitAccData", C, false)), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.wv([$t51], "ODS_Account", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t51], "DebitAccData", C, false)), "Open", []);
    }
    await $.mset((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "Transactions")), "FieldByName", ["DEBITID"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "DebitAccData")), "FieldByName", ["ID"])), "AsInteger")));
  } else {
    if ($.truthy(($.eq((await L0["key"].get()), "\r")))) {
      await $.mcall((await $.v(C, "CreditCurrencyIDEdit")), "SetFocus", []);
    }
  }
  {
    const $t52 = (await $.wobj(C, "TransactionDataModule"));
    const $t53 = (await $.wv([$t52], "Ods_budce", C, false));
    await $.stmt($.wcall([$t52, $t53], "Close", [], C));
    await $.wset([$t52, $t53], "debitt", (await $.mv((await $.mcall((await $.wv([$t52, $t53], "DebitAccData", C, false)), "FieldByName", ["ID"])), "AsInteger")), C);
    await $.stmt((await $.wcall([$t52, $t53], "SetVariable", ["debtid", (await $.wv([$t52, $t53], "debitt", C, false))], C)));
    await $.stmt($.wcall([$t52, $t53], "Open", [], C));
    if ($.truthy($.gt((await $.mv((await $.wv([$t52, $t53], "Ods_budce", C, false)), "RecordCount")), 0))) {
      await $.mset((await $.wv([$t52, $t53], "ButtonApply", C, false)), "Caption", "Büdcə maddələri");
      await $.mset((await $.wv([$t52, $t53], "ButtonApply", C, false)), "Width", 100);
      await $.mset((await $.wv([$t52, $t53], "ButtonApply", C, false)), "Left", 372);
      await $.mset((await $.wv([$t52, $t53], "CurrencyEditLammount", C, false)), "Enabled", (await $.wv([$t52, $t53], "false", C, false)));
    } else {
      await $.mset((await $.wv([$t52, $t53], "ButtonApply", C, false)), "Caption", "&Qəbul");
      await $.mset((await $.wv([$t52, $t53], "ButtonApply", C, false)), "Width", 75);
      await $.mset((await $.wv([$t52, $t53], "ButtonApply", C, false)), "Left", 398);
      await $.mset((await $.wv([$t52, $t53], "CurrencyEditLammount", C, false)), "Enabled", (await $.wv([$t52, $t53], "true", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "EditDebtBal_CNDblClick", async function EditDebtBal_CNDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditDebtBal_CN")), "Text")), ""))) {
    await $.mcall((await $.v(C, "Edit_DCustId")), "Clear", []);
    await $.mcall((await $.v(C, "EditDebtAccNo")), "Clear", []);
    await $.mcall((await $.v(C, "DCust")), "Clear", []);
    await $.mset((await $.v(C, "DBLookupComboB_budce")), "KeyValue", (await $.v(C, "null")));
    {
      const $t54 = (await $.wobj(C, "TransactionDataModule"));
      await $.mcall((await $.wv([$t54], "DebitAccData", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t54], "DebitAccData", C, false)), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.wv([$t54], "ODS_Account", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t54], "DebitAccData", C, false)), "Open", []);
    }
  }
  await $.mset((await $.mv((await $.v(C, "FormBal_CN")), "XDBGridBal_spr1")), "DataSource", (await $.mv((await $.v(C, "TransactionDataModule")), "DEB_BAL_SPR1")));
  await $.mset((await $.v(C, "FormBal_CN")), "DebOrKred", true);
  await $.mset((await $.v(C, "FormBal_CN")), "V_balCn", (await $.mv((await $.v(C, "EditDebtBal_CN")), "Text")));
  await $.mcall((await $.v(C, "FormBal_CN")), "ShowModal", []);
  await $.mset((await $.v(C, "EditDebtBal_CN")), "Text", (await $.mv((await $.v(C, "FormBal_CN")), "V_balCn")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "EditDebtBal_CNKeyPress", async function EditDebtBal_CNKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditDebtBal_CN")), "Text")), ""))) {
    await $.mcall((await $.v(C, "Edit_DCustId")), "Clear", []);
    await $.mcall((await $.v(C, "EditDebtAccNo")), "Clear", []);
    await $.mcall((await $.v(C, "DCust")), "Clear", []);
    await $.mset((await $.v(C, "DBLookupComboB_budce")), "KeyValue", (await $.v(C, "null")));
    {
      const $t55 = (await $.wobj(C, "TransactionDataModule"));
      await $.mcall((await $.wv([$t55], "DebitAccData", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t55], "DebitAccData", C, false)), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.wv([$t55], "ODS_Account", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t55], "DebitAccData", C, false)), "Open", []);
    }
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "EditDebtBal_CN")), "Text")), "")), async () => ($.eq((await L0["key"].get()), "\r")))))) {
    await $.mset((await $.v(C, "FormBal_CN")), "DebOrKred", true);
    await $.mset((await $.v(C, "FormBal_CN")), "V_balCn", (await $.mv((await $.v(C, "EditDebtBal_CN")), "Text")));
    await $.mcall((await $.v(C, "FormBal_CN")), "ShowModal", []);
    await $.mset((await $.v(C, "EditDebtBal_CN")), "Text", (await $.mv((await $.v(C, "FormBal_CN")), "V_balCn")));
  } else {
    if ($.truthy(($.eq((await L0["key"].get()), "\r")))) {
      await $.mcall((await $.v(C, "EditDebtAccNo")), "SetFocus", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "EditKredBal_CNDblClick", async function EditKredBal_CNDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditKredBal_CN")), "Text")), ""))) {
    await $.mcall((await $.v(C, "EditCredAccNo")), "Clear", []);
    await $.mcall((await $.v(C, "Edit_CCustId")), "Clear", []);
    await $.mcall((await $.v(C, "CCust")), "Clear", []);
    {
      const $t56 = (await $.wobj(C, "TransactionDataModule"));
      await $.mcall((await $.wv([$t56], "CreditAccData", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t56], "CreditAccData", C, false)), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.wv([$t56], "ODS_Account", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t56], "CreditAccData", C, false)), "Open", []);
    }
  }
  await $.mset((await $.mv((await $.v(C, "FormBal_CN")), "XDBGridBal_spr1")), "DataSource", (await $.mv((await $.v(C, "TransactionDataModule")), "KRED_BAL_SPR1")));
  await $.mset((await $.v(C, "FormBal_CN")), "DebOrKred", false);
  await $.mset((await $.v(C, "FormBal_CN")), "V_balCn", (await $.mv((await $.v(C, "EditKredBal_CN")), "Text")));
  await $.mcall((await $.v(C, "FormBal_CN")), "ShowModal", []);
  await $.mset((await $.v(C, "EditKredBal_CN")), "Text", (await $.mv((await $.v(C, "FormBal_CN")), "V_balCn")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "EditKredBal_CNKeyPress", async function EditKredBal_CNKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditKredBal_CN")), "Text")), ""))) {
    await $.mcall((await $.v(C, "EditCredAccNo")), "Clear", []);
    await $.mcall((await $.v(C, "Edit_CCustId")), "Clear", []);
    await $.mcall((await $.v(C, "CCust")), "Clear", []);
    {
      const $t57 = (await $.wobj(C, "TransactionDataModule"));
      await $.mcall((await $.wv([$t57], "CreditAccData", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t57], "CreditAccData", C, false)), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.wv([$t57], "ODS_Account", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t57], "CreditAccData", C, false)), "Open", []);
    }
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "EditKredBal_CN")), "Text")), "")), async () => ($.eq((await L0["key"].get()), "\r")))))) {
    await $.mset((await $.v(C, "FormBal_CN")), "DebOrKred", false);
    await $.mset((await $.v(C, "FormBal_CN")), "V_balCn", (await $.mv((await $.v(C, "EditKredBal_CN")), "Text")));
    await $.mcall((await $.v(C, "FormBal_CN")), "ShowModal", []);
    await $.mset((await $.v(C, "EditKredBal_CN")), "Text", (await $.mv((await $.v(C, "FormBal_CN")), "V_balCn")));
  } else {
    if ($.truthy(($.eq((await L0["key"].get()), "\r")))) {
      await $.mcall((await $.v(C, "EditCredAccNo")), "SetFocus", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "EditTransModeCodeChange", async function EditTransModeCodeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "EditTransModeCodeEnter", async function EditTransModeCodeEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLC_MMX_Transmode")), "KeyValue", (await $.mv((await $.v(C, "EditTransModeCode")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "EditTransModeCodeKeyPress", async function EditTransModeCodeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLC_MMX_Transmode")), "KeyValue", (await $.mv((await $.v(C, "EditTransModeCode")), "Text")));
    await $.mcall((await $.v(C, "DBLC_MMX_Transmode")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "CreditAccSearchEditEnter", async function CreditAccSearchEditEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t58 = (await $.wobj(C, "TransactionDataModule"));
    await $.stmt((await $.wcall([$t58], "SetCurrencyFilter", [(await $.wv([$t58], "CreditAccData", C, false)), (await $.wv([$t58], "CreditCurrencyData", C, false))], C)));
    if ($.truthy($.eq((await $.mv((await $.wcall([$t58], "TEdit", [(await $.wv([$t58], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "Text")), (await $.wv([$t58], "EmptyStr", C, false))))) {
      await $.mcall((await $.mcall((await $.wv([$t58], "Transactions", C, false)), "FieldByName", ["CreditID"])), "Clear", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CreditAccSearchEditChange", async function CreditAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t59 = (await $.call(C, "TSearchEdit", [L0["sender"]]));
    const $t60 = (await $.wv([$t59], "TransactionDataModule", C, false));
    const $t61 = (await $.wv([$t59, $t60], "Transactions", C, false));
    if ($.truthy($.eq((await $.wv([$t59, $t60, $t61], "Text", C, false)), (await $.wv([$t59, $t60, $t61], "EmptyStr", C, false))))) {
      await $.mcall((await $.mcall((await $.mv((await $.wv([$t59, $t60, $t61], "TransactionDataModule", C, false)), "Transactions")), "FieldByName", ["CreditID"])), "Clear", []);
      await $.mcall((await $.mcall((await $.mv((await $.wv([$t59, $t60, $t61], "TransactionDataModule", C, false)), "Transactions")), "FieldByName", ["InBalanceChar"])), "Clear", []);
    }
    await $.wset([$t59, $t60, $t61], "Modifed", (await $.wv([$t59, $t60, $t61], "True", C, false)), C);
    await $.mset((await $.wv([$t59, $t60, $t61], "PanelCreditRest", C, false)), "Visible", (await $.and_($.not(($.eq((await $.wcall([$t59, $t60, $t61], "Trim", [(await $.wv([$t59, $t60, $t61], "Text", C, false))], C)), (await $.wv([$t59, $t60, $t61], "EmptyStr", C, false))))), async () => ($.not((await $.mv((await $.wcall([$t59, $t60, $t61], "FieldByName", ["CreditID"], C)), "IsNull")))))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CurrencyEditCreditChange", async function CurrencyEditCreditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await $.call(C, "copy", [(await $.mv((await $.v(C, "EditDebtBal_CN")), "text")), 1, 1])), "3")), async () => ((await $.or_(($.eq((await $.mv((await $.v(C, "EditKredBal_CN")), "Text")), "1001")), async () => ($.eq((await $.mv((await $.v(C, "EditKredBal_CN")), "Text")), "1011"))))))))) {
    await $.mset((await $.v(C, "EditTransModeCode")), "Text", "1004");
    await $.stmt((await $.call(C, "EditTransModeCodeEnter", [L0["sender"]])));
  }
  if ($.truthy((await $.and_(($.eq((await $.call(C, "copy", [(await $.mv((await $.v(C, "EditKredBal_CN")), "text")), 1, 1])), "3")), async () => ((await $.or_(($.eq((await $.mv((await $.v(C, "EditDebtBal_CN")), "Text")), "1001")), async () => ($.eq((await $.mv((await $.v(C, "EditDebtBal_CN")), "Text")), "1011"))))))))) {
    await $.mset((await $.v(C, "EditTransModeCode")), "Text", "1005");
    await $.stmt((await $.call(C, "EditTransModeCodeEnter", [L0["sender"]])));
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DebitCurrencyLookUp")), "KeyValue")), (await $.mv((await $.v(C, "CreditCurrencyLookUp")), "KeyValue"))))) {
    await $.mset((await $.v(C, "Label15")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "Label15")), "Visible", false);
  }
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), (await $.v(C, "EmptyStr"))))) {
    await $.mset((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Value", 0);
  }
  { const $t62 = (await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Tag"));
    if ($.eq($t62, 1)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsDebet")));
    }
    else if ($.eq($t62, 2)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsCredit")));
    }
    else if ($.eq($t62, 3)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsUnknown")));
    }
  }
  await $.stmt((await $.call(C, "SetAmmounts", [(await $.v(C, "TransactionSide"))])));
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CurrencyEditCreditKeyPress", async function CurrencyEditCreditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "CurrencyEditLammount")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "CurrencyEditDebitChange", async function CurrencyEditDebitChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await $.call(C, "copy", [(await $.mv((await $.v(C, "EditDebtBal_CN")), "text")), 1, 1])), "3")), async () => ((await $.or_(($.eq((await $.mv((await $.v(C, "EditKredBal_CN")), "Text")), "1001")), async () => ($.eq((await $.mv((await $.v(C, "EditKredBal_CN")), "Text")), "1011"))))))))) {
    await $.mset((await $.v(C, "EditTransModeCode")), "Text", "1004");
    await $.stmt((await $.call(C, "EditTransModeCodeEnter", [L0["sender"]])));
  }
  if ($.truthy((await $.and_(($.eq((await $.call(C, "copy", [(await $.mv((await $.v(C, "EditKredBal_CN")), "text")), 1, 1])), "3")), async () => ((await $.or_(($.eq((await $.mv((await $.v(C, "EditDebtBal_CN")), "Text")), "1001")), async () => ($.eq((await $.mv((await $.v(C, "EditDebtBal_CN")), "Text")), "1011"))))))))) {
    await $.mset((await $.v(C, "EditTransModeCode")), "Text", "1005");
    await $.stmt((await $.call(C, "EditTransModeCodeEnter", [L0["sender"]])));
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DebitCurrencyLookUp")), "KeyValue")), (await $.mv((await $.v(C, "CreditCurrencyLookUp")), "KeyValue"))))) {
    await $.mset((await $.v(C, "Label15")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "Label15")), "Visible", false);
  }
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), (await $.v(C, "EmptyStr"))))) {
    await $.mset((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Value", 0);
  }
  { const $t63 = (await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Tag"));
    if ($.eq($t63, 1)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsDebet")));
    }
    else if ($.eq($t63, 2)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsCredit")));
    }
    else if ($.eq($t63, 3)) {
      await $.set(C, "TransactionSide", (await $.v(C, "tsUnknown")));
    }
  }
  await $.stmt((await $.call(C, "SetAmmounts", [(await $.v(C, "TransactionSide"))])));
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CurrencyEditDebitKeyPress", async function CurrencyEditDebitKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "CurrencyEditCredit")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "CurrencyEditLammountChange", async function CurrencyEditLammountChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await $.call(C, "copy", [(await $.mv((await $.v(C, "EditDebtBal_CN")), "text")), 1, 1])), "3")), async () => ((await $.or_(($.eq((await $.mv((await $.v(C, "EditKredBal_CN")), "Text")), "1001")), async () => ($.eq((await $.mv((await $.v(C, "EditKredBal_CN")), "Text")), "1011"))))))))) {
    await $.mset((await $.v(C, "EditTransModeCode")), "Text", "1004");
    await $.stmt((await $.call(C, "EditTransModeCodeEnter", [L0["sender"]])));
  }
  if ($.truthy((await $.and_(($.eq((await $.call(C, "copy", [(await $.mv((await $.v(C, "EditKredBal_CN")), "text")), 1, 1])), "3")), async () => ((await $.or_(($.eq((await $.mv((await $.v(C, "EditDebtBal_CN")), "Text")), "1001")), async () => ($.eq((await $.mv((await $.v(C, "EditDebtBal_CN")), "Text")), "1011"))))))))) {
    await $.mset((await $.v(C, "EditTransModeCode")), "Text", "1005");
    await $.stmt((await $.call(C, "EditTransModeCodeEnter", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CurrencyEditLammountKeyPress", async function CurrencyEditLammountKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "Konvertasya_teynat")), "Visible")), true))) {
      await $.mcall((await $.v(C, "ConvertationSymbolIDBEdit")), "SetFocus", []);
    } else {
      await $.mcall((await $.v(C, "CashSymbolDBEdit")), "SetFocus", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F3"))))) {
    {
      const $t64 = (await $.wobj(C, "TransactionDestinationForm"));
      const $t65 = (await $.wv([$t64], "TransactionDataModule", C, false));
      await $.stmt($.wcall([$t64, $t65], "ShowModal", [], C));
      if ($.truthy($.eq((await $.wv([$t64, $t65], "ModalResult", C, false)), (await $.wv([$t64, $t65], "mrOk", C, false))))) {
        await $.mset((await $.mcall((await $.wv([$t64, $t65], "Transactions", C, false)), "FieldByName", ["Name"])), "AsString", (await $.wv([$t64, $t65], "Value", C, false)));
        await $.mset((await $.wv([$t64, $t65], "TrDestNoEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t64, $t65], "TrDest", C, false)), "FieldByName", ["ID"])), "AsString")));
      }
    }
  } else {
    if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
      await $.stmt($.call(C, "Close", []));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TTransactionEditForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "formcust", (await $.mcall((await $.v(C, "tformcust")), "Create", [Self])));
  await $.set(C, "Formtrid", (await $.mcall((await $.v(C, "TFormtrid")), "create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_CredCustomer")), "open", []);
  {
    const $t66 = (await $.wobj(C, "TransactionDataModule"));
    const $t67 = (await $.wv([$t66], "Sysdat", C, false));
    const $t68 = (await $.wv([$t66, $t67], "TransDate", C, false));
    if ($.truthy($.not((await $.mv((await $.wv([$t66, $t67, $t68], "ODS_Settings", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t66, $t67, $t68], "ODS_Settings", C, false)), "Open", []);
    }
    if ($.truthy((await $.mv((await $.wv([$t66, $t67, $t68], "ReportDesc", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t66, $t67, $t68], "ReportDesc", C, false)), "Close", []);
    }
    await $.mcall((await $.wv([$t66, $t67, $t68], "ReportDesc", C, false)), "Open", []);
    if ($.truthy((await $.mv((await $.wv([$t66, $t67, $t68], "Country", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t66, $t67, $t68], "Country", C, false)), "Close", []);
    }
    await $.mcall((await $.wv([$t66, $t67, $t68], "Country", C, false)), "Open", []);
    await $.wset([$t66, $t67, $t68], "DateTime", (await $.mv((await $.wcall([$t66, $t67, $t68], "FieldByName", ["tek_dat"], C)), "AsDateTime")), C);
    if ($.truthy($.eq((await $.wv([$t66, $t67, $t68], "Insert_Edit", C, false)), (await $.and_((await $.wv([$t66, $t67, $t68], "true", C, false)), async () => ($.ne((await $.mv((await $.wv([$t66, $t67, $t68], "TransDate", C, false)), "DateTime")), (await $.mv((await $.mv((await $.wv([$t66, $t67, $t68], "TransactionManagerForm", C, false)), "DTPCurrentDate")), "DateTime"))))))))) {
      await $.mset((await $.wv([$t66, $t67, $t68], "TransDate", C, false)), "DateTime", (await $.mv((await $.mv((await $.wv([$t66, $t67, $t68], "TransactionManagerForm", C, false)), "DTPCurrentDate")), "DateTime")));
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t66, $t67, $t68], "TransactionsREPORTID", C, false)), "AsString")), ""))) {
      await $.mset((await $.wv([$t66, $t67, $t68], "ReportIDDBEdit", C, false)), "Text", "0");
      await $.mset((await $.wv([$t66, $t67, $t68], "ReportIDLookUp", C, false)), "KeyValue", 0);
    }
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DebitCurrencyIDEditExit", async function DebitCurrencyIDEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "PANELDEBT_ACC_NOSEARCH")), "Visible")), true))) {
    await $.mcall((await $.v(C, "ODS_DEBIT_ACCNO")), "Close", []);
    await $.stmt((await $.mcall((await $.v(C, "ODS_DEBIT_ACCNO")), "SetVariable", ["V_val", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "DebitCurrencyIDEdit")), "Text"))]))])));
    await $.mcall((await $.v(C, "ODS_DEBIT_ACCNO")), "open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DebitCurrencyIDEditKeyPress", async function DebitCurrencyIDEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "PANELDEBT_ACC_NO")), "Visible")), true))) {
      await $.mcall((await $.v(C, "EditDebtBal_CN")), "SetFocus", []);
    } else {
      await $.mcall((await $.v(C, "CMSearchEdit1")), "SetFocus", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "DebitCurrencyLookUpCloseUp", async function DebitCurrencyLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODS_DEBIT_ACCNO")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODS_DEBIT_ACCNO")), "SetVariable", ["V_val", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "DebitCurrencyIDEdit")), "Text"))]))])));
  await $.mcall((await $.v(C, "ODS_DEBIT_ACCNO")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DebitCurrencyLookUpEnter", async function DebitCurrencyLookUpEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "DebitCurrencyData")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CreditCurrencyIDEditExit", async function CreditCurrencyIDEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "PANELCREDT_ACC_NOSEARCH")), "Visible")), true))) {
    await $.mcall((await $.v(C, "ODS_CREDIT_ACCNO")), "Close", []);
    await $.stmt((await $.mcall((await $.v(C, "ODS_CREDIT_ACCNO")), "SetVariable", ["V_val", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "CreditCurrencyIDEdit")), "Text"))]))])));
    await $.mcall((await $.v(C, "ODS_CREDIT_ACCNO")), "open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CreditCurrencyIDEditKeyPress", async function CreditCurrencyIDEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "PANELCREDT_ACC_NO")), "Visible")), true))) {
      await $.mcall((await $.v(C, "EditKredBal_CN")), "SetFocus", []);
    } else {
      await $.mcall((await $.v(C, "CMSearchEdit2")), "SetFocus", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "CreditCurrencyLookUpCloseUp", async function CreditCurrencyLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODS_CREDIT_ACCNO")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ODS_CREDIT_ACCNO")), "SetVariable", ["V_val", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "CreditCurrencyIDEdit")), "Text"))]))])));
  await $.mcall((await $.v(C, "ODS_CREDIT_ACCNO")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CreditCurrencyLookUpEnter", async function CreditCurrencyLookUpEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "CreditCurrencyData")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t69 = (await $.wobj(C, "TransactionDataModule"));
    await $.stmt((await $.mcall((await $.wv([$t69], "OP_MMX", C, false)), "CallProcedure", ["up_mmx_transinfo", [(await $.mv((await $.mv((await $.wv([$t69], "TransactionDataModule", C, false)), "TransactionsID")), "AsInteger")), (await $.mv((await $.mv((await $.wv([$t69], "TransactionEditForm", C, false)), "DBLC_MMX_reportcode")), "KeyValue")), (await $.mv((await $.mv((await $.wv([$t69], "TransactionEditForm", C, false)), "DBLC_MMX_Transmode")), "Keyvalue")), (await $.mv((await $.mv((await $.wv([$t69], "TransactionEditForm", C, false)), "Edit_DCustId")), "Text")), (await $.mv((await $.mv((await $.wv([$t69], "TransactionEditForm", C, false)), "Edit_CCustId")), "Text"))]])));
    if ($.truthy((await $.or_(($.eq((await $.mv((await $.wv([$t69], "DBLC_MMX_Transmode", C, false)), "KeyValue")), "1002")), async () => ($.eq((await $.mv((await $.wv([$t69], "DBLC_MMX_Transmode", C, false)), "KeyValue")), "1003")))))) {
      await $.mcall((await $.wv([$t69], "Formtrid", C, false)), "ShowModal", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "ButtonApplyMouseMove", async function ButtonApplyMouseMove(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "shift": $.copyArg(p1), "x": $.copyArg(p2), "y": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "shift", "x", "y"]);
  return L0.result;
}, {"params": ["Sender", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TShiftState", "Integer", "Integer"]});
  U.method("TTransactionEditForm", "ActionCancelExecute", async function ActionCancelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "ResetTransaction", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "ActionExitExecute", async function ActionExitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "ActionInsertExecute", async function ActionInsertExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "c": 0, "tt": 0, "d_balcn": '', "c_balcn": '', "v_repcode": '', "d_id": 0, "k_id": 0, "d_kliid": 0, "k_kliid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "PANELDEBT_ACC_NOSEARCH")), "Visible")), true))) {
    if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "CMSearchEdit1")), "Text"))])), ""))) {
      await $.stmt((await $.call(C, "showmessage", ["Debet hesab sahəsi boşdur!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "PANELDEBT_ACC_NOSEARCH")), "Visible")), true))) {
    if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "CMSearchEdit2")), "Text"))])), ""))) {
      await $.stmt((await $.call(C, "showmessage", ["Kredit hesab sahəsi boşdur!"])));
      return L0.result;
    }
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DebitCurrencyLookUp")), "KeyValue")), (await $.mv((await $.v(C, "CreditCurrencyLookUp")), "KeyValue"))))) {
    if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "ConvertationSymbolLookUp")), "KeyValue")), (await $.v(C, "null")))), async () => ($.eq((await $.mv((await $.v(C, "ConvertationSymbolIDBEdit")), "Text")), "0")))))) {
      await $.stmt((await $.call(C, "showmessage", ["  Konvertasiya təyinatı daxil edilməıidir  ! "])));
      return L0.result;
    }
  }
  if ($.truthy(($.eq((await $.mv((await $.v(C, "Panel_contires")), "Visible")), true)))) {
    if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "CountrIDLookUp")), "KeyValue")), (await $.v(C, "null")))), async () => ($.eq((await $.mv((await $.v(C, "CountrIDLookUp")), "Text")), "")))))) {
      await $.stmt((await $.call(C, "showmessage", ["Ölkə daxil edilməıidir!"])));
      return L0.result;
    }
  }
  if ($.truthy(($.eq((await $.mv((await $.v(C, "Emelyyatn_novu")), "Visible")), true)))) {
    if ($.truthy(($.eq((await $.mv((await $.v(C, "Label9")), "Visible")), true)))) {
      if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "DBLC_MMX_Transmode")), "KeyValue")), (await $.v(C, "null")))), async () => ($.eq((await $.mv((await $.v(C, "DBLC_MMX_Transmode")), "KeyValue")), 0)))))) {
        await $.stmt((await $.call(C, "showmessage", ["Əməliyyatın növü daxil edilməlidir!"])));
        return L0.result;
      }
    }
  }
  if ($.truthy(($.eq((await $.mv((await $.v(C, "Tesnf_kodu")), "Visible")), true)))) {
    if ($.truthy(($.eq((await $.mv((await $.v(C, "Label14")), "Visible")), true)))) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "DBLC_MMX_reportcode")), "Text")), ""))) {
        await $.stmt((await $.call(C, "showmessage", ["Əməliyyatın təsnifat kodunu  daxil edilməlidir!"])));
        return L0.result;
      }
    }
  }
  {
    const $t70 = (await $.wobj(C, "TransactionDataModule"));
    await $.mcall((await $.wv([$t70], "DS_DbtCustNom", C, false)), "close", []);
    await $.stmt((await $.mcall((await $.wv([$t70], "DS_DbtCustNom", C, false)), "SetVariable", ["acc_no", (await $.mv((await $.wv([$t70], "EditDebtAccNo", C, false)), "Text"))])));
    await $.mcall((await $.wv([$t70], "DS_DbtCustNom", C, false)), "open", []);
    await $.mcall((await $.wv([$t70], "DS_CreCustNom", C, false)), "close", []);
    await $.stmt((await $.mcall((await $.wv([$t70], "DS_CreCustNom", C, false)), "SetVariable", ["acc_no", (await $.mv((await $.wv([$t70], "EditCredAccNo", C, false)), "Text"))])));
    await $.mcall((await $.wv([$t70], "DS_CreCustNom", C, false)), "open", []);
  }
  if ($.truthy(($.eq((await $.mv((await $.v(C, "TransactionDataModuleUnit")), "NonCustMustBe")), true)))) {
    await $.stmt((await $.call(C, "showmessage", ["Nominal müştəri seçilməlidir!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "TransactionDataModule")), "Ods_budce")), "RecordCount")), 0))) {
    await $.stmt($.call(C, "SaveTransaction", []));
    await $.stmt($.call(C, "ResetTransaction", []));
    await $.mset((await $.v(C, "Label15")), "Visible", false);
  } else {
    await $.set(C, "Form_budce", (await $.mcall((await $.v(C, "TForm_budce")), "Create", [Self])));
    {
      const $t71 = (await $.wobj(C, "TransactionDataModule"));
      const $t72 = (await $.wv([$t71], "Insert_OracleQuery", C, false));
      await $.mcall((await $.wv([$t71, $t72], "Delete_OracleQuery", C, false)), "Execute", []);
      await $.mset((await $.mv((await $.mv((await $.wv([$t71, $t72], "TransactionDataModule", C, false)), "Insert_OracleQuery")), "SQL")), "Text", $.add($.add($.add($.add($.add($.add("insert into bc_accountcode_copy( id, bc_accid, code,name,username,AMMOUNT)", "select id,bc_accid,code, name,user,0 from bc_account_code s where"), " bc_accid in( select id from bc_account where accid="), (await $.wcall([$t71, $t72], "inttostr", [(await $.wv([$t71, $t72], "debitt", C, false))], C))), " or accid="), (await $.wcall([$t71, $t72], "inttostr", [(await $.wv([$t71, $t72], "creditt", C, false))], C))), " ) "));
      await $.stmt($.wcall([$t71, $t72], "Execute", [], C));
      await $.mcall((await $.wv([$t71, $t72], "Session", C, false)), "Commit", []);
    }
    await $.mcall((await $.v(C, "Form_budce")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "ActionInsertUpdate", async function ActionInsertUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t73 = (L0["sender"]);
    const $t74 = (await $.mv((await $.wv([$t73], "TransactionDataModule", C, false)), "Transactions"));
    await $.wset([$t73, $t74], "Enabled", (await $.and_((await $.and_((await $.and_((await $.wv([$t73, $t74], "Modifed", C, false)), async () => ($.not((await $.mv((await $.wcall([$t73, $t74], "FieldByName", ["DebitID"], C)), "IsNull")))))), async () => ($.not((await $.mv((await $.wcall([$t73, $t74], "FieldByName", ["CreditID"], C)), "IsNull")))))), async () => ($.ne((await $.mv((await $.wv([$t73, $t74], "CurrencyEditLammount", C, false)), "Value")), 0.0)))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "TrDestNoEditChange", async function TrDestNoEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t75 = (await $.call(C, "TEdit", [L0["sender"]]));
    const $t76 = (await $.mv((await $.wv([$t75], "TransactionDestinationForm", C, false)), "TrDest"));
    const $t77 = (await $.wv([$t75, $t76], "TransactionDataModule", C, false));
    if ($.truthy($.ne((await $.wv([$t75, $t76, $t77], "Text", C, false)), (await $.wv([$t75, $t76, $t77], "EmptyStr", C, false))))) {
      if ($.truthy((await $.wcall([$t75, $t76, $t77], "Locate", ["ID", (await $.wv([$t75, $t76, $t77], "Text", C, false)), []], C)))) {
        await $.mset((await $.mcall((await $.wv([$t75, $t76, $t77], "Transactions", C, false)), "FieldByName", ["Name"])), "AsString", (await $.mv((await $.wcall([$t75, $t76, $t77], "FieldByName", ["Name"], C)), "AsString")));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "TrDestNoEditKeyPress", async function TrDestNoEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Panel_contires")), "Visible")), true))) {
    if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
      await $.mcall((await $.v(C, "DBEditDestination")), "SetFocus", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "TransDateChange", async function TransDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modifed", true);
  {
    const $t78 = (await $.wobj(C, "TransactionDataModule"));
    await $.mset((await $.mcall((await $.wv([$t78], "Transactions", C, false)), "FieldByName", ["DebitRate"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t78], "DebitCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsFloat")));
    await $.mset((await $.mcall((await $.wv([$t78], "Transactions", C, false)), "FieldByName", ["CreditRate"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t78], "CreditCurrencyData", C, false)), "FieldByName", ["Rate"])), "AsFloat")));
    if ($.truthy($.ne((await $.mv((await $.wv([$t78], "TransDate", C, false)), "Date")), (await $.mv((await $.mcall((await $.wv([$t78], "Sysdat", C, false)), "FieldByName", ["tek_dat"])), "AsDateTime"))))) {
      await $.mset((await $.mcall((await $.wv([$t78], "Transactions", C, false)), "FieldByName", ["DebitRate"])), "AsFloat", 0);
    }
    await $.mset((await $.mcall((await $.wv([$t78], "Transactions", C, false)), "FieldByName", ["CreditRate"])), "AsFloat", 0);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CashSymbolDBEditExit", async function CashSymbolDBEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "cashsymbol": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t79 = (await $.call(C, "TDBEdit", [L0["sender"]]));
    const $t80 = (await $.wv([$t79], "TransactionDataModule", C, false));
    if ($.truthy($.eq((await $.wv([$t79, $t80], "Text", C, false)), (await $.wv([$t79, $t80], "EmptyStr", C, false))))) {
      return L0.result;
    }
    await $.wset([$t79, $t80], "CashSymbol", (await $.mv((await $.mcall((await $.wv([$t79, $t80], "Transactions", C, false)), "FieldByName", ["InBalanceChar"])), "AsString")), { get: async () => L0["cashsymbol"], set: async (v) => { L0["cashsymbol"] = v; }, local: true });
    if ($.truthy($.not((await $.mcall((await $.wv([$t79, $t80], "CashSymbols", C, false)), "Locate", ["Symbol", (await $.wv([$t79, $t80], "CashSymbol", { get: async () => L0["cashsymbol"], set: async (v) => { L0["cashsymbol"] = v; }, local: true }, false)), [(await $.wv([$t79, $t80], "loCaseInsensitive", C, false))]]))))) {
      await $.wset([$t79, $t80], "Modifed", (await $.wv([$t79, $t80], "False", C, false)), C);
      await $.wset([$t79, $t80], "Color", (await $.wv([$t79, $t80], "clRed", C, false)), C);
      await $.stmt($.wcall([$t79, $t80], "SetFocus", [], C));
    } else {
      await $.wset([$t79, $t80], "Color", (await $.wv([$t79, $t80], "clWhite", C, false)), C);
      await $.wset([$t79, $t80], "Modifed", (await $.wv([$t79, $t80], "True", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CashSymbolDBEditKeyPress", async function CashSymbolDBEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "CashSymbolLookUp")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "CashSymbolLookUpKeyPress", async function CashSymbolLookUpKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "TrDestNoEdit")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "DBEditDestinationChange", async function DBEditDestinationChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DBEditDestinationKeyPress", async function DBEditDestinationKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Panel_contires")), "Visible")), true))) {
    if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
      await $.mcall((await $.v(C, "CountrIDDBEdit")), "SetFocus", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "DBEdit_BucCodeChange", async function DBEdit_BucCodeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DBEdit_BucCodeExit", async function DBEdit_BucCodeExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "budce_codes": 0};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DBEdit_BucCodeKeyPress", async function DBEdit_BucCodeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "DBLookupComboB_budce")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "DBLC_MMX_reportcodeCloseUp", async function DBLC_MMX_reportcodeCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLC_MMX_reportcode")), "KeyVAlue")), (await $.v(C, "null"))))) {
    await $.mset((await $.mv((await $.v(C, "TransactionEditForm")), "Editreportcode")), "Text", (await $.mv((await $.v(C, "DBLC_MMX_reportcode")), "KeyVAlue")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DBLC_MMX_reportcodeKeyPress", async function DBLC_MMX_reportcodeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ButtonApply")), "Enabled")), true))) {
    if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
      await $.mcall((await $.v(C, "ButtonApply")), "SetFocus", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "DBLC_MMX_TransmodeCloseUp", async function DBLC_MMX_TransmodeCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLC_MMX_Transmode")), "KeyVAlue")), (await $.v(C, "null"))))) {
    await $.mset((await $.mv((await $.v(C, "TransactionEditForm")), "EditTransModeCode")), "Text", (await $.mv((await $.v(C, "DBLC_MMX_Transmode")), "KeyVAlue")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DBLC_MMX_TransmodeKeyPress", async function DBLC_MMX_TransmodeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "Tesnf_kodu")), "Visible")), true))) {
      await $.mcall((await $.v(C, "Editreportcode")), "SetFocus", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "DBLookupComboB_budceCloseUp", async function DBLookupComboB_budceCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "DBLookupComboB_budceKeyPress", async function DBLookupComboB_budceKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ButtonApply")), "Enabled")), true))) {
    if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
      await $.mcall((await $.v(C, "ButtonApply")), "SetFocus", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "ConvertationSymbolIDBEditExit", async function ConvertationSymbolIDBEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "convertationsymbol": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t81 = (await $.call(C, "TDBEdit", [L0["sender"]]));
    const $t82 = (await $.wv([$t81], "TransactionDataModule", C, false));
    if ($.truthy($.eq((await $.wv([$t81, $t82], "Text", C, false)), (await $.wv([$t81, $t82], "EmptyStr", C, false))))) {
      return L0.result;
    }
    await $.wset([$t81, $t82], "ConvertationSymbol", (await $.mv((await $.mcall((await $.wv([$t81, $t82], "Transactions", C, false)), "FieldByName", ["OutBalanceChar"])), "AsInteger")), { get: async () => L0["convertationsymbol"], set: async (v) => { L0["convertationsymbol"] = v; }, local: true });
    if ($.truthy($.not((await $.mcall((await $.wv([$t81, $t82], "ConvertationSymbols", C, false)), "Locate", ["ID", (await $.wv([$t81, $t82], "ConvertationSymbol", { get: async () => L0["convertationsymbol"], set: async (v) => { L0["convertationsymbol"] = v; }, local: true }, false)), []]))))) {
      await $.wset([$t81, $t82], "Modifed", (await $.wv([$t81, $t82], "False", C, false)), C);
      await $.wset([$t81, $t82], "Color", (await $.wv([$t81, $t82], "clRed", C, false)), C);
      await $.stmt($.wcall([$t81, $t82], "SetFocus", [], C));
    } else {
      await $.wset([$t81, $t82], "Color", (await $.wv([$t81, $t82], "clWhite", C, false)), C);
      await $.wset([$t81, $t82], "Modifed", (await $.wv([$t81, $t82], "True", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "ConvertationSymbolIDBEditKeyPress", async function ConvertationSymbolIDBEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "ConvertationSymbolLookUp")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "ConvertationSymbolLookUpKeyPress", async function ConvertationSymbolLookUpKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "CashSymbolDBEdit")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "CountrIDDBEditChange", async function CountrIDDBEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "key": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["key"] = "\r";
  {
    const $t83 = (await $.wobj(C, "TransactionDataModule"));
    if ($.truthy($.ne((await $.mv((await $.wv([$t83], "CountrIDDBEdit", C, false)), "Text")), ""))) {
      await $.mcall((await $.wv([$t83], "ods_blr", C, false)), "close", []);
      await $.stmt((await $.mcall((await $.wv([$t83], "ods_blr", C, false)), "SetVariable", ["p_contid", (await $.mv((await $.wv([$t83], "CountrIDDBEdit", C, false)), "Text"))])));
      await $.mset((await $.wv([$t83], "ods_blr", C, false)), "Session", (await $.mv((await $.wv([$t83], "sboapiDataModule", C, false)), "SBSession")));
      await $.mcall((await $.wv([$t83], "ods_blr", C, false)), "open", []);
    }
  }
  if ($.truthy($.gt((await $.mv((await $.v(C, "ods_blr")), "RecordCount")), 0))) {
    await $.mset((await $.v(C, "Editreportcode")), "Text", "BLR");
  } else {
    await $.mset((await $.v(C, "Editreportcode")), "Text", (await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "OP_MMX")), "CallStringFunction", ["get_report", [(await $.v(C, "kli_id1")), (await $.v(C, "kli_id2")), (await $.v(C, "id1")), (await $.v(C, "id2"))]])));
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "Editreportcode")), "Text")), ""))) {
    await $.stmt((await $.call(C, "EditreportcodeEnter", [L0["sender"]])));
  }
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CountrIDDBEditKeyPress", async function CountrIDDBEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.v(C, "CountrIDLookUp")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "CountrIDLookUpCloseUp", async function CountrIDLookUpCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "key": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["key"] = "\r";
  {
    const $t84 = (await $.wobj(C, "TransactionDataModule"));
    const $t85 = (await $.wv([$t84], "ods_blr", C, false));
    await $.stmt($.wcall([$t84, $t85], "close", [], C));
    await $.stmt((await $.wcall([$t84, $t85], "SetVariable", ["p_contid", (await $.mv((await $.mcall((await $.wv([$t84, $t85], "Country", C, false)), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.mset((await $.wv([$t84, $t85], "ods_blr", C, false)), "Session", (await $.mv((await $.wv([$t84, $t85], "sboapiDataModule", C, false)), "SBSession")));
    await $.stmt($.wcall([$t84, $t85], "open", [], C));
  }
  if ($.truthy($.gt((await $.mv((await $.v(C, "ods_blr")), "RecordCount")), 0))) {
    await $.mset((await $.v(C, "Editreportcode")), "Text", "BLR");
  } else {
    await $.mset((await $.v(C, "Editreportcode")), "Text", (await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "OP_MMX")), "CallStringFunction", ["get_report", [(await $.v(C, "kli_id1")), (await $.v(C, "kli_id2")), (await $.v(C, "id1")), (await $.v(C, "id2"))]])));
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "Editreportcode")), "Text")), ""))) {
    await $.stmt((await $.call(C, "EditreportcodeKeyPress", [L0["sender"], $.ref(async () => L0["key"], async ($t86) => { L0["key"] = $t86; })])));
  }
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "CountrIDLookUpKeyPress", async function CountrIDLookUpKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "Hesabat_teynat")), "Visible")), true))) {
      await $.mcall((await $.v(C, "ReportIDDBEdit")), "SetFocus", []);
    } else {
      if ($.truthy($.eq((await $.mv((await $.v(C, "Emelyyatn_novu")), "Visible")), true))) {
        await $.mcall((await $.v(C, "EditTransModeCode")), "SetFocus", []);
      } else {
        if ($.truthy($.eq((await $.mv((await $.v(C, "Tesnf_kodu")), "Visible")), true))) {
          await $.mcall((await $.v(C, "Editreportcode")), "SetFocus", []);
        } else {
          await $.mcall((await $.v(C, "ButtonApply")), "SetFocus", []);
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransactionEditForm", "DebitCurrencyRateChange", async function DebitCurrencyRateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Modifed", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "LoadComboData", async function LoadComboData(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t87 = (await $.mv((await $.v(C, "TransactionDataModule")), "Destinations"));
    const $t88 = (await $.wv([$t87], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    if ($.truthy($.not(((await $.wv([$t87, $t88], "Active", C, false)))))) {
      await $.stmt($.wcall([$t87, $t88], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t87, $t88], "Refresh", [], C));
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t87, $t88], "Items", C, false)), "Count")), (await $.wv([$t87, $t88], "RecordCount", C, false))))) {
      await $.mcall((await $.wv([$t87, $t88], "Items", C, false)), "Clear", []);
      await $.stmt($.wcall([$t87, $t88], "First", [], C));
      while ($.truthy($.not(((await $.wv([$t87, $t88], "EOF", C, false)))))) {
        await $.stmt((await $.mcall((await $.wv([$t87, $t88], "Items", C, false)), "Add", [(await $.mv((await $.wcall([$t87, $t88], "FieldByName", ["NAME"], C)), "AsString"))])));
        await $.stmt($.wcall([$t87, $t88], "Next", [], C));
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TComboBox"]});
  U.method("TTransactionEditForm", "ComboBox1DropDown", async function ComboBox1DropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadComboData", [(await $.call(C, "TComboBox", [L0["sender"]]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "ComboBox1Click", async function ComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t89 = (await $.wobj(C, "TransactionDataModule"));
    await $.mset((await $.mcall((await $.wv([$t89], "Transactions", C, false)), "FieldByName", ["Name"])), "AsString", (await $.mv(((await $.wv([$t89], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "BtnCredCustomerClick", async function BtnCredCustomerClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "SetVariable", ["V_BALCN", (await $.mv((await $.v(C, "EditKredBal_CN")), "Text"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "SetVariable", ["V_val", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "CreditCurrencyIDEdit")), "Text"))]))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "SetVariable", ["V_KliID", $.add("=", (await $.mv((await $.v(C, "Edit_CCustId")), "Text")))])));
  await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "Open", []);
  await $.mset((await $.v(C, "FormAccounts")), "DebOrKred", false);
  await $.mset((await $.v(C, "FormAccounts")), "v_AccNo", (await $.mv((await $.v(C, "EditCredAccNo")), "Text")));
  await $.mcall((await $.v(C, "FormAccounts")), "ShowModal", []);
  await $.mset((await $.v(C, "EditCredAccNo")), "Text", (await $.mv((await $.v(C, "FormAccounts")), "v_AccNo")));
  {
    const $t90 = (await $.wobj(C, "TransactionDataModule"));
    await $.mcall((await $.wv([$t90], "CreditAccData", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t90], "CreditAccData", C, false)), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.wv([$t90], "ODS_Account", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t90], "CreditAccData", C, false)), "Open", []);
    await $.mset((await $.mcall((await $.wv([$t90], "Transactions", C, false)), "FieldByName", ["CREDITID"])), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t90], "CreditAccData", C, false)), "FieldByName", ["ID"])), "AsInteger")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "BtnDebtCustomerClick", async function BtnDebtCustomerClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "SetVariable", ["V_BALCN", (await $.mv((await $.v(C, "EditDebtBal_CN")), "Text"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "SetVariable", ["V_val", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "DebitCurrencyIDEdit")), "Text"))]))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "SetVariable", ["V_KliID", $.add("=", (await $.mv((await $.v(C, "Edit_DCustId")), "Text")))])));
  await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "ODS_Account")), "Open", []);
  await $.mset((await $.v(C, "FormAccounts")), "DebOrKred", true);
  await $.mset((await $.v(C, "FormAccounts")), "v_AccNo", (await $.mv((await $.v(C, "EditDebtAccNo")), "Text")));
  await $.mcall((await $.v(C, "FormAccounts")), "ShowModal", []);
  await $.mset((await $.v(C, "EditDebtAccNo")), "Text", (await $.mv((await $.v(C, "FormAccounts")), "v_AccNo")));
  {
    const $t91 = (await $.wobj(C, "TransactionDataModule"));
    await $.mcall((await $.wv([$t91], "DebitAccData", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t91], "DebitAccData", C, false)), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.wv([$t91], "ODS_Account", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t91], "DebitAccData", C, false)), "Open", []);
  }
  await $.mset((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "Transactions")), "FieldByName", ["DEBITID"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionDataModule")), "DebitAccData")), "FieldByName", ["ID"])), "AsInteger")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t92 = (await $.wobj(C, "TransactionDataModule"));
    const $t93 = (await $.wv([$t92], "PACKBPROC", C, false));
    await $.stmt((await $.wcall([$t92, $t93], "callprocedure", ["execbprocess", [(await $.mv((await $.wv([$t92, $t93], "BProcDataID", C, false)), "AsVariant")), (await $.mv((await $.wv([$t92, $t93], "CurrencyEditDebit", C, false)), "Value")), (await $.mv((await $.wv([$t92, $t93], "CurrencyEditCredit", C, false)), "Value")), (await $.mv((await $.wv([$t92, $t93], "CurrencyEditLammount", C, false)), "Value")), (await $.mv((await $.wv([$t92, $t93], "CashSymbolLookUp", C, false)), "KeyValue")), (await $.mv((await $.wv([$t92, $t93], "ConvertationSymbolLookUp", C, false)), "KeyValue")), (await $.mv((await $.wv([$t92, $t93], "DBEditDestination", C, false)), "text")), (await $.mv((await $.wv([$t92, $t93], "ReportIDDBEdit", C, false)), "Text")), (await $.mv((await $.wv([$t92, $t93], "CountrIDDBEdit", C, false)), "Text"))]], C)));
    await $.mcall((await $.wv([$t92, $t93], "BPTransData", C, false)), "Close", []);
    await $.mcall((await $.wv([$t92, $t93], "BPTransData", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t92, $t93], "frmBTrans", C, false)), "ShowModal")), (await $.wv([$t92, $t93], "IDOK", C, false))))) {
      try {
        await $.stmt((await $.wcall([$t92, $t93], "callprocedure", ["commitprocs", []], C)));
      } finally {
        await $.mcall((await $.wv([$t92, $t93], "Session", C, false)), "commit", []);
      }
    } else {
      await $.mcall((await $.wv([$t92, $t93], "Session", C, false)), "commit", []);
    }
  }
  await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "TransactionManagerForm")), "GridTransactions")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionEditForm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t94 = (await $.wobj(C, "TransactionDataModule"));
    await $.stmt((await $.mcall((await $.wv([$t94], "OP_MMX", C, false)), "CallProcedure", ["up_mmx_transinfo", [(await $.mv((await $.mv((await $.wv([$t94], "TransactionDataModule", C, false)), "TransactionsID")), "AsInteger")), (await $.mv((await $.mv((await $.wv([$t94], "TransactionEditForm", C, false)), "DBLC_MMX_reportcode")), "KeyValue")), (await $.mv((await $.mv((await $.wv([$t94], "TransactionEditForm", C, false)), "DBLC_MMX_Transmode")), "Keyvalue")), (await $.mv((await $.mv((await $.wv([$t94], "TransactionEditForm", C, false)), "Edit_DCustId")), "Text")), (await $.mv((await $.mv((await $.wv([$t94], "TransactionEditForm", C, false)), "Edit_CCustId")), "Text"))]])));
    if ($.truthy((await $.or_(($.eq((await $.mv((await $.wv([$t94], "DBLC_MMX_Transmode", C, false)), "KeyValue")), "1002")), async () => ($.eq((await $.mv((await $.wv([$t94], "DBLC_MMX_Transmode", C, false)), "KeyValue")), "1003")))))) {
      await $.mcall((await $.wv([$t94], "Formtrid", C, false)), "ShowModal", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
