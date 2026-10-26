// Generated from createmess.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("createmess", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBCtrls", "ComCtrls", "ExtCtrls", "DBViewComboBox", "SearchEdit", "Menus", "ActnList", "Mask", "DBCtrlsEh", "Unit2", "OUT_MT", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TForm5", "TForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "header": {"name": "Header", "type": "TTabSheet"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "sendertype": {"name": "sendertype", "type": "TComboBox"}, "combobox2": {"name": "ComboBox2", "type": "TComboBox"}, "recivertype": {"name": "recivertype", "type": "TComboBox"}, "senderlt": {"name": "senderlt", "type": "TComboBox"}, "monitoring": {"name": "monitoring", "type": "TComboBox"}, "application": {"name": "Application", "type": "TComboBox"}, "priority": {"name": "priority", "type": "TComboBox"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "scrollbox1": {"name": "ScrollBox1", "type": "TScrollBox"}, "mainpanel": {"name": "MainPanel", "type": "TPanel"}, "mf20": {"name": "MF20", "type": "TPanel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "mf23b": {"name": "MF23B", "type": "TPanel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "mf26t": {"name": "MF26T", "type": "TPanel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "mf32a": {"name": "MF32A", "type": "TPanel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "mf32a_val": {"name": "mf32a_val", "type": "TDBLookupComboBox"}, "mf33b": {"name": "MF33B", "type": "TPanel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "mf50": {"name": "MF50", "type": "TPanel"}, "mf50_main": {"name": "MF50_main", "type": "TPanel"}, "label20": {"name": "Label20", "type": "TLabel"}, "cmf50": {"name": "CMF50", "type": "TComboBox"}, "mf50k": {"name": "MF50K", "type": "TPanel"}, "memo2_mf50": {"name": "Memo2_MF50", "type": "TMemo"}, "edit3_mf50": {"name": "Edit3_MF50", "type": "TSearchEdit"}, "mf50a": {"name": "MF50A", "type": "TPanel"}, "edit2_mf50": {"name": "Edit2_MF50", "type": "TEdit"}, "memo1_mf50": {"name": "Memo1_MF50", "type": "TMemo"}, "edit1_mf50": {"name": "Edit1_MF50", "type": "TSearchEdit"}, "mf50f": {"name": "MF50F", "type": "TPanel"}, "memo3_mf50": {"name": "Memo3_MF50", "type": "TMemo"}, "edit4_mf50": {"name": "Edit4_MF50", "type": "TSearchEdit"}, "mf52": {"name": "MF52", "type": "TPanel"}, "mf52_main": {"name": "MF52_main", "type": "TPanel"}, "label21": {"name": "Label21", "type": "TLabel"}, "cmf52": {"name": "CMF52", "type": "TComboBox"}, "mf52a": {"name": "MF52A", "type": "TPanel"}, "edit1_mf52": {"name": "Edit1_MF52", "type": "TEdit"}, "edit2_mf52": {"name": "Edit2_MF52", "type": "TEdit"}, "memo1_mf52": {"name": "Memo1_MF52", "type": "TMemo"}, "mf52d": {"name": "MF52D", "type": "TPanel"}, "edit3_mf52": {"name": "Edit3_MF52", "type": "TEdit"}, "memo2_mf52": {"name": "Memo2_MF52", "type": "TMemo"}, "mf53": {"name": "MF53", "type": "TPanel"}, "mf53_main": {"name": "MF53_main", "type": "TPanel"}, "label22": {"name": "Label22", "type": "TLabel"}, "cmf53": {"name": "CMF53", "type": "TComboBox"}, "mf53a": {"name": "MF53A", "type": "TPanel"}, "edit1_mf53": {"name": "Edit1_MF53", "type": "TEdit"}, "edit2_mf53": {"name": "Edit2_MF53", "type": "TEdit"}, "memo1_mf53": {"name": "Memo1_MF53", "type": "TMemo"}, "mf53b": {"name": "MF53B", "type": "TPanel"}, "edit3_mf53": {"name": "Edit3_MF53", "type": "TEdit"}, "edit4_mf53": {"name": "Edit4_MF53", "type": "TEdit"}, "mf53d": {"name": "MF53D", "type": "TPanel"}, "edit5_mf53": {"name": "Edit5_MF53", "type": "TEdit"}, "memo2_mf53": {"name": "Memo2_MF53", "type": "TMemo"}, "mf54": {"name": "MF54", "type": "TPanel"}, "mf54_main": {"name": "MF54_main", "type": "TPanel"}, "label23": {"name": "Label23", "type": "TLabel"}, "cmf54": {"name": "CMF54", "type": "TComboBox"}, "mf54a": {"name": "MF54A", "type": "TPanel"}, "edit1_mf54": {"name": "Edit1_MF54", "type": "TEdit"}, "edit2_mf54": {"name": "Edit2_MF54", "type": "TEdit"}, "memo1_mf54": {"name": "Memo1_MF54", "type": "TMemo"}, "mf54b": {"name": "MF54B", "type": "TPanel"}, "edit4_mf54": {"name": "Edit4_MF54", "type": "TEdit"}, "edit5_mf54": {"name": "Edit5_MF54", "type": "TEdit"}, "mf54d": {"name": "MF54D", "type": "TPanel"}, "edit6_mf54": {"name": "Edit6_MF54", "type": "TEdit"}, "memo2_mf54": {"name": "Memo2_MF54", "type": "TMemo"}, "mf55": {"name": "MF55", "type": "TPanel"}, "mf55_main": {"name": "MF55_main", "type": "TPanel"}, "label24": {"name": "Label24", "type": "TLabel"}, "cmf55": {"name": "CMF55", "type": "TComboBox"}, "mf55a": {"name": "MF55A", "type": "TPanel"}, "edit1_mf55": {"name": "Edit1_MF55", "type": "TEdit"}, "edit2_mf55": {"name": "Edit2_MF55", "type": "TEdit"}, "memo1_mf55": {"name": "Memo1_MF55", "type": "TMemo"}, "mf55b": {"name": "MF55B", "type": "TPanel"}, "edit3_mf55": {"name": "Edit3_MF55", "type": "TEdit"}, "edit4_mf55": {"name": "Edit4_MF55", "type": "TEdit"}, "mf55d": {"name": "MF55D", "type": "TPanel"}, "edit5_mf55": {"name": "Edit5_MF55", "type": "TEdit"}, "memo2_mf55": {"name": "Memo2_MF55", "type": "TMemo"}, "mf56": {"name": "MF56", "type": "TPanel"}, "mf56_main": {"name": "MF56_main", "type": "TPanel"}, "label25": {"name": "Label25", "type": "TLabel"}, "cmf56": {"name": "CMF56", "type": "TComboBox"}, "mf56a": {"name": "MF56A", "type": "TPanel"}, "edit1_mf56": {"name": "Edit1_MF56", "type": "TEdit"}, "edit2_mf56": {"name": "Edit2_MF56", "type": "TEdit"}, "memo1_mf56": {"name": "Memo1_MF56", "type": "TMemo"}, "mf56c": {"name": "MF56C", "type": "TPanel"}, "edit3_mf56": {"name": "Edit3_MF56", "type": "TEdit"}, "mf56d": {"name": "MF56D", "type": "TPanel"}, "edit4_mf56": {"name": "Edit4_MF56", "type": "TEdit"}, "memo2_mf56": {"name": "Memo2_MF56", "type": "TMemo"}, "mf57": {"name": "MF57", "type": "TPanel"}, "mf57_main": {"name": "MF57_main", "type": "TPanel"}, "label26": {"name": "Label26", "type": "TLabel"}, "cmf57": {"name": "CMF57", "type": "TComboBox"}, "mf57a": {"name": "MF57A", "type": "TPanel"}, "edit1_mf57": {"name": "Edit1_MF57", "type": "TEdit"}, "edit2_mf57": {"name": "Edit2_MF57", "type": "TEdit"}, "memo1_mf57": {"name": "Memo1_MF57", "type": "TMemo"}, "mf57b": {"name": "MF57B", "type": "TPanel"}, "edit3_mf57": {"name": "Edit3_MF57", "type": "TEdit"}, "edit4_mf57": {"name": "Edit4_MF57", "type": "TEdit"}, "mf57c": {"name": "MF57C", "type": "TPanel"}, "edit5_mf57": {"name": "Edit5_MF57", "type": "TEdit"}, "mf57d": {"name": "MF57D", "type": "TPanel"}, "edit6_mf57": {"name": "Edit6_MF57", "type": "TEdit"}, "memo2_mf57": {"name": "Memo2_MF57", "type": "TMemo"}, "mf70": {"name": "MF70", "type": "TPanel"}, "label27": {"name": "Label27", "type": "TLabel"}, "mf71a": {"name": "MF71A", "type": "TPanel"}, "label28": {"name": "Label28", "type": "TLabel"}, "label29": {"name": "Label29", "type": "TLabel"}, "mf71f": {"name": "MF71F", "type": "TPanel"}, "mf71f_main": {"name": "MF71F_main", "type": "TPanel"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "new_mf71f": {"name": "New_MF71F", "type": "TButton"}, "mf71f_1": {"name": "MF71F_1", "type": "TPanel"}, "label30": {"name": "Label30", "type": "TLabel"}, "edit1_mf71f": {"name": "Edit1_MF71F", "type": "TEdit"}, "edit2_mf71f": {"name": "Edit2_MF71F", "type": "TEdit"}, "delete1": {"name": "Delete1", "type": "TButton"}, "mf71f_2": {"name": "MF71F_2", "type": "TPanel"}, "label31": {"name": "Label31", "type": "TLabel"}, "edit3_mf71f": {"name": "Edit3_MF71F", "type": "TEdit"}, "edit4_mf71f": {"name": "Edit4_MF71F", "type": "TEdit"}, "delete2": {"name": "Delete2", "type": "TButton"}, "mf71f_3": {"name": "MF71F_3", "type": "TPanel"}, "label32": {"name": "Label32", "type": "TLabel"}, "edit5_mf71f": {"name": "Edit5_MF71F", "type": "TEdit"}, "edit6_mf71f": {"name": "Edit6_MF71F", "type": "TEdit"}, "delete3": {"name": "Delete3", "type": "TButton"}, "mf72": {"name": "MF72", "type": "TPanel"}, "label34": {"name": "Label34", "type": "TLabel"}, "label37": {"name": "Label37", "type": "TLabel"}, "mf77b": {"name": "MF77B", "type": "TPanel"}, "label35": {"name": "Label35", "type": "TLabel"}, "label36": {"name": "Label36", "type": "TLabel"}, "mf71g": {"name": "MF71G", "type": "TPanel"}, "label38": {"name": "Label38", "type": "TLabel"}, "edit1_mf71g": {"name": "Edit1_MF71G", "type": "TEdit"}, "edit2_mf71g": {"name": "Edit2_MF71G", "type": "TEdit"}, "mf59_59a": {"name": "MF59_59A", "type": "TPanel"}, "mf59_main": {"name": "MF59_main", "type": "TPanel"}, "label33": {"name": "Label33", "type": "TLabel"}, "cmf59": {"name": "CMF59", "type": "TComboBox"}, "mf59": {"name": "MF59", "type": "TPanel"}, "memo1_mf59": {"name": "Memo1_MF59", "type": "TMemo"}, "edit1_mf59": {"name": "Edit1_MF59", "type": "TEdit"}, "mf59a": {"name": "MF59A", "type": "TPanel"}, "edit2_mf59": {"name": "Edit2_MF59", "type": "TEdit"}, "edit3_mf59": {"name": "Edit3_MF59", "type": "TEdit"}, "mf36": {"name": "MF36", "type": "TPanel"}, "label39": {"name": "Label39", "type": "TLabel"}, "popmen": {"name": "Popmen", "type": "TPopupMenu"}, "createmessage1": {"name": "Createmessage1", "type": "TMenuItem"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "fin2": {"name": "fin2", "type": "TDBEdit"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "reciverbic": {"name": "reciverbic", "type": "TDBEdit"}, "mf20_edit": {"name": "MF20_edit", "type": "TDBEdit"}, "mf23b_edit": {"name": "MF23b_edit", "type": "TDBEdit"}, "mf26t_edit": {"name": "MF26T_edit", "type": "TDBEdit"}, "edit11_mf32a": {"name": "Edit11_mf32a", "type": "TDBEdit"}, "mf33_edit": {"name": "MF33_edit", "type": "TDBEdit"}, "mf33_edit2": {"name": "mf33_edit2", "type": "TDBEdit"}, "mf36_edit": {"name": "MF36_edit", "type": "TDBEdit"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "mf70_memo": {"name": "Mf70_memo", "type": "TDBMemo"}, "mf72_memo": {"name": "mf72_memo", "type": "TDBMemo"}, "mf77_memo": {"name": "MF77_memo", "type": "TDBMemo"}, "edit1_mf71a": {"name": "Edit1_MF71A", "type": "TDBEdit"}}, {});
  U.init(async () => {
    U.var_("Form5", null, "TForm5");
  });
  U.method("TForm5", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Form5")), "Caption", "Swift Out Messages");
  await $.mset((await $.v(C, "senderlt")), "Text", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "bankinfo")), "fieldbyname", ["SWIFT"])), "asstring")), "XXX"));
  await $.mset((await $.v(C, "sendertype")), "Text", "Institution");
  await $.mset((await $.v(C, "ComboBox2")), "Text", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "bankinfo")), "fieldbyname", ["SWIFT"])), "asstring")), "XXX"));
  await $.mset((await $.v(C, "recivertype")), "Text", "Institution");
  await $.mset((await $.v(C, "Application")), "Text", "FIN");
  await $.mset((await $.v(C, "priority")), "Text", "N");
  await $.mset((await $.v(C, "monitoring")), "Text", "N");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("clearcomboitems2", async function clearcomboitems2(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "j": 0};
  await $.mset((await $.mv((await $.v(C, "form5")), "MF50A")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "form5")), "MF50K")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "form5")), "MF50F")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "form5")), "MF52A")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "form5")), "MF52D")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "form5")), "MF53A")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "form5")), "MF53B")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "form5")), "MF53D")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "form5")), "MF54A")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "form5")), "MF54B")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "form5")), "MF54D")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "form5")), "MF55A")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "form5")), "MF55B")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "form5")), "MF55D")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "form5")), "MF56A")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "form5")), "MF56C")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "form5")), "MF56D")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "form5")), "MF57A")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "form5")), "MF57B")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "form5")), "MF57C")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "form5")), "MF57D")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "form5")), "MF59A")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "form5")), "MF59")), "Visible", false);
  {
    const $t1 = (await $.mv((await $.v(C, "swDataModule")), "ComboItems"));
  }
  { const $t2 = $.sub((await $.mv((await $.v(C, "form5")), "ComponentCount")), 1);
    L0["i"] = 0;
    let $t3 = true;
    for (;;) {
      if (!$t3) { L0["i"] = $.succ(L0["i"], 1); }
      $t3 = false;
      if (!($.ord(L0["i"]) <= $.ord($t2))) break;
      if ($.truthy($.ne((await $.mv((await $.idx((await $.mv((await $.v(C, "form5")), "Components")), [L0["i"]])), "Name")), "fincopy"))) {
        if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.v(C, "form5")), "Components")), [L0["i"]])), "ClassType")), (await $.v(C, "TComboBox"))))) {
          {
            const $t4 = (await $.mv((await $.v(C, "swDataModule")), "ComboItems"));
            await $.stmt((await $.wcall([$t4], "setvariable", ["Comboname", (await $.mv((await $.idx((await $.mv((await $.wv([$t4], "form5", C, false)), "Components")), [(await $.wv([$t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "name"))], C)));
            await $.stmt($.wcall([$t4], "close", [], C));
            await $.stmt($.wcall([$t4], "open", [], C));
            { const $t5 = $.add((await $.mv((await $.mv((await $.wv([$t4], "swDataModule", C, false)), "ComboItems")), "RecordCount")), 1);
              await $.wset([$t4], "j", 1, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
              let $t6 = true;
              for (;;) {
                if (!$t6) { await $.wset([$t4], "j", $.succ((await $.wv([$t4], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
                $t6 = false;
                if (!($.ord((await $.wv([$t4], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t5))) break;
                if ($.truthy($.ne((await $.mv(((await $.idx((await $.mv((await $.wv([$t4], "form5", C, false)), "Components")), [(await $.wv([$t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "ItemIndex")), 0))) {
                  if ($.truthy($.eq((await $.wv([$t4], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1))) {
                    await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t4], "form5", C, false)), "Components")), [(await $.wv([$t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "items")), "Clear", []);
                  } else {
                    if ($.truthy($.ne((await $.idx((await $.mv(((await $.idx((await $.mv((await $.wv([$t4], "form5", C, false)), "Components")), [(await $.wv([$t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Items")), [$.add((await $.wv([$t4], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 2)])), ""))) {
                      await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t4], "form5", C, false)), "Components")), [(await $.wv([$t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "items")), "Clear", []);
                      await $.mcall((await $.mv((await $.wv([$t4], "swDataModule", C, false)), "ComboItems")), "Next", []);
                    }
                  }
                }
                await $.tick();
              }
            }
          }
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TForm5", "PageControl1Change", async function PageControl1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "mestype": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Fin2")), "text")), ""))) {
    await $.mset((await $.v(C, "PageControl1")), "ActivePage", (await $.v(C, "Header")));
    await $.mset((await $.v(C, "FIN2")), "Color", (await $.v(C, "clred")));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "reciverbic")), "Text")), ""))) {
    await $.mset((await $.v(C, "PageControl1")), "ActivePage", (await $.v(C, "Header")));
    await $.mset((await $.v(C, "reciverbic")), "Color", (await $.v(C, "clred")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("insertcomboboxitems2", async function insertcomboboxitems2(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "j": 0};
  {
    const $t7 = (await $.mv((await $.v(C, "swDataModule")), "ComboItems"));
  }
  { const $t8 = $.sub((await $.mv((await $.v(C, "form5")), "ComponentCount")), 1);
    L0["i"] = 0;
    let $t9 = true;
    for (;;) {
      if (!$t9) { L0["i"] = $.succ(L0["i"], 1); }
      $t9 = false;
      if (!($.ord(L0["i"]) <= $.ord($t8))) break;
      if ($.truthy($.ne((await $.mv((await $.idx((await $.mv((await $.v(C, "form5")), "Components")), [L0["i"]])), "Name")), "fincopy"))) {
        if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.v(C, "form5")), "Components")), [L0["i"]])), "ClassType")), (await $.v(C, "TComboBox"))))) {
          {
            const $t10 = (await $.mv((await $.v(C, "swDataModule")), "ComboItems"));
            await $.stmt((await $.wcall([$t10], "setvariable", ["Comboname", (await $.mv((await $.idx((await $.mv((await $.wv([$t10], "form5", C, false)), "Components")), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "name"))], C)));
            await $.stmt($.wcall([$t10], "close", [], C));
            await $.stmt($.wcall([$t10], "open", [], C));
            { const $t11 = $.add((await $.mv((await $.mv((await $.wv([$t10], "swDataModule", C, false)), "ComboItems")), "RecordCount")), 1);
              await $.wset([$t10], "j", 1, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
              let $t12 = true;
              for (;;) {
                if (!$t12) { await $.wset([$t10], "j", $.succ((await $.wv([$t10], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
                $t12 = false;
                if (!($.ord((await $.wv([$t10], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t11))) break;
                if ($.truthy($.ne((await $.mv(((await $.idx((await $.mv((await $.wv([$t10], "form5", C, false)), "Components")), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "ItemIndex")), 0))) {
                  if ($.truthy($.eq((await $.wv([$t10], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1))) {
                    await $.stmt((await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t10], "form5", C, false)), "Components")), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "items")), "add", [""])));
                  } else {
                    if ($.truthy($.eq((await $.idx((await $.mv(((await $.idx((await $.mv((await $.wv([$t10], "form5", C, false)), "Components")), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Items")), [$.add((await $.wv([$t10], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 2)])), ""))) {
                      await $.stmt((await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t10], "form5", C, false)), "Components")), [(await $.wv([$t10], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "items")), "add", [(await $.mv((await $.mv((await $.wv([$t10], "swDataModule", C, false)), "ComboItemsCATEGORY")), "asstring"))])));
                      await $.mcall((await $.mv((await $.wv([$t10], "swDataModule", C, false)), "ComboItems")), "Next", []);
                    }
                  }
                }
                await $.tick();
              }
            }
          }
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TForm5", "CMF50Enter", async function CMF50Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((L0["sender"]), "Items")), "Count")), 0))) {
    await $.stmt($.call(C, "InsertComboBoxItems2", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm5", "CMF50Change", async function CMF50Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "name1": '', "selected1": '', "i": 0, "j": 0, "k": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "SWDataModule")), "aftercomboselect")), "Active", true);
  await $.mset((await $.mv((await $.v(C, "SWDataModule")), "Comboselect")), "Active", true);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "aftercomboselect")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Comboselect")), "Refresh", []);
  L0["name1"] = (await $.mv((L0["sender"]), "name"));
  if ($.truthy($.ne((await $.mv((L0["sender"]), "text")), ""))) {
    L0["selected1"] = (await $.mv((L0["sender"]), "text"));
  } else {
    L0["selected1"] = "1";
  }
  {
    const $t13 = (await $.mv((await $.v(C, "SWDataModule")), "aftercomboselect"));
    await $.stmt((await $.wcall([$t13], "SetVariable", ["name", (await $.wv([$t13], "name1", { get: async () => L0["name1"], set: async (v) => { L0["name1"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t13], "SetVariable", ["selected", (await $.wv([$t13], "selected1", { get: async () => L0["selected1"], set: async (v) => { L0["selected1"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t13], "close", [], C));
    await $.stmt($.wcall([$t13], "open", [], C));
  }
  { const $t14 = (await $.mv((await $.mv((L0["sender"]), "items")), "count"));
    L0["j"] = 1;
    let $t15 = true;
    for (;;) {
      if (!$t15) { L0["j"] = $.succ(L0["j"], 1); }
      $t15 = false;
      if (!($.ord(L0["j"]) <= $.ord($t14))) break;
      { const $t16 = $.sub((await $.mv((await $.v(C, "form5")), "ComponentCount")), 1);
        L0["i"] = 0;
        let $t17 = true;
        for (;;) {
          if (!$t17) { L0["i"] = $.succ(L0["i"], 1); }
          $t17 = false;
          if (!($.ord(L0["i"]) <= $.ord($t16))) break;
          if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.v(C, "form5")), "Components")), [L0["i"]])), "ClassType")), (await $.v(C, "TPanel"))))) {
            if ($.truthy($.eq((await $.mv(((await $.idx((await $.mv((await $.v(C, "form5")), "Components")), [L0["i"]]))), "name")), (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "aftercomboselectSW_FIELD")), "AsString"))))) {
              await $.mset((await $.idx((await $.mv((await $.v(C, "form5")), "Components")), [L0["i"]])), "Visible", false);
            }
          }
          await $.tick();
        }
      }
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "aftercomboselect")), "Next", []);
      await $.tick();
    }
  }
  {
    const $t18 = (await $.mv((await $.v(C, "SWDataModule")), "Comboselect"));
    await $.stmt((await $.wcall([$t18], "SetVariable", ["name", (await $.wv([$t18], "name1", { get: async () => L0["name1"], set: async (v) => { L0["name1"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t18], "SetVariable", ["selected", (await $.wv([$t18], "selected1", { get: async () => L0["selected1"], set: async (v) => { L0["selected1"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t18], "close", [], C));
    await $.stmt($.wcall([$t18], "open", [], C));
  }
  { const $t19 = $.sub((await $.mv((await $.v(C, "form5")), "ComponentCount")), 1);
    L0["k"] = 0;
    let $t20 = true;
    for (;;) {
      if (!$t20) { L0["k"] = $.succ(L0["k"], 1); }
      $t20 = false;
      if (!($.ord(L0["k"]) <= $.ord($t19))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.v(C, "form5")), "Components")), [L0["k"]])), "ClassType")), (await $.v(C, "TPanel"))))) {
        if ($.truthy($.eq((await $.mv(((await $.idx((await $.mv((await $.v(C, "form5")), "Components")), [L0["k"]]))), "name")), (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "ComboselectSW_FIELD")), "AsString"))))) {
          await $.mset((await $.idx((await $.mv((await $.v(C, "form5")), "Components")), [L0["k"]])), "Visible", true);
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm5", "FINChange", async function FINChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "mestype": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "clearcomboitems2", []));
  if ($.truthy($.eq(L0["mestype"], "MT103"))) {
    await $.mset((await $.v(C, "MF20")), "Visible", true);
    await $.mset((await $.v(C, "MF23B")), "Visible", true);
    await $.mset((await $.v(C, "MF26T")), "Visible", true);
    await $.mset((await $.v(C, "MF32A")), "Visible", true);
    await $.mset((await $.v(C, "MF33B")), "Visible", true);
    await $.mset((await $.v(C, "MF36")), "Visible", true);
    await $.mset((await $.v(C, "MF50")), "Visible", true);
    await $.mset((await $.v(C, "MF52")), "Visible", true);
    await $.mset((await $.v(C, "MF53")), "Visible", true);
    await $.mset((await $.v(C, "MF54")), "Visible", true);
    await $.mset((await $.v(C, "MF55")), "Visible", true);
    await $.mset((await $.v(C, "MF56")), "Visible", true);
    await $.mset((await $.v(C, "MF57")), "Visible", true);
    await $.mset((await $.v(C, "MF59_59A")), "Visible", true);
    await $.mset((await $.v(C, "MF70")), "Visible", true);
    await $.mset((await $.v(C, "MF71F")), "Visible", true);
    await $.mset((await $.v(C, "MF71G")), "Visible", true);
    await $.mset((await $.v(C, "MF72")), "visible", true);
    await $.mset((await $.v(C, "MF77B")), "visible", true);
    await $.mset((await $.v(C, "MF77B")), "visible", false);
    await $.mset((await $.v(C, "MF72")), "visible", false);
    await $.mset((await $.v(C, "MF71G")), "Visible", false);
    await $.mset((await $.v(C, "MF71F")), "Visible", false);
    await $.mset((await $.v(C, "MF70")), "Visible", false);
    await $.mset((await $.v(C, "MF59_59A")), "Visible", false);
    await $.mset((await $.v(C, "MF57")), "Visible", false);
    await $.mset((await $.v(C, "MF56")), "Visible", false);
    await $.mset((await $.v(C, "MF55")), "Visible", false);
    await $.mset((await $.v(C, "MF54")), "Visible", false);
    await $.mset((await $.v(C, "MF53")), "Visible", false);
    await $.mset((await $.v(C, "MF52")), "Visible", false);
    await $.mset((await $.v(C, "MF50")), "Visible", false);
    await $.mset((await $.v(C, "MF36")), "Visible", false);
    await $.mset((await $.v(C, "MF33B")), "Visible", false);
    await $.mset((await $.v(C, "MF32A")), "Visible", false);
    await $.mset((await $.v(C, "MF26T")), "Visible", false);
    await $.mset((await $.v(C, "MF23B")), "Visible", false);
    await $.mset((await $.v(C, "MF20")), "Visible", false);
    await $.mset((await $.v(C, "MF20")), "Visible", true);
    await $.mset((await $.v(C, "MF23B")), "Visible", true);
    await $.mset((await $.v(C, "MF26T")), "Visible", true);
    await $.mset((await $.v(C, "MF32A")), "Visible", true);
    await $.mset((await $.v(C, "MF33B")), "Visible", true);
    await $.mset((await $.v(C, "MF36")), "Visible", true);
    await $.mset((await $.v(C, "MF50")), "Visible", true);
    await $.mset((await $.v(C, "MF52")), "Visible", true);
    await $.mset((await $.v(C, "MF53")), "Visible", true);
    await $.mset((await $.v(C, "MF54")), "Visible", true);
    await $.mset((await $.v(C, "MF55")), "Visible", true);
    await $.mset((await $.v(C, "MF56")), "Visible", true);
    await $.mset((await $.v(C, "MF57")), "Visible", true);
    await $.mset((await $.v(C, "MF59_59A")), "Visible", true);
    await $.mset((await $.v(C, "MF70")), "Visible", true);
    await $.mset((await $.v(C, "MF71F")), "Visible", true);
    await $.mset((await $.v(C, "MF71G")), "Visible", true);
    await $.mset((await $.v(C, "MF72")), "visible", true);
    await $.mset((await $.v(C, "MF77B")), "visible", true);
  } else {
    if ($.truthy($.eq(L0["mestype"], "MT103AZN"))) {
      await $.mset((await $.v(C, "MF20")), "Visible", true);
      await $.mset((await $.v(C, "MF23B")), "Visible", true);
      await $.mset((await $.v(C, "MF26T")), "Visible", true);
      await $.mset((await $.v(C, "MF32A")), "Visible", true);
      await $.mset((await $.v(C, "MF33B")), "Visible", true);
      await $.mset((await $.v(C, "MF36")), "Visible", true);
      await $.mset((await $.v(C, "MF50")), "Visible", true);
      await $.mset((await $.v(C, "MF52")), "Visible", true);
      await $.mset((await $.v(C, "MF53")), "Visible", true);
      await $.mset((await $.v(C, "MF54")), "Visible", true);
      await $.mset((await $.v(C, "MF55")), "Visible", true);
      await $.mset((await $.v(C, "MF56")), "Visible", true);
      await $.mset((await $.v(C, "MF57")), "Visible", true);
      await $.mset((await $.v(C, "MF59_59A")), "Visible", true);
      await $.mset((await $.v(C, "MF70")), "Visible", true);
      await $.mset((await $.v(C, "MF71F")), "Visible", true);
      await $.mset((await $.v(C, "MF71G")), "Visible", true);
      await $.mset((await $.v(C, "MF72")), "visible", true);
      await $.mset((await $.v(C, "MF77B")), "visible", true);
      await $.mset((await $.v(C, "MF77B")), "visible", false);
      await $.mset((await $.v(C, "MF72")), "visible", false);
      await $.mset((await $.v(C, "MF71G")), "Visible", false);
      await $.mset((await $.v(C, "MF71F")), "Visible", false);
      await $.mset((await $.v(C, "MF70")), "Visible", false);
      await $.mset((await $.v(C, "MF59_59A")), "Visible", false);
      await $.mset((await $.v(C, "MF57")), "Visible", false);
      await $.mset((await $.v(C, "MF56")), "Visible", false);
      await $.mset((await $.v(C, "MF55")), "Visible", false);
      await $.mset((await $.v(C, "MF54")), "Visible", false);
      await $.mset((await $.v(C, "MF53")), "Visible", false);
      await $.mset((await $.v(C, "MF52")), "Visible", false);
      await $.mset((await $.v(C, "MF50")), "Visible", false);
      await $.mset((await $.v(C, "MF36")), "Visible", false);
      await $.mset((await $.v(C, "MF33B")), "Visible", false);
      await $.mset((await $.v(C, "MF32A")), "Visible", false);
      await $.mset((await $.v(C, "MF26T")), "Visible", false);
      await $.mset((await $.v(C, "MF23B")), "Visible", false);
      await $.mset((await $.v(C, "MF20")), "Visible", false);
      await $.mset((await $.v(C, "MF20")), "Visible", true);
      await $.mset((await $.v(C, "MF23B")), "Visible", true);
      await $.mset((await $.v(C, "MF26T")), "Visible", false);
      await $.mset((await $.v(C, "MF32A")), "Visible", true);
      await $.mset((await $.v(C, "MF33B")), "Visible", false);
      await $.mset((await $.v(C, "MF36")), "Visible", false);
      await $.mset((await $.v(C, "MF50")), "Visible", true);
      await $.mset((await $.v(C, "MF52")), "Visible", false);
      await $.mset((await $.v(C, "MF53")), "Visible", false);
      await $.mset((await $.v(C, "MF54")), "Visible", false);
      await $.mset((await $.v(C, "MF55")), "Visible", false);
      await $.mset((await $.v(C, "MF56")), "Visible", false);
      await $.mset((await $.v(C, "MF57")), "Visible", false);
      await $.mset((await $.v(C, "MF59_59A")), "Visible", true);
      await $.mset((await $.v(C, "MF70")), "Visible", true);
      await $.mset((await $.v(C, "MF71F")), "Visible", false);
      await $.mset((await $.v(C, "MF71G")), "Visible", false);
      await $.mset((await $.v(C, "MF72")), "visible", true);
      await $.mset((await $.v(C, "MF77B")), "visible", false);
    } else {
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm5", "Memo1_MF50KeyPress", async function Memo1_MF50KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "i": 0, "n": 0, "k": 0, "cposy": 0, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set((await $.call(C, "UpCase", [(await L0["key"].get())])));
  if ($.truthy((await $.or_(($.eq((await L0["key"].get()), "\r")), async () => ($.eq((await L0["key"].get()), "\b")))))) {
    return L0.result;
  }
  L0["cposy"] = (await $.mv((await $.mv((L0["sender"]), "CaretPos")), "y"));
  L0["s"] = (await $.mv((L0["sender"]), "text"));
  if ($.truthy($.gt((await $.call(C, "length", [L0["s"]])), 0))) {
    if ($.truthy(((await $.or_(($.eq((await $.idx(L0["s"], [(await $.call(C, "length", [L0["s"]]))])), "\r")), async () => ($.eq((await $.idx(L0["s"], [(await $.call(C, "length", [L0["s"]]))])), "\n"))))))) {
      await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s"], async ($t21) => { L0["s"] = $t21; }), (await $.call(C, "length", [L0["s"]])), 1])));
    }
  }
  await $.mset(L0["sender"], "text", L0["s"]);
  if ($.truthy($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 35))) {
    if ($.truthy($.lt(L0["cposy"], 3))) {
      if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
        L0["n"] = 0;
        { const $t22 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
          L0["i"] = 0;
          let $t23 = true;
          for (;;) {
            if (!$t23) { L0["i"] = $.succ(L0["i"], 1); }
            $t23 = false;
            if (!($.ord(L0["i"]) <= $.ord($t22))) break;
            L0["k"] = (await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["i"]]))]));
            L0["n"] = $.add(L0["n"], L0["k"]);
            if ($.truthy($.lt(L0["k"], 35))) {
              break;
            }
            L0["n"] = $.add(L0["n"], 2);
            await $.tick();
          }
        }
        await $.mset(L0["sender"], "selstart", L0["n"]);
        await $.mset(L0["sender"], "sellength", 0);
      } else {
        await $.stmt((await $.mcall((await $.mv(L0["sender"], "lines")), "Add", [(await L0["key"].get())])));
        await L0["key"].set("\u0000");
      }
    } else {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TForm5", "MF72_memoKeyPress", async function MF72_memoKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "i": 0, "n": 0, "k": 0, "cposy": 0, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set((await $.call(C, "UpCase", [(await L0["key"].get())])));
  if ($.truthy((await $.or_(($.eq((await L0["key"].get()), "\r")), async () => ($.eq((await L0["key"].get()), "\b")))))) {
    return L0.result;
  }
  L0["cposy"] = (await $.mv((await $.mv((L0["sender"]), "CaretPos")), "y"));
  L0["s"] = (await $.mv((L0["sender"]), "text"));
  if ($.truthy($.gt((await $.call(C, "length", [L0["s"]])), 0))) {
    if ($.truthy(((await $.or_(($.eq((await $.idx(L0["s"], [(await $.call(C, "length", [L0["s"]]))])), "\r")), async () => ($.eq((await $.idx(L0["s"], [(await $.call(C, "length", [L0["s"]]))])), "\n"))))))) {
      await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s"], async ($t24) => { L0["s"] = $t24; }), (await $.call(C, "length", [L0["s"]])), 1])));
    }
  }
  await $.mset(L0["sender"], "text", L0["s"]);
  if ($.truthy($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 35))) {
    if ($.truthy($.lt(L0["cposy"], 7))) {
      if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
        L0["n"] = 0;
        { const $t25 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
          L0["i"] = 0;
          let $t26 = true;
          for (;;) {
            if (!$t26) { L0["i"] = $.succ(L0["i"], 1); }
            $t26 = false;
            if (!($.ord(L0["i"]) <= $.ord($t25))) break;
            L0["k"] = (await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["i"]]))]));
            L0["n"] = $.add(L0["n"], L0["k"]);
            if ($.truthy($.lt(L0["k"], 35))) {
              break;
            }
            L0["n"] = $.add(L0["n"], 2);
            await $.tick();
          }
        }
        await $.mset(L0["sender"], "selstart", L0["n"]);
        await $.mset(L0["sender"], "sellength", 0);
      } else {
        await $.stmt((await $.mcall((await $.mv(L0["sender"], "lines")), "Add", [(await L0["key"].get())])));
        await L0["key"].set("\u0000");
      }
    } else {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TForm5", "MF77_memoKeyPress", async function MF77_memoKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "i": 0, "n": 0, "k": 0, "cposy": 0, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set((await $.call(C, "UpCase", [(await L0["key"].get())])));
  if ($.truthy((await $.or_(($.eq((await L0["key"].get()), "\r")), async () => ($.eq((await L0["key"].get()), "\b")))))) {
    return L0.result;
  }
  L0["cposy"] = (await $.mv((await $.mv((L0["sender"]), "CaretPos")), "y"));
  L0["s"] = (await $.mv((L0["sender"]), "text"));
  if ($.truthy($.gt((await $.call(C, "length", [L0["s"]])), 0))) {
    if ($.truthy(((await $.or_(($.eq((await $.idx(L0["s"], [(await $.call(C, "length", [L0["s"]]))])), "\r")), async () => ($.eq((await $.idx(L0["s"], [(await $.call(C, "length", [L0["s"]]))])), "\n"))))))) {
      await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s"], async ($t27) => { L0["s"] = $t27; }), (await $.call(C, "length", [L0["s"]])), 1])));
    }
  }
  await $.mset(L0["sender"], "text", L0["s"]);
  if ($.truthy($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 35))) {
    if ($.truthy($.lt(L0["cposy"], 2))) {
      if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
        L0["n"] = 0;
        { const $t28 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
          L0["i"] = 0;
          let $t29 = true;
          for (;;) {
            if (!$t29) { L0["i"] = $.succ(L0["i"], 1); }
            $t29 = false;
            if (!($.ord(L0["i"]) <= $.ord($t28))) break;
            L0["k"] = (await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["i"]]))]));
            L0["n"] = $.add(L0["n"], L0["k"]);
            if ($.truthy($.lt(L0["k"], 35))) {
              break;
            }
            L0["n"] = $.add(L0["n"], 2);
            await $.tick();
          }
        }
        await $.mset(L0["sender"], "selstart", L0["n"]);
        await $.mset(L0["sender"], "sellength", 0);
      } else {
        await $.stmt((await $.mcall((await $.mv(L0["sender"], "lines")), "Add", [(await L0["key"].get())])));
        await L0["key"].set("\u0000");
      }
    } else {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TForm5", "insertExecute", async function insertExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "m20": '', "m33": '', "mf331": '', "mf332": '', "m23b": '', "m26t": '', "m32a": '', "m36": '', "m50": '', "m52": '', "m53": '', "m54": '', "m55": '', "m56": '', "v_mf20_reference": '', "m57": '', "m59": '', "m70": '', "m71a": '', "m71f": '', "m71g": '', "m72": '', "m77b": '', "mf20": '', "mf23b": '', "mf26t": '', "mf27": '', "mf32a": '', "mf36": '', "v_sendertype": '', "v_senderbic": '', "v_senderlt": '', "v_application": '', "v_fincopy": '', "v_messagetype": '', "v_priority": '', "v_monitoring": '', "v_receivertype": '', "v_receiverbic": '', "mf32a_date": '', "mf32a_curr": '', "mf32a_amount": '', "mf50_account": '', "mf50_bic": '', "mf50_nameadress": '', "mf52_account": '', "mf52_bic": '', "mf52_nameadress": '', "mf53_account": '', "mf53_bic": '', "mf53_namelocation": '', "mf54_account": '', "mf54_bic": '', "mf54_namelocation": '', "mf55_account": '', "mf55_bic": '', "mf55_namelocation": '', "mf56_account": '', "mf56_bic": '', "mf56_namelocation": '', "mf57_account": '', "mf57_bic": '', "mf57_namelocation": '', "mf59_account": '', "mf59_nameadress": '', "status": '', "mf70": '', "mf71f_child": '', "mf71g_child": '', "dolmayan": '', "stat1": '', "stat2": '', "stat3": '', "stat4": '', "stat5": '', "stat6": '', "mf71a": '', "mf72": '', "mf77b": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "MF23b_edit")), "Text")), ""))) {
    L0["dolmayan"] = $.add(L0["dolmayan"], " MF23,");
    L0["stat1"] = "exitfromprosedure";
  } else {
    L0["stat1"] = "nextprosedure";
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "mf32a_val")), "Text")), ""))) {
    L0["dolmayan"] = $.add(L0["dolmayan"], "  MF32A  Valyuta,");
    L0["stat2"] = "exitfromprosedure";
  } else {
    L0["stat2"] = "nextprosedure";
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit11_mf32a")), "Text")), ""))) {
    L0["dolmayan"] = $.add(L0["dolmayan"], "  MF32A  mebleq,");
    L0["stat3"] = "exitfromprosedure";
  } else {
    L0["stat3"] = "nextprosedure";
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CMF50")), "Text")), ""))) {
    L0["dolmayan"] = $.add(L0["dolmayan"], "  MF50,");
    L0["stat4"] = "exitfromprosedure";
  } else {
    L0["stat4"] = "nextprosedure";
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CMF59")), "Text")), ""))) {
    L0["dolmayan"] = $.add(L0["dolmayan"], "  MF59,");
    L0["stat5"] = "exitfromprosedure";
  } else {
    L0["stat5"] = "nextprosedure";
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit1_MF71A")), "Text")), ""))) {
    L0["dolmayan"] = $.add(L0["dolmayan"], "  MF71A,");
    L0["stat6"] = "exitfromprosedure";
  } else {
    L0["stat6"] = "nextprosedure";
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.eq(L0["stat1"], "nextprosedure")), async () => ($.eq(L0["stat2"], "nextprosedure")))), async () => ($.eq(L0["stat3"], "nextprosedure")))), async () => ($.eq(L0["stat4"], "nextprosedure")))), async () => ($.eq(L0["stat5"], "nextprosedure")))), async () => ($.eq(L0["stat6"], "nextprosedure")))))) {
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "referans")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "referans")), "Open", []);
    {
      const $t30 = (await $.mv((await $.v(C, "SWDataModule")), "referans"));
      await $.stmt((await $.wcall([$t30], "SetVariable", ["FORMATS", (await $.mv((await $.wv([$t30], "FIN2", C, false)), "text"))], C)));
      await $.stmt((await $.wcall([$t30], "SetVariable", ["CURRENSY", (await $.mv((await $.wv([$t30], "mf32a_val", C, false)), "text"))], C)));
    }
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "referans")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "referans")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "referans")), "Open", []);
    await $.mset((await $.v(C, "MF20_edit")), "text", (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "referansrefe")), "asstring")));
    L0["mf23b"] = (await $.mv((await $.v(C, "MF23b_edit")), "Text"));
    L0["mf26t"] = (await $.mv((await $.v(C, "MF26T_edit")), "Text"));
    L0["mf32a_curr"] = (await $.mv((await $.v(C, "mf32a_val")), "Text"));
    L0["mf32a_amount"] = (await $.mv((await $.v(C, "edit11_mf32a")), "Text"));
    if ($.truthy($.ne((await $.mv((await $.v(C, "MF33_edit")), "Text")), ""))) {
      L0["mf331"] = (await $.mv((await $.v(C, "MF33_edit")), "Text"));
      L0["mf332"] = (await $.mv((await $.v(C, "mf33_edit2")), "Text"));
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "mf36_edit")), "Text")), ""))) {
      L0["mf36"] = (await $.mv((await $.v(C, "mf36_edit")), "Text"));
    }
    L0["v_mf20_reference"] = (await $.mv((await $.v(C, "MF20_edit")), "Text"));
    L0["v_sendertype"] = (await $.mv((await $.v(C, "sendertype")), "Text"));
    L0["v_senderbic"] = (await $.mv((await $.v(C, "senderlt")), "Text"));
    L0["v_senderlt"] = (await $.mv((await $.v(C, "senderlt")), "Text"));
    L0["v_application"] = (await $.mv((await $.v(C, "Application")), "Text"));
    L0["v_messagetype"] = (await $.mv((await $.v(C, "fin2")), "Text"));
    L0["v_priority"] = (await $.mv((await $.v(C, "priority")), "Text"));
    L0["v_monitoring"] = (await $.mv((await $.v(C, "monitoring")), "Text"));
    L0["v_receivertype"] = (await $.mv((await $.v(C, "reciverbic")), "Text"));
    L0["v_receiverbic"] = (await $.mv((await $.v(C, "reciverbic")), "text"));
    if ($.truthy($.ne((await $.mv((await $.v(C, "MF20_edit")), "Text")), ""))) {
      L0["m20"] = ":20:";
    } else {
      L0["m20"] = "";
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "MF23b_edit")), "Text")), ""))) {
      L0["m23b"] = ":23B:";
    } else {
      L0["m23b"] = "";
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "MF26T_edit")), "Text")), ""))) {
      L0["m26t"] = ":26T:";
    } else {
      L0["m26t"] = "";
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "edit11_mf32a")), "text")), ""))) {
      L0["m32a"] = ":32A:";
    } else {
      L0["m32a"] = "";
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "MF33_edit")), "Text")), ""))) {
      L0["m33"] = ":33:";
    } else {
      L0["m33"] = "";
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "mf36_edit")), "Text")), ""))) {
      L0["m36"] = ":36:";
    } else {
      L0["m36"] = "";
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF50")), "ItemIndex")), 1))) {
      L0["m50"] = ":50A:";
      L0["mf50_account"] = (await $.mv((await $.v(C, "Edit1_MF50")), "Text"));
      L0["mf50_bic"] = (await $.mv((await $.v(C, "Edit2_MF50")), "Text"));
      L0["mf50_nameadress"] = (await $.mv((await $.v(C, "Memo1_MF50")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF50")), "ItemIndex")), 2))) {
      L0["m50"] = ":50F:";
      L0["mf50_account"] = (await $.mv((await $.v(C, "Edit3_MF50")), "Text"));
      L0["mf50_nameadress"] = (await $.mv((await $.v(C, "Memo2_MF50")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF50")), "ItemIndex")), 3))) {
      L0["m50"] = ":50K:";
      L0["mf50_account"] = (await $.mv((await $.v(C, "Edit4_MF50")), "Text"));
      L0["mf50_nameadress"] = (await $.mv((await $.v(C, "Memo3_MF50")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF50")), "ItemIndex")), 0))) {
      L0["m50"] = "";
      L0["mf50_account"] = "";
      L0["mf50_bic"] = "";
      L0["mf50_nameadress"] = "";
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF52")), "ItemIndex")), 1))) {
      L0["m52"] = ":52A:";
      L0["mf52_account"] = (await $.mv((await $.v(C, "Edit1_MF52")), "Text"));
      L0["mf52_bic"] = (await $.mv((await $.v(C, "Edit2_MF52")), "Text"));
      L0["mf52_nameadress"] = (await $.mv((await $.v(C, "Memo1_MF52")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF52")), "ItemIndex")), 2))) {
      L0["m52"] = ":52D:";
      L0["mf52_account"] = (await $.mv((await $.v(C, "Edit3_MF52")), "Text"));
      L0["mf52_nameadress"] = (await $.mv((await $.v(C, "Memo2_MF52")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF52")), "ItemIndex")), 0))) {
      L0["m52"] = "";
      L0["mf52_account"] = "";
      L0["mf52_bic"] = "";
      L0["mf52_nameadress"] = "";
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF53")), "ItemIndex")), 1))) {
      L0["m53"] = ":53A:";
      L0["mf53_account"] = (await $.mv((await $.v(C, "Edit1_MF53")), "Text"));
      L0["mf53_bic"] = (await $.mv((await $.v(C, "Edit2_MF53")), "Text"));
      L0["mf53_namelocation"] = (await $.mv((await $.v(C, "Memo1_MF53")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF53")), "ItemIndex")), 2))) {
      L0["m53"] = ":53B:";
      L0["mf53_account"] = (await $.mv((await $.v(C, "Edit3_MF53")), "Text"));
      L0["mf53_namelocation"] = (await $.mv((await $.v(C, "Edit4_MF53")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF53")), "ItemIndex")), 3))) {
      L0["m53"] = ":53D:";
      L0["mf53_account"] = (await $.mv((await $.v(C, "Edit5_MF53")), "Text"));
      L0["mf53_namelocation"] = (await $.mv((await $.v(C, "Memo2_MF53")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF53")), "ItemIndex")), 0))) {
      L0["m53"] = "";
      L0["mf53_account"] = "";
      L0["mf53_namelocation"] = "";
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF54")), "ItemIndex")), 1))) {
      L0["m54"] = ":54A:";
      L0["mf54_account"] = (await $.mv((await $.v(C, "Edit1_MF54")), "Text"));
      L0["mf54_bic"] = (await $.mv((await $.v(C, "Edit2_MF50")), "Text"));
      L0["mf54_namelocation"] = (await $.mv((await $.v(C, "Memo1_MF54")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF54")), "ItemIndex")), 2))) {
      L0["m54"] = ":54B:";
      L0["mf54_account"] = (await $.mv((await $.v(C, "Edit4_MF54")), "Text"));
      L0["mf53_namelocation"] = (await $.mv((await $.v(C, "Edit5_MF54")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF54")), "ItemIndex")), 3))) {
      L0["m54"] = ":54D:";
      L0["mf54_account"] = (await $.mv((await $.v(C, "Edit6_MF54")), "Text"));
      L0["mf54_namelocation"] = (await $.mv((await $.v(C, "Memo2_MF54")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF54")), "ItemIndex")), 0))) {
      L0["m54"] = "";
      L0["mf54_account"] = "";
      L0["mf54_bic"] = "";
      L0["mf54_namelocation"] = "";
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF55")), "ItemIndex")), 1))) {
      L0["m55"] = ":55A:";
      L0["mf55_account"] = (await $.mv((await $.v(C, "Edit1_MF55")), "Text"));
      L0["mf55_bic"] = (await $.mv((await $.v(C, "Edit2_MF55")), "Text"));
      L0["mf55_namelocation"] = (await $.mv((await $.v(C, "Memo1_MF55")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF55")), "ItemIndex")), 2))) {
      L0["m55"] = ":55B:";
      L0["mf55_account"] = (await $.mv((await $.v(C, "Edit3_MF55")), "Text"));
      L0["mf55_namelocation"] = (await $.mv((await $.v(C, "Edit4_MF55")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF55")), "ItemIndex")), 3))) {
      L0["m55"] = ":55D:";
      L0["mf55_account"] = (await $.mv((await $.v(C, "Edit5_MF55")), "Text"));
      L0["mf55_namelocation"] = (await $.mv((await $.v(C, "Memo2_MF55")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF55")), "ItemIndex")), 0))) {
      L0["m55"] = "";
      L0["mf55_account"] = "";
      L0["mf55_bic"] = "";
      L0["mf55_namelocation"] = "";
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF56")), "ItemIndex")), 1))) {
      L0["m56"] = ":56A:";
      L0["mf56_account"] = (await $.mv((await $.v(C, "Edit1_MF56")), "Text"));
      L0["mf56_bic"] = (await $.mv((await $.v(C, "Edit2_MF56")), "Text"));
      L0["mf56_namelocation"] = (await $.mv((await $.v(C, "Memo1_MF56")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF56")), "ItemIndex")), 2))) {
      L0["m56"] = ":56C:";
      L0["mf56_account"] = (await $.mv((await $.v(C, "Edit3_MF56")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF56")), "ItemIndex")), 3))) {
      L0["m56"] = ":56D:";
      L0["mf56_account"] = (await $.mv((await $.v(C, "Edit4_MF56")), "Text"));
      L0["mf56_namelocation"] = (await $.mv((await $.v(C, "Memo2_MF56")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF56")), "ItemIndex")), 0))) {
      L0["m56"] = "";
      L0["mf56_account"] = "";
      L0["mf56_bic"] = "";
      L0["mf56_namelocation"] = "";
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF57")), "ItemIndex")), 1))) {
      L0["m57"] = ":57A:";
      L0["mf57_account"] = (await $.mv((await $.v(C, "Edit1_MF57")), "Text"));
      L0["mf57_bic"] = (await $.mv((await $.v(C, "Edit2_MF57")), "Text"));
      L0["mf57_namelocation"] = (await $.mv((await $.v(C, "Memo1_MF57")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF57")), "ItemIndex")), 2))) {
      L0["m57"] = ":57B:";
      L0["mf57_account"] = (await $.mv((await $.v(C, "Edit3_MF57")), "Text"));
      L0["mf57_namelocation"] = (await $.mv((await $.v(C, "Edit4_MF57")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF57")), "ItemIndex")), 3))) {
      L0["m57"] = ":57C:";
      L0["mf57_account"] = (await $.mv((await $.v(C, "Edit5_MF57")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF57")), "ItemIndex")), 4))) {
      L0["m57"] = ":57D:";
      L0["mf57_account"] = (await $.mv((await $.v(C, "Edit6_MF57")), "Text"));
      L0["mf57_namelocation"] = (await $.mv((await $.v(C, "Memo2_MF57")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF57")), "ItemIndex")), 0))) {
      L0["m57"] = "";
      L0["mf57_account"] = "";
      L0["mf57_bic"] = "";
      L0["mf57_namelocation"] = "";
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF59")), "ItemIndex")), 1))) {
      L0["m59"] = ":59:";
      L0["mf59_account"] = (await $.mv((await $.v(C, "Edit1_MF59")), "Text"));
      L0["mf59_nameadress"] = (await $.mv((await $.v(C, "Memo1_MF59")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF59")), "ItemIndex")), 2))) {
      L0["m59"] = ":59A:";
      L0["mf59_account"] = (await $.mv((await $.v(C, "Edit2_MF59")), "Text"));
      L0["mf59_nameadress"] = (await $.mv((await $.v(C, "Edit3_MF59")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF59")), "ItemIndex")), 0))) {
      L0["m59"] = "";
      L0["mf59_account"] = "";
      L0["mf59_nameadress"] = "";
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "MF70_memo")), "Text")), ""))) {
      L0["m70"] = ":70:";
      L0["mf70"] = (await $.mv((await $.v(C, "mf70_memo")), "text"));
    } else {
      L0["m70"] = "";
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "Edit1_MF71A")), "Text")), ""))) {
      L0["m71a"] = ":71A:";
      L0["mf71a"] = (await $.mv((await $.v(C, "Edit1_MF71A")), "Text"));
    } else {
      L0["m71a"] = "";
    }
    if ($.truthy((await $.or_((await $.or_(($.ne((await $.mv((await $.v(C, "Edit1_MF71F")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "Edit3_MF71F")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "Edit5_MF71F")), "Text")), "")))))) {
      L0["m71f"] = ":71F:";
      L0["mf71f_child"] = $.add($.add((await $.mv((await $.v(C, "Edit1_MF71F")), "Text")), "|"), (await $.mv((await $.v(C, "Edit2_MF71F")), "Text")));
    } else {
      L0["m71f"] = "";
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "Edit1_MF71G")), "Text")), ""))) {
      L0["m71g"] = ":71G:";
      L0["mf71g_child"] = $.add($.add((await $.mv((await $.v(C, "Edit1_MF71G")), "Text")), "|"), (await $.mv((await $.v(C, "Edit2_MF71G")), "Text")));
    } else {
      L0["m71g"] = "";
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "MF72_memo")), "Text")), ""))) {
      L0["m72"] = ":72:";
      L0["mf72"] = (await $.mv((await $.v(C, "MF72_memo")), "Text"));
    } else {
      L0["m72"] = "";
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "MF77_memo")), "Text")), ""))) {
      L0["m77b"] = ":77B:";
      L0["mf77b"] = (await $.mv((await $.v(C, "MF77_memo")), "Text"));
    } else {
      L0["m77b"] = "";
    }
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out3")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out3")), "Refresh", []);
  } else {
    await $.stmt((await $.call(C, "ShowMessage", [$.add($.add(" ", L0["dolmayan"]), " Xanalar doldurulmayıb!")])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm5", "Createmessage1Click", async function Createmessage1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm5", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "cancel", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TForm5", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm5", "Mf70_memoKeyPress", async function Mf70_memoKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "i": 0, "n": 0, "k": 0, "cposy": 0, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set((await $.call(C, "UpCase", [(await L0["key"].get())])));
  if ($.truthy((await $.or_(($.eq((await L0["key"].get()), "\r")), async () => ($.eq((await L0["key"].get()), "\b")))))) {
    return L0.result;
  }
  L0["cposy"] = (await $.mv((await $.mv((L0["sender"]), "CaretPos")), "y"));
  L0["s"] = (await $.mv((L0["sender"]), "text"));
  if ($.truthy($.gt((await $.call(C, "length", [L0["s"]])), 0))) {
    if ($.truthy(((await $.or_(($.eq((await $.idx(L0["s"], [(await $.call(C, "length", [L0["s"]]))])), "\r")), async () => ($.eq((await $.idx(L0["s"], [(await $.call(C, "length", [L0["s"]]))])), "\n"))))))) {
      await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s"], async ($t31) => { L0["s"] = $t31; }), (await $.call(C, "length", [L0["s"]])), 1])));
    }
  }
  await $.mset(L0["sender"], "text", L0["s"]);
  if ($.truthy($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 35))) {
    if ($.truthy($.lt(L0["cposy"], 7))) {
      if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
        L0["n"] = 0;
        { const $t32 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
          L0["i"] = 0;
          let $t33 = true;
          for (;;) {
            if (!$t33) { L0["i"] = $.succ(L0["i"], 1); }
            $t33 = false;
            if (!($.ord(L0["i"]) <= $.ord($t32))) break;
            L0["k"] = (await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["i"]]))]));
            L0["n"] = $.add(L0["n"], L0["k"]);
            if ($.truthy($.lt(L0["k"], 35))) {
              break;
            }
            L0["n"] = $.add(L0["n"], 2);
            await $.tick();
          }
        }
        await $.mset(L0["sender"], "selstart", L0["n"]);
        await $.mset(L0["sender"], "sellength", 0);
      } else {
        await $.stmt((await $.mcall((await $.mv(L0["sender"], "lines")), "Add", [(await L0["key"].get())])));
        await L0["key"].set("\u0000");
      }
    } else {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
