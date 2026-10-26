// Generated from FrmConnectionImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmConnectionImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "StdCtrls", "Buttons", "ExtCtrls", "CMHintBox"]);
  const C = [U];
  U.defClass("TFrmConnection", "TForm", {"grblogonparams": {"name": "GrBLogonParams", "type": "TGroupBox"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "edusername": {"name": "EdUsername", "type": "TEdit"}, "edpassword": {"name": "EdPassword", "type": "TEdit"}, "cbdatabases": {"name": "CBDatabases", "type": "TComboBox"}, "lblusername": {"name": "LblUserName", "type": "TLabel"}, "lblpassword": {"name": "LblPassword", "type": "TLabel"}, "lbl": {"name": "Lbl", "type": "TLabel"}, "hbxcheck": {"name": "HBxCheck", "type": "TCMHintBox"}, "logondatabase": {"name": "LogonDatabase", "type": "String"}, "logonusername": {"name": "LogonUsername", "type": "String"}, "logonpassword": {"name": "LogonPassword", "type": "String"}, "tryconnect": {"name": "TryConnect", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("FrmConnection", null, "TFrmConnection");
  });
  U.method("TFrmConnection", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmConnection", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "LogonDatabase", (await $.mv((await $.v(C, "CBDatabases")), "Text")));
  await $.set(C, "LogonUsername", (await $.mv((await $.v(C, "EdUsername")), "Text")));
  await $.set(C, "LogonPassword", (await $.mv((await $.v(C, "EdPassword")), "Text")));
  if ($.truthy((await $.v(C, "CheckLogonParams")))) {
    await $.set(C, "TryConnect", true);
    await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmConnection", "CheckLogonParams", async function CheckLogonParams(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["cusrname"] = "İstifadəçini daxil edin !";
  L0["cpassword"] = "Şifrəni daxil edin !";
  L0["cdatabase"] = "Database-i seçin !";
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBDatabases")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.v(C, "HBxCheck")), "ShowMessage", [L0["cdatabase"]])));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "EdPassword")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.v(C, "HBxCheck")), "ShowMessage", [L0["cpassword"]])));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "EdUsername")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.v(C, "HBxCheck")), "ShowMessage", [L0["cusrname"]])));
  }
  L0["result"] = (await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "EdUsername")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "EdPassword")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "CBDatabases")), "Text")), ""))));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmConnection", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmConnection", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EdUsername")), "Text", (await $.v(C, "LogonUsername")));
  await $.mset((await $.v(C, "EdPassword")), "Text", (await $.v(C, "LogonPassword")));
  await $.mcall((await $.v(C, "EdPassword")), "SetFocus", []);
  await $.mset((await $.v(C, "CBDatabases")), "Text", (await $.v(C, "LogonDatabase")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
