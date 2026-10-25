// Generated from AccountPropertiesImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AccountPropertiesImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Buttons", "ExtCtrls", "StdCtrls", "ComCtrls", "Oracledata", "Db", "DBCtrls", "Mask", "AccountDataModuleImpl", "sboapiDataModuleImpl", "AccountImpl", "AccountFlagsImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TAccountPropertiesForm", "TForm", {"accountgb": {"name": "AccountGB", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}, "dbeditaccno": {"name": "DBEditAccNo", "type": "TDBEdit"}, "dbeditcurrid": {"name": "DBEditCurrID", "type": "TDBEdit"}, "dblookupcurr": {"name": "DBLookupCurr", "type": "TDBLookupComboBox"}, "dbeditbalance1": {"name": "DBEditBalance1", "type": "TDBEdit"}, "dblookupbalance1": {"name": "DBLookupBalance1", "type": "TDBLookupComboBox"}, "dbeditcustid": {"name": "DBEditCustID", "type": "TDBEdit"}, "dblookupcust": {"name": "DBLookupCust", "type": "TDBLookupComboBox"}, "dtpopendate": {"name": "DTPOpenDate", "type": "TDateTimePicker"}, "dblookuppairacc": {"name": "DBLookupPairAcc", "type": "TDBLookupComboBox"}, "dbeditlimit": {"name": "DBEditLimit", "type": "TDBEdit"}, "dblookupsimotchet": {"name": "DBLookupSimotchet", "type": "TDBLookupComboBox"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "dbeditaccname": {"name": "DBEditAccName", "type": "TDBEdit"}, "accountflagsgb": {"name": "AccountFlagsGB", "type": "TGroupBox"}, "button3": {"name": "Button3", "type": "TButton"}, "buttoncommit": {"name": "ButtonCommit", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "daystartstategb": {"name": "DayStartStateGB", "type": "TGroupBox"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "dbeditbalance2": {"name": "DBEditBalance2", "type": "TDBEdit"}, "dblookupbalance2": {"name": "DBLookupBalance2", "type": "TDBLookupComboBox"}, "label11": {"name": "Label11", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label18": {"name": "Label18", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset2id": {"name": "OracleDataSet2ID", "type": "TFloatField"}, "oracledataset2code": {"name": "OracleDataSet2CODE", "type": "TWideStringField"}, "oracledataset2name": {"name": "OracleDataSet2NAME", "type": "TWideStringField"}, "oracledataset2filialid": {"name": "OracleDataSet2FILIALID", "type": "TFloatField"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("AccountPropertiesForm", null, "TAccountPropertiesForm");
  });
  U.method("TAccountPropertiesForm", "ButtonCommitClick", async function ButtonCommitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "acc_number": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "out_accdatamodule")), "Account"));
    if ($.truthy($.in_((await $.wv([$t1], "State", C, false)), [(await $.wv([$t1], "dsInsert", C, false)), (await $.wv([$t1], "dsEdit", C, false))]))) {
      await $.mset((await $.wcall([$t1], "FieldByName", ["open_dat"], C)), "AsDateTime", (await $.wcall([$t1], "Int", [(await $.mv((await $.wv([$t1], "DTPOpenDate", C, false)), "DateTime"))], C)));
      await $.stmt($.wcall([$t1], "Post", [], C));
    }
  }
  await $.stmt($.call(C, "Close", []));
  L0["acc_number"] = (await $.mv((await $.v(C, "DBEditAccNo")), "Text"));
  {
    const $t2 = (await $.mv((await $.v(C, "Out_accdatamodule")), "Account"));
    await $.stmt($.wcall([$t2], "CloseAll", [], C));
    await $.stmt($.wcall([$t2], "Open", [], C));
    await $.stmt((await $.wcall([$t2], "Locate", ["ACC_NO", (await $.wv([$t2], "acc_number", { get: async () => L0["acc_number"], set: async (v) => { L0["acc_number"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLookupSimotchet")), "KeyValue", 0);
  if ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "out_accdatamodule")), "Customers")), "Active"))))) {
    await $.mcall((await $.mv((await $.v(C, "out_accdatamodule")), "Customers")), "Open", []);
  }
  {
    const $t3 = (await $.v(C, "AccountForm"));
    const $t4 = (await $.wv([$t3], "out_accdatamodule", C, false));
    if ($.truthy($.eq((await $.wv([$t3, $t4], "OperationMode", C, false)), (await $.wv([$t3, $t4], "omInsert", C, false))))) {
      await $.mset((await $.wv([$t3, $t4], "DTPOpenDate", C, false)), "DateTime", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Sysdat", C, false)), "FieldByName", ["Tek_dat"])), "AsDateTime")));
    } else {
      await $.mset((await $.wv([$t3, $t4], "DTPOpenDate", C, false)), "DateTime", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Account", C, false)), "FieldByName", ["open_dat"])), "AsDateTime")));
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t3, $t4], "Customers", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t3, $t4], "Customers", C, false)), "Open", []);
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t3, $t4], "PairAccount", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t3, $t4], "PairAccount", C, false)), "Open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "out_accdatamodule"));
    const $t6 = (await $.wv([$t5], "Account", C, false));
    if ($.truthy($.in_((await $.wv([$t5, $t6], "State", C, false)), [(await $.wv([$t5, $t6], "dsInsert", C, false)), (await $.wv([$t5, $t6], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t5, $t6], "Cancel", [], C));
      await $.stmt($.wcall([$t5, $t6], "RefreshRecord", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TAccountPropertiesForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
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
      const $t7 = L0["sender"];
      await $.stmt((await $.wcall([$t7], "SelectNext", [(await $.wv([$t7], "ActiveControl", C, false)), (await $.wv([$t7], "True", C, false)), (await $.wv([$t7], "True", C, false))], C)));
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
      const $t8 = (await $.v(C, "FormAccFlags"));
      const $t9 = (await $.mv((await $.wv([$t8], "out_accdatamodule", C, false)), "Account"));
      if ($.truthy((await $.and_(($.eq((await $.wv([$t8, $t9], "ShowModal", C, false)), (await $.wv([$t8, $t9], "mrOk", C, false)))), async () => ($.in_((await $.wv([$t8, $t9], "State", C, false)), [(await $.wv([$t8, $t9], "dsInsert", C, false)), (await $.wv([$t8, $t9], "dsEdit", C, false))])))))) {
        await $.mset((await $.wcall([$t8, $t9], "FieldByName", ["Tipacc"], C)), "AsString", (await $.wv([$t8, $t9], "FlagMap", C, false)));
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
    const $t10 = (await $.v(C, "out_accdatamodule"));
    await $.stmt((await $.wcall([$t10], "Refresh_", ["Account"], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sim_otcet": null};
  await $.fixArgs(L0, ["sender"]);
  L0["c_name"] = "GenerateAccountNumber";
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupSimotchet")), "KeyValue")), 0))) {
    L0["sim_otcet"] = 0;
  } else {
    L0["sim_otcet"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "out_accdatamodule")), "Account")), "FieldByName", ["SIM_OTCET"])), "AsVariant"));
  }
  {
    const $t11 = (await $.v(C, "out_accdatamodule"));
    const $t12 = (await $.wv([$t11], "Account", C, false));
    if ($.truthy($.in_((await $.wv([$t11, $t12], "State", C, false)), [(await $.wv([$t11, $t12], "dsInsert", C, false)), (await $.wv([$t11, $t12], "dsEdit", C, false))]))) {
      await $.mset((await $.wcall([$t11, $t12], "FieldByName", ["acc_no"], C)), "AsString", (await $.mcall((await $.wv([$t11, $t12], "OUT_SBOP", C, false)), "CallStringFunction", [(await $.wv([$t11, $t12], "c_name", { get: async () => L0["c_name"], set: async (v) => { L0["c_name"] = v; }, local: true }, false)), ["BalCn", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["bal_cn1"], C)), "AsString")), "CurrencyID", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["val_acc"], C)), "AsString")), "CustomerID", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["kli_id"], C)), "AsString")), "BranchID", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["filial"], C)), "AsString")), "BalCN2", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["bal_cn2"], C)), "AsString")), "AnalitKod", (await $.wv([$t11, $t12], "SIM_OTCET", { get: async () => L0["sim_otcet"], set: async (v) => { L0["sim_otcet"] = v; }, local: true }, false))]])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "ButtonCancelClick", async function ButtonCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "DBEdit1KeyPress", async function DBEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("A","Z"), ...$.range("a","z"), ...$.range("0","9"), "\b", "/", "-"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountPropertiesForm", "DBEditAccNoKeyDown", async function DBEditAccNoKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  return U;
}
