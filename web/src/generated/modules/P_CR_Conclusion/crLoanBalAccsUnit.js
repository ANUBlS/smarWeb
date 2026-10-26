// Generated from crLoanBalAccsUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("crLoanBalAccsUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "NLSLocalizer", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "Buttons", "DBCtrls", "CMDBSearchEdit", "crDataModuleConclusion", "crCreateCMAccountsImpl", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFormLoanBalance", "TForm", {"bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "lcbloanbalance": {"name": "LCBLoanBalance", "type": "TDBLookupComboboxEh"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "label2": {"name": "Label2", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("FormLoanBalance", null, "TFormLoanBalance");
  });
  U.method("TFormLoanBalance", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "loanaccno": '', "booroweraccno": '', "prresaccno": '', "prpurresaccno": '', "intaccno": '', "dueloanaccno": '', "secresaccno": '', "secpurresaccno": '', "dueintaccno": '', "outpledgaccno": '', "outoblaccno": '', "outloanaccno": '', "outintaccno": '', "crdlineoblaccno": '', "valname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["valname"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "CurrencysData")), "FieldByName", ["VAL_NAME"])), "Asstring"));
  {
    const $t1 = (await $.v(C, "crDataModuleConcl"));
    const $t2 = (await $.wv([$t1], "IUPackage", C, false));
    await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["GenerateCreditAccNumber", ["p_bal_cn", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "BalcnLoan", C, false)), "FieldByName", ["BAL_CN"])), "AsInteger")), "p_Filial", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "Branches", C, false)), "FieldByName", ["ID"])), "Asinteger")), "p_CustID", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "Customer", C, false)), "FieldByName", ["ID"])), "Asinteger")), "p_val", (await $.wv([$t1, $t2], "valname", { get: async () => L0["valname"], set: async (v) => { L0["valname"] = v; }, local: true }, false)), "p_MCrdFil", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "UsrGroups", C, false)), "FieldByName", ["ID"])), "AsInteger")), "p_LoanAccno", (await $.wv([$t1, $t2], "LoanAccno", { get: async () => L0["loanaccno"], set: async (v) => { L0["loanaccno"] = v; }, local: true }, false)), "p_BoorowerAccno", (await $.wv([$t1, $t2], "BoorowerAccno", { get: async () => L0["booroweraccno"], set: async (v) => { L0["booroweraccno"] = v; }, local: true }, false)), "p_PrResAccno", (await $.wv([$t1, $t2], "PrResAccno", { get: async () => L0["prresaccno"], set: async (v) => { L0["prresaccno"] = v; }, local: true }, false)), "p_PrPurResAccno", (await $.wv([$t1, $t2], "PrPurResAccno", { get: async () => L0["prpurresaccno"], set: async (v) => { L0["prpurresaccno"] = v; }, local: true }, false)), "p_IntAccno", (await $.wv([$t1, $t2], "IntAccno", { get: async () => L0["intaccno"], set: async (v) => { L0["intaccno"] = v; }, local: true }, false)), "p_DueLoanAccno", (await $.wv([$t1, $t2], "DueLoanAccno", { get: async () => L0["dueloanaccno"], set: async (v) => { L0["dueloanaccno"] = v; }, local: true }, false)), "p_SecResAccno", (await $.wv([$t1, $t2], "SecResAccno", { get: async () => L0["secresaccno"], set: async (v) => { L0["secresaccno"] = v; }, local: true }, false)), "p_SecPurResAccno", (await $.wv([$t1, $t2], "SecPurResAccno", { get: async () => L0["secpurresaccno"], set: async (v) => { L0["secpurresaccno"] = v; }, local: true }, false)), "p_DueIntAccno", (await $.wv([$t1, $t2], "DueIntAccno", { get: async () => L0["dueintaccno"], set: async (v) => { L0["dueintaccno"] = v; }, local: true }, false)), "p_OutPledgAccno", (await $.wv([$t1, $t2], "OutPledgAccno", { get: async () => L0["outpledgaccno"], set: async (v) => { L0["outpledgaccno"] = v; }, local: true }, false)), "p_OutOblAccno", (await $.wv([$t1, $t2], "OutOblAccno", { get: async () => L0["outoblaccno"], set: async (v) => { L0["outoblaccno"] = v; }, local: true }, false)), "p_OutLoanAccno", (await $.wv([$t1, $t2], "OutLoanAccno", { get: async () => L0["outloanaccno"], set: async (v) => { L0["outloanaccno"] = v; }, local: true }, false)), "p_OutIntAccno", (await $.wv([$t1, $t2], "OutIntAccno", { get: async () => L0["outintaccno"], set: async (v) => { L0["outintaccno"] = v; }, local: true }, false)), "p_crdlineoblAccno", (await $.wv([$t1, $t2], "crdlineoblAccno", { get: async () => L0["crdlineoblaccno"], set: async (v) => { L0["crdlineoblaccno"] = v; }, local: true }, false)), "p_numberofcredit", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "CreditProps", C, false)), "FieldByName", ["numberofcredit"])), "asString")), "p_syenbol", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1, $t2], "crDataModuleConcl", C, false)), "DataSenbol")), "fieldbyname", ["kod"])), "asinteger"))]], C)));
    {
      const $t3 = (await $.wv([$t1, $t2], "FormCreateCMAccounts", C, false));
      await $.mset((await $.wv([$t1, $t2, $t3], "EditLoanAcc", C, false)), "text", (await $.mcall((await $.mv((await $.wv([$t1, $t2, $t3], "crDataModuleConcl", C, false)), "IUPackage")), "GetParameter", [5])));
      await $.mset((await $.wv([$t1, $t2, $t3], "EditCustAcc", C, false)), "text", (await $.mcall((await $.mv((await $.wv([$t1, $t2, $t3], "crDataModuleConcl", C, false)), "IUPackage")), "GetParameter", [6])));
      await $.mset((await $.wv([$t1, $t2, $t3], "EditResresveAcc", C, false)), "text", (await $.mcall((await $.mv((await $.wv([$t1, $t2, $t3], "crDataModuleConcl", C, false)), "IUPackage")), "GetParameter", [7])));
      await $.mset((await $.wv([$t1, $t2, $t3], "EditPrPurResAcc", C, false)), "text", (await $.mcall((await $.mv((await $.wv([$t1, $t2, $t3], "crDataModuleConcl", C, false)), "IUPackage")), "GetParameter", [8])));
      await $.mset((await $.wv([$t1, $t2, $t3], "EditInterestAcc", C, false)), "text", (await $.mcall((await $.mv((await $.wv([$t1, $t2, $t3], "crDataModuleConcl", C, false)), "IUPackage")), "GetParameter", [9])));
      await $.mset((await $.wv([$t1, $t2, $t3], "EditDueLoanAcc", C, false)), "text", (await $.mcall((await $.mv((await $.wv([$t1, $t2, $t3], "crDataModuleConcl", C, false)), "IUPackage")), "GetParameter", [10])));
      await $.mset((await $.wv([$t1, $t2, $t3], "EditDueReserveAcc", C, false)), "text", (await $.mcall((await $.mv((await $.wv([$t1, $t2, $t3], "crDataModuleConcl", C, false)), "IUPackage")), "GetParameter", [11])));
      await $.mset((await $.wv([$t1, $t2, $t3], "EditSecresAcc", C, false)), "text", (await $.mcall((await $.mv((await $.wv([$t1, $t2, $t3], "crDataModuleConcl", C, false)), "IUPackage")), "GetParameter", [12])));
      await $.mset((await $.wv([$t1, $t2, $t3], "EditDueIntAcc", C, false)), "text", (await $.mcall((await $.mv((await $.wv([$t1, $t2, $t3], "crDataModuleConcl", C, false)), "IUPackage")), "GetParameter", [13])));
      await $.mset((await $.wv([$t1, $t2, $t3], "EditOutPledgAcc", C, false)), "text", (await $.mcall((await $.mv((await $.wv([$t1, $t2, $t3], "crDataModuleConcl", C, false)), "IUPackage")), "GetParameter", [14])));
      await $.mset((await $.wv([$t1, $t2, $t3], "EditOutOblAcc", C, false)), "text", (await $.mcall((await $.mv((await $.wv([$t1, $t2, $t3], "crDataModuleConcl", C, false)), "IUPackage")), "GetParameter", [15])));
      await $.mset((await $.wv([$t1, $t2, $t3], "EditOutLoanAcc", C, false)), "text", (await $.mcall((await $.mv((await $.wv([$t1, $t2, $t3], "crDataModuleConcl", C, false)), "IUPackage")), "GetParameter", [16])));
      await $.mset((await $.wv([$t1, $t2, $t3], "EditOutIntAcc", C, false)), "text", (await $.mcall((await $.mv((await $.wv([$t1, $t2, $t3], "crDataModuleConcl", C, false)), "IUPackage")), "GetParameter", [17])));
      await $.mset((await $.wv([$t1, $t2, $t3], "EditCrdLineoblAcc", C, false)), "text", (await $.mcall((await $.mv((await $.wv([$t1, $t2, $t3], "crDataModuleConcl", C, false)), "IUPackage")), "GetParameter", [18])));
      await $.stmt($.wcall([$t1, $t2, $t3], "ShowModal", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormLoanBalance", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "DataSenbol")), "open", []);
  {
    const $t4 = (await $.v(C, "crDataModuleConcl"));
    const $t5 = (await $.wv([$t4], "BalcnLoan", C, false));
    await $.mset((await $.wv([$t4, $t5], "LCBLoanBalance", C, false)), "KeyValue", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["BAL_CN"], C)), "AsInteger")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormLoanBalance", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "crDataModuleConcl")), "DataSenbol")), "close", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormLoanBalance", "CMSearchEdit1Exit", async function CMSearchEdit1Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = L0["sender"];
    await $.wset([$t6], "Color", (await $.wv([$t6], "ColorSave", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
