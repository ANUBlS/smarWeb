// Generated from PayUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PayUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "Buttons", "Mask", "DBCtrlsEh", "DBLookupEh", "CMExcelExport", "DBCtrls", "OleServer", "Excelxp", "db", "DBGridEh", "AEDataModuleImpl", "AEMainFormImpl", "ComObj", "PayRepUnit"]);
  const C = [U];
  U.defClass("TPayForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "ch_val": {"name": "ch_val", "type": "TCheckBox"}, "lup_val": {"name": "lup_val", "type": "TDBLookupComboboxEh"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "ch_res": {"name": "ch_res", "type": "TCheckBox"}, "lup_res": {"name": "lup_res", "type": "TDBLookupComboboxEh"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "ch_borc": {"name": "ch_borc", "type": "TCheckBox"}, "lup_borc": {"name": "lup_borc", "type": "TDBLookupComboboxEh"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "ch_ple": {"name": "ch_ple", "type": "TCheckBox"}, "lup_ple": {"name": "lup_ple", "type": "TDBLookupComboboxEh"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "lup_fil": {"name": "lup_fil", "type": "TDBLookupComboboxEh"}, "ch_fil": {"name": "ch_fil", "type": "TCheckBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "lup_dres": {"name": "lup_dres", "type": "TDBLookupComboboxEh"}, "ch_dres": {"name": "ch_dres", "type": "TCheckBox"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "ch_btip": {"name": "ch_btip", "type": "TCheckBox"}, "lup_btip": {"name": "lup_btip", "type": "TDBLookupComboboxEh"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "ch_mus": {"name": "ch_mus", "type": "TCheckBox"}, "dblceh_mus": {"name": "DBLCEh_mus", "type": "TDBLookupComboboxEh"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "lup_iqr": {"name": "lup_iqr", "type": "TDBLookupComboboxEh"}, "ch_iqr": {"name": "ch_iqr", "type": "TCheckBox"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "ch_knov": {"name": "ch_knov", "type": "TCheckBox"}, "lup_knov": {"name": "lup_knov", "type": "TDBLookupComboboxEh"}, "bitbtn_e": {"name": "BitBtn_E", "type": "TBitBtn"}, "bitbtn_r": {"name": "BitBtn_R", "type": "TBitBtn"}, "groupbox12": {"name": "GroupBox12", "type": "TGroupBox"}, "ch_muq": {"name": "ch_muq", "type": "TCheckBox"}, "lup_muq": {"name": "lup_muq", "type": "TDBLookupComboboxEh"}, "groupbox13": {"name": "GroupBox13", "type": "TGroupBox"}, "ch_date": {"name": "ch_date", "type": "TCheckBox"}, "datetpic": {"name": "DateTPic", "type": "TDateTimePicker"}, "groupbox14": {"name": "GroupBox14", "type": "TGroupBox"}, "ch_hes": {"name": "ch_hes", "type": "TCheckBox"}, "lup_hes": {"name": "lup_hes", "type": "TDBLookupComboboxEh"}, "groupbox15": {"name": "GroupBox15", "type": "TGroupBox"}, "ch_musid": {"name": "ch_musid", "type": "TCheckBox"}, "lup_musid": {"name": "lup_musid", "type": "TDBLookupComboboxEh"}, "bitbtn_exit": {"name": "BitBtn_Exit", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("PayDate", 0, "TDateTime");
    U.var_("PayForm", null, "TPayForm");
    U.var_("Exl", null, "Variant");
    U.var_("Sheet", null, "Variant");
  });
  U.func("DestroySheet", async function DestroySheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Sheet"))])));
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Exl"))])));
  } catch ($t1) {
    $.rethrowControl($t1);
    $.handled($t1);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ShowSheet", async function ShowSheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.mset((await $.v(C, "Exl")), "Visible", true);
  } catch ($t2) {
    $.rethrowControl($t2);
    $.handled($t2);
    await $.stmt($.call(C, "DestroySheet", []));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("CreateSheet", async function CreateSheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.set(C, "Exl", (await $.call(C, "CreateOleObject", ["Excel.Application"])));
    await $.mcall((await $.mv((await $.v(C, "Exl")), "WorkBooks")), "add", []);
    await $.set(C, "Sheet", (await $.idx((await $.mv((await $.mv((await $.mv((await $.v(C, "Exl")), "Application")), "Worksheets")), "Item")), [1])));
  } catch ($t3) {
    $.rethrowControl($t3);
    $.handled($t3);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPayForm", "BitBtn_EClick", async function BitBtn_EClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "ms": '', "mu": '', "h": ''};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
    if ($.truthy($.eq((await $.mv((await $.v(C, "ch_date")), "Checked")), true))) {
      { const $t4 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [20], $.add($.add("and ps.paymentdate= '", (await $.call(C, "FormatDateTime", ["dd-MMM-yyyy", (await $.mv((await $.v(C, "DateTPic")), "Date"))]))), "'")); if ($t4 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t4); } }
    } else {
      { const $t5 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [20], " "); if ($t5 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t5); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_mus")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "DBLCEh_mus")), "Text")), "")))))) {
      { const $t6 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [21], $.add($.add("and b.name= '", (await $.mv((await $.v(C, "DBLCEh_mus")), "value"))), "'")); if ($t6 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t6); } }
    } else {
      { const $t7 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [21], " "); if ($t7 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t7); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_muq")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "lup_muq")), "Text")), "")))))) {
      { const $t8 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [22], $.add($.add("and p.numberofcredit= '", (await $.mv((await $.v(C, "lup_muq")), "value"))), "'")); if ($t8 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t8); } }
    } else {
      { const $t9 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [22], " "); if ($t9 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t9); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_hes")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "lup_hes")), "Text")), "")))))) {
      { const $t10 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [23], $.add($.add("and cm_common.AccountNumber_Get(a.contractaccid)='", (await $.mv((await $.v(C, "lup_hes")), "value"))), "'")); if ($t10 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t10); } }
    } else {
      { const $t11 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [23], " "); if ($t11 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t11); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_musid")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "lup_musid")), "Text")), "")))))) {
      { const $t12 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [24], $.add($.add("and p.boorowerid= '", (await $.call(C, "Inttostr", [(await $.mv((await $.v(C, "lup_musid")), "keyvalue"))]))), "'")); if ($t12 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t12); } }
    } else {
      { const $t13 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [24], " "); if ($t13 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t13); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_borc")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "lup_borc")), "keyValue")), (-(1)))))))) {
      { const $t14 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [25], $.add($.add("and p.personaltype= '", (await $.call(C, "Inttostr", [(await $.mv((await $.v(C, "lup_borc")), "keyValue"))]))), "'")); if ($t14 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t14); } }
    } else {
      { const $t15 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [25], " "); if ($t15 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t15); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_val")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "lup_val")), "keyValue")), (-(1)))))))) {
      { const $t16 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [26], $.add($.add("and p.currency= '", (await $.call(C, "Inttostr", [(await $.mv((await $.v(C, "lup_val")), "keyValue"))]))), "'")); if ($t16 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t16); } }
    } else {
      { const $t17 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [26], " "); if ($t17 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t17); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_fil")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "lup_fil")), "keyValue")), (-(1)))))))) {
      { const $t18 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [27], $.add($.add("and p.branchid= '", (await $.call(C, "Inttostr", [(await $.mv((await $.v(C, "lup_fil")), "keyValue"))]))), "'")); if ($t18 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t18); } }
    } else {
      { const $t19 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [27], " "); if ($t19 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t19); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_knov")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "lup_knov")), "keyValue")), (-(1)))))))) {
      { const $t20 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [28], $.add($.add("and p.credittype= '", (await $.call(C, "Inttostr", [(await $.mv((await $.v(C, "lup_knov")), "keyValue"))]))), "'")); if ($t20 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t20); } }
    } else {
      { const $t21 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [28], " "); if ($t21 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t21); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_btip")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "lup_btip")), "keyValue")), (-(1)))))))) {
      { const $t22 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [29], $.add($.add("and p.CUSTOMERTYPE= '", (await $.call(C, "Inttostr", [(await $.mv((await $.v(C, "lup_btip")), "keyValue"))]))), "'")); if ($t22 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t22); } }
    } else {
      { const $t23 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [29], " "); if ($t23 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t23); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_iqr")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "lup_iqr")), "keyValue")), (-(1)))))))) {
      { const $t24 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [30], $.add($.add("and p.USRGROUP= '", (await $.call(C, "Inttostr", [(await $.mv((await $.v(C, "lup_iqr")), "keyValue"))]))), "'")); if ($t24 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t24); } }
    } else {
      { const $t25 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [30], " "); if ($t25 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t25); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_res")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "lup_res")), "keyValue")), (-(1)))))))) {
      { const $t26 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [31], $.add($.add("and cm_ak_reports.get_reserves(p.id)= '", (await $.call(C, "Inttostr", [(await $.mv((await $.v(C, "lup_res")), "keyValue"))]))), "'")); if ($t26 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t26); } }
    } else {
      { const $t27 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [31], " "); if ($t27 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t27); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_dres")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "lup_dres")), "keyValue")), (-(1)))))))) {
      { const $t28 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [32], $.add($.add("and cm_ak_reports.get_reserves(p.id)= '", (await $.call(C, "Inttostr", [(await $.mv((await $.v(C, "lup_dres")), "keyValue"))]))), "'")); if ($t28 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t28); } }
    } else {
      { const $t29 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [32], " "); if ($t29 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t29); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_ple")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "lup_ple")), "keyValue")), (-(1)))))))) {
      { const $t30 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [33], $.add($.add("and cm_ak_reports.get_pledge(p.id)= '", (await $.call(C, "Inttostr", [(await $.mv((await $.v(C, "lup_ple")), "keyValue"))]))), "'")); if ($t30 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t30); } }
    } else {
      { const $t31 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [33], " "); if ($t31 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t31); } }
    }
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Active")), true))) {
      await $.mcall((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Close", []);
    }
    await $.mcall((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Open", []);
    await $.stmt($.call(C, "CreateSheet", []));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["A1:A60000"])), "ColumnWidth", 3);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["B1:B60000"])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["C1:C60000"])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["D1:D60000"])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["E1:E60000"])), "ColumnWidth", 15);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["F1:F60000"])), "ColumnWidth", 18);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["G1:G60000"])), "ColumnWidth", 21);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["H1:H60000"])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["I1:I60000"])), "ColumnWidth", 26);
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), ["A2:I2"])), "Select", []);
    await $.mset((await $.mv((await $.mv((await $.v(C, "Exl")), "Selection")), "Font")), "Name", "Arial AzLat");
    await $.mset((await $.mv((await $.mv((await $.v(C, "Exl")), "Selection")), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.mv((await $.mv((await $.v(C, "Exl")), "Selection")), "Font")), "Size", 11);
    { const $t32 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 2], "Müştərinin adı"); if ($t32 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t32); } }
    { const $t33 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 3], "Müqavilənin nömrəsi"); if ($t33 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t33); } }
    { const $t34 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 4], "Hesab"); if ($t34 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t34); } }
    { const $t35 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5], "Ödəyəcəyi tarix"); if ($t35 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t35); } }
    { const $t36 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 6], "Ödəyəcəyi məbləğ"); if ($t36 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t36); } }
    { const $t37 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 7], "Ödənmiş əsas məbləğ"); if ($t37 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t37); } }
    { const $t38 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 8], "Ödənmiş faiz məbləği"); if ($t38 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t38); } }
    { const $t39 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 9], "Ay ərzində ödənmiş məbləği"); if ($t39 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t39); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["B2:I2"])), "Borders")), "Color", (await $.v(C, "clRed")));
    L0["ms"] = " ";
    L0["mu"] = " ";
    L0["h"] = " ";
    { const $t40 = $.add((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "RecordCount")), 2);
      L0["i"] = 3;
      let $t41 = true;
      for (;;) {
        if (!$t41) { L0["i"] = $.succ(L0["i"], 1); }
        $t41 = false;
        if (!($.ord(L0["i"]) <= $.ord($t40))) break;
        if ($.truthy($.ne(L0["ms"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "FieldByName", ["NAME"])), "AsString"))))) {
          { const $t42 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [L0["i"], 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "FieldByName", ["NAME"])), "AsString"))); if ($t42 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t42); } }
        }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [L0["i"], 2])), "Font")), "Name", "Arial AzLat");
        if ($.truthy($.ne(L0["mu"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "FieldByName", ["NUMBEROFCREDIT"])), "AsString"))))) {
          { const $t43 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [L0["i"], 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "FieldByName", ["NUMBEROFCREDIT"])), "AsString"))); if ($t43 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t43); } }
        }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [L0["i"], 3])), "Font")), "Name", "Arial AzLat");
        if ($.truthy($.ne(L0["h"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "FieldByName", ["ACC_NUMBER"])), "AsString"))))) {
          { const $t44 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [L0["i"], 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "FieldByName", ["ACC_NUMBER"])), "AsString"))); if ($t44 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t44); } }
        }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [L0["i"], 4])), "Font")), "Name", "Arial AzLat");
        { const $t45 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [L0["i"], 5], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "FieldByName", ["PAYMENTDATE"])), "AsString"))); if ($t45 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t45); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [L0["i"], 5])), "Font")), "Name", "Arial AzLat");
        { const $t46 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [L0["i"], 6], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "FieldByName", ["PRINCIPAL"])), "AsInteger"))); if ($t46 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t46); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [L0["i"], 6])), "Font")), "Name", "Arial AzLat");
        { const $t47 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [L0["i"], 7], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "FieldByName", ["PAYMENTAMOUNT"])), "AsInteger"))); if ($t47 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t47); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [L0["i"], 7])), "Font")), "Name", "Arial AzLat");
        { const $t48 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [L0["i"], 8], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "FieldByName", ["PAYEDINTAMT"])), "AsInteger"))); if ($t48 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t48); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [L0["i"], 8])), "Font")), "Name", "Arial AzLat");
        { const $t49 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [L0["i"], 9], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "FieldByName", ["MOUNTHPAY"])), "AsInteger"))); if ($t49 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t49); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [L0["i"], 9])), "Font")), "Name", "Arial AzLat");
        L0["ms"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "FieldByName", ["NAME"])), "AsString"));
        L0["mu"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "FieldByName", ["NUMBEROFCREDIT"])), "AsString"));
        L0["h"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "FieldByName", ["ACC_NUMBER"])), "AsString"));
        await $.mcall((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Next", []);
        await $.tick();
      }
    }
  } finally {
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), ["A1:A1"])), "Select", []);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.stmt($.call(C, "ShowSheet", []));
  }
  await $.stmt($.call(C, "DestroySheet", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "lup_borc")), "keyvalue", (-(1)));
  {
    const $t50 = (await $.wobj(C, "DataModAE"));
    if ($.truthy($.eq((await $.mv((await $.wv([$t50], "BoorDSet", C, false)), "Active")), (await $.wv([$t50], "true", C, false))))) {
      await $.mcall((await $.wv([$t50], "BoorDSet", C, false)), "Close", []);
    }
    await $.mcall((await $.wv([$t50], "BoorDSet", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t50], "AvalDSet", C, false)), "Active")), (await $.wv([$t50], "true", C, false))))) {
      await $.mcall((await $.wv([$t50], "AvalDSet", C, false)), "Close", []);
    }
    await $.mcall((await $.wv([$t50], "AvalDSet", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t50], "FilialDSet", C, false)), "Active")), (await $.wv([$t50], "true", C, false))))) {
      await $.mcall((await $.wv([$t50], "FilialDSet", C, false)), "Close", []);
    }
    await $.mcall((await $.wv([$t50], "FilialDSet", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t50], "PortDSet", C, false)), "Active")), (await $.wv([$t50], "true", C, false))))) {
      await $.mcall((await $.wv([$t50], "PortDSet", C, false)), "Close", []);
    }
    await $.mcall((await $.wv([$t50], "PortDSet", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t50], "PReserves", C, false)), "Active")), (await $.wv([$t50], "true", C, false))))) {
      await $.mcall((await $.wv([$t50], "PReserves", C, false)), "Close", []);
    }
    await $.mcall((await $.wv([$t50], "PReserves", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t50], "DateDSet", C, false)), "Active")), (await $.wv([$t50], "true", C, false))))) {
      await $.mcall((await $.wv([$t50], "DateDSet", C, false)), "Close", []);
    }
    await $.mcall((await $.wv([$t50], "DateDSet", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t50], "Persons", C, false)), "Active")), (await $.wv([$t50], "true", C, false))))) {
      await $.mcall((await $.wv([$t50], "Persons", C, false)), "Close", []);
    }
    await $.mcall((await $.wv([$t50], "Persons", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t50], "Pledges", C, false)), "Active")), (await $.wv([$t50], "true", C, false))))) {
      await $.mcall((await $.wv([$t50], "Pledges", C, false)), "Close", []);
    }
    await $.mcall((await $.wv([$t50], "Pledges", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t50], "SReserves", C, false)), "Active")), (await $.wv([$t50], "true", C, false))))) {
      await $.mcall((await $.wv([$t50], "SReserves", C, false)), "Close", []);
    }
    await $.mcall((await $.wv([$t50], "SReserves", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t50], "Categories", C, false)), "Active")), (await $.wv([$t50], "true", C, false))))) {
      await $.mcall((await $.wv([$t50], "Categories", C, false)), "Close", []);
    }
    await $.mcall((await $.wv([$t50], "Categories", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t50], "UserGroups", C, false)), "Active")), (await $.wv([$t50], "true", C, false))))) {
      await $.mcall((await $.wv([$t50], "UserGroups", C, false)), "Close", []);
    }
    await $.mcall((await $.wv([$t50], "UserGroups", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t50], "CreditTypes", C, false)), "Active")), (await $.wv([$t50], "true", C, false))))) {
      await $.mcall((await $.wv([$t50], "CreditTypes", C, false)), "Close", []);
    }
    await $.mcall((await $.wv([$t50], "CreditTypes", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t50], "AccDSet", C, false)), "Active")), (await $.wv([$t50], "true", C, false))))) {
      await $.mcall((await $.wv([$t50], "AccDSet", C, false)), "Close", []);
    }
    await $.mcall((await $.wv([$t50], "AccDSet", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t50], "MusIdDSet", C, false)), "Active")), (await $.wv([$t50], "true", C, false))))) {
      await $.mcall((await $.wv([$t50], "MusIdDSet", C, false)), "Close", []);
    }
    await $.mcall((await $.wv([$t50], "MusIdDSet", C, false)), "Open", []);
    await $.wset([$t50], "PayRepForm", (await $.mcall((await $.wv([$t50], "TPayRepForm", C, false)), "Create", [Self])), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayForm", "BitBtn_ExitClick", async function BitBtn_ExitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayForm", "BitBtn_RClick", async function BitBtn_RClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    if ($.truthy($.eq((await $.mv((await $.v(C, "ch_date")), "Checked")), true))) {
      { const $t51 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [20], $.add($.add("and ps.paymentdate= '", (await $.call(C, "FormatDateTime", ["dd-MMM-yyyy", (await $.mv((await $.v(C, "DateTPic")), "Date"))]))), "'")); if ($t51 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t51); } }
    } else {
      { const $t52 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [20], " "); if ($t52 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t52); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_mus")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "DBLCEh_mus")), "Text")), "")))))) {
      { const $t53 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [21], $.add($.add("and b.name= '", (await $.mv((await $.v(C, "DBLCEh_mus")), "value"))), "'")); if ($t53 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t53); } }
    } else {
      { const $t54 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [21], " "); if ($t54 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t54); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_muq")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "lup_muq")), "Text")), "")))))) {
      { const $t55 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [22], $.add($.add("and p.numberofcredit= '", (await $.mv((await $.v(C, "lup_muq")), "value"))), "'")); if ($t55 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t55); } }
    } else {
      { const $t56 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [22], " "); if ($t56 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t56); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_hes")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "lup_hes")), "Text")), "")))))) {
      { const $t57 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [23], $.add($.add("and cm_common.AccountNumber_Get(a.contractaccid)='", (await $.mv((await $.v(C, "lup_hes")), "value"))), "'")); if ($t57 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t57); } }
    } else {
      { const $t58 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [23], " "); if ($t58 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t58); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_musid")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "lup_musid")), "Text")), "")))))) {
      { const $t59 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [24], $.add($.add("and p.boorowerid= '", (await $.call(C, "Inttostr", [(await $.mv((await $.v(C, "lup_musid")), "keyvalue"))]))), "'")); if ($t59 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t59); } }
    } else {
      { const $t60 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [24], " "); if ($t60 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t60); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_borc")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "lup_borc")), "keyValue")), (-(1)))))))) {
      { const $t61 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [25], $.add($.add("and p.personaltype= '", (await $.call(C, "Inttostr", [(await $.mv((await $.v(C, "lup_borc")), "keyValue"))]))), "'")); if ($t61 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t61); } }
    } else {
      { const $t62 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [25], " "); if ($t62 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t62); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_val")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "lup_val")), "keyValue")), (-(1)))))))) {
      { const $t63 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [26], $.add($.add("and p.currency= '", (await $.call(C, "Inttostr", [(await $.mv((await $.v(C, "lup_val")), "keyValue"))]))), "'")); if ($t63 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t63); } }
    } else {
      { const $t64 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [26], " "); if ($t64 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t64); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_fil")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "lup_fil")), "keyValue")), (-(1)))))))) {
      { const $t65 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [27], $.add($.add("and p.branchid= '", (await $.call(C, "Inttostr", [(await $.mv((await $.v(C, "lup_fil")), "keyValue"))]))), "'")); if ($t65 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t65); } }
    } else {
      { const $t66 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [27], " "); if ($t66 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t66); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_knov")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "lup_knov")), "keyValue")), (-(1)))))))) {
      { const $t67 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [28], $.add($.add("and p.credittype= '", (await $.call(C, "Inttostr", [(await $.mv((await $.v(C, "lup_knov")), "keyValue"))]))), "'")); if ($t67 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t67); } }
    } else {
      { const $t68 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [28], " "); if ($t68 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t68); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_btip")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "lup_btip")), "keyValue")), (-(1)))))))) {
      { const $t69 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [29], $.add($.add("and p.CUSTOMERTYPE= '", (await $.call(C, "Inttostr", [(await $.mv((await $.v(C, "lup_btip")), "keyValue"))]))), "'")); if ($t69 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t69); } }
    } else {
      { const $t70 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [29], " "); if ($t70 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t70); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_iqr")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "lup_iqr")), "keyValue")), (-(1)))))))) {
      { const $t71 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [30], $.add($.add("and p.USRGROUP= '", (await $.call(C, "Inttostr", [(await $.mv((await $.v(C, "lup_iqr")), "keyValue"))]))), "'")); if ($t71 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t71); } }
    } else {
      { const $t72 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [30], " "); if ($t72 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t72); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_res")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "lup_res")), "keyValue")), (-(1)))))))) {
      { const $t73 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [31], $.add($.add("and cm_ak_reports.get_reserves(p.id)= '", (await $.call(C, "Inttostr", [(await $.mv((await $.v(C, "lup_res")), "keyValue"))]))), "'")); if ($t73 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t73); } }
    } else {
      { const $t74 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [31], " "); if ($t74 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t74); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_dres")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "lup_dres")), "keyValue")), (-(1)))))))) {
      { const $t75 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [32], $.add($.add("and cm_ak_reports.get_reserves(p.id)= '", (await $.call(C, "Inttostr", [(await $.mv((await $.v(C, "lup_dres")), "keyValue"))]))), "'")); if ($t75 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t75); } }
    } else {
      { const $t76 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [32], " "); if ($t76 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t76); } }
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "ch_ple")), "Checked")), true)), async () => ($.ne((await $.mv((await $.v(C, "lup_ple")), "keyValue")), (-(1)))))))) {
      { const $t77 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [33], $.add($.add("and cm_ak_reports.get_pledge(p.id)= '", (await $.call(C, "Inttostr", [(await $.mv((await $.v(C, "lup_ple")), "keyValue"))]))), "'")); if ($t77 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t77); } }
    } else {
      { const $t78 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql")), [33], " "); if ($t78 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Sql", $t78); } }
    }
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Active")), true))) {
      await $.mcall((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Close", []);
    }
    await $.mcall((await $.mv((await $.v(C, "DataModAE")), "PaymentData")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "PayRepForm")), "PayQRep")), "Preview", []);
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
