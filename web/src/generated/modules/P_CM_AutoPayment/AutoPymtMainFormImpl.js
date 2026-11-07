// Generated from AutoPymtMainFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AutoPymtMainFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "dialogs", "ExtCtrls", "StdCtrls", "ActnList", "sboapiDataModuleImpl", "CommonDecls", "SBSystem", "AutoPymtDataModuleImpl", "AutoPayProgressFormImpl"]);
  const C = [U];
  U.defClass("TAutoPymtMainForm", "TForm", {"panelinfo": {"name": "PanelInfo", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "payactionlist": {"name": "PayActionList", "type": "TActionList"}, "actionpayauto": {"name": "ActionPayAuto", "type": "TAction"}}, {});
  U.init(async () => {
    U.var_("AutoPymtMainForm", null, "TAutoPymtMainForm");
    U.var_("RefreshBeforeClose", false, "Boolean");
  });
  U.method("TAutoPymtMainForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TAutoPymtMainForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAutoPymtMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "AutoPymtDataMod", (await $.mcall((await $.v(C, "TAutoPymtDataMod")), "Create", [Self])));
  await $.set(C, "ProgressForm", (await $.mcall((await $.v(C, "TProgressForm")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAutoPymtMainForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ProgressForm")), "Free", []);
  await $.mcall((await $.v(C, "AutoPymtDataMod")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAutoPymtMainForm", "ShowAutoPaymentForm", async function ShowAutoPaymentForm(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "crdcount": 0};
  L0["rscreditreadyforpayment"] = "%d - sayda kreditin ödənilməsi aftomatik aparılmalıdır ";
  await $.set(C, "RefreshBeforeClose", false);
  {
    const $t1 = (await $.wobj(C, "AutoPymtDataMod"));
    await $.mcall((await $.wv([$t1], "AutoPaymentableLoans", C, false)), "Open", []);
    await $.wset([$t1], "CrdCount", (await $.mv((await $.wv([$t1], "AutoPaymentableLoans", C, false)), "RecordCount")), { get: async () => L0["crdcount"], set: async (v) => { L0["crdcount"] = v; }, local: true });
  }
  await $.mset((await $.v(C, "PanelInfo")), "Caption", (await $.call(C, "Format", [L0["rscreditreadyforpayment"], [L0["crdcount"]]])));
  await $.stmt($.call(C, "ShowModal", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TAutoPymtMainForm", "ActionPayAutoUpdate", async function ActionPayAutoUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.mv((await $.v(C, "AutoPymtDataMod")), "AutoPaymentableLoans"));
    await $.mset((await $.wv([$t2], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Enabled", (await $.and_((await $.wv([$t2], "Active", C, false)), async () => ($.gt((await $.wv([$t2], "RecordCount", C, false)), 0)))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAutoPymtMainForm", "ActionPayAutoExecute", async function ActionPayAutoExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "creditid": 0, "adate": 0, "payedsuccesfulcount": 0, "payedunsuccesfulcount": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rsusersure"] = "Ödəmələrin aftomatik aparılması biraz vaxt alacaq  ! Aparılsın?";
  L0["rssuccesmsg"] = "%d ödəmə aftomatik aparıldı!";
  L0["rsunsuccesmsg"] = "%d Ödəmə aparıla bilmədi!";
  L0["rsendmsg"] = "Əmzliyyat başa çatdı.";
  if ($.truthy($.ne((await $.call(C, "MessageDlg", [L0["rsusersure"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  {
    const $t3 = (await $.wobj(C, "ProgressForm"));
    await $.wset([$t3], "FCancelOrder", (await $.wv([$t3], "False", C, false)), C);
    await $.wset([$t3], "FCancelGranted", (await $.wv([$t3], "False", C, false)), C);
    await $.mset((await $.wv([$t3], "ProgressShower", C, false)), "Position", 0);
    await $.mset((await $.wv([$t3], "ProgressShower", C, false)), "Step", 1);
  }
  L0["adate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.v(C, "Get_CurrentDate"))]))]));
  L0["payedsuccesfulcount"] = 0;
  L0["payedunsuccesfulcount"] = 0;
  {
    const $t4 = (await $.wobj(C, "AutoPymtDataMod"));
    const $t5 = (await $.wv([$t4], "AutoPaymentableLoans", C, false));
    await $.stmt($.wcall([$t4, $t5], "First", [], C));
    await $.mset((await $.mv((await $.wv([$t4, $t5], "ProgressForm", C, false)), "ProgressShower")), "Max", (await $.wv([$t4, $t5], "RecordCount", C, false)));
    await $.mcall((await $.wv([$t4, $t5], "ProgressForm", C, false)), "Show", []);
    while ($.truthy($.not((await $.wv([$t4, $t5], "EOF", C, false))))) {
      await $.wset([$t4, $t5], "CreditID", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true });
      try {
        await $.stmt((await $.mcall((await $.wv([$t4, $t5], "CM_PAYMENT", C, false)), "CallProcedure", ["PayAuto", ["p_CreditID", (await $.wv([$t4, $t5], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false)), "p_Date", (await $.wv([$t4, $t5], "ADate", { get: async () => L0["adate"], set: async (v) => { L0["adate"] = v; }, local: true }, false)), "p_ShowTransactions", (await $.wv([$t4, $t5], "False", C, false))]])));
        await $.wset([$t4, $t5], "PayedSuccesfulCount", $.add((await $.wv([$t4, $t5], "PayedSuccesfulCount", { get: async () => L0["payedsuccesfulcount"], set: async (v) => { L0["payedsuccesfulcount"] = v; }, local: true }, false)), 1), { get: async () => L0["payedsuccesfulcount"], set: async (v) => { L0["payedsuccesfulcount"] = v; }, local: true });
      } catch ($t6) {
        $.rethrowControl($t6);
        if ($.excIs($t6, "Exception")) {
          L0["e"] = $.exc($t6);
          await $.stmt((await $.wcall([$t4, $t5], "LogError", [$.add((await $.wcall([$t4, $t5], "Format", ["ID = %d  : ", [(await $.wv([$t4, $t5], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))]], C)), (await $.mv((await $.wv([$t4, $t5], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
          await $.wset([$t4, $t5], "PayedUnSuccesfulCount", $.add((await $.wv([$t4, $t5], "PayedUnSuccesfulCount", { get: async () => L0["payedunsuccesfulcount"], set: async (v) => { L0["payedunsuccesfulcount"] = v; }, local: true }, false)), 1), { get: async () => L0["payedunsuccesfulcount"], set: async (v) => { L0["payedunsuccesfulcount"] = v; }, local: true });
        }
        else { throw $t6; }
      }
      await $.stmt($.wcall([$t4, $t5], "Next", [], C));
      await $.mset((await $.mv((await $.wv([$t4, $t5], "ProgressForm", C, false)), "ProgressShower")), "Position", (await $.wv([$t4, $t5], "RecNo", C, false)));
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "ProgressForm")), "Close", []);
  if ($.truthy($.gt(L0["payedunsuccesfulcount"], 0))) {
    await $.stmt((await $.call(C, "MessageDlg", [(await $.call(C, "Format", [L0["rsunsuccesmsg"], [L0["payedunsuccesfulcount"]]])), (await $.v(C, "mtWarning")), [(await $.v(C, "mbOK"))], 0])));
  }
  if ($.truthy($.gt(L0["payedsuccesfulcount"], 0))) {
    await $.stmt((await $.call(C, "MessageDlg", [(await $.call(C, "Format", [L0["rssuccesmsg"], [L0["payedsuccesfulcount"]]])), (await $.v(C, "mtInformation")), [(await $.v(C, "mbOK"))], 0])));
    await $.set(C, "RefreshBeforeClose", true);
  }
  await $.stmt((await $.call(C, "MessageDlg", [L0["rsendmsg"], (await $.v(C, "mtInformation")), [(await $.v(C, "mbOK"))], 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAutoPymtMainForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.wobj(C, "AutoPymtDataMod"));
    await $.mcall((await $.wv([$t7], "AutoPaymentableLoans", C, false)), "CloseAll", []);
  }
  if ($.truthy((await $.v(C, "RefreshBeforeClose")))) {
    await $.stmt((await $.call(C, "SafeRefresh", [true, (await $.v(C, "rmRefreshOnly"))])));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "AutoPymtMainForm")), "ShowAutoPaymentForm", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "AutoPymtMainForm", (await $.mcall((await $.v(C, "TAutoPymtMainForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
