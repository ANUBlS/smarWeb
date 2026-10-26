// Generated from frm_Investisiya_settingimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frm_Investisiya_settingimpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "ExtCtrls", "XFSCtrls", "DBCtrls", "Grids", "DBGrids", "XDBCtrls", "StdCtrls", "CommanParametrs", "sboapiDataModuleImpl", "dmsettingsimpl"]);
  const C = [U];
  U.defClass("Tfrm_Investisiya_setting", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "dbgrid4": {"name": "DBGrid4", "type": "TDBGrid"}, "xdbnavigator1": {"name": "XDBNavigator1", "type": "TXDBNavigator"}}, {});
  U.init(async () => {
    U.var_("frm_Investisiya_setting", null, "Tfrm_Investisiya_setting");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  if ($.truthy($.eq(L0["s"], ""))) {
    await $.mcall((await $.v(C, "frm_Investisiya_setting")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("Tfrm_Investisiya_setting", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "dmsettings", (await $.mcall((await $.v(C, "Tdmsettings")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrm_Investisiya_setting", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frm_Investisiya_setting", (await $.mcall((await $.v(C, "Tfrm_Investisiya_setting")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}
