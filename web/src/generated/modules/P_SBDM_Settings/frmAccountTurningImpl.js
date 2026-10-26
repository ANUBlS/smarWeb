// Generated from frmAccountTurningImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmAccountTurningImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "ComCtrls", "ToolWin", "ExtCtrls", "ImgList", "Grids", "DBGridEh", "Db", "OracleData", "Oracle", "ActnList", "sboapiDataModuleImpl", "frmAddEditAccTurningImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TfrmAccountTurning", "TForm", {"imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dbgrideh3": {"name": "DBGridEh3", "type": "TDBGridEh"}, "categoriesdatsrc": {"name": "CategoriesDatSrc", "type": "TDataSource"}, "categories": {"name": "Categories", "type": "TOracleDataSet"}, "categoriesid": {"name": "CategoriesID", "type": "TFloatField"}, "categoriescategory": {"name": "CategoriesCATEGORY", "type": "Twidestringfield"}, "movie_namesdatsrc": {"name": "movie_namesDatSrc", "type": "TDataSource"}, "movie_names": {"name": "movie_names", "type": "TOracleDataSet"}, "movie_namesid": {"name": "movie_namesID", "type": "TIntegerField"}, "movie_namestypeid": {"name": "movie_namesTYPEID", "type": "TIntegerField"}, "movie_namesdescription": {"name": "movie_namesDESCRIPTION", "type": "Twidestringfield"}, "settings": {"name": "settings", "type": "TOracleDataSet"}, "settingsdatsrc": {"name": "settingsDatSrc", "type": "TDataSource"}, "settingsid": {"name": "settingsID", "type": "TFloatField"}, "settingsparentid": {"name": "settingsPARENTID", "type": "TFloatField"}, "settingscurrencyid": {"name": "settingsCURRENCYID", "type": "TFloatField"}, "settingsaccid": {"name": "settingsACCID", "type": "TFloatField"}, "settingsbranchid": {"name": "settingsBRANCHID", "type": "TFloatField"}, "accounts": {"name": "Accounts", "type": "TOracleDataSet"}, "accountsdatsrc": {"name": "AccountsDatSrc", "type": "TDataSource"}, "filials": {"name": "Filials", "type": "TOracleDataSet"}, "filialsdatsrc": {"name": "FilialsDatSrc", "type": "TDataSource"}, "filialsid": {"name": "FilialsID", "type": "TFloatField"}, "filialsname": {"name": "FilialsNAME", "type": "Twidestringfield"}, "valutesdatsrc": {"name": "ValutesDatSrc", "type": "TDataSource"}, "settingsfilialname": {"name": "settingsfilialname", "type": "Twidestringfield"}, "settingscurrencyname": {"name": "settingscurrencyname", "type": "Twidestringfield"}, "settingsaccountnumber": {"name": "settingsaccountnumber", "type": "Twidestringfield"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnadd": {"name": "ActnAdd", "type": "TAction"}, "actnedit": {"name": "ActnEdit", "type": "TAction"}, "actndel": {"name": "ActnDel", "type": "TAction"}, "sbcm_ds": {"name": "sbcm_ds", "type": "TOraclePackage"}, "accountsid": {"name": "AccountsID", "type": "TFloatField"}, "accountsacc_no": {"name": "AccountsACC_NO", "type": "Twidestringfield"}, "accountsname": {"name": "AccountsNAME", "type": "Twidestringfield"}, "accountsval_acc": {"name": "AccountsVAL_ACC", "type": "TIntegerField"}, "valute": {"name": "valute", "type": "TOracleDataSet"}, "valutevalute": {"name": "valuteVALUTE", "type": "TIntegerField"}, "valuteval_name": {"name": "valuteVAL_NAME", "type": "Twidestringfield"}, "valutevalu_name": {"name": "valuteVALU_NAME", "type": "Twidestringfield"}}, {});
  U.init(async () => {
    U.var_("frmAccountTurning", null, "TfrmAccountTurning");
  });
  U.method("TfrmAccountTurning", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Categories")), "Open", []);
  await $.mcall((await $.v(C, "Accounts")), "Open", []);
  await $.mcall((await $.v(C, "Filials")), "Open", []);
  await $.mcall((await $.v(C, "Valute")), "Open", []);
  await $.mcall((await $.v(C, "movie_names")), "Open", []);
  await $.mcall((await $.v(C, "settings")), "Open", []);
  await $.set(C, "frmAddEditAccTurning", (await $.mcall((await $.v(C, "TfrmAddEditAccTurning")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAccountTurning", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Categories")), "CloseAll", []);
  await $.mcall((await $.v(C, "Accounts")), "CloseAll", []);
  await $.mcall((await $.v(C, "Filials")), "CloseAll", []);
  await $.mcall((await $.v(C, "Valute")), "CloseAll", []);
  await $.mcall((await $.v(C, "movie_names")), "CloseAll", []);
  await $.mcall((await $.v(C, "settings")), "CloseAll", []);
  await $.mcall((await $.v(C, "frmAddEditAccTurning")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAccountTurning", "ToolButton8Click", async function ToolButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Categories")), "Refresh", []);
  await $.mcall((await $.v(C, "Accounts")), "Refresh", []);
  await $.mcall((await $.v(C, "movie_names")), "Refresh", []);
  await $.mcall((await $.v(C, "settings")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAccountTurning", "ActnAddExecute", async function ActnAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "settings"));
    await $.stmt($.wcall([$t1], "Insert", [], C));
  }
  {
    const $t2 = (await $.v(C, "frmAddEditAccTurning"));
    await $.wset([$t2], "Caption", "Yeni", C);
    await $.stmt($.wcall([$t2], "ShowModal", [], C));
  }
  {
    const $t3 = (await $.v(C, "settings"));
    await $.stmt($.wcall([$t3], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAccountTurning", "ActnEditExecute", async function ActnEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "settings"));
    await $.stmt($.wcall([$t4], "Edit", [], C));
  }
  {
    const $t5 = (await $.v(C, "frmAddEditAccTurning"));
    await $.wset([$t5], "Caption", "Redaktə", C);
    await $.stmt($.wcall([$t5], "ShowModal", [], C));
  }
  {
    const $t6 = (await $.v(C, "settings"));
    await $.stmt($.wcall([$t6], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAccountTurning", "ActnDelExecute", async function ActnDelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.call(C, "MessageDlg", ["Silinməsinə  əminsinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  {
    const $t7 = (await $.v(C, "settings"));
    await $.stmt($.wcall([$t7], "Delete", [], C));
    await $.stmt($.wcall([$t7], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAccountTurning", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAccountTurning", "ActnEditUpdate", async function ActnEditUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (L0["sender"]);
    await $.wset([$t8], "Enabled", $.gt((await $.mv((await $.wv([$t8], "settings", C, false)), "RecordCount")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAccountTurning", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmAccountTurning", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmAccountTurning", "settingsApplyRecord", async function settingsApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "p_id": 0, "p_parentid": 0, "p_currencyid": 0, "p_accid": 0, "p_branchid": 0};
  await $.fixArgs(L0, ["sender", "action"]);
  {
    const $t9 = (await $.v(C, "settings"));
    await $.wset([$t9], "p_id", (await $.mv((await $.wcall([$t9], "fieldbyname", ["ID"], C)), "AsInteger")), { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true });
    await $.wset([$t9], "p_PARENTID", (await $.mv((await $.wcall([$t9], "fieldbyname", ["PARENTID"], C)), "AsInteger")), { get: async () => L0["p_parentid"], set: async (v) => { L0["p_parentid"] = v; }, local: true });
    await $.wset([$t9], "p_CurrencyID", (await $.mv((await $.wcall([$t9], "fieldbyname", ["CurrencyID"], C)), "AsInteger")), { get: async () => L0["p_currencyid"], set: async (v) => { L0["p_currencyid"] = v; }, local: true });
    await $.wset([$t9], "p_AccID", (await $.mv((await $.wcall([$t9], "fieldbyname", ["AccID"], C)), "AsInteger")), { get: async () => L0["p_accid"], set: async (v) => { L0["p_accid"] = v; }, local: true });
    await $.wset([$t9], "p_branchid", (await $.mv((await $.wcall([$t9], "fieldbyname", ["branchid"], C)), "AsInteger")), { get: async () => L0["p_branchid"], set: async (v) => { L0["p_branchid"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  return U;
}
