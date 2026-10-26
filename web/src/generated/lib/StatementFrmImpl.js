// Generated from StatementFrmImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("StatementFrmImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "StatementPr_TLB", "StdVcl", "StdCtrls", "ComCtrls", "Buttons", "Grids", "DBGrids", "DB", "QRExport", "DBCtrls", "OracleData", "Oracle", "ExtCtrls", "Gauges", "QuickRpt", "SHFolder", "ShlObj", "ShellAPI", "ComObj", "ComServ", "UnitRep", "UnitReport", "UnitData", "UnitTransView", "UnitReportR", "SBTranslateProc", "sboapiDataModuleImpl", "Unit7", "Unit8", "UnitHesab"]);
  const C = [U];
  U.defClass("TStatementFrm", "TActiveForm", {"grboxmain": {"name": "GrBoxMain", "type": "TGroupBox"}, "grboxdate": {"name": "GrBoxDate", "type": "TGroupBox"}, "dtp_begin": {"name": "DTP_Begin", "type": "TDateTimePicker"}, "labelbegdate": {"name": "LabelBegDate", "type": "TLabel"}, "labelenddate": {"name": "LabelEndDate", "type": "TLabel"}, "dtp_end": {"name": "DTP_End", "type": "TDateTimePicker"}, "grboxchecking": {"name": "GrBoxChecking", "type": "TGroupBox"}, "edit_acc_no": {"name": "Edit_Acc_No", "type": "TEdit"}, "edit_bal_cn": {"name": "Edit_Bal_Cn", "type": "TEdit"}, "btnok": {"name": "BtnOk", "type": "TBitBtn"}, "label_acc_no": {"name": "Label_Acc_No", "type": "TLabel"}, "label_bal_cn": {"name": "Label_Bal_Cn", "type": "TLabel"}, "cboxextractcheck": {"name": "CBoxExtractCheck", "type": "TComboBox"}, "editcli_id": {"name": "EditCli_Id", "type": "TEdit"}, "labelcli_id": {"name": "LabelCli_Id", "type": "TLabel"}, "rgroupprintmode": {"name": "RGroupPrintMode", "type": "TRadioGroup"}, "cbturnover": {"name": "CBTurnOver", "type": "TCheckBox"}, "cbratediff": {"name": "CBRateDiff", "type": "TCheckBox"}, "savedialog": {"name": "SaveDialog", "type": "TSaveDialog"}, "cbcurrency": {"name": "CBCurrency", "type": "TCheckBox"}, "dblcbavalute": {"name": "DBLCBavalute", "type": "TDBLookupComboBox"}, "dblcbfilial": {"name": "DBLCBfilial", "type": "TDBLookupComboBox"}, "cbfilial": {"name": "CBFilial", "type": "TCheckBox"}, "cbuser": {"name": "CBUser", "type": "TCheckBox"}, "dblcbuser": {"name": "dblcbUser", "type": "TDBLookupComboBox"}, "rgroupsetting": {"name": "RGroupSetting", "type": "TRadioGroup"}, "panelprogress": {"name": "PanelProgress", "type": "TPanel"}, "prbarparent": {"name": "PrBarParent", "type": "TGauge"}, "prbarchild": {"name": "PrBarChild", "type": "TProgressBar"}, "rgroupvalview": {"name": "RGroupValView", "type": "TRadioGroup"}, "richedit1": {"name": "RichEdit1", "type": "TRichEdit"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "label1": {"name": "Label1", "type": "TLabel"}, "eclbtn": {"name": "eclbtn", "type": "TButton"}, "button1": {"name": "Button1", "type": "TButton"}, "edit_cred_id": {"name": "Edit_cred_id", "type": "TEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "fevents": {"name": "FEvents", "type": "IStatementFrmEvents"}}, {});
  U.init(async () => {
    U.var_("v_BDate", 0, "TDateTime");
    U.var_("v_EDate", 0, "TDateTime");
    U.var_("notAccId", '', "String");
    U.var_("v_filial", 0, "integer");
    U.var_("v_val", 0, "integer");
    U.var_("v_user", 0, "integer");
    U.var_("TurnYesNo", 0, "Integer");
    U.var_("RateDif", 0, "Integer");
    U.var_("Exl", null, "Variant");
    U.var_("Sheet", null, "Variant");
    U.var_("Turn_and_RateDiff", '', "String");
    U.var_("v_rr", 0, "integer");
    U.var_("Path", '', "String");
    U.var_("Path_b", '', "String");
    U.var_("StatementFrm", null, "TStatementFrm");
    U.var_("v_showrep", 0, "integer");
  });
  U.func("GetPath", async function GetPath(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "imagespath": ''};
  L0["imagespath"] = (await $.call(C, "Format", ["%s\\..\\Bin\\Photo", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))]]));
  await $.set(C, "Path", "temp.jpg");
  await $.set(C, "Path_B", "temp.jpg");
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TStatementFrm", "Fill_Edit", async function Fill_Edit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "f": null};
  await $.stmt($.call(C, "GetPath", []));
  if ($.truthy(((await $.mv((await $.mv((await $.v(C, "DataModSTX")), "ODSLogoLOGO")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FormRep")), "QRImage1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModSTX")), "ODSLogoLOGO")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t1) => { L0["f"] = $t1; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t2) => { L0["f"] = $t2; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t3) => { L0["f"] = $t3; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FormRep")), "QRImage1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t4) => { L0["f"] = $t4; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FormRep")), "QRImage1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TStatementFrm", "Fill_Edit1", async function Fill_Edit1(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "f": null};
  await $.stmt($.call(C, "GetPath", []));
  if ($.truthy(((await $.mv((await $.mv((await $.v(C, "DataModSTX")), "ODSLogoLOGO")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FormRepR")), "QRImage1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModSTX")), "ODSLogoLOGO")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t5) => { L0["f"] = $t5; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t6) => { L0["f"] = $t6; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t7) => { L0["f"] = $t7; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FormRepR")), "QRImage1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t8) => { L0["f"] = $t8; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FormRepR")), "QRImage1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TStatementFrm", "UpdateStr", async function UpdateStr(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"inpstr": $.copyArg(p0), result: '', "tempstring": '', "endstring": '', "flag": 0, "tempcount": 0, "i": 0, "count": 0, "beg_index": 0, "k": 0};
  await $.fixArgs(L0, ["inpstr"]);
  L0["commas"] = "'";
  L0["comma"] = ",";
  L0["result"] = L0["inpstr"];
  if ($.truthy($.ne(L0["result"], ""))) {
    L0["tempstring"] = "";
    L0["endstring"] = "";
    L0["beg_index"] = 1;
    L0["k"] = (await $.call(C, "Length", [L0["result"]]));
    L0["tempcount"] = 0;
    L0["flag"] = 1;
    { const $t9 = L0["k"];
      L0["i"] = 1;
      let $t10 = true;
      for (;;) {
        if (!$t10) { L0["i"] = $.succ(L0["i"], 1); }
        $t10 = false;
        if (!($.ord(L0["i"]) <= $.ord($t9))) break;
        if ($.truthy($.ne((await $.idx(L0["result"], [L0["i"]])), " "))) {
          L0["tempstring"] = $.add(L0["tempstring"], (await $.idx(L0["result"], [L0["i"]])));
        }
        await $.tick();
      }
    }
    L0["inpstr"] = L0["tempstring"];
    L0["result"] = L0["inpstr"];
    L0["tempstring"] = "";
    L0["k"] = (await $.call(C, "Length", [L0["result"]]));
    { const $t11 = L0["k"];
      L0["i"] = 1;
      let $t12 = true;
      for (;;) {
        if (!$t12) { L0["i"] = $.succ(L0["i"], 1); }
        $t12 = false;
        if (!($.ord(L0["i"]) <= $.ord($t11))) break;
        if ($.truthy($.eq((await $.idx(L0["result"], [L0["i"]])), ","))) {
          L0["count"] = $.sub(($.sub(L0["i"], 1)), L0["tempcount"]);
          L0["result"] = (await $.call(C, "Copy", [L0["result"], L0["beg_index"], L0["count"]]));
          L0["tempstring"] = $.add($.add($.add($.add(L0["tempstring"], L0["result"]), L0["commas"]), L0["comma"]), L0["commas"]);
          L0["result"] = L0["inpstr"];
          L0["beg_index"] = $.add(L0["i"], 1);
          L0["tempcount"] = L0["i"];
          L0["flag"] = 0;
        }
        if ($.truthy($.eq(L0["flag"], 1))) {
          L0["endstring"] = $.add(L0["endstring"], (await $.idx(L0["result"], [L0["i"]])));
        } else {
          L0["endstring"] = "";
          L0["flag"] = 1;
        }
        await $.tick();
      }
    }
    L0["result"] = $.add($.add($.add(L0["commas"], L0["tempstring"]), L0["endstring"]), L0["commas"]);
  } else {
    L0["result"] = "' '";
  }
  return L0.result;
}, {"params": ["InpStr"], "kind": "function", "ptypes": ["String"]});
  U.func("CreateSheet", async function CreateSheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.set(C, "Exl", (await $.call(C, "CreateOleObject", ["Excel.Application"])));
    await $.mcall((await $.mv((await $.v(C, "Exl")), "WorkBooks")), "add", []);
    await $.set(C, "Sheet", (await $.idx((await $.mv((await $.mv((await $.mv((await $.v(C, "Exl")), "Application")), "Worksheets")), "Item")), [1])));
  } catch ($t13) {
    $.rethrowControl($t13);
    $.handled($t13);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TStatementFrm", "SB_SysDate", async function SB_SysDate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  {
    const $t14 = (await $.mv((await $.v(C, "DataModSTX")), "SB_STATEMENT"));
    await $.wset([$t14], "Result", (await $.wcall([$t14], "CallDateFunction", ["get_date", []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementFrm", "ShowReport", async function ShowReport(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FormRep", (await $.mcall((await $.v(C, "TFormRep")), "Create", [Self])));
  {
    const $t15 = (await $.v(C, "FormRep"));
    if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.wv([$t15], "DataModSTX", C, false)), "ODSMainState")), "FieldByName", ["credid"])), "AsFloat")), 0))) {
      await $.mset((await $.wv([$t15], "QRLabel1", C, false)), "Visible", (await $.wv([$t15], "true", C, false)));
      await $.mset((await $.wv([$t15], "QRDBText3", C, false)), "Visible", (await $.wv([$t15], "true", C, false)));
    } else {
      await $.mset((await $.wv([$t15], "QRLabel1", C, false)), "Visible", (await $.wv([$t15], "false", C, false)));
      await $.mset((await $.wv([$t15], "QRDBText3", C, false)), "Visible", (await $.wv([$t15], "false", C, false)));
    }
    await $.mset((await $.wv([$t15], "QRD_Begin", C, false)), "Caption", (await $.wcall([$t15], "DateToStr", [(await $.wv([$t15], "v_BDate", C, false))], C)));
    await $.mset((await $.wv([$t15], "QRD_End", C, false)), "Caption", (await $.wcall([$t15], "DateToStr", [(await $.wv([$t15], "v_EDate", C, false))], C)));
    { const $t16 = (await $.mv((await $.wv([$t15], "RGroupPrintMode", C, false)), "ItemIndex"));
      if ($.eq($t16, 0)) {
        await $.mset((await $.wv([$t15], "QRBandDetail", C, false)), "ForceNewPage", (await $.wv([$t15], "False", C, false)));
      }
      else if ($.eq($t16, 1)) {
        await $.mset((await $.wv([$t15], "QRBandDetail", C, false)), "ForceNewPage", (await $.wv([$t15], "True", C, false)));
      }
    }
    await $.stmt($.wcall([$t15], "Fill_Edit", [], C));
    await $.mcall((await $.wv([$t15], "QRep", C, false)), "Preview", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TStatementFrm", "ShowReportR", async function ShowReportR(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "a": 0, "tt": 0};
  await $.set(C, "FormRepR", (await $.mcall((await $.v(C, "TFormRepR")), "Create", [Self])));
  {
    const $t17 = (await $.v(C, "FormRepR"));
    await $.mset((await $.wv([$t17], "QRD_Begin", C, false)), "Caption", (await $.wcall([$t17], "DateToStr", [(await $.wv([$t17], "v_BDate", C, false))], C)));
    await $.mset((await $.wv([$t17], "QRD_End", C, false)), "Caption", (await $.wcall([$t17], "DateToStr", [(await $.wv([$t17], "v_EDate", C, false))], C)));
    { const $t18 = (await $.mv((await $.wv([$t17], "RGroupPrintMode", C, false)), "ItemIndex"));
      if ($.eq($t18, 0)) {
        await $.mset((await $.wv([$t17], "QRBandDetail", C, false)), "ForceNewPage", (await $.wv([$t17], "False", C, false)));
      }
      else if ($.eq($t18, 1)) {
        await $.mset((await $.wv([$t17], "QRBandDetail", C, false)), "ForceNewPage", (await $.wv([$t17], "True", C, false)));
      }
    }
    { const $t19 = (await $.mv((await $.wv([$t17], "RGroupValView", C, false)), "ItemIndex"));
      if ($.eq($t19, 0)) {
        await $.mset((await $.wv([$t17], "QRDBTextCurr", C, false)), "DataField", "PairCurrencyId");
      }
      else if ($.eq($t19, 1)) {
        await $.mset((await $.wv([$t17], "QRDBTextCurr", C, false)), "DataField", "aValname");
      }
    }
    await $.wset([$t17], "a", (await $.mcall((await $.mv((await $.wv([$t17], "DataModSTX", C, false)), "SBOP")), "CallIntegerFunction", ["get_acc_no_lenght", []])), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
    await $.mset((await $.wv([$t17], "QRLabelPairAcc", C, false)), "width", $.sub((await $.mv((await $.wv([$t17], "QRLabelPairAcc", C, false)), "Width")), ($.mul(($.sub(28, (await $.wv([$t17], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)))), 6))));
    await $.mset((await $.wv([$t17], "QRDBTextPairAcc", C, false)), "width", $.sub((await $.mv((await $.wv([$t17], "QRDBTextPairAcc", C, false)), "width")), ($.mul(($.sub(28, (await $.wv([$t17], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)))), 6))));
    await $.mset((await $.wv([$t17], "QRDBText1", C, false)), "width", $.sub((await $.mv((await $.wv([$t17], "QRDBText1", C, false)), "width")), ($.mul(($.sub(28, (await $.wv([$t17], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)))), 6))));
    await $.mset((await $.wv([$t17], "QRLabelDebt", C, false)), "Left", $.sub((await $.mv((await $.wv([$t17], "QRLabelDebt", C, false)), "Left")), ($.mul(($.sub(28, (await $.wv([$t17], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)))), 6))));
    await $.mset((await $.wv([$t17], "QRDBTextLDebit", C, false)), "Left", $.sub((await $.mv((await $.wv([$t17], "QRDBTextLDebit", C, false)), "Left")), ($.mul(($.sub(28, (await $.wv([$t17], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)))), 6))));
    await $.mset((await $.wv([$t17], "QRLabelCredit", C, false)), "Left", $.sub((await $.mv((await $.wv([$t17], "QRLabelCredit", C, false)), "Left")), ($.mul(($.sub(28, (await $.wv([$t17], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)))), 6))));
    await $.mset((await $.wv([$t17], "QRDBTextLKredit", C, false)), "Left", $.sub((await $.mv((await $.wv([$t17], "QRDBTextLKredit", C, false)), "Left")), ($.mul(($.sub(28, (await $.wv([$t17], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)))), 6))));
    await $.mset((await $.wv([$t17], "QRLabelSpec", C, false)), "Left", $.sub((await $.mv((await $.wv([$t17], "QRLabelSpec", C, false)), "Left")), ($.mul(($.sub(28, (await $.wv([$t17], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)))), 6))));
    await $.mset((await $.wv([$t17], "QRDBTextTey", C, false)), "Left", $.sub((await $.mv((await $.wv([$t17], "QRDBTextTey", C, false)), "Left")), ($.mul(($.sub(28, (await $.wv([$t17], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)))), 6))));
    await $.mset((await $.wv([$t17], "QRDBTextTey", C, false)), "Width", $.add((await $.mv((await $.wv([$t17], "QRDBTextTey", C, false)), "Width")), ($.mul(($.sub(28, (await $.wv([$t17], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)))), 8))));
    await $.mset((await $.wv([$t17], "DBTextDebit", C, false)), "Left", $.sub((await $.mv((await $.wv([$t17], "DBTextDebit", C, false)), "Left")), ($.mul(($.sub(28, (await $.wv([$t17], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)))), 6))));
    await $.mset((await $.wv([$t17], "DBTextKredit", C, false)), "Left", $.sub((await $.mv((await $.wv([$t17], "DBTextKredit", C, false)), "Left")), ($.mul(($.sub(28, (await $.wv([$t17], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)))), 6))));
    await $.mset((await $.wv([$t17], "QRExprSumLDebit", C, false)), "Left", $.sub((await $.mv((await $.wv([$t17], "QRExprSumLDebit", C, false)), "Left")), ($.mul(($.sub(28, (await $.wv([$t17], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)))), 6))));
    await $.mset((await $.wv([$t17], "QRExprSumLKredit", C, false)), "Left", $.sub((await $.mv((await $.wv([$t17], "QRExprSumLKredit", C, false)), "Left")), ($.mul(($.sub(28, (await $.wv([$t17], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)))), 6))));
    await $.mset((await $.wv([$t17], "QRExprSumDebit", C, false)), "Left", $.sub((await $.mv((await $.wv([$t17], "QRExprSumDebit", C, false)), "Left")), ($.mul(($.sub(28, (await $.wv([$t17], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)))), 6))));
    await $.mset((await $.wv([$t17], "QRExprSumKredit", C, false)), "Left", $.sub((await $.mv((await $.wv([$t17], "QRExprSumKredit", C, false)), "Left")), ($.mul(($.sub(28, (await $.wv([$t17], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)))), 6))));
    await $.wset([$t17], "tt", (await $.mcall((await $.mv((await $.wv([$t17], "DataModSTX", C, false)), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["StatementPr", "FormRepR", "QRLabel2"]])), { get: async () => L0["tt"], set: async (v) => { L0["tt"] = v; }, local: true });
    if ($.truthy($.eq((await $.wv([$t17], "tt", { get: async () => L0["tt"], set: async (v) => { L0["tt"] = v; }, local: true }, false)), 0))) {
      await $.mset((await $.wv([$t17], "QRLabel2", C, false)), "Enabled", (await $.wv([$t17], "false", C, false)));
      await $.mset((await $.wv([$t17], "QRDBText2", C, false)), "Enabled", (await $.wv([$t17], "false", C, false)));
      await $.mset((await $.wv([$t17], "QRDBText1", C, false)), "Enabled", (await $.wv([$t17], "false", C, false)));
      await $.mset((await $.wv([$t17], "QRSubDetail", C, false)), "Height", (await $.wcall([$t17], "trunc", [$.fdiv((await $.mv((await $.wv([$t17], "QRSubDetail", C, false)), "Height")), 1.5)], C)));
    } else {
      await $.mset((await $.wv([$t17], "QRLabel2", C, false)), "Enabled", (await $.wv([$t17], "true", C, false)));
      await $.mset((await $.wv([$t17], "QRDBText2", C, false)), "Enabled", (await $.wv([$t17], "true", C, false)));
      await $.mset((await $.wv([$t17], "QRDBText1", C, false)), "Enabled", (await $.wv([$t17], "true", C, false)));
    }
    await $.stmt($.wcall([$t17], "Fill_Edit1", [], C));
    await $.mcall((await $.wv([$t17], "QRep", C, false)), "Preview", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("DestroySheet", async function DestroySheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Sheet"))])));
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Exl"))])));
  } catch ($t20) {
    $.rethrowControl($t20);
    $.handled($t20);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ShowSheet", async function ShowSheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.mset((await $.v(C, "Exl")), "Visible", true);
  } catch ($t21) {
    $.rethrowControl($t21);
    $.handled($t21);
    await $.stmt($.call(C, "DestroySheet", []));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TStatementFrm", "ToExcelClick", async function ToExcelClick(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "j": 0, "k": 0, "m": 0, "www": 0, "n": 0, "t_val": 0, "v_ldebit": 0, "v_lkredit": 0, "v_debit": 0, "v_kredit": 0, "bash": ''};
  L0["d"] = 6;
  L0["f"] = 3;
  L0["dd"] = 2;
  if ($.truthy($.eq((await $.v(C, "v_showrep")), 0))) {
    try {
      await $.stmt($.call(C, "CreateSheet", []));
      await $.stmt($.call(C, "ExportDataTable", []));
      await $.mset((await $.v(C, "PanelProgress")), "Visible", true);
      await $.mset((await $.v(C, "PrBarParent")), "Progress", 0);
      await $.mset((await $.v(C, "PrBarChild")), "Position", 0);
      await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["A1:A60000"])), "ColumnWidth", 15);
      await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["B1:B60000"])), "ColumnWidth", 15);
      await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["C1:C60000"])), "ColumnWidth", 10);
      await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["D1:D60000"])), "NumberFormat", "#######");
      await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["D1:D60000"])), "ColumnWidth", 20);
      await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["E1:E60000"])), "NumberFormat", "#.00");
      await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["E1:E60000"])), "ColumnWidth", 12);
      await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["F1:F60000"])), "NumberFormat", "#.00");
      await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["F1:F60000"])), "ColumnWidth", 12);
      await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["G1:G60000"])), "ColumnWidth", 100);
      await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["H1:H60000"])), "ColumnWidth", 100);
      L0["k"] = 0;
      {
        const $t22 = (await $.v(C, "DataModSTX"));
        { const $t23 = (await $.mv((await $.wv([$t22], "ODSMainState", C, false)), "RecordCount"));
          await $.wset([$t22], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t24 = true;
          for (;;) {
            if (!$t24) { await $.wset([$t22], "i", $.succ((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t24 = false;
            if (!($.ord((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t23))) break;
            await $.wset([$t22], "t_val", (await $.mv((await $.mcall((await $.wv([$t22], "ODSMainState", C, false)), "FieldByName", ["CurrencyId"])), "AsInteger")), { get: async () => L0["t_val"], set: async (v) => { L0["t_val"] = v; }, local: true });
            if ($.truthy($.eq((await $.wv([$t22], "t_val", { get: async () => L0["t_val"], set: async (v) => { L0["t_val"] = v; }, local: true }, false)), 0))) {
              await $.mset((await $.wv([$t22], "PrBarParent", C, false)), "Progress", $.idiv(($.mul(100, (await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)))), (await $.mv((await $.wv([$t22], "ODSMainState", C, false)), "RecordCount"))));
              await $.wset([$t22], "bash", (await $.wcall([$t22], "inttostr", [$.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)))], C)), { get: async () => L0["bash"], set: async (v) => { L0["bash"] = v; }, local: true });
              { const $t25 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3], " Hesab № :"); if ($t25 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t25); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              { const $t26 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4], (await $.mv((await $.mcall((await $.wv([$t22], "ODSMainState", C, false)), "FieldByName", ["AccountNumber"])), "AsString"))); if ($t26 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t26); } }
              { const $t27 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 1], "Hesabın adı :"); if ($t27 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t27); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 1])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 1])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 2])), "Value", (await $.mv((await $.mcall((await $.wv([$t22], "ODSMainState", C, false)), "FieldByName", ["AccountName"])), "AsString")));
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 2])), "Font")), "Name", "Tahoma");
              { const $t28 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2), 1], "Valyuta :"); if ($t28 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t28); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2), 1])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2), 1])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              { const $t29 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2), 2], (await $.mv((await $.mcall((await $.wv([$t22], "ODSMainState", C, false)), "FieldByName", ["CurrencyName"])), "AsString"))); if ($t29 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t29); } }
              { const $t30 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 1], "Əməliy. tarixi :"); if ($t30 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t30); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 1])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 1])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              { const $t31 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 2], (await $.mv((await $.wv([$t22], "DTP_Begin", C, false)), "DateTime"))); if ($t31 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t31); } }
              { const $t32 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 3], (await $.mv((await $.wv([$t22], "DTP_End", C, false)), "DateTime"))); if ($t32 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t32); } }
              { const $t33 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4), 1], "Əvv əm. tarixi : "); if ($t33 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t33); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4), 1])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4), 1])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4), 2])), "Value", (await $.mv((await $.mcall((await $.wv([$t22], "ODSMainState", C, false)), "FieldByName", ["lastopdate"])), "AsDateTime")));
              { const $t34 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 1], "Günün əvv. qal:"); if ($t34 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t34); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 1])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 1])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              { const $t35 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 2], "Manat :"); if ($t35 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t35); } }
              await $.mset((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 3])), "Value", (await $.wcall([$t22], "FormatFloat", ["#,##0.00", (await $.wcall([$t22], "ABS", [(await $.mv((await $.mcall((await $.wv([$t22], "ODSMainState", C, false)), "FieldByName", ["Ostat"])), "AsFloat"))], C))], C)));
              { const $t36 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 2], "Tarix"); if ($t36 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t36); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 2])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 2])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 2])), "Font")), "Color", (await $.wv([$t22], "clBlue", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 3])), "Value", "Valyuta");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 3])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 3])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 3])), "Font")), "Color", (await $.wv([$t22], "clBlue", C, false)));
              { const $t37 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 4], "Qarşı hesab"); if ($t37 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t37); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 4])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 4])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 4])), "Font")), "Color", (await $.wv([$t22], "clBlue", C, false)));
              { const $t38 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 5], "Debet"); if ($t38 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t38); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 5])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 5])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 5])), "Font")), "Color", (await $.wv([$t22], "clBlue", C, false)));
              { const $t39 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 6], "Kredit"); if ($t39 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t39); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 6])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 6])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 6])), "Font")), "Color", (await $.wv([$t22], "clBlue", C, false)));
              { const $t40 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 7], "Təyinatı"); if ($t40 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t40); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 7])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 7])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 7])), "Font")), "Color", (await $.wv([$t22], "clBlue", C, false)));
              { const $t41 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 8], "Hesabat Təyinatı"); if ($t41 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t41); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 8])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 8])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 8])), "Font")), "Color", (await $.wv([$t22], "clBlue", C, false)));
              await $.wset([$t22], "v_LDebit", 0, { get: async () => L0["v_ldebit"], set: async (v) => { L0["v_ldebit"] = v; }, local: true });
              await $.wset([$t22], "v_LKredit", 0, { get: async () => L0["v_lkredit"], set: async (v) => { L0["v_lkredit"] = v; }, local: true });
              await $.wset([$t22], "n", 0, { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true });
              { const $t42 = (await $.mv((await $.wv([$t22], "ODSExtractTrans", C, false)), "RecordCount"));
                await $.wset([$t22], "j", 1, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
                let $t43 = true;
                for (;;) {
                  if (!$t43) { await $.wset([$t22], "j", $.succ((await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
                  $t43 = false;
                  if (!($.ord((await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t42))) break;
                  await $.mset((await $.wv([$t22], "PrBarChild", C, false)), "Position", $.idiv(($.mul(100, (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)))), (await $.mv((await $.wv([$t22], "ODSExtractTrans", C, false)), "RecordCount"))));
                  await $.wset([$t22], "v_LDebit", $.add((await $.wv([$t22], "v_LDebit", { get: async () => L0["v_ldebit"], set: async (v) => { L0["v_ldebit"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["LDebit"])), "AsFloat"))), { get: async () => L0["v_ldebit"], set: async (v) => { L0["v_ldebit"] = v; }, local: true });
                  await $.wset([$t22], "v_LKredit", $.add((await $.wv([$t22], "v_LKredit", { get: async () => L0["v_lkredit"], set: async (v) => { L0["v_lkredit"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["LKredit"])), "AsFloat"))), { get: async () => L0["v_lkredit"], set: async (v) => { L0["v_lkredit"] = v; }, local: true });
                  { const $t44 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 2], (await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["Dat"])), "AsDateTime"))); if ($t44 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t44); } }
                  { const $t45 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 3], (await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["PairCurrencyid"])), "AsString"))); if ($t45 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t45); } }
                  { const $t46 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 4], (await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["PairAccountName"])), "AsString"))); if ($t46 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t46); } }
                  { const $t47 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 5], (await $.wcall([$t22], "FormatFloat", ["#,##0.00", (await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["LDebit"])), "AsFloat"))], C))); if ($t47 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t47); } }
                  { const $t48 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 6], (await $.wcall([$t22], "FormatFloat", ["#,##0.00", (await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["LKredit"])), "AsFloat"))], C))); if ($t48 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t48); } }
                  { const $t49 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 7], (await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["Name"])), "AsString"))); if ($t49 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t49); } }
                  await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 7])), "Font")), "Name", "Tahoma");
                  { const $t50 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 8], (await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["vreportid"])), "AsString"))); if ($t50 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t50); } }
                  await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 8])), "Font")), "Name", "Tahoma");
                  if ($.truthy($.ne((await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["PairCurrencyid"])), "AsInteger")), 0))) {
                    await $.wset([$t22], "n", $.add((await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 1), { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true });
                    { const $t51 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 5], (await $.wcall([$t22], "FormatFloat", ["#,##0.00", (await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["Debit"])), "AsFloat"))], C))); if ($t51 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t51); } }
                    await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 5])), "Font")), "Bold", (await $.wv([$t22], "True", C, false)));
                    await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 5])), "Font")), "Color", (await $.wv([$t22], "clMaroon", C, false)));
                    { const $t52 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 6], (await $.wcall([$t22], "FormatFloat", ["#,##0.00", (await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["Kredit"])), "AsFloat"))], C))); if ($t52 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t52); } }
                    await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 6])), "Font")), "Bold", (await $.wv([$t22], "True", C, false)));
                    await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 6])), "Font")), "Color", (await $.wv([$t22], "clMaroon", C, false)));
                  }
                  await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "Next", []);
                  await $.wset([$t22], "www", $.add((await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false)), 1), { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true });
                  if ($.truthy((await $.and_(($.eq((await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t22], "ODSExtractTrans", C, false)), "RecordCount")))), async () => ($.ne((await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false)), 0)))))) {
                    await $.wset([$t22], "www", $.add((await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false)), 1), { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true });
                  }
                  await $.tick();
                }
              }
              await $.mset((await $.wv([$t22], "PrBarChild", C, false)), "Position", 0);
              await $.wset([$t22], "m", (await $.mv((await $.wv([$t22], "ODSExtractTrans", C, false)), "RecordCount")), { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true });
              { const $t53 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 1), 5], (await $.wcall([$t22], "FormatFloat", ["#,##0.00", (await $.wv([$t22], "v_LDebit", { get: async () => L0["v_ldebit"], set: async (v) => { L0["v_ldebit"] = v; }, local: true }, false))], C))); if ($t53 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t53); } }
              { const $t54 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 1), 6], (await $.wcall([$t22], "FormatFloat", ["#,##0.00", (await $.wv([$t22], "v_LKredit", { get: async () => L0["v_lkredit"], set: async (v) => { L0["v_lkredit"] = v; }, local: true }, false))], C))); if ($t54 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t54); } }
              { const $t55 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 2), 1], "Günün son. qal:"); if ($t55 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t55); } }
              { const $t56 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 2), 2], "Manat:"); if ($t56 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t56); } }
              { const $t57 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 2), 3], (await $.wcall([$t22], "FormatFloat", ["#,##0.00", (await $.wcall([$t22], "ABS", [(await $.mv((await $.mcall((await $.wv([$t22], "ODSMainState", C, false)), "FieldByName", ["EndOstat"])), "AsFloat"))], C))], C))); if ($t57 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t57); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 2), 1])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 2), 1])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              { const $t58 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 3), 1], ""); if ($t58 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t58); } }
              await $.mcall((await $.idx((await $.mv((await $.wv([$t22], "Exl", C, false)), "Range")), [$.add($.add($.add("A", (await $.wv([$t22], "bash", { get: async () => L0["bash"], set: async (v) => { L0["bash"] = v; }, local: true }, false))), ":H"), (await $.wcall([$t22], "inttostr", [$.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 2)], C)))])), "select", []);
              await $.mset((await $.mv((await $.mv((await $.wv([$t22], "Exl", C, false)), "Selection")), "Interior")), "ColorIndex", 0);
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Range")), [$.add($.add($.add("A", (await $.wv([$t22], "bash", { get: async () => L0["bash"], set: async (v) => { L0["bash"] = v; }, local: true }, false))), ":H"), (await $.wcall([$t22], "inttostr", [$.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 2)], C)))])), "Borders")), "Color", (await $.wv([$t22], "clRed", C, false)));
              await $.mcall((await $.idx((await $.mv((await $.wv([$t22], "Exl", C, false)), "Range")), [$.add($.add($.add("A", (await $.wcall([$t22], "Inttostr", [$.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 3)], C))), ":H"), (await $.wcall([$t22], "Inttostr", [$.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 3)], C)))])), "Select", []);
              await $.mset((await $.mv((await $.mv((await $.wv([$t22], "Exl", C, false)), "Selection")), "Interior")), "ColorIndex", 9);
              await $.wset([$t22], "k", $.add($.add($.add($.add((await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "f", { get: async () => L0["f"], set: async (v) => { L0["f"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true });
              await $.mcall((await $.wv([$t22], "ODSMainState", C, false)), "Next", []);
            } else {
              await $.mset((await $.wv([$t22], "PrBarParent", C, false)), "Progress", $.idiv(($.mul(100, (await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)))), (await $.mv((await $.wv([$t22], "ODSMainState", C, false)), "RecordCount"))));
              await $.wset([$t22], "bash", (await $.wcall([$t22], "inttostr", [$.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)))], C)), { get: async () => L0["bash"], set: async (v) => { L0["bash"] = v; }, local: true });
              { const $t59 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3], " Hesab № :"); if ($t59 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t59); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              { const $t60 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4], (await $.mv((await $.mcall((await $.wv([$t22], "ODSMainState", C, false)), "FieldByName", ["AccountNumber"])), "AsString"))); if ($t60 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t60); } }
              { const $t61 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 1], "Hesabın adı :"); if ($t61 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t61); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 1])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 1])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 2])), "Value", (await $.mv((await $.mcall((await $.wv([$t22], "ODSMainState", C, false)), "FieldByName", ["AccountName"])), "AsString")));
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 2])), "Font")), "Name", "Tahoma");
              { const $t62 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2), 1], "Valyuta :"); if ($t62 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t62); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2), 1])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2), 1])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              { const $t63 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2), 2], (await $.mv((await $.mcall((await $.wv([$t22], "ODSMainState", C, false)), "FieldByName", ["CurrencyName"])), "AsString"))); if ($t63 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t63); } }
              { const $t64 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 1], "Əməliy. tarixi:"); if ($t64 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t64); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 1])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 1])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              { const $t65 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 2], (await $.mv((await $.wv([$t22], "DTP_Begin", C, false)), "DateTime"))); if ($t65 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t65); } }
              { const $t66 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 3], (await $.mv((await $.wv([$t22], "DTP_End", C, false)), "DateTime"))); if ($t66 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t66); } }
              { const $t67 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4), 1], "Əvv əm. tarixi: "); if ($t67 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t67); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4), 1])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4), 1])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4), 2])), "Value", (await $.mv((await $.mcall((await $.wv([$t22], "ODSMainState", C, false)), "FieldByName", ["lastopdate"])), "AsDateTime")));
              { const $t68 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 1], "Günün əvv. qal: "); if ($t68 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t68); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 1])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 1])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              { const $t69 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 2], "Valyuta: "); if ($t69 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t69); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 2])), "Font")), "Name", "Tahoma");
              await $.mset((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 3])), "Value", (await $.wcall([$t22], "FormatFloat", ["#,##0.00", (await $.wcall([$t22], "ABS", [(await $.mv((await $.mcall((await $.wv([$t22], "ODSMainState", C, false)), "FieldByName", ["Ostat"])), "AsFloat"))], C))], C)));
              { const $t70 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 2], "Manat: "); if ($t70 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t70); } }
              { const $t71 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 3], (await $.wcall([$t22], "FormatFloat", ["#,##0.00", (await $.wcall([$t22], "ABS", [(await $.mv((await $.mcall((await $.wv([$t22], "ODSMainState", C, false)), "FieldByName", ["PokOstat"])), "AsCurrency"))], C))], C))); if ($t71 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t71); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 2])), "Font")), "Name", "Tahoma");
              { const $t72 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 7), 2], "Rəsmi məzənnə: "); if ($t72 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t72); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 7), 2])), "Font")), "Name", "Tahoma");
              { const $t73 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 7), 3], (await $.wcall([$t22], "FormatFloat", ["#,##0.0000", (await $.wcall([$t22], "ABS", [(await $.mv((await $.mcall((await $.wv([$t22], "RatesDataSetBegin", C, false)), "FieldByName", ["Ostat"])), "AsCurrency"))], C))], C))); if ($t73 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t73); } }
              { const $t74 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 2], "Tarix"); if ($t74 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t74); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 2])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 2])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 2])), "Font")), "Color", (await $.wv([$t22], "clBlue", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 3])), "Value", "Valyuta");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 3])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 3])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 3])), "Font")), "Color", (await $.wv([$t22], "clBlue", C, false)));
              { const $t75 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 4], "Qarşı hesab"); if ($t75 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t75); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 4])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 4])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 4])), "Font")), "Color", (await $.wv([$t22], "clBlue", C, false)));
              { const $t76 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 5], "Debet"); if ($t76 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t76); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 5])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 5])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 5])), "Font")), "Color", (await $.wv([$t22], "clBlue", C, false)));
              { const $t77 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 6], "Kredit"); if ($t77 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t77); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 6])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 6])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 6])), "Font")), "Color", (await $.wv([$t22], "clBlue", C, false)));
              { const $t78 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 7], "Təyinatı"); if ($t78 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t78); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 7])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 7])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 7])), "Font")), "Color", (await $.wv([$t22], "clBlue", C, false)));
              { const $t79 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 8], "Təyinatı"); if ($t79 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t79); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 8])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 8])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 8])), "Font")), "Color", (await $.wv([$t22], "clBlue", C, false)));
              await $.wset([$t22], "www", 0, { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true });
              await $.wset([$t22], "v_LDebit", 0, { get: async () => L0["v_ldebit"], set: async (v) => { L0["v_ldebit"] = v; }, local: true });
              await $.wset([$t22], "v_Debit", 0, { get: async () => L0["v_debit"], set: async (v) => { L0["v_debit"] = v; }, local: true });
              await $.wset([$t22], "v_LKredit", 0, { get: async () => L0["v_lkredit"], set: async (v) => { L0["v_lkredit"] = v; }, local: true });
              await $.wset([$t22], "v_Kredit", 0, { get: async () => L0["v_kredit"], set: async (v) => { L0["v_kredit"] = v; }, local: true });
              { const $t80 = (await $.mv((await $.wv([$t22], "ODSExtractTrans", C, false)), "RecordCount"));
                await $.wset([$t22], "j", 1, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
                let $t81 = true;
                for (;;) {
                  if (!$t81) { await $.wset([$t22], "j", $.succ((await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
                  $t81 = false;
                  if (!($.ord((await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t80))) break;
                  await $.mset((await $.wv([$t22], "PrBarChild", C, false)), "Position", $.idiv(($.mul(100, (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)))), (await $.mv((await $.wv([$t22], "ODSExtractTrans", C, false)), "RecordCount"))));
                  await $.wset([$t22], "v_Debit", $.add((await $.wv([$t22], "v_Debit", { get: async () => L0["v_debit"], set: async (v) => { L0["v_debit"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["Debit"])), "AsFloat"))), { get: async () => L0["v_debit"], set: async (v) => { L0["v_debit"] = v; }, local: true });
                  await $.wset([$t22], "v_Kredit", $.add((await $.wv([$t22], "v_Kredit", { get: async () => L0["v_kredit"], set: async (v) => { L0["v_kredit"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["Kredit"])), "AsFloat"))), { get: async () => L0["v_kredit"], set: async (v) => { L0["v_kredit"] = v; }, local: true });
                  await $.wset([$t22], "v_LDebit", $.add((await $.wv([$t22], "v_LDebit", { get: async () => L0["v_ldebit"], set: async (v) => { L0["v_ldebit"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["LDebit"])), "AsFloat"))), { get: async () => L0["v_ldebit"], set: async (v) => { L0["v_ldebit"] = v; }, local: true });
                  await $.wset([$t22], "v_LKredit", $.add((await $.wv([$t22], "v_LKredit", { get: async () => L0["v_lkredit"], set: async (v) => { L0["v_lkredit"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["LKredit"])), "AsFloat"))), { get: async () => L0["v_lkredit"], set: async (v) => { L0["v_lkredit"] = v; }, local: true });
                  { const $t82 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 2], (await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["Dat"])), "AsDateTime"))); if ($t82 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t82); } }
                  { const $t83 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 3], (await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["PairCurrencyid"])), "AsString"))); if ($t83 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t83); } }
                  { const $t84 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 4], (await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["PairAccountName"])), "AsString"))); if ($t84 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t84); } }
                  { const $t85 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 5], (await $.wcall([$t22], "FormatFloat", ["#,##0.00", (await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["LDebit"])), "AsFloat"))], C))); if ($t85 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t85); } }
                  { const $t86 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 6], (await $.wcall([$t22], "FormatFloat", ["#,##0.00", (await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["LKredit"])), "AsFloat"))], C))); if ($t86 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t86); } }
                  { const $t87 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 7], (await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["Name"])), "AsString"))); if ($t87 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t87); } }
                  await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 7])), "Font")), "Name", "Tahoma");
                  { const $t88 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 8], (await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["vreportid"])), "AsString"))); if ($t88 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t88); } }
                  await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 8])), "Font")), "Name", "Tahoma");
                  { const $t89 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 5], (await $.wcall([$t22], "FormatFloat", ["#,##0.00", (await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["Debit"])), "AsFloat"))], C))); if ($t89 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t89); } }
                  await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 5])), "Font")), "Bold", (await $.wv([$t22], "True", C, false)));
                  await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 5])), "Font")), "Color", (await $.wv([$t22], "clMaroon", C, false)));
                  { const $t90 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 6], (await $.wcall([$t22], "FormatFloat", ["#,##0.00", (await $.mv((await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "FieldByName", ["Kredit"])), "AsFloat"))], C))); if ($t90 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t90); } }
                  await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 6])), "Font")), "Bold", (await $.wv([$t22], "True", C, false)));
                  await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 6])), "Font")), "Color", (await $.wv([$t22], "clMaroon", C, false)));
                  await $.mcall((await $.wv([$t22], "ODSExtractTrans", C, false)), "Next", []);
                  await $.wset([$t22], "www", $.add((await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false)), 1), { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true });
                  if ($.truthy((await $.and_(($.eq((await $.wv([$t22], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t22], "ODSExtractTrans", C, false)), "RecordCount")))), async () => ($.ne((await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false)), 0)))))) {
                    await $.wset([$t22], "www", $.add((await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false)), 1), { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true });
                  }
                  await $.tick();
                }
              }
              await $.mset((await $.wv([$t22], "PrBarChild", C, false)), "Position", 0);
              await $.wset([$t22], "m", (await $.mv((await $.wv([$t22], "ODSExtractTrans", C, false)), "RecordCount")), { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true });
              { const $t91 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 5], (await $.wcall([$t22], "FormatFloat", ["#,##0.00", (await $.wv([$t22], "v_LDebit", { get: async () => L0["v_ldebit"], set: async (v) => { L0["v_ldebit"] = v; }, local: true }, false))], C))); if ($t91 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t91); } }
              { const $t92 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 6], (await $.wcall([$t22], "FormatFloat", ["#,##0.00", (await $.wv([$t22], "v_LKredit", { get: async () => L0["v_lkredit"], set: async (v) => { L0["v_lkredit"] = v; }, local: true }, false))], C))); if ($t92 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t92); } }
              { const $t93 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 5], (await $.wcall([$t22], "FormatFloat", ["#,##0.00", (await $.wv([$t22], "v_Debit", { get: async () => L0["v_debit"], set: async (v) => { L0["v_debit"] = v; }, local: true }, false))], C))); if ($t93 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t93); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 5])), "Font")), "Color", (await $.wv([$t22], "clMaroon", C, false)));
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 5])), "Font")), "Bold", (await $.wv([$t22], "True", C, false)));
              { const $t94 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 6], (await $.wcall([$t22], "FormatFloat", ["#,##0.00", (await $.wv([$t22], "v_Kredit", { get: async () => L0["v_kredit"], set: async (v) => { L0["v_kredit"] = v; }, local: true }, false))], C))); if ($t94 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t94); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 6])), "Font")), "Color", (await $.wv([$t22], "clMaroon", C, false)));
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 6])), "Font")), "Bold", (await $.wv([$t22], "True", C, false)));
              { const $t95 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 2), 1], "Günün son. qal: "); if ($t95 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t95); } }
              { const $t96 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 2), 2], "Valyuta: "); if ($t96 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t96); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 2), 2])), "Font")), "Name", "Tahoma");
              { const $t97 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 2), 3], (await $.wcall([$t22], "FormatFloat", ["#,##0.00", (await $.wcall([$t22], "ABS", [(await $.mv((await $.mcall((await $.wv([$t22], "ODSMainState", C, false)), "FieldByName", ["EndOstat"])), "AsFloat"))], C))], C))); if ($t97 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t97); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 2), 1])), "Font")), "Name", "Tahoma");
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 2), 1])), "Font")), "Bold", (await $.wv([$t22], "true", C, false)));
              { const $t98 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 3), 2], "Manat: "); if ($t98 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t98); } }
              { const $t99 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 3), 3], (await $.wcall([$t22], "FormatFloat", ["#,##0.00", (await $.wcall([$t22], "ABS", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t22], "DataModSTX", C, false)), "ODSMainState")), "FieldByName", ["EndPokOstat"])), "AsCurrency"))], C))], C))); if ($t99 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t99); } }
              { const $t100 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 4), 2], "Rəsmi məzənnə: "); if ($t100 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t100); } }
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 4), 2])), "Font")), "Name", "Tahoma");
              { const $t101 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 4), 3], (await $.wcall([$t22], "FormatFloat", ["#,##0.0000", (await $.wcall([$t22], "ABS", [(await $.mv((await $.mcall((await $.wv([$t22], "RatesDataSet", C, false)), "FieldByName", ["Ostat"])), "AsCurrency"))], C))], C))); if ($t101 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t101); } }
              { const $t102 = await $.iset((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 5), 1], ""); if ($t102 !== undefined) { await $.mset((await $.wv([$t22], "Sheet", C, false)), "Cells", $t102); } }
              await $.mcall((await $.idx((await $.mv((await $.wv([$t22], "Exl", C, false)), "Range")), [$.add($.add($.add("A", (await $.wv([$t22], "bash", { get: async () => L0["bash"], set: async (v) => { L0["bash"] = v; }, local: true }, false))), ":H"), (await $.wcall([$t22], "inttostr", [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 4)], C)))])), "select", []);
              await $.mset((await $.mv((await $.mv((await $.wv([$t22], "Exl", C, false)), "Selection")), "Interior")), "ColorIndex", 6);
              await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t22], "Sheet", C, false)), "Range")), [$.add($.add($.add("A", (await $.wv([$t22], "bash", { get: async () => L0["bash"], set: async (v) => { L0["bash"] = v; }, local: true }, false))), ":H"), (await $.wcall([$t22], "inttostr", [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 4)], C)))])), "Borders")), "Color", (await $.wv([$t22], "clRed", C, false)));
              await $.mcall((await $.idx((await $.mv((await $.wv([$t22], "Exl", C, false)), "Range")), [$.add($.add($.add("A", (await $.wcall([$t22], "Inttostr", [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 5)], C))), ":H"), (await $.wcall([$t22], "Inttostr", [$.add($.add($.add($.add($.add($.add((await $.wv([$t22], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 5)], C)))])), "Select", []);
              await $.mset((await $.mv((await $.mv((await $.wv([$t22], "Exl", C, false)), "Selection")), "Interior")), "ColorIndex", 9);
              await $.wset([$t22], "k", $.add($.add($.add($.add($.add((await $.wv([$t22], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), (await $.wv([$t22], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), $.mul(2, (await $.wv([$t22], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false)))), (await $.wv([$t22], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), (await $.wv([$t22], "f", { get: async () => L0["f"], set: async (v) => { L0["f"] = v; }, local: true }, false))), (await $.wv([$t22], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true });
              await $.mcall((await $.wv([$t22], "ODSMainState", C, false)), "Next", []);
            }
            await $.tick();
          }
        }
      }
      await $.stmt($.call(C, "ShowSheet", []));
    } finally {
      await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), ["A1:A1"])), "Select", []);
      await $.mset((await $.v(C, "PanelProgress")), "Visible", false);
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
      await $.stmt($.call(C, "DestroySheet", []));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TStatementFrm", "DesktopPath", async function DesktopPath(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "zpath": $.sarr()};
  await $.stmt((await $.call(C, "SHGetFolderPath", [0, (await $.v(C, "CSIDL_DESKTOP")), 0, (await $.v(C, "SHGFP_TYPE_CURRENT")), L0["zpath"]])));
  L0["result"] = (L0["zpath"]);
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementFrm", "Aktonline", async function Aktonline(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "acc_id": 0, "v_kliid": 0, "v_idin": ''};
  await $.stmt($.call(C, "ExportDataTable", []));
  if ($.truthy($.eq((await $.v(C, "v_showrep")), 0))) {
    if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "form7"))]))))) {
      await $.set(C, "Form7", (await $.mcall((await $.v(C, "TForm7")), "Create", [null])));
    }
    {
      const $t103 = (await $.mv((await $.v(C, "Form7")), "odsxx"));
      await $.stmt($.wcall([$t103], "close", [], C));
      await $.stmt((await $.wcall([$t103], "SetVariable", ["begindat", (await $.wv([$t103], "v_BDate", C, false))], C)));
      await $.stmt((await $.wcall([$t103], "SetVariable", ["enddat", (await $.wv([$t103], "v_EDate", C, false))], C)));
      await $.stmt($.wcall([$t103], "open", [], C));
    }
    await $.mcall((await $.mv((await $.v(C, "Form7")), "QRPQuicAct")), "Preview", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TStatementFrm", "Akt", async function Akt(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "path": '', "typ": ''};
  {
    const $t104 = (await $.v(C, "SaveDialog"));
    if ($.truthy((await $.wv([$t104], "Execute", C, false)))) {
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TStatementFrm", "PostClick", async function PostClick(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "ExportDataTable", []));
  if ($.truthy($.eq((await $.v(C, "v_showrep")), 0))) {
    if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FormRep"))]))))) {
      await $.set(C, "FormRep", (await $.mcall((await $.v(C, "TFormRep")), "Create", [null])));
    }
    {
      const $t105 = (await $.v(C, "SaveDialog"));
      if ($.truthy((await $.wv([$t105], "Execute", C, false)))) {
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t105], "FormRep", C, false)), "QRep")), "ExportToFilter", [(await $.mcall((await $.wv([$t105], "TQRAsciiExportFilter", C, false)), "Create", [(await $.wv([$t105], "FileName", C, false))]))])));
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TStatementFrm", "PreviewClick", async function PreviewClick(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "ExportDataTable", []));
  if ($.truthy($.eq((await $.v(C, "v_showrep")), 0))) {
    { const $t106 = (await $.mv((await $.v(C, "RGroupSetting")), "ItemIndex"));
      if ($.eq($t106, 0)) {
        await $.stmt($.call(C, "ShowReportR", []));
      }
      else if ($.eq($t106, 1)) {
        await $.stmt($.call(C, "ShowReport", []));
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TStatementFrm", "ShowTransClick", async function ShowTransClick(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "ExportDataTable", []));
  if ($.truthy($.eq((await $.v(C, "v_showrep")), 0))) {
    await $.set(C, "FormTransView", (await $.mcall((await $.v(C, "TFormTransView")), "Create", [Self])));
    await $.mcall((await $.v(C, "FormTransView")), "ShowModal", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TStatementFrm", "ShowCardState", async function ShowCardState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TStatementFrm", "ExportDataTable", async function ExportDataTable(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "v_acc_no": '', "v_acc_no_old": '', "v_bal_cn": '', "v_cli_id": '', "filtertrans": '', "filterext": '', "astrparam": '', "bstrparam": '', "cstrparam": '', "astrparam2": '', "vidop": 0, "v_cred_id": '', "i": 0, "s": ''};
  await $.set(C, "v_showrep", 0);
  await $.set(C, "Turn_and_RateDiff", "");
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBTurnOver")), "Checked")), true))) {
    await $.set(C, "Turn_and_RateDiff", "ch_turn");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBRateDiff")), "Checked")), true))) {
    await $.set(C, "Turn_and_RateDiff", "ch_rate");
  }
  if ($.truthy($.eq($.eq((await $.mv((await $.v(C, "CBTurnOver")), "Checked")), (await $.and_(true, async () => (await $.mv((await $.v(C, "CBRateDiff")), "Checked"))))), true))) {
    await $.set(C, "Turn_and_RateDiff", "ch_rate_and_turn");
  }
  if ($.truthy($.eq($.eq((await $.mv((await $.v(C, "CBTurnOver")), "Checked")), (await $.and_(false, async () => (await $.mv((await $.v(C, "CBRateDiff")), "Checked"))))), true))) {
    await $.set(C, "Turn_and_RateDiff", "ch_nothink");
  }
  await $.set(C, "v_BDate", (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP_Begin")), "DateTime"))]))])));
  await $.set(C, "v_EDate", (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP_End")), "DateTime"))]))])));
  await $.set(C, "v_user", (await $.mv((await $.v(C, "dblcbUser")), "KeyValue")));
  await $.set(C, "v_val", (await $.mv((await $.v(C, "DBLCBavalute")), "KeyValue")));
  await $.set(C, "v_filial", (await $.mv((await $.v(C, "dblcbfilial")), "KeyValue")));
  if ($.truthy($.ne((await $.mv((await $.v(C, "edit_cred_id")), "Text")), ""))) {
    {
      const $t107 = (await $.mv((await $.v(C, "DataModSTX")), "credit_acc"));
      await $.stmt($.wcall([$t107], "close", [], C));
      await $.stmt((await $.wcall([$t107], "SetVariable", ["VCRED", (await $.mv((await $.wv([$t107], "Edit_cred_id", C, false)), "Text"))], C)));
      await $.stmt($.wcall([$t107], "open", [], C));
      await $.mset((await $.wv([$t107], "Edit_Acc_No", C, false)), "Text", (await $.mv((await $.wcall([$t107], "FieldByName", ["acc_noes"], C)), "AsString")));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "Edit_Acc_No")), "Text")), ""))) {
      L0["v_acc_no"] = "'-1'";
      await $.stmt((await $.call(C, "ShowMessage", ["Mövcud olan məlumat seçilməlidir"])));
      await $.set(C, "v_showrep", 1);
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit_Bal_Cn")), "Text")), ""))) {
    L0["v_bal_cn"] = "-1";
  } else {
    L0["v_bal_cn"] = (await $.call(C, "UpdateStr", [(await $.mv((await $.v(C, "Edit_Bal_Cn")), "Text"))]));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit_Acc_No")), "Text")), ""))) {
    L0["v_acc_no"] = "'-1'";
  } else {
    L0["v_acc_no"] = (await $.call(C, "UpdateStr", [(await $.mv((await $.v(C, "Edit_Acc_No")), "Text"))]));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditCli_Id")), "Text")), ""))) {
    L0["v_cli_id"] = "-1";
  } else {
    L0["v_cli_id"] = (await $.mv((await $.v(C, "EditCli_Id")), "Text"));
  }
  if ($.truthy(($.eq((await $.mv((await $.v(C, "CBRateDiff")), "Checked")), false)))) {
    L0["filtertrans"] = " (OperationCode<>1)  ";
  } else {
    L0["filtertrans"] = "";
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBRateDiff")), "Checked")), false))) {
    L0["vidop"] = 0;
  } else {
    L0["vidop"] = 1;
  }
  L0["cstrparam"] = (await $.mcall((await $.mv((await $.v(C, "DataModSTX")), "SB_STATEMENT")), "CallStringFunction", ["notAccId", [(await $.v(C, "v_BDate")), (await $.v(C, "v_EDate")), L0["v_cli_id"], L0["v_acc_no"], L0["v_bal_cn"], (await $.v(C, "v_filial")), (await $.v(C, "v_val")), (await $.v(C, "v_user")), (await $.v(C, "Turn_and_RateDiff"))]]));
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBTurnOver")), "Checked")), true))) {
    {
      const $t108 = (await $.mv((await $.v(C, "DataModSTX")), "ODSNotAccId"));
      await $.stmt($.wcall([$t108], "Close", [], C));
      await $.mcall((await $.wv([$t108], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t108], "SQL", C, false)), "Add", [(await $.wv([$t108], "CStrParam", { get: async () => L0["cstrparam"], set: async (v) => { L0["cstrparam"] = v; }, local: true }, false))])));
      await $.stmt($.wcall([$t108], "Open", [], C));
      await $.wset([$t108], "S", (await $.wcall([$t108], "Copy", [(await $.wv([$t108], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), 1, $.sub((await $.wcall([$t108], "length", [(await $.wv([$t108], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)), 4)], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
    }
    L0["filterext"] = L0["s"];
  } else {
    L0["filterext"] = "";
  }
  {
    const $t109 = (await $.mv((await $.v(C, "DataModSTX")), "ODS_GetExtraction"));
    await $.stmt($.wcall([$t109], "Close", [], C));
    await $.stmt((await $.wcall([$t109], "SetVariable", ["bDate", (await $.wv([$t109], "v_BDate", C, false))], C)));
    await $.stmt((await $.wcall([$t109], "SetVariable", ["eDate", (await $.wv([$t109], "v_EDate", C, false))], C)));
    await $.stmt((await $.wcall([$t109], "SetVariable", ["ClientID", (await $.wv([$t109], "v_Cli_id", { get: async () => L0["v_cli_id"], set: async (v) => { L0["v_cli_id"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t109], "SetVariable", ["AccountNo", (await $.wv([$t109], "v_Acc_no", { get: async () => L0["v_acc_no"], set: async (v) => { L0["v_acc_no"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t109], "SetVariable", ["BalanceNo", (await $.wv([$t109], "v_Bal_cn", { get: async () => L0["v_bal_cn"], set: async (v) => { L0["v_bal_cn"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t109], "SetVariable", ["BranchID", (await $.wv([$t109], "v_filial", C, false))], C)));
    await $.stmt((await $.wcall([$t109], "SetVariable", ["CurrencyID", (await $.wv([$t109], "v_val", C, false))], C)));
    await $.stmt((await $.wcall([$t109], "SetVariable", ["UserID", (await $.wv([$t109], "v_user", C, false))], C)));
    await $.stmt($.wcall([$t109], "Open", [], C));
    await $.wset([$t109], "AStrParam", (await $.mv((await $.wcall([$t109], "FieldByName", ["str"], C)), "AsString")), { get: async () => L0["astrparam"], set: async (v) => { L0["astrparam"] = v; }, local: true });
  }
  {
    const $t110 = (await $.mv((await $.v(C, "DataModSTX")), "GetExtraction2"));
    await $.stmt($.wcall([$t110], "Close", [], C));
    await $.stmt((await $.wcall([$t110], "SetVariable", ["bDate", (await $.wv([$t110], "v_BDate", C, false))], C)));
    await $.stmt((await $.wcall([$t110], "SetVariable", ["eDate", (await $.wv([$t110], "v_EDate", C, false))], C)));
    await $.stmt((await $.wcall([$t110], "SetVariable", ["ClientID", (await $.wv([$t110], "v_Cli_id", { get: async () => L0["v_cli_id"], set: async (v) => { L0["v_cli_id"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t110], "SetVariable", ["AccountNo", (await $.wv([$t110], "v_Acc_no", { get: async () => L0["v_acc_no"], set: async (v) => { L0["v_acc_no"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t110], "SetVariable", ["BalanceNo", (await $.wv([$t110], "v_Bal_cn", { get: async () => L0["v_bal_cn"], set: async (v) => { L0["v_bal_cn"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t110], "SetVariable", ["BranchID", (await $.wv([$t110], "v_filial", C, false))], C)));
    await $.stmt((await $.wcall([$t110], "SetVariable", ["CurrencyID", (await $.wv([$t110], "v_val", C, false))], C)));
    await $.stmt((await $.wcall([$t110], "SetVariable", ["UserID", (await $.wv([$t110], "v_user", C, false))], C)));
    await $.stmt((await $.wcall([$t110], "SetVariable", ["Vidop", (await $.wv([$t110], "vidop", { get: async () => L0["vidop"], set: async (v) => { L0["vidop"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t110], "Open", [], C));
    await $.wset([$t110], "AStrParam2", (await $.mv((await $.wcall([$t110], "FieldByName", ["str"], C)), "AsString")), { get: async () => L0["astrparam2"], set: async (v) => { L0["astrparam2"] = v; }, local: true });
  }
  {
    const $t111 = (await $.mv((await $.v(C, "DataModSTX")), "ODS_ExtractionTrans"));
    await $.stmt($.wcall([$t111], "Close", [], C));
    await $.stmt((await $.wcall([$t111], "SetVariable", ["bDate", (await $.wv([$t111], "v_BDate", C, false))], C)));
    await $.stmt((await $.wcall([$t111], "SetVariable", ["eDate", (await $.wv([$t111], "v_EDate", C, false))], C)));
    await $.stmt((await $.wcall([$t111], "SetVariable", ["ClientID", (await $.wv([$t111], "v_Cli_id", { get: async () => L0["v_cli_id"], set: async (v) => { L0["v_cli_id"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t111], "SetVariable", ["AccountNo", (await $.wv([$t111], "v_Acc_no", { get: async () => L0["v_acc_no"], set: async (v) => { L0["v_acc_no"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t111], "SetVariable", ["BalanceNo", (await $.wv([$t111], "v_Bal_cn", { get: async () => L0["v_bal_cn"], set: async (v) => { L0["v_bal_cn"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t111], "SetVariable", ["BranchID", (await $.wv([$t111], "v_filial", C, false))], C)));
    await $.stmt((await $.wcall([$t111], "SetVariable", ["CurrencyID", (await $.wv([$t111], "v_val", C, false))], C)));
    await $.stmt((await $.wcall([$t111], "SetVariable", ["UserID", (await $.wv([$t111], "v_user", C, false))], C)));
    await $.stmt((await $.wcall([$t111], "SetVariable", ["Vidop", (await $.wv([$t111], "vidop", { get: async () => L0["vidop"], set: async (v) => { L0["vidop"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t111], "Open", [], C));
    await $.wset([$t111], "BStrParam", (await $.mv((await $.wcall([$t111], "FieldByName", ["str"], C)), "AsString")), { get: async () => L0["bstrparam"], set: async (v) => { L0["bstrparam"] = v; }, local: true });
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBTurnOver")), "Checked")), true))) {
    {
      const $t112 = (await $.v(C, "DataModSTX"));
      await $.mset((await $.wv([$t112], "memo1", C, false)), "Text", (await $.wv([$t112], "bStrParam", { get: async () => L0["bstrparam"], set: async (v) => { L0["bstrparam"] = v; }, local: true }, false)));
      {
        const $t113 = (await $.wv([$t112], "ODSMainState", C, false));
        await $.stmt($.wcall([$t112, $t113], "Close", [], C));
        await $.mcall((await $.wv([$t112, $t113], "SQL", C, false)), "Clear", []);
        await $.stmt((await $.mcall((await $.wv([$t112, $t113], "SQL", C, false)), "Add", [(await $.wv([$t112, $t113], "AStrParam2", { get: async () => L0["astrparam2"], set: async (v) => { L0["astrparam2"] = v; }, local: true }, false))])));
        await $.wset([$t112, $t113], "Filtered", (await $.wv([$t112, $t113], "false", C, false)), C);
        await $.stmt($.wcall([$t112, $t113], "Open", [], C));
      }
      {
        const $t114 = (await $.wv([$t112], "ODSExtractTrans", C, false));
        await $.stmt($.wcall([$t112, $t114], "Close", [], C));
        await $.mcall((await $.wv([$t112, $t114], "SQL", C, false)), "Clear", []);
        await $.stmt((await $.wcall([$t112, $t114], "DeclareVariable", ["OwnAccountId", (await $.wv([$t112, $t114], "otInteger", C, false))], C)));
        await $.stmt((await $.mcall((await $.wv([$t112, $t114], "SQL", C, false)), "Add", [(await $.wv([$t112, $t114], "BStrParam", { get: async () => L0["bstrparam"], set: async (v) => { L0["bstrparam"] = v; }, local: true }, false))])));
        await $.mset((await $.wv([$t112, $t114], "memo1", C, false)), "Text", (await $.wv([$t112, $t114], "bStrParam", { get: async () => L0["bstrparam"], set: async (v) => { L0["bstrparam"] = v; }, local: true }, false)));
        await $.stmt($.wcall([$t112, $t114], "Open", [], C));
      }
    }
  } else {
    {
      const $t115 = (await $.v(C, "DataModSTX"));
      await $.mset((await $.wv([$t115], "memo1", C, false)), "Text", (await $.wv([$t115], "AStrParam", { get: async () => L0["astrparam"], set: async (v) => { L0["astrparam"] = v; }, local: true }, false)));
      {
        const $t116 = (await $.wv([$t115], "ODSMainState", C, false));
        await $.stmt($.wcall([$t115, $t116], "Close", [], C));
        await $.mcall((await $.wv([$t115, $t116], "SQL", C, false)), "Clear", []);
        await $.stmt((await $.mcall((await $.wv([$t115, $t116], "SQL", C, false)), "Add", [(await $.wv([$t115, $t116], "AStrParam", { get: async () => L0["astrparam"], set: async (v) => { L0["astrparam"] = v; }, local: true }, false))])));
        await $.wset([$t115, $t116], "Filtered", (await $.wv([$t115, $t116], "false", C, false)), C);
        await $.stmt($.wcall([$t115, $t116], "Open", [], C));
        await $.mset((await $.wv([$t115, $t116], "memo1", C, false)), "Text", (await $.mv((await $.mv((await $.wv([$t115, $t116], "ODSMainState", C, false)), "SQL")), "Text")));
      }
      {
        const $t117 = (await $.wv([$t115], "ODSExtractTrans", C, false));
        await $.stmt($.wcall([$t115, $t117], "Close", [], C));
        await $.mcall((await $.wv([$t115, $t117], "SQL", C, false)), "Clear", []);
        await $.stmt((await $.wcall([$t115, $t117], "DeclareVariable", ["OwnAccountId", (await $.wv([$t115, $t117], "otInteger", C, false))], C)));
        await $.stmt((await $.mcall((await $.wv([$t115, $t117], "SQL", C, false)), "Add", [(await $.wv([$t115, $t117], "BStrParam", { get: async () => L0["bstrparam"], set: async (v) => { L0["bstrparam"] = v; }, local: true }, false))])));
        await $.stmt($.wcall([$t115, $t117], "Open", [], C));
      }
    }
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TStatementFrm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TStatementFrm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TStatementFrm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TStatementFrm", "Initialize", null, arguments);
  await $.set(C, "OnActivate", (await $.ref_(C, "ActivateEvent")));
  await $.set(C, "OnClick", (await $.ref_(C, "ClickEvent")));
  await $.set(C, "OnCreate", (await $.ref_(C, "CreateEvent")));
  await $.set(C, "OnDblClick", (await $.ref_(C, "DblClickEvent")));
  await $.set(C, "OnDeactivate", (await $.ref_(C, "DeactivateEvent")));
  await $.set(C, "OnDestroy", (await $.ref_(C, "DestroyEvent")));
  await $.set(C, "OnKeyPress", (await $.ref_(C, "KeyPressEvent")));
  await $.set(C, "OnPaint", (await $.ref_(C, "PaintEvent")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TStatementFrm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementFrm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementFrm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementFrm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementFrm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementFrm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementFrm", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementFrm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementFrm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementFrm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementFrm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementFrm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementFrm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementFrm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementFrm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementFrm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementFrm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementFrm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStatementFrm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TStatementFrm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementFrm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementFrm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementFrm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementFrm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementFrm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementFrm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "tempkey": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["tempkey"] = (await $.call(C, "Smallint", [(await L0["key"].get())]));
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.stmt((await $.mcall((await $.v(C, "FEvents")), "OnKeyPress", [L0["tempkey"]])));
  }
  await L0["key"].set((await $.call(C, "Char", [L0["tempkey"]])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TStatementFrm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementFrm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TStatementFrm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TStatementFrm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TStatementFrm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TStatementFrm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TStatementFrm", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TStatementFrm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TStatementFrm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TStatementFrm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TStatementFrm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TStatementFrm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TStatementFrm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TStatementFrm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TStatementFrm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TStatementFrm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TStatementFrm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TStatementFrm", "BtnOkClick", async function BtnOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t118 = (await $.mv((await $.v(C, "CBoxExtractCheck")), "ItemIndex"));
    if ($.eq($t118, 0)) {
      await $.stmt($.call(C, "PreviewClick", []));
    }
    else if ($.eq($t118, 1)) {
      await $.stmt($.call(C, "PostClick", []));
    }
    else if ($.eq($t118, 2)) {
      await $.stmt($.call(C, "ToExcelClick", []));
    }
    else if ($.eq($t118, 3)) {
      await $.stmt($.call(C, "ShowTransClick", []));
    }
    else if ($.eq($t118, 4)) {
      await $.stmt($.call(C, "ShowCardState", []));
    }
    else if ($.eq($t118, 5)) {
      await $.stmt($.call(C, "AktOnline", []));
    }
    else if ($.eq($t118, 6)) {
      await $.stmt($.call(C, "Akt", []));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementFrm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormAccount")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementFrm", "eclbtnClick", async function eclbtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementFrm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "StatementFrm", Self);
  await $.set(C, "formAccount", (await $.mcall((await $.v(C, "TformAccount")), "Create", [Self])));
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "DataModSTX"))]))))) {
    await $.set(C, "DataModSTX", (await $.mcall((await $.v(C, "TDataModSTX")), "Create", [Self])));
  }
  await $.mset((await $.v(C, "CBoxExtractCheck")), "ItemIndex", 0);
  await $.mset((await $.v(C, "DTP_Begin")), "DateTime", (await $.v(C, "SB_SysDate")));
  await $.mset((await $.v(C, "DTP_End")), "DateTime", (await $.v(C, "SB_SysDate")));
  await $.mset((await $.v(C, "dblcbuser")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "dblcbfilial")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "dblcbavalute")), "KeyValue", (-(1)));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementFrm", "CBCurrencyClick", async function CBCurrencyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBCurrency")), "Checked")), true))) {
    await $.mset((await $.v(C, "dblcbavalute")), "KeyValue", 0);
  } else {
    await $.mset((await $.v(C, "dblcbavalute")), "KeyValue", (-(1)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementFrm", "CBFilialClick", async function CBFilialClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBFilial")), "Checked")), true))) {
    await $.mset((await $.v(C, "dblcbfilial")), "KeyValue", 0);
  } else {
    await $.mset((await $.v(C, "dblcbfilial")), "KeyValue", (-(1)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStatementFrm", "CBUserClick", async function CBUserClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBUser")), "Checked")), true))) {
    await $.mset((await $.v(C, "dblcbUser")), "KeyValue", 0);
  } else {
    await $.mset((await $.v(C, "dblcbUser")), "KeyValue", (-(1)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
