// Generated from UnitParametr.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitParametr", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "StdCtrls", "ExtCtrls", "UnitDateExch"]);
  const C = [U];
  U.defClass("TFormParametr", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}}, {});
  U.init(async () => {
    U.var_("FormParametr", null, "TFormParametr");
  });
  U.method("TFormParametr", "DBGrid2DblClick", async function DBGrid2DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DataModExch"));
    await $.stmt((await $.mcall((await $.wv([$t1], "OPExchMgr", C, false)), "CallProcedure", ["Ex_Admin_In_Add", [(await $.mv((await $.mcall((await $.wv([$t1], "ODSParametr", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t1], "ODSExOffice", C, false)), "FieldByName", ["Filial"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t1], "ODSParametr", C, false)), "FieldByName", ["NAME"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t1], "ODSExOffice", C, false)), "FieldByName", ["EX_NO"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t1], "ODSExOffice", C, false)), "FieldByName", ["EX_NAME"])), "AsString"))]])));
    await $.mcall((await $.wv([$t1], "ODSExAdminIn", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormParametr", "DBGrid2KeyPress", async function DBGrid2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "DBGrid2DblClick", [L0["sender"]])));
  }
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.stmt($.call(C, "Close", []));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormParametr", "DBGrid3DblClick", async function DBGrid3DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "DataModExch"));
    await $.stmt((await $.mcall((await $.wv([$t2], "OPExchMgr", C, false)), "CallProcedure", ["Ex_Admin_in_Del", [(await $.mv((await $.mcall((await $.wv([$t2], "ODSExAdminIn", C, false)), "FieldByName", ["USER_ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t2], "ODSExAdminIn", C, false)), "FieldByName", ["USER_NAME"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t2], "ODSExAdminIn", C, false)), "FieldByName", ["EX_ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t2], "ODSExAdminIn", C, false)), "FieldByName", ["EX_NAME"])), "AsString"))]])));
    await $.mcall((await $.wv([$t2], "ODSExAdminIn", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormParametr", "DBGrid3KeyDown", async function DBGrid3KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), 46))) {
    await $.stmt((await $.call(C, "DBGrid3DblClick", [L0["sender"]])));
    await L0["key"].set(0);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormParametr", "DBGrid3KeyPress", async function DBGrid3KeyPress(Self, p0, p1) {
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
