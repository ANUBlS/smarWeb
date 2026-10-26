// Generated from Frmpayment1impl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Frmpayment1impl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "CMExcelExport", "ImgList", "Grids", "DBGrids", "ComCtrls", "ToolWin", "StdCtrls", "CommanParametrs", "sboapiDataModuleImpl", "DmPayment1impl", "Add_Invest_paymentimpl"]);
  const C = [U];
  U.defClass("TFrmpayment1", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "dbinvest": {"name": "DBInvest", "type": "TDBGrid"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("Frmpayment1", null, "TFrmpayment1");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  if ($.truthy($.eq(L0["s"], ""))) {
    await $.mcall((await $.v(C, "Frmpayment1")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmpayment1", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DmPayment1", (await $.mcall((await $.v(C, "TDmPayment1")), "Create", [Self])));
  await $.set(C, "Add_Invest_payment", (await $.mcall((await $.v(C, "TAdd_Invest_payment")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmpayment1", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmpayment1", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "Dscontracts")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "Dscontracts")), "SetVariable", ["cid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "Dscontracts")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "DsMain")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "DsMain")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "DsMain")), "Open", []);
  await $.mset((await $.v(C, "Edit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "Dscontracts")), "FieldByName", ["MUSTERI"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmpayment1", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Add_Invest_payment")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmpayment1", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "DBInvest")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["C?dv?ld? m?lumat yoxdu!!!"])));
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Sezilmiö s?tir silinsinmi ??", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "pk_ins_investment")), "CallIntegerFunction", ["del_invest_transaction1", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBInvest")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))]])));
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBInvest")), "DataSource")), "DataSet")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmpayment1", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "DsMain")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "DsMain")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DmPayment1")), "DsMain")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmpayment1", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "Frmpayment1", (await $.mcall((await $.v(C, "TFrmpayment1")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}
