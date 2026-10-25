// Generated from AccessSelectFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AccessSelectFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "StdCtrls", "ExtCtrls", "ActnList", "Db", "OracleData", "SBSecurity", "CheckLst", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TAccessSelectForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "accept": {"name": "Accept", "type": "TAction"}, "cancel": {"name": "Cancel", "type": "TAction"}, "accessdata": {"name": "AccessData", "type": "TOracleDataSet"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "accessdataid": {"name": "AccessDataID", "type": "TFloatField"}, "accesscb": {"name": "AccessCB", "type": "TCheckListBox"}, "accessdataname": {"name": "AccessDataNAME", "type": "TWideStringField"}, "accessdatadescription": {"name": "AccessDataDESCRIPTION", "type": "TWideStringField"}, "fcommited": {"name": "FCommited", "type": "Boolean"}, "fsid": {"name": "FSid", "type": "Integer"}, "flinkid": {"name": "FLinkID", "type": "Integer"}, "faddaccess": {"name": "FAddAccess", "type": "TAddAccessEvent"}}, {"commited": {"name": "Commited", "read": "FCommited"}, "onaddaccess": {"name": "OnAddAccess", "read": "FAddAccess", "write": "FAddAccess"}});
  U.init(async () => {
    U.var_("AccessSelectForm", null, "TAccessSelectForm");
  });
  U.method("TAccessSelectForm", "ViewPermissions", async function ViewPermissions(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sid": $.copyArg(p0), "linkid": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["sid", "linkid"]);
  await $.set(C, "FCommited", false);
  await $.set(C, "FSid", L0["sid"]);
  await $.set(C, "FLinkID", L0["linkid"]);
  {
    const $t1 = (await $.v(C, "AccessData"));
    await $.stmt($.wcall([$t1], "Close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["SID", (await $.wv([$t1], "FSid", C, false))], C)));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["LinkID", (await $.wv([$t1], "FLinkID", C, false))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  await $.stmt($.call(C, "ShowModal", []));
  L0["result"] = (await $.v(C, "FCommited"));
  return L0.result;
}, {"params": ["Sid", "LinkID"], "kind": "function", "ptypes": ["TSid", "Integer"]});
  U.method("TAccessSelectForm", "AcceptExecute", async function AcceptExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FCommited", true);
  {
    const $t2 = (await $.v(C, "AccessCB"));
    { const $t3 = $.sub((await $.mv((await $.wv([$t2], "Items", C, false)), "Count")), 1);
      await $.wset([$t2], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
      let $t4 = true;
      for (;;) {
        if (!$t4) { await $.wset([$t2], "Index", $.succ((await $.wv([$t2], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
        $t4 = false;
        if (!($.ord((await $.wv([$t2], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t3))) break;
        if ($.truthy((await $.idx((await $.wv([$t2], "Checked", C, false)), [(await $.wv([$t2], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))])))) {
          {
            const $t5 = (await $.wv([$t2], "AccessData", C, false));
            await $.wset([$t2, $t5], "RecNo", (await $.wv([$t2, $t5], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), C);
            await $.stmt((await $.wcall([$t2, $t5], "AddAccess", [(await $.mv((await $.wv([$t2, $t5], "AccessDataID", C, false)), "AsInteger"))], C)));
          }
        }
        await $.tick();
      }
    }
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccessSelectForm", "CancelExecute", async function CancelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccessSelectForm", "AccessDataAfterOpen", async function AccessDataAfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t6 = L0["dataset"];
    const $t7 = (await $.mv((await $.wv([$t6], "AccessCB", C, false)), "Items"));
    await $.stmt($.wcall([$t6, $t7], "First", [], C));
    while ($.truthy($.not((await $.wv([$t6, $t7], "Eof", C, false))))) {
      await $.stmt((await $.wcall([$t6, $t7], "Add", [(await $.mv((await $.wv([$t6, $t7], "AccessDataDESCRIPTION", C, false)), "Value"))], C)));
      await $.stmt($.wcall([$t6, $t7], "Next", [], C));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TAccessSelectForm", "AddAccess", async function AddAccess(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"accessid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["accessid"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FAddAccess"))])))) {
    await $.stmt((await $.call(C, "FAddAccess", [Self, L0["accessid"]])));
  }
  return L0.result;
}, {"params": ["AccessID"], "kind": "procedure", "ptypes": ["Integer"]});
  return U;
}
