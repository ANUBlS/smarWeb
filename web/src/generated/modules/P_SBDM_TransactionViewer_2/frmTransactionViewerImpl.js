// Generated from frmTransactionViewerImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmTransactionViewerImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrlsEh", "Buttons", "ComCtrls", "DBCtrls", "ExtCtrls", "DBLookupEh", "NLSLocalizer", "CommonDeclsImpl", "dmTransactionViewerImpl", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TfrmTransactionViewer", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "headercontrol1": {"name": "HeaderControl1", "type": "THeaderControl"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "paneldebit": {"name": "PanelDebit", "type": "TPanel"}, "paneldebitrest": {"name": "PanelDebitRest", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panelcredit": {"name": "PanelCredit", "type": "TPanel"}, "panelcreditrest": {"name": "PanelCreditRest", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "bitbtnok": {"name": "BitBtnOk", "type": "TBitBtn"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "dbediteh4": {"name": "DBEditEh4", "type": "TDBEditEh"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "dbediteh5": {"name": "DBEditEh5", "type": "TDBEditEh"}, "dbediteh6": {"name": "DBEditEh6", "type": "TDBEditEh"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "dbediteh7": {"name": "DBEditEh7", "type": "TDBEditEh"}, "dbediteh8": {"name": "DBEditEh8", "type": "TDBEditEh"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "dbediteh9": {"name": "DBEditEh9", "type": "TDBEditEh"}, "dblookupcomboboxeh6": {"name": "DBLookupComboboxEh6", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh7": {"name": "DBLookupComboboxEh7", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh8": {"name": "DBLookupComboboxEh8", "type": "TDBLookupComboboxEh"}, "dbediteh10": {"name": "DBEditEh10", "type": "TDBEditEh"}, "dbediteh11": {"name": "DBEditEh11", "type": "TDBEditEh"}, "dbediteh12": {"name": "DBEditEh12", "type": "TDBEditEh"}, "dbediteh13": {"name": "DBEditEh13", "type": "TDBEditEh"}, "dbediteh14": {"name": "DBEditEh14", "type": "TDBEditEh"}, "dblookupcomboboxeh9": {"name": "DBLookupComboboxEh9", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "lbldebitostat": {"name": "LblDebitOstat", "type": "TLabel"}, "lbldebitpokostat": {"name": "LblDebitpokOstat", "type": "TLabel"}, "lblcreditpokostat": {"name": "LblCreditpokOstat", "type": "TLabel"}, "lblcreditostat": {"name": "LblCreditOstat", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("frmTransactionViewer", null, "TfrmTransactionViewer");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"trid": $.copyArg(p0), result: undefined, "transdate": 0, "transid": 0, "debitid": 0, "creditid": 0, "debitval": 0, "creditval": 0};
  await $.fixArgs(L0, ["trid"]);
  L0["transid"] = (await $.call(C, "StrToInt", [L0["trid"]]));
  {
    const $t1 = (await $.v(C, "dmTransactionViewer"));
    {
      const $t2 = (await $.wv([$t1], "TransactionData", C, false));
      if ($.truthy((await $.wv([$t1, $t2], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t2], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["TransactionID", (await $.wv([$t1, $t2], "TransID", { get: async () => L0["transid"], set: async (v) => { L0["transid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t2], "Open", [], C));
      await $.wset([$t1, $t2], "TransDate", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["Dat"], C)), "AsDateTime")), { get: async () => L0["transdate"], set: async (v) => { L0["transdate"] = v; }, local: true });
    }
    {
      const $t3 = (await $.wv([$t1], "AccDebit", C, false));
      if ($.truthy($.not((await $.wv([$t1, $t3], "Active", C, false))))) {
        await $.stmt($.wcall([$t1, $t3], "Open", [], C));
      }
    }
    {
      const $t4 = (await $.wv([$t1], "AccCredit", C, false));
      if ($.truthy($.not((await $.wv([$t1, $t4], "Active", C, false))))) {
        await $.stmt($.wcall([$t1, $t4], "Open", [], C));
      }
    }
    {
      const $t5 = (await $.wv([$t1], "AvaluteDebit", C, false));
      if ($.truthy($.not((await $.wv([$t1, $t5], "Active", C, false))))) {
        await $.stmt($.wcall([$t1, $t5], "Open", [], C));
      }
    }
    {
      const $t6 = (await $.wv([$t1], "AvaluteCredit", C, false));
      if ($.truthy($.not((await $.wv([$t1, $t6], "Active", C, false))))) {
        await $.stmt($.wcall([$t1, $t6], "Open", [], C));
      }
    }
    {
      const $t7 = (await $.wv([$t1], "CashSymbols", C, false));
      if ($.truthy($.not((await $.wv([$t1, $t7], "Active", C, false))))) {
        await $.stmt($.wcall([$t1, $t7], "Open", [], C));
      }
    }
    {
      const $t8 = (await $.wv([$t1], "ConvertationSymbols", C, false));
      if ($.truthy($.not((await $.wv([$t1, $t8], "Active", C, false))))) {
        await $.stmt($.wcall([$t1, $t8], "Open", [], C));
      }
    }
    {
      const $t9 = (await $.wv([$t1], "operations", C, false));
      if ($.truthy($.not((await $.wv([$t1, $t9], "Active", C, false))))) {
        await $.stmt($.wcall([$t1, $t9], "Open", [], C));
      }
    }
    {
      const $t10 = (await $.wv([$t1], "RestDebit", C, false));
      if ($.truthy((await $.wv([$t1, $t10], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t10], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t10], "SetVariable", ["dat", (await $.wv([$t1, $t10], "TransDate", { get: async () => L0["transdate"], set: async (v) => { L0["transdate"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t10], "Open", [], C));
    }
    {
      const $t11 = (await $.wv([$t1], "RestCredit", C, false));
      if ($.truthy((await $.wv([$t1, $t11], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t11], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t11], "SetVariable", ["dat", (await $.wv([$t1, $t11], "TransDate", { get: async () => L0["transdate"], set: async (v) => { L0["transdate"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t11], "Open", [], C));
    }
  }
  await $.mcall((await $.v(C, "frmTransactionViewer")), "ShowModal", []);
  return L0.result;
}, {"params": ["TrID"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmTransactionViewer", "SetKeyValues", async function SetKeyValues(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"lcb": $.copyArg(p0), "fild": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["lcb", "fild"]);
  {
    const $t12 = L0["lcb"];
    await $.wset([$t12], "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t12], "ListSource", C, false)), "DataSet")), "FieldByName", [(await $.wv([$t12], "Fild", { get: async () => L0["fild"], set: async (v) => { L0["fild"] = v; }, local: true }, false))])), "AsInteger")), C);
  }
  return L0.result;
}, {"params": ["Lcb", "Fild"], "kind": "procedure", "ptypes": ["TDBLookupComboboxEh", "String"]});
  U.method("TfrmTransactionViewer", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmTransactionViewer", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmTransactionViewer", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "dmTransactionViewer", (await $.mcall((await $.v(C, "TdmTransactionViewer")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTransactionViewer", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "dmTransactionViewer")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTransactionViewer", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.v(C, "dmTransactionViewer"));
    {
      const $t14 = (await $.wv([$t13], "RestDebit", C, false));
      await $.mset((await $.wv([$t13, $t14], "LblDebitOstat", C, false)), "Caption", (await $.wcall([$t13, $t14], "FloatToStr", [(await $.mv((await $.wcall([$t13, $t14], "FieldByName", ["Ostat"], C)), "AsFloat"))], C)));
      await $.mset((await $.wv([$t13, $t14], "LblDebitpokOstat", C, false)), "Caption", (await $.wcall([$t13, $t14], "FloatToStr", [(await $.mv((await $.wcall([$t13, $t14], "FieldByName", ["pok_Ostat"], C)), "AsFloat"))], C)));
    }
    {
      const $t15 = (await $.wv([$t13], "RestCredit", C, false));
      await $.mset((await $.wv([$t13, $t15], "LblCreditOstat", C, false)), "Caption", (await $.wcall([$t13, $t15], "FloatToStr", [(await $.mv((await $.wcall([$t13, $t15], "FieldByName", ["Ostat"], C)), "AsFloat"))], C)));
      await $.mset((await $.wv([$t13, $t15], "LblCreditpokOstat", C, false)), "Caption", (await $.wcall([$t13, $t15], "FloatToStr", [(await $.mv((await $.wcall([$t13, $t15], "FieldByName", ["pok_Ostat"], C)), "AsFloat"))], C)));
    }
  }
  await $.stmt((await $.call(C, "SetKeyValues", [(await $.v(C, "DBLookupComboboxEh3")), "VALUTE"])));
  await $.stmt((await $.call(C, "SetKeyValues", [(await $.v(C, "DBLookupComboboxEh5")), "ID"])));
  await $.stmt((await $.call(C, "SetKeyValues", [(await $.v(C, "DBLookupComboboxEh7")), "ID"])));
  await $.stmt((await $.call(C, "SetKeyValues", [(await $.v(C, "DBLookupComboboxEh4")), "VALUTE"])));
  await $.stmt((await $.call(C, "SetKeyValues", [(await $.v(C, "DBLookupComboboxEh6")), "ID"])));
  await $.stmt((await $.call(C, "SetKeyValues", [(await $.v(C, "DBLookupComboboxEh8")), "ID"])));
  await $.stmt((await $.call(C, "SetKeyValues", [(await $.v(C, "DBLookupComboboxEh9")), "SYMBOL"])));
  await $.stmt((await $.call(C, "SetKeyValues", [(await $.v(C, "DBLookupComboboxEh1")), "ID"])));
  await $.stmt((await $.call(C, "SetKeyValues", [(await $.v(C, "DBLookupComboboxEh2")), "ID"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmTransactionViewer", "BitBtnOkClick", async function BitBtnOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmTransactionViewer", (await $.mcall((await $.v(C, "TfrmTransactionViewer")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
