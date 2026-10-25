// Generated from out_AccountPropertiesImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("out_AccountPropertiesImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "ComCtrls", "DBCtrls", "Mask", "Buttons", "Db", "AccountDataModuleImpl", "AccountImpl", "AccountFlagsImpl"]);
  const C = [U];
  U.defClass("TAccountPropertiesForm", "TForm", {"accountgb": {"name": "AccountGB", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "dbeditaccno": {"name": "DBEditAccNo", "type": "TDBEdit"}, "dbeditcurrid": {"name": "DBEditCurrID", "type": "TDBEdit"}, "dblookupcurr": {"name": "DBLookupCurr", "type": "TDBLookupComboBox"}, "dbeditbalance1": {"name": "DBEditBalance1", "type": "TDBEdit"}, "dblookupbalance1": {"name": "DBLookupBalance1", "type": "TDBLookupComboBox"}, "dbeditcustid": {"name": "DBEditCustID", "type": "TDBEdit"}, "dblookupcust": {"name": "DBLookupCust", "type": "TDBLookupComboBox"}, "dtpopendate": {"name": "DTPOpenDate", "type": "TDateTimePicker"}, "label7": {"name": "Label7", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "dblookuppairacc": {"name": "DBLookupPairAcc", "type": "TDBLookupComboBox"}, "dbeditlimit": {"name": "DBEditLimit", "type": "TDBEdit"}, "dblookupsimotchet": {"name": "DBLookupSimotchet", "type": "TDBLookupComboBox"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "dbeditaccname": {"name": "DBEditAccName", "type": "TDBEdit"}, "buttoncommit": {"name": "ButtonCommit", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "daystartstategb": {"name": "DayStartStateGB", "type": "TGroupBox"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "accountflagsgb": {"name": "AccountFlagsGB", "type": "TGroupBox"}, "button3": {"name": "Button3", "type": "TButton"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}}, {});
  U.init(async () => {
    U.var_("AccountPropertiesForm", null, "TAccountPropertiesForm");
  });
  U.method("TAccountPropertiesForm", "ButtonCommitClick", async function ButtonCommitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "AccDataModule")), "Account"));
    if ($.truthy($.in_((await $.wv([$t1], "State", C, false)), [(await $.wv([$t1], "dsInsert", C, false)), (await $.wv([$t1], "dsEdit", C, false))]))) {
      await $.mset((await $.wcall([$t1], "FieldByName", ["open_dat"], C)), "AsDateTime", (await $.wcall([$t1], "Int", [(await $.mv((await $.wv([$t1], "DTPOpenDate", C, false)), "DateTime"))], C)));
      await $.stmt($.wcall([$t1], "Post", [], C));
    }
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "AccountForm"));
    const $t3 = (await $.wv([$t2], "AccDataModule", C, false));
    if ($.truthy($.eq((await $.wv([$t2, $t3], "OperationMode", C, false)), (await $.wv([$t2, $t3], "omInsert", C, false))))) {
      await $.mset((await $.wv([$t2, $t3], "DTPOpenDate", C, false)), "DateTime", (await $.mv((await $.mcall((await $.wv([$t2, $t3], "Sysdat", C, false)), "FieldByName", ["Tek_dat"])), "AsDateTime")));
    } else {
      await $.mset((await $.wv([$t2, $t3], "DTPOpenDate", C, false)), "DateTime", (await $.mv((await $.mcall((await $.wv([$t2, $t3], "Account", C, false)), "FieldByName", ["open_dat"])), "AsDateTime")));
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t2, $t3], "Customers", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t2, $t3], "Customers", C, false)), "Open", []);
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t2, $t3], "PairAccount", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t2, $t3], "PairAccount", C, false)), "Open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "AccDataModule"));
    const $t5 = (await $.wv([$t4], "Account", C, false));
    if ($.truthy($.in_((await $.wv([$t4, $t5], "State", C, false)), [(await $.wv([$t4, $t5], "dsInsert", C, false)), (await $.wv([$t4, $t5], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t4, $t5], "Cancel", [], C));
      await $.stmt($.wcall([$t4, $t5], "RefreshRecord", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TAccountPropertiesForm", "ButtonCancelClick", async function ButtonCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TAccountPropertiesForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    {
      const $t6 = L0["sender"];
      await $.stmt((await $.wcall([$t6], "SelectNext", [(await $.wv([$t6], "ActiveControl", C, false)), (await $.wv([$t6], "True", C, false)), (await $.wv([$t6], "True", C, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountPropertiesForm", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormAccFlags", (await $.mcall((await $.v(C, "TFormAccFlags")), "Create", [Self])));
  try {
    {
      const $t7 = (await $.v(C, "FormAccFlags"));
      const $t8 = (await $.mv((await $.wv([$t7], "AccDataModule", C, false)), "Account"));
      if ($.truthy((await $.and_(($.eq((await $.wv([$t7, $t8], "ShowModal", C, false)), (await $.wv([$t7, $t8], "mrOk", C, false)))), async () => ($.in_((await $.wv([$t7, $t8], "State", C, false)), [(await $.wv([$t7, $t8], "dsInsert", C, false)), (await $.wv([$t7, $t8], "dsEdit", C, false))])))))) {
        await $.mset((await $.wcall([$t7, $t8], "FieldByName", ["Tipacc"], C)), "AsString", (await $.wv([$t7, $t8], "FlagMap", C, false)));
      }
    }
  } finally {
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FormAccFlags"))])))) {
      await $.mcall((await $.v(C, "FormAccFlags")), "Release", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.v(C, "AccDataModule"));
    await $.stmt((await $.wcall([$t9], "Refresh_", ["Account"], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["c_name"] = "GenerateAccountNumber";
  {
    const $t10 = (await $.v(C, "AccDataModule"));
    const $t11 = (await $.wv([$t10], "Account", C, false));
    if ($.truthy($.in_((await $.wv([$t10, $t11], "State", C, false)), [(await $.wv([$t10, $t11], "dsInsert", C, false)), (await $.wv([$t10, $t11], "dsEdit", C, false))]))) {
      await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["acc_no"], C)), "AsString", (await $.mcall((await $.wv([$t10, $t11], "OUT_SBOP", C, false)), "CallStringFunction", [(await $.wv([$t10, $t11], "c_name", { get: async () => L0["c_name"], set: async (v) => { L0["c_name"] = v; }, local: true }, false)), ["BalCn", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["bal_cn1"], C)), "AsString")), "CurrencyID", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["val_acc"], C)), "AsString")), "CustomerID", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["kli_id"], C)), "AsString")), "BranchID", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["filial"], C)), "AsString"))]])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
