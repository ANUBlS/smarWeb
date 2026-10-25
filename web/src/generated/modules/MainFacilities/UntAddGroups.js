// Generated from UntAddGroups.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntAddGroups", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Buttons", "StdCtrls", "ExtCtrls", "Db", "ActnList", "MFDataModule", "UntMainFacilitiesImpl", "UntAddWares"]);
  const C = [U];
  U.defClass("TFrmAddGroups", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "egroupname": {"name": "EGroupName", "type": "TEdit"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "egroupamorttax": {"name": "EGroupAmortTAX", "type": "TEdit"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "egroupamortnb": {"name": "EGroupAmortNB", "type": "TEdit"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "cbmainaccount": {"name": "CBMainAccount", "type": "TComboBox"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "statictext7": {"name": "StaticText7", "type": "TStaticText"}, "cbamortaccount": {"name": "CBAmortAccount", "type": "TComboBox"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "statictext8": {"name": "StaticText8", "type": "TStaticText"}, "cbexpaccount": {"name": "CBExpAccount", "type": "TComboBox"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "statictext9": {"name": "StaticText9", "type": "TStaticText"}, "cbsaleaccount": {"name": "CBSaleAccount", "type": "TComboBox"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actioncommit": {"name": "ActionCommit", "type": "TAction"}, "actioncancel": {"name": "ActionCancel", "type": "TAction"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("FrmAddGroups", null, "TFrmAddGroups");
  });
  U.method("TFrmAddGroups", "Fill", async function Fill(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.mv((await $.v(C, "MainFDataModule")), "ODSAccounts"));
    if ($.truthy($.not((await $.wv([$t1], "Active", C, false))))) {
      await $.stmt($.wcall([$t1], "Open", [], C));
      await $.stmt($.wcall([$t1], "First", [], C));
      while ($.truthy($.not((await $.wv([$t1], "EOF", C, false))))) {
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "CBMainAccount", C, false)), "Items")), "Add", [(await $.mv((await $.wcall([$t1], "FieldByName", ["Acc_no"], C)), "AsString"))])));
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "CBExpAccount", C, false)), "Items")), "Add", [(await $.mv((await $.wcall([$t1], "FieldByName", ["Acc_no"], C)), "AsString"))])));
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "CBAmortAccount", C, false)), "Items")), "Add", [(await $.mv((await $.wcall([$t1], "FieldByName", ["Acc_no"], C)), "AsString"))])));
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "CBSaleAccount", C, false)), "Items")), "Add", [(await $.mv((await $.wcall([$t1], "FieldByName", ["Acc_no"], C)), "AsString"))])));
        await $.stmt($.wcall([$t1], "Next", [], C));
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmAddGroups", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Fill", []));
  if ($.truthy($.eq((await $.mv((await $.v(C, "MainFacilities")), "OpeartionMode")), (await $.v(C, "omAdd"))))) {
    await $.stmt((await $.mcall((await $.v(C, "FrmAddWares")), "CleanUp", [Self])));
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "MainFacilities")), "OpeartionMode")), (await $.v(C, "omEdit"))))) {
      {
        const $t2 = (await $.v(C, "MainFDataModule"));
        const $t3 = (await $.wv([$t2], "ViewGroup", C, false));
        const $t4 = (await $.wv([$t2, $t3], "OPViewWares", C, false));
        await $.mset((await $.wv([$t2, $t3, $t4], "EGroupName", C, false)), "Text", (await $.mv((await $.wcall([$t2, $t3, $t4], "FieldByName", ["Name"], C)), "AsString")));
        await $.mset((await $.wv([$t2, $t3, $t4], "EGroupAmortNB", C, false)), "Text", (await $.mv((await $.wcall([$t2, $t3, $t4], "FieldByName", ["Amort"], C)), "AsString")));
        await $.mset((await $.wv([$t2, $t3, $t4], "EGroupAmortTAX", C, false)), "Text", (await $.mv((await $.wcall([$t2, $t3, $t4], "FieldByName", ["TaxAmort"], C)), "AsString")));
        await $.mset((await $.wv([$t2, $t3, $t4], "CBMainAccount", C, false)), "Text", (await $.wcall([$t2, $t3, $t4], "CallStringFunction", ["GetAccountNumber", [(await $.mv((await $.wcall([$t2, $t3, $t4], "FieldByName", ["Main_Account"], C)), "AsInteger"))]], C)));
        await $.mset((await $.wv([$t2, $t3, $t4], "CBMainAccount", C, false)), "Tag", (await $.mv((await $.wcall([$t2, $t3, $t4], "FieldByName", ["Main_Account"], C)), "AsInteger")));
        await $.mset((await $.wv([$t2, $t3, $t4], "CBExpAccount", C, false)), "Text", (await $.wcall([$t2, $t3, $t4], "CallStringFunction", ["GetAccountNumber", [(await $.mv((await $.wcall([$t2, $t3, $t4], "FieldByName", ["Exp_Account"], C)), "AsInteger"))]], C)));
        await $.mset((await $.wv([$t2, $t3, $t4], "CBExpAccount", C, false)), "Tag", (await $.mv((await $.wcall([$t2, $t3, $t4], "FieldByName", ["Exp_Account"], C)), "AsInteger")));
        await $.mset((await $.wv([$t2, $t3, $t4], "CBAmortAccount", C, false)), "Text", (await $.wcall([$t2, $t3, $t4], "CallStringFunction", ["GetAccountNumber", [(await $.mv((await $.wcall([$t2, $t3, $t4], "FieldByName", ["Amort_Account"], C)), "AsInteger"))]], C)));
        await $.mset((await $.wv([$t2, $t3, $t4], "CBAmortAccount", C, false)), "Tag", (await $.mv((await $.wcall([$t2, $t3, $t4], "FieldByName", ["Amort_Account"], C)), "AsInteger")));
        await $.mset((await $.wv([$t2, $t3, $t4], "CBSaleAccount", C, false)), "Text", (await $.wcall([$t2, $t3, $t4], "CallStringFunction", ["GetAccountNumber", [(await $.mv((await $.wcall([$t2, $t3, $t4], "FieldByName", ["Sale_Account"], C)), "AsInteger"))]], C)));
        await $.mset((await $.wv([$t2, $t3, $t4], "CBSaleAccount", C, false)), "Tag", (await $.mv((await $.wcall([$t2, $t3, $t4], "FieldByName", ["Sale_Account"], C)), "AsInteger")));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddGroups", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddGroups", "CBMainAccountChange", async function CBMainAccountChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.mv((await $.v(C, "MainFDataModule")), "OPViewWares"));
    await $.mset((await $.wv([$t5], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Tag", (await $.wcall([$t5], "CallIntegerFunction", ["GetAccountID", [(await $.mv(((await $.wv([$t5], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Text"))]], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddGroups", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy(($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFrmAddGroups", "ActionCommitExecute", async function ActionCommitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "saveplace": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t6 = (await $.mv((await $.v(C, "MainFacilities")), "OpeartionMode"));
    if ($.eq($t6, (await $.v(C, "omAdd")))) {
      {
        const $t7 = (await $.v(C, "MainFDataModule"));
        const $t8 = (await $.wv([$t7], "ViewGroup", C, false));
        const $t9 = (await $.wv([$t7, $t8], "OPViewWares", C, false));
        await $.stmt((await $.wcall([$t7, $t8, $t9], "CallProcedure", ["add_groups", [(await $.mv((await $.wv([$t7, $t8, $t9], "EGroupName", C, false)), "text")), (await $.wcall([$t7, $t8, $t9], "StrToInt", [(await $.mv((await $.wv([$t7, $t8, $t9], "EGroupAmortNB", C, false)), "text"))], C)), (await $.mv((await $.wv([$t7, $t8, $t9], "CBMainAccount", C, false)), "tag")), (await $.mv((await $.wv([$t7, $t8, $t9], "CBExpAccount", C, false)), "tag")), (await $.mv((await $.wv([$t7, $t8, $t9], "CBAmortAccount", C, false)), "tag")), (await $.mv((await $.wv([$t7, $t8, $t9], "CBSaleAccount", C, false)), "tag")), (await $.wcall([$t7, $t8, $t9], "StrToInt", [(await $.mv((await $.wv([$t7, $t8, $t9], "EGroupAmortTAX", C, false)), "text"))], C))]], C)));
        await $.stmt($.wcall([$t7, $t8, $t9], "DisableControls", [], C));
        await $.stmt($.wcall([$t7, $t8, $t9], "Refresh", [], C));
        await $.stmt($.wcall([$t7, $t8, $t9], "EnableControls", [], C));
      }
    }
    else if ($.eq($t6, (await $.v(C, "omEdit")))) {
      {
        const $t10 = (await $.mv((await $.v(C, "MainFDataModule")), "OPViewWares"));
        const $t11 = (await $.mv((await $.wv([$t10], "MainFDataModule", C, false)), "ViewGroup"));
        await $.wset([$t10, $t11], "SavePlace", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true });
        await $.stmt((await $.wcall([$t10, $t11], "CallProcedure", ["upd_groups", [(await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["ID"], C)), "AsInteger")), (await $.mv((await $.wv([$t10, $t11], "EGroupName", C, false)), "text")), (await $.wcall([$t10, $t11], "StrToInt", [(await $.mv((await $.wv([$t10, $t11], "EGroupAmortNB", C, false)), "text"))], C)), (await $.mv((await $.wv([$t10, $t11], "CBMainAccount", C, false)), "tag")), (await $.mv((await $.wv([$t10, $t11], "CBExpAccount", C, false)), "tag")), (await $.mv((await $.wv([$t10, $t11], "CBAmortAccount", C, false)), "tag")), (await $.mv((await $.wv([$t10, $t11], "CBSaleAccount", C, false)), "tag")), (await $.wcall([$t10, $t11], "StrToInt", [(await $.mv((await $.wv([$t10, $t11], "EGroupAmortTAX", C, false)), "text"))], C))]], C)));
        await $.stmt($.wcall([$t10, $t11], "DisableControls", [], C));
        await $.stmt($.wcall([$t10, $t11], "Refresh", [], C));
        await $.stmt((await $.wcall([$t10, $t11], "Locate", ["ID", (await $.wv([$t10, $t11], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false)), [(await $.wv([$t10, $t11], "loPartialKey", C, false))]], C)));
        await $.stmt($.wcall([$t10, $t11], "EnableControls", [], C));
      }
    }
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddGroups", "ActionCancelExecute", async function ActionCancelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddGroups", "ActionCommitUpdate", async function ActionCommitUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (L0["sender"]);
    await $.wset([$t12], "Enabled", (await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.wv([$t12], "EGroupName", C, false)), "Text")), "")), async () => ($.ne((await $.mv((await $.wv([$t12], "EGroupAmortNB", C, false)), "Text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t12], "EGroupAmortTAX", C, false)), "Text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t12], "CBMainAccount", C, false)), "Tag")), 0)))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddGroups", "EGroupAmortNBKeyPress", async function EGroupAmortNBKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ",", ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
