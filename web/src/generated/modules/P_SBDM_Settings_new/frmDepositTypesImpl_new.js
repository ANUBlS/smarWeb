// Generated from frmDepositTypesImpl_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmDepositTypesImpl_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "ComCtrls", "ToolWin", "ExtCtrls", "ImgList", "Grids", "DBGridEh", "NLSLocalizer", "StdCtrls", "Buttons", "Db", "OracleData", "ActnList", "Oracle", "sboapiDataModuleImpl", "frmAddEditDepositTypesImpl_new", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TfrmDepositTypes_new", "TForm", {"actionlist1": {"name": "ActionList1", "type": "TActionList"}, "addtypesforcoll": {"name": "AddTypesForColl", "type": "TOracleDataSet"}, "addtypesforcollid": {"name": "AddTypesForCollID", "type": "TFloatField"}, "addtypesforcolladdtypename": {"name": "AddTypesForCollADDTYPENAME", "type": "TWideStringField"}, "addtypesforcolladdtypedesc": {"name": "AddTypesForCollADDTYPEDESC", "type": "TWideStringField"}, "addtypesforcollwithdrtype": {"name": "AddTypesForCollWITHDRTYPE", "type": "TWideStringField"}, "addtypesforcollwithdrtypedesc": {"name": "AddTypesForCollWITHDRTYPEDESC", "type": "TWideStringField"}, "addtypesforwith": {"name": "AddTypesForWith", "type": "TOracleDataSet"}, "floatfield1": {"name": "FloatField1", "type": "TFloatField"}, "stringfield1": {"name": "StringField1", "type": "TWideStringField"}, "stringfield2": {"name": "StringField2", "type": "TWideStringField"}, "stringfield3": {"name": "StringField3", "type": "TWideStringField"}, "stringfield4": {"name": "StringField4", "type": "TWideStringField"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "deposittypes": {"name": "DepositTypes", "type": "TOracleDataSet"}, "deposittypesid": {"name": "DepositTypesID", "type": "TFloatField"}, "deposittypestype": {"name": "DepositTypesTYPE", "type": "TWideStringField"}, "deposittypesadditionaltype": {"name": "DepositTypesADDITIONALTYPE", "type": "TWideStringField"}, "deposittypeswithdrawtype": {"name": "DepositTypesWITHDRAWTYPE", "type": "TWideStringField"}, "deposittypesdateinterval": {"name": "DepositTypesDATEINTERVAL", "type": "TIntegerField"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "sbcm_rpdepository": {"name": "SBCM_RPDEPOSITORY", "type": "TOraclePackage"}, "deposittypesdatsrc": {"name": "DepositTypesDatSrc", "type": "TDataSource"}, "addtypesforcolldatsrc": {"name": "AddTypesForcollDatSrc", "type": "TDataSource"}, "addtypesforwithdatsrc": {"name": "AddTypesForWithDatSrc", "type": "TDataSource"}, "deposittypespercent_rule": {"name": "DepositTypesPERCENT_RULE", "type": "TFloatField"}, "deposittypesamount_rule": {"name": "DepositTypesAMOUNT_RULE", "type": "TFloatField"}, "fadditionaltype": {"name": "FAdditionalType", "type": "String"}, "fwithdrawtype": {"name": "FWithdrawtype", "type": "String"}}, {});
  U.init(async () => {
    U.var_("frmDepositTypes_new", null, "TfrmDepositTypes_new");
  });
  U.method("TfrmDepositTypes_new", "DepositTypesApplyRecord", async function DepositTypesApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "deptype": '', "dateint": 0, "depid": 0};
  await $.fixArgs(L0, ["sender", "action"]);
  {
    const $t1 = (L0["sender"]);
    await $.wset([$t1], "DepType", (await $.mv((await $.wcall([$t1], "FieldByName", ["type"], C)), "AsString")), { get: async () => L0["deptype"], set: async (v) => { L0["deptype"] = v; }, local: true });
    await $.wset([$t1], "DateInt", (await $.mv((await $.wcall([$t1], "FieldByName", ["DateInterval"], C)), "AsInteger")), { get: async () => L0["dateint"], set: async (v) => { L0["dateint"] = v; }, local: true });
    await $.wset([$t1], "DepID", (await $.mv((await $.wcall([$t1], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["depid"], set: async (v) => { L0["depid"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TfrmDepositTypes_new", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmDepositTypes_new", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DepositTypes")), "Open", []);
  await $.mcall((await $.v(C, "AddTypesForColl")), "Open", []);
  await $.mcall((await $.v(C, "AddTypesForWith")), "Open", []);
  await $.set(C, "frmAddEditDepositTypes_new", (await $.mcall((await $.v(C, "TfrmAddEditDepositTypes_new")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositTypes_new", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DepositTypes")), "CloseAll", []);
  await $.mcall((await $.v(C, "AddTypesForColl")), "CloseAll", []);
  await $.mcall((await $.v(C, "AddTypesForWith")), "CloseAll", []);
  await $.mcall((await $.v(C, "frmAddEditDepositTypes_new")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositTypes_new", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmDepositTypes_new", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DepositTypes")), "Insert", []);
  {
    const $t2 = (await $.v(C, "frmAddEditDepositTypes_new"));
    await $.wset([$t2], "Caption", "Yeni", C);
    await $.mset((await $.mv((await $.wv([$t2], "frmAddEditDepositTypes_new", C, false)), "CheckBox1")), "Checked", (await $.wv([$t2], "false", C, false)));
    await $.mset((await $.mv((await $.wv([$t2], "frmAddEditDepositTypes_new", C, false)), "CheckBox2")), "Checked", (await $.wv([$t2], "false", C, false)));
    await $.stmt($.wcall([$t2], "ShowModal", [], C));
  }
  await $.mcall((await $.v(C, "DepositTypes")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositTypes_new", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "frmAddEditDepositTypes_new"));
    const $t4 = (await $.wv([$t3], "DepositTypes", C, false));
    await $.mset((await $.wv([$t3, $t4], "DBLookupComboboxEh2", C, false)), "KeyValue", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["withdrawtype"], C)), "AsString")));
    if ($.truthy($.eq((await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["PERCENT_RULE"], C)), "AsInteger")), 0))) {
      await $.mset((await $.wv([$t3, $t4], "CheckBox1", C, false)), "Checked", (await $.wv([$t3, $t4], "false", C, false)));
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["PERCENT_RULE"], C)), "AsInteger")), 1))) {
      await $.mset((await $.wv([$t3, $t4], "CheckBox1", C, false)), "Checked", (await $.wv([$t3, $t4], "true", C, false)));
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["AMOUNT_RULE"], C)), "AsInteger")), 0))) {
      await $.mset((await $.wv([$t3, $t4], "CheckBox2", C, false)), "Checked", (await $.wv([$t3, $t4], "false", C, false)));
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["AMOUNT_RULE"], C)), "AsInteger")), 1))) {
      await $.mset((await $.wv([$t3, $t4], "CheckBox2", C, false)), "Checked", (await $.wv([$t3, $t4], "true", C, false)));
    }
    await $.stmt($.wcall([$t3, $t4], "Edit", [], C));
  }
  {
    const $t5 = (await $.v(C, "frmAddEditDepositTypes_new"));
    await $.wset([$t5], "Caption", "Redaktə", C);
    await $.stmt($.wcall([$t5], "ShowModal", [], C));
  }
  await $.mcall((await $.v(C, "DepositTypes")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositTypes_new", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.call(C, "MessageDlg", ["Silinməsinə əminsinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  {
    const $t6 = (await $.v(C, "SBCM_RPDEPOSITORY"));
    await $.stmt((await $.wcall([$t6], "CallProcedure", ["delDepositTypes", [(await $.mv((await $.mcall((await $.wv([$t6], "DepositTypes", C, false)), "FieldByName", ["ID"])), "AsInteger"))]], C)));
  }
  await $.mcall((await $.v(C, "DepositTypes")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmDepositTypes_new", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DepositTypes")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
