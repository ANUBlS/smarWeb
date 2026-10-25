// Generated from AccountPropertiesForm_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AccountPropertiesForm_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "HintBox", "DBCtrls", "Mask", "ComCtrls", "Db", "OracleData", "ToolWin", "ActnList", "Buttons", "AccountDataModuleImpl", "sboapiDataModuleImpl", "SBCore", "SBAccount", "AccFlagsChangingImpl"]);
  const C = [U];
  U.defClass("TAccountPropertiesForm", "TForm", {"accounts": {"name": "Accounts", "type": "TDataSource"}, "accountsdata": {"name": "AccountsData", "type": "TOracleDataSet"}, "daystartstategb": {"name": "DayStartStateGB", "type": "TGroupBox"}, "label8": {"name": "Label8", "type": "TLabel"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "accountstategb": {"name": "AccountStateGB", "type": "TGroupBox"}, "label10": {"name": "Label10", "type": "TLabel"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "label11": {"name": "Label11", "type": "TLabel"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "accountgb": {"name": "AccountGB", "type": "TGroupBox"}, "accnoedit": {"name": "AccNoEdit", "type": "TDBEdit"}, "curencyidedit": {"name": "CurencyIDEdit", "type": "TDBEdit"}, "curencynamecb": {"name": "CurencyNameCB", "type": "TDBLookupComboBox"}, "saccnamecb": {"name": "SAccNameCB", "type": "TDBLookupComboBox"}, "saccedit": {"name": "SAccEdit", "type": "TDBEdit"}, "customernamecb": {"name": "CustomerNameCB", "type": "TDBLookupComboBox"}, "customeridedit": {"name": "CustomerIDEdit", "type": "TDBEdit"}, "opendateedit": {"name": "OpenDateEdit", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "pairacccb": {"name": "PairAccCB", "type": "TDBLookupComboBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "accountnameedit": {"name": "AccountNameEdit", "type": "TDBEdit"}, "label6": {"name": "Label6", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "accountlimitedit": {"name": "AccountLimitEdit", "type": "TDBEdit"}, "accountflagsgb": {"name": "AccountFlagsGB", "type": "TGroupBox"}, "okbutton": {"name": "OkButton", "type": "TButton"}, "cancelbutton": {"name": "CancelButton", "type": "TButton"}, "label13": {"name": "Label13", "type": "TLabel"}, "reportsymbolcb": {"name": "ReportSymbolCB", "type": "TDBLookupComboBox"}, "errorhint": {"name": "ErrorHint", "type": "THintBox"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "additionalsaccsbutton": {"name": "AdditionalSAccsButton", "type": "TPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "button1": {"name": "Button1", "type": "TButton"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}, "fischanged": {"name": "FIsChanged", "type": "Boolean"}}, {"ischanged": {"name": "IsChanged", "read": "FIsChanged"}});
  U.init(async () => {
    U.var_("AccountPropertiesForm", null, "TAccountPropertiesForm");
  });
  U.method("TAccountPropertiesForm", "OkButtonClick", async function OkButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["checkfields"] = $.fn(async function CheckFields() {
  const L1 = {result: undefined};
  L1["sdefemptyfieldmessage"] = "\"%s\" sahəsinə qiymət daxil olunmayıb";
  L1["showmessage"] = $.fn(async function ShowMessage(p0) {
  const L2 = {"message": $.copyArg(p0), result: undefined};
  await $.fixArgs(L2, ["message"]);
  await $.stmt((await $.mcall((await $.v(C, "ErrorHint")), "ShowMessage", [L2["message"]])));
  $.abort();
  return L2.result;
});
  L1["check"] = $.fn(async function Check(p0, p1, p2) {
  const L2 = {"field": $.copyArg(p0), "message": (p1 === undefined ? (await $.v(C, "sDefEmptyFieldMessage")) : p1), "fieldname": (p2 === undefined ? "" : p2), result: undefined};
  await $.fixArgs(L2, ["field", "message", "fieldname"]);
  if ($.truthy((await $.mv(L2["field"], "IsNull")))) {
    if ($.truthy($.eq(L2["fieldname"], ""))) {
      L2["fieldname"] = (await $.mv(L2["field"], "DisplayName"));
    }
    L2["message"] = (await $.call(C, "Format", [L2["message"], [L2["fieldname"]]]));
    await $.stmt((await $.callv(L1["showmessage"], [L2["message"]])));
  }
  return L2.result;
});
  L1["checkbyname"] = $.fn(async function CheckByName(p0) {
  const L2 = {"fieldname": $.copyArg(p0), result: undefined};
  await $.fixArgs(L2, ["fieldname"]);
  {
    const $t1 = (await $.mv((await $.v(C, "AccountDataModule")), "AccountsData"));
    await $.stmt((await $.wcall([$t1], "Check", [(await $.wcall([$t1], "FieldByName", [(await $.wv([$t1], "FieldName", { get: async () => L2["fieldname"], set: async (v) => { L2["fieldname"] = v; }, local: true }, false))], C))], { get: async () => L1["check"], set: async (v) => { L1["check"] = v; }, local: true })));
  }
  return L2.result;
});
  L1["checkbynames"] = $.fn(async function CheckByNames(p0) {
  const L2 = {"names": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L2, ["names"]);
  { const $t2 = (await $.call(C, "High", [L2["names"]]));
    L2["index"] = (await $.call(C, "Low", [L2["names"]]));
    let $t3 = true;
    for (;;) {
      if (!$t3) { L2["index"] = $.succ(L2["index"], 1); }
      $t3 = false;
      if (!($.ord(L2["index"]) <= $.ord($t2))) break;
      await $.stmt((await $.callv(L1["checkbyname"], [(await $.idx(L2["names"], [L2["index"]]))])));
      await $.tick();
    }
  }
  return L2.result;
});
  await $.stmt((await $.callv(L1["checkbynames"], [["AccNo", "CurrencyID", "SAcc", "CustomerID", "AccName"]])));
  return L1.result;
});
  await $.stmt($.callv(L0["checkfields"], []));
  await $.set(C, "FIsChanged", true);
  {
    const $t4 = (await $.mv((await $.v(C, "AccountDataModule")), "AccountsData"));
    await $.mset((await $.wcall([$t4], "FieldByName", ["OpenDate"], C)), "AsDateTime", (await $.wcall([$t4], "Trunc", [(await $.mv((await $.wv([$t4], "OpenDateEdit", C, false)), "DateTime"))], C)));
    await $.stmt($.wcall([$t4], "Post", [], C));
    await $.stmt((await $.wcall([$t4], "ApplyUpdates", [[(await $.wv([$t4], "aaInsert", C, false)), (await $.wv([$t4], "aaUpdate", C, false))]], C)));
    await $.stmt($.wcall([$t4], "CommitUpdates", [], C));
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.mv((await $.mv((await $.v(C, "AccountDataModule")), "Accounts")), "DataSet"));
    await $.stmt($.wcall([$t5], "Cancel", [], C));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TAccountPropertiesForm", "CancelButtonClick", async function CancelButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "New", async function New(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  await $.mcall((await $.mv((await $.v(C, "AccountDataModule")), "CustomersData")), "Refresh", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "AccountDataModule")), "Accounts")), "DataSet")), "Insert", []);
  await $.mset((await $.v(C, "OpenDateEdit")), "DateTime", (await $.call(C, "Sb_GetSystemDate", [])));
  await $.stmt((await $.call(C, "FillCBL", [false, ""])));
  await $.stmt($.call(C, "ShowModal", []));
  L0["result"] = (await $.v(C, "FIsChanged"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountPropertiesForm", "Edit", async function Edit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  {
    const $t6 = (await $.mv((await $.mv((await $.v(C, "AccountDataModule")), "Accounts")), "DataSet"));
    await $.stmt($.wcall([$t6], "Edit", [], { get: async () => L0["edit"], set: async (v) => { L0["edit"] = v; }, local: true }));
    await $.stmt((await $.wcall([$t6], "FillCBL", [(await $.wv([$t6], "true", C, false)), (await $.mv((await $.wcall([$t6], "FieldByName", ["AccFlags"], C)), "AsString"))], C)));
    await $.mset((await $.wv([$t6], "OpenDateEdit", C, false)), "DateTime", (await $.wcall([$t6], "Int", [(await $.mv((await $.wcall([$t6], "FieldByName", ["OpenDate"], C)), "AsDateTime"))], C)));
  }
  await $.set(C, "FIsChanged", false);
  await $.stmt($.call(C, "ShowModal", []));
  L0["result"] = (await $.v(C, "IsChanged"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAccountPropertiesForm", "FillCBL", async function FillCBL(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"fillandcheck": $.copyArg(p0), "accflags": $.copyArg(p1), result: undefined, "i": 0};
  await $.fixArgs(L0, ["fillandcheck", "accflags"]);
  {
    const $t7 = (await $.mv((await $.v(C, "AccountDataModule")), "AccFlagsData"));
    await $.stmt($.wcall([$t7], "First", [], C));
    await $.mcall((await $.mv((await $.mv((await $.wv([$t7], "AccFlagsForm", C, false)), "CLBAccFlags")), "Items")), "Clear", []);
    while ($.truthy($.not((await $.wv([$t7], "EOF", C, false))))) {
      {
        const $t8 = (await $.mv((await $.wv([$t7], "AccFlagsForm", C, false)), "CLBAccFlags"));
        await $.wset([$t7, $t8], "I", (await $.mcall((await $.wv([$t7, $t8], "Items", C, false)), "Add", [$.add($.add((await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["Symbol"], C)), "AsString")), " - "), (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["Description"], C)), "AsString")))])), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      }
      if ($.truthy((await $.and_((await $.wv([$t7], "FillAndCheck", { get: async () => L0["fillandcheck"], set: async (v) => { L0["fillandcheck"] = v; }, local: true }, false)), async () => (await $.wcall([$t7], "FlagExsist", [(await $.wv([$t7], "AccFlags", { get: async () => L0["accflags"], set: async (v) => { L0["accflags"] = v; }, local: true }, false)), (await $.idx((await $.mv((await $.wcall([$t7], "FieldByName", ["Symbol"], C)), "AsString")), [1]))], C)))))) {
        { const $t9 = await $.iset((await $.mv((await $.mv((await $.wv([$t7], "AccFlagsForm", C, false)), "CLBAccFlags")), "Checked")), [(await $.wv([$t7], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.wv([$t7], "True", C, false))); if ($t9 !== undefined) { await $.mset((await $.mv((await $.wv([$t7], "AccFlagsForm", C, false)), "CLBAccFlags")), "Checked", $t9); } }
      }
      await $.stmt($.wcall([$t7], "Next", [], C));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["FillAndCheck", "AccFlags"], "kind": "procedure", "ptypes": ["Boolean", "String"]});
  U.method("TAccountPropertiesForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "SelectNext", [(await $.v(C, "ActiveControl")), true, true])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountPropertiesForm", "CustomerNameCBCloseUp", async function CustomerNameCBCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.v(C, "AccountDataModule"));
    const $t11 = (await $.mv((await $.wv([$t10], "Accounts", C, false)), "DataSet"));
    await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["AccName"], C)), "AsString", (await $.mv((await $.mcall((await $.mv((await $.wv([$t10, $t11], "Customers", C, false)), "DataSet")), "FieldByName", ["Name"])), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "FormCloseQuery", async function FormCloseQuery(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "canclose": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["canclose"].set((await $.or_(($.not((await $.mv((await $.mv((await $.v(C, "AccountDataModule")), "AccountsData")), "Modified")))), async () => ($.eq((await $.call(C, "MessageDlg", ["Dissmiss changes?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes")))))));
  return L0.result;
}, {"params": ["Sender", "CanClose"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TAccountPropertiesForm", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TAccountPropertiesForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = L0["sender"];
    await $.mset((await $.wv([$t12], "AdditionalSAccsButton", C, false)), "Visible", (await $.wv([$t12], "Down", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "AccFlagsForm", (await $.mcall((await $.v(C, "TAccFlagsForm")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.v(C, "AccFlagsForm"));
    await $.wset([$t13], "FModified", (await $.wv([$t13], "False", C, false)), C);
    if ($.truthy(((await $.and_(($.eq((await $.wv([$t13], "ShowModal", C, false)), (await $.wv([$t13], "mrOk", C, false)))), async () => ((await $.wv([$t13], "FModified", C, false)))))))) {
      await $.mset((await $.mcall((await $.mv((await $.wv([$t13], "AccountDataModule", C, false)), "AccountsData")), "FieldByName", ["AccFlags"])), "AsString", (await $.wv([$t13], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t14 = (await $.v(C, "AccountDataModule"));
    if ($.truthy($.in_((await $.mv((await $.wv([$t14], "AccountsData", C, false)), "State")), [(await $.wv([$t14], "dsInsert", C, false))]))) {
      await $.mset((await $.mcall((await $.wv([$t14], "AccountsData", C, false)), "FieldByName", ["FILIALID"])), "AsInteger", (await $.mcall((await $.wv([$t14], "SB_ACA", C, false)), "CallIntegerFunction", ["getuserfilialid", []])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesForm", "AccNoEditKeyPress", async function AccNoEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ...$.range("a","z"), ...$.range("A","Z"), "/", "-", ":", "(", ")", ".", ",", "'", "+", "{", "}", " ", "\b"]))))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
