// Generated from admPluginAddImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("admPluginAddImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "FileCtrl", "Buttons", "ExtCtrls", "cFileListComboBox", "ActnList", "ImgList", "DBCtrls", "admDataModule", "admMainFormImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TfrmPluginAdd", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "btnadd": {"name": "btnAdd", "type": "TSpeedButton"}, "edparamname": {"name": "edParamName", "type": "TEdit"}, "eddescription": {"name": "edDescription", "type": "TEdit"}, "btnclose": {"name": "btnClose", "type": "TSpeedButton"}, "cbbpls": {"name": "cbBPLS", "type": "TFileListComboBox"}, "actsplugin": {"name": "actsPlugin", "type": "TActionList"}, "actpluginaddexec": {"name": "actPluginAddExec", "type": "TAction"}, "plugaddimgs": {"name": "PlugAddImgs", "type": "TImageList"}, "actpluginaddclose": {"name": "actPluginAddClose", "type": "TAction"}, "label4": {"name": "Label4", "type": "TLabel"}, "cbplugintype": {"name": "cbPluginType", "type": "TDBLookupComboBox"}}, {});
  U.init(async () => {
    U.var_("frmPluginAdd", null, "TfrmPluginAdd");
  });
  U.method("TfrmPluginAdd", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "cbBPLS")), "Directory", (await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])));
  await $.mcall((await $.v(C, "cbBPLS")), "FillList", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPluginAdd", "btnAddClick", async function btnAddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPluginAdd", "btnCloseExec", async function btnCloseExec(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPluginAdd", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt((await $.call(C, "btnCloseExec", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TfrmPluginAdd", "edParamNameKeyDown", async function edParamNameKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_RETURN"))))) {
    await $.mcall((await $.v(C, "edDescription")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TfrmPluginAdd", "actAddExecExecute", async function actAddExecExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "admDM"));
    await $.stmt((await $.mcall((await $.wv([$t1], "CM_ADMIN", C, false)), "CallProcedure", ["addplugin", [(await $.mv((await $.wv([$t1], "cbBPLs", C, false)), "Text")), (await $.wcall([$t1], "trim", [(await $.mv((await $.wv([$t1], "edParamName", C, false)), "Text"))], C)), (await $.wcall([$t1], "trim", [(await $.mv((await $.wv([$t1], "edDescription", C, false)), "Text"))], C)), (await $.mv((await $.wv([$t1], "cbPluginType", C, false)), "KeyValue"))]])));
    await $.stmt((await $.wcall([$t1], "RefreshDataSet", [(await $.wv([$t1], "PluginsDataSet", C, false))], C)));
    await $.mset((await $.wv([$t1], "cbBPLs", C, false)), "ItemIndex", (-(1)));
    await $.mset((await $.wv([$t1], "edParamName", C, false)), "Text", "");
    await $.mset((await $.wv([$t1], "edDescription", C, false)), "Text", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPluginAdd", "edDescriptionChange", async function edDescriptionChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "cbBPLS")), "Text"))])), "")), async () => ($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "edDescription")), "Text"))])), "")))))) {
    await $.mset((await $.v(C, "actPluginAddExec")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "actPluginAddExec")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPluginAdd", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "cbBPLs")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPluginAdd", "edDescriptionKeyDown", async function edDescriptionKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.and_(($.eq((await L0["key"].get()), (await $.v(C, "VK_RETURN")))), async () => ((await $.mv((await $.v(C, "actPluginAddExec")), "Enabled"))))))) {
    await $.stmt((await $.call(C, "actAddExecExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  return U;
}
