// Generated from FrmTranchesAddImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmTranchesAddImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "DBCtrls", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "Buttons", "CMDBSearchEdit", "ComCtrls", "DMprop", "CommonPropImpl", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFrmTranchesAdd", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit1": {"name": "edit1", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("FrmTranchesAdd", null, "TFrmTranchesAdd");
  });
  U.method("TFrmTranchesAdd", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmTranchesAdd", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmTranchesAdd", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMproperties")), "DataSetProp_take")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmTranchesAdd", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "propid": 0, "a": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit3")), "text", (await $.call(C, "floattostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DMproperties")), "DataSetPropIns")), "FieldByName", ["value"])), "asFloat"))])));
  {
    const $t1 = (await $.mv((await $.v(C, "DMproperties")), "DataSetTake"));
    await $.stmt($.wcall([$t1], "close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["propid", (await $.wv([$t1], "propid", { get: async () => L0["propid"], set: async (v) => { L0["propid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1], "open", [], C));
    await $.stmt($.wcall([$t1], "refresh", [], C));
  }
  await $.mset((await $.v(C, "edit1")), "text", (await $.call(C, "floattostr", [$.sub(L0["a"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMproperties")), "DataSetTake")), "FieldByName", ["maind"])), "asFloat")))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTranchesAdd", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "DMproperties"));
    await $.mcall((await $.wv([$t2], "DataSetPropIns", C, false)), "open", []);
    await $.mcall((await $.wv([$t2], "CreditAccs", C, false)), "open", []);
    await $.mcall((await $.wv([$t2], "OracleDataSet1", C, false)), "open", []);
    await $.mset((await $.wv([$t2], "DateTimePicker1", C, false)), "DateTime", (await $.mv((await $.mcall((await $.wv([$t2], "OracleDataSet1", C, false)), "FieldbyName", ["TEK_DAT"])), "asDateTime")));
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTranchesAdd", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "DMproperties"));
    await $.mcall((await $.wv([$t3], "DataSetPropIns", C, false)), "closeall", []);
    await $.mcall((await $.wv([$t3], "CreditAccs", C, false)), "close", []);
    await $.mcall((await $.wv([$t3], "OracleDataSet1", C, false)), "close", []);
    await $.mcall((await $.wv([$t3], "DataSetTake", C, false)), "closeall", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmTranchesAdd", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "propid": 0, "debitaccid": 0, "propcount": 0, "propnumetofcredit": '', "value": 0, "committranche": false, "date": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["rstransactionswillprocessed"] = "Əməliyyatlar ...";
  L0["date"] = (await $.call(C, "FormatDateTime", ["dd-mmm-yyyy", (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "Date"))]))]));
  L0["debitaccid"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"));
  L0["propnumetofcredit"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "ListSource")), "DataSet")), "FieldByName", ["NUMBEROFCREDIT"])), "Asstring"));
  L0["propid"] = (await $.v(C, "Get_SelectedContID"));
  L0["value"] = (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "Edit3")), "text"))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMproperties")), "OraclePackage2")), "CallProcedure", ["AddTranche", ["p_propid", L0["propid"], "p_propnumetofcredit", L0["propnumetofcredit"], "p_Debitaccid", L0["debitaccid"], "p_value", L0["value"], "p_date", L0["date"]]])));
  try {
    L0["committranche"] = (await $.call(C, "TrDelayed_Show", [Self, L0["rstransactionswillprocessed"]]));
    await $.stmt($.call(C, "Update", []));
    if ($.truthy(L0["committranche"])) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMproperties")), "OraclePackage2")), "CallProcedure", ["CommitTranche", ["DoCommit", L0["committranche"]]])));
    } else {
      await $.mcall((await $.mv((await $.mv((await $.v(C, "DMproperties")), "DataSetProp_take")), "Session")), "Rollback", []);
    }
    if ($.truthy(L0["committranche"])) {
      await $.mset(Self, "ModalResult", (await $.v(C, "mrOk")));
    }
    await $.mcall(Self, "Update", []);
  } catch ($t4) {
    $.rethrowControl($t4);
    $.handled($t4);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMproperties")), "OraclePackage2")), "CallProcedure", ["CommitTranche", ["DoCommit", false]])));
    throw $t4;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
