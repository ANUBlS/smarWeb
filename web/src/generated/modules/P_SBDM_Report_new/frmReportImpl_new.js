// Generated from frmReportImpl_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmReportImpl_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "ComCtrls", "CheckLst", "Buttons", "CMExcelExport", "NewCommonDeclsImpl", "dmReportImpl_new", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TfrmReport_new", "TForm", {"bitbtncancel": {"name": "BitBtnCancel", "type": "TBitBtn"}, "bitbtnok": {"name": "BitBtnOk", "type": "TBitBtn"}, "eexport": {"name": "EExport", "type": "TCMExcelExport"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "cbavalute": {"name": "CBAvalute", "type": "TCheckBox"}, "lcbvalutes": {"name": "LCBValutes", "type": "TDBLookupComboboxEh"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "lcbdeposittypes": {"name": "LCBDepositTypes", "type": "TDBLookupComboboxEh"}, "cbdeposittypes": {"name": "CBDepositTypes", "type": "TCheckBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "lcbfilials": {"name": "LCBFilials", "type": "TDBLookupComboboxEh"}, "cbfilial": {"name": "CBFilial", "type": "TCheckBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "cbcustomer": {"name": "CBCustomer", "type": "TCheckBox"}, "lcbcustomer": {"name": "LCBCustomer", "type": "TDBLookupComboboxEh"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "lcbaccno": {"name": "LCBAccno", "type": "TDBLookupComboboxEh"}, "cbaccno": {"name": "CBAccno", "type": "TCheckBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "lcbcodcust": {"name": "LCBCodCust", "type": "TDBLookupComboboxEh"}, "cbcodcust": {"name": "CBCodCust", "type": "TCheckBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "cbpersons": {"name": "CBPersons", "type": "TCheckBox"}, "lcbpersons": {"name": "LCBPersons", "type": "TDBLookupComboboxEh"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "lcbcategories": {"name": "LCBCategories", "type": "TDBLookupComboboxEh"}, "cbcategories": {"name": "CBCategories", "type": "TCheckBox"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "cbopeneddep": {"name": "CBOpenedDep", "type": "TCheckBox"}, "dtpopendate": {"name": "DTPOpenDate", "type": "TDateTimePicker"}, "dtpclosedate": {"name": "DTPCloseDate", "type": "TDateTimePicker"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "clbtypes": {"name": "CLBTypes", "type": "TCheckListBox"}, "groupbox12": {"name": "GroupBox12", "type": "TGroupBox"}, "clbstatus": {"name": "CLBStatus", "type": "TCheckListBox"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "cbclosedep": {"name": "CBCloseDep", "type": "TCheckBox"}, "dtpcls1": {"name": "DTPCls1", "type": "TDateTimePicker"}, "dtpcls2": {"name": "DTPCls2", "type": "TDateTimePicker"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "dtpreport": {"name": "DTPReport", "type": "TDateTimePicker"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("frmReport_new", null, "TfrmReport_new");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  {
    const $t1 = (await $.mcall((await $.v(C, "TfrmReport_new")), "Create", [(await $.v(C, "CommonApplication"))]));
    try {
      await $.stmt($.wcall([$t1], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t1], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmReport_new", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["dat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPReport")), "DateTime"))]))]));
  {
    const $t2 = (await $.v(C, "dmReport_new"));
    const $t3 = (await $.wv([$t2], "ReportData", C, false));
    if ($.truthy((await $.wv([$t2, $t3], "Active", C, false)))) {
      await $.stmt($.wcall([$t2, $t3], "CloseAll", [], C));
    }
    { const $t4 = await $.iset((await $.wv([$t2, $t3], "SQL", C, false)), [45], $.add(" and ", (await $.wv([$t2, $t3], "BuildFilterString", C, false)))); if ($t4 !== undefined) { await $.wset([$t2, $t3], "SQL", $t4, C); } }
    await $.stmt((await $.wcall([$t2, $t3], "SetVariable", ["Dat", (await $.wv([$t2, $t3], "Dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t2, $t3], "Open", [], C));
  }
  {
    const $t5 = (await $.v(C, "EExport"));
    await $.stmt($.wcall([$t5], "Connect", [], C));
    await $.stmt((await $.wcall([$t5], "ExportDataset", [(await $.mv((await $.wv([$t5], "dmReport_new", C, false)), "ReportData")), "Mis hesabatı", (await $.wv([$t5], "true", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmReport_new", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmReport_new", "BuildFilterString", async function BuildFilterString(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "fstatus": '', "fopendat1": '', "fopendat2": '', "fopendat": '', "ftype": '', "fstatus2": '', "fstatus1": '', "ftype2": '', "ftype1": '', "fclosedat": '', "fclosedat1": '', "fclosedat2": ''};
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
  L0["concatfilter1"] = $.fn(async function ConcatFilter1(p0, p1, p2) {
  const L1 = {"s": $.asRef(p0), "prefix": $.asRef(p1), "ch": $.copyArg(p2), result: undefined, "chs": ''};
  await $.fixArgs(L1, ["ch"]);
  if ($.truthy(L1["ch"])) {
    L1["chs"] = " and  ";
  } else {
    L1["chs"] = " or ";
  }
  if ($.truthy((await $.and_(($.ne((await L1["s"].get()), "")), async () => ($.ne((await L1["prefix"].get()), "")))))) {
    await L1["s"].set($.add($.add($.add($.add("(", (await L1["s"].get())), L1["chs"]), (await L1["prefix"].get())), ")"));
  }
  if ($.truthy((await $.and_(($.eq((await L1["s"].get()), "")), async () => ($.ne((await L1["prefix"].get()), "")))))) {
    await L1["s"].set((await L1["prefix"].get()));
  }
  return L1.result;
});
  L0["result"] = "";
  L0["fstatus"] = "";
  L0["fopendat1"] = "";
  L0["fopendat2"] = "";
  L0["fopendat"] = "";
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "cont.CURRENCY", (await $.mv((await $.v(C, "CBaValute")), "Checked")), (await $.mv((await $.v(C, "LCBValutes")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "cont.BRANCHID", (await $.mv((await $.v(C, "CBFilial")), "Checked")), (await $.mv((await $.v(C, "LCBFilials")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "cont.PERSONALTYPE", (await $.mv((await $.v(C, "CBPersons")), "Checked")), (await $.mv((await $.v(C, "LCBPersons")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "cont.CLIENTTYPE", (await $.mv((await $.v(C, "CBCategories")), "Checked")), (await $.mv((await $.v(C, "LCBCategories")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "cont.ContractType", (await $.mv((await $.v(C, "CBDepositTypes")), "Checked")), (await $.mv((await $.v(C, "LCBDepositTypes")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "acc.contractaccid", (await $.mv((await $.v(C, "CBCustomer")), "Checked")), (await $.mv((await $.v(C, "LCBCustomer")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "cont.CUSTOMERID", (await $.mv((await $.v(C, "CBCodCust")), "Checked")), (await $.mv((await $.v(C, "LCBCodCust")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "cont.id", (await $.mv((await $.v(C, "CBAccno")), "Checked")), (await $.mv((await $.v(C, "LCBAccno")), "KeyValue"))])));
  {
    const $t6 = (await $.v(C, "CLBStatus"));
    if ($.truthy((await $.idx((await $.wv([$t6], "Checked", C, false)), [0])))) {
      await $.wset([$t6], "FStatus1", "(h.calculationenabled = 1)", { get: async () => L0["fstatus1"], set: async (v) => { L0["fstatus1"] = v; }, local: true });
    } else {
      await $.wset([$t6], "FStatus1", "", { get: async () => L0["fstatus1"], set: async (v) => { L0["fstatus1"] = v; }, local: true });
    }
    if ($.truthy((await $.idx((await $.wv([$t6], "Checked", C, false)), [1])))) {
      await $.wset([$t6], "FStatus2", "(h.calculationenabled = 0)", { get: async () => L0["fstatus2"], set: async (v) => { L0["fstatus2"] = v; }, local: true });
    } else {
      await $.wset([$t6], "FStatus2", "", { get: async () => L0["fstatus2"], set: async (v) => { L0["fstatus2"] = v; }, local: true });
    }
    await $.stmt((await $.wcall([$t6], "ConcatFilter1", [(await $.wv([$t6], "FStatus", { get: async () => L0["fstatus"], set: async (v) => { L0["fstatus"] = v; }, local: true }, false)), (await $.wv([$t6], "FStatus1", { get: async () => L0["fstatus1"], set: async (v) => { L0["fstatus1"] = v; }, local: true }, false)), (await $.wv([$t6], "false", C, false))], { get: async () => L0["concatfilter1"], set: async (v) => { L0["concatfilter1"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t6], "ConcatFilter1", [(await $.wv([$t6], "FStatus", { get: async () => L0["fstatus"], set: async (v) => { L0["fstatus"] = v; }, local: true }, false)), (await $.wv([$t6], "FStatus2", { get: async () => L0["fstatus2"], set: async (v) => { L0["fstatus2"] = v; }, local: true }, false)), (await $.wv([$t6], "false", C, false))], { get: async () => L0["concatfilter1"], set: async (v) => { L0["concatfilter1"] = v; }, local: true })));
  }
  {
    const $t7 = (await $.v(C, "CLBTypes"));
    if ($.truthy((await $.idx((await $.wv([$t7], "Checked", C, false)), [0])))) {
      await $.wset([$t7], "FType1", "(cont.type# = 3)", { get: async () => L0["ftype1"], set: async (v) => { L0["ftype1"] = v; }, local: true });
    } else {
      await $.wset([$t7], "FType1", "", { get: async () => L0["ftype1"], set: async (v) => { L0["ftype1"] = v; }, local: true });
    }
    if ($.truthy((await $.idx((await $.wv([$t7], "Checked", C, false)), [1])))) {
      await $.wset([$t7], "FType2", "(cont.type# = 4)", { get: async () => L0["ftype2"], set: async (v) => { L0["ftype2"] = v; }, local: true });
    } else {
      await $.wset([$t7], "FType2", "", { get: async () => L0["ftype2"], set: async (v) => { L0["ftype2"] = v; }, local: true });
    }
    await $.stmt((await $.wcall([$t7], "ConcatFilter1", [(await $.wv([$t7], "FType", { get: async () => L0["ftype"], set: async (v) => { L0["ftype"] = v; }, local: true }, false)), (await $.wv([$t7], "FType1", { get: async () => L0["ftype1"], set: async (v) => { L0["ftype1"] = v; }, local: true }, false)), (await $.wv([$t7], "false", C, false))], { get: async () => L0["concatfilter1"], set: async (v) => { L0["concatfilter1"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t7], "ConcatFilter1", [(await $.wv([$t7], "FType", { get: async () => L0["ftype"], set: async (v) => { L0["ftype"] = v; }, local: true }, false)), (await $.wv([$t7], "FType2", { get: async () => L0["ftype2"], set: async (v) => { L0["ftype2"] = v; }, local: true }, false)), (await $.wv([$t7], "false", C, false))], { get: async () => L0["concatfilter1"], set: async (v) => { L0["concatfilter1"] = v; }, local: true })));
  }
  if ($.truthy((await $.mv((await $.v(C, "CBOpenedDep")), "Checked")))) {
    L0["fopendat1"] = $.add($.add(" opendate >=  '", (await $.call(C, "FormatDateTime", ["dd-MMM-yyyy", (await $.mv((await $.v(C, "DTPOpenDate")), "Date"))]))), "'");
    L0["fopendat2"] = $.add($.add(" opendate <=  '", (await $.call(C, "FormatDateTime", ["dd-MMM-yyyy", (await $.mv((await $.v(C, "DTPCloseDate")), "Date"))]))), "'");
    L0["fopendat"] = $.add($.add($.add($.add($.add($.add($.add($.add("(", "("), L0["fopendat1"]), ")"), " and "), "("), L0["fopendat2"]), ")"), ")");
  }
  if ($.truthy((await $.mv((await $.v(C, "CBCloseDep")), "Checked")))) {
    L0["fclosedat1"] = $.add($.add(" opendate >=  '", (await $.call(C, "FormatDateTime", ["dd-MMM-yyyy", (await $.mv((await $.v(C, "DTPOpenDate")), "Date"))]))), "'");
    L0["fclosedat2"] = $.add($.add(" opendate <=  '", (await $.call(C, "FormatDateTime", ["dd-MMM-yyyy", (await $.mv((await $.v(C, "DTPCloseDate")), "Date"))]))), "'");
    L0["fclosedat"] = $.add($.add($.add($.add($.add($.add($.add($.add("(", "("), L0["fclosedat1"]), ")"), " and "), "("), L0["fclosedat2"]), ")"), ")");
  }
  await $.stmt((await $.callv(L0["concatfilter1"], [L0["result"], L0["fstatus"], true])));
  await $.stmt((await $.callv(L0["concatfilter1"], [L0["result"], L0["ftype"], true])));
  await $.stmt((await $.callv(L0["concatfilter1"], [L0["result"], L0["fclosedat"], true])));
  await $.stmt((await $.callv(L0["concatfilter1"], [L0["result"], L0["fopendat"], true])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmReport_new", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmReport_new", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "dmReport_new", (await $.mcall((await $.v(C, "TdmReport_new")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmReport_new", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "dmReport_new")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmReport_new", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmReport_new", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.v(C, "CLBTypes"));
    { const $t9 = await $.iset((await $.wv([$t8], "Checked", C, false)), [0], (await $.wv([$t8], "True", C, false))); if ($t9 !== undefined) { await $.wset([$t8], "Checked", $t9, C); } }
    { const $t10 = await $.iset((await $.wv([$t8], "Checked", C, false)), [1], (await $.wv([$t8], "True", C, false))); if ($t10 !== undefined) { await $.wset([$t8], "Checked", $t10, C); } }
  }
  {
    const $t11 = (await $.v(C, "CLBStatus"));
    { const $t12 = await $.iset((await $.wv([$t11], "Checked", C, false)), [0], (await $.wv([$t11], "True", C, false))); if ($t12 !== undefined) { await $.wset([$t11], "Checked", $t12, C); } }
    { const $t13 = await $.iset((await $.wv([$t11], "Checked", C, false)), [1], (await $.wv([$t11], "True", C, false))); if ($t13 !== undefined) { await $.wset([$t11], "Checked", $t13, C); } }
  }
  await $.mset((await $.v(C, "DTPReport")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "DTPOpenDate")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "DTPCloseDate")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "DTPCls1")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "DTPCls2")), "DateTime", (await $.v(C, "Get_BankDate")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmReport_new", (await $.mcall((await $.v(C, "TfrmReport_new")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
