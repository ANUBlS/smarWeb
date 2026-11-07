// Generated from DecaMainForm.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DecaMainForm", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ComCtrls", "ImgList", "ActnList", "DB", "ExtCtrls", "Grids", "DBGrids", "CMExcelExport", "XMLDoc", "Gauges", "XFSCtrls", "DecaDataModuleImpl", "CommonDecls", "sbSystem", "sboapiDataModuleImpl", "SBTranslateProc", "BankInfoImpl"]);
  const C = [U];
  U.defClass("EFieldNotFoud", "Exception", {}, {});
  U.defClass("TDecaForm", "TForm", {"actionlist1": {"name": "ActionList1", "type": "TActionList"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "startexport": {"name": "StartExport", "type": "TAction"}, "button1": {"name": "Button1", "type": "TButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "savedlg_": {"name": "SaveDlg_", "type": "TSaveDialog"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "dtprepdate": {"name": "DTPRepDate", "type": "TDateTimePicker"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "dtpbrepdate": {"name": "DTPBRepDate", "type": "TDateTimePicker"}, "dtperepdate": {"name": "DTPERepDate", "type": "TDateTimePicker"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "editdest": {"name": "EditDest", "type": "TEdit"}, "sbsave": {"name": "SBSave", "type": "TSpeedButton"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "gauge1": {"name": "Gauge1", "type": "TGauge"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "repdat": {"name": "Repdat", "type": "TDateTimePicker"}, "label5": {"name": "Label5", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "label6": {"name": "Label6", "type": "TLabel"}, "speedbutton5": {"name": "SpeedButton5", "type": "TSpeedButton"}, "memolog": {"name": "Memolog", "type": "TMemo"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}, "checkbox4": {"name": "CheckBox4", "type": "TCheckBox"}, "savedlg": {"name": "SaveDlg", "type": "TSaveDialog"}, "radiogroup1": {"name": "RadioGroup1", "type": "TRadioGroup"}, "radiogroup2": {"name": "RadioGroup2", "type": "TRadioGroup"}}, {});
  U.init(async () => {
    U.var_("DecaForm", null, "TDecaForm");
    U.var_("SourceBuffer", '', "PChar");
    U.var_("UnusableGrops", [], "set");
    U.var_("AbortPressed", false, "Boolean");
    U.var_("f", null, "TextFile");
  });
  U.method("TDecaForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TDecaForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "edit1")), "Clear", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TDecaForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FrmBankinfo", (await $.mcall((await $.v(C, "TFrmBankinfo")), "Create", [Self])));
  await $.mset((await $.v(C, "Repdat")), "DateTime", (await $.v(C, "date")));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDecaForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TDecaForm", "SBSaveClick", async function SBSaveClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "SaveDlg"));
    if ($.truthy((await $.wv([$t1], "Execute", C, false)))) {
      await $.mset((await $.wv([$t1], "EditDest", C, false)), "Text", (await $.wv([$t1], "FileName", C, false)));
    }
  }
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => (await $.v(C, "f")), async ($t2) => { await $.set(C, "f", $t2); }), (await $.mv((await $.v(C, "EditDest")), "Text"))])));
  await $.stmt((await $.call(C, "Rewrite", [$.ref(async () => (await $.v(C, "f")), async ($t3) => { await $.set(C, "f", $t3); })])));
  await $.stmt((await $.call(C, "Closefile", [$.ref(async () => (await $.v(C, "f")), async ($t4) => { await $.set(C, "f", $t4); })])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDecaForm", "ShowDecaForm", async function ShowDecaForm(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "DecaDataModule", (await $.mcall((await $.v(C, "TDecaDataModule")), "Create", [Self])));
  await $.mset((await $.v(C, "DTPRepDate")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "DTPBRepDate")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "DTPERepDate")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.stmt($.call(C, "ShowModal", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TDecaForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDecaForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DecaDataModule")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "DecaForm")), "ShowDecaForm", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TDecaForm", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sr": 0, "r": 0, "s": 0, "i": 0, "a": 0, "strdate": '', "fvalue": '', "fname": '', "rdat": 0, "edate": 0, "hdate": 0, "sert": '', "sert1": '', "sert2": '', "aansistr": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["writestring"] = $.fn(async function WriteString(p0) {
  const L1 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["s"]);
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => (await $.v(C, "f")), async ($t5) => { await $.set(C, "f", $t5); }), (await $.mv((await $.v(C, "EditDest")), "Text"))])));
  await $.stmt((await $.call(C, "Append", [$.ref(async () => (await $.v(C, "f")), async ($t6) => { await $.set(C, "f", $t6); })])));
  await $.stmt((await $.call(C, "Write", [(await $.v(C, "f")), (await $.call(C, "UTF8Encode", [L1["s"]]))])));
  await $.stmt((await $.call(C, "Closefile", [$.ref(async () => (await $.v(C, "f")), async ($t7) => { await $.set(C, "f", $t7); })])));
  return L1.result;
});
  L0["writefilebegin"] = $.fn(async function WriteFileBegin() {
  const L1 = {result: undefined, "d": '', "m": '', "bankid": '', "bankname": '', "reportingdate": '', "abankinfo": $.rec("tbankinfo"), "day": 0, "month": 0, "year": 0};
  await $.stmt((await $.call(C, "DecodeDate", [(await $.mv((await $.v(C, "Repdat")), "DateTime")), $.ref(async () => L1["year"], async ($t8) => { L1["year"] = $t8; }), $.ref(async () => L1["month"], async ($t9) => { L1["month"] = $t9; }), $.ref(async () => L1["day"], async ($t10) => { L1["day"] = $t10; })])));
  L1["d"] = (await $.call(C, "inttostr", [L1["day"]]));
  L1["m"] = (await $.call(C, "inttostr", [L1["month"]]));
  if ($.truthy($.eq((await $.call(C, "Length", [(await $.call(C, "inttostr", [L1["day"]]))])), 1))) {
    L1["d"] = $.add("0", (await $.call(C, "inttostr", [L1["day"]])));
  }
  if ($.truthy($.eq((await $.call(C, "Length", [(await $.call(C, "inttostr", [L1["month"]]))])), 1))) {
    L1["m"] = $.add("0", (await $.call(C, "inttostr", [L1["month"]])));
  }
  L1["abankinfo"] = (await $.mv((await $.v(C, "FrmBankinfo")), "Get_BankInfo"));
  L1["bankid"] = (await $.mv(L1["abankinfo"], "BankID"));
  L1["bankname"] = (await $.mv(L1["abankinfo"], "BankName"));
  L1["reportingdate"] = $.add($.add($.add($.add(L1["d"], "/"), L1["m"]), "/"), (await $.call(C, "inttostr", [L1["year"]])));
  await $.stmt((await $.callv(L0["writestring"], ["<?xml version=\"1.0\" encoding=\"UTF-8\" ?> "])));
  await $.stmt((await $.callv(L0["writestring"], ["<CreditInfo>"])));
  await $.stmt((await $.callv(L0["writestring"], ["<Header>"])));
  await $.stmt((await $.callv(L0["writestring"], ["<BankID>"])));
  await $.stmt((await $.callv(L0["writestring"], [L1["bankid"]])));
  await $.stmt((await $.callv(L0["writestring"], ["</BankID>"])));
  await $.stmt((await $.callv(L0["writestring"], ["<BankName>"])));
  await $.stmt((await $.callv(L0["writestring"], [L1["bankname"]])));
  await $.stmt((await $.callv(L0["writestring"], ["</BankName>"])));
  await $.stmt((await $.callv(L0["writestring"], ["<ReportingDate>"])));
  await $.stmt((await $.callv(L0["writestring"], [L1["reportingdate"]])));
  await $.stmt((await $.callv(L0["writestring"], ["</ReportingDate>"])));
  await $.stmt((await $.callv(L0["writestring"], ["</Header>"])));
  await $.stmt((await $.callv(L0["writestring"], ["<Credits>"])));
  return L1.result;
});
  L0["writedata"] = $.fn(async function WriteData(p0, p1) {
  const L1 = {"field": $.copyArg(p0), "value": $.copyArg(p1), result: undefined, "s": '', "fieldvalue": '', "tagfirst": '', "taglast": '', "tagprefix": '', "tagsuffix": '', "cancontainutf8": 0, "parentgroup": 0, "fieldgroup": 0, "aansistr": ''};
  await $.fixArgs(L1, ["field", "value"]);
  L1["getspecimensettings"] = $.fn(async function GetSpecimenSettings(p0, p1, p2, p3, p4, p5, p6, p7) {
  const L2 = {"fieldname": $.copyArg(p0), "tagfirst": $.asRef(p1), "taglast": $.asRef(p2), "tagprefix": $.asRef(p3), "tagsuffix": $.asRef(p4), "fieldgroup": $.asRef(p5), "cancontainutf8": $.asRef(p6), "parentgroup": $.asRef(p7), result: undefined};
  await $.fixArgs(L2, ["fieldname"]);
  {
    const $t11 = (await $.mv((await $.v(C, "DecaDataModule")), "TagSettings"));
    if ($.truthy((await $.wcall([$t11], "Locate", ["FieldName", (await $.wv([$t11], "FieldName", { get: async () => L2["fieldname"], set: async (v) => { L2["fieldname"] = v; }, local: true }, false)), [(await $.wv([$t11], "loCaseInsensitive", C, false))]], C)))) {
      await $.wset([$t11], "TagFirst", (await $.mv((await $.wcall([$t11], "FieldByName", ["TagFirst"], C)), "AsString")), { get: async () => await L2["tagfirst"].get(), set: async (v) => { await L2["tagfirst"].set(v); }, local: true });
      await $.wset([$t11], "TagLast", (await $.mv((await $.wcall([$t11], "FieldByName", ["TagLast"], C)), "AsString")), { get: async () => await L2["taglast"].get(), set: async (v) => { await L2["taglast"].set(v); }, local: true });
      await $.wset([$t11], "TagPrefix", (await $.mv((await $.wcall([$t11], "FieldByName", ["TagPrefix"], C)), "AsString")), { get: async () => await L2["tagprefix"].get(), set: async (v) => { await L2["tagprefix"].set(v); }, local: true });
      await $.wset([$t11], "TagSuffix", (await $.mv((await $.wcall([$t11], "FieldByName", ["TagSuffix"], C)), "AsString")), { get: async () => await L2["tagsuffix"].get(), set: async (v) => { await L2["tagsuffix"].set(v); }, local: true });
      await $.wset([$t11], "FieldGroup", (await $.mv((await $.wcall([$t11], "FieldByName", ["FieldGroup"], C)), "AsInteger")), { get: async () => await L2["fieldgroup"].get(), set: async (v) => { await L2["fieldgroup"].set(v); }, local: true });
      await $.wset([$t11], "CanContainUTF8", (await $.mv((await $.wcall([$t11], "FieldByName", ["AlphaField"], C)), "AsInteger")), { get: async () => await L2["cancontainutf8"].get(), set: async (v) => { await L2["cancontainutf8"].set(v); }, local: true });
      await $.wset([$t11], "ParentGroup", (await $.mv((await $.wcall([$t11], "FieldByName", ["ParentGroup"], C)), "AsInteger")), { get: async () => await L2["parentgroup"].get(), set: async (v) => { await L2["parentgroup"].set(v); }, local: true });
    } else {
      throw $.raise((await $.mcall((await $.wv([$t11], "EFieldNotFoud", C, false)), "Create", ["TagSettings Table : Field Not Found!"])));
    }
  }
  return L2.result;
});
  L1["s"] = "";
  await $.stmt((await $.callv(L1["getspecimensettings"], [L1["field"], $.ref(async () => L1["tagfirst"], async ($t12) => { L1["tagfirst"] = $t12; }), $.ref(async () => L1["taglast"], async ($t13) => { L1["taglast"] = $t13; }), $.ref(async () => L1["tagprefix"], async ($t14) => { L1["tagprefix"] = $t14; }), $.ref(async () => L1["tagsuffix"], async ($t15) => { L1["tagsuffix"] = $t15; }), $.ref(async () => L1["fieldgroup"], async ($t16) => { L1["fieldgroup"] = $t16; }), $.ref(async () => L1["cancontainutf8"], async ($t17) => { L1["cancontainutf8"] = $t17; }), $.ref(async () => L1["parentgroup"], async ($t18) => { L1["parentgroup"] = $t18; })])));
  if ($.truthy((await $.or_(($.in_(L1["fieldgroup"], (await $.v(C, "UnusableGrops")))), async () => ($.in_(L1["parentgroup"], (await $.v(C, "UnusableGrops")))))))) {
    if ($.truthy((await $.and_(($.ne(L1["tagsuffix"], "")), async () => ($.not(($.in_(L1["parentgroup"], (await $.v(C, "UnusableGrops")))))))))) {
      await $.stmt((await $.callv(L0["writestring"], [L1["tagsuffix"]])));
    }
    return L1.result;
  }
  L1["fieldvalue"] = L1["value"];
  if ($.truthy(($.eq(L1["fieldvalue"], "")))) {
    if ($.truthy((await $.and_((await $.and_(($.ne(L1["tagprefix"], "")), async () => ($.not(($.in_(L1["parentgroup"], (await $.v(C, "UnusableGrops")))))))), async () => ($.ne(L1["parentgroup"], (-(1)))))))) {
      await $.stmt((await $.callv(L0["writestring"], [L1["tagprefix"]])));
    }
    if ($.truthy((await $.and_((await $.and_(($.ne(L1["tagsuffix"], "")), async () => ($.not(($.in_(L1["parentgroup"], (await $.v(C, "UnusableGrops")))))))), async () => (($.ne(L1["parentgroup"], (-(1))))))))) {
      await $.stmt((await $.callv(L0["writestring"], [L1["tagsuffix"]])));
    }
    if ($.truthy(($.eq(L1["parentgroup"], (-(2)))))) {
      await $.stmt((await $.callv(L0["writestring"], [$.add(L1["tagfirst"], L1["taglast"])])));
    }
    if ($.truthy((await $.and_((await $.and_(($.ne(L1["fieldgroup"], 0)), async () => ($.ne(L1["parentgroup"], 0)))), async () => ($.ne(L1["parentgroup"], (-(2)))))))) {
      await $.set(C, "UnusableGrops", $.add((await $.v(C, "UnusableGrops")), [L1["fieldgroup"]]));
    }
    return L1.result;
  }
  L1["s"] = $.add($.add($.add($.add(L1["tagprefix"], L1["tagfirst"]), L1["fieldvalue"]), L1["taglast"]), L1["tagsuffix"]);
  L1["aansistr"] = (await $.call(C, "UTF8Encode", [L1["s"]]));
  await $.stmt((await $.callv(L0["writestring"], [L1["aansistr"]])));
  return L1.result;
});
  L0["writerowsprefix"] = $.fn(async function WriteRowsPrefix() {
  const L1 = {result: undefined};
  await $.stmt((await $.callv(L0["writestring"], ["<Credit>"])));
  return L1.result;
});
  L0["writerowssuffix"] = $.fn(async function WriteRowsSuffix() {
  const L1 = {result: undefined};
  await $.stmt((await $.callv(L0["writestring"], ["</Credit>"])));
  return L1.result;
});
  L0["writefileend"] = $.fn(async function WriteFileEnd() {
  const L1 = {result: undefined};
  await $.stmt((await $.callv(L0["writestring"], ["</Credits>"])));
  await $.stmt((await $.callv(L0["writestring"], ["</CreditInfo>"])));
  return L1.result;
});
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 0))) {
    await $.mset((await $.mv((await $.mv((await $.v(C, "DecaDataModule")), "DecaData")), "sql")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "DecaDataModule")), "OracleDataSet5")), "SQL")), "Text")));
  } else {
    await $.mset((await $.mv((await $.mv((await $.v(C, "DecaDataModule")), "DecaData")), "sql")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "DecaDataModule")), "OracleDataSet4")), "SQL")), "Text")));
  }
  await $.mcall((await $.mv((await $.v(C, "DecaDataModule")), "OracleQuery1")), "Execute", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DecaDataModule")), "OracleQuery1")), "Session")), "Commit", []);
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditDest")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["      Faylı seçməmisiz!     "])));
    return L0.result;
  }
  await $.stmt((await $.call(C, "LogInformation", ["İxrac Başladı"])));
  try {
    await $.set(C, "UnusableGrops", []);
    await $.stmt((await $.callv(L0["writefilebegin"], [])));
    L0["hdate"] = (await $.mv((await $.v(C, "DTPRepDate")), "DateTime"));
    L0["edate"] = (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"));
    L0["rdat"] = (await $.mv((await $.v(C, "Repdat")), "DateTime"));
    {
      const $t19 = (await $.wobj(C, "DecaDataModule"));
      {
        const $t20 = (await $.wv([$t19], "DecaData", C, false));
        if ($.truthy($.eq((await $.wv([$t19, $t20], "Active", C, false)), (await $.wv([$t19, $t20], "true", C, false))))) {
          await $.stmt($.wcall([$t19, $t20], "close", [], C));
        }
        await $.stmt($.wcall([$t19, $t20], "ClearVariables", [], C));
        await $.stmt((await $.wcall([$t19, $t20], "SetVariable", ["HDATE", (await $.wcall([$t19, $t20], "integer", [(await $.wcall([$t19, $t20], "trunc", [(await $.wv([$t19, $t20], "HDATE", { get: async () => L0["hdate"], set: async (v) => { L0["hdate"] = v; }, local: true }, false))], C))], C))], C)));
        await $.stmt((await $.wcall([$t19, $t20], "SetVariable", ["EDATE", (await $.wcall([$t19, $t20], "integer", [(await $.wcall([$t19, $t20], "trunc", [(await $.wv([$t19, $t20], "EDATE", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))], C))], C))], C)));
        await $.stmt((await $.wcall([$t19, $t20], "SetVariable", ["RDAT", (await $.wcall([$t19, $t20], "integer", [(await $.wcall([$t19, $t20], "trunc", [(await $.wv([$t19, $t20], "rdat", { get: async () => L0["rdat"], set: async (v) => { L0["rdat"] = v; }, local: true }, false))], C))], C))], C)));
        await $.mcall((await $.wv([$t19, $t20], "Portfolio", C, false)), "close", []);
        await $.stmt((await $.mcall((await $.wv([$t19, $t20], "Portfolio", C, false)), "SetVariable", ["vhdate", (await $.wcall([$t19, $t20], "integer", [(await $.wcall([$t19, $t20], "trunc", [(await $.wv([$t19, $t20], "rdat", { get: async () => L0["rdat"], set: async (v) => { L0["rdat"] = v; }, local: true }, false))], C))], C))])));
        await $.wset([$t19, $t20], "StrDate", " ", { get: async () => L0["strdate"], set: async (v) => { L0["strdate"] = v; }, local: true });
        if ($.truthy((await $.mv((await $.wv([$t19, $t20], "CheckBox1", C, false)), "Checked")))) {
          if ($.truthy($.eq((await $.mv((await $.wv([$t19, $t20], "RadioGroup2", C, false)), "ItemIndex")), 0))) {
            await $.wset([$t19, $t20], "StrDate", $.add($.add($.add($.add("and  DATEOFCONCLUSION between  '", (await $.wcall([$t19, $t20], "FormatDateTime", ["dd-MMM-yyyy", (await $.wcall([$t19, $t20], "Trunc", [(await $.mv((await $.wv([$t19, $t20], "DTPBRepDate", C, false)), "DateTime"))], C))], C))), "' and '"), (await $.wcall([$t19, $t20], "FormatDateTime", ["dd-mmm-yyyy", (await $.wcall([$t19, $t20], "Trunc", [(await $.mv((await $.wv([$t19, $t20], "DTPERepDate", C, false)), "DateTime"))], C))], C))), "'"), { get: async () => L0["strdate"], set: async (v) => { L0["strdate"] = v; }, local: true });
          } else {
            await $.wset([$t19, $t20], "StrDate", $.add($.add($.add($.add($.add($.add("and rest +interestrest+duerest+dueinterestrest=0 and closedate is null ", " and b.id in( select creditid from cm_payments where paydate between '"), (await $.wcall([$t19, $t20], "FormatDateTime", ["dd-MMM-yyyy", (await $.wcall([$t19, $t20], "Trunc", [(await $.mv((await $.wv([$t19, $t20], "DTPBRepDate", C, false)), "DateTime"))], C))], C))), "' and '"), (await $.wcall([$t19, $t20], "FormatDateTime", ["dd-mmm-yyyy", (await $.wcall([$t19, $t20], "Trunc", [(await $.mv((await $.wv([$t19, $t20], "DTPERepDate", C, false)), "DateTime"))], C))], C))), "'"), " group by paydate,creditid)"), { get: async () => L0["strdate"], set: async (v) => { L0["strdate"] = v; }, local: true });
          }
        }
        { const $t21 = await $.iset((await $.mv((await $.wv([$t19, $t20], "Portfolio", C, false)), "SQL")), [2], (await $.wv([$t19, $t20], "StrDate", { get: async () => L0["strdate"], set: async (v) => { L0["strdate"] = v; }, local: true }, false))); if ($t21 !== undefined) { await $.mset((await $.wv([$t19, $t20], "Portfolio", C, false)), "SQL", $t21); } }
        { const $t22 = await $.iset((await $.mv((await $.wv([$t19, $t20], "Portfolio", C, false)), "SQL")), [3], ""); if ($t22 !== undefined) { await $.mset((await $.wv([$t19, $t20], "Portfolio", C, false)), "SQL", $t22); } }
        if ($.truthy($.ne((await $.mv((await $.wv([$t19, $t20], "Edit1", C, false)), "Text")), ""))) {
          { const $t23 = await $.iset((await $.mv((await $.wv([$t19, $t20], "Portfolio", C, false)), "SQL")), [3], $.add($.add("and b.id in(", (await $.mv((await $.wv([$t19, $t20], "Edit1", C, false)), "Text"))), ")")); if ($t23 !== undefined) { await $.mset((await $.wv([$t19, $t20], "Portfolio", C, false)), "SQL", $t23); } }
        }
      }
      await $.mcall((await $.wv([$t19], "Portfolio", C, false)), "open", []);
      await $.wset([$t19], "sr", (await $.mv((await $.wv([$t19], "Portfolio", C, false)), "RecordCount")), { get: async () => L0["sr"], set: async (v) => { L0["sr"] = v; }, local: true });
      await $.wset([$t19], "S", 1, { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      { const $t24 = (await $.wv([$t19], "sr", { get: async () => L0["sr"], set: async (v) => { L0["sr"] = v; }, local: true }, false));
        await $.wset([$t19], "I", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t25 = true;
        for (;;) {
          if (!$t25) { await $.wset([$t19], "I", $.succ((await $.wv([$t19], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t25 = false;
          if (!($.ord((await $.wv([$t19], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t24))) break;
          try {
            await $.mcall((await $.wv([$t19], "DecaData", C, false)), "close", []);
            { const $t27 = await $.iset((await $.mv((await $.wv([$t19], "DecaData", C, false)), "SQL")), [144], $.add(" and p.id=", (await $.mv((await $.mcall((await $.wv([$t19], "Portfolio", C, false)), "FieldByName", ["id"])), "AsString")))); if ($t27 !== undefined) { await $.mset((await $.wv([$t19], "DecaData", C, false)), "SQL", $t27); } }
            await $.mcall((await $.wv([$t19], "DecaData", C, false)), "Open", []);
          } catch ($t26) {
            $.rethrowControl($t26);
            $.handled($t26);
            await $.stmt((await $.wcall([$t19], "showmessage", [(await $.mv((await $.mcall((await $.wv([$t19], "Portfolio", C, false)), "FieldByName", ["id"])), "AsString"))], C)));
          }
          if ($.truthy($.gt((await $.mv((await $.wv([$t19], "DecaData", C, false)), "RecordCount")), 0))) {
            await $.wset([$t19], "UnusableGrops", [], C);
            await $.mset((await $.wv([$t19], "Gauge1", C, false)), "Progress", (await $.wcall([$t19], "Trunc", [$.fdiv($.mul((await $.wv([$t19], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), 100), (await $.wv([$t19], "sr", { get: async () => L0["sr"], set: async (v) => { L0["sr"] = v; }, local: true }, false)))], C)));
            await $.wset([$t19], "S", $.add((await $.wv([$t19], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), 1), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
            await $.wset([$t19], "AAnsiStr", (await $.wcall([$t19], "UTF8Encode", [(await $.mv((await $.mcall((await $.wv([$t19], "DecaData", C, false)), "FieldByName", ["credit"])), "AsWideString"))], C)), { get: async () => L0["aansistr"], set: async (v) => { L0["aansistr"] = v; }, local: true });
            await $.stmt((await $.wcall([$t19], "WriteString", [(await $.wv([$t19], "AAnsiStr", { get: async () => L0["aansistr"], set: async (v) => { L0["aansistr"] = v; }, local: true }, false))], { get: async () => L0["writestring"], set: async (v) => { L0["writestring"] = v; }, local: true })));
          }
          await $.mcall((await $.wv([$t19], "Portfolio", C, false)), "next", []);
          await $.tick();
        }
      }
    }
    await $.stmt((await $.callv(L0["writefileend"], [])));
    await $.stmt((await $.call(C, "LogInformation", [$.add($.add("İxrac qurtardı ", (await $.call(C, "inttostr", [$.sub(L0["s"], 1)]))), "- sayda kredit ixrac olundu")])));
    await $.stmt((await $.call(C, "MessageDlg", ["XML file uğurla yaradıldı", (await $.v(C, "mtInformation")), [(await $.v(C, "mbOk"))], 0])));
    await $.mset((await $.v(C, "Gauge1")), "Progress", 0);
    await $.mset((await $.v(C, "SpeedButton3")), "Enabled", false);
    await $.mset((await $.v(C, "EditDest")), "Text", "");
  } finally {
    await $.stmt((await $.mcall((await $.v(C, "EFieldNotFoud")), "Create", ["File yaradıla bilmədi!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDecaForm", "SpeedButton4Click", async function SpeedButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FrmBankinfo")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDecaForm", "SpeedButton5Click", async function SpeedButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sr": 0, "r": 0, "s": 0, "i": 0, "a": 0, "strdate": '', "fvalue": '', "fname": '', "edate": 0, "hdate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["writestring"] = $.fn(async function WriteString(p0) {
  const L1 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["s"]);
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => (await $.v(C, "f")), async ($t28) => { await $.set(C, "f", $t28); }), (await $.mv((await $.v(C, "EditDest")), "Text"))])));
  await $.stmt((await $.call(C, "Append", [$.ref(async () => (await $.v(C, "f")), async ($t29) => { await $.set(C, "f", $t29); })])));
  L1["s"] = (await $.call(C, "StringReplace", [L1["s"], ";", "_", [(await $.v(C, "rfReplaceAll"))]]));
  await $.stmt((await $.call(C, "Write", [(await $.v(C, "f")), (await $.call(C, "UTF8Encode", [(await $.call(C, "StringReplace", [L1["s"], $.add("\r", "\n"), "", [(await $.v(C, "rfReplaceAll"))]]))]))])));
  await $.stmt((await $.call(C, "Closefile", [$.ref(async () => (await $.v(C, "f")), async ($t30) => { await $.set(C, "f", $t30); })])));
  return L1.result;
});
  L0["writefilebegin"] = $.fn(async function WriteFileBegin() {
  const L1 = {result: undefined, "d": '', "m": '', "bankid": '', "bankname": '', "reportingdate": '', "abankinfo": $.rec("tbankinfo"), "day": 0, "month": 0, "year": 0};
  await $.stmt((await $.call(C, "DecodeDate", [(await $.mv((await $.v(C, "Repdat")), "DateTime")), $.ref(async () => L1["year"], async ($t31) => { L1["year"] = $t31; }), $.ref(async () => L1["month"], async ($t32) => { L1["month"] = $t32; }), $.ref(async () => L1["day"], async ($t33) => { L1["day"] = $t33; })])));
  L1["d"] = (await $.call(C, "inttostr", [L1["day"]]));
  L1["m"] = (await $.call(C, "inttostr", [L1["month"]]));
  if ($.truthy($.eq((await $.call(C, "Length", [(await $.call(C, "inttostr", [L1["day"]]))])), 1))) {
    L1["d"] = $.add("0", (await $.call(C, "inttostr", [L1["day"]])));
  }
  if ($.truthy($.eq((await $.call(C, "Length", [(await $.call(C, "inttostr", [L1["month"]]))])), 1))) {
    L1["m"] = $.add("0", (await $.call(C, "inttostr", [L1["month"]])));
  }
  L1["abankinfo"] = (await $.mv((await $.v(C, "FrmBankinfo")), "Get_BankInfo"));
  L1["bankid"] = (await $.mv(L1["abankinfo"], "BankID"));
  L1["bankname"] = (await $.mv(L1["abankinfo"], "BankName"));
  L1["reportingdate"] = $.add($.add($.add($.add(L1["d"], "/"), L1["m"]), "/"), (await $.call(C, "inttostr", [L1["year"]])));
  await $.stmt((await $.callv(L0["writestring"], ["<?xml version=\"1.0\" encoding=\"UTF-8\" ?> "])));
  await $.stmt((await $.callv(L0["writestring"], ["<CreditInfo>"])));
  await $.stmt((await $.callv(L0["writestring"], ["<Header>"])));
  await $.stmt((await $.callv(L0["writestring"], ["<BankID>"])));
  await $.stmt((await $.callv(L0["writestring"], [L1["bankid"]])));
  await $.stmt((await $.callv(L0["writestring"], ["</BankID>"])));
  await $.stmt((await $.callv(L0["writestring"], ["<BankName>"])));
  await $.stmt((await $.callv(L0["writestring"], [L1["bankname"]])));
  await $.stmt((await $.callv(L0["writestring"], ["</BankName>"])));
  await $.stmt((await $.callv(L0["writestring"], ["<ReportingDate>"])));
  await $.stmt((await $.callv(L0["writestring"], [L1["reportingdate"]])));
  await $.stmt((await $.callv(L0["writestring"], ["</ReportingDate>"])));
  await $.stmt((await $.callv(L0["writestring"], ["</Header>"])));
  await $.stmt((await $.callv(L0["writestring"], ["<Credits>"])));
  return L1.result;
});
  L0["writedata"] = $.fn(async function WriteData(p0, p1) {
  const L1 = {"field": $.copyArg(p0), "value": $.copyArg(p1), result: undefined, "s": '', "fieldvalue": '', "tagfirst": '', "taglast": '', "tagprefix": '', "tagsuffix": '', "cancontainutf8": 0, "parentgroup": 0, "fieldgroup": 0, "aansistr": ''};
  await $.fixArgs(L1, ["field", "value"]);
  L1["getspecimensettings"] = $.fn(async function GetSpecimenSettings(p0, p1, p2, p3, p4, p5, p6, p7) {
  const L2 = {"fieldname": $.copyArg(p0), "tagfirst": $.asRef(p1), "taglast": $.asRef(p2), "tagprefix": $.asRef(p3), "tagsuffix": $.asRef(p4), "fieldgroup": $.asRef(p5), "cancontainutf8": $.asRef(p6), "parentgroup": $.asRef(p7), result: undefined};
  await $.fixArgs(L2, ["fieldname"]);
  {
    const $t34 = (await $.mv((await $.v(C, "DecaDataModule")), "TagSettings"));
    if ($.truthy((await $.wcall([$t34], "Locate", ["FieldName", (await $.wv([$t34], "FieldName", { get: async () => L2["fieldname"], set: async (v) => { L2["fieldname"] = v; }, local: true }, false)), [(await $.wv([$t34], "loCaseInsensitive", C, false))]], C)))) {
      await $.wset([$t34], "TagFirst", (await $.mv((await $.wcall([$t34], "FieldByName", ["TagFirst"], C)), "AsString")), { get: async () => await L2["tagfirst"].get(), set: async (v) => { await L2["tagfirst"].set(v); }, local: true });
      await $.wset([$t34], "TagLast", (await $.mv((await $.wcall([$t34], "FieldByName", ["TagLast"], C)), "AsString")), { get: async () => await L2["taglast"].get(), set: async (v) => { await L2["taglast"].set(v); }, local: true });
      await $.wset([$t34], "TagPrefix", (await $.mv((await $.wcall([$t34], "FieldByName", ["TagPrefix"], C)), "AsString")), { get: async () => await L2["tagprefix"].get(), set: async (v) => { await L2["tagprefix"].set(v); }, local: true });
      await $.wset([$t34], "TagSuffix", (await $.mv((await $.wcall([$t34], "FieldByName", ["TagSuffix"], C)), "AsString")), { get: async () => await L2["tagsuffix"].get(), set: async (v) => { await L2["tagsuffix"].set(v); }, local: true });
      await $.wset([$t34], "FieldGroup", (await $.mv((await $.wcall([$t34], "FieldByName", ["FieldGroup"], C)), "AsInteger")), { get: async () => await L2["fieldgroup"].get(), set: async (v) => { await L2["fieldgroup"].set(v); }, local: true });
      await $.wset([$t34], "CanContainUTF8", (await $.mv((await $.wcall([$t34], "FieldByName", ["AlphaField"], C)), "AsInteger")), { get: async () => await L2["cancontainutf8"].get(), set: async (v) => { await L2["cancontainutf8"].set(v); }, local: true });
      await $.wset([$t34], "ParentGroup", (await $.mv((await $.wcall([$t34], "FieldByName", ["ParentGroup"], C)), "AsInteger")), { get: async () => await L2["parentgroup"].get(), set: async (v) => { await L2["parentgroup"].set(v); }, local: true });
    } else {
      throw $.raise((await $.mcall((await $.wv([$t34], "EFieldNotFoud", C, false)), "Create", ["TagSettings Table : Field Not Found!"])));
    }
  }
  return L2.result;
});
  L1["s"] = "";
  await $.stmt((await $.callv(L1["getspecimensettings"], [L1["field"], $.ref(async () => L1["tagfirst"], async ($t35) => { L1["tagfirst"] = $t35; }), $.ref(async () => L1["taglast"], async ($t36) => { L1["taglast"] = $t36; }), $.ref(async () => L1["tagprefix"], async ($t37) => { L1["tagprefix"] = $t37; }), $.ref(async () => L1["tagsuffix"], async ($t38) => { L1["tagsuffix"] = $t38; }), $.ref(async () => L1["fieldgroup"], async ($t39) => { L1["fieldgroup"] = $t39; }), $.ref(async () => L1["cancontainutf8"], async ($t40) => { L1["cancontainutf8"] = $t40; }), $.ref(async () => L1["parentgroup"], async ($t41) => { L1["parentgroup"] = $t41; })])));
  if ($.truthy((await $.or_(($.in_(L1["fieldgroup"], (await $.v(C, "UnusableGrops")))), async () => ($.in_(L1["parentgroup"], (await $.v(C, "UnusableGrops")))))))) {
    if ($.truthy((await $.and_(($.ne(L1["tagsuffix"], "")), async () => ($.not(($.in_(L1["parentgroup"], (await $.v(C, "UnusableGrops")))))))))) {
      await $.stmt((await $.callv(L0["writestring"], [L1["tagsuffix"]])));
    }
    return L1.result;
  }
  L1["fieldvalue"] = L1["value"];
  if ($.truthy(($.eq(L1["fieldvalue"], "")))) {
    if ($.truthy((await $.and_((await $.and_(($.ne(L1["tagprefix"], "")), async () => ($.not(($.in_(L1["parentgroup"], (await $.v(C, "UnusableGrops")))))))), async () => ($.ne(L1["parentgroup"], (-(1)))))))) {
      await $.stmt((await $.callv(L0["writestring"], [L1["tagprefix"]])));
    }
    if ($.truthy((await $.and_((await $.and_(($.ne(L1["tagsuffix"], "")), async () => ($.not(($.in_(L1["parentgroup"], (await $.v(C, "UnusableGrops")))))))), async () => (($.ne(L1["parentgroup"], (-(1))))))))) {
      await $.stmt((await $.callv(L0["writestring"], [L1["tagsuffix"]])));
    }
    if ($.truthy(($.eq(L1["parentgroup"], (-(2)))))) {
      await $.stmt((await $.callv(L0["writestring"], [$.add(L1["tagfirst"], L1["taglast"])])));
    }
    if ($.truthy((await $.and_((await $.and_(($.ne(L1["fieldgroup"], 0)), async () => ($.ne(L1["parentgroup"], 0)))), async () => ($.ne(L1["parentgroup"], (-(2)))))))) {
      await $.set(C, "UnusableGrops", $.add((await $.v(C, "UnusableGrops")), [L1["fieldgroup"]]));
    }
    return L1.result;
  }
  L1["s"] = $.add($.add($.add($.add(L1["tagprefix"], L1["tagfirst"]), L1["fieldvalue"]), L1["taglast"]), L1["tagsuffix"]);
  L1["aansistr"] = (await $.call(C, "UTF8Encode", [L1["s"]]));
  await $.stmt((await $.callv(L0["writestring"], [L1["aansistr"]])));
  return L1.result;
});
  L0["writerowsprefix"] = $.fn(async function WriteRowsPrefix() {
  const L1 = {result: undefined};
  await $.stmt((await $.callv(L0["writestring"], ["<Credit>"])));
  return L1.result;
});
  L0["writerowssuffix"] = $.fn(async function WriteRowsSuffix() {
  const L1 = {result: undefined};
  await $.stmt((await $.callv(L0["writestring"], ["</Credit>"])));
  return L1.result;
});
  L0["writefileend"] = $.fn(async function WriteFileEnd() {
  const L1 = {result: undefined};
  await $.stmt((await $.callv(L0["writestring"], ["</Credits>"])));
  await $.stmt((await $.callv(L0["writestring"], ["</CreditInfo>"])));
  return L1.result;
});
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditDest")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["      Faylı seçməmisiz!     "])));
    return L0.result;
  }
  await $.stmt((await $.call(C, "LogInformation", ["İxrac Başladı"])));
  try {
    await $.set(C, "UnusableGrops", []);
    await $.stmt((await $.callv(L0["writefilebegin"], [])));
    L0["hdate"] = (await $.mv((await $.v(C, "DTPRepDate")), "DateTime"));
    L0["edate"] = (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"));
    {
      const $t42 = (await $.wobj(C, "DecaDataModule"));
      {
        const $t43 = (await $.wv([$t42], "DecaData_clos", C, false));
        if ($.truthy($.eq((await $.wv([$t42, $t43], "Active", C, false)), (await $.wv([$t42, $t43], "true", C, false))))) {
          await $.stmt($.wcall([$t42, $t43], "close", [], C));
        }
        await $.stmt($.wcall([$t42, $t43], "ClearVariables", [], C));
        await $.stmt((await $.wcall([$t42, $t43], "SetVariable", ["HDATE", (await $.wv([$t42, $t43], "HDATE", { get: async () => L0["hdate"], set: async (v) => { L0["hdate"] = v; }, local: true }, false))], C)));
        await $.stmt((await $.wcall([$t42, $t43], "SetVariable", ["EDATE", (await $.wv([$t42, $t43], "EDATE", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))], C)));
        if ($.truthy($.eq((await $.mv((await $.wv([$t42, $t43], "RadioGroup2", C, false)), "ItemIndex")), 0))) {
          await $.wset([$t42, $t43], "StrDate", $.add($.add($.add($.add("and DATEOFCONCLUSION between  '", (await $.wcall([$t42, $t43], "FormatDateTime", ["dd-MMM-yyyy", (await $.wcall([$t42, $t43], "Trunc", [(await $.mv((await $.wv([$t42, $t43], "DTPBRepDate", C, false)), "DateTime"))], C))], C))), "' and '"), (await $.wcall([$t42, $t43], "FormatDateTime", ["dd-mmm-yyyy", (await $.wcall([$t42, $t43], "Trunc", [(await $.mv((await $.wv([$t42, $t43], "DTPERepDate", C, false)), "DateTime"))], C))], C))), "'"), { get: async () => L0["strdate"], set: async (v) => { L0["strdate"] = v; }, local: true });
        } else {
          if ($.truthy($.eq((await $.mv((await $.wv([$t42, $t43], "RadioGroup2", C, false)), "ItemIndex")), 1))) {
            await $.wset([$t42, $t43], "StrDate", $.add($.add($.add($.add($.add($.add("and rest +interestrest+duerest+dueinterestrest=0 and closedate is null ", " and b.id in( select creditid from cm_payments where paydate between '"), (await $.wcall([$t42, $t43], "FormatDateTime", ["dd-MMM-yyyy", (await $.wcall([$t42, $t43], "Trunc", [(await $.mv((await $.wv([$t42, $t43], "DTPBRepDate", C, false)), "DateTime"))], C))], C))), "' and '"), (await $.wcall([$t42, $t43], "FormatDateTime", ["dd-mmm-yyyy", (await $.wcall([$t42, $t43], "Trunc", [(await $.mv((await $.wv([$t42, $t43], "DTPERepDate", C, false)), "DateTime"))], C))], C))), "'"), " group by paydate,creditid)"), { get: async () => L0["strdate"], set: async (v) => { L0["strdate"] = v; }, local: true });
          } else {
            await $.wset([$t42, $t43], "StrDate", " ", { get: async () => L0["strdate"], set: async (v) => { L0["strdate"] = v; }, local: true });
          }
        }
        { const $t44 = await $.iset((await $.mv((await $.wv([$t42, $t43], "DecaData_clos", C, false)), "SQL")), [76], (await $.wv([$t42, $t43], "StrDate", { get: async () => L0["strdate"], set: async (v) => { L0["strdate"] = v; }, local: true }, false))); if ($t44 !== undefined) { await $.mset((await $.wv([$t42, $t43], "DecaData_clos", C, false)), "SQL", $t44); } }
        if ($.truthy($.ne((await $.mv((await $.wv([$t42, $t43], "Edit1", C, false)), "Text")), ""))) {
          { const $t45 = await $.iset((await $.mv((await $.wv([$t42, $t43], "DecaData_clos", C, false)), "SQL")), [77], $.add($.add($.add("and b.numberofcredit=", "'"), (await $.mv((await $.wv([$t42, $t43], "Edit1", C, false)), "Text"))), "'")); if ($t45 !== undefined) { await $.mset((await $.wv([$t42, $t43], "DecaData_clos", C, false)), "SQL", $t45); } }
        }
        await $.mcall((await $.wv([$t42, $t43], "DecaData_clos", C, false)), "Open", []);
        await $.stmt($.wcall([$t42, $t43], "First", [], C));
      }
      await $.mcall((await $.wv([$t42], "TagSettings", C, false)), "Open", []);
      await $.wset([$t42], "r", (await $.mv((await $.wv([$t42], "DecaData_clos", C, false)), "RecordCount")), { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true });
      await $.wset([$t42], "sr", (await $.mv((await $.wv([$t42], "TagSettings", C, false)), "RecordCount")), { get: async () => L0["sr"], set: async (v) => { L0["sr"] = v; }, local: true });
      await $.wset([$t42], "S", 1, { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      { const $t46 = (await $.wv([$t42], "r", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false));
        await $.wset([$t42], "I", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t47 = true;
        for (;;) {
          if (!$t47) { await $.wset([$t42], "I", $.succ((await $.wv([$t42], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t47 = false;
          if (!($.ord((await $.wv([$t42], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t46))) break;
          await $.stmt((await $.wcall([$t42], "WriteRowsPrefix", [], { get: async () => L0["writerowsprefix"], set: async (v) => { L0["writerowsprefix"] = v; }, local: true })));
          await $.mcall((await $.wv([$t42], "TagSettings", C, false)), "First", []);
          { const $t48 = $.sub((await $.wv([$t42], "sr", { get: async () => L0["sr"], set: async (v) => { L0["sr"] = v; }, local: true }, false)), 1);
            await $.wset([$t42], "a", 0, { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
            let $t49 = true;
            for (;;) {
              if (!$t49) { await $.wset([$t42], "a", $.succ((await $.wv([$t42], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), 1), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }); }
              $t49 = false;
              if (!($.ord((await $.wv([$t42], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))) <= $.ord($t48))) break;
              await $.wset([$t42], "fname", (await $.mv((await $.mcall((await $.wv([$t42], "TagSettings", C, false)), "FieldByName", ["fieldname"])), "AsString")), { get: async () => L0["fname"], set: async (v) => { L0["fname"] = v; }, local: true });
              if ($.truthy((await $.or_((await $.or_(($.eq((await $.wv([$t42], "fname", { get: async () => L0["fname"], set: async (v) => { L0["fname"] = v; }, local: true }, false)), "NAME5")), async () => ($.eq((await $.wv([$t42], "fname", { get: async () => L0["fname"], set: async (v) => { L0["fname"] = v; }, local: true }, false)), "REGAGSY1")))), async () => ($.eq((await $.wv([$t42], "fname", { get: async () => L0["fname"], set: async (v) => { L0["fname"] = v; }, local: true }, false)), "ZAMIN")))))) {
                await $.wset([$t42], "fvalue", "", { get: async () => L0["fvalue"], set: async (v) => { L0["fvalue"] = v; }, local: true });
              } else {
                await $.wset([$t42], "fvalue", (await $.mv((await $.mcall((await $.wv([$t42], "DecaData_clos", C, false)), "FieldByName", [(await $.wv([$t42], "fname", { get: async () => L0["fname"], set: async (v) => { L0["fname"] = v; }, local: true }, false))])), "AsString")), { get: async () => L0["fvalue"], set: async (v) => { L0["fvalue"] = v; }, local: true });
              }
              await $.stmt((await $.wcall([$t42], "WriteData", [(await $.mv((await $.mcall((await $.wv([$t42], "TagSettings", C, false)), "FieldByName", ["fieldname"])), "AsString")), (await $.wv([$t42], "fvalue", { get: async () => L0["fvalue"], set: async (v) => { L0["fvalue"] = v; }, local: true }, false))], { get: async () => L0["writedata"], set: async (v) => { L0["writedata"] = v; }, local: true })));
              await $.mcall((await $.wv([$t42], "TagSettings", C, false)), "next", []);
              await $.tick();
            }
          }
          await $.stmt((await $.wcall([$t42], "WriteRowsSuffix", [], { get: async () => L0["writerowssuffix"], set: async (v) => { L0["writerowssuffix"] = v; }, local: true })));
          await $.wset([$t42], "UnusableGrops", [], C);
          await $.mset((await $.wv([$t42], "Gauge1", C, false)), "Progress", (await $.wcall([$t42], "Trunc", [$.fdiv($.mul((await $.wv([$t42], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), 100), (await $.wv([$t42], "r", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)))], C)));
          await $.wset([$t42], "S", $.add((await $.wv([$t42], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), 1), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
          await $.mcall((await $.wv([$t42], "DecaData_clos", C, false)), "next", []);
          await $.tick();
        }
      }
    }
    await $.stmt((await $.callv(L0["writefileend"], [])));
    await $.stmt((await $.call(C, "LogInformation", [$.add($.add("İxrac qurtardı ", (await $.call(C, "inttostr", [$.sub(L0["s"], 1)]))), "- sayda kredit ixrac olundu")])));
    await $.stmt((await $.call(C, "MessageDlg", ["XML file uğurla yaradıldı", (await $.v(C, "mtInformation")), [(await $.v(C, "mbOk"))], 0])));
    await $.mset((await $.v(C, "Gauge1")), "Progress", 0);
    await $.mset((await $.v(C, "SpeedButton3")), "Enabled", false);
    await $.mset((await $.v(C, "EditDest")), "Text", "");
  } finally {
    await $.stmt((await $.mcall((await $.v(C, "EFieldNotFoud")), "Create", ["File yaradıla bilmədi!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDecaForm", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox1")), "Checked")), true))) {
    await $.mset((await $.v(C, "RadioGroup2")), "Enabled", true);
    await $.mset((await $.v(C, "RadioGroup2")), "ItemIndex", 0);
    await $.mset((await $.v(C, "DTPBRepDate")), "Enabled", true);
    await $.mset((await $.v(C, "DTPERepDate")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "RadioGroup2")), "ItemIndex", (-(1)));
    await $.mset((await $.v(C, "RadioGroup2")), "Enabled", false);
    await $.mset((await $.v(C, "DTPBRepDate")), "Enabled", false);
    await $.mset((await $.v(C, "DTPERepDate")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDecaForm", "EditDestChange", async function EditDestChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "SpeedButton3")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TDecaForm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "rdat": 0, "edate": 0, "hdate": 0, "strdate": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["hdate"] = (await $.mv((await $.v(C, "DTPRepDate")), "DateTime"));
  L0["edate"] = (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"));
  L0["rdat"] = (await $.mv((await $.v(C, "Repdat")), "DateTime"));
  {
    const $t50 = (await $.mv((await $.v(C, "DecaDataModule")), "DecaData"));
    await $.stmt($.wcall([$t50], "Close", [], C));
    await $.stmt($.wcall([$t50], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t50], "SetVariable", ["HDATE", (await $.wv([$t50], "HDATE", { get: async () => L0["hdate"], set: async (v) => { L0["hdate"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t50], "SetVariable", ["EDATE", (await $.wv([$t50], "EDATE", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t50], "SetVariable", ["RDAT", (await $.wv([$t50], "rdat", { get: async () => L0["rdat"], set: async (v) => { L0["rdat"] = v; }, local: true }, false))], C)));
    if ($.truthy($.eq((await $.mv((await $.wv([$t50], "RadioGroup2", C, false)), "ItemIndex")), 0))) {
      await $.wset([$t50], "StrDate", $.add($.add($.add($.add("and DATEOFCONCLUSION between  '", (await $.wcall([$t50], "FormatDateTime", ["dd-MMM-yyyy", (await $.wcall([$t50], "Trunc", [(await $.mv((await $.wv([$t50], "DTPBRepDate", C, false)), "DateTime"))], C))], C))), "' and '"), (await $.wcall([$t50], "FormatDateTime", ["dd-mmm-yyyy", (await $.wcall([$t50], "Trunc", [(await $.mv((await $.wv([$t50], "DTPERepDate", C, false)), "DateTime"))], C))], C))), "'"), { get: async () => L0["strdate"], set: async (v) => { L0["strdate"] = v; }, local: true });
    } else {
      if ($.truthy($.eq((await $.mv((await $.wv([$t50], "RadioGroup2", C, false)), "ItemIndex")), 1))) {
        await $.wset([$t50], "StrDate", $.add($.add($.add($.add($.add($.add("and rest +interestrest+duerest+dueinterestrest=0 and closedate is null ", " and b.id in( select creditid from cm_payments where paydate between '"), (await $.wcall([$t50], "FormatDateTime", ["dd-MMM-yyyy", (await $.wcall([$t50], "Trunc", [(await $.mv((await $.wv([$t50], "DTPBRepDate", C, false)), "DateTime"))], C))], C))), "' and '"), (await $.wcall([$t50], "FormatDateTime", ["dd-mmm-yyyy", (await $.wcall([$t50], "Trunc", [(await $.mv((await $.wv([$t50], "DTPERepDate", C, false)), "DateTime"))], C))], C))), "'"), " group by paydate,creditid)"), { get: async () => L0["strdate"], set: async (v) => { L0["strdate"] = v; }, local: true });
      } else {
        await $.wset([$t50], "StrDate", " ", { get: async () => L0["strdate"], set: async (v) => { L0["strdate"] = v; }, local: true });
      }
    }
    { const $t51 = await $.iset((await $.wv([$t50], "SQL", C, false)), [83], (await $.wv([$t50], "StrDate", { get: async () => L0["strdate"], set: async (v) => { L0["strdate"] = v; }, local: true }, false))); if ($t51 !== undefined) { await $.wset([$t50], "SQL", $t51, C); } }
    { const $t52 = await $.iset((await $.wv([$t50], "SQL", C, false)), [84], ""); if ($t52 !== undefined) { await $.wset([$t50], "SQL", $t52, C); } }
    if ($.truthy($.ne((await $.mv((await $.wv([$t50], "Edit1", C, false)), "Text")), ""))) {
      { const $t53 = await $.iset((await $.wv([$t50], "SQL", C, false)), [84], $.add($.add(" and b.id in(", (await $.mv((await $.wv([$t50], "Edit1", C, false)), "Text"))), ")")); if ($t53 !== undefined) { await $.wset([$t50], "SQL", $t53, C); } }
    }
    await $.stmt($.wcall([$t50], "Open", [], C));
    if ($.truthy($.eq((await $.wv([$t50], "RecordCount", C, false)), 0))) {
      await $.stmt((await $.wcall([$t50], "ShowMessage", ["Heç bir məlumat toplanmadı "], C)));
      return L0.result;
    }
  }
  {
    const $t54 = (await $.wobj(C, "ExcelExport"));
    await $.stmt($.wcall([$t54], "Connect", [], C));
    await $.stmt((await $.wcall([$t54], "ExportDataset", [(await $.mv((await $.wv([$t54], "DecaDataModule", C, false)), "DecaData")), "Deka", (await $.wv([$t54], "True", C, false))], C)));
    await $.stmt($.wcall([$t54], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "DecaForm", (await $.mcall((await $.v(C, "TDecaForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
