// Generated from RateManagementFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("RateManagementFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "RateManagement_TLB", "StdVcl", "StdCtrls", "DBCtrls", "ExtCtrls", "Grids", "DBGrids", "Db", "OracleData", "ActnList", "SBPlgAx50_TLB", "ImgList", "Mask", "Oracle", "IdBaseComponent", "IdComponent", "IdTCPConnection", "ComCtrls", "Buttons", "ComObj", "ComServ", "sboapiDataModuleImpl", "SBSystem", "TemporaryTransactionCommitFormImpl", "RateManagementRecalculate", "SBTranslateProc", "StrUtils", "SBSessionMgr"]);
  const C = [U];
  U.defClass("EOperationNotPermited", "Exception", {}, {});
  U.defClass("TRateManagementForm", "TActiveForm", {"ratesgb": {"name": "RatesGB", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "ratesdataset": {"name": "RatesDataSet", "type": "TOracleDataSet"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "refreshaction": {"name": "RefreshAction", "type": "TAction"}, "commitnewrates": {"name": "CommitNewRates", "type": "TAction"}, "changerates": {"name": "ChangeRates", "type": "TAction"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "commitbutton": {"name": "CommitButton", "type": "TButton"}, "revertbutton": {"name": "RevertButton", "type": "TButton"}, "revertaction": {"name": "RevertAction", "type": "TAction"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "recalculate": {"name": "Recalculate", "type": "TAction"}, "sbratemanagement": {"name": "SBRateManagement", "type": "TOraclePackage"}, "ratesdatasetcurrencyid": {"name": "RatesDataSetCURRENCYID", "type": "TIntegerField"}, "ratesdatasetostat": {"name": "RatesDataSetOSTAT", "type": "TFloatField"}, "ratesdatasetname": {"name": "RatesDataSetNAME", "type": "TWideStringField"}, "ratesdatasetdat": {"name": "RatesDataSetDAT", "type": "TDateTimeField"}, "ratesdatasetbuy_rate": {"name": "RatesDataSetBUY_RATE", "type": "TFloatField"}, "ratesdatasetsell_rate": {"name": "RatesDataSetSELL_RATE", "type": "TFloatField"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "oracledataset1val_cod": {"name": "OracleDataSet1VAL_COD", "type": "TWideStringField"}, "oracledataset1val_name": {"name": "OracleDataSet1VAL_NAME", "type": "TWideStringField"}, "oracledataset1ostat": {"name": "OracleDataSet1OSTAT", "type": "TFloatField"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "ratesdatasetval_name": {"name": "RatesDataSetVAL_NAME", "type": "TWideStringField"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "oraclequery1": {"name": "OracleQuery1", "type": "TOracleQuery"}, "button1": {"name": "Button1", "type": "TButton"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "dsoperkurs": {"name": "dsoperkurs", "type": "TOracleDataSet"}, "dsoperkursval_name": {"name": "dsoperkursVAL_NAME", "type": "TWideStringField"}, "dsoperkursostat": {"name": "dsoperkursOSTAT", "type": "TFloatField"}, "dsoperkursdat": {"name": "dsoperkursDAT", "type": "TDateTimeField"}, "dsroperkurs": {"name": "dsroperkurs", "type": "TDataSource"}, "sysdat": {"name": "sysdat", "type": "TOracleDataSet"}, "sysdattek_dat": {"name": "sysdatTEK_DAT", "type": "TDateTimeField"}, "fsbsys": {"name": "Fsbsys", "type": "TOraclePackage"}, "dsoperkurssell_rate": {"name": "dsoperkursSELL_RATE", "type": "TFloatField"}, "dsoperkursbuy_rate": {"name": "dsoperkursBUY_RATE", "type": "TFloatField"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "dbnavigator2": {"name": "DBNavigator2", "type": "TDBNavigator"}, "button3": {"name": "Button3", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "button6": {"name": "Button6", "type": "TButton"}, "exchmgr": {"name": "ExchMgr", "type": "TOraclePackage"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "datasource3": {"name": "DataSource3", "type": "TDataSource"}, "button5": {"name": "Button5", "type": "TButton"}, "timer1": {"name": "Timer1", "type": "TTimer"}, "oracledataset4": {"name": "OracleDataSet4", "type": "TOracleDataSet"}, "oracledataset4operinsert": {"name": "OracleDataSet4OPERINSERT", "type": "TFloatField"}, "oracledataset4operupdate": {"name": "OracleDataSet4OPERUPDATE", "type": "TFloatField"}, "oracledataset4operdelete": {"name": "OracleDataSet4OPERDELETE", "type": "TFloatField"}, "oracledataset5": {"name": "OracleDataSet5", "type": "TOracleDataSet"}, "oracledataset5sid": {"name": "OracleDataSet5SID", "type": "TFloatField"}, "oracledataset5serial": {"name": "OracleDataSet5SERIAL", "type": "TFloatField"}, "oracledataset5audsid": {"name": "OracleDataSet5AUDSID", "type": "TFloatField"}, "oracledataset5user": {"name": "OracleDataSet5USER", "type": "TFloatField"}, "oracledataset5username": {"name": "OracleDataSet5USERNAME", "type": "TWideStringField"}, "oracledataset5status": {"name": "OracleDataSet5STATUS", "type": "TWideStringField"}, "oracledataset5osuser": {"name": "OracleDataSet5OSUSER", "type": "TWideStringField"}, "oracledataset5process": {"name": "OracleDataSet5PROCESS", "type": "TWideStringField"}, "oracledataset5machine": {"name": "OracleDataSet5MACHINE", "type": "TWideStringField"}, "oracledataset5terminal": {"name": "OracleDataSet5TERMINAL", "type": "TWideStringField"}, "oracledataset5program": {"name": "OracleDataSet5PROGRAM", "type": "TWideStringField"}, "oracledataset5logon_time": {"name": "OracleDataSet5LOGON_TIME", "type": "TDateTimeField"}, "oracledataset5iscurrentuser": {"name": "OracleDataSet5ISCURRENTUSER", "type": "TFloatField"}, "sba_aca": {"name": "SBA_ACA", "type": "TOraclePackage"}, "ratesdatasetsell_rate_cashless": {"name": "RatesDataSetSELL_RATE_CASHLESS", "type": "TFloatField"}, "ratesdatasetbuy_rate_cashless": {"name": "RatesDataSetBUY_RATE_CASHLESS", "type": "TFloatField"}, "dsoperkurssell_rate_cashless": {"name": "dsoperkursSELL_RATE_CASHLESS", "type": "TFloatField"}, "dsoperkursbuy_rate_cashless": {"name": "dsoperkursBUY_RATE_CASHLESS", "type": "TFloatField"}, "fevents": {"name": "FEvents", "type": "IRateManagementFormEvents"}, "fmodified": {"name": "FModified", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("RatemangForm", null, "TRateManagementForm");
    U.var_("URL", '', "String");
    U.var_("trdelete", false, "boolean");
    U.var_("trupdate", false, "boolean");
    U.var_("trinsert", false, "boolean");
  });
  U.method("TRateManagementForm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TRateManagementForm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TRateManagementForm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TRateManagementForm", "Initialize", null, arguments);
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
  U.method("TRateManagementForm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRateManagementForm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRateManagementForm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRateManagementForm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRateManagementForm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRateManagementForm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRateManagementForm", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRateManagementForm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRateManagementForm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRateManagementForm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRateManagementForm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRateManagementForm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRateManagementForm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRateManagementForm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRateManagementForm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRateManagementForm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRateManagementForm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRateManagementForm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRateManagementForm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TRateManagementForm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRateManagementForm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRateManagementForm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRateManagementForm", "DateTimePicker1Change", async function DateTimePicker1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "dsoperkurs")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "dsoperkurs")), "SetVariable", ["PDATE", (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))])));
  await $.mcall((await $.v(C, "dsoperkurs")), "Open", []);
  await $.mcall((await $.v(C, "DBGrid3")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRateManagementForm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRateManagementForm", "DBNavigator2Click", async function DBNavigator2Click(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "button"]);
  return L0.result;
}, {"params": ["Sender", "Button"], "kind": "procedure", "ptypes": ["TObject", "TNavigateBtn"]});
  U.method("TRateManagementForm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRateManagementForm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRateManagementForm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TRateManagementForm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRateManagementForm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TRateManagementForm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TRateManagementForm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TRateManagementForm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TRateManagementForm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TRateManagementForm", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TRateManagementForm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TRateManagementForm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TRateManagementForm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TRateManagementForm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TRateManagementForm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TRateManagementForm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TRateManagementForm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TRateManagementForm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TRateManagementForm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TRateManagementForm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TRateManagementForm", "Timer1Timer", async function Timer1Timer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRateManagementForm", "RatesDataSetBeforeDelete", async function RatesDataSetBeforeDelete(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  throw $.raise((await $.mcall((await $.v(C, "EOperationNotPermited")), "Create", ["Sorry, you can not delete a currency"])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TRateManagementForm", "RatesDataSetBeforeInsert", async function RatesDataSetBeforeInsert(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  throw $.raise((await $.mcall((await $.v(C, "EOperationNotPermited")), "Create", ["Sorry, you can not insert a currency"])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TRateManagementForm", "RefreshActionExecute", async function RefreshActionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "Sb_IsDayOpened")))) {
    await $.mset((await $.v(C, "CommitButton")), "Action", (await $.v(C, "CommitNewRates")));
  } else {
    await $.mset((await $.v(C, "CommitButton")), "Action", (await $.v(C, "ChangeRates")));
  }
  await $.set(C, "FModified", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("Parser", async function Parser(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"buffer": $.copyArg(p0), "start": $.copyArg(p1), "finish": $.copyArg(p2), result: '', "posstart": 0, "posfinish": 0};
  await $.fixArgs(L0, ["buffer", "start", "finish"]);
  L0["posstart"] = $.add((await $.call(C, "Pos", [L0["start"], L0["buffer"]])), (await $.call(C, "Length", [L0["start"]])));
  L0["posfinish"] = (await $.call(C, "Posex", [L0["finish"], L0["buffer"], L0["posstart"]]));
  L0["result"] = (await $.call(C, "Copy", [L0["buffer"], L0["posstart"], $.sub(L0["posfinish"], L0["posstart"])]));
  return L0.result;
}, {"params": ["Buffer", "Start", "Finish"], "kind": "function", "ptypes": ["String", "String", "String"]});
  U.method("TRateManagementForm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "sql": '', "s": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "trdelete", false);
  await $.set(C, "trupdate", false);
  await $.set(C, "trinsert", false);
  await $.set(C, "RatemangForm", Self);
  await $.mcall((await $.v(C, "RatesDataSet")), "Open", []);
  await $.mcall((await $.v(C, "RefreshAction")), "Execute", []);
  await $.mcall((await $.v(C, "dsoperkurs")), "Open", []);
  await $.mcall((await $.v(C, "OracleDataSet4")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRateManagementForm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "sql": '', "s": ''};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRateManagementForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Panel5")), "Visible", $.not((await $.mv((await $.v(C, "Panel5")), "Visible"))));
  await $.mcall((await $.v(C, "sysdat")), "Open", []);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.v(C, "sysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  await $.mcall((await $.v(C, "dsoperkurs")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "dsoperkurs")), "SetVariable", ["PDATE", (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))])));
  await $.mcall((await $.v(C, "dsoperkurs")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRateManagementForm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "Fsbsys"));
    await $.stmt((await $.wcall([$t1], "CallProcedure", ["add_future_rates", [(await $.mv((await $.wv([$t1], "DateTimePicker1", C, false)), "DateTime"))]], C)));
  }
  await $.mcall((await $.v(C, "dsoperkurs")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "dsoperkurs")), "SetVariable", ["PDATE", (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))])));
  await $.mcall((await $.v(C, "dsoperkurs")), "Open", []);
  await $.mcall((await $.v(C, "dsoperkurs")), "RefreshRecord", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRateManagementForm", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "buttonselected": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["buttonselected"] = (await $.call(C, "MessageDlg", ["Bu tarixə olan məzənnələr silinsinmi?", (await $.v(C, "mtError")), (await $.v(C, "mbOKCancel")), 0]));
  if ($.truthy($.eq(L0["buttonselected"], (await $.v(C, "mrOK"))))) {
    {
      const $t2 = (await $.v(C, "Fsbsys"));
      await $.stmt((await $.wcall([$t2], "CallProcedure", ["del_future_rates", [(await $.mv((await $.wv([$t2], "DateTimePicker1", C, false)), "DateTime"))]], C)));
    }
  }
  await $.mcall((await $.v(C, "dsoperkurs")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "dsoperkurs")), "SetVariable", ["PDATE", (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))])));
  await $.mcall((await $.v(C, "dsoperkurs")), "Open", []);
  await $.mcall((await $.v(C, "dsoperkurs")), "RefreshRecord", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRateManagementForm", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "f": 0, "dat": 0, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBA_ACA")), "CallProcedure", ["checkadvancedobjectaccess", ["EXCH_RATEINSERT"]])));
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid3")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    return L0.result;
  }
  L0["f"] = (await $.mcall((await $.v(C, "ExchMgr")), "CallIntegerFunction", ["Ex_CourseRatesOper", [L0["dat"]]]));
  await $.mcall((await $.v(C, "oracledataset5")), "close", []);
  await $.mcall((await $.v(C, "oracledataset5")), "open", []);
  { const $t3 = $.sub((await $.mv((await $.v(C, "OracleDataSet5")), "recordcount")), 1);
    L0["i"] = 0;
    let $t4 = true;
    for (;;) {
      if (!$t4) { L0["i"] = $.succ(L0["i"], 1); }
      $t4 = false;
      if (!($.ord(L0["i"]) <= $.ord($t3))) break;
      await $.stmt((await $.call(C, "Sb_SendMessage", [(await $.mv((await $.mcall((await $.v(C, "OracleDataSet5")), "FieldByName", ["SID"])), "AsString")), "Valyuta məzənnələri təzələndi"])));
      await $.mcall((await $.v(C, "OracleDataSet5")), "next", []);
      await $.tick();
    }
  }
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRateManagementForm", "Button5Click", async function Button5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "panel7")), "Visible", $.not((await $.mv((await $.mv((await $.v(C, "RatemangForm")), "panel7")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("SearchForText_AndSelect", async function SearchForText_AndSelect(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"richedit": $.copyArg(p0), "searchtext": $.copyArg(p1), result: false, "s": 0, "startpos": 0, "position": 0, "endpos": 0};
  await $.fixArgs(L0, ["richedit", "searchtext"]);
  L0["s"] = 0;
  L0["startpos"] = 0;
  {
    const $t5 = L0["richedit"];
    await $.wset([$t5], "Endpos", (await $.wcall([$t5], "Length", [(await $.mv((await $.wv([$t5], "RichEdit", { get: async () => L0["richedit"], set: async (v) => { L0["richedit"] = v; }, local: true }, false)), "Text"))], C)), { get: async () => L0["endpos"], set: async (v) => { L0["endpos"] = v; }, local: true });
    await $.mcall((await $.wv([$t5], "Lines", C, false)), "BeginUpdate", []);
    while ($.truthy($.ne((await $.wcall([$t5], "FindText", [(await $.wv([$t5], "SearchText", { get: async () => L0["searchtext"], set: async (v) => { L0["searchtext"] = v; }, local: true }, false)), (await $.wv([$t5], "StartPos", { get: async () => L0["startpos"], set: async (v) => { L0["startpos"] = v; }, local: true }, false)), (await $.wv([$t5], "Endpos", { get: async () => L0["endpos"], set: async (v) => { L0["endpos"] = v; }, local: true }, false)), [(await $.wv([$t5], "stMatchCase", C, false))]], C)), (-(1))))) {
      await $.wset([$t5], "Endpos", $.sub((await $.wcall([$t5], "Length", [(await $.mv((await $.wv([$t5], "RichEdit", { get: async () => L0["richedit"], set: async (v) => { L0["richedit"] = v; }, local: true }, false)), "Text"))], C)), (await $.wv([$t5], "startpos", { get: async () => L0["startpos"], set: async (v) => { L0["startpos"] = v; }, local: true }, false))), { get: async () => L0["endpos"], set: async (v) => { L0["endpos"] = v; }, local: true });
      await $.wset([$t5], "Position", (await $.wcall([$t5], "FindText", [(await $.wv([$t5], "SearchText", { get: async () => L0["searchtext"], set: async (v) => { L0["searchtext"] = v; }, local: true }, false)), (await $.wv([$t5], "StartPos", { get: async () => L0["startpos"], set: async (v) => { L0["startpos"] = v; }, local: true }, false)), (await $.wv([$t5], "Endpos", { get: async () => L0["endpos"], set: async (v) => { L0["endpos"] = v; }, local: true }, false)), [(await $.wv([$t5], "stMatchCase", C, false))]], C)), { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true });
      await $.stmt((await $.wcall([$t5], "Inc", [$.ref(async () => (await $.wv([$t5], "StartPos", { get: async () => L0["startpos"], set: async (v) => { L0["startpos"] = v; }, local: true }, false)), async ($t6) => { await $.wset([$t5], "StartPos", $t6, { get: async () => L0["startpos"], set: async (v) => { L0["startpos"] = v; }, local: true }); }), (await $.wcall([$t5], "Length", [(await $.wv([$t5], "SearchText", { get: async () => L0["searchtext"], set: async (v) => { L0["searchtext"] = v; }, local: true }, false))], C))], C)));
      await $.stmt($.wcall([$t5], "SetFocus", [], C));
      await $.wset([$t5], "SelStart", (await $.wv([$t5], "Position", { get: async () => L0["position"], set: async (v) => { L0["position"] = v; }, local: true }, false)), C);
      await $.wset([$t5], "SelLength", (await $.wcall([$t5], "Length", [(await $.wv([$t5], "SearchText", { get: async () => L0["searchtext"], set: async (v) => { L0["searchtext"] = v; }, local: true }, false))], C)), C);
      await $.wset([$t5], "s", $.add((await $.wv([$t5], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), 1), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.tick();
    }
    await $.stmt((await $.wcall([$t5], "ShowMessage", [(await $.wcall([$t5], "inttostr", [(await $.wv([$t5], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C))], C)));
    await $.mcall((await $.wv([$t5], "Lines", C, false)), "EndUpdate", []);
  }
  return L0.result;
}, {"params": ["RichEdit", "SearchText"], "kind": "function", "ptypes": ["TRichEdit", "String"]});
  U.method("TRateManagementForm", "CommitNewRatesExecute", async function CommitNewRatesExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "trcount": 0, "starttime": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Yeni valyuta məzənnələri qəbul edilsin?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
    L0["starttime"] = (await $.v(C, "Time"));
    {
      const $t7 = (await $.v(C, "SBRateManagement"));
      await $.stmt((await $.wcall([$t7], "CallProcedure", ["commit_new_rates", []], C)));
      await $.wset([$t7], "TrCount", (await $.wcall([$t7], "CallIntegerFunction", ["calc_rate_difference", []], C)), { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true });
      await $.mcall((await $.mv((await $.wv([$t7], "sboapiDataModule", C, false)), "SBSession")), "Commit", []);
    }
    await $.stmt((await $.call(C, "ShowMessage", [(await $.call(C, "Format", [$.add($.add($.add($.add("Əməliyyat yerinə yetirildi.", "\r\n"), "Günün sənədlərinə %d əməliyyat daxil oldu"), "\r\n"), "Əməliyyat vaxtı: %s - %s = %s"), [L0["trcount"], (await $.call(C, "TimeToStr", [L0["starttime"]])), (await $.call(C, "TimeToStr", [(await $.v(C, "Time"))])), (await $.call(C, "FormatDateTime", ["nn:ss", $.sub((await $.v(C, "Time")), L0["starttime"])]))]]))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRateManagementForm", "Get_Icon", async function Get_Icon(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.mcall((await $.v(C, "ImageList1")), "GetIcon", [0, (await $.v(C, "Icon"))])));
  L0["result"] = (await $.mv((await $.v(C, "Icon")), "Handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRateManagementForm", "RecalculateExecute", async function RecalculateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "recalculatefm": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Valyuta məzənnələri yenidən hesablansın?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
    L0["recalculatefm"] = (await $.mcall((await $.v(C, "TFmRecalculate")), "Create", [Self]));
    try {
      await $.mcall(L0["recalculatefm"], "ShowModal", []);
    } finally {
      await $.mcall(L0["recalculatefm"], "Release", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
