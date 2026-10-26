// Generated from UnitCalcWares.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitCalcWares", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "Buttons", "ExtCtrls", "UnitData", "UnitShowTrans", "MainResourceImpl", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormCalcWares", "TForm", {"groupboxb": {"name": "GroupBoxB", "type": "TGroupBox"}, "dtp_calcdate": {"name": "DTP_CalcDate", "type": "TDateTimePicker"}, "sbtncalc": {"name": "SBtnCalc", "type": "TSpeedButton"}, "rgroupst": {"name": "RGroupSt", "type": "TRadioGroup"}, "groupboxlastdate": {"name": "GroupBoxLastDate", "type": "TGroupBox"}, "dtp_lastdate": {"name": "DTP_LastDate", "type": "TDateTimePicker"}}, {});
  U.init(async () => {
    U.var_("FormCalcWares", null, "TFormCalcWares");
  });
  U.method("TFormCalcWares", "SBtnCalcClick", async function SBtnCalcClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "calc_date": 0, "parinteger": 0, "v_first_price": 0, "v_cred": 0, "v_debt": 0, "v_trans_name": '', "v_wares_name": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.le(($.sub((await $.mv((await $.v(C, "DTP_LastDate")), "Date")), (await $.mv((await $.v(C, "DTP_CalcDate")), "Date")))), 0))) {
    try {
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
      L0["calc_date"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP_CalcDate")), "DateTime"))]))]));
      {
        const $t1 = (await $.v(C, "DataModWares"));
        { const $t2 = (await $.mv((await $.wv([$t1], "RGroupSt", C, false)), "ItemIndex"));
          if ($.eq($t2, 1)) {
            await $.stmt((await $.mcall((await $.wv([$t1], "SB_MAIN_RESOURCE", C, false)), "CallProcedure", ["Calculate_Wares", [(await $.wv([$t1], "calc_date", { get: async () => L0["calc_date"], set: async (v) => { L0["calc_date"] = v; }, local: true }, false))]])));
          }
          else if ($.eq($t2, 0)) {
            await $.stmt((await $.mcall((await $.wv([$t1], "SB_MAIN_RESOURCE", C, false)), "CallProcedure", ["Calculate_Wares_For_Day", [(await $.wv([$t1], "calc_date", { get: async () => L0["calc_date"], set: async (v) => { L0["calc_date"] = v; }, local: true }, false))]])));
          }
        }
        await $.mcall((await $.wv([$t1], "ODSWares", C, false)), "Refresh", []);
      }
      await $.stmt((await $.call(C, "ShowMessage", ["Hesablanma tamamlandı"])));
      await $.stmt($.call(C, "Close", []));
    } finally {
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    }
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Kicik tarixe hesablamaq olmaz!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCalcWares", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTP_LastDate")), "Date", (await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallDateFunction", ["last_calc_date", []])));
  await $.mset((await $.v(C, "DTP_CalcDate")), "Date", (await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallDateFunction", ["get_date", []])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
