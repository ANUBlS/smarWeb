// Generated from frmpbffilialsaccsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmpbffilialsaccsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "ComCtrls", "StdCtrls", "Grids", "DBGridEh", "sboapiDataModuleImpl", "dmpbf_transactionimpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFrmpbfFilialsaccs", "TForm", {"pbffilials": {"name": "PBFFilials", "type": "TOracleDataSet"}, "pbf_filialsaccount": {"name": "pbf_filialsaccount", "type": "TOracleDataSet"}, "pbf_filialsaccountfilialid": {"name": "pbf_filialsaccountFILIALID", "type": "TFloatField"}, "pbf_filialsaccountcurrency": {"name": "pbf_filialsaccountCURRENCY", "type": "TFloatField"}, "pbf_filialsaccountacctype": {"name": "pbf_filialsaccountACCTYPE", "type": "TWideStringField"}, "pbffilialsid": {"name": "PBFFilialsID", "type": "TFloatField"}, "pbffilialsname": {"name": "PBFFilialsNAME", "type": "TWideStringField"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "pbffilialsds": {"name": "PBFFilialsds", "type": "TDataSource"}, "pbf_filialsaccountds": {"name": "pbf_filialsaccountds", "type": "TDataSource"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "pbfaccs": {"name": "PBFAccs", "type": "TOracleDataSet"}, "pbfvalutes": {"name": "PBFValutes", "type": "TOracleDataSet"}, "pbfaccsid": {"name": "PBFAccsID", "type": "TFloatField"}, "pbfaccsacc_no": {"name": "PBFAccsACC_NO", "type": "TWideStringField"}, "pbfvalutesvalute": {"name": "PBFValutesVALUTE", "type": "TIntegerField"}, "pbfvalutesval_name": {"name": "PBFValutesVAL_NAME", "type": "TWideStringField"}, "pbf_filialsaccountcurrencyname": {"name": "pbf_filialsaccountcurrencyname", "type": "TWideStringField"}, "pbf_filialsaccountaccname": {"name": "pbf_filialsaccountaccname", "type": "TWideStringField"}, "pbf_filialsaccountaccid": {"name": "pbf_filialsaccountACCID", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("FrmpbfFilialsaccs", null, "TFrmpbfFilialsaccs");
  });
  U.method("TFrmpbfFilialsaccs", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "PBFFilials")), "open", []);
  await $.mcall((await $.v(C, "PBFAccs")), "open", []);
  await $.mcall((await $.v(C, "PBFValutes")), "open", []);
  await $.mcall((await $.v(C, "pbf_filialsaccount")), "open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmpbfFilialsaccs", "smKeyPress", async function smKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmpbfFilialsaccs", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmpbfFilialsaccs", "DBGridEh2KeyDown", async function DBGridEh2KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.and_(($.eq((await L0["key"].get()), (await $.v(C, "VK_DELETE")))), async () => ($.gt((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridEh2")), "DataSource")), "DataSet")), "RecordCount")), 0)))))) {
    if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Silinməsinə əminsinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
      await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridEh2")), "DataSource")), "DataSet")), "Delete", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFrmpbfFilialsaccs", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGridEh2")), "Columns")), [1])), "PickList")), "Clear", []);
  {
    const $t1 = (await $.v(C, "dmpbf_transaction"));
    const $t2 = (await $.wv([$t1], "kindofaccs", C, false));
    await $.stmt($.wcall([$t1, $t2], "first", [], C));
    while ($.truthy($.not((await $.mv((await $.wv([$t1, $t2], "kindofaccs", C, false)), "eof"))))) {
      await $.stmt((await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t1, $t2], "DBGridEh2", C, false)), "Columns")), [1])), "PickList")), "Add", [(await $.mv((await $.wcall([$t1, $t2], "fieldbyname", ["acc_no"], C)), "asstring"))])));
      await $.mcall((await $.wv([$t1, $t2], "kindofaccs", C, false)), "next", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
