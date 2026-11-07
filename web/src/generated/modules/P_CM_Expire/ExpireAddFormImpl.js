// Generated from ExpireAddFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ExpireAddFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CMCurrencyEdit", "Mask", "DBCtrlsEh", "ExtCtrls", "DBLookupEh", "ActnList", "Variants", "DBGridEh", "ExpireDataModuleImpl", "CommonDecls", "SbSystem"]);
  const C = [U];
  U.defClass("TExpireAddForm", "TForm", {"groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "dbediteh4": {"name": "DBEditEh4", "type": "TDBEditEh"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "expiredamountedit": {"name": "ExpiredAmountEdit", "type": "TCMCurrencyEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "checkboxusetransactions": {"name": "CheckBoxUseTransactions", "type": "TCheckBox"}, "actioncommit": {"name": "ActionCommit", "type": "TAction"}, "actionclose": {"name": "ActionClose", "type": "TAction"}}, {});
  U.init(async () => {
    U.var_("ExpireAddForm", null, "TExpireAddForm");
  });
  U.method("TExpireAddForm", "ActionCommitUpdate", async function ActionCommitUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpireAddForm", "ActionCloseExecute", async function ActionCloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpireAddForm", "ActionCommitExecute", async function ActionCommitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "creditid": 0, "usetransactions": false, "expdate": 0, "sreserveid": 0, "amount": 0, "confirmcommit": false};
  await $.fixArgs(L0, ["sender"]);
  L0["rstransactionswillprocessed"] = "Krerditin gecikdirilməsi.";
  L0["creditid"] = (await $.v(C, "Get_SelectedCrdID"));
  L0["expdate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.v(C, "Get_CurrentDate"))]))]));
  L0["usetransactions"] = (await $.mv((await $.v(C, "CheckBoxUseTransactions")), "Checked"));
  L0["amount"] = (await $.mv((await $.v(C, "ExpiredAmountEdit")), "Value"));
  L0["sreserveid"] = 0;
  {
    const $t1 = (await $.wobj(C, "ExpireDataModule"));
    await $.stmt((await $.mcall((await $.wv([$t1], "CM_EXPIRE", C, false)), "CallProcedure", ["Expire_Add", ["p_CreditID", (await $.wv([$t1], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false)), "p_Date", (await $.wv([$t1], "ExpDate", { get: async () => L0["expdate"], set: async (v) => { L0["expdate"] = v; }, local: true }, false)), "p_Amount", (await $.wv([$t1], "Amount", { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true }, false)), "p_SReserveID", (await $.wv([$t1], "SReserveID", { get: async () => L0["sreserveid"], set: async (v) => { L0["sreserveid"] = v; }, local: true }, false)), "p_UseTransactions", (await $.wv([$t1], "UseTransactions", { get: async () => L0["usetransactions"], set: async (v) => { L0["usetransactions"] = v; }, local: true }, false))]])));
    try {
      await $.wset([$t1], "ConfirmCommit", (await $.wcall([$t1], "TrDelayed_Show", [Self, (await $.wv([$t1], "rsTransactionsWillProcessed", { get: async () => L0["rstransactionswillprocessed"], set: async (v) => { L0["rstransactionswillprocessed"] = v; }, local: true }, false))], C)), { get: async () => L0["confirmcommit"], set: async (v) => { L0["confirmcommit"] = v; }, local: true });
      await $.mcall(Self, "Update", []);
      await $.stmt((await $.mcall((await $.wv([$t1], "CM_EXPIRE", C, false)), "CallProcedure", ["CommitExpire", ["DoCommit", (await $.wv([$t1], "ConfirmCommit", { get: async () => L0["confirmcommit"], set: async (v) => { L0["confirmcommit"] = v; }, local: true }, false))]])));
      if ($.truthy((await $.wv([$t1], "ConfirmCommit", { get: async () => L0["confirmcommit"], set: async (v) => { L0["confirmcommit"] = v; }, local: true }, false)))) {
        await $.mset(Self, "ModalResult", (await $.wv([$t1], "mrOk", C, false)));
      }
      await $.mcall(Self, "Update", []);
    } catch ($t2) {
      $.rethrowControl($t2);
      $.handled($t2);
      await $.stmt((await $.mcall((await $.wv([$t1], "CM_EXPIRE", C, false)), "CallProcedure", ["CommitExpire", ["DoCommit", (await $.wv([$t1], "False", C, false))]])));
      throw $t2;
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpireAddForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.mcall((await $.v(C, "ActionClose")), "Execute", []);
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TExpireAddForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ExpiredAmountEdit")), "Value", 0);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  return U;
}
