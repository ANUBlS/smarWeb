// Generated from editmt103.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("editmt103", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "StdCtrls", "DBCtrls", "DBViewComboBox", "ComCtrls", "ExtCtrls", "SearchEdit", "Mask", "ActnList", "Menus", "Db", "OracleData", "Unit2", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TMT103", "TForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "header": {"name": "Header", "type": "TTabSheet"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "label40": {"name": "Label40", "type": "TLabel"}, "label41": {"name": "Label41", "type": "TLabel"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "scrollbox1": {"name": "ScrollBox1", "type": "TScrollBox"}, "mainpanel": {"name": "MainPanel", "type": "TPanel"}, "mf20": {"name": "MF20", "type": "TPanel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "mf20_edit": {"name": "MF20_edit", "type": "TDBEdit"}, "mf23b": {"name": "MF23B", "type": "TPanel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "mf23b_edit": {"name": "MF23b_edit", "type": "TDBEdit"}, "mf26t": {"name": "MF26T", "type": "TPanel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "mf32a": {"name": "MF32A", "type": "TPanel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "mf32_date": {"name": "mf32_date", "type": "TDateTimePicker"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "mf32a_val": {"name": "mf32a_val", "type": "TDBViewComboBox"}, "edit11_mf32a": {"name": "edit11_mf32a", "type": "TDBEdit"}, "mf33b": {"name": "MF33B", "type": "TPanel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "mf36": {"name": "MF36", "type": "TPanel"}, "label39": {"name": "Label39", "type": "TLabel"}, "mf50": {"name": "MF50", "type": "TPanel"}, "mf50_main": {"name": "MF50_main", "type": "TPanel"}, "label20": {"name": "Label20", "type": "TLabel"}, "cmf50": {"name": "CMF50", "type": "TComboBox"}, "mf50k": {"name": "MF50K", "type": "TPanel"}, "edit3_mf50": {"name": "Edit3_MF50", "type": "TSearchEdit"}, "mf50a": {"name": "MF50A", "type": "TPanel"}, "edit1_mf50": {"name": "Edit1_MF50", "type": "TSearchEdit"}, "mf50f": {"name": "MF50F", "type": "TPanel"}, "edit4_mf50": {"name": "Edit4_MF50", "type": "TSearchEdit"}, "mf52": {"name": "MF52", "type": "TPanel"}, "mf52_main": {"name": "MF52_main", "type": "TPanel"}, "label21": {"name": "Label21", "type": "TLabel"}, "cmf52": {"name": "CMF52", "type": "TComboBox"}, "mf52a": {"name": "MF52A", "type": "TPanel"}, "mf52d": {"name": "MF52D", "type": "TPanel"}, "mf53": {"name": "MF53", "type": "TPanel"}, "mf53_main": {"name": "MF53_main", "type": "TPanel"}, "label22": {"name": "Label22", "type": "TLabel"}, "cmf53": {"name": "CMF53", "type": "TComboBox"}, "mf53a": {"name": "MF53A", "type": "TPanel"}, "edit2_mf53": {"name": "Edit2_MF53", "type": "TEdit"}, "mf53b": {"name": "MF53B", "type": "TPanel"}, "mf53d": {"name": "MF53D", "type": "TPanel"}, "mf54": {"name": "MF54", "type": "TPanel"}, "mf54_main": {"name": "MF54_main", "type": "TPanel"}, "label23": {"name": "Label23", "type": "TLabel"}, "cmf54": {"name": "CMF54", "type": "TComboBox"}, "mf54a": {"name": "MF54A", "type": "TPanel"}, "mf54b": {"name": "MF54B", "type": "TPanel"}, "mf54d": {"name": "MF54D", "type": "TPanel"}, "mf55": {"name": "MF55", "type": "TPanel"}, "mf55_main": {"name": "MF55_main", "type": "TPanel"}, "label24": {"name": "Label24", "type": "TLabel"}, "cmf55": {"name": "CMF55", "type": "TComboBox"}, "mf55a": {"name": "MF55A", "type": "TPanel"}, "mf55b": {"name": "MF55B", "type": "TPanel"}, "mf55d": {"name": "MF55D", "type": "TPanel"}, "mf56": {"name": "MF56", "type": "TPanel"}, "mf56_main": {"name": "MF56_main", "type": "TPanel"}, "label25": {"name": "Label25", "type": "TLabel"}, "cmf56": {"name": "CMF56", "type": "TComboBox"}, "mf56a": {"name": "MF56A", "type": "TPanel"}, "mf56c": {"name": "MF56C", "type": "TPanel"}, "mf56d": {"name": "MF56D", "type": "TPanel"}, "mf57": {"name": "MF57", "type": "TPanel"}, "mf57_main": {"name": "MF57_main", "type": "TPanel"}, "label26": {"name": "Label26", "type": "TLabel"}, "cmf57": {"name": "CMF57", "type": "TComboBox"}, "mf57a": {"name": "MF57A", "type": "TPanel"}, "mf57b": {"name": "MF57B", "type": "TPanel"}, "mf57c": {"name": "MF57C", "type": "TPanel"}, "mf57d": {"name": "MF57D", "type": "TPanel"}, "mf70": {"name": "MF70", "type": "TPanel"}, "label27": {"name": "Label27", "type": "TLabel"}, "mf71a": {"name": "MF71A", "type": "TPanel"}, "label28": {"name": "Label28", "type": "TLabel"}, "label29": {"name": "Label29", "type": "TLabel"}, "edit1_mf71a": {"name": "Edit1_MF71A", "type": "TEdit"}, "mf71g": {"name": "MF71G", "type": "TPanel"}, "label38": {"name": "Label38", "type": "TLabel"}, "edit1_mf71g": {"name": "Edit1_MF71G", "type": "TEdit"}, "edit2_mf71g": {"name": "Edit2_MF71G", "type": "TEdit"}, "mf72": {"name": "MF72", "type": "TPanel"}, "label34": {"name": "Label34", "type": "TLabel"}, "label37": {"name": "Label37", "type": "TLabel"}, "mf77b": {"name": "MF77B", "type": "TPanel"}, "label35": {"name": "Label35", "type": "TLabel"}, "label36": {"name": "Label36", "type": "TLabel"}, "mf26t_edit": {"name": "MF26T_edit", "type": "TDBEdit"}, "mf33_edit": {"name": "MF33_edit", "type": "TDBEdit"}, "mf33_edit2": {"name": "mf33_edit2", "type": "TDBEdit"}, "dbedit_m36": {"name": "DBEdit_M36", "type": "TDBEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "fincopy": {"name": "fincopy", "type": "TDBEdit"}, "fin": {"name": "FIN", "type": "TDBEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "reciverbic": {"name": "reciverbic", "type": "TSearchEdit"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "sendertype": {"name": "sendertype", "type": "TComboBox"}, "combobox2": {"name": "ComboBox2", "type": "TComboBox"}, "senderlt": {"name": "senderlt", "type": "TComboBox"}, "application": {"name": "Application", "type": "TComboBox"}, "priority": {"name": "priority", "type": "TComboBox"}, "monitoring": {"name": "monitoring", "type": "TComboBox"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "recivertype": {"name": "recivertype", "type": "TComboBox"}, "edit2_mf50": {"name": "Edit2_MF50", "type": "TSearchEdit"}, "edit2_mf52": {"name": "Edit2_MF52", "type": "TSearchEdit"}, "edit2_mf54": {"name": "Edit2_MF54", "type": "TSearchEdit"}, "edit2_mf55": {"name": "Edit2_MF55", "type": "TSearchEdit"}, "edit2_mf56": {"name": "Edit2_MF56", "type": "TSearchEdit"}, "edit2_mf57": {"name": "Edit2_MF57", "type": "TSearchEdit"}, "cbox_mf71a": {"name": "CBox_MF71A", "type": "TComboBox"}, "of72_richedit": {"name": "OF72_RichEdit", "type": "TRichEdit"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "creatmessage": {"name": "CreatMessage", "type": "TAction"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "mtcreate": {"name": "MtCreate", "type": "TMenuItem"}, "dbedit3_mf53": {"name": "DBEdit3_MF53", "type": "TDBEdit"}, "memo2": {"name": "Memo2", "type": "TMemo"}, "mf59_59a": {"name": "MF59_59A", "type": "TPanel"}, "mf59_main": {"name": "MF59_main", "type": "TPanel"}, "label33": {"name": "Label33", "type": "TLabel"}, "cmf59": {"name": "CMF59", "type": "TComboBox"}, "mf59": {"name": "MF59", "type": "TPanel"}, "dbedit59_account": {"name": "DBEdit59_account", "type": "TDBEdit"}, "dbmemo59_nameadress": {"name": "DBMemo59_nameadress", "type": "TDBMemo"}, "mf59a": {"name": "MF59A", "type": "TPanel"}, "dbedit59a_account": {"name": "DBEdit59A_account", "type": "TDBEdit"}, "of70_richedit": {"name": "OF70_RichEdit", "type": "TRichEdit"}, "dbmemo59a_nameadress": {"name": "DBMemo59A_nameadress", "type": "TDBMemo"}, "edit59a_bic": {"name": "Edit59A_bic", "type": "TSearchEdit"}, "dbmemo1_mf50": {"name": "DBMemo1_MF50", "type": "TDBMemo"}, "dbmemo2_mf50": {"name": "DBMemo2_MF50", "type": "TDBMemo"}, "dbmemo3_mf50": {"name": "DBMemo3_MF50", "type": "TDBMemo"}, "dbmemo1_mf52": {"name": "DBMemo1_MF52", "type": "TDBMemo"}, "dbmemo2_mf52": {"name": "DBMemo2_MF52", "type": "TDBMemo"}, "dbedit1_mf52": {"name": "DBEdit1_MF52", "type": "TDBEdit"}, "dbedit3_mf52": {"name": "DBEdit3_MF52", "type": "TDBEdit"}, "dbedit1_mf53": {"name": "DBEdit1_MF53", "type": "TDBEdit"}, "dbmemo1_mf53": {"name": "DBMemo1_MF53", "type": "TDBMemo"}, "dbedit4_mf53": {"name": "DBEdit4_MF53", "type": "TDBEdit"}, "dbedit5_mf53": {"name": "DBEdit5_MF53", "type": "TDBEdit"}, "dbmemo2_mf53": {"name": "DBMemo2_MF53", "type": "TDBMemo"}, "dbedit1_mf54": {"name": "DBEdit1_MF54", "type": "TDBEdit"}, "dbmemo1_mf54": {"name": "DBMemo1_MF54", "type": "TDBMemo"}, "dbedit4_mf54": {"name": "DBEdit4_MF54", "type": "TDBEdit"}, "dbedit5_mf54": {"name": "DBEdit5_MF54", "type": "TDBEdit"}, "dbedit6_mf54": {"name": "DBEdit6_MF54", "type": "TDBEdit"}, "dbmemo2_mf54": {"name": "DBMemo2_MF54", "type": "TDBMemo"}, "dbedit1_mf55": {"name": "DBEdit1_MF55", "type": "TDBEdit"}, "dbmemo1_mf55": {"name": "DBMemo1_MF55", "type": "TDBMemo"}, "dbedit3_mf55": {"name": "DBEdit3_MF55", "type": "TDBEdit"}, "dbedit4_mf55": {"name": "DBEdit4_MF55", "type": "TDBEdit"}, "dbedit5_mf55": {"name": "DBEdit5_MF55", "type": "TDBEdit"}, "dbmemo2_mf55": {"name": "DBMemo2_MF55", "type": "TDBMemo"}, "dbedit1_mf56": {"name": "DBEdit1_MF56", "type": "TDBEdit"}, "dbmemo1_mf56": {"name": "DBMemo1_MF56", "type": "TDBMemo"}, "dbedit3_mf56": {"name": "DBEdit3_MF56", "type": "TDBEdit"}, "dbedit4_mf56": {"name": "DBEdit4_MF56", "type": "TDBEdit"}, "dbmemo2_mf56": {"name": "DBMemo2_MF56", "type": "TDBMemo"}, "dbedit1_mf57": {"name": "DBEdit1_MF57", "type": "TDBEdit"}, "dbmemo1_mf57": {"name": "DBMemo1_MF57", "type": "TDBMemo"}, "dbedit3_mf57": {"name": "DBEdit3_MF57", "type": "TDBEdit"}, "dbedit4_mf57": {"name": "DBEdit4_MF57", "type": "TDBEdit"}, "dbedit5_mf57": {"name": "DBEdit5_MF57", "type": "TDBEdit"}, "dbedit6_mf57": {"name": "DBEdit6_MF57", "type": "TDBEdit"}, "dbmemo2_mf57": {"name": "DBMemo2_MF57", "type": "TDBMemo"}, "dbmf77_memo": {"name": "DBMF77_memo", "type": "TDBMemo"}, "comissionaccs_panel": {"name": "ComissionAccs_Panel", "type": "TPanel"}, "comissionaccs_label": {"name": "ComissionAccs_Label", "type": "TLabel"}, "comissionaccs": {"name": "ComissionAccs", "type": "TDBLookupComboBox"}}, {});
  U.init(async () => {
    U.var_("MT103", null, "TMT103");
    U.var_("isEmpty", false, "Boolean");
    U.var_("CanClose", false, "Boolean");
    U.var_("temp_text", '', "String");
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
  U.method("TMT103", "CMF50Change", async function CMF50Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t28 = (await $.mv((await $.v(C, "CMF50")), "ItemIndex"));
    if ($.eq($t28, 0)) {
      await $.mset((await $.v(C, "MF50A")), "Visible", false);
      await $.mset((await $.v(C, "MF50F")), "Visible", false);
      await $.mset((await $.v(C, "MF50K")), "Visible", false);
    }
    else if ($.eq($t28, 1)) {
      await $.mset((await $.v(C, "MF50A")), "Visible", true);
      await $.mset((await $.v(C, "MF50F")), "Visible", false);
      await $.mset((await $.v(C, "MF50K")), "Visible", false);
    }
    else if ($.eq($t28, 2)) {
      await $.mset((await $.v(C, "MF50A")), "Visible", false);
      await $.mset((await $.v(C, "MF50F")), "Visible", true);
      await $.mset((await $.v(C, "MF50K")), "Visible", false);
    }
    else if ($.eq($t28, 3)) {
      await $.mset((await $.v(C, "MF50A")), "Visible", false);
      await $.mset((await $.v(C, "MF50F")), "Visible", false);
      await $.mset((await $.v(C, "MF50K")), "Visible", true);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103", "CMF52Change", async function CMF52Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t29 = (await $.mv((await $.v(C, "CMF52")), "ItemIndex"));
    if ($.eq($t29, 0)) {
      await $.mset((await $.v(C, "MF52A")), "Visible", false);
      await $.mset((await $.v(C, "MF52D")), "Visible", false);
    }
    else if ($.eq($t29, 1)) {
      await $.mset((await $.v(C, "MF52A")), "Visible", true);
      await $.mset((await $.v(C, "MF52D")), "Visible", false);
    }
    else if ($.eq($t29, 2)) {
      await $.mset((await $.v(C, "MF52A")), "Visible", false);
      await $.mset((await $.v(C, "MF52D")), "Visible", true);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103", "CMF53Change", async function CMF53Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t30 = (await $.mv((await $.v(C, "CMF53")), "ItemIndex"));
    if ($.eq($t30, 0)) {
      await $.mset((await $.v(C, "MF53A")), "Visible", false);
      await $.mset((await $.v(C, "MF53B")), "Visible", false);
      await $.mset((await $.v(C, "MF53D")), "Visible", false);
    }
    else if ($.eq($t30, 1)) {
      await $.mset((await $.v(C, "MF53A")), "Visible", true);
      await $.mset((await $.v(C, "MF53B")), "Visible", false);
      await $.mset((await $.v(C, "MF53D")), "Visible", false);
    }
    else if ($.eq($t30, 2)) {
      await $.mset((await $.v(C, "MF53A")), "Visible", false);
      await $.mset((await $.v(C, "MF53B")), "Visible", true);
      await $.mset((await $.v(C, "MF53D")), "Visible", false);
    }
    else if ($.eq($t30, 3)) {
      await $.mset((await $.v(C, "MF53A")), "Visible", false);
      await $.mset((await $.v(C, "MF53B")), "Visible", false);
      await $.mset((await $.v(C, "MF53D")), "Visible", true);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103", "CMF54Change", async function CMF54Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t31 = (await $.mv((await $.v(C, "CMF54")), "ItemIndex"));
    if ($.eq($t31, 0)) {
      await $.mset((await $.v(C, "MF54A")), "Visible", false);
      await $.mset((await $.v(C, "MF54B")), "Visible", false);
      await $.mset((await $.v(C, "MF54D")), "Visible", false);
    }
    else if ($.eq($t31, 1)) {
      await $.mset((await $.v(C, "MF54A")), "Visible", true);
      await $.mset((await $.v(C, "MF54B")), "Visible", false);
      await $.mset((await $.v(C, "MF54D")), "Visible", false);
    }
    else if ($.eq($t31, 2)) {
      await $.mset((await $.v(C, "MF54A")), "Visible", false);
      await $.mset((await $.v(C, "MF54B")), "Visible", true);
      await $.mset((await $.v(C, "MF54D")), "Visible", false);
    }
    else if ($.eq($t31, 3)) {
      await $.mset((await $.v(C, "MF54A")), "Visible", false);
      await $.mset((await $.v(C, "MF54B")), "Visible", false);
      await $.mset((await $.v(C, "MF54D")), "Visible", true);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103", "CMF55Change", async function CMF55Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t32 = (await $.mv((await $.v(C, "CMF55")), "ItemIndex"));
    if ($.eq($t32, 0)) {
      await $.mset((await $.v(C, "MF55A")), "Visible", false);
      await $.mset((await $.v(C, "MF55B")), "Visible", false);
      await $.mset((await $.v(C, "MF55D")), "Visible", false);
    }
    else if ($.eq($t32, 1)) {
      await $.mset((await $.v(C, "MF55A")), "Visible", true);
      await $.mset((await $.v(C, "MF55B")), "Visible", false);
      await $.mset((await $.v(C, "MF55D")), "Visible", false);
    }
    else if ($.eq($t32, 2)) {
      await $.mset((await $.v(C, "MF55A")), "Visible", false);
      await $.mset((await $.v(C, "MF55B")), "Visible", true);
      await $.mset((await $.v(C, "MF55D")), "Visible", false);
    }
    else if ($.eq($t32, 3)) {
      await $.mset((await $.v(C, "MF55A")), "Visible", false);
      await $.mset((await $.v(C, "MF55B")), "Visible", false);
      await $.mset((await $.v(C, "MF55D")), "Visible", true);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103", "CMF56Change", async function CMF56Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t33 = (await $.mv((await $.v(C, "CMF56")), "ItemIndex"));
    if ($.eq($t33, 0)) {
      await $.mset((await $.v(C, "MF56A")), "Visible", false);
      await $.mset((await $.v(C, "MF56C")), "Visible", false);
      await $.mset((await $.v(C, "MF56D")), "Visible", false);
    }
    else if ($.eq($t33, 1)) {
      await $.mset((await $.v(C, "MF56A")), "Visible", true);
      await $.mset((await $.v(C, "MF56C")), "Visible", false);
      await $.mset((await $.v(C, "MF56D")), "Visible", false);
    }
    else if ($.eq($t33, 2)) {
      await $.mset((await $.v(C, "MF56A")), "Visible", false);
      await $.mset((await $.v(C, "MF56C")), "Visible", true);
      await $.mset((await $.v(C, "MF56D")), "Visible", false);
    }
    else if ($.eq($t33, 3)) {
      await $.mset((await $.v(C, "MF56A")), "Visible", false);
      await $.mset((await $.v(C, "MF56C")), "Visible", false);
      await $.mset((await $.v(C, "MF56D")), "Visible", true);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103", "CMF57Change", async function CMF57Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t34 = (await $.mv((await $.v(C, "CMF57")), "ItemIndex"));
    if ($.eq($t34, 0)) {
      await $.mset((await $.v(C, "MF57A")), "Visible", false);
      await $.mset((await $.v(C, "MF57B")), "Visible", false);
      await $.mset((await $.v(C, "MF57C")), "Visible", false);
      await $.mset((await $.v(C, "MF57D")), "Visible", false);
    }
    else if ($.eq($t34, 1)) {
      await $.mset((await $.v(C, "MF57A")), "Visible", true);
      await $.mset((await $.v(C, "MF57B")), "Visible", false);
      await $.mset((await $.v(C, "MF57C")), "Visible", false);
      await $.mset((await $.v(C, "MF57D")), "Visible", false);
    }
    else if ($.eq($t34, 2)) {
      await $.mset((await $.v(C, "MF57A")), "Visible", false);
      await $.mset((await $.v(C, "MF57B")), "Visible", true);
      await $.mset((await $.v(C, "MF57C")), "Visible", false);
      await $.mset((await $.v(C, "MF57D")), "Visible", false);
    }
    else if ($.eq($t34, 3)) {
      await $.mset((await $.v(C, "MF57A")), "Visible", false);
      await $.mset((await $.v(C, "MF57B")), "Visible", false);
      await $.mset((await $.v(C, "MF57C")), "Visible", true);
      await $.mset((await $.v(C, "MF57D")), "Visible", false);
    }
    else if ($.eq($t34, 4)) {
      await $.mset((await $.v(C, "MF57A")), "Visible", false);
      await $.mset((await $.v(C, "MF57B")), "Visible", false);
      await $.mset((await $.v(C, "MF57C")), "Visible", false);
      await $.mset((await $.v(C, "MF57D")), "Visible", true);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103", "CMF59Change", async function CMF59Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CMF59")), "ItemIndex")), 0))) {
    await $.mset((await $.v(C, "MF59")), "Visible", false);
    await $.mset((await $.v(C, "MF59A")), "Visible", false);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CMF59")), "ItemIndex")), 1))) {
    await $.mset((await $.v(C, "MF59")), "Visible", true);
    await $.mset((await $.v(C, "MF59A")), "Visible", false);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CMF59")), "ItemIndex")), 2))) {
    await $.mset((await $.v(C, "MF59")), "Visible", false);
    await $.mset((await $.v(C, "MF59A")), "Visible", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
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
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "Edit", []);
  await $.mset((await $.v(C, "reciverbic")), "Text", (await $.mv((await $.v(C, "DBEdit1")), "Text")));
  await $.mset((await $.v(C, "Edit3_MF50")), "Text", (await $.mv((await $.v(C, "DBEdit_M36")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103", "open_edit_form", async function open_edit_form(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "v_mf71g": ''};
  await $.mset((await $.v(C, "mf32_date")), "Date", (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF32A_DATE")), "asDateTime")));
  await $.mset((await $.v(C, "mf32a_val")), "Text", (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF32A_CURR")), "asString")));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outM50")), "AsString")), ":50A:"))) {
    await $.mset((await $.v(C, "CMF50")), "ItemIndex", 1);
    await $.mset((await $.v(C, "MF50A")), "Visible", true);
    await $.mset((await $.v(C, "MF50F")), "Visible", false);
    await $.mset((await $.v(C, "MF50K")), "Visible", false);
    await $.mset((await $.v(C, "Edit1_MF50")), "Text", (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF50_ACCOUNT")), "asString")));
    await $.mset((await $.v(C, "Edit2_MF50")), "Text", (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF50_BIC")), "asString")));
    await $.mset((await $.v(C, "DBMemo1_MF50")), "TEXT", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "FieldByName", ["MF50_NAME$ADRESS"])), "asString")));
  } else {
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outM50")), "AsString")), ":50F:"))) {
      await $.mset((await $.v(C, "CMF50")), "ItemIndex", 2);
      await $.mset((await $.v(C, "MF50A")), "Visible", false);
      await $.mset((await $.v(C, "MF50F")), "Visible", true);
      await $.mset((await $.v(C, "MF50K")), "Visible", false);
      await $.mset((await $.v(C, "Edit4_MF50")), "Text", (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF50_ACCOUNT")), "asString")));
    } else {
      if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outM50")), "AsString")), ":50K:"))) {
        await $.mset((await $.v(C, "CMF50")), "ItemIndex", 3);
        await $.mset((await $.v(C, "MF50A")), "Visible", false);
        await $.mset((await $.v(C, "MF50F")), "Visible", false);
        await $.mset((await $.v(C, "MF50K")), "Visible", true);
        await $.mset((await $.v(C, "Edit3_MF50")), "Text", (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF50_ACCOUNT")), "asString")));
      } else {
        await $.mset((await $.v(C, "CMF50")), "ItemIndex", 0);
        await $.mset((await $.v(C, "MF50A")), "Visible", false);
        await $.mset((await $.v(C, "MF50F")), "Visible", false);
        await $.mset((await $.v(C, "MF50K")), "Visible", false);
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outM52")), "AsString")), ":52A:"))) {
    await $.mset((await $.v(C, "CMF52")), "ItemIndex", 1);
    await $.mset((await $.v(C, "MF52A")), "Visible", true);
    await $.mset((await $.v(C, "MF52D")), "Visible", false);
    await $.mset((await $.v(C, "Edit2_MF52")), "Text", (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF52_BIC")), "asString")));
  } else {
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outM52")), "AsString")), ":52D:"))) {
      await $.mset((await $.v(C, "CMF52")), "ItemIndex", 2);
      await $.mset((await $.v(C, "MF52A")), "Visible", false);
      await $.mset((await $.v(C, "MF52D")), "Visible", true);
    } else {
      await $.mset((await $.v(C, "CMF52")), "ItemIndex", 0);
      await $.mset((await $.v(C, "MF52A")), "Visible", false);
      await $.mset((await $.v(C, "MF52D")), "Visible", false);
    }
  }
  await $.mset((await $.v(C, "CMF53")), "ItemIndex", 2);
  await $.mset((await $.v(C, "CMF53")), "Enabled", false);
  await $.mset((await $.v(C, "MF53A")), "Visible", false);
  await $.mset((await $.v(C, "MF53B")), "Visible", true);
  await $.mset((await $.v(C, "MF53D")), "Visible", false);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "CORR")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "CORR")), "SetVariable", ["v", (await $.mv((await $.v(C, "mf32a_val")), "text"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "CORR")), "SetVariable", ["b", (await $.mv((await $.v(C, "reciverbic")), "text"))])));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "CORR")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outM54")), "AsString")), ":54A:"))) {
    await $.mset((await $.v(C, "CMF54")), "ItemIndex", 1);
    await $.mset((await $.v(C, "MF54A")), "Visible", true);
    await $.mset((await $.v(C, "MF54B")), "Visible", false);
    await $.mset((await $.v(C, "MF54D")), "Visible", false);
    await $.mset((await $.v(C, "Edit2_MF54")), "Text", (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF54_BIC")), "asString")));
  } else {
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outM54")), "AsString")), ":54B:"))) {
      await $.mset((await $.v(C, "CMF54")), "ItemIndex", 2);
      await $.mset((await $.v(C, "MF54A")), "Visible", false);
      await $.mset((await $.v(C, "MF54B")), "Visible", true);
      await $.mset((await $.v(C, "MF54D")), "Visible", false);
    } else {
      if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outM54")), "AsString")), ":54D:"))) {
        await $.mset((await $.v(C, "CMF54")), "ItemIndex", 3);
        await $.mset((await $.v(C, "MF54A")), "Visible", false);
        await $.mset((await $.v(C, "MF54B")), "Visible", false);
        await $.mset((await $.v(C, "MF54D")), "Visible", true);
      } else {
        await $.mset((await $.v(C, "CMF54")), "ItemIndex", 0);
        await $.mset((await $.v(C, "MF54A")), "Visible", false);
        await $.mset((await $.v(C, "MF54B")), "Visible", false);
        await $.mset((await $.v(C, "MF54D")), "Visible", false);
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outM55")), "AsString")), ":55A:"))) {
    await $.mset((await $.v(C, "CMF55")), "ItemIndex", 1);
    await $.mset((await $.v(C, "MF55A")), "Visible", true);
    await $.mset((await $.v(C, "MF55B")), "Visible", false);
    await $.mset((await $.v(C, "MF55D")), "Visible", false);
    await $.mset((await $.v(C, "Edit2_MF55")), "Text", (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF55_BIC")), "asString")));
  } else {
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outM55")), "AsString")), ":55B:"))) {
      await $.mset((await $.v(C, "CMF55")), "ItemIndex", 2);
      await $.mset((await $.v(C, "MF55A")), "Visible", false);
      await $.mset((await $.v(C, "MF55B")), "Visible", true);
      await $.mset((await $.v(C, "MF55D")), "Visible", false);
    } else {
      if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outM55")), "AsString")), ":55D:"))) {
        await $.mset((await $.v(C, "CMF55")), "ItemIndex", 3);
        await $.mset((await $.v(C, "MF55A")), "Visible", false);
        await $.mset((await $.v(C, "MF55B")), "Visible", false);
        await $.mset((await $.v(C, "MF55D")), "Visible", true);
      } else {
        await $.mset((await $.v(C, "CMF55")), "ItemIndex", 0);
        await $.mset((await $.v(C, "MF55A")), "Visible", false);
        await $.mset((await $.v(C, "MF55B")), "Visible", false);
        await $.mset((await $.v(C, "MF55D")), "Visible", false);
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outM56")), "AsString")), ":56A:"))) {
    await $.mset((await $.v(C, "CMF56")), "ItemIndex", 1);
    await $.mset((await $.v(C, "MF56A")), "Visible", true);
    await $.mset((await $.v(C, "MF56C")), "Visible", false);
    await $.mset((await $.v(C, "MF56D")), "Visible", false);
    await $.mset((await $.v(C, "Edit2_MF56")), "Text", (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF56_BIC")), "asString")));
  } else {
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outM56")), "AsString")), ":56C:"))) {
      await $.mset((await $.v(C, "CMF56")), "ItemIndex", 2);
      await $.mset((await $.v(C, "MF56A")), "Visible", false);
      await $.mset((await $.v(C, "MF56C")), "Visible", true);
      await $.mset((await $.v(C, "MF56D")), "Visible", false);
    } else {
      if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outM56")), "AsString")), ":56D:"))) {
        await $.mset((await $.v(C, "CMF56")), "ItemIndex", 3);
        await $.mset((await $.v(C, "MF56A")), "Visible", false);
        await $.mset((await $.v(C, "MF56C")), "Visible", false);
        await $.mset((await $.v(C, "MF56D")), "Visible", true);
      } else {
        await $.mset((await $.v(C, "CMF56")), "ItemIndex", 0);
        await $.mset((await $.v(C, "MF56A")), "Visible", false);
        await $.mset((await $.v(C, "MF56C")), "Visible", false);
        await $.mset((await $.v(C, "MF56D")), "Visible", false);
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outM58")), "AsString")), ":58A:"))) {
    await $.mset((await $.v(C, "CMF57")), "ItemIndex", 1);
    await $.mset((await $.v(C, "MF57A")), "Visible", true);
    await $.mset((await $.v(C, "MF57B")), "Visible", false);
    await $.mset((await $.v(C, "MF57C")), "Visible", false);
    await $.mset((await $.v(C, "MF57D")), "Visible", false);
    await $.mset((await $.v(C, "Edit2_MF57")), "Text", (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF58_BIC")), "asString")));
  } else {
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outM58")), "AsString")), ":58B:"))) {
      await $.mset((await $.v(C, "CMF57")), "ItemIndex", 2);
      await $.mset((await $.v(C, "MF57A")), "Visible", false);
      await $.mset((await $.v(C, "MF57B")), "Visible", true);
      await $.mset((await $.v(C, "MF57C")), "Visible", false);
      await $.mset((await $.v(C, "MF57D")), "Visible", false);
    } else {
      if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outM58")), "AsString")), ":58C:"))) {
        await $.mset((await $.v(C, "CMF57")), "ItemIndex", 3);
        await $.mset((await $.v(C, "MF57A")), "Visible", false);
        await $.mset((await $.v(C, "MF57B")), "Visible", false);
        await $.mset((await $.v(C, "MF57C")), "Visible", true);
        await $.mset((await $.v(C, "MF57D")), "Visible", false);
      } else {
        if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outM58")), "AsString")), ":57D:"))) {
          await $.mset((await $.v(C, "CMF57")), "ItemIndex", 4);
          await $.mset((await $.v(C, "MF57A")), "Visible", false);
          await $.mset((await $.v(C, "MF57B")), "Visible", false);
          await $.mset((await $.v(C, "MF57C")), "Visible", false);
          await $.mset((await $.v(C, "MF57D")), "Visible", true);
        } else {
          await $.mset((await $.v(C, "CMF57")), "ItemIndex", 0);
          await $.mset((await $.v(C, "MF57A")), "Visible", false);
          await $.mset((await $.v(C, "MF57B")), "Visible", false);
          await $.mset((await $.v(C, "MF57C")), "Visible", false);
          await $.mset((await $.v(C, "MF57D")), "Visible", false);
        }
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outM59")), "AsString")), ":59:"))) {
    await $.mset((await $.v(C, "CMF59")), "ItemIndex", 1);
    await $.mset((await $.v(C, "MF59")), "Visible", true);
    await $.mset((await $.v(C, "MF59A")), "Visible", false);
  } else {
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outM59")), "AsString")), ":59A:"))) {
      await $.mset((await $.v(C, "CMF59")), "ItemIndex", 2);
      await $.mset((await $.v(C, "MF59")), "Visible", false);
      await $.mset((await $.v(C, "MF59A")), "Visible", true);
      await $.mset((await $.v(C, "Edit59A_bic")), "Text", (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF59_BIC")), "AsString")));
    } else {
      await $.mset((await $.v(C, "MF59")), "Visible", false);
      await $.mset((await $.v(C, "MF59A")), "Visible", false);
    }
  }
  await $.mset((await $.v(C, "OF70_RichEdit")), "Text", (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF70")), "AsString")));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF71A")), "AsString")), "OUR"))) {
    await $.mset((await $.v(C, "CBox_MF71A")), "ItemIndex", 0);
    await $.mset((await $.v(C, "Edit1_MF71A")), "Text", "OUR");
  } else {
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF71A")), "AsString")), "BEN"))) {
      await $.mset((await $.v(C, "CBox_MF71A")), "ItemIndex", 1);
      await $.mset((await $.v(C, "Edit1_MF71A")), "Text", "BEN");
    } else {
      if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF71A")), "AsString")), "SHA"))) {
        await $.mset((await $.v(C, "CBox_MF71A")), "ItemIndex", 2);
        await $.mset((await $.v(C, "Edit1_MF71A")), "Text", "SHA");
      } else {
        await $.mset((await $.v(C, "CBox_MF71A")), "ItemIndex", (-(1)));
        await $.mset((await $.v(C, "Edit1_MF71A")), "Text", "");
      }
    }
  }
  L0["v_mf71g"] = (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF71G_CHILD")), "AsString"));
  await $.mset((await $.v(C, "Edit1_MF71G")), "Text", (await $.call(C, "copy", [L0["v_mf71g"], 1, $.sub((await $.call(C, "LastDelimiter", ["|", L0["v_mf71g"]])), 1)])));
  await $.mset((await $.v(C, "Edit2_MF71G")), "Text", (await $.call(C, "copy", [L0["v_mf71g"], $.add((await $.call(C, "LastDelimiter", ["|", L0["v_mf71g"]])), 1), $.sub((await $.call(C, "Length", [L0["v_mf71g"]])), (await $.call(C, "LastDelimiter", ["|", L0["v_mf71g"]])))])));
  await $.mset((await $.v(C, "OF72_RichEdit")), "Text", (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF72")), "AsString")));
  {
    const $t35 = (await $.mv((await $.v(C, "SWDataModule")), "DS_AccsForComission"));
    await $.stmt($.wcall([$t35], "close", [], C));
    await $.stmt((await $.wcall([$t35], "setVariable", ["v_acc_no", (await $.mv((await $.mv((await $.wv([$t35], "SWDataModule", C, false)), "sw_outMF50_ACCOUNT")), "asString"))], C)));
    await $.stmt($.wcall([$t35], "Open", [], C));
  }
  await $.mset((await $.v(C, "ComissionAccs")), "KeyValue", (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outCOM_ACCID")), "asInteger")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TMT103", "DBLookupComboBox3Click", async function DBLookupComboBox3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["name"])), "asstring")));
  await $.mset((await $.v(C, "Edit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["city"])), "asstring")));
  await $.mset((await $.v(C, "Edit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["address"])), "asstring")));
  await $.mset((await $.v(C, "Edit5")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["country"])), "asstring")));
  await $.mset((await $.v(C, "reciverbic")), "Text", (await $.mv((await $.v(C, "DBLookupComboBox3")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103", "CBox_MF71AChange", async function CBox_MF71AChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit1_MF71A")), "Text", (await $.mv((await $.v(C, "CBox_MF71A")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103", "OF72_RichEditChange", async function OF72_RichEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "GetRichEditLine2", [(await $.v(C, "OF72_RichEdit"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103", "OF72_RichEditKeyDown", async function OF72_RichEditKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined, "r": 0};
  await $.fixArgs(L0, ["sender", "shift"]);
  await $.stmt((await $.call(C, "SendMessage", [(await $.mv((L0["sender"]), "Handle")), (await $.v(C, "EM_GETSEL")), (await $.call(C, "Longint", [L0["r"]])), 0])));
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
  U.method("TMT103", "OF72_RichEditKeyPress", async function OF72_RichEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "r": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await L0["key"].set("\u0000");
  }
  await $.stmt((await $.call(C, "SendMessage", [(await $.mv((L0["sender"]), "Handle")), (await $.v(C, "EM_GETSEL")), (await $.call(C, "Longint", [L0["r"]])), 0])));
  if ($.truthy(($.in_(L0["r"], [...$.range(1,5)])))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy((await $.and_(($.in_(L0["r"], [...$.range(35,38), ...$.range(72,75), ...$.range(109,112), ...$.range(146,149), ...$.range(183,186)])), async () => ((await $.or_(($.eq((await $.idx((await $.mv((L0["sender"]), "Text")), [$.sub(L0["r"], 1)])), "/")), async () => ($.eq((await $.idx((await $.mv((L0["sender"]), "Text")), [$.add(L0["r"], 1)])), "/"))))))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TMT103", "CreatMessageExecute", async function CreatMessageExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dolmayan": '', "stat1": '', "stat2": '', "stat3": '', "stat4": '', "stat5": '', "stat6": '', "stat7": '', "mf32a_curr": '', "m20": '', "m23b": '', "m26t": '', "m32a": '', "m33": '', "m36": '', "m50": '', "mf50_account": '', "mf50_bic": '', "voen": '', "m52": '', "mf52_bic": '', "mf32a_date": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CanClose", true);
  await $.mcall((await $.v(C, "TabSheet1")), "Show", []);
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
  if ($.truthy($.eq((await $.mv((await $.v(C, "mf32a_val")), "Text")), ""))) {
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
  if ($.truthy($.eq((await $.mv((await $.v(C, "CMF57")), "Text")), ""))) {
    L0["dolmayan"] = $.add(L0["dolmayan"], "  MF57,");
    L0["stat7"] = "exitfromprosedure";
  } else {
    L0["stat7"] = "nextprosedure";
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
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.eq(L0["stat1"], "nextprosedure")), async () => ($.eq(L0["stat2"], "nextprosedure")))), async () => ($.eq(L0["stat3"], "nextprosedure")))), async () => ($.eq(L0["stat4"], "nextprosedure")))), async () => ($.eq(L0["stat5"], "nextprosedure")))), async () => ($.eq(L0["stat6"], "nextprosedure")))), async () => ($.eq(L0["stat7"], "nextprosedure")))))) {
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "referans")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "referans")), "Open", []);
    {
      const $t36 = (await $.mv((await $.v(C, "SWDataModule")), "referans"));
      await $.stmt((await $.wcall([$t36], "SetVariable", ["FORMATS", (await $.mv((await $.wv([$t36], "FIN", C, false)), "text"))], C)));
      await $.stmt((await $.wcall([$t36], "SetVariable", ["CURRENSY", (await $.mv((await $.wv([$t36], "mf32a_val", C, false)), "text"))], C)));
    }
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "referans")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "referans")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "referans")), "Open", []);
    await $.mset((await $.v(C, "MF20_edit")), "text", (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "referansrefe")), "asstring")));
    L0["mf32a_date"] = (await $.mv((await $.v(C, "mf32_date")), "Date"));
    L0["mf32a_curr"] = (await $.mv((await $.v(C, "mf32a_val")), "Text"));
    if ($.truthy($.ne((await $.mv((await $.v(C, "DBEdit_M36")), "Text")), ""))) {
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outSENDERTYPE")), "AsString", (await $.mv((await $.v(C, "sendertype")), "Text")));
    }
    await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outSENDERBIC")), "AsString", (await $.mv((await $.v(C, "senderlt")), "Text")));
    await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outSENDERLT")), "AsString", (await $.mv((await $.v(C, "senderlt")), "Text")));
    await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outAPPLICATION")), "AsString", (await $.mv((await $.v(C, "Application")), "Text")));
    await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outFINCOPY")), "AsString", (await $.mv((await $.v(C, "fincopy")), "Text")));
    await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMESSAGETYPE")), "AsString", (await $.mv((await $.v(C, "fin")), "Text")));
    await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outPRIORITY")), "AsString", (await $.mv((await $.v(C, "priority")), "Text")));
    await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMONITORING")), "AsString", (await $.mv((await $.v(C, "monitoring")), "Text")));
    await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outRECEIVERTYPE")), "asString", (await $.mv((await $.v(C, "reciverbic")), "Text")));
    await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outRECEIVERBIC")), "AsString", (await $.mv((await $.v(C, "reciverbic")), "text")));
    await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF32A_CURR")), "ASString", L0["mf32a_curr"]);
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
    if ($.truthy($.ne((await $.mv((await $.v(C, "DBEdit_M36")), "Text")), ""))) {
      L0["m36"] = ":36:";
    } else {
      L0["m36"] = "";
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF50")), "ItemIndex")), 0))) {
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM50")), "AsString", "");
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF50_ACCOUNT")), "AsString", "");
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF50_BIC")), "AsString", "");
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF50_NAMEADRESS")), "AsString", "");
    } else {
      if ($.truthy($.eq((await $.mv((await $.v(C, "CMF50")), "ItemIndex")), 1))) {
        await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM50")), "AsString", ":50A:");
        await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF50_ACCOUNT")), "AsString", (await $.mv((await $.v(C, "Edit1_MF50")), "Text")));
        await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF50_BIC")), "AsString", (await $.mv((await $.v(C, "Edit2_MF50")), "Text")));
      } else {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CMF50")), "ItemIndex")), 2))) {
          await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM50")), "AsString", ":50F:");
          await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF50_ACCOUNT")), "AsString", (await $.mv((await $.v(C, "Edit4_MF50")), "Text")));
          await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF50_BIC")), "AsString", "");
        } else {
          if ($.truthy($.eq((await $.mv((await $.v(C, "CMF50")), "ItemIndex")), 3))) {
            await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM50")), "AsString", ":50K:");
            await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF50_ACCOUNT")), "AsString", (await $.mv((await $.v(C, "Edit3_MF50")), "Text")));
            await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF50_BIC")), "AsString", "");
            await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outTax")), "asString", (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv((await $.v(C, "DBMemo2_MF50")), "Lines")), [1])), 0, 20]))])));
          }
        }
      }
    }
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Chk_AccNo")), "Close", []);
    { const $t37 = (await $.mv((await $.v(C, "CMF50")), "ItemIndex"));
      if ($.eq($t37, 1)) {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Chk_AccNo")), "SetVariable", ["acc_no", (await $.mv((await $.v(C, "Edit1_MF50")), "Text"))])));
      }
      else if ($.eq($t37, 2)) {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Chk_AccNo")), "SetVariable", ["acc_no", (await $.mv((await $.v(C, "Edit4_MF50")), "Text"))])));
      }
      else if ($.eq($t37, 3)) {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Chk_AccNo")), "SetVariable", ["acc_no", (await $.mv((await $.v(C, "Edit3_MF50")), "Text"))])));
      }
    }
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "Chk_AccNo")), "Open", []);
    if ($.truthy((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "Chk_AccNoCUST_TYPE")), "IsNull")))) {
      await $.stmt((await $.call(C, "showmessage", ["MF50 - Hesab nömrəsi düzgün deyil!"])));
      await $.set(C, "CanClose", false);
      return L0.result;
    } else {
      await $.set(C, "CanClose", true);
      if ($.truthy($.eq((await $.mv((await $.v(C, "CMF50")), "ItemIndex")), 3))) {
        { const $t38 = (await $.mv((await $.mv((await $.v(C, "SWDataModule")), "Chk_AccNoCUST_TYPE")), "AsInteger"));
          if ($.eq($t38, 1)) {
            await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outTax")), "asString", "");
          }
        }
      }
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF52")), "ItemIndex")), 1))) {
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM52")), "AsString", ":52A:");
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF52_bic")), "AsString", (await $.mv((await $.v(C, "Edit2_MF52")), "Text")));
    } else {
      if ($.truthy($.eq((await $.mv((await $.v(C, "CMF52")), "ItemIndex")), 2))) {
        await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM52")), "AsString", ":52D:");
        await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF52_bic")), "AsString", "");
      } else {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CMF52")), "ItemIndex")), 0))) {
          await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM52")), "AsString", "");
          await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF52_ACCOUNT")), "AsString", "");
          await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF52_BIC")), "AsString", "");
          await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF52_NAMEADRESS")), "AsString", "");
        }
      }
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF53")), "ItemIndex")), 1))) {
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM53")), "AsString", ":53A:");
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF53_ACCOUNT")), "AsString", (await $.mv((await $.v(C, "DBEdit1_MF53")), "Text")));
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF53_BIC")), "AsString", (await $.mv((await $.v(C, "Edit2_MF53")), "Text")));
    } else {
      if ($.truthy($.eq((await $.mv((await $.v(C, "CMF53")), "ItemIndex")), 2))) {
        await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM53")), "AsString", ":53B:");
        await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF53_ACCOUNT")), "AsString", (await $.mv((await $.v(C, "DBEdit3_MF53")), "Text")));
        await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF53_BIC")), "AsString", "");
      } else {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CMF53")), "ItemIndex")), 3))) {
          await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM53")), "AsString", ":53D:");
          await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF53_BIC")), "AsString", "");
        } else {
          if ($.truthy($.eq((await $.mv((await $.v(C, "CMF53")), "ItemIndex")), 0))) {
            await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM53")), "AsString", "");
            await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF53_ACCOUNT")), "AsString", "");
            await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF53_NAMELOCATION")), "AsString", "");
          }
        }
      }
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF54")), "ItemIndex")), 1))) {
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM54")), "AsString", ":54A:");
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF54_BIC")), "AsString", (await $.mv((await $.v(C, "Edit2_MF54")), "Text")));
    } else {
      if ($.truthy($.eq((await $.mv((await $.v(C, "CMF54")), "ItemIndex")), 2))) {
        await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM54")), "AsString", ":54B:");
        await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF54_BIC")), "AsString", "");
      } else {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CMF54")), "ItemIndex")), 3))) {
          await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM54")), "AsString", ":54D:");
          await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF54_BIC")), "AsString", "");
        } else {
          if ($.truthy($.eq((await $.mv((await $.v(C, "CMF54")), "ItemIndex")), 0))) {
            await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM54")), "AsString", "");
            await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF54_ACCOUNT")), "AsString", "");
            await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF54_BIC")), "AsString", "");
            await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF54_NAMELOCATION")), "AsString", "");
          }
        }
      }
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF55")), "ItemIndex")), 1))) {
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM55")), "AsString", ":55A:");
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF55_BIC")), "AsString", (await $.mv((await $.v(C, "Edit2_MF55")), "Text")));
    } else {
      if ($.truthy($.eq((await $.mv((await $.v(C, "CMF55")), "ItemIndex")), 2))) {
        await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM55")), "AsString", ":55B:");
        await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF55_BIC")), "AsString", "");
      } else {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CMF55")), "ItemIndex")), 3))) {
          await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM55")), "AsString", ":55D:");
          await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF55_BIC")), "AsString", "");
        } else {
          if ($.truthy($.eq((await $.mv((await $.v(C, "CMF55")), "ItemIndex")), 0))) {
            await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM55")), "AsString", "");
            await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF55_ACCOUNT")), "AsString", "");
            await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF55_BIC")), "AsString", "");
            await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF55_NAMELOCATION")), "AsString", "");
          }
        }
      }
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF56")), "ItemIndex")), 1))) {
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM56")), "AsString", ":56A:");
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF56_BIC")), "AsString", (await $.mv((await $.v(C, "Edit2_MF56")), "Text")));
    } else {
      if ($.truthy($.eq((await $.mv((await $.v(C, "CMF56")), "ItemIndex")), 2))) {
        await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM56")), "AsString", ":56C:");
        await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF56_BIC")), "AsString", "");
      } else {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CMF56")), "ItemIndex")), 3))) {
          await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM56")), "AsString", ":56D:");
          await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF56_BIC")), "AsString", "");
        } else {
          if ($.truthy($.eq((await $.mv((await $.v(C, "CMF56")), "ItemIndex")), 0))) {
            await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM56")), "AsString", "");
            await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF56_ACCOUNT")), "AsString", "");
            await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF56_BIC")), "AsString", "");
            await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF56_NAMELOCATION")), "AsString", "");
          }
        }
      }
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF57")), "ItemIndex")), 1))) {
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM58")), "AsString", ":58A:");
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF58_BIC")), "AsString", (await $.mv((await $.v(C, "Edit2_MF57")), "Text")));
    } else {
      if ($.truthy($.eq((await $.mv((await $.v(C, "CMF57")), "ItemIndex")), 2))) {
        await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM58")), "AsString", ":58B:");
        await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF58_BIC")), "AsString", "");
      } else {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CMF57")), "ItemIndex")), 3))) {
          await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM58")), "AsString", ":57C:");
          await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF58_BIC")), "AsString", "");
          await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF58_NAMELOCATION")), "AsString", "");
        } else {
          if ($.truthy($.eq((await $.mv((await $.v(C, "CMF57")), "ItemIndex")), 4))) {
            await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM58")), "AsString", ":58D:");
            await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF58_BIC")), "AsString", "");
          } else {
            if ($.truthy($.eq((await $.mv((await $.v(C, "CMF57")), "ItemIndex")), 0))) {
              await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM58")), "AsString", "");
              await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF58_ACCOUNT")), "AsString", "");
              await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF58_BIC")), "AsString", "");
              await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF58_NAMELOCATION")), "AsString", "");
            }
          }
        }
      }
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMF59")), "ItemIndex")), 1))) {
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM59")), "AsString", ":59:");
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF59_BIC")), "AsString", "");
    } else {
      if ($.truthy($.eq((await $.mv((await $.v(C, "CMF59")), "ItemIndex")), 2))) {
        await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM59")), "AsString", ":59A:");
        await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF59_BIC")), "AsString", (await $.mv((await $.v(C, "Edit59A_bic")), "Text")));
      } else {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CMF59")), "ItemIndex")), 0))) {
          await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM59")), "AsString", "");
          await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF59_ACCOUNT")), "AsString", "");
          await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF59_BIC")), "AsString", "");
          await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF59_NAMEADRESS")), "AsString", "");
        }
      }
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "OF70_RichEdit")), "Text")), ""))) {
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM70")), "AsString", ":70:");
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF70")), "AsString", (await $.call(C, "trim", [(await $.mv((await $.v(C, "OF70_RichEdit")), "Text"))])));
    } else {
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM70")), "AsString", "");
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "Edit1_MF71A")), "Text")), ""))) {
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM71A")), "AsString", ":71A:");
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF71A")), "AsString", (await $.mv((await $.v(C, "Edit1_MF71A")), "Text")));
    } else {
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM71A")), "AsString", "");
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "Edit1_MF71G")), "Text")), ""))) {
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM71G")), "AsString", ":71G:");
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF71G_child")), "AsString", $.add($.add((await $.mv((await $.v(C, "Edit1_MF71G")), "Text")), "|"), (await $.mv((await $.v(C, "Edit2_MF71G")), "Text"))));
    } else {
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM71G")), "AsString", "");
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "OF72_RichEdit")), "Text")), ""))) {
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM72")), "AsString", ":72:");
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF72")), "AsString", (await $.call(C, "trim", [(await $.mv((await $.v(C, "OF72_RichEdit")), "Text"))])));
    } else {
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM72")), "AsString", "");
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "DBMF77_memo")), "Text")), ""))) {
      await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outM77B")), "AsString", ":77B:");
    }
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "Post", []);
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
  U.method("TMT103", "MtCreateClick", async function MtCreateClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CreatMessage")), "Execute", []);
  if ($.truthy((await $.v(C, "CanClose")))) {
    await $.mcall((await $.v(C, "MT103")), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103", "edit11_mf32aKeyPress", async function edit11_mf32aKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b", "."]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TMT103", "mf32a_valChange", async function mf32a_valChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "CORR")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "CORR")), "SetVariable", ["v", (await $.mv((await $.v(C, "mf32a_val")), "text"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "CORR")), "SetVariable", ["b", (await $.mv((await $.v(C, "reciverbic")), "text"))])));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "CORR")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103", "reciverbicChange", async function reciverbicChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["name"])), "asstring")));
  await $.mset((await $.v(C, "Edit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["city"])), "asstring")));
  await $.mset((await $.v(C, "Edit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["address"])), "asstring")));
  await $.mset((await $.v(C, "Edit5")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["country"])), "asstring")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103", "TabSheet1Show", async function TabSheet1Show(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "open_edit_form", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103", "OF70_RichEditChange", async function OF70_RichEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "GetRichEditLine", [(await $.v(C, "OF70_RichEdit"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103", "OF70_RichEditKeyDown", async function OF70_RichEditKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.and_(($.gt((await $.call(C, "length", [(await $.call(C, "trim", [(await $.mv((L0["sender"]), "Text"))]))])), 147)), async () => $.not(($.in_((await L0["key"].get()), [(await $.v(C, "vk_delete")), (await $.v(C, "vk_back"))]))))))) {
    await L0["key"].set(0);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TMT103", "OF70_RichEditKeyPress", async function OF70_RichEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TMT103", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TMT103", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103", "FormMouseWheel", async function FormMouseWheel(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "shift": $.copyArg(p1), "wheeldelta": $.copyArg(p2), "mousepos": $.copyArg(p3), "handled": $.asRef(p4), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender", "shift", "wheeldelta", "mousepos"]);
  await L0["handled"].set((await $.call(C, "PtInRect", [(await $.mv((await $.v(C, "ScrollBox1")), "ClientRect")), (await $.mcall((await $.v(C, "ScrollBox1")), "ScreenToClient", [L0["mousepos"]]))])));
  if ($.truthy((await L0["handled"].get()))) {
    { const $t39 = (await $.mv((await $.v(C, "Mouse")), "WheelScrollLines"));
      L0["i"] = 1;
      let $t40 = true;
      for (;;) {
        if (!$t40) { L0["i"] = $.succ(L0["i"], 1); }
        $t40 = false;
        if (!($.ord(L0["i"]) <= $.ord($t39))) break;
        try {
          if ($.truthy($.gt(L0["wheeldelta"], 0))) {
            await $.stmt((await $.mcall((await $.v(C, "ScrollBox1")), "Perform", [(await $.v(C, "WM_VSCROLL")), (await $.v(C, "SB_LINEUP")), 0])));
          } else {
            await $.stmt((await $.mcall((await $.v(C, "ScrollBox1")), "Perform", [(await $.v(C, "WM_VSCROLL")), (await $.v(C, "SB_LINEDOWN")), 0])));
          }
        } finally {
          await $.stmt((await $.mcall((await $.v(C, "ScrollBox1")), "Perform", [(await $.v(C, "WM_VSCROLL")), (await $.v(C, "SB_ENDSCROLL")), 0])));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Shift", "WheelDelta", "MousePos", "Handled"], "kind": "procedure", "ptypes": ["TObject", "TShiftState", "Integer", "TPoint", "Boolean"]});
  U.method("TMT103", "Edit2_MF52KeyUp", async function Edit2_MF52KeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "Edit2_MF52")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "Edit2_MF52")), "Color")), (await $.v(C, "clred")))))))) {
    await $.mcall((await $.v(C, "DBMemo1_mf52")), "Clear", []);
  } else {
    await $.mcall((await $.v(C, "DBMemo1_mf52")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DBMemo1_mf52")), "Lines")), "add", [(await $.mv((await $.mv((await $.v(C, "SWDataModule")), "banksNAME")), "AsString"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DBMemo1_mf52")), "Lines")), "add", [(await $.mv((await $.mv((await $.v(C, "SWDataModule")), "banksCITY")), "AsString"))])));
  }
  await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF52_NAMEADRESS")), "asString", (await $.mv((await $.v(C, "DBMemo1_mf52")), "Text")));
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TMT103", "Edit2_MF50KeyUp", async function Edit2_MF50KeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "Edit2_MF50")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "Edit2_MF50")), "Color")), (await $.v(C, "clred")))))))) {
    await $.mcall((await $.v(C, "DBMemo1_mf50")), "Clear", []);
  } else {
    await $.mcall((await $.v(C, "DBMemo1_mf50")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DBMemo1_mf50")), "Lines")), "add", [(await $.mv((await $.mv((await $.v(C, "SWDataModule")), "banksNAME")), "AsString"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DBMemo1_mf50")), "Lines")), "add", [(await $.mv((await $.mv((await $.v(C, "SWDataModule")), "banksCity")), "AsString"))])));
  }
  await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF50_NAMEADRESS")), "asString", (await $.mv((await $.v(C, "DBMemo1_mf50")), "Text")));
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TMT103", "Edit2_MF54KeyUp", async function Edit2_MF54KeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "Edit2_MF54")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "Edit2_MF54")), "Color")), (await $.v(C, "clred")))))))) {
    await $.mcall((await $.v(C, "DBMemo1_MF54")), "Clear", []);
  } else {
    await $.mcall((await $.v(C, "DBMemo1_MF54")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DBMemo1_MF54")), "Lines")), "add", [(await $.mv((await $.mv((await $.v(C, "SWDataModule")), "banksNAME")), "AsString"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DBMemo1_MF54")), "Lines")), "add", [(await $.mv((await $.mv((await $.v(C, "SWDataModule")), "banksCITY")), "AsString"))])));
  }
  await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF54_NAMELOCATION")), "asString", (await $.mv((await $.v(C, "DBMemo1_mf54")), "Text")));
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TMT103", "Edit2_MF55KeyUp", async function Edit2_MF55KeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "Edit2_MF55")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "Edit2_MF55")), "Color")), (await $.v(C, "clred")))))))) {
    await $.mcall((await $.v(C, "DBMemo1_mf55")), "Clear", []);
  } else {
    await $.mcall((await $.v(C, "DBMemo1_mf55")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DBMemo1_mf55")), "Lines")), "add", [(await $.mv((await $.mv((await $.v(C, "SWDataModule")), "banksNAME")), "AsString"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DBMemo1_mf55")), "Lines")), "add", [(await $.mv((await $.mv((await $.v(C, "SWDataModule")), "banksCITY")), "AsString"))])));
  }
  await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF55_NAMELOCATION")), "asString", (await $.mv((await $.v(C, "DBMemo1_mf55")), "Text")));
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TMT103", "Edit2_MF56KeyUp", async function Edit2_MF56KeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "Edit2_MF56")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "Edit2_MF56")), "Color")), (await $.v(C, "clred")))))))) {
    await $.mcall((await $.v(C, "DBMemo1_MF56")), "Clear", []);
  } else {
    await $.mcall((await $.v(C, "DBMemo1_MF56")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DBMemo1_MF56")), "Lines")), "add", [(await $.mv((await $.mv((await $.v(C, "SWDataModule")), "banksNAME")), "AsString"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DBMemo1_MF56")), "Lines")), "add", [(await $.mv((await $.mv((await $.v(C, "SWDataModule")), "banksCITY")), "AsString"))])));
  }
  await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF56_NAMELOCATION")), "asString", (await $.mv((await $.v(C, "DBMemo1_mf56")), "Text")));
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TMT103", "Edit2_MF57KeyUp", async function Edit2_MF57KeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "Edit2_MF57")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "Edit2_MF57")), "Color")), (await $.v(C, "clred")))))))) {
    await $.mcall((await $.v(C, "DBMemo1_mf57")), "Clear", []);
  } else {
    await $.mcall((await $.v(C, "DBMemo1_mf57")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DBMemo1_mf57")), "Lines")), "add", [(await $.mv((await $.mv((await $.v(C, "SWDataModule")), "banksNAME")), "AsString"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DBMemo1_mf57")), "Lines")), "add", [(await $.mv((await $.mv((await $.v(C, "SWDataModule")), "banksCITY")), "AsString"))])));
  }
  await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF58_NAMELOCATION")), "asString", (await $.mv((await $.v(C, "DBMemo1_mf57")), "Text")));
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TMT103", "Edit59A_bicKeyUp", async function Edit59A_bicKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "Edit59A_bic")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "Edit59A_bic")), "Color")), (await $.v(C, "clred")))))))) {
    await $.mcall((await $.v(C, "DBMemo59A_nameadress")), "Clear", []);
  } else {
    await $.mcall((await $.v(C, "DBMemo59A_nameadress")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DBMemo59A_nameadress")), "Lines")), "add", [(await $.mv((await $.mv((await $.v(C, "SWDataModule")), "banksNAME")), "AsString"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DBMemo59A_nameadress")), "Lines")), "add", [(await $.mv((await $.mv((await $.v(C, "SWDataModule")), "banksNAME")), "AsString"))])));
  }
  await $.mset((await $.mv((await $.v(C, "SWDataModule")), "sw_outMF59_NAMEADRESS")), "asString", (await $.mv((await $.v(C, "DBMemo59A_nameadress")), "Text")));
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TMT103", "Edit1_MF50Change", async function Edit1_MF50Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "FINCOPY")), "Text")), "AZN"))) {
    await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "DS_AccsForComission")), "Close", []);
  } else {
    {
      const $t41 = (await $.mv((await $.v(C, "SWDataModule")), "DS_AccsForComission"));
      await $.stmt($.wcall([$t41], "close", [], C));
      await $.stmt((await $.wcall([$t41], "setVariable", ["v_acc_no", (await $.mv(((await $.wv([$t41], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Text"))], C)));
      await $.stmt($.wcall([$t41], "Open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103", "Edit3_MF50Change", async function Edit3_MF50Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.or_(($.eq((await $.mv((L0["sender"]), "Text")), "")), async () => ($.eq((await $.mv((L0["sender"]), "Color")), (await $.v(C, "clred")))))))))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "FINCOPY")), "Text")), "AZN"))) {
      await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "DS_AccsForComission")), "Close", []);
    } else {
      {
        const $t42 = (await $.mv((await $.v(C, "SWDataModule")), "DS_AccsForComission"));
        await $.stmt($.wcall([$t42], "close", [], C));
        await $.stmt((await $.wcall([$t42], "setVariable", ["v_acc_no", (await $.mv(((await $.wv([$t42], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Text"))], C)));
        await $.stmt($.wcall([$t42], "Open", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103", "DBMemo59_nameadressKeyPress", async function DBMemo59_nameadressKeyPress(Self, p0, p1) {
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
        { const $t43 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
          L0["i"] = 0;
          let $t44 = true;
          for (;;) {
            if (!$t44) { L0["i"] = $.succ(L0["i"], 1); }
            $t44 = false;
            if (!($.ord(L0["i"]) <= $.ord($t43))) break;
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
