// Generated from BankInfoImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("BankInfoImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "IniFiles"]);
  const C = [U];
  $.defRecord("tbankinfo", {"bankname": () => '', "bankid": () => ''});
  U.defClass("TFrmBankinfo", "TForm", {"bevel1": {"name": "Bevel1", "type": "TBevel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label1": {"name": "Label1", "type": "TLabel"}, "tnteditbankid": {"name": "TntEditBankID", "type": "TEdit"}, "tnteditbankname": {"name": "TntEditBankName", "type": "TEdit"}, "btnsave": {"name": "btnSave", "type": "TButton"}, "btncancel": {"name": "btnCancel", "type": "TButton"}}, {});
  U.init(async () => {
    U.const("SIniLocation", "BankInfo.ini");
    U.const("SSection", "BankInfo");
    U.const("SBankID", "BankID");
    U.const("SBankName", "BankName");
    U.var_("FrmBankinfo", null, "TFrmBankinfo");
  });
  U.method("TFrmBankinfo", "Get_BankInfo", async function Get_BankInfo(Self) {
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
  U.method("TFrmBankinfo", "Set_BankInfo", async function Set_BankInfo(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined, "ini": null, "bankid": '', "bankname": '', "path": ''};
  await $.fixArgs(L0, ["value"]);
  L0["bankid"] = (await $.mv(L0["value"], "BankID"));
  L0["bankname"] = (await $.mv(L0["value"], "BankName"));
  L0["path"] = $.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), (await $.v(C, "SIniLocation")));
  L0["ini"] = (await $.mcall((await $.v(C, "TIniFile")), "Create", [L0["path"]]));
  {
    const $t2 = L0["ini"];
    try {
      await $.stmt((await $.wcall([$t2], "WriteString", [(await $.wv([$t2], "SSection", C, false)), (await $.wv([$t2], "SBankID", C, false)), (await $.wcall([$t2], "UTF8Encode", [(await $.wv([$t2], "BankID", { get: async () => L0["bankid"], set: async (v) => { L0["bankid"] = v; }, local: true }, false))], C))], C)));
      await $.stmt((await $.wcall([$t2], "WriteString", [(await $.wv([$t2], "SSection", C, false)), (await $.wv([$t2], "SBankName", C, false)), (await $.wcall([$t2], "UTF8Encode", [(await $.wv([$t2], "BankName", { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true }, false))], C))], C)));
    } finally {
      await $.stmt($.wcall([$t2], "Free", [], C));
    }
  }
  return L0.result;
}, {"params": ["value"], "kind": "procedure", "ptypes": ["TBankInfo"]});
  U.method("TFrmBankinfo", "TntEditBankIDChange", async function TntEditBankIDChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "btnSave")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmBankinfo", "btnSaveClick", async function btnSaveClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "abankinfo": $.rec("tbankinfo")};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["abankinfo"], "BankID", (await $.mv((await $.v(C, "TntEditBankID")), "Text")));
  await $.mset(L0["abankinfo"], "BankName", (await $.mv((await $.v(C, "TntEditBankName")), "Text")));
  await $.stmt((await $.call(C, "Set_BankInfo", [L0["abankinfo"]])));
  await $.mset((await $.v(C, "btnSave")), "Enabled", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmBankinfo", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.mcall((await $.v(C, "btnCancel")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmBankinfo", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "abankinfo": $.rec("tbankinfo")};
  await $.fixArgs(L0, ["sender"]);
  L0["abankinfo"] = (await $.v(C, "Get_BankInfo"));
  await $.mset((await $.v(C, "TntEditBankID")), "Text", (await $.mv(L0["abankinfo"], "BankID")));
  await $.mset((await $.v(C, "TntEditBankName")), "Text", (await $.mv(L0["abankinfo"], "BankName")));
  await $.mset((await $.v(C, "btnSave")), "Enabled", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
