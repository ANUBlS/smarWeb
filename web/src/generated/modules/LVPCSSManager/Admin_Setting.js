// Generated from Admin_Setting.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Admin_Setting", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "ExtCtrls", "DBGridEh", "StdCtrls", "Data_Unit"]);
  const C = [U];
  U.defClass("TForm_Admin_Setting", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgeh_admin_setting": {"name": "DBGEh_Admin_Setting", "type": "TDBGridEh"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}}, {});
  U.init(async () => {
    U.var_("Form_Admin_Setting", null, "TForm_Admin_Setting");
  });
  U.method("TForm_Admin_Setting", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "DataMod")), "ODS_Admin_Setting")), "Active", false);
  await $.mset((await $.mv((await $.v(C, "DataMod")), "ODS_Ad_Sett_Fili")), "Active", false);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TForm_Admin_Setting", "DBGridEh1DblClick", async function DBGridEh1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_Admin_in_Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Admin_Setting")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Ad_Sett_Fili")), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Admin_Setting")), "FieldByName", ["NAME"])), "AsString")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Ad_Sett_Fili")), "FieldByName", ["NAME"])), "AsString"))]])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Admin_in")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_Admin_Setting", "DBGridEh2DblClick", async function DBGridEh2DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_Admin_in_Del", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Admin_in")), "FieldByName", ["USER_ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Admin_in")), "FieldByName", ["FILIAL_ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Admin_in")), "FieldByName", ["USER_NAME"])), "AsString")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Admin_in")), "FieldByName", ["FILIAL_NAME"])), "AsString"))]])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Admin_in")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_Admin_Setting", "DBGridEh1KeyPress", async function DBGridEh1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "DBGridEh1DblClick", [L0["sender"]])));
  }
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.stmt($.call(C, "Close", []));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TForm_Admin_Setting", "DBGridEh2KeyPress", async function DBGridEh2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.stmt($.call(C, "Close", []));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TForm_Admin_Setting", "DBGEh_Admin_SettingKeyPress", async function DBGEh_Admin_SettingKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.stmt($.call(C, "Close", []));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TForm_Admin_Setting", "DBGridEh2KeyDown", async function DBGridEh2KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), 46))) {
    await $.stmt((await $.call(C, "DBGridEh2DblClick", [L0["sender"]])));
    await L0["key"].set(0);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  return U;
}
