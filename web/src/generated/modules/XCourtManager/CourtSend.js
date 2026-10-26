// Generated from CourtSend.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CourtSend", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBGridEh", "StdCtrls", "Buttons", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "XFSCtrls", "UnitDataModuleCourt"]);
  const C = [U];
  U.defClass("TFormSend", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("FormSend", null, "TFormSend");
  });
  U.method("TFormSend", "ExcuseMeUser", async function ExcuseMeUser(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"question": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["question"]);
  L0["result"] = $.eq((await $.call(C, "MessageDlg", [L0["question"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes")));
  return L0.result;
}, {"params": ["Question"], "kind": "function", "ptypes": ["String"]});
  U.method("TFormSend", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rsconfirmforone"] = "%s  - № li kredit  %s. Əminsiniz?";
  L0["rsconfirmforall"] = "%d - sayda kredit dosyesi %s. Əminsiniz?";
  L0["rscalcpercent"] = "göndəriləcək";
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Gondərəcəyiniz yeri seçin!"])));
    return L0.result;
  }
  {
    const $t1 = (await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourt"));
    await $.wset([$t1], "id", (await $.mv((await $.wcall([$t1], "FieldByName", ["id"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
    if ($.truthy($.not((await $.wcall([$t1], "ExcuseMeUser", [(await $.wcall([$t1], "Format", [(await $.wv([$t1], "rsConfirmForOne", { get: async () => L0["rsconfirmforone"], set: async (v) => { L0["rsconfirmforone"] = v; }, local: true }, false)), [(await $.mv((await $.wcall([$t1], "FieldByName", ["numberofcredit"], C)), "AsString")), (await $.wv([$t1], "rsCalcPercent", { get: async () => L0["rscalcpercent"], set: async (v) => { L0["rscalcpercent"] = v; }, local: true }, false))]], C))], C))))) {
      return L0.result;
    }
    {
      const $t2 = (await $.mv((await $.wv([$t1], "DataModuleCourt", C, false)), "ct_control"));
      await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["add_folder", ["p_id", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["id"], C)), "AsInteger")), "p_courtidsender", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["courtid"], C)), "AsInteger")), "p_courtidreciver", (await $.mv((await $.wv([$t1, $t2], "DBLookupComboboxEh2", C, false)), "KeyValue"))]], C)));
    }
    await $.stmt($.wcall([$t1], "Refresh", [], C));
    await $.stmt((await $.wcall([$t1], "Locate", ["id", (await $.wv([$t1], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), []], C)));
  }
  await $.mcall((await $.v(C, "FormSend")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
