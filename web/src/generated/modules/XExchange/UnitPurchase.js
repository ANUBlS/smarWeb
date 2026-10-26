// Generated from UnitPurchase.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitPurchase", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "ComCtrls", "DBLookup", "DBCtrls", "Buttons", "Mask", "Unit_ExchangeMGR", "Oracle", "CMCurrencyEdit", "DBCtrlsEh", "sboapiDataModuleImpl", "DBLookupEh", "Math", "Variants", "UnitDateExch", "UnitProcAndFunc", "SBTranslateProc", "UnitRate"]);
  const C = [U];
  U.defClass("TFormPurchase", "TForm", {"groupboxmain": {"name": "GroupBoxMain", "type": "TGroupBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "dtp_date": {"name": "DTP_Date", "type": "TDateTimePicker"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "dblc_currency": {"name": "DBLC_Currency", "type": "TDBLookupComboBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "edit_purchase_course": {"name": "Edit_purchase_course", "type": "TEdit"}, "label15": {"name": "Label15", "type": "TLabel"}, "edit_nb_course": {"name": "Edit_nb_course", "type": "TEdit"}, "dtp_system_time": {"name": "DTP_System_Time", "type": "TDateTimePicker"}, "label20": {"name": "Label20", "type": "TLabel"}, "timer": {"name": "Timer", "type": "TTimer"}, "edit_val_changed": {"name": "Edit_Val_Changed", "type": "TEdit"}, "label21": {"name": "Label21", "type": "TLabel"}, "bevel2": {"name": "Bevel2", "type": "TBevel"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "bevel3": {"name": "Bevel3", "type": "TBevel"}, "edit_ekv_amount": {"name": "Edit_Ekv_Amount", "type": "TEdit"}, "edit_fee_amount": {"name": "Edit_Fee_Amount", "type": "TEdit"}, "bevel4": {"name": "Bevel4", "type": "TBevel"}, "bevel5": {"name": "Bevel5", "type": "TBevel"}, "bevel6": {"name": "Bevel6", "type": "TBevel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label9": {"name": "Label9", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "labelcountry": {"name": "LabelCountry", "type": "TLabel"}, "bevel7": {"name": "Bevel7", "type": "TBevel"}, "bevel8": {"name": "Bevel8", "type": "TBevel"}, "bevel9": {"name": "Bevel9", "type": "TBevel"}, "bevel10": {"name": "Bevel10", "type": "TBevel"}, "bevel11": {"name": "Bevel11", "type": "TBevel"}, "bevel12": {"name": "Bevel12", "type": "TBevel"}, "bevel13": {"name": "Bevel13", "type": "TBevel"}, "bevel14": {"name": "Bevel14", "type": "TBevel"}, "bevel15": {"name": "Bevel15", "type": "TBevel"}, "bevel16": {"name": "Bevel16", "type": "TBevel"}, "bevel17": {"name": "Bevel17", "type": "TBevel"}, "bevel18": {"name": "Bevel18", "type": "TBevel"}, "bevel19": {"name": "Bevel19", "type": "TBevel"}, "bevel20": {"name": "Bevel20", "type": "TBevel"}, "edit_first_name": {"name": "Edit_First_Name", "type": "TEdit"}, "edit_last_name": {"name": "Edit_Last_Name", "type": "TEdit"}, "edit_pasport": {"name": "Edit_Pasport", "type": "TEdit"}, "edit_aze": {"name": "Edit_AZE", "type": "TEdit"}, "edit_giving_member": {"name": "Edit_Giving_Member", "type": "TEdit"}, "edit_cust_confirm": {"name": "Edit_Cust_Confirm", "type": "TEdit"}, "edit_father": {"name": "Edit_Father", "type": "TEdit"}, "edit_country": {"name": "Edit_Country", "type": "TEdit"}, "dblc_country": {"name": "DBLC_Country", "type": "TDBLookupComboBox"}, "dblc_first_name": {"name": "DBLC_First_Name", "type": "TDBLookupComboBox"}, "dblc_last_name": {"name": "DBLC_Last_Name", "type": "TDBLookupComboBox"}, "dblc_father": {"name": "DBLC_Father", "type": "TDBLookupComboBox"}, "btnrun": {"name": "BtnRun", "type": "TBitBtn"}, "btnexit": {"name": "BtnExit", "type": "TBitBtn"}, "dblc_cust_confirm": {"name": "DBLC_Cust_Confirm", "type": "TDBLookupComboBox"}, "dblc_giving_member": {"name": "DBLC_Giving_Member", "type": "TDBLookupComboBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "edit_exch": {"name": "Edit_Exch", "type": "TDBEdit"}, "edit_setting": {"name": "Edit_Setting", "type": "TEdit"}, "bevel21": {"name": "Bevel21", "type": "TBevel"}, "edit_purchase_amount": {"name": "Edit_Purchase_Amount", "type": "TEdit"}, "edit_cust_date": {"name": "Edit_Cust_Date", "type": "TDBDateTimeEditEh"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "editpurchasecoursebegin": {"name": "EditPurchaseCourseBegin", "type": "TEdit"}, "editpurchasecourseend": {"name": "EditPurchaseCourseEnd", "type": "TEdit"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "radiobutton1": {"name": "RadioButton1", "type": "TRadioButton"}, "radiobutton2": {"name": "RadioButton2", "type": "TRadioButton"}}, {});
  U.init(async () => {
    U.var_("FormPurchase", null, "TFormPurchase");
    U.var_("resultID", 0, "integer");
  });
  U.func("RoundNew", async function RoundNew(Self, p0, p1) {
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
  U.func("RoundToEx", async function RoundToEx(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"avalue": $.copyArg(p0), "adigit": (p1 === undefined ? (-(2)) : p1), result: 0, "lfactor": 0, "i": 0, "s": ''};
  await $.fixArgs(L0, ["avalue", "adigit"]);
  L0["lfactor"] = (await $.call(C, "IntPower", [10, L0["adigit"]]));
  L0["i"] = (await $.call(C, "Round", [$.fdiv(L0["avalue"], ($.fdiv(L0["lfactor"], 10)))]));
  L0["s"] = (await $.call(C, "IntToStr", [L0["i"]]));
  L0["result"] = $.mul(($.add((await $.call(C, "Trunc", [$.fdiv(L0["i"], 10)])), (await $.call(C, "ord", [$.ge((await $.call(C, "StrToInt", [(await $.idx(L0["s"], [(await $.call(C, "Length", [L0["s"]]))]))])), 5)])))), L0["lfactor"]);
  return L0.result;
}, {"params": ["AValue", "ADigit"], "kind": "function", "ptypes": ["Double", "TRoundToRange"]});
  U.method("TFormPurchase", "ExRemOstat", async function ExRemOstat(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"valid": $.copyArg(p0), result: 0, "rest": 0};
  await $.fixArgs(L0, ["valid"]);
  {
    const $t1 = (await $.v(C, "DataModExch"));
    await $.mcall((await $.wv([$t1], "ODSExRemainder", C, false)), "Close", []);
    await $.mset((await $.wv([$t1], "ODSExRemainder", C, false)), "Filtered", (await $.wv([$t1], "False", C, false)));
    await $.mset((await $.wv([$t1], "ODSExRemainder", C, false)), "Filter", $.add("val_id=", (await $.wcall([$t1], "IntToStr", [(await $.wv([$t1], "valid", { get: async () => L0["valid"], set: async (v) => { L0["valid"] = v; }, local: true }, false))], C))));
    await $.mset((await $.wv([$t1], "ODSExRemainder", C, false)), "Filtered", (await $.wv([$t1], "True", C, false)));
    await $.mcall((await $.wv([$t1], "ODSExRemainder", C, false)), "Open", []);
    await $.wset([$t1], "rest", (await $.mv((await $.mcall((await $.wv([$t1], "ODSExRemainder", C, false)), "FieldByName", ["current_ostat"])), "AsFloat")), { get: async () => L0["rest"], set: async (v) => { L0["rest"] = v; }, local: true });
    L0.result = (await $.wv([$t1], "rest", { get: async () => L0["rest"], set: async (v) => { L0["rest"] = v; }, local: true }, false));
    await $.mcall((await $.wv([$t1], "ODSExRemainder", C, false)), "Close", []);
    await $.mset((await $.wv([$t1], "ODSExRemainder", C, false)), "Filtered", (await $.wv([$t1], "False", C, false)));
    await $.mset((await $.wv([$t1], "ODSExRemainder", C, false)), "Filter", "");
    await $.mcall((await $.wv([$t1], "ODSExRemainder", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": ["valid"], "kind": "function", "ptypes": ["integer"]});
  U.method("TFormPurchase", "ClearEdit", async function ClearEdit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "Edit_nb_course")), "Text", "");
  await $.mset((await $.v(C, "Edit_purchase_course")), "Text", "");
  await $.mset((await $.v(C, "Edit_Purchase_Amount")), "Text", "");
  await $.mset((await $.v(C, "Edit_Ekv_Amount")), "Text", "");
  await $.mset((await $.v(C, "Edit_Fee_Amount")), "Text", "");
  await $.mset((await $.v(C, "DBLC_Currency")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "Edit_First_Name")), "Text", "");
  await $.mset((await $.v(C, "Edit_Last_Name")), "Text", "");
  await $.mset((await $.v(C, "Edit_Father")), "Text", "");
  await $.mset((await $.v(C, "Edit_Pasport")), "Text", "");
  await $.mset((await $.v(C, "Edit_Cust_Date")), "Text", "");
  await $.mset((await $.v(C, "Edit_Cust_Confirm")), "Text", "");
  await $.mset((await $.v(C, "Edit_Giving_Member")), "Text", "");
  await $.mset((await $.v(C, "Edit_Country")), "Text", "");
  await $.mset((await $.v(C, "EditPurchaseCourseBegin")), "Text", "");
  await $.mset((await $.v(C, "EditPurchaseCourseEnd")), "Text", "");
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormPurchase", "Edit_Nb_RateKeyPress", async function Edit_Nb_RateKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormPurchase", "BtnExitClick", async function BtnExitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPurchase", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormPurchase", "RadioButton1Click", async function RadioButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLC_Country")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLC_Cust_Confirm")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLC_Father")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLC_First_Name")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLC_Giving_Member")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLC_Last_Name")), "KeyValue", (-(1)));
  {
    const $t2 = (await $.mv((await $.v(C, "DataModExch")), "ODSExchProvarch"));
    await $.stmt($.wcall([$t2], "ClearEdit", [], C));
    await $.mset((await $.wv([$t2], "Edit_Purchase_Amount", C, false)), "Enabled", (await $.wv([$t2], "false", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPurchase", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy(($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormPurchase", "Edit_Purchase_Amount1KeyPress", async function Edit_Purchase_Amount1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormPurchase", "DBLC_CurrencyClick", async function DBLC_CurrencyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "kurs": 0, "t": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "RadioButton1")), "Checked")))) {
    L0["kurs"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSExchAcc")), "FieldByName", ["val_purchase_course"])), "AsFloat"));
    await $.mset((await $.v(C, "EditPurchaseCourseBegin")), "Text", (await $.call(C, "FormatFloat", ["0.000000", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSExchAcc")), "FieldByName", ["val_purchase_course"])), "AsFloat"))])));
    await $.mset((await $.v(C, "EditPurchaseCourseEnd")), "Text", (await $.call(C, "FormatFloat", ["0.000000", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSExchAcc")), "FieldByName", ["val_purchase_course_end"])), "AsFloat"))])));
    await $.mset((await $.v(C, "Edit_purchase_course")), "Text", (await $.call(C, "FormatFloat", ["0.000000", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSExchAcc")), "FieldByName", ["val_purchase_course_user"])), "AsFloat"))])));
    await $.mset((await $.v(C, "Edit_nb_course")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSExchAcc")), "FieldByName", ["val_nb_course"])), "AsString")));
    await $.mset((await $.v(C, "Edit_Purchase_Amount")), "Enabled", ($.ne((await $.mv((await $.v(C, "Edit_purchase_course")), "Text")), "")));
    await $.mset((await $.v(C, "Edit_Ekv_Amount")), "Enabled", ($.ne((await $.mv((await $.v(C, "Edit_purchase_course")), "Text")), "")));
    await $.mset((await $.v(C, "Edit_Fee_Amount")), "Enabled", ($.ne((await $.mv((await $.v(C, "Edit_purchase_course")), "Text")), "")));
  } else {
    L0["kurs"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSExchAcc")), "FieldByName", ["val_purchase_course"])), "AsFloat"));
    await $.mset((await $.v(C, "EditPurchaseCourseBegin")), "Text", (await $.call(C, "FormatFloat", ["0.000000", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSExchAcc")), "FieldByName", ["val_purchase_course"])), "AsFloat"))])));
    await $.mset((await $.v(C, "EditPurchaseCourseEnd")), "Text", (await $.call(C, "FormatFloat", ["0.000000", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSExchAcc")), "FieldByName", ["val_purchase_course_end"])), "AsFloat"))])));
    await $.mset((await $.v(C, "Edit_purchase_course")), "Text", (await $.call(C, "FormatFloat", ["0.000000", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSExchAcc")), "FieldByName", ["cashless_purchase_course"])), "AsFloat"))])));
    await $.mset((await $.v(C, "Edit_nb_course")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSExchAcc")), "FieldByName", ["val_nb_course"])), "AsString")));
    await $.mset((await $.v(C, "Edit_Purchase_Amount")), "Enabled", ($.ne((await $.mv((await $.v(C, "Edit_purchase_course")), "Text")), "")));
    await $.mset((await $.v(C, "Edit_Ekv_Amount")), "Enabled", ($.ne((await $.mv((await $.v(C, "Edit_purchase_course")), "Text")), "")));
    await $.mset((await $.v(C, "Edit_Fee_Amount")), "Enabled", ($.ne((await $.mv((await $.v(C, "Edit_purchase_course")), "Text")), "")));
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_Purchase_Amount")), "Text")), ""))) {
    await $.stmt((await $.call(C, "Edit_Purchase_AmountChange", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPurchase", "Edit_purchase_courseExit", async function Edit_purchase_courseExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_Purchase_Amount")), "Text")), ""))) {
    await $.stmt((await $.call(C, "Edit_Purchase_AmountChange", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPurchase", "Edit_purchase_courseKeyPress", async function Edit_purchase_courseKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormPurchase", "BtnRunClick", async function BtnRunClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_id": 0, "s": 0, "a_flags": false, "debitaccid": 0, "kreditaccid": 0, "cashaccid": 0, "puraccid": 0, "kreditaccno": '', "debitaccno": '', "cashaccno": '', "puraccno": '', "a": 0, "b": 0, "c": 0, "sysdate": 0, "dat": 0, "say": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["ex_status"] = 1;
  L0["say"] = 0;
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit_First_Name")), "Text")), ""))) {
    L0["say"] = $.add(L0["say"], 1);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit_Last_Name")), "Text")), ""))) {
    L0["say"] = $.add(L0["say"], 1);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit_Father")), "Text")), ""))) {
    L0["say"] = $.add(L0["say"], 1);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit_Cust_Confirm")), "text")), ""))) {
    L0["say"] = $.add(L0["say"], 1);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit_Giving_Member")), "Text")), ""))) {
    L0["say"] = $.add(L0["say"], 1);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit_Country")), "Text")), ""))) {
    L0["say"] = $.add(L0["say"], 1);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit_Pasport")), "Text")), ""))) {
    L0["say"] = $.add(L0["say"], 1);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit_Cust_Date")), "Value")), (await $.v(C, "null"))))) {
    L0["say"] = $.add(L0["say"], 1);
  }
  if ($.truthy((await $.and_(($.ne(L0["say"], 8)), async () => ($.ne(L0["say"], 0)))))) {
    await $.stmt((await $.call(C, "showmessage", ["   Məlumatlar tam doldurulmayıb     ! "])));
    return L0.result;
  }
  L0["a_flags"] = false;
  L0["sysdate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mcall((await $.mv((await $.v(C, "DataModExch")), "SBOPDate")), "CallDateFunction", ["get_date", []]))]))]));
  L0["dat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP_Date")), "DateTime"))]))]));
  if ($.truthy($.lt(L0["sysdate"], L0["dat"]))) {
    L0["a_flags"] = true;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLC_Currency")), "Text")), "AZN"))) {
    try {
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
      {
        const $t4 = (await $.v(C, "DataModExch"));
        await $.wset([$t4], "v_id", (await $.mv((await $.mcall((await $.wv([$t4], "ODSExchProvarch", C, false)), "FieldByName", ["id"])), "AsInteger")), { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true });
        await $.mset((await $.wv([$t4], "Trans", C, false)), "status", (await $.wv([$t4], "ex_status", { get: async () => L0["ex_status"], set: async (v) => { L0["ex_status"] = v; }, local: true }, false)));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "operator_id", (await $.mcall((await $.wv([$t4], "OPExchMgr", C, false)), "CallIntegerFunction", ["UserID", []])));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "trans_date", (await $.wcall([$t4], "Integer", [(await $.wcall([$t4], "Trunc", [(await $.mv((await $.wv([$t4], "DTP_Date", C, false)), "DateTime"))], C))], C)));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "debit_amount", (await $.wcall([$t4], "StrToFloat", [(await $.mv((await $.wv([$t4], "Edit_Purchase_Amount", C, false)), "Text"))], C)));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "l_amount", (await $.wcall([$t4], "StrToFloat", [(await $.mv((await $.wv([$t4], "Edit_Ekv_Amount", C, false)), "Text"))], C)));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "fee_amount", (await $.wcall([$t4], "StrToFloat", [(await $.mv((await $.wv([$t4], "Edit_Fee_Amount", C, false)), "Text"))], C)));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "val_course", (await $.wcall([$t4], "StrToFloat", [(await $.mv((await $.wv([$t4], "Edit_purchase_course", C, false)), "Text"))], C)));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "trans_name", (await $.mv((await $.wv([$t4], "Edit_Setting", C, false)), "Text")));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "cust_name", (await $.mv((await $.wv([$t4], "Edit_First_Name", C, false)), "Text")));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "cust_lname", (await $.mv((await $.wv([$t4], "Edit_Last_Name", C, false)), "Text")));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "cust_passport", (await $.mv((await $.wv([$t4], "Edit_Pasport", C, false)), "Text")));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "exch_name", (await $.mv((await $.wv([$t4], "Edit_Exch", C, false)), "Text")));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "val_id", (await $.mv((await $.wv([$t4], "DBLC_Currency", C, false)), "KeyValue")));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "ex_id", (await $.mv((await $.mcall((await $.wv([$t4], "ODSExchOffice", C, false)), "FieldByName", ["ex_no"])), "AsInteger")));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "cust_father", (await $.mv((await $.wv([$t4], "Edit_Father", C, false)), "Text")));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "cust_date", (await $.mv((await $.wv([$t4], "Edit_Cust_Date", C, false)), "Value")));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "cust_confirm", (await $.mv((await $.wv([$t4], "Edit_Cust_Confirm", C, false)), "Text")));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "cust_giving_member", (await $.mv((await $.wv([$t4], "Edit_Giving_Member", C, false)), "Text")));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "val_nb_course", (await $.wcall([$t4], "StrToFloat", [(await $.mv((await $.wv([$t4], "Edit_nb_course", C, false)), "Text"))], C)));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "op_time", (await $.mv((await $.wv([$t4], "DTP_System_Time", C, false)), "DateTime")));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "val_name", (await $.mv((await $.wv([$t4], "DBLC_Currency", C, false)), "Text")));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "val_changed_name", (await $.mv((await $.wv([$t4], "Edit_Val_Changed", C, false)), "Text")));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "val_changed_id", (await $.mv((await $.wv([$t4], "Edit_Val_Changed", C, false)), "Tag")));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "val_changed_course", 1);
        await $.mset((await $.wv([$t4], "Trans", C, false)), "cust_country", (await $.mv((await $.wv([$t4], "Edit_Country", C, false)), "Text")));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "country", (await $.mv((await $.wv([$t4], "Edit_AZE", C, false)), "Text")));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "transclose", 0);
        await $.mset((await $.wv([$t4], "Trans", C, false)), "SessionName", (await $.mv((await $.mv((await $.wv([$t4], "OPExchMgr", C, false)), "Session")), "LogonUserName")));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "RDebitAmount", (await $.wcall([$t4], "ExRemOstat", [(await $.mv((await $.wv([$t4], "DBLC_Currency", C, false)), "KeyValue"))], C)));
        await $.mset((await $.wv([$t4], "Trans", C, false)), "RLAmount", (await $.wcall([$t4], "ExRemOstat", [0], C)));
        if ($.truthy((await $.mv((await $.wv([$t4], "RadioButton1", C, false)), "Checked")))) {
          await $.mset((await $.wv([$t4], "Trans", C, false)), "Cashless", 0);
        } else {
          await $.mset((await $.wv([$t4], "Trans", C, false)), "Cashless", 1);
        }
        await $.wset([$t4], "A", (await $.wcall([$t4], "StrToFloat", [(await $.mv((await $.wv([$t4], "Edit_purchase_course", C, false)), "Text"))], C)), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
        { const $t5 = (await $.wv([$t4], "StatusExchange", C, false));
          if ($.eq($t5, (await $.wv([$t4], "sePurchaseInsert", C, false)))) {
            {
              const $t6 = (await $.wv([$t4], "OPTrans", C, false));
              await $.wset([$t4, $t6], "resultID", (await $.wcall([$t4, $t6], "CallIntegerFunction", ["add_ex_prov_trans", ["status", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "status")), "operator_id", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "operator_id")), "trans_date", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "trans_date")), "debit_amount", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "debit_amount")), "l_amount", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "l_amount")), "fee_amount", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "fee_amount")), "val_course", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "val_course")), "trans_name", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "trans_name")), "cust_name", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "cust_name")), "cust_lname", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "cust_lname")), "cust_passport", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "cust_passport")), "exch_name", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "exch_name")), "val_id", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "val_id")), "ex_id", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "ex_id")), "cust_father", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "cust_father")), "cust_date", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "cust_date")), "cust_confirm", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "cust_confirm")), "cust_giving_member", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "cust_giving_member")), "val_nb_course", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "val_nb_course")), "op_time", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "op_time")), "val_name", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "val_name")), "val_changed_name", "AZN", "val_changed_id", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "val_changed_id")), "val_changed_course", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "val_changed_course")), "cust_country", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "cust_country")), "country", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "country")), "trans_close", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "transclose")), "SessionName", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "SessionName")), "RDebitAmount", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "RDebitAmount")), "RLAmount", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "RLAmount")), "PCashless", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "Cashless"))]], C)), C);
              await $.stmt((await $.wcall([$t4, $t6], "CallProcedure", ["ex_constants_add", ["a_ex_id", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "ex_id")), "a_cust_name", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "cust_name")), "a_cust_lname", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "cust_lname")), "a_cust_passport", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "cust_passport")), "a_cust_father", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "cust_father")), "a_cust_date", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "cust_date")), "a_cust_confirm", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "cust_confirm")), "a_cust_giving_member", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "cust_giving_member")), "a_cust_country", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "cust_country")), "a_country", (await $.mv((await $.wv([$t4, $t6], "Trans", C, false)), "country"))]], C)));
            }
            await $.stmt($.wcall([$t4], "open_cust_data_sets", [], C));
            await $.wset([$t4], "KreditAccId", (await $.mcall((await $.wv([$t4], "OPExchMgr", C, false)), "CallStringFunction", ["get_purchase_no", [(await $.mv((await $.wv([$t4], "Trans", C, false)), "ex_id")), (await $.mv((await $.wv([$t4], "Trans", C, false)), "val_id"))]])), { get: async () => L0["kreditaccid"], set: async (v) => { L0["kreditaccid"] = v; }, local: true });
            await $.wset([$t4], "DebitAccId", (await $.mcall((await $.wv([$t4], "OPExchMgr", C, false)), "CallStringFunction", ["get_selling_no", [(await $.mv((await $.wv([$t4], "Trans", C, false)), "ex_id")), (await $.mv((await $.wv([$t4], "Trans", C, false)), "val_id"))]])), { get: async () => L0["debitaccid"], set: async (v) => { L0["debitaccid"] = v; }, local: true });
            await $.wset([$t4], "CashAccId", (await $.mcall((await $.wv([$t4], "OPExchMgr", C, false)), "CallStringFunction", ["get_cash_acc_no", [(await $.mv((await $.wv([$t4], "Trans", C, false)), "ex_id")), (await $.mv((await $.wv([$t4], "Trans", C, false)), "val_id"))]])), { get: async () => L0["cashaccid"], set: async (v) => { L0["cashaccid"] = v; }, local: true });
            await $.wset([$t4], "PurAccId", (await $.mcall((await $.wv([$t4], "OPExchMgr", C, false)), "CallStringFunction", ["get_pur_acc_no", [(await $.mv((await $.wv([$t4], "Trans", C, false)), "ex_id")), (await $.mv((await $.wv([$t4], "Trans", C, false)), "val_id"))]])), { get: async () => L0["puraccid"], set: async (v) => { L0["puraccid"] = v; }, local: true });
            if ($.truthy($.eq((await $.wv([$t4], "C", { get: async () => L0["c"], set: async (v) => { L0["c"] = v; }, local: true }, false)), 0))) {
              await $.wset([$t4], "s", (await $.mcall((await $.wv([$t4], "sb_transaction", C, false)), "CallIntegerFunction", ["ex_transaction", [(await $.wv([$t4], "resultID", C, false)), (await $.wv([$t4], "DebitAccId", { get: async () => L0["debitaccid"], set: async (v) => { L0["debitaccid"] = v; }, local: true }, false)), (await $.wv([$t4], "KreditAccId", { get: async () => L0["kreditaccid"], set: async (v) => { L0["kreditaccid"] = v; }, local: true }, false)), (await $.wv([$t4], "CashAccId", { get: async () => L0["cashaccid"], set: async (v) => { L0["cashaccid"] = v; }, local: true }, false)), (await $.wv([$t4], "PurAccId", { get: async () => L0["puraccid"], set: async (v) => { L0["puraccid"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t4], "Trans", C, false)), "ex_id")), (await $.mv((await $.wv([$t4], "Trans", C, false)), "debit_amount")), (await $.mv((await $.wv([$t4], "Trans", C, false)), "debit_amount")), (await $.mv((await $.wv([$t4], "Trans", C, false)), "l_amount")), (await $.mv((await $.wv([$t4], "Trans", C, false)), "val_course")), (await $.mv((await $.wv([$t4], "Trans", C, false)), "val_changed_course")), (await $.mv((await $.wv([$t4], "Trans", C, false)), "val_nb_course")), (await $.mv((await $.wv([$t4], "Trans", C, false)), "trans_name")), (await $.wv([$t4], "a_Flags", { get: async () => L0["a_flags"], set: async (v) => { L0["a_flags"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t4], "Trans", C, false)), "operator_id"))]])), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
            }
            await $.mcall((await $.mv((await $.wv([$t4], "sboapiDataModule", C, false)), "SBSession")), "Commit", []);
            {
              const $t7 = (await $.mv((await $.wv([$t4], "DataModExch", C, false)), "ODSExchProvarch"));
              await $.stmt($.wcall([$t4, $t7], "Refresh", [], C));
            }
            {
              const $t8 = (await $.mv((await $.wv([$t4], "DataModExch", C, false)), "ODSExchRate"));
              await $.stmt($.wcall([$t4, $t8], "Refresh", [], C));
            }
            {
              const $t9 = (await $.mv((await $.wv([$t4], "DataModExch", C, false)), "ODSExRemainder"));
              await $.stmt($.wcall([$t4, $t9], "Refresh", [], C));
            }
          }
          else if ($.eq($t5, (await $.wv([$t4], "sePurchaseEdit", C, false)))) {
            {
              const $t10 = (await $.wv([$t4], "OPTrans", C, false));
              await $.stmt((await $.wcall([$t4, $t10], "CallProcedure", ["ex_provarch_edit", ["v_id", (await $.wv([$t4, $t10], "v_id", { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true }, false)), "status", (await $.mv((await $.wv([$t4, $t10], "Trans", C, false)), "status")), "operator_id", (await $.mv((await $.wv([$t4, $t10], "Trans", C, false)), "operator_id")), "trans_date", (await $.mv((await $.wv([$t4, $t10], "Trans", C, false)), "trans_date")), "debit_amount", (await $.mv((await $.wv([$t4, $t10], "Trans", C, false)), "debit_amount")), "l_amount", (await $.mv((await $.wv([$t4, $t10], "Trans", C, false)), "l_amount")), "fee_amount", (await $.mv((await $.wv([$t4, $t10], "Trans", C, false)), "fee_amount")), "val_course", (await $.mv((await $.wv([$t4, $t10], "Trans", C, false)), "val_course")), "trans_name", (await $.mv((await $.wv([$t4, $t10], "Trans", C, false)), "trans_name")), "cust_name", (await $.mv((await $.wv([$t4, $t10], "Trans", C, false)), "cust_name")), "cust_lname", (await $.mv((await $.wv([$t4, $t10], "Trans", C, false)), "cust_lname")), "cust_passport", (await $.mv((await $.wv([$t4, $t10], "Trans", C, false)), "cust_passport")), "exch_name", (await $.mv((await $.wv([$t4, $t10], "Trans", C, false)), "exch_name")), "cust_father", (await $.mv((await $.wv([$t4, $t10], "Trans", C, false)), "cust_father")), "cust_date", (await $.mv((await $.wv([$t4, $t10], "Trans", C, false)), "cust_date")), "cust_confirm", (await $.mv((await $.wv([$t4, $t10], "Trans", C, false)), "cust_confirm")), "cust_giving_member", (await $.mv((await $.wv([$t4, $t10], "Trans", C, false)), "cust_giving_member")), "val_nb_course", (await $.mv((await $.wv([$t4, $t10], "Trans", C, false)), "val_nb_course")), "val_name", (await $.mv((await $.wv([$t4, $t10], "Trans", C, false)), "val_name")), "val_changed_name", "AZN", "val_changed_id", (await $.mv((await $.wv([$t4, $t10], "Trans", C, false)), "val_changed_id")), "val_changed_course", (await $.mv((await $.wv([$t4, $t10], "Trans", C, false)), "val_changed_course")), "cust_country", (await $.mv((await $.wv([$t4, $t10], "Trans", C, false)), "cust_country")), "country", (await $.mv((await $.wv([$t4, $t10], "Trans", C, false)), "country")), "SessionName", (await $.mv((await $.wv([$t4, $t10], "Trans", C, false)), "SessionName"))]], C)));
            }
            {
              const $t11 = (await $.wv([$t4], "ODSExchProvarch", C, false));
              await $.stmt($.wcall([$t4, $t11], "Refresh", [], C));
            }
            {
              const $t12 = (await $.wv([$t4], "ODSExchRate", C, false));
              await $.stmt($.wcall([$t4, $t12], "Refresh", [], C));
            }
          }
        }
      }
    } catch ($t3) {
      $.rethrowControl($t3);
      if ($.excIs($t3, "Exception")) {
        L0["e"] = $.exc($t3);
        await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Rollback", []);
        await $.stmt((await $.call(C, "ShowMessage", [(await $.mv(L0["e"], "Message"))])));
      }
      else { throw $t3; }
    }
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.stmt($.call(C, "Close", []));
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Valyutalar eynidir!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPurchase", "TimerTimer", async function TimerTimer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTP_System_Time")), "Time", (await $.v(C, "Time")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPurchase", "Edit_Purchase_AmountChange", async function Edit_Purchase_AmountChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ekvm": 0, "ekv": 0, "fee": 0, "feem": 0, "feer": 0, "feemm": 0, "feerr": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["purchase_status"] = " KURSLA ALIŞI ";
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_Purchase_Amount")), "Text")), ""))) {
    await $.mset((await $.v(C, "Edit_Setting")), "Text", $.add($.add($.add($.add($.add((await $.call(C, "SumNumToFull", [(await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Purchase_Amount")), "Text"))]))])), " "), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLC_Currency")), "ListSource")), "DataSet")), "FieldByName", ["val_name"])), "AsString"))), " -nin "), (await $.mv((await $.v(C, "Edit_purchase_course")), "Text"))), L0["purchase_status"]));
    L0["ekvm"] = $.mul((await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Purchase_Amount")), "Text"))])), (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_purchase_course")), "Text"))])));
    L0["feer"] = ($.mul((await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Purchase_Amount")), "Text"))])), (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_purchase_course")), "Text"))]))));
    L0["feem"] = ($.mul((await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Purchase_Amount")), "Text"))])), (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_nb_course")), "Text"))]))));
    L0["ekv"] = (await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallFloatFunction", ["RoundNew", [L0["ekvm"]]]));
    L0["feerr"] = (await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallFloatFunction", ["RoundNew", [L0["feer"]]]));
    L0["feemm"] = (await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallFloatFunction", ["RoundNew", [L0["feem"]]]));
    L0["fee"] = (await $.call(C, "abs", [$.sub(L0["feerr"], L0["feemm"])]));
    await $.mset((await $.v(C, "Edit_Ekv_Amount")), "Text", (await $.call(C, "FloatToStr", [L0["ekv"]])));
    await $.mset((await $.v(C, "Edit_Fee_Amount")), "Text", (await $.call(C, "FloatToStr", [L0["fee"]])));
  } else {
    await $.mset((await $.v(C, "Edit_Setting")), "Text", (await $.v(C, "EmptyStr")));
    await $.mset((await $.v(C, "Edit_Ekv_Amount")), "Text", (await $.v(C, "EmptyStr")));
    await $.mset((await $.v(C, "Edit_Fee_Amount")), "Text", (await $.v(C, "EmptyStr")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPurchase", "Edit_Purchase_AmountExit", async function Edit_Purchase_AmountExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": 0, "st": 0, "sd": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["s"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_purchase_course")), "Text"))]));
  L0["st"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "EditPurchaseCourseBegin")), "Text"))]));
  L0["sd"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "EditPurchaseCourseEnd")), "Text"))]));
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit_purchase_course")), "Text")), ""))) {
    return L0.result;
  }
  if ($.truthy($.lt(L0["s"], L0["st"]))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Alış kursu  başlanğıc kursdan kiçik ola bilməz!....."])));
    await $.mset((await $.v(C, "Edit_purchase_course")), "Text", (await $.mv((await $.v(C, "EditPurchaseCourseBegin")), "Text")));
  }
  if ($.truthy($.gt(L0["s"], L0["sd"]))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Alış kursu son kursdan böyük ola bilməz!....."])));
    await $.mset((await $.v(C, "Edit_purchase_course")), "Text", (await $.mv((await $.v(C, "EditPurchaseCourseEnd")), "Text")));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit_purchase_course")), "Text")), ""))) {
    return L0.result;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPurchase", "Edit_Purchase_AmountKeyPress", async function Edit_Purchase_AmountKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormPurchase", "DBLC_CountryClick", async function DBLC_CountryClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit_Country")), "Text", (await $.mv((await $.v(C, "DBLC_Country")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPurchase", "DBLC_First_NameClick", async function DBLC_First_NameClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit_First_Name")), "Text", (await $.mv((await $.v(C, "DBLC_First_Name")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPurchase", "DBLC_Last_NameClick", async function DBLC_Last_NameClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit_Last_Name")), "Text", (await $.mv((await $.v(C, "DBLC_Last_Name")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPurchase", "DBLC_FatherClick", async function DBLC_FatherClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit_Father")), "Text", (await $.mv((await $.v(C, "DBLC_Father")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPurchase", "DBLC_Cust_ConfirmClick", async function DBLC_Cust_ConfirmClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit_Cust_Confirm")), "Text", (await $.mv((await $.v(C, "DBLC_Cust_Confirm")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPurchase", "DBLC_Giving_MemberClick", async function DBLC_Giving_MemberClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit_Giving_Member")), "Text", (await $.mv((await $.v(C, "DBLC_Giving_Member")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPurchase", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "delta": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLC_Country")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLC_Cust_Confirm")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLC_Father")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLC_First_Name")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLC_Giving_Member")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLC_Last_Name")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "RadioButton1")), "Checked", true);
  await $.mset((await $.v(C, "RadioButton2")), "Checked", false);
  await $.mset((await $.v(C, "DTP_Date")), "Date", (await $.mv((await $.mv((await $.v(C, "DataModExch")), "ODSSysdatSSDAT")), "AsDateTime")));
  await $.mset((await $.v(C, "DTP_System_Time")), "Time", (await $.mv((await $.mv((await $.v(C, "DataModExch")), "ODSSysdatSTIME")), "AsDateTime")));
  {
    const $t13 = (await $.v(C, "DataModExch"));
    const $t14 = (await $.wv([$t13], "OPExchMgr", C, false));
    await $.wset([$t13, $t14], "Delta", (await $.wcall([$t13, $t14], "CallIntegerFunction", ["ex_date_change", []], C)), { get: async () => L0["delta"], set: async (v) => { L0["delta"] = v; }, local: true });
    { const $t15 = (await $.wv([$t13, $t14], "Delta", { get: async () => L0["delta"], set: async (v) => { L0["delta"] = v; }, local: true }, false));
      if ($.eq($t15, 0)) {
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t13, $t14], "DataModExch", C, false)), "OPExchMgr")), "CallProcedure", ["Ex_RemainderProv_Change", [(await $.mv((await $.mv((await $.wv([$t13, $t14], "DataModExch", C, false)), "ODSExchOfficeEX_NO")), "AsInteger"))]])));
      }
      else if ($.eq($t15, 1)) {
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t13, $t14], "DataModExch", C, false)), "OPExchMgr")), "CallProcedure", ["Ex_RemainderLaz_Change", [(await $.mv((await $.mv((await $.wv([$t13, $t14], "DataModExch", C, false)), "ODSExchOfficeEX_NO")), "AsInteger"))]])));
      }
      else if ($.eq($t15, 2)) {
        return L0.result;
      }
    }
  }
  {
    const $t16 = (await $.mv((await $.v(C, "DataModExch")), "ODSExchProvarch"));
    { const $t17 = (await $.wv([$t16], "StatusExchange", C, false));
      if ($.eq($t17, (await $.wv([$t16], "sePurchaseInsert", C, false)))) {
        await $.stmt($.wcall([$t16], "ClearEdit", [], C));
        await $.mset((await $.wv([$t16], "Edit_Purchase_Amount", C, false)), "Enabled", (await $.wv([$t16], "false", C, false)));
      }
      else if ($.eq($t17, (await $.wv([$t16], "sePurchaseEdit", C, false)))) {
        await $.mset((await $.wv([$t16], "Edit_Purchase_Amount", C, false)), "Enabled", (await $.wv([$t16], "true", C, false)));
        await $.mset((await $.wv([$t16], "DTP_Date", C, false)), "Date", (await $.wcall([$t16], "Int", [(await $.mv((await $.wcall([$t16], "FieldByName", ["dat"], C)), "AsDateTime"))], C)));
        await $.mset((await $.wv([$t16], "DBLC_Currency", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t16], "DataModExch", C, false)), "ODSExchProvarch")), "FieldByName", ["val_id"])), "AsInteger")));
        await $.mset((await $.wv([$t16], "Edit_purchase_course", C, false)), "Text", (await $.wcall([$t16], "FloatToStr", [(await $.mv((await $.wcall([$t16], "FieldByName", ["op_course"], C)), "AsFloat"))], C)));
        await $.mset((await $.wv([$t16], "Edit_nb_course", C, false)), "Text", (await $.wcall([$t16], "FloatToStr", [(await $.mv((await $.wcall([$t16], "FieldByName", ["val_nb_course"], C)), "AsFloat"))], C)));
        await $.mset((await $.wv([$t16], "Edit_Purchase_Amount", C, false)), "Text", (await $.wcall([$t16], "FloatToStr", [(await $.mv((await $.wcall([$t16], "FieldByName", ["debitamount"], C)), "AsFloat"))], C)));
        await $.mset((await $.wv([$t16], "Edit_Ekv_Amount", C, false)), "Text", (await $.wcall([$t16], "FloatToStr", [(await $.mv((await $.wcall([$t16], "FieldByName", ["lamount"], C)), "AsFloat"))], C)));
        await $.mset((await $.wv([$t16], "Edit_Fee_Amount", C, false)), "Text", (await $.wcall([$t16], "FloatToStr", [(await $.mv((await $.wcall([$t16], "FieldByName", ["fee_amount"], C)), "AsFloat"))], C)));
        await $.mset((await $.wv([$t16], "Edit_Setting", C, false)), "Text", (await $.mv((await $.wcall([$t16], "FieldByName", ["oper_name"], C)), "AsString")));
        await $.mset((await $.wv([$t16], "Edit_First_Name", C, false)), "Text", (await $.mv((await $.wcall([$t16], "FieldByName", ["cust_name"], C)), "AsString")));
        await $.mset((await $.wv([$t16], "Edit_Last_Name", C, false)), "Text", (await $.mv((await $.wcall([$t16], "FieldByName", ["cust_lname"], C)), "AsString")));
        await $.mset((await $.wv([$t16], "Edit_Pasport", C, false)), "Text", (await $.mv((await $.wcall([$t16], "FieldByName", ["cust_passport"], C)), "AsString")));
        await $.mset((await $.wv([$t16], "Edit_Father", C, false)), "Text", (await $.mv((await $.wcall([$t16], "FieldByName", ["cust_father"], C)), "AsString")));
        await $.mset((await $.wv([$t16], "Edit_Cust_Date", C, false)), "Value", (await $.mv((await $.wcall([$t16], "FieldByName", ["cust_date"], C)), "AsString")));
        await $.mset((await $.wv([$t16], "Edit_Cust_Confirm", C, false)), "Text", (await $.mv((await $.wcall([$t16], "FieldByName", ["cust_confirm"], C)), "AsString")));
        await $.mset((await $.wv([$t16], "Edit_Giving_Member", C, false)), "Text", (await $.mv((await $.wcall([$t16], "FieldByName", ["cust_giving_member"], C)), "AsString")));
        await $.mset((await $.wv([$t16], "Edit_Val_Changed", C, false)), "Tag", 1);
        await $.mset((await $.wv([$t16], "Edit_Country", C, false)), "Text", (await $.mv((await $.wcall([$t16], "FieldByName", ["cust_country"], C)), "AsString")));
        await $.mset((await $.wv([$t16], "Edit_AZE", C, false)), "Text", (await $.mv((await $.wcall([$t16], "FieldByName", ["country"], C)), "AsString")));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPurchase", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPurchase", "Edit_PasportKeyPress", async function Edit_PasportKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
