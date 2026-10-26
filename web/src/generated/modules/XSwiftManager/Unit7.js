// Generated from Unit7.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit7", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "DBCtrls", "DBCtrlsEh", "DBViewComboBox", "ExtCtrls", "SearchEdit", "Mask", "Unit2", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TForm7", "TForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "header": {"name": "Header", "type": "TTabSheet"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "reciverbic": {"name": "reciverbic", "type": "TSearchEdit"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "sendertype": {"name": "sendertype", "type": "TComboBox"}, "combobox2": {"name": "ComboBox2", "type": "TComboBox"}, "recivertype": {"name": "recivertype", "type": "TComboBox"}, "senderlt": {"name": "senderlt", "type": "TComboBox"}, "monitoring": {"name": "monitoring", "type": "TComboBox"}, "application": {"name": "Application", "type": "TComboBox"}, "priority": {"name": "priority", "type": "TComboBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "label40": {"name": "Label40", "type": "TLabel"}, "label41": {"name": "Label41", "type": "TLabel"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "scrollbox1": {"name": "ScrollBox1", "type": "TScrollBox"}, "mainpanel": {"name": "MainPanel", "type": "TPanel"}, "mf20": {"name": "MF20", "type": "TPanel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "mf23b": {"name": "MF23B", "type": "TPanel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "mf32a": {"name": "MF32A", "type": "TPanel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "mf32_date": {"name": "mf32_date", "type": "TDateTimePicker"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "mf32a_val": {"name": "mf32a_val", "type": "TDBViewComboBox"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "mf50": {"name": "MF50", "type": "TPanel"}, "mf50_main": {"name": "MF50_main", "type": "TPanel"}, "label20": {"name": "Label20", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "mf50k": {"name": "MF50K", "type": "TPanel"}, "edit3_mf50": {"name": "Edit3_MF50", "type": "TSearchEdit"}, "dbmemo1": {"name": "DBMemo1", "type": "TDBMemo"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEdit"}, "mf70": {"name": "MF70", "type": "TPanel"}, "label27": {"name": "Label27", "type": "TLabel"}, "mf70_memo": {"name": "MF70_memo", "type": "TMemo"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "edit8": {"name": "Edit8", "type": "TEdit"}, "edit9": {"name": "Edit9", "type": "TEdit"}, "dbmemo2": {"name": "DBMemo2", "type": "TDBMemo"}, "mf71a": {"name": "MF71A", "type": "TPanel"}, "label28": {"name": "Label28", "type": "TLabel"}, "label29": {"name": "Label29", "type": "TLabel"}, "edit1_mf71a": {"name": "Edit1_MF71A", "type": "TEdit"}, "mf72": {"name": "MF72", "type": "TPanel"}, "label34": {"name": "Label34", "type": "TLabel"}, "label37": {"name": "Label37", "type": "TLabel"}, "dbmemo4": {"name": "DBMemo4", "type": "TDBMemo"}, "mf71g": {"name": "MF71G", "type": "TPanel"}, "label38": {"name": "Label38", "type": "TLabel"}, "edit1_mf71g": {"name": "Edit1_MF71G", "type": "TEdit"}, "edit2_mf71g": {"name": "Edit2_MF71G", "type": "TEdit"}, "mf59_59a": {"name": "MF59_59A", "type": "TPanel"}, "mf59_main": {"name": "MF59_main", "type": "TPanel"}, "label33": {"name": "Label33", "type": "TLabel"}, "cmf59": {"name": "CMF59", "type": "TComboBox"}, "mf59": {"name": "MF59", "type": "TPanel"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "dbmemo3": {"name": "DBMemo3", "type": "TDBMemo"}, "mf59a": {"name": "MF59A", "type": "TPanel"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "dbmemo5": {"name": "DBMemo5", "type": "TDBMemo"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "richedit1": {"name": "RichEdit1", "type": "TRichEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("Form7", null, "TForm7");
  });
  U.method("TForm7", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "reciverbic")), "Text", (await $.mv((await $.v(C, "DBEdit1")), "Text")));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "tobic")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "tobic")), "SetVariable", ["dbs", (await $.mv((await $.v(C, "DBEdit1")), "Text"))])));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "tobic")), "open", []);
  await $.mset((await $.v(C, "Edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "tobic")), "fieldbyname", ["name"])), "asstring")));
  await $.mset((await $.v(C, "Edit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "tobic")), "fieldbyname", ["city"])), "asstring")));
  await $.mset((await $.v(C, "Edit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "tobic")), "fieldbyname", ["address"])), "asstring")));
  await $.mset((await $.v(C, "Edit5")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "tobic")), "fieldbyname", ["country"])), "asstring")));
  await $.mset((await $.v(C, "senderlt")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "bankinfo")), "fieldbyname", ["SWIFT"])), "asstring")));
  await $.mset((await $.v(C, "sendertype")), "Text", "Institution");
  await $.mset((await $.v(C, "ComboBox2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "bankinfo")), "fieldbyname", ["SWIFT"])), "asstring")));
  await $.mset((await $.v(C, "recivertype")), "Text", "Institution");
  await $.mset((await $.v(C, "Application")), "Text", "FIN");
  await $.mset((await $.v(C, "priority")), "Text", "N");
  await $.mset((await $.v(C, "monitoring")), "Text", "N");
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "Edit", []);
  await $.mset((await $.v(C, "reciverbic")), "Text", (await $.mv((await $.v(C, "DBEdit1")), "Text")));
  await $.mset((await $.v(C, "Edit3_MF50")), "Text", (await $.mv((await $.v(C, "DBEdit12")), "Text")));
  await $.mset((await $.v(C, "mf32a_val")), "Text", "AZN");
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2M59")), "AsString")), ":59:"))) {
    await $.mset((await $.v(C, "CMF59")), "ItemIndex", 1);
    await $.mset((await $.v(C, "MF59")), "Visible", true);
    await $.mset((await $.v(C, "MF59A")), "Visible", false);
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2M59")), "AsString")), ":59A:"))) {
    await $.mset((await $.v(C, "CMF59")), "ItemIndex", 2);
    await $.mset((await $.v(C, "MF59")), "Visible", false);
    await $.mset((await $.v(C, "MF59A")), "Visible", true);
    await $.mcall((await $.v(C, "DBLookupComboBox2")), "CanFocus", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm7", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TForm7", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
