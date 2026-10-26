// Generated from AdminUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AdminUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "XFSCtrls", "Grids", "XDBGrids", "StdCtrls", "DB", "OracleData", "ExpDataModuleUnit"]);
  const C = [U];
  U.defClass("TAdminForm", "TForm", {"xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xdbgridfilial": {"name": "XDBGridFilial", "type": "TXDBGrid"}, "xdbgrid3": {"name": "XDBGrid3", "type": "TXDBGrid"}, "adminuserdataset": {"name": "AdminUserDataSet", "type": "TOracleDataSet"}, "adminuserdatasource": {"name": "AdminUserDataSource", "type": "TDataSource"}, "expadmindataset": {"name": "ExpAdminDataSet", "type": "TOracleDataSet"}, "expadmindatasource": {"name": "ExpAdminDataSource", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("AdminForm", null, "TAdminForm");
  });
  U.method("TAdminForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "AdminUserDataSet")), "Close", []);
  await $.mcall((await $.v(C, "ExpAdminDataSet")), "Close", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TAdminForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "AdminUserDataSet")), "Open", []);
  await $.mcall((await $.v(C, "ExpAdminDataSet")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdminForm", "XDBGrid1KeyPress", async function XDBGrid1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.stmt($.call(C, "Close", []));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAdminForm", "XDBGridFilialDblClick", async function XDBGridFilialDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "ExpDataModule"));
    await $.stmt((await $.mcall((await $.wv([$t1], "Repair", C, false)), "CallProcedure", ["ExpAdmin_add", [(await $.mv((await $.mcall((await $.wv([$t1], "AdminUserDataSet", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t1], "AllFilialDataSet", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t1], "AdminUserDataSet", C, false)), "FieldByName", ["NAME"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t1], "AllFilialDataSet", C, false)), "FieldByName", ["NAME"])), "AsString"))]])));
    await $.mcall((await $.wv([$t1], "ExpAdminDataSet", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdminForm", "XDBGridFilialKeyPress", async function XDBGridFilialKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "XDBGridFilialDblClick", [L0["sender"]])));
  }
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.stmt($.call(C, "Close", []));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAdminForm", "XDBGrid3DblClick", async function XDBGrid3DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "ExpDataModule"));
    await $.stmt((await $.mcall((await $.wv([$t2], "Repair", C, false)), "CallProcedure", ["ExpAdmin_del", [(await $.mv((await $.mcall((await $.wv([$t2], "ExpAdminDataSet", C, false)), "FieldByName", ["USER_ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t2], "ExpAdminDataSet", C, false)), "FieldByName", ["FILIAL_ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t2], "ExpAdminDataSet", C, false)), "FieldByName", ["USER_NAME"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t2], "ExpAdminDataSet", C, false)), "FieldByName", ["FILIAL_NAME"])), "AsString"))]])));
    await $.mcall((await $.wv([$t2], "ExpAdminDataSet", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdminForm", "XDBGrid3KeyPress", async function XDBGrid3KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.stmt($.call(C, "Close", []));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAdminForm", "XDBGrid3KeyDown", async function XDBGrid3KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), 46))) {
    await $.stmt((await $.call(C, "XDBGrid3DblClick", [L0["sender"]])));
    await L0["key"].set(0);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  return U;
}
