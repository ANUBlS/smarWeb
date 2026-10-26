// Generated from companycreditpayment.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("companycreditpayment", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Oracle", "UnitDataModPCustService"]);
  const C = [U];
  U.defClass("TPaymentcompany", "TForm", {"clientname": {"name": "clientname", "type": "TEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "mainrest": {"name": "mainrest", "type": "TEdit"}, "penaltyam": {"name": "penaltyam", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "label6": {"name": "Label6", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("Paymentcompany", null, "TPaymentcompany");
  });
  U.method("TPaymentcompany", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "penaltyam")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "companycredit")), "CallProcedure", ["sendcomapnypayment", [(await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Edit1")), "Text"))])), (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "edit5")), "Text"))])), 1]])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "companycredit")), "CallProcedure", ["sendcomapnypayment", [(await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Edit1")), "Text"))])), (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "edit5")), "Text"))])), 0]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentcompany", "Edit5Change", async function Edit5Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": 0, "b": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["a"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "penaltyam")), "Text"))]));
  L0["b"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "edit5")), "Text"))]));
  L0["b"] = $.add(L0["b"], L0["a"]);
  await $.mset((await $.v(C, "edit2")), "Text", (await $.call(C, "inttostr", [L0["b"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
