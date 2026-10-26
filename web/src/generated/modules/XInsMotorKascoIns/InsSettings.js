// Generated from InsSettings.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InsSettings", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ComCtrls", "DBViewComboBox", "Mask", "DBCtrls", "ExtCtrls", "DB", "Grids", "DBGrids", "OracleData", "InsMotorKascoImpl", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TfmSettings", "TForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbgrid4": {"name": "DBGrid4", "type": "TDBGrid"}, "dbnavigator3": {"name": "DBNavigator3", "type": "TDBNavigator"}, "dbnavigator4": {"name": "DBNavigator4", "type": "TDBNavigator"}, "odsbankm": {"name": "ODSBankm", "type": "TOracleDataSet"}, "odsbankmid": {"name": "ODSBankmID", "type": "TFloatField"}, "odsbankmkrno": {"name": "ODSBankmKRNO", "type": "TFloatField"}, "odsbankmname": {"name": "ODSBankmNAME", "type": "TStringField"}, "odsbankminn": {"name": "ODSBankmINN", "type": "TStringField"}, "odsbankmswift": {"name": "ODSBankmSWIFT", "type": "TStringField"}, "odsbankmbankcode": {"name": "ODSBankmBANKCODE", "type": "TStringField"}, "odsbankmsubkrno": {"name": "ODSBankmSUBKRNO", "type": "TStringField"}, "dsbankm": {"name": "DSBankm", "type": "TDataSource"}, "odsperrates": {"name": "ODSPerRates", "type": "TOracleDataSet"}, "odsperratestarif_id": {"name": "ODSPerRatesTARIF_ID", "type": "TFloatField"}, "odsperratesmonthcount": {"name": "ODSPerRatesMONTHCOUNT", "type": "TFloatField"}, "odsperratespercent": {"name": "ODSPerRatesPERCENT", "type": "TFloatField"}, "dsperrates": {"name": "DSPerRates", "type": "TDataSource"}, "dstariffs": {"name": "DSTariffs", "type": "TDataSource"}, "odstariffs": {"name": "ODSTariffs", "type": "TOracleDataSet"}, "odstariffsid": {"name": "ODSTariffsID", "type": "TFloatField"}, "odstariffsbank_id": {"name": "ODSTariffsBANK_ID", "type": "TFloatField"}, "odstariffsstate_id": {"name": "ODSTariffsSTATE_ID", "type": "TFloatField"}, "odstariffsbegindate": {"name": "ODSTariffsBEGINDATE", "type": "TDateTimeField"}, "odstariffsenddate": {"name": "ODSTariffsENDDATE", "type": "TDateTimeField"}, "odstariffsfranshiz": {"name": "ODSTariffsFRANSHIZ", "type": "TFloatField"}, "odstariffsstates": {"name": "ODSTariffsStates", "type": "TStringField"}, "odstariffsbanks": {"name": "ODSTariffsBanks", "type": "TStringField"}, "odsstates": {"name": "ODSStates", "type": "TOracleDataSet"}, "odsstatesid": {"name": "ODSStatesID", "type": "TFloatField"}, "odsstatesname": {"name": "ODSStatesNAME", "type": "TStringField"}, "dsstates": {"name": "DSStates", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("fmSettings", null, "TfmSettings");
  });
  U.method("TfmSettings", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.v(C, "ModalResult")), (await $.v(C, "mrOk")))))) {
    if ($.truthy(($.eq((await $.mv((await $.v(C, "ODSTariffs")), "State")), (await $.v(C, "dsEdit")))))) {
      await $.mcall((await $.v(C, "ODSTariffs")), "Post", []);
    }
    if ($.truthy(($.eq((await $.mv((await $.v(C, "ODSStates")), "State")), (await $.v(C, "dsEdit")))))) {
      await $.mcall((await $.v(C, "ODSStates")), "Post", []);
    }
    if ($.truthy(($.eq((await $.mv((await $.v(C, "ODSPerRates")), "State")), (await $.v(C, "dsEdit")))))) {
      await $.mcall((await $.v(C, "ODSPerRates")), "Post", []);
    }
    if ($.truthy(($.eq((await $.mv((await $.v(C, "ODSBankm")), "State")), (await $.v(C, "dsEdit")))))) {
      await $.mcall((await $.v(C, "ODSBankm")), "Post", []);
    }
  }
  await $.mcall((await $.v(C, "ODSTariffs")), "Close", []);
  await $.mcall((await $.v(C, "ODSStates")), "Close", []);
  await $.mcall((await $.v(C, "ODSPerRates")), "Close", []);
  await $.mcall((await $.v(C, "ODSBankm")), "Close", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  return U;
}
