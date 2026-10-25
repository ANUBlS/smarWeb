// Generated from uMsgSettings.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("uMsgSettings", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Grids", "DBGrids", "StdCtrls", "ExtCtrls", "DBCtrls", "Oracle", "sboapiDataModuleImpl", "uMsgAddEdit", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TfrmMsgSettings", "TForm", {"messages": {"name": "Messages", "type": "TDataSource"}, "odsmessages": {"name": "ODSMessages", "type": "TOracleDataSet"}, "odsmessagesid": {"name": "ODSMessagesID", "type": "TFloatField"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "users": {"name": "Users", "type": "TDataSource"}, "odsusers": {"name": "ODSUsers", "type": "TOracleDataSet"}, "odsusersid": {"name": "ODSUsersID", "type": "TFloatField"}, "odsusersctime": {"name": "ODSUsersCTIME", "type": "TDateTimeField"}, "sb_msg": {"name": "SB_MSG", "type": "TOraclePackage"}, "odsmessagesname": {"name": "ODSMessagesNAME", "type": "TWideStringField"}, "odsmessagesmsg": {"name": "ODSMessagesMSG", "type": "TWideStringField"}, "odsmessagesusname": {"name": "ODSMessagesUSNAME", "type": "TWideStringField"}, "odsusersname": {"name": "ODSUsersNAME", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("frmMsgSettings", null, "TfrmMsgSettings");
  });
  U.method("TfrmMsgSettings", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMsgSettings", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODSMessages")), "Close", []);
  await $.mcall((await $.v(C, "ODSMessages")), "Open", []);
  await $.mcall((await $.v(C, "ODSUsers")), "Close", []);
  await $.mcall((await $.v(C, "ODSUsers")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMsgSettings", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "frmMsgAddEdit"))]))))) {
    await $.set(C, "frmMsgAddEdit", (await $.mcall((await $.v(C, "TfrmMsgAddEdit")), "Create", [Self])));
  }
  {
    const $t1 = (await $.v(C, "frmMsgAddEdit"));
    const $t2 = (await $.wv([$t1], "ODSMessages", C, false));
    await $.stmt($.wcall([$t1, $t2], "Insert", [], C));
    await $.stmt($.wcall([$t1, $t2], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMsgSettings", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "frmMsgAddEdit"))]))))) {
    await $.set(C, "frmMsgAddEdit", (await $.mcall((await $.v(C, "TfrmMsgAddEdit")), "Create", [Self])));
  }
  {
    const $t3 = (await $.v(C, "frmMsgAddEdit"));
    const $t4 = (await $.wv([$t3], "ODSMessages", C, false));
    await $.stmt($.wcall([$t3, $t4], "Edit", [], C));
    await $.stmt($.wcall([$t3, $t4], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMsgSettings", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SB_MSG")), "CallProcedure", ["deletemsgtype", [(await $.mv((await $.v(C, "ODSMessagesID")), "AsVariant"))]])));
  await $.mcall((await $.v(C, "ODSMessages")), "Close", []);
  await $.mcall((await $.v(C, "ODSMessages")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
