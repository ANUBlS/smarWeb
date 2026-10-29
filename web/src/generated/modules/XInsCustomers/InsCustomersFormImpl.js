// Generated from InsCustomersFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InsCustomersFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "InsCustomers_TLB", "StdVcl", "Grids", "DBGrids", "ComCtrls", "StdCtrls", "Buttons", "Menus", "ImgList", "ActnList", "ToolWin", "Oracle", "OracleData", "PlgModalContainer", "DB", "ExtCtrls", "ComObj", "ComServ", "InsDataModule", "InsCustomersProperties", "AccountPropertiesImpl", "InsNewInsurance", "InsAccSettings", "InsAgents", "InsProfit", "InsPaymentPlan", "InsSettings", "AccInterval", "InsCustFind", "InsContFind"]);
  const C = [U];
  U.enumType("toperationmode", 3);
  U.const("omInsert", 0);
  U.const("omEdit", 1);
  U.const("omDelete", 2);
  U.defClass("TInsCustomersForm", "TActiveForm", {"actionlist1": {"name": "ActionList1", "type": "TActionList"}, "gbcustomers": {"name": "gbCustomers", "type": "TGroupBox"}, "gbaccounts": {"name": "gbAccounts", "type": "TGroupBox"}, "dbgridcust": {"name": "DBGridCust", "type": "TDBGrid"}, "dbgridacc": {"name": "DBGridAcc", "type": "TDBGrid"}, "anewcust": {"name": "aNewCust", "type": "TAction"}, "aeditcust": {"name": "aEditCust", "type": "TAction"}, "adelcust": {"name": "aDelCust", "type": "TAction"}, "arefcust": {"name": "aRefCust", "type": "TAction"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "anewacc": {"name": "aNewAcc", "type": "TAction"}, "aeditacc": {"name": "aEditAcc", "type": "TAction"}, "adelacc": {"name": "aDelAcc", "type": "TAction"}, "arefacc": {"name": "aRefAcc", "type": "TAction"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "pmrefresh": {"name": "pmRefresh", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "arefreshall": {"name": "aRefreshAll", "type": "TAction"}, "gbcontracts": {"name": "gbContracts", "type": "TGroupBox"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "toolbar3": {"name": "ToolBar3", "type": "TToolBar"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "dbgridcontracts": {"name": "DBGridContracts", "type": "TDBGrid"}, "anewins": {"name": "aNewIns", "type": "TAction"}, "aeditins": {"name": "aEditIns", "type": "TAction"}, "adelins": {"name": "aDelIns", "type": "TAction"}, "arefins": {"name": "aRefIns", "type": "TAction"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "pmccallactivex": {"name": "pmcCallActiveX", "type": "TPlgModalContainer"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "menuitem1": {"name": "MenuItem1", "type": "TMenuItem"}, "menuitem2": {"name": "MenuItem2", "type": "TMenuItem"}, "menuitem3": {"name": "MenuItem3", "type": "TMenuItem"}, "menuitem4": {"name": "MenuItem4", "type": "TMenuItem"}, "menuitem5": {"name": "MenuItem5", "type": "TMenuItem"}, "menuitem6": {"name": "MenuItem6", "type": "TMenuItem"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "asettings": {"name": "aSettings", "type": "TAction"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "acontractaccs": {"name": "aContractAccs", "type": "TAction"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "apayplan": {"name": "aPayPlan", "type": "TAction"}, "toolbutton18": {"name": "ToolButton18", "type": "TToolButton"}, "afreeuser": {"name": "aFreeUser", "type": "TAction"}, "toolbutton19": {"name": "ToolButton19", "type": "TToolButton"}, "toolbutton20": {"name": "ToolButton20", "type": "TToolButton"}, "aagent": {"name": "aAgent", "type": "TAction"}, "abeneficiary": {"name": "aBeneficiary", "type": "TAction"}, "toolbutton21": {"name": "ToolButton21", "type": "TToolButton"}, "apayments": {"name": "aPayments", "type": "TAction"}, "accountpopup": {"name": "AccountPopup", "type": "TPopupMenu"}, "accountcontainer": {"name": "AccountContainer", "type": "TPlgModalContainer"}, "an1": {"name": "an1", "type": "TMenuItem"}, "an2": {"name": "an2", "type": "TMenuItem"}, "statecontainer": {"name": "StateContainer", "type": "TPlgModalContainer"}, "splitter1": {"name": "Splitter1", "type": "TSplitter"}, "splitter2": {"name": "Splitter2", "type": "TSplitter"}, "toolbutton22": {"name": "ToolButton22", "type": "TToolButton"}, "afind": {"name": "aFind", "type": "TAction"}, "tbfullscreen": {"name": "tbFullScreen", "type": "TToolButton"}, "afullform": {"name": "aFullForm", "type": "TAction"}, "imagelist2": {"name": "ImageList2", "type": "TImageList"}, "toolbutton23": {"name": "ToolButton23", "type": "TToolButton"}, "acommit": {"name": "aCommit", "type": "TAction"}, "acontfind": {"name": "aContFind", "type": "TAction"}, "toolbutton24": {"name": "ToolButton24", "type": "TToolButton"}, "adeleteoperations": {"name": "aDeleteOperations", "type": "TAction"}, "fevents": {"name": "FEvents", "type": "IInsCustomersFormEvents"}, "operationmode": {"name": "OperationMode", "type": "TOperationMode"}}, {});
  U.init(async () => {
    try { U.const("tguiderror", await $.ref_(C, "Exception")); } catch (e) { /* unresolved alias */ }
    U.var_("InsCustomersForm", null, "TInsCustomersForm");
  });
  U.method("TInsCustomersForm", "MouseWheelHandler", async function MouseWheelHandler(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "mwdataset": null, "mwdbgrid": null};
  if ($.truthy($.not(($.is_((await $.mv((await $.v(C, "InsCustomersForm")), "ActiveControl")), "TDBGrid"))))) {
    return L0.result;
  }
  {
    const $t1 = (await $.v(C, "InsCustomersForm"));
    const $t2 = (await $.wv([$t1], "InsDataMod", C, false));
    { const $t3 = (await $.mv(((await $.wv([$t1, $t2], "ActiveControl", C, false))), "tag"));
      if ($.eq($t3, 0)) {
        await $.wset([$t1, $t2], "MWDataSet", (await $.wv([$t1, $t2], "ODSInsCustomers", C, true)), { get: async () => L0["mwdataset"], set: async (v) => { L0["mwdataset"] = v; }, local: true });
        await $.wset([$t1, $t2], "MWDBGrid", (await $.wv([$t1, $t2], "DBGridCust", C, true)), { get: async () => L0["mwdbgrid"], set: async (v) => { L0["mwdbgrid"] = v; }, local: true });
      }
      else if ($.eq($t3, 1)) {
        await $.wset([$t1, $t2], "MWDataSet", (await $.wv([$t1, $t2], "ODSContracts", C, true)), { get: async () => L0["mwdataset"], set: async (v) => { L0["mwdataset"] = v; }, local: true });
        await $.wset([$t1, $t2], "MWDBGrid", (await $.wv([$t1, $t2], "DBGridContracts", C, true)), { get: async () => L0["mwdbgrid"], set: async (v) => { L0["mwdbgrid"] = v; }, local: true });
      }
      else if ($.eq($t3, 2)) {
        await $.wset([$t1, $t2], "MWDataSet", (await $.wv([$t1, $t2], "ODSAccount", C, true)), { get: async () => L0["mwdataset"], set: async (v) => { L0["mwdataset"] = v; }, local: true });
        await $.wset([$t1, $t2], "MWDBGrid", (await $.wv([$t1, $t2], "DBGridAcc", C, true)), { get: async () => L0["mwdbgrid"], set: async (v) => { L0["mwdbgrid"] = v; }, local: true });
      }
    }
  }
  await $.mcall((await $.mv(L0["mwdbgrid"], "SelectedRows")), "Clear", []);
  {
    const $t4 = (await $.call(C, "TCMMouseWheel", [(await L0["message"].get())]));
    const $t5 = (await $.wv([$t4], "MWDataSet", { get: async () => L0["mwdataset"], set: async (v) => { L0["mwdataset"] = v; }, local: true }, false));
    if ($.truthy($.lt((await $.wv([$t4, $t5], "WheelDelta", C, false)), 0))) {
      await $.stmt($.wcall([$t4, $t5], "Next", [], C));
    } else {
      await $.stmt($.wcall([$t4, $t5], "Prior", [], C));
    }
  }
  await $.mcall(L0["mwdbgrid"], "Repaint", []);
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TInsCustomersForm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TInsCustomersForm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TInsCustomersForm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TInsCustomersForm", "Initialize", null, arguments);
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
  U.method("TInsCustomersForm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsCustomersForm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsCustomersForm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsCustomersForm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsCustomersForm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsCustomersForm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsCustomersForm", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsCustomersForm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsCustomersForm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsCustomersForm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsCustomersForm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsCustomersForm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsCustomersForm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsCustomersForm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsCustomersForm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsCustomersForm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsCustomersForm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsCustomersForm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsCustomersForm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TInsCustomersForm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TInsCustomersForm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TInsCustomersForm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TInsCustomersForm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TInsCustomersForm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TInsCustomersForm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TInsCustomersForm", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TInsCustomersForm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TInsCustomersForm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TInsCustomersForm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TInsCustomersForm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TInsCustomersForm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TInsCustomersForm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TInsCustomersForm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TInsCustomersForm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TInsCustomersForm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TInsCustomersForm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TInsCustomersForm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "InsCustomersForm", Self);
  await $.set(C, "InsDataMod", (await $.mcall((await $.v(C, "TInsDataMod")), "Create", [Self])));
  await $.set(C, "FormInterval", (await $.mcall((await $.v(C, "TFormInterval")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "SaveCustData", async function SaveCustData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t6 = (await $.mv((await $.v(C, "InsDataMod")), "ODSInsCustomers"));
    try {
      await $.stmt($.wcall([$t6], "Post", [], C));
      await $.stmt($.wcall([$t6], "RefreshRecord", [], C));
    } catch ($t7) {
      $.rethrowControl($t7);
      $.handled($t7);
      await $.stmt((await $.wcall([$t6], "aEditCustExecute", [null], C)));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TInsCustomersForm", "ShowCustForm", async function ShowCustForm(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0, "fmcustprop": null};
  L0["fmcustprop"] = (await $.mcall((await $.v(C, "TfmCustomersProperties")), "Create", [Self]));
  try {
    L0["result"] = (await $.mv(L0["fmcustprop"], "ShowModal"));
  } finally {
    await $.mcall(L0["fmcustprop"], "Free", []);
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsCustomersForm", "ShowAccForm", async function ShowAccForm(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0, "fmaccprop": null};
  L0["fmaccprop"] = (await $.mcall((await $.v(C, "TAccountPropertiesForm")), "Create", [Self]));
  {
    const $t8 = (await $.v(C, "InsDataMod"));
    const $t9 = (await $.wv([$t8], "Tenostat", C, false));
    await $.stmt((await $.wcall([$t8, $t9], "SetVariable", ["ACC_ID", (await $.mv((await $.wv([$t8, $t9], "ODSAccountID", C, false)), "AsInteger"))], C)));
    await $.stmt($.wcall([$t8, $t9], "Refresh", [], C));
  }
  try {
    L0["result"] = (await $.mv(L0["fmaccprop"], "ShowModal"));
  } finally {
    await $.mcall(L0["fmaccprop"], "Free", []);
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TInsCustomersForm", "aNewCustExecute", async function aNewCustExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.mv((await $.v(C, "InsDataMod")), "ODSInsCustomers"));
    await $.stmt((await $.wcall([$t10], "Insert", [], C)));
    if ($.truthy($.eq((await $.wcall([$t10], "ShowCustForm", [], C)), (await $.wv([$t10], "mrOk", C, false))))) {
      await $.stmt((await $.wcall([$t10], "SaveCustData", [], C)));
    } else {
      await $.stmt($.wcall([$t10], "Cancel", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "aEditCustExecute", async function aEditCustExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.v(C, "InsDataMod"));
    const $t12 = (await $.wv([$t11], "ODSInsCustomers", C, false));
    await $.mcall((await $.wv([$t11, $t12], "ODSCustTypes", C, false)), "Open", []);
    await $.stmt((await $.wcall([$t11, $t12], "Edit", [], C)));
    if ($.truthy($.eq((await $.wcall([$t11, $t12], "ShowCustForm", [], C)), (await $.wv([$t11, $t12], "mrOk", C, false))))) {
      await $.stmt((await $.wcall([$t11, $t12], "SaveCustData", [], C)));
    } else {
      await $.stmt($.wcall([$t11, $t12], "Cancel", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "aDelCustExecute", async function aDelCustExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş müştəri ləğv olunacaq!", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    try {
      {
        const $t14 = (await $.v(C, "InsDataMod"));
        const $t15 = (await $.wv([$t14], "ODSInsCustomers", C, false));
        if ($.truthy((await $.mcall((await $.wv([$t14, $t15], "OPCOMMON", C, false)), "callbooleanfunction", ["del_customers", [(await $.mv((await $.wv([$t14, $t15], "ODSInsCustomersID", C, false)), "Value"))]])))) {
          await $.stmt($.wcall([$t14, $t15], "Refresh", [], C));
        }
      }
    } catch ($t13) {
      $.rethrowControl($t13);
      if ($.excIs($t13, "EoracleError")) {
        L0["e"] = $.exc($t13);
        { const $t16 = (await $.mv(L0["e"], "ErrorCode"));
          if ($.eq($t16, 20002)) {
            await $.stmt((await $.call(C, "ShowMessage", ["Əvvəlcə açıq sığortaları bağlayın!"])));
          }
          else if ($.eq($t16, 20300)) {
            await $.stmt((await $.call(C, "ShowMessage", ["Bu əməliyyat üçün sizin hüququnuz çatmır!"])));
          }
          else if ($.eq($t16, 20280)) {
            await $.stmt((await $.call(C, "ShowMessage", ["Əlavə əməliyyatı üçün sizin hüququnuz çatmır!"])));
          }
          else if ($.eq($t16, 20281)) {
            await $.stmt((await $.call(C, "ShowMessage", ["Ləğv etmə əməliyyatı üçün sizin hüququnuz çatmır!"])));
          }
          else if ($.eq($t16, 20282)) {
            await $.stmt((await $.call(C, "ShowMessage", ["Bu əməliyyat üçün sizin hüququnuz çatmır!"])));
          }
        }
      }
      else { throw $t13; }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "aRefCustExecute", async function aRefCustExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.mv((await $.v(C, "InsDataMod")), "ODSInsCustomers"));
    await $.stmt($.wcall([$t17], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "DBGridCustDblClick", async function DBGridCustDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "aEditCustExecute", [null])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "aNewAccExecute", async function aNewAccExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t18 = (await $.v(C, "InsDataMod"));
    await $.stmt((await $.mcall((await $.wv([$t18], "ODSAccount", C, false)), "Insert", [])));
    await $.mset((await $.wv([$t18], "ODSAccountNAME", C, false)), "Value", $.add($.add((await $.mv((await $.wv([$t18], "ODSInsCustomersSURNAME", C, false)), "value")), " "), (await $.mv((await $.wv([$t18], "ODSInsCustomersNAME", C, false)), "Value"))));
    await $.mset((await $.wv([$t18], "ODSAccountKLI_ID", C, false)), "AsInteger", (await $.mv((await $.wv([$t18], "ODSCustomersID", C, false)), "AsInteger")));
    if ($.truthy($.not(($.eq((await $.wcall([$t18], "ShowAccForm", [], C)), (await $.wv([$t18], "mrOk", C, false))))))) {
      await $.mcall((await $.wv([$t18], "ODSAccount", C, false)), "Cancel", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "aEditAccExecute", async function aEditAccExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.mv((await $.v(C, "InsDataMod")), "ODSAccount"));
    await $.stmt((await $.wcall([$t19], "Edit", [], C)));
    if ($.truthy($.not(($.eq((await $.wcall([$t19], "ShowAccForm", [], C)), (await $.wv([$t19], "mrOk", C, false))))))) {
      await $.stmt($.wcall([$t19], "Cancel", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "DBGridAccDblClick", async function DBGridAccDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "aEditAccExecute", [null])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "aRefAccExecute", async function aRefAccExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t20 = (await $.mv((await $.v(C, "InsDataMod")), "ODSAccount"));
    await $.stmt($.wcall([$t20], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "aDelAccExecute", async function aDelAccExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t21 = (await $.v(C, "InsDataMod"));
    const $t22 = (await $.wv([$t21], "ODSAccount", C, false));
    if ($.truthy($.eq((await $.wcall([$t21, $t22], "MessageDlg", ["Secilmish hesab baglanilsin?", (await $.wv([$t21, $t22], "mtConfirmation", C, false)), [(await $.wv([$t21, $t22], "mbYes", C, false)), (await $.wv([$t21, $t22], "mbNo", C, false)), (await $.wv([$t21, $t22], "mbCancel", C, false))], 0], C)), (await $.wv([$t21, $t22], "mrYes", C, false))))) {
      await $.stmt((await $.mcall((await $.wv([$t21, $t22], "OPCOMMON", C, false)), "CallProcedure", ["close_acc", [(await $.mv((await $.wcall([$t21, $t22], "FieldByName", ["id"], C)), "asFloat"))]])));
    } else {
      return L0.result;
    }
    await $.stmt($.wcall([$t21, $t22], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "aRefreshAllExecute", async function aRefreshAllExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t23 = (await $.v(C, "InsDataMod"));
    await $.stmt($.wcall([$t23], "RefreshAll", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "CallChangeForm", async function CallChangeForm(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"params": $.copyArg(p0), result: undefined, "callerguid": null};
  await $.fixArgs(L0, ["params"]);
  {
    const $t24 = (await $.v(C, "InsDataMod"));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t24], "ODSContracts", C, false)), "FieldByName", ["CHANGEGUID"])), "AsString")), ""))) {
      throw $.raise((await $.mcall((await $.wv([$t24], "TGuidError", C, false)), "Create", ["Guid is empty"])));
    }
    await $.wset([$t24], "CallerGuid", (await $.wcall([$t24], "StringToGuid", [(await $.mv((await $.mcall((await $.wv([$t24], "ODSContracts", C, false)), "FieldByName", ["CHANGEGUID"])), "AsString"))], C)), { get: async () => L0["callerguid"], set: async (v) => { L0["callerguid"] = v; }, local: true });
    if ($.truthy($.eq((await $.mcall((await $.wv([$t24], "pmcCallActiveX", C, false)), "ShowModal", [(await $.wv([$t24], "CallerGuid", { get: async () => L0["callerguid"], set: async (v) => { L0["callerguid"] = v; }, local: true }, false)), (await $.wv([$t24], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false))])), (await $.wv([$t24], "mrOk", C, false))))) {
      await $.stmt((await $.wcall([$t24], "RefreshContractRec", [], C)));
    }
  }
  return L0.result;
}, {"params": ["Params"], "kind": "procedure", "ptypes": ["TStringList"]});
  U.method("TInsCustomersForm", "aNewInsExecute", async function aNewInsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "fmNewInsurance", (await $.mcall((await $.v(C, "TfmNewInsurance")), "Create", [Self])));
  {
    const $t25 = (await $.v(C, "InsDataMod"));
    try {
      if ($.truthy($.eq((await $.mv((await $.wv([$t25], "fmNewInsurance", C, false)), "ShowModal")), (await $.wv([$t25], "mrOk", C, false))))) {
        await $.stmt($.wcall([$t25], "CloseOpenContracts", [], C));
      }
    } finally {
      await $.mcall((await $.wv([$t25], "fmNewInsurance", C, false)), "Free", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "aRefInsExecute", async function aRefInsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t26 = (await $.v(C, "InsDataMod"));
    await $.stmt((await $.wcall([$t26], "RefreshContracts", [], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "aEditInsExecute", async function aEditInsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "params": null};
  await $.fixArgs(L0, ["sender"]);
  L0["params"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  {
    const $t27 = (await $.mv((await $.v(C, "InsDataMod")), "ODSContracts"));
    const $t28 = (await $.wv([$t27], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false));
    try {
      { const $t29 = await $.iset((await $.wv([$t27, $t28], "Values", C, false)), ["Mod"], "Edit"); if ($t29 !== undefined) { await $.wset([$t27, $t28], "Values", $t29, C); } }
      { const $t30 = await $.iset((await $.wv([$t27, $t28], "Values", C, false)), ["SID"], (await $.wcall([$t27, $t28], "FloatToStr", [(await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["ID"], C)), "asFloat"))], C))); if ($t30 !== undefined) { await $.wset([$t27, $t28], "Values", $t30, C); } }
      { const $t31 = await $.iset((await $.wv([$t27, $t28], "Values", C, false)), ["KLI_ID"], (await $.wcall([$t27, $t28], "FloatToStr", [(await $.mv((await $.wcall([$t27, $t28], "FieldByName", ["KLI_ID"], C)), "asFloat"))], C))); if ($t31 !== undefined) { await $.wset([$t27, $t28], "Values", $t31, C); } }
      await $.stmt((await $.wcall([$t27, $t28], "CallChangeForm", [(await $.wv([$t27, $t28], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false))], C)));
    } finally {
      await $.mcall((await $.wv([$t27, $t28], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false)), "Free", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "DBGridContractsDblClick", async function DBGridContractsDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "aEditInsExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "aDelInsExecute", async function aDelInsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Secilmish sigorta lagv olunacaq!", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    try {
      {
        const $t33 = (await $.v(C, "InsDataMod"));
        if ($.truthy((await $.mcall((await $.wv([$t33], "OPCOMMON", C, false)), "callbooleanfunction", ["del_ins", [(await $.mv((await $.wv([$t33], "ODSContractsID", C, false)), "Value")), (await $.mv((await $.wv([$t33], "ODSContractsType_Id", C, false)), "value"))]])))) {
          await $.stmt((await $.wcall([$t33], "RefreshContracts", [], C)));
        }
      }
    } catch ($t32) {
      $.rethrowControl($t32);
      if ($.excIs($t32, "EOracleError")) {
        L0["e"] = $.exc($t32);
        { const $t34 = (await $.mv(L0["e"], "ErrorCode"));
          if ($.eq($t34, 20002)) {
            if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş hesab ləğv olunacaq!", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "InsDataMod")), "OPCOMMON")), "CallProcedure", ["close_acc", [(await $.mv((await $.mv((await $.v(C, "InsDataMod")), "ODSAccountID")), "value"))]])));
            }
          }
          else if ($.eq($t34, 20001)) {
            await $.stmt((await $.call(C, "ShowMessage", ["Asılı hesablarda qalıq sıfırdan fərqlidir!"])));
          }
        }
      }
      else { throw $t32; }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "an1DrawItem", async function an1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t35 = L0["acanvas"];
    const $t36 = (await $.wv([$t35], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t37 = (await $.wv([$t35, $t36], "Font", C, false));
      await $.wset([$t35, $t36, $t37], "Name", "Azl Sans Serif", C);
      await $.wset([$t35, $t36, $t37], "Charset", (await $.wv([$t35, $t36, $t37], "DEFAULT_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t35, $t36, $t37], "Default", C, false)))) {
        await $.wset([$t35, $t36, $t37], "Style", [(await $.wv([$t35, $t36, $t37], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t35, $t36], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t35, $t36], "Pen", C, false)), "Color", (await $.wv([$t35, $t36], "clBlack", C, false)));
      await $.wset([$t35, $t36], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t35, $t36], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t35, $t36], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t35, $t36], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t35, $t36], "MoveTo", [(await $.mv((await $.wv([$t35, $t36], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t35, $t36], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t35, $t36], "LineTo", [(await $.mv((await $.wv([$t35, $t36], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t35, $t36], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t35, $t36], "inc", [$.ref(async () => (await $.wv([$t35, $t36], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t38) => { await $.wset([$t35, $t36], "LineBottom", $t38, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t35, $t36], "Pen", C, false)), "Color", (await $.wv([$t35, $t36], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t35, $t36], "MoveTo", [(await $.mv((await $.wv([$t35, $t36], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t35, $t36], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t35, $t36], "LineTo", [(await $.mv((await $.wv([$t35, $t36], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t35, $t36], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t35, $t36], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t35, $t36], "Brush", C, false)), "Color", (await $.wv([$t35, $t36], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t35, $t36], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t35, $t36], "Font", C, false)), "Color", (await $.wv([$t35, $t36], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t35, $t36], "Font", C, false)), "Color", (await $.wv([$t35, $t36], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t35, $t36], "Brush", C, false)), "Color", (await $.wv([$t35, $t36], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t35, $t36], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t35, $t36], "Font", C, false)), "Color", (await $.wv([$t35, $t36], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t35, $t36], "Font", C, false)), "Color", (await $.wv([$t35, $t36], "clGrayText", C, false)));
        }
      }
      await $.wset([$t35, $t36], "Bar", (await $.wv([$t35, $t36], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t35, $t36], "FillRect", [(await $.wv([$t35, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t35, $t36], "TextOut", [$.add((await $.mv((await $.wv([$t35, $t36], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 20), $.add((await $.mv((await $.wv([$t35, $t36], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t35, $t36], "Caption", C, false))], C)));
    }
    await $.wset([$t35, $t36], "SText", (await $.wcall([$t35, $t36], "ShortCutToText", [(await $.wv([$t35, $t36], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t35, $t36], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t35, $t36], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t35, $t36], "TextWidth", [(await $.wv([$t35, $t36], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t35, $t36], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t35, $t36], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t35, $t36], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t39 = (await $.wv([$t35, $t36], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t35, $t36, $t39], "Assigned", [(await $.wv([$t35, $t36, $t39], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t35, $t36, $t39], "Checked", C, false)))) {
            await $.mset((await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t35, $t36, $t39], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t35, $t36, $t39], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t35, $t36, $t39], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t35, $t36, $t39], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t35, $t36, $t39], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t35, $t36, $t39], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t40) => { await $.mset((await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t40); }), 2], C)));
            await $.stmt((await $.wcall([$t35, $t36, $t39], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t41) => { await $.mset((await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t41); }), 2], C)));
            await $.stmt((await $.wcall([$t35, $t36, $t39], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t42) => { await $.mset((await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t42); }), 2], C)));
            await $.stmt((await $.wcall([$t35, $t36, $t39], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t43) => { await $.mset((await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t43); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t35, $t36, $t39], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t35, $t36, $t39], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t35, $t36, $t39], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t35, $t36, $t39], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t44) => { await $.mset((await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t44); }), 1], C)));
            await $.stmt((await $.wcall([$t35, $t36, $t39], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t45) => { await $.mset((await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t45); }), 1], C)));
            await $.stmt((await $.wcall([$t35, $t36, $t39], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t46) => { await $.mset((await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t46); }), 1], C)));
            await $.stmt((await $.wcall([$t35, $t36, $t39], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t47) => { await $.mset((await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t47); }), 1], C)));
            if ($.truthy((await $.wv([$t35, $t36, $t39], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t35, $t36, $t39], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t35, $t36, $t39], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t35, $t36, $t39], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t35, $t36, $t39], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t35, $t36, $t39], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t35, $t36, $t39], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t35, $t36, $t39], "Images", C, false)), "Draw", [(await $.wv([$t35, $t36, $t39], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t35, $t36, $t39], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t35, $t36, $t39], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t35, $t36, $t39], "ImageIndex", C, false)), (await $.wv([$t35, $t36, $t39], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TInsCustomersForm", "aSettingsExecute", async function aSettingsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "fmSettings", (await $.mcall((await $.v(C, "TfmSettings")), "Create", [Self])));
  {
    const $t48 = (await $.v(C, "InsDataMod"));
    const $t49 = (await $.wv([$t48], "fmSettings", C, false));
    try {
      await $.mcall((await $.wv([$t48, $t49], "ODSAcc_types", C, false)), "Open", []);
      await $.mcall((await $.wv([$t48, $t49], "ODSBal_cn", C, false)), "Open", []);
      await $.mcall((await $.wv([$t48, $t49], "ODSInsurances", C, false)), "Open", []);
      await $.mcall((await $.wv([$t48, $t49], "ODSBankm", C, false)), "Open", []);
      await $.mcall((await $.wv([$t48, $t49], "ODSStates", C, false)), "Open", []);
      await $.mcall((await $.wv([$t48, $t49], "ODSTarifStates", C, false)), "Open", []);
      await $.mcall((await $.wv([$t48, $t49], "ODSReleaseDate", C, false)), "Open", []);
      await $.mcall((await $.wv([$t48, $t49], "ODSMonths", C, false)), "Open", []);
      await $.mcall((await $.wv([$t48, $t49], "ODSTariffs", C, false)), "Open", []);
      await $.mcall((await $.wv([$t48, $t49], "ODSFranshiza", C, false)), "Open", []);
      await $.mcall((await $.wv([$t48, $t49], "ODSTariffs", C, false)), "Open", []);
      await $.mcall((await $.wv([$t48, $t49], "ODSPolicyNums", C, false)), "open", []);
      await $.mcall((await $.wv([$t48, $t49], "ODSCustTypes", C, false)), "Open", []);
      await $.mcall((await $.wv([$t48, $t49], "ODSAccList", C, false)), "Open", []);
      await $.stmt($.wcall([$t48, $t49], "ShowModal", [], C));
      await $.mcall((await $.wv([$t48, $t49], "ODSAccList", C, false)), "Close", []);
    } finally {
      await $.stmt($.wcall([$t48, $t49], "Free", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "aContractAccsExecute", async function aContractAccsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "fmAccSettings", (await $.mcall((await $.v(C, "TfmAccSettings")), "Create", [Self])));
  {
    const $t50 = (await $.v(C, "InsDataMod"));
    const $t51 = (await $.wv([$t50], "fmAccSettings", C, false));
    try {
      await $.mcall((await $.wv([$t50, $t51], "ODSContracts", C, false)), "RefreshRecord", []);
      await $.mcall((await $.wv([$t50, $t51], "ODSContracts", C, false)), "Edit", []);
      await $.mcall((await $.wv([$t50, $t51], "ODSLoanAccLists", C, false)), "Open", []);
      await $.mcall((await $.wv([$t50, $t51], "ODSCurrAccList", C, false)), "Open", []);
      {
        const $t52 = (await $.wv([$t50, $t51], "InsDataMod", C, false));
        if ($.truthy($.eq((await $.wv([$t50, $t51, $t52], "ShowModal", C, false)), (await $.wv([$t50, $t51, $t52], "mrOk", C, false))))) {
          await $.mcall((await $.wv([$t50, $t51, $t52], "ODSContracts", C, false)), "RefreshRecord", []);
        }
        await $.mcall((await $.wv([$t50, $t51, $t52], "ODSAccount", C, false)), "refresh", []);
      }
    } finally {
      await $.mcall((await $.wv([$t50, $t51], "ODSLoanAccLists", C, false)), "Close", []);
      await $.mcall((await $.wv([$t50, $t51], "ODSCurrAccList", C, false)), "Close", []);
      await $.stmt($.wcall([$t50, $t51], "Free", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "aPayPlanExecute", async function aPayPlanExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t53 = (await $.v(C, "InsDataMod"));
    const $t54 = (await $.wv([$t53], "ODSPayPlan", C, false));
    const $t55 = (await $.mcall((await $.wv([$t53, $t54], "TfmPaymentPlan", C, false)), "Create", [Self]));
    try {
      await $.stmt((await $.wcall([$t53, $t54, $t55], "SetVariable", ["insid", (await $.mv((await $.mcall((await $.wv([$t53, $t54, $t55], "ODSContracts", C, false)), "FieldByName", ["ID"])), "asInteger"))], C)));
      await $.stmt($.wcall([$t53, $t54, $t55], "Open", [], C));
      await $.stmt($.wcall([$t53, $t54, $t55], "ShowModal", [], C));
      await $.mcall((await $.wv([$t53, $t54, $t55], "ODSPayPlan", C, false)), "Close", []);
    } finally {
      await $.stmt($.wcall([$t53, $t54, $t55], "Free", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "aFreeUserExecute", async function aFreeUserExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t56 = (await $.v(C, "InsDataMod"));
    const $t57 = (await $.wv([$t56], "ODSAccount", C, false));
    if ($.truthy($.eq((await $.wcall([$t56, $t57], "MessageDlg", ["Secilmish hesab istifadecinin adindan silinecek.", (await $.wv([$t56, $t57], "mtConfirmation", C, false)), [(await $.wv([$t56, $t57], "mbYes", C, false)), (await $.wv([$t56, $t57], "mbNo", C, false)), (await $.wv([$t56, $t57], "mbCancel", C, false))], 0], C)), (await $.wv([$t56, $t57], "mrYes", C, false))))) {
      await $.stmt((await $.mcall((await $.wv([$t56, $t57], "OPCOMMON", C, false)), "CallProcedure", ["free_acc", [(await $.mv((await $.wcall([$t56, $t57], "FieldByName", ["id"], C)), "asFloat"))]])));
    } else {
      return L0.result;
    }
    await $.stmt($.wcall([$t56, $t57], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "aAgentExecute", async function aAgentExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t58 = (await $.mcall((await $.v(C, "TfrmAgents")), "Create", [Self]));
    try {
      await $.stmt($.wcall([$t58], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t58], "Free", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "aBeneficiaryExecute", async function aBeneficiaryExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t59 = (await $.mcall((await $.v(C, "TfmBeneficary")), "Create", [Self]));
    try {
      await $.stmt($.wcall([$t59], "ShowModal", [], C));
    } finally {
      await $.stmt($.wcall([$t59], "Free", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "aPaymentsExecute", async function aPaymentsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "callerguid": null, "params": null};
  await $.fixArgs(L0, ["sender"]);
  L0["params"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  {
    const $t60 = (await $.v(C, "InsDataMod"));
    const $t61 = (await $.wv([$t60], "ODSContracts", C, false));
    const $t62 = (await $.wv([$t60, $t61], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false));
    { const $t63 = await $.iset((await $.wv([$t60, $t61, $t62], "Values", C, false)), ["INSID"], (await $.wcall([$t60, $t61, $t62], "FloatToStr", [(await $.mv((await $.wcall([$t60, $t61, $t62], "FieldByName", ["ID"], C)), "asFloat"))], C))); if ($t63 !== undefined) { await $.wset([$t60, $t61, $t62], "Values", $t63, C); } }
    await $.wset([$t60, $t61, $t62], "CallerGuid", (await $.wcall([$t60, $t61, $t62], "StringToGuid", ["{33777E01-D797-4C04-85D0-31C85C7EDB12}"], C)), { get: async () => L0["callerguid"], set: async (v) => { L0["callerguid"] = v; }, local: true });
    if ($.truthy($.eq((await $.mcall((await $.wv([$t60, $t61, $t62], "pmcCallActiveX", C, false)), "ShowModal", [(await $.wv([$t60, $t61, $t62], "CallerGuid", { get: async () => L0["callerguid"], set: async (v) => { L0["callerguid"] = v; }, local: true }, false)), (await $.wv([$t60, $t61, $t62], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false))])), (await $.wv([$t60, $t61, $t62], "mrOk", C, false))))) {
      await $.mcall((await $.wv([$t60, $t61, $t62], "ODSAccount", C, false)), "Refresh", []);
    }
  }
  await $.mcall(L0["params"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "an1Click", async function an1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null};
  await $.fixArgs(L0, ["sender"]);
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  {
    const $t64 = (await $.v(C, "InsDataMod"));
    { const $t65 = await $.iset((await $.mv((await $.wv([$t64], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values")), ["id"], (await $.wcall([$t64], "FloatToStr", [(await $.mv((await $.wv([$t64], "ODSAccountID", C, false)), "Value"))], C))); if ($t65 !== undefined) { await $.mset((await $.wv([$t64], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values", $t65); } }
    { const $t66 = await $.iset((await $.mv((await $.wv([$t64], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values")), ["acc_no"], (await $.mv((await $.wv([$t64], "ODSAccountAcc_no", C, false)), "Value"))); if ($t66 !== undefined) { await $.mset((await $.wv([$t64], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values", $t66); } }
  }
  await $.stmt((await $.mcall((await $.v(C, "AccountContainer")), "ShowModal", [(await $.call(C, "StringToGuid", ["{839CCAEF-9A7F-447B-AF7E-C8DE033306CA}"])), L0["p"]])));
  await $.mcall(L0["p"], "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "an2Click", async function an2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": null, "astartdate": 0, "aenddate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["p"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  {
    const $t67 = (await $.v(C, "FormInterval"));
    await $.mset((await $.wv([$t67], "StartDateEdit", C, false)), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.wv([$t67], "InsDataMod", C, false)), "Sysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.wv([$t67], "EndDateEdit", C, false)), "DateTime", (await $.mv((await $.wv([$t67], "StartDateEdit", C, false)), "DateTime")));
    if ($.truthy($.eq((await $.wv([$t67], "ShowModal", C, false)), (await $.wv([$t67], "mrOK", C, false))))) {
      await $.wset([$t67], "AStartDate", (await $.mv((await $.wv([$t67], "StartDateEdit", C, false)), "DateTime")), { get: async () => L0["astartdate"], set: async (v) => { L0["astartdate"] = v; }, local: true });
      await $.wset([$t67], "AEndDate", (await $.mv((await $.wv([$t67], "EndDateEdit", C, false)), "DateTime")), { get: async () => L0["aenddate"], set: async (v) => { L0["aenddate"] = v; }, local: true });
      { const $t68 = await $.iset((await $.mv((await $.wv([$t67], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values")), ["acc_no"], (await $.mv((await $.mv((await $.wv([$t67], "InsDataMod", C, false)), "ODSAccountAcc_no")), "Value"))); if ($t68 !== undefined) { await $.mset((await $.wv([$t67], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values", $t68); } }
      { const $t69 = await $.iset((await $.mv((await $.wv([$t67], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values")), ["id"], (await $.wcall([$t67], "FloatToStr", [(await $.mv((await $.mv((await $.wv([$t67], "InsDataMod", C, false)), "ODSAccountID")), "value"))], C))); if ($t69 !== undefined) { await $.mset((await $.wv([$t67], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values", $t69); } }
      { const $t70 = await $.iset((await $.mv((await $.wv([$t67], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values")), ["AStartDate"], (await $.wcall([$t67], "DateToStr", [(await $.wv([$t67], "AStartDate", { get: async () => L0["astartdate"], set: async (v) => { L0["astartdate"] = v; }, local: true }, false))], C))); if ($t70 !== undefined) { await $.mset((await $.wv([$t67], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values", $t70); } }
      { const $t71 = await $.iset((await $.mv((await $.wv([$t67], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values")), ["AEndDate"], (await $.wcall([$t67], "DateToStr", [(await $.wv([$t67], "AEndDate", { get: async () => L0["aenddate"], set: async (v) => { L0["aenddate"] = v; }, local: true }, false))], C))); if ($t71 !== undefined) { await $.mset((await $.wv([$t67], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Values", $t71); } }
      await $.stmt((await $.mcall((await $.wv([$t67], "StateContainer", C, false)), "ShowModal", [(await $.wcall([$t67], "StringToGuid", ["{8C35B7B8-2AF6-4BEA-BD7E-F0D01DBDC7EC}"], C)), (await $.wv([$t67], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))])));
      await $.mcall((await $.wv([$t67], "p", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), "Free", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "aFindExecute", async function aFindExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "fmCustFind"))]))))) {
    await $.set(C, "fmCustFind", (await $.mcall((await $.v(C, "TfmCustFind")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "fmCustFind")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "aFullFormExecute", async function aFullFormExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t72 = (await $.v(C, "InsDataMod"));
    if ($.truthy($.not((await $.mv((await $.wv([$t72], "tbFullScreen", C, false)), "Down"))))) {
      await $.stmt($.wcall([$t72], "UnSetFullForm", [], C));
    } else {
      await $.stmt($.wcall([$t72], "SetFullForm", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "DBGridContractsTitleClick", async function DBGridContractsTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": '', "sortposition": 0};
  await $.fixArgs(L0, ["column"]);
  L0["sortposition"] = 100;
  if ($.truthy((await $.or_(((await $.mv((await $.mv((await $.v(C, "InsDataMod")), "ODSContracts")), "IsEmpty"))), async () => ($.eq((await $.mv(L0["column"], "FieldName")), (await $.v(C, "EmptyStr")))))))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t73 = (await $.v(C, "InsDataMod"));
    const $t74 = (await $.wv([$t73], "ODSContracts", C, false));
    try {
      await $.wset([$t73, $t74], "SortPosition", (await $.mcall((await $.wv([$t73, $t74], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t73, $t74], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t73, $t74], "Refresh", [], C));
    } finally {
      { const $t75 = await $.iset((await $.wv([$t73, $t74], "SQL", C, false)), [(await $.wv([$t73, $t74], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t73, $t74], "EmptyStr", C, false))); if ($t75 !== undefined) { await $.wset([$t73, $t74], "SQL", $t75, C); } }
      await $.mset((await $.wv([$t73, $t74], "Screen", C, false)), "Cursor", (await $.wv([$t73, $t74], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TInsCustomersForm", "DBGridContractsDrawColumnCell", async function DBGridContractsDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  {
    const $t76 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t76], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      await $.wset([$t76], "ImageIndex", (await $.mv((await $.mcall((await $.mv((await $.wv([$t76], "DataSource", C, false)), "DataSet")), "FieldByName", ["state"])), "AsInteger")), { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
      if ($.truthy((await $.and_(($.eq((await $.wv([$t76], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 0)), async () => ($.ne((await $.wv([$t76], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.mset((await $.mv((await $.wv([$t76], "Canvas", C, false)), "brush")), "Style", (await $.wv([$t76], "bsSolid", C, false)));
        await $.stmt((await $.mcall((await $.wv([$t76], "Canvas", C, false)), "FillRect", [(await $.wv([$t76], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false))])));
        await $.stmt((await $.mcall((await $.wv([$t76], "ImageList2", C, false)), "Draw", [(await $.wv([$t76], "Canvas", C, false)), (await $.mv((await $.wv([$t76], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t76], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t76], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t76], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t76], "DefaultDrawColumnCell", [(await $.wv([$t76], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t76], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t76], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t76], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TInsCustomersForm", "aCommitExecute", async function aCommitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "funcname": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "InsDataMod")), "ODSContracts")), "RefreshRecord", []);
  {
    const $t77 = (await $.v(C, "InsDataMod"));
    const $t78 = (await $.wv([$t77], "ODSContracts", C, false));
    { const $t79 = (await $.mv((await $.wcall([$t77, $t78], "fieldbyname", ["state"], C)), "asInteger"));
      if ($.eq($t79, 0)) {
        await $.wset([$t77, $t78], "funcname", "commitblank", { get: async () => L0["funcname"], set: async (v) => { L0["funcname"] = v; }, local: true });
      }
      else if ($.eq($t79, 2)) {
        await $.wset([$t77, $t78], "funcname", "commitsuggestion", { get: async () => L0["funcname"], set: async (v) => { L0["funcname"] = v; }, local: true });
      }
      else if ($.eq($t79, 4)) {
        await $.wset([$t77, $t78], "funcname", "commitpolicy", { get: async () => L0["funcname"], set: async (v) => { L0["funcname"] = v; }, local: true });
      }
      else {
        return L0.result;
      }
    }
  }
  {
    const $t80 = (await $.v(C, "InsDataMod"));
    const $t81 = (await $.wv([$t80], "OPCOMMON", C, false));
    if ($.truthy((await $.wcall([$t80, $t81], "CallBooleanFunction", [(await $.wv([$t80, $t81], "funcname", { get: async () => L0["funcname"], set: async (v) => { L0["funcname"] = v; }, local: true }, false)), [(await $.mv((await $.mcall((await $.wv([$t80, $t81], "ODSContracts", C, false)), "fieldbyname", ["ID"])), "asInteger"))]], C)))) {
      await $.stmt((await $.wcall([$t80, $t81], "MessageDlg", ["Testiq olundu.", (await $.wv([$t80, $t81], "mtInformation", C, false)), [(await $.wv([$t80, $t81], "mbok", C, false))], 0], C)));
      await $.mcall((await $.wv([$t80, $t81], "ODSContracts", C, false)), "RefreshRecord", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "aContFindExecute", async function aContFindExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "fmContFind"))]))))) {
    await $.set(C, "fmContFind", (await $.mcall((await $.v(C, "TfmContFind")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "fmContFind")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsCustomersForm", "aDeleteOperationsExecute", async function aDeleteOperationsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t82 = (await $.v(C, "InsDataMod"));
    const $t83 = (await $.wv([$t82], "ODSContracts", C, false));
    if ($.truthy((await $.mcall((await $.wv([$t82, $t83], "OPCOMMON", C, false)), "CallBooleanFunction", ["DeleteOperations", [(await $.mv((await $.wcall([$t82, $t83], "FieldByName", ["id"], C)), "asInteger"))]])))) {
      await $.stmt((await $.wcall([$t82, $t83], "ShowMessage", ["Əməliyyatlar pozuldu!"], C)));
      await $.mcall((await $.wv([$t82, $t83], "ODSAccount", C, false)), "refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
