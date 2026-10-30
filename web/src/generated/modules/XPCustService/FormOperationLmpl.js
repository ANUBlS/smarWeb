// Generated from FormOperationLmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FormOperationLmpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "ExtCtrls", "Grids", "XDBGrids", "ImgList", "Menus", "ComCtrls", "QuickRpt", "DBGrids", "Buttons", "UnitDataModPCustService", "PCustServiceFormImpl1", "CurrencyToHR_Azeri_Impl", "UntIntervalRpt", "FormOperationShowLmpl", "FormOperationShow1Lmpl", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFormOperation", "TForm", {"imagelist1": {"name": "ImageList1", "type": "TImageList"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "begindat": {"name": "BeginDat", "type": "TDateTimePicker"}, "enddat": {"name": "EndDat", "type": "TDateTimePicker"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "pmtransactions": {"name": "PMTransactions", "type": "TPopupMenu"}, "memorialorder1": {"name": "MemorialOrder1", "type": "TMenuItem"}, "kassaorderi1": {"name": "KassaOrderi1", "type": "TMenuItem"}, "qbz1": {"name": "Qbz1", "type": "TMenuItem"}, "mliyyatlarexcelat1": {"name": "mliyyatlarExcelat1", "type": "TMenuItem"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "tesdiq1": {"name": "tesdiq1", "type": "TMenuItem"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "dmtapr1": {"name": "dmtapr1", "type": "TMenuItem"}, "pluginhandle": {"name": "PluginHandle", "type": "THandle"}, "exportproc": {"name": "exportproc", "type": "Procedure"}}, {});
  U.init(async () => {
    U.const("tsDelayed", 1);
    U.const("tsCommited", 2);
    U.const("tsRejected", 3);
    U.var_("FormOperation", null, "TFormOperation");
  });
  U.method("TFormOperation", "LoadPlugin2", async function LoadPlugin2(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pluginname": $.copyArg(p0), "pluginparam": $.copyArg(p1), "pluginparam2": $.copyArg(p2), result: undefined, "pluginhandle": 0, "exportproc": null};
  await $.fixArgs(L0, ["pluginname", "pluginparam", "pluginparam2"]);
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), L0["pluginname"])]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportproc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], "InitPlugin"]));
    await $.stmt((await $.callv(L0["exportproc"], [L0["pluginparam"], L0["pluginparam2"]])));
  }
  return L0.result;
}, {"params": ["PluginName", "PluginParam", "PluginParam2"], "kind": "procedure", "ptypes": ["String", "String", "String"]});
  U.method("TFormOperation", "dmtapr1Click", async function dmtapr1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "odeme_trid", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_trancation")), "FieldByName", ["id"])), "AsString")));
  await $.stmt((await $.call(C, "LoadPlugin2", ["Sb_General.bpl", "Trancation_FormPaymentOrder", (await $.v(C, "odeme_trid"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperation", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFormOperation", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormOperationShow", (await $.mcall((await $.v(C, "TFormOperationShow")), "Create", [Self])));
  await $.set(C, "FormOperationShow1", (await $.mcall((await $.v(C, "TFormOperationShow1")), "Create", [Self])));
  {
    const $t1 = (await $.v(C, "DataModPCustService"));
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
  await $.staticConst(L0, "months", "formoperationlmpl..extractmonth.months", async () => ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"]);
  await $.stmt((await $.call(C, "DecodeDate", [L0["datetime"], $.ref(async () => L0["year"], async ($t3) => { L0["year"] = $t3; }), $.ref(async () => L0["month"], async ($t4) => { L0["month"] = $t4; }), $.ref(async () => L0["day"], async ($t5) => { L0["day"] = $t5; })])));
  L0["result"] = $.add($.add($.add($.add((await $.call(C, "IntToStr", [L0["day"]])), L0["decimalsymbol"]), (await $.idx(L0["months"], [L0["month"]]))), L0["decimalsymbol"]), (await $.call(C, "IntToStr", [L0["year"]])));
  return L0.result;
}, {"params": ["DateTime", "DecimalSymbol"], "kind": "function", "ptypes": ["TDateTime", "String"]});
  U.method("TFormOperation", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 27))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormOperation", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "spos": 0, "bdat": 0, "edat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["spos"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "SBOP")), "CallIntegerFunction", ["get_acc_no_sub", []]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_trancation")), "SetVariable", ["ACCSRCHPOS", L0["spos"]])));
  L0["bdat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "BeginDat")), "DateTime"))]))]));
  L0["edat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "EndDat")), "DateTime"))]))]));
  {
    const $t6 = (await $.v(C, "DataModPCustService"));
    const $t7 = (await $.wv([$t6], "ODS_sb_business_opers", C, false));
    await $.stmt($.wcall([$t6, $t7], "Close", [], C));
    await $.stmt((await $.wcall([$t6, $t7], "SetVariable", ["bdat", (await $.wv([$t6, $t7], "bdat", { get: async () => L0["bdat"], set: async (v) => { L0["bdat"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t6, $t7], "SetVariable", ["edat", (await $.wv([$t6, $t7], "edat", { get: async () => L0["edat"], set: async (v) => { L0["edat"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t6, $t7], "open", [], C));
  }
  {
    const $t8 = (await $.v(C, "DataModPCustService"));
    const $t9 = (await $.wv([$t8], "ODS_trancation", C, false));
    await $.stmt($.wcall([$t8, $t9], "Close", [], C));
    await $.stmt((await $.wcall([$t8, $t9], "SetVariable", ["dat", (await $.wv([$t8, $t9], "bdat", { get: async () => L0["bdat"], set: async (v) => { L0["bdat"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t8, $t9], "SetVariable", ["dat", (await $.wv([$t8, $t9], "edat", { get: async () => L0["edat"], set: async (v) => { L0["edat"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t8, $t9], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperation", "PMTransactionsPopup", async function PMTransactionsPopup(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "settings")), "open", []);
  await $.mset((await $.v(C, "Qbz1")), "Enabled", (await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "fieldbyname", ["DEBITBALANCE"])), "asstring")), (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "settings")), "fieldbyname", ["CASHBALANCENATIONAL"])), "asInteger"))])))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "fieldbyname", ["DEBITBALANCE"])), "asstring")), (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "settings")), "fieldbyname", ["CASHBALANCEENGLISH"])), "asInteger"))])))))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperation", "GetCustomerInfo", async function GetCustomerInfo(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"custid": $.copyArg(p0), "custname": $.copyArg(p1), "custinn": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["custid", "custname", "custinn"]);
  {
    const $t10 = (await $.mv((await $.v(C, "DataModPCustService")), "OPCash"));
    await $.stmt((await $.wcall([$t10], "CallProcedure", ["GetCustomerInfo", [(await $.wv([$t10], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), "", ""]], C)));
    await $.wset([$t10], "CustInn", (await $.wcall([$t10], "GetParameter", [1], C)), { get: async () => L0["custinn"], set: async (v) => { L0["custinn"] = v; }, local: true });
    await $.wset([$t10], "CustName", (await $.wcall([$t10], "GetParameter", [2], C)), { get: async () => L0["custname"], set: async (v) => { L0["custname"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["CustID", "CustName", "CustInn"], "kind": "procedure", "ptypes": ["Integer", "String", "String"]});
  U.method("TFormOperation", "Qbz1Click", async function Qbz1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "custname": '', "custinn": '', "transactionid": '', "withmanat": '', "nomanat": '', "withcoin": '', "manatposition": 0, "i": 0, "valutename": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "QRptInterval"))]))))) {
    await $.set(C, "QRptInterval", (await $.mcall((await $.v(C, "TQRptInterval")), "Create", [Self])));
  }
  L0["nomanat"] = "";
  try {
    {
      const $t11 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_trancation"));
      await $.stmt((await $.wcall([$t11], "GetCustomerInfo", [(await $.mv((await $.wcall([$t11], "fieldbyname", ["CREDITID"], C)), "asInteger")), $.ref(async () => (await $.wv([$t11], "CustName", { get: async () => L0["custname"], set: async (v) => { L0["custname"] = v; }, local: true }, false)), async ($t12) => { await $.wset([$t11], "CustName", $t12, { get: async () => L0["custname"], set: async (v) => { L0["custname"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t11], "CustInn", { get: async () => L0["custinn"], set: async (v) => { L0["custinn"] = v; }, local: true }, false)), async ($t13) => { await $.wset([$t11], "CustInn", $t13, { get: async () => L0["custinn"], set: async (v) => { L0["custinn"] = v; }, local: true }); })], C)));
      await $.mcall((await $.mv((await $.wv([$t11], "DataModPCustService", C, false)), "ForFizFsVoen")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t11], "DataModPCustService", C, false)), "ForFizFsVoen")), "SetVariable", ["v_acc_no", (await $.mv((await $.wcall([$t11], "fieldbyname", ["creditaccno"], C)), "asstring"))])));
      await $.mcall((await $.mv((await $.wv([$t11], "DataModPCustService", C, false)), "ForFizFsVoen")), "open", []);
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t11], "DataModPCustService", C, false)), "ForFizFsVoen")), "fieldbyname", ["CUST_TYPE"])), "asInteger")), 1))) {
        await $.wset([$t11], "CustInn", "", { get: async () => L0["custinn"], set: async (v) => { L0["custinn"] = v; }, local: true });
      }
      await $.wset([$t11], "TransactionID", (await $.mv((await $.wcall([$t11], "fieldbyname", ["ID"], C)), "asstring")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
      await $.wset([$t11], "Filter", $.add(" ID=", (await $.wv([$t11], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))), C);
      await $.wset([$t11], "Filtered", (await $.wv([$t11], "True", C, false)), C);
    }
    {
      const $t14 = (await $.v(C, "DataModPCustService"));
      const $t15 = (await $.wv([$t14], "ODSValuteName", C, false));
      await $.stmt($.wcall([$t14, $t15], "Close", [], C));
      await $.stmt((await $.wcall([$t14, $t15], "SetVariable", ["valute", (await $.mv((await $.mcall((await $.wv([$t14, $t15], "ODS_trancation", C, false)), "fieldbyname", ["debitcurrencyid"])), "Value"))], C)));
      await $.mcall((await $.wv([$t14, $t15], "ODSValuteName", C, false)), "open", []);
      await $.wset([$t14, $t15], "ValuteName", (await $.wcall([$t14, $t15], "AnsiLowerCase", [(await $.mv((await $.wcall([$t14, $t15], "fieldbyname", ["Valu_name"], C)), "asstring"))], C)), { get: async () => L0["valutename"], set: async (v) => { L0["valutename"] = v; }, local: true });
    }
    L0["withmanat"] = (await $.call(C, "CurrencyToHR_Azeri", [(await $.call(C, "Trunc", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_trancation")), "fieldbyname", ["creditamount"])), "AsFloat"))])), 0, [0]]));
    L0["manatposition"] = (await $.call(C, "POS", ["manat", L0["withmanat"]]));
    if ($.truthy($.gt(L0["manatposition"], 0))) {
      { const $t16 = $.sub(L0["manatposition"], 1);
        L0["i"] = 1;
        let $t17 = true;
        for (;;) {
          if (!$t17) { L0["i"] = $.succ(L0["i"], 1); }
          $t17 = false;
          if (!($.ord(L0["i"]) <= $.ord($t16))) break;
          L0["nomanat"] = $.add(L0["nomanat"], (await $.idx(L0["withmanat"], [L0["i"]])));
          await $.tick();
        }
      }
    }
    L0["withcoin"] = (await $.call(C, "FloatToStr", [(await $.call(C, "Frac", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_trancation")), "fieldbyname", ["creditamount"])), "AsFloat"))]))]));
    if ($.truthy($.ne(L0["withcoin"], "0"))) {
      await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["withcoin"], async ($t18) => { L0["withcoin"] = $t18; }), 1, 2])));
      if ($.truthy($.lt((await $.call(C, "length", [L0["withcoin"]])), 2))) {
        L0["withcoin"] = $.add(L0["withcoin"], "0");
      } else {
        if ($.truthy($.gt((await $.call(C, "length", [L0["withcoin"]])), 2))) {
          await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["withcoin"], async ($t19) => { L0["withcoin"] = $t19; }), 3, (await $.call(C, "length", [L0["withcoin"]]))])));
        }
      }
      L0["withcoin"] = $.add($.add(L0["withcoin"], " "), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODSValuteName")), "fieldbyname", ["valu_bala"])), "asstring")));
    } else {
      L0["withcoin"] = "";
    }
    L0["valutename"] = (await $.call(C, "AnsiLowerCase", [$.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODSValuteName")), "fieldbyname", ["Valu_name"])), "asstring")), "  "), L0["withcoin"])]));
    if ($.truthy($.eq(L0["nomanat"], (await $.v(C, "EmptyStr"))))) {
      L0["nomanat"] = "0 ";
    }
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODSBank")), "open", []);
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
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_trancation")), "Locate", ["ID", L0["transactionid"], []])));
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODSBank")), "Close", []);
    await $.mset((await $.mv((await $.v(C, "DataModPCustService")), "ODS_trancation")), "Filtered", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperation", "tesdiq1Click", async function tesdiq1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "trid": 0, "parentid": 0, "selectrow": 0, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t20 = (await $.v(C, "XDBGrid2"));
    const $t21 = (await $.mv((await $.wv([$t20], "DataSource", C, false)), "DataSet"));
    await $.wset([$t20, $t21], "selectrow", (await $.mv((await $.wv([$t20, $t21], "SelectedRows", C, false)), "Count")), { get: async () => L0["selectrow"], set: async (v) => { L0["selectrow"] = v; }, local: true });
    { const $t22 = $.sub((await $.wv([$t20, $t21], "selectrow", { get: async () => L0["selectrow"], set: async (v) => { L0["selectrow"] = v; }, local: true }, false)), 1);
      await $.wset([$t20, $t21], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t23 = true;
      for (;;) {
        if (!$t23) { await $.wset([$t20, $t21], "i", $.succ((await $.wv([$t20, $t21], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t23 = false;
        if (!($.ord((await $.wv([$t20, $t21], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t22))) break;
        await $.stmt((await $.wcall([$t20, $t21], "GotoBookmark", [(await $.wcall([$t20, $t21], "Pointer", [(await $.idx((await $.wv([$t20, $t21], "SelectedRows", C, false)), [(await $.wv([$t20, $t21], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
        await $.wset([$t20, $t21], "parentid", (await $.mv((await $.wcall([$t20, $t21], "fieldbyname", ["parentid"], C)), "asInteger")), { get: async () => L0["parentid"], set: async (v) => { L0["parentid"] = v; }, local: true });
        await $.wset([$t20, $t21], "trid", (await $.mcall((await $.mv((await $.wv([$t20, $t21], "DataModPCustService", C, false)), "PG_PCustService")), "CallIntegerFunction", ["get_operation_tesdiq", [(await $.wv([$t20, $t21], "parentid", { get: async () => L0["parentid"], set: async (v) => { L0["parentid"] = v; }, local: true }, false))]])), { get: async () => L0["trid"], set: async (v) => { L0["trid"] = v; }, local: true });
        await $.tick();
      }
    }
    await $.mcall((await $.mv((await $.wv([$t20, $t21], "DataModPCustService", C, false)), "ODS_trancation")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperation", "XDBGrid1DblClick", async function XDBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormOperationShow1")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperation", "XDBGrid1DrawColumnCell", async function XDBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t24 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t24], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t25 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t24], "DataSource", C, false)), "DataSet")), "fieldbyname", ["Status"])), "asInteger"));
        if ($.eq($t25, (await $.wv([$t24], "tsCommited", C, false)))) {
          await $.wset([$t24], "ImageIndex", 0, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t25, (await $.wv([$t24], "tsRejected", C, false)))) {
          await $.wset([$t24], "ImageIndex", 1, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t25, (await $.wv([$t24], "tsDelayed", C, false)))) {
          await $.wset([$t24], "ImageIndex", 2, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t24], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 0)), async () => ($.ne((await $.wv([$t24], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t24], "ImageList1", C, false)), "Draw", [(await $.wv([$t24], "Canvas", C, false)), (await $.mv((await $.wv([$t24], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t24], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t24], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t24], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t24], "DefaultDrawColumnCell", [(await $.wv([$t24], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t24], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t24], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t24], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TXColumn", "TGridDrawState"]});
  U.method("TFormOperation", "XDBGrid2DblClick", async function XDBGrid2DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormOperationShow")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperation", "XDBGrid3DrawColumnCell", async function XDBGrid3DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t26 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t26], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t27 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t26], "DataSource", C, false)), "DataSet")), "fieldbyname", ["Status"])), "asInteger"));
        if ($.eq($t27, (await $.wv([$t26], "tsCommited", C, false)))) {
          await $.wset([$t26], "ImageIndex", 0, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t27, (await $.wv([$t26], "tsRejected", C, false)))) {
          await $.wset([$t26], "ImageIndex", 1, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t27, (await $.wv([$t26], "tsDelayed", C, false)))) {
          await $.wset([$t26], "ImageIndex", 2, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t26], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 0)), async () => ($.ne((await $.wv([$t26], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t26], "ImageList1", C, false)), "Draw", [(await $.wv([$t26], "Canvas", C, false)), (await $.mv((await $.wv([$t26], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t26], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t26], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t26], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t26], "DefaultDrawColumnCell", [(await $.wv([$t26], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t26], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t26], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t26], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TXColumn", "TGridDrawState"]});
  U.method("TFormOperation", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "trid": 0, "parentid": 0, "selectrow": 0, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t28 = (await $.v(C, "XDBGrid2"));
    const $t29 = (await $.mv((await $.wv([$t28], "DataSource", C, false)), "DataSet"));
    await $.wset([$t28, $t29], "selectrow", (await $.mv((await $.wv([$t28, $t29], "SelectedRows", C, false)), "Count")), { get: async () => L0["selectrow"], set: async (v) => { L0["selectrow"] = v; }, local: true });
    { const $t30 = $.sub((await $.wv([$t28, $t29], "selectrow", { get: async () => L0["selectrow"], set: async (v) => { L0["selectrow"] = v; }, local: true }, false)), 1);
      await $.wset([$t28, $t29], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t31 = true;
      for (;;) {
        if (!$t31) { await $.wset([$t28, $t29], "i", $.succ((await $.wv([$t28, $t29], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t31 = false;
        if (!($.ord((await $.wv([$t28, $t29], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t30))) break;
        await $.stmt((await $.wcall([$t28, $t29], "GotoBookmark", [(await $.wcall([$t28, $t29], "Pointer", [(await $.idx((await $.wv([$t28, $t29], "SelectedRows", C, false)), [(await $.wv([$t28, $t29], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
        await $.wset([$t28, $t29], "parentid", (await $.mv((await $.wcall([$t28, $t29], "fieldbyname", ["parentid"], C)), "asInteger")), { get: async () => L0["parentid"], set: async (v) => { L0["parentid"] = v; }, local: true });
        if ($.truthy($.eq((await $.wcall([$t28, $t29], "MessageDlg", [" Əməliyyat silinəcək əminsinizmi  ?", (await $.wv([$t28, $t29], "mtConfirmation", C, false)), (await $.wv([$t28, $t29], "mbYesNoCancel", C, false)), 0], C)), (await $.wv([$t28, $t29], "mrYes", C, false))))) {
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t28, $t29], "DataModPCustService", C, false)), "PG_PCustService")), "Callprocedure", ["get_operation_Legv", [(await $.wv([$t28, $t29], "parentid", { get: async () => L0["parentid"], set: async (v) => { L0["parentid"] = v; }, local: true }, false))]])));
        }
        await $.tick();
      }
    }
    await $.mcall((await $.mv((await $.wv([$t28, $t29], "DataModPCustService", C, false)), "ODS_sb_business_opers")), "Refresh", []);
    await $.mcall((await $.mv((await $.wv([$t28, $t29], "DataModPCustService", C, false)), "ODS_trancation")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperation", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "bdat": 0, "edat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["bdat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "BeginDat")), "DateTime"))]))]));
  L0["edat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "EndDat")), "DateTime"))]))]));
  {
    const $t32 = (await $.v(C, "DataModPCustService"));
    const $t33 = (await $.wv([$t32], "ODS_sb_business_opers", C, false));
    if ($.truthy($.eq((await $.wv([$t32, $t33], "active", C, false)), (await $.wv([$t32, $t33], "True", C, false))))) {
      await $.stmt($.wcall([$t32, $t33], "Close", [], C));
    }
    await $.stmt((await $.wcall([$t32, $t33], "SetVariable", ["bdat", (await $.wv([$t32, $t33], "bdat", { get: async () => L0["bdat"], set: async (v) => { L0["bdat"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t32, $t33], "SetVariable", ["edat", (await $.wv([$t32, $t33], "edat", { get: async () => L0["edat"], set: async (v) => { L0["edat"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t32, $t33], "open", [], C));
  }
  {
    const $t34 = (await $.v(C, "DataModPCustService"));
    const $t35 = (await $.wv([$t34], "ODS_trancation", C, false));
    await $.stmt($.wcall([$t34, $t35], "Close", [], C));
    await $.stmt((await $.wcall([$t34, $t35], "SetVariable", ["dat", (await $.wv([$t34, $t35], "bdat", { get: async () => L0["bdat"], set: async (v) => { L0["bdat"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t34, $t35], "SetVariable", ["dat", (await $.wv([$t34, $t35], "edat", { get: async () => L0["edat"], set: async (v) => { L0["edat"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t34, $t35], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormOperation", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "tesdiq1")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
