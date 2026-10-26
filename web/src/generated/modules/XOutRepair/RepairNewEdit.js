// Generated from RepairNewEdit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("RepairNewEdit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "CurrencyEdit", "Buttons", "ComCtrls", "ExtCtrls", "db", "SearchEdit", "HintBox", "Variants", "RepairNewDataModule", "Out_RepairImpl1", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.const("aoDebet", 0);
  U.const("aoCredit", 1);
  U.const("aoLamount", 2);
  U.const("ibDebet", 0);
  U.const("ibCredit", 1);
  U.const("ibUnknown", 2);
  U.const("acInsert", 0);
  U.const("acUpdate", 1);
  U.const("acDelete", 2);
  U.const("acUnknown", 3);
  $.defRecord("ttransaction", {"action": () => null, "mode": () => 0, "id": () => null, "date": () => 0, "debitid": () => 0, "creditid": () => 0, "debitcurid": () => 0, "creditcurid": () => 0, "debitrate": () => 0, "creditrate": () => 0, "debitammount": () => 0, "creditammount": () => 0, "lammount": () => 0, "name": () => '', "inbalancechar": () => null, "outbalancechar": () => null});
  U.defClass("EHint", "Exception", {}, {});
  U.defClass("TOutRepairEdit", "TForm", {"pnmain": {"name": "pnMain", "type": "TPanel"}, "pndebet": {"name": "pnDebet", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "dblccurdebet": {"name": "dblcCurDebet", "type": "TDBLookupComboBox"}, "dlbcdebitaccno": {"name": "dlbcDebitAccNo", "type": "TDBLookupComboBox"}, "dlbcdebitcustomer": {"name": "dlbcDebitCustomer", "type": "TDBLookupComboBox"}, "securreniddebet": {"name": "seCurrenIDDebet", "type": "TEdit"}, "eddebitaccno": {"name": "edDebitAccNo", "type": "TSearchEdit"}, "cedebetcurrency": {"name": "ceDebetCurrency", "type": "TEdit"}, "pncredit": {"name": "pnCredit", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "dblccurkredit": {"name": "dblcCurKredit", "type": "TDBLookupComboBox"}, "dlbckreditaccno": {"name": "dlbcKreditAccNo", "type": "TDBLookupComboBox"}, "dlbckreditcustomer": {"name": "dlbcKreditCustomer", "type": "TDBLookupComboBox"}, "edkreditaccno": {"name": "edKreditAccNo", "type": "TSearchEdit"}, "securrenidkredit": {"name": "seCurrenIDKredit", "type": "TEdit"}, "cekreditcurrency": {"name": "ceKreditCurrency", "type": "TEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "bevel2": {"name": "Bevel2", "type": "TBevel"}, "dtprepairedit": {"name": "dtpRepairedit", "type": "TDateTimePicker"}, "chprofit": {"name": "chProfit", "type": "TCheckBox"}, "chrate": {"name": "chRate", "type": "TCheckBox"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label10": {"name": "Label10", "type": "TLabel"}, "cedebetamount": {"name": "ceDebetAmount", "type": "TCurrencyEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label11": {"name": "Label11", "type": "TLabel"}, "cekreditamount": {"name": "ceKreditAmount", "type": "TCurrencyEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "label12": {"name": "Label12", "type": "TLabel"}, "celamount": {"name": "ceLamount", "type": "TCurrencyEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "dlbcbalance": {"name": "dlbcBalance", "type": "TDBLookupComboBox"}, "dlbcconvertation": {"name": "dlbcConvertation", "type": "TDBLookupComboBox"}, "seoutbalance": {"name": "seOutBalance", "type": "TDBEdit"}, "seinbalance": {"name": "seInBalance", "type": "TDBEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "eddescription": {"name": "edDescription", "type": "TComboBox"}, "pnactionbuttonspanel": {"name": "pnActionButtonsPanel", "type": "TPanel"}, "btclear": {"name": "btClear", "type": "TBitBtn"}, "btcancel": {"name": "btCancel", "type": "TBitBtn"}, "errorbox": {"name": "ErrorBox", "type": "THintBox"}, "repanim": {"name": "RepAnim", "type": "TAnimate"}, "btsave": {"name": "btSave", "type": "TBitBtn"}, "fcashstate": {"name": "FCashState", "type": "TAmountOperation"}, "feditaction": {"name": "FEditAction", "type": "TEditAction"}, "ftransactiondate": {"name": "FTransactionDate", "type": "TDateTime"}, "frefreshonshow": {"name": "FRefreshOnShow", "type": "Boolean"}, "finbalancecharstate": {"name": "FInBalanceCharState", "type": "TInBalanceChar"}, "fclosequery": {"name": "FCloseQuery", "type": "Boolean"}}, {"editaction": {"name": "EditAction", "read": "FEditAction", "write": "SetEditAction"}, "closeaction": {"name": "CloseAction", "read": "FCloseQuery", "write": "SetCloseAction"}});
  U.init(async () => {
    U.var_("OutRepairEdit", null, "TOutRepairEdit");
  });
  U.method("TOutRepairEdit", "SetEditAction", async function SetEditAction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy($.ne((await $.v(C, "FEditAction")), L0["value"]))) {
    {
      const $t1 = (await $.mv((await $.v(C, "RepDataModule")), "TransactionData"));
      await $.stmt($.wcall([$t1], "RefreshRecord", [], C));
    }
    await $.set(C, "FEditAction", L0["value"]);
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TEditAction"]});
  U.method("TOutRepairEdit", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    {
      const $t2 = L0["sender"];
      await $.stmt((await $.wcall([$t2], "SelectNext", [(await $.wv([$t2], "ActiveControl", C, false)), (await $.wv([$t2], "True", C, false)), (await $.wv([$t2], "True", C, false))], C)));
      await $.wset([$t2], "Key", "\u0000", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true });
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOutRepairEdit", "ClearValInfo", async function ClearValInfo(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  { const $t3 = L0["value"];
    if ($.eq($t3, (await $.v(C, "aoDebet")))) {
      await $.mset((await $.v(C, "dblcCurDebet")), "KeyValue", (-(1)));
      await $.mset((await $.v(C, "ceDebetCurrency")), "Text", "");
    }
    else if ($.eq($t3, (await $.v(C, "aoCredit")))) {
      await $.mset((await $.v(C, "dblcCurKredit")), "KeyValue", (-(1)));
      await $.mset((await $.v(C, "ceKreditCurrency")), "Text", "");
    }
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TAmountOperation"]});
  U.method("TOutRepairEdit", "RefreshAccounts", async function RefreshAccounts(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  { const $t4 = L0["value"];
    if ($.eq($t4, (await $.v(C, "aoDebet")))) {
      {
        const $t5 = (await $.mv((await $.v(C, "RepDataModule")), "DebetAccData"));
        {
          const $t6 = (await $.wv([$t5], "dlbcDebitAccNo", C, false));
          if ($.truthy(($.ne((await $.wv([$t5, $t6], "KeyValue", C, false)), (await $.mv((await $.wcall([$t5, $t6], "FieldByName", [(await $.wv([$t5, $t6], "KeyField", C, false))], C)), "AsInteger")))))) {
            await $.wset([$t5, $t6], "KeyValue", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", [(await $.wv([$t5, $t6], "KeyField", C, false))], C)), "AsInteger")), C);
          }
        }
        {
          const $t7 = (await $.wv([$t5], "dlbcDebitCustomer", C, false));
          if ($.truthy(($.ne((await $.wv([$t5, $t7], "KeyValue", C, false)), (await $.mv((await $.wcall([$t5, $t7], "FieldByName", [(await $.wv([$t5, $t7], "KeyField", C, false))], C)), "AsInteger")))))) {
            await $.wset([$t5, $t7], "KeyValue", (await $.mv((await $.wcall([$t5, $t7], "FieldByName", [(await $.wv([$t5, $t7], "KeyField", C, false))], C)), "AsInteger")), C);
          }
        }
      }
    }
    else if ($.eq($t4, (await $.v(C, "aoCredit")))) {
      {
        const $t8 = (await $.mv((await $.v(C, "RepDataModule")), "CreditAccData"));
        {
          const $t9 = (await $.wv([$t8], "dlbcKreditAccNo", C, false));
          if ($.truthy(($.ne((await $.wv([$t8, $t9], "KeyValue", C, false)), (await $.mv((await $.wcall([$t8, $t9], "FieldByName", [(await $.wv([$t8, $t9], "KeyField", C, false))], C)), "AsInteger")))))) {
            await $.wset([$t8, $t9], "KeyValue", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", [(await $.wv([$t8, $t9], "KeyField", C, false))], C)), "AsInteger")), C);
          }
        }
        {
          const $t10 = (await $.wv([$t8], "dlbcKreditCustomer", C, false));
          if ($.truthy(($.ne((await $.wv([$t8, $t10], "KeyValue", C, false)), (await $.mv((await $.wcall([$t8, $t10], "FieldByName", [(await $.wv([$t8, $t10], "KeyField", C, false))], C)), "AsInteger")))))) {
            await $.wset([$t8, $t10], "KeyValue", (await $.mv((await $.wcall([$t8, $t10], "FieldByName", [(await $.wv([$t8, $t10], "KeyField", C, false))], C)), "AsInteger")), C);
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TAmountOperation"]});
  U.method("TOutRepairEdit", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.v(C, "FCloseQuery")))))) {
    await L0["action"].set((await $.v(C, "caNone")));
    return L0.result;
  }
  {
    const $t11 = (await $.mv((await $.v(C, "RepDataModule")), "TransactionData"));
    { const $t12 = (await $.wv([$t11], "ModalResult", C, false));
      if ($.eq($t12, (await $.wv([$t11], "mrCancel", C, false)))) {
        if ($.truthy($.ne((await $.wv([$t11], "EditAction", C, false)), (await $.wv([$t11], "acInsert", C, false))))) {
          await $.stmt($.wcall([$t11], "RefreshRecord", [], C));
        } else {
          await $.stmt($.wcall([$t11], "Cancel", [], C));
        }
      }
      else if ($.eq($t12, (await $.wv([$t11], "mrRetry", C, false)))) {
        await $.wset([$t11], "ModalResult", (await $.wv([$t11], "mrNone", C, false)), C);
        await $.wset([$t11], "Action", (await $.wv([$t11], "caNone", C, false)), { get: async () => await L0["action"].get(), set: async (v) => { await L0["action"].set(v); }, local: true });
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TOutRepairEdit", "ClearAccInfo", async function ClearAccInfo(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), "edtclear": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["value", "edtclear"]);
  {
    const $t13 = (await $.v(C, "RepDataModule"));
    { const $t14 = (await $.wv([$t13], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false));
      if ($.eq($t14, (await $.wv([$t13], "aoDebet", C, false)))) {
        await $.mcall((await $.mcall((await $.wv([$t13], "TransactionData", C, false)), "FieldByName", ["DEBITID"])), "Clear", []);
        await $.mcall((await $.mcall((await $.wv([$t13], "TransactionData", C, false)), "FieldByName", ["INBALANCECHAR"])), "Clear", []);
        if ($.truthy((await $.wv([$t13], "EdtClear", { get: async () => L0["edtclear"], set: async (v) => { L0["edtclear"] = v; }, local: true }, false)))) {
          await $.mset((await $.wv([$t13], "edDebitAccNo", C, false)), "Text", "");
        }
      }
      else if ($.eq($t14, (await $.wv([$t13], "aoCredit", C, false)))) {
        await $.mcall((await $.mcall((await $.wv([$t13], "TransactionData", C, false)), "FieldByName", ["CREDITID"])), "Clear", []);
        await $.mcall((await $.mcall((await $.wv([$t13], "TransactionData", C, false)), "FieldByName", ["INBALANCECHAR"])), "Clear", []);
        if ($.truthy((await $.wv([$t13], "EdtClear", { get: async () => L0["edtclear"], set: async (v) => { L0["edtclear"] = v; }, local: true }, false)))) {
          await $.mset((await $.wv([$t13], "edKreditAccNo", C, false)), "Text", "");
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Value", "EdtClear"], "kind": "procedure", "ptypes": ["TAmountOperation", "Boolean"]});
  U.method("TOutRepairEdit", "SetFilter", async function SetFilter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  {
    const $t15 = (await $.v(C, "RepDataModule"));
    { const $t16 = (await $.wv([$t15], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false));
      if ($.eq($t16, (await $.wv([$t15], "aoDebet", C, false)))) {
        {
          const $t17 = (await $.wv([$t15], "DebetAccData", C, false));
          await $.stmt((await $.wcall([$t15, $t17], "ClearAccInfo", [(await $.wv([$t15, $t17], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), (await $.wv([$t15, $t17], "true", C, false))], C)));
        }
      }
      else if ($.eq($t16, (await $.wv([$t15], "aoCredit", C, false)))) {
        {
          const $t18 = (await $.wv([$t15], "CreditAccData", C, false));
          const $t19 = (await $.wv([$t15, $t18], "TransactionData", C, false));
          await $.stmt((await $.wcall([$t15, $t18, $t19], "ClearAccInfo", [(await $.wv([$t15, $t18, $t19], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), (await $.wv([$t15, $t18, $t19], "true", C, false))], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TAmountOperation"]});
  U.method("TOutRepairEdit", "ValuteChange", async function ValuteChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["sender"]);
  L0["result"] = false;
  {
    const $t20 = (await $.v(C, "RepDataModule"));
    const $t21 = (await $.wv([$t20], "sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    if ($.truthy($.eq((await $.wv([$t20, $t21], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t20, $t21], "seCurrenIDDebet", C, false))))) {
      if ($.truthy($.eq((await $.wv([$t20, $t21], "Text", C, false)), (await $.wv([$t20, $t21], "EmptyStr", C, false))))) {
        await $.stmt((await $.wcall([$t20, $t21], "ClearValInfo", [(await $.wv([$t20, $t21], "aoDebet", C, false))], C)));
        return L0.result;
      }
      if ($.truthy(($.ne((await $.wv([$t20, $t21], "text", C, false)), (await $.mv((await $.mcall((await $.wv([$t20, $t21], "CurDebetData", C, false)), "FieldByName", ["valute"])), "AsString")))))) {
        await $.wset([$t20, $t21], "Result", (await $.mcall((await $.wv([$t20, $t21], "CurDebetData", C, false)), "Locate", ["valute", (await $.wv([$t20, $t21], "text", C, false)), [(await $.wv([$t20, $t21], "loCaseInsensitive", C, false))]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
        await $.mset((await $.wv([$t20, $t21], "ceDebetCurrency", C, false)), "Text", (await $.wcall([$t20, $t21], "FloatToStr", [(await $.mv((await $.mcall((await $.wv([$t20, $t21], "DebetRateData", C, false)), "FieldByName", ["RATE"])), "AsCurrency"))], C)));
        await $.stmt((await $.wcall([$t20, $t21], "ceDebetCurrencyChange", [Self], C)));
        await $.stmt((await $.wcall([$t20, $t21], "SetFilter", [(await $.wv([$t20, $t21], "aoDebet", C, false))], C)));
      } else {
        await $.wset([$t20, $t21], "Result", (await $.wv([$t20, $t21], "True", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      }
    } else {
      if ($.truthy($.eq((await $.wv([$t20, $t21], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t20, $t21], "seCurrenIDKredit", C, false))))) {
        if ($.truthy($.eq((await $.wv([$t20, $t21], "Text", C, false)), (await $.wv([$t20, $t21], "EmptyStr", C, false))))) {
          await $.stmt((await $.wcall([$t20, $t21], "ClearValInfo", [(await $.wv([$t20, $t21], "aoCredit", C, false))], C)));
          return L0.result;
        }
        if ($.truthy(($.ne((await $.wv([$t20, $t21], "text", C, false)), (await $.mv((await $.mcall((await $.wv([$t20, $t21], "CurKreditData", C, false)), "FieldByName", ["valute"])), "AsString")))))) {
          await $.wset([$t20, $t21], "Result", (await $.mcall((await $.wv([$t20, $t21], "CurKreditData", C, false)), "Locate", ["valute", (await $.wv([$t20, $t21], "text", C, false)), [(await $.wv([$t20, $t21], "loCaseInsensitive", C, false))]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
          await $.mset((await $.wv([$t20, $t21], "ceKreditCurrency", C, false)), "Text", (await $.wcall([$t20, $t21], "FloatToStr", [(await $.mv((await $.mcall((await $.wv([$t20, $t21], "CreditRateData", C, false)), "FieldByName", ["RATE"])), "AsCurrency"))], C)));
          await $.stmt((await $.wcall([$t20, $t21], "ceKreditCurrencyChange", [Self], C)));
          await $.stmt((await $.wcall([$t20, $t21], "SetFilter", [(await $.wv([$t20, $t21], "aoCredit", C, false))], C)));
        } else {
          await $.wset([$t20, $t21], "Result", (await $.wv([$t20, $t21], "True", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
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
  U.method("TOutRepairEdit", "seCurrenIDDebetChange", async function seCurrenIDDebetChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Color", (await $.v(C, "clWindow")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "seCurrenIDDebetExit", async function seCurrenIDDebetExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ValuteChange", [(await $.call(C, "TEdit", [L0["sender"]]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "ClearAmounts", async function ClearAmounts(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "ceDebetAmount")), "Value", 0);
  await $.mset((await $.v(C, "ceKreditAmount")), "Value", 0);
  await $.mset((await $.v(C, "ceLamount")), "Value", 0);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TOutRepairEdit", "ceKreditCurrencyChange", async function ceKreditCurrencyChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "ClearAmounts", []));
  {
    const $t22 = (await $.mv((await $.v(C, "RepDataModule")), "TransactionData"));
    await $.mset((await $.wcall([$t22], "FieldByName", ["CreditRate"], C)), "AsCurrency", (await $.wcall([$t22], "StrToFloat", [(await $.mv((await $.wv([$t22], "ceKreditCurrency", C, false)), "Text"))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "ChangeRates", async function ChangeRates(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  {
    const $t23 = (await $.v(C, "RepDataModule"));
    { const $t24 = (await $.wv([$t23], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false));
      if ($.eq($t24, (await $.wv([$t23], "aoDebet", C, false)))) {
        await $.mset((await $.wv([$t23], "ceDebetCurrency", C, false)), "Text", (await $.wcall([$t23], "FloatToStr", [(await $.mv((await $.mcall((await $.wv([$t23], "DebetRateData", C, false)), "FieldByName", ["RATE"])), "AsCurrency"))], C)));
        await $.stmt((await $.wcall([$t23], "ceDebetCurrencyChange", [Self], C)));
      }
      else if ($.eq($t24, (await $.wv([$t23], "aoCredit", C, false)))) {
        await $.mset((await $.wv([$t23], "ceKreditCurrency", C, false)), "Text", (await $.wcall([$t23], "FloatToStr", [(await $.mv((await $.mcall((await $.wv([$t23], "CreditRateData", C, false)), "FieldByName", ["RATE"])), "AsCurrency"))], C)));
        await $.stmt((await $.wcall([$t23], "ceKreditCurrencyChange", [Self], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TAmountOperation"]});
  U.method("TOutRepairEdit", "ceDebetCurrencyChange", async function ceDebetCurrencyChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "ClearAmounts", []));
  {
    const $t25 = (await $.mv((await $.v(C, "RepDataModule")), "TransactionData"));
    await $.mset((await $.wcall([$t25], "FieldByName", ["DebitRate"], C)), "AsCurrency", (await $.wcall([$t25], "StrToFloat", [(await $.mv((await $.wv([$t25], "ceDebetCurrency", C, false)), "Text"))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "dblcCurDebetCloseUp", async function dblcCurDebetCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t26 = (await $.mv((await $.mv((L0["sender"]), "ListSource")), "DataSet"));
    {
      const $t27 = (await $.wv([$t26], "seCurrenIDDebet", C, false));
      if ($.truthy($.ne((await $.wv([$t26, $t27], "Text", C, false)), (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["valute"], C)), "AsString"))))) {
        await $.wset([$t26, $t27], "Text", (await $.mv((await $.wcall([$t26, $t27], "FieldByName", ["valute"], C)), "AsString")), C);
      }
    }
    await $.stmt((await $.wcall([$t26], "ChangeRates", [(await $.wv([$t26], "aoDebet", C, false))], C)));
    await $.stmt((await $.wcall([$t26], "SetFilter", [(await $.wv([$t26], "aoDebet", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "edDebitAccNoChange", async function edDebitAccNoChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t28 = (L0["sender"]);
    const $t29 = (await $.mv((await $.mv(((await $.wv([$t28], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet"));
    if ($.truthy($.ne((await $.wv([$t28, $t29], "Text", C, false)), (await $.wv([$t28, $t29], "EmptyStr", C, false))))) {
      await $.stmt((await $.wcall([$t28, $t29], "Locate", [(await $.wv([$t28, $t29], "SearchField", C, false)), (await $.wv([$t28, $t29], "Text", C, false)), [(await $.wv([$t28, $t29], "loCaseInsensitive", C, false)), (await $.wv([$t28, $t29], "loPartialKey", C, false))]], C)));
    } else {
      await $.stmt((await $.wcall([$t28, $t29], "ClearAccInfo", [(await $.wv([$t28, $t29], "aoDebet", C, false)), (await $.wv([$t28, $t29], "false", C, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "CheckInBalance", async function CheckInBalance(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false, "tempbalchar": 0};
  {
    const $t30 = (await $.v(C, "RepDataModule"));
    await $.wset([$t30], "TempBalChar", (await $.mv((await $.mcall((await $.wv([$t30], "TransactionData", C, false)), "FieldByName", ["INBALANCECHAR"])), "ASInteger")), { get: async () => L0["tempbalchar"], set: async (v) => { L0["tempbalchar"] = v; }, local: true });
    await $.stmt($.wcall([$t30], "PrepareInBalance", [], C));
    if ($.truthy($.gt((await $.wv([$t30], "TempBalChar", { get: async () => L0["tempbalchar"], set: async (v) => { L0["tempbalchar"] = v; }, local: true }, false)), 0))) {
      if ($.truthy((await $.or_(((await $.mcall((await $.wv([$t30], "InBalanceCharData", C, false)), "Locate", ["SYMBOL", (await $.wv([$t30], "TempBalChar", { get: async () => L0["tempbalchar"], set: async (v) => { L0["tempbalchar"] = v; }, local: true }, false)), []]))), async () => ($.eq((await $.mv((await $.wv([$t30], "seInBalance", C, false)), "Text")), (await $.wv([$t30], "EmptyStr", C, false)))))))) {
        await $.mset((await $.wv([$t30], "seInBalance", C, false)), "Color", (await $.wv([$t30], "clWhite", C, false)));
      } else {
        await $.mset((await $.wv([$t30], "seInBalance", C, false)), "Color", (await $.wv([$t30], "clRed", C, false)));
      }
    }
  }
  L0["result"] = $.eq((await $.v(C, "FInBalanceCharState")), (await $.v(C, "ibUnknown")));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutRepairEdit", "dlbcDebitAccNoCloseUp", async function dlbcDebitAccNoCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t31 = (await $.v(C, "RepDataModule"));
    await $.mset((await $.wv([$t31], "edDebitAccNo", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t31], "DebetAccData", C, false)), "FieldByName", ["ACC_NO"])), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "dlbcDebitCustomerCloseUp", async function dlbcDebitCustomerCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t32 = (await $.v(C, "RepDataModule"));
    await $.mset((await $.wv([$t32], "edDebitAccNo", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t32], "DebetAccData", C, false)), "FieldByName", ["ACC_NO"])), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "seCurrenIDKreditChange", async function seCurrenIDKreditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Color", (await $.v(C, "clWindow")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "seCurrenIDKreditExit", async function seCurrenIDKreditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ValuteChange", [(await $.call(C, "TEdit", [L0["sender"]]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "PrepareInBalance", async function PrepareInBalance(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "refreshvalue": 0};
  L0["refreshvalue"] = (-(10));
  {
    const $t33 = (await $.v(C, "RepDataModule"));
    if ($.truthy((await $.and_((await $.and_(($.not((await $.mv((await $.mcall((await $.wv([$t33], "TransactionData", C, false)), "FieldByName", ["DebitID"])), "IsNull")))), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t33], "DebetAccData", C, false)), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)))), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t33], "DebetAccData", C, false)), "FieldByName", ["VAL_ACC"])), "AsInteger")), 0)))))) {
      if ($.truthy($.ne((await $.wv([$t33], "FInBalanceCharState", C, false)), (await $.wv([$t33], "ibDebet", C, false))))) {
        await $.wset([$t33], "RefreshValue", 0, { get: async () => L0["refreshvalue"], set: async (v) => { L0["refreshvalue"] = v; }, local: true });
        await $.wset([$t33], "FInBalanceCharState", (await $.wv([$t33], "ibDebet", C, false)), C);
      }
    } else {
      if ($.truthy((await $.and_((await $.and_(($.not((await $.mv((await $.mcall((await $.wv([$t33], "TransactionData", C, false)), "FieldByName", ["CreditID"])), "IsNull")))), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t33], "CreditAccData", C, false)), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)))), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t33], "CreditAccData", C, false)), "FieldByName", ["VAL_ACC"])), "AsInteger")), 0)))))) {
        if ($.truthy($.ne((await $.wv([$t33], "FInBalanceCharState", C, false)), (await $.wv([$t33], "ibCredit", C, false))))) {
          await $.wset([$t33], "RefreshValue", 1, { get: async () => L0["refreshvalue"], set: async (v) => { L0["refreshvalue"] = v; }, local: true });
          await $.wset([$t33], "FInBalanceCharState", (await $.wv([$t33], "ibCredit", C, false)), C);
        }
      } else {
        if ($.truthy((await $.and_(($.ne((await $.mv((await $.wv([$t33], "InBalanceCharData", C, false)), "RecordCount")), 0)), async () => ($.ne((await $.wv([$t33], "FInBalanceCharState", C, false)), (await $.wv([$t33], "ibUnknown", C, false)))))))) {
          await $.wset([$t33], "RefreshValue", (-(1)), { get: async () => L0["refreshvalue"], set: async (v) => { L0["refreshvalue"] = v; }, local: true });
          await $.wset([$t33], "FInBalanceCharState", (await $.wv([$t33], "ibUnknown", C, false)), C);
          await $.mset((await $.wv([$t33], "dlbcBalance", C, false)), "KeyValue", (-(1)));
        }
      }
    }
    if ($.truthy($.ne((await $.wv([$t33], "RefreshValue", { get: async () => L0["refreshvalue"], set: async (v) => { L0["refreshvalue"] = v; }, local: true }, false)), (-(10))))) {
      await $.mset((await $.wv([$t33], "InBalanceCharData", C, false)), "Filter", (await $.wcall([$t33], "Format", ["MedioCrity=%d", [(await $.wv([$t33], "RefreshValue", { get: async () => L0["refreshvalue"], set: async (v) => { L0["refreshvalue"] = v; }, local: true }, false))]], C)));
      await $.mset((await $.wv([$t33], "InBalanceCharData", C, false)), "Filtered", (await $.wv([$t33], "True", C, false)));
      await $.mset((await $.wv([$t33], "dlbcBalance", C, false)), "KeyValue", (-(1)));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TOutRepairEdit", "dblcCurKreditCloseUp", async function dblcCurKreditCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t34 = (await $.mv((await $.mv((L0["sender"]), "ListSource")), "DataSet"));
    {
      const $t35 = (await $.wv([$t34], "seCurrenIDKredit", C, false));
      if ($.truthy($.ne((await $.wv([$t34, $t35], "Text", C, false)), (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["valute"], C)), "AsString"))))) {
        await $.wset([$t34, $t35], "Text", (await $.mv((await $.wcall([$t34, $t35], "FieldByName", ["valute"], C)), "AsString")), C);
      }
    }
  }
  await $.stmt((await $.call(C, "ChangeRates", [(await $.v(C, "aoCredit"))])));
  await $.stmt((await $.call(C, "SetFilter", [(await $.v(C, "aoCredit"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "SetCloseAction", async function SetCloseAction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["value"]);
  { const $t36 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t37 = true;
    for (;;) {
      if (!$t37) { L0["i"] = $.succ(L0["i"], 1); }
      $t37 = false;
      if (!($.ord(L0["i"]) <= $.ord($t36))) break;
      if ($.truthy($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TBitBtn"))) {
        await $.mset((await $.call(C, "TBitBtn", [(await $.idx((await $.v(C, "Components")), [L0["i"]]))])), "Enabled", L0["value"]);
      }
      await $.tick();
    }
  }
  await $.set(C, "FCloseQuery", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TOutRepairEdit", "edKreditAccNoChange", async function edKreditAccNoChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t38 = (L0["sender"]);
    const $t39 = (await $.mv((await $.mv(((await $.wv([$t38], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet"));
    if ($.truthy($.ne((await $.wv([$t38, $t39], "Text", C, false)), (await $.wv([$t38, $t39], "EmptyStr", C, false))))) {
      await $.stmt((await $.wcall([$t38, $t39], "Locate", [(await $.wv([$t38, $t39], "SearchField", C, false)), (await $.wv([$t38, $t39], "Text", C, false)), [(await $.wv([$t38, $t39], "loCaseInsensitive", C, false)), (await $.wv([$t38, $t39], "loPartialKey", C, false))]], C)));
    } else {
      await $.stmt((await $.wcall([$t38, $t39], "ClearAccInfo", [(await $.wv([$t38, $t39], "aoCredit", C, false)), (await $.wv([$t38, $t39], "false", C, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "CutEditText", async function CutEditText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "x": 0, "sel": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t40 = (await $.call(C, "TCurrencyEdit", [L0["sender"]]));
    if ($.truthy($.eq((await $.wv([$t40], "DecimalSeparator", C, false)), (await $.wv([$t40], "ThousandSeparator", C, false))))) {
      return L0.result;
    }
    if ($.truthy($.eq((await $.wcall([$t40], "Pos", [(await $.wv([$t40], "DecimalSeparator", C, false)), (await $.wv([$t40], "Text", C, false))], C)), 0))) {
      return L0.result;
    }
    await $.wset([$t40], "Sel", (await $.wv([$t40], "SelStart", C, false)), { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true });
    await $.wset([$t40], "X", $.sub($.sub((await $.wcall([$t40], "Length", [(await $.wv([$t40], "Text", C, false))], C)), (await $.wcall([$t40], "Pos", [(await $.wv([$t40], "DecimalSeparator", C, false)), (await $.wv([$t40], "Text", C, false))], C))), (await $.wv([$t40], "CurrencyDecimals", C, false))), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
    if ($.truthy(($.gt((await $.wv([$t40], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 0)))) {
      await $.wset([$t40], "Text", (await $.wcall([$t40], "Copy", [(await $.wv([$t40], "Text", C, false)), 0, ($.sub((await $.wcall([$t40], "Length", [(await $.wv([$t40], "Text", C, false))], C)), (await $.wv([$t40], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))))], C)), C);
      await $.wset([$t40], "SelStart", (await $.wv([$t40], "Sel", { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true }, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "dlbcKreditAccNoCloseUp", async function dlbcKreditAccNoCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edKreditAccNo")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "edKreditAccNo")), "DataSource")), "DataSet")), "FieldByName", ["ACC_NO"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "ChangeAmounts", async function ChangeAmounts(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), "ratedebet": $.copyArg(p1), "ratecredit": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["value", "ratedebet", "ratecredit"]);
  L0["precision"] = 100;
  L0["roundnew"] = $.fn(async function RoundNew(p0, p1) {
  const L1 = {"x": $.copyArg(p0), "precision": $.copyArg(p1), result: 0, "scaledfractpart": 0, "temp": 0};
  await $.fixArgs(L1, ["x", "precision"]);
  L1["scaledfractpart"] = $.mul((await $.call(C, "Frac", [L1["x"]])), L1["precision"]);
  L1["temp"] = (await $.call(C, "Frac", [L1["scaledfractpart"]]));
  L1["scaledfractpart"] = (await $.call(C, "Int", [L1["scaledfractpart"]]));
  if ($.truthy($.ge(L1["temp"], 0.5))) {
    L1["scaledfractpart"] = $.add(L1["scaledfractpart"], 1);
  }
  if ($.truthy($.le(L1["temp"], (-(0.5))))) {
    L1["scaledfractpart"] = $.sub(L1["scaledfractpart"], 1);
  }
  L1.result = $.add((await $.call(C, "Int", [L1["x"]])), $.fdiv(L1["scaledfractpart"], L1["precision"]));
  return L1.result;
});
  { const $t41 = L0["value"];
    if ($.eq($t41, (await $.v(C, "aoDebet")))) {
      await $.mset((await $.v(C, "ceLamount")), "Value", (await $.callv(L0["roundnew"], [$.mul((await $.mv((await $.v(C, "ceDebetAmount")), "Value")), L0["ratedebet"]), L0["precision"]])));
      await $.mset((await $.v(C, "ceKreditAmount")), "Value", (await $.callv(L0["roundnew"], [$.fdiv(($.mul((await $.mv((await $.v(C, "ceDebetAmount")), "Value")), L0["ratedebet"])), L0["ratecredit"]), L0["precision"]])));
    }
    else if ($.eq($t41, (await $.v(C, "aoCredit")))) {
      await $.mset((await $.v(C, "ceLamount")), "Value", (await $.callv(L0["roundnew"], [$.mul((await $.mv((await $.v(C, "ceKreditAmount")), "Value")), L0["ratecredit"]), L0["precision"]])));
      await $.mset((await $.v(C, "ceDebetAmount")), "Value", (await $.callv(L0["roundnew"], [$.fdiv(($.mul((await $.mv((await $.v(C, "ceKreditAmount")), "Value")), L0["ratecredit"])), L0["ratedebet"]), L0["precision"]])));
    }
    else if ($.eq($t41, (await $.v(C, "aoLamount")))) {
      await $.mset((await $.v(C, "ceKreditAmount")), "Value", (await $.callv(L0["roundnew"], [$.fdiv((await $.mv((await $.v(C, "ceLamount")), "Value")), L0["ratecredit"]), L0["precision"]])));
      await $.mset((await $.v(C, "ceDebetAmount")), "Value", (await $.callv(L0["roundnew"], [$.fdiv((await $.mv((await $.v(C, "ceLamount")), "Value")), L0["ratedebet"]), L0["precision"]])));
    }
  }
  return L0.result;
}, {"params": ["Value", "RateDebet", "RateCredit"], "kind": "procedure", "ptypes": ["TAmountOperation", "Currency", "Currency"]});
  U.method("TOutRepairEdit", "dlbcKreditCustomerCloseUp", async function dlbcKreditCustomerCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edKreditAccNo")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "edKreditAccNo")), "DataSource")), "DataSet")), "FieldByName", ["ACC_NO"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "ceDebetAmountChange", async function ceDebetAmountChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), "0"))) {
    return L0.result;
  }
  {
    const $t42 = (await $.v(C, "RepDataModule"));
    await $.stmt((await $.wcall([$t42], "ChangeAmounts", [(await $.wv([$t42], "aoDebet", C, false)), (await $.mv((await $.mcall((await $.wv([$t42], "DebetRateData", C, false)), "FieldByName", ["RATE"])), "AsFloat")), (await $.mv((await $.mcall((await $.wv([$t42], "CreditRateData", C, false)), "FieldByName", ["RATE"])), "AsFloat"))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "ceLamountChange", async function ceLamountChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), "0"))) {
    return L0.result;
  }
  {
    const $t43 = (await $.v(C, "RepDataModule"));
    await $.stmt((await $.wcall([$t43], "ChangeAmounts", [(await $.wv([$t43], "aoLamount", C, false)), (await $.mv((await $.mcall((await $.wv([$t43], "DebetRateData", C, false)), "FieldByName", ["RATE"])), "AsFloat")), (await $.mv((await $.mcall((await $.wv([$t43], "CreditRateData", C, false)), "FieldByName", ["RATE"])), "AsFloat"))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "ceKreditAmountChange", async function ceKreditAmountChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), "0"))) {
    return L0.result;
  }
  {
    const $t44 = (await $.v(C, "RepDataModule"));
    await $.stmt((await $.wcall([$t44], "ChangeAmounts", [(await $.wv([$t44], "aoCredit", C, false)), (await $.mv((await $.mcall((await $.wv([$t44], "DebetRateData", C, false)), "FieldByName", ["RATE"])), "AsFloat")), (await $.mv((await $.mcall((await $.wv([$t44], "CreditRateData", C, false)), "FieldByName", ["RATE"])), "AsFloat"))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "dlbcBalanceDropDown", async function dlbcBalanceDropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "CheckInBalance", []));
  await $.stmt($.call(C, "PrepareInBalance", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "LoadComboData", async function LoadComboData(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t45 = (await $.mv((await $.v(C, "RepDataModule")), "TrDescriptionData"));
    const $t46 = (await $.wv([$t45], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    if ($.truthy($.not(((await $.wv([$t45, $t46], "Active", C, false)))))) {
      await $.stmt($.wcall([$t45, $t46], "Open", [], C));
    } else {
      await $.mcall((await $.mv((await $.wv([$t45, $t46], "RepDataModule", C, false)), "TrDescriptionData")), "Refresh", []);
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t45, $t46], "Items", C, false)), "Count")), (await $.wv([$t45, $t46], "RecordCount", C, false))))) {
      await $.mcall((await $.wv([$t45, $t46], "Items", C, false)), "Clear", []);
      await $.stmt($.wcall([$t45, $t46], "First", [], C));
      while ($.truthy($.not(((await $.wv([$t45, $t46], "EOF", C, false)))))) {
        await $.stmt((await $.mcall((await $.wv([$t45, $t46], "Items", C, false)), "Add", [(await $.mv((await $.wcall([$t45, $t46], "FieldByName", ["NAME"], C)), "AsString"))])));
        await $.stmt($.wcall([$t45, $t46], "Next", [], C));
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TComboBox"]});
  U.method("TOutRepairEdit", "edDescriptionDropDown", async function edDescriptionDropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadComboData", [(await $.call(C, "TComboBox", [L0["sender"]]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "seInBalanceChange", async function seInBalanceChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Color", (await $.v(C, "clWindow")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "seInBalanceExit", async function seInBalanceExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "CheckInBalance", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "PrepareTransaction", async function PrepareTransaction(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: $.rec("ttransaction"), "acttransaction": $.rec("ttransaction")};
  {
    const $t47 = (await $.v(C, "RepDataModule"));
    const $t48 = (await $.wv([$t47], "ActTransaction", { get: async () => L0["acttransaction"], set: async (v) => { L0["acttransaction"] = v; }, local: true }, false));
    await $.wset([$t47, $t48], "Action", (await $.wv([$t47, $t48], "EditAction", C, false)), C);
    if ($.truthy($.not(((await $.mv((await $.wv([$t47, $t48], "chRate", C, false)), "Checked")))))) {
      await $.wset([$t47, $t48], "Mode", 2, C);
    } else {
      if ($.truthy((await $.mv((await $.wv([$t47, $t48], "chProfit", C, false)), "Checked")))) {
        await $.wset([$t47, $t48], "Mode", 0, C);
      } else {
        await $.wset([$t47, $t48], "Mode", 1, C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t47, $t48], "EditAction", C, false)), (await $.wv([$t47, $t48], "acInsert", C, false))))) {
      await $.wset([$t47, $t48], "Id", (await $.wv([$t47, $t48], "null", C, false)), C);
    } else {
      await $.wset([$t47, $t48], "Id", (await $.mv((await $.mcall((await $.wv([$t47, $t48], "TransactionData", C, false)), "FieldByName", ["ID"])), "AsInteger")), C);
    }
    if ($.truthy($.not(((await $.mv((await $.mcall((await $.wv([$t47, $t48], "TransactionData", C, false)), "FieldByName", ["Transactiondate"])), "IsNull")))))) {
      await $.wset([$t47, $t48], "Date", (await $.mv((await $.mcall((await $.wv([$t47, $t48], "TransactionData", C, false)), "FieldByName", ["Transactiondate"])), "AsDateTime")), C);
    } else {
      await $.wset([$t47, $t48], "Date", (await $.mv((await $.wv([$t47, $t48], "dtpRepairedit", C, false)), "DateTime")), C);
    }
    await $.wset([$t47, $t48], "DebitId", (await $.mv((await $.mcall((await $.wv([$t47, $t48], "DebetAccData", C, false)), "FieldByName", ["Id"])), "AsInteger")), C);
    await $.wset([$t47, $t48], "CreditId", (await $.mv((await $.mcall((await $.wv([$t47, $t48], "CreditAccData", C, false)), "FieldByName", ["Id"])), "AsInteger")), C);
    await $.wset([$t47, $t48], "DebitRate", (await $.mv((await $.mcall((await $.wv([$t47, $t48], "TransactionData", C, false)), "FieldByName", ["DebitRate"])), "AsCurrency")), C);
    await $.wset([$t47, $t48], "CreditRate", (await $.mv((await $.mcall((await $.wv([$t47, $t48], "TransactionData", C, false)), "FieldByName", ["CreditRate"])), "AsCurrency")), C);
    await $.wset([$t47, $t48], "DebitAmmount", (await $.mv((await $.wv([$t47, $t48], "ceDebetAmount", C, false)), "Value")), C);
    await $.wset([$t47, $t48], "CreditAmmount", (await $.mv((await $.wv([$t47, $t48], "ceKreditAmount", C, false)), "Value")), C);
    await $.wset([$t47, $t48], "LAmmount", (await $.mv((await $.wv([$t47, $t48], "ceLamount", C, false)), "Value")), C);
    await $.wset([$t47, $t48], "Name", (await $.mv((await $.wv([$t47, $t48], "edDescription", C, false)), "Text")), C);
    await $.wset([$t47, $t48], "DebitCurId", (await $.mv((await $.mcall((await $.wv([$t47, $t48], "CurDebetData", C, false)), "FieldByName", ["Valute"])), "AsInteger")), C);
    await $.wset([$t47, $t48], "CreditCurId", (await $.mv((await $.mcall((await $.wv([$t47, $t48], "CurKreditData", C, false)), "FieldByName", ["Valute"])), "AsInteger")), C);
    if ($.truthy($.not(((await $.mv((await $.mcall((await $.wv([$t47, $t48], "TransactionData", C, false)), "FieldByName", ["InBalanceChar"])), "IsNull")))))) {
      await $.wset([$t47, $t48], "InBalanceChar", (await $.mv((await $.mcall((await $.wv([$t47, $t48], "TransactionData", C, false)), "FieldByName", ["InBalanceChar"])), "AsInteger")), C);
    } else {
      await $.wset([$t47, $t48], "InBalanceChar", (await $.wv([$t47, $t48], "null", C, false)), C);
    }
    if ($.truthy($.not(((await $.mv((await $.mcall((await $.wv([$t47, $t48], "TransactionData", C, false)), "FieldByName", ["OutBalanceChar"])), "IsNull")))))) {
      await $.wset([$t47, $t48], "OutBalanceChar", (await $.mv((await $.mcall((await $.wv([$t47, $t48], "TransactionData", C, false)), "FieldByName", ["OutBalanceChar"])), "AsInteger")), C);
    } else {
      await $.wset([$t47, $t48], "OutBalanceChar", (await $.wv([$t47, $t48], "null", C, false)), C);
    }
    await $.wset([$t47, $t48], "Result", (await $.wv([$t47, $t48], "ActTransaction", { get: async () => L0["acttransaction"], set: async (v) => { L0["acttransaction"] = v; }, local: true }, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOutRepairEdit", "InitializeEditSheets", async function InitializeEditSheets(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "tempinteger": 0};
  {
    const $t49 = (await $.v(C, "RepDataModule"));
    {
      const $t50 = (await $.wv([$t49], "DebetRateData", C, false));
      if ($.truthy($.ne((await $.wv([$t49, $t50], "FTransactionDate", C, false)), (await $.mv((await $.wv([$t49, $t50], "dtpRepairedit", C, false)), "DateTime"))))) {
        await $.wset([$t49, $t50], "tempInteger", (await $.mv((await $.mcall((await $.wv([$t49, $t50], "CurDebetData", C, false)), "FieldByName", ["VALUTE"])), "AsInteger")), { get: async () => L0["tempinteger"], set: async (v) => { L0["tempinteger"] = v; }, local: true });
        await $.stmt((await $.wcall([$t49, $t50], "SetVariable", ["dat", (await $.mv((await $.wv([$t49, $t50], "dtpRepairedit", C, false)), "DateTime"))], C)));
        if ($.truthy($.not(((await $.wv([$t49, $t50], "Active", C, false)))))) {
          await $.stmt($.wcall([$t49, $t50], "Open", [], C));
        } else {
          await $.stmt($.wcall([$t49, $t50], "Refresh", [], C));
        }
        await $.stmt((await $.wcall([$t49, $t50], "Locate", ["ID", (await $.wv([$t49, $t50], "tempInteger", { get: async () => L0["tempinteger"], set: async (v) => { L0["tempinteger"] = v; }, local: true }, false)), []], C)));
      }
    }
    {
      const $t51 = (await $.wv([$t49], "CreditRateData", C, false));
      if ($.truthy($.ne((await $.wv([$t49, $t51], "FTransactionDate", C, false)), (await $.mv((await $.wv([$t49, $t51], "dtpRepairedit", C, false)), "DateTime"))))) {
        await $.wset([$t49, $t51], "tempInteger", (await $.mv((await $.mcall((await $.wv([$t49, $t51], "CurKreditData", C, false)), "FieldByName", ["VALUTE"])), "AsInteger")), { get: async () => L0["tempinteger"], set: async (v) => { L0["tempinteger"] = v; }, local: true });
        await $.stmt((await $.wcall([$t49, $t51], "SetVariable", ["dat", (await $.mv((await $.wv([$t49, $t51], "dtpRepairedit", C, false)), "DateTime"))], C)));
        if ($.truthy($.not(((await $.wv([$t49, $t51], "Active", C, false)))))) {
          await $.stmt($.wcall([$t49, $t51], "Open", [], C));
        } else {
          await $.stmt($.wcall([$t49, $t51], "Refresh", [], C));
        }
        await $.stmt((await $.wcall([$t49, $t51], "Locate", ["ID", (await $.wv([$t49, $t51], "tempInteger", { get: async () => L0["tempinteger"], set: async (v) => { L0["tempinteger"] = v; }, local: true }, false)), []], C)));
      }
    }
  }
  await $.set(C, "FTransactionDate", (await $.mv((await $.v(C, "dtpRepairedit")), "DateTime")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TOutRepairEdit", "btSaveClick", async function btSaveClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "temptrans": $.rec("ttransaction")};
  await $.fixArgs(L0, ["sender"]);
  L0["checktrans"] = $.fn(async function CheckTrans(p0) {
  const L1 = {"value": $.copyArg(p0), result: false};
  await $.fixArgs(L1, ["value"]);
  {
    const $t52 = (await $.v(C, "RepDataModule"));
    try {
      await $.wset([$t52], "Result", (await $.wcall([$t52], "CheckTransaction", [(await $.wv([$t52], "Value", { get: async () => L1["value"], set: async (v) => { L1["value"] = v; }, local: true }, false))], C)), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
    } catch ($t53) {
      $.rethrowControl($t53);
      if ($.excIs($t53, "EHint")) {
        L1["e"] = $.exc($t53);
        await $.stmt((await $.mcall((await $.wv([$t52], "ErrorBox", C, false)), "ShowMessage", [(await $.mv((await $.wv([$t52], "E", { get: async () => L1["e"], set: async (v) => { L1["e"] = v; }, local: true }, false)), "Message")), 4000])));
        await $.wset([$t52], "Result", (await $.wv([$t52], "False", C, false)), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
      }
      else { throw $t53; }
    }
  }
  return L1.result;
});
  L0["savetran"] = $.fn(async function SaveTran(p0) {
  const L1 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["value"]);
  {
    const $t54 = (await $.v(C, "RepDataModule"));
    const $t55 = (await $.wv([$t54], "TransactionData", C, false));
    await $.stmt((await $.wcall([$t54, $t55], "SaveTransaction", [(await $.wv([$t54, $t55], "Value", { get: async () => L1["value"], set: async (v) => { L1["value"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t54, $t55], "Refresh", [], C));
    if ($.truthy($.eq((await $.wv([$t54, $t55], "EditAction", C, false)), (await $.wv([$t54, $t55], "acInsert", C, false))))) {
      await $.stmt($.wcall([$t54, $t55], "Last", [], C));
    } else {
      await $.stmt((await $.wcall([$t54, $t55], "Locate", ["ID", (await $.mv((await $.wv([$t54, $t55], "Value", { get: async () => L1["value"], set: async (v) => { L1["value"] = v; }, local: true }, false)), "Id")), []], C)));
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
  } catch ($t56) {
    $.rethrowControl($t56);
    $.handled($t56);
    L1.result = false;
  }
  return L1.result;
});
  L0["temptrans"] = (await $.v(C, "PrepareTransaction"));
  {
    const $t57 = (await $.call(C, "TTransaction", [L0["temptrans"]]));
    if ($.truthy($.not(((await $.wcall([$t57], "CheckTrans", [(await $.wv([$t57], "TempTrans", { get: async () => L0["temptrans"], set: async (v) => { L0["temptrans"] = v; }, local: true }, false))], { get: async () => L0["checktrans"], set: async (v) => { L0["checktrans"] = v; }, local: true })))))) {
      await $.wset([$t57], "ModalResult", (await $.wv([$t57], "mrRetry", C, false)), C);
    } else {
      try {
        await $.stmt($.wcall([$t57], "ShowAvi", [], { get: async () => L0["showavi"], set: async (v) => { L0["showavi"] = v; }, local: true }));
        await $.wset([$t57], "CloseAction", (await $.wv([$t57], "False", C, false)), C);
        try {
          await $.stmt((await $.wcall([$t57], "SaveTran", [(await $.wv([$t57], "TempTrans", { get: async () => L0["temptrans"], set: async (v) => { L0["temptrans"] = v; }, local: true }, false))], { get: async () => L0["savetran"], set: async (v) => { L0["savetran"] = v; }, local: true })));
        } catch ($t58) {
          $.rethrowControl($t58);
          $.handled($t58);
          await $.wset([$t57], "ModalResult", (await $.wv([$t57], "mrRetry", C, false)), C);
          throw $t58;
        }
      } finally {
        await $.stmt((await $.wcall([$t57], "ShowAvi", [(await $.wv([$t57], "False", C, false))], { get: async () => L0["showavi"], set: async (v) => { L0["showavi"] = v; }, local: true })));
        await $.wset([$t57], "CloseAction", (await $.wv([$t57], "True", C, false)), C);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "AddInitialize", async function AddInitialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t59 = (await $.v(C, "RepDataModule"));
    const $t60 = (await $.wv([$t59], "TransactionData", C, false));
    await $.mset((await $.wcall([$t59, $t60], "FieldByName", ["DebitCurrencyID"], C)), "AsInteger", 0);
    await $.mset((await $.wcall([$t59, $t60], "FieldByName", ["CreditCurrencyID"], C)), "AsInteger", 0);
    await $.mset((await $.wcall([$t59, $t60], "FieldByName", ["DebitRate"], C)), "AsCurrency", (await $.mv((await $.mcall((await $.wv([$t59, $t60], "DebetRateData", C, false)), "FieldByName", ["Rate"])), "AsCurrency")));
    await $.mset((await $.wcall([$t59, $t60], "FieldByName", ["CreditRate"], C)), "AsCurrency", (await $.mv((await $.mcall((await $.wv([$t59, $t60], "CreditRateData", C, false)), "FieldByName", ["Rate"])), "AsCurrency")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TOutRepairEdit", "InitializeeditForm", async function InitializeeditForm(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq((await $.v(C, "EditAction")), (await $.v(C, "acInsert"))))) {
    await $.stmt($.call(C, "AddInitialize", []));
  }
  {
    const $t61 = (await $.mv((await $.v(C, "RepDataModule")), "TransactionData"));
    if ($.truthy($.not(((await $.mv((await $.wcall([$t61], "FieldByName", ["TransactionDate"], C)), "IsNull")))))) {
      await $.mset((await $.wv([$t61], "dtpRepairedit", C, false)), "DateTime", (await $.mv((await $.wcall([$t61], "FieldByName", ["TransactionDate"], C)), "AsDateTime")));
    } else {
      await $.mset((await $.wv([$t61], "dtpRepairedit", C, false)), "DateTime", (await $.mv((await $.mv((await $.wv([$t61], "Out_RepairFrm", C, false)), "dtpOpDat")), "Date")));
    }
    await $.mset((await $.wv([$t61], "seCurrenIDDebet", C, false)), "Text", (await $.mv((await $.wcall([$t61], "FieldByName", ["DebitCurrencyID"], C)), "AsString")));
    await $.mset((await $.wv([$t61], "seCurrenIDKredit", C, false)), "Text", (await $.mv((await $.wcall([$t61], "FieldByName", ["CreditCurrencyID"], C)), "AsString")));
    await $.mset((await $.wv([$t61], "edDebitAccNo", C, false)), "Text", (await $.mv((await $.wcall([$t61], "FieldByName", ["DEBITACCNO"], C)), "AsString")));
    await $.mset((await $.wv([$t61], "edKreditAccNo", C, false)), "Text", (await $.mv((await $.wcall([$t61], "FieldByName", ["CREDITACCNO"], C)), "AsString")));
    await $.mset((await $.wv([$t61], "ceDebetCurrency", C, false)), "Text", (await $.wcall([$t61], "FloatToStr", [(await $.mv((await $.wcall([$t61], "FieldByName", ["DebitRate"], C)), "AsCurrency"))], C)));
    await $.mset((await $.wv([$t61], "ceKreditCurrency", C, false)), "Text", (await $.wcall([$t61], "FloatToStr", [(await $.mv((await $.wcall([$t61], "FieldByName", ["CreditRate"], C)), "AsCurrency"))], C)));
    await $.mset((await $.wv([$t61], "ceDebetAmount", C, false)), "Value", (await $.mv((await $.wcall([$t61], "FieldByName", ["DEBITAMOUNT"], C)), "AsCurrency")));
    await $.mset((await $.wv([$t61], "ceKreditAmount", C, false)), "Value", (await $.mv((await $.wcall([$t61], "FieldByName", ["CREDITAMOUNT"], C)), "AsCurrency")));
    await $.mset((await $.wv([$t61], "ceLamount", C, false)), "Value", (await $.mv((await $.wcall([$t61], "FieldByName", ["LAMOUNT"], C)), "AsCurrency")));
    await $.mset((await $.wv([$t61], "edDescription", C, false)), "Text", (await $.mv((await $.wcall([$t61], "FieldByName", ["NAME"], C)), "AsString")));
    await $.stmt($.wcall([$t61], "CheckInBalance", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TOutRepairEdit", "InitializeEditAction", async function InitializeEditAction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt($.call(C, "InitializeeditForm", []));
  await $.stmt($.call(C, "InitializeEditSheets", []));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TEditAction"]});
  U.method("TOutRepairEdit", "btClearClick", async function btClearClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t62 = (await $.mv((await $.v(C, "RepDataModule")), "TransactionData"));
    { const $t63 = (await $.wv([$t62], "EditAction", C, false));
      if ($.eq($t63, (await $.wv([$t62], "acInsert", C, false)))) {
        await $.stmt($.wcall([$t62], "Cancel", [], C));
        await $.stmt($.wcall([$t62], "Insert", [], C));
        await $.stmt((await $.wcall([$t62], "InitializeEditAction", [(await $.wv([$t62], "EditAction", C, false))], C)));
      }
      else if ($.eq($t63, (await $.wv([$t62], "acUpdate", C, false)))) {
        await $.stmt($.wcall([$t62], "RefreshRecord", [], C));
        await $.stmt((await $.wcall([$t62], "InitializeEditAction", [(await $.wv([$t62], "EditAction", C, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "FormCreate", async function FormCreate(Self, p0) {
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
  U.method("TOutRepairEdit", "dtpRepaireditChange", async function dtpRepaireditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t64 = (await $.v(C, "RepDataModule"));
    await $.mset((await $.mcall((await $.wv([$t64], "TransactionData", C, false)), "FieldByName", ["TransactionDate"])), "AsDateTime", (await $.mv((await $.wv([$t64], "dtpRepairedit", C, false)), "DateTime")));
  }
  await $.stmt($.call(C, "InitializeEditSheets", []));
  await $.stmt((await $.call(C, "ChangeRates", [(await $.v(C, "aoDebet"))])));
  await $.stmt((await $.call(C, "ChangeRates", [(await $.v(C, "aoCredit"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutRepairEdit", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
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
  return U;
}
