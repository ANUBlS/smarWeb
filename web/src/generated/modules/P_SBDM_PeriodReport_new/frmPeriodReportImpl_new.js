// Generated from frmPeriodReportImpl_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmPeriodReportImpl_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "ComCtrls", "Buttons", "CMExcelExport", "NewCommonDeclsImpl", "dmPeriodReportImpl_new", "frmQrptReportImpl_new", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TfrmPeriodReport_new", "TForm", {"bitbtnclose": {"name": "BitBtnClose", "type": "TBitBtn"}, "bitbtnok": {"name": "BitBtnOK", "type": "TBitBtn"}, "bitbtnretry": {"name": "BitBtnRetry", "type": "TBitBtn"}, "exportdeposits": {"name": "ExportDeposits", "type": "TCMExcelExport"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "cbavalute": {"name": "CBAvalute", "type": "TCheckBox"}, "lcbvalutes": {"name": "LCBValutes", "type": "TDBLookupComboboxEh"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "lcbdeposittypes": {"name": "LCBDepositTypes", "type": "TDBLookupComboboxEh"}, "cbdeposittypes": {"name": "CBDepositTypes", "type": "TCheckBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "lcbfilials": {"name": "LCBFilials", "type": "TDBLookupComboboxEh"}, "cbfilial": {"name": "CBFilial", "type": "TCheckBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "cbcustomer": {"name": "CBCustomer", "type": "TCheckBox"}, "lcbcustomer": {"name": "LCBCustomer", "type": "TDBLookupComboboxEh"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "lcbaccno": {"name": "LCBAccno", "type": "TDBLookupComboboxEh"}, "cbaccno": {"name": "CBAccno", "type": "TCheckBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "lcbcodcust": {"name": "LCBCodCust", "type": "TDBLookupComboboxEh"}, "cbcodcust": {"name": "CBCodCust", "type": "TCheckBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "cbpersons": {"name": "CBPersons", "type": "TCheckBox"}, "lcbpersons": {"name": "LCBPersons", "type": "TDBLookupComboboxEh"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "lcbcategories": {"name": "LCBCategories", "type": "TDBLookupComboboxEh"}, "cbcategories": {"name": "CBCategories", "type": "TCheckBox"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "cbopeneddep": {"name": "CBOpenedDep", "type": "TCheckBox"}, "dtpopendate": {"name": "DTPOpenDate", "type": "TDateTimePicker"}, "dtpclosedate": {"name": "DTPCloseDate", "type": "TDateTimePicker"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "cbcontractno": {"name": "CBContractno", "type": "TCheckBox"}, "lcbcontractno": {"name": "LCBContractno", "type": "TDBLookupComboboxEh"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "cbdepositamt": {"name": "CBDepositAmt", "type": "TCheckBox"}, "edfamt": {"name": "EdFamt", "type": "TEdit"}, "edsamt": {"name": "EdSAmt", "type": "TEdit"}, "groupbox12": {"name": "GroupBox12", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "cbsuminterest": {"name": "CBSumInterest", "type": "TCheckBox"}, "edfintamt": {"name": "EdFintAmt", "type": "TEdit"}, "edsintamt": {"name": "EdSintAmt", "type": "TEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "groupbox13": {"name": "GroupBox13", "type": "TGroupBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "dtpbegin": {"name": "DTPbegin", "type": "TDateTimePicker"}, "dtpend": {"name": "DTPend", "type": "TDateTimePicker"}, "rgstatus": {"name": "RGStatus", "type": "TRadioGroup"}, "rgreport": {"name": "RGReport", "type": "TRadioGroup"}, "rgtypes": {"name": "RGTypes", "type": "TRadioGroup"}}, {});
  U.init(async () => {
    U.var_("frmPeriodReport_new", null, "TfrmPeriodReport_new");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "frmPeriodReport_new")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmPeriodReport_new", "expexcel", async function expexcel(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.v(C, "ExportDeposits"));
    await $.stmt($.wcall([$t1], "Connect", [], C));
    await $.stmt((await $.wcall([$t1], "ExportDataset", [(await $.mv((await $.wv([$t1], "dmPeriodReport_new", C, false)), "ResultData")), "Period hesabatı", (await $.wv([$t1], "True", C, false))], C)));
    await $.stmt($.wcall([$t1], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmPeriodReport_new", "expqrp", async function expqrp(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t2 = (await $.v(C, "frmQrptReport_new"));
    const $t3 = (await $.wv([$t2], "QRepPeriod", C, false));
    await $.stmt($.wcall([$t2, $t3], "Preview", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmPeriodReport_new", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmPeriodReport_new", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "dmPeriodReport_new", (await $.mcall((await $.v(C, "TdmPeriodReport_new")), "Create", [Self])));
  await $.set(C, "frmQrptReport_new", (await $.mcall((await $.v(C, "TfrmQrptReport_new")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPeriodReport_new", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "frmQrptReport_new")), "Free", []);
  await $.mcall((await $.v(C, "dmPeriodReport_new")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPeriodReport_new", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmPeriodReport_new", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTPbegin")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "DTPend")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "DTPOpenDate")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "DTPCloseDate")), "DateTime", (await $.v(C, "Get_BankDate")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPeriodReport_new", "execreport", async function execreport(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t4 = (await $.v(C, "RGReport"));
    { const $t5 = (await $.wv([$t4], "ItemIndex", C, false));
      if ($.eq($t5, 0)) {
        await $.stmt($.wcall([$t4], "expexcel", [], C));
      }
      else if ($.eq($t5, 1)) {
        await $.stmt($.wcall([$t4], "expqrp", [], C));
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmPeriodReport_new", "BitBtnCloseClick", async function BitBtnCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPeriodReport_new", "BitBtnOKClick", async function BitBtnOKClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "begindat": 0, "enddat": 0, "ffilterstr": '', "sfilterstr": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["begindat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTPbegin")), "DateTime"))]))]));
  L0["enddat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTPend")), "DateTime"))]))]));
  L0["ffilterstr"] = (await $.call(C, "BuildFilterString", [$.ref(async () => L0["sfilterstr"], async ($t6) => { L0["sfilterstr"] = $t6; })]));
  {
    const $t7 = (await $.v(C, "dmPeriodReport_new"));
    {
      const $t8 = (await $.wv([$t7], "sbcm_period_report", C, false));
      await $.stmt((await $.wcall([$t7, $t8], "CallProcedure", ["initreportdata", ["bdat", (await $.wv([$t7, $t8], "BeginDat", { get: async () => L0["begindat"], set: async (v) => { L0["begindat"] = v; }, local: true }, false)), "edat", (await $.wv([$t7, $t8], "EndDat", { get: async () => L0["enddat"], set: async (v) => { L0["enddat"] = v; }, local: true }, false)), "Ffilterstr", (await $.wv([$t7, $t8], "Ffilterstr", { get: async () => L0["ffilterstr"], set: async (v) => { L0["ffilterstr"] = v; }, local: true }, false)), "Sfilterstr", (await $.wv([$t7, $t8], "Sfilterstr", { get: async () => L0["sfilterstr"], set: async (v) => { L0["sfilterstr"] = v; }, local: true }, false))]], C)));
    }
    {
      const $t9 = (await $.wv([$t7], "ResultData", C, false));
      await $.stmt($.wcall([$t7, $t9], "CloseAll", [], C));
      await $.stmt((await $.wcall([$t7, $t9], "SetVariable", ["bdat", (await $.wv([$t7, $t9], "BeginDat", { get: async () => L0["begindat"], set: async (v) => { L0["begindat"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t7, $t9], "SetVariable", ["edat", (await $.wv([$t7, $t9], "EndDat", { get: async () => L0["enddat"], set: async (v) => { L0["enddat"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t7, $t9], "Open", [], C));
    }
    await $.stmt($.wcall([$t7], "execreport", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPeriodReport_new", "BitBtnRetryClick", async function BitBtnRetryClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "execreport", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPeriodReport_new", "BuildFilterString", async function BuildFilterString(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"outs": $.asRef(p0), result: '', "fopendates": '', "fsuminterestrest": '', "fdepositamt": '', "ftype": '', "fstatus": ''};
  L0["concatfilter"] = $.fn(async function ConcatFilter(p0, p1, p2, p3) {
  const L1 = {"s": $.asRef(p0), "prefix": $.copyArg(p1), "checked": $.copyArg(p2), "keyvalue": $.copyArg(p3), result: undefined, "temp": ''};
  await $.fixArgs(L1, ["prefix", "checked", "keyvalue"]);
  L1["csformat"] = "(%s=%s)";
  if ($.truthy(L1["checked"])) {
    L1["temp"] = (await $.call(C, "Format", [L1["csformat"], [L1["prefix"], L1["keyvalue"]]]));
    if ($.truthy($.eq((await L1["s"].get()), ""))) {
      await L1["s"].set(L1["temp"]);
    } else {
      await L1["s"].set($.add($.add((await L1["s"].get()), "and "), L1["temp"]));
    }
  }
  return L1.result;
});
  L0["concatfilter1"] = $.fn(async function ConcatFilter1(p0, p1) {
  const L1 = {"s": $.asRef(p0), "prefix": $.asRef(p1), result: undefined};
  if ($.truthy((await $.and_(($.ne((await L1["s"].get()), "")), async () => ($.ne((await L1["prefix"].get()), "")))))) {
    await L1["s"].set($.add($.add((await L1["s"].get()), " and "), (await L1["prefix"].get())));
  }
  if ($.truthy((await $.and_(($.eq((await L1["s"].get()), "")), async () => ($.ne((await L1["prefix"].get()), "")))))) {
    await L1["s"].set((await L1["prefix"].get()));
  }
  return L1.result;
});
  L0["fopendates"] = "";
  L0["fsuminterestrest"] = "";
  L0["fdepositamt"] = "";
  L0["ftype"] = "";
  L0["fstatus"] = "";
  L0["result"] = "";
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "cont.CURRENCY", (await $.mv((await $.v(C, "CBAvalute")), "Checked")), (await $.mv((await $.v(C, "LCBValutes")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "cont.BRANCHID", (await $.mv((await $.v(C, "CBFilial")), "Checked")), (await $.mv((await $.v(C, "LCBFilials")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "cont.contracttype", (await $.mv((await $.v(C, "CBDepositTypes")), "Checked")), (await $.mv((await $.v(C, "LCBDepositTypes")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "cont.customerid", (await $.mv((await $.v(C, "CBCustomer")), "Checked")), (await $.mv((await $.v(C, "LCBCustomer")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "cont.customerid", (await $.mv((await $.v(C, "CBCodCust")), "Checked")), (await $.mv((await $.v(C, "LCBCodCust")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "cont.id", (await $.mv((await $.v(C, "CBAccno")), "Checked")), (await $.mv((await $.v(C, "LCBAccno")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "cont.personaltye", (await $.mv((await $.v(C, "CBPersons")), "Checked")), (await $.mv((await $.v(C, "LCBPersons")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "cont.clienttype", (await $.mv((await $.v(C, "CBCategories")), "Checked")), (await $.mv((await $.v(C, "LCBCategories")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "cont.contractno", (await $.mv((await $.v(C, "CBContractno")), "Checked")), (await $.mv((await $.v(C, "LCBContractno")), "KeyValue"))])));
  if ($.truthy((await $.mv((await $.v(C, "CBOpenedDep")), "Checked")))) {
    L0["fopendates"] = $.add($.add($.add($.add($.add("(cont.opendate between  '", (await $.call(C, "FormatDateTime", ["dd-MMM-yyyy", (await $.mv((await $.v(C, "DTPOpenDate")), "Date"))]))), "' and '"), (await $.call(C, "FormatDateTime", ["dd-MMM-yyyy", (await $.mv((await $.v(C, "DTPCloseDate")), "Date"))]))), "'"), ")");
  } else {
    L0["fopendates"] = "";
  }
  if ($.truthy((await $.mv((await $.v(C, "CBSumInterest")), "Checked")))) {
    L0["fsuminterestrest"] = $.add($.add($.add($.add("( facticalinterestdebt between ", (await $.mv((await $.v(C, "EdFintAmt")), "Text"))), " and "), (await $.mv((await $.v(C, "EdSintAmt")), "Text"))), ")");
  } else {
    L0["fsuminterestrest"] = "";
  }
  if ($.truthy((await $.mv((await $.v(C, "CBDepositAmt")), "Checked")))) {
    L0["fdepositamt"] = $.add($.add($.add($.add("(Cont.amount between ", (await $.mv((await $.v(C, "EdFamt")), "Text"))), " and "), (await $.mv((await $.v(C, "EdSAmt")), "Text"))), " ) ");
  } else {
    L0["fdepositamt"] = "";
  }
  {
    const $t10 = (await $.v(C, "RGTypes"));
    { const $t11 = (await $.wv([$t10], "ItemIndex", C, false));
      if ($.eq($t11, 0)) {
        await $.wset([$t10], "FType", "(cont.type# = 3)", { get: async () => L0["ftype"], set: async (v) => { L0["ftype"] = v; }, local: true });
      }
      else if ($.eq($t11, 1)) {
        await $.wset([$t10], "FType", "", { get: async () => L0["ftype"], set: async (v) => { L0["ftype"] = v; }, local: true });
      }
    }
  }
  {
    const $t12 = (await $.v(C, "RGStatus"));
    { const $t13 = (await $.wv([$t12], "ItemIndex", C, false));
      if ($.eq($t13, 0)) {
        await $.wset([$t12], "FStatus", "( CALCULATIONENABLED = 1)", { get: async () => L0["fstatus"], set: async (v) => { L0["fstatus"] = v; }, local: true });
      }
      else if ($.eq($t13, 1)) {
        await $.wset([$t12], "FStatus", "", { get: async () => L0["fstatus"], set: async (v) => { L0["fstatus"] = v; }, local: true });
      }
    }
  }
  await $.stmt((await $.callv(L0["concatfilter1"], [L0["result"], L0["fopendates"]])));
  await $.stmt((await $.callv(L0["concatfilter1"], [(await L0["outs"].get()), L0["fsuminterestrest"]])));
  await $.stmt((await $.callv(L0["concatfilter1"], [L0["result"], L0["fdepositamt"]])));
  await $.stmt((await $.callv(L0["concatfilter1"], [L0["result"], L0["ftype"]])));
  await $.stmt((await $.callv(L0["concatfilter1"], [(await L0["outs"].get()), L0["fstatus"]])));
  return L0.result;
}, {"params": ["outS"], "kind": "function", "ptypes": ["String"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmPeriodReport_new", (await $.mcall((await $.v(C, "TfrmPeriodReport_new")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
