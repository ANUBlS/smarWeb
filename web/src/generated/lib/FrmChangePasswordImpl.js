// Generated from FrmChangePasswordImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmChangePasswordImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "Buttons", "CMHintBox"]);
  const C = [U];
  U.defClass("TFrmChangePassword", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "ednewpass": {"name": "EdNewPass", "type": "TEdit"}, "edretpass": {"name": "EdRetPass", "type": "TEdit"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "hbxcheck": {"name": "HBxCheck", "type": "TCMHintBox"}, "newpassword": {"name": "NewPassword", "type": "String"}, "changepass": {"name": "ChangePass", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("FrmChangePassword", null, "TFrmChangePassword");
  });
  U.method("TFrmChangePassword", "Control", async function Control(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = ($.eq((await $.mv((await $.v(C, "EdNewPass")), "Text")), (await $.mv((await $.v(C, "EdRetPass")), "Text"))));
  if ($.truthy($.not(L0["result"]))) {
    await $.stmt((await $.mcall((await $.v(C, "HBxCheck")), "ShowMessage", ["Təkrar şifrə düzgün deyil !"])));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmChangePassword", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmChangePassword", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "Control")))) {
    await $.set(C, "NewPassword", (await $.mv((await $.v(C, "EdNewPass")), "Text")));
    await $.set(C, "ChangePass", true);
    await $.set(C, "ModalResult", (await $.v(C, "MrOk")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmChangePassword", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
