// Generated from Unit_id_quality.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit_id_quality", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "XDBGrids", "StdCtrls", "XFSCtrls", "ExtCtrls", "sboapiDataModuleImpl", "UnitDataModPCustService", "PCustServiceFormImpl1", "Unit_description"]);
  const C = [U];
  U.defClass("TFormid_quality", "TForm", {"xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}}, {});
  U.init(async () => {
    U.var_("Formid_quality", null, "TFormid_quality");
  });
  U.method("TFormid_quality", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFormid_quality", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["quality_id"])), "AsInteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ods_custID_quality")), "Locate", ["id", L0["id"], []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormid_quality", "XDBGrid1MouseMove", async function XDBGrid1MouseMove(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "shift": $.copyArg(p1), "x": $.copyArg(p2), "y": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "shift", "x", "y"]);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_cust_id_qualityCount")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_cust_id_qualityCount")), "open", []);
  return L0.result;
}, {"params": ["Sender", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TShiftState", "Integer", "Integer"]});
  U.method("TFormid_quality", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id_quality": 0, "id_qualitycust": 0, "v_id_quality": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["id_quality"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ods_custID_quality")), "FieldByName", ["id"])), "AsInteger"));
  L0["id_qualitycust"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "AsInteger"));
  L0["v_id_quality"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ods_custID_quality")), "FieldByName", ["id"])), "AsInteger"));
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ods_cust_ID_quality1")), "First", []);
  {
    const $t1 = (await $.v(C, "DataModPCustService"));
    await $.mcall((await $.wv([$t1], "Ods_cust_id_qualityCount", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t1], "Ods_cust_id_qualityCount", C, false)), "SetVariable", ["custid", (await $.wv([$t1], "id_qualityCust", { get: async () => L0["id_qualitycust"], set: async (v) => { L0["id_qualitycust"] = v; }, local: true }, false))])));
    await $.stmt((await $.mcall((await $.wv([$t1], "Ods_cust_id_qualityCount", C, false)), "SetVariable", ["id_quality", (await $.wv([$t1], "id_quality", { get: async () => L0["id_quality"], set: async (v) => { L0["id_quality"] = v; }, local: true }, false))])));
    await $.mcall((await $.wv([$t1], "Ods_cust_id_qualityCount", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t1], "Ods_cust_id_qualityCount", C, false)), "FieldByName", ["checked"])), "AsInteger")), 0))) {
      await $.stmt((await $.wcall([$t1], "ShowMessage", ["Təsnifat keyfiyyətinin növünü daxil edin  !"], C)));
      return L0.result;
    }
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallProcedure", ["upd_custid_quality", [L0["id_quality"]]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallProcedure", ["update_customers", [L0["id_qualitycust"], L0["v_id_quality"]]])));
  await $.mcall((await $.mv((await $.v(C, "PCustServiceForm")), "CustSearch1")), "Click", []);
  await $.mcall((await $.v(C, "Formid_quality")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormid_quality", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Formid_quality")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormid_quality", "XFButton3Click", async function XFButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Form_description", (await $.mcall((await $.v(C, "TForm_description")), "create", [Self])));
  await $.mset((await $.mv((await $.v(C, "Form_description")), "Memo1")), "Text", (await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "Ods_cust_id_quality1DESCRIPTION")), "AsString")));
  await $.mcall((await $.v(C, "Form_description")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
