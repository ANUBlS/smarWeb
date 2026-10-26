// Generated from CUPaymentMainFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CUPaymentMainFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "Mask", "DBCtrls", "Grids", "DBGridEh", "ComCtrls", "ImgList", "ToolWin", "ActnList", "CMExcelExport", "Variants", "XDBGrids", "DBGridEhGrouping", "GridsEh", "CUCommonDecls", "CUPaymentDataModuleImpl", "CUPaymentAddFormImpl", "sbsystem"]);
  const C = [U];
  U.defClass("TPaymentForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "paymentgrid": {"name": "PaymentGrid", "type": "TDBGridEh"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnpaymentadd": {"name": "ActnPaymentAdd", "type": "TAction"}, "actnpaymentdel": {"name": "ActnPaymentDel", "type": "TAction"}, "actnexcel": {"name": "ActnExcel", "type": "TAction"}, "actnclose": {"name": "ActnClose", "type": "TAction"}, "excelexporter": {"name": "ExcelExporter", "type": "TCMExcelExport"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "label1": {"name": "Label1", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("PaymentForm", null, "TPaymentForm");
    U.var_("cusid", 0, "integer");
    U.var_("RefreshBeforeClose", false, "Boolean");
  });
  U.method("TPaymentForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CUPaymentDataModule", (await $.mcall((await $.v(C, "TCUPaymentDataModule")), "Create", [Self])));
  await $.set(C, "PaymentAddForm", (await $.mcall((await $.v(C, "TPaymentAddForm")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "PaymentAddForm")), "Free", []);
  await $.mcall((await $.v(C, "CUPaymentDataModule")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("ExportPayment", async function ExportPayment(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"crdid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["crdid"]);
  await $.stmt((await $.mcall((await $.v(C, "PaymentForm")), "EexcutePayment", [L0["crdid"]])));
  return L0.result;
}, {"params": ["CrdID"], "kind": "procedure", "ptypes": ["integer"]});
  U.method("TPaymentForm", "EexcutePayment", async function EexcutePayment(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"creditid": $.copyArg(p0), result: undefined, "crdno": '', "custid": 0, "custaccid": 0};
  await $.fixArgs(L0, ["creditid"]);
  L0["rspaymentcaption"] = "%s - № li kreditin ödənilməsi .";
  L0["crdno"] = (await $.mcall((await $.mv((await $.v(C, "CUPaymentDataModule")), "cm_utils")), "callStringFunction", ["get_creditno", [L0["creditid"]]]));
  await $.set(C, "Caption", (await $.call(C, "Format", [L0["rspaymentcaption"], [L0["crdno"]]])));
  await $.set(C, "RefreshBeforeClose", false);
  {
    const $t1 = (await $.v(C, "CUPaymentDataModule"));
    {
      const $t2 = (await $.wv([$t1], "PaymentInfo", C, false));
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["CreditID", (await $.wv([$t1, $t2], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    }
    {
      const $t3 = (await $.wv([$t1], "PortfInfo", C, false));
      await $.stmt((await $.wcall([$t1, $t3], "SetVariable", ["CreditID", (await $.wv([$t1, $t3], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t3], "Open", [], C));
      await $.wset([$t1, $t3], "CustID", (await $.mv((await $.wcall([$t1, $t3], "FieldByName", ["BOOROWERID"], C)), "AsInteger")), { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true });
    }
    {
      const $t4 = (await $.wv([$t1], "CustAccount", C, false));
      await $.stmt((await $.wcall([$t1, $t4], "SetVariable", ["CreditID", (await $.wv([$t1, $t4], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t4], "Open", [], C));
      await $.wset([$t1, $t4], "CustAccID", (await $.mv((await $.wcall([$t1, $t4], "FieldByName", ["BOOROWERACCID"], C)), "AsInteger")), { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true });
      await $.wset([$t1, $t4], "cusid", (await $.wv([$t1, $t4], "CustAccID", { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true }, false)), C);
    }
    {
      const $t5 = (await $.wv([$t1], "PaymentAccounts", C, false));
      await $.stmt((await $.wcall([$t1, $t5], "SetVariable", ["KLI_ID", (await $.wv([$t1, $t5], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t5], "Open", [], C));
      if ($.truthy((await $.wcall([$t1, $t5], "Locate", ["AccID", (await $.wv([$t1, $t5], "CustAccID", { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true }, false)), []], C)))) {
        await $.mset((await $.mv((await $.wv([$t1, $t5], "PaymentAddForm", C, false)), "DBLookupComboboxEhCustAcc")), "KeyValue", (await $.wv([$t1, $t5], "CustAccID", { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true }, false)));
      }
    }
    {
      const $t6 = (await $.wv([$t1], "DueIntRest", C, false));
      await $.stmt((await $.wcall([$t1, $t6], "SetVariable", ["CreditID", (await $.wv([$t1, $t6], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t6], "Open", [], C));
    }
    {
      const $t7 = (await $.wv([$t1], "DueRest", C, false));
      await $.stmt((await $.wcall([$t1, $t7], "SetVariable", ["CreditID", (await $.wv([$t1, $t7], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t7], "Open", [], C));
    }
    {
      const $t8 = (await $.wv([$t1], "IntRest", C, false));
      await $.stmt((await $.wcall([$t1, $t8], "SetVariable", ["CreditID", (await $.wv([$t1, $t8], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t8], "Open", [], C));
    }
    {
      const $t9 = (await $.wv([$t1], "LoanRest", C, false));
      await $.stmt((await $.wcall([$t1, $t9], "SetVariable", ["CreditID", (await $.wv([$t1, $t9], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t9], "Open", [], C));
    }
  }
  {
    const $t10 = (await $.v(C, "PaymentAddForm"));
    await $.wset([$t10], "crdid", (await $.wv([$t10], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false)), C);
  }
  await $.mcall((await $.v(C, "PaymentForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["CreditID"], "kind": "procedure", "ptypes": ["integer"]});
  U.method("TPaymentForm", "ShowPayment", async function ShowPayment(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "creditid": 0, "crdno": '', "custid": 0, "custaccid": 0};
  L0["rspaymentcaption"] = "%s - № li kreditin ödənilməsi .";
  L0["creditid"] = (await $.v(C, "Get_SelectedCrdID"));
  L0["crdno"] = (await $.v(C, "Get_SelectedCrdNo"));
  await $.set(C, "Caption", (await $.call(C, "Format", [L0["rspaymentcaption"], [L0["crdno"]]])));
  await $.set(C, "RefreshBeforeClose", false);
  {
    const $t11 = (await $.v(C, "CUPaymentDataModule"));
    {
      const $t12 = (await $.wv([$t11], "PaymentInfo", C, false));
      await $.stmt((await $.wcall([$t11, $t12], "SetVariable", ["CreditID", (await $.wv([$t11, $t12], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t11, $t12], "Open", [], C));
    }
    {
      const $t13 = (await $.wv([$t11], "PortfInfo", C, false));
      await $.stmt((await $.wcall([$t11, $t13], "SetVariable", ["CreditID", (await $.wv([$t11, $t13], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t11, $t13], "Open", [], C));
      await $.wset([$t11, $t13], "CustID", (await $.mv((await $.wcall([$t11, $t13], "FieldByName", ["BOOROWERID"], C)), "AsInteger")), { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true });
    }
    {
      const $t14 = (await $.wv([$t11], "CustAccount", C, false));
      await $.stmt((await $.wcall([$t11, $t14], "SetVariable", ["CreditID", (await $.wv([$t11, $t14], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t11, $t14], "Open", [], C));
      await $.wset([$t11, $t14], "CustAccID", (await $.mv((await $.wcall([$t11, $t14], "FieldByName", ["BOOROWERACCID"], C)), "AsInteger")), { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true });
      await $.wset([$t11, $t14], "cusid", (await $.wv([$t11, $t14], "CustAccID", { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true }, false)), C);
    }
    {
      const $t15 = (await $.wv([$t11], "PaymentAccounts", C, false));
      await $.stmt((await $.wcall([$t11, $t15], "SetVariable", ["KLI_ID", (await $.wv([$t11, $t15], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t11, $t15], "Open", [], C));
      if ($.truthy((await $.wcall([$t11, $t15], "Locate", ["AccID", (await $.wv([$t11, $t15], "CustAccID", { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true }, false)), []], C)))) {
        await $.mset((await $.mv((await $.wv([$t11, $t15], "PaymentAddForm", C, false)), "DBLookupComboboxEhCustAcc")), "KeyValue", (await $.wv([$t11, $t15], "CustAccID", { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true }, false)));
      }
    }
    {
      const $t16 = (await $.wv([$t11], "DueIntRest", C, false));
      await $.stmt((await $.wcall([$t11, $t16], "SetVariable", ["CreditID", (await $.wv([$t11, $t16], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t11, $t16], "Open", [], C));
    }
    {
      const $t17 = (await $.wv([$t11], "DueRest", C, false));
      await $.stmt((await $.wcall([$t11, $t17], "SetVariable", ["CreditID", (await $.wv([$t11, $t17], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t11, $t17], "Open", [], C));
    }
    {
      const $t18 = (await $.wv([$t11], "IntRest", C, false));
      await $.stmt((await $.wcall([$t11, $t18], "SetVariable", ["CreditID", (await $.wv([$t11, $t18], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t11, $t18], "Open", [], C));
    }
    {
      const $t19 = (await $.wv([$t11], "LoanRest", C, false));
      await $.stmt((await $.wcall([$t11, $t19], "SetVariable", ["CreditID", (await $.wv([$t11, $t19], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t11, $t19], "Open", [], C));
    }
  }
  {
    const $t20 = (await $.v(C, "PaymentAddForm"));
    await $.wset([$t20], "crdid", (await $.wv([$t20], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false)), C);
  }
  await $.stmt($.call(C, "ShowModal", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPaymentForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TPaymentForm", "ActnCloseExecute", async function ActnCloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentForm", "ActnPaymentAddExecute", async function ActnPaymentAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "temp": 0, "s": false};
  await $.fixArgs(L0, ["sender"]);
  L0["s"] = (await $.mcall((await $.mv((await $.v(C, "CUPaymentDataModule")), "OraclePackage1")), "CallBooleanFunction", ["FindAccFlag", ["AccID", (await $.v(C, "cusid")), "FlagName", "DebitArested"]]));
  if ($.truthy($.eq(L0["s"], true))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin cari hesabında sərəncam (Debit arest)  var ! "])));
    return L0.result;
  }
  L0["s"] = (await $.mcall((await $.mv((await $.v(C, "CUPaymentDataModule")), "OraclePackage1")), "CallBooleanFunction", ["FindAccFlag", ["AccID", (await $.v(C, "cusid")), "FlagName", "DebitArested"]]));
  if ($.truthy($.eq(L0["s"], true))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin cari hesabında sərəncam (Credit arest) var !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "PaymentAddForm")), "ShowModal")), (await $.v(C, "mrOk"))))) {
    await $.set(C, "RefreshBeforeClose", true);
    {
      const $t21 = (await $.v(C, "CUPaymentDataModule"));
      await $.wset([$t21], "Temp", (await $.mv((await $.mcall((await $.wv([$t21], "PaymentAccounts", C, false)), "FieldByName", ["ACCID"])), "AsInteger")), { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true });
      await $.mcall((await $.wv([$t21], "PaymentAccounts", C, false)), "Refresh", []);
      if ($.truthy($.not((await $.mcall((await $.wv([$t21], "PaymentAccounts", C, false)), "Locate", ["ACCID", (await $.wv([$t21], "Temp", { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }, false)), []]))))) {
        await $.mset((await $.mv((await $.wv([$t21], "PaymentAddForm", C, false)), "DBLookupComboboxEhCustAcc")), "KeyValue", (await $.wv([$t21], "Null", C, false)));
      }
    }
    await $.mcall((await $.mv((await $.mv((await $.v(C, "PaymentGrid")), "DataSource")), "DataSet")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPaymentForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t22 = (await $.mv((await $.v(C, "CUPaymentDataModule")), "girov"));
    await $.stmt($.wcall([$t22], "Close", [], C));
    await $.stmt((await $.wcall([$t22], "SetVariable", ["CreditID", (await $.wv([$t22], "Get_SelectedCrdID", C, false))], C)));
    await $.stmt($.wcall([$t22], "Open", [], C));
  }
  {
    const $t23 = (await $.mv((await $.v(C, "CUPaymentDataModule")), "PortfInfo"));
    await $.stmt($.wcall([$t23], "Close", [], C));
    await $.stmt((await $.wcall([$t23], "SetVariable", ["CreditID", (await $.wv([$t23], "Get_SelectedCrdID", C, false))], C)));
    await $.stmt($.wcall([$t23], "Open", [], C));
  }
  {
    const $t24 = (await $.mv((await $.v(C, "CUPaymentDataModule")), "PaymentInfo"));
    await $.stmt($.wcall([$t24], "Close", [], C));
    await $.stmt((await $.wcall([$t24], "SetVariable", ["CreditID", (await $.wv([$t24], "Get_SelectedCrdID", C, false))], C)));
    await $.stmt($.wcall([$t24], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "PaymentForm")), "ShowPayment", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TPaymentForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t25 = (await $.v(C, "CUPaymentDataModule"));
    {
      const $t26 = (await $.wv([$t25], "PaymentInfo", C, false));
      await $.stmt($.wcall([$t25, $t26], "Close", [], C));
    }
    {
      const $t27 = (await $.wv([$t25], "PortfInfo", C, false));
      await $.stmt($.wcall([$t25, $t27], "Close", [], C));
    }
    {
      const $t28 = (await $.wv([$t25], "CustAccount", C, false));
      await $.stmt($.wcall([$t25, $t28], "Close", [], C));
    }
    {
      const $t29 = (await $.wv([$t25], "PaymentAccounts", C, false));
      await $.stmt($.wcall([$t25, $t29], "Close", [], C));
    }
    {
      const $t30 = (await $.wv([$t25], "PeniyaPayAccounts", C, false));
      await $.stmt($.wcall([$t25, $t30], "Close", [], C));
    }
    {
      const $t31 = (await $.wv([$t25], "DueIntRest", C, false));
      await $.stmt($.wcall([$t25, $t31], "Close", [], C));
    }
    {
      const $t32 = (await $.wv([$t25], "DueRest", C, false));
      await $.stmt($.wcall([$t25, $t32], "Close", [], C));
    }
    {
      const $t33 = (await $.wv([$t25], "IntRest", C, false));
      await $.stmt($.wcall([$t25, $t33], "Close", [], C));
    }
    {
      const $t34 = (await $.wv([$t25], "LoanRest", C, false));
      await $.stmt($.wcall([$t25, $t34], "Close", [], C));
    }
  }
  if ($.truthy((await $.v(C, "RefreshBeforeClose")))) {
    await $.stmt((await $.call(C, "SafeRefresh", [true, (await $.v(C, "rmLocateAfterRefresh"))])));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TPaymentForm", "ActnExcelExecute", async function ActnExcelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t35 = (await $.v(C, "ExcelExporter"));
    await $.stmt($.wcall([$t35], "Connect", [], C));
    await $.stmt((await $.wcall([$t35], "ExportDataset", [(await $.mv((await $.wv([$t35], "CUPaymentDataModule", C, false)), "PaymentInfo")), "Payment", (await $.wv([$t35], "True", C, false)), (await $.wv([$t35], "false", C, false))], C)));
    await $.stmt($.wcall([$t35], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentForm", "ActnPaymentDelExecute", async function ActnPaymentDelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "paymentid": 0, "temp": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rsconfirmpaymentdelete"] = "Seçilmiş ödəmə ləğv olunacaq!Əminsinizmi?";
  if ($.truthy($.ne((await $.call(C, "MessageDlg", [L0["rsconfirmpaymentdelete"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  {
    const $t36 = (await $.v(C, "CUPaymentDataModule"));
    await $.wset([$t36], "PaymentID", (await $.mv((await $.mcall((await $.wv([$t36], "PaymentInfo", C, false)), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["paymentid"], set: async (v) => { L0["paymentid"] = v; }, local: true });
    {
      const $t37 = (await $.wv([$t36], "CM_PAYMENT", C, false));
      await $.stmt((await $.wcall([$t36, $t37], "CallProcedure", ["Payment_Delete", ["p_PaymentID", (await $.wv([$t36, $t37], "PaymentID", { get: async () => L0["paymentid"], set: async (v) => { L0["paymentid"] = v; }, local: true }, false))]], C)));
    }
    await $.mcall((await $.wv([$t36], "PaymentInfo", C, false)), "Refresh", []);
    await $.wset([$t36], "Temp", (await $.mv((await $.mcall((await $.wv([$t36], "PaymentAccounts", C, false)), "FieldByName", ["ACCID"])), "AsInteger")), { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true });
    await $.mcall((await $.wv([$t36], "PaymentAccounts", C, false)), "Refresh", []);
    if ($.truthy($.not((await $.mcall((await $.wv([$t36], "PaymentAccounts", C, false)), "Locate", ["ACCID", (await $.wv([$t36], "Temp", { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }, false)), []]))))) {
      await $.mset((await $.mv((await $.wv([$t36], "PaymentAddForm", C, false)), "DBLookupComboboxEhCustAcc")), "KeyValue", (await $.wv([$t36], "Null", C, false)));
    }
    await $.wset([$t36], "RefreshBeforeClose", (await $.wv([$t36], "True", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPaymentForm", "ActnPaymentDelUpdate", async function ActnPaymentDelUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t38 = (await $.mv((await $.v(C, "CUPaymentDataModule")), "PaymentInfo"));
    await $.mset((await $.wv([$t38], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Enabled", (await $.and_((await $.wv([$t38], "Active", C, false)), async () => ($.gt((await $.wv([$t38], "RecordCount", C, false)), 0)))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "PaymentForm", (await $.mcall((await $.v(C, "TPaymentForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
