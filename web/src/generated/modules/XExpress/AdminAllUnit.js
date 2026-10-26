// Generated from AdminAllUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AdminAllUnit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "XDBGrids", "ExtCtrls", "DB", "OracleData", "ExpDataModuleUnit"]);
  const C = [U];
  U.defClass("TAdminAllForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "xdbgrid3": {"name": "XDBGrid3", "type": "TXDBGrid"}, "adminalluserdataset": {"name": "AdminAllUserDataSet", "type": "TOracleDataSet"}, "expadminalldataset": {"name": "ExpAdminAllDataSet", "type": "TOracleDataSet"}, "adminalluserdatasource": {"name": "AdminAllUserDataSource", "type": "TDataSource"}, "expadminalldatasource": {"name": "ExpAdminAllDataSource", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("AdminAllForm", null, "TAdminAllForm");
  });
  U.method("TAdminAllForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "AdminAllUserDataSet")), "Close", []);
  await $.mcall((await $.v(C, "ExpAdminAllDataSet")), "Close", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TAdminAllForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "AdminAllUserDataSet")), "Open", []);
  await $.mcall((await $.v(C, "ExpAdminAllDataSet")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdminAllForm", "XDBGrid1KeyPress", async function XDBGrid1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.stmt($.call(C, "Close", []));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAdminAllForm", "XDBGrid2DblClick", async function XDBGrid2DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "ExpDataModule"));
    await $.stmt((await $.mcall((await $.wv([$t1], "Repair", C, false)), "CallProcedure", ["ExpAdminAll_add", [(await $.mv((await $.mcall((await $.wv([$t1], "AdminAllUserDataSet", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t1], "AllFilialDataSet", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t1], "AdminAllUserDataSet", C, false)), "FieldByName", ["NAME"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t1], "AllFilialDataSet", C, false)), "FieldByName", ["NAME"])), "AsString"))]])));
    await $.mcall((await $.wv([$t1], "ExpAdminAllDataSet", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdminAllForm", "XDBGrid2KeyPress", async function XDBGrid2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "XDBGrid2DblClick", [L0["sender"]])));
  }
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.stmt($.call(C, "Close", []));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAdminAllForm", "XDBGrid3DblClick", async function XDBGrid3DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "ExpDataModule"));
    await $.stmt((await $.mcall((await $.wv([$t2], "Repair", C, false)), "CallProcedure", ["ExpAdminAll_del", [(await $.mv((await $.mcall((await $.wv([$t2], "ExpAdminAllDataSet", C, false)), "FieldByName", ["USER_ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t2], "ExpAdminAllDataSet", C, false)), "FieldByName", ["FILIAL_ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t2], "ExpAdminAllDataSet", C, false)), "FieldByName", ["USER_NAME"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t2], "ExpAdminAllDataSet", C, false)), "FieldByName", ["FILIAL_NAME"])), "AsString"))]])));
    await $.mcall((await $.wv([$t2], "ExpAdminAllDataSet", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdminAllForm", "XDBGrid3KeyDown", async function XDBGrid3KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), 46))) {
    await $.stmt((await $.call(C, "XDBGrid3DblClick", [L0["sender"]])));
    await L0["key"].set(0);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TAdminAllForm", "XDBGrid3KeyPress", async function XDBGrid3KeyPress(Self, p0, p1) {
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
