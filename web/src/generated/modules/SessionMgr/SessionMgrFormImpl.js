// Generated from SessionMgrFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SessionMgrFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ActiveX", "AxCtrls", "SessionMgr_TLB", "StdVcl", "Db", "OracleData", "Grids", "DBGrids", "StrUtils", "ExtCtrls", "DBCtrls", "ToolWin", "ComCtrls", "StdCtrls", "ActnList", "Menus", "Buttons", "Oracle", "ImgList", "XDBGrids", "CheckLst", "Evanescence", "CMDBSearchEdit", "Mask", "DBCtrlsEh", "CMHintDBLookupComboBox", "DBGridEh", "DBLookupEh", "ComObj", "ComServ", "sboapiDataModuleImpl", "SBSessionMgr", "SBSrvIntf", "uMsgSettings", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TSessionMgrForm", "TActiveForm", {"sessionsdata": {"name": "SessionsData", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "refreshtimer": {"name": "RefreshTimer", "type": "TTimer"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "killuser": {"name": "KillUser", "type": "TAction"}, "killall": {"name": "KillAll", "type": "TAction"}, "restrictlogins": {"name": "RestrictLogins", "type": "TAction"}, "restrictlogins1": {"name": "Restrictlogins1", "type": "TMenuItem"}, "killuser1": {"name": "KillUser1", "type": "TMenuItem"}, "killallactiveusers1": {"name": "Killallactiveusers1", "type": "TMenuItem"}, "enterrestrictedmodequery": {"name": "EnterRestrictedModeQuery", "type": "TOracleQuery"}, "leaverestrictedmodequery": {"name": "LeaveRestrictedModeQuery", "type": "TOracleQuery"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "statusbar1": {"name": "StatusBar1", "type": "TStatusBar"}, "sendmessage": {"name": "SendMessage", "type": "TAction"}, "sendmessage1": {"name": "SendMessage1", "type": "TMenuItem"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "sendmessagetoall": {"name": "SendMessageToAll", "type": "TAction"}, "sendmessagetoall1": {"name": "SendMessageToAll1", "type": "TMenuItem"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "actsettingsmsg": {"name": "actSettingsMsg", "type": "TAction"}, "sessionsdatasid": {"name": "SessionsDataSID", "type": "TFloatField"}, "sessionsdataserial": {"name": "SessionsDataSERIAL", "type": "TFloatField"}, "sessionsdataaudsid": {"name": "SessionsDataAUDSID", "type": "TFloatField"}, "sessionsdatauser": {"name": "SessionsDataUSER", "type": "TFloatField"}, "sessionsdatausername": {"name": "SessionsDataUSERNAME", "type": "TWideStringField"}, "sessionsdatastatus": {"name": "SessionsDataSTATUS", "type": "TWideStringField"}, "sessionsdataosuser": {"name": "SessionsDataOSUSER", "type": "TWideStringField"}, "sessionsdataprocess": {"name": "SessionsDataPROCESS", "type": "TWideStringField"}, "sessionsdatamachine": {"name": "SessionsDataMACHINE", "type": "TWideStringField"}, "sessionsdataterminal": {"name": "SessionsDataTERMINAL", "type": "TWideStringField"}, "sessionsdataprogram": {"name": "SessionsDataPROGRAM", "type": "TWideStringField"}, "sessionsdatalogon_time": {"name": "SessionsDataLOGON_TIME", "type": "TDateTimeField"}, "sessionsdataiscurrentuser": {"name": "SessionsDataISCURRENTUSER", "type": "TFloatField"}, "restrictions": {"name": "Restrictions", "type": "TOracleQuery"}, "restrict": {"name": "restrict", "type": "TOracleDataSet"}, "datares": {"name": "Datares", "type": "TDataSource"}, "swimagelist1": {"name": "swImageList1", "type": "TImageList"}, "odsrestrict": {"name": "odsrestrict", "type": "TOracleDataSet"}, "odsrestrictgrantee": {"name": "odsrestrictGRANTEE", "type": "TWideStringField"}, "restrictname": {"name": "restrictNAME", "type": "TWideStringField"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "memo2": {"name": "Memo2", "type": "TMemo"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "checklistbox1": {"name": "CheckListBox1", "type": "TCheckListBox"}, "restrictquery": {"name": "restrictquery", "type": "TOracleQuery"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "memo3": {"name": "Memo3", "type": "TMemo"}, "fevents": {"name": "FEvents", "type": "ISessionMgrFormEvents"}}, {});
  U.init(async () => {
  });
  U.method("TSessionMgrForm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TSessionMgrForm", "Edit1KeyDown", async function Edit1KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  { const $t1 = (await L0["key"].get());
    if ($.eq($t1, (await $.v(C, "VK_RETURN")))) {
      await $.stmt((await $.mcall((await $.v(C, "CheckListBox1")), "Perform", [(await $.v(C, "LB_SELECTSTRING")), (-(1)), (await $.call(C, "longint", [(await $.call(C, "Pchar", [(await $.mv((await $.v(C, "Edit1")), "text"))]))]))])));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TSessionMgrForm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TSessionMgrForm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TSessionMgrForm", "Initialize", null, arguments);
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
  U.method("TSessionMgrForm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSessionMgrForm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSessionMgrForm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSessionMgrForm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSessionMgrForm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSessionMgrForm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSessionMgrForm", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSessionMgrForm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSessionMgrForm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSessionMgrForm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSessionMgrForm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSessionMgrForm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSessionMgrForm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSessionMgrForm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSessionMgrForm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSessionMgrForm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSessionMgrForm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSessionMgrForm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSessionMgrForm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TSessionMgrForm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSessionMgrForm", "CheckListBox1Click", async function CheckListBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t2 = $.sub((await $.mv((await $.mv((await $.v(C, "CheckListBox1")), "Items")), "Count")), 1);
    L0["i"] = 0;
    let $t3 = true;
    for (;;) {
      if (!$t3) { L0["i"] = $.succ(L0["i"], 1); }
      $t3 = false;
      if (!($.ord(L0["i"]) <= $.ord($t2))) break;
      if ($.truthy((await $.idx((await $.mv((await $.v(C, "CheckListBox1")), "selected")), [L0["i"]])))) {
        await $.mset((await $.v(C, "edit1")), "Text", (await $.idx((await $.mv((await $.v(C, "CheckListBox1")), "Items")), [L0["i"]])));
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSessionMgrForm", "CheckListBox1ClickCheck", async function CheckListBox1ClickCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t4 = $.sub((await $.mv((await $.mv((await $.v(C, "CheckListBox1")), "Items")), "Count")), 1);
    L0["i"] = 0;
    let $t5 = true;
    for (;;) {
      if (!$t5) { L0["i"] = $.succ(L0["i"], 1); }
      $t5 = false;
      if (!($.ord(L0["i"]) <= $.ord($t4))) break;
      if ($.truthy((await $.idx((await $.mv((await $.v(C, "CheckListBox1")), "Checked")), [L0["i"]])))) {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo3")), "Lines")), "Add", [(await $.idx((await $.mv((await $.v(C, "CheckListBox1")), "Items")), [L0["i"]]))])));
        await $.mcall((await $.v(C, "restrictquery")), "Close", []);
        await $.mcall((await $.mv((await $.v(C, "restrictquery")), "sql")), "Clear", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "restrictquery")), "sql")), "Add", [$.add("grant restricted session to ", (await $.idx((await $.mv((await $.v(C, "CheckListBox1")), "Items")), [L0["i"]])))])));
        await $.mcall((await $.v(C, "restrictquery")), "Execute", []);
      } else {
        await $.mcall((await $.v(C, "restrictquery")), "Close", []);
        await $.mcall((await $.mv((await $.v(C, "restrictquery")), "sql")), "Clear", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "restrictquery")), "sql")), "Add", [$.add("grant restricted session to ", (await $.idx((await $.mv((await $.v(C, "CheckListBox1")), "items")), [L0["i"]])))])));
        await $.mcall((await $.v(C, "restrictquery")), "Execute", []);
        await $.mcall((await $.mv((await $.v(C, "restrictquery")), "sql")), "Clear", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "restrictquery")), "sql")), "Add", [$.add("revoke restricted session from ", (await $.idx((await $.mv((await $.v(C, "CheckListBox1")), "items")), [L0["i"]])))])));
        await $.mcall((await $.v(C, "restrictquery")), "Execute", []);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSessionMgrForm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSessionMgrForm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSessionMgrForm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSessionMgrForm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSessionMgrForm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSessionMgrForm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TSessionMgrForm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSessionMgrForm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSessionMgrForm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSessionMgrForm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TSessionMgrForm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TSessionMgrForm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TSessionMgrForm", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TSessionMgrForm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSessionMgrForm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSessionMgrForm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSessionMgrForm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TSessionMgrForm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TSessionMgrForm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSessionMgrForm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TSessionMgrForm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TSessionMgrForm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSessionMgrForm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSessionMgrForm", "ToolButton8Click", async function ToolButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t6 = $.sub((await $.mv((await $.mv((await $.v(C, "CheckListBox1")), "Items")), "Count")), 1);
    L0["i"] = 0;
    let $t7 = true;
    for (;;) {
      if (!$t7) { L0["i"] = $.succ(L0["i"], 1); }
      $t7 = false;
      if (!($.ord(L0["i"]) <= $.ord($t6))) break;
      if ($.truthy((await $.idx((await $.mv((await $.v(C, "CheckListBox1")), "Checked")), [L0["i"]])))) {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Memo3")), "Lines")), "Add", [(await $.idx((await $.mv((await $.v(C, "CheckListBox1")), "Items")), [L0["i"]]))])));
        await $.mcall((await $.v(C, "restrictquery")), "Close", []);
        await $.mcall((await $.mv((await $.v(C, "restrictquery")), "sql")), "Clear", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "restrictquery")), "sql")), "Add", [$.add("grant restricted session to ", (await $.idx((await $.mv((await $.v(C, "CheckListBox1")), "Items")), [L0["i"]])))])));
        await $.mcall((await $.v(C, "restrictquery")), "Execute", []);
      } else {
        await $.mcall((await $.v(C, "restrictquery")), "Close", []);
        await $.mcall((await $.mv((await $.v(C, "restrictquery")), "sql")), "Clear", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "restrictquery")), "sql")), "Add", [$.add("grant restricted session to ", (await $.idx((await $.mv((await $.v(C, "CheckListBox1")), "items")), [L0["i"]])))])));
        await $.mcall((await $.v(C, "restrictquery")), "Execute", []);
        await $.mcall((await $.mv((await $.v(C, "restrictquery")), "sql")), "Clear", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "restrictquery")), "sql")), "Add", [$.add("revoke restricted session from ", (await $.idx((await $.mv((await $.v(C, "CheckListBox1")), "items")), [L0["i"]])))])));
        await $.mcall((await $.v(C, "restrictquery")), "Execute", []);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSessionMgrForm", "XDBGrid1CellClick", async function XDBGrid1CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["column"]);
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TSessionMgrForm", "RefreshTimerTimer", async function RefreshTimerTimer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "lastsid": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.v(C, "SessionsData"));
    if ($.truthy((await $.mv((await $.wv([$t8], "Session", C, false)), "Connected")))) {
      if ($.truthy((await $.wv([$t8], "Active", C, false)))) {
        await $.wset([$t8], "LastSID", (await $.mv((await $.wcall([$t8], "FieldByName", ["SID"], C)), "AsInteger")), { get: async () => L0["lastsid"], set: async (v) => { L0["lastsid"] = v; }, local: true });
      } else {
        await $.wset([$t8], "LastSID", (-(1)), { get: async () => L0["lastsid"], set: async (v) => { L0["lastsid"] = v; }, local: true });
      }
      await $.stmt($.wcall([$t8], "Close", [], C));
      await $.stmt($.wcall([$t8], "Open", [], C));
      if ($.truthy($.ne((await $.wv([$t8], "LastSID", { get: async () => L0["lastsid"], set: async (v) => { L0["lastsid"] = v; }, local: true }, false)), (-(1))))) {
        await $.stmt((await $.wcall([$t8], "Locate", ["SID", (await $.wv([$t8], "LastSID", { get: async () => L0["lastsid"], set: async (v) => { L0["lastsid"] = v; }, local: true }, false)), []], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSessionMgrForm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": [], "b": [], "i": 0, "k": 0, "l": 0, "j": 0, "h": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "RefreshTimer")), "OnTimer", [(await $.v(C, "RefreshTimer"))])));
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L0["a"], async ($t9) => { L0["a"] = $t9; }), (await $.mv((await $.v(C, "restrict")), "RecordCount"))])));
  L0["i"] = 0;
  while ($.truthy($.not((await $.mv((await $.v(C, "restrict")), "eof"))))) {
    { const $t10 = await $.iset(L0["a"], [L0["i"]], (await $.idx((await $.mv((await $.v(C, "restrict")), "FieldValues")), ["name"]))); if ($t10 !== undefined) { L0["a"] = $t10; } }
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "memo1")), "Lines")), "Add", [(await $.idx(L0["a"], [L0["i"]]))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CheckListBox1")), "items")), "Add", [(await $.idx(L0["a"], [L0["i"]]))])));
    await $.mcall((await $.v(C, "restrict")), "next", []);
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["i"], async ($t11) => { L0["i"] = $t11; })])));
    await $.tick();
  }
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L0["b"], async ($t12) => { L0["b"] = $t12; }), (await $.mv((await $.v(C, "odsrestrict")), "RecordCount"))])));
  L0["j"] = 0;
  while ($.truthy($.not((await $.mv((await $.v(C, "odsrestrict")), "eof"))))) {
    { const $t13 = await $.iset(L0["b"], [L0["j"]], (await $.idx((await $.mv((await $.v(C, "odsrestrict")), "FieldValues")), ["grantee"]))); if ($t13 !== undefined) { L0["b"] = $t13; } }
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "memo2")), "Lines")), "ADD", [(await $.idx(L0["b"], [L0["j"]]))])));
    await $.mcall((await $.v(C, "odsrestrict")), "next", []);
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["j"], async ($t14) => { L0["j"] = $t14; })])));
    await $.tick();
  }
  { const $t15 = $.sub((await $.mv((await $.mv((await $.v(C, "memo1")), "Lines")), "Count")), 1);
    L0["i"] = 0;
    let $t16 = true;
    for (;;) {
      if (!$t16) { L0["i"] = $.succ(L0["i"], 1); }
      $t16 = false;
      if (!($.ord(L0["i"]) <= $.ord($t15))) break;
      if ($.truthy($.ne((await $.mcall((await $.mv((await $.v(C, "memo2")), "Lines")), "IndexOf", [(await $.idx((await $.mv((await $.v(C, "memo1")), "Lines")), [L0["i"]]))])), (-(1))))) {
        { const $t17 = await $.iset((await $.mv((await $.v(C, "CheckListBox1")), "Checked")), [L0["i"]], true); if ($t17 !== undefined) { await $.mset((await $.v(C, "CheckListBox1")), "Checked", $t17); } }
      }
      await $.tick();
    }
  }
  { const $t18 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t19 = true;
    for (;;) {
      if (!$t19) { L0["i"] = $.succ(L0["i"], 1); }
      $t19 = false;
      if (!($.ord(L0["i"]) <= $.ord($t18))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 3112))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "CheckAll", []);
      }
      await $.tick();
    }
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSessionMgrForm", "RestrictLoginsExecute", async function RestrictLoginsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t20 = L0["sender"];
    await $.wset([$t20], "Checked", $.not((await $.wv([$t20], "Checked", C, false))), C);
    if ($.truthy((await $.wv([$t20], "Checked", C, false)))) {
      await $.mcall((await $.wv([$t20], "EnterRestrictedModeQuery", C, false)), "Execute", []);
    } else {
      await $.mcall((await $.wv([$t20], "LeaveRestrictedModeQuery", C, false)), "Execute", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSessionMgrForm", "KillUserExecute", async function KillUserExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "message": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["timeout"] = 10;
  L0["replace"] = $.fn(async function Replace(p0, p1, p2) {
  const L1 = {"text": $.copyArg(p0), "sourcechar": $.copyArg(p1), "targetchar": $.copyArg(p2), result: '', "i": 0};
  await $.fixArgs(L1, ["text", "sourcechar", "targetchar"]);
  L1["result"] = L1["text"];
  { const $t21 = (await $.call(C, "Length", [L1["result"]]));
    L1["i"] = 0;
    let $t22 = true;
    for (;;) {
      if (!$t22) { L1["i"] = $.succ(L1["i"], 1); }
      $t22 = false;
      if (!($.ord(L1["i"]) <= $.ord($t21))) break;
      if ($.truthy($.eq((await $.idx(L1["result"], [L1["i"]])), L1["sourcechar"]))) {
        { const $t23 = await $.iset(L1["result"], [L1["i"]], L1["targetchar"]); if ($t23 !== undefined) { L1["result"] = $t23; } }
      }
      await $.tick();
    }
  }
  return L1.result;
});
  L0["message"] = (await $.call(C, "Format", ["Immediate shutdown in %d seconds. Save your work and exit program", [L0["timeout"]]]));
  {
    const $t24 = (await $.v(C, "SessionsData"));
    if ($.truthy((await $.wcall([$t24], "InputQuery", ["Confirm user killing", "Enter text message to be sent to user: ", $.ref(async () => (await $.wv([$t24], "Message", { get: async () => L0["message"], set: async (v) => { L0["message"] = v; }, local: true }, false)), async ($t25) => { await $.wset([$t24], "Message", $t25, { get: async () => L0["message"], set: async (v) => { L0["message"] = v; }, local: true }); })], C)))) {
      await $.stmt((await $.wcall([$t24], "Sb_KillSession", [(await $.mv((await $.wcall([$t24], "FieldByName", ["SID"], C)), "AsString")), (await $.mv((await $.wcall([$t24], "FieldByName", ["Serial#"], C)), "AsString")), (await $.wcall([$t24], "Replace", [(await $.wv([$t24], "Message", { get: async () => L0["message"], set: async (v) => { L0["message"] = v; }, local: true }, false)), " ", "_"], { get: async () => L0["replace"], set: async (v) => { L0["replace"] = v; }, local: true })), (await $.wv([$t24], "Timeout", { get: async () => L0["timeout"], set: async (v) => { L0["timeout"] = v; }, local: true }, false)), $.add((await $.wv([$t24], "Timeout", { get: async () => L0["timeout"], set: async (v) => { L0["timeout"] = v; }, local: true }, false)), 5)], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSessionMgrForm", "DBGrid1DrawColumnCell", async function DBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  if ($.truthy($.eq(L0["datacol"], 1))) {
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv(L0["column"], "Grid")), "DataSource")), "DataSet")), "FieldByName", ["IsCurrentUser"])), "AsInteger")), 1))) {
      await $.stmt((await $.mcall((await $.v(C, "ImageList1")), "Draw", [(await $.mv((await $.v(C, "DBGrid1")), "Canvas")), $.add((await $.mv(L0["rect"], "Left")), 1), (await $.mv(L0["rect"], "Top")), 1])));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TSessionMgrForm", "KillUserUpdate", async function KillUserUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t26 = L0["sender"];
    await $.wset([$t26], "Enabled", $.eq((await $.mv((await $.mcall((await $.wv([$t26], "SessionsData", C, false)), "FieldByName", ["IsCurrentUser"])), "AsInteger")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSessionMgrForm", "KillAllExecute", async function KillAllExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "message": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Kill all users?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
    if ($.truthy((await $.call(C, "InputQuery", ["Enter message to be sent to users", "Message:", $.ref(async () => L0["message"], async ($t27) => { L0["message"] = $t27; })])))) {
      await $.stmt((await $.call(C, "Sb_KillAll", ["%", L0["message"], 15])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSessionMgrForm", "KillUserHint", async function KillUserHint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"hintstr": $.asRef(p0), "canshow": $.asRef(p1), result: undefined};
  L0["skilluserhint"] = "Kill current user";
  L0["skillhimselfhint"] = "You can not kill himself";
  {
    const $t28 = (await $.v(C, "KillUser"));
    if ($.truthy((await $.wv([$t28], "Enabled", C, false)))) {
      await $.wset([$t28], "HintStr", (await $.wv([$t28], "SKillUserHint", { get: async () => L0["skilluserhint"], set: async (v) => { L0["skilluserhint"] = v; }, local: true }, false)), { get: async () => await L0["hintstr"].get(), set: async (v) => { await L0["hintstr"].set(v); }, local: true });
    } else {
      await $.wset([$t28], "HintStr", (await $.wv([$t28], "SKillHimselfHint", { get: async () => L0["skillhimselfhint"], set: async (v) => { L0["skillhimselfhint"] = v; }, local: true }, false)), { get: async () => await L0["hintstr"].get(), set: async (v) => { await L0["hintstr"].set(v); }, local: true });
    }
  }
  return L0.result;
}, {"params": ["HintStr", "CanShow"], "kind": "procedure", "ptypes": ["String", "Boolean"]});
  U.method("TSessionMgrForm", "SendMessageExecute", async function SendMessageExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "message": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "InputQuery", ["Enter message", "Text:", $.ref(async () => L0["message"], async ($t29) => { L0["message"] = $t29; })])))) {
    await $.stmt((await $.call(C, "Sb_SendMessage", [(await $.mv((await $.mcall((await $.v(C, "SessionsData")), "FieldByName", ["SID"])), "AsString")), L0["message"]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSessionMgrForm", "SendMessageToAllExecute", async function SendMessageToAllExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "message": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "InputQuery", ["Enter message", "Text:", $.ref(async () => L0["message"], async ($t30) => { L0["message"] = $t30; })])))) {
    await $.stmt((await $.call(C, "Sb_SendMessage", [(await $.mv((await $.mcall((await $.v(C, "SessionsData")), "FieldByName", ["SID"])), "AsString")), L0["message"], (await $.v(C, "MsgName_MessageBroadcast"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSessionMgrForm", "actSettingsMsgExecute", async function actSettingsMsgExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "frmMsgSettings"))]))))) {
    await $.set(C, "frmMsgSettings", (await $.mcall((await $.v(C, "TfrmMsgSettings")), "Create", [Self])));
  }
  {
    const $t31 = (await $.v(C, "frmMsgSettings"));
    await $.stmt($.wcall([$t31], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
