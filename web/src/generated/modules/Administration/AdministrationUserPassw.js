// Generated from AdministrationUserPassw.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AdministrationUserPassw", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ExtCtrls", "HintBox", "AdministrationDataModule"]);
  const C = [U];
  U.defClass("EPassError", "Exception", {}, {});
  U.defClass("TfmUserPassw", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "edpassw": {"name": "edPassw", "type": "TEdit"}, "edretpassw": {"name": "edretpassw", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "erbox": {"name": "ErBox", "type": "THintBox"}}, {"password": {"name": "Password", "read": "GetPassword"}});
  U.init(async () => {
    U.var_("fmUserPassw", null, "TfmUserPassw");
  });
  U.method("TfmUserPassw", "Execute", async function Execute(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  await $.stmt($.call(C, "ShowModal", []));
  if ($.truthy($.eq((await $.v(C, "ModalResult")), (await $.v(C, "mrOK"))))) {
    L0["result"] = true;
  } else {
    L0["result"] = false;
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmUserPassw", "GetPassword", async function GetPassword(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = $.add($.add("KLs", (await $.mv((await $.v(C, "edPassw")), "Text"))), "#1$");
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmUserPassw", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["verifypassword"] = $.fn(async function VerifyPassword(p0) {
  const L1 = {"passwd": $.copyArg(p0), result: false};
  await $.fixArgs(L1, ["passwd"]);
  L1["result"] = false;
  {
    const $t1 = (await $.mv((await $.v(C, "AdministrationData")), "pcADM"));
    if ($.truthy((await $.wcall([$t1], "CallBooleanFunction", ["verify_password", [(await $.wcall([$t1], "trim", [$.add($.add("KLs", (await $.wv([$t1], "passwd", { get: async () => L1["passwd"], set: async (v) => { L1["passwd"] = v; }, local: true }, false))), "#1$")], C))]], C)))) {
      await $.wset([$t1], "Result", (await $.wv([$t1], "true", C, false)), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
    }
  }
  return L1.result;
});
  try {
    {
      const $t3 = (await $.v(C, "edPassw"));
      if ($.truthy($.eq((await $.wv([$t3], "Text", C, false)), (await $.wv([$t3], "EmptyStr", C, false))))) {
        throw $.raise((await $.mcall((await $.wv([$t3], "EPassError", C, false)), "Create", ["Şifrəni daxil edin"])));
      }
      if ($.truthy($.not((await $.wcall([$t3], "VerifyPassword", [(await $.wv([$t3], "Text", C, false))], { get: async () => L0["verifypassword"], set: async (v) => { L0["verifypassword"] = v; }, local: true }))))) {
        throw $.raise((await $.mcall((await $.wv([$t3], "EPassError", C, false)), "Create", ["Şifrə mürəkkəb deyil"])));
      }
      if ($.truthy($.ne((await $.wcall([$t3], "StrToIntDef", [(await $.idx((await $.wv([$t3], "Text", C, false)), [1])), (-(1))], C)), (-(1))))) {
        throw $.raise((await $.mcall((await $.wv([$t3], "EPassError", C, false)), "Create", [" Birinci simvol hərf olmalıdır"])));
      }
      if ($.truthy($.ne((await $.wv([$t3], "Text", C, false)), (await $.mv((await $.wv([$t3], "edretpassw", C, false)), "Text"))))) {
        throw $.raise((await $.mcall((await $.wv([$t3], "EPassError", C, false)), "Create", [" Təkrar düzgün daxil edin"])));
      }
    }
  } catch ($t2) {
    $.rethrowControl($t2);
    if ($.excIs($t2, "EPassError")) {
      L0["e"] = $.exc($t2);
      await $.stmt((await $.mcall((await $.v(C, "ErBox")), "ShowMessage", [(await $.mv(L0["e"], "Message"))])));
      await $.set(C, "ModalResult", (await $.v(C, "mrNone")));
    }
    else {
      await $.set(C, "ModalResult", (await $.v(C, "mrNone")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmUserPassw", "edPasswKeyPress", async function edPasswKeyPress(Self, p0, p1) {
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
  return U;
}
