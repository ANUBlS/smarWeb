// Generated from UnitOrderInfo.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitOrderInfo", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCtrls", "StdCtrls", "Buttons", "ExtCtrls", "ActnList", "Db", "OracleData", "Oracle", "Mask", "XPMan", "BookmarkSetup", "CO_AccFlags", "CO_AccSettings_Unit", "CO_BookmarkAddEditunt", "CO_Choose_unit", "CO_datamod_impl", "CO_frmWReportImpl", "CO_In_Unit", "CO_Interval_unit", "co_memorial", "CO_MemorialRep1_unit", "co_order_qrep_unit", "co_Order_Rep_unit", "co_properties_unit", "co_report_unit", "CO_reportUnit", "co_st_check", "CO_Statement_impl", "CO_TemplateAddEditUnt", "CO_Transact_Unitp", "CurrencyToHR_Azeri_Impl", "CustInfoFormImpl", "customer_operations_TLB", "customers_operation_impl", "FormAcc_Unit", "MemorialRep", "P_AccState_Unit", "P_AccTransaction_Unit", "P_Interval_Unit", "Rep_unit", "RepR_unit", "transview_unit", "uAccViewFormImpl", "UnitBProc", "UnitCustProps", "uTrViewFormImpl", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormOrderInfo", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "eissuedby": {"name": "EIssuedBy", "type": "TEdit"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "epersondoc": {"name": "EPersonDoc", "type": "TEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "efromwhen": {"name": "EFromWhen", "type": "TEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "eseria": {"name": "ESeria", "type": "TEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "edocnumber": {"name": "EDocNumber", "type": "TEdit"}, "dblookupcashinfo": {"name": "DBLookupCashInfo", "type": "TDBLookupComboBox"}, "browsecashinfo": {"name": "BrowseCashInfo", "type": "TOracleDataSet"}, "databrowsecashinfo": {"name": "DataBrowseCashInfo", "type": "TDataSource"}, "opcash": {"name": "OPCash", "type": "TOraclePackage"}, "browsecashinfoid": {"name": "BrowseCashInfoID", "type": "TFloatField"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "browsecashinfoissuedby": {"name": "BrowseCashInfoISSUEDBY", "type": "TWideStringField"}, "browsecashinfoperson_doc": {"name": "BrowseCashInfoPERSON_DOC", "type": "TWideStringField"}, "browsecashinfoseria": {"name": "BrowseCashInfoSERIA", "type": "TWideStringField"}, "browsecashinfodocnumber": {"name": "BrowseCashInfoDOCNUMBER", "type": "TWideStringField"}, "browsecashinfofromwhen": {"name": "BrowseCashInfoFROMWHEN", "type": "TWideStringField"}, "dsetcustinfo": {"name": "DSetCustInfo", "type": "TOracleDataSet"}, "dsetcustinfoid": {"name": "DSetCustInfoID", "type": "TIntegerField"}, "dsetcustinfoname": {"name": "DSetCustInfoNAME", "type": "TWideStringField"}, "dsetcustinfoshort_name": {"name": "DSetCustInfoSHORT_NAME", "type": "TWideStringField"}, "dsetcustinfocustinfo_id": {"name": "DSetCustInfoCUSTINFO_ID", "type": "TFloatField"}, "dsetcustinfosaa": {"name": "DSetCustInfoSAA", "type": "TWideStringField"}, "dsetcustinfopasser": {"name": "DSetCustInfoPASSER", "type": "TWideStringField"}, "dsetcustinfopaspnum": {"name": "DSetCustInfoPASPNUM", "type": "TWideStringField"}, "dsetcustinfodoc_type": {"name": "DSetCustInfoDOC_TYPE", "type": "TFloatField"}, "dsetcustinfopaspplace": {"name": "DSetCustInfoPASPPLACE", "type": "TWideStringField"}, "btnadd": {"name": "BtnAdd", "type": "TBitBtn"}, "btnedit": {"name": "BtnEdit", "type": "TBitBtn"}, "btndel": {"name": "BtnDel", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("FormOrderInfo", null, "TFormOrderInfo");
  });
  U.method("TFormOrderInfo", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOrderInfo", "DBLookupCashInfoClick", async function DBLookupCashInfoClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (L0["sender"]);
    const $t2 = (await $.wv([$t1], "ListSource", C, false));
    const $t3 = (await $.wv([$t1, $t2], "DataSet", C, false));
    await $.mset((await $.wv([$t1, $t2, $t3], "EIssuedBy", C, false)), "Text", (await $.mv((await $.wcall([$t1, $t2, $t3], "FieldByName", ["IssuedBy"], C)), "AsString")));
    await $.mset((await $.wv([$t1, $t2, $t3], "EPersonDoc", C, false)), "Text", (await $.mv((await $.wcall([$t1, $t2, $t3], "FieldByName", ["Person_Doc"], C)), "AsString")));
    await $.mset((await $.wv([$t1, $t2, $t3], "EFromWhen", C, false)), "Text", (await $.mv((await $.wcall([$t1, $t2, $t3], "FieldByName", ["FromWhen"], C)), "AsString")));
    await $.mset((await $.wv([$t1, $t2, $t3], "ESeria", C, false)), "Text", (await $.mv((await $.wcall([$t1, $t2, $t3], "FieldByName", ["Seria"], C)), "AsString")));
    await $.mset((await $.wv([$t1, $t2, $t3], "EDocNumber", C, false)), "Text", (await $.mv((await $.wcall([$t1, $t2, $t3], "FieldByName", ["DocNumber"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOrderInfo", "EDocNumberChange", async function EDocNumberChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_((await $.and_((await $.and_(($.eq((await $.mv((await $.v(C, "EIssuedBy")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "EPersonDoc")), "Text")), "")))), async () => ($.eq((await $.mv((await $.v(C, "ESeria")), "Text")), "")))), async () => ($.eq((await $.mv((await $.v(C, "EFromWhen")), "Text")), "")))))) {
    await $.mset((await $.v(C, "DSetCustInfo")), "Filtered", false);
    await $.mset((await $.v(C, "DSetCustInfo")), "Filter", $.add($.add("paspnum= '", (await $.mv((await $.v(C, "EDocNumber")), "Text"))), "'"));
    await $.mset((await $.v(C, "DSetCustInfo")), "Filtered", true);
    await $.mset((await $.v(C, "EIssuedBy")), "Text", (await $.mv((await $.mcall((await $.v(C, "DSetCustInfo")), "FieldByName", ["SAA"])), "AsWideString")));
    await $.mset((await $.v(C, "EPersonDoc")), "Text", (await $.mv((await $.mcall((await $.v(C, "DSetCustInfo")), "FieldByName", ["DOC_TYPE"])), "AsWideString")));
    await $.mset((await $.v(C, "ESeria")), "Text", (await $.mv((await $.mcall((await $.v(C, "DSetCustInfo")), "FieldByName", ["PASSER"])), "AsWideString")));
    await $.mset((await $.v(C, "EFromWhen")), "Text", (await $.mv((await $.mcall((await $.v(C, "DSetCustInfo")), "FieldByName", ["PASPPLACE"])), "AsWideString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOrderInfo", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "BrowseCashInfo")), "Active")), false))) {
    await $.mcall((await $.v(C, "BrowseCashInfo")), "open", []);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DSetCustInfo")), "Active")), false))) {
    await $.mcall((await $.v(C, "DSetCustInfo")), "open", []);
  }
  if ($.truthy((await $.mcall((await $.v(C, "BrowseCashInfo")), "Locate", ["ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Transactions")), "FieldByName", ["ID"])), "AsInteger")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])))) {
    {
      const $t4 = (await $.v(C, "BrowseCashInfo"));
      await $.mset((await $.wv([$t4], "EPersonDoc", C, false)), "Text", (await $.mv((await $.wcall([$t4], "FieldByName", ["Person_doc"], C)), "AsWideString")));
      await $.mset((await $.wv([$t4], "EIssuedBy", C, false)), "Text", (await $.mv((await $.wcall([$t4], "FieldByName", ["IssuedBy"], C)), "AsWideString")));
      await $.mset((await $.wv([$t4], "ESeria", C, false)), "Text", (await $.mv((await $.wcall([$t4], "FieldByName", ["Seria"], C)), "AsWideString")));
      await $.mset((await $.wv([$t4], "EDocNumber", C, false)), "Text", (await $.mv((await $.wcall([$t4], "FieldByName", ["DocNumber"], C)), "AsWideString")));
      await $.mset((await $.wv([$t4], "EFromWhen", C, false)), "Text", (await $.mv((await $.wcall([$t4], "FieldByName", ["FromWhen"], C)), "AsWideString")));
      await $.mset((await $.wv([$t4], "BtnAdd", C, false)), "Enabled", (await $.wv([$t4], "False", C, false)));
    }
  } else {
    await $.mset((await $.v(C, "BtnAdd")), "Enabled", true);
    await $.mset((await $.v(C, "EPersonDoc")), "Text", "");
    await $.mset((await $.v(C, "EIssuedBy")), "Text", "");
    await $.mset((await $.v(C, "ESeria")), "Text", "");
    await $.mset((await $.v(C, "EDocNumber")), "Text", "");
    await $.mset((await $.v(C, "EFromWhen")), "Text", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOrderInfo", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormOrderInfo", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOrderInfo", "BtnAddClick", async function BtnAddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "OPCash")), "CallProcedure", ["add_CashInfo", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Transactions")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.v(C, "EPersonDoc")), "Text")), (await $.mv((await $.v(C, "EIssuedBy")), "Text")), (await $.mv((await $.v(C, "ESeria")), "Text")), (await $.mv((await $.v(C, "EDocNumber")), "Text")), (await $.mv((await $.v(C, "EFromWhen")), "Text"))]])));
  await $.mcall((await $.v(C, "BrowseCashInfo")), "Refresh", []);
  { const $t5 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t6 = true;
    for (;;) {
      if (!$t6) { L0["i"] = $.succ(L0["i"], 1); }
      $t6 = false;
      if (!($.ord(L0["i"]) <= $.ord($t5))) break;
      if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TEdit")))) {
        await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Text", "");
      }
      await $.tick();
    }
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOrderInfo", "BtnEditClick", async function BtnEditClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "OPCash")), "CallProcedure", ["update_CashInfo", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Transactions")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.v(C, "EPersonDoc")), "Text")), (await $.mv((await $.v(C, "EIssuedBy")), "Text")), (await $.mv((await $.v(C, "ESeria")), "Text")), (await $.mv((await $.v(C, "EDocNumber")), "Text")), (await $.mv((await $.v(C, "EFromWhen")), "Text"))]])));
  await $.mcall((await $.v(C, "BrowseCashInfo")), "Refresh", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOrderInfo", "BtnDelClick", async function BtnDelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "OPCash")), "CallProcedure", ["delete_CashInfo", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Transactions")), "FieldByName", ["ID"])), "AsInteger"))]])));
  await $.mcall((await $.v(C, "BrowseCashInfo")), "Refresh", []);
  { const $t7 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t8 = true;
    for (;;) {
      if (!$t8) { L0["i"] = $.succ(L0["i"], 1); }
      $t8 = false;
      if (!($.ord(L0["i"]) <= $.ord($t7))) break;
      if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TEdit")))) {
        await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Text", "");
      }
      await $.tick();
    }
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
