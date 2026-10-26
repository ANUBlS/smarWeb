// Generated from frmAddCapitalizeImpl_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmAddCapitalizeImpl_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "StdCtrls", "ExtCtrls", "CMCurrencyEdit", "Mask", "DBCtrlsEh", "ComCtrls", "ActnList", "frmCapitalizeImpl_new", "CommonDeclsImpl_new", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TfrmAddCapitalize_new", "TForm", {"actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actntrans": {"name": "ActnTrans", "type": "TAction"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "edcapital": {"name": "EdCapital", "type": "TCMCurrencyEdit"}, "dtpcapital": {"name": "DTPCapital", "type": "TDateTimePicker"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "dbediteh4": {"name": "DBEditEh4", "type": "TDBEditEh"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "dbediteh5": {"name": "DBEditEh5", "type": "TDBEditEh"}}, {});
  U.init(async () => {
    U.var_("frmAddCapitalize_new", null, "TfrmAddCapitalize_new");
  });
  U.method("TfrmAddCapitalize_new", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddCapitalize_new", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmAddCapitalize_new", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddCapitalize_new", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmAddCapitalize_new", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTPCapital")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "EdCapital")), "Value", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddCapitalize_new", "ActnTransExecute", async function ActnTransExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "commitcapitalize": false};
  await $.fixArgs(L0, ["sender"]);
  L0["rstransactionswillprocessed"] = "Depozitin karitallaşdırılması ...";
  {
    const $t1 = (await $.v(C, "frmCapitalize_new"));
    const $t2 = (await $.wv([$t1], "sbcm_payment", C, false));
    await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["Capitalization", ["ContractID", (await $.wv([$t1, $t2], "Get_SelectedContID", C, false)), "HDate", (await $.wv([$t1, $t2], "Get_BankDate", C, false)), "Total", (await $.mv((await $.wv([$t1, $t2], "EdCapital", C, false)), "Value")), "UseTransactions", (await $.wv([$t1, $t2], "True", C, false))]], C)));
  }
  try {
    L0["commitcapitalize"] = (await $.call(C, "TrDelayed_Show", [Self, L0["rstransactionswillprocessed"]]));
    await $.stmt($.call(C, "Update", []));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "frmCapitalize_new")), "SBCM_PAYMENT")), "CallProcedure", ["CommitWithDrawMoney", ["DoCommit", L0["commitcapitalize"]]])));
    if ($.truthy(L0["commitcapitalize"])) {
      await $.mset(Self, "ModalResult", (await $.v(C, "mrOk")));
    }
    await $.mcall(Self, "Update", []);
  } catch ($t3) {
    $.rethrowControl($t3);
    $.handled($t3);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "frmCapitalize_new")), "SBCM_PAYMENT")), "CallProcedure", ["CommitWithDrawMoney", ["DoCommit", false]])));
    throw $t3;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddCapitalize_new", "ActnTransUpdate", async function ActnTransUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (L0["sender"]);
    await $.wset([$t4], "Enabled", $.gt((await $.mv((await $.wv([$t4], "EdCapital", C, false)), "Value")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
