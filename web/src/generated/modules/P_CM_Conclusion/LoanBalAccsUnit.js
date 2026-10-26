// Generated from LoanBalAccsUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("LoanBalAccsUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "Buttons", "DBCtrls", "CMDBSearchEdit", "DBGridEh", "DataModuleConclusion", "CreateCMAccountsImpl", "sboapiDataModuleImpl", "ConclusionMainUnitImpl", "Newaccountimpl"]);
  const C = [U];
  U.defClass("TFormLoanBalance", "TForm", {"bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("FormLoanBalance", null, "TFormLoanBalance");
  });
  U.method("TFormLoanBalance", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DataModuleConcl"));
    const $t2 = (await $.wv([$t1], "IUPackage", C, false));
    await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["account_no", ["p_custid", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "Customer", C, false)), "FieldByName", ["ID"])), "Asinteger")), "p_val", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "CurrencysData", C, false)), "FieldByName", ["CURRID"])), "AsInteger")), "p_fil", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "Branches", C, false)), "FieldByName", ["ID"])), "Asinteger")), "p_analtik", (await $.mv((await $.wv([$t1, $t2], "DBLookupComboboxEh1", C, false)), "KeyValue")), "p_note", (await $.mv((await $.wv([$t1, $t2], "edit1", C, false)), "Text")), "p_meh", (await $.mv((await $.mv((await $.wv([$t1, $t2], "ConclusionForm", C, false)), "DBLookupComboboxEh26")), "KeyValue")), "p_bdat", (await $.mv((await $.mv((await $.wv([$t1, $t2], "ConclusionForm", C, false)), "DBDateTimeEditEh1")), "Value")), "p_edat", (await $.mv((await $.mv((await $.wv([$t1, $t2], "ConclusionForm", C, false)), "DBDateTimeEditEh2")), "Value"))]], C)));
    if ($.truthy((await $.mv((await $.wv([$t1, $t2], "OracleDataSet1", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t1, $t2], "OracleDataSet1", C, false)), "close", []);
    }
    await $.stmt((await $.mcall((await $.wv([$t1, $t2], "OracleDataSet1", C, false)), "SetVariable", ["custid", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "Customer", C, false)), "FieldByName", ["ID"])), "Asinteger"))])));
    await $.mcall((await $.wv([$t1, $t2], "OracleDataSet1", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t1, $t2], "OracleDataSet1", C, false)), "RecordCount")), 0))) {
      await $.stmt((await $.wcall([$t1, $t2], "ShowMessage", ["Balans hesabları düzgün sazlanılmayıb !"], C)));
      return L0.result;
    }
    await $.mset((await $.mv((await $.wv([$t1, $t2], "ConclusionForm", C, false)), "PageControlMain")), "ActivePageIndex", 2);
    await $.mcall((await $.wv([$t1, $t2], "OracleDataSet1", C, false)), "edit", []);
  }
  await $.mcall((await $.v(C, "Newaccount")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormLoanBalance", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormLoanBalance", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "DataModuleConcl"));
    if ($.truthy((await $.mv((await $.wv([$t3], "OracleDataSet3", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t3], "OracleDataSet3", C, false)), "close", []);
    }
    await $.stmt((await $.mcall((await $.wv([$t3], "OracleDataSet3", C, false)), "SetVariable", ["custid", (await $.mv((await $.mcall((await $.wv([$t3], "Customer", C, false)), "FieldByName", ["ID"])), "Asinteger"))])));
    await $.mcall((await $.wv([$t3], "OracleDataSet3", C, false)), "Open", []);
    await $.mcall((await $.mv((await $.wv([$t3], "OracleDataSet3", C, false)), "Session")), "Commit", []);
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormLoanBalance", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Newaccount", (await $.mcall((await $.v(C, "tNewaccount")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormLoanBalance", "CMSearchEdit1Exit", async function CMSearchEdit1Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = L0["sender"];
    await $.wset([$t4], "Color", (await $.wv([$t4], "ColorSave", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
