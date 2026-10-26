// Generated from frmpbf_transactionImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmpbf_transactionImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "PBF_Transactions_TLB", "StdVcl", "ExtCtrls", "StdCtrls", "ComCtrls", "ToolWin", "ImgList", "Buttons", "Mask", "DBCtrlsEh", "DBLookupEh", "Grids", "DBGridEh", "ActnList", "Menus", "oracle", "oracledata", "CMExcelExport", "ComObj", "ComServ", "dmpbf_transactionimpl", "frmAddEditTrImpl", "frmpbffilialsaccsImpl", "frmpbfTransactionSettImpl", "FrmpbfFilialsUsersImpl", "frmOtherOperationsImpl", "frmpbfReportImpl", "pbfCurrencyToHR_Azeri_Impl", "frmpbfPayRepNumImpl", "frmkindaccsimpl", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("Tfrmpbf_transaction", "TActiveForm", {"imagelist": {"name": "ImageList", "type": "TImageList"}, "filterpanel": {"name": "FilterPanel", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "cbcurrency": {"name": "CBCurrency", "type": "TCheckBox"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "cbfilial": {"name": "CBFilial", "type": "TCheckBox"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "cbcontracttype": {"name": "CBContractType", "type": "TCheckBox"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "panelmain": {"name": "PanelMain", "type": "TPanel"}, "searchpanel": {"name": "SearchPanel", "type": "TGroupBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "editnum": {"name": "Editnum", "type": "TEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "editdebitaccno": {"name": "EditDEBITACCNO", "type": "TEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "editcreditaccno": {"name": "EditCREDITACCNO", "type": "TEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "editdebitamount": {"name": "EditDEBITAMOUNT", "type": "TEdit"}, "maingridpbf": {"name": "MainGridPBF", "type": "TDBGridEh"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "addpbfop": {"name": "AddPBFOP", "type": "TAction"}, "popupmenusett": {"name": "PopupMenuSett", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "gj1": {"name": "gj1", "type": "TMenuItem"}, "editpbfop": {"name": "EditPBFOP", "type": "TAction"}, "refreshpbfop": {"name": "RefreshPBFOP", "type": "TAction"}, "delpbfop": {"name": "DelPBFOP", "type": "TAction"}, "popupmenuoperation": {"name": "PopupMenuOperation", "type": "TPopupMenu"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "actnsearch": {"name": "Actnsearch", "type": "TAction"}, "toolbar": {"name": "ToolBar", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "tbfilteration": {"name": "TBFilteration", "type": "TToolButton"}, "grdate": {"name": "GRDate", "type": "TGroupBox"}, "dtpcurrentdate": {"name": "DTPCurrentDate", "type": "TDateTimePicker"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "pbfexcelexport": {"name": "PBFExcelExport", "type": "TCMExcelExport"}, "actnexport": {"name": "Actnexport", "type": "TAction"}, "actnspanel": {"name": "ActnSPanel", "type": "TAction"}, "actnprint": {"name": "ActnPrint", "type": "TAction"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "memo2": {"name": "Memo2", "type": "TMemo"}, "n5": {"name": "N5", "type": "TMenuItem"}, "fevents": {"name": "FEvents", "type": "Ifrmpbf_transactionEvents"}}, {});
  U.init(async () => {
  });
  U.method("Tfrmpbf_transaction", "WithCoin", async function WithCoin(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"ammount": $.copyArg(p0), "val": $.copyArg(p1), result: '', "ttrunc": 0, "tdev": 0};
  await $.fixArgs(L0, ["ammount", "val"]);
  L0["ttrunc"] = (await $.call(C, "Trunc", [(await $.call(C, "StrToCurr", [L0["ammount"]]))]));
  L0["tdev"] = ((await $.call(C, "Round", [$.mul((await $.call(C, "Frac", [(await $.call(C, "StrToCurr", [L0["ammount"]]))])), 100)])));
  L0["result"] = $.add($.add($.add($.add($.add($.add((await $.call(C, "CurrencyToHR_Azeri", [L0["ttrunc"], 0, [0]])), " "), " "), L0["val"]), " "), (await $.call(C, "FloatToStr", [L0["tdev"]]))), " qəp");
  return L0.result;
}, {"params": ["Ammount", "val"], "kind": "function", "ptypes": ["String", "String"]});
  U.method("Tfrmpbf_transaction", "BuildFilterString", async function BuildFilterString(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "fstatus": '', "fopendat1": '', "fopendat2": '', "fopendat": ''};
  L0["concatfilter"] = $.fn(async function ConcatFilter(p0, p1, p2, p3, p4) {
  const L1 = {"s": $.asRef(p0), "prefix": $.copyArg(p1), "checked": $.copyArg(p2), "keyvalue": $.copyArg(p3), "check": $.copyArg(p4), result: undefined, "temp": '', "op": ''};
  await $.fixArgs(L1, ["prefix", "checked", "keyvalue", "check"]);
  L1["csformat"] = "(%s=%s)";
  if ($.truthy(L1["check"])) {
    L1["op"] = " and ";
  } else {
    L1["op"] = " or ";
  }
  if ($.truthy(L1["checked"])) {
    L1["temp"] = (await $.call(C, "Format", [L1["csformat"], [L1["prefix"], L1["keyvalue"]]]));
    if ($.truthy($.eq((await L1["s"].get()), ""))) {
      await L1["s"].set(L1["temp"]);
    } else {
      await L1["s"].set($.add($.add((await L1["s"].get()), L1["op"]), L1["temp"]));
    }
  }
  return L1.result;
});
  L0["concatfilter1"] = $.fn(async function ConcatFilter1(p0, p1) {
  const L1 = {"s": $.asRef(p0), "prefix": $.asRef(p1), result: undefined};
  if ($.truthy((await $.and_(($.ne((await L1["s"].get()), "")), async () => ($.ne((await L1["prefix"].get()), "")))))) {
    await L1["s"].set($.add($.add((await L1["s"].get()), " and "), (await L1["prefix"].get())));
  }
  if ($.truthy((await $.and_(($.eq((await L1["s"].get()), "")), async () => ($.ne((await L1["prefix"].get()), "")))))) {
    await L1["s"].set((await L1["prefix"].get()));
  }
  return L1.result;
});
  L0["result"] = "";
  L0["fstatus"] = "";
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "val_acc", (await $.mv((await $.v(C, "CBCurrency")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue")), true])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "branchid", (await $.mv((await $.v(C, "CBFilial")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue")), true])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "contracttype", (await $.mv((await $.v(C, "CBContractType")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue")), true])));
  await $.stmt((await $.callv(L0["concatfilter1"], [L0["result"], L0["fstatus"]])));
  await $.stmt((await $.callv(L0["concatfilter1"], [L0["result"], L0["fopendat"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tfrmpbf_transaction", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("Tfrmpbf_transaction", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("Tfrmpbf_transaction", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "Tfrmpbf_transaction", "Initialize", null, arguments);
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
  U.method("Tfrmpbf_transaction", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tfrmpbf_transaction", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tfrmpbf_transaction", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tfrmpbf_transaction", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tfrmpbf_transaction", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tfrmpbf_transaction", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tfrmpbf_transaction", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tfrmpbf_transaction", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tfrmpbf_transaction", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tfrmpbf_transaction", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tfrmpbf_transaction", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tfrmpbf_transaction", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tfrmpbf_transaction", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tfrmpbf_transaction", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tfrmpbf_transaction", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tfrmpbf_transaction", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tfrmpbf_transaction", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tfrmpbf_transaction", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("Tfrmpbf_transaction", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("Tfrmpbf_transaction", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmpbf_transaction", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmpbf_transaction", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmpbf_transaction", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmpbf_transaction", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmpbf_transaction", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmpbf_transaction", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("Tfrmpbf_transaction", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmpbf_transaction", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tfrmpbf_transaction", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tfrmpbf_transaction", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("Tfrmpbf_transaction", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("Tfrmpbf_transaction", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("Tfrmpbf_transaction", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("Tfrmpbf_transaction", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tfrmpbf_transaction", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tfrmpbf_transaction", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tfrmpbf_transaction", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("Tfrmpbf_transaction", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("Tfrmpbf_transaction", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tfrmpbf_transaction", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("Tfrmpbf_transaction", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("Tfrmpbf_transaction", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tfrmpbf_transaction", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("Tfrmpbf_transaction", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "dmpbf_transaction", (await $.mcall((await $.v(C, "Tdmpbf_transaction")), "Create", [Self])));
  await $.set(C, "frmAddEditTr", (await $.mcall((await $.v(C, "TfrmAddEditTr")), "create", [Self])));
  await $.set(C, "frmOtherOperations", (await $.mcall((await $.v(C, "TfrmOtherOperations")), "create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  await $.mset((await $.v(C, "DTPCurrentDate")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "dmpbf_transaction")), "currdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  await $.set(C, "frmpbfReport", (await $.mcall((await $.v(C, "TfrmpbfReport")), "create", [Self])));
  await $.set(C, "frmpbfPayRepNum", (await $.mcall((await $.v(C, "TfrmpbfPayRepNum")), "create", [Self])));
  await $.set(C, "frmkindaccs", (await $.mcall((await $.v(C, "Tfrmkindaccs")), "create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmpbf_transaction", "ActiveFormDestroy", async function ActiveFormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "dmpbf_transaction")), "free", []);
  await $.mcall((await $.v(C, "frmAddEditTr")), "free", []);
  await $.mcall((await $.v(C, "frmOtherOperations")), "free", []);
  await $.mcall((await $.v(C, "frmpbfReport")), "free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmpbf_transaction", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "frmpbffilialsaccs"))]))))) {
    await $.set(C, "frmpbffilialsaccs", (await $.mcall((await $.v(C, "Tfrmpbffilialsaccs")), "create", [Self])));
  }
  await $.mcall((await $.v(C, "frmpbffilialsaccs")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmpbf_transaction", "N2Click", async function N2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "frmpbfTransactionSett"))]))))) {
    await $.set(C, "frmpbfTransactionSett", (await $.mcall((await $.v(C, "TfrmpbfTransactionSett")), "create", [Self])));
  }
  await $.mcall((await $.v(C, "frmpbfTransactionSett")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmpbf_transaction", "gj1Click", async function gj1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FrmpbfFilialsUsers"))]))))) {
    await $.set(C, "FrmpbfFilialsUsers", (await $.mcall((await $.v(C, "TFrmpbfFilialsUsers")), "create", [Self])));
  }
  await $.mcall((await $.v(C, "FrmpbfFilialsUsers")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmpbf_transaction", "EditPBFOPExecute", async function EditPBFOPExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "c": 0, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "dmpbf_transaction"));
    const $t2 = (await $.wv([$t1], "PBFOperations", C, false));
    if ($.truthy((await $.wv([$t1, $t2], "active", C, false)))) {
      await $.stmt($.wcall([$t1, $t2], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["OID", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "PBFTransactions", C, false)), "FieldByName", ["num"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    await $.stmt($.wcall([$t1, $t2], "EDIT", [], C));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t1, $t2], "PBFTransactions", C, false)), "fieldbyname", ["optype"])), "AsString")), "KREDIT"))) {
      await $.mcall((await $.wv([$t1, $t2], "frmAddEditTr", C, false)), "ShowModal", []);
    } else {
      {
        const $t3 = (await $.wv([$t1, $t2], "frmOtherOperations", C, false));
        { const $t4 = $.sub((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "ComboBox1", C, false)), "Items")), "Count")), 1);
          await $.wset([$t1, $t2, $t3], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t5 = true;
          for (;;) {
            if (!$t5) { await $.wset([$t1, $t2, $t3], "i", $.succ((await $.wv([$t1, $t2, $t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t5 = false;
            if (!($.ord((await $.wv([$t1, $t2, $t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t4))) break;
            if ($.truthy($.eq((await $.idx((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "frmOtherOperations", C, false)), "ComboBox1")), "Items")), [(await $.wv([$t1, $t2, $t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), (await $.mv((await $.mcall((await $.wv([$t1, $t2, $t3], "PBFTransactions", C, false)), "fieldbyname", ["OPNAME"])), "AsString"))))) {
              await $.mset((await $.mv((await $.wv([$t1, $t2, $t3], "frmOtherOperations", C, false)), "ComboBox1")), "ItemIndex", (await $.wv([$t1, $t2, $t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)));
            }
            await $.tick();
          }
        }
      }
      await $.mcall((await $.wv([$t1, $t2], "frmOtherOperations", C, false)), "ShowModal", []);
    }
    await $.stmt((await $.wcall([$t1, $t2], "RefreshPBFOPExecute", [(await $.wv([$t1, $t2], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmpbf_transaction", "RefreshPBFOPExecute", async function RefreshPBFOPExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "saveid": 0, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "MainGridPBF")), "SelectedRows")), "Clear", []);
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTPCurrentDate")), "DateTime"))]))]));
  {
    const $t6 = (await $.v(C, "dmpbf_transaction"));
    const $t7 = (await $.wv([$t6], "PBFTransactions", C, false));
    await $.wset([$t6, $t7], "SaveID", (await $.mv((await $.wcall([$t6, $t7], "FieldbyName", ["ID"], C)), "AsInteger")), { get: async () => L0["saveid"], set: async (v) => { L0["saveid"] = v; }, local: true });
    await $.stmt($.wcall([$t6, $t7], "close", [], C));
    await $.stmt((await $.wcall([$t6, $t7], "SetVariable", ["TransactionDate", (await $.wv([$t6, $t7], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t6, $t7], "SetVariable", ["orderfield", "id"], C)));
    await $.stmt($.wcall([$t6, $t7], "open", [], C));
    await $.stmt((await $.wcall([$t6, $t7], "Locate", ["ID", (await $.wv([$t6, $t7], "SaveID", { get: async () => L0["saveid"], set: async (v) => { L0["saveid"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmpbf_transaction", "DelPBFOPExecute", async function DelPBFOPExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Silinməsinə əminsinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNo"))))) {
    return L0.result;
  }
  {
    const $t8 = (await $.v(C, "dmpbf_transaction"));
    const $t9 = (await $.wv([$t8], "PBFTransaction", C, false));
    const $t10 = (await $.wv([$t8, $t9], "PBFTransactions", C, false));
    await $.stmt((await $.wcall([$t8, $t9, $t10], "CallProcedure", ["del_Operation", ["v_operid", (await $.mv((await $.wcall([$t8, $t9, $t10], "FieldByName", ["num"], C)), "AsInteger"))]], C)));
    await $.stmt($.wcall([$t8, $t9, $t10], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmpbf_transaction", "AddPBFOPExecute", async function AddPBFOPExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.v(C, "dmpbf_transaction"));
    const $t12 = (await $.wv([$t11], "PBFOperations", C, false));
    await $.wset([$t11, $t12], "OperType", "KREDIT", C);
    if ($.truthy((await $.wv([$t11, $t12], "active", C, false)))) {
      await $.stmt($.wcall([$t11, $t12], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t11, $t12], "SetVariable", ["OID", 0], C)));
    await $.stmt($.wcall([$t11, $t12], "Open", [], C));
    await $.stmt($.wcall([$t11, $t12], "Insert", [], C));
    await $.mcall((await $.wv([$t11, $t12], "frmAddEditTr", C, false)), "ShowModal", []);
    await $.mcall((await $.wv([$t11, $t12], "PBFTransactions", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmpbf_transaction", "N3Click", async function N3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "AddPBFOPExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmpbf_transaction", "N4Click", async function N4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.v(C, "dmpbf_transaction"));
    const $t14 = (await $.wv([$t13], "PBFOperations", C, false));
    await $.wset([$t13, $t14], "OperType", "OTHERS", C);
    if ($.truthy((await $.wv([$t13, $t14], "active", C, false)))) {
      await $.stmt($.wcall([$t13, $t14], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t13, $t14], "SetVariable", ["OID", 0], C)));
    await $.stmt($.wcall([$t13, $t14], "Open", [], C));
    await $.stmt($.wcall([$t13, $t14], "Insert", [], C));
    await $.mset((await $.mv((await $.wv([$t13, $t14], "FrmOtherOperations", C, false)), "ComboBox1")), "ItemIndex", 0);
    await $.mcall((await $.wv([$t13, $t14], "FrmOtherOperations", C, false)), "ShowModal", []);
    await $.mcall((await $.wv([$t13, $t14], "PBFTransactions", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmpbf_transaction", "ActnsearchExecute", async function ActnsearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t15 = L0["sender"];
    await $.wset([$t15], "SearchField", (await $.wcall([$t15], "copy", [(await $.wv([$t15], "Name", C, false)), 5, (await $.wcall([$t15], "length", [(await $.wv([$t15], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    await $.mcall((await $.mv((await $.wv([$t15], "MainGridPBF", C, false)), "SelectedRows")), "Clear", []);
    {
      const $t16 = (await $.wcall([$t15], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t15], "MainGridPBF", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t15, $t16], "SearchRecord", [(await $.wv([$t15, $t16], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t15, $t16], "Text", C, false)), $.add((await $.wv([$t15, $t16], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t15, $t16], "srFromCurrent", C, false)), (await $.wv([$t15, $t16], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t15, $t16], "MessageDlg", [$.add($.add("Axtarış sona çatıb.", "\r"), "əvvəldən başlamaq istəyirsinizmi?"), (await $.wv([$t15, $t16], "mtInformation", C, false)), [(await $.wv([$t15, $t16], "mbNo", C, false)), (await $.wv([$t15, $t16], "mbYes", C, false))], 0], C)), (await $.wv([$t15, $t16], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t15, $t16], "SearchRecord", [(await $.wv([$t15, $t16], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t15, $t16], "Text", C, false)), $.add((await $.wv([$t15, $t16], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t15, $t16], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t15, $t16], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t15, $t16], "mtInformation", C, false)), [(await $.wv([$t15, $t16], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmpbf_transaction", "EditnumKeyPress", async function EditnumKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "ActnSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tfrmpbf_transaction", "EditnumExit", async function EditnumExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (L0["sender"]);
    await $.wset([$t17], "Text", "", C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmpbf_transaction", "MainGridPBFTitleBtnClick", async function MainGridPBFTitleBtnClick(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acol": $.copyArg(p1), "column": $.copyArg(p2), result: undefined, "sortfield": ''};
  await $.fixArgs(L0, ["sender", "acol", "column"]);
  L0["sortfield"] = (await $.mv(L0["column"], "FieldName"));
  if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "SortMarker")), (await $.v(C, "smDownEh"))))) {
    L0["sortfield"] = $.add(L0["sortfield"], " DESC");
  }
  {
    const $t18 = L0["sender"];
    const $t19 = (await $.wcall([$t18], "TOracleDataSet", [(await $.mv((await $.wv([$t18], "DataSource", C, false)), "DataSet"))], C));
    await $.mset((await $.wv([$t18, $t19], "Screen", C, false)), "Cursor", (await $.wv([$t18, $t19], "crSQLWait", C, false)));
    await $.stmt((await $.wcall([$t18, $t19], "SetVariable", ["OrderField", (await $.wv([$t18, $t19], "SortField", { get: async () => L0["sortfield"], set: async (v) => { L0["sortfield"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t18, $t19], "RefResh", [], C));
    await $.mset((await $.wv([$t18, $t19], "Screen", C, false)), "Cursor", (await $.wv([$t18, $t19], "crDefault", C, false)));
  }
  return L0.result;
}, {"params": ["Sender", "ACol", "Column"], "kind": "procedure", "ptypes": ["TObject", "Integer", "TColumnEh"]});
  U.method("Tfrmpbf_transaction", "ActnexportExecute", async function ActnexportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t20 = (await $.v(C, "PBFExcelExport"));
    await $.stmt($.wcall([$t20], "Connect", [], C));
    await $.stmt((await $.wcall([$t20], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t20], "MainGridPBF", C, false)), "DataSource")), "DataSet")), "Operations", (await $.wv([$t20], "true", C, false))], C)));
    await $.stmt($.wcall([$t20], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmpbf_transaction", "ActnSPanelExecute", async function ActnSPanelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "SearchPanel")), "Visible", $.not((await $.mv((await $.v(C, "SearchPanel")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmpbf_transaction", "ActnPrintExecute", async function ActnPrintExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "atype": '', "atype1": '', "desc": '', "str": '', "str1": '', "str2": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t21 = (await $.v(C, "dmpbf_transaction"));
    const $t22 = (await $.wv([$t21], "PBFReportDs", C, false));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["optype"])), "AsString")), "KREDIT"))) {
      await $.wset([$t21, $t22], "str1", "(select BANK as re_BANK,KOD_B as re_KOD_B,INN as re_inn,to_char(KRNO) as re_KRNO,SWIFT as re_SWIFT, ' ' as rc_inn", { get: async () => L0["str1"], set: async (v) => { L0["str1"] = v; }, local: true });
      await $.wset([$t21, $t22], "str2", " ,PBF_TRANSACTION.get_rcname(:clientaccid) as rc_name,PBF_TRANSACTION.get_rcaccno(:clientaccid,:acctype) as rc_account  from filialinfo b where kod_fil = PBF_TRANSACTION.get_filialCode(:clientaccid,null) )b,", { get: async () => L0["str2"], set: async (v) => { L0["str2"] = v; }, local: true });
    } else {
      await $.wset([$t21, $t22], "str1", "(SELECT  a.re_bank, a.re_kod_b, a.re_inn, a.re_krno,a.re_swift, a.rc_name, decode(PBF_TRANSACTION.get_filialCode(null,:usr),0,a.rc_account1,a.rc_account) as rc_account, a.rc_inn  FROM ", { get: async () => L0["str1"], set: async (v) => { L0["str1"] = v; }, local: true });
      await $.wset([$t21, $t22], "str2", $.add($.add($.add($.add(" pbf_beneficiars a where OPERTYPE = ", "'"), (await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["optype"])), "AsString"))), "'"), "),"), { get: async () => L0["str2"], set: async (v) => { L0["str2"] = v; }, local: true });
    }
    await $.wset([$t21, $t22], "str", $.add((await $.wv([$t21, $t22], "str1", { get: async () => L0["str1"], set: async (v) => { L0["str1"] = v; }, local: true }, false)), (await $.wv([$t21, $t22], "str2", { get: async () => L0["str2"], set: async (v) => { L0["str2"] = v; }, local: true }, false))), { get: async () => L0["str"], set: async (v) => { L0["str"] = v; }, local: true });
    if ($.truthy((await $.wv([$t21, $t22], "Active", C, false)))) {
      await $.stmt($.wcall([$t21, $t22], "CloseAll", [], C));
    }
    await $.stmt($.wcall([$t21, $t22], "DeleteVariables", [], C));
    await $.stmt((await $.wcall([$t21, $t22], "DeclareVariable", ["clientaccid", (await $.wv([$t21, $t22], "otinteger", C, false))], C)));
    await $.stmt((await $.wcall([$t21, $t22], "DeclareVariable", ["opid", (await $.wv([$t21, $t22], "otinteger", C, false))], C)));
    await $.stmt((await $.wcall([$t21, $t22], "DeclareVariable", ["usr", (await $.wv([$t21, $t22], "otString", C, false))], C)));
    await $.stmt((await $.wcall([$t21, $t22], "SetVariable", ["opid", (await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["num"])), "AsInteger"))], C)));
    await $.stmt((await $.wcall([$t21, $t22], "SetVariable", ["clientaccid", (await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["clientaccid"])), "AsInteger"))], C)));
    await $.stmt((await $.wcall([$t21, $t22], "SetVariable", ["usr", (await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["username"])), "AsString"))], C)));
    await $.wset([$t21, $t22], "AType", $.add($.add("45", (await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["optype"])), "AsString"))), "ACC"), { get: async () => L0["atype"], set: async (v) => { L0["atype"] = v; }, local: true });
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["optype"])), "AsString")), "KREDIT"))) {
      await $.wset([$t21, $t22], "AType1", "45ACCOUNT", { get: async () => L0["atype1"], set: async (v) => { L0["atype1"] = v; }, local: true });
    } else {
      await $.wset([$t21, $t22], "atype1", (await $.wv([$t21, $t22], "AType", { get: async () => L0["atype"], set: async (v) => { L0["atype"] = v; }, local: true }, false)), { get: async () => L0["atype1"], set: async (v) => { L0["atype1"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["optype"])), "AsString")), "KREDIT"))) {
      await $.stmt((await $.wcall([$t21, $t22], "DeclareVariable", ["ACCTYPE", (await $.wv([$t21, $t22], "otString", C, false))], C)));
      await $.stmt((await $.wcall([$t21, $t22], "SetVariable", ["ACCTYPE", (await $.wv([$t21, $t22], "AType", { get: async () => L0["atype"], set: async (v) => { L0["atype"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t21, $t22], "DeclareVariable", ["ACCTYPE1", (await $.wv([$t21, $t22], "otString", C, false))], C)));
      await $.stmt((await $.wcall([$t21, $t22], "SetVariable", ["acctype1", (await $.wv([$t21, $t22], "AType1", { get: async () => L0["atype1"], set: async (v) => { L0["atype1"] = v; }, local: true }, false))], C)));
    }
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["optype"])), "AsString")), "KREDIT"))) {
      await $.stmt((await $.wcall([$t21, $t22], "DeclareVariable", ["ACCTYPE1", (await $.wv([$t21, $t22], "otString", C, false))], C)));
      await $.stmt((await $.wcall([$t21, $t22], "SetVariable", ["acctype1", (await $.wv([$t21, $t22], "AType1", { get: async () => L0["atype1"], set: async (v) => { L0["atype1"] = v; }, local: true }, false))], C)));
    }
    { const $t23 = await $.iset((await $.wv([$t21, $t22], "sql", C, false)), [11], (await $.wv([$t21, $t22], "str", { get: async () => L0["str"], set: async (v) => { L0["str"] = v; }, local: true }, false))); if ($t23 !== undefined) { await $.wset([$t21, $t22], "sql", $t23, C); } }
    await $.mset((await $.wv([$t21, $t22], "Memo1", C, false)), "text", (await $.mv((await $.wv([$t21, $t22], "sql", C, false)), "text")));
    await $.mset((await $.wv([$t21, $t22], "memo2", C, false)), "text", $.add($.add($.add($.add($.add("AType1 = ", (await $.wv([$t21, $t22], "AType1", { get: async () => L0["atype1"], set: async (v) => { L0["atype1"] = v; }, local: true }, false))), " clientaccid  = "), (await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["clientaccid"])), "Asstring"))), " opid="), (await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["num"])), "Asstring"))));
    await $.stmt($.wcall([$t21, $t22], "open", [], C));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["optype"])), "AsString")), "KREDIT"))) {
      await $.wset([$t21, $t22], "Desc", "Kredit ödənişi", { get: async () => L0["desc"], set: async (v) => { L0["desc"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["optype"])), "AsString")), "GAS"))) {
      await $.wset([$t21, $t22], "desc", "Qaz ödənişi", { get: async () => L0["desc"], set: async (v) => { L0["desc"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["optype"])), "AsString")), "AZERCELL"))) {
      await $.wset([$t21, $t22], "desc", "AZERCELL ödənişi", { get: async () => L0["desc"], set: async (v) => { L0["desc"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["optype"])), "AsString")), "BAKCELL"))) {
      await $.wset([$t21, $t22], "desc", "BAKCELL ödənişi", { get: async () => L0["desc"], set: async (v) => { L0["desc"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["optype"])), "AsString")), "NAR"))) {
      await $.wset([$t21, $t22], "desc", "NAR ödənişi", { get: async () => L0["desc"], set: async (v) => { L0["desc"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["optype"])), "AsString")), "WATER"))) {
      await $.wset([$t21, $t22], "desc", "Su ödənişi", { get: async () => L0["desc"], set: async (v) => { L0["desc"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["optype"])), "AsString")), "LIGHT"))) {
      await $.wset([$t21, $t22], "desc", "Elektrik ödənişi", { get: async () => L0["desc"], set: async (v) => { L0["desc"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["optype"])), "AsString")), "SUMLIGHT"))) {
      await $.wset([$t21, $t22], "desc", "Sumqayıt elektrik ödənişi", { get: async () => L0["desc"], set: async (v) => { L0["desc"] = v; }, local: true });
    }
    await $.mcall((await $.wv([$t21, $t22], "PBFDesc", C, false)), "CloseAll", []);
    await $.stmt((await $.mcall((await $.wv([$t21, $t22], "PBFDesc", C, false)), "SetVariable", ["n", (await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["optype"])), "AsString"))])));
    await $.mcall((await $.wv([$t21, $t22], "PBFDesc", C, false)), "open", []);
    await $.wset([$t21, $t22], "desc", (await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFDesc", C, false)), "fieldbyname", ["description"])), "AsString")), { get: async () => L0["desc"], set: async (v) => { L0["desc"] = v; }, local: true });
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["optype"])), "AsString")), "KREDIT"))) {
      await $.wset([$t21, $t22], "desc", $.add($.add($.add($.add((await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["TRANSACTIONDATE"])), "AsString")), " -tarixində "), (await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["FROMFILTOFIL"])), "AsString"))), " "), (await $.wv([$t21, $t22], "desc", { get: async () => L0["desc"], set: async (v) => { L0["desc"] = v; }, local: true }, false))), { get: async () => L0["desc"], set: async (v) => { L0["desc"] = v; }, local: true });
    }
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["optype"])), "AsString")), "KREDIT"))) {
      await $.wset([$t21, $t22], "desc", $.add($.add((await $.mv((await $.mcall((await $.wv([$t21, $t22], "PBFTransactions", C, false)), "fieldbyname", ["TRANSACTIONDATE"])), "AsString")), " -tarixində "), (await $.wv([$t21, $t22], "desc", { get: async () => L0["desc"], set: async (v) => { L0["desc"] = v; }, local: true }, false))), { get: async () => L0["desc"], set: async (v) => { L0["desc"] = v; }, local: true });
    }
    {
      const $t24 = (await $.wv([$t21, $t22], "frmpbfReport", C, false));
      await $.mset((await $.wv([$t21, $t22, $t24], "QRLabel1", C, false)), "caption", (await $.wv([$t21, $t22, $t24], "Desc", { get: async () => L0["desc"], set: async (v) => { L0["desc"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t21, $t22, $t24], "QRAmmountW", C, false)), "Caption", (await $.wcall([$t21, $t22, $t24], "WithCoin", [(await $.mv((await $.mcall((await $.wv([$t21, $t22, $t24], "PBFTransactions", C, false)), "fieldbyname", ["DEBITAMOUNT"])), "AsString")), (await $.mv((await $.wcall([$t21, $t22, $t24], "fieldbyname", ["VALUTE"], C)), "asString"))], C)));
      await $.mset((await $.wv([$t21, $t22, $t24], "QRAmmount", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t21, $t22, $t24], "PBFTransactions", C, false)), "fieldbyname", ["DEBITAMOUNT"])), "AsString")));
      await $.mset((await $.wv([$t21, $t22, $t24], "QRDate", C, false)), "Caption", (await $.wcall([$t21, $t22, $t24], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wv([$t21, $t22, $t24], "DTPCurrentDate", C, false)), "DateTime"))], C)));
      await $.mset((await $.wv([$t21, $t22, $t24], "QRLabel3", C, false)), "Caption", (await $.mv((await $.mcall((await $.wv([$t21, $t22, $t24], "PBFTransactions", C, false)), "fieldbyname", ["opname"])), "AsString")));
      await $.stmt($.wcall([$t21, $t22, $t24], "Preview", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmpbf_transaction", "MainGridPBFDblClick", async function MainGridPBFDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActnPrintExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmpbf_transaction", "MainGridPBFDrawColumnCell", async function MainGridPBFDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t25 = (L0["sender"]);
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t25], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t26 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataSource", C, false)), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t26, 1)) {
          await $.wset([$t25], "ImageIndex", 0, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t26, 0)) {
          await $.wset([$t25], "ImageIndex", 1, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t25], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t25], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t25], "ImageList1", C, false)), "Draw", [(await $.wv([$t25], "Canvas", C, false)), (await $.mv((await $.wv([$t25], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t25], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t25], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t25], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t25], "DefaultDrawColumnCell", [(await $.wv([$t25], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t25], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t25], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t25], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumnEh", "TGridDrawState"]});
  U.method("Tfrmpbf_transaction", "N5Click", async function N5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "frmkindaccs")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
