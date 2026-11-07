// Generated from uRIMain.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("uRIMain", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "CheckLst", "Evanescence", "uRIDM", "urepRI", "SBTranslateProc", "SboApiDataModuleImpl"]);
  const C = [U];
  U.defClass("TfrmRIMain", "TForm", {"dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "chkcredits": {"name": "chkCredits", "type": "TEvanescence"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("frmRIMain", null, "TfrmRIMain");
  });
  U.method("TfrmRIMain", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "RIDataMod", (await $.mcall((await $.v(C, "TRIDataMod")), "Create", [Self])));
  await $.set(C, "qrpRIRep", (await $.mcall((await $.v(C, "TqrpRIRep")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmRIMain", "DBLookupComboboxEh1Change", async function DBLookupComboboxEh1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "chkCredits")), "Close", []);
  await $.mcall((await $.v(C, "chkCredits")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmRIMain", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmRIMain", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "RIDataMod"));
    const $t2 = (await $.wv([$t1], "ODSRep", C, false));
    const $t3 = (await $.wv([$t1, $t2], "qrpRIRep", C, false));
    await $.stmt($.wcall([$t1, $t2, $t3], "Close", [], C));
    { const $t4 = await $.iset((await $.wv([$t1, $t2, $t3], "SQL", C, false)), [1], $.add($.add("where creditid in (", (await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "chkCredits", C, false)), "GetCheckedKeyList")), "CommaText"))), ")")); if ($t4 !== undefined) { await $.wset([$t1, $t2, $t3], "SQL", $t4, C); } }
    await $.stmt($.wcall([$t1, $t2, $t3], "Open", [], C));
    await $.mcall((await $.wv([$t1, $t2, $t3], "ODSNextVal", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t3], "ODSNextVal", C, false)), "SetVariable", ["bankid", (await $.mv((await $.mcall((await $.wv([$t1, $t2, $t3], "ODSBanks", C, false)), "fieldbyname", ["id"])), "AsVariant"))])));
    await $.mcall((await $.wv([$t1, $t2, $t3], "ODSNextVal", C, false)), "Open", []);
    await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t3], "ODSUpdNextVal", C, false)), "SetVariable", ["bankid", (await $.mv((await $.mcall((await $.wv([$t1, $t2, $t3], "ODSBanks", C, false)), "fieldbyname", ["id"])), "AsVariant"))])));
    await $.mcall((await $.wv([$t1, $t2, $t3], "ODSUpdNextVal", C, false)), "ExecSQL", []);
    await $.mcall((await $.wv([$t1, $t2, $t3], "Session", C, false)), "Commit", []);
    await $.mset((await $.wv([$t1, $t2, $t3], "qlbTop", C, false)), "Caption", $.add($.add($.add($.add($.add($.add("Azərbaycan Respublikasının Milli Bankı nəzdində Azərbaycan İpoteka Fondu ilə \"", (await $.mv((await $.mcall((await $.wv([$t1, $t2, $t3], "ODSRep", C, false)), "FieldByName", ["MKBANK"])), "AsString"))), "\" arasında \""), (await $.mv((await $.mcall((await $.wv([$t1, $t2, $t3], "ODSNextVal", C, false)), "FieldByName", ["CONTRDATE"])), "AsString"))), "\" tarixli "), (await $.mv((await $.mcall((await $.wv([$t1, $t2, $t3], "ODSNextVal", C, false)), "FieldByName", ["kod_bank"])), "AsString"))), " saylı Xidmət müqaviləsinə əlavə"));
    await $.stmt($.wcall([$t1, $t2, $t3], "Preview", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
