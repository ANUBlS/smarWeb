// Generated from FrmPercentConvertingImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmPercentConvertingImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "ActnList", "ImgList", "ToolWin", "ComCtrls", "StdCtrls", "Grids", "DBGridEh", "DB", "Oracle", "OracleData", "CMExcelExport", "DBGridEhGrouping", "GridsEh", "PercentConvertingImpl", "FrmCalcPerProgressImpl", "NewCommonDeclsImpl", "FrmCalcPerFilterImpl"]);
  const C = [U];
  U.defClass("TFrmPercentConverting", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "actnlstcalcpercents": {"name": "ActnLstCalcPercents", "type": "TActionList"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "searchpanel": {"name": "SearchPanel", "type": "TGroupBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "editcontractno": {"name": "EditContractNo", "type": "TEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "editcontractaccno": {"name": "EditContractAccNo", "type": "TEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "editinterestaccno": {"name": "EditInterestAccNo", "type": "TEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "editcustomername": {"name": "EditCustomerName", "type": "TEdit"}, "calcpergrid": {"name": "calcPerGrid", "type": "TDBGridEh"}, "actncalcpercent": {"name": "ActnCalcPercent", "type": "TAction"}, "actncancelcalc": {"name": "ActnCancelCalc", "type": "TAction"}, "actnexport": {"name": "ActnExport", "type": "TAction"}, "excelexp": {"name": "ExcelExp", "type": "TCMExcelExport"}, "actnrefresh": {"name": "ActnRefresh", "type": "TAction"}, "actnclose": {"name": "ActnClose", "type": "TAction"}, "statusimages": {"name": "StatusImages", "type": "TImageList"}, "actnsearch": {"name": "ActnSearch", "type": "TAction"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dtpoperationdate": {"name": "DTPOperationDate", "type": "TDateTimePicker"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "actnfilter": {"name": "ActnFilter", "type": "TAction"}, "actnselectall": {"name": "ActnSelectAll", "type": "TAction"}}, {});
  U.init(async () => {
    U.const("csUnknown", (-(9)));
    U.const("csCalculated", (-(10)));
    U.const("csDisabled", (-(11)));
    U.var_("FrmPercentConverting", null, "TFrmPercentConverting");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "FrmPercentConverting")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmPercentConverting", "RefreshCalcedPercent", async function RefreshCalcedPercent(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.mv((await $.v(C, "calcPerGrid")), "SelectedRows")), "Clear", []);
  {
    const $t1 = (await $.v(C, "DMPercentConverting"));
    const $t2 = (await $.wv([$t1], "CalcedDeposits", C, false));
    await $.stmt($.wcall([$t1, $t2], "Refresh", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmPercentConverting", "CancelCalcDeposit", async function CancelCalcDeposit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"contractid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["contractid"]);
  {
    const $t3 = (await $.v(C, "DMPercentConverting"));
    const $t4 = (await $.wv([$t3], "dm_calculator", C, false));
    await $.stmt((await $.wcall([$t3, $t4], "CallProcedure", ["CancelDepositIntCalc", ["p_contractID", (await $.wv([$t3, $t4], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["ContractID"], "kind": "procedure", "ptypes": ["integer"]});
  U.method("TFrmPercentConverting", "CalcDeposits", async function CalcDeposits(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"getcontractid": $.copyArg(p0), "hdate": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["getcontractid", "hdate"]);
  {
    const $t5 = (await $.v(C, "DMPercentConverting"));
    const $t6 = (await $.wv([$t5], "dm_calculator", C, false));
    await $.wset([$t5, $t6], "Result", (await $.wcall([$t5, $t6], "callIntegerfunction", ["converdeposits", ["contractid", (await $.wv([$t5, $t6], "GetContractID", { get: async () => L0["getcontractid"], set: async (v) => { L0["getcontractid"] = v; }, local: true }, false)), "hdate", (await $.wv([$t5, $t6], "HDate", { get: async () => L0["hdate"], set: async (v) => { L0["hdate"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["GetContractID", "HDate"], "kind": "function", "ptypes": ["integer", "TDateTime"]});
  U.method("TFrmPercentConverting", "Prepareprogress", async function Prepareprogress(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "selrowscount": 0};
  {
    const $t7 = (await $.v(C, "DMPercentConverting"));
    const $t8 = (await $.wv([$t7], "CalcedDeposits", C, false));
    await $.wset([$t7, $t8], "SelRowsCount", (await $.wv([$t7, $t8], "RecordCount", C, false)), { get: async () => L0["selrowscount"], set: async (v) => { L0["selrowscount"] = v; }, local: true });
  }
  {
    const $t9 = (await $.v(C, "FrmCalcPerProgress"));
    const $t10 = (await $.wv([$t9], "ProgressBar", C, false));
    await $.wset([$t9, $t10], "Max", (await $.wv([$t9, $t10], "SelRowsCount", { get: async () => L0["selrowscount"], set: async (v) => { L0["selrowscount"] = v; }, local: true }, false)), C);
    await $.wset([$t9, $t10], "Position", 0, C);
    await $.mcall((await $.mv((await $.wv([$t9, $t10], "DetailsMemo", C, false)), "Lines")), "Clear", []);
    await $.mcall((await $.wv([$t9, $t10], "DetailsMemo", C, false)), "Hide", []);
    await $.mset((await $.wv([$t9, $t10], "BtnDetails", C, false)), "Enabled", (await $.wv([$t9, $t10], "False", C, false)));
    await $.mcall((await $.wv([$t9, $t10], "FrmCalcPerProgress", C, false)), "Show", []);
    await $.mset((await $.wv([$t9, $t10], "STContractsCount", C, false)), "Caption", (await $.wcall([$t9, $t10], "Format", ["Müqavilələrin sayı %d", [(await $.wv([$t9, $t10], "SelRowsCount", { get: async () => L0["selrowscount"], set: async (v) => { L0["selrowscount"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmPercentConverting", "ActnCalcPercentExecute", async function ActnCalcPercentExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "selrowscount": 0, "selrowindex": 0, "aborted": 0, "convresult": 0, "capitalizationcount": 0, "withdrawcount": 0, "errmessage": '', "hdate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["noerrortitle"] = " Faizlər hesablandı.";
  L0["resultitle"] = " Faizlərin hesablanmasında səhvlər var! ";
  L0["capitalizationstitle"] = " %d Kapitallaşdırma.";
  L0["withdrawtitle"] = " %d Cari hesaba köçrülmə.";
  {
    const $t11 = (await $.v(C, "calcPerGrid"));
    const $t12 = (await $.wv([$t11], "SelectedRows", C, false));
    const $t13 = (await $.mv((await $.wv([$t11, $t12], "DataSource", C, false)), "DataSet"));
    await $.wset([$t11, $t12, $t13], "Aborted", 0, { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true });
    await $.wset([$t11, $t12, $t13], "CapitalizationCount", 0, { get: async () => L0["capitalizationcount"], set: async (v) => { L0["capitalizationcount"] = v; }, local: true });
    await $.wset([$t11, $t12, $t13], "WithdrawCount", 0, { get: async () => L0["withdrawcount"], set: async (v) => { L0["withdrawcount"] = v; }, local: true });
    await $.wset([$t11, $t12, $t13], "HDate", (await $.wcall([$t11, $t12, $t13], "integer", [(await $.wcall([$t11, $t12, $t13], "trunc", [(await $.mv((await $.wv([$t11, $t12, $t13], "DTPOperationDate", C, false)), "DateTime"))], C))], C)), { get: async () => L0["hdate"], set: async (v) => { L0["hdate"] = v; }, local: true });
    await $.wset([$t11, $t12, $t13], "SelRowsCount", (await $.wv([$t11, $t12, $t13], "Count", C, false)), { get: async () => L0["selrowscount"], set: async (v) => { L0["selrowscount"] = v; }, local: true });
    if ($.truthy($.ne((await $.wcall([$t11, $t12, $t13], "MessageDlg", ["Faizlər hesablanır əminsinizmi?", (await $.wv([$t11, $t12, $t13], "mtConfirmation", C, false)), [(await $.wv([$t11, $t12, $t13], "mbYes", C, false)), (await $.wv([$t11, $t12, $t13], "mbNo", C, false))], 0], C)), (await $.wv([$t11, $t12, $t13], "mrYes", C, false))))) {
      $.abort();
    }
    await $.stmt($.wcall([$t11, $t12, $t13], "Prepareprogress", [], C));
    await $.mcall((await $.wv([$t11, $t12, $t13], "Application", C, false)), "ProcessMessages", []);
    try {
      { const $t14 = $.sub((await $.wv([$t11, $t12, $t13], "SelRowsCount", { get: async () => L0["selrowscount"], set: async (v) => { L0["selrowscount"] = v; }, local: true }, false)), 1);
        await $.wset([$t11, $t12, $t13], "SelRowIndex", 0, { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true });
        let $t15 = true;
        for (;;) {
          if (!$t15) { await $.wset([$t11, $t12, $t13], "SelRowIndex", $.succ((await $.wv([$t11, $t12, $t13], "SelRowIndex", { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true }, false)), 1), { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true }); }
          $t15 = false;
          if (!($.ord((await $.wv([$t11, $t12, $t13], "SelRowIndex", { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true }, false))) <= $.ord($t14))) break;
          try {
            await $.stmt((await $.wcall([$t11, $t12, $t13], "GotoBookmark", [(await $.wcall([$t11, $t12, $t13], "Pointer", [(await $.idx((await $.wv([$t11, $t12, $t13], "Items", C, false)), [(await $.wv([$t11, $t12, $t13], "SelRowIndex", { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true }, false))]))], C))], C)));
            await $.mcall((await $.mv((await $.wv([$t11, $t12, $t13], "FrmCalcPerProgress", C, false)), "ProgressBar")), "StepIt", []);
            await $.mset((await $.mv((await $.wv([$t11, $t12, $t13], "FrmCalcPerProgress", C, false)), "CurrentDeposit")), "Caption", (await $.mv((await $.wcall([$t11, $t12, $t13], "FieldByName", ["ContractNo"], C)), "AsString")));
            await $.wset([$t11, $t12, $t13], "ConvResult", (await $.wcall([$t11, $t12, $t13], "CalcDeposits", [(await $.mv((await $.wcall([$t11, $t12, $t13], "FieldByName", ["ID"], C)), "AsInteger")), (await $.wv([$t11, $t12, $t13], "HDate", { get: async () => L0["hdate"], set: async (v) => { L0["hdate"] = v; }, local: true }, false))], C)), { get: async () => L0["convresult"], set: async (v) => { L0["convresult"] = v; }, local: true });
            { const $t17 = (await $.wv([$t11, $t12, $t13], "ConvResult", { get: async () => L0["convresult"], set: async (v) => { L0["convresult"] = v; }, local: true }, false));
              if ($.eq($t17, 2)) {
                await $.stmt((await $.wcall([$t11, $t12, $t13], "INC", [$.ref(async () => (await $.wv([$t11, $t12, $t13], "WithdrawCount", { get: async () => L0["withdrawcount"], set: async (v) => { L0["withdrawcount"] = v; }, local: true }, false)), async ($t18) => { await $.wset([$t11, $t12, $t13], "WithdrawCount", $t18, { get: async () => L0["withdrawcount"], set: async (v) => { L0["withdrawcount"] = v; }, local: true }); })], C)));
              }
              else if ($.eq($t17, 1)) {
                await $.stmt((await $.wcall([$t11, $t12, $t13], "INC", [$.ref(async () => (await $.wv([$t11, $t12, $t13], "CapitalizationCount", { get: async () => L0["capitalizationcount"], set: async (v) => { L0["capitalizationcount"] = v; }, local: true }, false)), async ($t19) => { await $.wset([$t11, $t12, $t13], "CapitalizationCount", $t19, { get: async () => L0["capitalizationcount"], set: async (v) => { L0["capitalizationcount"] = v; }, local: true }); })], C)));
              }
            }
          } catch ($t16) {
            $.rethrowControl($t16);
            if ($.excIs($t16, "EOracleError")) {
              L0["e"] = $.exc($t16);
              await $.wset([$t11, $t12, $t13], "ErrMessage", (await $.mv((await $.wv([$t11, $t12, $t13], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), { get: async () => L0["errmessage"], set: async (v) => { L0["errmessage"] = v; }, local: true });
              await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t11, $t12, $t13], "FrmCalcPerProgress", C, false)), "DetailsMemo")), "Lines")), "Add", [$.add($.add($.add($.add(" #", (await $.mv((await $.wcall([$t11, $t12, $t13], "FieldByName", ["ContractNo"], C)), "AsString"))), " << "), (await $.wv([$t11, $t12, $t13], "ErrMessage", { get: async () => L0["errmessage"], set: async (v) => { L0["errmessage"] = v; }, local: true }, false))), " >> ")])));
              await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t11, $t12, $t13], "FrmCalcPerProgress", C, false)), "DetailsMemo")), "Lines")), "Add", [""])));
              await $.stmt((await $.wcall([$t11, $t12, $t13], "Inc", [$.ref(async () => (await $.wv([$t11, $t12, $t13], "Aborted", { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true }, false)), async ($t20) => { await $.wset([$t11, $t12, $t13], "Aborted", $t20, { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true }); })], C)));
              continue;
            }
            else { throw $t16; }
          }
          await $.tick();
        }
      }
    } finally {
      {
        const $t21 = (await $.wv([$t11, $t12, $t13], "FrmCalcPerProgress", C, false));
        await $.mset((await $.wv([$t11, $t12, $t13, $t21], "ProgressBar", C, false)), "Position", 0);
        if ($.truthy($.ne((await $.wv([$t11, $t12, $t13, $t21], "Aborted", { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true }, false)), 0))) {
          await $.mset((await $.mv((await $.wv([$t11, $t12, $t13, $t21], "LblResult", C, false)), "Font")), "Color", (await $.wv([$t11, $t12, $t13, $t21], "clRed", C, false)));
          await $.mset((await $.wv([$t11, $t12, $t13, $t21], "LblResult", C, false)), "Caption", $.add((await $.wcall([$t11, $t12, $t13, $t21], "IntToStr", [(await $.wv([$t11, $t12, $t13, $t21], "Aborted", { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true }, false))], C)), (await $.wv([$t11, $t12, $t13, $t21], "ResulTitle", { get: async () => L0["resultitle"], set: async (v) => { L0["resultitle"] = v; }, local: true }, false))));
        } else {
          await $.mset((await $.mv((await $.wv([$t11, $t12, $t13, $t21], "LblResult", C, false)), "Font")), "Color", (await $.wv([$t11, $t12, $t13, $t21], "clGreen", C, false)));
          await $.mset((await $.wv([$t11, $t12, $t13, $t21], "LblResult", C, false)), "Caption", (await $.wv([$t11, $t12, $t13, $t21], "NoErrorTitle", { get: async () => L0["noerrortitle"], set: async (v) => { L0["noerrortitle"] = v; }, local: true }, false)));
        }
        await $.mset((await $.wv([$t11, $t12, $t13, $t21], "STCapitalizationsCount", C, false)), "Caption", (await $.wcall([$t11, $t12, $t13, $t21], "Format", [(await $.wv([$t11, $t12, $t13, $t21], "CapitalizationsTitle", { get: async () => L0["capitalizationstitle"], set: async (v) => { L0["capitalizationstitle"] = v; }, local: true }, false)), [(await $.wv([$t11, $t12, $t13, $t21], "CapitalizationCount", { get: async () => L0["capitalizationcount"], set: async (v) => { L0["capitalizationcount"] = v; }, local: true }, false))]], C)));
        await $.mset((await $.wv([$t11, $t12, $t13, $t21], "STWithdrawsCount", C, false)), "Caption", (await $.wcall([$t11, $t12, $t13, $t21], "Format", [(await $.wv([$t11, $t12, $t13, $t21], "WithdrawTitle", { get: async () => L0["withdrawtitle"], set: async (v) => { L0["withdrawtitle"] = v; }, local: true }, false)), [(await $.wv([$t11, $t12, $t13, $t21], "WithdrawCount", { get: async () => L0["withdrawcount"], set: async (v) => { L0["withdrawcount"] = v; }, local: true }, false))]], C)));
        await $.mset((await $.wv([$t11, $t12, $t13, $t21], "BtnDetails", C, false)), "Enabled", (await $.wv([$t11, $t12, $t13, $t21], "True", C, false)));
        await $.mset((await $.wv([$t11, $t12, $t13, $t21], "CurrentDeposit", C, false)), "Caption", "");
      }
      await $.stmt($.wcall([$t11, $t12, $t13], "RefreshCalcedPercent", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPercentConverting", "ActnCancelCalcExecute", async function ActnCancelCalcExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "selrowscount": 0, "selrowindex": 0, "aborted": 0, "errmessage": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["noerrortitle"] = " Hesablamalar ləğv olundu .";
  L0["resultitle"] = " Səhv var! ";
  {
    const $t22 = (await $.v(C, "calcPerGrid"));
    const $t23 = (await $.wv([$t22], "SelectedRows", C, false));
    const $t24 = (await $.mv((await $.wv([$t22, $t23], "DataSource", C, false)), "DataSet"));
    await $.wset([$t22, $t23, $t24], "Aborted", 0, { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true });
    await $.wset([$t22, $t23, $t24], "SelRowsCount", (await $.wv([$t22, $t23, $t24], "Count", C, false)), { get: async () => L0["selrowscount"], set: async (v) => { L0["selrowscount"] = v; }, local: true });
    if ($.truthy($.ne((await $.wcall([$t22, $t23, $t24], "MessageDlg", ["Hesablamalar ləğv olunsun?", (await $.wv([$t22, $t23, $t24], "mtConfirmation", C, false)), [(await $.wv([$t22, $t23, $t24], "mbYes", C, false)), (await $.wv([$t22, $t23, $t24], "mbNo", C, false))], 0], C)), (await $.wv([$t22, $t23, $t24], "mrYes", C, false))))) {
      $.abort();
    }
    await $.stmt($.wcall([$t22, $t23, $t24], "Prepareprogress", [], C));
    await $.mcall((await $.wv([$t22, $t23, $t24], "Application", C, false)), "ProcessMessages", []);
    try {
      { const $t25 = $.sub((await $.wv([$t22, $t23, $t24], "SelRowsCount", { get: async () => L0["selrowscount"], set: async (v) => { L0["selrowscount"] = v; }, local: true }, false)), 1);
        await $.wset([$t22, $t23, $t24], "SelRowIndex", 0, { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true });
        let $t26 = true;
        for (;;) {
          if (!$t26) { await $.wset([$t22, $t23, $t24], "SelRowIndex", $.succ((await $.wv([$t22, $t23, $t24], "SelRowIndex", { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true }, false)), 1), { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true }); }
          $t26 = false;
          if (!($.ord((await $.wv([$t22, $t23, $t24], "SelRowIndex", { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true }, false))) <= $.ord($t25))) break;
          try {
            await $.stmt((await $.wcall([$t22, $t23, $t24], "GotoBookmark", [(await $.wcall([$t22, $t23, $t24], "Pointer", [(await $.idx((await $.wv([$t22, $t23, $t24], "Items", C, false)), [(await $.wv([$t22, $t23, $t24], "SelRowIndex", { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true }, false))]))], C))], C)));
            await $.mcall((await $.mv((await $.wv([$t22, $t23, $t24], "FrmCalcPerProgress", C, false)), "ProgressBar")), "StepIt", []);
            await $.mset((await $.mv((await $.wv([$t22, $t23, $t24], "FrmCalcPerProgress", C, false)), "CurrentDeposit")), "Caption", (await $.mv((await $.wcall([$t22, $t23, $t24], "FieldByName", ["ContractNo"], C)), "AsString")));
            await $.stmt((await $.wcall([$t22, $t23, $t24], "CancelCalcDeposit", [(await $.mv((await $.wcall([$t22, $t23, $t24], "FieldByName", ["ID"], C)), "AsInteger"))], C)));
          } catch ($t27) {
            $.rethrowControl($t27);
            if ($.excIs($t27, "EOracleError")) {
              L0["e"] = $.exc($t27);
              await $.wset([$t22, $t23, $t24], "ErrMessage", (await $.mv((await $.wv([$t22, $t23, $t24], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), { get: async () => L0["errmessage"], set: async (v) => { L0["errmessage"] = v; }, local: true });
              await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t22, $t23, $t24], "FrmCalcPerProgress", C, false)), "DetailsMemo")), "Lines")), "Add", [$.add($.add($.add($.add(" #", (await $.mv((await $.wcall([$t22, $t23, $t24], "FieldByName", ["ContractNo"], C)), "AsString"))), " << "), (await $.wv([$t22, $t23, $t24], "ErrMessage", { get: async () => L0["errmessage"], set: async (v) => { L0["errmessage"] = v; }, local: true }, false))), " >> ")])));
              await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t22, $t23, $t24], "FrmCalcPerProgress", C, false)), "DetailsMemo")), "Lines")), "Add", [""])));
              await $.stmt((await $.wcall([$t22, $t23, $t24], "Inc", [$.ref(async () => (await $.wv([$t22, $t23, $t24], "Aborted", { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true }, false)), async ($t28) => { await $.wset([$t22, $t23, $t24], "Aborted", $t28, { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true }); })], C)));
              continue;
            }
            else { throw $t27; }
          }
          await $.tick();
        }
      }
    } finally {
      {
        const $t29 = (await $.wv([$t22, $t23, $t24], "FrmCalcPerProgress", C, false));
        await $.mset((await $.wv([$t22, $t23, $t24, $t29], "ProgressBar", C, false)), "Position", 0);
        if ($.truthy($.ne((await $.wv([$t22, $t23, $t24, $t29], "Aborted", { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true }, false)), 0))) {
          await $.mset((await $.mv((await $.wv([$t22, $t23, $t24, $t29], "LblResult", C, false)), "Font")), "Color", (await $.wv([$t22, $t23, $t24, $t29], "clRed", C, false)));
          await $.mset((await $.wv([$t22, $t23, $t24, $t29], "LblResult", C, false)), "Caption", $.add((await $.wcall([$t22, $t23, $t24, $t29], "IntToStr", [(await $.wv([$t22, $t23, $t24, $t29], "Aborted", { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true }, false))], C)), (await $.wv([$t22, $t23, $t24, $t29], "ResulTitle", { get: async () => L0["resultitle"], set: async (v) => { L0["resultitle"] = v; }, local: true }, false))));
        } else {
          await $.mset((await $.mv((await $.wv([$t22, $t23, $t24, $t29], "LblResult", C, false)), "Font")), "Color", (await $.wv([$t22, $t23, $t24, $t29], "clGreen", C, false)));
          await $.mset((await $.wv([$t22, $t23, $t24, $t29], "LblResult", C, false)), "Caption", (await $.wv([$t22, $t23, $t24, $t29], "NoErrorTitle", { get: async () => L0["noerrortitle"], set: async (v) => { L0["noerrortitle"] = v; }, local: true }, false)));
        }
        await $.mset((await $.wv([$t22, $t23, $t24, $t29], "BtnDetails", C, false)), "Enabled", (await $.wv([$t22, $t23, $t24, $t29], "True", C, false)));
        await $.mset((await $.wv([$t22, $t23, $t24, $t29], "CurrentDeposit", C, false)), "Caption", "");
      }
      await $.stmt($.wcall([$t22, $t23, $t24], "RefreshCalcedPercent", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPercentConverting", "ActnExportExecute", async function ActnExportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t30 = (await $.v(C, "ExcelExp"));
    await $.stmt($.wcall([$t30], "Connect", [], C));
    await $.stmt((await $.wcall([$t30], "ExportDataset", [(await $.mv((await $.wv([$t30], "DMPercentConverting", C, false)), "CalcedDeposits")), "Hesablanmış faizlər", (await $.wv([$t30], "True", C, false)), (await $.wv([$t30], "false", C, false))], C)));
    await $.stmt($.wcall([$t30], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPercentConverting", "calcPerGridDrawColumnCell", async function calcPerGridDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["datacolindex"] = 1;
  L0["imageindex"] = (-(1));
  {
    const $t31 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t31], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t32 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t31], "DataSource", C, false)), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t32, (await $.wv([$t31], "csUnknown", C, false)))) {
          await $.wset([$t31], "ImageIndex", 0, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t32, (await $.wv([$t31], "csCalculated", C, false)))) {
          await $.wset([$t31], "ImageIndex", 1, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t32, (await $.wv([$t31], "csDisabled", C, false)))) {
          await $.wset([$t31], "ImageIndex", 2, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
      }
      if ($.truthy(($.eq((await $.wv([$t31], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)))) {
        await $.stmt((await $.mcall((await $.wv([$t31], "StatusImages", C, false)), "Draw", [(await $.wv([$t31], "Canvas", C, false)), (await $.mv((await $.wv([$t31], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t31], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t31], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t31], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t31], "DefaultDrawColumnCell", [(await $.wv([$t31], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t31], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t31], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t31], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumnEh", "TGridDrawState"]});
  U.method("TFrmPercentConverting", "calcPerGridTitleBtnClick", async function calcPerGridTitleBtnClick(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acol": $.copyArg(p1), "column": $.copyArg(p2), result: undefined, "sortfield": ''};
  await $.fixArgs(L0, ["sender", "acol", "column"]);
  L0["sortfield"] = (await $.mv(L0["column"], "FieldName"));
  if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "SortMarker")), (await $.v(C, "smDownEh"))))) {
    L0["sortfield"] = $.add(L0["sortfield"], " DESC");
  }
  {
    const $t33 = L0["sender"];
    const $t34 = (await $.wcall([$t33], "TOracleDataSet", [(await $.mv((await $.wv([$t33], "DataSource", C, false)), "DataSet"))], C));
    await $.stmt($.wcall([$t33, $t34], "ClearVariables", [], C));
    await $.mset((await $.wv([$t33, $t34], "Screen", C, false)), "Cursor", (await $.wv([$t33, $t34], "crSQLWait", C, false)));
    await $.stmt((await $.wcall([$t33, $t34], "SetVariable", ["OrderField", (await $.wv([$t33, $t34], "SortField", { get: async () => L0["sortfield"], set: async (v) => { L0["sortfield"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t33, $t34], "RefResh", [], C));
    await $.mset((await $.wv([$t33, $t34], "Screen", C, false)), "Cursor", (await $.wv([$t33, $t34], "crDefault", C, false)));
  }
  return L0.result;
}, {"params": ["Sender", "ACol", "Column"], "kind": "procedure", "ptypes": ["TObject", "Integer", "TColumnEh"]});
  U.method("TFrmPercentConverting", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DMPercentConverting", (await $.mcall((await $.v(C, "TDMPercentConverting")), "Create", [Self])));
  await $.set(C, "FrmCalcPerProgress", (await $.mcall((await $.v(C, "TFrmCalcPerProgress")), "Create", [Self])));
  await $.set(C, "FrmCalcPerFilter", (await $.mcall((await $.v(C, "TFrmCalcPerFilter")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPercentConverting", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DMPercentConverting")), "Free", []);
  await $.mcall((await $.v(C, "FrmCalcPerProgress")), "Free", []);
  await $.mcall((await $.v(C, "FrmCalcPerFilter")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPercentConverting", "ActnRefreshExecute", async function ActnRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "RefreshCalcedPercent", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPercentConverting", "ActnCloseExecute", async function ActnCloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPercentConverting", "ActnSearchExecute", async function ActnSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t35 = L0["sender"];
    await $.wset([$t35], "SearchField", (await $.wcall([$t35], "copy", [(await $.wv([$t35], "Name", C, false)), 5, (await $.wcall([$t35], "length", [(await $.wv([$t35], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    await $.mcall((await $.mv((await $.wv([$t35], "calcPerGrid", C, false)), "SelectedRows")), "Clear", []);
    {
      const $t36 = (await $.wcall([$t35], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t35], "calcPerGrid", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t35, $t36], "SearchRecord", [(await $.wv([$t35, $t36], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t35, $t36], "Text", C, false)), $.add((await $.wv([$t35, $t36], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t35, $t36], "srFromCurrent", C, false)), (await $.wv([$t35, $t36], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t35, $t36], "MessageDlg", [$.add($.add("Axtarış sona catıb.", "\r"), "əvvəldən başlamaq istəyirsinizmi?"), (await $.wv([$t35, $t36], "mtInformation", C, false)), [(await $.wv([$t35, $t36], "mbNo", C, false)), (await $.wv([$t35, $t36], "mbYes", C, false))], 0], C)), (await $.wv([$t35, $t36], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t35, $t36], "SearchRecord", [(await $.wv([$t35, $t36], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t35, $t36], "Text", C, false)), $.add((await $.wv([$t35, $t36], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t35, $t36], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t35, $t36], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t35, $t36], "mtInformation", C, false)), [(await $.wv([$t35, $t36], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPercentConverting", "EditContractNoKeyPress", async function EditContractNoKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "ActnSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmPercentConverting", "EditContractNoExit", async function EditContractNoExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t37 = (L0["sender"]);
    await $.wset([$t37], "Text", "", C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPercentConverting", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTPOperationDate")), "DateTime", (await $.v(C, "Get_BankDate")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPercentConverting", "ActnFilterExecute", async function ActnFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FrmCalcPerFilter")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPercentConverting", "ActnSelectAllExecute", async function ActnSelectAllExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t38 = (await $.v(C, "calcPerGrid"));
    const $t39 = (await $.wv([$t38], "SelectedRows", C, false));
    const $t40 = (await $.mv((await $.wv([$t38, $t39], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t38, $t39, $t40], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t38, $t39, $t40], "First", [], C));
      while ($.truthy($.not((await $.wv([$t38, $t39, $t40], "Eof", C, false))))) {
        await $.wset([$t38, $t39, $t40], "CurrentRowSelected", (await $.wv([$t38, $t39, $t40], "True", C, false)), C);
        await $.stmt($.wcall([$t38, $t39, $t40], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t38, $t39, $t40], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmPercentConverting", (await $.mcall((await $.v(C, "TFrmPercentConverting")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
