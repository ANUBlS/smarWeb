// Generated from AdminParamaterKredit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AdminParamaterKredit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "XDBGrids", "StdCtrls", "XFSCtrls", "ExtCtrls", "PrCmDMImpl", "UserQovluqImpl"]);
  const C = [U];
  U.defClass("TFormSettings", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xdbgrid3": {"name": "XDBGrid3", "type": "TXDBGrid"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}}, {});
  U.init(async () => {
    U.var_("FormSettings", null, "TFormSettings");
  });
  U.method("TFormSettings", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "PrCmDM")), "CourtAdmin")), "Active", false);
  await $.mset((await $.mv((await $.v(C, "PrCmDM")), "AdminGroups")), "Active", false);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormSettings", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FrmUserQovluq", (await $.mcall((await $.v(C, "TFrmUserQovluq")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormSettings", "XDBGrid1DblClick", async function XDBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "FrmUserQovluq")), "CheckBonus")), "Caption", $.add($.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "CourtAdmin")), "FieldByName", ["NAME"])), "AsString")), " bu istfadəçiyə "), (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "AdminGroups")), "FieldByName", ["NAME"])), "AsString"))), " bu bölmə üzrə bonus veriləcəkmi?"));
  await $.mcall((await $.v(C, "FrmUserQovluq")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormSettings", "XDBGrid1KeyPress", async function XDBGrid1KeyPress(Self, p0, p1) {
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
  U.method("TFormSettings", "XDBGrid2DblClick", async function XDBGrid2DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "PrPackage")), "CallProcedure", ["admin_del", ["userid_", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "AdminIn")), "FieldByName", ["USERID"])), "AsInteger")), "qrupid_", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "AdminIn")), "FieldByName", ["QRUPID"])), "AsInteger")), "username_", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "AdminIn")), "FieldByName", ["USERNAME"])), "AsString")), "qrupname_", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "AdminIn")), "FieldByName", ["QRUPNAME"])), "AsString"))]])));
  await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "AdminIn")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormSettings", "XDBGrid2KeyDown", async function XDBGrid2KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), 46))) {
    await $.stmt((await $.call(C, "XDBGrid2DblClick", [L0["sender"]])));
    await L0["key"].set(0);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormSettings", "XDBGrid2KeyPress", async function XDBGrid2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.stmt($.call(C, "Close", []));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormSettings", "XDBGrid3KeyPress", async function XDBGrid3KeyPress(Self, p0, p1) {
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
