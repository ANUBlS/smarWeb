// Generated from MainXhoksFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("MainXhoksFormImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ComCtrls", "ExtCtrls", "DBCtrls", "Grids", "DBGrids", "Mask", "ToolWin", "ActnList", "Menus", "ImgList", "Db", "OracleData", "sboapiDataModuleImpl", "XFSCtrls", "XDBGrids", "XohksMain", "DataXohks", "XohksPayment_Det", "TransType_Unit", "AcceptTrans_Unit", "ReceiveMessDetalsUnit", "Get_to_shablonunit", "Witch", "Unit_ReportX", "Unit_Report", "Qrctrls", "Unit_Report_in", "Unit_ReportinX"]);
  const C = [U];
  U.defClass("TMainXohksForm", "TForm", {"opendialogin": {"name": "OpenDialogIn", "type": "TOpenDialog"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "imagelistfilial": {"name": "ImageListFilial", "type": "TImageList"}, "popupmt102": {"name": "PopupMT102", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n15": {"name": "N15", "type": "TMenuItem"}, "n19": {"name": "N19", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n18": {"name": "N18", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n23": {"name": "N23", "type": "TMenuItem"}, "popupmessout": {"name": "PopupMessOut", "type": "TPopupMenu"}, "menuitem1": {"name": "MenuItem1", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "menuitem2": {"name": "MenuItem2", "type": "TMenuItem"}, "menuitem4": {"name": "MenuItem4", "type": "TMenuItem"}, "n12": {"name": "N12", "type": "TMenuItem"}, "n10": {"name": "N10", "type": "TMenuItem"}, "n11": {"name": "N11", "type": "TMenuItem"}, "n16": {"name": "N16", "type": "TMenuItem"}, "n9": {"name": "N9", "type": "TMenuItem"}, "n21": {"name": "N21", "type": "TMenuItem"}, "popupmessin": {"name": "PopupMessIn", "type": "TPopupMenu"}, "menuitem5": {"name": "MenuItem5", "type": "TMenuItem"}, "n13": {"name": "N13", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n17": {"name": "N17", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "n22": {"name": "N22", "type": "TMenuItem"}, "infopopup": {"name": "InfoPopup", "type": "TPopupMenu"}, "clear1": {"name": "Clear1", "type": "TMenuItem"}, "popup_singleconvert": {"name": "Popup_SingleConvert", "type": "TPopupMenu"}, "convert1": {"name": "Convert1", "type": "TMenuItem"}, "convertall1": {"name": "ConvertAll1", "type": "TMenuItem"}, "n14": {"name": "N14", "type": "TMenuItem"}, "sendtoarchive2": {"name": "Sendtoarchive2", "type": "TMenuItem"}, "sendtoarchive1": {"name": "SendToArchive1", "type": "TMenuItem"}, "n20": {"name": "N20", "type": "TMenuItem"}, "clearselected1": {"name": "ClearSelected1", "type": "TMenuItem"}, "clearlist1": {"name": "ClearList1", "type": "TMenuItem"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n24": {"name": "N24", "type": "TMenuItem"}, "n26": {"name": "N26", "type": "TMenuItem"}, "popmenuarc": {"name": "PopMenuArc", "type": "TPopupMenu"}, "menuitem15": {"name": "MenuItem15", "type": "TMenuItem"}, "popmenuarchprint": {"name": "PopMenuArchPrint", "type": "TPopupMenu"}, "print1": {"name": "Print1", "type": "TMenuItem"}, "popupmenuconvert": {"name": "PopupMenuConvert", "type": "TPopupMenu"}, "convertconfirme": {"name": "ConvertConfirme", "type": "TMenuItem"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "mainpagecontrol": {"name": "MainPageControl", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "panelbeneficary": {"name": "PanelBeneficary", "type": "TPanel"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "messacceptbutton": {"name": "MessAcceptButton", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "panel27": {"name": "Panel27", "type": "TPanel"}, "panel26": {"name": "Panel26", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "controlbar1": {"name": "ControlBar1", "type": "TControlBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "acceptbutton": {"name": "AcceptButton", "type": "TToolButton"}, "panel22": {"name": "Panel22", "type": "TPanel"}, "stdate": {"name": "StDate", "type": "TDateTimePicker"}, "enddate": {"name": "EndDate", "type": "TDateTimePicker"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "panel24": {"name": "Panel24", "type": "TPanel"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "toolbar3": {"name": "ToolBar3", "type": "TToolBar"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "buttonmessinrefresh": {"name": "ButtonMessInRefresh", "type": "TToolButton"}, "buttonmessineedit": {"name": "ButtonMessIneEdit", "type": "TToolButton"}, "buttonmessinaccept": {"name": "ButtonMessInAccept", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "stdate_in": {"name": "StDate_in", "type": "TDateTimePicker"}, "enddate_in": {"name": "EndDate_in", "type": "TDateTimePicker"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "panel_info": {"name": "Panel_info", "type": "TPanel"}, "info_listbox": {"name": "Info_ListBox", "type": "TListBox"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "splitter2": {"name": "Splitter2", "type": "TSplitter"}, "filelistincoming": {"name": "FileListIncoming", "type": "TListBox"}, "richedit1": {"name": "RichEdit1", "type": "TRichEdit"}, "gridincoming": {"name": "GridIncoming", "type": "TDBGrid"}, "pgoutarchive": {"name": "PgOutArchive", "type": "TTabSheet"}, "toolbar4": {"name": "ToolBar4", "type": "TToolBar"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "toolbutton19": {"name": "ToolButton19", "type": "TToolButton"}, "toolbutton22": {"name": "ToolButton22", "type": "TToolButton"}, "toolbutton26": {"name": "ToolButton26", "type": "TToolButton"}, "toolbutton27": {"name": "ToolButton27", "type": "TToolButton"}, "toolbutton28": {"name": "ToolButton28", "type": "TToolButton"}, "toolbutton29": {"name": "ToolButton29", "type": "TToolButton"}, "toolbutton30": {"name": "ToolButton30", "type": "TToolButton"}, "toolbutton31": {"name": "ToolButton31", "type": "TToolButton"}, "dtpickoutarchbeg": {"name": "DTPickOutArchBeg", "type": "TDateTimePicker"}, "dtpickoutarchend": {"name": "DTPickOutArchEnd", "type": "TDateTimePicker"}, "toolbutton32": {"name": "ToolButton32", "type": "TToolButton"}, "panel28": {"name": "Panel28", "type": "TPanel"}, "panel29": {"name": "Panel29", "type": "TPanel"}, "panel30": {"name": "Panel30", "type": "TPanel"}, "panel31": {"name": "Panel31", "type": "TPanel"}, "panel32": {"name": "Panel32", "type": "TPanel"}, "controlbar5": {"name": "ControlBar5", "type": "TControlBar"}, "toolbar5": {"name": "ToolBar5", "type": "TToolBar"}, "toolbutton33": {"name": "ToolButton33", "type": "TToolButton"}, "panel33": {"name": "Panel33", "type": "TPanel"}, "panel35": {"name": "Panel35", "type": "TPanel"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "toolbutton18": {"name": "ToolButton18", "type": "TToolButton"}, "incbdate": {"name": "INCBDATE", "type": "TDateTimePicker"}, "panel37": {"name": "Panel37", "type": "TPanel"}, "panel38": {"name": "Panel38", "type": "TXFPanel"}, "xfcheckbox1": {"name": "XFCheckBox1", "type": "TXFCheckBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit19": {"name": "DBEdit19", "type": "TDBEdit"}, "label4": {"name": "Label4", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbedit20": {"name": "DBEdit20", "type": "TDBEdit"}, "dbedit22": {"name": "DBEdit22", "type": "TDBEdit"}, "dbedit21": {"name": "DBEdit21", "type": "TDBEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "dbedit23": {"name": "DBEdit23", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "dbedit24": {"name": "DBEdit24", "type": "TDBEdit"}, "dbedit25": {"name": "DBEdit25", "type": "TDBEdit"}, "dbedit26": {"name": "DBEdit26", "type": "TDBEdit"}, "dbedit27": {"name": "DBEdit27", "type": "TDBEdit"}, "dbedit28": {"name": "DBEdit28", "type": "TDBEdit"}, "dbedit29": {"name": "DBEdit29", "type": "TDBEdit"}, "dbedit30": {"name": "DBEdit30", "type": "TDBEdit"}, "dbedit31": {"name": "DBEdit31", "type": "TDBEdit"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbedit34": {"name": "DBEdit34", "type": "TDBEdit"}, "label8": {"name": "Label8", "type": "TLabel"}, "dbedit33": {"name": "DBEdit33", "type": "TDBEdit"}, "dbedit32": {"name": "DBEdit32", "type": "TDBEdit"}, "panel34": {"name": "Panel34", "type": "TPanel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "dbedit35": {"name": "DBEdit35", "type": "TDBEdit"}, "dbedit36": {"name": "DBEdit36", "type": "TDBEdit"}, "dbedit37": {"name": "DBEdit37", "type": "TDBEdit"}, "dbedit38": {"name": "DBEdit38", "type": "TDBEdit"}, "dbedit39": {"name": "DBEdit39", "type": "TDBEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel43": {"name": "Panel43", "type": "TPanel"}, "dbedit40": {"name": "DBEdit40", "type": "TDBEdit"}, "panel44": {"name": "Panel44", "type": "TPanel"}, "dbedit41": {"name": "DBEdit41", "type": "TDBEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "panel45": {"name": "Panel45", "type": "TPanel"}, "dbedit42": {"name": "DBEdit42", "type": "TDBEdit"}, "panel46": {"name": "Panel46", "type": "TPanel"}, "dbedit43": {"name": "DBEdit43", "type": "TDBEdit"}, "panel47": {"name": "Panel47", "type": "TPanel"}, "dbedit44": {"name": "DBEdit44", "type": "TDBEdit"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "panel48": {"name": "Panel48", "type": "TPanel"}, "dbedit45": {"name": "DBEdit45", "type": "TDBEdit"}, "panel49": {"name": "Panel49", "type": "TPanel"}, "dbedit46": {"name": "DBEdit46", "type": "TDBEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "panel50": {"name": "Panel50", "type": "TPanel"}, "dbedit47": {"name": "DBEdit47", "type": "TDBEdit"}, "panel51": {"name": "Panel51", "type": "TPanel"}, "dbedit48": {"name": "DBEdit48", "type": "TDBEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEdit"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "panel21": {"name": "Panel21", "type": "TPanel"}, "dbedit15": {"name": "DBEdit15", "type": "TDBEdit"}, "panel23": {"name": "Panel23", "type": "TPanel"}, "dbedit16": {"name": "DBEdit16", "type": "TDBEdit"}, "panel39": {"name": "Panel39", "type": "TPanel"}, "dbedit18": {"name": "DBEdit18", "type": "TDBEdit"}, "panel40": {"name": "Panel40", "type": "TPanel"}, "panel41": {"name": "Panel41", "type": "TPanel"}, "dbedit17": {"name": "DBEdit17", "type": "TDBEdit"}, "panel42": {"name": "Panel42", "type": "TPanel"}, "dbedit14": {"name": "DBEdit14", "type": "TDBEdit"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "dbedit13": {"name": "DBEdit13", "type": "TDBEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "splitter1": {"name": "Splitter1", "type": "TSplitter"}, "panel52": {"name": "Panel52", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "xfcheckbox2": {"name": "XFCheckBox2", "type": "TXFCheckBox"}, "xfgroupbox4": {"name": "XFGroupBox4", "type": "TXFGroupBox"}, "xfcheckbox3": {"name": "XFCheckBox3", "type": "TXFCheckBox"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "xfbitbtn2": {"name": "XFBitBtn2", "type": "TXFBitBtn"}, "gridincomingarchive": {"name": "GridIncomingArchive", "type": "TDBGrid"}, "gridbatchs": {"name": "GridBatchs", "type": "TDBGrid"}, "gridbeneficiary": {"name": "GridBeneficiary", "type": "TDBGrid"}, "dbgridoutarchbatchs": {"name": "DBGridOUTArchBatchs", "type": "TDBGrid"}, "dbgridoutarchbeneficiary": {"name": "DBGridOUTArchBeneficiary", "type": "TDBGrid"}, "incedate": {"name": "INCEDATE", "type": "TDateTimePicker"}, "mainaction": {"name": "MainAction", "type": "TActionList"}, "mt102insert": {"name": "Mt102Insert", "type": "TAction"}, "mt102delete": {"name": "MT102Delete", "type": "TAction"}, "mt102refresh": {"name": "Mt102Refresh", "type": "TAction"}, "mt102accept": {"name": "Mt102Accept", "type": "TAction"}, "messagesoutadd": {"name": "MessagesOutAdd", "type": "TAction"}, "messagesoutedit": {"name": "MessagesOutEdit", "type": "TAction"}, "messoutdelete": {"name": "MessOutDelete", "type": "TAction"}, "messagesoutaccept": {"name": "MessagesOutAccept", "type": "TAction"}, "messagesinconvert": {"name": "MessagesInConvert", "type": "TAction"}, "messagesinedit": {"name": "MessagesInEdit", "type": "TAction"}, "messagesinrefresh": {"name": "MessagesInRefresh", "type": "TAction"}, "messindelete": {"name": "MessInDelete", "type": "TAction"}, "messagesinaccept": {"name": "MessagesInAccept", "type": "TAction"}, "messageoutselall": {"name": "MessageOutSelAll", "type": "TAction"}, "messageinselall": {"name": "MessageInSelAll", "type": "TAction"}, "mt102edit": {"name": "Mt102Edit", "type": "TAction"}, "messageinfileload": {"name": "MessageInFileLoad", "type": "TAction"}}, {});
  U.init(async () => {
    U.var_("MainXohksForm", null, "TMainXohksForm");
    U.var_("new_id", 0, "integer");
    U.var_("Batchs_Edit", false, "boolean");
    U.var_("Mess_Edit", false, "boolean");
    U.var_("After_Add", false, "boolean");
    U.var_("Trans_Date", 0, "TDateTime");
    U.var_("AcceptTransForCreated", false, "Boolean");
  });
  U.func("LoadPlugin", async function LoadPlugin(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"pluginname": $.copyArg(p0), "pluginparam": $.copyArg(p1), result: undefined, "pluginhandle": 0, "exportproc": null};
  await $.fixArgs(L0, ["pluginname", "pluginparam"]);
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), L0["pluginname"])]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportproc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], "InitPlugin"]));
    await $.stmt((await $.callv(L0["exportproc"], [L0["pluginparam"]])));
  }
  return L0.result;
}, {"params": ["PluginName", "PluginParam"], "kind": "procedure", "ptypes": ["String", "String"]});
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
  U.method("TMainXohksForm", "ViewBankInfo", async function ViewBankInfo(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"filial": $.copyArg(p0), "afilialid": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["filial", "afilialid"]);
  if ($.truthy(L0["filial"])) {
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "DataCheck")), "Active", false);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "DataCheck")), "SQL")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "DataCheck")), "SQL")), "Add", [$.add($.add("Select * from filialinfo where kod_fil='", (await $.call(C, "IntToStr", [L0["afilialid"]]))), "'")])));
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "DataCheck")), "Active", true);
    await $.mset((await $.mv((await $.v(C, "FormXohks")), "Edit_BankCode")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataCheck")), "fieldbyname", ["KOD_BFIL"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "FormXohks")), "Edit_voen")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataCheck")), "fieldbyname", ["INN_FIL"])), "AsString")));
  } else {
    await $.mset((await $.mv((await $.v(C, "FormXohks")), "Edit_BankCode")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataBankInfo")), "fieldbyname", ["KOD_B"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "FormXohks")), "Edit_voen")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataBankInfo")), "fieldbyname", ["INN"])), "AsString")));
  }
  await $.mset((await $.mv((await $.v(C, "FormXohks")), "Edit_Sender")), "Text", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataBankInfo")), "fieldbyname", ["SWIFT"])), "AsString")), "AXXX"));
  await $.mset((await $.mv((await $.v(C, "FormXohks")), "Edit_BIK")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataBankInfo")), "fieldbyname", ["SWIFT"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "FormXohks")), "Edit_account")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataBankInfo")), "fieldbyname", ["KRNO"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "FormXohks")), "Edit_account_sub")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_CONFIG")), "fieldbyname", ["Account"])), "AsString")));
  return L0.result;
}, {"params": ["filial", "AFilialID"], "kind": "procedure", "ptypes": ["boolean", "Integer"]});
  U.method("TMainXohksForm", "XFBitBtn2Click", async function XFBitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(((await $.mv((await $.v(C, "XFCheckBox2")), "Checked"))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "keyvalue")), (-(1)))))))) {
    if ($.truthy($.not(((await $.and_(((await $.mv((await $.v(C, "XFCheckBox3")), "Checked"))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox4")), "keyvalue")), (-(1)))))))))) {
      {
        const $t1 = (await $.v(C, "DataModXhoks"));
        const $t2 = (await $.wv([$t1], "XS_INCOMING", C, false));
        await $.wset([$t1, $t2], "Filtered", (await $.wv([$t1, $t2], "false", C, false)), C);
        await $.wset([$t1, $t2], "Filter", $.add("filial=", (await $.wcall([$t1, $t2], "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "FieldByName", ["FILIAL_ID"])), "Asinteger"))], C))), C);
        await $.wset([$t1, $t2], "Filtered", (await $.wv([$t1, $t2], "true", C, false)), C);
      }
    }
  }
  if ($.truthy((await $.and_(((await $.mv((await $.v(C, "XFCheckBox3")), "Checked"))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox4")), "keyvalue")), (-(1)))))))) {
    if ($.truthy($.not(((await $.and_(((await $.mv((await $.v(C, "XFCheckBox2")), "Checked"))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "keyvalue")), (-(1)))))))))) {
      {
        const $t3 = (await $.v(C, "DataModXhoks"));
        const $t4 = (await $.wv([$t3], "XS_INCOMING", C, false));
        await $.wset([$t3, $t4], "Filtered", (await $.wv([$t3, $t4], "false", C, false)), C);
        await $.wset([$t3, $t4], "Filter", $.add("TYPECODE=", (await $.wcall([$t3, $t4], "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t3, $t4], "DBLookupComboBox4", C, false)), "ListSource")), "DataSet")), "FieldByName", ["code"])), "Asinteger"))], C))), C);
        await $.wset([$t3, $t4], "Filtered", (await $.wv([$t3, $t4], "true", C, false)), C);
      }
    }
  }
  if ($.truthy((await $.and_(((await $.mv((await $.v(C, "XFCheckBox2")), "Checked"))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "keyvalue")), (-(1)))))))) {
    if ($.truthy((await $.and_(((await $.mv((await $.v(C, "XFCheckBox3")), "Checked"))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox4")), "keyvalue")), (-(1)))))))) {
      {
        const $t5 = (await $.v(C, "DataModXhoks"));
        const $t6 = (await $.wv([$t5], "XS_INCOMING", C, false));
        await $.wset([$t5, $t6], "Filtered", (await $.wv([$t5, $t6], "false", C, false)), C);
        await $.wset([$t5, $t6], "Filter", $.add($.add($.add($.add($.add("(filial=", (await $.wcall([$t5, $t6], "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t5, $t6], "DBLookupComboBox2", C, false)), "ListSource")), "DataSet")), "FieldByName", ["FILIAL_ID"])), "Asinteger"))], C))), ")"), "and (TYPECODE="), (await $.wcall([$t5, $t6], "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t5, $t6], "DBLookupComboBox4", C, false)), "ListSource")), "DataSet")), "FieldByName", ["code"])), "Asinteger"))], C))), ")"), C);
        await $.wset([$t5, $t6], "Filtered", (await $.wv([$t5, $t6], "true", C, false)), C);
      }
    }
  }
  if ($.truthy($.not(((await $.and_(((await $.mv((await $.v(C, "XFCheckBox2")), "Checked"))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "keyvalue")), (-(1)))))))))) {
    if ($.truthy($.not(((await $.and_(((await $.mv((await $.v(C, "XFCheckBox3")), "Checked"))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox4")), "keyvalue")), (-(1)))))))))) {
      {
        const $t7 = (await $.v(C, "DataModXhoks"));
        const $t8 = (await $.wv([$t7], "XS_INCOMING", C, false));
        await $.wset([$t7, $t8], "Filtered", (await $.wv([$t7, $t8], "false", C, false)), C);
        await $.wset([$t7, $t8], "Filter", "", C);
        await $.wset([$t7, $t8], "Filtered", (await $.wv([$t7, $t8], "true", C, false)), C);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "XFCheckBox1Click", async function XFCheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": 0, "f": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")), "")), async () => ((await $.mv((await $.v(C, "XFCheckBox1")), "Checked"))))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Seçim et"])));
    await $.mset((await $.v(C, "XFCheckBox1")), "Checked", false);
  } else {
    if ($.truthy((await $.and_((await $.mv((await $.v(C, "XFCheckBox1")), "Checked")), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")), "")))))) {
      {
        const $t9 = (await $.v(C, "DataModXhoks"));
        const $t10 = (await $.wv([$t9], "XS_IncomingView", C, false));
        await $.wset([$t9, $t10], "filtered", (await $.wv([$t9, $t10], "false", C, false)), C);
        await $.wset([$t9, $t10], "filter", $.add("TYPECODE=", (await $.wcall([$t9, $t10], "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t9, $t10], "DBLookupComboBox1", C, false)), "ListSource")), "DataSet")), "fieldbyname", ["code"])), "AsInteger"))], C))), C);
        await $.wset([$t9, $t10], "Filtered", (await $.wv([$t9, $t10], "true", C, false)), C);
      }
    } else {
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox1")), "Checked")), false))) {
        {
          const $t11 = (await $.v(C, "DataModXhoks"));
          const $t12 = (await $.wv([$t11], "XS_IncomingView", C, false));
          await $.wset([$t11, $t12], "filtered", (await $.wv([$t11, $t12], "false", C, false)), C);
          await $.wset([$t11, $t12], "filter", "", C);
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("createTransCodeTree", async function createTransCodeTree(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "tr": null, "trc": null};
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "TransTypeName")), "Active")), false))) {
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "TransTypeName")), "Active", true);
  }
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "TransTypeName")), "FIRST", []);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "TransTypeCode")), "Active")), false))) {
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "TransTypeCode")), "Active", true);
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "TransCodeForm")), "TreeView1")), "Items")), "Clear", []);
  while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "TransTypeName")), "Eof"))))) {
    L0["tr"] = (await $.mcall((await $.mv((await $.mv((await $.v(C, "TransCodeForm")), "TreeView1")), "Items")), "Add", [(await $.mv((await $.mv((await $.mv((await $.v(C, "TransCodeForm")), "TreeView1")), "Items")), "GetFirstNode")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "TransTypeName")), "fieldbyname", ["NAME"])), "AsString"))]));
    await $.mset(L0["tr"], "ImageIndex", 0);
    await $.mset(L0["tr"], "SelectedIndex", 1);
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "TransTypeCode")), "First", []);
    while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "TransTypeCode")), "EOF"))))) {
      L0["trc"] = (await $.mcall((await $.mv((await $.mv((await $.v(C, "TransCodeForm")), "TreeView1")), "Items")), "AddChild", [L0["tr"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "TransTypeCode")), "fieldbyname", ["Name"])), "AsString"))]));
      await $.mset(L0["trc"], "ImageIndex", 2);
      await $.mset(L0["trc"], "SelectedIndex", 2);
      await $.mset(L0["trc"], "StateIndex", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "TransTypeCode")), "fieldbyname", ["CODE"])), "AsInteger")));
      await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "TransTypeCode")), "NEXT", []);
      await $.tick();
    }
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "TransTypeName")), "Next", []);
    await $.tick();
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TMainXohksForm", "SelectDate", async function SelectDate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "dtst": 0, "dtend": 0};
  L0["dtst"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "StDate")), "DateTime"))]));
  L0["dtend"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "EndDate")), "DateTime"))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "SetVariable", ["BeginDate", L0["dtst"]])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "SetVariable", ["EndDate", L0["dtend"]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TMainXohksForm", "RefreshDataBatchs", async function RefreshDataBatchs(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "SelectDate", []));
  await $.mcall((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "GridBatchs")), "SelectedRows")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "Refresh", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("GetUseDate", async function GetUseDate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_CONFIG")), "FieldByName", ["USEBANKDATE"])), "AsInteger")), 1))) {
    L0["result"] = (await $.call(C, "Trunc", [(await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "GetSysDate")), "CallDateFunction", ["GET_DATE", []]))]));
  } else {
    L0["result"] = (await $.call(C, "Trunc", [(await $.v(C, "Date"))]));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TMainXohksForm", "UpdateFileInList", async function UpdateFileInList(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_CONFIG")), "Refresh", []);
  await $.mcall((await $.v(C, "FileListIncoming")), "Update", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TMainXohksForm", "StrPart", async function StrPart(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "findstr": $.copyArg(p1), "nom": $.copyArg(p2), result: '', "strpos": 0, "i": 0, "tempstr": ''};
  await $.fixArgs(L0, ["s", "findstr", "nom"]);
  if ($.truthy($.eq((await $.call(C, "Length", [L0["s"]])), 0))) {
    L0["result"] = "";
    return L0.result;
  }
  { const $t13 = L0["nom"];
    L0["i"] = 1;
    let $t14 = true;
    for (;;) {
      if (!$t14) { L0["i"] = $.succ(L0["i"], 1); }
      $t14 = false;
      if (!($.ord(L0["i"]) <= $.ord($t13))) break;
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
  U.method("TMainXohksForm", "LoadFileNames", async function LoadFileNames(Self, p0) {
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
    await $.mcall((await $.mv((await $.mv((await $.v(C, "MainXohksForm")), "FileListIncoming")), "Items")), "Clear", []);
    if ($.truthy($.eq((await $.call(C, "FindFirst", ["*.xml", L0["fileattrs"], $.ref(async () => L0["fileinfo"], async ($t15) => { L0["fileinfo"] = $t15; })])), 0))) {
      do {
        if ($.truthy($.eq(((await $.and_((await $.mv(L0["fileinfo"], "Attr")), async () => L0["fileattrs"]))), (await $.mv(L0["fileinfo"], "Attr"))))) {
          await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "MainXohksForm")), "FileListIncoming")), "Items")), "Add", [(await $.mv(L0["fileinfo"], "Name"))])));
        }
        await $.tick();
      } while (!$.truthy($.ne((await $.call(C, "FindNext", [$.ref(async () => L0["fileinfo"], async ($t16) => { L0["fileinfo"] = $t16; })])), 0)));
      await $.stmt((await $.call(C, "FindClose", [$.ref(async () => L0["fileinfo"], async ($t17) => { L0["fileinfo"] = $t17; })])));
    }
  } finally {
    await $.stmt((await $.call(C, "ChDir", [L0["currdir"]])));
  }
  L0["result"] = false;
  return L0.result;
}, {"params": ["Dir"], "kind": "function", "ptypes": ["String"]});
  U.method("TMainXohksForm", "ShowDetals", async function ShowDetals(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "CreateTransCodeTree", []));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_CONFIG")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_CONFIG")), "Open", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "DataAccount")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataAccount")), "Open", []);
  }
  await $.stmt((await $.call(C, "AddtoCOMBO", [(await $.mv((await $.v(C, "FormPayment_Det")), "Combo_BankName")), (await $.mv((await $.v(C, "FormPayment_Det")), "Bank_ID")), (await $.mv((await $.v(C, "DataModXhoks")), "DataBankM")), "Select * from BankM", "ID", "NAME"])));
  await $.stmt((await $.call(C, "AddtoCOMBO", [(await $.mv((await $.v(C, "FormPayment_Det")), "Combo_Valute")), (await $.mv((await $.v(C, "FormPayment_Det")), "Valute_ID")), (await $.mv((await $.v(C, "DataModXhoks")), "DataValute")), "Select * from Avalute", "VALUTE", "VAL_NAME"])));
  await $.set(C, "new_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["id"])), "AsInteger")));
  {
    const $t18 = (await $.v(C, "FormPayment_Det"));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "DataBankInfo")), "Active")), (await $.wv([$t18], "false", C, false))))) {
      await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "DataBankInfo")), "Open", []);
    }
    await $.mset((await $.wv([$t18], "ButtonFinish", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "XFBitBtn4", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "SpeedButton2", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "Combo_BankName", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "XFBitBtn3", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "SearchBankM", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "Edit_Client_acc_no", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "Edit_Client_Name", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "Edit_Client_Code", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "Edit_Client_Voen", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "Edit_tey1", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "Edit_tey2", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "Edit_tey3", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "Edit_tey4", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "Edit_inf1", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "Edit_inf2", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "Edit_inf3", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "XFGroupBox8", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "Edit_Amount", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "SpeedButton1", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "Edit_Referens", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "Edit_BankName_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["BANK"])), "AsString")));
    await $.mset((await $.wv([$t18], "Edit_BIK_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["SWIFT"])), "AsString")));
    await $.mset((await $.wv([$t18], "Edit_BankCode_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["KOD_B"])), "AsString")));
    await $.mset((await $.wv([$t18], "Edit_account_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["KRNO"])), "AsString")));
    await $.mset((await $.wv([$t18], "Edit_Voen_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["INN"])), "AsString")));
    await $.mset((await $.wv([$t18], "Combo_Valute", C, false)), "ItemIndex", (await $.mcall((await $.mv((await $.mv((await $.wv([$t18], "FormPayment_Det", C, false)), "Combo_Valute")), "Items")), "IndexOf", ["AZM"])));
    await $.mset((await $.wv([$t18], "Edit_account_sub_Self", C, false)), "Text", (await $.mv((await $.wv([$t18], "Edit_account_sub", C, false)), "text")));
    await $.mset((await $.wv([$t18], "Combo_BankName", C, false)), "ItemIndex", (await $.mcall((await $.mv((await $.wv([$t18], "Bank_ID", C, false)), "Items")), "IndexOf", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["rec_bank_id"])), "AsString"))])));
    await $.mset((await $.wv([$t18], "Combo_Valute", C, false)), "ItemIndex", (await $.mcall((await $.mv((await $.wv([$t18], "Valute_ID", C, false)), "Items")), "IndexOf", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["val_cod"])), "AsString"))])));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "DataBankM")), "Active")), (await $.wv([$t18], "false", C, false))))) {
      await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "DataBankM")), "Open", []);
    }
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t18], "Combo_BankName", C, false)), "Items")), "IndexOf", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "DataBankM")), "fieldbyname", ["name"])), "AsString"))])));
    await $.stmt((await $.mcall((await $.wv([$t18], "Combo_BankName", C, false)), "OnChange", [Self])));
    await $.mset((await $.wv([$t18], "Edit_Account_Sub", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["REC_BANK_SUB_ACC"])), "AsString")));
    await $.mset((await $.wv([$t18], "Edit_account_sub_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "XS_CONFIG")), "fieldbyname", ["Account"])), "AsString")));
    await $.mset((await $.wv([$t18], "Edit_Referens", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["MESS_REFERENCE"])), "AsString")));
    await $.mset((await $.wv([$t18], "Edit_Amount", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["amount"])), "AsString")));
    await $.mset((await $.wv([$t18], "Edit_TransCode", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["TRANS_COD"])), "AsString")));
    await $.mset((await $.wv([$t18], "Edit_Client_acc_no", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["CLIENT_ACC_NO"])), "AsString")));
    await $.mset((await $.wv([$t18], "Edit_Client_Name", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["CLIENT_NAME"])), "AsString")));
    await $.mset((await $.wv([$t18], "Edit_Client_Code", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["CLIENT_Code"])), "AsString")));
    await $.mset((await $.wv([$t18], "Edit_Client_Voen", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["CLIENT_INN"])), "AsString")));
    await $.mset((await $.wv([$t18], "Edit_tey1", C, false)), "Text", (await $.wcall([$t18], "StrPart", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["REMIT_INF"])), "AsString")), "|", 1], C)));
    await $.mset((await $.wv([$t18], "Edit_tey2", C, false)), "Text", (await $.wcall([$t18], "StrPart", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["REMIT_INF"])), "AsString")), "|", 2], C)));
    await $.mset((await $.wv([$t18], "Edit_tey3", C, false)), "Text", (await $.wcall([$t18], "StrPart", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["REMIT_INF"])), "AsString")), "|", 3], C)));
    await $.mset((await $.wv([$t18], "Edit_tey4", C, false)), "Text", (await $.wcall([$t18], "StrPart", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["REMIT_INF"])), "AsString")), "|", 4], C)));
    await $.mset((await $.wv([$t18], "Edit_inf1", C, false)), "Text", (await $.wcall([$t18], "StrPart", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["ADD_INF"])), "AsString")), "|", 1], C)));
    await $.mset((await $.wv([$t18], "Edit_inf2", C, false)), "Text", (await $.wcall([$t18], "StrPart", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["ADD_INF"])), "AsString")), "|", 2], C)));
    await $.mset((await $.wv([$t18], "Edit_inf3", C, false)), "Text", (await $.wcall([$t18], "StrPart", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModXhoks", C, false)), "XS_BENEFICIARY")), "fieldbyname", ["ADD_INF"])), "AsString")), "|", 3], C)));
  }
  await $.set(C, "mess_edit", true);
  await $.mset((await $.mv((await $.v(C, "FormPayment_Det")), "XFBitBtn4")), "Visible", false);
  await $.mset((await $.mv((await $.v(C, "FormPayment_Det")), "ButtonFinish")), "Enabled", true);
  await $.mset((await $.mv((await $.v(C, "FormPayment_Det")), "XFBitBtn6")), "Enabled", false);
  await $.mset((await $.mv((await $.v(C, "FormPayment_Det")), "ButtonFinish")), "Caption", "Yaddaşa yaz");
  if ($.truthy((await $.or_(((await $.and_(($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "FieldByName", ["status"])), "AsInteger")), 0)), async () => ($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "FieldByName", ["status"])), "AsInteger")), 0))))), async () => ($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "FieldByName", ["TRANSACTION_ID"])), "AsInteger")), 0)))))) {
    {
      const $t19 = (await $.v(C, "FormPayment_Det"));
      await $.mset((await $.wv([$t19], "ButtonFinish", C, false)), "Enabled", (await $.wv([$t19], "false", C, false)));
      await $.mset((await $.wv([$t19], "XFBitBtn4", C, false)), "Enabled", (await $.wv([$t19], "false", C, false)));
      await $.mset((await $.wv([$t19], "SpeedButton2", C, false)), "Enabled", (await $.wv([$t19], "false", C, false)));
      await $.mset((await $.wv([$t19], "Combo_BankName", C, false)), "Enabled", (await $.wv([$t19], "false", C, false)));
      await $.mset((await $.wv([$t19], "XFBitBtn3", C, false)), "Enabled", (await $.wv([$t19], "false", C, false)));
      await $.mset((await $.wv([$t19], "SearchBankM", C, false)), "Enabled", (await $.wv([$t19], "false", C, false)));
      await $.mset((await $.wv([$t19], "Edit_Client_acc_no", C, false)), "Enabled", (await $.wv([$t19], "false", C, false)));
      await $.mset((await $.wv([$t19], "Edit_Client_Name", C, false)), "Enabled", (await $.wv([$t19], "false", C, false)));
      await $.mset((await $.wv([$t19], "Edit_Client_Code", C, false)), "Enabled", (await $.wv([$t19], "false", C, false)));
      await $.mset((await $.wv([$t19], "Edit_Client_Voen", C, false)), "Enabled", (await $.wv([$t19], "false", C, false)));
      await $.mset((await $.wv([$t19], "Edit_tey1", C, false)), "Enabled", (await $.wv([$t19], "false", C, false)));
      await $.mset((await $.wv([$t19], "Edit_tey2", C, false)), "Enabled", (await $.wv([$t19], "false", C, false)));
      await $.mset((await $.wv([$t19], "Edit_tey3", C, false)), "Enabled", (await $.wv([$t19], "false", C, false)));
      await $.mset((await $.wv([$t19], "Edit_tey4", C, false)), "Enabled", (await $.wv([$t19], "false", C, false)));
      await $.mset((await $.wv([$t19], "Edit_inf1", C, false)), "Enabled", (await $.wv([$t19], "false", C, false)));
      await $.mset((await $.wv([$t19], "Edit_inf2", C, false)), "Enabled", (await $.wv([$t19], "false", C, false)));
      await $.mset((await $.wv([$t19], "Edit_inf3", C, false)), "Enabled", (await $.wv([$t19], "false", C, false)));
      await $.mset((await $.wv([$t19], "XFGroupBox8", C, false)), "Enabled", (await $.wv([$t19], "false", C, false)));
      await $.mset((await $.wv([$t19], "Edit_Amount", C, false)), "Enabled", (await $.wv([$t19], "false", C, false)));
      await $.mset((await $.wv([$t19], "SpeedButton1", C, false)), "Enabled", (await $.wv([$t19], "false", C, false)));
      await $.mset((await $.wv([$t19], "Edit_Referens", C, false)), "Enabled", (await $.wv([$t19], "false", C, false)));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TMainXohksForm", "OnlyNumber", async function OnlyNumber(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["key"]);
  if ($.truthy($.not(($.in_(L0["key"], [...$.range("0","9"), "\b"]))))) {
    L0["key"] = "\u0000";
  }
  L0["result"] = L0["key"];
  return L0.result;
}, {"params": ["key"], "kind": "function", "ptypes": ["char"]});
  U.func("PrepareTrans", async function PrepareTrans(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"bnfcount": $.copyArg(p0), "editbeneficiary": $.copyArg(p1), result: undefined, "dd": 0};
  await $.fixArgs(L0, ["bnfcount", "editbeneficiary"]);
  {
    const $t20 = (await $.v(C, "DataModXhoks"));
    if ($.truthy($.eq((await $.mv((await $.wv([$t20], "XS_CONFIG", C, false)), "Active")), (await $.wv([$t20], "false", C, false))))) {
      await $.mcall((await $.wv([$t20], "XS_CONFIG", C, false)), "Open", []);
    }
    await $.mcall((await $.wv([$t20], "DataAccount", C, false)), "close", []);
    await $.stmt((await $.mcall((await $.wv([$t20], "DataAccount", C, false)), "SetVariable", ["acc_id", (await $.wv([$t20], "Tcust_id", C, false))])));
    await $.mcall((await $.wv([$t20], "DataAccount", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t20], "DataSetFilial", C, false)), "Active")), (await $.wv([$t20], "false", C, false))))) {
      await $.mcall((await $.wv([$t20], "DataSetFilial", C, false)), "Open", []);
    }
  }
  await $.mset((await $.v(C, "FormPayment_Det")), "bnf_count", L0["bnfcount"]);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataBankInfo")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "DataBankInfo")), "SQL")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "DataBankInfo")), "SQL")), "Add", ["Select * from BankInfo"])));
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataBankInfo")), "Open", []);
  await $.stmt((await $.call(C, "AddtoCOMBO", [(await $.mv((await $.v(C, "FormPayment_Det")), "Combo_BankName")), (await $.mv((await $.v(C, "FormPayment_Det")), "Bank_ID")), (await $.mv((await $.v(C, "DataModXhoks")), "DataBankM")), "Select * from BankM order by name", "ID", "NAME"])));
  await $.stmt((await $.call(C, "AddtoCOMBO", [(await $.mv((await $.v(C, "FormPayment_Det")), "Combo_Valute")), (await $.mv((await $.v(C, "FormPayment_Det")), "Valute_ID")), (await $.mv((await $.v(C, "DataModXhoks")), "DataValute")), "Select valute,val_name,valu_name from Avalute order by valute", "VALUTE", "VALU_NAME"])));
  await $.stmt((await $.call(C, "AddtoCOMBO", [(await $.mv((await $.v(C, "FormXohks")), "Combo_Valute")), (await $.mv((await $.v(C, "FormXohks")), "Valute_ID")), (await $.mv((await $.v(C, "DataModXhoks")), "DataValute")), "Select valute,val_name,valu_name from Avalute order by valute", "VALUTE", "VALU_NAME"])));
  await $.stmt((await $.mcall((await $.v(C, "MainXohksForm")), "ViewBankInfo", [false, 0])));
  await $.mset((await $.mv((await $.v(C, "FormXohks")), "Combo_Valute")), "ItemIndex", 0);
  await $.mset((await $.mv((await $.v(C, "FormXohks")), "ComboBox_CD")), "ItemIndex", 0);
  if ($.truthy($.eq(L0["editbeneficiary"], false))) {
    await $.mset((await $.mv((await $.v(C, "FormXohks")), "SpeedButton1")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "FormXohks")), "Edit_client_code")), "Text", "/");
    await $.mset((await $.mv((await $.v(C, "FormXohks")), "Edit_Amount")), "text", "0");
    await $.mset((await $.mv((await $.v(C, "FormXohks")), "Edit_BNF")), "Text", "/BNF/0");
    await $.mset((await $.mv((await $.v(C, "FormXohks")), "Combo_date")), "Date", (await $.v(C, "Date")));
    await $.mcall((await $.mv((await $.v(C, "FormXohks")), "Edit_Client_Voen")), "Clear", []);
    await $.mcall((await $.mv((await $.v(C, "FormXohks")), "Edit_Referens")), "clear", []);
    await $.mset((await $.mv((await $.v(C, "FormXohks")), "LabelFilialName")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "FormXohks")), "Button_add")), "Enabled", true);
    await $.set(C, "Batchs_Edit", false);
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataAccount")), "Locate", ["id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["acc_id"])), "AsInteger")), []])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataAccount")), "Locate", ["acc_no", (await $.mv((await $.mv((await $.v(C, "FormXohks")), "DBLookupComboBox1")), "text")), []])));
    await $.mset((await $.mv((await $.v(C, "FormXohks")), "DBLookupComboBox1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataAccount")), "fieldbyname", ["id"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "FormXohks")), "Edit_clientName")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["client_name"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "FormXohks")), "Edit_client_code")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["client_code"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "FormXohks")), "Edit_Amount")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["Amount"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "FormXohks")), "Edit_BNF")), "Text", $.add("/BNF/", (await $.call(C, "inttostr", [(await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "RecordCount"))]))));
    await $.mset((await $.mv((await $.v(C, "FormXohks")), "Combo_date")), "Date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["transdate"])), "AsDateTime")));
    await $.mset((await $.mv((await $.v(C, "FormXohks")), "Edit_Client_Voen")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["client_inn"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "FormXohks")), "Edit_Referens")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["trans_ref"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "FormXohks")), "LabelFilialName")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "FormXohks")), "Button_add")), "Enabled", false);
    await $.set(C, "Batchs_Edit", true);
    if ($.truthy(((await $.and_(($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "FieldByName", ["status"])), "AsInteger")), 0)), async () => ($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "FieldByName", ["status"])), "AsInteger")), 0))))))) {
      await $.set(C, "Batchs_Edit", false);
      await $.mset((await $.mv((await $.v(C, "FormXohks")), "SpeedButton1")), "Enabled", false);
    }
  }
  await $.mset((await $.mv((await $.v(C, "FormXohks")), "ButtonPost")), "Enabled", false);
  return L0.result;
}, {"params": ["BnfCount", "EditBeneficiary"], "kind": "procedure", "ptypes": ["integer", "Boolean"]});
  U.method("TMainXohksForm", "ButtonMessInRefreshClick", async function ButtonMessInRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_CONFIG")), "Refresh", []);
  await $.stmt((await $.call(C, "LoadFileNames", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_CONFIG")), "fieldbyname", ["in_dir"])), "AsString"))])));
  await $.mcall((await $.v(C, "FileListIncoming")), "Update", []);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "DBGridOUTArchBatchsDrawColumnCell", async function DBGridOUTArchBatchsDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0, "imageindexfilial": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t21 = (L0["sender"]);
    if ($.truthy($.ne((await $.mv((await $.mv((await $.mv(((await $.wv([$t21], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "RecordCount")), 0))) {
      { const $t22 = (await $.mv((await $.mcall((await $.mv((await $.mv(((await $.wv([$t21], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t22, (await $.wv([$t21], "msDefault", C, false)))) {
          await $.wset([$t21], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t22, (await $.wv([$t21], "msCommit", C, false)))) {
          await $.wset([$t21], "ImageIndex", 10, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t22, (await $.wv([$t21], "msReject", C, false)))) {
          await $.wset([$t21], "ImageIndex", 4, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t22, (await $.wv([$t21], "msFileCreated", C, false)))) {
          await $.wset([$t21], "ImageIndex", 5, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t22, (await $.wv([$t21], "msVerifikator", C, false)))) {
          await $.wset([$t21], "ImageIndex", 18, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t22, (await $.wv([$t21], "msFVerifikator", C, false)))) {
          await $.wset([$t21], "ImageIndex", 17, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t22, (await $.wv([$t21], "msAvtorizator", C, false)))) {
          await $.wset([$t21], "ImageIndex", 19, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t22, (await $.wv([$t21], "msReturnBack", C, false)))) {
          await $.wset([$t21], "ImageIndex", 16, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t21], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 2)), async () => ($.ne((await $.wv([$t21], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t21], "ImageList", C, false)), "Draw", [(await $.wv([$t21], "Canvas", C, false)), (await $.mv((await $.wv([$t21], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t21], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t21], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t21], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t21], "DefaultDrawColumnCell", [(await $.wv([$t21], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t21], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t21], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t21], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
      if ($.truthy((await $.or_((await $.or_((await $.or_(($.eq(((await $.wv([$t21], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), (await $.wv([$t21], "GridBatchs", C, false)))), async () => ($.eq(((await $.wv([$t21], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), (await $.wv([$t21], "GridIncoming", C, false)))))), async () => ($.eq(((await $.wv([$t21], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), (await $.wv([$t21], "DBGridOUTArchBatchs", C, false)))))), async () => ($.eq(((await $.wv([$t21], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), (await $.wv([$t21], "GridIncomingArchive", C, false)))))))) {
        { const $t23 = (await $.mv((await $.mcall((await $.mv((await $.mv(((await $.wv([$t21], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "FieldByName", ["FILIAL"])), "AsInteger"));
          if ($.eq($t23, (await $.wv([$t21], "MsHeadOffice", C, false)))) {
            await $.wset([$t21], "ImageIndexFilial", (-(1)), { get: async () => L0["imageindexfilial"], set: async (v) => { L0["imageindexfilial"] = v; }, local: true });
          }
          else {
            await $.wset([$t21], "ImageIndexFilial", 0, { get: async () => L0["imageindexfilial"], set: async (v) => { L0["imageindexfilial"] = v; }, local: true });
          }
        }
        if ($.truthy((await $.and_(($.eq((await $.wv([$t21], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t21], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
          await $.stmt((await $.mcall((await $.wv([$t21], "ImageListFilial", C, false)), "Draw", [(await $.wv([$t21], "Canvas", C, false)), (await $.mv((await $.wv([$t21], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t21], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t21], "ImageIndexFilial", { get: async () => L0["imageindexfilial"], set: async (v) => { L0["imageindexfilial"] = v; }, local: true }, false)), (await $.wv([$t21], "True", C, false))])));
        }
      }
    }
    if ($.truthy(($.eq((await $.mv((await $.wv([$t21], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), "FORMAT")))) {
      {
        const $t24 = (await $.mv((await $.wv([$t21], "GridBatchs", C, false)), "Canvas"));
        await $.stmt((await $.wcall([$t21, $t24], "FillRect", [(await $.wv([$t21, $t24], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false))], C)));
        if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t21, $t24], "DataSource", C, false)), "DataSet")), "FieldByName", ["FORMAT"])), "AsString")), "MT102T")))) {
          await $.mset((await $.wv([$t21, $t24], "Font", C, false)), "Color", (await $.wv([$t21, $t24], "clRed", C, false)));
          await $.stmt((await $.wcall([$t21, $t24], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t21, $t24], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Right")), 2), (await $.mcall((await $.wv([$t21, $t24], "Canvas", C, false)), "TextWidth", ["MT102T"]))), $.add((await $.mv((await $.wv([$t21, $t24], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), "MT102T"], C)));
        } else {
          if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t21, $t24], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
            await $.mset((await $.wv([$t21, $t24], "Font", C, false)), "Color", (await $.wv([$t21, $t24], "clblack", C, false)));
            await $.stmt((await $.wcall([$t21, $t24], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t21, $t24], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Right")), 2), (await $.mcall((await $.wv([$t21, $t24], "Canvas", C, false)), "TextWidth", ["MT102"]))), $.add((await $.mv((await $.wv([$t21, $t24], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), "MT102"], C)));
          }
        }
      }
    }
    if ($.truthy(($.eq((await $.mv((await $.wv([$t21], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), "FORMAT")))) {
      {
        const $t25 = (await $.mv((await $.wv([$t21], "DBGridOUTArchBatchs", C, false)), "Canvas"));
        await $.stmt((await $.wcall([$t21, $t25], "FillRect", [(await $.wv([$t21, $t25], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false))], C)));
        if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t21, $t25], "DataSource", C, false)), "DataSet")), "FieldByName", ["FORMAT"])), "AsString")), "MT102T")))) {
          await $.mset((await $.wv([$t21, $t25], "Font", C, false)), "Color", (await $.wv([$t21, $t25], "clRed", C, false)));
          await $.stmt((await $.wcall([$t21, $t25], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t21, $t25], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Right")), 2), (await $.mcall((await $.wv([$t21, $t25], "Canvas", C, false)), "TextWidth", ["MT102T"]))), $.add((await $.mv((await $.wv([$t21, $t25], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), "MT102T"], C)));
        } else {
          if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t21, $t25], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
            await $.mset((await $.wv([$t21, $t25], "Font", C, false)), "Color", (await $.wv([$t21, $t25], "clblack", C, false)));
            await $.stmt((await $.wcall([$t21, $t25], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t21, $t25], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Right")), 2), (await $.mcall((await $.wv([$t21, $t25], "Canvas", C, false)), "TextWidth", ["MT102"]))), $.add((await $.mv((await $.wv([$t21, $t25], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), "MT102"], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TMainXohksForm", "DBGridOUTArchBeneficiaryDrawColumnCell", async function DBGridOUTArchBeneficiaryDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0, "imageindexfilial": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t26 = (L0["sender"]);
    if ($.truthy($.ne((await $.mv((await $.mv((await $.mv(((await $.wv([$t26], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "RecordCount")), 0))) {
      { const $t27 = (await $.mv((await $.mcall((await $.mv((await $.mv(((await $.wv([$t26], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t27, (await $.wv([$t26], "msDefault", C, false)))) {
          await $.wset([$t26], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t27, (await $.wv([$t26], "msCommit", C, false)))) {
          await $.wset([$t26], "ImageIndex", 10, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t27, (await $.wv([$t26], "msReject", C, false)))) {
          await $.wset([$t26], "ImageIndex", 4, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t27, (await $.wv([$t26], "msFileCreated", C, false)))) {
          await $.wset([$t26], "ImageIndex", 5, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t27, (await $.wv([$t26], "msVerifikator", C, false)))) {
          await $.wset([$t26], "ImageIndex", 18, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t27, (await $.wv([$t26], "msFVerifikator", C, false)))) {
          await $.wset([$t26], "ImageIndex", 17, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t27, (await $.wv([$t26], "msAvtorizator", C, false)))) {
          await $.wset([$t26], "ImageIndex", 19, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t27, (await $.wv([$t26], "msReturnBack", C, false)))) {
          await $.wset([$t26], "ImageIndex", 16, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t26], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 2)), async () => ($.ne((await $.wv([$t26], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t26], "ImageList", C, false)), "Draw", [(await $.wv([$t26], "Canvas", C, false)), (await $.mv((await $.wv([$t26], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t26], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t26], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t26], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t26], "DefaultDrawColumnCell", [(await $.wv([$t26], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t26], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t26], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t26], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
      if ($.truthy((await $.or_((await $.or_((await $.or_(($.eq(((await $.wv([$t26], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), (await $.wv([$t26], "GridBatchs", C, false)))), async () => ($.eq(((await $.wv([$t26], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), (await $.wv([$t26], "GridIncoming", C, false)))))), async () => ($.eq(((await $.wv([$t26], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), (await $.wv([$t26], "DBGridOUTArchBatchs", C, false)))))), async () => ($.eq(((await $.wv([$t26], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), (await $.wv([$t26], "GridIncomingArchive", C, false)))))))) {
        { const $t28 = (await $.mv((await $.mcall((await $.mv((await $.mv(((await $.wv([$t26], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "FieldByName", ["FILIAL"])), "AsInteger"));
          if ($.eq($t28, (await $.wv([$t26], "MsHeadOffice", C, false)))) {
            await $.wset([$t26], "ImageIndexFilial", (-(1)), { get: async () => L0["imageindexfilial"], set: async (v) => { L0["imageindexfilial"] = v; }, local: true });
          }
          else {
            await $.wset([$t26], "ImageIndexFilial", 0, { get: async () => L0["imageindexfilial"], set: async (v) => { L0["imageindexfilial"] = v; }, local: true });
          }
        }
        if ($.truthy((await $.and_(($.eq((await $.wv([$t26], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t26], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
          await $.stmt((await $.mcall((await $.wv([$t26], "ImageListFilial", C, false)), "Draw", [(await $.wv([$t26], "Canvas", C, false)), (await $.mv((await $.wv([$t26], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t26], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t26], "ImageIndexFilial", { get: async () => L0["imageindexfilial"], set: async (v) => { L0["imageindexfilial"] = v; }, local: true }, false)), (await $.wv([$t26], "True", C, false))])));
        }
      }
    }
    if ($.truthy(($.eq((await $.mv((await $.wv([$t26], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), "FORMAT")))) {
      {
        const $t29 = (await $.mv((await $.wv([$t26], "GridBatchs", C, false)), "Canvas"));
        await $.stmt((await $.wcall([$t26, $t29], "FillRect", [(await $.wv([$t26, $t29], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false))], C)));
        if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t26, $t29], "DataSource", C, false)), "DataSet")), "FieldByName", ["FORMAT"])), "AsString")), "MT102T")))) {
          await $.mset((await $.wv([$t26, $t29], "Font", C, false)), "Color", (await $.wv([$t26, $t29], "clRed", C, false)));
          await $.stmt((await $.wcall([$t26, $t29], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t26, $t29], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Right")), 2), (await $.mcall((await $.wv([$t26, $t29], "Canvas", C, false)), "TextWidth", ["MT102T"]))), $.add((await $.mv((await $.wv([$t26, $t29], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), "MT102T"], C)));
        } else {
          if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t26, $t29], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
            await $.mset((await $.wv([$t26, $t29], "Font", C, false)), "Color", (await $.wv([$t26, $t29], "clblack", C, false)));
            await $.stmt((await $.wcall([$t26, $t29], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t26, $t29], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Right")), 2), (await $.mcall((await $.wv([$t26, $t29], "Canvas", C, false)), "TextWidth", ["MT102"]))), $.add((await $.mv((await $.wv([$t26, $t29], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), "MT102"], C)));
          }
        }
      }
    }
    if ($.truthy(($.eq((await $.mv((await $.wv([$t26], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), "FORMAT")))) {
      {
        const $t30 = (await $.mv((await $.wv([$t26], "DBGridOUTArchBatchs", C, false)), "Canvas"));
        await $.stmt((await $.wcall([$t26, $t30], "FillRect", [(await $.wv([$t26, $t30], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false))], C)));
        if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t26, $t30], "DataSource", C, false)), "DataSet")), "FieldByName", ["FORMAT"])), "AsString")), "MT102T")))) {
          await $.mset((await $.wv([$t26, $t30], "Font", C, false)), "Color", (await $.wv([$t26, $t30], "clRed", C, false)));
          await $.stmt((await $.wcall([$t26, $t30], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t26, $t30], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Right")), 2), (await $.mcall((await $.wv([$t26, $t30], "Canvas", C, false)), "TextWidth", ["MT102T"]))), $.add((await $.mv((await $.wv([$t26, $t30], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), "MT102T"], C)));
        } else {
          if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t26, $t30], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
            await $.mset((await $.wv([$t26, $t30], "Font", C, false)), "Color", (await $.wv([$t26, $t30], "clblack", C, false)));
            await $.stmt((await $.wcall([$t26, $t30], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t26, $t30], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Right")), 2), (await $.mcall((await $.wv([$t26, $t30], "Canvas", C, false)), "TextWidth", ["MT102"]))), $.add((await $.mv((await $.wv([$t26, $t30], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), "MT102"], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TMainXohksForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TMainXohksForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "MainXohksForm", Self);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "FormXohks")), "XFLabel2")), "Caption", (await $.v(C, "Tcust_name")));
  await $.mset((await $.mv((await $.v(C, "FormXohks")), "XFLabel1")), "Caption", (await $.call(C, "inttostr", [(await $.v(C, "Tcust_id"))])));
  {
    const $t31 = (await $.v(C, "DataModXhoks"));
    const $t32 = (await $.wv([$t31], "XS_BATCHS", C, false));
    await $.stmt($.wcall([$t31, $t32], "Close", [], C));
    await $.stmt((await $.wcall([$t31, $t32], "SetVariable", ["custid", (await $.wv([$t31, $t32], "Tcust_id", C, false))], C)));
    await $.stmt($.wcall([$t31, $t32], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "GridBatchsDblClick", async function GridBatchsDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Mt102Edit")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "GridBatchsDrawColumnCell", async function GridBatchsDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0, "imageindexfilial": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t33 = (L0["sender"]);
    if ($.truthy($.ne((await $.mv((await $.mv((await $.mv(((await $.wv([$t33], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "RecordCount")), 0))) {
      { const $t34 = (await $.mv((await $.mcall((await $.mv((await $.mv(((await $.wv([$t33], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t34, (await $.wv([$t33], "msDefault", C, false)))) {
          await $.wset([$t33], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t34, (await $.wv([$t33], "msCommit", C, false)))) {
          await $.wset([$t33], "ImageIndex", 10, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t34, (await $.wv([$t33], "msReject", C, false)))) {
          await $.wset([$t33], "ImageIndex", 4, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t34, (await $.wv([$t33], "msFileCreated", C, false)))) {
          await $.wset([$t33], "ImageIndex", 5, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t34, (await $.wv([$t33], "msVerifikator", C, false)))) {
          await $.wset([$t33], "ImageIndex", 18, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t34, (await $.wv([$t33], "msFVerifikator", C, false)))) {
          await $.wset([$t33], "ImageIndex", 17, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t34, (await $.wv([$t33], "msAvtorizator", C, false)))) {
          await $.wset([$t33], "ImageIndex", 19, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t34, (await $.wv([$t33], "msReturnBack", C, false)))) {
          await $.wset([$t33], "ImageIndex", 16, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t33], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 2)), async () => ($.ne((await $.wv([$t33], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t33], "ImageList", C, false)), "Draw", [(await $.wv([$t33], "Canvas", C, false)), (await $.mv((await $.wv([$t33], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t33], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t33], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t33], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t33], "DefaultDrawColumnCell", [(await $.wv([$t33], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t33], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t33], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t33], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t33], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t33], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t33], "ImageListFilial", C, false)), "Draw", [(await $.wv([$t33], "Canvas", C, false)), (await $.mv((await $.wv([$t33], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t33], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t33], "ImageIndexFilial", { get: async () => L0["imageindexfilial"], set: async (v) => { L0["imageindexfilial"] = v; }, local: true }, false)), (await $.wv([$t33], "True", C, false))])));
      }
    }
  }
  if ($.truthy(($.eq((await $.mv(L0["column"], "FieldName")), "FORMAT")))) {
    {
      const $t35 = (await $.mv((await $.v(C, "GridBatchs")), "Canvas"));
      await $.stmt((await $.wcall([$t35], "FillRect", [(await $.wv([$t35], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false))], C)));
      if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t35], "GridBatchs", C, false)), "DataSource")), "DataSet")), "FieldByName", ["FORMAT"])), "AsString")), "MT102T")))) {
        await $.mset((await $.wv([$t35], "Font", C, false)), "Color", (await $.wv([$t35], "clRed", C, false)));
        await $.stmt((await $.wcall([$t35], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t35], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Right")), 2), (await $.mcall((await $.wv([$t35], "Canvas", C, false)), "TextWidth", ["MT102T"]))), $.add((await $.mv((await $.wv([$t35], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), "MT102T"], C)));
      } else {
        if ($.truthy($.ne((await $.mv((await $.mv((await $.mv((await $.wv([$t35], "GridBatchs", C, false)), "DataSource")), "DataSet")), "RecordCount")), 0))) {
          await $.mset((await $.wv([$t35], "Font", C, false)), "Color", (await $.wv([$t35], "clblack", C, false)));
          await $.stmt((await $.wcall([$t35], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t35], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Right")), 2), (await $.mcall((await $.wv([$t35], "Canvas", C, false)), "TextWidth", ["MT102"]))), $.add((await $.mv((await $.wv([$t35], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), "MT102"], C)));
        }
      }
    }
  }
  if ($.truthy(($.eq((await $.mv(L0["column"], "FieldName")), "FORMAT")))) {
    {
      const $t36 = (await $.mv((await $.v(C, "DBGridOUTArchBatchs")), "Canvas"));
      await $.stmt((await $.wcall([$t36], "FillRect", [(await $.wv([$t36], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false))], C)));
      if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t36], "DBGridOUTArchBatchs", C, false)), "DataSource")), "DataSet")), "FieldByName", ["FORMAT"])), "AsString")), "MT102T")))) {
        await $.mset((await $.wv([$t36], "Font", C, false)), "Color", (await $.wv([$t36], "clRed", C, false)));
        await $.stmt((await $.wcall([$t36], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t36], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Right")), 2), (await $.mcall((await $.wv([$t36], "Canvas", C, false)), "TextWidth", ["MT102T"]))), $.add((await $.mv((await $.wv([$t36], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), "MT102T"], C)));
      } else {
        if ($.truthy($.ne((await $.mv((await $.mv((await $.mv((await $.wv([$t36], "DBGridOUTArchBatchs", C, false)), "DataSource")), "DataSet")), "RecordCount")), 0))) {
          await $.mset((await $.wv([$t36], "Font", C, false)), "Color", (await $.wv([$t36], "clblack", C, false)));
          await $.stmt((await $.wcall([$t36], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t36], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Right")), 2), (await $.mcall((await $.wv([$t36], "Canvas", C, false)), "TextWidth", ["MT102"]))), $.add((await $.mv((await $.wv([$t36], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), "MT102"], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TMainXohksForm", "GridBatchsTitleClick", async function GridBatchsTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  L0["xs_batchsorderby"] = $.fn(async function XS_BatchsOrderBy(p0) {
  const L1 = {"ofields": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["ofields"]);
  await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crSQLWait")));
  try {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "SetVariable", ["Title", L1["ofields"]])));
    await $.stmt($.call(C, "RefreshDataBatchs", []));
  } finally {
    await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L1.result;
});
  L0["changetitlecolor"] = $.fn(async function ChangeTitleColor(p0, p1, p2, p3) {
  const L1 = {"grid": $.copyArg(p0), "chcolumn": $.copyArg(p1), "orderingcolor": $.copyArg(p2), "defaulcolor": $.copyArg(p3), result: undefined, "i": 0};
  await $.fixArgs(L1, ["grid", "chcolumn", "orderingcolor", "defaulcolor"]);
  { const $t37 = $.sub((await $.mv((await $.mv(L1["grid"], "Columns")), "Count")), 1);
    L1["i"] = 0;
    let $t38 = true;
    for (;;) {
      if (!$t38) { L1["i"] = $.succ(L1["i"], 1); }
      $t38 = false;
      if (!($.ord(L1["i"]) <= $.ord($t37))) break;
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
  U.method("TMainXohksForm", "GridBeneficiaryDblClick", async function GridBeneficiaryDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_EDIT"]])));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.stmt($.call(C, "ShowDetals", []));
  await $.mset((await $.mv((await $.v(C, "FormPayment_Det")), "ButtonFinish")), "Enabled", false);
  await $.mcall((await $.v(C, "FormPayment_Det")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "GridBeneficiaryDrawColumnCell", async function GridBeneficiaryDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0, "imageindexfilial": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t39 = (L0["sender"]);
    if ($.truthy($.ne((await $.mv((await $.mv((await $.mv(((await $.wv([$t39], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "RecordCount")), 0))) {
      { const $t40 = (await $.mv((await $.mcall((await $.mv((await $.mv(((await $.wv([$t39], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t40, (await $.wv([$t39], "msDefault", C, false)))) {
          await $.wset([$t39], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t40, (await $.wv([$t39], "msCommit", C, false)))) {
          await $.wset([$t39], "ImageIndex", 10, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t40, (await $.wv([$t39], "msReject", C, false)))) {
          await $.wset([$t39], "ImageIndex", 4, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t40, (await $.wv([$t39], "msFileCreated", C, false)))) {
          await $.wset([$t39], "ImageIndex", 5, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t40, (await $.wv([$t39], "msVerifikator", C, false)))) {
          await $.wset([$t39], "ImageIndex", 18, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t40, (await $.wv([$t39], "msFVerifikator", C, false)))) {
          await $.wset([$t39], "ImageIndex", 17, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t40, (await $.wv([$t39], "msAvtorizator", C, false)))) {
          await $.wset([$t39], "ImageIndex", 19, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t40, (await $.wv([$t39], "msReturnBack", C, false)))) {
          await $.wset([$t39], "ImageIndex", 16, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t39], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 2)), async () => ($.ne((await $.wv([$t39], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t39], "ImageList", C, false)), "Draw", [(await $.wv([$t39], "Canvas", C, false)), (await $.mv((await $.wv([$t39], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t39], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t39], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t39], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t39], "DefaultDrawColumnCell", [(await $.wv([$t39], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t39], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t39], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t39], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t39], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t39], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t39], "ImageListFilial", C, false)), "Draw", [(await $.wv([$t39], "Canvas", C, false)), (await $.mv((await $.wv([$t39], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t39], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t39], "ImageIndexFilial", { get: async () => L0["imageindexfilial"], set: async (v) => { L0["imageindexfilial"] = v; }, local: true }, false)), (await $.wv([$t39], "True", C, false))])));
      }
    }
  }
  if ($.truthy(($.eq((await $.mv(L0["column"], "FieldName")), "FORMAT")))) {
    {
      const $t41 = (await $.mv((await $.v(C, "GridBatchs")), "Canvas"));
      await $.stmt((await $.wcall([$t41], "FillRect", [(await $.wv([$t41], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false))], C)));
      if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t41], "GridBatchs", C, false)), "DataSource")), "DataSet")), "FieldByName", ["FORMAT"])), "AsString")), "MT102T")))) {
        await $.mset((await $.wv([$t41], "Font", C, false)), "Color", (await $.wv([$t41], "clRed", C, false)));
        await $.stmt((await $.wcall([$t41], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t41], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Right")), 2), (await $.mcall((await $.wv([$t41], "Canvas", C, false)), "TextWidth", ["MT102T"]))), $.add((await $.mv((await $.wv([$t41], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), "MT102T"], C)));
      } else {
        if ($.truthy($.ne((await $.mv((await $.mv((await $.mv((await $.wv([$t41], "GridBatchs", C, false)), "DataSource")), "DataSet")), "RecordCount")), 0))) {
          await $.mset((await $.wv([$t41], "Font", C, false)), "Color", (await $.wv([$t41], "clblack", C, false)));
          await $.stmt((await $.wcall([$t41], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t41], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Right")), 2), (await $.mcall((await $.wv([$t41], "Canvas", C, false)), "TextWidth", ["MT102"]))), $.add((await $.mv((await $.wv([$t41], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), "MT102"], C)));
        }
      }
    }
  }
  if ($.truthy(($.eq((await $.mv(L0["column"], "FieldName")), "FORMAT")))) {
    {
      const $t42 = (await $.mv((await $.v(C, "DBGridOUTArchBatchs")), "Canvas"));
      await $.stmt((await $.wcall([$t42], "FillRect", [(await $.wv([$t42], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false))], C)));
      if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t42], "DBGridOUTArchBatchs", C, false)), "DataSource")), "DataSet")), "FieldByName", ["FORMAT"])), "AsString")), "MT102T")))) {
        await $.mset((await $.wv([$t42], "Font", C, false)), "Color", (await $.wv([$t42], "clRed", C, false)));
        await $.stmt((await $.wcall([$t42], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t42], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Right")), 2), (await $.mcall((await $.wv([$t42], "Canvas", C, false)), "TextWidth", ["MT102T"]))), $.add((await $.mv((await $.wv([$t42], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), "MT102T"], C)));
      } else {
        if ($.truthy($.ne((await $.mv((await $.mv((await $.mv((await $.wv([$t42], "DBGridOUTArchBatchs", C, false)), "DataSource")), "DataSet")), "RecordCount")), 0))) {
          await $.mset((await $.wv([$t42], "Font", C, false)), "Color", (await $.wv([$t42], "clblack", C, false)));
          await $.stmt((await $.wcall([$t42], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t42], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Right")), 2), (await $.mcall((await $.wv([$t42], "Canvas", C, false)), "TextWidth", ["MT102"]))), $.add((await $.mv((await $.wv([$t42], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), "MT102"], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TMainXohksForm", "GridIncomingDblClick", async function GridIncomingDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "MessagesinEdit")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "GridIncomingDrawColumnCell", async function GridIncomingDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0, "imageindexfilial": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t43 = (L0["sender"]);
    if ($.truthy($.ne((await $.mv((await $.mv((await $.mv(((await $.wv([$t43], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "RecordCount")), 0))) {
      { const $t44 = (await $.mv((await $.mcall((await $.mv((await $.mv(((await $.wv([$t43], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t44, (await $.wv([$t43], "msDefault", C, false)))) {
          await $.wset([$t43], "ImageIndex", 3, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t44, (await $.wv([$t43], "msCommit", C, false)))) {
          await $.wset([$t43], "ImageIndex", 10, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t44, (await $.wv([$t43], "msReject", C, false)))) {
          await $.wset([$t43], "ImageIndex", 4, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t44, (await $.wv([$t43], "msFileCreated", C, false)))) {
          await $.wset([$t43], "ImageIndex", 5, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t44, (await $.wv([$t43], "msVerifikator", C, false)))) {
          await $.wset([$t43], "ImageIndex", 18, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t44, (await $.wv([$t43], "msFVerifikator", C, false)))) {
          await $.wset([$t43], "ImageIndex", 17, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t44, (await $.wv([$t43], "msAvtorizator", C, false)))) {
          await $.wset([$t43], "ImageIndex", 19, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t44, (await $.wv([$t43], "msReturnBack", C, false)))) {
          await $.wset([$t43], "ImageIndex", 16, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t43], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 2)), async () => ($.ne((await $.wv([$t43], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t43], "ImageList", C, false)), "Draw", [(await $.wv([$t43], "Canvas", C, false)), (await $.mv((await $.wv([$t43], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t43], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t43], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t43], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t43], "DefaultDrawColumnCell", [(await $.wv([$t43], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t43], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t43], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t43], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
      if ($.truthy((await $.or_((await $.or_((await $.or_(($.eq(((await $.wv([$t43], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), (await $.wv([$t43], "GridBatchs", C, false)))), async () => ($.eq(((await $.wv([$t43], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), (await $.wv([$t43], "GridIncoming", C, false)))))), async () => ($.eq(((await $.wv([$t43], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), (await $.wv([$t43], "DBGridOUTArchBatchs", C, false)))))), async () => ($.eq(((await $.wv([$t43], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), (await $.wv([$t43], "GridIncomingArchive", C, false)))))))) {
        { const $t45 = (await $.mv((await $.mcall((await $.mv((await $.mv(((await $.wv([$t43], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DataSource")), "DataSet")), "FieldByName", ["FILIAL"])), "AsInteger"));
          if ($.eq($t45, (await $.wv([$t43], "MsHeadOffice", C, false)))) {
            await $.wset([$t43], "ImageIndexFilial", (-(1)), { get: async () => L0["imageindexfilial"], set: async (v) => { L0["imageindexfilial"] = v; }, local: true });
          }
          else {
            await $.wset([$t43], "ImageIndexFilial", 0, { get: async () => L0["imageindexfilial"], set: async (v) => { L0["imageindexfilial"] = v; }, local: true });
          }
        }
        if ($.truthy((await $.and_(($.eq((await $.wv([$t43], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t43], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
          await $.stmt((await $.mcall((await $.wv([$t43], "ImageListFilial", C, false)), "Draw", [(await $.wv([$t43], "Canvas", C, false)), (await $.mv((await $.wv([$t43], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t43], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t43], "ImageIndexFilial", { get: async () => L0["imageindexfilial"], set: async (v) => { L0["imageindexfilial"] = v; }, local: true }, false)), (await $.wv([$t43], "True", C, false))])));
        }
      }
    }
    if ($.truthy(($.eq((await $.mv((await $.wv([$t43], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), "FORMAT")))) {
      {
        const $t46 = (await $.mv((await $.wv([$t43], "GridBatchs", C, false)), "Canvas"));
        await $.stmt((await $.wcall([$t43, $t46], "FillRect", [(await $.wv([$t43, $t46], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false))], C)));
        if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t43, $t46], "DataSource", C, false)), "DataSet")), "FieldByName", ["FORMAT"])), "AsString")), "MT102T")))) {
          await $.mset((await $.wv([$t43, $t46], "Font", C, false)), "Color", (await $.wv([$t43, $t46], "clRed", C, false)));
          await $.stmt((await $.wcall([$t43, $t46], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t43, $t46], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Right")), 2), (await $.mcall((await $.wv([$t43, $t46], "Canvas", C, false)), "TextWidth", ["MT102T"]))), $.add((await $.mv((await $.wv([$t43, $t46], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), "MT102T"], C)));
        } else {
          if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t43, $t46], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
            await $.mset((await $.wv([$t43, $t46], "Font", C, false)), "Color", (await $.wv([$t43, $t46], "clblack", C, false)));
            await $.stmt((await $.wcall([$t43, $t46], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t43, $t46], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Right")), 2), (await $.mcall((await $.wv([$t43, $t46], "Canvas", C, false)), "TextWidth", ["MT102"]))), $.add((await $.mv((await $.wv([$t43, $t46], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), "MT102"], C)));
          }
        }
      }
    }
    if ($.truthy(($.eq((await $.mv((await $.wv([$t43], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), "FORMAT")))) {
      {
        const $t47 = (await $.mv((await $.wv([$t43], "DBGridOUTArchBatchs", C, false)), "Canvas"));
        await $.stmt((await $.wcall([$t43, $t47], "FillRect", [(await $.wv([$t43, $t47], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false))], C)));
        if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t43, $t47], "DataSource", C, false)), "DataSet")), "FieldByName", ["FORMAT"])), "AsString")), "MT102T")))) {
          await $.mset((await $.wv([$t43, $t47], "Font", C, false)), "Color", (await $.wv([$t43, $t47], "clRed", C, false)));
          await $.stmt((await $.wcall([$t43, $t47], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t43, $t47], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Right")), 2), (await $.mcall((await $.wv([$t43, $t47], "Canvas", C, false)), "TextWidth", ["MT102T"]))), $.add((await $.mv((await $.wv([$t43, $t47], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), "MT102T"], C)));
        } else {
          if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t43, $t47], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
            await $.mset((await $.wv([$t43, $t47], "Font", C, false)), "Color", (await $.wv([$t43, $t47], "clblack", C, false)));
            await $.stmt((await $.wcall([$t43, $t47], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t43, $t47], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Right")), 2), (await $.mcall((await $.wv([$t43, $t47], "Canvas", C, false)), "TextWidth", ["MT102"]))), $.add((await $.mv((await $.wv([$t43, $t47], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), 2), "MT102"], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TMainXohksForm", "GridIncomingTitleClick", async function GridIncomingTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  L0["refreshdataincoming"] = $.fn(async function RefreshDataIncoming() {
  const L1 = {result: undefined};
  await $.mcall((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "Refresh", []);
  return L1.result;
});
  L0["xs_incomingorderby"] = $.fn(async function XS_IncomingOrderBy(p0) {
  const L1 = {"ofields": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["ofields"]);
  await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crSQLWait")));
  try {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "SetVariable", ["Title", L1["ofields"]])));
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "Refresh", []);
  } finally {
    await $.mset((await $.v(C, "screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L1.result;
});
  L0["changetitlecolor"] = $.fn(async function ChangeTitleColor(p0, p1, p2, p3) {
  const L1 = {"grid": $.copyArg(p0), "chcolumn": $.copyArg(p1), "orderingcolor": $.copyArg(p2), "defaulcolor": $.copyArg(p3), result: undefined, "i": 0};
  await $.fixArgs(L1, ["grid", "chcolumn", "orderingcolor", "defaulcolor"]);
  { const $t48 = $.sub((await $.mv((await $.mv(L1["grid"], "Columns")), "Count")), 1);
    L1["i"] = 0;
    let $t49 = true;
    for (;;) {
      if (!$t49) { L1["i"] = $.succ(L1["i"], 1); }
      $t49 = false;
      if (!($.ord(L1["i"]) <= $.ord($t48))) break;
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
      if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "Caption")), "Debet Məbləğ"))) {
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
  U.method("TMainXohksForm", "MenuItem15Click", async function MenuItem15Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "krno_": '', "inn_": '', "kod_b_": '', "dow_s": '', "dow_i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ReportX", (await $.mcall((await $.v(C, "TReportX")), "Create", [Self])));
  {
    const $t50 = (await $.v(C, "ReportX"));
    await $.mset((await $.wv([$t50], "QRDBText1", C, false)), "DataSet", (await $.mv((await $.wv([$t50], "DataModXhoks", C, false)), "XS_BeneficiaryArchive")));
    await $.mset((await $.wv([$t50], "QRDBText1", C, false)), "DataSet", (await $.mv((await $.wv([$t50], "DataModXhoks", C, false)), "XS_BatchsArchive")));
    await $.mset((await $.wv([$t50], "QRDBText2", C, false)), "DataSet", (await $.mv((await $.wv([$t50], "DataModXhoks", C, false)), "XS_BatchsArchive")));
    await $.mset((await $.wv([$t50], "QRDBText5", C, false)), "DataSet", (await $.mv((await $.wv([$t50], "DataModXhoks", C, false)), "XS_BatchsArchive")));
    await $.mset((await $.wv([$t50], "QRDBText6", C, false)), "DataSet", (await $.mv((await $.wv([$t50], "DataModXhoks", C, false)), "XS_BatchsArchive")));
    await $.mset((await $.wv([$t50], "QRDBText8", C, false)), "DataSet", (await $.mv((await $.wv([$t50], "DataModXhoks", C, false)), "XS_BatchsArchive")));
    await $.mset((await $.wv([$t50], "QRDBText18", C, false)), "DataSet", (await $.mv((await $.wv([$t50], "DataModXhoks", C, false)), "XS_BatchsArchive")));
  }
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_BeneficiaryArchive")), "RecordCount")), 0))) {
    {
      const $t51 = (await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report"));
      await $.stmt($.wcall([$t51], "Close", [], C));
      await $.mcall((await $.wv([$t51], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t51], "SQL", C, false)), "Add", [$.add($.add($.add($.add($.add($.add($.add("select a.id, a.batchid, a.rec_bank_id, a.rec_bank_sub_acc,a.client_acc_no, a.client_name,", "a.client_code, a.client_inn,a.remit_inf, a.trans_cod, a.add_inf, a.val_date, a.val_cod,"), "a.mess_reference, a.amount, a.bnfcount, a.status,a.transaction_id, a.userid, bm.swift ,bm.bankcode||'/'||bm.inn as ab,'0'||bm.krno as kr from xs_beneficiary_archive a,"), "xs_batchs_archive b,bankm bm where a.rec_bank_id = bm.id and a.batchid="), (await $.wcall([$t51], "inttostr", [(await $.mv((await $.idx((await $.mv((await $.wv([$t51], "DBGridOUTArchBatchs", C, false)), "Fields")), [0])), "asinteger"))], C))), " group by a.id, a.batchid,a.rec_bank_id, a.rec_bank_sub_acc,a.client_acc_no, a.client_name,a.client_code,"), "a.client_inn,a.remit_inf, a.trans_cod, a.add_inf, a.val_date, a.val_cod,a.mess_reference, a.amount,"), "a.bnfcount,a.status,a.transaction_id, a.userid,bm.swift,bm.krno,bm.inn,bm.bankcode order by a.batchid")])));
      await $.stmt($.wcall([$t51], "Open", [], C));
    }
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select account from xs_config"])));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_52A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_52A_1")), "Caption", $.add("/D/", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["account"])), "AsString"))));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select swift from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_52A_2")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_52A_2")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["swift"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_57A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_57A_1")), "Caption", $.add("/C/0", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "FieldByName", ["REC_BANK_SUB_ACC"])), "AsString"))));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select kod_b,krno,inn,swift from bankinfo"])));
    L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["KRNO"])), "AsString"));
    L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["INN"])), "AsString"));
    L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["KOD_B"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_50K")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_50K")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    if ($.truthy((await $.and_(($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BatchsArchive")), "FieldByName", ["filial"])), "AsInteger")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BatchsArchive")), "FieldByName", ["filial"])), "AsInteger")), (await $.v(C, "null")))))))) {
      await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("Select kod_b,inn from Filialinfo where kod_fil='", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BatchsArchive")), "FieldByName", ["filial"])), "AsString"))), "'")])));
      L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["inn"])), "AsString"));
      L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["kod_B"])), "AsString"));
      await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_50K")), "Caption", "");
      await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_50K")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    }
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "AXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "AXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["SELECT nb_swift FROM xs_config"])));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel8")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel8")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["nb_swift"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel44")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel44")), "Caption", $.add("/BNF/", (await $.call(C, "IntToStr", [(await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_BeneficiaryArchive")), "RecordCount"))]))));
    await $.mcall((await $.mv((await $.v(C, "ReportX")), "QuickRep1")), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "MenuItem1Click", async function MenuItem1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_ADD"]])));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "PrepareTrans", [1, false])));
  await $.stmt($.call(C, "CreateTransCodeTree", []));
  await $.set(C, "new_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["id"])), "AsInteger")));
  await $.set(C, "After_Add", true);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "DataBankInfo")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataBankInfo")), "Open", []);
  }
  {
    const $t52 = (await $.v(C, "FormPayment_Det"));
    await $.mset((await $.wv([$t52], "ButtonFinish", C, false)), "Enabled", (await $.wv([$t52], "true", C, false)));
    await $.mset((await $.wv([$t52], "XFBitBtn4", C, false)), "Enabled", (await $.wv([$t52], "true", C, false)));
    await $.mset((await $.wv([$t52], "SpeedButton2", C, false)), "Enabled", (await $.wv([$t52], "true", C, false)));
    await $.mset((await $.wv([$t52], "Combo_BankName", C, false)), "Enabled", (await $.wv([$t52], "true", C, false)));
    await $.mset((await $.wv([$t52], "XFBitBtn3", C, false)), "Enabled", (await $.wv([$t52], "true", C, false)));
    await $.mset((await $.wv([$t52], "SearchBankM", C, false)), "Enabled", (await $.wv([$t52], "true", C, false)));
    await $.mset((await $.wv([$t52], "Edit_Client_acc_no", C, false)), "Enabled", (await $.wv([$t52], "true", C, false)));
    await $.mset((await $.wv([$t52], "Edit_Client_Name", C, false)), "Enabled", (await $.wv([$t52], "true", C, false)));
    await $.mset((await $.wv([$t52], "Edit_Client_Code", C, false)), "Enabled", (await $.wv([$t52], "true", C, false)));
    await $.mset((await $.wv([$t52], "Edit_Client_Voen", C, false)), "Enabled", (await $.wv([$t52], "true", C, false)));
    await $.mset((await $.wv([$t52], "Edit_tey1", C, false)), "Enabled", (await $.wv([$t52], "true", C, false)));
    await $.mset((await $.wv([$t52], "Edit_tey2", C, false)), "Enabled", (await $.wv([$t52], "true", C, false)));
    await $.mset((await $.wv([$t52], "Edit_tey3", C, false)), "Enabled", (await $.wv([$t52], "true", C, false)));
    await $.mset((await $.wv([$t52], "Edit_tey4", C, false)), "Enabled", (await $.wv([$t52], "true", C, false)));
    await $.mset((await $.wv([$t52], "Edit_inf1", C, false)), "Enabled", (await $.wv([$t52], "true", C, false)));
    await $.mset((await $.wv([$t52], "Edit_inf2", C, false)), "Enabled", (await $.wv([$t52], "true", C, false)));
    await $.mset((await $.wv([$t52], "Edit_inf3", C, false)), "Enabled", (await $.wv([$t52], "true", C, false)));
    await $.mset((await $.wv([$t52], "XFGroupBox8", C, false)), "Enabled", (await $.wv([$t52], "true", C, false)));
    await $.mset((await $.wv([$t52], "Edit_Amount", C, false)), "Enabled", (await $.wv([$t52], "true", C, false)));
    await $.mset((await $.wv([$t52], "SpeedButton1", C, false)), "Enabled", (await $.wv([$t52], "true", C, false)));
    await $.mset((await $.wv([$t52], "Edit_BankName_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t52], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["BANK"])), "AsString")));
    await $.mset((await $.wv([$t52], "Edit_BIK_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t52], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["SWIFT"])), "AsString")));
    await $.mset((await $.wv([$t52], "Edit_BankCode_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t52], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["KOD_B"])), "AsString")));
    await $.mset((await $.wv([$t52], "Edit_account_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t52], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["KRNO"])), "AsString")));
    await $.mset((await $.wv([$t52], "Edit_Voen_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t52], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["INN"])), "AsString")));
    await $.mset((await $.wv([$t52], "Combo_Valute", C, false)), "ItemIndex", (await $.mcall((await $.mv((await $.wv([$t52], "Combo_Valute", C, false)), "Items")), "IndexOf", ["AZM"])));
    await $.mset((await $.wv([$t52], "Edit_account_sub_Self", C, false)), "Text", (await $.mv((await $.mv((await $.wv([$t52], "FormXohks", C, false)), "Edit_account_sub")), "text")));
    await $.mset((await $.wv([$t52], "Combo_BankName", C, false)), "ItemIndex", (-(1)));
    await $.mcall((await $.wv([$t52], "Edit_BIK", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t52], "Edit_BankCode", C, false)), "clear", []);
    await $.mcall((await $.wv([$t52], "Edit_Referens", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t52], "Edit_account", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t52], "Edit_Voen", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t52], "Edit_Amount", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t52], "Edit_Account_Sub", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t52], "Edit_TransCode", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t52], "Edit_Client_Name", C, false)), "Clear", []);
    await $.mset((await $.wv([$t52], "Edit_Client_Code", C, false)), "Text", "/");
    await $.mcall((await $.wv([$t52], "Edit_Client_acc_no", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t52], "Edit_Client_Voen", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t52], "Edit_inf1", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t52], "Edit_inf2", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t52], "Edit_inf3", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t52], "Edit_tey1", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t52], "Edit_tey2", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t52], "Edit_tey3", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t52], "Edit_tey4", C, false)), "Clear", []);
    await $.mset((await $.wv([$t52], "Combo_Valute", C, false)), "ItemIndex", 0);
    await $.mset((await $.wv([$t52], "ButtonFinish", C, false)), "Enabled", (await $.wv([$t52], "True", C, false)));
    await $.mcall((await $.wv([$t52], "FormPayment_Det", C, false)), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "MenuItem2Click", async function MenuItem2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_DELETE"]])));
  await $.mcall((await $.v(C, "GridBeneficiary")), "SetFocus", []);
  await $.mset((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "CurrentRowSelected", $.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "RecordCount")), 0));
  { const $t53 = $.sub((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Count")), 1);
    L0["i"] = 0;
    let $t54 = true;
    for (;;) {
      if (!$t54) { L0["i"] = $.succ(L0["i"], 1); }
      $t54 = false;
      if (!($.ord(L0["i"]) <= $.ord($t53))) break;
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "items")), [L0["i"]]))]))])));
      { const $t55 = (await $.call(C, "MessageDlg", [$.add($.add("Əməliyyat #", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "fieldbyname", ["id"])), "AsString"))), " silinsinmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno")), (await $.v(C, "mbcancel")), (await $.v(C, "mball"))], 0]));
        if ($.eq($t55, (await $.v(C, "mryes")))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DEL")), "CallProcedure", ["xs_beneficiary_delete", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "INS")), "Callprocedure", ["xs_BatchAmount_update", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["ID"])), "asinteger"))]])));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "Ins")), "callintegerfunction", ["xs_Batchs_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
          await $.mcall((await $.v(C, "MainXohksForm")), "RefreshDataBatchs", []);
        }
        else if ($.eq($t55, (await $.v(C, "mrno")))) {
          return L0.result;
        }
        else if ($.eq($t55, (await $.v(C, "mrcancel")))) {
          break;
        }
        else if ($.eq($t55, (await $.v(C, "mrall")))) {
          { const $t56 = (await $.call(C, "MessageDlg", [$.add((await $.call(C, "inttostr", [(await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Count"))])), " sayda əməliyyat silinsinmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0]));
            if ($.eq($t56, (await $.v(C, "mryes")))) {
              { const $t57 = $.sub((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Count")), 1);
                L0["j"] = 0;
                let $t58 = true;
                for (;;) {
                  if (!$t58) { L0["j"] = $.succ(L0["j"], 1); }
                  $t58 = false;
                  if (!($.ord(L0["j"]) <= $.ord($t57))) break;
                  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "items")), [L0["j"]]))]))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DEL")), "CallProcedure", ["xs_beneficiary_delete", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
                  await $.tick();
                }
              }
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "INS")), "Callprocedure", ["xs_BatchAmount_update", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["ID"])), "asinteger"))]])));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "Ins")), "callintegerfunction", ["xs_Batchs_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
              await $.mcall((await $.v(C, "MainXohksForm")), "RefreshDataBatchs", []);
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
  U.method("TMainXohksForm", "MenuItem4Click", async function MenuItem4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_((await $.or_(($.eq((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "RecordCount")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "fieldbyname", ["status"])), "AsInteger")), 0)))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["status"])), "AsInteger")), 2)))))) {
    return L0.result;
  }
  await $.mset((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "CurrentRowSelected", $.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "RecordCount")), 0));
  { const $t59 = $.sub((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Count")), 1);
    L0["i"] = 0;
    let $t60 = true;
    for (;;) {
      if (!$t60) { L0["i"] = $.succ(L0["i"], 1); }
      $t60 = false;
      if (!($.ord(L0["i"]) <= $.ord($t59))) break;
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "items")), [L0["i"]]))]))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "Ins")), "callprocedure", ["xs_beneficiary_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "fieldbyname", ["ID"])), "ASinteger")), 1]])));
      await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "RefreshRecord", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "MenuItem5Click", async function MenuItem5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_CONFIG")), "Refresh", []);
  await $.stmt((await $.call(C, "LoadFileNames", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_CONFIG")), "fieldbyname", ["in_dir"])), "AsString"))])));
  await $.mcall((await $.v(C, "FileListIncoming")), "Update", []);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "MessAcceptButtonClick", async function MessAcceptButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_((await $.or_(($.eq((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "RecordCount")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "fieldbyname", ["status"])), "AsInteger")), 0)))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["status"])), "AsInteger")), 2)))))) {
    return L0.result;
  }
  await $.mset((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "CurrentRowSelected", $.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "RecordCount")), 0));
  { const $t61 = $.sub((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Count")), 1);
    L0["i"] = 0;
    let $t62 = true;
    for (;;) {
      if (!$t62) { L0["i"] = $.succ(L0["i"], 1); }
      $t62 = false;
      if (!($.ord(L0["i"]) <= $.ord($t61))) break;
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "items")), [L0["i"]]))]))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "Ins")), "callprocedure", ["xs_beneficiary_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "fieldbyname", ["ID"])), "ASinteger")), 1]])));
      await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "RefreshRecord", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "MessageOutSelAllExecute", async function MessageOutSelAllExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t63 = (await $.v(C, "GridBeneficiary"));
    const $t64 = (await $.wv([$t63], "SelectedRows", C, false));
    const $t65 = (await $.mv((await $.wv([$t63, $t64], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t63, $t64, $t65], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t63, $t64, $t65], "First", [], C));
      while ($.truthy($.not((await $.wv([$t63, $t64, $t65], "Eof", C, false))))) {
        await $.wset([$t63, $t64, $t65], "CurrentRowSelected", (await $.wv([$t63, $t64, $t65], "True", C, false)), C);
        await $.stmt($.wcall([$t63, $t64, $t65], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t63, $t64, $t65], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "MessagesInAcceptExecute", async function MessagesInAcceptExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "s": 0, "f": 0, "filial": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "DataSource")), "DataSet")), "RecordCount")), 0)))) {
    return L0.result;
  }
  await $.mset((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "CurrentRowSelected", $.gt((await $.mv((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "DataSource")), "DataSet")), "RecordCount")), 0));
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "fieldbyname", ["trans_date"])), "AsDateTime")), (await $.v(C, "GetUseDate")))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "fieldbyname", ["trans_date"])), "AsDateTime")), (await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "GetSysDate")), "CallDateFunction", ["Get_Date", []])))))))) {
    await $.stmt((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["Əməliyyat #%d Dəyişdirilə bilməz!", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "fieldbyname", ["id"])), "AsInteger"))]])), (await $.v(C, "mtWarning")), [(await $.v(C, "mbOk"))], 0])));
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_IN"]])));
  if ($.truthy((await $.and_((await $.mv((await $.v(C, "XFCheckBox1")), "Checked")), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), 900)))))) {
    L0["f"] = (await $.mv((await $.idx((await $.mv((await $.v(C, "GridIncoming")), "Fields")), [4])), "asinteger"));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "Ins")), "CallProcedure", ["set_incomingSum", [(await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (await $.call(C, "inttostr", [L0["f"]]))]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "Ins")), "CallProcedure", ["set_incomingSumCod", [(await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"))]])));
  } else {
    { const $t66 = $.sub((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "Count")), 1);
      L0["i"] = 0;
      let $t67 = true;
      for (;;) {
        if (!$t67) { L0["i"] = $.succ(L0["i"], 1); }
        $t67 = false;
        if (!($.ord(L0["i"]) <= $.ord($t66))) break;
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "FieldByName", ["status"])), "AsInteger")), 1))) {
          continue;
        }
        await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "items")), [L0["i"]]))]))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "Ins")), "callprocedure", ["SetIncomingTransaction", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "fieldbyname", ["ID"])), "ASinteger"))]])));
        await $.tick();
      }
    }
  }
  await $.mcall((await $.v(C, "FileListIncoming")), "Update", []);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "MessagesInEditExecute", async function MessagesInEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "RecordCount")), 0))) {
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "DataAccount")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataAccount")), "Open", []);
  }
  await $.mcall((await $.v(C, "RecMessDet_form")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "MessagesInRefreshExecute", async function MessagesInRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_CONFIG")), "Refresh", []);
  await $.stmt((await $.call(C, "LoadFileNames", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_CONFIG")), "fieldbyname", ["in_dir"])), "AsString"))])));
  await $.mcall((await $.v(C, "FileListIncoming")), "Update", []);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "MessagesOutAcceptExecute", async function MessagesOutAcceptExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_((await $.or_(($.eq((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "RecordCount")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "fieldbyname", ["status"])), "AsInteger")), 0)))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["status"])), "AsInteger")), 2)))))) {
    return L0.result;
  }
  await $.mset((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "CurrentRowSelected", $.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "RecordCount")), 0));
  { const $t68 = $.sub((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Count")), 1);
    L0["i"] = 0;
    let $t69 = true;
    for (;;) {
      if (!$t69) { L0["i"] = $.succ(L0["i"], 1); }
      $t69 = false;
      if (!($.ord(L0["i"]) <= $.ord($t68))) break;
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "items")), [L0["i"]]))]))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "Ins")), "callprocedure", ["xs_beneficiary_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "fieldbyname", ["ID"])), "ASinteger")), 1]])));
      await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "RefreshRecord", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "MessagesOutAddExecute", async function MessagesOutAddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_ADD"]])));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "PrepareTrans", [1, false])));
  await $.stmt($.call(C, "CreateTransCodeTree", []));
  await $.set(C, "new_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["id"])), "AsInteger")));
  await $.set(C, "After_Add", true);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "DataBankInfo")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataBankInfo")), "Open", []);
  }
  {
    const $t70 = (await $.v(C, "FormPayment_Det"));
    await $.mset((await $.wv([$t70], "ButtonFinish", C, false)), "Enabled", (await $.wv([$t70], "true", C, false)));
    await $.mset((await $.wv([$t70], "XFBitBtn4", C, false)), "Enabled", (await $.wv([$t70], "true", C, false)));
    await $.mset((await $.wv([$t70], "SpeedButton2", C, false)), "Enabled", (await $.wv([$t70], "true", C, false)));
    await $.mset((await $.wv([$t70], "Combo_BankName", C, false)), "Enabled", (await $.wv([$t70], "true", C, false)));
    await $.mset((await $.wv([$t70], "XFBitBtn3", C, false)), "Enabled", (await $.wv([$t70], "true", C, false)));
    await $.mset((await $.wv([$t70], "SearchBankM", C, false)), "Enabled", (await $.wv([$t70], "true", C, false)));
    await $.mset((await $.wv([$t70], "Edit_Client_acc_no", C, false)), "Enabled", (await $.wv([$t70], "true", C, false)));
    await $.mset((await $.wv([$t70], "Edit_Client_Name", C, false)), "Enabled", (await $.wv([$t70], "true", C, false)));
    await $.mset((await $.wv([$t70], "Edit_Client_Code", C, false)), "Enabled", (await $.wv([$t70], "true", C, false)));
    await $.mset((await $.wv([$t70], "Edit_Client_Voen", C, false)), "Enabled", (await $.wv([$t70], "true", C, false)));
    await $.mset((await $.wv([$t70], "Edit_tey1", C, false)), "Enabled", (await $.wv([$t70], "true", C, false)));
    await $.mset((await $.wv([$t70], "Edit_tey2", C, false)), "Enabled", (await $.wv([$t70], "true", C, false)));
    await $.mset((await $.wv([$t70], "Edit_tey3", C, false)), "Enabled", (await $.wv([$t70], "true", C, false)));
    await $.mset((await $.wv([$t70], "Edit_tey4", C, false)), "Enabled", (await $.wv([$t70], "true", C, false)));
    await $.mset((await $.wv([$t70], "Edit_inf1", C, false)), "Enabled", (await $.wv([$t70], "true", C, false)));
    await $.mset((await $.wv([$t70], "Edit_inf2", C, false)), "Enabled", (await $.wv([$t70], "true", C, false)));
    await $.mset((await $.wv([$t70], "Edit_inf3", C, false)), "Enabled", (await $.wv([$t70], "true", C, false)));
    await $.mset((await $.wv([$t70], "XFGroupBox8", C, false)), "Enabled", (await $.wv([$t70], "true", C, false)));
    await $.mset((await $.wv([$t70], "Edit_Amount", C, false)), "Enabled", (await $.wv([$t70], "true", C, false)));
    await $.mset((await $.wv([$t70], "SpeedButton1", C, false)), "Enabled", (await $.wv([$t70], "true", C, false)));
    await $.mset((await $.wv([$t70], "Edit_BankName_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t70], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["BANK"])), "AsString")));
    await $.mset((await $.wv([$t70], "Edit_BIK_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t70], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["SWIFT"])), "AsString")));
    await $.mset((await $.wv([$t70], "Edit_BankCode_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t70], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["KOD_B"])), "AsString")));
    await $.mset((await $.wv([$t70], "Edit_account_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t70], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["KRNO"])), "AsString")));
    await $.mset((await $.wv([$t70], "Edit_Voen_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t70], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["INN"])), "AsString")));
    await $.mset((await $.wv([$t70], "Combo_Valute", C, false)), "ItemIndex", (await $.mcall((await $.mv((await $.wv([$t70], "Combo_Valute", C, false)), "Items")), "IndexOf", ["AZM"])));
    await $.mset((await $.wv([$t70], "Edit_account_sub_Self", C, false)), "Text", (await $.mv((await $.mv((await $.wv([$t70], "FormXohks", C, false)), "Edit_account_sub")), "text")));
    await $.mset((await $.wv([$t70], "Combo_BankName", C, false)), "ItemIndex", (-(1)));
    await $.mcall((await $.wv([$t70], "Edit_BIK", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t70], "Edit_BankCode", C, false)), "clear", []);
    await $.mcall((await $.wv([$t70], "Edit_Referens", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t70], "Edit_account", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t70], "Edit_Voen", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t70], "Edit_Amount", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t70], "Edit_Account_Sub", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t70], "Edit_TransCode", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t70], "Edit_Client_Name", C, false)), "Clear", []);
    await $.mset((await $.wv([$t70], "Edit_Client_Code", C, false)), "Text", "/");
    await $.mcall((await $.wv([$t70], "Edit_Client_acc_no", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t70], "Edit_Client_Voen", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t70], "Edit_inf1", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t70], "Edit_inf2", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t70], "Edit_inf3", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t70], "Edit_tey1", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t70], "Edit_tey2", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t70], "Edit_tey3", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t70], "Edit_tey4", C, false)), "Clear", []);
    await $.mset((await $.wv([$t70], "Combo_Valute", C, false)), "ItemIndex", 0);
    await $.mset((await $.wv([$t70], "ButtonFinish", C, false)), "Enabled", (await $.wv([$t70], "True", C, false)));
    await $.stmt($.wcall([$t70], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "MessagesOutEditExecute", async function MessagesOutEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_EDIT"]])));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.stmt($.call(C, "ShowDetals", []));
  await $.mset((await $.mv((await $.v(C, "FormPayment_Det")), "ButtonFinish")), "Enabled", false);
  await $.mcall((await $.v(C, "FormPayment_Det")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "MessOutDeleteExecute", async function MessOutDeleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_DELETE"]])));
  await $.mcall((await $.v(C, "GridBeneficiary")), "SetFocus", []);
  await $.mset((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "CurrentRowSelected", $.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "RecordCount")), 0));
  { const $t71 = $.sub((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Count")), 1);
    L0["i"] = 0;
    let $t72 = true;
    for (;;) {
      if (!$t72) { L0["i"] = $.succ(L0["i"], 1); }
      $t72 = false;
      if (!($.ord(L0["i"]) <= $.ord($t71))) break;
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "items")), [L0["i"]]))]))])));
      { const $t73 = (await $.call(C, "MessageDlg", [$.add($.add("Əməliyyat #", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "fieldbyname", ["id"])), "AsString"))), " silinsinmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno")), (await $.v(C, "mbcancel")), (await $.v(C, "mball"))], 0]));
        if ($.eq($t73, (await $.v(C, "mryes")))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DEL")), "CallProcedure", ["xs_beneficiary_delete", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "INS")), "Callprocedure", ["xs_BatchAmount_update", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["ID"])), "asinteger"))]])));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "Ins")), "callintegerfunction", ["xs_Batchs_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
          await $.mcall((await $.v(C, "MainXohksForm")), "RefreshDataBatchs", []);
        }
        else if ($.eq($t73, (await $.v(C, "mrno")))) {
          return L0.result;
        }
        else if ($.eq($t73, (await $.v(C, "mrcancel")))) {
          break;
        }
        else if ($.eq($t73, (await $.v(C, "mrall")))) {
          { const $t74 = (await $.call(C, "MessageDlg", [$.add((await $.call(C, "inttostr", [(await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Count"))])), " sayda əməliyyat silinsinmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0]));
            if ($.eq($t74, (await $.v(C, "mryes")))) {
              { const $t75 = $.sub((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Count")), 1);
                L0["j"] = 0;
                let $t76 = true;
                for (;;) {
                  if (!$t76) { L0["j"] = $.succ(L0["j"], 1); }
                  $t76 = false;
                  if (!($.ord(L0["j"]) <= $.ord($t75))) break;
                  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "items")), [L0["j"]]))]))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DEL")), "CallProcedure", ["xs_beneficiary_delete", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
                  await $.tick();
                }
              }
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "INS")), "Callprocedure", ["xs_BatchAmount_update", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["ID"])), "asinteger"))]])));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "Ins")), "callintegerfunction", ["xs_Batchs_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
              await $.mcall((await $.v(C, "MainXohksForm")), "RefreshDataBatchs", []);
              break;
            }
            else if ($.eq($t74, (await $.v(C, "mrno")))) {
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
  U.method("TMainXohksForm", "Mt102AcceptExecute", async function Mt102AcceptExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_COMMIT"]])));
  if ($.truthy((await $.or_((await $.or_(($.eq((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "RecordCount")), 0)), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "RecordCount")), 0)))), async () => (await $.and_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["status"])), "AsInteger")), (await $.v(C, "msDefault")))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["status"])), "AsInteger")), (await $.v(C, "msFileCreated")))))))))) {
    return L0.result;
  }
  await $.mset((await $.mv((await $.v(C, "GridBatchs")), "SelectedRows")), "CurrentRowSelected", $.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "DataSource")), "DataSet")), "RecordCount")), 0));
  if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["status"])), "AsInteger")), (await $.v(C, "msFileCreated")))))) {
    if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FormAcceptTransaction"))]))))) {
      await $.set(C, "FormAcceptTransaction", (await $.mcall((await $.v(C, "TFormAcceptTransaction")), "Create", [Self])));
    } else {
      await $.stmt((await $.call(C, "ShowMessage", ["Created"])));
    }
    await $.set(C, "AcceptTransForCreated", false);
    {
      const $t77 = (await $.v(C, "FormAcceptTransaction"));
      await $.mset((await $.wv([$t77], "CheckBox1", C, false)), "Checked", (await $.wv([$t77], "True", C, false)));
      await $.mset((await $.wv([$t77], "CheckBox2", C, false)), "Checked", (await $.wv([$t77], "True", C, false)));
      await $.mset((await $.wv([$t77], "GroupBox1", C, false)), "Enabled", (await $.wv([$t77], "True", C, false)));
      await $.mset((await $.wv([$t77], "Edit_Referens", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t77], "DataModXhoks", C, false)), "XS_BATCHS")), "fieldbyname", ["trans_ref"])), "AsString")));
    }
    await $.mcall((await $.v(C, "FormAcceptTransaction")), "ShowModal", []);
    await $.mcall((await $.v(C, "FormAcceptTransaction")), "Release", []);
    await $.set(C, "FormAcceptTransaction", null);
    if ($.truthy($.not((await $.v(C, "AcceptTransForCreated"))))) {
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "Ins")), "CallIntegerFunction", ["xs_Batchs_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 1]])), 1))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "Ins")), "CallProcedure", ["SetBatchsTransaction", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 1]])));
    await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "RefreshRecord", []);
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "Refresh", []);
  } else {
    await $.stmt((await $.call(C, "MessageDlg", ["Batch-da olan butun messaglarin duzgunluyu testiq olunmalidi !", (await $.v(C, "mtWarning")), [(await $.v(C, "mbOk"))], 0])));
  }
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "MT102DeleteExecute", async function MT102DeleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_DELETE"]])));
  await $.mcall((await $.v(C, "GridBatchs")), "SetFocus", []);
  await $.mset((await $.mv((await $.v(C, "GridBatchs")), "SelectedRows")), "CurrentRowSelected", $.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "DataSource")), "DataSet")), "RecordCount")), 0));
  { const $t78 = $.sub((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "SelectedRows")), "Count")), 1);
    L0["i"] = 0;
    let $t79 = true;
    for (;;) {
      if (!$t79) { L0["i"] = $.succ(L0["i"], 1); }
      $t79 = false;
      if (!($.ord(L0["i"]) <= $.ord($t78))) break;
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "SelectedRows")), "items")), [L0["i"]]))]))])));
      { const $t80 = (await $.call(C, "MessageDlg", [$.add($.add("Eməliyyat grupu #", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["id"])), "AsString"))), " silinsinmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno")), (await $.v(C, "mbcancel")), (await $.v(C, "mball"))], 0]));
        if ($.eq($t80, (await $.v(C, "mryes")))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DEL")), "CallProcedure", ["xs_batchs_delete", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
          await $.stmt($.call(C, "RefreshDataBatchs", []));
        }
        else if ($.eq($t80, (await $.v(C, "mrno")))) {
          return L0.result;
        }
        else if ($.eq($t80, (await $.v(C, "mrcancel")))) {
          break;
        }
        else if ($.eq($t80, (await $.v(C, "mrall")))) {
          { const $t81 = (await $.call(C, "MessageDlg", [$.add((await $.call(C, "inttostr", [(await $.mv((await $.mv((await $.v(C, "GridBatchs")), "SelectedRows")), "Count"))])), " sayda əməliyyat silinsinmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0]));
            if ($.eq($t81, (await $.v(C, "mryes")))) {
              { const $t82 = $.sub((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "SelectedRows")), "Count")), 1);
                L0["j"] = 0;
                let $t83 = true;
                for (;;) {
                  if (!$t83) { L0["j"] = $.succ(L0["j"], 1); }
                  $t83 = false;
                  if (!($.ord(L0["j"]) <= $.ord($t82))) break;
                  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "SelectedRows")), "items")), [L0["j"]]))]))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DEL")), "CallProcedure", ["xs_batchs_delete", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
                  await $.tick();
                }
              }
              await $.stmt($.call(C, "RefreshDataBatchs", []));
              break;
            }
            else if ($.eq($t81, (await $.v(C, "mrno")))) {
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
  U.method("TMainXohksForm", "Mt102EditExecute", async function Mt102EditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_EDIT"]])));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "preparetrans", [0, true])));
  await $.mcall((await $.v(C, "FormXohks")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "Mt102InsertExecute", async function Mt102InsertExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_ADD"]])));
  await $.stmt((await $.call(C, "preparetrans", [0, false])));
  await $.stmt($.call(C, "createTransCodeTree", []));
  await $.set(C, "after_add", false);
  await $.set(C, "mess_edit", false);
  await $.set(C, "new_id", (await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "INS")), "Callintegerfunction", ["XS_BATCHS_insert", ["CREDIT", 0, (await $.mv((await $.mv((await $.v(C, "FormXohks")), "edit_clientname")), "text")), (await $.mv((await $.mv((await $.v(C, "FormXohks")), "edit_client_code")), "text")), (await $.mv((await $.mv((await $.v(C, "FormXohks")), "edit_referens")), "text")), (await $.call(C, "strtofloat", [(await $.mv((await $.mv((await $.v(C, "FormXohks")), "edit_amount")), "Text"))])), (await $.call(C, "strtofloat", [(await $.idx((await $.mv((await $.mv((await $.v(C, "FormXohks")), "valute_id")), "items")), [(await $.mv((await $.mv((await $.v(C, "FormXohks")), "combo_valute")), "itemindex"))]))])), 0]])));
  await $.mcall((await $.v(C, "FormXohks")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "Mt102RefreshExecute", async function Mt102RefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "RefreshDataBatchs", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "Open____ODS_Report_Temp____Add_SQL", async function Open____ODS_Report_Temp____Add_SQL(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sql_label": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sql_label"]);
  if ($.truthy($.ne(L0["sql_label"], ""))) {
    {
      const $t84 = (await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp"));
      await $.stmt($.wcall([$t84], "Close", [], C));
      await $.mcall((await $.wv([$t84], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t84], "SQL", C, false)), "Add", [(await $.wv([$t84], "SQL_Label", { get: async () => L0["sql_label"], set: async (v) => { L0["sql_label"] = v; }, local: true }, false))])));
      await $.stmt($.wcall([$t84], "Open", [], C));
    }
  }
  return L0.result;
}, {"params": ["SQL_Label"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TMainXohksForm", "Print1Click", async function Print1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "krno_": '', "inn_": '', "kod_b_": '', "dow_s": '', "dow_i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Form_Report", (await $.mcall((await $.v(C, "TForm_Report")), "Create", [Self])));
  {
    const $t85 = (await $.v(C, "Form_Report"));
    await $.mset((await $.wv([$t85], "QuickRep1", C, false)), "DataSet", (await $.mv((await $.wv([$t85], "DataModXhoks", C, false)), "XS_BeneficiaryArchive")));
    await $.mset((await $.wv([$t85], "QRDBText1", C, false)), "DataSet", (await $.mv((await $.wv([$t85], "DataModXhoks", C, false)), "XS_BatchsArchive")));
    await $.mset((await $.wv([$t85], "QRDBText2", C, false)), "DataSet", (await $.mv((await $.wv([$t85], "DataModXhoks", C, false)), "XS_BatchsArchive")));
    await $.mset((await $.wv([$t85], "QRDBText5", C, false)), "DataSet", (await $.mv((await $.wv([$t85], "DataModXhoks", C, false)), "XS_BatchsArchive")));
    await $.mset((await $.wv([$t85], "QRDBText6", C, false)), "DataSet", (await $.mv((await $.wv([$t85], "DataModXhoks", C, false)), "XS_BatchsArchive")));
    await $.mset((await $.wv([$t85], "QRDBText8", C, false)), "DataSet", (await $.mv((await $.wv([$t85], "DataModXhoks", C, false)), "XS_BatchsArchive")));
    await $.mset((await $.wv([$t85], "QRDBText18", C, false)), "DataSet", (await $.mv((await $.wv([$t85], "DataModXhoks", C, false)), "XS_BatchsArchive")));
  }
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_BeneficiaryArchive")), "RecordCount")), 0))) {
    {
      const $t86 = (await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report"));
      await $.stmt($.wcall([$t86], "Close", [], C));
      await $.mcall((await $.wv([$t86], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t86], "SQL", C, false)), "Add", [$.add("select * from XS_BENEFICIARY_ARCHIVE where ID=", (await $.wcall([$t86], "IntToStr", [(await $.mv((await $.idx((await $.mv((await $.wv([$t86], "DBGridOUTArchBeneficiary", C, false)), "Fields")), [0])), "AsInteger"))], C)))])));
      await $.stmt($.wcall([$t86], "Open", [], C));
    }
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select account from xs_config"])));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_52A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_52A_1")), "Caption", $.add("/D/", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["account"])), "AsString"))));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select swift from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_52A_2")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_52A_2")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["swift"])), "AsString")));
    L0["dow_s"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "FieldByName", ["REMIT_INF"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_report")), "QRL_70_70")), "Caption", " ");
    await $.mset((await $.mv((await $.v(C, "Form_report")), "QRL_70_140")), "Caption", " ");
    await $.mset((await $.mv((await $.v(C, "Form_report")), "QRL_70_210")), "Caption", " ");
    L0["dow_i"] = 0;
    do {
      L0["dow_i"] = $.add(L0["dow_i"], 70);
      {
        const $t87 = (await $.v(C, "Form_report"));
        await $.mset((await $.wcall([$t87], "TQRLabel", [(await $.wcall([$t87], "FindComponent", [$.add("QRL_70_", (await $.wcall([$t87], "IntToStr", [(await $.wv([$t87], "Dow_i", { get: async () => L0["dow_i"], set: async (v) => { L0["dow_i"] = v; }, local: true }, false))], C)))], C))], C)), "Caption", (await $.wcall([$t87], "copy", [(await $.wv([$t87], "Dow_s", { get: async () => L0["dow_s"], set: async (v) => { L0["dow_s"] = v; }, local: true }, false)), $.sub((await $.wv([$t87], "Dow_i", { get: async () => L0["dow_i"], set: async (v) => { L0["dow_i"] = v; }, local: true }, false)), 69), 70], C)));
      }
      await $.tick();
    } while (!$.truthy($.gt(L0["dow_i"], (await $.call(C, "length", [L0["dow_s"]])))));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_57A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_57A_1")), "Caption", $.add("/C/0", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "FieldByName", ["REC_BANK_SUB_ACC"])), "AsString"))));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("Select swift from bankm where id='", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "fieldbyname", ["REC_BANK_ID"])), "AsString"))), "'")])));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_57A_2")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_57A_2")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["swift"])), "AsString")));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select kod_b,krno,inn,swift from bankinfo"])));
    L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["KRNO"])), "AsString"));
    L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["INN"])), "AsString"));
    L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["KOD_B"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_50K")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_50K")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    if ($.truthy((await $.and_(($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BatchsArchive")), "FieldByName", ["filial"])), "AsInteger")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BatchsArchive")), "FieldByName", ["filial"])), "AsInteger")), (await $.v(C, "null")))))))) {
      await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("Select kod_bFil,inn_Fil from Filialinfo where kod_fil='", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "xs_batchs")), "FieldByName", ["filial"])), "AsString"))), "'")])));
      L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["inn_Fil"])), "AsString"));
      L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["kod_bFil"])), "AsString"));
      await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_50K")), "Caption", "");
      await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_50K")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    }
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("Select krno,inn,bankcode from bankm where id='", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "fieldbyname", ["REC_BANK_ID"])), "AsString"))), "'")])));
    L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["KRNO"])), "AsString"));
    L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["INN"])), "AsString"));
    L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["bankcode"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_59")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_59")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "AXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "AXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["SELECT nb_swift FROM xs_config"])));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel8")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel8")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["nb_swift"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel44")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel44")), "Caption", $.add("/BNF/", (await $.call(C, "IntToStr", [(await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_BeneficiaryArchive")), "RecordCount"))]))));
    await $.mcall((await $.mv((await $.v(C, "form_report")), "QuickRep1")), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "N10Click", async function N10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "First", []);
  await $.mcall((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "N11Click", async function N11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "Last", []);
  await $.mcall((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "N21Click", async function N21Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "krno_": '', "inn_": '', "kod_b_": '', "dow_s": '', "dow_i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Form_Report", (await $.mcall((await $.v(C, "TForm_Report")), "Create", [Self])));
  {
    const $t88 = (await $.v(C, "Form_Report"));
    await $.mset((await $.wv([$t88], "QuickRep1", C, false)), "DataSet", (await $.mv((await $.wv([$t88], "DataModXhoks", C, false)), "XS_Beneficiary")));
    await $.mset((await $.wv([$t88], "QRDBText1", C, false)), "DataSet", (await $.mv((await $.wv([$t88], "DataModXhoks", C, false)), "XS_Batchs")));
    await $.mset((await $.wv([$t88], "QRDBText2", C, false)), "DataSet", (await $.mv((await $.wv([$t88], "DataModXhoks", C, false)), "XS_Batchs")));
    await $.mset((await $.wv([$t88], "QRDBText5", C, false)), "DataSet", (await $.mv((await $.wv([$t88], "DataModXhoks", C, false)), "XS_Batchs")));
    await $.mset((await $.wv([$t88], "QRDBText6", C, false)), "DataSet", (await $.mv((await $.wv([$t88], "DataModXhoks", C, false)), "XS_Batchs")));
    await $.mset((await $.wv([$t88], "QRDBText8", C, false)), "DataSet", (await $.mv((await $.wv([$t88], "DataModXhoks", C, false)), "XS_Batchs")));
  }
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "RecordCount")), 0))) {
    {
      const $t89 = (await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report"));
      await $.stmt($.wcall([$t89], "Close", [], C));
      await $.mcall((await $.wv([$t89], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t89], "SQL", C, false)), "Add", [$.add("select * from xs_beneficiary where id=", (await $.wcall([$t89], "inttostr", [(await $.mv((await $.idx((await $.mv((await $.wv([$t89], "GridBeneficiary", C, false)), "Fields")), [0])), "asinteger"))], C)))])));
      await $.stmt($.wcall([$t89], "Open", [], C));
    }
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select account from xs_config"])));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_52A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_52A_1")), "Caption", $.add("/D/", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["account"])), "AsString"))));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select swift from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_52A_2")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_52A_2")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["swift"])), "AsString")));
    L0["dow_s"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "FieldByName", ["REMIT_INF"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_report")), "QRL_70_70")), "Caption", " ");
    await $.mset((await $.mv((await $.v(C, "Form_report")), "QRL_70_140")), "Caption", " ");
    await $.mset((await $.mv((await $.v(C, "Form_report")), "QRL_70_210")), "Caption", " ");
    L0["dow_i"] = 0;
    do {
      L0["dow_i"] = $.add(L0["dow_i"], 70);
      {
        const $t90 = (await $.v(C, "Form_report"));
        await $.mset((await $.wcall([$t90], "TQRLabel", [(await $.wcall([$t90], "FindComponent", [$.add("QRL_70_", (await $.wcall([$t90], "IntToStr", [(await $.wv([$t90], "Dow_i", { get: async () => L0["dow_i"], set: async (v) => { L0["dow_i"] = v; }, local: true }, false))], C)))], C))], C)), "Caption", (await $.wcall([$t90], "copy", [(await $.wv([$t90], "Dow_s", { get: async () => L0["dow_s"], set: async (v) => { L0["dow_s"] = v; }, local: true }, false)), $.sub((await $.wv([$t90], "Dow_i", { get: async () => L0["dow_i"], set: async (v) => { L0["dow_i"] = v; }, local: true }, false)), 69), 70], C)));
      }
      await $.tick();
    } while (!$.truthy($.gt(L0["dow_i"], (await $.call(C, "length", [L0["dow_s"]])))));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_57A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_57A_1")), "Caption", $.add("/C/0", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "FieldByName", ["REC_BANK_SUB_ACC"])), "AsString"))));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("Select swift from bankm where id='", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "fieldbyname", ["REC_BANK_ID"])), "AsString"))), "'")])));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_57A_2")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_57A_2")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["swift"])), "AsString")));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select kod_b,krno,inn,swift from bankinfo"])));
    L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["KRNO"])), "AsString"));
    L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["INN"])), "AsString"));
    L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["KOD_B"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_50K")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_50K")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    if ($.truthy((await $.and_(($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "xs_batchs")), "FieldByName", ["filial"])), "AsInteger")), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "xs_batchs")), "FieldByName", ["filial"])), "AsInteger")), (await $.v(C, "null")))))))) {
      await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("Select kod_bFil,inn_Fil from Filialinfo where kod_fil='", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "xs_batchs")), "FieldByName", ["filial"])), "AsString"))), "'")])));
      L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["inn_Fil"])), "AsString"));
      L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["kod_bFil"])), "AsString"));
      await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_50K")), "Caption", "");
      await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_50K")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    }
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("Select krno,inn,bankcode from bankm where id='", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "fieldbyname", ["REC_BANK_ID"])), "AsString"))), "'")])));
    L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["KRNO"])), "AsString"));
    L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["INN"])), "AsString"));
    L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["bankcode"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_59")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRL_59")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "AXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "AXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["SELECT nb_swift FROM xs_config"])));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel8")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel8")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["nb_swift"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel44")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_Report")), "QRLabel44")), "Caption", $.add("/BNF/", (await $.call(C, "IntToStr", [(await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "RecordCount"))]))));
    await $.mcall((await $.mv((await $.v(C, "form_report")), "QuickRep1")), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "N22Click", async function N22Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "krno_": '', "inn_": '', "kod_b_": '', "dow_i": 0, "dow_s": '', "tdate": 0, "tcode": 0, "tnameid": 0, "treference": '', "tfilial": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "RecordCount")), 0))) {
    {
      const $t91 = (await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report"));
      await $.stmt($.wcall([$t91], "Close", [], C));
      await $.mcall((await $.wv([$t91], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t91], "SQL", C, false)), "Add", [$.add("select * from xs_incomingview where id=", (await $.wcall([$t91], "inttostr", [(await $.mv((await $.idx((await $.mv((await $.wv([$t91], "GridIncoming", C, false)), "Fields")), [0])), "asinteger"))], C)))])));
      await $.stmt($.wcall([$t91], "Open", [], C));
    }
    L0["tcode"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "fieldbyname", ["TYPECODE"])), "AsInteger"));
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_CODEID")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_CODEID")), "SetVariable", ["t_code", L0["tcode"]])));
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_CODEID")), "open", []);
    L0["tnameid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_CODEID")), "fieldbyname", ["NAMEID"])), "AsInteger"));
    await $.set(C, "Form_Report_in", (await $.mcall((await $.v(C, "TForm_Report_in")), "create", [Self])));
    if ($.truthy($.eq(L0["tnameid"], 1))) {
      L0["tdate"] = (await $.call(C, "trunc", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "fieldbyname", ["TRANS_date"])), "AsDateTime"))]));
      L0["treference"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "fieldbyname", ["REFERENCE"])), "AsString"));
      L0["tfilial"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "fieldbyname", ["FILIAL"])), "AsInteger"));
      await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataSum")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataSum")), "SetVariable", ["t_date", L0["tdate"]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataSum")), "SetVariable", ["t_code", L0["tcode"]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataSum")), "SetVariable", ["t_REFERENCE", L0["treference"]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataSum")), "SetVariable", ["T_filial", L0["tfilial"]])));
      await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataSum")), "Open", []);
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText4")), "DataSet", (await $.mv((await $.v(C, "DataModXhoks")), "DataSum")));
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText4")), "DataField", "Sumammount");
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText18")), "DataSet", (await $.mv((await $.v(C, "DataModXhoks")), "DataSum")));
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText18")), "DataField", "Sumammount");
    } else {
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText4")), "DataSet", (await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")));
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText4")), "DataField", "AMOUNT");
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText18")), "DataSet", (await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")));
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText18")), "DataField", "AMOUNT");
    }
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_52A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_52A_1")), "Caption", $.add("/D/0", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "FieldByName", ["SEN_BANK_SUBACC"])), "AsString"))));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add($.add("Select * from bankm where subkrno='", "0"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "fieldbyname", ["SEN_BANK_SUBACC"])), "AsString"))), "'")])));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_52A_2")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_52A_2")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")));
    L0["dow_s"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "FieldByName", ["REMIT_INF"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRL_70_70")), "Caption", " ");
    await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRL_70_140")), "Caption", " ");
    await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRL_70_210")), "Caption", " ");
    L0["dow_i"] = 0;
    do {
      L0["dow_i"] = $.add(L0["dow_i"], 70);
      {
        const $t92 = (await $.v(C, "Form_report_in"));
        await $.mset((await $.wcall([$t92], "TQRLabel", [(await $.wcall([$t92], "FindComponent", [$.add("QRL_70_", (await $.wcall([$t92], "IntToStr", [(await $.wv([$t92], "Dow_i", { get: async () => L0["dow_i"], set: async (v) => { L0["dow_i"] = v; }, local: true }, false))], C)))], C))], C)), "Caption", (await $.wcall([$t92], "copy", [(await $.wv([$t92], "Dow_s", { get: async () => L0["dow_s"], set: async (v) => { L0["dow_s"] = v; }, local: true }, false)), $.sub((await $.wv([$t92], "Dow_i", { get: async () => L0["dow_i"], set: async (v) => { L0["dow_i"] = v; }, local: true }, false)), 69), 70], C)));
      }
      await $.tick();
    } while (!$.truthy($.gt(L0["dow_i"], (await $.call(C, "length", [L0["dow_s"]])))));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_57A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_57A_1")), "Caption", $.add("/C/0", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "FieldByName", ["REC_BANK_SUBACC"])), "AsString"))));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_57A_2")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_57A_2")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "FieldByName", ["REC_BANK_BIK"])), "AsString")));
    L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "FieldByName", ["SEN_BANK_KRNO"])), "AsString"));
    L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "FieldByName", ["SEN_BANK_INN"])), "AsString"));
    L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "FieldByName", ["SEN_BANK_CODE"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_50K")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_50K")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("select * from filialinfo where KOD_FIL = '", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "fieldbyname", ["MAIN_FILIAL"])), "AsString"))), "'")])));
    L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["KRNO"])), "AsString"));
    L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["INN"])), "AsString"));
    L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["KOD_B"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_59")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_59")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "XXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["SELECT nb_swift FROM xs_config"])));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel8")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel8")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["nb_swift"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel44")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel44")), "Caption", $.add("/BNF/", (await $.call(C, "IntToStr", [(await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "RecordCount"))]))));
    await $.mcall((await $.mv((await $.v(C, "Form_report_in")), "QuickRep1")), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "N23Click", async function N23Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "krno_": '', "inn_": '', "kod_b_": '', "dow_s": '', "dow_i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ReportX", (await $.mcall((await $.v(C, "TReportX")), "Create", [Self])));
  {
    const $t93 = (await $.v(C, "ReportX"));
    await $.mset((await $.wv([$t93], "QRDBText1", C, false)), "DataSet", (await $.mv((await $.wv([$t93], "DataModXhoks", C, false)), "XS_Beneficiary")));
    await $.mset((await $.wv([$t93], "QRDBText1", C, false)), "DataSet", (await $.mv((await $.wv([$t93], "DataModXhoks", C, false)), "XS_Batchs")));
    await $.mset((await $.wv([$t93], "QRDBText2", C, false)), "DataSet", (await $.mv((await $.wv([$t93], "DataModXhoks", C, false)), "XS_Batchs")));
    await $.mset((await $.wv([$t93], "QRDBText5", C, false)), "DataSet", (await $.mv((await $.wv([$t93], "DataModXhoks", C, false)), "XS_Batchs")));
    await $.mset((await $.wv([$t93], "QRDBText6", C, false)), "DataSet", (await $.mv((await $.wv([$t93], "DataModXhoks", C, false)), "XS_Batchs")));
    await $.mset((await $.wv([$t93], "QRDBText8", C, false)), "DataSet", (await $.mv((await $.wv([$t93], "DataModXhoks", C, false)), "XS_Batchs")));
  }
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "RecordCount")), 0))) {
    {
      const $t94 = (await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report"));
      await $.stmt($.wcall([$t94], "Close", [], C));
      await $.mcall((await $.wv([$t94], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t94], "SQL", C, false)), "Add", [$.add($.add($.add($.add($.add($.add($.add("select a.id, a.batchid, a.rec_bank_id, a.rec_bank_sub_acc,a.client_acc_no, a.client_name,", "a.client_code, a.client_inn,a.remit_inf, a.trans_cod, a.add_inf, a.val_date, a.val_cod,"), "a.mess_reference, a.amount, a.bnfcount, a.status,a.transaction_id, a.userid,bm.swift ,bm.bankcode||'/'||bm.inn as ab,'0'||bm.krno as kr from xs_beneficiary a,"), "xs_batchs b,bankm bm where a.rec_bank_id = bm.id and a.batchid="), (await $.wcall([$t94], "inttostr", [(await $.mv((await $.idx((await $.mv((await $.wv([$t94], "GridBatchs", C, false)), "Fields")), [0])), "asinteger"))], C))), " group by a.id, a.batchid,a.rec_bank_id, a.rec_bank_sub_acc,a.client_acc_no, a.client_name,a.client_code,"), "a.client_inn,a.remit_inf, a.trans_cod, a.add_inf, a.val_date, a.val_cod,a.mess_reference, a.amount,"), "a.bnfcount,a.status,a.transaction_id, a.userid,bm.swift,bm.krno,bm.inn,bm.bankcode order by a.batchid")])));
      await $.stmt($.wcall([$t94], "Open", [], C));
    }
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select account from xs_config"])));
    await $.mset((await $.mv((await $.v(C, "Reportx")), "QRL_52A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_52A_1")), "Caption", $.add("/D/", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["account"])), "AsString"))));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select swift from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_52A_2")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_52A_2")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["swift"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_57A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_57A_1")), "Caption", $.add("/C/0", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "FieldByName", ["REC_BANK_SUB_ACC"])), "AsString"))));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("Select kod_b,krno,inn,swift from bankinfo_t where kod_fil='", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "xs_batchs")), "FieldByName", ["filial"])), "AsString"))), "'")])));
    L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["KRNO"])), "AsString"));
    L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["INN"])), "AsString"));
    L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["KOD_B"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_50K")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRL_50K")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "AXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "AXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["SELECT nb_swift FROM xs_config"])));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel8")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel8")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["nb_swift"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel44")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportX")), "QRLabel44")), "Caption", $.add("/BNF/", (await $.call(C, "IntToStr", [(await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "RecordCount"))]))));
    await $.mcall((await $.mv((await $.v(C, "ReportX")), "QuickRep1")), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "N24Click", async function N24Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "krno_": '', "inn_": '', "kod_b_": '', "dow_i": 0, "dow_s": '', "tdate": 0, "tcode": 0, "tnameid": 0, "treference": '', "tfilial": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "xs_incoming")), "RecordCount")), 0))) {
    {
      const $t95 = (await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report"));
      await $.stmt($.wcall([$t95], "Close", [], C));
      await $.mcall((await $.wv([$t95], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t95], "SQL", C, false)), "Add", [$.add("select * from xs_incomingviewall where id=", (await $.wcall([$t95], "inttostr", [(await $.mv((await $.idx((await $.mv((await $.wv([$t95], "GridIncomingArchive", C, false)), "Fields")), [0])), "asinteger"))], C)))])));
      await $.stmt($.wcall([$t95], "Open", [], C));
    }
    L0["tcode"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "fieldbyname", ["TYPECODE"])), "AsInteger"));
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_CODEID")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_CODEID")), "SetVariable", ["t_code", L0["tcode"]])));
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_CODEID")), "open", []);
    L0["tnameid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_CODEID")), "fieldbyname", ["NAMEID"])), "AsInteger"));
    await $.set(C, "Form_Report_in", (await $.mcall((await $.v(C, "TForm_Report_in")), "create", [(await $.v(C, "Form_Report_in"))])));
    if ($.truthy($.eq(L0["tnameid"], 1))) {
      L0["tdate"] = (await $.call(C, "trunc", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "fieldbyname", ["TRANS_date"])), "AsDateTime"))]));
      L0["treference"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "fieldbyname", ["REFERENCE"])), "AsString"));
      L0["tfilial"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "fieldbyname", ["FILIAL"])), "AsInteger"));
      await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataSum")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataSum")), "SetVariable", ["t_date", L0["tdate"]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataSum")), "SetVariable", ["t_code", L0["tcode"]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataSum")), "SetVariable", ["t_REFERENCE", L0["treference"]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataSum")), "SetVariable", ["T_filial", L0["tfilial"]])));
      await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataSum")), "Open", []);
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText4")), "DataSet", (await $.mv((await $.v(C, "DataModXhoks")), "DataSum")));
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText4")), "DataField", "Sumammount");
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText18")), "DataSet", (await $.mv((await $.v(C, "DataModXhoks")), "DataSum")));
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText18")), "DataField", "Sumammount");
    } else {
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText4")), "DataSet", (await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")));
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText4")), "DataField", "AMOUNT");
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText18")), "DataSet", (await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")));
      await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRDBText18")), "DataField", "AMOUNT");
    }
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_52A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_52A_1")), "Caption", $.add("/D/0", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "FieldByName", ["SEN_BANK_SUBACC"])), "AsString"))));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add($.add("Select * from bankm where subkrno='", "0"), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "fieldbyname", ["SEN_BANK_SUBACC"])), "AsString"))), "'")])));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_52A_2")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_52A_2")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")));
    L0["dow_s"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "FieldByName", ["REMIT_INF"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRL_70_70")), "Caption", " ");
    await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRL_70_140")), "Caption", " ");
    await $.mset((await $.mv((await $.v(C, "Form_Report_in")), "QRL_70_210")), "Caption", " ");
    L0["dow_i"] = 0;
    do {
      L0["dow_i"] = $.add(L0["dow_i"], 70);
      {
        const $t96 = (await $.v(C, "Form_report_in"));
        await $.mset((await $.wcall([$t96], "TQRLabel", [(await $.wcall([$t96], "FindComponent", [$.add("QRL_70_", (await $.wcall([$t96], "IntToStr", [(await $.wv([$t96], "Dow_i", { get: async () => L0["dow_i"], set: async (v) => { L0["dow_i"] = v; }, local: true }, false))], C)))], C))], C)), "Caption", (await $.wcall([$t96], "copy", [(await $.wv([$t96], "Dow_s", { get: async () => L0["dow_s"], set: async (v) => { L0["dow_s"] = v; }, local: true }, false)), $.sub((await $.wv([$t96], "Dow_i", { get: async () => L0["dow_i"], set: async (v) => { L0["dow_i"] = v; }, local: true }, false)), 69), 70], C)));
      }
      await $.tick();
    } while (!$.truthy($.gt(L0["dow_i"], (await $.call(C, "length", [L0["dow_s"]])))));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_57A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_57A_1")), "Caption", $.add("/C/0", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "FieldByName", ["REC_BANK_SUBACC"])), "AsString"))));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_57A_2")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_57A_2")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "FieldByName", ["REC_BANK_BIK"])), "AsString")));
    L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "FieldByName", ["SEN_BANK_KRNO"])), "AsString"));
    L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "FieldByName", ["SEN_BANK_INN"])), "AsString"));
    L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "FieldByName", ["SEN_BANK_CODE"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_50K")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_50K")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("select * from filialinfo where KOD_FIL = '", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "fieldbyname", ["MAIN_FILIAL"])), "AsString"))), "'")])));
    L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["KRNO"])), "AsString"));
    L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["INN"])), "AsString"));
    L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["KOD_B"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_59")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRL_59")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "XXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "XXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["SELECT nb_swift FROM xs_config"])));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel8")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel8")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["nb_swift"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel44")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "Form_report_in")), "QRLabel44")), "Caption", $.add("/BNF/", (await $.call(C, "IntToStr", [(await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "RecordCount"))]))));
    await $.mcall((await $.mv((await $.v(C, "Form_report_in")), "QuickRep1")), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "N26Click", async function N26Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "krno_": '', "inn_": '', "kod_b_": '', "dow_i": 0, "dow_s": '', "tdate": 0, "tcode": 0, "tnameid": 0, "treference": '', "tfilial": 0, "bdate": '', "edate": '', "vfilial": 0, "sql1": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["bdate"] = (await $.call(C, "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.v(C, "INCBDATE")), "DateTime"))]));
  L0["edate"] = (await $.call(C, "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.v(C, "INCEDATE")), "DateTime"))]));
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox2")), "Checked")))) {
    L0["sql1"] = $.add("and filial=", (await $.call(C, "inttostr", [(await $.mv((await $.idx((await $.mv((await $.v(C, "GridIncomingArchive")), "Fields")), [13])), "asinteger"))])));
  } else {
    L0["sql1"] = "";
  }
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_Incoming")), "RecordCount")), 0))) {
    {
      const $t97 = (await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report"));
      await $.stmt($.wcall([$t97], "Close", [], C));
      await $.mcall((await $.wv([$t97], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t97], "SQL", C, false)), "Add", [$.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("select  * from xs_incomingViewall a where TYPECODE=", (await $.wcall([$t97], "inttostr", [(await $.mv((await $.idx((await $.mv((await $.wv([$t97], "GridIncomingArchive", C, false)), "Fields")), [14])), "asinteger"))], C))), "   and trans_date>="), "'"), (await $.wv([$t97], "bdate", { get: async () => L0["bdate"], set: async (v) => { L0["bdate"] = v; }, local: true }, false))), "'"), " and   trans_date<="), "'"), (await $.wv([$t97], "edate", { get: async () => L0["edate"], set: async (v) => { L0["edate"] = v; }, local: true }, false))), "'"), (await $.wv([$t97], "SQL1", { get: async () => L0["sql1"], set: async (v) => { L0["sql1"] = v; }, local: true }, false)))])));
      await $.stmt($.wcall([$t97], "Open", [], C));
    }
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRDBText4")), "DataSet", (await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRDBText4")), "DataField", "AMOUNT");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRDBText18")), "DataSet", (await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRDBText18")), "DataField", "AMOUNT");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRL_57A_1")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRL_57A_1")), "Caption", $.add("/C/0", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "FieldByName", ["REC_BANK_SUBACC"])), "AsString"))));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRL_57A_2")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRL_57A_2")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "FieldByName", ["REC_BANK_BIK"])), "AsString")));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("select * from filialinfo where KOD_FIL = '", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "fieldbyname", ["MAIN_FILIAL"])), "AsString"))), "'")])));
    L0["krno_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["KRNO"])), "AsString"));
    L0["inn_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["INN"])), "AsString"));
    L0["kod_b_"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["KOD_B"])), "AsString"));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRL_59")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRL_59")), "Caption", $.add($.add($.add($.add($.add(L0["kod_b_"], "/"), L0["inn_"]), "\r\n"), "0"), L0["krno_"]));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "XXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["Select SWIFT from bankinfo"])));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRLabel7")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRLabel7")), "Caption", $.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["SWIFT"])), "AsString")), "XXXX"));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", ["SELECT nb_swift FROM xs_config"])));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRLabel8")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRLabel8")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report_Temp")), "FieldByName", ["nb_swift"])), "AsString")));
    await $.stmt((await $.call(C, "Open____ODS_Report_Temp____Add_SQL", [$.add($.add("SELECT * FROM xs_transtype_code where CODE = '", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Report")), "fieldbyname", ["TYPECODE"])), "AsString"))), "'")])));
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRLabel44")), "Caption", "");
    await $.mset((await $.mv((await $.v(C, "ReportinX")), "QRLabel44")), "Caption", $.add("/BNF/", (await $.call(C, "IntToStr", [(await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "RecordCount"))]))));
    await $.mcall((await $.v(C, "ReportinX")), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "N5Click", async function N5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_EDIT"]])));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.stmt($.call(C, "ShowDetals", []));
  await $.mset((await $.mv((await $.v(C, "FormPayment_Det")), "ButtonFinish")), "Enabled", false);
  await $.mcall((await $.v(C, "FormPayment_Det")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "N6Click", async function N6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "Last", []);
  await $.mcall((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "N7Click", async function N7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "First", []);
  await $.mcall((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "N8Click", async function N8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "MessageInSelAll")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "N9Click", async function N9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "MessageOutSelAll")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "ToolButton16Click", async function ToolButton16Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "begdate": 0, "enddate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["begdate"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTPickOutArchBeg")), "DateTime"))]))]));
  L0["enddate"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTPickOutArchEnd")), "DateTime"))]))]));
  {
    const $t98 = (await $.mv((await $.v(C, "DataModXhoks")), "XS_BatchsArchive"));
    await $.stmt($.wcall([$t98], "Close", [], C));
    await $.stmt((await $.wcall([$t98], "SetVariable", ["BeginDate", (await $.wv([$t98], "BegDate", { get: async () => L0["begdate"], set: async (v) => { L0["begdate"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t98], "SetVariable", ["EndDate", (await $.wv([$t98], "EndDate", { get: async () => L0["enddate"], set: async (v) => { L0["enddate"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t98], "SetVariable", ["Acc_id", (await $.wv([$t98], "Tcust_id", C, false))], C)));
    await $.stmt($.wcall([$t98], "Open", [], C));
  }
  await $.mcall((await $.mv((await $.v(C, "DBGridOUTArchBeneficiary")), "SelectedRows")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "DBGridOUTArchBatchs")), "SelectedRows")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BeneficiaryArchive")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BeneficiaryArchive")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "ToolButton18Click", async function ToolButton18Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "begdate": 0, "enddate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["begdate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "INCBDATE")), "DateTime"))]));
  L0["enddate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "INCEDATE")), "DateTime"))]));
  {
    const $t99 = (await $.mv((await $.v(C, "DataModXhoks")), "XS_INCOMING"));
    await $.stmt($.wcall([$t99], "Close", [], C));
    await $.wset([$t99], "Filtered", (await $.wv([$t99], "false", C, false)), C);
    await $.wset([$t99], "Filter", "", C);
    await $.mset((await $.wv([$t99], "XFCheckBox2", C, false)), "Checked", (await $.wv([$t99], "false", C, false)));
    await $.mset((await $.wv([$t99], "XFCheckBox3", C, false)), "Checked", (await $.wv([$t99], "false", C, false)));
    await $.stmt((await $.wcall([$t99], "SetVariable", ["BeginDate", (await $.wv([$t99], "BegDate", { get: async () => L0["begdate"], set: async (v) => { L0["begdate"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t99], "SetVariable", ["EndDate", (await $.wv([$t99], "EndDate", { get: async () => L0["enddate"], set: async (v) => { L0["enddate"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t99], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_ADD"]])));
  await $.stmt((await $.call(C, "preparetrans", [0, false])));
  await $.stmt($.call(C, "createTransCodeTree", []));
  await $.set(C, "after_add", false);
  await $.set(C, "mess_edit", false);
  await $.set(C, "new_id", (await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "INS")), "Callintegerfunction", ["XS_BATCHS_insert", ["CREDIT", 0, (await $.mv((await $.mv((await $.v(C, "FormXohks")), "edit_clientname")), "text")), (await $.mv((await $.mv((await $.v(C, "FormXohks")), "edit_client_code")), "text")), (await $.mv((await $.mv((await $.v(C, "FormXohks")), "edit_referens")), "text")), (await $.call(C, "strtofloat", [(await $.mv((await $.mv((await $.v(C, "FormXohks")), "edit_amount")), "Text"))])), (await $.call(C, "strtofloat", [(await $.idx((await $.mv((await $.mv((await $.v(C, "FormXohks")), "valute_id")), "items")), [(await $.mv((await $.mv((await $.v(C, "FormXohks")), "combo_valute")), "itemindex"))]))])), 0]])));
  await $.stmt((await $.call(C, "LoadPlugin", ["PcustXohks.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "ToolButton21Click", async function ToolButton21Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.mv((await $.v(C, "Panel38")), "Visible")))))) {
    await $.mset((await $.v(C, "Panel38")), "Visible", true);
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "Data_Admin_in")), "Active", true);
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "Data_Code")), "Active", true);
  } else {
    await $.mset((await $.v(C, "Panel38")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "ToolButton22Click", async function ToolButton22Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_DELETE"]])));
  await $.mcall((await $.v(C, "GridBatchs")), "SetFocus", []);
  await $.mset((await $.mv((await $.v(C, "GridBatchs")), "SelectedRows")), "CurrentRowSelected", $.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "DataSource")), "DataSet")), "RecordCount")), 0));
  { const $t100 = $.sub((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "SelectedRows")), "Count")), 1);
    L0["i"] = 0;
    let $t101 = true;
    for (;;) {
      if (!$t101) { L0["i"] = $.succ(L0["i"], 1); }
      $t101 = false;
      if (!($.ord(L0["i"]) <= $.ord($t100))) break;
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "SelectedRows")), "items")), [L0["i"]]))]))])));
      { const $t102 = (await $.call(C, "MessageDlg", [$.add($.add("Əməliyyat qrupu #", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["id"])), "AsString"))), " silinsinmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno")), (await $.v(C, "mbcancel")), (await $.v(C, "mball"))], 0]));
        if ($.eq($t102, (await $.v(C, "mryes")))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DEL")), "CallProcedure", ["xs_batchs_delete", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
          await $.stmt($.call(C, "RefreshDataBatchs", []));
        }
        else if ($.eq($t102, (await $.v(C, "mrno")))) {
          return L0.result;
        }
        else if ($.eq($t102, (await $.v(C, "mrcancel")))) {
          break;
        }
        else if ($.eq($t102, (await $.v(C, "mrall")))) {
          { const $t103 = (await $.call(C, "MessageDlg", [$.add((await $.call(C, "inttostr", [(await $.mv((await $.mv((await $.v(C, "GridBatchs")), "SelectedRows")), "Count"))])), " sayda əməliyyat silinsinmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0]));
            if ($.eq($t103, (await $.v(C, "mryes")))) {
              { const $t104 = $.sub((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "SelectedRows")), "Count")), 1);
                L0["j"] = 0;
                let $t105 = true;
                for (;;) {
                  if (!$t105) { L0["j"] = $.succ(L0["j"], 1); }
                  $t105 = false;
                  if (!($.ord(L0["j"]) <= $.ord($t104))) break;
                  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "SelectedRows")), "items")), [L0["j"]]))]))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DEL")), "CallProcedure", ["xs_batchs_delete", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBatchs")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
                  await $.tick();
                }
              }
              await $.stmt($.call(C, "RefreshDataBatchs", []));
              break;
            }
            else if ($.eq($t103, (await $.v(C, "mrno")))) {
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
  U.method("TMainXohksForm", "ToolButton27Click", async function ToolButton27Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_DELETE"]])));
  await $.mcall((await $.v(C, "GridBeneficiary")), "SetFocus", []);
  await $.mset((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "CurrentRowSelected", $.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "RecordCount")), 0));
  { const $t106 = $.sub((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Count")), 1);
    L0["i"] = 0;
    let $t107 = true;
    for (;;) {
      if (!$t107) { L0["i"] = $.succ(L0["i"], 1); }
      $t107 = false;
      if (!($.ord(L0["i"]) <= $.ord($t106))) break;
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "items")), [L0["i"]]))]))])));
      { const $t108 = (await $.call(C, "MessageDlg", [$.add($.add("Əməliyyat #", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "fieldbyname", ["id"])), "AsString"))), " silinsinmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno")), (await $.v(C, "mbcancel")), (await $.v(C, "mball"))], 0]));
        if ($.eq($t108, (await $.v(C, "mryes")))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DEL")), "CallProcedure", ["xs_beneficiary_delete", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "INS")), "Callprocedure", ["xs_BatchAmount_update", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["ID"])), "asinteger"))]])));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "Ins")), "callintegerfunction", ["xs_Batchs_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
          await $.mcall((await $.v(C, "MainXohksForm")), "RefreshDataBatchs", []);
        }
        else if ($.eq($t108, (await $.v(C, "mrno")))) {
          return L0.result;
        }
        else if ($.eq($t108, (await $.v(C, "mrcancel")))) {
          break;
        }
        else if ($.eq($t108, (await $.v(C, "mrall")))) {
          { const $t109 = (await $.call(C, "MessageDlg", [$.add((await $.call(C, "inttostr", [(await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Count"))])), " sayda əməliyyat silinsinmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0]));
            if ($.eq($t109, (await $.v(C, "mryes")))) {
              { const $t110 = $.sub((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Count")), 1);
                L0["j"] = 0;
                let $t111 = true;
                for (;;) {
                  if (!$t111) { L0["j"] = $.succ(L0["j"], 1); }
                  $t111 = false;
                  if (!($.ord(L0["j"]) <= $.ord($t110))) break;
                  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "items")), [L0["j"]]))]))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DEL")), "CallProcedure", ["xs_beneficiary_delete", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
                  await $.tick();
                }
              }
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "INS")), "Callprocedure", ["xs_BatchAmount_update", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["ID"])), "asinteger"))]])));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "Ins")), "callintegerfunction", ["xs_Batchs_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
              await $.mcall((await $.v(C, "MainXohksForm")), "RefreshDataBatchs", []);
              break;
            }
            else if ($.eq($t109, (await $.v(C, "mrno")))) {
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
  U.method("TMainXohksForm", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_ADD"]])));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "PrepareTrans", [1, false])));
  await $.stmt($.call(C, "CreateTransCodeTree", []));
  await $.set(C, "new_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["id"])), "AsInteger")));
  await $.set(C, "After_Add", true);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "DataBankInfo")), "Active")), false))) {
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataBankInfo")), "Open", []);
  }
  {
    const $t112 = (await $.v(C, "FormPayment_Det"));
    await $.mset((await $.wv([$t112], "ButtonFinish", C, false)), "Enabled", (await $.wv([$t112], "true", C, false)));
    await $.mset((await $.wv([$t112], "XFBitBtn4", C, false)), "Enabled", (await $.wv([$t112], "true", C, false)));
    await $.mset((await $.wv([$t112], "SpeedButton2", C, false)), "Enabled", (await $.wv([$t112], "true", C, false)));
    await $.mset((await $.wv([$t112], "Combo_BankName", C, false)), "Enabled", (await $.wv([$t112], "true", C, false)));
    await $.mset((await $.wv([$t112], "XFBitBtn3", C, false)), "Enabled", (await $.wv([$t112], "true", C, false)));
    await $.mset((await $.wv([$t112], "SearchBankM", C, false)), "Enabled", (await $.wv([$t112], "true", C, false)));
    await $.mset((await $.wv([$t112], "Edit_Client_acc_no", C, false)), "Enabled", (await $.wv([$t112], "true", C, false)));
    await $.mset((await $.wv([$t112], "Edit_Client_Name", C, false)), "Enabled", (await $.wv([$t112], "true", C, false)));
    await $.mset((await $.wv([$t112], "Edit_Client_Code", C, false)), "Enabled", (await $.wv([$t112], "true", C, false)));
    await $.mset((await $.wv([$t112], "Edit_Client_Voen", C, false)), "Enabled", (await $.wv([$t112], "true", C, false)));
    await $.mset((await $.wv([$t112], "Edit_tey1", C, false)), "Enabled", (await $.wv([$t112], "true", C, false)));
    await $.mset((await $.wv([$t112], "Edit_tey2", C, false)), "Enabled", (await $.wv([$t112], "true", C, false)));
    await $.mset((await $.wv([$t112], "Edit_tey3", C, false)), "Enabled", (await $.wv([$t112], "true", C, false)));
    await $.mset((await $.wv([$t112], "Edit_tey4", C, false)), "Enabled", (await $.wv([$t112], "true", C, false)));
    await $.mset((await $.wv([$t112], "Edit_inf1", C, false)), "Enabled", (await $.wv([$t112], "true", C, false)));
    await $.mset((await $.wv([$t112], "Edit_inf2", C, false)), "Enabled", (await $.wv([$t112], "true", C, false)));
    await $.mset((await $.wv([$t112], "Edit_inf3", C, false)), "Enabled", (await $.wv([$t112], "true", C, false)));
    await $.mset((await $.wv([$t112], "XFGroupBox8", C, false)), "Enabled", (await $.wv([$t112], "true", C, false)));
    await $.mset((await $.wv([$t112], "Edit_Amount", C, false)), "Enabled", (await $.wv([$t112], "true", C, false)));
    await $.mset((await $.wv([$t112], "SpeedButton1", C, false)), "Enabled", (await $.wv([$t112], "true", C, false)));
    await $.mset((await $.wv([$t112], "Edit_BankName_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t112], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["BANK"])), "AsString")));
    await $.mset((await $.wv([$t112], "Edit_BIK_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t112], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["SWIFT"])), "AsString")));
    await $.mset((await $.wv([$t112], "Edit_BankCode_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t112], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["KOD_B"])), "AsString")));
    await $.mset((await $.wv([$t112], "Edit_account_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t112], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["KRNO"])), "AsString")));
    await $.mset((await $.wv([$t112], "Edit_Voen_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t112], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["INN"])), "AsString")));
    await $.mset((await $.wv([$t112], "Combo_Valute", C, false)), "ItemIndex", (await $.mcall((await $.mv((await $.wv([$t112], "Combo_Valute", C, false)), "Items")), "IndexOf", ["AZM"])));
    await $.mset((await $.wv([$t112], "Edit_account_sub_Self", C, false)), "Text", (await $.mv((await $.mv((await $.wv([$t112], "FormXohks", C, false)), "Edit_account_sub")), "text")));
    await $.mset((await $.wv([$t112], "Combo_BankName", C, false)), "ItemIndex", (-(1)));
    await $.mcall((await $.wv([$t112], "Edit_BIK", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t112], "Edit_BankCode", C, false)), "clear", []);
    await $.mcall((await $.wv([$t112], "Edit_Referens", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t112], "Edit_account", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t112], "Edit_Voen", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t112], "Edit_Amount", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t112], "Edit_Account_Sub", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t112], "Edit_TransCode", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t112], "Edit_Client_Name", C, false)), "Clear", []);
    await $.mset((await $.wv([$t112], "Edit_Client_Code", C, false)), "Text", "/");
    await $.mcall((await $.wv([$t112], "Edit_Client_acc_no", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t112], "Edit_Client_Voen", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t112], "Edit_inf1", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t112], "Edit_inf2", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t112], "Edit_inf3", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t112], "Edit_tey1", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t112], "Edit_tey2", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t112], "Edit_tey3", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t112], "Edit_tey4", C, false)), "Clear", []);
    await $.mset((await $.wv([$t112], "Combo_Valute", C, false)), "ItemIndex", 0);
    await $.mset((await $.wv([$t112], "ButtonFinish", C, false)), "Enabled", (await $.wv([$t112], "True", C, false)));
    await $.mcall((await $.wv([$t112], "FormPayment_Det", C, false)), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "ToolButton6Click", async function ToolButton6Click(Self, p0) {
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
  U.method("TMainXohksForm", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_EDIT"]])));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "RecordCount")), 0))) {
    return L0.result;
  }
  await $.stmt($.call(C, "ShowDetals", []));
  await $.mset((await $.mv((await $.v(C, "FormPayment_Det")), "ButtonFinish")), "Enabled", false);
  await $.mcall((await $.v(C, "FormPayment_Det")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "ButtonMessInAcceptClick", async function ButtonMessInAcceptClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "s": 0, "f": 0, "filial": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "DataSource")), "DataSet")), "RecordCount")), 0)))) {
    return L0.result;
  }
  await $.mset((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "CurrentRowSelected", $.gt((await $.mv((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "DataSource")), "DataSet")), "RecordCount")), 0));
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "fieldbyname", ["trans_date"])), "AsDateTime")), (await $.v(C, "GetUseDate")))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "fieldbyname", ["trans_date"])), "AsDateTime")), (await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "GetSysDate")), "CallDateFunction", ["Get_Date", []])))))))) {
    await $.stmt((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["Əməliyyat #%d Dəyişdirilə bilməz!", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "fieldbyname", ["id"])), "AsInteger"))]])), (await $.v(C, "mtWarning")), [(await $.v(C, "mbOk"))], 0])));
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_IN"]])));
  if ($.truthy((await $.and_((await $.mv((await $.v(C, "XFCheckBox1")), "Checked")), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), 900)))))) {
    L0["f"] = (await $.mv((await $.idx((await $.mv((await $.v(C, "GridIncoming")), "Fields")), [4])), "asinteger"));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "Ins")), "CallProcedure", ["set_incomingSum", [(await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (await $.call(C, "inttostr", [L0["f"]]))]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "Ins")), "CallProcedure", ["set_incomingSumCod", [(await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"))]])));
  } else {
    { const $t113 = $.sub((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "Count")), 1);
      L0["i"] = 0;
      let $t114 = true;
      for (;;) {
        if (!$t114) { L0["i"] = $.succ(L0["i"], 1); }
        $t114 = false;
        if (!($.ord(L0["i"]) <= $.ord($t113))) break;
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "FieldByName", ["status"])), "AsInteger")), 1))) {
          continue;
        }
        await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridIncoming")), "SelectedRows")), "items")), [L0["i"]]))]))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "Ins")), "callprocedure", ["SetIncomingTransaction", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "fieldbyname", ["ID"])), "ASinteger"))]])));
        await $.tick();
      }
    }
  }
  await $.mcall((await $.v(C, "FileListIncoming")), "Update", []);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainXohksForm", "ButtonMessIneEditClick", async function ButtonMessIneEditClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_DELETE"]])));
  await $.mcall((await $.v(C, "GridBeneficiary")), "SetFocus", []);
  await $.mset((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "CurrentRowSelected", $.ne((await $.mv((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "RecordCount")), 0));
  { const $t115 = $.sub((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Count")), 1);
    L0["i"] = 0;
    let $t116 = true;
    for (;;) {
      if (!$t116) { L0["i"] = $.succ(L0["i"], 1); }
      $t116 = false;
      if (!($.ord(L0["i"]) <= $.ord($t115))) break;
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "items")), [L0["i"]]))]))])));
      { const $t117 = (await $.call(C, "MessageDlg", [$.add($.add("Əməliyyat #", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "fieldbyname", ["id"])), "AsString"))), " silinsinmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno")), (await $.v(C, "mbcancel")), (await $.v(C, "mball"))], 0]));
        if ($.eq($t117, (await $.v(C, "mryes")))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DEL")), "CallProcedure", ["xs_beneficiary_delete", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "INS")), "Callprocedure", ["xs_BatchAmount_update", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["ID"])), "asinteger"))]])));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "Ins")), "callintegerfunction", ["xs_Batchs_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
          await $.mcall((await $.v(C, "MainXohksForm")), "RefreshDataBatchs", []);
        }
        else if ($.eq($t117, (await $.v(C, "mrno")))) {
          return L0.result;
        }
        else if ($.eq($t117, (await $.v(C, "mrcancel")))) {
          break;
        }
        else if ($.eq($t117, (await $.v(C, "mrall")))) {
          { const $t118 = (await $.call(C, "MessageDlg", [$.add((await $.call(C, "inttostr", [(await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Count"))])), " sayda əməliyyat silinsinmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0]));
            if ($.eq($t118, (await $.v(C, "mryes")))) {
              { const $t119 = $.sub((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "Count")), 1);
                L0["j"] = 0;
                let $t120 = true;
                for (;;) {
                  if (!$t120) { L0["j"] = $.succ(L0["j"], 1); }
                  $t120 = false;
                  if (!($.ord(L0["j"]) <= $.ord($t119))) break;
                  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "pointer", [(await $.idx((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "SelectedRows")), "items")), [L0["j"]]))]))])));
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DEL")), "CallProcedure", ["xs_beneficiary_delete", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "GridBeneficiary")), "DataSource")), "DataSet")), "fieldbyname", ["ID"])), "asinteger"))]])));
                  await $.tick();
                }
              }
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "INS")), "Callprocedure", ["xs_BatchAmount_update", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["ID"])), "asinteger"))]])));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "Ins")), "callintegerfunction", ["xs_Batchs_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
              await $.mcall((await $.v(C, "MainXohksForm")), "RefreshDataBatchs", []);
              break;
            }
            else if ($.eq($t118, (await $.v(C, "mrno")))) {
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
  return U;
}
