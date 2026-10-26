// Generated from PercentSettingImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PercentSettingImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "Grids", "DBGrids", "StdCtrls", "ExtCtrls", "Buttons", "Mask", "DBCtrls", "Db", "OracleData", "NLSLocalizer", "XFSCtrls", "ComCtrls", "XDBGrids", "sboapiDataModuleImpl", "CommonDeclsImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TPercentSetting", "TForm", {"deposittypes": {"name": "DepositTypes", "type": "TOracleDataSet"}, "deposittypesid": {"name": "DepositTypesID", "type": "TFloatField"}, "deposittypestype": {"name": "DepositTypesTYPE", "type": "TWideStringField"}, "deposittypesdatsrc": {"name": "DepositTypesDatSrc", "type": "TDataSource"}, "valutes": {"name": "Valutes", "type": "TOracleDataSet"}, "valutesval_name": {"name": "ValutesVAL_NAME", "type": "TWideStringField"}, "valutesvalu_name": {"name": "ValutesVALU_NAME", "type": "TWideStringField"}, "valutesvalute": {"name": "ValutesVALUTE", "type": "TIntegerField"}, "valutesdatsrc": {"name": "ValutesDatSrc", "type": "TDataSource"}, "depositpersetting": {"name": "DepositPerSetting", "type": "TOracleDataSet"}, "persettingdatsrc": {"name": "PerSettingDatSrc", "type": "TDataSource"}, "depositdatsettings": {"name": "Depositdatsettings", "type": "TOracleDataSet"}, "datsettingsdatsrc": {"name": "DatsettingsDatSrc", "type": "TDataSource"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "xfgroupbox4": {"name": "XFGroupBox4", "type": "TXFGroupBox"}, "xfgroupbox5": {"name": "XFGroupBox5", "type": "TXFGroupBox"}, "xfgroupbox6": {"name": "XFGroupBox6", "type": "TXFGroupBox"}, "xfstatusbar1": {"name": "XFStatusBar1", "type": "TXFStatusBar"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "xdbgrid4": {"name": "XDBGrid4", "type": "TXDBGrid"}, "xdbgrid5": {"name": "XDBGrid5", "type": "TXDBGrid"}, "xdbgrid6": {"name": "XDBGrid6", "type": "TXDBGrid"}, "depperiods": {"name": "depperiods", "type": "TOracleDataSet"}, "depperiodsperiod": {"name": "depperiodsPERIOD", "type": "TFloatField"}, "depperiodsid": {"name": "depperiodsID", "type": "TFloatField"}, "depperiodsdescription": {"name": "depperiodsDESCRIPTION", "type": "TWideStringField"}, "depperiodsdepid": {"name": "depperiodsDEPID", "type": "TFloatField"}, "depperiodsds": {"name": "depperiodsds", "type": "TDataSource"}, "depcapitalperiods": {"name": "depcapitalperiods", "type": "TOracleDataSet"}, "depcapitalperiodsperiod": {"name": "depcapitalperiodsPERIOD", "type": "TFloatField"}, "depcapitalperiodsdescription": {"name": "depcapitalperiodsDESCRIPTION", "type": "TWideStringField"}, "depcapitalperiodsid": {"name": "depcapitalperiodsID", "type": "TFloatField"}, "depcapitalperiodsperiodid": {"name": "depcapitalperiodsPERIODID", "type": "TFloatField"}, "depcapitalperiodsds": {"name": "depcapitalperiodsds", "type": "TDataSource"}, "xdbgrid3": {"name": "XDBGrid3", "type": "TXDBGrid"}, "depositpersettingid": {"name": "DepositPerSettingID", "type": "TFloatField"}, "depositpersettingcurrencyid": {"name": "DepositPerSettingCURRENCYID", "type": "TFloatField"}, "depositpersettinginterestrate": {"name": "DepositPerSettingINTERESTRATE", "type": "TFloatField"}, "depositpersettingdueintrate": {"name": "DepositPerSettingDUEINTRATE", "type": "TFloatField"}, "depositpersettingdepid": {"name": "DepositPerSettingDEPID", "type": "TFloatField"}, "depositpersettingperiodid": {"name": "DepositPerSettingPERIODID", "type": "TFloatField"}, "depositpersettingcapitalid": {"name": "DepositPerSettingCAPITALID", "type": "TFloatField"}, "depositpersettingbefointrate": {"name": "DepositPerSettingBEFOINTRATE", "type": "TFloatField"}, "depositdatsettingsid": {"name": "DepositdatsettingsID", "type": "TFloatField"}, "depositdatsettingspercent": {"name": "DepositdatsettingsPERCENT", "type": "TFloatField"}, "depositdatsettingsfirstdateint": {"name": "DepositdatsettingsFIRSTDATEINT", "type": "TFloatField"}, "depositdatsettingslastdateint": {"name": "DepositdatsettingsLASTDATEINT", "type": "TFloatField"}, "depositdatsettingsvalcod": {"name": "DepositdatsettingsVALCOD", "type": "TFloatField"}, "depositdatsettingsdepid": {"name": "DepositdatsettingsDEPID", "type": "TFloatField"}, "depositdatsettingsperiodid": {"name": "DepositdatsettingsPERIODID", "type": "TFloatField"}, "depositdatsettingscapitalid": {"name": "DepositdatsettingsCAPITALID", "type": "TFloatField"}, "depositdatsettingsdepsetid": {"name": "DepositdatsettingsDEPSETID", "type": "TFloatField"}, "depositpersettingfirstamount": {"name": "DepositPerSettingFIRSTAMOUNT", "type": "TFloatField"}, "depositpersettinglastamount": {"name": "DepositPerSettingLASTAMOUNT", "type": "TFloatField"}, "depcapitalperiodstype": {"name": "depcapitalperiodsTYPE", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("PercentSetting", null, "TPercentSetting");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "PercentSetting")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TPercentSetting", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DepositTypes")), "open", []);
  await $.mcall((await $.v(C, "Depperiods")), "open", []);
  await $.mcall((await $.v(C, "Depcapitalperiods")), "open", []);
  await $.mcall((await $.v(C, "Valutes")), "open", []);
  await $.mcall((await $.v(C, "DepositPerSetting")), "open", []);
  await $.mcall((await $.v(C, "Depositdatsettings")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPercentSetting", "WaitForOp", async function WaitForOp(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "p_depositid": 0, "p_periodid": 0, "p_capitalperid": 0, "p_currencyid": 0};
  {
    const $t1 = (await $.v(C, "DepositTypes"));
    await $.wset([$t1], "P_DepositID", (await $.mv((await $.wcall([$t1], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["p_depositid"], set: async (v) => { L0["p_depositid"] = v; }, local: true });
  }
  {
    const $t2 = (await $.v(C, "depcapitalperiods"));
    await $.wset([$t2], "P_CapitalPerID", (await $.mv((await $.wcall([$t2], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["p_capitalperid"], set: async (v) => { L0["p_capitalperid"] = v; }, local: true });
  }
  {
    const $t3 = (await $.v(C, "depperiods"));
    await $.wset([$t3], "P_PeriodID", (await $.mv((await $.wcall([$t3], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["p_periodid"], set: async (v) => { L0["p_periodid"] = v; }, local: true });
  }
  {
    const $t4 = (await $.v(C, "Valutes"));
    await $.wset([$t4], "P_CurrencyID", (await $.mv((await $.wcall([$t4], "FieldByName", ["VALUTE"], C)), "AsInteger")), { get: async () => L0["p_currencyid"], set: async (v) => { L0["p_currencyid"] = v; }, local: true });
  }
  {
    const $t5 = (await $.v(C, "DepositPerSetting"));
    if ($.truthy((await $.wv([$t5], "Active", C, false)))) {
      await $.stmt($.wcall([$t5], "close", [], C));
    }
    await $.stmt((await $.wcall([$t5], "setVariable", ["DepID", (await $.wv([$t5], "P_DepositID", { get: async () => L0["p_depositid"], set: async (v) => { L0["p_depositid"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t5], "setVariable", ["PeriodID", (await $.wv([$t5], "P_PeriodID", { get: async () => L0["p_periodid"], set: async (v) => { L0["p_periodid"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t5], "setVariable", ["CapitalID", (await $.wv([$t5], "P_CapitalPerID", { get: async () => L0["p_capitalperid"], set: async (v) => { L0["p_capitalperid"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t5], "setVariable", ["Currencyid", (await $.wv([$t5], "P_CurrencyID", { get: async () => L0["p_currencyid"], set: async (v) => { L0["p_currencyid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t5], "open", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPercentSetting", "DepositTypesDatSrcDataChange", async function DepositTypesDatSrcDataChange(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "field": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "field"]);
  await $.stmt($.call(C, "WaitForOp", []));
  return L0.result;
}, {"params": ["Sender", "Field"], "kind": "procedure", "ptypes": ["TObject", "TField"]});
  U.method("TPercentSetting", "XDBGrid3KeyDown", async function XDBGrid3KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  {
    const $t6 = L0["sender"];
    if ($.truthy((await $.and_(($.eq((await $.wv([$t6], "key", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true }, false)), (await $.wv([$t6], "VK_DELETE", C, false)))), async () => ($.gt((await $.mv((await $.mv((await $.wv([$t6], "DataSource", C, false)), "DataSet")), "RecordCount")), 0)))))) {
      if ($.truthy($.eq((await $.wcall([$t6], "MessageDlg", ["Silinməsinə əminsinizmi?", (await $.wv([$t6], "mtConfirmation", C, false)), [(await $.wv([$t6], "mbYes", C, false)), (await $.wv([$t6], "mbNo", C, false))], 0], C)), (await $.wv([$t6], "mrYes", C, false))))) {
        await $.mcall((await $.mv((await $.wv([$t6], "DataSource", C, false)), "DataSet")), "Delete", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TPercentSetting", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPercentSetting", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DepositTypes")), "CloseAll", []);
  await $.mcall((await $.v(C, "Depperiods")), "CloseAll", []);
  await $.mcall((await $.v(C, "Depcapitalperiods")), "CloseAll", []);
  await $.mcall((await $.v(C, "Valutes")), "CloseAll", []);
  await $.mcall((await $.v(C, "DepositPerSetting")), "CloseAll", []);
  await $.mcall((await $.v(C, "Depositdatsettings")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPercentSetting", "depperiodsAfterPost", async function depperiodsAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall((await $.v(C, "depperiods")), "Refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TPercentSetting", "DepositPerSettingAfterPost", async function DepositPerSettingAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall((await $.v(C, "depositpersetting")), "RefreshRecord", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TPercentSetting", "XDBGrid5KeyPress", async function XDBGrid5KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "DepositPerSetting"));
    if ($.truthy($.in_((await $.wv([$t7], "UpdateStatus", C, false)), [(await $.wv([$t7], "usInserted", C, false)), (await $.wv([$t7], "usModified", C, false))]))) {
      await $.mset((await $.wcall([$t7], "FieldByName", ["DepID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t7], "DepositTypes", C, false)), "FieldByName", ["ID"])), "AsInteger")));
      await $.mset((await $.wcall([$t7], "FieldByName", ["PeriodID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t7], "Depperiods", C, false)), "FieldByName", ["ID"])), "AsInteger")));
      await $.mset((await $.wcall([$t7], "FieldByName", ["CapitalID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t7], "Depcapitalperiods", C, false)), "FieldByName", ["ID"])), "AsInteger")));
      await $.mset((await $.wcall([$t7], "FieldByName", ["Currencyid"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t7], "Valutes", C, false)), "FieldByName", ["VALUTE"])), "AsInteger")));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPercentSetting", "PerSettingDatSrcDataChange", async function PerSettingDatSrcDataChange(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "field": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "field"]);
  return L0.result;
}, {"params": ["Sender", "Field"], "kind": "procedure", "ptypes": ["TObject", "TField"]});
  U.method("TPercentSetting", "XDBGrid6KeyPress", async function XDBGrid6KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.v(C, "Depositdatsettings"));
    if ($.truthy($.in_((await $.wv([$t8], "UpdateStatus", C, false)), [(await $.wv([$t8], "usInserted", C, false)), (await $.wv([$t8], "usModified", C, false))]))) {
      await $.mset((await $.wcall([$t8], "FieldByName", ["Depsetid"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t8], "DepositPerSetting", C, false)), "FieldByName", ["ID"])), "AsInteger")));
      await $.mset((await $.wcall([$t8], "FieldByName", ["Depid"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t8], "DepositTypes", C, false)), "FieldByName", ["Depid"])), "AsInteger")));
      await $.mset((await $.wcall([$t8], "FieldByName", ["PeriodID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t8], "Depperiods", C, false)), "FieldByName", ["PeriodID"])), "AsInteger")));
      await $.mset((await $.wcall([$t8], "FieldByName", ["CapitalID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t8], "Depcapitalperiods", C, false)), "FieldByName", ["CapitalID"])), "AsInteger")));
      await $.mset((await $.wcall([$t8], "FieldByName", ["valcod"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t8], "Valutes", C, false)), "FieldByName", ["Valute"])), "AsInteger")));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPercentSetting", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPercentSetting", "depcapitalperiodsAfterPost", async function depcapitalperiodsAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall((await $.v(C, "depcapitalperiods")), "Refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "PercentSetting", (await $.mcall((await $.v(C, "TPercentSetting")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
