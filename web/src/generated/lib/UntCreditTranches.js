// Generated from UntCreditTranches.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntCreditTranches", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBCtrls", "Grids", "DBGrids", "ExtCtrls", "Mask", "ComCtrls", "Buttons", "CurrencyEdit", "sbcmMainDataModule", "StoredProgramsUnit", "TranchesDataModuleImpl"]);
  const C = [U];
  U.defClass("TFrmTranches", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "dtptranchdate": {"name": "DTPTranchDate", "type": "TDateTimePicker"}, "groupboxaboutcontract": {"name": "GroupBoxAboutContract", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "statictext7": {"name": "StaticText7", "type": "TStaticText"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "btnapplytranch": {"name": "BtnApplyTranch", "type": "TButton"}, "btnclose": {"name": "BtnClose", "type": "TButton"}, "cbusetransaction": {"name": "CBUseTransaction", "type": "TCheckBox"}, "totaledit": {"name": "TotalEdit", "type": "TCurrencyEdit"}, "fcontractid": {"name": "FContractID", "type": "LongInt"}}, {});
  U.init(async () => {
    U.var_("FrmTranches", null, "TFrmTranches");
  });
  U.method("TFrmTranches", "AddTranch", async function AddTranch(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"contractid": $.copyArg(p0), "hdate": $.copyArg(p1), "total": $.copyArg(p2), "usetransaction": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["contractid", "hdate", "total", "usetransaction"]);
  {
    const $t1 = (await $.mv((await $.v(C, "TranchesDataModule")), "TranchesPackage"));
    await $.stmt((await $.wcall([$t1], "CallProcedure", ["AddTranch", [(await $.wv([$t1], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false)), (await $.wv([$t1], "HDate", { get: async () => L0["hdate"], set: async (v) => { L0["hdate"] = v; }, local: true }, false)), (await $.wv([$t1], "Total", { get: async () => L0["total"], set: async (v) => { L0["total"] = v; }, local: true }, false)), (await $.wv([$t1], "UseTransaction", { get: async () => L0["usetransaction"], set: async (v) => { L0["usetransaction"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["ContractID", "HDate", "Total", "UseTransaction"], "kind": "procedure", "ptypes": ["LongInt", "TDateTime", "Real", "Boolean"]});
  U.method("TFrmTranches", "TotalEditKeyPress", async function TotalEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", (await $.call(C, "Chr", [(await $.v(C, "VK_DELETE"))])), (await $.call(C, "Chr", [(await $.v(C, "VK_BACK"))]))]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmTranches", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "clientaccid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTPTranchDate")), "DateTime", (await $.v(C, "GetBankDate")));
  L0["clientaccid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainDataModule")), "Contracts")), "FieldByName", ["ClientAccID"])), "AsInteger"));
  {
    const $t2 = (await $.mv((await $.v(C, "TranchesDataModule")), "AccountData"));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["ClientAccID", (await $.wv([$t2], "ClientAccID", { get: async () => L0["clientaccid"], set: async (v) => { L0["clientaccid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t2], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTranches", "BtnApplyTranchClick", async function BtnApplyTranchClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tranchtotal": 0, "tranchdate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["tranchdate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPTranchDate")), "DateTime"))]));
  L0["tranchtotal"] = (await $.mv((await $.v(C, "TotalEdit")), "Value"));
  if ($.truthy($.ne(L0["tranchtotal"], 0))) {
    await $.stmt((await $.call(C, "AddTranch", [(await $.v(C, "FContractID")), L0["tranchdate"], L0["tranchtotal"], (await $.mv((await $.v(C, "CBUseTransaction")), "Checked"))])));
    await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTranches", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "TranchesDataModule", (await $.mcall((await $.v(C, "TTranchesDataModule")), "Create", [Self])));
  await $.set(C, "Caption", $.add("Tranch for contract №  ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainDataModule")), "Contracts")), "FieldByName", ["ContractNo"])), "AsString"))));
  await $.mset((await $.v(C, "CBUseTransaction")), "Checked", $.eq((await $.call(C, "SBCMGetOption", ["cmrAutoTransactionTranch"])), "ON"));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTranches", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.mcall((await $.v(C, "BtnClose")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmTranches", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.mv((await $.v(C, "TranchesDataModule")), "AccountData"));
    await $.stmt($.wcall([$t3], "CloseAll", [], C));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  return U;
}
