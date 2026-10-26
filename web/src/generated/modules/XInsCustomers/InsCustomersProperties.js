// Generated from InsCustomersProperties.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InsCustomersProperties", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "Buttons", "ExtCtrls", "ComCtrls", "DBViewComboBox", "DB", "InsDataModule"]);
  const C = [U];
  U.defClass("TfmCustomersProperties", "TForm", {"label1": {"name": "Label1", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEdit"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "label8": {"name": "Label8", "type": "TLabel"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "label16": {"name": "Label16", "type": "TLabel"}, "dbedit13": {"name": "DBEdit13", "type": "TDBEdit"}, "dbedit14": {"name": "DBEdit14", "type": "TDBEdit"}, "label17": {"name": "Label17", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "label19": {"name": "Label19", "type": "TLabel"}, "dbedit15": {"name": "DBEdit15", "type": "TDBEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "cbsex": {"name": "cbSex", "type": "TComboBox"}, "label23": {"name": "Label23", "type": "TLabel"}, "dbedit16": {"name": "DBEdit16", "type": "TDBEdit"}, "label24": {"name": "Label24", "type": "TLabel"}, "dbedit17": {"name": "DBEdit17", "type": "TDBEdit"}, "label25": {"name": "Label25", "type": "TLabel"}, "dbinsuredtype": {"name": "DBInsuredType", "type": "TDBLookupComboBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "label10": {"name": "Label10", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("fmCustomersProperties", null, "TfmCustomersProperties");
  });
  U.method("TfmCustomersProperties", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmCustomersProperties", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "InsDataMod"));
    if ($.truthy($.in_((await $.mv((await $.wv([$t1], "ODSInsCustomers", C, false)), "State")), [(await $.wv([$t1], "dsInsert", C, false)), (await $.wv([$t1], "dsEdit", C, false))]))) {
      await $.mset((await $.wv([$t1], "ODSInsCustomersSEX", C, false)), "Value", (await $.mv((await $.wv([$t1], "cbSex", C, false)), "ItemIndex")));
    }
  }
  await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmCustomersProperties", "DBLookupComboBox1KeyPress", async function DBLookupComboBox1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.call(C, "FindNextControl", [(await $.v(C, "ActiveControl")), true, true, false])), "SetFocus", []);
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfmCustomersProperties", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "InsDataMod"));
    if ($.truthy($.in_((await $.mv((await $.wv([$t2], "ODSInsCustomers", C, false)), "State")), [(await $.wv([$t2], "dsInsert", C, false)), (await $.wv([$t2], "dsEdit", C, false))]))) {
      await $.mset((await $.wv([$t2], "cbSex", C, false)), "ItemIndex", (await $.mv((await $.wv([$t2], "ODSInsCustomersSEX", C, false)), "Value")));
    }
  }
  {
    const $t3 = (await $.v(C, "InsDataMod"));
    if ($.truthy($.eq((await $.mv((await $.wv([$t3], "ODSInsCustomers", C, false)), "State")), (await $.wv([$t3], "dsInsert", C, false))))) {
      await $.mset((await $.wv([$t3], "ODSInsCustomersCITY", C, false)), "Value", "Bakı");
      await $.mset((await $.wv([$t3], "ODSInsCustomersSTATE", C, false)), "Value", "Azərbaycan");
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmCustomersProperties", "DTPDateOfBirthChange", async function DTPDateOfBirthChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "InsDataMod"));
    if ($.truthy($.in_((await $.mv((await $.wv([$t4], "ODSInsCustomers", C, false)), "State")), [(await $.wv([$t4], "dsInsert", C, false)), (await $.wv([$t4], "dsEdit", C, false))]))) {
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
