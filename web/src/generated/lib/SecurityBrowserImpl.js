// Generated from SecurityBrowserImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SecurityBrowserImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Grids", "DBGrids", "StdCtrls", "Db", "DBCGrids", "OracleData", "Oracle", "ExtCtrls", "ImgList", "CheckLst", "ComCtrls", "ToolWin", "ActnList", "DBCtrls", "AccessSelectFormImpl", "SBSecurity", "UserSelectFormImpl", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TSecurityBrowserForm", "TForm", {"sidtoaccess": {"name": "SidToAccess", "type": "TDataSource"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "securityclientsgb": {"name": "SecurityClientsGB", "type": "TGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "securitydetaileddata": {"name": "SecurityDetailedData", "type": "TOracleDataSet"}, "securitydetailedsource": {"name": "SecurityDetailedSource", "type": "TDataSource"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "applychanges": {"name": "ApplyChanges", "type": "TAction"}, "cancelchanges": {"name": "CancelChanges", "type": "TAction"}, "addsecurityclient": {"name": "AddSecurityClient", "type": "TAction"}, "dropsecurityclient": {"name": "DropSecurityClient", "type": "TAction"}, "splitter1": {"name": "Splitter1", "type": "TSplitter"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "addclientaccess": {"name": "AddClientAccess", "type": "TAction"}, "dropclientaccess": {"name": "DropClientAccess", "type": "TAction"}, "securitydetaileddataid": {"name": "SecurityDetailedDataID", "type": "TFloatField"}, "securitydetaileddatalink": {"name": "SecurityDetailedDataLINK", "type": "TFloatField"}, "sidtoaccessdata": {"name": "SidToAccessData", "type": "TOracleDataSet"}, "sidtoaccessdataid": {"name": "SidToAccessDataID", "type": "TFloatField"}, "sidtoaccessdataclient": {"name": "SidToAccessDataCLIENT", "type": "TFloatField"}, "sidtoaccessdatatype": {"name": "SidToAccessDataTYPE", "type": "TFloatField"}, "sidtoaccessdataname": {"name": "SidToAccessDataNAME", "type": "TWideStringField"}, "securitydetaileddatadescription": {"name": "SecurityDetailedDataDESCRIPTION", "type": "TWideStringField"}, "fcommited": {"name": "FCommited", "type": "Boolean"}, "fsid": {"name": "FSid", "type": "Integer"}}, {"commited": {"name": "Commited", "read": "FCommited"}, "sid": {"name": "Sid", "read": "FSid"}});
  U.init(async () => {
    U.var_("SecurityBrowserForm", null, "TSecurityBrowserForm");
  });
  U.method("TSecurityBrowserForm", "View", async function View(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sid": $.copyArg(p0), "readonly": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sid", "readonly"]);
  await $.set(C, "FSid", L0["sid"]);
  {
    const $t1 = (await $.v(C, "SidToAccessData"));
    await $.stmt($.wcall([$t1], "Close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["SID", (await $.wv([$t1], "Sid", { get: async () => L0["sid"], set: async (v) => { L0["sid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  await $.stmt($.call(C, "ShowModal", []));
  return L0.result;
}, {"params": ["Sid", "ReadOnly"], "kind": "procedure", "ptypes": ["Integer", "Boolean"]});
  U.method("TSecurityBrowserForm", "DBGrid1DrawColumnCell", async function DBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "bar": null};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  {
    const $t2 = L0["sender"];
    await $.stmt((await $.wcall([$t2], "DefaultDrawColumnCell", [(await $.wv([$t2], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t2], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t2], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t2], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
    if ($.truthy($.eq((await $.wv([$t2], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 0))) {
      await $.wset([$t2], "Bar", (await $.wv([$t2], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t2], "inc", [$.ref(async () => (await $.mv((await $.wv([$t2], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t3) => { await $.mset((await $.wv([$t2], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t3); }), 10], C)));
      await $.stmt((await $.wcall([$t2], "inc", [$.ref(async () => (await $.mv((await $.wv([$t2], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t4) => { await $.mset((await $.wv([$t2], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t4); })], C)));
      await $.mset((await $.wv([$t2], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t2], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 18));
      await $.mset((await $.mv((await $.wv([$t2], "Canvas", C, false)), "Brush")), "Color", (await $.wv([$t2], "clWhite", C, false)));
      await $.stmt((await $.mcall((await $.wv([$t2], "Canvas", C, false)), "FillRect", [(await $.wv([$t2], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
      await $.stmt((await $.mcall((await $.wv([$t2], "ImageList1", C, false)), "Draw", [(await $.wv([$t2], "Canvas", C, false)), $.add((await $.mv((await $.wv([$t2], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), 10), $.add((await $.mv((await $.wv([$t2], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 1), $.add($.sub((await $.mv((await $.mcall((await $.mv((await $.wv([$t2], "DataSource", C, false)), "DataSet")), "FieldByName", ["type#"])), "AsInteger")), 1), 2)])));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TSecurityBrowserForm", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TSecurityBrowserForm", "AddClientAccessExecute", async function AddClientAccessExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.mcall((await $.v(C, "TAccessSelectForm")), "Create", [Self]));
    try {
      await $.wset([$t5], "OnAddAccess", (await $.wv([$t5], "AddAccess", C, true)), C);
      await $.stmt((await $.wcall([$t5], "ViewPermissions", [(await $.wv([$t5], "Sid", C, false)), (await $.mv((await $.mcall((await $.wv([$t5], "SidToAccessData", C, false)), "FieldByName", ["ID"])), "AsInteger"))], C)));
    } finally {
      await $.stmt($.wcall([$t5], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSecurityBrowserForm", "AddAccess", async function AddAccess(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accessid": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accessid"]);
  {
    const $t6 = (await $.v(C, "SecurityDetailedData"));
    await $.stmt($.wcall([$t6], "Insert", [], C));
    await $.mset((await $.wcall([$t6], "FieldByName", ["ID"], C)), "AsInteger", (await $.wv([$t6], "AccessID", { get: async () => L0["accessid"], set: async (v) => { L0["accessid"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t6], "FieldByName", ["Description"], C)), "AsString", (await $.wcall([$t6], "Sb_GetAccessDescription", [(await $.wv([$t6], "AccessID", { get: async () => L0["accessid"], set: async (v) => { L0["accessid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t6], "Post", [], C));
  }
  return L0.result;
}, {"params": ["Sender", "AccessID"], "kind": "procedure", "ptypes": ["TAccessSelectForm", "Integer"]});
  U.method("TSecurityBrowserForm", "AddUser", async function AddUser(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "userid": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "userid"]);
  {
    const $t7 = (await $.v(C, "SidToAccessData"));
    await $.stmt($.wcall([$t7], "Insert", [], C));
    await $.mset((await $.wcall([$t7], "FieldByName", ["Client#"], C)), "AsInteger", (await $.wv([$t7], "UserID", { get: async () => L0["userid"], set: async (v) => { L0["userid"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t7], "FieldByName", ["NAME"], C)), "AsString", (await $.wcall([$t7], "Sb_GetUserName", [(await $.wv([$t7], "UserID", { get: async () => L0["userid"], set: async (v) => { L0["userid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t7], "Post", [], C));
  }
  return L0.result;
}, {"params": ["Sender", "UserID"], "kind": "procedure", "ptypes": ["TUserSelectForm", "Integer"]});
  U.method("TSecurityBrowserForm", "ApplyChangesExecute", async function ApplyChangesExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.v(C, "SidToAccessData"));
    await $.stmt((await $.wcall([$t8], "ApplyUpdates", [[(await $.wv([$t8], "aaInsert", C, false)), (await $.wv([$t8], "aaUpdate", C, false)), (await $.wv([$t8], "aaDelete", C, false))]], C)));
    await $.stmt($.wcall([$t8], "CommitUpdates", [], C));
  }
  {
    const $t9 = (await $.v(C, "SecurityDetailedData"));
    await $.stmt((await $.wcall([$t9], "ApplyUpdates", [[(await $.wv([$t9], "aaInsert", C, false)), (await $.wv([$t9], "aaUpdate", C, false)), (await $.wv([$t9], "aaDelete", C, false))]], C)));
    await $.stmt($.wcall([$t9], "CommitUpdates", [], C));
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSecurityBrowserForm", "CancelChangesExecute", async function CancelChangesExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.v(C, "SidToAccessData"));
    await $.stmt($.wcall([$t10], "CancelUpdates", [], C));
  }
  {
    const $t11 = (await $.v(C, "SecurityDetailedData"));
    await $.stmt($.wcall([$t11], "CancelUpdates", [], C));
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSecurityBrowserForm", "SecurityDetailedDataApplyRecord", async function SecurityDetailedDataApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "clientid": null, "accessid": null};
  await $.fixArgs(L0, ["sender", "action"]);
  L0["clientid"] = (await $.mv((await $.mcall((await $.v(C, "SidToAccessData")), "FieldByName", ["Client#"])), "AsInteger"));
  L0["accessid"] = (await $.mv((await $.mcall(L0["sender"], "FieldByName", ["ID"])), "AsInteger"));
  await L0["applied"].set(true);
  { const $t12 = L0["action"];
    if ($.eq($t12, "I")) {
      await $.stmt((await $.call(C, "Sb_GrantUserAccess", [(await $.v(C, "Sid")), L0["clientid"], L0["accessid"]])));
    }
    else if ($.eq($t12, "D")) {
      await $.stmt((await $.call(C, "Sb_RevokeUserAccess", [(await $.v(C, "Sid")), L0["clientid"], L0["accessid"]])));
    }
    else {
      await L0["applied"].set(false);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TSecurityBrowserForm", "DropClientAccessExecute", async function DropClientAccessExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "SecurityDetailedData")), "Delete", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSecurityBrowserForm", "AddSecurityClientExecute", async function AddSecurityClientExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.mcall((await $.v(C, "TUserSelectForm")), "Create", [Self]));
    try {
      await $.wset([$t13], "OnAddUser", (await $.wv([$t13], "AddUser", C, true)), C);
      await $.stmt((await $.wcall([$t13], "ViewUsers", [(await $.wv([$t13], "Sid", C, false))], C)));
    } finally {
      await $.stmt($.wcall([$t13], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSecurityBrowserForm", "SidToAccessDataAfterPost", async function SidToAccessDataAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t14 = L0["dataset"];
    await $.stmt((await $.wcall([$t14], "ApplyUpdates", [[(await $.wv([$t14], "aaInsert", C, false)), (await $.wv([$t14], "aaDelete", C, false))]], C)));
    await $.stmt($.wcall([$t14], "CommitUpdates", [], C));
    await $.stmt($.wcall([$t14], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TSecurityBrowserForm", "SidToAccessDataApplyRecord", async function SidToAccessDataApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "action"]);
  await L0["applied"].set(true);
  { const $t15 = L0["action"];
    if ($.eq($t15, "I")) {
      await $.stmt((await $.call(C, "Sb_AddSecurityLink", [(await $.v(C, "Sid")), (await $.mv((await $.mcall(L0["sender"], "FieldByName", ["client#"])), "AsInteger"))])));
    }
    else if ($.eq($t15, "D")) {
      await $.stmt((await $.call(C, "Sb_RemoveSecurityLink", [(await $.mv((await $.mcall(L0["sender"], "FieldByName", ["ID"])), "AsInteger"))])));
    }
    else {
      await L0["applied"].set(false);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TSecurityBrowserForm", "DropSecurityClientExecute", async function DropSecurityClientExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "SidToAccessData")), "Delete", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
