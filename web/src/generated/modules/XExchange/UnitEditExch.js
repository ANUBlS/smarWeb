// Generated from UnitEditExch.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitEditExch", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ExtCtrls", "Oracle", "DBCtrls", "UnitDateExch", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormEditExch", "TForm", {"panelmain": {"name": "PanelMain", "type": "TPanel"}, "spbtnabort": {"name": "SpBtnAbort", "type": "TSpeedButton"}, "spbtnok": {"name": "SpBtnOk", "type": "TSpeedButton"}, "label_ex_no": {"name": "Label_ex_no", "type": "TLabel"}, "label_ex_name": {"name": "Label_ex_name", "type": "TLabel"}, "label_ex_addres": {"name": "Label_ex_addres", "type": "TLabel"}, "label_ex_worker_name": {"name": "Label_ex_worker_name", "type": "TLabel"}, "label_ex_check_no": {"name": "Label_ex_check_no", "type": "TLabel"}, "edit_ex_no": {"name": "Edit_ex_no", "type": "TEdit"}, "edit_ex_name": {"name": "Edit_ex_name", "type": "TEdit"}, "edit_ex_address": {"name": "Edit_ex_address", "type": "TEdit"}, "edit_ex_worker_name": {"name": "Edit_ex_worker_name", "type": "TEdit"}, "edit_ex_check_no": {"name": "Edit_ex_check_no", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}}, {});
  U.init(async () => {
    U.var_("FormEditExch", null, "TFormEditExch");
    U.var_("v_id", 0, "integer");
    U.var_("v_ex_no", 0, "integer");
    U.var_("v_ex_name", '', "String");
    U.var_("v_ex_address", '', "String");
    U.var_("v_ex_worker_name", '', "String");
    U.var_("v_ex_check_no", '', "String");
    U.var_("v_filial", 0, "integer");
  });
  U.method("TFormEditExch", "Edit_ex_noKeyPress", async function Edit_ex_noKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormEditExch", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DataModExch"));
    const $t2 = (await $.mv((await $.wv([$t1], "DataModExch", C, false)), "OPExchMgr"));
    await $.wset([$t1, $t2], "v_id", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "ODSExchOffice", C, false)), "FieldByName", ["id"])), "AsInteger")), C);
    await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["get_ex_office_out_params", [(await $.wv([$t1, $t2], "v_id", C, false)), (await $.wv([$t1, $t2], "parInteger", C, false)), (await $.wv([$t1, $t2], "parString", C, false)), (await $.wv([$t1, $t2], "parString", C, false)), (await $.wv([$t1, $t2], "parString", C, false)), (await $.wv([$t1, $t2], "parString", C, false)), (await $.wv([$t1, $t2], "parinteger", C, false))]], C)));
    await $.wset([$t1, $t2], "v_ex_no", (await $.wcall([$t1, $t2], "GetParameter", [1], C)), C);
    await $.wset([$t1, $t2], "v_ex_name", (await $.wcall([$t1, $t2], "GetParameter", [2], C)), C);
    await $.wset([$t1, $t2], "v_ex_address", (await $.wcall([$t1, $t2], "GetParameter", [3], C)), C);
    await $.wset([$t1, $t2], "v_ex_worker_name", (await $.wcall([$t1, $t2], "GetParameter", [4], C)), C);
    await $.wset([$t1, $t2], "v_ex_check_no", (await $.wcall([$t1, $t2], "GetParameter", [5], C)), C);
    await $.wset([$t1, $t2], "v_filial", (await $.wcall([$t1, $t2], "GetParameter", [6], C)), C);
  }
  await $.mset((await $.v(C, "Edit_ex_no")), "Text", (await $.call(C, "IntToStr", [(await $.v(C, "v_ex_no"))])));
  await $.mset((await $.v(C, "Edit_ex_name")), "Text", (await $.v(C, "v_ex_name")));
  await $.mset((await $.v(C, "Edit_ex_address")), "Text", (await $.v(C, "v_ex_address")));
  await $.mset((await $.v(C, "Edit_ex_worker_name")), "Text", (await $.v(C, "v_ex_worker_name")));
  await $.mset((await $.v(C, "Edit_ex_check_no")), "Text", (await $.v(C, "v_ex_check_no")));
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (await $.v(C, "v_filial")));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormEditExch", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormEditExch", "SpBtnOkClick", async function SpBtnOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "v_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSExchOffice")), "FieldByName", ["id"])), "AsInteger")));
  await $.set(C, "v_ex_no", (await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "Edit_ex_no")), "Text"))])));
  await $.set(C, "v_ex_name", (await $.mv((await $.v(C, "Edit_ex_name")), "Text")));
  await $.set(C, "v_ex_address", (await $.mv((await $.v(C, "Edit_ex_address")), "Text")));
  await $.set(C, "v_ex_worker_name", (await $.mv((await $.v(C, "Edit_ex_worker_name")), "Text")));
  await $.set(C, "v_ex_check_no", (await $.mv((await $.v(C, "Edit_ex_check_no")), "Text")));
  await $.set(C, "v_filial", (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")));
  if ($.truthy((await $.or_(($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "Edit_ex_no")), "Text"))])), "0")), async () => ($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "Edit_ex_no")), "Text"))])), "")))))) {
    {
      const $t3 = (await $.v(C, "DataModExch"));
      const $t4 = (await $.mv((await $.wv([$t3], "DataModExch", C, false)), "OPExchMgr"));
      await $.stmt((await $.wcall([$t3, $t4], "CallProcedure", ["ex_office_edit", [(await $.wv([$t3, $t4], "v_id", C, false)), (await $.wv([$t3, $t4], "v_ex_no", C, false)), (await $.wv([$t3, $t4], "v_ex_name", C, false)), (await $.wv([$t3, $t4], "v_ex_address", C, false)), (await $.wv([$t3, $t4], "v_ex_worker_name", C, false)), (await $.wv([$t3, $t4], "v_ex_check_no", C, false)), (await $.wv([$t3, $t4], "v_filial", C, false))]], C)));
      await $.mcall((await $.wv([$t3, $t4], "ODSExchOffice", C, false)), "Refresh", []);
    }
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormEditExch", "SpBtnAbortClick", async function SpBtnAbortClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
