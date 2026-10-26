// Generated from OUT_MT.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("OUT_MT", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "DBCtrls", "DBViewComboBox", "Grids", "DBGrids", "ExtCtrls", "ActnList", "Menus", "SearchEdit", "ExcelXp", "OleServer", "Mask", "CurrencyEdit", "Unit2", "SWIFT_MAINImpl1", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TOUT_FORM", "TForm", {"swpopupmenu1": {"name": "SwPopupMenu1", "type": "TPopupMenu"}, "mtcreate": {"name": "Mtcreate", "type": "TMenuItem"}, "swactionlist": {"name": "swActionList", "type": "TActionList"}, "createmessagebegin": {"name": "CreateMessageBegin", "type": "TAction"}, "viewpanel": {"name": "viewpanel", "type": "TAction"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "header": {"name": "Header", "type": "TTabSheet"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "reciverbic": {"name": "reciverbic", "type": "TSearchEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "sendertype": {"name": "sendertype", "type": "TComboBox"}, "combobox2": {"name": "ComboBox2", "type": "TComboBox"}, "recivertype": {"name": "recivertype", "type": "TComboBox"}, "senderlt": {"name": "senderlt", "type": "TComboBox"}, "monitoring": {"name": "monitoring", "type": "TComboBox"}, "application": {"name": "Application", "type": "TComboBox"}, "priority": {"name": "priority", "type": "TComboBox"}, "fincopy": {"name": "fincopy", "type": "TComboBox"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "fin": {"name": "FIN", "type": "TDBViewComboBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "label40": {"name": "Label40", "type": "TLabel"}, "label41": {"name": "Label41", "type": "TLabel"}, "dbviewcombobox1": {"name": "DBViewComboBox1", "type": "TDBViewComboBox"}, "dbviewcombobox2": {"name": "DBViewComboBox2", "type": "TDBViewComboBox"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "scrollbox1": {"name": "ScrollBox1", "type": "TScrollBox"}, "mainpanel": {"name": "MainPanel", "type": "TPanel"}, "mf20": {"name": "MF20", "type": "TPanel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "mf20_edit": {"name": "MF20_edit", "type": "TEdit"}, "mf23b": {"name": "MF23B", "type": "TPanel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "mf23b_edit": {"name": "MF23b_edit", "type": "TEdit"}, "mf21": {"name": "MF21", "type": "TPanel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "mf26t_edit": {"name": "MF26T_edit", "type": "TEdit"}, "mf32a": {"name": "MF32A", "type": "TPanel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "edit11_mf32a": {"name": "Edit11_mf32a", "type": "TEdit"}, "mf32_date": {"name": "mf32_date", "type": "TDateTimePicker"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "mf32a_val": {"name": "mf32a_val", "type": "TDBViewComboBox"}, "mf33b": {"name": "MF33B", "type": "TPanel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "mf33_edit": {"name": "MF33_edit", "type": "TEdit"}, "mf33_edit2": {"name": "mf33_edit2", "type": "TEdit"}, "mf50": {"name": "MF50", "type": "TPanel"}, "mf50_main": {"name": "MF50_main", "type": "TPanel"}, "label20": {"name": "Label20", "type": "TLabel"}, "cmf50": {"name": "CMF50", "type": "TComboBox"}, "mf50k": {"name": "MF50K", "type": "TPanel"}, "memo2_mf50": {"name": "Memo2_MF50", "type": "TMemo"}, "edit3_mf50": {"name": "Edit3_MF50", "type": "TSearchEdit"}, "mf50a": {"name": "MF50A", "type": "TPanel"}, "memo1_mf50": {"name": "Memo1_MF50", "type": "TMemo"}, "edit1_mf50": {"name": "Edit1_MF50", "type": "TSearchEdit"}, "edit2_mf50": {"name": "Edit2_MF50", "type": "TSearchEdit"}, "memo2": {"name": "Memo2", "type": "TMemo"}, "mf50d": {"name": "MF50D", "type": "TPanel"}, "memo3_mf50": {"name": "Memo3_MF50", "type": "TMemo"}, "edit4_mf50": {"name": "Edit4_MF50", "type": "TSearchEdit"}, "mf52": {"name": "MF52", "type": "TPanel"}, "mf52_main": {"name": "MF52_main", "type": "TPanel"}, "label21": {"name": "Label21", "type": "TLabel"}, "cmf52": {"name": "CMF52", "type": "TComboBox"}, "mf52a": {"name": "MF52A", "type": "TPanel"}, "edit1_mf52": {"name": "Edit1_MF52", "type": "TEdit"}, "memo1_mf52": {"name": "Memo1_MF52", "type": "TMemo"}, "edit2_mf52": {"name": "Edit2_MF52", "type": "TSearchEdit"}, "mf52d": {"name": "MF52D", "type": "TPanel"}, "edit3_mf52": {"name": "Edit3_MF52", "type": "TEdit"}, "memo2_mf52": {"name": "Memo2_MF52", "type": "TMemo"}, "mf53": {"name": "MF53", "type": "TPanel"}, "mf53_main": {"name": "MF53_main", "type": "TPanel"}, "label22": {"name": "Label22", "type": "TLabel"}, "cmf53": {"name": "CMF53", "type": "TComboBox"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "mf53a": {"name": "MF53A", "type": "TPanel"}, "edit1_mf53": {"name": "Edit1_MF53", "type": "TEdit"}, "memo1_mf53": {"name": "Memo1_MF53", "type": "TMemo"}, "edit2_mf53": {"name": "Edit2_MF53", "type": "TSearchEdit"}, "mf53b": {"name": "MF53B", "type": "TPanel"}, "edit3_mf53": {"name": "Edit3_MF53", "type": "TEdit"}, "edit4_mf53": {"name": "Edit4_MF53", "type": "TEdit"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "mf53d": {"name": "MF53D", "type": "TPanel"}, "edit5_mf53": {"name": "Edit5_MF53", "type": "TEdit"}, "memo2_mf53": {"name": "Memo2_MF53", "type": "TMemo"}, "mf54": {"name": "MF54", "type": "TPanel"}, "mf54_main": {"name": "MF54_main", "type": "TPanel"}, "label23": {"name": "Label23", "type": "TLabel"}, "cmf54": {"name": "CMF54", "type": "TComboBox"}, "mf54a": {"name": "MF54A", "type": "TPanel"}, "edit1_mf54": {"name": "Edit1_MF54", "type": "TEdit"}, "memo1_mf54": {"name": "Memo1_MF54", "type": "TMemo"}, "edit2_mf54": {"name": "Edit2_MF54", "type": "TSearchEdit"}, "mf54b": {"name": "MF54B", "type": "TPanel"}, "edit4_mf54": {"name": "Edit4_MF54", "type": "TEdit"}, "edit5_mf54": {"name": "Edit5_MF54", "type": "TEdit"}, "mf54d": {"name": "MF54D", "type": "TPanel"}, "edit6_mf54": {"name": "Edit6_MF54", "type": "TEdit"}, "memo2_mf54": {"name": "Memo2_MF54", "type": "TMemo"}, "mf55": {"name": "MF55", "type": "TPanel"}, "mf55_main": {"name": "MF55_main", "type": "TPanel"}, "label24": {"name": "Label24", "type": "TLabel"}, "cmf55": {"name": "CMF55", "type": "TComboBox"}, "mf55a": {"name": "MF55A", "type": "TPanel"}, "edit1_mf55": {"name": "Edit1_MF55", "type": "TEdit"}, "memo1_mf55": {"name": "Memo1_MF55", "type": "TMemo"}, "edit2_mf55": {"name": "Edit2_MF55", "type": "TSearchEdit"}, "mf55b": {"name": "MF55B", "type": "TPanel"}, "edit3_mf55": {"name": "Edit3_MF55", "type": "TEdit"}, "edit4_mf55": {"name": "Edit4_MF55", "type": "TEdit"}, "mf55d": {"name": "MF55D", "type": "TPanel"}, "edit5_mf55": {"name": "Edit5_MF55", "type": "TEdit"}, "memo2_mf55": {"name": "Memo2_MF55", "type": "TMemo"}, "mf56": {"name": "MF56", "type": "TPanel"}, "mf56_main": {"name": "MF56_main", "type": "TPanel"}, "label25": {"name": "Label25", "type": "TLabel"}, "cmf56": {"name": "CMF56", "type": "TComboBox"}, "mf56a": {"name": "MF56A", "type": "TPanel"}, "edit1_mf56": {"name": "Edit1_MF56", "type": "TEdit"}, "memo1_mf56": {"name": "Memo1_MF56", "type": "TMemo"}, "edit2_mf56": {"name": "Edit2_MF56", "type": "TSearchEdit"}, "mf56c": {"name": "MF56C", "type": "TPanel"}, "edit3_mf56": {"name": "Edit3_MF56", "type": "TEdit"}, "mf56d": {"name": "MF56D", "type": "TPanel"}, "edit4_mf56": {"name": "Edit4_MF56", "type": "TEdit"}, "memo2_mf56": {"name": "Memo2_MF56", "type": "TMemo"}, "mf57": {"name": "MF57", "type": "TPanel"}, "mf57_main": {"name": "MF57_main", "type": "TPanel"}, "label26": {"name": "Label26", "type": "TLabel"}, "cmf57": {"name": "CMF57", "type": "TComboBox"}, "mf57a": {"name": "MF57A", "type": "TPanel"}, "edit1_mf57": {"name": "Edit1_MF57", "type": "TEdit"}, "memo1_mf57": {"name": "Memo1_MF57", "type": "TMemo"}, "edit2_mf57": {"name": "Edit2_MF57", "type": "TSearchEdit"}, "mf57b": {"name": "MF57B", "type": "TPanel"}, "edit3_mf57": {"name": "Edit3_MF57", "type": "TEdit"}, "edit4_mf57": {"name": "Edit4_MF57", "type": "TEdit"}, "mf57c": {"name": "MF57C", "type": "TPanel"}, "edit5_mf57": {"name": "Edit5_MF57", "type": "TEdit"}, "mf57d": {"name": "MF57D", "type": "TPanel"}, "edit6_mf57": {"name": "Edit6_MF57", "type": "TEdit"}, "memo2_mf57": {"name": "Memo2_MF57", "type": "TMemo"}, "mf70": {"name": "MF70", "type": "TPanel"}, "label27": {"name": "Label27", "type": "TLabel"}, "of70_richedit": {"name": "OF70_RichEdit", "type": "TRichEdit"}, "mf70_memo": {"name": "MF70_Memo", "type": "TMemo"}, "mf71a": {"name": "MF71A", "type": "TPanel"}, "label28": {"name": "Label28", "type": "TLabel"}, "label29": {"name": "Label29", "type": "TLabel"}, "edit1_mf71a": {"name": "Edit1_MF71A", "type": "TEdit"}, "cbox_mf71a": {"name": "CBox_MF71A", "type": "TComboBox"}, "mf71f": {"name": "MF71F", "type": "TPanel"}, "mf71f_main": {"name": "MF71F_main", "type": "TPanel"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "new_mf71f": {"name": "New_MF71F", "type": "TButton"}, "mf71f_1": {"name": "MF71F_1", "type": "TPanel"}, "label30": {"name": "Label30", "type": "TLabel"}, "edit1_mf71f": {"name": "Edit1_MF71F", "type": "TEdit"}, "edit2_mf71f": {"name": "Edit2_MF71F", "type": "TEdit"}, "delete1": {"name": "Delete1", "type": "TButton"}, "mf71f_2": {"name": "MF71F_2", "type": "TPanel"}, "label31": {"name": "Label31", "type": "TLabel"}, "edit3_mf71f": {"name": "Edit3_MF71F", "type": "TEdit"}, "edit4_mf71f": {"name": "Edit4_MF71F", "type": "TEdit"}, "delete2": {"name": "Delete2", "type": "TButton"}, "mf71f_3": {"name": "MF71F_3", "type": "TPanel"}, "label32": {"name": "Label32", "type": "TLabel"}, "edit5_mf71f": {"name": "Edit5_MF71F", "type": "TEdit"}, "edit6_mf71f": {"name": "Edit6_MF71F", "type": "TEdit"}, "delete3": {"name": "Delete3", "type": "TButton"}, "mf72": {"name": "MF72", "type": "TPanel"}, "label34": {"name": "Label34", "type": "TLabel"}, "label37": {"name": "Label37", "type": "TLabel"}, "mf72_memo": {"name": "MF72_memo", "type": "TMemo"}, "of72_richedit": {"name": "OF72_RichEdit", "type": "TRichEdit"}, "mf77b": {"name": "MF77B", "type": "TPanel"}, "label35": {"name": "Label35", "type": "TLabel"}, "label36": {"name": "Label36", "type": "TLabel"}, "mf77_memo": {"name": "MF77_memo", "type": "TMemo"}, "mf71g": {"name": "MF71G", "type": "TPanel"}, "label38": {"name": "Label38", "type": "TLabel"}, "edit1_mf71g": {"name": "Edit1_MF71G", "type": "TEdit"}, "edit2_mf71g": {"name": "Edit2_MF71G", "type": "TEdit"}, "mf59_59a": {"name": "MF59_59A", "type": "TPanel"}, "mf59_main": {"name": "MF59_main", "type": "TPanel"}, "label33": {"name": "Label33", "type": "TLabel"}, "cmf59": {"name": "CMF59", "type": "TComboBox"}, "mf59": {"name": "MF59", "type": "TPanel"}, "memo2_mf59": {"name": "Memo2_MF59", "type": "TMemo"}, "edit1_mf59": {"name": "Edit1_MF59", "type": "TEdit"}, "mf59a": {"name": "MF59A", "type": "TPanel"}, "edit3_mf59": {"name": "Edit3_MF59", "type": "TSearchEdit"}, "edit2_mf59": {"name": "edit2_mf59", "type": "TEdit"}, "memo1_mf59": {"name": "Memo1_MF59", "type": "TMemo"}, "mf36": {"name": "MF36", "type": "TPanel"}, "label39": {"name": "Label39", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "comissionaccs_panel": {"name": "ComissionAccs_Panel", "type": "TPanel"}, "comissionaccs": {"name": "ComissionAccs", "type": "TDBLookupComboBox"}, "comissionaccs_label": {"name": "ComissionAccs_Label", "type": "TLabel"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "label42": {"name": "Label42", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("OUT_FORM", null, "TOUT_FORM");
    U.var_("isEmpty", false, "boolean");
    U.var_("CanClose", false, "boolean");
  });
  U.func("GetRichEditLine", async function GetRichEditLine(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"re": $.copyArg(p0), result: '', "a": $.sarr(), "s": '', "i": 0, "k": 0, "r": 0, "l_first": 0};
  await $.fixArgs(L0, ["re"]);
  L0["l_first"] = (await $.call(C, "length", [(await $.mv(L0["re"], "Text"))]));
  await $.stmt((await $.call(C, "SendMessage", [(await $.mv(L0["re"], "Handle")), (await $.v(C, "EM_GETSEL")), (await $.call(C, "Longint", [L0["r"]])), 0])));
  L0["s"] = "";
  { const $t1 = (await $.mv((await $.mv(L0["re"], "Lines")), "Count"));
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      if ($.truthy($.ne((await $.call(C, "trim", [(await $.idx((await $.mv(L0["re"], "Lines")), [L0["i"]]))])), ""))) {
        L0["s"] = $.add(L0["s"], (await $.idx((await $.mv(L0["re"], "Lines")), [L0["i"]])));
      }
      await $.tick();
    }
  }
  L0["k"] = 1;
  { const $t3 = 3;
    L0["i"] = 0;
    let $t4 = true;
    for (;;) {
      if (!$t4) { L0["i"] = $.succ(L0["i"], 1); }
      $t4 = false;
      if (!($.ord(L0["i"]) <= $.ord($t3))) break;
      if ($.truthy($.ne((await $.call(C, "copy", [L0["s"], L0["k"], 35])), ""))) {
        { const $t5 = await $.iset(L0["a"], [L0["i"]], (await $.call(C, "copy", [L0["s"], L0["k"], 35]))); if ($t5 !== undefined) { L0["a"] = $t5; } }
      }
      L0["k"] = $.add(L0["k"], 35);
      await $.tick();
    }
  }
  await $.mcall(L0["re"], "Clear", []);
  { const $t6 = 3;
    L0["i"] = 0;
    let $t7 = true;
    for (;;) {
      if (!$t7) { L0["i"] = $.succ(L0["i"], 1); }
      $t7 = false;
      if (!($.ord(L0["i"]) <= $.ord($t6))) break;
      if ($.truthy($.ne((await $.idx(L0["a"], [L0["i"]])), ""))) {
        await $.stmt((await $.mcall((await $.mv(L0["re"], "Lines")), "Add", [(await $.idx(L0["a"], [L0["i"]]))])));
      }
      await $.tick();
    }
  }
  if ($.truthy((await $.and_(($.eq(L0["r"], 35)), async () => ($.ge(L0["l_first"], (await $.call(C, "length", [(await $.mv(L0["re"], "Text"))])))))))) {
    L0["r"] = $.add(L0["r"], 2);
  } else {
    if ($.truthy((await $.and_((await $.and_(($.eq(($.mod(($.sub(L0["r"], $.mul(($.sub(($.idiv(L0["r"], 35)), 1)), 2))), 35)), 0)), async () => ($.ne(L0["r"], 0)))), async () => ($.ge(L0["l_first"], (await $.call(C, "length", [(await $.mv(L0["re"], "Text"))])))))))) {
      L0["r"] = $.add(L0["r"], $.mul(($.idiv(L0["r"], 35)), 2));
    }
  }
  await $.stmt((await $.call(C, "SendMessage", [(await $.mv(L0["re"], "Handle")), (await $.v(C, "EM_SETSEL")), L0["r"], L0["r"]])));
  return L0.result;
}, {"params": ["RE"], "kind": "function", "ptypes": ["TRichEdit"]});
  U.func("GetRichEditLine2", async function GetRichEditLine2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"re": $.copyArg(p0), result: '', "a": $.sarr(), "s": '', "s_temp": '', "i": 0, "r": 0, "l_first": 0};
  await $.fixArgs(L0, ["re"]);
  L0["l_first"] = (await $.call(C, "length", [(await $.mv(L0["re"], "Text"))]));
  await $.stmt((await $.call(C, "SendMessage", [(await $.mv(L0["re"], "Handle")), (await $.v(C, "EM_GETSEL")), (await $.call(C, "Longint", [L0["r"]])), 0])));
  L0["s"] = "";
  { const $t8 = (await $.mv((await $.mv(L0["re"], "Lines")), "Count"));
    L0["i"] = 0;
    let $t9 = true;
    for (;;) {
      if (!$t9) { L0["i"] = $.succ(L0["i"], 1); }
      $t9 = false;
      if (!($.ord(L0["i"]) <= $.ord($t8))) break;
      if ($.truthy($.ne((await $.call(C, "trim", [(await $.idx((await $.mv(L0["re"], "Lines")), [L0["i"]]))])), ""))) {
        { const $t10 = L0["i"];
          if ($.eq($t10, 0)) {
            L0["s_temp"] = (await $.idx((await $.mv(L0["re"], "Lines")), [L0["i"]]));
            if ($.truthy($.gt((await $.call(C, "pos", ["/BNF/", L0["s_temp"]])), 0))) {
              await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s_temp"], async ($t11) => { L0["s_temp"] = $t11; }), 1, 5])));
              L0["r"] = $.sub(L0["r"], 5);
            }
            L0["s"] = $.add(L0["s"], L0["s_temp"]);
          }
          else if ($.eq($t10, 1)) {
            L0["s_temp"] = (await $.idx((await $.mv(L0["re"], "Lines")), [L0["i"]]));
            if ($.truthy($.gt((await $.call(C, "pos", ["//", L0["s_temp"]])), 0))) {
              await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s_temp"], async ($t12) => { L0["s_temp"] = $t12; }), 1, 2])));
              L0["r"] = $.sub(L0["r"], 2);
            }
            L0["s"] = $.add(L0["s"], L0["s_temp"]);
          }
          else if ($.eq($t10, 2)) {
            L0["s_temp"] = (await $.idx((await $.mv(L0["re"], "Lines")), [L0["i"]]));
            if ($.truthy($.gt((await $.call(C, "pos", ["//", L0["s_temp"]])), 0))) {
              await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s_temp"], async ($t13) => { L0["s_temp"] = $t13; }), 1, 2])));
              L0["r"] = $.sub(L0["r"], 2);
            }
            L0["s"] = $.add(L0["s"], L0["s_temp"]);
          }
          else if ($.eq($t10, 3)) {
            L0["s_temp"] = (await $.idx((await $.mv(L0["re"], "Lines")), [L0["i"]]));
            if ($.truthy($.gt((await $.call(C, "pos", ["//", L0["s_temp"]])), 0))) {
              await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s_temp"], async ($t14) => { L0["s_temp"] = $t14; }), 1, 2])));
              L0["r"] = $.sub(L0["r"], 2);
            }
            L0["s"] = $.add(L0["s"], L0["s_temp"]);
          }
          else if ($.eq($t10, 4)) {
            L0["s_temp"] = (await $.idx((await $.mv(L0["re"], "Lines")), [L0["i"]]));
            if ($.truthy($.gt((await $.call(C, "pos", ["//", L0["s_temp"]])), 0))) {
              await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s_temp"], async ($t15) => { L0["s_temp"] = $t15; }), 1, 2])));
              L0["r"] = $.sub(L0["r"], 2);
            }
            L0["s"] = $.add(L0["s"], L0["s_temp"]);
          }
          else if ($.eq($t10, 5)) {
            L0["s_temp"] = (await $.idx((await $.mv(L0["re"], "Lines")), [L0["i"]]));
            if ($.truthy($.gt((await $.call(C, "pos", ["//", L0["s_temp"]])), 0))) {
              await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s_temp"], async ($t16) => { L0["s_temp"] = $t16; }), 1, 2])));
              L0["r"] = $.sub(L0["r"], 2);
            }
            L0["s"] = $.add(L0["s"], L0["s_temp"]);
          }
        }
      }
      await $.tick();
    }
  }
  { const $t17 = 5;
    L0["i"] = 0;
    let $t18 = true;
    for (;;) {
      if (!$t18) { L0["i"] = $.succ(L0["i"], 1); }
      $t18 = false;
      if (!($.ord(L0["i"]) <= $.ord($t17))) break;
      { const $t19 = L0["i"];
        if ($.eq($t19, 0)) {
          if ($.truthy($.ne((await $.call(C, "copy", [L0["s"], 1, 30])), ""))) {
            L0["s_temp"] = $.add("/BNF/", (await $.call(C, "copy", [L0["s"], 1, 30])));
            { const $t20 = await $.iset(L0["a"], [L0["i"]], L0["s_temp"]); if ($t20 !== undefined) { L0["a"] = $t20; } }
            L0["r"] = $.add(L0["r"], 5);
          }
        }
        else if ($.eq($t19, 1)) {
          if ($.truthy($.ne((await $.call(C, "copy", [L0["s"], 31, 33])), ""))) {
            L0["s_temp"] = $.add("//", (await $.call(C, "copy", [L0["s"], 31, 33])));
            { const $t21 = await $.iset(L0["a"], [L0["i"]], L0["s_temp"]); if ($t21 !== undefined) { L0["a"] = $t21; } }
            L0["r"] = $.add(L0["r"], 2);
          }
        }
        else if ($.eq($t19, 2)) {
          if ($.truthy($.ne((await $.call(C, "copy", [L0["s"], 64, 33])), ""))) {
            L0["s_temp"] = $.add("//", (await $.call(C, "copy", [L0["s"], 64, 33])));
            { const $t22 = await $.iset(L0["a"], [L0["i"]], L0["s_temp"]); if ($t22 !== undefined) { L0["a"] = $t22; } }
            L0["r"] = $.add(L0["r"], 2);
          }
        }
        else if ($.eq($t19, 3)) {
          if ($.truthy($.ne((await $.call(C, "copy", [L0["s"], 97, 33])), ""))) {
            L0["s_temp"] = $.add("//", (await $.call(C, "copy", [L0["s"], 97, 33])));
            { const $t23 = await $.iset(L0["a"], [L0["i"]], L0["s_temp"]); if ($t23 !== undefined) { L0["a"] = $t23; } }
            L0["r"] = $.add(L0["r"], 2);
          }
        }
        else if ($.eq($t19, 4)) {
          if ($.truthy($.ne((await $.call(C, "copy", [L0["s"], 130, 33])), ""))) {
            L0["s_temp"] = $.add("//", (await $.call(C, "copy", [L0["s"], 130, 33])));
            { const $t24 = await $.iset(L0["a"], [L0["i"]], L0["s_temp"]); if ($t24 !== undefined) { L0["a"] = $t24; } }
            L0["r"] = $.add(L0["r"], 2);
          }
        }
        else if ($.eq($t19, 5)) {
          if ($.truthy($.ne((await $.call(C, "copy", [L0["s"], 163, 27])), ""))) {
            L0["s_temp"] = $.add("//", (await $.call(C, "copy", [L0["s"], 163, 27])));
            { const $t25 = await $.iset(L0["a"], [L0["i"]], L0["s_temp"]); if ($t25 !== undefined) { L0["a"] = $t25; } }
            L0["r"] = $.add(L0["r"], 2);
          }
        }
      }
      await $.tick();
    }
  }
  await $.mcall(L0["re"], "Clear", []);
  { const $t26 = 5;
    L0["i"] = 0;
    let $t27 = true;
    for (;;) {
      if (!$t27) { L0["i"] = $.succ(L0["i"], 1); }
      $t27 = false;
      if (!($.ord(L0["i"]) <= $.ord($t26))) break;
      if ($.truthy($.ne((await $.idx(L0["a"], [L0["i"]])), ""))) {
        await $.stmt((await $.mcall((await $.mv(L0["re"], "Lines")), "Add", [(await $.idx(L0["a"], [L0["i"]]))])));
      }
      await $.tick();
    }
  }
  if ($.truthy((await $.and_(($.in_(L0["r"], [37])), async () => ($.gt(L0["l_first"], (await $.call(C, "length", [(await $.mv(L0["re"], "Text"))])))))))) {
    L0["r"] = $.sub(L0["r"], 2);
  }
  if ($.truthy((await $.and_(($.in_(L0["r"], [74])), async () => ($.gt(L0["l_first"], (await $.call(C, "length", [(await $.mv(L0["re"], "Text"))])))))))) {
    L0["r"] = $.sub(L0["r"], 2);
  }
  if ($.truthy((await $.and_(($.in_(L0["r"], [111])), async () => ($.gt(L0["l_first"], (await $.call(C, "length", [(await $.mv(L0["re"], "Text"))])))))))) {
    L0["r"] = $.sub(L0["r"], 2);
  }
  if ($.truthy((await $.and_(($.in_(L0["r"], [148])), async () => ($.gt(L0["l_first"], (await $.call(C, "length", [(await $.mv(L0["re"], "Text"))])))))))) {
    L0["r"] = $.sub(L0["r"], 2);
  }
  if ($.truthy((await $.and_(($.in_(L0["r"], [185])), async () => ($.gt(L0["l_first"], (await $.call(C, "length", [(await $.mv(L0["re"], "Text"))])))))))) {
    L0["r"] = $.sub(L0["r"], 2);
  }
  if ($.truthy((await $.and_(($.in_(L0["r"], [...$.range(36,38)])), async () => ($.le(L0["l_first"], (await $.call(C, "length", [(await $.mv(L0["re"], "Text"))])))))))) {
    L0["r"] = 40;
  }
  if ($.truthy((await $.and_(($.in_(L0["r"], [...$.range(73,75)])), async () => ($.le(L0["l_first"], (await $.call(C, "length", [(await $.mv(L0["re"], "Text"))])))))))) {
    L0["r"] = 77;
  }
  if ($.truthy((await $.and_(($.in_(L0["r"], [...$.range(110,112)])), async () => ($.le(L0["l_first"], (await $.call(C, "length", [(await $.mv(L0["re"], "Text"))])))))))) {
    L0["r"] = 114;
  }
  if ($.truthy((await $.and_(($.in_(L0["r"], [...$.range(147,149)])), async () => ($.le(L0["l_first"], (await $.call(C, "length", [(await $.mv(L0["re"], "Text"))])))))))) {
    L0["r"] = 151;
  }
  if ($.truthy((await $.and_(($.in_(L0["r"], [...$.range(184,186)])), async () => ($.le(L0["l_first"], (await $.call(C, "length", [(await $.mv(L0["re"], "Text"))])))))))) {
    L0["r"] = 188;
  }
  if ($.truthy((await $.and_((await $.and_(($.gt(L0["l_first"], (await $.call(C, "length", [(await $.mv(L0["re"], "Text"))])))), async () => ($.in_((await $.call(C, "length", [(await $.mv(L0["re"], "Text"))])), [...$.range(35,38)])))), async () => $.not(($.in_(L0["r"], [...$.range(35,38)]))))))) {
    L0["r"] = $.add(L0["r"], 2);
  }
  if ($.truthy((await $.and_((await $.and_(($.gt(L0["l_first"], (await $.call(C, "length", [(await $.mv(L0["re"], "Text"))])))), async () => ($.in_((await $.call(C, "length", [(await $.mv(L0["re"], "Text"))])), [...$.range(72,75)])))), async () => $.not(($.in_(L0["r"], [...$.range(72,75)]))))))) {
    L0["r"] = $.add(L0["r"], 2);
  }
  if ($.truthy((await $.and_((await $.and_(($.gt(L0["l_first"], (await $.call(C, "length", [(await $.mv(L0["re"], "Text"))])))), async () => ($.in_((await $.call(C, "length", [(await $.mv(L0["re"], "Text"))])), [...$.range(109,112)])))), async () => $.not(($.in_(L0["r"], [...$.range(109,112)]))))))) {
    L0["r"] = $.add(L0["r"], 2);
  }
  if ($.truthy((await $.and_((await $.and_(($.gt(L0["l_first"], (await $.call(C, "length", [(await $.mv(L0["re"], "Text"))])))), async () => ($.in_((await $.call(C, "length", [(await $.mv(L0["re"], "Text"))])), [...$.range(146,149)])))), async () => $.not(($.in_(L0["r"], [...$.range(146,149)]))))))) {
    L0["r"] = $.add(L0["r"], 2);
  }
  if ($.truthy((await $.and_((await $.and_(($.gt(L0["l_first"], (await $.call(C, "length", [(await $.mv(L0["re"], "Text"))])))), async () => ($.in_((await $.call(C, "length", [(await $.mv(L0["re"], "Text"))])), [...$.range(183,186)])))), async () => $.not(($.in_(L0["r"], [...$.range(183,186)]))))))) {
    L0["r"] = $.add(L0["r"], 2);
  }
  await $.stmt((await $.call(C, "SendMessage", [(await $.mv(L0["re"], "Handle")), (await $.v(C, "EM_SETSEL")), L0["r"], L0["r"]])));
  return L0.result;
}, {"params": ["RE"], "kind": "function", "ptypes": ["TRichEdit"]});
  U.func("VisibleMain", async function VisibleMain(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  { const $t28 = $.sub((await $.mv((await $.v(C, "OUT_FORM")), "ComponentCount")), 1);
    L0["i"] = 0;
    let $t29 = true;
    for (;;) {
      if (!$t29) { L0["i"] = $.succ(L0["i"], 1); }
      $t29 = false;
      if (!($.ord(L0["i"]) <= $.ord($t28))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.v(C, "OUT_FORM")), "Components")), [L0["i"]])), "ClassType")), (await $.v(C, "TPanel"))))) {
        {
          const $t30 = (await $.mv((await $.v(C, "SWDataModule")), "Visible_main"));
          await $.stmt((await $.wcall([$t30], "SetVariable", ["panel_name", (await $.mv(((await $.idx((await $.mv((await $.wv([$t30], "out_form", C, false)), "components")), [(await $.wv([$t30], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "name"))], C)));
        }
      }
      if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "Visible_main")), "RecordCount")), 0))) {
        await $.mset((await $.idx((await $.mv((await $.v(C, "OUT_FORM")), "Components")), [L0["i"]])), "Visible", true);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("InvisibleAllPanels", async function InvisibleAllPanels(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "j": 0};
  { const $t31 = $.sub((await $.mv((await $.v(C, "OUT_FORM")), "ComponentCount")), 1);
    L0["i"] = 0;
    let $t32 = true;
    for (;;) {
      if (!$t32) { L0["i"] = $.succ(L0["i"], 1); }
      $t32 = false;
      if (!($.ord(L0["i"]) <= $.ord($t31))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.v(C, "OUT_FORM")), "Components")), [L0["i"]])), "ClassType")), (await $.v(C, "TPanel"))))) {
        await $.mset((await $.idx((await $.mv((await $.v(C, "OUT_FORM")), "Components")), [L0["i"]])), "Visible", false);
      }
      await $.tick();
    }
  }
  { const $t33 = $.sub((await $.mv((await $.v(C, "OUT_FORM")), "ComponentCount")), 1);
    L0["j"] = 0;
    let $t34 = true;
    for (;;) {
      if (!$t34) { L0["j"] = $.succ(L0["j"], 1); }
      $t34 = false;
      if (!($.ord(L0["j"]) <= $.ord($t33))) break;
      {
        const $t35 = (await $.mv((await $.v(C, "swdatamodule")), "InvisibleAll"));
        await $.stmt((await $.wcall([$t35], "setvariable", ["Panelname2", (await $.mv((await $.idx((await $.mv((await $.wv([$t35], "OUT_FORM", C, false)), "Components")), [(await $.wv([$t35], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "name"))], C)));
        await $.stmt($.wcall([$t35], "close", [], C));
        await $.stmt($.wcall([$t35], "open", [], C));
        if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t35], "swdatamodule", C, false)), "mt_select")), "RecordCount")), 0))) {
          if ($.truthy(($.eq((await $.mv((await $.idx((await $.mv((await $.wv([$t35], "OUT_FORM", C, false)), "Components")), [(await $.wv([$t35], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "ClassType")), (await $.wv([$t35], "TPanel", C, false)))))) {
            await $.mset((await $.idx((await $.mv((await $.wv([$t35], "OUT_FORM", C, false)), "Components")), [(await $.wv([$t35], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "Visible", (await $.wv([$t35], "True", C, false)));
            await $.mset((await $.idx((await $.mv((await $.wv([$t35], "OUT_FORM", C, false)), "Components")), [(await $.wv([$t35], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "Visible", (await $.wv([$t35], "False", C, false)));
          }
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("InsertComboBoxItems", async function InsertComboBoxItems(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "j": 0};
  {
    const $t36 = (await $.mv((await $.v(C, "swDataModule")), "ComboItems"));
    { const $t37 = await $.iset((await $.mv((await $.mv((await $.wv([$t36], "SWDataModule", C, false)), "ComboItems")), "SQL")), [1], $.add($.add($.add($.add("and ", (await $.mv((await $.mv((await $.wv([$t36], "out_form", C, false)), "fin")), "Text"))), (await $.mv((await $.mv((await $.wv([$t36], "out_form", C, false)), "fincopy")), "Text"))), " is not null"), " order by sw_field")); if ($t37 !== undefined) { await $.mset((await $.mv((await $.wv([$t36], "SWDataModule", C, false)), "ComboItems")), "SQL", $t37); } }
  }
  { const $t38 = $.sub((await $.mv((await $.v(C, "OUT_FORM")), "ComponentCount")), 1);
    L0["i"] = 0;
    let $t39 = true;
    for (;;) {
      if (!$t39) { L0["i"] = $.succ(L0["i"], 1); }
      $t39 = false;
      if (!($.ord(L0["i"]) <= $.ord($t38))) break;
      if ($.truthy($.ne((await $.mv((await $.idx((await $.mv((await $.v(C, "OUT_FORM")), "Components")), [L0["i"]])), "Name")), "fincopy"))) {
        if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.v(C, "OUT_FORM")), "Components")), [L0["i"]])), "ClassType")), (await $.v(C, "TComboBox"))))) {
          {
            const $t40 = (await $.mv((await $.v(C, "swDataModule")), "ComboItems"));
            await $.stmt((await $.wcall([$t40], "setvariable", ["Comboname", (await $.mv((await $.idx((await $.mv((await $.wv([$t40], "OUT_FORM", C, false)), "Components")), [(await $.wv([$t40], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "name"))], C)));
            await $.stmt($.wcall([$t40], "close", [], C));
            await $.stmt($.wcall([$t40], "open", [], C));
            { const $t41 = $.add((await $.mv((await $.mv((await $.wv([$t40], "swDataModule", C, false)), "ComboItems")), "RecordCount")), 1);
              await $.wset([$t40], "j", 1, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
              let $t42 = true;
              for (;;) {
                if (!$t42) { await $.wset([$t40], "j", $.succ((await $.wv([$t40], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
                $t42 = false;
                if (!($.ord((await $.wv([$t40], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t41))) break;
                if ($.truthy($.ne((await $.mv(((await $.idx((await $.mv((await $.wv([$t40], "OUT_FORM", C, false)), "Components")), [(await $.wv([$t40], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "ItemIndex")), 0))) {
                  if ($.truthy($.eq((await $.wv([$t40], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1))) {
                    await $.stmt((await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t40], "OUT_FORM", C, false)), "Components")), [(await $.wv([$t40], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "items")), "add", [""])));
                  } else {
                    if ($.truthy($.eq((await $.idx((await $.mv(((await $.idx((await $.mv((await $.wv([$t40], "OUT_FORM", C, false)), "Components")), [(await $.wv([$t40], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Items")), [$.add((await $.wv([$t40], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 2)])), ""))) {
                      await $.stmt((await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t40], "OUT_FORM", C, false)), "Components")), [(await $.wv([$t40], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "items")), "add", [(await $.mv((await $.mv((await $.wv([$t40], "swDataModule", C, false)), "ComboItemsCATEGORY")), "asstring"))])));
                      await $.mcall((await $.mv((await $.wv([$t40], "swDataModule", C, false)), "ComboItems")), "Next", []);
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
  U.func("clearcomboitems", async function clearcomboitems(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "j": 0};
  {
    const $t43 = (await $.mv((await $.v(C, "swDataModule")), "ComboItems"));
    { const $t44 = await $.iset((await $.mv((await $.mv((await $.wv([$t43], "SWDataModule", C, false)), "ComboItems")), "SQL")), [1], $.add($.add($.add($.add("and ", (await $.mv((await $.mv((await $.wv([$t43], "out_form", C, false)), "fin")), "Text"))), (await $.mv((await $.mv((await $.wv([$t43], "out_form", C, false)), "fincopy")), "Text"))), " is not null"), " order by sw_field")); if ($t44 !== undefined) { await $.mset((await $.mv((await $.wv([$t43], "SWDataModule", C, false)), "ComboItems")), "SQL", $t44); } }
  }
  { const $t45 = $.sub((await $.mv((await $.v(C, "OUT_FORM")), "ComponentCount")), 1);
    L0["i"] = 0;
    let $t46 = true;
    for (;;) {
      if (!$t46) { L0["i"] = $.succ(L0["i"], 1); }
      $t46 = false;
      if (!($.ord(L0["i"]) <= $.ord($t45))) break;
      if ($.truthy($.ne((await $.mv((await $.idx((await $.mv((await $.v(C, "OUT_FORM")), "Components")), [L0["i"]])), "Name")), "fincopy"))) {
        if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.v(C, "OUT_FORM")), "Components")), [L0["i"]])), "ClassType")), (await $.v(C, "TComboBox"))))) {
          {
            const $t47 = (await $.mv((await $.v(C, "swDataModule")), "ComboItems"));
            await $.stmt((await $.wcall([$t47], "setvariable", ["Comboname", (await $.mv((await $.idx((await $.mv((await $.wv([$t47], "OUT_FORM", C, false)), "Components")), [(await $.wv([$t47], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "name"))], C)));
            await $.stmt($.wcall([$t47], "close", [], C));
            await $.stmt($.wcall([$t47], "open", [], C));
            { const $t48 = $.add((await $.mv((await $.mv((await $.wv([$t47], "swDataModule", C, false)), "ComboItems")), "RecordCount")), 1);
              await $.wset([$t47], "j", 1, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
              let $t49 = true;
              for (;;) {
                if (!$t49) { await $.wset([$t47], "j", $.succ((await $.wv([$t47], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
                $t49 = false;
                if (!($.ord((await $.wv([$t47], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t48))) break;
                if ($.truthy($.ne((await $.mv(((await $.idx((await $.mv((await $.wv([$t47], "OUT_FORM", C, false)), "Components")), [(await $.wv([$t47], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "ItemIndex")), 0))) {
                  if ($.truthy($.eq((await $.wv([$t47], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1))) {
                    await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t47], "OUT_FORM", C, false)), "Components")), [(await $.wv([$t47], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "items")), "Clear", []);
                  } else {
                    if ($.truthy($.ne((await $.idx((await $.mv(((await $.idx((await $.mv((await $.wv([$t47], "OUT_FORM", C, false)), "Components")), [(await $.wv([$t47], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Items")), [$.add((await $.wv([$t47], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 2)])), ""))) {
                      await $.mcall((await $.mv((await $.idx((await $.mv((await $.wv([$t47], "OUT_FORM", C, false)), "Components")), [(await $.wv([$t47], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "items")), "Clear", []);
                      await $.mcall((await $.mv((await $.wv([$t47], "swDataModule", C, false)), "ComboItems")), "Next", []);
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
  U.func("Selectpanel", async function Selectpanel(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "mestype": ''};
  {
    const $t50 = (await $.v(C, "OUT_FORM"));
    await $.wset([$t50], "mestype", $.add((await $.mv((await $.wv([$t50], "FIN", C, false)), "Text")), (await $.mv((await $.wv([$t50], "fincopy", C, false)), "Text"))), { get: async () => L0["mestype"], set: async (v) => { L0["mestype"] = v; }, local: true });
    if ($.truthy($.eq((await $.wv([$t50], "mestype", { get: async () => L0["mestype"], set: async (v) => { L0["mestype"] = v; }, local: true }, false)), "MT103AZN"))) {
      await $.mset((await $.wv([$t50], "MF77B", C, false)), "visible", (await $.wv([$t50], "false", C, false)));
      await $.mset((await $.wv([$t50], "MF71G", C, false)), "Visible", (await $.wv([$t50], "false", C, false)));
      await $.mset((await $.wv([$t50], "MF57", C, false)), "Visible", (await $.wv([$t50], "false", C, false)));
      await $.mset((await $.wv([$t50], "MF56", C, false)), "Visible", (await $.wv([$t50], "false", C, false)));
      await $.mset((await $.wv([$t50], "MF55", C, false)), "Visible", (await $.wv([$t50], "false", C, false)));
      await $.mset((await $.wv([$t50], "MF54", C, false)), "Visible", (await $.wv([$t50], "false", C, false)));
      await $.mset((await $.wv([$t50], "MF53", C, false)), "Visible", (await $.wv([$t50], "false", C, false)));
      await $.mset((await $.wv([$t50], "MF52", C, false)), "Visible", (await $.wv([$t50], "false", C, false)));
      await $.mset((await $.wv([$t50], "ComissionAccs_Panel", C, false)), "Visible", (await $.wv([$t50], "false", C, false)));
      await $.mset((await $.wv([$t50], "MF36", C, false)), "Visible", (await $.wv([$t50], "false", C, false)));
      await $.mset((await $.wv([$t50], "MF33B", C, false)), "Visible", (await $.wv([$t50], "false", C, false)));
      await $.mset((await $.wv([$t50], "MF21", C, false)), "Visible", (await $.wv([$t50], "false", C, false)));
      await $.mset((await $.wv([$t50], "MF71a", C, false)), "Visible", (await $.wv([$t50], "True", C, false)));
    }
    if ($.truthy($.eq((await $.wv([$t50], "mestype", { get: async () => L0["mestype"], set: async (v) => { L0["mestype"] = v; }, local: true }, false)), "MT205AZN"))) {
      await $.mset((await $.wv([$t50], "MF57_main", C, false)), "Visible", (await $.wv([$t50], "true", C, false)));
      await $.mset((await $.wv([$t50], "MF21", C, false)), "Visible", (await $.wv([$t50], "TRUE", C, false)));
      await $.mset((await $.wv([$t50], "MF32A", C, false)), "Visible", (await $.wv([$t50], "TRUE", C, false)));
      await $.mset((await $.wv([$t50], "MF36", C, false)), "Visible", (await $.wv([$t50], "False", C, false)));
      await $.mset((await $.wv([$t50], "ComissionAccs_Panel", C, false)), "Visible", (await $.wv([$t50], "False", C, false)));
      await $.mset((await $.wv([$t50], "MF53", C, false)), "Visible", (await $.wv([$t50], "False", C, false)));
      await $.mset((await $.wv([$t50], "MF54", C, false)), "Visible", (await $.wv([$t50], "False", C, false)));
      await $.mset((await $.wv([$t50], "MF55", C, false)), "Visible", (await $.wv([$t50], "False", C, false)));
      await $.mset((await $.wv([$t50], "MF56", C, false)), "Visible", (await $.wv([$t50], "False", C, false)));
      await $.mset((await $.wv([$t50], "MF57", C, false)), "Visible", (await $.wv([$t50], "False", C, false)));
      await $.mset((await $.wv([$t50], "MF71G", C, false)), "Visible", (await $.wv([$t50], "False", C, false)));
      await $.mset((await $.wv([$t50], "MF77B", C, false)), "visible", (await $.wv([$t50], "false", C, false)));
      await $.mset((await $.wv([$t50], "MF33B", C, false)), "Visible", (await $.wv([$t50], "false", C, false)));
      await $.mset((await $.wv([$t50], "MF23b", C, false)), "Visible", (await $.wv([$t50], "false", C, false)));
      await $.mset((await $.wv([$t50], "MF71a", C, false)), "Visible", (await $.wv([$t50], "false", C, false)));
      await $.mset((await $.wv([$t50], "MF70", C, false)), "Visible", (await $.wv([$t50], "false", C, false)));
      await $.mset((await $.wv([$t50], "MF59_main", C, false)), "Visible", (await $.wv([$t50], "false", C, false)));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TOUT_FORM", "FINChange", async function FINChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sonra": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "fin")), "Text")), ""))) {
    L0["sonra"] = (await $.mv((await $.v(C, "fincopy")), "Text"));
    if ($.truthy($.eq(L0["sonra"], "AZM"))) {
      L0["sonra"] = "AZN";
    }
    await $.mset((await $.v(C, "OUT_FORM")), "Caption", $.add((await $.mv((await $.v(C, "FIN")), "Text")), L0["sonra"]));
    if ($.truthy($.ne((await $.mv((await $.v(C, "FIN")), "Text")), ""))) {
      await $.mset((await $.v(C, "FIN")), "color", (await $.v(C, "clWindow")));
    }
    await $.mset((await $.v(C, "MainPanel")), "Visible", true);
    await $.mcall((await $.v(C, "MainPanel")), "Repaint", []);
    await $.mcall((await $.mv((await $.v(C, "CMF50")), "Items")), "Clear", []);
    await $.mcall((await $.mv((await $.v(C, "CMF53")), "Items")), "Clear", []);
    await $.mcall((await $.mv((await $.v(C, "CMF54")), "Items")), "Clear", []);
    await $.mcall((await $.mv((await $.v(C, "CMF55")), "Items")), "Clear", []);
    await $.mcall((await $.mv((await $.v(C, "CMF56")), "Items")), "Clear", []);
    await $.mcall((await $.mv((await $.v(C, "CMF57")), "Items")), "Clear", []);
    await $.mcall((await $.mv((await $.v(C, "CMF59")), "Items")), "Clear", []);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "fincopy")), "Text")), "AZN"))) {
    await $.mset((await $.v(C, "mf32a_val")), "Text", "AZN");
    await $.mset((await $.v(C, "mf32a_val")), "Enabled", false);
  } else {
    await $.mset((await $.v(C, "mf32a_val")), "Text", "");
    await $.mset((await $.v(C, "mf32a_val")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "PageControl1Change", async function PageControl1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PageControl1")), "ActivePage", (await $.v(C, "TabSheet1")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "CMF50Change", async function CMF50Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "name1": '', "selected1": '', "i": 0, "j": 0, "k": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t51 = await $.iset((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "aftercomboselect")), "SQL")), [2], $.add($.add($.add($.add(" and ", (await $.mv((await $.v(C, "fin")), "Text"))), (await $.mv((await $.v(C, "fincopy")), "Text"))), " is not null"), " order by sw_field")); if ($t51 !== undefined) { await $.mset((await $.mv((await $.v(C, "SWDataModule")), "aftercomboselect")), "SQL", $t51); } }
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
    const $t52 = (await $.mv((await $.v(C, "SWDataModule")), "aftercomboselect"));
    await $.stmt((await $.wcall([$t52], "SetVariable", ["name", (await $.wv([$t52], "name1", { get: async () => L0["name1"], set: async (v) => { L0["name1"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t52], "SetVariable", ["selected", (await $.wv([$t52], "selected1", { get: async () => L0["selected1"], set: async (v) => { L0["selected1"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t52], "close", [], C));
    await $.stmt($.wcall([$t52], "open", [], C));
  }
  { const $t53 = (await $.mv((await $.mv((L0["sender"]), "items")), "count"));
    L0["j"] = 1;
    let $t54 = true;
    for (;;) {
      if (!$t54) { L0["j"] = $.succ(L0["j"], 1); }
      $t54 = false;
      if (!($.ord(L0["j"]) <= $.ord($t53))) break;
      { const $t55 = $.sub((await $.mv((await $.v(C, "OUT_FORM")), "ComponentCount")), 1);
        L0["i"] = 0;
        let $t56 = true;
        for (;;) {
          if (!$t56) { L0["i"] = $.succ(L0["i"], 1); }
          $t56 = false;
          if (!($.ord(L0["i"]) <= $.ord($t55))) break;
          if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.v(C, "OUT_FORM")), "Components")), [L0["i"]])), "ClassType")), (await $.v(C, "TPanel"))))) {
            if ($.truthy($.eq((await $.mv(((await $.idx((await $.mv((await $.v(C, "OUT_FORM")), "Components")), [L0["i"]]))), "name")), (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "aftercomboselectSW_FIELD")), "AsString"))))) {
              await $.mset((await $.idx((await $.mv((await $.v(C, "OUT_FORM")), "Components")), [L0["i"]])), "Visible", false);
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
    const $t57 = (await $.mv((await $.v(C, "SWDataModule")), "Comboselect"));
    await $.stmt((await $.wcall([$t57], "SetVariable", ["name", (await $.wv([$t57], "name1", { get: async () => L0["name1"], set: async (v) => { L0["name1"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t57], "SetVariable", ["selected", (await $.wv([$t57], "selected1", { get: async () => L0["selected1"], set: async (v) => { L0["selected1"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t57], "close", [], C));
    await $.stmt($.wcall([$t57], "open", [], C));
  }
  { const $t58 = $.sub((await $.mv((await $.v(C, "OUT_FORM")), "ComponentCount")), 1);
    L0["k"] = 0;
    let $t59 = true;
    for (;;) {
      if (!$t59) { L0["k"] = $.succ(L0["k"], 1); }
      $t59 = false;
      if (!($.ord(L0["k"]) <= $.ord($t58))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.v(C, "OUT_FORM")), "Components")), [L0["k"]])), "ClassType")), (await $.v(C, "TPanel"))))) {
        if ($.truthy($.eq((await $.mv(((await $.idx((await $.mv((await $.v(C, "OUT_FORM")), "Components")), [L0["k"]]))), "name")), (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "ComboselectSW_FIELD")), "AsString"))))) {
          await $.mset((await $.idx((await $.mv((await $.v(C, "OUT_FORM")), "Components")), [L0["k"]])), "Visible", true);
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "MF50Resize", async function MF50Resize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "MF50")), "AutoSize", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    await $.mset((await $.v(C, "New_MF71F")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "New_MF71F")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "New_MF71FClick", async function New_MF71FClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "MF71F_1")), "Visible")), false))) {
    await $.mset((await $.v(C, "MF71F_1")), "Visible", true);
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "MF71F_2")), "Visible")), false))) {
      await $.mset((await $.v(C, "MF71F_2")), "Visible", true);
    } else {
      if ($.truthy($.eq((await $.mv((await $.v(C, "MF71F_3")), "Visible")), false))) {
        await $.mset((await $.v(C, "MF71F_3")), "Visible", true);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "DBLookupComboBox2Exit", async function DBLookupComboBox2Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit1_MF50")), "Text", (await $.mv((await $.v(C, "DBLookupComboBox2")), "Text")));
  await $.mset((await $.v(C, "Edit3_MF50")), "Text", (await $.mv((await $.v(C, "DBLookupComboBox2")), "Text")));
  await $.mset((await $.v(C, "Edit4_MF50")), "Text", (await $.mv((await $.v(C, "DBLookupComboBox2")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "Delete1Click", async function Delete1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "MF71F_1")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "Delete2Click", async function Delete2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "MF71F_2")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "Delete3Click", async function Delete3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "MF71F_3")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "MtcreateClick", async function MtcreateClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "MF72_memo")), "Clear", []);
  await $.mset((await $.v(C, "MF72_memo")), "Text", (await $.mv((await $.v(C, "OF72_RichEdit")), "Text")));
  await $.mcall((await $.v(C, "createmessagebegin")), "Execute", []);
  if ($.truthy((await $.v(C, "CanClose")))) {
    await $.mcall((await $.v(C, "OUT_FORM")), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "CreateMessageBeginExecute", async function CreateMessageBeginExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "m20": '', "m33": '', "mf331": '', "mf332": '', "m23b": '', "m26t": '', "m32a": '', "m36": '', "m50": '', "m52": '', "m53": '', "m54": '', "m55": '', "m56": '', "v_mf20_reference": '', "m57": '', "m59": '', "m70": '', "m71a": '', "m71f": '', "m71g": '', "m72": '', "m77b": '', "mf20": '', "mf23b": '', "mf26t": '', "mf27": '', "mf32a": '', "mf36": '', "v_sendertype": '', "v_senderbic": '', "v_senderlt": '', "v_application": '', "v_fincopy": '', "v_messagetype": '', "v_priority": '', "v_monitoring": '', "v_receivertype": '', "v_receiverbic": '', "mf32a_date": '', "mf32a_curr": '', "mf50_account": '', "mf50_bic": '', "mf50_nameadress": '', "mf52_account": '', "mf52_bic": '', "mf52_nameadress": '', "mf53_account": '', "mf53_bic": '', "mf53_namelocation": '', "mf54_account": '', "mf54_bic": '', "mf54_namelocation": '', "mf55_account": '', "mf55_bic": '', "mf55_namelocation": '', "mf56_account": '', "mf56_bic": '', "mf56_namelocation": '', "mf57_account": '', "mf57_bic": '', "mf57_namelocation": '', "mf59_account": '', "mf59_bic": '', "mf59_nameadress": '', "status": '', "stat7": '', "mf70": '', "mf71f_child": '', "mf71g_child": '', "dolmayan": '', "stat1": '', "stat2": '', "stat3": '', "stat4": '', "stat5": '', "stat6": '', "mf71a": '', "mf72": '', "mf77b": '', "voen": '', "str72": '', "mf32a_amount": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CanClose", true);
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
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit11_mf32a")), "text")), ""))) {
    L0["dolmayan"] = $.add(L0["dolmayan"], "  MF32A  mebleq,");
    L0["stat3"] = "exitfromprosedure";
  } else {
    L0["stat3"] = "nextprosedure";
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CMF50")), "Text")), ""))) {
    L0["dolmayan"] = $.add(L0["dolmayan"], "  MF50,");
    L0["stat4"] = "nextprosedure";
  } else {
    L0["stat4"] = "nextprosedure";
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CMF57")), "Text")), ""))) {
    L0["dolmayan"] = $.add(L0["dolmayan"], "  MF57,");
    L0["stat7"] = "nextprosedure";
  } else {
    L0["stat7"] = "nextprosedure";
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CMF59")), "Text")), ""))) {
    L0["dolmayan"] = $.add(L0["dolmayan"], "  MF59,");
    L0["stat5"] = "nextprosedure";
  } else {
    L0["stat5"] = "nextprosedure";
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit1_MF71A")), "Text")), ""))) {
    L0["dolmayan"] = $.add(L0["dolmayan"], "  MF71A,");
    L0["stat6"] = "exitfromprosedure";
  } else {
    L0["stat6"] = "nextprosedure";
  }
  if ($.truthy((await $.or_(((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.eq(L0["stat1"], "nextprosedure")), async () => ($.eq(L0["stat2"], "nextprosedure")))), async () => ($.eq(L0["stat3"], "nextprosedure")))), async () => ($.eq(L0["stat4"], "nextprosedure")))), async () => ($.eq(L0["stat5"], "nextprosedure")))), async () => ($.eq(L0["stat6"], "nextprosedure")))), async () => ($.eq(L0["stat7"], "nextprosedure")))), async () => ($.ne((await $.mv((await $.v(C, "fincopy")), "text")), "AZN"))))), async () => ((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.eq(L0["stat1"], "nextprosedure")), async () => ($.eq(L0["stat2"], "nextprosedure")))), async () => ($.eq(L0["stat3"], "nextprosedure")))), async () => ($.eq(L0["stat4"], "nextprosedure")))), async () => ($.eq(L0["stat5"], "nextprosedure")))), async () => ($.eq(L0["stat6"], "nextprosedure")))), async () => ($.eq((await $.mv((await $.v(C, "fincopy")), "Text")), "AZN"))))))))) {
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "referans")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "referans")), "Open", []);
    {
      const $t60 = (await $.mv((await $.v(C, "SWDataModule")), "referans"));
      await $.stmt((await $.wcall([$t60], "SetVariable", ["FORMATS", (await $.mv((await $.wv([$t60], "FIN", C, false)), "text"))], C)));
      await $.stmt((await $.wcall([$t60], "SetVariable", ["CURRENSY", (await $.mv((await $.wv([$t60], "mf32a_val", C, false)), "text"))], C)));
    }
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "referans")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "referans")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "referans")), "Open", []);
    await $.mset((await $.v(C, "MF20_edit")), "text", (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "referansrefe")), "asstring")));
    L0["mf23b"] = (await $.mv((await $.v(C, "MF23b_edit")), "Text"));
    L0["mf26t"] = (await $.mv((await $.v(C, "MF26T_edit")), "Text"));
    L0["mf32a_curr"] = (await $.mv((await $.v(C, "mf32a_val")), "Text"));
    L0["mf32a_amount"] = (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "edit11_mf32a")), "Text"))]));
    if ($.truthy($.ne((await $.mv((await $.v(C, "MF33_edit")), "Text")), ""))) {
      L0["mf331"] = (await $.mv((await $.v(C, "MF33_edit")), "Text"));
      L0["mf332"] = (await $.mv((await $.v(C, "mf33_edit2")), "Text"));
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "edit1")), "Text")), ""))) {
      L0["mf36"] = (await $.mv((await $.v(C, "edit1")), "Text"));
    }
    L0["v_mf20_reference"] = (await $.mv((await $.v(C, "MF20_edit")), "Text"));
    L0["v_sendertype"] = (await $.mv((await $.v(C, "sendertype")), "Text"));
    L0["v_senderbic"] = (await $.mv((await $.v(C, "senderlt")), "Text"));
    L0["v_senderlt"] = (await $.mv((await $.v(C, "senderlt")), "Text"));
    L0["v_application"] = (await $.mv((await $.v(C, "Application")), "Text"));
    L0["v_fincopy"] = (await $.mv((await $.v(C, "fincopy")), "Text"));
    L0["v_messagetype"] = (await $.mv((await $.v(C, "fin")), "Text"));
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
    if ($.truthy($.ne((await $.mv((await $.v(C, "Edit11_mf32a")), "Text")), ""))) {
      L0["m32a"] = ":32A:";
    } else {
      L0["m32a"] = "";
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "MF33_edit")), "Text")), ""))) {
      L0["m33"] = ":33:";
    } else {
      L0["m33"] = "";
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "edit1")), "Text")), ""))) {
      L0["m36"] = ":36:";
    } else {
      L0["m36"] = "";
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "fincopy")), "Text")), "AZN"))) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "CMF50")), "ItemIndex")), 1))) {
        L0["m50"] = ":50A:";
        L0["mf50_account"] = (await $.mv((await $.v(C, "Edit1_MF50")), "Text"));
        L0["mf50_bic"] = (await $.mv((await $.v(C, "Edit2_MF50")), "Text"));
        L0["mf50_nameadress"] = (await $.mv((await $.v(C, "Memo1_MF50")), "Text"));
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "CMF50")), "ItemIndex")), 2))) {
        L0["m50"] = ":50F:";
        L0["mf50_account"] = (await $.mv((await $.v(C, "Edit4_MF50")), "Text"));
        L0["mf50_nameadress"] = (await $.mv((await $.v(C, "Memo2_MF50")), "Text"));
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "CMF50")), "ItemIndex")), 3))) {
        L0["voen"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "Memo2_MF50")), "Lines")), [1])), 7, 20]))]));
        L0["m50"] = ":50K:";
        L0["mf50_account"] = (await $.mv((await $.v(C, "Edit3_MF50")), "Text"));
        L0["mf50_nameadress"] = (await $.mv((await $.v(C, "Memo2_MF50")), "Text"));
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "CMF50")), "ItemIndex")), 0))) {
        L0["m50"] = "";
        L0["mf50_account"] = "";
        L0["mf50_bic"] = "";
        L0["mf50_nameadress"] = "";
      }
    } else {
      if ($.truthy($.eq((await $.mv((await $.v(C, "CMF50")), "ItemIndex")), 1))) {
        await $.mset((await $.v(C, "Memo2")), "Text", (await $.mv((await $.v(C, "Memo2_MF50")), "Text")));
        L0["voen"] = (await $.call(C, "trim", [(await $.idx((await $.mv((await $.v(C, "Memo2_MF50")), "Lines")), [1]))]));
        L0["m50"] = ":50K:";
        L0["mf50_account"] = (await $.mv((await $.v(C, "Edit3_MF50")), "Text"));
        L0["mf50_nameadress"] = (await $.mv((await $.v(C, "Memo2")), "Text"));
      } else {
        L0["m50"] = "";
        L0["mf50_account"] = "";
        L0["mf50_bic"] = "";
        L0["mf50_nameadress"] = "";
      }
    }
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Chk_AccNo")), "Close", []);
    if ($.truthy($.eq((await $.mv((await $.v(C, "fincopy")), "text")), "AZN"))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Chk_AccNo")), "SetVariable", ["acc_no", (await $.mv((await $.v(C, "Edit3_MF50")), "Text"))])));
    } else {
      { const $t61 = (await $.mv((await $.v(C, "CMF50")), "ItemIndex"));
        if ($.eq($t61, 1)) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Chk_AccNo")), "SetVariable", ["acc_no", (await $.mv((await $.v(C, "Edit1_MF50")), "Text"))])));
        }
        else if ($.eq($t61, 2)) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Chk_AccNo")), "SetVariable", ["acc_no", (await $.mv((await $.v(C, "Edit4_MF50")), "Text"))])));
        }
        else if ($.eq($t61, 3)) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Chk_AccNo")), "SetVariable", ["acc_no", (await $.mv((await $.v(C, "Edit3_MF50")), "Text"))])));
        }
      }
    }
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Chk_AccNo")), "Open", []);
    await $.set(C, "CanClose", true);
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF50")), "ItemIndex")), 3))) {
      { const $t62 = (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "Chk_AccNoCUST_TYPE")), "AsInteger"));
        if ($.eq($t62, 1)) {
          L0["voen"] = "";
        }
      }
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
    if ($.truthy($.eq((await $.mv((await $.v(C, "FINCOPY")), "Text")), "AZN"))) {
      L0["m53"] = "";
      L0["mf53_account"] = "";
    } else {
      L0["m53"] = ":53B:";
      L0["mf53_account"] = (await $.mv((await $.v(C, "DBEdit1")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF54")), "ItemIndex")), 1))) {
      L0["m54"] = ":54A:";
      L0["mf54_account"] = (await $.mv((await $.v(C, "Edit1_MF54")), "Text"));
      L0["mf54_bic"] = (await $.mv((await $.v(C, "Edit2_MF54")), "Text"));
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
      L0["mf59_nameadress"] = (await $.mv((await $.v(C, "Memo2_MF59")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF59")), "ItemIndex")), 2))) {
      L0["m59"] = ":59A:";
      L0["mf59_account"] = (await $.mv((await $.v(C, "Edit2_MF59")), "Text"));
      L0["mf59_bic"] = (await $.mv((await $.v(C, "Edit3_MF59")), "Text"));
      L0["mf59_nameadress"] = (await $.mv((await $.v(C, "Memo1_MF59")), "Text"));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF59")), "ItemIndex")), 0))) {
      L0["m59"] = "";
      L0["mf59_account"] = "";
      L0["mf59_nameadress"] = "";
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "OF70_RichEdit")), "Text")), ""))) {
      L0["m70"] = ":70:";
      L0["mf70"] = (await $.call(C, "trim", [(await $.mv((await $.v(C, "OF70_RichEdit")), "Text"))]));
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
      L0["mf72"] = (await $.call(C, "trim", [(await $.mv((await $.v(C, "OF72_RichEdit")), "Text"))]));
    } else {
      L0["m72"] = "";
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "MF77_memo")), "Text")), ""))) {
      L0["m77b"] = ":77B:";
      L0["mf77b"] = (await $.mv((await $.v(C, "MF77_memo")), "Text"));
    }
    if ($.truthy($.eq(L0["v_messagetype"], "MT103"))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in_insert")), "CallProcedure", ["savetransaction", [(await $.call(C, "datetostr", [(await $.mv((await $.v(C, "mf32_date")), "Date"))])), L0["v_mf20_reference"], L0["mf50_account"], L0["v_receiverbic"], (await $.mv((await $.v(C, "edit2")), "Text")), L0["mf59_account"], L0["mf59_nameadress"], L0["v_fincopy"], (await $.mv((await $.v(C, "OF70_RichEdit")), "Text")), (await $.mv((await $.v(C, "OF72_RichEdit")), "Text")), L0["mf32a_amount"], 0, 1, L0["mf50_nameadress"], L0["mf59_nameadress"], (await $.mv((await $.v(C, "edit3")), "Text")), L0["v_receiverbic"], L0["mf50_nameadress"], L0["mf59_nameadress"], "AZN"]])));
    } else {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_in_insert")), "CallProcedure", ["saving205", [(await $.call(C, "datetostr", [(await $.mv((await $.v(C, "mf32_date")), "Date"))])), (await $.mv((await $.v(C, "reciverbic")), "Text")), L0["v_mf20_reference"], (await $.mv((await $.v(C, "MF26T_edit")), "Text")), L0["mf32a_amount"], L0["mf50_nameadress"], L0["mf59_nameadress"], (await $.mv((await $.v(C, "OF70_RichEdit")), "Text")), (await $.mv((await $.v(C, "edit2")), "Text")), L0["v_sendertype"], (await $.mv((await $.v(C, "fincopy")), "Text")), 25]])));
    }
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out_2")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out3")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out3")), "Refresh", []);
  } else {
    await $.stmt((await $.call(C, "ShowMessage", [$.add($.add(" ", L0["dolmayan"]), " Xanalar doldurulmayıb!")])));
    await $.set(C, "CanClose", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "viewpanelExecute", async function viewpanelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t63 = (await $.mv((await $.v(C, "SWDataModule")), "OracleDataSet1"));
    await $.stmt($.wcall([$t63], "close", [], C));
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "OracleDataSet1")), "sql")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "OracleDataSet1")), "sql")), "Add", [$.add($.add("select * from sw_fields where sw_main_field='00' and ", (await $.mv((await $.v(C, "fin")), "text"))), " is not null")])));
  await $.stmt((await $.call(C, "showmessage", [(await $.mv((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "OracleDataSet1")), "SQL")), "Text"))])));
  {
    const $t64 = (await $.mv((await $.v(C, "SWDataModule")), "OracleDataSet1"));
    await $.stmt($.wcall([$t64], "Open", [], C));
  }
  { const $t65 = $.sub((await $.mv((await $.v(C, "OUT_FORM")), "ComponentCount")), 1);
    L0["i"] = 0;
    let $t66 = true;
    for (;;) {
      if (!$t66) { L0["i"] = $.succ(L0["i"], 1); }
      $t66 = false;
      if (!($.ord(L0["i"]) <= $.ord($t65))) break;
      if ($.truthy($.eq(((await $.mv((await $.idx((await $.mv((await $.v(C, "OUT_FORM")), "Components")), [L0["i"]])), "ClassType"))), (await $.v(C, "TPanel"))))) {
        if ($.truthy($.eq((await $.mv(((await $.idx((await $.mv((await $.v(C, "Out_form")), "Components")), [L0["i"]]))), "Name")), (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "OracleDataSet2SW_FIELD")), "asstring"))))) {
          await $.mset((await $.idx((await $.mv((await $.v(C, "OUT_FORM")), "Components")), [L0["i"]])), "Visible", true);
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "CMF50Click", async function CMF50Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "InsertComboBoxItems", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PageControl1")), "ActivePage", (await $.v(C, "Header")));
  await $.mset((await $.v(C, "senderlt")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "bankinfo")), "fieldbyname", ["SWIFT"])), "asstring")));
  await $.mset((await $.v(C, "sendertype")), "Text", "Institution");
  await $.mset((await $.v(C, "ComboBox2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "bankinfo")), "fieldbyname", ["SWIFT"])), "asstring")));
  await $.mset((await $.v(C, "recivertype")), "Text", "Institution");
  await $.mset((await $.v(C, "Application")), "Text", "FIN");
  await $.mset((await $.v(C, "priority")), "Text", "N");
  await $.mset((await $.v(C, "monitoring")), "Text", "N");
  await $.mset((await $.v(C, "mf32_date")), "DateTime", (await $.v(C, "date")));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "MT")), "Open", []);
  await $.mset((await $.v(C, "fincopy")), "itemindex", 1);
  await $.mset((await $.v(C, "fin")), "ItemIndex", 0);
  await $.mset((await $.v(C, "fincopy")), "OnChange", (await $.ref_(C, "finchange")));
  await $.mset((await $.v(C, "mf32a_val")), "Text", "AZN");
  await $.mset((await $.v(C, "mf32a_val")), "Enabled", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "CMF50Enter", async function CMF50Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((L0["sender"]), "Items")), "Count")), 0))) {
    await $.stmt($.call(C, "InsertComboBoxItems", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "reciverbicChange", async function reciverbicChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["name"])), "asstring")));
  await $.mset((await $.v(C, "Edit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["city"])), "asstring")));
  await $.mset((await $.v(C, "Edit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["address"])), "asstring")));
  await $.mset((await $.v(C, "Edit5")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["country"])), "asstring")));
  if ($.truthy($.eq((await $.mv((await $.v(C, "reciverbic")), "Text")), ""))) {
    await $.mset((await $.v(C, "Edit2")), "Text", "");
    await $.mset((await $.v(C, "Edit3")), "Text", "");
    await $.mset((await $.v(C, "Edit4")), "Text", "");
    await $.mset((await $.v(C, "Edit5")), "Text", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "MF20_editKeyPress", async function MF20_editKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "len": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["len"] = (await $.mv((await $.v(C, "MF20_edit")), "Text"));
  if ($.truthy((await $.and_(($.eq((await $.call(C, "Length", [L0["len"]])), 16)), async () => ($.ne((await L0["key"].get()), "\b")))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOUT_FORM", "MF26T_editKeyPress", async function MF26T_editKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOUT_FORM", "Memo1_MF50KeyPress", async function Memo1_MF50KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "i": 0, "n": 0, "k": 0, "cposy": 0, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((L0["sender"]), "CaretPos")), "y")), 3))) {
    await L0["key"].set("\u0000");
  }
  await L0["key"].set((await $.call(C, "UpCase", [(await L0["key"].get())])));
  L0["cposy"] = (await $.mv((await $.mv((L0["sender"]), "CaretPos")), "y"));
  L0["s"] = (await $.mv((L0["sender"]), "text"));
  if ($.truthy($.gt((await $.call(C, "length", [L0["s"]])), 0))) {
    await $.mset(L0["sender"], "text", L0["s"]);
  }
  if ($.truthy($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 35))) {
    if ($.truthy($.lt(L0["cposy"], 3))) {
      if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
        L0["n"] = 0;
        { const $t67 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
          L0["i"] = 0;
          let $t68 = true;
          for (;;) {
            if (!$t68) { L0["i"] = $.succ(L0["i"], 1); }
            $t68 = false;
            if (!($.ord(L0["i"]) <= $.ord($t67))) break;
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
  U.method("TOUT_FORM", "Memo2_MF50KeyPress", async function Memo2_MF50KeyPress(Self, p0, p1) {
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
      await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s"], async ($t69) => { L0["s"] = $t69; }), (await $.call(C, "length", [L0["s"]])), 1])));
    }
  }
  await $.mset(L0["sender"], "text", L0["s"]);
  if ($.truthy($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 35))) {
    if ($.truthy($.lt(L0["cposy"], 3))) {
      if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
        L0["n"] = 0;
        { const $t70 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
          L0["i"] = 0;
          let $t71 = true;
          for (;;) {
            if (!$t71) { L0["i"] = $.succ(L0["i"], 1); }
            $t71 = false;
            if (!($.ord(L0["i"]) <= $.ord($t70))) break;
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
  U.method("TOUT_FORM", "Memo3_MF50KeyPress", async function Memo3_MF50KeyPress(Self, p0, p1) {
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
      await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s"], async ($t72) => { L0["s"] = $t72; }), (await $.call(C, "length", [L0["s"]])), 1])));
    }
  }
  await $.mset(L0["sender"], "text", L0["s"]);
  if ($.truthy($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 35))) {
    if ($.truthy($.lt(L0["cposy"], 3))) {
      if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
        L0["n"] = 0;
        { const $t73 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
          L0["i"] = 0;
          let $t74 = true;
          for (;;) {
            if (!$t74) { L0["i"] = $.succ(L0["i"], 1); }
            $t74 = false;
            if (!($.ord(L0["i"]) <= $.ord($t73))) break;
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
  U.method("TOUT_FORM", "Memo1_MF52KeyPress", async function Memo1_MF52KeyPress(Self, p0, p1) {
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
      await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s"], async ($t75) => { L0["s"] = $t75; }), (await $.call(C, "length", [L0["s"]])), 1])));
    }
  }
  await $.mset(L0["sender"], "text", L0["s"]);
  if ($.truthy($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 35))) {
    if ($.truthy($.lt(L0["cposy"], 3))) {
      if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
        L0["n"] = 0;
        { const $t76 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
          L0["i"] = 0;
          let $t77 = true;
          for (;;) {
            if (!$t77) { L0["i"] = $.succ(L0["i"], 1); }
            $t77 = false;
            if (!($.ord(L0["i"]) <= $.ord($t76))) break;
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
  U.method("TOUT_FORM", "Memo2_MF52KeyPress", async function Memo2_MF52KeyPress(Self, p0, p1) {
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
      await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s"], async ($t78) => { L0["s"] = $t78; }), (await $.call(C, "length", [L0["s"]])), 1])));
    }
  }
  await $.mset(L0["sender"], "text", L0["s"]);
  if ($.truthy($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 35))) {
    if ($.truthy($.lt(L0["cposy"], 3))) {
      if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
        L0["n"] = 0;
        { const $t79 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
          L0["i"] = 0;
          let $t80 = true;
          for (;;) {
            if (!$t80) { L0["i"] = $.succ(L0["i"], 1); }
            $t80 = false;
            if (!($.ord(L0["i"]) <= $.ord($t79))) break;
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
  U.method("TOUT_FORM", "Memo1_MF53KeyPress", async function Memo1_MF53KeyPress(Self, p0, p1) {
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
      await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s"], async ($t81) => { L0["s"] = $t81; }), (await $.call(C, "length", [L0["s"]])), 1])));
    }
  }
  await $.mset(L0["sender"], "text", L0["s"]);
  if ($.truthy($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 35))) {
    if ($.truthy($.lt(L0["cposy"], 3))) {
      if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
        L0["n"] = 0;
        { const $t82 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
          L0["i"] = 0;
          let $t83 = true;
          for (;;) {
            if (!$t83) { L0["i"] = $.succ(L0["i"], 1); }
            $t83 = false;
            if (!($.ord(L0["i"]) <= $.ord($t82))) break;
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
  U.method("TOUT_FORM", "Memo2_MF53KeyPress", async function Memo2_MF53KeyPress(Self, p0, p1) {
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
      await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s"], async ($t84) => { L0["s"] = $t84; }), (await $.call(C, "length", [L0["s"]])), 1])));
    }
  }
  await $.mset(L0["sender"], "text", L0["s"]);
  if ($.truthy($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 35))) {
    if ($.truthy($.lt(L0["cposy"], 3))) {
      if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
        L0["n"] = 0;
        { const $t85 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
          L0["i"] = 0;
          let $t86 = true;
          for (;;) {
            if (!$t86) { L0["i"] = $.succ(L0["i"], 1); }
            $t86 = false;
            if (!($.ord(L0["i"]) <= $.ord($t85))) break;
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
  U.method("TOUT_FORM", "Memo1_MF54KeyPress", async function Memo1_MF54KeyPress(Self, p0, p1) {
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
      await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s"], async ($t87) => { L0["s"] = $t87; }), (await $.call(C, "length", [L0["s"]])), 1])));
    }
  }
  await $.mset(L0["sender"], "text", L0["s"]);
  if ($.truthy($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 35))) {
    if ($.truthy($.lt(L0["cposy"], 3))) {
      if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
        L0["n"] = 0;
        { const $t88 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
          L0["i"] = 0;
          let $t89 = true;
          for (;;) {
            if (!$t89) { L0["i"] = $.succ(L0["i"], 1); }
            $t89 = false;
            if (!($.ord(L0["i"]) <= $.ord($t88))) break;
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
  U.method("TOUT_FORM", "Memo2_MF54KeyPress", async function Memo2_MF54KeyPress(Self, p0, p1) {
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
      await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s"], async ($t90) => { L0["s"] = $t90; }), (await $.call(C, "length", [L0["s"]])), 1])));
    }
  }
  await $.mset(L0["sender"], "text", L0["s"]);
  if ($.truthy($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 35))) {
    if ($.truthy($.lt(L0["cposy"], 3))) {
      if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
        L0["n"] = 0;
        { const $t91 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
          L0["i"] = 0;
          let $t92 = true;
          for (;;) {
            if (!$t92) { L0["i"] = $.succ(L0["i"], 1); }
            $t92 = false;
            if (!($.ord(L0["i"]) <= $.ord($t91))) break;
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
  U.method("TOUT_FORM", "Memo1_MF55KeyPress", async function Memo1_MF55KeyPress(Self, p0, p1) {
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
      await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s"], async ($t93) => { L0["s"] = $t93; }), (await $.call(C, "length", [L0["s"]])), 1])));
    }
  }
  await $.mset(L0["sender"], "text", L0["s"]);
  if ($.truthy($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 35))) {
    if ($.truthy($.lt(L0["cposy"], 3))) {
      if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
        L0["n"] = 0;
        { const $t94 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
          L0["i"] = 0;
          let $t95 = true;
          for (;;) {
            if (!$t95) { L0["i"] = $.succ(L0["i"], 1); }
            $t95 = false;
            if (!($.ord(L0["i"]) <= $.ord($t94))) break;
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
  U.method("TOUT_FORM", "Memo2_MF55KeyPress", async function Memo2_MF55KeyPress(Self, p0, p1) {
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
      await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s"], async ($t96) => { L0["s"] = $t96; }), (await $.call(C, "length", [L0["s"]])), 1])));
    }
  }
  await $.mset(L0["sender"], "text", L0["s"]);
  if ($.truthy($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 35))) {
    if ($.truthy($.lt(L0["cposy"], 3))) {
      if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
        L0["n"] = 0;
        { const $t97 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
          L0["i"] = 0;
          let $t98 = true;
          for (;;) {
            if (!$t98) { L0["i"] = $.succ(L0["i"], 1); }
            $t98 = false;
            if (!($.ord(L0["i"]) <= $.ord($t97))) break;
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
  U.method("TOUT_FORM", "Memo1_MF56KeyPress", async function Memo1_MF56KeyPress(Self, p0, p1) {
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
      await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s"], async ($t99) => { L0["s"] = $t99; }), (await $.call(C, "length", [L0["s"]])), 1])));
    }
  }
  await $.mset(L0["sender"], "text", L0["s"]);
  if ($.truthy($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 35))) {
    if ($.truthy($.lt(L0["cposy"], 3))) {
      if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
        L0["n"] = 0;
        { const $t100 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
          L0["i"] = 0;
          let $t101 = true;
          for (;;) {
            if (!$t101) { L0["i"] = $.succ(L0["i"], 1); }
            $t101 = false;
            if (!($.ord(L0["i"]) <= $.ord($t100))) break;
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
  U.method("TOUT_FORM", "Memo2_MF56KeyPress", async function Memo2_MF56KeyPress(Self, p0, p1) {
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
      await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s"], async ($t102) => { L0["s"] = $t102; }), (await $.call(C, "length", [L0["s"]])), 1])));
    }
  }
  await $.mset(L0["sender"], "text", L0["s"]);
  if ($.truthy($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 35))) {
    if ($.truthy($.lt(L0["cposy"], 3))) {
      if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
        L0["n"] = 0;
        { const $t103 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
          L0["i"] = 0;
          let $t104 = true;
          for (;;) {
            if (!$t104) { L0["i"] = $.succ(L0["i"], 1); }
            $t104 = false;
            if (!($.ord(L0["i"]) <= $.ord($t103))) break;
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
  U.method("TOUT_FORM", "Memo1_MF57KeyPress", async function Memo1_MF57KeyPress(Self, p0, p1) {
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
      await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s"], async ($t105) => { L0["s"] = $t105; }), (await $.call(C, "length", [L0["s"]])), 1])));
    }
  }
  await $.mset(L0["sender"], "text", L0["s"]);
  if ($.truthy($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 35))) {
    if ($.truthy($.lt(L0["cposy"], 3))) {
      if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
        L0["n"] = 0;
        { const $t106 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
          L0["i"] = 0;
          let $t107 = true;
          for (;;) {
            if (!$t107) { L0["i"] = $.succ(L0["i"], 1); }
            $t107 = false;
            if (!($.ord(L0["i"]) <= $.ord($t106))) break;
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
  U.method("TOUT_FORM", "Memo2_MF57KeyPress", async function Memo2_MF57KeyPress(Self, p0, p1) {
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
      await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s"], async ($t108) => { L0["s"] = $t108; }), (await $.call(C, "length", [L0["s"]])), 1])));
    }
  }
  await $.mset(L0["sender"], "text", L0["s"]);
  if ($.truthy($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 35))) {
    if ($.truthy($.lt(L0["cposy"], 3))) {
      if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
        L0["n"] = 0;
        { const $t109 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
          L0["i"] = 0;
          let $t110 = true;
          for (;;) {
            if (!$t110) { L0["i"] = $.succ(L0["i"], 1); }
            $t110 = false;
            if (!($.ord(L0["i"]) <= $.ord($t109))) break;
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
  U.method("TOUT_FORM", "Memo1_MF59KeyPress", async function Memo1_MF59KeyPress(Self, p0, p1) {
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
      await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s"], async ($t111) => { L0["s"] = $t111; }), (await $.call(C, "length", [L0["s"]])), 1])));
    }
  }
  if ($.truthy($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 35))) {
    if ($.truthy($.lt(L0["cposy"], 3))) {
      if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
        L0["n"] = 0;
        { const $t112 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
          L0["i"] = 0;
          let $t113 = true;
          for (;;) {
            if (!$t113) { L0["i"] = $.succ(L0["i"], 1); }
            $t113 = false;
            if (!($.ord(L0["i"]) <= $.ord($t112))) break;
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
  U.method("TOUT_FORM", "MF70_memoKeyPress", async function MF70_memoKeyPress(Self, p0, p1) {
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
      await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s"], async ($t114) => { L0["s"] = $t114; }), (await $.call(C, "length", [L0["s"]])), 1])));
    }
  }
  if ($.truthy($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 35))) {
    if ($.truthy($.lt(L0["cposy"], 3))) {
      if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
        L0["n"] = 0;
        { const $t115 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
          L0["i"] = 0;
          let $t116 = true;
          for (;;) {
            if (!$t116) { L0["i"] = $.succ(L0["i"], 1); }
            $t116 = false;
            if (!($.ord(L0["i"]) <= $.ord($t115))) break;
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
  U.method("TOUT_FORM", "MF72_memoKeyPress", async function MF72_memoKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "i": 0, "n": 0, "k": 0, "cposy": 0, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOUT_FORM", "Edit2_MF57Change", async function Edit2_MF57Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "Edit2_MF57")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "Edit2_MF57")), "Color")), (await $.v(C, "clred")))))))) {
    { const $t117 = await $.iset((await $.mv((await $.v(C, "Memo1_mf57")), "Lines")), [0], ""); if ($t117 !== undefined) { await $.mset((await $.v(C, "Memo1_mf57")), "Lines", $t117); } }
    { const $t118 = await $.iset((await $.mv((await $.v(C, "Memo1_mf57")), "Lines")), [1], ""); if ($t118 !== undefined) { await $.mset((await $.v(C, "Memo1_mf57")), "Lines", $t118); } }
  } else {
    await $.mcall((await $.v(C, "Memo1_MF57")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo1_MF57")), "Lines")), "add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["name"])), "asstring"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo1_MF57")), "Lines")), "add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["city"])), "asstring"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "Edit2_MF52KeyPress", async function Edit2_MF52KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOUT_FORM", "Edit2_MF53KeyPress", async function Edit2_MF53KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOUT_FORM", "Edit2_MF54KeyPress", async function Edit2_MF54KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOUT_FORM", "Edit2_MF55KeyPress", async function Edit2_MF55KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOUT_FORM", "Edit2_MF56KeyPress", async function Edit2_MF56KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOUT_FORM", "Edit2_MF57KeyPress", async function Edit2_MF57KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOUT_FORM", "Edit2_MF50Change", async function Edit2_MF50Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "Edit2_MF50")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "Edit2_MF50")), "Color")), (await $.v(C, "clred")))))))) {
    await $.mcall((await $.v(C, "Memo1_mf50")), "Clear", []);
  } else {
    await $.mcall((await $.v(C, "Memo1_mf50")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo1_mf50")), "Lines")), "add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["name"])), "asstring"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo1_mf50")), "Lines")), "add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["city"])), "asstring"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "Edit2_MF52Change", async function Edit2_MF52Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "Edit2_MF52")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "Edit2_MF52")), "Color")), (await $.v(C, "clred")))))))) {
    { const $t119 = await $.iset((await $.mv((await $.v(C, "Memo1_mf52")), "Lines")), [0], ""); if ($t119 !== undefined) { await $.mset((await $.v(C, "Memo1_mf52")), "Lines", $t119); } }
    { const $t120 = await $.iset((await $.mv((await $.v(C, "Memo1_mf52")), "Lines")), [1], ""); if ($t120 !== undefined) { await $.mset((await $.v(C, "Memo1_mf52")), "Lines", $t120); } }
  } else {
    await $.mcall((await $.v(C, "Memo1_mf52")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo1_mf52")), "Lines")), "add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["name"])), "asstring"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo1_mf52")), "Lines")), "add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["city"])), "asstring"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "Edit2_MF53Change", async function Edit2_MF53Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "Edit2_MF53")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "Edit2_MF53")), "Color")), (await $.v(C, "clred")))))))) {
    { const $t121 = await $.iset((await $.mv((await $.v(C, "Memo1_mf53")), "Lines")), [0], ""); if ($t121 !== undefined) { await $.mset((await $.v(C, "Memo1_mf53")), "Lines", $t121); } }
    { const $t122 = await $.iset((await $.mv((await $.v(C, "Memo1_mf53")), "Lines")), [1], ""); if ($t122 !== undefined) { await $.mset((await $.v(C, "Memo1_mf53")), "Lines", $t122); } }
  } else {
    await $.mcall((await $.v(C, "Memo1_MF53")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo1_MF53")), "Lines")), "add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["name"])), "asstring"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo1_MF53")), "Lines")), "add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["city"])), "asstring"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "Edit2_MF54Change", async function Edit2_MF54Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "Edit2_MF54")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "Edit2_MF54")), "Color")), (await $.v(C, "clred")))))))) {
    { const $t123 = await $.iset((await $.mv((await $.v(C, "Memo1_mf54")), "Lines")), [0], ""); if ($t123 !== undefined) { await $.mset((await $.v(C, "Memo1_mf54")), "Lines", $t123); } }
    { const $t124 = await $.iset((await $.mv((await $.v(C, "Memo1_mf54")), "Lines")), [1], ""); if ($t124 !== undefined) { await $.mset((await $.v(C, "Memo1_mf54")), "Lines", $t124); } }
  } else {
    await $.mcall((await $.v(C, "Memo1_MF54")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo1_MF54")), "Lines")), "add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["name"])), "asstring"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo1_MF54")), "Lines")), "add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["city"])), "asstring"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "Edit2_MF55Change", async function Edit2_MF55Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "Edit2_MF55")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "Edit2_MF55")), "Color")), (await $.v(C, "clred")))))))) {
    { const $t125 = await $.iset((await $.mv((await $.v(C, "Memo1_mf55")), "Lines")), [0], ""); if ($t125 !== undefined) { await $.mset((await $.v(C, "Memo1_mf55")), "Lines", $t125); } }
    { const $t126 = await $.iset((await $.mv((await $.v(C, "Memo1_mf55")), "Lines")), [1], ""); if ($t126 !== undefined) { await $.mset((await $.v(C, "Memo1_mf55")), "Lines", $t126); } }
  } else {
    await $.mcall((await $.v(C, "Memo1_MF55")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo1_MF55")), "Lines")), "add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["name"])), "asstring"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo1_MF55")), "Lines")), "add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["city"])), "asstring"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "Edit2_MF56Change", async function Edit2_MF56Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "Edit2_MF56")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "Edit2_MF56")), "Color")), (await $.v(C, "clred")))))))) {
    { const $t127 = await $.iset((await $.mv((await $.v(C, "Memo1_mf56")), "Lines")), [0], ""); if ($t127 !== undefined) { await $.mset((await $.v(C, "Memo1_mf56")), "Lines", $t127); } }
    { const $t128 = await $.iset((await $.mv((await $.v(C, "Memo1_mf56")), "Lines")), [1], ""); if ($t128 !== undefined) { await $.mset((await $.v(C, "Memo1_mf56")), "Lines", $t128); } }
  } else {
    await $.mcall((await $.v(C, "Memo1_MF56")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo1_MF56")), "Lines")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["name"])), "asstring"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo1_MF56")), "Lines")), "add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["city"])), "asstring"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "Edit3_MF59Change", async function Edit3_MF59Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "Edit3_MF59")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "Edit3_MF59")), "Color")), (await $.v(C, "clred")))))))) {
    await $.mcall((await $.v(C, "Memo1_mf59")), "Clear", []);
  } else {
    await $.mcall((await $.v(C, "Memo1_MF59")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo1_MF59")), "Lines")), "add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["name"])), "asstring"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo1_MF59")), "Lines")), "add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["city"])), "asstring"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "mf32a_valChange", async function mf32a_valChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "CORR")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "CORR")), "SetVariable", ["v", (await $.mv((await $.v(C, "mf32a_val")), "text"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "CORR")), "SetVariable", ["b", (await $.mv((await $.v(C, "reciverbic")), "text"))])));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "CORR")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "OF70_RichEditChange", async function OF70_RichEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "GetRichEditLine", [(await $.v(C, "OF70_RichEdit"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "OF70_RichEditKeyDown", async function OF70_RichEditKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.and_(($.gt((await $.call(C, "length", [(await $.call(C, "trim", [(await $.mv((L0["sender"]), "Text"))]))])), 147)), async () => $.not(($.in_((await L0["key"].get()), [(await $.v(C, "vk_delete")), (await $.v(C, "vk_back"))]))))))) {
    await L0["key"].set(0);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TOUT_FORM", "OF70_RichEditKeyPress", async function OF70_RichEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOUT_FORM", "OF72_RichEditChange", async function OF72_RichEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "GetRichEditLine2", [(await $.v(C, "OF72_RichEdit"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "OF72_RichEditKeyDown", async function OF72_RichEditKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined, "r": 0};
  await $.fixArgs(L0, ["sender", "shift"]);
  await $.stmt((await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "OF72_RichEdit")), "Handle")), (await $.v(C, "EM_GETSEL")), (await $.call(C, "Longint", [L0["r"]])), 0])));
  if ($.truthy((await $.and_(($.in_(L0["r"], [...$.range(0,4)])), async () => ($.in_((await L0["key"].get()), [(await $.v(C, "vk_delete"))])))))) {
    await L0["key"].set(0);
  }
  if ($.truthy((await $.and_(($.in_(L0["r"], [...$.range(1,5)])), async () => ($.in_((await L0["key"].get()), [(await $.v(C, "vk_back"))])))))) {
    await L0["key"].set(0);
  }
  if ($.truthy((await $.and_(($.in_(L0["r"], [35, 72, 109, 146, 183])), async () => ($.in_((await L0["key"].get()), [(await $.v(C, "vk_delete"))])))))) {
    await L0["key"].set(0);
  }
  if ($.truthy((await $.and_(($.in_(L0["r"], [...$.range(36,38), ...$.range(73,75), ...$.range(110,112), ...$.range(147,149), ...$.range(184,186)])), async () => ($.in_((await L0["key"].get()), [(await $.v(C, "vk_delete")), (await $.v(C, "vk_back"))])))))) {
    await L0["key"].set(0);
  }
  if ($.truthy((await $.and_(($.in_(L0["r"], [39, 76, 113, 150, 187])), async () => ($.in_((await L0["key"].get()), [(await $.v(C, "vk_back"))])))))) {
    await L0["key"].set(0);
  }
  if ($.truthy($.eq((await $.call(C, "length", [(await $.call(C, "trim", [(await $.mv((L0["sender"]), "Text"))]))])), 0))) {
    await $.set(C, "isEmpty", true);
  } else {
    await $.set(C, "isEmpty", false);
  }
  if ($.truthy((await $.and_(($.gt((await $.call(C, "length", [(await $.call(C, "trim", [(await $.mv((L0["sender"]), "Text"))]))])), 216)), async () => $.not(($.in_((await L0["key"].get()), [(await $.v(C, "vk_delete")), (await $.v(C, "vk_back"))]))))))) {
    await L0["key"].set(0);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TOUT_FORM", "OF72_RichEditKeyPress", async function OF72_RichEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "r": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await L0["key"].set("\u0000");
  }
  await $.stmt((await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "OF72_RichEdit")), "Handle")), (await $.v(C, "EM_GETSEL")), (await $.call(C, "Longint", [L0["r"]])), 0])));
  if ($.truthy(($.in_(L0["r"], [...$.range(1,5)])))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy((await $.and_(($.in_(L0["r"], [...$.range(35,38), ...$.range(72,75), ...$.range(109,112), ...$.range(146,149), ...$.range(183,186)])), async () => ((await $.or_(($.eq((await $.idx((await $.mv((await $.v(C, "OF72_RichEdit")), "Text")), [$.sub(L0["r"], 1)])), "/")), async () => ($.eq((await $.idx((await $.mv((await $.v(C, "OF72_RichEdit")), "Text")), [$.add(L0["r"], 1)])), "/"))))))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOUT_FORM", "CBox_MF71AChange", async function CBox_MF71AChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit1_MF71A")), "Text", (await $.mv((await $.v(C, "CBox_MF71A")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "TabSheet1Show", async function TabSheet1Show(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "FINCOPY")), "Text")), "AZN"))) {
    await $.mset((await $.v(C, "CBox_MF71A")), "Enabled", false);
    await $.mset((await $.v(C, "CBox_MF71A")), "ItemIndex", 0);
  } else {
    await $.mset((await $.v(C, "CBox_MF71A")), "Enabled", true);
    await $.mset((await $.v(C, "CBox_MF71A")), "ItemIndex", 0);
  }
  await $.mset((await $.v(C, "MainPanel")), "AutoSize", false);
  await $.mset((await $.v(C, "MainPanel")), "AutoSize", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "Edit1_MF50Change", async function Edit1_MF50Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.or_(($.eq((await $.mv((L0["sender"]), "Text")), "")), async () => ($.eq((await $.mv((L0["sender"]), "Color")), (await $.v(C, "clred")))))))))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "FINCOPY")), "Text")), "AZN"))) {
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "DS_AccsForComission")), "Close", []);
    } else {
      {
        const $t129 = (await $.mv((await $.v(C, "SWDataModule")), "DS_AccsForComission"));
        await $.stmt($.wcall([$t129], "close", [], C));
        await $.stmt((await $.wcall([$t129], "setVariable", ["v_acc_no", (await $.mv(((await $.wv([$t129], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Text"))], C)));
        await $.stmt($.wcall([$t129], "Open", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "Edit1_MF50Exit", async function Edit1_MF50Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.mv((L0["sender"]), "Color")), (await $.v(C, "clred")))))) {
    await $.mcall(L0["sender"], "Clear", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "Edit3_MF50Exit", async function Edit3_MF50Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.mv((L0["sender"]), "Color")), (await $.v(C, "clred")))))) {
    await $.mcall(L0["sender"], "Clear", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "Edit4_MF50Exit", async function Edit4_MF50Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.mv((L0["sender"]), "Color")), (await $.v(C, "clred")))))) {
    await $.mcall(L0["sender"], "Clear", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "Edit7Enter", async function Edit7Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t130 = (await $.mv((await $.v(C, "SWDataModule")), "DS_AccsForComission"));
    await $.stmt($.wcall([$t130], "close", [], C));
    await $.stmt((await $.wcall([$t130], "setVariable", ["v_acc_no", (await $.mv((await $.wv([$t130], "edit7", C, false)), "Text"))], C)));
    await $.stmt($.wcall([$t130], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOUT_FORM", "rKeyPress", async function rKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b", "."]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
