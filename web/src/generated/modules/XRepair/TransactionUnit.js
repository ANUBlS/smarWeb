// Generated from TransactionUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TransactionUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "SearchEdit", "ComCtrls", "SearchCombo", "Db", "OracleData", "CurrencyEdit", "ActnList", "HintBox", "DBViewComboBox", "Mask", "DBCtrls", "FieldSearchEdit", "RepairMainFormImpl", "sboapidatamoduleimpl", "repairdatamodule", "SBCore"]);
  const C = [U];
  U.defClass("TfrmTransaction", "TForm", {"label2": {"name": "Label2", "type": "TLabel"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "descriptionpanel": {"name": "DescriptionPanel", "type": "TPanel"}, "trnameedit": {"name": "TrNameEdit", "type": "TEdit"}, "trnameb": {"name": "TrNameB", "type": "TButton"}, "trnamecb": {"name": "TrNameCB", "type": "TDBLookupComboBox"}, "trdatepanel": {"name": "TrDatePanel", "type": "TPanel"}, "transactiondateedit": {"name": "TransactionDateEdit", "type": "TDateTimePicker"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "outbalancecharcb": {"name": "OutBalanceCharCB", "type": "TDBLookupComboBox"}, "outbalancecharedit": {"name": "OutBalanceCharEdit", "type": "TFieldSearchEdit"}, "inbalancecharedit": {"name": "InBalanceCharEdit", "type": "TFieldSearchEdit"}, "inbalancecharcb": {"name": "InBalanceCharCB", "type": "TDBLookupComboBox"}, "debitcurrencyidedit": {"name": "DebitCurrencyIDEdit", "type": "TFieldSearchEdit"}, "debitcurrencycb": {"name": "DebitCurrencyCB", "type": "TDBLookupComboBox"}, "debitrateedit": {"name": "DebitRateEdit", "type": "TEdit"}, "creditcurrencyidedit": {"name": "CreditCurrencyIDEdit", "type": "TFieldSearchEdit"}, "creditcurrencycb": {"name": "CreditCurrencyCB", "type": "TDBLookupComboBox"}, "creditrateedit": {"name": "CreditRateEdit", "type": "TEdit"}, "debitaccnosearchedit": {"name": "DebitAccNoSearchEdit", "type": "TFieldSearchEdit"}, "debitaccnocb": {"name": "DebitAccNoCB", "type": "TSearchCombo"}, "creditaccnosearchedit": {"name": "CreditAccNoSearchEdit", "type": "TFieldSearchEdit"}, "creditaccnocb": {"name": "CreditAccNoCB", "type": "TSearchCombo"}, "debitaccnamecb": {"name": "DebitAccNameCB", "type": "TSearchCombo"}, "creditaccnamecb": {"name": "CreditAccNameCB", "type": "TSearchCombo"}, "accrest": {"name": "AccRest", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "debitaccbalancelabel": {"name": "DebitAccBalanceLabel", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "debitlbalancelabel": {"name": "DebitLBalanceLabel", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "creditaccbalancelabel": {"name": "CreditAccBalanceLabel", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "creditlbalancelabel": {"name": "CreditLBalanceLabel", "type": "TLabel"}, "debetammountpanel": {"name": "DebetAmmountPanel", "type": "TPanel"}, "creditammountpanel": {"name": "CreditAmmountPanel", "type": "TPanel"}, "debetlammountpanel": {"name": "DebetLAmmountPanel", "type": "TPanel"}, "debetpanel": {"name": "DebetPanel", "type": "TPanel"}, "creditpanel": {"name": "CreditPanel", "type": "TPanel"}, "debitheader": {"name": "DebitHeader", "type": "TPanel"}, "label7": {"name": "Label7", "type": "TLabel"}, "headerpanel": {"name": "HeaderPanel", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "credittheader": {"name": "CredittHeader", "type": "TPanel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "buttonpanel": {"name": "ButtonPanel", "type": "TPanel"}, "savebutton": {"name": "SaveButton", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "errorhintbox": {"name": "ErrorHintBox", "type": "THintBox"}, "debitamountedit": {"name": "DebitAmountEdit", "type": "TCurrencyEdit"}, "lamountedit": {"name": "LAmountEdit", "type": "TCurrencyEdit"}, "creditamountedit": {"name": "CreditAmountEdit", "type": "TCurrencyEdit"}}, {});
  U.init(async () => {
    U.var_("frmTransaction", null, "TfrmTransaction");
  });
  U.method("TfrmTransaction", "DebitAccNoCBChange", async function DebitAccNoCBChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebitAccNameCB")), "itemindex", (await $.mv((await $.v(C, "DebitAccNoCB")), "itemindex")));
  await $.mset((await $.v(C, "DebitAccNoSearchEdit")), "Text", (await $.mv((await $.v(C, "DebitAccNoCB")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTransaction", "CreditAccNoCBChange", async function CreditAccNoCBChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CreditAccNameCB")), "itemindex", (await $.mv((await $.v(C, "CreditAccNoCB")), "itemindex")));
  await $.mset((await $.v(C, "CreditAccNoSearchEdit")), "Text", (await $.mv((await $.v(C, "CreditAccNoCB")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTransaction", "DebitAccNameCBChange", async function DebitAccNameCBChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebitAccNoCB")), "itemindex", (await $.mv((await $.v(C, "DebitAccNameCB")), "itemindex")));
  await $.mset((await $.v(C, "DebitAccNoSearchEdit")), "Text", (await $.mv((await $.v(C, "DebitAccNoCB")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTransaction", "DebitAccNoSearchEditExit", async function DebitAccNoSearchEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebitAccNoCB")), "DefaultStringUse", false);
  await $.mset((await $.v(C, "DebitAccNoCB")), "itemindex", $.sub((await $.mv((await $.mv((await $.mv((await $.v(C, "DebitAccNoSearchEdit")), "DataSource")), "DataSet")), "RecNo")), 1));
  await $.mset((await $.v(C, "DebitAccNameCB")), "DefaultStringUse", false);
  await $.mset((await $.v(C, "DebitAccNameCB")), "itemindex", (await $.mv((await $.v(C, "DebitAccNoCB")), "itemindex")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTransaction", "CreditAccNameCBChange", async function CreditAccNameCBChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CreditAccNoCB")), "itemindex", (await $.mv((await $.v(C, "CreditAccNameCB")), "itemindex")));
  await $.mset((await $.v(C, "CreditAccNoSearchEdit")), "Text", (await $.mv((await $.v(C, "CreditAccNoCB")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTransaction", "CreditAccNoSearchEditExit", async function CreditAccNoSearchEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CreditAccNoCB")), "DefaultStringUse", false);
  await $.mset((await $.v(C, "CreditAccNoCB")), "itemindex", $.sub((await $.mv((await $.mv((await $.mv((await $.v(C, "CreditAccNoSearchEdit")), "DataSource")), "DataSet")), "RecNo")), 1));
  await $.mset((await $.v(C, "CreditAccNameCB")), "DefaultStringUse", false);
  await $.mset((await $.v(C, "CreditAccNameCB")), "itemindex", (await $.mv((await $.v(C, "CreditAccNoCB")), "itemindex")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTransaction", "DebitCurrencyIDEditExit", async function DebitCurrencyIDEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DebitCurrencyIDEdit")), "Text")), ""))) {
    await $.mset((await $.v(C, "DebitCurrencyIDEdit")), "Text", (await $.mv((await $.v(C, "DebitCurrencyCB")), "KeyValue")));
  } else {
    await $.mset((await $.v(C, "DebitCurrencyCB")), "KeyValue", (await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "DebitCurrencyIDEdit")), "Text"))])));
  }
  await $.stmt((await $.call(C, "SetNull", ["D"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTransaction", "CreditCurrencyIDEditExit", async function CreditCurrencyIDEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CreditCurrencyIDEdit")), "Text")), ""))) {
    await $.mset((await $.v(C, "CreditCurrencyIDEdit")), "Text", (await $.mv((await $.v(C, "CreditCurrencyCB")), "KeyValue")));
  } else {
    await $.mset((await $.v(C, "CreditCurrencyCB")), "KeyValue", (await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "CreditCurrencyIDEdit")), "Text"))])));
  }
  await $.stmt((await $.call(C, "SetNull", ["C"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTransaction", "OutBalanceCharEditExit", async function OutBalanceCharEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "OutBalanceCharCB")), "KeyValue", (await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "OutBalanceCharEdit")), "Text"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTransaction", "OutBalanceCharCBExit", async function OutBalanceCharCBExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "OutBalanceCharEdit")), "Text", (await $.mv((await $.v(C, "OutBalanceCharCB")), "KeyValue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTransaction", "TrNameCBExit", async function TrNameCBExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "TrNameCB")), "OnClick", [(await $.v(C, "TrNameCB"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTransaction", "TrNameBClick", async function TrNameBClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "TrNameCB")), "Visible", true);
  await $.mcall((await $.v(C, "TrNameCB")), "SetFocus", []);
  await $.mcall((await $.v(C, "TrNameCB")), "DropDown", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTransaction", "TrNameCBClick", async function TrNameCBClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "trNameEdit")), "Text", (await $.mv((await $.v(C, "TrNameCB")), "Text")));
  await $.mset((await $.v(C, "TrNameCB")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTransaction", "SaveButtonClick", async function SaveButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "result": 0, "cormode": 0, "flag": 0, "recordnumber": 0, "trdate": '', "trid": null};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DataMod"));
    await $.wset([$t1], "TrDate", (await $.wcall([$t1], "FormatDateTime", ["dd-mmm-yy", (await $.mv((await $.wv([$t1], "TransactionDateEdit", C, false)), "Date"))], C)), { get: async () => L0["trdate"], set: async (v) => { L0["trdate"] = v; }, local: true });
    if ($.truthy($.eq((await $.wv([$t1], "TrMode", C, false)), "N"))) {
      await $.wset([$t1], "flag", 1, { get: async () => L0["flag"], set: async (v) => { L0["flag"] = v; }, local: true });
      await $.wset([$t1], "TrId", (await $.wv([$t1], "Null", C, false)), { get: async () => L0["trid"], set: async (v) => { L0["trid"] = v; }, local: true });
    } else {
      await $.wset([$t1], "flag", 2, { get: async () => L0["flag"], set: async (v) => { L0["flag"] = v; }, local: true });
      await $.wset([$t1], "TrId", (await $.mv((await $.mcall((await $.wv([$t1], "Transactions", C, false)), "fieldbyname", ["id"])), "AsInteger")), { get: async () => L0["trid"], set: async (v) => { L0["trid"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t1], "RepairMainForm", C, false)), "ChRate")), "Checked")), (await $.wv([$t1], "false", C, false))))) {
      await $.wset([$t1], "CorMode", 2, { get: async () => L0["cormode"], set: async (v) => { L0["cormode"] = v; }, local: true });
    } else {
      if ($.truthy((await $.mv((await $.mv((await $.wv([$t1], "RepairMainForm", C, false)), "ChProfit")), "Checked")))) {
        await $.wset([$t1], "CorMode", 0, { get: async () => L0["cormode"], set: async (v) => { L0["cormode"] = v; }, local: true });
      } else {
        await $.wset([$t1], "CorMode", 1, { get: async () => L0["cormode"], set: async (v) => { L0["cormode"] = v; }, local: true });
      }
    }
    await $.wset([$t1], "Result", (await $.mcall((await $.wv([$t1], "p_correct", C, false)), "CallIntegerFunction", ["Main", ["Flag", (await $.wv([$t1], "flag", { get: async () => L0["flag"], set: async (v) => { L0["flag"] = v; }, local: true }, false)), "CorMode", (await $.wv([$t1], "CorMode", { get: async () => L0["cormode"], set: async (v) => { L0["cormode"] = v; }, local: true }, false)), "TransactionID", (await $.wv([$t1], "TrId", { get: async () => L0["trid"], set: async (v) => { L0["trid"] = v; }, local: true }, false)), "TransactionDate", (await $.wv([$t1], "TrDate", { get: async () => L0["trdate"], set: async (v) => { L0["trdate"] = v; }, local: true }, false)), "DebitID", (await $.mv((await $.mcall((await $.wv([$t1], "DebitAccount", C, false)), "fieldbyname", ["AccountId"])), "asInteger")), "CreditID", (await $.mv((await $.mcall((await $.wv([$t1], "CreditAccount", C, false)), "fieldbyname", ["AccountId"])), "asInteger")), "DebitAmount", (await $.mv((await $.wv([$t1], "DebitAmountEdit", C, false)), "value")), "CreditAmount", (await $.mv((await $.wv([$t1], "CreditAmountEdit", C, false)), "value")), "LAmount", (await $.mv((await $.wv([$t1], "LAmountEdit", C, false)), "value")), "DebitRate", (await $.wcall([$t1], "StrToFloat", [(await $.mv((await $.wv([$t1], "DebitRateEdit", C, false)), "text"))], C)), "CreditRate", (await $.wcall([$t1], "StrToFloat", [(await $.mv((await $.wv([$t1], "CreditRateEdit", C, false)), "text"))], C)), "TrName", (await $.mv((await $.wv([$t1], "TrNameEdit", C, false)), "text"))]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  if ($.truthy($.eq(L0["result"], 0))) {
  }
  L0["recordnumber"] = (await $.mv((await $.mv((await $.v(C, "DataMod")), "Transactions")), "RecNo"));
  await $.mcall((await $.mv((await $.v(C, "RepairMainform")), "ButtonRefresh")), "Click", []);
  await $.mset((await $.mv((await $.v(C, "DataMod")), "Transactions")), "RecNo", L0["recordnumber"]);
  await $.mcall((await $.v(C, "frmTransaction")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTransaction", "DebitAmountEditChange", async function DebitAmountEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "debitrate": 0, "creditrate": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  L0["debitrate"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "DebitRateEdit")), "text"))]));
  L0["creditrate"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "CreditRateEdit")), "text"))]));
  {
    const $t2 = L0["sender"];
    await $.mset((await $.wv([$t2], "DebitAmountEdit", C, false)), "Value", (await $.wv([$t2], "Value", C, false)));
    await $.mset((await $.wv([$t2], "LAmountEdit", C, false)), "Value", $.mul((await $.mv((await $.wv([$t2], "DebitAmountEdit", C, false)), "Value")), (await $.wv([$t2], "DebitRate", { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true }, false))));
    if ($.truthy((await $.and_(($.not((await $.mv((await $.wv([$t2], "CreditAmountEdit", C, false)), "Focused")))), async () => ($.ne((await $.wv([$t2], "CreditRate", { get: async () => L0["creditrate"], set: async (v) => { L0["creditrate"] = v; }, local: true }, false)), 0.0)))))) {
      await $.mset((await $.wv([$t2], "CreditAmountEdit", C, false)), "Value", (await $.wcall([$t2], "Sb_RoundCurrency", [$.fdiv((await $.mv((await $.wv([$t2], "LAmountEdit", C, false)), "Value")), (await $.wv([$t2], "CreditRate", { get: async () => L0["creditrate"], set: async (v) => { L0["creditrate"] = v; }, local: true }, false))), (await $.wv([$t2], "CurrencyDecimals", C, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTransaction", "CreditAmountEditChange", async function CreditAmountEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "debitrate": 0, "creditrate": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  L0["debitrate"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "DebitRateEdit")), "text"))]));
  L0["creditrate"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "CreditRateEdit")), "text"))]));
  {
    const $t3 = L0["sender"];
    await $.mset((await $.wv([$t3], "CreditAmountEdit", C, false)), "Value", (await $.wv([$t3], "Value", C, false)));
    await $.mset((await $.wv([$t3], "LAmountEdit", C, false)), "Value", $.mul((await $.mv((await $.wv([$t3], "CreditAmountEdit", C, false)), "Value")), (await $.wv([$t3], "CreditRate", { get: async () => L0["creditrate"], set: async (v) => { L0["creditrate"] = v; }, local: true }, false))));
    if ($.truthy((await $.and_(($.not((await $.mv((await $.wv([$t3], "DebitAmountEdit", C, false)), "Focused")))), async () => ($.ne((await $.wv([$t3], "DebitRate", { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true }, false)), 0.0)))))) {
      await $.mset((await $.wv([$t3], "DebitAmountEdit", C, false)), "Value", (await $.wcall([$t3], "SB_RoundCurrency", [$.fdiv((await $.mv((await $.wv([$t3], "LAmountEdit", C, false)), "Value")), (await $.wv([$t3], "DebitRate", { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true }, false))), (await $.wv([$t3], "CurrencyDecimals", C, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTransaction", "LAmountEditChange", async function LAmountEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "debitrate": 0, "tempdebitrate": 0, "creditrate": 0, "tempcreditrate": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  {
    const $t4 = L0["sender"];
    await $.wset([$t4], "DebitRate", (await $.wcall([$t4], "StrToFloat", [(await $.mv((await $.wv([$t4], "DebitRateEdit", C, false)), "text"))], C)), { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true });
    await $.wset([$t4], "CreditRate", (await $.wcall([$t4], "StrToFloat", [(await $.mv((await $.wv([$t4], "CreditRateEdit", C, false)), "text"))], C)), { get: async () => L0["creditrate"], set: async (v) => { L0["creditrate"] = v; }, local: true });
    await $.wset([$t4], "TempDebitRate", (await $.wv([$t4], "DebitRate", { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true }, false)), { get: async () => L0["tempdebitrate"], set: async (v) => { L0["tempdebitrate"] = v; }, local: true });
    await $.wset([$t4], "TempCreditRate", (await $.wv([$t4], "CreditRate", { get: async () => L0["creditrate"], set: async (v) => { L0["creditrate"] = v; }, local: true }, false)), { get: async () => L0["tempcreditrate"], set: async (v) => { L0["tempcreditrate"] = v; }, local: true });
    if ($.truthy($.not((await $.mv((await $.wv([$t4], "LAmountEdit", C, false)), "Focused"))))) {
      await $.mset((await $.wv([$t4], "LAmountEdit", C, false)), "Value", (await $.wv([$t4], "Value", C, false)));
    }
    if ($.truthy(($.not((await $.mv((await $.wv([$t4], "DebitAmountEdit", C, false)), "Focused")))))) {
      await $.mset((await $.wv([$t4], "DebitAmountEdit", C, false)), "Value", (await $.wcall([$t4], "SB_RoundCurrency", [$.fdiv((await $.mv((await $.wv([$t4], "LAmountEdit", C, false)), "Value")), (await $.wv([$t4], "TempDebitRate", { get: async () => L0["tempdebitrate"], set: async (v) => { L0["tempdebitrate"] = v; }, local: true }, false))), (await $.wv([$t4], "CurrencyDecimals", C, false))], C)));
    }
    if ($.truthy(($.not((await $.mv((await $.wv([$t4], "CreditAmountEdit", C, false)), "Focused")))))) {
      await $.mset((await $.wv([$t4], "CreditAmountEdit", C, false)), "Value", (await $.wcall([$t4], "SB_RoundCurrency", [$.fdiv((await $.mv((await $.wv([$t4], "LAmountEdit", C, false)), "Value")), (await $.wv([$t4], "TempCreditRate", { get: async () => L0["tempcreditrate"], set: async (v) => { L0["tempcreditrate"] = v; }, local: true }, false))), (await $.wv([$t4], "CurrencyDecimals", C, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTransaction", "LAmountEditExit", async function LAmountEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (L0["sender"]);
    if ($.truthy((await $.or_(($.le((await $.wv([$t5], "Value", C, false)), 0.0)), async () => ($.eq((await $.wcall([$t5], "Trim", [(await $.wv([$t5], "Text", C, false))], C)), "")))))) {
      await $.stmt((await $.wcall([$t5], "ShowMessage", ["Məbləğ \"0.00\" dan böyük olmalıdır."], C)));
      await $.stmt($.wcall([$t5], "SetFocus", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTransaction", "CutEditText", async function CutEditText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "x": 0, "sel": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.call(C, "TCurrencyEdit", [L0["sender"]]));
    if ($.truthy($.eq((await $.wv([$t6], "DecimalSeparator", C, false)), (await $.wv([$t6], "ThousandSeparator", C, false))))) {
      return L0.result;
    }
    if ($.truthy($.eq((await $.wcall([$t6], "Pos", [(await $.wv([$t6], "DecimalSeparator", C, false)), (await $.wv([$t6], "Text", C, false))], C)), 0))) {
      return L0.result;
    }
    await $.wset([$t6], "Sel", (await $.wv([$t6], "SelStart", C, false)), { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true });
    await $.wset([$t6], "X", $.sub($.sub((await $.wcall([$t6], "Length", [(await $.wv([$t6], "Text", C, false))], C)), (await $.wcall([$t6], "Pos", [(await $.wv([$t6], "DecimalSeparator", C, false)), (await $.wv([$t6], "Text", C, false))], C))), (await $.wv([$t6], "CurrencyDecimals", C, false))), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
    if ($.truthy(($.gt((await $.wv([$t6], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 0)))) {
      await $.wset([$t6], "Text", (await $.wcall([$t6], "Copy", [(await $.wv([$t6], "Text", C, false)), 0, ($.sub((await $.wcall([$t6], "Length", [(await $.wv([$t6], "Text", C, false))], C)), (await $.wv([$t6], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))))], C)), C);
      await $.wset([$t6], "SelStart", (await $.wv([$t6], "Sel", { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true }, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTransaction", "DebitCurrencyCBClick", async function DebitCurrencyCBClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "DataMod")), "DebitAccount")), "Filter", $.add("CurrencyId=", (await $.call(C, "IntToStr", [(await $.mv((await $.v(C, "DebitCurrencyCB")), "KeyValue"))]))));
  await $.mset((await $.mv((await $.v(C, "DataMod")), "DebitAccount")), "Filtered", true);
  await $.mset((await $.v(C, "DebitCurrencyIDEdit")), "Text", (await $.mv((await $.v(C, "DebitCurrencyCB")), "KeyValue")));
  await $.stmt((await $.call(C, "SetNull", ["D"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTransaction", "CreditCurrencyCBClick", async function CreditCurrencyCBClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "DataMod")), "CreditAccount")), "Filter", $.add("CurrencyId=", (await $.call(C, "IntToStr", [(await $.mv((await $.v(C, "CreditCurrencyCB")), "KeyValue"))]))));
  await $.mset((await $.mv((await $.v(C, "DataMod")), "CreditAccount")), "Filtered", true);
  await $.mset((await $.v(C, "CreditCurrencyIDEdit")), "Text", (await $.mv((await $.v(C, "CreditCurrencyCB")), "KeyValue")));
  await $.stmt((await $.call(C, "SetNull", ["C"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTransaction", "SetNull", async function SetNull(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"mode": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["mode"]);
  if ($.truthy($.eq(L0["mode"], "N"))) {
    await $.mset((await $.v(C, "DebitCurrencyIDEdit")), "Text", "0");
    await $.mset((await $.v(C, "CreditCurrencyIDEdit")), "Text", "0");
    await $.mset((await $.v(C, "DebitCurrencyCB")), "KeyValue", 0);
    await $.mset((await $.v(C, "CreditCurrencyCB")), "KeyValue", 0);
    await $.mset((await $.v(C, "InBalanceCharEdit")), "Text", "");
    await $.mset((await $.v(C, "OutBalanceCharEdit")), "Text", "");
    await $.mset((await $.v(C, "TrNameEdit")), "Text", "");
    await $.mset((await $.mv((await $.v(C, "DataMod")), "DebitAccount")), "Filter", "CurrencyId=0");
    await $.mset((await $.mv((await $.v(C, "DataMod")), "DebitAccount")), "Filtered", true);
    await $.mset((await $.mv((await $.v(C, "DataMod")), "CreditAccount")), "Filter", "CurrencyId=0");
    await $.mset((await $.mv((await $.v(C, "DataMod")), "CreditAccount")), "Filtered", true);
  }
  await $.mset((await $.v(C, "DebitRateEdit")), "Text", (await $.mcall((await $.mv((await $.v(C, "DataMod")), "P_Correct")), "CallFloatFunction", ["GetRate", ["CurrencyID", (await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "DebitCurrencyIDEdit")), "Text"))])), "ArchiveDate", (await $.call(C, "FormatDateTime", ["d-mmmm-yy", (await $.mv((await $.v(C, "TransactionDateEdit")), "Date"))]))]])));
  await $.mset((await $.v(C, "CreditRateEdit")), "Text", (await $.mcall((await $.mv((await $.v(C, "DataMod")), "P_Correct")), "CallFloatFunction", ["GetRate", ["CurrencyID", (await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "CreditCurrencyIDEdit")), "Text"))])), "ArchiveDate", (await $.call(C, "FormatDateTime", ["d-mmmm-yy", (await $.mv((await $.v(C, "TransactionDateEdit")), "Date"))]))]])));
  await $.mset((await $.v(C, "DebitAmountEdit")), "Text", "");
  await $.mset((await $.v(C, "CreditAmountEdit")), "Text", "");
  await $.mset((await $.v(C, "LAmountEdit")), "Text", "");
  if ($.truthy((await $.or_(($.eq(L0["mode"], "D")), async () => ($.eq(L0["mode"], "N")))))) {
    await $.mset((await $.v(C, "DebitAccNoSearchEdit")), "Text", "");
    await $.mset((await $.v(C, "DebitAccNoCB")), "DefaultStringUse", true);
    await $.mset((await $.v(C, "DebitAccNameCB")), "DefaultStringUse", true);
  }
  if ($.truthy((await $.or_(($.eq(L0["mode"], "C")), async () => ($.eq(L0["mode"], "N")))))) {
    await $.mset((await $.v(C, "CreditAccNoSearchEdit")), "Text", "");
    await $.mset((await $.v(C, "CreditAccNoCB")), "DefaultStringUse", true);
    await $.mset((await $.v(C, "CreditAccNameCB")), "DefaultStringUse", true);
  }
  return L0.result;
}, {"params": ["Mode"], "kind": "procedure", "ptypes": ["Char"]});
  return U;
}
