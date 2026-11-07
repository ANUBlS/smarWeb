// Generated from PayImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PayImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CurrencyEdit", "CMCurrencyEdit", "dblookup", "DBCtrls", "Mask", "DBCtrlsEh", "CustAnalysDataModuleImpl", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TPayForm", "TForm", {"label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "cmcurrencyedit1": {"name": "CMCurrencyEdit1", "type": "TCMCurrencyEdit"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "button3": {"name": "Button3", "type": "TButton"}, "label14": {"name": "Label14", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("PayForm", null, "TPayForm");
  });
  U.method("TPayForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": 0, "proc": 0, "b": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCURRENCY")), "AsInteger")), 0))) {
    if ($.truthy((await $.and_(($.ne((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBRANCHID")), "AsInteger")), 0)), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger")), 0)))))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "OraclePackage1")), "CallProcedure", ["execbprocess", ["procid", 5, "custid", 0, "accid_a", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERACCID")), "AsInteger")), "accid_b", (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), "accid_c", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERACCID")), "AsInteger")), "debtamount", (await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), "credamount", (await $.v(C, "null")), "equivamount", (await $.v(C, "null")), "inbalchar", (await $.v(C, "null")), "outbalchar", (await $.v(C, "null")), "tdescription", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetTEY")), "AsString")), "trreportid", (await $.v(C, "null")), "trcountrid", (await $.v(C, "null")), "rate_a", (await $.v(C, "null")), "rate_b", (await $.v(C, "null")), "rate_c", (await $.v(C, "null")), "transactionid", L0["a"], "branch", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBRANCHID")), "AsInteger")), "transactiondate", (await $.v(C, "null")), "currencyid", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCURRENCY")), "AsInteger"))]])));
      L0["b"] = (await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "OraclePackage1")), "GetParameter", ["transactionid"]));
      await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["BORROWERID", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERID")), "AsInteger"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["TRANSID", L0["b"]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["cr", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCREDITID")), "AsInteger"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["usr", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "usrfilFILIALID")), "AsInteger"))])));
      await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "Execute", []);
    }
  }
  if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCURRENCY")), "AsInteger")), 0))) {
    if ($.truthy((await $.and_(($.ne((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBRANCHID")), "AsInteger")), 0)), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger")), 0)))))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "OraclePackage1")), "CallProcedure", ["execbprocess", ["procid", 5, "custid", 0, "accid_a", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERACCID")), "AsInteger")), "accid_b", (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), "accid_c", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERACCID")), "AsInteger")), "debtamount", (await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), "credamount", (await $.v(C, "null")), "equivamount", (await $.v(C, "null")), "inbalchar", (await $.v(C, "null")), "outbalchar", (await $.v(C, "null")), "tdescription", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetTEY")), "AsString")), "trreportid", (await $.v(C, "null")), "trcountrid", (await $.v(C, "null")), "rate_a", (await $.v(C, "null")), "rate_b", (await $.v(C, "null")), "rate_c", (await $.v(C, "null")), "transactionid", L0["a"], "branch", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBRANCHID")), "AsInteger")), "transactiondate", (await $.v(C, "null")), "currencyid", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCURRENCY")), "AsInteger"))]])));
      L0["b"] = (await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "OraclePackage1")), "GetParameter", ["transactionid"]));
      await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["BORROWERID", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERID")), "AsInteger"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["TRANSID", L0["b"]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["cr", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCREDITID")), "AsInteger"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["usr", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "usrfilFILIALID")), "AsInteger"))])));
      await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "Execute", []);
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCURRENCY")), "AsInteger")), 0))) {
    if ($.truthy(($.eq((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBRANCHID")), "AsInteger")), (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger")))))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "OraclePackage1")), "CallProcedure", ["execbprocess", ["procid", 4, "custid", 0, "accid_a", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERACCID")), "AsInteger")), "accid_b", (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), "accid_c", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERACCID")), "AsInteger")), "debtamount", (await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), "credamount", (await $.v(C, "null")), "equivamount", (await $.v(C, "null")), "inbalchar", (await $.v(C, "null")), "outbalchar", (await $.v(C, "null")), "tdescription", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetTEY")), "AsString")), "trreportid", (await $.v(C, "null")), "trcountrid", (await $.v(C, "null")), "rate_a", (await $.v(C, "null")), "rate_b", (await $.v(C, "null")), "rate_c", (await $.v(C, "null")), "transactionid", L0["a"], "branch", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger")), "transactiondate", (await $.v(C, "null")), "currencyid", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCURRENCY")), "AsInteger"))]])));
      L0["b"] = (await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "OraclePackage1")), "GetParameter", ["transactionid"]));
      await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["BORROWERID", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERID")), "AsInteger"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["TRANSID", L0["b"]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["cr", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCREDITID")), "AsInteger"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["usr", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "usrfilFILIALID")), "AsInteger"))])));
      await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "Execute", []);
    }
  }
  if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCURRENCY")), "AsInteger")), 0))) {
    if ($.truthy(($.eq((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBRANCHID")), "AsInteger")), (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger")))))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "OraclePackage1")), "CallProcedure", ["execbprocess", ["procid", 4, "custid", 0, "accid_a", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERACCID")), "AsInteger")), "accid_b", (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), "accid_c", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERACCID")), "AsInteger")), "debtamount", (await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), "credamount", (await $.v(C, "null")), "equivamount", (await $.v(C, "null")), "inbalchar", (await $.v(C, "null")), "outbalchar", (await $.v(C, "null")), "tdescription", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetTEY")), "AsString")), "trreportid", (await $.v(C, "null")), "trcountrid", (await $.v(C, "null")), "rate_a", (await $.v(C, "null")), "rate_b", (await $.v(C, "null")), "rate_c", (await $.v(C, "null")), "transactionid", L0["a"], "branch", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger")), "transactiondate", (await $.v(C, "null")), "currencyid", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCURRENCY")), "AsInteger"))]])));
      L0["b"] = (await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "OraclePackage1")), "GetParameter", ["transactionid"]));
      await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["BORROWERID", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERID")), "AsInteger"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["TRANSID", L0["b"]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["cr", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCREDITID")), "AsInteger"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["usr", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "usrfilFILIALID")), "AsInteger"))])));
      await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "Execute", []);
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCURRENCY")), "AsInteger")), 0))) {
    if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBRANCHID")), "AsInteger")), 0)), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger")), 0)))), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBRANCHID")), "AsInteger")), (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger")))))))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "OraclePackage1")), "CallProcedure", ["execbprocess", ["procid", 9, "custid", 0, "accid_a", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERACCID")), "AsInteger")), "accid_b", (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), "accid_c", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERACCID")), "AsInteger")), "debtamount", (await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), "credamount", (await $.v(C, "null")), "equivamount", (await $.v(C, "null")), "inbalchar", (await $.v(C, "null")), "outbalchar", (await $.v(C, "null")), "tdescription", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetTEY")), "AsString")), "trreportid", (await $.v(C, "null")), "trcountrid", (await $.v(C, "null")), "rate_a", (await $.v(C, "null")), "rate_b", (await $.v(C, "null")), "rate_c", (await $.v(C, "null")), "transactionid", L0["a"], "branch", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger")), "transactiondate", (await $.v(C, "null")), "currencyid", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCURRENCY")), "AsInteger"))]])));
      L0["b"] = (await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "OraclePackage1")), "GetParameter", ["transactionid"]));
      await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["BORROWERID", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERID")), "AsInteger"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["TRANSID", L0["b"]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["cr", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCREDITID")), "AsInteger"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["usr", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "usrfilFILIALID")), "AsInteger"))])));
      await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "Execute", []);
    }
  }
  if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCURRENCY")), "AsInteger")), 0))) {
    if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBRANCHID")), "AsInteger")), 0)), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger")), 0)))), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBRANCHID")), "AsInteger")), (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger")))))))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "OraclePackage1")), "CallProcedure", ["execbprocess", ["procid", 9, "custid", 0, "accid_a", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERACCID")), "AsInteger")), "accid_b", (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), "accid_c", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERACCID")), "AsInteger")), "debtamount", (await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), "credamount", (await $.v(C, "null")), "equivamount", (await $.v(C, "null")), "inbalchar", (await $.v(C, "null")), "outbalchar", (await $.v(C, "null")), "tdescription", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetTEY")), "AsString")), "trreportid", (await $.v(C, "null")), "trcountrid", (await $.v(C, "null")), "rate_a", (await $.v(C, "null")), "rate_b", (await $.v(C, "null")), "rate_c", (await $.v(C, "null")), "transactionid", L0["a"], "branch", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger")), "transactiondate", (await $.v(C, "null")), "currencyid", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCURRENCY")), "AsInteger"))]])));
      L0["b"] = (await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "OraclePackage1")), "GetParameter", ["transactionid"]));
      await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["BORROWERID", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERID")), "AsInteger"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["TRANSID", L0["b"]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["cr", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCREDITID")), "AsInteger"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["usr", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "usrfilFILIALID")), "AsInteger"))])));
      await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "Execute", []);
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCURRENCY")), "AsInteger")), 0))) {
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBRANCHID")), "AsInteger")), 0)), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger")), 0)))))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "OraclePackage1")), "CallProcedure", ["execbprocess", ["procid", 7, "custid", 0, "accid_a", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERACCID")), "AsInteger")), "accid_b", (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), "accid_c", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERACCID")), "AsInteger")), "debtamount", (await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), "credamount", (await $.v(C, "null")), "equivamount", (await $.v(C, "null")), "inbalchar", (await $.v(C, "null")), "outbalchar", (await $.v(C, "null")), "tdescription", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetTEY")), "AsString")), "trreportid", (await $.v(C, "null")), "trcountrid", (await $.v(C, "null")), "rate_a", (await $.v(C, "null")), "rate_b", (await $.v(C, "null")), "rate_c", (await $.v(C, "null")), "transactionid", L0["a"], "branch", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger")), "transactiondate", (await $.v(C, "null")), "currencyid", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCURRENCY")), "AsInteger"))]])));
      L0["b"] = (await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "OraclePackage1")), "GetParameter", ["transactionid"]));
      await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["BORROWERID", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERID")), "AsInteger"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["TRANSID", L0["b"]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["cr", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCREDITID")), "AsInteger"))])));
      await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "Execute", []);
    }
  }
  if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCURRENCY")), "AsInteger")), 0))) {
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBRANCHID")), "AsInteger")), 0)), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger")), 0)))))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "OraclePackage1")), "CallProcedure", ["execbprocess", ["procid", 8, "custid", 0, "accid_a", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERACCID")), "AsInteger")), "accid_b", (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), "accid_c", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERACCID")), "AsInteger")), "debtamount", (await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), "credamount", (await $.v(C, "null")), "equivamount", (await $.v(C, "null")), "inbalchar", (await $.v(C, "null")), "outbalchar", (await $.v(C, "null")), "tdescription", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetTEY")), "AsString")), "trreportid", (await $.v(C, "null")), "trcountrid", (await $.v(C, "null")), "rate_a", (await $.v(C, "null")), "rate_b", (await $.v(C, "null")), "rate_c", (await $.v(C, "null")), "transactionid", L0["a"], "branch", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger")), "transactiondate", (await $.v(C, "null")), "currencyid", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCURRENCY")), "AsInteger"))]])));
      L0["b"] = (await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "OraclePackage1")), "GetParameter", ["transactionid"]));
      await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["BORROWERID", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERID")), "AsInteger"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["TRANSID", L0["b"]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["cr", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCREDITID")), "AsInteger"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["usr", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "usrfilFILIALID")), "AsInteger"))])));
      await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "Execute", []);
    }
  }
  await $.stmt((await $.call(C, "ShowMessage", ["Ödəniş qəbul olundu  "])));
  await $.mcall((await $.v(C, "PayForm")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayForm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayForm", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "user_name": '', "a": 0, "proc": 0, "b": 0, "p_busid": 0, "p_filial": 0, "debtid_a": 0, "creditid_b": 0, "creditid_ab": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBRANCHID")), "AsInteger")), (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger")))))) {
    L0["debtid_a"] = (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"));
    L0["creditid_b"] = (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERACCID")), "AsInteger"));
    L0["creditid_ab"] = (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERACCID")), "AsInteger"));
    L0["p_filial"] = (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBRANCHID")), "AsInteger"));
    {
      const $t1 = (await $.wobj(C, "CustAnalysDataModule"));
      const $t2 = (await $.wv([$t1], "ODS_Bus_payment", C, false));
      await $.stmt($.wcall([$t1, $t2], "close", [], C));
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["v_trtype", "F=F"], C)));
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["v_currency", (await $.mv((await $.mv((await $.wv([$t1, $t2], "CustAnalysDataModule", C, false)), "CreditAnalysDataSetCURRENCY")), "AsInteger"))], C)));
      await $.stmt($.wcall([$t1, $t2], "open", [], C));
      await $.wset([$t1, $t2], "p_busid", (await $.mv((await $.mv((await $.wv([$t1, $t2], "CustAnalysDataModule", C, false)), "ODS_Bus_paymentBUROC_ID")), "asinteger")), { get: async () => L0["p_busid"], set: async (v) => { L0["p_busid"] = v; }, local: true });
      await $.wset([$t1, $t2], "user_name", (await $.mv((await $.mv((await $.wv([$t1, $t2], "CustAnalysDataModule", C, false)), "ODS_Bus_paymentUSERNAME")), "asstring")), { get: async () => L0["user_name"], set: async (v) => { L0["user_name"] = v; }, local: true });
    }
  }
  if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBRANCHID")), "AsInteger")), (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger")))), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger")), 0)))), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBRANCHID")), "AsInteger")), 0)))))) {
    L0["debtid_a"] = (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERACCID")), "AsInteger"));
    L0["creditid_b"] = (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"));
    L0["p_filial"] = (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger"));
    {
      const $t3 = (await $.wobj(C, "CustAnalysDataModule"));
      const $t4 = (await $.wv([$t3], "ODS_Bus_payment", C, false));
      await $.stmt($.wcall([$t3, $t4], "close", [], C));
      await $.stmt((await $.wcall([$t3, $t4], "SetVariable", ["v_trtype", "F<>F"], C)));
      await $.stmt((await $.wcall([$t3, $t4], "SetVariable", ["v_currency", (await $.mv((await $.mv((await $.wv([$t3, $t4], "CustAnalysDataModule", C, false)), "CreditAnalysDataSetCURRENCY")), "AsInteger"))], C)));
      await $.stmt($.wcall([$t3, $t4], "open", [], C));
      await $.wset([$t3, $t4], "p_busid", (await $.mv((await $.mv((await $.wv([$t3, $t4], "CustAnalysDataModule", C, false)), "ODS_Bus_paymentBUROC_ID")), "asinteger")), { get: async () => L0["p_busid"], set: async (v) => { L0["p_busid"] = v; }, local: true });
      await $.wset([$t3, $t4], "user_name", (await $.mv((await $.mv((await $.wv([$t3, $t4], "CustAnalysDataModule", C, false)), "ODS_Bus_paymentUSERNAME")), "asstring")), { get: async () => L0["user_name"], set: async (v) => { L0["user_name"] = v; }, local: true });
    }
  }
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBRANCHID")), "AsInteger")), (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger")))), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger")), 0)))))) {
    L0["debtid_a"] = (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERACCID")), "AsInteger"));
    L0["creditid_b"] = (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"));
    L0["p_filial"] = (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger"));
    {
      const $t5 = (await $.wobj(C, "CustAnalysDataModule"));
      const $t6 = (await $.wv([$t5], "ODS_Bus_payment", C, false));
      await $.stmt($.wcall([$t5, $t6], "close", [], C));
      await $.stmt((await $.wcall([$t5, $t6], "SetVariable", ["v_trtype", "F<>B"], C)));
      await $.stmt((await $.wcall([$t5, $t6], "SetVariable", ["v_currency", (await $.mv((await $.mv((await $.wv([$t5, $t6], "CustAnalysDataModule", C, false)), "CreditAnalysDataSetCURRENCY")), "AsInteger"))], C)));
      await $.stmt($.wcall([$t5, $t6], "open", [], C));
      await $.wset([$t5, $t6], "p_busid", (await $.mv((await $.mv((await $.wv([$t5, $t6], "CustAnalysDataModule", C, false)), "ODS_Bus_paymentBUROC_ID")), "asinteger")), { get: async () => L0["p_busid"], set: async (v) => { L0["p_busid"] = v; }, local: true });
      await $.wset([$t5, $t6], "user_name", (await $.mv((await $.mv((await $.wv([$t5, $t6], "CustAnalysDataModule", C, false)), "ODS_Bus_paymentUSERNAME")), "asstring")), { get: async () => L0["user_name"], set: async (v) => { L0["user_name"] = v; }, local: true });
    }
  }
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBRANCHID")), "AsInteger")), (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger")))), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBRANCHID")), "AsInteger")), 0)))))) {
    L0["debtid_a"] = (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERACCID")), "AsInteger"));
    L0["creditid_b"] = (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"));
    L0["p_filial"] = (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetUSERFIL")), "AsInteger"));
    {
      const $t7 = (await $.wobj(C, "CustAnalysDataModule"));
      const $t8 = (await $.wv([$t7], "ODS_Bus_payment", C, false));
      await $.stmt($.wcall([$t7, $t8], "close", [], C));
      await $.stmt((await $.wcall([$t7, $t8], "SetVariable", ["v_trtype", "B<>F"], C)));
      await $.stmt((await $.wcall([$t7, $t8], "SetVariable", ["v_currency", (await $.mv((await $.mv((await $.wv([$t7, $t8], "CustAnalysDataModule", C, false)), "CreditAnalysDataSetCURRENCY")), "AsInteger"))], C)));
      await $.stmt($.wcall([$t7, $t8], "open", [], C));
      await $.wset([$t7, $t8], "p_busid", (await $.mv((await $.mv((await $.wv([$t7, $t8], "CustAnalysDataModule", C, false)), "ODS_Bus_paymentBUROC_ID")), "asinteger")), { get: async () => L0["p_busid"], set: async (v) => { L0["p_busid"] = v; }, local: true });
      await $.wset([$t7, $t8], "user_name", (await $.mv((await $.mv((await $.wv([$t7, $t8], "CustAnalysDataModule", C, false)), "ODS_Bus_paymentUSERNAME")), "asstring")), { get: async () => L0["user_name"], set: async (v) => { L0["user_name"] = v; }, local: true });
    }
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "OraclePackage1")), "CallProcedure", ["execbprocess", ["procid", L0["p_busid"], "custid", 0, "accid_a", L0["debtid_a"], "accid_b", L0["creditid_b"], "accid_c", 0, "debtamount", (await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), "credamount", (await $.v(C, "null")), "equivamount", (await $.v(C, "null")), "inbalchar", (await $.v(C, "null")), "outbalchar", (await $.v(C, "null")), "tdescription", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetTEY")), "AsString")), "trreportid", (await $.v(C, "null")), "trcountrid", (await $.v(C, "null")), "rate_a", (await $.v(C, "null")), "rate_b", (await $.v(C, "null")), "rate_c", (await $.v(C, "null")), "transactionid", L0["a"], "branch", L0["p_filial"], "transactiondate", (await $.v(C, "null")), "currencyid", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCURRENCY")), "AsInteger")), "userinsert", L0["user_name"]]])));
  L0["b"] = (await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "OraclePackage1")), "GetParameter", ["transactionid"]));
  await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["BORROWERID", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERID")), "AsInteger"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["TRANSID", L0["b"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["cr", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCREDITID")), "AsInteger"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "SetVariable", ["usr", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "usrfilFILIALID")), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returnquery")), "Execute", []);
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  await $.stmt((await $.call(C, "ShowMessage", ["Ödəniş qəbul olundu  "])));
  await $.mcall((await $.v(C, "PayForm")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TPayForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "CMCurrencyEdit1")), "Clear", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TPayForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.wobj(C, "CustAnalysDataModule"));
    await $.mcall((await $.wv([$t9], "bnkacc", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t9], "bnkacc", C, false)), "SetVariable", ["v_valacc", (await $.mv((await $.wv([$t9], "CreditAnalysDataSetCURRENCY", C, false)), "AsInteger"))])));
    await $.mcall((await $.wv([$t9], "bnkacc", C, false)), "open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
