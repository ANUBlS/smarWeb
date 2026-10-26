// Generated from UnitPayment_order.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitPayment_order", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ImgList", "DB", "ComCtrls", "ToolWin", "StdCtrls", "DBCtrls", "ExtCtrls", "OracleData", "Menus", "CurrencyToHR_Azeri_Impl", "Payment_DataModul", "Unit_Archive", "UntMain_Report", "UntSecond_Report", "SBTranslateProc", "sboapiDataModuleImpl", "accserch", "Form_AccountsImpl", "cap_UntSecondReport", "cap_UntMainReport", "QuickRpt", "OpenAccountImpl"]);
  const C = [U];
  U.defClass("TPayment_order", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "ekbswift": {"name": "EKBSwift", "type": "TEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "cbkbname": {"name": "CBKBName", "type": "TComboBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "ekbcod": {"name": "EKBCod", "type": "TEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "ekbinn": {"name": "EKBInn", "type": "TEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "ekbcoracc": {"name": "EKBCorAcc", "type": "TEdit"}, "panel24": {"name": "Panel24", "type": "TPanel"}, "mod_bank": {"name": "mod_bank", "type": "TDBLookupComboBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "edaname": {"name": "EDAName", "type": "TEdit"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "edainn": {"name": "EDAInn", "type": "TEdit"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "cbdanum": {"name": "CBDANum", "type": "TComboBox"}, "editdebtaccno": {"name": "EditDebtAccNo", "type": "TEdit"}, "checkbox": {"name": "CheckBox", "type": "TCheckBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "ekaname": {"name": "EKAName", "type": "TEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "ekainn": {"name": "EKAInn", "type": "TEdit"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "ekanum": {"name": "EKANum", "type": "TEdit"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "eammountw": {"name": "EAmmountW", "type": "TEdit"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "eammount": {"name": "EAmmount", "type": "TEdit"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "eextra": {"name": "EExtra", "type": "TEdit"}, "panel21": {"name": "Panel21", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "epnum": {"name": "EPNum", "type": "TEdit"}, "panel22": {"name": "Panel22", "type": "TPanel"}, "eassignment": {"name": "EAssignment", "type": "TEdit"}, "panel23": {"name": "Panel23", "type": "TPanel"}, "dtpayment": {"name": "DTPayment", "type": "TDateTimePicker"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "dbswift": {"name": "DBSwift", "type": "TEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "dbname": {"name": "DBName", "type": "TComboBox"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "dbcod": {"name": "DBCod", "type": "TEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "dbinn": {"name": "DBInn", "type": "TEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "dbcoracc": {"name": "DBCorAcc", "type": "TEdit"}, "panel25": {"name": "Panel25", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "panel26": {"name": "Panel26", "type": "TPanel"}, "label4": {"name": "Label4", "type": "TLabel"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "vahidformada1": {"name": "Vahidformada1", "type": "TMenuItem"}, "kopyal1": {"name": "Kopyal1", "type": "TMenuItem"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "rate": {"name": "Rate", "type": "array"}, "rate1": {"name": "Rate1", "type": "array"}, "isupdate": {"name": "isUpdate", "type": "boolean"}}, {});
  U.fieldInit("TPayment_order", "rate", () => []);
  U.fieldInit("TPayment_order", "rate1", () => []);
  U.init(async () => {
    U.var_("Payment_order", null, "TPayment_order");
  });
  U.method("TPayment_order", "DBCodKeyPress", async function DBCodKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    {
      const $t1 = (await $.mv((await $.v(C, "PaymentOrderDataMod")), "ODSBankInfo"));
      if ($.truthy((await $.wcall([$t1], "Locate", ["BANKCODE", (await $.mv((await $.wv([$t1], "DBCod", C, false)), "Text")), [(await $.wv([$t1], "loCaseInsensitive", C, false)), (await $.wv([$t1], "loPartialKey", C, false))]], C)))) {
        await $.mset((await $.wv([$t1], "DBName", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["BANK"], C)), "AsString")));
        await $.mset((await $.wv([$t1], "DBInn", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["INN"], C)), "AsString")));
        await $.mset((await $.wv([$t1], "DBCorAcc", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["KRNO"], C)), "AsString")));
        await $.mset((await $.wv([$t1], "DBSwift", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["SWIFT"], C)), "AsString")));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPayment_order", "PustToComboID", async function PustToComboID(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "field": $.copyArg(p1), "idfield": $.copyArg(p2), "combobox": $.copyArg(p3), result: undefined, "rateindex": 0};
  await $.fixArgs(L0, ["dataset", "field", "idfield", "combobox"]);
  L0["rateindex"] = 0;
  if ($.truthy($.eq((await $.mv(L0["dataset"], "Active")), false))) {
    await $.mcall(L0["dataset"], "Open", []);
  }
  await $.mcall(L0["dataset"], "First", []);
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "Rate")), async ($t2) => { await $.set(C, "Rate", $t2); }), (await $.mv(L0["dataset"], "RecordCount"))])));
  await $.mcall((await $.mv(L0["combobox"], "Items")), "Clear", []);
  while ($.truthy($.not(((await $.mv(L0["dataset"], "Eof")))))) {
    await $.stmt((await $.mcall((await $.mv(L0["combobox"], "Items")), "Add", [(await $.mv((await $.mcall(L0["dataset"], "FieldByName", [L0["field"]])), "AsString"))])));
    { const $t3 = await $.iset((await $.v(C, "Rate")), [L0["rateindex"]], (await $.mv((await $.mcall(L0["dataset"], "FieldByName", [L0["idfield"]])), "AsInteger"))); if ($t3 !== undefined) { await $.set(C, "Rate", $t3); } }
    await $.mcall(L0["dataset"], "Next", []);
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["rateindex"], async ($t4) => { L0["rateindex"] = $t4; })])));
    await $.tick();
  }
  return L0.result;
}, {"params": ["DataSet", "Field", "IDfield", "ComboBox"], "kind": "procedure", "ptypes": ["TOracleDataSet", "String", "String", "TComboBox"]});
  U.method("TPayment_order", "PustToComboKOD", async function PustToComboKOD(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "field": $.copyArg(p1), "idfield": $.copyArg(p2), "combobox": $.copyArg(p3), result: undefined, "rateindex1": 0};
  await $.fixArgs(L0, ["dataset", "field", "idfield", "combobox"]);
  L0["rateindex1"] = 0;
  if ($.truthy($.eq((await $.mv(L0["dataset"], "Active")), false))) {
    await $.mcall(L0["dataset"], "Open", []);
  }
  await $.mcall(L0["dataset"], "First", []);
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "Rate1")), async ($t5) => { await $.set(C, "Rate1", $t5); }), (await $.mv(L0["dataset"], "RecordCount"))])));
  await $.mcall((await $.mv(L0["combobox"], "Items")), "Clear", []);
  while ($.truthy($.not(((await $.mv(L0["dataset"], "Eof")))))) {
    await $.stmt((await $.mcall((await $.mv(L0["combobox"], "Items")), "Add", [(await $.mv((await $.mcall(L0["dataset"], "FieldByName", [L0["field"]])), "AsString"))])));
    { const $t6 = await $.iset((await $.v(C, "Rate1")), [L0["rateindex1"]], (await $.mv((await $.mcall(L0["dataset"], "FieldByName", [L0["idfield"]])), "AsInteger"))); if ($t6 !== undefined) { await $.set(C, "Rate1", $t6); } }
    await $.mcall(L0["dataset"], "Next", []);
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["rateindex1"], async ($t7) => { L0["rateindex1"] = $t7; })])));
    await $.tick();
  }
  return L0.result;
}, {"params": ["DataSet", "Field", "IDfield", "ComboBox"], "kind": "procedure", "ptypes": ["TOracleDataSet", "String", "String", "TComboBox"]});
  U.method("TPayment_order", "DBNameChange", async function DBNameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBCod")), "Text", "");
  await $.mset((await $.v(C, "DBInn")), "Text", "");
  await $.mset((await $.v(C, "DBCorAcc")), "Text", "");
  await $.mset((await $.v(C, "DBSwift")), "Text", "");
  try {
    {
      const $t8 = (await $.mv((await $.v(C, "PaymentOrderDataMod")), "ODSBankInfo"));
      await $.stmt($.wcall([$t8], "Close", [], C));
      await $.mcall((await $.wv([$t8], "SQL", C, false)), "Clear", []);
      await $.mset((await $.wv([$t8], "SQL", C, false)), "Text", $.add("Select * From BankM Where id= ", (await $.wcall([$t8], "IntToStr", [(await $.idx((await $.wv([$t8], "Rate1", C, false)), [(await $.mv((await $.wv([$t8], "DBName", C, false)), "ItemIndex"))]))], C))));
      await $.stmt($.wcall([$t8], "Open", [], C));
      await $.mset((await $.wv([$t8], "DBCod", C, false)), "Text", (await $.mv((await $.wcall([$t8], "FieldByName", ["BANKCODE"], C)), "AsString")));
      await $.mset((await $.wv([$t8], "DBInn", C, false)), "Text", (await $.mv((await $.wcall([$t8], "FieldByName", ["INN"], C)), "AsString")));
      await $.mset((await $.wv([$t8], "DBCorAcc", C, false)), "Text", (await $.mv((await $.wcall([$t8], "FieldByName", ["KRNO"], C)), "AsString")));
      await $.mset((await $.wv([$t8], "DBSwift", C, false)), "Text", (await $.mv((await $.wcall([$t8], "FieldByName", ["SWIFT"], C)), "AsString")));
    }
  } finally {
    {
      const $t9 = (await $.mv((await $.v(C, "PaymentOrderDataMod")), "ODSBankInfo"));
      await $.stmt($.wcall([$t9], "Close", [], C));
      await $.mcall((await $.wv([$t9], "SQL", C, false)), "Clear", []);
      await $.mset((await $.wv([$t9], "SQL", C, false)), "Text", "Select * From BankM ");
      await $.stmt($.wcall([$t9], "Open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayment_order", "EAmmountExit", async function EAmmountExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "EAmmount")), "text")), ""))) {
    await $.mset((await $.v(C, "EAmmountW")), "text", (await $.call(C, "WithCoin", [(await $.mv((await $.v(C, "EAmmount")), "text"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayment_order", "EAmmountKeyPress", async function EAmmountKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await L0["key"].get()), "\r")), async () => ($.ne((await $.call(C, "Trim", [(await $.mv((await $.call(C, "TEdit", [L0["sender"]])), "Text"))])), "")))))) {
    await $.mset((await $.v(C, "EAmmountW")), "text", (await $.call(C, "WithCoin", [(await $.mv((await $.v(C, "EAmmount")), "text"))])));
  } else {
    if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPayment_order", "EDAInnChange", async function EDAInnChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "lengthstr": 0, "str": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["str"] = (await $.mv((L0["sender"]), "text"));
  L0["lengthstr"] = (await $.call(C, "Length", [L0["str"]]));
  if ($.truthy($.gt(L0["lengthstr"], 10))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Field inn contains 10 numbers!"])));
    await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["str"], async ($t10) => { L0["str"] = $t10; }), 11, $.sub(L0["lengthstr"], 10)])));
    await $.mset(L0["sender"], "text", L0["str"]);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayment_order", "EditDebtAccNoDblClick", async function EditDebtAccNoDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.mv((await $.v(C, "PaymentOrderDataMod")), "ODSAccounts_PyaOrder"));
    await $.stmt($.wcall([$t11], "Close", [], C));
    await $.mcall((await $.wv([$t11], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t11], "SQL", C, false)), "Text", (await $.mv((await $.mv((await $.mv((await $.wv([$t11], "PaymentOrderDataMod", C, false)), "rezerv")), "sql")), "Text")));
    await $.stmt($.wcall([$t11], "Open", [], C));
  }
  await $.mset((await $.v(C, "FormAccounts_PaymetOreder")), "DebOrKred", true);
  await $.mset((await $.v(C, "FormAccounts_PaymetOreder")), "v_AccNo", (await $.mv((await $.v(C, "EditDebtAccNo")), "Text")));
  await $.mcall((await $.v(C, "FormAccounts_PaymetOreder")), "ShowModal", []);
  await $.mset((await $.v(C, "EditDebtAccNo")), "Text", (await $.mv((await $.v(C, "FormAccounts_PaymetOreder")), "v_AccNo")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayment_order", "EKAInnChange", async function EKAInnChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "lengthstr": 0, "str": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["str"] = (await $.mv((L0["sender"]), "text"));
  L0["lengthstr"] = (await $.call(C, "Length", [L0["str"]]));
  if ($.truthy($.gt(L0["lengthstr"], 10))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Field inn contains 10 numbers!"])));
    await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["str"], async ($t12) => { L0["str"] = $t12; }), 11, $.sub(L0["lengthstr"], 10)])));
    await $.mset(L0["sender"], "text", L0["str"]);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayment_order", "EKBCodKeyPress", async function EKBCodKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    {
      const $t13 = (await $.mv((await $.v(C, "PaymentOrderDataMod")), "ODSBankM"));
      if ($.truthy((await $.wcall([$t13], "Locate", ["BANKCODE", (await $.mv((await $.wv([$t13], "EKBCod", C, false)), "Text")), [(await $.wv([$t13], "loCaseInsensitive", C, false)), (await $.wv([$t13], "loPartialKey", C, false))]], C)))) {
        await $.mset((await $.wv([$t13], "CBKBName", C, false)), "Text", (await $.mv((await $.wcall([$t13], "FieldByName", ["NAME"], C)), "AsString")));
        await $.mset((await $.wv([$t13], "EKBInn", C, false)), "Text", (await $.mv((await $.wcall([$t13], "FieldByName", ["INN"], C)), "AsString")));
        await $.mset((await $.wv([$t13], "EKBCorAcc", C, false)), "Text", (await $.mv((await $.wcall([$t13], "FieldByName", ["KRNO"], C)), "AsString")));
        await $.mset((await $.wv([$t13], "EKBSwift", C, false)), "Text", (await $.mv((await $.wcall([$t13], "FieldByName", ["SWIFT"], C)), "AsString")));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPayment_order", "EPNumKeyPress", async function EPNumKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await L0["key"].get()), "\r")), async () => ($.ne((await $.call(C, "Trim", [(await $.mv((await $.call(C, "TEdit", [L0["sender"]])), "Text"))])), "")))))) {
    await $.mset((await $.v(C, "EAmmountW")), "text", (await $.call(C, "WithCoin", [(await $.mv((await $.v(C, "EAmmount")), "text"))])));
  } else {
    if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPayment_order", "ExtractMonth", async function ExtractMonth(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"datetime": $.copyArg(p0), "decimalsymbol": $.copyArg(p1), result: '', "year": 0, "month": 0, "day": 0};
  await $.fixArgs(L0, ["datetime", "decimalsymbol"]);
  L0["months"] = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"];
  await $.stmt((await $.call(C, "DecodeDate", [L0["datetime"], $.ref(async () => L0["year"], async ($t14) => { L0["year"] = $t14; }), $.ref(async () => L0["month"], async ($t15) => { L0["month"] = $t15; }), $.ref(async () => L0["day"], async ($t16) => { L0["day"] = $t16; })])));
  L0["result"] = $.add($.add($.add($.add((await $.call(C, "IntToStr", [L0["day"]])), L0["decimalsymbol"]), (await $.idx(L0["months"], [L0["month"]]))), L0["decimalsymbol"]), (await $.call(C, "IntToStr", [L0["year"]])));
  return L0.result;
}, {"params": ["DateTime", "DecimalSymbol"], "kind": "function", "ptypes": ["TDateTime", "String"]});
  U.method("TPayment_order", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBName")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "CBKBName")), "ItemIndex", (-(1)));
  await $.mcall((await $.v(C, "DBCod")), "Clear", []);
  await $.mcall((await $.v(C, "EKBCod")), "Clear", []);
  await $.mcall((await $.v(C, "DBInn")), "Clear", []);
  await $.mcall((await $.v(C, "EKBInn")), "Clear", []);
  await $.mcall((await $.v(C, "DBCorAcc")), "Clear", []);
  await $.mcall((await $.v(C, "EKBCorAcc")), "Clear", []);
  await $.mcall((await $.v(C, "DBSwift")), "Clear", []);
  await $.mcall((await $.v(C, "EKBSwift")), "Clear", []);
  await $.mcall((await $.v(C, "EDAName")), "Clear", []);
  await $.mcall((await $.v(C, "EditDebtAccNo")), "Clear", []);
  await $.mcall((await $.v(C, "EDAInn")), "Clear", []);
  await $.mset((await $.v(C, "CheckBox")), "Checked", false);
  await $.mcall((await $.v(C, "EAmmount")), "Clear", []);
  await $.mcall((await $.v(C, "EAmmountW")), "Clear", []);
  await $.mcall((await $.v(C, "Edit1")), "Clear", []);
  await $.mset((await $.v(C, "mod_bank")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "EKAName")), "Clear", []);
  await $.mcall((await $.v(C, "EKANum")), "Clear", []);
  await $.mcall((await $.v(C, "EKAInn")), "Clear", []);
  await $.mcall((await $.v(C, "EAssignment")), "Clear", []);
  await $.mcall((await $.v(C, "EExtra")), "Clear", []);
  await $.mcall((await $.v(C, "EPNum")), "Clear", []);
  await $.mcall((await $.v(C, "Edit4")), "Clear", []);
  await $.mset((await $.v(C, "DTPayment")), "DateTime", (await $.mcall((await $.mv((await $.v(C, "PaymentOrderDataMod")), "OPPayment")), "CallDateFunction", ["GetCurrentDate", []])));
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TPayment_order", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Payment_order", Self);
  await $.set(C, "PaymentOrderDataMod", (await $.mcall((await $.v(C, "TPaymentOrderDataMod")), "Create", [Self])));
  await $.set(C, "QRMainReport", (await $.mcall((await $.v(C, "TQRMainReport")), "Create", [Self])));
  await $.set(C, "QRCommonReport", (await $.mcall((await $.v(C, "TQRCommonReport")), "Create", [Self])));
  await $.set(C, "FormAccounts_PaymetOreder", (await $.mcall((await $.v(C, "TFormAccounts_PaymetOreder")), "Create", [Self])));
  await $.set(C, "QRMainReport_cap", (await $.mcall((await $.v(C, "TQRMainReport_cap")), "Create", [Self])));
  await $.set(C, "QRCommonReport_cap", (await $.mcall((await $.v(C, "TQRCommonReport_cap")), "Create", [Self])));
  {
    const $t17 = (await $.v(C, "PaymentOrderDataMod"));
    await $.mcall((await $.wv([$t17], "ODSAccounts_PyaOrder", C, false)), "Open", []);
    await $.mcall((await $.wv([$t17], "ODSBankInfo", C, false)), "Open", []);
    await $.mcall((await $.wv([$t17], "ODSBankM", C, false)), "Open", []);
    await $.stmt((await $.mcall((await $.wv([$t17], "Payment_order", C, false)), "PustToComboID", [(await $.wv([$t17], "ODSBankM", C, false)), "NAME", "ID", (await $.wv([$t17], "CBKBName", C, false))])));
    await $.stmt((await $.mcall((await $.wv([$t17], "Payment_order", C, false)), "PustToComboKod", [(await $.wv([$t17], "ODSBankInfo", C, false)), "NAME", "ID", (await $.wv([$t17], "DBName", C, false))])));
    await $.mset((await $.wv([$t17], "DTPayment", C, false)), "DateTime", (await $.mcall((await $.wv([$t17], "OPPayment", C, false)), "CallDateFunction", ["GetCurrentDate", []])));
    await $.mset((await $.wv([$t17], "CheckBox", C, false)), "Checked", (await $.mcall((await $.wv([$t17], "OPPayment", C, false)), "CallBooleanFunction", ["isAccountDetails", []])));
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayment_order", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "Rate"))])))) {
    await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "Rate")), async ($t18) => { await $.set(C, "Rate", $t18); }), 0])));
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "Rate1"))])))) {
    await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "Rate1")), async ($t19) => { await $.set(C, "Rate1", $t19); }), 0])));
  }
  await $.mcall((await $.v(C, "Payment_order")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayment_order", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "odeme_trid")), ""))) {
    {
      const $t20 = (await $.v(C, "PaymentOrderDataMod"));
      const $t21 = (await $.wv([$t20], "ODS_DEBIT", C, false));
      await $.stmt($.wcall([$t20, $t21], "close", [], C));
      await $.wset([$t20, $t21], "a", (await $.wcall([$t20, $t21], "strtoint", [(await $.wv([$t20, $t21], "odeme_trid", C, false))], C)), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
      { const $t22 = await $.iset((await $.wv([$t20, $t21], "SQL", C, false)), [5], $.add("and t.id =", (await $.wcall([$t20, $t21], "inttostr", [(await $.wv([$t20, $t21], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))], C)))); if ($t22 !== undefined) { await $.wset([$t20, $t21], "SQL", $t22, C); } }
      await $.stmt($.wcall([$t20, $t21], "open", [], C));
      await $.mset((await $.wv([$t20, $t21], "DBName", C, false)), "Text", (await $.mv((await $.wcall([$t20, $t21], "FieldByName", ["BANK_NAME"], C)), "AsString")));
      await $.mset((await $.wv([$t20, $t21], "DBCod", C, false)), "Text", (await $.mv((await $.wcall([$t20, $t21], "FieldByName", ["BANKCODE"], C)), "AsString")));
      await $.mset((await $.wv([$t20, $t21], "DBInn", C, false)), "Text", (await $.mv((await $.wcall([$t20, $t21], "FieldByName", ["inn"], C)), "AsString")));
      await $.mset((await $.wv([$t20, $t21], "DBCorAcc", C, false)), "Text", (await $.mv((await $.wcall([$t20, $t21], "FieldByName", ["KRNO"], C)), "AsString")));
      await $.mset((await $.wv([$t20, $t21], "DBSwift", C, false)), "Text", (await $.mv((await $.wcall([$t20, $t21], "FieldByName", ["swift"], C)), "AsString")));
      await $.mset((await $.wv([$t20, $t21], "EDAName", C, false)), "Text", (await $.mv((await $.wcall([$t20, $t21], "FieldByName", ["NAME"], C)), "AsString")));
      await $.mset((await $.wv([$t20, $t21], "EditDebtAccNo", C, false)), "Text", (await $.mv((await $.wcall([$t20, $t21], "FieldByName", ["DEBITACCNO"], C)), "AsString")));
      await $.mset((await $.wv([$t20, $t21], "EDAInn", C, false)), "Text", (await $.mv((await $.wcall([$t20, $t21], "FieldByName", ["cust_inn"], C)), "AsString")));
      await $.mset((await $.wv([$t20, $t21], "EAmmount", C, false)), "Text", (await $.mv((await $.wcall([$t20, $t21], "FieldByName", ["DEBITAMOUNT"], C)), "AsString")));
      if ($.truthy($.ne((await $.mv((await $.wv([$t20, $t21], "EAmmount", C, false)), "text")), ""))) {
        await $.mset((await $.wv([$t20, $t21], "EAmmountW", C, false)), "text", (await $.wcall([$t20, $t21], "WithCoin", [(await $.mv((await $.wv([$t20, $t21], "EAmmount", C, false)), "text"))], C)));
      }
    }
    {
      const $t23 = (await $.v(C, "PaymentOrderDataMod"));
      const $t24 = (await $.wv([$t23], "ODS_Kredit", C, false));
      await $.stmt($.wcall([$t23, $t24], "close", [], C));
      await $.wset([$t23, $t24], "a", (await $.wcall([$t23, $t24], "strtoint", [(await $.wv([$t23, $t24], "odeme_trid", C, false))], C)), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
      { const $t25 = await $.iset((await $.wv([$t23, $t24], "SQL", C, false)), [5], $.add("and t.id =", (await $.wcall([$t23, $t24], "inttostr", [(await $.wv([$t23, $t24], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))], C)))); if ($t25 !== undefined) { await $.wset([$t23, $t24], "SQL", $t25, C); } }
      await $.stmt($.wcall([$t23, $t24], "open", [], C));
      await $.mset((await $.wv([$t23, $t24], "CBKBName", C, false)), "Text", (await $.mv((await $.wcall([$t23, $t24], "FieldByName", ["BANK_NAME"], C)), "AsString")));
      await $.mset((await $.wv([$t23, $t24], "EKBCod", C, false)), "Text", (await $.mv((await $.wcall([$t23, $t24], "FieldByName", ["BANKCODE"], C)), "AsString")));
      await $.mset((await $.wv([$t23, $t24], "EKBInn", C, false)), "Text", (await $.mv((await $.wcall([$t23, $t24], "FieldByName", ["INN"], C)), "AsString")));
      await $.mset((await $.wv([$t23, $t24], "EKBCorAcc", C, false)), "Text", (await $.mv((await $.wcall([$t23, $t24], "FieldByName", ["krno"], C)), "AsString")));
      await $.mset((await $.wv([$t23, $t24], "EKBSwift", C, false)), "Text", (await $.mv((await $.wcall([$t23, $t24], "FieldByName", ["SWIFT"], C)), "AsString")));
      await $.mset((await $.wv([$t23, $t24], "EKAName", C, false)), "Text", (await $.mv((await $.wcall([$t23, $t24], "FieldByName", ["NAME"], C)), "AsString")));
      await $.mset((await $.wv([$t23, $t24], "EKANum", C, false)), "Text", (await $.mv((await $.wcall([$t23, $t24], "FieldByName", ["CREDITACCNO"], C)), "AsString")));
      await $.mset((await $.wv([$t23, $t24], "EKAInn", C, false)), "Text", (await $.mv((await $.wcall([$t23, $t24], "FieldByName", ["CUST_INN"], C)), "AsString")));
      await $.mset((await $.wv([$t23, $t24], "EAssignment", C, false)), "Text", (await $.mv((await $.wcall([$t23, $t24], "FieldByName", ["TR_NAME"], C)), "AsString")));
    }
    await $.set(C, "odeme_trid", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayment_order", "Kopyal1Click", async function Kopyal1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "a": 0, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t26 = (await $.v(C, "QRMainReport_cap"));
    if ($.truthy($.eq((await $.mv((await $.wv([$t26], "EPNum", C, false)), "Text")), ""))) {
      await $.stmt((await $.wcall([$t26], "showmessage", ["Ödəmə tapşırığının № -ni daxil edin  !"], C)));
      return L0.result;
    }
    if ($.truthy((await $.mv((await $.mv((await $.wv([$t26], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "Active")))) {
      await $.mcall((await $.mv((await $.wv([$t26], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "close", []);
    }
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t26], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "SetVariable", [":acc_no", (await $.mv((await $.wv([$t26], "EditDebtAccNo", C, false)), "Text"))])));
    await $.mcall((await $.mv((await $.wv([$t26], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "open", []);
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t26], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "FieldByName", ["old_acc_no"])), "asinteger")), 1))) {
      await $.mset((await $.wv([$t26], "QRDACC_NO", C, false)), "Caption", (await $.mv((await $.mcall((await $.mv((await $.wv([$t26], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "FieldByName", ["old"])), "AsString")));
      await $.mset((await $.wv([$t26], "QRDACC_NO1", C, false)), "Caption", (await $.mv((await $.mcall((await $.mv((await $.wv([$t26], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "FieldByName", ["old"])), "AsString")));
    } else {
      if ($.truthy($.eq((await $.mv((await $.wv([$t26], "CheckBox", C, false)), "Checked")), (await $.wv([$t26], "true", C, false))))) {
        await $.wset([$t26], "i", (await $.wcall([$t26], "pos", ["_", (await $.mv((await $.wv([$t26], "EditDebtAccNo", C, false)), "Text"))], C)), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        await $.wset([$t26], "a", (await $.wcall([$t26], "Length", [(await $.mv((await $.wv([$t26], "EditDebtAccNo", C, false)), "Text"))], C)), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
        await $.wset([$t26], "s", (await $.mv((await $.wv([$t26], "EditDebtAccNo", C, false)), "Text")), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
        await $.stmt((await $.wcall([$t26], "delete", [$.ref(async () => (await $.wv([$t26], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), async ($t27) => { await $.wset([$t26], "s", $t27, { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }); }), (await $.wv([$t26], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t26], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))], C)));
        await $.mset((await $.wv([$t26], "QRDACC_NO", C, false)), "Caption", (await $.wv([$t26], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
        await $.mset((await $.wv([$t26], "QRDACC_NO1", C, false)), "Caption", (await $.wv([$t26], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      }
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t26], "CheckBox", C, false)), "Checked")), (await $.wv([$t26], "false", C, false))))) {
      await $.mset((await $.wv([$t26], "QRDACC_NO", C, false)), "Caption", (await $.mv((await $.wv([$t26], "DBCorAcc", C, false)), "Text")));
      await $.mset((await $.wv([$t26], "QRDACC_NO1", C, false)), "Caption", (await $.mv((await $.wv([$t26], "DBCorAcc", C, false)), "Text")));
    }
    await $.mset((await $.wv([$t26], "QRNo", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EPNum", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRDate", C, false)), "Caption", (await $.wcall([$t26], "datetostr", [(await $.mv((await $.wv([$t26], "DTPayment", C, false)), "DateTime"))], C)));
    await $.mset((await $.wv([$t26], "QRDName", C, false)), "Caption", (await $.mv((await $.wv([$t26], "DBName", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRDBCOD", C, false)), "Caption", (await $.mv((await $.wv([$t26], "DBCod", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRDBINN", C, false)), "Caption", (await $.mv((await $.wv([$t26], "DBInn", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRDBCORACC", C, false)), "Caption", (await $.mv((await $.wv([$t26], "DBCorAcc", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRDBSWIFT", C, false)), "Caption", (await $.mv((await $.wv([$t26], "DBSwift", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRKBNAME", C, false)), "Caption", (await $.mv((await $.wv([$t26], "CBKBName", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRKBCOD", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EKBCod", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRKBINN", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EKBInn", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRKBCORACC", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EKBCorAcc", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRKBSWIFT", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EKBSwift", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRMOD_BANK", C, false)), "Caption", (await $.mv((await $.wv([$t26], "mod_bank", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRDACCNAME", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EDAName", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRDBACCINN1", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EDAInn", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRKACCNAME", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EKAName", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRKACC_NO", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EKANum", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRKACCINN", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EKAInn", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRAmmount1", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EAmmount", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRAmmountW1", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EAmmountW", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRASSIGNMENT", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EAssignment", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QREXTRA", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EExtra", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRBUDGETCLASS", C, false)), "Caption", (await $.mv((await $.wv([$t26], "Edit1", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRBUDGETLEVEL", C, false)), "Caption", (await $.mv((await $.wv([$t26], "edit4", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRNo1", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EPNum", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRDate1", C, false)), "Caption", (await $.wcall([$t26], "datetostr", [(await $.mv((await $.wv([$t26], "DTPayment", C, false)), "DateTime"))], C)));
    await $.mset((await $.wv([$t26], "QRDName1", C, false)), "Caption", (await $.mv((await $.wv([$t26], "DBName", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRDBCOD1", C, false)), "Caption", (await $.mv((await $.wv([$t26], "DBCod", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRDBINN1", C, false)), "Caption", (await $.mv((await $.wv([$t26], "DBInn", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRDBCORACC1", C, false)), "Caption", (await $.mv((await $.wv([$t26], "DBCorAcc", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRDBSWIFT1", C, false)), "Caption", (await $.mv((await $.wv([$t26], "DBSwift", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRKBNAME1", C, false)), "Caption", (await $.mv((await $.wv([$t26], "CBKBName", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRKBCOD1", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EKBCod", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRKBINN1", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EKBInn", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRKBCORACC1", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EKBCorAcc", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRKBSWIFT1", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EKBSwift", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRMOD_BANK1", C, false)), "Caption", (await $.mv((await $.wv([$t26], "mod_bank", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRDACCNAME1", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EDAName", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRDBACCINN11", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EDAInn", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRKACCNAME1", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EKAName", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRKACC_NO1", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EKANum", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRKACCINN1", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EKAInn", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRAmmount11", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EAmmount", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRAmmountW11", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EAmmountW", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRASSIGNMENT1", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EAssignment", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QREXTRA1", C, false)), "Caption", (await $.mv((await $.wv([$t26], "EExtra", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRBUDGETCLASS1", C, false)), "Caption", (await $.mv((await $.wv([$t26], "Edit1", C, false)), "Text")));
    await $.mset((await $.wv([$t26], "QRBUDGETLEVEL1", C, false)), "Caption", (await $.mv((await $.wv([$t26], "edit4", C, false)), "Text")));
    await $.stmt($.wcall([$t26], "Preview", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayment_order", "CBKBNameChange", async function CBKBNameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EKBCod")), "Text", "");
  await $.mset((await $.v(C, "EKBInn")), "Text", "");
  await $.mset((await $.v(C, "EKBCorAcc")), "Text", "");
  await $.mset((await $.v(C, "EKBSwift")), "Text", "");
  try {
    {
      const $t28 = (await $.mv((await $.v(C, "PaymentOrderDataMod")), "ODSBankM"));
      await $.stmt($.wcall([$t28], "Close", [], C));
      await $.mcall((await $.wv([$t28], "SQL", C, false)), "Clear", []);
      await $.mset((await $.wv([$t28], "SQL", C, false)), "Text", $.add("Select * From BankM Where ID= ", (await $.wcall([$t28], "IntToStr", [(await $.idx((await $.wv([$t28], "Rate", C, false)), [(await $.mv((await $.wv([$t28], "CBKBName", C, false)), "ItemIndex"))]))], C))));
      await $.stmt($.wcall([$t28], "Open", [], C));
      await $.mset((await $.wv([$t28], "EKBCod", C, false)), "Text", (await $.mv((await $.wcall([$t28], "FieldByName", ["BANKCODE"], C)), "AsString")));
      await $.mset((await $.wv([$t28], "EKBInn", C, false)), "Text", (await $.mv((await $.wcall([$t28], "FieldByName", ["INN"], C)), "AsString")));
      await $.mset((await $.wv([$t28], "EKBCorAcc", C, false)), "Text", (await $.mv((await $.wcall([$t28], "FieldByName", ["KRNO"], C)), "AsString")));
      await $.mset((await $.wv([$t28], "EKBSwift", C, false)), "Text", (await $.mv((await $.wcall([$t28], "FieldByName", ["SWIFT"], C)), "AsString")));
    }
  } finally {
    {
      const $t29 = (await $.mv((await $.v(C, "PaymentOrderDataMod")), "ODSBankM"));
      await $.stmt($.wcall([$t29], "Close", [], C));
      await $.mcall((await $.wv([$t29], "SQL", C, false)), "Clear", []);
      await $.mset((await $.wv([$t29], "SQL", C, false)), "Text", "Select * From BankM ");
      await $.stmt($.wcall([$t29], "Open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayment_order", "CleanUp", async function CleanUp(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "compcount": 0};
  { const $t30 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["compcount"] = 0;
    let $t31 = true;
    for (;;) {
      if (!$t31) { L0["compcount"] = $.succ(L0["compcount"], 1); }
      $t31 = false;
      if (!($.ord(L0["compcount"]) <= $.ord($t30))) break;
      if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["compcount"]])), "TEdit")))) {
        await $.mset((await $.idx((await $.v(C, "Components")), [L0["compcount"]])), "Text", "");
      } else {
        if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["compcount"]])), "TComboBox")))) {
          await $.mset((await $.idx((await $.v(C, "Components")), [L0["compcount"]])), "Text", "");
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPayment_order", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "pdate": 0, "ammunt": null};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CBDANum")), "text", (await $.mv((await $.v(C, "EditDebtAccNo")), "Text")));
  L0["pdate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPayment")), "DateTime"))]));
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EPNum")), "Text"))])), ""))) {
    await $.stmt((await $.call(C, "SHOWMESSAGE", ["Ödəmə tapşırığının nömrəsin daxil edin!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EAmmount")), "Text"))])), ""))) {
    await $.stmt((await $.call(C, "SHOWMESSAGE", ["Məbləği  daxil edin!"])));
    return L0.result;
  }
  L0["ammunt"] = (await $.mv((await $.v(C, "EAmmount")), "Text"));
  if ($.truthy($.eq((await $.v(C, "isUpdate")), false))) {
    if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Do you want to transfer this payment?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
      {
        const $t32 = (await $.mv((await $.v(C, "PaymentOrderDataMod")), "OPPayment"));
        await $.stmt((await $.wcall([$t32], "CallProcedure", ["add_payment", [(await $.wv([$t32], "PDate", { get: async () => L0["pdate"], set: async (v) => { L0["pdate"] = v; }, local: true }, false)), (await $.wcall([$t32], "strtoint", [(await $.mv((await $.wv([$t32], "EPNum", C, false)), "text"))], C)), (await $.mv((await $.wv([$t32], "DBName", C, false)), "text")), (await $.mv((await $.wv([$t32], "DBCod", C, false)), "text")), (await $.mv((await $.wv([$t32], "DBInn", C, false)), "text")), (await $.mv((await $.wv([$t32], "DBCorAcc", C, false)), "text")), (await $.mv((await $.wv([$t32], "DBSwift", C, false)), "text")), (await $.mv((await $.wv([$t32], "CBDANum", C, false)), "text")), (await $.mv((await $.wv([$t32], "EDAName", C, false)), "text")), (await $.mv((await $.wv([$t32], "EDAInn", C, false)), "text")), (await $.mv((await $.wv([$t32], "CBKBName", C, false)), "text")), (await $.mv((await $.wv([$t32], "EKBCod", C, false)), "text")), (await $.mv((await $.wv([$t32], "EKBInn", C, false)), "text")), (await $.mv((await $.wv([$t32], "EKBCorAcc", C, false)), "text")), (await $.mv((await $.wv([$t32], "EKBSwift", C, false)), "text")), (await $.mv((await $.wv([$t32], "EKANum", C, false)), "text")), (await $.mv((await $.wv([$t32], "EKAName", C, false)), "text")), (await $.mv((await $.wv([$t32], "EKAInn", C, false)), "text")), (await $.wv([$t32], "ammunt", { get: async () => L0["ammunt"], set: async (v) => { L0["ammunt"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t32], "EAssignment", C, false)), "text")), (await $.mv((await $.wv([$t32], "EExtra", C, false)), "text")), (await $.mv((await $.wv([$t32], "Mod_Bank", C, false)), "text")), (await $.mv((await $.wv([$t32], "edit1", C, false)), "text")), (await $.mv((await $.wv([$t32], "edit4", C, false)), "text"))]], C)));
      }
    }
  } else {
    if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Do you want to change this payment?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
      {
        const $t33 = (await $.mv((await $.v(C, "PaymentOrderDataMod")), "OPPayment"));
        const $t34 = (await $.mv((await $.wv([$t33], "PaymentOrderDataMod", C, false)), "ODSArchive"));
        await $.stmt((await $.wcall([$t33, $t34], "CallProcedure", ["update_payment", [(await $.mv((await $.wcall([$t33, $t34], "FieldByName", ["ID"], C)), "AsInteger")), (await $.wv([$t33, $t34], "PDate", { get: async () => L0["pdate"], set: async (v) => { L0["pdate"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t33, $t34], "EPNum", C, false)), "text")), (await $.mv((await $.wv([$t33, $t34], "DBName", C, false)), "text")), (await $.mv((await $.wv([$t33, $t34], "DBCod", C, false)), "text")), (await $.mv((await $.wv([$t33, $t34], "DBInn", C, false)), "text")), (await $.mv((await $.wv([$t33, $t34], "DBCorAcc", C, false)), "text")), (await $.mv((await $.wv([$t33, $t34], "DBSwift", C, false)), "text")), (await $.mv((await $.wv([$t33, $t34], "CBDANum", C, false)), "text")), (await $.mv((await $.wv([$t33, $t34], "EDAName", C, false)), "text")), (await $.mv((await $.wv([$t33, $t34], "EDAInn", C, false)), "text")), (await $.mv((await $.wv([$t33, $t34], "CBKBName", C, false)), "text")), (await $.mv((await $.wv([$t33, $t34], "EKBCod", C, false)), "text")), (await $.mv((await $.wv([$t33, $t34], "EKBInn", C, false)), "text")), (await $.mv((await $.wv([$t33, $t34], "EKBCorAcc", C, false)), "text")), (await $.mv((await $.wv([$t33, $t34], "EKBSwift", C, false)), "text")), (await $.mv((await $.wv([$t33, $t34], "EKANum", C, false)), "text")), (await $.mv((await $.wv([$t33, $t34], "EKAName", C, false)), "text")), (await $.mv((await $.wv([$t33, $t34], "EKAInn", C, false)), "text")), (await $.wcall([$t33, $t34], "strtofloat", [(await $.mv((await $.wv([$t33, $t34], "EAmmount", C, false)), "text"))], C)), (await $.mv((await $.wv([$t33, $t34], "EAssignment", C, false)), "text")), (await $.mv((await $.wv([$t33, $t34], "EExtra", C, false)), "text")), (await $.mv((await $.wv([$t33, $t34], "Mod_Bank", C, false)), "text")), (await $.mv((await $.wv([$t33, $t34], "edit1", C, false)), "text")), (await $.mv((await $.wv([$t33, $t34], "edit4", C, false)), "text"))]], C)));
      }
      await $.set(C, "isUpdate", false);
    }
  }
  await $.stmt($.call(C, "CleanUp", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayment_order", "ToolButton4Click", async function ToolButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "CleanUp", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayment_order", "ToolButton8Click", async function ToolButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "FrmArchive", (await $.mcall((await $.v(C, "TFrmArchive")), "Create", [Self])));
    {
      const $t35 = (await $.mv((await $.v(C, "PaymentOrderDataMod")), "ODSArchive"));
      if ($.truthy($.eq((await $.wv([$t35], "Active", C, false)), (await $.wv([$t35], "false", C, false))))) {
        await $.stmt($.wcall([$t35], "Open", [], C));
      } else {
        await $.stmt($.wcall([$t35], "Refresh", [], C));
      }
    }
    await $.mcall((await $.v(C, "FrmArchive")), "ShowModal", []);
  } finally {
    await $.mcall((await $.v(C, "FrmArchive")), "Release", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayment_order", "Vahidformada1Click", async function Vahidformada1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "a": 0, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t36 = (await $.v(C, "QRCommonReport_cap"));
    if ($.truthy($.eq((await $.mv((await $.wv([$t36], "EPNum", C, false)), "Text")), ""))) {
      await $.stmt((await $.wcall([$t36], "showmessage", ["Ödəmə tapşırığının № -ni daxil edin  !"], C)));
      return L0.result;
    }
    if ($.truthy((await $.mv((await $.mv((await $.wv([$t36], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "Active")))) {
      await $.mcall((await $.mv((await $.wv([$t36], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "close", []);
    }
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t36], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "SetVariable", [":acc_no", (await $.mv((await $.wv([$t36], "EditDebtAccNo", C, false)), "Text"))])));
    await $.mcall((await $.mv((await $.wv([$t36], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "open", []);
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t36], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "FieldByName", ["old_acc_no"])), "asinteger")), 1))) {
      await $.mset((await $.wv([$t36], "QRDBACC_NO", C, false)), "Caption", (await $.mv((await $.mcall((await $.mv((await $.wv([$t36], "PaymentOrderDataMod", C, false)), "ODS_Acc_symbol")), "FieldByName", ["old"])), "AsString")));
    } else {
      if ($.truthy($.eq((await $.mv((await $.wv([$t36], "CheckBox", C, false)), "Checked")), (await $.wv([$t36], "true", C, false))))) {
        await $.wset([$t36], "i", (await $.wcall([$t36], "pos", ["_", (await $.mv((await $.wv([$t36], "EditDebtAccNo", C, false)), "Text"))], C)), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        await $.wset([$t36], "a", (await $.wcall([$t36], "Length", [(await $.mv((await $.wv([$t36], "EditDebtAccNo", C, false)), "Text"))], C)), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
        await $.wset([$t36], "s", (await $.mv((await $.wv([$t36], "EditDebtAccNo", C, false)), "Text")), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
        await $.stmt((await $.wcall([$t36], "delete", [$.ref(async () => (await $.wv([$t36], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), async ($t37) => { await $.wset([$t36], "s", $t37, { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }); }), (await $.wv([$t36], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t36], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))], C)));
        await $.mset((await $.wv([$t36], "QRDBACC_NO", C, false)), "Caption", (await $.wv([$t36], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)));
      }
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t36], "CheckBox", C, false)), "Checked")), (await $.wv([$t36], "false", C, false))))) {
      await $.mset((await $.wv([$t36], "QRDBACC_NO", C, false)), "Caption", "");
      await $.mset((await $.wv([$t36], "QRDBACC_NO", C, false)), "Caption", (await $.mv((await $.wv([$t36], "DBCorAcc", C, false)), "Text")));
    }
    await $.mset((await $.wv([$t36], "QRKBank_CorAcc", C, false)), "Caption", (await $.mv((await $.wv([$t36], "EKBCorAcc", C, false)), "Text")));
    await $.mset((await $.wv([$t36], "QRLabel4", C, false)), "Caption", (await $.mv((await $.wv([$t36], "EPNum", C, false)), "Text")));
    await $.mset((await $.wv([$t36], "QRDate", C, false)), "Caption", (await $.wcall([$t36], "datetostr", [(await $.mv((await $.wv([$t36], "DTPayment", C, false)), "DateTime"))], C)));
    await $.mset((await $.wv([$t36], "QRDBank_name", C, false)), "Caption", (await $.mv((await $.wv([$t36], "DBName", C, false)), "Text")));
    await $.mset((await $.wv([$t36], "QRDBank_code", C, false)), "Caption", (await $.mv((await $.wv([$t36], "dbcod", C, false)), "Text")));
    await $.mset((await $.wv([$t36], "QRDBank_inn", C, false)), "Caption", (await $.mv((await $.wv([$t36], "dbinn", C, false)), "Text")));
    await $.mset((await $.wv([$t36], "QRDBank_CorAcc", C, false)), "Caption", (await $.mv((await $.wv([$t36], "DBCorAcc", C, false)), "Text")));
    await $.mset((await $.wv([$t36], "QRDBnk_SIWFT", C, false)), "Caption", (await $.mv((await $.wv([$t36], "DBSwift", C, false)), "text")));
    await $.mset((await $.wv([$t36], "QRKBank_name", C, false)), "Caption", (await $.mv((await $.wv([$t36], "CBKBName", C, false)), "Text")));
    await $.mset((await $.wv([$t36], "QRKBank_code", C, false)), "Caption", (await $.mv((await $.wv([$t36], "EKBCod", C, false)), "Text")));
    await $.mset((await $.wv([$t36], "QRKBank_inn", C, false)), "Caption", (await $.mv((await $.wv([$t36], "EKBInn", C, false)), "Text")));
    await $.mset((await $.wv([$t36], "QRKBnk_SIWFT", C, false)), "Caption", (await $.mv((await $.wv([$t36], "EKBSwift", C, false)), "Text")));
    await $.mset((await $.wv([$t36], "QRMOD_BANK", C, false)), "Caption", (await $.mv((await $.wv([$t36], "mod_bank", C, false)), "Text")));
    await $.mset((await $.wv([$t36], "QRDBACCNAME", C, false)), "Caption", (await $.mv((await $.wv([$t36], "EDAName", C, false)), "Text")));
    await $.mset((await $.wv([$t36], "QRDBACCINN", C, false)), "Caption", (await $.mv((await $.wv([$t36], "EDAInn", C, false)), "Text")));
    await $.mset((await $.wv([$t36], "QRKBACCNAME", C, false)), "Caption", (await $.mv((await $.wv([$t36], "EKAName", C, false)), "Text")));
    await $.mset((await $.wv([$t36], "QRKBACC_NO", C, false)), "Caption", (await $.mv((await $.wv([$t36], "EKANum", C, false)), "Text")));
    await $.mset((await $.wv([$t36], "QRKBACCINN", C, false)), "Caption", (await $.mv((await $.wv([$t36], "EKAInn", C, false)), "Text")));
    await $.mset((await $.wv([$t36], "QRAmmount", C, false)), "Caption", (await $.mv((await $.wv([$t36], "EAmmount", C, false)), "Text")));
    await $.mset((await $.wv([$t36], "QRAmmountW", C, false)), "Caption", (await $.mv((await $.wv([$t36], "EAmmountW", C, false)), "Text")));
    await $.mset((await $.wv([$t36], "QRASSIGNMENT", C, false)), "Caption", (await $.mv((await $.wv([$t36], "EAssignment", C, false)), "Text")));
    await $.mset((await $.wv([$t36], "QREXTRA", C, false)), "Caption", (await $.mv((await $.wv([$t36], "EExtra", C, false)), "Text")));
    await $.mset((await $.wv([$t36], "QRBUDGETCLASS", C, false)), "Caption", (await $.mv((await $.wv([$t36], "Edit1", C, false)), "Text")));
    await $.mset((await $.wv([$t36], "QRBUDGETLEVEL", C, false)), "Caption", (await $.mv((await $.wv([$t36], "Edit4", C, false)), "Text")));
    await $.stmt($.wcall([$t36], "Preview", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayment_order", "WithCoin", async function WithCoin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"ammount": $.copyArg(p0), result: '', "ttrunc": 0, "tdev": 0};
  await $.fixArgs(L0, ["ammount"]);
  L0["ttrunc"] = (await $.call(C, "Trunc", [(await $.call(C, "StrToCurr", [L0["ammount"]]))]));
  L0["tdev"] = ((await $.call(C, "Round", [$.mul((await $.call(C, "Frac", [(await $.call(C, "StrToCurr", [L0["ammount"]]))])), 100)])));
  L0["result"] = $.add($.add($.add($.add($.add((await $.call(C, "CurrencyToHR_Azeri", [L0["ttrunc"], 0, [0]])), " "), "="), " "), (await $.call(C, "FloatToStr", [L0["tdev"]]))), " qəp");
  return L0.result;
}, {"params": ["Ammount"], "kind": "function", "ptypes": ["String"]});
  return U;
}
