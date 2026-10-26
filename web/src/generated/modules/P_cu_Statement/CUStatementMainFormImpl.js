// Generated from CUStatementMainFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CUStatementMainFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "NLSLocalizer", "ComCtrls", "ExtCtrls", "StdCtrls", "Mask", "DBCtrls", "DBCtrlsEh", "DBLookupEh", "Grids", "DBGridEh", "Menus", "CMExcelExport", "Buttons", "ComObj", "DBGrids", "CUStatementDataModule", "CUCommonDecls", "CURestsHistoryImpl", "CUReportsheduleUnit", "CURepUnit", "CUInterestshistoryImpl", "sbsystem", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TCrdStatementMainForm", "TForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "btnclose": {"name": "BtnClose", "type": "TButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "dbdatetimeediteh2": {"name": "DBDateTimeEditEh2", "type": "TDBDateTimeEditEh"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label5": {"name": "Label5", "type": "TLabel"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "label6": {"name": "Label6", "type": "TLabel"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "label7": {"name": "Label7", "type": "TLabel"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "label8": {"name": "Label8", "type": "TLabel"}, "datetimepickerstart": {"name": "DateTimePickerStart", "type": "TDateTimePicker"}, "label9": {"name": "Label9", "type": "TLabel"}, "datetimepickerend": {"name": "DateTimePickerEnd", "type": "TDateTimePicker"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "rgchoose": {"name": "RGChoose", "type": "TRadioGroup"}, "button1": {"name": "Button1", "type": "TButton"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "popupmenu": {"name": "PopupMenu", "type": "TPopupMenu"}, "repor": {"name": "RepOr", "type": "TMenuItem"}, "popupmenushedule": {"name": "PopupMenuShedule", "type": "TPopupMenu"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "n1": {"name": "N1", "type": "TMenuItem"}, "intlbl": {"name": "IntLbl", "type": "TLabel"}, "image": {"name": "Image", "type": "TImage"}, "labelint": {"name": "LabelInt", "type": "TLabel"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "dtpfullpay": {"name": "DTPFullPay", "type": "TDateTimePicker"}, "edfullpayamt": {"name": "EdFullPayAmt", "type": "TEdit"}, "tabsheet4": {"name": "TabSheet4", "type": "TTabSheet"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "dbgrideh3": {"name": "DBGridEh3", "type": "TDBGridEh"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "dbgrideh4": {"name": "DBGridEh4", "type": "TDBGridEh"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "eexport": {"name": "EExport", "type": "TCMExcelExport"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "speedbutton5": {"name": "SpeedButton5", "type": "TSpeedButton"}, "tabsheet5": {"name": "TabSheet5", "type": "TTabSheet"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "speedbutton6": {"name": "SpeedButton6", "type": "TSpeedButton"}, "speedbutton7": {"name": "SpeedButton7", "type": "TSpeedButton"}}, {});
  U.init(async () => {
    U.var_("CrdStatementMainForm", null, "TCrdStatementMainForm");
    U.var_("Exl", null, "Variant");
    U.var_("Sheet", null, "Variant");
  });
  U.method("TCrdStatementMainForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined, "creditid": 0, "creditno": ''};
  await $.fixArgs(L0, ["s"]);
  L0["rsminecaption"] = "%s № li kreditdən \"çıxarış\" .";
  L0["creditid"] = (await $.v(C, "Get_SelectedCrdID"));
  L0["creditno"] = (await $.v(C, "Get_SelectedCrdNo"));
  await $.mset((await $.v(C, "CrdStatementMainForm")), "Caption", (await $.call(C, "Format", [L0["rsminecaption"], [L0["creditno"]]])));
  await $.mset((await $.mv((await $.v(C, "CrdStatementMainForm")), "DateTimePickerStart")), "Date", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.mv((await $.v(C, "CrdStatementMainForm")), "DateTimePickerEnd")), "Date", (await $.v(C, "Get_CurrentDate")));
  {
    const $t1 = (await $.v(C, "StatementDataMod"));
    {
      const $t2 = (await $.wv([$t1], "CreditsInfo", C, false));
      if ($.truthy((await $.wv([$t1, $t2], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t2], "Close", [], C));
      }
      await $.stmt($.wcall([$t1, $t2], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["CRDID", (await $.wv([$t1, $t2], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    }
    {
      const $t3 = (await $.wv([$t1], "DataSet", C, false));
      if ($.truthy((await $.wv([$t1, $t3], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t3], "Close", [], C));
      }
      await $.stmt($.wcall([$t1, $t3], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t1, $t3], "SetVariable", ["id", (await $.wv([$t1, $t3], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t3], "Open", [], C));
    }
    {
      const $t4 = (await $.wv([$t1], "DefIntDatSet", C, false));
      if ($.truthy((await $.wv([$t1, $t4], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t4], "Close", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t4], "SetVariable", ["CrdID", (await $.wv([$t1, $t4], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t4], "Open", [], C));
      if ($.truthy(($.ne((await $.wcall([$t1, $t4], "integer", [(await $.wcall([$t1, $t4], "trunc", [(await $.mv((await $.wcall([$t1, $t4], "FieldByName", ["StopCalcDate"], C)), "AsDateTime"))], C))], C)), 0)))) {
        {
          const $t5 = (await $.wv([$t1, $t4], "CrdStatementMainForm", C, false));
          await $.mset((await $.wv([$t1, $t4, $t5], "LabelInt", C, false)), "Caption", $.add($.add("faizlərin hesablanması  ", (await $.wcall([$t1, $t4, $t5], "DateToStr", [(await $.mv((await $.wcall([$t1, $t4, $t5], "FieldByName", ["StopCalcDate"], C)), "AsDateTime"))], C))), "  tarixdən dayandırlıb."));
          await $.mset((await $.wv([$t1, $t4, $t5], "Image", C, false)), "Enabled", (await $.wv([$t1, $t4, $t5], "True", C, false)));
        }
      } else {
        {
          const $t6 = (await $.wv([$t1, $t4], "CrdStatementMainForm", C, false));
          await $.mset((await $.wv([$t1, $t4, $t6], "LabelInt", C, false)), "Caption", "");
          await $.mset((await $.wv([$t1, $t4, $t6], "Image", C, false)), "Visible", (await $.wv([$t1, $t4, $t6], "False", C, false)));
        }
      }
    }
    {
      const $t7 = (await $.wv([$t1], "CreditTypes", C, false));
      if ($.truthy($.not((await $.wv([$t1, $t7], "Active", C, false))))) {
        await $.stmt($.wcall([$t1, $t7], "Open", [], C));
      }
    }
    {
      const $t8 = (await $.wv([$t1], "Categories", C, false));
      if ($.truthy($.not((await $.wv([$t1, $t8], "Active", C, false))))) {
        await $.stmt($.wcall([$t1, $t8], "Open", [], C));
      }
    }
    {
      const $t9 = (await $.wv([$t1], "UserGroups", C, false));
      if ($.truthy($.not((await $.wv([$t1, $t9], "Active", C, false))))) {
        await $.stmt($.wcall([$t1, $t9], "Open", [], C));
      }
    }
    {
      const $t10 = (await $.wv([$t1], "Schedule", C, false));
      if ($.truthy((await $.wv([$t1, $t10], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t10], "Close", [], C));
      }
      await $.stmt($.wcall([$t1, $t10], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t1, $t10], "SetVariable", ["CRDID", (await $.wv([$t1, $t10], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t10], "Open", [], C));
    }
    {
      const $t11 = (await $.wv([$t1], "Payments", C, false));
      if ($.truthy((await $.wv([$t1, $t11], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t11], "Close", [], C));
      }
      await $.stmt($.wcall([$t1, $t11], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t1, $t11], "SetVariable", ["CRDID", (await $.wv([$t1, $t11], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t11], "Open", [], C));
    }
    {
      const $t12 = (await $.wv([$t1], "Tranches", C, false));
      if ($.truthy((await $.wv([$t1, $t12], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t12], "CloseAll", [], C));
      }
      await $.stmt($.wcall([$t1, $t12], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t1, $t12], "SetVariable", ["CrdID", (await $.wv([$t1, $t12], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t12], "Open", [], C));
    }
    {
      const $t13 = (await $.wv([$t1], "ProlongationDataSet", C, false));
      if ($.truthy((await $.wv([$t1, $t13], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t13], "CloseAll", [], C));
      }
      await $.stmt($.wcall([$t1, $t13], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t1, $t13], "SetVariable", ["CrdID", (await $.wv([$t1, $t13], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t13], "Open", [], C));
    }
    {
      const $t14 = (await $.wv([$t1], "cust", C, false));
      if ($.truthy((await $.wv([$t1, $t14], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t14], "CloseAll", [], C));
      }
      await $.stmt($.wcall([$t1, $t14], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t1, $t14], "SetVariable", ["id", (await $.wv([$t1, $t14], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t14], "Open", [], C));
    }
  }
  await $.mcall((await $.v(C, "CrdStatementMainForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TCrdStatementMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "StatementDataMod", (await $.mcall((await $.v(C, "TStatementDataMod")), "Create", [Self])));
  await $.set(C, "ReportForm", (await $.mcall((await $.v(C, "TReportForm")), "Create", [Self])));
  await $.set(C, "RestForm", (await $.mcall((await $.v(C, "TRestForm")), "Create", [Self])));
  await $.set(C, "InterestsForm", (await $.mcall((await $.v(C, "TInterestsForm")), "Create", [Self])));
  await $.set(C, "ReportSheduleForm", (await $.mcall((await $.v(C, "TReportSheduleForm")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCrdStatementMainForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "RestForm")), "Free", []);
  await $.mcall((await $.v(C, "InterestsForm")), "Free", []);
  await $.mcall((await $.v(C, "ReportSheduleForm")), "Free", []);
  await $.mcall((await $.v(C, "ReportForm")), "Free", []);
  await $.mcall((await $.v(C, "StatementDataMod")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCrdStatementMainForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCrdStatementMainForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "creditid": 0, "d1": 0, "d2": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["showinterestsform"] = $.fn(async function ShowInterestsForm(p0, p1, p2) {
  const L1 = {"crdid": $.copyArg(p0), "d1": $.copyArg(p1), "d2": $.copyArg(p2), result: undefined};
  await $.fixArgs(L1, ["crdid", "d1", "d2"]);
  {
    const $t15 = (await $.mv((await $.v(C, "StatementDataMod")), "IntrInPeriod"));
    await $.stmt($.wcall([$t15], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t15], "SetVariable", ["CrdID", (await $.wv([$t15], "CrdID", { get: async () => L1["crdid"], set: async (v) => { L1["crdid"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t15], "SetVariable", ["D1", (await $.wv([$t15], "D1", { get: async () => L1["d1"], set: async (v) => { L1["d1"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t15], "SetVariable", ["D2", (await $.wv([$t15], "D2", { get: async () => L1["d2"], set: async (v) => { L1["d2"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t15], "Open", [], C));
  }
  {
    const $t16 = (await $.v(C, "InterestsForm"));
    await $.stmt($.wcall([$t16], "ShowModal", [], C));
  }
  {
    const $t17 = (await $.mv((await $.v(C, "StatementDataMod")), "IntrInPeriod"));
    await $.stmt($.wcall([$t17], "Close", [], C));
  }
  return L1.result;
});
  L0["showrestform"] = $.fn(async function ShowRestForm(p0, p1, p2) {
  const L1 = {"crdid": $.copyArg(p0), "d1": $.copyArg(p1), "d2": $.copyArg(p2), result: undefined};
  await $.fixArgs(L1, ["crdid", "d1", "d2"]);
  {
    const $t18 = (await $.mv((await $.v(C, "StatementDataMod")), "RestsInPeriod"));
    await $.stmt($.wcall([$t18], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t18], "SetVariable", ["CrdID", (await $.wv([$t18], "CrdID", { get: async () => L1["crdid"], set: async (v) => { L1["crdid"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t18], "SetVariable", ["D1", (await $.wv([$t18], "D1", { get: async () => L1["d1"], set: async (v) => { L1["d1"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t18], "SetVariable", ["D2", (await $.wv([$t18], "D2", { get: async () => L1["d2"], set: async (v) => { L1["d2"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t18], "Open", [], C));
  }
  {
    const $t19 = (await $.v(C, "RestForm"));
    await $.stmt($.wcall([$t19], "ShowModal", [], C));
  }
  {
    const $t20 = (await $.mv((await $.v(C, "StatementDataMod")), "RestsInPeriod"));
    await $.stmt($.wcall([$t20], "Close", [], C));
  }
  return L1.result;
});
  L0["creditid"] = (await $.v(C, "Get_SelectedCrdID"));
  L0["d1"] = (await $.mv((await $.v(C, "DateTimePickerStart")), "Date"));
  L0["d2"] = (await $.mv((await $.v(C, "DateTimePickerEnd")), "Date"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "RGChoose")), "ItemIndex")), 1))) {
    await $.stmt((await $.callv(L0["showrestform"], [L0["creditid"], L0["d1"], L0["d2"]])));
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "RGChoose")), "ItemIndex")), 1))) {
    await $.stmt((await $.callv(L0["showinterestsform"], [L0["creditid"], L0["d1"], L0["d2"]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCrdStatementMainForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t21 = (await $.v(C, "StatementDataMod"));
    {
      const $t22 = (await $.wv([$t21], "Payments", C, false));
      await $.stmt($.wcall([$t21, $t22], "Close", [], C));
    }
    {
      const $t23 = (await $.wv([$t21], "Schedule", C, false));
      await $.stmt($.wcall([$t21, $t23], "Close", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TCrdStatementMainForm", "RepOrClick", async function RepOrClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "creditno": '', "creditid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["creditno"] = (await $.v(C, "Get_SelectedCrdNo"));
  L0["creditid"] = (await $.v(C, "Get_SelectedCrdId"));
  {
    const $t24 = (await $.v(C, "StatementDataMod"));
    {
      const $t25 = (await $.wv([$t24], "ReportDataSet", C, false));
      if ($.truthy((await $.wv([$t24, $t25], "Active", C, false)))) {
        await $.stmt($.wcall([$t24, $t25], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t24, $t25], "SetVariable", ["CRDID", (await $.wv([$t24, $t25], "CreditId", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t24, $t25], "Open", [], C));
      if ($.truthy(((await $.mv((await $.wcall([$t24, $t25], "FieldByName", ["LOANACCACCNO"], C)), "IsNull"))))) {
        await $.mset((await $.wcall([$t24, $t25], "FieldByName", ["LOANACCACCNO"], C)), "AsString", "0");
      }
      if ($.truthy(((await $.mv((await $.wcall([$t24, $t25], "FieldByName", ["INTERESTACCCNO"], C)), "IsNull"))))) {
        await $.mset((await $.wcall([$t24, $t25], "FieldByName", ["INTERESTACCCNO"], C)), "AsString", "0");
      }
      if ($.truthy(((await $.mv((await $.wcall([$t24, $t25], "FieldByName", ["DUELOANACCNO"], C)), "IsNull"))))) {
        await $.mset((await $.wcall([$t24, $t25], "FieldByName", ["DUELOANACCNO"], C)), "AsString", "0");
      }
      if ($.truthy(((await $.mv((await $.wcall([$t24, $t25], "FieldByName", ["DUEINTERESTACCNO"], C)), "IsNull"))))) {
        await $.mset((await $.wcall([$t24, $t25], "FieldByName", ["DUEINTERESTACCNO"], C)), "AsString", "0");
      }
    }
  }
  {
    const $t26 = (await $.v(C, "StatementDataMod"));
    const $t27 = (await $.wv([$t26], "ReportForm", C, false));
    await $.mset((await $.wv([$t26, $t27], "FacticalDebtChild", C, false)), "Enabled", $.ne((await $.mv((await $.mcall((await $.wv([$t26, $t27], "Payments", C, false)), "FieldByName", ["PAYEDAMT"])), "AsFloat")), 0));
    await $.mset((await $.wv([$t26, $t27], "FacticalInterestDebtChild", C, false)), "Enabled", $.ne((await $.mv((await $.mcall((await $.wv([$t26, $t27], "Payments", C, false)), "FieldByName", ["PAYEDINTAMT"])), "AsFloat")), 0));
    await $.mset((await $.wv([$t26, $t27], "OverdueDebtChild", C, false)), "Enabled", $.ne((await $.mv((await $.mcall((await $.wv([$t26, $t27], "Payments", C, false)), "FieldByName", ["PAYEDDUEAMT"])), "AsFloat")), 0));
    await $.mset((await $.wv([$t26, $t27], "QRLVoen", C, false)), "Enabled", $.ne((await $.mv((await $.mcall((await $.wv([$t26, $t27], "ReportDataSet", C, false)), "FieldByName", ["INN"])), "AsFloat")), 0));
    await $.mset((await $.wv([$t26, $t27], "OverdueInterestDebtChild", C, false)), "Enabled", $.ne((await $.mv((await $.mcall((await $.wv([$t26, $t27], "Payments", C, false)), "FieldByName", ["PAYEDPENALTYAMT"])), "AsFloat")), 0));
    await $.mset((await $.wv([$t26, $t27], "QRLContractno", C, false)), "Caption", (await $.wv([$t26, $t27], "CreditNo", { get: async () => L0["creditno"], set: async (v) => { L0["creditno"] = v; }, local: true }, false)));
    await $.mcall((await $.wv([$t26, $t27], "ReportOrder", C, false)), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCrdStatementMainForm", "RepOrDrawItem", async function RepOrDrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t28 = L0["acanvas"];
    const $t29 = (await $.wv([$t28], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t30 = (await $.wv([$t28, $t29], "Font", C, false));
      await $.wset([$t28, $t29, $t30], "Name", "Azl Sans Serif", C);
      await $.wset([$t28, $t29, $t30], "Charset", (await $.wv([$t28, $t29, $t30], "RUSSIAN_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t28, $t29, $t30], "Default", C, false)))) {
        await $.wset([$t28, $t29, $t30], "Style", [(await $.wv([$t28, $t29, $t30], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t28, $t29], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t28, $t29], "Pen", C, false)), "Color", (await $.wv([$t28, $t29], "clBlack", C, false)));
      await $.wset([$t28, $t29], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t28, $t29], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t28, $t29], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t28, $t29], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t28, $t29], "MoveTo", [(await $.mv((await $.wv([$t28, $t29], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t28, $t29], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t28, $t29], "LineTo", [(await $.mv((await $.wv([$t28, $t29], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t28, $t29], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t28, $t29], "inc", [$.ref(async () => (await $.wv([$t28, $t29], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t31) => { await $.wset([$t28, $t29], "LineBottom", $t31, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t28, $t29], "Pen", C, false)), "Color", (await $.wv([$t28, $t29], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t28, $t29], "MoveTo", [(await $.mv((await $.wv([$t28, $t29], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t28, $t29], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t28, $t29], "LineTo", [(await $.mv((await $.wv([$t28, $t29], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t28, $t29], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t28, $t29], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t28, $t29], "Brush", C, false)), "Color", (await $.wv([$t28, $t29], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t28, $t29], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t28, $t29], "Font", C, false)), "Color", (await $.wv([$t28, $t29], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t28, $t29], "Font", C, false)), "Color", (await $.wv([$t28, $t29], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t28, $t29], "Brush", C, false)), "Color", (await $.wv([$t28, $t29], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t28, $t29], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t28, $t29], "Font", C, false)), "Color", (await $.wv([$t28, $t29], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t28, $t29], "Font", C, false)), "Color", (await $.wv([$t28, $t29], "clGrayText", C, false)));
        }
      }
      await $.wset([$t28, $t29], "Bar", (await $.wv([$t28, $t29], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t28, $t29], "FillRect", [(await $.wv([$t28, $t29], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t28, $t29], "TextOut", [$.add((await $.mv((await $.wv([$t28, $t29], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 2), $.add((await $.mv((await $.wv([$t28, $t29], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t28, $t29], "Caption", C, false))], C)));
    }
    await $.wset([$t28, $t29], "SText", (await $.wcall([$t28, $t29], "ShortCutToText", [(await $.wv([$t28, $t29], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t28, $t29], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t28, $t29], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t28, $t29], "TextWidth", [(await $.wv([$t28, $t29], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t28, $t29], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t28, $t29], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t28, $t29], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t32 = (await $.wv([$t28, $t29], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t28, $t29, $t32], "Assigned", [(await $.wv([$t28, $t29, $t32], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t28, $t29, $t32], "Checked", C, false)))) {
            await $.mset((await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t28, $t29, $t32], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t28, $t29, $t32], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t28, $t29, $t32], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t28, $t29, $t32], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t28, $t29, $t32], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t28, $t29, $t32], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t33) => { await $.mset((await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t33); }), 2], C)));
            await $.stmt((await $.wcall([$t28, $t29, $t32], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t34) => { await $.mset((await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t34); }), 2], C)));
            await $.stmt((await $.wcall([$t28, $t29, $t32], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t35) => { await $.mset((await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t35); }), 2], C)));
            await $.stmt((await $.wcall([$t28, $t29, $t32], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t36) => { await $.mset((await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t36); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t28, $t29, $t32], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t28, $t29, $t32], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t28, $t29, $t32], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t28, $t29, $t32], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t37) => { await $.mset((await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t37); }), 1], C)));
            await $.stmt((await $.wcall([$t28, $t29, $t32], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t38) => { await $.mset((await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t38); }), 1], C)));
            await $.stmt((await $.wcall([$t28, $t29, $t32], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t39) => { await $.mset((await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t39); }), 1], C)));
            await $.stmt((await $.wcall([$t28, $t29, $t32], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t40) => { await $.mset((await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t40); }), 1], C)));
            if ($.truthy((await $.wv([$t28, $t29, $t32], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t28, $t29, $t32], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t28, $t29, $t32], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t28, $t29, $t32], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t28, $t29, $t32], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t28, $t29, $t32], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t28, $t29, $t32], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t28, $t29, $t32], "Images", C, false)), "Draw", [(await $.wv([$t28, $t29, $t32], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t28, $t29, $t32], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t28, $t29, $t32], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t28, $t29, $t32], "ImageIndex", C, false)), (await $.wv([$t28, $t29, $t32], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TCrdStatementMainForm", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "creditid": 0, "creditno": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["creditno"] = (await $.v(C, "Get_SelectedCrdNo"));
  L0["creditid"] = (await $.v(C, "Get_SelectedCrdId"));
  {
    const $t41 = (await $.v(C, "StatementDataMod"));
    {
      const $t42 = (await $.wv([$t41], "ReportDataSet", C, false));
      if ($.truthy((await $.wv([$t41, $t42], "Active", C, false)))) {
        await $.stmt($.wcall([$t41, $t42], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t41, $t42], "SetVariable", ["CRDID", (await $.wv([$t41, $t42], "CreditId", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t41, $t42], "Open", [], C));
      if ($.truthy(((await $.mv((await $.wcall([$t41, $t42], "FieldByName", ["LOANACCACCNO"], C)), "IsNull"))))) {
        await $.mset((await $.wcall([$t41, $t42], "FieldByName", ["LOANACCACCNO"], C)), "AsString", "0");
      }
    }
  }
  {
    const $t43 = (await $.v(C, "StatementDataMod"));
    const $t44 = (await $.wv([$t43], "ReportSheduleForm", C, false));
    await $.mset((await $.wv([$t43, $t44], "FacticalDebtChild1", C, false)), "Enabled", $.ne((await $.mv((await $.mcall((await $.wv([$t43, $t44], "Tranches", C, false)), "FieldByName", ["trancheamount"])), "AsFloat")), 0));
    await $.mset((await $.wv([$t43, $t44], "QRLVoen1", C, false)), "Enabled", $.ne((await $.mv((await $.mcall((await $.wv([$t43, $t44], "ReportDataSet", C, false)), "FieldByName", ["INN"])), "AsFloat")), 0));
    await $.mset((await $.wv([$t43, $t44], "QRLContractno1", C, false)), "Caption", (await $.wv([$t43, $t44], "CreditNo", { get: async () => L0["creditno"], set: async (v) => { L0["creditno"] = v; }, local: true }, false)));
    await $.mcall((await $.wv([$t43, $t44], "QuickRepTR", C, false)), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCrdStatementMainForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTPFullPay")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  {
    const $t45 = (await $.v(C, "StatementDataMod"));
    const $t46 = (await $.wv([$t45], "CM_AK_REPORTS", C, false));
    await $.mset((await $.wv([$t45, $t46], "EdFullPayAmt", C, false)), "Text", (await $.wcall([$t45, $t46], "FloatToStr", [(await $.wcall([$t45, $t46], "CallFloatFunction", ["Get_CreditFullPayAmt", [(await $.wv([$t45, $t46], "Get_SelectedCrdID", C, false)), (await $.wv([$t45, $t46], "Get_CurrentDate", C, false))]], C))], C)));
  }
  await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCrdStatementMainForm", "DTPFullPayChange", async function DTPFullPayChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "paydat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["paydat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPFullPay")), "DateTime"))]))]));
  {
    const $t47 = (await $.v(C, "StatementDataMod"));
    const $t48 = (await $.wv([$t47], "CM_AK_REPORTS", C, false));
    await $.mset((await $.wv([$t47, $t48], "EdFullPayAmt", C, false)), "Text", (await $.wcall([$t47, $t48], "FloatToStr", [(await $.wcall([$t47, $t48], "CallFloatFunction", ["Get_CreditFullPayAmt", [(await $.wv([$t47, $t48], "Get_SelectedCrdID", C, false)), (await $.wv([$t47, $t48], "PayDat", { get: async () => L0["paydat"], set: async (v) => { L0["paydat"] = v; }, local: true }, false))]], C))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCrdStatementMainForm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "restsstr": '', "chpaystr": '', "additionalparams": '', "filterstr": '', "checkstr": '', "sysdat": 0, "s": 0, "l": 0, "cell": 0, "r": 0, "i": 0, "j": 0, "k": 0, "m": 0, "w": 0, "tt": 0, "dat": 0, "dd": 0, "rc": 0, "t_val": 0, "bash": '', "ll": 0, "vv": 0, "ss": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["number_format"] = "#,##0.00";
  L0["number_format_r"] = "#,##0.00%";
  L0["n"] = "yyy";
  L0["d"] = 2;
  L0["f"] = 3;
  L0["createsheet"] = $.fn(async function CreateSheet() {
  const L1 = {result: undefined};
  try {
    await $.set(C, "Exl", (await $.call(C, "CreateOleObject", ["Excel.Application"])));
    await $.mcall((await $.mv((await $.v(C, "Exl")), "WorkBooks")), "add", []);
    await $.set(C, "Sheet", (await $.idx((await $.mv((await $.mv((await $.mv((await $.v(C, "Exl")), "Application")), "Worksheets")), "Item")), [1])));
  } catch ($t49) {
    $.rethrowControl($t49);
    $.handled($t49);
  }
  return L1.result;
});
  L0["destroysheet"] = $.fn(async function DestroySheet() {
  const L1 = {result: undefined};
  try {
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Sheet"))])));
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Exl"))])));
  } catch ($t50) {
    $.rethrowControl($t50);
    $.handled($t50);
  }
  return L1.result;
});
  L0["showsheet"] = $.fn(async function ShowSheet() {
  const L1 = {result: undefined};
  try {
    await $.mset((await $.v(C, "Exl")), "Visible", true);
  } catch ($t51) {
    $.rethrowControl($t51);
    $.handled($t51);
    await $.stmt($.callv(L0["destroysheet"], []));
  }
  return L1.result;
});
  await $.stmt($.callv(L0["createsheet"], []));
  try {
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["A1:A60000"])), "ColumnWidth", 10);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["B1:B60000"])), "ColumnWidth", 15);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["C1:C60000"])), "ColumnWidth", 15);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["D1:D60000"])), "ColumnWidth", 15);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["E1:E60000"])), "ColumnWidth", 15);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["F1:F60000"])), "ColumnWidth", 35);
    { const $t52 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5], "NBC-Bank"); if ($t52 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t52); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "Color", (await $.v(C, "clolive")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "size", 22);
    L0["k"] = 7;
    L0["i"] = 0;
    { const $t53 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 3), 1], "Ödəməlidir "); if ($t53 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t53); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 1])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 1])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 1])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 1])), "Font")), "size", 13);
    { const $t54 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 3], " Müqavilənin № si:"); if ($t54 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t54); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "size", 13);
    { const $t55 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 4], $.add(" ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "cust")), "FieldByName", ["numberofcredit"])), "asstring")))); if ($t55 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t55); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 4])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 4])), "Font")), "Color", (await $.v(C, "clblack")));
    { const $t56 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 5], " Borcalanın adı:"); if ($t56 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t56); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 5])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 5])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 5])), "Font")), "size", 13);
    { const $t57 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 6], (await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "cust")), "FieldByName", ["name"])), "asstring"))); if ($t57 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t57); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 6])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 6])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 6])), "Font")), "Color", (await $.v(C, "clblack")));
    { const $t58 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1], "Sıra №"); if ($t58 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t58); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Value", " Tarix");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Value", " Əsas borcdan");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t59 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4], " Hesablanmış % dən"); if ($t59 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t59); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t60 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5], " Cəmi"); if ($t60 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t60); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "Schedule")), "first", []);
    await $.stmt($.callv(L0["showsheet"], []));
    L0["ss"] = 0;
    L0["vv"] = 0;
    L0["rc"] = (await $.mv((await $.mv((await $.v(C, "StatementDataMod")), "Schedule")), "RecordCount"));
    { const $t61 = L0["rc"];
      L0["i"] = 1;
      let $t62 = true;
      for (;;) {
        if (!$t62) { L0["i"] = $.succ(L0["i"], 1); }
        $t62 = false;
        if (!($.ord(L0["i"]) <= $.ord($t61))) break;
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Bold", true);
        { const $t63 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "Schedule")), "FieldByName", ["sira"])), "asinteger"))); if ($t63 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t63); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Bold", true);
        { const $t64 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "Schedule")), "FieldByName", ["PAYMENTDATE"])), "asdatetime"))); if ($t64 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t64); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Bold", true);
        { const $t65 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "Schedule")), "FieldByName", ["principal"])), "asfloat"))); if ($t65 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t65); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Bold", true);
        { const $t66 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "Schedule")), "FieldByName", ["interest"])), "asfloat"))); if ($t66 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t66); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Bold", true);
        { const $t67 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5], (await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "Schedule")), "FieldByName", ["sm"])), "asfloat"))); if ($t67 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t67); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Color", (await $.v(C, "clred")));
        L0["ss"] = $.add(L0["ss"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "Schedule")), "FieldByName", ["principal"])), "asfloat")));
        L0["vv"] = $.add(L0["vv"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "Schedule")), "FieldByName", ["interest"])), "asfloat")));
        L0["ll"] = $.add(L0["ll"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "Schedule")), "FieldByName", ["sm"])), "asfloat")));
        await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "Schedule")), "Next", []);
        await $.tick();
      }
    }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1])), "Font")), "Bold", true);
    { const $t68 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1], "Cəm"); if ($t68 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t68); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1])), "Font")), "Color", (await $.v(C, "clGreen")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 3])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 3])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t69 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 3], L0["ss"]); if ($t69 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t69); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 4])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 4])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t70 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 4], L0["vv"]); if ($t70 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t70); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 5])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 5])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t71 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 5], L0["ll"]); if ($t71 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t71); } }
    L0["bash"] = (await $.call(C, "inttostr", [$.add(L0["k"], 1)]));
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), [$.add($.add($.add("A", L0["bash"]), ":E"), (await $.call(C, "inttostr", [$.add($.add(L0["m"], L0["k"]), 1)])))])), "select", []);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), [$.add($.add($.add("A", L0["bash"]), ":E"), (await $.call(C, "inttostr", [$.add($.add(L0["m"], L0["k"]), 1)])))])), "Borders")), "Color", (await $.v(C, "clBlack")));
  } finally {
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), ["A1:A1"])), "Select", []);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.stmt($.callv(L0["destroysheet"], []));
    await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "Schedule")), "EnableControls", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCrdStatementMainForm", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "restsstr": '', "chpaystr": '', "additionalparams": '', "filterstr": '', "checkstr": '', "sysdat": 0, "s": 0, "l": 0, "cell": 0, "r": 0, "i": 0, "j": 0, "k": 0, "m": 0, "w": 0, "tt": 0, "dat": 0, "dd": 0, "rc": 0, "t_val": 0, "bash": '', "ll": 0, "vv": 0, "ss": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["number_format"] = "#,##0.00";
  L0["number_format_r"] = "#,##0.00%";
  L0["n"] = "yyy";
  L0["d"] = 2;
  L0["f"] = 3;
  L0["createsheet"] = $.fn(async function CreateSheet() {
  const L1 = {result: undefined};
  try {
    await $.set(C, "Exl", (await $.call(C, "CreateOleObject", ["Excel.Application"])));
    await $.mcall((await $.mv((await $.v(C, "Exl")), "WorkBooks")), "add", []);
    await $.set(C, "Sheet", (await $.idx((await $.mv((await $.mv((await $.mv((await $.v(C, "Exl")), "Application")), "Worksheets")), "Item")), [1])));
  } catch ($t72) {
    $.rethrowControl($t72);
    $.handled($t72);
  }
  return L1.result;
});
  L0["destroysheet"] = $.fn(async function DestroySheet() {
  const L1 = {result: undefined};
  try {
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Sheet"))])));
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Exl"))])));
  } catch ($t73) {
    $.rethrowControl($t73);
    $.handled($t73);
  }
  return L1.result;
});
  L0["showsheet"] = $.fn(async function ShowSheet() {
  const L1 = {result: undefined};
  try {
    await $.mset((await $.v(C, "Exl")), "Visible", true);
  } catch ($t74) {
    $.rethrowControl($t74);
    $.handled($t74);
    await $.stmt($.callv(L0["destroysheet"], []));
  }
  return L1.result;
});
  await $.stmt($.callv(L0["createsheet"], []));
  try {
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["A1:A60000"])), "ColumnWidth", 10);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["B1:B60000"])), "ColumnWidth", 15);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["C1:C60000"])), "ColumnWidth", 15);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["D1:D60000"])), "ColumnWidth", 15);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["E1:E60000"])), "ColumnWidth", 15);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["F1:F60000"])), "ColumnWidth", 35);
    { const $t75 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5], "NBC-Bank"); if ($t75 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t75); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "Color", (await $.v(C, "clolive")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "size", 22);
    L0["k"] = 7;
    L0["i"] = 0;
    { const $t76 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 3), 1], "Ödəmişdir "); if ($t76 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t76); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 1])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 1])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 1])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 1])), "Font")), "size", 13);
    { const $t77 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 3], " Müqavilənin № si:"); if ($t77 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t77); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "size", 13);
    { const $t78 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 4], $.add(" ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "cust")), "FieldByName", ["numberofcredit"])), "asstring")))); if ($t78 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t78); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 4])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 4])), "Font")), "Color", (await $.v(C, "clblack")));
    { const $t79 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 5], " Borcalanın adı:"); if ($t79 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t79); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 5])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 5])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 5])), "Font")), "size", 13);
    { const $t80 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 6], (await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "cust")), "FieldByName", ["name"])), "asstring"))); if ($t80 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t80); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 6])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 6])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 6])), "Font")), "Color", (await $.v(C, "clblack")));
    { const $t81 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1], "Sıra №"); if ($t81 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t81); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Value", " Tarix");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Value", " Əsas borucdan");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t82 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4], "Əsas borc. faizdən"); if ($t82 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t82); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t83 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5], " Gecikmiş borcdan"); if ($t83 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t83); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t84 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6], " Gecikmiş B faizdən"); if ($t84 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t84); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t85 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7], " Cəmi"); if ($t85 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t85); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Color", (await $.v(C, "clred")));
    L0["ss"] = 0;
    L0["vv"] = 0;
    await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "Payments")), "first", []);
    L0["rc"] = (await $.mv((await $.mv((await $.v(C, "StatementDataMod")), "Payments")), "RecordCount"));
    await $.stmt($.callv(L0["showsheet"], []));
    { const $t86 = L0["rc"];
      L0["i"] = 1;
      let $t87 = true;
      for (;;) {
        if (!$t87) { L0["i"] = $.succ(L0["i"], 1); }
        $t87 = false;
        if (!($.ord(L0["i"]) <= $.ord($t86))) break;
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Bold", true);
        { const $t88 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "Payments")), "FieldByName", ["sira"])), "asinteger"))); if ($t88 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t88); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Bold", true);
        { const $t89 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "Payments")), "FieldByName", ["paydate"])), "asdatetime"))); if ($t89 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t89); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Bold", true);
        { const $t90 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "Payments")), "FieldByName", ["payedamt"])), "asfloat"))); if ($t90 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t90); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Bold", true);
        { const $t91 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "Payments")), "FieldByName", ["payedintamt"])), "asfloat"))); if ($t91 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t91); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Bold", true);
        { const $t92 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5], (await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "Payments")), "FieldByName", ["payeddueamt"])), "asfloat"))); if ($t92 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t92); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Bold", true);
        { const $t93 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6], (await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "Payments")), "FieldByName", ["payeddueintamt"])), "asfloat"))); if ($t93 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t93); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Bold", true);
        { const $t94 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7], (await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "Payments")), "FieldByName", ["sm"])), "asfloat"))); if ($t94 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t94); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Color", (await $.v(C, "clred")));
        L0["ss"] = $.add(L0["ss"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "Payments")), "FieldByName", ["payedamt"])), "asfloat")));
        L0["vv"] = $.add(L0["vv"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "Payments")), "FieldByName", ["payedintamt"])), "asfloat")));
        L0["ll"] = $.add(L0["ll"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "Payments")), "FieldByName", ["sm"])), "asfloat")));
        await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "Payments")), "Next", []);
        await $.tick();
      }
    }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1])), "Font")), "Bold", true);
    { const $t95 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1], "Cəm"); if ($t95 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t95); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1])), "Font")), "Color", (await $.v(C, "clGreen")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 3])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 3])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t96 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 3], L0["ss"]); if ($t96 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t96); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 4])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 4])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t97 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 4], L0["vv"]); if ($t97 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t97); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 5])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 5])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t98 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 5], $.add($.add("=sum(E9:E", (await $.call(C, "inttostr", [$.add(L0["rc"], 8)]))), ")")); if ($t98 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t98); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 6])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 6])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 6])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t99 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 6], $.add($.add("=sum(F9:F", (await $.call(C, "inttostr", [$.add(L0["rc"], 8)]))), ")")); if ($t99 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t99); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 7])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 7])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 7])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t100 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 7], L0["ll"]); if ($t100 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t100); } }
    L0["bash"] = (await $.call(C, "inttostr", [$.add(L0["k"], 1)]));
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), [$.add($.add($.add("A", (await $.call(C, "inttostr", [$.add(L0["rc"], 8)]))), ":G"), (await $.call(C, "inttostr", [$.add($.add(L0["m"], L0["k"]), 1)])))])), "select", []);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), [$.add($.add($.add("A", (await $.call(C, "inttostr", [$.add(L0["rc"], 8)]))), ":G"), (await $.call(C, "inttostr", [$.add($.add(L0["m"], L0["k"]), 1)])))])), "Borders")), "Color", (await $.v(C, "clBlack")));
  } finally {
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), ["A1:A1"])), "Select", []);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.stmt($.callv(L0["destroysheet"], []));
    await $.mcall((await $.mv((await $.v(C, "StatementDataMod")), "Payments")), "EnableControls", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCrdStatementMainForm", "SpeedButton4Click", async function SpeedButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t101 = (await $.mv((await $.v(C, "StatementDataMod")), "Payments"));
    if ($.truthy((await $.wv([$t101], "Active", C, false)))) {
      await $.stmt($.wcall([$t101], "Close", [], C));
    }
    await $.stmt($.wcall([$t101], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t101], "SetVariable", ["CRDID", (await $.wv([$t101], "Get_SelectedCrdId", C, false))], C)));
    await $.stmt($.wcall([$t101], "Open", [], C));
  }
  {
    const $t102 = (await $.mv((await $.v(C, "StatementDataMod")), "ReportDataSet"));
    if ($.truthy((await $.wv([$t102], "Active", C, false)))) {
      await $.stmt($.wcall([$t102], "Close", [], C));
    }
    await $.stmt($.wcall([$t102], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t102], "SetVariable", ["CRDID", (await $.wv([$t102], "Get_SelectedCrdId", C, false))], C)));
    await $.stmt($.wcall([$t102], "Open", [], C));
  }
  await $.mcall((await $.mv((await $.v(C, "ReportForm")), "ReportOrder")), "Preview", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCrdStatementMainForm", "SpeedButton5Click", async function SpeedButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t103 = (await $.v(C, "EExport"));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.wv([$t103], "DBGridEh3", C, false)), "DataSource")), "DataSet")), "RecordCount")), 0))) {
      await $.stmt((await $.wcall([$t103], "ShowMessage", [" Heç bir məlumat yoxdur "], C)));
    }
    await $.mcall((await $.mv((await $.mv((await $.wv([$t103], "DBGridEh3", C, false)), "DataSource")), "DataSet")), "Last", []);
    await $.stmt($.wcall([$t103], "Connect", [], C));
    await $.stmt((await $.wcall([$t103], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t103], "DBGridEh3", C, false)), "DataSource")), "DataSet")), "TRANSH", (await $.wv([$t103], "True", C, false))], C)));
    await $.stmt($.wcall([$t103], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCrdStatementMainForm", "SpeedButton6Click", async function SpeedButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t104 = (await $.v(C, "EExport"));
    const $t105 = (await $.wv([$t104], "StatementDataMod", C, false));
    await $.stmt($.wcall([$t104, $t105], "Connect", [], C));
    await $.stmt((await $.wcall([$t104, $t105], "ExportDataset", [(await $.wv([$t104, $t105], "DataSet", C, false)), "Redakte olunmushlar", (await $.wv([$t104, $t105], "True", C, false))], C)));
    await $.stmt($.wcall([$t104, $t105], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCrdStatementMainForm", "SpeedButton7Click", async function SpeedButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "CrdStatementMainForm", (await $.mcall((await $.v(C, "TCrdStatementMainForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
