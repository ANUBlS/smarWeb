// Generated from banksettings.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("banksettings", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "SearchEdit", "ExtCtrls", "Unit18", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TBank_Settings", "TForm", {"dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "button1": {"name": "Button1", "type": "TButton"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "searchedit3": {"name": "SearchEdit3", "type": "TSearchEdit"}, "searchedit4": {"name": "SearchEdit4", "type": "TSearchEdit"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "radiogroup1": {"name": "RadioGroup1", "type": "TRadioGroup"}}, {});
  U.init(async () => {
    U.var_("Bank_Settings", null, "TBank_Settings");
  });
  U.method("TBank_Settings", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "Edit", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["ARAHESAB"])), "asinteger")), 1))) {
    await $.mset((await $.v(C, "CheckBox1")), "Checked", true);
  } else {
    await $.mset((await $.v(C, "CheckBox1")), "Checked", false);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["dord"])), "asinteger")), 1))) {
    await $.mset((await $.v(C, "CheckBox2")), "Checked", true);
  } else {
    await $.mset((await $.v(C, "CheckBox2")), "Checked", false);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["rez"])), "asinteger")), 0))) {
    await $.mset((await $.v(C, "RadioGroup1")), "ItemIndex", 0);
  } else {
    await $.mset((await $.v(C, "RadioGroup1")), "ItemIndex", 1);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBank_Settings", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "Cancel", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TBank_Settings", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["cardsettingssave"]])));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Dəyişiklik yadda saxlanılsın?", (await $.v(C, "mtinformation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0])), (await $.v(C, "mryes"))))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 0))) {
      await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["rez"])), "AsInteger", 0);
    } else {
      await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["rez"])), "AsInteger", 1);
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox1")), "Checked")), true))) {
      await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["ARAHESAB"])), "AsInteger", 1);
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox2")), "Checked")), true))) {
      await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["dord"])), "AsInteger", 1);
    } else {
      await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["dord"])), "AsInteger", 0);
    }
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["kliring_25"])), "AsString", (await $.mv((await $.v(C, "SearchEdit3")), "Text")));
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["kliring_45"])), "AsString", (await $.mv((await $.v(C, "SearchEdit4")), "Text")));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "Post", []);
  }
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "Open", []);
  await $.mset((await $.v(C, "SearchEdit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["kliring_25"])), "AsString")));
  await $.mset((await $.v(C, "SearchEdit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["kliring_45"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBank_Settings", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab1")), "Locate", ["acc_no", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["kliring_25"])), "AsString")), []])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab2")), "Locate", ["acc_no", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["kliring_45"])), "AsString")), []])));
  await $.mset((await $.v(C, "SearchEdit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["kliring_25"])), "AsString")));
  await $.mset((await $.v(C, "SearchEdit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "settings")), "fieldbyname", ["kliring_45"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBank_Settings", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab1")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab2")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
