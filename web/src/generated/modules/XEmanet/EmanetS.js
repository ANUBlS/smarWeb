// Generated from EmanetS.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("EmanetS", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "EmanetSH_TLB", "StdVcl", "Grids", "DBGrids", "StdCtrls", "Buttons", "DBViewComboBox", "ComCtrls", "ExtCtrls", "Db", "OracleData", "Oracle", "ExcelXP", "OleServer", "Gauges", "CheckLst", "Evanescence", "XFSCtrls", "ComObj", "ComServ", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TEmanet", "TActiveForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "bitbtn4": {"name": "BitBtn4", "type": "TBitBtn"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "datasource3": {"name": "DataSource3", "type": "TDataSource"}, "dbviewcombobox1": {"name": "DBViewComboBox1", "type": "TDBViewComboBox"}, "dbviewcombobox2": {"name": "DBViewComboBox2", "type": "TDBViewComboBox"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1bal_cn": {"name": "OracleDataSet1BAL_CN", "type": "TWideStringField"}, "oracledataset1tip": {"name": "OracleDataSet1TIP", "type": "TIntegerField"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}, "excelapplication1": {"name": "ExcelApplication1", "type": "TExcelApplication"}, "excelworksheet1": {"name": "ExcelWorksheet1", "type": "TExcelWorksheet"}, "excelworkbook1": {"name": "ExcelWorkbook1", "type": "TExcelWorkbook"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "tabsheet4": {"name": "TabSheet4", "type": "TTabSheet"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "bitbtn6": {"name": "BitBtn6", "type": "TBitBtn"}, "bitbtn7": {"name": "BitBtn7", "type": "TBitBtn"}, "dbviewcombobox3": {"name": "DBViewComboBox3", "type": "TDBViewComboBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "bitbtn8": {"name": "BitBtn8", "type": "TBitBtn"}, "bitbtn9": {"name": "BitBtn9", "type": "TBitBtn"}, "dbgrid4": {"name": "DBGrid4", "type": "TDBGrid"}, "dbviewcombobox4": {"name": "DBViewComboBox4", "type": "TDBViewComboBox"}, "oracledataset4": {"name": "OracleDataSet4", "type": "TOracleDataSet"}, "oracledataset5": {"name": "OracleDataSet5", "type": "TOracleDataSet"}, "timer1": {"name": "Timer1", "type": "TTimer"}, "dsintrusted": {"name": "DSIntrusted", "type": "TDataSource"}, "odsintrusted": {"name": "ODSIntrusted", "type": "TOracleDataSet"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "evanescence1": {"name": "Evanescence1", "type": "TEvanescence"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "bitbtn5": {"name": "BitBtn5", "type": "TBitBtn"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "dtp1": {"name": "DTP1", "type": "TDateTimePicker"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "dtp2": {"name": "DTP2", "type": "TDateTimePicker"}, "xfpanel7": {"name": "XFPanel7", "type": "TXFPanel"}, "xfpanel8": {"name": "XFPanel8", "type": "TXFPanel"}, "radiobutton1": {"name": "RadioButton1", "type": "TRadioButton"}, "radiobutton2": {"name": "RadioButton2", "type": "TRadioButton"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "xfpanel9": {"name": "XFPanel9", "type": "TXFPanel"}, "gauge1": {"name": "Gauge1", "type": "TGauge"}, "excelapplication2": {"name": "ExcelApplication2", "type": "TExcelApplication"}, "excelworksheet2": {"name": "ExcelWorksheet2", "type": "TExcelWorksheet"}, "excelworkbook2": {"name": "ExcelWorkbook2", "type": "TExcelWorkbook"}, "excelapplication3": {"name": "ExcelApplication3", "type": "TExcelApplication"}, "excelapplication4": {"name": "ExcelApplication4", "type": "TExcelApplication"}, "fevents": {"name": "FEvents", "type": "IEmanetEvents"}}, {});
  U.init(async () => {
    U.var_("Text", '', "String");
    U.var_("Bas", '', "String");
    U.var_("Son", '', "String");
    U.var_("F", 0, "integer");
    U.var_("Fk", false, "boolean");
  });
  U.method("TEmanet", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TEmanet", "Evanescence1ClickCheck", async function Evanescence1ClickCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "k": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["k"] = 0;
  { const $t1 = $.sub((await $.mv((await $.mv((await $.v(C, "Evanescence1")), "KeyItems")), "Count")), 1);
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      if ($.truthy($.eq((await $.idx((await $.mv((await $.v(C, "Evanescence1")), "Checked")), [L0["i"]])), false))) {
        await $.set(C, "Fk", true);
        await $.mset((await $.v(C, "CheckBox1")), "Checked", false);
        await $.set(C, "Fk", false);
      }
      if ($.truthy($.eq((await $.idx((await $.mv((await $.v(C, "Evanescence1")), "Checked")), [L0["i"]])), true))) {
        L0["k"] = $.add(L0["k"], 1);
      }
      if ($.truthy($.eq(L0["k"], 4))) {
        await $.set(C, "Fk", true);
        await $.mset((await $.v(C, "CheckBox1")), "Checked", true);
        await $.set(C, "Fk", false);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TEmanet", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TEmanet", "Initialize", null, arguments);
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
  U.method("TEmanet", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TEmanet", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TEmanet", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TEmanet", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TEmanet", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TEmanet", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TEmanet", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TEmanet", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TEmanet", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TEmanet", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TEmanet", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TEmanet", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TEmanet", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TEmanet", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TEmanet", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TEmanet", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TEmanet", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TEmanet", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TEmanet", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TEmanet", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.v(C, "Fk")))))) {
    if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
      { const $t3 = $.sub((await $.v(C, "ComponentCount")), 1);
        L0["i"] = 0;
        let $t4 = true;
        for (;;) {
          if (!$t4) { L0["i"] = $.succ(L0["i"], 1); }
          $t4 = false;
          if (!($.ord(L0["i"]) <= $.ord($t3))) break;
          if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 3112))) {
            await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "CheckAll", []);
          }
          await $.tick();
        }
      }
    } else {
      { const $t5 = $.sub((await $.v(C, "ComponentCount")), 1);
        L0["i"] = 0;
        let $t6 = true;
        for (;;) {
          if (!$t6) { L0["i"] = $.succ(L0["i"], 1); }
          $t6 = false;
          if (!($.ord(L0["i"]) <= $.ord($t5))) break;
          if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 3112))) {
            await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "UncheckAll", []);
          }
          await $.tick();
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TEmanet", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TEmanet", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TEmanet", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TEmanet", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TEmanet", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TEmanet", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TEmanet", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TEmanet", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TEmanet", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TEmanet", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TEmanet", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TEmanet", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TEmanet", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TEmanet", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TEmanet", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TEmanet", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TEmanet", "ComboBox1Change", async function ComboBox1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", (await $.mv((L0["sender"]), "ItemIndex")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    { const $t7 = $.sub((await $.v(C, "ComponentCount")), 1);
      L0["i"] = 0;
      let $t8 = true;
      for (;;) {
        if (!$t8) { L0["i"] = $.succ(L0["i"], 1); }
        $t8 = false;
        if (!($.ord(L0["i"]) <= $.ord($t7))) break;
        if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 3112))) {
          await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
          await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "CheckAll", []);
          await $.set(C, "Fk", false);
        }
        await $.tick();
      }
    }
  }
  await $.mset((await $.v(C, "ComboBox1")), "ItemIndex", 0);
  await $.mset((await $.v(C, "DTP1")), "DateTime", (await $.mcall((await $.v(C, "OraclePackage1")), "CallDateFunction", ["GetBankDay", []])));
  await $.mset((await $.v(C, "DTP2")), "DateTime", (await $.mcall((await $.v(C, "OraclePackage1")), "CallDateFunction", ["GetBankDay", []])));
  await $.mset((await $.v(C, "OracleDataSet1")), "Active", true);
  await $.mset((await $.v(C, "OracleDataSet2")), "Active", true);
  await $.set(C, "F", 1);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "Edit2KeyPress", async function Edit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), 8))))) {
    if ($.truthy((await $.or_(((await $.and_(($.gt((await $.call(C, "Length", [(await $.mv((L0["sender"]), "Text"))])), 4)), async () => ($.eq((await $.mv((L0["sender"]), "SelLength")), 0))))), async () => ($.not(($.in_((await L0["key"].get()), [...$.range("0","9")])))))))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TEmanet", "Edit2Enter", async function Edit2Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Edit2")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "Edit1KeyPress", async function Edit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), 8))))) {
    if ($.truthy((await $.or_(((await $.and_(($.gt((await $.call(C, "Length", [(await $.mv((L0["sender"]), "Text"))])), 4)), async () => ($.eq((await $.mv((L0["sender"]), "SelLength")), 0))))), async () => ($.not(($.in_((await L0["key"].get()), [...$.range("0","9")])))))))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TEmanet", "Edit1Enter", async function Edit1Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Edit1")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "DBViewComboBox1Change", async function DBViewComboBox1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Text", (await $.mv((await $.v(C, "DBViewComboBox1")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "Insert_Umumi_Emanet", async function Insert_Umumi_Emanet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "tmpbal": 0};
  L0["tmpbal"] = (await $.call(C, "StrToIntDef", [(await $.v(C, "Text")), 0]));
  if ($.truthy($.eq(L0["tmpbal"], 0))) {
    return L0.result;
  }
  if ($.truthy((await $.mv((await $.v(C, "OracleDataSet1")), "Active")))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "PageControl1")), "ActivePageIndex")), 0))) {
      await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Insert_Balans", [(await $.call(C, "IntToStr", [L0["tmpbal"]])), 0]])));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "PageControl1")), "ActivePageIndex")), 1))) {
      await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Insert_Balans", [(await $.call(C, "IntToStr", [L0["tmpbal"]])), 1]])));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "PageControl1")), "ActivePageIndex")), 2))) {
      await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Insert_Balans", [(await $.call(C, "IntToStr", [L0["tmpbal"]])), 2]])));
    }
  }
  await $.mcall((await $.v(C, "OracleDataSet1")), "Refresh", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TEmanet", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit1")), "text")), ""))) {
    await $.set(C, "Text", (await $.mv((await $.v(C, "Edit1")), "Text")));
  }
  await $.stmt($.call(C, "Insert_Umumi_Emanet", []));
  await $.mcall((await $.v(C, "Edit1")), "clear", []);
  await $.mset((await $.v(C, "DBViewComboBox1")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "DBViewComboBox2Change", async function DBViewComboBox2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Text", (await $.mv((await $.v(C, "DBViewComboBox2")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit2")), "text")), ""))) {
    await $.set(C, "Text", (await $.mv((await $.v(C, "Edit2")), "Text")));
  }
  await $.stmt($.call(C, "Insert_Umumi_Emanet", []));
  await $.mcall((await $.v(C, "Edit2")), "clear", []);
  await $.mset((await $.v(C, "DBViewComboBox2")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "Setfilter", async function Setfilter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"ftype": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["ftype"]);
  await $.mset((await $.v(C, "OracleDataSet1")), "Filter", $.add($.add("(Tip=", L0["ftype"]), ")"));
  return L0.result;
}, {"params": ["FType"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TEmanet", "TabSheet1Show", async function TabSheet1Show(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "Setfilter", ["0"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "TabSheet2Show", async function TabSheet2Show(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "Setfilter", ["1"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "Delete_Emanet", async function Delete_Emanet(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t9 = (await $.v(C, "OracleDataSet1"));
    const $t10 = (await $.wv([$t9], "OracleDataSet1ID", C, false));
    if ($.truthy((await $.and_((await $.wv([$t9, $t10], "Active", C, false)), async () => ($.gt((await $.wv([$t9, $t10], "AsInteger", C, false)), 0)))))) {
      await $.stmt((await $.mcall((await $.wv([$t9, $t10], "OraclePackage1", C, false)), "CallProcedure", ["Delete_Balans", [(await $.mv((await $.wv([$t9, $t10], "OracleDataSet1ID", C, false)), "AsInteger"))]])));
    }
  }
  await $.mcall((await $.v(C, "OracleDataSet1")), "Refresh", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TEmanet", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mcall((await $.v(C, "Dialogs")), "MessageDlg", ["Cəvdəldə sətrin silinməsinə əminsinizmi!!!", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0, (await $.v(C, "mbYes"))])), (await $.v(C, "mrYes"))))) {
    await $.stmt($.call(C, "Delete_Emanet", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "BitBtn4Click", async function BitBtn4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Delete_Emanet", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "BitBtn5Click", async function BitBtn5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v": null, "sheet": null, "sheets": null, "vn": null, "sheetn": null, "sheetsn": null, "cell": 0, "row": 0, "i": 0, "j": 0, "k1": 0, "t": 0, "k": 0, "kcount": 0, "kp": 0, "mp": 0, "m1": 0, "m3": 0, "m30": 0, "m100": 0, "m200": 0, "m300": 0, "m500": 0, "m1000": 0, "rr": 0, "r1": 0, "m": 0, "ekm": 0, "val": 0, "valostat": 0, "sumamount": 0, "sumekvamount": 0, "p": 0, "pcount": 0, "e_row1": 0, "openedxlscnt": 0, "vcod": 0, "bdate": 0, "edate": 0, "vtip": '', "soz": '', "il": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["bdate"] = (await $.call(C, "Time", []));
  await $.set(C, "Bas", (await $.call(C, "FormatDateTime", ["dd-MMM-yyyy", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP1")), "DateTime"))]))])));
  await $.set(C, "Son", (await $.call(C, "FormatDateTime", ["dd-MMM-yyyy", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP2")), "DateTime"))]))])));
  if ($.truthy($.ge((await $.v(C, "Son")), (await $.v(C, "Bas"))))) {
    { const $t11 = $.sub((await $.mv((await $.mv((await $.v(C, "Evanescence1")), "KeyItems")), "Count")), 1);
      L0["i"] = 0;
      let $t12 = true;
      for (;;) {
        if (!$t12) { L0["i"] = $.succ(L0["i"], 1); }
        $t12 = false;
        if (!($.ord(L0["i"]) <= $.ord($t11))) break;
        if ($.truthy((await $.idx((await $.mv((await $.v(C, "Evanescence1")), "Checked")), [L0["i"]])))) {
          if ($.truthy($.eq(L0["i"], 0))) {
            await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
            L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
            await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
            await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))])), "Emanetler.xls")])));
            { const $t13 = 100;
              L0["openedxlscnt"] = 1;
              let $t14 = true;
              for (;;) {
                if (!$t14) { L0["openedxlscnt"] = $.succ(L0["openedxlscnt"], 1); }
                $t14 = false;
                if (!($.ord(L0["openedxlscnt"]) <= $.ord($t13))) break;
                try {
                  L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [L0["openedxlscnt"]])), "Worksheets")), ["Sheet1"]));
                  break;
                } catch ($t15) {
                  $.rethrowControl($t15);
                  $.handled($t15);
                }
                await $.tick();
              }
            }
            L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
            await $.mcall((await $.idx((await $.mv(L0["sheets"], "Item")), ["Sheet1"])), "Activate", []);
            L0["il"] = (await $.call(C, "FormatDateTime", ["yyyy", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP1")), "DateTime"))]))]));
            { const $t16 = await $.iset((await $.mv(L0["sheet"], "cells")), [1, 2], L0["il"]); if ($t16 !== undefined) { await $.mset(L0["sheet"], "cells", $t16); } }
            await $.set(C, "Bas", (await $.call(C, "FormatDateTime", ["dd-MMM-yyyy", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP1")), "DateTime"))]))])));
            await $.set(C, "Son", (await $.call(C, "FormatDateTime", ["dd-MMM-yyyy", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP2")), "DateTime"))]))])));
            { const $t17 = await $.iset((await $.mv(L0["sheet"], "cells")), [2, 2], $.add($.add((await $.v(C, "Bas")), "_______"), (await $.v(C, "son")))); if ($t17 !== undefined) { await $.mset(L0["sheet"], "cells", $t17); } }
            await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [7, 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "Cells")), [7, 1])), "Font")), "Bold", true);
            await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "Cells")), [7, 1])), "Font")), "size", 12);
            L0["soz"] = " Əmanətlər   Haqqında   Hesabat";
            { const $t18 = await $.iset((await $.mv(L0["sheet"], "cells")), [7, 1], L0["soz"]); if ($t18 !== undefined) { await $.mset(L0["sheet"], "cells", $t18); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 1);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Qaliqlar", [(await $.v(C, "bas")), (await $.v(C, "son")), 0, 2, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t19 = await $.iset((await $.mv(L0["sheet"], "cells")), [11, 3], L0["k"]); if ($t19 !== undefined) { await $.mset(L0["sheet"], "cells", $t19); } }
            { const $t20 = await $.iset((await $.mv(L0["sheet"], "cells")), [11, 5], L0["kcount"]); if ($t20 !== undefined) { await $.mset(L0["sheet"], "cells", $t20); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 2);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Umumi_Hesablar", [(await $.v(C, "bas")), (await $.v(C, "son")), 0, 2, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t21 = await $.iset((await $.mv(L0["sheet"], "cells")), [11, 4], L0["k"]); if ($t21 !== undefined) { await $.mset(L0["sheet"], "cells", $t21); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 3);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Qaliqlar", [(await $.v(C, "bas")), (await $.v(C, "son")), 1, 2, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t22 = await $.iset((await $.mv(L0["sheet"], "cells")), [12, 3], L0["k"]); if ($t22 !== undefined) { await $.mset(L0["sheet"], "cells", $t22); } }
            { const $t23 = await $.iset((await $.mv(L0["sheet"], "cells")), [12, 5], L0["kcount"]); if ($t23 !== undefined) { await $.mset(L0["sheet"], "cells", $t23); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 4);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Umumi_Hesablar", [(await $.v(C, "bas")), (await $.v(C, "son")), 1, 2, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t24 = await $.iset((await $.mv(L0["sheet"], "cells")), [12, 4], L0["k"]); if ($t24 !== undefined) { await $.mset(L0["sheet"], "cells", $t24); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 5);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vtip"] = (await $.call(C, "Hesabin_tipi", [1]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["HQaliqlar", [(await $.v(C, "bas")), (await $.v(C, "son")), 1, L0["vtip"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t25 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 3], L0["k"]); if ($t25 !== undefined) { await $.mset(L0["sheet"], "cells", $t25); } }
            { const $t26 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 5], L0["kcount"]); if ($t26 !== undefined) { await $.mset(L0["sheet"], "cells", $t26); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 6);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Herif_Hesablar", [(await $.v(C, "bas")), (await $.v(C, "son")), 1, L0["vtip"], L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t27 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 4], L0["k"]); if ($t27 !== undefined) { await $.mset(L0["sheet"], "cells", $t27); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 7);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vtip"] = (await $.call(C, "Hesabin_tipi", [2]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["HQaliqlar", [(await $.v(C, "bas")), (await $.v(C, "son")), 1, L0["vtip"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t28 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 3], L0["k"]); if ($t28 !== undefined) { await $.mset(L0["sheet"], "cells", $t28); } }
            { const $t29 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 5], L0["kcount"]); if ($t29 !== undefined) { await $.mset(L0["sheet"], "cells", $t29); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 8);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Herif_Hesablar", [(await $.v(C, "bas")), (await $.v(C, "son")), 1, L0["vtip"], L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t30 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 4], L0["k"]); if ($t30 !== undefined) { await $.mset(L0["sheet"], "cells", $t30); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 9);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vtip"] = (await $.call(C, "Hesabin_tipi", [3]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["HQaliqlar", [(await $.v(C, "bas")), (await $.v(C, "son")), 1, L0["vtip"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t31 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 3], L0["k"]); if ($t31 !== undefined) { await $.mset(L0["sheet"], "cells", $t31); } }
            { const $t32 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 5], L0["kcount"]); if ($t32 !== undefined) { await $.mset(L0["sheet"], "cells", $t32); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 10);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Herif_Hesablar", [(await $.v(C, "bas")), (await $.v(C, "son")), 1, L0["vtip"], L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t33 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 4], L0["k"]); if ($t33 !== undefined) { await $.mset(L0["sheet"], "cells", $t33); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 11);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = $.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 3]))])));
            { const $t34 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 3], L0["k"]); if ($t34 !== undefined) { await $.mset(L0["sheet"], "cells", $t34); } }
            L0["k"] = $.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 4]))])));
            { const $t35 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 4], L0["k"]); if ($t35 !== undefined) { await $.mset(L0["sheet"], "cells", $t35); } }
            L0["k"] = $.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 5]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 5]))])));
            { const $t36 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 5], L0["k"]); if ($t36 !== undefined) { await $.mset(L0["sheet"], "cells", $t36); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 12);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vtip"] = (await $.call(C, "Hesabin_tipi", [5]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["HQaliqlar", [(await $.v(C, "bas")), (await $.v(C, "son")), 1, L0["vtip"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t37 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 3], L0["k"]); if ($t37 !== undefined) { await $.mset(L0["sheet"], "cells", $t37); } }
            { const $t38 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 5], L0["kcount"]); if ($t38 !== undefined) { await $.mset(L0["sheet"], "cells", $t38); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 13);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Herif_Hesablar", [(await $.v(C, "bas")), (await $.v(C, "son")), 1, L0["vtip"], L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t39 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 4], L0["k"]); if ($t39 !== undefined) { await $.mset(L0["sheet"], "cells", $t39); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 14);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vtip"] = (await $.call(C, "Hesabin_tipi", [6]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["HQaliqlar", [(await $.v(C, "bas")), (await $.v(C, "son")), 1, L0["vtip"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t40 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 3], L0["k"]); if ($t40 !== undefined) { await $.mset(L0["sheet"], "cells", $t40); } }
            { const $t41 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 5], L0["kcount"]); if ($t41 !== undefined) { await $.mset(L0["sheet"], "cells", $t41); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 15);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Herif_Hesablar", [(await $.v(C, "bas")), (await $.v(C, "son")), 1, L0["vtip"], L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t42 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 4], L0["k"]); if ($t42 !== undefined) { await $.mset(L0["sheet"], "cells", $t42); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 16);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vtip"] = (await $.call(C, "Hesabin_tipi", [7]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["HQaliqlar", [(await $.v(C, "bas")), (await $.v(C, "son")), 1, L0["vtip"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t43 = await $.iset((await $.mv(L0["sheet"], "cells")), [21, 3], L0["k"]); if ($t43 !== undefined) { await $.mset(L0["sheet"], "cells", $t43); } }
            { const $t44 = await $.iset((await $.mv(L0["sheet"], "cells")), [21, 5], L0["kcount"]); if ($t44 !== undefined) { await $.mset(L0["sheet"], "cells", $t44); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 17);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Herif_Hesablar", [(await $.v(C, "bas")), (await $.v(C, "son")), 1, L0["vtip"], L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t45 = await $.iset((await $.mv(L0["sheet"], "cells")), [21, 4], L0["k"]); if ($t45 !== undefined) { await $.mset(L0["sheet"], "cells", $t45); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 18);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vtip"] = (await $.call(C, "Hesabin_tipi", [8]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["HQaliqlar", [(await $.v(C, "bas")), (await $.v(C, "son")), 1, L0["vtip"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t46 = await $.iset((await $.mv(L0["sheet"], "cells")), [22, 3], L0["k"]); if ($t46 !== undefined) { await $.mset(L0["sheet"], "cells", $t46); } }
            { const $t47 = await $.iset((await $.mv(L0["sheet"], "cells")), [22, 5], L0["kcount"]); if ($t47 !== undefined) { await $.mset(L0["sheet"], "cells", $t47); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 19);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Herif_Hesablar", [(await $.v(C, "bas")), (await $.v(C, "son")), 1, L0["vtip"], L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t48 = await $.iset((await $.mv(L0["sheet"], "cells")), [22, 4], L0["k"]); if ($t48 !== undefined) { await $.mset(L0["sheet"], "cells", $t48); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 20);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vtip"] = (await $.call(C, "Hesabin_tipi", [9]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["HQaliqlar", [(await $.v(C, "bas")), (await $.v(C, "son")), 1, L0["vtip"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t49 = await $.iset((await $.mv(L0["sheet"], "cells")), [23, 3], L0["k"]); if ($t49 !== undefined) { await $.mset(L0["sheet"], "cells", $t49); } }
            { const $t50 = await $.iset((await $.mv(L0["sheet"], "cells")), [23, 5], L0["kcount"]); if ($t50 !== undefined) { await $.mset(L0["sheet"], "cells", $t50); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 21);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Herif_Hesablar", [(await $.v(C, "bas")), (await $.v(C, "son")), 1, L0["vtip"], L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t51 = await $.iset((await $.mv(L0["sheet"], "cells")), [23, 4], L0["k"]); if ($t51 !== undefined) { await $.mset(L0["sheet"], "cells", $t51); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 22);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vtip"] = (await $.call(C, "Hesabin_tipi", [10]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["HQaliqlar", [(await $.v(C, "bas")), (await $.v(C, "son")), 1, L0["vtip"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t52 = await $.iset((await $.mv(L0["sheet"], "cells")), [24, 3], L0["k"]); if ($t52 !== undefined) { await $.mset(L0["sheet"], "cells", $t52); } }
            { const $t53 = await $.iset((await $.mv(L0["sheet"], "cells")), [24, 5], L0["kcount"]); if ($t53 !== undefined) { await $.mset(L0["sheet"], "cells", $t53); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 23);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Herif_Hesablar", [(await $.v(C, "bas")), (await $.v(C, "son")), 1, L0["vtip"], L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t54 = await $.iset((await $.mv(L0["sheet"], "cells")), [24, 4], L0["k"]); if ($t54 !== undefined) { await $.mset(L0["sheet"], "cells", $t54); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 24);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vtip"] = (await $.call(C, "Hesabin_tipi", [11]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["HQaliqlar", [(await $.v(C, "bas")), (await $.v(C, "son")), 1, L0["vtip"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t55 = await $.iset((await $.mv(L0["sheet"], "cells")), [25, 3], L0["k"]); if ($t55 !== undefined) { await $.mset(L0["sheet"], "cells", $t55); } }
            { const $t56 = await $.iset((await $.mv(L0["sheet"], "cells")), [25, 5], L0["kcount"]); if ($t56 !== undefined) { await $.mset(L0["sheet"], "cells", $t56); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 25);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Herif_Hesablar", [(await $.v(C, "bas")), (await $.v(C, "son")), 1, L0["vtip"], L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t57 = await $.iset((await $.mv(L0["sheet"], "cells")), [25, 4], L0["k"]); if ($t57 !== undefined) { await $.mset(L0["sheet"], "cells", $t57); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 26);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = $.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [24, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [25, 3]))])));
            { const $t58 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 3], L0["k"]); if ($t58 !== undefined) { await $.mset(L0["sheet"], "cells", $t58); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [24, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [25, 4]))])));
            { const $t59 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 4], L0["k"]); if ($t59 !== undefined) { await $.mset(L0["sheet"], "cells", $t59); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 5]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [24, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [25, 5]))])));
            { const $t60 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 5], L0["k"]); if ($t60 !== undefined) { await $.mset(L0["sheet"], "cells", $t60); } }
            L0["k"] = $.sub($.sub((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [12, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 3]))])));
            { const $t61 = await $.iset((await $.mv(L0["sheet"], "cells")), [27, 3], L0["k"]); if ($t61 !== undefined) { await $.mset(L0["sheet"], "cells", $t61); } }
            L0["kp"] = L0["k"];
            L0["k"] = $.sub($.sub((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [12, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 4]))])));
            { const $t62 = await $.iset((await $.mv(L0["sheet"], "cells")), [27, 4], L0["k"]); if ($t62 !== undefined) { await $.mset(L0["sheet"], "cells", $t62); } }
            L0["k"] = $.sub($.sub((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [12, 5]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 5]))])));
            { const $t63 = await $.iset((await $.mv(L0["sheet"], "cells")), [27, 5], L0["k"]); if ($t63 !== undefined) { await $.mset(L0["sheet"], "cells", $t63); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 27);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["VAL_Qaliqlar", [(await $.v(C, "bas")), (await $.v(C, "son")), L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t64 = await $.iset((await $.mv(L0["sheet"], "cells")), [30, 4], L0["k"]); if ($t64 !== undefined) { await $.mset(L0["sheet"], "cells", $t64); } }
            { const $t65 = await $.iset((await $.mv(L0["sheet"], "cells")), [30, 6], L0["kcount"]); if ($t65 !== undefined) { await $.mset(L0["sheet"], "cells", $t65); } }
            L0["mp"] = L0["k"];
            await $.mset((await $.v(C, "Gauge1")), "Progress", 28);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Val_Hesablar", [(await $.v(C, "bas")), (await $.v(C, "son")), L0["vcod"], L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t66 = await $.iset((await $.mv(L0["sheet"], "cells")), [30, 5], L0["k"]); if ($t66 !== undefined) { await $.mset(L0["sheet"], "cells", $t66); } }
            { const $t67 = await $.iset((await $.mv(L0["sheet"], "cells")), [30, 7], 1); if ($t67 !== undefined) { await $.mset(L0["sheet"], "cells", $t67); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 29);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["USD"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["VAL_Qaliqlar", [(await $.v(C, "bas")), (await $.v(C, "son")), L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t68 = await $.iset((await $.mv(L0["sheet"], "cells")), [31, 3], L0["k"]); if ($t68 !== undefined) { await $.mset(L0["sheet"], "cells", $t68); } }
            { const $t69 = await $.iset((await $.mv(L0["sheet"], "cells")), [31, 6], L0["kcount"]); if ($t69 !== undefined) { await $.mset(L0["sheet"], "cells", $t69); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 30);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Val_Hesablar", [(await $.v(C, "bas")), (await $.v(C, "son")), L0["vcod"], L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t70 = await $.iset((await $.mv(L0["sheet"], "cells")), [31, 5], L0["k"]); if ($t70 !== undefined) { await $.mset(L0["sheet"], "cells", $t70); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 31);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Kurs", [(await $.v(C, "son")), L0["vcod"], L0["r1"]]])));
            L0["rr"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [2]));
            { const $t71 = await $.iset((await $.mv(L0["sheet"], "cells")), [31, 7], L0["rr"]); if ($t71 !== undefined) { await $.mset(L0["sheet"], "cells", $t71); } }
            L0["rr"] = (await $.call(C, "round", [$.mul((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 3]))])), (await $.call(C, "StrToFloat", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 7]))])))]));
            { const $t72 = await $.iset((await $.mv(L0["sheet"], "cells")), [31, 4], L0["rr"]); if ($t72 !== undefined) { await $.mset(L0["sheet"], "cells", $t72); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 32);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["EUR"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["VAL_Qaliqlar", [(await $.v(C, "bas")), (await $.v(C, "son")), L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t73 = await $.iset((await $.mv(L0["sheet"], "cells")), [32, 3], L0["k"]); if ($t73 !== undefined) { await $.mset(L0["sheet"], "cells", $t73); } }
            { const $t74 = await $.iset((await $.mv(L0["sheet"], "cells")), [32, 6], L0["kcount"]); if ($t74 !== undefined) { await $.mset(L0["sheet"], "cells", $t74); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 33);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Val_Hesablar", [(await $.v(C, "bas")), (await $.v(C, "son")), L0["vcod"], L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t75 = await $.iset((await $.mv(L0["sheet"], "cells")), [32, 5], L0["k"]); if ($t75 !== undefined) { await $.mset(L0["sheet"], "cells", $t75); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 34);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Kurs", [(await $.v(C, "son")), L0["vcod"], L0["r1"]]])));
            L0["rr"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [2]));
            { const $t76 = await $.iset((await $.mv(L0["sheet"], "cells")), [32, 7], L0["rr"]); if ($t76 !== undefined) { await $.mset(L0["sheet"], "cells", $t76); } }
            L0["rr"] = (await $.call(C, "round", [$.mul((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 3]))])), (await $.call(C, "StrToFloat", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 7]))])))]));
            { const $t77 = await $.iset((await $.mv(L0["sheet"], "cells")), [32, 4], L0["rr"]); if ($t77 !== undefined) { await $.mset(L0["sheet"], "cells", $t77); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 35);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["RUR"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["VAL_Qaliqlar", [(await $.v(C, "bas")), (await $.v(C, "son")), L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t78 = await $.iset((await $.mv(L0["sheet"], "cells")), [35, 3], L0["k"]); if ($t78 !== undefined) { await $.mset(L0["sheet"], "cells", $t78); } }
            { const $t79 = await $.iset((await $.mv(L0["sheet"], "cells")), [35, 6], L0["kcount"]); if ($t79 !== undefined) { await $.mset(L0["sheet"], "cells", $t79); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 36);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Val_Hesablar", [(await $.v(C, "bas")), (await $.v(C, "son")), L0["vcod"], L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t80 = await $.iset((await $.mv(L0["sheet"], "cells")), [35, 5], L0["k"]); if ($t80 !== undefined) { await $.mset(L0["sheet"], "cells", $t80); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 37);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Kurs", [(await $.v(C, "son")), L0["vcod"], L0["r1"]]])));
            L0["rr"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [2]));
            { const $t81 = await $.iset((await $.mv(L0["sheet"], "cells")), [35, 7], L0["rr"]); if ($t81 !== undefined) { await $.mset(L0["sheet"], "cells", $t81); } }
            L0["rr"] = (await $.call(C, "round", [$.mul((await $.call(C, "StrToFloat", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 3]))])), (await $.call(C, "StrToFloat", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 7]))])))]));
            { const $t82 = await $.iset((await $.mv(L0["sheet"], "cells")), [35, 4], L0["rr"]); if ($t82 !== undefined) { await $.mset(L0["sheet"], "cells", $t82); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 38);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["GBP"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["VAL_Qaliqlar", [(await $.v(C, "bas")), (await $.v(C, "son")), L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t83 = await $.iset((await $.mv(L0["sheet"], "cells")), [36, 3], L0["k"]); if ($t83 !== undefined) { await $.mset(L0["sheet"], "cells", $t83); } }
            { const $t84 = await $.iset((await $.mv(L0["sheet"], "cells")), [36, 6], L0["kcount"]); if ($t84 !== undefined) { await $.mset(L0["sheet"], "cells", $t84); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 39);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Val_Hesablar", [(await $.v(C, "bas")), (await $.v(C, "son")), L0["vcod"], L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t85 = await $.iset((await $.mv(L0["sheet"], "cells")), [36, 5], L0["k"]); if ($t85 !== undefined) { await $.mset(L0["sheet"], "cells", $t85); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 40);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Kurs", [(await $.v(C, "son")), L0["vcod"], L0["r1"]]])));
            L0["rr"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [2]));
            { const $t86 = await $.iset((await $.mv(L0["sheet"], "cells")), [36, 7], L0["rr"]); if ($t86 !== undefined) { await $.mset(L0["sheet"], "cells", $t86); } }
            L0["rr"] = (await $.call(C, "round", [$.mul((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 3]))])), (await $.call(C, "StrToFloat", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 7]))])))]));
            { const $t87 = await $.iset((await $.mv(L0["sheet"], "cells")), [36, 4], L0["rr"]); if ($t87 !== undefined) { await $.mset(L0["sheet"], "cells", $t87); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 41);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            if ($.truthy($.eq((await $.v(C, "F")), 1))) {
              { const $t88 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 3], ""); if ($t88 !== undefined) { await $.mset(L0["sheet"], "cells", $t88); } }
              { const $t89 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 4], ""); if ($t89 !== undefined) { await $.mset(L0["sheet"], "cells", $t89); } }
              { const $t90 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 5], ""); if ($t90 !== undefined) { await $.mset(L0["sheet"], "cells", $t90); } }
              { const $t91 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 6], ""); if ($t91 !== undefined) { await $.mset(L0["sheet"], "cells", $t91); } }
              { const $t92 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 7], ""); if ($t92 !== undefined) { await $.mset(L0["sheet"], "cells", $t92); } }
              L0["k"] = $.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 4]))])));
              { const $t93 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 4], L0["k"]); if ($t93 !== undefined) { await $.mset(L0["sheet"], "cells", $t93); } }
              L0["k"] = $.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 5]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 5]))])));
              { const $t94 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 5], L0["k"]); if ($t94 !== undefined) { await $.mset(L0["sheet"], "cells", $t94); } }
              L0["k"] = $.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 6]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 6]))])));
              { const $t95 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 6], L0["k"]); if ($t95 !== undefined) { await $.mset(L0["sheet"], "cells", $t95); } }
              L0["rr"] = (await $.idx((await $.mv(L0["sheet"], "cells")), [31, 7]));
              { const $t96 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 7], L0["rr"]); if ($t96 !== undefined) { await $.mset(L0["sheet"], "cells", $t96); } }
              L0["k"] = (await $.call(C, "round", [$.fdiv((await $.call(C, "StrToFloat", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 4]))])), (await $.call(C, "strtofloat", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 7]))])))]));
              { const $t97 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 3], L0["k"]); if ($t97 !== undefined) { await $.mset(L0["sheet"], "cells", $t97); } }
            }
            if ($.truthy($.eq((await $.v(C, "F")), 2))) {
              { const $t98 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 3], ""); if ($t98 !== undefined) { await $.mset(L0["sheet"], "cells", $t98); } }
              { const $t99 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 4], ""); if ($t99 !== undefined) { await $.mset(L0["sheet"], "cells", $t99); } }
              { const $t100 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 5], ""); if ($t100 !== undefined) { await $.mset(L0["sheet"], "cells", $t100); } }
              { const $t101 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 6], ""); if ($t101 !== undefined) { await $.mset(L0["sheet"], "cells", $t101); } }
              { const $t102 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 7], ""); if ($t102 !== undefined) { await $.mset(L0["sheet"], "cells", $t102); } }
              L0["k"] = (await $.call(C, "round", [$.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 4]))])), (await $.call(C, "StrToint", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 4]))])))]));
              { const $t103 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 4], L0["k"]); if ($t103 !== undefined) { await $.mset(L0["sheet"], "cells", $t103); } }
              L0["k"] = $.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 4]))])));
              { const $t104 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 5], L0["k"]); if ($t104 !== undefined) { await $.mset(L0["sheet"], "cells", $t104); } }
              L0["k"] = $.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 5]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 5]))])));
              { const $t105 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 6], L0["k"]); if ($t105 !== undefined) { await $.mset(L0["sheet"], "cells", $t105); } }
              L0["rr"] = (await $.idx((await $.mv(L0["sheet"], "cells")), [32, 7]));
              { const $t106 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 7], L0["rr"]); if ($t106 !== undefined) { await $.mset(L0["sheet"], "cells", $t106); } }
              L0["k"] = (await $.call(C, "round", [$.fdiv((await $.call(C, "StrToFloat", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 4]))])), (await $.call(C, "strtofloat", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 7]))])))]));
              { const $t107 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 3], L0["k"]); if ($t107 !== undefined) { await $.mset(L0["sheet"], "cells", $t107); } }
            }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 42);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            if ($.truthy($.eq((await $.v(C, "F")), 1))) {
              L0["k"] = $.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [30, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 4]))])));
              L0["k"] = $.sub(L0["k"], L0["kp"]);
              L0["mp"] = $.sub(L0["mp"], L0["k"]);
              { const $t108 = await $.iset((await $.mv(L0["sheet"], "cells")), [30, 4], L0["mp"]); if ($t108 !== undefined) { await $.mset(L0["sheet"], "cells", $t108); } }
              { const $t109 = await $.iset((await $.mv(L0["sheet"], "cells")), [47, 4], L0["kp"]); if ($t109 !== undefined) { await $.mset(L0["sheet"], "cells", $t109); } }
              L0["k"] = $.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [30, 5]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 5]))])));
              { const $t110 = await $.iset((await $.mv(L0["sheet"], "cells")), [47, 5], L0["k"]); if ($t110 !== undefined) { await $.mset(L0["sheet"], "cells", $t110); } }
              L0["k"] = $.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [30, 6]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 6]))])));
              { const $t111 = await $.iset((await $.mv(L0["sheet"], "cells")), [47, 6], L0["k"]); if ($t111 !== undefined) { await $.mset(L0["sheet"], "cells", $t111); } }
            }
            if ($.truthy($.eq((await $.v(C, "F")), 2))) {
              L0["k"] = $.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [30, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 4]))])));
              L0["k"] = $.sub(L0["k"], L0["kp"]);
              L0["mp"] = $.sub(L0["mp"], L0["k"]);
              { const $t112 = await $.iset((await $.mv(L0["sheet"], "cells")), [30, 4], L0["mp"]); if ($t112 !== undefined) { await $.mset(L0["sheet"], "cells", $t112); } }
              { const $t113 = await $.iset((await $.mv(L0["sheet"], "cells")), [47, 4], L0["kp"]); if ($t113 !== undefined) { await $.mset(L0["sheet"], "cells", $t113); } }
              L0["k"] = $.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [30, 5]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 5]))])));
              { const $t114 = await $.iset((await $.mv(L0["sheet"], "cells")), [47, 5], L0["k"]); if ($t114 !== undefined) { await $.mset(L0["sheet"], "cells", $t114); } }
              L0["k"] = $.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [30, 6]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 6]))])));
              { const $t115 = await $.iset((await $.mv(L0["sheet"], "cells")), [47, 6], L0["k"]); if ($t115 !== undefined) { await $.mset(L0["sheet"], "cells", $t115); } }
            }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 43);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = (await $.idx((await $.mv(L0["sheet"], "cells")), [30, 4]));
            { const $t116 = await $.iset((await $.mv(L0["sheet"], "cells")), [49, 3], L0["k"]); if ($t116 !== undefined) { await $.mset(L0["sheet"], "cells", $t116); } }
            { const $t117 = await $.iset((await $.mv(L0["sheet"], "cells")), [50, 3], "0.125%"); if ($t117 !== undefined) { await $.mset(L0["sheet"], "cells", $t117); } }
            L0["k"] = (await $.call(C, "round", [$.fdiv($.mul((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [49, 3]))])), 0.125), 100)]));
            { const $t118 = await $.iset((await $.mv(L0["sheet"], "cells")), [51, 3], L0["k"]); if ($t118 !== undefined) { await $.mset(L0["sheet"], "cells", $t118); } }
            L0["k"] = (await $.idx((await $.mv(L0["sheet"], "cells")), [31, 3]));
            { const $t119 = await $.iset((await $.mv(L0["sheet"], "cells")), [49, 4], L0["k"]); if ($t119 !== undefined) { await $.mset(L0["sheet"], "cells", $t119); } }
            { const $t120 = await $.iset((await $.mv(L0["sheet"], "cells")), [50, 4], "0.125%"); if ($t120 !== undefined) { await $.mset(L0["sheet"], "cells", $t120); } }
            L0["k"] = (await $.call(C, "round", [$.fdiv($.mul((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [49, 4]))])), 0.125), 100)]));
            { const $t121 = await $.iset((await $.mv(L0["sheet"], "cells")), [51, 4], L0["k"]); if ($t121 !== undefined) { await $.mset(L0["sheet"], "cells", $t121); } }
            L0["k"] = (await $.idx((await $.mv(L0["sheet"], "cells")), [32, 3]));
            { const $t122 = await $.iset((await $.mv(L0["sheet"], "cells")), [49, 5], L0["k"]); if ($t122 !== undefined) { await $.mset(L0["sheet"], "cells", $t122); } }
            { const $t123 = await $.iset((await $.mv(L0["sheet"], "cells")), [50, 5], "0.125%"); if ($t123 !== undefined) { await $.mset(L0["sheet"], "cells", $t123); } }
            L0["k"] = (await $.call(C, "round", [$.fdiv($.mul((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [49, 5]))])), 0.125), 100)]));
            { const $t124 = await $.iset((await $.mv(L0["sheet"], "cells")), [51, 5], L0["k"]); if ($t124 !== undefined) { await $.mset(L0["sheet"], "cells", $t124); } }
            if ($.truthy($.eq((await $.v(C, "F")), 1))) {
              { const $t125 = await $.iset((await $.mv(L0["sheet"], "cells")), [49, 7], ""); if ($t125 !== undefined) { await $.mset(L0["sheet"], "cells", $t125); } }
              { const $t126 = await $.iset((await $.mv(L0["sheet"], "cells")), [50, 7], ""); if ($t126 !== undefined) { await $.mset(L0["sheet"], "cells", $t126); } }
              { const $t127 = await $.iset((await $.mv(L0["sheet"], "cells")), [51, 7], ""); if ($t127 !== undefined) { await $.mset(L0["sheet"], "cells", $t127); } }
              L0["k"] = (await $.idx((await $.mv(L0["sheet"], "cells")), [33, 3]));
              { const $t128 = await $.iset((await $.mv(L0["sheet"], "cells")), [49, 6], L0["k"]); if ($t128 !== undefined) { await $.mset(L0["sheet"], "cells", $t128); } }
              { const $t129 = await $.iset((await $.mv(L0["sheet"], "cells")), [50, 6], "0.125%"); if ($t129 !== undefined) { await $.mset(L0["sheet"], "cells", $t129); } }
              L0["k"] = (await $.call(C, "round", [$.fdiv($.mul((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [49, 6]))])), 0.125), 100)]));
              { const $t130 = await $.iset((await $.mv(L0["sheet"], "cells")), [51, 6], L0["k"]); if ($t130 !== undefined) { await $.mset(L0["sheet"], "cells", $t130); } }
            }
            if ($.truthy($.eq((await $.v(C, "F")), 2))) {
              { const $t131 = await $.iset((await $.mv(L0["sheet"], "cells")), [49, 6], ""); if ($t131 !== undefined) { await $.mset(L0["sheet"], "cells", $t131); } }
              { const $t132 = await $.iset((await $.mv(L0["sheet"], "cells")), [50, 6], ""); if ($t132 !== undefined) { await $.mset(L0["sheet"], "cells", $t132); } }
              { const $t133 = await $.iset((await $.mv(L0["sheet"], "cells")), [51, 6], ""); if ($t133 !== undefined) { await $.mset(L0["sheet"], "cells", $t133); } }
              L0["k"] = (await $.idx((await $.mv(L0["sheet"], "cells")), [34, 3]));
              { const $t134 = await $.iset((await $.mv(L0["sheet"], "cells")), [49, 7], L0["k"]); if ($t134 !== undefined) { await $.mset(L0["sheet"], "cells", $t134); } }
              { const $t135 = await $.iset((await $.mv(L0["sheet"], "cells")), [50, 7], "0.125%"); if ($t135 !== undefined) { await $.mset(L0["sheet"], "cells", $t135); } }
              L0["k"] = (await $.call(C, "round", [$.fdiv($.mul((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [49, 7]))])), 0.125), 100)]));
              { const $t136 = await $.iset((await $.mv(L0["sheet"], "cells")), [51, 7], L0["k"]); if ($t136 !== undefined) { await $.mset(L0["sheet"], "cells", $t136); } }
            }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 44);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 0.0, 1000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t137 = await $.iset((await $.mv(L0["sheet"], "cells")), [56, 3], L0["k"]); if ($t137 !== undefined) { await $.mset(L0["sheet"], "cells", $t137); } }
            { const $t138 = await $.iset((await $.mv(L0["sheet"], "cells")), [56, 4], L0["kcount"]); if ($t138 !== undefined) { await $.mset(L0["sheet"], "cells", $t138); } }
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["USD"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 0.0, 1000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t139 = await $.iset((await $.mv(L0["sheet"], "cells")), [56, 5], L0["k"]); if ($t139 !== undefined) { await $.mset(L0["sheet"], "cells", $t139); } }
            { const $t140 = await $.iset((await $.mv(L0["sheet"], "cells")), [56, 6], L0["kcount"]); if ($t140 !== undefined) { await $.mset(L0["sheet"], "cells", $t140); } }
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["EUR"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 0.0, 1000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t141 = await $.iset((await $.mv(L0["sheet"], "cells")), [56, 7], L0["k"]); if ($t141 !== undefined) { await $.mset(L0["sheet"], "cells", $t141); } }
            { const $t142 = await $.iset((await $.mv(L0["sheet"], "cells")), [56, 8], L0["kcount"]); if ($t142 !== undefined) { await $.mset(L0["sheet"], "cells", $t142); } }
            L0["k"] = $.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [56, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [56, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [56, 7]))])));
            { const $t143 = await $.iset((await $.mv(L0["sheet"], "cells")), [56, 9], L0["k"]); if ($t143 !== undefined) { await $.mset(L0["sheet"], "cells", $t143); } }
            L0["k"] = $.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [56, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [56, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [56, 8]))])));
            { const $t144 = await $.iset((await $.mv(L0["sheet"], "cells")), [56, 10], L0["k"]); if ($t144 !== undefined) { await $.mset(L0["sheet"], "cells", $t144); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 45);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 1000, 6000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t145 = await $.iset((await $.mv(L0["sheet"], "cells")), [57, 3], L0["k"]); if ($t145 !== undefined) { await $.mset(L0["sheet"], "cells", $t145); } }
            { const $t146 = await $.iset((await $.mv(L0["sheet"], "cells")), [57, 4], L0["kcount"]); if ($t146 !== undefined) { await $.mset(L0["sheet"], "cells", $t146); } }
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["USD"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 1000, 6000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t147 = await $.iset((await $.mv(L0["sheet"], "cells")), [57, 5], L0["k"]); if ($t147 !== undefined) { await $.mset(L0["sheet"], "cells", $t147); } }
            { const $t148 = await $.iset((await $.mv(L0["sheet"], "cells")), [57, 6], L0["kcount"]); if ($t148 !== undefined) { await $.mset(L0["sheet"], "cells", $t148); } }
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["EUR"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 1000, 6000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t149 = await $.iset((await $.mv(L0["sheet"], "cells")), [57, 7], L0["k"]); if ($t149 !== undefined) { await $.mset(L0["sheet"], "cells", $t149); } }
            { const $t150 = await $.iset((await $.mv(L0["sheet"], "cells")), [57, 8], L0["kcount"]); if ($t150 !== undefined) { await $.mset(L0["sheet"], "cells", $t150); } }
            L0["k"] = $.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [57, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [57, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [57, 7]))])));
            { const $t151 = await $.iset((await $.mv(L0["sheet"], "cells")), [57, 9], L0["k"]); if ($t151 !== undefined) { await $.mset(L0["sheet"], "cells", $t151); } }
            L0["k"] = $.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [57, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [57, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [57, 8]))])));
            { const $t152 = await $.iset((await $.mv(L0["sheet"], "cells")), [57, 10], L0["k"]); if ($t152 !== undefined) { await $.mset(L0["sheet"], "cells", $t152); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 46);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 6000, 30000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t153 = await $.iset((await $.mv(L0["sheet"], "cells")), [58, 3], L0["k"]); if ($t153 !== undefined) { await $.mset(L0["sheet"], "cells", $t153); } }
            { const $t154 = await $.iset((await $.mv(L0["sheet"], "cells")), [58, 4], L0["kcount"]); if ($t154 !== undefined) { await $.mset(L0["sheet"], "cells", $t154); } }
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["USD"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 6000, 30000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t155 = await $.iset((await $.mv(L0["sheet"], "cells")), [58, 5], L0["k"]); if ($t155 !== undefined) { await $.mset(L0["sheet"], "cells", $t155); } }
            { const $t156 = await $.iset((await $.mv(L0["sheet"], "cells")), [58, 6], L0["kcount"]); if ($t156 !== undefined) { await $.mset(L0["sheet"], "cells", $t156); } }
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["EUR"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 6000, 30000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t157 = await $.iset((await $.mv(L0["sheet"], "cells")), [58, 7], L0["k"]); if ($t157 !== undefined) { await $.mset(L0["sheet"], "cells", $t157); } }
            { const $t158 = await $.iset((await $.mv(L0["sheet"], "cells")), [58, 8], L0["kcount"]); if ($t158 !== undefined) { await $.mset(L0["sheet"], "cells", $t158); } }
            L0["k"] = $.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [58, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [58, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [58, 7]))])));
            { const $t159 = await $.iset((await $.mv(L0["sheet"], "cells")), [58, 9], L0["k"]); if ($t159 !== undefined) { await $.mset(L0["sheet"], "cells", $t159); } }
            L0["k"] = $.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [58, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [58, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [58, 8]))])));
            { const $t160 = await $.iset((await $.mv(L0["sheet"], "cells")), [58, 10], L0["k"]); if ($t160 !== undefined) { await $.mset(L0["sheet"], "cells", $t160); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 47);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 30000, 40000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t161 = await $.iset((await $.mv(L0["sheet"], "cells")), [59, 3], L0["k"]); if ($t161 !== undefined) { await $.mset(L0["sheet"], "cells", $t161); } }
            { const $t162 = await $.iset((await $.mv(L0["sheet"], "cells")), [59, 4], L0["kcount"]); if ($t162 !== undefined) { await $.mset(L0["sheet"], "cells", $t162); } }
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["USD"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 30000, 40000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t163 = await $.iset((await $.mv(L0["sheet"], "cells")), [59, 5], L0["k"]); if ($t163 !== undefined) { await $.mset(L0["sheet"], "cells", $t163); } }
            { const $t164 = await $.iset((await $.mv(L0["sheet"], "cells")), [59, 6], L0["kcount"]); if ($t164 !== undefined) { await $.mset(L0["sheet"], "cells", $t164); } }
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["EUR"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 30000, 40000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t165 = await $.iset((await $.mv(L0["sheet"], "cells")), [59, 7], L0["k"]); if ($t165 !== undefined) { await $.mset(L0["sheet"], "cells", $t165); } }
            { const $t166 = await $.iset((await $.mv(L0["sheet"], "cells")), [59, 8], L0["kcount"]); if ($t166 !== undefined) { await $.mset(L0["sheet"], "cells", $t166); } }
            L0["k"] = $.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [59, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [59, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [59, 7]))])));
            { const $t167 = await $.iset((await $.mv(L0["sheet"], "cells")), [59, 9], L0["k"]); if ($t167 !== undefined) { await $.mset(L0["sheet"], "cells", $t167); } }
            L0["k"] = $.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [59, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [59, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [59, 8]))])));
            { const $t168 = await $.iset((await $.mv(L0["sheet"], "cells")), [59, 10], L0["k"]); if ($t168 !== undefined) { await $.mset(L0["sheet"], "cells", $t168); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 48);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 40000, 50000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t169 = await $.iset((await $.mv(L0["sheet"], "cells")), [60, 3], L0["k"]); if ($t169 !== undefined) { await $.mset(L0["sheet"], "cells", $t169); } }
            { const $t170 = await $.iset((await $.mv(L0["sheet"], "cells")), [60, 4], L0["kcount"]); if ($t170 !== undefined) { await $.mset(L0["sheet"], "cells", $t170); } }
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["USD"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 40000, 50000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t171 = await $.iset((await $.mv(L0["sheet"], "cells")), [60, 5], L0["k"]); if ($t171 !== undefined) { await $.mset(L0["sheet"], "cells", $t171); } }
            { const $t172 = await $.iset((await $.mv(L0["sheet"], "cells")), [60, 6], L0["kcount"]); if ($t172 !== undefined) { await $.mset(L0["sheet"], "cells", $t172); } }
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["EUR"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 40000, 50000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t173 = await $.iset((await $.mv(L0["sheet"], "cells")), [60, 7], L0["k"]); if ($t173 !== undefined) { await $.mset(L0["sheet"], "cells", $t173); } }
            { const $t174 = await $.iset((await $.mv(L0["sheet"], "cells")), [60, 8], L0["kcount"]); if ($t174 !== undefined) { await $.mset(L0["sheet"], "cells", $t174); } }
            L0["k"] = $.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [60, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [60, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [60, 7]))])));
            { const $t175 = await $.iset((await $.mv(L0["sheet"], "cells")), [60, 9], L0["k"]); if ($t175 !== undefined) { await $.mset(L0["sheet"], "cells", $t175); } }
            L0["k"] = $.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [60, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [60, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [60, 8]))])));
            { const $t176 = await $.iset((await $.mv(L0["sheet"], "cells")), [60, 10], L0["k"]); if ($t176 !== undefined) { await $.mset(L0["sheet"], "cells", $t176); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 49);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 50000, 60000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t177 = await $.iset((await $.mv(L0["sheet"], "cells")), [61, 3], L0["k"]); if ($t177 !== undefined) { await $.mset(L0["sheet"], "cells", $t177); } }
            { const $t178 = await $.iset((await $.mv(L0["sheet"], "cells")), [61, 4], L0["kcount"]); if ($t178 !== undefined) { await $.mset(L0["sheet"], "cells", $t178); } }
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["USD"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 50000, 60000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t179 = await $.iset((await $.mv(L0["sheet"], "cells")), [61, 5], L0["k"]); if ($t179 !== undefined) { await $.mset(L0["sheet"], "cells", $t179); } }
            { const $t180 = await $.iset((await $.mv(L0["sheet"], "cells")), [61, 6], L0["kcount"]); if ($t180 !== undefined) { await $.mset(L0["sheet"], "cells", $t180); } }
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["EUR"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 50000, 60000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t181 = await $.iset((await $.mv(L0["sheet"], "cells")), [61, 7], L0["k"]); if ($t181 !== undefined) { await $.mset(L0["sheet"], "cells", $t181); } }
            { const $t182 = await $.iset((await $.mv(L0["sheet"], "cells")), [61, 8], L0["kcount"]); if ($t182 !== undefined) { await $.mset(L0["sheet"], "cells", $t182); } }
            L0["k"] = $.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [61, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [61, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [61, 7]))])));
            { const $t183 = await $.iset((await $.mv(L0["sheet"], "cells")), [61, 9], L0["k"]); if ($t183 !== undefined) { await $.mset(L0["sheet"], "cells", $t183); } }
            L0["k"] = $.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [61, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [61, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [61, 8]))])));
            { const $t184 = await $.iset((await $.mv(L0["sheet"], "cells")), [61, 10], L0["k"]); if ($t184 !== undefined) { await $.mset(L0["sheet"], "cells", $t184); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 50);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 60000, 70000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t185 = await $.iset((await $.mv(L0["sheet"], "cells")), [62, 3], L0["k"]); if ($t185 !== undefined) { await $.mset(L0["sheet"], "cells", $t185); } }
            { const $t186 = await $.iset((await $.mv(L0["sheet"], "cells")), [62, 4], L0["kcount"]); if ($t186 !== undefined) { await $.mset(L0["sheet"], "cells", $t186); } }
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["USD"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 60000, 70000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t187 = await $.iset((await $.mv(L0["sheet"], "cells")), [62, 5], L0["k"]); if ($t187 !== undefined) { await $.mset(L0["sheet"], "cells", $t187); } }
            { const $t188 = await $.iset((await $.mv(L0["sheet"], "cells")), [62, 6], L0["kcount"]); if ($t188 !== undefined) { await $.mset(L0["sheet"], "cells", $t188); } }
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["EUR"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 60000, 70000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t189 = await $.iset((await $.mv(L0["sheet"], "cells")), [62, 7], L0["k"]); if ($t189 !== undefined) { await $.mset(L0["sheet"], "cells", $t189); } }
            { const $t190 = await $.iset((await $.mv(L0["sheet"], "cells")), [62, 8], L0["kcount"]); if ($t190 !== undefined) { await $.mset(L0["sheet"], "cells", $t190); } }
            L0["k"] = $.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [62, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [62, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [62, 7]))])));
            { const $t191 = await $.iset((await $.mv(L0["sheet"], "cells")), [62, 9], L0["k"]); if ($t191 !== undefined) { await $.mset(L0["sheet"], "cells", $t191); } }
            L0["k"] = $.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [62, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [62, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [62, 8]))])));
            { const $t192 = await $.iset((await $.mv(L0["sheet"], "cells")), [62, 10], L0["k"]); if ($t192 !== undefined) { await $.mset(L0["sheet"], "cells", $t192); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 51);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 70000, 100000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t193 = await $.iset((await $.mv(L0["sheet"], "cells")), [63, 3], L0["k"]); if ($t193 !== undefined) { await $.mset(L0["sheet"], "cells", $t193); } }
            { const $t194 = await $.iset((await $.mv(L0["sheet"], "cells")), [63, 4], L0["kcount"]); if ($t194 !== undefined) { await $.mset(L0["sheet"], "cells", $t194); } }
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["USD"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 70000, 100000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t195 = await $.iset((await $.mv(L0["sheet"], "cells")), [63, 5], L0["k"]); if ($t195 !== undefined) { await $.mset(L0["sheet"], "cells", $t195); } }
            { const $t196 = await $.iset((await $.mv(L0["sheet"], "cells")), [63, 6], L0["kcount"]); if ($t196 !== undefined) { await $.mset(L0["sheet"], "cells", $t196); } }
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["EUR"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 70000, 100000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t197 = await $.iset((await $.mv(L0["sheet"], "cells")), [63, 7], L0["k"]); if ($t197 !== undefined) { await $.mset(L0["sheet"], "cells", $t197); } }
            { const $t198 = await $.iset((await $.mv(L0["sheet"], "cells")), [63, 8], L0["kcount"]); if ($t198 !== undefined) { await $.mset(L0["sheet"], "cells", $t198); } }
            L0["k"] = $.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [63, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [63, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [63, 7]))])));
            { const $t199 = await $.iset((await $.mv(L0["sheet"], "cells")), [63, 9], L0["k"]); if ($t199 !== undefined) { await $.mset(L0["sheet"], "cells", $t199); } }
            L0["k"] = $.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [63, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [63, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [63, 8]))])));
            { const $t200 = await $.iset((await $.mv(L0["sheet"], "cells")), [63, 10], L0["k"]); if ($t200 !== undefined) { await $.mset(L0["sheet"], "cells", $t200); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 52);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 100000, 500000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t201 = await $.iset((await $.mv(L0["sheet"], "cells")), [64, 3], L0["k"]); if ($t201 !== undefined) { await $.mset(L0["sheet"], "cells", $t201); } }
            { const $t202 = await $.iset((await $.mv(L0["sheet"], "cells")), [64, 4], L0["kcount"]); if ($t202 !== undefined) { await $.mset(L0["sheet"], "cells", $t202); } }
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["USD"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 100000, 500000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t203 = await $.iset((await $.mv(L0["sheet"], "cells")), [64, 5], L0["k"]); if ($t203 !== undefined) { await $.mset(L0["sheet"], "cells", $t203); } }
            { const $t204 = await $.iset((await $.mv(L0["sheet"], "cells")), [64, 6], L0["kcount"]); if ($t204 !== undefined) { await $.mset(L0["sheet"], "cells", $t204); } }
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["EUR"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 100000, 500000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t205 = await $.iset((await $.mv(L0["sheet"], "cells")), [64, 7], L0["k"]); if ($t205 !== undefined) { await $.mset(L0["sheet"], "cells", $t205); } }
            { const $t206 = await $.iset((await $.mv(L0["sheet"], "cells")), [64, 8], L0["kcount"]); if ($t206 !== undefined) { await $.mset(L0["sheet"], "cells", $t206); } }
            L0["k"] = $.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [64, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [64, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [64, 7]))])));
            { const $t207 = await $.iset((await $.mv(L0["sheet"], "cells")), [64, 9], L0["k"]); if ($t207 !== undefined) { await $.mset(L0["sheet"], "cells", $t207); } }
            L0["k"] = $.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [64, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [64, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [64, 8]))])));
            { const $t208 = await $.iset((await $.mv(L0["sheet"], "cells")), [64, 10], L0["k"]); if ($t208 !== undefined) { await $.mset(L0["sheet"], "cells", $t208); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 53);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 500000, 100000000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t209 = await $.iset((await $.mv(L0["sheet"], "cells")), [65, 3], L0["k"]); if ($t209 !== undefined) { await $.mset(L0["sheet"], "cells", $t209); } }
            { const $t210 = await $.iset((await $.mv(L0["sheet"], "cells")), [65, 4], L0["kcount"]); if ($t210 !== undefined) { await $.mset(L0["sheet"], "cells", $t210); } }
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["USD"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 500000, 100000000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t211 = await $.iset((await $.mv(L0["sheet"], "cells")), [65, 5], L0["k"]); if ($t211 !== undefined) { await $.mset(L0["sheet"], "cells", $t211); } }
            { const $t212 = await $.iset((await $.mv(L0["sheet"], "cells")), [65, 6], L0["kcount"]); if ($t212 !== undefined) { await $.mset(L0["sheet"], "cells", $t212); } }
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["EUR"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Amount_Qaliqlar", [(await $.v(C, "son")), 500000, 100000000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t213 = await $.iset((await $.mv(L0["sheet"], "cells")), [65, 7], L0["k"]); if ($t213 !== undefined) { await $.mset(L0["sheet"], "cells", $t213); } }
            { const $t214 = await $.iset((await $.mv(L0["sheet"], "cells")), [65, 8], L0["kcount"]); if ($t214 !== undefined) { await $.mset(L0["sheet"], "cells", $t214); } }
            L0["k"] = $.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [65, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [65, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [65, 7]))])));
            { const $t215 = await $.iset((await $.mv(L0["sheet"], "cells")), [65, 9], L0["k"]); if ($t215 !== undefined) { await $.mset(L0["sheet"], "cells", $t215); } }
            L0["k"] = $.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [65, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [65, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [65, 8]))])));
            { const $t216 = await $.iset((await $.mv(L0["sheet"], "cells")), [65, 10], L0["k"]); if ($t216 !== undefined) { await $.mset(L0["sheet"], "cells", $t216); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [56, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [57, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [58, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [59, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [60, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [61, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [62, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [63, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [64, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [65, 3]))])));
            { const $t217 = await $.iset((await $.mv(L0["sheet"], "cells")), [66, 3], L0["k"]); if ($t217 !== undefined) { await $.mset(L0["sheet"], "cells", $t217); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [56, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [57, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [58, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [59, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [60, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [61, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [62, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [63, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [64, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [65, 4]))])));
            { const $t218 = await $.iset((await $.mv(L0["sheet"], "cells")), [66, 4], L0["k"]); if ($t218 !== undefined) { await $.mset(L0["sheet"], "cells", $t218); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [56, 5]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [57, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [58, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [59, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [60, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [61, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [62, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [63, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [64, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [65, 5]))])));
            { const $t219 = await $.iset((await $.mv(L0["sheet"], "cells")), [66, 5], L0["k"]); if ($t219 !== undefined) { await $.mset(L0["sheet"], "cells", $t219); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [56, 6]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [57, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [58, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [59, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [60, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [61, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [62, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [63, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [64, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [65, 6]))])));
            { const $t220 = await $.iset((await $.mv(L0["sheet"], "cells")), [66, 6], L0["k"]); if ($t220 !== undefined) { await $.mset(L0["sheet"], "cells", $t220); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [56, 7]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [57, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [58, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [59, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [60, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [61, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [62, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [63, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [64, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [65, 7]))])));
            { const $t221 = await $.iset((await $.mv(L0["sheet"], "cells")), [66, 7], L0["k"]); if ($t221 !== undefined) { await $.mset(L0["sheet"], "cells", $t221); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [56, 8]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [57, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [58, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [59, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [60, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [61, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [62, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [63, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [64, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [65, 8]))])));
            { const $t222 = await $.iset((await $.mv(L0["sheet"], "cells")), [66, 8], L0["k"]); if ($t222 !== undefined) { await $.mset(L0["sheet"], "cells", $t222); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [56, 9]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [57, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [58, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [59, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [60, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [61, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [62, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [63, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [64, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [65, 9]))])));
            { const $t223 = await $.iset((await $.mv(L0["sheet"], "cells")), [66, 9], L0["k"]); if ($t223 !== undefined) { await $.mset(L0["sheet"], "cells", $t223); } }
            L0["m1"] = L0["k"];
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [56, 10]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [57, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [58, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [59, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [60, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [61, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [62, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [63, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [64, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [65, 10]))])));
            { const $t224 = await $.iset((await $.mv(L0["sheet"], "cells")), [66, 10], L0["k"]); if ($t224 !== undefined) { await $.mset(L0["sheet"], "cells", $t224); } }
          }
          if ($.truthy($.eq(L0["i"], 1))) {
            L0["v"] = (await $.mv((await $.v(C, "ExcelApplication2")), "Application"));
            await $.mcall((await $.v(C, "ExcelApplication2")), "Connect", []);
            await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))])), "Emanetler(II hisse).xls")])));
            { const $t225 = 100;
              L0["openedxlscnt"] = 1;
              let $t226 = true;
              for (;;) {
                if (!$t226) { L0["openedxlscnt"] = $.succ(L0["openedxlscnt"], 1); }
                $t226 = false;
                if (!($.ord(L0["openedxlscnt"]) <= $.ord($t225))) break;
                try {
                  L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [L0["openedxlscnt"]])), "Worksheets")), ["hesabat"]));
                  break;
                } catch ($t227) {
                  $.rethrowControl($t227);
                  $.handled($t227);
                }
                await $.tick();
              }
            }
            L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
            await $.mcall((await $.idx((await $.mv(L0["sheets"], "Item")), ["hesabat"])), "Activate", []);
            L0["il"] = (await $.call(C, "FormatDateTime", ["yyyy", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP1")), "DateTime"))]))]));
            { const $t228 = await $.iset((await $.mv(L0["sheet"], "cells")), [1, 2], L0["il"]); if ($t228 !== undefined) { await $.mset(L0["sheet"], "cells", $t228); } }
            await $.set(C, "Bas", (await $.call(C, "FormatDateTime", ["dd-MMM-yyyy", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP1")), "DateTime"))]))])));
            await $.set(C, "Son", (await $.call(C, "FormatDateTime", ["dd-MMM-yyyy", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP2")), "DateTime"))]))])));
            { const $t229 = await $.iset((await $.mv(L0["sheet"], "cells")), [2, 2], $.add($.add((await $.v(C, "Bas")), "_______"), (await $.v(C, "son")))); if ($t229 !== undefined) { await $.mset(L0["sheet"], "cells", $t229); } }
            await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [7, 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "Cells")), [7, 1])), "Font")), "Bold", true);
            await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "Cells")), [7, 1])), "Font")), "size", 12);
            await $.mset((await $.v(C, "Gauge1")), "Progress", 54);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountOstat", [(await $.v(C, "son")), 0.0, 1000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t230 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 3], L0["k"]); if ($t230 !== undefined) { await $.mset(L0["sheet"], "cells", $t230); } }
            { const $t231 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 4], L0["kcount"]); if ($t231 !== undefined) { await $.mset(L0["sheet"], "cells", $t231); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 0.0, 1000, 0, 9, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t232 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 5], L0["k"]); if ($t232 !== undefined) { await $.mset(L0["sheet"], "cells", $t232); } }
            { const $t233 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 6], L0["kcount"]); if ($t233 !== undefined) { await $.mset(L0["sheet"], "cells", $t233); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 0.0, 1000, 9, 12, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t234 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 7], L0["k"]); if ($t234 !== undefined) { await $.mset(L0["sheet"], "cells", $t234); } }
            { const $t235 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 8], L0["kcount"]); if ($t235 !== undefined) { await $.mset(L0["sheet"], "cells", $t235); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 0.0, 1000, 12, 15, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t236 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 9], L0["k"]); if ($t236 !== undefined) { await $.mset(L0["sheet"], "cells", $t236); } }
            { const $t237 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 10], L0["kcount"]); if ($t237 !== undefined) { await $.mset(L0["sheet"], "cells", $t237); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 0.0, 1000, 15, 17, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t238 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 11], L0["k"]); if ($t238 !== undefined) { await $.mset(L0["sheet"], "cells", $t238); } }
            { const $t239 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 12], L0["kcount"]); if ($t239 !== undefined) { await $.mset(L0["sheet"], "cells", $t239); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 0.0, 1000, 17, 19, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t240 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 13], L0["k"]); if ($t240 !== undefined) { await $.mset(L0["sheet"], "cells", $t240); } }
            { const $t241 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 14], L0["kcount"]); if ($t241 !== undefined) { await $.mset(L0["sheet"], "cells", $t241); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 0.0, 1000, 19, 21, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t242 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 15], L0["k"]); if ($t242 !== undefined) { await $.mset(L0["sheet"], "cells", $t242); } }
            { const $t243 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 16], L0["kcount"]); if ($t243 !== undefined) { await $.mset(L0["sheet"], "cells", $t243); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 0.0, 1000, 21, 30, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t244 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 17], L0["k"]); if ($t244 !== undefined) { await $.mset(L0["sheet"], "cells", $t244); } }
            { const $t245 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 18], L0["kcount"]); if ($t245 !== undefined) { await $.mset(L0["sheet"], "cells", $t245); } }
            { const $t246 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 19], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 17]))])))); if ($t246 !== undefined) { await $.mset(L0["sheet"], "cells", $t246); } }
            { const $t247 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 20], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 18]))])))); if ($t247 !== undefined) { await $.mset(L0["sheet"], "cells", $t247); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 55);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountOstat", [(await $.v(C, "son")), 1000, 6000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t248 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 3], L0["k"]); if ($t248 !== undefined) { await $.mset(L0["sheet"], "cells", $t248); } }
            { const $t249 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 4], L0["kcount"]); if ($t249 !== undefined) { await $.mset(L0["sheet"], "cells", $t249); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 1000, 6000, 0, 9, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t250 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 5], L0["k"]); if ($t250 !== undefined) { await $.mset(L0["sheet"], "cells", $t250); } }
            { const $t251 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 6], L0["kcount"]); if ($t251 !== undefined) { await $.mset(L0["sheet"], "cells", $t251); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 1000, 6000, 9, 12, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t252 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 7], L0["k"]); if ($t252 !== undefined) { await $.mset(L0["sheet"], "cells", $t252); } }
            { const $t253 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 8], L0["kcount"]); if ($t253 !== undefined) { await $.mset(L0["sheet"], "cells", $t253); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 1000, 6000, 12, 15, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t254 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 9], L0["k"]); if ($t254 !== undefined) { await $.mset(L0["sheet"], "cells", $t254); } }
            { const $t255 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 10], L0["kcount"]); if ($t255 !== undefined) { await $.mset(L0["sheet"], "cells", $t255); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 1000, 6000, 15, 17, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t256 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 11], L0["k"]); if ($t256 !== undefined) { await $.mset(L0["sheet"], "cells", $t256); } }
            { const $t257 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 12], L0["kcount"]); if ($t257 !== undefined) { await $.mset(L0["sheet"], "cells", $t257); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 1000, 6000, 17, 19, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t258 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 13], L0["k"]); if ($t258 !== undefined) { await $.mset(L0["sheet"], "cells", $t258); } }
            { const $t259 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 14], L0["kcount"]); if ($t259 !== undefined) { await $.mset(L0["sheet"], "cells", $t259); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 1000, 6000, 19, 21, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t260 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 15], L0["k"]); if ($t260 !== undefined) { await $.mset(L0["sheet"], "cells", $t260); } }
            { const $t261 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 16], L0["kcount"]); if ($t261 !== undefined) { await $.mset(L0["sheet"], "cells", $t261); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 1000, 6000, 21, 30, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t262 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 17], L0["k"]); if ($t262 !== undefined) { await $.mset(L0["sheet"], "cells", $t262); } }
            { const $t263 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 18], L0["kcount"]); if ($t263 !== undefined) { await $.mset(L0["sheet"], "cells", $t263); } }
            { const $t264 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 19], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 17]))])))); if ($t264 !== undefined) { await $.mset(L0["sheet"], "cells", $t264); } }
            { const $t265 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 20], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 18]))])))); if ($t265 !== undefined) { await $.mset(L0["sheet"], "cells", $t265); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 56);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountOstat", [(await $.v(C, "son")), 6000, 30000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t266 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 3], L0["k"]); if ($t266 !== undefined) { await $.mset(L0["sheet"], "cells", $t266); } }
            { const $t267 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 4], L0["kcount"]); if ($t267 !== undefined) { await $.mset(L0["sheet"], "cells", $t267); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 6000, 30000, 0, 9, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t268 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 5], L0["k"]); if ($t268 !== undefined) { await $.mset(L0["sheet"], "cells", $t268); } }
            { const $t269 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 6], L0["kcount"]); if ($t269 !== undefined) { await $.mset(L0["sheet"], "cells", $t269); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 6000, 30000, 9, 12, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t270 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 7], L0["k"]); if ($t270 !== undefined) { await $.mset(L0["sheet"], "cells", $t270); } }
            { const $t271 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 8], L0["kcount"]); if ($t271 !== undefined) { await $.mset(L0["sheet"], "cells", $t271); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 6000, 30000, 12, 15, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t272 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 9], L0["k"]); if ($t272 !== undefined) { await $.mset(L0["sheet"], "cells", $t272); } }
            { const $t273 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 10], L0["kcount"]); if ($t273 !== undefined) { await $.mset(L0["sheet"], "cells", $t273); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 6000, 30000, 15, 17, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t274 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 11], L0["k"]); if ($t274 !== undefined) { await $.mset(L0["sheet"], "cells", $t274); } }
            { const $t275 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 12], L0["kcount"]); if ($t275 !== undefined) { await $.mset(L0["sheet"], "cells", $t275); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 6000, 30000, 17, 19, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t276 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 13], L0["k"]); if ($t276 !== undefined) { await $.mset(L0["sheet"], "cells", $t276); } }
            { const $t277 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 14], L0["kcount"]); if ($t277 !== undefined) { await $.mset(L0["sheet"], "cells", $t277); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 6000, 30000, 19, 21, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t278 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 15], L0["k"]); if ($t278 !== undefined) { await $.mset(L0["sheet"], "cells", $t278); } }
            { const $t279 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 16], L0["kcount"]); if ($t279 !== undefined) { await $.mset(L0["sheet"], "cells", $t279); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 6000, 30000, 21, 30, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t280 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 17], L0["k"]); if ($t280 !== undefined) { await $.mset(L0["sheet"], "cells", $t280); } }
            { const $t281 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 18], L0["kcount"]); if ($t281 !== undefined) { await $.mset(L0["sheet"], "cells", $t281); } }
            { const $t282 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 19], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 17]))])))); if ($t282 !== undefined) { await $.mset(L0["sheet"], "cells", $t282); } }
            { const $t283 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 20], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 18]))])))); if ($t283 !== undefined) { await $.mset(L0["sheet"], "cells", $t283); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 57);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountOstat", [(await $.v(C, "son")), 30000, 40000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t284 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 3], L0["k"]); if ($t284 !== undefined) { await $.mset(L0["sheet"], "cells", $t284); } }
            { const $t285 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 4], L0["kcount"]); if ($t285 !== undefined) { await $.mset(L0["sheet"], "cells", $t285); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 30000, 40000, 0, 9, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t286 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 5], L0["k"]); if ($t286 !== undefined) { await $.mset(L0["sheet"], "cells", $t286); } }
            { const $t287 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 6], L0["kcount"]); if ($t287 !== undefined) { await $.mset(L0["sheet"], "cells", $t287); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 30000, 40000, 9, 12, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t288 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 7], L0["k"]); if ($t288 !== undefined) { await $.mset(L0["sheet"], "cells", $t288); } }
            { const $t289 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 8], L0["kcount"]); if ($t289 !== undefined) { await $.mset(L0["sheet"], "cells", $t289); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 30000, 40000, 12, 15, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t290 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 9], L0["k"]); if ($t290 !== undefined) { await $.mset(L0["sheet"], "cells", $t290); } }
            { const $t291 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 10], L0["kcount"]); if ($t291 !== undefined) { await $.mset(L0["sheet"], "cells", $t291); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 30000, 40000, 15, 17, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t292 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 11], L0["k"]); if ($t292 !== undefined) { await $.mset(L0["sheet"], "cells", $t292); } }
            { const $t293 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 12], L0["kcount"]); if ($t293 !== undefined) { await $.mset(L0["sheet"], "cells", $t293); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 30000, 40000, 17, 19, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t294 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 13], L0["k"]); if ($t294 !== undefined) { await $.mset(L0["sheet"], "cells", $t294); } }
            { const $t295 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 14], L0["kcount"]); if ($t295 !== undefined) { await $.mset(L0["sheet"], "cells", $t295); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 30000, 40000, 19, 21, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t296 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 15], L0["k"]); if ($t296 !== undefined) { await $.mset(L0["sheet"], "cells", $t296); } }
            { const $t297 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 16], L0["kcount"]); if ($t297 !== undefined) { await $.mset(L0["sheet"], "cells", $t297); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 30000, 40000, 21, 30, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t298 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 17], L0["k"]); if ($t298 !== undefined) { await $.mset(L0["sheet"], "cells", $t298); } }
            { const $t299 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 18], L0["kcount"]); if ($t299 !== undefined) { await $.mset(L0["sheet"], "cells", $t299); } }
            { const $t300 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 19], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 17]))])))); if ($t300 !== undefined) { await $.mset(L0["sheet"], "cells", $t300); } }
            { const $t301 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 20], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 18]))])))); if ($t301 !== undefined) { await $.mset(L0["sheet"], "cells", $t301); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 58);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountOstat", [(await $.v(C, "son")), 40000, 50000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t302 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 3], L0["k"]); if ($t302 !== undefined) { await $.mset(L0["sheet"], "cells", $t302); } }
            { const $t303 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 4], L0["kcount"]); if ($t303 !== undefined) { await $.mset(L0["sheet"], "cells", $t303); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 40000, 50000, 0, 9, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t304 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 5], L0["k"]); if ($t304 !== undefined) { await $.mset(L0["sheet"], "cells", $t304); } }
            { const $t305 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 6], L0["kcount"]); if ($t305 !== undefined) { await $.mset(L0["sheet"], "cells", $t305); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 40000, 50000, 9, 12, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t306 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 7], L0["k"]); if ($t306 !== undefined) { await $.mset(L0["sheet"], "cells", $t306); } }
            { const $t307 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 8], L0["kcount"]); if ($t307 !== undefined) { await $.mset(L0["sheet"], "cells", $t307); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 40000, 50000, 12, 15, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t308 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 9], L0["k"]); if ($t308 !== undefined) { await $.mset(L0["sheet"], "cells", $t308); } }
            { const $t309 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 10], L0["kcount"]); if ($t309 !== undefined) { await $.mset(L0["sheet"], "cells", $t309); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 40000, 50000, 15, 17, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t310 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 11], L0["k"]); if ($t310 !== undefined) { await $.mset(L0["sheet"], "cells", $t310); } }
            { const $t311 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 12], L0["kcount"]); if ($t311 !== undefined) { await $.mset(L0["sheet"], "cells", $t311); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 40000, 50000, 17, 19, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t312 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 13], L0["k"]); if ($t312 !== undefined) { await $.mset(L0["sheet"], "cells", $t312); } }
            { const $t313 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 14], L0["kcount"]); if ($t313 !== undefined) { await $.mset(L0["sheet"], "cells", $t313); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 40000, 50000, 19, 21, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t314 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 15], L0["k"]); if ($t314 !== undefined) { await $.mset(L0["sheet"], "cells", $t314); } }
            { const $t315 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 16], L0["kcount"]); if ($t315 !== undefined) { await $.mset(L0["sheet"], "cells", $t315); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 40000, 50000, 21, 30, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t316 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 17], L0["k"]); if ($t316 !== undefined) { await $.mset(L0["sheet"], "cells", $t316); } }
            { const $t317 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 18], L0["kcount"]); if ($t317 !== undefined) { await $.mset(L0["sheet"], "cells", $t317); } }
            { const $t318 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 19], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 17]))])))); if ($t318 !== undefined) { await $.mset(L0["sheet"], "cells", $t318); } }
            { const $t319 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 20], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 18]))])))); if ($t319 !== undefined) { await $.mset(L0["sheet"], "cells", $t319); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 59);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountOstat", [(await $.v(C, "son")), 50000, 60000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t320 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 3], L0["k"]); if ($t320 !== undefined) { await $.mset(L0["sheet"], "cells", $t320); } }
            { const $t321 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 4], L0["kcount"]); if ($t321 !== undefined) { await $.mset(L0["sheet"], "cells", $t321); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 50000, 60000, 0, 9, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t322 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 5], L0["k"]); if ($t322 !== undefined) { await $.mset(L0["sheet"], "cells", $t322); } }
            { const $t323 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 6], L0["kcount"]); if ($t323 !== undefined) { await $.mset(L0["sheet"], "cells", $t323); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 50000, 60000, 9, 12, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t324 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 7], L0["k"]); if ($t324 !== undefined) { await $.mset(L0["sheet"], "cells", $t324); } }
            { const $t325 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 8], L0["kcount"]); if ($t325 !== undefined) { await $.mset(L0["sheet"], "cells", $t325); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 50000, 60000, 12, 15, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t326 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 9], L0["k"]); if ($t326 !== undefined) { await $.mset(L0["sheet"], "cells", $t326); } }
            { const $t327 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 10], L0["kcount"]); if ($t327 !== undefined) { await $.mset(L0["sheet"], "cells", $t327); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 50000, 60000, 15, 17, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t328 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 11], L0["k"]); if ($t328 !== undefined) { await $.mset(L0["sheet"], "cells", $t328); } }
            { const $t329 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 12], L0["kcount"]); if ($t329 !== undefined) { await $.mset(L0["sheet"], "cells", $t329); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 50000, 60000, 17, 19, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t330 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 13], L0["k"]); if ($t330 !== undefined) { await $.mset(L0["sheet"], "cells", $t330); } }
            { const $t331 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 14], L0["kcount"]); if ($t331 !== undefined) { await $.mset(L0["sheet"], "cells", $t331); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 50000, 60000, 19, 21, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t332 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 15], L0["k"]); if ($t332 !== undefined) { await $.mset(L0["sheet"], "cells", $t332); } }
            { const $t333 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 16], L0["kcount"]); if ($t333 !== undefined) { await $.mset(L0["sheet"], "cells", $t333); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 50000, 60000, 21, 30, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t334 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 17], L0["k"]); if ($t334 !== undefined) { await $.mset(L0["sheet"], "cells", $t334); } }
            { const $t335 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 18], L0["kcount"]); if ($t335 !== undefined) { await $.mset(L0["sheet"], "cells", $t335); } }
            { const $t336 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 19], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 17]))])))); if ($t336 !== undefined) { await $.mset(L0["sheet"], "cells", $t336); } }
            { const $t337 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 20], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 18]))])))); if ($t337 !== undefined) { await $.mset(L0["sheet"], "cells", $t337); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 60);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountOstat", [(await $.v(C, "son")), 60000, 70000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t338 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 3], L0["k"]); if ($t338 !== undefined) { await $.mset(L0["sheet"], "cells", $t338); } }
            { const $t339 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 4], L0["kcount"]); if ($t339 !== undefined) { await $.mset(L0["sheet"], "cells", $t339); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 60000, 70000, 0, 9, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t340 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 5], L0["k"]); if ($t340 !== undefined) { await $.mset(L0["sheet"], "cells", $t340); } }
            { const $t341 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 6], L0["kcount"]); if ($t341 !== undefined) { await $.mset(L0["sheet"], "cells", $t341); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 60000, 70000, 9, 12, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t342 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 7], L0["k"]); if ($t342 !== undefined) { await $.mset(L0["sheet"], "cells", $t342); } }
            { const $t343 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 8], L0["kcount"]); if ($t343 !== undefined) { await $.mset(L0["sheet"], "cells", $t343); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 60000, 70000, 12, 15, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t344 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 9], L0["k"]); if ($t344 !== undefined) { await $.mset(L0["sheet"], "cells", $t344); } }
            { const $t345 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 10], L0["kcount"]); if ($t345 !== undefined) { await $.mset(L0["sheet"], "cells", $t345); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 60000, 70000, 15, 17, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t346 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 11], L0["k"]); if ($t346 !== undefined) { await $.mset(L0["sheet"], "cells", $t346); } }
            { const $t347 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 12], L0["kcount"]); if ($t347 !== undefined) { await $.mset(L0["sheet"], "cells", $t347); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 60000, 70000, 17, 19, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t348 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 13], L0["k"]); if ($t348 !== undefined) { await $.mset(L0["sheet"], "cells", $t348); } }
            { const $t349 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 14], L0["kcount"]); if ($t349 !== undefined) { await $.mset(L0["sheet"], "cells", $t349); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 60000, 70000, 19, 21, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t350 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 15], L0["k"]); if ($t350 !== undefined) { await $.mset(L0["sheet"], "cells", $t350); } }
            { const $t351 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 16], L0["kcount"]); if ($t351 !== undefined) { await $.mset(L0["sheet"], "cells", $t351); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 60000, 70000, 21, 30, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t352 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 17], L0["k"]); if ($t352 !== undefined) { await $.mset(L0["sheet"], "cells", $t352); } }
            { const $t353 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 18], L0["kcount"]); if ($t353 !== undefined) { await $.mset(L0["sheet"], "cells", $t353); } }
            { const $t354 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 19], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 17]))])))); if ($t354 !== undefined) { await $.mset(L0["sheet"], "cells", $t354); } }
            { const $t355 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 20], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 18]))])))); if ($t355 !== undefined) { await $.mset(L0["sheet"], "cells", $t355); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 61);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountOstat", [(await $.v(C, "son")), 70000, 100000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t356 = await $.iset((await $.mv(L0["sheet"], "cells")), [21, 3], L0["k"]); if ($t356 !== undefined) { await $.mset(L0["sheet"], "cells", $t356); } }
            { const $t357 = await $.iset((await $.mv(L0["sheet"], "cells")), [21, 4], L0["kcount"]); if ($t357 !== undefined) { await $.mset(L0["sheet"], "cells", $t357); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 70000, 100000, 0, 9, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t358 = await $.iset((await $.mv(L0["sheet"], "cells")), [21, 5], L0["k"]); if ($t358 !== undefined) { await $.mset(L0["sheet"], "cells", $t358); } }
            { const $t359 = await $.iset((await $.mv(L0["sheet"], "cells")), [21, 6], L0["kcount"]); if ($t359 !== undefined) { await $.mset(L0["sheet"], "cells", $t359); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 70000, 100000, 9, 12, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t360 = await $.iset((await $.mv(L0["sheet"], "cells")), [21, 7], L0["k"]); if ($t360 !== undefined) { await $.mset(L0["sheet"], "cells", $t360); } }
            { const $t361 = await $.iset((await $.mv(L0["sheet"], "cells")), [21, 8], L0["kcount"]); if ($t361 !== undefined) { await $.mset(L0["sheet"], "cells", $t361); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 70000, 100000, 12, 15, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t362 = await $.iset((await $.mv(L0["sheet"], "cells")), [21, 9], L0["k"]); if ($t362 !== undefined) { await $.mset(L0["sheet"], "cells", $t362); } }
            { const $t363 = await $.iset((await $.mv(L0["sheet"], "cells")), [21, 10], L0["kcount"]); if ($t363 !== undefined) { await $.mset(L0["sheet"], "cells", $t363); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 70000, 100000, 15, 17, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t364 = await $.iset((await $.mv(L0["sheet"], "cells")), [21, 11], L0["k"]); if ($t364 !== undefined) { await $.mset(L0["sheet"], "cells", $t364); } }
            { const $t365 = await $.iset((await $.mv(L0["sheet"], "cells")), [21, 12], L0["kcount"]); if ($t365 !== undefined) { await $.mset(L0["sheet"], "cells", $t365); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 70000, 100000, 17, 19, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t366 = await $.iset((await $.mv(L0["sheet"], "cells")), [21, 13], L0["k"]); if ($t366 !== undefined) { await $.mset(L0["sheet"], "cells", $t366); } }
            { const $t367 = await $.iset((await $.mv(L0["sheet"], "cells")), [21, 14], L0["kcount"]); if ($t367 !== undefined) { await $.mset(L0["sheet"], "cells", $t367); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 70000, 100000, 19, 21, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t368 = await $.iset((await $.mv(L0["sheet"], "cells")), [21, 15], L0["k"]); if ($t368 !== undefined) { await $.mset(L0["sheet"], "cells", $t368); } }
            { const $t369 = await $.iset((await $.mv(L0["sheet"], "cells")), [21, 16], L0["kcount"]); if ($t369 !== undefined) { await $.mset(L0["sheet"], "cells", $t369); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 70000, 100000, 21, 30, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t370 = await $.iset((await $.mv(L0["sheet"], "cells")), [21, 17], L0["k"]); if ($t370 !== undefined) { await $.mset(L0["sheet"], "cells", $t370); } }
            { const $t371 = await $.iset((await $.mv(L0["sheet"], "cells")), [21, 18], L0["kcount"]); if ($t371 !== undefined) { await $.mset(L0["sheet"], "cells", $t371); } }
            { const $t372 = await $.iset((await $.mv(L0["sheet"], "cells")), [21, 19], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 17]))])))); if ($t372 !== undefined) { await $.mset(L0["sheet"], "cells", $t372); } }
            { const $t373 = await $.iset((await $.mv(L0["sheet"], "cells")), [21, 20], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 18]))])))); if ($t373 !== undefined) { await $.mset(L0["sheet"], "cells", $t373); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 62);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountOstat", [(await $.v(C, "son")), 100000, 500000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t374 = await $.iset((await $.mv(L0["sheet"], "cells")), [22, 3], L0["k"]); if ($t374 !== undefined) { await $.mset(L0["sheet"], "cells", $t374); } }
            { const $t375 = await $.iset((await $.mv(L0["sheet"], "cells")), [22, 4], L0["kcount"]); if ($t375 !== undefined) { await $.mset(L0["sheet"], "cells", $t375); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 100000, 500000, 0, 9, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t376 = await $.iset((await $.mv(L0["sheet"], "cells")), [22, 5], L0["k"]); if ($t376 !== undefined) { await $.mset(L0["sheet"], "cells", $t376); } }
            { const $t377 = await $.iset((await $.mv(L0["sheet"], "cells")), [22, 6], L0["kcount"]); if ($t377 !== undefined) { await $.mset(L0["sheet"], "cells", $t377); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 100000, 500000, 9, 12, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t378 = await $.iset((await $.mv(L0["sheet"], "cells")), [22, 7], L0["k"]); if ($t378 !== undefined) { await $.mset(L0["sheet"], "cells", $t378); } }
            { const $t379 = await $.iset((await $.mv(L0["sheet"], "cells")), [22, 8], L0["kcount"]); if ($t379 !== undefined) { await $.mset(L0["sheet"], "cells", $t379); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 100000, 500000, 12, 15, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t380 = await $.iset((await $.mv(L0["sheet"], "cells")), [22, 9], L0["k"]); if ($t380 !== undefined) { await $.mset(L0["sheet"], "cells", $t380); } }
            { const $t381 = await $.iset((await $.mv(L0["sheet"], "cells")), [22, 10], L0["kcount"]); if ($t381 !== undefined) { await $.mset(L0["sheet"], "cells", $t381); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 100000, 500000, 15, 17, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t382 = await $.iset((await $.mv(L0["sheet"], "cells")), [22, 11], L0["k"]); if ($t382 !== undefined) { await $.mset(L0["sheet"], "cells", $t382); } }
            { const $t383 = await $.iset((await $.mv(L0["sheet"], "cells")), [22, 12], L0["kcount"]); if ($t383 !== undefined) { await $.mset(L0["sheet"], "cells", $t383); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 100000, 500000, 17, 19, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t384 = await $.iset((await $.mv(L0["sheet"], "cells")), [22, 13], L0["k"]); if ($t384 !== undefined) { await $.mset(L0["sheet"], "cells", $t384); } }
            { const $t385 = await $.iset((await $.mv(L0["sheet"], "cells")), [22, 14], L0["kcount"]); if ($t385 !== undefined) { await $.mset(L0["sheet"], "cells", $t385); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 100000, 500000, 19, 21, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t386 = await $.iset((await $.mv(L0["sheet"], "cells")), [22, 15], L0["k"]); if ($t386 !== undefined) { await $.mset(L0["sheet"], "cells", $t386); } }
            { const $t387 = await $.iset((await $.mv(L0["sheet"], "cells")), [22, 16], L0["kcount"]); if ($t387 !== undefined) { await $.mset(L0["sheet"], "cells", $t387); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 100000, 500000, 21, 30, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t388 = await $.iset((await $.mv(L0["sheet"], "cells")), [22, 17], L0["k"]); if ($t388 !== undefined) { await $.mset(L0["sheet"], "cells", $t388); } }
            { const $t389 = await $.iset((await $.mv(L0["sheet"], "cells")), [22, 18], L0["kcount"]); if ($t389 !== undefined) { await $.mset(L0["sheet"], "cells", $t389); } }
            { const $t390 = await $.iset((await $.mv(L0["sheet"], "cells")), [22, 19], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 17]))])))); if ($t390 !== undefined) { await $.mset(L0["sheet"], "cells", $t390); } }
            { const $t391 = await $.iset((await $.mv(L0["sheet"], "cells")), [22, 20], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 18]))])))); if ($t391 !== undefined) { await $.mset(L0["sheet"], "cells", $t391); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 63);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountOstat", [(await $.v(C, "son")), 500000, 1000000000, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            { const $t392 = await $.iset((await $.mv(L0["sheet"], "cells")), [23, 3], L0["k"]); if ($t392 !== undefined) { await $.mset(L0["sheet"], "cells", $t392); } }
            { const $t393 = await $.iset((await $.mv(L0["sheet"], "cells")), [23, 4], L0["kcount"]); if ($t393 !== undefined) { await $.mset(L0["sheet"], "cells", $t393); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 500000, 1000000000, 0, 9, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t394 = await $.iset((await $.mv(L0["sheet"], "cells")), [23, 5], L0["k"]); if ($t394 !== undefined) { await $.mset(L0["sheet"], "cells", $t394); } }
            { const $t395 = await $.iset((await $.mv(L0["sheet"], "cells")), [23, 6], L0["kcount"]); if ($t395 !== undefined) { await $.mset(L0["sheet"], "cells", $t395); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 500000, 1000000000, 9, 12, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t396 = await $.iset((await $.mv(L0["sheet"], "cells")), [23, 7], L0["k"]); if ($t396 !== undefined) { await $.mset(L0["sheet"], "cells", $t396); } }
            { const $t397 = await $.iset((await $.mv(L0["sheet"], "cells")), [23, 8], L0["kcount"]); if ($t397 !== undefined) { await $.mset(L0["sheet"], "cells", $t397); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 500000, 1000000000, 12, 15, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t398 = await $.iset((await $.mv(L0["sheet"], "cells")), [23, 9], L0["k"]); if ($t398 !== undefined) { await $.mset(L0["sheet"], "cells", $t398); } }
            { const $t399 = await $.iset((await $.mv(L0["sheet"], "cells")), [23, 10], L0["kcount"]); if ($t399 !== undefined) { await $.mset(L0["sheet"], "cells", $t399); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 500000, 1000000000, 15, 17, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t400 = await $.iset((await $.mv(L0["sheet"], "cells")), [23, 11], L0["k"]); if ($t400 !== undefined) { await $.mset(L0["sheet"], "cells", $t400); } }
            { const $t401 = await $.iset((await $.mv(L0["sheet"], "cells")), [23, 12], L0["kcount"]); if ($t401 !== undefined) { await $.mset(L0["sheet"], "cells", $t401); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 500000, 1000000000, 17, 19, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t402 = await $.iset((await $.mv(L0["sheet"], "cells")), [23, 13], L0["k"]); if ($t402 !== undefined) { await $.mset(L0["sheet"], "cells", $t402); } }
            { const $t403 = await $.iset((await $.mv(L0["sheet"], "cells")), [23, 14], L0["kcount"]); if ($t403 !== undefined) { await $.mset(L0["sheet"], "cells", $t403); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 500000, 1000000000, 19, 21, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t404 = await $.iset((await $.mv(L0["sheet"], "cells")), [23, 15], L0["k"]); if ($t404 !== undefined) { await $.mset(L0["sheet"], "cells", $t404); } }
            { const $t405 = await $.iset((await $.mv(L0["sheet"], "cells")), [23, 16], L0["kcount"]); if ($t405 !== undefined) { await $.mset(L0["sheet"], "cells", $t405); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstat", [(await $.v(C, "son")), 500000, 1000000000, 21, 30, L0["vcod"], L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [7]));
            { const $t406 = await $.iset((await $.mv(L0["sheet"], "cells")), [23, 17], L0["k"]); if ($t406 !== undefined) { await $.mset(L0["sheet"], "cells", $t406); } }
            { const $t407 = await $.iset((await $.mv(L0["sheet"], "cells")), [23, 18], L0["kcount"]); if ($t407 !== undefined) { await $.mset(L0["sheet"], "cells", $t407); } }
            { const $t408 = await $.iset((await $.mv(L0["sheet"], "cells")), [23, 19], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 17]))])))); if ($t408 !== undefined) { await $.mset(L0["sheet"], "cells", $t408); } }
            { const $t409 = await $.iset((await $.mv(L0["sheet"], "cells")), [23, 20], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 18]))])))); if ($t409 !== undefined) { await $.mset(L0["sheet"], "cells", $t409); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 3]))])));
            { const $t410 = await $.iset((await $.mv(L0["sheet"], "cells")), [24, 3], L0["k"]); if ($t410 !== undefined) { await $.mset(L0["sheet"], "cells", $t410); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 4]))])));
            { const $t411 = await $.iset((await $.mv(L0["sheet"], "cells")), [24, 4], L0["k"]); if ($t411 !== undefined) { await $.mset(L0["sheet"], "cells", $t411); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 5]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 5]))])));
            { const $t412 = await $.iset((await $.mv(L0["sheet"], "cells")), [24, 5], L0["k"]); if ($t412 !== undefined) { await $.mset(L0["sheet"], "cells", $t412); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 6]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 6]))])));
            { const $t413 = await $.iset((await $.mv(L0["sheet"], "cells")), [24, 6], L0["k"]); if ($t413 !== undefined) { await $.mset(L0["sheet"], "cells", $t413); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 7]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 7]))])));
            { const $t414 = await $.iset((await $.mv(L0["sheet"], "cells")), [24, 7], L0["k"]); if ($t414 !== undefined) { await $.mset(L0["sheet"], "cells", $t414); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 8]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 8]))])));
            { const $t415 = await $.iset((await $.mv(L0["sheet"], "cells")), [24, 8], L0["k"]); if ($t415 !== undefined) { await $.mset(L0["sheet"], "cells", $t415); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 9]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 9]))])));
            { const $t416 = await $.iset((await $.mv(L0["sheet"], "cells")), [24, 9], L0["k"]); if ($t416 !== undefined) { await $.mset(L0["sheet"], "cells", $t416); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 10]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 10]))])));
            { const $t417 = await $.iset((await $.mv(L0["sheet"], "cells")), [24, 10], L0["k"]); if ($t417 !== undefined) { await $.mset(L0["sheet"], "cells", $t417); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 11]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 11]))])));
            { const $t418 = await $.iset((await $.mv(L0["sheet"], "cells")), [24, 11], L0["k"]); if ($t418 !== undefined) { await $.mset(L0["sheet"], "cells", $t418); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 12]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 12]))])));
            { const $t419 = await $.iset((await $.mv(L0["sheet"], "cells")), [24, 12], L0["k"]); if ($t419 !== undefined) { await $.mset(L0["sheet"], "cells", $t419); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 13]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 13]))])));
            { const $t420 = await $.iset((await $.mv(L0["sheet"], "cells")), [24, 13], L0["k"]); if ($t420 !== undefined) { await $.mset(L0["sheet"], "cells", $t420); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 14]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 14]))])));
            { const $t421 = await $.iset((await $.mv(L0["sheet"], "cells")), [24, 14], L0["k"]); if ($t421 !== undefined) { await $.mset(L0["sheet"], "cells", $t421); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 15]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 15]))])));
            { const $t422 = await $.iset((await $.mv(L0["sheet"], "cells")), [24, 15], L0["k"]); if ($t422 !== undefined) { await $.mset(L0["sheet"], "cells", $t422); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 16]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 16]))])));
            { const $t423 = await $.iset((await $.mv(L0["sheet"], "cells")), [24, 16], L0["k"]); if ($t423 !== undefined) { await $.mset(L0["sheet"], "cells", $t423); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 17]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 17]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 17]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 17]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 17]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 17]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 17]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 17]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 17]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 17]))])));
            { const $t424 = await $.iset((await $.mv(L0["sheet"], "cells")), [24, 17], L0["k"]); if ($t424 !== undefined) { await $.mset(L0["sheet"], "cells", $t424); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 18]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 18]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 18]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 18]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 18]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 18]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 18]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 18]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 18]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 18]))])));
            { const $t425 = await $.iset((await $.mv(L0["sheet"], "cells")), [24, 18], L0["k"]); if ($t425 !== undefined) { await $.mset(L0["sheet"], "cells", $t425); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 19]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 19]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 19]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 19]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 19]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 19]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 19]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 19]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 19]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 19]))])));
            { const $t426 = await $.iset((await $.mv(L0["sheet"], "cells")), [24, 19], L0["k"]); if ($t426 !== undefined) { await $.mset(L0["sheet"], "cells", $t426); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 20]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 20]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 20]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 20]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 20]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 20]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [20, 20]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [21, 20]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [22, 20]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [23, 20]))])));
            { const $t427 = await $.iset((await $.mv(L0["sheet"], "cells")), [24, 20], L0["k"]); if ($t427 !== undefined) { await $.mset(L0["sheet"], "cells", $t427); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 64);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountOstatValyuta", [(await $.v(C, "son")), 0.0, 1000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t428 = await $.iset((await $.mv(L0["sheet"], "cells")), [31, 3], L0["k"]); if ($t428 !== undefined) { await $.mset(L0["sheet"], "cells", $t428); } }
            { const $t429 = await $.iset((await $.mv(L0["sheet"], "cells")), [31, 4], L0["kcount"]); if ($t429 !== undefined) { await $.mset(L0["sheet"], "cells", $t429); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 0.0, 1000, 0, 3, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t430 = await $.iset((await $.mv(L0["sheet"], "cells")), [31, 5], L0["k"]); if ($t430 !== undefined) { await $.mset(L0["sheet"], "cells", $t430); } }
            { const $t431 = await $.iset((await $.mv(L0["sheet"], "cells")), [31, 6], L0["kcount"]); if ($t431 !== undefined) { await $.mset(L0["sheet"], "cells", $t431); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 0.0, 1000, 3, 5, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t432 = await $.iset((await $.mv(L0["sheet"], "cells")), [31, 7], L0["k"]); if ($t432 !== undefined) { await $.mset(L0["sheet"], "cells", $t432); } }
            { const $t433 = await $.iset((await $.mv(L0["sheet"], "cells")), [31, 8], L0["kcount"]); if ($t433 !== undefined) { await $.mset(L0["sheet"], "cells", $t433); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 0.0, 1000, 5, 7, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t434 = await $.iset((await $.mv(L0["sheet"], "cells")), [31, 9], L0["k"]); if ($t434 !== undefined) { await $.mset(L0["sheet"], "cells", $t434); } }
            { const $t435 = await $.iset((await $.mv(L0["sheet"], "cells")), [31, 10], L0["kcount"]); if ($t435 !== undefined) { await $.mset(L0["sheet"], "cells", $t435); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 0.0, 1000, 7, 9, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t436 = await $.iset((await $.mv(L0["sheet"], "cells")), [31, 11], L0["k"]); if ($t436 !== undefined) { await $.mset(L0["sheet"], "cells", $t436); } }
            { const $t437 = await $.iset((await $.mv(L0["sheet"], "cells")), [31, 12], L0["kcount"]); if ($t437 !== undefined) { await $.mset(L0["sheet"], "cells", $t437); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 0.0, 1000, 9, 12, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t438 = await $.iset((await $.mv(L0["sheet"], "cells")), [31, 13], L0["k"]); if ($t438 !== undefined) { await $.mset(L0["sheet"], "cells", $t438); } }
            { const $t439 = await $.iset((await $.mv(L0["sheet"], "cells")), [31, 14], L0["kcount"]); if ($t439 !== undefined) { await $.mset(L0["sheet"], "cells", $t439); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 0.0, 1000, 12, 15, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t440 = await $.iset((await $.mv(L0["sheet"], "cells")), [31, 15], L0["k"]); if ($t440 !== undefined) { await $.mset(L0["sheet"], "cells", $t440); } }
            { const $t441 = await $.iset((await $.mv(L0["sheet"], "cells")), [31, 16], L0["kcount"]); if ($t441 !== undefined) { await $.mset(L0["sheet"], "cells", $t441); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 0.0, 1000, 15, 30, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t442 = await $.iset((await $.mv(L0["sheet"], "cells")), [31, 17], L0["k"]); if ($t442 !== undefined) { await $.mset(L0["sheet"], "cells", $t442); } }
            { const $t443 = await $.iset((await $.mv(L0["sheet"], "cells")), [31, 18], L0["kcount"]); if ($t443 !== undefined) { await $.mset(L0["sheet"], "cells", $t443); } }
            { const $t444 = await $.iset((await $.mv(L0["sheet"], "cells")), [31, 19], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 17]))])))); if ($t444 !== undefined) { await $.mset(L0["sheet"], "cells", $t444); } }
            { const $t445 = await $.iset((await $.mv(L0["sheet"], "cells")), [31, 20], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 18]))])))); if ($t445 !== undefined) { await $.mset(L0["sheet"], "cells", $t445); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 65);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountOstatValyuta", [(await $.v(C, "son")), 1000, 6000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t446 = await $.iset((await $.mv(L0["sheet"], "cells")), [32, 3], L0["k"]); if ($t446 !== undefined) { await $.mset(L0["sheet"], "cells", $t446); } }
            { const $t447 = await $.iset((await $.mv(L0["sheet"], "cells")), [32, 4], L0["kcount"]); if ($t447 !== undefined) { await $.mset(L0["sheet"], "cells", $t447); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 1000, 6000, 0, 3, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t448 = await $.iset((await $.mv(L0["sheet"], "cells")), [32, 5], L0["k"]); if ($t448 !== undefined) { await $.mset(L0["sheet"], "cells", $t448); } }
            { const $t449 = await $.iset((await $.mv(L0["sheet"], "cells")), [32, 6], L0["kcount"]); if ($t449 !== undefined) { await $.mset(L0["sheet"], "cells", $t449); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 1000, 6000, 3, 5, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t450 = await $.iset((await $.mv(L0["sheet"], "cells")), [32, 7], L0["k"]); if ($t450 !== undefined) { await $.mset(L0["sheet"], "cells", $t450); } }
            { const $t451 = await $.iset((await $.mv(L0["sheet"], "cells")), [32, 8], L0["kcount"]); if ($t451 !== undefined) { await $.mset(L0["sheet"], "cells", $t451); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 1000, 6000, 5, 7, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t452 = await $.iset((await $.mv(L0["sheet"], "cells")), [32, 9], L0["k"]); if ($t452 !== undefined) { await $.mset(L0["sheet"], "cells", $t452); } }
            { const $t453 = await $.iset((await $.mv(L0["sheet"], "cells")), [32, 10], L0["kcount"]); if ($t453 !== undefined) { await $.mset(L0["sheet"], "cells", $t453); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 1000, 6000, 7, 9, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t454 = await $.iset((await $.mv(L0["sheet"], "cells")), [32, 11], L0["k"]); if ($t454 !== undefined) { await $.mset(L0["sheet"], "cells", $t454); } }
            { const $t455 = await $.iset((await $.mv(L0["sheet"], "cells")), [32, 12], L0["kcount"]); if ($t455 !== undefined) { await $.mset(L0["sheet"], "cells", $t455); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 1000, 6000, 9, 12, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t456 = await $.iset((await $.mv(L0["sheet"], "cells")), [32, 13], L0["k"]); if ($t456 !== undefined) { await $.mset(L0["sheet"], "cells", $t456); } }
            { const $t457 = await $.iset((await $.mv(L0["sheet"], "cells")), [32, 14], L0["kcount"]); if ($t457 !== undefined) { await $.mset(L0["sheet"], "cells", $t457); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 1000, 6000, 12, 15, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t458 = await $.iset((await $.mv(L0["sheet"], "cells")), [32, 15], L0["k"]); if ($t458 !== undefined) { await $.mset(L0["sheet"], "cells", $t458); } }
            { const $t459 = await $.iset((await $.mv(L0["sheet"], "cells")), [32, 16], L0["kcount"]); if ($t459 !== undefined) { await $.mset(L0["sheet"], "cells", $t459); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 1000, 6000, 15, 30, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t460 = await $.iset((await $.mv(L0["sheet"], "cells")), [32, 17], L0["k"]); if ($t460 !== undefined) { await $.mset(L0["sheet"], "cells", $t460); } }
            { const $t461 = await $.iset((await $.mv(L0["sheet"], "cells")), [32, 18], L0["kcount"]); if ($t461 !== undefined) { await $.mset(L0["sheet"], "cells", $t461); } }
            { const $t462 = await $.iset((await $.mv(L0["sheet"], "cells")), [32, 19], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 17]))])))); if ($t462 !== undefined) { await $.mset(L0["sheet"], "cells", $t462); } }
            { const $t463 = await $.iset((await $.mv(L0["sheet"], "cells")), [32, 20], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 18]))])))); if ($t463 !== undefined) { await $.mset(L0["sheet"], "cells", $t463); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 66);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountOstatValyuta", [(await $.v(C, "son")), 6000, 30000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t464 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 3], L0["k"]); if ($t464 !== undefined) { await $.mset(L0["sheet"], "cells", $t464); } }
            { const $t465 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 4], L0["kcount"]); if ($t465 !== undefined) { await $.mset(L0["sheet"], "cells", $t465); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 6000, 30000, 0, 3, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t466 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 5], L0["k"]); if ($t466 !== undefined) { await $.mset(L0["sheet"], "cells", $t466); } }
            { const $t467 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 6], L0["kcount"]); if ($t467 !== undefined) { await $.mset(L0["sheet"], "cells", $t467); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 6000, 30000, 3, 5, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t468 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 7], L0["k"]); if ($t468 !== undefined) { await $.mset(L0["sheet"], "cells", $t468); } }
            { const $t469 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 8], L0["kcount"]); if ($t469 !== undefined) { await $.mset(L0["sheet"], "cells", $t469); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 6000, 30000, 5, 7, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t470 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 9], L0["k"]); if ($t470 !== undefined) { await $.mset(L0["sheet"], "cells", $t470); } }
            { const $t471 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 10], L0["kcount"]); if ($t471 !== undefined) { await $.mset(L0["sheet"], "cells", $t471); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 6000, 30000, 7, 9, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t472 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 11], L0["k"]); if ($t472 !== undefined) { await $.mset(L0["sheet"], "cells", $t472); } }
            { const $t473 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 12], L0["kcount"]); if ($t473 !== undefined) { await $.mset(L0["sheet"], "cells", $t473); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 6000, 30000, 9, 12, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t474 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 13], L0["k"]); if ($t474 !== undefined) { await $.mset(L0["sheet"], "cells", $t474); } }
            { const $t475 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 14], L0["kcount"]); if ($t475 !== undefined) { await $.mset(L0["sheet"], "cells", $t475); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 6000, 30000, 12, 15, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t476 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 15], L0["k"]); if ($t476 !== undefined) { await $.mset(L0["sheet"], "cells", $t476); } }
            { const $t477 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 16], L0["kcount"]); if ($t477 !== undefined) { await $.mset(L0["sheet"], "cells", $t477); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 6000, 30000, 15, 30, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t478 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 17], L0["k"]); if ($t478 !== undefined) { await $.mset(L0["sheet"], "cells", $t478); } }
            { const $t479 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 18], L0["kcount"]); if ($t479 !== undefined) { await $.mset(L0["sheet"], "cells", $t479); } }
            { const $t480 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 19], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 17]))])))); if ($t480 !== undefined) { await $.mset(L0["sheet"], "cells", $t480); } }
            { const $t481 = await $.iset((await $.mv(L0["sheet"], "cells")), [33, 20], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 18]))])))); if ($t481 !== undefined) { await $.mset(L0["sheet"], "cells", $t481); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 67);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountOstatValyuta", [(await $.v(C, "son")), 30000, 40000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t482 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 3], L0["k"]); if ($t482 !== undefined) { await $.mset(L0["sheet"], "cells", $t482); } }
            { const $t483 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 4], L0["kcount"]); if ($t483 !== undefined) { await $.mset(L0["sheet"], "cells", $t483); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 30000, 40000, 0, 3, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t484 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 5], L0["k"]); if ($t484 !== undefined) { await $.mset(L0["sheet"], "cells", $t484); } }
            { const $t485 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 6], L0["kcount"]); if ($t485 !== undefined) { await $.mset(L0["sheet"], "cells", $t485); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 30000, 40000, 3, 5, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t486 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 7], L0["k"]); if ($t486 !== undefined) { await $.mset(L0["sheet"], "cells", $t486); } }
            { const $t487 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 8], L0["kcount"]); if ($t487 !== undefined) { await $.mset(L0["sheet"], "cells", $t487); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 30000, 40000, 5, 7, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t488 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 9], L0["k"]); if ($t488 !== undefined) { await $.mset(L0["sheet"], "cells", $t488); } }
            { const $t489 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 10], L0["kcount"]); if ($t489 !== undefined) { await $.mset(L0["sheet"], "cells", $t489); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 30000, 40000, 7, 9, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t490 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 11], L0["k"]); if ($t490 !== undefined) { await $.mset(L0["sheet"], "cells", $t490); } }
            { const $t491 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 12], L0["kcount"]); if ($t491 !== undefined) { await $.mset(L0["sheet"], "cells", $t491); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 30000, 40000, 9, 12, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t492 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 13], L0["k"]); if ($t492 !== undefined) { await $.mset(L0["sheet"], "cells", $t492); } }
            { const $t493 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 14], L0["kcount"]); if ($t493 !== undefined) { await $.mset(L0["sheet"], "cells", $t493); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 30000, 40000, 12, 15, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t494 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 15], L0["k"]); if ($t494 !== undefined) { await $.mset(L0["sheet"], "cells", $t494); } }
            { const $t495 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 16], L0["kcount"]); if ($t495 !== undefined) { await $.mset(L0["sheet"], "cells", $t495); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 30000, 40000, 15, 30, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t496 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 17], L0["k"]); if ($t496 !== undefined) { await $.mset(L0["sheet"], "cells", $t496); } }
            { const $t497 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 18], L0["kcount"]); if ($t497 !== undefined) { await $.mset(L0["sheet"], "cells", $t497); } }
            { const $t498 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 19], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 17]))])))); if ($t498 !== undefined) { await $.mset(L0["sheet"], "cells", $t498); } }
            { const $t499 = await $.iset((await $.mv(L0["sheet"], "cells")), [34, 20], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 18]))])))); if ($t499 !== undefined) { await $.mset(L0["sheet"], "cells", $t499); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 68);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountOstatValyuta", [(await $.v(C, "son")), 40000, 50000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t500 = await $.iset((await $.mv(L0["sheet"], "cells")), [35, 3], L0["k"]); if ($t500 !== undefined) { await $.mset(L0["sheet"], "cells", $t500); } }
            { const $t501 = await $.iset((await $.mv(L0["sheet"], "cells")), [35, 4], L0["kcount"]); if ($t501 !== undefined) { await $.mset(L0["sheet"], "cells", $t501); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 40000, 50000, 0, 3, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t502 = await $.iset((await $.mv(L0["sheet"], "cells")), [35, 5], L0["k"]); if ($t502 !== undefined) { await $.mset(L0["sheet"], "cells", $t502); } }
            { const $t503 = await $.iset((await $.mv(L0["sheet"], "cells")), [35, 6], L0["kcount"]); if ($t503 !== undefined) { await $.mset(L0["sheet"], "cells", $t503); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 40000, 50000, 3, 5, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t504 = await $.iset((await $.mv(L0["sheet"], "cells")), [35, 7], L0["k"]); if ($t504 !== undefined) { await $.mset(L0["sheet"], "cells", $t504); } }
            { const $t505 = await $.iset((await $.mv(L0["sheet"], "cells")), [35, 8], L0["kcount"]); if ($t505 !== undefined) { await $.mset(L0["sheet"], "cells", $t505); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 40000, 50000, 5, 7, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t506 = await $.iset((await $.mv(L0["sheet"], "cells")), [35, 9], L0["k"]); if ($t506 !== undefined) { await $.mset(L0["sheet"], "cells", $t506); } }
            { const $t507 = await $.iset((await $.mv(L0["sheet"], "cells")), [35, 10], L0["kcount"]); if ($t507 !== undefined) { await $.mset(L0["sheet"], "cells", $t507); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 40000, 50000, 7, 9, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t508 = await $.iset((await $.mv(L0["sheet"], "cells")), [35, 11], L0["k"]); if ($t508 !== undefined) { await $.mset(L0["sheet"], "cells", $t508); } }
            { const $t509 = await $.iset((await $.mv(L0["sheet"], "cells")), [35, 12], L0["kcount"]); if ($t509 !== undefined) { await $.mset(L0["sheet"], "cells", $t509); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 40000, 50000, 9, 12, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t510 = await $.iset((await $.mv(L0["sheet"], "cells")), [35, 13], L0["k"]); if ($t510 !== undefined) { await $.mset(L0["sheet"], "cells", $t510); } }
            { const $t511 = await $.iset((await $.mv(L0["sheet"], "cells")), [35, 14], L0["kcount"]); if ($t511 !== undefined) { await $.mset(L0["sheet"], "cells", $t511); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 40000, 50000, 12, 15, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t512 = await $.iset((await $.mv(L0["sheet"], "cells")), [35, 15], L0["k"]); if ($t512 !== undefined) { await $.mset(L0["sheet"], "cells", $t512); } }
            { const $t513 = await $.iset((await $.mv(L0["sheet"], "cells")), [35, 16], L0["kcount"]); if ($t513 !== undefined) { await $.mset(L0["sheet"], "cells", $t513); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 40000, 50000, 15, 30, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t514 = await $.iset((await $.mv(L0["sheet"], "cells")), [35, 17], L0["k"]); if ($t514 !== undefined) { await $.mset(L0["sheet"], "cells", $t514); } }
            { const $t515 = await $.iset((await $.mv(L0["sheet"], "cells")), [35, 18], L0["kcount"]); if ($t515 !== undefined) { await $.mset(L0["sheet"], "cells", $t515); } }
            { const $t516 = await $.iset((await $.mv(L0["sheet"], "cells")), [35, 19], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 17]))])))); if ($t516 !== undefined) { await $.mset(L0["sheet"], "cells", $t516); } }
            { const $t517 = await $.iset((await $.mv(L0["sheet"], "cells")), [35, 20], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 18]))])))); if ($t517 !== undefined) { await $.mset(L0["sheet"], "cells", $t517); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 69);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountOstatValyuta", [(await $.v(C, "son")), 50000, 60000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t518 = await $.iset((await $.mv(L0["sheet"], "cells")), [36, 3], L0["k"]); if ($t518 !== undefined) { await $.mset(L0["sheet"], "cells", $t518); } }
            { const $t519 = await $.iset((await $.mv(L0["sheet"], "cells")), [36, 4], L0["kcount"]); if ($t519 !== undefined) { await $.mset(L0["sheet"], "cells", $t519); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 50000, 60000, 0, 3, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t520 = await $.iset((await $.mv(L0["sheet"], "cells")), [36, 5], L0["k"]); if ($t520 !== undefined) { await $.mset(L0["sheet"], "cells", $t520); } }
            { const $t521 = await $.iset((await $.mv(L0["sheet"], "cells")), [36, 6], L0["kcount"]); if ($t521 !== undefined) { await $.mset(L0["sheet"], "cells", $t521); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 50000, 60000, 3, 5, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t522 = await $.iset((await $.mv(L0["sheet"], "cells")), [36, 7], L0["k"]); if ($t522 !== undefined) { await $.mset(L0["sheet"], "cells", $t522); } }
            { const $t523 = await $.iset((await $.mv(L0["sheet"], "cells")), [36, 8], L0["kcount"]); if ($t523 !== undefined) { await $.mset(L0["sheet"], "cells", $t523); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 50000, 60000, 5, 7, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t524 = await $.iset((await $.mv(L0["sheet"], "cells")), [36, 9], L0["k"]); if ($t524 !== undefined) { await $.mset(L0["sheet"], "cells", $t524); } }
            { const $t525 = await $.iset((await $.mv(L0["sheet"], "cells")), [36, 10], L0["kcount"]); if ($t525 !== undefined) { await $.mset(L0["sheet"], "cells", $t525); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 50000, 60000, 7, 9, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t526 = await $.iset((await $.mv(L0["sheet"], "cells")), [36, 11], L0["k"]); if ($t526 !== undefined) { await $.mset(L0["sheet"], "cells", $t526); } }
            { const $t527 = await $.iset((await $.mv(L0["sheet"], "cells")), [36, 12], L0["kcount"]); if ($t527 !== undefined) { await $.mset(L0["sheet"], "cells", $t527); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 50000, 60000, 9, 12, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t528 = await $.iset((await $.mv(L0["sheet"], "cells")), [36, 13], L0["k"]); if ($t528 !== undefined) { await $.mset(L0["sheet"], "cells", $t528); } }
            { const $t529 = await $.iset((await $.mv(L0["sheet"], "cells")), [36, 14], L0["kcount"]); if ($t529 !== undefined) { await $.mset(L0["sheet"], "cells", $t529); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 50000, 60000, 12, 15, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t530 = await $.iset((await $.mv(L0["sheet"], "cells")), [36, 15], L0["k"]); if ($t530 !== undefined) { await $.mset(L0["sheet"], "cells", $t530); } }
            { const $t531 = await $.iset((await $.mv(L0["sheet"], "cells")), [36, 16], L0["kcount"]); if ($t531 !== undefined) { await $.mset(L0["sheet"], "cells", $t531); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 50000, 60000, 15, 30, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t532 = await $.iset((await $.mv(L0["sheet"], "cells")), [36, 17], L0["k"]); if ($t532 !== undefined) { await $.mset(L0["sheet"], "cells", $t532); } }
            { const $t533 = await $.iset((await $.mv(L0["sheet"], "cells")), [36, 18], L0["kcount"]); if ($t533 !== undefined) { await $.mset(L0["sheet"], "cells", $t533); } }
            { const $t534 = await $.iset((await $.mv(L0["sheet"], "cells")), [36, 19], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 17]))])))); if ($t534 !== undefined) { await $.mset(L0["sheet"], "cells", $t534); } }
            { const $t535 = await $.iset((await $.mv(L0["sheet"], "cells")), [36, 20], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 18]))])))); if ($t535 !== undefined) { await $.mset(L0["sheet"], "cells", $t535); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 70);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountOstatValyuta", [(await $.v(C, "son")), 60000, 70000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t536 = await $.iset((await $.mv(L0["sheet"], "cells")), [37, 3], L0["k"]); if ($t536 !== undefined) { await $.mset(L0["sheet"], "cells", $t536); } }
            { const $t537 = await $.iset((await $.mv(L0["sheet"], "cells")), [37, 4], L0["kcount"]); if ($t537 !== undefined) { await $.mset(L0["sheet"], "cells", $t537); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 60000, 70000, 0, 3, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t538 = await $.iset((await $.mv(L0["sheet"], "cells")), [37, 5], L0["k"]); if ($t538 !== undefined) { await $.mset(L0["sheet"], "cells", $t538); } }
            { const $t539 = await $.iset((await $.mv(L0["sheet"], "cells")), [37, 6], L0["kcount"]); if ($t539 !== undefined) { await $.mset(L0["sheet"], "cells", $t539); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 60000, 70000, 3, 5, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t540 = await $.iset((await $.mv(L0["sheet"], "cells")), [37, 7], L0["k"]); if ($t540 !== undefined) { await $.mset(L0["sheet"], "cells", $t540); } }
            { const $t541 = await $.iset((await $.mv(L0["sheet"], "cells")), [37, 8], L0["kcount"]); if ($t541 !== undefined) { await $.mset(L0["sheet"], "cells", $t541); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 60000, 70000, 5, 7, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t542 = await $.iset((await $.mv(L0["sheet"], "cells")), [37, 9], L0["k"]); if ($t542 !== undefined) { await $.mset(L0["sheet"], "cells", $t542); } }
            { const $t543 = await $.iset((await $.mv(L0["sheet"], "cells")), [37, 10], L0["kcount"]); if ($t543 !== undefined) { await $.mset(L0["sheet"], "cells", $t543); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 60000, 70000, 7, 9, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t544 = await $.iset((await $.mv(L0["sheet"], "cells")), [37, 11], L0["k"]); if ($t544 !== undefined) { await $.mset(L0["sheet"], "cells", $t544); } }
            { const $t545 = await $.iset((await $.mv(L0["sheet"], "cells")), [37, 12], L0["kcount"]); if ($t545 !== undefined) { await $.mset(L0["sheet"], "cells", $t545); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 60000, 70000, 9, 12, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t546 = await $.iset((await $.mv(L0["sheet"], "cells")), [37, 13], L0["k"]); if ($t546 !== undefined) { await $.mset(L0["sheet"], "cells", $t546); } }
            { const $t547 = await $.iset((await $.mv(L0["sheet"], "cells")), [37, 14], L0["kcount"]); if ($t547 !== undefined) { await $.mset(L0["sheet"], "cells", $t547); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 60000, 70000, 12, 15, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t548 = await $.iset((await $.mv(L0["sheet"], "cells")), [37, 15], L0["k"]); if ($t548 !== undefined) { await $.mset(L0["sheet"], "cells", $t548); } }
            { const $t549 = await $.iset((await $.mv(L0["sheet"], "cells")), [37, 16], L0["kcount"]); if ($t549 !== undefined) { await $.mset(L0["sheet"], "cells", $t549); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 60000, 70000, 15, 30, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t550 = await $.iset((await $.mv(L0["sheet"], "cells")), [37, 17], L0["k"]); if ($t550 !== undefined) { await $.mset(L0["sheet"], "cells", $t550); } }
            { const $t551 = await $.iset((await $.mv(L0["sheet"], "cells")), [37, 18], L0["kcount"]); if ($t551 !== undefined) { await $.mset(L0["sheet"], "cells", $t551); } }
            { const $t552 = await $.iset((await $.mv(L0["sheet"], "cells")), [37, 19], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 17]))])))); if ($t552 !== undefined) { await $.mset(L0["sheet"], "cells", $t552); } }
            { const $t553 = await $.iset((await $.mv(L0["sheet"], "cells")), [37, 20], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 18]))])))); if ($t553 !== undefined) { await $.mset(L0["sheet"], "cells", $t553); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 71);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountOstatValyuta", [(await $.v(C, "son")), 70000, 100000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t554 = await $.iset((await $.mv(L0["sheet"], "cells")), [38, 3], L0["k"]); if ($t554 !== undefined) { await $.mset(L0["sheet"], "cells", $t554); } }
            { const $t555 = await $.iset((await $.mv(L0["sheet"], "cells")), [38, 4], L0["kcount"]); if ($t555 !== undefined) { await $.mset(L0["sheet"], "cells", $t555); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 70000, 100000, 0, 3, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t556 = await $.iset((await $.mv(L0["sheet"], "cells")), [38, 5], L0["k"]); if ($t556 !== undefined) { await $.mset(L0["sheet"], "cells", $t556); } }
            { const $t557 = await $.iset((await $.mv(L0["sheet"], "cells")), [38, 6], L0["kcount"]); if ($t557 !== undefined) { await $.mset(L0["sheet"], "cells", $t557); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 70000, 100000, 3, 5, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t558 = await $.iset((await $.mv(L0["sheet"], "cells")), [38, 7], L0["k"]); if ($t558 !== undefined) { await $.mset(L0["sheet"], "cells", $t558); } }
            { const $t559 = await $.iset((await $.mv(L0["sheet"], "cells")), [38, 8], L0["kcount"]); if ($t559 !== undefined) { await $.mset(L0["sheet"], "cells", $t559); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 70000, 100000, 5, 7, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t560 = await $.iset((await $.mv(L0["sheet"], "cells")), [38, 9], L0["k"]); if ($t560 !== undefined) { await $.mset(L0["sheet"], "cells", $t560); } }
            { const $t561 = await $.iset((await $.mv(L0["sheet"], "cells")), [38, 10], L0["kcount"]); if ($t561 !== undefined) { await $.mset(L0["sheet"], "cells", $t561); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 70000, 100000, 7, 9, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t562 = await $.iset((await $.mv(L0["sheet"], "cells")), [38, 11], L0["k"]); if ($t562 !== undefined) { await $.mset(L0["sheet"], "cells", $t562); } }
            { const $t563 = await $.iset((await $.mv(L0["sheet"], "cells")), [38, 12], L0["kcount"]); if ($t563 !== undefined) { await $.mset(L0["sheet"], "cells", $t563); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 70000, 100000, 9, 12, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t564 = await $.iset((await $.mv(L0["sheet"], "cells")), [38, 13], L0["k"]); if ($t564 !== undefined) { await $.mset(L0["sheet"], "cells", $t564); } }
            { const $t565 = await $.iset((await $.mv(L0["sheet"], "cells")), [38, 14], L0["kcount"]); if ($t565 !== undefined) { await $.mset(L0["sheet"], "cells", $t565); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 70000, 100000, 12, 15, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t566 = await $.iset((await $.mv(L0["sheet"], "cells")), [38, 15], L0["k"]); if ($t566 !== undefined) { await $.mset(L0["sheet"], "cells", $t566); } }
            { const $t567 = await $.iset((await $.mv(L0["sheet"], "cells")), [38, 16], L0["kcount"]); if ($t567 !== undefined) { await $.mset(L0["sheet"], "cells", $t567); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 70000, 100000, 15, 30, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t568 = await $.iset((await $.mv(L0["sheet"], "cells")), [38, 17], L0["k"]); if ($t568 !== undefined) { await $.mset(L0["sheet"], "cells", $t568); } }
            { const $t569 = await $.iset((await $.mv(L0["sheet"], "cells")), [38, 18], L0["kcount"]); if ($t569 !== undefined) { await $.mset(L0["sheet"], "cells", $t569); } }
            { const $t570 = await $.iset((await $.mv(L0["sheet"], "cells")), [38, 19], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 17]))])))); if ($t570 !== undefined) { await $.mset(L0["sheet"], "cells", $t570); } }
            { const $t571 = await $.iset((await $.mv(L0["sheet"], "cells")), [38, 20], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 18]))])))); if ($t571 !== undefined) { await $.mset(L0["sheet"], "cells", $t571); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 72);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountOstatValyuta", [(await $.v(C, "son")), 100000, 500000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t572 = await $.iset((await $.mv(L0["sheet"], "cells")), [39, 3], L0["k"]); if ($t572 !== undefined) { await $.mset(L0["sheet"], "cells", $t572); } }
            { const $t573 = await $.iset((await $.mv(L0["sheet"], "cells")), [39, 4], L0["kcount"]); if ($t573 !== undefined) { await $.mset(L0["sheet"], "cells", $t573); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 100000, 500000, 0, 3, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t574 = await $.iset((await $.mv(L0["sheet"], "cells")), [39, 5], L0["k"]); if ($t574 !== undefined) { await $.mset(L0["sheet"], "cells", $t574); } }
            { const $t575 = await $.iset((await $.mv(L0["sheet"], "cells")), [39, 6], L0["kcount"]); if ($t575 !== undefined) { await $.mset(L0["sheet"], "cells", $t575); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 100000, 500000, 3, 5, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t576 = await $.iset((await $.mv(L0["sheet"], "cells")), [39, 7], L0["k"]); if ($t576 !== undefined) { await $.mset(L0["sheet"], "cells", $t576); } }
            { const $t577 = await $.iset((await $.mv(L0["sheet"], "cells")), [39, 8], L0["kcount"]); if ($t577 !== undefined) { await $.mset(L0["sheet"], "cells", $t577); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 100000, 500000, 5, 7, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t578 = await $.iset((await $.mv(L0["sheet"], "cells")), [39, 9], L0["k"]); if ($t578 !== undefined) { await $.mset(L0["sheet"], "cells", $t578); } }
            { const $t579 = await $.iset((await $.mv(L0["sheet"], "cells")), [39, 10], L0["kcount"]); if ($t579 !== undefined) { await $.mset(L0["sheet"], "cells", $t579); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 100000, 500000, 7, 9, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t580 = await $.iset((await $.mv(L0["sheet"], "cells")), [39, 11], L0["k"]); if ($t580 !== undefined) { await $.mset(L0["sheet"], "cells", $t580); } }
            { const $t581 = await $.iset((await $.mv(L0["sheet"], "cells")), [39, 12], L0["kcount"]); if ($t581 !== undefined) { await $.mset(L0["sheet"], "cells", $t581); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 100000, 500000, 9, 12, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t582 = await $.iset((await $.mv(L0["sheet"], "cells")), [39, 13], L0["k"]); if ($t582 !== undefined) { await $.mset(L0["sheet"], "cells", $t582); } }
            { const $t583 = await $.iset((await $.mv(L0["sheet"], "cells")), [39, 14], L0["kcount"]); if ($t583 !== undefined) { await $.mset(L0["sheet"], "cells", $t583); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 100000, 500000, 12, 15, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t584 = await $.iset((await $.mv(L0["sheet"], "cells")), [39, 15], L0["k"]); if ($t584 !== undefined) { await $.mset(L0["sheet"], "cells", $t584); } }
            { const $t585 = await $.iset((await $.mv(L0["sheet"], "cells")), [39, 16], L0["kcount"]); if ($t585 !== undefined) { await $.mset(L0["sheet"], "cells", $t585); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 100000, 500000, 15, 30, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t586 = await $.iset((await $.mv(L0["sheet"], "cells")), [39, 17], L0["k"]); if ($t586 !== undefined) { await $.mset(L0["sheet"], "cells", $t586); } }
            { const $t587 = await $.iset((await $.mv(L0["sheet"], "cells")), [39, 18], L0["kcount"]); if ($t587 !== undefined) { await $.mset(L0["sheet"], "cells", $t587); } }
            { const $t588 = await $.iset((await $.mv(L0["sheet"], "cells")), [39, 19], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 17]))])))); if ($t588 !== undefined) { await $.mset(L0["sheet"], "cells", $t588); } }
            { const $t589 = await $.iset((await $.mv(L0["sheet"], "cells")), [39, 20], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 18]))])))); if ($t589 !== undefined) { await $.mset(L0["sheet"], "cells", $t589); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 73);
            L0["vcod"] = (await $.call(C, "Valyutanin_Kodu", ["AZN"]));
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountOstatValyuta", [(await $.v(C, "son")), 500000, 1000000000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t590 = await $.iset((await $.mv(L0["sheet"], "cells")), [40, 3], L0["k"]); if ($t590 !== undefined) { await $.mset(L0["sheet"], "cells", $t590); } }
            { const $t591 = await $.iset((await $.mv(L0["sheet"], "cells")), [40, 4], L0["kcount"]); if ($t591 !== undefined) { await $.mset(L0["sheet"], "cells", $t591); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 500000, 1000000000, 0, 3, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t592 = await $.iset((await $.mv(L0["sheet"], "cells")), [40, 5], L0["k"]); if ($t592 !== undefined) { await $.mset(L0["sheet"], "cells", $t592); } }
            { const $t593 = await $.iset((await $.mv(L0["sheet"], "cells")), [40, 6], L0["kcount"]); if ($t593 !== undefined) { await $.mset(L0["sheet"], "cells", $t593); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 500000, 1000000000, 3, 5, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t594 = await $.iset((await $.mv(L0["sheet"], "cells")), [40, 7], L0["k"]); if ($t594 !== undefined) { await $.mset(L0["sheet"], "cells", $t594); } }
            { const $t595 = await $.iset((await $.mv(L0["sheet"], "cells")), [40, 8], L0["kcount"]); if ($t595 !== undefined) { await $.mset(L0["sheet"], "cells", $t595); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 500000, 1000000000, 5, 7, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t596 = await $.iset((await $.mv(L0["sheet"], "cells")), [40, 9], L0["k"]); if ($t596 !== undefined) { await $.mset(L0["sheet"], "cells", $t596); } }
            { const $t597 = await $.iset((await $.mv(L0["sheet"], "cells")), [40, 10], L0["kcount"]); if ($t597 !== undefined) { await $.mset(L0["sheet"], "cells", $t597); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 500000, 1000000000, 7, 9, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t598 = await $.iset((await $.mv(L0["sheet"], "cells")), [40, 11], L0["k"]); if ($t598 !== undefined) { await $.mset(L0["sheet"], "cells", $t598); } }
            { const $t599 = await $.iset((await $.mv(L0["sheet"], "cells")), [40, 12], L0["kcount"]); if ($t599 !== undefined) { await $.mset(L0["sheet"], "cells", $t599); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 500000, 1000000000, 9, 12, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t600 = await $.iset((await $.mv(L0["sheet"], "cells")), [40, 13], L0["k"]); if ($t600 !== undefined) { await $.mset(L0["sheet"], "cells", $t600); } }
            { const $t601 = await $.iset((await $.mv(L0["sheet"], "cells")), [40, 14], L0["kcount"]); if ($t601 !== undefined) { await $.mset(L0["sheet"], "cells", $t601); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 500000, 1000000000, 12, 15, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t602 = await $.iset((await $.mv(L0["sheet"], "cells")), [40, 15], L0["k"]); if ($t602 !== undefined) { await $.mset(L0["sheet"], "cells", $t602); } }
            { const $t603 = await $.iset((await $.mv(L0["sheet"], "cells")), [40, 16], L0["kcount"]); if ($t603 !== undefined) { await $.mset(L0["sheet"], "cells", $t603); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AmountContractOstatValyuta", [(await $.v(C, "son")), 500000, 1000000000, 15, 30, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [5]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [6]));
            { const $t604 = await $.iset((await $.mv(L0["sheet"], "cells")), [40, 17], L0["k"]); if ($t604 !== undefined) { await $.mset(L0["sheet"], "cells", $t604); } }
            { const $t605 = await $.iset((await $.mv(L0["sheet"], "cells")), [40, 18], L0["kcount"]); if ($t605 !== undefined) { await $.mset(L0["sheet"], "cells", $t605); } }
            { const $t606 = await $.iset((await $.mv(L0["sheet"], "cells")), [40, 19], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 17]))])))); if ($t606 !== undefined) { await $.mset(L0["sheet"], "cells", $t606); } }
            { const $t607 = await $.iset((await $.mv(L0["sheet"], "cells")), [40, 20], $.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 18]))])))); if ($t607 !== undefined) { await $.mset(L0["sheet"], "cells", $t607); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 3]))])));
            { const $t608 = await $.iset((await $.mv(L0["sheet"], "cells")), [41, 3], L0["k"]); if ($t608 !== undefined) { await $.mset(L0["sheet"], "cells", $t608); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 4]))])));
            { const $t609 = await $.iset((await $.mv(L0["sheet"], "cells")), [41, 4], L0["k"]); if ($t609 !== undefined) { await $.mset(L0["sheet"], "cells", $t609); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 5]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 5]))])));
            { const $t610 = await $.iset((await $.mv(L0["sheet"], "cells")), [41, 5], L0["k"]); if ($t610 !== undefined) { await $.mset(L0["sheet"], "cells", $t610); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 6]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 6]))])));
            { const $t611 = await $.iset((await $.mv(L0["sheet"], "cells")), [41, 6], L0["k"]); if ($t611 !== undefined) { await $.mset(L0["sheet"], "cells", $t611); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 7]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 7]))])));
            { const $t612 = await $.iset((await $.mv(L0["sheet"], "cells")), [41, 7], L0["k"]); if ($t612 !== undefined) { await $.mset(L0["sheet"], "cells", $t612); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 8]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 8]))])));
            { const $t613 = await $.iset((await $.mv(L0["sheet"], "cells")), [41, 8], L0["k"]); if ($t613 !== undefined) { await $.mset(L0["sheet"], "cells", $t613); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 9]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 9]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 9]))])));
            { const $t614 = await $.iset((await $.mv(L0["sheet"], "cells")), [41, 9], L0["k"]); if ($t614 !== undefined) { await $.mset(L0["sheet"], "cells", $t614); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 10]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 10]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 10]))])));
            { const $t615 = await $.iset((await $.mv(L0["sheet"], "cells")), [41, 10], L0["k"]); if ($t615 !== undefined) { await $.mset(L0["sheet"], "cells", $t615); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 11]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 11]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 11]))])));
            { const $t616 = await $.iset((await $.mv(L0["sheet"], "cells")), [41, 11], L0["k"]); if ($t616 !== undefined) { await $.mset(L0["sheet"], "cells", $t616); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 12]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 12]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 12]))])));
            { const $t617 = await $.iset((await $.mv(L0["sheet"], "cells")), [41, 12], L0["k"]); if ($t617 !== undefined) { await $.mset(L0["sheet"], "cells", $t617); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 13]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 13]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 13]))])));
            { const $t618 = await $.iset((await $.mv(L0["sheet"], "cells")), [41, 13], L0["k"]); if ($t618 !== undefined) { await $.mset(L0["sheet"], "cells", $t618); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 14]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 14]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 14]))])));
            { const $t619 = await $.iset((await $.mv(L0["sheet"], "cells")), [41, 14], L0["k"]); if ($t619 !== undefined) { await $.mset(L0["sheet"], "cells", $t619); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 15]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 15]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 15]))])));
            { const $t620 = await $.iset((await $.mv(L0["sheet"], "cells")), [41, 15], L0["k"]); if ($t620 !== undefined) { await $.mset(L0["sheet"], "cells", $t620); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 16]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 16]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 16]))])));
            { const $t621 = await $.iset((await $.mv(L0["sheet"], "cells")), [41, 16], L0["k"]); if ($t621 !== undefined) { await $.mset(L0["sheet"], "cells", $t621); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 17]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 17]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 17]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 17]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 17]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 17]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 17]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 17]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 17]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 17]))])));
            { const $t622 = await $.iset((await $.mv(L0["sheet"], "cells")), [41, 17], L0["k"]); if ($t622 !== undefined) { await $.mset(L0["sheet"], "cells", $t622); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 18]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 18]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 18]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 18]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 18]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 18]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 18]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 18]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 18]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 18]))])));
            { const $t623 = await $.iset((await $.mv(L0["sheet"], "cells")), [41, 18], L0["k"]); if ($t623 !== undefined) { await $.mset(L0["sheet"], "cells", $t623); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 19]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 19]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 19]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 19]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 19]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 19]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 19]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 19]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 19]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 19]))])));
            { const $t624 = await $.iset((await $.mv(L0["sheet"], "cells")), [41, 19], L0["k"]); if ($t624 !== undefined) { await $.mset(L0["sheet"], "cells", $t624); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [31, 20]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [32, 20]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [33, 20]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [34, 20]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [35, 20]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [36, 20]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [37, 20]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [38, 20]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [39, 20]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [40, 20]))])));
            { const $t625 = await $.iset((await $.mv(L0["sheet"], "cells")), [41, 20], L0["k"]); if ($t625 !== undefined) { await $.mset(L0["sheet"], "cells", $t625); } }
          }
          if ($.truthy($.eq(L0["i"], 2))) {
            L0["v"] = (await $.mv((await $.v(C, "ExcelApplication3")), "Application"));
            await $.mcall((await $.v(C, "ExcelApplication3")), "Connect", []);
            await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))])), "Emanetler(III hisse).xls")])));
            { const $t626 = 100;
              L0["openedxlscnt"] = 1;
              let $t627 = true;
              for (;;) {
                if (!$t627) { L0["openedxlscnt"] = $.succ(L0["openedxlscnt"], 1); }
                $t627 = false;
                if (!($.ord(L0["openedxlscnt"]) <= $.ord($t626))) break;
                try {
                  L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [L0["openedxlscnt"]])), "Worksheets")), ["hesabat1"]));
                  break;
                } catch ($t628) {
                  $.rethrowControl($t628);
                  $.handled($t628);
                }
                await $.tick();
              }
            }
            L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
            await $.mcall((await $.idx((await $.mv(L0["sheets"], "Item")), ["hesabat1"])), "Activate", []);
            L0["il"] = (await $.call(C, "FormatDateTime", ["yyyy", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP1")), "DateTime"))]))]));
            { const $t629 = await $.iset((await $.mv(L0["sheet"], "cells")), [1, 2], L0["il"]); if ($t629 !== undefined) { await $.mset(L0["sheet"], "cells", $t629); } }
            await $.set(C, "Bas", (await $.call(C, "FormatDateTime", ["dd-MMM-yyyy", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP1")), "DateTime"))]))])));
            await $.set(C, "Son", (await $.call(C, "FormatDateTime", ["dd-MMM-yyyy", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP2")), "DateTime"))]))])));
            { const $t630 = await $.iset((await $.mv(L0["sheet"], "cells")), [2, 2], $.add($.add((await $.v(C, "Bas")), "_______"), (await $.v(C, "son")))); if ($t630 !== undefined) { await $.mset(L0["sheet"], "cells", $t630); } }
            await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [7, 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "Cells")), [7, 1])), "Font")), "Bold", true);
            await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "Cells")), [7, 1])), "Font")), "size", 12);
            await $.mset((await $.v(C, "Gauge1")), "Progress", 74);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AllAmountOstat", [(await $.v(C, "son")), 0.0, 1000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t631 = await $.iset((await $.mv(L0["sheet"], "cells")), [8, 3], L0["k"]); if ($t631 !== undefined) { await $.mset(L0["sheet"], "cells", $t631); } }
            { const $t632 = await $.iset((await $.mv(L0["sheet"], "cells")), [8, 4], L0["kcount"]); if ($t632 !== undefined) { await $.mset(L0["sheet"], "cells", $t632); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["ProtAmountOstat", [(await $.v(C, "son")), 0.0, 1000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t633 = await $.iset((await $.mv(L0["sheet"], "cells")), [8, 5], L0["k"]); if ($t633 !== undefined) { await $.mset(L0["sheet"], "cells", $t633); } }
            { const $t634 = await $.iset((await $.mv(L0["sheet"], "cells")), [8, 6], L0["kcount"]); if ($t634 !== undefined) { await $.mset(L0["sheet"], "cells", $t634); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["CompenAmountOstat", [(await $.v(C, "son")), 0.0, 1000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t635 = await $.iset((await $.mv(L0["sheet"], "cells")), [8, 7], L0["k"]); if ($t635 !== undefined) { await $.mset(L0["sheet"], "cells", $t635); } }
            { const $t636 = await $.iset((await $.mv(L0["sheet"], "cells")), [8, 8], L0["kcount"]); if ($t636 !== undefined) { await $.mset(L0["sheet"], "cells", $t636); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 75);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AllAmountOstat", [(await $.v(C, "son")), 1000, 30000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t637 = await $.iset((await $.mv(L0["sheet"], "cells")), [9, 3], L0["k"]); if ($t637 !== undefined) { await $.mset(L0["sheet"], "cells", $t637); } }
            { const $t638 = await $.iset((await $.mv(L0["sheet"], "cells")), [9, 4], L0["kcount"]); if ($t638 !== undefined) { await $.mset(L0["sheet"], "cells", $t638); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["ProtAmountOstat", [(await $.v(C, "son")), 1000, 30000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t639 = await $.iset((await $.mv(L0["sheet"], "cells")), [9, 5], L0["k"]); if ($t639 !== undefined) { await $.mset(L0["sheet"], "cells", $t639); } }
            { const $t640 = await $.iset((await $.mv(L0["sheet"], "cells")), [9, 6], L0["kcount"]); if ($t640 !== undefined) { await $.mset(L0["sheet"], "cells", $t640); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["CompenAmountOstat", [(await $.v(C, "son")), 1000, 30000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t641 = await $.iset((await $.mv(L0["sheet"], "cells")), [9, 7], L0["k"]); if ($t641 !== undefined) { await $.mset(L0["sheet"], "cells", $t641); } }
            { const $t642 = await $.iset((await $.mv(L0["sheet"], "cells")), [9, 8], L0["kcount"]); if ($t642 !== undefined) { await $.mset(L0["sheet"], "cells", $t642); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 76);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AllAmountOstat", [(await $.v(C, "son")), 30000, 100000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t643 = await $.iset((await $.mv(L0["sheet"], "cells")), [10, 3], L0["k"]); if ($t643 !== undefined) { await $.mset(L0["sheet"], "cells", $t643); } }
            { const $t644 = await $.iset((await $.mv(L0["sheet"], "cells")), [10, 4], L0["kcount"]); if ($t644 !== undefined) { await $.mset(L0["sheet"], "cells", $t644); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["ProtAmountOstat", [(await $.v(C, "son")), 30000, 100000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t645 = await $.iset((await $.mv(L0["sheet"], "cells")), [10, 5], L0["k"]); if ($t645 !== undefined) { await $.mset(L0["sheet"], "cells", $t645); } }
            { const $t646 = await $.iset((await $.mv(L0["sheet"], "cells")), [10, 6], L0["kcount"]); if ($t646 !== undefined) { await $.mset(L0["sheet"], "cells", $t646); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["CompenAmountOstat", [(await $.v(C, "son")), 30000, 100000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t647 = await $.iset((await $.mv(L0["sheet"], "cells")), [10, 7], L0["k"]); if ($t647 !== undefined) { await $.mset(L0["sheet"], "cells", $t647); } }
            { const $t648 = await $.iset((await $.mv(L0["sheet"], "cells")), [10, 8], L0["kcount"]); if ($t648 !== undefined) { await $.mset(L0["sheet"], "cells", $t648); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 77);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AllAmountOstat", [(await $.v(C, "son")), 100000, 150000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t649 = await $.iset((await $.mv(L0["sheet"], "cells")), [11, 3], L0["k"]); if ($t649 !== undefined) { await $.mset(L0["sheet"], "cells", $t649); } }
            { const $t650 = await $.iset((await $.mv(L0["sheet"], "cells")), [11, 4], L0["kcount"]); if ($t650 !== undefined) { await $.mset(L0["sheet"], "cells", $t650); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["ProtAmountOstat", [(await $.v(C, "son")), 100000, 150000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t651 = await $.iset((await $.mv(L0["sheet"], "cells")), [11, 5], L0["k"]); if ($t651 !== undefined) { await $.mset(L0["sheet"], "cells", $t651); } }
            { const $t652 = await $.iset((await $.mv(L0["sheet"], "cells")), [11, 6], L0["kcount"]); if ($t652 !== undefined) { await $.mset(L0["sheet"], "cells", $t652); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["CompenAmountOstat", [(await $.v(C, "son")), 100000, 150000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t653 = await $.iset((await $.mv(L0["sheet"], "cells")), [11, 7], L0["k"]); if ($t653 !== undefined) { await $.mset(L0["sheet"], "cells", $t653); } }
            { const $t654 = await $.iset((await $.mv(L0["sheet"], "cells")), [11, 8], L0["kcount"]); if ($t654 !== undefined) { await $.mset(L0["sheet"], "cells", $t654); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 78);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AllAmountOstat", [(await $.v(C, "son")), 150000, 200000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t655 = await $.iset((await $.mv(L0["sheet"], "cells")), [12, 3], L0["k"]); if ($t655 !== undefined) { await $.mset(L0["sheet"], "cells", $t655); } }
            { const $t656 = await $.iset((await $.mv(L0["sheet"], "cells")), [12, 4], L0["kcount"]); if ($t656 !== undefined) { await $.mset(L0["sheet"], "cells", $t656); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["ProtAmountOstat", [(await $.v(C, "son")), 150000, 200000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t657 = await $.iset((await $.mv(L0["sheet"], "cells")), [12, 5], L0["k"]); if ($t657 !== undefined) { await $.mset(L0["sheet"], "cells", $t657); } }
            { const $t658 = await $.iset((await $.mv(L0["sheet"], "cells")), [12, 6], L0["kcount"]); if ($t658 !== undefined) { await $.mset(L0["sheet"], "cells", $t658); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["CompenAmountOstat", [(await $.v(C, "son")), 150000, 200000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t659 = await $.iset((await $.mv(L0["sheet"], "cells")), [12, 7], L0["k"]); if ($t659 !== undefined) { await $.mset(L0["sheet"], "cells", $t659); } }
            { const $t660 = await $.iset((await $.mv(L0["sheet"], "cells")), [12, 8], L0["kcount"]); if ($t660 !== undefined) { await $.mset(L0["sheet"], "cells", $t660); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 79);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AllAmountOstat", [(await $.v(C, "son")), 200000, 250000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t661 = await $.iset((await $.mv(L0["sheet"], "cells")), [13, 3], L0["k"]); if ($t661 !== undefined) { await $.mset(L0["sheet"], "cells", $t661); } }
            { const $t662 = await $.iset((await $.mv(L0["sheet"], "cells")), [13, 4], L0["kcount"]); if ($t662 !== undefined) { await $.mset(L0["sheet"], "cells", $t662); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["ProtAmountOstat", [(await $.v(C, "son")), 200000, 250000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t663 = await $.iset((await $.mv(L0["sheet"], "cells")), [13, 5], L0["k"]); if ($t663 !== undefined) { await $.mset(L0["sheet"], "cells", $t663); } }
            { const $t664 = await $.iset((await $.mv(L0["sheet"], "cells")), [13, 6], L0["kcount"]); if ($t664 !== undefined) { await $.mset(L0["sheet"], "cells", $t664); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["CompenAmountOstat", [(await $.v(C, "son")), 200000, 250000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t665 = await $.iset((await $.mv(L0["sheet"], "cells")), [13, 7], L0["k"]); if ($t665 !== undefined) { await $.mset(L0["sheet"], "cells", $t665); } }
            { const $t666 = await $.iset((await $.mv(L0["sheet"], "cells")), [13, 8], L0["kcount"]); if ($t666 !== undefined) { await $.mset(L0["sheet"], "cells", $t666); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 80);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AllAmountOstat", [(await $.v(C, "son")), 250000, 300000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t667 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 3], L0["k"]); if ($t667 !== undefined) { await $.mset(L0["sheet"], "cells", $t667); } }
            { const $t668 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 4], L0["kcount"]); if ($t668 !== undefined) { await $.mset(L0["sheet"], "cells", $t668); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["ProtAmountOstat", [(await $.v(C, "son")), 250000, 300000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t669 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 5], L0["k"]); if ($t669 !== undefined) { await $.mset(L0["sheet"], "cells", $t669); } }
            { const $t670 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 6], L0["kcount"]); if ($t670 !== undefined) { await $.mset(L0["sheet"], "cells", $t670); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["CompenAmountOstat", [(await $.v(C, "son")), 250000, 300000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t671 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 7], L0["k"]); if ($t671 !== undefined) { await $.mset(L0["sheet"], "cells", $t671); } }
            { const $t672 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 8], L0["kcount"]); if ($t672 !== undefined) { await $.mset(L0["sheet"], "cells", $t672); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 81);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AllAmountOstat", [(await $.v(C, "son")), 300000, 500000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t673 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 3], L0["k"]); if ($t673 !== undefined) { await $.mset(L0["sheet"], "cells", $t673); } }
            { const $t674 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 4], L0["kcount"]); if ($t674 !== undefined) { await $.mset(L0["sheet"], "cells", $t674); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["ProtAmountOstat", [(await $.v(C, "son")), 300000, 500000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t675 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 5], L0["k"]); if ($t675 !== undefined) { await $.mset(L0["sheet"], "cells", $t675); } }
            { const $t676 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 6], L0["kcount"]); if ($t676 !== undefined) { await $.mset(L0["sheet"], "cells", $t676); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["CompenAmountOstat", [(await $.v(C, "son")), 300000, 500000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t677 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 7], L0["k"]); if ($t677 !== undefined) { await $.mset(L0["sheet"], "cells", $t677); } }
            { const $t678 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 8], L0["kcount"]); if ($t678 !== undefined) { await $.mset(L0["sheet"], "cells", $t678); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 82);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AllAmountOstat", [(await $.v(C, "son")), 500000, 1000000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t679 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 3], L0["k"]); if ($t679 !== undefined) { await $.mset(L0["sheet"], "cells", $t679); } }
            { const $t680 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 4], L0["kcount"]); if ($t680 !== undefined) { await $.mset(L0["sheet"], "cells", $t680); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["ProtAmountOstat", [(await $.v(C, "son")), 500000, 1000000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t681 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 5], L0["k"]); if ($t681 !== undefined) { await $.mset(L0["sheet"], "cells", $t681); } }
            { const $t682 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 6], L0["kcount"]); if ($t682 !== undefined) { await $.mset(L0["sheet"], "cells", $t682); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["CompenAmountOstat", [(await $.v(C, "son")), 500000, 1000000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t683 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 7], L0["k"]); if ($t683 !== undefined) { await $.mset(L0["sheet"], "cells", $t683); } }
            { const $t684 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 8], L0["kcount"]); if ($t684 !== undefined) { await $.mset(L0["sheet"], "cells", $t684); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 83);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["AllAmountOstat", [(await $.v(C, "son")), 1000000, 100000000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t685 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 3], L0["k"]); if ($t685 !== undefined) { await $.mset(L0["sheet"], "cells", $t685); } }
            { const $t686 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 4], L0["kcount"]); if ($t686 !== undefined) { await $.mset(L0["sheet"], "cells", $t686); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["ProtAmountOstat", [(await $.v(C, "son")), 1000000, 100000000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t687 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 5], L0["k"]); if ($t687 !== undefined) { await $.mset(L0["sheet"], "cells", $t687); } }
            { const $t688 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 6], L0["kcount"]); if ($t688 !== undefined) { await $.mset(L0["sheet"], "cells", $t688); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["CompenAmountOstat", [(await $.v(C, "son")), 1000000, 100000000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t689 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 7], L0["k"]); if ($t689 !== undefined) { await $.mset(L0["sheet"], "cells", $t689); } }
            { const $t690 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 8], L0["kcount"]); if ($t690 !== undefined) { await $.mset(L0["sheet"], "cells", $t690); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [8, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [9, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [10, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [11, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [12, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [13, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 3]))])));
            L0["kcount"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [8, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [9, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [10, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [11, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [12, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [13, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 4]))])));
            { const $t691 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 3], L0["k"]); if ($t691 !== undefined) { await $.mset(L0["sheet"], "cells", $t691); } }
            { const $t692 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 4], L0["kcount"]); if ($t692 !== undefined) { await $.mset(L0["sheet"], "cells", $t692); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [8, 5]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [9, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [10, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [11, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [12, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [13, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 5]))])));
            L0["kcount"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [8, 6]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [9, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [10, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [11, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [12, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [13, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 6]))])));
            { const $t693 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 5], L0["k"]); if ($t693 !== undefined) { await $.mset(L0["sheet"], "cells", $t693); } }
            { const $t694 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 6], L0["kcount"]); if ($t694 !== undefined) { await $.mset(L0["sheet"], "cells", $t694); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [8, 7]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [9, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [10, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [11, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [12, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [13, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 7]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 7]))])));
            L0["kcount"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [8, 8]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [9, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [10, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [11, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [12, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [13, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 8]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 8]))])));
            { const $t695 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 7], L0["k"]); if ($t695 !== undefined) { await $.mset(L0["sheet"], "cells", $t695); } }
            { const $t696 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 8], L0["kcount"]); if ($t696 !== undefined) { await $.mset(L0["sheet"], "cells", $t696); } }
          }
          if ($.truthy($.eq(L0["i"], 3))) {
            L0["v"] = (await $.mv((await $.v(C, "ExcelApplication4")), "Application"));
            await $.mcall((await $.v(C, "ExcelApplication4")), "Connect", []);
            await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))])), "Emanetler(IV hisse).xls")])));
            { const $t697 = 100;
              L0["openedxlscnt"] = 1;
              let $t698 = true;
              for (;;) {
                if (!$t698) { L0["openedxlscnt"] = $.succ(L0["openedxlscnt"], 1); }
                $t698 = false;
                if (!($.ord(L0["openedxlscnt"]) <= $.ord($t697))) break;
                try {
                  L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [L0["openedxlscnt"]])), "Worksheets")), ["HesabatQorunan"]));
                  break;
                } catch ($t699) {
                  $.rethrowControl($t699);
                  $.handled($t699);
                }
                await $.tick();
              }
            }
            L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
            await $.mcall((await $.idx((await $.mv(L0["sheets"], "Item")), ["HesabatQorunan"])), "Activate", []);
            L0["il"] = (await $.call(C, "FormatDateTime", ["yyyy", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP1")), "DateTime"))]))]));
            { const $t700 = await $.iset((await $.mv(L0["sheet"], "cells")), [1, 2], L0["il"]); if ($t700 !== undefined) { await $.mset(L0["sheet"], "cells", $t700); } }
            await $.set(C, "Bas", (await $.call(C, "FormatDateTime", ["dd-MMM-yyyy", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP1")), "DateTime"))]))])));
            await $.set(C, "Son", (await $.call(C, "FormatDateTime", ["dd-MMM-yyyy", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP2")), "DateTime"))]))])));
            { const $t701 = await $.iset((await $.mv(L0["sheet"], "cells")), [2, 2], $.add($.add((await $.v(C, "Bas")), "_______"), (await $.v(C, "son")))); if ($t701 !== undefined) { await $.mset(L0["sheet"], "cells", $t701); } }
            await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "cells")), [5, 1])), "Font")), "Name", "Tahoma");
            await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "Cells")), [5, 1])), "Font")), "Bold", true);
            await $.mset((await $.mv((await $.idx((await $.mv(L0["sheet"], "Cells")), [5, 1])), "Font")), "size", 12);
            await $.mset((await $.v(C, "Gauge1")), "Progress", 84);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstat", [(await $.v(C, "son")), 0.0, 30000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t702 = await $.iset((await $.mv(L0["sheet"], "cells")), [7, 3], L0["k"]); if ($t702 !== undefined) { await $.mset(L0["sheet"], "cells", $t702); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstatValyuta", [(await $.v(C, "son")), 0.0, 30000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t703 = await $.iset((await $.mv(L0["sheet"], "cells")), [7, 4], L0["k"]); if ($t703 !== undefined) { await $.mset(L0["sheet"], "cells", $t703); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["ProtAmountOstat", [(await $.v(C, "son")), 0.0, 30000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t704 = await $.iset((await $.mv(L0["sheet"], "cells")), [7, 5], $.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [7, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [7, 4]))])))); if ($t704 !== undefined) { await $.mset(L0["sheet"], "cells", $t704); } }
            { const $t705 = await $.iset((await $.mv(L0["sheet"], "cells")), [7, 6], L0["kcount"]); if ($t705 !== undefined) { await $.mset(L0["sheet"], "cells", $t705); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 85);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstat", [(await $.v(C, "son")), 30000, 40000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t706 = await $.iset((await $.mv(L0["sheet"], "cells")), [8, 3], L0["k"]); if ($t706 !== undefined) { await $.mset(L0["sheet"], "cells", $t706); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstatValyuta", [(await $.v(C, "son")), 30000, 40000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t707 = await $.iset((await $.mv(L0["sheet"], "cells")), [8, 4], L0["k"]); if ($t707 !== undefined) { await $.mset(L0["sheet"], "cells", $t707); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["ProtAmountOstat", [(await $.v(C, "son")), 30000, 40000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t708 = await $.iset((await $.mv(L0["sheet"], "cells")), [8, 5], $.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [8, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [8, 4]))])))); if ($t708 !== undefined) { await $.mset(L0["sheet"], "cells", $t708); } }
            { const $t709 = await $.iset((await $.mv(L0["sheet"], "cells")), [8, 6], L0["kcount"]); if ($t709 !== undefined) { await $.mset(L0["sheet"], "cells", $t709); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 86);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstat", [(await $.v(C, "son")), 40000, 50000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t710 = await $.iset((await $.mv(L0["sheet"], "cells")), [9, 3], L0["k"]); if ($t710 !== undefined) { await $.mset(L0["sheet"], "cells", $t710); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstatValyuta", [(await $.v(C, "son")), 40000, 50000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t711 = await $.iset((await $.mv(L0["sheet"], "cells")), [9, 4], L0["k"]); if ($t711 !== undefined) { await $.mset(L0["sheet"], "cells", $t711); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["ProtAmountOstat", [(await $.v(C, "son")), 40000, 50000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t712 = await $.iset((await $.mv(L0["sheet"], "cells")), [9, 5], $.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [9, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [9, 4]))])))); if ($t712 !== undefined) { await $.mset(L0["sheet"], "cells", $t712); } }
            { const $t713 = await $.iset((await $.mv(L0["sheet"], "cells")), [9, 6], L0["kcount"]); if ($t713 !== undefined) { await $.mset(L0["sheet"], "cells", $t713); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 87);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstat", [(await $.v(C, "son")), 50000, 60000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t714 = await $.iset((await $.mv(L0["sheet"], "cells")), [10, 3], L0["k"]); if ($t714 !== undefined) { await $.mset(L0["sheet"], "cells", $t714); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstatValyuta", [(await $.v(C, "son")), 50000, 60000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t715 = await $.iset((await $.mv(L0["sheet"], "cells")), [10, 4], L0["k"]); if ($t715 !== undefined) { await $.mset(L0["sheet"], "cells", $t715); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["ProtAmountOstat", [(await $.v(C, "son")), 50000, 60000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t716 = await $.iset((await $.mv(L0["sheet"], "cells")), [10, 5], $.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [10, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [10, 4]))])))); if ($t716 !== undefined) { await $.mset(L0["sheet"], "cells", $t716); } }
            { const $t717 = await $.iset((await $.mv(L0["sheet"], "cells")), [10, 6], L0["kcount"]); if ($t717 !== undefined) { await $.mset(L0["sheet"], "cells", $t717); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 88);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstat", [(await $.v(C, "son")), 60000, 70000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t718 = await $.iset((await $.mv(L0["sheet"], "cells")), [11, 3], L0["k"]); if ($t718 !== undefined) { await $.mset(L0["sheet"], "cells", $t718); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstatValyuta", [(await $.v(C, "son")), 60000, 70000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t719 = await $.iset((await $.mv(L0["sheet"], "cells")), [11, 4], L0["k"]); if ($t719 !== undefined) { await $.mset(L0["sheet"], "cells", $t719); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["ProtAmountOstat", [(await $.v(C, "son")), 60000, 70000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t720 = await $.iset((await $.mv(L0["sheet"], "cells")), [11, 5], $.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [11, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [11, 4]))])))); if ($t720 !== undefined) { await $.mset(L0["sheet"], "cells", $t720); } }
            { const $t721 = await $.iset((await $.mv(L0["sheet"], "cells")), [11, 6], L0["kcount"]); if ($t721 !== undefined) { await $.mset(L0["sheet"], "cells", $t721); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 89);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstat", [(await $.v(C, "son")), 70000, 80000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t722 = await $.iset((await $.mv(L0["sheet"], "cells")), [12, 3], L0["k"]); if ($t722 !== undefined) { await $.mset(L0["sheet"], "cells", $t722); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstatValyuta", [(await $.v(C, "son")), 70000, 80000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t723 = await $.iset((await $.mv(L0["sheet"], "cells")), [12, 4], L0["k"]); if ($t723 !== undefined) { await $.mset(L0["sheet"], "cells", $t723); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["ProtAmountOstat", [(await $.v(C, "son")), 70000, 80000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t724 = await $.iset((await $.mv(L0["sheet"], "cells")), [12, 5], $.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [12, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [12, 4]))])))); if ($t724 !== undefined) { await $.mset(L0["sheet"], "cells", $t724); } }
            { const $t725 = await $.iset((await $.mv(L0["sheet"], "cells")), [12, 6], L0["kcount"]); if ($t725 !== undefined) { await $.mset(L0["sheet"], "cells", $t725); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 90);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstat", [(await $.v(C, "son")), 80000, 90000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t726 = await $.iset((await $.mv(L0["sheet"], "cells")), [13, 3], L0["k"]); if ($t726 !== undefined) { await $.mset(L0["sheet"], "cells", $t726); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstatValyuta", [(await $.v(C, "son")), 80000, 90000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t727 = await $.iset((await $.mv(L0["sheet"], "cells")), [13, 4], L0["k"]); if ($t727 !== undefined) { await $.mset(L0["sheet"], "cells", $t727); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["ProtAmountOstat", [(await $.v(C, "son")), 80000, 90000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t728 = await $.iset((await $.mv(L0["sheet"], "cells")), [13, 5], $.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [13, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [13, 4]))])))); if ($t728 !== undefined) { await $.mset(L0["sheet"], "cells", $t728); } }
            { const $t729 = await $.iset((await $.mv(L0["sheet"], "cells")), [13, 6], L0["kcount"]); if ($t729 !== undefined) { await $.mset(L0["sheet"], "cells", $t729); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 91);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstat", [(await $.v(C, "son")), 90000, 100000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t730 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 3], L0["k"]); if ($t730 !== undefined) { await $.mset(L0["sheet"], "cells", $t730); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstatValyuta", [(await $.v(C, "son")), 90000, 100000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t731 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 4], L0["k"]); if ($t731 !== undefined) { await $.mset(L0["sheet"], "cells", $t731); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["ProtAmountOstat", [(await $.v(C, "son")), 90000, 100000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t732 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 5], $.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 4]))])))); if ($t732 !== undefined) { await $.mset(L0["sheet"], "cells", $t732); } }
            { const $t733 = await $.iset((await $.mv(L0["sheet"], "cells")), [14, 6], L0["kcount"]); if ($t733 !== undefined) { await $.mset(L0["sheet"], "cells", $t733); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 92);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstat", [(await $.v(C, "son")), 100000, 200000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t734 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 3], L0["k"]); if ($t734 !== undefined) { await $.mset(L0["sheet"], "cells", $t734); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstatValyuta", [(await $.v(C, "son")), 100000, 200000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t735 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 4], L0["k"]); if ($t735 !== undefined) { await $.mset(L0["sheet"], "cells", $t735); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["ProtAmountOstat", [(await $.v(C, "son")), 100000, 200000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t736 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 5], $.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 4]))])))); if ($t736 !== undefined) { await $.mset(L0["sheet"], "cells", $t736); } }
            { const $t737 = await $.iset((await $.mv(L0["sheet"], "cells")), [15, 6], L0["kcount"]); if ($t737 !== undefined) { await $.mset(L0["sheet"], "cells", $t737); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 93);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstat", [(await $.v(C, "son")), 200000, 300000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t738 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 3], L0["k"]); if ($t738 !== undefined) { await $.mset(L0["sheet"], "cells", $t738); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstatValyuta", [(await $.v(C, "son")), 200000, 300000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t739 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 4], L0["k"]); if ($t739 !== undefined) { await $.mset(L0["sheet"], "cells", $t739); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["ProtAmountOstat", [(await $.v(C, "son")), 200000, 300000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t740 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 5], $.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 4]))])))); if ($t740 !== undefined) { await $.mset(L0["sheet"], "cells", $t740); } }
            { const $t741 = await $.iset((await $.mv(L0["sheet"], "cells")), [16, 6], L0["kcount"]); if ($t741 !== undefined) { await $.mset(L0["sheet"], "cells", $t741); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 94);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstat", [(await $.v(C, "son")), 300000, 400000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t742 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 3], L0["k"]); if ($t742 !== undefined) { await $.mset(L0["sheet"], "cells", $t742); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstatValyuta", [(await $.v(C, "son")), 300000, 400000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t743 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 4], L0["k"]); if ($t743 !== undefined) { await $.mset(L0["sheet"], "cells", $t743); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["ProtAmountOstat", [(await $.v(C, "son")), 300000, 400000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t744 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 5], $.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 4]))])))); if ($t744 !== undefined) { await $.mset(L0["sheet"], "cells", $t744); } }
            { const $t745 = await $.iset((await $.mv(L0["sheet"], "cells")), [17, 6], L0["kcount"]); if ($t745 !== undefined) { await $.mset(L0["sheet"], "cells", $t745); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 95);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstat", [(await $.v(C, "son")), 400000, 500000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t746 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 3], L0["k"]); if ($t746 !== undefined) { await $.mset(L0["sheet"], "cells", $t746); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstatValyuta", [(await $.v(C, "son")), 400000, 500000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t747 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 4], L0["k"]); if ($t747 !== undefined) { await $.mset(L0["sheet"], "cells", $t747); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["ProtAmountOstat", [(await $.v(C, "son")), 400000, 500000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t748 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 5], $.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 4]))])))); if ($t748 !== undefined) { await $.mset(L0["sheet"], "cells", $t748); } }
            { const $t749 = await $.iset((await $.mv(L0["sheet"], "cells")), [18, 6], L0["kcount"]); if ($t749 !== undefined) { await $.mset(L0["sheet"], "cells", $t749); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 96);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = 0;
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstat", [(await $.v(C, "son")), 500000, 100000000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t750 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 3], L0["k"]); if ($t750 !== undefined) { await $.mset(L0["sheet"], "cells", $t750); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["PAmountOstatValyuta", [(await $.v(C, "son")), 500000, 100000000, L0["p"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            { const $t751 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 4], L0["k"]); if ($t751 !== undefined) { await $.mset(L0["sheet"], "cells", $t751); } }
            await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["ProtAmountOstat", [(await $.v(C, "son")), 500000, 100000000, L0["p"], L0["pcount"]]])));
            L0["k"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [3]));
            L0["kcount"] = (await $.mcall((await $.v(C, "OraclePackage1")), "GetParameter", [4]));
            { const $t752 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 5], $.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 4]))])))); if ($t752 !== undefined) { await $.mset(L0["sheet"], "cells", $t752); } }
            { const $t753 = await $.iset((await $.mv(L0["sheet"], "cells")), [19, 6], L0["kcount"]); if ($t753 !== undefined) { await $.mset(L0["sheet"], "cells", $t753); } }
            await $.mset((await $.v(C, "Gauge1")), "Progress", 97);
            await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [7, 3]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [8, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [9, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [10, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [11, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [12, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [13, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 3]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 3]))])));
            { const $t754 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 3], L0["k"]); if ($t754 !== undefined) { await $.mset(L0["sheet"], "cells", $t754); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [7, 4]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [8, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [9, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [10, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [11, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [12, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [13, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 4]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 4]))])));
            { const $t755 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 4], L0["k"]); if ($t755 !== undefined) { await $.mset(L0["sheet"], "cells", $t755); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [7, 5]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [8, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [9, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [10, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [11, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [12, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [13, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 5]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 5]))])));
            { const $t756 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 5], L0["k"]); if ($t756 !== undefined) { await $.mset(L0["sheet"], "cells", $t756); } }
            L0["k"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [7, 6]))])), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [8, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [9, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [10, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [11, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [12, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [13, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [14, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [15, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [16, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [17, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [18, 6]))]))), (await $.call(C, "StrToInt", [(await $.idx((await $.mv(L0["sheet"], "cells")), [19, 6]))])));
            { const $t757 = await $.iset((await $.mv(L0["sheet"], "cells")), [20, 6], L0["k"]); if ($t757 !== undefined) { await $.mset(L0["sheet"], "cells", $t757); } }
          }
        }
        await $.tick();
      }
    }
    await $.mset((await $.v(C, "Gauge1")), "Progress", 100);
    await $.mset((await $.v(C, "Gauge1")), "Progress", 0);
    L0["edate"] = (await $.call(C, "Time", []));
    await $.stmt((await $.call(C, "ShowMessage", [$.add($.add($.add($.add("Hesabatın bitməsi.", "\r\n"), (await $.call(C, "TimeToStr", [L0["bdate"]]))), "-"), (await $.call(C, "TimeToStr", [L0["edate"]])))])));
    { const $t758 = await $.iset((await $.mv((await $.v(C, "ExcelApplication1")), "Visible")), [0], true); if ($t758 !== undefined) { await $.mset((await $.v(C, "ExcelApplication1")), "Visible", $t758); } }
    await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
    { const $t759 = await $.iset((await $.mv((await $.v(C, "ExcelApplication2")), "Visible")), [0], true); if ($t759 !== undefined) { await $.mset((await $.v(C, "ExcelApplication2")), "Visible", $t759); } }
    await $.mcall((await $.v(C, "ExcelApplication2")), "Disconnect", []);
    { const $t760 = await $.iset((await $.mv((await $.v(C, "ExcelApplication3")), "Visible")), [0], true); if ($t760 !== undefined) { await $.mset((await $.v(C, "ExcelApplication3")), "Visible", $t760); } }
    await $.mcall((await $.v(C, "ExcelApplication3")), "Disconnect", []);
    { const $t761 = await $.iset((await $.mv((await $.v(C, "ExcelApplication4")), "Visible")), [0], true); if ($t761 !== undefined) { await $.mset((await $.v(C, "ExcelApplication4")), "Visible", $t761); } }
    await $.mcall((await $.v(C, "ExcelApplication4")), "Disconnect", []);
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Son tarix Baslangic tarixden kicik ola bilmez"])));
    return L0.result;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "DTP1Change", async function DTP1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Bas", (await $.call(C, "FormatDateTime", ["dd-MMM-yyyy", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP1")), "DateTime"))]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "DBViewComboBox3Change", async function DBViewComboBox3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Text", (await $.mv((await $.v(C, "DBViewComboBox3")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "Edit3KeyPress", async function Edit3KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), 8))))) {
    if ($.truthy((await $.or_(((await $.and_(($.gt((await $.call(C, "Length", [(await $.mv((L0["sender"]), "Text"))])), 4)), async () => ($.eq((await $.mv((L0["sender"]), "SelLength")), 0))))), async () => ($.not(($.in_((await L0["key"].get()), [...$.range("0","9")])))))))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TEmanet", "Edit3Enter", async function Edit3Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Edit3")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "TabSheet3Show", async function TabSheet3Show(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "Setfilter", ["2"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "TabSheet4Show", async function TabSheet4Show(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "Setfilter", ["4"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "DBViewComboBox4Change", async function DBViewComboBox4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Text", (await $.mv((await $.v(C, "DBViewComboBox4")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "Edit4Enter", async function Edit4Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Edit4")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "Edit4KeyPress", async function Edit4KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), 8))))) {
    if ($.truthy((await $.or_(((await $.and_(($.gt((await $.call(C, "Length", [(await $.mv((L0["sender"]), "Text"))])), 4)), async () => ($.eq((await $.mv((L0["sender"]), "SelLength")), 0))))), async () => ($.not(($.in_((await L0["key"].get()), [...$.range("0","9")])))))))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TEmanet", "RadioButton1Click", async function RadioButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "F", 1);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "RadioButton2Click", async function RadioButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "F", 2);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "BitBtn6Click", async function BitBtn6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit3")), "text")), ""))) {
    await $.set(C, "Text", (await $.mv((await $.v(C, "Edit3")), "Text")));
  }
  await $.stmt($.call(C, "Insert_Umumi_Emanet", []));
  await $.mcall((await $.v(C, "Edit3")), "clear", []);
  await $.mset((await $.v(C, "DBViewComboBox3")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "BitBtn7Click", async function BitBtn7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "delete_emanet", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TEmanet", "Valyutanin_Kodu", async function Valyutanin_Kodu(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"valyutanin_adi": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["valyutanin_adi"]);
  await $.mcall((await $.v(C, "OracleDataSet4")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "OracleDataSet4")), "SetVariable", ["Val_n", L0["valyutanin_adi"]])));
  await $.mcall((await $.v(C, "OracleDataSet4")), "Open", []);
  L0.result = (await $.mv((await $.mcall((await $.v(C, "OracleDataSet4")), "Fieldbyname", ["VALUTE"])), "AsInteger"));
  return L0.result;
}, {"params": ["valyutanin_adi"], "kind": "function", "ptypes": ["String"]});
  U.method("TEmanet", "Hesabin_tipi", async function Hesabin_tipi(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"num": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["num"]);
  await $.mcall((await $.v(C, "OracleDataSet5")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "OracleDataSet5")), "SetVariable", ["V_ID", L0["num"]])));
  await $.mcall((await $.v(C, "OracleDataSet5")), "Open", []);
  L0.result = (await $.mv((await $.mcall((await $.v(C, "OracleDataSet5")), "Fieldbyname", ["SIMVOL"])), "AsString"));
  return L0.result;
}, {"params": ["Num"], "kind": "function", "ptypes": ["integer"]});
  U.method("TEmanet", "DTP2Change", async function DTP2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Son", (await $.call(C, "FormatDateTime", ["dd-MMM-yyyy", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP2")), "DateTime"))]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
