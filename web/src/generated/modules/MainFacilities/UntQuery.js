// Generated from UntQuery.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntQuery", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "Buttons", "ComCtrls", "Spin", "MFDataModule", "UntMainFacilitiesImpl", "SBTransaction"]);
  const C = [U];
  U.defClass("EInvalidDate", "Exception", {}, {});
  U.defClass("TFrmQuery", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "elastclosedmonth": {"name": "ELastClosedMonth", "type": "TEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dtpnewclosedate": {"name": "DTPNewCloseDate", "type": "TDateTimePicker"}, "enewclosedate": {"name": "ENewCloseDate", "type": "TEdit"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "notesmemo": {"name": "NotesMemo", "type": "TMemo"}, "tranzprogressbar": {"name": "TranzProgressBar", "type": "TProgressBar"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "spineditdays": {"name": "SpinEditDays", "type": "TSpinEdit"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "eoperationdate": {"name": "EOperationDate", "type": "TEdit"}, "dtpoperationdate": {"name": "DTPOperationDate", "type": "TDateTimePicker"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}}, {});
  U.init(async () => {
    U.var_("FrmQuery", null, "TFrmQuery");
  });
  U.method("TFrmQuery", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmQuery", "GenerateTransAssignment", async function GenerateTransAssignment(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"groupname": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["groupname"]);
  L0["assignment"] = "%s qrupu üzrə amortizasiya";
  L0["result"] = (await $.call(C, "Format", [L0["assignment"], [L0["groupname"]]]));
  return L0.result;
}, {"params": ["GroupName"], "kind": "function", "ptypes": ["String"]});
  U.method("TFrmQuery", "RefreshContacts", async function RefreshContacts(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.v(C, "MainFDataModule"));
    await $.mcall((await $.wv([$t1], "ODSSumWares", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t1], "ODSSumModWares", C, false)), "Refresh", []);
    await $.mcall((await $.wv([$t1], "ODSSumRepair", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmQuery", "GetLastCalculateDate", async function GetLastCalculateDate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  {
    const $t2 = (await $.mv((await $.v(C, "MainFDataModule")), "OPViewWares"));
    await $.wset([$t2], "Result", (await $.wcall([$t2], "CallDateFunction", ["GetLastCalculateDate", []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmQuery", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ELastClosedMonth")), "Text", (await $.call(C, "FormatDateTime", ["dd-mmm-yyyy", (await $.v(C, "GetLastCalculateDate"))])));
  await $.mset((await $.v(C, "ENewCloseDate")), "Text", (await $.call(C, "FormatDateTime", ["dd-mmm-yyyy", (await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "OPViewWares")), "CallDateFunction", ["GetPresentDate", []]))])));
  await $.mset((await $.v(C, "DTPNewCloseDate")), "DateTime", (await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "OPViewWares")), "CallDateFunction", ["GetPresentDate", []])));
  await $.mset((await $.v(C, "DTPOperationDate")), "DateTime", (await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "OPViewWares")), "CallDateFunction", ["GetPresentDate", []])));
  await $.mset((await $.v(C, "EOperationDate")), "Text", (await $.call(C, "FormatDateTime", ["dd-mmm-yyyy", (await $.mcall((await $.mv((await $.v(C, "MainFDataModule")), "OPViewWares")), "CallDateFunction", ["GetPresentDate", []]))])));
  await $.mset((await $.v(C, "SpinEditDays")), "Text", ((await $.call(C, "FloatToStr", [$.sub((await $.call(C, "Int", [(await $.mv((await $.v(C, "DTPNewCloseDate")), "DateTime"))])), (await $.v(C, "GetLastCalculateDate")))]))));
  await $.mcall((await $.v(C, "TranzProgressBar")), "Hide", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmQuery", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy(($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFrmQuery", "DTPNewCloseDateChange", async function DTPNewCloseDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ENewCloseDate")), "Text", (await $.call(C, "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((L0["sender"]), "Date"))])));
  await $.mset((await $.v(C, "SpinEditDays")), "Text", ((await $.call(C, "FloatToStr", [$.sub((await $.call(C, "Int", [(await $.mv((await $.v(C, "DTPNewCloseDate")), "DateTime"))])), (await $.v(C, "GetLastCalculateDate")))]))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmQuery", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmQuery", "SpeedButton4Click", async function SpeedButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "closed": 0, "operationdate": 0, "tempid": 0, "transaction": $.rec("ttransaction")};
  await $.fixArgs(L0, ["sender"]);
  L0["closed"] = (await $.call(C, "Int", [(await $.mv((await $.v(C, "DTPNewCloseDate")), "DateTime"))]));
  if ($.truthy($.le(L0["closed"], (await $.v(C, "GetLastCalculateDate"))))) {
    throw $.raise((await $.mcall((await $.v(C, "EInvalidDate")), "Create", [$.add($.add("You can not calculate for past day!", "\r"), "You can not calculate twice in 1 day!")])));
  }
  L0["operationdate"] = (await $.call(C, "Int", [(await $.mv((await $.v(C, "DTPOperationDate")), "DateTime"))]));
  await $.mcall((await $.v(C, "TranzProgressBar")), "Show", []);
  await $.mset((await $.v(C, "TranzProgressBar")), "Position", 0);
  await $.stmt((await $.mcall((await $.v(C, "TranzProgressBar")), "StepBy", [15])));
  {
    const $t3 = (await $.v(C, "MainFDataModule"));
    await $.stmt((await $.mcall((await $.wv([$t3], "TranzProgressBar", C, false)), "Stepby", [10])));
    await $.stmt((await $.mcall((await $.wv([$t3], "OPViewWares", C, false)), "CallProcedure", ["CalculateOldWares", [(await $.wv([$t3], "CloseD", { get: async () => L0["closed"], set: async (v) => { L0["closed"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t3], "SpinEditDays", C, false)), "Value"))]])));
    await $.stmt((await $.mcall((await $.wv([$t3], "TranzProgressBar", C, false)), "Stepby", [20])));
    await $.stmt((await $.mcall((await $.wv([$t3], "OPViewWares", C, false)), "CallProcedure", ["add_close_month", [(await $.wv([$t3], "CloseD", { get: async () => L0["closed"], set: async (v) => { L0["closed"] = v; }, local: true }, false))]])));
    await $.stmt((await $.mcall((await $.wv([$t3], "OPViewWares", C, false)), "CallProcedure", ["CalculateNewWares", [(await $.wv([$t3], "CloseD", { get: async () => L0["closed"], set: async (v) => { L0["closed"] = v; }, local: true }, false))]])));
    await $.stmt((await $.mcall((await $.wv([$t3], "TranzProgressBar", C, false)), "StepBy", [35])));
    await $.mcall((await $.wv([$t3], "ViewWares", C, false)), "Refresh", []);
    await $.stmt((await $.mcall((await $.wv([$t3], "TranzProgressBar", C, false)), "StepBy", [20])));
    {
      const $t4 = (await $.mv((await $.wv([$t3], "MainFDataModule", C, false)), "ODSTransaction"));
      await $.stmt($.wcall([$t3, $t4], "Open", [], C));
      await $.stmt($.wcall([$t3, $t4], "First", [], C));
      while ($.truthy($.not(((await $.wv([$t3, $t4], "Eof", C, false)))))) {
        {
          const $t5 = (await $.wv([$t3, $t4], "Transaction", { get: async () => L0["transaction"], set: async (v) => { L0["transaction"] = v; }, local: true }, false));
          await $.wset([$t3, $t4, $t5], "Size", 0, C);
          await $.wset([$t3, $t4, $t5], "TransactionDate", (await $.wv([$t3, $t4, $t5], "OperationDate", { get: async () => L0["operationdate"], set: async (v) => { L0["operationdate"] = v; }, local: true }, false)), C);
          await $.wset([$t3, $t4, $t5], "hDebit", (await $.mv((await $.mcall((await $.wv([$t3, $t4, $t5], "ODSTransaction", C, false)), "FieldByName", ["Exp_account"])), "Value")), C);
          await $.wset([$t3, $t4, $t5], "hCredit", (await $.mv((await $.mcall((await $.wv([$t3, $t4, $t5], "ODSTransaction", C, false)), "FieldByName", ["Amort_account"])), "Value")), C);
          await $.wset([$t3, $t4, $t5], "DebitAmount", (await $.mv((await $.mcall((await $.wv([$t3, $t4, $t5], "ODSTransaction", C, false)), "FieldByName", ["Rest"])), "Value")), C);
          await $.wset([$t3, $t4, $t5], "CreditAmount", (await $.mv((await $.mcall((await $.wv([$t3, $t4, $t5], "ODSTransaction", C, false)), "FieldByName", ["Rest"])), "Value")), C);
          await $.wset([$t3, $t4, $t5], "LAmount", (await $.mv((await $.mcall((await $.wv([$t3, $t4, $t5], "ODSTransaction", C, false)), "FieldByName", ["Rest"])), "Value")), C);
          await $.wset([$t3, $t4, $t5], "DebitRate", 1, C);
          await $.wset([$t3, $t4, $t5], "CreditRate", 1, C);
          await $.wset([$t3, $t4, $t5], "ParentID", 0, C);
          await $.wset([$t3, $t4, $t5], "DebitBankID", 0, C);
          await $.wset([$t3, $t4, $t5], "CreditBankID", 0, C);
          await $.wset([$t3, $t4, $t5], "FilialID", 0, C);
          await $.wset([$t3, $t4, $t5], "PackageNumber", 0, C);
          await $.wset([$t3, $t4, $t5], "InbalanceChar", 0, C);
          await $.wset([$t3, $t4, $t5], "OutBalanceChar", 0, C);
          await $.wset([$t3, $t4, $t5], "CypherCode", 0, C);
          await $.wset([$t3, $t4, $t5], "OperationCode", 0, C);
          await $.wset([$t3, $t4, $t5], "TransactionID", (-(1)), C);
          await $.wset([$t3, $t4, $t5], "TrName", (await $.wcall([$t3, $t4, $t5], "GenerateTransAssignment", [(await $.mv((await $.wcall([$t3, $t4, $t5], "FieldByName", ["Name"], C)), "AsString"))], C)), C);
          await $.wset([$t3, $t4, $t5], "IsRoot", (await $.wv([$t3, $t4, $t5], "true", C, false)), C);
          await $.wset([$t3, $t4, $t5], "ArchiveID", 0, C);
        }
        await $.wset([$t3, $t4], "TempID", (await $.wcall([$t3, $t4], "SB_AddTransaction", [$.ref(async () => (await $.wv([$t3, $t4], "Transaction", { get: async () => L0["transaction"], set: async (v) => { L0["transaction"] = v; }, local: true }, false)), async ($t6) => { await $.wset([$t3, $t4], "Transaction", $t6, { get: async () => L0["transaction"], set: async (v) => { L0["transaction"] = v; }, local: true }); }), []], C)), { get: async () => L0["tempid"], set: async (v) => { L0["tempid"] = v; }, local: true });
        await $.stmt((await $.mcall((await $.wv([$t3, $t4], "OPViewWares", C, false)), "CallProcedure", ["SetTransactions", [(await $.wv([$t3, $t4], "TempID", { get: async () => L0["tempid"], set: async (v) => { L0["tempid"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t3, $t4], "ODSTransaction", C, false)), "FieldByName", ["ID"])), "value"))]])));
        await $.stmt($.wcall([$t3, $t4], "Next", [], C));
        await $.tick();
      }
      await $.stmt($.wcall([$t3, $t4], "Close", [], C));
    }
    await $.mcall((await $.wv([$t3], "TranzProgressBar", C, false)), "Hide", []);
    await $.mset((await $.wv([$t3], "ELastClosedMonth", C, false)), "Text", (await $.wcall([$t3], "FormatDateTime", ["dd-mmm-yyyy", (await $.wv([$t3], "GetLastCalculateDate", C, false))], C)));
    await $.stmt($.wcall([$t3], "GetErroneousWares", [], C));
    await $.stmt($.wcall([$t3], "RefreshContacts", [], C));
    await $.stmt((await $.mcall((await $.wv([$t3], "MainFacilities", C, false)), "StopCalculate", [(-(1))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmQuery", "GetErroneousWares", async function GetErroneousWares(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "NotesMemo")), "Clear", []);
  {
    const $t7 = (await $.mv((await $.v(C, "MainFDataModule")), "ODSGetErroneousWares"));
    if ($.truthy($.eq((await $.wv([$t7], "Active", C, false)), (await $.wv([$t7], "False", C, false))))) {
      await $.stmt($.wcall([$t7], "Open", [], C));
    }
    while ($.truthy($.not(((await $.wv([$t7], "eof", C, false)))))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t7], "NotesMemo", C, false)), "Lines")), "Add", [(await $.mv((await $.wcall([$t7], "FieldByName", ["Name"], C)), "AsString"))])));
      await $.stmt($.wcall([$t7], "Next", [], C));
      await $.tick();
    }
    await $.stmt($.wcall([$t7], "CloseAll", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmQuery", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "NotesMemo")), "Visible", $.not(((await $.mv((await $.v(C, "NotesMemo")), "Visible")))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmQuery", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "NotesMemo")), "Visible", false);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmQuery", "DTPOperationDateChange", async function DTPOperationDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EOperationDate")), "Text", (await $.call(C, "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((L0["sender"]), "Date"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmQuery", "SpinEditDaysKeyPress", async function SpinEditDaysKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "-"))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
