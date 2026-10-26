// Generated from AdminParametr.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AdminParametr", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "XDBGrids", "StdCtrls", "XFSCtrls", "ExtCtrls", "UnitDataModuleCourt"]);
  const C = [U];
  U.defClass("TFormParametr", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "xdbgrid3": {"name": "XDBGrid3", "type": "TXDBGrid"}}, {});
  U.init(async () => {
    U.var_("FormParametr", null, "TFormParametr");
  });
  U.method("TFormParametr", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourtAdmin")), "Active", false);
  await $.mset((await $.mv((await $.v(C, "DataModuleCourt")), "ODSAdminGroups")), "Active", false);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormParametr", "XDBGrid1DblClick", async function XDBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "CT_CONTROL")), "CallProcedure", ["admin_add", ["userid_", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourtAdmin")), "FieldByName", ["ID"])), "AsInteger")), "qrupid_", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSAdminGroups")), "FieldByName", ["ID"])), "AsInteger")), "username_", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourtAdmin")), "FieldByName", ["NAME"])), "AsString")), "qrupname_", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSAdminGroups")), "FieldByName", ["NAME"])), "AsString"))]])));
  await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSAdminIn")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormParametr", "XDBGrid1KeyPress", async function XDBGrid1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "XDBGrid1DblClick", [L0["sender"]])));
  }
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.stmt($.call(C, "Close", []));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormParametr", "XDBGrid2DblClick", async function XDBGrid2DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "CT_CONTROL")), "CallProcedure", ["admin_del", ["userid_", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSAdminIn")), "FieldByName", ["USERID"])), "AsInteger")), "qrupid_", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSAdminIn")), "FieldByName", ["QRUPID"])), "AsInteger")), "username_", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSAdminIn")), "FieldByName", ["USERNAME"])), "AsString")), "qrupname_", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSAdminIn")), "FieldByName", ["QRUPNAME"])), "AsString"))]])));
  await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSAdminIn")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormParametr", "XDBGrid2KeyDown", async function XDBGrid2KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), 46))) {
    await $.stmt((await $.call(C, "XDBGrid2DblClick", [L0["sender"]])));
    await L0["key"].set(0);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormParametr", "XDBGrid2KeyPress", async function XDBGrid2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.stmt($.call(C, "Close", []));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormParametr", "XDBGrid3KeyPress", async function XDBGrid3KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.stmt($.call(C, "Close", []));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
