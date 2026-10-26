// Generated from NewDepositsFormFilterImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsFormFilterImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "NLSLocalizer", "ComCtrls", "CMExcelExport", "DBGridEh", "XFSCtrls", "NewCommonDeclsImpl", "NewDepositsFilterImpl", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TNewDepositsFormFilter", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "eexport": {"name": "EExport", "type": "TCMExcelExport"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "lcbvalute": {"name": "LCBValute", "type": "TDBLookupComboboxEh"}, "cbvalute": {"name": "CBValute", "type": "TXFCheckBox"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "lcbfilial": {"name": "LCBFilial", "type": "TDBLookupComboboxEh"}, "cbfilial": {"name": "CBFilial", "type": "TXFCheckBox"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "lcbpersons": {"name": "LCBPersons", "type": "TDBLookupComboboxEh"}, "cbpersons": {"name": "CBPersons", "type": "TXFCheckBox"}, "xfgroupbox4": {"name": "XFGroupBox4", "type": "TXFGroupBox"}, "cbcategories": {"name": "CBCategories", "type": "TXFCheckBox"}, "lcbcategories": {"name": "LCBCategories", "type": "TDBLookupComboboxEh"}, "xfgroupbox5": {"name": "XFGroupBox5", "type": "TXFGroupBox"}, "cbdeposittypes": {"name": "CBDepositTypes", "type": "TXFCheckBox"}, "lcbdeposittypes": {"name": "LCBDepositTypes", "type": "TDBLookupComboboxEh"}, "xfgroupbox6": {"name": "XFGroupBox6", "type": "TXFGroupBox"}, "cbcustomer": {"name": "CBCustomer", "type": "TXFCheckBox"}, "lcbcustomer": {"name": "LCBCustomer", "type": "TDBLookupComboboxEh"}, "xfgroupbox7": {"name": "XFGroupBox7", "type": "TXFGroupBox"}, "lcbusers": {"name": "LCBUsers", "type": "TDBLookupComboboxEh"}, "cbusers": {"name": "CBUsers", "type": "TXFCheckBox"}, "xfgroupbox8": {"name": "XFGroupBox8", "type": "TXFGroupBox"}, "lcbstatus": {"name": "LCBStatus", "type": "TComboBox"}, "cbstatus": {"name": "CBStatus", "type": "TXFCheckBox"}, "xfgroupbox9": {"name": "XFGroupBox9", "type": "TXFGroupBox"}, "dtpopendate": {"name": "DTPOpenDate", "type": "TDateTimePicker"}, "dtpclosedate": {"name": "DTPCloseDate", "type": "TDateTimePicker"}, "cbopendat": {"name": "CBOpendat", "type": "TXFCheckBox"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "buttonok": {"name": "ButtonOk", "type": "TXFButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TXFButton"}, "buttonexport": {"name": "ButtonExport", "type": "TXFButton"}, "buttonclose": {"name": "ButtonClose", "type": "TXFButton"}}, {});
  U.init(async () => {
    U.var_("NewDepositsFormFilter", null, "TNewDepositsFormFilter");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "NewDepositsFormFilter")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TNewDepositsFormFilter", "BuildFilterString", async function BuildFilterString(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "fstatus": '', "fopendat1": '', "fopendat2": '', "fopendat": ''};
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
  L0["result"] = "";
  L0["fstatus"] = "";
  L0["fopendat1"] = "";
  L0["fopendat2"] = "";
  L0["fopendat"] = "";
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "CURRENCY", (await $.mv((await $.v(C, "CBValute")), "Checked")), (await $.mv((await $.v(C, "LCBValute")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "BRANCHID", (await $.mv((await $.v(C, "CBFilial")), "Checked")), (await $.mv((await $.v(C, "LCBFilial")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "PERSONALTYPE", (await $.mv((await $.v(C, "CBPersons")), "Checked")), (await $.mv((await $.v(C, "LCBPersons")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "CLIENTTYPE", (await $.mv((await $.v(C, "CBCategories")), "Checked")), (await $.mv((await $.v(C, "LCBCategories")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "ContractType", (await $.mv((await $.v(C, "CBDepositTypes")), "Checked")), (await $.mv((await $.v(C, "LCBDepositTypes")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "CUSTOMERID", (await $.mv((await $.v(C, "CBCustomer")), "Checked")), (await $.mv((await $.v(C, "LCBCustomer")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "usid", (await $.mv((await $.v(C, "CBUsers")), "Checked")), (await $.mv((await $.v(C, "LCBUsers")), "KeyValue"))])));
  if ($.truthy((await $.mv((await $.v(C, "CBStatus")), "Checked")))) {
    { const $t1 = (await $.mv((await $.v(C, "LCBStatus")), "ItemIndex"));
      if ($.eq($t1, 0)) {
        L0["fstatus"] = "(status = 1)";
      }
      else if ($.eq($t1, 1)) {
        L0["fstatus"] = "(Status = 0)";
      }
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "CBOpendat")), "Checked")))) {
    L0["fopendat1"] = $.add($.add(" opendate >=  '", (await $.call(C, "FormatDateTime", ["dd/MM/yyyy", (await $.mv((await $.v(C, "DTPOpenDate")), "Date"))]))), "'");
    L0["fopendat2"] = $.add($.add(" opendate <=  '", (await $.call(C, "FormatDateTime", ["dd/MM/yyyy", (await $.mv((await $.v(C, "DTPCloseDate")), "Date"))]))), "'");
    L0["fopendat"] = $.add($.add($.add($.add($.add($.add($.add($.add("(", "("), L0["fopendat1"]), ")"), " and "), "("), L0["fopendat2"]), ")"), ")");
  }
  await $.stmt((await $.callv(L0["concatfilter1"], [L0["result"], L0["fstatus"]])));
  await $.stmt((await $.callv(L0["concatfilter1"], [L0["result"], L0["fopendat"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsFormFilter", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TNewDepositsFormFilter", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsFormFilter", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "dmFilter", (await $.mcall((await $.v(C, "TdmFilter")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFormFilter", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "dmFilter")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFormFilter", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "LCBStatus")), "ItemIndex", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFormFilter", "ButtonOkClick", async function ButtonOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "CommonGrid"));
    const $t3 = (await $.mv((await $.wv([$t2], "DataSource", C, false)), "DataSet"));
    const $t4 = (await $.wv([$t2, $t3], "SelectedRows", C, false));
    await $.stmt($.wcall([$t2, $t3, $t4], "Clear", [], C));
    await $.wset([$t2, $t3, $t4], "Filtered", (await $.wv([$t2, $t3, $t4], "False", C, false)), C);
    await $.wset([$t2, $t3, $t4], "Filter", (await $.wv([$t2, $t3, $t4], "BuildFilterString", C, false)), C);
    await $.wset([$t2, $t3, $t4], "Filtered", (await $.wv([$t2, $t3, $t4], "True", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFormFilter", "ButtonCancelClick", async function ButtonCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "CommonGrid"));
    const $t6 = (await $.mv((await $.wv([$t5], "DataSource", C, false)), "DataSet"));
    await $.wset([$t5, $t6], "Filtered", (await $.wv([$t5, $t6], "False", C, false)), C);
    await $.wset([$t5, $t6], "Filter", "", C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFormFilter", "ButtonExportClick", async function ButtonExportClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "EExport"));
    await $.mcall((await $.mv((await $.mv((await $.wv([$t7], "CommonGrid", C, false)), "DataSource")), "DataSet")), "Last", []);
    await $.stmt($.wcall([$t7], "Connect", [], C));
    await $.stmt((await $.wcall([$t7], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t7], "CommonGrid", C, false)), "DataSource")), "DataSet")), "Depozitlər", (await $.wv([$t7], "True", C, false))], C)));
    await $.stmt($.wcall([$t7], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFormFilter", "ButtonCloseClick", async function ButtonCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "NewDepositsFormFilter", (await $.mcall((await $.v(C, "TNewDepositsFormFilter")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
