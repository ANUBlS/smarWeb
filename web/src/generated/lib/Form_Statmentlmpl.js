// Generated from Form_Statmentlmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Form_Statmentlmpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "Gauges", "ExtCtrls", "DBCtrls", "Buttons", "Oracle", "QuickRpt", "QRExport", "XFSCtrls", "Grids", "XDBGrids", "Mask", "Menus", "DB", "OracleData", "ComObj", "UnitDataBussProc", "SBTranslateProc", "sboapiDataModuleImpl", "Unit_Report", "Unit_ReportR", "Unit_TransView", "OpenAccountImpl"]);
  const C = [U];
  U.defClass("TForm_Statement", "TForm", {"xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xfgroupbox4": {"name": "XFGroupBox4", "type": "TXFGroupBox"}, "panelprogress": {"name": "PanelProgress", "type": "TXFPanel"}, "dtp_end": {"name": "DTP_End", "type": "TDateTimePicker"}, "dtp_begin": {"name": "DTP_Begin", "type": "TDateTimePicker"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "cbratediff": {"name": "CBRateDiff", "type": "TXFCheckBox"}, "cbturnover": {"name": "CBTurnOver", "type": "TXFCheckBox"}, "editcli_id": {"name": "EditCli_Id", "type": "TEdit"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "dblcbavalute": {"name": "DBLCBavalute", "type": "TDBLookupComboBox"}, "dblcbfilial": {"name": "DBLCBfilial", "type": "TDBLookupComboBox"}, "dblcbuser": {"name": "dblcbUser", "type": "TDBLookupComboBox"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "rgroupprintmode": {"name": "RGroupPrintMode", "type": "TXFRadioGroup"}, "rgroupsetting": {"name": "RGroupSetting", "type": "TXFRadioGroup"}, "rgroupvalview": {"name": "RGroupValView", "type": "TXFRadioGroup"}, "cboxextractcheck": {"name": "CBoxExtractCheck", "type": "TComboBox"}, "btnok": {"name": "BtnOk", "type": "TBitBtn"}, "prbarchild": {"name": "PrBarChild", "type": "TXFProgressBar"}, "prbarparent": {"name": "PrBarParent", "type": "TGauge"}, "savedialog": {"name": "SaveDialog", "type": "TSaveDialog"}, "edit_acc_no": {"name": "Edit_Acc_No", "type": "TEdit"}, "edit_bal_cn": {"name": "Edit_Bal_Cn", "type": "TEdit"}, "cbfilial": {"name": "CBFilial", "type": "TXFCheckBox"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "cbcurrency": {"name": "CBCurrency", "type": "TXFCheckBox"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "hesabacmaq1": {"name": "Hesabacmaq1", "type": "TMenuItem"}, "odsmainstatesb_inf": {"name": "ODSMainStateSB_inf", "type": "TOracleDataSet"}}, {});
  U.init(async () => {
    U.var_("Form_Statement", null, "TForm_Statement");
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
  });
  U.method("TForm_Statement", "LoadPlugin2", async function LoadPlugin2(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pluginname": $.copyArg(p0), "pluginparam": $.copyArg(p1), "pluginparam2": $.copyArg(p2), result: undefined, "pluginhandle": 0, "exportproc": null};
  await $.fixArgs(L0, ["pluginname", "pluginparam", "pluginparam2"]);
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), L0["pluginname"])]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportproc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], "InitPlugin"]));
    await $.stmt((await $.callv(L0["exportproc"], [L0["pluginparam"], L0["pluginparam2"]])));
  }
  return L0.result;
}, {"params": ["PluginName", "PluginParam", "PluginParam2"], "kind": "procedure", "ptypes": ["String", "String", "String"]});
  U.method("TForm_Statement", "SB_SysDate", async function SB_SysDate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  {
    const $t1 = (await $.mv((await $.v(C, "DataModule_bussProc")), "SB_STATEMENTSB"));
    await $.wset([$t1], "Result", (await $.wcall([$t1], "CallDateFunction", ["get_date", []], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TForm_Statement", "UpdateStr", async function UpdateStr(Self, p0) {
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
  U.method("TForm_Statement", "XDBGrid1DrawColumnCell", async function XDBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "style": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "Caption")), ""))) {
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TXColumn", "TGridDrawState"]});
  U.method("TForm_Statement", "CBFilialClick", async function CBFilialClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_StateSB"));
    await $.stmt($.wcall([$t6], "close", [], C));
    if ($.truthy((await $.mv((await $.wv([$t6], "CBFilial", C, false)), "Checked")))) {
      { const $t7 = await $.iset((await $.wv([$t6], "sql", C, false)), [8], $.add("and ac.filial=", (await $.wcall([$t6], "inttostr", [(await $.mv((await $.wv([$t6], "DBLCBfilial", C, false)), "KeyValue"))], C)))); if ($t7 !== undefined) { await $.wset([$t6], "sql", $t7, C); } }
    } else {
      { const $t8 = await $.iset((await $.wv([$t6], "sql", C, false)), [8], ""); if ($t8 !== undefined) { await $.wset([$t6], "sql", $t8, C); } }
    }
    await $.stmt($.wcall([$t6], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_Statement", "DBLCBavaluteCloseUp", async function DBLCBavaluteCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CBCurrency")), "Checked")))) {
    await $.mset((await $.v(C, "CBCurrency")), "Checked", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_Statement", "DBLCBfilialCloseUp", async function DBLCBfilialCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CBFilial")), "Checked")))) {
    await $.mset((await $.v(C, "CBFilial")), "Checked", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_Statement", "ShowReport", async function ShowReport(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "Form_Rep", (await $.mcall((await $.v(C, "TForm_Rep")), "Create", [Self])));
  {
    const $t9 = (await $.v(C, "Form_Rep"));
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
  U.method("TForm_Statement", "ShowReportR", async function ShowReportR(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "Form_RepR", (await $.mcall((await $.v(C, "TForm_RepR")), "Create", [Self])));
  {
    const $t11 = (await $.v(C, "Form_RepR"));
    await $.mset((await $.wv([$t11], "QRD_Begin", C, false)), "Caption", (await $.wcall([$t11], "DateToStr", [(await $.wv([$t11], "v_BDate", C, false))], C)));
    await $.mset((await $.wv([$t11], "QRD_End", C, false)), "Caption", (await $.wcall([$t11], "DateToStr", [(await $.wv([$t11], "v_EDate", C, false))], C)));
    { const $t12 = (await $.mv((await $.wv([$t11], "RGroupPrintMode", C, false)), "ItemIndex"));
      if ($.eq($t12, 0)) {
        await $.mset((await $.wv([$t11], "QRBandDetail", C, false)), "ForceNewPage", (await $.wv([$t11], "False", C, false)));
      }
      else if ($.eq($t12, 1)) {
        await $.mset((await $.wv([$t11], "QRBandDetail", C, false)), "ForceNewPage", (await $.wv([$t11], "True", C, false)));
      }
    }
    { const $t13 = (await $.mv((await $.wv([$t11], "RGroupValView", C, false)), "ItemIndex"));
      if ($.eq($t13, 0)) {
        await $.mset((await $.wv([$t11], "QRDBTextCurr", C, false)), "DataField", "PairCurrencyId");
      }
      else if ($.eq($t13, 1)) {
        await $.mset((await $.wv([$t11], "QRDBTextCurr", C, false)), "DataField", "aValname");
      }
    }
    await $.mcall((await $.wv([$t11], "QRep", C, false)), "Preview", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TForm_Statement", "PostClick", async function PostClick(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "ExportDataTable", []));
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "Form_Rep"))]))))) {
    await $.set(C, "Form_Rep", (await $.mcall((await $.v(C, "TForm_Rep")), "Create", [null])));
  }
  {
    const $t14 = (await $.v(C, "SaveDialog"));
    if ($.truthy((await $.wv([$t14], "Execute", C, false)))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t14], "Form_Rep", C, false)), "QRep")), "ExportToFilter", [(await $.mcall((await $.wv([$t14], "TQRAsciiExportFilter", C, false)), "Create", [(await $.wv([$t14], "FileName", C, false))]))])));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TForm_Statement", "ShowTransClick", async function ShowTransClick(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "ExportDataTable", []));
  await $.set(C, "FormTransView", (await $.mcall((await $.v(C, "TFormTransView")), "Create", [Self])));
  await $.mcall((await $.v(C, "FormTransView")), "ShowModal", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TForm_Statement", "ShowCardState", async function ShowCardState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TForm_Statement", "BtnOkClick", async function BtnOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.v(C, "XDBGrid1"));
    const $t16 = (await $.wv([$t15], "SelectedRows", C, false));
    const $t17 = (await $.mv((await $.wv([$t15, $t16], "DataSource", C, false)), "DataSet"));
    if ($.truthy($.gt((await $.wv([$t15, $t16, $t17], "Count", C, false)), 0))) {
      { const $t18 = (await $.mv((await $.wv([$t15, $t16, $t17], "CBoxExtractCheck", C, false)), "ItemIndex"));
        if ($.eq($t18, 0)) {
          await $.stmt($.wcall([$t15, $t16, $t17], "PreviewClick", [], C));
        }
        else if ($.eq($t18, 1)) {
          await $.stmt($.wcall([$t15, $t16, $t17], "PostClick", [], C));
        }
        else if ($.eq($t18, 2)) {
          await $.stmt($.wcall([$t15, $t16, $t17], "ToExcelClick", [], C));
        }
        else if ($.eq($t18, 3)) {
          await $.stmt($.wcall([$t15, $t16, $t17], "ShowTransClick", [], C));
        }
        else if ($.eq($t18, 4)) {
          await $.stmt($.wcall([$t15, $t16, $t17], "ShowCardState", [], C));
        }
      }
    } else {
      await $.stmt((await $.wcall([$t15, $t16, $t17], "showmessage", [" Heç bir hesab seçilməyib  ! "], C)));
    }
    return L0.result;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_Statement", "CBCurrencyClick", async function CBCurrencyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_StateSB"));
    await $.stmt($.wcall([$t19], "close", [], C));
    if ($.truthy((await $.mv((await $.wv([$t19], "CBCurrency", C, false)), "Checked")))) {
      { const $t20 = await $.iset((await $.wv([$t19], "sql", C, false)), [7], $.add("and ac.val_acc=", (await $.wcall([$t19], "inttostr", [(await $.mv((await $.wv([$t19], "DBLCBavalute", C, false)), "KeyValue"))], C)))); if ($t20 !== undefined) { await $.wset([$t19], "sql", $t20, C); } }
    } else {
      { const $t21 = await $.iset((await $.wv([$t19], "sql", C, false)), [7], ""); if ($t21 !== undefined) { await $.wset([$t19], "sql", $t21, C); } }
    }
    await $.stmt($.wcall([$t19], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_Statement", "EditCli_IdChange", async function EditCli_IdChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_Statement", "ExportDataTable", async function ExportDataTable(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "v_acc_no": '', "v_bal_cn": '', "v_cli_id": '', "filtertrans": '', "filterext": '', "astrparam": '', "astrparam2": '', "bstrparam": '', "cstrparam": '', "i": 0, "s": '', "vidop": 0, "index": 0, "waitnextconfirm": false, "willrefresh": false, "accno2": '', "accno": ''};
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
  await $.set(C, "v_filial", (await $.mv((await $.v(C, "DBLCBfilial")), "KeyValue")));
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit_Bal_Cn")), "Text")), ""))) {
    L0["v_bal_cn"] = "-1";
  } else {
    L0["v_bal_cn"] = (await $.call(C, "UpdateStr", [(await $.mv((await $.v(C, "Edit_Bal_Cn")), "Text"))]));
  }
  {
    const $t22 = (await $.v(C, "XDBGrid1"));
    const $t23 = (await $.wv([$t22], "SelectedRows", C, false));
    const $t24 = (await $.mv((await $.wv([$t22, $t23], "DataSource", C, false)), "DataSet"));
    const $t25 = (await $.wv([$t22, $t23, $t24], "DataModule_bussProc", C, false));
    { const $t26 = $.sub((await $.wv([$t22, $t23, $t24, $t25], "Count", C, false)), 1);
      await $.wset([$t22, $t23, $t24, $t25], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
      let $t27 = true;
      for (;;) {
        if (!$t27) { await $.wset([$t22, $t23, $t24, $t25], "Index", $.succ((await $.wv([$t22, $t23, $t24, $t25], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
        $t27 = false;
        if (!($.ord((await $.wv([$t22, $t23, $t24, $t25], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t26))) break;
        await $.stmt((await $.wcall([$t22, $t23, $t24, $t25], "GotoBookmark", [(await $.wcall([$t22, $t23, $t24, $t25], "Pointer", [(await $.idx((await $.wv([$t22, $t23, $t24, $t25], "Items", C, false)), [(await $.wv([$t22, $t23, $t24, $t25], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
        await $.wset([$t22, $t23, $t24, $t25], "accno", (await $.mv((await $.wcall([$t22, $t23, $t24, $t25], "FieldByName", ["acc_no"], C)), "AsString")), { get: async () => L0["accno"], set: async (v) => { L0["accno"] = v; }, local: true });
        await $.wset([$t22, $t23, $t24, $t25], "accno2", $.add($.add((await $.wv([$t22, $t23, $t24, $t25], "accno2", { get: async () => L0["accno2"], set: async (v) => { L0["accno2"] = v; }, local: true }, false)), (await $.wv([$t22, $t23, $t24, $t25], "accno", { get: async () => L0["accno"], set: async (v) => { L0["accno"] = v; }, local: true }, false))), ","), { get: async () => L0["accno2"], set: async (v) => { L0["accno2"] = v; }, local: true });
        await $.tick();
      }
    }
    if ($.truthy($.eq((await $.wv([$t22, $t23, $t24, $t25], "Count", C, false)), 0))) {
      await $.wset([$t22, $t23, $t24, $t25], "v_Acc_no", "'-1'", { get: async () => L0["v_acc_no"], set: async (v) => { L0["v_acc_no"] = v; }, local: true });
      if ($.truthy($.eq((await $.mv((await $.wv([$t22, $t23, $t24, $t25], "EditCli_Id", C, false)), "Text")), ""))) {
        await $.wset([$t22, $t23, $t24, $t25], "v_Cli_id", "-1", { get: async () => L0["v_cli_id"], set: async (v) => { L0["v_cli_id"] = v; }, local: true });
      } else {
        await $.wset([$t22, $t23, $t24, $t25], "v_Cli_id", (await $.mv((await $.wv([$t22, $t23, $t24, $t25], "EditCli_Id", C, false)), "Text")), { get: async () => L0["v_cli_id"], set: async (v) => { L0["v_cli_id"] = v; }, local: true });
      }
    } else {
      await $.wset([$t22, $t23, $t24, $t25], "v_Acc_no", (await $.wcall([$t22, $t23, $t24, $t25], "UpdateStr", [(await $.wcall([$t22, $t23, $t24, $t25], "Copy", [(await $.wv([$t22, $t23, $t24, $t25], "accno2", { get: async () => L0["accno2"], set: async (v) => { L0["accno2"] = v; }, local: true }, false)), 1, $.sub((await $.wcall([$t22, $t23, $t24, $t25], "Length", [(await $.wv([$t22, $t23, $t24, $t25], "accno2", { get: async () => L0["accno2"], set: async (v) => { L0["accno2"] = v; }, local: true }, false))], C)), 1)], C))], C)), { get: async () => L0["v_acc_no"], set: async (v) => { L0["v_acc_no"] = v; }, local: true });
      await $.wset([$t22, $t23, $t24, $t25], "v_Cli_id", "-1", { get: async () => L0["v_cli_id"], set: async (v) => { L0["v_cli_id"] = v; }, local: true });
    }
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
  L0["cstrparam"] = (await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "SB_STATEMENTSB")), "CallStringFunction", ["notAccId", [(await $.v(C, "v_BDate")), (await $.v(C, "v_EDate")), L0["v_cli_id"], L0["v_acc_no"], L0["v_bal_cn"], (await $.v(C, "v_filial")), (await $.v(C, "v_val")), (await $.v(C, "v_user")), (await $.v(C, "Turn_and_RateDiff"))]]));
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBTurnOver")), "Checked")), true))) {
    {
      const $t28 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODSNotAccIdSB"));
      await $.stmt($.wcall([$t28], "close", [], C));
      await $.mcall((await $.wv([$t28], "sql", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t28], "sql", C, false)), "Add", [(await $.wv([$t28], "CStrParam", { get: async () => L0["cstrparam"], set: async (v) => { L0["cstrparam"] = v; }, local: true }, false))])));
      await $.stmt($.wcall([$t28], "open", [], C));
      await $.wset([$t28], "S", (await $.wcall([$t28], "Copy", [(await $.wv([$t28], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), 1, $.sub((await $.wcall([$t28], "Length", [(await $.wv([$t28], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)), 4)], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
    }
    L0["filterext"] = L0["s"];
  } else {
    L0["filterext"] = "";
  }
  {
    const $t29 = (await $.mv((await $.v(C, "DataModule_bussProc")), "GetExtraction2"));
    {
      const $t30 = (await $.mv((await $.wv([$t29], "DataModule_bussProc", C, false)), "ODS_GetExtractionSB"));
      await $.stmt($.wcall([$t29, $t30], "close", [], C));
      await $.stmt((await $.wcall([$t29, $t30], "SetVariable", ["bDate", (await $.wv([$t29, $t30], "v_BDate", C, false))], C)));
      await $.stmt((await $.wcall([$t29, $t30], "SetVariable", ["eDate", (await $.wv([$t29, $t30], "v_EDate", C, false))], C)));
      await $.stmt((await $.wcall([$t29, $t30], "SetVariable", ["ClientID", (await $.wv([$t29, $t30], "v_Cli_id", { get: async () => L0["v_cli_id"], set: async (v) => { L0["v_cli_id"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t29, $t30], "SetVariable", ["AccountNo", (await $.wv([$t29, $t30], "v_Acc_no", { get: async () => L0["v_acc_no"], set: async (v) => { L0["v_acc_no"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t29, $t30], "SetVariable", ["BalanceNo", (await $.wv([$t29, $t30], "v_Bal_cn", { get: async () => L0["v_bal_cn"], set: async (v) => { L0["v_bal_cn"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t29, $t30], "SetVariable", ["BranchID", (await $.wv([$t29, $t30], "v_filial", C, false))], C)));
      await $.stmt((await $.wcall([$t29, $t30], "SetVariable", ["CurrencyID", (await $.wv([$t29, $t30], "v_val", C, false))], C)));
      await $.stmt((await $.wcall([$t29, $t30], "SetVariable", ["UserID", (await $.wv([$t29, $t30], "v_user", C, false))], C)));
      await $.stmt((await $.wcall([$t29, $t30], "SetVariable", ["Vidop", (await $.wv([$t29, $t30], "vidop", { get: async () => L0["vidop"], set: async (v) => { L0["vidop"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t29, $t30], "open", [], C));
      await $.wset([$t29, $t30], "AStrParam", (await $.mv((await $.wcall([$t29, $t30], "FieldByName", ["str"], C)), "AsString")), { get: async () => L0["astrparam"], set: async (v) => { L0["astrparam"] = v; }, local: true });
    }
    await $.stmt($.wcall([$t29], "Close", [], C));
    await $.stmt((await $.wcall([$t29], "SetVariable", ["bDate", (await $.wv([$t29], "v_BDate", C, false))], C)));
    await $.stmt((await $.wcall([$t29], "SetVariable", ["eDate", (await $.wv([$t29], "v_EDate", C, false))], C)));
    await $.stmt((await $.wcall([$t29], "SetVariable", ["ClientID", (await $.wv([$t29], "v_Cli_id", { get: async () => L0["v_cli_id"], set: async (v) => { L0["v_cli_id"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t29], "SetVariable", ["AccountNo", (await $.wv([$t29], "v_Acc_no", { get: async () => L0["v_acc_no"], set: async (v) => { L0["v_acc_no"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t29], "SetVariable", ["BalanceNo", (await $.wv([$t29], "v_Bal_cn", { get: async () => L0["v_bal_cn"], set: async (v) => { L0["v_bal_cn"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t29], "SetVariable", ["BranchID", (await $.wv([$t29], "v_filial", C, false))], C)));
    await $.stmt((await $.wcall([$t29], "SetVariable", ["CurrencyID", (await $.wv([$t29], "v_val", C, false))], C)));
    await $.stmt((await $.wcall([$t29], "SetVariable", ["UserID", (await $.wv([$t29], "v_user", C, false))], C)));
    await $.stmt($.wcall([$t29], "Open", [], C));
    await $.wset([$t29], "AStrParam2", (await $.mv((await $.wcall([$t29], "FieldByName", ["str"], C)), "AsString")), { get: async () => L0["astrparam2"], set: async (v) => { L0["astrparam2"] = v; }, local: true });
  }
  {
    const $t31 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_ExtractionTransSB"));
    await $.stmt($.wcall([$t31], "close", [], C));
    await $.stmt((await $.wcall([$t31], "SetVariable", ["bDate", (await $.wv([$t31], "v_BDate", C, false))], C)));
    await $.stmt((await $.wcall([$t31], "SetVariable", ["eDate", (await $.wv([$t31], "v_EDate", C, false))], C)));
    await $.stmt((await $.wcall([$t31], "SetVariable", ["ClientID", (await $.wv([$t31], "v_Cli_id", { get: async () => L0["v_cli_id"], set: async (v) => { L0["v_cli_id"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t31], "SetVariable", ["AccountNo", (await $.wv([$t31], "v_Acc_no", { get: async () => L0["v_acc_no"], set: async (v) => { L0["v_acc_no"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t31], "SetVariable", ["BalanceNo", (await $.wv([$t31], "v_Bal_cn", { get: async () => L0["v_bal_cn"], set: async (v) => { L0["v_bal_cn"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t31], "SetVariable", ["BranchID", (await $.wv([$t31], "v_filial", C, false))], C)));
    await $.stmt((await $.wcall([$t31], "SetVariable", ["CurrencyID", (await $.wv([$t31], "v_val", C, false))], C)));
    await $.stmt((await $.wcall([$t31], "SetVariable", ["UserID", (await $.wv([$t31], "v_user", C, false))], C)));
    await $.stmt((await $.wcall([$t31], "SetVariable", ["Vidop", (await $.wv([$t31], "vidop", { get: async () => L0["vidop"], set: async (v) => { L0["vidop"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t31], "open", [], C));
    await $.wset([$t31], "BStrParam", (await $.mv((await $.wcall([$t31], "FieldByName", ["str"], C)), "AsString")), { get: async () => L0["bstrparam"], set: async (v) => { L0["bstrparam"] = v; }, local: true });
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBTurnOver")), "Checked")), true))) {
    {
      const $t32 = (await $.v(C, "DataModule_bussProc"));
      {
        const $t33 = (await $.wv([$t32], "ODSMainStatesb", C, false));
        await $.stmt($.wcall([$t32, $t33], "Close", [], C));
        await $.mcall((await $.wv([$t32, $t33], "SQL", C, false)), "Clear", []);
        await $.stmt((await $.mcall((await $.wv([$t32, $t33], "SQL", C, false)), "Add", [(await $.wv([$t32, $t33], "AStrParam", { get: async () => L0["astrparam"], set: async (v) => { L0["astrparam"] = v; }, local: true }, false))])));
        await $.wset([$t32, $t33], "Filtered", (await $.wv([$t32, $t33], "false", C, false)), C);
        await $.stmt($.wcall([$t32, $t33], "Open", [], C));
      }
      {
        const $t34 = (await $.wv([$t32], "ODSExtractTranssb", C, false));
        await $.stmt($.wcall([$t32, $t34], "Close", [], C));
        await $.mcall((await $.wv([$t32, $t34], "SQL", C, false)), "Clear", []);
        await $.stmt((await $.wcall([$t32, $t34], "DeclareVariable", ["OwnAccountId", (await $.wv([$t32, $t34], "otInteger", C, false))], C)));
        await $.stmt((await $.mcall((await $.wv([$t32, $t34], "SQL", C, false)), "Add", [(await $.wv([$t32, $t34], "BStrParam", { get: async () => L0["bstrparam"], set: async (v) => { L0["bstrparam"] = v; }, local: true }, false))])));
        await $.stmt($.wcall([$t32, $t34], "Open", [], C));
      }
    }
  } else {
    {
      const $t35 = (await $.v(C, "DataModule_bussProc"));
      {
        const $t36 = (await $.wv([$t35], "ODSMainStatesb", C, false));
        await $.stmt($.wcall([$t35, $t36], "Close", [], C));
        await $.mcall((await $.wv([$t35, $t36], "SQL", C, false)), "Clear", []);
        await $.stmt((await $.mcall((await $.wv([$t35, $t36], "SQL", C, false)), "Add", [(await $.wv([$t35, $t36], "AStrParam2", { get: async () => L0["astrparam2"], set: async (v) => { L0["astrparam2"] = v; }, local: true }, false))])));
        await $.wset([$t35, $t36], "Filtered", (await $.wv([$t35, $t36], "false", C, false)), C);
        await $.stmt($.wcall([$t35, $t36], "Open", [], C));
      }
      {
        const $t37 = (await $.wv([$t35], "ODSExtractTranssb", C, false));
        await $.stmt($.wcall([$t35, $t37], "Close", [], C));
        await $.mcall((await $.wv([$t35, $t37], "SQL", C, false)), "Clear", []);
        await $.stmt((await $.wcall([$t35, $t37], "DeclareVariable", ["OwnAccountId", (await $.wv([$t35, $t37], "otInteger", C, false))], C)));
        await $.stmt((await $.mcall((await $.wv([$t35, $t37], "SQL", C, false)), "Add", [(await $.wv([$t35, $t37], "BStrParam", { get: async () => L0["bstrparam"], set: async (v) => { L0["bstrparam"] = v; }, local: true }, false))])));
        await $.stmt($.wcall([$t35, $t37], "Open", [], C));
      }
    }
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TForm_Statement", "PreviewClick", async function PreviewClick(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "ExportDataTable", []));
  { const $t38 = (await $.mv((await $.v(C, "RGroupSetting")), "ItemIndex"));
    if ($.eq($t38, 0)) {
      await $.stmt($.call(C, "ShowReportR", []));
    }
    else if ($.eq($t38, 1)) {
      await $.stmt($.call(C, "ShowReport", []));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("CreateSheet", async function CreateSheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.set(C, "Exl", (await $.call(C, "CreateOleObject", ["Excel.Application"])));
    await $.mcall((await $.mv((await $.v(C, "Exl")), "WorkBooks")), "Add", []);
    await $.set(C, "Sheet", (await $.idx((await $.mv((await $.mv((await $.mv((await $.v(C, "Exl")), "Application")), "Worksheets")), "Item")), [1])));
  } catch ($t39) {
    $.rethrowControl($t39);
    $.handled($t39);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("DestroySheet", async function DestroySheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Sheet"))])));
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "Exl"))])));
  } catch ($t40) {
    $.rethrowControl($t40);
    $.handled($t40);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ShowSheet", async function ShowSheet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  try {
    await $.mset((await $.v(C, "Exl")), "Visible", true);
  } catch ($t41) {
    $.rethrowControl($t41);
    $.handled($t41);
    await $.stmt($.call(C, "DestroySheet", []));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TForm_Statement", "ToExcelClick", async function ToExcelClick(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "j": 0, "k": 0, "m": 0, "www": 0, "n": 0, "t_val": 0, "v_ldebit": 0, "v_lkredit": 0, "v_debit": 0, "v_kredit": 0, "bash": ''};
  L0["d"] = 6;
  L0["f"] = 3;
  L0["dd"] = 2;
  try {
    await $.stmt($.call(C, "ExportDataTable", []));
    await $.stmt($.call(C, "CreateSheet", []));
    await $.mset((await $.v(C, "PanelProgress")), "Visible", true);
    await $.mset((await $.v(C, "PrBarParent")), "Progress", 0);
    await $.mset((await $.v(C, "PrBarChild")), "Position", 0);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["A1:A60000"])), "ColumnWidth", 20);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["B1:B60000"])), "ColumnWidth", 15);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["C1:C60000"])), "ColumnWidth", 15);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["D1:D60000"])), "NumberFormat", "#######");
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["D1:D60000"])), "ColumnWidth", 30);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["E1:E60000"])), "NumberFormat", "#,##0.00");
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["E1:E60000"])), "ColumnWidth", 12);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["F1:F60000"])), "NumberFormat", "#,##0.00");
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["F1:F60000"])), "ColumnWidth", 12);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Sheet")), "Range")), ["G1:G60000"])), "ColumnWidth", 100);
    L0["k"] = 0;
    {
      const $t42 = (await $.v(C, "ODSMainStateSB_inf"));
      await $.stmt($.wcall([$t42], "close", [], C));
      await $.mcall((await $.wv([$t42], "sql", C, false)), "Clear", []);
      await $.mset((await $.wv([$t42], "Sql", C, false)), "Text", (await $.mv((await $.mv((await $.mv((await $.wv([$t42], "DataModule_bussProc", C, false)), "ODSMainStateSB")), "SQL")), "Text")));
      await $.stmt($.wcall([$t42], "open", [], C));
    }
    {
      const $t43 = (await $.v(C, "DataModule_bussProc"));
      { const $t44 = (await $.mv((await $.wv([$t43], "ODSMainStateSB_inf", C, false)), "RecordCount"));
        await $.wset([$t43], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t45 = true;
        for (;;) {
          if (!$t45) { await $.wset([$t43], "i", $.succ((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t45 = false;
          if (!($.ord((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t44))) break;
          await $.wset([$t43], "t_val", (await $.mv((await $.mcall((await $.wv([$t43], "ODSMainStateSB_inf", C, false)), "FieldByName", ["CurrencyId"])), "AsInteger")), { get: async () => L0["t_val"], set: async (v) => { L0["t_val"] = v; }, local: true });
          if ($.truthy($.eq((await $.wv([$t43], "t_val", { get: async () => L0["t_val"], set: async (v) => { L0["t_val"] = v; }, local: true }, false)), 0))) {
            await $.mset((await $.wv([$t43], "PrBarParent", C, false)), "Progress", $.idiv(($.mul(100, (await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)))), (await $.mv((await $.wv([$t43], "ODSMainStateSB_inf", C, false)), "RecordCount"))));
            await $.wset([$t43], "bash", (await $.wcall([$t43], "inttostr", [$.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)))], C)), { get: async () => L0["bash"], set: async (v) => { L0["bash"] = v; }, local: true });
            { const $t46 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3], " Hesab № :"); if ($t46 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t46); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            { const $t47 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4], (await $.mv((await $.mcall((await $.wv([$t43], "ODSMainStateSB_inf", C, false)), "FieldByName", ["AccountNumber"])), "AsString"))); if ($t47 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t47); } }
            { const $t48 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 1], "Hesabın adı :"); if ($t48 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t48); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 1])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            await $.mset((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 2])), "Value", (await $.mv((await $.mcall((await $.wv([$t43], "ODSMainStateSB_inf", C, false)), "FieldByName", ["AccountName"])), "AsString")));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 2])), "Font")), "Name", "Tahoma");
            { const $t49 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2), 1], "Valyuta :"); if ($t49 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t49); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2), 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2), 1])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            { const $t50 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2), 2], (await $.mv((await $.mcall((await $.wv([$t43], "ODSMainStateSB_inf", C, false)), "FieldByName", ["CurrencyName"])), "AsString"))); if ($t50 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t50); } }
            { const $t51 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 1], "Əməliy. tarixi :"); if ($t51 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t51); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 1])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            { const $t52 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 2], (await $.mv((await $.wv([$t43], "DTP_Begin", C, false)), "DateTime"))); if ($t52 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t52); } }
            { const $t53 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 3], (await $.mv((await $.wv([$t43], "DTP_End", C, false)), "DateTime"))); if ($t53 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t53); } }
            { const $t54 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4), 1], "Əvv əm. tarixi : "); if ($t54 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t54); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4), 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4), 1])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            await $.mset((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4), 2])), "Value", (await $.mv((await $.mcall((await $.wv([$t43], "ODSMainStateSB_inf", C, false)), "FieldByName", ["lastopdate"])), "AsDateTime")));
            { const $t55 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 1], "Günün əvv. qal:"); if ($t55 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t55); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 1])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            { const $t56 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 2], "Manat :"); if ($t56 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t56); } }
            await $.mset((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 3])), "Value", (await $.wcall([$t43], "FormatFloat", ["#,##0.00", (await $.wcall([$t43], "ABS", [(await $.mv((await $.mcall((await $.wv([$t43], "ODSMainStateSB_inf", C, false)), "FieldByName", ["Ostat"])), "AsFloat"))], C))], C)));
            { const $t57 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 2], "Tarix"); if ($t57 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t57); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 2])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 2])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 2])), "Font")), "Color", (await $.wv([$t43], "clBlue", C, false)));
            await $.mset((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 3])), "Value", "Valyuta");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 3])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 3])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 3])), "Font")), "Color", (await $.wv([$t43], "clBlue", C, false)));
            { const $t58 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 4], "Qarşı hesab"); if ($t58 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t58); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 4])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 4])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 4])), "Font")), "Color", (await $.wv([$t43], "clBlue", C, false)));
            { const $t59 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 5], "Debet"); if ($t59 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t59); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 5])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 5])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 5])), "Font")), "Color", (await $.wv([$t43], "clBlue", C, false)));
            { const $t60 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 6], "Kredit"); if ($t60 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t60); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 6])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 6])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 6])), "Font")), "Color", (await $.wv([$t43], "clBlue", C, false)));
            { const $t61 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 7], "Təyinatı"); if ($t61 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t61); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 7])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 7])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 7])), "Font")), "Color", (await $.wv([$t43], "clBlue", C, false)));
            await $.wset([$t43], "v_LDebit", 0, { get: async () => L0["v_ldebit"], set: async (v) => { L0["v_ldebit"] = v; }, local: true });
            await $.wset([$t43], "v_LKredit", 0, { get: async () => L0["v_lkredit"], set: async (v) => { L0["v_lkredit"] = v; }, local: true });
            await $.wset([$t43], "n", 0, { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true });
            { const $t62 = (await $.mv((await $.wv([$t43], "ODSExtractTranssb", C, false)), "RecordCount"));
              await $.wset([$t43], "j", 1, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
              let $t63 = true;
              for (;;) {
                if (!$t63) { await $.wset([$t43], "j", $.succ((await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
                $t63 = false;
                if (!($.ord((await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t62))) break;
                await $.mset((await $.wv([$t43], "PrBarChild", C, false)), "Position", $.idiv(($.mul(100, (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)))), (await $.mv((await $.wv([$t43], "ODSExtractTranssb", C, false)), "RecordCount"))));
                await $.wset([$t43], "v_LDebit", $.add((await $.wv([$t43], "v_LDebit", { get: async () => L0["v_ldebit"], set: async (v) => { L0["v_ldebit"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "FieldByName", ["LDebit"])), "AsFloat"))), { get: async () => L0["v_ldebit"], set: async (v) => { L0["v_ldebit"] = v; }, local: true });
                await $.wset([$t43], "v_LKredit", $.add((await $.wv([$t43], "v_LKredit", { get: async () => L0["v_lkredit"], set: async (v) => { L0["v_lkredit"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "FieldByName", ["LKredit"])), "AsFloat"))), { get: async () => L0["v_lkredit"], set: async (v) => { L0["v_lkredit"] = v; }, local: true });
                { const $t64 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 2], (await $.mv((await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "FieldByName", ["Dat"])), "AsDateTime"))); if ($t64 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t64); } }
                { const $t65 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 3], (await $.mv((await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "FieldByName", ["PairCurrencyid"])), "AsString"))); if ($t65 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t65); } }
                { const $t66 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 4], (await $.mv((await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "FieldByName", ["PairAccountName"])), "AsString"))); if ($t66 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t66); } }
                { const $t67 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 5], (await $.wcall([$t43], "FormatFloat", ["#,##0.00", (await $.mv((await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "FieldByName", ["LDebit"])), "AsFloat"))], C))); if ($t67 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t67); } }
                { const $t68 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 6], (await $.wcall([$t43], "FormatFloat", ["#,##0.00", (await $.mv((await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "FieldByName", ["LKredit"])), "AsFloat"))], C))); if ($t68 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t68); } }
                { const $t69 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 7], (await $.mv((await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "FieldByName", ["Name"])), "AsString"))); if ($t69 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t69); } }
                await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 7])), "Font")), "Name", "Tahoma");
                if ($.truthy($.ne((await $.mv((await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "FieldByName", ["PairCurrencyid"])), "AsInteger")), 0))) {
                  await $.wset([$t43], "n", $.add((await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), 1), { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true });
                  { const $t70 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 5], (await $.wcall([$t43], "FormatFloat", ["#,##0.00", (await $.mv((await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "FieldByName", ["Debit"])), "AsFloat"))], C))); if ($t70 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t70); } }
                  await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 5])), "Font")), "Bold", (await $.wv([$t43], "True", C, false)));
                  await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 5])), "Font")), "Color", (await $.wv([$t43], "clMaroon", C, false)));
                  { const $t71 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 6], (await $.wcall([$t43], "FormatFloat", ["#,##0.00", (await $.mv((await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "FieldByName", ["Kredit"])), "AsFloat"))], C))); if ($t71 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t71); } }
                  await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 6])), "Font")), "Bold", (await $.wv([$t43], "True", C, false)));
                  await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 6])), "Font")), "Color", (await $.wv([$t43], "clMaroon", C, false)));
                }
                await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "Next", []);
                await $.wset([$t43], "www", $.add((await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false)), 1), { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true });
                if ($.truthy((await $.and_(($.eq((await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t43], "ODSExtractTranssb", C, false)), "RecordCount")))), async () => ($.ne((await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false)), 0)))))) {
                  await $.wset([$t43], "www", $.add((await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false)), 1), { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true });
                }
                await $.tick();
              }
            }
            await $.mset((await $.wv([$t43], "PrBarChild", C, false)), "Position", 0);
            await $.wset([$t43], "m", (await $.mv((await $.wv([$t43], "ODSExtractTranssb", C, false)), "RecordCount")), { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true });
            { const $t72 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 1), 5], (await $.wcall([$t43], "FormatFloat", ["#,##0.00", (await $.wv([$t43], "v_LDebit", { get: async () => L0["v_ldebit"], set: async (v) => { L0["v_ldebit"] = v; }, local: true }, false))], C))); if ($t72 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t72); } }
            { const $t73 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 1), 6], (await $.wcall([$t43], "FormatFloat", ["#,##0.00", (await $.wv([$t43], "v_LKredit", { get: async () => L0["v_lkredit"], set: async (v) => { L0["v_lkredit"] = v; }, local: true }, false))], C))); if ($t73 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t73); } }
            { const $t74 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 2), 1], "Günün son. qal:"); if ($t74 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t74); } }
            { const $t75 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 2), 2], "Manat:"); if ($t75 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t75); } }
            { const $t76 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 2), 3], (await $.wcall([$t43], "FormatFloat", ["#,##0.00", (await $.wcall([$t43], "ABS", [(await $.mv((await $.mcall((await $.wv([$t43], "ODSMainStateSB_inf", C, false)), "FieldByName", ["EndOstat"])), "AsFloat"))], C))], C))); if ($t76 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t76); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 2), 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 2), 1])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            { const $t77 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 3), 1], ""); if ($t77 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t77); } }
            await $.mcall((await $.idx((await $.mv((await $.wv([$t43], "Exl", C, false)), "Range")), [$.add($.add($.add("A", (await $.wv([$t43], "bash", { get: async () => L0["bash"], set: async (v) => { L0["bash"] = v; }, local: true }, false))), ":G"), (await $.wcall([$t43], "inttostr", [$.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 2)], C)))])), "select", []);
            await $.mset((await $.mv((await $.mv((await $.wv([$t43], "Exl", C, false)), "Selection")), "Interior")), "ColorIndex", 0);
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Range")), [$.add($.add($.add("A", (await $.wv([$t43], "bash", { get: async () => L0["bash"], set: async (v) => { L0["bash"] = v; }, local: true }, false))), ":G"), (await $.wcall([$t43], "inttostr", [$.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 2)], C)))])), "Borders")), "Color", (await $.wv([$t43], "clRed", C, false)));
            await $.mcall((await $.idx((await $.mv((await $.wv([$t43], "Exl", C, false)), "Range")), [$.add($.add($.add("A", (await $.wcall([$t43], "Inttostr", [$.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 3)], C))), ":G"), (await $.wcall([$t43], "Inttostr", [$.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), 3)], C)))])), "Select", []);
            await $.mset((await $.mv((await $.mv((await $.wv([$t43], "Exl", C, false)), "Selection")), "Interior")), "ColorIndex", 8);
            await $.wset([$t43], "k", $.add($.add($.add($.add((await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "f", { get: async () => L0["f"], set: async (v) => { L0["f"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true });
            await $.mcall((await $.wv([$t43], "ODSMainStateSB_inf", C, false)), "Next", []);
          } else {
            await $.mset((await $.wv([$t43], "PrBarParent", C, false)), "Progress", $.idiv(($.mul(100, (await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)))), (await $.mv((await $.wv([$t43], "ODSMainStateSB_inf", C, false)), "RecordCount"))));
            await $.wset([$t43], "bash", (await $.wcall([$t43], "inttostr", [$.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)))], C)), { get: async () => L0["bash"], set: async (v) => { L0["bash"] = v; }, local: true });
            { const $t78 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3], " Hesab № :"); if ($t78 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t78); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            { const $t79 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4], (await $.mv((await $.mcall((await $.wv([$t43], "ODSMainStateSB_inf", C, false)), "FieldByName", ["AccountNumber"])), "AsString"))); if ($t79 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t79); } }
            { const $t80 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 1], "Hesabın adı :"); if ($t80 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t80); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 1])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            await $.mset((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 2])), "Value", (await $.mv((await $.mcall((await $.wv([$t43], "ODSMainStateSB_inf", C, false)), "FieldByName", ["AccountName"])), "AsString")));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 1), 2])), "Font")), "Name", "Tahoma");
            { const $t81 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2), 1], "Valyuta :"); if ($t81 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t81); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2), 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2), 1])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            { const $t82 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 2), 2], (await $.mv((await $.mcall((await $.wv([$t43], "ODSMainStateSB_inf", C, false)), "FieldByName", ["CurrencyName"])), "AsString"))); if ($t82 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t82); } }
            { const $t83 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 1], "Əməliy. tarixi:"); if ($t83 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t83); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 1])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            { const $t84 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 2], (await $.mv((await $.wv([$t43], "DTP_Begin", C, false)), "DateTime"))); if ($t84 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t84); } }
            { const $t85 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 3), 3], (await $.mv((await $.wv([$t43], "DTP_End", C, false)), "DateTime"))); if ($t85 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t85); } }
            { const $t86 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4), 1], "Əvv əm. tarixi: "); if ($t86 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t86); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4), 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4), 1])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            await $.mset((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 4), 2])), "Value", (await $.mv((await $.mcall((await $.wv([$t43], "ODSMainStateSB_inf", C, false)), "FieldByName", ["lastopdate"])), "AsDateTime")));
            { const $t87 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 1], "Günün əvv. qal: "); if ($t87 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t87); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 1])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            { const $t88 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 2], "Valyuta: "); if ($t88 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t88); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 2])), "Font")), "Name", "Tahoma");
            await $.mset((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 5), 3])), "Value", (await $.wcall([$t43], "FormatFloat", ["#,##0.00", (await $.wcall([$t43], "ABS", [(await $.mv((await $.mcall((await $.wv([$t43], "ODSMainStateSB_inf", C, false)), "FieldByName", ["Ostat"])), "AsFloat"))], C))], C)));
            { const $t89 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 2], "Manat: "); if ($t89 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t89); } }
            { const $t90 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 3], (await $.wcall([$t43], "FormatFloat", ["#,##0.00", (await $.wcall([$t43], "ABS", [(await $.mv((await $.mcall((await $.wv([$t43], "ODSMainStateSB_inf", C, false)), "FieldByName", ["PokOstat"])), "AsCurrency"))], C))], C))); if ($t90 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t90); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 6), 2])), "Font")), "Name", "Tahoma");
            { const $t91 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 7), 2], "Rəsmi məzənnə: "); if ($t91 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t91); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 7), 2])), "Font")), "Name", "Tahoma");
            { const $t92 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 7), 3], (await $.wcall([$t43], "FormatFloat", ["#,##0.0000", (await $.wcall([$t43], "ABS", [(await $.mv((await $.mcall((await $.wv([$t43], "RatesDataSetBeginsb", C, false)), "FieldByName", ["Ostat"])), "AsCurrency"))], C))], C))); if ($t92 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t92); } }
            { const $t93 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 2], "Tarix"); if ($t93 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t93); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 2])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 2])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 2])), "Font")), "Color", (await $.wv([$t43], "clBlue", C, false)));
            await $.mset((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 3])), "Value", "Valyuta");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 3])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 3])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 3])), "Font")), "Color", (await $.wv([$t43], "clBlue", C, false)));
            { const $t94 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 4], "Qarşı hesab"); if ($t94 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t94); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 4])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 4])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 4])), "Font")), "Color", (await $.wv([$t43], "clBlue", C, false)));
            { const $t95 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 5], "Debet"); if ($t95 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t95); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 5])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 5])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 5])), "Font")), "Color", (await $.wv([$t43], "clBlue", C, false)));
            { const $t96 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 6], "Kredit"); if ($t96 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t96); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 6])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 6])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 6])), "Font")), "Color", (await $.wv([$t43], "clBlue", C, false)));
            { const $t97 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 7], "Təyinatı"); if ($t97 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t97); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 7])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 7])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), 8), 7])), "Font")), "Color", (await $.wv([$t43], "clBlue", C, false)));
            await $.wset([$t43], "www", 0, { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true });
            await $.wset([$t43], "v_LDebit", 0, { get: async () => L0["v_ldebit"], set: async (v) => { L0["v_ldebit"] = v; }, local: true });
            await $.wset([$t43], "v_Debit", 0, { get: async () => L0["v_debit"], set: async (v) => { L0["v_debit"] = v; }, local: true });
            await $.wset([$t43], "v_LKredit", 0, { get: async () => L0["v_lkredit"], set: async (v) => { L0["v_lkredit"] = v; }, local: true });
            await $.wset([$t43], "v_Kredit", 0, { get: async () => L0["v_kredit"], set: async (v) => { L0["v_kredit"] = v; }, local: true });
            { const $t98 = (await $.mv((await $.wv([$t43], "ODSExtractTranssb", C, false)), "RecordCount"));
              await $.wset([$t43], "j", 1, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
              let $t99 = true;
              for (;;) {
                if (!$t99) { await $.wset([$t43], "j", $.succ((await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
                $t99 = false;
                if (!($.ord((await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t98))) break;
                await $.mset((await $.wv([$t43], "PrBarChild", C, false)), "Position", $.idiv(($.mul(100, (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)))), (await $.mv((await $.wv([$t43], "ODSExtractTranssb", C, false)), "RecordCount"))));
                await $.wset([$t43], "v_Debit", $.add((await $.wv([$t43], "v_Debit", { get: async () => L0["v_debit"], set: async (v) => { L0["v_debit"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "FieldByName", ["Debit"])), "AsFloat"))), { get: async () => L0["v_debit"], set: async (v) => { L0["v_debit"] = v; }, local: true });
                await $.wset([$t43], "v_Kredit", $.add((await $.wv([$t43], "v_Kredit", { get: async () => L0["v_kredit"], set: async (v) => { L0["v_kredit"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "FieldByName", ["Kredit"])), "AsFloat"))), { get: async () => L0["v_kredit"], set: async (v) => { L0["v_kredit"] = v; }, local: true });
                await $.wset([$t43], "v_LDebit", $.add((await $.wv([$t43], "v_LDebit", { get: async () => L0["v_ldebit"], set: async (v) => { L0["v_ldebit"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "FieldByName", ["LDebit"])), "AsFloat"))), { get: async () => L0["v_ldebit"], set: async (v) => { L0["v_ldebit"] = v; }, local: true });
                await $.wset([$t43], "v_LKredit", $.add((await $.wv([$t43], "v_LKredit", { get: async () => L0["v_lkredit"], set: async (v) => { L0["v_lkredit"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "FieldByName", ["LKredit"])), "AsFloat"))), { get: async () => L0["v_lkredit"], set: async (v) => { L0["v_lkredit"] = v; }, local: true });
                { const $t100 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 2], (await $.mv((await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "FieldByName", ["Dat"])), "AsDateTime"))); if ($t100 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t100); } }
                { const $t101 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 3], (await $.mv((await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "FieldByName", ["PairCurrencyid"])), "AsString"))); if ($t101 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t101); } }
                { const $t102 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 4], (await $.mv((await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "FieldByName", ["PairAccountName"])), "AsString"))); if ($t102 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t102); } }
                { const $t103 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 5], (await $.wcall([$t43], "FormatFloat", ["#,##0.00", (await $.mv((await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "FieldByName", ["LDebit"])), "AsFloat"))], C))); if ($t103 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t103); } }
                { const $t104 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 6], (await $.wcall([$t43], "FormatFloat", ["#,##0.00", (await $.mv((await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "FieldByName", ["LKredit"])), "AsFloat"))], C))); if ($t104 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t104); } }
                { const $t105 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 7], (await $.mv((await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "FieldByName", ["Name"])), "AsString"))); if ($t105 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t105); } }
                await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 7])), "Font")), "Name", "Tahoma");
                { const $t106 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 5], (await $.wcall([$t43], "FormatFloat", ["#,##0.00", (await $.mv((await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "FieldByName", ["Debit"])), "AsFloat"))], C))); if ($t106 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t106); } }
                await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 5])), "Font")), "Bold", (await $.wv([$t43], "True", C, false)));
                await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 5])), "Font")), "Color", (await $.wv([$t43], "clMaroon", C, false)));
                { const $t107 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 6], (await $.wcall([$t43], "FormatFloat", ["#,##0.00", (await $.mv((await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "FieldByName", ["Kredit"])), "AsFloat"))], C))); if ($t107 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t107); } }
                await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 6])), "Font")), "Bold", (await $.wv([$t43], "True", C, false)));
                await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 6])), "Font")), "Color", (await $.wv([$t43], "clMaroon", C, false)));
                await $.mcall((await $.wv([$t43], "ODSExtractTranssb", C, false)), "Next", []);
                await $.wset([$t43], "www", $.add((await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false)), 1), { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true });
                if ($.truthy((await $.and_(($.eq((await $.wv([$t43], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t43], "ODSExtractTranssb", C, false)), "RecordCount")))), async () => ($.ne((await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false)), 0)))))) {
                  await $.wset([$t43], "www", $.add((await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false)), 1), { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true });
                }
                await $.tick();
              }
            }
            await $.mset((await $.wv([$t43], "PrBarChild", C, false)), "Position", 0);
            await $.wset([$t43], "m", (await $.mv((await $.wv([$t43], "ODSExtractTranssb", C, false)), "RecordCount")), { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true });
            { const $t108 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 5], (await $.wcall([$t43], "FormatFloat", ["#,##0.00", (await $.wv([$t43], "v_LDebit", { get: async () => L0["v_ldebit"], set: async (v) => { L0["v_ldebit"] = v; }, local: true }, false))], C))); if ($t108 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t108); } }
            { const $t109 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 6], (await $.wcall([$t43], "FormatFloat", ["#,##0.00", (await $.wv([$t43], "v_LKredit", { get: async () => L0["v_lkredit"], set: async (v) => { L0["v_lkredit"] = v; }, local: true }, false))], C))); if ($t109 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t109); } }
            { const $t110 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 5], (await $.wcall([$t43], "FormatFloat", ["#,##0.00", (await $.wv([$t43], "v_Debit", { get: async () => L0["v_debit"], set: async (v) => { L0["v_debit"] = v; }, local: true }, false))], C))); if ($t110 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t110); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 5])), "Font")), "Color", (await $.wv([$t43], "clMaroon", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 5])), "Font")), "Bold", (await $.wv([$t43], "True", C, false)));
            { const $t111 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 6], (await $.wcall([$t43], "FormatFloat", ["#,##0.00", (await $.wv([$t43], "v_Kredit", { get: async () => L0["v_kredit"], set: async (v) => { L0["v_kredit"] = v; }, local: true }, false))], C))); if ($t111 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t111); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 6])), "Font")), "Color", (await $.wv([$t43], "clMaroon", C, false)));
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 1), 6])), "Font")), "Bold", (await $.wv([$t43], "True", C, false)));
            { const $t112 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 2), 1], "Günün son. qal: "); if ($t112 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t112); } }
            { const $t113 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 2), 2], "Valyuta: "); if ($t113 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t113); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 2), 2])), "Font")), "Name", "Tahoma");
            { const $t114 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 2), 3], (await $.wcall([$t43], "FormatFloat", ["#,##0.00", (await $.wcall([$t43], "ABS", [(await $.mv((await $.mcall((await $.wv([$t43], "ODSMainStateSB_inf", C, false)), "FieldByName", ["EndOstat"])), "AsFloat"))], C))], C))); if ($t114 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t114); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 2), 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 2), 1])), "Font")), "Bold", (await $.wv([$t43], "true", C, false)));
            { const $t115 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 3), 2], "Manat: "); if ($t115 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t115); } }
            { const $t116 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 3), 3], (await $.wcall([$t43], "FormatFloat", ["#,##0.00", (await $.wcall([$t43], "ABS", [(await $.mv((await $.mcall((await $.wv([$t43], "ODSMainStateSB_inf", C, false)), "FieldByName", ["EndPokOstat"])), "AsCurrency"))], C))], C))); if ($t116 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t116); } }
            { const $t117 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 4), 2], "Rəsmi məzənnə: "); if ($t117 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t117); } }
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 4), 2])), "Font")), "Name", "Tahoma");
            { const $t118 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 4), 3], (await $.wcall([$t43], "FormatFloat", ["#,##0.0000", (await $.wcall([$t43], "ABS", [(await $.mv((await $.mcall((await $.wv([$t43], "RatesDataSetsb", C, false)), "FieldByName", ["Ostat"])), "AsCurrency"))], C))], C))); if ($t118 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t118); } }
            { const $t119 = await $.iset((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Cells")), [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 5), 1], ""); if ($t119 !== undefined) { await $.mset((await $.wv([$t43], "Sheet", C, false)), "Cells", $t119); } }
            await $.mcall((await $.idx((await $.mv((await $.wv([$t43], "Exl", C, false)), "Range")), [$.add($.add($.add("A", (await $.wv([$t43], "bash", { get: async () => L0["bash"], set: async (v) => { L0["bash"] = v; }, local: true }, false))), ":G"), (await $.wcall([$t43], "inttostr", [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 4)], C)))])), "select", []);
            await $.mset((await $.mv((await $.mv((await $.wv([$t43], "Exl", C, false)), "Selection")), "Interior")), "ColorIndex", 6);
            await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t43], "Sheet", C, false)), "Range")), [$.add($.add($.add("A", (await $.wv([$t43], "bash", { get: async () => L0["bash"], set: async (v) => { L0["bash"] = v; }, local: true }, false))), ":G"), (await $.wcall([$t43], "inttostr", [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 4)], C)))])), "Borders")), "Color", (await $.wv([$t43], "clRed", C, false)));
            await $.mcall((await $.idx((await $.mv((await $.wv([$t43], "Exl", C, false)), "Range")), [$.add($.add($.add("A", (await $.wcall([$t43], "Inttostr", [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 5)], C))), ":G"), (await $.wcall([$t43], "Inttostr", [$.add($.add($.add($.add($.add($.add((await $.wv([$t43], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), 5)], C)))])), "Select", []);
            await $.mset((await $.mv((await $.mv((await $.wv([$t43], "Exl", C, false)), "Selection")), "Interior")), "ColorIndex", 8);
            await $.wset([$t43], "k", $.add($.add($.add($.add($.add((await $.wv([$t43], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), (await $.wv([$t43], "d", { get: async () => L0["d"], set: async (v) => { L0["d"] = v; }, local: true }, false))), $.mul(2, (await $.wv([$t43], "dd", { get: async () => L0["dd"], set: async (v) => { L0["dd"] = v; }, local: true }, false)))), (await $.wv([$t43], "www", { get: async () => L0["www"], set: async (v) => { L0["www"] = v; }, local: true }, false))), (await $.wv([$t43], "f", { get: async () => L0["f"], set: async (v) => { L0["f"] = v; }, local: true }, false))), (await $.wv([$t43], "m", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))), { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true });
            await $.mcall((await $.wv([$t43], "ODSMainStateSB_inf", C, false)), "Next", []);
          }
          await $.tick();
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
  U.method("TForm_Statement", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TForm_Statement", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModule_bussProc", (await $.mcall((await $.v(C, "TDataModule_bussProc")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODSUsers")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_val")), "open", []);
  await $.mset((await $.v(C, "CBoxExtractCheck")), "ItemIndex", 0);
  await $.mset((await $.v(C, "DTP_Begin")), "DateTime", (await $.v(C, "SB_SysDate")));
  await $.mset((await $.v(C, "DTP_End")), "DateTime", (await $.v(C, "SB_SysDate")));
  await $.mset((await $.v(C, "dblcbUser")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLCBfilial")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLCBavalute")), "KeyValue", (-(1)));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_Statement", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 27))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TForm_Statement", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "spos": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["spos"] = (await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "SBOP")), "CallIntegerFunction", ["get_acc_no_sub", []]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_StateSB")), "SetVariable", ["ACCSRCHPOS", L0["spos"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm_Statement", "Hesabacmaq1Click", async function Hesabacmaq1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "x": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin2", ["Sb_General.bpl", "", (await $.v(C, "depozit_custid"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
