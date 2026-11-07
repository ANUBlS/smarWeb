// Generated from FrmAExUnitImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmAExUnitImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "ComCtrls", "Grids", "DBGridEh", "NLSLocalizer", "ImgList", "ToolWin", "ActnList", "StdCtrls", "CMExcelExport", "oracle", "oracledata", "ExtCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "Buttons", "CommonDecls", "SystemState", "DatModAexUnitImpl", "CreditPropertiesUnitImpl"]);
  const C = [U];
  U.defClass("TFrmAEx", "TForm", {"toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "grdate": {"name": "GRDate", "type": "TGroupBox"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "dtpexp": {"name": "DTPExp", "type": "TDateTimePicker"}, "actnrefresh": {"name": "ActnRefresh", "type": "TAction"}, "actncreditproperties": {"name": "ActnCreditProperties", "type": "TAction"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "actnexport": {"name": "ActnExport", "type": "TAction"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "actnsearch": {"name": "ActnSearch", "type": "TAction"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "actnfilter": {"name": "ActnFilter", "type": "TAction"}, "panelfilter": {"name": "PanelFilter", "type": "TPanel"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "panelsearch": {"name": "PanelSearch", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "editcontractaccno": {"name": "EditContractaccno", "type": "TEdit"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "editprincipal": {"name": "EditPRINCIPAL", "type": "TEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "editname": {"name": "EditName", "type": "TEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "editnumberofcredit": {"name": "EditNumberofcredit", "type": "TEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "cbvalute": {"name": "CBValute", "type": "TDBLookupComboboxEh"}, "chbvalute": {"name": "ChBValute", "type": "TCheckBox"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "cbfilial": {"name": "CBFilial", "type": "TDBLookupComboboxEh"}, "chbfilial": {"name": "ChBFilial", "type": "TCheckBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "cbpersons": {"name": "CBPersons", "type": "TDBLookupComboboxEh"}, "chbpersons": {"name": "ChBPersons", "type": "TCheckBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "cbcategories": {"name": "CBCategories", "type": "TDBLookupComboboxEh"}, "chbcategories": {"name": "ChBCategories", "type": "TCheckBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "cbcredittypes": {"name": "CBCreditTypes", "type": "TDBLookupComboboxEh"}, "chbcredittypes": {"name": "ChBCreditTypes", "type": "TCheckBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "cbreserves": {"name": "CBreserves", "type": "TDBLookupComboboxEh"}, "chbreserves": {"name": "ChBreserves", "type": "TCheckBox"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "actnexecutefilter": {"name": "ActnExecuteFilter", "type": "TAction"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "actnpayment": {"name": "ActnPayment", "type": "TAction"}, "dbgridehmain": {"name": "DBGridEhMain", "type": "TDBGridEh"}}, {});
  U.init(async () => {
    U.var_("FrmAEx", null, "TFrmAEx");
  });
  U.func("ShowExpires", async function ShowExpires(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dat": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dat"]);
  {
    const $t1 = (await $.wobj(C, "DatModAex"));
    const $t2 = (await $.wv([$t1], "DatSetExpCredits", C, false));
    if ($.truthy((await $.wv([$t1, $t2], "Active", C, false)))) {
      await $.stmt($.wcall([$t1, $t2], "Close", [], C));
    }
    await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["OrderField", "NumberOfcredit"], C)));
    await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["PDat", (await $.wv([$t1, $t2], "Dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1, $t2], "Open", [], C));
  }
  {
    const $t3 = (await $.wobj(C, "FrmAEx"));
    await $.mset((await $.wv([$t3], "GRDate", C, false)), "Visible", (await $.wv([$t3], "False", C, false)));
    await $.stmt($.wcall([$t3], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Dat"], "kind": "procedure", "ptypes": ["TDateTime"]});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mset((await $.mv((await $.v(C, "FrmAEx")), "GRDate")), "Visible", true);
  await $.mcall((await $.v(C, "FrmAEx")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmAEx", "LoadPayment", async function LoadPayment(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"crdid": $.copyArg(p0), result: undefined, "applicationdir": '', "pluginhandle": 0, "exportpayment": null};
  await $.fixArgs(L0, ["crdid"]);
  L0["applicationdir"] = (await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "CommonApplication")), "ExeName"))]));
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add(L0["applicationdir"], "cm_payment.bpl")]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportpayment"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], "ExportPayment"]));
    await $.stmt((await $.callv(L0["exportpayment"], [L0["crdid"]])));
  }
  return L0.result;
}, {"params": ["CrdID"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TFrmAEx", "SetKeyValue", async function SetKeyValue(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t4 = (await $.wobj(C, "CBValute"));
    await $.wset([$t4], "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t4], "ListSource", C, false)), "DataSet")), "FieldByName", ["Valute"])), "AsInteger")), C);
  }
  {
    const $t5 = (await $.wobj(C, "CBFilial"));
    await $.wset([$t5], "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t5], "ListSource", C, false)), "DataSet")), "FieldByName", ["ID"])), "AsInteger")), C);
  }
  {
    const $t6 = (await $.wobj(C, "CBPersons"));
    await $.wset([$t6], "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t6], "ListSource", C, false)), "DataSet")), "FieldByName", ["ID"])), "AsInteger")), C);
  }
  {
    const $t7 = (await $.wobj(C, "CBCategories"));
    await $.wset([$t7], "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t7], "ListSource", C, false)), "DataSet")), "FieldByName", ["ID"])), "AsInteger")), C);
  }
  {
    const $t8 = (await $.wobj(C, "CBCreditTypes"));
    await $.wset([$t8], "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t8], "ListSource", C, false)), "DataSet")), "FieldByName", ["ID"])), "AsInteger")), C);
  }
  {
    const $t9 = (await $.wobj(C, "CBreserves"));
    await $.wset([$t9], "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "ListSource", C, false)), "DataSet")), "FieldByName", ["ID"])), "AsInteger")), C);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmAEx", "BuildFilterString", async function BuildFilterString(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
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
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t10) => { L0["result"] = $t10; }), "CURRENCY", (await $.mv((await $.v(C, "ChBValute")), "Checked")), (await $.mv((await $.v(C, "CBValute")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t11) => { L0["result"] = $t11; }), "BRANCHID", (await $.mv((await $.v(C, "ChBFilial")), "Checked")), (await $.mv((await $.v(C, "CBFilial")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t12) => { L0["result"] = $t12; }), "RESERVEID", (await $.mv((await $.v(C, "ChBreserves")), "Checked")), (await $.mv((await $.v(C, "CBreserves")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t13) => { L0["result"] = $t13; }), "PERSONALTYPE", (await $.mv((await $.v(C, "ChBPersons")), "Checked")), (await $.mv((await $.v(C, "CBPersons")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t14) => { L0["result"] = $t14; }), "CUSTOMERTYPE", (await $.mv((await $.v(C, "ChBCategories")), "Checked")), (await $.mv((await $.v(C, "CBCategories")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t15) => { L0["result"] = $t15; }), "CREDITTYPE", (await $.mv((await $.v(C, "ChBCreditTypes")), "Checked")), (await $.mv((await $.v(C, "CBCreditTypes")), "KeyValue"))])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmAEx", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DatModAex", (await $.mcall((await $.v(C, "TDatModAex")), "Create", [Self])));
  await $.set(C, "FrmCreditProperties", (await $.mcall((await $.v(C, "TFrmCreditProperties")), "Create", [Self])));
  await $.mset((await $.v(C, "DTPExp")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.stmt($.call(C, "SetKeyValue", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAEx", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FrmCreditProperties")), "Free", []);
  await $.mcall((await $.v(C, "DatModAex")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAEx", "ActnRefreshExecute", async function ActnRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "contrldate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["contrldate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPExp")), "DateTime"))]))]));
  {
    const $t16 = (await $.wobj(C, "DatModAex"));
    const $t17 = (await $.wv([$t16], "DatSetExpCredits", C, false));
    if ($.truthy((await $.wv([$t16, $t17], "Active", C, false)))) {
      await $.stmt($.wcall([$t16, $t17], "Close", [], C));
    }
    await $.stmt((await $.wcall([$t16, $t17], "SetVariable", ["OrderField", "exdatcount"], C)));
    await $.stmt((await $.wcall([$t16, $t17], "SetVariable", ["Dat", (await $.wv([$t16, $t17], "ContrlDate", { get: async () => L0["contrldate"], set: async (v) => { L0["contrldate"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t16, $t17], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAEx", "ActnCreditPropertiesExecute", async function ActnCreditPropertiesExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "creditid": 0, "creditnum": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t18 = (await $.wobj(C, "DatModAex"));
    {
      const $t19 = (await $.wv([$t18], "DatSetExpCredits", C, false));
      await $.wset([$t18, $t19], "CreditID", (await $.mv((await $.wcall([$t18, $t19], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true });
      await $.wset([$t18, $t19], "CreditNum", (await $.mv((await $.wcall([$t18, $t19], "FieldByName", ["NumberofCredit"], C)), "AsString")), { get: async () => L0["creditnum"], set: async (v) => { L0["creditnum"] = v; }, local: true });
    }
    {
      const $t20 = (await $.wv([$t18], "DatSetPayments", C, false));
      if ($.truthy((await $.wv([$t18, $t20], "Active", C, false)))) {
        await $.stmt($.wcall([$t18, $t20], "Close", [], C));
      }
      await $.stmt((await $.wcall([$t18, $t20], "SetVariable", ["CrdID", (await $.wv([$t18, $t20], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t18, $t20], "Open", [], C));
    }
    {
      const $t21 = (await $.wv([$t18], "DatSetSchedule", C, false));
      if ($.truthy((await $.wv([$t18, $t21], "Active", C, false)))) {
        await $.stmt($.wcall([$t18, $t21], "Close", [], C));
      }
      await $.stmt((await $.wcall([$t18, $t21], "SetVariable", ["CrdID", (await $.wv([$t18, $t21], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t18, $t21], "Open", [], C));
    }
    {
      const $t22 = (await $.wv([$t18], "DatSetTranches", C, false));
      if ($.truthy((await $.wv([$t18, $t22], "Active", C, false)))) {
        await $.stmt($.wcall([$t18, $t22], "Close", [], C));
      }
      await $.stmt((await $.wcall([$t18, $t22], "SetVariable", ["CrdID", (await $.wv([$t18, $t22], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t18, $t22], "Open", [], C));
    }
    {
      const $t23 = (await $.wv([$t18], "DatSetInterests", C, false));
      if ($.truthy((await $.wv([$t18, $t23], "Active", C, false)))) {
        await $.stmt($.wcall([$t18, $t23], "Close", [], C));
      }
      await $.stmt((await $.wcall([$t18, $t23], "SetVariable", ["CrdID", (await $.wv([$t18, $t23], "CreditID", { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t18, $t23], "Open", [], C));
    }
    {
      const $t24 = (await $.wv([$t18], "FrmCreditProperties", C, false));
      await $.mset((await $.wv([$t18, $t24], "NLSCreditProperties", C, false)), "Caption", $.add((await $.wv([$t18, $t24], "CreditNum", { get: async () => L0["creditnum"], set: async (v) => { L0["creditnum"] = v; }, local: true }, false)), " №-li kreditin verilənləri"));
      await $.stmt($.wcall([$t18, $t24], "ShowModal", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAEx", "ActnExportExecute", async function ActnExportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t25 = (await $.wobj(C, "ExcelExport"));
    await $.stmt($.wcall([$t25], "Connect", [], C));
    await $.stmt((await $.wcall([$t25], "ExportDataset", [(await $.mv((await $.wv([$t25], "DatModAex", C, false)), "DatSetExpCredits")), "Ğecikmələr", (await $.wv([$t25], "true", C, false))], C)));
    await $.stmt($.wcall([$t25], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAEx", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAEx", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmAEx", "DBGridEhMainTitleBtnClick", async function DBGridEhMainTitleBtnClick(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acol": $.copyArg(p1), "column": $.copyArg(p2), result: undefined, "sortfield": ''};
  await $.fixArgs(L0, ["sender", "acol", "column"]);
  L0["sortfield"] = (await $.mv(L0["column"], "FieldName"));
  if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "SortMarker")), (await $.v(C, "smDownEh"))))) {
    L0["sortfield"] = $.add(L0["sortfield"], " DESC");
  }
  {
    const $t26 = (await $.wobj(C, "DBGridEhMain"));
    const $t27 = (await $.wcall([$t26], "TOracleDataSet", [(await $.mv((await $.wv([$t26], "DataSource", C, false)), "DataSet"))], C));
    await $.stmt($.wcall([$t26, $t27], "close", [], C));
    await $.stmt((await $.wcall([$t26, $t27], "SetVariable", ["OrderField", (await $.wv([$t26, $t27], "SortField", { get: async () => L0["sortfield"], set: async (v) => { L0["sortfield"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t26, $t27], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender", "ACol", "Column"], "kind": "procedure", "ptypes": ["TObject", "Integer", "TColumnEh"]});
  U.method("TFrmAEx", "ActnSearchExecute", async function ActnSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t28 = L0["sender"];
    await $.wset([$t28], "SearchField", (await $.wcall([$t28], "copy", [(await $.wv([$t28], "Name", C, false)), 5, (await $.wcall([$t28], "length", [(await $.wv([$t28], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t29 = (await $.wcall([$t28], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t28], "DBGridEhMain", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t28, $t29], "SearchRecord", [(await $.wv([$t28, $t29], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t28, $t29], "Text", C, false)), $.add((await $.wv([$t28, $t29], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t28, $t29], "srFromCurrent", C, false)), (await $.wv([$t28, $t29], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t28, $t29], "MessageDlg", [$.add($.add(" Axtarış sona çatdı  .", "\r"), " davam etmək istəyirsinizmi ? "), (await $.wv([$t28, $t29], "mtInformation", C, false)), [(await $.wv([$t28, $t29], "mbNo", C, false)), (await $.wv([$t28, $t29], "mbYes", C, false))], 0], C)), (await $.wv([$t28, $t29], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t28, $t29], "SearchRecord", [(await $.wv([$t28, $t29], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t28, $t29], "Text", C, false)), $.add((await $.wv([$t28, $t29], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t28, $t29], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t28, $t29], "MessageDlg", [" Yazı tapılmadı !", (await $.wv([$t28, $t29], "mtInformation", C, false)), [(await $.wv([$t28, $t29], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAEx", "EditNumberofcreditKeyPress", async function EditNumberofcreditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN")))), async () => ($.ne((await $.mv((L0["sender"]), "Text")), "")))))) {
    await $.stmt((await $.call(C, "ActnSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmAEx", "EditNumberofcreditExit", async function EditNumberofcreditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAEx", "ToolButton9Click", async function ToolButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t30 = (L0["sender"]);
    await $.wset([$t30], "Down", $.not((await $.mv((await $.wv([$t30], "PanelSearch", C, false)), "Visible"))), C);
  }
  await $.mset((await $.v(C, "PanelSearch")), "Visible", $.not((await $.mv((await $.v(C, "PanelSearch")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAEx", "ActnFilterExecute", async function ActnFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PanelFilter")), "Visible", $.not((await $.mv((await $.v(C, "PanelFilter")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAEx", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PanelFilter")), "Visible", $.not((await $.mv((await $.v(C, "PanelFilter")), "Visible"))));
  await $.mset((await $.v(C, "ToolButton11")), "Down", $.not((await $.mv((await $.v(C, "ToolButton11")), "Down"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAEx", "ActnExecuteFilterExecute", async function ActnExecuteFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t31 = (await $.wobj(C, "DBGridEhMain"));
    const $t32 = (await $.mv((await $.wv([$t31], "DataSource", C, false)), "DataSet"));
    await $.wset([$t31, $t32], "Filter", (await $.wv([$t31, $t32], "BuildFilterString", C, false)), C);
    await $.wset([$t31, $t32], "Filtered", (await $.wv([$t31, $t32], "False", C, false)), C);
    await $.wset([$t31, $t32], "Filtered", (await $.wv([$t31, $t32], "True", C, false)), C);
    await $.mcall((await $.wv([$t31, $t32], "SelectedRows", C, false)), "Clear", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAEx", "ActnPaymentExecute", async function ActnPaymentExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "creditid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t33 = (await $.wobj(C, "DatModAex"));
    const $t34 = (await $.wv([$t33], "DatSetExpCredits", C, false));
    await $.wset([$t33, $t34], "creditid", (await $.mv((await $.wcall([$t33, $t34], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["creditid"], set: async (v) => { L0["creditid"] = v; }, local: true });
  }
  await $.stmt((await $.call(C, "LoadPayment", [L0["creditid"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmAEx", (await $.mcall((await $.v(C, "TFrmAEx")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
