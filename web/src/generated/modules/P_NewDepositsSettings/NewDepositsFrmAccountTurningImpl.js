// Generated from NewDepositsFrmAccountTurningImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsFrmAccountTurningImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ComCtrls", "ToolWin", "ExtCtrls", "ImgList", "Grids", "DBGridEh", "Db", "OracleData", "Oracle", "ActnList", "XDBGrids", "XFSCtrls", "sboapiDataModuleImpl", "NewDepositsFrmAddEditAccTurningImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TNewDepositsFrmAccountTurning", "TForm", {"dm_rpdepository": {"name": "DM_RPDEPOSITORY", "type": "TOraclePackage"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnadd": {"name": "ActnAdd", "type": "TAction"}, "actnedit": {"name": "ActnEdit", "type": "TAction"}, "actndel": {"name": "ActnDel", "type": "TAction"}, "settings": {"name": "settings", "type": "TOracleDataSet"}, "settingsdatsrc": {"name": "settingsDatSrc", "type": "TDataSource"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "btncust": {"name": "BtnCust", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "köçermeler": {"name": "Köçermeler", "type": "TToolButton"}, "əməliyyat": {"name": "Əməliyyat", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "məhsullar": {"name": "Məhsullar", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "settingsid": {"name": "settingsID", "type": "TFloatField"}, "settingsparentid": {"name": "settingsPARENTID", "type": "TFloatField"}, "settingscurrencyid": {"name": "settingsCURRENCYID", "type": "TFloatField"}, "settingsaccid": {"name": "settingsACCID", "type": "TFloatField"}, "settingsbranchid": {"name": "settingsBRANCHID", "type": "TFloatField"}, "settingscategory": {"name": "settingsCATEGORY", "type": "TWideStringField"}, "settingsvalname": {"name": "settingsVALNAME", "type": "TWideStringField"}, "settingsaccno": {"name": "settingsACCNO", "type": "TWideStringField"}, "settingsfilial": {"name": "settingsFILIAL", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("NewDepositsFrmAccountTurning", null, "TNewDepositsFrmAccountTurning");
  });
  U.method("TNewDepositsFrmAccountTurning", "ActnAddExecute", async function ActnAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "NewDepositsFrmAddEditAccTurning"));
    await $.wset([$t1], "Caption", "Yeni", C);
    await $.stmt($.wcall([$t1], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAccountTurning", "ActnDelExecute", async function ActnDelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.call(C, "MessageDlg", ["Silinməsinə əminsinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "DM_RPDEPOSITORY")), "CallProcedure", ["DelSettings", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))]])));
  await $.mcall((await $.v(C, "settings")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAccountTurning", "ActnDelUpdate", async function ActnDelUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (L0["sender"]);
    await $.wset([$t2], "Enabled", $.gt((await $.mv((await $.wv([$t2], "settings", C, false)), "RecordCount")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAccountTurning", "ActnEditExecute", async function ActnEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "NewDepositsFrmAddEditAccTurning"));
    await $.wset([$t3], "Caption", "Redaktə", C);
    await $.stmt($.wcall([$t3], "ShowModal", [], C));
  }
  {
    const $t4 = (await $.v(C, "settings"));
    await $.stmt($.wcall([$t4], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAccountTurning", "ActnEditUpdate", async function ActnEditUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (L0["sender"]);
    await $.wset([$t5], "Enabled", $.gt((await $.mv((await $.wv([$t5], "settings", C, false)), "RecordCount")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAccountTurning", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TNewDepositsFrmAccountTurning", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "settings")), "Open", []);
  await $.set(C, "NewDepositsFrmAddEditAccTurning", (await $.mcall((await $.v(C, "TNewDepositsFrmAddEditAccTurning")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAccountTurning", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "settings")), "CloseAll", []);
  await $.mcall((await $.v(C, "NewDepositsFrmAddEditAccTurning")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAccountTurning", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsFrmAccountTurning", "MəhsullarClick", async function MəhsullarClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAccountTurning", "ƏməliyyatClick", async function ƏməliyyatClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "settings")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
