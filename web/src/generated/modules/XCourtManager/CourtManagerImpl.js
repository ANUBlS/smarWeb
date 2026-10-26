// Generated from CourtManagerImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CourtManagerImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracledata", "ActiveX", "AxCtrls", "CourtManager_TLB", "StdVcl", "Buttons", "ExtCtrls", "StdCtrls", "DBGridEh", "Menus", "CMExcelExport", "Mask", "DBCtrlsEh", "DBLookupEh", "XFSCtrls", "CheckLst", "Evanescence", "DBCtrls", "Grids", "XDBGrids", "sboapiDataModuleImpl", "Variants", "ComObj", "ComServ", "AdminParametr", "UnitDataModuleCourt", "CourtInfo", "CourtSend", "PdfForm", "CreditInfo", "CourtPayments", "UnitCourts", "Executive"]);
  const C = [U];
  U.defClass("TCourtmgr", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton5": {"name": "SpeedButton5", "type": "TSpeedButton"}, "speedbutton6": {"name": "SpeedButton6", "type": "TSpeedButton"}, "speedbutton7": {"name": "SpeedButton7", "type": "TSpeedButton"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "editid": {"name": "editID", "type": "TEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "editname": {"name": "editname", "type": "TEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "editnumberofcredit": {"name": "editNUMBEROFCREDIT", "type": "TEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "editboorowerid": {"name": "editBOOROWERID", "type": "TEdit"}, "infopl": {"name": "InfoPl", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "speedbutton8": {"name": "SpeedButton8", "type": "TSpeedButton"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "dbmemo1": {"name": "DBMemo1", "type": "TDBMemo"}, "panelfilter": {"name": "PanelFilter", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "speedbutton9": {"name": "SpeedButton9", "type": "TSpeedButton"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "filiallukap": {"name": "FilialLukap", "type": "TEvanescence"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "lookqovluq": {"name": "LookQovluq", "type": "TEvanescence"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "maingrid": {"name": "MainGrid", "type": "TXDBGrid"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "kredirmlumatlar1": {"name": "Kredirmlumatlar1", "type": "TMenuItem"}, "stop1": {"name": "Stop1", "type": "TMenuItem"}, "crabsi1": {"name": "crabsi1", "type": "TMenuItem"}, "yenil1": {"name": "Yenil1", "type": "TMenuItem"}, "cra1": {"name": "cra1", "type": "TMenuItem"}, "mhkm1": {"name": "Mhkm1", "type": "TMenuItem"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "dblexecutive": {"name": "DBLExecutive", "type": "TDBLookupComboboxEh"}, "dblcourt": {"name": "DBLCourt", "type": "TDBLookupComboboxEh"}, "fevents": {"name": "FEvents", "type": "ICourtmgrEvents"}}, {});
  U.init(async () => {
    U.const("rsErrorQovluq", "Ən azı bir Hərəkət seçilməlidir!");
    U.const("LoadingFailed", true);
    U.const("DataColIndex", 0);
  });
  U.method("TCourtmgr", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TCourtmgr", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  await $.inherited(Self, "TCourtmgr", "EventSinkChanged", [L0["eventsink"]], arguments);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TCourtmgr", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TCourtmgr", "Initialize", null, arguments);
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
  U.method("TCourtmgr", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_AlignDisabled", async function Get_AlignDisabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignDisabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_AlignWithMargins", async function Get_AlignWithMargins(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignWithMargins"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_BorderWidth", async function Get_BorderWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Integer", [(await $.v(C, "BorderWidth"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_DockSite", async function Get_DockSite(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DockSite"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_ExplicitHeight", async function Get_ExplicitHeight(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitHeight"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_ExplicitLeft", async function Get_ExplicitLeft(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitLeft"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_ExplicitTop", async function Get_ExplicitTop(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitTop"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_ExplicitWidth", async function Get_ExplicitWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitWidth"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_MouseInClient", async function Get_MouseInClient(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "MouseInClient"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_ParentCustomHint", async function Get_ParentCustomHint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentCustomHint"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_ParentDoubleBuffered", async function Get_ParentDoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentDoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_PopupMode", async function Get_PopupMode(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PopupMode"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_ScreenSnap", async function Get_ScreenSnap(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ScreenSnap"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_SnapBuffer", async function Get_SnapBuffer(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "SnapBuffer"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_UseDockManager", async function Get_UseDockManager(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "UseDockManager"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCourtmgr", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCourtmgr", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "ActnSearchExecute", async function ActnSearchExecute(Self, p0) {
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
        if ($.truthy($.eq((await $.wcall([$t1, $t2], "MessageDlg", [$.add($.add("Axtarış sona çatıb.", "\r"), "əvvəldəb başlamaq istəyirsinizmi?"), (await $.wv([$t1, $t2], "mtInformation", C, false)), [(await $.wv([$t1, $t2], "mbNo", C, false)), (await $.wv([$t1, $t2], "mbYes", C, false))], 0], C)), (await $.wv([$t1, $t2], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t1, $t2], "SearchRecord", [(await $.wv([$t1, $t2], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Text", C, false)), $.add((await $.wv([$t1, $t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t1, $t2], "MessageDlg", ["Yazı Tapılmadı!", (await $.wv([$t1, $t2], "mtInformation", C, false)), [(await $.wv([$t1, $t2], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModuleCourt", (await $.mcall((await $.v(C, "TDataModuleCourt")), "Create", [Self])));
  await $.set(C, "FormPayments", (await $.mcall((await $.v(C, "TFormPayments")), "Create", [Self])));
  await $.set(C, "FormParametr", (await $.mcall((await $.v(C, "TFormParametr")), "Create", [Self])));
  await $.set(C, "FormCourtInfo", (await $.mcall((await $.v(C, "TFormCourtInfo")), "Create", [Self])));
  await $.set(C, "FormCreditInfo", (await $.mcall((await $.v(C, "TFormCreditInfo")), "Create", [Self])));
  await $.set(C, "FormSend", (await $.mcall((await $.v(C, "TFormSend")), "Create", [Self])));
  await $.set(C, "FormPdf", (await $.mcall((await $.v(C, "TFormPdf")), "Create", [Self])));
  await $.set(C, "FormExecutive", (await $.mcall((await $.v(C, "TFormExecutive")), "Create", [Self])));
  await $.set(C, "FormCourts", (await $.mcall((await $.v(C, "TFormCourts")), "Create", [Self])));
  { const $t3 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t4 = true;
    for (;;) {
      if (!$t4) { L0["i"] = $.succ(L0["i"], 1); }
      $t4 = false;
      if (!($.ord(L0["i"]) <= $.ord($t3))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 3112))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "CheckAll", []);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("ErrorInCheck", async function ErrorInCheck(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"look": $.copyArg(p0), "errormsg": (p1 === undefined ? "" : p1), result: false};
  await $.fixArgs(L0, ["look", "errormsg"]);
  L0["result"] = true;
  if ($.truthy($.eq((await $.mv((await $.mv(L0["look"], "GetCheckedKeyList")), "Count")), 0))) {
    L0["result"] = false;
  }
  if ($.truthy((await $.and_(($.ne(L0["errormsg"], "")), async () => ($.not(L0["result"])))))) {
    await $.stmt((await $.call(C, "ShowMessage", [L0["errormsg"]])));
  }
  return L0.result;
}, {"params": ["Look", "ErrorMsg"], "kind": "function", "ptypes": ["TEvanescence", "String"]});
  U.method("TCourtmgr", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "additionalparams": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "ErrorInCheck", [(await $.v(C, "LookQovluq")), (await $.v(C, "rsErrorQovluq"))]))))) {
    return L0.result;
  }
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "LookQovluq")), "GetCheckedKeyList")), "Count")), (await $.mv((await $.mv((await $.v(C, "LookQovluq")), "Items")), "Count")))))) {
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " AND p.courtid in("), (await $.mv((await $.mv((await $.v(C, "LookQovluq")), "GetCheckedKeyList")), "CommaText"))), ")"), "\r\n");
  }
  await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourt")), "Close", []);
  { const $t5 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourt")), "SQL")), [42], L0["additionalparams"]); if ($t5 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourt")), "SQL", $t5); } }
  await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourt")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "additionalparams": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "ErrorInCheck", [(await $.v(C, "FilialLukap")), (await $.v(C, "rsErrorQovluq"))]))))) {
    return L0.result;
  }
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "FilialLukap")), "GetCheckedKeyList")), "Count")), (await $.mv((await $.mv((await $.v(C, "FilialLukap")), "Items")), "Count")))))) {
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " AND p.branchid in("), (await $.mv((await $.mv((await $.v(C, "FilialLukap")), "GetCheckedKeyList")), "CommaText"))), ")"), "\r\n");
  }
  await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourt")), "Close", []);
  { const $t6 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourt")), "SQL")), [43], L0["additionalparams"]); if ($t6 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourt")), "SQL", $t6); } }
  await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourt")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourt")), "Close", []);
  { const $t7 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourt")), "SQL")), [45], ""); if ($t7 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourt")), "SQL", $t7); } }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLExecutive")), "KeyValue")), "-1"))) {
    { const $t8 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourt")), "SQL")), [45], $.add($.add("AND p.placeid=", (await $.call(C, "vartostr", [(await $.mv((await $.v(C, "DBLExecutive")), "KeyValue"))]))), "  AND p.placestatus=0")); if ($t8 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourt")), "SQL", $t8); } }
  }
  await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourt")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourt")), "Close", []);
  { const $t9 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourt")), "SQL")), [45], ""); if ($t9 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourt")), "SQL", $t9); } }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLCourt")), "KeyValue")), "-1"))) {
    { const $t10 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourt")), "SQL")), [45], $.add($.add("AND p.placeid=", (await $.call(C, "vartostr", [(await $.mv((await $.v(C, "DBLCourt")), "KeyValue"))]))), "  AND p.placestatus=1")); if ($t10 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourt")), "SQL", $t10); } }
  }
  await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourt")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "cra1Click", async function cra1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormExecutive")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "crabsi1Click", async function crabsi1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSInfo")), "insert", []);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSInfo")), "FieldByName", ["creditid"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourt")), "FieldByName", ["id"])), "AsInteger")));
  await $.mcall((await $.v(C, "FormCourtInfo")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "editIDExit", async function editIDExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "editIDKeyPress", async function editIDKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "ActnSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCourtmgr", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TCourtmgr", "Kredirmlumatlar1Click", async function Kredirmlumatlar1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.v(C, "DataModuleCourt"));
    if ($.truthy((await $.mv((await $.wv([$t11], "ScheduleCourt", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t11], "ScheduleCourt", C, false)), "close", []);
    }
    await $.stmt((await $.mcall((await $.wv([$t11], "ScheduleCourt", C, false)), "SetVariable", ["CrdID", (await $.mv((await $.mcall((await $.wv([$t11], "ODSCourt", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t11], "ScheduleCourt", C, false)), "open", []);
    if ($.truthy((await $.mv((await $.wv([$t11], "PaymentsCourt", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t11], "PaymentsCourt", C, false)), "close", []);
    }
    await $.stmt((await $.mcall((await $.wv([$t11], "PaymentsCourt", C, false)), "SetVariable", ["CrdID", (await $.mv((await $.mcall((await $.wv([$t11], "ODSCourt", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t11], "PaymentsCourt", C, false)), "open", []);
    if ($.truthy((await $.mv((await $.wv([$t11], "ZaminDSetCourt", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t11], "ZaminDSetCourt", C, false)), "close", []);
    }
    await $.stmt((await $.mcall((await $.wv([$t11], "ZaminDSetCourt", C, false)), "SetVariable", ["CrdID", (await $.mv((await $.mcall((await $.wv([$t11], "ODSCourt", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t11], "ZaminDSetCourt", C, false)), "open", []);
    if ($.truthy((await $.mv((await $.wv([$t11], "GirovDSetCourt", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t11], "GirovDSetCourt", C, false)), "close", []);
    }
    await $.stmt((await $.mcall((await $.wv([$t11], "GirovDSetCourt", C, false)), "SetVariable", ["CrdID", (await $.mv((await $.mcall((await $.wv([$t11], "ODSCourt", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t11], "GirovDSetCourt", C, false)), "open", []);
  }
  await $.mcall((await $.v(C, "FormCreditInfo")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "MainGridDblClick", async function MainGridDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (await $.v(C, "DataModuleCourt"));
    if ($.truthy((await $.mv((await $.wv([$t12], "ScheduleCourt", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t12], "ScheduleCourt", C, false)), "close", []);
    }
    await $.stmt((await $.mcall((await $.wv([$t12], "ScheduleCourt", C, false)), "SetVariable", ["CrdID", (await $.mv((await $.mcall((await $.wv([$t12], "ODSCourt", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t12], "ScheduleCourt", C, false)), "open", []);
    if ($.truthy((await $.mv((await $.wv([$t12], "PaymentsCourt", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t12], "PaymentsCourt", C, false)), "close", []);
    }
    await $.stmt((await $.mcall((await $.wv([$t12], "PaymentsCourt", C, false)), "SetVariable", ["CrdID", (await $.mv((await $.mcall((await $.wv([$t12], "ODSCourt", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t12], "PaymentsCourt", C, false)), "open", []);
    if ($.truthy((await $.mv((await $.wv([$t12], "ZaminDSetCourt", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t12], "ZaminDSetCourt", C, false)), "close", []);
    }
    await $.stmt((await $.mcall((await $.wv([$t12], "ZaminDSetCourt", C, false)), "SetVariable", ["CrdID", (await $.mv((await $.mcall((await $.wv([$t12], "ODSCourt", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t12], "ZaminDSetCourt", C, false)), "open", []);
    if ($.truthy((await $.mv((await $.wv([$t12], "GirovDSetCourt", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t12], "GirovDSetCourt", C, false)), "close", []);
    }
    await $.stmt((await $.mcall((await $.wv([$t12], "GirovDSetCourt", C, false)), "SetVariable", ["CrdID", (await $.mv((await $.mcall((await $.wv([$t12], "ODSCourt", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t12], "GirovDSetCourt", C, false)), "open", []);
  }
  await $.mcall((await $.v(C, "FormCreditInfo")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "MainGridTitleClick", async function MainGridTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  {
    const $t13 = (await $.v(C, "DataModuleCourt"));
    const $t14 = (await $.wv([$t13], "ODSCourt", C, false));
    await $.stmt($.wcall([$t13, $t14], "Close", [], C));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t13, $t14], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "Title")), "MarkerIndex")), 2))) {
      await $.stmt((await $.wcall([$t13, $t14], "SetVariable", ["title", $.add($.add((await $.mv((await $.wv([$t13, $t14], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), " "), "ASC")], C)));
    } else {
      await $.stmt((await $.wcall([$t13, $t14], "SetVariable", ["title", $.add($.add((await $.mv((await $.wv([$t13, $t14], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), " "), "DESC")], C)));
    }
    await $.stmt($.wcall([$t13, $t14], "open", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TCourtmgr", "Mhkm1Click", async function Mhkm1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormCourts")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "MouseEnterEvent", async function MouseEnterEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseEnter", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "MouseLeaveEvent", async function MouseLeaveEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseLeave", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "Set_AlignWithMargins", async function Set_AlignWithMargins(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AlignWithMargins", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCourtmgr", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCourtmgr", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCourtmgr", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TCourtmgr", "Set_BorderWidth", async function Set_BorderWidth(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "BorderWidth", (await $.call(C, "TBorderWidth", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCourtmgr", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCourtmgr", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TCourtmgr", "Set_DockSite", async function Set_DockSite(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DockSite", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCourtmgr", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCourtmgr", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCourtmgr", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCourtmgr", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCourtmgr", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "string", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCourtmgr", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCourtmgr", "Set_ParentCustomHint", async function Set_ParentCustomHint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentCustomHint", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCourtmgr", "Set_ParentDoubleBuffered", async function Set_ParentDoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentDoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCourtmgr", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCourtmgr", "Set_PopupMode", async function Set_PopupMode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PopupMode", (await $.call(C, "TPopupMode", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPopupMode"]});
  U.method("TCourtmgr", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TCourtmgr", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCourtmgr", "Set_ScreenSnap", async function Set_ScreenSnap(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ScreenSnap", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCourtmgr", "Set_SnapBuffer", async function Set_SnapBuffer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "SnapBuffer", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCourtmgr", "Set_UseDockManager", async function Set_UseDockManager(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "UseDockManager", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCourtmgr", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCourtmgr", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormPdf")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PanelFilter")), "Visible", $.not((await $.mv((await $.v(C, "PanelFilter")), "Visible"))));
  if ($.truthy(((await $.mv((await $.v(C, "SpeedButton2")), "AllowAllUp"))))) {
    await $.mset((await $.v(C, "SpeedButton2")), "AllowAllUp", false);
    await $.mset((await $.v(C, "SpeedButton2")), "Down", true);
  } else {
    await $.mset((await $.v(C, "SpeedButton2")), "AllowAllUp", true);
    await $.mset((await $.v(C, "SpeedButton2")), "Down", false);
  }
  await $.mset((await $.v(C, "DBLExecutive")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLCourt")), "KeyValue", (-(1)));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormPayments")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "SpeedButton4Click", async function SpeedButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "DataModuleCourt")), "ODSAdminGroups")), "Active", true);
  await $.mset((await $.mv((await $.v(C, "DataModuleCourt")), "ODSAdminIn")), "Active", true);
  {
    const $t15 = (await $.mv((await $.v(C, "DataModuleCourt")), "ODSCourtAdmin"));
    await $.stmt($.wcall([$t15], "Open", [], C));
    if ($.truthy((await $.or_((await $.or_(($.eq((await $.wcall([$t15], "UpperCase", [(await $.mv((await $.wv([$t15], "Session", C, false)), "LogonUsername"))], C)), "SMART")), async () => ($.eq((await $.wcall([$t15], "UpperCase", [(await $.mv((await $.wv([$t15], "Session", C, false)), "LogonUsername"))], C)), "ELVIN")))), async () => ($.eq((await $.wcall([$t15], "UpperCase", [(await $.mv((await $.wv([$t15], "Session", C, false)), "LogonUsername"))], C)), "ELMIR")))))) {
      await $.mcall((await $.wv([$t15], "FormParametr", C, false)), "ShowModal", []);
    } else {
      await $.stmt((await $.mcall((await $.wv([$t15], "Application", C, false)), "MessageBox", ["Giriş Qadağandır!", "Administratora müraciət edin!!!", 0])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "SpeedButton5Click", async function SpeedButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "InfoPl")), "Visible", $.not((await $.mv((await $.v(C, "InfoPl")), "Visible"))));
  if ($.truthy(((await $.mv((await $.v(C, "SpeedButton5")), "AllowAllUp"))))) {
    await $.mset((await $.v(C, "SpeedButton5")), "AllowAllUp", false);
    await $.mset((await $.v(C, "SpeedButton5")), "Down", true);
  } else {
    await $.mset((await $.v(C, "SpeedButton5")), "AllowAllUp", true);
    await $.mset((await $.v(C, "SpeedButton5")), "Down", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "SpeedButton6Click", async function SpeedButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t16 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t16], "Connect", [], C));
    await $.stmt((await $.wcall([$t16], "ExportDataset", [(await $.mv((await $.wv([$t16], "DataModuleCourt", C, false)), "ODSCourt")), "Məhkəmə", (await $.wv([$t16], "True", C, false))], C)));
    await $.stmt($.wcall([$t16], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "SpeedButton7Click", async function SpeedButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.v(C, "DataModuleCourt"));
    await $.mcall((await $.wv([$t17], "ODSCourt", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtmgr", "Stop1Click", async function Stop1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormSend")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
