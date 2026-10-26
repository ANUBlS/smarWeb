// Generated from UnitTransaction.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitTransaction", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCtrls", "StdCtrls", "CurrencyEdit", "Mask", "Buttons", "XFSCtrls", "XPMan", "ExtCtrls", "DBGridEh", "DBCtrlsEh", "DBLookupEh", "UnitDataBussProc", "SBTranslateProc", "sboapiDataModuleImpl", "CustomersImpl", "UnitbussProc"]);
  const C = [U];
  U.defClass("TFormTransaction4", "TForm", {"label21": {"name": "Label21", "type": "TLabel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "editamount": {"name": "EditAmount", "type": "TCurrencyEdit"}, "label32": {"name": "Label32", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "dblookupcombobox_konvertasiya": {"name": "DBLookupComboBox_konvertasiya", "type": "TDBLookupComboBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label_paspin_inn_a": {"name": "Label_PASPIN_INN_A", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "edit_id_a": {"name": "Edit_id_A", "type": "TEdit"}, "edit_pasp_num_a": {"name": "Edit_pasp_num_A", "type": "TEdit"}, "edit_pasp_ser_a": {"name": "Edit_pasp_ser_A", "type": "TEdit"}, "edit_inn_a": {"name": "Edit_inn_A", "type": "TEdit"}, "dblookupcomboboxeh_a1": {"name": "DBLookupComboboxEh_A1", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh_fil_a": {"name": "DBLookupComboboxEh_fil_A", "type": "TDBLookupComboboxEh"}, "edit_accname_a": {"name": "Edit_AccName_A", "type": "TEdit"}, "edit_cust_name_a": {"name": "Edit_cust_name_A", "type": "TEdit"}, "dbcboxaccno_a": {"name": "DBCBoxAccNo_A", "type": "TDBLookupComboboxEh"}, "edit_bal_cn1_a": {"name": "edit_bal_cn1_A", "type": "TEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label_paspin_inn_b": {"name": "Label_PASPIN_INN_B", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "label20": {"name": "Label20", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label_acc_noa": {"name": "Label_acc_noA", "type": "TLabel"}, "edit_id_b": {"name": "Edit_id_B", "type": "TEdit"}, "edit_pasp_num_b": {"name": "Edit_pasp_num_B", "type": "TEdit"}, "edit_pasp_ser_b": {"name": "Edit_pasp_ser_B", "type": "TEdit"}, "edit_inn_b": {"name": "Edit_inn_B", "type": "TEdit"}, "dblookupcomboboxeh_fil_b": {"name": "DBLookupComboboxEh_fil_B", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh_b1": {"name": "DBLookupComboboxEh_B1", "type": "TDBLookupComboboxEh"}, "edit_accname_b": {"name": "Edit_AccName_B", "type": "TEdit"}, "dbcboxaccno_b": {"name": "DBCBoxAccNo_B", "type": "TDBLookupComboboxEh"}, "edit_cust_name_b": {"name": "Edit_cust_name_B", "type": "TEdit"}, "edit_bal_cn1_b": {"name": "Edit_bal_cn1_B", "type": "TEdit"}, "radiobu_jur_b": {"name": "RadioBu_jur_B", "type": "TRadioButton"}, "radiobu_phys_b": {"name": "RadioBu_phys_B", "type": "TRadioButton"}, "radiobu_fs_b": {"name": "RadioBu_fs_B", "type": "TRadioButton"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "label33": {"name": "Label33", "type": "TLabel"}, "edit_inn_fs_b": {"name": "Edit_inn_fs_B", "type": "TEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "label23": {"name": "Label23", "type": "TLabel"}, "label_paspin_inn_c": {"name": "Label_PASPIN_INN_C", "type": "TLabel"}, "label25": {"name": "Label25", "type": "TLabel"}, "label26": {"name": "Label26", "type": "TLabel"}, "label28": {"name": "Label28", "type": "TLabel"}, "label29": {"name": "Label29", "type": "TLabel"}, "label30": {"name": "Label30", "type": "TLabel"}, "label_acc_no_c": {"name": "Label_acc_no_C", "type": "TLabel"}, "label36": {"name": "Label36", "type": "TLabel"}, "edit_id_c": {"name": "Edit_id_C", "type": "TEdit"}, "edit_pasp_num_c": {"name": "Edit_PASP_NUM_C", "type": "TEdit"}, "edit_pasp_ser_c": {"name": "Edit_PASP_SER_C", "type": "TEdit"}, "edit_inn_c": {"name": "Edit_INN_C", "type": "TEdit"}, "dblookupcomboboxeh_fil_c": {"name": "DBLookupComboboxEh_FIL_C", "type": "TDBLookupComboboxEh"}, "edit_accname_c": {"name": "Edit_ACCNAME_C", "type": "TEdit"}, "dbcboxaccno_c": {"name": "DBCBoxAccNo_C", "type": "TDBLookupComboboxEh"}, "edit_cust_name_c": {"name": "Edit_CUST_NAME_C", "type": "TEdit"}, "edit_bal_cn1_c": {"name": "Edit_BAL_CN1_C", "type": "TEdit"}, "edit_inn_fs_c": {"name": "Edit_inn_fs_C", "type": "TEdit"}, "radiobu_jur_c": {"name": "RadioBu_jur_C", "type": "TRadioButton"}, "radiobu_phys_c": {"name": "RadioBu_phys_C", "type": "TRadioButton"}, "radiobu_fs_c": {"name": "RadioBu_fs_C", "type": "TRadioButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "dblookupcomboboxeh_c": {"name": "DBLookupComboboxEh_C", "type": "TDBLookupComboboxEh"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "btnok": {"name": "BtnOK", "type": "TXFBitBtn"}, "xfbitbtn4": {"name": "XFBitBtn4", "type": "TXFBitBtn"}, "dblookupceh_contrsname": {"name": "DBLookupCEh_contrsName", "type": "TDBLookupComboBox"}, "label24": {"name": "Label24", "type": "TLabel"}, "edit_description": {"name": "Edit_description", "type": "TEdit"}, "dblookupcomboboxeh_description": {"name": "DBLookupComboboxEh_description", "type": "TDBLookupComboboxEh"}, "editdescription": {"name": "EditDescription", "type": "TEdit"}, "label5": {"name": "Label5", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "edit_ostatb": {"name": "Edit_ostatB", "type": "TEdit"}, "edit_ostatc": {"name": "Edit_ostatC", "type": "TEdit"}, "edit_ostata": {"name": "Edit_ostatA", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("FormTransaction4", null, "TFormTransaction4");
  });
  U.method("TFormTransaction4", "BtnOKClick", async function BtnOKClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "OPG_BusProc")), "CallProcedure", ["ExecBProcess", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_BussProc")), "FieldByName", ["ID"])), "AsInteger")), (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Edit_id_A")), "Text"))])), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_C")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.v(C, "EditAmount")), "Value")), (await $.mv((await $.v(C, "EditAmount")), "Value")), (await $.mv((await $.v(C, "EditAmount")), "Value")), 0, (await $.mv((await $.v(C, "DBLookupComboBox_konvertasiya")), "KeyValue")), (await $.mv((await $.v(C, "EditDescription")), "text")), 0, (await $.mv((await $.v(C, "DBLookupCEh_contrsName")), "KeyValue")), 0, 0, 0, 0]])));
  await $.mcall((await $.v(C, "FormTransaction4")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction4", "DBCBoxAccNo_AChange", async function DBCBoxAccNo_AChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DataModule_bussProc"));
    await $.mcall((await $.wv([$t1], "Ods_Tenostat_A", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t1], "Ods_Tenostat_A", C, false)), "SetVariable", ["id", (await $.mv((await $.mcall((await $.wv([$t1], "ODS_AccNO_A", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t1], "Ods_Tenostat_A", C, false)), "Open", []);
    await $.mset((await $.wv([$t1], "Edit_ostatA", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t1], "Ods_Tenostat_A", C, false)), "FieldByName", ["ostat"])), "AsString")));
  }
  await $.mset((await $.v(C, "edit_bal_cn1_A")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A")), "FieldByName", ["bal_cn1"])), "AsString")));
  await $.mset((await $.v(C, "Edit_AccName_A")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A")), "FieldByName", ["name"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction4", "DBCBoxAccNo_ACloseUp", async function DBCBoxAccNo_ACloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A")), "FieldByName", ["symb"])), "isnull")))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh_A1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_account_symbols_A")), "FieldByName", ["symbol"])), "AsString")));
    await $.mset((await $.v(C, "DBLookupComboboxEh_fil_A")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A")), "FieldByName", ["filial"])), "AsInteger")));
  } else {
    await $.mset((await $.v(C, "DBLookupComboboxEh_A1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A")), "FieldByName", ["symb"])), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormTransaction4", "DBCBoxAccNo_BChange", async function DBCBoxAccNo_BChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "DataModule_bussProc"));
    await $.mcall((await $.wv([$t2], "Ods_Tenostat_B", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t2], "Ods_Tenostat_B", C, false)), "SetVariable", ["id", (await $.mv((await $.mcall((await $.wv([$t2], "ODS_AccNO_B", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t2], "Ods_Tenostat_B", C, false)), "Open", []);
    await $.mset((await $.wv([$t2], "Edit_ostatB", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t2], "Ods_Tenostat_B", C, false)), "FieldByName", ["ostat"])), "AsString")));
  }
  await $.mset((await $.v(C, "Edit_bal_cn1_B")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "FieldByName", ["bal_cn1"])), "AsString")));
  await $.mset((await $.v(C, "Edit_AccName_B")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "FieldByName", ["name"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction4", "DBCBoxAccNo_BCloseUp", async function DBCBoxAccNo_BCloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  { const $t3 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "FieldByName", ["cust_type"])), "AsInteger"));
    if ($.eq($t3, 1)) {
      await $.mset((await $.v(C, "RadioBu_phys_B")), "Checked", true);
    }
    else if ($.eq($t3, 2)) {
      await $.mset((await $.v(C, "RadioBu_fs_B")), "Checked", true);
    }
  }
  if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "FieldByName", ["symb"])), "isnull")))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh_B1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_account_symbols_B")), "FieldByName", ["symbol"])), "AsString")));
    await $.mset((await $.v(C, "DBLookupComboboxEh_fil_B")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "FieldByName", ["filial"])), "AsInteger")));
  } else {
    await $.mset((await $.v(C, "DBLookupComboboxEh_B1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "FieldByName", ["symb"])), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormTransaction4", "DBCBoxAccNo_CChange", async function DBCBoxAccNo_CChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "DataModule_bussProc"));
    await $.mcall((await $.wv([$t4], "Ods_Tenostat_C", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t4], "Ods_Tenostat_C", C, false)), "SetVariable", ["id", (await $.mv((await $.mcall((await $.wv([$t4], "ODS_AccNO_C", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t4], "Ods_Tenostat_C", C, false)), "Open", []);
    await $.mset((await $.wv([$t4], "Edit_ostatC", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t4], "Ods_Tenostat_C", C, false)), "FieldByName", ["ostat"])), "AsString")));
  }
  await $.mset((await $.v(C, "Edit_bal_cn1_c")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_c")), "FieldByName", ["bal_cn1"])), "AsString")));
  await $.mset((await $.v(C, "Edit_AccName_C")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_C")), "FieldByName", ["name"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction4", "DBCBoxAccNo_CCloseUp", async function DBCBoxAccNo_CCloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  { const $t5 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_C")), "FieldByName", ["cust_type"])), "AsInteger"));
    if ($.eq($t5, 1)) {
      await $.mset((await $.v(C, "RadioBu_phys_C")), "Checked", true);
    }
    else if ($.eq($t5, 2)) {
      await $.mset((await $.v(C, "RadioBu_fs_C")), "Checked", true);
    }
  }
  if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_C")), "FieldByName", ["symb"])), "isnull")))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh_C")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_account_symbols_C")), "FieldByName", ["symbol"])), "AsString")));
    await $.mset((await $.v(C, "DBLookupComboboxEh_fil_C")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_C")), "FieldByName", ["filial"])), "AsInteger")));
  } else {
    await $.mset((await $.v(C, "DBLookupComboboxEh_C")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_C")), "FieldByName", ["symb"])), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormTransaction4", "DBLookupComboboxEh_A1CloseUp", async function DBLookupComboboxEh_A1CloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined, "a": '', "b": '', "s": ''};
  await $.fixArgs(L0, ["sender", "accept"]);
  if ($.truthy(($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh_A1")), "KeyValue")), "")))) {
    {
      const $t6 = (await $.v(C, "DataModule_bussProc"));
      const $t7 = (await $.wv([$t6], "ODS_AccNO_A", C, false));
      await $.wset([$t6, $t7], "s", "", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.wset([$t6, $t7], "a", (await $.mv((await $.wv([$t6, $t7], "DBLookupComboboxEh_A1", C, false)), "KeyValue")), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
      await $.wset([$t6, $t7], "b", (await $.wcall([$t6, $t7], "inttostr", [(await $.mv((await $.wv([$t6, $t7], "DBLookupComboboxEh_fil_A", C, false)), "KeyValue"))], C)), { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true });
      if ($.truthy($.ne((await $.wv([$t6, $t7], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), "hhh"))) {
        await $.wset([$t6, $t7], "s", $.add($.add("and  a.symb like  '%", (await $.wv([$t6, $t7], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))), "%'"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      if ($.truthy($.ne((await $.wv([$t6, $t7], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false)), "-1"))) {
        await $.wset([$t6, $t7], "s", $.add($.add((await $.wv([$t6, $t7], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), " and a.filial="), (await $.wv([$t6, $t7], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      await $.stmt($.wcall([$t6, $t7], "close", [], C));
      { const $t8 = await $.iset((await $.wv([$t6, $t7], "sql", C, false)), [13], (await $.wv([$t6, $t7], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))); if ($t8 !== undefined) { await $.wset([$t6, $t7], "sql", $t8, C); } }
      await $.stmt($.wcall([$t6, $t7], "open", [], C));
      if ($.truthy($.eq((await $.wv([$t6, $t7], "RecordCount", C, false)), 1))) {
        await $.mset((await $.wv([$t6, $t7], "DBCBoxAccNo_A", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t6, $t7], "DataModule_bussProc", C, false)), "ODS_AccNO_A")), "FieldByName", ["acc_no"])), "AsString")));
      } else {
        await $.mset((await $.wv([$t6, $t7], "DBCBoxAccNo_A", C, false)), "KeyValue", "");
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormTransaction4", "DBLookupComboboxEh_B1CloseUp", async function DBLookupComboboxEh_B1CloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined, "a": '', "b": '', "s": ''};
  await $.fixArgs(L0, ["sender", "accept"]);
  if ($.truthy(($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh_B1")), "KeyValue")), "")))) {
    {
      const $t9 = (await $.v(C, "DataModule_bussProc"));
      const $t10 = (await $.wv([$t9], "ODS_AccNO_B", C, false));
      await $.wset([$t9, $t10], "s", "", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.wset([$t9, $t10], "a", (await $.mv((await $.wv([$t9, $t10], "DBLookupComboboxEh_B1", C, false)), "KeyValue")), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
      await $.wset([$t9, $t10], "b", (await $.wcall([$t9, $t10], "inttostr", [(await $.mv((await $.wv([$t9, $t10], "DBLookupComboboxEh_Fil_B", C, false)), "KeyValue"))], C)), { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true });
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
  {
    const $t12 = (await $.v(C, "DataModule_bussProc"));
    const $t13 = (await $.wv([$t12], "ODS_AccNO_B", C, false));
    if ($.truthy($.eq((await $.wv([$t12, $t13], "RecordCount", C, false)), 1))) {
      await $.mset((await $.wv([$t12, $t13], "DBCBoxAccNo_B", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t12, $t13], "DataModule_bussProc", C, false)), "ODS_AccNO_B")), "FieldByName", ["acc_no"])), "AsString")));
    } else {
      await $.mset((await $.wv([$t12, $t13], "DBCBoxAccNo_B", C, false)), "KeyValue", "");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormTransaction4", "DBLookupComboboxEh_CCloseUp", async function DBLookupComboboxEh_CCloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined, "a": '', "b": '', "s": ''};
  await $.fixArgs(L0, ["sender", "accept"]);
  if ($.truthy(($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh_C")), "KeyValue")), "")))) {
    {
      const $t14 = (await $.v(C, "DataModule_bussProc"));
      const $t15 = (await $.wv([$t14], "ODS_AccNO_C", C, false));
      await $.wset([$t14, $t15], "s", "", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.wset([$t14, $t15], "a", (await $.mv((await $.wv([$t14, $t15], "DBLookupComboboxEh_C", C, false)), "KeyValue")), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
      await $.wset([$t14, $t15], "b", (await $.wcall([$t14, $t15], "inttostr", [(await $.mv((await $.wv([$t14, $t15], "DBLookupComboboxEh_Fil_C", C, false)), "KeyValue"))], C)), { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true });
      if ($.truthy($.ne((await $.wv([$t14, $t15], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), "hhh"))) {
        await $.wset([$t14, $t15], "s", $.add($.add("and  a.symb like  '%", (await $.wv([$t14, $t15], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))), "%'"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      if ($.truthy($.ne((await $.wv([$t14, $t15], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false)), "-1"))) {
        await $.wset([$t14, $t15], "s", $.add($.add((await $.wv([$t14, $t15], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), " and a.filial="), (await $.wv([$t14, $t15], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      await $.stmt($.wcall([$t14, $t15], "close", [], C));
      { const $t16 = await $.iset((await $.wv([$t14, $t15], "sql", C, false)), [13], (await $.wv([$t14, $t15], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))); if ($t16 !== undefined) { await $.wset([$t14, $t15], "sql", $t16, C); } }
      await $.stmt($.wcall([$t14, $t15], "open", [], C));
    }
  }
  {
    const $t17 = (await $.v(C, "DataModule_bussProc"));
    const $t18 = (await $.wv([$t17], "ODS_AccNO_C", C, false));
    if ($.truthy($.eq((await $.wv([$t17, $t18], "RecordCount", C, false)), 1))) {
      await $.mset((await $.wv([$t17, $t18], "DBCBoxAccNo_C", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t17, $t18], "DataModule_bussProc", C, false)), "ODS_AccNO_C")), "FieldByName", ["acc_no"])), "AsString")));
    } else {
      await $.mset((await $.wv([$t17, $t18], "DBCBoxAccNo_C", C, false)), "KeyValue", "");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormTransaction4", "DBLookupComboboxEh_descriptionChange", async function DBLookupComboboxEh_descriptionChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh_description")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.mset((await $.v(C, "Edit_description")), "Text", (await $.mv((await $.v(C, "DBLookupComboboxEh_description")), "KeyValue")));
  }
  await $.mset((await $.v(C, "EditDescription")), "Text", (await $.mv((await $.v(C, "DBLookupComboboxEh_description")), "text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction4", "DBLookupComboboxEh_fil_ACloseUp", async function DBLookupComboboxEh_fil_ACloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined, "a": '', "b": '', "s": ''};
  await $.fixArgs(L0, ["sender", "accept"]);
  if ($.truthy(($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh_A1")), "KeyValue")), "")))) {
    {
      const $t19 = (await $.v(C, "DataModule_bussProc"));
      const $t20 = (await $.wv([$t19], "ODS_AccNO_A", C, false));
      await $.wset([$t19, $t20], "s", "", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.wset([$t19, $t20], "a", (await $.mv((await $.wv([$t19, $t20], "DBLookupComboboxEh_A1", C, false)), "KeyValue")), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
      await $.wset([$t19, $t20], "b", (await $.wcall([$t19, $t20], "inttostr", [(await $.mv((await $.wv([$t19, $t20], "DBLookupComboboxEh_fil_A", C, false)), "KeyValue"))], C)), { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true });
      if ($.truthy($.ne((await $.wv([$t19, $t20], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), "hhh"))) {
        await $.wset([$t19, $t20], "s", $.add($.add("and  a.symb like  '%", (await $.wv([$t19, $t20], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))), "%'"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      if ($.truthy($.ne((await $.wv([$t19, $t20], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false)), "-1"))) {
        await $.wset([$t19, $t20], "s", $.add($.add((await $.wv([$t19, $t20], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), " and a.filial="), (await $.wv([$t19, $t20], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      await $.stmt($.wcall([$t19, $t20], "close", [], C));
      { const $t21 = await $.iset((await $.wv([$t19, $t20], "sql", C, false)), [13], (await $.wv([$t19, $t20], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))); if ($t21 !== undefined) { await $.wset([$t19, $t20], "sql", $t21, C); } }
      await $.stmt($.wcall([$t19, $t20], "open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormTransaction4", "DBLookupComboboxEh_fil_BCloseUp", async function DBLookupComboboxEh_fil_BCloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined, "a": '', "b": '', "s": ''};
  await $.fixArgs(L0, ["sender", "accept"]);
  if ($.truthy(($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh_B1")), "KeyValue")), "")))) {
    {
      const $t22 = (await $.v(C, "DataModule_bussProc"));
      const $t23 = (await $.wv([$t22], "ODS_AccNO_B", C, false));
      await $.wset([$t22, $t23], "s", "", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.wset([$t22, $t23], "a", (await $.mv((await $.wv([$t22, $t23], "DBLookupComboboxEh_B1", C, false)), "KeyValue")), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
      await $.wset([$t22, $t23], "b", (await $.wcall([$t22, $t23], "inttostr", [(await $.mv((await $.wv([$t22, $t23], "DBLookupComboboxEh_Fil_B", C, false)), "KeyValue"))], C)), { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true });
      if ($.truthy($.ne((await $.wv([$t22, $t23], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), "hhh"))) {
        await $.wset([$t22, $t23], "s", $.add($.add("and  a.symb like  '%", (await $.wv([$t22, $t23], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))), "%'"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      if ($.truthy($.ne((await $.wv([$t22, $t23], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false)), "-1"))) {
        await $.wset([$t22, $t23], "s", $.add($.add((await $.wv([$t22, $t23], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), " and a.filial="), (await $.wv([$t22, $t23], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      await $.stmt($.wcall([$t22, $t23], "close", [], C));
      { const $t24 = await $.iset((await $.wv([$t22, $t23], "sql", C, false)), [13], (await $.wv([$t22, $t23], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))); if ($t24 !== undefined) { await $.wset([$t22, $t23], "sql", $t24, C); } }
      await $.stmt($.wcall([$t22, $t23], "open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormTransaction4", "DBLookupComboboxEh_FIL_CCloseUp", async function DBLookupComboboxEh_FIL_CCloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined, "a": '', "b": '', "s": ''};
  await $.fixArgs(L0, ["sender", "accept"]);
  if ($.truthy(($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh_C")), "KeyValue")), "")))) {
    {
      const $t25 = (await $.v(C, "DataModule_bussProc"));
      const $t26 = (await $.wv([$t25], "ODS_AccNO_C", C, false));
      await $.wset([$t25, $t26], "s", "", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.wset([$t25, $t26], "a", (await $.mv((await $.wv([$t25, $t26], "DBLookupComboboxEh_C", C, false)), "KeyValue")), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
      await $.wset([$t25, $t26], "b", (await $.wcall([$t25, $t26], "inttostr", [(await $.mv((await $.wv([$t25, $t26], "DBLookupComboboxEh_Fil_C", C, false)), "KeyValue"))], C)), { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true });
      if ($.truthy($.ne((await $.wv([$t25, $t26], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), "hhh"))) {
        await $.wset([$t25, $t26], "s", $.add($.add("and  a.symb like  '%", (await $.wv([$t25, $t26], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))), "%'"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      if ($.truthy($.ne((await $.wv([$t25, $t26], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false)), "-1"))) {
        await $.wset([$t25, $t26], "s", $.add($.add((await $.wv([$t25, $t26], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), " and a.filial="), (await $.wv([$t25, $t26], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      await $.stmt($.wcall([$t25, $t26], "close", [], C));
      { const $t27 = await $.iset((await $.wv([$t25, $t26], "sql", C, false)), [13], (await $.wv([$t25, $t26], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))); if ($t27 !== undefined) { await $.wset([$t25, $t26], "sql", $t27, C); } }
      await $.stmt($.wcall([$t25, $t26], "open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormTransaction4", "EditAmountClick", async function EditAmountClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditAmount")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction4", "EditAmountKeyPress", async function EditAmountKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", (await $.call(C, "Chr", [8]))])))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction4", "EditAmountKeyUp", async function EditAmountKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined, "deb_rate": 0, "kred_rate": 0, "debitammount": 0, "creditammount": 0, "lammount": 0};
  await $.fixArgs(L0, ["sender", "shift"]);
  {
    const $t28 = (await $.v(C, "DataModule_bussProc"));
    if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(((await $.mv((await $.wv([$t28], "ODS_AccNO_A", C, false)), "active"))), async () => ($.ne((await $.mv((await $.wv([$t28], "ODS_AccNO_A", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t28], "ODS_AccNO_A", C, false)), "FieldByName", ["id"])), "IsNull"))))))), async () => ((await $.mv((await $.wv([$t28], "ODS_AccNO_B", C, false)), "active"))))), async () => ($.ne((await $.mv((await $.wv([$t28], "ODS_AccNO_B", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t28], "ODS_AccNO_B", C, false)), "FieldByName", ["id"])), "IsNull"))))))), async () => ((await $.mv((await $.wv([$t28], "ODS_AccNO_C", C, false)), "active"))))), async () => ($.ne((await $.mv((await $.wv([$t28], "ODS_AccNO_C", C, false)), "RecordCount")), 0)))), async () => ($.not(((await $.mv((await $.mcall((await $.wv([$t28], "ODS_AccNO_C", C, false)), "FieldByName", ["id"])), "IsNull"))))))), async () => ($.gt((await $.mv((await $.wv([$t28], "EditAmount", C, false)), "Value")), 0)))))) {
      await $.mset((await $.wv([$t28], "BtnOK", C, false)), "Enabled", (await $.wv([$t28], "True", C, false)));
    } else {
      await $.mset((await $.wv([$t28], "BtnOK", C, false)), "Enabled", (await $.wv([$t28], "False", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormTransaction4", "Edit_bal_cn1_BKeyPress", async function Edit_bal_cn1_BKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    await $.mcall((await $.v(C, "XFButton1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction4", "Edit_BAL_CN1_CKeyPress", async function Edit_BAL_CN1_CKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    await $.mcall((await $.v(C, "XFButton2")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction4", "Edit_descriptionExit", async function Edit_descriptionExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_description")), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh_description")), "KeyValue", (await $.mv((await $.v(C, "Edit_description")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction4", "Edit_descriptionKeyPress", async function Edit_descriptionKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh_description")), "KeyValue", (await $.mv((await $.v(C, "Edit_description")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction4", "Edit_id_BChange", async function Edit_id_BChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t29 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B"));
    await $.stmt($.wcall([$t29], "close", [], C));
    await $.stmt((await $.wcall([$t29], "SetVariable", ["custtype", " in (0,1,2)"], C)));
    await $.stmt($.wcall([$t29], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction4", "Edit_id_BKeyPress", async function Edit_id_BKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "v_cust_type_id": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t30 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERS_PHYS_FS1"));
      await $.stmt($.wcall([$t30], "close", [], C));
      { const $t31 = await $.iset((await $.wv([$t30], "sql", C, false)), [8], " "); if ($t31 !== undefined) { await $.wset([$t30], "sql", $t31, C); } }
      if ($.truthy($.ne((await $.mv((await $.wv([$t30], "Edit_id_B", C, false)), "Text")), ""))) {
        { const $t32 = await $.iset((await $.wv([$t30], "sql", C, false)), [8], $.add($.add((await $.idx((await $.wv([$t30], "sql", C, false)), [8])), " and c.ID = "), (await $.mv((await $.wv([$t30], "Edit_id_B", C, false)), "Text")))); if ($t32 !== undefined) { await $.wset([$t30], "sql", $t32, C); } }
      }
      await $.stmt($.wcall([$t30], "open", [], C));
      if ($.truthy($.eq((await $.wv([$t30], "RecordCount", C, false)), 0))) {
        await $.stmt((await $.wcall([$t30], "ShowMessage", ["Belə müştəri yoxdu  !"], C)));
        await $.mcall((await $.wv([$t30], "Edit_id_B", C, false)), "Clear", []);
      }
      await $.mset((await $.wv([$t30], "Edit_cust_name_B", C, false)), "Text", (await $.mv((await $.wcall([$t30], "FieldByName", ["cust_name"], C)), "AsString")));
      {
        const $t33 = (await $.mv((await $.wv([$t30], "DataModule_bussProc", C, false)), "ODS_AccNO_B"));
        await $.stmt($.wcall([$t30, $t33], "close", [], C));
        await $.stmt((await $.wcall([$t30, $t33], "SetVariable", ["CustID", (await $.wcall([$t30, $t33], "strtoint", [(await $.mv((await $.wv([$t30, $t33], "Edit_id_B", C, false)), "Text"))], C))], C)));
        await $.stmt($.wcall([$t30, $t33], "open", [], C));
      }
      await $.wset([$t30], "v_cust_type_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t30], "DataModule_bussProc", C, false)), "ODS_CUSTOMERS_PHYS_FS1")), "FieldByName", ["CUST_TYPE"])), "AsInteger")), { get: async () => L0["v_cust_type_id"], set: async (v) => { L0["v_cust_type_id"] = v; }, local: true });
      if ($.truthy($.in_((await $.wv([$t30], "v_cust_type_id", { get: async () => L0["v_cust_type_id"], set: async (v) => { L0["v_cust_type_id"] = v; }, local: true }, false)), [0, 2]))) {
        await $.mset((await $.wv([$t30], "Edit_inn_B", C, false)), "Visible", (await $.wv([$t30], "True", C, false)));
        await $.mset((await $.wv([$t30], "Edit_inn_B", C, false)), "Text", (await $.mv((await $.wcall([$t30], "FieldByName", ["inn"], C)), "AsString")));
        await $.mset((await $.wv([$t30], "Edit_pasp_ser_B", C, false)), "Visible", (await $.wv([$t30], "False", C, false)));
        await $.mset((await $.wv([$t30], "Edit_pasp_num_B", C, false)), "Visible", (await $.wv([$t30], "False", C, false)));
        await $.mset((await $.wv([$t30], "Label_PASPIN_INN_B", C, false)), "Caption", "Vöen");
        await $.mset((await $.wv([$t30], "Edit_inn_fs_B", C, false)), "Visible", (await $.wv([$t30], "false", C, false)));
        await $.mset((await $.wv([$t30], "Label_acc_noA", C, false)), "Visible", (await $.wv([$t30], "false", C, false)));
      } else {
        await $.mset((await $.wv([$t30], "Edit_pasp_ser_B", C, false)), "Visible", (await $.wv([$t30], "True", C, false)));
        await $.mset((await $.wv([$t30], "Edit_pasp_num_B", C, false)), "Visible", (await $.wv([$t30], "True", C, false)));
      }
      if ($.truthy($.eq((await $.wv([$t30], "v_cust_type_id", { get: async () => L0["v_cust_type_id"], set: async (v) => { L0["v_cust_type_id"] = v; }, local: true }, false)), 1))) {
        await $.mset((await $.wv([$t30], "Edit_pasp_ser_B", C, false)), "Visible", (await $.wv([$t30], "True", C, false)));
        await $.mset((await $.wv([$t30], "Edit_pasp_num_B", C, false)), "Visible", (await $.wv([$t30], "True", C, false)));
        await $.mset((await $.wv([$t30], "Edit_pasp_ser_B", C, false)), "Text", (await $.mv((await $.wcall([$t30], "FieldByName", ["passport"], C)), "AsString")));
        await $.mset((await $.wv([$t30], "Edit_pasp_num_B", C, false)), "Text", (await $.mv((await $.wcall([$t30], "FieldByName", ["passp_number"], C)), "AsString")));
        await $.mset((await $.wv([$t30], "Edit_inn_B", C, false)), "Visible", (await $.wv([$t30], "False", C, false)));
        await $.mset((await $.wv([$t30], "Label_PASPIN_INN_B", C, false)), "Caption", "Pasport seriyasi");
        await $.mset((await $.wv([$t30], "Edit_inn_fs_B", C, false)), "Visible", (await $.wv([$t30], "false", C, false)));
        await $.mset((await $.wv([$t30], "Label_acc_noA", C, false)), "Visible", (await $.wv([$t30], "false", C, false)));
      } else {
        if ($.truthy($.eq((await $.wv([$t30], "v_cust_type_id", { get: async () => L0["v_cust_type_id"], set: async (v) => { L0["v_cust_type_id"] = v; }, local: true }, false)), 3))) {
          await $.mset((await $.wv([$t30], "Edit_pasp_ser_B", C, false)), "Visible", (await $.wv([$t30], "True", C, false)));
          await $.mset((await $.wv([$t30], "Edit_pasp_num_B", C, false)), "Visible", (await $.wv([$t30], "True", C, false)));
          await $.mset((await $.wv([$t30], "Edit_pasp_ser_B", C, false)), "Text", (await $.mv((await $.wcall([$t30], "FieldByName", ["passport"], C)), "AsString")));
          await $.mset((await $.wv([$t30], "Edit_pasp_num_B", C, false)), "Text", (await $.mv((await $.wcall([$t30], "FieldByName", ["passp_number"], C)), "AsString")));
          await $.mset((await $.wv([$t30], "Edit_inn_B", C, false)), "Visible", (await $.wv([$t30], "False", C, false)));
          await $.mset((await $.wv([$t30], "Label_PASPIN_INN_B", C, false)), "Caption", "Pasport seriyasi");
          await $.mset((await $.wv([$t30], "Label_acc_noA", C, false)), "Visible", (await $.wv([$t30], "true", C, false)));
          await $.mset((await $.wv([$t30], "Edit_inn_fs_B", C, false)), "Visible", (await $.wv([$t30], "true", C, false)));
          await $.mset((await $.wv([$t30], "Edit_inn_fs_B", C, false)), "Text", (await $.mv((await $.wcall([$t30], "FieldByName", ["inn"], C)), "AsString")));
        } else {
          await $.mset((await $.wv([$t30], "Edit_inn_B", C, false)), "Visible", (await $.wv([$t30], "True", C, false)));
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
      const $t34 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B"));
      if ($.truthy($.eq((await $.wv([$t34], "RecordCount", C, false)), 2))) {
        await $.mset((await $.wv([$t34], "DBCBoxAccNo_B", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t34], "DataModule_bussProc", C, false)), "ODS_AccNO_B")), "FieldByName", ["acc_no"])), "AsString")));
      } else {
        await $.mset((await $.wv([$t34], "DBCBoxAccNo_B", C, false)), "KeyValue", " ");
      }
    }
    { const $t35 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERS_PHYS_FS1")), "FieldByName", ["cust_type"])), "AsInteger"));
      if ($.eq($t35, 0)) {
        await $.mset((await $.v(C, "RadioBu_jur_B")), "Checked", true);
        await $.mset((await $.v(C, "RadioBu_phys_B")), "Enabled", false);
        await $.mset((await $.v(C, "RadioBu_fs_B")), "Enabled", false);
      }
      else if ($.eq($t35, 1)) {
        await $.mset((await $.v(C, "RadioBu_phys_B")), "Checked", true);
        await $.mset((await $.v(C, "RadioBu_jur_B")), "Enabled", false);
        await $.mset((await $.v(C, "RadioBu_fs_B")), "Enabled", false);
      }
      else if ($.eq($t35, 2)) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "RadioBu_fs_B")), "Checked")), false))) {
          await $.mset((await $.v(C, "RadioBu_fs_B")), "Checked", true);
        } else {
          await $.mset((await $.v(C, "RadioBu_fs_B")), "Checked", true);
        }
        await $.mset((await $.v(C, "RadioBu_jur_B")), "Enabled", false);
        await $.mset((await $.v(C, "RadioBu_phys_B")), "Enabled", false);
      }
      else if ($.eq($t35, 3)) {
        await $.mset((await $.v(C, "RadioBu_phys_B")), "Checked", false);
        await $.mset((await $.v(C, "RadioBu_fs_B")), "Checked", false);
        await $.mset((await $.v(C, "RadioBu_jur_B")), "Enabled", false);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction4", "Edit_id_CChange", async function Edit_id_CChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t36 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_C"));
    await $.stmt($.wcall([$t36], "close", [], C));
    await $.stmt((await $.wcall([$t36], "SetVariable", ["custtype", " in (0,1,2)"], C)));
    await $.stmt($.wcall([$t36], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction4", "Edit_id_CKeyPress", async function Edit_id_CKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "v_cust_type_id": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t37 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERS_PHYS_FS1"));
      await $.stmt($.wcall([$t37], "close", [], C));
      { const $t38 = await $.iset((await $.wv([$t37], "sql", C, false)), [8], " "); if ($t38 !== undefined) { await $.wset([$t37], "sql", $t38, C); } }
      if ($.truthy($.ne((await $.mv((await $.wv([$t37], "Edit_id_C", C, false)), "Text")), ""))) {
        { const $t39 = await $.iset((await $.wv([$t37], "sql", C, false)), [8], $.add($.add((await $.idx((await $.wv([$t37], "sql", C, false)), [8])), " and c.ID = "), (await $.mv((await $.wv([$t37], "Edit_id_C", C, false)), "Text")))); if ($t39 !== undefined) { await $.wset([$t37], "sql", $t39, C); } }
      }
      await $.stmt($.wcall([$t37], "open", [], C));
      if ($.truthy($.eq((await $.wv([$t37], "RecordCount", C, false)), 0))) {
        await $.stmt((await $.wcall([$t37], "ShowMessage", ["Belə müştəri yoxdu  !"], C)));
        await $.mcall((await $.wv([$t37], "Edit_id_C", C, false)), "Clear", []);
      }
      await $.mset((await $.wv([$t37], "Edit_cust_name_C", C, false)), "Text", (await $.mv((await $.wcall([$t37], "FieldByName", ["cust_name"], C)), "AsString")));
      {
        const $t40 = (await $.mv((await $.wv([$t37], "DataModule_bussProc", C, false)), "ODS_AccNO_C"));
        await $.stmt($.wcall([$t37, $t40], "close", [], C));
        await $.stmt((await $.wcall([$t37, $t40], "SetVariable", ["CustID", (await $.wcall([$t37, $t40], "strtoint", [(await $.mv((await $.wv([$t37, $t40], "Edit_id_C", C, false)), "Text"))], C))], C)));
        await $.stmt($.wcall([$t37, $t40], "open", [], C));
      }
      await $.wset([$t37], "v_cust_type_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t37], "DataModule_bussProc", C, false)), "ODS_CUSTOMERS_PHYS_FS1")), "FieldByName", ["CUST_TYPE"])), "AsInteger")), { get: async () => L0["v_cust_type_id"], set: async (v) => { L0["v_cust_type_id"] = v; }, local: true });
      if ($.truthy($.in_((await $.wv([$t37], "v_cust_type_id", { get: async () => L0["v_cust_type_id"], set: async (v) => { L0["v_cust_type_id"] = v; }, local: true }, false)), [0, 2]))) {
        await $.mset((await $.wv([$t37], "Edit_inn_C", C, false)), "Visible", (await $.wv([$t37], "True", C, false)));
        await $.mset((await $.wv([$t37], "Edit_inn_C", C, false)), "Text", (await $.mv((await $.wcall([$t37], "FieldByName", ["inn"], C)), "AsString")));
        await $.mset((await $.wv([$t37], "Edit_pasp_ser_C", C, false)), "Visible", (await $.wv([$t37], "False", C, false)));
        await $.mset((await $.wv([$t37], "Edit_pasp_num_C", C, false)), "Visible", (await $.wv([$t37], "False", C, false)));
        await $.mset((await $.wv([$t37], "Label_PASPIN_INN_C", C, false)), "Caption", "Vöen");
        await $.mset((await $.wv([$t37], "Edit_inn_fs_C", C, false)), "Visible", (await $.wv([$t37], "false", C, false)));
        await $.mset((await $.wv([$t37], "Label_acc_no_C", C, false)), "Visible", (await $.wv([$t37], "false", C, false)));
      } else {
        await $.mset((await $.wv([$t37], "Edit_pasp_ser_C", C, false)), "Visible", (await $.wv([$t37], "True", C, false)));
        await $.mset((await $.wv([$t37], "Edit_pasp_num_C", C, false)), "Visible", (await $.wv([$t37], "True", C, false)));
      }
      if ($.truthy($.eq((await $.wv([$t37], "v_cust_type_id", { get: async () => L0["v_cust_type_id"], set: async (v) => { L0["v_cust_type_id"] = v; }, local: true }, false)), 1))) {
        await $.mset((await $.wv([$t37], "Edit_pasp_ser_C", C, false)), "Visible", (await $.wv([$t37], "True", C, false)));
        await $.mset((await $.wv([$t37], "Edit_pasp_num_C", C, false)), "Visible", (await $.wv([$t37], "True", C, false)));
        await $.mset((await $.wv([$t37], "Edit_pasp_ser_C", C, false)), "Text", (await $.mv((await $.wcall([$t37], "FieldByName", ["passport"], C)), "AsString")));
        await $.mset((await $.wv([$t37], "Edit_pasp_num_C", C, false)), "Text", (await $.mv((await $.wcall([$t37], "FieldByName", ["passp_number"], C)), "AsString")));
        await $.mset((await $.wv([$t37], "Edit_inn_C", C, false)), "Visible", (await $.wv([$t37], "False", C, false)));
        await $.mset((await $.wv([$t37], "Label_PASPIN_INN_C", C, false)), "Caption", "Pasport seriyasi");
        await $.mset((await $.wv([$t37], "Edit_inn_fs_C", C, false)), "Visible", (await $.wv([$t37], "false", C, false)));
        await $.mset((await $.wv([$t37], "Label_acc_no_C", C, false)), "Visible", (await $.wv([$t37], "false", C, false)));
      } else {
        if ($.truthy($.eq((await $.wv([$t37], "v_cust_type_id", { get: async () => L0["v_cust_type_id"], set: async (v) => { L0["v_cust_type_id"] = v; }, local: true }, false)), 3))) {
          await $.mset((await $.wv([$t37], "Edit_pasp_ser_C", C, false)), "Visible", (await $.wv([$t37], "True", C, false)));
          await $.mset((await $.wv([$t37], "Edit_pasp_num_C", C, false)), "Visible", (await $.wv([$t37], "True", C, false)));
          await $.mset((await $.wv([$t37], "Edit_pasp_ser_C", C, false)), "Text", (await $.mv((await $.wcall([$t37], "FieldByName", ["passport"], C)), "AsString")));
          await $.mset((await $.wv([$t37], "Edit_pasp_num_C", C, false)), "Text", (await $.mv((await $.wcall([$t37], "FieldByName", ["passp_number"], C)), "AsString")));
          await $.mset((await $.wv([$t37], "Edit_inn_C", C, false)), "Visible", (await $.wv([$t37], "False", C, false)));
          await $.mset((await $.wv([$t37], "Label_PASPIN_INN_C", C, false)), "Caption", "Pasport seriyasi");
          await $.mset((await $.wv([$t37], "Label_acc_no_C", C, false)), "Visible", (await $.wv([$t37], "true", C, false)));
          await $.mset((await $.wv([$t37], "Edit_inn_fs_C", C, false)), "Visible", (await $.wv([$t37], "true", C, false)));
          await $.mset((await $.wv([$t37], "Edit_inn_fs_C", C, false)), "Text", (await $.mv((await $.wcall([$t37], "FieldByName", ["inn"], C)), "AsString")));
        } else {
          await $.mset((await $.wv([$t37], "Edit_inn_C", C, false)), "Visible", (await $.wv([$t37], "True", C, false)));
        }
      }
    }
    if ($.truthy($.le((await $.mv((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_C")), "RecordCount")), 2))) {
      await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_C")), "First", []);
      await $.mset((await $.v(C, "DBLookupComboboxEh_C")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_C")), "FieldByName", ["symb"])), "AsString")));
    } else {
      await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_C")), "Last", []);
      await $.mset((await $.v(C, "DBLookupComboboxEh_C")), "KeyValue", " ");
    }
    {
      const $t41 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_C"));
      if ($.truthy($.eq((await $.wv([$t41], "RecordCount", C, false)), 2))) {
        await $.mset((await $.wv([$t41], "DBCBoxAccNo_C", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t41], "DataModule_bussProc", C, false)), "ODS_AccNO_C")), "FieldByName", ["acc_no"])), "AsString")));
      } else {
        await $.mset((await $.wv([$t41], "DBCBoxAccNo_C", C, false)), "KeyValue", " ");
      }
    }
    { const $t42 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERS_PHYS_FS1")), "FieldByName", ["cust_type"])), "AsInteger"));
      if ($.eq($t42, 0)) {
        await $.mset((await $.v(C, "RadioBu_jur_C")), "Checked", true);
        await $.mset((await $.v(C, "RadioBu_phys_C")), "Enabled", false);
        await $.mset((await $.v(C, "RadioBu_fs_C")), "Enabled", false);
      }
      else if ($.eq($t42, 1)) {
        await $.mset((await $.v(C, "RadioBu_phys_C")), "Checked", true);
        await $.mset((await $.v(C, "RadioBu_jur_C")), "Enabled", false);
        await $.mset((await $.v(C, "RadioBu_fs_C")), "Enabled", false);
      }
      else if ($.eq($t42, 2)) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "RadioBu_fs_C")), "Checked")), false))) {
          await $.mset((await $.v(C, "RadioBu_fs_C")), "Checked", true);
        } else {
          await $.mset((await $.v(C, "RadioBu_fs_C")), "Checked", true);
        }
        await $.mset((await $.v(C, "RadioBu_jur_C")), "Enabled", false);
        await $.mset((await $.v(C, "RadioBu_phys_C")), "Enabled", false);
      }
      else if ($.eq($t42, 3)) {
        await $.mset((await $.v(C, "RadioBu_phys_C")), "Checked", false);
        await $.mset((await $.v(C, "RadioBu_fs_C")), "Checked", false);
        await $.mset((await $.v(C, "RadioBu_jur_C")), "Enabled", false);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction4", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t43 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B"));
    await $.stmt($.wcall([$t43], "close", [], C));
    await $.stmt((await $.wcall([$t43], "SetVariable", ["CustID", (-(1))], C)));
    await $.stmt($.wcall([$t43], "open", [], C));
  }
  {
    const $t44 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_C"));
    await $.stmt($.wcall([$t44], "close", [], C));
    await $.stmt((await $.wcall([$t44], "SetVariable", ["CustID", (-(1))], C)));
    await $.stmt($.wcall([$t44], "open", [], C));
  }
  await $.mset((await $.v(C, "Label_acc_noA")), "Visible", false);
  await $.mset((await $.v(C, "Edit_inn_fs_B")), "visible", false);
  await $.mcall((await $.v(C, "Edit_bal_cn1_B")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_AccName_B")), "Clear", []);
  await $.mset((await $.v(C, "DBCBoxAccNo_B")), "KeyValue", "");
  await $.mset((await $.v(C, "DBLookupComboboxEh_B1")), "KeyValue", "");
  await $.mset((await $.v(C, "DBLookupComboboxEh_fil_B")), "KeyValue", "");
  await $.mcall((await $.v(C, "Edit_id_B")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_cust_name_B")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_inn_B")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_pasp_ser_B")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_pasp_num_B")), "Clear", []);
  await $.mset((await $.v(C, "Label_acc_noA")), "Visible", false);
  await $.mset((await $.v(C, "Edit_inn_fs_B")), "visible", false);
  await $.mcall((await $.v(C, "Edit_bal_cn1_B")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_AccName_B")), "Clear", []);
  await $.mset((await $.v(C, "DBCBoxAccNo_B")), "KeyValue", "");
  await $.mset((await $.v(C, "DBLookupComboboxEh_C")), "KeyValue", "");
  await $.mset((await $.v(C, "DBLookupComboboxEh_fil_C")), "KeyValue", "");
  await $.mcall((await $.v(C, "Edit_id_C")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_cust_name_C")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_inn_C")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_pasp_ser_C")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_pasp_num_C")), "Clear", []);
  await $.mcall((await $.v(C, "EditAmount")), "Clear", []);
  await $.mset((await $.v(C, "DBLookupComboBox_konvertasiya")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "RadioBu_phys_B")), "Enabled", true);
  await $.mset((await $.v(C, "RadioBu_jur_B")), "Enabled", true);
  await $.mset((await $.v(C, "RadioBu_fs_B")), "Enabled", true);
  await $.mset((await $.v(C, "RadioBu_phys_C")), "Enabled", true);
  await $.mset((await $.v(C, "RadioBu_jur_C")), "Enabled", true);
  await $.mset((await $.v(C, "RadioBu_fs_C")), "Enabled", true);
  await $.mcall((await $.v(C, "Edit_description")), "Clear", []);
  await $.mset((await $.v(C, "DBLookupComboboxEh_description")), "KeyValue", (-(1)));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormTransaction4", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ConvertationSymbols")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_contrs3")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERS_PHYS_FS1")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction4", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormTransaction4", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "spos": 0, "a": '', "s": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["spos"] = (await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "SBOP")), "CallIntegerFunction", ["get_acc_no_sub", []]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A")), "SetVariable", ["ACCSRCHPOS", L0["spos"]])));
  L0["spos"] = (await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "SBOP")), "CallIntegerFunction", ["get_acc_no_sub", []]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "SetVariable", ["ACCSRCHPOS", L0["spos"]])));
  L0["spos"] = (await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "SBOP")), "CallIntegerFunction", ["get_acc_no_sub", []]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_C")), "SetVariable", ["ACCSRCHPOS", L0["spos"]])));
  await $.mset((await $.v(C, "DBLookupCEh_contrsName")), "KeyValue", 1);
  {
    const $t45 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_A"));
    if ($.truthy($.eq((await $.wv([$t45], "RecordCount", C, false)), 2))) {
      await $.mset((await $.wv([$t45], "DBCBoxAccNo_A", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t45], "DataModule_bussProc", C, false)), "ODS_AccNO_A")), "FieldByName", ["acc_no"])), "AsString")));
    } else {
      await $.mset((await $.wv([$t45], "DBCBoxAccNo_A", C, false)), "KeyValue", "");
    }
  }
  await $.mset((await $.v(C, "Edit_id_A")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["id"])), "asstring")));
  await $.mset((await $.v(C, "Edit_cust_name_A")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["cust_name"])), "asstring")));
  if ($.truthy($.eq(1, 1))) {
    await $.mset((await $.v(C, "Edit_inn_A")), "Visible", true);
    await $.mset((await $.v(C, "Edit_inn_A")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["inn"])), "asstring")));
    await $.mset((await $.v(C, "Edit_pasp_ser_A")), "Visible", false);
    await $.mset((await $.v(C, "Edit_pasp_num_A")), "Visible", false);
    await $.mset((await $.v(C, "Label_PASPIN_INN_A")), "Caption", "Vöen");
  } else {
    await $.mset((await $.v(C, "Edit_inn_A")), "Visible", true);
    await $.mset((await $.v(C, "Edit_pasp_num_A")), "Visible", true);
    await $.mset((await $.v(C, "Edit_inn_A")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["passport"])), "asstring")));
    await $.mset((await $.v(C, "Edit_pasp_num_A")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["passp_number"])), "asstring")));
    await $.mset((await $.v(C, "Edit_inn_A")), "Visible", false);
    await $.mset((await $.v(C, "Label_PASPIN_INN_A")), "Caption", "Pasport seriyasi");
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 3))) {
    if ($.truthy($.eq(1, 1))) {
      await $.mset((await $.v(C, "Edit_inn_A")), "Visible", true);
      await $.mset((await $.v(C, "Edit_inn_A")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["inn"])), "AsString")));
      await $.mset((await $.v(C, "Edit_pasp_ser_A")), "Visible", false);
      await $.mset((await $.v(C, "Edit_pasp_num_A")), "Visible", false);
      await $.mset((await $.v(C, "Label_PASPIN_INN_A")), "Caption", "VÖEN");
    } else {
      await $.mset((await $.v(C, "Edit_pasp_ser_A")), "Visible", true);
      await $.mset((await $.v(C, "Edit_pasp_num_A")), "Visible", true);
      await $.mset((await $.v(C, "Edit_pasp_ser_A")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["passport"])), "AsString")));
      await $.mset((await $.v(C, "Edit_pasp_num_A")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["passp_number"])), "AsString")));
      await $.mset((await $.v(C, "Edit_inn_A")), "Visible", false);
      await $.mset((await $.v(C, "Label_PASPIN_INN_A")), "Caption", "Pasport seriyasi");
    }
  }
  await $.mset((await $.v(C, "DBLookupComboboxEh_A1")), "KeyValue", "hhh");
  await $.mset((await $.v(C, "DBLookupComboboxEh_fil_A")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh_B1")), "KeyValue", "hhh");
  await $.mset((await $.v(C, "DBLookupComboboxEh_Fil_B")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh_c")), "KeyValue", "hhh");
  await $.mset((await $.v(C, "DBLookupComboboxEh_Fil_c")), "KeyValue", (-(1)));
  if ($.truthy(($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh_A1")), "KeyValue")), "")))) {
    {
      const $t46 = (await $.v(C, "DataModule_bussProc"));
      const $t47 = (await $.wv([$t46], "ODS_AccNO_A", C, false));
      await $.wset([$t46, $t47], "s", "", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.wset([$t46, $t47], "a", (await $.mv((await $.wv([$t46, $t47], "DBLookupComboboxEh_A1", C, false)), "KeyValue")), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
      if ($.truthy($.ne((await $.wv([$t46, $t47], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), "hhh"))) {
        await $.wset([$t46, $t47], "s", $.add($.add("and  a.symb like  '%", (await $.wv([$t46, $t47], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))), "%'"), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      }
      await $.stmt($.wcall([$t46, $t47], "close", [], C));
      { const $t48 = await $.iset((await $.wv([$t46, $t47], "sql", C, false)), [13], (await $.wv([$t46, $t47], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))); if ($t48 !== undefined) { await $.wset([$t46, $t47], "sql", $t48, C); } }
      await $.stmt($.wcall([$t46, $t47], "open", [], C));
      if ($.truthy($.eq((await $.wv([$t46, $t47], "RecordCount", C, false)), 1))) {
        await $.mset((await $.wv([$t46, $t47], "DBCBoxAccNo_A", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t46, $t47], "DataModule_bussProc", C, false)), "ODS_AccNO_A")), "FieldByName", ["acc_no"])), "AsString")));
      } else {
        await $.mset((await $.wv([$t46, $t47], "DBCBoxAccNo_A", C, false)), "KeyValue", "");
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction4", "XFBitBtn4Click", async function XFBitBtn4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction4", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "cust_elaqe_Transaction", 3);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FormCustomers"))]))))) {
    await $.set(C, "FormCustomers", (await $.mcall((await $.v(C, "TFormCustomers")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "FormCustomers")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTransaction4", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "cust_elaqe_Transaction", 4);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FormCustomers"))]))))) {
    await $.set(C, "FormCustomers", (await $.mcall((await $.v(C, "TFormCustomers")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "FormCustomers")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
