// Generated from ExcelimpImpl1.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ExcelimpImpl1", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "Excel_import_TLB", "StdVcl", "Db", "ExcelXP", "OleServer", "Oracle", "OracleData", "ImgList", "ComCtrls", "ToolWin", "Grids", "DBGrids", "StdCtrls", "DBCtrls", "ShellAPI", "Variants", "ADODB", "StrUtils", "ComObj", "ComServ", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TExcelimp", "TActiveForm", {"dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "excelworkbook1": {"name": "ExcelWorkbook1", "type": "TExcelWorkbook"}, "excelworksheet1": {"name": "ExcelWorksheet1", "type": "TExcelWorksheet"}, "excelapplication1": {"name": "ExcelApplication1", "type": "TExcelApplication"}, "opendialog1": {"name": "OpenDialog1", "type": "TOpenDialog"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "label1": {"name": "Label1", "type": "TLabel"}, "combobox1": {"name": "ComboBox1", "type": "TDBLookupComboBox"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "accountins": {"name": "accountins", "type": "TOracleDataSet"}, "datasource3": {"name": "DataSource3", "type": "TDataSource"}, "bankinfo": {"name": "bankinfo", "type": "TOracleDataSet"}, "bankinfoswift": {"name": "bankinfoSWIFT", "type": "TWideStringField"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "oracledataset4": {"name": "OracleDataSet4", "type": "TOracleDataSet"}, "fevents": {"name": "FEvents", "type": "IExcelimpEvents"}}, {});
  U.init(async () => {
    U.var_("ExcelFile", '', "String");
    U.var_("CsvFile", '', "String");
  });
  U.method("TExcelimp", "SelectExcel", async function SelectExcel(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.not((await $.mv((await $.v(C, "OpenDialog1")), "Execute"))))) {
    return L0.result;
  }
  await $.set(C, "ExcelFile", (await $.mv((await $.v(C, "OpenDialog1")), "FileName")));
  await $.set(C, "CsvFile", (await $.call(C, "ChangeFileExt", [(await $.v(C, "ExcelFile")), ".csv"])));
  await $.stmt((await $.call(C, "ShowMessage", [$.add("Excel seçildi: ", (await $.v(C, "ExcelFile")))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ExcelToOracle", async function ExcelToOracle(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"oracleds": $.copyArg(p0), "session": $.copyArg(p1), result: undefined, "adoconn": null, "q": null, "i": 0, "fieldnames": '', "paramnames": ''};
  await $.fixArgs(L0, ["oracleds", "session"]);
  if ($.truthy($.eq((await $.v(C, "ExcelFile")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Snaçala vıberite Excel"])));
    return L0.result;
  }
  L0["adoconn"] = (await $.mcall((await $.v(C, "TADOConnection")), "Create", [null]));
  L0["q"] = (await $.mcall((await $.v(C, "TADOQuery")), "Create", [null]));
  try {
    await $.mset(L0["adoconn"], "LoginPrompt", false);
    if ($.truthy((await $.call(C, "SameText", [(await $.call(C, "ExtractFileExt", [(await $.v(C, "ExcelFile"))])), ".xls"])))) {
      await $.mset(L0["adoconn"], "ConnectionString", $.add($.add("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=", (await $.v(C, "ExcelFile"))), ";Extended Properties=\"Excel 8.0;HDR=YES;IMEX=1\""));
    } else {
      await $.mset(L0["adoconn"], "ConnectionString", $.add($.add("Provider=Microsoft.ACE.OLEDB.12.0;Data Source=", (await $.v(C, "ExcelFile"))), ";Extended Properties=\"Excel 12.0;HDR=YES;IMEX=1\""));
    }
    await $.mset(L0["adoconn"], "Connected", true);
    await $.mset(L0["q"], "Connection", L0["adoconn"]);
    await $.mset((await $.mv(L0["q"], "SQL")), "Text", "SELECT * FROM [Sheet1$]");
    await $.mcall(L0["q"], "Open", []);
    L0["fieldnames"] = "";
    L0["paramnames"] = "";
    { const $t1 = $.sub((await $.mv(L0["q"], "FieldCount")), 1);
      L0["i"] = 0;
      let $t2 = true;
      for (;;) {
        if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
        $t2 = false;
        if (!($.ord(L0["i"]) <= $.ord($t1))) break;
        L0["fieldnames"] = $.add(L0["fieldnames"], (await $.mv((await $.idx((await $.mv(L0["q"], "Fields")), [L0["i"]])), "FieldName")));
        L0["paramnames"] = $.add($.add(L0["paramnames"], ":"), (await $.mv((await $.idx((await $.mv(L0["q"], "Fields")), [L0["i"]])), "FieldName")));
        if ($.truthy($.lt(L0["i"], $.sub((await $.mv(L0["q"], "FieldCount")), 1)))) {
          L0["fieldnames"] = $.add(L0["fieldnames"], ",");
          L0["paramnames"] = $.add(L0["paramnames"], ",");
        }
        await $.tick();
      }
    }
    await $.mcall(L0["oracleds"], "Close", []);
    await $.mset((await $.mv(L0["oracleds"], "SQL")), "Text", $.add($.add($.add($.add("INSERT INTO BIG_TABLE (", L0["fieldnames"]), ") VALUES ("), L0["paramnames"]), ")"));
    await $.mcall(L0["oracleds"], "Open", []);
    await $.mcall(L0["q"], "First", []);
    while ($.truthy($.not((await $.mv(L0["q"], "Eof"))))) {
      await $.mcall(L0["oracleds"], "Append", []);
      { const $t3 = $.sub((await $.mv(L0["q"], "FieldCount")), 1);
        L0["i"] = 0;
        let $t4 = true;
        for (;;) {
          if (!$t4) { L0["i"] = $.succ(L0["i"], 1); }
          $t4 = false;
          if (!($.ord(L0["i"]) <= $.ord($t3))) break;
          await $.mset((await $.mcall(L0["oracleds"], "FieldByName", [(await $.mv((await $.idx((await $.mv(L0["q"], "Fields")), [L0["i"]])), "FieldName"))])), "Value", (await $.mv((await $.idx((await $.mv(L0["q"], "Fields")), [L0["i"]])), "Value")));
          await $.tick();
        }
      }
      await $.mcall(L0["oracleds"], "Post", []);
      await $.mcall(L0["q"], "Next", []);
      await $.tick();
    }
    await $.mcall((await $.mv(L0["oracleds"], "Session")), "Commit", []);
    await $.stmt((await $.call(C, "ShowMessage", ["Excel zaqrucen v Oracle!"])));
  } finally {
    await $.mcall(L0["q"], "Free", []);
    await $.mcall(L0["adoconn"], "Free", []);
  }
  return L0.result;
}, {"params": ["OracleDS", "Session"], "kind": "procedure", "ptypes": ["TOracleDataSet", "TOracleSession"]});
  U.func("ShowLoadResult", async function ShowLoadResult(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "ShowMessage", ["Zaqruzka zaverşena. Proverğte tabliüu BIG_TABLE."])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TExcelimp", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TExcelimp", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TExcelimp", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TExcelimp", "Initialize", null, arguments);
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
  U.method("TExcelimp", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExcelimp", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExcelimp", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExcelimp", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExcelimp", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExcelimp", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExcelimp", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExcelimp", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExcelimp", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExcelimp", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExcelimp", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExcelimp", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExcelimp", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExcelimp", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExcelimp", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExcelimp", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExcelimp", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExcelimp", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExcelimp", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TExcelimp", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExcelimp", "ActiveFormActivate", async function ActiveFormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExcelimp", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0, "k": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "oraclePackage1")), "CallProcedure", ["Del_excel", []])));
  await $.mcall((await $.v(C, "OracleDataSet1")), "Refresh", []);
  await $.mcall((await $.v(C, "OracleDataSet3")), "Open", []);
  await $.mset((await $.v(C, "ComboBox1")), "KeyValue", "Əməliyyatın Tipi");
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", "Hesab");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExcelimp", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExcelimp", "ComboBox1CloseUp", async function ComboBox1CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit1")), "Text", (await $.mv((await $.v(C, "ComboBox1")), "KeyValue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExcelimp", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExcelimp", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExcelimp", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExcelimp", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExcelimp", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TExcelimp", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExcelimp", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExcelimp", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExcelimp", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TExcelimp", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TExcelimp", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TExcelimp", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TExcelimp", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExcelimp", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExcelimp", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExcelimp", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TExcelimp", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TExcelimp", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExcelimp", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TExcelimp", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TExcelimp", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExcelimp", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExcelimp", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "excel": null, "m": 0, "n": 0, "b": '', "sl": null};
  await $.fixArgs(L0, ["sender"]);
  L0["xlcelltypelast"] = 11;
  L0["excel"] = (await $.call(C, "CreateoleObject", ["Excel.Application"]));
  if ($.truthy($.not((await $.mv((await $.v(C, "OpenDialog1")), "Execute"))))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.mv(L0["excel"], "Workbooks")), "Open", [(await $.mv((await $.v(C, "OpenDialog1")), "FileName"))])));
  L0["m"] = 2;
  L0["n"] = $.add((await $.mv((await $.mcall((await $.mv(L0["excel"], "ActiveCell")), "SpecialCells", [L0["xlcelltypelast"]])), "Row")), 1);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Close", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
  while ($.truthy($.ne(L0["m"], L0["n"]))) {
    await $.mcall((await $.v(C, "OracleDataSet1")), "Insert", []);
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f1"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 1])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f2"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 2])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f3"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 3])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f4"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 4])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f5"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 5])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f6"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 6])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f7"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 7])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f8"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 8])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f9"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 9])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f10"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 10])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f11"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 11])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f12"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 12])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f13"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 13])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f14"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 14])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f15"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 15])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f16"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 16])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f17"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 17])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f18"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 18])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f19"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 19])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f20"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 20])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f21"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 21])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f22"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 22])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f23"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 23])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f24"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 24])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f25"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 25])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f26"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 26])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f27"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 27])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f28"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 28])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f29"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 29])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f30"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 30])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f31"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 31])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f32"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 32])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f33"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 33])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f34"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 34])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f35"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 35])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f36"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 36])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f37"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 37])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f38"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 38])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f39"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 39])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f40"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 40])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f41"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 41])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f42"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 42])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f43"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 43])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f44"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 44])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f45"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 45])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f46"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 46])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f47"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 47])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f48"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 48])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f49"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 49])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f50"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 50])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f51"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 51])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f52"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 52])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f53"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 53])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f54"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 54])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f55"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 55])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f56"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 56])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f57"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 57])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f58"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 58])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f59"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 59])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f60"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 60])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f61"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 61])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f62"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 62])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f63"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 63])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f64"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 64])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f65"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 65])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f66"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 66])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f67"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 67])), "value")));
    await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["f68"])), "Value", (await $.mv((await $.idx((await $.mv(L0["excel"], "Cells")), [L0["m"], 68])), "value")));
    await $.mcall((await $.v(C, "OracleDataSet1")), "Post", []);
    await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["m"], async ($t5) => { L0["m"] = $t5; })])));
    await $.tick();
  }
  await $.mcall((await $.v(C, "OracleDataSet1")), "Close", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "First", []);
  await $.mcall((await $.mv(L0["excel"], "Workbooks")), "Close", []);
  await $.mcall(L0["excel"], "Quit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExcelimp", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "bankinfo")), "Open", []);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Koçürmələrini həyata keçirim?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "bankinfo")), "FieldByName", ["SWIFT"])), "AsString")), "REVAAZ22"))) {
      await $.stmt((await $.mcall((await $.v(C, "oraclePackage1")), "CallProcedure", ["EXCELTRANSACTIONSins", [(await $.mv((await $.v(C, "DBLookupComboBox1")), "Text"))]])));
    } else {
      await $.stmt((await $.mcall((await $.v(C, "oraclePackage1")), "CallProcedure", ["EXCELTRANSACTIONS", [(await $.mv((await $.v(C, "edit1")), "Text"))]])));
    }
    await $.stmt((await $.call(C, "ShowMessage", ["Əməliyyatlar göndərildi!"])));
    await $.stmt((await $.mcall((await $.v(C, "oraclePackage1")), "CallProcedure", ["Del_excel", []])));
    await $.mcall((await $.v(C, "OracleDataSet1")), "Refresh", []);
  }
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "commit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExcelimp", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
  await $.mcall((await $.v(C, "OracleDataSet3")), "Open", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExcelimp", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "oraclePackage1")), "CallProcedure", ["del_inspayments", []])));
  await $.stmt((await $.call(C, "ShowMessage", ["Əməliyyatlar silindi!"])));
  await $.stmt((await $.mcall((await $.v(C, "oraclePackage1")), "CallProcedure", ["Del_excel", []])));
  await $.mcall((await $.v(C, "OracleDataSet1")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("OpenCmdWithParameters", async function OpenCmdWithParameters(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"parameters": $.copyArg(p0), "processhandle": $.asRef(p1), result: undefined, "startupinfo": null, "processinfo": null, "commandline": ''};
  await $.fixArgs(L0, ["parameters"]);
  await $.stmt((await $.call(C, "ZeroMemory", [L0["startupinfo"], (await $.call(C, "SizeOf", [L0["startupinfo"]]))])));
  await $.mset(L0["startupinfo"], "cb", (await $.call(C, "SizeOf", [L0["startupinfo"]])));
  L0["commandline"] = $.add("cmd.exe ", L0["parameters"]);
  await $.stmt((await $.call(C, "CreateProcess", [null, (await $.call(C, "PChar", [L0["commandline"]])), null, null, false, (await $.v(C, "CREATE_NEW_CONSOLE")), null, null, L0["startupinfo"], L0["processinfo"]])));
  await L0["processhandle"].set((await $.mv(L0["processinfo"], "hProcess")));
  await $.stmt((await $.call(C, "CloseHandle", [(await $.mv(L0["processinfo"], "hThread"))])));
  return L0.result;
}, {"params": ["Parameters", "ProcessHandle"], "kind": "procedure", "ptypes": ["String", "THandle"]});
  U.func("CloseCmd", async function CloseCmd(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"processhandle": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["processhandle"]);
  await $.stmt((await $.call(C, "TerminateProcess", [L0["processhandle"], 0])));
  await $.stmt((await $.call(C, "CloseHandle", [L0["processhandle"]])));
  return L0.result;
}, {"params": ["ProcessHandle"], "kind": "procedure", "ptypes": ["THandle"]});
  U.method("TExcelimp", "ToolButton8Click", async function ToolButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "cmd": '', "cmdline": '', "cmdprocesshandle": 0, "scriptpath": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "OpenCmdWithParameters", ["/K D:\\Smart-Bank\\Env\\Import\\inpybase.py ", $.ref(async () => L0["cmdprocesshandle"], async ($t6) => { L0["cmdprocesshandle"] = $t6; })])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
