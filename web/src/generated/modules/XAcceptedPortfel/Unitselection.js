// Generated from Unitselection.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unitselection", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "DBCtrls", "Accepted_portfel_TLB", "mainUnit", "PaymentreportUnit"]);
  const C = [U];
  U.defClass("TSelectionUnit", "TForm", {"radiogroup1": {"name": "RadioGroup1", "type": "TRadioGroup"}}, {});
  U.init(async () => {
    U.var_("SelectionUnit", null, "TSelectionUnit");
  });
  U.method("TSelectionUnit", "RadioGroup1Click", async function RadioGroup1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 1))) {
    await $.set(C, "Payreport", (await $.mcall((await $.v(C, "TPayreport")), "create", [Self])));
    await $.mcall((await $.v(C, "Payreport")), "ShowModal", []);
    await $.mcall((await $.v(C, "SelectionUnit")), "Close", []);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 0))) {
    try {
      await $.set(C, "Payreport", (await $.mcall((await $.v(C, "TPayreport")), "create", [Self])));
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
      await $.stmt((await $.mcall((await $.v(C, "Payreport")), "Button3Click", [Self])));
      await $.mcall((await $.v(C, "SelectionUnit")), "Close", []);
    } finally {
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
      await $.mcall((await $.v(C, "Payreport")), "Close", []);
      await $.mcall((await $.v(C, "SelectionUnit")), "Close", []);
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 2))) {
    try {
      await $.set(C, "Payreport", (await $.mcall((await $.v(C, "TPayreport")), "create", [Self])));
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
      await $.stmt((await $.mcall((await $.v(C, "Payreport")), "Button4Click", [Self])));
      await $.mcall((await $.v(C, "SelectionUnit")), "Close", []);
    } finally {
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
      await $.mcall((await $.v(C, "Payreport")), "Close", []);
      await $.mcall((await $.v(C, "SelectionUnit")), "Close", []);
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 3))) {
    try {
      await $.set(C, "Payreport", (await $.mcall((await $.v(C, "TPayreport")), "create", [Self])));
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
      await $.stmt((await $.mcall((await $.v(C, "Payreport")), "Button5Click", [Self])));
      await $.mcall((await $.v(C, "SelectionUnit")), "Close", []);
    } finally {
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
      await $.mcall((await $.v(C, "Payreport")), "Close", []);
      await $.mcall((await $.v(C, "SelectionUnit")), "Close", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
