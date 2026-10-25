// Generated from AdministrationMainForm.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AdministrationMainForm", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Forms", "Dialogs", "ActiveX", "AxCtrls", "Administration_TLB", "StdVcl", "ExtCtrls", "StdCtrls", "ComCtrls", "ToolWin", "Grids", "DBGrids", "ImgList", "DB", "DBCtrls", "DBCGrids", "ActnList", "AdmBarForm", "OracleData", "HintBox", "Buttons", "Controls", "Mask", "SearchCombo", "Tabs", "Menus", "AdministrationModEdit", "SBPlgAx50_TLB", "CheckLst", "CMExcelExport", "ComObj", "ComServ", "AdministrationDataModule", "AdministrationUserAddForm", "AdministrationClassEdit", "AdministrationUserPassw", "AdministrationOwnerSheep", "administrationUsersRefresh", "AdministrationAdvancedGrants", "AdministrationGroupReport", "AdministrationUserGranReport", "AdministrationUtils", "AdministrationProfOptions", "AdministrationUserAdvGranReport", "COPYCLASS", "sboapiDataModuleImpl", "SBTranslateProc", "finger"]);
  const C = [U];
  U.const("acModule", 0);
  U.const("acTable", 1);
  U.const("atUsers", 0);
  U.const("atGroups", 1);
  U.const("atOrders", 2);
  U.const("hsLeft", 0);
  U.const("hsDel", 1);
  U.const("hsRight", 2);
  U.const("hsAdd", 3);
  U.const("hsUnknown", 4);
  $.defRecord("theaderbuttonmethods", {"delcol": () => null, "moveright": () => null, "moveleft": () => null, "add": () => null});
  U.defClass("THeaderButton", "TSpeedButton", {"fstate": {"name": "fState", "type": "THeadState"}}, {"headstate": {"name": "HeadState", "read": "fState", "write": "fState"}});
  U.defClass("TAdministrationForm", "TActiveForm", {"pnlmain": {"name": "pnlMain", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "tvmain": {"name": "tvMain", "type": "TTreeView"}, "splitter1": {"name": "Splitter1", "type": "TSplitter"}, "pnloptref": {"name": "pnlOptRef", "type": "TPanel"}, "pnlctrlbr": {"name": "pnlCtrlBr", "type": "TPanel"}, "pnlgrid": {"name": "pnlGrid", "type": "TPanel"}, "grshrcsrmk": {"name": "grShrcsrMK", "type": "TDBGrid"}, "pcmain": {"name": "pcMain", "type": "TPageControl"}, "tbmodules": {"name": "tbModules", "type": "TTabSheet"}, "tbtables": {"name": "tbTables", "type": "TTabSheet"}, "tbinfo": {"name": "tbInfo", "type": "TTabSheet"}, "imladm": {"name": "ImLAdm", "type": "TImageList"}, "imltoolbar": {"name": "ImLToolBar", "type": "TImageList"}, "cgrmodules": {"name": "cgrModules", "type": "TDBCtrlGrid"}, "grpan1": {"name": "grPan1", "type": "TPanel"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}, "grpan2": {"name": "grPan2", "type": "TPanel"}, "dbtext2": {"name": "DBText2", "type": "TDBText"}, "grpan3": {"name": "grPan3", "type": "TPanel"}, "cbmod": {"name": "cbMod", "type": "TDBCheckBox"}, "hcmodules": {"name": "hcModules", "type": "THeaderControl"}, "admact": {"name": "AdmAct", "type": "TActionList"}, "postmodchng": {"name": "PostModChng", "type": "TAction"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "gradvan": {"name": "grAdvan", "type": "TDBGrid"}, "posttablechng": {"name": "PostTableChng", "type": "TAction"}, "imlgrid": {"name": "ImLGrid", "type": "TImageList"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "gbrights": {"name": "gbRights", "type": "TGroupBox"}, "gbselall": {"name": "gbSelAll", "type": "TGroupBox"}, "sbselall": {"name": "sbSelAll", "type": "TSpeedButton"}, "sbdeselall": {"name": "sbDeSelAll", "type": "TSpeedButton"}, "actselectall": {"name": "ACTSelectAll", "type": "TAction"}, "actdeselall": {"name": "ACTDeselAll", "type": "TAction"}, "postchng": {"name": "PostChng", "type": "TAction"}, "refreshmd": {"name": "RefreshMd", "type": "TAction"}, "tbpost": {"name": "tbPost", "type": "TToolButton"}, "tbrefresh": {"name": "tbRefresh", "type": "TToolButton"}, "errorpanel": {"name": "ErrorPanel", "type": "TPanel"}, "hberrorbox": {"name": "hbErrorBox", "type": "THintBox"}, "cbmainchange": {"name": "CBMainChange", "type": "TAction"}, "dbrefresh": {"name": "DBRefresh", "type": "TAction"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "tbadduser": {"name": "tbAddUser", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "tbdropuser": {"name": "tbDropUser", "type": "TToolButton"}, "adduser": {"name": "AddUser", "type": "TAction"}, "dropuser": {"name": "DropUser", "type": "TAction"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "classcreate": {"name": "ClassCreate", "type": "TAction"}, "classdrop": {"name": "ClassDrop", "type": "TAction"}, "tbgroup": {"name": "tbGroup", "type": "TTabSheet"}, "pngroupman": {"name": "pnGroupMan", "type": "TPanel"}, "splitter3": {"name": "Splitter3", "type": "TSplitter"}, "pnqoupslaveusers": {"name": "pnQoupSlaveUsers", "type": "TPanel"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "groupcreate": {"name": "GroupCreate", "type": "TAction"}, "groupdrop": {"name": "GroupDrop", "type": "TAction"}, "postgroupchng": {"name": "PostGroupChng", "type": "TAction"}, "gbuserinf": {"name": "gbUserInf", "type": "TGroupBox"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "edusinfname": {"name": "edUsInfName", "type": "TEdit"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "edusinffname": {"name": "edUsInfFName", "type": "TEdit"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "edusinfdescr": {"name": "edUsInfDescr", "type": "TEdit"}, "postuserinfochng": {"name": "PostUserInfoChng", "type": "TAction"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "tsdepsub": {"name": "tsDepSub", "type": "TTabSet"}, "pcdepsub": {"name": "pcDepSub", "type": "TPageControl"}, "tbsdepend": {"name": "tbsDepend", "type": "TTabSheet"}, "tbssubmis": {"name": "tbsSubmis", "type": "TTabSheet"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "ppmod": {"name": "ppMod", "type": "TPopupMenu"}, "mmupdate": {"name": "mmUpdate", "type": "TMenuItem"}, "mminsert": {"name": "mmInsert", "type": "TMenuItem"}, "n1": {"name": "N1", "type": "TMenuItem"}, "mmdelete": {"name": "mmDelete", "type": "TMenuItem"}, "label5": {"name": "Label5", "type": "TLabel"}, "modpop": {"name": "ModPop", "type": "TPopupMenu"}, "miselall": {"name": "miSelAll", "type": "TMenuItem"}, "mideselall": {"name": "miDeSelAll", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "tabpopup": {"name": "TabPopup", "type": "TPopupMenu"}, "miseltab": {"name": "miSelTab", "type": "TMenuItem"}, "miunseltab": {"name": "miUnSelTab", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "miallseltab": {"name": "miAllSelTab", "type": "TMenuItem"}, "miallunseltab": {"name": "miAllUnSelTab", "type": "TMenuItem"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "sbadvancedgrants": {"name": "sbAdvancedGrants", "type": "TSpeedButton"}, "gbuserlist": {"name": "gbUserList", "type": "TGroupBox"}, "pngroupgrid": {"name": "pnGroupGrid", "type": "TPanel"}, "grgroupus": {"name": "grGroupUs", "type": "TDBGrid"}, "gbgrouptype": {"name": "gbGroupType", "type": "TGroupBox"}, "dbtext4": {"name": "DBText4", "type": "TDBText"}, "label8": {"name": "Label8", "type": "TLabel"}, "showuserstab": {"name": "ShowUsersTab", "type": "TAction"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "edusinfphone": {"name": "edUsInfPhone", "type": "TMaskEdit"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "edusinfcrdat": {"name": "edUsInfCrDat", "type": "TEdit"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "edusinfclass": {"name": "edUsInfClass", "type": "TSearchCombo"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "edusinffilial": {"name": "edUsInfFilial", "type": "TSearchCombo"}, "label6": {"name": "Label6", "type": "TLabel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "cbupdate": {"name": "cbUpdate", "type": "TDBCheckBox"}, "cbdelete": {"name": "cbDelete", "type": "TDBCheckBox"}, "cbinsert": {"name": "cbInsert", "type": "TDBCheckBox"}, "tbsusergroup": {"name": "tbsUserGroup", "type": "TTabSheet"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "sbshowustab": {"name": "sbShowUsTab", "type": "TSpeedButton"}, "tborders": {"name": "tbOrders", "type": "TTabSheet"}, "pcorders": {"name": "pcOrders", "type": "TPageControl"}, "tbqroupsorder": {"name": "tbQroupsOrder", "type": "TTabSheet"}, "tbusersorder": {"name": "tbUsersOrder", "type": "TTabSheet"}, "grqrupsorder": {"name": "grQrupsOrder", "type": "TGroupBox"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "btgrouporder": {"name": "btGroupOrder", "type": "TBitBtn"}, "cbgroupsorder": {"name": "cbGroupsOrder", "type": "TCheckListBox"}, "gbusersorder": {"name": "gbUsersOrder", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "btusersorder": {"name": "btUsersOrder", "type": "TBitBtn"}, "radiobutton3": {"name": "RadioButton3", "type": "TRadioButton"}, "rbusersall": {"name": "rbUsersAll", "type": "TRadioButton"}, "cbusersorder": {"name": "cbUsersOrder", "type": "TCheckListBox"}, "tbsorders": {"name": "tbsOrders", "type": "TTabSet"}, "showgroupsorder": {"name": "ShowGroupsOrder", "type": "TAction"}, "showusersorder": {"name": "ShowUsersOrder", "type": "TAction"}, "rbgroupsall": {"name": "rbGroupsAll", "type": "TRadioButton"}, "radiobutton2": {"name": "RadioButton2", "type": "TRadioButton"}, "refreshorders": {"name": "RefreshOrders", "type": "TAction"}, "cbusersstandorder": {"name": "cbUsersStandOrder", "type": "TCheckBox"}, "eduserorderconst1": {"name": "eduserOrderConst1", "type": "TEdit"}, "eduserorderconst2": {"name": "eduserOrderConst2", "type": "TEdit"}, "bevel2": {"name": "Bevel2", "type": "TBevel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "bevel3": {"name": "Bevel3", "type": "TBevel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "pnqrouppanel": {"name": "pnQroupPanel", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "edgroupname": {"name": "edGroupName", "type": "TEdit"}, "splitter2": {"name": "Splitter2", "type": "TSplitter"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "label4": {"name": "Label4", "type": "TLabel"}, "edgroupdescr": {"name": "edGroupDescr", "type": "TEdit"}, "hcqrouphead": {"name": "hcQroupHead", "type": "THeaderControl"}, "slgroupgrid": {"name": "slGroupGrid", "type": "TStringGrid"}, "actbuttonsimages": {"name": "ActButtonsImages", "type": "TImageList"}, "sblock": {"name": "sbLock", "type": "TSpeedButton"}, "lockuser": {"name": "LockUser", "type": "TAction"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "setoptions": {"name": "SetOptions", "type": "TAction"}, "actbalacc": {"name": "actBalAcc", "type": "TAction"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "btnusersadvgrant": {"name": "btnUsersAdvGrant", "type": "TBitBtn"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "cmexcelqrants": {"name": "CMExcelqrants", "type": "TCMExcelExport"}, "animate1": {"name": "Animate1", "type": "TAnimate"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "edusinflang": {"name": "edUsInfLang", "type": "TSearchCombo"}, "lang2": {"name": "Lang2", "type": "TSearchCombo"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "fevents": {"name": "FEvents", "type": "IAdministrationFormEvents"}}, {});
  U.init(async () => {
    U.const("crMyDrag1", 6);
    U.const("crMyDra2", 7);
    U.const("csClasses", 0);
    U.const("csGroups", 1);
    U.const("csUsers", 2);
    U.const("csModules", 3);
    U.const("csOrders", 4);
    U.const("icoGroup", 0);
    U.const("icoUser", 4);
    U.const("icoAdm", 11);
    U.const("icoLockUser", 13);
    U.const("_ExpresDel", "'");
    U.const("_ExpresBacStart", "(");
    U.const("_ExprecBacStop", ")");
    U.const("csTree", ["Classes", "Groups", "Users", "Modules", "Orders"]);
    U.const("csExceptTabs", [4]);
    U.const("PRightInd", 0);
    U.const("PLeftInd", 1);
    U.const("PDelInd", 2);
    U.const("PAddInd", 3);
    U.const("SpeedButtonWidth", 13);
    U.const("SpeedButtonHeight", 13);
    U.const("SpeedButtonInterval", 1);
    U.const("SpeedButtonFirstInterval", 3);
    U.var_("AdministrationForm", null, "TAdministrationForm");
    U.var_("FirsCreated", true, "Boolean");
    U.var_("_CGPanWidth", 30, "Integer");
    U.var_("_ResCGMod", true, "Boolean");
    U.var_("_Dec", " desc", "String");
    U.var_("TempPic", null, "TPicture");
  });
  U.func("IntToBool", async function IntToBool(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"val": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["val"]);
  L0["result"] = $.not(($.eq(L0["val"], 0)));
  return L0.result;
}, {"params": ["Val"], "kind": "function", "ptypes": ["Integer"]});
  U.func("BoolToInt", async function BoolToInt(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["value"]);
  L0["result"] = (await $.call(C, "Ord", [L0["value"]]));
  return L0.result;
}, {"params": ["Value"], "kind": "function", "ptypes": ["Boolean"]});
  U.method("THeaderButton", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "THeaderButton", "Create", [L0["aowner"]], arguments);
  await $.set(C, "fState", (await $.v(C, "hsUnknown")));
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.func("Snd", async function Snd(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"comp": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["comp"]);
  await $.stmt((await $.mcall((await $.v(C, "AdministrationForm")), "SendMsg", [L0["comp"]])));
  await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
  return L0.result;
}, {"params": ["Comp"], "kind": "procedure", "ptypes": ["TWinControl"]});
  U.func("GetActiveUser", async function GetActiveUser(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.mv((await $.mv((await $.mv((await $.v(C, "AdministrationForm")), "tvMain")), "Selected")), "Text"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdministrationForm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TAdministrationForm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TAdministrationForm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TAdministrationForm", "Initialize", null, arguments);
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
  U.method("TAdministrationForm", "SendMsg", async function SendMsg(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"comp": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["comp"]);
  if ($.truthy((await $.call(C, "Assigned", [L0["comp"]])))) {
    await $.stmt((await $.call(C, "SendMessage", [(await $.mv(L0["comp"], "Handle")), (await $.v(C, "WM_USER")), 0, 0])));
  }
  return L0.result;
}, {"params": ["Comp"], "kind": "procedure", "ptypes": ["TWinControl"]});
  U.method("TAdministrationForm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdministrationForm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdministrationForm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdministrationForm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdministrationForm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdministrationForm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdministrationForm", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdministrationForm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdministrationForm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdministrationForm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdministrationForm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdministrationForm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdministrationForm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdministrationForm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdministrationForm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdministrationForm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdministrationForm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdministrationForm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdministrationForm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TAdministrationForm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TAdministrationForm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAdministrationForm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAdministrationForm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TAdministrationForm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TAdministrationForm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TAdministrationForm", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TAdministrationForm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAdministrationForm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAdministrationForm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAdministrationForm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TAdministrationForm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TAdministrationForm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAdministrationForm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TAdministrationForm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TAdministrationForm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAdministrationForm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TAdministrationForm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["createactionbuttons"] = $.fn(async function CreateActionButtons() {
  const L1 = {result: undefined, "met": $.rec("theaderbuttonmethods")};
  {
    const $t1 = L1["met"];
    await $.wset([$t1], "DelCol", (await $.wv([$t1], "HeaderDel", C, false)), C);
    await $.wset([$t1], "MoveRight", (await $.wv([$t1], "HeaderMoveRigth", C, false)), C);
    await $.wset([$t1], "MoveLeft", (await $.wv([$t1], "HeaderMoveLeft", C, false)), C);
    await $.wset([$t1], "Add", (await $.wv([$t1], "HeaderAdd", C, false)), C);
  }
  await $.stmt((await $.call(C, "CreateHederControlActions", [(await $.v(C, "hcQroupHead")), (await $.v(C, "ActButtonsImages")), L1["met"]])));
  return L1.result;
});
  await $.set(C, "AdministrationData", (await $.mcall((await $.v(C, "TAdministrationData")), "Create", [Self])));
  await $.set(C, "AdministrationForm", Self);
  await $.set(C, "_CGPanWidth", (await $.mv((await $.v(C, "cgrModules")), "PanelHeight")));
  await $.stmt($.call(C, "RealignHC", []));
  await $.set(C, "rptAdvgrant", (await $.call(C, "TrptAdvgrant", [Self])));
  await $.mset((await $.v(C, "pnlCtrlBr")), "Align", (await $.v(C, "alClient")));
  await $.stmt($.callv(L0["createactionbuttons"], []));
  await $.mset((await $.v(C, "pcOrders")), "ActivePageIndex", 0);
  await $.set(C, "fingers", (await $.mcall((await $.v(C, "Tfingers")), "Create", [Self])));
  if ($.truthy((await $.v(C, "FirsCreated")))) {
    await $.stmt((await $.call(C, "CreateTreeList", [true, "İstifadəçilər", (await $.mv((await $.v(C, "AdministrationData")), "Usersdata")), "Name", "is_adm", (await $.v(C, "icoUser"))])));
    await $.stmt((await $.call(C, "CreateTreeList", [true, "Qruplar", (await $.mv((await $.v(C, "AdministrationData")), "Groupsdata")), "Obj", (await $.v(C, "EmptyStr")), (await $.v(C, "icoGroup"))])));
    await $.set(C, "FirsCreated", false);
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "tvMainChange", async function tvMainChange(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "node": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "node"]);
  await $.mset((await $.v(C, "pnlGrid")), "Visible", (await $.and_(($.eq((await $.mv(L0["node"], "Level")), 0)), async () => $.not(($.in_((await $.mv(L0["node"], "Index")), (await $.v(C, "csExceptTabs"))))))));
  await $.stmt((await $.call(C, "VSDDataChange", [$.not(((await $.mv((await $.v(C, "pnlGrid")), "Visible"))))])));
  await $.mset((await $.v(C, "actBalAcc")), "Enabled", (await $.and_(($.ne((await $.mv(L0["node"], "level")), 0)), async () => ($.eq((await $.mv((await $.mv(L0["node"], "Parent")), "index")), 2)))));
  if ($.truthy($.eq((await $.mv((await $.mv(L0["node"], "Parent")), "index")), 2))) {
    await $.mset((await $.v(C, "Lang2")), "ItemIndex", (await $.mv((await $.v(C, "edUsInfLang")), "ItemIndex")));
  }
  {
    const $t2 = (await $.mv((await $.v(C, "AdministrationData")), "restrict"));
    await $.stmt($.wcall([$t2], "close", [], C));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["usern", (await $.mv((await $.mv((await $.wv([$t2], "tvMain", C, false)), "Selected")), "Text"))], C)));
    await $.stmt($.wcall([$t2], "open", [], C));
    if ($.truthy($.eq((await $.mv((await $.wcall([$t2], "FieldByName", ["grantee"], C)), "AsString")), (await $.mv((await $.mv((await $.wv([$t2], "tvMain", C, false)), "Selected")), "Text"))))) {
      await $.mset((await $.wv([$t2], "CheckBox1", C, false)), "Checked", (await $.wv([$t2], "true", C, false)));
    } else {
      await $.mset((await $.wv([$t2], "CheckBox1", C, false)), "Checked", (await $.wv([$t2], "false", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Node"], "kind": "procedure", "ptypes": ["TObject", "TTreeNode"]});
  U.method("TAdministrationForm", "GetNode", async function GetNode(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"nodelist": $.copyArg(p0), "value": $.copyArg(p1), result: null, "i": 0};
  await $.fixArgs(L0, ["nodelist", "value"]);
  L0["result"] = null;
  { const $t3 = $.sub((await $.mv(L0["nodelist"], "Count")), 1);
    L0["i"] = 0;
    let $t4 = true;
    for (;;) {
      if (!$t4) { L0["i"] = $.succ(L0["i"], 1); }
      $t4 = false;
      if (!($.ord(L0["i"]) <= $.ord($t3))) break;
      if ($.truthy($.eq((await $.mv((await $.idx(L0["nodelist"], [L0["i"]])), "Text")), L0["value"]))) {
        L0["result"] = (await $.idx(L0["nodelist"], [L0["i"]]));
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["NodeList", "Value"], "kind": "function", "ptypes": ["TTreeNodes", "String"]});
  U.method("TAdministrationForm", "CreateTreeList", async function CreateTreeList(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"iscreate": $.copyArg(p0), "node": $.copyArg(p1), "data": $.copyArg(p2), "field": $.copyArg(p3), "admfield": $.copyArg(p4), "imageid": $.copyArg(p5), result: undefined, "tempnode": null, "parentnode": null, "bk": null, "rec": 0};
  await $.fixArgs(L0, ["iscreate", "node", "data", "field", "admfield", "imageid"]);
  if ($.truthy($.not(((await $.mv((await $.mv((await $.v(C, "AdministrationData")), "UsersData")), "Active")))))) {
    return L0.result;
  }
  L0["parentnode"] = (await $.call(C, "GetNode", [(await $.mv((await $.v(C, "tvMain")), "Items")), L0["node"]]));
  if ($.truthy(L0["iscreate"])) {
    {
      const $t5 = L0["data"];
      const $t6 = (await $.wv([$t5], "TempNode", { get: async () => L0["tempnode"], set: async (v) => { L0["tempnode"] = v; }, local: true }, false));
      await $.wset([$t5, $t6], "BK", (await $.wv([$t5, $t6], "GetBookmark", C, false)), { get: async () => L0["bk"], set: async (v) => { L0["bk"] = v; }, local: true });
      await $.stmt($.wcall([$t5, $t6], "First", [], C));
      while ($.truthy($.not((await $.wv([$t5, $t6], "Eof", C, false))))) {
        {
          const $t7 = (await $.wv([$t5, $t6], "tvMain", C, false));
          await $.wset([$t5, $t6, $t7], "TempNode", (await $.mcall((await $.wv([$t5, $t6, $t7], "Items", C, false)), "AddChild", [(await $.wv([$t5, $t6, $t7], "ParentNode", { get: async () => L0["parentnode"], set: async (v) => { L0["parentnode"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t5, $t6, $t7], "FieldByName", [(await $.wv([$t5, $t6, $t7], "Field", { get: async () => L0["field"], set: async (v) => { L0["field"] = v; }, local: true }, false))], C)), "AsString"))])), { get: async () => L0["tempnode"], set: async (v) => { L0["tempnode"] = v; }, local: true });
        }
        if ($.truthy((await $.and_(($.ne((await $.wv([$t5, $t6], "AdmField", { get: async () => L0["admfield"], set: async (v) => { L0["admfield"] = v; }, local: true }, false)), (await $.wv([$t5, $t6], "EmptyStr", C, false)))), async () => ($.eq((await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["is_adm"], C)), "AsInteger")), 1)))))) {
          await $.wset([$t5, $t6], "ImageIndex", (await $.wv([$t5, $t6], "icoAdm", C, false)), C);
          await $.wset([$t5, $t6], "SelectedIndex", (await $.wv([$t5, $t6], "icoAdm", C, false)), C);
        } else {
          if ($.truthy((await $.and_(($.ne((await $.wv([$t5, $t6], "AdmField", { get: async () => L0["admfield"], set: async (v) => { L0["admfield"] = v; }, local: true }, false)), (await $.wv([$t5, $t6], "EmptyStr", C, false)))), async () => ($.eq((await $.mv((await $.wcall([$t5, $t6], "FieldByName", ["is_locked"], C)), "AsInteger")), 1)))))) {
            await $.wset([$t5, $t6], "ImageIndex", (await $.wv([$t5, $t6], "icoLockUser", C, false)), C);
            await $.wset([$t5, $t6], "SelectedIndex", (await $.wv([$t5, $t6], "icoLockUser", C, false)), C);
          } else {
            await $.wset([$t5, $t6], "ImageIndex", (await $.wv([$t5, $t6], "ImageId", { get: async () => L0["imageid"], set: async (v) => { L0["imageid"] = v; }, local: true }, false)), C);
            await $.wset([$t5, $t6], "SelectedIndex", (await $.wv([$t5, $t6], "ImageId", { get: async () => L0["imageid"], set: async (v) => { L0["imageid"] = v; }, local: true }, false)), C);
          }
        }
        await $.stmt($.wcall([$t5, $t6], "Next", [], C));
        await $.tick();
      }
      if ($.truthy((await $.wcall([$t5, $t6], "BookmarkValid", [(await $.wv([$t5, $t6], "BK", { get: async () => L0["bk"], set: async (v) => { L0["bk"] = v; }, local: true }, false))], C)))) {
        await $.stmt((await $.wcall([$t5, $t6], "GotoBookmark", [(await $.wv([$t5, $t6], "BK", { get: async () => L0["bk"], set: async (v) => { L0["bk"] = v; }, local: true }, false))], C)));
      } else {
        await $.stmt($.wcall([$t5, $t6], "First", [], C));
      }
    }
  } else {
    await $.mcall(L0["parentnode"], "DeleteChildren", []);
    {
      const $t8 = L0["data"];
      try {
        await $.wset([$t8], "Rec", (await $.wv([$t8], "RecNo", C, false)), { get: async () => L0["rec"], set: async (v) => { L0["rec"] = v; }, local: true });
        await $.stmt($.wcall([$t8], "Refresh", [], C));
        if ($.truthy($.gt((await $.wv([$t8], "Rec", { get: async () => L0["rec"], set: async (v) => { L0["rec"] = v; }, local: true }, false)), (await $.wv([$t8], "RecNo", C, false))))) {
          await $.stmt($.wcall([$t8], "Last", [], C));
        } else {
          await $.wset([$t8], "RecNo", (await $.wv([$t8], "Rec", { get: async () => L0["rec"], set: async (v) => { L0["rec"] = v; }, local: true }, false)), C);
        }
      } finally {
      }
    }
  }
  return L0.result;
}, {"params": ["IsCreate", "Node", "Data", "Field", "AdmField", "ImageId"], "kind": "procedure", "ptypes": ["Boolean", "String", "TDataSet", "String", "String", "Integer"]});
  U.method("TAdministrationForm", "RecreateTreeList", async function RecreateTreeList(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "CreateTreeList", [false, "İstifadəçilər", (await $.mv((await $.v(C, "AdministrationData")), "Usersdata")), "Name", "is_adm", (await $.v(C, "icoUser"))])));
  await $.stmt((await $.call(C, "CreateTreeList", [true, "İstifadəçilər", (await $.mv((await $.v(C, "AdministrationData")), "Usersdata")), "Name", "is_adm", (await $.v(C, "icoUser"))])));
  await $.stmt((await $.call(C, "CreateTreeList", [false, "Qruplar", (await $.mv((await $.v(C, "AdministrationData")), "Groupsdata")), "Obj", (await $.v(C, "EmptyStr")), (await $.v(C, "icoGroup"))])));
  await $.stmt((await $.call(C, "CreateTreeList", [true, "Qruplar", (await $.mv((await $.v(C, "AdministrationData")), "Groupsdata")), "Obj", (await $.v(C, "EmptyStr")), (await $.v(C, "icoGroup"))])));
  await $.stmt((await $.call(C, "tvMainChange", [(await $.v(C, "tvMain")), (await $.mv((await $.v(C, "tvMain")), "Selected"))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TAdministrationForm", "VSDDataChange", async function VSDDataChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"cbcng": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["cbcng"]);
  if ($.truthy(L0["cbcng"])) {
    await $.stmt((await $.call(C, "CBChange", [(await $.mv((await $.mv((await $.v(C, "tvMain")), "Selected")), "Text"))])));
  } else {
    await $.stmt((await $.call(C, "GRChange", [(await $.idx((await $.v(C, "csTree")), [(await $.mv((await $.mv((await $.v(C, "tvMain")), "Selected")), "Index"))]))])));
  }
  return L0.result;
}, {"params": ["CBCng"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TAdministrationForm", "tvMainCustomDraw", async function tvMainCustomDraw(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "arect": $.copyArg(p1), "defaultdraw": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "arect"]);
  return L0.result;
}, {"params": ["Sender", "ARect", "DefaultDraw"], "kind": "procedure", "ptypes": ["TCustomTreeView", "TRect", "Boolean"]});
  U.method("TAdministrationForm", "LoadUserInfo", async function LoadUserInfo(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"selitem": $.copyArg(p0), result: undefined, "m": ''};
  await $.fixArgs(L0, ["selitem"]);
  {
    const $t9 = (await $.v(C, "AdministrationData"));
    const $t10 = (await $.mv((await $.wv([$t9], "AdministrationData", C, false)), "UsersData"));
    await $.mcall((await $.wv([$t9, $t10], "edUsInfClass", C, false)), "Refresh", []);
    if ($.truthy($.not(((await $.wv([$t9, $t10], "Active", C, false)))))) {
      return L0.result;
    }
    await $.stmt((await $.wcall([$t9, $t10], "Locate", ["NAME", (await $.wv([$t9, $t10], "SelItem", { get: async () => L0["selitem"], set: async (v) => { L0["selitem"] = v; }, local: true }, false)), []], C)));
    if ($.truthy((await $.and_(((await $.mv((await $.wv([$t9, $t10], "ClassesData", C, false)), "Active"))), async () => ((await $.mcall((await $.wv([$t9, $t10], "Classesdata", C, false)), "Locate", ["id", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["CLASSID"], C)), "AsInteger")), []]))))))) {
      await $.mset((await $.wv([$t9, $t10], "edUsInfClass", C, false)), "ItemIndex", (await $.mcall((await $.mv((await $.wv([$t9, $t10], "edUsInfClass", C, false)), "Items")), "IndexOf", [(await $.mv((await $.mcall((await $.wv([$t9, $t10], "Classesdata", C, false)), "FieldByName", ["obj"])), "AsString"))])));
    } else {
      await $.mset((await $.wv([$t9, $t10], "edUsInfClass", C, false)), "ItemIndex", 0);
    }
    if ($.truthy((await $.and_((await $.and_(((await $.mv((await $.wv([$t9, $t10], "FilialData", C, false)), "Active"))), async () => $.not(((await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["FILIALID"], C)), "IsNull")))))), async () => ((await $.mcall((await $.wv([$t9, $t10], "FilialData", C, false)), "Locate", ["id", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["FILIALID"], C)), "AsInteger")), []]))))))) {
      await $.mset((await $.wv([$t9, $t10], "edUsInfFilial", C, false)), "ItemIndex", (await $.mcall((await $.mv((await $.wv([$t9, $t10], "edUsInfFilial", C, false)), "Items")), "IndexOf", [(await $.mv((await $.mcall((await $.wv([$t9, $t10], "FilialData", C, false)), "FieldByName", ["name"])), "AsString"))])));
    } else {
      await $.mset((await $.wv([$t9, $t10], "edUsInfFilial", C, false)), "ItemIndex", 0);
    }
    if ($.truthy((await $.and_((await $.and_(((await $.mv((await $.wv([$t9, $t10], "SlLang", C, false)), "Active"))), async () => $.not(((await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["LANG"], C)), "IsNull")))))), async () => ((await $.mcall((await $.wv([$t9, $t10], "SlLang", C, false)), "Locate", ["NAME", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["LANG"], C)), "AsString")), []]))))))) {
      await $.mset((await $.wv([$t9, $t10], "edUsInfLang", C, false)), "ItemIndex", (await $.mcall((await $.mv((await $.wv([$t9, $t10], "edUsInfLang", C, false)), "Items")), "IndexOf", [(await $.mv((await $.mcall((await $.wv([$t9, $t10], "SlLang", C, false)), "FieldByName", ["NAME"])), "AsString"))])));
    } else {
      await $.mset((await $.wv([$t9, $t10], "edUsInfLang", C, false)), "ItemIndex", 0);
    }
    await $.mset((await $.wv([$t9, $t10], "edUsInfName", C, false)), "Text", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["NAME"], C)), "AsString")));
    await $.mset((await $.wv([$t9, $t10], "edUsInfFName", C, false)), "Text", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["FULLNAME"], C)), "AsString")));
    await $.mset((await $.wv([$t9, $t10], "edUsInfDescr", C, false)), "Text", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["Description"], C)), "AsString")));
    await $.mset((await $.wv([$t9, $t10], "sbLock", C, false)), "Down", (await $.wcall([$t9, $t10], "IntToBool", [(await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["is_locked"], C)), "AsInteger"))], C)));
    await $.mset((await $.wv([$t9, $t10], "LockUser", C, false)), "Checked", (await $.mv((await $.wv([$t9, $t10], "sbLock", C, false)), "Down")));
    await $.mcall((await $.mv((await $.wv([$t9, $t10], "AdministrationData", C, false)), "restrict")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t9, $t10], "AdministrationData", C, false)), "restrict")), "SetVariable", ["usern", (await $.mv((await $.wv([$t9, $t10], "edUsInfName", C, false)), "Text"))])));
    await $.mcall((await $.mv((await $.wv([$t9, $t10], "AdministrationData", C, false)), "restrict")), "open", []);
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t9, $t10], "AdministrationData", C, false)), "restrict")), "RecordCount")), 0))) {
      await $.mset((await $.wv([$t9, $t10], "CheckBox1", C, false)), "Checked", (await $.wv([$t9, $t10], "true", C, false)));
    } else {
      await $.mset((await $.wv([$t9, $t10], "CheckBox1", C, false)), "Checked", (await $.wv([$t9, $t10], "false", C, false)));
    }
    {
      const $t11 = (await $.wv([$t9, $t10], "edUsInfPhone", C, false));
      await $.wset([$t9, $t10, $t11], "M", (await $.wv([$t9, $t10, $t11], "EditMask", C, false)), { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true });
      await $.wset([$t9, $t10, $t11], "EditMask", (await $.wv([$t9, $t10, $t11], "emptystr", C, false)), C);
      await $.wset([$t9, $t10, $t11], "Text", (await $.mv((await $.wcall([$t9, $t10, $t11], "FieldByName", ["Phone"], C)), "AsString")), C);
      await $.wset([$t9, $t10, $t11], "EditMask", (await $.wv([$t9, $t10, $t11], "M", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false)), C);
    }
    await $.mset((await $.wv([$t9, $t10], "edUsInfCrDat", C, false)), "Text", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["CTIME"], C)), "AsString")));
    await $.stmt((await $.mcall((await $.wv([$t9, $t10], "UserGroupData", C, false)), "SetVariable", ["UserID", (await $.mv((await $.mcall((await $.wv([$t9, $t10], "UsersData", C, false)), "FieldByName", ["USER#"])), "ASInteger"))])));
    await $.mcall((await $.wv([$t9, $t10], "UserGroupData", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["SelItem"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TAdministrationForm", "PrepareOrderList", async function PrepareOrderList(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "field": $.copyArg(p1), "sender": $.copyArg(p2), "refreshdata": (p3 === undefined ? false : p3), result: undefined};
  await $.fixArgs(L0, ["dataset", "field", "sender", "refreshdata"]);
  {
    const $t12 = L0["dataset"];
    const $t13 = (await $.wv([$t12], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    const $t14 = (await $.wv([$t12, $t13], "Items", C, false));
    if ($.truthy($.not(((await $.wv([$t12, $t13, $t14], "Active", C, false)))))) {
      await $.stmt($.wcall([$t12, $t13, $t14], "Open", [], C));
    }
    if ($.truthy((await $.wv([$t12, $t13, $t14], "RefreshData", { get: async () => L0["refreshdata"], set: async (v) => { L0["refreshdata"] = v; }, local: true }, false)))) {
      await $.stmt($.wcall([$t12, $t13, $t14], "Clear", [], C));
      await $.stmt($.wcall([$t12, $t13, $t14], "Refresh", [], C));
    }
    if ($.truthy((await $.and_(($.eq((await $.wv([$t12, $t13, $t14], "Count", C, false)), 0)), async () => ($.ne((await $.wv([$t12, $t13, $t14], "RecordCount", C, false)), 0)))))) {
      await $.stmt($.wcall([$t12, $t13, $t14], "DisableControls", [], C));
      await $.wset([$t12, $t13, $t14], "Filtered", (await $.wv([$t12, $t13, $t14], "False", C, false)), C);
      await $.stmt($.wcall([$t12, $t13, $t14], "First", [], C));
      while ($.truthy($.not(((await $.wv([$t12, $t13, $t14], "EOF", C, false)))))) {
        await $.stmt((await $.wcall([$t12, $t13, $t14], "Add", [(await $.mv((await $.wcall([$t12, $t13, $t14], "FieldByName", [(await $.wv([$t12, $t13, $t14], "Field", { get: async () => L0["field"], set: async (v) => { L0["field"] = v; }, local: true }, false))], C)), "AsString"))], C)));
        { const $t15 = await $.iset((await $.wv([$t12, $t13, $t14], "Checked", C, false)), [$.sub((await $.wv([$t12, $t13, $t14], "Count", C, false)), 1)], (await $.wv([$t12, $t13, $t14], "True", C, false))); if ($t15 !== undefined) { await $.wset([$t12, $t13, $t14], "Checked", $t15, C); } }
        await $.stmt($.wcall([$t12, $t13, $t14], "Next", [], C));
        await $.tick();
      }
      await $.stmt($.wcall([$t12, $t13, $t14], "EnableControls", [], C));
    }
  }
  return L0.result;
}, {"params": ["DataSet", "Field", "Sender", "RefreshData"], "kind": "procedure", "ptypes": ["TOracleDataSet", "String", "TCheckListBox", "Boolean"]});
  U.method("TAdministrationForm", "CBChange", async function CBChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"selitem": $.copyArg(p0), result: false, "reftab": null};
  await $.fixArgs(L0, ["selitem"]);
  L0["viewacttab"] = $.fn(async function ViewActTab(p0) {
  const L1 = {"tab": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["tab"]);
  L1["reviewtabs"] = $.fn(async function ReViewTabs() {
  const L2 = {result: undefined, "i": 0};
  await $.mset((await $.v(C, "pnlCtrlBr")), "Visible", false);
  {
    const $t16 = (await $.v(C, "pcMain"));
    { const $t17 = $.sub((await $.wv([$t16], "PageCount", C, false)), 1);
      await $.wset([$t16], "i", 0, { get: async () => L2["i"], set: async (v) => { L2["i"] = v; }, local: true });
      let $t18 = true;
      for (;;) {
        if (!$t18) { await $.wset([$t16], "i", $.succ((await $.wv([$t16], "i", { get: async () => L2["i"], set: async (v) => { L2["i"] = v; }, local: true }, false)), 1), { get: async () => L2["i"], set: async (v) => { L2["i"] = v; }, local: true }); }
        $t18 = false;
        if (!($.ord((await $.wv([$t16], "i", { get: async () => L2["i"], set: async (v) => { L2["i"] = v; }, local: true }, false))) <= $.ord($t17))) break;
        await $.mset((await $.idx((await $.wv([$t16], "Pages", C, false)), [(await $.wv([$t16], "i", { get: async () => L2["i"], set: async (v) => { L2["i"] = v; }, local: true }, false))])), "TabVisible", $.eq((await $.idx((await $.wv([$t16], "Pages", C, false)), [(await $.wv([$t16], "i", { get: async () => L2["i"], set: async (v) => { L2["i"] = v; }, local: true }, false))])), (await $.wv([$t16], "RefTab", { get: async () => L0["reftab"], set: async (v) => { L0["reftab"] = v; }, local: true }, false))));
        await $.tick();
      }
    }
    if ($.truthy((await $.wcall([$t16], "Assigned", [(await $.wv([$t16], "RefTab", { get: async () => L0["reftab"], set: async (v) => { L0["reftab"] = v; }, local: true }, false))], C)))) {
      await $.wset([$t16], "ActivePage", (await $.wv([$t16], "RefTab", { get: async () => L0["reftab"], set: async (v) => { L0["reftab"] = v; }, local: true }, true)), C);
    }
  }
  return L2.result;
});
  { const $t19 = L1["tab"];
    if ($.eq($t19, (await $.v(C, "atUsers")))) {
      await $.mset((await $.v(C, "pcMain")), "ActivePage", (await $.v(C, "tbInfo")));
      await $.mset((await $.v(C, "pcDepSub")), "ActivePage", (await $.v(C, "tbsUserGroup")));
      await $.mset((await $.v(C, "tsDepSub")), "TabIndex", 0);
      await $.mset((await $.v(C, "tbInfo")), "TabVisible", true);
      await $.mset((await $.v(C, "tbModules")), "TabVisible", true);
      await $.mset((await $.v(C, "tbTables")), "TabVisible", true);
      await $.mset((await $.v(C, "tbGroup")), "TabVisible", false);
      await $.mset((await $.v(C, "tbOrders")), "TabVisible", false);
    }
    else if ($.eq($t19, (await $.v(C, "atGroups")))) {
      L0["reftab"] = (await $.ref_(C, "tbGroup"));
      await $.stmt($.callv(L1["reviewtabs"], []));
    }
    else if ($.eq($t19, (await $.v(C, "atOrders")))) {
      L0["reftab"] = (await $.ref_(C, "tbOrders"));
      await $.stmt($.callv(L1["reviewtabs"], []));
    }
  }
  return L1.result;
});
  {
    const $t20 = (await $.v(C, "AdministrationData"));
    { const $t21 = (await $.mv((await $.mv((await $.mv((await $.wv([$t20], "tvMain", C, false)), "Selected")), "Parent")), "Index"));
      if ($.eq($t21, (await $.wv([$t20], "csUsers", C, false)))) {
        await $.stmt((await $.wcall([$t20], "LoadUserInfo", [(await $.wv([$t20], "SelItem", { get: async () => L0["selitem"], set: async (v) => { L0["selitem"] = v; }, local: true }, false))], C)));
        if ($.truthy((await $.mv((await $.wv([$t20], "UsModulesData", C, false)), "Active")))) {
          await $.mcall((await $.wv([$t20], "UsModulesData", C, false)), "Close", []);
        }
        if ($.truthy((await $.mv((await $.wv([$t20], "UsTablesData", C, false)), "Active")))) {
          await $.mcall((await $.wv([$t20], "UsTablesData", C, false)), "Close", []);
        }
        await $.stmt((await $.wcall([$t20], "ViewActTab", [(await $.wv([$t20], "atUsers", C, false))], { get: async () => L0["viewacttab"], set: async (v) => { L0["viewacttab"] = v; }, local: true })));
      }
      else if ($.eq($t21, (await $.wv([$t20], "csGroups", C, false)))) {
        await $.stmt((await $.wcall([$t20], "RefreshLists", [(await $.wv([$t20], "selitem", { get: async () => L0["selitem"], set: async (v) => { L0["selitem"] = v; }, local: true }, false))], C)));
        await $.stmt((await $.wcall([$t20], "ViewActTab", [(await $.wv([$t20], "atGroups", C, false))], { get: async () => L0["viewacttab"], set: async (v) => { L0["viewacttab"] = v; }, local: true })));
      }
      else {
        await $.stmt((await $.wcall([$t20], "PrepareOrderList", [(await $.wv([$t20], "repGroupsData", C, false)), "OBJ", (await $.wv([$t20], "cbGroupsOrder", C, false))], C)));
        await $.stmt((await $.wcall([$t20], "ViewActTab", [(await $.wv([$t20], "atOrders", C, false))], { get: async () => L0["viewacttab"], set: async (v) => { L0["viewacttab"] = v; }, local: true })));
      }
    }
  }
  await $.mset((await $.v(C, "pnlCtrlBr")), "Visible", true);
  L0["result"] = true;
  return L0.result;
}, {"params": ["SelItem"], "kind": "function", "ptypes": ["String"]});
  U.method("TAdministrationForm", "GRChange", async function GRChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"selitem": $.copyArg(p0), result: false, "handcom": null};
  await $.fixArgs(L0, ["selitem"]);
  {
    const $t22 = (await $.v(C, "AdministrationData"));
    await $.wset([$t22], "Result", (await $.wv([$t22], "False", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    await $.wset([$t22], "HandCom", (await $.wcall([$t22], "FindComponent", [(await $.wv([$t22], "SelItem", { get: async () => L0["selitem"], set: async (v) => { L0["selitem"] = v; }, local: true }, false))], C)), { get: async () => L0["handcom"], set: async (v) => { L0["handcom"] = v; }, local: true });
    if ($.truthy((await $.wcall([$t22], "Assigned", [(await $.wv([$t22], "HandCom", { get: async () => L0["handcom"], set: async (v) => { L0["handcom"] = v; }, local: true }, false))], C)))) {
      await $.mset((await $.wv([$t22], "grShrcsrMK", C, false)), "DataSource", ((await $.wv([$t22], "HandCom", { get: async () => L0["handcom"], set: async (v) => { L0["handcom"] = v; }, local: true }, false))));
      if ($.truthy($.eq((await $.mv((await $.wv([$t22], "HandCom", { get: async () => L0["handcom"], set: async (v) => { L0["handcom"] = v; }, local: true }, false)), "Name")), "Modules"))) {
        await $.mset((await $.wv([$t22], "grShrcsrMK", C, false)), "PopupMenu", (await $.wv([$t22], "ppMod", C, false)));
      } else {
        await $.mset((await $.wv([$t22], "grShrcsrMK", C, false)), "PopupMenu", null);
      }
      await $.wset([$t22], "Result", (await $.wv([$t22], "True", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    }
  }
  return L0.result;
}, {"params": ["SelItem"], "kind": "function", "ptypes": ["String"]});
  U.method("TAdministrationForm", "RealignHC", async function RealignHC(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t23 = (await $.mv((await $.v(C, "hcModules")), "Sections"));
    await $.mset((await $.idx((await $.wv([$t23], "Items", C, false)), [0])), "Width", (await $.mv((await $.wv([$t23], "grPan1", C, false)), "Width")));
    await $.mset((await $.idx((await $.wv([$t23], "Items", C, false)), [1])), "Width", (await $.mv((await $.wv([$t23], "grPan2", C, false)), "Width")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TAdministrationForm", "tbModulesResize", async function tbModulesResize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t24 = (await $.v(C, "cgrModules"));
    await $.wset([$t24], "RowCount", $.idiv((await $.wv([$t24], "Height", C, false)), (await $.wv([$t24], "_CGPanWidth", C, false))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "hcModulesSectionResize", async function hcModulesSectionResize(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"headercontrol": $.copyArg(p0), "section": $.copyArg(p1), result: undefined, "temp": null};
  await $.fixArgs(L0, ["headercontrol", "section"]);
  L0["temp"] = (await $.call(C, "FindComponent", [$.add("grPan", (await $.call(C, "IntToStr", [$.add((await $.mv(L0["section"], "Index")), 1)])))]));
  if ($.truthy((await $.call(C, "Assigned", [L0["temp"]])))) {
    await $.mset(L0["temp"], "Width", (await $.mv(L0["section"], "Width")));
    await $.mcall((await $.v(C, "cgrModules")), "Repaint", []);
  }
  return L0.result;
}, {"params": ["HeaderControl", "Section"], "kind": "procedure", "ptypes": ["THeaderControl", "THeaderSection"]});
  U.method("TAdministrationForm", "cgrModulesPaintPanel", async function cgrModulesPaintPanel(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"dbctrlgrid": $.copyArg(p0), "index": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["dbctrlgrid", "index"]);
  L0["setcolor"] = $.fn(async function SetColor(p0) {
  const L1 = {"col": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["col"]);
  await $.mset((await $.mv((await $.v(C, "grPan1")), "Font")), "Color", L1["col"]);
  await $.mset((await $.mv((await $.v(C, "grPan2")), "Font")), "Color", L1["col"]);
  await $.mset((await $.mv((await $.v(C, "grPan3")), "Font")), "Color", L1["col"]);
  return L1.result;
});
  if ($.truthy($.eq(L0["index"], (await $.mv(L0["dbctrlgrid"], "PanelIndex"))))) {
    await $.stmt((await $.callv(L0["setcolor"], [(await $.v(C, "clWhite"))])));
  } else {
    await $.stmt((await $.callv(L0["setcolor"], [(await $.v(C, "clBlack"))])));
  }
  return L0.result;
}, {"params": ["DBCtrlGrid", "Index"], "kind": "procedure", "ptypes": ["TDBCtrlGrid", "Integer"]});
  U.method("TAdministrationForm", "PostModChngExecute", async function PostModChngExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "brform": null};
  await $.fixArgs(L0, ["sender"]);
  L0["brform"] = (await $.mcall((await $.v(C, "TBarForm")), "Create", [Self]));
  {
    const $t25 = (await $.v(C, "AdministrationData"));
    const $t26 = (await $.mv((await $.wv([$t25], "AdministrationData", C, false)), "UsModulesData"));
    await $.stmt((await $.mcall((await $.wv([$t25, $t26], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "Execute", ["Module Access", "Module access", "Process...", 10, $.mul(((await $.wv([$t25, $t26], "RecordCount", C, false))), 10)])));
    await $.stmt((await $.mcall((await $.wv([$t25, $t26], "pcADM", C, false)), "CallProcedure", ["lockunlockuser", [(await $.mv((await $.mv((await $.wv([$t25, $t26], "tvMain", C, false)), "Selected")), "Text")), (await $.wv([$t25, $t26], "True", C, false))]])));
    await $.stmt((await $.wcall([$t25, $t26], "ExecuteChange", [(await $.wv([$t25, $t26], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), (await $.wv([$t25, $t26], "UsModulesData", C, false)), "ModAcc", (await $.wv([$t25, $t26], "acModule", C, false))], C)));
    if ($.truthy(((await $.mv((await $.wv([$t25, $t26], "cgrModules", C, false)), "CanFocus"))))) {
      await $.mcall((await $.wv([$t25, $t26], "cgrModules", C, false)), "Refresh", []);
    }
    if ($.truthy((await $.mv((await $.wv([$t25, $t26], "UsTablesData", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t25, $t26], "UsTablesData", C, false)), "Refresh", []);
    }
    await $.stmt((await $.wcall([$t25, $t26], "LoadUserInfo", [(await $.mv((await $.mv((await $.wv([$t25, $t26], "tvMain", C, false)), "Selected")), "Text"))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "IAdministrationForm_Get_Color", async function IAdministrationForm_Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdministrationForm", "IAdministrationForm_Get_Font", async function IAdministrationForm_Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdministrationForm", "IAdministrationForm__Set_Font", async function IAdministrationForm__Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TAdministrationForm", "IAdministrationForm_Set_Color", async function IAdministrationForm_Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TAdministrationForm", "IAdministrationForm_Set_Font", async function IAdministrationForm_Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TAdministrationForm", "DBText1Click", async function DBText1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t27 = (await $.v(C, "cgrModules"));
    if ($.truthy((await $.and_((await $.wv([$t27], "CanFocus", C, false)), async () => $.not(((await $.wv([$t27], "Focused", C, false)))))))) {
      await $.stmt($.wcall([$t27], "SetFocus", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "PostTableChngExecute", async function PostTableChngExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "brform": null};
  await $.fixArgs(L0, ["sender"]);
  L0["brform"] = (await $.mcall((await $.v(C, "TBarForm")), "Create", [Self]));
  {
    const $t28 = (await $.v(C, "AdministrationData"));
    const $t29 = (await $.mv((await $.wv([$t28], "AdministrationData", C, false)), "UsTablesData"));
    if ($.truthy(($.in_((await $.wv([$t28, $t29], "State", C, false)), [(await $.wv([$t28, $t29], "dsEdit", C, false)), (await $.wv([$t28, $t29], "dsInsert", C, false))])))) {
      await $.stmt($.wcall([$t28, $t29], "Post", [], C));
    }
    await $.stmt((await $.mcall((await $.wv([$t28, $t29], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "Execute", ["Advanced Access", "Advanced access", "Process...", 10, $.mul(((await $.wv([$t28, $t29], "RecordCount", C, false))), 10)])));
    await $.stmt((await $.mcall((await $.wv([$t28, $t29], "pcADM", C, false)), "CallProcedure", ["lockunlockuser", [(await $.mv((await $.mv((await $.wv([$t28, $t29], "tvMain", C, false)), "Selected")), "Text")), (await $.wv([$t28, $t29], "True", C, false))]])));
    await $.stmt((await $.wcall([$t28, $t29], "ExecuteChange", [(await $.wv([$t28, $t29], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), (await $.wv([$t28, $t29], "UsTablesData", C, false)), "SetAdvancedGrants", (await $.wv([$t28, $t29], "acTable", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "PostGroupChngExecute", async function PostGroupChngExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "brform": null, "i": 0, "z": 0, "recr": false, "bk": null};
  await $.fixArgs(L0, ["sender"]);
  L0["sendm"] = $.fn(async function SendM(p0) {
  const L1 = {"comp": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["comp"]);
  await $.stmt((await $.call(C, "SendMsg", [L1["comp"]])));
  await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
  return L1.result;
});
  L0["checkaddusers"] = $.fn(async function CheckAddusers(p0) {
  const L1 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "z": 0};
  await $.fixArgs(L1, ["sender"]);
  {
    const $t30 = (await $.v(C, "AdministrationData"));
    const $t31 = (await $.wv([$t30], "GroupsData", C, false));
    if ($.truthy(($.is_((await $.wv([$t30, $t31], "Sender", { get: async () => L1["sender"], set: async (v) => { L1["sender"] = v; }, local: true }, false)), "TStringGrid")))) {
      {
        const $t32 = ((await $.wv([$t30, $t31], "Sender", { get: async () => L1["sender"], set: async (v) => { L1["sender"] = v; }, local: true }, false)));
        try {
          await $.mcall((await $.wv([$t30, $t31, $t32], "UsersData", C, false)), "DisableControls", []);
          { const $t33 = $.sub((await $.wv([$t30, $t31, $t32], "ColCount", C, false)), 1);
            await $.wset([$t30, $t31, $t32], "i", 0, { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true });
            let $t34 = true;
            for (;;) {
              if (!$t34) { await $.wset([$t30, $t31, $t32], "i", $.succ((await $.wv([$t30, $t31, $t32], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 1), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }); }
              $t34 = false;
              if (!($.ord((await $.wv([$t30, $t31, $t32], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))) <= $.ord($t33))) break;
              { const $t35 = $.sub((await $.wv([$t30, $t31, $t32], "RowCount", C, false)), 1);
                await $.wset([$t30, $t31, $t32], "z", 0, { get: async () => L1["z"], set: async (v) => { L1["z"] = v; }, local: true });
                let $t36 = true;
                for (;;) {
                  if (!$t36) { await $.wset([$t30, $t31, $t32], "z", $.succ((await $.wv([$t30, $t31, $t32], "z", { get: async () => L1["z"], set: async (v) => { L1["z"] = v; }, local: true }, false)), 1), { get: async () => L1["z"], set: async (v) => { L1["z"] = v; }, local: true }); }
                  $t36 = false;
                  if (!($.ord((await $.wv([$t30, $t31, $t32], "z", { get: async () => L1["z"], set: async (v) => { L1["z"] = v; }, local: true }, false))) <= $.ord($t35))) break;
                  if ($.truthy($.ne((await $.idx((await $.wv([$t30, $t31, $t32], "Cells", C, false)), [(await $.wv([$t30, $t31, $t32], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), (await $.wv([$t30, $t31, $t32], "z", { get: async () => L1["z"], set: async (v) => { L1["z"] = v; }, local: true }, false))])), (await $.wv([$t30, $t31, $t32], "EmptyStr", C, false))))) {
                    await $.stmt((await $.mcall((await $.wv([$t30, $t31, $t32], "UsersData", C, false)), "Locate", ["NAME", (await $.idx((await $.wv([$t30, $t31, $t32], "Cells", C, false)), [(await $.wv([$t30, $t31, $t32], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), (await $.wv([$t30, $t31, $t32], "z", { get: async () => L1["z"], set: async (v) => { L1["z"] = v; }, local: true }, false))])), []])));
                    if ($.truthy($.ne((await $.wv([$t30, $t31, $t32], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 2))) {
                      if ($.truthy((await $.mcall((await $.mv((await $.wv([$t30, $t31, $t32], "AdministrationData", C, false)), "pcAca")), "CallBooleanFunction", ["isadm", [(await $.mv((await $.mcall((await $.wv([$t30, $t31, $t32], "UsersData", C, false)), "FieldByName", ["NAME"])), "AsString"))]])))) {
                        await $.stmt((await $.mcall((await $.wv([$t30, $t31, $t32], "hbErrorBox", C, false)), "ShowMessage", [(await $.wcall([$t30, $t31, $t32], "Format", ["Administrator %s qrupda yalnız neytral istifadəçi ola bilər", [(await $.mv((await $.mcall((await $.wv([$t30, $t31, $t32], "UsersData", C, false)), "FieldByName", ["NAME"])), "AsString"))]], C))])));
                        $.abort();
                      }
                    }
                    if ($.truthy($.not(((await $.mcall((await $.wv([$t30, $t31, $t32], "pcADM", C, false)), "CallBooleanFunction", ["CheckForAddUseringroup", [(await $.mv((await $.mcall((await $.wv([$t30, $t31, $t32], "UsersData", C, false)), "FieldByName", ["USER#"])), "AsInteger")), (await $.mv((await $.wcall([$t30, $t31, $t32], "FieldByName", ["id"], C)), "AsInteger")), $.add((await $.wv([$t30, $t31, $t32], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 1)]])))))) {
                      await $.stmt((await $.mcall((await $.wv([$t30, $t31, $t32], "hbErrorBox", C, false)), "ShowMessage", [(await $.wcall([$t30, $t31, $t32], "Format", ["İstifadəçi %s bu qrupa daxil ola bilməz", [(await $.mv((await $.mcall((await $.wv([$t30, $t31, $t32], "UsersData", C, false)), "FieldByName", ["NAME"])), "AsString"))]], C))])));
                      $.abort();
                    }
                  }
                  await $.tick();
                }
              }
              await $.tick();
            }
          }
        } finally {
          await $.mcall((await $.wv([$t30, $t31, $t32], "UsersData", C, false)), "EnableControls", []);
        }
      }
    }
  }
  return L1.result;
});
  L0["recr"] = false;
  L0["brform"] = (await $.mcall((await $.v(C, "TBarForm")), "Create", [Self]));
  {
    const $t37 = (await $.v(C, "AdministrationData"));
    const $t38 = (await $.mv((await $.wv([$t37], "AdministrationData", C, false)), "GroupsData"));
    if ($.truthy($.not(((await $.mv((await $.wv([$t37, $t38], "UsersData", C, false)), "Active")))))) {
      return L0.result;
    }
    await $.stmt((await $.wcall([$t37, $t38], "CheckAddusers", [(await $.wv([$t37, $t38], "slGroupGrid", C, false))], { get: async () => L0["checkaddusers"], set: async (v) => { L0["checkaddusers"] = v; }, local: true })));
    try {
      await $.mcall((await $.wv([$t37, $t38], "UsersData", C, false)), "DisableControls", []);
      await $.stmt((await $.mcall((await $.wv([$t37, $t38], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "Execute", ["Group access", "Group access", "Process...", 10, 60])));
      await $.wset([$t37, $t38], "Recr", $.ne((await $.mv((await $.wv([$t37, $t38], "edGroupName", C, false)), "Text")), (await $.mv((await $.wcall([$t37, $t38], "FieldByName", ["obj"], C)), "AsString"))), { get: async () => L0["recr"], set: async (v) => { L0["recr"] = v; }, local: true });
      await $.stmt((await $.mcall((await $.wv([$t37, $t38], "pcADM", C, false)), "CallProcedure", ["updategroup", [(await $.mv((await $.wcall([$t37, $t38], "FieldByName", ["id"], C)), "AsInteger")), (await $.mv((await $.wv([$t37, $t38], "edGroupName", C, false)), "Text")), (await $.mv((await $.wv([$t37, $t38], "edGroupDescr", C, false)), "Text"))]])));
      await $.stmt((await $.wcall([$t37, $t38], "SendM", [(await $.wv([$t37, $t38], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], { get: async () => L0["sendm"], set: async (v) => { L0["sendm"] = v; }, local: true })));
      await $.stmt((await $.mcall((await $.wv([$t37, $t38], "pcADM", C, false)), "CallProcedure", ["backupgroupman", [(await $.mv((await $.wcall([$t37, $t38], "FieldByName", ["id"], C)), "AsInteger"))]])));
      await $.stmt((await $.mcall((await $.wv([$t37, $t38], "pcADM", C, false)), "CallProcedure", ["cleargroupman", [(await $.mv((await $.wcall([$t37, $t38], "FieldByName", ["id"], C)), "AsInteger"))]])));
      await $.stmt((await $.wcall([$t37, $t38], "SendM", [(await $.wv([$t37, $t38], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], { get: async () => L0["sendm"], set: async (v) => { L0["sendm"] = v; }, local: true })));
      {
        const $t39 = (await $.wv([$t37, $t38], "slGroupGrid", C, false));
        { const $t40 = $.sub((await $.wv([$t37, $t38, $t39], "ColCount", C, false)), 1);
          await $.wset([$t37, $t38, $t39], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t41 = true;
          for (;;) {
            if (!$t41) { await $.wset([$t37, $t38, $t39], "i", $.succ((await $.wv([$t37, $t38, $t39], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t41 = false;
            if (!($.ord((await $.wv([$t37, $t38, $t39], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t40))) break;
            { const $t42 = $.sub((await $.wv([$t37, $t38, $t39], "RowCount", C, false)), 1);
              await $.wset([$t37, $t38, $t39], "z", 0, { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true });
              let $t43 = true;
              for (;;) {
                if (!$t43) { await $.wset([$t37, $t38, $t39], "z", $.succ((await $.wv([$t37, $t38, $t39], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false)), 1), { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }); }
                $t43 = false;
                if (!($.ord((await $.wv([$t37, $t38, $t39], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))) <= $.ord($t42))) break;
                if ($.truthy($.ne((await $.idx((await $.wv([$t37, $t38, $t39], "Cells", C, false)), [(await $.wv([$t37, $t38, $t39], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t37, $t38, $t39], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), (await $.wv([$t37, $t38, $t39], "EmptyStr", C, false))))) {
                  await $.stmt((await $.mcall((await $.wv([$t37, $t38, $t39], "UsersData", C, false)), "Locate", ["NAME", (await $.idx((await $.wv([$t37, $t38, $t39], "Cells", C, false)), [(await $.wv([$t37, $t38, $t39], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t37, $t38, $t39], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), []])));
                  await $.stmt((await $.mcall((await $.wv([$t37, $t38, $t39], "pcADM", C, false)), "CallProcedure", ["adduseringrup", [(await $.mv((await $.mcall((await $.wv([$t37, $t38, $t39], "UsersData", C, false)), "FieldByName", ["USER#"])), "AsInteger")), $.add((await $.wv([$t37, $t38, $t39], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), (await $.mv((await $.wcall([$t37, $t38, $t39], "FieldByName", ["id"], C)), "AsInteger"))]])));
                }
                await $.tick();
              }
            }
            await $.stmt((await $.wcall([$t37, $t38, $t39], "SendM", [(await $.wv([$t37, $t38, $t39], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], { get: async () => L0["sendm"], set: async (v) => { L0["sendm"] = v; }, local: true })));
            await $.tick();
          }
        }
      }
      await $.stmt((await $.wcall([$t37, $t38], "SendM", [(await $.wv([$t37, $t38], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], { get: async () => L0["sendm"], set: async (v) => { L0["sendm"] = v; }, local: true })));
    } finally {
      await $.mcall((await $.wv([$t37, $t38], "UsersData", C, false)), "EnableControls", []);
      await $.stmt((await $.mcall((await $.wv([$t37, $t38], "pcADM", C, false)), "CallProcedure", ["refreshgroup", [(await $.mv((await $.wcall([$t37, $t38], "FieldByName", ["id"], C)), "AsInteger"))]])));
      await $.stmt((await $.mcall((await $.wv([$t37, $t38], "pcADM", C, false)), "CallProcedure", ["locknewusers", [(await $.mv((await $.wcall([$t37, $t38], "FieldByName", ["id"], C)), "AsInteger"))]])));
      await $.wset([$t37, $t38], "Bk", (await $.wv([$t37, $t38], "GetBookmark", C, false)), { get: async () => L0["bk"], set: async (v) => { L0["bk"] = v; }, local: true });
      await $.stmt($.wcall([$t37, $t38], "Refresh", [], C));
      if ($.truthy((await $.wcall([$t37, $t38], "BookmarkValid", [(await $.wv([$t37, $t38], "bk", { get: async () => L0["bk"], set: async (v) => { L0["bk"] = v; }, local: true }, false))], C)))) {
        await $.stmt((await $.wcall([$t37, $t38], "GotoBookmark", [(await $.wv([$t37, $t38], "bk", { get: async () => L0["bk"], set: async (v) => { L0["bk"] = v; }, local: true }, false))], C)));
      }
      await $.stmt((await $.wcall([$t37, $t38], "FreeBookmark", [(await $.wv([$t37, $t38], "bk", { get: async () => L0["bk"], set: async (v) => { L0["bk"] = v; }, local: true }, false))], C)));
      if ($.truthy((await $.wv([$t37, $t38], "Recr", { get: async () => L0["recr"], set: async (v) => { L0["recr"] = v; }, local: true }, false)))) {
        await $.stmt($.wcall([$t37, $t38], "RecreateTreeList", [], C));
      }
      if ($.truthy((await $.wcall([$t37, $t38], "Assigned", [(await $.wv([$t37, $t38], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false))], C)))) {
        await $.mcall((await $.wv([$t37, $t38], "BrForm", { get: async () => L0["brform"], set: async (v) => { L0["brform"] = v; }, local: true }, false)), "Release", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "PostUserInfoChngExecute", async function PostUserInfoChngExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "varfildat": '', "varlangdat": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t44 = (await $.v(C, "AdministrationData"));
    const $t45 = (await $.mv((await $.wv([$t44], "AdministrationData", C, false)), "pcAdm"));
    if ($.truthy((await $.and_(($.ne((await $.mv((await $.wv([$t44, $t45], "edUsInfClass", C, false)), "ItemIndex")), 0)), async () => (await $.mcall((await $.wv([$t44, $t45], "pcAca", C, false)), "CallBooleanFunction", ["isadm", [(await $.mv((await $.mv((await $.wv([$t44, $t45], "tvMain", C, false)), "Selected")), "text"))]])))))) {
      await $.stmt((await $.mcall((await $.wv([$t44, $t45], "hbErrorBox", C, false)), "ShowMessage", ["Administrator heç bir sinfə aid ola bilməz"])));
      return L0.result;
    }
    {
      const $t46 = (await $.wv([$t44, $t45], "edUsInfFilial", C, false));
      const $t47 = (await $.wv([$t44, $t45, $t46], "edUsInfLang", C, false));
      await $.wset([$t44, $t45, $t46, $t47], "varFilDat", (await $.mv((await $.mcall((await $.wv([$t44, $t45, $t46, $t47], "Filialdata", C, false)), "FieldByName", ["id"])), "AsString")), { get: async () => L0["varfildat"], set: async (v) => { L0["varfildat"] = v; }, local: true });
      await $.wset([$t44, $t45, $t46, $t47], "varLangDat", (await $.mv((await $.mcall((await $.wv([$t44, $t45, $t46, $t47], "SlLang", C, false)), "FieldByName", ["NAME"])), "AsString")), { get: async () => L0["varlangdat"], set: async (v) => { L0["varlangdat"] = v; }, local: true });
      await $.stmt((await $.wcall([$t44, $t45, $t46, $t47], "CallProcedure", ["insertuserinf", [(await $.mv((await $.wv([$t44, $t45, $t46, $t47], "edUsInfName", C, false)), "Text")), (await $.mv((await $.wv([$t44, $t45, $t46, $t47], "edUsInfDescr", C, false)), "Text")), (await $.mv((await $.wv([$t44, $t45, $t46, $t47], "edUsInfFName", C, false)), "Text")), (await $.mv((await $.wv([$t44, $t45, $t46, $t47], "edUsInfPhone", C, false)), "Text")), (await $.mv((await $.wv([$t44, $t45, $t46, $t47], "edUsInfClass", C, false)), "text")), (await $.wv([$t44, $t45, $t46, $t47], "varFilDat", { get: async () => L0["varfildat"], set: async (v) => { L0["varfildat"] = v; }, local: true }, false)), (await $.wv([$t44, $t45, $t46, $t47], "varLangDat", { get: async () => L0["varlangdat"], set: async (v) => { L0["varlangdat"] = v; }, local: true }, false))]], C)));
      await $.stmt((await $.mcall((await $.wv([$t44, $t45, $t46, $t47], "pcADM", C, false)), "CallProcedure", ["lockunlockuser", [(await $.mv((await $.mv((await $.wv([$t44, $t45, $t46, $t47], "tvMain", C, false)), "Selected")), "Text")), (await $.wv([$t44, $t45, $t46, $t47], "True", C, false))]])));
    }
    {
      const $t48 = (await $.wv([$t44, $t45], "edUsInfClass", C, false));
      if ($.truthy((await $.and_(($.ne((await $.wv([$t44, $t45, $t48], "ItemIndex", C, false)), 0)), async () => ($.ne((await $.mv((await $.mcall((await $.wv([$t44, $t45, $t48], "Classesdata", C, false)), "FieldByName", ["id"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t44, $t45, $t48], "Usersdata", C, false)), "FieldByName", ["classid"])), "AsInteger")))))))) {
        await $.stmt((await $.mcall((await $.wv([$t44, $t45, $t48], "DBRefresh", C, false)), "OnExecute", [(await $.wv([$t44, $t45, $t48], "usModulesData", C, false))])));
        await $.stmt((await $.mcall((await $.wv([$t44, $t45, $t48], "DBRefresh", C, false)), "OnExecute", [(await $.wv([$t44, $t45, $t48], "usTablesData", C, false))])));
      }
    }
    await $.mcall((await $.wv([$t44, $t45], "UsersData", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "RefreshTb", async function RefreshTb(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "CBChange", [(await $.mv((await $.mv((await $.v(C, "tvMain")), "Selected")), "Text"))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TAdministrationForm", "grAdvanDrawColumnCell", async function grAdvanDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  {
    const $t49 = (L0["sender"]);
    if ($.truthy((await $.and_(($.ne((await $.mv((await $.mv((await $.wv([$t49], "DataSource", C, false)), "DataSet")), "RecordCount")), 0)), async () => ($.eq((await $.wv([$t49], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 0)))))) {
      {
        const $t50 = (await $.mv((await $.wv([$t49], "DataSource", C, false)), "DataSet"));
        if ($.truthy($.eq((await $.mv((await $.wcall([$t49, $t50], "FieldByName", ["Select"], C)), "AsInteger")), 0))) {
          if ($.truthy((await $.or_((await $.or_(($.eq((await $.mv((await $.wcall([$t49, $t50], "FieldByName", ["CAN_INSERT"], C)), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.wcall([$t49, $t50], "FieldByName", ["CAN_UPDATE"], C)), "AsInteger")), 1)))), async () => ($.eq((await $.mv((await $.wcall([$t49, $t50], "FieldByName", ["CAN_DELETE"], C)), "AsInteger")), 1)))))) {
            await $.wset([$t49, $t50], "ImageIndex", 1, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
          } else {
            await $.wset([$t49, $t50], "ImageIndex", 0, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
          }
        } else {
          await $.wset([$t49, $t50], "ImageIndex", 2, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
      }
      if ($.truthy($.ne((await $.wv([$t49], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1))))) {
        await $.stmt((await $.mcall((await $.wv([$t49], "ImLGrid", C, false)), "Draw", [(await $.wv([$t49], "Canvas", C, false)), (await $.mv((await $.wv([$t49], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t49], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t49], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t49], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t49], "DefaultDrawColumnCell", [(await $.wv([$t49], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t49], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t49], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t49], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TAdministrationForm", "ExecuteChange", async function ExecuteChange(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"hand": $.copyArg(p0), "data": $.copyArg(p1), "procname": $.copyArg(p2), "activ": $.copyArg(p3), result: undefined, "bk": null, "macc": 0, "grmodified": false, "rowmodified": false};
  await $.fixArgs(L0, ["hand", "data", "procname", "activ"]);
  {
    const $t51 = L0["data"];
    await $.wset([$t51], "GrModified", (await $.wv([$t51], "False", C, false)), { get: async () => L0["grmodified"], set: async (v) => { L0["grmodified"] = v; }, local: true });
    await $.wset([$t51], "Bk", (await $.wv([$t51], "GetBookmark", C, false)), { get: async () => L0["bk"], set: async (v) => { L0["bk"] = v; }, local: true });
    await $.stmt($.wcall([$t51], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t51], "First", [], C));
      while ($.truthy($.not(((await $.wv([$t51], "EOF", C, false)))))) {
        {
          const $t52 = (await $.wv([$t51], "AdministrationData", C, false));
          const $t53 = (await $.mv((await $.wv([$t51, $t52], "AdministrationData", C, false)), "pcADM"));
          { const $t54 = (await $.wv([$t51, $t52, $t53], "Activ", { get: async () => L0["activ"], set: async (v) => { L0["activ"] = v; }, local: true }, false));
            if ($.eq($t54, (await $.wv([$t51, $t52, $t53], "acModule", C, false)))) {
              await $.wset([$t51, $t52, $t53], "RowModified", (await $.wcall([$t51, $t52, $t53], "CallBooleanFunction", [(await $.wv([$t51, $t52, $t53], "ProcName", { get: async () => L0["procname"], set: async (v) => { L0["procname"] = v; }, local: true }, false)), [(await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["DESCRIPTION"], C)), "AsString")), (await $.mv((await $.mv((await $.wv([$t51, $t52, $t53], "tvMain", C, false)), "Selected")), "text")), (await $.wcall([$t51, $t52, $t53], "IntToBool", [(await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["MODACC"], C)), "AsInteger"))], C))]], C)), { get: async () => L0["rowmodified"], set: async (v) => { L0["rowmodified"] = v; }, local: true });
              await $.wset([$t51, $t52, $t53], "GrModified", (await $.or_((await $.wv([$t51, $t52, $t53], "GrModified", { get: async () => L0["grmodified"], set: async (v) => { L0["grmodified"] = v; }, local: true }, false)), async () => (await $.wv([$t51, $t52, $t53], "RowModified", { get: async () => L0["rowmodified"], set: async (v) => { L0["rowmodified"] = v; }, local: true }, false)))), { get: async () => L0["grmodified"], set: async (v) => { L0["grmodified"] = v; }, local: true });
              await $.wset([$t51, $t52, $t53], "macc", (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["MODACC"], C)), "AsInteger")), { get: async () => L0["macc"], set: async (v) => { L0["macc"] = v; }, local: true });
              if ($.truthy((await $.wv([$t51, $t52, $t53], "RowModified", { get: async () => L0["rowmodified"], set: async (v) => { L0["rowmodified"] = v; }, local: true }, false)))) {
                await $.stmt((await $.wcall([$t51, $t52, $t53], "CallProcedure", ["SetAdvancedGrants", [(await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["DESCRIPTION"], C)), "AsString")), (await $.mv((await $.mv((await $.wv([$t51, $t52, $t53], "tvMain", C, false)), "Selected")), "text")), (await $.wv([$t51, $t52, $t53], "macc", { get: async () => L0["macc"], set: async (v) => { L0["macc"] = v; }, local: true }, false)), (await $.wv([$t51, $t52, $t53], "macc", { get: async () => L0["macc"], set: async (v) => { L0["macc"] = v; }, local: true }, false)), (await $.wv([$t51, $t52, $t53], "macc", { get: async () => L0["macc"], set: async (v) => { L0["macc"] = v; }, local: true }, false))]], C)));
                await $.stmt((await $.wcall([$t51, $t52, $t53], "CallProcedure", ["UserAdvacedGrantsbyModule", [(await $.wcall([$t51, $t52, $t53], "IntToBool", [(await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["MODACC"], C)), "AsInteger"))], C)), (await $.mv((await $.mv((await $.wv([$t51, $t52, $t53], "tvMain", C, false)), "Selected")), "text")), (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["id"], C)), "AsInteger"))]], C)));
              }
            }
            else if ($.eq($t54, (await $.wv([$t51, $t52, $t53], "acTable", C, false)))) {
              await $.stmt((await $.wcall([$t51, $t52, $t53], "CallProcedure", [(await $.wv([$t51, $t52, $t53], "ProcName", { get: async () => L0["procname"], set: async (v) => { L0["procname"] = v; }, local: true }, false)), [(await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["DESCRIPTION"], C)), "AsString")), (await $.mv((await $.mv((await $.wv([$t51, $t52, $t53], "tvMain", C, false)), "Selected")), "text")), (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["CAN_INSERT"], C)), "AsInteger")), (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["CAN_DELETE"], C)), "AsInteger")), (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["CAN_UPDATE"], C)), "AsInteger"))]], C)));
            }
          }
        }
        await $.mcall((await $.wv([$t51], "Application", C, false)), "ProcessMessages", []);
        await $.stmt((await $.wcall([$t51], "SendMsg", [(await $.wv([$t51], "Hand", { get: async () => L0["hand"], set: async (v) => { L0["hand"] = v; }, local: true }, false))], C)));
        await $.stmt($.wcall([$t51], "Next", [], C));
        await $.tick();
      }
    } finally {
      if ($.truthy((await $.wv([$t51], "GrModified", { get: async () => L0["grmodified"], set: async (v) => { L0["grmodified"] = v; }, local: true }, false)))) {
        {
          const $t55 = (await $.wv([$t51], "AdministrationData", C, false));
          await $.stmt((await $.mcall((await $.wv([$t51, $t55], "pcADM", C, false)), "CallProcedure", ["clearclassforuser", [(await $.mv((await $.mv((await $.wv([$t51, $t55], "tvMain", C, false)), "Selected")), "text"))]])));
          await $.mcall((await $.wv([$t51, $t55], "Usersdata", C, false)), "Refresh", []);
        }
      }
      await $.mcall((await $.wv([$t51], "RefreshMD", C, false)), "Execute", []);
      await $.stmt((await $.wcall([$t51], "GotoBookmark", [(await $.wv([$t51], "Bk", { get: async () => L0["bk"], set: async (v) => { L0["bk"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t51], "EnableControls", [], C));
      {
        const $t56 = (await $.wv([$t51], "Hand", { get: async () => L0["hand"], set: async (v) => { L0["hand"] = v; }, local: true }, false));
        if ($.truthy((await $.wcall([$t51, $t56], "Assigned", [(await $.wv([$t51, $t56], "Hand", { get: async () => L0["hand"], set: async (v) => { L0["hand"] = v; }, local: true }, false))], C)))) {
          await $.stmt($.wcall([$t51, $t56], "Hide", [], C));
          await $.stmt($.wcall([$t51, $t56], "Release", [], C));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Hand", "Data", "ProcName", "Activ"], "kind": "procedure", "ptypes": ["TBarForm", "TDataSet", "String", "TActive"]});
  U.method("TAdministrationForm", "ChangeOrder", async function ChangeOrder(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"data": $.copyArg(p0), "field": $.copyArg(p1), "dec": $.copyArg(p2), result: undefined, "tmp": ''};
  await $.fixArgs(L0, ["data", "field", "dec"]);
  {
    const $t57 = L0["data"];
    await $.wset([$t57], "tmp", (await $.mv((await $.wv([$t57], "Sql", C, false)), "Text")), { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true });
    if ($.truthy((await $.wv([$t57], "Active", C, false)))) {
      await $.stmt($.wcall([$t57], "Close", [], C));
    }
    await $.stmt((await $.wcall([$t57], "SetLength", [$.ref(async () => (await $.wv([$t57], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false)), async ($t58) => { await $.wset([$t57], "tmp", $t58, { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }); }), (await $.wcall([$t57], "LastDelimiter", ["by", (await $.wv([$t57], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false))], C))], C)));
    await $.wset([$t57], "tmp", $.add($.add((await $.wv([$t57], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false)), " "), (await $.mv((await $.wv([$t57], "Field", { get: async () => L0["field"], set: async (v) => { L0["field"] = v; }, local: true }, false)), "FieldName"))), { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true });
    if ($.truthy((await $.wv([$t57], "dec", { get: async () => L0["dec"], set: async (v) => { L0["dec"] = v; }, local: true }, false)))) {
      await $.wset([$t57], "tmp", $.add((await $.wv([$t57], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false)), (await $.wv([$t57], "_Dec", C, false))), { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true });
    }
    await $.mset((await $.wv([$t57], "Sql", C, false)), "Text", (await $.wv([$t57], "tmp", { get: async () => L0["tmp"], set: async (v) => { L0["tmp"] = v; }, local: true }, false)));
    await $.stmt($.wcall([$t57], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Data", "Field", "Dec"], "kind": "procedure", "ptypes": ["TOracleDataSet", "TField", "Boolean"]});
  U.method("TAdministrationForm", "hcModulesSectionClick", async function hcModulesSectionClick(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"headercontrol": $.copyArg(p0), "section": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["headercontrol", "section"]);
  L0["ordimage"] = 1;
  L0["deordimage"] = 2;
  L0["resetactsection"] = $.fn(async function ResetActSection() {
  const L1 = {result: false, "i": 0};
  {
    const $t59 = (await $.mv(L0["headercontrol"], "Sections"));
    { const $t60 = $.sub((await $.wv([$t59], "Count", C, false)), 1);
      await $.wset([$t59], "i", 0, { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true });
      let $t61 = true;
      for (;;) {
        if (!$t61) { await $.wset([$t59], "i", $.succ((await $.wv([$t59], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 1), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }); }
        $t61 = false;
        if (!($.ord((await $.wv([$t59], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))) <= $.ord($t60))) break;
        if ($.truthy((await $.and_(($.ne((await $.mv((await $.idx((await $.wv([$t59], "Items", C, false)), [(await $.wv([$t59], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), "ImageIndex")), (-(1)))), async () => ($.ne((await $.idx((await $.wv([$t59], "Items", C, false)), [(await $.wv([$t59], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), (await $.wv([$t59], "Section", { get: async () => L0["section"], set: async (v) => { L0["section"] = v; }, local: true }, false)))))))) {
          await $.mset((await $.idx((await $.wv([$t59], "Items", C, false)), [(await $.wv([$t59], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), "ImageIndex", (-(1)));
        }
        await $.tick();
      }
    }
  }
  {
    const $t62 = L0["section"];
    { const $t63 = (await $.wv([$t62], "ImageIndex", C, false));
      if ($.eq($t63, (-(1)))) {
        await $.wset([$t62], "ImageIndex", (await $.wv([$t62], "OrdImage", { get: async () => L0["ordimage"], set: async (v) => { L0["ordimage"] = v; }, local: true }, false)), C);
      }
      else if ($.eq($t63, 1)) {
        await $.wset([$t62], "ImageIndex", (await $.wv([$t62], "DeordImage", { get: async () => L0["deordimage"], set: async (v) => { L0["deordimage"] = v; }, local: true }, false)), C);
      }
      else if ($.eq($t63, 2)) {
        await $.wset([$t62], "ImageIndex", (await $.wv([$t62], "OrdImage", { get: async () => L0["ordimage"], set: async (v) => { L0["ordimage"] = v; }, local: true }, false)), C);
      }
    }
    await $.wset([$t62], "Result", $.eq((await $.wv([$t62], "ImageIndex", C, false)), (await $.wv([$t62], "DeordImage", { get: async () => L0["deordimage"], set: async (v) => { L0["deordimage"] = v; }, local: true }, false))), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
  }
  return L1.result;
});
  {
    const $t64 = (await $.v(C, "AdministrationData"));
    await $.stmt((await $.wcall([$t64], "ChangeOrder", [(await $.wv([$t64], "UsModulesData", C, false)), (await $.idx((await $.mv((await $.wv([$t64], "UsModulesData", C, false)), "Fields")), [(await $.mv((await $.wv([$t64], "Section", { get: async () => L0["section"], set: async (v) => { L0["section"] = v; }, local: true }, false)), "Index"))])), (await $.wv([$t64], "ResetActSection", { get: async () => L0["resetactsection"], set: async (v) => { L0["resetactsection"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["HeaderControl", "Section"], "kind": "procedure", "ptypes": ["THeaderControl", "THeaderSection"]});
  U.method("TAdministrationForm", "SelAll", async function SelAll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["value"]);
  {
    const $t65 = (await $.mv((await $.v(C, "AdministrationData")), "UsTablesData"));
    await $.stmt($.wcall([$t65], "Edit", [], C));
    { const $t66 = $.sub((await $.mv((await $.wv([$t65], "gbRights", C, false)), "ControlCount")), 1);
      await $.wset([$t65], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t67 = true;
      for (;;) {
        if (!$t67) { await $.wset([$t65], "i", $.succ((await $.wv([$t65], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t67 = false;
        if (!($.ord((await $.wv([$t65], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t66))) break;
        if ($.truthy(($.is_((await $.idx((await $.mv((await $.wv([$t65], "gbRights", C, false)), "Controls")), [(await $.wv([$t65], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDBCheckBox")))) {
          {
            const $t68 = ((await $.idx((await $.mv((await $.wv([$t65], "gbRights", C, false)), "Controls")), [(await $.wv([$t65], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])));
            if ($.truthy((await $.wv([$t65, $t68], "Enabled", C, false)))) {
              await $.mset((await $.wv([$t65, $t68], "Field", C, false)), "AsInteger", (await $.wcall([$t65, $t68], "BoolToInt", [(await $.wv([$t65, $t68], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false))], C)));
            }
          }
        }
        await $.tick();
      }
    }
    await $.stmt($.wcall([$t65], "Post", [], C));
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TAdministrationForm", "sbSelAllClick", async function sbSelAllClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "SelAll", [$.eq(L0["sender"], (await $.v(C, "sbSelAll")))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "cbInsertClick", async function cbInsertClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t69 = (await $.v(C, "grAdvan"));
    if ($.truthy((await $.and_(((await $.wv([$t69], "CanFocus", C, false))), async () => $.not(((await $.wv([$t69], "Focused", C, false)))))))) {
      await $.stmt($.wcall([$t69], "SetFocus", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "cgrModulesKeyDown", async function cgrModulesKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_space"))))) {
    {
      const $t70 = (await $.mv((await $.mv((await $.call(C, "TDBCtrlGrid", [L0["sender"]])), "DataSource")), "DataSet"));
      if ($.truthy($.not(((await $.wv([$t70], "Active", C, false)))))) {
        return L0.result;
      }
      await $.stmt($.wcall([$t70], "Edit", [], C));
      {
        const $t71 = (await $.mcall((await $.mv((await $.mv((await $.wcall([$t70], "TDBCtrlGrid", [(await $.wv([$t70], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "DataSource")), "DataSet")), "FieldByName", [(await $.mv((await $.wv([$t70], "cbMod", C, false)), "DataField"))]));
        await $.wset([$t70, $t71], "AsInteger", (await $.wcall([$t70, $t71], "BoolToInt", [$.not(((await $.wcall([$t70, $t71], "IntToBool", [(await $.wv([$t70, $t71], "AsInteger", C, false))], C))))], C)), C);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TAdministrationForm", "grAdvanKeyDown", async function grAdvanKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_Return"))))) {
    if ($.truthy($.in_((await $.v(C, "ssCtrl")), L0["shift"]))) {
      await $.stmt((await $.call(C, "sbSelAllClick", [(await $.v(C, "sbDeSelAll"))])));
    } else {
      await $.stmt((await $.call(C, "sbSelAllClick", [(await $.v(C, "sbSelAll"))])));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TAdministrationForm", "PostChngExecute", async function PostChngExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.mv((await $.v(C, "pnlCtrlBr")), "Visible")))))) {
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "pcMain")), "ActivePage")), (await $.v(C, "tbGroup"))))) {
    await $.mcall((await $.v(C, "PostGroupChng")), "Execute", []);
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "pcMain")), "ActivePage")), (await $.v(C, "tbInfo"))))) {
      await $.mcall((await $.v(C, "PostUserInfoChng")), "Execute", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "cbModClick", async function cbModClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq(L0["sender"], (await $.v(C, "cbMod")))), async () => ((await $.mv((await $.v(C, "cgrModules")), "CanFocus"))))))) {
    await $.mcall((await $.v(C, "cgrModules")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "cbModMouseUp", async function cbModMouseUp(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  {
    const $t72 = (L0["sender"]);
    const $t73 = (await $.mv((await $.mv(((await $.wv([$t72], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Datasource")), "DataSet"));
    if ($.truthy($.not(((await $.wv([$t72, $t73], "Active", C, false)))))) {
      return L0.result;
    }
    await $.stmt($.wcall([$t72, $t73], "Edit", [], C));
    await $.mset((await $.wcall([$t72, $t73], "FieldByName", [(await $.wv([$t72, $t73], "DataField", C, false))], C)), "AsInteger", (await $.wcall([$t72, $t73], "BoolToInt", [(await $.wv([$t72, $t73], "Checked", C, false))], C)));
    await $.stmt($.wcall([$t72, $t73], "Post", [], C));
  }
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TAdministrationForm", "RefreshMdExecute", async function RefreshMdExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "handcom": null};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t74 = (await $.v(C, "AdministrationData"));
    if ($.truthy((await $.mv((await $.wv([$t74], "pnlCtrlBr", C, false)), "Visible")))) {
      {
        const $t75 = (await $.wv([$t74], "pcMain", C, false));
        if ($.truthy($.eq((await $.wv([$t74, $t75], "ActivePage", C, false)), (await $.wv([$t74, $t75], "tbModules", C, false))))) {
          await $.stmt((await $.mcall((await $.wv([$t74, $t75], "DBRefresh", C, false)), "OnExecute", [(await $.wv([$t74, $t75], "usModulesData", C, false))])));
        }
        if ($.truthy($.eq((await $.wv([$t74, $t75], "ActivePage", C, false)), (await $.wv([$t74, $t75], "tbTables", C, false))))) {
          await $.stmt((await $.mcall((await $.wv([$t74, $t75], "DBRefresh", C, false)), "OnExecute", [(await $.wv([$t74, $t75], "usTablesData", C, false))])));
        }
        if ($.truthy($.eq((await $.wv([$t74, $t75], "ActivePage", C, false)), (await $.wv([$t74, $t75], "tbInfo", C, false))))) {
          await $.stmt((await $.wcall([$t74, $t75], "LoadUserInfo", [(await $.mv((await $.mv((await $.wv([$t74, $t75], "tvMain", C, false)), "Selected")), "Text"))], C)));
        }
        if ($.truthy($.eq((await $.wv([$t74, $t75], "ActivePage", C, false)), (await $.wv([$t74, $t75], "tbOrders", C, false))))) {
          await $.mcall((await $.wv([$t74, $t75], "RefreshOrders", C, false)), "Execute", []);
        }
      }
    } else {
      await $.wset([$t74], "HandCom", (await $.wcall([$t74], "FindComponent", [(await $.idx((await $.wv([$t74], "csTree", C, false)), [(await $.mv((await $.mv((await $.wv([$t74], "tvMain", C, false)), "Selected")), "Index"))]))], C)), { get: async () => L0["handcom"], set: async (v) => { L0["handcom"] = v; }, local: true });
      if ($.truthy((await $.and_(((await $.wcall([$t74], "Assigned", [(await $.wv([$t74], "HandCom", { get: async () => L0["handcom"], set: async (v) => { L0["handcom"] = v; }, local: true }, false))], C))), async () => ($.is_((await $.wv([$t74], "HandCom", { get: async () => L0["handcom"], set: async (v) => { L0["handcom"] = v; }, local: true }, false)), "TDataSource")))))) {
        await $.stmt((await $.mcall((await $.wv([$t74], "DBRefresh", C, false)), "OnExecute", [(await $.mv(((await $.wv([$t74], "HandCom", { get: async () => L0["handcom"], set: async (v) => { L0["handcom"] = v; }, local: true }, false))), "DataSet"))])));
      }
    }
    await $.stmt($.wcall([$t74], "RecreateTreeList", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "hbErrorBoxAfterHide", async function hbErrorBoxAfterHide(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ErrorPanel")), "Hide", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "hbErrorBoxAfterShow", async function hbErrorBoxAfterShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ErrorPanel")), "Show", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "CBMainChangeExecute", async function CBMainChangeExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.is_(L0["sender"], "TPageControl"))))) {
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.call(C, "TPageControl", [L0["sender"]])), "ActivePage")), (await $.v(C, "tbModules"))))) {
    {
      const $t76 = (await $.mv((await $.v(C, "AdministrationData")), "UsModulesData"));
      if ($.truthy($.not(((await $.wv([$t76], "Active", C, false)))))) {
        await $.stmt((await $.wcall([$t76], "SetVariable", ["USERNAME", (await $.mv((await $.mv((await $.wv([$t76], "tvMain", C, false)), "Selected")), "Text"))], C)));
        await $.stmt($.wcall([$t76], "Open", [], C));
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.call(C, "TPageControl", [L0["sender"]])), "ActivePage")), (await $.v(C, "tbTables"))))) {
    {
      const $t77 = (await $.mv((await $.v(C, "AdministrationData")), "UsTablesData"));
      if ($.truthy($.not(((await $.wv([$t77], "Active", C, false)))))) {
        await $.stmt((await $.wcall([$t77], "SetVariable", ["USERNAME", (await $.mv((await $.mv((await $.wv([$t77], "tvMain", C, false)), "Selected")), "Text"))], C)));
        await $.stmt($.wcall([$t77], "Open", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "DBRefreshExecute", async function DBRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "num": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["num"] = 0;
  if ($.truthy(($.is_(L0["sender"], "TDataSet")))) {
    {
      const $t78 = (await $.call(C, "TDataSet", [L0["sender"]]));
      if ($.truthy((await $.wv([$t78], "Active", C, false)))) {
        await $.wset([$t78], "Num", (await $.wv([$t78], "RecNo", C, false)), { get: async () => L0["num"], set: async (v) => { L0["num"] = v; }, local: true });
        await $.stmt($.wcall([$t78], "Close", [], C));
      }
      await $.stmt($.wcall([$t78], "Open", [], C));
      if ($.truthy($.le((await $.wv([$t78], "Num", { get: async () => L0["num"], set: async (v) => { L0["num"] = v; }, local: true }, false)), (await $.wv([$t78], "RecordCount", C, false))))) {
        await $.wset([$t78], "RecNo", (await $.wv([$t78], "Num", { get: async () => L0["num"], set: async (v) => { L0["num"] = v; }, local: true }, false)), C);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "grShrcsrMKDblClick", async function grShrcsrMKDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "moded": null};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t79 = (await $.v(C, "AdministrationData"));
    const $t80 = ((await $.wv([$t79], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t79, $t80], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      return L0.result;
    }
    if ($.truthy($.eq((await $.wv([$t79, $t80], "DataSource", C, false)), (await $.wv([$t79, $t80], "Users", C, false))))) {
      {
        const $t81 = (await $.wv([$t79, $t80], "tvMain", C, false));
        const $t82 = (await $.mv((await $.wv([$t79, $t80, $t81], "tvMain", C, false)), "Items"));
        { const $t83 = $.sub((await $.wv([$t79, $t80, $t81, $t82], "Count", C, false)), 1);
          await $.wset([$t79, $t80, $t81, $t82], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t84 = true;
          for (;;) {
            if (!$t84) { await $.wset([$t79, $t80, $t81, $t82], "i", $.succ((await $.wv([$t79, $t80, $t81, $t82], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t84 = false;
            if (!($.ord((await $.wv([$t79, $t80, $t81, $t82], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t83))) break;
            if ($.truthy($.eq((await $.mv((await $.idx((await $.wv([$t79, $t80, $t81, $t82], "Items", C, false)), [(await $.wv([$t79, $t80, $t81, $t82], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Text")), (await $.mv((await $.mcall((await $.mv((await $.wv([$t79, $t80, $t81, $t82], "DataSource", C, false)), "Dataset")), "FieldByName", ["NAME"])), "AsString"))))) {
              await $.wset([$t79, $t80, $t81, $t82], "Selected", (await $.idx((await $.wv([$t79, $t80, $t81, $t82], "Items", C, false)), [(await $.wv([$t79, $t80, $t81, $t82], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), C);
              break;
            }
            await $.tick();
          }
        }
      }
    }
    if ($.truthy($.eq((await $.wv([$t79, $t80], "DataSource", C, false)), (await $.wv([$t79, $t80], "Groups", C, false))))) {
      {
        const $t85 = (await $.wv([$t79, $t80], "tvMain", C, false));
        const $t86 = (await $.mv((await $.wv([$t79, $t80, $t85], "tvMain", C, false)), "Items"));
        { const $t87 = $.sub((await $.wv([$t79, $t80, $t85, $t86], "Count", C, false)), 1);
          await $.wset([$t79, $t80, $t85, $t86], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t88 = true;
          for (;;) {
            if (!$t88) { await $.wset([$t79, $t80, $t85, $t86], "i", $.succ((await $.wv([$t79, $t80, $t85, $t86], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t88 = false;
            if (!($.ord((await $.wv([$t79, $t80, $t85, $t86], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t87))) break;
            if ($.truthy($.eq((await $.mv((await $.idx((await $.wv([$t79, $t80, $t85, $t86], "Items", C, false)), [(await $.wv([$t79, $t80, $t85, $t86], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Text")), (await $.mv((await $.mcall((await $.mv((await $.wv([$t79, $t80, $t85, $t86], "DataSource", C, false)), "Dataset")), "FieldByName", ["OBJ"])), "AsString"))))) {
              await $.wset([$t79, $t80, $t85, $t86], "Selected", (await $.idx((await $.wv([$t79, $t80, $t85, $t86], "Items", C, false)), [(await $.wv([$t79, $t80, $t85, $t86], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), C);
              break;
            }
            await $.tick();
          }
        }
      }
    }
    if ($.truthy($.eq((await $.wv([$t79, $t80], "DataSource", C, false)), (await $.wv([$t79, $t80], "Classes", C, false))))) {
      await $.wset([$t79, $t80], "Moded", (await $.mcall((await $.wv([$t79, $t80], "TfmClassEdit", C, false)), "Create", [Self])), { get: async () => L0["moded"], set: async (v) => { L0["moded"] = v; }, local: true });
      {
        const $t89 = (await $.wv([$t79, $t80], "Modeditdata", C, false));
        try {
          if ($.truthy((await $.wv([$t79, $t80, $t89], "Active", C, false)))) {
            await $.stmt($.wcall([$t79, $t80, $t89], "CLose", [], C));
          }
          await $.stmt((await $.wcall([$t79, $t80, $t89], "SetVariable", ["CLASSNAME", (await $.mv((await $.mcall((await $.wv([$t79, $t80, $t89], "Classesdata", C, false)), "FieldByName", ["obj"])), "AsString"))], C)));
          await $.stmt($.wcall([$t79, $t80, $t89], "Open", [], C));
          await $.mcall((await $.wv([$t79, $t80, $t89], "Moded", { get: async () => L0["moded"], set: async (v) => { L0["moded"] = v; }, local: true }, false)), "ShowModal", []);
          await $.stmt((await $.wcall([$t79, $t80, $t89], "RefreshMdExecute", [Self], C)));
        } finally {
          if ($.truthy((await $.wcall([$t79, $t80, $t89], "Assigned", [(await $.wv([$t79, $t80, $t89], "Moded", { get: async () => L0["moded"], set: async (v) => { L0["moded"] = v; }, local: true }, false))], C)))) {
            await $.mcall((await $.wv([$t79, $t80, $t89], "Moded", { get: async () => L0["moded"], set: async (v) => { L0["moded"] = v; }, local: true }, false)), "Release", []);
          }
        }
      }
    }
    if ($.truthy($.eq((await $.wv([$t79, $t80], "DataSource", C, false)), (await $.wv([$t79, $t80], "Modules", C, false))))) {
      await $.stmt((await $.wcall([$t79, $t80], "mmUpdateClick", [Self], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "grShrcsrDelete", async function grShrcsrDelete(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dat": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dat"]);
  {
    const $t90 = (await $.v(C, "AdministrationData"));
    if ($.truthy($.eq((await $.wv([$t90], "Dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false)), (await $.wv([$t90], "Classes", C, false))))) {
      if ($.truthy($.eq((await $.wcall([$t90], "MessageDlg", ["Sinif ləğv olunsun?", (await $.wv([$t90], "mtConfirmation", C, false)), [(await $.wv([$t90], "mbYes", C, false)), (await $.wv([$t90], "mbNo", C, false))], 0], C)), (await $.wv([$t90], "mrYes", C, false))))) {
        {
          const $t91 = (await $.mv((await $.wv([$t90], "Classes", C, false)), "DataSet"));
          await $.stmt((await $.mcall((await $.wv([$t90, $t91], "fmUserSetup", C, false)), "ClassDrop", [(await $.mv((await $.wcall([$t90, $t91], "FieldByName", ["Obj"], C)), "AsString"))])));
          await $.stmt($.wcall([$t90, $t91], "Refresh", [], C));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Dat"], "kind": "procedure", "ptypes": ["TDataSource"]});
  U.method("TAdministrationForm", "grShrcsrMKKeyDown", async function grShrcsrMKKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((L0["sender"]), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    return L0.result;
  }
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_return"))))) {
    await $.stmt((await $.call(C, "grShrcsrMKDblClick", [L0["sender"]])));
  }
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_delete"))))) {
    await $.stmt((await $.call(C, "grShrcsrDelete", [(await $.mv((L0["sender"]), "DataSource"))])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TAdministrationForm", "AddUserExecute", async function AddUserExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "setup": null};
  await $.fixArgs(L0, ["sender"]);
  L0["setup"] = (await $.mcall((await $.v(C, "TfmUserSetup")), "Create", [Self]));
  {
    const $t92 = L0["setup"];
    try {
      await $.mset((await $.wv([$t92], "pcAddUser", C, false)), "ActivePageIndex", 0);
      if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t92], "cbFilial", C, false)), "Items")), "Count")), 1))) {
        await $.mset((await $.wv([$t92], "cbFilial", C, false)), "ItemIndex", 0);
      }
      await $.mset((await $.wv([$t92], "cbLang", C, false)), "ItemIndex", 0);
      await $.mset((await $.wv([$t92], "Lang3", C, false)), "ItemIndex", 0);
      await $.stmt($.wcall([$t92], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t92], "Release", [], C));
      await $.stmt($.wcall([$t92], "RecreateTreeList", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "DropUserExecute", async function DropUserExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "setup": null};
  await $.fixArgs(L0, ["sender"]);
  L0["setup"] = (await $.mcall((await $.v(C, "TfmUserSetup")), "Create", [Self]));
  {
    const $t93 = L0["setup"];
    try {
      await $.mset((await $.wv([$t93], "pcAddUser", C, false)), "ActivePage", (await $.wv([$t93], "tbsDropUser", C, false)));
      await $.wset([$t93], "Caption", "Drop user", C);
      await $.mset((await $.wv([$t93], "btNext", C, false)), "Caption", "Ləğv etmək");
      await $.stmt($.wcall([$t93], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t93], "Release", [], C));
      await $.stmt($.wcall([$t93], "RecreateTreeList", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "ClassCreateExecute", async function ClassCreateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "setup": null};
  await $.fixArgs(L0, ["sender"]);
  L0["setup"] = (await $.mcall((await $.v(C, "TfmUserSetup")), "Create", [Self]));
  {
    const $t94 = L0["setup"];
    try {
      await $.mset((await $.wv([$t94], "pcAddUser", C, false)), "ActivePage", (await $.wv([$t94], "tbsClassadd", C, false)));
      await $.wset([$t94], "Caption", "Class creating", C);
      await $.mset((await $.wv([$t94], "btNext", C, false)), "Caption", "Yaratmaq");
      await $.stmt($.wcall([$t94], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t94], "Release", [], C));
      await $.mcall((await $.mv((await $.wv([$t94], "AdministrationData", C, false)), "Classesdata")), "Refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "ClassDropExecute", async function ClassDropExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "setup": null};
  await $.fixArgs(L0, ["sender"]);
  L0["setup"] = (await $.mcall((await $.v(C, "TfmUserSetup")), "Create", [Self]));
  {
    const $t95 = L0["setup"];
    try {
      await $.mset((await $.wv([$t95], "pcAddUser", C, false)), "ActivePage", (await $.wv([$t95], "tbsClassdrop", C, false)));
      await $.wset([$t95], "Caption", "Dropping Group", C);
      await $.mset((await $.wv([$t95], "btNext", C, false)), "Caption", "Ləğv etmək");
      await $.stmt($.wcall([$t95], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t95], "Release", [], C));
      await $.mcall((await $.mv((await $.wv([$t95], "AdministrationData", C, false)), "Classesdata")), "Refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "MoveFromList", async function MoveFromList(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"frommove": $.copyArg(p0), "tomove": $.copyArg(p1), result: undefined, "i": 0};
  await $.fixArgs(L0, ["frommove", "tomove"]);
  {
    const $t96 = L0["frommove"];
    { const $t97 = ($.sub((await $.mv((await $.wv([$t96], "Items", C, false)), "Count")), 1));
      await $.wset([$t96], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t98 = true;
      for (;;) {
        if (!$t98) { await $.wset([$t96], "i", $.succ((await $.wv([$t96], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t98 = false;
        if (!($.ord((await $.wv([$t96], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t97))) break;
        if ($.truthy((await $.idx((await $.wv([$t96], "Selected", C, false)), [(await $.wv([$t96], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])))) {
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t96], "ToMove", { get: async () => L0["tomove"], set: async (v) => { L0["tomove"] = v; }, local: true }, false)), "Items")), "Add", [(await $.idx((await $.mv((await $.wv([$t96], "Items", C, false)), "Strings")), [(await $.wv([$t96], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))])));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["FromMove", "ToMove"], "kind": "procedure", "ptypes": ["TListBox", "TListBox"]});
  U.method("TAdministrationForm", "grGroupUsKeyDown", async function grGroupUsKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_LEFT"))))) {
    await $.stmt((await $.call(C, "GridAdd", [(await $.v(C, "slGroupGrid")), 0])));
    await L0["key"].set(0);
  }
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_RIGHT"))))) {
    await $.stmt((await $.call(C, "GridAdd", [(await $.v(C, "slGroupGrid")), 1])));
    await L0["key"].set(0);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TAdministrationForm", "RefreshLists", async function RefreshLists(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"selit": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["selit"]);
  {
    const $t99 = (await $.v(C, "AdministrationData"));
    const $t100 = (await $.mv((await $.wv([$t99], "AdministrationData", C, false)), "GroupUsersData"));
    await $.stmt((await $.wcall([$t99, $t100], "ClearGrid", [(await $.wv([$t99, $t100], "slGroupGrid", C, false))], C)));
    await $.stmt((await $.mcall((await $.wv([$t99, $t100], "GroupsData", C, false)), "Locate", ["obj", (await $.wv([$t99, $t100], "selit", { get: async () => L0["selit"], set: async (v) => { L0["selit"] = v; }, local: true }, false)), []])));
    await $.mset((await $.wv([$t99, $t100], "edGroupDescr", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t99, $t100], "GroupsData", C, false)), "FieldByName", ["Description"])), "AsString")));
    await $.mset((await $.wv([$t99, $t100], "edGroupName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t99, $t100], "GroupsData", C, false)), "FieldByName", ["Obj"])), "AsString")));
    await $.stmt((await $.wcall([$t99, $t100], "SetVariable", ["GROUPID", (await $.mv((await $.mcall((await $.wv([$t99, $t100], "GroupsData", C, false)), "FieldByName", ["ID"])), "AsInteger"))], C)));
    if ($.truthy($.not(((await $.wv([$t99, $t100], "Active", C, false)))))) {
      await $.stmt($.wcall([$t99, $t100], "Open", [], C));
    }
    await $.stmt($.wcall([$t99, $t100], "Refresh", [], C));
    await $.stmt($.wcall([$t99, $t100], "First", [], C));
    while ($.truthy($.not(((await $.wv([$t99, $t100], "eof", C, false)))))) {
      await $.stmt((await $.wcall([$t99, $t100], "AddToCell", [(await $.wv([$t99, $t100], "slGroupGrid", C, false)), $.sub((await $.mv((await $.wcall([$t99, $t100], "FieldByName", ["TYPE"], C)), "AsInteger")), 1), (await $.mv((await $.wcall([$t99, $t100], "FieldByName", ["NAME"], C)), "AsString"))], C)));
      await $.stmt($.wcall([$t99, $t100], "Next", [], C));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["SelIt"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TAdministrationForm", "GroupCreateExecute", async function GroupCreateExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "setup": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.mv((await $.mv((await $.v(C, "AdministrationData")), "GroupTypesData")), "Active")))))) {
    await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "GroupTypesData")), "Open", []);
  }
  L0["setup"] = (await $.mcall((await $.v(C, "TfmUserSetup")), "Create", [Self]));
  {
    const $t101 = L0["setup"];
    try {
      await $.mset((await $.wv([$t101], "pcAddUser", C, false)), "ActivePage", (await $.wv([$t101], "tbsGroupCreate", C, false)));
      await $.wset([$t101], "Caption", "Creating group", C);
      await $.mset((await $.wv([$t101], "btNext", C, false)), "Caption", "Yaratmaq");
      {
        const $t102 = (await $.wv([$t101], "dbGroupType", C, false));
        const $t103 = (await $.mv((await $.wv([$t101, $t102], "ListSource", C, false)), "DataSet"));
        if ($.truthy((await $.wv([$t101, $t102, $t103], "Active", C, false)))) {
          await $.wset([$t101, $t102, $t103], "KeyValue", (await $.mv((await $.wcall([$t101, $t102, $t103], "FieldByName", [(await $.wv([$t101, $t102, $t103], "KeyField", C, false))], C)), "AsInteger")), C);
        }
      }
      await $.stmt($.wcall([$t101], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t101], "Release", [], C));
      await $.mcall((await $.mv((await $.wv([$t101], "AdministrationData", C, false)), "GroupsData")), "Refresh", []);
      await $.stmt($.wcall([$t101], "RecreateTreeList", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "GroupDropExecute", async function GroupDropExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "setup": null};
  await $.fixArgs(L0, ["sender"]);
  L0["setup"] = (await $.mcall((await $.v(C, "TfmUserSetup")), "Create", [Self]));
  {
    const $t104 = L0["setup"];
    try {
      await $.mset((await $.wv([$t104], "pcAddUser", C, false)), "ActivePage", (await $.wv([$t104], "tbsGroupDrop", C, false)));
      await $.wset([$t104], "Caption", "Dropping Group", C);
      await $.mset((await $.wv([$t104], "btNext", C, false)), "Caption", "Ləğv etmək");
      await $.stmt($.wcall([$t104], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t104], "Release", [], C));
      await $.mcall((await $.mv((await $.wv([$t104], "AdministrationData", C, false)), "GroupsData")), "Refresh", []);
      await $.stmt($.wcall([$t104], "RecreateTreeList", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "tsDepSubChange", async function tsDepSubChange(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newtab": $.copyArg(p1), "allowchange": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "newtab"]);
  await $.mset((await $.v(C, "pcDepSub")), "ActivePageIndex", L0["newtab"]);
  {
    const $t105 = (await $.v(C, "Administrationdata"));
    const $t106 = (await $.wv([$t105], "SubmissionData", C, false));
    await $.stmt((await $.wcall([$t105, $t106], "SetVariable", ["USERID", (await $.mv((await $.mcall((await $.wv([$t105, $t106], "UsersData", C, false)), "FieldByName", ["USER#"])), "AsInteger"))], C)));
    if ($.truthy($.not(((await $.wv([$t105, $t106], "Active", C, false)))))) {
      await $.stmt($.wcall([$t105, $t106], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t105, $t106], "Refresh", [], C));
    }
  }
  {
    const $t107 = (await $.v(C, "Administrationdata"));
    const $t108 = (await $.wv([$t107], "DependencesData", C, false));
    await $.stmt((await $.wcall([$t107, $t108], "SetVariable", ["USERID", (await $.mv((await $.mcall((await $.wv([$t107, $t108], "UsersData", C, false)), "FieldByName", ["USER#"])), "AsInteger"))], C)));
    if ($.truthy($.not(((await $.wv([$t107, $t108], "Active", C, false)))))) {
      await $.stmt($.wcall([$t107, $t108], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t107, $t108], "Refresh", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "NewTab", "AllowChange"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Boolean"]});
  U.method("TAdministrationForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "passform": null, "pswd": '', "nocryptedpsw": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["passform"] = (await $.mcall((await $.v(C, "TfmUserPassw")), "Create", [Self]));
  {
    const $t109 = L0["passform"];
    try {
      if ($.truthy((await $.wv([$t109], "Execute", C, false)))) {
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t109], "AdministrationData", C, false)), "pcADM")), "CallBooleanFunction", ["user_passw", [(await $.mv((await $.mv((await $.wv([$t109], "tvMain", C, false)), "Selected")), "Text")), (await $.wv([$t109], "Password", C, false))]])));
      }
    } finally {
      await $.stmt($.wcall([$t109], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "Moduleedit", async function Moduleedit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"act": $.asRef(p0), result: undefined, "modform": null, "rec": 0};
  L0["rec"] = 1;
  L0["modform"] = (await $.mcall((await $.v(C, "TfmModEdit")), "Create", [Self]));
  await $.mset((await $.mv(L0["modform"], "tbRights")), "TabVisible", $.eq((await L0["act"].get()), (await $.v(C, "maUpdate"))));
  {
    const $t110 = (await $.mv((await $.v(C, "AdministrationData")), "ModulesData"));
    const $t111 = (await $.mv((await $.wv([$t110], "AdministrationData", C, false)), "pcADM"));
    try {
      await $.wset([$t110, $t111], "Rec", (await $.wv([$t110, $t111], "RecNo", C, false)), { get: async () => L0["rec"], set: async (v) => { L0["rec"] = v; }, local: true });
      if ($.truthy($.eq((await $.wcall([$t110, $t111], "Ord", [(await $.wv([$t110, $t111], "Act", { get: async () => await L0["act"].get(), set: async (v) => { await L0["act"].set(v); }, local: true }, false))], C)), 2))) {
        if ($.truthy($.eq((await $.wcall([$t110, $t111], "MessageDlg", ["Delete this module?", (await $.wv([$t110, $t111], "mtConfirmation", C, false)), [(await $.wv([$t110, $t111], "mbYes", C, false)), (await $.wv([$t110, $t111], "mbNo", C, false))], 0], C)), (await $.wv([$t110, $t111], "mrYes", C, false))))) {
          await $.stmt((await $.wcall([$t110, $t111], "CallProcedure", ["deletemodule", [(await $.mv((await $.wcall([$t110, $t111], "FieldByName", ["ID"], C)), "AsInteger"))]], C)));
        }
        return L0.result;
      }
      await $.wset([$t110, $t111], "Act", (await $.mcall((await $.wv([$t110, $t111], "ModForm", { get: async () => L0["modform"], set: async (v) => { L0["modform"] = v; }, local: true }, false)), "Execute", [(await $.wv([$t110, $t111], "Act", { get: async () => await L0["act"].get(), set: async (v) => { await L0["act"].set(v); }, local: true }, false))])), { get: async () => await L0["act"].get(), set: async (v) => { await L0["act"].set(v); }, local: true });
      {
        const $t112 = (await $.wv([$t110, $t111], "ModForm", { get: async () => L0["modform"], set: async (v) => { L0["modform"] = v; }, local: true }, false));
        { const $t113 = (await $.wcall([$t110, $t111, $t112], "Ord", [(await $.wv([$t110, $t111, $t112], "Act", { get: async () => await L0["act"].get(), set: async (v) => { await L0["act"].set(v); }, local: true }, false))], C));
          if ($.eq($t113, 1)) {
            await $.stmt((await $.wcall([$t110, $t111, $t112], "CallProcedure", ["addmodule", ["sm", (await $.wv([$t110, $t111, $t112], "MClassId", C, false)), (await $.wv([$t110, $t111, $t112], "MName", C, false)), (await $.wv([$t110, $t111, $t112], "MDescription", C, false)), (await $.wcall([$t110, $t111, $t112], "BoolToInt", [(await $.idx((await $.wv([$t110, $t111, $t112], "MActions", C, false)), [(await $.wv([$t110, $t111, $t112], "maInsert", C, false))]))], C)), (await $.wcall([$t110, $t111, $t112], "BoolToInt", [(await $.idx((await $.wv([$t110, $t111, $t112], "MActions", C, false)), [(await $.wv([$t110, $t111, $t112], "maDelete", C, false))]))], C)), (await $.wcall([$t110, $t111, $t112], "BoolToInt", [(await $.idx((await $.wv([$t110, $t111, $t112], "MActions", C, false)), [(await $.wv([$t110, $t111, $t112], "maUpdate", C, false))]))], C))]], C)));
          }
          else if ($.eq($t113, 3)) {
            await $.stmt((await $.wcall([$t110, $t111, $t112], "CallProcedure", ["updatemodule", [(await $.wv([$t110, $t111, $t112], "MName", C, false)), (await $.wv([$t110, $t111, $t112], "MClassId", C, false)), (await $.wv([$t110, $t111, $t112], "MDescription", C, false)), (await $.wcall([$t110, $t111, $t112], "BoolToInt", [(await $.idx((await $.wv([$t110, $t111, $t112], "MActions", C, false)), [(await $.wv([$t110, $t111, $t112], "maInsert", C, false))]))], C)), (await $.wcall([$t110, $t111, $t112], "BoolToInt", [(await $.idx((await $.wv([$t110, $t111, $t112], "MActions", C, false)), [(await $.wv([$t110, $t111, $t112], "maDelete", C, false))]))], C)), (await $.wcall([$t110, $t111, $t112], "BoolToInt", [(await $.idx((await $.wv([$t110, $t111, $t112], "MActions", C, false)), [(await $.wv([$t110, $t111, $t112], "maUpdate", C, false))]))], C))]], C)));
          }
        }
      }
    } finally {
      if ($.truthy((await $.wcall([$t110, $t111], "Assigned", [(await $.wv([$t110, $t111], "ModForm", { get: async () => L0["modform"], set: async (v) => { L0["modform"] = v; }, local: true }, false))], C)))) {
        await $.mcall((await $.wv([$t110, $t111], "ModForm", { get: async () => L0["modform"], set: async (v) => { L0["modform"] = v; }, local: true }, false)), "Release", []);
      }
      await $.stmt($.wcall([$t110, $t111], "Refresh", [], C));
      await $.wset([$t110, $t111], "RecNo", (await $.wv([$t110, $t111], "Rec", { get: async () => L0["rec"], set: async (v) => { L0["rec"] = v; }, local: true }, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Act"], "kind": "procedure", "ptypes": ["TModAction"]});
  U.method("TAdministrationForm", "mmUpdateClick", async function mmUpdateClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tmp": null};
  await $.fixArgs(L0, ["sender"]);
  L0["tmp"] = (await $.v(C, "maUpdate"));
  await $.stmt((await $.call(C, "Moduleedit", [$.ref(async () => L0["tmp"], async ($t114) => { L0["tmp"] = $t114; })])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "mmInsertClick", async function mmInsertClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tmp": null};
  await $.fixArgs(L0, ["sender"]);
  L0["tmp"] = (await $.v(C, "maInsert"));
  await $.stmt((await $.call(C, "Moduleedit", [$.ref(async () => L0["tmp"], async ($t115) => { L0["tmp"] = $t115; })])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "mmDeleteClick", async function mmDeleteClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tmp": null};
  await $.fixArgs(L0, ["sender"]);
  L0["tmp"] = (await $.v(C, "maDelete"));
  await $.stmt((await $.call(C, "Moduleedit", [$.ref(async () => L0["tmp"], async ($t116) => { L0["tmp"] = $t116; })])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "tvMainKeyDown", async function tvMainKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_DELETE"))))) {
    {
      const $t117 = (await $.mv((await $.v(C, "tvMain")), "Selected"));
      if ($.truthy($.eq((await $.mv((await $.wv([$t117], "Parent", C, false)), "Index")), (await $.wv([$t117], "csUsers", C, false))))) {
        if ($.truthy($.eq((await $.wcall([$t117], "MessageDlg", ["İstifadəçi ləğv edilsin?", (await $.wv([$t117], "mtConfirmation", C, false)), [(await $.wv([$t117], "mbYes", C, false)), (await $.wv([$t117], "mbNo", C, false))], 0], C)), (await $.wv([$t117], "mrYes", C, false))))) {
          await $.stmt((await $.mcall((await $.wv([$t117], "fmUserSetup", C, false)), "Dropuser", [(await $.wv([$t117], "Text", C, false)), (await $.wv([$t117], "True", C, false))])));
          await $.stmt($.wcall([$t117], "RecreateTreeList", [], C));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.wv([$t117], "Parent", C, false)), "Index")), (await $.wv([$t117], "csGroups", C, false))))) {
        if ($.truthy($.eq((await $.wcall([$t117], "MessageDlg", ["Qrup ləğv olunsun?", (await $.wv([$t117], "mtConfirmation", C, false)), [(await $.wv([$t117], "mbYes", C, false)), (await $.wv([$t117], "mbNo", C, false))], 0], C)), (await $.wv([$t117], "mrYes", C, false))))) {
          await $.stmt((await $.mcall((await $.wv([$t117], "fmUserSetup", C, false)), "GroupDrop", [(await $.wv([$t117], "Text", C, false))])));
          await $.stmt($.wcall([$t117], "RecreateTreeList", [], C));
          return L0.result;
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TAdministrationForm", "miSelAllClick", async function miSelAllClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t118 = (await $.v(C, "AdministrationData"));
    await $.stmt((await $.wcall([$t118], "SelAlll", [(await $.wv([$t118], "UsModulesData", C, false)), "MODACC", $.eq((await $.wv([$t118], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t118], "miSelAll", C, false)))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("SelAlll", async function SelAlll(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"dat": $.copyArg(p0), "field": $.copyArg(p1), "issel": $.copyArg(p2), result: undefined, "bk": null};
  await $.fixArgs(L0, ["dat", "field", "issel"]);
  {
    const $t119 = L0["dat"];
    if ($.truthy($.not(((await $.wv([$t119], "Active", C, false)))))) {
      return L0.result;
    }
    await $.stmt($.wcall([$t119], "DisableControls", [], C));
    await $.wset([$t119], "bk", (await $.wv([$t119], "GetBookmark", C, false)), { get: async () => L0["bk"], set: async (v) => { L0["bk"] = v; }, local: true });
    await $.stmt($.wcall([$t119], "First", [], C));
    while ($.truthy($.not(((await $.wv([$t119], "EOF", C, false)))))) {
      await $.stmt($.wcall([$t119], "Edit", [], C));
      await $.mset((await $.wcall([$t119], "FieldByName", [(await $.wv([$t119], "Field", { get: async () => L0["field"], set: async (v) => { L0["field"] = v; }, local: true }, false))], C)), "AsInteger", (await $.wcall([$t119], "BoolToInt", [(await $.wv([$t119], "IsSel", { get: async () => L0["issel"], set: async (v) => { L0["issel"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t119], "Post", [], C));
      await $.stmt($.wcall([$t119], "Next", [], C));
      await $.tick();
    }
    await $.stmt((await $.wcall([$t119], "GoToBookmark", [(await $.wv([$t119], "bk", { get: async () => L0["bk"], set: async (v) => { L0["bk"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t119], "EnableControls", [], C));
  }
  return L0.result;
}, {"params": ["Dat", "Field", "IsSel"], "kind": "procedure", "ptypes": ["TDataSet", "String", "Boolean"]});
  U.method("TAdministrationForm", "Get_Icon", async function Get_Icon(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["imageindex"] = 3;
  await $.stmt((await $.mcall((await $.v(C, "ImLGrid")), "GetIcon", [L0["imageindex"], (await $.v(C, "Icon"))])));
  L0["result"] = (await $.mv((await $.v(C, "Icon")), "Handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TAdministrationForm", "miSelTabClick", async function miSelTabClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "SelAll", [$.eq(L0["sender"], (await $.v(C, "miSelTab")))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "miAllSelTabClick", async function miAllSelTabClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "bk": null};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t120 = (await $.mv((await $.v(C, "AdministrationData")), "UsTablesData"));
    await $.stmt($.wcall([$t120], "DisableControls", [], C));
    await $.wset([$t120], "Bk", (await $.wv([$t120], "GetBookmark", C, false)), { get: async () => L0["bk"], set: async (v) => { L0["bk"] = v; }, local: true });
    await $.stmt($.wcall([$t120], "First", [], C));
    while ($.truthy($.not(((await $.wv([$t120], "EOF", C, false)))))) {
      await $.stmt((await $.wcall([$t120], "SelAll", [$.eq((await $.wv([$t120], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t120], "miAllSelTab", C, false)))], C)));
      await $.stmt($.wcall([$t120], "Next", [], C));
      await $.tick();
    }
    if ($.truthy((await $.wcall([$t120], "BookmarkValid", [(await $.wv([$t120], "BK", { get: async () => L0["bk"], set: async (v) => { L0["bk"] = v; }, local: true }, false))], C)))) {
      await $.stmt((await $.wcall([$t120], "GotoBookmark", [(await $.wv([$t120], "BK", { get: async () => L0["bk"], set: async (v) => { L0["bk"] = v; }, local: true }, false))], C)));
    }
    await $.stmt($.wcall([$t120], "EnableControls", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "ToolButton14Click", async function ToolButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ownersheep": null};
  await $.fixArgs(L0, ["sender"]);
  L0["ownersheep"] = (await $.mcall((await $.v(C, "TFmOwnerSheep")), "Create", [Self]));
  try {
    await $.mcall(L0["ownersheep"], "ShowModal", []);
  } finally {
    if ($.truthy((await $.call(C, "Assigned", [L0["ownersheep"]])))) {
      await $.mcall(L0["ownersheep"], "Release", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "N3Click", async function N3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "usrefresh": null};
  await $.fixArgs(L0, ["sender"]);
  L0["usrefresh"] = (await $.mcall((await $.v(C, "TfmUsersRefresh")), "Create", [Self]));
  try {
    await $.mcall(L0["usrefresh"], "ShowModal", []);
  } finally {
    if ($.truthy((await $.call(C, "Assigned", [L0["usrefresh"]])))) {
      await $.mcall(L0["usrefresh"], "Release", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "sbAdvancedGrantsClick", async function sbAdvancedGrantsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "grAdvanDblClick", [(await $.v(C, "grAdvan"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "grAdvanDblClick", async function grAdvanDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "advancedform": null};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t121 = (await $.mv((await $.mv((L0["sender"]), "DataSource")), "DataSet"));
    if ($.truthy((await $.wcall([$t121], "IntToBool", [(await $.mv((await $.wcall([$t121], "FieldByName", ["advanced_grants"], C)), "ASInteger"))], C)))) {
      await $.wset([$t121], "Advancedform", (await $.mcall((await $.wv([$t121], "TfmAdvancedgrants", C, false)), "Create", [Self])), { get: async () => L0["advancedform"], set: async (v) => { L0["advancedform"] = v; }, local: true });
      try {
        await $.mcall((await $.wv([$t121], "Advancedform", { get: async () => L0["advancedform"], set: async (v) => { L0["advancedform"] = v; }, local: true }, false)), "ShowModal", []);
      } finally {
        await $.mcall((await $.wv([$t121], "Advancedform", { get: async () => L0["advancedform"], set: async (v) => { L0["advancedform"] = v; }, local: true }, false)), "Destroy", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "pnGroupManResize", async function pnGroupManResize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "Splitter1Moved", async function Splitter1Moved(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.call(C, "TControl", [L0["sender"]])), "Repaint", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "ShowUsersTabExecute", async function ShowUsersTabExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t122 = (L0["sender"]);
    await $.wset([$t122], "Checked", $.not(((await $.wv([$t122], "Checked", C, false)))), C);
    await $.mset((await $.wv([$t122], "gbUserList", C, false)), "Visible", (await $.wv([$t122], "Checked", C, false)));
    await $.mset((await $.wv([$t122], "sbShowUsTab", C, false)), "Down", (await $.wv([$t122], "Checked", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "tsDepSubDrawTab", async function tsDepSubDrawTab(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "tabcanvas": $.copyArg(p1), "r": $.copyArg(p2), "index": $.copyArg(p3), "selected": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "tabcanvas", "r", "index", "selected"]);
  {
    const $t123 = (L0["sender"]);
    if ($.truthy($.eq((await $.wv([$t123], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), (await $.wv([$t123], "TabIndex", C, false))))) {
      await $.mset((await $.mv((await $.wv([$t123], "TabCanvas", { get: async () => L0["tabcanvas"], set: async (v) => { L0["tabcanvas"] = v; }, local: true }, false)), "Font")), "Color", (await $.wv([$t123], "clWhite", C, false)));
    } else {
      await $.mset((await $.mv((await $.wv([$t123], "TabCanvas", { get: async () => L0["tabcanvas"], set: async (v) => { L0["tabcanvas"] = v; }, local: true }, false)), "Font")), "Color", (await $.mv((await $.wv([$t123], "Font", C, false)), "Color")));
    }
    await $.stmt((await $.mcall((await $.wv([$t123], "TabCanvas", { get: async () => L0["tabcanvas"], set: async (v) => { L0["tabcanvas"] = v; }, local: true }, false)), "TextOut", [(await $.mv((await $.wv([$t123], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Left")), $.add((await $.mv((await $.wv([$t123], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Top")), 2), (await $.idx((await $.wv([$t123], "Tabs", C, false)), [(await $.wv([$t123], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))])));
  }
  return L0.result;
}, {"params": ["Sender", "TabCanvas", "R", "Index", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Integer", "Boolean"]});
  U.func("SetFilter", async function SetFilter(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "dataset": $.copyArg(p1), "field": $.copyArg(p2), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender", "dataset", "field"]);
  {
    const $t124 = L0["dataset"];
    const $t125 = (await $.wv([$t124], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    const $t126 = (await $.wv([$t124, $t125], "Items", C, false));
    if ($.truthy((await $.mv((await $.wv([$t124, $t125, $t126], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Enabled")))) {
      await $.wset([$t124, $t125, $t126], "Filter", (await $.wv([$t124, $t125, $t126], "EmptyStr", C, false)), C);
      { const $t127 = $.sub((await $.wv([$t124, $t125, $t126], "Count", C, false)), 1);
        await $.wset([$t124, $t125, $t126], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t128 = true;
        for (;;) {
          if (!$t128) { await $.wset([$t124, $t125, $t126], "i", $.succ((await $.wv([$t124, $t125, $t126], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t128 = false;
          if (!($.ord((await $.wv([$t124, $t125, $t126], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t127))) break;
          if ($.truthy($.not(((await $.idx((await $.wv([$t124, $t125, $t126], "Checked", C, false)), [(await $.wv([$t124, $t125, $t126], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])))))) {
            if ($.truthy($.eq((await $.wv([$t124, $t125, $t126], "Filter", C, false)), (await $.wv([$t124, $t125, $t126], "EmptyStr", C, false))))) {
              await $.wset([$t124, $t125, $t126], "Filter", $.add($.add($.add($.add($.add($.add((await $.wv([$t124, $t125, $t126], "_ExpresBacStart", C, false)), (await $.wv([$t124, $t125, $t126], "Field", { get: async () => L0["field"], set: async (v) => { L0["field"] = v; }, local: true }, false))), "<>"), (await $.wv([$t124, $t125, $t126], "_ExpresDel", C, false))), (await $.idx((await $.wv([$t124, $t125, $t126], "Items", C, false)), [(await $.wv([$t124, $t125, $t126], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), (await $.wv([$t124, $t125, $t126], "_ExpresDel", C, false))), (await $.wv([$t124, $t125, $t126], "_ExprecBacStop", C, false))), C);
            } else {
              await $.wset([$t124, $t125, $t126], "Filter", $.add($.add($.add($.add($.add($.add($.add($.add((await $.wv([$t124, $t125, $t126], "Filter", C, false)), " and "), (await $.wv([$t124, $t125, $t126], "_ExpresBacStart", C, false))), (await $.wv([$t124, $t125, $t126], "Field", { get: async () => L0["field"], set: async (v) => { L0["field"] = v; }, local: true }, false))), "<>"), (await $.wv([$t124, $t125, $t126], "_ExpresDel", C, false))), (await $.idx((await $.wv([$t124, $t125, $t126], "Items", C, false)), [(await $.wv([$t124, $t125, $t126], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), (await $.wv([$t124, $t125, $t126], "_ExpresDel", C, false))), (await $.wv([$t124, $t125, $t126], "_ExprecBacStop", C, false))), C);
            }
          }
          await $.tick();
        }
      }
      if ($.truthy($.ne((await $.wv([$t124, $t125, $t126], "Filter", C, false)), (await $.wv([$t124, $t125, $t126], "EmptyStr", C, false))))) {
        await $.wset([$t124, $t125, $t126], "Filtered", (await $.wv([$t124, $t125, $t126], "True", C, false)), C);
      }
    } else {
      await $.wset([$t124, $t125, $t126], "Filtered", (await $.wv([$t124, $t125, $t126], "False", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender", "DataSet", "Field"], "kind": "procedure", "ptypes": ["TCheckListBox", "TOracleDataSet", "String"]});
  U.method("TAdministrationForm", "tbsOrdersChange", async function tbsOrdersChange(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newtab": $.copyArg(p1), "allowchange": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "newtab"]);
  await $.mset((await $.v(C, "pcOrders")), "ActivePageIndex", L0["newtab"]);
  return L0.result;
}, {"params": ["Sender", "NewTab", "AllowChange"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Boolean"]});
  U.method("TAdministrationForm", "ShowGroupsOrderExecute", async function ShowGroupsOrderExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "rep": null};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "SetFilter", [(await $.v(C, "cbGroupsOrder")), (await $.mv((await $.v(C, "AdministrationData")), "repGroupsData")), "OBJ"])));
  await $.stmt((await $.call(C, "EnableOrderData", [(await $.v(C, "atGroups"))])));
  { const $t129 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t130 = true;
    for (;;) {
      if (!$t130) { L0["i"] = $.succ(L0["i"], 1); }
      $t130 = false;
      if (!($.ord(L0["i"]) <= $.ord($t129))) break;
      if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TrptQroup")))) {
        {
          const $t131 = ((await $.idx((await $.v(C, "Components")), [L0["i"]])));
          await $.stmt((await $.wcall([$t131], "SetActiveWindow", [(await $.wv([$t131], "ParentWindow", C, false))], C)));
          return L0.result;
        }
      }
      await $.tick();
    }
  }
  L0["rep"] = (await $.mcall((await $.v(C, "TrptQroup")), "Create", [Self]));
  try {
    await $.mcall(L0["rep"], "Preview", []);
  } finally {
    if ($.truthy((await $.call(C, "Assigned", [L0["rep"]])))) {
      await $.mcall(L0["rep"], "Destroy", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "ShowUsersOrderExecute", async function ShowUsersOrderExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "rptusers": null};
  await $.fixArgs(L0, ["sender"]);
  L0["setusersvariables"] = $.fn(async function SetUsersVariables() {
  const L1 = {result: undefined};
  if ($.truthy($.not(((await $.mv((await $.v(C, "cbUsersStandOrder")), "Checked")))))) {
    {
      const $t132 = (await $.mv((await $.v(C, "AdministrationData")), "repUsersGrantsData"));
      if ($.truthy($.eq((await $.mv((await $.wv([$t132], "eduserOrderConst1", C, false)), "Text")), (await $.mv((await $.wv([$t132], "eduserOrderConst2", C, false)), "Text"))))) {
        await $.stmt((await $.wcall([$t132], "MessageDlg", ["Hüquqların təyinatı fərqli olmalıdır", (await $.wv([$t132], "mtError", C, false)), [(await $.wv([$t132], "mbOk", C, false))], 0], C)));
        $.abort();
      }
      if ($.truthy($.ne((await $.mv((await $.wv([$t132], "eduserOrderConst1", C, false)), "Text")), (await $.wv([$t132], "EmptyStr", C, false))))) {
        await $.stmt((await $.wcall([$t132], "SetVariable", ["GRANTED", (await $.mv((await $.wv([$t132], "eduserOrderConst1", C, false)), "Text"))], C)));
      }
      if ($.truthy($.ne((await $.mv((await $.wv([$t132], "eduserOrderConst2", C, false)), "Text")), (await $.wv([$t132], "EmptyStr", C, false))))) {
        await $.stmt((await $.wcall([$t132], "SetVariable", ["NOTGRANTED", (await $.mv((await $.wv([$t132], "eduserOrderConst2", C, false)), "Text"))], C)));
      }
    }
  }
  return L1.result;
});
  await $.stmt($.callv(L0["setusersvariables"], []));
  await $.stmt((await $.call(C, "SetFilter", [(await $.v(C, "cbUsersOrder")), (await $.mv((await $.v(C, "AdministrationData")), "repUsersData")), "NAME"])));
  await $.stmt((await $.call(C, "EnableOrderData", [(await $.v(C, "atUsers"))])));
  { const $t133 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t134 = true;
    for (;;) {
      if (!$t134) { L0["i"] = $.succ(L0["i"], 1); }
      $t134 = false;
      if (!($.ord(L0["i"]) <= $.ord($t133))) break;
      if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TrptUsers")))) {
        {
          const $t135 = ((await $.idx((await $.v(C, "Components")), [L0["i"]])));
          await $.stmt((await $.wcall([$t135], "SetActiveWindow", [(await $.wv([$t135], "ParentWindow", C, false))], C)));
          return L0.result;
        }
      }
      await $.tick();
    }
  }
  L0["rptusers"] = (await $.mcall((await $.v(C, "TrptUsers")), "Create", [Self]));
  await $.stmt((await $.mcall(L0["rptusers"], "Review", [(await $.mv((await $.v(C, "cbUsersStandOrder")), "Checked"))])));
  await $.set(C, "TempPic", (await $.mv((await $.v(C, "TPicture")), "Create")));
  try {
    await $.stmt((await $.mcall((await $.v(C, "TempPic")), "Assign", [(await $.mv((await $.mv(L0["rptusers"], "UseRightPict")), "Picture"))])));
    await $.mcall(L0["rptusers"], "Preview", []);
  } finally {
    if ($.truthy((await $.call(C, "Assigned", [L0["rptusers"]])))) {
      await $.mcall(L0["rptusers"], "Destroy", []);
    }
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "TempPic"))])))) {
      await $.mcall((await $.v(C, "TempPic")), "Destroy", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "EnableOrderData", async function EnableOrderData(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  L0["opendata"] = $.fn(async function OpenData(p0) {
  const L1 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["sender"]);
  {
    const $t136 = L1["sender"];
    if ($.truthy($.not(((await $.wv([$t136], "Active", C, false)))))) {
      await $.stmt($.wcall([$t136], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t136], "Refresh", [], C));
    }
  }
  return L1.result;
});
  {
    const $t137 = (await $.v(C, "AdministrationData"));
    { const $t138 = (await $.wv([$t137], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false));
      if ($.eq($t138, (await $.wv([$t137], "atGroups", C, false)))) {
        await $.stmt((await $.wcall([$t137], "OpenData", [(await $.wv([$t137], "repGroupsData", C, false))], { get: async () => L0["opendata"], set: async (v) => { L0["opendata"] = v; }, local: true })));
        await $.stmt((await $.wcall([$t137], "OpenData", [(await $.wv([$t137], "repGroupManData", C, false))], { get: async () => L0["opendata"], set: async (v) => { L0["opendata"] = v; }, local: true })));
      }
      else if ($.eq($t138, (await $.wv([$t137], "atUsers", C, false)))) {
        await $.stmt((await $.wcall([$t137], "OpenData", [(await $.wv([$t137], "repUsersData", C, false))], { get: async () => L0["opendata"], set: async (v) => { L0["opendata"] = v; }, local: true })));
        await $.stmt((await $.wcall([$t137], "OpenData", [(await $.wv([$t137], "repUsersGrantsData", C, false))], { get: async () => L0["opendata"], set: async (v) => { L0["opendata"] = v; }, local: true })));
      }
    }
    await $.stmt((await $.wcall([$t137], "OpenData", [(await $.wv([$t137], "repAboutBankData", C, false))], { get: async () => L0["opendata"], set: async (v) => { L0["opendata"] = v; }, local: true })));
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TActiveTab"]});
  U.method("TAdministrationForm", "rbGroupsAllClick", async function rbGroupsAllClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "cbGroupsOrder")), "Enabled", $.not(((await $.mv((await $.v(C, "rbGroupsAll")), "Checked")))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "RefreshOrdersExecute", async function RefreshOrdersExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t139 = (await $.v(C, "pcOrders"));
    const $t140 = (await $.wv([$t139], "AdministrationData", C, false));
    { const $t141 = (await $.wv([$t139, $t140], "ActivePageIndex", C, false));
      if ($.eq($t141, 0)) {
        await $.stmt((await $.wcall([$t139, $t140], "PrepareOrderList", [(await $.wv([$t139, $t140], "repGroupsData", C, false)), "OBJ", (await $.wv([$t139, $t140], "cbGroupsOrder", C, false)), (await $.wv([$t139, $t140], "True", C, false))], C)));
      }
      else if ($.eq($t141, 1)) {
        await $.stmt((await $.wcall([$t139, $t140], "PrepareOrderList", [(await $.mv((await $.wv([$t139, $t140], "AdministrationData", C, false)), "UsersData")), "Name", (await $.wv([$t139, $t140], "cbUsersOrder", C, false)), (await $.wv([$t139, $t140], "True", C, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "rbUsersAllClick", async function rbUsersAllClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "cbUsersOrder")), "Enabled", $.not(((await $.mv((await $.v(C, "rbUsersAll")), "Checked")))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "tbUsersOrderShow", async function tbUsersOrderShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "PrepareOrderList", [(await $.mv((await $.v(C, "AdministrationData")), "UsersData")), "Name", (await $.v(C, "cbUsersOrder"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "cbUsersStandOrderClick", async function cbUsersStandOrderClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "eduserOrderConst1")), "Enabled", $.not(((await $.mv((L0["sender"]), "Checked")))));
  await $.mset((await $.v(C, "eduserOrderConst2")), "Enabled", $.not(((await $.mv((L0["sender"]), "Checked")))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "GridMoveLeft", async function GridMoveLeft(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "index": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "index"]);
  {
    const $t142 = L0["sender"];
    if ($.truthy((await $.and_(($.gt((await $.wv([$t142], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 0)), async () => ($.eq((await $.wv([$t142], "Col", C, false)), (await $.wv([$t142], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))))))) {
      await $.stmt((await $.wcall([$t142], "CutCellRect", [(await $.wv([$t142], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t142], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), (await $.wv([$t142], "Row", C, false)), $.sub((await $.wv([$t142], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1)], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Index"], "kind": "procedure", "ptypes": ["TStringGrid", "integer"]});
  U.method("TAdministrationForm", "GridMoveRight", async function GridMoveRight(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "index": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "index"]);
  {
    const $t143 = L0["sender"];
    if ($.truthy((await $.and_(($.lt((await $.wv([$t143], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), $.sub((await $.wv([$t143], "ColCount", C, false)), 1))), async () => ($.eq((await $.wv([$t143], "Col", C, false)), (await $.wv([$t143], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))))))) {
      await $.stmt((await $.wcall([$t143], "CutCellRect", [(await $.wv([$t143], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t143], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), (await $.wv([$t143], "Row", C, false)), $.add((await $.wv([$t143], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1)], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Index"], "kind": "procedure", "ptypes": ["TStringGrid", "integer"]});
  U.method("TAdministrationForm", "GridDel", async function GridDel(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "index": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "index"]);
  {
    const $t144 = L0["sender"];
    if ($.truthy($.ne((await $.wv([$t144], "Col", C, false)), (await $.wv([$t144], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))))) {
      await $.stmt((await $.wcall([$t144], "DeleteLast", [(await $.wv([$t144], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t144], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))], C)));
    } else {
      await $.stmt((await $.wcall([$t144], "DeleteCellRect", [(await $.wv([$t144], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t144], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), (await $.wv([$t144], "Row", C, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Index"], "kind": "procedure", "ptypes": ["TStringGrid", "integer"]});
  U.method("TAdministrationForm", "GridAdd", async function GridAdd(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "index": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "index"]);
  {
    const $t145 = L0["sender"];
    const $t146 = (await $.mv((await $.mv((await $.wv([$t145], "grGroupUs", C, false)), "DataSource")), "DataSet"));
    if ($.truthy((await $.and_(($.ne((await $.wv([$t145, $t146], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 2)), async () => (await $.mcall((await $.mv((await $.wv([$t145, $t146], "AdministrationData", C, false)), "pcAca")), "CallBooleanFunction", ["isadm", [(await $.mv((await $.wcall([$t145, $t146], "FieldByName", ["NAME"], C)), "AsString"))]])))))) {
      await $.stmt((await $.mcall((await $.wv([$t145, $t146], "hbErrorBox", C, false)), "ShowMessage", [(await $.wcall([$t145, $t146], "Format", ["Administrator %s qrupda neytral istifadəçi olmalıdır", [(await $.mv((await $.wcall([$t145, $t146], "FieldByName", ["NAME"], C)), "AsString"))]], C))])));
      return L0.result;
    }
    if ($.truthy((await $.wcall([$t145, $t146], "GRFind", [(await $.wv([$t145, $t146], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t145, $t146], "FieldByName", ["NAME"], C)), "AsString"))], C)))) {
      await $.stmt((await $.mcall((await $.wv([$t145, $t146], "hbErrorBox", C, false)), "ShowMessage", ["İstifadəçi artıq qrupdadır"])));
    } else {
      await $.stmt((await $.wcall([$t145, $t146], "AddToCell", [(await $.wv([$t145, $t146], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t145, $t146], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), (await $.mv((await $.wcall([$t145, $t146], "FieldByName", ["NAME"], C)), "AsString"))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Index"], "kind": "procedure", "ptypes": ["TStringGrid", "Integer"]});
  U.method("TAdministrationForm", "HeaderMoveRigth", async function HeaderMoveRigth(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "GridMoveRight", [(await $.v(C, "slGroupGrid")), (await $.mv((L0["sender"]), "Tag"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "HeaderMoveLeft", async function HeaderMoveLeft(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "GridMoveLeft", [(await $.v(C, "slGroupGrid")), (await $.mv((L0["sender"]), "Tag"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "HeaderDel", async function HeaderDel(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "GridDel", [(await $.v(C, "slGroupGrid")), (await $.mv((L0["sender"]), "Tag"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "HeaderAdd", async function HeaderAdd(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "GridAdd", [(await $.v(C, "slGroupGrid")), (await $.mv((L0["sender"]), "Tag"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "CreateHederControlActions", async function CreateHederControlActions(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"head": $.copyArg(p0), "btnimagelist": $.copyArg(p1), "methods": $.copyArg(p2), result: undefined, "btnrect": null, "btnbitmap": null, "i": 0};
  await $.fixArgs(L0, ["head", "btnimagelist", "methods"]);
  L0["createheadbutton"] = $.fn(async function CreateHeadButton(p0, p1, p2, p3, p4) {
  const L1 = {"btnparent": $.copyArg(p0), "rect": $.copyArg(p1), "btntag": $.copyArg(p2), "picture": $.copyArg(p3), "btnstate": $.copyArg(p4), result: undefined, "tempbtn": null};
  await $.fixArgs(L1, ["btnparent", "rect", "btntag", "picture", "btnstate"]);
  L1["tempbtn"] = (await $.mcall((await $.v(C, "THeaderButton")), "Create", [L1["btnparent"]]));
  {
    const $t147 = L1["btnparent"];
    const $t148 = (await $.wv([$t147], "TempBtn", { get: async () => L1["tempbtn"], set: async (v) => { L1["tempbtn"] = v; }, local: true }, false));
    {
      const $t149 = (await $.wv([$t147, $t148], "Rect", { get: async () => L1["rect"], set: async (v) => { L1["rect"] = v; }, local: true }, false));
      await $.stmt((await $.wcall([$t147, $t148, $t149], "SetBounds", [(await $.wv([$t147, $t148, $t149], "Left", C, false)), (await $.wv([$t147, $t148, $t149], "Top", C, false)), $.sub((await $.wv([$t147, $t148, $t149], "Right", C, false)), (await $.wv([$t147, $t148, $t149], "Left", C, false))), $.sub((await $.wv([$t147, $t148, $t149], "Bottom", C, false)), (await $.wv([$t147, $t148, $t149], "Top", C, false)))], C)));
    }
    await $.wset([$t147, $t148], "Flat", (await $.wv([$t147, $t148], "True", C, false)), C);
    await $.wset([$t147, $t148], "Tag", (await $.wv([$t147, $t148], "BtnTag", { get: async () => L1["btntag"], set: async (v) => { L1["btntag"] = v; }, local: true }, false)), C);
    if ($.truthy((await $.wcall([$t147, $t148], "Assigned", [(await $.wv([$t147, $t148], "Picture", { get: async () => L1["picture"], set: async (v) => { L1["picture"] = v; }, local: true }, false))], C)))) {
      await $.wset([$t147, $t148], "Glyph", (await $.wv([$t147, $t148], "Picture", { get: async () => L1["picture"], set: async (v) => { L1["picture"] = v; }, local: true }, false)), C);
    }
    await $.wset([$t147, $t148], "HeadState", (await $.wv([$t147, $t148], "BtnState", { get: async () => L1["btnstate"], set: async (v) => { L1["btnstate"] = v; }, local: true }, false)), C);
    { const $t150 = (await $.wv([$t147, $t148], "BtnState", { get: async () => L1["btnstate"], set: async (v) => { L1["btnstate"] = v; }, local: true }, false));
      if ($.eq($t150, (await $.wv([$t147, $t148], "hsDel", C, false)))) {
        if ($.truthy((await $.wcall([$t147, $t148], "Assigned", [(await $.mv((await $.wv([$t147, $t148], "Methods", { get: async () => L0["methods"], set: async (v) => { L0["methods"] = v; }, local: true }, false)), "DelCol"))], C)))) {
          await $.wset([$t147, $t148], "OnClick", (await $.mref((await $.wv([$t147, $t148], "Methods", { get: async () => L0["methods"], set: async (v) => { L0["methods"] = v; }, local: true }, false)), "DelCol")), C);
        }
      }
      else if ($.eq($t150, (await $.wv([$t147, $t148], "hsLeft", C, false)))) {
        if ($.truthy((await $.wcall([$t147, $t148], "Assigned", [(await $.mv((await $.wv([$t147, $t148], "Methods", { get: async () => L0["methods"], set: async (v) => { L0["methods"] = v; }, local: true }, false)), "MoveLeft"))], C)))) {
          await $.wset([$t147, $t148], "OnClick", (await $.mref((await $.wv([$t147, $t148], "Methods", { get: async () => L0["methods"], set: async (v) => { L0["methods"] = v; }, local: true }, false)), "MoveLeft")), C);
        }
        await $.wset([$t147, $t148], "Enabled", ($.ne((await $.wv([$t147, $t148], "BtnTag", { get: async () => L1["btntag"], set: async (v) => { L1["btntag"] = v; }, local: true }, false)), 0)), C);
      }
      else if ($.eq($t150, (await $.wv([$t147, $t148], "hsRight", C, false)))) {
        if ($.truthy((await $.wcall([$t147, $t148], "Assigned", [(await $.mv((await $.wv([$t147, $t148], "Methods", { get: async () => L0["methods"], set: async (v) => { L0["methods"] = v; }, local: true }, false)), "MoveRight"))], C)))) {
          await $.wset([$t147, $t148], "OnClick", (await $.mref((await $.wv([$t147, $t148], "Methods", { get: async () => L0["methods"], set: async (v) => { L0["methods"] = v; }, local: true }, false)), "MoveRight")), C);
        }
        await $.wset([$t147, $t148], "Enabled", ($.ne((await $.wv([$t147, $t148], "BtnTag", { get: async () => L1["btntag"], set: async (v) => { L1["btntag"] = v; }, local: true }, false)), $.sub((await $.mv((await $.mv((await $.wv([$t147, $t148], "Head", { get: async () => L0["head"], set: async (v) => { L0["head"] = v; }, local: true }, false)), "Sections")), "Count")), 1))), C);
      }
      else if ($.eq($t150, (await $.wv([$t147, $t148], "hsAdd", C, false)))) {
        if ($.truthy((await $.wcall([$t147, $t148], "Assigned", [(await $.mv((await $.wv([$t147, $t148], "Methods", { get: async () => L0["methods"], set: async (v) => { L0["methods"] = v; }, local: true }, false)), "Add"))], C)))) {
          await $.wset([$t147, $t148], "OnClick", (await $.mref((await $.wv([$t147, $t148], "Methods", { get: async () => L0["methods"], set: async (v) => { L0["methods"] = v; }, local: true }, false)), "Add")), C);
        }
      }
    }
    await $.wset([$t147, $t148], "Parent", (await $.wv([$t147, $t148], "BtnParent", { get: async () => L1["btnparent"], set: async (v) => { L1["btnparent"] = v; }, local: true }, false)), C);
  }
  return L1.result;
});
  L0["createheadbuttons"] = $.fn(async function CreateHeadButtons(p0, p1) {
  const L1 = {"index": $.copyArg(p0), "imagelist": $.copyArg(p1), result: undefined};
  await $.fixArgs(L1, ["index", "imagelist"]);
  L1["returnbitmap"] = $.fn(async function ReturnBitmap(p0) {
  const L2 = {"index": $.copyArg(p0), result: false, "bitmap": null};
  await $.fixArgs(L2, ["index"]);
  L2["bitmap"] = (await $.mv((await $.v(C, "TBitmap")), "Create"));
  {
    const $t151 = L1["imagelist"];
    try {
      await $.stmt((await $.wcall([$t151], "GetBitmap", [(await $.wv([$t151], "Index", { get: async () => L2["index"], set: async (v) => { L2["index"] = v; }, local: true }, false)), (await $.wv([$t151], "Bitmap", { get: async () => L2["bitmap"], set: async (v) => { L2["bitmap"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.mcall((await $.wv([$t151], "BtnBitmap", { get: async () => L0["btnbitmap"], set: async (v) => { L0["btnbitmap"] = v; }, local: true }, false)), "Assign", [(await $.wv([$t151], "Bitmap", { get: async () => L2["bitmap"], set: async (v) => { L2["bitmap"] = v; }, local: true }, false))])));
      await $.wset([$t151], "Result", (await $.wv([$t151], "True", C, false)), { get: async () => L2["result"], set: async (v) => { L2["result"] = v; }, local: true });
    } finally {
      await $.mcall((await $.wv([$t151], "Bitmap", { get: async () => L2["bitmap"], set: async (v) => { L2["bitmap"] = v; }, local: true }, false)), "Free", []);
    }
  }
  return L2.result;
});
  {
    const $t152 = L0["head"];
    await $.wset([$t152], "BtnRect", (await $.wcall([$t152], "Rect", [$.sub($.sub((await $.mv((await $.idx((await $.wv([$t152], "Sections", C, false)), [(await $.wv([$t152], "Index", { get: async () => L1["index"], set: async (v) => { L1["index"] = v; }, local: true }, false))])), "Right")), (await $.wv([$t152], "SpeedButtonWidth", C, false))), (await $.wv([$t152], "SpeedButtonFirstInterval", C, false))), 2, $.sub((await $.mv((await $.idx((await $.wv([$t152], "Sections", C, false)), [(await $.wv([$t152], "Index", { get: async () => L1["index"], set: async (v) => { L1["index"] = v; }, local: true }, false))])), "Right")), (await $.wv([$t152], "SpeedButtonFirstInterval", C, false))), $.add(2, (await $.wv([$t152], "SpeedButtonHeight", C, false)))], C)), { get: async () => L0["btnrect"], set: async (v) => { L0["btnrect"] = v; }, local: true });
    await $.stmt((await $.wcall([$t152], "ReturnBitmap", [(await $.wv([$t152], "PRightInd", C, false))], { get: async () => L1["returnbitmap"], set: async (v) => { L1["returnbitmap"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t152], "CreateHeadButton", [(await $.wv([$t152], "Head", { get: async () => L0["head"], set: async (v) => { L0["head"] = v; }, local: true }, false)), (await $.wv([$t152], "BtnRect", { get: async () => L0["btnrect"], set: async (v) => { L0["btnrect"] = v; }, local: true }, false)), (await $.wv([$t152], "Index", { get: async () => L1["index"], set: async (v) => { L1["index"] = v; }, local: true }, false)), (await $.wv([$t152], "BtnBitmap", { get: async () => L0["btnbitmap"], set: async (v) => { L0["btnbitmap"] = v; }, local: true }, false)), (await $.wv([$t152], "hsRight", C, false))], { get: async () => L0["createheadbutton"], set: async (v) => { L0["createheadbutton"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t152], "ReturnBitmap", [(await $.wv([$t152], "PLeftInd", C, false))], { get: async () => L1["returnbitmap"], set: async (v) => { L1["returnbitmap"] = v; }, local: true })));
    await $.mset((await $.wv([$t152], "BtnRect", { get: async () => L0["btnrect"], set: async (v) => { L0["btnrect"] = v; }, local: true }, false)), "Right", $.sub((await $.mv((await $.wv([$t152], "BtnRect", { get: async () => L0["btnrect"], set: async (v) => { L0["btnrect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t152], "SpeedButtonInterval", C, false))));
    await $.mset((await $.wv([$t152], "BtnRect", { get: async () => L0["btnrect"], set: async (v) => { L0["btnrect"] = v; }, local: true }, false)), "Left", $.sub((await $.mv((await $.wv([$t152], "BtnRect", { get: async () => L0["btnrect"], set: async (v) => { L0["btnrect"] = v; }, local: true }, false)), "right")), (await $.wv([$t152], "SpeedButtonWidth", C, false))));
    await $.stmt((await $.wcall([$t152], "CreateHeadButton", [(await $.wv([$t152], "Head", { get: async () => L0["head"], set: async (v) => { L0["head"] = v; }, local: true }, false)), (await $.wv([$t152], "BtnRect", { get: async () => L0["btnrect"], set: async (v) => { L0["btnrect"] = v; }, local: true }, false)), (await $.wv([$t152], "Index", { get: async () => L1["index"], set: async (v) => { L1["index"] = v; }, local: true }, false)), (await $.wv([$t152], "BtnBitmap", { get: async () => L0["btnbitmap"], set: async (v) => { L0["btnbitmap"] = v; }, local: true }, false)), (await $.wv([$t152], "hsLeft", C, false))], { get: async () => L0["createheadbutton"], set: async (v) => { L0["createheadbutton"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t152], "ReturnBitmap", [(await $.wv([$t152], "PDelInd", C, false))], { get: async () => L1["returnbitmap"], set: async (v) => { L1["returnbitmap"] = v; }, local: true })));
    await $.mset((await $.wv([$t152], "BtnRect", { get: async () => L0["btnrect"], set: async (v) => { L0["btnrect"] = v; }, local: true }, false)), "Right", $.sub((await $.mv((await $.wv([$t152], "BtnRect", { get: async () => L0["btnrect"], set: async (v) => { L0["btnrect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t152], "SpeedButtonInterval", C, false))));
    await $.mset((await $.wv([$t152], "BtnRect", { get: async () => L0["btnrect"], set: async (v) => { L0["btnrect"] = v; }, local: true }, false)), "Left", $.sub((await $.mv((await $.wv([$t152], "BtnRect", { get: async () => L0["btnrect"], set: async (v) => { L0["btnrect"] = v; }, local: true }, false)), "right")), (await $.wv([$t152], "SpeedButtonWidth", C, false))));
    await $.stmt((await $.wcall([$t152], "CreateHeadButton", [(await $.wv([$t152], "Head", { get: async () => L0["head"], set: async (v) => { L0["head"] = v; }, local: true }, false)), (await $.wv([$t152], "BtnRect", { get: async () => L0["btnrect"], set: async (v) => { L0["btnrect"] = v; }, local: true }, false)), (await $.wv([$t152], "Index", { get: async () => L1["index"], set: async (v) => { L1["index"] = v; }, local: true }, false)), (await $.wv([$t152], "BtnBitmap", { get: async () => L0["btnbitmap"], set: async (v) => { L0["btnbitmap"] = v; }, local: true }, false)), (await $.wv([$t152], "hsDel", C, false))], { get: async () => L0["createheadbutton"], set: async (v) => { L0["createheadbutton"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t152], "ReturnBitmap", [(await $.wv([$t152], "PAddInd", C, false))], { get: async () => L1["returnbitmap"], set: async (v) => { L1["returnbitmap"] = v; }, local: true })));
    await $.mset((await $.wv([$t152], "BtnRect", { get: async () => L0["btnrect"], set: async (v) => { L0["btnrect"] = v; }, local: true }, false)), "Right", $.sub((await $.mv((await $.wv([$t152], "BtnRect", { get: async () => L0["btnrect"], set: async (v) => { L0["btnrect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t152], "SpeedButtonInterval", C, false))));
    await $.mset((await $.wv([$t152], "BtnRect", { get: async () => L0["btnrect"], set: async (v) => { L0["btnrect"] = v; }, local: true }, false)), "Left", $.sub((await $.mv((await $.wv([$t152], "BtnRect", { get: async () => L0["btnrect"], set: async (v) => { L0["btnrect"] = v; }, local: true }, false)), "right")), (await $.wv([$t152], "SpeedButtonWidth", C, false))));
    await $.stmt((await $.wcall([$t152], "CreateHeadButton", [(await $.wv([$t152], "Head", { get: async () => L0["head"], set: async (v) => { L0["head"] = v; }, local: true }, false)), (await $.wv([$t152], "BtnRect", { get: async () => L0["btnrect"], set: async (v) => { L0["btnrect"] = v; }, local: true }, false)), (await $.wv([$t152], "Index", { get: async () => L1["index"], set: async (v) => { L1["index"] = v; }, local: true }, false)), (await $.wv([$t152], "BtnBitmap", { get: async () => L0["btnbitmap"], set: async (v) => { L0["btnbitmap"] = v; }, local: true }, false)), (await $.wv([$t152], "hsAdd", C, false))], { get: async () => L0["createheadbutton"], set: async (v) => { L0["createheadbutton"] = v; }, local: true })));
  }
  return L1.result;
});
  L0["btnbitmap"] = (await $.mv((await $.v(C, "TBitmap")), "Create"));
  try {
    {
      const $t153 = L0["head"];
      { const $t154 = $.sub((await $.mv((await $.wv([$t153], "Sections", C, false)), "Count")), 1);
        await $.wset([$t153], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t155 = true;
        for (;;) {
          if (!$t155) { await $.wset([$t153], "i", $.succ((await $.wv([$t153], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t155 = false;
          if (!($.ord((await $.wv([$t153], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t154))) break;
          await $.stmt((await $.wcall([$t153], "CreateHeadButtons", [(await $.wv([$t153], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t153], "BTnImageList", { get: async () => L0["btnimagelist"], set: async (v) => { L0["btnimagelist"] = v; }, local: true }, false))], { get: async () => L0["createheadbuttons"], set: async (v) => { L0["createheadbuttons"] = v; }, local: true })));
          await $.tick();
        }
      }
    }
  } finally {
    await $.mcall(L0["btnbitmap"], "Free", []);
  }
  return L0.result;
}, {"params": ["Head", "BtnimageList", "Methods"], "kind": "procedure", "ptypes": ["THeaderControl", "TImageList", "THeaderButtonMethods"]});
  U.method("TAdministrationForm", "hcQroupHeadSectionResize", async function hcQroupHeadSectionResize(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"headercontrol": $.copyArg(p0), "section": $.copyArg(p1), result: undefined, "i": 0, "size": 0};
  await $.fixArgs(L0, ["headercontrol", "section"]);
  L0["size"] = 0;
  {
    const $t156 = L0["headercontrol"];
    { const $t157 = $.sub((await $.mv((await $.wv([$t156], "Sections", C, false)), "Count")), 2);
      await $.wset([$t156], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t158 = true;
      for (;;) {
        if (!$t158) { await $.wset([$t156], "i", $.succ((await $.wv([$t156], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t158 = false;
        if (!($.ord((await $.wv([$t156], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t157))) break;
        await $.wset([$t156], "size", $.add((await $.wv([$t156], "size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false)), (await $.mv((await $.idx((await $.wv([$t156], "Sections", C, false)), [(await $.wv([$t156], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Width"))), { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true });
        await $.tick();
      }
    }
    if ($.truthy($.gt($.sub((await $.wv([$t156], "Width", C, false)), ($.add((await $.wv([$t156], "size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false)), 2))), 2))) {
      await $.mset((await $.idx((await $.wv([$t156], "Sections", C, false)), [$.sub((await $.mv((await $.wv([$t156], "Sections", C, false)), "Count")), 1)])), "Width", $.sub((await $.wv([$t156], "Width", C, false)), ($.add((await $.wv([$t156], "size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false)), 2))));
    }
    {
      const $t159 = (await $.wv([$t156], "slGroupGrid", C, false));
      { const $t160 = await $.iset((await $.wv([$t156, $t159], "ColWidths", C, false)), [(await $.mv((await $.wv([$t156, $t159], "Section", { get: async () => L0["section"], set: async (v) => { L0["section"] = v; }, local: true }, false)), "Index"))], (await $.mv((await $.wv([$t156, $t159], "Section", { get: async () => L0["section"], set: async (v) => { L0["section"] = v; }, local: true }, false)), "Width"))); if ($t160 !== undefined) { await $.wset([$t156, $t159], "ColWidths", $t160, C); } }
      { const $t161 = await $.iset((await $.wv([$t156, $t159], "ColWidths", C, false)), [$.sub((await $.wv([$t156, $t159], "ColCount", C, false)), 1)], $.sub((await $.mv((await $.idx((await $.wv([$t156, $t159], "Sections", C, false)), [$.sub((await $.mv((await $.wv([$t156, $t159], "Sections", C, false)), "Count")), 1)])), "Width")), 5)); if ($t161 !== undefined) { await $.wset([$t156, $t159], "ColWidths", $t161, C); } }
    }
  }
  {
    const $t162 = L0["headercontrol"];
    { const $t163 = $.sub((await $.wv([$t162], "ControlCount", C, false)), 1);
      await $.wset([$t162], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t164 = true;
      for (;;) {
        if (!$t164) { await $.wset([$t162], "i", $.succ((await $.wv([$t162], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t164 = false;
        if (!($.ord((await $.wv([$t162], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t163))) break;
        if ($.truthy(($.is_((await $.idx((await $.wv([$t162], "Controls", C, false)), [(await $.wv([$t162], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "THeaderButton")))) {
          {
            const $t165 = ((await $.idx((await $.wv([$t162], "Controls", C, false)), [(await $.wv([$t162], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])));
            { const $t166 = (await $.wv([$t162, $t165], "HeadState", C, false));
              if ($.eq($t166, (await $.wv([$t162, $t165], "hsRight", C, false)))) {
                await $.wset([$t162, $t165], "Left", $.sub((await $.mv((await $.idx((await $.wv([$t162, $t165], "Sections", C, false)), [(await $.mv((await $.idx((await $.wv([$t162, $t165], "Controls", C, false)), [(await $.wv([$t162, $t165], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Tag"))])), "Right")), ($.add((await $.wv([$t162, $t165], "SpeedButtonFirstInterval", C, false)), (await $.wv([$t162, $t165], "SpeedButtonWidth", C, false))))), C);
              }
              else if ($.eq($t166, (await $.wv([$t162, $t165], "hsLeft", C, false)))) {
                await $.wset([$t162, $t165], "Left", $.sub((await $.mv((await $.idx((await $.wv([$t162, $t165], "Sections", C, false)), [(await $.mv((await $.idx((await $.wv([$t162, $t165], "Controls", C, false)), [(await $.wv([$t162, $t165], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Tag"))])), "Right")), ($.add($.add((await $.wv([$t162, $t165], "SpeedButtonFirstInterval", C, false)), $.mul(2, (await $.wv([$t162, $t165], "SpeedButtonWidth", C, false)))), (await $.wv([$t162, $t165], "SpeedButtonInterval", C, false))))), C);
              }
              else if ($.eq($t166, (await $.wv([$t162, $t165], "hsDel", C, false)))) {
                await $.wset([$t162, $t165], "Left", $.sub((await $.mv((await $.idx((await $.wv([$t162, $t165], "Sections", C, false)), [(await $.mv((await $.idx((await $.wv([$t162, $t165], "Controls", C, false)), [(await $.wv([$t162, $t165], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Tag"))])), "Right")), ($.add($.add((await $.wv([$t162, $t165], "SpeedButtonFirstInterval", C, false)), $.mul(3, (await $.wv([$t162, $t165], "SpeedButtonWidth", C, false)))), $.mul(2, (await $.wv([$t162, $t165], "SpeedButtonInterval", C, false)))))), C);
              }
              else if ($.eq($t166, (await $.wv([$t162, $t165], "hsAdd", C, false)))) {
                await $.wset([$t162, $t165], "Left", $.sub((await $.mv((await $.idx((await $.wv([$t162, $t165], "Sections", C, false)), [(await $.mv((await $.idx((await $.wv([$t162, $t165], "Controls", C, false)), [(await $.wv([$t162, $t165], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Tag"))])), "Right")), ($.add($.add((await $.wv([$t162, $t165], "SpeedButtonFirstInterval", C, false)), $.mul(4, (await $.wv([$t162, $t165], "SpeedButtonWidth", C, false)))), $.mul(3, (await $.wv([$t162, $t165], "SpeedButtonInterval", C, false)))))), C);
              }
            }
          }
        }
        await $.mset((await $.idx((await $.wv([$t162], "Controls", C, false)), [(await $.wv([$t162], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Visible", $.gt((await $.mv((await $.idx((await $.wv([$t162], "Sections", C, false)), [(await $.mv((await $.idx((await $.wv([$t162], "Controls", C, false)), [(await $.wv([$t162], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Tag"))])), "Width")), $.add((await $.mcall((await $.wv([$t162], "Canvas", C, false)), "TextWidth", [(await $.mv((await $.idx((await $.wv([$t162], "Sections", C, false)), [(await $.mv((await $.idx((await $.wv([$t162], "Controls", C, false)), [(await $.wv([$t162], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Tag"))])), "Text"))])), $.mul(3, (await $.wv([$t162], "SpeedButtonWidth", C, false))))));
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["HeaderControl", "Section"], "kind": "procedure", "ptypes": ["THeaderControl", "THeaderSection"]});
  U.method("TAdministrationForm", "hcQroupHeadResize", async function hcQroupHeadResize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "hcQroupHeadSectionResize", [(L0["sender"]), (await $.idx((await $.mv((L0["sender"]), "Sections")), [0]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "hcQroupHeadSectionClick", async function hcQroupHeadSectionClick(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"headercontrol": $.copyArg(p0), "section": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["headercontrol", "section"]);
  await $.stmt((await $.call(C, "GridAdd", [(await $.v(C, "slGroupGrid")), (await $.mv(L0["section"], "Index"))])));
  return L0.result;
}, {"params": ["HeaderControl", "Section"], "kind": "procedure", "ptypes": ["THeaderControl", "THeaderSection"]});
  U.method("TAdministrationForm", "slGroupGridKeyDown", async function slGroupGridKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_DELETE"))))) {
    await $.stmt((await $.call(C, "GridDel", [(await $.v(C, "slGroupGrid")), (await $.mv((await $.v(C, "slGroupGrid")), "Col"))])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TAdministrationForm", "ChangeSelectedLockImage", async function ChangeSelectedLockImage(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"islocked": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["islocked"]);
  {
    const $t167 = (await $.mv((await $.v(C, "tvMain")), "Selected"));
    if ($.truthy((await $.wv([$t167], "IsLocked", { get: async () => L0["islocked"], set: async (v) => { L0["islocked"] = v; }, local: true }, false)))) {
      await $.wset([$t167], "ImageIndex", (await $.wv([$t167], "icoLockUser", C, false)), C);
      await $.wset([$t167], "SelectedIndex", (await $.wv([$t167], "icoLockUser", C, false)), C);
    } else {
      await $.wset([$t167], "SelectedIndex", (await $.wv([$t167], "icoUser", C, false)), C);
      await $.wset([$t167], "ImageIndex", (await $.wv([$t167], "icoUser", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["IsLocked"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TAdministrationForm", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "LockUserExecute", async function LockUserExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t168 = (await $.v(C, "AdministrationData"));
    const $t169 = (await $.wv([$t168], "pcADM", C, false));
    const $t170 = (await $.wv([$t168, $t169], "UsersData", C, false));
    if ($.truthy(($.is_((await $.wv([$t168, $t169, $t170], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "TAction")))) {
      {
        const $t171 = ((await $.wv([$t168, $t169, $t170], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)));
        if ($.truthy($.eq((await $.mv((await $.wcall([$t168, $t169, $t170, $t171], "FieldByName", ["Is_Adm"], C)), "AsInteger")), 1))) {
          await $.stmt((await $.mcall((await $.wv([$t168, $t169, $t170, $t171], "hbErrorBox", C, false)), "ShowMessage", ["Administrator istifadəçini ləğv etmək olmaz"])));
          $.abort();
        }
        await $.wset([$t168, $t169, $t170, $t171], "Checked", $.not(((await $.wv([$t168, $t169, $t170, $t171], "Checked", C, false)))), C);
        await $.stmt((await $.wcall([$t168, $t169, $t170, $t171], "CallBooleanFunction", ["LockUser", [(await $.mv((await $.mv((await $.wv([$t168, $t169, $t170, $t171], "tvMain", C, false)), "Selected")), "text")), (await $.wv([$t168, $t169, $t170, $t171], "Checked", C, false))]], C)));
        await $.stmt((await $.mcall((await $.wv([$t168, $t169, $t170, $t171], "DBRefresh", C, false)), "OnExecute", [(await $.wv([$t168, $t169, $t170, $t171], "UsersData", C, false))])));
        await $.stmt((await $.wcall([$t168, $t169, $t170, $t171], "ChangeSelectedLockImage", [(await $.wv([$t168, $t169, $t170, $t171], "Checked", C, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "SetOptionsExecute", async function SetOptionsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fmprofiles": null};
  await $.fixArgs(L0, ["sender"]);
  L0["fmprofiles"] = (await $.mcall((await $.v(C, "TfmProfOptions")), "Create", [Self]));
  try {
    await $.mset(L0["fmprofiles"], "userName", (await $.mv((await $.mv((await $.v(C, "tvMain")), "Selected")), "Text")));
    await $.stmt((await $.mcall(L0["fmprofiles"], "Execute", [])));
    await $.mcall(L0["fmprofiles"], "ShowModal", []);
  } finally {
    if ($.truthy((await $.call(C, "Assigned", [L0["fmprofiles"]])))) {
      await $.mcall(L0["fmprofiles"], "Release", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "btnUsersAdvGrantClick", async function btnUsersAdvGrantClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t172 = (await $.v(C, "AdministrationData"));
    const $t173 = (await $.wv([$t172], "repAdvGrantData", C, false));
    const $t174 = (await $.wv([$t172, $t173], "cbUsersOrder", C, false));
    const $t175 = (await $.wv([$t172, $t173, $t174], "rptAdvgrant", C, false));
    { const $t176 = await $.iset((await $.wv([$t172, $t173, $t174, $t175], "sql", C, false)), [2], "where username in ('1'"); if ($t176 !== undefined) { await $.wset([$t172, $t173, $t174, $t175], "sql", $t176, C); } }
    { const $t177 = $.sub((await $.mv((await $.wv([$t172, $t173, $t174, $t175], "Items", C, false)), "Count")), 1);
      await $.wset([$t172, $t173, $t174, $t175], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t178 = true;
      for (;;) {
        if (!$t178) { await $.wset([$t172, $t173, $t174, $t175], "i", $.succ((await $.wv([$t172, $t173, $t174, $t175], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t178 = false;
        if (!($.ord((await $.wv([$t172, $t173, $t174, $t175], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t177))) break;
        if ($.truthy((await $.idx((await $.wv([$t172, $t173, $t174, $t175], "checked", C, false)), [(await $.wv([$t172, $t173, $t174, $t175], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])))) {
          { const $t179 = await $.iset((await $.wv([$t172, $t173, $t174, $t175], "sql", C, false)), [2], $.add($.add($.add((await $.idx((await $.wv([$t172, $t173, $t174, $t175], "sql", C, false)), [2])), ",'"), (await $.idx((await $.wv([$t172, $t173, $t174, $t175], "Items", C, false)), [(await $.wv([$t172, $t173, $t174, $t175], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "'")); if ($t179 !== undefined) { await $.wset([$t172, $t173, $t174, $t175], "sql", $t179, C); } }
        }
        await $.tick();
      }
    }
    { const $t180 = await $.iset((await $.wv([$t172, $t173, $t174, $t175], "sql", C, false)), [2], $.add((await $.idx((await $.wv([$t172, $t173, $t174, $t175], "sql", C, false)), [2])), ")")); if ($t180 !== undefined) { await $.wset([$t172, $t173, $t174, $t175], "sql", $t180, C); } }
    await $.stmt($.wcall([$t172, $t173, $t174, $t175], "close", [], C));
    await $.stmt($.wcall([$t172, $t173, $t174, $t175], "open", [], C));
    await $.wset([$t172, $t173, $t174, $t175], "rptAdvgrant", (await $.mcall((await $.wv([$t172, $t173, $t174, $t175], "TrptAdvgrant", C, false)), "Create", [Self])), C);
    try {
      await $.mcall((await $.wv([$t172, $t173, $t174, $t175], "rptAdvgrant", C, false)), "Preview", []);
    } finally {
      if ($.truthy((await $.wcall([$t172, $t173, $t174, $t175], "Assigned", [(await $.wv([$t172, $t173, $t174, $t175], "rptAdvgrant", C, false))], C)))) {
        await $.mcall((await $.wv([$t172, $t173, $t174, $t175], "rptAdvgrant", C, false)), "Destroy", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t181 = (await $.v(C, "AdministrationData"));
    const $t182 = (await $.wv([$t181], "pcADM", C, false));
    const $t183 = (await $.wv([$t181, $t182], "UsersData", C, false));
    if ($.truthy($.eq((await $.mv((await $.wcall([$t181, $t182, $t183], "FieldByName", ["Is_Adm"], C)), "AsInteger")), 1))) {
      await $.stmt((await $.mcall((await $.wv([$t181, $t182, $t183], "hbErrorBox", C, false)), "ShowMessage", ["Administrator istifadəçini ləğv etmək olmaz"])));
      $.abort();
    }
    await $.stmt((await $.wcall([$t181, $t182, $t183], "CallBooleanFunction", ["LockUser", [(await $.mv((await $.mv((await $.wv([$t181, $t182, $t183], "tvMain", C, false)), "Selected")), "text")), (await $.wv([$t181, $t182, $t183], "True", C, false))]], C)));
    await $.stmt((await $.mcall((await $.wv([$t181, $t182, $t183], "DBRefresh", C, false)), "OnExecute", [(await $.wv([$t181, $t182, $t183], "UsersData", C, false))])));
    await $.stmt((await $.wcall([$t181, $t182, $t183], "ChangeSelectedLockImage", [(await $.wv([$t181, $t182, $t183], "True", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "SpeedButton4Click", async function SpeedButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "fingers")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "SpeedButton4DblClick", async function SpeedButton4DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "fingers")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "UsersData")), "open", []);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Button1")), "Caption")), "UNCHECK ALL"))) {
    { const $t184 = (await $.mv((await $.mv((await $.v(C, "AdministrationData")), "UsersData")), "RecordCount"));
      L0["i"] = 1;
      let $t185 = true;
      for (;;) {
        if (!$t185) { L0["i"] = $.succ(L0["i"], 1); }
        $t185 = false;
        if (!($.ord(L0["i"]) <= $.ord($t184))) break;
        { const $t186 = await $.iset((await $.mv((await $.v(C, "cbUsersOrder")), "Checked")), [$.sub(L0["i"], 1)], false); if ($t186 !== undefined) { await $.mset((await $.v(C, "cbUsersOrder")), "Checked", $t186); } }
        await $.tick();
      }
    }
    await $.mset((await $.v(C, "Button1")), "Caption", "CHECK ALL");
  } else {
    { const $t187 = (await $.mv((await $.mv((await $.v(C, "AdministrationData")), "UsersData")), "RecordCount"));
      L0["i"] = 1;
      let $t188 = true;
      for (;;) {
        if (!$t188) { L0["i"] = $.succ(L0["i"], 1); }
        $t188 = false;
        if (!($.ord(L0["i"]) <= $.ord($t187))) break;
        { const $t189 = await $.iset((await $.mv((await $.v(C, "cbUsersOrder")), "Checked")), [$.sub(L0["i"], 1)], true); if ($t189 !== undefined) { await $.mset((await $.v(C, "cbUsersOrder")), "Checked", $t189); } }
        await $.mset((await $.v(C, "Button1")), "Caption", "UNCHECK ALL");
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Animate1")), "Visible", true);
  await $.mset((await $.v(C, "Animate1")), "Active", true);
  await $.mset((await $.v(C, "Animate1")), "CommonAVI", (await $.v(C, "aviCopyFiles")));
  await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "allqrants")), "open", []);
  await $.mcall((await $.v(C, "CMExcelqrants")), "connect", []);
  await $.stmt((await $.mcall((await $.v(C, "CMExcelqrants")), "ExportDataset", [(await $.mv((await $.v(C, "AdministrationData")), "allqrants")), "QRANTS", true])));
  await $.mcall((await $.v(C, "CMExcelqrants")), "Disconnect", []);
  await $.mset((await $.v(C, "Animate1")), "Active", false);
  await $.mset((await $.v(C, "Animate1")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "SetVariable", ["t", "U"])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "SetVariable", ["cls", "EMELIYAT"])));
  await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "Edit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "SetVariable", ["t", "U"])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "SetVariable", ["cls", "EMELIYAT"])));
  await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "AdministrationData")), "clsf")), "Edit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdministrationForm", "ToolButton16Click", async function ToolButton16Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CLSCOPY", (await $.mcall((await $.v(C, "TCLSCOPY")), "CREATE", [Self])));
  await $.mcall((await $.v(C, "CLSCOPY")), "SHOWMODAL", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
