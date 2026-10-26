// Generated from MainFormIMPL.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("MainFormIMPL", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ExtCtrls", "Grids", "DBGridEh", "XDBGrids", "DBCtrlsEh", "DBCtrls", "Mask", "DBLookupEh", "WordXP", "OleServer", "ActnList", "sbsystem", "RtDmImpl", "retelcommon", "Rtl_AzeriAbo_Impl", "reportImpl"]);
  const C = [U];
  U.defClass("TMainForm", "TForm", {"panel19": {"name": "Panel19", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "r1": {"name": "R1", "type": "TPanel"}, "label4": {"name": "Label4", "type": "TLabel"}, "branchcbeh": {"name": "BranchCBEh", "type": "TDBLookupComboboxEh"}, "r2": {"name": "R2", "type": "TPanel"}, "label8": {"name": "Label8", "type": "TLabel"}, "dblookupcomboboxeh14": {"name": "DBLookupComboboxEh14", "type": "TDBLookupComboboxEh"}, "r3": {"name": "R3", "type": "TPanel"}, "label5": {"name": "Label5", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "r4": {"name": "R4", "type": "TPanel"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "r5": {"name": "R5", "type": "TPanel"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbdatetimeediteh2": {"name": "DBDateTimeEditEh2", "type": "TDBDateTimeEditEh"}, "r6": {"name": "R6", "type": "TPanel"}, "label18": {"name": "Label18", "type": "TLabel"}, "r7": {"name": "R7", "type": "TPanel"}, "label20": {"name": "Label20", "type": "TLabel"}, "dbnumberediteh2": {"name": "DBNumberEditEh2", "type": "TDBNumberEditEh"}, "r8": {"name": "R8", "type": "TPanel"}, "label22": {"name": "Label22", "type": "TLabel"}, "dbnumberediteh4": {"name": "DBNumberEditEh4", "type": "TDBNumberEditEh"}, "r9": {"name": "R9", "type": "TPanel"}, "label10": {"name": "Label10", "type": "TLabel"}, "dbnumberediteh5": {"name": "DBNumberEditEh5", "type": "TDBNumberEditEh"}, "r10": {"name": "R10", "type": "TPanel"}, "label11": {"name": "Label11", "type": "TLabel"}, "dblookupcomboboxeh12": {"name": "DBLookupComboboxEh12", "type": "TDBLookupComboboxEh"}, "r11": {"name": "R11", "type": "TPanel"}, "label6": {"name": "Label6", "type": "TLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "wordapplication": {"name": "WordApplication", "type": "TWordApplication"}, "worddocument": {"name": "WordDocument", "type": "TWordDocument"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbnumberediteh1": {"name": "DBNumberEditEh1", "type": "TDBNumberEditEh"}, "label1": {"name": "Label1", "type": "TLabel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbnumberediteh3": {"name": "DBNumberEditEh3", "type": "TDBNumberEditEh"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label12": {"name": "Label12", "type": "TLabel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label13": {"name": "Label13", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("MainForm", null, "TMainForm");
    U.var_("cradd", 0, "integer");
    U.var_("TemplID", 0, "integer");
    U.var_("rt", '', "String");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "custid": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["s", "custid"]);
  await $.set(C, "rt", L0["custid"]);
  await $.mcall((await $.v(C, "MainForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["s", "custid"], "kind": "procedure", "ptypes": ["String", "String"]});
  U.method("TMainForm", "ActinPrintUpdate", async function ActinPrintUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Enabled", (await $.and_((await $.v(C, "Active")), async () => ((await $.mv((await $.mv((await $.v(C, "RtDataModule")), "PersonLink")), "Modified"))))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "BranchCBEhChange", async function BranchCBEhChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "RtDataModule"));
    await $.mset((await $.mcall((await $.wv([$t1], "PersonLink", C, false)), "FieldByName", ["numberofcredit"])), "asstring", $.add((await $.mv((await $.mcall((await $.wv([$t1], "OracleDataSet2", C, false)), "FieldByName", ["num"])), "asstring")), (await $.wcall([$t1], "inttostr", [(await $.mv((await $.mcall((await $.wv([$t1], "Branches", C, false)), "FieldByName", ["id"])), "AsInteger"))], C))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "DBDateTimeEditEh2Exit", async function DBDateTimeEditEh2Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.mv((await $.v(C, "RtDataModule")), "PersonLink"));
    await $.mset((await $.wv([$t2], "DBNumberEditEh1", C, false)), "Value", (await $.mcall((await $.mv((await $.wv([$t2], "RtDataModule", C, false)), "cm_common")), "CallIntegerFunction", ["GetPeriod", [(await $.mv((await $.wcall([$t2], "FieldByname", ["DATEOFCONCLUSION"], C)), "AsDateTime")), (await $.mv((await $.wv([$t2], "DBDateTimeEditEh2", C, false)), "Value"))]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "DBEdit2Change", async function DBEdit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBEdit2")), "Text")), ""))) {
    {
      const $t3 = (await $.v(C, "RtDataModule"));
      const $t4 = (await $.wv([$t3], "perodcurr", C, false));
      if ($.truthy((await $.wv([$t3, $t4], "Active", C, false)))) {
        await $.stmt($.wcall([$t3, $t4], "close", [], C));
      }
      await $.stmt((await $.wcall([$t3, $t4], "SetVariable", ["mehsulid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))], C)));
      await $.stmt((await $.wcall([$t3, $t4], "SetVariable", ["valute", (await $.mv((await $.wv([$t3, $t4], "DBLookupComboboxEh14", C, false)), "KeyValue"))], C)));
      await $.stmt($.wcall([$t3, $t4], "open", [], C));
    }
    {
      const $t5 = (await $.v(C, "RtDataModule"));
      const $t6 = (await $.wv([$t5], "Percent", C, false));
      if ($.truthy((await $.wv([$t5, $t6], "Active", C, false)))) {
        await $.stmt($.wcall([$t5, $t6], "close", [], C));
      }
      await $.stmt((await $.wcall([$t5, $t6], "SetVariable", ["period", (await $.mv((await $.wv([$t5, $t6], "DBNumberEditEh1", C, false)), "Value"))], C)));
      await $.stmt((await $.wcall([$t5, $t6], "SetVariable", ["retcurid", (await $.mv((await $.mcall((await $.mv((await $.wv([$t5, $t6], "RtDataModule", C, false)), "perodcurr")), "FieldByName", ["id"])), "AsInteger"))], C)));
      await $.stmt((await $.wcall([$t5, $t6], "SetVariable", ["meb", (await $.wcall([$t5, $t6], "strtofloat", [(await $.mv((await $.wv([$t5, $t6], "DBEdit2", C, false)), "Text"))], C))], C)));
      await $.stmt($.wcall([$t5, $t6], "open", [], C));
      await $.mset((await $.wv([$t5, $t6], "DBNumberEditEh2", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["faiz"], C)), "asstring")));
      await $.mset((await $.wv([$t5, $t6], "DBNumberEditEh4", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["gecfaiz"], C)), "asstring")));
      await $.mset((await $.wv([$t5, $t6], "DBNumberEditEh5", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["penya"], C)), "asstring")));
      await $.mset((await $.wv([$t5, $t6], "DBNumberEditEh3", C, false)), "Text", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["komissia"], C)), "asstring")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "DBEdit2Click", async function DBEdit2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBEdit2")), "Text")), ""))) {
    await $.mcall((await $.v(C, "DBEdit2")), "Clear", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "DBEdit4Change", async function DBEdit4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ShowMessage", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "RtDataModule")), "PersonLink")), "FieldByName", ["PeriodContracts"])), "asstring"))])));
  {
    const $t7 = (await $.v(C, "RtDataModule"));
    const $t8 = (await $.wv([$t7], "OracleDataSet1", C, false));
    if ($.truthy((await $.wv([$t7, $t8], "Active", C, false)))) {
      await $.stmt($.wcall([$t7, $t8], "close", [], C));
    }
    await $.stmt((await $.wcall([$t7, $t8], "SetVariable", ["dat", (await $.mv((await $.mcall((await $.wv([$t7, $t8], "PersonLink", C, false)), "FieldByName", ["DATEOFCONCLUSION"])), "AsDateTime"))], C)));
    await $.stmt((await $.wcall([$t7, $t8], "SetVariable", ["mon", (await $.mv((await $.mcall((await $.wv([$t7, $t8], "PersonLink", C, false)), "FieldByName", ["PeriodContracts"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t7, $t8], "open", [], C));
    await $.mset((await $.mcall((await $.wv([$t7, $t8], "PersonLink", C, false)), "FieldByName", ["DUEDATEFIRSTCONTRACT"])), "AsDateTime", (await $.mv((await $.wcall([$t7, $t8], "FieldByName", ["end"], C)), "AsDateTime")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "DBLookupComboboxEh14Change", async function DBLookupComboboxEh14Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "DBNumberEditEh1Change", async function DBNumberEditEh1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBEdit2")), "Text")), ""))) {
    await $.mcall((await $.v(C, "DBEdit2")), "Clear", []);
    {
      const $t9 = (await $.v(C, "RtDataModule"));
      const $t10 = (await $.wv([$t9], "Percent", C, false));
      if ($.truthy((await $.wv([$t9, $t10], "Active", C, false)))) {
        await $.stmt($.wcall([$t9, $t10], "close", [], C));
      }
      await $.stmt((await $.wcall([$t9, $t10], "SetVariable", ["period", (-(1))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "SetVariable", ["retcurid", (-(1))], C)));
      await $.stmt((await $.wcall([$t9, $t10], "SetVariable", ["meb", (-(1))], C)));
      await $.stmt($.wcall([$t9, $t10], "open", [], C));
      await $.mset((await $.wv([$t9, $t10], "DBNumberEditEh2", C, false)), "Text", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["faiz"], C)), "asstring")));
      await $.mset((await $.wv([$t9, $t10], "DBNumberEditEh4", C, false)), "Text", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["gecfaiz"], C)), "asstring")));
      await $.mset((await $.wv([$t9, $t10], "DBNumberEditEh5", C, false)), "Text", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["penya"], C)), "asstring")));
      await $.mset((await $.wv([$t9, $t10], "DBNumberEditEh3", C, false)), "Text", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["komissia"], C)), "asstring")));
    }
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBNumberEditEh1")), "text")), (await $.v(C, "null"))))) {
    {
      const $t11 = (await $.v(C, "RtDataModule"));
      const $t12 = (await $.wv([$t11], "OracleDataSet1", C, false));
      if ($.truthy((await $.wv([$t11, $t12], "Active", C, false)))) {
        await $.stmt($.wcall([$t11, $t12], "close", [], C));
      }
      await $.stmt((await $.wcall([$t11, $t12], "SetVariable", ["dat", (await $.mv((await $.mcall((await $.wv([$t11, $t12], "PersonLink", C, false)), "FieldByName", ["DATEOFCONCLUSION"])), "AsDateTime"))], C)));
      await $.stmt((await $.wcall([$t11, $t12], "SetVariable", ["mon", (await $.mv((await $.wv([$t11, $t12], "DBNumberEditEh1", C, false)), "Value"))], C)));
      await $.stmt($.wcall([$t11, $t12], "open", [], C));
      await $.mset((await $.mcall((await $.wv([$t11, $t12], "PersonLink", C, false)), "FieldByName", ["DUEDATEFIRSTCONTRACT"])), "AsDateTime", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["end"], C)), "AsDateTime")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "DBNumberEditEh1Click", async function DBNumberEditEh1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBNumberEditEh1")), "Value")), 0))) {
    await $.mcall((await $.v(C, "DBNumberEditEh1")), "CLEAR", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.mv((await $.v(C, "RtDataModule")), "PersonLink"));
    const $t14 = (await $.wv([$t13], "SavedCredit", C, false));
    await $.wset([$t13, $t14], "ins", 0, C);
    await $.wset([$t13, $t14], "boorowerid", 0, C);
    await $.mcall((await $.mv((await $.wv([$t13, $t14], "RtDataModule", C, false)), "PersonLink")), "close", []);
    { const $t15 = await $.iset((await $.mv((await $.mv((await $.wv([$t13, $t14], "RtDataModule", C, false)), "PersonLink")), "SQL")), [3], ""); if ($t15 !== undefined) { await $.mset((await $.mv((await $.wv([$t13, $t14], "RtDataModule", C, false)), "PersonLink")), "SQL", $t15); } }
  }
  await $.set(C, "width", 232);
  await $.mset((await $.v(C, "Panel1")), "Visible", false);
  await $.set(C, "Caption", "Smart");
  await $.mset((await $.v(C, "panel19")), "Visible", true);
  await $.mset((await $.v(C, "DBEdit1")), "Text", "");
  if ($.truthy($.eq((await $.mv((await $.v(C, "Panel1")), "Visible")), true))) {
    await $.mset((await $.v(C, "Panel1")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "RtDataModule", (await $.mcall((await $.v(C, "TRtDataModule")), "Create", [Self])));
  await $.set(C, "FormReport", (await $.mcall((await $.v(C, "TFormReport")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 27))) {
    await $.mcall((await $.v(C, "MainForm")), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TMainForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "width", 232);
  {
    const $t16 = (await $.mv((await $.v(C, "RtDataModule")), "PersonLink"));
    if ($.truthy((await $.wv([$t16], "Active", C, false)))) {
      await $.stmt($.wcall([$t16], "close", [], C));
    }
    await $.stmt((await $.wcall([$t16], "SetVariable", ["id", (await $.wv([$t16], "rt", C, false))], C)));
    await $.stmt($.wcall([$t16], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "Label1Click", async function Label1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("SaveCredit", async function SaveCredit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t17 = (await $.mv((await $.v(C, "RtDataModule")), "PersonLink"));
    const $t18 = (await $.wv([$t17], "SavedCredit", C, false));
    await $.wset([$t17, $t18], "Currency", (await $.mv((await $.wcall([$t17, $t18], "FieldByName", ["Currency"], C)), "AsInteger")), C);
    await $.wset([$t17, $t18], "CreditLineAmount", (await $.mv((await $.wcall([$t17, $t18], "FieldByName", ["CREDITLINEAMOUNT"], C)), "AsFloat")), C);
    await $.wset([$t17, $t18], "AnnualyInterestRate", (await $.mv((await $.wcall([$t17, $t18], "FieldByName", ["AnnualyInterestRate"], C)), "AsFloat")), C);
    await $.wset([$t17, $t18], "AnnualyOverdueRate", (await $.mv((await $.wcall([$t17, $t18], "FieldByName", ["AnnualyOverdueRate"], C)), "AsFloat")), C);
    await $.wset([$t17, $t18], "AnnualyPenaltyRate", (await $.mv((await $.wcall([$t17, $t18], "FieldByName", ["AnnualyPenaltyRate"], C)), "AsFloat")), C);
    await $.wset([$t17, $t18], "DateOfConclusion", (await $.wcall([$t17, $t18], "Int", [(await $.mv((await $.wcall([$t17, $t18], "FieldByName", ["DateOfConclusion"], C)), "AsDateTime"))], C)), C);
    await $.wset([$t17, $t18], "DueDateFirstContract", (await $.wcall([$t17, $t18], "Int", [(await $.mv((await $.wcall([$t17, $t18], "FieldByName", ["DueDateFirstContract"], C)), "AsDateTime"))], C)), C);
    await $.wset([$t17, $t18], "NumberOfCredit", (await $.mv((await $.wcall([$t17, $t18], "FieldByName", ["NumberOfCredit"], C)), "AsString")), C);
    await $.wset([$t17, $t18], "PurposeOfCredit", (await $.mv((await $.wcall([$t17, $t18], "FieldByName", ["PurposeOfCredit"], C)), "AsString")), C);
    await $.wset([$t17, $t18], "BranchID", (await $.mv((await $.wcall([$t17, $t18], "FieldByName", ["BranchID"], C)), "AsInteger")), C);
    await $.wset([$t17, $t18], "pldgid_t", (await $.mv((await $.wcall([$t17, $t18], "FieldByName", ["PLEDGEID_P"], C)), "Asinteger")), C);
    await $.wset([$t17, $t18], "boorowerid", (await $.wcall([$t17, $t18], "strtoint", [(await $.wv([$t17, $t18], "rt", C, false))], C)), C);
    await $.wset([$t17, $t18], "ins", 1, C);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TMainForm", "CalcFullIntpayment", async function CalcFullIntpayment(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = 0;
  {
    const $t19 = (await $.v(C, "RtDataModule"));
    const $t20 = (await $.wv([$t19], "ScheduleData", C, false));
    await $.stmt($.wcall([$t19, $t20], "First", [], C));
    while ($.truthy($.not((await $.wv([$t19, $t20], "EOF", C, false))))) {
      await $.wset([$t19, $t20], "result", $.add((await $.wv([$t19, $t20], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t19, $t20], "FieldByName", ["INTEREST"], C)), "AsFloat"))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      await $.stmt($.wcall([$t19, $t20], "Next", [], C));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainForm", "exportreport", async function exportreport(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"creditid": $.copyArg(p0), result: undefined, "factint": 0, "s": ''};
  await $.fixArgs(L0, ["creditid"]);
  {
    const $t21 = (await $.v(C, "RtDataModule"));
    {
      const $t22 = (await $.wv([$t21], "ScheduleData", C, false));
      await $.stmt($.wcall([$t21, $t22], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t21, $t22], "SetVariable", ["CreditID", (await $.wv([$t21, $t22], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t21, $t22], "Open", [], C));
    }
    {
      const $t23 = (await $.wv([$t21], "BoorowerInfo", C, false));
      await $.stmt($.wcall([$t21, $t23], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t21, $t23], "SetVariable", ["CreditID", (await $.wv([$t21, $t23], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t21, $t23], "Open", [], C));
    }
    {
      const $t24 = (await $.wv([$t21], "CreditInfo", C, false));
      await $.stmt($.wcall([$t21, $t24], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t21, $t24], "SetVariable", ["ID", (await $.wv([$t21, $t24], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t21, $t24], "Open", [], C));
    }
    await $.mcall((await $.wv([$t21], "BankInfo", C, false)), "open", []);
    await $.mcall((await $.wv([$t21], "HeadOfficeID", C, false)), "open", []);
    if ($.truthy((await $.mv((await $.wv([$t21], "FilialInfo", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t21], "FilialInfo", C, false)), "CloseAll", []);
    }
    await $.stmt((await $.mcall((await $.wv([$t21], "FilialInfo", C, false)), "SetVariable", ["brid", (await $.mv((await $.mcall((await $.wv([$t21], "CreditInfo", C, false)), "FieldByName", ["BranchID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t21], "FilialInfo", C, false)), "Open", []);
    await $.mset((await $.mv((await $.wv([$t21], "FormReport", C, false)), "QRLabel11")), "Caption", (await $.mv((await $.mcall((await $.wv([$t21], "FilialInfo", C, false)), "fieldByName", ["name"])), "asstring")));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t21], "FilialInfo", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t21], "HeadOfficeID", C, false)), "FieldbyName", ["minid"])), "AsInteger"))))) {
      await $.mset((await $.mv((await $.wv([$t21], "FormReport", C, false)), "QRLabel10")), "caption", "Müştəri xidmətləri departamentinin direktoru______________________________");
    } else {
      await $.mset((await $.mv((await $.wv([$t21], "FormReport", C, false)), "QRLabel10")), "caption", "Filial direktoru");
    }
  }
  {
    const $t25 = (await $.v(C, "RtDataModule"));
    const $t26 = (await $.wv([$t25], "CreditInfo", C, false));
    await $.wset([$t25, $t26], "factint", $.mul(($.fdiv((await $.wv([$t25, $t26], "CalcFullIntpayment", C, false)), (await $.mv((await $.wcall([$t25, $t26], "FieldByName", ["CREDITLINEAMOUNT"], C)), "AsFloat")))), 100), { get: async () => L0["factint"], set: async (v) => { L0["factint"] = v; }, local: true });
    await $.wset([$t25, $t26], "s", (await $.wcall([$t25, $t26], "FloatToStr", [(await $.mv((await $.wcall([$t25, $t26], "FieldByName", ["ANNUALYINTERESTRATE"], C)), "AsFloat"))], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
  }
  {
    const $t27 = (await $.v(C, "FormReport"));
    await $.mset((await $.wv([$t27], "ANNUALYINTERESTRATE", C, false)), "Caption", $.add((await $.wv([$t27], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), "%"));
    await $.mset((await $.wv([$t27], "FullIntPayment", C, false)), "Caption", (await $.wcall([$t27], "FloatToStr", [(await $.wv([$t27], "CalcFullIntpayment", C, false))], C)));
    await $.wset([$t27], "s", (await $.wcall([$t27], "Floattostr", [(await $.wv([$t27], "factint", { get: async () => L0["factint"], set: async (v) => { L0["factint"] = v; }, local: true }, false))], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
    await $.mset((await $.wv([$t27], "Facticalintforrest", C, false)), "Caption", $.add((await $.wv([$t27], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), "%"));
    await $.mcall((await $.wv([$t27], "QrpfrmRep", C, false)), "Preview", []);
  }
  return L0.result;
}, {"params": ["CreditID"], "kind": "procedure", "ptypes": ["integer"]});
  U.method("TMainForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "girov": 0, "ammount": 0, "girovv": '', "yazidat": '', "valname": '', "yaz": '', "dat": 0, "template": null, "templatebool": null, "ftemplatepath": null, "itemindex": null, "obookmarkcount": null, "what": null, "obookmarkname": null, "ibookmarkcount": 0, "tfieldname": '', "savechanges": null, "originalformat": null, "routedocument": null};
  await $.fixArgs(L0, ["sender"]);
  L0["filenotfound"] = "Fayıl tapılmadı";
  await $.set(C, "cradd", 1);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "RtDataModule")), "PersonLink")), "FieldByName", ["AnnualyInterestRate"])), "AsFloat", (await $.mv((await $.v(C, "DBNumberEditEh2")), "Value")));
  await $.stmt($.call(C, "SaveCredit", []));
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh14")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Valyutanı seçin!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit2")), "Text")), "0"))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Kreditin məbləğini daxil edin! "])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBNumberEditEh2")), "Text")), "0"))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Kreditin faiz dərəcəsini daxil edin ! "])));
    return L0.result;
  }
  {
    const $t28 = (await $.mv((await $.v(C, "RtDataModule")), "Customers"));
    if ($.truthy((await $.wv([$t28], "Active", C, false)))) {
      await $.stmt($.wcall([$t28], "open", [], C));
    }
    await $.stmt((await $.wcall([$t28], "SetVariable", ["id", (await $.wv([$t28], "rt", C, false))], C)));
    await $.stmt($.wcall([$t28], "open", [], C));
    if ($.truthy($.eq((await $.mv((await $.wcall([$t28], "FieldByName", ["cust_type"], C)), "AsInteger")), 4))) {
      await $.stmt((await $.wcall([$t28], "ShowMessage", ["   Nominal müştəriyə kredit vermək olmaz  ! "], C)));
      return L0.result;
    }
  }
  await $.mcall((await $.mv((await $.v(C, "RtDataModule")), "PersonLink")), "Post", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "RtDataModule")), "PersonLink")), "Session")), "Commit", []);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [$.add($.add("     Əməliyyat uğrla yerinə yetrildi   ", "\r"), "Kredit müqaviləsini çap etmək istəyirsinizmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t29 = (await $.v(C, "RtDataModule"));
      await $.mcall((await $.wv([$t29], "TemplatesDataSet", C, false)), "close", []);
      await $.stmt((await $.mcall((await $.wv([$t29], "TemplatesDataSet", C, false)), "SetVariable", ["mehid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t29], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t29], "TemplatesDataSet", C, false)), "open", []);
      await $.mcall((await $.wv([$t29], "ReplaceDataSet", C, false)), "open", []);
      if ($.truthy((await $.mv((await $.wv([$t29], "BookmarksDataSet", C, false)), "Active")))) {
        await $.mcall((await $.wv([$t29], "BookmarksDataSet", C, false)), "close", []);
      }
      await $.stmt((await $.mcall((await $.wv([$t29], "BookmarksDataSet", C, false)), "SetVariable", ["templid", (await $.wv([$t29], "TemplID", C, false))])));
      await $.mcall((await $.wv([$t29], "BookmarksDataSet", C, false)), "Open", []);
      if ($.truthy((await $.mv((await $.wv([$t29], "yazi", C, false)), "Active")))) {
        await $.mcall((await $.wv([$t29], "yazi", C, false)), "close", []);
      }
      await $.stmt((await $.mcall((await $.wv([$t29], "yazi", C, false)), "SetVariable", ["id", (await $.wv([$t29], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))])));
      await $.mcall((await $.wv([$t29], "yazi", C, false)), "open", []);
      await $.wset([$t29], "ammount", (await $.mv((await $.mcall((await $.wv([$t29], "yazi", C, false)), "FieldByName", ["CREDITLINEAMOUNT"])), "asfloat")), { get: async () => L0["ammount"], set: async (v) => { L0["ammount"] = v; }, local: true });
      await $.wset([$t29], "dat", (await $.mv((await $.mcall((await $.wv([$t29], "yazi", C, false)), "FieldByName", ["per"])), "asinteger")), { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true });
      await $.wset([$t29], "girov", (await $.mv((await $.mcall((await $.wv([$t29], "yazi", C, false)), "FieldByName", ["pledgeprice"])), "asfloat")), { get: async () => L0["girov"], set: async (v) => { L0["girov"] = v; }, local: true });
      await $.wset([$t29], "valname", (await $.mv((await $.mcall((await $.wv([$t29], "yazi", C, false)), "FieldByName", ["VALU_NAME"])), "asstring")), { get: async () => L0["valname"], set: async (v) => { L0["valname"] = v; }, local: true });
      await $.wset([$t29], "yaz", (await $.wcall([$t29], "CurrencyToHR_Azeri", [(await $.wv([$t29], "ammount", { get: async () => L0["ammount"], set: async (v) => { L0["ammount"] = v; }, local: true }, false)), 0, [0], (await $.wv([$t29], "valname", { get: async () => L0["valname"], set: async (v) => { L0["valname"] = v; }, local: true }, false))], C)), { get: async () => L0["yaz"], set: async (v) => { L0["yaz"] = v; }, local: true });
      await $.wset([$t29], "yazidat", (await $.wcall([$t29], "CurrencyToHR_Azeri", [(await $.wv([$t29], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false)), 0, [0], "ay"], C)), { get: async () => L0["yazidat"], set: async (v) => { L0["yazidat"] = v; }, local: true });
      await $.wset([$t29], "girovv", (await $.wcall([$t29], "CurrencyToHR_Azeri", [(await $.wv([$t29], "girov", { get: async () => L0["girov"], set: async (v) => { L0["girov"] = v; }, local: true }, false)), 0, [0], "man"], C)), { get: async () => L0["girovv"], set: async (v) => { L0["girovv"] = v; }, local: true });
      if ($.truthy((await $.mv((await $.wv([$t29], "CreditInfoDataSet", C, false)), "Active")))) {
        await $.mcall((await $.wv([$t29], "CreditInfoDataSet", C, false)), "close", []);
      }
      await $.stmt((await $.mcall((await $.wv([$t29], "CreditInfoDataSet", C, false)), "SetVariable", ["crid", (await $.wv([$t29], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))])));
      await $.stmt((await $.mcall((await $.wv([$t29], "CreditInfoDataSet", C, false)), "SetVariable", ["man", (await $.wv([$t29], "yaz", { get: async () => L0["yaz"], set: async (v) => { L0["yaz"] = v; }, local: true }, false))])));
      await $.stmt((await $.mcall((await $.wv([$t29], "CreditInfoDataSet", C, false)), "SetVariable", ["dat", (await $.wv([$t29], "yazidat", { get: async () => L0["yazidat"], set: async (v) => { L0["yazidat"] = v; }, local: true }, false))])));
      await $.stmt((await $.mcall((await $.wv([$t29], "CreditInfoDataSet", C, false)), "SetVariable", ["gir", (await $.wv([$t29], "girovv", { get: async () => L0["girovv"], set: async (v) => { L0["girovv"] = v; }, local: true }, false))])));
      await $.mcall((await $.wv([$t29], "CreditInfoDataSet", C, false)), "Open", []);
    }
    L0["what"] = (await $.call(C, "OleVariant", [(await $.v(C, "wdGoToBookmark"))]));
    L0["ftemplatepath"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "RtDataModule")), "TemplatesDataSet")), "FieldByName", ["Path"])), "AsString"));
    await $.set(C, "TemplID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "RtDataModule")), "TemplatesDataSet")), "FieldByName", ["ID"])), "AsInteger")));
    L0["template"] = (await $.v(C, "EmptyParam"));
    L0["templatebool"] = false;
    L0["itemindex"] = 1;
    await $.mcall((await $.v(C, "Wordapplication")), "Connect", []);
    await $.mset((await $.v(C, "Wordapplication")), "Visible", true);
    await $.mset((await $.mv((await $.mv((await $.v(C, "WordApplication")), "Documents")), "Application")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "RtDataModule")), "TemplatesDataSet")), "FieldByName", ["name"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "WordApplication")), "Options")), "CheckSpellingAsYouType", false);
    await $.mset((await $.mv((await $.v(C, "WordApplication")), "Options")), "CheckGrammarAsYouType", false);
    if ($.truthy((await $.call(C, "FileExists", [L0["ftemplatepath"]])))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "WordApplication")), "Documents")), "Open", [L0["ftemplatepath"], L0["template"], L0["templatebool"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"]])));
    } else {
      L0["savechanges"] = (await $.v(C, "WdDoNotSaveChanges"));
      L0["originalformat"] = (await $.v(C, "UnAssigned"));
      L0["routedocument"] = (await $.v(C, "UnAssigned"));
      await $.stmt((await $.mcall((await $.v(C, "WordApplication")), "Quit", [L0["savechanges"], L0["originalformat"], L0["routedocument"]])));
      await $.mcall((await $.v(C, "WordApplication")), "Disconnect", []);
      await $.stmt((await $.call(C, "ShowMessage", [L0["filenotfound"]])));
    }
    await $.stmt((await $.mcall((await $.v(C, "WordDocument")), "ConnectTo", [(await $.mcall((await $.mv((await $.v(C, "WordApplication")), "Documents")), "Item", [L0["itemindex"]]))])));
    await $.mset((await $.mv((await $.mv((await $.v(C, "WordDocument")), "Application")), "Get_ActiveWindow")), "Caption", (await $.v(C, "Caption")));
    try {
      {
        const $t31 = (await $.v(C, "RtDataModule"));
        const $t32 = (await $.wv([$t31], "ReplaceDataSet", C, false));
        const $t33 = (await $.wv([$t31, $t32], "WordDocument", C, false));
        { const $t34 = (await $.mv((await $.wv([$t31, $t32, $t33], "Bookmarks", C, false)), "Count"));
          await $.wset([$t31, $t32, $t33], "IbookmarkCount", 1, { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true });
          let $t35 = true;
          for (;;) {
            if (!$t35) { await $.wset([$t31, $t32, $t33], "IbookmarkCount", $.succ((await $.wv([$t31, $t32, $t33], "IbookmarkCount", { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }, false)), 1), { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }); }
            $t35 = false;
            if (!($.ord((await $.wv([$t31, $t32, $t33], "IbookmarkCount", { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }, false))) <= $.ord($t34))) break;
            await $.wset([$t31, $t32, $t33], "OBookmarkCount", (await $.wv([$t31, $t32, $t33], "IbookmarkCount", { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }, false)), { get: async () => L0["obookmarkcount"], set: async (v) => { L0["obookmarkcount"] = v; }, local: true });
            await $.wset([$t31, $t32, $t33], "oBookMarkName", (await $.mv((await $.mcall((await $.wv([$t31, $t32, $t33], "Bookmarks", C, false)), "Item", [(await $.wv([$t31, $t32, $t33], "OBookmarkCount", { get: async () => L0["obookmarkcount"], set: async (v) => { L0["obookmarkcount"] = v; }, local: true }, false))])), "Get_Name")), { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true });
            await $.stmt((await $.mcall((await $.mv((await $.wv([$t31, $t32, $t33], "WordApplication", C, false)), "Selection")), "GoTo_", [(await $.wv([$t31, $t32, $t33], "What", { get: async () => L0["what"], set: async (v) => { L0["what"] = v; }, local: true }, false)), (await $.wv([$t31, $t32, $t33], "EmptyParam", C, false)), (await $.wv([$t31, $t32, $t33], "EmptyParam", C, false)), (await $.wv([$t31, $t32, $t33], "oBookMarkName", { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true }, false))])));
            await $.mcall((await $.wv([$t31, $t32, $t33], "ReplaceDataSet", C, false)), "Close", []);
            await $.stmt((await $.wcall([$t31, $t32, $t33], "SetVariable", ["tid", (await $.wv([$t31, $t32, $t33], "TemplID", C, false))], C)));
            await $.stmt((await $.wcall([$t31, $t32, $t33], "SetVariable", ["bname", (await $.wv([$t31, $t32, $t33], "oBookMarkName", { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true }, false))], C)));
            await $.mcall((await $.wv([$t31, $t32, $t33], "ReplaceDataSet", C, false)), "Open", []);
            await $.wset([$t31, $t32, $t33], "tFieldName", (await $.mv((await $.wcall([$t31, $t32, $t33], "FIeldByName", ["FIELDNAME"], C)), "AsString")), { get: async () => L0["tfieldname"], set: async (v) => { L0["tfieldname"] = v; }, local: true });
            await $.stmt((await $.mcall((await $.mv((await $.wv([$t31, $t32, $t33], "WordApplication", C, false)), "Selection")), "InsertAfter", [(await $.mv((await $.mcall((await $.wv([$t31, $t32, $t33], "CreditInfoDataSet", C, false)), "FieldByName", [(await $.wv([$t31, $t32, $t33], "tFieldName", { get: async () => L0["tfieldname"], set: async (v) => { L0["tfieldname"] = v; }, local: true }, false))])), "AsString"))])));
            await $.tick();
          }
        }
      }
      await $.mcall((await $.v(C, "WordDocument")), "Disconnect", []);
      await $.mcall((await $.v(C, "Wordapplication")), "Disconnect", []);
    } catch ($t30) {
      $.rethrowControl($t30);
      $.handled($t30);
      L0["savechanges"] = (await $.v(C, "WdDoNotSaveChanges"));
      L0["originalformat"] = (await $.v(C, "UnAssigned"));
      L0["routedocument"] = (await $.v(C, "UnAssigned"));
      await $.stmt((await $.mcall((await $.v(C, "WordApplication")), "Quit", [L0["savechanges"], L0["originalformat"], L0["routedocument"]])));
      await $.mcall((await $.v(C, "WordApplication")), "Disconnect", []);
      await $.stmt((await $.call(C, "ShowMessage", ["Bukmarklar daxil edilmeyib "])));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "RtDataModule")), "PersonLinkAUTOSCEDULE")), "AsInteger")), 1))) {
    if ($.truthy($.eq((await $.call(C, "MessageDlg", ["   Ödəmə planını  çap etmək istəyirsinizmi ?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
      await $.stmt((await $.call(C, "exportreport", [L0["result"]])));
    }
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t36 = (await $.mv((await $.v(C, "RtDataModule")), "PersonLink"));
    const $t37 = (await $.wv([$t36], "SavedCredit", C, false));
    await $.wset([$t36, $t37], "ins", 0, C);
    await $.wset([$t36, $t37], "boorowerid", 0, C);
    await $.mcall((await $.mv((await $.wv([$t36, $t37], "RtDataModule", C, false)), "PersonLink")), "close", []);
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "width", 232);
  await $.mset((await $.v(C, "Panel1")), "Visible", false);
  await $.set(C, "Caption", "Smart");
  await $.mset((await $.v(C, "panel19")), "Visible", true);
  {
    const $t38 = (await $.v(C, "RtDataModule"));
    { const $t39 = await $.iset((await $.mv((await $.wv([$t38], "PersonLink", C, false)), "SQL")), [3], ""); if ($t39 !== undefined) { await $.mset((await $.wv([$t38], "PersonLink", C, false)), "SQL", $t39); } }
    await $.mcall((await $.wv([$t38], "PersonLink", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainForm", "XDBGrid1CellDblClick", async function XDBGrid1CellDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "i": 0, "s": 0};
  await $.fixArgs(L0, ["column"]);
  await $.set(C, "width", 433);
  await $.mset((await $.v(C, "Panel1")), "Visible", true);
  await $.mset((await $.v(C, "panel19")), "Visible", false);
  await $.set(C, "Caption", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["name"])), "asstring")));
  L0["s"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"));
  {
    const $t40 = (await $.v(C, "RtDataModule"));
    if ($.truthy((await $.mv((await $.wv([$t40], "PersonLink", C, false)), "active")))) {
      await $.mcall((await $.wv([$t40], "PersonLink", C, false)), "close", []);
    }
    { const $t41 = await $.iset((await $.mv((await $.wv([$t40], "PersonLink", C, false)), "SQL")), [3], $.add("and id=", (await $.wcall([$t40], "inttostr", [(await $.wv([$t40], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)))); if ($t41 !== undefined) { await $.mset((await $.wv([$t40], "PersonLink", C, false)), "SQL", $t41); } }
    await $.mcall((await $.wv([$t40], "PersonLink", C, false)), "Open", []);
    {
      const $t42 = (await $.wv([$t40], "PersonLink", C, false));
      if ($.truthy($.eq((await $.mv((await $.wcall([$t40, $t42], "FieldByName", ["f1"], C)), "AsInteger")), 0))) {
        await $.mset((await $.wv([$t40, $t42], "DBNumberEditEh2", C, false)), "Enabled", (await $.wv([$t40, $t42], "false", C, false)));
      } else {
        await $.mset((await $.wv([$t40, $t42], "DBNumberEditEh2", C, false)), "Enabled", (await $.wv([$t40, $t42], "true", C, false)));
      }
      if ($.truthy($.eq((await $.mv((await $.wcall([$t40, $t42], "FieldByName", ["f2"], C)), "AsInteger")), 0))) {
        await $.mset((await $.wv([$t40, $t42], "DBNumberEditEh4", C, false)), "Enabled", (await $.wv([$t40, $t42], "false", C, false)));
      } else {
        await $.mset((await $.wv([$t40, $t42], "DBNumberEditEh4", C, false)), "Enabled", (await $.wv([$t40, $t42], "true", C, false)));
      }
      if ($.truthy($.eq((await $.mv((await $.wcall([$t40, $t42], "FieldByName", ["f3"], C)), "AsInteger")), 0))) {
        await $.mset((await $.wv([$t40, $t42], "DBNumberEditEh5", C, false)), "Enabled", (await $.wv([$t40, $t42], "false", C, false)));
      } else {
        await $.mset((await $.wv([$t40, $t42], "DBNumberEditEh5", C, false)), "Enabled", (await $.wv([$t40, $t42], "true", C, false)));
      }
    }
    await $.mcall((await $.wv([$t40], "PersonLink", C, false)), "Edit", []);
    await $.mset((await $.mcall((await $.wv([$t40], "PersonLink", C, false)), "FieldByName", ["DATEOFCONCLUSION"])), "AsDateTime", (await $.wv([$t40], "Get_CurrentDate", C, false)));
    await $.mset((await $.mcall((await $.wv([$t40], "PersonLink", C, false)), "FieldByName", ["DUEDATEFIRSTCONTRACT"])), "AsDateTime", (await $.wv([$t40], "Get_CurrentDate", C, false)));
    if ($.truthy($.eq((await $.mv((await $.wv([$t40], "Branches", C, false)), "RecordCount")), 1))) {
      await $.mset((await $.mcall((await $.wv([$t40], "PersonLink", C, false)), "FieldByName", ["BRANCHID"])), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t40], "Branches", C, false)), "FieldByName", ["id"])), "AsInteger")));
    } else {
      await $.mset((await $.mcall((await $.wv([$t40], "PersonLink", C, false)), "FieldByName", ["BRANCHID"])), "AsInteger", (await $.wv([$t40], "Get_BranchID", C, false)));
    }
    await $.mset((await $.mcall((await $.wv([$t40], "PersonLink", C, false)), "FieldByName", ["numberofcredit"])), "asstring", "");
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t40], "PersonLink", C, false)), "FieldByName", ["AUTOCONTRACTNO"])), "AsInteger")), 1))) {
      await $.mcall((await $.wv([$t40], "OracleDataSet2", C, false)), "Close", []);
      await $.mcall((await $.wv([$t40], "OracleDataSet2", C, false)), "open", []);
      await $.mset((await $.mcall((await $.wv([$t40], "PersonLink", C, false)), "FieldByName", ["numberofcredit"])), "asstring", $.add((await $.mv((await $.mcall((await $.wv([$t40], "OracleDataSet2", C, false)), "FieldByName", ["num"])), "asstring")), (await $.wcall([$t40], "inttostr", [(await $.mv((await $.mcall((await $.wv([$t40], "Branches", C, false)), "FieldByName", ["id"])), "AsInteger"))], C))));
    }
    await $.mcall((await $.wv([$t40], "comp", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t40], "comp", C, false)), "SetVariable", ["mehid", (await $.wv([$t40], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))])));
    await $.mcall((await $.wv([$t40], "comp", C, false)), "open", []);
    await $.mset((await $.wv([$t40], "DBNumberEditEh1", C, false)), "Value", 0);
    await $.mset((await $.mcall((await $.wv([$t40], "PersonLink", C, false)), "FieldByName", ["CREDITLINEAMOUNT"])), "AsFloat", 0);
  }
  { const $t43 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t44 = true;
    for (;;) {
      if (!$t44) { L0["i"] = $.succ(L0["i"], 1); }
      $t44 = false;
      if (!($.ord(L0["i"]) <= $.ord($t43))) break;
      if ($.truthy(($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "ClassType")), (await $.v(C, "Tpanel")))))) {
        if ($.truthy($.eq((await $.mv(((await $.idx((await $.v(C, "Components")), [L0["i"]]))), "Tag")), 2))) {
          await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Align", (await $.v(C, "alnone")));
          await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Visible", false);
        }
      }
      await $.tick();
    }
  }
  { const $t45 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t46 = true;
    for (;;) {
      if (!$t46) { L0["i"] = $.succ(L0["i"], 1); }
      $t46 = false;
      if (!($.ord(L0["i"]) <= $.ord($t45))) break;
      if ($.truthy(($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "ClassType")), (await $.v(C, "Tpanel")))))) {
        if ($.truthy($.eq((await $.mv(((await $.idx((await $.v(C, "Components")), [L0["i"]]))), "Tag")), 2))) {
          await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Visible", true);
          await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Align", (await $.v(C, "altop")));
          await $.mcall((await $.mv((await $.v(C, "RtDataModule")), "comp")), "Close", []);
          { const $t47 = await $.iset((await $.mv((await $.mv((await $.v(C, "RtDataModule")), "comp")), "sql")), [3], $.add($.add($.add("and name =", "'"), (await $.mv(((await $.idx((await $.v(C, "Components")), [L0["i"]]))), "Name"))), "'")); if ($t47 !== undefined) { await $.mset((await $.mv((await $.v(C, "RtDataModule")), "comp")), "sql", $t47); } }
          await $.mcall((await $.mv((await $.v(C, "RtDataModule")), "comp")), "open", []);
          if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "RtDataModule")), "comp")), "RecordCount")), 0))) {
            await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Visible", (await $.mv((await $.mcall((await $.mv((await $.v(C, "RtDataModule")), "comp")), "FieldByName", ["status"])), "AsBoolean")));
          }
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "MainForm", (await $.mcall((await $.v(C, "TMainForm")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}
