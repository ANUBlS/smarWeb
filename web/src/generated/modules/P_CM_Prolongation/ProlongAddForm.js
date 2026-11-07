// Generated from ProlongAddForm.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ProlongAddForm", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "NLSLocalizer", "ComCtrls", "StdCtrls", "Mask", "DBCtrlsEh", "CMCurrencyEdit", "Buttons", "ProlongDataModuleImpl", "SbSystem", "CommonDecls"]);
  const C = [U];
  U.defClass("TfrmProlongAdd", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dtpprolongdate": {"name": "DTPProlongDate", "type": "TDateTimePicker"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "buttonok": {"name": "ButtonOK", "type": "TButton"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "tranchesumedit": {"name": "TrancheSumEdit", "type": "TCMCurrencyEdit"}, "cmcurrencyedit1": {"name": "CMCurrencyEdit1", "type": "TCMCurrencyEdit"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("frmProlongAdd", null, "TfrmProlongAdd");
  });
  U.method("TfrmProlongAdd", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmProlongAdd", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmProlongAdd", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    await $.mset((await $.v(C, "DTPProlongDate")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "DTPProlongDate")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmProlongAdd", "CheckBox2Click", async function CheckBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox2")), "Checked")))) {
    await $.mset((await $.v(C, "CMCurrencyEdit1")), "Enabled", true);
    await $.mset((await $.v(C, "TrancheSumEdit")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "CMCurrencyEdit1")), "Enabled", false);
    await $.mset((await $.v(C, "TrancheSumEdit")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmProlongAdd", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmProlongAdd", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTPProlongDate")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ProlongDataMod")), "CreditInfo")), "FieldByName", ["DUEDATE"])), "AsDateTime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmProlongAdd", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "opdate": 0, "crdclosedate": 0, "prolongdate": 0, "crdid": 0, "custid": 0, "hes": 0, "custaccid": 0, "trchdate": 0, "trchamount": 0, "committranche": false};
  await $.fixArgs(L0, ["sender"]);
  L0["rstransactionswillprocessed"] = "Kredit tranşı ...";
  L0["rsinvaliddate"] = "Düzgün tarixi daxil edin !";
  L0["opdate"] = (await $.v(C, "Get_CurrentDate"));
  L0["prolongdate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPProlongDate")), "DateTime"))]))]));
  L0["crdclosedate"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ProlongDataMod")), "CreditInfo")), "FieldByName", ["DUEDATE"])), "AsDateTime"));
  L0["crdid"] = (await $.v(C, "Get_SelectedCrdID"));
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    if ($.truthy($.le(L0["prolongdate"], L0["crdclosedate"]))) {
      return L0.result;
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "CheckBox2")), "Checked")))) {
    if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0)), async () => ($.eq((await $.mv((await $.v(C, "TrancheSumEdit")), "Value")), 0)))))) {
      await $.stmt((await $.call(C, "showmessage", ["Öhdəlik məbləği və tranş məbləği mütləq olmalıdir!"])));
      return L0.result;
    }
    if ($.truthy(($.lt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), (await $.mv((await $.v(C, "TrancheSumEdit")), "Value")))))) {
      await $.stmt((await $.call(C, "showmessage", ["Tranş məbləği öhdəlik məbləğindən böyük ola bilməz!!"])));
      return L0.result;
    }
    {
      const $t1 = (await $.mv((await $.v(C, "ProlongDataMod")), "OracleDataSet1"));
      if ($.truthy((await $.wv([$t1], "Active", C, false)))) {
        await $.stmt($.wcall([$t1], "close", [], C));
      }
      await $.stmt((await $.wcall([$t1], "SetVariable", ["OBLIGATION", (await $.mv((await $.wv([$t1], "CMCurrencyEdit1", C, false)), "Value"))], C)));
      await $.stmt((await $.wcall([$t1], "SetVariable", ["creditid", (await $.wv([$t1], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1], "Open", [], C));
      await $.mcall((await $.wv([$t1], "Session", C, false)), "Commit", []);
      {
        const $t2 = (await $.wv([$t1], "ProlongDataMod", C, false));
        {
          const $t3 = (await $.wv([$t1, $t2], "CreditInfo", C, false));
          await $.stmt((await $.wcall([$t1, $t2, $t3], "SetVariable", ["ID", (await $.wv([$t1, $t2, $t3], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))], C)));
          await $.stmt($.wcall([$t1, $t2, $t3], "Open", [], C));
          await $.wset([$t1, $t2, $t3], "CustID", (await $.mv((await $.wcall([$t1, $t2, $t3], "FieldByName", ["BoorowerID"], C)), "AsInteger")), { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true });
        }
        {
          const $t4 = (await $.wv([$t1, $t2], "CustAccount", C, false));
          await $.stmt((await $.wcall([$t1, $t2, $t4], "SetVariable", ["CreditID", (await $.wv([$t1, $t2, $t4], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))], C)));
          await $.stmt($.wcall([$t1, $t2, $t4], "Open", [], C));
          await $.wset([$t1, $t2, $t4], "CustAccID", (await $.mv((await $.wcall([$t1, $t2, $t4], "FieldByName", ["BOOROWERACCID"], C)), "AsInteger")), { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true });
        }
        {
          const $t5 = (await $.wv([$t1, $t2], "TrancheAccounts", C, false));
          await $.stmt((await $.wcall([$t1, $t2, $t5], "SetVariable", ["KLI_ID", (await $.wv([$t1, $t2, $t5], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false))], C)));
          await $.stmt($.wcall([$t1, $t2, $t5], "Open", [], C));
          if ($.truthy((await $.wcall([$t1, $t2, $t5], "Locate", ["AccID", (await $.wv([$t1, $t2, $t5], "CustAccID", { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true }, false)), []], C)))) {
            await $.wset([$t1, $t2, $t5], "hes", (await $.wv([$t1, $t2, $t5], "CustAccID", { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true }, false)), { get: async () => L0["hes"], set: async (v) => { L0["hes"] = v; }, local: true });
          }
        }
      }
      await $.wset([$t1], "TrchDate", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "ProlongDataMod", C, false)), "OracleDataSet2")), "FieldByName", ["tek_dat"])), "AsDateTime")), { get: async () => L0["trchdate"], set: async (v) => { L0["trchdate"] = v; }, local: true });
      await $.wset([$t1], "CustAccID", (await $.wv([$t1], "hes", { get: async () => L0["hes"], set: async (v) => { L0["hes"] = v; }, local: true }, false)), { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true });
      await $.wset([$t1], "TrchAmount", (await $.mv((await $.wv([$t1], "TrancheSumEdit", C, false)), "Value")), { get: async () => L0["trchamount"], set: async (v) => { L0["trchamount"] = v; }, local: true });
      {
        const $t6 = (await $.wv([$t1], "ProlongDataMod", C, false));
        await $.stmt((await $.mcall((await $.wv([$t1, $t6], "CM_TRANCHE", C, false)), "CallProcedure", ["Tranche_Add", ["p_CreditID", (await $.wv([$t1, $t6], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), "p_TrchDate", (await $.wv([$t1, $t6], "TrchDate", { get: async () => L0["trchdate"], set: async (v) => { L0["trchdate"] = v; }, local: true }, false)), "p_CustAccID", (await $.wv([$t1, $t6], "CustAccID", { get: async () => L0["custaccid"], set: async (v) => { L0["custaccid"] = v; }, local: true }, false)), "p_TrchAmount", (await $.wv([$t1, $t6], "TrchAmount", { get: async () => L0["trchamount"], set: async (v) => { L0["trchamount"] = v; }, local: true }, false)), "p_ProcessTransactions", (await $.wv([$t1, $t6], "true", C, false))]])));
      }
      try {
        await $.wset([$t1], "CommitTranche", (await $.wcall([$t1], "TrDelayed_Show", [Self, (await $.wv([$t1], "rsTransactionsWillProcessed", { get: async () => L0["rstransactionswillprocessed"], set: async (v) => { L0["rstransactionswillprocessed"] = v; }, local: true }, false))], C)), { get: async () => L0["committranche"], set: async (v) => { L0["committranche"] = v; }, local: true });
        await $.stmt($.wcall([$t1], "Update", [], C));
        {
          const $t8 = (await $.wv([$t1], "ProlongDataMod", C, false));
          await $.stmt((await $.mcall((await $.wv([$t1, $t8], "CM_TRANCHE", C, false)), "CallProcedure", ["CommitTranche", ["DoCommit", (await $.wv([$t1, $t8], "CommitTranche", { get: async () => L0["committranche"], set: async (v) => { L0["committranche"] = v; }, local: true }, false))]])));
        }
        if ($.truthy((await $.wv([$t1], "CommitTranche", { get: async () => L0["committranche"], set: async (v) => { L0["committranche"] = v; }, local: true }, false)))) {
          await $.mset(Self, "ModalResult", (await $.wv([$t1], "mrOk", C, false)));
        }
        await $.mcall(Self, "Update", []);
      } catch ($t7) {
        $.rethrowControl($t7);
        $.handled($t7);
        {
          const $t9 = (await $.wv([$t1], "ProlongDataMod", C, false));
          await $.stmt((await $.mcall((await $.wv([$t1, $t9], "CM_TRANCHE", C, false)), "CallProcedure", ["CommitTranche", ["DoCommit", (await $.wv([$t1, $t9], "False", C, false))]])));
        }
        throw $t7;
      }
    }
  }
  if ($.truthy((await $.and_((L0["committranche"]), async () => ((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))))) {
    {
      const $t10 = (await $.mv((await $.v(C, "ProlongDataMod")), "CM_PROLONGATION"));
      await $.stmt((await $.wcall([$t10], "CallProcedure", ["Prolongation_Add", [(await $.wv([$t10], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wv([$t10], "OpDate", { get: async () => L0["opdate"], set: async (v) => { L0["opdate"] = v; }, local: true }, false)), (await $.wv([$t10], "ProlongDate", { get: async () => L0["prolongdate"], set: async (v) => { L0["prolongdate"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t10], "CMCurrencyEdit1", C, false)), "Value")), (await $.wv([$t10], "TrchAmount", { get: async () => L0["trchamount"], set: async (v) => { L0["trchamount"] = v; }, local: true }, false))]], C)));
    }
    {
      const $t11 = (await $.wobj(C, "ProlongDataMod"));
      await $.mcall((await $.wv([$t11], "ProlongsData", C, false)), "Refresh", []);
      await $.mcall((await $.wv([$t11], "CreditInfo", C, false)), "Refresh", []);
    }
  }
  if ($.truthy((await $.and_(((await $.mv((await $.v(C, "CheckBox1")), "Checked"))), async () => ($.eq((await $.mv((await $.v(C, "CheckBox2")), "Checked")), false)))))) {
    {
      const $t12 = (await $.mv((await $.v(C, "ProlongDataMod")), "CM_PROLONGATION"));
      await $.stmt((await $.wcall([$t12], "CallProcedure", ["Prolongation_Add", [(await $.wv([$t12], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.wv([$t12], "OpDate", { get: async () => L0["opdate"], set: async (v) => { L0["opdate"] = v; }, local: true }, false)), (await $.wv([$t12], "ProlongDate", { get: async () => L0["prolongdate"], set: async (v) => { L0["prolongdate"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t12], "CMCurrencyEdit1", C, false)), "Value")), (await $.wv([$t12], "TrchAmount", { get: async () => L0["trchamount"], set: async (v) => { L0["trchamount"] = v; }, local: true }, false))]], C)));
    }
    {
      const $t13 = (await $.wobj(C, "ProlongDataMod"));
      await $.mcall((await $.wv([$t13], "ProlongsData", C, false)), "Refresh", []);
      await $.mcall((await $.wv([$t13], "CreditInfo", C, false)), "Refresh", []);
    }
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
