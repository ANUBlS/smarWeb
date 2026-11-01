// Generated from FormTransaction3Lmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FormTransaction3Lmpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "CurrencyEdit", "DBCtrls", "StdCtrls", "ExtCtrls", "Buttons", "XFSCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "OracleData", "DBGridEh", "DB", "UnitDataModPCustService", "PCustServiceFormImpl1", "SBTranslateProc", "sboapiDataModuleImpl", "CustomersImpl"]);
  const C = [U];
  U.enumType("ttransactionside", 3);
  U.const("tsDebet", 0);
  U.const("tsCredit", 1);
  U.const("tsUnknown", 2);
  U.defClass("TFormTransaction3", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "currencyedit2": {"name": "CurrencyEdit2", "type": "TCurrencyEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "currencyedit3": {"name": "CurrencyEdit3", "type": "TCurrencyEdit"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "label24": {"name": "Label24", "type": "TLabel"}, "dblookupceh_contrsname": {"name": "DBLookupCEh_contrsName", "type": "TDBLookupComboBox"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "xfbitbtn2": {"name": "XFBitBtn2", "type": "TXFBitBtn"}, "xfbitbtn3": {"name": "XFBitBtn3", "type": "TXFBitBtn"}, "xfbitbtn4": {"name": "XFBitBtn4", "type": "TXFBitBtn"}, "xfbitbtn5": {"name": "XFBitBtn5", "type": "TXFBitBtn"}, "xfbitbtn6": {"name": "XFBitBtn6", "type": "TXFBitBtn"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dblookupcomboboxeh_a1": {"name": "DBLookupComboboxEh_A1", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "editrate_a": {"name": "EditRate_A", "type": "TCurrencyEdit"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "label6": {"name": "Label6", "type": "TLabel"}, "edit_accname_a": {"name": "Edit_AccName_A", "type": "TEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "label25": {"name": "Label25", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbcboxaccno_a": {"name": "DBCBoxAccNo_A", "type": "TDBLookupComboboxEh"}, "edit9": {"name": "Edit9", "type": "TEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "label20": {"name": "Label20", "type": "TLabel"}, "label22": {"name": "Label22", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "edit8": {"name": "Edit8", "type": "TEdit"}, "edit18": {"name": "Edit18", "type": "TEdit"}, "editrate_b": {"name": "EditRate_B", "type": "TCurrencyEdit"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "edit11": {"name": "Edit11", "type": "TEdit"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh_b1": {"name": "DBLookupComboboxEh_B1", "type": "TDBLookupComboboxEh"}, "edit_accname_b": {"name": "Edit_AccName_B", "type": "TEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbcboxaccno_b": {"name": "DBCBoxAccNo_B", "type": "TDBLookupComboboxEh"}, "edit10": {"name": "Edit10", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit12": {"name": "Edit12", "type": "TEdit"}, "radiobu_jur": {"name": "RadioBu_jur", "type": "TRadioButton"}, "radiobu_phys": {"name": "RadioBu_phys", "type": "TRadioButton"}, "radiobu_fs": {"name": "RadioBu_fs", "type": "TRadioButton"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "edit_description": {"name": "Edit_description", "type": "TEdit"}, "dblookupcomboboxeh_description": {"name": "DBLookupComboboxEh_description", "type": "TDBLookupComboboxEh"}, "editdescription": {"name": "EditDescription", "type": "TEdit"}, "label26": {"name": "Label26", "type": "TLabel"}, "label27": {"name": "Label27", "type": "TLabel"}, "edit_ostata": {"name": "Edit_ostatA", "type": "TEdit"}, "edit_ostatb": {"name": "Edit_ostatB", "type": "TEdit"}, "modifed": {"name": "Modifed", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("FormTransaction3", null, "TFormTransaction3");
    U.var_("TransactionSide", null, "TTransactionSide");
    U.var_("v_ostat", 0, "Real");
    U.var_("v_accno", false, "Boolean");
  });
  U.method("TFormTransaction3", "CurrencyEdit1Change", async function CurrencyEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DataModPCustService"));
    if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(((await $.mv((await $.wv([$t1], "ODS_AccNO_A", C, false)), "active"))), async () => ($.ne((await $.mv((await $.wv([$t1], "ODS_AccNO_A", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t1], "ODS_AccNO_A", C, false)), "FieldByName", ["id"])), "IsNull"))))))), async () => ((await $.mv((await $.wv([$t1], "ODS_AccNO_B", C, false)), "active"))))), async () => ($.ne((await $.mv((await $.wv([$t1], "ODS_AccNO_B", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t1], "ODS_AccNO_B", C, false)), "FieldByName", ["id"])), "IsNull"))))))))) {
      if ($.truthy($.eq((await $.mv((await $.wcall([$t1], "TCurrencyEdit", [(await $.wv([$t1], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "Text")), (await $.wv([$t1], "EmptyStr", C, false))))) {
        await $.mset((await $.wcall([$t1], "TCurrencyEdit", [(await $.wv([$t1], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "Value", 0);
      }
      { const $t2 = (await $.mv((await $.wcall([$t1], "TCurrencyEdit", [(await $.wv([$t1], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "Tag"));
        if ($.eq($t2, 1)) {
          await $.wset([$t1], "TransactionSide", (await $.wv([$t1], "tsDebet", C, false)), C);
        }
        else if ($.eq($t2, 2)) {
          await $.wset([$t1], "TransactionSide", (await $.wv([$t1], "tsCredit", C, false)), C);
        }
        else if ($.eq($t2, 3)) {
          await $.wset([$t1], "TransactionSide", (await $.wv([$t1], "tsUnknown", C, false)), C);
        }
      }
      await $.stmt((await $.wcall([$t1], "SetAmmounts", [(await $.wv([$t1], "TransactionSide", C, false))], C)));
      await $.wset([$t1], "Modifed", (await $.wv([$t1], "True", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction3", "CurrencyEdit1Click", async function CurrencyEdit1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CurrencyEdit1")), "Text", "");
  await $.mset((await $.v(C, "CurrencyEdit2")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction3", "RoundNew", async function RoundNew(Self, p0, p1) {
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
  U.method("TFormTransaction3", "SetAmmounts", async function SetAmmounts(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionside": $.copyArg(p0), result: undefined, "debetrate": 0, "creditrate": 0, "debitammount": 0, "creditammount": 0, "lammount": 0};
  await $.fixArgs(L0, ["transactionside"]);
  {
    const $t3 = (await $.v(C, "DataModPCustService"));
    await $.wset([$t3], "DebetRate", (await $.mv((await $.mcall((await $.wv([$t3], "ODS_AccNO_A", C, false)), "FieldByName", ["ostat"])), "AsFloat")), { get: async () => L0["debetrate"], set: async (v) => { L0["debetrate"] = v; }, local: true });
    await $.wset([$t3], "CreditRate", (await $.mv((await $.mcall((await $.wv([$t3], "ODS_AccNO_B", C, false)), "FieldByName", ["ostat"])), "AsFloat")), { get: async () => L0["creditrate"], set: async (v) => { L0["creditrate"] = v; }, local: true });
  }
  { const $t4 = L0["transactionside"];
    if ($.eq($t4, (await $.v(C, "tsDebet")))) {
      L0["lammount"] = (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "CurrencyEdit1")), "Value")), L0["debetrate"]), 1000000]));
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B")), "FieldByName", ["ID"])), "AsInteger"))))) {
        L0["creditammount"] = (await $.mv((await $.v(C, "CurrencyEdit1")), "Value"));
      } else {
        L0["creditammount"] = (await $.call(C, "RoundNew", [$.fdiv(L0["lammount"], L0["creditrate"]), 1000000]));
      }
      await $.mset((await $.v(C, "CurrencyEdit2")), "Value", (await $.call(C, "RoundNew", [L0["creditammount"], 100])));
    }
    else if ($.eq($t4, (await $.v(C, "tsCredit")))) {
      L0["lammount"] = (await $.call(C, "RoundNew", [$.mul((await $.mv((await $.v(C, "CurrencyEdit2")), "Value")), L0["creditrate"]), 1000000]));
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B")), "FieldByName", ["ID"])), "AsInteger"))))) {
        L0["debitammount"] = (await $.mv((await $.v(C, "CurrencyEdit2")), "Value"));
      } else {
        L0["debitammount"] = (await $.call(C, "RoundNew", [$.fdiv(L0["lammount"], L0["debetrate"]), 1000000]));
      }
      await $.mset((await $.v(C, "CurrencyEdit1")), "Value", (await $.call(C, "RoundNew", [L0["debitammount"], 100])));
    }
    else if ($.eq($t4, (await $.v(C, "tsUnknown")))) {
      {
        const $t5 = (await $.v(C, "DataModPCustService"));
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t5], "ODS_AccNO_A", C, false)), "FieldByName", ["ID"])), "AsInteger")), 0))) {
          await $.mset((await $.wv([$t5], "CurrencyEdit1", C, false)), "Value", (await $.mv((await $.wv([$t5], "CurrencyEdit2", C, false)), "Value")));
        }
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t5], "ODS_AccNO_B", C, false)), "FieldByName", ["ID"])), "AsInteger")), 0))) {
          await $.mset((await $.wv([$t5], "CurrencyEdit2", C, false)), "Value", (await $.mv((await $.wv([$t5], "CurrencyEdit1", C, false)), "Value")));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["TransactionSide"], "kind": "procedure", "ptypes": ["TTransactionSide"]});
  U.method("TFormTransaction3", "CurrencyEdit1KeyPress", async function CurrencyEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", (await $.call(C, "Chr", [8]))])))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction3", "CurrencyEdit1KeyUp", async function CurrencyEdit1KeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined, "deb_rate": 0, "kred_rate": 0, "debitammount": 0, "creditammount": 0, "lammount": 0};
  await $.fixArgs(L0, ["sender", "shift"]);
  {
    const $t6 = (await $.v(C, "DataModPCustService"));
    if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(((await $.mv((await $.wv([$t6], "ODS_AccNO_A", C, false)), "active"))), async () => ($.ne((await $.mv((await $.wv([$t6], "ODS_AccNO_A", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t6], "ODS_AccNO_A", C, false)), "FieldByName", ["id"])), "IsNull"))))))), async () => ((await $.mv((await $.wv([$t6], "ODS_AccNO_B", C, false)), "active"))))), async () => ($.ne((await $.mv((await $.wv([$t6], "ODS_AccNO_B", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t6], "ODS_AccNO_B", C, false)), "FieldByName", ["id"])), "IsNull"))))))), async () => ($.gt((await $.mv((await $.wv([$t6], "CurrencyEdit1", C, false)), "Value")), 0)))))) {
      await $.mset((await $.wv([$t6], "XFBitBtn5", C, false)), "Enabled", (await $.wv([$t6], "True", C, false)));
    } else {
      await $.mset((await $.wv([$t6], "XFBitBtn5", C, false)), "Enabled", (await $.wv([$t6], "False", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormTransaction3", "CurrencyEdit2Change", async function CurrencyEdit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "DataModPCustService"));
    if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(((await $.mv((await $.wv([$t7], "ODS_AccNO_A", C, false)), "active"))), async () => ($.ne((await $.mv((await $.wv([$t7], "ODS_AccNO_A", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t7], "ODS_AccNO_A", C, false)), "FieldByName", ["id"])), "IsNull"))))))), async () => ((await $.mv((await $.wv([$t7], "ODS_AccNO_B", C, false)), "active"))))), async () => ($.ne((await $.mv((await $.wv([$t7], "ODS_AccNO_B", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t7], "ODS_AccNO_B", C, false)), "FieldByName", ["id"])), "IsNull"))))))))) {
      if ($.truthy($.eq((await $.mv((await $.wcall([$t7], "TCurrencyEdit", [(await $.wv([$t7], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "Text")), (await $.wv([$t7], "EmptyStr", C, false))))) {
        await $.mset((await $.wcall([$t7], "TCurrencyEdit", [(await $.wv([$t7], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "Value", 0);
      }
      { const $t8 = (await $.mv((await $.wcall([$t7], "TCurrencyEdit", [(await $.wv([$t7], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "Tag"));
        if ($.eq($t8, 1)) {
          await $.wset([$t7], "TransactionSide", (await $.wv([$t7], "tsDebet", C, false)), C);
        }
        else if ($.eq($t8, 2)) {
          await $.wset([$t7], "TransactionSide", (await $.wv([$t7], "tsCredit", C, false)), C);
        }
        else if ($.eq($t8, 3)) {
          await $.wset([$t7], "TransactionSide", (await $.wv([$t7], "tsUnknown", C, false)), C);
        }
      }
      await $.stmt((await $.wcall([$t7], "SetAmmounts", [(await $.wv([$t7], "TransactionSide", C, false))], C)));
      await $.wset([$t7], "Modifed", (await $.wv([$t7], "True", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction3", "CurrencyEdit2Click", async function CurrencyEdit2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CurrencyEdit2")), "Text", "");
  await $.mset((await $.v(C, "CurrencyEdit1")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction3", "CurrencyEdit2KeyPress", async function CurrencyEdit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", (await $.call(C, "Chr", [8]))])))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction3", "CurrencyEdit2KeyUp", async function CurrencyEdit2KeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined, "deb_rate": 0, "kred_rate": 0};
  await $.fixArgs(L0, ["sender", "shift"]);
  {
    const $t9 = (await $.v(C, "DataModPCustService"));
    if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(((await $.mv((await $.wv([$t9], "ODS_AccNO_A", C, false)), "active"))), async () => ($.ne((await $.mv((await $.wv([$t9], "ODS_AccNO_A", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t9], "ODS_AccNO_A", C, false)), "FieldByName", ["id"])), "IsNull"))))))), async () => ((await $.mv((await $.wv([$t9], "ODS_AccNO_B", C, false)), "active"))))), async () => ($.ne((await $.mv((await $.wv([$t9], "ODS_AccNO_B", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t9], "ODS_AccNO_B", C, false)), "FieldByName", ["id"])), "IsNull"))))))), async () => ($.gt((await $.mv((await $.wv([$t9], "CurrencyEdit2", C, false)), "Value")), 0)))))) {
      await $.mset((await $.wv([$t9], "XFBitBtn5", C, false)), "Enabled", (await $.wv([$t9], "True", C, false)));
    } else {
      await $.mset((await $.wv([$t9], "XFBitBtn5", C, false)), "Enabled", (await $.wv([$t9], "False", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormTransaction3", "CurrencyEdit3Click", async function CurrencyEdit3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CurrencyEdit3")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction3", "CurrencyEdit3KeyPress", async function CurrencyEdit3KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", (await $.call(C, "Chr", [8]))])))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction3", "CurrencyEdit3KeyUp", async function CurrencyEdit3KeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined, "deb_rate": 0, "kred_rate": 0};
  await $.fixArgs(L0, ["sender", "shift"]);
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormTransaction3", "DBCBoxAccNo_AChange", async function DBCBoxAccNo_AChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "deb_rate": 0, "kred_rate": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.v(C, "DataModPCustService"));
    await $.mcall((await $.wv([$t10], "Ods_Tenostat_A", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t10], "Ods_Tenostat_A", C, false)), "SetVariable", ["id", (await $.mv((await $.mcall((await $.wv([$t10], "ODS_AccNO_A", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t10], "Ods_Tenostat_A", C, false)), "Open", []);
    await $.mset((await $.wv([$t10], "Edit_ostatA", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t10], "Ods_Tenostat_A", C, false)), "FieldByName", ["ostat"])), "AsString")));
  }
  await $.mset((await $.v(C, "edit9")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "FieldByName", ["bal_cn1"])), "AsString")));
  await $.mset((await $.v(C, "EditRate_A")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "FieldByName", ["ostat"])), "AsString")));
  await $.mset((await $.v(C, "Edit_AccName_A")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "FieldByName", ["name"])), "AsString")));
  {
    const $t11 = (await $.v(C, "DataModPCustService"));
    if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.wv([$t11], "DBCBoxAccNo_A", C, false)), "KeyValue")), "")), async () => ($.gt((await $.mv((await $.wv([$t11], "CurrencyEdit1", C, false)), "Value")), 0)))), async () => ($.ne((await $.mv((await $.wv([$t11], "ODS_AccNO_A", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t11], "ODS_AccNO_A", C, false)), "FieldByName", ["id"])), "IsNull"))))))), async () => ((await $.mv((await $.wv([$t11], "ODS_AccNO_B", C, false)), "active"))))), async () => ($.ne((await $.mv((await $.wv([$t11], "ODS_AccNO_B", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t11], "ODS_AccNO_B", C, false)), "FieldByName", ["id"])), "IsNull"))))))))) {
      await $.wset([$t11], "v_ostat", (await $.mcall((await $.wv([$t11], "PG_PCustService", C, false)), "CallFloatFunction", ["get_rate", [(-(1)), (await $.mv((await $.mcall((await $.wv([$t11], "ODS_AccNO_A", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t11], "ODS_AccNO_B", C, false)), "FieldByName", ["ID"])), "AsInteger")), "-1", "-1"]])), C);
      await $.mset((await $.wv([$t11], "XFBitBtn5", C, false)), "Enabled", (await $.wv([$t11], "True", C, false)));
      await $.wset([$t11], "deb_rate", (await $.mcall((await $.wv([$t11], "PG_PCustService", C, false)), "GetParameter", [3])), { get: async () => L0["deb_rate"], set: async (v) => { L0["deb_rate"] = v; }, local: true });
      await $.wset([$t11], "kred_rate", (await $.mcall((await $.wv([$t11], "PG_PCustService", C, false)), "GetParameter", [4])), { get: async () => L0["kred_rate"], set: async (v) => { L0["kred_rate"] = v; }, local: true });
      await $.mcall((await $.wv([$t11], "CurrencyEdit1", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t11], "CurrencyEdit2", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t11], "CurrencyEdit3", C, false)), "Clear", []);
    } else {
      await $.mset((await $.wv([$t11], "XFBitBtn5", C, false)), "Enabled", (await $.wv([$t11], "False", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction3", "DBCBoxAccNo_ACloseUp", async function DBCBoxAccNo_ACloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "FieldByName", ["symb"])), "isnull")))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh_A1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_account_symbols_A")), "FieldByName", ["symbol"])), "AsString")));
    await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "FieldByName", ["filial"])), "AsInteger")));
  } else {
    await $.mset((await $.v(C, "DBLookupComboboxEh_A1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "FieldByName", ["symb"])), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormTransaction3", "DBCBoxAccNo_AlCloseUp", async function DBCBoxAccNo_AlCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLookupComboboxEh_A1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "FieldByName", ["symb"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction3", "DBCBoxAccNo_BChange", async function DBCBoxAccNo_BChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "deb_rate": 0, "kred_rate": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (await $.v(C, "DataModPCustService"));
    await $.mcall((await $.wv([$t12], "Ods_Tenostat_B", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t12], "Ods_Tenostat_B", C, false)), "SetVariable", ["id", (await $.mv((await $.mcall((await $.wv([$t12], "ODS_AccNO_B", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t12], "Ods_Tenostat_B", C, false)), "Open", []);
    await $.mset((await $.wv([$t12], "Edit_ostatB", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t12], "Ods_Tenostat_B", C, false)), "FieldByName", ["ostat"])), "AsString")));
  }
  await $.mset((await $.v(C, "edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B")), "FieldByName", ["bal_cn1"])), "AsString")));
  await $.mset((await $.v(C, "EditRate_B")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B")), "FieldByName", ["ostat"])), "AsString")));
  await $.mset((await $.v(C, "Edit_AccName_B")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B")), "FieldByName", ["name"])), "AsString")));
  {
    const $t13 = (await $.v(C, "DataModPCustService"));
    if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.wv([$t13], "DBCBoxAccNo_A", C, false)), "KeyValue")), "")), async () => ($.gt((await $.mv((await $.wv([$t13], "CurrencyEdit1", C, false)), "Value")), 0)))), async () => ($.ne((await $.mv((await $.wv([$t13], "ODS_AccNO_A", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t13], "ODS_AccNO_A", C, false)), "FieldByName", ["id"])), "IsNull"))))))), async () => ((await $.mv((await $.wv([$t13], "ODS_AccNO_A", C, false)), "active"))))), async () => ($.ne((await $.mv((await $.wv([$t13], "ODS_AccNO_B", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t13], "ODS_AccNO_B", C, false)), "FieldByName", ["id"])), "IsNull"))))))))) {
      await $.wset([$t13], "v_ostat", (await $.mcall((await $.wv([$t13], "PG_PCustService", C, false)), "CallFloatFunction", ["get_rate", [(-(1)), (await $.mv((await $.mcall((await $.wv([$t13], "ODS_AccNO_A", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t13], "ODS_AccNO_B", C, false)), "FieldByName", ["ID"])), "AsInteger")), "-1", "-1"]])), C);
      await $.mset((await $.wv([$t13], "XFBitBtn5", C, false)), "Enabled", (await $.wv([$t13], "True", C, false)));
      await $.wset([$t13], "deb_rate", (await $.mcall((await $.wv([$t13], "PG_PCustService", C, false)), "GetParameter", [3])), { get: async () => L0["deb_rate"], set: async (v) => { L0["deb_rate"] = v; }, local: true });
      await $.wset([$t13], "kred_rate", (await $.mcall((await $.wv([$t13], "PG_PCustService", C, false)), "GetParameter", [4])), { get: async () => L0["kred_rate"], set: async (v) => { L0["kred_rate"] = v; }, local: true });
      await $.mcall((await $.wv([$t13], "CurrencyEdit1", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t13], "CurrencyEdit2", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t13], "CurrencyEdit3", C, false)), "Clear", []);
    } else {
      await $.mset((await $.wv([$t13], "XFBitBtn5", C, false)), "Enabled", (await $.wv([$t13], "False", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction3", "DBCBoxAccNo_BCloseUp", async function DBCBoxAccNo_BCloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined, "v_key": ''};
  await $.fixArgs(L0, ["sender", "accept"]);
  await $.set(C, "v_accno", true);
  { const $t14 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B")), "FieldByName", ["cust_type"])), "AsInteger"));
    if ($.eq($t14, 1)) {
      await $.mset((await $.v(C, "RadioBu_phys")), "Checked", true);
    }
    else if ($.eq($t14, 2)) {
      await $.mset((await $.v(C, "RadioBu_fs")), "Checked", true);
    }
  }
  if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B")), "FieldByName", ["symb"])), "isnull")))) {
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_account_symbols_B")), "first", []);
    await $.mset((await $.v(C, "DBLookupComboboxEh_B1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_account_symbols_B")), "FieldByName", ["symbol"])), "AsString")));
    await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B")), "FieldByName", ["filial"])), "AsInteger")));
  } else {
    await $.mset((await $.v(C, "DBLookupComboboxEh_B1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B")), "FieldByName", ["symb"])), "AsString")));
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBCBoxAccNo_B")), "Text")), ""))) {
    await $.mset((await $.v(C, "edit8")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B")), "FieldByName", ["kli_id"])), "AsString")));
    L0["v_key"] = (await $.call(C, "char", [13]));
    await $.stmt((await $.call(C, "Edit8KeyPress", [(await $.v(C, "Edit8")), $.ref(async () => L0["v_key"], async ($t15) => { L0["v_key"] = $t15; })])));
  }
  await $.set(C, "v_accno", false);
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormTransaction3", "DBLookupComboboxEh2CloseUp", async function DBLookupComboboxEh2CloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined, "a": '', "b": '', "s": ''};
  await $.fixArgs(L0, ["sender", "accept"]);
  if ($.truthy(($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh_A1")), "KeyValue")), "")))) {
    {
      const $t16 = (await $.v(C, "DataModPCustService"));
      const $t17 = (await $.wv([$t16], "ODS_AccNO_A", C, false));
      await $.wset([$t16, $t17], "s", "", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.wset([$t16, $t17], "a", (await $.mv((await $.wv([$t16, $t17], "DBLookupComboboxEh_A1", C, false)), "KeyValue")), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
      await $.wset([$t16, $t17], "b", (await $.wcall([$t16, $t17], "inttostr", [(await $.mv((await $.wv([$t16, $t17], "DBLookupComboboxEh2", C, false)), "KeyValue"))], C)), { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true });
      if ($.truthy($.ne((await $.wv([$t16, $t17], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), "hhh"))) {
        await $.wset([$t16, $t17], "s", $.add($.add("and  a.symb like  '%", (await $.wv([$t16, $t17], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))), "%'"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      if ($.truthy($.ne((await $.wv([$t16, $t17], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false)), "-1"))) {
        await $.wset([$t16, $t17], "s", $.add($.add((await $.wv([$t16, $t17], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), " and a.filial="), (await $.wv([$t16, $t17], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      await $.stmt($.wcall([$t16, $t17], "close", [], C));
      { const $t18 = await $.iset((await $.wv([$t16, $t17], "sql", C, false)), [14], (await $.wv([$t16, $t17], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))); if ($t18 !== undefined) { await $.wset([$t16, $t17], "sql", $t18, C); } }
      await $.stmt($.wcall([$t16, $t17], "open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormTransaction3", "DBLookupComboboxEh3CloseUp", async function DBLookupComboboxEh3CloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined, "a": '', "b": '', "s": ''};
  await $.fixArgs(L0, ["sender", "accept"]);
  if ($.truthy(($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh_B1")), "KeyValue")), "")))) {
    {
      const $t19 = (await $.v(C, "DataModPCustService"));
      const $t20 = (await $.wv([$t19], "ODS_AccNO_B", C, false));
      await $.wset([$t19, $t20], "s", "", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.wset([$t19, $t20], "a", (await $.mv((await $.wv([$t19, $t20], "DBLookupComboboxEh_B1", C, false)), "KeyValue")), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
      await $.wset([$t19, $t20], "b", (await $.wcall([$t19, $t20], "inttostr", [(await $.mv((await $.wv([$t19, $t20], "DBLookupComboboxEh3", C, false)), "KeyValue"))], C)), { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true });
      if ($.truthy($.ne((await $.wv([$t19, $t20], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), "hhh"))) {
        await $.wset([$t19, $t20], "s", $.add($.add("and  a.symb like  '%", (await $.wv([$t19, $t20], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))), "%'"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      if ($.truthy($.ne((await $.wv([$t19, $t20], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false)), "-1"))) {
        await $.wset([$t19, $t20], "s", $.add($.add((await $.wv([$t19, $t20], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), " and a.filial="), (await $.wv([$t19, $t20], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      await $.stmt($.wcall([$t19, $t20], "close", [], C));
      { const $t21 = await $.iset((await $.wv([$t19, $t20], "sql", C, false)), [14], (await $.wv([$t19, $t20], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))); if ($t21 !== undefined) { await $.wset([$t19, $t20], "sql", $t21, C); } }
      await $.stmt($.wcall([$t19, $t20], "open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormTransaction3", "DBLookupComboboxEh_A1Change", async function DBLookupComboboxEh_A1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction3", "DBLookupComboboxEh_A1CloseUp", async function DBLookupComboboxEh_A1CloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined, "a": '', "b": '', "s": ''};
  await $.fixArgs(L0, ["sender", "accept"]);
  if ($.truthy(($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh_A1")), "KeyValue")), "")))) {
    {
      const $t22 = (await $.v(C, "DataModPCustService"));
      const $t23 = (await $.wv([$t22], "ODS_AccNO_A", C, false));
      await $.wset([$t22, $t23], "s", "", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.wset([$t22, $t23], "a", (await $.mv((await $.wv([$t22, $t23], "DBLookupComboboxEh_A1", C, false)), "KeyValue")), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
      await $.wset([$t22, $t23], "b", (await $.wcall([$t22, $t23], "inttostr", [(await $.mv((await $.wv([$t22, $t23], "DBLookupComboboxEh2", C, false)), "KeyValue"))], C)), { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true });
      if ($.truthy($.ne((await $.wv([$t22, $t23], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), "hhh"))) {
        await $.wset([$t22, $t23], "s", $.add($.add("and  a.symb like  '%", (await $.wv([$t22, $t23], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))), "%'"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      if ($.truthy($.ne((await $.wv([$t22, $t23], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false)), "-1"))) {
        await $.wset([$t22, $t23], "s", $.add($.add((await $.wv([$t22, $t23], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), " and a.filial="), (await $.wv([$t22, $t23], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      await $.stmt($.wcall([$t22, $t23], "close", [], C));
      { const $t24 = await $.iset((await $.wv([$t22, $t23], "sql", C, false)), [14], (await $.wv([$t22, $t23], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))); if ($t24 !== undefined) { await $.wset([$t22, $t23], "sql", $t24, C); } }
      await $.stmt($.wcall([$t22, $t23], "open", [], C));
      if ($.truthy($.eq((await $.wv([$t22, $t23], "RecordCount", C, false)), 1))) {
        await $.mset((await $.wv([$t22, $t23], "DBCBoxAccNo_A", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t22, $t23], "DataModPCustService", C, false)), "ODS_AccNO_A")), "FieldByName", ["acc_no"])), "AsString")));
      } else {
        await $.mset((await $.wv([$t22, $t23], "DBCBoxAccNo_A", C, false)), "KeyValue", "");
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormTransaction3", "DBLookupComboboxEh_B1CloseUp", async function DBLookupComboboxEh_B1CloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined, "a": '', "b": '', "s": ''};
  await $.fixArgs(L0, ["sender", "accept"]);
  if ($.truthy(($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh_B1")), "KeyValue")), "")))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", (-(1)));
    {
      const $t25 = (await $.v(C, "DataModPCustService"));
      const $t26 = (await $.wv([$t25], "ODS_AccNO_B", C, false));
      await $.wset([$t25, $t26], "s", "", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.wset([$t25, $t26], "a", (await $.mv((await $.wv([$t25, $t26], "DBLookupComboboxEh_B1", C, false)), "KeyValue")), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
      await $.wset([$t25, $t26], "b", (await $.wcall([$t25, $t26], "inttostr", [(await $.mv((await $.wv([$t25, $t26], "DBLookupComboboxEh3", C, false)), "KeyValue"))], C)), { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true });
      if ($.truthy($.ne((await $.wv([$t25, $t26], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), "hhh"))) {
        await $.wset([$t25, $t26], "s", $.add($.add("and  a.symb like  '%", (await $.wv([$t25, $t26], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))), "%'"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      if ($.truthy($.ne((await $.wv([$t25, $t26], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false)), "-1"))) {
        await $.wset([$t25, $t26], "s", $.add($.add((await $.wv([$t25, $t26], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), " and a.filial="), (await $.wv([$t25, $t26], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      await $.stmt($.wcall([$t25, $t26], "close", [], C));
      { const $t27 = await $.iset((await $.wv([$t25, $t26], "sql", C, false)), [14], (await $.wv([$t25, $t26], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))); if ($t27 !== undefined) { await $.wset([$t25, $t26], "sql", $t27, C); } }
      await $.stmt($.wcall([$t25, $t26], "open", [], C));
    }
  }
  {
    const $t28 = (await $.v(C, "DataModPCustService"));
    const $t29 = (await $.wv([$t28], "ODS_AccNO_B", C, false));
    if ($.truthy($.eq((await $.wv([$t28, $t29], "RecordCount", C, false)), 1))) {
      await $.mset((await $.wv([$t28, $t29], "DBCBoxAccNo_B", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t28, $t29], "DataModPCustService", C, false)), "ODS_AccNO_B")), "FieldByName", ["acc_no"])), "AsString")));
    } else {
      await $.mset((await $.wv([$t28, $t29], "DBCBoxAccNo_B", C, false)), "KeyValue", "");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormTransaction3", "DBLookupComboboxEh_descriptionChange", async function DBLookupComboboxEh_descriptionChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh_description")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.mset((await $.v(C, "Edit_description")), "Text", (await $.mv((await $.v(C, "DBLookupComboboxEh_description")), "KeyValue")));
  }
  await $.mset((await $.v(C, "EditDescription")), "Text", (await $.mv((await $.v(C, "DBLookupComboboxEh_description")), "text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction3", "Edit1KeyPress", async function Edit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "v_cust_type_id": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t30 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS"));
      await $.stmt($.wcall([$t30], "close", [], C));
      { const $t31 = await $.iset((await $.wv([$t30], "sql", C, false)), [8], " "); if ($t31 !== undefined) { await $.wset([$t30], "sql", $t31, C); } }
      if ($.truthy($.ne((await $.mv((await $.wv([$t30], "Edit1", C, false)), "Text")), ""))) {
        { const $t32 = await $.iset((await $.wv([$t30], "sql", C, false)), [8], $.add($.add((await $.idx((await $.wv([$t30], "sql", C, false)), [8])), " and c.ID = "), (await $.mv((await $.wv([$t30], "Edit1", C, false)), "Text")))); if ($t32 !== undefined) { await $.wset([$t30], "sql", $t32, C); } }
      }
      await $.stmt($.wcall([$t30], "open", [], C));
      if ($.truthy($.eq((await $.wv([$t30], "RecordCount", C, false)), 0))) {
        await $.stmt((await $.wcall([$t30], "ShowMessage", ["Belə müştəri yoxdu  !"], C)));
        await $.mcall((await $.wv([$t30], "Edit1", C, false)), "Clear", []);
      }
      await $.mset((await $.wv([$t30], "Edit3", C, false)), "Text", (await $.mv((await $.wcall([$t30], "FieldByName", ["cust_name"], C)), "AsString")));
      {
        const $t33 = (await $.mv((await $.wv([$t30], "DataModPCustService", C, false)), "ODS_AccNO_A"));
        await $.stmt($.wcall([$t30, $t33], "close", [], C));
        await $.stmt((await $.wcall([$t30, $t33], "SetVariable", ["CustID", (await $.wcall([$t30, $t33], "strtoint", [(await $.mv((await $.wv([$t30, $t33], "Edit1", C, false)), "Text"))], C))], C)));
        await $.stmt($.wcall([$t30, $t33], "open", [], C));
      }
    }
    if ($.truthy($.le((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "RecordCount")), 2))) {
      await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "First", []);
      await $.mset((await $.v(C, "DBCBoxAccNo_A")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "FieldByName", ["acc_no"])), "AsString")));
      await $.mset((await $.v(C, "DBLookupComboboxEh_A1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "FieldByName", ["symb"])), "AsString")));
    } else {
      await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "Last", []);
      await $.mset((await $.v(C, "DBLookupComboboxEh_A1")), "KeyValue", " ");
    }
    await $.mcall((await $.v(C, "CurrencyEdit1")), "Clear", []);
    await $.mcall((await $.v(C, "CurrencyEdit2")), "Clear", []);
    await $.mcall((await $.v(C, "CurrencyEdit3")), "Clear", []);
    await $.mcall((await $.v(C, "EditDescription")), "Clear", []);
    await $.mcall((await $.v(C, "EditRate_A")), "Clear", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction3", "Edit2Change", async function Edit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction3", "Edit2KeyPress", async function Edit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    await $.mcall((await $.v(C, "XFButton1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction3", "Edit8Change", async function Edit8Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t34 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B"));
    await $.mset((await $.wv([$t34], "DBLookupComboboxEh3", C, false)), "KeyValue", (-(1)));
    await $.stmt($.wcall([$t34], "close", [], C));
    await $.stmt((await $.wcall([$t34], "SetVariable", ["custtype", " in (0,1,2)"], C)));
    await $.stmt($.wcall([$t34], "open", [], C));
  }
  await $.mset((await $.v(C, "RadioBu_phys")), "Checked", false);
  await $.mset((await $.v(C, "RadioBu_jur")), "Checked", false);
  await $.mset((await $.v(C, "RadioBu_fs")), "Checked", false);
  await $.mset((await $.v(C, "RadioBu_phys")), "Enabled", true);
  await $.mset((await $.v(C, "RadioBu_jur")), "Enabled", true);
  await $.mset((await $.v(C, "RadioBu_fs")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction3", "Edit8KeyPress", async function Edit8KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "v_cust_type_id": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t35 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS1"));
      await $.stmt($.wcall([$t35], "close", [], C));
      { const $t36 = await $.iset((await $.wv([$t35], "sql", C, false)), [8], " "); if ($t36 !== undefined) { await $.wset([$t35], "sql", $t36, C); } }
      if ($.truthy($.ne((await $.mv((await $.wv([$t35], "Edit8", C, false)), "Text")), ""))) {
        { const $t37 = await $.iset((await $.wv([$t35], "sql", C, false)), [8], $.add($.add((await $.idx((await $.wv([$t35], "sql", C, false)), [8])), " and c.ID = "), (await $.mv((await $.wv([$t35], "Edit8", C, false)), "Text")))); if ($t37 !== undefined) { await $.wset([$t35], "sql", $t37, C); } }
      }
      await $.stmt($.wcall([$t35], "open", [], C));
      if ($.truthy($.eq((await $.wv([$t35], "RecordCount", C, false)), 0))) {
        await $.stmt((await $.wcall([$t35], "ShowMessage", ["Belə müştəri yoxdu  !"], C)));
        await $.mcall((await $.wv([$t35], "Edit8", C, false)), "Clear", []);
      }
      await $.mset((await $.wv([$t35], "Edit10", C, false)), "Text", (await $.mv((await $.wcall([$t35], "FieldByName", ["cust_name"], C)), "AsString")));
      if ($.truthy($.ne((await $.mv((await $.wv([$t35], "edit8", C, false)), "Text")), ""))) {
        {
          const $t38 = (await $.mv((await $.wv([$t35], "DataModPCustService", C, false)), "ODS_AccNO_B"));
          await $.stmt($.wcall([$t35, $t38], "close", [], C));
          { const $t39 = await $.iset((await $.wv([$t35, $t38], "sql", C, false)), [11], ""); if ($t39 !== undefined) { await $.wset([$t35, $t38], "sql", $t39, C); } }
          { const $t40 = await $.iset((await $.wv([$t35, $t38], "sql", C, false)), [11], $.add($.add((await $.idx((await $.wv([$t35, $t38], "sql", C, false)), [11])), " and  kli_ID = "), ((await $.mv((await $.wv([$t35, $t38], "Edit8", C, false)), "Text"))))); if ($t40 !== undefined) { await $.wset([$t35, $t38], "sql", $t40, C); } }
          await $.stmt($.wcall([$t35, $t38], "open", [], C));
        }
      }
      await $.wset([$t35], "v_cust_type_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t35], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS1")), "FieldByName", ["CUST_TYPE"])), "AsInteger")), { get: async () => L0["v_cust_type_id"], set: async (v) => { L0["v_cust_type_id"] = v; }, local: true });
      if ($.truthy($.in_((await $.wv([$t35], "v_cust_type_id", { get: async () => L0["v_cust_type_id"], set: async (v) => { L0["v_cust_type_id"] = v; }, local: true }, false)), [0, 2]))) {
        await $.mset((await $.wv([$t35], "Edit11", C, false)), "Visible", (await $.wv([$t35], "True", C, false)));
        await $.mset((await $.wv([$t35], "Edit11", C, false)), "Text", (await $.mv((await $.wcall([$t35], "FieldByName", ["inn"], C)), "AsString")));
        await $.mset((await $.wv([$t35], "Edit7", C, false)), "Visible", (await $.wv([$t35], "False", C, false)));
        await $.mset((await $.wv([$t35], "Edit18", C, false)), "Visible", (await $.wv([$t35], "False", C, false)));
        await $.mset((await $.wv([$t35], "Label18", C, false)), "Caption", "Vöen");
        await $.mset((await $.wv([$t35], "edit12", C, false)), "Visible", (await $.wv([$t35], "false", C, false)));
        await $.mset((await $.wv([$t35], "Label16", C, false)), "Visible", (await $.wv([$t35], "false", C, false)));
      } else {
        await $.mset((await $.wv([$t35], "Edit7", C, false)), "Visible", (await $.wv([$t35], "True", C, false)));
        await $.mset((await $.wv([$t35], "Edit18", C, false)), "Visible", (await $.wv([$t35], "True", C, false)));
      }
      if ($.truthy($.eq((await $.wv([$t35], "v_cust_type_id", { get: async () => L0["v_cust_type_id"], set: async (v) => { L0["v_cust_type_id"] = v; }, local: true }, false)), 1))) {
        await $.mset((await $.wv([$t35], "Edit7", C, false)), "Visible", (await $.wv([$t35], "True", C, false)));
        await $.mset((await $.wv([$t35], "Edit18", C, false)), "Visible", (await $.wv([$t35], "True", C, false)));
        await $.mset((await $.wv([$t35], "Edit7", C, false)), "Text", (await $.mv((await $.wcall([$t35], "FieldByName", ["passport"], C)), "AsString")));
        await $.mset((await $.wv([$t35], "Edit18", C, false)), "Text", (await $.mv((await $.wcall([$t35], "FieldByName", ["passp_number"], C)), "AsString")));
        await $.mset((await $.wv([$t35], "Edit11", C, false)), "Visible", (await $.wv([$t35], "False", C, false)));
        await $.mset((await $.wv([$t35], "Label18", C, false)), "Caption", "Pasport seriyasi");
        await $.mset((await $.wv([$t35], "edit12", C, false)), "Visible", (await $.wv([$t35], "false", C, false)));
        await $.mset((await $.wv([$t35], "Label16", C, false)), "Visible", (await $.wv([$t35], "false", C, false)));
      } else {
        if ($.truthy($.eq((await $.wv([$t35], "v_cust_type_id", { get: async () => L0["v_cust_type_id"], set: async (v) => { L0["v_cust_type_id"] = v; }, local: true }, false)), 3))) {
          await $.mset((await $.wv([$t35], "Edit7", C, false)), "Visible", (await $.wv([$t35], "True", C, false)));
          await $.mset((await $.wv([$t35], "Edit18", C, false)), "Visible", (await $.wv([$t35], "True", C, false)));
          await $.mset((await $.wv([$t35], "Edit7", C, false)), "Text", (await $.mv((await $.wcall([$t35], "FieldByName", ["passport"], C)), "AsString")));
          await $.mset((await $.wv([$t35], "Edit18", C, false)), "Text", (await $.mv((await $.wcall([$t35], "FieldByName", ["passp_number"], C)), "AsString")));
          await $.mset((await $.wv([$t35], "Edit11", C, false)), "Visible", (await $.wv([$t35], "False", C, false)));
          await $.mset((await $.wv([$t35], "Label18", C, false)), "Caption", "Pasport seriyasi");
          await $.mset((await $.wv([$t35], "Label16", C, false)), "Visible", (await $.wv([$t35], "true", C, false)));
          await $.mset((await $.wv([$t35], "edit12", C, false)), "Visible", (await $.wv([$t35], "true", C, false)));
          await $.mset((await $.wv([$t35], "Edit12", C, false)), "Text", (await $.mv((await $.wcall([$t35], "FieldByName", ["inn"], C)), "AsString")));
        } else {
          await $.mset((await $.wv([$t35], "Edit11", C, false)), "Visible", (await $.wv([$t35], "True", C, false)));
        }
      }
    }
    if ($.truthy($.eq((await $.v(C, "v_accno")), false))) {
      if ($.truthy($.le((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B")), "RecordCount")), 2))) {
        await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B")), "First", []);
        await $.mset((await $.v(C, "DBLookupComboboxEh_B1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B")), "FieldByName", ["symb"])), "AsString")));
      } else {
        await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B")), "Last", []);
        await $.mset((await $.v(C, "DBLookupComboboxEh_B1")), "KeyValue", " ");
      }
      {
        const $t41 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B"));
        if ($.truthy($.eq((await $.wv([$t41], "RecordCount", C, false)), 2))) {
          await $.mset((await $.wv([$t41], "DBCBoxAccNo_B", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t41], "DataModPCustService", C, false)), "ODS_AccNO_B")), "FieldByName", ["acc_no"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t41], "DBCBoxAccNo_B", C, false)), "KeyValue", " ");
        }
      }
    }
    { const $t42 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS1")), "FieldByName", ["cust_type"])), "AsInteger"));
      if ($.eq($t42, 0)) {
        await $.mset((await $.v(C, "RadioBu_jur")), "Checked", true);
        await $.mset((await $.v(C, "RadioBu_phys")), "Enabled", false);
        await $.mset((await $.v(C, "RadioBu_fs")), "Enabled", false);
      }
      else if ($.eq($t42, 1)) {
        await $.mset((await $.v(C, "RadioBu_phys")), "Checked", true);
        await $.mset((await $.v(C, "RadioBu_jur")), "Enabled", false);
        await $.mset((await $.v(C, "RadioBu_fs")), "Enabled", false);
      }
      else if ($.eq($t42, 2)) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "RadioBu_fs")), "Checked")), false))) {
          await $.mset((await $.v(C, "RadioBu_fs")), "Checked", true);
        } else {
          await $.mset((await $.v(C, "RadioBu_fs")), "Checked", true);
        }
        await $.mset((await $.v(C, "RadioBu_jur")), "Enabled", false);
        await $.mset((await $.v(C, "RadioBu_phys")), "Enabled", false);
      }
      else if ($.eq($t42, 3)) {
        await $.mset((await $.v(C, "RadioBu_phys")), "Checked", false);
        await $.mset((await $.v(C, "RadioBu_fs")), "Checked", false);
        await $.mset((await $.v(C, "RadioBu_jur")), "Enabled", false);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction3", "Edit_descriptionExit", async function Edit_descriptionExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_description")), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh_description")), "KeyValue", (await $.mv((await $.v(C, "Edit_description")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction3", "Edit_descriptionKeyPress", async function Edit_descriptionKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh_description")), "KeyValue", (await $.mv((await $.v(C, "Edit_description")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction3", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFormTransaction3", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t43 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B"));
    await $.stmt($.wcall([$t43], "close", [], C));
    { const $t44 = await $.iset((await $.wv([$t43], "sql", C, false)), [11], $.add($.add((await $.idx((await $.wv([$t43], "sql", C, false)), [11])), " and  kli_ID = "), "-1")); if ($t44 !== undefined) { await $.wset([$t43], "sql", $t44, C); } }
    await $.stmt($.wcall([$t43], "open", [], C));
  }
  await $.mset((await $.v(C, "Label16")), "Visible", false);
  await $.mset((await $.v(C, "edit12")), "visible", false);
  await $.mcall((await $.v(C, "Edit_AccName_B")), "Clear", []);
  await $.mset((await $.v(C, "DBCBoxAccNo_B")), "KeyValue", "");
  await $.mcall((await $.v(C, "edit2")), "Clear", []);
  await $.mset((await $.v(C, "DBLookupComboboxEh_B1")), "KeyValue", "");
  await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", "");
  await $.mset((await $.v(C, "DBLookupComboboxEh5")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "Edit8")), "Clear", []);
  await $.mcall((await $.v(C, "Edit10")), "Clear", []);
  await $.mcall((await $.v(C, "Edit11")), "Clear", []);
  await $.mcall((await $.v(C, "Edit7")), "Clear", []);
  await $.mcall((await $.v(C, "Edit18")), "Clear", []);
  await $.mset((await $.v(C, "CurrencyEdit1")), "Value", 0);
  await $.mset((await $.v(C, "CurrencyEdit2")), "Value", 0);
  await $.mset((await $.v(C, "CurrencyEdit3")), "Value", 0);
  await $.mset((await $.v(C, "EditRate_A")), "Value", 0);
  await $.mset((await $.v(C, "EditRate_B")), "Value", 0);
  await $.mcall((await $.v(C, "Edit_description")), "Clear", []);
  await $.mset((await $.v(C, "DBLookupComboboxEh_description")), "KeyValue", (-(1)));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormTransaction3", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ConvertationSymbols")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_contrs3")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS1")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction3", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 27))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction3", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "spos": 0, "a": '', "s": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "v_accno", false);
  L0["spos"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "SBOP")), "CallIntegerFunction", ["get_acc_no_sub", []]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "SetVariable", ["ACCSRCHPOS", L0["spos"]])));
  L0["spos"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "SBOP")), "CallIntegerFunction", ["get_acc_no_sub", []]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B")), "SetVariable", ["ACCSRCHPOS", L0["spos"]])));
  await $.mset((await $.v(C, "DBLookupCEh_contrsName")), "KeyValue", 1);
  {
    const $t45 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A"));
    if ($.truthy($.eq((await $.wv([$t45], "RecordCount", C, false)), 2))) {
      await $.mset((await $.wv([$t45], "DBCBoxAccNo_A", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t45], "DataModPCustService", C, false)), "ODS_AccNO_A")), "FieldByName", ["acc_no"])), "AsString")));
    } else {
      await $.mset((await $.wv([$t45], "DBCBoxAccNo_A", C, false)), "KeyValue", "");
    }
  }
  await $.mset((await $.v(C, "Edit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "AsString")));
  await $.mset((await $.v(C, "Edit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_name"])), "AsString")));
  if ($.truthy($.in_((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), [0, 2]))) {
    await $.mset((await $.v(C, "Edit5")), "Visible", true);
    await $.mset((await $.v(C, "Edit5")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["inn"])), "AsString")));
    await $.mset((await $.v(C, "Edit4")), "Visible", false);
    await $.mset((await $.v(C, "Edit6")), "Visible", false);
    await $.mset((await $.v(C, "Label10")), "Caption", "VÖEN");
  } else {
    await $.mset((await $.v(C, "Edit4")), "Visible", true);
    await $.mset((await $.v(C, "Edit6")), "Visible", true);
    await $.mset((await $.v(C, "Edit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["passport"])), "AsString")));
    await $.mset((await $.v(C, "Edit6")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["passp_number"])), "AsString")));
    await $.mset((await $.v(C, "Edit5")), "Visible", false);
    await $.mset((await $.v(C, "Label10")), "Caption", "Pasport seriyasi");
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 3))) {
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "PCustServiceForm")), "XFRadioGroup1")), "ItemIndex")), 1))) {
      await $.mset((await $.v(C, "Edit5")), "Visible", true);
      await $.mset((await $.v(C, "Edit5")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["inn"])), "AsString")));
      await $.mset((await $.v(C, "Edit4")), "Visible", false);
      await $.mset((await $.v(C, "Edit6")), "Visible", false);
      await $.mset((await $.v(C, "Label10")), "Caption", "VÖEN");
    } else {
      await $.mset((await $.v(C, "Edit4")), "Visible", true);
      await $.mset((await $.v(C, "Edit6")), "Visible", true);
      await $.mset((await $.v(C, "Edit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["passport"])), "AsString")));
      await $.mset((await $.v(C, "Edit6")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["passp_number"])), "AsString")));
      await $.mset((await $.v(C, "Edit5")), "Visible", false);
      await $.mset((await $.v(C, "Label10")), "Caption", "Pasport seriyasi");
    }
  }
  await $.mcall((await $.v(C, "CurrencyEdit1")), "Clear", []);
  await $.mcall((await $.v(C, "CurrencyEdit2")), "Clear", []);
  await $.mcall((await $.v(C, "CurrencyEdit3")), "Clear", []);
  await $.mcall((await $.v(C, "EditDescription")), "Clear", []);
  await $.mset((await $.v(C, "DBLookupComboboxEh_A1")), "KeyValue", "hhh");
  await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh_B1")), "KeyValue", "hhh");
  await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", (-(1)));
  if ($.truthy(($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh_A1")), "KeyValue")), "")))) {
    {
      const $t46 = (await $.v(C, "DataModPCustService"));
      const $t47 = (await $.wv([$t46], "ODS_AccNO_A", C, false));
      await $.wset([$t46, $t47], "s", "", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.wset([$t46, $t47], "a", (await $.mv((await $.wv([$t46, $t47], "DBLookupComboboxEh_A1", C, false)), "KeyValue")), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
      if ($.truthy($.ne((await $.wv([$t46, $t47], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), "hhh"))) {
        await $.wset([$t46, $t47], "s", $.add($.add("and  a.symb like  '%", (await $.wv([$t46, $t47], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))), "%'"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      await $.stmt($.wcall([$t46, $t47], "close", [], C));
      { const $t48 = await $.iset((await $.wv([$t46, $t47], "sql", C, false)), [14], (await $.wv([$t46, $t47], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))); if ($t48 !== undefined) { await $.wset([$t46, $t47], "sql", $t48, C); } }
      await $.stmt($.wcall([$t46, $t47], "open", [], C));
      if ($.truthy($.eq((await $.wv([$t46, $t47], "RecordCount", C, false)), 1))) {
        await $.mset((await $.wv([$t46, $t47], "DBCBoxAccNo_A", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t46, $t47], "DataModPCustService", C, false)), "ODS_AccNO_A")), "FieldByName", ["acc_no"])), "AsString")));
      } else {
        await $.mset((await $.wv([$t46, $t47], "DBCBoxAccNo_A", C, false)), "KeyValue", "");
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction3", "RadioBu_fsClick", async function RadioBu_fsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "x": 0};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction3", "RadioBu_physClick", async function RadioBu_physClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction3", "XFBitBtn4Click", async function XFBitBtn4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction3", "XFBitBtn5Click", async function XFBitBtn5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "aa": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallProcedure", ["p_bus_tr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_BusProc")), "FieldByName", ["ID"])), "AsInteger")), (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Edit1")), "Text"))])), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B")), "FieldByName", ["ID"])), "AsInteger")), (await $.v(C, "null")), (await $.mv((await $.v(C, "CurrencyEdit1")), "Value")), (await $.mv((await $.v(C, "EditDescription")), "Text")), (await $.v(C, "null")), (await $.mv((await $.v(C, "EditRate_A")), "Value")), (await $.mv((await $.v(C, "EditRate_B")), "value"))]])));
  await $.mcall((await $.v(C, "FormTransaction3")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction3", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "cust_elaqe_Transaction", 2);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FormCustomers"))]))))) {
    await $.set(C, "FormCustomers", (await $.mcall((await $.v(C, "TFormCustomers")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "FormCustomers")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
