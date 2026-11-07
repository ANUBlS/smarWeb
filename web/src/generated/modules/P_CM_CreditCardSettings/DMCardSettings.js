// Generated from DMCardSettings.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DMCardSettings", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TDMCardSeting", "TDataModule", {"categories": {"name": "Categories", "type": "TOracleDataSet"}, "categoriesdatsrc": {"name": "CategoriesDatSrc", "type": "TDataSource"}, "categoriesid": {"name": "CategoriesID", "type": "TFloatField"}, "categoriesdescription": {"name": "CategoriesDESCRIPTION", "type": "TWideStringField"}, "cardsorts": {"name": "cardsorts", "type": "TOracleDataSet"}, "cardsortsdatsrc": {"name": "cardsortsDatSrc", "type": "TDataSource"}, "cardsettings": {"name": "cardsettings", "type": "TOracleDataSet"}, "cardsettingsdatsrc": {"name": "cardsettingsDatSrc", "type": "TDataSource"}, "cardsettingscardid": {"name": "cardsettingsCARDID", "type": "TFloatField"}, "cardsettingsbeginperiod": {"name": "cardsettingsBEGINPERIOD", "type": "TFloatField"}, "cardsettingsendperiod": {"name": "cardsettingsENDPERIOD", "type": "TFloatField"}, "cardsettingsannualintrate": {"name": "cardsettingsANNUALINTRATE", "type": "TFloatField"}, "cardsettingsfixedday": {"name": "cardsettingsFIXEDDAY", "type": "TFloatField"}, "cardcustsettings": {"name": "cardcustsettings", "type": "TOracleDataSet"}, "cardcustsettingsdatsrc": {"name": "cardcustsettingsDatSrc", "type": "TDataSource"}, "cardcustsettingsid": {"name": "cardcustsettingsID", "type": "TFloatField"}, "cardcustsettingscardid": {"name": "cardcustsettingsCARDID", "type": "TFloatField"}, "cardcustsettingscategoryid": {"name": "cardcustsettingsCATEGORYID", "type": "TFloatField"}, "cardcustsettingscategoryname": {"name": "cardcustsettingscategoryname", "type": "TWideStringField"}, "cm_cards": {"name": "cm_cards", "type": "TOraclePackage"}, "cardsortsid": {"name": "cardsortsID", "type": "TFloatField"}, "cardsortsname": {"name": "cardsortsNAME", "type": "TWideStringField"}, "cardsortsdescription": {"name": "cardsortsDESCRIPTION", "type": "TWideStringField"}, "cardmethods": {"name": "cardmethods", "type": "TOracleDataSet"}, "cardmethodsdatsrc": {"name": "cardmethodsDatSrc", "type": "TDataSource"}, "cardmethodsid": {"name": "cardmethodsID", "type": "TFloatField"}, "cardmethodsdescription": {"name": "cardmethodsDESCRIPTION", "type": "TWideStringField"}, "cardsortscalcmethod": {"name": "cardsortsCALCMETHOD", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("DMCardSeting", null, "TDMCardSeting");
  });
  U.method("TDMCardSeting", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Categories")), "Open", []);
  await $.mcall((await $.v(C, "cardsorts")), "Open", []);
  await $.mcall((await $.v(C, "cardsettings")), "Open", []);
  await $.mcall((await $.v(C, "cardcustsettings")), "Open", []);
  await $.mcall((await $.v(C, "cardmethods")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDMCardSeting", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Categories")), "CloseAll", []);
  await $.mcall((await $.v(C, "cardsorts")), "CloseAll", []);
  await $.mcall((await $.v(C, "cardsettings")), "CloseAll", []);
  await $.mcall((await $.v(C, "cardcustsettings")), "CloseAll", []);
  await $.mcall((await $.v(C, "cardmethods")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
