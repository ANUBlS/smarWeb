// Generated from AccountPropertiesImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AccountPropertiesImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "ComCtrls", "DBCtrls", "Mask", "Buttons", "Db", "HintBox", "sboapiDataModuleImpl", "InsDataModule"]);
  const C = [U];
  U.defClass("TAccountPropertiesForm", "TForm", {"accountgb": {"name": "AccountGB", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "dbeditaccno": {"name": "DBEditAccNo", "type": "TDBEdit"}, "dbeditcurrid": {"name": "DBEditCurrID", "type": "TDBEdit"}, "dblookupcurr": {"name": "DBLookupCurr", "type": "TDBLookupComboBox"}, "dbeditbalance1": {"name": "DBEditBalance1", "type": "TDBEdit"}, "dblookupbalance1": {"name": "DBLookupBalance1", "type": "TDBLookupComboBox"}, "dtpopendate": {"name": "DTPOpenDate", "type": "TDateTimePicker"}, "label7": {"name": "Label7", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "dblookuppairacc": {"name": "DBLookupPairAcc", "type": "TDBLookupComboBox"}, "dbeditlimit": {"name": "DBEditLimit", "type": "TDBEdit"}, "dblookupsimotchet": {"name": "DBLookupSimotchet", "type": "TDBLookupComboBox"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "dbeditaccname": {"name": "DBEditAccName", "type": "TDBEdit"}, "daystartstategb": {"name": "DayStartStateGB", "type": "TGroupBox"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "hberrorbox": {"name": "hbErrorBox", "type": "THintBox"}, "btncancel": {"name": "btnCancel", "type": "TBitBtn"}, "btnok": {"name": "btnOk", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("AccountPropertiesForm", null, "TAccountPropertiesForm");
  });
  U.method("TAccountPropertiesForm", "SaveAccData", async function SaveAccData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false, "dsstate": null};
  L0["result"] = true;
  {
    const $t1 = (await $.v(C, "InsDataMod"));
    const $t2 = (await $.wv([$t1], "ODSAccount", C, false));
    try {
      await $.wset([$t1, $t2], "dsState", (await $.wv([$t1, $t2], "State", C, false)), { get: async () => L0["dsstate"], set: async (v) => { L0["dsstate"] = v; }, local: true });
      await $.stmt($.wcall([$t1, $t2], "Post", [], C));
      await $.stmt($.wcall([$t1, $t2], "RefreshRecord", [], C));
      if ($.truthy($.eq((await $.wv([$t1, $t2], "dsState", { get: async () => L0["dsstate"], set: async (v) => { L0["dsstate"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "dsInsert", C, false))))) {
        await $.stmt((await $.mcall((await $.wv([$t1, $t2], "OPCOMMON", C, false)), "CallProcedure", ["add_lazyrest", [(await $.mv((await $.mcall((await $.wv([$t1, $t2], "ODSAccount", C, false)), "FieldByName", ["ID"])), "asFloat"))]])));
      }
    } catch ($t3) {
      $.rethrowControl($t3);
      if ($.excIs($t3, "Exception")) {
        L0["e"] = $.exc($t3);
        await $.stmt((await $.mcall((await $.wv([$t1, $t2], "hbErrorBox", C, false)), "ShowMessage", [(await $.mv((await $.wv([$t1, $t2], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message"))])));
        await $.wset([$t1, $t2], "Result", (await $.wv([$t1, $t2], "False", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      }
      else { throw $t3; }
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountPropertiesForm", "ButtonCommitClick", async function ButtonCommitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "InsDataMod"));
    if ($.truthy($.in_((await $.mv((await $.wv([$t4], "ODSAccount", C, false)), "State")), [(await $.wv([$t4], "dsEdit", C, false)), (await $.wv([$t4], "dsInsert", C, false))]))) {
      await $.mset((await $.wv([$t4], "ODSAccountOPEN_DAT", C, false)), "Value", (await $.wcall([$t4], "Int", [(await $.mv((await $.wv([$t4], "DTPOpenDate", C, false)), "Date"))], C)));
    }
  }
  if ($.truthy((await $.v(C, "SaveAccData")))) {
    await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "ButtonCancelClick", async function ButtonCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "DBEditAccNoKeyPress", async function DBEditAccNoKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.call(C, "FindNextControl", [(await $.v(C, "ActiveControl")), true, true, false])), "SetFocus", []);
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountPropertiesForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "InsDataMod"));
    if ($.truthy(($.eq((await $.mv((await $.wv([$t5], "ODSAccount", C, false)), "state")), (await $.wv([$t5], "dsEdit", C, false)))))) {
      await $.mset((await $.wv([$t5], "DTPOpenDate", C, false)), "Date", (await $.mv((await $.wv([$t5], "ODSAccountOPEN_DAT", C, false)), "Value")));
    } else {
      await $.mset((await $.wv([$t5], "DTPOpenDate", C, false)), "Date", (await $.wcall([$t5], "getsysdate", [], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
