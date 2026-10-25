// Generated from NewDepositUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "DBViewComboBox", "SearchEdit", "ComCtrls", "DB", "DataModNewDepositUnit", "StoredProgramsUnit", "DepositDataModuleUnit"]);
  const C = [U];
  U.const("omInsert", 0);
  U.const("omEdit", 1);
  U.defClass("ELoadContractError", "Exception", {}, {});
  U.defClass("TFrmNewDeposit", "TForm", {"leftpanel": {"name": "LeftPanel", "type": "TPanel"}, "gbacounts": {"name": "GBAcounts", "type": "TGroupBox"}, "gbcurrency": {"name": "GBCurrency", "type": "TGroupBox"}, "cmbboxcurrencys": {"name": "CmbBoxCurrencys", "type": "TDBViewComboBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "depositaccs": {"name": "DepositAccs", "type": "TSearchEdit"}, "depositaccnames": {"name": "DepositAccNames", "type": "TDBViewComboBox"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "clientaccs": {"name": "ClientAccs", "type": "TSearchEdit"}, "clientaccnames": {"name": "ClientAccNames", "type": "TDBViewComboBox"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "interestaccs": {"name": "InterestAccs", "type": "TSearchEdit"}, "interestaccnames": {"name": "InterestAccNames", "type": "TDBViewComboBox"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "dtpopendate": {"name": "DTPOpenDate", "type": "TDateTimePicker"}, "dtpclosedate": {"name": "DTPCloseDate", "type": "TDateTimePicker"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "overduepercentedit": {"name": "OverduePercentEdit", "type": "TEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "percentedit": {"name": "PercentEdit", "type": "TEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "statictext8": {"name": "StaticText8", "type": "TStaticText"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "statictext9": {"name": "StaticText9", "type": "TStaticText"}, "clienttypes": {"name": "ClientTypes", "type": "TDBViewComboBox"}, "contracttypes": {"name": "ContractTypes", "type": "TDBViewComboBox"}, "applybutton": {"name": "ApplyButton", "type": "TButton"}, "cancelbutton": {"name": "CancelButton", "type": "TButton"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "statictext7": {"name": "StaticText7", "type": "TStaticText"}, "amountedit": {"name": "AmountEdit", "type": "TEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "statictext10": {"name": "StaticText10", "type": "TStaticText"}, "contractnoedit": {"name": "ContractNoEdit", "type": "TEdit"}, "foperationmode": {"name": "FOperationMode", "type": "TOperationMode"}, "fcontracttype": {"name": "FContractType", "type": "Integer"}, "fcontractid": {"name": "FContractID", "type": "Integer"}}, {});
  U.init(async () => {
    U.var_("FrmNewDeposit", null, "TFrmNewDeposit");
  });
  U.method("TFrmNewDeposit", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModuleNewDeposit", (await $.mcall((await $.v(C, "TDataModuleNewDeposit")), "Create", [Self])));
  await $.mset((await $.v(C, "DTPOpenDate")), "DateTime", (await $.v(C, "GetBankDate")));
  await $.mset((await $.v(C, "DTPCloseDate")), "DateTime", (await $.v(C, "GetBankDate")));
  await $.stmt($.call(C, "ResetData", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmNewDeposit", "DepositAccNamesChange", async function DepositAccNamesChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DepositAccs")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((L0["sender"]), "ListSource")), "DataSet")), "FieldByName", ["AccNo"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmNewDeposit", "ClientAccNamesChange", async function ClientAccNamesChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ClientAccs")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((L0["sender"]), "ListSource")), "DataSet")), "FieldByName", ["AccNo"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmNewDeposit", "InterestAccNamesChange", async function InterestAccNamesChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "InterestAccs")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((L0["sender"]), "ListSource")), "DataSet")), "FieldByName", ["AccNo"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmNewDeposit", "ResetData", async function ResetData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmNewDeposit", "LoadContractProperties", async function LoadContractProperties(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  L0["locatetoaccount"] = $.fn(async function LocateToAccount(p0, p1) {
  const L1 = {"sedit": $.copyArg(p0), "accid": $.copyArg(p1), result: undefined};
  await $.fixArgs(L1, ["sedit", "accid"]);
  {
    const $t1 = L1["sedit"];
    const $t2 = (await $.mv((await $.wv([$t1], "DataSource", C, false)), "DataSet"));
    if ($.truthy((await $.wcall([$t1, $t2], "Locate", ["ID", (await $.wv([$t1, $t2], "AccID", { get: async () => L1["accid"], set: async (v) => { L1["accid"] = v; }, local: true }, false)), []], C)))) {
      await $.wset([$t1, $t2], "Text", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", [(await $.wv([$t1, $t2], "SearchField", C, false))], C)), "AsString")), C);
      if ($.truthy((await $.and_((await $.wcall([$t1, $t2], "Assigned", [(await $.wv([$t1, $t2], "Partnership", C, false))], C)), async () => ($.eq((await $.mv((await $.wv([$t1, $t2], "Partnership", C, false)), "ItemIndex")), (-(1)))))))) {
        await $.mset((await $.wv([$t1, $t2], "Partnership", C, false)), "ItemIndex", 0);
      }
    } else {
      await $.stmt((await $.mcall((await $.wv([$t1, $t2], "ELoadContractError", C, false)), "Create", ["Can not Load Contract Properties due Errors"])));
    }
  }
  return L1.result;
});
  {
    const $t3 = (await $.v(C, "DepositDataModule"));
    const $t4 = (await $.wv([$t3], "Deposits", C, false));
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t3, $t4], "DataModuleNewDeposit", C, false)), "Currencys")), "Locate", ["Valute", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["ContractCurrencyID"], C)), "AsInteger")), []])));
    await $.mcall((await $.wv([$t3, $t4], "DepositAccNames", C, false)), "RefreshList", []);
    await $.mcall((await $.wv([$t3, $t4], "ClientAccNames", C, false)), "RefreshList", []);
    await $.mcall((await $.wv([$t3, $t4], "InterestAccNames", C, false)), "RefreshList", []);
    await $.stmt((await $.wcall([$t3, $t4], "LocateToAccount", [(await $.wv([$t3, $t4], "DepositAccs", C, false)), (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["ContractAccID"], C)), "AsInteger"))], { get: async () => L0["locatetoaccount"], set: async (v) => { L0["locatetoaccount"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t3, $t4], "LocateToAccount", [(await $.wv([$t3, $t4], "ClientAccs", C, false)), (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["ClientAccID"], C)), "AsInteger"))], { get: async () => L0["locatetoaccount"], set: async (v) => { L0["locatetoaccount"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t3, $t4], "LocateToAccount", [(await $.wv([$t3, $t4], "InterestAccs", C, false)), (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["InterestAccID"], C)), "AsInteger"))], { get: async () => L0["locatetoaccount"], set: async (v) => { L0["locatetoaccount"] = v; }, local: true })));
    await $.mset((await $.wv([$t3, $t4], "ContractNoEdit", C, false)), "Text", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["ContractNo"], C)), "AsString")));
    await $.mset((await $.wv([$t3, $t4], "AmountEdit", C, false)), "Text", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["Amount"], C)), "AsString")));
    await $.mset((await $.wv([$t3, $t4], "PercentEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Percents", C, false)), "FieldbyName", ["Interest"])), "AsString")));
    await $.mset((await $.wv([$t3, $t4], "OverduePercentEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "OverduePercents", C, false)), "FieldbyName", ["OverdueInterest"])), "AsString")));
    if ($.truthy($.not((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4], "ClientTypes", C, false)), "ListSource")), "DataSet")), "Locate", ["ID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["ClientType"], C)), "AsInteger")), []]))))) {
      await $.stmt((await $.mcall((await $.wv([$t3, $t4], "ELoadContractError", C, false)), "Create", ["Can not Load Contract Properties due Errors"])));
    }
    if ($.truthy($.not((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4], "ContractTypes", C, false)), "ListSource")), "DataSet")), "Locate", ["ID", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["ContractType"], C)), "AsInteger")), []]))))) {
      await $.stmt((await $.mcall((await $.wv([$t3, $t4], "ELoadContractError", C, false)), "Create", ["Can not Load Contract Properties due Errors"])));
    }
    await $.mset((await $.wv([$t3, $t4], "DTPOpenDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["OpenDate"], C)), "AsDateTime")));
    await $.mset((await $.wv([$t3, $t4], "DTPCloseDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["CloseDate"], C)), "AsDateTime")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmNewDeposit", "NewDeposit", async function NewDeposit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"opmode": $.copyArg(p0), result: undefined, "amount": 0, "percent": 0, "overduepercent": 0, "opendate": 0, "closedate": 0, "depositaccid": null, "clientaccid": null, "interestaccid": null, "clienttypeid": 0, "contracttypeid": 0, "contractno": ''};
  await $.fixArgs(L0, ["opmode"]);
  L0["getaccid"] = $.fn(async function GetAccID(p0) {
  const L1 = {"sedit": $.copyArg(p0), result: null};
  await $.fixArgs(L1, ["sedit"]);
  L1["result"] = (await $.v(C, "null"));
  {
    const $t5 = L1["sedit"];
    const $t6 = (await $.mv((await $.wv([$t5], "DataSource", C, false)), "DataSet"));
    if ($.truthy((await $.wcall([$t5, $t6], "Locate", [(await $.wv([$t5, $t6], "SearchField", C, false)), (await $.wv([$t5, $t6], "Text", C, false)), [(await $.wv([$t5, $t6], "loCaseInsensitive", C, false))]], C)))) {
      await $.wset([$t5, $t6], "Result", (await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["ID"], C)), "AsVariant")), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
    }
  }
  return L1.result;
});
  try {
    L0["amount"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "AmountEdit")), "Text"))]));
    L0["percent"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "PercentEdit")), "Text"))]));
    L0["overduepercent"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "OverduePercentEdit")), "Text"))]));
    L0["opendate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPOpenDate")), "DateTime"))]));
    L0["closedate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPCloseDate")), "DateTime"))]));
    L0["clienttypeid"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "ClientTypes")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"));
    L0["contracttypeid"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "ContractTypes")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"));
    L0["depositaccid"] = (await $.callv(L0["getaccid"], [(await $.v(C, "DepositAccs"))]));
    L0["clientaccid"] = (await $.callv(L0["getaccid"], [(await $.v(C, "ClientAccs"))]));
    L0["interestaccid"] = (await $.callv(L0["getaccid"], [(await $.v(C, "InterestAccs"))]));
    L0["contractno"] = (await $.mv((await $.v(C, "ContractNoEdit")), "Text"));
    {
      const $t8 = (await $.mv((await $.v(C, "DataModuleNewDeposit")), "DepositProperties"));
      if ($.truthy($.eq((await $.wv([$t8], "OpMode", { get: async () => L0["opmode"], set: async (v) => { L0["opmode"] = v; }, local: true }, false)), (await $.wv([$t8], "omInsert", C, false))))) {
        await $.stmt((await $.wcall([$t8], "CallProcedure", ["NewDeposit", [(await $.wv([$t8], "FContractType", C, false)), (await $.wv([$t8], "OpenDate", { get: async () => L0["opendate"], set: async (v) => { L0["opendate"] = v; }, local: true }, false)), (await $.wv([$t8], "CloseDate", { get: async () => L0["closedate"], set: async (v) => { L0["closedate"] = v; }, local: true }, false)), (await $.wv([$t8], "Amount", { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true }, false)), (await $.wv([$t8], "ContractNo", { get: async () => L0["contractno"], set: async (v) => { L0["contractno"] = v; }, local: true }, false)), (await $.wv([$t8], "ContractTypeID", { get: async () => L0["contracttypeid"], set: async (v) => { L0["contracttypeid"] = v; }, local: true }, false)), (await $.wv([$t8], "ClientTypeID", { get: async () => L0["clienttypeid"], set: async (v) => { L0["clienttypeid"] = v; }, local: true }, false)), (await $.wv([$t8], "DepositAccID", { get: async () => L0["depositaccid"], set: async (v) => { L0["depositaccid"] = v; }, local: true }, false)), (await $.wv([$t8], "ClientAccID", { get: async () => L0["clientaccid"], set: async (v) => { L0["clientaccid"] = v; }, local: true }, false)), (await $.wv([$t8], "InterestAccID", { get: async () => L0["interestaccid"], set: async (v) => { L0["interestaccid"] = v; }, local: true }, false)), (await $.wv([$t8], "Percent", { get: async () => L0["percent"], set: async (v) => { L0["percent"] = v; }, local: true }, false)), (await $.wv([$t8], "OverduePercent", { get: async () => L0["overduepercent"], set: async (v) => { L0["overduepercent"] = v; }, local: true }, false))]], C)));
      } else {
        await $.stmt((await $.wcall([$t8], "CallProcedure", ["UpdateDeposit", [(await $.wv([$t8], "FContractID", C, false)), (await $.wv([$t8], "FContractType", C, false)), (await $.wv([$t8], "OpenDate", { get: async () => L0["opendate"], set: async (v) => { L0["opendate"] = v; }, local: true }, false)), (await $.wv([$t8], "CloseDate", { get: async () => L0["closedate"], set: async (v) => { L0["closedate"] = v; }, local: true }, false)), (await $.wv([$t8], "Amount", { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true }, false)), (await $.wv([$t8], "ContractNo", { get: async () => L0["contractno"], set: async (v) => { L0["contractno"] = v; }, local: true }, false)), (await $.wv([$t8], "ContractTypeID", { get: async () => L0["contracttypeid"], set: async (v) => { L0["contracttypeid"] = v; }, local: true }, false)), (await $.wv([$t8], "ClientTypeID", { get: async () => L0["clienttypeid"], set: async (v) => { L0["clienttypeid"] = v; }, local: true }, false)), (await $.wv([$t8], "DepositAccID", { get: async () => L0["depositaccid"], set: async (v) => { L0["depositaccid"] = v; }, local: true }, false)), (await $.wv([$t8], "ClientAccID", { get: async () => L0["clientaccid"], set: async (v) => { L0["clientaccid"] = v; }, local: true }, false)), (await $.wv([$t8], "InterestAccID", { get: async () => L0["interestaccid"], set: async (v) => { L0["interestaccid"] = v; }, local: true }, false)), (await $.wv([$t8], "Percent", { get: async () => L0["percent"], set: async (v) => { L0["percent"] = v; }, local: true }, false)), (await $.wv([$t8], "OverduePercent", { get: async () => L0["overduepercent"], set: async (v) => { L0["overduepercent"] = v; }, local: true }, false))]], C)));
      }
    }
  } catch ($t7) {
    $.rethrowControl($t7);
    $.handled($t7);
    await $.stmt((await $.call(C, "ShowMessage", ["Invalid Input Data."])));
  }
  return L0.result;
}, {"params": ["OpMode"], "kind": "procedure", "ptypes": ["TOperationMode"]});
  U.method("TFrmNewDeposit", "ApplyButtonClick", async function ApplyButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "NewDeposit", [(await $.v(C, "FOperationMode"))])));
  await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmNewDeposit", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "FOperationMode")), (await $.v(C, "omEdit"))))) {
    await $.set(C, "Caption", "Editing Contract ");
    await $.stmt($.call(C, "LoadContractProperties", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmNewDeposit", "CmbBoxCurrencysChange", async function CmbBoxCurrencysChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DepositAccs")), "Text", "");
  await $.mcall((await $.mv((await $.v(C, "DepositAccs")), "Partnership")), "RefreshList", []);
  await $.mset((await $.v(C, "ClientAccs")), "Text", "");
  await $.mcall((await $.mv((await $.v(C, "ClientAccs")), "Partnership")), "RefreshList", []);
  await $.mset((await $.v(C, "InterestAccs")), "Text", "");
  await $.mcall((await $.mv((await $.v(C, "InterestAccs")), "Partnership")), "RefreshList", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmNewDeposit", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.mcall((await $.v(C, "CancelButton")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
