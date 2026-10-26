// Generated from Filereportform.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Filereportform", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Grids", "DBGrids", "StdCtrls", "ComCtrls", "ToolWin", "ExtCtrls", "CMExcelExport", "ImgList", "datamodsUnit", "sboapiDataModuleImpl", "korreportUnit", "hesabqaliq", "Excelform", "cardexpireUnit", "MohUnit", "Operationtypeunit", "Fingerprint", "SBTranslateProc", "card", "activecardsunit", "cardall", "Unitazips", "Unitazips2"]);
  const C = [U];
  U.defClass("TFileReports", "TForm", {"datasource1": {"name": "DataSource1", "type": "TDataSource"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton20": {"name": "ToolButton20", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "radiobutton1": {"name": "RadioButton1", "type": "TRadioButton"}, "radiobutton2": {"name": "RadioButton2", "type": "TRadioButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "radiogroup1": {"name": "RadioGroup1", "type": "TRadioGroup"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "floatfield1": {"name": "FloatField1", "type": "TFloatField"}, "widestringfield1": {"name": "WideStringField1", "type": "TWideStringField"}, "widestringfield2": {"name": "WideStringField2", "type": "TWideStringField"}, "widestringfield3": {"name": "WideStringField3", "type": "TWideStringField"}, "widestringfield4": {"name": "WideStringField4", "type": "TWideStringField"}, "widestringfield5": {"name": "WideStringField5", "type": "TWideStringField"}, "widestringfield6": {"name": "WideStringField6", "type": "TWideStringField"}, "widestringfield7": {"name": "WideStringField7", "type": "TWideStringField"}, "widestringfield8": {"name": "WideStringField8", "type": "TWideStringField"}, "widestringfield9": {"name": "WideStringField9", "type": "TWideStringField"}, "widestringfield10": {"name": "WideStringField10", "type": "TWideStringField"}, "floatfield2": {"name": "FloatField2", "type": "TFloatField"}, "widestringfield11": {"name": "WideStringField11", "type": "TWideStringField"}, "widestringfield12": {"name": "WideStringField12", "type": "TWideStringField"}, "widestringfield13": {"name": "WideStringField13", "type": "TWideStringField"}, "widestringfield14": {"name": "WideStringField14", "type": "TWideStringField"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "datasource3": {"name": "DataSource3", "type": "TDataSource"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset4": {"name": "OracleDataSet4", "type": "TOracleDataSet"}, "datasource4": {"name": "DataSource4", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("FileReports", null, "TFileReports");
    U.var_("v_deyx", '', "String");
    U.var_("x", '', "String");
    U.var_("v_dey", 0, "integer");
    U.var_("v_dey2", 0, "integer");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "k": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["s", "k"]);
  if ($.truthy($.eq(L0["s"], "azips"))) {
    await $.set(C, "x", L0["k"]);
    await $.set(C, "azips2", (await $.mcall((await $.v(C, "Tazips2")), "Create", [null])));
    await $.mcall((await $.v(C, "azips2")), "ShowModal", []);
  }
  if ($.truthy($.eq(L0["s"], "card"))) {
    await $.set(C, "x", L0["k"]);
    await $.set(C, "Allcards", (await $.mcall((await $.v(C, "TAllcards")), "Create", [null])));
    await $.mcall((await $.v(C, "Allcards")), "ShowModal", []);
  }
  if ($.truthy($.eq(L0["s"], "Finger"))) {
    await $.set(C, "Finger", (await $.mcall((await $.v(C, "TFinger")), "Create", [null])));
    await $.mcall((await $.v(C, "Finger")), "ShowModal", []);
  }
  if ($.truthy($.eq(L0["s"], "KorrReport"))) {
    await $.set(C, "korrreport", (await $.mcall((await $.v(C, "TKorrReport")), "Create", [null])));
    await $.mcall((await $.v(C, "KorrReport")), "ShowModal", []);
  }
  if ($.truthy($.eq(L0["s"], "FileReport"))) {
    await $.mcall((await $.v(C, "FileReports")), "ShowModal", []);
    await $.mset((await $.mv((await $.v(C, "FileReports")), "Edit1")), "Text", L0["k"]);
  }
  if ($.truthy($.eq(L0["s"], "Hesab"))) {
    await $.set(C, "hesab", (await $.mcall((await $.v(C, "Thesab")), "Create", [null])));
    await $.mcall((await $.v(C, "hesab")), "Showmodal", []);
  }
  if ($.truthy($.eq(L0["s"], "EXCELS"))) {
    await $.set(C, "excels", (await $.mcall((await $.v(C, "Texcels")), "Create", [null])));
    await $.mcall((await $.v(C, "excels")), "Showmodal", []);
  }
  if ($.truthy($.eq(L0["s"], "EXPIRY"))) {
    await $.set(C, "cardexpire", (await $.mcall((await $.v(C, "Tcardexpire")), "Create", [null])));
    await $.mcall((await $.v(C, "cardexpire")), "Showmodal", []);
  }
  if ($.truthy($.eq(L0["s"], "REZ"))) {
    await $.set(C, "KorrMoh", (await $.mcall((await $.v(C, "TKorrMoh")), "Create", [null])));
    await $.mcall((await $.v(C, "KorrMoh")), "Showmodal", []);
  }
  if ($.truthy($.eq(L0["s"], "OP"))) {
    await $.set(C, "operationtype", (await $.mcall((await $.v(C, "Toperationtype")), "Create", [null])));
    await $.mcall((await $.v(C, "operationtype")), "Showmodal", []);
  }
  if ($.truthy($.eq(L0["s"], "ACTIVE"))) {
    await $.set(C, "activecard", (await $.mcall((await $.v(C, "TActivecard")), "create", [null])));
    await $.mcall((await $.v(C, "activecard")), "Showmodal", []);
  }
  if ($.truthy($.eq(L0["s"], "Azipsnew"))) {
    await $.set(C, "v_dey", (await $.call(C, "strtoint", [L0["k"]])));
    await $.set(C, "azips", (await $.mcall((await $.v(C, "Tazips")), "create", [null])));
    await $.mcall((await $.v(C, "azips")), "Showmodal", []);
  }
  return L0.result;
}, {"params": ["s", "k"], "kind": "procedure", "ptypes": ["String", "String"]});
  U.method("TFileReports", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "datetimepicker1")), "datetime", (await $.v(C, "date")));
  await $.mset((await $.v(C, "datetimepicker2")), "datetime", (await $.v(C, "date")));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFileReports", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit1")), "Text", (await $.v(C, "x")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFileReports", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "oracledataset1")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("julian", async function julian(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dat": $.copyArg(p0), result: 0, "wday": 0, "feb": 0};
  await $.fixArgs(L0, ["dat"]);
  L0["yan"] = 31;
  L0["mar"] = 31;
  L0["apr"] = 30;
  L0["may"] = 31;
  L0["jun"] = 30;
  L0["jul"] = 31;
  L0["avg"] = 31;
  L0["seb"] = 30;
  L0["okt"] = 31;
  L0["nov"] = 30;
  L0["dec"] = 31;
  L0["wday"] = 0;
  if ($.truthy((await $.call(C, "IsLeapYear", [(await $.call(C, "strtoint", [(await $.call(C, "FormatDateTime", ["yyyy", L0["dat"]]))]))])))) {
    L0["feb"] = 29;
  } else {
    L0["feb"] = 28;
  }
  { const $t1 = (await $.call(C, "strtoint", [(await $.call(C, "FormatDateTime", ["mm", L0["dat"]]))]));
    if ($.eq($t1, 1)) {
      L0["wday"] = (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", L0["dat"]]))]));
    }
    else if ($.eq($t1, 2)) {
      L0["wday"] = $.add(L0["yan"], (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", L0["dat"]]))])));
    }
    else if ($.eq($t1, 3)) {
      L0["wday"] = $.add($.add(L0["yan"], L0["feb"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", L0["dat"]]))])));
    }
    else if ($.eq($t1, 4)) {
      L0["wday"] = $.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", L0["dat"]]))])));
    }
    else if ($.eq($t1, 5)) {
      L0["wday"] = $.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", L0["dat"]]))])));
    }
    else if ($.eq($t1, 6)) {
      L0["wday"] = $.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", L0["dat"]]))])));
    }
    else if ($.eq($t1, 7)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", L0["dat"]]))])));
    }
    else if ($.eq($t1, 8)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", L0["dat"]]))])));
    }
    else if ($.eq($t1, 9)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", L0["dat"]]))])));
    }
    else if ($.eq($t1, 10)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", L0["dat"]]))])));
    }
    else if ($.eq($t1, 11)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]), L0["okt"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", L0["dat"]]))])));
    }
    else if ($.eq($t1, 12)) {
      L0["wday"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["yan"], L0["feb"]), L0["mar"]), L0["apr"]), L0["may"]), L0["jun"]), L0["jul"]), L0["avg"]), L0["seb"]), L0["okt"]), L0["nov"]), (await $.call(C, "StrToInt", [(await $.call(C, "FormatDateTime", ["dd", L0["dat"]]))])));
    }
  }
  L0["result"] = L0["wday"];
  return L0.result;
}, {"params": ["dat"], "kind": "function", "ptypes": ["Tdate"]});
  U.method("TFileReports", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "bash": 0, "son": 0, "fl1": '', "fl2": '', "begindat": null, "enddat": null};
  await $.fixArgs(L0, ["sender"]);
  L0["bash"] = (await $.call(C, "julian", [(await $.mv((await $.v(C, "datetimepicker1")), "datetime"))]));
  L0["son"] = (await $.call(C, "julian", [(await $.mv((await $.v(C, "datetimepicker2")), "datetime"))]));
  if ($.truthy((await $.or_(($.lt(L0["bash"], 10)), async () => ($.lt(L0["son"], 10)))))) {
    L0["fl1"] = $.add("00", (await $.call(C, "inttostr", [L0["bash"]])));
    L0["fl2"] = $.add("00", (await $.call(C, "inttostr", [L0["son"]])));
  } else {
    if ($.truthy((await $.or_(($.lt(L0["bash"], 100)), async () => ($.lt(L0["son"], 100)))))) {
      L0["fl1"] = $.add("0", (await $.call(C, "inttostr", [L0["bash"]])));
      L0["fl2"] = $.add("0", (await $.call(C, "inttostr", [L0["son"]])));
    }
  }
  if ($.truthy((await $.or_(($.ge(L0["bash"], 100)), async () => ($.ge(L0["son"], 100)))))) {
    L0["fl1"] = (await $.call(C, "inttostr", [L0["bash"]]));
    L0["fl2"] = (await $.call(C, "inttostr", [L0["son"]]));
  }
  L0["begindat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "datetimepicker1")), "DateTime"))]))]));
  L0["enddat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "datetimepicker2")), "DateTime"))]))]));
  await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
  { const $t2 = (await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex"));
    if ($.eq($t2, 0)) {
      await $.mset((await $.v(C, "DBGrid1")), "DataSource", (await $.v(C, "DataSource1")));
      await $.stmt((await $.mcall((await $.v(C, "OracleDataSet1")), "SetVariable", ["BEGINDAT", (await $.mv((await $.v(C, "datetimepicker1")), "DateTime"))])));
      await $.stmt((await $.mcall((await $.v(C, "OracleDataSet1")), "SetVariable", ["ENDDAT", (await $.mv((await $.v(C, "datetimepicker2")), "DateTime"))])));
      await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
    }
    else if ($.eq($t2, 1)) {
      await $.mset((await $.v(C, "DBGrid1")), "DataSource", (await $.v(C, "DataSource3")));
      L0["begindat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "datetimepicker1")), "DateTime"))]))]));
      L0["enddat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "datetimepicker2")), "DateTime"))]))]));
      await $.mset((await $.v(C, "memo1")), "Text", (await $.mv((await $.mv((await $.v(C, "OracleDataSet3")), "SQL")), "Text")));
      await $.mcall((await $.v(C, "OracleDataSet3")), "Close", []);
      await $.stmt((await $.mcall((await $.v(C, "OracleDataSet3")), "SetVariable", ["begindat", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "datetimepicker1")), "DateTime"))]))])));
      await $.stmt((await $.mcall((await $.v(C, "OracleDataSet3")), "SetVariable", ["flname", L0["fl1"]])));
      await $.stmt((await $.mcall((await $.v(C, "OracleDataSet3")), "SetVariable", ["fl2name", L0["fl2"]])));
      await $.mcall((await $.v(C, "OracleDataSet3")), "Open", []);
      await $.mset((await $.v(C, "memo1")), "Text", (await $.mv((await $.mv((await $.v(C, "OracleDataSet3")), "SQL")), "Text")));
    }
    else if ($.eq($t2, 2)) {
      await $.mset((await $.v(C, "DBGrid1")), "DataSource", (await $.v(C, "DataSource4")));
      await $.mcall((await $.mv((await $.v(C, "OracleDataSet4")), "SQL")), "Clear", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "OracleDataSet4")), "SQL")), "Add", [$.add($.add($.add("select * from card_smsfiles_archive where to_number(substr(FILENAME,length(FILENAME)-2,3))>=", (await $.call(C, "inttostr", [L0["bash"]]))), " and to_number(substr(FILENAME,length(FILENAME)-2,3))<="), (await $.call(C, "inttostr", [L0["son"]])))])));
      await $.mcall((await $.v(C, "OracleDataSet4")), "Open", []);
    }
    else if ($.eq($t2, 3)) {
      await $.mset((await $.v(C, "DBGrid1")), "DataSource", (await $.v(C, "DataSource4")));
      await $.mcall((await $.mv((await $.v(C, "OracleDataSet4")), "SQL")), "Clear", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "OracleDataSet4")), "SQL")), "Add", [$.add($.add($.add("select * from CARD_DFILES_ARCHIVE where to_number(substr(FILENAME,length(FILENAME)-2,3))>=", (await $.call(C, "inttostr", [L0["bash"]]))), " and to_number(substr(FILENAME,length(FILENAME)-2,3))<="), (await $.call(C, "inttostr", [L0["son"]])))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "OracleDataSet4")), "SQL")), "Add", [$.add($.add($.add($.add($.add($.add($.add($.add("and ( transactiondate between ", "'"), (await $.call(C, "Formatdatetime", ["yyyymmdd", (await $.mv((await $.v(C, "datetimepicker1")), "datetime"))]))), "'"), " and "), "'"), (await $.call(C, "FormatDateTime", ["yyyymmdd", (await $.mv((await $.v(C, "datetimepicker2")), "datetime"))]))), "'"), ")")])));
      await $.mcall((await $.v(C, "OracleDataSet4")), "Open", []);
    }
    else if ($.eq($t2, 4)) {
      await $.mset((await $.v(C, "DBGrid1")), "DataSource", (await $.v(C, "DataSource2")));
      await $.mcall((await $.v(C, "OracleDataSet2")), "Close", []);
      L0["begindat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "datetimepicker1")), "DateTime"))]))]));
      L0["enddat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "datetimepicker2")), "DateTime"))]))]));
      await $.stmt((await $.mcall((await $.v(C, "OracleDataSet2")), "SetVariable", ["begindat", L0["begindat"]])));
      await $.stmt((await $.mcall((await $.v(C, "OracleDataSet2")), "SetVariable", ["enddat", L0["enddat"]])));
      await $.mset((await $.v(C, "memo1")), "Text", (await $.mv((await $.mv((await $.v(C, "OracleDataSet2")), "SQL")), "Text")));
      await $.mcall((await $.v(C, "OracleDataSet2")), "Open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFileReports", "ToolButton6Click", async function ToolButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t3 = (await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex"));
    if ($.eq($t3, 0) || $.eq($t3, 2) || $.eq($t3, 3)) {
      await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
      {
        const $t4 = (await $.v(C, "CMExcelExport1"));
        await $.stmt($.wcall([$t4], "Connect", [], C));
        await $.stmt((await $.wcall([$t4], "ExportDataset", [(await $.wv([$t4], "OracleDataSet1", C, false)), "FileReport", (await $.wv([$t4], "True", C, false))], C)));
        await $.stmt($.wcall([$t4], "Disconnect", [], C));
      }
    }
    else if ($.eq($t3, 1)) {
      await $.mcall((await $.v(C, "OracleDataSet3")), "open", []);
      {
        const $t5 = (await $.v(C, "CMExcelExport1"));
        await $.stmt($.wcall([$t5], "Connect", [], C));
        await $.stmt((await $.wcall([$t5], "ExportDataset", [(await $.wv([$t5], "OracleDataSet3", C, false)), "FileReport", (await $.wv([$t5], "True", C, false))], C)));
        await $.stmt($.wcall([$t5], "Disconnect", [], C));
      }
    }
    else if ($.eq($t3, 4)) {
      await $.mcall((await $.v(C, "OracleDataSet2")), "open", []);
      {
        const $t6 = (await $.v(C, "CMExcelExport1"));
        await $.stmt($.wcall([$t6], "Connect", [], C));
        await $.stmt((await $.wcall([$t6], "ExportDataset", [(await $.wv([$t6], "OracleDataSet2", C, false)), "FileReport", (await $.wv([$t6], "True", C, false))], C)));
        await $.stmt($.wcall([$t6], "Disconnect", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFileReports", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFileReports", "ToolButton14Click", async function ToolButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "oracledataset1")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FileReports", (await $.mcall((await $.v(C, "TFileReports")), "Create", [null])));
  return L0.result;
});
  return U;
}
