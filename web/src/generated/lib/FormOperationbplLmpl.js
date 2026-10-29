// Generated from FormOperationbplLmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FormOperationbplLmpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "ExtCtrls", "Grids", "XDBGrids", "ImgList", "Menus", "ComCtrls", "QuickRpt", "DBGrids", "Buttons", "DataCustNomImpl", "OpenAccountImpl", "CurrencyToHR_Azeri_Impl", "UntIntervalRpt", "FormOperationShowLmpl", "FormOperationShow1Lmpl", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFormOperationbpl", "TForm", {"imagelist1": {"name": "ImageList1", "type": "TImageList"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "begindat": {"name": "BeginDat", "type": "TDateTimePicker"}, "enddat": {"name": "EndDat", "type": "TDateTimePicker"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "pmtransactions": {"name": "PMTransactions", "type": "TPopupMenu"}, "memorialorder1": {"name": "MemorialOrder1", "type": "TMenuItem"}, "kassaorderi1": {"name": "KassaOrderi1", "type": "TMenuItem"}, "qbz1": {"name": "Qbz1", "type": "TMenuItem"}, "mliyyatlarexcelat1": {"name": "mliyyatlarExcelat1", "type": "TMenuItem"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "tesdiq1": {"name": "tesdiq1", "type": "TMenuItem"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}}, {});
  U.init(async () => {
    U.const("tsDelayed", 1);
    U.const("tsCommited", 2);
    U.const("tsRejected", 3);
    U.var_("FormOperationbpl", null, "TFormOperationbpl");
    U.var_("tacc", '', "String");
  });
  U.method("TFormOperationbpl", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFormOperationbpl", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_sb_business_opers1")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_trancation1")), "Open", []);
  await $.set(C, "FormOperationShow", (await $.mcall((await $.v(C, "TFormOperationShow")), "Create", [Self])));
  await $.set(C, "FormOperationShow1", (await $.mcall((await $.v(C, "TFormOperationShow1")), "Create", [Self])));
  {
    const $t1 = (await $.v(C, "DataCustNom"));
    const $t2 = (await $.wv([$t1], "ODS_SYSDATE", C, false));
    await $.mset((await $.wv([$t1, $t2], "BeginDat", C, false)), "DateTime", (await $.mv((await $.wcall([$t1, $t2], "fieldbyname", ["tek_dat"], C)), "asdatetime")));
    await $.mset((await $.wv([$t1, $t2], "EndDat", C, false)), "DateTime", (await $.mv((await $.wcall([$t1, $t2], "fieldbyname", ["tek_dat"], C)), "asdatetime")));
    await $.stmt((await $.mcall((await $.wv([$t1, $t2], "SBTranslateProc", C, false)), "TranslateAllCompForms", [Self, (await $.mv((await $.wv([$t1, $t2], "sboapiDataModule", C, false)), "OrPack_SL"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("ExtractMonth", async function ExtractMonth(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"datetime": $.copyArg(p0), "decimalsymbol": $.copyArg(p1), result: '', "year": 0, "month": 0, "day": 0};
  await $.fixArgs(L0, ["datetime", "decimalsymbol"]);
  await $.staticConst(L0, "months", "formoperationbpllmpl..extractmonth.months", async () => ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"]);
  await $.stmt((await $.call(C, "DecodeDate", [L0["datetime"], $.ref(async () => L0["year"], async ($t3) => { L0["year"] = $t3; }), $.ref(async () => L0["month"], async ($t4) => { L0["month"] = $t4; }), $.ref(async () => L0["day"], async ($t5) => { L0["day"] = $t5; })])));
  L0["result"] = $.add($.add($.add($.add((await $.call(C, "IntToStr", [L0["day"]])), L0["decimalsymbol"]), (await $.idx(L0["months"], [L0["month"]]))), L0["decimalsymbol"]), (await $.call(C, "IntToStr", [L0["year"]])));
  return L0.result;
}, {"params": ["DateTime", "DecimalSymbol"], "kind": "function", "ptypes": ["TDateTime", "String"]});
  U.method("TFormOperationbpl", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 27))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormOperationbpl", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "bdat": 0, "edat": 0, "v_custid": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["bdat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "BeginDat")), "DateTime"))]))]));
  L0["edat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "EndDat")), "DateTime"))]))]));
  {
    const $t6 = (await $.v(C, "DataCustNom"));
    if ($.truthy($.ne((await $.wv([$t6], "a", C, false)), ""))) {
      await $.wset([$t6], "v_custid", (await $.wv([$t6], "a", C, false)), { get: async () => L0["v_custid"], set: async (v) => { L0["v_custid"] = v; }, local: true });
      await $.mcall((await $.wv([$t6], "ODS_sb_business_opers1", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t6], "ODS_sb_business_opers1", C, false)), "SetVariable", ["bdat", (await $.wv([$t6], "bdat", { get: async () => L0["bdat"], set: async (v) => { L0["bdat"] = v; }, local: true }, false))])));
      await $.stmt((await $.mcall((await $.wv([$t6], "ODS_sb_business_opers1", C, false)), "SetVariable", ["edat", (await $.wv([$t6], "edat", { get: async () => L0["edat"], set: async (v) => { L0["edat"] = v; }, local: true }, false))])));
      { const $t7 = await $.iset((await $.mv((await $.wv([$t6], "ODS_sb_business_opers1", C, false)), "SQl")), [2], $.add($.add($.add($.add("and b.parentid in (select id   FROM transactions_busnes_pros where (custid_cred =", (await $.wv([$t6], "v_custid", { get: async () => L0["v_custid"], set: async (v) => { L0["v_custid"] = v; }, local: true }, false))), ") or (custid_debt="), (await $.wv([$t6], "v_custid", { get: async () => L0["v_custid"], set: async (v) => { L0["v_custid"] = v; }, local: true }, false))), "))")); if ($t7 !== undefined) { await $.mset((await $.wv([$t6], "ODS_sb_business_opers1", C, false)), "SQl", $t7); } }
      await $.mcall((await $.wv([$t6], "ODS_sb_business_opers1", C, false)), "Open", []);
    } else {
      await $.mcall((await $.wv([$t6], "ODS_sb_business_opers1", C, false)), "Close", []);
      { const $t8 = await $.iset((await $.mv((await $.wv([$t6], "ODS_sb_business_opers1", C, false)), "SQl")), [2], ""); if ($t8 !== undefined) { await $.mset((await $.wv([$t6], "ODS_sb_business_opers1", C, false)), "SQl", $t8); } }
      await $.stmt((await $.mcall((await $.wv([$t6], "ODS_sb_business_opers1", C, false)), "SetVariable", ["bdat", (await $.wv([$t6], "bdat", { get: async () => L0["bdat"], set: async (v) => { L0["bdat"] = v; }, local: true }, false))])));
      await $.stmt((await $.mcall((await $.wv([$t6], "ODS_sb_business_opers1", C, false)), "SetVariable", ["edat", (await $.wv([$t6], "edat", { get: async () => L0["edat"], set: async (v) => { L0["edat"] = v; }, local: true }, false))])));
      await $.mcall((await $.wv([$t6], "ODS_sb_business_opers1", C, false)), "Open", []);
    }
    await $.mset((await $.mv((await $.wv([$t6], "FormOperationbpl", C, false)), "memo1")), "Text", (await $.mv((await $.mv((await $.wv([$t6], "ODS_sb_business_opers1", C, false)), "sql")), "text")));
    await $.mcall((await $.wv([$t6], "ODS_trancation1", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperationbpl", "PMTransactionsPopup", async function PMTransactionsPopup(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "settings")), "open", []);
  await $.mset((await $.v(C, "Qbz1")), "Enabled", (await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "fieldbyname", ["DEBITBALANCE"])), "asstring")), (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "settings")), "fieldbyname", ["CASHBALANCENATIONAL"])), "asInteger"))])))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "fieldbyname", ["DEBITBALANCE"])), "asstring")), (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "settings")), "fieldbyname", ["CASHBALANCEENGLISH"])), "asInteger"))])))))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperationbpl", "GetCustomerInfo", async function GetCustomerInfo(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"custid": $.copyArg(p0), "custname": $.copyArg(p1), "custinn": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["custid", "custname", "custinn"]);
  {
    const $t9 = (await $.mv((await $.v(C, "DataCustNom")), "OPCash"));
    await $.stmt((await $.wcall([$t9], "CallProcedure", ["GetCustomerInfo", [(await $.wv([$t9], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), "", ""]], C)));
    await $.wset([$t9], "CustInn", (await $.wcall([$t9], "GetParameter", [1], C)), { get: async () => L0["custinn"], set: async (v) => { L0["custinn"] = v; }, local: true });
    await $.wset([$t9], "CustName", (await $.wcall([$t9], "GetParameter", [2], C)), { get: async () => L0["custname"], set: async (v) => { L0["custname"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["CustID", "CustName", "CustInn"], "kind": "procedure", "ptypes": ["Integer", "String", "String"]});
  U.method("TFormOperationbpl", "Qbz1Click", async function Qbz1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "custname": '', "custinn": '', "transactionid": '', "withmanat": '', "nomanat": '', "withcoin": '', "manatposition": 0, "i": 0, "valutename": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "QRptInterval"))]))))) {
    await $.set(C, "QRptInterval", (await $.mcall((await $.v(C, "TQRptInterval")), "Create", [Self])));
  }
  L0["nomanat"] = "";
  try {
    {
      const $t10 = (await $.mv((await $.v(C, "DataCustNom")), "ODS_trancation1"));
      await $.stmt((await $.wcall([$t10], "GetCustomerInfo", [(await $.mv((await $.wcall([$t10], "fieldbyname", ["CREDITID"], C)), "asInteger")), $.ref(async () => (await $.wv([$t10], "CustName", { get: async () => L0["custname"], set: async (v) => { L0["custname"] = v; }, local: true }, false)), async ($t11) => { await $.wset([$t10], "CustName", $t11, { get: async () => L0["custname"], set: async (v) => { L0["custname"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t10], "CustInn", { get: async () => L0["custinn"], set: async (v) => { L0["custinn"] = v; }, local: true }, false)), async ($t12) => { await $.wset([$t10], "CustInn", $t12, { get: async () => L0["custinn"], set: async (v) => { L0["custinn"] = v; }, local: true }); })], C)));
      await $.mcall((await $.mv((await $.wv([$t10], "DataCustNom", C, false)), "ForFizFsVoen")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t10], "DataCustNom", C, false)), "ForFizFsVoen")), "SetVariable", ["v_acc_no", (await $.mv((await $.wcall([$t10], "fieldbyname", ["creditaccno"], C)), "asstring"))])));
      await $.mcall((await $.mv((await $.wv([$t10], "DataCustNom", C, false)), "ForFizFsVoen")), "open", []);
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t10], "DataCustNom", C, false)), "ForFizFsVoen")), "fieldbyname", ["CUST_TYPE"])), "asInteger")), 1))) {
        await $.wset([$t10], "CustInn", "", { get: async () => L0["custinn"], set: async (v) => { L0["custinn"] = v; }, local: true });
      }
      await $.wset([$t10], "TransactionID", (await $.mv((await $.wcall([$t10], "fieldbyname", ["ID"], C)), "asstring")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
      await $.wset([$t10], "Filter", $.add(" ID=", (await $.wv([$t10], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))), C);
      await $.wset([$t10], "Filtered", (await $.wv([$t10], "True", C, false)), C);
    }
    {
      const $t13 = (await $.v(C, "DataCustNom"));
      const $t14 = (await $.wv([$t13], "ODSValuteName", C, false));
      await $.stmt($.wcall([$t13, $t14], "Close", [], C));
      await $.stmt((await $.wcall([$t13, $t14], "SetVariable", ["valute", (await $.mv((await $.mcall((await $.wv([$t13, $t14], "ODS_trancation1", C, false)), "fieldbyname", ["debitcurrencyid"])), "Value"))], C)));
      await $.mcall((await $.wv([$t13, $t14], "ODSValuteName", C, false)), "open", []);
      await $.wset([$t13, $t14], "ValuteName", (await $.wcall([$t13, $t14], "AnsiLowerCase", [(await $.mv((await $.wcall([$t13, $t14], "fieldbyname", ["Valu_name"], C)), "asstring"))], C)), { get: async () => L0["valutename"], set: async (v) => { L0["valutename"] = v; }, local: true });
    }
    L0["withmanat"] = (await $.call(C, "CurrencyToHR_Azeri", [(await $.call(C, "Trunc", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_trancation1")), "fieldbyname", ["creditamount"])), "AsFloat"))])), 0, [0]]));
    L0["manatposition"] = (await $.call(C, "POS", ["manat", L0["withmanat"]]));
    if ($.truthy($.gt(L0["manatposition"], 0))) {
      { const $t15 = $.sub(L0["manatposition"], 1);
        L0["i"] = 1;
        let $t16 = true;
        for (;;) {
          if (!$t16) { L0["i"] = $.succ(L0["i"], 1); }
          $t16 = false;
          if (!($.ord(L0["i"]) <= $.ord($t15))) break;
          L0["nomanat"] = $.add(L0["nomanat"], (await $.idx(L0["withmanat"], [L0["i"]])));
          await $.tick();
        }
      }
    }
    L0["withcoin"] = (await $.call(C, "FloatToStr", [(await $.call(C, "Frac", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_trancation1")), "fieldbyname", ["creditamount"])), "AsFloat"))]))]));
    if ($.truthy($.ne(L0["withcoin"], "0"))) {
      await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["withcoin"], async ($t17) => { L0["withcoin"] = $t17; }), 1, 2])));
      if ($.truthy($.lt((await $.call(C, "length", [L0["withcoin"]])), 2))) {
        L0["withcoin"] = $.add(L0["withcoin"], "0");
      } else {
        if ($.truthy($.gt((await $.call(C, "length", [L0["withcoin"]])), 2))) {
          await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["withcoin"], async ($t18) => { L0["withcoin"] = $t18; }), 3, (await $.call(C, "length", [L0["withcoin"]]))])));
        }
      }
      L0["withcoin"] = $.add($.add(L0["withcoin"], " "), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODSValuteName")), "fieldbyname", ["valu_bala"])), "asstring")));
    } else {
      L0["withcoin"] = "";
    }
    L0["valutename"] = (await $.call(C, "AnsiLowerCase", [$.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODSValuteName")), "fieldbyname", ["Valu_name"])), "asstring")), "  "), L0["withcoin"])]));
    if ($.truthy($.eq(L0["nomanat"], (await $.v(C, "EmptyStr"))))) {
      L0["nomanat"] = "0 ";
    }
    await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODSBank")), "open", []);
    await $.mset((await $.mv((await $.v(C, "QRptInterval")), "QRAMMOUNT1")), "Caption", $.add(L0["nomanat"], L0["valutename"]));
    await $.mset((await $.mv((await $.v(C, "QRptInterval")), "QRAMMOUNT2")), "Caption", $.add(L0["nomanat"], L0["valutename"]));
    await $.mset((await $.mv((await $.v(C, "QRptInterval")), "QRCustInn1")), "Caption", L0["custinn"]);
    await $.mset((await $.mv((await $.v(C, "QRptInterval")), "QRCustInn2")), "Caption", L0["custinn"]);
    await $.mset((await $.mv((await $.v(C, "QRptInterval")), "QRCustInn3")), "Caption", L0["custinn"]);
    await $.mset((await $.mv((await $.v(C, "QRptInterval")), "QRDat1")), "Caption", (await $.call(C, "ExtractMonth", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "QRptInterval")), "DataSet")), "fieldbyname", ["DAT"])), "asdatetime")), "-"])));
    await $.mset((await $.mv((await $.v(C, "QRptInterval")), "QRDat2")), "Caption", (await $.call(C, "ExtractMonth", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "QRptInterval")), "DataSet")), "fieldbyname", ["DAT"])), "asdatetime")), "-"])));
    await $.mset((await $.mv((await $.v(C, "QRptInterval")), "QRDat3")), "Caption", (await $.call(C, "ExtractMonth", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "QRptInterval")), "DataSet")), "fieldbyname", ["DAT"])), "asdatetime")), "-"])));
    await $.mcall((await $.v(C, "QRptInterval")), "Preview", []);
  } finally {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_trancation1")), "Locate", ["ID", L0["transactionid"], []])));
    await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODSBank")), "Close", []);
    await $.mset((await $.mv((await $.v(C, "DataCustNom")), "ODS_trancation1")), "Filtered", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperationbpl", "tesdiq1Click", async function tesdiq1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "trid": 0, "parentid": 0, "selectrow": 0, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.v(C, "XDBGrid2"));
    const $t20 = (await $.mv((await $.wv([$t19], "DataSource", C, false)), "DataSet"));
    await $.wset([$t19, $t20], "selectrow", (await $.mv((await $.wv([$t19, $t20], "SelectedRows", C, false)), "Count")), { get: async () => L0["selectrow"], set: async (v) => { L0["selectrow"] = v; }, local: true });
    { const $t21 = $.sub((await $.wv([$t19, $t20], "selectrow", { get: async () => L0["selectrow"], set: async (v) => { L0["selectrow"] = v; }, local: true }, false)), 1);
      await $.wset([$t19, $t20], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t22 = true;
      for (;;) {
        if (!$t22) { await $.wset([$t19, $t20], "i", $.succ((await $.wv([$t19, $t20], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t22 = false;
        if (!($.ord((await $.wv([$t19, $t20], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t21))) break;
        await $.stmt((await $.wcall([$t19, $t20], "GotoBookmark", [(await $.wcall([$t19, $t20], "Pointer", [(await $.idx((await $.wv([$t19, $t20], "SelectedRows", C, false)), [(await $.wv([$t19, $t20], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
        await $.wset([$t19, $t20], "parentid", (await $.mv((await $.wcall([$t19, $t20], "fieldbyname", ["parentid"], C)), "asInteger")), { get: async () => L0["parentid"], set: async (v) => { L0["parentid"] = v; }, local: true });
        await $.wset([$t19, $t20], "trid", (await $.mcall((await $.mv((await $.wv([$t19, $t20], "DataCustNom", C, false)), "PG_PCustService")), "CallIntegerFunction", ["get_operation_tesdiq", [(await $.wv([$t19, $t20], "parentid", { get: async () => L0["parentid"], set: async (v) => { L0["parentid"] = v; }, local: true }, false))]])), { get: async () => L0["trid"], set: async (v) => { L0["trid"] = v; }, local: true });
        await $.tick();
      }
    }
    await $.mcall((await $.mv((await $.wv([$t19, $t20], "DataCustNom", C, false)), "ODS_trancation1")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperationbpl", "XDBGrid1DblClick", async function XDBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormOperationShow1")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperationbpl", "XDBGrid1DrawColumnCell", async function XDBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t23 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t23], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t24 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t23], "DataSource", C, false)), "DataSet")), "fieldbyname", ["Status"])), "asInteger"));
        if ($.eq($t24, (await $.wv([$t23], "tsCommited", C, false)))) {
          await $.wset([$t23], "ImageIndex", 0, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t24, (await $.wv([$t23], "tsRejected", C, false)))) {
          await $.wset([$t23], "ImageIndex", 1, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t24, (await $.wv([$t23], "tsDelayed", C, false)))) {
          await $.wset([$t23], "ImageIndex", 2, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t23], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 0)), async () => ($.ne((await $.wv([$t23], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t23], "ImageList1", C, false)), "Draw", [(await $.wv([$t23], "Canvas", C, false)), (await $.mv((await $.wv([$t23], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t23], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t23], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t23], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t23], "DefaultDrawColumnCell", [(await $.wv([$t23], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t23], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t23], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t23], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TXColumn", "TGridDrawState"]});
  U.method("TFormOperationbpl", "XDBGrid2DblClick", async function XDBGrid2DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormOperationShow")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperationbpl", "XDBGrid3DrawColumnCell", async function XDBGrid3DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t25 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t25], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t26 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataSource", C, false)), "DataSet")), "fieldbyname", ["Status"])), "asInteger"));
        if ($.eq($t26, (await $.wv([$t25], "tsCommited", C, false)))) {
          await $.wset([$t25], "ImageIndex", 0, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t26, (await $.wv([$t25], "tsRejected", C, false)))) {
          await $.wset([$t25], "ImageIndex", 1, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t26, (await $.wv([$t25], "tsDelayed", C, false)))) {
          await $.wset([$t25], "ImageIndex", 2, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t25], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 0)), async () => ($.ne((await $.wv([$t25], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t25], "ImageList1", C, false)), "Draw", [(await $.wv([$t25], "Canvas", C, false)), (await $.mv((await $.wv([$t25], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t25], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t25], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t25], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t25], "DefaultDrawColumnCell", [(await $.wv([$t25], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t25], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t25], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t25], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TXColumn", "TGridDrawState"]});
  U.method("TFormOperationbpl", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "trid": 0, "parentid": 0, "selectrow": 0, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t27 = (await $.v(C, "XDBGrid2"));
    const $t28 = (await $.mv((await $.wv([$t27], "DataSource", C, false)), "DataSet"));
    await $.wset([$t27, $t28], "selectrow", (await $.mv((await $.wv([$t27, $t28], "SelectedRows", C, false)), "Count")), { get: async () => L0["selectrow"], set: async (v) => { L0["selectrow"] = v; }, local: true });
    await $.stmt((await $.wcall([$t27, $t28], "ShowMessage", [(await $.wcall([$t27, $t28], "inttostr", [(await $.wv([$t27, $t28], "selectrow", { get: async () => L0["selectrow"], set: async (v) => { L0["selectrow"] = v; }, local: true }, false))], C))], C)));
    { const $t29 = $.sub((await $.wv([$t27, $t28], "selectrow", { get: async () => L0["selectrow"], set: async (v) => { L0["selectrow"] = v; }, local: true }, false)), 1);
      await $.wset([$t27, $t28], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t30 = true;
      for (;;) {
        if (!$t30) { await $.wset([$t27, $t28], "i", $.succ((await $.wv([$t27, $t28], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t30 = false;
        if (!($.ord((await $.wv([$t27, $t28], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t29))) break;
        await $.stmt((await $.wcall([$t27, $t28], "GotoBookmark", [(await $.wcall([$t27, $t28], "Pointer", [(await $.idx((await $.wv([$t27, $t28], "SelectedRows", C, false)), [(await $.wv([$t27, $t28], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
        await $.wset([$t27, $t28], "parentid", (await $.mv((await $.wcall([$t27, $t28], "fieldbyname", ["parentid"], C)), "asInteger")), { get: async () => L0["parentid"], set: async (v) => { L0["parentid"] = v; }, local: true });
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t27, $t28], "DataCustNom", C, false)), "PG_PCustService")), "Callprocedure", ["get_operation_Legv", [(await $.wv([$t27, $t28], "parentid", { get: async () => L0["parentid"], set: async (v) => { L0["parentid"] = v; }, local: true }, false))]])));
        await $.tick();
      }
    }
    await $.mcall((await $.mv((await $.wv([$t27, $t28], "DataCustNom", C, false)), "ODS_sb_business_opers1")), "Refresh", []);
    await $.mcall((await $.mv((await $.wv([$t27, $t28], "DataCustNom", C, false)), "ODS_trancation1")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperationbpl", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "bdat": 0, "edat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["bdat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "BeginDat")), "DateTime"))]))]));
  L0["edat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "EndDat")), "DateTime"))]))]));
  {
    const $t31 = (await $.v(C, "DataCustNom"));
    const $t32 = (await $.wv([$t31], "ODS_sb_business_opers1", C, false));
    if ($.truthy($.eq((await $.wv([$t31, $t32], "active", C, false)), (await $.wv([$t31, $t32], "True", C, false))))) {
      await $.stmt($.wcall([$t31, $t32], "Close", [], C));
    }
    await $.stmt((await $.wcall([$t31, $t32], "SetVariable", ["bdat", (await $.wv([$t31, $t32], "bdat", { get: async () => L0["bdat"], set: async (v) => { L0["bdat"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t31, $t32], "SetVariable", ["edat", (await $.wv([$t31, $t32], "edat", { get: async () => L0["edat"], set: async (v) => { L0["edat"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t31, $t32], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperationbpl", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "tesdiq1")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
