// Generated from uPayrepFilter.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("uPayrepFilter", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Db", "OracleData", "Oracle", "CMExcelExport", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "Quickrpt", "ComCtrls", "CheckLst", "Evanescence", "SbtranslateProc", "DBGridEh", "XFSCtrls", "CommonDecls", "SBSystem", "SboApiDataModuleImpl"]);
  const C = [U];
  U.defClass("TfrmPayRepFilter", "TForm", {"odscredits": {"name": "ODSCredits", "type": "TOracleDataSet"}, "cm_reports": {"name": "CM_REPORTS", "type": "TOraclePackage"}, "odfvalute": {"name": "ODFValute", "type": "TOracleDataSet"}, "valute": {"name": "Valute", "type": "TDataSource"}, "odfbranch": {"name": "ODFBranch", "type": "TOracleDataSet"}, "branch": {"name": "Branch", "type": "TDataSource"}, "odfusers": {"name": "ODFUsers", "type": "TOracleDataSet"}, "users": {"name": "Users", "type": "TDataSource"}, "odspayinfo": {"name": "ODSPayInfo", "type": "TOracleDataSet"}, "odscreditsid": {"name": "ODSCreditsID", "type": "TFloatField"}, "exporter": {"name": "Exporter", "type": "TCMExcelExport"}, "odspayinfocreditid": {"name": "ODSPayInfoCREDITID", "type": "TFloatField"}, "odspayinfoboorower": {"name": "ODSPayInfoBOOROWER", "type": "TWideStringField"}, "odspayinfocrdnum": {"name": "ODSPayInfoCRDNUM", "type": "TWideStringField"}, "odspayinfomainpayed": {"name": "ODSPayInfoMAINPAYED", "type": "TFloatField"}, "odspayinfointrpayed": {"name": "ODSPayInfoINTRPAYED", "type": "TFloatField"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xfgroupbox12": {"name": "XFGroupBox12", "type": "TXFGroupBox"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "pick1": {"name": "pick1", "type": "TDateTimePicker"}, "pick2": {"name": "pick2", "type": "TDateTimePicker"}, "xfgroupbox13": {"name": "XFGroupBox13", "type": "TXFGroupBox"}, "dtpfi": {"name": "dtpfi", "type": "TDateTimePicker"}, "xfradiogroup1": {"name": "XFRadioGroup1", "type": "TXFRadioGroup"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfgroupbox5": {"name": "XFGroupBox5", "type": "TXFGroupBox"}, "dblookupcomboboxeh6": {"name": "DBLookupComboboxEh6", "type": "TDBLookupComboboxEh"}, "xfcheckbox5": {"name": "XFCheckBox5", "type": "TXFCheckBox"}, "xfgroupbox9": {"name": "XFGroupBox9", "type": "TXFGroupBox"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "xfcheckbox9": {"name": "XFCheckBox9", "type": "TXFCheckBox"}, "xfgroupbox10": {"name": "XFGroupBox10", "type": "TXFGroupBox"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "xfcheckbox10": {"name": "XFCheckBox10", "type": "TXFCheckBox"}, "odspayinfofilial": {"name": "ODSPayInfoFILIAL", "type": "TWideStringField"}, "odspayinfodat": {"name": "ODSPayInfoDAT", "type": "TDateTimeField"}, "odspayinfopenaltyammount": {"name": "ODSPayInfoPENALTYAMMOUNT", "type": "TFloatField"}, "odspayinforrn": {"name": "ODSPayInfoRRN", "type": "TWideStringField"}, "odspayinfoekv_mainpayed": {"name": "ODSPayInfoEKV_MAINPAYED", "type": "TFloatField"}, "odspayinfoekv_intrest": {"name": "ODSPayInfoEKV_INTREST", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("frmPayRepFilter", null, "TfrmPayRepFilter");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "frmPayRepFilter")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmPayRepFilter", "BuildFilterString", async function BuildFilterString(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["concatfilter"] = $.fn(async function ConcatFilter(p0, p1, p2, p3) {
  const L1 = {"s": $.asRef(p0), "prefix": $.copyArg(p1), "checked": $.copyArg(p2), "keyvalue": $.copyArg(p3), result: undefined, "temp": ''};
  await $.fixArgs(L1, ["prefix", "checked", "keyvalue"]);
  L1["csformat"] = "(%s=%s)";
  if ($.truthy(L1["checked"])) {
    L1["temp"] = (await $.call(C, "Format", [L1["csformat"], [L1["prefix"], L1["keyvalue"]]]));
    if ($.truthy($.eq((await L1["s"].get()), ""))) {
      await L1["s"].set(L1["temp"]);
    } else {
      await L1["s"].set($.add($.add((await L1["s"].get()), "and "), L1["temp"]));
    }
  }
  return L1.result;
});
  L0["result"] = "";
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t1) => { L0["result"] = $t1; }), "CURRENCY", (await $.mv((await $.v(C, "XFCheckBox9")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t2) => { L0["result"] = $t2; }), "BRANCHID", (await $.mv((await $.v(C, "XFCheckBox10")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t3) => { L0["result"] = $t3; }), "USID", (await $.mv((await $.v(C, "XFCheckBox5")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh6")), "KeyValue"))])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfrmPayRepFilter", "GetReport", async function GetReport(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"repdataset": $.copyArg(p0), "procname": $.copyArg(p1), "reptype": $.copyArg(p2), "qrep": $.copyArg(p3), result: undefined, "res": '', "additionalparams": ''};
  await $.fixArgs(L0, ["repdataset", "procname", "reptype", "qrep"]);
  {
    const $t4 = (await $.wobj(C, "ODSCredits"));
    await $.mcall((await $.wv([$t4], "Session", C, false)), "Commit", []);
    await $.stmt($.wcall([$t4], "Close", [], C));
    if ($.truthy((await $.or_(($.ne((await $.wv([$t4], "BuildFilterString", C, false)), "")), async () => ($.ne((await $.wv([$t4], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false)), "")))))) {
      { const $t5 = await $.iset((await $.wv([$t4], "SQL", C, false)), [2], $.add($.add("where ", (await $.wv([$t4], "BuildFilterString", C, false))), (await $.wv([$t4], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false)))); if ($t5 !== undefined) { await $.wset([$t4], "SQL", $t5, C); } }
    } else {
      { const $t6 = await $.iset((await $.wv([$t4], "SQL", C, false)), [2], ""); if ($t6 !== undefined) { await $.wset([$t4], "SQL", $t6, C); } }
    }
    await $.stmt($.wcall([$t4], "Open", [], C));
    while ($.truthy($.not((await $.wv([$t4], "Eof", C, false))))) {
      await $.stmt((await $.mcall((await $.wv([$t4], "CM_REPORTS", C, false)), "CallProcedure", ["insrowpayment", ["p_ID", (await $.mv((await $.wv([$t4], "ODSCreditsID", C, false)), "AsVariant")), "p_bDate", (await $.wcall([$t4], "formatdatetime", ["dd-mmm-yyyy", (await $.mv((await $.wv([$t4], "pick1", C, false)), "date"))], C)), "p_eDate", (await $.wcall([$t4], "formatdatetime", ["dd-mmm-yyyy", (await $.mv((await $.wv([$t4], "pick2", C, false)), "date"))], C)), "p_intdate", (await $.wcall([$t4], "formatdatetime", ["dd-mmm-yyyy", (await $.mv((await $.wv([$t4], "dtpfi", C, false)), "date"))], C))]])));
      await $.stmt($.wcall([$t4], "Next", [], C));
      await $.tick();
    }
  }
  await $.mcall(L0["repdataset"], "Close", []);
  await $.mcall(L0["repdataset"], "Open", []);
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  if ($.truthy($.gt((await $.mv(L0["repdataset"], "RecordCount")), 0))) {
    {
      const $t7 = (await $.wobj(C, "Exporter"));
      await $.stmt($.wcall([$t7], "Connect", [], C));
      await $.stmt((await $.wcall([$t7], "ExportDataset", [(await $.wv([$t7], "RepDataSet", { get: async () => L0["repdataset"], set: async (v) => { L0["repdataset"] = v; }, local: true }, false)), "Report", (await $.wv([$t7], "true", C, false)), (await $.wv([$t7], "false", C, false))], C)));
      await $.stmt($.wcall([$t7], "ShowExcel", [], C));
    }
  } else {
    await $.stmt((await $.call(C, "Showmessage", ["Daxil edilen Məlumatlar bazada mövcud deyil"])));
  }
  return L0.result;
}, {"params": ["RepDataSet", "procname", "RepType", "QRep"], "kind": "procedure", "ptypes": ["TOracleDataSet", "String", "Byte", "TQuickRep"]});
  U.method("TfrmPayRepFilter", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "GetReport", [(await $.v(C, "ODSPayInfo")), "", 0, null])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPayRepFilter", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPayRepFilter", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh6")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "XFCheckBox9")), "Checked", false);
  await $.mset((await $.v(C, "XFCheckBox10")), "Checked", false);
  await $.mset((await $.v(C, "XFCheckBox5")), "Checked", false);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TfrmPayRepFilter", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": 0, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t8 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t9 = true;
    for (;;) {
      if (!$t9) { L0["i"] = $.succ(L0["i"], 1); }
      $t9 = false;
      if (!($.ord(L0["i"]) <= $.ord($t8))) break;
      if ($.truthy((await $.and_(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TOracleDataSet")), async () => ($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "tag")), 0)))))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
      }
      await $.tick();
    }
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmPayRepFilter", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": 0, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "pick1")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "pick2")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "dtpfi")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  { const $t10 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["a"] = 0;
    let $t11 = true;
    for (;;) {
      if (!$t11) { L0["a"] = $.succ(L0["a"], 1); }
      $t11 = false;
      if (!($.ord(L0["a"]) <= $.ord($t10))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["a"]])), "Tag")), 3112))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["a"]])), "Open", []);
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["a"]])), "CheckAll", []);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmPayRepFilter", (await $.mcall((await $.v(C, "TfrmPayRepFilter")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
