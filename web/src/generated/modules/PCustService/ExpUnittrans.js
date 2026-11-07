// Generated from ExpUnittrans.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ExpUnittrans", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "Mask", "DBCtrlsEh", "ExtCtrls", "DB", "OracleData", "DBGridEh", "DBLookupEh", "CurrencyEdit", "DBCtrls", "Oracle", "sboapiDataModuleImpl", "UnitDataModPCustService"]);
  const C = [U];
  U.defClass("TFormepxtrans", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "ods_type": {"name": "Ods_type", "type": "TOracleDataSet"}, "ods_valute": {"name": "Ods_Valute", "type": "TOracleDataSet"}, "ds_type": {"name": "DS_type", "type": "TDataSource"}, "ds_valute": {"name": "DS_valute", "type": "TDataSource"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfpanel7": {"name": "XFPanel7", "type": "TXFPanel"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "xflabel11": {"name": "XFLabel11", "type": "TXFLabel"}, "xfpanel8": {"name": "XFPanel8", "type": "TXFPanel"}, "xflabel6": {"name": "XFLabel6", "type": "TXFLabel"}, "editmuxbirid": {"name": "Editmuxbirid", "type": "TEdit"}, "xfpanel9": {"name": "XFPanel9", "type": "TXFPanel"}, "xflabel12": {"name": "XFLabel12", "type": "TXFLabel"}, "editdilingid": {"name": "Editdilingid", "type": "TEdit"}, "editdilingname": {"name": "Editdilingname", "type": "TEdit"}, "xfpanel10": {"name": "XFPanel10", "type": "TXFPanel"}, "xflabel13": {"name": "XFLabel13", "type": "TXFLabel"}, "editqarsid": {"name": "Editqarsid", "type": "TEdit"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "xflabel15": {"name": "XFLabel15", "type": "TXFLabel"}, "ds_valute1": {"name": "DS_valute1", "type": "TDataSource"}, "ods_valute1": {"name": "Ods_Valute1", "type": "TOracleDataSet"}, "ods_valute1valute": {"name": "Ods_Valute1VALUTE", "type": "TIntegerField"}, "ods_valute1val_name": {"name": "Ods_Valute1VAL_NAME", "type": "TWideStringField"}, "ods_valute1valu_name": {"name": "Ods_Valute1VALU_NAME", "type": "TWideStringField"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xflabel16": {"name": "XFLabel16", "type": "TXFLabel"}, "xflabel17": {"name": "XFLabel17", "type": "TXFLabel"}, "xflabel18": {"name": "XFLabel18", "type": "TXFLabel"}, "xflabel20": {"name": "XFLabel20", "type": "TXFLabel"}, "dblookupcomb_type": {"name": "DBLookupComb_type", "type": "TDBLookupComboBox"}, "odscustexpmu": {"name": "odscustexpMu", "type": "TOracleDataSet"}, "odscustexpmuid": {"name": "odscustexpMuID", "type": "TIntegerField"}, "odscustexpmucust_name": {"name": "odscustexpMuCUST_NAME", "type": "TWideStringField"}, "cust_exch": {"name": "cust_exch", "type": "TOraclePackage"}, "xflabel9": {"name": "XFLabel9", "type": "TXFLabel"}, "radyotypa": {"name": "RadyoTypA", "type": "TXFRadioButton"}, "xflabel10": {"name": "XFLabel10", "type": "TXFLabel"}, "radyotyps": {"name": "RadyoTypS", "type": "TXFRadioButton"}, "xflabel14": {"name": "XFLabel14", "type": "TXFLabel"}, "xflabel19": {"name": "XFLabel19", "type": "TXFLabel"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "xflabel21": {"name": "XFLabel21", "type": "TXFLabel"}, "xflabel22": {"name": "XFLabel22", "type": "TXFLabel"}, "currencyedit3": {"name": "CurrencyEdit3", "type": "TCurrencyEdit"}, "xflabel8": {"name": "XFLabel8", "type": "TXFLabel"}, "xflabel23": {"name": "XFLabel23", "type": "TXFLabel"}, "ods_valutevalute": {"name": "Ods_ValuteVALUTE", "type": "TIntegerField"}, "ods_valuteval_name": {"name": "Ods_ValuteVAL_NAME", "type": "TWideStringField"}, "ods_valutevalu_name": {"name": "Ods_ValuteVALU_NAME", "type": "TWideStringField"}, "ods_valuterate": {"name": "Ods_ValuteRATE", "type": "TFloatField"}, "ods_valute1rate": {"name": "Ods_Valute1RATE", "type": "TFloatField"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "dblookupcombval": {"name": "DBLookupCombVal", "type": "TDBLookupComboboxEh"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "dblookupcombval1": {"name": "DBLookupCombVal1", "type": "TDBLookupComboboxEh"}, "xflabel24": {"name": "XFLabel24", "type": "TXFLabel"}, "edit_rate": {"name": "Edit_rate", "type": "TEdit"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "odscustexpqa": {"name": "odscustexpQa", "type": "TOracleDataSet"}, "integerfield1": {"name": "IntegerField1", "type": "TIntegerField"}, "widestringfield1": {"name": "WideStringField1", "type": "TWideStringField"}, "dsrccustexpmu": {"name": "dsrccustexpMu", "type": "TDataSource"}, "dsrccustexpqa": {"name": "dsrccustexpQa", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("Formepxtrans", null, "TFormepxtrans");
  });
  U.method("TFormepxtrans", "RoundNew", async function RoundNew(Self, p0, p1) {
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
  U.func("CutEditText", async function CutEditText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "x": 0, "sel": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.call(C, "TCurrencyEdit", [L0["sender"]]));
    if ($.truthy($.eq((await $.wv([$t1], "DecimalSeparator", C, false)), (await $.wv([$t1], "ThousandSeparator", C, false))))) {
      return L0.result;
    }
    if ($.truthy($.eq((await $.wcall([$t1], "Pos", [(await $.wv([$t1], "DecimalSeparator", C, false)), (await $.wv([$t1], "Text", C, false))], C)), 0))) {
      return L0.result;
    }
    await $.wset([$t1], "Sel", (await $.wv([$t1], "SelStart", C, false)), { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true });
    await $.wset([$t1], "X", $.sub($.sub((await $.wcall([$t1], "Length", [(await $.wv([$t1], "Text", C, false))], C)), (await $.wcall([$t1], "Pos", [(await $.wv([$t1], "DecimalSeparator", C, false)), (await $.wv([$t1], "Text", C, false))], C))), (await $.wv([$t1], "CurrencyDecimals", C, false))), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
    if ($.truthy(($.gt((await $.wv([$t1], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 0)))) {
      await $.wset([$t1], "Text", (await $.wcall([$t1], "Copy", [(await $.wv([$t1], "Text", C, false)), 0, ($.sub((await $.wcall([$t1], "Length", [(await $.wv([$t1], "Text", C, false))], C)), (await $.wv([$t1], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))))], C)), C);
      await $.wset([$t1], "SelStart", (await $.wv([$t1], "Sel", { get: async () => L0["sel"], set: async (v) => { L0["sel"] = v; }, local: true }, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormepxtrans", "CurrencyEdit1Change", async function CurrencyEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "lammount": 0, "v_ammount": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["v_ammount"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_rate")), "text"))]));
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), (await $.v(C, "EmptyStr"))))) {
    await $.mset((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Value", 0);
  }
  L0["lammount"] = (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "CurrencyEdit1")), "Value")), L0["v_ammount"]), 1000000]));
  await $.mset((await $.v(C, "CurrencyEdit3")), "Value", (await $.call(C, "RoundNew", [L0["lammount"], 100])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormepxtrans", "CurrencyEdit3Change", async function CurrencyEdit3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "lammount": 0, "v_ammount": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["v_ammount"] = (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "Edit_rate")), "Text"))]));
  await $.stmt((await $.call(C, "CutEditText", [L0["sender"]])));
  if ($.truthy($.eq((await $.mv((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Text")), (await $.v(C, "EmptyStr"))))) {
    await $.mset((await $.call(C, "TCurrencyEdit", [L0["sender"]])), "Value", 0);
  }
  L0["lammount"] = (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "CurrencyEdit3")), "Value")), L0["v_ammount"]), 1000000]));
  await $.mset((await $.v(C, "CurrencyEdit1")), "Value", (await $.call(C, "RoundNew", [L0["lammount"], 100])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormepxtrans", "DBLookupComboBox1CloseUp", async function DBLookupComboBox1CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.mset((await $.v(C, "Editmuxbirid")), "Text", (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormepxtrans", "DBLookupComboBox2CloseUp", async function DBLookupComboBox2CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.mset((await $.v(C, "Editqarsid")), "Text", (await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormepxtrans", "DBLookupCombVal1CloseUp", async function DBLookupCombVal1CloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  if ($.truthy($.gt((await $.mv((await $.v(C, "DBLookupCombVal")), "KeyValue")), (-(1))))) {
    await $.mset((await $.v(C, "XFLabel15")), "Caption", $.add($.add((await $.mv((await $.v(C, "Ods_ValuteVAL_NAME")), "AsString")), "\\"), (await $.mv((await $.v(C, "Ods_Valute1VAL_NAME")), "AsString"))));
  }
  await $.mset((await $.v(C, "XFLabel23")), "Caption", $.add($.add((await $.mv((await $.v(C, "Ods_Valute1VAL_NAME")), "AsString")), "\\"), (await $.mv((await $.v(C, "Ods_Valute1rate")), "AsString"))));
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormepxtrans", "DBLookupCombValCloseUp", async function DBLookupCombValCloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  if ($.truthy($.gt((await $.mv((await $.v(C, "DBLookupCombVal1")), "KeyValue")), (-(1))))) {
    await $.mset((await $.v(C, "XFLabel15")), "Caption", $.add($.add((await $.mv((await $.v(C, "Ods_ValuteVAL_NAME")), "AsString")), "\\"), (await $.mv((await $.v(C, "Ods_Valute1VAL_NAME")), "AsString"))));
  }
  await $.mset((await $.v(C, "XFLabel8")), "Caption", $.add($.add((await $.mv((await $.v(C, "Ods_ValuteVAL_NAME")), "AsString")), "\\"), (await $.mv((await $.v(C, "Ods_Valuterate")), "AsString"))));
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormepxtrans", "EditmuxbiridEnter", async function EditmuxbiridEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (await $.mv((await $.v(C, "Editmuxbirid")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormepxtrans", "EditmuxbiridKeyPress", async function EditmuxbiridKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (await $.mv((await $.v(C, "Editmuxbirid")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormepxtrans", "EditqarsidEnter", async function EditqarsidEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLookupComboBox2")), "KeyValue", (await $.mv((await $.v(C, "Editqarsid")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormepxtrans", "EditqarsidKeyPress", async function EditqarsidKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    await $.mset((await $.v(C, "DBLookupComboBox2")), "KeyValue", (await $.mv((await $.v(C, "Editqarsid")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormepxtrans", "Edit_rateClick", async function Edit_rateClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit_rate")), "Text", "");
  await $.mset((await $.v(C, "CurrencyEdit3")), "value", 0.0);
  await $.mset((await $.v(C, "CurrencyEdit1")), "value", 0.0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormepxtrans", "Edit_rateKeyPress", async function Edit_rateKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b", "+"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormepxtrans", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Editdilingid")), "Text", (await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Customers_Phys_FSid")), "AsString")));
  await $.mset((await $.v(C, "Editdilingname")), "Text", (await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FScust_name")), "AsString")));
  await $.mcall((await $.v(C, "DBLookupComb_type")), "SetFocus", []);
  await $.mset((await $.v(C, "Edit_rate")), "Text", "0.00");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormepxtrans", "RadyoTypAClick", async function RadyoTypAClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadyoTypA")), "Checked")), true))) {
    await $.mset((await $.v(C, "CurrencyEdit1")), "Enabled", true);
    await $.mset((await $.v(C, "CurrencyEdit1")), "color", (await $.v(C, "clwindow")));
  }
  await $.mset((await $.v(C, "RadyoTypS")), "Checked", false);
  await $.mset((await $.v(C, "CurrencyEdit3")), "Enabled", false);
  await $.mset((await $.v(C, "CurrencyEdit3")), "color", (await $.v(C, "clsilver")));
  await $.mset((await $.v(C, "CurrencyEdit3")), "value", 0.0);
  await $.mset((await $.v(C, "CurrencyEdit1")), "value", 0.0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormepxtrans", "RadyoTypSClick", async function RadyoTypSClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadyoTypS")), "Checked")), true))) {
    await $.mset((await $.v(C, "CurrencyEdit3")), "Enabled", true);
    await $.mset((await $.v(C, "CurrencyEdit3")), "color", (await $.v(C, "clwindow")));
  }
  await $.mset((await $.v(C, "RadyoTypA")), "Checked", false);
  await $.mset((await $.v(C, "CurrencyEdit1")), "Enabled", false);
  await $.mset((await $.v(C, "CurrencyEdit1")), "color", (await $.v(C, "clsilver")));
  await $.mset((await $.v(C, "CurrencyEdit3")), "value", 0.0);
  await $.mset((await $.v(C, "CurrencyEdit1")), "value", 0.0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormepxtrans", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "nov": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComb_type")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Əməliyyatın  tipi sahəsi seçilməyib  ! "])));
    return L0.result;
  }
  if ($.truthy($.le((await $.mv((await $.v(C, "Edit_rate")), "text")), "0"))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Kursu daxil edin  ! "])));
    return L0.result;
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "RadyoTypA")), "Checked")), false)), async () => ($.eq((await $.mv((await $.v(C, "RadyoTypS")), "Checked")), false)))))) {
    await $.stmt((await $.call(C, "Showmessage", ["Əməliyyatın  növü sahəsi seçilməyib  ! "])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupCombVal")), "text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Alış valyuta sahəsi seçilməyib  ! "])));
    return L0.result;
  }
  if ($.truthy((await $.and_(((await $.mv((await $.v(C, "RadyoTypA")), "Checked"))), async () => ($.le((await $.mv((await $.v(C, "CurrencyEdit1")), "Value")), 0)))))) {
    await $.stmt((await $.call(C, "showmessage", ["Məbləği daxil edin !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupCombVal1")), "text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Satış valyuta sahəsi seçilməyib  ! "])));
    return L0.result;
  }
  if ($.truthy((await $.and_(((await $.mv((await $.v(C, "RadyoTypS")), "Checked"))), async () => ($.le((await $.mv((await $.v(C, "CurrencyEdit3")), "Value")), 0)))))) {
    await $.stmt((await $.call(C, "showmessage", ["Məbləği daxil edin !"])));
    return L0.result;
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "Editmuxbirid")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")), "")))))) {
    await $.stmt((await $.call(C, "showmessage", ["Müxbir bank müştərisi seçilməyib  !"])));
    return L0.result;
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "Editqarsid")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "DBLookupComboBox2")), "Text")), "")))))) {
    await $.stmt((await $.call(C, "showmessage", ["Qarşı bank müştərisi seçilməyib  !"])));
    return L0.result;
  }
  if ($.truthy((await $.mv((await $.v(C, "RadyoTypA")), "Checked")))) {
    L0["nov"] = 1;
  }
  if ($.truthy((await $.mv((await $.v(C, "RadyoTypS")), "Checked")))) {
    L0["nov"] = 2;
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [" Yaddaşa yazmaq istəyirsinizmi ?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.v(C, "cust_exch")), "CallProcedure", ["cust_exchtrans", [L0["nov"], (await $.mv((await $.v(C, "DBLookupComb_type")), "KeyValue")), (await $.mv((await $.v(C, "DBLookupCombVal")), "KeyValue")), (await $.mv((await $.v(C, "DBLookupCombVal1")), "KeyValue")), (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Editdilingid")), "Text"))])), (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "Edit_rate")), "text"))])), (await $.mv((await $.v(C, "CurrencyEdit1")), "Value")), (await $.mv((await $.v(C, "CurrencyEdit3")), "Value"))]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormepxtrans", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Formepxtrans")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
