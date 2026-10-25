// Generated from UnitChangePasswordForm.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitChangePasswordForm", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ExtCtrls", "HintBox", "Oracle", "DB", "OracleData", "UnitSBOraLogOn"]);
  const C = [U];
  U.defClass("TCheckPassErr", "Exception", {}, {});
  U.defClass("TfmPassChange", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "ednewpass": {"name": "edNewPass", "type": "TEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "edretypepass": {"name": "edRetypePass", "type": "TEdit"}, "btok": {"name": "btOk", "type": "TBitBtn"}, "btcancel": {"name": "btCancel", "type": "TBitBtn"}, "hberrbox": {"name": "hbErrBox", "type": "THintBox"}, "pcadm": {"name": "pcADM", "type": "TOraclePackage"}, "odsusername": {"name": "ODSusername", "type": "TOracleDataSet"}, "odsusernameuser": {"name": "ODSusernameUSER", "type": "TWideStringField"}, "oldpass": {"name": "oldpass", "type": "String"}, "newpass": {"name": "newpass", "type": "String"}}, {});
  U.init(async () => {
    U.var_("fmPassChange", null, "TfmPassChange");
  });
  U.method("TfmPassChange", "btCancelClick", async function btCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  await $.mcall((await $.v(C, "Application")), "Terminate", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPassChange", "showInfo", async function showInfo(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"info": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["info"]);
  await $.stmt((await $.mcall((await $.v(C, "hbErrBox")), "ShowMessage", [L0["info"]])));
  return L0.result;
}, {"params": ["info"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfmPassChange", "CheckPass", async function CheckPass(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"new": $.copyArg(p0), "ret": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["new", "ret"]);
  L0["result"] = false;
  try {
    if ($.truthy($.eq((await $.call(C, "Length", [L0["new"]])), 0))) {
      throw $.raise((await $.mcall((await $.v(C, "TCheckPassErr")), "Create", ["Bu sahə boş ola bilməz!"])));
    }
    if ($.truthy($.ne(L0["new"], L0["ret"]))) {
      throw $.raise((await $.mcall((await $.v(C, "TCheckPassErr")), "Create", ["Təkrar şifrə düzgün deyil!"])));
    }
    if ($.truthy($.eq(L0["new"], (await $.v(C, "oldpass"))))) {
      throw $.raise((await $.mcall((await $.v(C, "TCheckPassErr")), "Create", ["Yeni şifrə ilə köhnə şifrə eyni ola bilməz!"])));
    }
    L0["result"] = true;
  } catch ($t1) {
    $.rethrowControl($t1);
    if ($.excIs($t1, "TCheckPassErr")) {
      L0["e"] = $.exc($t1);
      await $.stmt((await $.call(C, "showInfo", [(await $.mv(L0["e"], "Message"))])));
    }
    else {
      await $.stmt($.call(C, "RaiseLastWin32Error", []));
    }
  }
  return L0.result;
}, {"params": ["new", "ret"], "kind": "function", "ptypes": ["String", "String"]});
  U.method("TfmPassChange", "edNewPassKeyPress", async function edNewPassKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "layout": $.sarr()};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "GetKeyboardLayoutName", [L0["layout"]])));
  if ($.truthy(($.ne(L0["layout"], "00000409")))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy((await $.and_(($.eq((await $.call(C, "Length", [(await $.mv((L0["sender"]), "Text"))])), 0)), async () => ($.in_((await L0["key"].get()), [...$.range("0","9")])))))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy((await $.and_(($.gt((await $.mv((L0["sender"]), "SelLength")), 0)), async () => ($.in_((await L0["key"].get()), [...$.range("0","9")])))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfmPassChange", "btOkClick", async function btOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["verifypassword"] = $.fn(async function VerifyPassword(p0) {
  const L1 = {"passwd": $.copyArg(p0), result: false};
  await $.fixArgs(L1, ["passwd"]);
  L1["result"] = false;
  {
    const $t2 = (await $.v(C, "pcADM"));
    if ($.truthy((await $.wcall([$t2], "CallBooleanFunction", ["verify_password", [(await $.wcall([$t2], "trim", [(await $.wv([$t2], "passwd", { get: async () => L1["passwd"], set: async (v) => { L1["passwd"] = v; }, local: true }, false))], C))]], C)))) {
      await $.wset([$t2], "Result", (await $.wv([$t2], "true", C, false)), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
    }
  }
  return L1.result;
});
  if ($.truthy((await $.call(C, "CheckPass", [(await $.mv((await $.v(C, "edNewPass")), "Text")), (await $.mv((await $.v(C, "edRetypePass")), "Text"))])))) {
    await $.set(C, "newpass", (await $.mv((await $.v(C, "edNewPass")), "Text")));
    await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPassChange", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await $.v(C, "ModalResult")), [(await $.v(C, "mrOk")), (await $.v(C, "mrCancel"))]))))) {
    await L0["action"].set((await $.v(C, "caNone")));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  return U;
}
