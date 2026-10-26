// Generated from Account_edit_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Account_edit_Unit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBGridEh", "Buttons", "XFSCtrls", "ExtCtrls", "StdCtrls", "DBCtrlsEh", "DBLookupEh", "DBCtrls", "Mask", "ComCtrls", "db", "OpenAccdataImpl", "OpenAccountImpl", "AccounFlagsLmpl", "Unit_Rekvezit", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TAccount_edit", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "dtpopendate": {"name": "DTPOpenDate", "type": "TDateTimePicker"}, "dbeditbranchid": {"name": "DBEditBranchID", "type": "TDBEdit"}, "dblookupcomboboxbranchname": {"name": "DBLookupComboBoxBranchName", "type": "TDBLookupComboBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabel6": {"name": "XFLabel6", "type": "TXFLabel"}, "xflacbox": {"name": "XFLaCBox", "type": "TXFLabel"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "xfcheckbox_type": {"name": "XFCheckBox_type", "type": "TXFCheckBox"}, "rbtnnoresident": {"name": "RBtnNoResident", "type": "TXFRadioButton"}, "editid": {"name": "EditId", "type": "TEdit"}, "editname": {"name": "EditName", "type": "TEdit"}, "radiogroup1": {"name": "RadioGroup1", "type": "TRadioGroup"}, "dblookupvid_sob": {"name": "DBLookupvid_sob", "type": "TDBLookupComboBox"}, "dblookupsfera_dey": {"name": "DBLookupSFERA_DEY", "type": "TDBLookupComboBox"}, "xfbuttedit": {"name": "XFButtEdit", "type": "TXFButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "xfbitbtn2": {"name": "XFBitBtn2", "type": "TXFBitBtn"}, "panel_cari_qalıq": {"name": "Panel_Cari_qalıq", "type": "TPanel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "xflabel22": {"name": "XFLabel22", "type": "TXFLabel"}, "xflabel23": {"name": "XFLabel23", "type": "TXFLabel"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "xflabel16": {"name": "XFLabel16", "type": "TXFLabel"}, "acc_nuber_avto": {"name": "Acc_nuber_avto", "type": "TSpeedButton"}, "xflabel17": {"name": "XFLabel17", "type": "TXFLabel"}, "editaccno": {"name": "EditAccNo", "type": "TEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "xflabel13": {"name": "XFLabel13", "type": "TXFLabel"}, "edit_accname": {"name": "Edit_AccName", "type": "TEdit"}, "groupboxopenaccount_elave": {"name": "GroupBoxOpenAccount_elave", "type": "TGroupBox"}, "xflabel10": {"name": "XFLabel10", "type": "TXFLabel"}, "xflabel18": {"name": "XFLabel18", "type": "TXFLabel"}, "xflabel11": {"name": "XFLabel11", "type": "TXFLabel"}, "label_symbols": {"name": "Label_Symbols", "type": "TLabel"}, "xflabel12": {"name": "XFLabel12", "type": "TXFLabel"}, "xflabel14": {"name": "XFLabel14", "type": "TXFLabel"}, "xflabel15": {"name": "XFLabel15", "type": "TXFLabel"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "button1": {"name": "Button1", "type": "TButton"}, "editnotecode": {"name": "EditNoteCode", "type": "TEdit"}, "edit_limit": {"name": "Edit_limit", "type": "TEdit"}, "pcust_balans_hesabı": {"name": "Pcust_Balans_hesabı", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "xflabel24": {"name": "XFLabel24", "type": "TXFLabel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "dblookupcomboboxeh6": {"name": "DBLookupComboboxEh6", "type": "TDBLookupComboboxEh"}, "panel_bankcode": {"name": "Panel_BAnkCode", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "edit_bankcod": {"name": "Edit_BankCod", "type": "TEdit"}, "button2": {"name": "Button2", "type": "TButton"}, "müxabirləşmə_kodu": {"name": "Müxabirləşmə_kodu", "type": "TPanel"}, "label10": {"name": "Label10", "type": "TLabel"}, "edit_muxkod": {"name": "Edit_MuxKod", "type": "TEdit"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "xflabel20": {"name": "XFLabel20", "type": "TXFLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "xflabel8": {"name": "XFLabel8", "type": "TXFLabel"}, "xflabel21": {"name": "XFLabel21", "type": "TXFLabel"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "xflabel9": {"name": "XFLabel9", "type": "TXFLabel"}, "xflabel19": {"name": "XFLabel19", "type": "TXFLabel"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}}, {});
  U.init(async () => {
    U.var_("Account_edit", null, "TAccount_edit");
  });
  U.method("TAccount_edit", "Acc_nuber_avtoClick", async function Acc_nuber_avtoClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": null, "edit_bal_cn2": null, "edit_cust_id": null, "edit_val_id": null, "edit_fil_id": null, "edit_bal_cn1": null, "edit_sim_otcet": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel21")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Hesabın tipi  seçilmeyib !"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Hesabın valyutası  seçilmeyib !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh3")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Balans hesabı  seçilmeyib!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Pcust_Balans_hesabı")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh6")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Yeni Balans hesabı  seçilmeyib!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel18")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh4")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Hesabın  təyinatı  seçilmeyib !"])));
      return L0.result;
    }
  }
  L0["edit_cust_id"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "editid")), "Text"))]));
  L0["edit_val_id"] = (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue"));
  L0["edit_fil_id"] = (await $.mv((await $.v(C, "DBLookupComboBoxBranchName")), "KeyValue"));
  L0["edit_bal_cn1"] = (await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue"));
  L0["edit_bal_cn2"] = (await $.mv((await $.v(C, "DBLookupComboboxEh6")), "KeyValue"));
  if ($.truthy((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "DBLookupComboboxEh5")), "KeyValue"))])))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh5")), "KeyValue", (await $.v(C, "null")));
  } else {
    L0["edit_sim_otcet"] = (await $.mv((await $.v(C, "DBLookupComboboxEh5")), "KeyValue"));
  }
  await $.set(C, "notecode", ((await $.mv((await $.v(C, "EditNoteCode")), "Text"))));
  L0["id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataAcc")), "Account_edit")), "FieldByName", ["id"])), "AsVariant"));
  await $.mset((await $.v(C, "EditAccNo")), "Text", (await $.mcall((await $.mv((await $.v(C, "DataAcc")), "SBOP")), "CallStringFunction", ["GenerateAccountNumber", [L0["edit_bal_cn1"], L0["edit_val_id"], L0["edit_cust_id"], L0["edit_fil_id"], L0["edit_sim_otcet"], (await $.v(C, "notecode")), L0["edit_bal_cn2"]]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccount_edit", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormAccounFlags", (await $.mcall((await $.v(C, "TFormAccounFlags")), "Create", [Self])));
  try {
    {
      const $t1 = (await $.v(C, "FormAccounFlags"));
      const $t2 = (await $.mv((await $.wv([$t1], "DataAcc", C, false)), "Accflags"));
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
  U.method("TAccount_edit", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormRekvezit", (await $.mcall((await $.v(C, "TFormRekvezit")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataAcc")), "Ods_BankM")), "Locate", ["bankcode", (await $.mv((await $.v(C, "Edit_BankCod")), "Text")), []])));
  await $.mcall((await $.v(C, "FormRekvezit")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccount_edit", "DBLookupComboboxEh1Change", async function DBLookupComboboxEh1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.mset((await $.v(C, "Edit1")), "Text", (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccount_edit", "DBLookupComboboxEh2Change", async function DBLookupComboboxEh2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.mset((await $.v(C, "Edit3")), "Text", (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccount_edit", "DBLookupComboboxEh3Change", async function DBLookupComboboxEh3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue"))])))) {
    await $.mset((await $.v(C, "Edit4")), "Text", "");
  } else {
    await $.mset((await $.v(C, "Edit4")), "Text", (await $.call(C, "VarToStr", [(await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccount_edit", "DBLookupComboboxEh4Change", async function DBLookupComboboxEh4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh4")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.mset((await $.v(C, "Edit5")), "Text", (await $.mv((await $.v(C, "DBLookupComboboxEh4")), "KeyValue")));
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh4")), "Text")), ""))) {
    await $.mset((await $.v(C, "Edit_AccName")), "Text", $.add($.add((await $.mv((await $.v(C, "EditName")), "Text")), "/"), (await $.mv((await $.v(C, "DBLookupComboboxEh4")), "Text"))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccount_edit", "DBLookupComboboxEh5Change", async function DBLookupComboboxEh5Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh6")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.mset((await $.v(C, "Edit6")), "Text", (await $.mv((await $.v(C, "DBLookupComboboxEh5")), "KeyValue")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccount_edit", "DBLookupComboboxEh6Change", async function DBLookupComboboxEh6Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh6")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.mset((await $.v(C, "Edit2")), "Text", (await $.mv((await $.v(C, "DBLookupComboboxEh6")), "KeyValue")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccount_edit", "Edit1Exit", async function Edit1Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit1")), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (await $.mv((await $.v(C, "Edit1")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccount_edit", "Edit1KeyPress", async function Edit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (await $.mv((await $.v(C, "Edit1")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccount_edit", "Edit2Exit", async function Edit2Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit2")), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh6")), "KeyValue", (await $.mv((await $.v(C, "Edit2")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccount_edit", "Edit2KeyPress", async function Edit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh6")), "KeyValue", (await $.mv((await $.v(C, "Edit2")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccount_edit", "Edit3Exit", async function Edit3Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit3")), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (await $.mv((await $.v(C, "Edit3")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccount_edit", "Edit3KeyPress", async function Edit3KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (await $.mv((await $.v(C, "Edit3")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccount_edit", "Edit4Exit", async function Edit4Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit4")), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", (await $.mv((await $.v(C, "Edit4")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccount_edit", "Edit4KeyPress", async function Edit4KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", (await $.mv((await $.v(C, "Edit4")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccount_edit", "Edit5Exit", async function Edit5Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit5")), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh4")), "KeyValue", (await $.mv((await $.v(C, "Edit5")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccount_edit", "Edit5KeyPress", async function Edit5KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh4")), "KeyValue", (await $.mv((await $.v(C, "Edit5")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAccount_edit", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined, "tt": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DBEditBranchID")), "Clear", []);
  await $.mset((await $.v(C, "DBLookupComboBoxBranchName")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "EditId")), "Clear", []);
  await $.mcall((await $.v(C, "EditName")), "Clear", []);
  await $.mset((await $.v(C, "XFCheckBox_type")), "Checked", false);
  await $.mset((await $.v(C, "RBtnNoResident")), "Checked", false);
  await $.mset((await $.v(C, "DBLookupvid_sob")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupSFERA_DEY")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh4")), "KeyValue", "");
  await $.mset((await $.v(C, "DBLookupComboboxEh5")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh6")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "Edit1")), "Clear", []);
  await $.mcall((await $.v(C, "Edit2")), "Clear", []);
  await $.mcall((await $.v(C, "Edit3")), "Clear", []);
  await $.mcall((await $.v(C, "Edit4")), "Clear", []);
  await $.mcall((await $.v(C, "Edit5")), "Clear", []);
  await $.mcall((await $.v(C, "Edit6")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_limit")), "Clear", []);
  await $.mset((await $.v(C, "Label_Symbols")), "Caption", "");
  await $.mcall((await $.v(C, "EditNoteCode")), "Clear", []);
  await $.mcall((await $.v(C, "EditAccNo")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_AccName")), "Clear", []);
  await $.mset((await $.v(C, "DBLookupvid_sob")), "Enabled", false);
  await $.mset((await $.v(C, "DBLookupSFERA_DEY")), "Enabled", false);
  await $.mset((await $.v(C, "RadioGroup1")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "RadioGroup1")), "Visible", false);
  await $.mset((await $.v(C, "DBLookupComboboxEh1")), "Enabled", true);
  await $.mset((await $.v(C, "DBLookupComboboxEh2")), "Enabled", true);
  await $.mset((await $.v(C, "DBLookupComboboxEh3")), "Enabled", true);
  await $.mset((await $.v(C, "edit1")), "Enabled", true);
  await $.mset((await $.v(C, "edit3")), "Enabled", true);
  await $.mset((await $.v(C, "edit4")), "Enabled", true);
  await $.mset((await $.v(C, "XFCheckBox_type")), "Visible", true);
  await $.mcall((await $.v(C, "Edit_BankCod")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_MuxKod")), "Clear", []);
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataAcc")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["Sb_General.bpl", "Account_edit", "Pcust_Balans_hesabı"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Pcust_Balans_hesabı")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Pcust_Balans_hesabı")), "Visible", true);
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TAccount_edit", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tt": 0, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccount_edit", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "j": 0, "tt": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ominsert_edit", false);
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataAcc")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["acc_types", "name"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel21")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel21")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataAcc")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["Sb_General.bpl", "Account_edit", "Pcust_Balans_hesabı"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Pcust_Balans_hesabı")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Pcust_Balans_hesabı")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataAcc")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["Sb_General.bpl", "Account_edit", "Panel_BAnkCode"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Panel_BAnkCode")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Panel_BAnkCode")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataAcc")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["Sb_General.bpl", "Account_edit", "Müxabirləşmə_kodu"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Müxabirləşmə_kodu")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Müxabirləşmə_kodu")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataAcc")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["Sb_General.bpl", "Account_edit", "GroupBoxOpenAccount_elave"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "GroupBoxOpenAccount_elave")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "GroupBoxOpenAccount_elave")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataAcc")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["Sb_General.bpl", "Account_edit", "Panel_Cari_qalıq"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Panel_Cari_qalıq")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Panel_Cari_qalıq")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataAcc")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["Sb_General.bpl", "Account_edit", "Acc_nuber_avto"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Acc_nuber_avto")), "Enabled", false);
  } else {
    await $.mset((await $.v(C, "Acc_nuber_avto")), "Enabled", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataAcc")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["account_symbols", "name"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel18")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel18")), "Visible", true);
  }
  {
    const $t3 = (await $.v(C, "DataAcc"));
    const $t4 = (await $.wv([$t3], "Account_edit", C, false));
    await $.stmt($.wcall([$t3, $t4], "close", [], C));
    await $.stmt((await $.wcall([$t3, $t4], "SetVariable", ["id", (await $.wv([$t3, $t4], "accont_id", C, false))], C)));
    await $.stmt($.wcall([$t3, $t4], "open", [], C));
    await $.mset((await $.wv([$t3, $t4], "Label_Symbols", C, false)), "Caption", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["tipacc"], C)), "AsString")));
    await $.mset((await $.wv([$t3, $t4], "Edit_BankCod", C, false)), "Text", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["bank_code"], C)), "AsString")));
    await $.mset((await $.wv([$t3, $t4], "Edit_MuxKod", C, false)), "text", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["old_acc_no"], C)), "AsString")));
    await $.mset((await $.wv([$t3, $t4], "Edit_AccName", C, false)), "Text", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["name"], C)), "AsString")));
    await $.mset((await $.wv([$t3, $t4], "Edit_limit", C, false)), "Text", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["limit"], C)), "AsString")));
    await $.mset((await $.wv([$t3, $t4], "EditAccNo", C, false)), "Text", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["acc_no"], C)), "AsString")));
    await $.mset((await $.wv([$t3, $t4], "DTPOpenDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["open_dat"], C)), "AsDateTime")));
    await $.mset((await $.wv([$t3, $t4], "edit5", C, false)), "Text", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["symb"], C)), "AsString")));
    await $.stmt($.wcall([$t3, $t4], "edit", [], C));
  }
  {
    const $t5 = (await $.v(C, "DataAcc"));
    const $t6 = (await $.wv([$t5], "Cust_Account", C, false));
    await $.stmt($.wcall([$t5, $t6], "close", [], C));
    await $.stmt((await $.wcall([$t5, $t6], "SetVariable", ["id", (await $.wv([$t5, $t6], "accont_id", C, false))], C)));
    await $.stmt($.wcall([$t5, $t6], "open", [], C));
    await $.mset((await $.wv([$t5, $t6], "EditId", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["cust_id"], C)), "AsString")));
    await $.mset((await $.wv([$t5, $t6], "EditName", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["cust_name"], C)), "AsString")));
    await $.mset((await $.wv([$t5, $t6], "DBLookupvid_sob", C, false)), "KeyValue", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["vid_sob"], C)), "AsInteger")));
    await $.mset((await $.wv([$t5, $t6], "DBLookupSFERA_DEY", C, false)), "KeyValue", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["sfera_dey"], C)), "AsInteger")));
    await $.mset((await $.wv([$t5, $t6], "DBLookupComboboxEh1", C, false)), "KeyValue", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["acc_type"], C)), "AsInteger")));
    { const $t7 = (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["NEREZIDENT"], C)), "AsInteger"));
      if ($.eq($t7, 0)) {
        await $.mset((await $.wv([$t5, $t6], "RBtnNoResident", C, false)), "Checked", (await $.wv([$t5, $t6], "true", C, false)));
        await $.mset((await $.wv([$t5, $t6], "RBtnNoResident", C, false)), "Caption", "Qeyri-Rezident");
      }
      else if ($.eq($t7, 1)) {
        await $.mset((await $.wv([$t5, $t6], "RBtnNoResident", C, false)), "Checked", (await $.wv([$t5, $t6], "true", C, false)));
        await $.mset((await $.wv([$t5, $t6], "RBtnNoResident", C, false)), "Caption", "Rezident");
      }
    }
    { const $t8 = (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["cust_type"], C)), "AsInteger"));
      if ($.eq($t8, 0)) {
        await $.mset((await $.wv([$t5, $t6], "XFButtEdit", C, false)), "Enabled", (await $.wv([$t5, $t6], "true", C, false)));
        await $.mset((await $.wv([$t5, $t6], "XFCheckBox_type", C, false)), "Checked", (await $.wv([$t5, $t6], "true", C, false)));
        await $.mset((await $.wv([$t5, $t6], "XFCheckBox_type", C, false)), "Caption", "Hüquqi şəxs");
      }
      else if ($.eq($t8, 1)) {
        await $.mset((await $.wv([$t5, $t6], "XFButtEdit", C, false)), "Enabled", (await $.wv([$t5, $t6], "false", C, false)));
        await $.mset((await $.wv([$t5, $t6], "XFCheckBox_type", C, false)), "Checked", (await $.wv([$t5, $t6], "true", C, false)));
        await $.mset((await $.wv([$t5, $t6], "XFCheckBox_type", C, false)), "Caption", "Fiziki şəxs");
      }
      else if ($.eq($t8, 2)) {
        await $.mset((await $.wv([$t5, $t6], "XFButtEdit", C, false)), "Enabled", (await $.wv([$t5, $t6], "true", C, false)));
        await $.mset((await $.wv([$t5, $t6], "XFCheckBox_type", C, false)), "Checked", (await $.wv([$t5, $t6], "true", C, false)));
        await $.mset((await $.wv([$t5, $t6], "XFCheckBox_type", C, false)), "Caption", "Fiziki Sahibkar");
      }
      else if ($.eq($t8, 3)) {
        await $.mset((await $.wv([$t5, $t6], "XFButtEdit", C, false)), "Enabled", (await $.wv([$t5, $t6], "false", C, false)));
        await $.mset((await $.wv([$t5, $t6], "RadioGroup1", C, false)), "Visible", (await $.wv([$t5, $t6], "true", C, false)));
        await $.mset((await $.wv([$t5, $t6], "XFCheckBox_type", C, false)), "Visible", (await $.wv([$t5, $t6], "false", C, false)));
      }
    }
  }
  {
    const $t9 = (await $.v(C, "DataAcc"));
    const $t10 = (await $.wv([$t9], "Tenostat", C, false));
    await $.stmt($.wcall([$t9, $t10], "close", [], C));
    await $.stmt((await $.wcall([$t9, $t10], "SetVariable", ["Acc_id", (await $.wv([$t9, $t10], "accont_id", C, false))], C)));
    await $.stmt($.wcall([$t9, $t10], "open", [], C));
    await $.mset((await $.wv([$t9, $t10], "DBEdit6", C, false)), "Text", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["ostat"], C)), "AsString")));
    await $.mset((await $.wv([$t9, $t10], "DBEdit7", C, false)), "Text", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["pok_ostat"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccount_edit", "RadioGroup1Click", async function RadioGroup1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t11 = (await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex"));
    if ($.eq($t11, 0)) {
      await $.mset((await $.v(C, "XFButtEdit")), "Enabled", false);
    }
    else if ($.eq($t11, 1)) {
      await $.mset((await $.v(C, "XFButtEdit")), "Enabled", true);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccount_edit", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_bal_cn2": null, "v_symbol": null, "v_sim_otcet": null, "v_old_accno": '', "v_accid": '', "v_bankcode": '', "v_acc_no": '', "v_tip_acc": '', "v_accname": '', "v_limit": '', "v_open_dat": 0, "v_cust_id": 0, "v_id": 0, "v_val_id": 0, "v_fil_id": 0, "v_bal_cn1": 0, "id": null};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataAcc")), "SB_ACA")), "CallProcedure", ["CheckObjectAccess", ["PCUSTSERVICE", "update"]])));
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel21")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Hesabın tipi  seçilmeyib !"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Hesabın valyutası  seçilmeyib !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh3")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Balans hesabı  seçilmeyib!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel18")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh4")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Hesabın  təyinatı  seçilmeyib !"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditAccNo")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Hesab nömrəsi yaradılmayıb !"])));
    return L0.result;
  }
  L0["v_cust_id"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "EditId")), "Text"))]));
  L0["v_tip_acc"] = (await $.mv((await $.v(C, "Label_Symbols")), "Caption"));
  L0["v_accname"] = (await $.mv((await $.v(C, "Edit_AccName")), "Text"));
  L0["v_symbol"] = (await $.mv((await $.v(C, "DBLookupComboboxEh4")), "KeyValue"));
  L0["v_sim_otcet"] = (await $.mv((await $.v(C, "DBLookupComboboxEh5")), "KeyValue"));
  L0["v_bal_cn1"] = (await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue"));
  L0["v_bal_cn2"] = (await $.mv((await $.v(C, "DBLookupComboboxEh6")), "KeyValue"));
  L0["v_limit"] = (await $.mv((await $.v(C, "Edit_limit")), "Text"));
  L0["v_fil_id"] = (await $.mv((await $.v(C, "DBLookupComboBoxBranchName")), "KeyValue"));
  L0["v_val_id"] = (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue"));
  L0["v_bankcode"] = (await $.mv((await $.v(C, "Edit_BankCod")), "Text"));
  L0["v_old_accno"] = (await $.mv((await $.v(C, "Edit_MuxKod")), "Text"));
  L0["v_accid"] = (await $.v(C, "accont_id"));
  L0["v_open_dat"] = (await $.mv((await $.v(C, "DTPOpenDate")), "DateTime"));
  L0["id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataAcc")), "Account")), "FieldByName", ["id"])), "AsVariant"));
  L0["v_acc_no"] = (await $.mv((await $.v(C, "EditAccNo")), "Text"));
  L0["v_acc_no"] = (await $.call(C, "StringReplace", [L0["v_acc_no"], " ", "", [(await $.v(C, "rfReplaceAll"))]]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataAcc")), "SBOP")), "CallProcedure", ["upd_account", [L0["v_accid"], L0["v_cust_id"], (await $.v(C, "null")), L0["v_acc_no"], L0["v_val_id"], L0["v_accname"], L0["v_open_dat"], L0["v_bal_cn1"], L0["v_limit"], (await $.v(C, "null")), L0["v_bal_cn2"], 0, 0, L0["v_fil_id"], L0["v_sim_otcet"], L0["v_tip_acc"], L0["v_old_accno"], 0, 0, L0["v_symbol"], (await $.v(C, "null")), L0["v_bankcode"]]])));
  await $.mcall((await $.v(C, "Account_edit")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccount_edit", "XFBitBtn2Click", async function XFBitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAccount_edit", "XFButtEditClick", async function XFButtEditClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "c_id": 0, "c_vid_sob": 0, "c_sfera_dey": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupvid_sob")), "Enabled")), false))) {
    await $.mset((await $.v(C, "DBLookupvid_sob")), "Enabled", true);
    await $.mset((await $.v(C, "DBLookupSFERA_DEY")), "Enabled", true);
    return L0.result;
  }
  L0["c_id"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "editid")), "Text"))]));
  L0["c_vid_sob"] = (await $.mv((await $.v(C, "DBLookupvid_sob")), "KeyValue"));
  L0["c_sfera_dey"] = (await $.mv((await $.v(C, "DBLookupSFERA_DEY")), "KeyValue"));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Dəyşikliki Yadda saxlanılsınmı ?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "dataAcc")), "PG_PCustService")), "CallProcedure", ["edit_cust_Vid_sbo_sfera_dey", [L0["c_id"], L0["c_vid_sob"], L0["c_sfera_dey"]]])));
    await $.mset((await $.v(C, "DBLookupvid_sob")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupSFERA_DEY")), "Enabled", false);
    await $.mset((await $.v(C, "XFButtEdit")), "Enabled", false);
  }
  {
    const $t12 = (await $.v(C, "DataAcc"));
    const $t13 = (await $.wv([$t12], "Cust_Account", C, false));
    { const $t14 = (await $.mv((await $.mcall((await $.wv([$t12, $t13], "Cust_Account", C, false)), "FieldByName", ["cust_type"])), "AsInteger"));
      if ($.eq($t14, 0)) {
        await $.mset((await $.wv([$t12, $t13], "XFCheckBox_type", C, false)), "Checked", (await $.wv([$t12, $t13], "true", C, false)));
        await $.mset((await $.wv([$t12, $t13], "XFCheckBox_type", C, false)), "Caption", "Hüquqi şəxs");
      }
      else if ($.eq($t14, 1)) {
        await $.mset((await $.wv([$t12, $t13], "XFCheckBox_type", C, false)), "Checked", (await $.wv([$t12, $t13], "true", C, false)));
        await $.mset((await $.wv([$t12, $t13], "XFCheckBox_type", C, false)), "Caption", "Fiziki şəxs");
      }
      else if ($.eq($t14, 2)) {
        await $.mset((await $.wv([$t12, $t13], "XFCheckBox_type", C, false)), "Checked", (await $.wv([$t12, $t13], "true", C, false)));
        await $.mset((await $.wv([$t12, $t13], "XFCheckBox_type", C, false)), "Caption", "Fiziki Sahibkar");
      }
      else if ($.eq($t14, 3)) {
        await $.mset((await $.wv([$t12, $t13], "RadioGroup1", C, false)), "Visible", (await $.wv([$t12, $t13], "true", C, false)));
        await $.mset((await $.wv([$t12, $t13], "XFCheckBox_type", C, false)), "Visible", (await $.wv([$t12, $t13], "false", C, false)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
