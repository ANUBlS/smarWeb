// Generated from MISImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("MISImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "CMExcelExport", "StdCtrls", "CheckLst", "Evanescence", "ComCtrls", "ExtCtrls", "Buttons", "KeyListBox", "Mask", "DBCtrlsEh", "ExcelXP", "DBLookupEh", "DBGridEh", "sboapiDataModuleImpl", "CommonDecls", "sbsystem", "MISDmImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TMISForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "lookvalute": {"name": "LookValute", "type": "TEvanescence"}, "lookusrgrp": {"name": "LookUsrGrp", "type": "TEvanescence"}, "lookpersoneltype": {"name": "LookPersonelType", "type": "TEvanescence"}, "lookbranch": {"name": "LookBranch", "type": "TEvanescence"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "tarix": {"name": "Tarix", "type": "TDateTimePicker"}, "challvalute": {"name": "challValute", "type": "TButton"}, "unchallvalute": {"name": "unchallValute", "type": "TButton"}, "challusrgrp": {"name": "challUsrGrp", "type": "TButton"}, "unchallusrgrp": {"name": "unchallUsrGrp", "type": "TButton"}, "challbranch": {"name": "challBranch", "type": "TButton"}, "unchallbranch": {"name": "unchallBranch", "type": "TButton"}, "challpersonaltype": {"name": "challPersonalType", "type": "TButton"}, "unchallpersonaltype": {"name": "unchallPersonalType", "type": "TButton"}, "panel3": {"name": "Panel3", "type": "TGroupBox"}, "buttonexport": {"name": "ButtonExport", "type": "TBitBtn"}, "closebtn": {"name": "CloseBtn", "type": "TBitBtn"}, "sblistbox": {"name": "SBListBox", "type": "TKeyListBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "spup": {"name": "spUP", "type": "TSpeedButton"}, "spdown": {"name": "spDown", "type": "TSpeedButton"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "checkbox5": {"name": "CheckBox5", "type": "TCheckBox"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "checkbox7": {"name": "CheckBox7", "type": "TCheckBox"}, "dblookupcomboboxeh7": {"name": "DBLookupComboboxEh7", "type": "TDBLookupComboboxEh"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "checkbox10": {"name": "CheckBox10", "type": "TCheckBox"}, "dblookupcomboboxeh10": {"name": "DBLookupComboboxEh10", "type": "TDBLookupComboboxEh"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "checkbox9": {"name": "CheckBox9", "type": "TCheckBox"}, "dblookupcomboboxeh9": {"name": "DBLookupComboboxEh9", "type": "TDBLookupComboboxEh"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "chbactcrd": {"name": "ChBActCrd", "type": "TCheckBox"}, "chbcloscrd": {"name": "ChBClosCrd", "type": "TCheckBox"}, "chbcalcint": {"name": "ChBCalcInt", "type": "TCheckBox"}, "chbstopint": {"name": "ChBStopInt", "type": "TCheckBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dtpb": {"name": "DTPB", "type": "TDateTimePicker"}, "dtpe": {"name": "DTPE", "type": "TDateTimePicker"}, "label6": {"name": "Label6", "type": "TLabel"}, "cbonlyrest": {"name": "CBOnlyRest", "type": "TCheckBox"}, "misexcelexport_xx": {"name": "MisExcelExport_xx", "type": "TCMExcelExport"}, "button1": {"name": "Button1", "type": "TButton"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "radiogroup1": {"name": "RadioGroup1", "type": "TRadioGroup"}, "cmexcelexport2": {"name": "CMExcelExport2", "type": "TCMExcelExport"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "misexcelexport": {"name": "MisExcelExport", "type": "TCMExcelExport"}}, {});
  U.init(async () => {
    U.const("rsErrorValute", "Ən azı bir valyuta seçilməlidir!");
    U.const("rsErrorUsrGrp", "Ən azı bir istifadəçi qurupu seçilməlidir!");
    U.const("rsErrorPersonaltype", "Ən azı bir müştəri tipi seçilməlidir!");
    U.const("rsErrorBranch", "Ən azı bir filial seçilməlidir!");
    U.const("rsInfScriptStarted", "İxrac başladı");
    U.const("rsInfRowsExported", "%d sətir ixrac olundu");
    U.const("rsInfExportFinished", "İxrac qurtardı");
    U.var_("MISForm", null, "TMISForm");
  });
  U.method("TMISForm", "BuildFilterString", async function BuildFilterString(Self) {
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
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t1) => { L0["result"] = $t1; }), "H.RESERVEID", (await $.mv((await $.v(C, "CheckBox5")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh5")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t2) => { L0["result"] = $t2; }), "H.DUERESERVEID", (await $.mv((await $.v(C, "CheckBox2")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t3) => { L0["result"] = $t3; }), "P.PERSONALTYPE", (await $.mv((await $.v(C, "CheckBox7")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh7")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t4) => { L0["result"] = $t4; }), "G.pledgeid", (await $.mv((await $.v(C, "CheckBox10")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh10")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t5) => { L0["result"] = $t5; }), "P.credittype", (await $.mv((await $.v(C, "CheckBox9")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh9")), "KeyValue"))])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("ErrorInCheck", async function ErrorInCheck(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"look": $.copyArg(p0), "errormsg": (p1 === undefined ? "" : p1), result: false};
  await $.fixArgs(L0, ["look", "errormsg"]);
  L0["result"] = true;
  if ($.truthy($.eq((await $.mv((await $.mv(L0["look"], "GetCheckedKeyList")), "Count")), 0))) {
    L0["result"] = false;
  }
  if ($.truthy((await $.and_(($.ne(L0["errormsg"], "")), async () => ($.not(L0["result"])))))) {
    await $.stmt((await $.call(C, "ShowMessage", [L0["errormsg"]])));
  }
  return L0.result;
}, {"params": ["Look", "ErrorMsg"], "kind": "function", "ptypes": ["TEvanescence", "String"]});
  U.method("TMISForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.mv((await $.v(C, "MISDm")), "OracleDataSet2"));
    if ($.truthy((await $.wv([$t6], "Active", C, false)))) {
      await $.stmt($.wcall([$t6], "close", [], C));
    }
    await $.stmt($.wcall([$t6], "open", [], C));
  }
  {
    const $t7 = (await $.wobj(C, "CMExcelExport1"));
    await $.stmt($.wcall([$t7], "Connect", [], C));
    await $.stmt((await $.wcall([$t7], "ExportDataset", [(await $.mv((await $.wv([$t7], "MISDm", C, false)), "OracleDataSet2")), "Zaminler", (await $.wv([$t7], "true", C, false)), (await $.wv([$t7], "true", C, false))], C)));
    await $.stmt($.wcall([$t7], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMISForm", "ButtonExportClick", async function ButtonExportClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "additionalparams": '', "restsstr": '', "chpaystr": '', "sortby": '', "filterstr": '', "checkstr": '', "checkstr1": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["filterstr"] = "";
  L0["checkstr"] = "";
  L0["chpaystr"] = "";
  L0["restsstr"] = "";
  L0["filterstr"] = (await $.v(C, "BuildFilterString"));
  if ($.truthy((await $.and_((await $.mv((await $.v(C, "ChBActCrd")), "checked")), async () => $.not((await $.mv((await $.v(C, "ChBClosCrd")), "checked"))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "MISDm")), "MISData")), "SetVariable", ["partName", " partition(activecredits) "])));
  }
  if ($.truthy((await $.mv((await $.v(C, "CBOnlyRest")), "checked")))) {
    L0["restsstr"] = "(h.rest + h.duerest+ h.interestrest+h.dueinterestrest)>0";
  }
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "checked")))) {
    L0["checkstr"] = "((p.partitionkey=0) or (p.closedate>add_months(sbop.get_date,-1))) ";
  }
  if ($.truthy((await $.and_((await $.mv((await $.v(C, "ChBClosCrd")), "checked")), async () => $.not((await $.mv((await $.v(C, "ChBActCrd")), "checked"))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "MISDm")), "MISData")), "SetVariable", ["partName", " partition(inactivecredits) "])));
  }
  if ($.truthy((await $.and_((await $.mv((await $.v(C, "ChBClosCrd")), "checked")), async () => (await $.mv((await $.v(C, "ChBActCrd")), "checked")))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "MISDm")), "MISData")), "SetVariable", ["partName", " "])));
  }
  if ($.truthy((await $.and_((await $.mv((await $.v(C, "ChBCalcInt")), "checked")), async () => $.not((await $.mv((await $.v(C, "ChBStopInt")), "checked"))))))) {
    L0["checkstr1"] = " (h.stopcalcdate is null)  ";
  }
  if ($.truthy((await $.and_((await $.mv((await $.v(C, "ChBStopInt")), "checked")), async () => $.not((await $.mv((await $.v(C, "ChBCalcInt")), "checked"))))))) {
    L0["checkstr1"] = " (h.stopcalcdate is not null ) ";
  }
  if ($.truthy((await $.and_((await $.mv((await $.v(C, "ChBStopInt")), "checked")), async () => (await $.mv((await $.v(C, "ChBCalcInt")), "checked")))))) {
    L0["checkstr1"] = " ((h.stopcalcdate is not null)  or (h.stopcalcdate is  null))  ";
  }
  if ($.truthy((await $.and_(($.ne(L0["checkstr1"], "")), async () => ($.eq(L0["checkstr"], "")))))) {
    L0["checkstr"] = L0["checkstr1"];
  }
  if ($.truthy((await $.and_(($.ne(L0["checkstr1"], "")), async () => ($.ne(L0["checkstr"], "")))))) {
    L0["checkstr"] = $.add($.add(L0["checkstr"], " and "), L0["checkstr1"]);
  }
  if ($.truthy((await $.and_(($.ne(L0["checkstr"], "")), async () => ($.ne(L0["filterstr"], "")))))) {
    L0["filterstr"] = $.add($.add(L0["filterstr"], " AND "), L0["checkstr"]);
  }
  if ($.truthy((await $.and_(($.ne(L0["checkstr"], "")), async () => ($.eq(L0["filterstr"], "")))))) {
    L0["filterstr"] = L0["checkstr"];
  }
  L0["filterstr"] = $.add(L0["filterstr"], L0["chpaystr"]);
  if ($.truthy($.ne(L0["filterstr"], ""))) {
    L0["additionalparams"] = $.add(" AND ", L0["filterstr"]);
  } else {
    L0["additionalparams"] = "";
  }
  L0["sortby"] = (await $.mv((await $.mv((await $.v(C, "SBListBox")), "GetCheckedKeyList")), "CommaText"));
  if ($.truthy($.not((await $.call(C, "ErrorInCheck", [(await $.v(C, "LookValute")), (await $.v(C, "rsErrorValute"))]))))) {
    return L0.result;
  }
  if ($.truthy($.not((await $.call(C, "ErrorInCheck", [(await $.v(C, "LookUsrGrp")), (await $.v(C, "rsErrorUsrGrp"))]))))) {
    return L0.result;
  }
  if ($.truthy($.not((await $.call(C, "ErrorInCheck", [(await $.v(C, "LookPersonelType")), (await $.v(C, "rsErrorPersonaltype"))]))))) {
    return L0.result;
  }
  if ($.truthy($.not((await $.call(C, "ErrorInCheck", [(await $.v(C, "LookBranch")), (await $.v(C, "rsErrorBranch"))]))))) {
    return L0.result;
  }
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "LookValute")), "GetCheckedKeyList")), "Count")), (await $.mv((await $.mv((await $.v(C, "LookValute")), "Items")), "Count")))))) {
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " AND p.CURRENCY in("), (await $.mv((await $.mv((await $.v(C, "LookValute")), "GetCheckedKeyList")), "CommaText"))), ")"), "\r\n");
  }
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "LookUsrGrp")), "GetCheckedKeyList")), "Count")), (await $.mv((await $.mv((await $.v(C, "LookUsrGrp")), "Items")), "Count")))))) {
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " AND p.USRGROUP in("), (await $.mv((await $.mv((await $.v(C, "LookUsrGrp")), "GetCheckedKeyList")), "CommaText"))), ")"), "\r\n");
  }
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "LookPersonelType")), "GetCheckedKeyList")), "Count")), (await $.mv((await $.mv((await $.v(C, "LookPersonelType")), "Items")), "Count")))))) {
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " AND p.CUSTOMERTYPE in("), (await $.mv((await $.mv((await $.v(C, "LookPersonelType")), "GetCheckedKeyList")), "CommaText"))), ")"), "\r\n");
  }
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "LookBranch")), "GetCheckedKeyList")), "Count")), (await $.mv((await $.mv((await $.v(C, "LookBranch")), "Items")), "Count")))))) {
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " AND p.BRANCHID in("), (await $.mv((await $.mv((await $.v(C, "LookBranch")), "GetCheckedKeyList")), "CommaText"))), ")"), "\r\n");
  }
  if ($.truthy($.ne(L0["restsstr"], ""))) {
    L0["additionalparams"] = $.add($.add(L0["additionalparams"], " and "), L0["restsstr"]);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 0))) {
    {
      const $t8 = (await $.wobj(C, "MISDm"));
      const $t9 = (await $.wv([$t8], "MISData", C, false));
      await $.stmt($.wcall([$t8, $t9], "Close", [], C));
      { const $t10 = await $.iset((await $.wv([$t8, $t9], "SQL", C, false)), [246], (await $.wv([$t8, $t9], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false))); if ($t10 !== undefined) { await $.wset([$t8, $t9], "SQL", $t10, C); } }
      await $.stmt((await $.wcall([$t8, $t9], "SetVariable", ["hdat", (await $.wcall([$t8, $t9], "integer", [(await $.wcall([$t8, $t9], "trunc", [(await $.mv((await $.wv([$t8, $t9], "Tarix", C, false)), "DateTime"))], C))], C))], C)));
      await $.stmt((await $.wcall([$t8, $t9], "SetVariable", ["bdat", (await $.wcall([$t8, $t9], "integer", [(await $.wcall([$t8, $t9], "trunc", [(await $.mv((await $.wv([$t8, $t9], "DTPB", C, false)), "DateTime"))], C))], C))], C)));
      await $.stmt((await $.wcall([$t8, $t9], "SetVariable", ["edat", (await $.wcall([$t8, $t9], "integer", [(await $.wcall([$t8, $t9], "trunc", [(await $.mv((await $.wv([$t8, $t9], "DTPE", C, false)), "DateTime"))], C))], C))], C)));
      await $.stmt((await $.wcall([$t8, $t9], "LogInformation", [(await $.wv([$t8, $t9], "rsInfScriptStarted", C, false))], C)));
      await $.stmt($.wcall([$t8, $t9], "Open", [], C));
    }
    {
      const $t11 = (await $.wobj(C, "MisExcelExport"));
      await $.stmt($.wcall([$t11], "Connect", [], C));
      await $.stmt((await $.wcall([$t11], "ExportDataset", [(await $.mv((await $.wv([$t11], "MISDm", C, false)), "MISData")), "MIS", (await $.wv([$t11], "true", C, false)), (await $.wv([$t11], "true", C, false))], C)));
      await $.stmt($.wcall([$t11], "Disconnect", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 1))) {
    {
      const $t12 = (await $.mv((await $.v(C, "MISDm")), "OracleDataSet2"));
      if ($.truthy((await $.wv([$t12], "Active", C, false)))) {
        await $.stmt($.wcall([$t12], "close", [], C));
      }
      { const $t13 = await $.iset((await $.wv([$t12], "SQL", C, false)), [7], (await $.wv([$t12], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false))); if ($t13 !== undefined) { await $.wset([$t12], "SQL", $t13, C); } }
      await $.stmt($.wcall([$t12], "open", [], C));
    }
    {
      const $t14 = (await $.wobj(C, "CMExcelExport1"));
      await $.stmt($.wcall([$t14], "Connect", [], C));
      await $.stmt((await $.wcall([$t14], "ExportDataset", [(await $.mv((await $.wv([$t14], "MISDm", C, false)), "OracleDataSet2")), "Zaminler", (await $.wv([$t14], "true", C, false)), (await $.wv([$t14], "true", C, false))], C)));
      await $.stmt($.wcall([$t14], "Disconnect", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 2))) {
    {
      const $t15 = (await $.mv((await $.v(C, "MISDm")), "OracleDataSet3"));
      if ($.truthy((await $.wv([$t15], "Active", C, false)))) {
        await $.stmt($.wcall([$t15], "close", [], C));
      }
      { const $t16 = await $.iset((await $.wv([$t15], "SQL", C, false)), [14], (await $.wv([$t15], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false))); if ($t16 !== undefined) { await $.wset([$t15], "SQL", $t16, C); } }
      await $.stmt($.wcall([$t15], "open", [], C));
    }
    {
      const $t17 = (await $.wobj(C, "CMExcelExport2"));
      await $.stmt($.wcall([$t17], "Connect", [], C));
      await $.stmt((await $.wcall([$t17], "ExportDataset", [(await $.mv((await $.wv([$t17], "MISDm", C, false)), "OracleDataSet3")), "İpoteka", (await $.wv([$t17], "true", C, false)), (await $.wv([$t17], "true", C, false))], C)));
      await $.stmt($.wcall([$t17], "Disconnect", [], C));
    }
  }
  await $.stmt((await $.call(C, "LogInformation", [(await $.v(C, "rsInfExportFinished"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMISForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t18 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t19 = true;
    for (;;) {
      if (!$t19) { L0["i"] = $.succ(L0["i"], 1); }
      $t19 = false;
      if (!($.ord(L0["i"]) <= $.ord($t18))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 3112))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "CheckAll", []);
      }
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "Tarix")), "Date", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "DTPB")), "Date", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "DTPE")), "Date", (await $.v(C, "Get_CurrentDate")));
  { const $t20 = 2;
    L0["i"] = 0;
    let $t21 = true;
    for (;;) {
      if (!$t21) { L0["i"] = $.succ(L0["i"], 1); }
      $t21 = false;
      if (!($.ord(L0["i"]) <= $.ord($t20))) break;
      { const $t22 = await $.iset((await $.mv((await $.v(C, "SBListBox")), "Checked")), [L0["i"]], true); if ($t22 !== undefined) { await $.mset((await $.v(C, "SBListBox")), "Checked", $t22); } }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMISForm", "CheckAllValuteClick", async function CheckAllValuteClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "LookValute")), "CheckAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMISForm", "UnCheckAllValuteClick", async function UnCheckAllValuteClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "LookValute")), "UncheckAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMISForm", "challBranchClick", async function challBranchClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "LookBranch")), "CheckAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMISForm", "unchallBranchClick", async function unchallBranchClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "LookBranch")), "UncheckAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMISForm", "challUsrGrpClick", async function challUsrGrpClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "LookUsrGrp")), "CheckAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMISForm", "unchallUsrGrpClick", async function unchallUsrGrpClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "LookUsrGrp")), "UncheckAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMISForm", "challPersonalTypeClick", async function challPersonalTypeClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "LookPersonelType")), "CheckAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMISForm", "unchallPersonalTypeClick", async function unchallPersonalTypeClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "LookPersonelType")), "UncheckAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMISForm", "spUPClick", async function spUPClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "idx": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["idx"] = (await $.mv((await $.v(C, "SBListBox")), "ItemIndex"));
  {
    const $t23 = (await $.wobj(C, "SbListBox"));
    const $t24 = (await $.wv([$t23], "Items", C, false));
    if ($.truthy($.gt((await $.wv([$t23, $t24], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), 0))) {
      await $.stmt((await $.wcall([$t23, $t24], "Move", [(await $.wv([$t23, $t24], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), $.sub((await $.wv([$t23, $t24], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), 1)], C)));
      await $.stmt((await $.mcall((await $.wv([$t23, $t24], "Keys", C, false)), "Move", [(await $.wv([$t23, $t24], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), $.sub((await $.wv([$t23, $t24], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), 1)])));
      if ($.truthy($.ge((await $.wv([$t23, $t24], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), 1))) {
        await $.wset([$t23, $t24], "ItemIndex", $.sub((await $.wv([$t23, $t24], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), 1), C);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMISForm", "spDownClick", async function spDownClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "idx": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["idx"] = (await $.mv((await $.v(C, "SBListBox")), "ItemIndex"));
  {
    const $t25 = (await $.wobj(C, "SbListBox"));
    const $t26 = (await $.wv([$t25], "Items", C, false));
    if ($.truthy((await $.and_(($.ne((await $.wv([$t25, $t26], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), (-(1)))), async () => ($.lt((await $.wv([$t25, $t26], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), $.sub((await $.mv((await $.wv([$t25, $t26], "Items", C, false)), "Count")), 1))))))) {
      await $.stmt((await $.wcall([$t25, $t26], "Move", [(await $.wv([$t25, $t26], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), $.add((await $.wv([$t25, $t26], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), 1)], C)));
      await $.stmt((await $.mcall((await $.wv([$t25, $t26], "Keys", C, false)), "Move", [(await $.wv([$t25, $t26], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), $.add((await $.wv([$t25, $t26], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), 1)])));
      if ($.truthy($.le((await $.wv([$t25, $t26], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), $.sub((await $.mv((await $.wv([$t25, $t26], "Items", C, false)), "Count")), 1)))) {
        await $.wset([$t25, $t26], "ItemIndex", $.add((await $.wv([$t25, $t26], "IDX", { get: async () => L0["idx"], set: async (v) => { L0["idx"] = v; }, local: true }, false)), 1), C);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMISForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "MisExcelExport")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TMISForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "MISDm", (await $.mcall((await $.v(C, "TMISDm")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMISForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "MISDm")), "free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
