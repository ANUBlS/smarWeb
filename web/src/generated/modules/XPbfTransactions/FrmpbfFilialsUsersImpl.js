// Generated from FrmpbfFilialsUsersImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmpbfFilialsUsersImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "DBCtrls", "ComCtrls", "Grids", "DBGridEh", "Db", "OracleData", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFrmpbfFilialsUsers", "TForm", {"pbfusersds": {"name": "pbfusersds", "type": "TDataSource"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "pbfusers": {"name": "pbfusers", "type": "TOracleDataSet"}, "pbfusersid": {"name": "pbfusersID", "type": "TFloatField"}, "pbfusersfilial": {"name": "pbfusersFILIAL", "type": "TFloatField"}, "pbfusersuserid": {"name": "pbfusersUSERID", "type": "TWideStringField"}, "allf": {"name": "allF", "type": "TOracleDataSet"}, "allu": {"name": "allu", "type": "TOracleDataSet"}, "allfid": {"name": "allFID", "type": "TFloatField"}, "allfname": {"name": "allFNAME", "type": "TWideStringField"}, "alluid": {"name": "alluID", "type": "TFloatField"}, "alluname": {"name": "alluNAME", "type": "TWideStringField"}, "pbfusersfilialname": {"name": "pbfusersfilialname", "type": "TWideStringField"}, "pbfusersusername": {"name": "pbfusersusername", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("FrmpbfFilialsUsers", null, "TFrmpbfFilialsUsers");
  });
  U.method("TFrmpbfFilialsUsers", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmpbfFilialsUsers", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmpbfFilialsUsers", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "allF")), "open", []);
  await $.mcall((await $.v(C, "allu")), "open", []);
  await $.mcall((await $.v(C, "pbfusers")), "open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
