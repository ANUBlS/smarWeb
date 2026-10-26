// Generated from PercentSettingImpl_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PercentSettingImpl_new", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "Grids", "DBGrids", "StdCtrls", "ExtCtrls", "Buttons", "Mask", "DBCtrls", "Db", "OracleData", "XFSCtrls", "ComCtrls", "XDBGrids", "Oracle", "sboapiDataModuleImpl", "CommonDeclsImpl_new", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TPercentSetting_new", "TForm", {"depcapitalperiods": {"name": "depcapitalperiods", "type": "TOracleDataSet"}, "depcapitalperiodsid": {"name": "depcapitalperiodsID", "type": "TFloatField"}, "depcapitalperiodsperiod": {"name": "depcapitalperiodsPERIOD", "type": "TFloatField"}, "depcapitalperiodsdescription": {"name": "depcapitalperiodsDESCRIPTION", "type": "TWideStringField"}, "depcapitalperiodsperiodid": {"name": "depcapitalperiodsPERIODID", "type": "TFloatField"}, "depcapitalperiodstype": {"name": "depcapitalperiodsTYPE", "type": "TWideStringField"}, "depositdatsettings": {"name": "Depositdatsettings", "type": "TOracleDataSet"}, "depositdatsettingsid": {"name": "DepositdatsettingsID", "type": "TFloatField"}, "depositdatsettingspercent": {"name": "DepositdatsettingsPERCENT", "type": "TFloatField"}, "depositdatsettingsfirstdateint": {"name": "DepositdatsettingsFIRSTDATEINT", "type": "TFloatField"}, "depositdatsettingslastdateint": {"name": "DepositdatsettingsLASTDATEINT", "type": "TFloatField"}, "depositdatsettingsvalcod": {"name": "DepositdatsettingsVALCOD", "type": "TFloatField"}, "depositdatsettingsdepid": {"name": "DepositdatsettingsDEPID", "type": "TFloatField"}, "depositdatsettingsperiodid": {"name": "DepositdatsettingsPERIODID", "type": "TFloatField"}, "depositdatsettingscapitalid": {"name": "DepositdatsettingsCAPITALID", "type": "TFloatField"}, "depositdatsettingsdepsetid": {"name": "DepositdatsettingsDEPSETID", "type": "TFloatField"}, "depositpersetting": {"name": "DepositPerSetting", "type": "TOracleDataSet"}, "depositpersettingid": {"name": "DepositPerSettingID", "type": "TFloatField"}, "depositpersettingcurrencyid": {"name": "DepositPerSettingCURRENCYID", "type": "TFloatField"}, "depositpersettinginterestrate": {"name": "DepositPerSettingINTERESTRATE", "type": "TFloatField"}, "depositpersettingdueintrate": {"name": "DepositPerSettingDUEINTRATE", "type": "TFloatField"}, "depositpersettingfirstamount": {"name": "DepositPerSettingFIRSTAMOUNT", "type": "TFloatField"}, "depositpersettinglastamount": {"name": "DepositPerSettingLASTAMOUNT", "type": "TFloatField"}, "depositpersettingdepid": {"name": "DepositPerSettingDEPID", "type": "TFloatField"}, "depositpersettingperiodid": {"name": "DepositPerSettingPERIODID", "type": "TFloatField"}, "depositpersettingcapitalid": {"name": "DepositPerSettingCAPITALID", "type": "TFloatField"}, "depositpersettingbefointrate": {"name": "DepositPerSettingBEFOINTRATE", "type": "TFloatField"}, "deposittypes": {"name": "DepositTypes", "type": "TOracleDataSet"}, "deposittypesid": {"name": "DepositTypesID", "type": "TFloatField"}, "deposittypestype": {"name": "DepositTypesTYPE", "type": "TWideStringField"}, "depperiods": {"name": "depperiods", "type": "TOracleDataSet"}, "depperiodsid": {"name": "depperiodsID", "type": "TFloatField"}, "depperiodsperiod": {"name": "depperiodsPERIOD", "type": "TFloatField"}, "depperiodsdescription": {"name": "depperiodsDESCRIPTION", "type": "TWideStringField"}, "depperiodsdepid": {"name": "depperiodsDEPID", "type": "TFloatField"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xfgroupbox4": {"name": "XFGroupBox4", "type": "TXFGroupBox"}, "xdbgrid4": {"name": "XDBGrid4", "type": "TXDBGrid"}, "xfgroupbox5": {"name": "XFGroupBox5", "type": "TXFGroupBox"}, "xdbgrid5": {"name": "XDBGrid5", "type": "TXDBGrid"}, "xfgroupbox6": {"name": "XFGroupBox6", "type": "TXFGroupBox"}, "xdbgrid6": {"name": "XDBGrid6", "type": "TXDBGrid"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "xdbgrid3": {"name": "XDBGrid3", "type": "TXDBGrid"}, "xfstatusbar1": {"name": "XFStatusBar1", "type": "TXFStatusBar"}, "valutes": {"name": "Valutes", "type": "TOracleDataSet"}, "valutesval_name": {"name": "ValutesVAL_NAME", "type": "TWideStringField"}, "valutesvalu_name": {"name": "ValutesVALU_NAME", "type": "TWideStringField"}, "valutesvalute": {"name": "ValutesVALUTE", "type": "TIntegerField"}, "deposittypesdatsrc": {"name": "DepositTypesDatSrc", "type": "TDataSource"}, "depperiodsds": {"name": "depperiodsds", "type": "TDataSource"}, "depcapitalperiodsds": {"name": "depcapitalperiodsds", "type": "TDataSource"}, "valutesdatsrc": {"name": "ValutesDatSrc", "type": "TDataSource"}, "persettingdatsrc": {"name": "PerSettingDatSrc", "type": "TDataSource"}, "datsettingsdatsrc": {"name": "DatsettingsDatSrc", "type": "TDataSource"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "depositpersettingpercentage_growth_step": {"name": "DepositPerSettingPERCENTAGE_GROWTH_STEP", "type": "TFloatField"}, "depositpersettingfirst_day": {"name": "DepositPerSettingFIRST_DAY", "type": "TFloatField"}, "depositpersettinglast_day": {"name": "DepositPerSettingLAST_DAY", "type": "TFloatField"}, "dsrsbcm_amount_setting": {"name": "DSRsbcm_amount_setting", "type": "TDataSource"}, "xfgroupbox8": {"name": "XFGroupBox8", "type": "TXFGroupBox"}, "xdbgrid7": {"name": "XDBGrid7", "type": "TXDBGrid"}, "xfgroupbox9": {"name": "XFGroupBox9", "type": "TXFGroupBox"}, "dssbcm_amount_setting": {"name": "DSsbcm_amount_setting", "type": "TOracleDataSet"}, "dssbcm_amount_settingid": {"name": "DSsbcm_amount_settingID", "type": "TFloatField"}, "dssbcm_amount_settingfirstamount": {"name": "DSsbcm_amount_settingFIRSTAMOUNT", "type": "TFloatField"}, "dssbcm_amount_settinglastamount": {"name": "DSsbcm_amount_settingLASTAMOUNT", "type": "TFloatField"}, "dssbcm_amount_settingperiodid": {"name": "DSsbcm_amount_settingPERIODID", "type": "TFloatField"}, "depositpersettingamount_setting_id": {"name": "DepositPerSettingAMOUNT_SETTING_ID", "type": "TFloatField"}, "dssbcm_amount_settingcurrencyid": {"name": "DSsbcm_amount_settingCURRENCYID", "type": "TFloatField"}, "depositdatsettingsamount_setting_id": {"name": "DepositdatsettingsAMOUNT_SETTING_ID", "type": "TFloatField"}, "depositpersettingamount_growth_first": {"name": "DepositPerSettingAMOUNT_GROWTH_FIRST", "type": "TFloatField"}, "depositpersettingamount_growth_last": {"name": "DepositPerSettingAMOUNT_GROWTH_LAST", "type": "TFloatField"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "depositpersettingwrite_memory": {"name": "DepositPerSettingWRITE_MEMORY", "type": "TFloatField"}, "depositpersettingconfirmation": {"name": "DepositPerSettingCONFIRMATION", "type": "TFloatField"}, "sbcm_percent_converting_new": {"name": "sbcm_percent_converting_new", "type": "TOraclePackage"}, "dssysdat": {"name": "DSsysdat", "type": "TOracleDataSet"}, "dssysdattek_dat": {"name": "DSsysdatTEK_DAT", "type": "TDateTimeField"}, "dssysdatpred_dat": {"name": "DSsysdatPRED_DAT", "type": "TDateTimeField"}, "dssysdatarc_day": {"name": "DSsysdatARC_DAY", "type": "TDateTimeField"}, "dssysdatclose": {"name": "DSsysdatCLOSE", "type": "TIntegerField"}, "depositpersettinghdate": {"name": "DepositPerSettingHDATE", "type": "TDateTimeField"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfcheckbox1": {"name": "XFCheckBox1", "type": "TXFCheckBox"}, "dssbcm_amount_settingmaxamuontconrtact": {"name": "DSsbcm_amount_settingMAXAMUONTCONRTACT", "type": "TFloatField"}, "dssbcm_amount_settingmaxamuontconrtactpercent": {"name": "DSsbcm_amount_settingMAXAMUONTCONRTACTPERCENT", "type": "TFloatField"}, "depperiodsperiod_type": {"name": "depperiodsPERIOD_TYPE", "type": "TWideStringField"}, "sb_aca": {"name": "sb_aca", "type": "TOraclePackage"}}, {});
  U.init(async () => {
    U.var_("PercentSetting_new", null, "TPercentSetting_new");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "PercentSetting_new")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TPercentSetting_new", "XDBGrid5KeyDown", async function XDBGrid5KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  {
    const $t1 = L0["sender"];
    const $t2 = (await $.wv([$t1], "sbcm_percent_converting_new", C, false));
    if ($.truthy((await $.and_(($.eq((await $.wv([$t1, $t2], "key", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true }, false)), (await $.wv([$t1, $t2], "VK_DELETE", C, false)))), async () => ($.gt((await $.mv((await $.mv((await $.wv([$t1, $t2], "DataSource", C, false)), "DataSet")), "RecordCount")), 0)))))) {
      if ($.truthy($.eq((await $.wcall([$t1, $t2], "MessageDlg", ["Silinməsinə əminsinizmi?", (await $.wv([$t1, $t2], "mtConfirmation", C, false)), [(await $.wv([$t1, $t2], "mbYes", C, false)), (await $.wv([$t1, $t2], "mbNo", C, false))], 0], C)), (await $.wv([$t1, $t2], "mrYes", C, false))))) {
        await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["deppseting_hist_new", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2], "XDBGrid5", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")), 0]], C)));
        await $.mcall((await $.mv((await $.wv([$t1, $t2], "DataSource", C, false)), "DataSet")), "Delete", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TPercentSetting_new", "XDBGrid5KeyPress", async function XDBGrid5KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "p_id": 0, "p_currencyid": 0, "p_interestrate": 0, "p_dueintrate": 0, "p_firstamount": 0, "p_lastamount": 0, "p_depid": 0, "p_periodid": 0, "p_capitalid": 0, "p_befointrate": 0, "p_first_day": 0, "p_percentage_growth_step": 0, "p_last_day": 0, "p_amount_setting_id": 0, "p_amount_growth_first": 0, "p_amount_growth_last": 0, "p_write_memory": 0, "p_confirmation": 0, "p_hdate": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "DepositPerSetting"));
    const $t4 = (await $.wv([$t3], "sbcm_percent_converting_new", C, false));
    await $.wset([$t3, $t4], "p_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4], "XDBGrid5", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsFloat")), { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true });
    await $.wset([$t3, $t4], "p_currencyid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4], "XDBGrid5", C, false)), "DataSource")), "DataSet")), "FieldByName", ["currencyid"])), "AsFloat")), { get: async () => L0["p_currencyid"], set: async (v) => { L0["p_currencyid"] = v; }, local: true });
    await $.wset([$t3, $t4], "p_interestrate", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4], "XDBGrid5", C, false)), "DataSource")), "DataSet")), "FieldByName", ["interestrate"])), "AsFloat")), { get: async () => L0["p_interestrate"], set: async (v) => { L0["p_interestrate"] = v; }, local: true });
    await $.wset([$t3, $t4], "p_dueintrate", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4], "XDBGrid5", C, false)), "DataSource")), "DataSet")), "FieldByName", ["dueintrate"])), "AsFloat")), { get: async () => L0["p_dueintrate"], set: async (v) => { L0["p_dueintrate"] = v; }, local: true });
    await $.wset([$t3, $t4], "p_firstamount", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4], "XDBGrid5", C, false)), "DataSource")), "DataSet")), "FieldByName", ["firstamount"])), "AsFloat")), { get: async () => L0["p_firstamount"], set: async (v) => { L0["p_firstamount"] = v; }, local: true });
    await $.wset([$t3, $t4], "p_lastamount", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4], "XDBGrid5", C, false)), "DataSource")), "DataSet")), "FieldByName", ["lastamount"])), "AsFloat")), { get: async () => L0["p_lastamount"], set: async (v) => { L0["p_lastamount"] = v; }, local: true });
    await $.wset([$t3, $t4], "p_depid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4], "XDBGrid5", C, false)), "DataSource")), "DataSet")), "FieldByName", ["depid"])), "AsFloat")), { get: async () => L0["p_depid"], set: async (v) => { L0["p_depid"] = v; }, local: true });
    await $.wset([$t3, $t4], "p_periodid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4], "XDBGrid5", C, false)), "DataSource")), "DataSet")), "FieldByName", ["periodid"])), "AsFloat")), { get: async () => L0["p_periodid"], set: async (v) => { L0["p_periodid"] = v; }, local: true });
    await $.wset([$t3, $t4], "p_capitalid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4], "XDBGrid5", C, false)), "DataSource")), "DataSet")), "FieldByName", ["capitalid"])), "AsFloat")), { get: async () => L0["p_capitalid"], set: async (v) => { L0["p_capitalid"] = v; }, local: true });
    await $.wset([$t3, $t4], "p_befointrate", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4], "XDBGrid5", C, false)), "DataSource")), "DataSet")), "FieldByName", ["befointrate"])), "AsFloat")), { get: async () => L0["p_befointrate"], set: async (v) => { L0["p_befointrate"] = v; }, local: true });
    await $.wset([$t3, $t4], "p_first_day", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4], "XDBGrid5", C, false)), "DataSource")), "DataSet")), "FieldByName", ["first_day"])), "AsFloat")), { get: async () => L0["p_first_day"], set: async (v) => { L0["p_first_day"] = v; }, local: true });
    await $.wset([$t3, $t4], "p_percentage_growth_step", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4], "XDBGrid5", C, false)), "DataSource")), "DataSet")), "FieldByName", ["percentage_growth_step"])), "AsFloat")), { get: async () => L0["p_percentage_growth_step"], set: async (v) => { L0["p_percentage_growth_step"] = v; }, local: true });
    await $.wset([$t3, $t4], "p_last_day", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4], "XDBGrid5", C, false)), "DataSource")), "DataSet")), "FieldByName", ["last_day"])), "AsFloat")), { get: async () => L0["p_last_day"], set: async (v) => { L0["p_last_day"] = v; }, local: true });
    await $.wset([$t3, $t4], "p_amount_setting_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4], "XDBGrid5", C, false)), "DataSource")), "DataSet")), "FieldByName", ["amount_setting_id"])), "AsFloat")), { get: async () => L0["p_amount_setting_id"], set: async (v) => { L0["p_amount_setting_id"] = v; }, local: true });
    await $.wset([$t3, $t4], "p_amount_growth_first", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4], "XDBGrid5", C, false)), "DataSource")), "DataSet")), "FieldByName", ["amount_growth_first"])), "AsFloat")), { get: async () => L0["p_amount_growth_first"], set: async (v) => { L0["p_amount_growth_first"] = v; }, local: true });
    await $.wset([$t3, $t4], "p_amount_growth_last", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4], "XDBGrid5", C, false)), "DataSource")), "DataSet")), "FieldByName", ["amount_growth_last"])), "AsFloat")), { get: async () => L0["p_amount_growth_last"], set: async (v) => { L0["p_amount_growth_last"] = v; }, local: true });
    await $.wset([$t3, $t4], "p_write_memory", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4], "XDBGrid5", C, false)), "DataSource")), "DataSet")), "FieldByName", ["write_memory"])), "AsFloat")), { get: async () => L0["p_write_memory"], set: async (v) => { L0["p_write_memory"] = v; }, local: true });
    await $.wset([$t3, $t4], "p_confirmation", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4], "XDBGrid5", C, false)), "DataSource")), "DataSet")), "FieldByName", ["confirmation"])), "AsFloat")), { get: async () => L0["p_confirmation"], set: async (v) => { L0["p_confirmation"] = v; }, local: true });
    if ($.truthy($.in_((await $.wv([$t3, $t4], "UpdateStatus", C, false)), [(await $.wv([$t3, $t4], "usInserted", C, false)), (await $.wv([$t3, $t4], "usModified", C, false))]))) {
      await $.mset((await $.wcall([$t3, $t4], "FieldByName", ["DepID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "DepositTypes", C, false)), "FieldByName", ["ID"])), "AsInteger")));
      await $.mset((await $.wcall([$t3, $t4], "FieldByName", ["PeriodID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Depperiods", C, false)), "FieldByName", ["ID"])), "AsInteger")));
      await $.mset((await $.wcall([$t3, $t4], "FieldByName", ["CapitalID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Depcapitalperiods", C, false)), "FieldByName", ["ID"])), "AsInteger")));
      await $.mset((await $.wcall([$t3, $t4], "FieldByName", ["Currencyid"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Valutes", C, false)), "FieldByName", ["VALUTE"])), "AsInteger")));
      await $.mset((await $.wcall([$t3, $t4], "FieldByName", ["amount_setting_id"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "DSsbcm_amount_setting", C, false)), "FieldByName", ["id"])), "AsInteger")));
      await $.mset((await $.wcall([$t3, $t4], "FieldByName", ["WRITE_MEMORY"], C)), "AsInteger", 0);
      await $.mset((await $.wcall([$t3, $t4], "FieldByName", ["CONFIRMATION"], C)), "AsInteger", 0);
      await $.mset((await $.wcall([$t3, $t4], "FieldByName", ["hdate"], C)), "AsDateTime", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "DSsysdat", C, false)), "FieldByName", ["tek_dat"])), "AsDateTime")));
    }
    await $.stmt((await $.wcall([$t3, $t4], "CallProcedure", ["deppseting_upd_hist_new", [(await $.wv([$t3, $t4], "p_id", { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "p_currencyid", { get: async () => L0["p_currencyid"], set: async (v) => { L0["p_currencyid"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "p_interestrate", { get: async () => L0["p_interestrate"], set: async (v) => { L0["p_interestrate"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "p_dueintrate", { get: async () => L0["p_dueintrate"], set: async (v) => { L0["p_dueintrate"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "p_firstamount", { get: async () => L0["p_firstamount"], set: async (v) => { L0["p_firstamount"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "p_lastamount", { get: async () => L0["p_lastamount"], set: async (v) => { L0["p_lastamount"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "p_depid", { get: async () => L0["p_depid"], set: async (v) => { L0["p_depid"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "p_periodid", { get: async () => L0["p_periodid"], set: async (v) => { L0["p_periodid"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "p_capitalid", { get: async () => L0["p_capitalid"], set: async (v) => { L0["p_capitalid"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "p_befointrate", { get: async () => L0["p_befointrate"], set: async (v) => { L0["p_befointrate"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "p_first_day", { get: async () => L0["p_first_day"], set: async (v) => { L0["p_first_day"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "p_percentage_growth_step", { get: async () => L0["p_percentage_growth_step"], set: async (v) => { L0["p_percentage_growth_step"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "p_last_day", { get: async () => L0["p_last_day"], set: async (v) => { L0["p_last_day"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "p_amount_setting_id", { get: async () => L0["p_amount_setting_id"], set: async (v) => { L0["p_amount_setting_id"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "p_amount_growth_first", { get: async () => L0["p_amount_growth_first"], set: async (v) => { L0["p_amount_growth_first"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "p_amount_growth_last", { get: async () => L0["p_amount_growth_last"], set: async (v) => { L0["p_amount_growth_last"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "p_write_memory", { get: async () => L0["p_write_memory"], set: async (v) => { L0["p_write_memory"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "p_confirmation", { get: async () => L0["p_confirmation"], set: async (v) => { L0["p_confirmation"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPercentSetting_new", "XDBGrid6KeyDown", async function XDBGrid6KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  {
    const $t5 = L0["sender"];
    if ($.truthy((await $.and_(($.eq((await $.wv([$t5], "key", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true }, false)), (await $.wv([$t5], "VK_DELETE", C, false)))), async () => ($.gt((await $.mv((await $.mv((await $.wv([$t5], "DataSource", C, false)), "DataSet")), "RecordCount")), 0)))))) {
      if ($.truthy($.eq((await $.wcall([$t5], "MessageDlg", ["Silinməsinə əminsinizmi?", (await $.wv([$t5], "mtConfirmation", C, false)), [(await $.wv([$t5], "mbYes", C, false)), (await $.wv([$t5], "mbNo", C, false))], 0], C)), (await $.wv([$t5], "mrYes", C, false))))) {
        await $.mcall((await $.mv((await $.wv([$t5], "DataSource", C, false)), "DataSet")), "Delete", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TPercentSetting_new", "XDBGrid6KeyPress", async function XDBGrid6KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "Depositdatsettings"));
    if ($.truthy($.in_((await $.wv([$t6], "UpdateStatus", C, false)), [(await $.wv([$t6], "usInserted", C, false)), (await $.wv([$t6], "usModified", C, false))]))) {
      await $.mset((await $.wcall([$t6], "FieldByName", ["Depsetid"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t6], "DepositPerSetting", C, false)), "FieldByName", ["ID"])), "AsInteger")));
      await $.mset((await $.wcall([$t6], "FieldByName", ["Depid"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t6], "DepositTypes", C, false)), "FieldByName", ["id"])), "AsInteger")));
      await $.mset((await $.wcall([$t6], "FieldByName", ["PeriodID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t6], "Depperiods", C, false)), "FieldByName", ["ID"])), "AsInteger")));
      await $.mset((await $.wcall([$t6], "FieldByName", ["CapitalID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t6], "Depcapitalperiods", C, false)), "FieldByName", ["ID"])), "AsInteger")));
      await $.mset((await $.wcall([$t6], "FieldByName", ["valcod"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t6], "Valutes", C, false)), "FieldByName", ["Valute"])), "AsInteger")));
      await $.mset((await $.wcall([$t6], "FieldByName", ["amount_setting_id"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t6], "DSsbcm_amount_setting", C, false)), "FieldByName", ["id"])), "AsInteger")));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPercentSetting_new", "XDBGrid7KeyPress", async function XDBGrid7KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "period": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "DSsbcm_amount_setting"));
    if ($.truthy($.in_((await $.wv([$t7], "UpdateStatus", C, false)), [(await $.wv([$t7], "usInserted", C, false)), (await $.wv([$t7], "usModified", C, false))]))) {
      await $.mset((await $.wcall([$t7], "FieldByName", ["PeriodID"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t7], "Depperiods", C, false)), "FieldByName", ["ID"])), "AsInteger")));
      await $.mset((await $.wcall([$t7], "FieldByName", ["Currencyid"], C)), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t7], "Valutes", C, false)), "FieldByName", ["VALUTE"])), "AsInteger")));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPercentSetting_new", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.v(C, "PercentSetting_new"));
    const $t9 = (await $.wv([$t8], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t8, $t9], "CallProcedure", ["checkadvancedobjectaccess", ["SBCM_PERCENT_SETTING_SAVE"]], C)));
  }
  {
    const $t10 = (await $.v(C, "DSsbcm_amount_setting"));
    const $t11 = (await $.wv([$t10], "sbcm_percent_converting_new", C, false));
    await $.stmt((await $.wcall([$t10, $t11], "CallProcedure", ["upd_confir_and_writ_memory_new", [(await $.mv((await $.mcall((await $.wv([$t10, $t11], "Valutes", C, false)), "FieldByName", ["Valute"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t10, $t11], "Depperiods", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t10, $t11], "Depcapitalperiods", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t10, $t11], "DepositTypes", C, false)), "FieldByName", ["id"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t10, $t11], "DSsbcm_amount_setting", C, false)), "FieldByName", ["id"])), "AsInteger")), 0]], C)));
    await $.stmt((await $.wcall([$t10, $t11], "showmessage", ["Seçilmiş sazlamalara görə faiz dərəcələri yaddaşa yazıldı."], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPercentSetting_new", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "say": 0, "secimdurumu": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (await $.v(C, "PercentSetting_new"));
    const $t13 = (await $.wv([$t12], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t12, $t13], "CallProcedure", ["checkadvancedobjectaccess", ["SBCM_PERCENT_SETTING_COMMIT"]], C)));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox1")), "Checked")), true))) {
    L0["secimdurumu"] = 1;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox1")), "Checked")), false))) {
    L0["secimdurumu"] = 0;
  }
  {
    const $t14 = (await $.v(C, "DSsbcm_amount_setting"));
    const $t15 = (await $.wv([$t14], "sbcm_percent_converting_new", C, false));
    if ($.truthy($.eq((await $.wv([$t14, $t15], "secimdurumu", { get: async () => L0["secimdurumu"], set: async (v) => { L0["secimdurumu"] = v; }, local: true }, false)), 1))) {
      if ($.truthy($.eq((await $.wcall([$t14, $t15], "MessageDlg", ["Sazlanmis yeni faiz dərəcəsi əvvəlki bu tip depozitlərin bütün yatrımlarının aid edilsinmi?", (await $.wv([$t14, $t15], "mtConfirmation", C, false)), [(await $.wv([$t14, $t15], "mbYes", C, false)), (await $.wv([$t14, $t15], "mbNo", C, false))], 0], C)), (await $.wv([$t14, $t15], "mrYes", C, false))))) {
        await $.stmt((await $.wcall([$t14, $t15], "CallProcedure", ["upd_transh_percent", [(await $.mv((await $.mcall((await $.wv([$t14, $t15], "Valutes", C, false)), "FieldByName", ["Valute"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t14, $t15], "Depperiods", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t14, $t15], "Depcapitalperiods", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t14, $t15], "DepositTypes", C, false)), "FieldByName", ["id"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t14, $t15], "DSsbcm_amount_setting", C, false)), "FieldByName", ["id"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t14, $t15], "XDBGrid7", C, false)), "DataSource")), "DataSet")), "FieldByName", ["FIRSTAMOUNT"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t14, $t15], "XDBGrid7", C, false)), "DataSource")), "DataSet")), "FieldByName", ["LASTAMOUNT"])), "AsFloat")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t14, $t15], "XDBGrid5", C, false)), "DataSource")), "DataSet")), "FieldByName", ["INTERESTRATE"])), "AsFloat"))]], C)));
      }
    }
    await $.wset([$t14, $t15], "say", (await $.wcall([$t14, $t15], "CallFloatFunction", ["get_write_memory", [(await $.mv((await $.mcall((await $.wv([$t14, $t15], "Valutes", C, false)), "FieldByName", ["Valute"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t14, $t15], "Depperiods", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t14, $t15], "Depcapitalperiods", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t14, $t15], "DepositTypes", C, false)), "FieldByName", ["id"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t14, $t15], "DSsbcm_amount_setting", C, false)), "FieldByName", ["id"])), "AsInteger"))]], C)), { get: async () => L0["say"], set: async (v) => { L0["say"] = v; }, local: true });
    if ($.truthy($.gt((await $.wv([$t14, $t15], "say", { get: async () => L0["say"], set: async (v) => { L0["say"] = v; }, local: true }, false)), 0))) {
      await $.stmt((await $.wcall([$t14, $t15], "showmessage", ["Seçilmiş sazlamalara görə faiz dərəcələri yaddaşa yazılmadığından təsdiqlənə bilməz!"], C)));
      return L0.result;
    }
    if ($.truthy($.eq((await $.wv([$t14, $t15], "say", { get: async () => L0["say"], set: async (v) => { L0["say"] = v; }, local: true }, false)), 0))) {
      await $.stmt((await $.wcall([$t14, $t15], "CallProcedure", ["upd_confir_and_writ_memory_new", [(await $.mv((await $.mcall((await $.wv([$t14, $t15], "Valutes", C, false)), "FieldByName", ["Valute"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t14, $t15], "Depperiods", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t14, $t15], "Depcapitalperiods", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t14, $t15], "DepositTypes", C, false)), "FieldByName", ["id"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t14, $t15], "DSsbcm_amount_setting", C, false)), "FieldByName", ["id"])), "AsInteger")), 1]], C)));
      await $.stmt((await $.wcall([$t14, $t15], "showmessage", ["Seçilmiş sazlamalara görə faiz dərəcələri təsdiqləndi."], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPercentSetting_new", "depcapitalperiodsAfterPost", async function depcapitalperiodsAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall((await $.v(C, "depcapitalperiods")), "Refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TPercentSetting_new", "DepositdatsettingsAfterPost", async function DepositdatsettingsAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall((await $.v(C, "Depositdatsettings")), "Refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TPercentSetting_new", "DepositPerSettingAfterPost", async function DepositPerSettingAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall((await $.v(C, "DepositPerSetting")), "Refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TPercentSetting_new", "DepositTypesDatSrcDataChange", async function DepositTypesDatSrcDataChange(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "field": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "field"]);
  await $.stmt($.call(C, "WaitForOp", []));
  return L0.result;
}, {"params": ["Sender", "Field"], "kind": "procedure", "ptypes": ["TObject", "TField"]});
  U.method("TPercentSetting_new", "depperiodsAfterPost", async function depperiodsAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall((await $.v(C, "depperiods")), "Refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TPercentSetting_new", "DSRsbcm_amount_settingDataChange", async function DSRsbcm_amount_settingDataChange(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "field": $.copyArg(p1), result: undefined, "p_depositid": 0, "p_periodid": 0, "p_capitalperid": 0, "p_currencyid": 0, "p_amount_setting_id": 0};
  await $.fixArgs(L0, ["sender", "field"]);
  {
    const $t16 = (await $.v(C, "DepositTypes"));
    await $.wset([$t16], "P_DepositID", (await $.mv((await $.wcall([$t16], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["p_depositid"], set: async (v) => { L0["p_depositid"] = v; }, local: true });
  }
  {
    const $t17 = (await $.v(C, "depcapitalperiods"));
    await $.wset([$t17], "P_CapitalPerID", (await $.mv((await $.wcall([$t17], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["p_capitalperid"], set: async (v) => { L0["p_capitalperid"] = v; }, local: true });
  }
  {
    const $t18 = (await $.v(C, "DSsbcm_amount_setting"));
    await $.wset([$t18], "p_amount_setting_id", (await $.mv((await $.wcall([$t18], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["p_amount_setting_id"], set: async (v) => { L0["p_amount_setting_id"] = v; }, local: true });
  }
  {
    const $t19 = (await $.v(C, "depperiods"));
    await $.wset([$t19], "P_PeriodID", (await $.mv((await $.wcall([$t19], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["p_periodid"], set: async (v) => { L0["p_periodid"] = v; }, local: true });
  }
  {
    const $t20 = (await $.v(C, "Valutes"));
    await $.wset([$t20], "P_CurrencyID", (await $.mv((await $.wcall([$t20], "FieldByName", ["VALUTE"], C)), "AsInteger")), { get: async () => L0["p_currencyid"], set: async (v) => { L0["p_currencyid"] = v; }, local: true });
  }
  {
    const $t21 = (await $.v(C, "DSsbcm_amount_setting"));
    await $.wset([$t21], "p_amount_setting_id", (await $.mv((await $.wcall([$t21], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["p_amount_setting_id"], set: async (v) => { L0["p_amount_setting_id"] = v; }, local: true });
  }
  {
    const $t22 = (await $.v(C, "DepositPerSetting"));
    if ($.truthy((await $.wv([$t22], "Active", C, false)))) {
      await $.stmt($.wcall([$t22], "close", [], C));
    }
    await $.stmt((await $.wcall([$t22], "setVariable", ["DepID", (await $.wv([$t22], "P_DepositID", { get: async () => L0["p_depositid"], set: async (v) => { L0["p_depositid"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t22], "setVariable", ["PeriodID", (await $.wv([$t22], "P_PeriodID", { get: async () => L0["p_periodid"], set: async (v) => { L0["p_periodid"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t22], "setVariable", ["CapitalID", (await $.wv([$t22], "P_CapitalPerID", { get: async () => L0["p_capitalperid"], set: async (v) => { L0["p_capitalperid"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t22], "setVariable", ["Currencyid", (await $.wv([$t22], "P_CurrencyID", { get: async () => L0["p_currencyid"], set: async (v) => { L0["p_currencyid"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t22], "setVariable", ["Amount_setting_id", (await $.wv([$t22], "p_amount_setting_id", { get: async () => L0["p_amount_setting_id"], set: async (v) => { L0["p_amount_setting_id"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t22], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender", "Field"], "kind": "procedure", "ptypes": ["TObject", "TField"]});
  U.method("TPercentSetting_new", "DSsbcm_amount_settingAfterPost", async function DSsbcm_amount_settingAfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall((await $.v(C, "DSsbcm_amount_setting")), "Refresh", []);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TPercentSetting_new", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPercentSetting_new", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DepositTypes")), "CloseAll", []);
  await $.mcall((await $.v(C, "Depperiods")), "CloseAll", []);
  await $.mcall((await $.v(C, "Depcapitalperiods")), "CloseAll", []);
  await $.mcall((await $.v(C, "Valutes")), "CloseAll", []);
  await $.mcall((await $.v(C, "DepositPerSetting")), "CloseAll", []);
  await $.mcall((await $.v(C, "Depositdatsettings")), "CloseAll", []);
  await $.mcall((await $.v(C, "DSsbcm_amount_setting")), "CloseAll", []);
  await $.mcall((await $.v(C, "DSsysdat")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPercentSetting_new", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPercentSetting_new", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_periodid": 0, "p_currencyid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DSsysdat")), "Open", []);
  await $.mcall((await $.v(C, "DepositTypes")), "open", []);
  await $.mcall((await $.v(C, "Depperiods")), "open", []);
  await $.mcall((await $.v(C, "Depcapitalperiods")), "open", []);
  await $.mcall((await $.v(C, "Valutes")), "open", []);
  await $.mcall((await $.v(C, "Depositdatsettings")), "Open", []);
  await $.mset((await $.v(C, "XFCheckBox1")), "Checked", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPercentSetting_new", "PerSettingDatSrcDataChange", async function PerSettingDatSrcDataChange(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "field": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "field"]);
  await $.stmt($.call(C, "WaitFor", []));
  return L0.result;
}, {"params": ["Sender", "Field"], "kind": "procedure", "ptypes": ["TObject", "TField"]});
  U.method("TPercentSetting_new", "WaitForOp", async function WaitForOp(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "p_depositid": 0, "p_periodid": 0, "p_capitalperid": 0, "p_currencyid": 0, "p_amount_setting_id": 0};
  {
    const $t23 = (await $.v(C, "DepositTypes"));
    await $.wset([$t23], "P_DepositID", (await $.mv((await $.wcall([$t23], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["p_depositid"], set: async (v) => { L0["p_depositid"] = v; }, local: true });
  }
  {
    const $t24 = (await $.v(C, "depcapitalperiods"));
    await $.wset([$t24], "P_CapitalPerID", (await $.mv((await $.wcall([$t24], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["p_capitalperid"], set: async (v) => { L0["p_capitalperid"] = v; }, local: true });
  }
  {
    const $t25 = (await $.v(C, "DSsbcm_amount_setting"));
    await $.wset([$t25], "p_amount_setting_id", (await $.mv((await $.wcall([$t25], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["p_amount_setting_id"], set: async (v) => { L0["p_amount_setting_id"] = v; }, local: true });
  }
  {
    const $t26 = (await $.v(C, "depperiods"));
    await $.wset([$t26], "P_PeriodID", (await $.mv((await $.wcall([$t26], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["p_periodid"], set: async (v) => { L0["p_periodid"] = v; }, local: true });
  }
  {
    const $t27 = (await $.v(C, "Valutes"));
    await $.wset([$t27], "P_CurrencyID", (await $.mv((await $.wcall([$t27], "FieldByName", ["VALUTE"], C)), "AsInteger")), { get: async () => L0["p_currencyid"], set: async (v) => { L0["p_currencyid"] = v; }, local: true });
  }
  {
    const $t28 = (await $.v(C, "DSsbcm_amount_setting"));
    if ($.truthy((await $.wv([$t28], "Active", C, false)))) {
      await $.stmt($.wcall([$t28], "close", [], C));
    }
    await $.stmt((await $.wcall([$t28], "setVariable", ["PERIODID", (await $.wv([$t28], "P_PeriodID", { get: async () => L0["p_periodid"], set: async (v) => { L0["p_periodid"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t28], "setVariable", ["Currencyid", (await $.wv([$t28], "P_CurrencyID", { get: async () => L0["p_currencyid"], set: async (v) => { L0["p_currencyid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t28], "open", [], C));
  }
  {
    const $t29 = (await $.v(C, "DSsbcm_amount_setting"));
    await $.wset([$t29], "p_amount_setting_id", (await $.mv((await $.wcall([$t29], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["p_amount_setting_id"], set: async (v) => { L0["p_amount_setting_id"] = v; }, local: true });
  }
  {
    const $t30 = (await $.v(C, "DepositPerSetting"));
    if ($.truthy((await $.wv([$t30], "Active", C, false)))) {
      await $.stmt($.wcall([$t30], "close", [], C));
    }
    await $.stmt((await $.wcall([$t30], "setVariable", ["DepID", (await $.wv([$t30], "P_DepositID", { get: async () => L0["p_depositid"], set: async (v) => { L0["p_depositid"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t30], "setVariable", ["PeriodID", (await $.wv([$t30], "P_PeriodID", { get: async () => L0["p_periodid"], set: async (v) => { L0["p_periodid"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t30], "setVariable", ["CapitalID", (await $.wv([$t30], "P_CapitalPerID", { get: async () => L0["p_capitalperid"], set: async (v) => { L0["p_capitalperid"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t30], "setVariable", ["Currencyid", (await $.wv([$t30], "P_CurrencyID", { get: async () => L0["p_currencyid"], set: async (v) => { L0["p_currencyid"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t30], "setVariable", ["Amount_setting_id", (await $.wv([$t30], "p_amount_setting_id", { get: async () => L0["p_amount_setting_id"], set: async (v) => { L0["p_amount_setting_id"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t30], "open", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPercentSetting_new", "XDBGrid3KeyDown", async function XDBGrid3KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  {
    const $t31 = L0["sender"];
    if ($.truthy((await $.and_(($.eq((await $.wv([$t31], "key", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true }, false)), (await $.wv([$t31], "VK_DELETE", C, false)))), async () => ($.gt((await $.mv((await $.mv((await $.wv([$t31], "DataSource", C, false)), "DataSet")), "RecordCount")), 0)))))) {
      if ($.truthy($.eq((await $.wcall([$t31], "MessageDlg", ["Silinməsinə əminsinizmi?", (await $.wv([$t31], "mtConfirmation", C, false)), [(await $.wv([$t31], "mbYes", C, false)), (await $.wv([$t31], "mbNo", C, false))], 0], C)), (await $.wv([$t31], "mrYes", C, false))))) {
        await $.mcall((await $.mv((await $.wv([$t31], "DataSource", C, false)), "DataSet")), "Delete", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TPercentSetting_new", "WaitFor", async function WaitFor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "p_depid": 0, "p_periodid": 0, "p_capitalid": 0, "p_valcod": 0, "p_depsetid": 0, "p_amount_setting_id": 0};
  {
    const $t32 = (await $.v(C, "DepositTypes"));
    await $.wset([$t32], "P_DepID", (await $.mv((await $.wcall([$t32], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["p_depid"], set: async (v) => { L0["p_depid"] = v; }, local: true });
  }
  {
    const $t33 = (await $.v(C, "depperiods"));
    await $.wset([$t33], "P_Periodid", (await $.mv((await $.wcall([$t33], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["p_periodid"], set: async (v) => { L0["p_periodid"] = v; }, local: true });
  }
  {
    const $t34 = (await $.v(C, "depcapitalperiods"));
    await $.wset([$t34], "P_Capitalid", (await $.mv((await $.wcall([$t34], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["p_capitalid"], set: async (v) => { L0["p_capitalid"] = v; }, local: true });
  }
  {
    const $t35 = (await $.v(C, "Valutes"));
    await $.wset([$t35], "P_Valcod", (await $.mv((await $.wcall([$t35], "FieldByName", ["VALUTE"], C)), "AsInteger")), { get: async () => L0["p_valcod"], set: async (v) => { L0["p_valcod"] = v; }, local: true });
  }
  {
    const $t36 = (await $.v(C, "DSsbcm_amount_setting"));
    await $.wset([$t36], "p_amount_setting_id", (await $.mv((await $.wcall([$t36], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["p_amount_setting_id"], set: async (v) => { L0["p_amount_setting_id"] = v; }, local: true });
  }
  {
    const $t37 = (await $.v(C, "Depositdatsettings"));
    if ($.truthy((await $.wv([$t37], "Active", C, false)))) {
      await $.stmt($.wcall([$t37], "close", [], C));
    }
    await $.stmt((await $.wcall([$t37], "setVariable", ["DepID", (await $.wv([$t37], "P_DepID", { get: async () => L0["p_depid"], set: async (v) => { L0["p_depid"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t37], "setVariable", ["PeriodID", (await $.wv([$t37], "P_PeriodID", { get: async () => L0["p_periodid"], set: async (v) => { L0["p_periodid"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t37], "setVariable", ["CapitalID", (await $.wv([$t37], "P_Capitalid", { get: async () => L0["p_capitalid"], set: async (v) => { L0["p_capitalid"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t37], "setVariable", ["Valcod", (await $.wv([$t37], "P_Valcod", { get: async () => L0["p_valcod"], set: async (v) => { L0["p_valcod"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t37], "setVariable", ["amount_setting_id", (await $.wv([$t37], "p_amount_setting_id", { get: async () => L0["p_amount_setting_id"], set: async (v) => { L0["p_amount_setting_id"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t37], "open", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "PercentSetting_new", (await $.mcall((await $.v(C, "TPercentSetting_new")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
