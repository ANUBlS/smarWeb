// Generated from SBUniversalSettingsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBUniversalSettingsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "SSTUniversalSettings_TLB", "StdVcl", "Db", "OracleData", "Grids", "DBGrids", "ExtCtrls", "ActnList", "DBCtrls", "StdCtrls", "ComObj", "ComServ", "About1", "sboapidatamoduleimpl", "uNewUSImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TSBUniversalSettings", "TActiveForm", {"odstables": {"name": "ODSTables", "type": "TOracleDataSet"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "grsettings": {"name": "grSettings", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "grtables": {"name": "grTables", "type": "TDBGrid"}, "dstables": {"name": "DSTables", "type": "TDataSource"}, "dscont": {"name": "DSCont", "type": "TDataSource"}, "odscont1": {"name": "ODSCont1", "type": "TOracleDataSet"}, "odstablesid": {"name": "ODSTablesID", "type": "TFloatField"}, "odstablesname": {"name": "ODSTablesNAME", "type": "TWideStringField"}, "odstablesqueryst": {"name": "ODSTablesQUERYST", "type": "TWideStringField"}, "odstablesdescrt": {"name": "ODSTablesDESCRT", "type": "TWideStringField"}, "odscolumntitlles": {"name": "ODSColumnTitlles", "type": "TOracleDataSet"}, "odscolumntitllescolumnid": {"name": "ODSColumnTitllesCOLUMNID", "type": "TFloatField"}, "odscolumntitllescolumntitle": {"name": "ODSColumnTitllesCOLUMNTITLE", "type": "TWideStringField"}, "odscolumntitllescolumnwidth": {"name": "ODSColumnTitllesCOLUMNWIDTH", "type": "TFloatField"}, "acts": {"name": "acts", "type": "TActionList"}, "actnew": {"name": "actNew", "type": "TAction"}, "odstablesordercol": {"name": "ODSTablesORDERCOL", "type": "TWideStringField"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "odstablesquery_where": {"name": "ODSTablesQUERY_WHERE", "type": "TWideStringField"}, "odstablesdef_value": {"name": "ODSTablesDEF_VALUE", "type": "TWideStringField"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "editid": {"name": "EditID", "type": "TEdit"}, "editdescrt": {"name": "EditDESCRT", "type": "TEdit"}, "odscont": {"name": "ODSCont", "type": "TOracleDataSet"}, "fevents": {"name": "FEvents", "type": "ISBUniversalSettingsEvents"}}, {});
  U.init(async () => {
    U.var_("j", 0, "Integer");
    U.var_("doc_deps_type_id", 0, "Integer");
  });
  U.method("TSBUniversalSettings", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TSBUniversalSettings", "ActionSpeedSearchExecute", async function ActionSpeedSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t1 = L0["sender"];
    await $.wset([$t1], "SearchField", (await $.wcall([$t1], "copy", [(await $.wv([$t1], "Name", C, false)), 5, (await $.wcall([$t1], "length", [(await $.wv([$t1], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t2 = (await $.wcall([$t1], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t1], "grTables", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t1, $t2], "SearchRecord", [(await $.wv([$t1, $t2], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Text", C, false)), $.add((await $.wv([$t1, $t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "srFromCurrent", C, false)), (await $.wv([$t1, $t2], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t1, $t2], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t1, $t2], "mtInformation", C, false)), [(await $.wv([$t1, $t2], "mbNo", C, false)), (await $.wv([$t1, $t2], "mbYes", C, false))], 0], C)), (await $.wv([$t1, $t2], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t1, $t2], "SearchRecord", [(await $.wv([$t1, $t2], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Text", C, false)), $.add((await $.wv([$t1, $t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t1, $t2], "MessageDlg", ["Yazı tapılmayıb!", (await $.wv([$t1, $t2], "mtInformation", C, false)), [(await $.wv([$t1, $t2], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBUniversalSettings", "EditDESCRTExit", async function EditDESCRTExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBUniversalSettings", "EditIDExit", async function EditIDExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBUniversalSettings", "EditIDKeyPress", async function EditIDKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TSBUniversalSettings", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TSBUniversalSettings", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TSBUniversalSettings", "Initialize", null, arguments);
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
  U.method("TSBUniversalSettings", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBUniversalSettings", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBUniversalSettings", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBUniversalSettings", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBUniversalSettings", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBUniversalSettings", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBUniversalSettings", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBUniversalSettings", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBUniversalSettings", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBUniversalSettings", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBUniversalSettings", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBUniversalSettings", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBUniversalSettings", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBUniversalSettings", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBUniversalSettings", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBUniversalSettings", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBUniversalSettings", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBUniversalSettings", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TSBUniversalSettings", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TSBUniversalSettings", "AboutBox", async function AboutBox(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "ShowSBUniversalSettingsAbout", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TSBUniversalSettings", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBUniversalSettings", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBUniversalSettings", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBUniversalSettings", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBUniversalSettings", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBUniversalSettings", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBUniversalSettings", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBUniversalSettings", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TSBUniversalSettings", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBUniversalSettings", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSBUniversalSettings", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSBUniversalSettings", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TSBUniversalSettings", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TSBUniversalSettings", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TSBUniversalSettings", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TSBUniversalSettings", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSBUniversalSettings", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSBUniversalSettings", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSBUniversalSettings", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TSBUniversalSettings", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TSBUniversalSettings", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSBUniversalSettings", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TSBUniversalSettings", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TSBUniversalSettings", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSBUniversalSettings", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TSBUniversalSettings", "grTablesCellClick", async function grTablesCellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["column"]);
  L0["sqlref"] = "select r.rowid, %s from %s r where %s order by %s";
  {
    const $t3 = (await $.v(C, "ODSCont"));
    await $.stmt($.wcall([$t3], "close", [], C));
    if ($.truthy((await $.mv((await $.wv([$t3], "ODSTablesQUERY_WHERE", C, false)), "isNull")))) {
      await $.mset((await $.wv([$t3], "sql", C, false)), "text", (await $.wcall([$t3], "format", [(await $.wv([$t3], "sqlref", { get: async () => L0["sqlref"], set: async (v) => { L0["sqlref"] = v; }, local: true }, false)), [(await $.mv((await $.wv([$t3], "ODSTablesQUERYST", C, false)), "AsVariant")), (await $.mv((await $.wv([$t3], "ODSTablesNAME", C, false)), "AsVariant")), "1=1", (await $.mv((await $.wv([$t3], "ODSTablesORDERCOL", C, false)), "AsVariant"))]], C)));
    } else {
      await $.mset((await $.wv([$t3], "sql", C, false)), "text", (await $.wcall([$t3], "format", [(await $.wv([$t3], "sqlref", { get: async () => L0["sqlref"], set: async (v) => { L0["sqlref"] = v; }, local: true }, false)), [(await $.mv((await $.wv([$t3], "ODSTablesQUERYST", C, false)), "AsVariant")), (await $.mv((await $.wv([$t3], "ODSTablesNAME", C, false)), "AsVariant")), (await $.mv((await $.wv([$t3], "ODSTablesQUERY_WHERE", C, false)), "AsVariant")), (await $.mv((await $.wv([$t3], "ODSTablesORDERCOL", C, false)), "AsVariant"))]], C)));
    }
    await $.stmt($.wcall([$t3], "open", [], C));
    { const $t4 = $.sub((await $.mv((await $.wv([$t3], "Fields", C, false)), "Count")), 1);
      await $.wset([$t3], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t5 = true;
      for (;;) {
        if (!$t5) { await $.wset([$t3], "i", $.succ((await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t5 = false;
        if (!($.ord((await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t4))) break;
        await $.mset((await $.idx((await $.wv([$t3], "Fields", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Required", (await $.wv([$t3], "False", C, false)));
        await $.tick();
      }
    }
  }
  {
    const $t6 = (await $.v(C, "ODSColumnTitlles"));
    await $.stmt($.wcall([$t6], "Close", [], C));
    await $.stmt((await $.wcall([$t6], "SetVariable", ["tableid", (await $.mv((await $.wv([$t6], "ODSTablesID", C, false)), "AsInteger"))], C)));
    await $.stmt($.wcall([$t6], "Open", [], C));
  }
  {
    const $t7 = (await $.v(C, "grSettings"));
    { const $t8 = $.sub((await $.mv((await $.wv([$t7], "Columns", C, false)), "Count")), 1);
      await $.wset([$t7], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t9 = true;
      for (;;) {
        if (!$t9) { await $.wset([$t7], "i", $.succ((await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t9 = false;
        if (!($.ord((await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t8))) break;
        await $.stmt((await $.mcall((await $.wv([$t7], "ODSColumnTitlles", C, false)), "Locate", ["columnid", (await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), []])));
        await $.mset((await $.mv((await $.idx((await $.wv([$t7], "Columns", C, false)), [(await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Title")), "Caption", (await $.mv((await $.wv([$t7], "ODSColumnTitllesCOLUMNTITLE", C, false)), "AsString")));
        if ($.truthy($.gt((await $.mv((await $.wv([$t7], "ODSColumnTitllesCOLUMNWIDTH", C, false)), "AsInteger")), 0))) {
          await $.mset((await $.idx((await $.wv([$t7], "Columns", C, false)), [(await $.wv([$t7], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Width", (await $.mv((await $.wv([$t7], "ODSColumnTitllesCOLUMNWIDTH", C, false)), "AsInteger")));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TSBUniversalSettings", "grTablesKeyUp", async function grTablesKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_f5"))))) {
    await $.mcall((await $.mv((await $.mv((L0["sender"]), "DataSource")), "DataSet")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TSBUniversalSettings", "actNewExecute", async function actNewExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "frmNewUS"))]))))) {
    await $.set(C, "frmNewUS", (await $.mcall((await $.v(C, "TfrmNewUS")), "Create", [Self])));
  }
  {
    const $t10 = (await $.v(C, "frmNewUS"));
    await $.stmt($.wcall([$t10], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TSBUniversalSettings", "ODSCont1BeforePost", async function ODSCont1BeforePost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "value_column": '', "a": '', "c": '', "value": 0, "b": 0};
  await $.fixArgs(L0, ["dataset"]);
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TSBUniversalSettings", "ODSTablesAfterScroll", async function ODSTablesAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["dataset"]);
  L0["sqlref"] = "select r.rowid, %s from %s r where %s order by %s";
  {
    const $t11 = (await $.v(C, "ODSCont"));
    await $.stmt($.wcall([$t11], "close", [], C));
    if ($.truthy((await $.mv((await $.wv([$t11], "ODSTablesQUERY_WHERE", C, false)), "isNull")))) {
      await $.mset((await $.wv([$t11], "sql", C, false)), "text", (await $.wcall([$t11], "format", [(await $.wv([$t11], "sqlref", { get: async () => L0["sqlref"], set: async (v) => { L0["sqlref"] = v; }, local: true }, false)), [(await $.mv((await $.wv([$t11], "ODSTablesQUERYST", C, false)), "AsVariant")), (await $.mv((await $.wv([$t11], "ODSTablesNAME", C, false)), "AsVariant")), "1=1", (await $.mv((await $.wv([$t11], "ODSTablesORDERCOL", C, false)), "AsVariant"))]], C)));
    } else {
      await $.mset((await $.wv([$t11], "sql", C, false)), "text", (await $.wcall([$t11], "format", [(await $.wv([$t11], "sqlref", { get: async () => L0["sqlref"], set: async (v) => { L0["sqlref"] = v; }, local: true }, false)), [(await $.mv((await $.wv([$t11], "ODSTablesQUERYST", C, false)), "AsVariant")), (await $.mv((await $.wv([$t11], "ODSTablesNAME", C, false)), "AsVariant")), (await $.mv((await $.wv([$t11], "ODSTablesQUERY_WHERE", C, false)), "AsVariant")), (await $.mv((await $.wv([$t11], "ODSTablesORDERCOL", C, false)), "AsVariant"))]], C)));
    }
    await $.stmt($.wcall([$t11], "open", [], C));
    { const $t12 = $.sub((await $.mv((await $.wv([$t11], "Fields", C, false)), "Count")), 1);
      await $.wset([$t11], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t13 = true;
      for (;;) {
        if (!$t13) { await $.wset([$t11], "i", $.succ((await $.wv([$t11], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t13 = false;
        if (!($.ord((await $.wv([$t11], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t12))) break;
        await $.mset((await $.idx((await $.wv([$t11], "Fields", C, false)), [(await $.wv([$t11], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Required", (await $.wv([$t11], "False", C, false)));
        await $.tick();
      }
    }
  }
  {
    const $t14 = (await $.v(C, "ODSColumnTitlles"));
    await $.stmt($.wcall([$t14], "Close", [], C));
    await $.stmt((await $.wcall([$t14], "SetVariable", ["tableid", (await $.mv((await $.wv([$t14], "ODSTablesID", C, false)), "AsInteger"))], C)));
    await $.stmt($.wcall([$t14], "Open", [], C));
  }
  {
    const $t15 = (await $.v(C, "grSettings"));
    { const $t16 = $.sub((await $.mv((await $.wv([$t15], "Columns", C, false)), "Count")), 1);
      await $.wset([$t15], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t17 = true;
      for (;;) {
        if (!$t17) { await $.wset([$t15], "i", $.succ((await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t17 = false;
        if (!($.ord((await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t16))) break;
        await $.stmt((await $.mcall((await $.wv([$t15], "ODSColumnTitlles", C, false)), "Locate", ["columnid", (await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), []])));
        await $.mset((await $.mv((await $.idx((await $.wv([$t15], "Columns", C, false)), [(await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Title")), "Caption", (await $.mv((await $.wv([$t15], "ODSColumnTitllesCOLUMNTITLE", C, false)), "AsString")));
        if ($.truthy($.gt((await $.mv((await $.wv([$t15], "ODSColumnTitllesCOLUMNWIDTH", C, false)), "AsInteger")), 0))) {
          await $.mset((await $.idx((await $.wv([$t15], "Columns", C, false)), [(await $.wv([$t15], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Width", (await $.mv((await $.wv([$t15], "ODSColumnTitllesCOLUMNWIDTH", C, false)), "AsInteger")));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TSBUniversalSettings", "ODSCont1AfterPost", async function ODSCont1AfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.set(C, "j", (await $.mv((await $.mcall((await $.v(C, "ODSTables")), "FieldByNAme", ["ID"])), "asInteger")));
  await $.mcall((await $.v(C, "ODSTables")), "Refresh", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSTables")), "Locate", ["ID", (await $.v(C, "j")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "LoPartialKey"))]])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TSBUniversalSettings", "ODSCont1AfterDelete", async function ODSCont1AfterDelete(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.set(C, "j", (await $.mv((await $.mcall((await $.v(C, "ODSTables")), "FieldByNAme", ["ID"])), "asInteger")));
  await $.mcall((await $.v(C, "ODSTables")), "Refresh", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSTables")), "Locate", ["ID", (await $.v(C, "j")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "LoPartialKey"))]])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TSBUniversalSettings", "ODSCont1AfterEdit", async function ODSCont1AfterEdit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.set(C, "j", (await $.mv((await $.mcall((await $.v(C, "ODSTables")), "FieldByNAme", ["ID"])), "asInteger")));
  await $.mcall((await $.v(C, "ODSTables")), "Refresh", []);
  await $.stmt((await $.mcall((await $.v(C, "ODSTables")), "Locate", ["ID", (await $.v(C, "j")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "LoPartialKey"))]])));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TSBUniversalSettings", "ODSCont1ApplyRecord", async function ODSCont1ApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "value_column": '', "a": '', "c": '', "value": 0, "b": 0};
  await $.fixArgs(L0, ["sender", "action"]);
  if ($.truthy($.not((await $.mv((await $.mcall((await $.v(C, "ODSTables")), "FieldByName", ["DEF_VALUE"])), "isNull"))))) {
    L0["a"] = (await $.mv((await $.mcall((await $.v(C, "ODSTables")), "FieldByName", ["DEF_VALUE"])), "AsVariant"));
    L0["value_column"] = L0["a"];
    L0["c"] = L0["a"];
    L0["b"] = (await $.call(C, "Length", [L0["a"]]));
    await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["value_column"], async ($t18) => { L0["value_column"] = $t18; }), $.sub(L0["b"], 1), 2])));
    await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["value_column"], async ($t19) => { L0["value_column"] = $t19; }), 1, 2])));
    await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["c"], async ($t20) => { L0["c"] = $t20; }), 1, $.sub(L0["b"], 1)])));
    L0["value"] = (await $.call(C, "strtoint", [L0["c"]]));
    await $.mset((await $.mcall((await $.v(C, "ODSCont")), "FieldByName", [L0["value_column"]])), "asVariant", L0["value"]);
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  return U;
}
