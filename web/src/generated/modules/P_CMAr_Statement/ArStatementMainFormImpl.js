// Generated from ArStatementMainFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ArStatementMainFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "NLSLocalizer", "ComCtrls", "ExtCtrls", "StdCtrls", "Mask", "DBCtrls", "DBCtrlsEh", "DBLookupEh", "Grids", "DBGridEh", "Menus", "CMExcelExport", "Buttons", "ComObj", "DBGrids", "DBGridEhGrouping", "GridsEh", "ArStatementDataModule", "ArCommonDecls", "ArRestsHistoryImpl", "ArReportsheduleUnit", "ArRepUnit", "ArInterestshistoryImpl", "sbsystem", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TCrdStatementMainForm", "TForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "btnclose": {"name": "BtnClose", "type": "TButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "dbdatetimeediteh2": {"name": "DBDateTimeEditEh2", "type": "TDBDateTimeEditEh"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label5": {"name": "Label5", "type": "TLabel"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "label6": {"name": "Label6", "type": "TLabel"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "label7": {"name": "Label7", "type": "TLabel"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "label8": {"name": "Label8", "type": "TLabel"}, "datetimepickerstart": {"name": "DateTimePickerStart", "type": "TDateTimePicker"}, "label9": {"name": "Label9", "type": "TLabel"}, "datetimepickerend": {"name": "DateTimePickerEnd", "type": "TDateTimePicker"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "rgchoose": {"name": "RGChoose", "type": "TRadioGroup"}, "button1": {"name": "Button1", "type": "TButton"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "popupmenu": {"name": "PopupMenu", "type": "TPopupMenu"}, "repor": {"name": "RepOr", "type": "TMenuItem"}, "popupmenushedule": {"name": "PopupMenuShedule", "type": "TPopupMenu"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "n1": {"name": "N1", "type": "TMenuItem"}, "intlbl": {"name": "IntLbl", "type": "TLabel"}, "image": {"name": "Image", "type": "TImage"}, "labelint": {"name": "LabelInt", "type": "TLabel"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "dtpfullpay": {"name": "DTPFullPay", "type": "TDateTimePicker"}, "edfullpayamt": {"name": "EdFullPayAmt", "type": "TEdit"}, "tabsheet4": {"name": "TabSheet4", "type": "TTabSheet"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "dbgrideh3": {"name": "DBGridEh3", "type": "TDBGridEh"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "dbgrideh4": {"name": "DBGridEh4", "type": "TDBGridEh"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "eexport": {"name": "EExport", "type": "TCMExcelExport"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton5": {"name": "SpeedButton5", "type": "TSpeedButton"}, "tabsheet5": {"name": "TabSheet5", "type": "TTabSheet"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "speedbutton6": {"name": "SpeedButton6", "type": "TSpeedButton"}, "speedbutton7": {"name": "SpeedButton7", "type": "TSpeedButton"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}}, {});
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
    const $t1 = (await $.v(C, "ArStatementDataMod"));
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
      const $t4 = (await $.wv([$t1], "OracleDataSet1", C, false));
      if ($.truthy((await $.wv([$t1, $t4], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t4], "Close", [], C));
      }
      await $.stmt($.wcall([$t1, $t4], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t1, $t4], "SetVariable", ["creditid", (await $.wv([$t1, $t4], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t4], "Open", [], C));
    }
    {
      const $t5 = (await $.wv([$t1], "DefIntDatSet", C, false));
      if ($.truthy((await $.wv([$t1, $t5], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t5], "Close", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t5], "SetVariable", ["CrdID", (await $.wv([$t1, $t5], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t5], "Open", [], C));
      if ($.truthy(($.ne((await $.wcall([$t1, $t5], "integer", [(await $.wcall([$t1, $t5], "trunc", [(await $.mv((await $.wcall([$t1, $t5], "FieldByName", ["StopCalcDate"], C)), "AsDateTime"))], C))], C)), 0)))) {
        {
          const $t6 = (await $.wv([$t1, $t5], "CrdStatementMainForm", C, false));
          if ($.truthy($.eq((await $.mv((await $.wv([$t1, $t5, $t6], "OracleDataSet1", C, false)), "RecordCount")), 0))) {
            await $.mset((await $.wv([$t1, $t5, $t6], "LabelInt", C, false)), "Caption", $.add($.add("Faizin  və cərmə faizin hesablanması  ", (await $.wcall([$t1, $t5, $t6], "DateToStr", [(await $.mv((await $.wcall([$t1, $t5, $t6], "FieldByName", ["StopCalcDate"], C)), "AsDateTime"))], C))), "  tarixdən dayandırlıb."));
          }
          if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t1, $t5, $t6], "OracleDataSet1", C, false)), "FieldByName", ["status"])), "AsInteger")), 1))) {
            await $.mset((await $.wv([$t1, $t5, $t6], "LabelInt", C, false)), "Caption", $.add($.add("Faizin  və cərmə faizin hesablanması  ", (await $.wcall([$t1, $t5, $t6], "DateToStr", [(await $.mv((await $.wcall([$t1, $t5, $t6], "FieldByName", ["StopCalcDate"], C)), "AsDateTime"))], C))), "  tarixdən dayandırlıb."));
          }
          if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t1, $t5, $t6], "OracleDataSet1", C, false)), "FieldByName", ["status"])), "AsInteger")), 0)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t1, $t5, $t6], "OracleDataSet1", C, false)), "FieldByName", ["interest"])), "AsInteger")), 1)))), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t1, $t5, $t6], "OracleDataSet1", C, false)), "FieldByName", ["dueinterest"])), "AsInteger")), 1)))))) {
            await $.mset((await $.wv([$t1, $t5, $t6], "LabelInt", C, false)), "Caption", $.add($.add($.add($.add("Faizin  və cərmə faizin hesablanması bu ", (await $.wcall([$t1, $t5, $t6], "DateToStr", [(await $.mv((await $.wcall([$t1, $t5, $t6], "FieldByName", ["StopCalcDate"], C)), "AsDateTime"))], C))), "  tarixdən  "), (await $.wcall([$t1, $t5, $t6], "DateToStr", [(await $.mv((await $.mcall((await $.wv([$t1, $t5, $t6], "OracleDataSet1", C, false)), "FieldByName", ["enddat"])), "AsDateTime"))], C))), " tarixədək dayandırılib"));
          }
          if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t1, $t5, $t6], "OracleDataSet1", C, false)), "FieldByName", ["interest"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t1, $t5, $t6], "OracleDataSet1", C, false)), "FieldByName", ["dueinterest"])), "AsInteger")), 0)))))) {
            await $.mset((await $.wv([$t1, $t5, $t6], "LabelInt", C, false)), "Caption", $.add($.add($.add($.add("Faizin hesablanması bu ", (await $.wcall([$t1, $t5, $t6], "DateToStr", [(await $.mv((await $.wcall([$t1, $t5, $t6], "FieldByName", ["StopCalcDate"], C)), "AsDateTime"))], C))), "  tarixdən  "), (await $.wcall([$t1, $t5, $t6], "DateToStr", [(await $.mv((await $.mcall((await $.wv([$t1, $t5, $t6], "OracleDataSet1", C, false)), "FieldByName", ["enddat"])), "AsDateTime"))], C))), " tarixədək dayandırılib"));
          }
          if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t1, $t5, $t6], "OracleDataSet1", C, false)), "FieldByName", ["interest"])), "AsInteger")), 0)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t1, $t5, $t6], "OracleDataSet1", C, false)), "FieldByName", ["dueinterest"])), "AsInteger")), 1)))))) {
            await $.mset((await $.wv([$t1, $t5, $t6], "LabelInt", C, false)), "Caption", $.add($.add($.add($.add("Cərimə faizin hesablanması bu ", (await $.wcall([$t1, $t5, $t6], "DateToStr", [(await $.mv((await $.wcall([$t1, $t5, $t6], "FieldByName", ["StopCalcDate"], C)), "AsDateTime"))], C))), "  tarixdən  "), (await $.wcall([$t1, $t5, $t6], "DateToStr", [(await $.mv((await $.mcall((await $.wv([$t1, $t5, $t6], "OracleDataSet1", C, false)), "FieldByName", ["enddat"])), "AsDateTime"))], C))), " tarixədək dayandırılib"));
          }
          await $.mset((await $.wv([$t1, $t5, $t6], "Image", C, false)), "Enabled", (await $.wv([$t1, $t5, $t6], "True", C, false)));
        }
      } else {
        {
          const $t7 = (await $.wv([$t1, $t5], "CrdStatementMainForm", C, false));
          await $.mset((await $.wv([$t1, $t5, $t7], "LabelInt", C, false)), "Caption", "");
          await $.mset((await $.wv([$t1, $t5, $t7], "Image", C, false)), "Visible", (await $.wv([$t1, $t5, $t7], "False", C, false)));
        }
      }
    }
    {
      const $t8 = (await $.wv([$t1], "CreditTypes", C, false));
      if ($.truthy($.not((await $.wv([$t1, $t8], "Active", C, false))))) {
        await $.stmt($.wcall([$t1, $t8], "Open", [], C));
      }
    }
    {
      const $t9 = (await $.wv([$t1], "Categories", C, false));
      if ($.truthy($.not((await $.wv([$t1, $t9], "Active", C, false))))) {
        await $.stmt($.wcall([$t1, $t9], "Open", [], C));
      }
    }
    {
      const $t10 = (await $.wv([$t1], "UserGroups", C, false));
      if ($.truthy($.not((await $.wv([$t1, $t10], "Active", C, false))))) {
        await $.stmt($.wcall([$t1, $t10], "Open", [], C));
      }
    }
    {
      const $t11 = (await $.wv([$t1], "Schedule", C, false));
      if ($.truthy((await $.wv([$t1, $t11], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t11], "Close", [], C));
      }
      await $.stmt($.wcall([$t1, $t11], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t1, $t11], "SetVariable", ["CRDID", (await $.wv([$t1, $t11], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t11], "Open", [], C));
    }
    {
      const $t12 = (await $.wv([$t1], "Payments", C, false));
      if ($.truthy((await $.wv([$t1, $t12], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t12], "Close", [], C));
      }
      await $.stmt($.wcall([$t1, $t12], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t1, $t12], "SetVariable", ["CRDID", (await $.wv([$t1, $t12], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t12], "Open", [], C));
    }
    {
      const $t13 = (await $.wv([$t1], "Tranches", C, false));
      if ($.truthy((await $.wv([$t1, $t13], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t13], "CloseAll", [], C));
      }
      await $.stmt($.wcall([$t1, $t13], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t1, $t13], "SetVariable", ["CrdID", (await $.wv([$t1, $t13], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t13], "Open", [], C));
    }
    {
      const $t14 = (await $.wv([$t1], "ProlongationDataSet", C, false));
      if ($.truthy((await $.wv([$t1, $t14], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t14], "CloseAll", [], C));
      }
      await $.stmt($.wcall([$t1, $t14], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t1, $t14], "SetVariable", ["CrdID", (await $.wv([$t1, $t14], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t14], "Open", [], C));
    }
    {
      const $t15 = (await $.wv([$t1], "cust", C, false));
      if ($.truthy((await $.wv([$t1, $t15], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t15], "CloseAll", [], C));
      }
      await $.stmt($.wcall([$t1, $t15], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t1, $t15], "SetVariable", ["id", (await $.wv([$t1, $t15], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t15], "Open", [], C));
    }
  }
  await $.mcall((await $.v(C, "CrdStatementMainForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TCrdStatementMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ArStatementDataMod", (await $.mcall((await $.v(C, "TArStatementDataMod")), "Create", [Self])));
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
  await $.mcall((await $.v(C, "ArStatementDataMod")), "Free", []);
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
    const $t16 = (await $.mv((await $.v(C, "ArStatementDataMod")), "IntrInPeriod"));
    await $.stmt($.wcall([$t16], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t16], "SetVariable", ["CrdID", (await $.wv([$t16], "CrdID", { get: async () => L1["crdid"], set: async (v) => { L1["crdid"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t16], "SetVariable", ["D1", (await $.wv([$t16], "D1", { get: async () => L1["d1"], set: async (v) => { L1["d1"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t16], "SetVariable", ["D2", (await $.wv([$t16], "D2", { get: async () => L1["d2"], set: async (v) => { L1["d2"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t16], "Open", [], C));
  }
  {
    const $t17 = (await $.v(C, "InterestsForm"));
    await $.stmt($.wcall([$t17], "ShowModal", [], C));
  }
  {
    const $t18 = (await $.mv((await $.v(C, "ArStatementDataMod")), "IntrInPeriod"));
    await $.stmt($.wcall([$t18], "Close", [], C));
  }
  return L1.result;
});
  L0["showrestform"] = $.fn(async function ShowRestForm(p0, p1, p2) {
  const L1 = {"crdid": $.copyArg(p0), "d1": $.copyArg(p1), "d2": $.copyArg(p2), result: undefined};
  await $.fixArgs(L1, ["crdid", "d1", "d2"]);
  {
    const $t19 = (await $.mv((await $.v(C, "ArStatementDataMod")), "RestsInPeriod"));
    await $.stmt($.wcall([$t19], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t19], "SetVariable", ["CrdID", (await $.wv([$t19], "CrdID", { get: async () => L1["crdid"], set: async (v) => { L1["crdid"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t19], "SetVariable", ["D1", (await $.wv([$t19], "D1", { get: async () => L1["d1"], set: async (v) => { L1["d1"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t19], "SetVariable", ["D2", (await $.wv([$t19], "D2", { get: async () => L1["d2"], set: async (v) => { L1["d2"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t19], "Open", [], C));
  }
  {
    const $t20 = (await $.v(C, "RestForm"));
    await $.stmt($.wcall([$t20], "ShowModal", [], C));
  }
  {
    const $t21 = (await $.mv((await $.v(C, "ArStatementDataMod")), "RestsInPeriod"));
    await $.stmt($.wcall([$t21], "Close", [], C));
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
    const $t22 = (await $.v(C, "ArStatementDataMod"));
    {
      const $t23 = (await $.wv([$t22], "Payments", C, false));
      await $.stmt($.wcall([$t22, $t23], "Close", [], C));
    }
    {
      const $t24 = (await $.wv([$t22], "Schedule", C, false));
      await $.stmt($.wcall([$t22, $t24], "Close", [], C));
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
    const $t25 = (await $.v(C, "ArStatementDataMod"));
    {
      const $t26 = (await $.wv([$t25], "ReportDataSet", C, false));
      if ($.truthy((await $.wv([$t25, $t26], "Active", C, false)))) {
        await $.stmt($.wcall([$t25, $t26], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t25, $t26], "SetVariable", ["CRDID", (await $.wv([$t25, $t26], "CreditId", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t25, $t26], "Open", [], C));
      if ($.truthy(((await $.mv((await $.wcall([$t25, $t26], "FieldByName", ["LOANACCACCNO"], C)), "IsNull"))))) {
        await $.mset((await $.wcall([$t25, $t26], "FieldByName", ["LOANACCACCNO"], C)), "AsString", "0");
      }
      if ($.truthy(((await $.mv((await $.wcall([$t25, $t26], "FieldByName", ["INTERESTACCCNO"], C)), "IsNull"))))) {
        await $.mset((await $.wcall([$t25, $t26], "FieldByName", ["INTERESTACCCNO"], C)), "AsString", "0");
      }
      if ($.truthy(((await $.mv((await $.wcall([$t25, $t26], "FieldByName", ["DUELOANACCNO"], C)), "IsNull"))))) {
        await $.mset((await $.wcall([$t25, $t26], "FieldByName", ["DUELOANACCNO"], C)), "AsString", "0");
      }
      if ($.truthy(((await $.mv((await $.wcall([$t25, $t26], "FieldByName", ["DUEINTERESTACCNO"], C)), "IsNull"))))) {
        await $.mset((await $.wcall([$t25, $t26], "FieldByName", ["DUEINTERESTACCNO"], C)), "AsString", "0");
      }
    }
  }
  {
    const $t27 = (await $.v(C, "ArStatementDataMod"));
    const $t28 = (await $.wv([$t27], "ReportForm", C, false));
    await $.mset((await $.wv([$t27, $t28], "QRLVoen", C, false)), "Enabled", $.ne((await $.mv((await $.mcall((await $.wv([$t27, $t28], "ReportDataSet", C, false)), "FieldByName", ["INN"])), "AsFloat")), 0));
    await $.mcall((await $.wv([$t27, $t28], "ReportOrder", C, false)), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCrdStatementMainForm", "RepOrDrawItem", async function RepOrDrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t29 = L0["acanvas"];
    const $t30 = (await $.wv([$t29], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t31 = (await $.wv([$t29, $t30], "Font", C, false));
      await $.wset([$t29, $t30, $t31], "Name", "Azl Sans Serif", C);
      await $.wset([$t29, $t30, $t31], "Charset", (await $.wv([$t29, $t30, $t31], "RUSSIAN_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t29, $t30, $t31], "Default", C, false)))) {
        await $.wset([$t29, $t30, $t31], "Style", [(await $.wv([$t29, $t30, $t31], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t29, $t30], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t29, $t30], "Pen", C, false)), "Color", (await $.wv([$t29, $t30], "clBlack", C, false)));
      await $.wset([$t29, $t30], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t29, $t30], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t29, $t30], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t29, $t30], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t29, $t30], "MoveTo", [(await $.mv((await $.wv([$t29, $t30], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t29, $t30], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t29, $t30], "LineTo", [(await $.mv((await $.wv([$t29, $t30], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t29, $t30], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t29, $t30], "inc", [$.ref(async () => (await $.wv([$t29, $t30], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t32) => { await $.wset([$t29, $t30], "LineBottom", $t32, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t29, $t30], "Pen", C, false)), "Color", (await $.wv([$t29, $t30], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t29, $t30], "MoveTo", [(await $.mv((await $.wv([$t29, $t30], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t29, $t30], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t29, $t30], "LineTo", [(await $.mv((await $.wv([$t29, $t30], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t29, $t30], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t29, $t30], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t29, $t30], "Brush", C, false)), "Color", (await $.wv([$t29, $t30], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t29, $t30], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t29, $t30], "Font", C, false)), "Color", (await $.wv([$t29, $t30], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t29, $t30], "Font", C, false)), "Color", (await $.wv([$t29, $t30], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t29, $t30], "Brush", C, false)), "Color", (await $.wv([$t29, $t30], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t29, $t30], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t29, $t30], "Font", C, false)), "Color", (await $.wv([$t29, $t30], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t29, $t30], "Font", C, false)), "Color", (await $.wv([$t29, $t30], "clGrayText", C, false)));
        }
      }
      await $.wset([$t29, $t30], "Bar", (await $.wv([$t29, $t30], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t29, $t30], "FillRect", [(await $.wv([$t29, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t29, $t30], "TextOut", [$.add((await $.mv((await $.wv([$t29, $t30], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 2), $.add((await $.mv((await $.wv([$t29, $t30], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t29, $t30], "Caption", C, false))], C)));
    }
    await $.wset([$t29, $t30], "SText", (await $.wcall([$t29, $t30], "ShortCutToText", [(await $.wv([$t29, $t30], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t29, $t30], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t29, $t30], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t29, $t30], "TextWidth", [(await $.wv([$t29, $t30], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t29, $t30], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t29, $t30], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t29, $t30], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t33 = (await $.wv([$t29, $t30], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t29, $t30, $t33], "Assigned", [(await $.wv([$t29, $t30, $t33], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t29, $t30, $t33], "Checked", C, false)))) {
            await $.mset((await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t29, $t30, $t33], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t29, $t30, $t33], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t29, $t30, $t33], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t29, $t30, $t33], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t29, $t30, $t33], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t29, $t30, $t33], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t34) => { await $.mset((await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t34); }), 2], C)));
            await $.stmt((await $.wcall([$t29, $t30, $t33], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t35) => { await $.mset((await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t35); }), 2], C)));
            await $.stmt((await $.wcall([$t29, $t30, $t33], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t36) => { await $.mset((await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t36); }), 2], C)));
            await $.stmt((await $.wcall([$t29, $t30, $t33], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t37) => { await $.mset((await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t37); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t29, $t30, $t33], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t29, $t30, $t33], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t29, $t30, $t33], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t29, $t30, $t33], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t38) => { await $.mset((await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t38); }), 1], C)));
            await $.stmt((await $.wcall([$t29, $t30, $t33], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t39) => { await $.mset((await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t39); }), 1], C)));
            await $.stmt((await $.wcall([$t29, $t30, $t33], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t40) => { await $.mset((await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t40); }), 1], C)));
            await $.stmt((await $.wcall([$t29, $t30, $t33], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t41) => { await $.mset((await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t41); }), 1], C)));
            if ($.truthy((await $.wv([$t29, $t30, $t33], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t29, $t30, $t33], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t29, $t30, $t33], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t29, $t30, $t33], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t29, $t30, $t33], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t29, $t30, $t33], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t29, $t30, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t29, $t30, $t33], "Images", C, false)), "Draw", [(await $.wv([$t29, $t30, $t33], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t29, $t30, $t33], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t29, $t30, $t33], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t29, $t30, $t33], "ImageIndex", C, false)), (await $.wv([$t29, $t30, $t33], "Enabled", C, false))])));
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
    const $t42 = (await $.v(C, "ArStatementDataMod"));
    {
      const $t43 = (await $.wv([$t42], "ReportDataSet", C, false));
      if ($.truthy((await $.wv([$t42, $t43], "Active", C, false)))) {
        await $.stmt($.wcall([$t42, $t43], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t42, $t43], "SetVariable", ["CRDID", (await $.wv([$t42, $t43], "CreditId", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t42, $t43], "Open", [], C));
      if ($.truthy(((await $.mv((await $.wcall([$t42, $t43], "FieldByName", ["LOANACCACCNO"], C)), "IsNull"))))) {
        await $.mset((await $.wcall([$t42, $t43], "FieldByName", ["LOANACCACCNO"], C)), "AsString", "0");
      }
    }
  }
  {
    const $t44 = (await $.v(C, "ArStatementDataMod"));
    const $t45 = (await $.wv([$t44], "ReportSheduleForm", C, false));
    await $.mset((await $.wv([$t44, $t45], "FacticalDebtChild1", C, false)), "Enabled", $.ne((await $.mv((await $.mcall((await $.wv([$t44, $t45], "Tranches", C, false)), "FieldByName", ["trancheamount"])), "AsFloat")), 0));
    await $.mset((await $.wv([$t44, $t45], "QRLVoen1", C, false)), "Enabled", $.ne((await $.mv((await $.mcall((await $.wv([$t44, $t45], "ReportDataSet", C, false)), "FieldByName", ["INN"])), "AsFloat")), 0));
    await $.mset((await $.wv([$t44, $t45], "QRLContractno1", C, false)), "Caption", (await $.wv([$t44, $t45], "CreditNo", { get: async () => L0["creditno"], set: async (v) => { L0["creditno"] = v; }, local: true }, false)));
    await $.mcall((await $.wv([$t44, $t45], "QuickRepTR", C, false)), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCrdStatementMainForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTPFullPay")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  {
    const $t46 = (await $.v(C, "ArStatementDataMod"));
    const $t47 = (await $.wv([$t46], "CM_AK_REPORTS", C, false));
    await $.mset((await $.wv([$t46, $t47], "EdFullPayAmt", C, false)), "Text", (await $.wcall([$t46, $t47], "FloatToStr", [(await $.wcall([$t46, $t47], "CallFloatFunction", ["Get_CreditFullPayAmt", [(await $.wv([$t46, $t47], "Get_SelectedCrdID", C, false)), (await $.wv([$t46, $t47], "Get_CurrentDate", C, false))]], C))], C)));
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
    const $t48 = (await $.v(C, "ArStatementDataMod"));
    const $t49 = (await $.wv([$t48], "CM_AK_REPORTS", C, false));
    await $.mset((await $.wv([$t48, $t49], "EdFullPayAmt", C, false)), "Text", (await $.wcall([$t48, $t49], "FloatToStr", [(await $.wcall([$t48, $t49], "CallFloatFunction", ["Get_CreditFullPayAmt", [(await $.wv([$t48, $t49], "Get_SelectedCrdID", C, false)), (await $.wv([$t48, $t49], "PayDat", { get: async () => L0["paydat"], set: async (v) => { L0["paydat"] = v; }, local: true }, false))]], C))], C)));
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
  } catch ($t50) {
    $.rethrowControl($t50);
    $.handled($t50);
  }
  return L1.result;
});
  L0["destroysheet"] = $.fn(async function DestroySheet() {
  const L1 = {result: undefined};
  try {
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Sheet"))])));
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Exl"))])));
  } catch ($t51) {
    $.rethrowControl($t51);
    $.handled($t51);
  }
  return L1.result;
});
  L0["showsheet"] = $.fn(async function ShowSheet() {
  const L1 = {result: undefined};
  try {
    await $.mset((await $.v(C, "Exl")), "Visible", true);
  } catch ($t52) {
    $.rethrowControl($t52);
    $.handled($t52);
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
    { const $t53 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5], ""); if ($t53 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t53); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "Name", "Azl Sans Serif");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "Color", (await $.v(C, "clolive")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "size", 22);
    L0["k"] = 7;
    L0["i"] = 0;
    { const $t54 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 3), 1], "Ödəməlidir "); if ($t54 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t54); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 1])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 1])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 1])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 1])), "Font")), "size", 13);
    { const $t55 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 3], " Müqavilənin № si:"); if ($t55 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t55); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "size", 13);
    { const $t56 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 4], $.add(" ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "cust")), "FieldByName", ["numberofcredit"])), "asstring")))); if ($t56 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t56); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 4])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 4])), "Font")), "Color", (await $.v(C, "clblack")));
    { const $t57 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 5], " Borcalanın adı:"); if ($t57 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t57); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 5])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 5])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 5])), "Font")), "size", 13);
    { const $t58 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 6], (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "cust")), "FieldByName", ["name"])), "asstring"))); if ($t58 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t58); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 6])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 6])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 6])), "Font")), "Color", (await $.v(C, "clblack")));
    { const $t59 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1], "Sıra №"); if ($t59 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t59); } }
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
    { const $t60 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4], " Hesablanmış % dən"); if ($t60 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t60); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t61 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5], " Cəmi"); if ($t61 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t61); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Color", (await $.v(C, "clBlue")));
    await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "Schedule")), "first", []);
    await $.stmt($.callv(L0["showsheet"], []));
    L0["ss"] = 0;
    L0["vv"] = 0;
    L0["rc"] = (await $.mv((await $.mv((await $.v(C, "ArStatementDataMod")), "Schedule")), "RecordCount"));
    { const $t62 = L0["rc"];
      L0["i"] = 1;
      let $t63 = true;
      for (;;) {
        if (!$t63) { L0["i"] = $.succ(L0["i"], 1); }
        $t63 = false;
        if (!($.ord(L0["i"]) <= $.ord($t62))) break;
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Bold", true);
        { const $t64 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "Schedule")), "FieldByName", ["sira"])), "asinteger"))); if ($t64 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t64); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Bold", true);
        { const $t65 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "Schedule")), "FieldByName", ["PAYMENTDATE"])), "asdatetime"))); if ($t65 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t65); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Bold", true);
        { const $t66 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "Schedule")), "FieldByName", ["principal"])), "asfloat"))); if ($t66 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t66); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Bold", true);
        { const $t67 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "Schedule")), "FieldByName", ["interest"])), "asfloat"))); if ($t67 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t67); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Bold", true);
        { const $t68 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5], (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "Schedule")), "FieldByName", ["sm"])), "asfloat"))); if ($t68 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t68); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Color", (await $.v(C, "clred")));
        L0["ss"] = $.add(L0["ss"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "Schedule")), "FieldByName", ["principal"])), "asfloat")));
        L0["vv"] = $.add(L0["vv"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "Schedule")), "FieldByName", ["interest"])), "asfloat")));
        L0["ll"] = $.add(L0["ll"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "Schedule")), "FieldByName", ["sm"])), "asfloat")));
        await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "Schedule")), "Next", []);
        await $.tick();
      }
    }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1])), "Font")), "Bold", true);
    { const $t69 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1], "Cəm"); if ($t69 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t69); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1])), "Font")), "Color", (await $.v(C, "clGreen")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 3])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 3])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t70 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 3], L0["ss"]); if ($t70 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t70); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 4])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 4])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t71 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 4], L0["vv"]); if ($t71 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t71); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 5])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 5])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t72 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 5], L0["ll"]); if ($t72 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t72); } }
    L0["bash"] = (await $.call(C, "inttostr", [$.add(L0["k"], 1)]));
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), [$.add($.add($.add("A", L0["bash"]), ":E"), (await $.call(C, "inttostr", [$.add($.add(L0["m"], L0["k"]), 1)])))])), "select", []);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), [$.add($.add($.add("A", L0["bash"]), ":E"), (await $.call(C, "inttostr", [$.add($.add(L0["m"], L0["k"]), 1)])))])), "Borders")), "Color", (await $.v(C, "clBlack")));
  } finally {
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), ["A1:A1"])), "Select", []);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.stmt($.callv(L0["destroysheet"], []));
    await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "Schedule")), "EnableControls", []);
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
  } catch ($t73) {
    $.rethrowControl($t73);
    $.handled($t73);
  }
  return L1.result;
});
  L0["destroysheet"] = $.fn(async function DestroySheet() {
  const L1 = {result: undefined};
  try {
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Sheet"))])));
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Exl"))])));
  } catch ($t74) {
    $.rethrowControl($t74);
    $.handled($t74);
  }
  return L1.result;
});
  L0["showsheet"] = $.fn(async function ShowSheet() {
  const L1 = {result: undefined};
  try {
    await $.mset((await $.v(C, "Exl")), "Visible", true);
  } catch ($t75) {
    $.rethrowControl($t75);
    $.handled($t75);
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
    { const $t76 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5], ""); if ($t76 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t76); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "Color", (await $.v(C, "clolive")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [2, 5])), "Font")), "size", 22);
    L0["k"] = 7;
    L0["i"] = 0;
    { const $t77 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 3), 1], "Ödəmişdir "); if ($t77 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t77); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 1])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 1])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 1])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 3), 1])), "Font")), "size", 13);
    { const $t78 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 3], " Müqavilənin № si:"); if ($t78 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t78); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 3])), "Font")), "size", 13);
    { const $t79 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 4], $.add(" ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "cust")), "FieldByName", ["numberofcredit"])), "asstring")))); if ($t79 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t79); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 4])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 4])), "Font")), "Color", (await $.v(C, "clblack")));
    { const $t80 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 5], " Borcalanın adı:"); if ($t80 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t80); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 5])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 5])), "Font")), "Color", (await $.v(C, "clred")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 5])), "Font")), "size", 13);
    { const $t81 = await $.iset((await $.mv((await $.v(C, "sheet")), "Cells")), [$.add(L0["i"], 4), 6], (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "cust")), "FieldByName", ["name"])), "asstring"))); if ($t81 !== undefined) { await $.mset((await $.v(C, "sheet")), "Cells", $t81); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 6])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 6])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add(L0["i"], 4), 6])), "Font")), "Color", (await $.v(C, "clblack")));
    { const $t82 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1], "Sıra №"); if ($t82 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t82); } }
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
    { const $t83 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4], "Əsas borc. faizdən"); if ($t83 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t83); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t84 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5], " Gecikmiş borcdan"); if ($t84 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t84); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t85 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6], " Gecikmiş B faizdən"); if ($t85 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t85); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Color", (await $.v(C, "clBlue")));
    { const $t86 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7], " Cəmi"); if ($t86 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t86); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Color", (await $.v(C, "clred")));
    L0["ss"] = 0;
    L0["vv"] = 0;
    await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "Payments")), "first", []);
    L0["rc"] = (await $.mv((await $.mv((await $.v(C, "ArStatementDataMod")), "Payments")), "RecordCount"));
    await $.stmt($.callv(L0["showsheet"], []));
    { const $t87 = L0["rc"];
      L0["i"] = 1;
      let $t88 = true;
      for (;;) {
        if (!$t88) { L0["i"] = $.succ(L0["i"], 1); }
        $t88 = false;
        if (!($.ord(L0["i"]) <= $.ord($t87))) break;
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1])), "Font")), "Bold", true);
        { const $t89 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "Payments")), "FieldByName", ["sira"])), "asinteger"))); if ($t89 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t89); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2])), "Font")), "Bold", true);
        { const $t90 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "Payments")), "FieldByName", ["paydate"])), "asdatetime"))); if ($t90 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t90); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3])), "Font")), "Bold", true);
        { const $t91 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "Payments")), "FieldByName", ["payedamt"])), "asfloat"))); if ($t91 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t91); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4])), "Font")), "Bold", true);
        { const $t92 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "Payments")), "FieldByName", ["payedintamt"])), "asfloat"))); if ($t92 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t92); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5])), "Font")), "Bold", true);
        { const $t93 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 5], (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "Payments")), "FieldByName", ["payeddueamt"])), "asfloat"))); if ($t93 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t93); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6])), "Font")), "Bold", true);
        { const $t94 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 6], (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "Payments")), "FieldByName", ["payeddueintamt"])), "asfloat"))); if ($t94 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t94); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Name", "tahoma");
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Bold", true);
        { const $t95 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7], (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "Payments")), "FieldByName", ["sm"])), "asfloat"))); if ($t95 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t95); } }
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["i"], L0["k"]), 1), 7])), "Font")), "Color", (await $.v(C, "clred")));
        L0["ss"] = $.add(L0["ss"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "Payments")), "FieldByName", ["payedamt"])), "asfloat")));
        L0["vv"] = $.add(L0["vv"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "Payments")), "FieldByName", ["payedintamt"])), "asfloat")));
        L0["ll"] = $.add(L0["ll"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "Payments")), "FieldByName", ["sm"])), "asfloat")));
        await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "Payments")), "Next", []);
        await $.tick();
      }
    }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1])), "Font")), "Bold", true);
    { const $t96 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1], "Cəm"); if ($t96 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t96); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 1])), "Font")), "Color", (await $.v(C, "clGreen")));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 3])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 3])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 3])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t97 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 3], L0["ss"]); if ($t97 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t97); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 4])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 4])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 4])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t98 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 4], L0["vv"]); if ($t98 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t98); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 5])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 5])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 5])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t99 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 5], $.add($.add("=sum(E9:E", (await $.call(C, "inttostr", [$.add(L0["rc"], 8)]))), ")")); if ($t99 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t99); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 6])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 6])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 6])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t100 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 6], $.add($.add("=sum(F9:F", (await $.call(C, "inttostr", [$.add(L0["rc"], 8)]))), ")")); if ($t100 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t100); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 7])), "Font")), "Name", "tahoma");
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 1), 7])), "Font")), "Bold", true);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 7])), "Font")), "Color", (await $.v(C, "clGreen")));
    { const $t101 = await $.iset((await $.mv((await $.v(C, "Sheet")), "Cells")), [$.add($.add(L0["rc"], L0["k"]), 2), 7], L0["ll"]); if ($t101 !== undefined) { await $.mset((await $.v(C, "Sheet")), "Cells", $t101); } }
    L0["bash"] = (await $.call(C, "inttostr", [$.add(L0["k"], 1)]));
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), [$.add($.add($.add("A", (await $.call(C, "inttostr", [$.add(L0["rc"], 8)]))), ":G"), (await $.call(C, "inttostr", [$.add($.add(L0["m"], L0["k"]), 1)])))])), "select", []);
    await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), [$.add($.add($.add("A", (await $.call(C, "inttostr", [$.add(L0["rc"], 8)]))), ":G"), (await $.call(C, "inttostr", [$.add($.add(L0["m"], L0["k"]), 1)])))])), "Borders")), "Color", (await $.v(C, "clBlack")));
  } finally {
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), ["A1:A1"])), "Select", []);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.stmt($.callv(L0["destroysheet"], []));
    await $.mcall((await $.mv((await $.v(C, "ArStatementDataMod")), "Payments")), "EnableControls", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCrdStatementMainForm", "SpeedButton4Click", async function SpeedButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t102 = (await $.mv((await $.v(C, "ArStatementDataMod")), "Payments"));
    if ($.truthy((await $.wv([$t102], "Active", C, false)))) {
      await $.stmt($.wcall([$t102], "Close", [], C));
    }
    await $.stmt($.wcall([$t102], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t102], "SetVariable", ["CRDID", (await $.wv([$t102], "Get_SelectedCrdId", C, false))], C)));
    await $.stmt($.wcall([$t102], "Open", [], C));
  }
  {
    const $t103 = (await $.mv((await $.v(C, "ArStatementDataMod")), "ReportDataSet"));
    if ($.truthy((await $.wv([$t103], "Active", C, false)))) {
      await $.stmt($.wcall([$t103], "Close", [], C));
    }
    await $.stmt($.wcall([$t103], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t103], "SetVariable", ["CRDID", (await $.wv([$t103], "Get_SelectedCrdId", C, false))], C)));
    await $.stmt($.wcall([$t103], "Open", [], C));
  }
  await $.mcall((await $.mv((await $.v(C, "ReportForm")), "ReportOrder")), "Preview", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCrdStatementMainForm", "SpeedButton5Click", async function SpeedButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t104 = (await $.v(C, "EExport"));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.wv([$t104], "DBGridEh3", C, false)), "DataSource")), "DataSet")), "RecordCount")), 0))) {
      await $.stmt((await $.wcall([$t104], "ShowMessage", [" Heç bir məlumat yoxdur "], C)));
    }
    await $.mcall((await $.mv((await $.mv((await $.wv([$t104], "DBGridEh3", C, false)), "DataSource")), "DataSet")), "Last", []);
    await $.stmt($.wcall([$t104], "Connect", [], C));
    await $.stmt((await $.wcall([$t104], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t104], "DBGridEh3", C, false)), "DataSource")), "DataSet")), "TRANSH", (await $.wv([$t104], "True", C, false))], C)));
    await $.stmt($.wcall([$t104], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCrdStatementMainForm", "SpeedButton6Click", async function SpeedButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t105 = (await $.v(C, "EExport"));
    const $t106 = (await $.wv([$t105], "ArStatementDataMod", C, false));
    await $.stmt($.wcall([$t105, $t106], "Connect", [], C));
    await $.stmt((await $.wcall([$t105, $t106], "ExportDataset", [(await $.wv([$t105, $t106], "DataSet", C, false)), "Redakte olunmushlar", (await $.wv([$t105, $t106], "True", C, false))], C)));
    await $.stmt($.wcall([$t105, $t106], "Disconnect", [], C));
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
