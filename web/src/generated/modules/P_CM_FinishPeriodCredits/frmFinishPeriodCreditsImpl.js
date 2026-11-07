// Generated from frmFinishPeriodCreditsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmFinishPeriodCreditsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "ComCtrls", "CheckLst", "CMExcelExport", "Buttons", "CommonDecls", "dmFinishPeriodCreditsImpl", "SbSystem", "frmQrptFPCreditsImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TfrmFinishPeriodCredits", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "cbavalute": {"name": "CBaValute", "type": "TCheckBox"}, "lcbvalutes": {"name": "LCBValutes", "type": "TDBLookupComboboxEh"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "lcbusergroup": {"name": "LCBusergroup", "type": "TDBLookupComboboxEh"}, "cbusergroup": {"name": "CBusergroup", "type": "TCheckBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "lcbfilials": {"name": "LCBFilials", "type": "TDBLookupComboboxEh"}, "cbfilial": {"name": "CBFilial", "type": "TCheckBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "cbcategories": {"name": "CBCategories", "type": "TCheckBox"}, "lcbcategories": {"name": "LCBCategories", "type": "TDBLookupComboboxEh"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "lcbcredittype": {"name": "LCBCreditType", "type": "TDBLookupComboboxEh"}, "cbcredittype": {"name": "CBCreditType", "type": "TCheckBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "lcbpersons": {"name": "LCBPersons", "type": "TDBLookupComboboxEh"}, "cbpersons": {"name": "CBPersons", "type": "TCheckBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "cbreserve": {"name": "CBReserve", "type": "TCheckBox"}, "lcbreserve": {"name": "LCBReserve", "type": "TDBLookupComboboxEh"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "lcbpledgid": {"name": "LCBpledgid", "type": "TDBLookupComboboxEh"}, "cbpledgid": {"name": "CBpledgid", "type": "TCheckBox"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "lcbduereserve": {"name": "LCBDueReserve", "type": "TDBLookupComboboxEh"}, "cbduereserve": {"name": "CBDueReserve", "type": "TCheckBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "groupbox12": {"name": "GroupBox12", "type": "TGroupBox"}, "clbstatus": {"name": "CLBStatus", "type": "TCheckListBox"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "dtpcls1": {"name": "DTPCls1", "type": "TDateTimePicker"}, "dtpcls2": {"name": "DTPCls2", "type": "TDateTimePicker"}, "eexport": {"name": "EExport", "type": "TCMExcelExport"}, "bitbtnok": {"name": "BitBtnOk", "type": "TBitBtn"}, "bitbtncancel": {"name": "BitBtnCancel", "type": "TBitBtn"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "cbopeneddep": {"name": "CBOpenedDep", "type": "TCheckBox"}, "dtpo1": {"name": "DTPO1", "type": "TDateTimePicker"}, "dtpo2": {"name": "DTPO2", "type": "TDateTimePicker"}, "cbclosedep": {"name": "CBCloseDep", "type": "TCheckBox"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "groupbox14": {"name": "GroupBox14", "type": "TGroupBox"}, "groupbox15": {"name": "GroupBox15", "type": "TGroupBox"}, "lcbcustomer": {"name": "LCBCustomer", "type": "TDBLookupComboboxEh"}, "cbcustomer": {"name": "CBCustomer", "type": "TCheckBox"}, "cbcustomerid": {"name": "CBCustomerID", "type": "TCheckBox"}, "lcbcustomerid": {"name": "LCBCustomerID", "type": "TDBLookupComboboxEh"}, "rgreport": {"name": "RGreport", "type": "TRadioGroup"}}, {});
  U.init(async () => {
    U.var_("frmFinishPeriodCredits", null, "TfrmFinishPeriodCredits");
  });
  U.method("TfrmFinishPeriodCredits", "ExportExcel", async function ExportExcel(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.wobj(C, "EExport"));
    await $.stmt($.wcall([$t1], "Connect", [], C));
    await $.stmt((await $.wcall([$t1], "ExportDataset", [(await $.mv((await $.wv([$t1], "dmFinishPeriodCredits", C, false)), "ReportData")), "Vaxtı çatmış kreditlər", (await $.wv([$t1], "True", C, false))], C)));
    await $.stmt($.wcall([$t1], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmFinishPeriodCredits", "ShowReport", async function ShowReport(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t2 = (await $.wobj(C, "frmQrptFPCredits"));
    const $t3 = (await $.wv([$t2], "FPCreditsQRp", C, false));
    await $.stmt($.wcall([$t2, $t3], "Preview", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmFinishPeriodCredits", "ExecReport", async function ExecReport(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t4 = (await $.wobj(C, "RGreport"));
    { const $t5 = (await $.wv([$t4], "ItemIndex", C, false));
      if ($.eq($t5, 0)) {
        await $.stmt($.wcall([$t4], "ExportExcel", [], C));
      }
      else if ($.eq($t5, 1)) {
        await $.stmt($.wcall([$t4], "ShowReport", [], C));
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "frmFinishPeriodCredits")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmFinishPeriodCredits", "BuildFilterString", async function BuildFilterString(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "fstatus": '', "fopendat1": '', "fopendat2": '', "fopendat": '', "fstatus2": '', "fstatus1": '', "fclosedat": '', "fclosedat1": '', "fclosedat2": ''};
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
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t6) => { L0["result"] = $t6; }), "p.CURRENCY", (await $.mv((await $.v(C, "CBaValute")), "Checked")), (await $.mv((await $.v(C, "LCBValutes")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t7) => { L0["result"] = $t7; }), "p.BRANCHID", (await $.mv((await $.v(C, "CBFilial")), "Checked")), (await $.mv((await $.v(C, "LCBFilials")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t8) => { L0["result"] = $t8; }), "p.PERSONALTYPE", (await $.mv((await $.v(C, "CBPersons")), "Checked")), (await $.mv((await $.v(C, "LCBPersons")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t9) => { L0["result"] = $t9; }), "p.CustomerTYPE", (await $.mv((await $.v(C, "CBCategories")), "Checked")), (await $.mv((await $.v(C, "LCBCategories")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t10) => { L0["result"] = $t10; }), "p.CreditType", (await $.mv((await $.v(C, "CBCreditType")), "Checked")), (await $.mv((await $.v(C, "LCBCreditType")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t11) => { L0["result"] = $t11; }), "p.usergroup", (await $.mv((await $.v(C, "CBusergroup")), "Checked")), (await $.mv((await $.v(C, "LCBusergroup")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t12) => { L0["result"] = $t12; }), "h.ReserveID", (await $.mv((await $.v(C, "CBReserve")), "Checked")), (await $.mv((await $.v(C, "LCBReserve")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t13) => { L0["result"] = $t13; }), "h.DueReserveID", (await $.mv((await $.v(C, "CBDueReserve")), "Checked")), (await $.mv((await $.v(C, "LCBDueReserve")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t14) => { L0["result"] = $t14; }), "h.pledgid", (await $.mv((await $.v(C, "CBpledgid")), "Checked")), (await $.mv((await $.v(C, "LCBpledgid")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t15) => { L0["result"] = $t15; }), "p.BoorowerID", (await $.mv((await $.v(C, "CBCustomer")), "Checked")), (await $.mv((await $.v(C, "LCBCustomer")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t16) => { L0["result"] = $t16; }), "p.BoorowerID", (await $.mv((await $.v(C, "CBCustomerID")), "Checked")), (await $.mv((await $.v(C, "LCBCustomerID")), "KeyValue"))])));
  {
    const $t17 = (await $.wobj(C, "CLBStatus"));
    if ($.truthy((await $.idx((await $.wv([$t17], "Checked", C, false)), [0])))) {
      await $.wset([$t17], "FStatus1", "(h.stopcalcdate is null )", { get: async () => L0["fstatus1"], set: async (v) => { L0["fstatus1"] = v; }, local: true });
    } else {
      await $.wset([$t17], "FStatus1", "", { get: async () => L0["fstatus1"], set: async (v) => { L0["fstatus1"] = v; }, local: true });
    }
    if ($.truthy((await $.idx((await $.wv([$t17], "Checked", C, false)), [1])))) {
      await $.wset([$t17], "FStatus2", "(h.stopcalcdate is not null)", { get: async () => L0["fstatus2"], set: async (v) => { L0["fstatus2"] = v; }, local: true });
    } else {
      await $.wset([$t17], "FStatus2", "", { get: async () => L0["fstatus2"], set: async (v) => { L0["fstatus2"] = v; }, local: true });
    }
    await $.stmt((await $.wcall([$t17], "ConcatFilter1", [$.ref(async () => (await $.wv([$t17], "FStatus", { get: async () => L0["fstatus"], set: async (v) => { L0["fstatus"] = v; }, local: true }, false)), async ($t18) => { await $.wset([$t17], "FStatus", $t18, { get: async () => L0["fstatus"], set: async (v) => { L0["fstatus"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t17], "FStatus1", { get: async () => L0["fstatus1"], set: async (v) => { L0["fstatus1"] = v; }, local: true }, false)), async ($t19) => { await $.wset([$t17], "FStatus1", $t19, { get: async () => L0["fstatus1"], set: async (v) => { L0["fstatus1"] = v; }, local: true }); }), (await $.wv([$t17], "false", C, false))], { get: async () => L0["concatfilter1"], set: async (v) => { L0["concatfilter1"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t17], "ConcatFilter1", [$.ref(async () => (await $.wv([$t17], "FStatus", { get: async () => L0["fstatus"], set: async (v) => { L0["fstatus"] = v; }, local: true }, false)), async ($t20) => { await $.wset([$t17], "FStatus", $t20, { get: async () => L0["fstatus"], set: async (v) => { L0["fstatus"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t17], "FStatus2", { get: async () => L0["fstatus2"], set: async (v) => { L0["fstatus2"] = v; }, local: true }, false)), async ($t21) => { await $.wset([$t17], "FStatus2", $t21, { get: async () => L0["fstatus2"], set: async (v) => { L0["fstatus2"] = v; }, local: true }); }), (await $.wv([$t17], "false", C, false))], { get: async () => L0["concatfilter1"], set: async (v) => { L0["concatfilter1"] = v; }, local: true })));
  }
  if ($.truthy((await $.mv((await $.v(C, "CBOpenedDep")), "Checked")))) {
    L0["fopendat1"] = $.add($.add(" p.dateofconclusion >=  '", (await $.call(C, "FormatDateTime", ["dd-MMM-yyyy", (await $.mv((await $.v(C, "DTPO1")), "Date"))]))), "'");
    L0["fopendat2"] = $.add($.add(" p.dateofconclusion <=  '", (await $.call(C, "FormatDateTime", ["dd-MMM-yyyy", (await $.mv((await $.v(C, "DTPO2")), "Date"))]))), "'");
    L0["fopendat"] = $.add($.add($.add($.add($.add($.add($.add($.add("(", "("), L0["fopendat1"]), ")"), " and "), "("), L0["fopendat2"]), ")"), ")");
  }
  if ($.truthy((await $.mv((await $.v(C, "CBCloseDep")), "Checked")))) {
    L0["fclosedat1"] = $.add($.add(" p.duedatefirstcontract >=  '", (await $.call(C, "FormatDateTime", ["dd-MMM-yyyy", (await $.mv((await $.v(C, "DTPCls1")), "Date"))]))), "'");
    L0["fclosedat2"] = $.add($.add(" p.duedatefirstcontract <=  '", (await $.call(C, "FormatDateTime", ["dd-MMM-yyyy", (await $.mv((await $.v(C, "DTPCls2")), "Date"))]))), "'");
    L0["fclosedat"] = $.add($.add($.add($.add($.add($.add($.add($.add("(", "("), L0["fclosedat1"]), ")"), " and "), "("), L0["fclosedat2"]), ")"), ")");
  }
  await $.stmt((await $.callv(L0["concatfilter1"], [$.ref(async () => L0["result"], async ($t22) => { L0["result"] = $t22; }), $.ref(async () => L0["fstatus"], async ($t23) => { L0["fstatus"] = $t23; }), true])));
  await $.stmt((await $.callv(L0["concatfilter1"], [$.ref(async () => L0["result"], async ($t24) => { L0["result"] = $t24; }), $.ref(async () => L0["fclosedat"], async ($t25) => { L0["fclosedat"] = $t25; }), true])));
  await $.stmt((await $.callv(L0["concatfilter1"], [$.ref(async () => L0["result"], async ($t26) => { L0["result"] = $t26; }), $.ref(async () => L0["fopendat"], async ($t27) => { L0["fopendat"] = $t27; }), true])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmFinishPeriodCredits", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmFinishPeriodCredits", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmFinishPeriodCredits", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t28 = (await $.wobj(C, "CLBStatus"));
    { const $t29 = await $.iset((await $.wv([$t28], "Checked", C, false)), [0], (await $.wv([$t28], "True", C, false))); if ($t29 !== undefined) { await $.wset([$t28], "Checked", $t29, C); } }
    { const $t30 = await $.iset((await $.wv([$t28], "Checked", C, false)), [1], (await $.wv([$t28], "True", C, false))); if ($t30 !== undefined) { await $.wset([$t28], "Checked", $t30, C); } }
  }
  await $.mset((await $.v(C, "DTPO1")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "DTPO2")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "DTPCls1")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "DTPCls2")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmFinishPeriodCredits", "BitBtnOkClick", async function BitBtnOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t31 = (await $.wobj(C, "dmFinishPeriodCredits"));
    {
      const $t32 = (await $.wv([$t31], "ReportData", C, false));
      if ($.truthy((await $.wv([$t31, $t32], "Active", C, false)))) {
        await $.stmt($.wcall([$t31, $t32], "Close", [], C));
      }
      { const $t33 = await $.iset((await $.wv([$t31, $t32], "SQL", C, false)), [25], $.add(" and ", (await $.wv([$t31, $t32], "BuildFilterString", C, false)))); if ($t33 !== undefined) { await $.wset([$t31, $t32], "SQL", $t33, C); } }
      await $.stmt($.wcall([$t31, $t32], "Open", [], C));
    }
  }
  await $.stmt($.call(C, "ExecReport", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmFinishPeriodCredits", "BitBtnCancelClick", async function BitBtnCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmFinishPeriodCredits", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "dmFinishPeriodCredits", (await $.mcall((await $.v(C, "TdmFinishPeriodCredits")), "Create", [Self])));
  await $.set(C, "frmQrptFPCredits", (await $.mcall((await $.v(C, "TfrmQrptFPCredits")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmFinishPeriodCredits", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "dmFinishPeriodCredits")), "Free", []);
  await $.mcall((await $.v(C, "frmQrptFPCredits")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmFinishPeriodCredits", (await $.mcall((await $.v(C, "TfrmFinishPeriodCredits")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
