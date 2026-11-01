// Generated from NewDepositsFrmReportImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsFrmReportImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "ComCtrls", "CheckLst", "Buttons", "CMExcelExport", "DBGridEh", "XFSCtrls", "NewCommonDeclsImpl", "NewDepositsDmReportImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TNewDepositsFrmReport", "TForm", {"bitbtncancel": {"name": "BitBtnCancel", "type": "TBitBtn"}, "bitbtnok": {"name": "BitBtnOk", "type": "TBitBtn"}, "eexport": {"name": "EExport", "type": "TCMExcelExport"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "lcbvalutes": {"name": "LCBValutes", "type": "TDBLookupComboboxEh"}, "lcbfilials": {"name": "LCBFilials", "type": "TDBLookupComboboxEh"}, "lcbdeposittypes": {"name": "LCBDepositTypes", "type": "TDBLookupComboboxEh"}, "cbavalute": {"name": "CBAvalute", "type": "TXFCheckBox"}, "cbfilial": {"name": "CBFilial", "type": "TXFCheckBox"}, "cbdeposittypes": {"name": "CBDepositTypes", "type": "TXFCheckBox"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfgroupbox4": {"name": "XFGroupBox4", "type": "TXFGroupBox"}, "cbcustomer": {"name": "CBCustomer", "type": "TXFCheckBox"}, "xfgroupbox5": {"name": "XFGroupBox5", "type": "TXFGroupBox"}, "cbaccno": {"name": "CBAccno", "type": "TXFCheckBox"}, "xfgroupbox6": {"name": "XFGroupBox6", "type": "TXFGroupBox"}, "cbcodcust": {"name": "CBCodCust", "type": "TXFCheckBox"}, "lcbcustomer": {"name": "LCBCustomer", "type": "TDBLookupComboboxEh"}, "lcbcodcust": {"name": "LCBCodCust", "type": "TDBLookupComboboxEh"}, "lcbaccno": {"name": "LCBAccno", "type": "TDBLookupComboboxEh"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfgroupbox7": {"name": "XFGroupBox7", "type": "TXFGroupBox"}, "cbpersons": {"name": "CBPersons", "type": "TXFCheckBox"}, "xfgroupbox8": {"name": "XFGroupBox8", "type": "TXFGroupBox"}, "cbopeneddep": {"name": "CBOpenedDep", "type": "TXFCheckBox"}, "xfgroupbox9": {"name": "XFGroupBox9", "type": "TXFGroupBox"}, "cbcategories": {"name": "CBCategories", "type": "TXFCheckBox"}, "lcbpersons": {"name": "LCBPersons", "type": "TDBLookupComboboxEh"}, "lcbcategories": {"name": "LCBCategories", "type": "TDBLookupComboboxEh"}, "dtpopendate": {"name": "DTPOpenDate", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "dtpclosedate": {"name": "DTPCloseDate", "type": "TDateTimePicker"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xfgroupbox10": {"name": "XFGroupBox10", "type": "TXFGroupBox"}, "xfgroupbox11": {"name": "XFGroupBox11", "type": "TXFGroupBox"}, "cbclosedep": {"name": "CBCloseDep", "type": "TXFCheckBox"}, "xfgroupbox12": {"name": "XFGroupBox12", "type": "TXFGroupBox"}, "clbtypes": {"name": "CLBTypes", "type": "TCheckListBox"}, "clbstatus": {"name": "CLBStatus", "type": "TCheckListBox"}, "dtpcls1": {"name": "DTPCls1", "type": "TDateTimePicker"}, "label2": {"name": "Label2", "type": "TLabel"}, "dtpcls2": {"name": "DTPCls2", "type": "TDateTimePicker"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "dtpreport": {"name": "DTPReport", "type": "TDateTimePicker"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "bitbtn1": {"name": "BitBtn1", "type": "TXFButton"}, "bitbtn2": {"name": "BitBtn2", "type": "TXFButton"}}, {});
  U.init(async () => {
    U.var_("NewDepositsFrmReport", null, "TNewDepositsFrmReport");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "NewDepositsFrmReport")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TNewDepositsFrmReport", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmReport", "BuildFilterString", async function BuildFilterString(Self) {
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
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t1) => { L0["result"] = $t1; }), "cont.CURRENCY", (await $.mv((await $.v(C, "CBaValute")), "Checked")), (await $.mv((await $.v(C, "LCBValutes")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t2) => { L0["result"] = $t2; }), "cont.BRANCHID", (await $.mv((await $.v(C, "CBFilial")), "Checked")), (await $.mv((await $.v(C, "LCBFilials")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t3) => { L0["result"] = $t3; }), "cont.PERSONALTYPE", (await $.mv((await $.v(C, "CBPersons")), "Checked")), (await $.mv((await $.v(C, "LCBPersons")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t4) => { L0["result"] = $t4; }), "cont.CLIENTTYPE", (await $.mv((await $.v(C, "CBCategories")), "Checked")), (await $.mv((await $.v(C, "LCBCategories")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t5) => { L0["result"] = $t5; }), "cont.ContractType", (await $.mv((await $.v(C, "CBDepositTypes")), "Checked")), (await $.mv((await $.v(C, "LCBDepositTypes")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t6) => { L0["result"] = $t6; }), "acc.contractaccid", (await $.mv((await $.v(C, "CBCustomer")), "Checked")), (await $.mv((await $.v(C, "LCBCustomer")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t7) => { L0["result"] = $t7; }), "cont.CUSTOMERID", (await $.mv((await $.v(C, "CBCodCust")), "Checked")), (await $.mv((await $.v(C, "LCBCodCust")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t8) => { L0["result"] = $t8; }), "cont.id", (await $.mv((await $.v(C, "CBAccno")), "Checked")), (await $.mv((await $.v(C, "LCBAccno")), "KeyValue"))])));
  {
    const $t9 = (await $.wobj(C, "CLBStatus"));
    if ($.truthy((await $.idx((await $.wv([$t9], "Checked", C, false)), [0])))) {
      await $.wset([$t9], "FStatus1", "(h.calculationenabled = 1)", { get: async () => L0["fstatus1"], set: async (v) => { L0["fstatus1"] = v; }, local: true });
    } else {
      await $.wset([$t9], "FStatus1", "", { get: async () => L0["fstatus1"], set: async (v) => { L0["fstatus1"] = v; }, local: true });
    }
    if ($.truthy((await $.idx((await $.wv([$t9], "Checked", C, false)), [1])))) {
      await $.wset([$t9], "FStatus2", "(h.calculationenabled = 0)", { get: async () => L0["fstatus2"], set: async (v) => { L0["fstatus2"] = v; }, local: true });
    } else {
      await $.wset([$t9], "FStatus2", "", { get: async () => L0["fstatus2"], set: async (v) => { L0["fstatus2"] = v; }, local: true });
    }
    await $.stmt((await $.wcall([$t9], "ConcatFilter1", [$.ref(async () => (await $.wv([$t9], "FStatus", { get: async () => L0["fstatus"], set: async (v) => { L0["fstatus"] = v; }, local: true }, false)), async ($t10) => { await $.wset([$t9], "FStatus", $t10, { get: async () => L0["fstatus"], set: async (v) => { L0["fstatus"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t9], "FStatus1", { get: async () => L0["fstatus1"], set: async (v) => { L0["fstatus1"] = v; }, local: true }, false)), async ($t11) => { await $.wset([$t9], "FStatus1", $t11, { get: async () => L0["fstatus1"], set: async (v) => { L0["fstatus1"] = v; }, local: true }); }), (await $.wv([$t9], "false", C, false))], { get: async () => L0["concatfilter1"], set: async (v) => { L0["concatfilter1"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t9], "ConcatFilter1", [$.ref(async () => (await $.wv([$t9], "FStatus", { get: async () => L0["fstatus"], set: async (v) => { L0["fstatus"] = v; }, local: true }, false)), async ($t12) => { await $.wset([$t9], "FStatus", $t12, { get: async () => L0["fstatus"], set: async (v) => { L0["fstatus"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t9], "FStatus2", { get: async () => L0["fstatus2"], set: async (v) => { L0["fstatus2"] = v; }, local: true }, false)), async ($t13) => { await $.wset([$t9], "FStatus2", $t13, { get: async () => L0["fstatus2"], set: async (v) => { L0["fstatus2"] = v; }, local: true }); }), (await $.wv([$t9], "false", C, false))], { get: async () => L0["concatfilter1"], set: async (v) => { L0["concatfilter1"] = v; }, local: true })));
  }
  {
    const $t14 = (await $.wobj(C, "CLBTypes"));
    if ($.truthy((await $.idx((await $.wv([$t14], "Checked", C, false)), [0])))) {
      await $.wset([$t14], "FType1", "(cont.type# = 3)", { get: async () => L0["ftype1"], set: async (v) => { L0["ftype1"] = v; }, local: true });
    } else {
      await $.wset([$t14], "FType1", "", { get: async () => L0["ftype1"], set: async (v) => { L0["ftype1"] = v; }, local: true });
    }
    if ($.truthy((await $.idx((await $.wv([$t14], "Checked", C, false)), [1])))) {
      await $.wset([$t14], "FType2", "(cont.type# = 4)", { get: async () => L0["ftype2"], set: async (v) => { L0["ftype2"] = v; }, local: true });
    } else {
      await $.wset([$t14], "FType2", "", { get: async () => L0["ftype2"], set: async (v) => { L0["ftype2"] = v; }, local: true });
    }
    await $.stmt((await $.wcall([$t14], "ConcatFilter1", [$.ref(async () => (await $.wv([$t14], "FType", { get: async () => L0["ftype"], set: async (v) => { L0["ftype"] = v; }, local: true }, false)), async ($t15) => { await $.wset([$t14], "FType", $t15, { get: async () => L0["ftype"], set: async (v) => { L0["ftype"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t14], "FType1", { get: async () => L0["ftype1"], set: async (v) => { L0["ftype1"] = v; }, local: true }, false)), async ($t16) => { await $.wset([$t14], "FType1", $t16, { get: async () => L0["ftype1"], set: async (v) => { L0["ftype1"] = v; }, local: true }); }), (await $.wv([$t14], "false", C, false))], { get: async () => L0["concatfilter1"], set: async (v) => { L0["concatfilter1"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t14], "ConcatFilter1", [$.ref(async () => (await $.wv([$t14], "FType", { get: async () => L0["ftype"], set: async (v) => { L0["ftype"] = v; }, local: true }, false)), async ($t17) => { await $.wset([$t14], "FType", $t17, { get: async () => L0["ftype"], set: async (v) => { L0["ftype"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t14], "FType2", { get: async () => L0["ftype2"], set: async (v) => { L0["ftype2"] = v; }, local: true }, false)), async ($t18) => { await $.wset([$t14], "FType2", $t18, { get: async () => L0["ftype2"], set: async (v) => { L0["ftype2"] = v; }, local: true }); }), (await $.wv([$t14], "false", C, false))], { get: async () => L0["concatfilter1"], set: async (v) => { L0["concatfilter1"] = v; }, local: true })));
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
  await $.stmt((await $.callv(L0["concatfilter1"], [$.ref(async () => L0["result"], async ($t19) => { L0["result"] = $t19; }), $.ref(async () => L0["fstatus"], async ($t20) => { L0["fstatus"] = $t20; }), true])));
  await $.stmt((await $.callv(L0["concatfilter1"], [$.ref(async () => L0["result"], async ($t21) => { L0["result"] = $t21; }), $.ref(async () => L0["ftype"], async ($t22) => { L0["ftype"] = $t22; }), true])));
  await $.stmt((await $.callv(L0["concatfilter1"], [$.ref(async () => L0["result"], async ($t23) => { L0["result"] = $t23; }), $.ref(async () => L0["fclosedat"], async ($t24) => { L0["fclosedat"] = $t24; }), true])));
  await $.stmt((await $.callv(L0["concatfilter1"], [$.ref(async () => L0["result"], async ($t25) => { L0["result"] = $t25; }), $.ref(async () => L0["fopendat"], async ($t26) => { L0["fopendat"] = $t26; }), true])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsFrmReport", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TNewDepositsFrmReport", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "NewDepositsDmReport", (await $.mcall((await $.v(C, "TNewDepositsDmReport")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmReport", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "NewDepositsDmReport")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmReport", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsFrmReport", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t27 = (await $.wobj(C, "CLBTypes"));
    { const $t28 = await $.iset((await $.wv([$t27], "Checked", C, false)), [0], (await $.wv([$t27], "True", C, false))); if ($t28 !== undefined) { await $.wset([$t27], "Checked", $t28, C); } }
    { const $t29 = await $.iset((await $.wv([$t27], "Checked", C, false)), [1], (await $.wv([$t27], "True", C, false))); if ($t29 !== undefined) { await $.wset([$t27], "Checked", $t29, C); } }
  }
  {
    const $t30 = (await $.wobj(C, "CLBStatus"));
    { const $t31 = await $.iset((await $.wv([$t30], "Checked", C, false)), [0], (await $.wv([$t30], "True", C, false))); if ($t31 !== undefined) { await $.wset([$t30], "Checked", $t31, C); } }
    { const $t32 = await $.iset((await $.wv([$t30], "Checked", C, false)), [1], (await $.wv([$t30], "True", C, false))); if ($t32 !== undefined) { await $.wset([$t30], "Checked", $t32, C); } }
  }
  await $.mset((await $.v(C, "DTPReport")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "DTPOpenDate")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "DTPCloseDate")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "DTPCls1")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "DTPCls2")), "DateTime", (await $.v(C, "Get_BankDate")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmReport", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["dat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPReport")), "DateTime"))]))]));
  {
    const $t33 = (await $.wobj(C, "NewDepositsDmReport"));
    const $t34 = (await $.wv([$t33], "ReportData", C, false));
    if ($.truthy((await $.wv([$t33, $t34], "Active", C, false)))) {
      await $.stmt($.wcall([$t33, $t34], "CloseAll", [], C));
    }
    { const $t35 = await $.iset((await $.wv([$t33, $t34], "SQL", C, false)), [53], $.add(" and ", (await $.wv([$t33, $t34], "BuildFilterString", C, false)))); if ($t35 !== undefined) { await $.wset([$t33, $t34], "SQL", $t35, C); } }
    await $.stmt((await $.wcall([$t33, $t34], "SetVariable", ["Dat", (await $.wv([$t33, $t34], "Dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t33, $t34], "Open", [], C));
  }
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "NewDepositsDmReport")), "ReportData")), "RecordCount")), 0))) {
    {
      const $t36 = (await $.wobj(C, "EExport"));
      await $.stmt($.wcall([$t36], "Connect", [], C));
      await $.stmt((await $.wcall([$t36], "ExportDataset", [(await $.mv((await $.wv([$t36], "NewDepositsDmReport", C, false)), "ReportData")), "Mis hesabatı", (await $.wv([$t36], "true", C, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "NewDepositsFrmReport", (await $.mcall((await $.v(C, "TNewDepositsFrmReport")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
