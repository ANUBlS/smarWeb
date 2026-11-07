// Generated from SettinImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SettinImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "DBCtrls", "Grids", "DBGrids", "Menus", "XDBCtrls", "XDBGrids", "ComCtrls", "CommonDecls", "sbsystem", "sboapiDataModuleImpl", "Dmretsetitnq", "KreditSetImpl", "Percenİmpl", "FrmReserveAccImpl"]);
  const C = [U];
  U.defClass("TFrmSetting", "TForm", {"popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "lavet1": {"name": "lavet1", "type": "TMenuItem"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "xdbnavigator2": {"name": "XDBNavigator2", "type": "TXDBNavigator"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "n1": {"name": "N1", "type": "TMenuItem"}, "mqavilninxapnsazla1": {"name": "Mqavilninxapnsazla1", "type": "TMenuItem"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xdbnavigator1": {"name": "XDBNavigator1", "type": "TXDBNavigator"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "xdbnavigator3": {"name": "XDBNavigator3", "type": "TXDBNavigator"}, "dbgrid4": {"name": "DBGrid4", "type": "TDBGrid"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "xdbnavigator4": {"name": "XDBNavigator4", "type": "TXDBNavigator"}, "n2": {"name": "N2", "type": "TMenuItem"}, "ehtiyyathesablarnn1": {"name": "Ehtiyyathesablarnn1", "type": "TMenuItem"}}, {});
  U.init(async () => {
    U.var_("FrmSetting", null, "TFrmSetting");
    U.var_("mehid", 0, "integer");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  if ($.truthy($.eq(L0["s"], "PERCENT"))) {
    await $.mcall((await $.v(C, "FrmPercen")), "ShowModal", []);
  } else {
    await $.mcall((await $.v(C, "FrmSetting")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmSetting", "Ehtiyyathesablarnn1Click", async function Ehtiyyathesablarnn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DmRt")), "OracleDataSet2")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DmRt")), "OracleDataSet3")), "Open", []);
  await $.mcall((await $.v(C, "FrmReserveAcc")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmSetting", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmSetting", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DmRt", (await $.mcall((await $.v(C, "TDmRt")), "Create", [Self])));
  await $.set(C, "FrmReserveAcc", (await $.mcall((await $.v(C, "TFrmReserveAcc")), "Create", [Self])));
  await $.set(C, "FrmKreditSet", (await $.mcall((await $.v(C, "TFrmKreditSet")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmSetting", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 27))) {
    await $.mcall((await $.v(C, "FrmSetting")), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmSetting", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PageControl1")), "TabIndex", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmSetting", "lavet1Click", async function lavet1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "dmrt"));
    await $.mcall((await $.wv([$t1], "PersonLink", C, false)), "edit", []);
  }
  await $.mcall((await $.v(C, "FrmKreditSet")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("LoadPlugin", async function LoadPlugin(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pluginname": $.copyArg(p0), "pluginparam": $.copyArg(p1), "mehid": $.copyArg(p2), result: undefined, "pluginhandle": 0, "exportproc": null};
  await $.fixArgs(L0, ["pluginname", "pluginparam", "mehid"]);
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), L0["pluginname"])]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportproc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], "InitPlugin"]));
    await $.stmt((await $.callv(L0["exportproc"], [L0["pluginparam"], L0["mehid"]])));
  }
  return L0.result;
}, {"params": ["PluginName", "PluginParam", "mehid"], "kind": "procedure", "ptypes": ["String", "String", "integer"]});
  U.method("TFrmSetting", "Mqavilninxapnsazla1Click", async function Mqavilninxapnsazla1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "mehid", (await $.mv((await $.mcall((await $.mv((await $.v(C, "dmrt")), "PersonLink")), "FieldByName", ["ID"])), "asinteger")));
  await $.stmt((await $.call(C, "LoadPlugin", ["CM_WRSETUP.bpl", "WRBookmarkSetup", (await $.v(C, "mehid"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmSetting", "XDBNavigator2Click", async function XDBNavigator2Click(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "button"]);
  { const $t2 = L0["button"];
    if ($.eq($t2, (await $.v(C, "nbPost")))) {
      await $.mcall((await $.mv((await $.v(C, "DmRt")), "PersonLink")), "close", []);
      await $.mcall((await $.mv((await $.v(C, "DmRt")), "PersonLink")), "open", []);
      await $.mcall((await $.mv((await $.v(C, "DmRt")), "Persons")), "refresh", []);
    }
    else if ($.eq($t2, (await $.v(C, "nbDelete")))) {
      await $.mcall((await $.mv((await $.mv((await $.v(C, "DmRt")), "PersonLink")), "Session")), "Commit", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Button"], "kind": "procedure", "ptypes": ["TObject", "TNavigateBtn"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmSetting", (await $.mcall((await $.v(C, "TFrmSetting")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
