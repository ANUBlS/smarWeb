// Generated from NewDepositsManagerForm.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsManagerForm", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "NewDepositsManager_TLB", "StdVcl", "ExtCtrls", "Grids", "Oracle", "Oracledata", "XDBGrids", "StdCtrls", "ComCtrls", "ToolWin", "DBGridEh", "Buttons", "Mask", "DBCtrlsEh", "DBLookupEh", "CMExcelExport", "ActnList", "ImgList", "Menus", "ComObj", "ComServ", "NewDepositDataModule", "NewCommonDeclsImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TNewDepositsManagerImpl", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "filterpanel": {"name": "FilterPanel", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "cbcurrency": {"name": "CBCurrency", "type": "TCheckBox"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "cbpersons": {"name": "CBpersons", "type": "TCheckBox"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "cbclienttype": {"name": "CBClientType", "type": "TCheckBox"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "cbfilial": {"name": "CBFilial", "type": "TCheckBox"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "cbcontracttype": {"name": "CBContractType", "type": "TCheckBox"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "lcbstatus": {"name": "LCBStatus", "type": "TComboBox"}, "cbstatus": {"name": "CBStatus", "type": "TCheckBox"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "dtpopendate": {"name": "DTPOpenDate", "type": "TDateTimePicker"}, "dtpclosedate": {"name": "DTPCloseDate", "type": "TDateTimePicker"}, "cbopendat": {"name": "CBOpendat", "type": "TCheckBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "bitbtnexp": {"name": "BitBtnexp", "type": "TBitBtn"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "searchpanel": {"name": "SearchPanel", "type": "TGroupBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "editcontractno": {"name": "EditContractNo", "type": "TEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "editid": {"name": "EditID", "type": "TEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "editcustomerid": {"name": "EditCustomerid", "type": "TEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "editfacticaldebt": {"name": "EditFacticalDebt", "type": "TEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "editcustomername": {"name": "EditCustomerName", "type": "TEdit"}, "maingrid": {"name": "MainGrid", "type": "TXDBGrid"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "toolbar": {"name": "ToolBar", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "tbfilteration": {"name": "TBFilteration", "type": "TToolButton"}, "actionsmenu": {"name": "ActionsMenu", "type": "TPopupMenu"}, "mideposit": {"name": "miDeposit", "type": "TMenuItem"}, "miwithdraw": {"name": "miWithdraw", "type": "TMenuItem"}, "n15": {"name": "N15", "type": "TMenuItem"}, "micapitalization": {"name": "miCapitalization", "type": "TMenuItem"}, "miuntimelywithdraw": {"name": "miUntimelyWithdraw", "type": "TMenuItem"}, "n12": {"name": "N12", "type": "TMenuItem"}, "n9": {"name": "N9", "type": "TMenuItem"}, "n36": {"name": "N36", "type": "TMenuItem"}, "lastpopupmenu": {"name": "LastPopupMenu", "type": "TPopupMenu"}, "micontract": {"name": "miContract", "type": "TMenuItem"}, "n16": {"name": "N16", "type": "TMenuItem"}, "n14": {"name": "N14", "type": "TMenuItem"}, "n17": {"name": "N17", "type": "TMenuItem"}, "n18": {"name": "N18", "type": "TMenuItem"}, "n19": {"name": "N19", "type": "TMenuItem"}, "n20": {"name": "N20", "type": "TMenuItem"}, "n21": {"name": "N21", "type": "TMenuItem"}, "n22": {"name": "N22", "type": "TMenuItem"}, "n23": {"name": "N23", "type": "TMenuItem"}, "n25": {"name": "N25", "type": "TMenuItem"}, "n24": {"name": "N24", "type": "TMenuItem"}, "n26": {"name": "N26", "type": "TMenuItem"}, "n27": {"name": "N27", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "n28": {"name": "N28", "type": "TMenuItem"}, "n10": {"name": "N10", "type": "TMenuItem"}, "n35": {"name": "N35", "type": "TMenuItem"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actnsearch": {"name": "ActnSearch", "type": "TAction"}, "actnfilter": {"name": "ActnFilter", "type": "TAction"}, "actnrefresh": {"name": "ActnRefresh", "type": "TAction"}, "statusimages": {"name": "StatusImages", "type": "TImageList"}, "eexport": {"name": "EExport", "type": "TCMExcelExport"}, "popupmenusettings": {"name": "PopupMenuSettings", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "n11": {"name": "N11", "type": "TMenuItem"}, "repairmenu": {"name": "RepairMenu", "type": "TPopupMenu"}, "n31": {"name": "N31", "type": "TMenuItem"}, "n32": {"name": "N32", "type": "TMenuItem"}, "n33": {"name": "N33", "type": "TMenuItem"}, "accountlook": {"name": "AccountLook", "type": "TMenuItem"}, "fayllarbukmarklar1": {"name": "FayllarBukmarklar1", "type": "TMenuItem"}, "iplr1": {"name": "iplr1", "type": "TMenuItem"}, "kontrol1": {"name": "Kontrol1", "type": "TMenuItem"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "statictext7": {"name": "StaticText7", "type": "TStaticText"}, "editfacticalinterestdebt": {"name": "EditFACTICALINTERESTDEBT", "type": "TEdit"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "editagentid": {"name": "EditAgentid", "type": "TEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "statictext8": {"name": "StaticText8", "type": "TStaticText"}, "editostat": {"name": "EditOstat", "type": "TEdit"}, "loqlar1": {"name": "Loqlar1", "type": "TMenuItem"}, "fevents": {"name": "FEvents", "type": "INewDepositsManagerImplEvents"}}, {});
  U.init(async () => {
    U.const("csUnknown", (-(9)));
    U.const("csCalculated", (-(10)));
    U.const("csDisabled", (-(11)));
    U.var_("depozit_custid", '', "String");
    U.var_("depozit_contractid", '', "String");
  });
  U.method("TNewDepositsManagerImpl", "ActnSearchExecute", async function ActnSearchExecute(Self, p0) {
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
  U.method("TNewDepositsManagerImpl", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TNewDepositsManagerImpl", "EditContractNoKeyPress", async function EditContractNoKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "ActnSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsManagerImpl", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  await $.inherited(Self, "TNewDepositsManagerImpl", "EventSinkChanged", [L0["eventsink"]], arguments);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TNewDepositsManagerImpl", "FayllarBukmarklar1Click", async function FayllarBukmarklar1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsWRSetup.bpl", "showSBWRBookmarkSetup"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TNewDepositsManagerImpl", "Initialize", null, arguments);
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
  U.method("TNewDepositsManagerImpl", "iplr1Click", async function iplr1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsWRGroups.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_AlignDisabled", async function Get_AlignDisabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignDisabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_AlignWithMargins", async function Get_AlignWithMargins(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignWithMargins"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_BorderWidth", async function Get_BorderWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Integer", [(await $.v(C, "BorderWidth"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_DockSite", async function Get_DockSite(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DockSite"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_ExplicitHeight", async function Get_ExplicitHeight(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitHeight"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_ExplicitLeft", async function Get_ExplicitLeft(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitLeft"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_ExplicitTop", async function Get_ExplicitTop(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitTop"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_ExplicitWidth", async function Get_ExplicitWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitWidth"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_MouseInClient", async function Get_MouseInClient(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "MouseInClient"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_ParentCustomHint", async function Get_ParentCustomHint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentCustomHint"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_ParentDoubleBuffered", async function Get_ParentDoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentDoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_PopupMode", async function Get_PopupMode(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PopupMode"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_ScreenSnap", async function Get_ScreenSnap(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ScreenSnap"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_SnapBuffer", async function Get_SnapBuffer(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "SnapBuffer"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_UseDockManager", async function Get_UseDockManager(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "UseDockManager"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "LoadPlugin3", async function LoadPlugin3(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"pluginname": $.copyArg(p0), "pluginparam": $.copyArg(p1), "pluginparam2": $.copyArg(p2), "pluginparam3": $.copyArg(p3), result: undefined, "pluginhandle": 0, "exportproc": null};
  await $.fixArgs(L0, ["pluginname", "pluginparam", "pluginparam2", "pluginparam3"]);
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), L0["pluginname"])]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportproc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], "InitPlugin"]));
    await $.stmt((await $.callv(L0["exportproc"], [L0["pluginparam"], L0["pluginparam2"], L0["pluginparam3"]])));
  }
  return L0.result;
}, {"params": ["PluginName", "PluginParam", "PluginParam2", "PluginParam3"], "kind": "procedure", "ptypes": ["String", "String", "String", "String"]});
  U.method("TNewDepositsManagerImpl", "Loqlar1Click", async function Loqlar1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsLogs.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "MainGridDblClick", async function MainGridDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "NewDepsitDataModule")), "sb_aca")), "CallProcedure", ["checkadvancedobjectaccess", ["DM_CONTRACTLOOK"]])));
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsContract.bpl", "LookContract"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "MainGridTitleClick", async function MainGridTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "sortfield": ''};
  await $.fixArgs(L0, ["column"]);
  L0["sortfield"] = (await $.mv(L0["column"], "FieldName"));
  if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "MarkerIndex")), 2))) {
    L0["sortfield"] = $.add(L0["sortfield"], " DESC");
  } else {
    L0["sortfield"] = $.add(L0["sortfield"], " ASC");
  }
  {
    const $t3 = (await $.call(C, "TXDBGrid", [(await $.mv(L0["column"], "Grid"))]));
    const $t4 = (await $.wcall([$t3], "TOracleDataSet", [(await $.mv((await $.wv([$t3], "DataSource", C, false)), "DataSet"))], C));
    await $.stmt($.wcall([$t3, $t4], "BeginOrderUpdate", [], C));
    try {
      await $.stmt((await $.wcall([$t3, $t4], "SetVariable", ["OrderField", (await $.wv([$t3, $t4], "SortField", { get: async () => L0["sortfield"], set: async (v) => { L0["sortfield"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t3, $t4], "RefResh", [], C));
    } finally {
      await $.stmt($.wcall([$t3, $t4], "EndOrderUpdate", [], C));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TNewDepositsManagerImpl", "miCapitalizationClick", async function miCapitalizationClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsCapitalize.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "miUntimelyWithdrawClick", async function miUntimelyWithdrawClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "NewDepsitDataModule")), "sb_aca")), "CallProcedure", ["checkadvancedobjectaccess", ["REPAYMENT"]])));
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsUntimelyEtMoney.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "miWithdrawClick", async function miWithdrawClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsExtractMoney.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "AccountLookClick", async function AccountLookClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "depozit_custid", (await $.mv((await $.mcall((await $.mv((await $.v(C, "NewDepsitDataModule")), "DmDataSet")), "FieldByName", ["CUSTOMERID"])), "Asstring")));
  await $.set(C, "depozit_contractid", (await $.mv((await $.mcall((await $.mv((await $.v(C, "NewDepsitDataModule")), "DmDataSet")), "FieldByName", ["ID"])), "Asstring")));
  await $.stmt((await $.call(C, "LoadPlugin3", ["Sb_General.bpl", "depozit_stetment", (await $.v(C, "depozit_custid")), (await $.v(C, "depozit_contractid"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TNewDepositsManagerImpl", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "BitBtnexpClick", async function BitBtnexpClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "EExport"));
    await $.mcall((await $.mv((await $.mv((await $.wv([$t5], "MainGrid", C, false)), "DataSource")), "DataSet")), "Last", []);
    await $.stmt($.wcall([$t5], "Connect", [], C));
    await $.stmt((await $.wcall([$t5], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t5], "MainGrid", C, false)), "DataSource")), "DataSet")), "Depozitlər", (await $.wv([$t5], "True", C, false)), (await $.wv([$t5], "False", C, false))], C)));
    await $.stmt($.wcall([$t5], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "BuildFilterString", async function BuildFilterString(Self) {
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
    { const $t6 = (await $.mv((await $.v(C, "LCBStatus")), "ItemIndex"));
      if ($.eq($t6, 0)) {
        L0["fstatus"] = "(status = 1)";
      }
      else if ($.eq($t6, 1)) {
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
  U.method("TNewDepositsManagerImpl", "PrepareFilter", async function PrepareFilter(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t7 = (await $.v(C, "NewDepsitDataModule"));
    await $.mset((await $.wv([$t7], "DBLookupComboboxEh1", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t7], "Valutes", C, false)), "fieldByName", ["Valute"])), "AsInteger")));
    await $.mset((await $.wv([$t7], "DBLookupComboboxEh2", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t7], "Filials", C, false)), "fieldByName", ["id"])), "AsInteger")));
    await $.mset((await $.wv([$t7], "DBLookupComboboxEh3", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t7], "dm_types", C, false)), "fieldByName", ["id"])), "AsInteger")));
    await $.mset((await $.wv([$t7], "DBLookupComboboxEh4", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t7], "dm_categories", C, false)), "fieldByName", ["id"])), "AsInteger")));
    await $.mset((await $.wv([$t7], "DBLookupComboboxEh5", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t7], "dm_persons", C, false)), "fieldByName", ["id"])), "AsInteger")));
    await $.mset((await $.wv([$t7], "LCBStatus", C, false)), "ItemIndex", 0);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TNewDepositsManagerImpl", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "NewDepsitDataModule", (await $.mcall((await $.v(C, "TNewDepsitDataModule")), "Create", [Self])));
  await $.stmt($.call(C, "PrepareFilter", []));
  await $.set(C, "ApplicationPath", (await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])));
  await $.set(C, "CommonApplication", (await $.v(C, "Application")));
  await $.set(C, "CommonGrid", (await $.v(C, "MainGrid")));
  {
    const $t8 = (await $.v(C, "NewDepsitDataModule"));
    await $.wset([$t8], "Get_FilialID", (await $.mv((await $.mcall((await $.wv([$t8], "FilialID", C, false)), "FieldByname", ["kod_fil"])), "AsInteger")), C);
    await $.wset([$t8], "Get_BankDate", (await $.mv((await $.mcall((await $.wv([$t8], "BankDate", C, false)), "FieldByname", ["Tek_Dat"])), "AsDateTime")), C);
  }
  await $.mset((await $.v(C, "DTPOpenDate")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "DTPCloseDate")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "ActiveFormDestroy", async function ActiveFormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "NewDepsitDataModule")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "ActnFilterExecute", async function ActnFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.v(C, "MainGrid"));
    const $t10 = (await $.wv([$t9], "SelectedRows", C, false));
    await $.stmt($.wcall([$t9, $t10], "Clear", [], C));
  }
  {
    const $t11 = (await $.v(C, "MainGrid"));
    const $t12 = (await $.mv((await $.wv([$t11], "DataSource", C, false)), "DataSet"));
    await $.wset([$t11, $t12], "Cursor", (await $.wv([$t11, $t12], "crSqlWait", C, false)), C);
    await $.wset([$t11, $t12], "Filtered", (await $.wv([$t11, $t12], "False", C, false)), C);
    await $.wset([$t11, $t12], "Filter", (await $.wv([$t11, $t12], "BuildFilterString", C, false)), C);
    await $.wset([$t11, $t12], "Filtered", (await $.wv([$t11, $t12], "true", C, false)), C);
    await $.wset([$t11, $t12], "Cursor", (await $.wv([$t11, $t12], "crDefault", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "CBCurrencyClick", async function CBCurrencyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActnFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "DBLookupComboboxEh1Change", async function DBLookupComboboxEh1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActnFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "DTPCloseDateChange", async function DTPCloseDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "DBLookupComboboxEh1Change", [null])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TNewDepositsManagerImpl", "Kontrol1Click", async function Kontrol1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsControl.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "MouseEnterEvent", async function MouseEnterEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseEnter", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "MouseLeaveEvent", async function MouseLeaveEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseLeave", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "N10Click", async function N10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsFilter.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "N11Click", async function N11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsBalanceSettings.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "N12Click", async function N12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsPercentConverting.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "N16Click", async function N16Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsContract.bpl", "InsertContract"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "N17Click", async function N17Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "NewDepsitDataModule")), "sb_aca")), "CallProcedure", ["checkadvancedobjectaccess", ["DM_CONTRACTUPDATE"]])));
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsContract.bpl", "EditContract"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "N18Click", async function N18Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "cf": '', "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["cfmsg"] = "Müqavilə bağlannır, əminsinizmi?";
  L0["cfselmsg"] = "Seçilmiş müqavilələr bağlanır, əminsinizmi?";
  {
    const $t13 = (await $.v(C, "MainGrid"));
    const $t14 = (await $.wv([$t13], "SelectedRows", C, false));
    if ($.truthy($.gt((await $.wv([$t13, $t14], "Count", C, false)), 1))) {
      await $.wset([$t13, $t14], "Cf", (await $.wv([$t13, $t14], "CfSelMsg", { get: async () => L0["cfselmsg"], set: async (v) => { L0["cfselmsg"] = v; }, local: true }, false)), { get: async () => L0["cf"], set: async (v) => { L0["cf"] = v; }, local: true });
    } else {
      await $.wset([$t13, $t14], "Cf", (await $.wv([$t13, $t14], "CfMsg", { get: async () => L0["cfmsg"], set: async (v) => { L0["cfmsg"] = v; }, local: true }, false)), { get: async () => L0["cf"], set: async (v) => { L0["cf"] = v; }, local: true });
    }
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["cf"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNo"))))) {
    return L0.result;
  }
  {
    const $t15 = (await $.v(C, "MainGrid"));
    const $t16 = (await $.wv([$t15], "SelectedRows", C, false));
    const $t17 = (await $.mv((await $.wv([$t15, $t16], "DataSource", C, false)), "DataSet"));
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t15, $t16, $t17], "NewDepsitDataModule", C, false)), "dm_stored_programs")), "CallProcedure", ["CloseDeposit", ["ContractID", (await $.mv((await $.wcall([$t15, $t16, $t17], "FieldByName", ["ID"], C)), "AsInteger"))]])));
  }
  await $.stmt($.call(C, "Refresh", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "N19Click", async function N19Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "calculationenabled": false, "confmsg": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t18 = (await $.v(C, "NewDepsitDataModule"));
    const $t19 = (await $.wv([$t18], "dm_stored_programs", C, false));
    await $.wset([$t18, $t19], "CalculationEnabled", (await $.wcall([$t18, $t19], "CallBooleanFunction", ["IsCalculationEnabled", ["ContractID", (await $.wv([$t18, $t19], "get_SelectedContID", C, false))]], C)), { get: async () => L0["calculationenabled"], set: async (v) => { L0["calculationenabled"] = v; }, local: true });
  }
  if ($.truthy(L0["calculationenabled"])) {
    L0["confmsg"] = "Faizlərin hesablanması dayandırılır, əminsinizmi?";
  } else {
    L0["confmsg"] = "Faizlərin hesablanması davam etdirilir, əminsinizmi?";
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["confmsg"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t20 = (await $.v(C, "NewDepsitDataModule"));
      const $t21 = (await $.wv([$t20], "dm_stored_programs", C, false));
      if ($.truthy((await $.wv([$t20, $t21], "CalculationEnabled", { get: async () => L0["calculationenabled"], set: async (v) => { L0["calculationenabled"] = v; }, local: true }, false)))) {
        await $.stmt((await $.wcall([$t20, $t21], "CallProcedure", ["DisableCalculation", ["ContractID", (await $.wv([$t20, $t21], "get_SelectedContID", C, false))]], C)));
      } else {
        await $.stmt((await $.wcall([$t20, $t21], "CallProcedure", ["EnableCalculation", ["ContractID", (await $.wv([$t20, $t21], "get_SelectedContID", C, false))]], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "N21Click", async function N21Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsWReport.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "N23Click", async function N23Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsApplyMoney.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "N25Click", async function N25Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsExtractMoney.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "N27Click", async function N27Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsPercentConverting.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "N28Click", async function N28Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "saveid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "NewDepsitDataModule")), "DmDataSet")), "RecordCount")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "MainGrid")), "SelectedRows")), "Clear", []);
    {
      const $t22 = (await $.v(C, "NewDepsitDataModule"));
      const $t23 = (await $.wv([$t22], "DmDataSet", C, false));
      await $.wset([$t22, $t23], "SaveID", (await $.wv([$t22, $t23], "Get_SelectedContID", C, false)), { get: async () => L0["saveid"], set: async (v) => { L0["saveid"] = v; }, local: true });
      await $.stmt($.wcall([$t22, $t23], "Close", [], C));
      await $.stmt($.wcall([$t22, $t23], "Open", [], C));
      await $.stmt((await $.wcall([$t22, $t23], "Locate", ["ID", (await $.wv([$t22, $t23], "SaveID", { get: async () => L0["saveid"], set: async (v) => { L0["saveid"] = v; }, local: true }, false)), []], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "N2Click", async function N2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsSettings.bpl", "showcccgroups"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "N32Click", async function N32Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsReport.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "N35Click", async function N35Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "SearchPanel")), "Visible", $.not((await $.mv((await $.v(C, "SearchPanel")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "N36Click", async function N36Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsShedule.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "N3Click", async function N3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsSettings.bpl", "showcategories"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "N4Click", async function N4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsSettings.bpl", "showdeposittypes"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "N5Click", async function N5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsSettings.bpl", "showaccountturning"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "N7Click", async function N7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsPercentSettings.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "N9Click", async function N9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["NewDepositsProlongation.bpl", ""])));
  await $.mcall((await $.mv((await $.v(C, "NewDepsitDataModule")), "DmDataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "Set_AlignWithMargins", async function Set_AlignWithMargins(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AlignWithMargins", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerImpl", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerImpl", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerImpl", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TNewDepositsManagerImpl", "Set_BorderWidth", async function Set_BorderWidth(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "BorderWidth", (await $.call(C, "TBorderWidth", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TNewDepositsManagerImpl", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TNewDepositsManagerImpl", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TNewDepositsManagerImpl", "Set_DockSite", async function Set_DockSite(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DockSite", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerImpl", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerImpl", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerImpl", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerImpl", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TNewDepositsManagerImpl", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "string", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TNewDepositsManagerImpl", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerImpl", "Set_ParentCustomHint", async function Set_ParentCustomHint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentCustomHint", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerImpl", "Set_ParentDoubleBuffered", async function Set_ParentDoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentDoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerImpl", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TNewDepositsManagerImpl", "Set_PopupMode", async function Set_PopupMode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PopupMode", (await $.call(C, "TPopupMode", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPopupMode"]});
  U.method("TNewDepositsManagerImpl", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TNewDepositsManagerImpl", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerImpl", "Set_ScreenSnap", async function Set_ScreenSnap(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ScreenSnap", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerImpl", "Set_SnapBuffer", async function Set_SnapBuffer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "SnapBuffer", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TNewDepositsManagerImpl", "Set_UseDockManager", async function Set_UseDockManager(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "UseDockManager", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerImpl", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TNewDepositsManagerImpl", "TBFilterationClick", async function TBFilterationClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FilterPanel")), "Visible", $.not((await $.mv((await $.v(C, "FilterPanel")), "Visible"))));
  await $.mset((await $.v(C, "DTPOpenDate")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "DTPCloseDate")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "TBFilteration")), "Down", (await $.mv((await $.v(C, "FilterPanel")), "Visible")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "N28Click", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsManagerImpl", "ToolButton9MouseActivate", async function ToolButton9MouseActivate(Self, p0, p1, p2, p3, p4, p5, p6) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), "hittest": $.copyArg(p5), "mouseactivate": $.asRef(p6), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y", "hittest"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "NewDepsitDataModule")), "sb_aca")), "CallProcedure", ["checkadvancedobjectaccess", ["DM_ADMIN"]])));
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y", "HitTest", "MouseActivate"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer", "Integer", "TMouseActivate"]});
  return U;
}
