// Generated from frmipexpimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmipexpimpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "NLSDialogs", "StdCtrls", "NLSLocalizer", "Db", "OracleData", "CMExcelExport", "CheckLst", "Evanescence", "ExtCtrls", "Buttons", "ComCtrls", "dmipexpImpl", "CommonDecls", "systemstate"]);
  const C = [U];
  U.defClass("Tfrmipexp", "TForm", {"excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "unchallvalute": {"name": "unchallValute", "type": "TButton"}, "label2": {"name": "Label2", "type": "TLabel"}, "challvalute": {"name": "challValute", "type": "TButton"}, "label5": {"name": "Label5", "type": "TLabel"}, "lookvalute": {"name": "LookValute", "type": "TEvanescence"}, "lookbranch": {"name": "LookBranch", "type": "TEvanescence"}, "label4": {"name": "Label4", "type": "TLabel"}, "unchallusrgrp": {"name": "unchallUsrGrp", "type": "TButton"}, "challusrgrp": {"name": "challUsrGrp", "type": "TButton"}, "label3": {"name": "Label3", "type": "TLabel"}, "lookusrgrp": {"name": "LookUsrGrp", "type": "TEvanescence"}, "lookpersoneltype": {"name": "LookPersonelType", "type": "TEvanescence"}, "challbranch": {"name": "challBranch", "type": "TButton"}, "unchallbranch": {"name": "unchallBranch", "type": "TButton"}, "challpersonaltype": {"name": "challPersonalType", "type": "TButton"}, "unchallpersonaltype": {"name": "unchallPersonalType", "type": "TButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "label1": {"name": "Label1", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "checklistbox1": {"name": "CheckListBox1", "type": "TCheckListBox"}, "checklistbox2": {"name": "CheckListBox2", "type": "TCheckListBox"}, "checklistbox3": {"name": "CheckListBox3", "type": "TCheckListBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.const("rsErrorValute", "Ən azı bir valyuta seçilməlidir!");
    U.const("rsErrorUsrGrp", "Ən azı bir istifadəçi qrupu seçilməlidir!");
    U.const("rsErrorPersonaltype", "Ən azı bir müştəri tipi seçilməlidir!");
    U.const("rsErrorBranch", "Ən azı bir filial seçilməlidir!");
    U.const("rsInfScriptStarted", "İxrac başladı");
    U.const("rsPleaseWait", "Zəhmət olmasa bir az gözləyin!  ");
    U.const("rsInfRowsExported", "%d sətir ixrac olundu");
    U.const("rsInfExportFinished", "İxrac qurtardı");
    U.var_("frmipexp", null, "Tfrmipexp");
    U.var_("cm_id", 0, "integer");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "frmipexp")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("Tfrmipexp", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("Tfrmipexp", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tfrmipexp", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ShowMessage", ["jghfg"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmipexp", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "dmipexp", (await $.mcall((await $.v(C, "Tdmipexp")), "create", [Self])));
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "dmipexp")), "OracleDataSet2")), "fieldbyname", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "dmipexp")), "OracleDataSet2")), "fieldbyname", ["tek_dat"])), "asdatetime")));
  { const $t1 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 3112))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "CheckAll", []);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmipexp", "CheckListBox1Click", async function CheckListBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["index"] = (await $.mv((await $.v(C, "CheckListBox1")), "ItemIndex"));
  {
    const $t3 = (await $.mv((await $.v(C, "dmipexp")), "DataSetKredit"));
    const $t4 = (await $.wv([$t3], "CheckListBox1", C, false));
    if ($.truthy((await $.idx((await $.wv([$t3, $t4], "Checked", C, false)), [(await $.wv([$t3, $t4], "index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))])))) {
      await $.mset((await $.idx((await $.wv([$t3, $t4], "Fields", C, false)), [(await $.wv([$t3, $t4], "index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))])), "Visible", (await $.wv([$t3, $t4], "true", C, false)));
    } else {
      await $.mset((await $.idx((await $.wv([$t3, $t4], "Fields", C, false)), [(await $.wv([$t3, $t4], "index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))])), "Visible", (await $.wv([$t3, $t4], "false", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmipexp", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmipexp", "challValuteClick", async function challValuteClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "LookValute")), "CheckAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmipexp", "unchallValuteClick", async function unchallValuteClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "LookValute")), "UncheckAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmipexp", "challBranchClick", async function challBranchClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "LookBranch")), "CheckAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmipexp", "unchallBranchClick", async function unchallBranchClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "LookBranch")), "UncheckAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmipexp", "challPersonalTypeClick", async function challPersonalTypeClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "LookPersonelType")), "CheckAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmipexp", "unchallPersonalTypeClick", async function unchallPersonalTypeClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "LookPersonelType")), "UncheckAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
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
  U.method("Tfrmipexp", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "bast": '', "sont": '', "a": '', "additionalparams": '', "restsstr": '', "chpaystr": '', "filterstr": '', "checkstr": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["bast"] = (await $.call(C, "FormatDateTime", ["dd-mmm-yyyy", (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "Date"))]))]));
  L0["sont"] = (await $.call(C, "FormatDateTime", ["dd-mmm-yyyy", (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "Date"))]))]));
  L0["a"] = "and OPEN_DAT BETWEEN   ";
  L0["filterstr"] = "";
  L0["checkstr"] = "";
  L0["chpaystr"] = "";
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
  await $.stmt((await $.call(C, "LogInformation", [(await $.v(C, "rsInfScriptStarted"))])));
  {
    const $t5 = (await $.wobj(C, "dmipexp"));
    const $t6 = (await $.wv([$t5], "DSetUustinfo", C, false));
    await $.stmt($.wcall([$t5, $t6], "Close", [], C));
    { const $t7 = await $.iset((await $.wv([$t5, $t6], "SQL", C, false)), [35], ($.add($.add($.add($.add($.add((await $.wv([$t5, $t6], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), "'"), (await $.wv([$t5, $t6], "basT", { get: async () => L0["bast"], set: async (v) => { L0["bast"] = v; }, local: true }, false))), "'and'"), (await $.wv([$t5, $t6], "sonT", { get: async () => L0["sont"], set: async (v) => { L0["sont"] = v; }, local: true }, false))), "'"))); if ($t7 !== undefined) { await $.wset([$t5, $t6], "SQL", $t7, C); } }
    { const $t8 = await $.iset((await $.wv([$t5, $t6], "SQL", C, false)), [36], (await $.wv([$t5, $t6], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false))); if ($t8 !== undefined) { await $.wset([$t5, $t6], "SQL", $t8, C); } }
  }
  {
    const $t9 = (await $.mv((await $.v(C, "dmipexp")), "DSetCustipinfo"));
    await $.stmt($.wcall([$t9], "Close", [], C));
    { const $t10 = await $.iset((await $.wv([$t9], "SQL", C, false)), [50], ($.add($.add($.add($.add($.add((await $.wv([$t9], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), "'"), (await $.wv([$t9], "basT", { get: async () => L0["bast"], set: async (v) => { L0["bast"] = v; }, local: true }, false))), "'and'"), (await $.wv([$t9], "sonT", { get: async () => L0["sont"], set: async (v) => { L0["sont"] = v; }, local: true }, false))), "'"))); if ($t10 !== undefined) { await $.wset([$t9], "SQL", $t10, C); } }
    { const $t11 = await $.iset((await $.wv([$t9], "SQL", C, false)), [51], (await $.wv([$t9], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false))); if ($t11 !== undefined) { await $.wset([$t9], "SQL", $t11, C); } }
  }
  {
    const $t12 = (await $.wobj(C, "dmipexp"));
    const $t13 = (await $.wv([$t12], "DataSetKredit", C, false));
    await $.stmt($.wcall([$t12, $t13], "Close", [], C));
    { const $t14 = await $.iset((await $.wv([$t12, $t13], "SQL", C, false)), [11], (await $.wv([$t12, $t13], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false))); if ($t14 !== undefined) { await $.wset([$t12, $t13], "SQL", $t14, C); } }
    { const $t15 = await $.iset((await $.wv([$t12, $t13], "SQl", C, false)), [12], ($.add($.add($.add($.add($.add((await $.wv([$t12, $t13], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), "'"), (await $.wv([$t12, $t13], "basT", { get: async () => L0["bast"], set: async (v) => { L0["bast"] = v; }, local: true }, false))), "'and'"), (await $.wv([$t12, $t13], "sonT", { get: async () => L0["sont"], set: async (v) => { L0["sont"] = v; }, local: true }, false))), "'"))); if ($t15 !== undefined) { await $.wset([$t12, $t13], "SQl", $t15, C); } }
    await $.stmt($.wcall([$t12, $t13], "Open", [], C));
  }
  {
    const $t16 = (await $.wobj(C, "dmipexp"));
    const $t17 = (await $.wv([$t16], "DataSetIP", C, false));
    await $.stmt($.wcall([$t16, $t17], "Close", [], C));
    { const $t18 = await $.iset((await $.wv([$t16, $t17], "SQL", C, false)), [59], (await $.wv([$t16, $t17], "ADDITIONALPARAMS", { get: async () => L0["additionalparams"], set: async (v) => { L0["additionalparams"] = v; }, local: true }, false))); if ($t18 !== undefined) { await $.wset([$t16, $t17], "SQL", $t18, C); } }
    { const $t19 = await $.iset((await $.wv([$t16, $t17], "SQl", C, false)), [60], ($.add($.add($.add($.add($.add((await $.wv([$t16, $t17], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), "'"), (await $.wv([$t16, $t17], "basT", { get: async () => L0["bast"], set: async (v) => { L0["bast"] = v; }, local: true }, false))), "'and'"), (await $.wv([$t16, $t17], "sonT", { get: async () => L0["sont"], set: async (v) => { L0["sont"] = v; }, local: true }, false))), "'"))); if ($t19 !== undefined) { await $.wset([$t16, $t17], "SQl", $t19, C); } }
    await $.stmt($.wcall([$t16, $t17], "Open", [], C));
  }
  await $.mset((await $.v(C, "GroupBox2")), "Align", (await $.v(C, "alClient")));
  await $.mset((await $.v(C, "GroupBox2")), "Visible", true);
  await $.mcall((await $.mv((await $.v(C, "CheckListBox2")), "Items")), "Clear", []);
  {
    const $t20 = (await $.mv((await $.v(C, "dmipexp")), "DataSetKredit"));
    { const $t21 = $.sub((await $.wv([$t20], "FieldCount", C, false)), 1);
      await $.wset([$t20], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t22 = true;
      for (;;) {
        if (!$t22) { await $.wset([$t20], "i", $.succ((await $.wv([$t20], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t22 = false;
        if (!($.ord((await $.wv([$t20], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t21))) break;
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t20], "CheckListBox2", C, false)), "Items")), "Add", [(await $.mv((await $.idx((await $.wv([$t20], "Fields", C, false)), [(await $.wv([$t20], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "DisplayLabel"))])));
        { const $t23 = await $.iset((await $.mv((await $.wv([$t20], "CheckListBox2", C, false)), "Checked")), [(await $.wv([$t20], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.wv([$t20], "True", C, false))); if ($t23 !== undefined) { await $.mset((await $.wv([$t20], "CheckListBox2", C, false)), "Checked", $t23); } }
        await $.tick();
      }
    }
  }
  await $.mcall((await $.mv((await $.v(C, "CheckListBox3")), "Items")), "Clear", []);
  {
    const $t24 = (await $.mv((await $.v(C, "dmipexp")), "DataSetIP"));
    { const $t25 = $.sub((await $.wv([$t24], "FieldCount", C, false)), 1);
      await $.wset([$t24], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t26 = true;
      for (;;) {
        if (!$t26) { await $.wset([$t24], "i", $.succ((await $.wv([$t24], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t26 = false;
        if (!($.ord((await $.wv([$t24], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t25))) break;
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t24], "CheckListBox3", C, false)), "Items")), "Add", [(await $.mv((await $.idx((await $.wv([$t24], "Fields", C, false)), [(await $.wv([$t24], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "DisplayLabel"))])));
        { const $t27 = await $.iset((await $.mv((await $.wv([$t24], "CheckListBox3", C, false)), "Checked")), [(await $.wv([$t24], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], (await $.wv([$t24], "True", C, false))); if ($t27 !== undefined) { await $.mset((await $.wv([$t24], "CheckListBox3", C, false)), "Checked", $t27); } }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmipexp", "unchallUsrGrpClick", async function unchallUsrGrpClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "LookUsrGrp")), "UncheckAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmipexp", "challUsrGrpClick", async function challUsrGrpClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "LookUsrGrp")), "CheckAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmipexp", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmipexp", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "dmipexp")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmipexp", "CheckListBox3Click", async function CheckListBox3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmipexp", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LogInformation", [(await $.v(C, "rsPleaseWait"))])));
  await $.mcall((await $.mv((await $.v(C, "dmipexp")), "DSetUustinfo")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "dmipexp")), "DSetCustipinfo")), "Open", []);
  {
    const $t28 = (await $.wobj(C, "ExcelExport"));
    await $.stmt($.wcall([$t28], "Connect", [], C));
    await $.stmt((await $.wcall([$t28], "ExportDataset", [(await $.mv((await $.wv([$t28], "dmipexp", C, false)), "DataSetIP")), "Ipoteka predmeti barede", (await $.wv([$t28], "True", C, false)), (await $.wv([$t28], "false", C, false))], C)));
    await $.stmt((await $.wcall([$t28], "ExportDataset", [(await $.mv((await $.wv([$t28], "dmipexp", C, false)), "DataSetKredit")), "Kredit barede", (await $.wv([$t28], "True", C, false)), (await $.wv([$t28], "false", C, false))], C)));
    await $.stmt((await $.wcall([$t28], "ExportDataset", [(await $.mv((await $.wv([$t28], "dmipexp", C, false)), "DSetCustipinfo")), "Borc alan barede diger", (await $.wv([$t28], "True", C, false)), (await $.wv([$t28], "false", C, false))], C)));
    await $.stmt((await $.wcall([$t28], "ExportDataset", [(await $.mv((await $.wv([$t28], "dmipexp", C, false)), "DSetUustinfo")), "Borc alan barede", (await $.wv([$t28], "True", C, false)), (await $.wv([$t28], "false", C, false))], C)));
    await $.stmt($.wcall([$t28], "Disconnect", [], C));
  }
  await $.mset((await $.v(C, "GroupBox2")), "Visible", false);
  await $.stmt((await $.call(C, "LogInformation", [(await $.v(C, "rsInfExportFinished"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmipexp", "CheckListBox3ClickCheck", async function CheckListBox3ClickCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["index"] = (await $.mv((await $.v(C, "CheckListBox3")), "ItemIndex"));
  {
    const $t29 = (await $.mv((await $.v(C, "dmipexp")), "DataSetIP"));
    const $t30 = (await $.wv([$t29], "CheckListBox3", C, false));
    if ($.truthy((await $.idx((await $.wv([$t29, $t30], "Checked", C, false)), [(await $.wv([$t29, $t30], "index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))])))) {
      await $.mset((await $.idx((await $.wv([$t29, $t30], "Fields", C, false)), [(await $.wv([$t29, $t30], "index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))])), "Visible", (await $.wv([$t29, $t30], "true", C, false)));
    } else {
      await $.mset((await $.idx((await $.wv([$t29, $t30], "Fields", C, false)), [(await $.wv([$t29, $t30], "index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))])), "Visible", (await $.wv([$t29, $t30], "false", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmipexp", "CheckListBox2ClickCheck", async function CheckListBox2ClickCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["index"] = (await $.mv((await $.v(C, "CheckListBox2")), "ItemIndex"));
  {
    const $t31 = (await $.mv((await $.v(C, "dmipexp")), "DataSetKredit"));
    const $t32 = (await $.wv([$t31], "CheckListBox2", C, false));
    if ($.truthy((await $.idx((await $.wv([$t31, $t32], "Checked", C, false)), [(await $.wv([$t31, $t32], "index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))])))) {
      await $.mset((await $.idx((await $.wv([$t31, $t32], "Fields", C, false)), [(await $.wv([$t31, $t32], "index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))])), "Visible", (await $.wv([$t31, $t32], "true", C, false)));
    } else {
      await $.mset((await $.idx((await $.wv([$t31, $t32], "Fields", C, false)), [(await $.wv([$t31, $t32], "index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))])), "Visible", (await $.wv([$t31, $t32], "false", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmipexp", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "GroupBox2")), "Visible", false);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmipexp", (await $.mcall((await $.v(C, "Tfrmipexp")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
