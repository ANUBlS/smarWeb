// Generated from Operationtypeunit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Operationtypeunit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "Grids", "DBGrids", "ComCtrls", "ToolWin", "ExtCtrls", "CMExcelExport", "ImgList", "Db", "OracleData", "comobj", "QExport4", "QExport4Xlsx", "ShlObj", "QExport4Dialog"]);
  const C = [U];
  U.defClass("Toperationtype", "TForm", {"oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton20": {"name": "ToolButton20", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "radiobutton1": {"name": "RadioButton1", "type": "TRadioButton"}, "radiobutton2": {"name": "RadioButton2", "type": "TRadioButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TComboBox"}, "oracledataset1emeliyyat": {"name": "OracleDataSet1EMELIYYAT", "type": "TWideStringField"}, "oracledataset1fil": {"name": "OracleDataSet1FIL", "type": "TWideStringField"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1accid": {"name": "OracleDataSet1ACCID", "type": "TFloatField"}, "oracledataset1cardholder": {"name": "OracleDataSet1CARDHOLDER", "type": "TWideStringField"}, "oracledataset1fname": {"name": "OracleDataSet1FNAME", "type": "TWideStringField"}, "oracledataset1lname": {"name": "OracleDataSet1LNAME", "type": "TWideStringField"}, "oracledataset1passport": {"name": "OracleDataSet1PASSPORT", "type": "TWideStringField"}, "oracledataset1birthday": {"name": "OracleDataSet1BIRTHDAY", "type": "TWideStringField"}, "oracledataset1homephone": {"name": "OracleDataSet1HOMEPHONE", "type": "TWideStringField"}, "oracledataset1workphone": {"name": "OracleDataSet1WORKPHONE", "type": "TWideStringField"}, "oracledataset1country": {"name": "OracleDataSet1COUNTRY", "type": "TWideStringField"}, "oracledataset1city": {"name": "OracleDataSet1CITY", "type": "TWideStringField"}, "oracledataset1address": {"name": "OracleDataSet1ADDRESS", "type": "TWideStringField"}, "oracledataset1resident": {"name": "OracleDataSet1RESIDENT", "type": "TWideStringField"}, "oracledataset1cardnumber": {"name": "OracleDataSet1CARDNUMBER", "type": "TWideStringField"}, "oracledataset1rbsnumber": {"name": "OracleDataSet1RBSNUMBER", "type": "TWideStringField"}, "oracledataset1maincard": {"name": "OracleDataSet1MAINCARD", "type": "TWideStringField"}, "oracledataset1currency": {"name": "OracleDataSet1CURRENCY", "type": "TWideStringField"}, "oracledataset1cardtype": {"name": "OracleDataSet1CARDTYPE", "type": "TWideStringField"}, "oracledataset1cardstatus": {"name": "OracleDataSet1CARDSTATUS", "type": "TWideStringField"}, "oracledataset1credit_lim": {"name": "OracleDataSet1CREDIT_LIM", "type": "TWideStringField"}, "oracledataset1dateopen": {"name": "OracleDataSet1DATEOPEN", "type": "TDateTimeField"}, "oracledataset1expiry": {"name": "OracleDataSet1EXPIRY", "type": "TDateTimeField"}, "oracledataset1reference": {"name": "OracleDataSet1REFERENCE", "type": "TWideStringField"}, "oracledataset1embossname": {"name": "OracleDataSet1EMBOSSNAME", "type": "TWideStringField"}, "oracledataset1company": {"name": "OracleDataSet1COMPANY", "type": "TWideStringField"}, "oracledataset1dateclose": {"name": "OracleDataSet1DATECLOSE", "type": "TDateTimeField"}, "oracledataset1security": {"name": "OracleDataSet1SECURITY", "type": "TWideStringField"}, "oracledataset1send": {"name": "OracleDataSet1SEND", "type": "TIntegerField"}, "oracledataset1creatdate": {"name": "OracleDataSet1CREATDATE", "type": "TIntegerField"}, "oracledataset1file_num": {"name": "OracleDataSet1FILE_NUM", "type": "TIntegerField"}, "oracledataset1messtype": {"name": "OracleDataSet1MESSTYPE", "type": "TIntegerField"}, "oracledataset1withp": {"name": "OracleDataSet1WITHP", "type": "TWideStringField"}, "oracledataset1urg": {"name": "OracleDataSet1URG", "type": "TWideStringField"}, "oracledataset1othtype": {"name": "OracleDataSet1OTHTYPE", "type": "TWideStringField"}, "oracledataset1othmember": {"name": "OracleDataSet1OTHMEMBER", "type": "TWideStringField"}, "oracledataset1othasscod": {"name": "OracleDataSet1OTHASSCOD", "type": "TWideStringField"}, "oracledataset1othiden": {"name": "OracleDataSet1OTHIDEN", "type": "TWideStringField"}, "oracledataset1othexpry": {"name": "OracleDataSet1OTHEXPRY", "type": "TWideStringField"}, "oracledataset1filename": {"name": "OracleDataSet1FILENAME", "type": "TWideStringField"}, "oracledataset1con_balan": {"name": "OracleDataSet1CON_BALAN", "type": "TWideStringField"}, "oracledataset1balan_sign": {"name": "OracleDataSet1BALAN_SIGN", "type": "TWideStringField"}, "oracledataset1cardrest": {"name": "OracleDataSet1CARDREST", "type": "TFloatField"}, "oracledataset1rbsnumber2": {"name": "OracleDataSet1RBSNUMBER2", "type": "TWideStringField"}, "oracledataset1accid2": {"name": "OracleDataSet1ACCID2", "type": "TFloatField"}, "oracledataset1refinteger": {"name": "OracleDataSet1REFINTEGER", "type": "TWideStringField"}, "oracledataset1lang_code": {"name": "OracleDataSet1LANG_CODE", "type": "TWideStringField"}, "oracledataset1filial": {"name": "OracleDataSet1FILIAL", "type": "TFloatField"}, "oracledataset1issued_by": {"name": "OracleDataSet1ISSUED_BY", "type": "TWideStringField"}, "oracledataset1doc_since": {"name": "OracleDataSet1DOC_SINCE", "type": "TWideStringField"}, "oracledataset1contract_num": {"name": "OracleDataSet1CONTRACT_NUM", "type": "TWideStringField"}, "oracledataset1kli_id": {"name": "OracleDataSet1KLI_ID", "type": "TFloatField"}, "oracledataset1op_id": {"name": "OracleDataSet1OP_ID", "type": "TFloatField"}, "oracledataset1types": {"name": "OracleDataSet1TYPES", "type": "TWideStringField"}, "oracledataset1titul": {"name": "OracleDataSet1TITUL", "type": "TWideStringField"}, "oracledataset1status": {"name": "OracleDataSet1STATUS", "type": "TFloatField"}, "oracledataset1dat": {"name": "OracleDataSet1DAT", "type": "TDateTimeField"}, "oracledataset1nmod_opid": {"name": "OracleDataSet1NMOD_OPID", "type": "TFloatField"}, "oracledataset1crdat": {"name": "OracleDataSet1CRDAT", "type": "TDateTimeField"}, "oracledataset1rbsclose": {"name": "OracleDataSet1RBSCLOSE", "type": "TWideStringField"}, "oracledataset1rbscloseid": {"name": "OracleDataSet1RBSCLOSEID", "type": "TFloatField"}, "oracledataset1trandate": {"name": "OracleDataSet1TRANDATE", "type": "TDateTimeField"}, "oracledataset1kredit": {"name": "OracleDataSet1KREDIT", "type": "TFloatField"}, "qexport4dialog1": {"name": "QExport4Dialog1", "type": "TQExport4Dialog"}}, {});
  U.init(async () => {
    U.var_("operationtype", null, "Toperationtype");
  });
  U.method("Toperationtype", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    await $.mset((await $.v(C, "DateTimePicker1")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "DateTimePicker1")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Toperationtype", "CheckBox2Click", async function CheckBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox2")), "Checked")))) {
    await $.mset((await $.v(C, "DateTimePicker2")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "DateTimePicker2")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Toperationtype", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "OracleDataSet1")), "Active", true);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox3")), "Checked")))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), "NEW"))) {
      L0["a"] = 1;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), "Suppl.Card"))) {
      L0["a"] = 2;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), "Prolongation"))) {
      L0["a"] = 3;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), "Replace Card"))) {
      L0["a"] = 4;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), "PIN Clear"))) {
      L0["a"] = 12;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), "Card Status"))) {
      L0["a"] = 6;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), "RBS Change"))) {
      L0["a"] = 11;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), "Contract Close"))) {
      L0["a"] = 7;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), "CardName Change"))) {
      L0["a"] = 35;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), "Credit Limit"))) {
      L0["a"] = 5;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), "Security Word Change"))) {
      L0["a"] = 13;
    }
  }
  if ($.truthy((await $.and_(((await $.mv((await $.v(C, "CheckBox1")), "Checked"))), async () => ((await $.mv((await $.v(C, "CheckBox2")), "Checked"))))))) {
    if ($.truthy((await $.mv((await $.v(C, "CheckBox3")), "Checked")))) {
      await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
      { const $t1 = await $.iset((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), [99], " "); if ($t1 !== undefined) { await $.mset((await $.v(C, "OracleDataSet1")), "SQL", $t1); } }
      { const $t2 = await $.iset((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), [99], $.add($.add("where ( messtype= ", (await $.call(C, "inttostr", [L0["a"]]))), ") ")); if ($t2 !== undefined) { await $.mset((await $.v(C, "OracleDataSet1")), "SQL", $t2); } }
      { const $t3 = await $.iset((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), [100], " "); if ($t3 !== undefined) { await $.mset((await $.v(C, "OracleDataSet1")), "SQL", $t3); } }
      { const $t4 = await $.iset((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), [100], $.add($.add($.add($.add($.add($.add($.add($.add("and ( TRANDATE between ", "'"), (await $.call(C, "Formatdatetime", ["dd-mmm-yyyy", (await $.mv((await $.v(C, "datetimepicker1")), "datetime"))]))), "'"), " and "), "'"), (await $.call(C, "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.v(C, "datetimepicker2")), "datetime"))]))), "'"), ")")); if ($t4 !== undefined) { await $.mset((await $.v(C, "OracleDataSet1")), "SQL", $t4); } }
    } else {
      await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
      { const $t5 = await $.iset((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), [99], " "); if ($t5 !== undefined) { await $.mset((await $.v(C, "OracleDataSet1")), "SQL", $t5); } }
      { const $t6 = await $.iset((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), [100], " "); if ($t6 !== undefined) { await $.mset((await $.v(C, "OracleDataSet1")), "SQL", $t6); } }
      { const $t7 = await $.iset((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), [100], $.add($.add($.add($.add($.add($.add($.add("where TRANDATE between ", "'"), (await $.call(C, "Formatdatetime", ["dd-mmm-yyyy", (await $.mv((await $.v(C, "datetimepicker1")), "datetime"))]))), "'"), " and "), "'"), (await $.call(C, "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.v(C, "datetimepicker2")), "datetime"))]))), "'")); if ($t7 !== undefined) { await $.mset((await $.v(C, "OracleDataSet1")), "SQL", $t7); } }
    }
    await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
  } else {
    if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
      if ($.truthy((await $.mv((await $.v(C, "CheckBox3")), "Checked")))) {
        await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
        { const $t8 = await $.iset((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), [99], " "); if ($t8 !== undefined) { await $.mset((await $.v(C, "OracleDataSet1")), "SQL", $t8); } }
        { const $t9 = await $.iset((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), [99], $.add($.add("where ( messtype= ", (await $.call(C, "inttostr", [L0["a"]]))), ") ")); if ($t9 !== undefined) { await $.mset((await $.v(C, "OracleDataSet1")), "SQL", $t9); } }
        { const $t10 = await $.iset((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), [100], " "); if ($t10 !== undefined) { await $.mset((await $.v(C, "OracleDataSet1")), "SQL", $t10); } }
        { const $t11 = await $.iset((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), [100], $.add($.add($.add($.add("and ( TRANDATE >= ", "'"), (await $.call(C, "Formatdatetime", ["dd-mmm-yyyy", (await $.mv((await $.v(C, "datetimepicker1")), "datetime"))]))), "'"), ") ")); if ($t11 !== undefined) { await $.mset((await $.v(C, "OracleDataSet1")), "SQL", $t11); } }
      } else {
        await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
        { const $t12 = await $.iset((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), [99], " "); if ($t12 !== undefined) { await $.mset((await $.v(C, "OracleDataSet1")), "SQL", $t12); } }
        { const $t13 = await $.iset((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), [100], " "); if ($t13 !== undefined) { await $.mset((await $.v(C, "OracleDataSet1")), "SQL", $t13); } }
        { const $t14 = await $.iset((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), [100], $.add($.add($.add("where TRANDATE >= ", "'"), (await $.call(C, "Formatdatetime", ["dd-mmm-yyyy", (await $.mv((await $.v(C, "datetimepicker1")), "datetime"))]))), "'")); if ($t14 !== undefined) { await $.mset((await $.v(C, "OracleDataSet1")), "SQL", $t14); } }
      }
      await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
    } else {
      if ($.truthy((await $.mv((await $.v(C, "CheckBox2")), "Checked")))) {
        if ($.truthy((await $.mv((await $.v(C, "CheckBox3")), "Checked")))) {
          await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
          { const $t15 = await $.iset((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), [99], " "); if ($t15 !== undefined) { await $.mset((await $.v(C, "OracleDataSet1")), "SQL", $t15); } }
          { const $t16 = await $.iset((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), [99], $.add($.add("where messtype= ", (await $.call(C, "inttostr", [L0["a"]]))), " ")); if ($t16 !== undefined) { await $.mset((await $.v(C, "OracleDataSet1")), "SQL", $t16); } }
          await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
          { const $t17 = await $.iset((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), [100], " "); if ($t17 !== undefined) { await $.mset((await $.v(C, "OracleDataSet1")), "SQL", $t17); } }
          { const $t18 = await $.iset((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), [100], $.add($.add($.add("and TRANDATE <= ", "'"), (await $.call(C, "Formatdatetime", ["dd-mmm-yyyy", (await $.mv((await $.v(C, "datetimepicker2")), "datetime"))]))), "'")); if ($t18 !== undefined) { await $.mset((await $.v(C, "OracleDataSet1")), "SQL", $t18); } }
        } else {
          await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
          { const $t19 = await $.iset((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), [99], " "); if ($t19 !== undefined) { await $.mset((await $.v(C, "OracleDataSet1")), "SQL", $t19); } }
          { const $t20 = await $.iset((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), [100], " "); if ($t20 !== undefined) { await $.mset((await $.v(C, "OracleDataSet1")), "SQL", $t20); } }
          { const $t21 = await $.iset((await $.mv((await $.v(C, "OracleDataSet1")), "SQL")), [100], $.add($.add($.add("where TRANDATE <= ", "'"), (await $.call(C, "Formatdatetime", ["dd-mmm-yyyy", (await $.mv((await $.v(C, "datetimepicker2")), "datetime"))]))), "'")); if ($t21 !== undefined) { await $.mset((await $.v(C, "OracleDataSet1")), "SQL", $t21); } }
        }
        await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
      } else {
        await $.stmt((await $.call(C, "ShowMessage", ["Tarixlərin ən azı biri seçilməlidir!"])));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Toperationtype", "ToolButton14Click", async function ToolButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Toperationtype", "ToolButton6Click", async function ToolButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0, "index": 0, "excelapp": null, "sheet": null};
  await $.fixArgs(L0, ["sender"]);
  L0["excelapp"] = (await $.call(C, "CreateOleObject", ["Excel.Application"]));
  await $.mset(L0["excelapp"], "Visible", false);
  await $.stmt((await $.mcall((await $.mv(L0["excelapp"], "WorkBooks")), "Add", [(-(4167))])));
  await $.mset((await $.idx((await $.mv((await $.idx((await $.mv(L0["excelapp"], "WorkBooks")), [1])), "WorkSheets")), [1])), "name", "Export");
  L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["excelapp"], "WorkBooks")), [1])), "WorkSheets")), ["Export"]));
  await $.mset((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["excelapp"], "WorkBooks")), [1])), "WorkSheets")), [1])), "Rows")), [1])), "Borders")), "color", (await $.v(C, "clGray")));
  L0["index"] = 1;
  await $.mcall((await $.v(C, "OracleDataSet1")), "First", []);
  { const $t22 = (await $.mv((await $.v(C, "OracleDataSet1")), "RecordCount"));
    L0["i"] = 1;
    let $t23 = true;
    for (;;) {
      if (!$t23) { L0["i"] = $.succ(L0["i"], 1); }
      $t23 = false;
      if (!($.ord(L0["i"]) <= $.ord($t22))) break;
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 1])), "Value", "EMELIYYAT");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 2])), "Value", "Fil");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 5])), "Value", "ID");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 6])), "Value", "ACCID");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 7])), "Value", "CARDHOLDER");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 8])), "Value", "FNAME");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 9])), "Value", "LNAME");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 10])), "Value", "PASSPORT");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 11])), "Value", "BIRTHDAY");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 12])), "Value", "HOMEPHONE");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 13])), "Value", "WORKPHONE");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 14])), "Value", "COUNTRY");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 15])), "Value", "CITY");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 16])), "Value", "ADDRESS");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 17])), "Value", "RESIDENT");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 18])), "Value", "CARDNUMBER");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 19])), "Value", "RBSNUMBER");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 20])), "Value", "MAINCARD");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 21])), "Value", "CURRENCY");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 22])), "Value", "CARDTYPE");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 23])), "Value", "CARDSTATUS");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 24])), "Value", "CREDIT_LIM");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 25])), "Value", "DATEOPEN");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 26])), "Value", "EXPIRY");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 27])), "Value", "REFERENCE");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 28])), "Value", "EMBOSSNAME");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 29])), "Value", "COMPANY");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 30])), "Value", "DATECLOSE");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 31])), "Value", "SECURITY");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 32])), "Value", "SEND");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 33])), "Value", "CREATDATE");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 34])), "Value", "FILE_NUM");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 35])), "Value", "MESSTYPE");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 36])), "Value", "WITHP");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 37])), "Value", "URG");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 38])), "Value", "OTHTYPE");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 39])), "Value", "OTHMEMBER");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 40])), "Value", "OTHASSCOD");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 41])), "Value", "OTHIDEN");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 42])), "Value", "OTHEXPRY");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 43])), "Value", "FILENAME");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 44])), "Value", "CON_BALAN");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 45])), "Value", "BALAN_SIGN");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 46])), "Value", "CARDREST");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 47])), "Value", "RBSNUMBER2");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 48])), "Value", "ACCID2");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 49])), "Value", "REFINTEGER");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 50])), "Value", "LANG_CODE");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 51])), "Value", "FILIAL");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 52])), "Value", "ISSUED_BY");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 53])), "Value", "DOC_SINCE");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 54])), "Value", "CONTRACT_NUM");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 55])), "Value", "KREDIT");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 56])), "Value", "KLI_ID");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 57])), "Value", "OP_ID");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 58])), "Value", "TYPES");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 59])), "Value", "TITUL");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 60])), "Value", "STATUS");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 61])), "Value", "DAT");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 62])), "Value", "NMOD_OPID");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 63])), "Value", "CRDAT");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 64])), "Value", "RBSCLOSE");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 65])), "Value", "RBSCLOSEID");
      await $.mset((await $.idx((await $.mv(L0["sheet"], "Cells")), [1, 66])), "Value", "TRANDATE");
      { const $t24 = (await $.mv((await $.v(C, "DBGrid1")), "FieldCount"));
        L0["j"] = 1;
        let $t25 = true;
        for (;;) {
          if (!$t25) { L0["j"] = $.succ(L0["j"], 1); }
          $t25 = false;
          if (!($.ord(L0["j"]) <= $.ord($t24))) break;
          { const $t26 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 1], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["emeliyyat"])), "AsString"))); if ($t26 !== undefined) { await $.mset(L0["sheet"], "cells", $t26); } }
          await $.tick();
        }
      }
      { const $t27 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 2], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["FIL"])), "AsString"))); if ($t27 !== undefined) { await $.mset(L0["sheet"], "cells", $t27); } }
      { const $t28 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 5], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["ID"])), "AsString"))); if ($t28 !== undefined) { await $.mset(L0["sheet"], "cells", $t28); } }
      { const $t29 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 6], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["ACCID"])), "AsString"))); if ($t29 !== undefined) { await $.mset(L0["sheet"], "cells", $t29); } }
      { const $t30 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 7], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["CARDHOLDER"])), "AsString"))); if ($t30 !== undefined) { await $.mset(L0["sheet"], "cells", $t30); } }
      { const $t31 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 8], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["FNAME"])), "AsString"))); if ($t31 !== undefined) { await $.mset(L0["sheet"], "cells", $t31); } }
      { const $t32 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 9], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["LNAME"])), "AsString"))); if ($t32 !== undefined) { await $.mset(L0["sheet"], "cells", $t32); } }
      { const $t33 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 10], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["PASSPORT"])), "AsString"))); if ($t33 !== undefined) { await $.mset(L0["sheet"], "cells", $t33); } }
      { const $t34 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 11], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["BIRTHDAY"])), "AsString"))); if ($t34 !== undefined) { await $.mset(L0["sheet"], "cells", $t34); } }
      { const $t35 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 12], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["HOMEPHONE"])), "AsString"))); if ($t35 !== undefined) { await $.mset(L0["sheet"], "cells", $t35); } }
      { const $t36 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 13], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["WORKPHONE"])), "AsString"))); if ($t36 !== undefined) { await $.mset(L0["sheet"], "cells", $t36); } }
      { const $t37 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 14], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["COUNTRY"])), "AsString"))); if ($t37 !== undefined) { await $.mset(L0["sheet"], "cells", $t37); } }
      { const $t38 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 15], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["CITY"])), "AsString"))); if ($t38 !== undefined) { await $.mset(L0["sheet"], "cells", $t38); } }
      { const $t39 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 16], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["ADDRESS"])), "AsString"))); if ($t39 !== undefined) { await $.mset(L0["sheet"], "cells", $t39); } }
      { const $t40 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 17], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["RESIDENT"])), "AsString"))); if ($t40 !== undefined) { await $.mset(L0["sheet"], "cells", $t40); } }
      { const $t41 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 18], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["CARDNUMBER"])), "AsString"))); if ($t41 !== undefined) { await $.mset(L0["sheet"], "cells", $t41); } }
      { const $t42 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 19], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["RBSNUMBER"])), "AsString"))); if ($t42 !== undefined) { await $.mset(L0["sheet"], "cells", $t42); } }
      { const $t43 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 20], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["MAINCARD"])), "AsString"))); if ($t43 !== undefined) { await $.mset(L0["sheet"], "cells", $t43); } }
      { const $t44 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 21], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["CURRENCY"])), "AsString"))); if ($t44 !== undefined) { await $.mset(L0["sheet"], "cells", $t44); } }
      { const $t45 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 22], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["CARDTYPE"])), "AsString"))); if ($t45 !== undefined) { await $.mset(L0["sheet"], "cells", $t45); } }
      { const $t46 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 23], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["CARDSTATUS"])), "AsString"))); if ($t46 !== undefined) { await $.mset(L0["sheet"], "cells", $t46); } }
      { const $t47 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 24], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["CREDIT_LIM"])), "AsString"))); if ($t47 !== undefined) { await $.mset(L0["sheet"], "cells", $t47); } }
      { const $t48 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 25], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["DATEOPEN"])), "AsString"))); if ($t48 !== undefined) { await $.mset(L0["sheet"], "cells", $t48); } }
      { const $t49 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 26], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["EXPIRY"])), "AsString"))); if ($t49 !== undefined) { await $.mset(L0["sheet"], "cells", $t49); } }
      { const $t50 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 27], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["REFERENCE"])), "AsString"))); if ($t50 !== undefined) { await $.mset(L0["sheet"], "cells", $t50); } }
      { const $t51 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 28], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["EMBOSSNAME"])), "AsString"))); if ($t51 !== undefined) { await $.mset(L0["sheet"], "cells", $t51); } }
      { const $t52 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 29], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["COMPANY"])), "AsString"))); if ($t52 !== undefined) { await $.mset(L0["sheet"], "cells", $t52); } }
      { const $t53 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 30], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["DATECLOSE"])), "AsString"))); if ($t53 !== undefined) { await $.mset(L0["sheet"], "cells", $t53); } }
      { const $t54 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 31], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["SECURITY"])), "AsString"))); if ($t54 !== undefined) { await $.mset(L0["sheet"], "cells", $t54); } }
      { const $t55 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 32], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["SEND"])), "AsString"))); if ($t55 !== undefined) { await $.mset(L0["sheet"], "cells", $t55); } }
      { const $t56 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 33], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["CREATDATE"])), "AsString"))); if ($t56 !== undefined) { await $.mset(L0["sheet"], "cells", $t56); } }
      { const $t57 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 34], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["FILE_NUM"])), "AsString"))); if ($t57 !== undefined) { await $.mset(L0["sheet"], "cells", $t57); } }
      { const $t58 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 35], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["MESSTYPE"])), "AsString"))); if ($t58 !== undefined) { await $.mset(L0["sheet"], "cells", $t58); } }
      { const $t59 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 36], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["WITHP"])), "AsString"))); if ($t59 !== undefined) { await $.mset(L0["sheet"], "cells", $t59); } }
      { const $t60 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 37], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["URG"])), "AsString"))); if ($t60 !== undefined) { await $.mset(L0["sheet"], "cells", $t60); } }
      { const $t61 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 38], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["OTHTYPE"])), "AsString"))); if ($t61 !== undefined) { await $.mset(L0["sheet"], "cells", $t61); } }
      { const $t62 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 39], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["OTHMEMBER"])), "AsString"))); if ($t62 !== undefined) { await $.mset(L0["sheet"], "cells", $t62); } }
      { const $t63 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 40], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["OTHASSCOD"])), "AsString"))); if ($t63 !== undefined) { await $.mset(L0["sheet"], "cells", $t63); } }
      { const $t64 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 41], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["OTHIDEN"])), "AsString"))); if ($t64 !== undefined) { await $.mset(L0["sheet"], "cells", $t64); } }
      { const $t65 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 42], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["OTHEXPRY"])), "AsString"))); if ($t65 !== undefined) { await $.mset(L0["sheet"], "cells", $t65); } }
      { const $t66 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 43], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["FILENAME"])), "AsString"))); if ($t66 !== undefined) { await $.mset(L0["sheet"], "cells", $t66); } }
      { const $t67 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 44], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["CON_BALAN"])), "AsString"))); if ($t67 !== undefined) { await $.mset(L0["sheet"], "cells", $t67); } }
      { const $t68 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 45], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["BALAN_SIGN"])), "AsString"))); if ($t68 !== undefined) { await $.mset(L0["sheet"], "cells", $t68); } }
      { const $t69 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 46], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["CARDREST"])), "AsString"))); if ($t69 !== undefined) { await $.mset(L0["sheet"], "cells", $t69); } }
      { const $t70 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 47], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["RBSNUMBER2"])), "AsString"))); if ($t70 !== undefined) { await $.mset(L0["sheet"], "cells", $t70); } }
      { const $t71 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 48], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["ACCID2"])), "AsString"))); if ($t71 !== undefined) { await $.mset(L0["sheet"], "cells", $t71); } }
      { const $t72 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 49], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["REFINTEGER"])), "AsString"))); if ($t72 !== undefined) { await $.mset(L0["sheet"], "cells", $t72); } }
      { const $t73 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 50], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["LANG_CODE"])), "AsString"))); if ($t73 !== undefined) { await $.mset(L0["sheet"], "cells", $t73); } }
      { const $t74 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 51], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["FILIAL"])), "AsString"))); if ($t74 !== undefined) { await $.mset(L0["sheet"], "cells", $t74); } }
      { const $t75 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 52], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["ISSUED_BY"])), "AsString"))); if ($t75 !== undefined) { await $.mset(L0["sheet"], "cells", $t75); } }
      { const $t76 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 53], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["DOC_SINCE"])), "AsString"))); if ($t76 !== undefined) { await $.mset(L0["sheet"], "cells", $t76); } }
      { const $t77 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 54], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["CONTRACT_NUM"])), "AsString"))); if ($t77 !== undefined) { await $.mset(L0["sheet"], "cells", $t77); } }
      { const $t78 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 55], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["KREDIT"])), "AsString"))); if ($t78 !== undefined) { await $.mset(L0["sheet"], "cells", $t78); } }
      { const $t79 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 56], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["KLI_ID"])), "AsString"))); if ($t79 !== undefined) { await $.mset(L0["sheet"], "cells", $t79); } }
      { const $t80 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 57], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["OP_ID"])), "AsString"))); if ($t80 !== undefined) { await $.mset(L0["sheet"], "cells", $t80); } }
      { const $t81 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 58], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["TYPES"])), "AsString"))); if ($t81 !== undefined) { await $.mset(L0["sheet"], "cells", $t81); } }
      { const $t82 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 59], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["TITUL"])), "AsString"))); if ($t82 !== undefined) { await $.mset(L0["sheet"], "cells", $t82); } }
      { const $t83 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 60], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["STATUS"])), "AsString"))); if ($t83 !== undefined) { await $.mset(L0["sheet"], "cells", $t83); } }
      { const $t84 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 61], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["DAT"])), "AsString"))); if ($t84 !== undefined) { await $.mset(L0["sheet"], "cells", $t84); } }
      { const $t85 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 62], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["NMOD_OPID"])), "AsString"))); if ($t85 !== undefined) { await $.mset(L0["sheet"], "cells", $t85); } }
      { const $t86 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 63], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["CRDAT"])), "AsString"))); if ($t86 !== undefined) { await $.mset(L0["sheet"], "cells", $t86); } }
      { const $t87 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 64], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["RBSCLOSE"])), "AsString"))); if ($t87 !== undefined) { await $.mset(L0["sheet"], "cells", $t87); } }
      { const $t88 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 65], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["RBSCLOSEID"])), "AsString"))); if ($t88 !== undefined) { await $.mset(L0["sheet"], "cells", $t88); } }
      { const $t89 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(L0["index"], 1), 66], (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["TRANDATE"])), "AsString"))); if ($t89 !== undefined) { await $.mset(L0["sheet"], "cells", $t89); } }
      await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["index"], async ($t90) => { L0["index"] = $t90; })])));
      await $.mcall((await $.v(C, "OracleDataSet1")), "Next", []);
      await $.tick();
    }
  }
  await $.mset(L0["excelapp"], "Visible", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("DesktopPath", async function DesktopPath(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "zpath": $.sarr()};
  await $.stmt((await $.call(C, "SHGetFolderPath", [0, (await $.v(C, "CSIDL_DESKTOP")), 0, (await $.v(C, "SHGFP_TYPE_CURRENT")), L0["zpath"]])));
  L0["result"] = (L0["zpath"]);
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Toperationtype", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "QExport4Dialog1")), "FileName", $.add((await $.v(C, "DesktopPath")), "\\card"));
  await $.mset((await $.v(C, "QExport4Dialog1")), "DataSet", (await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")));
  await $.mcall((await $.v(C, "QExport4Dialog1")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Toperationtype", "CheckBox3Click", async function CheckBox3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox3")), "Checked")))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh1")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "DBLookupComboboxEh1")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Toperationtype", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.v(C, "date")));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.v(C, "date")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
