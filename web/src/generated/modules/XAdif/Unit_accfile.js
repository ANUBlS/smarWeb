// Generated from Unit_accfile.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit_accfile", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "XFSCtrls", "Gauges", "ExtCtrls", "IniFiles", "UnitAdifData", "Unit_interval"]);
  const C = [U];
  $.defRecord("tbankinfo", {"bankname": () => '', "bankid": () => ''});
  U.defClass("TFormAcc_file", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "gauge_acc": {"name": "Gauge_acc", "type": "TGauge"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "editfile_acc": {"name": "EditFile_acc", "type": "TEdit"}, "xfbitbtn2": {"name": "XFBitBtn2", "type": "TXFBitBtn"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "savedlgacc": {"name": "SaveDlgAcc", "type": "TSaveDialog"}}, {});
  U.init(async () => {
    U.const("SIniLocation", "BankInfo.ini");
    U.const("SSection", "BankInfo");
    U.const("SBankID", "BankID");
    U.const("SBankName", "BankName");
    U.var_("f", null, "TextFile");
    U.var_("FilePAth", '', "String");
    U.var_("FormAcc_file", null, "TFormAcc_file");
  });
  U.method("TFormAcc_file", "Get_BankInfo", async function Get_BankInfo(Self) {
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
  U.method("TFormAcc_file", "WriteString", async function WriteString(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => (await $.v(C, "f")), async ($t2) => { await $.set(C, "f", $t2); }), (await $.v(C, "FilePAth"))])));
  await $.stmt((await $.call(C, "Append", [$.ref(async () => (await $.v(C, "f")), async ($t3) => { await $.set(C, "f", $t3); })])));
  await $.stmt((await $.call(C, "Write", [(await $.v(C, "f")), (await $.call(C, "UTF8Encode", [(await $.call(C, "StringReplace", [L0["s"], $.add("\r", "\n"), "", [(await $.v(C, "rfReplaceAll"))]]))]))])));
  await $.stmt((await $.call(C, "Closefile", [$.ref(async () => (await $.v(C, "f")), async ($t4) => { await $.set(C, "f", $t4); })])));
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFormAcc_file", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "SaveDlgAcc"));
    if ($.truthy((await $.wv([$t5], "Execute", C, false)))) {
      await $.mset((await $.wv([$t5], "EditFile_acc", C, false)), "Text", (await $.wv([$t5], "FileName", C, false)));
    }
  }
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => (await $.v(C, "f")), async ($t6) => { await $.set(C, "f", $t6); }), (await $.mv((await $.v(C, "EditFile_acc")), "Text"))])));
  await $.stmt((await $.call(C, "Rewrite", [$.ref(async () => (await $.v(C, "f")), async ($t7) => { await $.set(C, "f", $t7); })])));
  await $.stmt((await $.call(C, "Closefile", [$.ref(async () => (await $.v(C, "f")), async ($t8) => { await $.set(C, "f", $t8); })])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAcc_file", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "end_dat": 0, "sr": 0, "r": 0, "j": 0, "i": 0, "n": 0, "a": 0, "rec_count": 0, "bankid": '', "bankname": '', "abankinfo": $.rec("tbankinfo")};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditFile_acc")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["      Faylı seçməmisiz!     "])));
    return L0.result;
  }
  await $.mset((await $.mv((await $.v(C, "Adif_Data")), "ods_account")), "QueryAllRecords", true);
  await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "ods_account")), "refresh", []);
  L0["r"] = (await $.mv((await $.mv((await $.v(C, "Adif_Data")), "ods_account")), "recordcount"));
  L0["abankinfo"] = (await $.v(C, "Get_BankInfo"));
  L0["bankid"] = (await $.mv(L0["abankinfo"], "BankID"));
  L0["bankname"] = (await $.mv(L0["abankinfo"], "BankName"));
  await $.set(C, "FilePAth", (await $.mv((await $.v(C, "EditFile_acc")), "Text")));
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => (await $.v(C, "f")), async ($t9) => { await $.set(C, "f", $t9); }), (await $.v(C, "FilePAth"))])));
  await $.stmt((await $.call(C, "Rewrite", [$.ref(async () => (await $.v(C, "f")), async ($t10) => { await $.set(C, "f", $t10); })])));
  await $.stmt((await $.call(C, "Closefile", [$.ref(async () => (await $.v(C, "f")), async ($t11) => { await $.set(C, "f", $t11); })])));
  L0["end_dat"] = (await $.mv((await $.mv((await $.v(C, "Form_Interval")), "DateTim_end")), "DateTime"));
  await $.stmt((await $.call(C, "WriteString", ["<?xml version=\"1.0\" encoding=\"UTF-8\" ?>"])));
  await $.stmt((await $.call(C, "WriteString", ["<BALANCE>"])));
  await $.stmt((await $.call(C, "WriteString", ["<BANK_CODE>"])));
  await $.stmt((await $.call(C, "WriteString", [L0["bankid"]])));
  await $.stmt((await $.call(C, "WriteString", ["</BANK_CODE>"])));
  await $.stmt((await $.call(C, "WriteString", ["<BANK_NAME>"])));
  await $.stmt((await $.call(C, "WriteString", [L0["bankname"]])));
  await $.stmt((await $.call(C, "WriteString", ["</BANK_NAME>"])));
  await $.stmt((await $.call(C, "WriteString", ["<BALANCE_DATE>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.call(C, "FormatDateTime", ["yyyy-dd-mm", L0["end_dat"]]))])));
  await $.stmt((await $.call(C, "WriteString", ["</BALANCE_DATE>"])));
  await $.stmt((await $.call(C, "WriteString", ["<ROWCOUNT>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.call(C, "inttostr", [L0["r"]]))])));
  await $.stmt((await $.call(C, "WriteString", ["</ROWCOUNT>"])));
  await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "ods_account")), "First", []);
  { const $t12 = $.sub(L0["r"], 1);
    L0["i"] = 0;
    let $t13 = true;
    for (;;) {
      if (!$t13) { L0["i"] = $.succ(L0["i"], 1); }
      $t13 = false;
      if (!($.ord(L0["i"]) <= $.ord($t12))) break;
      await $.stmt((await $.call(C, "WriteString", ["<DETAILS>"])));
      {
        const $t14 = (await $.v(C, "Adif_Data"));
        const $t15 = (await $.wv([$t14], "ods_account", C, false));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", ["<BRANCH_CODE>"], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", [(await $.mv((await $.wcall([$t14, $t15], "FieldByName", ["fil_kod"], C)), "AsString"))], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", ["</BRANCH_CODE>"], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", ["<BRANCH_NAME>"], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", [(await $.mv((await $.wcall([$t14, $t15], "FieldByName", ["fil_name"], C)), "AsString"))], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", ["</BRANCH_NAME>"], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", ["<BALANCE_ACCOUNT_NUMBER>"], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", [(await $.mv((await $.wcall([$t14, $t15], "FieldByName", ["bal_cn1"], C)), "AsString"))], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", ["</BALANCE_ACCOUNT_NUMBER>"], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", ["<BALANCE_ACCOUNT_NAME>"], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", [(await $.mv((await $.wcall([$t14, $t15], "FieldByName", ["name"], C)), "AsString"))], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", ["</BALANCE_ACCOUNT_NAME>"], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", ["<CURRENCY_CODE>"], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", [(await $.mv((await $.wcall([$t14, $t15], "FieldByName", ["val_kod"], C)), "AsString"))], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", ["</CURRENCY_CODE>"], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", ["<YTD_DR>"], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", [(await $.mv((await $.wcall([$t14, $t15], "FieldByName", ["debt_dov"], C)), "AsString"))], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", ["</YTD_DR>"], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", ["<YTD_CR>"], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", [(await $.mv((await $.wcall([$t14, $t15], "FieldByName", ["kredit_dov"], C)), "AsString"))], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", ["</YTD_CR>"], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", ["<BALANCE>"], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", [(await $.mv((await $.wcall([$t14, $t15], "FieldByName", ["ostat"], C)), "AsString"))], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", ["</BALANCE>"], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", ["<AZN_BALANCE>"], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", [(await $.mv((await $.wcall([$t14, $t15], "FieldByName", ["pok_ostat"], C)), "AsString"))], C)));
        await $.stmt((await $.wcall([$t14, $t15], "WriteString", ["</AZN_BALANCE>"], C)));
      }
      await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "ods_account")), "next", []);
      await $.stmt((await $.call(C, "WriteString", ["</DETAILS>"])));
      await $.mset((await $.v(C, "Gauge_acc")), "Progress", (await $.call(C, "Trunc", [$.fdiv($.mul(L0["j"], 100), L0["r"])])));
      L0["j"] = $.add(L0["j"], 1);
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "WriteString", ["</BALANCE>"])));
  await $.stmt((await $.call(C, "ShowMessage", [$.add($.add("İxrac qurtardı ", (await $.call(C, "inttostr", [L0["r"]]))), "- sayda hesab ixrac olundu")])));
  await $.stmt((await $.call(C, "MessageDlg", ["XML file uğurla yaradıldı", (await $.v(C, "mtInformation")), [(await $.v(C, "mbOk"))], 0])));
  await $.mset((await $.v(C, "Gauge_acc")), "Progress", 0);
  await $.mset((await $.v(C, "EditFile_acc")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAcc_file", "XFBitBtn2Click", async function XFBitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormAcc_file")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
