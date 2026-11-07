// Generated from ActvMainUnitImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ActvMainUnitImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "ActnList", "ActvDataModuleImpl", "CommonDecls", "sbsystem"]);
  const C = [U];
  U.defClass("TMainForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "statuspanel": {"name": "StatusPanel", "type": "TPanel"}, "buttonaccept": {"name": "ButtonAccept", "type": "TButton"}, "buttonclose": {"name": "ButtonClose", "type": "TButton"}, "cboblication": {"name": "CbOblication", "type": "TCheckBox"}, "cbpledgprice": {"name": "CbPledgPrice", "type": "TCheckBox"}, "button1": {"name": "Button1", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("MainForm", null, "TMainForm");
  });
  U.method("TMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ActvDataMod", (await $.mcall((await $.v(C, "TActvDataMod")), "Create", [Self])));
  await $.set(C, "ActiveControl", (await $.v(C, "ButtonAccept")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ActvDataMod")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TMainForm", "ShowActivationForm", async function ShowActivationForm(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "creditid": 0, "creditno": ''};
  L0["rscaption"] = "%s №-Li kreditin ödəlik və girovunu B.K. Otuzdurulması.";
  L0["rsalreadyactive"] = "Kreditin girov və öhtəliyi  %s tarixində B.K. otuzdurulub.";
  L0["rsnotactivatedyet"] = "Kreditin girov və öhdəliyi B.K.  otuzdurulmayıb!";
  L0["creditid"] = (await $.v(C, "Get_SelectedCrdID"));
  L0["creditno"] = (await $.v(C, "Get_SelectedCrdNo"));
  await $.set(C, "Caption", (await $.call(C, "Format", [L0["rscaption"], [L0["creditno"]]])));
  {
    const $t1 = (await $.wobj(C, "ActvDataMod"));
    {
      const $t2 = (await $.wv([$t1], "CreditInfo", C, false));
      await $.stmt($.wcall([$t1, $t2], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["ID", (await $.wv([$t1, $t2], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    }
    {
      const $t3 = (await $.wv([$t1], "ActvInfo", C, false));
      await $.stmt($.wcall([$t1, $t3], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t1, $t3], "SetVariable", ["CreditID", (await $.wv([$t1, $t3], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t3], "Open", [], C));
      if ($.truthy($.gt((await $.wv([$t1, $t3], "RecordCount", C, false)), 0))) {
        await $.mset((await $.mv((await $.wv([$t1, $t3], "StatusPanel", C, false)), "Font")), "Color", (await $.wv([$t1, $t3], "clNavy", C, false)));
        await $.mset((await $.wv([$t1, $t3], "StatusPanel", C, false)), "Caption", (await $.wcall([$t1, $t3], "Format", [(await $.wv([$t1, $t3], "rsAlreadyActive", { get: async () => L0["rsalreadyactive"], set: async (v) => { L0["rsalreadyactive"] = v; }, local: true }, false)), [(await $.mv((await $.wcall([$t1, $t3], "FieldByName", ["ACTVDATE"], C)), "AsString"))]], C)));
        await $.mset((await $.wv([$t1, $t3], "Button1", C, false)), "Enabled", (await $.wv([$t1, $t3], "true", C, false)));
      } else {
        await $.mset((await $.mv((await $.wv([$t1, $t3], "StatusPanel", C, false)), "Font")), "Color", (await $.wv([$t1, $t3], "clRed", C, false)));
        await $.mset((await $.wv([$t1, $t3], "StatusPanel", C, false)), "Caption", (await $.wv([$t1, $t3], "rsNotActivatedYet", { get: async () => L0["rsnotactivatedyet"], set: async (v) => { L0["rsnotactivatedyet"] = v; }, local: true }, false)));
        await $.mset((await $.wv([$t1, $t3], "Button1", C, false)), "Enabled", (await $.wv([$t1, $t3], "false", C, false)));
      }
    }
  }
  await $.stmt($.call(C, "ShowModal", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TMainForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.wobj(C, "ActvDataMod"));
    await $.mcall((await $.wv([$t4], "ActvInfo", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t4], "CreditInfo", C, false)), "CloseAll", []);
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TMainForm", "ButtonCloseClick", async function ButtonCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "ButtonAcceptClick", async function ButtonAcceptClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "date": 0, "defoperation": 0, "creditid": 0, "commitoperation": false, "msgdlg": '', "ab": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rstrformcaption"] = "B.K. - a öhtəlik və girovun otuzdurulması.";
  L0["rsconfirmopall"] = "Kreditin girov və öhdəliyi B.K. otuzdurulacaq  . Əminsiniz?";
  L0["rsconfirmoppledg"] = "Kreditin girovu B.K. oturacaq . Əminsiniz?";
  L0["rsconfirmopobl"] = "Kreditin öhdəliyi B.K.  oturacaq . Əminsiniz?";
  L0["rsbk"] = "B.K. - a öhdəlik tam olaraq azaldılacaq  . Əminsiniz?";
  L0["ab"] = 100;
  if ($.truthy((await $.mv((await $.v(C, "CbOblication")), "Checked")))) {
    L0["defoperation"] = 2;
    L0["msgdlg"] = L0["rsconfirmopobl"];
  }
  if ($.truthy((await $.mv((await $.v(C, "CbPledgPrice")), "Checked")))) {
    L0["defoperation"] = 1;
    L0["msgdlg"] = L0["rsconfirmoppledg"];
  }
  if ($.truthy((await $.and_((await $.mv((await $.v(C, "CbOblication")), "Checked")), async () => (await $.mv((await $.v(C, "CbPledgPrice")), "Checked")))))) {
    L0["defoperation"] = 0;
    L0["msgdlg"] = L0["rsconfirmopall"];
  }
  if ($.truthy($.ne((await $.call(C, "MessageDlg", [L0["msgdlg"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  L0["creditid"] = (await $.v(C, "Get_SelectedCrdID"));
  L0["date"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.v(C, "Get_CurrentDate"))]))]));
  try {
    {
      const $t6 = (await $.mv((await $.v(C, "ActvDataMod")), "ActivationPckg"));
      await $.stmt((await $.wcall([$t6], "CallProcedure", ["ActivateCredit", ["p_CreditID", (await $.wv([$t6], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false)), "p_Date", (await $.wv([$t6], "Date", { get: async () => L0["date"], set: async (v) => { L0["date"] = v; }, local: true }, false)), "p_Activate", (await $.wv([$t6], "DefOperation", { get: async () => L0["defoperation"], set: async (v) => { L0["defoperation"] = v; }, local: true }, false)), "p_ab", (await $.wv([$t6], "ab", { get: async () => L0["ab"], set: async (v) => { L0["ab"] = v; }, local: true }, false))]], C)));
      await $.wset([$t6], "CommitOperation", (await $.wcall([$t6], "TrDelayed_Show", [Self, (await $.wv([$t6], "rsTrFormCaption", { get: async () => L0["rstrformcaption"], set: async (v) => { L0["rstrformcaption"] = v; }, local: true }, false))], C)), { get: async () => L0["commitoperation"], set: async (v) => { L0["commitoperation"] = v; }, local: true });
      await $.stmt($.wcall([$t6], "Update", [], C));
      await $.stmt((await $.wcall([$t6], "CallProcedure", ["CommitActivation", ["DoCommit", (await $.wv([$t6], "CommitOperation", { get: async () => L0["commitoperation"], set: async (v) => { L0["commitoperation"] = v; }, local: true }, false))]], C)));
      if ($.truthy((await $.wv([$t6], "CommitOperation", { get: async () => L0["commitoperation"], set: async (v) => { L0["commitoperation"] = v; }, local: true }, false)))) {
        await $.mset(Self, "ModalResult", (await $.wv([$t6], "mrOk", C, false)));
      }
      await $.mcall(Self, "Update", []);
    }
  } catch ($t5) {
    $.rethrowControl($t5);
    $.handled($t5);
    {
      const $t7 = (await $.mv((await $.v(C, "ActvDataMod")), "ActivationPckg"));
      await $.stmt((await $.wcall([$t7], "CallProcedure", ["CommitActivation", ["DoCommit", (await $.wv([$t7], "False", C, false))]], C)));
    }
    throw $t5;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "MainForm")), "ShowActivationForm", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TMainForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TMainForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "date": 0, "defoperation": 0, "creditid": 0, "commitoperation": false, "msgdlg": '', "ab": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rstrformcaption"] = "B.K. - a öhtəlik və girovun otuzdurulması.";
  L0["rsconfirmopall"] = "Kreditin öhdalik və girovu B.K. azaldılacaq . Əminsiniz?";
  L0["rsconfirmoppledg"] = "Kreditin girovu B.K. azaldılacaq . Əminsiniz?";
  L0["rsconfirmopobl"] = "Kreditin öhtəliyi B.K. azaldılacaq . Əminsiniz?";
  L0["ab"] = 3;
  if ($.truthy((await $.mv((await $.v(C, "CbOblication")), "Checked")))) {
    L0["defoperation"] = 2;
    L0["msgdlg"] = L0["rsconfirmopobl"];
  }
  if ($.truthy((await $.mv((await $.v(C, "CbPledgPrice")), "Checked")))) {
    L0["defoperation"] = 1;
    L0["msgdlg"] = L0["rsconfirmoppledg"];
  }
  if ($.truthy((await $.and_((await $.mv((await $.v(C, "CbOblication")), "Checked")), async () => (await $.mv((await $.v(C, "CbPledgPrice")), "Checked")))))) {
    L0["defoperation"] = 0;
    L0["msgdlg"] = L0["rsconfirmopall"];
  }
  if ($.truthy($.ne((await $.call(C, "MessageDlg", [L0["msgdlg"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  L0["creditid"] = (await $.v(C, "Get_SelectedCrdID"));
  L0["date"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.v(C, "Get_CurrentDate"))]))]));
  try {
    {
      const $t9 = (await $.mv((await $.v(C, "ActvDataMod")), "ActivationPckg"));
      await $.stmt((await $.wcall([$t9], "CallProcedure", ["ActivateCredit", ["p_CreditID", (await $.wv([$t9], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false)), "p_Date", (await $.wv([$t9], "Date", { get: async () => L0["date"], set: async (v) => { L0["date"] = v; }, local: true }, false)), "p_Activate", (await $.wv([$t9], "DefOperation", { get: async () => L0["defoperation"], set: async (v) => { L0["defoperation"] = v; }, local: true }, false)), "p_ab", (await $.wv([$t9], "ab", { get: async () => L0["ab"], set: async (v) => { L0["ab"] = v; }, local: true }, false))]], C)));
      await $.wset([$t9], "CommitOperation", (await $.wcall([$t9], "TrDelayed_Show", [Self, (await $.wv([$t9], "rsTrFormCaption", { get: async () => L0["rstrformcaption"], set: async (v) => { L0["rstrformcaption"] = v; }, local: true }, false))], C)), { get: async () => L0["commitoperation"], set: async (v) => { L0["commitoperation"] = v; }, local: true });
      await $.stmt($.wcall([$t9], "Update", [], C));
      await $.stmt((await $.wcall([$t9], "CallProcedure", ["CommitActivation", ["DoCommit", (await $.wv([$t9], "CommitOperation", { get: async () => L0["commitoperation"], set: async (v) => { L0["commitoperation"] = v; }, local: true }, false))]], C)));
      if ($.truthy((await $.wv([$t9], "CommitOperation", { get: async () => L0["commitoperation"], set: async (v) => { L0["commitoperation"] = v; }, local: true }, false)))) {
        await $.mset(Self, "ModalResult", (await $.wv([$t9], "mrOk", C, false)));
      }
      await $.mcall(Self, "Update", []);
    }
  } catch ($t8) {
    $.rethrowControl($t8);
    $.handled($t8);
    {
      const $t10 = (await $.mv((await $.v(C, "ActvDataMod")), "ActivationPckg"));
      await $.stmt((await $.wcall([$t10], "CallProcedure", ["CommitActivation", ["DoCommit", (await $.wv([$t10], "False", C, false))]], C)));
    }
    throw $t8;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "MainForm", (await $.mcall((await $.v(C, "TMainForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
