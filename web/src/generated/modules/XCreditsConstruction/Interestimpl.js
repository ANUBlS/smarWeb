// Generated from Interestimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Interestimpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Grids", "DBGridEh", "ComCtrls", "StdCtrls", "ToolWin", "ExtCtrls", "CMExcelExport", "NLSLocalizer", "ActnList", "ImgList", "Menus", "sboapiDataModuleImpl", "DatModConstructionImpl"]);
  const C = [U];
  U.defClass("TFrmInterest", "TForm", {"pmcalcinterests": {"name": "PmCalcInterests", "type": "TPopupMenu"}, "n2": {"name": "N2", "type": "TMenuItem"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actncalculate": {"name": "ActnCalculate", "type": "TAction"}, "actnacceptcalc": {"name": "ActnAcceptCalc", "type": "TAction"}, "actnrejectcalc": {"name": "ActnRejectCalc", "type": "TAction"}, "actnrefresh": {"name": "ActnRefresh", "type": "TAction"}, "actnexport": {"name": "ActnExport", "type": "TAction"}, "actnfilter": {"name": "ActnFilter", "type": "TAction"}, "actncalcallintrest": {"name": "ActnCalcAllintrest", "type": "TAction"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "cbeom": {"name": "CBEOM", "type": "TCheckBox"}, "dtpcalcdate": {"name": "DTPCalcDate", "type": "TDateTimePicker"}, "calcgrid": {"name": "CalcGrid", "type": "TDBGridEh"}, "credits": {"name": "Credits", "type": "TOracleDataSet"}, "creditsid": {"name": "CreditsID", "type": "TFloatField"}, "creditscontractno": {"name": "CreditsCONTRACTNO", "type": "TStringField"}, "creditscustname": {"name": "CreditsCUSTNAME", "type": "TStringField"}, "creditsaccno": {"name": "CreditsACCNO", "type": "TStringField"}, "creditsclosedate": {"name": "CreditsCLOSEDATE", "type": "TDateTimeField"}, "creditsopendate": {"name": "CreditsOPENDATE", "type": "TDateTimeField"}, "creditsgecmeb": {"name": "CreditsGECMEB", "type": "TFloatField"}, "creditsgecgun": {"name": "CreditsGECGUN", "type": "TFloatField"}, "creditsbld_name": {"name": "CreditsBLD_NAME", "type": "TStringField"}, "creditsdatsrc": {"name": "CreditsDatSrc", "type": "TDataSource"}, "creditsdueinterestrate": {"name": "CreditsDUEINTERESTRATE", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("FrmInterest", null, "TFrmInterest");
  });
  U.method("TFrmInterest", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTPCalcDate")), "datetime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "sysdat")), "fieldbyname", ["tek_dat"])), "asdatetime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
