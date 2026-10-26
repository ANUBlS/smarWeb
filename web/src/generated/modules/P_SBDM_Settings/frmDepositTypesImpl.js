// Generated from frmDepositTypesImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmDepositTypesImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "ComCtrls", "ToolWin", "ExtCtrls", "ImgList", "Grids", "DBGridEh", "NLSLocalizer", "StdCtrls", "Buttons", "Db", "OracleData", "ActnList", "Oracle", "sboapiDataModuleImpl", "frmAddEditDepositTypesImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TfrmDepositTypes", "TForm", {"imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "deposittypes": {"name": "DepositTypes", "type": "TOracleDataSet"}, "deposittypesdatsrc": {"name": "DepositTypesDatSrc", "type": "TDataSource"}, "deposittypesid": {"name": "DepositTypesID", "type": "TFloatField"}, "deposittypestype": {"name": "DepositTypesTYPE", "type": "twidestringfield"}, "deposittypesadditionaltype": {"name": "DepositTypesADDITIONALTYPE", "type": "twidestringfield"}, "deposittypeswithdrawtype": {"name": "DepositTypesWITHDRAWTYPE", "type": "twidestringfield"}, "deposittypesdateinterval": {"name": "DepositTypesDATEINTERVAL", "type": "TIntegerField"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "addtypesforcoll": {"name": "AddTypesForColl", "type": "TOracleDataSet"}, "addtypesforcolldatsrc": {"name": "AddTypesForcollDatSrc", "type": "TDataSource"}, "addtypesforcollid": {"name": "AddTypesForCollID", "type": "TFloatField"}, "addtypesforcolladdtypename": {"name": "AddTypesForCollADDTYPENAME", "type": "twidestringfield"}, "addtypesforcolladdtypedesc": {"name": "AddTypesForCollADDTYPEDESC", "type": "twidestringfield"}, "addtypesforcollwithdrtype": {"name": "AddTypesForCollWITHDRTYPE", "type": "twidestringfield"}, "addtypesforcollwithdrtypedesc": {"name": "AddTypesForCollWITHDRTYPEDESC", "type": "twidestringfield"}, "addtypesforwith": {"name": "AddTypesForWith", "type": "TOracleDataSet"}, "floatfield1": {"name": "FloatField1", "type": "TFloatField"}, "stringfield1": {"name": "StringField1", "type": "twidestringfield"}, "stringfield2": {"name": "StringField2", "type": "twidestringfield"}, "stringfield3": {"name": "StringField3", "type": "twidestringfield"}, "stringfield4": {"name": "StringField4", "type": "twidestringfield"}, "addtypesforwithdatsrc": {"name": "AddTypesForWithDatSrc", "type": "TDataSource"}, "sbcm_rpdepository": {"name": "SBCM_RPDEPOSITORY", "type": "TOraclePackage"}, "fadditionaltype": {"name": "FAdditionalType", "type": "String"}, "fwithdrawtype": {"name": "FWithdrawtype", "type": "String"}}, {});
  U.init(async () => {
    U.var_("frmDepositTypes", null, "TfrmDepositTypes");
  });
  U.method("TfrmDepositTypes", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmDepositTypes", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmDepositTypes", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DepositTypes")), "Open", []);
  await $.mcall((await $.v(C, "AddTypesForColl")), "Open", []);
  await $.mcall((await $.v(C, "AddTypesForWith")), "Open", []);
  await $.set(C, "frmAddEditDepositTypes", (await $.mcall((await $.v(C, "TfrmAddEditDepositTypes")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositTypes", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DepositTypes")), "CloseAll", []);
  await $.mcall((await $.v(C, "AddTypesForColl")), "CloseAll", []);
  await $.mcall((await $.v(C, "AddTypesForWith")), "CloseAll", []);
  await $.mcall((await $.v(C, "frmAddEditDepositTypes")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositTypes", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DepositTypes")), "Insert", []);
  {
    const $t1 = (await $.v(C, "frmAddEditDepositTypes"));
    await $.wset([$t1], "Caption", "Yeni", C);
    await $.stmt($.wcall([$t1], "ShowModal", [], C));
  }
  await $.mcall((await $.v(C, "DepositTypes")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositTypes", "DepositTypesApplyRecord", async function DepositTypesApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "deptype": '', "dateint": 0, "depid": 0};
  await $.fixArgs(L0, ["sender", "action"]);
  {
    const $t2 = (L0["sender"]);
    await $.wset([$t2], "DepType", (await $.mv((await $.wcall([$t2], "FieldByName", ["type"], C)), "AsString")), { get: async () => L0["deptype"], set: async (v) => { L0["deptype"] = v; }, local: true });
    await $.wset([$t2], "DateInt", (await $.mv((await $.wcall([$t2], "FieldByName", ["DateInterval"], C)), "AsInteger")), { get: async () => L0["dateint"], set: async (v) => { L0["dateint"] = v; }, local: true });
    await $.wset([$t2], "DepID", (await $.mv((await $.wcall([$t2], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["depid"], set: async (v) => { L0["depid"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TfrmDepositTypes", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.call(C, "MessageDlg", ["Silinməsinə  əminsinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  {
    const $t3 = (await $.v(C, "SBCM_RPDEPOSITORY"));
    await $.stmt((await $.wcall([$t3], "CallProcedure", ["delDepositTypes", [(await $.mv((await $.mcall((await $.wv([$t3], "DepositTypes", C, false)), "FieldByName", ["ID"])), "AsInteger"))]], C)));
  }
  await $.mcall((await $.v(C, "DepositTypes")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositTypes", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DepositTypes")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositTypes", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "frmAddEditDepositTypes"));
    const $t5 = (await $.wv([$t4], "DepositTypes", C, false));
    await $.mset((await $.wv([$t4, $t5], "DBLookupComboboxEh1", C, false)), "KeyValue", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["additionaltype"], C)), "AsString")));
    await $.mset((await $.wv([$t4, $t5], "DBLookupComboboxEh2", C, false)), "KeyValue", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["withdrawtype"], C)), "AsString")));
    await $.stmt($.wcall([$t4, $t5], "Edit", [], C));
  }
  {
    const $t6 = (await $.v(C, "frmAddEditDepositTypes"));
    await $.wset([$t6], "Caption", "Redaktə", C);
    await $.stmt($.wcall([$t6], "ShowModal", [], C));
  }
  await $.mcall((await $.v(C, "DepositTypes")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
