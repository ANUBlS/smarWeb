// Generated from UnitAdd_Edit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitAdd_Edit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "XFSCtrls", "StdCtrls", "Mask", "DBCtrls", "DBCtrlsEh", "Gauges", "DB", "Buttons", "IniFiles", "UnitAdifData"]);
  const C = [U];
  $.defRecord("tbankinfo", {"bankname": () => '', "bankid": () => ''});
  U.defClass("TFormCust_File", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "editfile": {"name": "EditFile", "type": "TEdit"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "gauge_cust": {"name": "Gauge_cust", "type": "TGauge"}, "savedlgcust": {"name": "SaveDlgCust", "type": "TSaveDialog"}, "xfbitbtn2": {"name": "XFBitBtn2", "type": "TXFBitBtn"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}}, {});
  U.init(async () => {
    U.const("SIniLocation", "BankInfo.ini");
    U.const("SSection", "BankInfo");
    U.const("SBankID", "BankID");
    U.const("SBankName", "BankName");
    U.var_("f", null, "TextFile");
    U.var_("FormCust_File", null, "TFormCust_File");
    U.var_("UnusableGrops", [], "set");
    U.var_("FilePAth", '', "String");
  });
  U.method("TFormCust_File", "Get_BankInfo", async function Get_BankInfo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: $.rec("tbankinfo"), "ini": null, "bankid": '', "bankname": '', "path": ''};
  L0["path"] = $.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), (await $.v(C, "SIniLocation")));
  L0["ini"] = (await $.mcall((await $.v(C, "TIniFile")), "Create", [L0["path"]]));
  {
    const $t1 = L0["ini"];
    try {
      await $.wset([$t1], "BankID", (await $.wcall([$t1], "ReadString", [(await $.wv([$t1], "SSection", C, false)), (await $.wv([$t1], "SBankID", C, false)), ""], C)), { get: async () => L0["bankid"], set: async (v) => { L0["bankid"] = v; }, local: true });
      await $.wset([$t1], "BankName", (await $.wcall([$t1], "ReadString", [(await $.wv([$t1], "SSection", C, false)), (await $.wv([$t1], "SBankName", C, false)), ""], C)), { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true });
      await $.mset((await $.wv([$t1], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), "BankName", (await $.wcall([$t1], "Utf8Decode", [(await $.wv([$t1], "BankName", { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true }, false))], C)));
      await $.mset((await $.wv([$t1], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), "BankID", (await $.wcall([$t1], "Utf8Decode", [(await $.wv([$t1], "BankID", { get: async () => L0["bankid"], set: async (v) => { L0["bankid"] = v; }, local: true }, false))], C)));
    } finally {
      await $.stmt($.wcall([$t1], "Free", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormCust_File", "CreateXmlFile", async function CreateXmlFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t2 = (await $.v(C, "Adif_Data"));
    const $t3 = (await $.wv([$t2], "ods_cust", C, false));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["<BANK_BRANCH_CODE>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", [(await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["BANK_BRANCH_CODE"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["</BANK_BRANCH_CODE>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["<CLIENT_NO>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", [(await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_NO"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["</CLIENT_NO>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["<CLIENT_TYPE>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", [(await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_TYPE"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["</CLIENT_TYPE>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["<CLIENT_NATIONALTY>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", [(await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_NATIONALTY"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["</CLIENT_NATIONALTY>"], C)));
    if ($.truthy($.not(((await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_SYMBOL_NO"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["<CLIENT_SYMBOL_NO>"], C)));
      await $.stmt((await $.wcall([$t2, $t3], "WriteString", [(await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_SYMBOL_NO"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["</CLIENT_SYMBOL_NO>"], C)));
    }
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["<CLIENT_NAME>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", [(await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_NAME"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["</CLIENT_NAME>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["<CLIENT_SURNAME>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", [(await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_SURNAME"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["</CLIENT_SURNAME>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["<CLIENT_FATHERS_NAME>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", [(await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_FATHERS_NAME"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["</CLIENT_FATHERS_NAME>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["<CLIENT_DATE_BIRTH>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", [(await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_DATE_BIRTH"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["</CLIENT_DATE_BIRTH>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["<CLIENT_PLACE_OF_BIRTH>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", [(await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_PLACE_OF_BIRTH"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["</CLIENT_PLACE_OF_BIRTH>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["<CLIENT_ID_TYPE>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", [(await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_ID_TYPE"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["</CLIENT_ID_TYPE>"], C)));
    if ($.truthy($.not(((await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_ID_COMMENT"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["<CLIENT_ID_COMMENT>"], C)));
      await $.stmt((await $.wcall([$t2, $t3], "WriteString", [(await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_ID_COMMENT"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["</CLIENT_ID_COMMENT>"], C)));
    }
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["<CLIENT_ID_SERIAL>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", [(await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_ID_SERIAL"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["</CLIENT_ID_SERIAL>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["<CLIENT_ID_NUMBER>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", [(await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_ID_NUMBER"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["</CLIENT_ID_NUMBER>"], C)));
    if ($.truthy($.not(((await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_ID_PIN"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["<CLIENT_ID_PIN>"], C)));
      await $.stmt((await $.wcall([$t2, $t3], "WriteString", [(await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_ID_PIN"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["</CLIENT_ID_PIN>"], C)));
    }
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["<CLIENT_ID_ISSUE_DATE>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", [(await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_ID_ISSUE_DATE"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["</CLIENT_ID_ISSUE_DATE>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["<CLIENT_ID_ISSUE_PLACE>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", [(await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_ID_ISSUE_PLACE"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["</CLIENT_ID_ISSUE_PLACE>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["<CLIENT_ID_ADRESS>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", [(await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_ID_ADDRESS"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["</CLIENT_ID_ADRESS>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["<CLIENT_ID_ADRESS_REAL>"], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", [(await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_ID_ADDRESS_REAL"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["</CLIENT_ID_ADRESS_REAL>"], C)));
    if ($.truthy($.not(((await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_ID_EMAIL"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["<CLIENT_ID_EMAIL>"], C)));
      await $.stmt((await $.wcall([$t2, $t3], "WriteString", [(await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_ID_EMAIL"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["</CLIENT_ID_EMAIL>"], C)));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_ID_PHONE_MOBILE"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["<CLIENT_ID_PHONE_MOBILE>"], C)));
      await $.stmt((await $.wcall([$t2, $t3], "WriteString", [(await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_ID_PHONE_MOBILE"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["</CLIENT_ID_PHONE_MOBILE>"], C)));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_ID_PHONE_HOME"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["<CLIENT_ID_PHONE_HOME>"], C)));
      await $.stmt((await $.wcall([$t2, $t3], "WriteString", [(await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_ID_PHONE_HOME"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["</CLIENT_ID_PHONE_HOME>"], C)));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_ID_PHONE"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["<CLIENT_ID_WORK_PHONE>"], C)));
      await $.stmt((await $.wcall([$t2, $t3], "WriteString", [(await $.mv((await $.wcall([$t2, $t3], "FieldByName", ["CLIENT_ID_PHONE"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t2, $t3], "WriteString", ["</CLIENT_ID_WORK_PHONE>"], C)));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormCust_File", "WriteString", async function WriteString(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => (await $.v(C, "f")), async ($t4) => { await $.set(C, "f", $t4); }), (await $.v(C, "FilePAth"))])));
  await $.stmt((await $.call(C, "Append", [$.ref(async () => (await $.v(C, "f")), async ($t5) => { await $.set(C, "f", $t5); })])));
  await $.stmt((await $.call(C, "Write", [(await $.v(C, "f")), (await $.call(C, "UTF8Encode", [(await $.call(C, "StringReplace", [L0["s"], $.add("\r", "\n"), "", [(await $.v(C, "rfReplaceAll"))]]))]))])));
  await $.stmt((await $.call(C, "Closefile", [$.ref(async () => (await $.v(C, "f")), async ($t6) => { await $.set(C, "f", $t6); })])));
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFormCust_File", "CLENT_PERSON", async function CLENT_PERSON(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "x": 0};
  {
    const $t7 = (await $.v(C, "Adif_Data"));
    const $t8 = (await $.wv([$t7], "Ods_cust_person_joint", C, false));
    if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t7, $t8], "Adif_Data", C, false)), "Ods_cust_person_work")), "RecordCount")), 0))) {
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["<CLIENT_ID_PERSON_DATA>"], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["Y"], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["</CLIENT_ID_PERSON_DATA>"], C)));
    }
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t7, $t8], "Adif_Data", C, false)), "Ods_cust_person_work")), "RecordCount")), 0))) {
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["<CLIENT_ID_PERSON_DATA>"], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["N"], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["</CLIENT_ID_PERSON_DATA>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.mcall((await $.mv((await $.wv([$t7, $t8], "Adif_Data", C, false)), "Ods_cust_person_work")), "FieldByName", ["PRINAD_NAME"]))), "isnull"))))) {
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["<CLIENT_ID_PERSON_RELATIONSHIP>"], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t7, $t8], "adif_Data", C, false)), "Ods_cust_person_work")), "FieldByName", ["PRINAD_NAME"])), "asstring"))], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["</CLIENT_ID_PERSON_RELATIONSHIP>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t7, $t8], "FieldByName", ["firstname"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["<CLIENT_ID_PERSON_NAME>"], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", [(await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["firstname"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["</CLIENT_ID_PERSON_NAME>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t7, $t8], "FieldByName", ["lastname"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["<CLIENT_ID_PERSON_SURNAME>"], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", [(await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["lastname"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["</CLIENT_ID_PERSON_SURNAME>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t7, $t8], "FieldByName", ["patronymic"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["<CLIENT_ID_PERSON_FATHERS_NAME>"], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", [(await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["patronymic"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["</CLIENT_ID_PERSON_FATHERS_NAME>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t7, $t8], "FieldByName", ["client_date_birth"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["<CLIENT_ID_PERSON_DATE_BIRTH>"], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", [(await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["client_date_birth"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["</CLIENT_ID_PERSON_DATE_BIRTH>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t7, $t8], "FieldByName", ["place_of_birth"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["<CLIENT_ID_PERSON_PLACE_OF_BIRTH>"], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", [(await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["place_of_birth"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["</CLIENT_ID_PERSON_PLACE_OF_BIRTH>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t7, $t8], "FieldByName", ["doc_type"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["<CLIENT_ID_PERSON_ID>"], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", [(await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["doc_type"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["</CLIENT_ID_PERSON_ID>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t7, $t8], "FieldByName", ["passport"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["<CLIENT_ID_PERSON_SERIAL>"], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", [(await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["passport"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["</CLIENT_ID_PERSON_SERIAL>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t7, $t8], "FieldByName", ["passp_number"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["<CLIENT_ID_PERSON_NUMBER>"], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", [(await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["passp_number"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["</CLIENT_ID_PERSON_NUMBER>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t7, $t8], "FieldByName", ["passpin"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["<CLIENT_ID_PERSON_PIN>"], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", [(await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["passpin"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["</CLIENT_ID_PERSON_PIN>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t7, $t8], "FieldByName", ["paspdate"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["<CLIENT_ID_PERSON_ISSUE_DATE>"], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", [(await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["paspdate"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["</CLIENT_ID_PERSON_ISSUE_DATE>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t7, $t8], "FieldByName", ["issue_place"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["<CLIENT_ID_PERSON_ISSUE_PLACE>"], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", [(await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["issue_place"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["</CLIENT_ID_PERSON_ISSUE_PLACE>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t7, $t8], "FieldByName", ["adress"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["<CLIENT_ID_PERSON_ADRESS>"], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", [(await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["adress"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["</CLIENT_ID_PERSON_ADRESS>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t7, $t8], "FieldByName", ["fakt_adress"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["<CLIENT_ID_PERSON_ADRESS_REAL>"], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", [(await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["fakt_adress"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["</CLIENT_ID_PERSON_ADRESS_REAL>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t7, $t8], "FieldByName", ["email"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["<CLIENT_ID_PERSON_EMAIL>"], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", [(await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["email"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["</CLIENT_ID_PERSON_EMAIL>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t7, $t8], "FieldByName", ["phone_mob"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["<CLIENT_ID_PERSON_PHONE_MOBILE>"], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", [(await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["phone_mob"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["</CLIENT_ID_PERSON_PHONE_MOBILE>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t7, $t8], "FieldByName", ["phone"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["<CLIENT_ID_PERSON_PHONE_HOME>"], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", [(await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["phone"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["</CLIENT_ID_PERSON_PHONE_HOME>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t7, $t8], "FieldByName", ["inn"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["<VOEN>"], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", [(await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["inn"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["</VOEN>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t7, $t8], "FieldByName", ["info_tph_adress"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["<CLIENT_FS_ADRESS>"], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", [(await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["info_tph_adress"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t7, $t8], "WriteString", ["</CLIENT_FS_ADRESS>"], C)));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormCust_File", "CLENT_JOINT", async function CLENT_JOINT(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "x": 0, "i": 0};
  {
    const $t9 = (await $.v(C, "Adif_Data"));
    const $t10 = (await $.wv([$t9], "Ods_cust_person_joint", C, false));
    if ($.truthy($.not((await $.mv(((await $.wcall([$t9, $t10], "FieldByName", ["cust_type"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["<JOINT_ACCOUNT_TYPE>"], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["cust_type"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["</JOINT_ACCOUNT_TYPE>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t9, $t10], "FieldByName", ["id"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["<JOINT_ACCOUNT_NO>"], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["id"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["</JOINT_ACCOUNT_NO>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t9, $t10], "FieldByName", ["CLIENT_SYMBOL_NO"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["<JOINT_ACCOUNT_SYMBOL_NO>"], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["CLIENT_SYMBOL_NO"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["</JOINT_ACCOUNT_SYMBOL_NO>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t9, $t10], "FieldByName", ["firstname"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["<JOINT_ACCOUNT_NAME>"], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["firstname"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["</JOINT_ACCOUNT_NAME>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t9, $t10], "FieldByName", ["lastname"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["<JOINT_ACCOUNT_SURNAME>"], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["lastname"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["</JOINT_ACCOUNT_SURNAME>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t9, $t10], "FieldByName", ["patronymic"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["<JOINT_ACCOUNT_FATHERS_NAME>"], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["patronymic"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["</JOINT_ACCOUNT_FATHERS_NAME>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t9, $t10], "FieldByName", ["client_date_birth"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["<JOINT_ACCOUNT_DATE_BIRTH>"], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["client_date_birth"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["</JOINT_ACCOUNT_DATE_BIRTH>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t9, $t10], "FieldByName", ["place_of_birth"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["<JOINT_ACCOUNT_PLACE_OF_BIRTH>"], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["place_of_birth"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["</JOINT_ACCOUNT_PLACE_OF_BIRTH>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t9, $t10], "FieldByName", ["cust_type"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["<JOINT_ACCOUNT_ID_TYPE>"], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["cust_type"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["</JOINT_ACCOUNT_ID_TYPE>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t9, $t10], "FieldByName", ["CLIENT_ID_COMMENT"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["<JOINT_ACCOUNT_ID_COMMENT>"], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["CLIENT_ID_COMMENT"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["</JOINT_ACCOUNT_ID_COMMENT>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t9, $t10], "FieldByName", ["passport"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["<JOINT_ACCOUNT_ID_SERIAL>"], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["passport"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["</JOINT_ACCOUNT_ID_SERIAL>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t9, $t10], "FieldByName", ["passp_number"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["<JOINT_ACCOUNT_ID_NUMBER>"], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["passp_number"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["</JOINT_ACCOUNT_ID_NUMBER>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t9, $t10], "FieldByName", ["passpin"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["<JOINT_ACCOUNT_ID_PIN>"], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["passpin"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["</JOINT_ACCOUNT_ID_PIN>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t9, $t10], "FieldByName", ["paspdate"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["<JOINT_ACCOUNT_ID_ISSUE_DATE>"], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["paspdate"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["</JOINT_ACCOUNT_ID_ISSUE_DATE>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t9, $t10], "FieldByName", ["issue_place"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["<JOINT_ACCOUNT_ID_ISSUE_PLACE>"], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["issue_place"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["</JOINT_ACCOUNT_ID_ISSUE_PLACE>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t9, $t10], "FieldByName", ["adress"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["<JOINT_ACCOUNT_ID_ADRESS>"], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["adress"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["</JOINT_ACCOUNT_ID_ADRESS>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t9, $t10], "FieldByName", ["fakt_adress"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["<JOINT_ACCOUNT_ID_ADRESS_REAL>"], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["fakt_adress"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["</JOINT_ACCOUNT_ID_ADRESS_REAL>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t9, $t10], "FieldByName", ["email"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["<JOINT_ACCOUNT_ID_EMAIL>"], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["email"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["</JOINT_ACCOUNT_ID_EMAIL>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t9, $t10], "FieldByName", ["phone_mob"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["<JOINT_ACCOUNT_ID_PHONE_MOBILE>"], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["phone_mob"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["</JOINT_ACCOUNT_ID_PHONE_MOBILE>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t9, $t10], "FieldByName", ["phone"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["<JOINT_ACCOUNT_ID_PHONE_HOME>"], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["phone"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["</JOINT_ACCOUNT_ID_PHONE_HOME>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t9, $t10], "FieldByName", ["work_phone"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["<JOINT_ACCOUNT_ID_PHONE>"], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["work_phone"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["</JOINT_ACCOUNT_ID_PHONE>"], C)));
    }
    if ($.truthy($.not((await $.mv(((await $.wcall([$t9, $t10], "FieldByName", ["info_tph_adress"], C))), "isnull"))))) {
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["<JOINT_ACCOUNT_PERCENT>"], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["info_tph_adress"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "WriteString", ["</JOINT_ACCOUNT_PERCENT>"], C)));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormCust_File", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.v(C, "SaveDlgCust"));
    if ($.truthy((await $.wv([$t11], "Execute", C, false)))) {
      await $.mset((await $.wv([$t11], "EditFile", C, false)), "Text", (await $.wv([$t11], "FileName", C, false)));
    }
  }
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => (await $.v(C, "f")), async ($t12) => { await $.set(C, "f", $t12); }), (await $.mv((await $.v(C, "EditFile")), "Text"))])));
  await $.stmt((await $.call(C, "Rewrite", [$.ref(async () => (await $.v(C, "f")), async ($t13) => { await $.set(C, "f", $t13); })])));
  await $.stmt((await $.call(C, "Closefile", [$.ref(async () => (await $.v(C, "f")), async ($t14) => { await $.set(C, "f", $t14); })])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCust_File", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sr": 0, "r": 0, "j": 0, "i": 0, "n": 0, "a": 0, "rec_count": 0, "bankid": '', "bankname": '', "abankinfo": $.rec("tbankinfo")};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditFile")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["      Faylı seçməmisiz!     "])));
    return L0.result;
  }
  await $.mset((await $.mv((await $.v(C, "Adif_Data")), "ods_cust")), "QueryAllRecords", true);
  await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "ods_cust")), "refresh", []);
  L0["r"] = (await $.mv((await $.mv((await $.v(C, "Adif_Data")), "ods_cust")), "recordcount"));
  L0["abankinfo"] = (await $.v(C, "Get_BankInfo"));
  L0["bankid"] = (await $.mv(L0["abankinfo"], "BankID"));
  L0["bankname"] = (await $.mv(L0["abankinfo"], "BankName"));
  await $.set(C, "FilePAth", (await $.mv((await $.v(C, "EditFile")), "Text")));
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => (await $.v(C, "f")), async ($t15) => { await $.set(C, "f", $t15); }), (await $.v(C, "FilePAth"))])));
  await $.stmt((await $.call(C, "Rewrite", [$.ref(async () => (await $.v(C, "f")), async ($t16) => { await $.set(C, "f", $t16); })])));
  await $.stmt((await $.call(C, "Closefile", [$.ref(async () => (await $.v(C, "f")), async ($t17) => { await $.set(C, "f", $t17); })])));
  await $.stmt((await $.call(C, "WriteString", ["<?xml version=\"1.0\" encoding=\"UTF-8\" ?>"])));
  await $.stmt((await $.call(C, "WriteString", ["<CUSTOMERS>"])));
  await $.stmt((await $.call(C, "WriteString", ["<BANK_CODE>"])));
  await $.stmt((await $.call(C, "WriteString", [L0["bankid"]])));
  await $.stmt((await $.call(C, "WriteString", ["</BANK_CODE>"])));
  await $.stmt((await $.call(C, "WriteString", ["<BANK_NAME>"])));
  await $.stmt((await $.call(C, "WriteString", [L0["bankname"]])));
  await $.stmt((await $.call(C, "WriteString", ["</BANK_NAME>"])));
  await $.stmt((await $.call(C, "WriteString", ["<ROWCOUNT>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.call(C, "inttostr", [L0["r"]]))])));
  await $.stmt((await $.call(C, "WriteString", ["</ROWCOUNT>"])));
  await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "ods_cust")), "First", []);
  { const $t18 = $.sub(L0["r"], 1);
    L0["i"] = 0;
    let $t19 = true;
    for (;;) {
      if (!$t19) { L0["i"] = $.succ(L0["i"], 1); }
      $t19 = false;
      if (!($.ord(L0["i"]) <= $.ord($t18))) break;
      await $.stmt((await $.call(C, "WriteString", ["<CUSTOMER>"])));
      await $.stmt($.call(C, "CreateXmlFile", []));
      await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "Ods_cust_person_work")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "Ods_cust_person_work")), "SetVariable", ["v_custid", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "ods_cust")), "FieldByName", ["CLIENT_NO"])), "AsInteger"))])));
      await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "Ods_cust_person_work")), "open", []);
      await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "Ods_cust_person_joint")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "Ods_cust_person_joint")), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "Ods_cust_person_work")), "FieldByName", ["custid2"])), "AsInteger"))])));
      await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "Ods_cust_person_joint")), "open", []);
      await $.stmt($.call(C, "CLENT_PERSON", []));
      await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "Ods_cust_joint_work")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "Ods_cust_joint_work")), "SetVariable", ["v_custid", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "ods_cust")), "FieldByName", ["CLIENT_NO"])), "AsInteger"))])));
      await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "Ods_cust_joint_work")), "open", []);
      L0["rec_count"] = (await $.mv((await $.mv((await $.v(C, "Adif_Data")), "Ods_cust_joint_work")), "RecordCount"));
      await $.stmt((await $.call(C, "WriteString", ["<JOINT_ACCOUNT_NUMBER>"])));
      await $.stmt((await $.call(C, "WriteString", [(await $.call(C, "inttostr", [$.add(L0["rec_count"], 1)]))])));
      await $.stmt((await $.call(C, "WriteString", ["</JOINT_ACCOUNT_NUMBER>"])));
      if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "Adif_Data")), "Ods_cust_joint_work")), "RecordCount")), 0))) {
        await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "Ods_cust_joint_work")), "First", []);
        { const $t20 = $.sub((await $.mv((await $.mv((await $.v(C, "Adif_Data")), "Ods_cust_joint_work")), "RecordCount")), 1);
          L0["n"] = 0;
          let $t21 = true;
          for (;;) {
            if (!$t21) { L0["n"] = $.succ(L0["n"], 1); }
            $t21 = false;
            if (!($.ord(L0["n"]) <= $.ord($t20))) break;
            {
              const $t22 = (await $.v(C, "Adif_Data"));
              const $t23 = (await $.wv([$t22], "Ods_cust_person_joint", C, false));
              await $.stmt($.wcall([$t22, $t23], "close", [], C));
              await $.stmt((await $.wcall([$t22, $t23], "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t22, $t23], "Adif_Data", C, false)), "Ods_cust_joint_work")), "FieldByName", ["custid2"])), "AsInteger"))], C)));
              await $.stmt($.wcall([$t22, $t23], "open", [], C));
            }
            if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "Adif_Data")), "Ods_cust_person_joint")), "RecordCount")), 0))) {
              await $.stmt((await $.call(C, "WriteString", ["<JOINT_ACCOUNTS>"])));
              await $.stmt($.call(C, "CLENT_JOINT", []));
              await $.stmt((await $.call(C, "WriteString", ["</JOINT_ACCOUNTS>"])));
            }
            await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "Ods_cust_joint_work")), "Next", []);
            await $.tick();
          }
        }
      }
      await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "ods_cust")), "next", []);
      await $.stmt((await $.call(C, "WriteString", ["</CUSTOMER>"])));
      await $.mset((await $.v(C, "Gauge_cust")), "Progress", (await $.call(C, "Trunc", [$.fdiv($.mul(L0["j"], 100), L0["r"])])));
      L0["j"] = $.add(L0["j"], 1);
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "WriteString", ["</CUSTOMERS>"])));
  await $.stmt((await $.call(C, "ShowMessage", [$.add($.add("İxrac qurtardı ", (await $.call(C, "inttostr", [L0["r"]]))), "- sayda müştəri ixrac olundu")])));
  await $.stmt((await $.call(C, "MessageDlg", ["XML file uğurla yaradıldı", (await $.v(C, "mtInformation")), [(await $.v(C, "mbOk"))], 0])));
  await $.mset((await $.v(C, "Gauge_cust")), "Progress", 0);
  await $.mset((await $.v(C, "EditFile")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCust_File", "XFBitBtn2Click", async function XFBitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormCust_File")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
