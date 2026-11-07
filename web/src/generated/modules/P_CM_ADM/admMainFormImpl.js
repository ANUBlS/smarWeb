// Generated from admMainFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("admMainFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "ComCtrls", "ToolWin", "DBCGrids", "StdCtrls", "DBCtrls", "Grids", "DBGrids", "ActnList", "ImgList", "DBGridEh", "CheckLst", "Evanescence", "Buttons", "Menus", "DBGridEhGrouping", "GridsEh", "DB", "OracleData", "admDataModule", "admPluginAddImpl", "admPluginUpdImpl", "admUsersAddImplpas", "admUsersDelImplpas", "admUserGrantsImpl", "admGroupAddImpl", "admGroupUsersImpl", "admexpertimpl", "SBTranslateProc", "sboapiDataModuleImpl", "LogReportImpl"]);
  const C = [U];
  U.defClass("ESearchError", "Exception", {}, {});
  U.defClass("TfrmMain", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "pages": {"name": "Pages", "type": "TPageControl"}, "pluginssheet": {"name": "PluginsSheet", "type": "TTabSheet"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "pluginsdbgr": {"name": "PluginsDBGr", "type": "TDBGridEh"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "admactions": {"name": "AdmActions", "type": "TActionList"}, "actshowpluginadd": {"name": "actShowPluginAdd", "type": "TAction"}, "admimages": {"name": "admImages", "type": "TImageList"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "actshowpluginupd": {"name": "actShowPluginUpd", "type": "TAction"}, "userssheet": {"name": "UsersSheet", "type": "TTabSheet"}, "coolbar2": {"name": "CoolBar2", "type": "TCoolBar"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "actplugindel": {"name": "actPluginDel", "type": "TAction"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "usersdbgr": {"name": "UsersDBGr", "type": "TDBGridEh"}, "actuseradd": {"name": "actUserAdd", "type": "TAction"}, "actuserdel": {"name": "actUserDel", "type": "TAction"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "actusergrantsform": {"name": "actUserGrantsForm", "type": "TAction"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "groupssheet": {"name": "GroupsSheet", "type": "TTabSheet"}, "coolbar3": {"name": "CoolBar3", "type": "TCoolBar"}, "toolbar3": {"name": "ToolBar3", "type": "TToolBar"}, "splitter1": {"name": "Splitter1", "type": "TSplitter"}, "useringroupsdbgr": {"name": "UserInGroupsDBGr", "type": "TDBGridEh"}, "actgroupadd": {"name": "actGroupAdd", "type": "TAction"}, "actgroupdel": {"name": "actGroupDel", "type": "TAction"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "groupsdbgr": {"name": "GroupsDBGr", "type": "TDBGridEh"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "actuseraddingroup": {"name": "actUserAddInGroup", "type": "TAction"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "splitter2": {"name": "Splitter2", "type": "TSplitter"}, "groupusersdbgr": {"name": "GroupUsersDBGr", "type": "TDBGridEh"}, "closebutton": {"name": "CloseButton", "type": "TBitBtn"}, "actclose": {"name": "actClose", "type": "TAction"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "istifadeciyekreditmutexessisininredakteetmekhuququvermk1": {"name": "Istifadeciyekreditmutexessisininredakteetmekhuququvermk1", "type": "TMenuItem"}, "editname": {"name": "EditName", "type": "TEdit"}}, {});
  U.init(async () => {
    U.const("rsDeleteConfirm", "%s - plug-in silinsinmi?");
    U.const("rsUserGrants", "Hüquqların idarəolunması ('%s')");
    U.const("rsDeleteConfirmGroup", "%s qrupu silinsinmi?");
    U.var_("frmMain", null, "TfrmMain");
  });
  U.method("TfrmMain", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Pages")), "ActivePageIndex", 0);
  await $.set(C, "admDM", (await $.mcall((await $.v(C, "TadmDM")), "Create", [Self])));
  await $.set(C, "frmPluginAdd", (await $.mcall((await $.v(C, "TfrmPluginAdd")), "Create", [Self])));
  await $.set(C, "frmUpdPlugin", (await $.mcall((await $.v(C, "TfrmUpdPlugin")), "Create", [Self])));
  await $.set(C, "frmUsersAdd", (await $.mcall((await $.v(C, "TfrmUsersAdd")), "Create", [Self])));
  await $.set(C, "frmUsersDel", (await $.mcall((await $.v(C, "TfrmUsersDel")), "Create", [Self])));
  await $.set(C, "frmUserGrants", (await $.mcall((await $.v(C, "TfrmUserGrants")), "Create", [Self])));
  await $.set(C, "frmGroupAdd", (await $.mcall((await $.v(C, "TfrmGroupAdd")), "Create", [Self])));
  await $.set(C, "frmGroupUsers", (await $.mcall((await $.v(C, "TfrmGroupUsers")), "Create", [Self])));
  await $.set(C, "ExpertDel", (await $.mcall((await $.v(C, "TExpertDel")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMain", "actShowPluginAddExecute", async function actShowPluginAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "frmPluginAdd"));
    await $.mset((await $.wv([$t1], "cbBPLS", C, false)), "ItemIndex", (-(1)));
    await $.mset((await $.wv([$t1], "edParamName", C, false)), "Text", "");
    await $.mset((await $.wv([$t1], "edDescription", C, false)), "Text", "");
    await $.stmt($.wcall([$t1], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMain", "actShowPluginUpdExecute", async function actShowPluginUpdExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.wobj(C, "admDM"));
    const $t3 = (await $.wv([$t2], "frmUpdPlugin", C, false));
    await $.wset([$t2, $t3], "PluginID", (await $.mv((await $.wv([$t2, $t3], "PluginsDataSetID", C, false)), "AsInteger")), C);
    await $.mset((await $.wv([$t2, $t3], "cbBPLS", C, false)), "ItemIndex", (await $.mcall((await $.mv((await $.wv([$t2, $t3], "cbBPLS", C, false)), "Items")), "IndexOf", [(await $.mv((await $.wv([$t2, $t3], "PluginsDataSetPLUGINNAME", C, false)), "AsString"))])));
    await $.mset((await $.wv([$t2, $t3], "edParamName", C, false)), "Text", (await $.mv((await $.wv([$t2, $t3], "PluginsDataSetPARAMNAME", C, false)), "AsString")));
    await $.mset((await $.wv([$t2, $t3], "edDescription", C, false)), "Text", (await $.mv((await $.wv([$t2, $t3], "PluginsDataSetDESCRIPTION", C, false)), "AsString")));
    await $.mset((await $.wv([$t2, $t3], "cbPluginType", C, false)), "KeyValue", (await $.mv((await $.wv([$t2, $t3], "PluginsDataSetTYPEID", C, false)), "AsVariant")));
    await $.stmt($.wcall([$t2, $t3], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMain", "PluginsDBGrKeyDown", async function PluginsDBGrKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy(((await $.and_(($.eq((await L0["key"].get()), (await $.v(C, "VK_RETURN")))), async () => ($.eq(L0["shift"], []))))))) {
    await $.stmt((await $.call(C, "actShowPluginUpdExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TfrmMain", "actPluginDelExecute", async function actPluginDelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "msgres": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.wobj(C, "admDM"));
    await $.wset([$t4], "msgres", (await $.wcall([$t4], "MessageDlg", [(await $.wcall([$t4], "Format", [(await $.wv([$t4], "rsDeleteConfirm", C, false)), [(await $.mv((await $.wv([$t4], "PluginsDataSetDescription", C, false)), "AsString"))]], C)), (await $.wv([$t4], "mtConfirmation", C, false)), [(await $.wv([$t4], "mbYes", C, false)), (await $.wv([$t4], "mbNo", C, false))], 0], C)), { get: async () => L0["msgres"], set: async (v) => { L0["msgres"] = v; }, local: true });
    if ($.truthy($.eq((await $.wv([$t4], "msgres", { get: async () => L0["msgres"], set: async (v) => { L0["msgres"] = v; }, local: true }, false)), (await $.wv([$t4], "IDYES", C, false))))) {
      await $.stmt((await $.mcall((await $.wv([$t4], "CM_ADMIN", C, false)), "CallProcedure", ["deleteplugin", [(await $.mv((await $.wv([$t4], "PluginsDataSetID", C, false)), "AsInteger"))]])));
      await $.stmt((await $.wcall([$t4], "RefreshDataSet", [(await $.wv([$t4], "PluginsDataSet", C, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMain", "actUserAddExecute", async function actUserAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.wobj(C, "admDM"));
    const $t6 = (await $.wv([$t5], "frmUsersAdd", C, false));
    await $.stmt((await $.wcall([$t5, $t6], "RefreshDataSet", [(await $.wv([$t5, $t6], "SmartUsersDataSet", C, false))], C)));
    await $.mcall((await $.wv([$t5, $t6], "lOtherUsers", C, false)), "RefreshList", []);
    await $.stmt($.wcall([$t5, $t6], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMain", "actUserDelExecute", async function actUserDelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.wobj(C, "admDM"));
    const $t8 = (await $.wv([$t7], "frmUsersDel", C, false));
    await $.stmt((await $.wcall([$t7, $t8], "RefreshDataSet", [(await $.wv([$t7, $t8], "CredUsersDataSet", C, false))], C)));
    await $.mcall((await $.wv([$t7, $t8], "lCredUsers", C, false)), "RefreshList", []);
    await $.stmt($.wcall([$t7, $t8], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMain", "actUserGrantsFormExecute", async function actUserGrantsFormExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.wobj(C, "admDM"));
    const $t10 = (await $.wv([$t9], "frmUserGrants", C, false));
    await $.stmt((await $.mcall((await $.wv([$t9, $t10], "OtherGrantsDataSet", C, false)), "SetVariable", ["usid", (await $.mv((await $.wv([$t9, $t10], "CredUsersDataSetSYSTEMID", C, false)), "AsInteger"))])));
    await $.stmt((await $.mcall((await $.wv([$t9, $t10], "UserGrantsDataSet", C, false)), "SetVariable", ["usid", (await $.mv((await $.wv([$t9, $t10], "CredUsersDataSetSYSTEMID", C, false)), "AsInteger"))])));
    await $.stmt((await $.wcall([$t9, $t10], "RefreshDataSet", [(await $.wv([$t9, $t10], "OtherGrantsDataSet", C, false))], C)));
    await $.stmt((await $.wcall([$t9, $t10], "RefreshDataSet", [(await $.wv([$t9, $t10], "UserGrantsDataSet", C, false))], C)));
    await $.mcall((await $.wv([$t9, $t10], "lOtherGrants", C, false)), "Open", []);
    await $.mcall((await $.wv([$t9, $t10], "lUserGrants", C, false)), "Open", []);
    await $.wset([$t9, $t10], "Caption", (await $.wcall([$t9, $t10], "Format", [(await $.wv([$t9, $t10], "rsUserGrants", C, false)), [(await $.mv((await $.wv([$t9, $t10], "CredUsersDataSetNAME", C, false)), "AsString"))]], C)), C);
    await $.mset((await $.wv([$t9, $t10], "cbFullControl", C, false)), "Checked", $.eq((await $.mv((await $.wv([$t9, $t10], "UserTypeDataSetTYPEID", C, false)), "AsInteger")), 1));
    await $.stmt($.wcall([$t9, $t10], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMain", "EditNameExit", async function EditNameExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMain", "FindNextRecord", async function FindNextRecord(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "fieldname": $.copyArg(p1), "value": $.copyArg(p2), result: false, "searchoptions": null};
  await $.fixArgs(L0, ["dataset", "fieldname", "value"]);
  L0["rsrecordrecachedeof"] = "Axtarış cərgənin sonuna çatıb .";
  L0["rscontinuefromtop"] = "Əvvəldən axtarmaqla davam etmək istəyirsiniz?";
  L0["rsrecordnotfound"] = "Yazı tapılmadı.";
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t11 = (L0["dataset"]);
    await $.wset([$t11], "Result", (await $.wcall([$t11], "SearchRecord", [(await $.wv([$t11], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false)), (await $.wv([$t11], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), $.add((await $.wv([$t11], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t11], "srFromCurrent", C, false)), (await $.wv([$t11], "srForward", C, false))])], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    if ($.truthy($.not((await $.wv([$t11], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))))) {
      if ($.truthy($.eq((await $.wcall([$t11], "MessageDlg", [$.add($.add((await $.wv([$t11], "rsRecordRecachedEOF", { get: async () => L0["rsrecordrecachedeof"], set: async (v) => { L0["rsrecordrecachedeof"] = v; }, local: true }, false)), "\n\r"), (await $.wv([$t11], "rsContinueFromTop", { get: async () => L0["rscontinuefromtop"], set: async (v) => { L0["rscontinuefromtop"] = v; }, local: true }, false))), (await $.wv([$t11], "mtInformation", C, false)), [(await $.wv([$t11], "mbNo", C, false)), (await $.wv([$t11], "mbYes", C, false))], 0], C)), (await $.wv([$t11], "mrYes", C, false))))) {
        await $.wset([$t11], "Result", (await $.wcall([$t11], "SearchRecord", [(await $.wv([$t11], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false)), (await $.wv([$t11], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), $.add((await $.wv([$t11], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t11], "srFromBeginning", C, false))])], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
        if ($.truthy($.not((await $.wv([$t11], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))))) {
          await $.stmt((await $.wcall([$t11], "MessageDlg", [(await $.wv([$t11], "rsRecordNotFound", { get: async () => L0["rsrecordnotfound"], set: async (v) => { L0["rsrecordnotfound"] = v; }, local: true }, false)), (await $.wv([$t11], "mtInformation", C, false)), [(await $.wv([$t11], "mbOk", C, false))], 0], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet", "FieldName", "Value"], "kind": "function", "ptypes": ["TDataSet", "String", "String"]});
  U.method("TfrmMain", "EditNameKeyPress", async function EditNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "fieldtosearch": '', "searchvalue": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["rsnothingtosearch"] = "Axtarılmalı olanı daxil edin";
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.mcall((await $.mv((await $.v(C, "UsersDBGr")), "SelectedRows")), "Clear", []);
    L0["fieldtosearch"] = (await $.call(C, "Copy", [(await $.mv((L0["sender"]), "Name")), 5, (await $.call(C, "Length", [(await $.mv((L0["sender"]), "Name"))]))]));
    L0["searchvalue"] = (await $.mv((L0["sender"]), "Text"));
    if ($.truthy($.eq(L0["searchvalue"], ""))) {
      throw $.raise((await $.mcall((await $.v(C, "ESearchError")), "Create", [L0["rsnothingtosearch"]])));
    }
    await $.stmt((await $.call(C, "FindNextRecord", [(await $.mv((await $.mv((await $.v(C, "UsersDBGr")), "DataSource")), "DataSet")), L0["fieldtosearch"], L0["searchvalue"]])));
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmMain", "actGroupAddExecute", async function actGroupAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (await $.wobj(C, "frmGroupAdd"));
    await $.mset((await $.wv([$t12], "edGroupName", C, false)), "Text", "");
    await $.mset((await $.wv([$t12], "edDescription", C, false)), "Text", "");
    await $.mset((await $.wv([$t12], "cbGroupType", C, false)), "KeyValue", 0);
    await $.stmt($.wcall([$t12], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMain", "actGroupDelExecute", async function actGroupDelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "msgres": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.wobj(C, "admDM"));
    await $.wset([$t13], "msgres", (await $.wcall([$t13], "MessageDlg", [(await $.wcall([$t13], "Format", [(await $.wv([$t13], "rsDeleteConfirmGroup", C, false)), [(await $.mv((await $.wv([$t13], "GroupsDataSetName", C, false)), "AsString"))]], C)), (await $.wv([$t13], "mtConfirmation", C, false)), [(await $.wv([$t13], "mbYes", C, false)), (await $.wv([$t13], "mbNo", C, false))], (-(1))], C)), { get: async () => L0["msgres"], set: async (v) => { L0["msgres"] = v; }, local: true });
    if ($.truthy($.eq((await $.wv([$t13], "msgres", { get: async () => L0["msgres"], set: async (v) => { L0["msgres"] = v; }, local: true }, false)), (await $.wv([$t13], "IDYES", C, false))))) {
      await $.stmt((await $.mcall((await $.wv([$t13], "CM_ADMIN", C, false)), "CallProcedure", ["grmdelgroup", [(await $.mv((await $.wv([$t13], "GroupsDataSetID", C, false)), "AsVariant"))]])));
      await $.stmt((await $.wcall([$t13], "RefreshDataSet", [(await $.wv([$t13], "GroupsDataSet", C, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMain", "GroupsDBGrCellClick", async function GroupsDBGrCellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  {
    const $t14 = (await $.wobj(C, "admDM"));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumnEh"]});
  U.method("TfrmMain", "UserAddInGroupClick", async function UserAddInGroupClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.wobj(C, "admDM"));
    const $t16 = (await $.wv([$t15], "frmGroupUsers", C, false));
    const $t17 = (await $.wv([$t15, $t16], "GroupUsersGrid", C, false));
    await $.stmt((await $.wcall([$t15, $t16, $t17], "RefreshDataSet", [(await $.wv([$t15, $t16, $t17], "GrMasterUsers", C, false))], C)));
    await $.stmt((await $.wcall([$t15, $t16, $t17], "RefreshDataSet", [(await $.wv([$t15, $t16, $t17], "GrSlaveUsers", C, false))], C)));
    await $.stmt((await $.wcall([$t15, $t16, $t17], "RefreshDataSet", [(await $.wv([$t15, $t16, $t17], "GrNeutralUsers", C, false))], C)));
    await $.mcall((await $.wv([$t15, $t16, $t17], "GrMasterUsers", C, false)), "FindFirst", []);
    await $.mcall((await $.wv([$t15, $t16, $t17], "GrSlaveUsers", C, false)), "FindFirst", []);
    await $.mcall((await $.wv([$t15, $t16, $t17], "GrNeutralUsers", C, false)), "FindFirst", []);
    { const $t18 = $.sub((await $.wv([$t15, $t16, $t17], "RowCount", C, false)), 1);
      await $.wset([$t15, $t16, $t17], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t19 = true;
      for (;;) {
        if (!$t19) { await $.wset([$t15, $t16, $t17], "i", $.succ((await $.wv([$t15, $t16, $t17], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t19 = false;
        if (!($.ord((await $.wv([$t15, $t16, $t17], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t18))) break;
        { const $t20 = await $.iset((await $.wv([$t15, $t16, $t17], "Cells", C, false)), [0, (await $.wv([$t15, $t16, $t17], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.wv([$t15, $t16, $t17], "EmptyStr", C, false))); if ($t20 !== undefined) { await $.wset([$t15, $t16, $t17], "Cells", $t20, C); } }
        { const $t21 = await $.iset((await $.wv([$t15, $t16, $t17], "Cells", C, false)), [1, (await $.wv([$t15, $t16, $t17], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.wv([$t15, $t16, $t17], "EmptyStr", C, false))); if ($t21 !== undefined) { await $.wset([$t15, $t16, $t17], "Cells", $t21, C); } }
        { const $t22 = await $.iset((await $.wv([$t15, $t16, $t17], "Cells", C, false)), [2, (await $.wv([$t15, $t16, $t17], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.wv([$t15, $t16, $t17], "EmptyStr", C, false))); if ($t22 !== undefined) { await $.wset([$t15, $t16, $t17], "Cells", $t22, C); } }
        await $.tick();
      }
    }
    await $.wset([$t15, $t16, $t17], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
    while ($.truthy($.not((await $.mv((await $.wv([$t15, $t16, $t17], "GrMasterUsers", C, false)), "Eof"))))) {
      if ($.truthy($.lt((await $.wv([$t15, $t16, $t17], "RowCount", C, false)), $.add((await $.wv([$t15, $t16, $t17], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)))) {
        await $.wset([$t15, $t16, $t17], "RowCount", $.add((await $.wv([$t15, $t16, $t17], "RowCount", C, false)), 1), C);
      }
      { const $t23 = await $.iset((await $.wv([$t15, $t16, $t17], "Cells", C, false)), [0, (await $.wv([$t15, $t16, $t17], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.mv((await $.wv([$t15, $t16, $t17], "GrMasterUsersNAME", C, false)), "AsString"))); if ($t23 !== undefined) { await $.wset([$t15, $t16, $t17], "Cells", $t23, C); } }
      await $.stmt((await $.wcall([$t15, $t16, $t17], "inc", [$.ref(async () => (await $.wv([$t15, $t16, $t17], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), async ($t24) => { await $.wset([$t15, $t16, $t17], "i", $t24, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); })], C)));
      await $.mcall((await $.wv([$t15, $t16, $t17], "GrMasterUsers", C, false)), "Next", []);
      await $.tick();
    }
    await $.wset([$t15, $t16, $t17], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
    while ($.truthy($.not((await $.mv((await $.wv([$t15, $t16, $t17], "GrSlaveUsers", C, false)), "Eof"))))) {
      if ($.truthy($.lt((await $.wv([$t15, $t16, $t17], "RowCount", C, false)), $.add((await $.wv([$t15, $t16, $t17], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)))) {
        await $.wset([$t15, $t16, $t17], "RowCount", $.add((await $.wv([$t15, $t16, $t17], "RowCount", C, false)), 1), C);
      }
      { const $t25 = await $.iset((await $.wv([$t15, $t16, $t17], "Cells", C, false)), [1, (await $.wv([$t15, $t16, $t17], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.mv((await $.wv([$t15, $t16, $t17], "GrSlaveUsersNAME", C, false)), "AsString"))); if ($t25 !== undefined) { await $.wset([$t15, $t16, $t17], "Cells", $t25, C); } }
      await $.stmt((await $.wcall([$t15, $t16, $t17], "inc", [$.ref(async () => (await $.wv([$t15, $t16, $t17], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), async ($t26) => { await $.wset([$t15, $t16, $t17], "i", $t26, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); })], C)));
      await $.mcall((await $.wv([$t15, $t16, $t17], "GrSlaveUsers", C, false)), "Next", []);
      await $.tick();
    }
    await $.wset([$t15, $t16, $t17], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
    while ($.truthy($.not((await $.mv((await $.wv([$t15, $t16, $t17], "GrNeutralUsers", C, false)), "Eof"))))) {
      if ($.truthy($.lt((await $.wv([$t15, $t16, $t17], "RowCount", C, false)), $.add((await $.wv([$t15, $t16, $t17], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)))) {
        await $.wset([$t15, $t16, $t17], "RowCount", $.add((await $.wv([$t15, $t16, $t17], "RowCount", C, false)), 1), C);
      }
      { const $t27 = await $.iset((await $.wv([$t15, $t16, $t17], "Cells", C, false)), [2, (await $.wv([$t15, $t16, $t17], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.mv((await $.wv([$t15, $t16, $t17], "GrNeutralUsersNAME", C, false)), "AsString"))); if ($t27 !== undefined) { await $.wset([$t15, $t16, $t17], "Cells", $t27, C); } }
      await $.stmt((await $.wcall([$t15, $t16, $t17], "inc", [$.ref(async () => (await $.wv([$t15, $t16, $t17], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), async ($t28) => { await $.wset([$t15, $t16, $t17], "i", $t28, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); })], C)));
      await $.mcall((await $.wv([$t15, $t16, $t17], "GrNeutralUsers", C, false)), "Next", []);
      await $.tick();
    }
    await $.stmt((await $.wcall([$t15, $t16, $t17], "ReinitializeRows", [(await $.wv([$t15, $t16, $t17], "GroupUsersGrid", C, false))], C)));
    await $.stmt($.wcall([$t15, $t16, $t17], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMain", "actCloseExecute", async function actCloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMain", "Istifadeciyekreditmutexessisininredakteetmekhuququvermk1Click", async function Istifadeciyekreditmutexessisininredakteetmekhuququvermk1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t29 = (await $.wobj(C, "admDM"));
    const $t30 = (await $.wv([$t29], "ExpertDel", C, false));
    await $.stmt((await $.mcall((await $.wv([$t29, $t30], "AdditionDSet", C, false)), "SetVariable", ["usid", (await $.mv((await $.mv((await $.wv([$t29, $t30], "admDM", C, false)), "CredUsersDataSetSYSTEMID")), "AsInteger"))])));
    await $.stmt((await $.mcall((await $.wv([$t29, $t30], "AdditionSrcGRDSet", C, false)), "SetVariable", ["usid", (await $.mv((await $.mv((await $.wv([$t29, $t30], "admDM", C, false)), "CredUsersDataSetSYSTEMID")), "AsInteger"))])));
    await $.stmt((await $.wcall([$t29, $t30], "RefreshDataSet", [(await $.wv([$t29, $t30], "AdditionDSet", C, false))], C)));
    await $.stmt((await $.wcall([$t29, $t30], "RefreshDataSet", [(await $.wv([$t29, $t30], "AdditionSrcGRDSet", C, false))], C)));
    await $.mcall((await $.wv([$t29, $t30], "lAdditionGrants", C, false)), "Open", []);
    await $.mcall((await $.wv([$t29, $t30], "AUserGrants", C, false)), "Open", []);
    await $.mcall((await $.wv([$t29, $t30], "ExpertDel", C, false)), "showmodal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
