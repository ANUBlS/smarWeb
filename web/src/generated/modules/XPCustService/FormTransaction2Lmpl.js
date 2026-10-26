// Generated from FormTransaction2Lmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FormTransaction2Lmpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "CurrencyEdit", "DBCtrls", "StdCtrls", "ExtCtrls", "Buttons", "XFSCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "OracleData", "DBGridEh", "UnitDataModPCustService", "PCustServiceFormImpl1", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFormTransaction2", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "currencyedit2": {"name": "CurrencyEdit2", "type": "TCurrencyEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "xfbitbtn2": {"name": "XFBitBtn2", "type": "TXFBitBtn"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "xfbitbtn3": {"name": "XFBitBtn3", "type": "TXFBitBtn"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2_a": {"name": "DBEdit2_A", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dblookupcomboboxeh_a": {"name": "DBLookupComboboxEh_A", "type": "TDBLookupComboboxEh"}, "dbcboxaccno_a": {"name": "DBCBoxAccNo_A", "type": "TDBLookupComboboxEh"}, "label5": {"name": "Label5", "type": "TLabel"}, "edit_accname": {"name": "Edit_AccName", "type": "TEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "label6": {"name": "Label6", "type": "TLabel"}, "dblookupceh_contrsname2": {"name": "DBLookupCEh_contrsName2", "type": "TDBLookupComboBox"}, "label8": {"name": "Label8", "type": "TLabel"}, "edit_description": {"name": "Edit_description", "type": "TEdit"}, "dblookupcomboboxeh_description": {"name": "DBLookupComboboxEh_description", "type": "TDBLookupComboboxEh"}, "editdescription": {"name": "EditDescription", "type": "TEdit"}, "label14": {"name": "Label14", "type": "TLabel"}, "edit_ostata": {"name": "Edit_ostatA", "type": "TEdit"}, "label_xez": {"name": "Label_xez", "type": "TLabel"}, "edit_xez": {"name": "Edit_xez", "type": "TEdit"}, "cashsymbollookup": {"name": "CashSymbolLookUp", "type": "TDBLookupComboboxEh"}}, {});
  U.init(async () => {
    U.var_("FormTransaction2", null, "TFormTransaction2");
    U.var_("v_ostat", 0, "Real");
  });
  U.method("TFormTransaction2", "CashSymbolLookUpChange", async function CashSymbolLookUpChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "CashSymbolLookUp")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.mset((await $.v(C, "Edit_xez")), "Text", (await $.mv((await $.v(C, "CashSymbolLookUp")), "KeyValue")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction2", "SetCashSymbol", async function SetCashSymbol(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.v(C, "DataModPCustService"));
    const $t2 = (await $.wv([$t1], "CashSymbolLookUp", C, false));
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t1, $t2], "ODS_AccNO_A", C, false)), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t1, $t2], "ODS_AccNO_A", C, false)), "FieldByName", ["val_acc"])), "AsInteger")), 0)))))) {
      await $.mset((await $.mv((await $.wv([$t1, $t2], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = 0");
    } else {
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t1, $t2], "ODS_AccNO_B", C, false)), "FieldByName", ["IsCacheAccount"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t1, $t2], "ODS_AccNO_B", C, false)), "FieldByName", ["val_acc"])), "AsInteger")), 0)))))) {
        await $.mset((await $.mv((await $.wv([$t1, $t2], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = 1");
      } else {
        await $.mset((await $.mv((await $.wv([$t1, $t2], "ListSource", C, false)), "DataSet")), "Filter", "Mediocrity = -1");
      }
    }
    await $.mset((await $.mv((await $.wv([$t1, $t2], "ListSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t1, $t2], "False", C, false)));
    await $.mset((await $.mv((await $.wv([$t1, $t2], "ListSource", C, false)), "DataSet")), "Filtered", (await $.wv([$t1, $t2], "True", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormTransaction2", "CashSymbolLookUpDropDown", async function CashSymbolLookUpDropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction2", "CurrencyEdit1Change", async function CurrencyEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "DataModPCustService"));
    if ($.truthy((await $.and_((await $.and_((await $.and_(((await $.mv((await $.wv([$t3], "ODS_AccNO_A", C, false)), "active"))), async () => ($.ne((await $.mv((await $.wv([$t3], "ODS_AccNO_A", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t3], "ODS_AccNO_A", C, false)), "FieldByName", ["id"])), "IsNull"))))))), async () => ($.gt((await $.mv((await $.wv([$t3], "CurrencyEdit1", C, false)), "Value")), 0)))))) {
      await $.wset([$t3], "v_ostat", (await $.mcall((await $.wv([$t3], "PG_PCustService", C, false)), "CallFloatFunction", ["get_rate", [(-(1)), (await $.mv((await $.mcall((await $.wv([$t3], "ODS_AccNO_A", C, false)), "FieldByName", ["ID"])), "AsInteger")), (-(1)), (-(1)), (-(1))]])), C);
      await $.mset((await $.wv([$t3], "XFBitBtn3", C, false)), "Enabled", (await $.wv([$t3], "True", C, false)));
      await $.mset((await $.wv([$t3], "CurrencyEdit2", C, false)), "Value", $.mul(((await $.mv((await $.wv([$t3], "CurrencyEdit1", C, false)), "Value"))), (await $.wv([$t3], "v_ostat", C, false))));
    } else {
      await $.mset((await $.wv([$t3], "XFBitBtn3", C, false)), "Enabled", (await $.wv([$t3], "False", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction2", "CurrencyEdit1Click", async function CurrencyEdit1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CurrencyEdit1")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction2", "CurrencyEdit1KeyPress", async function CurrencyEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", (await $.call(C, "Chr", [8]))])))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction2", "CurrencyEdit2Click", async function CurrencyEdit2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CurrencyEdit2")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction2", "CurrencyEdit2KeyPress", async function CurrencyEdit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", (await $.call(C, "Chr", [8]))])))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction2", "DBCBoxAccNo_AChange", async function DBCBoxAccNo_AChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "DataModPCustService"));
    await $.mcall((await $.wv([$t4], "Ods_Tenostat_A", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t4], "Ods_Tenostat_A", C, false)), "SetVariable", ["id", (await $.mv((await $.mcall((await $.wv([$t4], "ODS_AccNO_A", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t4], "Ods_Tenostat_A", C, false)), "Open", []);
    await $.mset((await $.wv([$t4], "Edit_ostatA", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t4], "Ods_Tenostat_A", C, false)), "FieldByName", ["ostat"])), "AsString")));
  }
  await $.mset((await $.v(C, "Edit_AccName")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "FieldByName", ["name"])), "AsString")));
  if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBCBoxAccNo_A")), "KeyValue")), "")), async () => ($.gt((await $.mv((await $.v(C, "CurrencyEdit1")), "Value")), 0)))), async () => ($.not((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "FieldByName", ["ID"])), "IsNull")))))))) {
    await $.set(C, "v_ostat", (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallFloatFunction", ["get_rate", [(-(1)), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "FieldByName", ["ID"])), "AsInteger")), (-(1)), (-(1)), (-(1))]])));
    await $.mset((await $.v(C, "XFBitBtn3")), "Enabled", true);
    await $.mset((await $.v(C, "CurrencyEdit2")), "Value", $.mul(((await $.mv((await $.v(C, "CurrencyEdit1")), "Value"))), (await $.v(C, "v_ostat"))));
  } else {
    await $.mset((await $.v(C, "XFBitBtn3")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction2", "DBCBoxAccNo_ACloseUp", async function DBCBoxAccNo_ACloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "FieldByName", ["symb"])), "IsNull")))) {
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_account_symbols_A")), "first", []);
    await $.mset((await $.v(C, "DBLookupComboboxEh_A")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_account_symbols_A")), "FieldByName", ["symbol"])), "AsString")));
  } else {
    await $.mset((await $.v(C, "DBLookupComboboxEh_A")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "FieldByName", ["symb"])), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormTransaction2", "DBLookupComboboxEh_ACloseUp", async function DBLookupComboboxEh_ACloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined, "a": '', "s": ''};
  await $.fixArgs(L0, ["sender", "accept"]);
  if ($.truthy(($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh_A")), "KeyValue")), "")))) {
    {
      const $t5 = (await $.v(C, "DataModPCustService"));
      const $t6 = (await $.wv([$t5], "ODS_AccNO_A", C, false));
      await $.wset([$t5, $t6], "s", "", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.wset([$t5, $t6], "a", (await $.mv((await $.wv([$t5, $t6], "DBLookupComboboxEh_A", C, false)), "KeyValue")), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
      if ($.truthy($.ne((await $.wv([$t5, $t6], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), "hhh"))) {
        await $.wset([$t5, $t6], "s", $.add($.add("and  a.symb like  '%", (await $.wv([$t5, $t6], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))), "%'"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      await $.stmt($.wcall([$t5, $t6], "close", [], C));
      { const $t7 = await $.iset((await $.wv([$t5, $t6], "sql", C, false)), [13], (await $.wv([$t5, $t6], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))); if ($t7 !== undefined) { await $.wset([$t5, $t6], "sql", $t7, C); } }
      await $.stmt($.wcall([$t5, $t6], "open", [], C));
      if ($.truthy($.eq((await $.wv([$t5, $t6], "RecordCount", C, false)), 1))) {
        await $.mset((await $.wv([$t5, $t6], "DBCBoxAccNo_A", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t5, $t6], "DataModPCustService", C, false)), "ODS_AccNO_A")), "FieldByName", ["acc_no"])), "AsString")));
      } else {
        await $.mset((await $.wv([$t5, $t6], "DBCBoxAccNo_A", C, false)), "KeyValue", "");
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormTransaction2", "DBLookupComboboxEh_descriptionChange", async function DBLookupComboboxEh_descriptionChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh_description")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.mset((await $.v(C, "Edit_description")), "Text", (await $.mv((await $.v(C, "DBLookupComboboxEh_description")), "KeyValue")));
  }
  await $.mset((await $.v(C, "EditDescription")), "Text", (await $.mv((await $.v(C, "DBLookupComboboxEh_description")), "text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction2", "Edit1KeyPress", async function Edit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "v_cust_type_id": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t8 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS"));
      await $.stmt($.wcall([$t8], "close", [], C));
      { const $t9 = await $.iset((await $.wv([$t8], "sql", C, false)), [8], " "); if ($t9 !== undefined) { await $.wset([$t8], "sql", $t9, C); } }
      if ($.truthy($.ne((await $.mv((await $.wv([$t8], "Edit1", C, false)), "Text")), ""))) {
        { const $t10 = await $.iset((await $.wv([$t8], "sql", C, false)), [8], $.add($.add((await $.idx((await $.wv([$t8], "sql", C, false)), [8])), " and c.ID = "), (await $.mv((await $.wv([$t8], "Edit1", C, false)), "Text")))); if ($t10 !== undefined) { await $.wset([$t8], "sql", $t10, C); } }
      }
      await $.stmt($.wcall([$t8], "open", [], C));
      if ($.truthy($.eq((await $.wv([$t8], "RecordCount", C, false)), 0))) {
        await $.stmt((await $.wcall([$t8], "showmessage", ["Belə müştəri yoxdu  !"], C)));
        await $.mcall((await $.wv([$t8], "Edit1", C, false)), "Clear", []);
      }
      await $.mset((await $.wv([$t8], "Edit3", C, false)), "Text", (await $.mv((await $.wcall([$t8], "FieldByName", ["cust_name"], C)), "AsString")));
      {
        const $t11 = (await $.mv((await $.wv([$t8], "DataModPCustService", C, false)), "ODS_AccNO_A"));
        await $.stmt($.wcall([$t8, $t11], "close", [], C));
        await $.stmt((await $.wcall([$t8, $t11], "SetVariable", ["CustID", (await $.wcall([$t8, $t11], "strtoint", [(await $.mv((await $.wv([$t8, $t11], "Edit1", C, false)), "Text"))], C))], C)));
        await $.stmt($.wcall([$t8, $t11], "open", [], C));
      }
    }
    if ($.truthy($.le((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "RecordCount")), 2))) {
      await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "First", []);
      await $.mset((await $.v(C, "DBCBoxAccNo_A")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "FieldByName", ["acc_no"])), "AsString")));
      await $.mset((await $.v(C, "DBLookupComboboxEh_A")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "FieldByName", ["symb"])), "AsString")));
    } else {
      await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "Last", []);
      await $.mset((await $.v(C, "DBLookupComboboxEh_A")), "KeyValue", " ");
    }
    await $.mcall((await $.v(C, "CurrencyEdit1")), "Clear", []);
    await $.mcall((await $.v(C, "CurrencyEdit2")), "Clear", []);
    await $.mcall((await $.v(C, "EditDescription")), "Clear", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction2", "Edit_descriptionExit", async function Edit_descriptionExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_description")), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh_description")), "KeyValue", (await $.mv((await $.v(C, "Edit_description")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction2", "Edit_descriptionKeyPress", async function Edit_descriptionKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh_description")), "KeyValue", (await $.mv((await $.v(C, "Edit_description")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction2", "Edit_xezExit", async function Edit_xezExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_xez")), "Text")), ""))) {
    await $.mset((await $.v(C, "CashSymbolLookUp")), "KeyValue", (await $.mv((await $.v(C, "Edit_xez")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction2", "Edit_xezKeyPress", async function Edit_xezKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "CashSymbolLookUp")), "KeyValue", (await $.mv((await $.v(C, "Edit_xez")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction2", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFormTransaction2", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CurrencyEdit1")), "Value", 0);
  await $.mset((await $.v(C, "CurrencyEdit2")), "Value", 0);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_account_symbols_A")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_account_symbols_B")), "Refresh", []);
  await $.mcall((await $.v(C, "Edit_description")), "Clear", []);
  await $.mset((await $.v(C, "DBLookupComboboxEh_description")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "Edit_xez")), "Clear", []);
  await $.mset((await $.v(C, "CashSymbolLookUp")), "KeyValue", "");
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormTransaction2", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_contrs3")), "open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction2", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 27))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction2", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "spos": 0, "a": '', "s": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["spos"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "SBOP")), "CallIntegerFunction", ["get_acc_no_sub", []]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "SetVariable", ["ACCSRCHPOS", L0["spos"]])));
  await $.mset((await $.v(C, "DBLookupCEh_contrsName2")), "KeyValue", 1);
  if ($.truthy($.in_((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_BusProcID")), "AsInteger")), [2, 3]))) {
    await $.mset((await $.v(C, "Label_xez")), "Visible", true);
    await $.mset((await $.v(C, "Edit_xez")), "Visible", true);
    await $.mset((await $.v(C, "CashSymbolLookUp")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "label_xez")), "Visible", false);
    await $.mset((await $.v(C, "Edit_xez")), "Visible", false);
    await $.mset((await $.v(C, "CashSymbolLookUp")), "Visible", false);
  }
  {
    const $t12 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A"));
    if ($.truthy($.eq((await $.wv([$t12], "RecordCount", C, false)), 2))) {
      await $.mset((await $.wv([$t12], "DBCBoxAccNo_A", C, false)), "KeyValue", (await $.mv((await $.wcall([$t12], "FieldByName", ["acc_no"], C)), "AsString")));
    } else {
      await $.mset((await $.wv([$t12], "DBCBoxAccNo_A", C, false)), "KeyValue", "");
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
  await $.mcall((await $.v(C, "EditDescription")), "Clear", []);
  await $.mset((await $.v(C, "DBLookupComboboxEh_A")), "KeyValue", "hhh");
  if ($.truthy(($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh_A")), "KeyValue")), "")))) {
    {
      const $t13 = (await $.v(C, "DataModPCustService"));
      const $t14 = (await $.wv([$t13], "ODS_AccNO_A", C, false));
      await $.wset([$t13, $t14], "s", "", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.wset([$t13, $t14], "a", (await $.mv((await $.wv([$t13, $t14], "DBLookupComboboxEh_A", C, false)), "KeyValue")), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
      if ($.truthy($.ne((await $.wv([$t13, $t14], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), "hhh"))) {
        await $.wset([$t13, $t14], "s", $.add($.add("and  a.symb like  '%", (await $.wv([$t13, $t14], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))), "%'"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      await $.stmt($.wcall([$t13, $t14], "close", [], C));
      { const $t15 = await $.iset((await $.wv([$t13, $t14], "sql", C, false)), [13], (await $.wv([$t13, $t14], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))); if ($t15 !== undefined) { await $.wset([$t13, $t14], "sql", $t15, C); } }
      await $.stmt($.wcall([$t13, $t14], "open", [], C));
      if ($.truthy($.eq((await $.wv([$t13, $t14], "RecordCount", C, false)), 1))) {
        await $.mset((await $.wv([$t13, $t14], "DBCBoxAccNo_A", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t13, $t14], "DataModPCustService", C, false)), "ODS_AccNO_A")), "FieldByName", ["acc_no"])), "AsString")));
      } else {
        await $.mset((await $.wv([$t13, $t14], "DBCBoxAccNo_A", C, false)), "KeyValue", "");
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction2", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction2", "XFBitBtn2Click", async function XFBitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction2", "XFBitBtn3Click", async function XFBitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "busp_id": 0, "v_debt_hes": 0, "v_ammount": 0, "v_lammount": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallProcedure", ["p_bus_tr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_BusProc")), "FieldByName", ["ID"])), "AsInteger")), (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Edit1")), "Text"))])), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "FieldByName", ["ID"])), "AsInteger")), (await $.v(C, "null")), (await $.v(C, "null")), (await $.mv((await $.v(C, "CurrencyEdit1")), "Value")), (await $.mv((await $.v(C, "EditDescription")), "Text")), (await $.mv((await $.v(C, "CashSymbolLookUp")), "KeyValue"))]])));
  await $.mcall((await $.v(C, "FormTransaction2")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
