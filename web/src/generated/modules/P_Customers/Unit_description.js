// Generated from Unit_description.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit_description", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "ExtCtrls", "P_Datamod_Unit"]);
  const C = [U];
  U.defClass("TForm_description", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "memo1": {"name": "Memo1", "type": "TMemo"}}, {});
  U.init(async () => {
    U.var_("Form_description", null, "TForm_description");
  });
  U.method("TForm_description", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_custid": 0, "v_id_quality": 0, "v_description": '', "id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["v_description"] = (await $.mv((await $.v(C, "Memo1")), "Text"));
  L0["v_custid"] = (await $.mv((await $.mv((await $.v(C, "p_DataModule")), "p_CustomersID")), "AsInteger"));
  L0["v_id_quality"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "p_DataModule")), "ods_custID_quality")), "FieldByName", ["id"])), "AsInteger"));
  await $.mcall((await $.mv((await $.v(C, "p_DataModule")), "ods_custID_quality")), "refresh", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "p_DataModule")), "phys_fs_customers")), "CallProcedure", ["upd_custid_quality_descriptin", [L0["v_custid"], L0["v_id_quality"], L0["v_description"]]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "p_DataModule")), "ods_custID_quality")), "Locate", ["id", L0["v_id_quality"], []])));
  await $.mcall((await $.v(C, "Form_description")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_description", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Form_description")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
