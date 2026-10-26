// Generated from Unit155.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit155", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCtrls", "StdCtrls", "Grids", "DBGrids", "NLSLocalizer", "U9", "applicationpas", "atmendpos", "balans", "balhs", "banksettings", "CARDS_TLB", "cfilepas", "comp", "crdtype", "creditinfopas", "customers", "datclose", "domesticbank", "dpforms", "filialaccounts", "MAINFORMImpl1", "newcard", "payment", "poscomission", "rezform", "setac", "sms", "Unit18", "UnitDxxx", "Unitintfile", "UnitRvisa", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TPROVS", "TForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}}, {});
  U.init(async () => {
    U.var_("PROVS", null, "TPROVS");
  });
  U.method("TPROVS", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["insert_noprovs", [(await $.mv((await $.v(C, "edit1")), "text"))]])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "noprov")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPROVS", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "noprov")), "Delete", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "noprov")), "Session")), "Commit", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "noprov")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPROVS", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
