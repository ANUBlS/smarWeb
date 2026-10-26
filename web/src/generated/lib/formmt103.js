// Generated from formmt103.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("formmt103", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Mask", "DBCtrls", "StdCtrls", "SearchEdit", "ComCtrls", "ExtCtrls", "DBViewComboBox", "Menus", "DBCtrlsEh", "Unit2", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TMT103AZN", "TForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "header": {"name": "Header", "type": "TTabSheet"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "sendertype": {"name": "sendertype", "type": "TComboBox"}, "combobox2": {"name": "ComboBox2", "type": "TComboBox"}, "recivertype": {"name": "recivertype", "type": "TComboBox"}, "senderlt": {"name": "senderlt", "type": "TComboBox"}, "monitoring": {"name": "monitoring", "type": "TComboBox"}, "application": {"name": "Application", "type": "TComboBox"}, "priority": {"name": "priority", "type": "TComboBox"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "label40": {"name": "Label40", "type": "TLabel"}, "label41": {"name": "Label41", "type": "TLabel"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "scrollbox1": {"name": "ScrollBox1", "type": "TScrollBox"}, "mainpanel": {"name": "MainPanel", "type": "TPanel"}, "mf20": {"name": "MF20", "type": "TPanel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "mf23b": {"name": "MF23B", "type": "TPanel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "mf32a": {"name": "MF32A", "type": "TPanel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "mf32_date": {"name": "mf32_date", "type": "TDateTimePicker"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "mf32a_val": {"name": "mf32a_val", "type": "TDBViewComboBox"}, "mf50": {"name": "MF50", "type": "TPanel"}, "mf50_main": {"name": "MF50_main", "type": "TPanel"}, "label20": {"name": "Label20", "type": "TLabel"}, "mf50k": {"name": "MF50K", "type": "TPanel"}, "edit3_mf50": {"name": "Edit3_MF50", "type": "TSearchEdit"}, "mf70": {"name": "MF70", "type": "TPanel"}, "label27": {"name": "Label27", "type": "TLabel"}, "mf71a": {"name": "MF71A", "type": "TPanel"}, "label28": {"name": "Label28", "type": "TLabel"}, "label29": {"name": "Label29", "type": "TLabel"}, "edit1_mf71a": {"name": "Edit1_MF71A", "type": "TEdit"}, "mf72": {"name": "MF72", "type": "TPanel"}, "label34": {"name": "Label34", "type": "TLabel"}, "label37": {"name": "Label37", "type": "TLabel"}, "mf71g": {"name": "MF71G", "type": "TPanel"}, "label38": {"name": "Label38", "type": "TLabel"}, "edit1_mf71g": {"name": "Edit1_MF71G", "type": "TEdit"}, "edit2_mf71g": {"name": "Edit2_MF71G", "type": "TEdit"}, "mf59_59a": {"name": "MF59_59A", "type": "TPanel"}, "mf59_main": {"name": "MF59_main", "type": "TPanel"}, "label33": {"name": "Label33", "type": "TLabel"}, "cmf59": {"name": "CMF59", "type": "TComboBox"}, "mf59": {"name": "MF59", "type": "TPanel"}, "mf59a": {"name": "MF59A", "type": "TPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "dbmemo1": {"name": "DBMemo1", "type": "TDBMemo"}, "dbmemo2": {"name": "DBMemo2", "type": "TDBMemo"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "change1": {"name": "Change1", "type": "TMenuItem"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "dbmemo3": {"name": "DBMemo3", "type": "TDBMemo"}, "reciverbic": {"name": "reciverbic", "type": "TSearchEdit"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEdit"}, "dbmemo4": {"name": "DBMemo4", "type": "TDBMemo"}, "dbmemo5": {"name": "DBMemo5", "type": "TDBMemo"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "of70_richedit": {"name": "OF70_RichEdit", "type": "TRichEdit"}, "richedit3": {"name": "RichEdit3", "type": "TRichEdit"}, "richedit1": {"name": "RichEdit1", "type": "TRichEdit"}}, {});
  U.init(async () => {
    U.var_("MT103AZN", null, "TMT103AZN");
    U.var_("isEmpty", false, "boolean");
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
  U.method("TMT103AZN", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "Cancel", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TMT103AZN", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103AZN", "Change1Click", async function Change1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CMF59")), "Text")), "Field - 59A"))) {
    await $.mset((await $.v(C, "DBMemo5")), "Text", (await $.mv((await $.v(C, "RichEdit1")), "Text")));
  }
  await $.mcall((await $.v(C, "DBMemo2")), "Clear", []);
  await $.mset((await $.v(C, "DBMemo2")), "Text", (await $.call(C, "trim", [(await $.mv((await $.v(C, "OF70_RichEdit")), "TEXT"))])));
  await $.mcall((await $.v(C, "DBMemo4")), "Clear", []);
  await $.mset((await $.v(C, "DBMemo4")), "Text", (await $.call(C, "trim", [(await $.mv((await $.v(C, "RichEdit3")), "Text"))])));
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "Post", []);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103AZN", "CMF59Change", async function CMF59Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
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
  U.method("TMT103AZN", "reciverbicChange", async function reciverbicChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["name"])), "asstring")));
  await $.mset((await $.v(C, "Edit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["city"])), "asstring")));
  await $.mset((await $.v(C, "Edit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["address"])), "asstring")));
  await $.mset((await $.v(C, "Edit5")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["country"])), "asstring")));
  await $.mset((await $.v(C, "DBEdit1")), "Text", (await $.mv((await $.v(C, "reciverbic")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103AZN", "Edit3_MF50Change", async function Edit3_MF50Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBEdit12")), "Text", (await $.mv((await $.v(C, "Edit3_MF50")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103AZN", "DBLookupComboBox2Click", async function DBLookupComboBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBMemo5")), "Visible", false);
  await $.mset((await $.v(C, "RichEdit1")), "Visible", true);
  { const $t28 = await $.iset((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [0], (await $.call(C, "copy", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["name"])), "asstring")), 1, 35]))); if ($t28 !== undefined) { await $.mset((await $.v(C, "RichEdit1")), "Lines", $t28); } }
  { const $t29 = await $.iset((await $.mv((await $.v(C, "RichEdit1")), "Lines")), [1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["city"])), "asstring"))); if ($t29 !== undefined) { await $.mset((await $.v(C, "RichEdit1")), "Lines", $t29); } }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103AZN", "FormActivate", async function FormActivate(Self, p0) {
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
  await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "sw_out")), "Edit", []);
  await $.mset((await $.v(C, "reciverbic")), "Text", (await $.mv((await $.v(C, "DBEdit1")), "Text")));
  await $.mset((await $.v(C, "Edit3_MF50")), "Text", (await $.mv((await $.v(C, "DBEdit12")), "Text")));
  await $.mset((await $.v(C, "mf32a_val")), "Text", "AZN");
  { const $t30 = await $.iset((await $.mv((await $.v(C, "OF70_RichEdit")), "Lines")), [0], (await $.idx((await $.mv((await $.v(C, "DBmemo2")), "Lines")), [0]))); if ($t30 !== undefined) { await $.mset((await $.v(C, "OF70_RichEdit")), "Lines", $t30); } }
  { const $t31 = await $.iset((await $.mv((await $.v(C, "OF70_RichEdit")), "Lines")), [1], (await $.idx((await $.mv((await $.v(C, "DBmemo2")), "Lines")), [1]))); if ($t31 !== undefined) { await $.mset((await $.v(C, "OF70_RichEdit")), "Lines", $t31); } }
  { const $t32 = await $.iset((await $.mv((await $.v(C, "OF70_RichEdit")), "Lines")), [2], (await $.idx((await $.mv((await $.v(C, "DBmemo2")), "Lines")), [2]))); if ($t32 !== undefined) { await $.mset((await $.v(C, "OF70_RichEdit")), "Lines", $t32); } }
  { const $t33 = await $.iset((await $.mv((await $.v(C, "OF70_RichEdit")), "Lines")), [3], (await $.idx((await $.mv((await $.v(C, "DBmemo2")), "Lines")), [3]))); if ($t33 !== undefined) { await $.mset((await $.v(C, "OF70_RichEdit")), "Lines", $t33); } }
  { const $t34 = await $.iset((await $.mv((await $.v(C, "RichEdit3")), "Lines")), [0], (await $.idx((await $.mv((await $.v(C, "DBMemo4")), "Lines")), [0]))); if ($t34 !== undefined) { await $.mset((await $.v(C, "RichEdit3")), "Lines", $t34); } }
  { const $t35 = await $.iset((await $.mv((await $.v(C, "RichEdit3")), "Lines")), [1], (await $.idx((await $.mv((await $.v(C, "DBMemo4")), "Lines")), [1]))); if ($t35 !== undefined) { await $.mset((await $.v(C, "RichEdit3")), "Lines", $t35); } }
  { const $t36 = await $.iset((await $.mv((await $.v(C, "RichEdit3")), "Lines")), [2], (await $.idx((await $.mv((await $.v(C, "DBMemo4")), "Lines")), [2]))); if ($t36 !== undefined) { await $.mset((await $.v(C, "RichEdit3")), "Lines", $t36); } }
  { const $t37 = await $.iset((await $.mv((await $.v(C, "RichEdit3")), "Lines")), [3], (await $.idx((await $.mv((await $.v(C, "DBMemo4")), "Lines")), [3]))); if ($t37 !== undefined) { await $.mset((await $.v(C, "RichEdit3")), "Lines", $t37); } }
  { const $t38 = await $.iset((await $.mv((await $.v(C, "RichEdit3")), "Lines")), [4], (await $.idx((await $.mv((await $.v(C, "DBMemo4")), "Lines")), [4]))); if ($t38 !== undefined) { await $.mset((await $.v(C, "RichEdit3")), "Lines", $t38); } }
  { const $t39 = await $.iset((await $.mv((await $.v(C, "RichEdit3")), "Lines")), [5], (await $.idx((await $.mv((await $.v(C, "DBMemo4")), "Lines")), [5]))); if ($t39 !== undefined) { await $.mset((await $.v(C, "RichEdit3")), "Lines", $t39); } }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103AZN", "PageControl1Change", async function PageControl1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DBLookupComboBox2")), "CanFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103AZN", "DBLookupComboBox3Enter", async function DBLookupComboBox3Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103AZN", "DBLookupComboBox3Click", async function DBLookupComboBox3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["name"])), "asstring")));
  await $.mset((await $.v(C, "Edit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["city"])), "asstring")));
  await $.mset((await $.v(C, "Edit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["address"])), "asstring")));
  await $.mset((await $.v(C, "Edit5")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "SWDataModule")), "banks")), "fieldbyname", ["country"])), "asstring")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103AZN", "DBMemo3KeyPress", async function DBMemo3KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "i": 0, "n": 0, "k": 0, "cposy": 0, "a": '', "s": '', "t": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.gt((await $.call(C, "Length", [(await $.mv((L0["sender"]), "text"))])), 145)), async () => ($.ne((await L0["key"].get()), "\b")))))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy((await $.and_(($.gt((await $.mv((await $.mv((L0["sender"]), "CaretPos")), "y")), 3)), async () => ($.eq((await L0["key"].get()), "\b")))))) {
    await L0["key"].set("\u0000");
  }
  await L0["key"].set((await $.call(C, "UpCase", [(await L0["key"].get())])));
  L0["cposy"] = (await $.mv((await $.mv((L0["sender"]), "CaretPos")), "y"));
  L0["s"] = (await $.mv((L0["sender"]), "text"));
  if ($.truthy($.gt((await $.call(C, "length", [L0["s"]])), 0))) {
    await $.mset(L0["sender"], "text", L0["s"]);
  }
  if ($.truthy(($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 35)))) {
    if ($.truthy($.lt(L0["cposy"], 3))) {
      if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
        L0["n"] = 0;
        { const $t40 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
          L0["i"] = 0;
          let $t41 = true;
          for (;;) {
            if (!$t41) { L0["i"] = $.succ(L0["i"], 1); }
            $t41 = false;
            if (!($.ord(L0["i"]) <= $.ord($t40))) break;
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
  U.method("TMT103AZN", "DBMemo4KeyPress", async function DBMemo4KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "i": 0, "n": 0, "k": 0, "cposy": 0, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((L0["sender"]), "CaretPos")), "y")), 5))) {
    await L0["key"].set("\u0000");
  }
  await L0["key"].set((await $.call(C, "UpCase", [(await L0["key"].get())])));
  L0["cposy"] = (await $.mv((await $.mv((L0["sender"]), "CaretPos")), "y"));
  L0["s"] = (await $.mv((L0["sender"]), "text"));
  if ($.truthy($.gt((await $.call(C, "length", [L0["s"]])), 0))) {
    await $.mset(L0["sender"], "text", L0["s"]);
  }
  if ($.truthy($.ne(L0["cposy"], 0))) {
    if ($.truthy($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 33))) {
      if ($.truthy($.lt(L0["cposy"], 5))) {
        if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
          L0["n"] = 0;
          { const $t42 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
            L0["i"] = 0;
            let $t43 = true;
            for (;;) {
              if (!$t43) { L0["i"] = $.succ(L0["i"], 1); }
              $t43 = false;
              if (!($.ord(L0["i"]) <= $.ord($t42))) break;
              L0["k"] = (await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["i"]]))]));
              L0["n"] = $.add(L0["n"], L0["k"]);
              if ($.truthy($.lt(L0["k"], 33))) {
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
  } else {
    if ($.truthy($.ne(L0["cposy"], 5))) {
      if ($.truthy($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 30))) {
        if ($.truthy($.lt(L0["cposy"], 5))) {
          if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
            L0["n"] = 0;
            { const $t44 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
              L0["i"] = 0;
              let $t45 = true;
              for (;;) {
                if (!$t45) { L0["i"] = $.succ(L0["i"], 1); }
                $t45 = false;
                if (!($.ord(L0["i"]) <= $.ord($t44))) break;
                L0["k"] = (await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["i"]]))]));
                L0["n"] = $.add(L0["n"], L0["k"]);
                if ($.truthy($.lt(L0["k"], 30))) {
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
    }
  }
  if ($.truthy($.eq(L0["cposy"], 5))) {
    if ($.truthy($.ge((await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["cposy"]]))])), 27))) {
      if ($.truthy($.lt(L0["cposy"], 5))) {
        if ($.truthy($.lt(L0["cposy"], $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "Count")), 1)))) {
          L0["n"] = 0;
          { const $t46 = $.sub((await $.mv((await $.mv((L0["sender"]), "lines")), "count")), 1);
            L0["i"] = 0;
            let $t47 = true;
            for (;;) {
              if (!$t47) { L0["i"] = $.succ(L0["i"], 1); }
              $t47 = false;
              if (!($.ord(L0["i"]) <= $.ord($t46))) break;
              L0["k"] = (await $.call(C, "Length", [(await $.idx((await $.mv((L0["sender"]), "Lines")), [L0["i"]]))]));
              L0["n"] = $.add(L0["n"], L0["k"]);
              if ($.truthy($.lt(L0["k"], 27))) {
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
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TMT103AZN", "OF70_RichEditChange", async function OF70_RichEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "GetRichEditLine", [(await $.v(C, "OF70_RichEdit"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103AZN", "OF70_RichEditKeyDown", async function OF70_RichEditKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.gt((await $.call(C, "length", [(await $.call(C, "trim", [(await $.mv((L0["sender"]), "Text"))]))])), 148))) {
    await L0["key"].set(0);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TMT103AZN", "OF70_RichEditKeyPress", async function OF70_RichEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TMT103AZN", "RichEdit3Change", async function RichEdit3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "GetRichEditLine2", [(await $.v(C, "RichEdit3"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103AZN", "RichEdit3KeyDown", async function RichEdit3KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined, "r": 0};
  await $.fixArgs(L0, ["sender", "shift"]);
  await $.stmt((await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "RichEdit3")), "Handle")), (await $.v(C, "EM_GETSEL")), (await $.call(C, "Longint", [L0["r"]])), 0])));
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
  U.method("TMT103AZN", "RichEdit3KeyPress", async function RichEdit3KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "r": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await L0["key"].set("\u0000");
  }
  await $.stmt((await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "RichEdit3")), "Handle")), (await $.v(C, "EM_GETSEL")), (await $.call(C, "Longint", [L0["r"]])), 0])));
  if ($.truthy(($.in_(L0["r"], [...$.range(1,5)])))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy((await $.and_(($.in_(L0["r"], [...$.range(35,38), ...$.range(72,75), ...$.range(109,112), ...$.range(146,149), ...$.range(183,186)])), async () => ((await $.or_(($.eq((await $.idx((await $.mv((await $.v(C, "RichEdit3")), "Text")), [$.sub(L0["r"], 1)])), "/")), async () => ($.eq((await $.idx((await $.mv((await $.v(C, "RichEdit3")), "Text")), [$.add(L0["r"], 1)])), "/"))))))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TMT103AZN", "TabSheet1Show", async function TabSheet1Show(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outM59")), "AsString")), ":59:"))) {
    await $.mset((await $.v(C, "CMF59")), "ItemIndex", 1);
    await $.mset((await $.v(C, "MF59")), "Visible", true);
    await $.mset((await $.v(C, "MF59A")), "Visible", false);
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "SWDataModule")), "sw_outM59")), "AsString")), ":59A:"))) {
    await $.mset((await $.v(C, "CMF59")), "ItemIndex", 2);
    await $.mset((await $.v(C, "MF59")), "Visible", false);
    await $.mset((await $.v(C, "MF59A")), "Visible", true);
    await $.mcall((await $.v(C, "DBLookupComboBox2")), "CanFocus", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMT103AZN", "DBEdit8KeyPress", async function DBEdit8KeyPress(Self, p0, p1) {
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
