// Generated from DepositManagerImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DepositManagerImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "DepositManager_TLB", "StdVcl", "ImgList", "ComCtrls", "ToolWin", "ExtCtrls", "Menus", "Grids", "DBGrids", "SBPlgAx50_TLB", "DB", "Buttons", "StdCtrls", "DBViewComboBox", "ActnList", "Oracle", "OracleData", "ComObj", "ComServ", "DataModuleStoredPrograms", "StoredProgramsUnit", "UntReferences", "DepositDataModuleUnit", "NewDepositUnit", "UnitDepositMoney", "WithDrawUnit", "CapitalizationUnit", "UntDataModule", "ProgressUnit", "CollectionUnit", "ExportUnit", "TrafficUnit", "UntimelyWithdrawUnit"]);
  const C = [U];
  U.defClass("TFrmDepositManager", "TActiveForm", {"imagelist": {"name": "ImageList", "type": "TImageList"}, "mainpopupmenu": {"name": "MainPopupMenu", "type": "TPopupMenu"}, "filterpanel": {"name": "FilterPanel", "type": "TPanel"}, "panelmain": {"name": "PanelMain", "type": "TPanel"}, "depositsviewer": {"name": "DepositsViewer", "type": "TDBGrid"}, "minew": {"name": "miNew", "type": "TMenuItem"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "toolbar": {"name": "ToolBar", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "tbfilteration": {"name": "TBFilteration", "type": "TToolButton"}, "miedit": {"name": "miEdit", "type": "TMenuItem"}, "actionsmenu": {"name": "ActionsMenu", "type": "TPopupMenu"}, "mideposit": {"name": "miDeposit", "type": "TMenuItem"}, "miwithdraw": {"name": "miWithdraw", "type": "TMenuItem"}, "micapitalization": {"name": "miCapitalization", "type": "TMenuItem"}, "miuntimelywithdraw": {"name": "miUntimelyWithdraw", "type": "TMenuItem"}, "n1": {"name": "N1", "type": "TMenuItem"}, "miconvertpercents": {"name": "miConvertPercents", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "miselectall": {"name": "miSelectAll", "type": "TMenuItem"}, "tbclosedeposit": {"name": "TBCloseDeposit", "type": "TToolButton"}, "mishowcollection": {"name": "miShowCollection", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "currencyviewer": {"name": "CurrencyViewer", "type": "TDBViewComboBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "typesviewer": {"name": "TypesViewer", "type": "TDBViewComboBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "categoriesviewer": {"name": "CategoriesViewer", "type": "TDBViewComboBox"}, "cbcurrency": {"name": "CBCurrency", "type": "TCheckBox"}, "cbcontracttype": {"name": "CBContractType", "type": "TCheckBox"}, "cbclienttype": {"name": "CBClientType", "type": "TCheckBox"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "filteraction": {"name": "FilterAction", "type": "TAction"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "n5": {"name": "N5", "type": "TMenuItem"}, "miclosecurrentcont": {"name": "miCloseCurrentCont", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "midepositmoney": {"name": "miDepositMoney", "type": "TMenuItem"}, "micapitalizationmoney": {"name": "miCapitalizationMoney", "type": "TMenuItem"}, "miwithdrawmoney": {"name": "miWithdrawMoney", "type": "TMenuItem"}, "miuntimelywithdrawmoney": {"name": "miUntimelyWithdrawMoney", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "miexport": {"name": "miExport", "type": "TMenuItem"}, "mishowadditionaldeposits": {"name": "miShowAdditionalDeposits", "type": "TMenuItem"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "image1": {"name": "Image1", "type": "TImage"}, "image2": {"name": "Image2", "type": "TImage"}, "image3": {"name": "Image3", "type": "TImage"}, "cbnotcalculated": {"name": "CBNotCalculated", "type": "TCheckBox"}, "cbcalcstopped": {"name": "CBCalcStopped", "type": "TCheckBox"}, "cbcalculated": {"name": "CBCalculated", "type": "TCheckBox"}, "statusimages": {"name": "StatusImages", "type": "TImageList"}, "enabledisablecalculation1": {"name": "EnableDisableCalculation1", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "searchpanel": {"name": "SearchPanel", "type": "TGroupBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "editcontractno": {"name": "EditContractNo", "type": "TEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "editcontractaccno": {"name": "EditContractAccNo", "type": "TEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "editinterestaccno": {"name": "EditInterestAccNo", "type": "TEdit"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "editlastwcdate": {"name": "EditLastWCDate", "type": "TEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "editfacticaldebt": {"name": "EditFacticalDebt", "type": "TEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "editcontractaccname": {"name": "EditContractAccName", "type": "TEdit"}, "searchaction": {"name": "SearchAction", "type": "TAction"}, "n8": {"name": "N8", "type": "TMenuItem"}, "fevents": {"name": "FEvents", "type": "IFrmDepositManagerEvents"}}, {});
  U.init(async () => {
    U.const("csUnknown", (-(9)));
    U.const("csCalculated", (-(10)));
    U.const("csDisabled", (-(11)));
  });
  U.method("TFrmDepositManager", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TFrmDepositManager", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TFrmDepositManager", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TFrmDepositManager", "Initialize", null, arguments);
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
  U.method("TFrmDepositManager", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmDepositManager", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmDepositManager", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmDepositManager", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmDepositManager", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmDepositManager", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmDepositManager", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmDepositManager", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmDepositManager", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmDepositManager", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmDepositManager", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmDepositManager", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmDepositManager", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmDepositManager", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmDepositManager", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmDepositManager", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmDepositManager", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmDepositManager", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmDepositManager", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TFrmDepositManager", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TFrmDepositManager", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFrmDepositManager", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFrmDepositManager", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TFrmDepositManager", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TFrmDepositManager", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TFrmDepositManager", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TFrmDepositManager", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFrmDepositManager", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFrmDepositManager", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFrmDepositManager", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TFrmDepositManager", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TFrmDepositManager", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFrmDepositManager", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TFrmDepositManager", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TFrmDepositManager", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFrmDepositManager", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFrmDepositManager", "IFrmDepositManager_Get_Color", async function IFrmDepositManager_Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmDepositManager", "IFrmDepositManager_Get_Font", async function IFrmDepositManager_Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmDepositManager", "IFrmDepositManager__Set_Font", async function IFrmDepositManager__Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TFrmDepositManager", "IFrmDepositManager_Set_Color", async function IFrmDepositManager_Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TFrmDepositManager", "IFrmDepositManager_Set_Font", async function IFrmDepositManager_Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TFrmDepositManager", "Get_Icon", async function Get_Icon(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["imageindex"] = 3;
  await $.stmt((await $.mcall((await $.v(C, "StatusImages")), "GetIcon", [L0["imageindex"], (await $.v(C, "Icon"))])));
  L0["result"] = (await $.mv((await $.v(C, "Icon")), "Handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmDepositManager", "miNewClick", async function miNewClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "NewContract")))) {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DepositsViewer")), "DataSource")), "DataSet")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "ShowReferences", async function ShowReferences(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "FrmReferences")), "ShowModal", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmDepositManager", "SafeRefresh", async function SafeRefresh(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "saveplace": null};
  {
    const $t1 = (await $.mv((await $.mv((await $.v(C, "DepositsViewer")), "DataSource")), "DataSet"));
    await $.wset([$t1], "SavePlace", (await $.wv([$t1], "GetBookmark", C, false)), { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true });
    await $.stmt($.wcall([$t1], "Refresh", [], C));
    try {
      await $.stmt((await $.wcall([$t1], "GotoBookmark", [(await $.wv([$t1], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C)));
    } catch ($t2) {
      $.rethrowControl($t2);
      $.handled($t2);
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmDepositManager", "GetContractID", async function GetContractID(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DepositsViewer")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmDepositManager", "NewContract", async function NewContract(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  {
    const $t3 = (await $.mcall((await $.v(C, "TFrmNewDeposit")), "Create", [Self]));
    try {
      await $.wset([$t3], "FOperationMode", (await $.wv([$t3], "omInsert", C, false)), C);
      await $.wset([$t3], "FContractType", (await $.wcall([$t3], "ContractTypeByName", ["DEPOSIT"], C)), C);
      await $.wset([$t3], "Result", $.eq((await $.wv([$t3], "ShowModal", C, false)), (await $.wv([$t3], "mrOk", C, false))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } finally {
      await $.stmt($.wcall([$t3], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmDepositManager", "EditContract", async function EditContract(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  {
    const $t4 = (await $.mcall((await $.v(C, "TFrmNewDeposit")), "Create", [Self]));
    try {
      await $.wset([$t4], "FOperationMode", (await $.wv([$t4], "omEdit", C, false)), C);
      await $.wset([$t4], "FContractID", (await $.wv([$t4], "GetContractID", C, false)), C);
      await $.wset([$t4], "FContractType", (await $.wcall([$t4], "ContractTypeByName", ["DEPOSIT"], C)), C);
      await $.wset([$t4], "Result", $.eq((await $.wv([$t4], "ShowModal", C, false)), (await $.wv([$t4], "mrOk", C, false))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } finally {
      await $.stmt($.wcall([$t4], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmDepositManager", "DepositMoney", async function DepositMoney(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"contractid": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["contractid"]);
  {
    const $t5 = (await $.mcall((await $.v(C, "TFrmDepositMoney")), "Create", [Self]));
    try {
      await $.wset([$t5], "FContractID", (await $.wv([$t5], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false)), C);
      await $.wset([$t5], "Result", $.eq((await $.wv([$t5], "ShowModal", C, false)), (await $.wv([$t5], "mrOk", C, false))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } finally {
      await $.stmt($.wcall([$t5], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["ContractID"], "kind": "function", "ptypes": ["LongInt"]});
  U.method("TFrmDepositManager", "WithDrawMoney", async function WithDrawMoney(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"contractid": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["contractid"]);
  {
    const $t6 = (await $.mcall((await $.v(C, "TFrmWithDraw")), "Create", [Self]));
    try {
      await $.wset([$t6], "FContractID", (await $.wv([$t6], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false)), C);
      await $.wset([$t6], "Result", $.eq((await $.wv([$t6], "ShowModal", C, false)), (await $.wv([$t6], "mrOk", C, false))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } finally {
      await $.stmt($.wcall([$t6], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["ContractID"], "kind": "function", "ptypes": ["LongInt"]});
  U.method("TFrmDepositManager", "UntimelyWithdraw", async function UntimelyWithdraw(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"contractid": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["contractid"]);
  {
    const $t7 = (await $.mcall((await $.v(C, "TFrmUntimelyWithdraw")), "Create", [Self]));
    try {
      await $.wset([$t7], "FContractID", (await $.wv([$t7], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false)), C);
      await $.wset([$t7], "Result", $.eq((await $.wv([$t7], "ShowModal", C, false)), (await $.wv([$t7], "mrOk", C, false))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } finally {
      await $.stmt($.wcall([$t7], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["ContractID"], "kind": "function", "ptypes": ["Integer"]});
  U.method("TFrmDepositManager", "Capitalization", async function Capitalization(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"contractid": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["contractid"]);
  {
    const $t8 = (await $.mcall((await $.v(C, "TFrmCapitalization")), "Create", [Self]));
    try {
      await $.wset([$t8], "FContractID", (await $.wv([$t8], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false)), C);
      await $.wset([$t8], "Result", $.eq((await $.wv([$t8], "ShowModal", C, false)), (await $.wv([$t8], "mrOK", C, false))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } finally {
      await $.stmt($.wcall([$t8], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["ContractID"], "kind": "function", "ptypes": ["LongInt"]});
  U.method("TFrmDepositManager", "MouseWheelHandler", async function MouseWheelHandler(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  if ($.truthy((await $.mv((await $.v(C, "DepositsViewer")), "Focused")))) {
    await $.mcall((await $.mv((await $.v(C, "DepositsViewer")), "SelectedRows")), "Clear", []);
    {
      const $t9 = (await $.call(C, "TCMMouseWheel", [(await L0["message"].get())]));
      const $t10 = (await $.mv((await $.mv((await $.wv([$t9], "DepositsViewer", C, false)), "DataSource")), "DataSet"));
      if ($.truthy($.lt((await $.wv([$t9, $t10], "WheelDelta", C, false)), 0))) {
        await $.stmt($.wcall([$t9, $t10], "Next", [], C));
      } else {
        await $.stmt($.wcall([$t9, $t10], "Prior", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TFrmDepositManager", "ConvertDeposits", async function ConvertDeposits(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"contractid": $.copyArg(p0), "hdate": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["contractid", "hdate"]);
  {
    const $t11 = (await $.mv((await $.v(C, "DataModDeposits")), "DepositsConvPackage"));
    await $.wset([$t11], "Result", (await $.wcall([$t11], "CallIntegerFunction", ["ConverDeposits", [(await $.wv([$t11], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false)), (await $.wv([$t11], "HDate", { get: async () => L0["hdate"], set: async (v) => { L0["hdate"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["ContractID", "HDate"], "kind": "function", "ptypes": ["LongInt", "TDateTime"]});
  U.method("TFrmDepositManager", "ShowCollections", async function ShowCollections(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"contractid": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["contractid"]);
  {
    const $t12 = (await $.mcall((await $.v(C, "TFrmCollection")), "Create", [Self]));
    try {
      await $.wset([$t12], "FContractID", (await $.wv([$t12], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false)), C);
      await $.wset([$t12], "Result", $.eq((await $.wv([$t12], "ShowModal", C, false)), (await $.wv([$t12], "mrOk", C, false))), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } finally {
      await $.stmt($.wcall([$t12], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["ContractID"], "kind": "function", "ptypes": ["LongInt"]});
  U.method("TFrmDepositManager", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FrmReferences", (await $.mcall((await $.v(C, "TFrmReferences")), "Create", [Self])));
  await $.set(C, "DataModuleRefer", (await $.mcall((await $.v(C, "TDataModuleRefer")), "Create", [Self])));
  await $.set(C, "DepositDataModule", (await $.mcall((await $.v(C, "TDepositDataModule")), "Create", [Self])));
  await $.mset((await $.v(C, "DepositsViewer")), "DataSource", (await $.mv((await $.v(C, "DepositDataModule")), "DataSrcDeposit")));
  await $.set(C, "ProgressForm", (await $.mcall((await $.v(C, "TProgressForm")), "Create", [Self])));
  await $.set(C, "FrmExport", (await $.mcall((await $.v(C, "TFrmExport")), "Create", [Self])));
  await $.set(C, "DataModDeposits", (await $.mcall((await $.v(C, "TDataModDeposits")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "ToolButton11Click", async function ToolButton11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "ShowReferences", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DepositsViewer")), "SelectedRows")), "Clear", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DepositsViewer")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "miEditClick", async function miEditClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "EditContract")))) {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DepositsViewer")), "DataSource")), "DataSet")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "TBFilterationClick", async function TBFilterationClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FilterPanel")), "Visible", $.not((await $.mv((await $.v(C, "FilterPanel")), "Visible"))));
  await $.mset((await $.v(C, "TBFilteration")), "Down", (await $.mv((await $.v(C, "FilterPanel")), "Visible")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "miDepositClick", async function miDepositClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "DepositMoney", [(await $.v(C, "GetContractID"))])))) {
    await $.stmt($.call(C, "SafeRefresh", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "miWithdrawClick", async function miWithdrawClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "WithDrawMoney", [(await $.v(C, "GetContractID"))])))) {
    await $.stmt($.call(C, "SafeRefresh", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "miCapitalizationClick", async function miCapitalizationClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "Capitalization", [(await $.v(C, "GetContractID"))])))) {
    await $.stmt($.call(C, "SafeRefresh", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "miConvertPercentsClick", async function miConvertPercentsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "selrowscount": 0, "selrowindex": 0, "aborted": 0, "convresult": 0, "capitalizationcount": 0, "withdrawcount": 0, "errmessage": '', "hdate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["noerrortitle"] = " Converting Percents succesful processed.";
  L0["resultitle"] = " \"Errors\" Found On Converting Percents! ";
  L0["capitalizationstitle"] = " %d Capitalizations Processed .";
  L0["withdrawtitle"] = " %d Withdraws Processed .";
  {
    const $t13 = (await $.v(C, "DepositsViewer"));
    const $t14 = (await $.wv([$t13], "SelectedRows", C, false));
    const $t15 = (await $.mv((await $.wv([$t13, $t14], "DataSource", C, false)), "DataSet"));
    await $.wset([$t13, $t14, $t15], "Aborted", 0, { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true });
    await $.wset([$t13, $t14, $t15], "CapitalizationCount", 0, { get: async () => L0["capitalizationcount"], set: async (v) => { L0["capitalizationcount"] = v; }, local: true });
    await $.wset([$t13, $t14, $t15], "WithdrawCount", 0, { get: async () => L0["withdrawcount"], set: async (v) => { L0["withdrawcount"] = v; }, local: true });
    await $.wset([$t13, $t14, $t15], "HDate", (await $.wv([$t13, $t14, $t15], "GetBankDate", C, false)), { get: async () => L0["hdate"], set: async (v) => { L0["hdate"] = v; }, local: true });
    await $.wset([$t13, $t14, $t15], "SelRowsCount", (await $.wv([$t13, $t14, $t15], "Count", C, false)), { get: async () => L0["selrowscount"], set: async (v) => { L0["selrowscount"] = v; }, local: true });
    if ($.truthy($.ne((await $.wcall([$t13, $t14, $t15], "MessageDlg", ["Convert Percents Now?", (await $.wv([$t13, $t14, $t15], "mtConfirmation", C, false)), [(await $.wv([$t13, $t14, $t15], "mbYes", C, false)), (await $.wv([$t13, $t14, $t15], "mbNo", C, false))], 0], C)), (await $.wv([$t13, $t14, $t15], "mrYes", C, false))))) {
      $.abort();
    }
    {
      const $t16 = (await $.wv([$t13, $t14, $t15], "ProgressForm", C, false));
      const $t17 = (await $.wv([$t13, $t14, $t15, $t16], "ProgressBar", C, false));
      await $.wset([$t13, $t14, $t15, $t16, $t17], "Max", (await $.wv([$t13, $t14, $t15, $t16, $t17], "SelRowsCount", { get: async () => L0["selrowscount"], set: async (v) => { L0["selrowscount"] = v; }, local: true }, false)), C);
      await $.wset([$t13, $t14, $t15, $t16, $t17], "Position", 0, C);
      await $.mcall((await $.mv((await $.wv([$t13, $t14, $t15, $t16, $t17], "DetailsMemo", C, false)), "Lines")), "Clear", []);
      await $.mcall((await $.wv([$t13, $t14, $t15, $t16, $t17], "DetailsMemo", C, false)), "Hide", []);
      await $.mset((await $.wv([$t13, $t14, $t15, $t16, $t17], "BtnDetails", C, false)), "Enabled", (await $.wv([$t13, $t14, $t15, $t16, $t17], "False", C, false)));
      await $.mcall((await $.wv([$t13, $t14, $t15, $t16, $t17], "ProgressForm", C, false)), "Show", []);
      await $.mset((await $.wv([$t13, $t14, $t15, $t16, $t17], "STContractsCount", C, false)), "Caption", (await $.wcall([$t13, $t14, $t15, $t16, $t17], "Format", ["Müqavilələrin sayı %d", [(await $.wv([$t13, $t14, $t15, $t16, $t17], "SelRowsCount", { get: async () => L0["selrowscount"], set: async (v) => { L0["selrowscount"] = v; }, local: true }, false))]], C)));
    }
    await $.mcall((await $.wv([$t13, $t14, $t15], "Application", C, false)), "ProcessMessages", []);
    try {
      { const $t18 = $.sub((await $.wv([$t13, $t14, $t15], "SelRowsCount", { get: async () => L0["selrowscount"], set: async (v) => { L0["selrowscount"] = v; }, local: true }, false)), 1);
        await $.wset([$t13, $t14, $t15], "SelRowIndex", 0, { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true });
        let $t19 = true;
        for (;;) {
          if (!$t19) { await $.wset([$t13, $t14, $t15], "SelRowIndex", $.succ((await $.wv([$t13, $t14, $t15], "SelRowIndex", { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true }, false)), 1), { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true }); }
          $t19 = false;
          if (!($.ord((await $.wv([$t13, $t14, $t15], "SelRowIndex", { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true }, false))) <= $.ord($t18))) break;
          try {
            await $.stmt((await $.wcall([$t13, $t14, $t15], "GotoBookmark", [(await $.wcall([$t13, $t14, $t15], "Pointer", [(await $.idx((await $.wv([$t13, $t14, $t15], "Items", C, false)), [(await $.wv([$t13, $t14, $t15], "SelRowIndex", { get: async () => L0["selrowindex"], set: async (v) => { L0["selrowindex"] = v; }, local: true }, false))]))], C))], C)));
            await $.mcall((await $.mv((await $.wv([$t13, $t14, $t15], "ProgressForm", C, false)), "ProgressBar")), "StepIt", []);
            await $.mset((await $.mv((await $.wv([$t13, $t14, $t15], "ProgressForm", C, false)), "CurrentDeposit")), "Caption", (await $.mv((await $.wcall([$t13, $t14, $t15], "FieldByName", ["ContractNo"], C)), "AsString")));
            await $.wset([$t13, $t14, $t15], "ConvResult", (await $.wcall([$t13, $t14, $t15], "ConvertDeposits", [(await $.wv([$t13, $t14, $t15], "GetContractID", C, false)), (await $.wv([$t13, $t14, $t15], "HDate", { get: async () => L0["hdate"], set: async (v) => { L0["hdate"] = v; }, local: true }, false))], C)), { get: async () => L0["convresult"], set: async (v) => { L0["convresult"] = v; }, local: true });
            { const $t21 = (await $.wv([$t13, $t14, $t15], "ConvResult", { get: async () => L0["convresult"], set: async (v) => { L0["convresult"] = v; }, local: true }, false));
              if ($.eq($t21, 2)) {
                await $.stmt((await $.wcall([$t13, $t14, $t15], "INC", [$.ref(async () => (await $.wv([$t13, $t14, $t15], "WithdrawCount", { get: async () => L0["withdrawcount"], set: async (v) => { L0["withdrawcount"] = v; }, local: true }, false)), async ($t22) => { await $.wset([$t13, $t14, $t15], "WithdrawCount", $t22, { get: async () => L0["withdrawcount"], set: async (v) => { L0["withdrawcount"] = v; }, local: true }); })], C)));
              }
              else if ($.eq($t21, 1)) {
                await $.stmt((await $.wcall([$t13, $t14, $t15], "INC", [$.ref(async () => (await $.wv([$t13, $t14, $t15], "CapitalizationCount", { get: async () => L0["capitalizationcount"], set: async (v) => { L0["capitalizationcount"] = v; }, local: true }, false)), async ($t23) => { await $.wset([$t13, $t14, $t15], "CapitalizationCount", $t23, { get: async () => L0["capitalizationcount"], set: async (v) => { L0["capitalizationcount"] = v; }, local: true }); })], C)));
              }
            }
          } catch ($t20) {
            $.rethrowControl($t20);
            if ($.excIs($t20, "EOracleError")) {
              L0["e"] = $.exc($t20);
              await $.wset([$t13, $t14, $t15], "ErrMessage", (await $.mv((await $.wv([$t13, $t14, $t15], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), { get: async () => L0["errmessage"], set: async (v) => { L0["errmessage"] = v; }, local: true });
              await $.wset([$t13, $t14, $t15], "ErrMessage", (await $.wcall([$t13, $t14, $t15], "copy", [(await $.wv([$t13, $t14, $t15], "ErrMessage", { get: async () => L0["errmessage"], set: async (v) => { L0["errmessage"] = v; }, local: true }, false)), 0, (await $.wcall([$t13, $t14, $t15], "Pos", ["^", (await $.wv([$t13, $t14, $t15], "ErrMessage", { get: async () => L0["errmessage"], set: async (v) => { L0["errmessage"] = v; }, local: true }, false))], C))], C)), { get: async () => L0["errmessage"], set: async (v) => { L0["errmessage"] = v; }, local: true });
              await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t13, $t14, $t15], "ProgressForm", C, false)), "DetailsMemo")), "Lines")), "Add", [$.add($.add($.add($.add(" #", (await $.mv((await $.wcall([$t13, $t14, $t15], "FieldByName", ["ContractNo"], C)), "AsString"))), " << "), (await $.wv([$t13, $t14, $t15], "ErrMessage", { get: async () => L0["errmessage"], set: async (v) => { L0["errmessage"] = v; }, local: true }, false))), " >> ")])));
              await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t13, $t14, $t15], "ProgressForm", C, false)), "DetailsMemo")), "Lines")), "Add", [""])));
              await $.stmt((await $.wcall([$t13, $t14, $t15], "Inc", [$.ref(async () => (await $.wv([$t13, $t14, $t15], "Aborted", { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true }, false)), async ($t24) => { await $.wset([$t13, $t14, $t15], "Aborted", $t24, { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true }); })], C)));
              continue;
            }
            else { throw $t20; }
          }
          await $.tick();
        }
      }
    } finally {
      {
        const $t25 = (await $.wv([$t13, $t14, $t15], "ProgressForm", C, false));
        await $.mset((await $.wv([$t13, $t14, $t15, $t25], "ProgressBar", C, false)), "Position", 0);
        if ($.truthy($.ne((await $.wv([$t13, $t14, $t15, $t25], "Aborted", { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true }, false)), 0))) {
          await $.mset((await $.mv((await $.wv([$t13, $t14, $t15, $t25], "LblResult", C, false)), "Font")), "Color", (await $.wv([$t13, $t14, $t15, $t25], "clRed", C, false)));
          await $.mset((await $.wv([$t13, $t14, $t15, $t25], "LblResult", C, false)), "Caption", $.add((await $.wcall([$t13, $t14, $t15, $t25], "IntToStr", [(await $.wv([$t13, $t14, $t15, $t25], "Aborted", { get: async () => L0["aborted"], set: async (v) => { L0["aborted"] = v; }, local: true }, false))], C)), (await $.wv([$t13, $t14, $t15, $t25], "ResulTitle", { get: async () => L0["resultitle"], set: async (v) => { L0["resultitle"] = v; }, local: true }, false))));
        } else {
          await $.mset((await $.mv((await $.wv([$t13, $t14, $t15, $t25], "LblResult", C, false)), "Font")), "Color", (await $.wv([$t13, $t14, $t15, $t25], "clGreen", C, false)));
          await $.mset((await $.wv([$t13, $t14, $t15, $t25], "LblResult", C, false)), "Caption", (await $.wv([$t13, $t14, $t15, $t25], "NoErrorTitle", { get: async () => L0["noerrortitle"], set: async (v) => { L0["noerrortitle"] = v; }, local: true }, false)));
        }
        await $.mset((await $.wv([$t13, $t14, $t15, $t25], "STCapitalizationsCount", C, false)), "Caption", (await $.wcall([$t13, $t14, $t15, $t25], "Format", [(await $.wv([$t13, $t14, $t15, $t25], "CapitalizationsTitle", { get: async () => L0["capitalizationstitle"], set: async (v) => { L0["capitalizationstitle"] = v; }, local: true }, false)), [(await $.wv([$t13, $t14, $t15, $t25], "CapitalizationCount", { get: async () => L0["capitalizationcount"], set: async (v) => { L0["capitalizationcount"] = v; }, local: true }, false))]], C)));
        await $.mset((await $.wv([$t13, $t14, $t15, $t25], "STWithdrawsCount", C, false)), "Caption", (await $.wcall([$t13, $t14, $t15, $t25], "Format", [(await $.wv([$t13, $t14, $t15, $t25], "WithdrawTitle", { get: async () => L0["withdrawtitle"], set: async (v) => { L0["withdrawtitle"] = v; }, local: true }, false)), [(await $.wv([$t13, $t14, $t15, $t25], "WithdrawCount", { get: async () => L0["withdrawcount"], set: async (v) => { L0["withdrawcount"] = v; }, local: true }, false))]], C)));
        await $.mset((await $.wv([$t13, $t14, $t15, $t25], "BtnDetails", C, false)), "Enabled", (await $.wv([$t13, $t14, $t15, $t25], "True", C, false)));
        await $.mset((await $.wv([$t13, $t14, $t15, $t25], "CurrentDeposit", C, false)), "Caption", "");
      }
      await $.stmt($.wcall([$t13, $t14, $t15], "SafeRefresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "miSelectAllClick", async function miSelectAllClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t26 = (await $.v(C, "DepositsViewer"));
    const $t27 = (await $.wv([$t26], "SelectedRows", C, false));
    const $t28 = (await $.mv((await $.wv([$t26, $t27], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t26, $t27, $t28], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t26, $t27, $t28], "First", [], C));
      while ($.truthy($.not((await $.wv([$t26, $t27, $t28], "Eof", C, false))))) {
        await $.wset([$t26, $t27, $t28], "CurrentRowSelected", (await $.wv([$t26, $t27, $t28], "True", C, false)), C);
        await $.stmt($.wcall([$t26, $t27, $t28], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t26, $t27, $t28], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "TBCloseDepositClick", async function TBCloseDepositClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0, "waitnextconfirm": false, "contractid": 0, "contractname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["waitnextconfirm"] = true;
  {
    const $t29 = (await $.v(C, "DepositsViewer"));
    const $t30 = (await $.wv([$t29], "SelectedRows", C, false));
    const $t31 = (await $.mv((await $.wv([$t29, $t30], "DataSource", C, false)), "DataSet"));
    try {
      { const $t32 = $.sub((await $.wv([$t29, $t30, $t31], "Count", C, false)), 1);
        await $.wset([$t29, $t30, $t31], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t33 = true;
        for (;;) {
          if (!$t33) { await $.wset([$t29, $t30, $t31], "Index", $.succ((await $.wv([$t29, $t30, $t31], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t33 = false;
          if (!($.ord((await $.wv([$t29, $t30, $t31], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t32))) break;
          await $.stmt((await $.wcall([$t29, $t30, $t31], "GotoBookmark", [(await $.wcall([$t29, $t30, $t31], "Pointer", [(await $.idx((await $.wv([$t29, $t30, $t31], "Items", C, false)), [(await $.wv([$t29, $t30, $t31], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t29, $t30, $t31], "ContractID", (await $.wv([$t29, $t30, $t31], "GetContractID", C, false)), { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true });
          await $.wset([$t29, $t30, $t31], "ContractName", (await $.mv((await $.wcall([$t29, $t30, $t31], "FieldByName", ["ContractNo"], C)), "AsString")), { get: async () => L0["contractname"], set: async (v) => { L0["contractname"] = v; }, local: true });
          if ($.truthy((await $.wv([$t29, $t30, $t31], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t34 = (await $.wcall([$t29, $t30, $t31], "MessageDlg", [(await $.wcall([$t29, $t30, $t31], "Format", ["Are You Sure to Close  #%S", [(await $.wv([$t29, $t30, $t31], "ContractName", { get: async () => L0["contractname"], set: async (v) => { L0["contractname"] = v; }, local: true }, false))]], C)), (await $.wv([$t29, $t30, $t31], "mtConfirmation", C, false)), [(await $.wv([$t29, $t30, $t31], "mbYes", C, false)), (await $.wv([$t29, $t30, $t31], "mbNo", C, false)), (await $.wv([$t29, $t30, $t31], "mbCancel", C, false)), (await $.wv([$t29, $t30, $t31], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t34, (await $.wv([$t29, $t30, $t31], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t34, (await $.wv([$t29, $t30, $t31], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t34, (await $.wv([$t29, $t30, $t31], "mrYesToAll", C, false)))) {
                await $.wset([$t29, $t30, $t31], "WaitNextConfirm", (await $.wv([$t29, $t30, $t31], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
              }
            }
          }
          await $.stmt((await $.wcall([$t29, $t30, $t31], "CloseDeposit", [(await $.wv([$t29, $t30, $t31], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))], C)));
          await $.tick();
        }
      }
    } finally {
      await $.stmt($.wcall([$t29, $t30, $t31], "Clear", [], C));
      await $.stmt($.wcall([$t29, $t30, $t31], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "miShowCollectionClick", async function miShowCollectionClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ShowCollections", [(await $.v(C, "GetContractID"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "FilterActionExecute", async function FilterActionExecute(Self, p0) {
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
    const $t35 = (await $.v(C, "DataModDeposits"));
    await $.wset([$t35], "CurrencyF", (await $.wcall([$t35], "CheckFiltred", [(await $.mv((await $.wv([$t35], "CBCurrency", C, false)), "Checked")), (await $.wv([$t35], "CurrencyFilter", { get: async () => L0["currencyfilter"], set: async (v) => { L0["currencyfilter"] = v; }, local: true }, false)), [(await $.mv((await $.mcall((await $.wv([$t35], "CurrencysData", C, false)), "FieldByName", ["CurrencyID"])), "AsInteger"))]], { get: async () => L0["checkfiltred"], set: async (v) => { L0["checkfiltred"] = v; }, local: true })), { get: async () => L0["currencyf"], set: async (v) => { L0["currencyf"] = v; }, local: true });
    await $.wset([$t35], "ContTypeF", (await $.wcall([$t35], "CheckFiltred", [(await $.mv((await $.wv([$t35], "CBContractType", C, false)), "Checked")), (await $.wv([$t35], "ContractTypeFilter", { get: async () => L0["contracttypefilter"], set: async (v) => { L0["contracttypefilter"] = v; }, local: true }, false)), [(await $.mv((await $.mcall((await $.wv([$t35], "DepositTypes", C, false)), "FieldByName", ["ID"])), "AsInteger"))]], { get: async () => L0["checkfiltred"], set: async (v) => { L0["checkfiltred"] = v; }, local: true })), { get: async () => L0["conttypef"], set: async (v) => { L0["conttypef"] = v; }, local: true });
    await $.wset([$t35], "CustTypeF", (await $.wcall([$t35], "CheckFiltred", [(await $.mv((await $.wv([$t35], "CBClientType", C, false)), "Checked")), (await $.wv([$t35], "CustomerTypeFilter", { get: async () => L0["customertypefilter"], set: async (v) => { L0["customertypefilter"] = v; }, local: true }, false)), [(await $.mv((await $.mcall((await $.wv([$t35], "CategoriesData", C, false)), "FieldByName", ["ID"])), "AsInteger"))]], { get: async () => L0["checkfiltred"], set: async (v) => { L0["checkfiltred"] = v; }, local: true })), { get: async () => L0["custtypef"], set: async (v) => { L0["custtypef"] = v; }, local: true });
    await $.wset([$t35], "S_Calculated", $.mul((await $.wcall([$t35], "Word", [(await $.mv((await $.wv([$t35], "CBCalculated", C, false)), "Checked"))], C)), (await $.mv((await $.wv([$t35], "CBCalculated", C, false)), "Tag"))), { get: async () => L0["s_calculated"], set: async (v) => { L0["s_calculated"] = v; }, local: true });
    await $.wset([$t35], "S_Disabled", $.mul((await $.wcall([$t35], "Word", [(await $.mv((await $.wv([$t35], "CBNotCalculated", C, false)), "Checked"))], C)), (await $.mv((await $.wv([$t35], "CBNotCalculated", C, false)), "Tag"))), { get: async () => L0["s_disabled"], set: async (v) => { L0["s_disabled"] = v; }, local: true });
    await $.wset([$t35], "S_Unknown", $.mul((await $.wcall([$t35], "Word", [(await $.mv((await $.wv([$t35], "CBCalcStopped", C, false)), "Checked"))], C)), (await $.mv((await $.wv([$t35], "CBCalcStopped", C, false)), "Tag"))), { get: async () => L0["s_unknown"], set: async (v) => { L0["s_unknown"] = v; }, local: true });
    await $.wset([$t35], "HasStatusFilter", (await $.wv([$t35], "True", C, false)), { get: async () => L0["hasstatusfilter"], set: async (v) => { L0["hasstatusfilter"] = v; }, local: true });
    await $.wset([$t35], "StatusF", (await $.wcall([$t35], "CheckFiltred", [(await $.wv([$t35], "HasStatusFilter", { get: async () => L0["hasstatusfilter"], set: async (v) => { L0["hasstatusfilter"] = v; }, local: true }, false)), (await $.wv([$t35], "StatusFilter", { get: async () => L0["statusfilter"], set: async (v) => { L0["statusfilter"] = v; }, local: true }, false)), [(await $.wv([$t35], "S_Calculated", { get: async () => L0["s_calculated"], set: async (v) => { L0["s_calculated"] = v; }, local: true }, false)), (await $.wv([$t35], "S_Unknown", { get: async () => L0["s_unknown"], set: async (v) => { L0["s_unknown"] = v; }, local: true }, false)), (await $.wv([$t35], "S_Disabled", { get: async () => L0["s_disabled"], set: async (v) => { L0["s_disabled"] = v; }, local: true }, false))]], { get: async () => L0["checkfiltred"], set: async (v) => { L0["checkfiltred"] = v; }, local: true })), { get: async () => L0["statusf"], set: async (v) => { L0["statusf"] = v; }, local: true });
    await $.wset([$t35], "FilterStr", (await $.wv([$t35], "CurrencyF", { get: async () => L0["currencyf"], set: async (v) => { L0["currencyf"] = v; }, local: true }, false)), { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true });
    if ($.truthy($.ne((await $.wv([$t35], "ContTypeF", { get: async () => L0["conttypef"], set: async (v) => { L0["conttypef"] = v; }, local: true }, false)), ""))) {
      if ($.truthy($.eq((await $.wv([$t35], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false)), ""))) {
        await $.wset([$t35], "FilterStr", (await $.wv([$t35], "ContTypeF", { get: async () => L0["conttypef"], set: async (v) => { L0["conttypef"] = v; }, local: true }, false)), { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true });
      } else {
        await $.wset([$t35], "FilterStr", $.add($.add((await $.wv([$t35], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false)), "AND"), (await $.wv([$t35], "ContTypeF", { get: async () => L0["conttypef"], set: async (v) => { L0["conttypef"] = v; }, local: true }, false))), { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true });
      }
    }
    if ($.truthy($.ne((await $.wv([$t35], "CustTypeF", { get: async () => L0["custtypef"], set: async (v) => { L0["custtypef"] = v; }, local: true }, false)), ""))) {
      if ($.truthy($.eq((await $.wv([$t35], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false)), ""))) {
        await $.wset([$t35], "FilterStr", (await $.wv([$t35], "CustTypeF", { get: async () => L0["custtypef"], set: async (v) => { L0["custtypef"] = v; }, local: true }, false)), { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true });
      } else {
        await $.wset([$t35], "FilterStr", $.add($.add((await $.wv([$t35], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false)), "AND"), (await $.wv([$t35], "CustTypeF", { get: async () => L0["custtypef"], set: async (v) => { L0["custtypef"] = v; }, local: true }, false))), { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true });
      }
    }
    if ($.truthy($.ne((await $.wv([$t35], "StatusF", { get: async () => L0["statusf"], set: async (v) => { L0["statusf"] = v; }, local: true }, false)), ""))) {
      if ($.truthy($.eq((await $.wv([$t35], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false)), ""))) {
        await $.wset([$t35], "FilterStr", (await $.wv([$t35], "StatusF", { get: async () => L0["statusf"], set: async (v) => { L0["statusf"] = v; }, local: true }, false)), { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true });
      } else {
        await $.wset([$t35], "FilterStr", $.add($.add((await $.wv([$t35], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false)), "AND"), (await $.wv([$t35], "StatusF", { get: async () => L0["statusf"], set: async (v) => { L0["statusf"] = v; }, local: true }, false))), { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true });
      }
    }
  }
  {
    const $t36 = (await $.mv((await $.mv((await $.v(C, "DepositsViewer")), "DataSource")), "DataSet"));
    await $.wset([$t36], "Filtered", (await $.wv([$t36], "False", C, false)), C);
    await $.wset([$t36], "Filter", (await $.wv([$t36], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false)), C);
    await $.wset([$t36], "Filtered", (await $.wv([$t36], "True", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "miExportClick", async function miExportClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FrmExport")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "miShowAdditionalDepositsClick", async function miShowAdditionalDepositsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t37 = (await $.mcall((await $.v(C, "TFrmTraffic")), "Create", [Self]));
    try {
      await $.wset([$t37], "FContractID", (await $.wv([$t37], "GetContractID", C, false)), C);
      await $.stmt($.wcall([$t37], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t37], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "miUntimelyWithdrawClick", async function miUntimelyWithdrawClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "UntimelyWithdraw", [(await $.v(C, "GetContractID"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "DepositsViewerDrawColumnCell", async function DepositsViewerDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["datacolindex"] = 1;
  L0["imageindex"] = (-(1));
  {
    const $t38 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t38], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t39 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t38], "DataSource", C, false)), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t39, (await $.wv([$t38], "csUnknown", C, false)))) {
          await $.wset([$t38], "ImageIndex", 0, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t39, (await $.wv([$t38], "csCalculated", C, false)))) {
          await $.wset([$t38], "ImageIndex", 1, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t39, (await $.wv([$t38], "csDisabled", C, false)))) {
          await $.wset([$t38], "ImageIndex", 2, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
      }
      if ($.truthy(($.eq((await $.wv([$t38], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)))) {
        await $.stmt((await $.mcall((await $.wv([$t38], "StatusImages", C, false)), "Draw", [(await $.wv([$t38], "Canvas", C, false)), (await $.mv((await $.wv([$t38], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t38], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t38], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t38], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t38], "DefaultDrawColumnCell", [(await $.wv([$t38], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t38], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t38], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t38], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TFrmDepositManager", "DepositsViewerTitleClick", async function DepositsViewerTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "orderkind": ''};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy($.eq((await $.mv(L0["column"], "Index")), 1))) {
    return L0.result;
  }
  L0["orderkind"] = (await $.call(C, "Copy", [(await $.mv((await $.mv(L0["column"], "Field")), "Name")), 9, (await $.call(C, "Length", [(await $.mv((await $.mv(L0["column"], "Field")), "Name"))]))]));
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  try {
    {
      const $t40 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DepositsViewer")), "DataSource")), "DataSet"))]));
      if ($.truthy((await $.wv([$t40], "Active", C, false)))) {
        await $.stmt($.wcall([$t40], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t40], "SetVariable", ["OrderClause", (await $.wv([$t40], "OrderKind", { get: async () => L0["orderkind"], set: async (v) => { L0["orderkind"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t40], "Open", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TFrmDepositManager", "EnableDisableCalculation1Click", async function EnableDisableCalculation1Click(Self, p0) {
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
  U.method("TFrmDepositManager", "miNewDrawItem", async function miNewDrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t41 = L0["acanvas"];
    const $t42 = (await $.wv([$t41], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t43 = (await $.mv((await $.wv([$t41, $t42], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Font"));
      await $.wset([$t41, $t42, $t43], "Charset", (await $.wv([$t41, $t42, $t43], "DEFAULT_CHARSET", C, false)), C);
      await $.wset([$t41, $t42, $t43], "Name", "Azl Sans Serif", C);
      if ($.truthy((await $.wv([$t41, $t42, $t43], "Default", C, false)))) {
        await $.wset([$t41, $t42, $t43], "Style", [(await $.wv([$t41, $t42, $t43], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t41, $t42], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t41, $t42], "Pen", C, false)), "Color", (await $.wv([$t41, $t42], "clBlack", C, false)));
      await $.wset([$t41, $t42], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t41, $t42], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t41, $t42], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t41, $t42], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t41, $t42], "MoveTo", [(await $.mv((await $.wv([$t41, $t42], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t41, $t42], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t41, $t42], "LineTo", [(await $.mv((await $.wv([$t41, $t42], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t41, $t42], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t41, $t42], "inc", [$.ref(async () => (await $.wv([$t41, $t42], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t44) => { await $.wset([$t41, $t42], "LineBottom", $t44, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t41, $t42], "Pen", C, false)), "Color", (await $.wv([$t41, $t42], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t41, $t42], "MoveTo", [(await $.mv((await $.wv([$t41, $t42], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t41, $t42], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t41, $t42], "LineTo", [(await $.mv((await $.wv([$t41, $t42], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t41, $t42], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t41, $t42], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t41, $t42], "Brush", C, false)), "Color", (await $.wv([$t41, $t42], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t41, $t42], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t41, $t42], "Font", C, false)), "Color", (await $.wv([$t41, $t42], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t41, $t42], "Font", C, false)), "Color", (await $.wv([$t41, $t42], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t41, $t42], "Brush", C, false)), "Color", (await $.wv([$t41, $t42], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t41, $t42], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t41, $t42], "Font", C, false)), "Color", (await $.wv([$t41, $t42], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t41, $t42], "Font", C, false)), "Color", (await $.wv([$t41, $t42], "clGrayText", C, false)));
        }
      }
      await $.wset([$t41, $t42], "Bar", (await $.wv([$t41, $t42], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t41, $t42], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t41, $t42], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t45) => { await $.mset((await $.wv([$t41, $t42], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t45); }), 22], C)));
      await $.stmt((await $.wcall([$t41, $t42], "FillRect", [(await $.wv([$t41, $t42], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t41, $t42], "TextOut", [$.add((await $.mv((await $.wv([$t41, $t42], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t41, $t42], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t41, $t42], "Caption", C, false))], C)));
    }
    await $.wset([$t41, $t42], "SText", (await $.wcall([$t41, $t42], "ShortCutToText", [(await $.wv([$t41, $t42], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t41, $t42], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t41, $t42], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t41, $t42], "TextWidth", [(await $.wv([$t41, $t42], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 7), $.add((await $.mv((await $.wv([$t41, $t42], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t41, $t42], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t41, $t42], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t46 = (await $.wv([$t41, $t42], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t41, $t42, $t46], "Assigned", [(await $.wv([$t41, $t42, $t46], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t41, $t42, $t46], "Checked", C, false)))) {
            await $.mset((await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t41, $t42, $t46], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t41, $t42, $t46], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t41, $t42, $t46], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t41, $t42, $t46], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t41, $t42, $t46], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t41, $t42, $t46], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t47) => { await $.mset((await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t47); }), 2], C)));
            await $.stmt((await $.wcall([$t41, $t42, $t46], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t48) => { await $.mset((await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t48); }), 2], C)));
            await $.stmt((await $.wcall([$t41, $t42, $t46], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t49) => { await $.mset((await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t49); }), 2], C)));
            await $.stmt((await $.wcall([$t41, $t42, $t46], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t50) => { await $.mset((await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t50); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t41, $t42, $t46], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t41, $t42, $t46], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t41, $t42, $t46], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t41, $t42, $t46], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t51) => { await $.mset((await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t51); }), 1], C)));
            await $.stmt((await $.wcall([$t41, $t42, $t46], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t52) => { await $.mset((await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t52); }), 1], C)));
            await $.stmt((await $.wcall([$t41, $t42, $t46], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t53) => { await $.mset((await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t53); }), 1], C)));
            await $.stmt((await $.wcall([$t41, $t42, $t46], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t54) => { await $.mset((await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t54); }), 1], C)));
            if ($.truthy((await $.wv([$t41, $t42, $t46], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t41, $t42, $t46], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t41, $t42, $t46], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t41, $t42, $t46], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t41, $t42, $t46], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t41, $t42, $t46], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t41, $t42, $t46], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t41, $t42, $t46], "Images", C, false)), "Draw", [(await $.wv([$t41, $t42, $t46], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t41, $t42, $t46], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t41, $t42, $t46], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t41, $t42, $t46], "ImageIndex", C, false)), (await $.wv([$t41, $t42, $t46], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TFrmDepositManager", "SearchActionExecute", async function SearchActionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t55 = L0["sender"];
    await $.wset([$t55], "SearchField", (await $.wcall([$t55], "copy", [(await $.wv([$t55], "Name", C, false)), 5, (await $.wcall([$t55], "length", [(await $.wv([$t55], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    await $.mcall((await $.mv((await $.wv([$t55], "DepositsViewer", C, false)), "SelectedRows")), "Clear", []);
    {
      const $t56 = (await $.wcall([$t55], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t55], "DepositsViewer", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t55, $t56], "SearchRecord", [(await $.wv([$t55, $t56], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t55, $t56], "Text", C, false)), $.add((await $.wv([$t55, $t56], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t55, $t56], "srFromCurrent", C, false)), (await $.wv([$t55, $t56], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t55, $t56], "MessageDlg", [$.add($.add("Record has reached the End of file.", "\r"), "Continue from Top of file?"), (await $.wv([$t55, $t56], "mtInformation", C, false)), [(await $.wv([$t55, $t56], "mbNo", C, false)), (await $.wv([$t55, $t56], "mbYes", C, false))], 0], C)), (await $.wv([$t55, $t56], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t55, $t56], "SearchRecord", [(await $.wv([$t55, $t56], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t55, $t56], "Text", C, false)), $.add((await $.wv([$t55, $t56], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t55, $t56], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t55, $t56], "MessageDlg", ["Record Not Found!", (await $.wv([$t55, $t56], "mtInformation", C, false)), [(await $.wv([$t55, $t56], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "EditContractNoExit", async function EditContractNoExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t57 = L0["sender"];
    await $.wset([$t57], "Text", "", C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDepositManager", "EditContractNoKeyPress", async function EditContractNoKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "SearchActionExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmDepositManager", "N8Click", async function N8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "SearchPanel")), "Visible", $.not((await $.mv((await $.v(C, "SearchPanel")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
