// Generated from RepairNewEdit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("RepairNewEdit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "Buttons", "ComCtrls", "SearchEdit", "DBCtrls", "CurrencyEdit", "db", "Mask", "HintBox", "Variants", "RepairNewDataModule", "RepairNewImpl", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.enumType("tamountoperation", 3);
  U.const("aoDebet", 0);
  U.const("aoCredit", 1);
  U.const("aoLamount", 2);
  U.enumType("tinbalancechar", 3);
  U.const("ibDebet", 0);
  U.const("ibCredit", 1);
  U.const("ibUnknown", 2);
  U.enumType("teditaction", 4);
  U.const("acInsert", 0);
  U.const("acUpdate", 1);
  U.const("acDelete", 2);
  U.const("acUnknown", 3);
  $.defRecord("ttransaction", {"action": () => null, "mode": () => 0, "id": () => null, "date": () => 0, "debitid": () => 0, "creditid": () => 0, "debitcurid": () => 0, "creditcurid": () => 0, "debitrate": () => 0, "creditrate": () => 0, "debitammount": () => 0, "creditammount": () => 0, "lammount": () => 0, "name": () => '', "inbalancechar": () => null, "outbalancechar": () => null, "reportid": () => null});
  U.defClass("EHint", "Exception", {}, {});
  U.defClass("TRepairEdit", "TForm", {"pnactionbuttonspanel": {"name": "pnActionButtonsPanel", "type": "TPanel"}, "pnmain": {"name": "pnMain", "type": "TPanel"}, "btclear": {"name": "btClear", "type": "TBitBtn"}, "btcancel": {"name": "btCancel", "type": "TBitBtn"}, "pndebet": {"name": "pnDebet", "type": "TPanel"}, "pncredit": {"name": "pnCredit", "type": "TPanel"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dtprepairedit": {"name": "dtpRepairedit", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "dblccurdebet": {"name": "dblcCurDebet", "type": "TDBLookupComboBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "dblccurkredit": {"name": "dblcCurKredit", "type": "TDBLookupComboBox"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "dlbcdebitaccno": {"name": "dlbcDebitAccNo", "type": "TDBLookupComboBox"}, "dlbckreditaccno": {"name": "dlbcKreditAccNo", "type": "TDBLookupComboBox"}, "dlbcdebitcustomer": {"name": "dlbcDebitCustomer", "type": "TDBLookupComboBox"}, "dlbckreditcustomer": {"name": "dlbcKreditCustomer", "type": "TDBLookupComboBox"}, "edkreditaccno": {"name": "edKreditAccNo", "type": "TSearchEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label10": {"name": "Label10", "type": "TLabel"}, "cedebetamount": {"name": "ceDebetAmount", "type": "TCurrencyEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label11": {"name": "Label11", "type": "TLabel"}, "cekreditamount": {"name": "ceKreditAmount", "type": "TCurrencyEdit"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "label12": {"name": "Label12", "type": "TLabel"}, "celamount": {"name": "ceLamount", "type": "TCurrencyEdit"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dlbcbalance": {"name": "dlbcBalance", "type": "TDBLookupComboBox"}, "dlbcconvertation": {"name": "dlbcConvertation", "type": "TDBLookupComboBox"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "eddescription": {"name": "edDescription", "type": "TComboBox"}, "securreniddebet": {"name": "seCurrenIDDebet", "type": "TEdit"}, "securrenidkredit": {"name": "seCurrenIDKredit", "type": "TEdit"}, "eddebitaccno": {"name": "edDebitAccNo", "type": "TSearchEdit"}, "seoutbalance": {"name": "seOutBalance", "type": "TDBEdit"}, "seinbalance": {"name": "seInBalance", "type": "TDBEdit"}, "errorbox": {"name": "ErrorBox", "type": "THintBox"}, "chprofit": {"name": "chProfit", "type": "TCheckBox"}, "chrate": {"name": "chRate", "type": "TCheckBox"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "repanim": {"name": "RepAnim", "type": "TAnimate"}, "bevel2": {"name": "Bevel2", "type": "TBevel"}, "btsave": {"name": "btSave", "type": "TBitBtn"}, "cedebetcurrency": {"name": "ceDebetCurrency", "type": "TEdit"}, "cekreditcurrency": {"name": "ceKreditCurrency", "type": "TEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "reportiddbedit": {"name": "ReportIDDBEdit", "type": "TDBEdit"}, "reportidlookup": {"name": "ReportIDLookUp", "type": "TDBLookupComboBox"}, "label15": {"name": "Label15", "type": "TLabel"}, "fcashstate": {"name": "FCashState", "type": "TAmountOperation"}, "ftransactiondate": {"name": "FTransactionDate", "type": "TDateTime"}, "feditaction": {"name": "FEditAction", "type": "TEditAction"}, "frefreshonshow": {"name": "FRefreshOnShow", "type": "Boolean"}, "finbalancecharstate": {"name": "FInBalanceCharState", "type": "TInBalanceChar"}, "fclosequery": {"name": "FCloseQuery", "type": "Boolean"}}, {"editaction": {"name": "EditAction", "read": "FEditAction", "write": "SetEditAction"}, "closeaction": {"name": "CloseAction", "read": "FCloseQuery", "write": "SetCloseAction"}});
  U.init(async () => {
    U.var_("RepairEdit", null, "TRepairEdit");
  });
  U.method("TRepairEdit", "InitializeEditSheets", async function InitializeEditSheets(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "tempinteger": 0};
  {
    const $t1 = (await $.v(C, "RapNewDataModule"));
    {
      const $t2 = (await $.wv([$t1], "DebetRateData", C, false));
      if ($.truthy($.ne((await $.wv([$t1, $t2], "FTransactionDate", C, false)), (await $.mv((await $.wv([$t1, $t2], "dtpRepairedit", C, false)), "DateTime"))))) {
        await $.wset([$t1, $t2], "tempInteger", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "CurDebetData", C, false)), "FieldByName", ["VALUTE"])), "AsInteger")), { get: async () => L0["tempinteger"], set: async (v) => { L0["tempinteger"] = v; }, local: true });
        await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["dat", (await $.mv((await $.wv([$t1, $t2], "dtpRepairedit", C, false)), "DateTime"))], C)));
        if ($.truthy($.not(((await $.wv([$t1, $t2], "Active", C, false)))))) {
          await $.stmt($.wcall([$t1, $t2], "Open", [], C));
        } else {
          await $.stmt($.wcall([$t1, $t2], "Refresh", [], C));
        }
        await $.stmt((await $.wcall([$t1, $t2], "Locate", ["ID", (await $.wv([$t1, $t2], "tempInteger", { get: async () => L0["tempinteger"], set: async (v) => { L0["tempinteger"] = v; }, local: true }, false)), []], C)));
      }
    }
    {
      const $t3 = (await $.wv([$t1], "CreditRateData", C, false));
      if ($.truthy($.ne((await $.wv([$t1, $t3], "FTransactionDate", C, false)), (await $.mv((await $.wv([$t1, $t3], "dtpRepairedit", C, false)), "DateTime"))))) {
        await $.wset([$t1, $t3], "tempInteger", (await $.mv((await $.mcall((await $.wv([$t1, $t3], "CurKreditData", C, false)), "FieldByName", ["VALUTE"])), "AsInteger")), { get: async () => L0["tempinteger"], set: async (v) => { L0["tempinteger"] = v; }, local: true });
        await $.stmt((await $.wcall([$t1, $t3], "SetVariable", ["dat", (await $.mv((await $.wv([$t1, $t3], "dtpRepairedit", C, false)), "DateTime"))], C)));
        if ($.truthy($.not(((await $.wv([$t1, $t3], "Active", C, false)))))) {
          await $.stmt($.wcall([$t1, $t3], "Open", [], C));
        } else {
          await $.stmt($.wcall([$t1, $t3], "Refresh", [], C));
        }
        await $.stmt((await $.wcall([$t1, $t3], "Locate", ["ID", (await $.wv([$t1, $t3], "tempInteger", { get: async () => L0["tempinteger"], set: async (v) => { L0["tempinteger"] = v; }, local: true }, false)), []], C)));
      }
    }
  }
  await $.set(C, "FTransactionDate", (await $.mv((await $.v(C, "dtpRepairedit")), "DateTime")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRepairEdit", "AddInitialize", async function AddInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t4 = (await $.v(C, "RapNewDataModule"));
    const $t5 = (await $.wv([$t4], "TransactionData", C, false));
    await $.mset((await $.wcall([$t4, $t5], "FieldByName", ["DebitCurrencyID"], C)), "AsInteger", 0);
    await $.mset((await $.wcall([$t4, $t5], "FieldByName", ["CreditCurrencyID"], C)), "AsInteger", 0);
    await $.mset((await $.wcall([$t4, $t5], "FieldByName", ["DebitRate"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t4, $t5], "DebetRateData", C, false)), "FieldByName", ["Rate"])), "AsFloat")));
    await $.mset((await $.wcall([$t4, $t5], "FieldByName", ["CreditRate"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t4, $t5], "CreditRateData", C, false)), "FieldByName", ["Rate"])), "AsFloat")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRepairEdit", "InitializeeditForm", async function InitializeeditForm(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq((await $.v(C, "EditAction")), (await $.v(C, "acInsert"))))) {
    await $.stmt($.call(C, "AddInitialize", []));
  }
  {
    const $t6 = (await $.mv((await $.v(C, "RapNewDataModule")), "TransactionData"));
    if ($.truthy($.not(((await $.mv((await $.wcall([$t6], "FieldByName", ["TransactionDate"], C)), "IsNull")))))) {
      await $.mset((await $.wv([$t6], "dtpRepairedit", C, false)), "DateTime", (await $.mv((await $.wcall([$t6], "FieldByName", ["TransactionDate"], C)), "AsDateTime")));
    } else {
      await $.mset((await $.wv([$t6], "dtpRepairedit", C, false)), "DateTime", (await $.mv((await $.mv((await $.wv([$t6], "RepairNewMain", C, false)), "dtpOpDat")), "Date")));
    }
    await $.mset((await $.wv([$t6], "seCurrenIDDebet", C, false)), "Text", (await $.mv((await $.wcall([$t6], "FieldByName", ["DebitCurrencyID"], C)), "AsString")));
    await $.mset((await $.wv([$t6], "seCurrenIDKredit", C, false)), "Text", (await $.mv((await $.wcall([$t6], "FieldByName", ["CreditCurrencyID"], C)), "AsString")));
    await $.mset((await $.wv([$t6], "edDebitAccNo", C, false)), "Text", (await $.mv((await $.wcall([$t6], "FieldByName", ["DEBITACCNO"], C)), "AsString")));
    await $.mset((await $.wv([$t6], "edKreditAccNo", C, false)), "Text", (await $.mv((await $.wcall([$t6], "FieldByName", ["CREDITACCNO"], C)), "AsString")));
    await $.mset((await $.wv([$t6], "ceDebetCurrency", C, false)), "Text", (await $.wcall([$t6], "FloatToStr", [(await $.mv((await $.wcall([$t6], "FieldByName", ["DebitRate"], C)), "AsFloat"))], C)));
    await $.mset((await $.wv([$t6], "ceKreditCurrency", C, false)), "Text", (await $.wcall([$t6], "FloatToStr", [(await $.mv((await $.wcall([$t6], "FieldByName", ["CreditRate"], C)), "AsFloat"))], C)));
    await $.mset((await $.wv([$t6], "ceDebetAmount", C, false)), "Value", (await $.mv((await $.wcall([$t6], "FieldByName", ["DEBITAMOUNT"], C)), "AsFloat")));
    await $.mset((await $.wv([$t6], "ceKreditAmount", C, false)), "Value", (await $.mv((await $.wcall([$t6], "FieldByName", ["CREDITAMOUNT"], C)), "AsFloat")));
    await $.mset((await $.wv([$t6], "ceLamount", C, false)), "Value", (await $.mv((await $.wcall([$t6], "FieldByName", ["LAMOUNT"], C)), "AsFloat")));
    await $.mset((await $.wv([$t6], "edDescription", C, false)), "Text", (await $.mv((await $.wcall([$t6], "FieldByName", ["NAME"], C)), "AsString")));
    await $.stmt($.wcall([$t6], "CheckInBalance", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRepairEdit", "RefreshAccounts", async function RefreshAccounts(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  { const $t7 = L0["value"];
    if ($.eq($t7, (await $.v(C, "aoDebet")))) {
      {
        const $t8 = (await $.mv((await $.v(C, "RapNewDataModule")), "DebetAccData"));
        {
          const $t9 = (await $.wv([$t8], "dlbcDebitAccNo", C, false));
          if ($.truthy(($.ne((await $.wv([$t8, $t9], "KeyValue", C, false)), (await $.mv((await $.wcall([$t8, $t9], "FieldByName", [(await $.wv([$t8, $t9], "KeyField", C, false))], C)), "AsInteger")))))) {
            await $.wset([$t8, $t9], "KeyValue", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", [(await $.wv([$t8, $t9], "KeyField", C, false))], C)), "AsInteger")), C);
          }
        }
        {
          const $t10 = (await $.wv([$t8], "dlbcDebitCustomer", C, false));
          if ($.truthy(($.ne((await $.wv([$t8, $t10], "KeyValue", C, false)), (await $.mv((await $.wcall([$t8, $t10], "FieldByName", [(await $.wv([$t8, $t10], "KeyField", C, false))], C)), "AsInteger")))))) {
            await $.wset([$t8, $t10], "KeyValue", (await $.mv((await $.wcall([$t8, $t10], "FieldByName", [(await $.wv([$t8, $t10], "KeyField", C, false))], C)), "AsInteger")), C);
          }
        }
      }
    }
    else if ($.eq($t7, (await $.v(C, "aoCredit")))) {
      {
        const $t11 = (await $.mv((await $.v(C, "RapNewDataModule")), "CreditAccData"));
        {
          const $t12 = (await $.wv([$t11], "dlbcKreditAccNo", C, false));
          if ($.truthy(($.ne((await $.wv([$t11, $t12], "KeyValue", C, false)), (await $.mv((await $.wcall([$t11, $t12], "FieldByName", [(await $.wv([$t11, $t12], "KeyField", C, false))], C)), "AsInteger")))))) {
            await $.wset([$t11, $t12], "KeyValue", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", [(await $.wv([$t11, $t12], "KeyField", C, false))], C)), "AsInteger")), C);
          }
        }
        {
          const $t13 = (await $.wv([$t11], "dlbcKreditCustomer", C, false));
          if ($.truthy(($.ne((await $.wv([$t11, $t13], "KeyValue", C, false)), (await $.mv((await $.wcall([$t11, $t13], "FieldByName", [(await $.wv([$t11, $t13], "KeyField", C, false))], C)), "AsInteger")))))) {
            await $.wset([$t11, $t13], "KeyValue", (await $.mv((await $.wcall([$t11, $t13], "FieldByName", [(await $.wv([$t11, $t13], "KeyField", C, false))], C)), "AsInteger")), C);
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TAmountOperation"]});
  U.method("TRepairEdit", "SetEditAction", async function SetEditAction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy($.ne((await $.v(C, "FEditAction")), L0["value"]))) {
    {
      const $t14 = (await $.mv((await $.v(C, "RapNewDataModule")), "TransactionData"));
      await $.stmt($.wcall([$t14], "RefreshRecord", [], C));
    }
    await $.set(C, "FEditAction", L0["value"]);
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TEditAction"]});
  U.method("TRepairEdit", "SetCloseAction", async function SetCloseAction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["value"]);
  { const $t15 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t16 = true;
    for (;;) {
      if (!$t16) { L0["i"] = $.succ(L0["i"], 1); }
      $t16 = false;
      if (!($.ord(L0["i"]) <= $.ord($t15))) break;
      if ($.truthy($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TBitBtn"))) {
        await $.mset((await $.call(C, "TBitBtn", [(await $.idx((await $.v(C, "Components")), [L0["i"]]))])), "Enabled", L0["value"]);
      }
      await $.tick();
    }
  }
  await $.set(C, "FCloseQuery", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TRepairEdit", "CutEditText", async function CutEditText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "x": 0, "sel": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.call(C, "TCurrencyEdit", [L0["sender"]]));
    if ($.truthy($.eq((await $.wv([$t17], "DecimalSeparator", C, false)), (await $.wv([$t17], "ThousandSeparator", C, false))))) {
      return L0.result;
    }
    if ($.truthy($.eq((await $.wcall([$t17], "Pos", [(await $.wv([$t17], "DecimalSeparator", C, false)), (await $.wv([$t17], "Text", C, false))], C)), 0))) {
      return L0.result;
    }
    await $.wset([$t17], "Sel", (await $.wv([$t17], "SelStart", C, false)), { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true });
    await $.wset([$t17], "X", $.sub($.sub((await $.wcall([$t17], "Length", [(await $.wv([$t17], "Text", C, false))], C)), (await $.wcall([$t17], "Pos", [(await $.wv([$t17], "DecimalSeparator", C, false)), (await $.wv([$t17], "Text", C, false))], C))), (await $.wv([$t17], "CurrencyDecimals", C, false))), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
    if ($.truthy(($.gt((await $.wv([$t17], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 0)))) {
      await $.wset([$t17], "Text", (await $.wcall([$t17], "Copy", [(await $.wv([$t17], "Text", C, false)), 0, ($.sub((await $.wcall([$t17], "Length", [(await $.wv([$t17], "Text", C, false))], C)), (await $.wv([$t17], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))))], C)), C);
      await $.wset([$t17], "SelStart", (await $.wv([$t17], "Sel", { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true }, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairEdit", "ClearAmounts", async function ClearAmounts(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "ceDebetAmount")), "Value", 0);
  await $.mset((await $.v(C, "ceKreditAmount")), "Value", 0);
  await $.mset((await $.v(C, "ceLamount")), "Value", 0);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRepairEdit", "ChangeAmounts", async function ChangeAmounts(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), "ratedebet": $.copyArg(p1), "ratecredit": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["value", "ratedebet", "ratecredit"]);
  L0["precision"] = 100000;
  L0["roundnew"] = $.fn(async function RoundNew(p0, p1) {
  const L1 = {"x": $.copyArg(p0), "precision": $.copyArg(p1), result: 0, "scaledfractpart": 0, "temp": 0};
  await $.fixArgs(L1, ["x", "precision"]);
  L1["scaledfractpart"] = $.mul((await $.call(C, "Frac", [L1["x"]])), L1["precision"]);
  L1["temp"] = (await $.call(C, "Frac", [L1["scaledfractpart"]]));
  L1["scaledfractpart"] = (await $.call(C, "Int", [L1["scaledfractpart"]]));
  if ($.truthy($.ge((await $.call(C, "Round", [$.mul(L1["temp"], 100)])), 50))) {
    L1["scaledfractpart"] = $.add(L1["scaledfractpart"], 1);
  }
  if ($.truthy($.le((await $.call(C, "Round", [$.mul(L1["temp"], 100)])), (-(50))))) {
    L1["scaledfractpart"] = $.sub(L1["scaledfractpart"], 1);
  }
  L1.result = $.add((await $.call(C, "Int", [L1["x"]])), $.fdiv(L1["scaledfractpart"], L1["precision"]));
  return L1.result;
});
  { const $t18 = L0["value"];
    if ($.eq($t18, (await $.v(C, "aoDebet")))) {
      await $.mset((await $.v(C, "ceLamount")), "Value", (await $.callv(L0["roundnew"], [$.mul((await $.mv((await $.v(C, "ceDebetAmount")), "Value")), L0["ratedebet"]), L0["precision"]])));
      await $.mset((await $.v(C, "ceKreditAmount")), "Value", (await $.callv(L0["roundnew"], [$.fdiv(($.mul((await $.mv((await $.v(C, "ceDebetAmount")), "Value")), L0["ratedebet"])), L0["ratecredit"]), L0["precision"]])));
    }
    else if ($.eq($t18, (await $.v(C, "aoCredit")))) {
      await $.mset((await $.v(C, "ceLamount")), "Value", (await $.callv(L0["roundnew"], [$.mul((await $.mv((await $.v(C, "ceKreditAmount")), "Value")), L0["ratecredit"]), L0["precision"]])));
      await $.mset((await $.v(C, "ceDebetAmount")), "Value", (await $.callv(L0["roundnew"], [$.fdiv(($.mul((await $.mv((await $.v(C, "ceKreditAmount")), "Value")), L0["ratecredit"])), L0["ratedebet"]), L0["precision"]])));
    }
    else if ($.eq($t18, (await $.v(C, "aoLamount")))) {
      await $.mset((await $.v(C, "ceKreditAmount")), "Value", (await $.callv(L0["roundnew"], [$.fdiv((await $.mv((await $.v(C, "ceLamount")), "Value")), L0["ratecredit"]), L0["precision"]])));
      await $.mset((await $.v(C, "ceDebetAmount")), "Value", (await $.callv(L0["roundnew"], [$.fdiv((await $.mv((await $.v(C, "ceLamount")), "Value")), L0["ratedebet"]), L0["precision"]])));
    }
  }
  return L0.result;
}, {"params": ["Value", "RateDebet", "RateCredit"], "kind": "procedure", "ptypes": ["TAmountOperation", "real", "real"]});
  U.method("TRepairEdit", "ValuteChange", async function ValuteChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["sender"]);
  L0["result"] = false;
  {
    const $t19 = (await $.v(C, "RapNewDataModule"));
    const $t20 = (await $.wv([$t19], "sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    if ($.truthy($.eq((await $.wv([$t19, $t20], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t19, $t20], "seCurrenIDDebet", C, false))))) {
      if ($.truthy($.eq((await $.wv([$t19, $t20], "Text", C, false)), (await $.wv([$t19, $t20], "EmptyStr", C, false))))) {
        await $.stmt((await $.wcall([$t19, $t20], "ClearValInfo", [(await $.wv([$t19, $t20], "aoDebet", C, false))], C)));
        return L0.result;
      }
      if ($.truthy(($.ne((await $.wv([$t19, $t20], "text", C, false)), (await $.mv((await $.mcall((await $.wv([$t19, $t20], "CurDebetData", C, false)), "FieldByName", ["valute"])), "AsString")))))) {
        await $.wset([$t19, $t20], "Result", (await $.mcall((await $.wv([$t19, $t20], "CurDebetData", C, false)), "Locate", ["valute", (await $.wv([$t19, $t20], "text", C, false)), [(await $.wv([$t19, $t20], "loCaseInsensitive", C, false))]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
        await $.mset((await $.wv([$t19, $t20], "ceDebetCurrency", C, false)), "Text", (await $.wcall([$t19, $t20], "FloatToStr", [(await $.mv((await $.mcall((await $.wv([$t19, $t20], "DebetRateData", C, false)), "FieldByName", ["RATE"])), "AsFloat"))], C)));
        await $.stmt((await $.wcall([$t19, $t20], "ceDebetCurrencyChange", [Self], C)));
        await $.stmt((await $.wcall([$t19, $t20], "SetFilter", [(await $.wv([$t19, $t20], "aoDebet", C, false))], C)));
      } else {
        await $.wset([$t19, $t20], "Result", (await $.wv([$t19, $t20], "True", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      }
    } else {
      if ($.truthy($.eq((await $.wv([$t19, $t20], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t19, $t20], "seCurrenIDKredit", C, false))))) {
        if ($.truthy($.eq((await $.wv([$t19, $t20], "Text", C, false)), (await $.wv([$t19, $t20], "EmptyStr", C, false))))) {
          await $.stmt((await $.wcall([$t19, $t20], "ClearValInfo", [(await $.wv([$t19, $t20], "aoCredit", C, false))], C)));
          return L0.result;
        }
        if ($.truthy(($.ne((await $.wv([$t19, $t20], "text", C, false)), (await $.mv((await $.mcall((await $.wv([$t19, $t20], "CurKreditData", C, false)), "FieldByName", ["valute"])), "AsString")))))) {
          await $.wset([$t19, $t20], "Result", (await $.mcall((await $.wv([$t19, $t20], "CurKreditData", C, false)), "Locate", ["valute", (await $.wv([$t19, $t20], "text", C, false)), [(await $.wv([$t19, $t20], "loCaseInsensitive", C, false))]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
          await $.mset((await $.wv([$t19, $t20], "ceKreditCurrency", C, false)), "Text", (await $.wcall([$t19, $t20], "FloatToStr", [(await $.mv((await $.mcall((await $.wv([$t19, $t20], "CreditRateData", C, false)), "FieldByName", ["RATE"])), "AsFloat"))], C)));
          await $.stmt((await $.wcall([$t19, $t20], "ceKreditCurrencyChange", [Self], C)));
          await $.stmt((await $.wcall([$t19, $t20], "SetFilter", [(await $.wv([$t19, $t20], "aoCredit", C, false))], C)));
        } else {
          await $.wset([$t19, $t20], "Result", (await $.wv([$t19, $t20], "True", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
        }
      }
    }
  }
  if ($.truthy($.not((L0["result"])))) {
    await $.mset(L0["sender"], "Color", (await $.v(C, "clRed")));
    await $.stmt($.call(C, "Beep", []));
  } else {
    await $.mset(L0["sender"], "Color", (await $.v(C, "clWindow")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "function", "ptypes": ["TEdit"]});
  U.method("TRepairEdit", "ChangeRates", async function ChangeRates(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  {
    const $t21 = (await $.v(C, "RapNewDataModule"));
    { const $t22 = (await $.wv([$t21], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false));
      if ($.eq($t22, (await $.wv([$t21], "aoDebet", C, false)))) {
        await $.mset((await $.wv([$t21], "ceDebetCurrency", C, false)), "Text", (await $.wcall([$t21], "FloatToStr", [(await $.mv((await $.mcall((await $.wv([$t21], "DebetRateData", C, false)), "FieldByName", ["RATE"])), "AsFloat"))], C)));
        await $.stmt((await $.wcall([$t21], "ceDebetCurrencyChange", [Self], C)));
      }
      else if ($.eq($t22, (await $.wv([$t21], "aoCredit", C, false)))) {
        await $.mset((await $.wv([$t21], "ceKreditCurrency", C, false)), "Text", (await $.wcall([$t21], "FloatToStr", [(await $.mv((await $.mcall((await $.wv([$t21], "CreditRateData", C, false)), "FieldByName", ["RATE"])), "AsFloat"))], C)));
        await $.stmt((await $.wcall([$t21], "ceKreditCurrencyChange", [Self], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TAmountOperation"]});
  U.method("TRepairEdit", "dblcCurDebetCloseUp", async function dblcCurDebetCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t23 = (await $.mv((await $.mv((L0["sender"]), "ListSource")), "DataSet"));
    {
      const $t24 = (await $.wv([$t23], "seCurrenIDDebet", C, false));
      if ($.truthy($.ne((await $.wv([$t23, $t24], "Text", C, false)), (await $.mv((await $.wcall([$t23, $t24], "FieldByName", ["valute"], C)), "AsString"))))) {
        await $.wset([$t23, $t24], "Text", (await $.mv((await $.wcall([$t23, $t24], "FieldByName", ["valute"], C)), "AsString")), C);
      }
    }
    await $.stmt((await $.wcall([$t23], "ChangeRates", [(await $.wv([$t23], "aoDebet", C, false))], C)));
    await $.stmt((await $.wcall([$t23], "SetFilter", [(await $.wv([$t23], "aoDebet", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairEdit", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t25 = (await $.v(C, "RapNewDataModule"));
    if ($.truthy($.not(((await $.mv((await $.wv([$t25], "DebetAccData", C, false)), "Active")))))) {
      await $.mcall((await $.wv([$t25], "DebetAccData", C, false)), "Open", []);
    }
    if ($.truthy($.not(((await $.mv((await $.wv([$t25], "CreditAccData", C, false)), "Active")))))) {
      await $.mcall((await $.wv([$t25], "CreditAccData", C, false)), "Open", []);
    }
  }
  if ($.truthy((await $.v(C, "FRefreshOnShow")))) {
    await $.stmt((await $.call(C, "InitializeEditAction", [(await $.v(C, "EditAction"))])));
  } else {
    await $.set(C, "FRefreshOnShow", true);
  }
  if ($.truthy((await $.mv((await $.v(C, "seCurrenIDDebet")), "CanFocus")))) {
    await $.mcall((await $.v(C, "seCurrenIDDebet")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairEdit", "InitializeEditAction", async function InitializeEditAction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt($.call(C, "InitializeeditForm", []));
  await $.stmt($.call(C, "InitializeEditSheets", []));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TEditAction"]});
  U.method("TRepairEdit", "dblcCurKreditCloseUp", async function dblcCurKreditCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t26 = (await $.mv((await $.mv((L0["sender"]), "ListSource")), "DataSet"));
    {
      const $t27 = (await $.wv([$t26], "seCurrenIDKredit", C, false));
      if ($.truthy($.ne((await $.wv([$t26, $t27], "Text", C, false)), (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["valute"], C)), "AsString"))))) {
        await $.wset([$t26, $t27], "Text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["valute"], C)), "AsString")), C);
      }
    }
  }
  await $.stmt((await $.call(C, "ChangeRates", [(await $.v(C, "aoCredit"))])));
  await $.stmt((await $.call(C, "SetFilter", [(await $.v(C, "aoCredit"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairEdit", "dlbcDebitAccNoCloseUp", async function dlbcDebitAccNoCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t28 = (await $.v(C, "RapNewDataModule"));
    await $.mset((await $.wv([$t28], "edDebitAccNo", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t28], "DebetAccData", C, false)), "FieldByName", ["ACC_NO"])), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairEdit", "dlbcKreditAccNoCloseUp", async function dlbcKreditAccNoCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edKreditAccNo")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "edKreditAccNo")), "DataSource")), "DataSet")), "FieldByName", ["ACC_NO"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairEdit", "ceDebetAmountChange", async function ceDebetAmountChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), "0"))) {
    return L0.result;
  }
  {
    const $t29 = (await $.v(C, "RapNewDataModule"));
    await $.stmt((await $.wcall([$t29], "ChangeAmounts", [(await $.wv([$t29], "aoDebet", C, false)), (await $.mv((await $.mcall((await $.wv([$t29], "DebetRateData", C, false)), "FieldByName", ["RATE"])), "AsFloat")), (await $.mv((await $.mcall((await $.wv([$t29], "CreditRateData", C, false)), "FieldByName", ["RATE"])), "AsFloat"))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairEdit", "ceKreditAmountChange", async function ceKreditAmountChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), "0"))) {
    return L0.result;
  }
  {
    const $t30 = (await $.v(C, "RapNewDataModule"));
    await $.stmt((await $.wcall([$t30], "ChangeAmounts", [(await $.wv([$t30], "aoCredit", C, false)), (await $.mv((await $.mcall((await $.wv([$t30], "DebetRateData", C, false)), "FieldByName", ["RATE"])), "AsFloat")), (await $.mv((await $.mcall((await $.wv([$t30], "CreditRateData", C, false)), "FieldByName", ["RATE"])), "AsFloat"))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairEdit", "ceLamountChange", async function ceLamountChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), "0"))) {
    return L0.result;
  }
  {
    const $t31 = (await $.v(C, "RapNewDataModule"));
    await $.stmt((await $.wcall([$t31], "ChangeAmounts", [(await $.wv([$t31], "aoLamount", C, false)), (await $.mv((await $.mcall((await $.wv([$t31], "DebetRateData", C, false)), "FieldByName", ["RATE"])), "AsFloat")), (await $.mv((await $.mcall((await $.wv([$t31], "CreditRateData", C, false)), "FieldByName", ["RATE"])), "AsFloat"))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairEdit", "ceKreditCurrencyChange", async function ceKreditCurrencyChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "ClearAmounts", []));
  {
    const $t32 = (await $.mv((await $.v(C, "RapNewDataModule")), "TransactionData"));
    await $.mset((await $.wcall([$t32], "FieldByName", ["CreditRate"], C)), "AsFloat", (await $.wcall([$t32], "StrToFloat", [(await $.mv((await $.wv([$t32], "ceKreditCurrency", C, false)), "Text"))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairEdit", "ceDebetCurrencyChange", async function ceDebetCurrencyChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "ClearAmounts", []));
  {
    const $t33 = (await $.mv((await $.v(C, "RapNewDataModule")), "TransactionData"));
    await $.mset((await $.wcall([$t33], "FieldByName", ["DebitRate"], C)), "AsFloat", (await $.wcall([$t33], "StrToFloat", [(await $.mv((await $.wv([$t33], "ceDebetCurrency", C, false)), "Text"))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairEdit", "LoadComboData", async function LoadComboData(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t34 = (await $.mv((await $.v(C, "RapNewDataModule")), "TrDescriptionData"));
    const $t35 = (await $.wv([$t34], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    if ($.truthy($.not(((await $.wv([$t34, $t35], "Active", C, false)))))) {
      await $.stmt($.wcall([$t34, $t35], "Open", [], C));
    } else {
      await $.mcall((await $.mv((await $.wv([$t34, $t35], "RapNewDataModule", C, false)), "TrDescriptionData")), "Refresh", []);
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t34, $t35], "Items", C, false)), "Count")), (await $.wv([$t34, $t35], "RecordCount", C, false))))) {
      await $.mcall((await $.wv([$t34, $t35], "Items", C, false)), "Clear", []);
      await $.stmt($.wcall([$t34, $t35], "First", [], C));
      while ($.truthy($.not(((await $.wv([$t34, $t35], "EOF", C, false)))))) {
        await $.stmt((await $.mcall((await $.wv([$t34, $t35], "Items", C, false)), "Add", [(await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["NAME"], C)), "AsString"))])));
        await $.stmt($.wcall([$t34, $t35], "Next", [], C));
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TComboBox"]});
  U.method("TRepairEdit", "edDescriptionDropDown", async function edDescriptionDropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadComboData", [(await $.call(C, "TComboBox", [L0["sender"]]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairEdit", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.v(C, "FCloseQuery")))))) {
    await L0["action"].set((await $.v(C, "caNone")));
    return L0.result;
  }
  {
    const $t36 = (await $.mv((await $.v(C, "RapNewDataModule")), "TransactionData"));
    { const $t37 = (await $.wv([$t36], "ModalResult", C, false));
      if ($.eq($t37, (await $.wv([$t36], "mrCancel", C, false)))) {
        if ($.truthy($.ne((await $.wv([$t36], "EditAction", C, false)), (await $.wv([$t36], "acInsert", C, false))))) {
          await $.stmt($.wcall([$t36], "RefreshRecord", [], C));
        } else {
          await $.stmt($.wcall([$t36], "Cancel", [], C));
        }
      }
      else if ($.eq($t37, (await $.wv([$t36], "mrRetry", C, false)))) {
        await $.wset([$t36], "ModalResult", (await $.wv([$t36], "mrNone", C, false)), C);
        await $.wset([$t36], "Action", (await $.wv([$t36], "caNone", C, false)), { get: async () => await L0["action"].get(), set: async (v) => { await L0["action"].set(v); }, local: true });
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TRepairEdit", "ClearAccInfo", async function ClearAccInfo(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), "edtclear": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["value", "edtclear"]);
  {
    const $t38 = (await $.v(C, "RapNewDataModule"));
    { const $t39 = (await $.wv([$t38], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false));
      if ($.eq($t39, (await $.wv([$t38], "aoDebet", C, false)))) {
        await $.mcall((await $.mcall((await $.wv([$t38], "TransactionData", C, false)), "FieldByName", ["DEBITID"])), "Clear", []);
        await $.mcall((await $.mcall((await $.wv([$t38], "TransactionData", C, false)), "FieldByName", ["INBALANCECHAR"])), "Clear", []);
        if ($.truthy((await $.wv([$t38], "EdtClear", { get: async () => L0["edtclear"], set: async (v) => { L0["edtclear"] = v; }, local: true }, false)))) {
          await $.mset((await $.wv([$t38], "edDebitAccNo", C, false)), "Text", "");
        }
      }
      else if ($.eq($t39, (await $.wv([$t38], "aoCredit", C, false)))) {
        await $.mcall((await $.mcall((await $.wv([$t38], "TransactionData", C, false)), "FieldByName", ["CREDITID"])), "Clear", []);
        await $.mcall((await $.mcall((await $.wv([$t38], "TransactionData", C, false)), "FieldByName", ["INBALANCECHAR"])), "Clear", []);
        if ($.truthy((await $.wv([$t38], "EdtClear", { get: async () => L0["edtclear"], set: async (v) => { L0["edtclear"] = v; }, local: true }, false)))) {
          await $.mset((await $.wv([$t38], "edKreditAccNo", C, false)), "Text", "");
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Value", "EdtClear"], "kind": "procedure", "ptypes": ["TAmountOperation", "Boolean"]});
  U.method("TRepairEdit", "ClearValInfo", async function ClearValInfo(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  { const $t40 = L0["value"];
    if ($.eq($t40, (await $.v(C, "aoDebet")))) {
      await $.mset((await $.v(C, "dblcCurDebet")), "KeyValue", (-(1)));
      await $.mset((await $.v(C, "ceDebetCurrency")), "Text", "");
    }
    else if ($.eq($t40, (await $.v(C, "aoCredit")))) {
      await $.mset((await $.v(C, "dblcCurKredit")), "KeyValue", (-(1)));
      await $.mset((await $.v(C, "ceKreditCurrency")), "Text", "");
    }
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TAmountOperation"]});
  U.method("TRepairEdit", "edKreditAccNoChange", async function edKreditAccNoChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t41 = (L0["sender"]);
    const $t42 = (await $.mv((await $.mv(((await $.wv([$t41], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet"));
    if ($.truthy($.ne((await $.wv([$t41, $t42], "Text", C, false)), (await $.wv([$t41, $t42], "EmptyStr", C, false))))) {
      await $.stmt((await $.wcall([$t41, $t42], "Locate", [(await $.wv([$t41, $t42], "SearchField", C, false)), (await $.wv([$t41, $t42], "Text", C, false)), [(await $.wv([$t41, $t42], "loCaseInsensitive", C, false)), (await $.wv([$t41, $t42], "loPartialKey", C, false))]], C)));
    } else {
      await $.stmt((await $.wcall([$t41, $t42], "ClearAccInfo", [(await $.wv([$t41, $t42], "aoCredit", C, false)), (await $.wv([$t41, $t42], "false", C, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairEdit", "dlbcBalanceDropDown", async function dlbcBalanceDropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "CheckInBalance", []));
  await $.stmt($.call(C, "PrepareInBalance", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairEdit", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FCashState", (await $.v(C, "aoLamount")));
  await $.set(C, "FInBalanceCharState", (await $.v(C, "ibUnknown")));
  await $.set(C, "FEditAction", (await $.v(C, "acUnknown")));
  await $.set(C, "FRefreshOnShow", true);
  await $.set(C, "FCloseQuery", true);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairEdit", "SetFilter", async function SetFilter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  {
    const $t43 = (await $.v(C, "RapNewDataModule"));
    { const $t44 = (await $.wv([$t43], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false));
      if ($.eq($t44, (await $.wv([$t43], "aoDebet", C, false)))) {
        {
          const $t45 = (await $.wv([$t43], "DebetAccData", C, false));
          await $.stmt((await $.wcall([$t43, $t45], "ClearAccInfo", [(await $.wv([$t43, $t45], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), (await $.wv([$t43, $t45], "true", C, false))], C)));
        }
      }
      else if ($.eq($t44, (await $.wv([$t43], "aoCredit", C, false)))) {
        {
          const $t46 = (await $.wv([$t43], "CreditAccData", C, false));
          const $t47 = (await $.wv([$t43, $t46], "TransactionData", C, false));
          await $.stmt((await $.wcall([$t43, $t46, $t47], "ClearAccInfo", [(await $.wv([$t43, $t46, $t47], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), (await $.wv([$t43, $t46, $t47], "true", C, false))], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TAmountOperation"]});
  U.method("TRepairEdit", "seCurrenIDDebetExit", async function seCurrenIDDebetExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ValuteChange", [(await $.call(C, "TEdit", [L0["sender"]]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairEdit", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    {
      const $t48 = L0["sender"];
      await $.stmt((await $.wcall([$t48], "SelectNext", [(await $.wv([$t48], "ActiveControl", C, false)), (await $.wv([$t48], "True", C, false)), (await $.wv([$t48], "True", C, false))], C)));
      await $.wset([$t48], "Key", "\u0000", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true });
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TRepairEdit", "edDebitAccNoChange", async function edDebitAccNoChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t49 = (L0["sender"]);
    const $t50 = (await $.mv((await $.mv(((await $.wv([$t49], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet"));
    if ($.truthy($.ne((await $.wv([$t49, $t50], "Text", C, false)), (await $.wv([$t49, $t50], "EmptyStr", C, false))))) {
      await $.stmt((await $.wcall([$t49, $t50], "Locate", [(await $.wv([$t49, $t50], "SearchField", C, false)), (await $.wv([$t49, $t50], "Text", C, false)), [(await $.wv([$t49, $t50], "loCaseInsensitive", C, false)), (await $.wv([$t49, $t50], "loPartialKey", C, false))]], C)));
    } else {
      await $.stmt((await $.wcall([$t49, $t50], "ClearAccInfo", [(await $.wv([$t49, $t50], "aoDebet", C, false)), (await $.wv([$t49, $t50], "false", C, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairEdit", "dtpRepaireditChange", async function dtpRepaireditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t51 = (await $.v(C, "RapNewDataModule"));
    await $.mset((await $.mcall((await $.wv([$t51], "TransactionData", C, false)), "FieldByName", ["TransactionDate"])), "AsDateTime", (await $.mv((await $.wv([$t51], "dtpRepairedit", C, false)), "DateTime")));
  }
  await $.stmt($.call(C, "InitializeEditSheets", []));
  await $.stmt((await $.call(C, "ChangeRates", [(await $.v(C, "aoDebet"))])));
  await $.stmt((await $.call(C, "ChangeRates", [(await $.v(C, "aoCredit"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairEdit", "PrepareInBalance", async function PrepareInBalance(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "refreshvalue": 0};
  L0["refreshvalue"] = (-(10));
  {
    const $t52 = (await $.v(C, "RapNewDataModule"));
    if ($.truthy((await $.and_((await $.and_(($.not((await $.mv((await $.mcall((await $.wv([$t52], "TransactionData", C, false)), "FieldByName", ["DebitID"])), "IsNull")))), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t52], "DebetAccData", C, false)), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)))), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t52], "DebetAccData", C, false)), "FieldByName", ["VAL_ACC"])), "AsInteger")), 0)))))) {
      if ($.truthy($.ne((await $.wv([$t52], "FInBalanceCharState", C, false)), (await $.wv([$t52], "ibDebet", C, false))))) {
        await $.wset([$t52], "RefreshValue", 0, { get: async () => L0["refreshvalue"], set: async (v) => { L0["refreshvalue"] = v; }, local: true });
        await $.wset([$t52], "FInBalanceCharState", (await $.wv([$t52], "ibDebet", C, false)), C);
      }
    } else {
      if ($.truthy((await $.and_((await $.and_(($.not((await $.mv((await $.mcall((await $.wv([$t52], "TransactionData", C, false)), "FieldByName", ["CreditID"])), "IsNull")))), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t52], "CreditAccData", C, false)), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)))), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t52], "CreditAccData", C, false)), "FieldByName", ["VAL_ACC"])), "AsInteger")), 0)))))) {
        if ($.truthy($.ne((await $.wv([$t52], "FInBalanceCharState", C, false)), (await $.wv([$t52], "ibCredit", C, false))))) {
          await $.wset([$t52], "RefreshValue", 1, { get: async () => L0["refreshvalue"], set: async (v) => { L0["refreshvalue"] = v; }, local: true });
          await $.wset([$t52], "FInBalanceCharState", (await $.wv([$t52], "ibCredit", C, false)), C);
        }
      } else {
        if ($.truthy((await $.and_(($.ne((await $.mv((await $.wv([$t52], "InBalanceCharData", C, false)), "RecordCount")), 0)), async () => ($.ne((await $.wv([$t52], "FInBalanceCharState", C, false)), (await $.wv([$t52], "ibUnknown", C, false)))))))) {
          await $.wset([$t52], "RefreshValue", (-(1)), { get: async () => L0["refreshvalue"], set: async (v) => { L0["refreshvalue"] = v; }, local: true });
          await $.wset([$t52], "FInBalanceCharState", (await $.wv([$t52], "ibUnknown", C, false)), C);
          await $.mset((await $.wv([$t52], "dlbcBalance", C, false)), "KeyValue", (-(1)));
        }
      }
    }
    if ($.truthy($.ne((await $.wv([$t52], "RefreshValue", { get: async () => L0["refreshvalue"], set: async (v) => { L0["refreshvalue"] = v; }, local: true }, false)), (-(10))))) {
      await $.mset((await $.wv([$t52], "InBalanceCharData", C, false)), "Filter", (await $.wcall([$t52], "Format", ["MedioCrity=%d", [(await $.wv([$t52], "RefreshValue", { get: async () => L0["refreshvalue"], set: async (v) => { L0["refreshvalue"] = v; }, local: true }, false))]], C)));
      await $.mset((await $.wv([$t52], "InBalanceCharData", C, false)), "Filtered", (await $.wv([$t52], "True", C, false)));
      await $.mset((await $.wv([$t52], "dlbcBalance", C, false)), "KeyValue", (-(1)));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRepairEdit", "CheckInBalance", async function CheckInBalance(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false, "tempbalchar": ''};
  {
    const $t53 = (await $.v(C, "RapNewDataModule"));
    await $.wset([$t53], "TempBalChar", (await $.mv((await $.mcall((await $.wv([$t53], "TransactionData", C, false)), "FieldByName", ["INBALANCECHAR"])), "AsString")), { get: async () => L0["tempbalchar"], set: async (v) => { L0["tempbalchar"] = v; }, local: true });
    await $.stmt($.wcall([$t53], "PrepareInBalance", [], C));
    if ($.truthy($.ne((await $.wv([$t53], "TempBalChar", { get: async () => L0["tempbalchar"], set: async (v) => { L0["tempbalchar"] = v; }, local: true }, false)), ""))) {
      if ($.truthy((await $.or_(((await $.mcall((await $.wv([$t53], "InBalanceCharData", C, false)), "Locate", ["SYMBOL", (await $.wv([$t53], "TempBalChar", { get: async () => L0["tempbalchar"], set: async (v) => { L0["tempbalchar"] = v; }, local: true }, false)), [(await $.wv([$t53], "loCaseInsensitive", C, false))]]))), async () => ($.eq((await $.mv((await $.wv([$t53], "seInBalance", C, false)), "Text")), (await $.wv([$t53], "EmptyStr", C, false)))))))) {
        await $.mset((await $.wv([$t53], "seInBalance", C, false)), "Color", (await $.wv([$t53], "clWhite", C, false)));
      } else {
        await $.mset((await $.wv([$t53], "seInBalance", C, false)), "Color", (await $.wv([$t53], "clRed", C, false)));
      }
    }
  }
  L0["result"] = $.eq((await $.v(C, "FInBalanceCharState")), (await $.v(C, "ibUnknown")));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairEdit", "seInBalanceExit", async function seInBalanceExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "CheckInBalance", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairEdit", "seCurrenIDDebetChange", async function seCurrenIDDebetChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Color", (await $.v(C, "clWindow")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairEdit", "seInBalanceChange", async function seInBalanceChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Color", (await $.v(C, "clWindow")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairEdit", "btClearClick", async function btClearClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t54 = (await $.mv((await $.v(C, "RapNewDataModule")), "TransactionData"));
    { const $t55 = (await $.wv([$t54], "EditAction", C, false));
      if ($.eq($t55, (await $.wv([$t54], "acInsert", C, false)))) {
        await $.stmt($.wcall([$t54], "Cancel", [], C));
        await $.stmt($.wcall([$t54], "Insert", [], C));
        await $.stmt((await $.wcall([$t54], "InitializeEditAction", [(await $.wv([$t54], "EditAction", C, false))], C)));
      }
      else if ($.eq($t55, (await $.wv([$t54], "acUpdate", C, false)))) {
        await $.stmt($.wcall([$t54], "RefreshRecord", [], C));
        await $.stmt((await $.wcall([$t54], "InitializeEditAction", [(await $.wv([$t54], "EditAction", C, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairEdit", "PrepareTransaction", async function PrepareTransaction(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: $.rec("ttransaction"), "acttransaction": $.rec("ttransaction")};
  {
    const $t56 = (await $.v(C, "RapNewDataModule"));
    const $t57 = (await $.wv([$t56], "ActTransaction", { get: async () => L0["acttransaction"], set: async (v) => { L0["acttransaction"] = v; }, local: true }, false));
    await $.wset([$t56, $t57], "Action", (await $.wv([$t56, $t57], "EditAction", C, false)), C);
    if ($.truthy($.not(((await $.mv((await $.wv([$t56, $t57], "chRate", C, false)), "Checked")))))) {
      await $.wset([$t56, $t57], "Mode", 2, C);
    } else {
      if ($.truthy((await $.mv((await $.wv([$t56, $t57], "chProfit", C, false)), "Checked")))) {
        await $.wset([$t56, $t57], "Mode", 0, C);
      } else {
        await $.wset([$t56, $t57], "Mode", 1, C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t56, $t57], "EditAction", C, false)), (await $.wv([$t56, $t57], "acInsert", C, false))))) {
      await $.wset([$t56, $t57], "Id", (await $.wv([$t56, $t57], "null", C, false)), C);
    } else {
      await $.wset([$t56, $t57], "Id", (await $.mv((await $.mcall((await $.wv([$t56, $t57], "TransactionData", C, false)), "FieldByName", ["ID"])), "AsInteger")), C);
    }
    if ($.truthy($.not(((await $.mv((await $.mcall((await $.wv([$t56, $t57], "TransactionData", C, false)), "FieldByName", ["Transactiondate"])), "IsNull")))))) {
      await $.wset([$t56, $t57], "Date", (await $.mv((await $.mcall((await $.wv([$t56, $t57], "TransactionData", C, false)), "FieldByName", ["Transactiondate"])), "AsDateTime")), C);
    } else {
      await $.wset([$t56, $t57], "Date", (await $.mv((await $.wv([$t56, $t57], "dtpRepairedit", C, false)), "DateTime")), C);
    }
    await $.wset([$t56, $t57], "DebitId", (await $.mv((await $.mcall((await $.wv([$t56, $t57], "DebetAccData", C, false)), "FieldByName", ["Id"])), "AsInteger")), C);
    await $.wset([$t56, $t57], "CreditId", (await $.mv((await $.mcall((await $.wv([$t56, $t57], "CreditAccData", C, false)), "FieldByName", ["Id"])), "AsInteger")), C);
    await $.wset([$t56, $t57], "DebitRate", (await $.mv((await $.mcall((await $.wv([$t56, $t57], "TransactionData", C, false)), "FieldByName", ["DebitRate"])), "AsFloat")), C);
    await $.wset([$t56, $t57], "CreditRate", (await $.mv((await $.mcall((await $.wv([$t56, $t57], "TransactionData", C, false)), "FieldByName", ["CreditRate"])), "AsFloat")), C);
    await $.wset([$t56, $t57], "DebitAmmount", (await $.mv((await $.wv([$t56, $t57], "ceDebetAmount", C, false)), "Value")), C);
    await $.wset([$t56, $t57], "CreditAmmount", (await $.mv((await $.wv([$t56, $t57], "ceKreditAmount", C, false)), "Value")), C);
    await $.wset([$t56, $t57], "LAmmount", (await $.mv((await $.wv([$t56, $t57], "ceLamount", C, false)), "Value")), C);
    await $.wset([$t56, $t57], "Name", (await $.mv((await $.wv([$t56, $t57], "edDescription", C, false)), "Text")), C);
    await $.wset([$t56, $t57], "DebitCurId", (await $.mv((await $.mcall((await $.wv([$t56, $t57], "CurDebetData", C, false)), "FieldByName", ["Valute"])), "AsInteger")), C);
    await $.wset([$t56, $t57], "CreditCurId", (await $.mv((await $.mcall((await $.wv([$t56, $t57], "CurKreditData", C, false)), "FieldByName", ["Valute"])), "AsInteger")), C);
    if ($.truthy($.not(((await $.mv((await $.mcall((await $.wv([$t56, $t57], "TransactionData", C, false)), "FieldByName", ["InBalanceChar"])), "IsNull")))))) {
      await $.wset([$t56, $t57], "InBalanceChar", (await $.mv((await $.mcall((await $.wv([$t56, $t57], "TransactionData", C, false)), "FieldByName", ["InBalanceChar"])), "AsString")), C);
    } else {
      await $.wset([$t56, $t57], "InBalanceChar", (await $.wv([$t56, $t57], "null", C, false)), C);
    }
    if ($.truthy($.not(((await $.mv((await $.mcall((await $.wv([$t56, $t57], "TransactionData", C, false)), "FieldByName", ["OutBalanceChar"])), "IsNull")))))) {
      await $.wset([$t56, $t57], "OutBalanceChar", (await $.mv((await $.mcall((await $.wv([$t56, $t57], "TransactionData", C, false)), "FieldByName", ["OutBalanceChar"])), "AsInteger")), C);
    } else {
      await $.wset([$t56, $t57], "OutBalanceChar", (await $.wv([$t56, $t57], "null", C, false)), C);
    }
    if ($.truthy($.not(((await $.mv((await $.mcall((await $.wv([$t56, $t57], "TransactionData", C, false)), "FieldByName", ["reportid"])), "IsNull")))))) {
      await $.wset([$t56, $t57], "reportid", (await $.mv((await $.mcall((await $.wv([$t56, $t57], "TransactionData", C, false)), "FieldByName", ["reportid"])), "AsInteger")), C);
    } else {
      await $.wset([$t56, $t57], "reportid", (await $.wv([$t56, $t57], "null", C, false)), C);
    }
    await $.wset([$t56, $t57], "Result", (await $.wv([$t56, $t57], "ActTransaction", { get: async () => L0["acttransaction"], set: async (v) => { L0["acttransaction"] = v; }, local: true }, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRepairEdit", "btSaveClick", async function btSaveClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "temptrans": $.rec("ttransaction")};
  await $.fixArgs(L0, ["sender"]);
  L0["checktrans"] = $.fn(async function CheckTrans(p0) {
  const L1 = {"value": $.copyArg(p0), result: false};
  await $.fixArgs(L1, ["value"]);
  {
    const $t58 = (await $.v(C, "RapNewDataModule"));
    try {
      await $.wset([$t58], "Result", (await $.wcall([$t58], "CheckTransaction", [(await $.wv([$t58], "Value", { get: async () => L1["value"], set: async (v) => { L1["value"] = v; }, local: true }, false))], C)), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
    } catch ($t59) {
      $.rethrowControl($t59);
      if ($.excIs($t59, "EHint")) {
        L1["e"] = $.exc($t59);
        await $.stmt((await $.mcall((await $.wv([$t58], "ErrorBox", C, false)), "ShowMessage", [(await $.mv((await $.wv([$t58], "E", { get: async () => L1["e"], set: async (v) => { L1["e"] = v; }, local: true }, false)), "Message")), 4000])));
        await $.wset([$t58], "Result", (await $.wv([$t58], "False", C, false)), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
      }
      else { throw $t59; }
    }
  }
  return L1.result;
});
  L0["savetran"] = $.fn(async function SaveTran(p0) {
  const L1 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["value"]);
  {
    const $t60 = (await $.v(C, "RapNewDataModule"));
    const $t61 = (await $.wv([$t60], "TransactionData", C, false));
    await $.stmt((await $.wcall([$t60, $t61], "SaveTransaction", [(await $.wv([$t60, $t61], "Value", { get: async () => L1["value"], set: async (v) => { L1["value"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t60, $t61], "Refresh", [], C));
    if ($.truthy($.eq((await $.wv([$t60, $t61], "EditAction", C, false)), (await $.wv([$t60, $t61], "acInsert", C, false))))) {
      await $.stmt($.wcall([$t60, $t61], "Last", [], C));
    } else {
      await $.stmt((await $.wcall([$t60, $t61], "Locate", ["ID", (await $.mv((await $.wv([$t60, $t61], "Value", { get: async () => L1["value"], set: async (v) => { L1["value"] = v; }, local: true }, false)), "Id")), []], C)));
    }
  }
  return L1.result;
});
  L0["showavi"] = $.fn(async function ShowAvi(p0) {
  const L1 = {"show": (p0 === undefined ? true : p0), result: false};
  await $.fixArgs(L1, ["show"]);
  try {
    await $.mset((await $.v(C, "RepAnim")), "Active", L1["show"]);
    await $.mset((await $.v(C, "RepAnim")), "Visible", L1["show"]);
    await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
    L1.result = true;
  } catch ($t62) {
    $.rethrowControl($t62);
    $.handled($t62);
    L1.result = false;
  }
  return L1.result;
});
  L0["temptrans"] = (await $.v(C, "PrepareTransaction"));
  {
    const $t63 = (await $.call(C, "TTransaction", [L0["temptrans"]]));
    if ($.truthy($.not(((await $.wcall([$t63], "CheckTrans", [(await $.wv([$t63], "TempTrans", { get: async () => L0["temptrans"], set: async (v) => { L0["temptrans"] = v; }, local: true }, false))], { get: async () => L0["checktrans"], set: async (v) => { L0["checktrans"] = v; }, local: true })))))) {
      await $.wset([$t63], "ModalResult", (await $.wv([$t63], "mrRetry", C, false)), C);
    } else {
      try {
        await $.stmt($.wcall([$t63], "ShowAvi", [], { get: async () => L0["showavi"], set: async (v) => { L0["showavi"] = v; }, local: true }));
        await $.wset([$t63], "CloseAction", (await $.wv([$t63], "False", C, false)), C);
        try {
          await $.stmt((await $.wcall([$t63], "SaveTran", [(await $.wv([$t63], "TempTrans", { get: async () => L0["temptrans"], set: async (v) => { L0["temptrans"] = v; }, local: true }, false))], { get: async () => L0["savetran"], set: async (v) => { L0["savetran"] = v; }, local: true })));
        } catch ($t64) {
          $.rethrowControl($t64);
          $.handled($t64);
          await $.wset([$t63], "ModalResult", (await $.wv([$t63], "mrRetry", C, false)), C);
          throw $t64;
        }
      } finally {
        await $.stmt((await $.wcall([$t63], "ShowAvi", [(await $.wv([$t63], "False", C, false))], { get: async () => L0["showavi"], set: async (v) => { L0["showavi"] = v; }, local: true })));
        await $.wset([$t63], "CloseAction", (await $.wv([$t63], "True", C, false)), C);
      }
    }
  }
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRepairEdit", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
