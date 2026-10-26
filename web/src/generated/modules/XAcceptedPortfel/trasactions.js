// Generated from trasactions.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("trasactions", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "DBCtrls", "CMCurrencyEdit", "Mask", "DBCtrlsEh", "DBLookupEh", "DBGridEh", "CMDBSearchEdit", "ComCtrls", "Datamodunit", "mainUnit", "SBTranslateProc", "SelectionAcc"]);
  const C = [U];
  U.defClass("TTransacfrm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "button1": {"name": "Button1", "type": "TButton"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "main": {"name": "Main", "type": "TEdit"}, "perc": {"name": "Perc", "type": "TEdit"}, "label6": {"name": "Label6", "type": "TLabel"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "description": {"name": "Description", "type": "TEdit"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "memo2": {"name": "Memo2", "type": "TMemo"}, "radiobutton1": {"name": "RadioButton1", "type": "TRadioButton"}, "radiobutton2": {"name": "RadioButton2", "type": "TRadioButton"}, "memo3": {"name": "Memo3", "type": "TMemo"}, "radiobutton3": {"name": "RadioButton3", "type": "TRadioButton"}, "radiobutton4": {"name": "RadioButton4", "type": "TRadioButton"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "label4": {"name": "Label4", "type": "TLabel"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "memo4": {"name": "Memo4", "type": "TMemo"}, "label8": {"name": "Label8", "type": "TLabel"}, "service": {"name": "service", "type": "TEdit"}, "label9": {"name": "Label9", "type": "TLabel"}, "radiobutton5": {"name": "RadioButton5", "type": "TRadioButton"}, "label10": {"name": "Label10", "type": "TLabel"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "memo5": {"name": "Memo5", "type": "TMemo"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}}, {});
  U.init(async () => {
    U.var_("Transacfrm", null, "TTransacfrm");
  });
  U.method("TTransacfrm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_type": 0, "v_cash": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "perc")), "Text")), "0"))) {
    L0["v_type"] = 2;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "main")), "Text")), "0"))) {
    L0["v_type"] = 1;
  }
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "perc")), "Text")), "0")), async () => ($.ne((await $.mv((await $.v(C, "main")), "Text")), "0")))))) {
    L0["v_type"] = 3;
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "perc")), "Text")), "0")), async () => ($.eq((await $.mv((await $.v(C, "main")), "Text")), "0")))))) {
    L0["v_type"] = 4;
  }
  if ($.truthy((await $.mv((await $.v(C, "RadioButton1")), "Checked")))) {
    L0["v_cash"] = 1;
  } else {
    L0["v_cash"] = 2;
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "OraclePackage1")), "CallProcedure", ["add_transaction", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "maincrprt")), "FieldByName", ["prtid"])), "Asstring")), L0["v_type"], (await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (await $.mv((await $.v(C, "main")), "Text")), (await $.mv((await $.v(C, "perc")), "Text")), (await $.mv((await $.v(C, "Description")), "Text")), (await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "mainloanacc")), "FieldByName", ["val_acc"])), "AsInteger")), (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue")), (await $.mv((await $.v(C, "memo4")), "Text")), (await $.mv((await $.v(C, "service")), "Text")), (await $.mv((await $.v(C, "DBLookupComboBox5")), "KeyValue")), (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]])));
  await $.stmt((await $.call(C, "ShowMessage", ["Ödəniş uğurla yaradıldı..."])));
  await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "refresh", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransacfrm", "CMSearchEdit1Enter", async function CMSearchEdit1Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Accselect", (await $.mcall((await $.v(C, "TAccselect")), "Create", [Self])));
  await $.mcall((await $.v(C, "Accselect")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransacfrm", "CurrencyEdit1KeyPress", async function CurrencyEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "r": 0, "column": 0, "column2": 0, "row": 0, "row2": 0, "keyb": ''};
  await $.fixArgs(L0, ["sender"]);
  { const $t1 = (await L0["key"].get());
    if ($.inRange($t1, "A", "H")) {
      await L0["key"].set("\u0000");
    }
    else if ($.inRange($t1, "J", "Z")) {
      await L0["key"].set("\u0000");
    }
    else if ($.inRange($t1, "a", "h")) {
      await L0["key"].set("\u0000");
    }
    else if ($.inRange($t1, "j", "z")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t1, "Ə")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t1, "Ü")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t1, "Ö")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t1, "Ğ")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t1, "Ş")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t1, "Ç")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t1, "İ")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t1, "I")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t1, "ə")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t1, "ü")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t1, "ö")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t1, "ğ")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t1, "ş")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t1, "ç")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t1, "i")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t1, "ı")) {
      await L0["key"].set("\u0000");
    }
    else if ($.inRange($t1, "0", "9")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.eq($t1, "/") || $.eq($t1, "-") || $.eq($t1, ":") || $.eq($t1, "(") || $.eq($t1, ")") || $.eq($t1, ".") || $.eq($t1, ",") || $.eq($t1, "'") || $.eq($t1, "+") || $.eq($t1, "{") || $.eq($t1, "}") || $.eq($t1, " ")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t1, "\b")) {
      await L0["key"].set("\u0000");
    }
    else {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransacfrm", "DBLookupComboBox1CloseUp", async function DBLookupComboBox1CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "memo1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "percentacc")), "FieldByName", ["name"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransacfrm", "DBLookupComboBox2CloseUp", async function DBLookupComboBox2CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "memo2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "mainloanacc")), "FieldByName", ["name"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransacfrm", "DBLookupComboBox3CloseUp", async function DBLookupComboBox3CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Description")), "Text", (await $.mv((await $.v(C, "DBLookupComboBox3")), "Text")));
  await $.mset((await $.v(C, "Description")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransacfrm", "DBLookupComboBox4CloseUp", async function DBLookupComboBox4CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "cashorsubkrno")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "cashorsubkrno")), "SetVariable", ["V_CSB", (await $.mv((await $.v(C, "edit1")), "Text"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "cashorsubkrno")), "SetVariable", ["val", (await $.mv((await $.v(C, "DBLookupComboBox4")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "cashorsubkrno")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransacfrm", "DBLookupComboBox5CloseUp", async function DBLookupComboBox5CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "memo5")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "xidmetacc")), "FieldByName", ["name"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransacfrm", "DBLookupComboboxEh1CloseUp", async function DBLookupComboboxEh1CloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  await $.mset((await $.v(C, "memo3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "cashorsubkrno")), "FieldByName", ["name"])), "AsString")));
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TTransacfrm", "DBLookupComboboxEh1Enter", async function DBLookupComboboxEh1Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Accselect", (await $.mcall((await $.v(C, "TAccselect")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "cashorsubkrno")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "cashorsubkrno")), "SetVariable", ["V_CSB", (await $.mv((await $.v(C, "edit1")), "Text"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "cashorsubkrno")), "SetVariable", ["val", (await $.mv((await $.v(C, "DBLookupComboBox4")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "cashorsubkrno")), "open", []);
  await $.mcall((await $.v(C, "Accselect")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransacfrm", "Edit1KeyPress", async function Edit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await L0["key"].get()), "\r")))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "cashorsubkrno")), "CloseAll", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "cashorsubkrno")), "SetVariable", ["V_CSB", (await $.mv((await $.v(C, "edit1")), "Text"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "cashorsubkrno")), "SetVariable", ["val", (await $.mv((await $.v(C, "DBLookupComboBox4")), "KeyValue"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "cashorsubkrno")), "open", []);
    await $.mcall((await $.v(C, "DBLookupComboboxEh1")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransacfrm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "mainloanacc")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "mainloanacc")), "SetVariable", ["V_ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "maincrprt")), "FieldByName", ["cust_id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "mainloanacc")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "percentacc")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "percentacc")), "SetVariable", ["V_ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "maincrprt")), "FieldByName", ["cust_id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "percentacc")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "datamod")), "Descrpts")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "datamod")), "borrowtype")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "datamod")), "xidmetacc")), "closeall", []);
  await $.mcall((await $.mv((await $.v(C, "datamod")), "pay_settings_desc")), "Open", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "xidmetacc")), "SetVariable", ["V_ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "maincrprt")), "FieldByName", ["cust_id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "datamod")), "xidmetacc")), "open", []);
  await $.mset((await $.v(C, "DateTimePicker1")), "Date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "sysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  await $.mset((await $.v(C, "DBLookupComboboxEh1")), "ListSource", (await $.mv((await $.v(C, "DataMod")), "DataSourc_cashorsub")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransacfrm", "MainKeyPress", async function MainKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "r": 0, "column": 0, "column2": 0, "row": 0, "row2": 0, "keyb": ''};
  await $.fixArgs(L0, ["sender"]);
  { const $t2 = (await L0["key"].get());
    if ($.inRange($t2, "A", "H")) {
      await L0["key"].set("\u0000");
    }
    else if ($.inRange($t2, "J", "Z")) {
      await L0["key"].set("\u0000");
    }
    else if ($.inRange($t2, "a", "h")) {
      await L0["key"].set("\u0000");
    }
    else if ($.inRange($t2, "j", "z")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t2, "Ə")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t2, "Ü")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t2, "Ö")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t2, "Ğ")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t2, "Ş")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t2, "Ç")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t2, "İ")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t2, "I")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t2, "ə")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t2, "ü")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t2, "ö")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t2, "ğ")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t2, "ş")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t2, "ç")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t2, "i")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t2, "ı")) {
      await L0["key"].set("\u0000");
    }
    else if ($.inRange($t2, "0", "9")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.eq($t2, ".")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.eq($t2, "/") || $.eq($t2, "-") || $.eq($t2, ":") || $.eq($t2, "(") || $.eq($t2, ")") || $.eq($t2, ",") || $.eq($t2, "'") || $.eq($t2, "+") || $.eq($t2, "{") || $.eq($t2, "}") || $.eq($t2, " ")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t2, "\b")) {
      await L0["key"].set("\u0000");
    }
    else {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransacfrm", "PercKeyPress", async function PercKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "r": 0, "column": 0, "column2": 0, "row": 0, "row2": 0, "keyb": ''};
  await $.fixArgs(L0, ["sender"]);
  { const $t3 = (await L0["key"].get());
    if ($.inRange($t3, "A", "H")) {
      await L0["key"].set("\u0000");
    }
    else if ($.inRange($t3, "J", "Z")) {
      await L0["key"].set("\u0000");
    }
    else if ($.inRange($t3, "a", "h")) {
      await L0["key"].set("\u0000");
    }
    else if ($.inRange($t3, "j", "z")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t3, "Ə")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t3, "Ü")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t3, "Ö")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t3, "Ğ")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t3, "Ş")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t3, "Ç")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t3, "İ")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t3, "I")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t3, "ə")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t3, "ü")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t3, "ö")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t3, "ğ")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t3, "ş")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t3, "ç")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t3, "i")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t3, "ı")) {
      await L0["key"].set("\u0000");
    }
    else if ($.inRange($t3, "0", "9")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.eq($t3, ".")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.eq($t3, "/") || $.eq($t3, "-") || $.eq($t3, ":") || $.eq($t3, "(") || $.eq($t3, ")") || $.eq($t3, ",") || $.eq($t3, "'") || $.eq($t3, "+") || $.eq($t3, "{") || $.eq($t3, "}") || $.eq($t3, " ")) {
      await L0["key"].set("\u0000");
    }
    else if ($.eq($t3, "\b")) {
      await L0["key"].set("\u0000");
    }
    else {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransacfrm", "RadioButton1Click", async function RadioButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "RadioButton1")), "Checked")))) {
    await $.mset((await $.v(C, "edit1")), "Text", "1001");
    { const $t4 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataMod")), "cashorsubkrno")), "SQL")), [8], ""); if ($t4 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataMod")), "cashorsubkrno")), "SQL", $t4); } }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransacfrm", "RadioButton2Click", async function RadioButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "RadioButton2")), "Checked")))) {
    await $.mset((await $.v(C, "edit1")), "Text", "2812");
    { const $t5 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataMod")), "cashorsubkrno")), "SQL")), [8], ""); if ($t5 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataMod")), "cashorsubkrno")), "SQL", $t5); } }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransacfrm", "RadioButton3Click", async function RadioButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "RadioButton3")), "Checked")))) {
    await $.mset((await $.v(C, "edit1")), "Text", "3801");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransacfrm", "RadioButton4Click", async function RadioButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "RadioButton4")), "Checked")))) {
    await $.mset((await $.v(C, "edit1")), "Text", "4501");
    { const $t6 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataMod")), "cashorsubkrno")), "SQL")), [8], ""); if ($t6 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataMod")), "cashorsubkrno")), "SQL", $t6); } }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransacfrm", "RadioButton5Click", async function RadioButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "RadioButton4")), "Checked")))) {
    await $.mset((await $.v(C, "edit1")), "Text", "4801");
    { const $t7 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataMod")), "cashorsubkrno")), "SQL")), [8], ""); if ($t7 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataMod")), "cashorsubkrno")), "SQL", $t7); } }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
