// Generated from OrderImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("OrderImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGridEh", "DB", "OracleData", "ComCtrls", "ToolWin", "StdCtrls", "Mask", "DBCtrls", "ImgList", "DBGrids", "Buttons", "PayForm", "cc_DataMod_CashOper", "OrderPayRepFrm", "CurrencyToHR_Azeri_Impl"]);
  const C = [U];
  U.defClass("TFrmOrder", "TForm", {"imagelist1": {"name": "ImageList1", "type": "TImageList"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "paymentsdatsrc": {"name": "PaymentsDatSrc", "type": "TDataSource"}, "payments": {"name": "Payments", "type": "TOracleDataSet"}, "paymentsid": {"name": "PaymentsID", "type": "TFloatField"}, "paymentsddd": {"name": "PaymentsDDD", "type": "TWideStringField"}, "paymentspaydate": {"name": "PaymentsPAYDATE", "type": "TDateTimeField"}, "paymentsid2": {"name": "PaymentsID2", "type": "TFloatField"}, "paymentspayamt": {"name": "PaymentsPAYAMT", "type": "TFloatField"}, "paymentsname": {"name": "PaymentsNAME", "type": "TWideStringField"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "btnprint": {"name": "BtnPrint", "type": "TBitBtn"}, "btnclose": {"name": "BtnClose", "type": "TBitBtn"}, "cc_buyer_flatsdatadatsrc": {"name": "cc_buyer_flatsDataDatSrc", "type": "TDataSource"}, "cc_buyer_flats": {"name": "cc_buyer_flats", "type": "TOracleDataSet"}, "cc_buyer_flatsaddress": {"name": "cc_buyer_flatsADDRESS", "type": "TWideStringField"}, "cc_buyer_flatsbld_name": {"name": "cc_buyer_flatsBLD_NAME", "type": "TWideStringField"}, "cc_buyer_flatsid": {"name": "cc_buyer_flatsID", "type": "TFloatField"}, "cc_buyer_flatsflatcode": {"name": "cc_buyer_flatsFLATCODE", "type": "TWideStringField"}, "reportpayorderdata": {"name": "ReportPayOrderData", "type": "TOracleDataSet"}, "reportpayorderdataid": {"name": "ReportPayOrderDataID", "type": "TFloatField"}, "reportpayorderdatapaydate": {"name": "ReportPayOrderDataPAYDATE", "type": "TDateTimeField"}, "reportpayorderdatapayamt": {"name": "ReportPayOrderDataPAYAMT", "type": "TFloatField"}, "reportpayorderdatacontamount": {"name": "ReportPayOrderDataCONTAMOUNT", "type": "TFloatField"}, "reportpayorderdataloanaccno": {"name": "ReportPayOrderDataLOANACCNO", "type": "TWideStringField"}, "reportpayorderdataclientaccno": {"name": "ReportPayOrderDataCLIENTACCNO", "type": "TWideStringField"}, "reportpayorderdataname": {"name": "ReportPayOrderDataNAME", "type": "TWideStringField"}, "reportpayorderdataopendate": {"name": "ReportPayOrderDataOPENDATE", "type": "TDateTimeField"}, "reportpayorderdataccontractno": {"name": "ReportPayOrderDataCCONTRACTNO", "type": "TWideStringField"}, "reportpayorderdataval_name": {"name": "ReportPayOrderDataVAL_NAME", "type": "TWideStringField"}, "reportpayorderdatadueinterestrate": {"name": "ReportPayOrderDataDUEINTERESTRATE", "type": "TFloatField"}, "reportpayorderdataperiod": {"name": "ReportPayOrderDataPERIOD", "type": "TFloatField"}, "reportpayorderdatadatsrc": {"name": "ReportPayOrderDataDatSrc", "type": "TDataSource"}, "aboutbankdatsrc": {"name": "AboutBankDatSrc", "type": "TDataSource"}, "aboutbank": {"name": "AboutBank", "type": "TOracleDataSet"}, "aboutbankfullbankname": {"name": "AboutBankFULLBANKNAME", "type": "TWideStringField"}, "aboutbanklogo": {"name": "AboutBankLOGO", "type": "TBlobField"}, "aboutbankinn": {"name": "AboutBankINN", "type": "TWideStringField"}, "aboutbankmanagertitle": {"name": "AboutBankMANAGERTITLE", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("FrmOrder", null, "TFrmOrder");
  });
  U.method("TFrmOrder", "BtnCloseClick", async function BtnCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FrmOrder")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmOrder", "BtnPrintClick", async function BtnPrintClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "cc_buyer_flats"));
    await $.stmt($.wcall([$t1], "ClearVariables", [], C));
    await $.stmt($.wcall([$t1], "CloseAll", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["PayID", (await $.mv((await $.mcall((await $.wv([$t1], "Payments", C, false)), "FieldByName", ["ID"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  {
    const $t2 = (await $.v(C, "ReportPayOrderData"));
    await $.stmt($.wcall([$t2], "ClearVariables", [], C));
    await $.stmt($.wcall([$t2], "CloseAll", [], C));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["PayID", (await $.mv((await $.mcall((await $.wv([$t2], "Payments", C, false)), "FieldByName", ["ID"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t2], "Open", [], C));
  }
  await $.mcall((await $.v(C, "AboutBank")), "open", []);
  if ($.truthy($.gt((await $.mv((await $.v(C, "ReportPayOrderData")), "RecordCount")), 0))) {
    {
      const $t3 = (await $.v(C, "OrderPayRep"));
      await $.mset((await $.wv([$t3], "QRLabelAmount1", C, false)), "Caption", (await $.wcall([$t3], "CurrencyToHR_Azeri", [(await $.wcall([$t3], "Trunc", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "FrmOrder", C, false)), "ReportPayOrderData")), "FieldByName", ["payamt"])), "AsFloat"))], C)), 0, [0]], C)));
      await $.mset((await $.wv([$t3], "QRLabelAmount2", C, false)), "Caption", (await $.wcall([$t3], "CurrencyToHR_Azeri", [(await $.wcall([$t3], "Trunc", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "FrmOrder", C, false)), "ReportPayOrderData")), "FieldByName", ["payamt"])), "AsFloat"))], C)), 0, [0]], C)));
      await $.mset((await $.wv([$t3], "QRLabelAmount3", C, false)), "Caption", (await $.wcall([$t3], "CurrencyToHR_Azeri", [(await $.wcall([$t3], "Trunc", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "FrmOrder", C, false)), "ReportPayOrderData")), "FieldByName", ["payamt"])), "AsFloat"))], C)), 0, [0]], C)));
      if ($.truthy($.eq((await $.wcall([$t3], "Length", [(await $.wcall([$t3], "currtostr", [(await $.wcall([$t3], "Frac", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "FrmOrder", C, false)), "ReportPayOrderData")), "FieldByName", ["payamt"])), "AsFloat"))], C))], C))], C)), 1))) {
        await $.mset((await $.wv([$t3], "QRLabelAmount1", C, false)), "Caption", $.add($.add($.add((await $.mv((await $.wv([$t3], "QRLabelAmount1", C, false)), "Caption")), " 0"), (await $.wcall([$t3], "CurrToStr", [(await $.wcall([$t3], "Frac", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "FrmOrder", C, false)), "ReportPayOrderData")), "FieldByName", ["payamt"])), "AsFloat"))], C))], C))), " qəpik"));
        await $.mset((await $.wv([$t3], "QRLabelAmount2", C, false)), "Caption", $.add($.add($.add((await $.mv((await $.wv([$t3], "QRLabelAmount2", C, false)), "Caption")), " 0"), (await $.wcall([$t3], "CurrToStr", [(await $.wcall([$t3], "Frac", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "FrmOrder", C, false)), "ReportPayOrderData")), "FieldByName", ["payamt"])), "AsFloat"))], C))], C))), " qəpik"));
        await $.mset((await $.wv([$t3], "QRLabelAmount3", C, false)), "Caption", $.add($.add($.add((await $.mv((await $.wv([$t3], "QRLabelAmount3", C, false)), "Caption")), " 0"), (await $.wcall([$t3], "CurrToStr", [(await $.wcall([$t3], "Frac", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "FrmOrder", C, false)), "ReportPayOrderData")), "FieldByName", ["payamt"])), "AsFloat"))], C))], C))), " qəpik"));
      }
      if ($.truthy($.gt((await $.wcall([$t3], "Length", [(await $.wcall([$t3], "currtostr", [(await $.wcall([$t3], "Frac", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "FrmOrder", C, false)), "ReportPayOrderData")), "FieldByName", ["payamt"])), "AsFloat"))], C))], C))], C)), 1))) {
        await $.mset((await $.wv([$t3], "QRLabelAmount1", C, false)), "Caption", $.add($.add($.add((await $.mv((await $.wv([$t3], "QRLabelAmount1", C, false)), "Caption")), "  "), (await $.wcall([$t3], "CurrToStr", [$.mul((await $.wcall([$t3], "Frac", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "FrmOrder", C, false)), "ReportPayOrderData")), "FieldByName", ["payamt"])), "AsFloat"))], C)), 100)], C))), " qəpik"));
        await $.mset((await $.wv([$t3], "QRLabelAmount2", C, false)), "Caption", $.add($.add($.add((await $.mv((await $.wv([$t3], "QRLabelAmount2", C, false)), "Caption")), "  "), (await $.wcall([$t3], "CurrToStr", [$.mul((await $.wcall([$t3], "Frac", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "FrmOrder", C, false)), "ReportPayOrderData")), "FieldByName", ["payamt"])), "AsFloat"))], C)), 100)], C))), " qəpik"));
        await $.mset((await $.wv([$t3], "QRLabelAmount3", C, false)), "Caption", $.add($.add($.add((await $.mv((await $.wv([$t3], "QRLabelAmount3", C, false)), "Caption")), "  "), (await $.wcall([$t3], "CurrToStr", [$.mul((await $.wcall([$t3], "Frac", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "FrmOrder", C, false)), "ReportPayOrderData")), "FieldByName", ["payamt"])), "AsFloat"))], C)), 100)], C))), " qəpik"));
      }
      await $.mcall((await $.wv([$t3], "ReportOrder", C, false)), "Preview", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmOrder", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "OrderPayRep", (await $.mcall((await $.v(C, "TOrderPayRep")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmOrder", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Pay", (await $.mcall((await $.v(C, "TPay")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CCCashOper")), "main")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CCCashOper")), "main")), "SetVariable", ["cid", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CCCashOper")), "cc_contracts")), "FieldByName", ["ID"])), "asinteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CCCashOper")), "main")), "Open", []);
  await $.mcall((await $.v(C, "Pay")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmOrder", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "selectedrowscnt": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Ödəniş ləğv olunsun?", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t4 = (await $.v(C, "DBGridEh1"));
      const $t5 = (await $.mv((await $.wv([$t4], "DataSource", C, false)), "DataSet"));
      await $.wset([$t4, $t5], "SelectedRowsCnt", (await $.mv((await $.wv([$t4, $t5], "SelectedRows", C, false)), "Count")), { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true });
      if ($.truthy($.gt((await $.wv([$t4, $t5], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1))) {
        { const $t6 = $.sub((await $.wv([$t4, $t5], "SelectedRowsCnt", { get: async () => L0["selectedrowscnt"], set: async (v) => { L0["selectedrowscnt"] = v; }, local: true }, false)), 1);
          await $.wset([$t4, $t5], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t7 = true;
          for (;;) {
            if (!$t7) { await $.wset([$t4, $t5], "I", $.succ((await $.wv([$t4, $t5], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t7 = false;
            if (!($.ord((await $.wv([$t4, $t5], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t6))) break;
            await $.stmt((await $.wcall([$t4, $t5], "GotoBookmark", [(await $.wcall([$t4, $t5], "Pointer", [(await $.idx((await $.wv([$t4, $t5], "SelectedRows", C, false)), [(await $.wv([$t4, $t5], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            {
              const $t8 = (await $.mv((await $.wv([$t4, $t5], "pay", C, false)), "sbcm_construction"));
              await $.stmt((await $.wcall([$t4, $t5, $t8], "CallProcedure", ["deletePayment", ["p_PayID", (await $.mv((await $.mcall((await $.wv([$t4, $t5, $t8], "Payments", C, false)), "FieldByName", ["ID"])), "AsInteger"))]], C)));
            }
            await $.tick();
          }
        }
      } else {
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t4, $t5], "Pay", C, false)), "sbcm_construction")), "CallProcedure", ["deletePayment", ["p_PayID", (await $.mv((await $.mcall((await $.wv([$t4, $t5], "Payments", C, false)), "FieldByName", ["ID"])), "AsInteger"))]])));
      }
    }
  }
  await $.mcall((await $.v(C, "Payments")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
