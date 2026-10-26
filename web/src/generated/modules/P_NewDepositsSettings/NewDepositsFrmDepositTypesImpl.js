// Generated from NewDepositsFrmDepositTypesImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsFrmDepositTypesImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ComCtrls", "ToolWin", "ExtCtrls", "ImgList", "Grids", "DBGridEh", "StdCtrls", "Buttons", "Db", "OracleData", "ActnList", "Oracle", "XFSCtrls", "DBGridEhGrouping", "Menus", "GridsEh", "sboapiDataModuleImpl", "NewDepositsFrmAddEditDepositTypesImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TNewDepositsFrmDepositTypes", "TForm", {"actionlist1": {"name": "ActionList1", "type": "TActionList"}, "addtypesforcoll": {"name": "AddTypesForColl", "type": "TOracleDataSet"}, "addtypesforcollid": {"name": "AddTypesForCollID", "type": "TFloatField"}, "addtypesforcollwithdrtype": {"name": "AddTypesForCollWITHDRTYPE", "type": "TWideStringField"}, "addtypesforcollwithdrtypedesc": {"name": "AddTypesForCollWITHDRTYPEDESC", "type": "TWideStringField"}, "addtypesforwith": {"name": "AddTypesForWith", "type": "TOracleDataSet"}, "floatfield1": {"name": "FloatField1", "type": "TFloatField"}, "stringfield3": {"name": "StringField3", "type": "TWideStringField"}, "stringfield4": {"name": "StringField4", "type": "TWideStringField"}, "deposittypes": {"name": "DepositTypes", "type": "TOracleDataSet"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "dm_stored_programs": {"name": "dm_stored_programs", "type": "TOraclePackage"}, "deposittypesdatsrc": {"name": "DepositTypesDatSrc", "type": "TDataSource"}, "addtypesforcolldatsrc": {"name": "AddTypesForcollDatSrc", "type": "TDataSource"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "btncust": {"name": "BtnCust", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "btndelete": {"name": "BtnDelete", "type": "TToolButton"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "closedeptype": {"name": "CloseDepType", "type": "TMenuItem"}, "fadditionaltype": {"name": "FAdditionalType", "type": "String"}, "fwithdrawtype": {"name": "FWithdrawtype", "type": "String"}, "fins": {"name": "FIns", "type": "integer"}, "dtpid": {"name": "Dtpid", "type": "integer"}}, {});
  U.init(async () => {
    U.var_("NewDepositsFrmDepositTypes", null, "TNewDepositsFrmDepositTypes");
  });
  U.method("TNewDepositsFrmDepositTypes", "BtnCustClick", async function BtnCustClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "NewDepositsFrmAddEditDepositTypes"));
    await $.wset([$t1], "FIns", 0, C);
    await $.wset([$t1], "Caption", "Yeni", C);
    await $.stmt($.wcall([$t1], "ShowModal", [], C));
  }
  await $.mcall((await $.v(C, "DepositTypes")), "Refresh", []);
  await $.stmt((await $.mcall((await $.v(C, "DepositTypes")), "Locate", ["id", (await $.v(C, "Dtpid")), []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmDepositTypes", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TNewDepositsFrmDepositTypes", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DepositTypes")), "Open", []);
  await $.mcall((await $.v(C, "AddTypesForColl")), "Open", []);
  await $.mcall((await $.v(C, "AddTypesForWith")), "Open", []);
  await $.set(C, "NewDepositsFrmAddEditDepositTypes", (await $.mcall((await $.v(C, "TNewDepositsFrmAddEditDepositTypes")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmDepositTypes", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DepositTypes")), "CloseAll", []);
  await $.mcall((await $.v(C, "AddTypesForColl")), "CloseAll", []);
  await $.mcall((await $.v(C, "AddTypesForWith")), "CloseAll", []);
  await $.mcall((await $.v(C, "NewDepositsFrmAddEditDepositTypes")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmDepositTypes", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsFrmDepositTypes", "BtnDeleteClick", async function BtnDeleteClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.call(C, "MessageDlg", ["Silinməsinə əminsinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  {
    const $t2 = (await $.v(C, "dm_stored_programs"));
    await $.stmt((await $.wcall([$t2], "CallProcedure", ["DelDepositTypes", [(await $.mv((await $.mcall((await $.wv([$t2], "DepositTypes", C, false)), "FieldByName", ["ID"])), "AsInteger"))]], C)));
  }
  await $.mcall((await $.v(C, "DepositTypes")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmDepositTypes", "CloseDepTypeClick", async function CloseDepTypeClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.mv((await $.mv((await $.v(C, "NewDepositsFrmDepositTypes")), "DBGridEh1")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.set(C, "Dtpid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridEh1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")));
    await $.stmt((await $.mcall((await $.v(C, "dm_stored_programs")), "CallProcedure", ["CloseDepositTypes", [(await $.v(C, "Dtpid"))]])));
  }
  await $.mcall((await $.v(C, "DepositTypes")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmDepositTypes", "ToolButton10Click", async function ToolButton10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.mv((await $.mv((await $.v(C, "NewDepositsFrmDepositTypes")), "DBGridEh1")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.set(C, "Dtpid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridEh1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")));
    {
      const $t3 = (await $.v(C, "NewDepositsFrmAddEditDepositTypes"));
      await $.wset([$t3], "FIns", 1, C);
      await $.wset([$t3], "Caption", "Redaktə", C);
      await $.stmt($.wcall([$t3], "ShowModal", [], C));
    }
    await $.mcall((await $.v(C, "DepositTypes")), "Refresh", []);
    await $.stmt((await $.mcall((await $.v(C, "DepositTypes")), "Locate", ["id", (await $.v(C, "Dtpid")), []])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmDepositTypes", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DepositTypes")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
