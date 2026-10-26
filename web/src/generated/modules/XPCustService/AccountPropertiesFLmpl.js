// Generated from AccountPropertiesFLmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AccountPropertiesFLmpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBCtrls", "ExtCtrls", "Buttons", "XFSCtrls", "Mask", "Db", "DBCtrlsEh", "DBLookupEh", "DBGridEh", "UnitDataModPCustService", "AccounFlagsLmpl", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TAccountPropertiesF", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "xfbitbtn2": {"name": "XFBitBtn2", "type": "TXFBitBtn"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "label7": {"name": "Label7", "type": "TLabel"}, "label_symbols": {"name": "Label_Symbols", "type": "TLabel"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "label8": {"name": "Label8", "type": "TLabel"}, "edit_accname": {"name": "Edit_AccName", "type": "TEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "label9": {"name": "Label9", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "editaccno": {"name": "EditAccNo", "type": "TEdit"}, "label15": {"name": "Label15", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh6": {"name": "DBLookupComboboxEh6", "type": "TDBLookupComboboxEh"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("AccountPropertiesF", null, "TAccountPropertiesF");
    U.var_("cust_id", 0, "integer");
    U.var_("val_id", 0, "integer");
    U.var_("fil_id", 0, "integer");
    U.var_("bal_cn", 0, "integer");
    U.var_("sim_otcet", 0, "integer");
  });
  U.method("TAccountPropertiesF", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormAccounFlags", (await $.mcall((await $.v(C, "TFormAccounFlags")), "Create", [Self])));
  try {
    {
      const $t1 = (await $.v(C, "FormAccounFlags"));
      const $t2 = (await $.mv((await $.wv([$t1], "DataModPCustService", C, false)), "Accflags"));
      if ($.truthy((await $.and_(($.eq((await $.wv([$t1, $t2], "ShowModal", C, false)), (await $.wv([$t1, $t2], "mrOk", C, false)))), async () => ($.in_((await $.wv([$t1, $t2], "State", C, false)), [(await $.wv([$t1, $t2], "dsInsert", C, false)), (await $.wv([$t1, $t2], "dsEdit", C, false))])))))) {
        await $.mset((await $.wcall([$t1, $t2], "FieldByName", ["Tipacc"], C)), "AsString", (await $.wv([$t1, $t2], "FlagMap", C, false)));
      }
    }
  } finally {
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FormAccounFlags"))])))) {
      await $.mcall((await $.v(C, "FormAccounFlags")), "Release", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesF", "DBLookupComboboxEh2Change", async function DBLookupComboboxEh2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.mset((await $.v(C, "Edit3")), "Text", (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue")));
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Bal_spr")), "close", []);
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue")), 0))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Bal_spr")), "SetVariable", ["int_val", 0])));
    } else {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Bal_spr")), "SetVariable", ["int_val", 1])));
    }
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Bal_spr")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesF", "DBLookupComboboxEh2CloseUp", async function DBLookupComboboxEh2CloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  {
    const $t3 = (await $.v(C, "DataModPCustService"));
    const $t4 = (await $.wv([$t3], "ODS_Bal_spr", C, false));
    if ($.truthy($.eq((await $.wv([$t3, $t4], "RecordCount", C, false)), 1))) {
      await $.mset((await $.wv([$t3, $t4], "Edit4", C, false)), "Text", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["bal_cn"], C)), "AsString")));
      await $.mset((await $.wv([$t3, $t4], "DBLookupComboboxEh3", C, false)), "Text", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["balname"], C)), "AsString")));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TAccountPropertiesF", "DBLookupComboboxEh3Change", async function DBLookupComboboxEh3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.mset((await $.v(C, "Edit4")), "Text", (await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesF", "DBLookupComboboxEh4Change", async function DBLookupComboboxEh4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh4")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.mset((await $.v(C, "Edit5")), "Text", (await $.mv((await $.v(C, "DBLookupComboboxEh4")), "KeyValue")));
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh4")), "Text")), ""))) {
    await $.mset((await $.v(C, "Edit_AccName")), "Text", $.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_name"])), "AsString")), "/"), (await $.mv((await $.v(C, "DBLookupComboboxEh4")), "Text"))));
  } else {
    await $.mset((await $.v(C, "Edit_AccName")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_name"])), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesF", "DBLookupComboboxEh5Change", async function DBLookupComboboxEh5Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh5")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.mset((await $.v(C, "Edit1")), "Text", (await $.mv((await $.v(C, "DBLookupComboboxEh5")), "KeyValue")));
  }
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Bal_spr")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Bal_spr")), "SetVariable", ["ACCTYPE", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_acc_types")), "FieldByName", ["id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Bal_spr")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesF", "DBLookupComboboxEh6Change", async function DBLookupComboboxEh6Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh6")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.mset((await $.v(C, "Edit6")), "Text", (await $.mv((await $.v(C, "DBLookupComboboxEh6")), "KeyValue")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesF", "Edit1Exit", async function Edit1Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit1")), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh5")), "KeyValue", (await $.mv((await $.v(C, "Edit1")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesF", "Edit1KeyPress", async function Edit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh5")), "KeyValue", (await $.mv((await $.v(C, "Edit1")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountPropertiesF", "Edit3Exit", async function Edit3Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit3")), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (await $.mv((await $.v(C, "Edit3")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesF", "Edit3KeyPress", async function Edit3KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (await $.mv((await $.v(C, "Edit3")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountPropertiesF", "Edit4Exit", async function Edit4Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit4")), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", (await $.mv((await $.v(C, "Edit4")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesF", "Edit4KeyPress", async function Edit4KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", (await $.mv((await $.v(C, "Edit4")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountPropertiesF", "Edit5Exit", async function Edit5Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit5")), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh4")), "KeyValue", (await $.mv((await $.v(C, "Edit5")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesF", "Edit5KeyPress", async function Edit5KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh4")), "KeyValue", (await $.mv((await $.v(C, "Edit5")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountPropertiesF", "Edit6Exit", async function Edit6Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit6")), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh6")), "KeyValue", (await $.mv((await $.v(C, "Edit6")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesF", "Edit6KeyPress", async function Edit6KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh6")), "KeyValue", (await $.mv((await $.v(C, "Edit6")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountPropertiesF", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TAccountPropertiesF", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Label_Symbols")), "Caption", "");
  await $.mset((await $.v(C, "DBLookupComboboxEh5")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh4")), "KeyValue", "");
  await $.mcall((await $.v(C, "EditAccNo")), "Clear", []);
  await $.mcall((await $.v(C, "Edit1")), "Clear", []);
  await $.mcall((await $.v(C, "Edit3")), "Clear", []);
  await $.mcall((await $.v(C, "Edit4")), "Clear", []);
  await $.mcall((await $.v(C, "Edit5")), "Clear", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TAccountPropertiesF", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormAccounFlags", (await $.mcall((await $.v(C, "TFormAccounFlags")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Bal_spr_parts")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Bal_spr")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "CurrentUserFilial")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_account_symbols1")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesF", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 27))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccountPropertiesF", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit_AccName")), "Text", (await $.mv((await $.v(C, "DBEdit3")), "Text")));
  await $.mset((await $.v(C, "DBLookupComboboxEh6")), "KeyValue", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesF", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh5")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Hesabın tipi  seçilmeyib !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Hesabın valyutası  seçilmeyib !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh3")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Balans hesabı  seçilmeyib!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh4")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Hesabın  təyinatı  seçilmeyib !"])));
    return L0.result;
  }
  await $.set(C, "cust_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["ID"])), "AsInteger")));
  await $.set(C, "val_id", (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue")));
  await $.set(C, "fil_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "CurrentUserFilial")), "FieldByName", ["ID"])), "AsInteger")));
  await $.set(C, "bal_cn", (await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue")));
  await $.set(C, "sim_otcet", (await $.mv((await $.v(C, "DBLookupComboboxEh6")), "KeyValue")));
  await $.mset((await $.v(C, "EditAccNo")), "Text", (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "SBOP")), "CallStringFunction", ["GenerateAccountNumber1", [(await $.v(C, "bal_cn")), (await $.v(C, "val_id")), (await $.v(C, "cust_id")), (await $.v(C, "fil_id")), (await $.v(C, "sim_otcet"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesF", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_acc_no": '', "v_tip_acc": '', "v_accname": '', "v_symbol": '', "v_open_dat": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh5")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Hesabın tipi  seçilmeyib !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Hesabın valyutası  seçilmeyib !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh3")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Balans hesabı  seçilmeyib!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh4")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Hesabın  təyinatı  seçilmeyib !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditAccNo")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Hesab nömrəsi yaradılmayıb !"])));
    return L0.result;
  }
  L0["v_tip_acc"] = (await $.mv((await $.v(C, "Label_Symbols")), "Caption"));
  L0["v_accname"] = (await $.mv((await $.v(C, "Edit_AccName")), "Text"));
  L0["v_symbol"] = (await $.mv((await $.v(C, "DBLookupComboboxEh4")), "KeyValue"));
  L0["v_open_dat"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_SYSDATE")), "FieldByName", ["Tek_dat"])), "AsDateTime"));
  L0["v_acc_no"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "SBOP")), "CallStringFunction", ["GenerateAccountNumber", [(await $.v(C, "bal_cn")), (await $.v(C, "val_id")), (await $.v(C, "cust_id")), (await $.v(C, "fil_id")), (await $.v(C, "null"))]]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "SBOP")), "CallStringFunction", ["add_account", [(await $.v(C, "cust_id")), 0, L0["v_acc_no"], (await $.v(C, "val_id")), L0["v_accname"], L0["v_open_dat"], (await $.v(C, "bal_cn")), 0, (await $.v(C, "null")), 0, 0, 0, (await $.v(C, "fil_id")), 0, L0["v_tip_acc"], "", 0, "", L0["v_symbol"]]])));
  await $.mcall((await $.v(C, "AccountPropertiesF")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccountPropertiesF", "XFBitBtn2Click", async function XFBitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "AccountPropertiesF")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
