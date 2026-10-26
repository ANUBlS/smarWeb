// Generated from UnitUpdTrans.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitUpdTrans", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "UnitData"]);
  const C = [U];
  U.defClass("TFormUpdTrans", "TForm", {"groupboxdebtacc": {"name": "GroupBoxDebtAcc", "type": "TGroupBox"}, "cboxdebtacc": {"name": "CBoxDebtAcc", "type": "TComboBox"}, "groupboxcredacc": {"name": "GroupBoxCredAcc", "type": "TGroupBox"}, "cboxcredacc": {"name": "CBoxCredAcc", "type": "TComboBox"}, "bitbtnok": {"name": "BitBtnOk", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("FormUpdTrans", null, "TFormUpdTrans");
  });
  U.method("TFormUpdTrans", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormUpdTrans", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "rec": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr")), "Open", []);
  await $.mcall((await $.v(C, "CBoxDebtAcc")), "Clear", []);
  await $.mcall((await $.v(C, "CBoxCredAcc")), "Clear", []);
  { const $t1 = (await $.mv((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr")), "RecordCount"));
    L0["rec"] = 1;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["rec"] = $.succ(L0["rec"], 1); }
      $t2 = false;
      if (!($.ord(L0["rec"]) <= $.ord($t1))) break;
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBoxDebtAcc")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr")), "FieldByName", ["Acc_No"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBoxCredAcc")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr")), "FieldByName", ["Acc_No"])), "AsString"))])));
      await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSViewGr")), "Next", []);
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "CBoxDebtAcc")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSCalcWares")), "FieldByName", ["DebtAccNo"])), "AsString")));
  await $.mset((await $.v(C, "CBoxCredAcc")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSCalcWares")), "FieldByName", ["CredAccNo"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdTrans", "BitBtnOkClick", async function BitBtnOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "CBoxCredAcc")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "CBoxDebtAcc")), "Text")), "")))), async () => ($.not((await $.mv((await $.mv((await $.v(C, "DataModWares")), "ODSCalcWares")), "IsEmpty")))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallProcedure", ["update_wares_trans", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSCalcWares")), "FieldByName", ["id"])), "AsFloat")), (await $.call(C, "Trim", [(await $.mv((await $.v(C, "CBoxDebtAcc")), "Text"))])), (await $.call(C, "Trim", [(await $.mv((await $.v(C, "CBoxCredAcc")), "Text"))]))]])));
    await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSCalcWares")), "Refresh", []);
    await $.stmt($.call(C, "close", []));
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Boş qalan xanalar var!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
