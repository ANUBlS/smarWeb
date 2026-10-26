// Generated from CreateCMArAccountsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CreateCMArAccountsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "Buttons", "StdCtrls", "ExtCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "Oracle", "DataModuleArConclusion", "ArConclusionMainUnitImpl", "ArLoanBalAccsUnit", "SBTranslateProc", "sboapiDataModuleImpl", "ArCommonDecls"]);
  const C = [U];
  U.defClass("TFormCreateCMAccounts", "TForm", {"panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "label43": {"name": "Label43", "type": "TLabel"}, "label47": {"name": "Label47", "type": "TLabel"}, "label51": {"name": "Label51", "type": "TLabel"}, "label55": {"name": "Label55", "type": "TLabel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "editcustacc": {"name": "EditCustAcc", "type": "TEdit"}, "editresresveacc": {"name": "EditResresveAcc", "type": "TEdit"}, "editinterestacc": {"name": "EditInterestAcc", "type": "TEdit"}, "editdueloanacc": {"name": "EditDueLoanAcc", "type": "TEdit"}, "chcust": {"name": "ChCust", "type": "TCheckBox"}, "chprres": {"name": "CHPrRes", "type": "TCheckBox"}, "chint": {"name": "CHInt", "type": "TCheckBox"}, "chdueloan": {"name": "ChDueLoan", "type": "TCheckBox"}, "editloanacc": {"name": "EditLoanAcc", "type": "TEdit"}, "chloan": {"name": "ChLoan", "type": "TCheckBox"}, "editprpurresacc": {"name": "EditPrPurResAcc", "type": "TEdit"}, "chpurres": {"name": "ChPurRes", "type": "TCheckBox"}, "bitbtnok": {"name": "BitBtnOk", "type": "TBitBtn"}, "bitbtncancel": {"name": "BitBtnCancel", "type": "TBitBtn"}, "cm_credit": {"name": "CM_CREDIT", "type": "TOraclePackage"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "editsecresacc": {"name": "EditSecresAcc", "type": "TEdit"}, "chsecpurres": {"name": "ChSecPurRes", "type": "TCheckBox"}, "chdueint": {"name": "CHDueint", "type": "TCheckBox"}, "editdueintacc": {"name": "EditDueIntAcc", "type": "TEdit"}, "chobl": {"name": "ChObl", "type": "TCheckBox"}, "choutloan": {"name": "ChOutLoan", "type": "TCheckBox"}, "choutint": {"name": "ChOutInt", "type": "TCheckBox"}, "chcrdlineobl": {"name": "ChCrdLineObl", "type": "TCheckBox"}, "editcrdlineoblacc": {"name": "EditCrdLineoblAcc", "type": "TEdit"}, "editoutintacc": {"name": "EditOutIntAcc", "type": "TEdit"}, "editoutloanacc": {"name": "EditOutLoanAcc", "type": "TEdit"}, "editoutoblacc": {"name": "EditOutOblAcc", "type": "TEdit"}, "label59": {"name": "Label59", "type": "TLabel"}, "editduereserveacc": {"name": "EditDueReserveAcc", "type": "TEdit"}, "chsecres": {"name": "ChSecRes", "type": "TCheckBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "edit2": {"name": "edit2", "type": "TEdit"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "editoutpledgacc": {"name": "EditOutPledgAcc", "type": "TEdit"}, "chpledg": {"name": "ChPledg", "type": "TCheckBox"}, "custid": {"name": "CustID", "type": "Integer"}, "custname": {"name": "CustName", "type": "String"}}, {});
  U.init(async () => {
    U.var_("FormCreateCMAccounts", null, "TFormCreateCMAccounts");
  });
  U.method("TFormCreateCMAccounts", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCreateCMAccounts", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFormCreateCMAccounts", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCreateCMAccounts", "BitBtnOkClick", async function BitBtnOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "loanaccidv": 0, "booroweraccidv": 0, "prresaccidv": 0, "prpurresaccidv": 0, "intaccidv": 0, "dueloanaccidv": 0, "secresaccidv": 0, "secpurresaccidv": 0, "dueintaccidv": 0, "outpledgaccidv": 0, "outoblaccidv": 0, "outloanaccidv": 0, "outintaccidv": 0, "crdlineoblaccidv": 0, "iprresaccidv": 0, "iprpurresaccidv": 0, "loanaccid": 0, "booroweraccid": 0, "prresaccid": 0, "prpurresaccid": 0, "intaccid": 0, "dueloanaccid": 0, "secresaccid": 0, "secpurresaccid": 0, "dueintaccid": 0, "outpledgaccid": 0, "outoblaccid": 0, "outloanaccid": 0, "outintaccid": 0, "crdlineoblaccid": 0, "iprresaccid": 0, "iprpurresaccid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rscracc"] = "Seçilmiş hesablar yaradılacaq Əminsiniz ?";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["rscracc"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t1 = (await $.v(C, "CM_CREDIT"));
      const $t2 = (await $.wv([$t1], "ArDataModuleConcl", C, false));
      await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["AddCreditAccounts", [(await $.mv((await $.mcall((await $.wv([$t1, $t2], "Customer", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t1, $t2], "CurrencysData", C, false)), "FieldByName", ["CURRID"])), "AsInteger")), (await $.mv((await $.wv([$t1, $t2], "ChLoan", C, false)), "checked")), (await $.mv((await $.wv([$t1, $t2], "EditLoanAcc", C, false)), "text")), (await $.mv((await $.wv([$t1, $t2], "ChCust", C, false)), "checked")), (await $.mv((await $.wv([$t1, $t2], "EditCustAcc", C, false)), "text")), (await $.mv((await $.wv([$t1, $t2], "CHPrRes", C, false)), "checked")), (await $.mv((await $.wv([$t1, $t2], "EditResresveAcc", C, false)), "text")), (await $.mv((await $.wv([$t1, $t2], "ChPurRes", C, false)), "checked")), (await $.mv((await $.wv([$t1, $t2], "EditPrPurResAcc", C, false)), "text")), (await $.mv((await $.wv([$t1, $t2], "ChInt", C, false)), "checked")), (await $.mv((await $.wv([$t1, $t2], "EditInterestAcc", C, false)), "text")), (await $.mv((await $.wv([$t1, $t2], "ChDueLoan", C, false)), "Checked")), (await $.mv((await $.wv([$t1, $t2], "EditDueLoanAcc", C, false)), "text")), (await $.mv((await $.wv([$t1, $t2], "ChSecRes", C, false)), "checked")), (await $.mv((await $.wv([$t1, $t2], "EditDueReserveAcc", C, false)), "text")), (await $.mv((await $.wv([$t1, $t2], "ChSecPurRes", C, false)), "checked")), (await $.mv((await $.wv([$t1, $t2], "EditSecresAcc", C, false)), "text")), (await $.mv((await $.wv([$t1, $t2], "CHDueint", C, false)), "checked")), (await $.mv((await $.wv([$t1, $t2], "EditDueIntAcc", C, false)), "text")), (await $.mv((await $.wv([$t1, $t2], "ChPledg", C, false)), "checked")), (await $.mv((await $.wv([$t1, $t2], "EditOutPledgAcc", C, false)), "Text")), (await $.mv((await $.wv([$t1, $t2], "ChObl", C, false)), "checked")), (await $.mv((await $.wv([$t1, $t2], "EditOutOblAcc", C, false)), "Text")), (await $.mv((await $.wv([$t1, $t2], "ChOutLoan", C, false)), "checked")), (await $.mv((await $.wv([$t1, $t2], "EditOutLoanAcc", C, false)), "Text")), (await $.mv((await $.wv([$t1, $t2], "ChOutInt", C, false)), "checked")), (await $.mv((await $.wv([$t1, $t2], "EditOutIntAcc", C, false)), "Text")), (await $.mv((await $.wv([$t1, $t2], "ChCrdLineObl", C, false)), "checked")), (await $.mv((await $.wv([$t1, $t2], "EditCrdLineoblAcc", C, false)), "Text")), (await $.mv((await $.wv([$t1, $t2], "CheckBox1", C, false)), "checked")), (await $.mv((await $.wv([$t1, $t2], "edit1", C, false)), "text")), (await $.mv((await $.wv([$t1, $t2], "CheckBox2", C, false)), "checked")), (await $.mv((await $.wv([$t1, $t2], "edit2", C, false)), "text")), (await $.wv([$t1, $t2], "LoanAccIDv", { get: async () => L0["loanaccidv"], set: async (v) => { L0["loanaccidv"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "BoorowerAccIDv", { get: async () => L0["booroweraccidv"], set: async (v) => { L0["booroweraccidv"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "PrResAccIDv", { get: async () => L0["prresaccidv"], set: async (v) => { L0["prresaccidv"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "PrPurResAccIDv", { get: async () => L0["prpurresaccidv"], set: async (v) => { L0["prpurresaccidv"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "IntAccIDv", { get: async () => L0["intaccidv"], set: async (v) => { L0["intaccidv"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "DueLoanAccIDv", { get: async () => L0["dueloanaccidv"], set: async (v) => { L0["dueloanaccidv"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "SecResAccIDv", { get: async () => L0["secresaccidv"], set: async (v) => { L0["secresaccidv"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "SecPurResAccIDv", { get: async () => L0["secpurresaccidv"], set: async (v) => { L0["secpurresaccidv"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "DueIntAccIDv", { get: async () => L0["dueintaccidv"], set: async (v) => { L0["dueintaccidv"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "OutPledgAccIDv", { get: async () => L0["outpledgaccidv"], set: async (v) => { L0["outpledgaccidv"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "OutOblAccIDv", { get: async () => L0["outoblaccidv"], set: async (v) => { L0["outoblaccidv"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "OutLoanAccIDv", { get: async () => L0["outloanaccidv"], set: async (v) => { L0["outloanaccidv"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "OutIntAccIDv", { get: async () => L0["outintaccidv"], set: async (v) => { L0["outintaccidv"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "crdlineoblAccIDv", { get: async () => L0["crdlineoblaccidv"], set: async (v) => { L0["crdlineoblaccidv"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t1, $t2], "CreditProps", C, false)), "FieldByName", ["numberofcredit"])), "asString")), (await $.wv([$t1, $t2], "IPrResAccIDv", { get: async () => L0["iprresaccidv"], set: async (v) => { L0["iprresaccidv"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "IPrPurResAccIDv", { get: async () => L0["iprpurresaccidv"], set: async (v) => { L0["iprpurresaccidv"] = v; }, local: true }, false))]], C)));
      await $.wset([$t1, $t2], "LoanAccID", (await $.wcall([$t1, $t2], "GetParameter", [34], C)), { get: async () => L0["loanaccid"], set: async (v) => { L0["loanaccid"] = v; }, local: true });
      await $.wset([$t1, $t2], "BoorowerAccID", (await $.wcall([$t1, $t2], "GetParameter", [35], C)), { get: async () => L0["booroweraccid"], set: async (v) => { L0["booroweraccid"] = v; }, local: true });
      await $.wset([$t1, $t2], "PrResAccID", (await $.wcall([$t1, $t2], "GetParameter", [36], C)), { get: async () => L0["prresaccid"], set: async (v) => { L0["prresaccid"] = v; }, local: true });
      await $.wset([$t1, $t2], "PrPurResAccID", (await $.wcall([$t1, $t2], "GetParameter", [37], C)), { get: async () => L0["prpurresaccid"], set: async (v) => { L0["prpurresaccid"] = v; }, local: true });
      await $.wset([$t1, $t2], "IntAccID", (await $.wcall([$t1, $t2], "GetParameter", [38], C)), { get: async () => L0["intaccid"], set: async (v) => { L0["intaccid"] = v; }, local: true });
      await $.wset([$t1, $t2], "DueLoanAccID", (await $.wcall([$t1, $t2], "GetParameter", [39], C)), { get: async () => L0["dueloanaccid"], set: async (v) => { L0["dueloanaccid"] = v; }, local: true });
      await $.wset([$t1, $t2], "SecResAccID", (await $.wcall([$t1, $t2], "GetParameter", [40], C)), { get: async () => L0["secresaccid"], set: async (v) => { L0["secresaccid"] = v; }, local: true });
      await $.wset([$t1, $t2], "SecPurResAccID", (await $.wcall([$t1, $t2], "GetParameter", [41], C)), { get: async () => L0["secpurresaccid"], set: async (v) => { L0["secpurresaccid"] = v; }, local: true });
      await $.wset([$t1, $t2], "DueIntAccID", (await $.wcall([$t1, $t2], "GetParameter", [42], C)), { get: async () => L0["dueintaccid"], set: async (v) => { L0["dueintaccid"] = v; }, local: true });
      await $.wset([$t1, $t2], "OutPledgAccID", (await $.wcall([$t1, $t2], "GetParameter", [43], C)), { get: async () => L0["outpledgaccid"], set: async (v) => { L0["outpledgaccid"] = v; }, local: true });
      await $.wset([$t1, $t2], "OutOblAccID", (await $.wcall([$t1, $t2], "GetParameter", [44], C)), { get: async () => L0["outoblaccid"], set: async (v) => { L0["outoblaccid"] = v; }, local: true });
      await $.wset([$t1, $t2], "OutLoanAccID", (await $.wcall([$t1, $t2], "GetParameter", [45], C)), { get: async () => L0["outloanaccid"], set: async (v) => { L0["outloanaccid"] = v; }, local: true });
      await $.wset([$t1, $t2], "OutIntAccID", (await $.wcall([$t1, $t2], "GetParameter", [46], C)), { get: async () => L0["outintaccid"], set: async (v) => { L0["outintaccid"] = v; }, local: true });
      await $.wset([$t1, $t2], "crdlineoblAccID", (await $.wcall([$t1, $t2], "GetParameter", [47], C)), { get: async () => L0["crdlineoblaccid"], set: async (v) => { L0["crdlineoblaccid"] = v; }, local: true });
      await $.wset([$t1, $t2], "IPrResAccID", (await $.wcall([$t1, $t2], "GetParameter", [49], C)), { get: async () => L0["iprresaccid"], set: async (v) => { L0["iprresaccid"] = v; }, local: true });
      await $.wset([$t1, $t2], "IPrPurResAccID", (await $.wcall([$t1, $t2], "GetParameter", [50], C)), { get: async () => L0["iprpurresaccid"], set: async (v) => { L0["iprpurresaccid"] = v; }, local: true });
      await $.mcall((await $.wv([$t1, $t2], "LoanAccs", C, false)), "RefResh", []);
      await $.mcall((await $.wv([$t1, $t2], "PReserveAccs", C, false)), "Refresh", []);
      await $.mcall((await $.wv([$t1, $t2], "CustAccs", C, false)), "Refresh", []);
      await $.mcall((await $.wv([$t1, $t2], "PercentAccounts", C, false)), "Refresh", []);
      await $.mcall((await $.wv([$t1, $t2], "Interests", C, false)), "Refresh", []);
      await $.mcall((await $.wv([$t1, $t2], "DueInterests", C, false)), "Refresh", []);
      await $.mcall((await $.wv([$t1, $t2], "DueLoanAccs", C, false)), "Refresh", []);
      await $.mcall((await $.wv([$t1, $t2], "SReserveAccs", C, false)), "Refresh", []);
      await $.mcall((await $.wv([$t1, $t2], "OUTObligationAccs", C, false)), "Refresh", []);
      await $.mcall((await $.wv([$t1, $t2], "OUTInterestAccs", C, false)), "Refresh", []);
      await $.mcall((await $.wv([$t1, $t2], "CrdLineoblAccs", C, false)), "Refresh", []);
      await $.mcall((await $.wv([$t1, $t2], "IPReserveAccs", C, false)), "Refresh", []);
      await $.mcall((await $.wv([$t1, $t2], "ISReserveAccs", C, false)), "Refresh", []);
      {
        const $t3 = (await $.wv([$t1, $t2], "ARConclusionForm", C, false));
        if ($.truthy($.ne((await $.wv([$t1, $t2, $t3], "LoanAccID", { get: async () => L0["loanaccid"], set: async (v) => { L0["loanaccid"] = v; }, local: true }, false)), 0))) {
          await $.mset((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "LoanAccs", C, false)), "DataSource")), "DataSet")), "FieldByName", ["LOANACCID"])), "AsInteger", (await $.wv([$t1, $t2, $t3], "LoanAccID", { get: async () => L0["loanaccid"], set: async (v) => { L0["loanaccid"] = v; }, local: true }, false)));
        }
        if ($.truthy($.ne((await $.wv([$t1, $t2, $t3], "BOOROWERACCID", { get: async () => L0["booroweraccid"], set: async (v) => { L0["booroweraccid"] = v; }, local: true }, false)), 0))) {
          await $.mset((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "CustAccno", C, false)), "DataSource")), "DataSet")), "FieldByName", ["BOOROWERACCID"])), "AsInteger", (await $.wv([$t1, $t2, $t3], "BOOROWERACCID", { get: async () => L0["booroweraccid"], set: async (v) => { L0["booroweraccid"] = v; }, local: true }, false)));
        }
        if ($.truthy($.ne((await $.wv([$t1, $t2, $t3], "PrResAccID", { get: async () => L0["prresaccid"], set: async (v) => { L0["prresaccid"] = v; }, local: true }, false)), 0))) {
          await $.mset((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "ReserveAccno", C, false)), "DataSource")), "DataSet")), "FieldByName", ["PRIMARYRESERVEACCID"])), "AsInteger", (await $.wv([$t1, $t2, $t3], "PrResAccID", { get: async () => L0["prresaccid"], set: async (v) => { L0["prresaccid"] = v; }, local: true }, false)));
        }
        if ($.truthy($.ne((await $.wv([$t1, $t2, $t3], "PrPurResAccID", { get: async () => L0["prpurresaccid"], set: async (v) => { L0["prpurresaccid"] = v; }, local: true }, false)), 0))) {
          await $.mset((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "PurReserveAccno", C, false)), "DataSource")), "DataSet")), "FieldByName", ["PRIMARYPURRESERVEACCID"])), "AsInteger", (await $.wv([$t1, $t2, $t3], "PrPurResAccID", { get: async () => L0["prpurresaccid"], set: async (v) => { L0["prpurresaccid"] = v; }, local: true }, false)));
        }
        if ($.truthy($.ne((await $.wv([$t1, $t2, $t3], "IntAccID", { get: async () => L0["intaccid"], set: async (v) => { L0["intaccid"] = v; }, local: true }, false)), 0))) {
          await $.mset((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "IntAccno", C, false)), "DataSource")), "DataSet")), "FieldByName", ["INTERESTACCID"])), "AsInteger", (await $.wv([$t1, $t2, $t3], "IntAccID", { get: async () => L0["intaccid"], set: async (v) => { L0["intaccid"] = v; }, local: true }, false)));
        }
        if ($.truthy($.ne((await $.wv([$t1, $t2, $t3], "DUELOANACCID", { get: async () => L0["dueloanaccid"], set: async (v) => { L0["dueloanaccid"] = v; }, local: true }, false)), 0))) {
          await $.mset((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "DueLoanAccno", C, false)), "DataSource")), "DataSet")), "FieldByName", ["DUELOANACCID"])), "AsInteger", (await $.wv([$t1, $t2, $t3], "DUELOANACCID", { get: async () => L0["dueloanaccid"], set: async (v) => { L0["dueloanaccid"] = v; }, local: true }, false)));
        }
        if ($.truthy($.ne((await $.wv([$t1, $t2, $t3], "SecResAccID", { get: async () => L0["secresaccid"], set: async (v) => { L0["secresaccid"] = v; }, local: true }, false)), 0))) {
          await $.mset((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "DBLookupComboboxEh15", C, false)), "DataSource")), "DataSet")), "FieldByName", ["SECONDARYRESERVEACCID"])), "AsInteger", (await $.wv([$t1, $t2, $t3], "SecResAccID", { get: async () => L0["secresaccid"], set: async (v) => { L0["secresaccid"] = v; }, local: true }, false)));
        }
        if ($.truthy($.ne((await $.wv([$t1, $t2, $t3], "SecPurResAccID", { get: async () => L0["secpurresaccid"], set: async (v) => { L0["secpurresaccid"] = v; }, local: true }, false)), 0))) {
          await $.mset((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "DBLookupComboboxEh23", C, false)), "DataSource")), "DataSet")), "FieldByName", ["SECONDARYPURRESERVEACCID"])), "AsInteger", (await $.wv([$t1, $t2, $t3], "SecPurResAccID", { get: async () => L0["secpurresaccid"], set: async (v) => { L0["secpurresaccid"] = v; }, local: true }, false)));
        }
        if ($.truthy($.ne((await $.wv([$t1, $t2, $t3], "DueIntAccID", { get: async () => L0["dueintaccid"], set: async (v) => { L0["dueintaccid"] = v; }, local: true }, false)), 0))) {
          await $.mset((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "DueIntAccno", C, false)), "DataSource")), "DataSet")), "FieldByName", ["DUEINTERESTACCID"])), "AsInteger", (await $.wv([$t1, $t2, $t3], "DueIntAccID", { get: async () => L0["dueintaccid"], set: async (v) => { L0["dueintaccid"] = v; }, local: true }, false)));
        }
        if ($.truthy($.ne((await $.wv([$t1, $t2, $t3], "OutPledgAccID", { get: async () => L0["outpledgaccid"], set: async (v) => { L0["outpledgaccid"] = v; }, local: true }, false)), 0))) {
          await $.mset((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "DBLookupComboboxEh17", C, false)), "DataSource")), "DataSet")), "FieldByName", ["OUTCOLLATERALACCID"])), "AsInteger", (await $.wv([$t1, $t2, $t3], "OutPledgAccID", { get: async () => L0["outpledgaccid"], set: async (v) => { L0["outpledgaccid"] = v; }, local: true }, false)));
        }
        if ($.truthy($.ne((await $.wv([$t1, $t2, $t3], "OutOblAccID", { get: async () => L0["outoblaccid"], set: async (v) => { L0["outoblaccid"] = v; }, local: true }, false)), 0))) {
          await $.mset((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "DBLookupComboboxEh18", C, false)), "DataSource")), "DataSet")), "FieldByName", ["OUTGUARANTEEACCID"])), "AsInteger", (await $.wv([$t1, $t2, $t3], "OutOblAccID", { get: async () => L0["outoblaccid"], set: async (v) => { L0["outoblaccid"] = v; }, local: true }, false)));
        }
        if ($.truthy($.ne((await $.wv([$t1, $t2, $t3], "OUTLOANACCID", { get: async () => L0["outloanaccid"], set: async (v) => { L0["outloanaccid"] = v; }, local: true }, false)), 0))) {
          await $.mset((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "DBLookupComboboxEh22", C, false)), "DataSource")), "DataSet")), "FieldByName", ["OUTLOANACCID"])), "AsInteger", (await $.wv([$t1, $t2, $t3], "OUTLOANACCID", { get: async () => L0["outloanaccid"], set: async (v) => { L0["outloanaccid"] = v; }, local: true }, false)));
        }
        if ($.truthy($.ne((await $.wv([$t1, $t2, $t3], "OutIntAccID", { get: async () => L0["outintaccid"], set: async (v) => { L0["outintaccid"] = v; }, local: true }, false)), 0))) {
          await $.mset((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "DBLookupComboboxEh21", C, false)), "DataSource")), "DataSet")), "FieldByName", ["OUTINTERESTACCID"])), "AsInteger", (await $.wv([$t1, $t2, $t3], "OutIntAccID", { get: async () => L0["outintaccid"], set: async (v) => { L0["outintaccid"] = v; }, local: true }, false)));
        }
        if ($.truthy($.ne((await $.wv([$t1, $t2, $t3], "crdlineoblAccID", { get: async () => L0["crdlineoblaccid"], set: async (v) => { L0["crdlineoblaccid"] = v; }, local: true }, false)), 0))) {
          await $.mset((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "CrdlineoblAccno", C, false)), "DataSource")), "DataSet")), "FieldByName", ["CRDLINEOBLACCID"])), "AsInteger", (await $.wv([$t1, $t2, $t3], "crdlineoblAccID", { get: async () => L0["crdlineoblaccid"], set: async (v) => { L0["crdlineoblaccid"] = v; }, local: true }, false)));
        }
        if ($.truthy($.ne((await $.wv([$t1, $t2, $t3], "IPrResAccID", { get: async () => L0["iprresaccid"], set: async (v) => { L0["iprresaccid"] = v; }, local: true }, false)), 0))) {
          await $.mset((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "DBLookupComboboxEh39", C, false)), "DataSource")), "DataSet")), "FieldByName", ["iprimaryreserveaccid"])), "AsInteger", (await $.wv([$t1, $t2, $t3], "IPrResAccID", { get: async () => L0["iprresaccid"], set: async (v) => { L0["iprresaccid"] = v; }, local: true }, false)));
        }
        if ($.truthy($.ne((await $.wv([$t1, $t2, $t3], "IPrPurResAccID", { get: async () => L0["iprpurresaccid"], set: async (v) => { L0["iprpurresaccid"] = v; }, local: true }, false)), 0))) {
          await $.mset((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "DBLookupComboboxEh40", C, false)), "DataSource")), "DataSet")), "FieldByName", ["isecondaryreserveaccid"])), "AsInteger", (await $.wv([$t1, $t2, $t3], "IPrPurResAccID", { get: async () => L0["iprpurresaccid"], set: async (v) => { L0["iprpurresaccid"] = v; }, local: true }, false)));
        }
      }
      if ($.truthy($.ne((await $.wv([$t1, $t2], "CustID", C, false)), 0))) {
        await $.mcall((await $.wv([$t1, $t2], "Customer", C, false)), "Refresh", []);
        await $.mset((await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t1, $t2], "ArConclusionForm", C, false)), "DBLookupComboboxEh19")), "DataSource")), "DataSet")), "FieldByName", ["BOOROWERID"])), "AsInteger", (await $.wv([$t1, $t2], "CustID", C, false)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCreateCMAccounts", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormCreateCMAccounts", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
