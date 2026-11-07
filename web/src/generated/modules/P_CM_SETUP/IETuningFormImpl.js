// Generated from IETuningFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("IETuningFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "ExtCtrls", "Db", "OracleData", "StdCtrls", "Menus", "PluginPopupMenu", "ImgList", "ComCtrls", "ToolWin", "sboapiDataModuleImpl", "CommonDecls", "IEAddEditFormImpl", "IETuningDataModuleImpl", "sbsystem"]);
  const C = [U];
  U.defClass("TIETuningForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "dgridcategories": {"name": "DGridCategories", "type": "TDBGrid"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "dgridlinks": {"name": "DGridLinks", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "dgridlinkvalues": {"name": "DGridLinkValues", "type": "TDBGrid"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}}, {});
  U.init(async () => {
    U.var_("IETuningForm", null, "TIETuningForm");
  });
  U.method("TIETuningForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "IETuningDataMod", (await $.mcall((await $.v(C, "TIETuningDataMod")), "Create", [Self])));
  await $.set(C, "FrmIEAddEdit", (await $.mcall((await $.v(C, "TFrmIEAddEdit")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TIETuningForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "IETuningDataMod")), "Free", []);
  await $.mcall((await $.v(C, "FrmIEAddEdit")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TIETuningForm", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TIETuningForm", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["snlscaption"] = "Yeni.";
  {
    const $t1 = (await $.wobj(C, "FrmIEAddEdit"));
    const $t2 = (await $.mv((await $.wv([$t1], "IETuningDataMod", C, false)), "LinkValuesData"));
    await $.wset([$t1, $t2], "Caption", (await $.wv([$t1, $t2], "SNLSCaption", { get: async () => L0["snlscaption"], set: async (v) => { L0["snlscaption"] = v; }, local: true }, false)), C);
    await $.stmt($.wcall([$t1, $t2], "Insert", [], C));
    await $.mset((await $.wcall([$t1, $t2], "FieldByName", ["BranchID"], C)), "AsInteger", (await $.wv([$t1, $t2], "Get_BranchID", C, false)));
    await $.mset((await $.wv([$t1, $t2], "CBBranch", C, false)), "KeyValue", (await $.wv([$t1, $t2], "Get_BranchID", C, false)));
    await $.stmt($.wcall([$t1, $t2], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TIETuningForm", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["snlscaption"] = "Redaktə.";
  {
    const $t3 = (await $.wobj(C, "FrmIEAddEdit"));
    const $t4 = (await $.mv((await $.wv([$t3], "IETuningDataMod", C, false)), "LinkValuesData"));
    await $.wset([$t3, $t4], "Caption", (await $.wv([$t3, $t4], "SNLSCaption", { get: async () => L0["snlscaption"], set: async (v) => { L0["snlscaption"] = v; }, local: true }, false)), C);
    await $.stmt($.wcall([$t3, $t4], "Edit", [], C));
    await $.stmt($.wcall([$t3, $t4], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TIETuningForm", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["sconfirmdelete"] = "Ləğv edim?";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["sconfirmdelete"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t5 = (await $.mv((await $.v(C, "IETuningDataMod")), "LinkValuesData"));
      await $.stmt($.wcall([$t5], "Delete", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TIETuningForm", "ToolButton8Click", async function ToolButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.wobj(C, "IETuningDataMod"));
    await $.mcall((await $.wv([$t6], "IEAccountList", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t6], "CategoriesData", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t6], "LinksData", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t6], "LinkValuesData", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "IETuningForm", (await $.mcall((await $.v(C, "TIETuningForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
