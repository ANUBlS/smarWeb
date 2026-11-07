// Generated from admPluginUpdImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("admPluginUpdImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ExtCtrls", "cFileListComboBox", "DBCtrls", "admDataModule", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TfrmUpdPlugin", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "btnedit": {"name": "btnEdit", "type": "TSpeedButton"}, "btnclose": {"name": "btnClose", "type": "TSpeedButton"}, "cbbpls": {"name": "cbBPLS", "type": "TFileListComboBox"}, "edparamname": {"name": "edParamName", "type": "TEdit"}, "eddescription": {"name": "edDescription", "type": "TEdit"}, "label4": {"name": "Label4", "type": "TLabel"}, "cbplugintype": {"name": "cbPluginType", "type": "TDBLookupComboBox"}}, {});
  U.init(async () => {
    U.var_("frmUpdPlugin", null, "TfrmUpdPlugin");
    U.var_("PluginID", 0, "Integer");
  });
  U.method("TfrmUpdPlugin", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "cbBPLS")), "Directory", (await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])));
  await $.mcall((await $.v(C, "cbBPLS")), "FillList", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmUpdPlugin", "btnCloseClick", async function btnCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmUpdPlugin", "btnEditClick", async function btnEditClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "admDM"));
    await $.stmt((await $.mcall((await $.wv([$t1], "CM_ADMIN", C, false)), "CallProcedure", ["updateplugin", [(await $.mv((await $.wv([$t1], "PluginsDataSetID", C, false)), "AsVariant")), (await $.mv((await $.wv([$t1], "edDescription", C, false)), "Text")), (await $.mv((await $.wv([$t1], "cbPluginType", C, false)), "KeyValue"))]])));
    await $.stmt((await $.wcall([$t1], "RefreshDataSet", [(await $.wv([$t1], "PluginsDataSet", C, false))], C)));
  }
  await $.stmt((await $.call(C, "btnCloseClick", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmUpdPlugin", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt((await $.call(C, "btnCloseClick", [L0["sender"]])));
  }
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "btnEditClick", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TfrmUpdPlugin", "edDescriptionChange", async function edDescriptionChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "btnEdit")), "Enabled", $.ne((await $.mv((await $.v(C, "edDescription")), "Text")), ""));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
