// Generated from PaymentsUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PaymentsUnit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Menus", "ImgList", "ComCtrls", "StdCtrls", "Grids", "DBGrids", "ExtCtrls", "Datamodunit", "SBTranslateProc", "trasactions"]);
  const C = [U];
  U.defClass("TPayments", "TForm", {"label4": {"name": "Label4", "type": "TLabel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "gridin": {"name": "Gridin", "type": "TDBGrid"}, "button2": {"name": "Button2", "type": "TButton"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "swimagelist2": {"name": "swImageList2", "type": "TImageList"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "paymentdeleter": {"name": "paymentdeleter", "type": "TMenuItem"}}, {});
  U.init(async () => {
    U.var_("Payments", null, "TPayments");
  });
  U.method("TPayments", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Transacfrm", (await $.mcall((await $.v(C, "TTransacfrm")), "Create", [Self])));
  await $.mcall((await $.v(C, "Transacfrm")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayments", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Amountpays")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Amountpays")), "SetVariable", ["dat1", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Amountpays")), "SetVariable", ["dat2", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Amountpays")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayments", "DateTimePicker1Enter", async function DateTimePicker1Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker1")), "MaxDate", (await $.mv((await $.v(C, "DateTimePicker2")), "DateTime")));
  await $.mset((await $.v(C, "DateTimePicker2")), "MinDate", (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayments", "DateTimePicker2Enter", async function DateTimePicker2Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker1")), "MaxDate", (await $.mv((await $.v(C, "DateTimePicker2")), "DateTime")));
  await $.mset((await $.v(C, "DateTimePicker2")), "MinDate", (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayments", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.v(C, "now")));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.v(C, "now")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPayments", "GridinDrawColumnCell", async function GridinDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "FieldByName", ["userid"])), "Asinteger")), 1)))) {
    await $.mset((await $.mv((await $.mv((await $.v(C, "Gridin")), "Canvas")), "Brush")), "Color", (await $.v(C, "clFuchsia")));
    await $.stmt((await $.mcall((await $.v(C, "Gridin")), "DefaultDrawColumnCell", [L0["rect"], L0["datacol"], L0["column"], L0["state"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TPayments", "paymentdeleterClick", async function paymentdeleterClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["PAYMENTLIST_DEL"]])));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş ödəniş silins ?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "OraclePackage1")), "CallProcedure", ["del_transaction", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "FieldByName", ["prtids"])), "AsVariant")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "Gridin")), "DataSource")), "DataSet")), "FieldByName", ["userid"])), "AsInteger"))]])));
    await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
