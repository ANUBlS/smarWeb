// Generated from CreditManagerImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CreditManagerImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "CreditManager_TLB", "StdVcl", "ExtCtrls", "ImgList", "ToolWin", "ComCtrls", "Grids", "DBGrids", "StdCtrls", "Db", "OracleData", "Oracle", "Buttons", "Menus", "SBPlgAx50_TLB", "DBViewComboBox", "ActnList", "ExcelExporter", "ComObj", "ComServ", "UntContractConclusion", "UntConclusionDataModule", "UntPercents", "UntReferences", "sbcmMainDataModule", "UntContractState", "UntCreditTranches", "UntProlongations", "UntExpite", "UntPayments", "StoredProgramsUnit", "UntPercentConverting", "UntConvertionProgress", "DataModuleStoredPrograms", "UntDataModule", "PaymentsPlaneUnit", "ExportUnit", "ReserveContUnit", "ReserveHistoryUnit"]);
  const C = [U];
  U.defClass("EUserError", "Exception", {}, {});
  U.defClass("TFrmCreditManager", "TActiveForm", {"imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "maintoolbar": {"name": "MainToolBar", "type": "TToolBar"}, "tbnew": {"name": "TBNew", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "tbedit": {"name": "TBEdit", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "tbrefresh": {"name": "TBRefresh", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "tbbalance": {"name": "TBBalance", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "tbfilter": {"name": "TBFilter", "type": "TToolButton"}, "tboperation": {"name": "TBOperation", "type": "TToolButton"}, "filterpanel": {"name": "FilterPanel", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "splitter": {"name": "Splitter", "type": "TSplitter"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "btnclosefilterpanel": {"name": "BtnCloseFilterPanel", "type": "TButton"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dropdownmenu": {"name": "DropDownMenu", "type": "TPopupMenu"}, "mitranch": {"name": "miTranch", "type": "TMenuItem"}, "mioverdue": {"name": "miOverdue", "type": "TMenuItem"}, "mipayment": {"name": "miPayment", "type": "TMenuItem"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "tbreferences": {"name": "TBReferences", "type": "TToolButton"}, "mainmenu": {"name": "MainMenu", "type": "TPopupMenu"}, "micontractstate": {"name": "miContractState", "type": "TMenuItem"}, "mieditcontract": {"name": "miEditContract", "type": "TMenuItem"}, "miinsert": {"name": "miInsert", "type": "TMenuItem"}, "contractsviewer": {"name": "ContractsViewer", "type": "TDBGrid"}, "miprolongation": {"name": "miProlongation", "type": "TMenuItem"}, "mienabledisablecalculation": {"name": "miEnableDisableCalculation", "type": "TMenuItem"}, "miselectall": {"name": "miSelectAll", "type": "TMenuItem"}, "miconvertselected": {"name": "miConvertSelected", "type": "TMenuItem"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "trach1": {"name": "Trach1", "type": "TMenuItem"}, "expire1": {"name": "Expire1", "type": "TMenuItem"}, "payment1": {"name": "Payment1", "type": "TMenuItem"}, "prolongation1": {"name": "Prolongation1", "type": "TMenuItem"}, "statusimages": {"name": "StatusImages", "type": "TImageList"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "cbcurrency": {"name": "CBCurrency", "type": "TCheckBox"}, "dbviewcombobox1": {"name": "DBViewComboBox1", "type": "TDBViewComboBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "cbcontracttype": {"name": "CBContractType", "type": "TCheckBox"}, "dbviewcombobox2": {"name": "DBViewComboBox2", "type": "TDBViewComboBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "cbclienttype": {"name": "CBClientType", "type": "TCheckBox"}, "dbviewcombobox3": {"name": "DBViewComboBox3", "type": "TDBViewComboBox"}, "n5": {"name": "N5", "type": "TMenuItem"}, "mifilter": {"name": "miFilter", "type": "TMenuItem"}, "micalculateds": {"name": "miCalculateds", "type": "TMenuItem"}, "micalculationstopped": {"name": "miCalculationStopped", "type": "TMenuItem"}, "minotcalculated": {"name": "miNotCalculated", "type": "TMenuItem"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "cbnotcalculated": {"name": "CBNotCalculated", "type": "TCheckBox"}, "cbcalcstopped": {"name": "CBCalcStopped", "type": "TCheckBox"}, "cbcalculated": {"name": "CBCalculated", "type": "TCheckBox"}, "image1": {"name": "Image1", "type": "TImage"}, "image2": {"name": "Image2", "type": "TImage"}, "image3": {"name": "Image3", "type": "TImage"}, "mipaneloffilter": {"name": "miPanelofFilter", "type": "TMenuItem"}, "actionlist": {"name": "ActionList", "type": "TActionList"}, "filteraction": {"name": "FilterAction", "type": "TAction"}, "n6": {"name": "N6", "type": "TMenuItem"}, "closecurrentcontract1": {"name": "CloseCurrentContract1", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "miexport": {"name": "miExport", "type": "TMenuItem"}, "mirefresh": {"name": "miRefresh", "type": "TMenuItem"}, "searchpanel": {"name": "SearchPanel", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "editcontractno": {"name": "EditContractNo", "type": "TEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "editcontractaccno": {"name": "EditContractAccNo", "type": "TEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "editinterestaccno": {"name": "EditInterestAccNo", "type": "TEdit"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "editcontractaccname": {"name": "EditContractAccName", "type": "TEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "editfacticaldebt": {"name": "EditFacticalDebt", "type": "TEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "editoverduedebt": {"name": "EditOverdueDebt", "type": "TEdit"}, "misearchpanel": {"name": "miSearchPanel", "type": "TMenuItem"}, "searchaction": {"name": "SearchAction", "type": "TAction"}, "n8": {"name": "N8", "type": "TMenuItem"}, "mireservecont": {"name": "miReserveCont", "type": "TMenuItem"}, "n9": {"name": "N9", "type": "TMenuItem"}, "fevents": {"name": "FEvents", "type": "IFrmCreditManagerEvents"}, "fbankdate": {"name": "FBankDate", "type": "TDateTime"}}, {});
  U.init(async () => {
    U.const("csUnknown", (-(9)));
    U.const("csCalculated", (-(10)));
    U.const("csDisabled", (-(11)));
    U.var_("MonthlyAlert", false, "Boolean");
    U.var_("AlertInterval", 0, "Integer");
  });
  U.method("TFrmCreditManager", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TFrmCreditManager", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TFrmCreditManager", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TFrmCreditManager", "Initialize", null, arguments);
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
  U.method("TFrmCreditManager", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TFrmCreditManager", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TFrmCreditManager", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFrmCreditManager", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFrmCreditManager", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TFrmCreditManager", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TFrmCreditManager", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TFrmCreditManager", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TFrmCreditManager", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFrmCreditManager", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFrmCreditManager", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFrmCreditManager", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TFrmCreditManager", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TFrmCreditManager", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFrmCreditManager", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TFrmCreditManager", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TFrmCreditManager", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFrmCreditManager", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFrmCreditManager", "Get_Icon", async function Get_Icon(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["imageindex"] = 7;
  await $.stmt((await $.mcall((await $.v(C, "ImageList1")), "GetIcon", [L0["imageindex"], (await $.v(C, "Icon"))])));
  L0["result"] = (await $.mv((await $.v(C, "Icon")), "Handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "GetContractID", async function GetContractID(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainDataModule")), "Contracts")), "FieldByName", ["ID"])), "AsInteger"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "NewContract", async function NewContract(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  {
    const $t1 = (await $.mcall((await $.v(C, "TFrmContract")), "Create", [Self]));
    try {
      await $.wset([$t1], "FOpMode", (await $.wv([$t1], "omInsert", C, false)), C);
      await $.wset([$t1], "FContractType", (await $.wcall([$t1], "ContractTypeByName", ["CREDIT"], C)), C);
      await $.wset([$t1], "Result", $.eq((await $.wv([$t1], "ShowModal", C, false)), (await $.wv([$t1], "mrOk", C, false))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } finally {
      await $.stmt($.wcall([$t1], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "EditContract", async function EditContract(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  {
    const $t2 = (await $.mcall((await $.v(C, "TFrmContract")), "Create", [Self]));
    try {
      await $.wset([$t2], "FOpMode", (await $.wv([$t2], "omEdit", C, false)), C);
      await $.wset([$t2], "FContractType", (await $.wcall([$t2], "ContractTypeByName", ["CREDIT"], C)), C);
      await $.wset([$t2], "Result", ($.eq((await $.wv([$t2], "ShowModal", C, false)), (await $.wv([$t2], "mrOk", C, false)))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } finally {
      await $.stmt($.wcall([$t2], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "PaymentsPlane", async function PaymentsPlane(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"contractid": $.copyArg(p0), "contractnum": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["contractid", "contractnum"]);
  {
    const $t3 = (await $.mcall((await $.v(C, "TFrmPaymentPlane")), "Create", [Self]));
    try {
      await $.wset([$t3], "FContractID", (await $.wv([$t3], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false)), C);
      await $.wset([$t3], "Caption", $.add((await $.wv([$t3], "Caption", C, false)), (await $.wv([$t3], "ContractNum", { get: async () => L0["contractnum"], set: async (v) => { L0["contractnum"] = v; }, local: true }, false))), C);
      await $.stmt($.wcall([$t3], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t3], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["ContractID", "ContractNum"], "kind": "procedure", "ptypes": ["Integer", "String"]});
  U.method("TFrmCreditManager", "SafeRefresh", async function SafeRefresh(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "saveplace": null};
  {
    const $t4 = (await $.mv((await $.v(C, "MainDataModule")), "Contracts"));
    await $.wset([$t4], "SavePlace", (await $.wv([$t4], "GetBookmark", C, false)), { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true });
    await $.stmt($.wcall([$t4], "Refresh", [], C));
    try {
      await $.stmt((await $.wcall([$t4], "GotoBookmark", [(await $.wv([$t4], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C)));
    } catch ($t5) {
      $.rethrowControl($t5);
      $.handled($t5);
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmCreditManager", "PercentConverting", async function PercentConverting(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  {
    const $t6 = (await $.mcall((await $.v(C, "TFrmPercentConvert")), "Create", [Self]));
    try {
      await $.wset([$t6], "Result", ($.eq((await $.wv([$t6], "ShowModal", C, false)), (await $.wv([$t6], "mrOk", C, false)))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } finally {
      await $.stmt($.wcall([$t6], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "Prolongation", async function Prolongation(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"contractid": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["contractid"]);
  {
    const $t7 = (await $.mcall((await $.v(C, "TFrmProlongation")), "Create", [Self]));
    try {
      await $.wset([$t7], "FContractID", (await $.wv([$t7], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false)), C);
      await $.wset([$t7], "Result", ($.eq((await $.wv([$t7], "ShowModal", C, false)), (await $.wv([$t7], "mrOk", C, false)))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } finally {
      await $.stmt($.wcall([$t7], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["ContractID"], "kind": "function", "ptypes": ["LongInt"]});
  U.method("TFrmCreditManager", "TBFilterClick", async function TBFilterClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FilterPanel")), "Visible", (await $.mv((L0["sender"]), "Down")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "BtnCloseFilterPanelClick", async function BtnCloseFilterPanelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FilterPanel")), "Hide", []);
  await $.mset((await $.v(C, "TBFilter")), "Down", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "TBRefreshClick", async function TBRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SafeRefresh", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "miContractStateClick", async function miContractStateClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "contractid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["contractid"] = (await $.v(C, "GetContractID"));
  {
    const $t8 = (await $.mcall((await $.v(C, "TFrmContractState")), "Create", [Self]));
    try {
      await $.wset([$t8], "FContractID", (await $.wv([$t8], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false)), C);
      await $.stmt($.wcall([$t8], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t8], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "MainDataModule", (await $.mcall((await $.v(C, "TMainDataModule")), "Create", [Self])));
  await $.set(C, "ContDataModule", (await $.mcall((await $.v(C, "TContDataModule")), "Create", [Self])));
  await $.set(C, "FrmReferences", (await $.mcall((await $.v(C, "TFrmReferences")), "Create", [Self])));
  await $.set(C, "DataModuleRefer", (await $.mcall((await $.v(C, "TDataModuleRefer")), "Create", [Self])));
  await $.set(C, "FBankDate", (await $.v(C, "GetBankDate")));
  await $.set(C, "FrmProgress", (await $.mcall((await $.v(C, "TFrmProgress")), "Create", [Self])));
  await $.set(C, "FrmExport", (await $.mcall((await $.v(C, "TFrmExport")), "Create", [Self])));
  await $.mset((await $.v(C, "ContractsViewer")), "DataSource", (await $.mv((await $.v(C, "MainDataModule")), "DataSrcContracts")));
  await $.set(C, "MonthlyAlert", $.eq((await $.call(C, "SBCMGetOption", ["cmrAlertBeforePayment"])), "ON"));
  await $.set(C, "AlertInterval", (await $.call(C, "SBCMGetOption", ["cmrAlertDaysInterval"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "miEditContractClick", async function miEditContractClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "EditContract")))) {
    await $.stmt($.call(C, "SafeRefresh", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "TBReferencesClick", async function TBReferencesClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FrmReferences")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "miInsertClick", async function miInsertClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "NewContract")))) {
    await $.mcall((await $.mv((await $.v(C, "MainDataModule")), "Contracts")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "Tranch", async function Tranch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"contractid": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["contractid"]);
  {
    const $t9 = (await $.mcall((await $.v(C, "TFrmTranches")), "Create", [Self]));
    try {
      await $.wset([$t9], "FContractID", (await $.wv([$t9], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false)), C);
      await $.wset([$t9], "Result", ($.eq((await $.wv([$t9], "ShowModal", C, false)), (await $.wv([$t9], "mrOk", C, false)))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } finally {
      await $.stmt($.wcall([$t9], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["ContractID"], "kind": "function", "ptypes": ["LongInt"]});
  U.method("TFrmCreditManager", "Payment", async function Payment(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"contractid": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["contractid"]);
  {
    const $t10 = (await $.mcall((await $.v(C, "TFrmPayments")), "Create", [Self]));
    try {
      await $.wset([$t10], "FContractID", (await $.wv([$t10], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false)), C);
      await $.wset([$t10], "Result", ($.eq((await $.wv([$t10], "ShowModal", C, false)), (await $.wv([$t10], "mrOk", C, false)))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } finally {
      await $.stmt($.wcall([$t10], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["ContractID"], "kind": "function", "ptypes": ["LongInt"]});
  U.method("TFrmCreditManager", "Expire", async function Expire(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"contractid": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["contractid"]);
  {
    const $t11 = (await $.mcall((await $.v(C, "TFrmExpire")), "Create", [Self]));
    try {
      await $.wset([$t11], "FContractID", (await $.wv([$t11], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false)), C);
      await $.wset([$t11], "Result", ($.eq((await $.wv([$t11], "ShowModal", C, false)), (await $.wv([$t11], "mrOk", C, false)))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } finally {
      await $.stmt($.wcall([$t11], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["ContractID"], "kind": "function", "ptypes": ["LongInt"]});
  U.method("TFrmCreditManager", "ReserveCont", async function ReserveCont(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"contractid": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["contractid"]);
  {
    const $t12 = (await $.mcall((await $.v(C, "TFrmReserveCont")), "Create", [Self]));
    try {
      await $.wset([$t12], "FContractID", (await $.wv([$t12], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false)), C);
      await $.wset([$t12], "Result", ($.eq((await $.wv([$t12], "ShowModal", C, false)), (await $.wv([$t12], "mrOk", C, false)))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } finally {
      await $.stmt($.wcall([$t12], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["ContractID"], "kind": "function", "ptypes": ["LongInt"]});
  U.method("TFrmCreditManager", "miTranchClick", async function miTranchClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "Tranch", [(await $.v(C, "GetContractID"))])))) {
    await $.stmt($.call(C, "SafeRefresh", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "miProlongationClick", async function miProlongationClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "Prolongation", [(await $.v(C, "GetContractID"))])))) {
    await $.stmt($.call(C, "SafeRefresh", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "miOverdueClick", async function miOverdueClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "Expire", [(await $.v(C, "GetContractID"))])))) {
    await $.stmt($.call(C, "SafeRefresh", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "miPaymentClick", async function miPaymentClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "Payment", [(await $.v(C, "GetContractID"))])))) {
    await $.stmt($.call(C, "SafeRefresh", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "miEnableDisableCalculationClick", async function miEnableDisableCalculationClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "calculationenabled": false, "querystr": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["calculationenabled"] = (await $.call(C, "IsCalculationEnabled", [(await $.v(C, "GetContractID"))]));
  if ($.truthy(L0["calculationenabled"])) {
    L0["querystr"] = "Are you sure to Disable Calculation for this contract?";
  } else {
    L0["querystr"] = "Are you sure to Enable Calculation for this contract?";
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["querystr"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.call(C, "SetCalculationEnabled", [(await $.v(C, "GetContractID")), $.not(L0["calculationenabled"])])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "ConvertSelected", async function ConvertSelected(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"contractid": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["contractid"]);
  {
    const $t13 = (await $.mv((await $.v(C, "ContDataModule")), "ConvertingPackage"));
    await $.stmt((await $.wcall([$t13], "CallProcedure", ["ConvertingLazyPercents", [(await $.wv([$t13], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false)), (await $.wv([$t13], "FBankDate", C, false))]], C)));
  }
  L0["result"] = 0;
  return L0.result;
}, {"params": ["ContractID"], "kind": "function", "ptypes": ["LongInt"]});
  U.method("TFrmCreditManager", "MouseWheelHandler", async function MouseWheelHandler(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  if ($.truthy((await $.mv((await $.v(C, "ContractsViewer")), "Focused")))) {
    await $.mcall((await $.mv((await $.v(C, "ContractsViewer")), "SelectedRows")), "Clear", []);
    {
      const $t14 = (await $.call(C, "TCMMouseWheel", [(await L0["message"].get())]));
      const $t15 = (await $.mv((await $.mv((await $.wv([$t14], "ContractsViewer", C, false)), "DataSource")), "DataSet"));
      if ($.truthy($.lt((await $.wv([$t14, $t15], "WheelDelta", C, false)), 0))) {
        await $.stmt($.wcall([$t14, $t15], "Next", [], C));
      } else {
        await $.stmt($.wcall([$t14, $t15], "Prior", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TFrmCreditManager", "miSelectAllClick", async function miSelectAllClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t16 = (await $.v(C, "ContractsViewer"));
    const $t17 = (await $.wv([$t16], "SelectedRows", C, false));
    const $t18 = (await $.mv((await $.wv([$t16, $t17], "MainDataModule", C, false)), "Contracts"));
    await $.stmt($.wcall([$t16, $t17, $t18], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t16, $t17, $t18], "First", [], C));
      while ($.truthy($.not((await $.wv([$t16, $t17, $t18], "Eof", C, false))))) {
        await $.wset([$t16, $t17, $t18], "CurrentRowSelected", (await $.wv([$t16, $t17, $t18], "True", C, false)), C);
        await $.stmt($.wcall([$t16, $t17, $t18], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t16, $t17, $t18], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "miConvertSelectedClick", async function miConvertSelectedClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "selrowscount": 0, "selrowindex": 0, "aborted": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["resultitle"] = "  : Errors Found On Convertion Percents";
  {
    const $t19 = (await $.v(C, "ContractsViewer"));
    const $t20 = (await $.wv([$t19], "SelectedRows", C, false));
    const $t21 = (await $.mv((await $.wv([$t19, $t20], "DataSource", C, false)), "DataSet"));
    await $.wset([$t19, $t20, $t21], "Aborted", 0, { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true });
    {
      const $t22 = (await $.mv((await $.wv([$t19, $t20, $t21], "ContDataModule", C, false)), "ConvertingPackage"));
      await $.stmt((await $.wcall([$t19, $t20, $t21, $t22], "CallProcedure", ["DelDefferedTransactions", []], C)));
    }
    await $.wset([$t19, $t20, $t21], "SelRowsCount", (await $.wv([$t19, $t20, $t21], "Count", C, false)), { get: async () => L0["selrowscount"], set: async (v) => { L0["selrowscount"] = v; }, local: true });
    if ($.truthy($.ne((await $.wcall([$t19, $t20, $t21], "MessageDlg", ["Convert Percents Now?", (await $.wv([$t19, $t20, $t21], "mtConfirmation", C, false)), [(await $.wv([$t19, $t20, $t21], "mbYes", C, false)), (await $.wv([$t19, $t20, $t21], "mbNo", C, false))], 0], C)), (await $.wv([$t19, $t20, $t21], "mrYes", C, false))))) {
      $.abort();
    }
    {
      const $t23 = (await $.wv([$t19, $t20, $t21], "FrmProgress", C, false));
      const $t24 = (await $.wv([$t19, $t20, $t21, $t23], "ProgressBar", C, false));
      await $.wset([$t19, $t20, $t21, $t23, $t24], "Max", (await $.wv([$t19, $t20, $t21, $t23, $t24], "SelRowsCount", { get: async () => L0["selrowscount"], set: async (v) => { L0["selrowscount"] = v; }, local: true }, false)), C);
      await $.wset([$t19, $t20, $t21, $t23, $t24], "Position", 0, C);
      await $.mcall((await $.mv((await $.wv([$t19, $t20, $t21, $t23, $t24], "NoteMemo", C, false)), "Lines")), "Clear", []);
      await $.mcall((await $.wv([$t19, $t20, $t21, $t23, $t24], "NoteMemo", C, false)), "Hide", []);
      await $.mset((await $.wv([$t19, $t20, $t21, $t23, $t24], "BtnDetails", C, false)), "Enabled", (await $.wv([$t19, $t20, $t21, $t23, $t24], "False", C, false)));
      await $.mcall((await $.wv([$t19, $t20, $t21, $t23, $t24], "FrmProgress", C, false)), "Show", []);
    }
    await $.mcall((await $.wv([$t19, $t20, $t21], "Application", C, false)), "ProcessMessages", []);
    try {
      { const $t25 = $.sub((await $.wv([$t19, $t20, $t21], "SelRowsCount", { get: async () => L0["selrowscount"], set: async (v) => { L0["selrowscount"] = v; }, local: true }, false)), 1);
        await $.wset([$t19, $t20, $t21], "SelRowIndex", 0, { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true });
        let $t26 = true;
        for (;;) {
          if (!$t26) { await $.wset([$t19, $t20, $t21], "SelRowIndex", $.succ((await $.wv([$t19, $t20, $t21], "SelRowIndex", { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true }, false)), 1), { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true }); }
          $t26 = false;
          if (!($.ord((await $.wv([$t19, $t20, $t21], "SelRowIndex", { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true }, false))) <= $.ord($t25))) break;
          try {
            await $.stmt((await $.wcall([$t19, $t20, $t21], "GotoBookmark", [(await $.wcall([$t19, $t20, $t21], "Pointer", [(await $.idx((await $.wv([$t19, $t20, $t21], "Items", C, false)), [(await $.wv([$t19, $t20, $t21], "SelRowIndex", { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true }, false))]))], C))], C)));
            await $.mcall((await $.mv((await $.wv([$t19, $t20, $t21], "FrmProgress", C, false)), "ProgressBar")), "StepIt", []);
            await $.mset((await $.mv((await $.wv([$t19, $t20, $t21], "FrmProgress", C, false)), "CurrentContractLabel")), "Caption", (await $.mv((await $.wcall([$t19, $t20, $t21], "FieldByName", ["ContractNo"], C)), "AsString")));
            await $.stmt((await $.wcall([$t19, $t20, $t21], "ConvertSelected", [(await $.wv([$t19, $t20, $t21], "GetContractID", C, false))], C)));
          } catch ($t27) {
            $.rethrowControl($t27);
            $.handled($t27);
            await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t19, $t20, $t21], "FrmProgress", C, false)), "NoteMemo")), "Lines")), "Add", [$.add("Could Not Converting Percents for #", (await $.mv((await $.wcall([$t19, $t20, $t21], "FieldByName", ["ContractNo"], C)), "AsString")))])));
            await $.stmt((await $.wcall([$t19, $t20, $t21], "Inc", [$.ref(async () => (await $.wv([$t19, $t20, $t21], "Aborted", { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true }, false)), async ($t28) => { await $.wset([$t19, $t20, $t21], "Aborted", $t28, { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true }); })], C)));
            continue;
          }
          await $.tick();
        }
      }
    } finally {
      await $.mset((await $.mv((await $.wv([$t19, $t20, $t21], "FrmProgress", C, false)), "ProgressBar")), "Position", 0);
      await $.mset((await $.mv((await $.wv([$t19, $t20, $t21], "FrmProgress", C, false)), "LblResult")), "Caption", $.add((await $.wcall([$t19, $t20, $t21], "IntToStr", [(await $.wv([$t19, $t20, $t21], "Aborted", { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true }, false))], C)), (await $.wv([$t19, $t20, $t21], "ResulTitle", { get: async () => L0["resultitle"], set: async (v) => { L0["resultitle"] = v; }, local: true }, false))));
      await $.mset((await $.mv((await $.wv([$t19, $t20, $t21], "FrmProgress", C, false)), "BtnDetails")), "Enabled", (await $.wv([$t19, $t20, $t21], "True", C, false)));
      await $.mset((await $.mv((await $.wv([$t19, $t20, $t21], "FrmProgress", C, false)), "CurrentContractLabel")), "Caption", "");
      await $.mcall((await $.wv([$t19, $t20, $t21], "FrmProgress", C, false)), "Close", []);
      if ($.truthy((await $.wv([$t19, $t20, $t21], "PercentConverting", C, false)))) {
        await $.stmt($.wcall([$t19, $t20, $t21], "SafeRefresh", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "IFrmCreditManager_Get_Color", async function IFrmCreditManager_Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "IFrmCreditManager_Get_Font", async function IFrmCreditManager_Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCreditManager", "IFrmCreditManager__Set_Font", async function IFrmCreditManager__Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TFrmCreditManager", "IFrmCreditManager_Set_Color", async function IFrmCreditManager_Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TFrmCreditManager", "IFrmCreditManager_Set_Font", async function IFrmCreditManager_Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TFrmCreditManager", "miNotCalculatedClick", async function miNotCalculatedClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Checked", $.not((await $.mv((L0["sender"]), "Checked"))));
  await $.mset((await $.v(C, "CBNotCalculated")), "Checked", (await $.mv((L0["sender"]), "Checked")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "miPanelofFilterClick", async function miPanelofFilterClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FilterPanel")), "Visible", $.not((await $.mv((await $.v(C, "FilterPanel")), "Visible"))));
  await $.mset((await $.v(C, "TBFilter")), "Down", (await $.mv((await $.v(C, "FilterPanel")), "Visible")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "FilterActionExecute", async function FilterActionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s_calculated": 0, "s_disabled": 0, "s_unknown": 0, "hasstatusfilter": false, "currencyf": '', "conttypef": '', "custtypef": '', "statusf": '', "filterstr": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["currencyfilter"] = "(ContractCurrencyID=%d)";
  L0["contracttypefilter"] = "(ContractType=%d)";
  L0["customertypefilter"] = "(ClientType=%d)";
  L0["statusfilter"] = "((Status=%d)OR(Status=%d)OR(Status=%d))";
  L0["checkfiltred"] = $.fn(async function CheckFiltred(p0, p1, p2) {
  const L1 = {"ischecked": $.copyArg(p0), "filterstr": $.copyArg(p1), "args": $.copyArg(p2), result: ''};
  await $.fixArgs(L1, ["ischecked", "filterstr", "args"]);
  L1["result"] = "";
  if ($.truthy(L1["ischecked"])) {
    L1["result"] = (await $.call(C, "Format", [L1["filterstr"], L1["args"]]));
  }
  return L1.result;
});
  L0["filterstr"] = "";
  {
    const $t29 = (await $.v(C, "ContDataModule"));
    await $.wset([$t29], "CurrencyF", (await $.wcall([$t29], "CheckFiltred", [(await $.mv((await $.wv([$t29], "CBCurrency", C, false)), "Checked")), (await $.wv([$t29], "CurrencyFilter", { get: async () => L0["currencyfilter"], set: async (v) => { L0["currencyfilter"] = v; }, local: true }, false)), [(await $.mv((await $.mcall((await $.wv([$t29], "Currencys", C, false)), "FieldByName", ["Valute"])), "AsInteger"))]], { get: async () => L0["checkfiltred"], set: async (v) => { L0["checkfiltred"] = v; }, local: true })), { get: async () => L0["currencyf"], set: async (v) => { L0["currencyf"] = v; }, local: true });
    await $.wset([$t29], "ContTypeF", (await $.wcall([$t29], "CheckFiltred", [(await $.mv((await $.wv([$t29], "CBContractType", C, false)), "Checked")), (await $.wv([$t29], "ContractTypeFilter", { get: async () => L0["contracttypefilter"], set: async (v) => { L0["contracttypefilter"] = v; }, local: true }, false)), [(await $.mv((await $.mcall((await $.wv([$t29], "CreditTypes", C, false)), "FieldByName", ["ID"])), "AsInteger"))]], { get: async () => L0["checkfiltred"], set: async (v) => { L0["checkfiltred"] = v; }, local: true })), { get: async () => L0["conttypef"], set: async (v) => { L0["conttypef"] = v; }, local: true });
    await $.wset([$t29], "CustTypeF", (await $.wcall([$t29], "CheckFiltred", [(await $.mv((await $.wv([$t29], "CBClientType", C, false)), "Checked")), (await $.wv([$t29], "CustomerTypeFilter", { get: async () => L0["customertypefilter"], set: async (v) => { L0["customertypefilter"] = v; }, local: true }, false)), [(await $.mv((await $.mcall((await $.wv([$t29], "Categories", C, false)), "FieldByName", ["ID"])), "AsInteger"))]], { get: async () => L0["checkfiltred"], set: async (v) => { L0["checkfiltred"] = v; }, local: true })), { get: async () => L0["custtypef"], set: async (v) => { L0["custtypef"] = v; }, local: true });
    await $.wset([$t29], "S_Calculated", $.mul((await $.wcall([$t29], "Word", [(await $.mv((await $.wv([$t29], "CBCalculated", C, false)), "Checked"))], C)), (await $.mv((await $.wv([$t29], "CBCalculated", C, false)), "Tag"))), { get: async () => L0["s_calculated"], set: async (v) => { L0["s_calculated"] = v; }, local: true });
    await $.wset([$t29], "S_Disabled", $.mul((await $.wcall([$t29], "Word", [(await $.mv((await $.wv([$t29], "CBNotCalculated", C, false)), "Checked"))], C)), (await $.mv((await $.wv([$t29], "CBNotCalculated", C, false)), "Tag"))), { get: async () => L0["s_disabled"], set: async (v) => { L0["s_disabled"] = v; }, local: true });
    await $.wset([$t29], "S_Unknown", $.mul((await $.wcall([$t29], "Word", [(await $.mv((await $.wv([$t29], "CBCalcStopped", C, false)), "Checked"))], C)), (await $.mv((await $.wv([$t29], "CBCalcStopped", C, false)), "Tag"))), { get: async () => L0["s_unknown"], set: async (v) => { L0["s_unknown"] = v; }, local: true });
    await $.mset((await $.wv([$t29], "miNotCalculated", C, false)), "Checked", (await $.mv((await $.wv([$t29], "CBNotCalculated", C, false)), "Checked")));
    await $.mset((await $.wv([$t29], "miCalculateds", C, false)), "Checked", (await $.mv((await $.wv([$t29], "CBCalculated", C, false)), "Checked")));
    await $.mset((await $.wv([$t29], "miCalculationStopped", C, false)), "Checked", (await $.mv((await $.wv([$t29], "CBCalcStopped", C, false)), "Checked")));
    await $.wset([$t29], "HasStatusFilter", (await $.wv([$t29], "True", C, false)), { get: async () => L0["hasstatusfilter"], set: async (v) => { L0["hasstatusfilter"] = v; }, local: true });
    await $.wset([$t29], "StatusF", (await $.wcall([$t29], "CheckFiltred", [(await $.wv([$t29], "HasStatusFilter", { get: async () => L0["hasstatusfilter"], set: async (v) => { L0["hasstatusfilter"] = v; }, local: true }, false)), (await $.wv([$t29], "StatusFilter", { get: async () => L0["statusfilter"], set: async (v) => { L0["statusfilter"] = v; }, local: true }, false)), [(await $.wv([$t29], "S_Calculated", { get: async () => L0["s_calculated"], set: async (v) => { L0["s_calculated"] = v; }, local: true }, false)), (await $.wv([$t29], "S_Unknown", { get: async () => L0["s_unknown"], set: async (v) => { L0["s_unknown"] = v; }, local: true }, false)), (await $.wv([$t29], "S_Disabled", { get: async () => L0["s_disabled"], set: async (v) => { L0["s_disabled"] = v; }, local: true }, false))]], { get: async () => L0["checkfiltred"], set: async (v) => { L0["checkfiltred"] = v; }, local: true })), { get: async () => L0["statusf"], set: async (v) => { L0["statusf"] = v; }, local: true });
    await $.wset([$t29], "FilterStr", (await $.wv([$t29], "CurrencyF", { get: async () => L0["currencyf"], set: async (v) => { L0["currencyf"] = v; }, local: true }, false)), { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true });
    if ($.truthy($.ne((await $.wv([$t29], "ContTypeF", { get: async () => L0["conttypef"], set: async (v) => { L0["conttypef"] = v; }, local: true }, false)), ""))) {
      if ($.truthy($.eq((await $.wv([$t29], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false)), ""))) {
        await $.wset([$t29], "FilterStr", (await $.wv([$t29], "ContTypeF", { get: async () => L0["conttypef"], set: async (v) => { L0["conttypef"] = v; }, local: true }, false)), { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true });
      } else {
        await $.wset([$t29], "FilterStr", $.add($.add((await $.wv([$t29], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false)), "AND"), (await $.wv([$t29], "ContTypeF", { get: async () => L0["conttypef"], set: async (v) => { L0["conttypef"] = v; }, local: true }, false))), { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true });
      }
    }
    if ($.truthy($.ne((await $.wv([$t29], "CustTypeF", { get: async () => L0["custtypef"], set: async (v) => { L0["custtypef"] = v; }, local: true }, false)), ""))) {
      if ($.truthy($.eq((await $.wv([$t29], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false)), ""))) {
        await $.wset([$t29], "FilterStr", (await $.wv([$t29], "CustTypeF", { get: async () => L0["custtypef"], set: async (v) => { L0["custtypef"] = v; }, local: true }, false)), { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true });
      } else {
        await $.wset([$t29], "FilterStr", $.add($.add((await $.wv([$t29], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false)), "AND"), (await $.wv([$t29], "CustTypeF", { get: async () => L0["custtypef"], set: async (v) => { L0["custtypef"] = v; }, local: true }, false))), { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true });
      }
    }
    if ($.truthy($.ne((await $.wv([$t29], "StatusF", { get: async () => L0["statusf"], set: async (v) => { L0["statusf"] = v; }, local: true }, false)), ""))) {
      if ($.truthy($.eq((await $.wv([$t29], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false)), ""))) {
        await $.wset([$t29], "FilterStr", (await $.wv([$t29], "StatusF", { get: async () => L0["statusf"], set: async (v) => { L0["statusf"] = v; }, local: true }, false)), { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true });
      } else {
        await $.wset([$t29], "FilterStr", $.add($.add((await $.wv([$t29], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false)), "AND"), (await $.wv([$t29], "StatusF", { get: async () => L0["statusf"], set: async (v) => { L0["statusf"] = v; }, local: true }, false))), { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true });
      }
    }
  }
  {
    const $t30 = (await $.mv((await $.v(C, "MainDataModule")), "Contracts"));
    await $.wset([$t30], "Filtered", (await $.wv([$t30], "False", C, false)), C);
    await $.wset([$t30], "Filter", (await $.wv([$t30], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false)), C);
    await $.wset([$t30], "Filtered", (await $.wv([$t30], "True", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "miCalculationStoppedClick", async function miCalculationStoppedClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Checked", $.not((await $.mv((L0["sender"]), "Checked"))));
  await $.mset((await $.v(C, "CBCalcStopped")), "Checked", (await $.mv((L0["sender"]), "Checked")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "miCalculatedsClick", async function miCalculatedsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Checked", $.not((await $.mv((L0["sender"]), "Checked"))));
  await $.mset((await $.v(C, "CBCalculated")), "Checked", (await $.mv((L0["sender"]), "Checked")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "CloseCurrentContract1Click", async function CloseCurrentContract1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0, "waitnextconfirm": false, "contractid": 0, "contractname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  {
    const $t31 = (await $.v(C, "ContractsViewer"));
    const $t32 = (await $.wv([$t31], "SelectedRows", C, false));
    const $t33 = (await $.mv((await $.wv([$t31, $t32], "DataSource", C, false)), "DataSet"));
    try {
      { const $t34 = $.sub((await $.wv([$t31, $t32, $t33], "Count", C, false)), 1);
        await $.wset([$t31, $t32, $t33], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t35 = true;
        for (;;) {
          if (!$t35) { await $.wset([$t31, $t32, $t33], "Index", $.succ((await $.wv([$t31, $t32, $t33], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t35 = false;
          if (!($.ord((await $.wv([$t31, $t32, $t33], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t34))) break;
          await $.stmt((await $.wcall([$t31, $t32, $t33], "GotoBookmark", [(await $.wcall([$t31, $t32, $t33], "Pointer", [(await $.idx((await $.wv([$t31, $t32, $t33], "Items", C, false)), [(await $.wv([$t31, $t32, $t33], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t31, $t32, $t33], "ContractID", (await $.wv([$t31, $t32, $t33], "GetContractID", C, false)), { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true });
          await $.wset([$t31, $t32, $t33], "ContractName", (await $.mv((await $.wcall([$t31, $t32, $t33], "FieldByName", ["ContractNo"], C)), "AsString")), { get: async () => L0["contractname"], set: async (v) => { L0["contractname"] = v; }, local: true });
          if ($.truthy((await $.wv([$t31, $t32, $t33], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t36 = (await $.wcall([$t31, $t32, $t33], "MessageDlg", [(await $.wcall([$t31, $t32, $t33], "Format", ["Are You Sure to Close  #%S", [(await $.wv([$t31, $t32, $t33], "ContractName", { get: async () => L0["contractname"], set: async (v) => { L0["contractname"] = v; }, local: true }, false))]], C)), (await $.wv([$t31, $t32, $t33], "mtConfirmation", C, false)), [(await $.wv([$t31, $t32, $t33], "mbYes", C, false)), (await $.wv([$t31, $t32, $t33], "mbNo", C, false)), (await $.wv([$t31, $t32, $t33], "mbCancel", C, false)), (await $.wv([$t31, $t32, $t33], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t36, (await $.wv([$t31, $t32, $t33], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t36, (await $.wv([$t31, $t32, $t33], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t36, (await $.wv([$t31, $t32, $t33], "mrYesToAll", C, false)))) {
                await $.wset([$t31, $t32, $t33], "WaitNextConfirm", (await $.wv([$t31, $t32, $t33], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
              }
            }
          }
          await $.stmt((await $.wcall([$t31, $t32, $t33], "CloseContract", [(await $.wv([$t31, $t32, $t33], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))], C)));
          await $.tick();
        }
      }
    } finally {
      await $.stmt($.wcall([$t31, $t32, $t33], "Clear", [], C));
      await $.stmt($.wcall([$t31, $t32, $t33], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "ContractsViewerTitleClick", async function ContractsViewerTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "orderkind": ''};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy($.eq((await $.mv(L0["column"], "Index")), 2))) {
    return L0.result;
  }
  L0["orderkind"] = (await $.call(C, "Copy", [(await $.mv((await $.mv(L0["column"], "Field")), "Name")), 10, (await $.call(C, "Length", [(await $.mv((await $.mv(L0["column"], "Field")), "Name"))]))]));
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  try {
    {
      const $t37 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "ContractsViewer")), "DataSource")), "DataSet"))]));
      if ($.truthy((await $.wv([$t37], "Active", C, false)))) {
        await $.stmt($.wcall([$t37], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t37], "SetVariable", ["OrderKind", (await $.wv([$t37], "OrderKind", { get: async () => L0["orderkind"], set: async (v) => { L0["orderkind"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t37], "Open", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TFrmCreditManager", "miExportClick", async function miExportClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FrmExport")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "miContractStateDrawItem", async function miContractStateDrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t38 = L0["acanvas"];
    const $t39 = (await $.wv([$t38], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t40 = (await $.wv([$t38, $t39], "Font", C, false));
      await $.wset([$t38, $t39, $t40], "Charset", (await $.wv([$t38, $t39, $t40], "DEFAULT_CHARSET", C, false)), C);
      await $.wset([$t38, $t39, $t40], "Name", "Azl Sans Serif", C);
      if ($.truthy((await $.wv([$t38, $t39, $t40], "Default", C, false)))) {
        await $.wset([$t38, $t39, $t40], "Style", [(await $.wv([$t38, $t39, $t40], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t38, $t39], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t38, $t39], "Pen", C, false)), "Color", (await $.wv([$t38, $t39], "clBlack", C, false)));
      await $.wset([$t38, $t39], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t38, $t39], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t38, $t39], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t38, $t39], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t38, $t39], "MoveTo", [(await $.mv((await $.wv([$t38, $t39], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t38, $t39], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t38, $t39], "LineTo", [(await $.mv((await $.wv([$t38, $t39], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t38, $t39], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t38, $t39], "inc", [$.ref(async () => (await $.wv([$t38, $t39], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t41) => { await $.wset([$t38, $t39], "LineBottom", $t41, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t38, $t39], "Pen", C, false)), "Color", (await $.wv([$t38, $t39], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t38, $t39], "MoveTo", [(await $.mv((await $.wv([$t38, $t39], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t38, $t39], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t38, $t39], "LineTo", [(await $.mv((await $.wv([$t38, $t39], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t38, $t39], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t38, $t39], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t38, $t39], "Brush", C, false)), "Color", (await $.wv([$t38, $t39], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t38, $t39], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t38, $t39], "Font", C, false)), "Color", (await $.wv([$t38, $t39], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t38, $t39], "Font", C, false)), "Color", (await $.wv([$t38, $t39], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t38, $t39], "Brush", C, false)), "Color", (await $.wv([$t38, $t39], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t38, $t39], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t38, $t39], "Font", C, false)), "Color", (await $.wv([$t38, $t39], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t38, $t39], "Font", C, false)), "Color", (await $.wv([$t38, $t39], "clGrayText", C, false)));
        }
      }
      await $.wset([$t38, $t39], "Bar", (await $.wv([$t38, $t39], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t38, $t39], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t38, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t42) => { await $.mset((await $.wv([$t38, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t42); }), 22], C)));
      await $.stmt((await $.wcall([$t38, $t39], "FillRect", [(await $.wv([$t38, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t38, $t39], "TextOut", [$.add((await $.mv((await $.wv([$t38, $t39], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t38, $t39], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t38, $t39], "Caption", C, false))], C)));
    }
    await $.wset([$t38, $t39], "SText", (await $.wcall([$t38, $t39], "ShortCutToText", [(await $.wv([$t38, $t39], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t38, $t39], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t38, $t39], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t38, $t39], "TextWidth", [(await $.wv([$t38, $t39], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 7), $.add((await $.mv((await $.wv([$t38, $t39], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t38, $t39], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t38, $t39], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t43 = (await $.wv([$t38, $t39], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t38, $t39, $t43], "Assigned", [(await $.wv([$t38, $t39, $t43], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t38, $t39, $t43], "Checked", C, false)))) {
            await $.mset((await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t38, $t39, $t43], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t38, $t39, $t43], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t38, $t39, $t43], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t38, $t39, $t43], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t38, $t39, $t43], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t38, $t39, $t43], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t44) => { await $.mset((await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t44); }), 2], C)));
            await $.stmt((await $.wcall([$t38, $t39, $t43], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t45) => { await $.mset((await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t45); }), 2], C)));
            await $.stmt((await $.wcall([$t38, $t39, $t43], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t46) => { await $.mset((await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t46); }), 2], C)));
            await $.stmt((await $.wcall([$t38, $t39, $t43], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t47) => { await $.mset((await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t47); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t38, $t39, $t43], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t38, $t39, $t43], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t38, $t39, $t43], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t38, $t39, $t43], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t48) => { await $.mset((await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t48); }), 1], C)));
            await $.stmt((await $.wcall([$t38, $t39, $t43], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t49) => { await $.mset((await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t49); }), 1], C)));
            await $.stmt((await $.wcall([$t38, $t39, $t43], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t50) => { await $.mset((await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t50); }), 1], C)));
            await $.stmt((await $.wcall([$t38, $t39, $t43], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t51) => { await $.mset((await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t51); }), 1], C)));
            if ($.truthy((await $.wv([$t38, $t39, $t43], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t38, $t39, $t43], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t38, $t39, $t43], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t38, $t39, $t43], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t38, $t39, $t43], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t38, $t39, $t43], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t38, $t39, $t43], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t38, $t39, $t43], "Images", C, false)), "Draw", [(await $.wv([$t38, $t39, $t43], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t38, $t39, $t43], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t38, $t39, $t43], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t38, $t39, $t43], "ImageIndex", C, false)), (await $.wv([$t38, $t39, $t43], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TFrmCreditManager", "miSearchPanelClick", async function miSearchPanelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "SearchPanel")), "Visible", $.not((await $.mv((await $.v(C, "SearchPanel")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "SearchActionExecute", async function SearchActionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t52 = L0["sender"];
    await $.wset([$t52], "SearchField", (await $.wcall([$t52], "copy", [(await $.wv([$t52], "Name", C, false)), 5, (await $.wcall([$t52], "length", [(await $.wv([$t52], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    await $.mcall((await $.mv((await $.wv([$t52], "ContractsViewer", C, false)), "SelectedRows")), "Clear", []);
    {
      const $t53 = (await $.wcall([$t52], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t52], "ContractsViewer", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t52, $t53], "SearchRecord", [(await $.wv([$t52, $t53], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t52, $t53], "Text", C, false)), $.add((await $.wv([$t52, $t53], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t52, $t53], "srFromCurrent", C, false)), (await $.wv([$t52, $t53], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t52, $t53], "MessageDlg", [$.add($.add("Record has reached the End of file.", "\r"), "Continue from Top of file?"), (await $.wv([$t52, $t53], "mtInformation", C, false)), [(await $.wv([$t52, $t53], "mbNo", C, false)), (await $.wv([$t52, $t53], "mbYes", C, false))], 0], C)), (await $.wv([$t52, $t53], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t52, $t53], "SearchRecord", [(await $.wv([$t52, $t53], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t52, $t53], "Text", C, false)), $.add((await $.wv([$t52, $t53], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t52, $t53], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t52, $t53], "MessageDlg", ["Record Not Found!", (await $.wv([$t52, $t53], "mtInformation", C, false)), [(await $.wv([$t52, $t53], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "EditContractNoKeyPress", async function EditContractNoKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "SearchActionExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmCreditManager", "EditContractNoExit", async function EditContractNoExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t54 = L0["sender"];
    await $.wset([$t54], "Text", "", C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "N8Click", async function N8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "PaymentsPlane", [(await $.v(C, "GetContractID")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "ContractsViewer")), "DataSource")), "DataSet")), "FieldByName", ["ContractNo"])), "AsString"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "ContractsViewerDrawColumnCell", async function ContractsViewerDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["datacolindex"] = 2;
  L0["imageindex"] = (-(1));
  {
    const $t55 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t55], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t56 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t55], "DataSource", C, false)), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t56, (await $.wv([$t55], "csUnknown", C, false)))) {
          await $.wset([$t55], "ImageIndex", 0, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t56, (await $.wv([$t55], "csCalculated", C, false)))) {
          await $.wset([$t55], "ImageIndex", 1, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t56, (await $.wv([$t55], "csDisabled", C, false)))) {
          await $.wset([$t55], "ImageIndex", 2, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
      }
      if ($.truthy(($.eq((await $.wv([$t55], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t55], "DataColIndex", { get: async () => L0["datacolindex"], set: async (v) => { L0["datacolindex"] = v; }, local: true }, false)))))) {
        await $.stmt((await $.mcall((await $.wv([$t55], "StatusImages", C, false)), "Draw", [(await $.wv([$t55], "Canvas", C, false)), (await $.mv((await $.wv([$t55], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t55], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t55], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t55], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t55], "DefaultDrawColumnCell", [(await $.wv([$t55], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t55], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t55], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t55], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TFrmCreditManager", "miReserveContClick", async function miReserveContClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ReserveCont", [(await $.v(C, "GetContractID"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCreditManager", "N9Click", async function N9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t57 = (await $.mcall((await $.v(C, "TFrmHistory")), "Create", [Self]));
    try {
      await $.stmt($.wcall([$t57], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t57], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
