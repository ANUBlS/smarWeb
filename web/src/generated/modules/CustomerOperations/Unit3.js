// Generated from Unit3.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit3", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCtrls", "StdCtrls", "Buttons", "ExtCtrls", "ActnList", "Db", "OracleData", "Oracle", "Mask", "BookmarkSetup", "CO_AccFlags", "CO_AccSettings_Unit", "CO_BookmarkAddEditunt", "CO_Choose_unit", "CO_datamod_impl", "CO_frmWReportImpl", "CO_In_Unit", "CO_Interval_unit", "co_memorial", "CO_MemorialRep1_unit", "co_order_qrep_unit", "co_Order_Rep_unit", "co_properties_unit", "co_report_unit", "CO_reportUnit", "co_st_check", "CO_Statement_impl", "CO_TemplateAddEditUnt", "CO_Transact_Unitp", "CurrencyToHR_Azeri_Impl", "CustInfoFormImpl", "customer_operations_TLB", "customers_operation_impl", "FormAcc_Unit", "MemorialRep", "P_AccState_Unit", "P_AccTransaction_Unit", "P_Interval_Unit", "Rep_unit", "RepR_unit", "transview_unit", "uAccViewFormImpl", "UnitBProc", "UnitCustProps", "uTrViewFormImpl", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TForm3", "TForm", {"actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actioninsert": {"name": "ActionInsert", "type": "TAction"}, "actionupdate": {"name": "ActionUpdate", "type": "TAction"}, "actiondelete": {"name": "ActionDelete", "type": "TAction"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "eissuedby": {"name": "EIssuedBy", "type": "TEdit"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "epersondoc": {"name": "EPersonDoc", "type": "TEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "efromwhen": {"name": "EFromWhen", "type": "TEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "eseria": {"name": "ESeria", "type": "TEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "edocnumber": {"name": "EDocNumber", "type": "TEdit"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "dblookupcashinfo": {"name": "DBLookupCashInfo", "type": "TDBLookupComboBox"}, "browsecashinfo": {"name": "BrowseCashInfo", "type": "TOracleDataSet"}, "databrowsecashinfo": {"name": "DataBrowseCashInfo", "type": "TDataSource"}, "opcash": {"name": "OPCash", "type": "TOraclePackage"}, "browsecashinfoissuedby": {"name": "BrowseCashInfoISSUEDBY", "type": "TStringField"}, "browsecashinfoid": {"name": "BrowseCashInfoID", "type": "TFloatField"}, "browsecashinfoperson_doc": {"name": "BrowseCashInfoPERSON_DOC", "type": "TStringField"}, "browsecashinfoseria": {"name": "BrowseCashInfoSERIA", "type": "TStringField"}, "browsecashinfodocnumber": {"name": "BrowseCashInfoDOCNUMBER", "type": "TStringField"}, "browsecashinfofromwhen": {"name": "BrowseCashInfoFROMWHEN", "type": "TStringField"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "edit1": {"name": "Edit1", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("Form3", null, "TForm3");
  });
  U.method("TForm3", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "OPCash")), "CallProcedure", ["add_CashInfo", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Transactions")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.v(C, "EPersonDoc")), "text")), (await $.mv((await $.v(C, "EIssuedBy")), "text")), (await $.mv((await $.v(C, "ESeria")), "text")), (await $.mv((await $.v(C, "EDocNumber")), "text")), (await $.mv((await $.v(C, "EFromWhen")), "text"))]])));
  { const $t1 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TEdit")))) {
        await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "text", "");
      }
      await $.tick();
    }
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm3", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "OPCash")), "CallProcedure", ["update_CashInfo", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Transactions")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.v(C, "EPersonDoc")), "text")), (await $.mv((await $.v(C, "EIssuedBy")), "text")), (await $.mv((await $.v(C, "ESeria")), "text")), (await $.mv((await $.v(C, "EDocNumber")), "text")), (await $.mv((await $.v(C, "EFromWhen")), "text"))]])));
  await $.mcall((await $.v(C, "BrowseCashInfo")), "Refresh", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm3", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "OPCash")), "CallProcedure", ["delete_CashInfo", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Transactions")), "FieldByName", ["ID"])), "AsInteger"))]])));
  await $.mcall((await $.v(C, "BrowseCashInfo")), "Refresh", []);
  { const $t3 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t4 = true;
    for (;;) {
      if (!$t4) { L0["i"] = $.succ(L0["i"], 1); }
      $t4 = false;
      if (!($.ord(L0["i"]) <= $.ord($t3))) break;
      if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TEdit")))) {
        await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "text", "");
      }
      await $.tick();
    }
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm3", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm3", "DBLookupCashInfoClick", async function DBLookupCashInfoClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (L0["sender"]);
    const $t6 = (await $.wv([$t5], "ListSource", C, false));
    const $t7 = (await $.wv([$t5, $t6], "DataSet", C, false));
    await $.mset((await $.wv([$t5, $t6, $t7], "EIssuedBy", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6, $t7], "FieldByName", ["IssuedBy"], C)), "AsString")));
    await $.mset((await $.wv([$t5, $t6, $t7], "EPersonDoc", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6, $t7], "FieldByName", ["Person_Doc"], C)), "AsString")));
    await $.mset((await $.wv([$t5, $t6, $t7], "EFromWhen", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6, $t7], "FieldByName", ["FromWhen"], C)), "AsString")));
    await $.mset((await $.wv([$t5, $t6, $t7], "ESeria", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6, $t7], "FieldByName", ["Seria"], C)), "AsString")));
    await $.mset((await $.wv([$t5, $t6, $t7], "EDocNumber", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6, $t7], "FieldByName", ["DocNumber"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm3", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t8 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t9 = true;
    for (;;) {
      if (!$t9) { L0["i"] = $.succ(L0["i"], 1); }
      $t9 = false;
      if (!($.ord(L0["i"]) <= $.ord($t8))) break;
      if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TEdit")))) {
        await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "text", "");
      }
      await $.tick();
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "browsecashinfo")), "Active")), false))) {
    await $.mcall((await $.v(C, "browsecashinfo")), "open", []);
  }
  await $.mset((await $.mv((await $.v(C, "co_datamod")), "dscashinfo")), "active", false);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "co_datamod")), "dscashinfo")), "SetVariable", [":id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "co_datamod")), "Transactions")), "fieldbyname", ["id"])), "asinteger"))])));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "co_datamod")), "dscashinfo")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "co_datamod")), "dscashinfo")), "Open", []);
  }
  await $.mcall((await $.mv((await $.v(C, "co_datamod")), "dscashinfo")), "refresh", []);
  await $.mcall((await $.v(C, "browsecashinfo")), "Refresh", []);
  if ($.truthy($.not(((await $.mv((await $.mv((await $.v(C, "co_datamod")), "dscashinfo")), "IsEmpty")))))) {
    {
      const $t10 = (await $.mv((await $.v(C, "co_datamod")), "dscashinfo"));
      await $.mset((await $.wv([$t10], "EPersonDoc", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["Person_doc"], C)), "AsString")));
      await $.mset((await $.wv([$t10], "EIssuedBy", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["IssuedBy"], C)), "AsString")));
      await $.mset((await $.wv([$t10], "ESeria", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["Seria"], C)), "AsString")));
      await $.mset((await $.wv([$t10], "EDocNumber", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["DocNumber"], C)), "AsString")));
      await $.mset((await $.wv([$t10], "EFromWhen", C, false)), "Text", (await $.mv((await $.wcall([$t10], "FieldByName", ["FromWhen"], C)), "AsString")));
    }
  }
  await $.mset((await $.v(C, "bitbtn1")), "Enabled", (await $.mv((await $.mv((await $.v(C, "co_datamod")), "dscashinfo")), "IsEmpty")));
  await $.mset((await $.v(C, "bitbtn2")), "Enabled", $.not((await $.mv((await $.mv((await $.v(C, "co_datamod")), "dscashinfo")), "IsEmpty"))));
  await $.mset((await $.v(C, "bitbtn3")), "Enabled", $.not((await $.mv((await $.mv((await $.v(C, "co_datamod")), "dscashinfo")), "IsEmpty"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm3", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  return U;
}
