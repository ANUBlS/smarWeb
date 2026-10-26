// Generated from frmAccountTurningImpl_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmAccountTurningImpl_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "ComCtrls", "ToolWin", "ExtCtrls", "ImgList", "Grids", "DBGridEh", "Db", "OracleData", "Oracle", "ActnList", "sboapiDataModuleImpl", "frmAddEditAccTurningImpl_new", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TfrmAccountTurning_new", "TForm", {"panel2": {"name": "Panel2", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dbgrideh3": {"name": "DBGridEh3", "type": "TDBGridEh"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "sbcm_ds": {"name": "sbcm_ds", "type": "TOraclePackage"}, "categories": {"name": "Categories", "type": "TOracleDataSet"}, "categoriesid": {"name": "CategoriesID", "type": "TFloatField"}, "categoriescategory": {"name": "CategoriesCATEGORY", "type": "TWideStringField"}, "categoriesdatsrc": {"name": "CategoriesDatSrc", "type": "TDataSource"}, "accounts": {"name": "Accounts", "type": "TOracleDataSet"}, "accountsid": {"name": "AccountsID", "type": "TFloatField"}, "accountsacc_no": {"name": "AccountsACC_NO", "type": "TWideStringField"}, "accountsname": {"name": "AccountsNAME", "type": "TWideStringField"}, "accountsval_acc": {"name": "AccountsVAL_ACC", "type": "TIntegerField"}, "accountsdatsrc": {"name": "AccountsDatSrc", "type": "TDataSource"}, "filials": {"name": "Filials", "type": "TOracleDataSet"}, "filialsid": {"name": "FilialsID", "type": "TFloatField"}, "filialsname": {"name": "FilialsNAME", "type": "TWideStringField"}, "filialsdatsrc": {"name": "FilialsDatSrc", "type": "TDataSource"}, "valute": {"name": "valute", "type": "TOracleDataSet"}, "valutevalute": {"name": "valuteVALUTE", "type": "TIntegerField"}, "valuteval_name": {"name": "valuteVAL_NAME", "type": "TWideStringField"}, "valutevalu_name": {"name": "valuteVALU_NAME", "type": "TWideStringField"}, "valutesdatsrc": {"name": "ValutesDatSrc", "type": "TDataSource"}, "movie_names": {"name": "movie_names", "type": "TOracleDataSet"}, "movie_namesid": {"name": "movie_namesID", "type": "TIntegerField"}, "movie_namestypeid": {"name": "movie_namesTYPEID", "type": "TIntegerField"}, "movie_namesdescription": {"name": "movie_namesDESCRIPTION", "type": "TWideStringField"}, "movie_namesdatsrc": {"name": "movie_namesDatSrc", "type": "TDataSource"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnadd": {"name": "ActnAdd", "type": "TAction"}, "actnedit": {"name": "ActnEdit", "type": "TAction"}, "actndel": {"name": "ActnDel", "type": "TAction"}, "settings": {"name": "settings", "type": "TOracleDataSet"}, "settingsid": {"name": "settingsID", "type": "TFloatField"}, "settingsparentid": {"name": "settingsPARENTID", "type": "TFloatField"}, "settingscurrencyid": {"name": "settingsCURRENCYID", "type": "TFloatField"}, "settingsaccid": {"name": "settingsACCID", "type": "TFloatField"}, "settingsbranchid": {"name": "settingsBRANCHID", "type": "TFloatField"}, "settingsfilialname": {"name": "settingsfilialname", "type": "TWideStringField"}, "settingscurrencyname": {"name": "settingscurrencyname", "type": "TWideStringField"}, "settingsaccountnumber": {"name": "settingsaccountnumber", "type": "TWideStringField"}, "settingsdatsrc": {"name": "settingsDatSrc", "type": "TDataSource"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}}, {});
  U.init(async () => {
    U.var_("frmAccountTurning_new", null, "TfrmAccountTurning_new");
  });
  U.method("TfrmAccountTurning_new", "ActnAddExecute", async function ActnAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "settings"));
    await $.stmt($.wcall([$t1], "Insert", [], C));
  }
  {
    const $t2 = (await $.v(C, "frmAddEditAccTurning_new"));
    await $.wset([$t2], "Caption", "Yeni", C);
    await $.stmt($.wcall([$t2], "ShowModal", [], C));
  }
  {
    const $t3 = (await $.v(C, "settings"));
    await $.stmt($.wcall([$t3], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAccountTurning_new", "ActnDelExecute", async function ActnDelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.call(C, "MessageDlg", ["Silinməsinə əminsinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  {
    const $t4 = (await $.v(C, "settings"));
    await $.stmt($.wcall([$t4], "Delete", [], C));
    await $.stmt($.wcall([$t4], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAccountTurning_new", "ActnDelUpdate", async function ActnDelUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (L0["sender"]);
    await $.wset([$t5], "Enabled", $.gt((await $.mv((await $.wv([$t5], "settings", C, false)), "RecordCount")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAccountTurning_new", "ActnEditExecute", async function ActnEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "settings"));
    await $.stmt($.wcall([$t6], "Edit", [], C));
  }
  {
    const $t7 = (await $.v(C, "frmAddEditAccTurning_new"));
    await $.wset([$t7], "Caption", "Redaktə", C);
    await $.stmt($.wcall([$t7], "ShowModal", [], C));
  }
  {
    const $t8 = (await $.v(C, "settings"));
    await $.stmt($.wcall([$t8], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAccountTurning_new", "ActnEditUpdate", async function ActnEditUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (L0["sender"]);
    await $.wset([$t9], "Enabled", $.gt((await $.mv((await $.wv([$t9], "settings", C, false)), "RecordCount")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAccountTurning_new", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmAccountTurning_new", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Categories")), "Open", []);
  await $.mcall((await $.v(C, "Accounts")), "Open", []);
  await $.mcall((await $.v(C, "Filials")), "Open", []);
  await $.mcall((await $.v(C, "Valute")), "Open", []);
  await $.mcall((await $.v(C, "movie_names")), "Open", []);
  await $.mcall((await $.v(C, "settings")), "Open", []);
  await $.set(C, "frmAddEditAccTurning_new", (await $.mcall((await $.v(C, "TfrmAddEditAccTurning_new")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAccountTurning_new", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Categories")), "CloseAll", []);
  await $.mcall((await $.v(C, "Accounts")), "CloseAll", []);
  await $.mcall((await $.v(C, "Filials")), "CloseAll", []);
  await $.mcall((await $.v(C, "Valute")), "CloseAll", []);
  await $.mcall((await $.v(C, "movie_names")), "CloseAll", []);
  await $.mcall((await $.v(C, "settings")), "CloseAll", []);
  await $.mcall((await $.v(C, "frmAddEditAccTurning_new")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAccountTurning_new", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmAccountTurning_new", "settingsApplyRecord", async function settingsApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "p_id": 0, "p_parentid": 0, "p_currencyid": 0, "p_accid": 0, "p_branchid": 0};
  await $.fixArgs(L0, ["sender", "action"]);
  {
    const $t10 = (await $.v(C, "settings"));
    await $.wset([$t10], "p_id", (await $.mv((await $.wcall([$t10], "fieldbyname", ["ID"], C)), "AsInteger")), { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true });
    await $.wset([$t10], "p_PARENTID", (await $.mv((await $.wcall([$t10], "fieldbyname", ["PARENTID"], C)), "AsInteger")), { get: async () => L0["p_parentid"], set: async (v) => { L0["p_parentid"] = v; }, local: true });
    await $.wset([$t10], "p_CurrencyID", (await $.mv((await $.wcall([$t10], "fieldbyname", ["CurrencyID"], C)), "AsInteger")), { get: async () => L0["p_currencyid"], set: async (v) => { L0["p_currencyid"] = v; }, local: true });
    await $.wset([$t10], "p_AccID", (await $.mv((await $.wcall([$t10], "fieldbyname", ["AccID"], C)), "AsInteger")), { get: async () => L0["p_accid"], set: async (v) => { L0["p_accid"] = v; }, local: true });
    await $.wset([$t10], "p_branchid", (await $.mv((await $.wcall([$t10], "fieldbyname", ["branchid"], C)), "AsInteger")), { get: async () => L0["p_branchid"], set: async (v) => { L0["p_branchid"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TfrmAccountTurning_new", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAccountTurning_new", "ToolButton8Click", async function ToolButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Categories")), "Refresh", []);
  await $.mcall((await $.v(C, "Accounts")), "Refresh", []);
  await $.mcall((await $.v(C, "movie_names")), "Refresh", []);
  await $.mcall((await $.v(C, "settings")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
