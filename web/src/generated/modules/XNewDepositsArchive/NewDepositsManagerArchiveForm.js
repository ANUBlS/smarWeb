// Generated from NewDepositsManagerArchiveForm.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsManagerArchiveForm", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "NewDepositsManagerArchive_TLB", "StdVcl", "DBGridEh", "ImgList", "Menus", "Grids", "XDBGrids", "Oracle", "Oracledata", "StdCtrls", "Buttons", "ComCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "ToolWin", "CMExcelExport", "ComObj", "ComServ", "NewDepositsDataModule", "NewCommonDeclsImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TNewDepositsManagerArchiveFormImpl", "TActiveForm", {"toolbar": {"name": "ToolBar", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "tbfilteration": {"name": "TBFilteration", "type": "TToolButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "filterpanel": {"name": "FilterPanel", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "cbcurrency": {"name": "CBCurrency", "type": "TCheckBox"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "cbpersons": {"name": "CBpersons", "type": "TCheckBox"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "cbclienttype": {"name": "CBClientType", "type": "TCheckBox"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "cbfilial": {"name": "CBFilial", "type": "TCheckBox"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "cbcontracttype": {"name": "CBContractType", "type": "TCheckBox"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "lcbstatus": {"name": "LCBStatus", "type": "TComboBox"}, "cbstatus": {"name": "CBStatus", "type": "TCheckBox"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "dtpopendate": {"name": "DTPOpenDate", "type": "TDateTimePicker"}, "dtpclosedate": {"name": "DTPCloseDate", "type": "TDateTimePicker"}, "cbopendat": {"name": "CBOpendat", "type": "TCheckBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "bitbtnexp": {"name": "BitBtnexp", "type": "TBitBtn"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "searchpanel": {"name": "SearchPanel", "type": "TGroupBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "editcontractno": {"name": "EditContractNo", "type": "TEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "editid": {"name": "EditID", "type": "TEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "editcustomerid": {"name": "EditCustomerid", "type": "TEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "editfacticaldebt": {"name": "EditFacticalDebt", "type": "TEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "editcustomername": {"name": "EditCustomerName", "type": "TEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "statictext7": {"name": "StaticText7", "type": "TStaticText"}, "editfacticalinterestdebt": {"name": "EditFACTICALINTERESTDEBT", "type": "TEdit"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "editagentid": {"name": "EditAgentid", "type": "TEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "statictext8": {"name": "StaticText8", "type": "TStaticText"}, "editostat": {"name": "EditOstat", "type": "TEdit"}, "maingrid": {"name": "MainGrid", "type": "TXDBGrid"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "actionarcname": {"name": "ActionArcName", "type": "TPopupMenu"}, "menuitem1": {"name": "MenuItem1", "type": "TMenuItem"}, "menuitem2": {"name": "MenuItem2", "type": "TMenuItem"}, "menuitem3": {"name": "MenuItem3", "type": "TMenuItem"}, "menuitem4": {"name": "MenuItem4", "type": "TMenuItem"}, "menuitem5": {"name": "MenuItem5", "type": "TMenuItem"}, "menuitem6": {"name": "MenuItem6", "type": "TMenuItem"}, "menuitem7": {"name": "MenuItem7", "type": "TMenuItem"}, "menuitem8": {"name": "MenuItem8", "type": "TMenuItem"}, "eexport": {"name": "EExport", "type": "TCMExcelExport"}, "arcpopupmenu": {"name": "ArcPopupMenu", "type": "TPopupMenu"}, "micontract": {"name": "miContract", "type": "TMenuItem"}, "n16": {"name": "N16", "type": "TMenuItem"}, "n14": {"name": "N14", "type": "TMenuItem"}, "n17": {"name": "N17", "type": "TMenuItem"}, "n18": {"name": "N18", "type": "TMenuItem"}, "n19": {"name": "N19", "type": "TMenuItem"}, "n20": {"name": "N20", "type": "TMenuItem"}, "n21": {"name": "N21", "type": "TMenuItem"}, "n22": {"name": "N22", "type": "TMenuItem"}, "n23": {"name": "N23", "type": "TMenuItem"}, "n25": {"name": "N25", "type": "TMenuItem"}, "n24": {"name": "N24", "type": "TMenuItem"}, "n26": {"name": "N26", "type": "TMenuItem"}, "n27": {"name": "N27", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "n28": {"name": "N28", "type": "TMenuItem"}, "n10": {"name": "N10", "type": "TMenuItem"}, "n35": {"name": "N35", "type": "TMenuItem"}, "accountlook": {"name": "AccountLook", "type": "TMenuItem"}, "fevents": {"name": "FEvents", "type": "INewDepositsManagerArchiveFormImplEvents"}}, {});
  U.init(async () => {
  });
  U.method("TNewDepositsManagerArchiveFormImpl", "ActnSearchExecute", async function ActnSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t1 = L0["sender"];
    await $.wset([$t1], "SearchField", (await $.wcall([$t1], "copy", [(await $.wv([$t1], "Name", C, false)), 5, (await $.wcall([$t1], "length", [(await $.wv([$t1], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    await $.mcall((await $.mv((await $.wv([$t1], "MainGrid", C, false)), "SelectedRows")), "Clear", []);
    {
      const $t2 = (await $.wcall([$t1], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t1], "MainGrid", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t1, $t2], "SearchRecord", [(await $.wv([$t1, $t2], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Text", C, false)), $.add((await $.wv([$t1, $t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "srFromCurrent", C, false)), (await $.wv([$t1, $t2], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t1, $t2], "MessageDlg", [$.add($.add("Axtarış sona çatıb.", "\r"), "əvvəldən başlamaq istəyirsinizmi?"), (await $.wv([$t1, $t2], "mtInformation", C, false)), [(await $.wv([$t1, $t2], "mbNo", C, false)), (await $.wv([$t1, $t2], "mbYes", C, false))], 0], C)), (await $.wv([$t1, $t2], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t1, $t2], "SearchRecord", [(await $.wv([$t1, $t2], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Text", C, false)), $.add((await $.wv([$t1, $t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t1, $t2], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t1, $t2], "mtInformation", C, false)), [(await $.wv([$t1, $t2], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "EditIDKeyPress", async function EditIDKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "ActnSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  await $.inherited(Self, "TNewDepositsManagerArchiveFormImpl", "EventSinkChanged", [L0["eventsink"]], arguments);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TNewDepositsManagerArchiveFormImpl", "Initialize", null, arguments);
  await $.set(C, "OnActivate", (await $.ref_(C, "ActivateEvent")));
  await $.set(C, "OnClick", (await $.ref_(C, "ClickEvent")));
  await $.set(C, "OnCreate", (await $.ref_(C, "CreateEvent")));
  await $.set(C, "OnDblClick", (await $.ref_(C, "DblClickEvent")));
  await $.set(C, "OnDeactivate", (await $.ref_(C, "DeactivateEvent")));
  await $.set(C, "OnDestroy", (await $.ref_(C, "DestroyEvent")));
  await $.set(C, "OnKeyPress", (await $.ref_(C, "KeyPressEvent")));
  await $.set(C, "OnMouseEnter", (await $.ref_(C, "MouseEnterEvent")));
  await $.set(C, "OnMouseLeave", (await $.ref_(C, "MouseLeaveEvent")));
  await $.set(C, "OnPaint", (await $.ref_(C, "PaintEvent")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_AlignDisabled", async function Get_AlignDisabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignDisabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_AlignWithMargins", async function Get_AlignWithMargins(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignWithMargins"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_BorderWidth", async function Get_BorderWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Integer", [(await $.v(C, "BorderWidth"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_DockSite", async function Get_DockSite(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DockSite"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_ExplicitHeight", async function Get_ExplicitHeight(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitHeight"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_ExplicitLeft", async function Get_ExplicitLeft(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitLeft"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_ExplicitTop", async function Get_ExplicitTop(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitTop"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_ExplicitWidth", async function Get_ExplicitWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitWidth"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_MouseInClient", async function Get_MouseInClient(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "MouseInClient"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_ParentCustomHint", async function Get_ParentCustomHint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentCustomHint"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_ParentDoubleBuffered", async function Get_ParentDoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentDoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_PopupMode", async function Get_PopupMode(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PopupMode"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_ScreenSnap", async function Get_ScreenSnap(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ScreenSnap"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_SnapBuffer", async function Get_SnapBuffer(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "SnapBuffer"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_UseDockManager", async function Get_UseDockManager(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "UseDockManager"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "PrepareFilter", async function PrepareFilter(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t3 = (await $.v(C, "NewDepositDataModule"));
    await $.mset((await $.wv([$t3], "DBLookupComboboxEh1", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t3], "Valutes", C, false)), "fieldByName", ["Valute"])), "AsInteger")));
    await $.mset((await $.wv([$t3], "DBLookupComboboxEh2", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t3], "Filials", C, false)), "fieldByName", ["id"])), "AsInteger")));
    await $.mset((await $.wv([$t3], "DBLookupComboboxEh3", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t3], "dm_types", C, false)), "fieldByName", ["id"])), "AsInteger")));
    await $.mset((await $.wv([$t3], "DBLookupComboboxEh4", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t3], "dm_categories", C, false)), "fieldByName", ["id"])), "AsInteger")));
    await $.mset((await $.wv([$t3], "DBLookupComboboxEh5", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t3], "dm_persons", C, false)), "fieldByName", ["id"])), "AsInteger")));
    await $.mset((await $.wv([$t3], "LCBStatus", C, false)), "ItemIndex", 0);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "BitBtnexpClick", async function BitBtnexpClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "EExport"));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.wv([$t4], "MainGrid", C, false)), "DataSource")), "DataSet")), "RecordCount")), 0))) {
      await $.stmt((await $.wcall([$t4], "ShowMessage", ["Heç bir məlümat yoxdur!!!.."], C)));
      return L0.result;
    }
    await $.mcall((await $.mv((await $.mv((await $.wv([$t4], "MainGrid", C, false)), "DataSource")), "DataSet")), "Last", []);
    await $.stmt($.wcall([$t4], "Connect", [], C));
    await $.stmt((await $.wcall([$t4], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t4], "MainGrid", C, false)), "DataSource")), "DataSet")), "Arxiv Depozitlər", (await $.wv([$t4], "True", C, false)), (await $.wv([$t4], "False", C, false))], C)));
    await $.stmt($.wcall([$t4], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "BuildFilterString", async function BuildFilterString(Self) {
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
  L0["fopendat1"] = "";
  L0["fopendat2"] = "";
  L0["fopendat"] = "";
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "CURRENCY", (await $.mv((await $.v(C, "CBCurrency")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue")), true])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "branchid", (await $.mv((await $.v(C, "CBFilial")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue")), true])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "contracttype", (await $.mv((await $.v(C, "CBContractType")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue")), true])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "clienttype", (await $.mv((await $.v(C, "CBpersons")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh4")), "KeyValue")), true])));
  await $.stmt((await $.callv(L0["concatfilter"], [L0["result"], "personaltype", (await $.mv((await $.v(C, "CBClientType")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboboxEh5")), "KeyValue")), true])));
  if ($.truthy((await $.mv((await $.v(C, "CBStatus")), "Checked")))) {
    { const $t5 = (await $.mv((await $.v(C, "LCBStatus")), "ItemIndex"));
      if ($.eq($t5, 0)) {
        L0["fstatus"] = "(status = 1)";
      }
      else if ($.eq($t5, 1)) {
        L0["fstatus"] = "(Status = 0)";
      }
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "CBOpendat")), "Checked")))) {
    L0["fopendat1"] = $.add($.add(" opendate >=  '", (await $.call(C, "FormatDateTime", ["dd/MM/yyyy", (await $.mv((await $.v(C, "DTPOpenDate")), "Date"))]))), "'");
    L0["fopendat2"] = $.add($.add(" opendate <=  '", (await $.call(C, "FormatDateTime", ["dd/MM/yyyy", (await $.mv((await $.v(C, "DTPCloseDate")), "Date"))]))), "'");
    L0["fopendat"] = $.add($.add($.add($.add($.add($.add($.add($.add("(", "("), L0["fopendat1"]), ")"), " and "), "("), L0["fopendat2"]), ")"), ")");
  }
  await $.stmt((await $.callv(L0["concatfilter1"], [L0["result"], L0["fstatus"]])));
  await $.stmt((await $.callv(L0["concatfilter1"], [L0["result"], L0["fopendat"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerArchiveFormImpl", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "NewDepositDataModule", (await $.mcall((await $.v(C, "TNewDepositDataModule")), "Create", [Self])));
  await $.stmt($.call(C, "PrepareFilter", []));
  await $.set(C, "ApplicationPath", (await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])));
  await $.set(C, "CommonApplication", (await $.v(C, "Application")));
  await $.set(C, "CommonGrid", (await $.v(C, "MainGrid")));
  {
    const $t6 = (await $.v(C, "NewDepositDataModule"));
    await $.wset([$t6], "Get_FilialID", (await $.mv((await $.mcall((await $.wv([$t6], "FilialID", C, false)), "FieldByname", ["kod_fil"])), "AsInteger")), C);
    await $.wset([$t6], "Get_BankDate", (await $.mv((await $.mcall((await $.wv([$t6], "BankDate", C, false)), "FieldByname", ["Tek_Dat"])), "AsDateTime")), C);
  }
  await $.mset((await $.v(C, "DTPOpenDate")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "DTPCloseDate")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "ActiveFormDestroy", async function ActiveFormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "NewDepositDataModule")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "ActnFilterExecute", async function ActnFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "MainGrid"));
    const $t8 = (await $.wv([$t7], "SelectedRows", C, false));
    await $.stmt($.wcall([$t7, $t8], "Clear", [], C));
  }
  {
    const $t9 = (await $.v(C, "MainGrid"));
    const $t10 = (await $.mv((await $.wv([$t9], "DataSource", C, false)), "DataSet"));
    await $.wset([$t9, $t10], "Cursor", (await $.wv([$t9, $t10], "crSqlWait", C, false)), C);
    await $.wset([$t9, $t10], "Filtered", (await $.wv([$t9, $t10], "False", C, false)), C);
    await $.wset([$t9, $t10], "Filter", (await $.wv([$t9, $t10], "BuildFilterString", C, false)), C);
    await $.wset([$t9, $t10], "Filtered", (await $.wv([$t9, $t10], "true", C, false)), C);
    await $.wset([$t9, $t10], "Cursor", (await $.wv([$t9, $t10], "crDefault", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "CBCurrencyClick", async function CBCurrencyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActnFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "DBLookupComboboxEh1Change", async function DBLookupComboboxEh1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActnFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "DTPCloseDateChange", async function DTPCloseDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "DBLookupComboboxEh1Change", [null])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "DTPOpenDateChange", async function DTPOpenDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "DBLookupComboboxEh1Change", [null])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TNewDepositsManagerArchiveFormImpl", "MenuItem1Click", async function MenuItem1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsApplyMoneyArchive.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "MenuItem2Click", async function MenuItem2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsExtractMoneyArchive.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "MouseEnterEvent", async function MouseEnterEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseEnter", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "MouseLeaveEvent", async function MouseLeaveEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseLeave", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "N35Click", async function N35Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "SearchPanel")), "Visible", $.not((await $.mv((await $.v(C, "SearchPanel")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Set_AlignWithMargins", async function Set_AlignWithMargins(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AlignWithMargins", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Set_BorderWidth", async function Set_BorderWidth(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "BorderWidth", (await $.call(C, "TBorderWidth", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Set_DockSite", async function Set_DockSite(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DockSite", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "string", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Set_ParentCustomHint", async function Set_ParentCustomHint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentCustomHint", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Set_ParentDoubleBuffered", async function Set_ParentDoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentDoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Set_PopupMode", async function Set_PopupMode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PopupMode", (await $.call(C, "TPopupMode", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPopupMode"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Set_ScreenSnap", async function Set_ScreenSnap(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ScreenSnap", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Set_SnapBuffer", async function Set_SnapBuffer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "SnapBuffer", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Set_UseDockManager", async function Set_UseDockManager(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "UseDockManager", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "TBFilterationClick", async function TBFilterationClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FilterPanel")), "Visible", $.not((await $.mv((await $.v(C, "FilterPanel")), "Visible"))));
  await $.mset((await $.v(C, "DTPOpenDate")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "DTPCloseDate")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "TBFilteration")), "Down", (await $.mv((await $.v(C, "FilterPanel")), "Visible")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerArchiveFormImpl", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.v(C, "NewDepositDataModule"));
    await $.mcall((await $.wv([$t11], "DmDataSetArchive", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
