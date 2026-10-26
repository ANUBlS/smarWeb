// Generated from OrderMgrUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("OrderMgrUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCtrls", "StdCtrls", "Mask", "ComCtrls", "Buttons", "Db", "OracleData", "DBViewComboBox", "SearchEdit", "ExtCtrls", "Grids", "DBGridEh", "ImgList", "ToolWin", "ActnList", "CMExcelExport", "DBGrids", "DatModConstructionImpl", "sboapiDataModuleImpl", "PaymentMgrUnit", "OrderPaymentRepUnit"]);
  const C = [U];
  U.defClass("TOrderForm", "TForm", {"cashdatsrc": {"name": "CashDatSrc", "type": "TDataSource"}, "cash": {"name": "Cash", "type": "TOracleDataSet"}, "paydata": {"name": "PayData", "type": "TOracleDataSet"}, "paydatsrc": {"name": "PayDatSrc", "type": "TDataSource"}, "paydataid": {"name": "PayDataID", "type": "TFloatField"}, "paydatamainamt": {"name": "PayDataMAINAMT", "type": "TFloatField"}, "sysdat": {"name": "SysDat", "type": "TOracleDataSet"}, "sysdattek_dat": {"name": "SysDatTEK_DAT", "type": "TDateTimeField"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnaddpay": {"name": "ActnAddPay", "type": "TAction"}, "actndelpay": {"name": "ActnDelPay", "type": "TAction"}, "actnexport": {"name": "ActnExport", "type": "TAction"}, "actnclose": {"name": "ActnClose", "type": "TAction"}, "paymentsdatsrc": {"name": "PaymentsDatSrc", "type": "TDataSource"}, "payments": {"name": "Payments", "type": "TOracleDataSet"}, "excelexportpayments": {"name": "ExcelExportPayments", "type": "TCMExcelExport"}, "exportpayments": {"name": "ExportPayments", "type": "TOracleDataSet"}, "reportpayorderdatadatsrc": {"name": "ReportPayOrderDataDatSrc", "type": "TDataSource"}, "reportpayorderdata": {"name": "ReportPayOrderData", "type": "TOracleDataSet"}, "aboutbank": {"name": "AboutBank", "type": "TOracleDataSet"}, "aboutbankdatsrc": {"name": "AboutBankDatSrc", "type": "TDataSource"}, "aboutbanklogo": {"name": "AboutBankLOGO", "type": "TBlobField"}, "actnreport": {"name": "ActnReport", "type": "TAction"}, "aboutbankfullbankname": {"name": "AboutBankFULLBANKNAME", "type": "TWideStringField"}, "aboutbankinn": {"name": "AboutBankINN", "type": "TWideStringField"}, "aboutbankmanagertitle": {"name": "AboutBankMANAGERTITLE", "type": "TWideStringField"}, "cashid": {"name": "CashID", "type": "TFloatField"}, "cashacc_no": {"name": "CashACC_NO", "type": "TWideStringField"}, "cashname": {"name": "CashNAME", "type": "TWideStringField"}, "reportpayorderdataid": {"name": "ReportPayOrderDataID", "type": "TFloatField"}, "reportpayorderdatapaydate": {"name": "ReportPayOrderDataPAYDATE", "type": "TDateTimeField"}, "reportpayorderdatapayamt": {"name": "ReportPayOrderDataPAYAMT", "type": "TFloatField"}, "reportpayorderdatacontamount": {"name": "ReportPayOrderDataCONTAMOUNT", "type": "TFloatField"}, "reportpayorderdataloanaccno": {"name": "ReportPayOrderDataLOANACCNO", "type": "TWideStringField"}, "reportpayorderdataclientaccno": {"name": "ReportPayOrderDataCLIENTACCNO", "type": "TWideStringField"}, "reportpayorderdataname": {"name": "ReportPayOrderDataNAME", "type": "TWideStringField"}, "reportpayorderdataopendate": {"name": "ReportPayOrderDataOPENDATE", "type": "TDateTimeField"}, "reportpayorderdataccontractno": {"name": "ReportPayOrderDataCCONTRACTNO", "type": "TWideStringField"}, "reportpayorderdataval_name": {"name": "ReportPayOrderDataVAL_NAME", "type": "TWideStringField"}, "reportpayorderdatadueinterestrate": {"name": "ReportPayOrderDataDUEINTERESTRATE", "type": "TFloatField"}, "reportpayorderdataperiod": {"name": "ReportPayOrderDataPERIOD", "type": "TFloatField"}, "cc_buyer_flats": {"name": "cc_buyer_flats", "type": "TOracleDataSet"}, "cc_buyer_flatsdatadatsrc": {"name": "cc_buyer_flatsDataDatSrc", "type": "TDataSource"}, "cc_buyer_flatsaddress": {"name": "cc_buyer_flatsADDRESS", "type": "TWideStringField"}, "cc_buyer_flatsbld_name": {"name": "cc_buyer_flatsBLD_NAME", "type": "TWideStringField"}, "cc_buyer_flatsid": {"name": "cc_buyer_flatsID", "type": "TFloatField"}, "cc_buyer_flatsflatcode": {"name": "cc_buyer_flatsFLATCODE", "type": "TWideStringField"}, "exportpaymentstarix": {"name": "ExportPaymentsTARIX", "type": "TDateTimeField"}, "exportpaymentsmebleg": {"name": "ExportPaymentsMEBLEG", "type": "TFloatField"}, "exportpaymentsteyinat": {"name": "ExportPaymentsTEYINAT", "type": "TWideStringField"}, "ozzun": {"name": "ozzun", "type": "TCMExcelExport"}, "paymentsid": {"name": "PaymentsID", "type": "TFloatField"}, "paymentspaydate": {"name": "PaymentsPAYDATE", "type": "TDateTimeField"}, "paymentsid2": {"name": "PaymentsID2", "type": "TFloatField"}, "paymentspayamt": {"name": "PaymentsPAYAMT", "type": "TFloatField"}, "paymentsname": {"name": "PaymentsNAME", "type": "TWideStringField"}, "paymentsddd": {"name": "PaymentsDDD", "type": "TWideStringField"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "btnprint": {"name": "BtnPrint", "type": "TBitBtn"}, "btnclose": {"name": "BtnClose", "type": "TBitBtn"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "label3": {"name": "Label3", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("OrderForm", null, "TOrderForm");
  });
  U.method("TOrderForm", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "PaySumDataSet")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "PaySumDataSet")), "SetVariable", ["TID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Credits")), "FieldByName", ["ID"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "PaySumDataSet")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "cc_sum_cols_payments")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "cc_sum_cols_payments")), "SetVariable", ["SID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Credits")), "FieldByName", ["ID"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "cc_sum_cols_payments")), "Open", []);
  await $.mset((await $.v(C, "Edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "cc_sum_cols_payments")), "FieldByName", ["SUM(PAYAMT)"])), "AsString")));
  await $.mset((await $.v(C, "Edit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Credits")), "FieldByName", ["CREDITAMOUNT"])), "AsString")));
  await $.mset((await $.v(C, "Edit3")), "Text", (await $.call(C, "FloatToStr", [$.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Credits")), "FieldByName", ["CREDITAMOUNT"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "cc_sum_cols_payments")), "FieldByName", ["SUM(PAYAMT)"])), "AsFloat")))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOrderForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TOrderForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOrderForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "OrderPaymentRepForm", (await $.mcall((await $.v(C, "TOrderPaymentRepForm")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOrderForm", "ActnAddPayExecute", async function ActnAddPayExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "PaymentAddForm", (await $.mcall((await $.v(C, "TPaymentAddForm")), "Create", [Self])));
  await $.mcall((await $.v(C, "PaymentAddForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOrderForm", "ActnDelPayExecute", async function ActnDelPayExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "selectedrowscnt": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Ödəniş ləğv olunsun?", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t1 = (await $.v(C, "DBGridEh1"));
      const $t2 = (await $.mv((await $.wv([$t1], "DataSource", C, false)), "DataSet"));
      await $.wset([$t1, $t2], "SelectedRowsCnt", (await $.mv((await $.wv([$t1, $t2], "SelectedRows", C, false)), "Count")), { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true });
      if ($.truthy($.gt((await $.wv([$t1, $t2], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1))) {
        { const $t3 = $.sub((await $.wv([$t1, $t2], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1);
          await $.wset([$t1, $t2], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t4 = true;
          for (;;) {
            if (!$t4) { await $.wset([$t1, $t2], "I", $.succ((await $.wv([$t1, $t2], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t4 = false;
            if (!($.ord((await $.wv([$t1, $t2], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t3))) break;
            await $.stmt((await $.wcall([$t1, $t2], "GotoBookmark", [(await $.wcall([$t1, $t2], "Pointer", [(await $.idx((await $.wv([$t1, $t2], "SelectedRows", C, false)), [(await $.wv([$t1, $t2], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            {
              const $t5 = (await $.wv([$t1, $t2], "DatModConstruction", C, false));
              const $t6 = (await $.wv([$t1, $t2, $t5], "sbcm_construction", C, false));
              await $.stmt((await $.wcall([$t1, $t2, $t5, $t6], "CallProcedure", ["deletePayment", ["p_PayID", (await $.mv((await $.mcall((await $.wv([$t1, $t2, $t5, $t6], "Payments", C, false)), "FieldByName", ["ID"])), "AsInteger"))]], C)));
            }
            await $.tick();
          }
        }
      } else {
        {
          const $t7 = (await $.wv([$t1, $t2], "DatModConstruction", C, false));
          const $t8 = (await $.wv([$t1, $t2, $t7], "sbcm_construction", C, false));
          await $.stmt((await $.wcall([$t1, $t2, $t7, $t8], "CallProcedure", ["deletePayment", ["p_PayID", (await $.mv((await $.mcall((await $.wv([$t1, $t2, $t7, $t8], "Payments", C, false)), "FieldByName", ["ID"])), "AsInteger"))]], C)));
        }
      }
    }
  }
  await $.mcall((await $.v(C, "Payments")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOrderForm", "ActnExportExecute", async function ActnExportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.v(C, "Payments"));
    if ($.truthy((await $.wv([$t9], "Active", C, false)))) {
      await $.stmt($.wcall([$t9], "close", [], C));
    }
    await $.stmt((await $.wcall([$t9], "SetVariable", ["CrdID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "DatModConstruction", C, false)), "Credits")), "FieldbyName", ["ID"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t9], "open", [], C));
  }
  {
    const $t10 = (await $.v(C, "ozzun"));
    await $.stmt($.wcall([$t10], "Connect", [], C));
    await $.stmt((await $.wcall([$t10], "ExportDataset", [(await $.wv([$t10], "Payments", C, false)), "Ödənişlər özzün", (await $.wv([$t10], "true", C, false))], C)));
    await $.stmt($.wcall([$t10], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOrderForm", "ActnReportExecute", async function ActnReportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.v(C, "cc_buyer_flats"));
    await $.stmt($.wcall([$t11], "ClearVariables", [], C));
    await $.stmt($.wcall([$t11], "CloseAll", [], C));
    await $.stmt((await $.wcall([$t11], "SetVariable", ["PayID", (await $.mv((await $.mcall((await $.wv([$t11], "Payments", C, false)), "FieldByName", ["ID"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t11], "Open", [], C));
  }
  {
    const $t12 = (await $.v(C, "ReportPayOrderData"));
    await $.stmt($.wcall([$t12], "ClearVariables", [], C));
    await $.stmt($.wcall([$t12], "CloseAll", [], C));
    await $.stmt((await $.wcall([$t12], "SetVariable", ["PayID", (await $.mv((await $.mcall((await $.wv([$t12], "Payments", C, false)), "FieldByName", ["ID"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t12], "Open", [], C));
  }
  await $.mcall((await $.v(C, "AboutBank")), "open", []);
  if ($.truthy($.gt((await $.mv((await $.v(C, "ReportPayOrderData")), "RecordCount")), 0))) {
    {
      const $t13 = (await $.v(C, "OrderPaymentRepForm"));
      await $.mcall((await $.wv([$t13], "ReportOrder", C, false)), "Preview", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOrderForm", "DBGridEh1DblClick", async function DBGridEh1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActnReportExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOrderForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Cash")), "close", []);
  await $.mcall((await $.v(C, "PayData")), "close", []);
  await $.mcall((await $.v(C, "SysDat")), "close", []);
  await $.mcall((await $.v(C, "Payments")), "Close", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TOrderForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Cash")), "open", []);
  {
    const $t14 = (await $.v(C, "PayData"));
    await $.stmt($.wcall([$t14], "close", [], C));
    await $.stmt((await $.wcall([$t14], "SetVariable", ["CrdID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DatModConstruction", C, false)), "Credits")), "FieldbyName", ["ID"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t14], "open", [], C));
  }
  await $.mcall((await $.v(C, "SysDat")), "open", []);
  {
    const $t15 = (await $.v(C, "Payments"));
    await $.stmt($.wcall([$t15], "close", [], C));
    await $.stmt((await $.wcall([$t15], "SetVariable", ["CrdID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t15], "DatModConstruction", C, false)), "Credits")), "FieldbyName", ["ID"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t15], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
