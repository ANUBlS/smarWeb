// Generated from FormTransaction3Lmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FormTransaction3Lmpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "CurrencyEdit", "DBCtrls", "StdCtrls", "ExtCtrls", "Buttons", "XFSCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "OracleData", "DBGridEh", "DB", "UnitDataBussProc", "SBTranslateProc", "UnitbussProc", "sboapiDataModuleImpl", "CustomersImpl"]);
  const C = [U];
  U.defClass("TFormTransaction3", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "currencyedit2": {"name": "CurrencyEdit2", "type": "TCurrencyEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "currencyedit3": {"name": "CurrencyEdit3", "type": "TCurrencyEdit"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "label24": {"name": "Label24", "type": "TLabel"}, "dblookupceh_contrsname": {"name": "DBLookupCEh_contrsName", "type": "TDBLookupComboBox"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "xfbitbtn2": {"name": "XFBitBtn2", "type": "TXFBitBtn"}, "xfbitbtn3": {"name": "XFBitBtn3", "type": "TXFBitBtn"}, "xfbitbtn4": {"name": "XFBitBtn4", "type": "TXFBitBtn"}, "xfbitbtn5": {"name": "XFBitBtn5", "type": "TXFBitBtn"}, "xfbitbtn6": {"name": "XFBitBtn6", "type": "TXFBitBtn"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dblookupcomboboxeh_a1": {"name": "DBLookupComboboxEh_A1", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "editrate_a": {"name": "EditRate_A", "type": "TCurrencyEdit"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "label6": {"name": "Label6", "type": "TLabel"}, "edit_accname_a": {"name": "Edit_AccName_A", "type": "TEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "label25": {"name": "Label25", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbcboxaccno_a": {"name": "DBCBoxAccNo_A", "type": "TDBLookupComboboxEh"}, "edit9": {"name": "Edit9", "type": "TEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "label20": {"name": "Label20", "type": "TLabel"}, "label22": {"name": "Label22", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "edit8": {"name": "Edit8", "type": "TEdit"}, "edit18": {"name": "Edit18", "type": "TEdit"}, "editrate_b": {"name": "EditRate_B", "type": "TCurrencyEdit"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "edit11": {"name": "Edit11", "type": "TEdit"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh_b1": {"name": "DBLookupComboboxEh_B1", "type": "TDBLookupComboboxEh"}, "edit_accname_b": {"name": "Edit_AccName_B", "type": "TEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbcboxaccno_b": {"name": "DBCBoxAccNo_B", "type": "TDBLookupComboboxEh"}, "edit10": {"name": "Edit10", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit12": {"name": "Edit12", "type": "TEdit"}, "radiobu_jur": {"name": "RadioBu_jur", "type": "TRadioButton"}, "radiobu_phys": {"name": "RadioBu_phys", "type": "TRadioButton"}, "radiobu_fs": {"name": "RadioBu_fs", "type": "TRadioButton"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "edit_description": {"name": "Edit_description", "type": "TEdit"}, "dblookupcomboboxeh_description": {"name": "DBLookupComboboxEh_description", "type": "TDBLookupComboboxEh"}, "editdescription": {"name": "EditDescription", "type": "TEdit"}, "label26": {"name": "Label26", "type": "TLabel"}, "label27": {"name": "Label27", "type": "TLabel"}, "edit_ostata": {"name": "Edit_ostatA", "type": "TEdit"}, "edit_ostatb": {"name": "Edit_ostatB", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("FormTransaction3", null, "TFormTransaction3");
    U.var_("v_ostat", 0, "Real");
  });
  U.method("TFormTransaction3", "CurrencyEdit1Click", async function CurrencyEdit1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CurrencyEdit1")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
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
    const $t1 = (await $.v(C, "DataModule_bussProc"));
    if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(((await $.mv((await $.wv([$t1], "ODS_AccNO_A", C, false)), "active"))), async () => ($.ne((await $.mv((await $.wv([$t1], "ODS_AccNO_A", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t1], "ODS_AccNO_A", C, false)), "FieldByName", ["id"])), "IsNull"))))))), async () => ((await $.mv((await $.wv([$t1], "ODS_AccNO_B", C, false)), "active"))))), async () => ($.ne((await $.mv((await $.wv([$t1], "ODS_AccNO_B", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t1], "ODS_AccNO_B", C, false)), "FieldByName", ["id"])), "IsNull"))))))), async () => ($.gt((await $.mv((await $.wv([$t1], "CurrencyEdit1", C, false)), "Value")), 0)))))) {
      await $.wset([$t1], "v_ostat", (await $.mcall((await $.wv([$t1], "PG_PCustService", C, false)), "CallFloatFunction", ["get_rate", [(-(1)), (await $.mv((await $.mcall((await $.wv([$t1], "ODS_AccNO_A", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t1], "ODS_AccNO_B", C, false)), "FieldByName", ["ID"])), "AsInteger")), "-1", "-1"]])), C);
      await $.mset((await $.wv([$t1], "XFBitBtn5", C, false)), "Enabled", (await $.wv([$t1], "True", C, false)));
      await $.wset([$t1], "deb_rate", (await $.mcall((await $.wv([$t1], "PG_PCustService", C, false)), "GetParameter", [3])), { get: async () => L0["deb_rate"], set: async (v) => { L0["deb_rate"] = v; }, local: true });
      await $.wset([$t1], "kred_rate", (await $.mcall((await $.wv([$t1], "PG_PCustService", C, false)), "GetParameter", [4])), { get: async () => L0["kred_rate"], set: async (v) => { L0["kred_rate"] = v; }, local: true });
      await $.mset((await $.wv([$t1], "CurrencyEdit3", C, false)), "Value", $.mul(((await $.mv((await $.wv([$t1], "CurrencyEdit1", C, false)), "Value"))), (await $.wv([$t1], "deb_rate", { get: async () => L0["deb_rate"], set: async (v) => { L0["deb_rate"] = v; }, local: true }, false))));
      if ($.truthy($.eq((await $.wv([$t1], "deb_rate", { get: async () => L0["deb_rate"], set: async (v) => { L0["deb_rate"] = v; }, local: true }, false)), (await $.wv([$t1], "kred_rate", { get: async () => L0["kred_rate"], set: async (v) => { L0["kred_rate"] = v; }, local: true }, false))))) {
        await $.mset((await $.wv([$t1], "CurrencyEdit2", C, false)), "Value", (await $.mv((await $.wv([$t1], "CurrencyEdit1", C, false)), "Value")));
      } else {
        await $.mset((await $.wv([$t1], "CurrencyEdit2", C, false)), "Value", $.fdiv(((await $.mv((await $.wv([$t1], "CurrencyEdit3", C, false)), "Value"))), (await $.wv([$t1], "kred_rate", { get: async () => L0["kred_rate"], set: async (v) => { L0["kred_rate"] = v; }, local: true }, false))));
      }
    } else {
      await $.mset((await $.wv([$t1], "XFBitBtn5", C, false)), "Enabled", (await $.wv([$t1], "False", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormTransaction3", "CurrencyEdit2Click", async function CurrencyEdit2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CurrencyEdit2")), "Text", "");
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
    const $t2 = (await $.v(C, "DataModule_bussProc"));
    if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(((await $.mv((await $.wv([$t2], "ODS_AccNO_A", C, false)), "active"))), async () => ($.ne((await $.mv((await $.wv([$t2], "ODS_AccNO_A", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t2], "ODS_AccNO_A", C, false)), "FieldByName", ["id"])), "IsNull"))))))), async () => ((await $.mv((await $.wv([$t2], "ODS_AccNO_B", C, false)), "active"))))), async () => ($.ne((await $.mv((await $.wv([$t2], "ODS_AccNO_B", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t2], "ODS_AccNO_B", C, false)), "FieldByName", ["id"])), "IsNull"))))))), async () => ($.gt((await $.mv((await $.wv([$t2], "CurrencyEdit2", C, false)), "Value")), 0)))))) {
      await $.wset([$t2], "v_ostat", (await $.mcall((await $.wv([$t2], "PG_PCustService", C, false)), "CallFloatFunction", ["get_rate", [(-(1)), (await $.mv((await $.mcall((await $.wv([$t2], "ODS_AccNO_A", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t2], "ODS_AccNO_B", C, false)), "FieldByName", ["ID"])), "AsInteger")), "-1", "-1"]])), C);
      await $.mset((await $.wv([$t2], "XFBitBtn5", C, false)), "Enabled", (await $.wv([$t2], "True", C, false)));
      await $.wset([$t2], "deb_rate", (await $.mcall((await $.wv([$t2], "PG_PCustService", C, false)), "GetParameter", [3])), { get: async () => L0["deb_rate"], set: async (v) => { L0["deb_rate"] = v; }, local: true });
      await $.wset([$t2], "kred_rate", (await $.mcall((await $.wv([$t2], "PG_PCustService", C, false)), "GetParameter", [4])), { get: async () => L0["kred_rate"], set: async (v) => { L0["kred_rate"] = v; }, local: true });
      await $.mset((await $.wv([$t2], "CurrencyEdit3", C, false)), "Value", $.mul(((await $.mv((await $.wv([$t2], "CurrencyEdit2", C, false)), "Value"))), (await $.wv([$t2], "kred_rate", { get: async () => L0["kred_rate"], set: async (v) => { L0["kred_rate"] = v; }, local: true }, false))));
      if ($.truthy($.eq((await $.wv([$t2], "deb_rate", { get: async () => L0["deb_rate"], set: async (v) => { L0["deb_rate"] = v; }, local: true }, false)), (await $.wv([$t2], "kred_rate", { get: async () => L0["kred_rate"], set: async (v) => { L0["kred_rate"] = v; }, local: true }, false))))) {
        await $.mset((await $.wv([$t2], "CurrencyEdit1", C, false)), "Value", ((await $.mv((await $.wv([$t2], "CurrencyEdit2", C, false)), "Value"))));
      } else {
        await $.mset((await $.wv([$t2], "CurrencyEdit1", C, false)), "Value", $.fdiv(((await $.mv((await $.wv([$t2], "CurrencyEdit3", C, false)), "Value"))), (await $.wv([$t2], "deb_rate", { get: async () => L0["deb_rate"], set: async (v) => { L0["deb_rate"] = v; }, local: true }, false))));
      }
    } else {
      await $.mset((await $.wv([$t2], "XFBitBtn5", C, false)), "Enabled", (await $.wv([$t2], "False", C, false)));
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
  {
    const $t3 = (await $.v(C, "DataModule_bussProc"));
    if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(((await $.mv((await $.wv([$t3], "ODS_AccNO_A", C, false)), "active"))), async () => ($.ne((await $.mv((await $.wv([$t3], "ODS_AccNO_A", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t3], "ODS_AccNO_A", C, false)), "FieldByName", ["id"])), "IsNull"))))))), async () => ((await $.mv((await $.wv([$t3], "ODS_AccNO_B", C, false)), "active"))))), async () => ($.ne((await $.mv((await $.wv([$t3], "ODS_AccNO_B", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t3], "ODS_AccNO_B", C, false)), "FieldByName", ["id"])), "IsNull"))))))), async () => ($.gt((await $.mv((await $.wv([$t3], "CurrencyEdit3", C, false)), "Value")), 0)))))) {
      await $.wset([$t3], "v_ostat", (await $.mcall((await $.wv([$t3], "PG_PCustService", C, false)), "CallFloatFunction", ["get_rate", [(-(1)), (await $.mv((await $.mcall((await $.wv([$t3], "ODS_AccNO_A", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t3], "ODS_AccNO_B", C, false)), "FieldByName", ["ID"])), "AsInteger")), "-1", "-1"]])), C);
      await $.mset((await $.wv([$t3], "XFBitBtn5", C, false)), "Enabled", (await $.wv([$t3], "True", C, false)));
      await $.wset([$t3], "deb_rate", (await $.mcall((await $.wv([$t3], "PG_PCustService", C, false)), "GetParameter", [3])), { get: async () => L0["deb_rate"], set: async (v) => { L0["deb_rate"] = v; }, local: true });
      await $.wset([$t3], "kred_rate", (await $.mcall((await $.wv([$t3], "PG_PCustService", C, false)), "GetParameter", [4])), { get: async () => L0["kred_rate"], set: async (v) => { L0["kred_rate"] = v; }, local: true });
      if ($.truthy($.eq((await $.wv([$t3], "deb_rate", { get: async () => L0["deb_rate"], set: async (v) => { L0["deb_rate"] = v; }, local: true }, false)), 1))) {
        await $.mset((await $.wv([$t3], "CurrencyEdit1", C, false)), "Value", ((await $.mv((await $.wv([$t3], "CurrencyEdit3", C, false)), "Value"))));
      }
      if ($.truthy($.eq((await $.wv([$t3], "kred_rate", { get: async () => L0["kred_rate"], set: async (v) => { L0["kred_rate"] = v; }, local: true }, false)), 1))) {
        await $.mset((await $.wv([$t3], "CurrencyEdit2", C, false)), "Value", ((await $.mv((await $.wv([$t3], "CurrencyEdit3", C, false)), "Value"))));
      }
    } else {
      await $.mset((await $.wv([$t3], "XFBitBtn5", C, false)), "Enabled", (await $.wv([$t3], "False", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormTransaction3", "DBCBoxAccNo_AChange", async function DBCBoxAccNo_AChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "deb_rate": 0, "kred_rate": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "DataModule_bussProc"));
    await $.mcall((await $.wv([$t4], "Ods_Tenostat_A", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t4], "Ods_Tenostat_A", C, false)), "SetVariable", ["id", (await $.mv((await $.mcall((await $.wv([$t4], "ODS_AccNO_A", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t4], "Ods_Tenostat_A", C, false)), "Open", []);
    await $.mset((await $.wv([$t4], "Edit_ostatA", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t4], "Ods_Tenostat_A", C, false)), "FieldByName", ["ostat"])), "AsString")));
  }
  await $.mset((await $.v(C, "edit9")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A")), "FieldByName", ["bal_cn1"])), "AsString")));
  await $.mset((await $.v(C, "EditRate_A")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A")), "FieldByName", ["ostat"])), "AsString")));
  await $.mset((await $.v(C, "Edit_AccName_A")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A")), "FieldByName", ["name"])), "AsString")));
  {
    const $t5 = (await $.v(C, "DataModule_bussProc"));
    if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.wv([$t5], "DBCBoxAccNo_A", C, false)), "KeyValue")), "")), async () => ($.gt((await $.mv((await $.wv([$t5], "CurrencyEdit1", C, false)), "Value")), 0)))), async () => ($.ne((await $.mv((await $.wv([$t5], "ODS_AccNO_A", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t5], "ODS_AccNO_A", C, false)), "FieldByName", ["id"])), "IsNull"))))))), async () => ((await $.mv((await $.wv([$t5], "ODS_AccNO_B", C, false)), "active"))))), async () => ($.ne((await $.mv((await $.wv([$t5], "ODS_AccNO_B", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t5], "ODS_AccNO_B", C, false)), "FieldByName", ["id"])), "IsNull"))))))))) {
      await $.wset([$t5], "v_ostat", (await $.mcall((await $.wv([$t5], "PG_PCustService", C, false)), "CallFloatFunction", ["get_rate", [(-(1)), (await $.mv((await $.mcall((await $.wv([$t5], "ODS_AccNO_A", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t5], "ODS_AccNO_B", C, false)), "FieldByName", ["ID"])), "AsInteger")), "-1", "-1"]])), C);
      await $.mset((await $.wv([$t5], "XFBitBtn5", C, false)), "Enabled", (await $.wv([$t5], "True", C, false)));
      await $.wset([$t5], "deb_rate", (await $.mcall((await $.wv([$t5], "PG_PCustService", C, false)), "GetParameter", [3])), { get: async () => L0["deb_rate"], set: async (v) => { L0["deb_rate"] = v; }, local: true });
      await $.wset([$t5], "kred_rate", (await $.mcall((await $.wv([$t5], "PG_PCustService", C, false)), "GetParameter", [4])), { get: async () => L0["kred_rate"], set: async (v) => { L0["kred_rate"] = v; }, local: true });
      await $.mcall((await $.wv([$t5], "CurrencyEdit1", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t5], "CurrencyEdit2", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t5], "CurrencyEdit3", C, false)), "Clear", []);
    } else {
      await $.mset((await $.wv([$t5], "XFBitBtn5", C, false)), "Enabled", (await $.wv([$t5], "False", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction3", "DBCBoxAccNo_ACloseUp", async function DBCBoxAccNo_ACloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A")), "FieldByName", ["symb"])), "isnull")))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh_A1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_account_symbols_A")), "FieldByName", ["symbol"])), "AsString")));
    await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A")), "FieldByName", ["filial"])), "AsInteger")));
  } else {
    await $.mset((await $.v(C, "DBLookupComboboxEh_A1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A")), "FieldByName", ["symb"])), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormTransaction3", "DBCBoxAccNo_AlCloseUp", async function DBCBoxAccNo_AlCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLookupComboboxEh_A1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A")), "FieldByName", ["symb"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction3", "DBCBoxAccNo_BChange", async function DBCBoxAccNo_BChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "deb_rate": 0, "kred_rate": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "DataModule_bussProc"));
    await $.mcall((await $.wv([$t6], "Ods_Tenostat_B", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t6], "Ods_Tenostat_B", C, false)), "SetVariable", ["id", (await $.mv((await $.mcall((await $.wv([$t6], "ODS_AccNO_B", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t6], "Ods_Tenostat_B", C, false)), "Open", []);
    await $.mset((await $.wv([$t6], "Edit_ostatB", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t6], "Ods_Tenostat_B", C, false)), "FieldByName", ["ostat"])), "AsString")));
  }
  await $.mset((await $.v(C, "edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "FieldByName", ["bal_cn1"])), "AsString")));
  await $.mset((await $.v(C, "EditRate_B")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "FieldByName", ["ostat"])), "AsString")));
  await $.mset((await $.v(C, "Edit_AccName_B")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "FieldByName", ["name"])), "AsString")));
  {
    const $t7 = (await $.v(C, "DataModule_bussProc"));
    if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.wv([$t7], "DBCBoxAccNo_A", C, false)), "KeyValue")), "")), async () => ($.gt((await $.mv((await $.wv([$t7], "CurrencyEdit1", C, false)), "Value")), 0)))), async () => ($.ne((await $.mv((await $.wv([$t7], "ODS_AccNO_A", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t7], "ODS_AccNO_A", C, false)), "FieldByName", ["id"])), "IsNull"))))))), async () => ((await $.mv((await $.wv([$t7], "ODS_AccNO_A", C, false)), "active"))))), async () => ($.ne((await $.mv((await $.wv([$t7], "ODS_AccNO_B", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t7], "ODS_AccNO_B", C, false)), "FieldByName", ["id"])), "IsNull"))))))))) {
      await $.wset([$t7], "v_ostat", (await $.mcall((await $.wv([$t7], "PG_PCustService", C, false)), "CallFloatFunction", ["get_rate", [(-(1)), (await $.mv((await $.mcall((await $.wv([$t7], "ODS_AccNO_A", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t7], "ODS_AccNO_B", C, false)), "FieldByName", ["ID"])), "AsInteger")), "-1", "-1"]])), C);
      await $.mset((await $.wv([$t7], "XFBitBtn5", C, false)), "Enabled", (await $.wv([$t7], "True", C, false)));
      await $.wset([$t7], "deb_rate", (await $.mcall((await $.wv([$t7], "PG_PCustService", C, false)), "GetParameter", [3])), { get: async () => L0["deb_rate"], set: async (v) => { L0["deb_rate"] = v; }, local: true });
      await $.wset([$t7], "kred_rate", (await $.mcall((await $.wv([$t7], "PG_PCustService", C, false)), "GetParameter", [4])), { get: async () => L0["kred_rate"], set: async (v) => { L0["kred_rate"] = v; }, local: true });
      await $.mcall((await $.wv([$t7], "CurrencyEdit1", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t7], "CurrencyEdit2", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t7], "CurrencyEdit3", C, false)), "Clear", []);
    } else {
      await $.mset((await $.wv([$t7], "XFBitBtn5", C, false)), "Enabled", (await $.wv([$t7], "False", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction3", "DBCBoxAccNo_BCloseUp", async function DBCBoxAccNo_BCloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  { const $t8 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "FieldByName", ["cust_type"])), "AsInteger"));
    if ($.eq($t8, 1)) {
      await $.mset((await $.v(C, "RadioBu_phys")), "Checked", true);
    }
    else if ($.eq($t8, 2)) {
      await $.mset((await $.v(C, "RadioBu_fs")), "Checked", true);
    }
  }
  if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "FieldByName", ["symb"])), "isnull")))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh_B1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_account_symbols_B")), "FieldByName", ["symbol"])), "AsString")));
    await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "FieldByName", ["filial"])), "AsInteger")));
  } else {
    await $.mset((await $.v(C, "DBLookupComboboxEh_B1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "FieldByName", ["symb"])), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormTransaction3", "DBLookupComboboxEh2CloseUp", async function DBLookupComboboxEh2CloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined, "a": '', "b": '', "s": ''};
  await $.fixArgs(L0, ["sender", "accept"]);
  if ($.truthy(($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh_A1")), "KeyValue")), "")))) {
    {
      const $t9 = (await $.v(C, "DataModule_bussProc"));
      const $t10 = (await $.wv([$t9], "ODS_AccNO_A", C, false));
      await $.wset([$t9, $t10], "s", "", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.wset([$t9, $t10], "a", (await $.mv((await $.wv([$t9, $t10], "DBLookupComboboxEh_A1", C, false)), "KeyValue")), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
      await $.wset([$t9, $t10], "b", (await $.wcall([$t9, $t10], "inttostr", [(await $.mv((await $.wv([$t9, $t10], "DBLookupComboboxEh2", C, false)), "KeyValue"))], C)), { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true });
      if ($.truthy($.ne((await $.wv([$t9, $t10], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), "hhh"))) {
        await $.wset([$t9, $t10], "s", $.add($.add("and  a.symb like  '%", (await $.wv([$t9, $t10], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))), "%'"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      if ($.truthy($.ne((await $.wv([$t9, $t10], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false)), "-1"))) {
        await $.wset([$t9, $t10], "s", $.add($.add((await $.wv([$t9, $t10], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), " and a.filial="), (await $.wv([$t9, $t10], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      await $.stmt($.wcall([$t9, $t10], "close", [], C));
      { const $t11 = await $.iset((await $.wv([$t9, $t10], "sql", C, false)), [13], (await $.wv([$t9, $t10], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))); if ($t11 !== undefined) { await $.wset([$t9, $t10], "sql", $t11, C); } }
      await $.stmt($.wcall([$t9, $t10], "open", [], C));
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
      const $t12 = (await $.v(C, "DataModule_bussProc"));
      const $t13 = (await $.wv([$t12], "ODS_AccNO_B", C, false));
      await $.wset([$t12, $t13], "s", "", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.wset([$t12, $t13], "a", (await $.mv((await $.wv([$t12, $t13], "DBLookupComboboxEh_B1", C, false)), "KeyValue")), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
      await $.wset([$t12, $t13], "b", (await $.wcall([$t12, $t13], "inttostr", [(await $.mv((await $.wv([$t12, $t13], "DBLookupComboboxEh3", C, false)), "KeyValue"))], C)), { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true });
      if ($.truthy($.ne((await $.wv([$t12, $t13], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), "hhh"))) {
        await $.wset([$t12, $t13], "s", $.add($.add("and  a.symb like  '%", (await $.wv([$t12, $t13], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))), "%'"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      if ($.truthy($.ne((await $.wv([$t12, $t13], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false)), "-1"))) {
        await $.wset([$t12, $t13], "s", $.add($.add((await $.wv([$t12, $t13], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), " and a.filial="), (await $.wv([$t12, $t13], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      await $.stmt($.wcall([$t12, $t13], "close", [], C));
      { const $t14 = await $.iset((await $.wv([$t12, $t13], "sql", C, false)), [13], (await $.wv([$t12, $t13], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))); if ($t14 !== undefined) { await $.wset([$t12, $t13], "sql", $t14, C); } }
      await $.stmt($.wcall([$t12, $t13], "open", [], C));
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
      const $t15 = (await $.v(C, "DataModule_bussProc"));
      const $t16 = (await $.wv([$t15], "ODS_AccNO_A", C, false));
      await $.wset([$t15, $t16], "s", "", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.wset([$t15, $t16], "a", (await $.mv((await $.wv([$t15, $t16], "DBLookupComboboxEh_A1", C, false)), "KeyValue")), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
      await $.wset([$t15, $t16], "b", (await $.wcall([$t15, $t16], "inttostr", [(await $.mv((await $.wv([$t15, $t16], "DBLookupComboboxEh2", C, false)), "KeyValue"))], C)), { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true });
      if ($.truthy($.ne((await $.wv([$t15, $t16], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), "hhh"))) {
        await $.wset([$t15, $t16], "s", $.add($.add("and  a.symb like  '%", (await $.wv([$t15, $t16], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))), "%'"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      if ($.truthy($.ne((await $.wv([$t15, $t16], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false)), "-1"))) {
        await $.wset([$t15, $t16], "s", $.add($.add((await $.wv([$t15, $t16], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), " and a.filial="), (await $.wv([$t15, $t16], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      await $.stmt($.wcall([$t15, $t16], "close", [], C));
      { const $t17 = await $.iset((await $.wv([$t15, $t16], "sql", C, false)), [13], (await $.wv([$t15, $t16], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))); if ($t17 !== undefined) { await $.wset([$t15, $t16], "sql", $t17, C); } }
      await $.stmt($.wcall([$t15, $t16], "open", [], C));
      if ($.truthy($.eq((await $.wv([$t15, $t16], "RecordCount", C, false)), 1))) {
        await $.mset((await $.wv([$t15, $t16], "DBCBoxAccNo_A", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t15, $t16], "DataModule_bussProc", C, false)), "ODS_AccNO_A")), "FieldByName", ["acc_no"])), "AsString")));
      } else {
        await $.mset((await $.wv([$t15, $t16], "DBCBoxAccNo_A", C, false)), "KeyValue", "");
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
    {
      const $t18 = (await $.v(C, "DataModule_bussProc"));
      const $t19 = (await $.wv([$t18], "ODS_AccNO_B", C, false));
      await $.wset([$t18, $t19], "s", "", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.wset([$t18, $t19], "a", (await $.mv((await $.wv([$t18, $t19], "DBLookupComboboxEh_B1", C, false)), "KeyValue")), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
      await $.wset([$t18, $t19], "b", (await $.wcall([$t18, $t19], "inttostr", [(await $.mv((await $.wv([$t18, $t19], "DBLookupComboboxEh3", C, false)), "KeyValue"))], C)), { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true });
      if ($.truthy($.ne((await $.wv([$t18, $t19], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), "hhh"))) {
        await $.wset([$t18, $t19], "s", $.add($.add("and  a.symb like  '%", (await $.wv([$t18, $t19], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))), "%'"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      if ($.truthy($.ne((await $.wv([$t18, $t19], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false)), "-1"))) {
        await $.wset([$t18, $t19], "s", $.add($.add((await $.wv([$t18, $t19], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), " and a.filial="), (await $.wv([$t18, $t19], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      await $.stmt($.wcall([$t18, $t19], "close", [], C));
      { const $t20 = await $.iset((await $.wv([$t18, $t19], "sql", C, false)), [13], (await $.wv([$t18, $t19], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))); if ($t20 !== undefined) { await $.wset([$t18, $t19], "sql", $t20, C); } }
      await $.stmt($.wcall([$t18, $t19], "open", [], C));
    }
  }
  {
    const $t21 = (await $.v(C, "DataModule_bussProc"));
    const $t22 = (await $.wv([$t21], "ODS_AccNO_B", C, false));
    if ($.truthy($.eq((await $.wv([$t21, $t22], "RecordCount", C, false)), 1))) {
      await $.mset((await $.wv([$t21, $t22], "DBCBoxAccNo_B", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t21, $t22], "DataModule_bussProc", C, false)), "ODS_AccNO_B")), "FieldByName", ["acc_no"])), "AsString")));
    } else {
      await $.mset((await $.wv([$t21, $t22], "DBCBoxAccNo_B", C, false)), "KeyValue", "");
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
      const $t23 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS"));
      await $.stmt($.wcall([$t23], "close", [], C));
      { const $t24 = await $.iset((await $.wv([$t23], "sql", C, false)), [8], " "); if ($t24 !== undefined) { await $.wset([$t23], "sql", $t24, C); } }
      if ($.truthy($.ne((await $.mv((await $.wv([$t23], "Edit1", C, false)), "Text")), ""))) {
        { const $t25 = await $.iset((await $.wv([$t23], "sql", C, false)), [8], $.add($.add((await $.idx((await $.wv([$t23], "sql", C, false)), [8])), " and c.ID = "), (await $.mv((await $.wv([$t23], "Edit1", C, false)), "Text")))); if ($t25 !== undefined) { await $.wset([$t23], "sql", $t25, C); } }
      }
      await $.stmt($.wcall([$t23], "open", [], C));
      if ($.truthy($.eq((await $.wv([$t23], "RecordCount", C, false)), 0))) {
        await $.stmt((await $.wcall([$t23], "ShowMessage", ["Belə müştəri yoxdu  !"], C)));
        await $.mcall((await $.wv([$t23], "Edit1", C, false)), "Clear", []);
      }
      await $.mset((await $.wv([$t23], "Edit3", C, false)), "Text", (await $.mv((await $.wcall([$t23], "FieldByName", ["cust_name"], C)), "AsString")));
      {
        const $t26 = (await $.mv((await $.wv([$t23], "DataModule_bussProc", C, false)), "ODS_AccNO_A"));
        await $.stmt($.wcall([$t23, $t26], "close", [], C));
        await $.stmt((await $.wcall([$t23, $t26], "SetVariable", ["CustID", (await $.wcall([$t23, $t26], "strtoint", [(await $.mv((await $.wv([$t23, $t26], "Edit1", C, false)), "Text"))], C))], C)));
        await $.stmt($.wcall([$t23, $t26], "open", [], C));
      }
    }
    if ($.truthy($.le((await $.mv((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A")), "RecordCount")), 2))) {
      await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A")), "First", []);
      await $.mset((await $.v(C, "DBCBoxAccNo_A")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A")), "FieldByName", ["acc_no"])), "AsString")));
      await $.mset((await $.v(C, "DBLookupComboboxEh_A1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A")), "FieldByName", ["symb"])), "AsString")));
    } else {
      await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A")), "Last", []);
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
    const $t27 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B"));
    await $.stmt($.wcall([$t27], "close", [], C));
    await $.stmt((await $.wcall([$t27], "SetVariable", ["custtype", " in (0,1,2)"], C)));
    await $.stmt($.wcall([$t27], "open", [], C));
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
      const $t28 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERS_PHYS_FS1"));
      await $.stmt($.wcall([$t28], "close", [], C));
      { const $t29 = await $.iset((await $.wv([$t28], "sql", C, false)), [8], " "); if ($t29 !== undefined) { await $.wset([$t28], "sql", $t29, C); } }
      if ($.truthy($.ne((await $.mv((await $.wv([$t28], "Edit8", C, false)), "Text")), ""))) {
        { const $t30 = await $.iset((await $.wv([$t28], "sql", C, false)), [8], $.add($.add((await $.idx((await $.wv([$t28], "sql", C, false)), [8])), " and c.ID = "), (await $.mv((await $.wv([$t28], "Edit8", C, false)), "Text")))); if ($t30 !== undefined) { await $.wset([$t28], "sql", $t30, C); } }
      }
      await $.stmt($.wcall([$t28], "open", [], C));
      if ($.truthy($.eq((await $.wv([$t28], "RecordCount", C, false)), 0))) {
        await $.stmt((await $.wcall([$t28], "ShowMessage", ["Belə müştəri yoxdu  !"], C)));
        await $.mcall((await $.wv([$t28], "Edit8", C, false)), "Clear", []);
      }
      await $.mset((await $.wv([$t28], "Edit10", C, false)), "Text", (await $.mv((await $.wcall([$t28], "FieldByName", ["cust_name"], C)), "AsString")));
      {
        const $t31 = (await $.mv((await $.wv([$t28], "DataModule_bussProc", C, false)), "ODS_AccNO_B"));
        await $.stmt($.wcall([$t28, $t31], "close", [], C));
        await $.stmt((await $.wcall([$t28, $t31], "SetVariable", ["CustID", (await $.wcall([$t28, $t31], "strtoint", [(await $.mv((await $.wv([$t28, $t31], "Edit8", C, false)), "Text"))], C))], C)));
        await $.stmt($.wcall([$t28, $t31], "open", [], C));
      }
      await $.wset([$t28], "v_cust_type_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t28], "DataModule_bussProc", C, false)), "ODS_CUSTOMERS_PHYS_FS1")), "FieldByName", ["CUST_TYPE"])), "AsInteger")), { get: async () => L0["v_cust_type_id"], set: async (v) => { L0["v_cust_type_id"] = v; }, local: true });
      if ($.truthy($.in_((await $.wv([$t28], "v_cust_type_id", { get: async () => L0["v_cust_type_id"], set: async (v) => { L0["v_cust_type_id"] = v; }, local: true }, false)), [0, 2]))) {
        await $.mset((await $.wv([$t28], "Edit11", C, false)), "Visible", (await $.wv([$t28], "True", C, false)));
        await $.mset((await $.wv([$t28], "Edit11", C, false)), "Text", (await $.mv((await $.wcall([$t28], "FieldByName", ["inn"], C)), "AsString")));
        await $.mset((await $.wv([$t28], "Edit7", C, false)), "Visible", (await $.wv([$t28], "False", C, false)));
        await $.mset((await $.wv([$t28], "Edit18", C, false)), "Visible", (await $.wv([$t28], "False", C, false)));
        await $.mset((await $.wv([$t28], "Label18", C, false)), "Caption", "Vöen");
        await $.mset((await $.wv([$t28], "edit12", C, false)), "Visible", (await $.wv([$t28], "false", C, false)));
        await $.mset((await $.wv([$t28], "Label16", C, false)), "Visible", (await $.wv([$t28], "false", C, false)));
      } else {
        await $.mset((await $.wv([$t28], "Edit7", C, false)), "Visible", (await $.wv([$t28], "True", C, false)));
        await $.mset((await $.wv([$t28], "Edit18", C, false)), "Visible", (await $.wv([$t28], "True", C, false)));
      }
      if ($.truthy($.eq((await $.wv([$t28], "v_cust_type_id", { get: async () => L0["v_cust_type_id"], set: async (v) => { L0["v_cust_type_id"] = v; }, local: true }, false)), 1))) {
        await $.mset((await $.wv([$t28], "Edit7", C, false)), "Visible", (await $.wv([$t28], "True", C, false)));
        await $.mset((await $.wv([$t28], "Edit18", C, false)), "Visible", (await $.wv([$t28], "True", C, false)));
        await $.mset((await $.wv([$t28], "Edit7", C, false)), "Text", (await $.mv((await $.wcall([$t28], "FieldByName", ["passport"], C)), "AsString")));
        await $.mset((await $.wv([$t28], "Edit18", C, false)), "Text", (await $.mv((await $.wcall([$t28], "FieldByName", ["passp_number"], C)), "AsString")));
        await $.mset((await $.wv([$t28], "Edit11", C, false)), "Visible", (await $.wv([$t28], "False", C, false)));
        await $.mset((await $.wv([$t28], "Label18", C, false)), "Caption", "Pasport seriyasi");
        await $.mset((await $.wv([$t28], "edit12", C, false)), "Visible", (await $.wv([$t28], "false", C, false)));
        await $.mset((await $.wv([$t28], "Label16", C, false)), "Visible", (await $.wv([$t28], "false", C, false)));
      } else {
        if ($.truthy($.eq((await $.wv([$t28], "v_cust_type_id", { get: async () => L0["v_cust_type_id"], set: async (v) => { L0["v_cust_type_id"] = v; }, local: true }, false)), 3))) {
          await $.mset((await $.wv([$t28], "Edit7", C, false)), "Visible", (await $.wv([$t28], "True", C, false)));
          await $.mset((await $.wv([$t28], "Edit18", C, false)), "Visible", (await $.wv([$t28], "True", C, false)));
          await $.mset((await $.wv([$t28], "Edit7", C, false)), "Text", (await $.mv((await $.wcall([$t28], "FieldByName", ["passport"], C)), "AsString")));
          await $.mset((await $.wv([$t28], "Edit18", C, false)), "Text", (await $.mv((await $.wcall([$t28], "FieldByName", ["passp_number"], C)), "AsString")));
          await $.mset((await $.wv([$t28], "Edit11", C, false)), "Visible", (await $.wv([$t28], "False", C, false)));
          await $.mset((await $.wv([$t28], "Label18", C, false)), "Caption", "Pasport seriyasi");
          await $.mset((await $.wv([$t28], "Label16", C, false)), "Visible", (await $.wv([$t28], "true", C, false)));
          await $.mset((await $.wv([$t28], "edit12", C, false)), "Visible", (await $.wv([$t28], "true", C, false)));
          await $.mset((await $.wv([$t28], "Edit12", C, false)), "Text", (await $.mv((await $.wcall([$t28], "FieldByName", ["inn"], C)), "AsString")));
        } else {
          await $.mset((await $.wv([$t28], "Edit11", C, false)), "Visible", (await $.wv([$t28], "True", C, false)));
        }
      }
    }
    if ($.truthy($.le((await $.mv((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "RecordCount")), 2))) {
      await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "First", []);
      await $.mset((await $.v(C, "DBLookupComboboxEh_B1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "FieldByName", ["symb"])), "AsString")));
    } else {
      await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "Last", []);
      await $.mset((await $.v(C, "DBLookupComboboxEh_B1")), "KeyValue", " ");
    }
    {
      const $t32 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B"));
      if ($.truthy($.eq((await $.wv([$t32], "RecordCount", C, false)), 2))) {
        await $.mset((await $.wv([$t32], "DBCBoxAccNo_B", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t32], "DataModule_bussProc", C, false)), "ODS_AccNO_B")), "FieldByName", ["acc_no"])), "AsString")));
      } else {
        await $.mset((await $.wv([$t32], "DBCBoxAccNo_B", C, false)), "KeyValue", " ");
      }
    }
    { const $t33 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERS_PHYS_FS1")), "FieldByName", ["cust_type"])), "AsInteger"));
      if ($.eq($t33, 0)) {
        await $.mset((await $.v(C, "RadioBu_jur")), "Checked", true);
        await $.mset((await $.v(C, "RadioBu_phys")), "Enabled", false);
        await $.mset((await $.v(C, "RadioBu_fs")), "Enabled", false);
      }
      else if ($.eq($t33, 1)) {
        await $.mset((await $.v(C, "RadioBu_phys")), "Checked", true);
        await $.mset((await $.v(C, "RadioBu_jur")), "Enabled", false);
        await $.mset((await $.v(C, "RadioBu_fs")), "Enabled", false);
      }
      else if ($.eq($t33, 2)) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "RadioBu_fs")), "Checked")), false))) {
          await $.mset((await $.v(C, "RadioBu_fs")), "Checked", true);
        } else {
          await $.mset((await $.v(C, "RadioBu_fs")), "Checked", true);
        }
        await $.mset((await $.v(C, "RadioBu_jur")), "Enabled", false);
        await $.mset((await $.v(C, "RadioBu_phys")), "Enabled", false);
      }
      else if ($.eq($t33, 3)) {
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
    const $t34 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B"));
    await $.stmt($.wcall([$t34], "close", [], C));
    await $.stmt((await $.wcall([$t34], "SetVariable", ["CustID", (-(1))], C)));
    await $.stmt($.wcall([$t34], "open", [], C));
  }
  await $.mset((await $.v(C, "Label16")), "Visible", false);
  await $.mset((await $.v(C, "edit12")), "visible", false);
  await $.mcall((await $.v(C, "edit2")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_AccName_B")), "Clear", []);
  await $.mset((await $.v(C, "DBCBoxAccNo_B")), "KeyValue", "");
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
  await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ConvertationSymbols")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_contrs3")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERS_PHYS_FS1")), "open", []);
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
  L0["spos"] = (await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "SBOP")), "CallIntegerFunction", ["get_acc_no_sub", []]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A")), "SetVariable", ["ACCSRCHPOS", L0["spos"]])));
  L0["spos"] = (await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "SBOP")), "CallIntegerFunction", ["get_acc_no_sub", []]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "SetVariable", ["ACCSRCHPOS", L0["spos"]])));
  await $.mset((await $.v(C, "DBLookupCEh_contrsName")), "KeyValue", 1);
  {
    const $t35 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A"));
    if ($.truthy($.eq((await $.wv([$t35], "RecordCount", C, false)), 2))) {
      await $.mset((await $.wv([$t35], "DBCBoxAccNo_A", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t35], "DataModule_bussProc", C, false)), "ODS_AccNO_A")), "FieldByName", ["acc_no"])), "AsString")));
    } else {
      await $.mset((await $.wv([$t35], "DBCBoxAccNo_A", C, false)), "KeyValue", "");
    }
  }
  await $.mset((await $.v(C, "Edit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["id"])), "AsString")));
  await $.mset((await $.v(C, "Edit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["cust_name"])), "AsString")));
  if ($.truthy($.in_((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), [0, 2]))) {
    await $.mset((await $.v(C, "Edit5")), "Visible", true);
    await $.mset((await $.v(C, "Edit5")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["inn"])), "AsString")));
    await $.mset((await $.v(C, "Edit4")), "Visible", false);
    await $.mset((await $.v(C, "Edit6")), "Visible", false);
    await $.mset((await $.v(C, "Label10")), "Caption", "VÖEN");
  } else {
    await $.mset((await $.v(C, "Edit4")), "Visible", true);
    await $.mset((await $.v(C, "Edit6")), "Visible", true);
    await $.mset((await $.v(C, "Edit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["passport"])), "AsString")));
    await $.mset((await $.v(C, "Edit6")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["passp_number"])), "AsString")));
    await $.mset((await $.v(C, "Edit5")), "Visible", false);
    await $.mset((await $.v(C, "Label10")), "Caption", "Pasport seriyasi");
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 3))) {
    if ($.truthy($.eq(1, 1))) {
      await $.mset((await $.v(C, "Edit5")), "Visible", true);
      await $.mset((await $.v(C, "Edit5")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["inn"])), "AsString")));
      await $.mset((await $.v(C, "Edit4")), "Visible", false);
      await $.mset((await $.v(C, "Edit6")), "Visible", false);
      await $.mset((await $.v(C, "Label10")), "Caption", "VÖEN");
    } else {
      await $.mset((await $.v(C, "Edit4")), "Visible", true);
      await $.mset((await $.v(C, "Edit6")), "Visible", true);
      await $.mset((await $.v(C, "Edit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["passport"])), "AsString")));
      await $.mset((await $.v(C, "Edit6")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["passp_number"])), "AsString")));
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
      const $t36 = (await $.v(C, "DataModule_bussProc"));
      const $t37 = (await $.wv([$t36], "ODS_AccNO_A", C, false));
      await $.wset([$t36, $t37], "s", "", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.wset([$t36, $t37], "a", (await $.mv((await $.wv([$t36, $t37], "DBLookupComboboxEh_A1", C, false)), "KeyValue")), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
      if ($.truthy($.ne((await $.wv([$t36, $t37], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), "hhh"))) {
        await $.wset([$t36, $t37], "s", $.add($.add("and  a.symb like  '%", (await $.wv([$t36, $t37], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))), "%'"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      await $.stmt($.wcall([$t36, $t37], "close", [], C));
      { const $t38 = await $.iset((await $.wv([$t36, $t37], "sql", C, false)), [13], (await $.wv([$t36, $t37], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))); if ($t38 !== undefined) { await $.wset([$t36, $t37], "sql", $t38, C); } }
      await $.stmt($.wcall([$t36, $t37], "open", [], C));
      if ($.truthy($.eq((await $.wv([$t36, $t37], "RecordCount", C, false)), 1))) {
        await $.mset((await $.wv([$t36, $t37], "DBCBoxAccNo_A", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t36, $t37], "DataModule_bussProc", C, false)), "ODS_AccNO_A")), "FieldByName", ["acc_no"])), "AsString")));
      } else {
        await $.mset((await $.wv([$t36, $t37], "DBCBoxAccNo_A", C, false)), "KeyValue", "");
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction3", "RadioBu_fsClick", async function RadioBu_fsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "x": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERS_PHYS_FS1")), "FieldByName", ["cust_type"])), "AsInteger")), 3))) {
    {
      const $t39 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B"));
      await $.stmt($.wcall([$t39], "close", [], C));
      await $.stmt((await $.wcall([$t39], "SetVariable", ["custtype", " in 2"], C)));
      await $.stmt($.wcall([$t39], "open", [], C));
    }
  }
  {
    const $t40 = (await $.v(C, "DataModule_bussProc"));
    const $t41 = (await $.wv([$t40], "ODS_AccNO_B", C, false));
    if ($.truthy($.eq((await $.wv([$t40, $t41], "RecordCount", C, false)), 1))) {
      await $.mset((await $.wv([$t40, $t41], "DBCBoxAccNo_B", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40, $t41], "DataModule_bussProc", C, false)), "ODS_AccNO_B")), "FieldByName", ["acc_no"])), "AsString")));
    } else {
      await $.mset((await $.wv([$t40, $t41], "DBCBoxAccNo_B", C, false)), "KeyValue", "");
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction3", "RadioBu_physClick", async function RadioBu_physClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERS_PHYS_FS1")), "FieldByName", ["cust_type"])), "AsInteger")), 3))) {
    {
      const $t42 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B"));
      await $.stmt($.wcall([$t42], "close", [], C));
      await $.stmt((await $.wcall([$t42], "SetVariable", ["custtype", "in 1"], C)));
      await $.stmt($.wcall([$t42], "open", [], C));
    }
  }
  {
    const $t43 = (await $.v(C, "DataModule_bussProc"));
    const $t44 = (await $.wv([$t43], "ODS_AccNO_B", C, false));
    if ($.truthy($.eq((await $.wv([$t43, $t44], "RecordCount", C, false)), 1))) {
      await $.mset((await $.wv([$t43, $t44], "DBCBoxAccNo_B", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t43, $t44], "DataModule_bussProc", C, false)), "ODS_AccNO_B")), "FieldByName", ["acc_no"])), "AsString")));
    } else {
      await $.mset((await $.wv([$t43, $t44], "DBCBoxAccNo_B", C, false)), "KeyValue", "");
    }
  }
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
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "OPG_BusProc")), "CallProcedure", ["ExecBProcess", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_BussProc")), "FieldByName", ["ID"])), "AsInteger")), (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Edit1")), "Text"))])), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "FieldByName", ["ID"])), "AsInteger")), 0, (await $.mv((await $.v(C, "CurrencyEdit1")), "Value")), (await $.mv((await $.v(C, "CurrencyEdit2")), "Value")), (await $.mv((await $.v(C, "CurrencyEdit3")), "Value")), 0, (await $.mv((await $.v(C, "DBLookupComboboxEh5")), "KeyValue")), (await $.mv((await $.v(C, "EditDescription")), "Text")), 0, (await $.mv((await $.v(C, "DBLookupCEh_contrsName")), "KeyValue")), (await $.mv((await $.v(C, "EditRate_A")), "Value")), (await $.mv((await $.v(C, "EditRate_B")), "Value")), 0, 0]])));
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
