// Generated from ProblemCreditManagers.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ProblemCreditManagers", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "ProblemCreditmgrs_TLB", "StdVcl", "StdCtrls", "ExtCtrls", "Buttons", "Grids", "XDBGrids", "CheckLst", "Evanescence", "Menus", "DBCtrls", "ComCtrls", "Oracledata", "ImgList", "CMExcelExport", "ComObj", "ComServ", "PrCmDMImpl", "PrPayFrmImpl", "PrInfoFrmImpl", "KrdInfoFrmImpl", "SendFrmİmpl", "PrReport", "AdminParamaterKredit"]);
  const C = [U];
  U.defClass("TProblemCreditMgr", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "panelfilter": {"name": "PanelFilter", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "maingrid": {"name": "MainGrid", "type": "TXDBGrid"}, "filiallukap": {"name": "FilialLukap", "type": "TEvanescence"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "stop1": {"name": "Stop1", "type": "TMenuItem"}, "crabsi1": {"name": "crabsi1", "type": "TMenuItem"}, "infopl": {"name": "InfoPl", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "speedbutton5": {"name": "SpeedButton5", "type": "TSpeedButton"}, "dbmemo1": {"name": "DBMemo1", "type": "TDBMemo"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "editid": {"name": "editID", "type": "TEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "editname": {"name": "editname", "type": "TEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "editnumberofcredit": {"name": "editNUMBEROFCREDIT", "type": "TEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "editboorowerid": {"name": "editBOOROWERID", "type": "TEdit"}, "kredirmlumatlar1": {"name": "Kredirmlumatlar1", "type": "TMenuItem"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "yenil1": {"name": "Yenil1", "type": "TMenuItem"}, "speedbutton6": {"name": "SpeedButton6", "type": "TSpeedButton"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "lookqovluq": {"name": "LookQovluq", "type": "TEvanescence"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "speedbutton7": {"name": "SpeedButton7", "type": "TSpeedButton"}, "speedbutton8": {"name": "SpeedButton8", "type": "TSpeedButton"}, "speedbutton9": {"name": "SpeedButton9", "type": "TSpeedButton"}, "speedbutton10": {"name": "SpeedButton10", "type": "TSpeedButton"}, "speedbutton11": {"name": "SpeedButton11", "type": "TSpeedButton"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "evanescence1": {"name": "Evanescence1", "type": "TEvanescence"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "fevents": {"name": "FEvents", "type": "IProblemCreditMgrEvents"}}, {});
  U.init(async () => {
    U.const("rsErrorQovluq", "Ən azı bir Hərəkət seçilməlidir!");
    U.const("LoadingFailed", true);
    U.const("DataColIndex", 0);
    U.var_("ProblemCreditMgr", null, "TProblemCreditMgr");
  });
  U.method("TProblemCreditMgr", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TProblemCreditMgr", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  await $.inherited(Self, "TProblemCreditMgr", "EventSinkChanged", [L0["eventsink"]], arguments);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TProblemCreditMgr", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TProblemCreditMgr", "Initialize", null, arguments);
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
  U.method("TProblemCreditMgr", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_AlignDisabled", async function Get_AlignDisabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignDisabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_AlignWithMargins", async function Get_AlignWithMargins(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignWithMargins"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_BorderWidth", async function Get_BorderWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Integer", [(await $.v(C, "BorderWidth"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_DockSite", async function Get_DockSite(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DockSite"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_ExplicitHeight", async function Get_ExplicitHeight(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitHeight"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_ExplicitLeft", async function Get_ExplicitLeft(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitLeft"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_ExplicitTop", async function Get_ExplicitTop(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitTop"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_ExplicitWidth", async function Get_ExplicitWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitWidth"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_MouseInClient", async function Get_MouseInClient(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "MouseInClient"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_ParentCustomHint", async function Get_ParentCustomHint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentCustomHint"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_ParentDoubleBuffered", async function Get_ParentDoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentDoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_PopupMode", async function Get_PopupMode(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PopupMode"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_ScreenSnap", async function Get_ScreenSnap(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ScreenSnap"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_SnapBuffer", async function Get_SnapBuffer(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "SnapBuffer"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_UseDockManager", async function Get_UseDockManager(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "UseDockManager"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TProblemCreditMgr", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TProblemCreditMgr", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ProblemCreditMgr", Self);
  await $.set(C, "PrCmDM", (await $.mcall((await $.v(C, "TPrCmDM")), "Create", [Self])));
  {
    const $t1 = (await $.v(C, "PrCmDM"));
    await $.mcall((await $.wv([$t1], "BonsFilterSet", C, false)), "Open", []);
    if ($.truthy($.gt((await $.mv((await $.wv([$t1], "BonsFilterSet", C, false)), "RecordCount")), 0))) {
      { const $t2 = await $.iset((await $.mv((await $.mv((await $.wv([$t1], "PrCmDM", C, false)), "IntCache")), "SQL")), [45], " and p.bonus_user=user"); if ($t2 !== undefined) { await $.mset((await $.mv((await $.wv([$t1], "PrCmDM", C, false)), "IntCache")), "SQL", $t2); } }
      await $.mcall((await $.mv((await $.wv([$t1], "PrCmDM", C, false)), "IntCache")), "open", []);
    } else {
      { const $t3 = await $.iset((await $.mv((await $.mv((await $.wv([$t1], "PrCmDM", C, false)), "IntCache")), "SQL")), [45], ""); if ($t3 !== undefined) { await $.mset((await $.mv((await $.wv([$t1], "PrCmDM", C, false)), "IntCache")), "SQL", $t3); } }
      await $.mcall((await $.mv((await $.wv([$t1], "PrCmDM", C, false)), "IntCache")), "open", []);
    }
  }
  await $.set(C, "PrPayFrm", (await $.mcall((await $.v(C, "TPrPayFrm")), "Create", [Self])));
  await $.set(C, "KrdInfoFrm", (await $.mcall((await $.v(C, "TKrdInfoFrm")), "Create", [Self])));
  await $.set(C, "SendFrm", (await $.mcall((await $.v(C, "TSendFrm")), "Create", [Self])));
  await $.set(C, "FormReport", (await $.mcall((await $.v(C, "TFormReport")), "Create", [Self])));
  await $.set(C, "FormSettings", (await $.mcall((await $.v(C, "TFormSettings")), "Create", [Self])));
  await $.set(C, "PrInfoFrm", (await $.mcall((await $.v(C, "tPrInfoFrm")), "Create", [Self])));
  { const $t4 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t5 = true;
    for (;;) {
      if (!$t5) { L0["i"] = $.succ(L0["i"], 1); }
      $t5 = false;
      if (!($.ord(L0["i"]) <= $.ord($t4))) break;
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
  U.method("TProblemCreditMgr", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "additionalparams": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "ErrorInCheck", [(await $.v(C, "LookQovluq")), (await $.v(C, "rsErrorQovluq"))]))))) {
    return L0.result;
  }
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "LookQovluq")), "GetCheckedKeyList")), "Count")), (await $.mv((await $.mv((await $.v(C, "LookQovluq")), "Items")), "Count")))))) {
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " AND p.Qovid in("), (await $.mv((await $.mv((await $.v(C, "LookQovluq")), "GetCheckedKeyList")), "CommaText"))), ")"), "\r\n");
  }
  await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "IntCache")), "Close", []);
  { const $t6 = await $.iset((await $.mv((await $.mv((await $.v(C, "PrCmDM")), "IntCache")), "SQL")), [42], L0["additionalparams"]); if ($t6 !== undefined) { await $.mset((await $.mv((await $.v(C, "PrCmDM")), "IntCache")), "SQL", $t6); } }
  await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "IntCache")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "additionalparams": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "ErrorInCheck", [(await $.v(C, "FilialLukap")), (await $.v(C, "rsErrorQovluq"))]))))) {
    return L0.result;
  }
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "FilialLukap")), "GetCheckedKeyList")), "Count")), (await $.mv((await $.mv((await $.v(C, "FilialLukap")), "Items")), "Count")))))) {
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " AND p.branchid in("), (await $.mv((await $.mv((await $.v(C, "FilialLukap")), "GetCheckedKeyList")), "CommaText"))), ")"), "\r\n");
  }
  await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "IntCache")), "Close", []);
  { const $t7 = await $.iset((await $.mv((await $.mv((await $.v(C, "PrCmDM")), "IntCache")), "SQL")), [43], L0["additionalparams"]); if ($t7 !== undefined) { await $.mset((await $.mv((await $.v(C, "PrCmDM")), "IntCache")), "SQL", $t7); } }
  await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "IntCache")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "additionalparams": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "ErrorInCheck", [(await $.v(C, "Evanescence1")), (await $.v(C, "rsErrorQovluq"))]))))) {
    return L0.result;
  }
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "Evanescence1")), "GetCheckedKeyList")), "Count")), (await $.mv((await $.mv((await $.v(C, "Evanescence1")), "Items")), "Count")))))) {
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " AND p.BONUS_USER in(select name from user$ where  id in   ("), (await $.mv((await $.mv((await $.v(C, "Evanescence1")), "GetCheckedKeyList")), "CommaText"))), "))"), "\r\n");
  }
  await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "IntCache")), "Close", []);
  { const $t8 = await $.iset((await $.mv((await $.mv((await $.v(C, "PrCmDM")), "IntCache")), "SQL")), [44], L0["additionalparams"]); if ($t8 !== undefined) { await $.mset((await $.mv((await $.v(C, "PrCmDM")), "IntCache")), "SQL", $t8); } }
  await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "IntCache")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "crabsi1Click", async function crabsi1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "OracleDataSet4")), "insert", []);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "OracleDataSet4")), "FieldByName", ["creditid"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "IntCache")), "FieldByName", ["id"])), "AsInteger")));
  await $.mcall((await $.v(C, "PrInfoFrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "editIDExit", async function editIDExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "editIDKeyPress", async function editIDKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "ActnSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TProblemCreditMgr", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TProblemCreditMgr", "Kredirmlumatlar1Click", async function Kredirmlumatlar1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.v(C, "PrCmDM"));
    if ($.truthy((await $.mv((await $.wv([$t9], "Schedule", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t9], "Schedule", C, false)), "close", []);
    }
    await $.stmt((await $.mcall((await $.wv([$t9], "Schedule", C, false)), "SetVariable", ["CrdID", (await $.mv((await $.mcall((await $.wv([$t9], "IntCache", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t9], "Schedule", C, false)), "open", []);
    if ($.truthy((await $.mv((await $.wv([$t9], "Payments", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t9], "Payments", C, false)), "close", []);
    }
    await $.stmt((await $.mcall((await $.wv([$t9], "Payments", C, false)), "SetVariable", ["CrdID", (await $.mv((await $.mcall((await $.wv([$t9], "IntCache", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t9], "Payments", C, false)), "open", []);
    if ($.truthy((await $.mv((await $.wv([$t9], "ZaminDSet", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t9], "ZaminDSet", C, false)), "close", []);
    }
    await $.stmt((await $.mcall((await $.wv([$t9], "ZaminDSet", C, false)), "SetVariable", ["CrdID", (await $.mv((await $.mcall((await $.wv([$t9], "IntCache", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t9], "ZaminDSet", C, false)), "open", []);
    if ($.truthy((await $.mv((await $.wv([$t9], "GirovDSet", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t9], "GirovDSet", C, false)), "close", []);
    }
    await $.stmt((await $.mcall((await $.wv([$t9], "GirovDSet", C, false)), "SetVariable", ["CrdID", (await $.mv((await $.mcall((await $.wv([$t9], "IntCache", C, false)), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t9], "GirovDSet", C, false)), "open", []);
  }
  await $.mcall((await $.v(C, "KrdInfoFrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "MouseEnterEvent", async function MouseEnterEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseEnter", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "MouseLeaveEvent", async function MouseLeaveEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseLeave", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "Set_AlignWithMargins", async function Set_AlignWithMargins(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AlignWithMargins", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TProblemCreditMgr", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TProblemCreditMgr", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TProblemCreditMgr", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TProblemCreditMgr", "Set_BorderWidth", async function Set_BorderWidth(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "BorderWidth", (await $.call(C, "TBorderWidth", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TProblemCreditMgr", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TProblemCreditMgr", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TProblemCreditMgr", "Set_DockSite", async function Set_DockSite(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DockSite", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TProblemCreditMgr", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TProblemCreditMgr", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TProblemCreditMgr", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TProblemCreditMgr", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TProblemCreditMgr", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "string", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TProblemCreditMgr", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TProblemCreditMgr", "Set_ParentCustomHint", async function Set_ParentCustomHint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentCustomHint", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TProblemCreditMgr", "Set_ParentDoubleBuffered", async function Set_ParentDoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentDoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TProblemCreditMgr", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TProblemCreditMgr", "Set_PopupMode", async function Set_PopupMode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PopupMode", (await $.call(C, "TPopupMode", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPopupMode"]});
  U.method("TProblemCreditMgr", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TProblemCreditMgr", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TProblemCreditMgr", "Set_ScreenSnap", async function Set_ScreenSnap(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ScreenSnap", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TProblemCreditMgr", "Set_SnapBuffer", async function Set_SnapBuffer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "SnapBuffer", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TProblemCreditMgr", "Set_UseDockManager", async function Set_UseDockManager(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "UseDockManager", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TProblemCreditMgr", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TProblemCreditMgr", "SpeedButton10Click", async function SpeedButton10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fn": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["fn"] = (await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "PrPackage")), "CallIntegerFunction", ["CountCreditUser", []]));
  if ($.truthy($.eq(L0["fn"], 0))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "PrPackage")), "CallProcedure", ["DivideDaysCredit", []])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "PrPackage")), "CallProcedure", ["DivideDaysCreditPart", []])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "SpeedButton11Click", async function SpeedButton11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "OPSbAca")), "CallProcedure", ["CheckAdvancedObjectAccess", ["CM_SHOW"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
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
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
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
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "ActnSearchExecute", async function ActnSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t10 = L0["sender"];
    await $.wset([$t10], "SearchField", (await $.wcall([$t10], "copy", [(await $.wv([$t10], "Name", C, false)), 5, (await $.wcall([$t10], "length", [(await $.wv([$t10], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    await $.mcall((await $.mv((await $.wv([$t10], "MainGrid", C, false)), "SelectedRows")), "Clear", []);
    {
      const $t11 = (await $.wcall([$t10], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t10], "MainGrid", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t10, $t11], "SearchRecord", [(await $.wv([$t10, $t11], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t10, $t11], "Text", C, false)), $.add((await $.wv([$t10, $t11], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t10, $t11], "srFromCurrent", C, false)), (await $.wv([$t10, $t11], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t10, $t11], "MessageDlg", [$.add($.add("Axtarış sona çatıb.", "\r"), "əvvəldəb başlamaq istəyirsinizmi?"), (await $.wv([$t10, $t11], "mtInformation", C, false)), [(await $.wv([$t10, $t11], "mbNo", C, false)), (await $.wv([$t10, $t11], "mbYes", C, false))], 0], C)), (await $.wv([$t10, $t11], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t10, $t11], "SearchRecord", [(await $.wv([$t10, $t11], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t10, $t11], "Text", C, false)), $.add((await $.wv([$t10, $t11], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t10, $t11], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t10, $t11], "MessageDlg", ["Yazı Tapılmadı!", (await $.wv([$t10, $t11], "mtInformation", C, false)), [(await $.wv([$t10, $t11], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "OPSbAca")), "CallProcedure", ["CheckAdvancedObjectAccess", ["PROBLEMPAYMENTS"]])));
  await $.mcall((await $.v(C, "PrPayFrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "SpeedButton5Click", async function SpeedButton5Click(Self, p0) {
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
  U.method("TProblemCreditMgr", "SpeedButton6Click", async function SpeedButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t12], "Connect", [], C));
    await $.stmt((await $.wcall([$t12], "ExportDataset", [(await $.mv((await $.wv([$t12], "PrCmDM", C, false)), "IntCache")), "Problemli", (await $.wv([$t12], "True", C, false))], C)));
    await $.stmt($.wcall([$t12], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "SpeedButton7Click", async function SpeedButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "IntCache")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "SpeedButton8Click", async function SpeedButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "FormReport")), "DateTimePicker1")), "DateTime", (await $.call(C, "trunc", [(await $.v(C, "Date"))])));
  await $.mset((await $.mv((await $.v(C, "FormReport")), "DateTimePicker2")), "DateTime", (await $.call(C, "trunc", [(await $.v(C, "Date"))])));
  await $.mcall((await $.v(C, "FormReport")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "SpeedButton9Click", async function SpeedButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "PrCmDM")), "AdminGroups")), "Active", true);
  await $.mset((await $.mv((await $.v(C, "PrCmDM")), "AdminIn")), "Active", true);
  {
    const $t13 = (await $.mv((await $.v(C, "PrCmDM")), "CourtAdmin"));
    await $.stmt($.wcall([$t13], "Open", [], C));
    if ($.truthy((await $.or_(($.eq((await $.wcall([$t13], "UpperCase", [(await $.mv((await $.wv([$t13], "Session", C, false)), "LogonUsername"))], C)), "SMART")), async () => ($.eq((await $.wcall([$t13], "UpperCase", [(await $.mv((await $.wv([$t13], "Session", C, false)), "LogonUsername"))], C)), "TERLAN")))))) {
      await $.mcall((await $.wv([$t13], "FormSettings", C, false)), "ShowModal", []);
    } else {
      await $.stmt((await $.mcall((await $.wv([$t13], "Application", C, false)), "MessageBox", ["Giriş Qadağandır!", "Administratora müraciət edin!!!", 0])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "Stop1Click", async function Stop1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "SendFrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "Yenil1Click", async function Yenil1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "IntCache")), "FieldByName", ["id"])), "AsInteger"));
  await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "IntCache")), "Refresh", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "IntCache")), "Locate", ["id", L0["id"], []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TProblemCreditMgr", "MainGridTitleClick", async function MainGridTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  {
    const $t14 = (await $.v(C, "PrCmDM"));
    const $t15 = (await $.wv([$t14], "IntCache", C, false));
    await $.stmt($.wcall([$t14, $t15], "Close", [], C));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t14, $t15], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "Title")), "MarkerIndex")), 2))) {
      await $.stmt((await $.wcall([$t14, $t15], "SetVariable", ["title", $.add($.add((await $.mv((await $.wv([$t14, $t15], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), " "), "ASC")], C)));
    } else {
      await $.stmt((await $.wcall([$t14, $t15], "SetVariable", ["title", $.add($.add((await $.mv((await $.wv([$t14, $t15], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), " "), "DESC")], C)));
    }
    await $.stmt($.wcall([$t14, $t15], "open", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  return U;
}
