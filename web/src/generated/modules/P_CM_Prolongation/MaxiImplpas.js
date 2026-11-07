// Generated from MaxiImplpas.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("MaxiImplpas", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBCtrls", "DBGridEh", "Mask", "DBCtrlsEh", "DBLookupEh", "Buttons", "ProlongDataModuleImpl", "SbSystem", "CommonDecls"]);
  const C = [U];
  U.defClass("TMaxiFrm", "TForm", {"label1": {"name": "Label1", "type": "TLabel"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("MaxiFrm", null, "TMaxiFrm");
  });
  U.method("TMaxiFrm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "crdid": 0, "committranche": false};
  await $.fixArgs(L0, ["sender"]);
  L0["rstransactionswillprocessed"] = "Maxi uzadılma ...";
  L0["rsinvaliddate"] = "Düzgün tarixi daxil edin !";
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Müddəti seçin!"])));
    return L0.result;
  }
  L0["crdid"] = (await $.v(C, "Get_SelectedCrdID"));
  {
    const $t1 = (await $.wobj(C, "ProlongDataMod"));
    await $.stmt((await $.mcall((await $.wv([$t1], "CM_PROLONGATION", C, false)), "CallProcedure", ["maxi_expire", [(await $.wv([$t1], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t1], "DBLookupComboboxEh1", C, false)), "KeyValue"))]])));
  }
  try {
    L0["committranche"] = (await $.call(C, "TrDelayed_Show", [Self, L0["rstransactionswillprocessed"]]));
    await $.stmt($.call(C, "Update", []));
    {
      const $t3 = (await $.wobj(C, "ProlongDataMod"));
      await $.stmt((await $.mcall((await $.wv([$t3], "CM_PROLONGATION", C, false)), "CallProcedure", ["CommitTMaxi", [(await $.wv([$t3], "CommitTranche", { get: async () => L0["committranche"], set: async (v) => { L0["committranche"] = v; }, local: true }, false))]])));
    }
    if ($.truthy(L0["committranche"])) {
      await $.mset(Self, "ModalResult", (await $.v(C, "mrOk")));
    }
    await $.mcall(Self, "Update", []);
  } catch ($t2) {
    $.rethrowControl($t2);
    $.handled($t2);
    {
      const $t4 = (await $.wobj(C, "ProlongDataMod"));
      await $.stmt((await $.mcall((await $.wv([$t4], "CM_TRANCHE", C, false)), "CallProcedure", ["CommitTranche", ["DoCommit", (await $.wv([$t4], "False", C, false))]])));
    }
    throw $t2;
  }
  await $.mcall((await $.mv((await $.v(C, "ProlongDataMod")), "ProlongsData")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMaxiFrm", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
