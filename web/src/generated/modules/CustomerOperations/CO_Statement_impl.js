// Generated from CO_Statement_impl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CO_Statement_impl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "Gauges", "ExtCtrls", "DBCtrls", "Oracle", "StdCtrls", "Buttons", "QRExport", "ComObj", "ComServ", "CO_Datamod_impl", "co_st_check", "Rep_unit", "RepR_unit", "transview_unit", "SBTranslateProc", "sboapiDataModuleImpl", "customers_operation_impl"]);
  const C = [U];
  U.defClass("TCO_Statement_Form", "TForm", {"grboxmain": {"name": "GrBoxMain", "type": "TGroupBox"}, "grboxdate": {"name": "GrBoxDate", "type": "TGroupBox"}, "labelbegdate": {"name": "LabelBegDate", "type": "TLabel"}, "labelenddate": {"name": "LabelEndDate", "type": "TLabel"}, "dtp_begin": {"name": "DTP_Begin", "type": "TDateTimePicker"}, "dtp_end": {"name": "DTP_End", "type": "TDateTimePicker"}, "cbturnover": {"name": "CBTurnOver", "type": "TCheckBox"}, "cbratediff": {"name": "CBRateDiff", "type": "TCheckBox"}, "grboxchecking": {"name": "GrBoxChecking", "type": "TGroupBox"}, "label_acc_no": {"name": "Label_Acc_No", "type": "TLabel"}, "label_bal_cn": {"name": "Label_Bal_Cn", "type": "TLabel"}, "labelcli_id": {"name": "LabelCli_Id", "type": "TLabel"}, "edit_acc_no": {"name": "Edit_Acc_No", "type": "TEdit"}, "edit_bal_cn": {"name": "Edit_Bal_Cn", "type": "TEdit"}, "btnok": {"name": "BtnOk", "type": "TBitBtn"}, "cboxextractcheck": {"name": "CBoxExtractCheck", "type": "TComboBox"}, "editcli_id": {"name": "EditCli_Id", "type": "TEdit"}, "rgroupprintmode": {"name": "RGroupPrintMode", "type": "TRadioGroup"}, "cbcurrency": {"name": "CBCurrency", "type": "TCheckBox"}, "dblcbavalute": {"name": "DBLCBavalute", "type": "TDBLookupComboBox"}, "dblcbfilial": {"name": "DBLCBfilial", "type": "TDBLookupComboBox"}, "cbfilial": {"name": "CBFilial", "type": "TCheckBox"}, "cbuser": {"name": "CBUser", "type": "TCheckBox"}, "dblcbuser": {"name": "dblcbUser", "type": "TDBLookupComboBox"}, "rgroupsetting": {"name": "RGroupSetting", "type": "TRadioGroup"}, "panelprogress": {"name": "PanelProgress", "type": "TPanel"}, "prbarparent": {"name": "PrBarParent", "type": "TGauge"}, "prbarchild": {"name": "PrBarChild", "type": "TProgressBar"}, "savedialog": {"name": "SaveDialog", "type": "TSaveDialog"}, "qrtextfilter": {"name": "QRTextFilter", "type": "TQRTextFilter"}}, {});
  U.init(async () => {
    U.var_("v_BDate", 0, "TDateTime");
    U.var_("v_EDate", 0, "TDateTime");
    U.var_("notAccId", '', "String");
    U.var_("v_filial", 0, "integer");
    U.var_("v_val", 0, "integer");
    U.var_("v_user", 0, "integer");
    U.var_("TurnYesNo", 0, "integer");
    U.var_("RateDif", 0, "integer");
    U.var_("Exl", null, "Variant");
    U.var_("Sheet", null, "Variant");
    U.var_("Turn_and_RateDiff", '', "String");
    U.var_("CO_Statement_Form", null, "TCO_Statement_Form");
  });
  U.method("TCO_Statement_Form", "WMNCACTIVATE", async function WMNCACTIVATE(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "s": null};
  await $.inherited(Self, "TCO_Statement_Form", "WMNCACTIVATE", null, arguments);
  await $.stmt((await $.call(C, "WMNCPaint", [$.ref(async () => L0["s"], async ($t1) => { L0["s"] = $t1; })])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCActivate"]});
  U.method("TCO_Statement_Form", "WMNCPaint", async function WMNCPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "dc": null};
  L0["capt"] = "Hesabdan çıxarış";
  await $.inherited(Self, "TCO_Statement_Form", "WMNCPaint", null, arguments);
  await $.set(C, "Caption", "");
  L0["dc"] = (await $.call(C, "GetWindowDC", [(await $.v(C, "Handle"))]));
  await $.stmt((await $.call(C, "SetBkMode", [L0["dc"], (await $.v(C, "Transparent"))])));
  await $.stmt((await $.call(C, "SetTextColor", [L0["dc"], (await $.v(C, "clWhite"))])));
  await $.stmt((await $.call(C, "SelectObject", [L0["dc"], (await $.mv((await $.v(C, "Font")), "Handle"))])));
  await $.stmt((await $.call(C, "TextOut", [L0["dc"], 23, 6, L0["capt"], (await $.call(C, "Length", [L0["capt"]]))])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCPaint"]});
  U.method("TCO_Statement_Form", "UpdateStr", async function UpdateStr(Self, p0) {
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
    { const $t2 = L0["k"];
      L0["i"] = 1;
      let $t3 = true;
      for (;;) {
        if (!$t3) { L0["i"] = $.succ(L0["i"], 1); }
        $t3 = false;
        if (!($.ord(L0["i"]) <= $.ord($t2))) break;
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
    { const $t4 = L0["k"];
      L0["i"] = 1;
      let $t5 = true;
      for (;;) {
        if (!$t5) { L0["i"] = $.succ(L0["i"], 1); }
        $t5 = false;
        if (!($.ord(L0["i"]) <= $.ord($t4))) break;
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
  } catch ($t6) {
    $.rethrowControl($t6);
    $.handled($t6);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCO_Statement_Form", "ShowReport", async function ShowReport(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FormRep", (await $.mcall((await $.v(C, "TFormRep")), "Create", [Self])));
  {
    const $t7 = (await $.v(C, "FormRep"));
    await $.mset((await $.wv([$t7], "QRD_Begin", C, false)), "Caption", (await $.wcall([$t7], "DateToStr", [(await $.wv([$t7], "v_BDate", C, false))], C)));
    await $.mset((await $.wv([$t7], "QRD_End", C, false)), "Caption", (await $.wcall([$t7], "DateToStr", [(await $.wv([$t7], "v_EDate", C, false))], C)));
    { const $t8 = (await $.mv((await $.wv([$t7], "RGroupPrintMode", C, false)), "ItemIndex"));
      if ($.eq($t8, 0)) {
        await $.mset((await $.wv([$t7], "QRBandDetail", C, false)), "ForceNewPage", (await $.wv([$t7], "False", C, false)));
      }
      else if ($.eq($t8, 1)) {
        await $.mset((await $.wv([$t7], "QRBandDetail", C, false)), "ForceNewPage", (await $.wv([$t7], "True", C, false)));
      }
    }
    await $.mcall((await $.wv([$t7], "QRep", C, false)), "Preview", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCO_Statement_Form", "ShowReportR", async function ShowReportR(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FormRepR", (await $.mcall((await $.v(C, "TFormRepR")), "Create", [Self])));
  {
    const $t9 = (await $.v(C, "FormRepR"));
    await $.mset((await $.wv([$t9], "QRD_Begin", C, false)), "Caption", (await $.wcall([$t9], "DateToStr", [(await $.wv([$t9], "v_BDate", C, false))], C)));
    await $.mset((await $.wv([$t9], "QRD_End", C, false)), "Caption", (await $.wcall([$t9], "DateToStr", [(await $.wv([$t9], "v_EDate", C, false))], C)));
    { const $t10 = (await $.mv((await $.wv([$t9], "RGroupPrintMode", C, false)), "ItemIndex"));
      if ($.eq($t10, 0)) {
        await $.mset((await $.wv([$t9], "QRBandDetail", C, false)), "ForceNewPage", (await $.wv([$t9], "False", C, false)));
      }
      else if ($.eq($t10, 1)) {
        await $.mset((await $.wv([$t9], "QRBandDetail", C, false)), "ForceNewPage", (await $.wv([$t9], "True", C, false)));
      }
    }
    await $.mcall((await $.wv([$t9], "QRep", C, false)), "Preview", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("DestroySheet", async function DestroySheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Sheet"))])));
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Exl"))])));
  } catch ($t11) {
    $.rethrowControl($t11);
    $.handled($t11);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ShowSheet", async function ShowSheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.mset((await $.v(C, "Exl")), "Visible", true);
  } catch ($t12) {
    $.rethrowControl($t12);
    $.handled($t12);
    await $.stmt($.call(C, "DestroySheet", []));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCO_Statement_Form", "ToExcelClick", async function ToExcelClick(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "j": 0, "k": 0, "m": 0, "www": 0, "t_val": 0, "v_ldebit": 0, "v_lkredit": 0, "v_debit": 0, "v_kredit": 0, "bash": ''};
  L0["d"] = 6;
  L0["f"] = 3;
  L0["dd"] = 2;
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
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["E1:E60000"])), "NumberFormat", "#,##0.00");
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["E1:E60000"])), "ColumnWidth", 12);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["F1:F60000"])), "NumberFormat", "#,##0.00");
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["F1:F60000"])), "ColumnWidth", 12);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["G1:G60000"])), "ColumnWidth", 100);
    L0["k"] = 0;
    {
      const $t13 = (await $.v(C, "CO_Datamod"));
      await $.wset([$t13], "t_val", (await $.mv((await $.mcall((await $.wv([$t13], "ODSMainState", C, false)), "FieldByName", ["CurrencyId"])), "AsInteger")), { get: async () => L0["t_val"], set: async (v) => { L0["t_val"] = v; }, local: true });
      if ($.truthy($.eq((await $.wv([$t13], "t_val", { get: async () => L0["t_val"], set: async (v) => { L0["t_val"] = v; }, local: true }, false)), 0))) {
        { const $t14 = (await $.mv((await $.wv([$t13], "ODSMainState", C, false)), "RecordCount"));
          await $.wset([$t13], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t15 = true;
          for (;;) {
            if (!$t15) { await $.wset([$t13], "i", $.succ((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t15 = false;
            if (!($.ord((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t14))) break;
            await $.mset((await $.wv([$t13], "PrBarParent", C, false)), "Progress", $.idiv(($.mul(100, (await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)))), (await $.mv((await $.wv([$t13], "ODSMainState", C, false)), "RecordCount"))));
            await $.wset([$t13], "bash", (await $.wcall([$t13], "inttostr", [$.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)))], C)), { get: async () => L0["bash"], set: async (v) => { L0["bash"] = v; }, local: true });
            { const $t16 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3], "Hesab N-si:"); if ($t16 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t16); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            { const $t17 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4], (await $.mv((await $.mcall((await $.wv([$t13], "ODSMainState", C, false)), "FieldByName", ["AccountNumber"])), "AsString"))); if ($t17 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t17); } }
            { const $t18 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 1], "Hesabın adı:"); if ($t18 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t18); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 1])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            await $.mset((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 2])), "Value", (await $.mv((await $.mcall((await $.wv([$t13], "ODSMainState", C, false)), "FieldByName", ["AccountName"])), "AsString")));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 2])), "Font")), "Name", "Tahoma");
            { const $t19 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2), 1], "Valyuta:"); if ($t19 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t19); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2), 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2), 1])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            { const $t20 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2), 2], (await $.mv((await $.mcall((await $.wv([$t13], "ODSMainState", C, false)), "FieldByName", ["CurrencyName"])), "AsString"))); if ($t20 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t20); } }
            { const $t21 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 1], "Əməliy. tarixi::"); if ($t21 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t21); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 1])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            { const $t22 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 2], (await $.mv((await $.wv([$t13], "DTP_Begin", C, false)), "DateTime"))); if ($t22 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t22); } }
            { const $t23 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 3], (await $.mv((await $.wv([$t13], "DTP_End", C, false)), "DateTime"))); if ($t23 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t23); } }
            { const $t24 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4), 1], "Əvv. əm. tarixi:"); if ($t24 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t24); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4), 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4), 1])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            await $.mset((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4), 2])), "Value", (await $.mv((await $.mcall((await $.wv([$t13], "ODSMainState", C, false)), "FieldByName", ["lastopdate"])), "AsDateTime")));
            { const $t25 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 1], "Günün əvv. qalıq:"); if ($t25 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t25); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 1])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            { const $t26 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 2], "Manat :"); if ($t26 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t26); } }
            await $.mset((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 3])), "Value", (await $.wcall([$t13], "FormatFloat", ["#,##0.00", (await $.wcall([$t13], "ABS", [(await $.mv((await $.mcall((await $.wv([$t13], "ODSMainState", C, false)), "FieldByName", ["Ostat"])), "AsFloat"))], C))], C)));
            { const $t27 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 2], "Tarix"); if ($t27 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t27); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 2])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 2])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 2])), "Font")), "Color", (await $.wv([$t13], "clBlue", C, false)));
            await $.mset((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 3])), "Value", "Valyuta");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 3])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 3])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 3])), "Font")), "Color", (await $.wv([$t13], "clBlue", C, false)));
            { const $t28 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 4], "Qarşı hesab"); if ($t28 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t28); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 4])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 4])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 4])), "Font")), "Color", (await $.wv([$t13], "clBlue", C, false)));
            { const $t29 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 5], "Debet"); if ($t29 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t29); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 5])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 5])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 5])), "Font")), "Color", (await $.wv([$t13], "clBlue", C, false)));
            { const $t30 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 6], "Kredit"); if ($t30 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t30); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 6])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 6])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 6])), "Font")), "Color", (await $.wv([$t13], "clBlue", C, false)));
            { const $t31 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 7], "Təyinatı"); if ($t31 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t31); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 7])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 7])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 7])), "Font")), "Color", (await $.wv([$t13], "clBlue", C, false)));
            await $.wset([$t13], "v_LDebit", 0, { get: async () => L0["v_ldebit"], set: async (v) => { L0["v_ldebit"] = v; }, local: true });
            await $.wset([$t13], "v_LKredit", 0, { get: async () => L0["v_lkredit"], set: async (v) => { L0["v_lkredit"] = v; }, local: true });
            { const $t32 = (await $.mv((await $.wv([$t13], "ODSExtractTrans", C, false)), "RecordCount"));
              await $.wset([$t13], "j", 1, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
              let $t33 = true;
              for (;;) {
                if (!$t33) { await $.wset([$t13], "j", $.succ((await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
                $t33 = false;
                if (!($.ord((await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t32))) break;
                await $.mset((await $.wv([$t13], "PrBarChild", C, false)), "Position", $.idiv(($.mul(100, (await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)))), (await $.mv((await $.wv([$t13], "ODSExtractTrans", C, false)), "RecordCount"))));
                await $.wset([$t13], "v_LDebit", $.add((await $.wv([$t13], "v_LDebit", { get: async () => L0["v_ldebit"], set: async (v) => { L0["v_ldebit"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t13], "ODSExtractTrans", C, false)), "FieldByName", ["LDebit"])), "AsFloat"))), { get: async () => L0["v_ldebit"], set: async (v) => { L0["v_ldebit"] = v; }, local: true });
                await $.wset([$t13], "v_LKredit", $.add((await $.wv([$t13], "v_LKredit", { get: async () => L0["v_lkredit"], set: async (v) => { L0["v_lkredit"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t13], "ODSExtractTrans", C, false)), "FieldByName", ["LKredit"])), "AsFloat"))), { get: async () => L0["v_lkredit"], set: async (v) => { L0["v_lkredit"] = v; }, local: true });
                { const $t34 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), 2], (await $.mv((await $.mcall((await $.wv([$t13], "ODSExtractTrans", C, false)), "FieldByName", ["Dat"])), "AsDateTime"))); if ($t34 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t34); } }
                { const $t35 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), 3], (await $.mv((await $.mcall((await $.wv([$t13], "ODSExtractTrans", C, false)), "FieldByName", ["PairCurrencyid"])), "AsString"))); if ($t35 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t35); } }
                { const $t36 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), 4], (await $.mv((await $.mcall((await $.wv([$t13], "ODSExtractTrans", C, false)), "FieldByName", ["PairAccountName"])), "AsString"))); if ($t36 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t36); } }
                { const $t37 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), 5], (await $.wcall([$t13], "FormatFloat", ["#,##0.00", (await $.mv((await $.mcall((await $.wv([$t13], "ODSExtractTrans", C, false)), "FieldByName", ["LDebit"])), "AsFloat"))], C))); if ($t37 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t37); } }
                { const $t38 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), 6], (await $.wcall([$t13], "FormatFloat", ["#,##0.00", (await $.mv((await $.mcall((await $.wv([$t13], "ODSExtractTrans", C, false)), "FieldByName", ["LKredit"])), "AsFloat"))], C))); if ($t38 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t38); } }
                { const $t39 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), 7], (await $.mv((await $.mcall((await $.wv([$t13], "ODSExtractTrans", C, false)), "FieldByName", ["Name"])), "AsString"))); if ($t39 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t39); } }
                await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), 7])), "Font")), "Name", "Arial AzLat");
                await $.mcall((await $.wv([$t13], "ODSExtractTrans", C, false)), "Next", []);
                await $.tick();
              }
            }
            await $.mset((await $.wv([$t13], "PrBarChild", C, false)), "Position", 0);
            await $.wset([$t13], "m", (await $.mv((await $.wv([$t13], "ODSExtractTrans", C, false)), "RecordCount")), { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true });
            { const $t40 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), 1), 5], (await $.wcall([$t13], "FormatFloat", ["#,##0.00", (await $.wv([$t13], "v_LDebit", { get: async () => L0["v_ldebit"], set: async (v) => { L0["v_ldebit"] = v; }, local: true }, false))], C))); if ($t40 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t40); } }
            { const $t41 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), 1), 6], (await $.wcall([$t13], "FormatFloat", ["#,##0.00", (await $.wv([$t13], "v_LKredit", { get: async () => L0["v_lkredit"], set: async (v) => { L0["v_lkredit"] = v; }, local: true }, false))], C))); if ($t41 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t41); } }
            { const $t42 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), 2), 1], "Günün son. qal.:"); if ($t42 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t42); } }
            { const $t43 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), 2), 2], "Manat:"); if ($t43 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t43); } }
            { const $t44 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), 2), 3], (await $.wcall([$t13], "FormatFloat", ["#,##0.00", (await $.wcall([$t13], "ABS", [(await $.mv((await $.mcall((await $.wv([$t13], "ODSMainState", C, false)), "FieldByName", ["EndOstat"])), "AsFloat"))], C))], C))); if ($t44 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t44); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), 2), 1])), "Font")), "Name", "Arial AzLat");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), 2), 1])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            { const $t45 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), 3), 1], ""); if ($t45 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t45); } }
            await $.mcall((await $.idx((await $.mv((await $.wv([$t13], "Exl", C, false)), "Range")), [$.add($.add($.add("A", (await $.wv([$t13], "bash", { get: async () => L0["bash"], set: async (v) => { L0["bash"] = v; }, local: true }, false))), ":G"), (await $.wcall([$t13], "inttostr", [$.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), 2)], C)))])), "select", []);
            await $.mset((await $.mv((await $.mv((await $.wv([$t13], "Exl", C, false)), "Selection")), "Interior")), "ColorIndex", 6);
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Range")), [$.add($.add($.add("A", (await $.wv([$t13], "bash", { get: async () => L0["bash"], set: async (v) => { L0["bash"] = v; }, local: true }, false))), ":G"), (await $.wcall([$t13], "inttostr", [$.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), 2)], C)))])), "Borders")), "Color", (await $.wv([$t13], "clRed", C, false)));
            await $.mcall((await $.idx((await $.mv((await $.wv([$t13], "Exl", C, false)), "Range")), [$.add($.add($.add("A", (await $.wcall([$t13], "inttostr", [$.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), 3)], C))), ":G"), (await $.wcall([$t13], "inttostr", [$.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), 3)], C)))])), "select", []);
            await $.mset((await $.mv((await $.mv((await $.wv([$t13], "Exl", C, false)), "Selection")), "Interior")), "ColorIndex", 8);
            await $.wset([$t13], "k", $.add($.add($.add((await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "f", { get: async () => L0["f"], set: async (v) => { L0["f"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true });
            await $.mcall((await $.wv([$t13], "ODSMainState", C, false)), "Next", []);
            await $.tick();
          }
        }
      } else {
        { const $t46 = (await $.mv((await $.wv([$t13], "ODSMainState", C, false)), "RecordCount"));
          await $.wset([$t13], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t47 = true;
          for (;;) {
            if (!$t47) { await $.wset([$t13], "i", $.succ((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t47 = false;
            if (!($.ord((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t46))) break;
            await $.mset((await $.wv([$t13], "PrBarParent", C, false)), "Progress", $.idiv(($.mul(100, (await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)))), (await $.mv((await $.wv([$t13], "ODSMainState", C, false)), "RecordCount"))));
            await $.wset([$t13], "bash", (await $.wcall([$t13], "inttostr", [$.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)))], C)), { get: async () => L0["bash"], set: async (v) => { L0["bash"] = v; }, local: true });
            { const $t48 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3], "Hesab N-si:"); if ($t48 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t48); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            { const $t49 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4], (await $.mv((await $.mcall((await $.wv([$t13], "ODSMainState", C, false)), "FieldByName", ["AccountNumber"])), "AsString"))); if ($t49 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t49); } }
            { const $t50 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 1], "Hesabın adı:"); if ($t50 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t50); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 1])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            await $.mset((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 2])), "Value", (await $.mv((await $.mcall((await $.wv([$t13], "ODSMainState", C, false)), "FieldByName", ["AccountName"])), "AsString")));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 2])), "Font")), "Name", "Tahoma");
            { const $t51 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2), 1], "Valyuta"); if ($t51 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t51); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2), 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2), 1])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            { const $t52 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2), 2], (await $.mv((await $.mcall((await $.wv([$t13], "ODSMainState", C, false)), "FieldByName", ["CurrencyName"])), "AsString"))); if ($t52 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t52); } }
            { const $t53 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 1], "Əməliy. tarixi:"); if ($t53 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t53); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 1])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            { const $t54 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 2], (await $.mv((await $.wv([$t13], "DTP_Begin", C, false)), "DateTime"))); if ($t54 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t54); } }
            { const $t55 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 3], (await $.mv((await $.wv([$t13], "DTP_End", C, false)), "DateTime"))); if ($t55 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t55); } }
            { const $t56 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4), 1], "Əvv. əm. tarixi:"); if ($t56 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t56); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4), 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4), 1])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            await $.mset((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4), 2])), "Value", (await $.mv((await $.mcall((await $.wv([$t13], "ODSMainState", C, false)), "FieldByName", ["lastopdate"])), "AsDateTime")));
            { const $t57 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 1], "Günün əvv. qalıq:"); if ($t57 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t57); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 1])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            { const $t58 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 2], "Valyuta:"); if ($t58 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t58); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 2])), "Font")), "Name", "Tahoma");
            await $.mset((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 3])), "Value", (await $.wcall([$t13], "FormatFloat", ["#,##0.00", (await $.wcall([$t13], "ABS", [(await $.mv((await $.mcall((await $.wv([$t13], "ODSMainState", C, false)), "FieldByName", ["Ostat"])), "AsFloat"))], C))], C)));
            { const $t59 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 2], "Manat :"); if ($t59 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t59); } }
            { const $t60 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 3], (await $.wcall([$t13], "FormatFloat", ["#,##0.00", (await $.wcall([$t13], "ABS", [(await $.mv((await $.mcall((await $.wv([$t13], "ODSMainState", C, false)), "FieldByName", ["PokOstat"])), "AsCurrency"))], C))], C))); if ($t60 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t60); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 2])), "Font")), "Name", "Tahoma");
            { const $t61 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 7), 2], "Rəsmi məzənnə:"); if ($t61 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t61); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 7), 2])), "Font")), "Name", "Tahoma");
            { const $t62 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 7), 3], (await $.wcall([$t13], "FormatFloat", ["#,##0.0000", (await $.wcall([$t13], "ABS", [(await $.mv((await $.mcall((await $.wv([$t13], "RatesDataSetBegin", C, false)), "FieldByName", ["Ostat"])), "AsCurrency"))], C))], C))); if ($t62 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t62); } }
            { const $t63 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 2], "Tarix"); if ($t63 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t63); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 2])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 2])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 2])), "Font")), "Color", (await $.wv([$t13], "clBlue", C, false)));
            await $.mset((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 3])), "Value", "Valyuta");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 3])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 3])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 3])), "Font")), "Color", (await $.wv([$t13], "clBlue", C, false)));
            { const $t64 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 4], "Qarşı hesab"); if ($t64 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t64); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 4])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 4])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 4])), "Font")), "Color", (await $.wv([$t13], "clBlue", C, false)));
            { const $t65 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 5], "Debet"); if ($t65 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t65); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 5])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 5])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 5])), "Font")), "Color", (await $.wv([$t13], "clBlue", C, false)));
            { const $t66 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 6], "Kredit"); if ($t66 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t66); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 6])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 6])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 6])), "Font")), "Color", (await $.wv([$t13], "clBlue", C, false)));
            { const $t67 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 7], "Təyinatı"); if ($t67 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t67); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 7])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 7])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 7])), "Font")), "Color", (await $.wv([$t13], "clBlue", C, false)));
            await $.wset([$t13], "www", 0, { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true });
            await $.wset([$t13], "v_LDebit", 0, { get: async () => L0["v_ldebit"], set: async (v) => { L0["v_ldebit"] = v; }, local: true });
            await $.wset([$t13], "v_Debit", 0, { get: async () => L0["v_debit"], set: async (v) => { L0["v_debit"] = v; }, local: true });
            await $.wset([$t13], "v_LKredit", 0, { get: async () => L0["v_lkredit"], set: async (v) => { L0["v_lkredit"] = v; }, local: true });
            await $.wset([$t13], "v_Kredit", 0, { get: async () => L0["v_kredit"], set: async (v) => { L0["v_kredit"] = v; }, local: true });
            { const $t68 = (await $.mv((await $.wv([$t13], "ODSExtractTrans", C, false)), "RecordCount"));
              await $.wset([$t13], "j", 1, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
              let $t69 = true;
              for (;;) {
                if (!$t69) { await $.wset([$t13], "j", $.succ((await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
                $t69 = false;
                if (!($.ord((await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t68))) break;
                await $.mset((await $.wv([$t13], "PrBarChild", C, false)), "Position", $.idiv(($.mul(100, (await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)))), (await $.mv((await $.wv([$t13], "ODSExtractTrans", C, false)), "RecordCount"))));
                await $.wset([$t13], "v_Debit", $.add((await $.wv([$t13], "v_Debit", { get: async () => L0["v_debit"], set: async (v) => { L0["v_debit"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t13], "ODSExtractTrans", C, false)), "FieldByName", ["Debit"])), "AsFloat"))), { get: async () => L0["v_debit"], set: async (v) => { L0["v_debit"] = v; }, local: true });
                await $.wset([$t13], "v_Kredit", $.add((await $.wv([$t13], "v_Kredit", { get: async () => L0["v_kredit"], set: async (v) => { L0["v_kredit"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t13], "ODSExtractTrans", C, false)), "FieldByName", ["Kredit"])), "AsFloat"))), { get: async () => L0["v_kredit"], set: async (v) => { L0["v_kredit"] = v; }, local: true });
                await $.wset([$t13], "v_LDebit", $.add((await $.wv([$t13], "v_LDebit", { get: async () => L0["v_ldebit"], set: async (v) => { L0["v_ldebit"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t13], "ODSExtractTrans", C, false)), "FieldByName", ["LDebit"])), "AsFloat"))), { get: async () => L0["v_ldebit"], set: async (v) => { L0["v_ldebit"] = v; }, local: true });
                await $.wset([$t13], "v_LKredit", $.add((await $.wv([$t13], "v_LKredit", { get: async () => L0["v_lkredit"], set: async (v) => { L0["v_lkredit"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t13], "ODSExtractTrans", C, false)), "FieldByName", ["LKredit"])), "AsFloat"))), { get: async () => L0["v_lkredit"], set: async (v) => { L0["v_lkredit"] = v; }, local: true });
                { const $t70 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 2], (await $.mv((await $.mcall((await $.wv([$t13], "ODSExtractTrans", C, false)), "FieldByName", ["Dat"])), "AsDateTime"))); if ($t70 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t70); } }
                { const $t71 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 3], (await $.mv((await $.mcall((await $.wv([$t13], "ODSExtractTrans", C, false)), "FieldByName", ["PairCurrencyid"])), "AsString"))); if ($t71 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t71); } }
                { const $t72 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 4], (await $.mv((await $.mcall((await $.wv([$t13], "ODSExtractTrans", C, false)), "FieldByName", ["PairAccountName"])), "AsString"))); if ($t72 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t72); } }
                { const $t73 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 5], (await $.wcall([$t13], "FormatFloat", ["#,##0.00", (await $.mv((await $.mcall((await $.wv([$t13], "ODSExtractTrans", C, false)), "FieldByName", ["LDebit"])), "AsFloat"))], C))); if ($t73 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t73); } }
                { const $t74 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 6], (await $.wcall([$t13], "FormatFloat", ["#,##0.00", (await $.mv((await $.mcall((await $.wv([$t13], "ODSExtractTrans", C, false)), "FieldByName", ["LKredit"])), "AsFloat"))], C))); if ($t74 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t74); } }
                { const $t75 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 7], (await $.mv((await $.mcall((await $.wv([$t13], "ODSExtractTrans", C, false)), "FieldByName", ["Name"])), "AsString"))); if ($t75 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t75); } }
                await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 7])), "Font")), "Name", "Tahoma");
                { const $t76 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 5], (await $.wcall([$t13], "FormatFloat", ["#,##0.00", (await $.mv((await $.mcall((await $.wv([$t13], "ODSExtractTrans", C, false)), "FieldByName", ["Debit"])), "AsFloat"))], C))); if ($t76 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t76); } }
                await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 5])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
                await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 5])), "Font")), "Color", (await $.wv([$t13], "clMaroon", C, false)));
                { const $t77 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 6], (await $.wcall([$t13], "FormatFloat", ["#,##0.00", (await $.mv((await $.mcall((await $.wv([$t13], "ODSExtractTrans", C, false)), "FieldByName", ["Kredit"])), "AsFloat"))], C))); if ($t77 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t77); } }
                await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 6])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
                await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 6])), "Font")), "Color", (await $.wv([$t13], "clMaroon", C, false)));
                await $.mcall((await $.wv([$t13], "ODSExtractTrans", C, false)), "Next", []);
                if ($.truthy($.ne((await $.mv((await $.mcall((await $.wv([$t13], "ODSExtractTrans", C, false)), "FieldByName", ["PairCurrencyid"])), "AsInteger")), 0))) {
                  await $.wset([$t13], "www", $.add((await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false)), 1), { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true });
                  if ($.truthy((await $.and_(($.eq((await $.wv([$t13], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t13], "ODSExtractTrans", C, false)), "RecordCount")))), async () => ($.ne((await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false)), 0)))))) {
                    await $.wset([$t13], "www", $.add((await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false)), 1), { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true });
                  }
                }
                await $.tick();
              }
            }
            await $.mset((await $.wv([$t13], "PrBarChild", C, false)), "Position", 0);
            await $.wset([$t13], "m", (await $.mv((await $.wv([$t13], "ODSExtractTrans", C, false)), "RecordCount")), { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true });
            { const $t78 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 5], (await $.wcall([$t13], "FormatFloat", ["#,##0.00", (await $.wv([$t13], "v_LDebit", { get: async () => L0["v_ldebit"], set: async (v) => { L0["v_ldebit"] = v; }, local: true }, false))], C))); if ($t78 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t78); } }
            { const $t79 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 6], (await $.wcall([$t13], "FormatFloat", ["#,##0.00", (await $.wv([$t13], "v_LKredit", { get: async () => L0["v_lkredit"], set: async (v) => { L0["v_lkredit"] = v; }, local: true }, false))], C))); if ($t79 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t79); } }
            { const $t80 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 5], (await $.wcall([$t13], "FormatFloat", ["#,##0.00", (await $.wv([$t13], "v_Debit", { get: async () => L0["v_debit"], set: async (v) => { L0["v_debit"] = v; }, local: true }, false))], C))); if ($t80 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t80); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 5])), "Font")), "Color", (await $.wv([$t13], "clMaroon", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 5])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            { const $t81 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 6], (await $.wcall([$t13], "FormatFloat", ["#,##0.00", (await $.wv([$t13], "v_Kredit", { get: async () => L0["v_kredit"], set: async (v) => { L0["v_kredit"] = v; }, local: true }, false))], C))); if ($t81 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t81); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 6])), "Font")), "Color", (await $.wv([$t13], "clMaroon", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 6])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            { const $t82 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 2), 1], "Günün son. qalıq"); if ($t82 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t82); } }
            { const $t83 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 2), 2], "Valyuta"); if ($t83 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t83); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 2), 2])), "Font")), "Name", "Tahoma");
            { const $t84 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 2), 3], (await $.wcall([$t13], "FormatFloat", ["#,##0.00", (await $.wcall([$t13], "ABS", [(await $.mv((await $.mcall((await $.wv([$t13], "ODSMainState", C, false)), "FieldByName", ["EndOstat"])), "AsFloat"))], C))], C))); if ($t84 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t84); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 2), 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 2), 1])), "Font")), "Bold", (await $.wv([$t13], "True", C, false)));
            { const $t85 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 3), 2], "Manat :"); if ($t85 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t85); } }
            { const $t86 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 3), 3], (await $.wcall([$t13], "FormatFloat", ["#,##0.00", (await $.wcall([$t13], "ABS", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t13], "CO_Datamod", C, false)), "ODSMainState")), "FieldByName", ["EndPokOstat"])), "AsCurrency"))], C))], C))); if ($t86 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t86); } }
            { const $t87 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 4), 2], "Rəsmi məzənnə:"); if ($t87 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t87); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 4), 2])), "Font")), "Name", "Tahoma");
            { const $t88 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 4), 3], (await $.wcall([$t13], "FormatFloat", ["#,##0.0000", (await $.wcall([$t13], "ABS", [(await $.mv((await $.mcall((await $.wv([$t13], "RatesDataSet", C, false)), "FieldByName", ["Ostat"])), "AsCurrency"))], C))], C))); if ($t88 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t88); } }
            { const $t89 = await $.iset((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 5), 1], ""); if ($t89 !== undefined) { await $.mset((await $.wv([$t13], "Sheet", C, false)), "Cells", $t89); } }
            await $.mcall((await $.idx((await $.mv((await $.wv([$t13], "Exl", C, false)), "Range")), [$.add($.add($.add("A", (await $.wv([$t13], "bash", { get: async () => L0["bash"], set: async (v) => { L0["bash"] = v; }, local: true }, false))), ":G"), (await $.wcall([$t13], "inttostr", [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 4)], C)))])), "select", []);
            await $.mset((await $.mv((await $.mv((await $.wv([$t13], "Exl", C, false)), "Selection")), "Interior")), "ColorIndex", 6);
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t13], "Sheet", C, false)), "Range")), [$.add($.add($.add("A", (await $.wv([$t13], "bash", { get: async () => L0["bash"], set: async (v) => { L0["bash"] = v; }, local: true }, false))), ":G"), (await $.wcall([$t13], "inttostr", [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 4)], C)))])), "Borders")), "Color", (await $.wv([$t13], "clRed", C, false)));
            await $.mcall((await $.idx((await $.mv((await $.wv([$t13], "Exl", C, false)), "Range")), [$.add($.add($.add("A", (await $.wcall([$t13], "inttostr", [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 5)], C))), ":G"), (await $.wcall([$t13], "inttostr", [$.add($.add($.add($.add($.add($.add((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 5)], C)))])), "select", []);
            await $.mset((await $.mv((await $.mv((await $.wv([$t13], "Exl", C, false)), "Selection")), "Interior")), "ColorIndex", 8);
            await $.wset([$t13], "k", $.add($.add($.add($.add($.add((await $.wv([$t13], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), (await $.wv([$t13], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), $.mul(2, (await $.wv([$t13], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false)))), (await $.wv([$t13], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), (await $.wv([$t13], "f", { get: async () => L0["f"], set: async (v) => { L0["f"] = v; }, local: true }, false))), (await $.wv([$t13], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true });
            await $.mcall((await $.wv([$t13], "ODSMainState", C, false)), "Next", []);
            await $.tick();
          }
        }
      }
    }
    await $.stmt($.call(C, "ShowSheet", []));
  } finally {
    await $.mcall((await $.idx((await $.mv((await $.v(C, "Exl")), "Range")), ["A1:A1"])), "select", []);
    await $.mset((await $.v(C, "PanelProgress")), "Visible", false);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    await $.stmt($.call(C, "DestroySheet", []));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCO_Statement_Form", "PostClick", async function PostClick(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "ExportDataTable", []));
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FormRep"))]))))) {
    await $.set(C, "FormRep", (await $.mcall((await $.v(C, "TFormRep")), "Create", [null])));
  }
  {
    const $t90 = (await $.v(C, "SaveDialog"));
    if ($.truthy((await $.wv([$t90], "Execute", C, false)))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t90], "FormRep", C, false)), "QRep")), "ExportToFilter", [(await $.mcall((await $.wv([$t90], "TQRAsciiExportFilter", C, false)), "Create", [(await $.wv([$t90], "FileName", C, false))]))])));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCO_Statement_Form", "PreviewClick", async function PreviewClick(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "ExportDataTable", []));
  { const $t91 = (await $.mv((await $.v(C, "RGroupSetting")), "ItemIndex"));
    if ($.eq($t91, 0)) {
      await $.stmt($.call(C, "ShowReportR", []));
    }
    else if ($.eq($t91, 1)) {
      await $.stmt($.call(C, "ShowReport", []));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCO_Statement_Form", "ShowTransClick", async function ShowTransClick(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "ExportDataTable", []));
  await $.set(C, "FormTransView", (await $.mcall((await $.v(C, "TFormTransView")), "Create", [Self])));
  await $.mcall((await $.v(C, "FormTransView")), "ShowModal", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCO_Statement_Form", "ShowCardState", async function ShowCardState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCO_Statement_Form", "ExportDataTable", async function ExportDataTable(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "v_acc_no": '', "v_bal_cn": '', "v_cli_id": '', "filtertrans": '', "filterext": '', "astrparam": '', "bstrparam": '', "cstrparam": '', "i": 0, "vidop": 0, "s": ''};
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
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
  await $.set(C, "v_BDate", (await $.call(C, "integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP_Begin")), "DateTime"))]))])));
  await $.set(C, "v_EDate", (await $.call(C, "integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP_End")), "DateTime"))]))])));
  await $.set(C, "v_user", (await $.mv((await $.v(C, "dblcbUser")), "KeyValue")));
  await $.set(C, "v_val", (await $.mv((await $.v(C, "DBLCBavalute")), "KeyValue")));
  await $.set(C, "v_filial", (await $.mv((await $.v(C, "DBLCBfilial")), "KeyValue")));
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
  L0["cstrparam"] = (await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "SB_STATEMENT")), "CallStringFunction", ["notAccId", [(await $.v(C, "v_BDate")), (await $.v(C, "v_EDate")), L0["v_cli_id"], L0["v_acc_no"], L0["v_bal_cn"], (await $.v(C, "v_filial")), (await $.v(C, "v_val")), (await $.v(C, "v_user")), (await $.v(C, "Turn_and_RateDiff"))]]));
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBTurnOver")), "Checked")), true))) {
    {
      const $t92 = (await $.mv((await $.v(C, "CO_Datamod")), "ODSNotAccId"));
      await $.stmt($.wcall([$t92], "close", [], C));
      await $.mcall((await $.wv([$t92], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t92], "SQL", C, false)), "add", [(await $.wv([$t92], "CStrParam", { get: async () => L0["cstrparam"], set: async (v) => { L0["cstrparam"] = v; }, local: true }, false))])));
      await $.stmt($.wcall([$t92], "Open", [], C));
      { const $t93 = (await $.wv([$t92], "RecordCount", C, false));
        await $.wset([$t92], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t94 = true;
        for (;;) {
          if (!$t94) { await $.wset([$t92], "i", $.succ((await $.wv([$t92], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t94 = false;
          if (!($.ord((await $.wv([$t92], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t93))) break;
          await $.wset([$t92], "S", $.add($.add($.add((await $.wv([$t92], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), "(accountid<>"), (await $.wcall([$t92], "inttostr", [(await $.mv((await $.wcall([$t92], "FieldByName", ["accountid"], C)), "AsInteger"))], C))), ") and "), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
          await $.stmt($.wcall([$t92], "Next", [], C));
          await $.tick();
        }
      }
      await $.wset([$t92], "S", (await $.wcall([$t92], "Copy", [(await $.wv([$t92], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), 1, $.sub((await $.wcall([$t92], "Length", [(await $.wv([$t92], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)), 4)], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
    }
    L0["filterext"] = L0["s"];
  } else {
    L0["filterext"] = "";
  }
  {
    const $t95 = (await $.mv((await $.v(C, "CO_Datamod")), "ODS_GetExtraction"));
    await $.stmt($.wcall([$t95], "close", [], C));
    await $.stmt((await $.wcall([$t95], "SetVariable", ["bDate", (await $.wv([$t95], "v_BDate", C, false))], C)));
    await $.stmt((await $.wcall([$t95], "SetVariable", ["eDate", (await $.wv([$t95], "v_EDate", C, false))], C)));
    await $.stmt((await $.wcall([$t95], "SetVariable", ["ClientID", (await $.wv([$t95], "v_Cli_id", { get: async () => L0["v_cli_id"], set: async (v) => { L0["v_cli_id"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t95], "SetVariable", ["AccountNo", (await $.wv([$t95], "v_Acc_no", { get: async () => L0["v_acc_no"], set: async (v) => { L0["v_acc_no"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t95], "SetVariable", ["BalanceNo", (await $.wv([$t95], "v_Bal_cn", { get: async () => L0["v_bal_cn"], set: async (v) => { L0["v_bal_cn"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t95], "SetVariable", ["BranchID", (await $.wv([$t95], "v_filial", C, false))], C)));
    await $.stmt((await $.wcall([$t95], "SetVariable", ["CurrencyID", (await $.wv([$t95], "v_val", C, false))], C)));
    await $.stmt((await $.wcall([$t95], "SetVariable", ["UserID", (await $.wv([$t95], "v_user", C, false))], C)));
    await $.stmt($.wcall([$t95], "Open", [], C));
    await $.wset([$t95], "AStrParam", (await $.mv((await $.wcall([$t95], "FieldByName", ["str"], C)), "AsString")), { get: async () => L0["astrparam"], set: async (v) => { L0["astrparam"] = v; }, local: true });
  }
  {
    const $t96 = (await $.mv((await $.v(C, "CO_Datamod")), "ODS_ExtractionTrans"));
    await $.stmt($.wcall([$t96], "close", [], C));
    await $.stmt((await $.wcall([$t96], "SetVariable", ["bDate", (await $.wv([$t96], "v_BDate", C, false))], C)));
    await $.stmt((await $.wcall([$t96], "SetVariable", ["eDate", (await $.wv([$t96], "v_EDate", C, false))], C)));
    await $.stmt((await $.wcall([$t96], "SetVariable", ["ClientID", (await $.wv([$t96], "v_Cli_id", { get: async () => L0["v_cli_id"], set: async (v) => { L0["v_cli_id"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t96], "SetVariable", ["AccountNo", (await $.wv([$t96], "v_Acc_no", { get: async () => L0["v_acc_no"], set: async (v) => { L0["v_acc_no"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t96], "SetVariable", ["BalanceNo", (await $.wv([$t96], "v_Bal_cn", { get: async () => L0["v_bal_cn"], set: async (v) => { L0["v_bal_cn"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t96], "SetVariable", ["BranchID", (await $.wv([$t96], "v_filial", C, false))], C)));
    await $.stmt((await $.wcall([$t96], "SetVariable", ["CurrencyID", (await $.wv([$t96], "v_val", C, false))], C)));
    await $.stmt((await $.wcall([$t96], "SetVariable", ["UserID", (await $.wv([$t96], "v_user", C, false))], C)));
    await $.stmt((await $.wcall([$t96], "SetVariable", ["Vidop", (await $.wv([$t96], "vidop", { get: async () => L0["vidop"], set: async (v) => { L0["vidop"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t96], "Open", [], C));
    await $.wset([$t96], "BStrParam", (await $.mv((await $.wcall([$t96], "FieldByName", ["str"], C)), "AsString")), { get: async () => L0["bstrparam"], set: async (v) => { L0["bstrparam"] = v; }, local: true });
  }
  {
    const $t97 = (await $.v(C, "CO_Datamod"));
    {
      const $t98 = (await $.wv([$t97], "ODSMainState", C, false));
      await $.stmt($.wcall([$t97, $t98], "close", [], C));
      await $.mcall((await $.wv([$t97, $t98], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t97, $t98], "SQL", C, false)), "add", [(await $.wv([$t97, $t98], "AStrParam", { get: async () => L0["astrparam"], set: async (v) => { L0["astrparam"] = v; }, local: true }, false))])));
      await $.wset([$t97, $t98], "Filtered", (await $.wv([$t97, $t98], "False", C, false)), C);
      await $.wset([$t97, $t98], "Filter", (await $.wv([$t97, $t98], "FilterExt", { get: async () => L0["filterext"], set: async (v) => { L0["filterext"] = v; }, local: true }, false)), C);
      await $.wset([$t97, $t98], "Filtered", (await $.wv([$t97, $t98], "True", C, false)), C);
      await $.stmt($.wcall([$t97, $t98], "Open", [], C));
    }
    {
      const $t99 = (await $.wv([$t97], "ODSExtractTrans", C, false));
      await $.stmt($.wcall([$t97, $t99], "close", [], C));
      await $.mcall((await $.wv([$t97, $t99], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.wcall([$t97, $t99], "DeclareVariable", ["OwnAccountId", (await $.wv([$t97, $t99], "otInteger", C, false))], C)));
      await $.stmt((await $.mcall((await $.wv([$t97, $t99], "SQL", C, false)), "add", [(await $.wv([$t97, $t99], "BStrParam", { get: async () => L0["bstrparam"], set: async (v) => { L0["bstrparam"] = v; }, local: true }, false))])));
      await $.stmt((await $.wcall([$t97, $t99], "SetVariable", ["OwnAccountId", (await $.mv((await $.mcall((await $.wv([$t97, $t99], "ODSMainState", C, false)), "FieldByName", ["accountid"])), "AsInteger"))], C)));
      await $.wset([$t97, $t99], "Filtered", (await $.wv([$t97, $t99], "False", C, false)), C);
      await $.wset([$t97, $t99], "Filter", (await $.wv([$t97, $t99], "FilterTrans", { get: async () => L0["filtertrans"], set: async (v) => { L0["filtertrans"] = v; }, local: true }, false)), C);
      await $.wset([$t97, $t99], "Filtered", (await $.wv([$t97, $t99], "True", C, false)), C);
      await $.stmt($.wcall([$t97, $t99], "Open", [], C));
    }
    await $.mset((await $.wv([$t97], "Screen", C, false)), "Cursor", (await $.wv([$t97], "crDefault", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCO_Statement_Form", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CO_St_Form")), "close", []);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "CO_St_Form")), "Chck1")), "Checked")))) {
    await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "sysdat")), "Open", []);
    await $.mset((await $.v(C, "DTP_Begin")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "sysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.v(C, "DTP_End")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "sysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.mv((await $.v(C, "CO_Statement_Form")), "Edit_Acc_No")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "FieldByName", ["accno"])), "AsString")));
  }
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "CO_St_Form")), "Chck2")), "Checked")))) {
    await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "customers")), "Open", []);
    await $.mset((await $.v(C, "DTP_Begin")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "sysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.v(C, "DTP_End")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "sysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.mv((await $.v(C, "CO_Statement_Form")), "EditCli_Id")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "customers")), "FieldByName", ["id"])), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Statement_Form", "BtnOkClick", async function BtnOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t100 = (await $.mv((await $.v(C, "CBoxExtractCheck")), "ItemIndex"));
    if ($.eq($t100, 0)) {
      await $.stmt($.call(C, "PreviewClick", []));
    }
    else if ($.eq($t100, 1)) {
      await $.stmt($.call(C, "PostClick", []));
    }
    else if ($.eq($t100, 2)) {
      await $.stmt($.call(C, "ToExcelClick", []));
    }
    else if ($.eq($t100, 3)) {
      await $.stmt($.call(C, "ShowTransClick", []));
    }
    else if ($.eq($t100, 4)) {
      await $.stmt($.call(C, "ShowCardState", []));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Statement_Form", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CO_Statement_Form", Self);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "CO_Datamod"))]))))) {
    await $.set(C, "CO_Datamod", (await $.mcall((await $.v(C, "TCO_Datamod")), "Create", [Self])));
  }
  await $.mset((await $.v(C, "CBoxExtractCheck")), "ItemIndex", 0);
  await $.mset((await $.v(C, "DTP_Begin")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "sysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  await $.mset((await $.v(C, "DTP_End")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "sysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  await $.mset((await $.v(C, "dblcbUser")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLCBfilial")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLCBavalute")), "KeyValue", (-(1)));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Statement_Form", "CBCurrencyClick", async function CBCurrencyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBCurrency")), "Checked")), true))) {
    await $.mset((await $.v(C, "DBLCBavalute")), "KeyValue", 0);
  } else {
    await $.mset((await $.v(C, "DBLCBavalute")), "KeyValue", (-(1)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Statement_Form", "CBFilialClick", async function CBFilialClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBFilial")), "Checked")), true))) {
    await $.mset((await $.v(C, "DBLCBfilial")), "KeyValue", 0);
  } else {
    await $.mset((await $.v(C, "DBLCBfilial")), "KeyValue", (-(1)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Statement_Form", "CBUserClick", async function CBUserClick(Self, p0) {
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
  U.method("TCO_Statement_Form", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  return U;
}
