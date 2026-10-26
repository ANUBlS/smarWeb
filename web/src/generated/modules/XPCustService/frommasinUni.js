// Generated from frommasinUni.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frommasinUni", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBGridEhGrouping", "GridsEh", "DBGridEh", "DB", "OracleData", "PCustServiceFormImpl1"]);
  const C = [U];
  U.defClass("TFormMasin", "TForm", {"ods_masin": {"name": "ods_masin", "type": "TOracleDataSet"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "dsrc_masin": {"name": "dsrc_masin", "type": "TDataSource"}, "ods_masinkli_id": {"name": "ods_masinKLI_ID", "type": "TFloatField"}, "ods_masinname": {"name": "ods_masinNAME", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("FormMasin", null, "TFormMasin");
  });
  U.method("TFormMasin", "DBGridEh1DblClick", async function DBGridEh1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "PCustServiceForm")), "editid")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_masin")), "FieldByName", ["kli_id"])), "AsString")));
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
