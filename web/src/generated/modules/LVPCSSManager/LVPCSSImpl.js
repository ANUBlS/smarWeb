// Generated from LVPCSSImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("LVPCSSImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "nlsDialogs", "ActiveX", "AxCtrls", "LVPCSSManager_TLB", "StdVcl", "StdCtrls", "ComCtrls", "ExtCtrls", "Grids", "DBGrids", "Mask", "DBCtrls", "ToolWin", "ActnList", "Menus", "ImgList", "Db", "OracleData", "FileCtrl", "sboapiDataModuleImpl", "QuickRpt", "Qrctrls", "Dialogs", "Buttons", "CMHintDBLookupComboBox", "NLSLocalizer", "DBGridEh", "ComObj", "ComServ", "Data_Unit", "Transaction_Unit", "Payment_Det", "TransTypeUnit", "Properties_Unit", "PrepareFile_Unit", "FileSend_Unit", "ReceiveMessDetals_Unit", "AcceptTransUnit", "Unit_setting", "unit_Report", "Admin_Setting", "Unit_Report_in", "Vergi_Unit", "Unit_ReportX", "Witch", "LDialogs", "Unit_ReportinX"]);
  const C = [U];
  U.defClass("TLVPCSSForm", "TActiveForm", {"opendialogin": {"name": "OpenDialogIn", "type": "TOpenDialog"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "imagelistfilial": {"name": "ImageListFilial", "type": "TImageList"}, "popupmt102": {"name": "PopupMT102", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n15": {"name": "N15", "type": "TMenuItem"}, "n19": {"name": "N19", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n18": {"name": "N18", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "popupmessin": {"name": "PopupMessIn", "type": "TPopupMenu"}, "menuitem5": {"name": "MenuItem5", "type": "TMenuItem"}, "menuitem3": {"name": "MenuItem3", "type": "TMenuItem"}, "menuitem6": {"name": "MenuItem6", "type": "TMenuItem"}, "menuitem7": {"name": "MenuItem7", "type": "TMenuItem"}, "n13": {"name": "N13", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n17": {"name": "N17", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "n21": {"name": "N21", "type": "TMenuItem"}, "infopopup": {"name": "InfoPopup", "type": "TPopupMenu"}, "clear1": {"name": "Clear1", "type": "TMenuItem"}, "popup_singleconvert": {"name": "Popup_SingleConvert", "type": "TPopupMenu"}, "convert1": {"name": "Convert1", "type": "TMenuItem"}, "convertall1": {"name": "ConvertAll1", "type": "TMenuItem"}, "n14": {"name": "N14", "type": "TMenuItem"}, "sendtoarchive2": {"name": "Sendtoarchive2", "type": "TMenuItem"}, "sendtoarchive1": {"name": "SendToArchive1", "type": "TMenuItem"}, "n20": {"name": "N20", "type": "TMenuItem"}, "clearselected1": {"name": "ClearSelected1", "type": "TMenuItem"}, "clearlist1": {"name": "ClearList1", "type": "TMenuItem"}, "popupmessout": {"name": "PopupMessOut", "type": "TPopupMenu"}, "menuitem1": {"name": "MenuItem1", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "menuitem2": {"name": "MenuItem2", "type": "TMenuItem"}, "menuitem4": {"name": "MenuItem4", "type": "TMenuItem"}, "n12": {"name": "N12", "type": "TMenuItem"}, "n10": {"name": "N10", "type": "TMenuItem"}, "n11": {"name": "N11", "type": "TMenuItem"}, "n16": {"name": "N16", "type": "TMenuItem"}, "n9": {"name": "N9", "type": "TMenuItem"}, "mainaction": {"name": "MainAction", "type": "TActionList"}, "mt102insert": {"name": "Mt102Insert", "type": "TAction"}, "mt102delete": {"name": "MT102Delete", "type": "TAction"}, "mt102refresh": {"name": "Mt102Refresh", "type": "TAction"}, "mt102accept": {"name": "Mt102Accept", "type": "TAction"}, "messagesoutadd": {"name": "MessagesOutAdd", "type": "TAction"}, "messagesoutedit": {"name": "MessagesOutEdit", "type": "TAction"}, "messoutdelete": {"name": "MessOutDelete", "type": "TAction"}, "messagesoutaccept": {"name": "MessagesOutAccept", "type": "TAction"}, "messagesinconvert": {"name": "MessagesInConvert", "type": "TAction"}, "messagesinedit": {"name": "MessagesInEdit", "type": "TAction"}, "messagesinrefresh": {"name": "MessagesInRefresh", "type": "TAction"}, "messindelete": {"name": "MessInDelete", "type": "TAction"}, "messagesinaccept": {"name": "MessagesInAccept", "type": "TAction"}, "messageoutselall": {"name": "MessageOutSelAll", "type": "TAction"}, "messageinselall": {"name": "MessageInSelAll", "type": "TAction"}, "mt102edit": {"name": "Mt102Edit", "type": "TAction"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "mainpagecontrol": {"name": "MainPageControl", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "panelbeneficary": {"name": "PanelBeneficary", "type": "TPanel"}, "controlbar2": {"name": "ControlBar2", "type": "TControlBar"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "messacceptbutton": {"name": "MessAcceptButton", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "panel27": {"name": "Panel27", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "dbedit23": {"name": "DBEdit23", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "dbedit24": {"name": "DBEdit24", "type": "TDBEdit"}, "panel26": {"name": "Panel26", "type": "TPanel"}, "gridbeneficiary": {"name": "GridBeneficiary", "type": "TDBGrid"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "gridbatchs": {"name": "GridBatchs", "type": "TDBGrid"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "dbedit19": {"name": "DBEdit19", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel24": {"name": "Panel24", "type": "TPanel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbedit21": {"name": "DBEdit21", "type": "TDBEdit"}, "dbedit22": {"name": "DBEdit22", "type": "TDBEdit"}, "dbedit20": {"name": "DBEdit20", "type": "TDBEdit"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "controlbar3": {"name": "ControlBar3", "type": "TControlBar"}, "toolbar3": {"name": "ToolBar3", "type": "TToolBar"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "buttonmessinconvert": {"name": "ButtonMessInConvert", "type": "TToolButton"}, "buttonmessinrefresh": {"name": "ButtonMessInRefresh", "type": "TToolButton"}, "buttonmessineedit": {"name": "ButtonMessIneEdit", "type": "TToolButton"}, "buttonmessindel": {"name": "ButtonMessInDel", "type": "TToolButton"}, "buttonmessinaccept": {"name": "ButtonMessInAccept", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "panel25": {"name": "Panel25", "type": "TPanel"}, "stdate_in": {"name": "StDate_in", "type": "TDateTimePicker"}, "enddate_in": {"name": "EndDate_in", "type": "TDateTimePicker"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "messageinfileload": {"name": "MessageInFileLoad", "type": "TAction"}, "pgoutarchive": {"name": "PgOutArchive", "type": "TTabSheet"}, "controlbar4": {"name": "ControlBar4", "type": "TControlBar"}, "toolbar4": {"name": "ToolBar4", "type": "TToolBar"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "toolbutton19": {"name": "ToolButton19", "type": "TToolButton"}, "toolbutton22": {"name": "ToolButton22", "type": "TToolButton"}, "outarchrefresh": {"name": "OutArchRefresh", "type": "TToolButton"}, "toolbutton24": {"name": "ToolButton24", "type": "TToolButton"}, "toolbutton25": {"name": "ToolButton25", "type": "TToolButton"}, "toolbutton26": {"name": "ToolButton26", "type": "TToolButton"}, "toolbutton27": {"name": "ToolButton27", "type": "TToolButton"}, "toolbutton28": {"name": "ToolButton28", "type": "TToolButton"}, "toolbutton29": {"name": "ToolButton29", "type": "TToolButton"}, "toolbutton30": {"name": "ToolButton30", "type": "TToolButton"}, "toolbutton31": {"name": "ToolButton31", "type": "TToolButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dtpickoutarchbeg": {"name": "DTPickOutArchBeg", "type": "TDateTimePicker"}, "dtpickoutarchend": {"name": "DTPickOutArchEnd", "type": "TDateTimePicker"}, "toolbutton32": {"name": "ToolButton32", "type": "TToolButton"}, "panel28": {"name": "Panel28", "type": "TPanel"}, "dbgridoutarchbatchs": {"name": "DBGridOUTArchBatchs", "type": "TDBGrid"}, "panel29": {"name": "Panel29", "type": "TPanel"}, "panel30": {"name": "Panel30", "type": "TPanel"}, "dbedit25": {"name": "DBEdit25", "type": "TDBEdit"}, "dbedit26": {"name": "DBEdit26", "type": "TDBEdit"}, "dbedit27": {"name": "DBEdit27", "type": "TDBEdit"}, "dbedit28": {"name": "DBEdit28", "type": "TDBEdit"}, "dbedit29": {"name": "DBEdit29", "type": "TDBEdit"}, "dbedit30": {"name": "DBEdit30", "type": "TDBEdit"}, "dbedit31": {"name": "DBEdit31", "type": "TDBEdit"}, "panel31": {"name": "Panel31", "type": "TPanel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbedit32": {"name": "DBEdit32", "type": "TDBEdit"}, "dbedit33": {"name": "DBEdit33", "type": "TDBEdit"}, "dbedit34": {"name": "DBEdit34", "type": "TDBEdit"}, "panel32": {"name": "Panel32", "type": "TPanel"}, "controlbar5": {"name": "ControlBar5", "type": "TControlBar"}, "toolbar5": {"name": "ToolBar5", "type": "TToolBar"}, "toolbutton33": {"name": "ToolButton33", "type": "TToolButton"}, "toolbutton34": {"name": "ToolButton34", "type": "TToolButton"}, "toolbutton35": {"name": "ToolButton35", "type": "TToolButton"}, "toolbutton36": {"name": "ToolButton36", "type": "TToolButton"}, "toolbutton37": {"name": "ToolButton37", "type": "TToolButton"}, "panel33": {"name": "Panel33", "type": "TPanel"}, "panel34": {"name": "Panel34", "type": "TPanel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "dbedit35": {"name": "DBEdit35", "type": "TDBEdit"}, "dbedit36": {"name": "DBEdit36", "type": "TDBEdit"}, "dbedit37": {"name": "DBEdit37", "type": "TDBEdit"}, "dbedit38": {"name": "DBEdit38", "type": "TDBEdit"}, "dbedit39": {"name": "DBEdit39", "type": "TDBEdit"}, "panel35": {"name": "Panel35", "type": "TPanel"}, "dbgridoutarchbeneficiary": {"name": "DBGridOUTArchBeneficiary", "type": "TDBGrid"}, "popupmenuconvert": {"name": "PopupMenuConvert", "type": "TPopupMenu"}, "convertconfirme": {"name": "ConvertConfirme", "type": "TMenuItem"}, "n22": {"name": "N22", "type": "TMenuItem"}, "popmenuarchprint": {"name": "PopMenuArchPrint", "type": "TPopupMenu"}, "print1": {"name": "Print1", "type": "TMenuItem"}, "n23": {"name": "N23", "type": "TMenuItem"}, "popmenuarc": {"name": "PopMenuArc", "type": "TPopupMenu"}, "menuitem15": {"name": "MenuItem15", "type": "TMenuItem"}, "controlbar1": {"name": "ControlBar1", "type": "TControlBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "acceptbutton": {"name": "AcceptButton", "type": "TToolButton"}, "toolbutton20": {"name": "ToolButton20", "type": "TToolButton"}, "toolbutton39": {"name": "ToolButton39", "type": "TToolButton"}, "toolbutton38": {"name": "ToolButton38", "type": "TToolButton"}, "toolbutton23": {"name": "ToolButton23", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton21": {"name": "ToolButton21", "type": "TToolButton"}, "btnsendtoarchive": {"name": "BtnSendToArchive", "type": "TToolButton"}, "panel22": {"name": "Panel22", "type": "TPanel"}, "stdate": {"name": "StDate", "type": "TDateTimePicker"}, "enddate": {"name": "EndDate", "type": "TDateTimePicker"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "controlbar6": {"name": "ControlBar6", "type": "TControlBar"}, "toolbar6": {"name": "ToolBar6", "type": "TToolBar"}, "toolbutton41": {"name": "ToolButton41", "type": "TToolButton"}, "toolbutton45": {"name": "ToolButton45", "type": "TToolButton"}, "panel36": {"name": "Panel36", "type": "TPanel"}, "incbdate": {"name": "INCBDATE", "type": "TDateTimePicker"}, "incedate": {"name": "INCEDATE", "type": "TDateTimePicker"}, "toolbutton46": {"name": "ToolButton46", "type": "TToolButton"}, "toolbutton18": {"name": "ToolButton18", "type": "TToolButton"}, "toolbutton40": {"name": "ToolButton40", "type": "TToolButton"}, "panel37": {"name": "Panel37", "type": "TPanel"}, "panel38": {"name": "Panel38", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "panel_info": {"name": "Panel_info", "type": "TPanel"}, "info_listbox": {"name": "Info_ListBox", "type": "TListBox"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "splitter2": {"name": "Splitter2", "type": "TSplitter"}, "filelistincoming": {"name": "FileListIncoming", "type": "TListBox"}, "richedit1": {"name": "RichEdit1", "type": "TRichEdit"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "dbedit13": {"name": "DBEdit13", "type": "TDBEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEdit"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "panel21": {"name": "Panel21", "type": "TPanel"}, "dbedit15": {"name": "DBEdit15", "type": "TDBEdit"}, "panel23": {"name": "Panel23", "type": "TPanel"}, "dbedit16": {"name": "DBEdit16", "type": "TDBEdit"}, "panel39": {"name": "Panel39", "type": "TPanel"}, "dbedit18": {"name": "DBEdit18", "type": "TDBEdit"}, "panel40": {"name": "Panel40", "type": "TPanel"}, "panel41": {"name": "Panel41", "type": "TPanel"}, "dbedit17": {"name": "DBEdit17", "type": "TDBEdit"}, "panel42": {"name": "Panel42", "type": "TPanel"}, "dbedit14": {"name": "DBEdit14", "type": "TDBEdit"}, "gridincoming": {"name": "GridIncoming", "type": "TDBGrid"}, "panel43": {"name": "Panel43", "type": "TPanel"}, "dbedit40": {"name": "DBEdit40", "type": "TDBEdit"}, "panel44": {"name": "Panel44", "type": "TPanel"}, "dbedit41": {"name": "DBEdit41", "type": "TDBEdit"}, "panel45": {"name": "Panel45", "type": "TPanel"}, "dbedit42": {"name": "DBEdit42", "type": "TDBEdit"}, "panel46": {"name": "Panel46", "type": "TPanel"}, "dbedit43": {"name": "DBEdit43", "type": "TDBEdit"}, "panel47": {"name": "Panel47", "type": "TPanel"}, "dbedit44": {"name": "DBEdit44", "type": "TDBEdit"}, "panel48": {"name": "Panel48", "type": "TPanel"}, "dbedit45": {"name": "DBEdit45", "type": "TDBEdit"}, "panel49": {"name": "Panel49", "type": "TPanel"}, "dbedit46": {"name": "DBEdit46", "type": "TDBEdit"}, "panel50": {"name": "Panel50", "type": "TPanel"}, "dbedit47": {"name": "DBEdit47", "type": "TDBEdit"}, "panel51": {"name": "Panel51", "type": "TPanel"}, "dbedit48": {"name": "DBEdit48", "type": "TDBEdit"}, "gridincomingarchive": {"name": "GridIncomingArchive", "type": "TDBGrid"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}, "panel52": {"name": "Panel52", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n24": {"name": "N24", "type": "TMenuItem"}, "n25": {"name": "N25", "type": "TMenuItem"}, "n26": {"name": "N26", "type": "TMenuItem"}, "fevents": {"name": "FEvents", "type": "ILVPCSSEvents"}}, {});
  U.init(async () => {
    U.var_("LVPCSSForm", null, "TLVPCSSForm");
    U.var_("new_id", 0, "integer");
    U.var_("Batchs_Edit", false, "boolean");
    U.var_("Mess_Edit", false, "boolean");
    U.var_("After_Add", false, "boolean");
    U.var_("Trans_Date", 0, "TDateTime");
    U.var_("AcceptTransForCreated", false, "Boolean");
  });
  U.method("TLVPCSSForm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TLVPCSSForm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TLVPCSSForm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TLVPCSSForm", "Initialize", null, arguments);
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
  U.method("TLVPCSSForm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLVPCSSForm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLVPCSSForm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLVPCSSForm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLVPCSSForm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLVPCSSForm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLVPCSSForm", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLVPCSSForm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLVPCSSForm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLVPCSSForm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLVPCSSForm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLVPCSSForm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLVPCSSForm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLVPCSSForm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLVPCSSForm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLVPCSSForm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLVPCSSForm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLVPCSSForm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLVPCSSForm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TLVPCSSForm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TLVPCSSForm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TLVPCSSForm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TLVPCSSForm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TLVPCSSForm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TLVPCSSForm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TLVPCSSForm", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TLVPCSSForm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TLVPCSSForm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TLVPCSSForm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TLVPCSSForm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TLVPCSSForm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TLVPCSSForm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TLVPCSSForm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TLVPCSSForm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TLVPCSSForm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TLVPCSSForm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TLVPCSSForm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "LVPCSSForm", Self);
  await $.set(C, "DataMod", (await $.mcall((await $.v(C, "TDatamod")), "Create", [Self])));
  await $.set(C, "TransForm", (await $.mcall((await $.v(C, "TTransForm")), "Create", [Self])));
  await $.set(C, "PaymentDetalsForm", (await $.mcall((await $.v(C, "TPaymentDetalsForm")), "Create", [Self])));
  await $.set(C, "TransCodeForm", (await $.mcall((await $.v(C, "TTransCodeForm")), "Create", [Self])));
  await $.set(C, "PropertiesForm", (await $.mcall((await $.v(C, "TPropertiesForm")), "Create", [Self])));
  await $.set(C, "PrepareFile_Form", (await $.mcall((await $.v(C, "TPrepareFile_Form")), "Create", [Self])));
  await $.set(C, "SendFileForm", (await $.mcall((await $.v(C, "TSendFileForm")), "Create", [Self])));
  await $.set(C, "RecMessDet_form", (await $.mcall((await $.v(C, "TRecMessDet_form")), "Create", [Self])));
  await $.set(C, "Form_Setting", (await $.mcall((await $.v(C, "TForm_Setting")), "Create", [Self])));
  await $.set(C, "Form_Admin_Setting", (await $.mcall((await $.v(C, "TForm_Admin_Setting")), "Create", [Self])));
  await $.set(C, "VergiForm", (await $.mcall((await $.v(C, "TVergiForm")), "Create", [Self])));
  await $.set(C, "FORMWITCH", (await $.mcall((await $.v(C, "TFormWitch")), "Create", [Self])));
  await $.set(C, "ReportinX", (await $.mcall((await $.v(C, "TReportinX")), "Create", [Self])));
  try {
    {
      const $t2 = (await $.mv((await $.v(C, "DataMod")), "SB_ACA"));
      await $.stmt((await $.wcall([$t2], "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKSBENIFICARY"]], C)));
    }
  } catch ($t1) {
    $.rethrowControl($t1);
    $.handled($t1);
    await $.mcall((await $.v(C, "PanelBeneficary")), "Hide", []);
  }
  try {
    {
      const $t4 = (await $.mv((await $.v(C, "DataMod")), "SB_ACA"));
      await $.stmt((await $.wcall([$t4], "CallProcedure", ["CheckAdvancedObjectAccess", ["VERIFIKATOR"]], C)));
    }
    await $.mset((await $.v(C, "StDate")), "date", (await $.v(C, "GetUseDate")));
    await $.mset((await $.v(C, "EndDate")), "date", (await $.v(C, "GetUseDate")));
    await $.stmt($.call(C, "selectdate", []));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Close", []);
    await $.mset((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Filtered", true);
    await $.mset((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Filter", "((status=1) and (FILIAL=0))or(status=5)or(status=7)");
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Close", []);
    await $.mset((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Filtered", true);
    await $.mset((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Filter", "(status=1 )or(status=5)or(status=7)");
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Open", []);
  } catch ($t3) {
    $.rethrowControl($t3);
    $.handled($t3);
  }
  try {
    {
      const $t6 = (await $.mv((await $.v(C, "DataMod")), "SB_ACA"));
      await $.stmt((await $.wcall([$t6], "CallProcedure", ["CheckAdvancedObjectAccess", ["FVERIFIKATOR"]], C)));
    }
    await $.mset((await $.v(C, "StDate")), "date", (await $.v(C, "GetUseDate")));
    await $.mset((await $.v(C, "EndDate")), "date", (await $.v(C, "GetUseDate")));
    await $.stmt($.call(C, "selectdate", []));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Close", []);
    await $.mset((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Filtered", true);
    await $.mset((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Filter", "((status=1) and ( FILIAL>0))");
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Close", []);
    await $.mset((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Filtered", true);
    await $.mset((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Filter", "(status=1)");
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Open", []);
  } catch ($t5) {
    $.rethrowControl($t5);
    $.handled($t5);
  }
  try {
    {
      const $t8 = (await $.mv((await $.v(C, "DataMod")), "SB_ACA"));
      await $.stmt((await $.wcall([$t8], "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_CREATEFILE"]], C)));
    }
    await $.mset((await $.v(C, "StDate")), "date", (await $.v(C, "GetUseDate")));
    await $.mset((await $.v(C, "EndDate")), "date", (await $.v(C, "GetUseDate")));
    await $.stmt($.call(C, "selectdate", []));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Close", []);
    await $.mset((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Filtered", true);
    await $.mset((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Filter", "(status=6)");
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Close", []);
    await $.mset((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Filtered", true);
    await $.mset((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Filter", "(status=6)");
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Open", []);
  } catch ($t7) {
    $.rethrowControl($t7);
    $.handled($t7);
  }
  try {
    {
      const $t10 = (await $.mv((await $.v(C, "DataMod")), "SB_ACA"));
      await $.stmt((await $.wcall([$t10], "CallProcedure", ["CheckAdvancedObjectAccess", ["AVTORIZATOR"]], C)));
    }
    await $.mset((await $.v(C, "StDate")), "date", (await $.v(C, "GetUseDate")));
    await $.mset((await $.v(C, "EndDate")), "date", (await $.v(C, "GetUseDate")));
    await $.stmt($.call(C, "selectdate", []));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Close", []);
    await $.mset((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Filtered", true);
    await $.mset((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Filter", "(status=4)");
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Close", []);
    await $.mset((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Filtered", true);
    await $.mset((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Filter", "(status=4)");
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Open", []);
  } catch ($t9) {
    $.rethrowControl($t9);
    $.handled($t9);
  }
  try {
    {
      const $t12 = (await $.mv((await $.v(C, "DataMod")), "SB_ACA"));
      await $.stmt((await $.wcall([$t12], "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_0"]], C)));
    }
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "close", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "close", []);
    await $.mset((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Filtered", false);
    await $.mset((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Filtered", false);
  } catch ($t11) {
    $.rethrowControl($t11);
    $.handled($t11);
  }
  await $.mset((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "Active", true);
  await $.mset((await $.v(C, "StDate")), "date", (await $.v(C, "GetUseDate")));
  await $.mset((await $.v(C, "EndDate")), "date", (await $.v(C, "GetUseDate")));
  await $.stmt($.call(C, "selectdate", []));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataSetFilial")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "open", []);
  await $.mset((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "Active", true);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_CODE")), "Open", []);
  await $.mset((await $.v(C, "MainPageControl")), "ActivePageIndex", 0);
  await $.mset((await $.idx((await $.mv((await $.v(C, "MainPageControl")), "Pages")), [0])), "Highlighted", true);
  await $.stmt($.call(C, "UpdateFileInList", []));
  await $.mset((await $.v(C, "StDate_in")), "date", (await $.v(C, "GetUseDate")));
  await $.mset((await $.v(C, "EndDate_in")), "date", (await $.v(C, "GetUseDate")));
  await $.mset((await $.v(C, "DTPickOutArchBeg")), "Date", (await $.mv((await $.v(C, "StDate")), "date")));
  await $.mset((await $.v(C, "DTPickOutArchEnd")), "Date", (await $.mv((await $.v(C, "StDate")), "date")));
  await $.mset((await $.v(C, "INCBDATE")), "Date", (await $.mv((await $.v(C, "StDate")), "date")));
  await $.mset((await $.v(C, "INCEDATE")), "Date", (await $.mv((await $.v(C, "StDate")), "date")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("GetUseDate", async function GetUseDate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "FieldByName", ["USEBANKDATE"])), "AsInteger")), 1))) {
    L0["result"] = (await $.call(C, "Trunc", [(await $.mcall((await $.mv((await $.v(C, "DataMod")), "GetSysDate")), "CallDateFunction", ["GET_DATE", []]))]));
  } else {
    L0["result"] = (await $.call(C, "Trunc", [(await $.v(C, "Date"))]));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLVPCSSForm", "UpdateFileInList", async function UpdateFileInList(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "Refresh", []);
  await $.mcall((await $.v(C, "FileListIncoming")), "Update", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TLVPCSSForm", "GrantAmount", async function GrantAmount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "advgrantname": '', "amount": 0};
  L0["amount"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["Amount"])), "AsFloat"));
  {
    const $t13 = (await $.mv((await $.v(C, "DataMod")), "DataTemp"));
    await $.stmt($.wcall([$t13], "Close", [], C));
    await $.mcall((await $.wv([$t13], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t13], "SQL", C, false)), "Add", [$.add($.add($.add("select Ostat from OperKurs where Dat ='", (await $.wcall([$t13], "FormatDateTime", ["dd-mmm-yyyy", (await $.wv([$t13], "GetUseDate", C, false))], C))), "' and Val_Kod="), (await $.mv((await $.mcall((await $.mv((await $.wv([$t13], "DataMod", C, false)), "XS_BATCHS")), "fieldbyname", ["Val_Acc"])), "AsString")))])));
    await $.stmt($.wcall([$t13], "Open", [], C));
  }
  L0["amount"] = $.mul(L0["amount"], ((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "FieldByName", ["Ostat"])), "AsFloat"))));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckMoneyBorderAccess", [L0["amount"]]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TLVPCSSForm", "StrPart", async function StrPart(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "findstr": $.copyArg(p1), "nom": $.copyArg(p2), result: '', "strpos": 0, "i": 0, "tempstr": ''};
  await $.fixArgs(L0, ["s", "findstr", "nom"]);
  if ($.truthy($.eq((await $.call(C, "Length", [L0["s"]])), 0))) {
    L0["result"] = "";
    return L0.result;
  }
  { const $t14 = L0["nom"];
    L0["i"] = 1;
    let $t15 = true;
    for (;;) {
      if (!$t15) { L0["i"] = $.succ(L0["i"], 1); }
      $t15 = false;
      if (!($.ord(L0["i"]) <= $.ord($t14))) break;
      L0["strpos"] = (await $.call(C, "Pos", [L0["findstr"], L0["s"]]));
      L0["tempstr"] = (await $.call(C, "copy", [L0["s"], 0, L0["strpos"]]));
      L0["s"] = (await $.call(C, "copy", [L0["s"], $.add(L0["strpos"], 1), $.sub((await $.call(C, "length", [L0["s"]])), L0["strpos"])]));
      await $.tick();
    }
  }
  L0["tempstr"] = (await $.call(C, "StringReplace", [L0["tempstr"], L0["findstr"], "", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]));
  L0["result"] = L0["tempstr"];
  return L0.result;
}, {"params": ["S", "FindStr", "nom"], "kind": "function", "ptypes": ["String", "String", "integer"]});
  U.func("SendXmlFileToArchive", async function SendXmlFileToArchive(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"all": $.copyArg(p0), "index": $.copyArg(p1), result: undefined, "filecount": 0, "filedir": ''};
  await $.fixArgs(L0, ["all", "index"]);
  if ($.truthy($.ne((await $.call(C, "MessageDlg", ["Siz əminsiniz ki bu faylları arxivə göndərmək istyirsiniz ?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno")), (await $.v(C, "mbcancel"))], 0])), (await $.v(C, "mryes"))))) {
    return L0.result;
  }
  L0["filedir"] = $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "fieldbyname", ["in_dir"])), "asstring")), "\\");
  {
    const $t16 = (await $.v(C, "LVPCSSForm"));
    const $t17 = (await $.wv([$t16], "DataMod", C, false));
    if ($.truthy(($.eq((await $.mv((await $.mv((await $.wv([$t16, $t17], "FileListIncoming", C, false)), "Items")), "Count")), 0)))) {
      return L0.result;
    }
    if ($.truthy((await $.and_(($.eq((await $.wv([$t16, $t17], "all", { get: async () => L0["all"], set: async (v) => { L0["all"] = v; }, local: true }, false)), (await $.wv([$t16, $t17], "false", C, false)))), async () => ($.eq((await $.mv((await $.wv([$t16, $t17], "FileListIncoming", C, false)), "ItemIndex")), (-(1)))))))) {
      return L0.result;
    }
    if ($.truthy((await $.mv((await $.wv([$t16, $t17], "XS_CONFIG", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t16, $t17], "XS_CONFIG", C, false)), "Refresh", []);
    } else {
      await $.mset((await $.wv([$t16, $t17], "XS_CONFIG", C, false)), "Active", (await $.wv([$t16, $t17], "true", C, false)));
    }
    if ($.truthy($.eq((await $.wv([$t16, $t17], "all", { get: async () => L0["all"], set: async (v) => { L0["all"] = v; }, local: true }, false)), (await $.wv([$t16, $t17], "false", C, false))))) {
      if ($.truthy((await $.wcall([$t16, $t17], "MoveFileEx", [(await $.wcall([$t16, $t17], "pchar", [$.add((await $.wv([$t16, $t17], "FileDir", { get: async () => L0["filedir"], set: async (v) => { L0["filedir"] = v; }, local: true }, false)), (await $.idx((await $.mv((await $.wv([$t16, $t17], "FileListIncoming", C, false)), "Items")), [(await $.wv([$t16, $t17], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))])))], C)), (await $.wcall([$t16, $t17], "Pchar", [$.add($.add((await $.mv((await $.mcall((await $.mv((await $.wv([$t16, $t17], "DataMod", C, false)), "XS_CONFIG")), "fieldbyname", ["archive_dir"])), "asstring")), "\\"), (await $.idx((await $.mv((await $.wv([$t16, $t17], "FileListIncoming", C, false)), "items")), [(await $.wv([$t16, $t17], "index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))])))], C)), (await $.wv([$t16, $t17], "MOVEFILE_REPLACE_EXISTING", C, false))], C)))) {
        await $.stmt((await $.wcall([$t16, $t17], "MessageDlg", [(await $.wcall([$t16, $t17], "format", ["File \" %s \" Moved to directory \" %s \" !", [(await $.idx((await $.mv((await $.wv([$t16, $t17], "FileListIncoming", C, false)), "items")), [(await $.wv([$t16, $t17], "index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))])), (await $.mv((await $.mcall((await $.mv((await $.wv([$t16, $t17], "DataMod", C, false)), "XS_CONFIG")), "fieldbyname", ["archive_dir"])), "asstring"))]], C)), (await $.wv([$t16, $t17], "mtInformation", C, false)), [(await $.wv([$t16, $t17], "mbok", C, false))], 0], C)));
      }
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t16, $t17], "FileListIncoming", C, false)), "Items")), "Delete", [$.ref(async () => (await $.wv([$t16, $t17], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), async ($t18) => { await $.wset([$t16, $t17], "Index", $t18, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); })])));
    } else {
      await $.wset([$t16, $t17], "FileCount", (await $.mv((await $.mv((await $.wv([$t16, $t17], "FileListIncoming", C, false)), "Items")), "Count")), { get: async () => L0["filecount"], set: async (v) => { L0["filecount"] = v; }, local: true });
      while ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t16, $t17], "FileListIncoming", C, false)), "Items")), "Count")), 0))) {
        await $.stmt((await $.wcall([$t16, $t17], "MoveFileEx", [(await $.wcall([$t16, $t17], "pchar", [$.add((await $.wv([$t16, $t17], "FileDir", { get: async () => L0["filedir"], set: async (v) => { L0["filedir"] = v; }, local: true }, false)), (await $.idx((await $.mv((await $.wv([$t16, $t17], "FileListIncoming", C, false)), "items")), [0])))], C)), (await $.wcall([$t16, $t17], "Pchar", [$.add($.add((await $.mv((await $.mcall((await $.mv((await $.wv([$t16, $t17], "DataMod", C, false)), "XS_CONFIG")), "fieldbyname", ["archive_dir"])), "asstring")), "\\"), (await $.idx((await $.mv((await $.wv([$t16, $t17], "FileListIncoming", C, false)), "items")), [0])))], C)), (await $.wv([$t16, $t17], "MOVEFILE_REPLACE_EXISTING", C, false))], C)));
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t16, $t17], "FileListIncoming", C, false)), "Items")), "Delete", [0])));
        await $.tick();
      }
      await $.stmt((await $.wcall([$t16, $t17], "MessageDlg", [(await $.wcall([$t16, $t17], "Format", ["\" %d \" File Moved!", [(await $.wv([$t16, $t17], "filecount", { get: async () => L0["filecount"], set: async (v) => { L0["filecount"] = v; }, local: true }, false))]], C)), (await $.wv([$t16, $t17], "mtInformation", C, false)), [(await $.wv([$t16, $t17], "mbok", C, false))], 0], C)));
    }
  }
  return L0.result;
}, {"params": ["All", "Index"], "kind": "procedure", "ptypes": ["Boolean", "Integer"]});
  U.method("TLVPCSSForm", "MouseWheelHandler", async function MouseWheelHandler(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TLVPCSSForm", "MouseWheelHandler", null, arguments);
  if ($.truthy((await $.mv((await $.v(C, "GridBatchs")), "Focused")))) {
    await $.mcall((await $.mv((await $.v(C, "GridBatchs")), "SelectedRows")), "Clear", []);
    {
      const $t19 = (await $.call(C, "TCMMouseWheel", [(await L0["message"].get())]));
      const $t20 = (await $.mv((await $.mv((await $.wv([$t19], "GridBatchs", C, false)), "DataSource")), "DataSet"));
      if ($.truthy($.lt((await $.wv([$t19, $t20], "WheelDelta", C, false)), 0))) {
        await $.stmt($.wcall([$t19, $t20], "Next", [], C));
      } else {
        await $.stmt($.wcall([$t19, $t20], "Prior", [], C));
      }
    }
  } else {
    if ($.truthy((await $.mv((await $.v(C, "GridBeneficiary")), "Focused")))) {
      await $.mcall((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Clear", []);
      {
        const $t21 = (await $.call(C, "TCMMouseWheel", [(await L0["message"].get())]));
        const $t22 = (await $.mv((await $.mv((await $.wv([$t21], "GridBeneficiary", C, false)), "DataSource")), "DataSet"));
        if ($.truthy($.lt((await $.wv([$t21, $t22], "WheelDelta", C, false)), 0))) {
          await $.stmt($.wcall([$t21, $t22], "Next", [], C));
        } else {
          await $.stmt($.wcall([$t21, $t22], "Prior", [], C));
        }
      }
    } else {
      if ($.truthy((await $.mv((await $.v(C, "GridIncoming")), "Focused")))) {
        await $.mcall((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "Clear", []);
        await $.mcall((await $.v(C, "GridIncoming")), "SetFocus", []);
        {
          const $t23 = (await $.call(C, "TCMMouseWheel", [(await L0["message"].get())]));
          const $t24 = (await $.mv((await $.mv((await $.wv([$t23], "GridIncoming", C, false)), "DataSource")), "DataSet"));
          if ($.truthy($.lt((await $.wv([$t23, $t24], "WheelDelta", C, false)), 0))) {
            await $.stmt($.wcall([$t23, $t24], "Next", [], C));
          } else {
            await $.stmt($.wcall([$t23, $t24], "Prior", [], C));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.func("AddtoCOMBO", async function AddtoCOMBO(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"combo": $.copyArg(p0), "listb": $.copyArg(p1), "datset": $.copyArg(p2), "sqlstring": $.copyArg(p3), "field_listbox": $.copyArg(p4), "field_combo": $.copyArg(p5), result: undefined};
  await $.fixArgs(L0, ["combo", "listb", "datset", "sqlstring", "field_listbox", "field_combo"]);
  await $.mcall(L0["datset"], "Close", []);
  await $.mcall((await $.mv(L0["datset"], "SQL")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv(L0["datset"], "SQL")), "Add", [L0["sqlstring"]])));
  await $.mcall(L0["datset"], "Open", []);
  await $.mcall(L0["datset"], "First", []);
  await $.mcall(L0["listb"], "Clear", []);
  await $.mcall(L0["combo"], "Clear", []);
  while ($.truthy($.not((await $.mv(L0["datset"], "Eof"))))) {
    await $.stmt((await $.mcall((await $.mv(L0["listb"], "Items")), "Add", [(await $.mv((await $.mcall(L0["datset"], "fieldbyname", [L0["field_listbox"]])), "AsString"))])));
    await $.stmt((await $.mcall((await $.mv(L0["combo"], "Items")), "Add", [(await $.mv((await $.mcall(L0["datset"], "fieldbyname", [L0["field_combo"]])), "AsString"))])));
    await $.mcall(L0["datset"], "Next", []);
    await $.tick();
  }
  await $.mcall(L0["datset"], "First", []);
  return L0.result;
}, {"params": ["ComBo", "ListB", "DatSet", "SQLstring", "field_ListBox", "field_Combo"], "kind": "procedure", "ptypes": ["TComboBox", "TListBox", "TOracleDataSet", "String", "String", "String"]});
  U.method("TLVPCSSForm", "OnlyNumber", async function OnlyNumber(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["key"]);
  if ($.truthy($.not(($.in_(L0["key"], [...$.range("0","9"), "\b"]))))) {
    L0["key"] = "\u0000";
  }
  L0["result"] = L0["key"];
  return L0.result;
}, {"params": ["key"], "kind": "function", "ptypes": ["char"]});
  U.func("createTransCodeTree", async function createTransCodeTree(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "tr": null, "trc": null};
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "TransTypeName")), "Active")), false))) {
    await $.mset((await $.mv((await $.v(C, "DataMod")), "TransTypeName")), "Active", true);
  }
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "TransTypeName")), "FIRST", []);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "TransTypeCode")), "Active")), false))) {
    await $.mset((await $.mv((await $.v(C, "DataMod")), "TransTypeCode")), "Active", true);
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "TransCodeForm")), "TreeView1")), "Items")), "Clear", []);
  while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataMod")), "TransTypeName")), "Eof"))))) {
    L0["tr"] = (await $.mcall((await $.mv((await $.mv((await $.v(C, "TransCodeForm")), "TreeView1")), "Items")), "Add", [(await $.mv((await $.mv((await $.mv((await $.v(C, "TransCodeForm")), "TreeView1")), "Items")), "GetFirstNode")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "TransTypeName")), "fieldbyname", ["NAME"])), "AsString"))]));
    await $.mset(L0["tr"], "ImageIndex", 0);
    await $.mset(L0["tr"], "SelectedIndex", 1);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "TransTypeCode")), "First", []);
    while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataMod")), "TransTypeCode")), "EOF"))))) {
      L0["trc"] = (await $.mcall((await $.mv((await $.mv((await $.v(C, "TransCodeForm")), "TreeView1")), "Items")), "AddChild", [L0["tr"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "TransTypeCode")), "fieldbyname", ["Name"])), "AsString"))]));
      await $.mset(L0["trc"], "ImageIndex", 2);
      await $.mset(L0["trc"], "SelectedIndex", 2);
      await $.mset(L0["trc"], "StateIndex", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "TransTypeCode")), "fieldbyname", ["CODE"])), "AsInteger")));
      await $.mcall((await $.mv((await $.v(C, "DataMod")), "TransTypeCode")), "NEXT", []);
      await $.tick();
    }
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "TransTypeName")), "Next", []);
    await $.tick();
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TLVPCSSForm", "ViewBankInfo", async function ViewBankInfo(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"filial": $.copyArg(p0), "afilialid": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["filial", "afilialid"]);
  if ($.truthy(L0["filial"])) {
    await $.mset((await $.mv((await $.v(C, "DataMod")), "DataCheck")), "Active", false);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataCheck")), "SQL")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataCheck")), "SQL")), "Add", [$.add($.add("Select * from filialinfo where kod_fil='", (await $.call(C, "IntToStr", [L0["afilialid"]]))), "'")])));
    await $.mset((await $.mv((await $.v(C, "DataMod")), "DataCheck")), "Active", true);
    await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_BankCode")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataCheck")), "fieldbyname", ["KOD_BFIL"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_voen")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataCheck")), "fieldbyname", ["INN_FIL"])), "AsString")));
  } else {
    await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_BankCode")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataBankInfo")), "fieldbyname", ["KOD_B"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_voen")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataBankInfo")), "fieldbyname", ["INN"])), "AsString")));
  }
  await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_Sender")), "Text", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataBankInfo")), "fieldbyname", ["SWIFT"])), "AsString")), "AXXX"));
  await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_BIK")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataBankInfo")), "fieldbyname", ["SWIFT"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_account")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataBankInfo")), "fieldbyname", ["KRNO"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_account_sub")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "fieldbyname", ["Account"])), "AsString")));
  return L0.result;
}, {"params": ["filial", "AFilialID"], "kind": "procedure", "ptypes": ["boolean", "Integer"]});
  U.func("PrepareTrans", async function PrepareTrans(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"bnfcount": $.copyArg(p0), "editbeneficiary": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["bnfcount", "editbeneficiary"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "Open", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataAccount")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataAccount")), "Open", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataSetFilial")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataSetFilial")), "Open", []);
  }
  await $.mset((await $.v(C, "PaymentDetalsForm")), "bnf_count", L0["bnfcount"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataBankInfo")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataBankInfo")), "SQL")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataBankInfo")), "SQL")), "Add", ["Select * from BankInfo"])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataBankInfo")), "Open", []);
  await $.stmt((await $.call(C, "AddtoCOMBO", [(await $.mv((await $.v(C, "PaymentDetalsForm")), "Combo_BankName")), (await $.mv((await $.v(C, "PaymentDetalsForm")), "Bank_ID")), (await $.mv((await $.v(C, "DataMod")), "DataBankM")), "Select * from BankM order by name", "ID", "NAME"])));
  await $.stmt((await $.call(C, "AddtoCOMBO", [(await $.mv((await $.v(C, "PaymentDetalsForm")), "Combo_Valute")), (await $.mv((await $.v(C, "PaymentDetalsForm")), "Valute_ID")), (await $.mv((await $.v(C, "DataMod")), "DataValute")), "Select valute,val_name,valu_name from Avalute order by valute", "VALUTE", "VALU_NAME"])));
  await $.stmt((await $.call(C, "AddtoCOMBO", [(await $.mv((await $.v(C, "TransForm")), "Combo_Valute")), (await $.mv((await $.v(C, "TransForm")), "Valute_ID")), (await $.mv((await $.v(C, "DataMod")), "DataValute")), "Select valute,val_name,valu_name from Avalute order by valute", "VALUTE", "VALU_NAME"])));
  await $.stmt((await $.mcall((await $.v(C, "LVPCSSForm")), "ViewBankInfo", [false, 0])));
  await $.mset((await $.mv((await $.v(C, "TransForm")), "Combo_Valute")), "ItemIndex", 0);
  await $.mset((await $.mv((await $.v(C, "TransForm")), "ComboBox_CD")), "ItemIndex", 0);
  if ($.truthy($.eq(L0["editbeneficiary"], false))) {
    await $.mset((await $.mv((await $.v(C, "TransForm")), "SpeedButton1")), "Enabled", true);
    await $.mcall((await $.mv((await $.v(C, "TransForm")), "AccSearch")), "Clear", []);
    await $.mcall((await $.mv((await $.v(C, "TransForm")), "Edit_clientName")), "Clear", []);
    await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_client_code")), "Text", "/");
    await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_Amount")), "text", "0");
    await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_BNF")), "Text", "/BNF/0");
    await $.mset((await $.mv((await $.v(C, "TransForm")), "Combo_date")), "Date", (await $.v(C, "Date")));
    await $.mcall((await $.mv((await $.v(C, "TransForm")), "Edit_Client_Voen")), "Clear", []);
    await $.mcall((await $.mv((await $.v(C, "TransForm")), "Edit_Referens")), "clear", []);
    await $.mset((await $.mv((await $.v(C, "TransForm")), "LabelFilialName")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "TransForm")), "Button_add")), "Enabled", true);
    await $.set(C, "Batchs_Edit", false);
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataAccount")), "Locate", ["id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["acc_id"])), "AsInteger")), []])));
    await $.mset((await $.mv((await $.v(C, "TransForm")), "AccSearch")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataAccount")), "fieldbyname", ["acc_no"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_clientName")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["client_name"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_client_code")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["client_code"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_Amount")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["Amount"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_BNF")), "Text", $.add("/BNF/", (await $.call(C, "inttostr", [(await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "RecordCount"))]))));
    await $.mset((await $.mv((await $.v(C, "TransForm")), "Combo_date")), "Date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["transdate"])), "AsDateTime")));
    await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_Client_Voen")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["client_inn"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "TransForm")), "Edit_Referens")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["trans_ref"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "TransForm")), "LabelFilialName")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "TransForm")), "Button_add")), "Enabled", false);
    await $.set(C, "Batchs_Edit", true);
    if ($.truthy(((await $.and_(($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "FieldByName", ["status"])), "AsInteger")), 0)), async () => ($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "FieldByName", ["status"])), "AsInteger")), 0))))))) {
      await $.set(C, "Batchs_Edit", false);
      await $.mset((await $.mv((await $.v(C, "TransForm")), "SpeedButton1")), "Enabled", false);
    }
  }
  await $.mset((await $.mv((await $.v(C, "TransForm")), "ButtonPost")), "Enabled", false);
  return L0.result;
}, {"params": ["BnfCount", "EditBeneficiary"], "kind": "procedure", "ptypes": ["integer", "Boolean"]});
  U.method("TLVPCSSForm", "RefreshDataBatchs", async function RefreshDataBatchs(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "SelectDate", []));
  await $.mcall((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "GridBatchs")), "SelectedRows")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Refresh", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TLVPCSSForm", "Refresh_mess_in", async function Refresh_mess_in(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "dtst": 0, "dtend": 0};
  L0["dtst"] = (await $.call(C, "trunc", [(await $.mv((await $.v(C, "Stdate_in")), "DateTime"))]));
  L0["dtend"] = (await $.call(C, "trunc", [(await $.mv((await $.v(C, "EndDate_in")), "DateTime"))]));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "SQL")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "SQL")), "Add", [$.add($.add($.add($.add("Select * from xs_incomingviewall x where (x.trans_date>='", (await $.call(C, "FormatDateTime", ["dd-mmm-yyyy", L0["dtst"]]))), "') and (x.trans_date<='"), (await $.call(C, "FormatDateTime", ["dd-mmm-yyyy", L0["dtend"]]))), "')")])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "Refresh", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TLVPCSSForm", "RefreshMessinWithPos", async function RefreshMessinWithPos(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "firstpos": null};
  L0["firstpos"] = (await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "GetBookmark"));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "Refresh", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "GotoBookmark", [L0["firstpos"]])));
  await $.mcall((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "Clear", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TLVPCSSForm", "ShowDetals", async function ShowDetals(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "CreateTransCodeTree", []));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "Open", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataAccount")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataAccount")), "Open", []);
  }
  await $.stmt((await $.call(C, "AddtoCOMBO", [(await $.mv((await $.v(C, "PaymentDetalsForm")), "Combo_BankName")), (await $.mv((await $.v(C, "PaymentDetalsForm")), "Bank_ID")), (await $.mv((await $.v(C, "DataMod")), "DataBankM")), "Select * from BankM", "ID", "NAME"])));
  await $.stmt((await $.call(C, "AddtoCOMBO", [(await $.mv((await $.v(C, "PaymentDetalsForm")), "Combo_Valute")), (await $.mv((await $.v(C, "PaymentDetalsForm")), "Valute_ID")), (await $.mv((await $.v(C, "DataMod")), "DataValute")), "Select * from Avalute", "VALUTE", "VAL_NAME"])));
  await $.set(C, "new_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["id"])), "AsInteger")));
  {
    const $t25 = (await $.v(C, "PaymentDetalsForm"));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t25], "DataMod", C, false)), "DataBankInfo")), "Active")), (await $.wv([$t25], "false", C, false))))) {
      await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "DataBankInfo")), "Open", []);
    }
    await $.mset((await $.wv([$t25], "ButtonFinish", C, false)), "Enabled", (await $.wv([$t25], "true", C, false)));
    await $.mset((await $.wv([$t25], "Button4", C, false)), "Enabled", (await $.wv([$t25], "true", C, false)));
    await $.mset((await $.wv([$t25], "SpeedButton2", C, false)), "Enabled", (await $.wv([$t25], "true", C, false)));
    await $.mset((await $.wv([$t25], "Combo_BankName", C, false)), "Enabled", (await $.wv([$t25], "true", C, false)));
    await $.mset((await $.wv([$t25], "Button5", C, false)), "Enabled", (await $.wv([$t25], "true", C, false)));
    await $.mset((await $.wv([$t25], "SearchBankM", C, false)), "Enabled", (await $.wv([$t25], "true", C, false)));
    await $.mset((await $.wv([$t25], "Edit_Client_acc_no", C, false)), "Enabled", (await $.wv([$t25], "true", C, false)));
    await $.mset((await $.wv([$t25], "Edit_Client_Name", C, false)), "Enabled", (await $.wv([$t25], "true", C, false)));
    await $.mset((await $.wv([$t25], "Edit_Client_Code", C, false)), "Enabled", (await $.wv([$t25], "true", C, false)));
    await $.mset((await $.wv([$t25], "Edit_Client_Voen", C, false)), "Enabled", (await $.wv([$t25], "true", C, false)));
    await $.mset((await $.wv([$t25], "Edit_tey1", C, false)), "Enabled", (await $.wv([$t25], "true", C, false)));
    await $.mset((await $.wv([$t25], "Edit_tey2", C, false)), "Enabled", (await $.wv([$t25], "true", C, false)));
    await $.mset((await $.wv([$t25], "Edit_tey3", C, false)), "Enabled", (await $.wv([$t25], "true", C, false)));
    await $.mset((await $.wv([$t25], "Edit_tey4", C, false)), "Enabled", (await $.wv([$t25], "true", C, false)));
    await $.mset((await $.wv([$t25], "Edit_inf1", C, false)), "Enabled", (await $.wv([$t25], "true", C, false)));
    await $.mset((await $.wv([$t25], "Edit_inf2", C, false)), "Enabled", (await $.wv([$t25], "true", C, false)));
    await $.mset((await $.wv([$t25], "Edit_inf3", C, false)), "Enabled", (await $.wv([$t25], "true", C, false)));
    await $.mset((await $.wv([$t25], "GroupBox7", C, false)), "Enabled", (await $.wv([$t25], "true", C, false)));
    await $.mset((await $.wv([$t25], "Edit_Amount", C, false)), "Enabled", (await $.wv([$t25], "true", C, false)));
    await $.mset((await $.wv([$t25], "SpeedButton1", C, false)), "Enabled", (await $.wv([$t25], "true", C, false)));
    await $.mset((await $.wv([$t25], "Edit_Referens", C, false)), "Enabled", (await $.wv([$t25], "true", C, false)));
    await $.mset((await $.wv([$t25], "Edit_BankName_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "DataBankInfo")), "fieldbyname", ["BANK"])), "AsString")));
    await $.mset((await $.wv([$t25], "Edit_BIK_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "DataBankInfo")), "fieldbyname", ["SWIFT"])), "AsString")));
    await $.mset((await $.wv([$t25], "Edit_BankCode_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "DataBankInfo")), "fieldbyname", ["KOD_B"])), "AsString")));
    await $.mset((await $.wv([$t25], "Edit_account_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "DataBankInfo")), "fieldbyname", ["KRNO"])), "AsString")));
    await $.mset((await $.wv([$t25], "Edit_Voen_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "DataBankInfo")), "fieldbyname", ["INN"])), "AsString")));
    await $.mset((await $.wv([$t25], "Combo_Valute", C, false)), "ItemIndex", (await $.mcall((await $.mv((await $.mv((await $.wv([$t25], "PaymentDetalsForm", C, false)), "Combo_Valute")), "Items")), "IndexOf", ["AZM"])));
    await $.mset((await $.wv([$t25], "Edit_account_sub_Self", C, false)), "Text", (await $.mv((await $.wv([$t25], "Edit_account_sub", C, false)), "text")));
    await $.mset((await $.wv([$t25], "Combo_BankName", C, false)), "ItemIndex", (await $.mcall((await $.mv((await $.wv([$t25], "Bank_ID", C, false)), "Items")), "IndexOf", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["rec_bank_id"])), "AsString"))])));
    await $.mset((await $.wv([$t25], "Combo_Valute", C, false)), "ItemIndex", (await $.mcall((await $.mv((await $.wv([$t25], "Valute_ID", C, false)), "Items")), "IndexOf", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["val_cod"])), "AsString"))])));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t25], "DataMod", C, false)), "DataBankM")), "Active")), (await $.wv([$t25], "false", C, false))))) {
      await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "DataBankM")), "Open", []);
    }
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t25], "Combo_BankName", C, false)), "Items")), "IndexOf", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "DataBankM")), "fieldbyname", ["name"])), "AsString"))])));
    await $.stmt((await $.mcall((await $.wv([$t25], "Combo_BankName", C, false)), "OnChange", [Self])));
    await $.mset((await $.wv([$t25], "Edit_Account_Sub", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["REC_BANK_SUB_ACC"])), "AsString")));
    await $.mset((await $.wv([$t25], "Edit_account_sub_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "XS_CONFIG")), "fieldbyname", ["Account"])), "AsString")));
    await $.mset((await $.wv([$t25], "Edit_Referens", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["MESS_REFERENCE"])), "AsString")));
    await $.mset((await $.wv([$t25], "Edit_Amount", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["amount"])), "AsString")));
    await $.mset((await $.wv([$t25], "Edit_TransCode", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["TRANS_COD"])), "AsString")));
    await $.mset((await $.wv([$t25], "Edit_Client_acc_no", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["CLIENT_ACC_NO"])), "AsString")));
    await $.mset((await $.wv([$t25], "Edit_Client_Name", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["CLIENT_NAME"])), "AsString")));
    await $.mset((await $.wv([$t25], "Edit_Client_Code", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["CLIENT_Code"])), "AsString")));
    await $.mset((await $.wv([$t25], "Edit_Client_Voen", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["CLIENT_INN"])), "AsString")));
    await $.mset((await $.wv([$t25], "Edit_tey1", C, false)), "Text", (await $.wcall([$t25], "StrPart", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["REMIT_INF"])), "AsString")), "|", 1], C)));
    await $.mset((await $.wv([$t25], "Edit_tey2", C, false)), "Text", (await $.wcall([$t25], "StrPart", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["REMIT_INF"])), "AsString")), "|", 2], C)));
    await $.mset((await $.wv([$t25], "Edit_tey3", C, false)), "Text", (await $.wcall([$t25], "StrPart", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["REMIT_INF"])), "AsString")), "|", 3], C)));
    await $.mset((await $.wv([$t25], "Edit_tey4", C, false)), "Text", (await $.wcall([$t25], "StrPart", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["REMIT_INF"])), "AsString")), "|", 4], C)));
    await $.mset((await $.wv([$t25], "Edit_inf1", C, false)), "Text", (await $.wcall([$t25], "StrPart", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["ADD_INF"])), "AsString")), "|", 1], C)));
    await $.mset((await $.wv([$t25], "Edit_inf2", C, false)), "Text", (await $.wcall([$t25], "StrPart", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["ADD_INF"])), "AsString")), "|", 2], C)));
    await $.mset((await $.wv([$t25], "Edit_inf3", C, false)), "Text", (await $.wcall([$t25], "StrPart", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataMod", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["ADD_INF"])), "AsString")), "|", 3], C)));
  }
  await $.set(C, "mess_edit", true);
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Button4")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "ButtonFinish")), "Enabled", true);
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "Button2")), "Enabled", false);
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "ButtonFinish")), "Caption", "Yaddaşa yaz");
  if ($.truthy((await $.or_(((await $.and_(($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "FieldByName", ["status"])), "AsInteger")), 0)), async () => ($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "FieldByName", ["status"])), "AsInteger")), 0))))), async () => ($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "FieldByName", ["TRANSACTION_ID"])), "AsInteger")), 0)))))) {
    {
      const $t26 = (await $.v(C, "PaymentDetalsForm"));
      await $.mset((await $.wv([$t26], "ButtonFinish", C, false)), "Enabled", (await $.wv([$t26], "false", C, false)));
      await $.mset((await $.wv([$t26], "Button4", C, false)), "Enabled", (await $.wv([$t26], "false", C, false)));
      await $.mset((await $.wv([$t26], "SpeedButton2", C, false)), "Enabled", (await $.wv([$t26], "false", C, false)));
      await $.mset((await $.wv([$t26], "Combo_BankName", C, false)), "Enabled", (await $.wv([$t26], "false", C, false)));
      await $.mset((await $.wv([$t26], "Button5", C, false)), "Enabled", (await $.wv([$t26], "false", C, false)));
      await $.mset((await $.wv([$t26], "SearchBankM", C, false)), "Enabled", (await $.wv([$t26], "false", C, false)));
      await $.mset((await $.wv([$t26], "Edit_Client_acc_no", C, false)), "Enabled", (await $.wv([$t26], "false", C, false)));
      await $.mset((await $.wv([$t26], "Edit_Client_Name", C, false)), "Enabled", (await $.wv([$t26], "false", C, false)));
      await $.mset((await $.wv([$t26], "Edit_Client_Code", C, false)), "Enabled", (await $.wv([$t26], "false", C, false)));
      await $.mset((await $.wv([$t26], "Edit_Client_Voen", C, false)), "Enabled", (await $.wv([$t26], "false", C, false)));
      await $.mset((await $.wv([$t26], "Edit_tey1", C, false)), "Enabled", (await $.wv([$t26], "false", C, false)));
      await $.mset((await $.wv([$t26], "Edit_tey2", C, false)), "Enabled", (await $.wv([$t26], "false", C, false)));
      await $.mset((await $.wv([$t26], "Edit_tey3", C, false)), "Enabled", (await $.wv([$t26], "false", C, false)));
      await $.mset((await $.wv([$t26], "Edit_tey4", C, false)), "Enabled", (await $.wv([$t26], "false", C, false)));
      await $.mset((await $.wv([$t26], "Edit_inf1", C, false)), "Enabled", (await $.wv([$t26], "false", C, false)));
      await $.mset((await $.wv([$t26], "Edit_inf2", C, false)), "Enabled", (await $.wv([$t26], "false", C, false)));
      await $.mset((await $.wv([$t26], "Edit_inf3", C, false)), "Enabled", (await $.wv([$t26], "false", C, false)));
      await $.mset((await $.wv([$t26], "GroupBox7", C, false)), "Enabled", (await $.wv([$t26], "false", C, false)));
      await $.mset((await $.wv([$t26], "Edit_Amount", C, false)), "Enabled", (await $.wv([$t26], "false", C, false)));
      await $.mset((await $.wv([$t26], "SpeedButton1", C, false)), "Enabled", (await $.wv([$t26], "false", C, false)));
      await $.mset((await $.wv([$t26], "Edit_Referens", C, false)), "Enabled", (await $.wv([$t26], "false", C, false)));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TLVPCSSForm", "LoadToRich", async function LoadToRich(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"filename": $.copyArg(p0), result: '', "stpos": 0, "endpos": 0, "ref": ''};
  await $.fixArgs(L0, ["filename"]);
  await $.mcall((await $.v(C, "RichEdit1")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "RichEdit1")), "Lines")), "LoadFromFile", [L0["filename"]])));
  L0["stpos"] = (await $.mcall((await $.v(C, "RichEdit1")), "FindText", ["<msg_user_reference>", 0, (await $.mv((await $.v(C, "RichEdit1")), "GetTextLen")), [(await $.v(C, "stMatchCase"))]]));
  L0["endpos"] = (await $.mcall((await $.v(C, "RichEdit1")), "FindText", ["</msg_user_reference>", 0, (await $.mv((await $.v(C, "RichEdit1")), "GetTextLen")), [(await $.v(C, "stMatchCase"))]]));
  await $.mset((await $.v(C, "RichEdit1")), "SelStart", $.add(L0["stpos"], (await $.call(C, "length", ["<msg_user_reference>"]))));
  await $.mset((await $.v(C, "RichEdit1")), "SelLength", $.sub((await $.call(C, "abs", [$.sub(L0["endpos"], L0["stpos"])])), (await $.call(C, "length", ["<msg_user_reference>"]))));
  L0["ref"] = (await $.mv((await $.v(C, "RichEdit1")), "SelText"));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataCheck")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataCheck")), "sql")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataCheck")), "SQL")), "Add", [$.add($.add("Select reference from xs_incoming where reference='", L0["ref"]), "'")])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataCheck")), "Open", []);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataCheck")), "RecordCount")), 0))) {
    await $.mcall((await $.v(C, "RichEdit1")), "Clear", []);
    L0["result"] = "0";
  } else {
    L0["result"] = L0["ref"];
  }
  return L0.result;
}, {"params": ["FileName"], "kind": "function", "ptypes": ["String"]});
  U.method("TLVPCSSForm", "ConvertToBase", async function ConvertToBase(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"rich": $.copyArg(p0), "ref": $.copyArg(p1), result: undefined, "startpos": 0, "endpos": 0, "fnstartpos": 0, "fnendpos": 0, "p": 0, "temppos": 0, "templine": 0, "lineindex": 0, "tempvar": 0, "stmessage": '', "sub50k": '', "name50k": '', "inn50k": '', "code50k": '', "bnkrek50k": '', "fn77b": false, "accfinded": false, "i": 0, "v_transdate": 0, "v_reference": '', "v_f20": '', "v_f21": '', "v_valcod": 0, "v_amount": 0, "v_senacc": '', "v_senname": '', "v_seninn": '', "v_sencode": '', "v_senbankid": 0, "v_senbanksubacc": 0, "v_recbanksubacc": 0, "v_recbankbik": '', "v_recclientacc": '', "v_filial": 0, "v_recclientname": '', "v_recclientinn": '', "v_recclientcode": '', "v_recclientaccid": 0, "v_remitinf": '', "v_typecode": 0, "v_addinf": '', "v_senbankbik": '', "v_senbankcode": 0, "v_senbankinn": '', "v_senbankkrno": ''};
  await $.fixArgs(L0, ["rich", "ref"]);
  L0["findmytext"] = $.fn(async function FindMyText(p0, p1, p2) {
  const L1 = {"tx": $.copyArg(p0), "posstart": $.copyArg(p1), "posend": $.copyArg(p2), result: 0, "temp": 0};
  await $.fixArgs(L1, ["tx", "posstart", "posend"]);
  L1["temp"] = (await $.mcall(L0["rich"], "FindText", [L1["tx"], $.add(L1["posstart"], 1), $.add(L1["posend"], 1), [(await $.v(C, "stMatchCase"))]]));
  await $.mset(L0["rich"], "SelStart", L1["temp"]);
  await $.mset(L0["rich"], "SelLength", (await $.call(C, "length", [L1["tx"]])));
  L1["result"] = L1["temp"];
  return L1.result;
});
  L0["findlines"] = $.fn(async function FindLines(p0, p1, p2) {
  const L1 = {"tx": $.copyArg(p0), "posstart": $.copyArg(p1), "posend": $.copyArg(p2), result: 0, "temp": 0};
  await $.fixArgs(L1, ["tx", "posstart", "posend"]);
  L1["temp"] = (await $.mcall(L0["rich"], "FindText", [L1["tx"], $.add(L1["posstart"], 1), $.add(L1["posend"], 1), [(await $.v(C, "stMatchCase"))]]));
  if ($.truthy($.gt(L1["temp"], (-(1))))) {
    await $.mset(L0["rich"], "SelStart", L1["temp"]);
    await $.mset(L0["rich"], "SelLength", (await $.call(C, "length", [L1["tx"]])));
    L1["result"] = (await $.mv((await $.mv(L0["rich"], "CaretPos")), "y"));
  } else {
    L1["result"] = (-(1));
  }
  return L1.result;
});
  L0["replace"] = $.fn(async function Replace(p0) {
  const L1 = {"s": $.copyArg(p0), result: '', "j": 0, "text": ''};
  await $.fixArgs(L1, ["s"]);
  L1["j"] = 0;
  do {
    await $.stmt((await $.call(C, "inc", [$.ref(async () => L1["j"], async ($t27) => { L1["j"] = $t27; })])));
    if ($.truthy($.eq((await $.idx(L1["s"], [L1["j"]])), "/"))) {
      await $.stmt((await $.call(C, "delete", [$.ref(async () => L1["s"], async ($t28) => { L1["s"] = $t28; }), L1["j"], 1])));
      L1["j"] = $.sub(L1["j"], 1);
    }
    if ($.truthy($.eq((await $.idx(L1["s"], [L1["j"]])), " "))) {
      await $.stmt((await $.call(C, "delete", [$.ref(async () => L1["s"], async ($t29) => { L1["s"] = $t29; }), L1["j"], 1])));
      L1["j"] = $.sub(L1["j"], 1);
    }
    await $.tick();
  } while (!$.truthy($.ge(L1["j"], (await $.call(C, "length", [L1["s"]])))));
  L1.result = L1["s"];
  return L1.result;
});
  try {
    if ($.truthy($.eq((await $.mv(L0["rich"], "GetTextLen")), 0))) {
      return L0.result;
    }
    L0["startpos"] = 0;
    L0["fn77b"] = false;
    L0["fnstartpos"] = (await $.callv(L0["findmytext"], [":20:", L0["startpos"], (await $.mv(L0["rich"], "GetTextLen"))]));
    L0["p"] = $.sub(L0["fnstartpos"], 1);
    L0["lineindex"] = (await $.mv((await $.mv(L0["rich"], "CaretPos")), "y"));
    L0["fnendpos"] = (await $.callv(L0["findmytext"], [":26T:", L0["startpos"], (await $.mv(L0["rich"], "GetTextLen"))]));
    L0["temppos"] = (await $.callv(L0["findmytext"], [":77B:", L0["startpos"], (await $.mv(L0["rich"], "GetTextLen"))]));
    if ($.truthy((await $.and_(($.gt(L0["temppos"], (-(1)))), async () => ($.eq(L0["temppos"], $.add(L0["fnendpos"], 10))))))) {
      L0["fnendpos"] = L0["temppos"];
      L0["fn77b"] = true;
    }
    while ($.truthy($.gt(L0["fnstartpos"], (-(1))))) {
      L0["v_addinf"] = "";
      L0["v_transdate"] = (await $.v(C, "GetUseDate"));
      L0["v_reference"] = L0["ref"];
      L0["templine"] = (await $.callv(L0["findlines"], [":20:", L0["p"], L0["fnendpos"]]));
      L0["stmessage"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]])), 26, 7]))]));
      L0["v_f20"] = L0["stmessage"];
      L0["templine"] = (await $.callv(L0["findlines"], [":21:", $.sub(L0["fnstartpos"], 38), L0["fnendpos"]]));
      L0["stmessage"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]])), 5, 15]))]));
      L0["v_f21"] = L0["stmessage"];
      L0["templine"] = (await $.callv(L0["findlines"], [":32B:", L0["fnstartpos"], L0["fnendpos"]]));
      L0["stmessage"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]])), 6, 3]))]));
      await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "Close", []);
      await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "SQL")), "Clear", []);
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "SQL")), "Add", [$.add($.add("Select valute from avalute where val_name='", L0["stmessage"]), "'")])));
      await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "Open", []);
      L0["v_valcod"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "fieldbyname", ["valute"])), "AsInteger"));
      L0["stmessage"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]])), 9, $.sub((await $.call(C, "Length", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]]))])), 8)]))]));
      L0["stmessage"] = (await $.call(C, "StringReplace", [L0["stmessage"], ",", (await $.v(C, "DecimalSeparator")), [(await $.v(C, "rfReplaceAll"))]]));
      L0["v_amount"] = (await $.call(C, "StrToFloat", [L0["stmessage"]]));
      L0["templine"] = (await $.callv(L0["findlines"], [":50K:", L0["fnstartpos"], L0["fnendpos"]]));
      L0["tempvar"] = (await $.call(C, "abs", [$.sub((await $.callv(L0["findlines"], [":52A:", L0["fnstartpos"], L0["fnendpos"]])), L0["templine"])]));
      if ($.truthy(($.le(L0["tempvar"], 5)))) {
        L0["stmessage"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]])), 7, $.sub((await $.call(C, "Length", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]]))])), 6)]))]));
        L0["sub50k"] = L0["stmessage"];
        L0["v_senacc"] = L0["stmessage"];
        L0["stmessage"] = (await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 1)]))]));
        L0["name50k"] = L0["stmessage"];
        L0["v_senname"] = L0["stmessage"];
        L0["stmessage"] = (await $.call(C, "copy", [(await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 2)]))])), 0, $.sub((await $.call(C, "pos", ["/", (await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 2)]))]))])), 1)]));
        L0["inn50k"] = L0["stmessage"];
        L0["v_seninn"] = L0["stmessage"];
        L0["stmessage"] = (await $.call(C, "copy", [(await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 2)]))])), $.add((await $.call(C, "pos", ["/", (await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 2)]))]))])), 1), $.add((await $.call(C, "pos", ["/", (await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 2)]))]))])), 20)]));
        L0["code50k"] = L0["stmessage"];
        L0["v_sencode"] = L0["stmessage"];
        L0["stmessage"] = (await $.call(C, "copy", [(await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 3)]))])), 0, $.sub((await $.call(C, "pos", ["/", (await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 3)]))]))])), 1)]));
        L0["bnkrek50k"] = L0["stmessage"];
        L0["v_senbankcode"] = (await $.call(C, "StrToInt", [L0["stmessage"]]));
        L0["stmessage"] = (await $.call(C, "copy", [(await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 3)]))])), $.add((await $.call(C, "pos", ["/", (await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 3)]))]))])), 1), $.add((await $.call(C, "pos", ["/", (await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 4)]))]))])), 9)]));
        L0["v_senbankinn"] = L0["stmessage"];
        L0["stmessage"] = (await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 4)]))]));
        L0["v_senbankkrno"] = L0["stmessage"];
        await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "Close", []);
        await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "SQL")), "Clear", []);
        await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "SQL")), "Add", [$.add($.add("Select id from BankM where bankcode='", L0["bnkrek50k"]), "'")])));
        await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "Open", []);
        L0["v_senbankid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "fieldbyname", ["id"])), "AsInteger"));
      } else {
        L0["v_senacc"] = L0["sub50k"];
        L0["v_senname"] = L0["name50k"];
        L0["v_seninn"] = L0["inn50k"];
        L0["v_sencode"] = L0["code50k"];
        await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "Close", []);
        await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "SQL")), "Clear", []);
        await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "SQL")), "Add", [$.add($.add("Select id from BankM where bankcode='", L0["bnkrek50k"]), "'")])));
        await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "Open", []);
        L0["v_senbankid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "fieldbyname", ["id"])), "AsInteger"));
      }
      L0["templine"] = (await $.callv(L0["findlines"], [":52A:", L0["fnstartpos"], L0["fnendpos"]]));
      L0["stmessage"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]])), 9, $.sub((await $.call(C, "Length", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]]))])), 8)]))]));
      L0["v_senbanksubacc"] = (await $.call(C, "StrToFloat", [L0["stmessage"]]));
      L0["stmessage"] = (await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 1)]));
      L0["v_senbankbik"] = L0["stmessage"];
      L0["templine"] = (await $.callv(L0["findlines"], [":57A:", L0["fnstartpos"], L0["fnendpos"]]));
      L0["stmessage"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]])), 9, $.sub((await $.call(C, "Length", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]]))])), 8)]))]));
      L0["v_recbanksubacc"] = (await $.call(C, "strtoFloat", [L0["stmessage"]]));
      L0["stmessage"] = (await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 1)]))]));
      L0["v_recbankbik"] = L0["stmessage"];
      L0["templine"] = (await $.callv(L0["findlines"], [":59:", L0["fnstartpos"], L0["fnendpos"]]));
      L0["stmessage"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]])), 6, $.sub((await $.call(C, "Length", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]]))])), 5)]))]));
      L0["v_recclientacc"] = L0["stmessage"];
      L0["v_recclientacc"] = (await $.callv(L0["replace"], [L0["v_recclientacc"]]));
      L0["v_filial"] = 0;
      L0["stmessage"] = (await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 1)]))]));
      L0["v_recclientname"] = L0["stmessage"];
      L0["stmessage"] = (await $.call(C, "copy", [(await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 2)]))])), 0, $.sub((await $.call(C, "pos", ["/", (await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 2)]))]))])), 1)]));
      L0["v_recclientinn"] = L0["stmessage"];
      L0["stmessage"] = (await $.call(C, "copy", [(await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 2)]))])), $.add((await $.call(C, "pos", ["/", (await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 2)]))]))])), 1), $.add((await $.call(C, "pos", ["/", (await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 2)]))]))])), 6)]));
      L0["v_recclientcode"] = L0["stmessage"];
      L0["accfinded"] = true;
      if ($.truthy((await $.and_(($.gt((await $.call(C, "Length", [(await $.call(C, "Trim", [L0["stmessage"]]))])), 0)), async () => ($.eq(L0["accfinded"], false)))))) {
        { const $t30 = 0;
          L0["i"] = $.sub((await $.call(C, "Length", [L0["stmessage"]])), 1);
          let $t31 = true;
          for (;;) {
            if (!$t31) { L0["i"] = $.succ(L0["i"], -1); }
            $t31 = false;
            if (!($.ord(L0["i"]) >= $.ord($t30))) break;
            if ($.truthy($.not(($.in_((await $.idx(L0["stmessage"], [L0["i"]])), [...$.range("0","9")]))))) {
              await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["stmessage"], async ($t32) => { L0["stmessage"] = $t32; }), L0["i"], 1])));
            }
            await $.tick();
          }
        }
        await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "Close", []);
        await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "SQL")), "Clear", []);
        await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "SQL")), "Add", [$.add($.add("Select a.id acc_id,a.acc_no acc_no from customers c,account a,avalute v   where (c.inn='", L0["stmessage"]), "')and(a.kli_id=c.id)and(a.close_dat is null)and(v.valute = a.val_acc)and((v.val_name='AZM'))")])));
        await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "Open", []);
        if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "RecordCount")), 0))) {
          L0["v_recclientaccid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "fieldbyname", ["acc_id"])), "AsInteger"));
          L0["v_recclientacc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataTemp")), "fieldbyname", ["acc_no"])), "AsString"));
        }
      }
      L0["stmessage"] = (await $.call(C, "copy", [(await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 3)]))])), 0, $.sub((await $.call(C, "pos", ["/", (await $.call(C, "trim", [(await $.idx((await $.mv(L0["rich"], "Lines")), [$.add(L0["templine"], 3)]))]))])), 1)]));
      {
        const $t33 = (await $.mv((await $.v(C, "DataMod")), "DataTemp"));
        await $.stmt($.wcall([$t33], "Close", [], C));
        await $.mcall((await $.wv([$t33], "SQL", C, false)), "Clear", []);
        await $.stmt((await $.mcall((await $.wv([$t33], "SQL", C, false)), "Add", [$.add($.add("Select Kod_Fil from BankInfo_T where Kod_B='", (await $.wv([$t33], "StMessage", { get: async () => L0["stmessage"], set: async (v) => { L0["stmessage"] = v; }, local: true }, false))), "'")])));
        await $.stmt($.wcall([$t33], "Open", [], C));
        if ($.truthy($.eq((await $.wv([$t33], "RecordCount", C, false)), 1))) {
          await $.wset([$t33], "v_Filial", (await $.mv((await $.mcall((await $.mv((await $.wv([$t33], "DataMod", C, false)), "DataTemp")), "FieldByName", ["Kod_Fil"])), "AsInteger")), { get: async () => L0["v_filial"], set: async (v) => { L0["v_filial"] = v; }, local: true });
        }
      }
      {
        const $t34 = (await $.mv((await $.v(C, "DataMod")), "DataTemp"));
        await $.stmt($.wcall([$t34], "Close", [], C));
        await $.mcall((await $.wv([$t34], "SQL", C, false)), "Clear", []);
        await $.stmt((await $.mcall((await $.wv([$t34], "SQL", C, false)), "Add", [$.add($.add("Select ID from Account where Acc_no='", (await $.wv([$t34], "v_recclientacc", { get: async () => L0["v_recclientacc"], set: async (v) => { L0["v_recclientacc"] = v; }, local: true }, false))), "' and close_dat is null")])));
        await $.stmt($.wcall([$t34], "Open", [], C));
        if ($.truthy($.eq((await $.wv([$t34], "RecordCount", C, false)), 1))) {
          await $.wset([$t34], "v_RecClientAccID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t34], "DataMod", C, false)), "DataTemp")), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["v_recclientaccid"], set: async (v) => { L0["v_recclientaccid"] = v; }, local: true });
        } else {
          await $.wset([$t34], "v_RecClientAccID", 0, { get: async () => L0["v_recclientaccid"], set: async (v) => { L0["v_recclientaccid"] = v; }, local: true });
        }
      }
      L0["startpos"] = (await $.callv(L0["findmytext"], [":70:", L0["fnstartpos"], (await $.mv(L0["rich"], "GetTextLen"))]));
      L0["endpos"] = (await $.callv(L0["findmytext"], [":26T:", L0["fnstartpos"], L0["fnendpos"]]));
      await $.mset(L0["rich"], "SelStart", $.add(L0["startpos"], 4));
      await $.mset(L0["rich"], "SelLength", $.sub($.sub(L0["endpos"], L0["startpos"]), 4));
      L0["stmessage"] = (await $.call(C, "trim", [(await $.mv(L0["rich"], "SelText"))]));
      L0["stmessage"] = (await $.call(C, "StringReplace", [L0["stmessage"], (await $.call(C, "chr", [10])), " ", [(await $.v(C, "rfReplaceAll"))]]));
      L0["stmessage"] = (await $.call(C, "StringReplace", [L0["stmessage"], "  ", " ", [(await $.v(C, "rfReplaceAll"))]]));
      L0["v_remitinf"] = L0["stmessage"];
      L0["templine"] = (await $.callv(L0["findlines"], [":26T:", L0["fnstartpos"], L0["fnendpos"]]));
      L0["stmessage"] = (await $.call(C, "trim", [(await $.call(C, "copy", [(await $.idx((await $.mv(L0["rich"], "Lines")), [L0["templine"]])), 6, 3]))]));
      L0["v_typecode"] = (await $.call(C, "strtoint", [L0["stmessage"]]));
      if ($.truthy(L0["fn77b"])) {
        L0["startpos"] = (await $.callv(L0["findmytext"], [":77B:", L0["fnstartpos"], (await $.mv(L0["rich"], "GetTextLen"))]));
        L0["endpos"] = (await $.callv(L0["findmytext"], [":21:", L0["startpos"], L0["fnendpos"]]));
        await $.mset(L0["rich"], "SelStart", $.add(L0["startpos"], 5));
        await $.mset(L0["rich"], "SelLength", $.sub($.sub(L0["endpos"], L0["startpos"]), 5));
        L0["stmessage"] = (await $.call(C, "trim", [(await $.mv(L0["rich"], "SelText"))]));
        L0["stmessage"] = (await $.call(C, "StringReplace", [L0["stmessage"], (await $.call(C, "chr", [10])), " ", [(await $.v(C, "rfReplaceAll"))]]));
        L0["stmessage"] = (await $.call(C, "StringReplace", [L0["stmessage"], "  ", " ", [(await $.v(C, "rfReplaceAll"))]]));
        L0["v_addinf"] = L0["stmessage"];
      }
      L0["fnstartpos"] = (await $.callv(L0["findmytext"], [":21:", L0["fnendpos"], (await $.mv(L0["rich"], "GetTextLen"))]));
      L0["lineindex"] = (await $.mv((await $.mv(L0["rich"], "CaretPos")), "y"));
      L0["fnendpos"] = (await $.callv(L0["findmytext"], [":26T:", L0["fnendpos"], (await $.mv(L0["rich"], "GetTextLen"))]));
      L0["temppos"] = (await $.callv(L0["findmytext"], [":77B:", L0["fnendpos"], (await $.mv(L0["rich"], "GetTextLen"))]));
      if ($.truthy((await $.and_(($.gt(L0["temppos"], (-(1)))), async () => ($.eq(L0["temppos"], $.add(L0["fnendpos"], 10))))))) {
        L0["fnendpos"] = L0["temppos"];
        L0["fn77b"] = true;
      } else {
        L0["fn77b"] = false;
      }
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_incoming_insert", [L0["v_transdate"], L0["v_reference"], L0["v_f20"], L0["v_f21"], L0["v_valcod"], L0["v_amount"], L0["v_senacc"], L0["v_senname"], L0["v_seninn"], L0["v_sencode"], L0["v_senbankid"], L0["v_senbanksubacc"], L0["v_senbankbik"], L0["v_senbankcode"], L0["v_senbankkrno"], L0["v_senbankinn"], L0["v_recbanksubacc"], L0["v_recbankbik"], L0["v_recclientacc"], L0["v_filial"], L0["v_recclientname"], L0["v_recclientinn"], L0["v_recclientcode"], L0["v_recclientaccid"], L0["v_remitinf"], L0["v_typecode"], L0["v_addinf"]]])));
      await $.tick();
    }
  } finally {
    await $.mcall(L0["rich"], "Clear", []);
  }
  return L0.result;
}, {"params": ["Rich", "ref"], "kind": "procedure", "ptypes": ["TRichEdit", "String"]});
  U.method("TLVPCSSForm", "SelectDate", async function SelectDate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "dtst": 0, "dtend": 0};
  L0["dtst"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "StDate")), "DateTime"))]));
  L0["dtend"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "EndDate")), "DateTime"))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "datamod")), "XS_BATCHS")), "SetVariable", ["BeginDate", L0["dtst"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "datamod")), "XS_BATCHS")), "SetVariable", ["EndDate", L0["dtend"]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TLVPCSSForm", "RefreshWithPos", async function RefreshWithPos(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "firstpos": null};
  L0["firstpos"] = (await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "GetBookmark"));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Refresh", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "GotoBookmark", [L0["firstpos"]])));
  L0["firstpos"] = (await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "GetBookmark"));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Refresh", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "GotoBookmark", [L0["firstpos"]])));
  await $.mcall((await $.mv((await $.v(C, "GridBatchs")), "SelectedRows")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Clear", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TLVPCSSForm", "LoadFileNames", async function LoadFileNames(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dir": $.copyArg(p0), result: false, "currdir": '', "fileinfo": null, "filedir": '', "fileattrs": 0};
  await $.fixArgs(L0, ["dir"]);
  L0["currdir"] = (await $.v(C, "GetCurrentDir"));
  try {
    L0["filedir"] = L0["dir"];
    if ($.truthy((await $.call(C, "DirectoryExists", [L0["filedir"]])))) {
      await $.stmt((await $.call(C, "ChDir", [L0["filedir"]])));
    } else {
      await $.stmt((await $.call(C, "MessageDlg", [$.add($.add("Directory ", L0["filedir"]), " not Exists!"), (await $.v(C, "mtWarning")), [(await $.v(C, "mbOk"))], 0])));
      L0["result"] = false;
      return L0.result;
    }
    L0["fileattrs"] = (await $.call(C, "Integer", [(await $.v(C, "faReadOnly"))]));
    L0["fileattrs"] = $.add(L0["fileattrs"], (await $.v(C, "faHidden")));
    L0["fileattrs"] = $.add(L0["fileattrs"], (await $.v(C, "faSysFile")));
    L0["fileattrs"] = $.add(L0["fileattrs"], (await $.v(C, "faVolumeID")));
    L0["fileattrs"] = $.add(L0["fileattrs"], (await $.v(C, "faDirectory")));
    L0["fileattrs"] = $.add(L0["fileattrs"], (await $.v(C, "faArchive")));
    await $.mcall((await $.mv((await $.mv((await $.v(C, "LVPCSSForm")), "FileListIncoming")), "Items")), "Clear", []);
    if ($.truthy($.eq((await $.call(C, "FindFirst", ["*.xml", L0["fileattrs"], $.ref(async () => L0["fileinfo"], async ($t35) => { L0["fileinfo"] = $t35; })])), 0))) {
      do {
        if ($.truthy($.eq(((await $.and_((await $.mv(L0["fileinfo"], "Attr")), async () => L0["fileattrs"]))), (await $.mv(L0["fileinfo"], "Attr"))))) {
          await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "LVPCSSForm")), "FileListIncoming")), "Items")), "Add", [(await $.mv(L0["fileinfo"], "Name"))])));
        }
        await $.tick();
      } while (!$.truthy($.ne((await $.call(C, "FindNext", [$.ref(async () => L0["fileinfo"], async ($t36) => { L0["fileinfo"] = $t36; })])), 0)));
      await $.stmt((await $.call(C, "FindClose", [$.ref(async () => L0["fileinfo"], async ($t37) => { L0["fileinfo"] = $t37; })])));
    }
  } finally {
    await $.stmt((await $.call(C, "ChDir", [L0["currdir"]])));
  }
  L0["result"] = false;
  return L0.result;
}, {"params": ["Dir"], "kind": "function", "ptypes": ["String"]});
  U.method("TLVPCSSForm", "MainPageControlChange", async function MainPageControlChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.idx((await $.mv((await $.v(C, "MainPageControl")), "Pages")), [0])), "Highlighted", $.eq((await $.mv((await $.v(C, "MainPageControl")), "ActivePageIndex")), 0));
  await $.mset((await $.idx((await $.mv((await $.v(C, "MainPageControl")), "Pages")), [1])), "Highlighted", $.eq((await $.mv((await $.v(C, "MainPageControl")), "ActivePageIndex")), 1));
  if ($.truthy($.eq((await $.mv((await $.v(C, "MainPageControl")), "ActivePageIndex")), 1))) {
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "Active")), false))) {
      await $.mset((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "Active", true);
    } else {
      await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "Refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "GridBatchsDrawColumnCell", async function GridBatchsDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0, "imageindexfilial": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t38 = (L0["sender"]);
    if ($.truthy($.ne((await $.mv((await $.mv((await $.mv(((await $.wv([$t38], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "RecordCount")), 0))) {
      { const $t39 = (await $.mv((await $.mcall((await $.mv((await $.mv(((await $.wv([$t38], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t39, (await $.wv([$t38], "msDefault", C, false)))) {
          await $.wset([$t38], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t39, (await $.wv([$t38], "msCommit", C, false)))) {
          await $.wset([$t38], "ImageIndex", 10, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t39, (await $.wv([$t38], "msReject", C, false)))) {
          await $.wset([$t38], "ImageIndex", 4, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t39, (await $.wv([$t38], "msFileCreated", C, false)))) {
          await $.wset([$t38], "ImageIndex", 5, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t39, (await $.wv([$t38], "msVerifikator", C, false)))) {
          await $.wset([$t38], "ImageIndex", 18, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t39, (await $.wv([$t38], "msFVerifikator", C, false)))) {
          await $.wset([$t38], "ImageIndex", 17, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t39, (await $.wv([$t38], "msAvtorizator", C, false)))) {
          await $.wset([$t38], "ImageIndex", 19, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t39, (await $.wv([$t38], "msReturnBack", C, false)))) {
          await $.wset([$t38], "ImageIndex", 16, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t38], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 2)), async () => ($.ne((await $.wv([$t38], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t38], "ImageList", C, false)), "Draw", [(await $.wv([$t38], "Canvas", C, false)), (await $.mv((await $.wv([$t38], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t38], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t38], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t38], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t38], "DefaultDrawColumnCell", [(await $.wv([$t38], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t38], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t38], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t38], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
      if ($.truthy((await $.or_((await $.or_((await $.or_(($.eq(((await $.wv([$t38], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), (await $.wv([$t38], "GridBatchs", C, false)))), async () => ($.eq(((await $.wv([$t38], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), (await $.wv([$t38], "GridIncoming", C, false)))))), async () => ($.eq(((await $.wv([$t38], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), (await $.wv([$t38], "DBGridOUTArchBatchs", C, false)))))), async () => ($.eq(((await $.wv([$t38], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), (await $.wv([$t38], "GridIncomingArchive", C, false)))))))) {
        { const $t40 = (await $.mv((await $.mcall((await $.mv((await $.mv(((await $.wv([$t38], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "FieldByName", ["FILIAL"])), "AsInteger"));
          if ($.eq($t40, (await $.wv([$t38], "MsHeadOffice", C, false)))) {
            await $.wset([$t38], "ImageIndexFilial", (-(1)), { get: async () => L0["imageindexfilial"], set: async (v) => { L0["imageindexfilial"] = v; }, local: true });
          }
          else {
            await $.wset([$t38], "ImageIndexFilial", 0, { get: async () => L0["imageindexfilial"], set: async (v) => { L0["imageindexfilial"] = v; }, local: true });
          }
        }
        if ($.truthy((await $.and_(($.eq((await $.wv([$t38], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t38], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
          await $.stmt((await $.mcall((await $.wv([$t38], "ImageListFilial", C, false)), "Draw", [(await $.wv([$t38], "Canvas", C, false)), (await $.mv((await $.wv([$t38], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t38], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t38], "ImageIndexFilial", { get: async () => L0["imageindexfilial"], set: async (v) => { L0["imageindexfilial"] = v; }, local: true }, false)), (await $.wv([$t38], "True", C, false))])));
        }
      }
    }
    if ($.truthy(($.eq((await $.mv((await $.wv([$t38], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), "FORMAT")))) {
      {
        const $t41 = (await $.mv((await $.wv([$t38], "GridBatchs", C, false)), "Canvas"));
        await $.stmt((await $.wcall([$t38, $t41], "FillRect", [(await $.wv([$t38, $t41], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false))], C)));
        if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t38, $t41], "DataSource", C, false)), "DataSet")), "FieldByName", ["FORMAT"])), "AsString")), "MT102T")))) {
          await $.mset((await $.wv([$t38, $t41], "Font", C, false)), "Color", (await $.wv([$t38, $t41], "clRed", C, false)));
          await $.stmt((await $.wcall([$t38, $t41], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t38, $t41], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Right")), 2), (await $.mcall((await $.wv([$t38, $t41], "Canvas", C, false)), "TextWidth", ["MT102T"]))), $.add((await $.mv((await $.wv([$t38, $t41], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), "MT102T"], C)));
        } else {
          if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t38, $t41], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
            await $.mset((await $.wv([$t38, $t41], "Font", C, false)), "Color", (await $.wv([$t38, $t41], "clblack", C, false)));
            await $.stmt((await $.wcall([$t38, $t41], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t38, $t41], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Right")), 2), (await $.mcall((await $.wv([$t38, $t41], "Canvas", C, false)), "TextWidth", ["MT102"]))), $.add((await $.mv((await $.wv([$t38, $t41], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), "MT102"], C)));
          }
        }
      }
    }
    if ($.truthy(($.eq((await $.mv((await $.wv([$t38], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), "FORMAT")))) {
      {
        const $t42 = (await $.mv((await $.wv([$t38], "DBGridOUTArchBatchs", C, false)), "Canvas"));
        await $.stmt((await $.wcall([$t38, $t42], "FillRect", [(await $.wv([$t38, $t42], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false))], C)));
        if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t38, $t42], "DataSource", C, false)), "DataSet")), "FieldByName", ["FORMAT"])), "AsString")), "MT102T")))) {
          await $.mset((await $.wv([$t38, $t42], "Font", C, false)), "Color", (await $.wv([$t38, $t42], "clRed", C, false)));
          await $.stmt((await $.wcall([$t38, $t42], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t38, $t42], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Right")), 2), (await $.mcall((await $.wv([$t38, $t42], "Canvas", C, false)), "TextWidth", ["MT102T"]))), $.add((await $.mv((await $.wv([$t38, $t42], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), "MT102T"], C)));
        } else {
          if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t38, $t42], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
            await $.mset((await $.wv([$t38, $t42], "Font", C, false)), "Color", (await $.wv([$t38, $t42], "clblack", C, false)));
            await $.stmt((await $.wcall([$t38, $t42], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t38, $t42], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Right")), 2), (await $.mcall((await $.wv([$t38, $t42], "Canvas", C, false)), "TextWidth", ["MT102"]))), $.add((await $.mv((await $.wv([$t38, $t42], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), "MT102"], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TLVPCSSForm", "ToolButton21Click", async function ToolButton21Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_((await $.or_(($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "RecordCount")), 0)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["status"])), "AsInteger")), 1)))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["status"])), "AsInteger")), 2)))))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "callintegerfunction", ["xs_Batchs_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 2]])));
  await $.mcall((await $.v(C, "LVPCSSForm")), "RefreshDataBatchs", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "ToolButton4Click", async function ToolButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "MessOutDelete")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "ToolButton8Click", async function ToolButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t43 = (await $.v(C, "PropertiesForm"));
    const $t44 = (await $.wv([$t43], "DataMod", C, false));
    await $.stmt((await $.wcall([$t43, $t44], "AddtoCOMBO", [(await $.wv([$t43, $t44], "Combo_Valute", C, false)), (await $.wv([$t43, $t44], "Valute_ID", C, false)), (await $.mv((await $.wv([$t43, $t44], "DataMod", C, false)), "DataValute")), "Select * from Avalute order by valute", "VALUTE", "VALU_NAME"], C)));
    await $.mset((await $.wv([$t43, $t44], "Combo_valute", C, false)), "ItemIndex", 0);
    if ($.truthy($.eq((await $.mv((await $.wv([$t43, $t44], "TransTypeName", C, false)), "Active")), (await $.wv([$t43, $t44], "false", C, false))))) {
      await $.mcall((await $.wv([$t43, $t44], "TransTypeName", C, false)), "Open", []);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t43, $t44], "TransTypeCode", C, false)), "Active")), (await $.wv([$t43, $t44], "false", C, false))))) {
      await $.mcall((await $.wv([$t43, $t44], "TransTypeCode", C, false)), "Open", []);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t43, $t44], "DataAccount", C, false)), "Active")), (await $.wv([$t43, $t44], "false", C, false))))) {
      await $.mcall((await $.wv([$t43, $t44], "DataAccount", C, false)), "Open", []);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t43, $t44], "Commision", C, false)), "Active")), (await $.wv([$t43, $t44], "false", C, false))))) {
      await $.mcall((await $.wv([$t43, $t44], "Commision", C, false)), "Open", []);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t43, $t44], "DataXSAccount", C, false)), "Active")), (await $.wv([$t43, $t44], "false", C, false))))) {
      await $.mcall((await $.wv([$t43, $t44], "DataXSAccount", C, false)), "Open", []);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t43, $t44], "OrDSXS_BranchAccount", C, false)), "Active")), (await $.wv([$t43, $t44], "false", C, false))))) {
      await $.mcall((await $.wv([$t43, $t44], "OrDSXS_BranchAccount", C, false)), "Open", []);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t43, $t44], "DataFilial", C, false)), "Active")), (await $.wv([$t43, $t44], "false", C, false))))) {
      await $.mcall((await $.wv([$t43, $t44], "DataFilial", C, false)), "Open", []);
    }
    await $.mcall((await $.wv([$t43, $t44], "DataTemp", C, false)), "Close", []);
    await $.mcall((await $.mv((await $.wv([$t43, $t44], "DataTemp", C, false)), "SQL")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t43, $t44], "DataTemp", C, false)), "SQL")), "Add", ["Select * from xs_config"])));
    await $.mcall((await $.wv([$t43, $t44], "DataTemp", C, false)), "Open", []);
    await $.mset((await $.wv([$t43, $t44], "Edit_Account", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t43, $t44], "DataTemp", C, false)), "fieldbyname", ["account"])), "asstring")));
    await $.mset((await $.wv([$t43, $t44], "Edit_limit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t43, $t44], "DataTemp", C, false)), "fieldbyname", ["amount_limit"])), "asstring")));
    await $.mset((await $.wv([$t43, $t44], "Edit_IN_Dir", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t43, $t44], "DataTemp", C, false)), "fieldbyname", ["in_dir"])), "asstring")));
    await $.mset((await $.wv([$t43, $t44], "Edit_out_dir", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t43, $t44], "DataTemp", C, false)), "fieldbyname", ["out_dir"])), "asstring")));
    await $.mset((await $.wv([$t43, $t44], "Edit_archiv_dir", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t43, $t44], "DataTemp", C, false)), "fieldbyname", ["archive_dir"])), "asstring")));
    await $.stmt((await $.mcall((await $.wv([$t43, $t44], "Commision", C, false)), "Locate", ["id", (await $.mv((await $.mcall((await $.wv([$t43, $t44], "DataTemp", C, false)), "fieldbyname", ["commisionid"])), "AsInteger")), []])));
    await $.mcall((await $.wv([$t43, $t44], "DataFilial", C, false)), "First", []);
    await $.mset((await $.wv([$t43, $t44], "ComFilial", C, false)), "ItemIndex", 0);
  }
  await $.mcall((await $.v(C, "PropertiesForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "ToolButton11Click", async function ToolButton11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_CREATEFILE"]])));
  {
    const $t45 = (await $.v(C, "DataMod"));
    const $t46 = (await $.wv([$t45], "PrepareFile_Form", C, false));
    if ($.truthy($.not((await $.mv((await $.wv([$t45, $t46], "XS_BATCHS", C, false)), "Active"))))) {
      await $.mset((await $.wv([$t45, $t46], "XS_BATCHS", C, false)), "Active", (await $.wv([$t45, $t46], "True", C, false)));
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t45, $t46], "DataBankInfo", C, false)), "Active")), (await $.wv([$t45, $t46], "false", C, false))))) {
      await $.mcall((await $.mv((await $.wv([$t45, $t46], "DataMod", C, false)), "DataBankInfo")), "Open", []);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t45, $t46], "XS_CONFIG", C, false)), "Active")), (await $.wv([$t45, $t46], "false", C, false))))) {
      await $.mcall((await $.mv((await $.wv([$t45, $t46], "DataMod", C, false)), "XS_CONFIG")), "Open", []);
    }
    await $.mset((await $.wv([$t45, $t46], "Edit_sender", C, false)), "Text", $.add((await $.mv((await $.mcall((await $.mv((await $.wv([$t45, $t46], "DataMod", C, false)), "DataBankInfo")), "FieldByName", ["SWIFT"])), "AsString")), "AXXX"));
    await $.mcall((await $.wv([$t45, $t46], "Edit_reference", C, false)), "Clear", []);
    await $.mset((await $.wv([$t45, $t46], "Edit_count", C, false)), "Text", "0");
    await $.mset((await $.wv([$t45, $t46], "CurrencyEdit1", C, false)), "Text", "0");
    await $.mset((await $.wv([$t45, $t46], "Edit_receiver", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t45, $t46], "XS_CONFIG", C, false)), "FieldByName", ["NB_SWIFT"])), "AsString")));
    await $.stmt((await $.mcall((await $.wv([$t45, $t46], "Convert_pack", C, false)), "CallProcedure", ["BatchToReadyBatchs", [0, 1]])));
    if ($.truthy($.eq((await $.mv((await $.wv([$t45, $t46], "ReadyBatchs", C, false)), "Active")), (await $.wv([$t45, $t46], "false", C, false))))) {
      await $.mcall((await $.wv([$t45, $t46], "ReadyBatchs", C, false)), "Open", []);
    } else {
      await $.mcall((await $.wv([$t45, $t46], "ReadyBatchs", C, false)), "Refresh", []);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t45, $t46], "SendingBatchs", C, false)), "Active")), (await $.wv([$t45, $t46], "false", C, false))))) {
      await $.mcall((await $.wv([$t45, $t46], "SendingBatchs", C, false)), "Open", []);
    } else {
      await $.mcall((await $.wv([$t45, $t46], "SendingBatchs", C, false)), "Refresh", []);
    }
  }
  await $.mcall((await $.v(C, "PrepareFile_Form")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "SendFileForm")), "DateTimePicker1")), "Date", (await $.v(C, "date")));
  await $.mset((await $.mv((await $.v(C, "SendFileForm")), "DateTimePicker2")), "Date", (await $.v(C, "date")));
  await $.mcall((await $.v(C, "SendFileForm")), "RefDate", []);
  await $.mcall((await $.v(C, "SendFileForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "Clear1Click", async function Clear1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "Info_ListBox")), "Items")), "Clear", []);
  await $.mcall((await $.v(C, "Panel_info")), "Hide", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "Popup_SingleConvertPopup", async function Popup_SingleConvertPopup(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.mv(((await $.mv((await $.v(C, "Popup_SingleConvert")), "PopupComponent"))), "Items")), "Count")), 0)), async () => ($.eq((await $.mv(((await $.mv((await $.v(C, "Popup_SingleConvert")), "PopupComponent"))), "ItemIndex")), (-(1)))))))) {
    await $.mset((await $.idx((await $.mv((await $.v(C, "Popup_SingleConvert")), "Items")), [0])), "Enabled", false);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Popup_SingleConvert")), "Items")), [3])), "Enabled", false);
  } else {
    await $.mset((await $.idx((await $.mv((await $.v(C, "Popup_SingleConvert")), "Items")), [0])), "Enabled", true);
    await $.mset((await $.idx((await $.mv((await $.v(C, "Popup_SingleConvert")), "Items")), [3])), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "Convert1Click", async function Convert1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ref": '', "filedir": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["filedir"] = $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "fieldbyname", ["in_dir"])), "AsString")), "\\");
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
  try {
    await $.mcall((await $.v(C, "Info_ListBox")), "Clear", []);
    L0["ref"] = "";
    L0["ref"] = (await $.call(C, "LoadToRich", [$.add(L0["filedir"], (await $.idx((await $.mv((await $.v(C, "FileListIncoming")), "Items")), [(await $.mv((await $.v(C, "FileListIncoming")), "itemindex"))])))]));
    if ($.truthy($.ne(L0["ref"], "0"))) {
      await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_Incoming")), "Open", []);
      await $.stmt((await $.call(C, "ConvertToBase", [(await $.v(C, "RichEdit1")), L0["ref"]])));
    } else {
      await $.mcall((await $.v(C, "Panel_info")), "Show", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Info_ListBox")), "Items")), "Add", [$.add($.add("Warning:  <", (await $.idx((await $.mv((await $.v(C, "FileListIncoming")), "Items")), [(await $.mv((await $.v(C, "FileListIncoming")), "itemindex"))]))), ">   Artıq konvert olunub !")])));
    }
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "Clear", []);
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "MessInDeleteExecute", async function MessInDeleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.mcall((await $.v(C, "GridIncoming")), "SetFocus", []);
  await $.mset((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "CurrentRowSelected", $.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "DataSource")), "DataSet")), "RecordCount")), 0));
  { const $t47 = $.sub((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "Count")), 1);
    L0["i"] = 0;
    let $t48 = true;
    for (;;) {
      if (!$t48) { L0["i"] = $.succ(L0["i"], 1); }
      $t48 = false;
      if (!($.ord(L0["i"]) <= $.ord($t47))) break;
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "items")), [L0["i"]]))]))])));
      { const $t49 = (await $.call(C, "MessageDlg", [(await $.call(C, "format", ["Əməliyyat silinsinmi #%d ?", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "DataSource")), "DataSet")), "fieldbyname", ["id"])), "asinteger"))]])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno")), (await $.v(C, "mbcancel")), (await $.v(C, "mball"))], 0]));
        if ($.eq($t49, (await $.v(C, "mryes")))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DEL")), "CallProcedure", ["xs_incoming_delete", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
          await $.mcall((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "DataSource")), "DataSet")), "Refresh", []);
          await $.mcall((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "Clear", []);
        }
        else if ($.eq($t49, (await $.v(C, "mrno")))) {
          return L0.result;
        }
        else if ($.eq($t49, (await $.v(C, "mrcancel")))) {
          break;
        }
        else if ($.eq($t49, (await $.v(C, "mrall")))) {
          { const $t50 = (await $.call(C, "MessageDlg", [$.add((await $.call(C, "inttostr", [(await $.mv((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "Count"))])), " sayda emeliyat silinsinmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0]));
            if ($.eq($t50, (await $.v(C, "mryes")))) {
              { const $t51 = $.sub((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "Count")), 1);
                L0["j"] = 0;
                let $t52 = true;
                for (;;) {
                  if (!$t52) { L0["j"] = $.succ(L0["j"], 1); }
                  $t52 = false;
                  if (!($.ord(L0["j"]) <= $.ord($t51))) break;
                  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "items")), [L0["j"]]))]))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DEL")), "CallProcedure", ["xs_incoming_delete", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
                  await $.tick();
                }
              }
              await $.mcall((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "DataSource")), "DataSet")), "Refresh", []);
              await $.mcall((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "Clear", []);
              break;
            }
            else if ($.eq($t50, (await $.v(C, "mrno")))) {
              return L0.result;
            }
          }
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "ToolButton14Click", async function ToolButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "MessInDelete")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "MT102DeleteExecute", async function MT102DeleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_DELETE"]])));
  await $.mcall((await $.v(C, "GridBatchs")), "SetFocus", []);
  await $.mset((await $.mv((await $.v(C, "GridBatchs")), "SelectedRows")), "CurrentRowSelected", $.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "DataSource")), "DataSet")), "RecordCount")), 0));
  { const $t53 = $.sub((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "SelectedRows")), "Count")), 1);
    L0["i"] = 0;
    let $t54 = true;
    for (;;) {
      if (!$t54) { L0["i"] = $.succ(L0["i"], 1); }
      $t54 = false;
      if (!($.ord(L0["i"]) <= $.ord($t53))) break;
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "SelectedRows")), "items")), [L0["i"]]))]))])));
      { const $t55 = (await $.call(C, "MessageDlg", [$.add($.add("Emeliyyat grupu #", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["id"])), "AsString"))), " silinsinmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno")), (await $.v(C, "mbcancel")), (await $.v(C, "mball"))], 0]));
        if ($.eq($t55, (await $.v(C, "mryes")))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DEL")), "CallProcedure", ["xs_batchs_delete", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
          await $.stmt($.call(C, "RefreshDataBatchs", []));
        }
        else if ($.eq($t55, (await $.v(C, "mrno")))) {
          return L0.result;
        }
        else if ($.eq($t55, (await $.v(C, "mrcancel")))) {
          break;
        }
        else if ($.eq($t55, (await $.v(C, "mrall")))) {
          { const $t56 = (await $.call(C, "MessageDlg", [$.add((await $.call(C, "inttostr", [(await $.mv((await $.mv((await $.v(C, "GridBatchs")), "SelectedRows")), "Count"))])), " sayda emeliyyat silinsinmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0]));
            if ($.eq($t56, (await $.v(C, "mryes")))) {
              { const $t57 = $.sub((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "SelectedRows")), "Count")), 1);
                L0["j"] = 0;
                let $t58 = true;
                for (;;) {
                  if (!$t58) { L0["j"] = $.succ(L0["j"], 1); }
                  $t58 = false;
                  if (!($.ord(L0["j"]) <= $.ord($t57))) break;
                  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "SelectedRows")), "items")), [L0["j"]]))]))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DEL")), "CallProcedure", ["xs_batchs_delete", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
                  await $.tick();
                }
              }
              await $.stmt($.call(C, "RefreshDataBatchs", []));
              break;
            }
            else if ($.eq($t56, (await $.v(C, "mrno")))) {
              return L0.result;
            }
          }
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "MessOutDeleteExecute", async function MessOutDeleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_DELETE"]])));
  await $.mcall((await $.v(C, "GridBeneficiary")), "SetFocus", []);
  await $.mset((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "CurrentRowSelected", $.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "RecordCount")), 0));
  { const $t59 = $.sub((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Count")), 1);
    L0["i"] = 0;
    let $t60 = true;
    for (;;) {
      if (!$t60) { L0["i"] = $.succ(L0["i"], 1); }
      $t60 = false;
      if (!($.ord(L0["i"]) <= $.ord($t59))) break;
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "items")), [L0["i"]]))]))])));
      { const $t61 = (await $.call(C, "MessageDlg", [$.add($.add("Emeliyyat #", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "fieldbyname", ["id"])), "AsString"))), " silinsizmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno")), (await $.v(C, "mbcancel")), (await $.v(C, "mball"))], 0]));
        if ($.eq($t61, (await $.v(C, "mryes")))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DEL")), "CallProcedure", ["xs_beneficiary_delete", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "Callprocedure", ["xs_BatchAmount_update", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "asinteger"))]])));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "callintegerfunction", ["xs_Batchs_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
          await $.mcall((await $.v(C, "LVPCSSForm")), "RefreshDataBatchs", []);
        }
        else if ($.eq($t61, (await $.v(C, "mrno")))) {
          return L0.result;
        }
        else if ($.eq($t61, (await $.v(C, "mrcancel")))) {
          break;
        }
        else if ($.eq($t61, (await $.v(C, "mrall")))) {
          { const $t62 = (await $.call(C, "MessageDlg", [$.add((await $.call(C, "inttostr", [(await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Count"))])), " sayda emeliyat silinsinmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0]));
            if ($.eq($t62, (await $.v(C, "mryes")))) {
              { const $t63 = $.sub((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Count")), 1);
                L0["j"] = 0;
                let $t64 = true;
                for (;;) {
                  if (!$t64) { L0["j"] = $.succ(L0["j"], 1); }
                  $t64 = false;
                  if (!($.ord(L0["j"]) <= $.ord($t63))) break;
                  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "items")), [L0["j"]]))]))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DEL")), "CallProcedure", ["xs_beneficiary_delete", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
                  await $.tick();
                }
              }
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "Callprocedure", ["xs_BatchAmount_update", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "asinteger"))]])));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "callintegerfunction", ["xs_Batchs_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
              await $.mcall((await $.v(C, "LVPCSSForm")), "RefreshDataBatchs", []);
              break;
            }
            else if ($.eq($t62, (await $.v(C, "mrno")))) {
              return L0.result;
            }
          }
        }
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "MessageInSelAllExecute", async function MessageInSelAllExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t65 = (await $.v(C, "GridIncoming"));
    const $t66 = (await $.wv([$t65], "SelectedRows", C, false));
    const $t67 = (await $.mv((await $.wv([$t65, $t66], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t65, $t66, $t67], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t65, $t66, $t67], "First", [], C));
      while ($.truthy($.not((await $.wv([$t65, $t66, $t67], "Eof", C, false))))) {
        await $.wset([$t65, $t66, $t67], "CurrentRowSelected", (await $.wv([$t65, $t66, $t67], "True", C, false)), C);
        await $.stmt($.wcall([$t65, $t66, $t67], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t65, $t66, $t67], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "Mt102RefreshExecute", async function Mt102RefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "RefreshDataBatchs", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "Mt102AcceptExecute", async function Mt102AcceptExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_((await $.or_(($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "RecordCount")), 0)), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "RecordCount")), 0)))), async () => (await $.and_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["status"])), "AsInteger")), (await $.v(C, "msDefault")))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["status"])), "AsInteger")), (await $.v(C, "msFileCreated")))))))))) {
    return L0.result;
  }
  await $.mset((await $.mv((await $.v(C, "GridBatchs")), "SelectedRows")), "CurrentRowSelected", $.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "DataSource")), "DataSet")), "RecordCount")), 0));
  if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["status"])), "AsInteger")), (await $.v(C, "msFileCreated")))))) {
    if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FormAcceptTransaction"))]))))) {
      await $.set(C, "FormAcceptTransaction", (await $.mcall((await $.v(C, "TFormAcceptTransaction")), "Create", [Self])));
    } else {
      await $.stmt((await $.call(C, "ShowMessage", ["Created"])));
    }
    await $.set(C, "AcceptTransForCreated", false);
    {
      const $t68 = (await $.v(C, "FormAcceptTransaction"));
      await $.mset((await $.wv([$t68], "CheckBox1", C, false)), "Checked", (await $.wv([$t68], "True", C, false)));
      await $.mset((await $.wv([$t68], "CheckBox2", C, false)), "Checked", (await $.wv([$t68], "True", C, false)));
      await $.mset((await $.wv([$t68], "GroupBox1", C, false)), "Enabled", (await $.wv([$t68], "True", C, false)));
      await $.mset((await $.wv([$t68], "Edit_Referens", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t68], "DataMod", C, false)), "XS_BATCHS")), "fieldbyname", ["trans_ref"])), "AsString")));
    }
    await $.mcall((await $.v(C, "FormAcceptTransaction")), "ShowModal", []);
    await $.mcall((await $.v(C, "FormAcceptTransaction")), "Release", []);
    await $.set(C, "FormAcceptTransaction", null);
    if ($.truthy($.not((await $.v(C, "AcceptTransForCreated"))))) {
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallIntegerFunction", ["xs_Batchs_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 1]])), 1))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["SetBatchsTransaction", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger"))]])));
    await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "RefreshRecord", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Refresh", []);
  } else {
    await $.stmt((await $.call(C, "MessageDlg", ["Batch-da olan butun messaglarin duzgunluyu testiq olunmalidi !", (await $.v(C, "mtWarning")), [(await $.v(C, "mbOk"))], 0])));
  }
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "MessagesOutAddExecute", async function MessagesOutAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_ADD"]])));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "PrepareTrans", [1, false])));
  await $.stmt($.call(C, "CreateTransCodeTree", []));
  await $.set(C, "new_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["id"])), "AsInteger")));
  await $.set(C, "After_Add", true);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataBankInfo")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataBankInfo")), "Open", []);
  }
  {
    const $t69 = (await $.v(C, "PaymentDetalsForm"));
    await $.mset((await $.wv([$t69], "ButtonFinish", C, false)), "Enabled", (await $.wv([$t69], "true", C, false)));
    await $.mset((await $.wv([$t69], "Button4", C, false)), "Enabled", (await $.wv([$t69], "true", C, false)));
    await $.mset((await $.wv([$t69], "SpeedButton2", C, false)), "Enabled", (await $.wv([$t69], "true", C, false)));
    await $.mset((await $.wv([$t69], "Combo_BankName", C, false)), "Enabled", (await $.wv([$t69], "true", C, false)));
    await $.mset((await $.wv([$t69], "Button5", C, false)), "Enabled", (await $.wv([$t69], "true", C, false)));
    await $.mset((await $.wv([$t69], "SearchBankM", C, false)), "Enabled", (await $.wv([$t69], "true", C, false)));
    await $.mset((await $.wv([$t69], "Edit_Client_acc_no", C, false)), "Enabled", (await $.wv([$t69], "true", C, false)));
    await $.mset((await $.wv([$t69], "Edit_Client_Name", C, false)), "Enabled", (await $.wv([$t69], "true", C, false)));
    await $.mset((await $.wv([$t69], "Edit_Client_Code", C, false)), "Enabled", (await $.wv([$t69], "true", C, false)));
    await $.mset((await $.wv([$t69], "Edit_Client_Voen", C, false)), "Enabled", (await $.wv([$t69], "true", C, false)));
    await $.mset((await $.wv([$t69], "Edit_tey1", C, false)), "Enabled", (await $.wv([$t69], "true", C, false)));
    await $.mset((await $.wv([$t69], "Edit_tey2", C, false)), "Enabled", (await $.wv([$t69], "true", C, false)));
    await $.mset((await $.wv([$t69], "Edit_tey3", C, false)), "Enabled", (await $.wv([$t69], "true", C, false)));
    await $.mset((await $.wv([$t69], "Edit_tey4", C, false)), "Enabled", (await $.wv([$t69], "true", C, false)));
    await $.mset((await $.wv([$t69], "Edit_inf1", C, false)), "Enabled", (await $.wv([$t69], "true", C, false)));
    await $.mset((await $.wv([$t69], "Edit_inf2", C, false)), "Enabled", (await $.wv([$t69], "true", C, false)));
    await $.mset((await $.wv([$t69], "Edit_inf3", C, false)), "Enabled", (await $.wv([$t69], "true", C, false)));
    await $.mset((await $.wv([$t69], "GroupBox7", C, false)), "Enabled", (await $.wv([$t69], "true", C, false)));
    await $.mset((await $.wv([$t69], "Edit_Amount", C, false)), "Enabled", (await $.wv([$t69], "true", C, false)));
    await $.mset((await $.wv([$t69], "SpeedButton1", C, false)), "Enabled", (await $.wv([$t69], "true", C, false)));
    await $.mset((await $.wv([$t69], "Edit_BankName_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t69], "DataMod", C, false)), "DataBankInfo")), "fieldbyname", ["BANK"])), "AsString")));
    await $.mset((await $.wv([$t69], "Edit_BIK_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t69], "DataMod", C, false)), "DataBankInfo")), "fieldbyname", ["SWIFT"])), "AsString")));
    await $.mset((await $.wv([$t69], "Edit_BankCode_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t69], "DataMod", C, false)), "DataBankInfo")), "fieldbyname", ["KOD_B"])), "AsString")));
    await $.mset((await $.wv([$t69], "Edit_account_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t69], "DataMod", C, false)), "DataBankInfo")), "fieldbyname", ["KRNO"])), "AsString")));
    await $.mset((await $.wv([$t69], "Edit_Voen_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t69], "DataMod", C, false)), "DataBankInfo")), "fieldbyname", ["INN"])), "AsString")));
    await $.mset((await $.wv([$t69], "Combo_Valute", C, false)), "ItemIndex", (await $.mcall((await $.mv((await $.wv([$t69], "Combo_Valute", C, false)), "Items")), "IndexOf", ["AZM"])));
    await $.mset((await $.wv([$t69], "Edit_account_sub_Self", C, false)), "Text", (await $.mv((await $.mv((await $.wv([$t69], "TransForm", C, false)), "Edit_account_sub")), "text")));
    await $.mset((await $.wv([$t69], "Combo_BankName", C, false)), "ItemIndex", (-(1)));
    await $.mcall((await $.wv([$t69], "Edit_BIK", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t69], "Edit_BankCode", C, false)), "clear", []);
    await $.mcall((await $.wv([$t69], "Edit_Referens", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t69], "Edit_account", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t69], "Edit_Voen", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t69], "Edit_Amount", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t69], "Edit_Account_Sub", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t69], "Edit_TransCode", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t69], "Edit_Client_Name", C, false)), "Clear", []);
    await $.mset((await $.wv([$t69], "Edit_Client_Code", C, false)), "Text", "/");
    await $.mcall((await $.wv([$t69], "Edit_Client_acc_no", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t69], "Edit_Client_Voen", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t69], "Edit_inf1", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t69], "Edit_inf2", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t69], "Edit_inf3", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t69], "Edit_tey1", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t69], "Edit_tey2", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t69], "Edit_tey3", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t69], "Edit_tey4", C, false)), "Clear", []);
    await $.mset((await $.wv([$t69], "Combo_Valute", C, false)), "ItemIndex", 0);
    await $.mset((await $.wv([$t69], "ButtonFinish", C, false)), "Enabled", (await $.wv([$t69], "True", C, false)));
    await $.stmt($.wcall([$t69], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "MessagesOutAdd")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "MessagesOutEditExecute", async function MessagesOutEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_EDIT"]])));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.stmt($.call(C, "ShowDetals", []));
  await $.mset((await $.mv((await $.v(C, "PaymentDetalsForm")), "ButtonFinish")), "Enabled", false);
  await $.mcall((await $.v(C, "PaymentDetalsForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "MessagesOutEdit")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "MessagesOutAcceptExecute", async function MessagesOutAcceptExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_((await $.or_(($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "RecordCount")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "fieldbyname", ["status"])), "AsInteger")), 0)))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["status"])), "AsInteger")), 2)))))) {
    return L0.result;
  }
  await $.mset((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "CurrentRowSelected", $.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "RecordCount")), 0));
  { const $t70 = $.sub((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Count")), 1);
    L0["i"] = 0;
    let $t71 = true;
    for (;;) {
      if (!$t71) { L0["i"] = $.succ(L0["i"], 1); }
      $t71 = false;
      if (!($.ord(L0["i"]) <= $.ord($t70))) break;
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "items")), [L0["i"]]))]))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "callprocedure", ["xs_beneficiary_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "fieldbyname", ["ID"])), "ASinteger")), 1]])));
      await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "RefreshRecord", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "MessAcceptButtonClick", async function MessAcceptButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "MessagesOutAccept")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "GridBeneficiaryDblClick", async function GridBeneficiaryDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "MessagesOutEdit")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "MessagesInConvertExecute", async function MessagesInConvertExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "ref": '', "errstr": '', "filedir": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
  try {
    await $.mcall((await $.v(C, "Info_ListBox")), "Clear", []);
    await $.mcall((await $.v(C, "Panel_info")), "Hide", []);
    L0["ref"] = "";
    L0["filedir"] = $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "FieldByName", ["in_dir"])), "AsString")), "\\");
    { const $t72 = $.sub((await $.mv((await $.mv((await $.v(C, "FileListIncoming")), "Items")), "Count")), 1);
      L0["i"] = 0;
      let $t73 = true;
      for (;;) {
        if (!$t73) { L0["i"] = $.succ(L0["i"], 1); }
        $t73 = false;
        if (!($.ord(L0["i"]) <= $.ord($t72))) break;
        L0["ref"] = (await $.call(C, "LoadToRich", [$.add(L0["filedir"], (await $.idx((await $.mv((await $.v(C, "FileListIncoming")), "Items")), [L0["i"]])))]));
        if ($.truthy($.ne(L0["ref"], "0"))) {
          await $.stmt((await $.call(C, "ConvertToBase", [(await $.v(C, "RichEdit1")), L0["ref"]])));
        } else {
          L0["errstr"] = $.add($.add($.add($.add(L0["errstr"], "Warning:  <"), (await $.idx((await $.mv((await $.v(C, "FileListIncoming")), "Items")), [L0["i"]]))), ">   Artıq konvert olunub !"), "\r");
        }
        await $.tick();
      }
    }
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "Clear", []);
    if ($.truthy($.gt((await $.call(C, "Length", [L0["errstr"]])), 0))) {
      await $.mset((await $.mv((await $.v(C, "Info_ListBox")), "Items")), "Text", L0["errstr"]);
      await $.mcall((await $.v(C, "Panel_Info")), "Show", []);
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "ButtonMessInConvertClick", async function ButtonMessInConvertClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "MessagesInConvert")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "MessagesInEditExecute", async function MessagesInEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "RecordCount")), 0))) {
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataAccount")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataAccount")), "Open", []);
  }
  await $.mcall((await $.v(C, "RecMessDet_form")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "MessagesInRefreshExecute", async function MessagesInRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "Refresh", []);
  await $.stmt((await $.call(C, "LoadFileNames", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_CONFIG")), "fieldbyname", ["in_dir"])), "AsString"))])));
  await $.mcall((await $.v(C, "FileListIncoming")), "Update", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "MessagesInAcceptExecute", async function MessagesInAcceptExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "s": 0, "f": 0, "filial": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "DataSource")), "DataSet")), "RecordCount")), 0)))) {
    return L0.result;
  }
  await $.mset((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "CurrentRowSelected", $.gt((await $.mv((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "DataSource")), "DataSet")), "RecordCount")), 0));
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "fieldbyname", ["trans_date"])), "AsDateTime")), (await $.v(C, "GetUseDate")))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "fieldbyname", ["trans_date"])), "AsDateTime")), (await $.mcall((await $.mv((await $.v(C, "DataMod")), "GetSysDate")), "CallDateFunction", ["Get_Date", []])))))))) {
    await $.stmt((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["Emeliyyat #%d deyishdirile bilmez!", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "fieldbyname", ["id"])), "AsInteger"))]])), (await $.v(C, "mtWarning")), [(await $.v(C, "mbOk"))], 0])));
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_IN"]])));
  if ($.truthy((await $.and_((await $.mv((await $.v(C, "CheckBox1")), "Checked")), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), 900)))))) {
    L0["f"] = (await $.mv((await $.idx((await $.mv((await $.v(C, "GridIncoming")), "Fields")), [4])), "asinteger"));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["set_incomingSum", [(await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (await $.call(C, "inttostr", [L0["f"]]))]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["set_incomingSumCod", [(await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"))]])));
  } else {
    { const $t74 = $.sub((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "Count")), 1);
      L0["i"] = 0;
      let $t75 = true;
      for (;;) {
        if (!$t75) { L0["i"] = $.succ(L0["i"], 1); }
        $t75 = false;
        if (!($.ord(L0["i"]) <= $.ord($t74))) break;
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "FieldByName", ["status"])), "AsInteger")), 1))) {
          continue;
        }
        await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "items")), [L0["i"]]))]))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "callprocedure", ["SetIncomingTransaction", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "fieldbyname", ["ID"])), "ASinteger"))]])));
        await $.tick();
      }
    }
  }
  await $.mcall((await $.v(C, "FileListIncoming")), "Update", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "GridIncomingDblClick", async function GridIncomingDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "MessagesinEdit")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "Mt102InsertExecute", async function Mt102InsertExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_ADD"]])));
  await $.stmt((await $.call(C, "preparetrans", [0, false])));
  await $.stmt($.call(C, "createTransCodeTree", []));
  await $.set(C, "after_add", false);
  await $.set(C, "mess_edit", false);
  await $.set(C, "new_id", (await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "Callintegerfunction", ["XS_BATCHS_insert", ["CREDIT", 0, (await $.mv((await $.mv((await $.v(C, "TransForm")), "edit_clientname")), "text")), (await $.mv((await $.mv((await $.v(C, "TransForm")), "edit_client_code")), "text")), (await $.mv((await $.mv((await $.v(C, "TransForm")), "edit_referens")), "text")), (await $.call(C, "strtofloat", [(await $.mv((await $.mv((await $.v(C, "TransForm")), "edit_amount")), "Text"))])), (await $.call(C, "strtofloat", [(await $.idx((await $.mv((await $.mv((await $.v(C, "TransForm")), "valute_id")), "items")), [(await $.mv((await $.mv((await $.v(C, "TransForm")), "combo_valute")), "itemindex"))]))])), 0]])));
  await $.mcall((await $.v(C, "TransForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Mt102Insert")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "N4DrawItem", async function N4DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "stext": '', "linebottom": 0, "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t76 = L0["acanvas"];
    const $t77 = (await $.wv([$t76], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t78 = (await $.wv([$t76, $t77], "Font", C, false));
      await $.wset([$t76, $t77, $t78], "Name", "Azl Sans Serif", C);
      await $.wset([$t76, $t77, $t78], "Charset", (await $.wv([$t76, $t77, $t78], "RUSSIAN_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t76, $t77, $t78], "Default", C, false)))) {
        await $.wset([$t76, $t77, $t78], "Style", [(await $.wv([$t76, $t77, $t78], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t76, $t77], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t76, $t77], "Pen", C, false)), "Color", (await $.wv([$t76, $t77], "clBlack", C, false)));
      await $.wset([$t76, $t77], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t76, $t77], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t76, $t77], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t76, $t77], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t76, $t77], "MoveTo", [(await $.mv((await $.wv([$t76, $t77], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t76, $t77], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t76, $t77], "LineTo", [(await $.mv((await $.wv([$t76, $t77], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t76, $t77], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t76, $t77], "inc", [$.ref(async () => (await $.wv([$t76, $t77], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t79) => { await $.wset([$t76, $t77], "LineBottom", $t79, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t76, $t77], "Pen", C, false)), "Color", (await $.wv([$t76, $t77], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t76, $t77], "MoveTo", [(await $.mv((await $.wv([$t76, $t77], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t76, $t77], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t76, $t77], "LineTo", [(await $.mv((await $.wv([$t76, $t77], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t76, $t77], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t76, $t77], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t76, $t77], "Brush", C, false)), "Color", (await $.wv([$t76, $t77], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t76, $t77], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t76, $t77], "Font", C, false)), "Color", (await $.wv([$t76, $t77], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t76, $t77], "Font", C, false)), "Color", (await $.wv([$t76, $t77], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t76, $t77], "Brush", C, false)), "Color", (await $.wv([$t76, $t77], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t76, $t77], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t76, $t77], "Font", C, false)), "Color", (await $.wv([$t76, $t77], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t76, $t77], "Font", C, false)), "Color", (await $.wv([$t76, $t77], "clGrayText", C, false)));
        }
      }
      await $.wset([$t76, $t77], "Bar", (await $.wv([$t76, $t77], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t76, $t77], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t76, $t77], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t80) => { await $.mset((await $.wv([$t76, $t77], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t80); }), 22], C)));
      await $.stmt((await $.wcall([$t76, $t77], "FillRect", [(await $.wv([$t76, $t77], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t76, $t77], "TextOut", [$.add((await $.mv((await $.wv([$t76, $t77], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t76, $t77], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), $.add((await $.wv([$t76, $t77], "Caption", C, false)), "      ")], C)));
    }
    await $.wset([$t76, $t77], "SText", (await $.wcall([$t76, $t77], "ShortCutToText", [(await $.wv([$t76, $t77], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t76, $t77], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t76, $t77], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t76, $t77], "TextWidth", [(await $.wv([$t76, $t77], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t76, $t77], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t76, $t77], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t76, $t77], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t81 = (await $.wv([$t76, $t77], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t76, $t77, $t81], "Assigned", [(await $.wv([$t76, $t77, $t81], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t76, $t77, $t81], "Checked", C, false)))) {
            await $.mset((await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t76, $t77, $t81], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t76, $t77, $t81], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t76, $t77, $t81], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t76, $t77, $t81], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t76, $t77, $t81], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t76, $t77, $t81], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t82) => { await $.mset((await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t82); }), 2], C)));
            await $.stmt((await $.wcall([$t76, $t77, $t81], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t83) => { await $.mset((await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t83); }), 2], C)));
            await $.stmt((await $.wcall([$t76, $t77, $t81], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t84) => { await $.mset((await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t84); }), 2], C)));
            await $.stmt((await $.wcall([$t76, $t77, $t81], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t85) => { await $.mset((await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t85); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t76, $t77, $t81], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t76, $t77, $t81], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t76, $t77, $t81], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t76, $t77, $t81], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t86) => { await $.mset((await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t86); }), 1], C)));
            await $.stmt((await $.wcall([$t76, $t77, $t81], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t87) => { await $.mset((await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t87); }), 1], C)));
            await $.stmt((await $.wcall([$t76, $t77, $t81], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t88) => { await $.mset((await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t88); }), 1], C)));
            await $.stmt((await $.wcall([$t76, $t77, $t81], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t89) => { await $.mset((await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t89); }), 1], C)));
            if ($.truthy((await $.wv([$t76, $t77, $t81], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t76, $t77, $t81], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t76, $t77, $t81], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t76, $t77, $t81], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t76, $t77, $t81], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t76, $t77, $t81], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t76, $t77, $t81], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t76, $t77, $t81], "Images", C, false)), "Draw", [(await $.wv([$t76, $t77, $t81], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t76, $t77, $t81], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t76, $t77, $t81], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t76, $t77, $t81], "ImageIndex", C, false)), (await $.wv([$t76, $t77, $t81], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TLVPCSSForm", "ConvertAll1Click", async function ConvertAll1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ButtonMessInConvert")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "MainPageControlDrawTab", async function MainPageControlDrawTab(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"control": $.copyArg(p0), "tabindex": $.copyArg(p1), "rect": $.copyArg(p2), "active": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["control", "tabindex", "rect", "active"]);
  {
    const $t90 = (await $.mv((await $.v(C, "MainPageControl")), "Canvas"));
    await $.mset((await $.wv([$t90], "Font", C, false)), "Name", "Azl Sans Serif");
    await $.mset((await $.wv([$t90], "Font", C, false)), "Charset", (await $.wv([$t90], "RUSSIAN_CHARSET", C, false)));
    await $.mset((await $.wv([$t90], "Font", C, false)), "Size", 8);
    await $.stmt((await $.wcall([$t90], "TextRect", [(await $.wv([$t90], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t90], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t90], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.mv((await $.wv([$t90], "TabSheet1", C, false)), "Caption"))], C)));
  }
  return L0.result;
}, {"params": ["Control", "TabIndex", "Rect", "Active"], "kind": "procedure", "ptypes": ["TCustomTabControl", "Integer", "TRect", "Boolean"]});
  U.method("TLVPCSSForm", "N6Click", async function N6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "Last", []);
  await $.mcall((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "N7Click", async function N7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "First", []);
  await $.mcall((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "N8Click", async function N8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "MessageInSelAll")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "N9Click", async function N9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "MessageOutSelAll")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "MessageOutSelAllExecute", async function MessageOutSelAllExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t91 = (await $.v(C, "GridBeneficiary"));
    const $t92 = (await $.wv([$t91], "SelectedRows", C, false));
    const $t93 = (await $.mv((await $.wv([$t91, $t92], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t91, $t92, $t93], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t91, $t92, $t93], "First", [], C));
      while ($.truthy($.not((await $.wv([$t91, $t92, $t93], "Eof", C, false))))) {
        await $.wset([$t91, $t92, $t93], "CurrentRowSelected", (await $.wv([$t91, $t92, $t93], "True", C, false)), C);
        await $.stmt($.wcall([$t91, $t92, $t93], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t91, $t92, $t93], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "N10Click", async function N10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "First", []);
  await $.mcall((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "N11Click", async function N11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Last", []);
  await $.mcall((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "GridBatchsTitleClick", async function GridBatchsTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  L0["xs_batchsorderby"] = $.fn(async function XS_BatchsOrderBy(p0) {
  const L1 = {"ofields": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["ofields"]);
  await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crSQLWait")));
  try {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "SetVariable", ["Title", L1["ofields"]])));
    await $.stmt($.call(C, "RefreshDataBatchs", []));
  } finally {
    await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L1.result;
});
  L0["changetitlecolor"] = $.fn(async function ChangeTitleColor(p0, p1, p2, p3) {
  const L1 = {"grid": $.copyArg(p0), "chcolumn": $.copyArg(p1), "orderingcolor": $.copyArg(p2), "defaulcolor": $.copyArg(p3), result: undefined, "i": 0};
  await $.fixArgs(L1, ["grid", "chcolumn", "orderingcolor", "defaulcolor"]);
  { const $t94 = $.sub((await $.mv((await $.mv(L1["grid"], "Columns")), "Count")), 1);
    L1["i"] = 0;
    let $t95 = true;
    for (;;) {
      if (!$t95) { L1["i"] = $.succ(L1["i"], 1); }
      $t95 = false;
      if (!($.ord(L1["i"]) <= $.ord($t94))) break;
      await $.mset((await $.mv((await $.idx((await $.mv(L1["grid"], "Columns")), [L1["i"]])), "Title")), "Color", L1["defaulcolor"]);
      await $.tick();
    }
  }
  await $.mset((await $.mv((await $.idx((await $.mv(L1["grid"], "Columns")), [L1["chcolumn"]])), "Title")), "Color", L1["orderingcolor"]);
  return L1.result;
});
  if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "Caption")), "№"))) {
    await $.stmt((await $.callv(L0["xs_batchsorderby"], ["x.id,x.status"])));
  } else {
    if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "Caption")), "F"))) {
      await $.stmt((await $.callv(L0["xs_batchsorderby"], ["x.filial,x.status"])));
    } else {
      if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "Caption")), ""))) {
        await $.stmt((await $.callv(L0["xs_batchsorderby"], ["x.status"])));
      } else {
        if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "Caption")), "Debet Məbləğ"))) {
          await $.stmt((await $.callv(L0["xs_batchsorderby"], ["x.AMOUNT,x.status"])));
        } else {
          return L0.result;
        }
      }
    }
  }
  await $.stmt((await $.callv(L0["changetitlecolor"], [(await $.v(C, "GridBatchs")), (await $.mv(L0["column"], "Index")), (await $.v(C, "clMaroon")), 8404992])));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TLVPCSSForm", "PopupMT102Popup", async function PopupMT102Popup(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "n4")), "Enabled", $.in_((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "FieldByName", ["status"])), "AsInteger")), [(await $.v(C, "msdefault")), (await $.v(C, "msfilecreated"))]));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "Sendtoarchive2Click", async function Sendtoarchive2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "SendXmlFileToArchive", [false, (await $.mv((await $.v(C, "FileListIncoming")), "ItemIndex"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "SendToArchive1Click", async function SendToArchive1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "SendXmlFileToArchive", [true, 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "Mt102EditExecute", async function Mt102EditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_EDIT"]])));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "preparetrans", [0, true])));
  await $.mcall((await $.v(C, "TransForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "N19Click", async function N19Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Mt102Edit")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "ToolButton12Click", async function ToolButton12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Mt102Edit")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "ToolButton10Click", async function ToolButton10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "currdir": '', "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["currdir"] = (await $.v(C, "GetCurrentDir"));
  try {
    if ($.truthy((await $.mv((await $.v(C, "OpenDialogIn")), "Execute")))) {
      { const $t96 = $.sub((await $.mv((await $.mv((await $.v(C, "OpenDialogIn")), "Files")), "Count")), 1);
        L0["i"] = 0;
        let $t97 = true;
        for (;;) {
          if (!$t97) { L0["i"] = $.succ(L0["i"], 1); }
          $t97 = false;
          if (!($.ord(L0["i"]) <= $.ord($t96))) break;
          if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "FileListIncoming")), "Items")), "IndexOf", [(await $.idx((await $.mv((await $.v(C, "OpenDialogIn")), "Files")), [L0["i"]]))])), (-(1))))) {
            await $.stmt((await $.mcall((await $.mv((await $.v(C, "FileListIncoming")), "Items")), "Add", [(await $.idx((await $.mv((await $.v(C, "OpenDialogIn")), "Files")), [L0["i"]]))])));
          }
          await $.tick();
        }
      }
    }
  } finally {
    await $.stmt((await $.call(C, "SetCurrentDir", [L0["currdir"]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "ClearList1Click", async function ClearList1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FileListIncoming")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "ClearSelected1Click", async function ClearSelected1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.v(C, "FileListIncoming")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "FileListIncoming")), "Items")), "Delete", [$.ref(async () => (await $.mv((await $.v(C, "FileListIncoming")), "ItemIndex")), async ($t98) => { await $.mset((await $.v(C, "FileListIncoming")), "ItemIndex", $t98); })])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "MessageInFileLoadExecute", async function MessageInFileLoadExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "currdir": '', "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["currdir"] = (await $.v(C, "GetCurrentDir"));
  try {
    if ($.truthy((await $.mv((await $.v(C, "OpenDialogIn")), "Execute")))) {
      { const $t99 = $.sub((await $.mv((await $.mv((await $.v(C, "OpenDialogIn")), "Files")), "Count")), 1);
        L0["i"] = 0;
        let $t100 = true;
        for (;;) {
          if (!$t100) { L0["i"] = $.succ(L0["i"], 1); }
          $t100 = false;
          if (!($.ord(L0["i"]) <= $.ord($t99))) break;
          if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "FileListIncoming")), "Items")), "IndexOf", [(await $.idx((await $.mv((await $.v(C, "OpenDialogIn")), "Files")), [L0["i"]]))])), (-(1))))) {
            await $.stmt((await $.mcall((await $.mv((await $.v(C, "FileListIncoming")), "Items")), "Add", [(await $.idx((await $.mv((await $.v(C, "OpenDialogIn")), "Files")), [L0["i"]]))])));
          }
          await $.tick();
        }
      }
    }
  } finally {
    await $.stmt((await $.call(C, "SetCurrentDir", [L0["currdir"]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "GridIncomingDrawColumnCell", async function GridIncomingDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0, "imageindexfilial": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t101 = (L0["sender"]);
    if ($.truthy($.ne((await $.mv((await $.mv((await $.mv(((await $.wv([$t101], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "RecordCount")), 0))) {
      { const $t102 = (await $.mv((await $.mcall((await $.mv((await $.mv(((await $.wv([$t101], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t102, (await $.wv([$t101], "msDefault", C, false)))) {
          await $.wset([$t101], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t102, (await $.wv([$t101], "msCommit", C, false)))) {
          await $.wset([$t101], "ImageIndex", 10, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t102, (await $.wv([$t101], "msReject", C, false)))) {
          await $.wset([$t101], "ImageIndex", 4, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t102, (await $.wv([$t101], "msFileCreated", C, false)))) {
          await $.wset([$t101], "ImageIndex", 5, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t101], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 2)), async () => ($.ne((await $.wv([$t101], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t101], "ImageList", C, false)), "Draw", [(await $.wv([$t101], "Canvas", C, false)), (await $.mv((await $.wv([$t101], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t101], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t101], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t101], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t101], "DefaultDrawColumnCell", [(await $.wv([$t101], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t101], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t101], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t101], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
      if ($.truthy((await $.or_(($.eq(((await $.wv([$t101], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), (await $.wv([$t101], "GridBatchs", C, false)))), async () => ($.eq(((await $.wv([$t101], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), (await $.wv([$t101], "GridIncoming", C, false)))))))) {
        { const $t103 = (await $.mv((await $.mcall((await $.mv((await $.mv(((await $.wv([$t101], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "FieldByName", ["FILIAL"])), "AsInteger"));
          if ($.eq($t103, (-(1)))) {
            await $.wset([$t101], "ImageIndexFilial", (-(1)), { get: async () => L0["imageindexfilial"], set: async (v) => { L0["imageindexfilial"] = v; }, local: true });
          }
          else {
            await $.wset([$t101], "ImageIndexFilial", 0, { get: async () => L0["imageindexfilial"], set: async (v) => { L0["imageindexfilial"] = v; }, local: true });
          }
        }
        if ($.truthy((await $.and_(($.eq((await $.wv([$t101], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t101], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
          await $.stmt((await $.mcall((await $.wv([$t101], "ImageListFilial", C, false)), "Draw", [(await $.wv([$t101], "Canvas", C, false)), (await $.mv((await $.wv([$t101], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t101], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t101], "ImageIndexFilial", { get: async () => L0["imageindexfilial"], set: async (v) => { L0["imageindexfilial"] = v; }, local: true }, false)), (await $.wv([$t101], "True", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TLVPCSSForm", "OutArchRefreshClick", async function OutArchRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "begdate": 0, "enddate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["begdate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPickOutArchBeg")), "DateTime"))]));
  L0["enddate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPickOutArchEnd")), "DateTime"))]));
  {
    const $t104 = (await $.mv((await $.v(C, "DataMod")), "XS_BatchsArchive"));
    await $.stmt($.wcall([$t104], "Close", [], C));
    await $.stmt((await $.wcall([$t104], "SetVariable", ["BeginDate", (await $.wv([$t104], "BegDate", { get: async () => L0["begdate"], set: async (v) => { L0["begdate"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t104], "SetVariable", ["EndDate", (await $.wv([$t104], "EndDate", { get: async () => L0["enddate"], set: async (v) => { L0["enddate"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t104], "Open", [], C));
  }
  await $.mcall((await $.mv((await $.v(C, "DBGridOUTArchBeneficiary")), "SelectedRows")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "DBGridOUTArchBatchs")), "SelectedRows")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BeneficiaryArchive")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BeneficiaryArchive")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "GridBatchsDblClick", async function GridBatchsDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Mt102Edit")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "BtnSendToArchiveClick", async function BtnSendToArchiveClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "PackTemp")), "CallProcedure", ["SendToArchive", []])));
  await $.stmt((await $.call(C, "ShowMessage", ["Mesajlar arxive gonderildi"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "ConvertConfirmeClick", async function ConvertConfirmeClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ButtonMessInConvertClick", [L0["sender"]])));
  await $.mcall((await $.v(C, "MessageInSelAll")), "Execute", []);
  await $.mcall((await $.v(C, "MessagesInAccept")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "EnterClick", async function EnterClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "krno_": '', "inn_": '', "kod_b_": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ShowMessage", [(await $.call(C, "inttostr", [(await $.mv((await $.idx((await $.mv((await $.v(C, "GridBeneficiary")), "Fields")), [0])), "asinteger"))]))])));
  {
    const $t105 = (await $.mv((await $.v(C, "DataMod")), "ODS_Report"));
    await $.stmt($.wcall([$t105], "Close", [], C));
    await $.mcall((await $.wv([$t105], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t105], "SQL", C, false)), "Add", [$.add("select * from xs_beneficiary where id=", (await $.wcall([$t105], "inttostr", [(await $.mv((await $.idx((await $.mv((await $.wv([$t105], "GridBeneficiary", C, false)), "Fields")), [0])), "asinteger"))], C)))])));
    await $.stmt($.wcall([$t105], "Open", [], C));
  }
  await $.set(C, "form_report", (await $.mcall((await $.v(C, "Tform_report")), "create", [Self])));
  await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select account from xs_config"])));
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_52A_1")), "Caption", "");
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_52A_1")), "Caption", $.add("/D/", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["account"])), "AsString"))));
  await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select swift from bankinfo"])));
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_52A_2")), "Caption", "");
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_52A_2")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["swift"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_57A_1")), "Caption", "");
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_57A_1")), "Caption", $.add("/C/0", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["REC_BANK_SUB_ACC"])), "AsString"))));
  await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("Select swift from bankm where id='", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "fieldbyname", ["REC_BANK_ID"])), "AsString"))), "'")])));
  await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select kod_b,krno,inn,swift from bankinfo"])));
  L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["KRNO"])), "AsString"));
  L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["INN"])), "AsString"));
  L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["KOD_B"])), "AsString"));
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_50K")), "Caption", "");
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_50K")), "Caption", $.add($.add($.add($.add(L0["kod_b_"], "/0"), L0["krno_"]), "/"), L0["inn_"]));
  if ($.truthy((await $.and_(($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "xs_batchs")), "FieldByName", ["filial"])), "AsInteger")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "xs_batchs")), "FieldByName", ["filial"])), "AsInteger")), (await $.v(C, "null")))))))) {
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("Select kod_bFil,inn_Fil from Filialinfo where kod_fil='", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "xs_batchs")), "FieldByName", ["filial"])), "AsString"))), "'")])));
    L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["inn_Fil"])), "AsString"));
    L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["kod_bFil"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_50K")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_50K")), "Caption", $.add($.add($.add($.add(L0["kod_b_"], "/0"), L0["krno_"]), "/"), L0["inn_"]));
  }
  await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("Select krno,inn,bankcode from bankm where id='", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "fieldbyname", ["REC_BANK_ID"])), "AsString"))), "'")])));
  L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["KRNO"])), "AsString"));
  L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["INN"])), "AsString"));
  L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["bankcode"])), "AsString"));
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_59")), "Caption", "");
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_59")), "Caption", $.add($.add($.add($.add(L0["kod_b_"], "/0"), L0["krno_"]), "/"), L0["inn_"]));
  await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel7")), "Caption", "");
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "AXXX"));
  await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel7")), "Caption", "");
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "AXXX"));
  await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["SELECT nb_swift FROM xs_config"])));
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel8")), "Caption", "");
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel8")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["nb_swift"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel44")), "Caption", "");
  await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel44")), "Caption", $.add("/BNF/ ", (await $.call(C, "IntToStr", [(await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "RecordCount"))]))));
  await $.mcall((await $.mv((await $.v(C, "form_report")), "QuickRep1")), "Preview", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "Open____ODS_Report_Temp____Add_SQL", async function Open____ODS_Report_Temp____Add_SQL(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sql_label": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sql_label"]);
  if ($.truthy($.ne(L0["sql_label"], ""))) {
    {
      const $t106 = (await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp"));
      await $.stmt($.wcall([$t106], "Close", [], C));
      await $.mcall((await $.wv([$t106], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t106], "SQL", C, false)), "Add", [(await $.wv([$t106], "SQL_Label", { get: async () => L0["sql_label"], set: async (v) => { L0["sql_label"] = v; }, local: true }, false))])));
      await $.stmt($.wcall([$t106], "Open", [], C));
    }
  }
  return L0.result;
}, {"params": ["SQL_Label"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TLVPCSSForm", "N21Click", async function N21Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "krno_": '', "inn_": '', "kod_b_": '', "dow_s": '', "dow_i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Form_Report", (await $.mcall((await $.v(C, "TForm_Report")), "Create", [Self])));
  {
    const $t107 = (await $.v(C, "Form_Report"));
    await $.mset((await $.wv([$t107], "QuickRep1", C, false)), "DataSet", (await $.mv((await $.wv([$t107], "DataMod", C, false)), "XS_Beneficiary")));
    await $.mset((await $.wv([$t107], "QRDBText1", C, false)), "DataSet", (await $.mv((await $.wv([$t107], "DataMod", C, false)), "XS_Batchs")));
    await $.mset((await $.wv([$t107], "QRDBText2", C, false)), "DataSet", (await $.mv((await $.wv([$t107], "DataMod", C, false)), "XS_Batchs")));
    await $.mset((await $.wv([$t107], "QRDBText5", C, false)), "DataSet", (await $.mv((await $.wv([$t107], "DataMod", C, false)), "XS_Batchs")));
    await $.mset((await $.wv([$t107], "QRDBText6", C, false)), "DataSet", (await $.mv((await $.wv([$t107], "DataMod", C, false)), "XS_Batchs")));
    await $.mset((await $.wv([$t107], "QRDBText8", C, false)), "DataSet", (await $.mv((await $.wv([$t107], "DataMod", C, false)), "XS_Batchs")));
  }
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "RecordCount")), 0))) {
    {
      const $t108 = (await $.mv((await $.v(C, "DataMod")), "ODS_Report"));
      await $.stmt($.wcall([$t108], "Close", [], C));
      await $.mcall((await $.wv([$t108], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t108], "SQL", C, false)), "Add", [$.add("select * from xs_beneficiary where id=", (await $.wcall([$t108], "inttostr", [(await $.mv((await $.idx((await $.mv((await $.wv([$t108], "GridBeneficiary", C, false)), "Fields")), [0])), "asinteger"))], C)))])));
      await $.stmt($.wcall([$t108], "Open", [], C));
    }
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select account from xs_config"])));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_52A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_52A_1")), "Caption", $.add("/D/", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["account"])), "AsString"))));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select swift from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_52A_2")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_52A_2")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["swift"])), "AsString")));
    L0["dow_s"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["REMIT_INF"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_report")), "QRL_70_70")), "Caption", " ");
    await $.mset((await $.mv((await $.v(C, "Form_report")), "QRL_70_140")), "Caption", " ");
    await $.mset((await $.mv((await $.v(C, "Form_report")), "QRL_70_210")), "Caption", " ");
    L0["dow_i"] = 0;
    do {
      L0["dow_i"] = $.add(L0["dow_i"], 70);
      {
        const $t109 = (await $.v(C, "Form_report"));
        await $.mset((await $.wcall([$t109], "TQRLabel", [(await $.wcall([$t109], "FindComponent", [$.add("QRL_70_", (await $.wcall([$t109], "IntToStr", [(await $.wv([$t109], "Dow_i", { get: async () => L0["dow_i"], set: async (v) => { L0["dow_i"] = v; }, local: true }, false))], C)))], C))], C)), "Caption", (await $.wcall([$t109], "copy", [(await $.wv([$t109], "Dow_s", { get: async () => L0["dow_s"], set: async (v) => { L0["dow_s"] = v; }, local: true }, false)), $.sub((await $.wv([$t109], "Dow_i", { get: async () => L0["dow_i"], set: async (v) => { L0["dow_i"] = v; }, local: true }, false)), 69), 70], C)));
      }
      await $.tick();
    } while (!$.truthy($.gt(L0["dow_i"], (await $.call(C, "length", [L0["dow_s"]])))));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_57A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_57A_1")), "Caption", $.add("/C/0", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["REC_BANK_SUB_ACC"])), "AsString"))));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("Select swift from bankm where id='", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "fieldbyname", ["REC_BANK_ID"])), "AsString"))), "'")])));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_57A_2")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_57A_2")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["swift"])), "AsString")));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select kod_b,krno,inn,swift from bankinfo"])));
    L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["KRNO"])), "AsString"));
    L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["INN"])), "AsString"));
    L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["KOD_B"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_50K")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_50K")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    if ($.truthy((await $.and_(($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "xs_batchs")), "FieldByName", ["filial"])), "AsInteger")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "xs_batchs")), "FieldByName", ["filial"])), "AsInteger")), (await $.v(C, "null")))))))) {
      await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("Select kod_bFil,inn_Fil from Filialinfo where kod_fil='", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "xs_batchs")), "FieldByName", ["filial"])), "AsString"))), "'")])));
      L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["inn_Fil"])), "AsString"));
      L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["kod_bFil"])), "AsString"));
      await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_50K")), "Caption", "");
      await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_50K")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    }
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("Select krno,inn,bankcode from bankm where id='", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "fieldbyname", ["REC_BANK_ID"])), "AsString"))), "'")])));
    L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["KRNO"])), "AsString"));
    L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["INN"])), "AsString"));
    L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["bankcode"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_59")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_59")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "AXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "AXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["SELECT nb_swift FROM xs_config"])));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel8")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel8")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["nb_swift"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel44")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel44")), "Caption", $.add("/BNF/", (await $.call(C, "IntToStr", [(await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "RecordCount"))]))));
    await $.mcall((await $.mv((await $.v(C, "form_report")), "QuickRep1")), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "N22Click", async function N22Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "krno_": '', "inn_": '', "kod_b_": '', "dow_i": 0, "dow_s": '', "tdate": 0, "tcode": 0, "tnameid": 0, "treference": '', "tfilial": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "RecordCount")), 0))) {
    {
      const $t110 = (await $.mv((await $.v(C, "DataMod")), "ODS_Report"));
      await $.stmt($.wcall([$t110], "Close", [], C));
      await $.mcall((await $.wv([$t110], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t110], "SQL", C, false)), "Add", [$.add("select * from xs_incomingview where id=", (await $.wcall([$t110], "inttostr", [(await $.mv((await $.idx((await $.mv((await $.wv([$t110], "GridIncoming", C, false)), "Fields")), [0])), "asinteger"))], C)))])));
      await $.stmt($.wcall([$t110], "Open", [], C));
    }
    L0["tcode"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "fieldbyname", ["TYPECODE"])), "AsInteger"));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_CODEID")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_CODEID")), "SetVariable", ["t_code", L0["tcode"]])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_CODEID")), "open", []);
    L0["tnameid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_CODEID")), "fieldbyname", ["NAMEID"])), "AsInteger"));
    await $.set(C, "Form_Report_in", (await $.mcall((await $.v(C, "TForm_Report_in")), "create", [Self])));
    if ($.truthy($.eq(L0["tnameid"], 1))) {
      L0["tdate"] = (await $.call(C, "trunc", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "fieldbyname", ["TRANS_date"])), "AsDateTime"))]));
      L0["treference"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "fieldbyname", ["REFERENCE"])), "AsString"));
      L0["tfilial"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "fieldbyname", ["FILIAL"])), "AsInteger"));
      await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataSum")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataSum")), "SetVariable", ["t_date", L0["tdate"]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataSum")), "SetVariable", ["t_code", L0["tcode"]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataSum")), "SetVariable", ["t_REFERENCE", L0["treference"]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataSum")), "SetVariable", ["T_filial", L0["tfilial"]])));
      await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataSum")), "Open", []);
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText4")), "DataSet", (await $.mv((await $.v(C, "DataMod")), "DataSum")));
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText4")), "DataField", "Sumammount");
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText18")), "DataSet", (await $.mv((await $.v(C, "DataMod")), "DataSum")));
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText18")), "DataField", "Sumammount");
    } else {
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText4")), "DataSet", (await $.mv((await $.v(C, "DataMod")), "ODS_Report")));
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText4")), "DataField", "AMOUNT");
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText18")), "DataSet", (await $.mv((await $.v(C, "DataMod")), "ODS_Report")));
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText18")), "DataField", "AMOUNT");
    }
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_52A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_52A_1")), "Caption", $.add("/D/0", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["SEN_BANK_SUBACC"])), "AsString"))));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add($.add("Select * from bankm where subkrno='", "0"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "fieldbyname", ["SEN_BANK_SUBACC"])), "AsString"))), "'")])));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_52A_2")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_52A_2")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")));
    L0["dow_s"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["REMIT_INF"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRL_70_70")), "Caption", " ");
    await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRL_70_140")), "Caption", " ");
    await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRL_70_210")), "Caption", " ");
    L0["dow_i"] = 0;
    do {
      L0["dow_i"] = $.add(L0["dow_i"], 70);
      {
        const $t111 = (await $.v(C, "Form_report_in"));
        await $.mset((await $.wcall([$t111], "TQRLabel", [(await $.wcall([$t111], "FindComponent", [$.add("QRL_70_", (await $.wcall([$t111], "IntToStr", [(await $.wv([$t111], "Dow_i", { get: async () => L0["dow_i"], set: async (v) => { L0["dow_i"] = v; }, local: true }, false))], C)))], C))], C)), "Caption", (await $.wcall([$t111], "copy", [(await $.wv([$t111], "Dow_s", { get: async () => L0["dow_s"], set: async (v) => { L0["dow_s"] = v; }, local: true }, false)), $.sub((await $.wv([$t111], "Dow_i", { get: async () => L0["dow_i"], set: async (v) => { L0["dow_i"] = v; }, local: true }, false)), 69), 70], C)));
      }
      await $.tick();
    } while (!$.truthy($.gt(L0["dow_i"], (await $.call(C, "length", [L0["dow_s"]])))));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_57A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_57A_1")), "Caption", $.add("/C/0", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["REC_BANK_SUBACC"])), "AsString"))));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_57A_2")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_57A_2")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["REC_BANK_BIK"])), "AsString")));
    L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["SEN_BANK_KRNO"])), "AsString"));
    L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["SEN_BANK_INN"])), "AsString"));
    L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["SEN_BANK_CODE"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_50K")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_50K")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("select * from filialinfo where KOD_FIL = '", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "fieldbyname", ["MAIN_FILIAL"])), "AsString"))), "'")])));
    L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["KRNO"])), "AsString"));
    L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["INN"])), "AsString"));
    L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["KOD_B"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_59")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_59")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "XXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "XXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["SELECT nb_swift FROM xs_config"])));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel8")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel8")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["nb_swift"])), "AsString")));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("SELECT * FROM xs_transtype_code where CODE = '", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "fieldbyname", ["TYPECODE"])), "AsString"))), "'")])));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_77")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_77")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["NAME"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel44")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel44")), "Caption", $.add("/BNF/", (await $.call(C, "IntToStr", [(await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "RecordCount"))]))));
    await $.mcall((await $.mv((await $.v(C, "Form_report_in")), "QuickRep1")), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "Print1Click", async function Print1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "krno_": '', "inn_": '', "kod_b_": '', "dow_s": '', "dow_i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Form_Report", (await $.mcall((await $.v(C, "TForm_Report")), "Create", [Self])));
  {
    const $t112 = (await $.v(C, "Form_Report"));
    await $.mset((await $.wv([$t112], "QuickRep1", C, false)), "DataSet", (await $.mv((await $.wv([$t112], "DataMod", C, false)), "XS_BeneficiaryArchive")));
    await $.mset((await $.wv([$t112], "QRDBText1", C, false)), "DataSet", (await $.mv((await $.wv([$t112], "DataMod", C, false)), "XS_BatchsArchive")));
    await $.mset((await $.wv([$t112], "QRDBText2", C, false)), "DataSet", (await $.mv((await $.wv([$t112], "DataMod", C, false)), "XS_BatchsArchive")));
    await $.mset((await $.wv([$t112], "QRDBText5", C, false)), "DataSet", (await $.mv((await $.wv([$t112], "DataMod", C, false)), "XS_BatchsArchive")));
    await $.mset((await $.wv([$t112], "QRDBText6", C, false)), "DataSet", (await $.mv((await $.wv([$t112], "DataMod", C, false)), "XS_BatchsArchive")));
    await $.mset((await $.wv([$t112], "QRDBText8", C, false)), "DataSet", (await $.mv((await $.wv([$t112], "DataMod", C, false)), "XS_BatchsArchive")));
    await $.mset((await $.wv([$t112], "QRDBText18", C, false)), "DataSet", (await $.mv((await $.wv([$t112], "DataMod", C, false)), "XS_BatchsArchive")));
  }
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BeneficiaryArchive")), "RecordCount")), 0))) {
    {
      const $t113 = (await $.mv((await $.v(C, "DataMod")), "ODS_Report"));
      await $.stmt($.wcall([$t113], "Close", [], C));
      await $.mcall((await $.wv([$t113], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t113], "SQL", C, false)), "Add", [$.add("select * from XS_BENEFICIARY_ARCHIVE where ID=", (await $.wcall([$t113], "IntToStr", [(await $.mv((await $.idx((await $.mv((await $.wv([$t113], "DBGridOUTArchBeneficiary", C, false)), "Fields")), [0])), "AsInteger"))], C)))])));
      await $.stmt($.wcall([$t113], "Open", [], C));
    }
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select account from xs_config"])));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_52A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_52A_1")), "Caption", $.add("/D/", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["account"])), "AsString"))));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select swift from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_52A_2")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_52A_2")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["swift"])), "AsString")));
    L0["dow_s"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["REMIT_INF"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_report")), "QRL_70_70")), "Caption", " ");
    await $.mset((await $.mv((await $.v(C, "Form_report")), "QRL_70_140")), "Caption", " ");
    await $.mset((await $.mv((await $.v(C, "Form_report")), "QRL_70_210")), "Caption", " ");
    L0["dow_i"] = 0;
    do {
      L0["dow_i"] = $.add(L0["dow_i"], 70);
      {
        const $t114 = (await $.v(C, "Form_report"));
        await $.mset((await $.wcall([$t114], "TQRLabel", [(await $.wcall([$t114], "FindComponent", [$.add("QRL_70_", (await $.wcall([$t114], "IntToStr", [(await $.wv([$t114], "Dow_i", { get: async () => L0["dow_i"], set: async (v) => { L0["dow_i"] = v; }, local: true }, false))], C)))], C))], C)), "Caption", (await $.wcall([$t114], "copy", [(await $.wv([$t114], "Dow_s", { get: async () => L0["dow_s"], set: async (v) => { L0["dow_s"] = v; }, local: true }, false)), $.sub((await $.wv([$t114], "Dow_i", { get: async () => L0["dow_i"], set: async (v) => { L0["dow_i"] = v; }, local: true }, false)), 69), 70], C)));
      }
      await $.tick();
    } while (!$.truthy($.gt(L0["dow_i"], (await $.call(C, "length", [L0["dow_s"]])))));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_57A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_57A_1")), "Caption", $.add("/C/0", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["REC_BANK_SUB_ACC"])), "AsString"))));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("Select swift from bankm where id='", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "fieldbyname", ["REC_BANK_ID"])), "AsString"))), "'")])));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_57A_2")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_57A_2")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["swift"])), "AsString")));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select kod_b,krno,inn,swift from bankinfo"])));
    L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["KRNO"])), "AsString"));
    L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["INN"])), "AsString"));
    L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["KOD_B"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_50K")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_50K")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    if ($.truthy((await $.and_(($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BatchsArchive")), "FieldByName", ["filial"])), "AsInteger")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BatchsArchive")), "FieldByName", ["filial"])), "AsInteger")), (await $.v(C, "null")))))))) {
      await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("Select kod_bFil,inn_Fil from Filialinfo where kod_fil='", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "xs_batchs")), "FieldByName", ["filial"])), "AsString"))), "'")])));
      L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["inn_Fil"])), "AsString"));
      L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["kod_bFil"])), "AsString"));
      await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_50K")), "Caption", "");
      await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_50K")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    }
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("Select krno,inn,bankcode from bankm where id='", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "fieldbyname", ["REC_BANK_ID"])), "AsString"))), "'")])));
    L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["KRNO"])), "AsString"));
    L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["INN"])), "AsString"));
    L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["bankcode"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_59")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_59")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "AXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "AXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["SELECT nb_swift FROM xs_config"])));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel8")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel8")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["nb_swift"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel44")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel44")), "Caption", $.add("/BNF/", (await $.call(C, "IntToStr", [(await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BeneficiaryArchive")), "RecordCount"))]))));
    await $.mcall((await $.mv((await $.v(C, "form_report")), "QuickRep1")), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "N23Click", async function N23Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "krno_": '', "inn_": '', "kod_b_": '', "dow_s": '', "dow_i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ReportX", (await $.mcall((await $.v(C, "TReportX")), "Create", [Self])));
  {
    const $t115 = (await $.v(C, "ReportX"));
    await $.mset((await $.wv([$t115], "QRDBText1", C, false)), "DataSet", (await $.mv((await $.wv([$t115], "DataMod", C, false)), "XS_Beneficiary")));
    await $.mset((await $.wv([$t115], "QRDBText1", C, false)), "DataSet", (await $.mv((await $.wv([$t115], "DataMod", C, false)), "XS_Batchs")));
    await $.mset((await $.wv([$t115], "QRDBText2", C, false)), "DataSet", (await $.mv((await $.wv([$t115], "DataMod", C, false)), "XS_Batchs")));
    await $.mset((await $.wv([$t115], "QRDBText5", C, false)), "DataSet", (await $.mv((await $.wv([$t115], "DataMod", C, false)), "XS_Batchs")));
    await $.mset((await $.wv([$t115], "QRDBText6", C, false)), "DataSet", (await $.mv((await $.wv([$t115], "DataMod", C, false)), "XS_Batchs")));
    await $.mset((await $.wv([$t115], "QRDBText8", C, false)), "DataSet", (await $.mv((await $.wv([$t115], "DataMod", C, false)), "XS_Batchs")));
  }
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "RecordCount")), 0))) {
    {
      const $t116 = (await $.mv((await $.v(C, "DataMod")), "ODS_Report"));
      await $.stmt($.wcall([$t116], "Close", [], C));
      await $.mcall((await $.wv([$t116], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t116], "SQL", C, false)), "Add", [$.add($.add($.add($.add($.add($.add($.add("select a.id, a.batchid, a.rec_bank_id, a.rec_bank_sub_acc,a.client_acc_no, a.client_name,", "a.client_code, a.client_inn,a.remit_inf, a.trans_cod, a.add_inf, a.val_date, a.val_cod,"), "a.mess_reference, a.amount, a.bnfcount, a.status,a.transaction_id, a.userid,bm.swift ,bm.bankcode||'/'||bm.inn as ab,'0'||bm.krno as kr from xs_beneficiary a,"), "xs_batchs b,bankm bm where a.rec_bank_id = bm.id and a.batchid="), (await $.wcall([$t116], "inttostr", [(await $.mv((await $.idx((await $.mv((await $.wv([$t116], "GridBatchs", C, false)), "Fields")), [0])), "asinteger"))], C))), " group by a.id, a.batchid,a.rec_bank_id, a.rec_bank_sub_acc,a.client_acc_no, a.client_name,a.client_code,"), "a.client_inn,a.remit_inf, a.trans_cod, a.add_inf, a.val_date, a.val_cod,a.mess_reference, a.amount,"), "a.bnfcount,a.status,a.transaction_id, a.userid,bm.swift,bm.krno,bm.inn,bm.bankcode order by a.batchid")])));
      await $.stmt($.wcall([$t116], "Open", [], C));
    }
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select account from xs_config"])));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_52A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_52A_1")), "Caption", $.add("/D/", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["account"])), "AsString"))));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select swift from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_52A_2")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_52A_2")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["swift"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_57A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_57A_1")), "Caption", $.add("/C/0", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["REC_BANK_SUB_ACC"])), "AsString"))));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("Select kod_b,krno,inn,swift from bankinfo_t where kod_fil='", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "xs_batchs")), "FieldByName", ["filial"])), "AsString"))), "'")])));
    L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["KRNO"])), "AsString"));
    L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["INN"])), "AsString"));
    L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["KOD_B"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_50K")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_50K")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "AXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "AXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["SELECT nb_swift FROM xs_config"])));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel8")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel8")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["nb_swift"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel44")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel44")), "Caption", $.add("/BNF/", (await $.call(C, "IntToStr", [(await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "RecordCount"))]))));
    await $.mcall((await $.mv((await $.v(C, "ReportX")), "QuickRep1")), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "ToolButton20Click", async function ToolButton20Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["FVERIFIKATOR"]])));
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "RecordCount")), 0)), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "RecordCount")), 0)))))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_Batchs_FVerifStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger"))]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_beneficiary_FVerifStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger"))]])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "ToolButton39Click", async function ToolButton39Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["VERIFIKATOR"]])));
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "RecordCount")), 0)), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "RecordCount")), 0)))))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_Batchs_VerifStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger"))]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_beneficiary_VerifStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger"))]])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "ToolButton38Click", async function ToolButton38Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["AVTORIZATOR"]])));
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "RecordCount")), 0)), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "RecordCount")), 0)))))) {
    return L0.result;
  }
  if ($.truthy(($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["filial"])), "ASinteger")), 0)))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["setbatchsAVTOtransaction", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger"))]])));
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_Batchs_AvtStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger"))]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_beneficiary_AvtStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger"))]])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "ToolButton23Click", async function ToolButton23Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["RETURNBACK"]])));
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["status"])), "ASinteger")), 4)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "xs_beneficiary")), "fieldbyname", ["status"])), "ASinteger")), 4)))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_Batchs_ReturnChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 7]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_beneficiary_ReturnStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 7]])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Refresh", []);
    return L0.result;
  }
  if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["status"])), "ASinteger")), 7)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "xs_beneficiary")), "fieldbyname", ["status"])), "ASinteger")), 7)))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["filial"])), "ASinteger")), 0)))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_batchs_deletetrans", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger"))]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_Batchs_ReturnChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_beneficiary_ReturnStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Refresh", []);
    return L0.result;
  }
  if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["status"])), "ASinteger")), 7)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "xs_beneficiary")), "fieldbyname", ["status"])), "ASinteger")), 7)))), async () => ($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["filial"])), "ASinteger")), 0)))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_Batchs_ReturnChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "AsInteger")), 1]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_beneficiary_ReturnStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "AsInteger")), 1]])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Refresh", []);
    return L0.result;
  }
  if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["status"])), "ASinteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "xs_beneficiary")), "fieldbyname", ["status"])), "ASinteger")), 1)))), async () => ($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["filial"])), "ASinteger")), 0)))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_batchs_deletetrans", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger"))]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_Batchs_ReturnChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_beneficiary_ReturnStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Refresh", []);
    return L0.result;
  }
  if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["status"])), "ASinteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "xs_beneficiary")), "fieldbyname", ["status"])), "ASinteger")), 1)))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["filial"])), "ASinteger")), 0)))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_batchs_deletetrans", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger"))]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_Batchs_ReturnChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_beneficiary_ReturnStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Refresh", []);
    return L0.result;
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["status"])), "ASinteger")), 5)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "xs_beneficiary")), "fieldbyname", ["status"])), "ASinteger")), 5)))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_Batchs_ReturnChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 1]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallProcedure", ["xs_beneficiary_ReturnStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 1]])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BENEFICIARY")), "Refresh", []);
    return L0.result;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "ToolButton6Click", async function ToolButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "bas": 0, "son": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["bas"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "StDate")), "DateTime"))]));
  L0["son"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "EndDate")), "DateTime"))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "FormWitch")), "OracleDataSet1")), "SetVariable", ["BeginDate", L0["bas"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "FormWitch")), "OracleDataSet1")), "SetVariable", ["EndDate", L0["son"]])));
  await $.mcall((await $.mv((await $.v(C, "FormWitch")), "OracleDataSet1")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "FormWitch")), "OracleDataSet2")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "FormWitch")), "OracleDataSet1")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "FormWitch")), "OracleDataSet2")), "Refresh", []);
  await $.mcall((await $.v(C, "FormWitch")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "N25Click", async function N25Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "krno_": '', "inn_": '', "kod_b_": '', "dow_i": 0, "dow_s": '', "tdate": 0, "tcode": 0, "tnameid": 0, "treference": '', "tfilial": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "RecordCount")), 0))) {
    {
      const $t117 = (await $.mv((await $.v(C, "DataMod")), "ODS_Report"));
      await $.stmt($.wcall([$t117], "Close", [], C));
      await $.mcall((await $.wv([$t117], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t117], "SQL", C, false)), "Add", [$.add("select * from xs_incomingView a where TYPECODE=", (await $.wcall([$t117], "inttostr", [(await $.mv((await $.idx((await $.mv((await $.wv([$t117], "GridIncoming", C, false)), "Fields")), [14])), "asinteger"))], C)))])));
      await $.stmt($.wcall([$t117], "Open", [], C));
    }
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRDBText4")), "DataSet", (await $.mv((await $.v(C, "DataMod")), "ODS_Report")));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRDBText4")), "DataField", "AMOUNT");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRDBText18")), "DataSet", (await $.mv((await $.v(C, "DataMod")), "ODS_Report")));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRDBText18")), "DataField", "AMOUNT");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRL_57A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRL_57A_1")), "Caption", $.add("/C/0", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["REC_BANK_SUBACC"])), "AsString"))));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRL_57A_2")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRL_57A_2")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["REC_BANK_BIK"])), "AsString")));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("select * from filialinfo where KOD_FIL = '", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "fieldbyname", ["Main_FILIAL"])), "AsString"))), "'")])));
    L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["KRNO"])), "AsString"));
    L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["INN"])), "AsString"));
    L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["KOD_B"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRL_59")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRL_59")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "XXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "XXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["SELECT nb_swift FROM xs_config"])));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRLabel8")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRLabel8")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["nb_swift"])), "AsString")));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("SELECT * FROM xs_transtype_code where CODE = '", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "fieldbyname", ["TYPECODE"])), "AsString"))), "'")])));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRL_77")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRL_77")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["NAME"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRLabel44")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRLabel44")), "Caption", $.add("/BNF/", (await $.call(C, "IntToStr", [(await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "RecordCount"))]))));
    await $.mcall((await $.v(C, "ReportinX")), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "MenuItem15Click", async function MenuItem15Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "krno_": '', "inn_": '', "kod_b_": '', "dow_s": '', "dow_i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ReportX", (await $.mcall((await $.v(C, "TReportX")), "Create", [Self])));
  {
    const $t118 = (await $.v(C, "ReportX"));
    await $.mset((await $.wv([$t118], "QRDBText1", C, false)), "DataSet", (await $.mv((await $.wv([$t118], "DataMod", C, false)), "XS_BeneficiaryArchive")));
    await $.mset((await $.wv([$t118], "QRDBText1", C, false)), "DataSet", (await $.mv((await $.wv([$t118], "DataMod", C, false)), "XS_BatchsArchive")));
    await $.mset((await $.wv([$t118], "QRDBText2", C, false)), "DataSet", (await $.mv((await $.wv([$t118], "DataMod", C, false)), "XS_BatchsArchive")));
    await $.mset((await $.wv([$t118], "QRDBText5", C, false)), "DataSet", (await $.mv((await $.wv([$t118], "DataMod", C, false)), "XS_BatchsArchive")));
    await $.mset((await $.wv([$t118], "QRDBText6", C, false)), "DataSet", (await $.mv((await $.wv([$t118], "DataMod", C, false)), "XS_BatchsArchive")));
    await $.mset((await $.wv([$t118], "QRDBText8", C, false)), "DataSet", (await $.mv((await $.wv([$t118], "DataMod", C, false)), "XS_BatchsArchive")));
    await $.mset((await $.wv([$t118], "QRDBText18", C, false)), "DataSet", (await $.mv((await $.wv([$t118], "DataMod", C, false)), "XS_BatchsArchive")));
  }
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BeneficiaryArchive")), "RecordCount")), 0))) {
    {
      const $t119 = (await $.mv((await $.v(C, "DataMod")), "ODS_Report"));
      await $.stmt($.wcall([$t119], "Close", [], C));
      await $.mcall((await $.wv([$t119], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t119], "SQL", C, false)), "Add", [$.add($.add($.add($.add($.add($.add($.add("select a.id, a.batchid, a.rec_bank_id, a.rec_bank_sub_acc,a.client_acc_no, a.client_name,", "a.client_code, a.client_inn,a.remit_inf, a.trans_cod, a.add_inf, a.val_date, a.val_cod,"), "a.mess_reference, a.amount, a.bnfcount, a.status,a.transaction_id, a.userid, bm.swift ,bm.bankcode||'/'||bm.inn as ab,'0'||bm.krno as kr from xs_beneficiary_archive a,"), "xs_batchs_archive b,bankm bm where a.rec_bank_id = bm.id and a.batchid="), (await $.wcall([$t119], "inttostr", [(await $.mv((await $.idx((await $.mv((await $.wv([$t119], "DBGridOUTArchBatchs", C, false)), "Fields")), [0])), "asinteger"))], C))), " group by a.id, a.batchid,a.rec_bank_id, a.rec_bank_sub_acc,a.client_acc_no, a.client_name,a.client_code,"), "a.client_inn,a.remit_inf, a.trans_cod, a.add_inf, a.val_date, a.val_cod,a.mess_reference, a.amount,"), "a.bnfcount,a.status,a.transaction_id, a.userid,bm.swift,bm.krno,bm.inn,bm.bankcode order by a.batchid")])));
      await $.stmt($.wcall([$t119], "Open", [], C));
    }
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select account from xs_config"])));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_52A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_52A_1")), "Caption", $.add("/D/", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["account"])), "AsString"))));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select swift from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_52A_2")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_52A_2")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["swift"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_57A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_57A_1")), "Caption", $.add("/C/0", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["REC_BANK_SUB_ACC"])), "AsString"))));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select kod_b,krno,inn,swift from bankinfo"])));
    L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["KRNO"])), "AsString"));
    L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["INN"])), "AsString"));
    L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["KOD_B"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_50K")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_50K")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    if ($.truthy((await $.and_(($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BatchsArchive")), "FieldByName", ["filial"])), "AsInteger")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BatchsArchive")), "FieldByName", ["filial"])), "AsInteger")), (await $.v(C, "null")))))))) {
      await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("Select kod_b,inn from Filialinfo where kod_fil='", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BatchsArchive")), "FieldByName", ["filial"])), "AsString"))), "'")])));
      L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["inn"])), "AsString"));
      L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["kod_B"])), "AsString"));
      await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_50K")), "Caption", "");
      await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_50K")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    }
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "AXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "AXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["SELECT nb_swift FROM xs_config"])));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel8")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel8")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["nb_swift"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel44")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel44")), "Caption", $.add("/BNF/", (await $.call(C, "IntToStr", [(await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_BeneficiaryArchive")), "RecordCount"))]))));
    await $.mcall((await $.mv((await $.v(C, "ReportX")), "QuickRep1")), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "SelectDateIncoming", async function SelectDateIncoming(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "dtst": 0, "dtend": 0};
  L0["dtst"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "StDate_in")), "DateTime"))]));
  L0["dtend"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "EndDate_in")), "DateTime"))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "datamod")), "XS_IncomingView")), "SetVariable", ["BeginDate", L0["dtst"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "datamod")), "XS_IncomingView")), "SetVariable", ["EndDate", L0["dtend"]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TLVPCSSForm", "GridIncomingTitleClick", async function GridIncomingTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  L0["refreshdataincoming"] = $.fn(async function RefreshDataIncoming() {
  const L1 = {result: undefined};
  await $.mcall((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "Refresh", []);
  return L1.result;
});
  L0["xs_incomingorderby"] = $.fn(async function XS_IncomingOrderBy(p0) {
  const L1 = {"ofields": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["ofields"]);
  await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crSQLWait")));
  try {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "SetVariable", ["Title", L1["ofields"]])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "Refresh", []);
  } finally {
    await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L1.result;
});
  L0["changetitlecolor"] = $.fn(async function ChangeTitleColor(p0, p1, p2, p3) {
  const L1 = {"grid": $.copyArg(p0), "chcolumn": $.copyArg(p1), "orderingcolor": $.copyArg(p2), "defaulcolor": $.copyArg(p3), result: undefined, "i": 0};
  await $.fixArgs(L1, ["grid", "chcolumn", "orderingcolor", "defaulcolor"]);
  { const $t120 = $.sub((await $.mv((await $.mv(L1["grid"], "Columns")), "Count")), 1);
    L1["i"] = 0;
    let $t121 = true;
    for (;;) {
      if (!$t121) { L1["i"] = $.succ(L1["i"], 1); }
      $t121 = false;
      if (!($.ord(L1["i"]) <= $.ord($t120))) break;
      await $.mset((await $.mv((await $.idx((await $.mv(L1["grid"], "Columns")), [L1["i"]])), "Title")), "Color", L1["defaulcolor"]);
      await $.tick();
    }
  }
  await $.mset((await $.mv((await $.idx((await $.mv(L1["grid"], "Columns")), [L1["chcolumn"]])), "Title")), "Color", L1["orderingcolor"]);
  return L1.result;
});
  if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "Caption")), "№"))) {
    await $.stmt((await $.callv(L0["xs_incomingorderby"], [" x.id,x.status"])));
  } else {
    if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "Caption")), ""))) {
      await $.stmt((await $.callv(L0["xs_incomingorderby"], [" x.status"])));
    } else {
      if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "Caption")), "Debet məbləğ"))) {
        await $.stmt((await $.callv(L0["xs_incomingorderby"], [" x.AMOUNT,x.status"])));
      } else {
        if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "Caption")), "Tarix"))) {
          await $.stmt((await $.callv(L0["xs_incomingorderby"], [" x.TRANS_DATE,x.status"])));
        } else {
          return L0.result;
        }
      }
    }
  }
  await $.stmt((await $.callv(L0["changetitlecolor"], [(await $.v(C, "GridIncoming")), (await $.mv(L0["column"], "Index")), (await $.v(C, "clMaroon")), 8404992])));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TLVPCSSForm", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": 0, "f": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")), "")), async () => ((await $.mv((await $.v(C, "CheckBox1")), "Checked"))))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Secim et"])));
    await $.mset((await $.v(C, "CheckBox1")), "Checked", false);
  } else {
    if ($.truthy((await $.and_((await $.mv((await $.v(C, "CheckBox1")), "Checked")), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")), "")))))) {
      {
        const $t122 = (await $.v(C, "DataMod"));
        const $t123 = (await $.wv([$t122], "XS_IncomingView", C, false));
        await $.wset([$t122, $t123], "filtered", (await $.wv([$t122, $t123], "false", C, false)), C);
        await $.wset([$t122, $t123], "filter", $.add("TYPECODE=", (await $.wcall([$t122, $t123], "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t122, $t123], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["code"])), "AsInteger"))], C))), C);
        await $.wset([$t122, $t123], "Filtered", (await $.wv([$t122, $t123], "true", C, false)), C);
      }
    } else {
      if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox1")), "Checked")), false))) {
        {
          const $t124 = (await $.v(C, "DataMod"));
          const $t125 = (await $.wv([$t124], "XS_IncomingView", C, false));
          await $.wset([$t124, $t125], "filtered", (await $.wv([$t124, $t125], "false", C, false)), C);
          await $.wset([$t124, $t125], "filter", "", C);
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "ToolButton41Click", async function ToolButton41Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "begdate": 0, "enddate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["begdate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "INCBDATE")), "DateTime"))]));
  L0["enddate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "INCEDATE")), "DateTime"))]));
  {
    const $t126 = (await $.mv((await $.v(C, "DataMod")), "XS_INCOMING"));
    await $.stmt($.wcall([$t126], "Close", [], C));
    await $.wset([$t126], "Filtered", (await $.wv([$t126], "false", C, false)), C);
    await $.wset([$t126], "Filter", "", C);
    await $.mset((await $.wv([$t126], "CheckBox2", C, false)), "Checked", (await $.wv([$t126], "false", C, false)));
    await $.mset((await $.wv([$t126], "CheckBox3", C, false)), "Checked", (await $.wv([$t126], "false", C, false)));
    await $.stmt((await $.wcall([$t126], "SetVariable", ["BeginDate", (await $.wv([$t126], "BegDate", { get: async () => L0["begdate"], set: async (v) => { L0["begdate"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t126], "SetVariable", ["EndDate", (await $.wv([$t126], "EndDate", { get: async () => L0["enddate"], set: async (v) => { L0["enddate"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t126], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "ToolButton18Click", async function ToolButton18Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.mv((await $.v(C, "Panel38")), "Visible")))))) {
    await $.mset((await $.v(C, "Panel38")), "Visible", true);
    await $.mset((await $.mv((await $.v(C, "DataMod")), "Data_Admin_in")), "Active", true);
    await $.mset((await $.mv((await $.v(C, "DataMod")), "Data_Code")), "Active", true);
  } else {
    await $.mset((await $.v(C, "Panel38")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Panel38")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(((await $.mv((await $.v(C, "CheckBox2")), "Checked"))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "keyvalue")), (-(1)))))))) {
    if ($.truthy($.not(((await $.and_(((await $.mv((await $.v(C, "CheckBox3")), "Checked"))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "keyvalue")), (-(1)))))))))) {
      {
        const $t127 = (await $.v(C, "DataMod"));
        const $t128 = (await $.wv([$t127], "XS_INCOMING", C, false));
        await $.wset([$t127, $t128], "Filtered", (await $.wv([$t127, $t128], "false", C, false)), C);
        await $.wset([$t127, $t128], "Filter", $.add("filial=", (await $.wcall([$t127, $t128], "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t127, $t128], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "FieldByName", ["FILIAL_ID"])), "Asinteger"))], C))), C);
        await $.wset([$t127, $t128], "Filtered", (await $.wv([$t127, $t128], "true", C, false)), C);
      }
    }
  }
  if ($.truthy((await $.and_(((await $.mv((await $.v(C, "CheckBox3")), "Checked"))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "keyvalue")), (-(1)))))))) {
    if ($.truthy($.not(((await $.and_(((await $.mv((await $.v(C, "CheckBox2")), "Checked"))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "keyvalue")), (-(1)))))))))) {
      {
        const $t129 = (await $.v(C, "DataMod"));
        const $t130 = (await $.wv([$t129], "XS_INCOMING", C, false));
        await $.wset([$t129, $t130], "Filtered", (await $.wv([$t129, $t130], "false", C, false)), C);
        await $.wset([$t129, $t130], "Filter", $.add("TYPECODE=", (await $.wcall([$t129, $t130], "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t129, $t130], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "FieldByName", ["code"])), "Asinteger"))], C))), C);
        await $.wset([$t129, $t130], "Filtered", (await $.wv([$t129, $t130], "true", C, false)), C);
      }
    }
  }
  if ($.truthy((await $.and_(((await $.mv((await $.v(C, "CheckBox2")), "Checked"))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "keyvalue")), (-(1)))))))) {
    if ($.truthy((await $.and_(((await $.mv((await $.v(C, "CheckBox3")), "Checked"))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "keyvalue")), (-(1)))))))) {
      {
        const $t131 = (await $.v(C, "DataMod"));
        const $t132 = (await $.wv([$t131], "XS_INCOMING", C, false));
        await $.wset([$t131, $t132], "Filtered", (await $.wv([$t131, $t132], "false", C, false)), C);
        await $.wset([$t131, $t132], "Filter", $.add($.add($.add($.add($.add("(filial=", (await $.wcall([$t131, $t132], "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t131, $t132], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "FieldByName", ["FILIAL_ID"])), "Asinteger"))], C))), ")"), "and (TYPECODE="), (await $.wcall([$t131, $t132], "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t131, $t132], "DBLookupComboBox3", C, false)), "ListSource")), "DataSet")), "FieldByName", ["code"])), "Asinteger"))], C))), ")"), C);
        await $.wset([$t131, $t132], "Filtered", (await $.wv([$t131, $t132], "true", C, false)), C);
      }
    }
  }
  if ($.truthy($.not(((await $.and_(((await $.mv((await $.v(C, "CheckBox2")), "Checked"))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "keyvalue")), (-(1)))))))))) {
    if ($.truthy($.not(((await $.and_(((await $.mv((await $.v(C, "CheckBox3")), "Checked"))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "keyvalue")), (-(1)))))))))) {
      {
        const $t133 = (await $.v(C, "DataMod"));
        const $t134 = (await $.wv([$t133], "XS_INCOMING", C, false));
        await $.wset([$t133, $t134], "Filtered", (await $.wv([$t133, $t134], "false", C, false)), C);
        await $.wset([$t133, $t134], "Filter", "", C);
        await $.wset([$t133, $t134], "Filtered", (await $.wv([$t133, $t134], "true", C, false)), C);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "N24Click", async function N24Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "krno_": '', "inn_": '', "kod_b_": '', "dow_i": 0, "dow_s": '', "tdate": 0, "tcode": 0, "tnameid": 0, "treference": '', "tfilial": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod")), "xs_incoming")), "RecordCount")), 0))) {
    {
      const $t135 = (await $.mv((await $.v(C, "DataMod")), "ODS_Report"));
      await $.stmt($.wcall([$t135], "Close", [], C));
      await $.mcall((await $.wv([$t135], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t135], "SQL", C, false)), "Add", [$.add("select * from xs_incomingviewall where id=", (await $.wcall([$t135], "inttostr", [(await $.mv((await $.idx((await $.mv((await $.wv([$t135], "GridIncomingArchive", C, false)), "Fields")), [0])), "asinteger"))], C)))])));
      await $.stmt($.wcall([$t135], "Open", [], C));
    }
    L0["tcode"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "fieldbyname", ["TYPECODE"])), "AsInteger"));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_CODEID")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_CODEID")), "SetVariable", ["t_code", L0["tcode"]])));
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_CODEID")), "open", []);
    L0["tnameid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_CODEID")), "fieldbyname", ["NAMEID"])), "AsInteger"));
    await $.set(C, "Form_Report_in", (await $.mcall((await $.v(C, "TForm_Report_in")), "create", [Self])));
    if ($.truthy($.eq(L0["tnameid"], 1))) {
      L0["tdate"] = (await $.call(C, "trunc", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "fieldbyname", ["TRANS_date"])), "AsDateTime"))]));
      L0["treference"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "fieldbyname", ["REFERENCE"])), "AsString"));
      L0["tfilial"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "fieldbyname", ["FILIAL"])), "AsInteger"));
      await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataSum")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataSum")), "SetVariable", ["t_date", L0["tdate"]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataSum")), "SetVariable", ["t_code", L0["tcode"]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataSum")), "SetVariable", ["t_REFERENCE", L0["treference"]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataSum")), "SetVariable", ["T_filial", L0["tfilial"]])));
      await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataSum")), "Open", []);
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText4")), "DataSet", (await $.mv((await $.v(C, "DataMod")), "DataSum")));
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText4")), "DataField", "Sumammount");
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText18")), "DataSet", (await $.mv((await $.v(C, "DataMod")), "DataSum")));
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText18")), "DataField", "Sumammount");
    } else {
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText4")), "DataSet", (await $.mv((await $.v(C, "DataMod")), "ODS_Report")));
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText4")), "DataField", "AMOUNT");
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText18")), "DataSet", (await $.mv((await $.v(C, "DataMod")), "ODS_Report")));
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText18")), "DataField", "AMOUNT");
    }
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_52A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_52A_1")), "Caption", $.add("/D/0", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["SEN_BANK_SUBACC"])), "AsString"))));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add($.add("Select * from bankm where subkrno='", "0"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "fieldbyname", ["SEN_BANK_SUBACC"])), "AsString"))), "'")])));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_52A_2")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_52A_2")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")));
    L0["dow_s"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["REMIT_INF"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRL_70_70")), "Caption", " ");
    await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRL_70_140")), "Caption", " ");
    await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRL_70_210")), "Caption", " ");
    L0["dow_i"] = 0;
    do {
      L0["dow_i"] = $.add(L0["dow_i"], 70);
      {
        const $t136 = (await $.v(C, "Form_report_in"));
        await $.mset((await $.wcall([$t136], "TQRLabel", [(await $.wcall([$t136], "FindComponent", [$.add("QRL_70_", (await $.wcall([$t136], "IntToStr", [(await $.wv([$t136], "Dow_i", { get: async () => L0["dow_i"], set: async (v) => { L0["dow_i"] = v; }, local: true }, false))], C)))], C))], C)), "Caption", (await $.wcall([$t136], "copy", [(await $.wv([$t136], "Dow_s", { get: async () => L0["dow_s"], set: async (v) => { L0["dow_s"] = v; }, local: true }, false)), $.sub((await $.wv([$t136], "Dow_i", { get: async () => L0["dow_i"], set: async (v) => { L0["dow_i"] = v; }, local: true }, false)), 69), 70], C)));
      }
      await $.tick();
    } while (!$.truthy($.gt(L0["dow_i"], (await $.call(C, "length", [L0["dow_s"]])))));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_57A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_57A_1")), "Caption", $.add("/C/0", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["REC_BANK_SUBACC"])), "AsString"))));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_57A_2")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_57A_2")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["REC_BANK_BIK"])), "AsString")));
    L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["SEN_BANK_KRNO"])), "AsString"));
    L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["SEN_BANK_INN"])), "AsString"));
    L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["SEN_BANK_CODE"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_50K")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_50K")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("select * from filialinfo where KOD_FIL = '", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "fieldbyname", ["MAIN_FILIAL"])), "AsString"))), "'")])));
    L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["KRNO"])), "AsString"));
    L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["INN"])), "AsString"));
    L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["KOD_B"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_59")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_59")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "XXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "XXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["SELECT nb_swift FROM xs_config"])));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel8")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel8")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["nb_swift"])), "AsString")));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("SELECT * FROM xs_transtype_code where CODE = '", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "fieldbyname", ["TYPECODE"])), "AsString"))), "'")])));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_77")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_77")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["NAME"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel44")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel44")), "Caption", $.add("/BNF/", (await $.call(C, "IntToStr", [(await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "RecordCount"))]))));
    await $.mcall((await $.mv((await $.v(C, "Form_report_in")), "QuickRep1")), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLVPCSSForm", "N26Click", async function N26Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "krno_": '', "inn_": '', "kod_b_": '', "dow_i": 0, "dow_s": '', "tdate": 0, "tcode": 0, "tnameid": 0, "treference": '', "tfilial": 0, "bdate": '', "edate": '', "vfilial": 0, "sql1": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["bdate"] = (await $.call(C, "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.v(C, "INCBDATE")), "DateTime"))]));
  L0["edate"] = (await $.call(C, "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.v(C, "INCEDATE")), "DateTime"))]));
  if ($.truthy((await $.mv((await $.v(C, "CheckBox2")), "Checked")))) {
    L0["sql1"] = $.add("and filial=", (await $.call(C, "inttostr", [(await $.mv((await $.idx((await $.mv((await $.v(C, "GridIncomingArchive")), "Fields")), [13])), "asinteger"))])));
  } else {
    L0["sql1"] = "";
  }
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_Incoming")), "RecordCount")), 0))) {
    {
      const $t137 = (await $.mv((await $.v(C, "DataMod")), "ODS_Report"));
      await $.stmt($.wcall([$t137], "Close", [], C));
      await $.mcall((await $.wv([$t137], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t137], "SQL", C, false)), "Add", [$.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("select  * from xs_incomingViewall a where TYPECODE=", (await $.wcall([$t137], "inttostr", [(await $.mv((await $.idx((await $.mv((await $.wv([$t137], "GridIncomingArchive", C, false)), "Fields")), [14])), "asinteger"))], C))), "   and trans_date>="), "'"), (await $.wv([$t137], "bdate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false))), "'"), " and   trans_date<="), "'"), (await $.wv([$t137], "edate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))), "'"), (await $.wv([$t137], "SQL1", { get: async () => L0["sql1"], set: async (v) => { L0["sql1"] = v; }, local: true }, false)))])));
      await $.stmt($.wcall([$t137], "Open", [], C));
    }
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRDBText4")), "DataSet", (await $.mv((await $.v(C, "DataMod")), "ODS_Report")));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRDBText4")), "DataField", "AMOUNT");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRDBText18")), "DataSet", (await $.mv((await $.v(C, "DataMod")), "ODS_Report")));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRDBText18")), "DataField", "AMOUNT");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRL_57A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRL_57A_1")), "Caption", $.add("/C/0", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["REC_BANK_SUBACC"])), "AsString"))));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRL_57A_2")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRL_57A_2")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "FieldByName", ["REC_BANK_BIK"])), "AsString")));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("select * from filialinfo where KOD_FIL = '", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "fieldbyname", ["MAIN_FILIAL"])), "AsString"))), "'")])));
    L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["KRNO"])), "AsString"));
    L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["INN"])), "AsString"));
    L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["KOD_B"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRL_59")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRL_59")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "XXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "XXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["SELECT nb_swift FROM xs_config"])));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRLabel8")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRLabel8")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["nb_swift"])), "AsString")));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("SELECT * FROM xs_transtype_code where CODE = '", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report")), "fieldbyname", ["TYPECODE"])), "AsString"))), "'")])));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRL_77")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRL_77")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "ODS_Report_Temp")), "FieldByName", ["NAME"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRLabel44")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRLabel44")), "Caption", $.add("/BNF/", (await $.call(C, "IntToStr", [(await $.mv((await $.mv((await $.v(C, "DataMod")), "XS_IncomingView")), "RecordCount"))]))));
    await $.mcall((await $.v(C, "ReportinX")), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
