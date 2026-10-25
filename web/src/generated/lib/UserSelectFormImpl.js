// Generated from UserSelectFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UserSelectFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "ImgList", "StdCtrls", "ExtCtrls", "Db", "OracleData", "ActnList", "SBSecurity", "SBSrvIntf"]);
  const C = [U];
  U.defClass("TUserSelectForm", "TForm", {"usergb": {"name": "UserGB", "type": "TGroupBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "usersgrid": {"name": "UsersGrid", "type": "TDBGrid"}, "users": {"name": "Users", "type": "TDataSource"}, "usersdata": {"name": "UsersData", "type": "TOracleDataSet"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "accept": {"name": "Accept", "type": "TAction"}, "cancel": {"name": "Cancel", "type": "TAction"}, "usersdataid": {"name": "UsersDataID", "type": "TFloatField"}, "usersdatatype": {"name": "UsersDataTYPE", "type": "TFloatField"}, "usersdataname": {"name": "UsersDataNAME", "type": "TWideStringField"}, "fuseradd": {"name": "FUserAdd", "type": "TAddUserEvent"}}, {"onadduser": {"name": "OnAddUser", "read": "FUserAdd", "write": "FUserAdd"}});
  U.init(async () => {
    U.var_("UserSelectForm", null, "TUserSelectForm");
  });
  U.method("TUserSelectForm", "ViewUsers", async function ViewUsers(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sid"]);
  {
    const $t1 = (await $.v(C, "UsersData"));
    await $.stmt($.wcall([$t1], "Close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["SID", (await $.wv([$t1], "Sid", { get: async () => L0["sid"], set: async (v) => { L0["sid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
    if ($.truthy($.eq((await $.wv([$t1], "RecordCount", C, false)), 0))) {
      throw $.raise((await $.mcall((await $.wv([$t1], "ENoDataFound", C, false)), "Create", ["No users to view"])));
    }
  }
  await $.stmt($.call(C, "ShowModal", []));
  return L0.result;
}, {"params": ["Sid"], "kind": "procedure", "ptypes": ["TSid"]});
  U.method("TUserSelectForm", "AddUser", async function AddUser(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"userid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["userid"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FUserAdd"))])))) {
    await $.stmt((await $.call(C, "FUserAdd", [Self, L0["userid"]])));
  }
  return L0.result;
}, {"params": ["UserID"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TUserSelectForm", "AcceptExecute", async function AcceptExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "UsersGrid"));
    { const $t3 = $.sub((await $.mv((await $.wv([$t2], "SelectedRows", C, false)), "Count")), 1);
      await $.wset([$t2], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
      let $t4 = true;
      for (;;) {
        if (!$t4) { await $.wset([$t2], "Index", $.succ((await $.wv([$t2], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
        $t4 = false;
        if (!($.ord((await $.wv([$t2], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t3))) break;
        await $.stmt((await $.mcall((await $.wv([$t2], "UsersData", C, false)), "GotoBookmark", [(await $.wcall([$t2], "Pointer", [(await $.idx((await $.wv([$t2], "SelectedRows", C, false)), [(await $.wv([$t2], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))])));
        await $.stmt((await $.wcall([$t2], "AddUser", [(await $.mv((await $.mcall((await $.wv([$t2], "UsersData", C, false)), "FieldByName", ["ID"])), "AsInteger"))], C)));
        await $.tick();
      }
    }
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TUserSelectForm", "CancelExecute", async function CancelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TUserSelectForm", "UsersGridDrawColumnCell", async function UsersGridDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "bar": null};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  {
    const $t5 = L0["sender"];
    await $.stmt((await $.wcall([$t5], "DefaultDrawColumnCell", [(await $.wv([$t5], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t5], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t5], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t5], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
    if ($.truthy($.eq((await $.wv([$t5], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 0))) {
      await $.wset([$t5], "Bar", (await $.wv([$t5], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t5], "inc", [$.ref(async () => (await $.mv((await $.wv([$t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t6) => { await $.mset((await $.wv([$t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t6); }), 10], C)));
      await $.stmt((await $.wcall([$t5], "inc", [$.ref(async () => (await $.mv((await $.wv([$t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t7) => { await $.mset((await $.wv([$t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t7); })], C)));
      await $.mset((await $.wv([$t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 18));
      await $.mset((await $.mv((await $.wv([$t5], "Canvas", C, false)), "Brush")), "Color", (await $.wv([$t5], "clWhite", C, false)));
      await $.stmt((await $.mcall((await $.wv([$t5], "Canvas", C, false)), "FillRect", [(await $.wv([$t5], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
      await $.stmt((await $.mcall((await $.wv([$t5], "ImageList1", C, false)), "Draw", [(await $.wv([$t5], "Canvas", C, false)), $.add((await $.mv((await $.wv([$t5], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), 10), $.add((await $.mv((await $.wv([$t5], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 1), $.add($.sub((await $.mv((await $.mcall((await $.mv((await $.wv([$t5], "DataSource", C, false)), "DataSet")), "FieldByName", ["type#"])), "AsInteger")), 1), 2)])));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  return U;
}
