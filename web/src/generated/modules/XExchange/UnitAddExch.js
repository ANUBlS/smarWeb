// Generated from UnitAddExch.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitAddExch", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "Buttons", "StdCtrls", "DBCtrls", "UnitDateExch", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormAddExch", "TForm", {"panelmain": {"name": "PanelMain", "type": "TPanel"}, "edit_ex_no": {"name": "Edit_ex_no", "type": "TEdit"}, "edit_ex_name": {"name": "Edit_ex_name", "type": "TEdit"}, "edit_ex_address": {"name": "Edit_ex_address", "type": "TEdit"}, "spbtnabort": {"name": "SpBtnAbort", "type": "TSpeedButton"}, "spbtnok": {"name": "SpBtnOk", "type": "TSpeedButton"}, "label_ex_no": {"name": "Label_ex_no", "type": "TLabel"}, "label_ex_name": {"name": "Label_ex_name", "type": "TLabel"}, "label_ex_addres": {"name": "Label_ex_addres", "type": "TLabel"}, "label_ex_worker_name": {"name": "Label_ex_worker_name", "type": "TLabel"}, "edit_ex_worker_name": {"name": "Edit_ex_worker_name", "type": "TEdit"}, "edit_ex_check_no": {"name": "Edit_ex_check_no", "type": "TEdit"}, "label_ex_check_no": {"name": "Label_ex_check_no", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "label1": {"name": "Label1", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("FormAddExch", null, "TFormAddExch");
    U.var_("T", 0, "integer");
    U.var_("v_ex_no", 0, "integer");
    U.var_("v_ex_name", '', "String");
    U.var_("v_ex_address", '', "String");
    U.var_("v_ex_worker_name", '', "String");
    U.var_("v_ex_check_no", '', "String");
    U.var_("v_filial", 0, "integer");
  });
  U.method("TFormAddExch", "SpBtnAbortClick", async function SpBtnAbortClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddExch", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit_ex_address")), "Text", "");
  await $.mset((await $.v(C, "Edit_ex_check_no")), "Text", "");
  await $.mset((await $.v(C, "Edit_ex_name")), "Text", "");
  await $.mset((await $.v(C, "Edit_ex_no")), "Text", "");
  await $.mset((await $.v(C, "Edit_ex_worker_name")), "Text", "");
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSFilial")), "FieldByName", ["Id"])), "AsInteger")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddExch", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddExch", "Edit_ex_noKeyPress", async function Edit_ex_noKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ",", ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormAddExch", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormAddExch", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "Edit_ex_no")), "CanFocus")))) {
    await $.mcall((await $.v(C, "Edit_ex_no")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddExch", "SpBtnOkClick", async function SpBtnOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "v_ex_no", (await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "Edit_ex_no")), "Text"))])));
  await $.set(C, "v_ex_name", (await $.mv((await $.v(C, "Edit_ex_name")), "Text")));
  await $.set(C, "v_ex_address", (await $.mv((await $.v(C, "Edit_ex_address")), "Text")));
  await $.set(C, "v_ex_worker_name", (await $.mv((await $.v(C, "Edit_ex_worker_name")), "Text")));
  await $.set(C, "v_ex_check_no", (await $.mv((await $.v(C, "Edit_ex_check_no")), "Text")));
  await $.set(C, "v_filial", (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")));
  if ($.truthy((await $.or_(($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "Edit_ex_no")), "Text"))])), "0")), async () => ($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "Edit_ex_no")), "Text"))])), "")))))) {
    {
      const $t1 = (await $.v(C, "DataModExch"));
      const $t2 = (await $.mv((await $.wv([$t1], "DataModExch", C, false)), "OPExchMgr"));
      await $.wset([$t1, $t2], "T", (await $.wcall([$t1, $t2], "CallIntegerFunction", ["ex_office_add", [(await $.wv([$t1, $t2], "v_ex_no", C, false)), (await $.wv([$t1, $t2], "v_ex_name", C, false)), (await $.wv([$t1, $t2], "v_ex_address", C, false)), (await $.wv([$t1, $t2], "v_ex_worker_name", C, false)), (await $.wv([$t1, $t2], "v_ex_check_no", C, false)), (await $.wv([$t1, $t2], "v_filial", C, false))]], C)), C);
      await $.mcall((await $.wv([$t1, $t2], "ODSExchOffice", C, false)), "Refresh", []);
    }
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddExch", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy(($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  return U;
}
