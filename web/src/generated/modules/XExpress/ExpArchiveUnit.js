// Generated from ExpArchiveUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ExpArchiveUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "ExtCtrls", "Grids", "DBGrids", "ToolWin", "ImgList", "StdCtrls", "Buttons", "DBCtrls", "CMCurrencyEdit", "Menus", "XDBGrids", "ExpDataModuleUnit", "OrderPrintXUnit", "ExpUnitImpl", "UnitCreditReport", "ExpUnitNewImpl"]);
  const C = [U];
  U.defClass("TExpArchiveForm", "TForm", {"coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}, "checkbox4": {"name": "CheckBox4", "type": "TCheckBox"}, "button1": {"name": "Button1", "type": "TButton"}, "cmcurrencyedit1": {"name": "CMCurrencyEdit1", "type": "TCMCurrencyEdit"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "imagelist2": {"name": "ImageList2", "type": "TImageList"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "mdaxilqbzap1": {"name": "MdaxilQbzap1", "type": "TMenuItem"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "checkbox5": {"name": "CheckBox5", "type": "TCheckBox"}, "checkbox6": {"name": "CheckBox6", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.var_("ExpArchiveForm", null, "TExpArchiveForm");
    U.var_("bdate", 0, "Tdatetime");
    U.var_("edate", 0, "Tdatetime");
  });
  U.method("TExpArchiveForm", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Panel1")), "Visible", $.not((await $.mv((await $.v(C, "Panel1")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpArchiveForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Panel1")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpArchiveForm", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "ExpDataModule"));
    const $t2 = (await $.wv([$t1], "ExpBatchsArchiveDataSet", C, false));
    await $.stmt($.wcall([$t1, $t2], "close", [], C));
    await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["bdate", (await $.wv([$t1, $t2], "bdate", C, false))], C)));
    await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["edate", (await $.wv([$t1, $t2], "edate", C, false))], C)));
    await $.stmt($.wcall([$t1, $t2], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpArchiveForm", "DateTimePicker1Change", async function DateTimePicker1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "bdate", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))])));
  await $.set(C, "edate", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpArchiveForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))))) {
    {
      const $t3 = (await $.v(C, "ExpDataModule"));
      const $t4 = (await $.wv([$t3], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t3, $t4], "Filtered", (await $.wv([$t3, $t4], "False", C, false)), C);
      await $.wset([$t3, $t4], "Filter", $.add("Filial=", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), C);
      await $.wset([$t3, $t4], "Filtered", (await $.wv([$t3, $t4], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))))) {
    {
      const $t5 = (await $.v(C, "ExpDataModule"));
      const $t6 = (await $.wv([$t5], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t5, $t6], "Filtered", (await $.wv([$t5, $t6], "False", C, false)), C);
      await $.wset([$t5, $t6], "Filter", $.add("BFilial=", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t5, $t6], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), C);
      await $.wset([$t5, $t6], "Filtered", (await $.wv([$t5, $t6], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))))) {
    {
      const $t7 = (await $.v(C, "ExpDataModule"));
      const $t8 = (await $.wv([$t7], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t7, $t8], "Filtered", (await $.wv([$t7, $t8], "False", C, false)), C);
      await $.wset([$t7, $t8], "Filter", $.add("Val_Cod=", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t7, $t8], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), C);
      await $.wset([$t7, $t8], "Filtered", (await $.wv([$t7, $t8], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_(($.gt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0)), async () => ((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))))) {
    {
      const $t9 = (await $.v(C, "ExpDataModule"));
      const $t10 = (await $.wv([$t9], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t9, $t10], "Filtered", (await $.wv([$t9, $t10], "False", C, false)), C);
      await $.wset([$t9, $t10], "Filter", $.add("Amount=", (await $.wcall([$t9, $t10], "CurrToStr", [(await $.mv((await $.wv([$t9, $t10], "CMCurrencyEdit1", C, false)), "Value"))], C))), C);
      await $.wset([$t9, $t10], "Filtered", (await $.wv([$t9, $t10], "true", C, false)), C);
    }
  }
  if ($.truthy(((await $.mv((await $.v(C, "CheckBox5")), "Checked"))))) {
    {
      const $t11 = (await $.v(C, "ExpDataModule"));
      const $t12 = (await $.wv([$t11], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t11, $t12], "Filtered", (await $.wv([$t11, $t12], "False", C, false)), C);
      await $.wset([$t11, $t12], "Filter", "status=3", C);
      await $.wset([$t11, $t12], "Filtered", (await $.wv([$t11, $t12], "true", C, false)), C);
    }
  }
  if ($.truthy(((await $.mv((await $.v(C, "CheckBox6")), "Checked"))))) {
    {
      const $t13 = (await $.v(C, "ExpDataModule"));
      const $t14 = (await $.wv([$t13], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t13, $t14], "Filtered", (await $.wv([$t13, $t14], "False", C, false)), C);
      await $.wset([$t13, $t14], "Filter", "status=2", C);
      await $.wset([$t13, $t14], "Filtered", (await $.wv([$t13, $t14], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))))) {
    {
      const $t15 = (await $.v(C, "ExpDataModule"));
      const $t16 = (await $.wv([$t15], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t15, $t16], "Filtered", (await $.wv([$t15, $t16], "False", C, false)), C);
      await $.wset([$t15, $t16], "Filter", $.add($.add($.add($.add($.add("(Filial=", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t15, $t16], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (BFilial="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t15, $t16], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), C);
      await $.wset([$t15, $t16], "Filtered", (await $.wv([$t15, $t16], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))))) {
    {
      const $t17 = (await $.v(C, "ExpDataModule"));
      const $t18 = (await $.wv([$t17], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t17, $t18], "Filtered", (await $.wv([$t17, $t18], "False", C, false)), C);
      await $.wset([$t17, $t18], "Filter", $.add($.add($.add($.add($.add("(Filial=", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t17, $t18], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (Val_Cod="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t17, $t18], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), ")"), C);
      await $.wset([$t17, $t18], "Filtered", (await $.wv([$t17, $t18], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))), async () => ($.gt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0)))), async () => ((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))))) {
    {
      const $t19 = (await $.v(C, "ExpDataModule"));
      const $t20 = (await $.wv([$t19], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t19, $t20], "Filtered", (await $.wv([$t19, $t20], "False", C, false)), C);
      await $.wset([$t19, $t20], "Filter", $.add($.add($.add($.add($.add("(Filial=", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t19, $t20], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (Amount="), (await $.wcall([$t19, $t20], "CurrToStr", [(await $.mv((await $.wv([$t19, $t20], "CMCurrencyEdit1", C, false)), "Value"))], C))), ")"), C);
      await $.wset([$t19, $t20], "Filtered", (await $.wv([$t19, $t20], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox5")), "Checked"))))))) {
    {
      const $t21 = (await $.v(C, "ExpDataModule"));
      const $t22 = (await $.wv([$t21], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t21, $t22], "Filtered", (await $.wv([$t21, $t22], "False", C, false)), C);
      await $.wset([$t21, $t22], "Filter", $.add($.add($.add("(Filial=", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t21, $t22], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (status=3)"), C);
      await $.wset([$t21, $t22], "Filtered", (await $.wv([$t21, $t22], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox6")), "Checked"))))))) {
    {
      const $t23 = (await $.v(C, "ExpDataModule"));
      const $t24 = (await $.wv([$t23], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t23, $t24], "Filtered", (await $.wv([$t23, $t24], "False", C, false)), C);
      await $.wset([$t23, $t24], "Filter", $.add($.add($.add("(Filial=", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t23, $t24], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (status=2)"), C);
      await $.wset([$t23, $t24], "Filtered", (await $.wv([$t23, $t24], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))))) {
    {
      const $t25 = (await $.v(C, "ExpDataModule"));
      const $t26 = (await $.wv([$t25], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t25, $t26], "Filtered", (await $.wv([$t25, $t26], "False", C, false)), C);
      await $.wset([$t25, $t26], "Filter", $.add($.add($.add($.add($.add("(BFilial=", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t25, $t26], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (Val_Cod="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t25, $t26], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), ")"), C);
      await $.wset([$t25, $t26], "Filtered", (await $.wv([$t25, $t26], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => ($.gt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0)))), async () => ((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))))) {
    {
      const $t27 = (await $.v(C, "ExpDataModule"));
      const $t28 = (await $.wv([$t27], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t27, $t28], "Filtered", (await $.wv([$t27, $t28], "False", C, false)), C);
      await $.wset([$t27, $t28], "Filter", $.add($.add($.add($.add($.add("(BFilial=", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t27, $t28], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (Amount="), (await $.wcall([$t27, $t28], "CurrToStr", [(await $.mv((await $.wv([$t27, $t28], "CMCurrencyEdit1", C, false)), "Value"))], C))), ")"), C);
      await $.wset([$t27, $t28], "Filtered", (await $.wv([$t27, $t28], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox5")), "Checked"))))))) {
    {
      const $t29 = (await $.v(C, "ExpDataModule"));
      const $t30 = (await $.wv([$t29], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t29, $t30], "Filtered", (await $.wv([$t29, $t30], "False", C, false)), C);
      await $.wset([$t29, $t30], "Filter", $.add($.add($.add("(BFilial=", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t29, $t30], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (status=3)"), C);
      await $.wset([$t29, $t30], "Filtered", (await $.wv([$t29, $t30], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox6")), "Checked"))))))) {
    {
      const $t31 = (await $.v(C, "ExpDataModule"));
      const $t32 = (await $.wv([$t31], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t31, $t32], "Filtered", (await $.wv([$t31, $t32], "False", C, false)), C);
      await $.wset([$t31, $t32], "Filter", $.add($.add($.add("(BFilial=", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t31, $t32], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (status=2)"), C);
      await $.wset([$t31, $t32], "Filtered", (await $.wv([$t31, $t32], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ($.gt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0)))), async () => ((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))))) {
    {
      const $t33 = (await $.v(C, "ExpDataModule"));
      const $t34 = (await $.wv([$t33], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t33, $t34], "Filtered", (await $.wv([$t33, $t34], "False", C, false)), C);
      await $.wset([$t33, $t34], "Filter", $.add($.add($.add($.add($.add("(Val_Cod=", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t33, $t34], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), ")"), "and (Amount="), (await $.wcall([$t33, $t34], "CurrToStr", [(await $.mv((await $.wv([$t33, $t34], "CMCurrencyEdit1", C, false)), "Value"))], C))), ")"), C);
      await $.wset([$t33, $t34], "Filtered", (await $.wv([$t33, $t34], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox5")), "Checked"))))))) {
    {
      const $t35 = (await $.v(C, "ExpDataModule"));
      const $t36 = (await $.wv([$t35], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t35, $t36], "Filtered", (await $.wv([$t35, $t36], "False", C, false)), C);
      await $.wset([$t35, $t36], "Filter", $.add($.add($.add("(Val_Cod=", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t35, $t36], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), ")"), "and (status=3)"), C);
      await $.wset([$t35, $t36], "Filtered", (await $.wv([$t35, $t36], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox6")), "Checked"))))))) {
    {
      const $t37 = (await $.v(C, "ExpDataModule"));
      const $t38 = (await $.wv([$t37], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t37, $t38], "Filtered", (await $.wv([$t37, $t38], "False", C, false)), C);
      await $.wset([$t37, $t38], "Filter", $.add($.add($.add("(Val_Cod=", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t37, $t38], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), ")"), "and (status=2)"), C);
      await $.wset([$t37, $t38], "Filtered", (await $.wv([$t37, $t38], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_(($.gt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0)), async () => ((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox5")), "Checked"))))))) {
    {
      const $t39 = (await $.v(C, "ExpDataModule"));
      const $t40 = (await $.wv([$t39], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t39, $t40], "Filtered", (await $.wv([$t39, $t40], "False", C, false)), C);
      await $.wset([$t39, $t40], "Filter", $.add($.add($.add("(Amount=", (await $.wcall([$t39, $t40], "CurrToStr", [(await $.mv((await $.wv([$t39, $t40], "CMCurrencyEdit1", C, false)), "Value"))], C))), ")"), "and (status=3"), C);
      await $.wset([$t39, $t40], "Filtered", (await $.wv([$t39, $t40], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_(($.gt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0)), async () => ((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox6")), "Checked"))))))) {
    {
      const $t41 = (await $.v(C, "ExpDataModule"));
      const $t42 = (await $.wv([$t41], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t41, $t42], "Filtered", (await $.wv([$t41, $t42], "False", C, false)), C);
      await $.wset([$t41, $t42], "Filter", $.add($.add($.add("(Amount=", (await $.wcall([$t41, $t42], "CurrToStr", [(await $.mv((await $.wv([$t41, $t42], "CMCurrencyEdit1", C, false)), "Value"))], C))), ")"), "and (status=2"), C);
      await $.wset([$t41, $t42], "Filtered", (await $.wv([$t41, $t42], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))))) {
    {
      const $t43 = (await $.v(C, "ExpDataModule"));
      const $t44 = (await $.wv([$t43], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t43, $t44], "Filtered", (await $.wv([$t43, $t44], "False", C, false)), C);
      await $.wset([$t43, $t44], "Filter", $.add($.add($.add($.add($.add($.add($.add($.add("(Filial=", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t43, $t44], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (BFilial="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t43, $t44], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (Val_Cod="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t43, $t44], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), ")"), C);
      await $.wset([$t43, $t44], "Filtered", (await $.wv([$t43, $t44], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ($.gt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0)))), async () => ((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))))) {
    {
      const $t45 = (await $.v(C, "ExpDataModule"));
      const $t46 = (await $.wv([$t45], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t45, $t46], "Filtered", (await $.wv([$t45, $t46], "False", C, false)), C);
      await $.wset([$t45, $t46], "Filter", $.add($.add($.add($.add($.add($.add($.add($.add("(Filial= ", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t45, $t46], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (BFilial="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t45, $t46], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (Amount="), (await $.wcall([$t45, $t46], "CurrToStr", [(await $.mv((await $.wv([$t45, $t46], "CMCurrencyEdit1", C, false)), "Value"))], C))), ")"), C);
      await $.wset([$t45, $t46], "Filtered", (await $.wv([$t45, $t46], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox5")), "Checked"))))))) {
    {
      const $t47 = (await $.v(C, "ExpDataModule"));
      const $t48 = (await $.wv([$t47], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t47, $t48], "Filtered", (await $.wv([$t47, $t48], "False", C, false)), C);
      await $.wset([$t47, $t48], "Filter", $.add($.add($.add($.add($.add($.add("(Filial= ", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t47, $t48], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (BFilial="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t47, $t48], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (status=3)"), C);
      await $.wset([$t47, $t48], "Filtered", (await $.wv([$t47, $t48], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox6")), "Checked"))))))) {
    {
      const $t49 = (await $.v(C, "ExpDataModule"));
      const $t50 = (await $.wv([$t49], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t49, $t50], "Filtered", (await $.wv([$t49, $t50], "False", C, false)), C);
      await $.wset([$t49, $t50], "Filter", $.add($.add($.add($.add($.add($.add("(Filial= ", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t49, $t50], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (BFilial="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t49, $t50], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (status=2)"), C);
      await $.wset([$t49, $t50], "Filtered", (await $.wv([$t49, $t50], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ($.gt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0)))), async () => ((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))))) {
    {
      const $t51 = (await $.v(C, "ExpDataModule"));
      const $t52 = (await $.wv([$t51], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t51, $t52], "Filtered", (await $.wv([$t51, $t52], "False", C, false)), C);
      await $.wset([$t51, $t52], "Filter", $.add($.add($.add($.add($.add($.add($.add($.add("(Filial= ", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t51, $t52], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (Val_Cod="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t51, $t52], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), ")"), "and (Amount="), (await $.wcall([$t51, $t52], "CurrToStr", [(await $.mv((await $.wv([$t51, $t52], "CMCurrencyEdit1", C, false)), "Value"))], C))), ")"), C);
      await $.wset([$t51, $t52], "Filtered", (await $.wv([$t51, $t52], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox5")), "Checked"))))))) {
    {
      const $t53 = (await $.v(C, "ExpDataModule"));
      const $t54 = (await $.wv([$t53], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t53, $t54], "Filtered", (await $.wv([$t53, $t54], "False", C, false)), C);
      await $.wset([$t53, $t54], "Filter", $.add($.add($.add($.add($.add($.add("(Filial= ", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t53, $t54], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (Val_Cod="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t53, $t54], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), ")"), "and(status=3)"), C);
      await $.wset([$t53, $t54], "Filtered", (await $.wv([$t53, $t54], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox6")), "Checked"))))))) {
    {
      const $t55 = (await $.v(C, "ExpDataModule"));
      const $t56 = (await $.wv([$t55], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t55, $t56], "Filtered", (await $.wv([$t55, $t56], "False", C, false)), C);
      await $.wset([$t55, $t56], "Filter", $.add($.add($.add($.add($.add($.add("(Filial= ", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t55, $t56], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (Val_Cod="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t55, $t56], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), ")"), "and (status=2)"), C);
      await $.wset([$t55, $t56], "Filtered", (await $.wv([$t55, $t56], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))), async () => ($.gt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0)))), async () => ((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox5")), "Checked"))))))) {
    {
      const $t57 = (await $.v(C, "ExpDataModule"));
      const $t58 = (await $.wv([$t57], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t57, $t58], "Filtered", (await $.wv([$t57, $t58], "False", C, false)), C);
      await $.wset([$t57, $t58], "Filter", $.add($.add($.add($.add($.add($.add("(Filial= ", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t57, $t58], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (Amount="), (await $.wcall([$t57, $t58], "CurrToStr", [(await $.mv((await $.wv([$t57, $t58], "CMCurrencyEdit1", C, false)), "Value"))], C))), ")"), "and (status=3)"), C);
      await $.wset([$t57, $t58], "Filtered", (await $.wv([$t57, $t58], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))), async () => ($.gt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0)))), async () => ((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox6")), "Checked"))))))) {
    {
      const $t59 = (await $.v(C, "ExpDataModule"));
      const $t60 = (await $.wv([$t59], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t59, $t60], "Filtered", (await $.wv([$t59, $t60], "False", C, false)), C);
      await $.wset([$t59, $t60], "Filter", $.add($.add($.add($.add($.add($.add("(Filial= ", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t59, $t60], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (Amount="), (await $.wcall([$t59, $t60], "CurrToStr", [(await $.mv((await $.wv([$t59, $t60], "CMCurrencyEdit1", C, false)), "Value"))], C))), ")"), "and (status=2)"), C);
      await $.wset([$t59, $t60], "Filtered", (await $.wv([$t59, $t60], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ($.gt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0)))), async () => ((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))))) {
    {
      const $t61 = (await $.v(C, "ExpDataModule"));
      const $t62 = (await $.wv([$t61], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t61, $t62], "Filtered", (await $.wv([$t61, $t62], "False", C, false)), C);
      await $.wset([$t61, $t62], "Filter", $.add($.add($.add($.add($.add($.add($.add($.add("(BFilial=", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t61, $t62], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (Val_Cod="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t61, $t62], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), ")"), "and (Amount="), (await $.wcall([$t61, $t62], "CurrToStr", [(await $.mv((await $.wv([$t61, $t62], "CMCurrencyEdit1", C, false)), "Value"))], C))), ")"), C);
      await $.wset([$t61, $t62], "Filtered", (await $.wv([$t61, $t62], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox5")), "Checked"))))))) {
    {
      const $t63 = (await $.v(C, "ExpDataModule"));
      const $t64 = (await $.wv([$t63], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t63, $t64], "Filtered", (await $.wv([$t63, $t64], "False", C, false)), C);
      await $.wset([$t63, $t64], "Filter", $.add($.add($.add($.add($.add($.add("(BFilial=", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t63, $t64], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (Val_Cod="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t63, $t64], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), ")"), "and (status=3)"), C);
      await $.wset([$t63, $t64], "Filtered", (await $.wv([$t63, $t64], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox6")), "Checked"))))))) {
    {
      const $t65 = (await $.v(C, "ExpDataModule"));
      const $t66 = (await $.wv([$t65], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t65, $t66], "Filtered", (await $.wv([$t65, $t66], "False", C, false)), C);
      await $.wset([$t65, $t66], "Filter", $.add($.add($.add($.add($.add($.add("(BFilial=", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t65, $t66], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (Val_Cod="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t65, $t66], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), ")"), "and (status=2)"), C);
      await $.wset([$t65, $t66], "Filtered", (await $.wv([$t65, $t66], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ($.gt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0)))), async () => ((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox5")), "Checked"))))))) {
    {
      const $t67 = (await $.v(C, "ExpDataModule"));
      const $t68 = (await $.wv([$t67], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t67, $t68], "Filtered", (await $.wv([$t67, $t68], "False", C, false)), C);
      await $.wset([$t67, $t68], "Filter", $.add($.add($.add($.add($.add($.add("(Val_Cod=", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t67, $t68], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), ")"), "and (Amount="), (await $.wcall([$t67, $t68], "CurrToStr", [(await $.mv((await $.wv([$t67, $t68], "CMCurrencyEdit1", C, false)), "Value"))], C))), ")"), "and (status=3)"), C);
      await $.wset([$t67, $t68], "Filtered", (await $.wv([$t67, $t68], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ($.gt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0)))), async () => ((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox6")), "Checked"))))))) {
    {
      const $t69 = (await $.v(C, "ExpDataModule"));
      const $t70 = (await $.wv([$t69], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t69, $t70], "Filtered", (await $.wv([$t69, $t70], "False", C, false)), C);
      await $.wset([$t69, $t70], "Filter", $.add($.add($.add($.add($.add($.add("(Val_Cod=", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t69, $t70], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), ")"), "and (Amount="), (await $.wcall([$t69, $t70], "CurrToStr", [(await $.mv((await $.wv([$t69, $t70], "CMCurrencyEdit1", C, false)), "Value"))], C))), ")"), "and (status=2)"), C);
      await $.wset([$t69, $t70], "Filtered", (await $.wv([$t69, $t70], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ($.gt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0)))), async () => ((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))))) {
    {
      const $t71 = (await $.v(C, "ExpDataModule"));
      const $t72 = (await $.wv([$t71], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t71, $t72], "Filtered", (await $.wv([$t71, $t72], "False", C, false)), C);
      await $.wset([$t71, $t72], "Filter", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("(Filial= ", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t71, $t72], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (BFilial="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t71, $t72], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (Val_Cod="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t71, $t72], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), ")"), "and (Amount="), (await $.wcall([$t71, $t72], "CurrToStr", [(await $.mv((await $.wv([$t71, $t72], "CMCurrencyEdit1", C, false)), "Value"))], C))), ")"), C);
      await $.wset([$t71, $t72], "Filtered", (await $.wv([$t71, $t72], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox5")), "Checked"))))))) {
    {
      const $t73 = (await $.v(C, "ExpDataModule"));
      const $t74 = (await $.wv([$t73], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t73, $t74], "Filtered", (await $.wv([$t73, $t74], "False", C, false)), C);
      await $.wset([$t73, $t74], "Filter", $.add($.add($.add($.add($.add($.add($.add($.add($.add("(Filial= ", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t73, $t74], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (BFilial="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t73, $t74], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (Val_Cod="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t73, $t74], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), ")"), "and(status=3)"), C);
      await $.wset([$t73, $t74], "Filtered", (await $.wv([$t73, $t74], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox6")), "Checked"))))))) {
    {
      const $t75 = (await $.v(C, "ExpDataModule"));
      const $t76 = (await $.wv([$t75], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t75, $t76], "Filtered", (await $.wv([$t75, $t76], "False", C, false)), C);
      await $.wset([$t75, $t76], "Filter", $.add($.add($.add($.add($.add($.add($.add($.add($.add("(Filial= ", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t75, $t76], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (BFilial="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t75, $t76], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (Val_Cod="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t75, $t76], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), ")"), "and (status=2)"), C);
      await $.wset([$t75, $t76], "Filtered", (await $.wv([$t75, $t76], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => ($.gt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0)))), async () => ((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox5")), "Checked"))))))) {
    {
      const $t77 = (await $.v(C, "ExpDataModule"));
      const $t78 = (await $.wv([$t77], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t77, $t78], "Filtered", (await $.wv([$t77, $t78], "False", C, false)), C);
      await $.wset([$t77, $t78], "Filter", $.add($.add($.add($.add($.add($.add($.add($.add($.add("(Filial= ", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t77, $t78], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (BFilial="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t77, $t78], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (Amount="), (await $.wcall([$t77, $t78], "CurrToStr", [(await $.mv((await $.wv([$t77, $t78], "CMCurrencyEdit1", C, false)), "Value"))], C))), ")"), "and (status=3)"), C);
      await $.wset([$t77, $t78], "Filtered", (await $.wv([$t77, $t78], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => ($.gt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0)))), async () => ((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox6")), "Checked"))))))) {
    {
      const $t79 = (await $.v(C, "ExpDataModule"));
      const $t80 = (await $.wv([$t79], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t79, $t80], "Filtered", (await $.wv([$t79, $t80], "False", C, false)), C);
      await $.wset([$t79, $t80], "Filter", $.add($.add($.add($.add($.add($.add($.add($.add($.add("(Filial= ", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t79, $t80], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (BFilial="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t79, $t80], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (Amount="), (await $.wcall([$t79, $t80], "CurrToStr", [(await $.mv((await $.wv([$t79, $t80], "CMCurrencyEdit1", C, false)), "Value"))], C))), ")"), "and (status=2)"), C);
      await $.wset([$t79, $t80], "Filtered", (await $.wv([$t79, $t80], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ($.gt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0)))), async () => ((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox5")), "Checked"))))))) {
    {
      const $t81 = (await $.v(C, "ExpDataModule"));
      const $t82 = (await $.wv([$t81], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t81, $t82], "Filtered", (await $.wv([$t81, $t82], "False", C, false)), C);
      await $.wset([$t81, $t82], "Filter", $.add($.add($.add($.add($.add($.add($.add($.add($.add("(Filial= ", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t81, $t82], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (Val_Cod="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t81, $t82], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), ")"), "and (Amount="), (await $.wcall([$t81, $t82], "CurrToStr", [(await $.mv((await $.wv([$t81, $t82], "CMCurrencyEdit1", C, false)), "Value"))], C))), ")"), "and (status=3)"), C);
      await $.wset([$t81, $t82], "Filtered", (await $.wv([$t81, $t82], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ($.gt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0)))), async () => ((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox6")), "Checked"))))))) {
    {
      const $t83 = (await $.v(C, "ExpDataModule"));
      const $t84 = (await $.wv([$t83], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t83, $t84], "Filtered", (await $.wv([$t83, $t84], "False", C, false)), C);
      await $.wset([$t83, $t84], "Filter", $.add($.add($.add($.add($.add($.add($.add($.add($.add("(Filial= ", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t83, $t84], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (Val_Cod="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t83, $t84], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), ")"), "and (Amount="), (await $.wcall([$t83, $t84], "CurrToStr", [(await $.mv((await $.wv([$t83, $t84], "CMCurrencyEdit1", C, false)), "Value"))], C))), ")"), "and (status=2)"), C);
      await $.wset([$t83, $t84], "Filtered", (await $.wv([$t83, $t84], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ($.gt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0)))), async () => ((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox5")), "Checked"))))))) {
    {
      const $t85 = (await $.v(C, "ExpDataModule"));
      const $t86 = (await $.wv([$t85], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t85, $t86], "Filtered", (await $.wv([$t85, $t86], "False", C, false)), C);
      await $.wset([$t85, $t86], "Filter", $.add($.add($.add($.add($.add($.add($.add($.add($.add("(BFilial=", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t85, $t86], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (Val_Cod="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t85, $t86], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), ")"), "and (Amount="), (await $.wcall([$t85, $t86], "CurrToStr", [(await $.mv((await $.wv([$t85, $t86], "CMCurrencyEdit1", C, false)), "Value"))], C))), ")"), "and (status=3)"), C);
      await $.wset([$t85, $t86], "Filtered", (await $.wv([$t85, $t86], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ($.gt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0)))), async () => ((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox6")), "Checked"))))))) {
    {
      const $t87 = (await $.v(C, "ExpDataModule"));
      const $t88 = (await $.wv([$t87], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t87, $t88], "Filtered", (await $.wv([$t87, $t88], "False", C, false)), C);
      await $.wset([$t87, $t88], "Filter", $.add($.add($.add($.add($.add($.add($.add($.add($.add("(BFilial=", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t87, $t88], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (Val_Cod="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t87, $t88], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), ")"), "and(Amount="), (await $.wcall([$t87, $t88], "CurrToStr", [(await $.mv((await $.wv([$t87, $t88], "CMCurrencyEdit1", C, false)), "Value"))], C))), ")"), "and (status=2)"), C);
      await $.wset([$t87, $t88], "Filtered", (await $.wv([$t87, $t88], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ($.gt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0)))), async () => ((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox5")), "Checked"))))))) {
    {
      const $t89 = (await $.v(C, "ExpDataModule"));
      const $t90 = (await $.wv([$t89], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t89, $t90], "Filtered", (await $.wv([$t89, $t90], "False", C, false)), C);
      await $.wset([$t89, $t90], "Filter", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("(Filial= ", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t89, $t90], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and(BFilial="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t89, $t90], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "and (Val_Cod="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t89, $t90], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), ")"), "and (Amount="), (await $.wcall([$t89, $t90], "CurrToStr", [(await $.mv((await $.wv([$t89, $t90], "CMCurrencyEdit1", C, false)), "Value"))], C))), ")"), "and (status=3)"), C);
      await $.wset([$t89, $t90], "Filtered", (await $.wv([$t89, $t90], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ($.gt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0)))), async () => ((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox6")), "Checked"))))))) {
    {
      const $t91 = (await $.v(C, "ExpDataModule"));
      const $t92 = (await $.wv([$t91], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t91, $t92], "Filtered", (await $.wv([$t91, $t92], "False", C, false)), C);
      await $.wset([$t91, $t92], "Filter", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("(Filial= ", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t91, $t92], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "(BFilial="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t91, $t92], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "(Val_Cod="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t91, $t92], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), ")"), "(Amount="), (await $.wcall([$t91, $t92], "CurrToStr", [(await $.mv((await $.wv([$t91, $t92], "CMCurrencyEdit1", C, false)), "Value"))], C))), ")"), "(status=2)"), C);
      await $.wset([$t91, $t92], "Filtered", (await $.wv([$t91, $t92], "true", C, false)), C);
    }
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (-(1)))), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (-(1)))))), async () => ((await $.mv((await $.v(C, "CheckBox3")), "Checked"))))), async () => ($.gt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0)))), async () => ((await $.mv((await $.v(C, "CheckBox4")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox5")), "Checked"))))), async () => ((await $.mv((await $.v(C, "CheckBox6")), "Checked"))))))) {
    {
      const $t93 = (await $.v(C, "ExpDataModule"));
      const $t94 = (await $.wv([$t93], "ExpBatchsArchiveDataSet", C, false));
      await $.wset([$t93, $t94], "Filtered", (await $.wv([$t93, $t94], "False", C, false)), C);
      await $.wset([$t93, $t94], "Filter", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("(Filial= ", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t93, $t94], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "(BFilial="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t93, $t94], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["id"])), "AsString"))), ")"), "(Val_Cod="), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t93, $t94], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["VALUTE"])), "AsString"))), ")"), "(Amount="), (await $.wcall([$t93, $t94], "CurrToStr", [(await $.mv((await $.wv([$t93, $t94], "CMCurrencyEdit1", C, false)), "Value"))], C))), ")"), "(status=3)"), "(status=2)"), C);
      await $.wset([$t93, $t94], "Filtered", (await $.wv([$t93, $t94], "true", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpArchiveForm", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "QuickReportXOrder"))]))))) {
    await $.set(C, "QuickReportXOrder", (await $.mcall((await $.v(C, "TQuickReportXOrder")), "Create", [(await $.v(C, "APPLICATION"))])));
  }
  {
    const $t95 = (await $.v(C, "QuickReportXOrder"));
    const $t96 = (await $.wv([$t95], "ExpDataModule", C, false));
    await $.stmt($.wcall([$t95, $t96], "Preview", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpArchiveForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "bdate", (await $.v(C, "date")));
  await $.set(C, "edate", (await $.v(C, "date")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpArchiveForm", "MdaxilQbzap1Click", async function MdaxilQbzap1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "optype": 0, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["optype"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsArchiveDataSet")), "FieldByName", ["optype"])), "AsInteger"));
  L0["s"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsArchiveDataSet")), "FieldByName", ["kliid"])), "Asstring"));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel38")), "Caption", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsArchiveDataSetFILIALNAME")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel39")), "Caption", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsArchiveDataSetSENDDATE")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel40")), "Caption", (await $.call(C, "TimeToStr", [(await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsArchiveDataSetSENDDATETIME")), "AsDateTime"))])));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel35")), "Caption", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsArchiveDataSetFILIALNAME")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel21")), "Caption", (await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsArchiveDataSetSENDDATE")), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel34")), "Caption", (await $.call(C, "TimeToStr", [(await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsArchiveDataSetSENDDATETIME")), "AsDateTime"))])));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel48")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["inn"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "CreditReport")), "QRLabel50")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "BankInfoDataSet")), "FieldByName", ["inn"])), "AsString")));
  if ($.truthy($.eq(L0["optype"], 4))) {
    {
      const $t97 = (await $.v(C, "ExpDataModule"));
      await $.mcall((await $.wv([$t97], "SendDataSet", C, false)), "close", []);
      { const $t98 = await $.iset((await $.mv((await $.wv([$t97], "SendDataSet", C, false)), "SQL")), [1], ""); if ($t98 !== undefined) { await $.mset((await $.wv([$t97], "SendDataSet", C, false)), "SQL", $t98); } }
      { const $t99 = await $.iset((await $.mv((await $.wv([$t97], "SendDataSet", C, false)), "SQL")), [1], $.add("where id= ", (await $.wv([$t97], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)))); if ($t99 !== undefined) { await $.mset((await $.wv([$t97], "SendDataSet", C, false)), "SQL", $t99); } }
      await $.mcall((await $.wv([$t97], "SendDataSet", C, false)), "open", []);
      await $.mcall((await $.wv([$t97], "AccDataSet", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t97], "AccDataSet", C, false)), "SetVariable", ["id", (await $.mv((await $.wv([$t97], "ExpBatchsArchiveDataSetKREDITACCID", C, false)), "AsInteger"))])));
      await $.mcall((await $.wv([$t97], "AccDataSet", C, false)), "Open", []);
      await $.mset((await $.mv((await $.wv([$t97], "CreditReport", C, false)), "QRLabel2")), "Caption", $.add($.add($.add((await $.mv((await $.mcall((await $.wv([$t97], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["sentname"])), "AsString")), "\r\n"), (await $.mv((await $.mcall((await $.wv([$t97], "SendDataSet", C, false)), "FieldByName", ["passer"])), "AsString"))), (await $.mv((await $.mcall((await $.wv([$t97], "SendDataSet", C, false)), "FieldByName", ["paspnum"])), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t97], "CreditReport", C, false)), "QRLabel4")), "Caption", (await $.mv((await $.wv([$t97], "ExpBatchsArchiveDataSetSENTTONAME", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t97], "CreditReport", C, false)), "QRLabel6")), "Caption", (await $.mv((await $.wv([$t97], "ExpBatchsArchiveDataSetBFILIALNAME", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t97], "CreditReport", C, false)), "QRLabel10")), "Caption", $.add((await $.mv((await $.wv([$t97], "ExpBatchsArchiveDataSetAMOUNT", C, false)), "AsString")), ".00"));
      await $.mset((await $.mv((await $.wv([$t97], "CreditReport", C, false)), "QRLabel11")), "Caption", (await $.mv((await $.mcall((await $.wv([$t97], "AccDataSet", C, false)), "FieldByName", ["acc_no"])), "AsString")));
      await $.mset((await $.mv((await $.wv([$t97], "CreditReport", C, false)), "QRLabel13")), "Caption", (await $.mcall((await $.wv([$t97], "ExpFormNew", C, false)), "Mani", [(await $.mv((await $.wv([$t97], "ExpBatchsArchiveDataSetAMOUNT", C, false)), "AsFloat"))])));
      await $.mset((await $.mv((await $.wv([$t97], "CreditReport", C, false)), "QRLabel15")), "Caption", (await $.mv((await $.wv([$t97], "ExpBatchsArchiveDataSetREMIT_INF", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t97], "CreditReport", C, false)), "QRLabel24")), "Caption", $.add($.add($.add((await $.mv((await $.mcall((await $.wv([$t97], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["sentname"])), "AsString")), "\r\n"), (await $.mv((await $.mcall((await $.wv([$t97], "SendDataSet", C, false)), "FieldByName", ["passer"])), "AsString"))), (await $.mv((await $.mcall((await $.wv([$t97], "SendDataSet", C, false)), "FieldByName", ["paspnum"])), "AsString"))));
      await $.mset((await $.mv((await $.wv([$t97], "CreditReport", C, false)), "QRLabel26")), "Caption", (await $.mv((await $.wv([$t97], "ExpBatchsArchiveDataSetSENTTONAME", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t97], "CreditReport", C, false)), "QRLabel37")), "Caption", (await $.mv((await $.wv([$t97], "ExpBatchsArchiveDataSetBFILIALNAME", C, false)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t97], "CreditReport", C, false)), "QRLabel39")), "Caption", $.add((await $.mv((await $.wv([$t97], "ExpBatchsArchiveDataSetAMOUNT", C, false)), "AsString")), ".00"));
      await $.mset((await $.mv((await $.wv([$t97], "CreditReport", C, false)), "QRLabel29")), "Caption", (await $.mv((await $.mcall((await $.wv([$t97], "AccDataSet", C, false)), "FieldByName", ["acc_no"])), "AsString")));
      await $.mset((await $.mv((await $.wv([$t97], "CreditReport", C, false)), "QRLabel41")), "Caption", (await $.mcall((await $.wv([$t97], "ExpFormNew", C, false)), "Mani", [(await $.mv((await $.wv([$t97], "ExpBatchsArchiveDataSetAMOUNT", C, false)), "AsFloat"))])));
      await $.mset((await $.mv((await $.wv([$t97], "CreditReport", C, false)), "QRLabel43")), "Caption", (await $.mv((await $.wv([$t97], "ExpBatchsArchiveDataSetREMIT_INF", C, false)), "AsString")));
      await $.mcall((await $.wv([$t97], "CreditReport", C, false)), "Preview", []);
    }
  } else {
    return L0.result;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpArchiveForm", "XDBGrid1TitleClick", async function XDBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  {
    const $t100 = (await $.v(C, "ExpDataModule"));
    const $t101 = (await $.wv([$t100], "ExpBatchsDataSet", C, false));
    await $.stmt($.wcall([$t100, $t101], "Close", [], C));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t100, $t101], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "Title")), "MarkerIndex")), 2))) {
      await $.stmt((await $.wcall([$t100, $t101], "SetVariable", ["title", $.add($.add((await $.mv((await $.wv([$t100, $t101], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), " "), "ASC")], C)));
    } else {
      await $.stmt((await $.wcall([$t100, $t101], "SetVariable", ["title", $.add($.add((await $.mv((await $.wv([$t100, $t101], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), " "), "DESC")], C)));
    }
    await $.stmt($.wcall([$t100, $t101], "open", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  return U;
}
