// Generated from MainScreen.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("MainScreen", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "Law_modules_TLB", "StdVcl", "ImgList", "Grids", "DBGrids", "StdCtrls", "Buttons", "XFSCtrls", "ExtCtrls", "ComCtrls", "OleServer", "ExcelXP", "dblookup", "DBCtrls", "ComObj", "ComServ", "SboapiDataModuleImpl", "Datmodule", "CourtUNIT", "Filters", "SettingsUnit"]);
  const C = [U];
  U.defClass("TLawmodule", "TActiveForm", {"pagecontrol": {"name": "PageControl", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "refreshbtn": {"name": "refreshbtn", "type": "TXFBitBtn"}, "xfbitbtn2": {"name": "XFBitBtn2", "type": "TXFBitBtn"}, "xfbitbtn3": {"name": "XFBitBtn3", "type": "TXFBitBtn"}, "xfbitbtn4": {"name": "XFBitBtn4", "type": "TXFBitBtn"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "excelapplication1": {"name": "ExcelApplication1", "type": "TExcelApplication"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "idedit": {"name": "idedit", "type": "TEdit"}, "kliidedit": {"name": "kliidedit", "type": "TEdit"}, "nameedit": {"name": "nameedit", "type": "TEdit"}, "label4": {"name": "Label4", "type": "TLabel"}, "pinedit": {"name": "pinedit", "type": "TEdit"}, "xfbitbtn5": {"name": "XFBitBtn5", "type": "TXFBitBtn"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "button1": {"name": "Button1", "type": "TButton"}, "numedit": {"name": "numedit", "type": "TEdit"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "fevents": {"name": "FEvents", "type": "ILawmoduleEvents"}}, {});
  U.init(async () => {
  });
  U.method("TLawmodule", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TLawmodule", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  await $.inherited(Self, "TLawmodule", "EventSinkChanged", [L0["eventsink"]], arguments);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TLawmodule", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TLawmodule", "Initialize", null, arguments);
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
  U.method("TLawmodule", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_AlignDisabled", async function Get_AlignDisabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignDisabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_AlignWithMargins", async function Get_AlignWithMargins(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignWithMargins"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_BorderWidth", async function Get_BorderWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Integer", [(await $.v(C, "BorderWidth"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_DockSite", async function Get_DockSite(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DockSite"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_ExplicitHeight", async function Get_ExplicitHeight(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitHeight"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_ExplicitLeft", async function Get_ExplicitLeft(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitLeft"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_ExplicitTop", async function Get_ExplicitTop(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitTop"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_ExplicitWidth", async function Get_ExplicitWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitWidth"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_MouseInClient", async function Get_MouseInClient(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "MouseInClient"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_ParentCustomHint", async function Get_ParentCustomHint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentCustomHint"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_ParentDoubleBuffered", async function Get_ParentDoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentDoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_PopupMode", async function Get_PopupMode(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PopupMode"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_ScreenSnap", async function Get_ScreenSnap(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ScreenSnap"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_SnapBuffer", async function Get_SnapBuffer(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "SnapBuffer"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_UseDockManager", async function Get_UseDockManager(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "UseDockManager"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TLawmodule", "ideditKeyPress", async function ideditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    {
      const $t1 = (await $.mv((await $.v(C, "datamod")), "Mainscrpt"));
      await $.wset([$t1], "Filter", "", C);
      if ($.truthy($.ne((await $.mv((await $.wv([$t1], "idedit", C, false)), "Text")), " "))) {
        await $.wset([$t1], "Filter", $.add($.add($.add("id = '", (await $.mv((await $.wv([$t1], "idedit", C, false)), "Text"))), ("*")), "'"), C);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TLawmodule", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TLawmodule", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLawmodule", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fltfil": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Datamod", (await $.mcall((await $.v(C, "TDatamod")), "Create", [Self])));
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod")), "filials")), "RecordCount")), 2))) {
    L0["fltfil"] = "";
  } else {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataSource_filial")), "DataSet")), "Open", []);
    await $.mset((await $.v(C, "DBLookupComboBox1")), "Enabled", true);
    await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", 0);
    L0["fltfil"] = $.add(" and branch =", (await $.call(C, "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "filials")), "FieldByName", ["id"])), "AsInteger"))])));
    { const $t2 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataMod")), "Main_court")), "SQL")), [30], L0["fltfil"]); if ($t2 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataMod")), "Main_court")), "SQL", $t2); } }
    { const $t3 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataMod")), "Mainscrpt")), "SQL")), [19], L0["fltfil"]); if ($t3 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataMod")), "Mainscrpt")), "SQL", $t3); } }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLawmodule", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "filter1": '', "filter2": '', "filter3": '', "filter4": '', "filter5": '', "filter6": '', "filter7": '', "filter8": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.mv((await $.v(C, "datamod")), "Mainscrpt"));
    if ($.truthy($.ne((await $.mv((await $.wv([$t4], "idedit", C, false)), "Text")), ""))) {
      await $.wset([$t4], "Filter1", $.add($.add($.add(" and  id like '", (await $.mv((await $.wv([$t4], "idedit", C, false)), "Text"))), "%"), "'"), { get: async () => L0["filter1"], set: async (v) => { L0["filter1"] = v; }, local: true });
    } else {
      await $.wset([$t4], "Filter1", "", { get: async () => L0["filter1"], set: async (v) => { L0["filter1"] = v; }, local: true });
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t4], "kliidedit", C, false)), "Text")), ""))) {
      await $.wset([$t4], "Filter2", $.add($.add($.add(" and  MUSTERIID like '", (await $.mv((await $.wv([$t4], "kliidedit", C, false)), "Text"))), "%"), "'"), { get: async () => L0["filter2"], set: async (v) => { L0["filter2"] = v; }, local: true });
    } else {
      await $.wset([$t4], "Filter2", "", { get: async () => L0["filter2"], set: async (v) => { L0["filter2"] = v; }, local: true });
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t4], "nameedit", C, false)), "Text")), ""))) {
      await $.wset([$t4], "Filter3", $.add($.add($.add(" and  upper(names) like  '", (await $.mv((await $.wv([$t4], "nameedit", C, false)), "Text"))), "%"), "'"), { get: async () => L0["filter3"], set: async (v) => { L0["filter3"] = v; }, local: true });
    } else {
      await $.wset([$t4], "Filter3", "", { get: async () => L0["filter3"], set: async (v) => { L0["filter3"] = v; }, local: true });
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t4], "pinedit", C, false)), "Text")), ""))) {
      await $.wset([$t4], "Filter4", $.add($.add(" and  pinkod = '", (await $.mv((await $.wv([$t4], "pinedit", C, false)), "Text"))), "'"), { get: async () => L0["filter4"], set: async (v) => { L0["filter4"] = v; }, local: true });
    } else {
      await $.wset([$t4], "Filter4", "", { get: async () => L0["filter4"], set: async (v) => { L0["filter4"] = v; }, local: true });
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t4], "numedit", C, false)), "Text")), ""))) {
      await $.wset([$t4], "Filter5", $.add($.add(" and  num = '", (await $.mv((await $.wv([$t4], "numedit", C, false)), "Text"))), "'"), { get: async () => L0["filter5"], set: async (v) => { L0["filter5"] = v; }, local: true });
    } else {
      await $.wset([$t4], "Filter5", "", { get: async () => L0["filter5"], set: async (v) => { L0["filter5"] = v; }, local: true });
    }
    if ($.truthy((await $.or_(($.eq((await $.mv((await $.wv([$t4], "DBLookupComboBox2", C, false)), "Text")), "Bğtğn statuslar")), async () => ($.eq((await $.mv((await $.wv([$t4], "DBLookupComboBox2", C, false)), "Text")), "")))))) {
      await $.wset([$t4], "Filter6", " ", { get: async () => L0["filter6"], set: async (v) => { L0["filter6"] = v; }, local: true });
    } else {
      await $.wset([$t4], "Filter6", $.add($.add("  and court_status = '", (await $.mv((await $.wv([$t4], "DBLookupComboBox2", C, false)), "Text"))), "'"), { get: async () => L0["filter6"], set: async (v) => { L0["filter6"] = v; }, local: true });
    }
    if ($.truthy((await $.or_(($.eq((await $.mv((await $.wv([$t4], "DBLookupComboBox3", C, false)), "Text")), "Bğtğn Operatorlar")), async () => ($.eq((await $.mv((await $.wv([$t4], "DBLookupComboBox3", C, false)), "Text")), "")))))) {
      await $.wset([$t4], "Filter8", "", { get: async () => L0["filter8"], set: async (v) => { L0["filter8"] = v; }, local: true });
    } else {
      await $.wset([$t4], "Filter8", $.add($.add("and  court_OPERS = '", (await $.mv((await $.wv([$t4], "DBLookupComboBox3", C, false)), "Text"))), "'"), { get: async () => L0["filter8"], set: async (v) => { L0["filter8"] = v; }, local: true });
    }
    if ($.truthy((await $.or_(($.eq((await $.mv((await $.wv([$t4], "DBLookupComboBox1", C, false)), "Text")), "Bğtğn statuslar")), async () => ($.eq((await $.mv((await $.wv([$t4], "DBLookupComboBox1", C, false)), "Text")), "")))))) {
      await $.wset([$t4], "Filter7", "", { get: async () => L0["filter7"], set: async (v) => { L0["filter7"] = v; }, local: true });
    } else {
      await $.wset([$t4], "Filter7", $.add($.add("and  COURT_LASTSTAT = '", (await $.mv((await $.wv([$t4], "DBLookupComboBox1", C, false)), "Text"))), "'"), { get: async () => L0["filter7"], set: async (v) => { L0["filter7"] = v; }, local: true });
    }
  }
  { const $t5 = await $.iset((await $.mv((await $.mv((await $.v(C, "datamod")), "Mainscrpt")), "sql")), [19], $.add($.add($.add($.add($.add($.add($.add(L0["filter1"], L0["filter2"]), L0["filter3"]), L0["filter4"]), L0["filter5"]), L0["filter6"]), L0["filter7"]), L0["filter8"])); if ($t5 !== undefined) { await $.mset((await $.mv((await $.v(C, "datamod")), "Mainscrpt")), "sql", $t5); } }
  await $.mset((await $.v(C, "memo1")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "datamod")), "Mainscrpt")), "sql")), "Text")));
  await $.mcall((await $.mv((await $.v(C, "datamod")), "Mainscrpt")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLawmodule", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLawmodule", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLawmodule", "DBGrid1DrawColumnCell", async function DBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "Asinteger")), 1))) {
    await $.mset((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Canvas")), "Brush")), "Color", (await $.v(C, "clyellow")));
    await $.stmt((await $.mcall((await $.v(C, "DBGrid1")), "DefaultDrawColumnCell", [L0["rect"], L0["datacol"], L0["column"], L0["state"]])));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["status"])), "Asinteger")), 3))) {
    await $.mset((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Canvas")), "Brush")), "Color", (await $.v(C, "clFuchsia")));
    await $.stmt((await $.mcall((await $.v(C, "DBGrid1")), "DefaultDrawColumnCell", [L0["rect"], L0["datacol"], L0["column"], L0["state"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TLawmodule", "DBGrid1KeyDown", async function DBGrid1KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_up"))))) {
    await $.mset((await $.v(C, "memo1")), "Visible", true);
  }
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_down"))))) {
    await $.mset((await $.v(C, "memo1")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TLawmodule", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": '', "sortposition": 0};
  await $.fixArgs(L0, ["column"]);
  L0["sortposition"] = 40;
  if ($.truthy((await $.or_(((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "IsEmpty"))), async () => ($.eq((await $.mv(L0["column"], "FieldName")), (await $.v(C, "EmptyStr")))))))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHandPoint")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t6 = (await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet"));
    try {
      await $.wset([$t6], "SortPosition", (await $.mcall((await $.mv((await $.mv((await $.wv([$t6], "DataMod", C, false)), "Mainscrpt")), "SQL")), "Add", [$.add("ORDER BY ", (await $.wv([$t6], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t6], "Refresh", [], C));
    } finally {
      { const $t7 = await $.iset((await $.mv((await $.mv((await $.wv([$t6], "DataMod", C, false)), "Mainscrpt")), "SQL")), [(await $.wv([$t6], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t6], "EmptyStr", C, false))); if ($t7 !== undefined) { await $.mset((await $.mv((await $.wv([$t6], "DataMod", C, false)), "Mainscrpt")), "SQL", $t7); } }
      await $.mset((await $.wv([$t6], "Screen", C, false)), "Cursor", (await $.wv([$t6], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TLawmodule", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLawmodule", "DBLookupCombo1KeyPress", async function DBLookupCombo1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    {
      const $t8 = (await $.mv((await $.v(C, "datamod")), "Mainscrpt"));
      await $.wset([$t8], "Filter", $.add($.add($.add("COURT_STATUS = '", (await $.mv((await $.wv([$t8], "DBLookupComboBox1", C, false)), "Text"))), ("*")), "'"), C);
      await $.mset((await $.mv((await $.wv([$t8], "datamod", C, false)), "Mainscrpt")), "Filtered", (await $.wv([$t8], "true", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TLawmodule", "DBLookupCombo2KeyPress", async function DBLookupCombo2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    {
      const $t9 = (await $.mv((await $.v(C, "datamod")), "Mainscrpt"));
      await $.wset([$t9], "Filter", $.add($.add($.add("COURT_LASTSTAT = '", (await $.mv((await $.wv([$t9], "DBLookupComboBox1", C, false)), "Text"))), ("*")), "'"), C);
      await $.mset((await $.mv((await $.wv([$t9], "datamod", C, false)), "Mainscrpt")), "Filtered", (await $.wv([$t9], "true", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TLawmodule", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLawmodule", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLawmodule", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TLawmodule", "MouseEnterEvent", async function MouseEnterEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseEnter", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLawmodule", "MouseLeaveEvent", async function MouseLeaveEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseLeave", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLawmodule", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLawmodule", "refreshbtnClick", async function refreshbtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "DataMod")), "Mainscrpt")), "Active")))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "Mainscrpt")), "Refresh", []);
  } else {
    await $.mset((await $.mv((await $.v(C, "datamod")), "Mainscrpt")), "Filter", "");
    if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "Filtrs"))]))))) {
      await $.set(C, "Filtrs", (await $.mcall((await $.v(C, "TFiltrs")), "Create", [null])));
    }
    await $.mcall((await $.mv((await $.v(C, "DataMod")), "Mainscrpt")), "open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLawmodule", "Set_AlignWithMargins", async function Set_AlignWithMargins(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AlignWithMargins", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TLawmodule", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TLawmodule", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TLawmodule", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TLawmodule", "Set_BorderWidth", async function Set_BorderWidth(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "BorderWidth", (await $.call(C, "TBorderWidth", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TLawmodule", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TLawmodule", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TLawmodule", "Set_DockSite", async function Set_DockSite(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DockSite", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TLawmodule", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TLawmodule", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TLawmodule", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TLawmodule", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TLawmodule", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "string", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TLawmodule", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TLawmodule", "Set_ParentCustomHint", async function Set_ParentCustomHint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentCustomHint", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TLawmodule", "Set_ParentDoubleBuffered", async function Set_ParentDoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentDoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TLawmodule", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TLawmodule", "Set_PopupMode", async function Set_PopupMode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PopupMode", (await $.call(C, "TPopupMode", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPopupMode"]});
  U.method("TLawmodule", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TLawmodule", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TLawmodule", "Set_ScreenSnap", async function Set_ScreenSnap(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ScreenSnap", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TLawmodule", "Set_SnapBuffer", async function Set_SnapBuffer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "SnapBuffer", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TLawmodule", "Set_UseDockManager", async function Set_UseDockManager(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "UseDockManager", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TLawmodule", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TLawmodule", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Court_status")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Court_status")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Court_laststat")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Court_laststat")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "court_opers")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "court_opers")), "Open", []);
  if ($.truthy((await $.mv((await $.v(C, "XFPanel2")), "Visible")))) {
    await $.mset((await $.v(C, "XFPanel2")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFPanel2")), "Visible", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLawmodule", "XFBitBtn2Click", async function XFBitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "CourtFrm"))]))))) {
    await $.set(C, "CourtFrm", (await $.mcall((await $.v(C, "TCourtFrm")), "Create", [null])));
  }
  await $.mcall((await $.v(C, "CourtFrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLawmodule", "XFBitBtn3Click", async function XFBitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sheet": null, "sheets": null, "ay": '', "il": '', "il_s": '', "k": '', "s": '', "ss": '', "st": '', "sc": '', "sd": '', "sf": '', "l": '', "val": '', "v": null, "openedxlscnt": 0, "b": 0, "a": 0, "i": 0, "j": 0, "w": 0, "v_bdate": 0, "v_edate": 0, "row": 0, "esasborc": 0, "faizborc": 0, "cemiesas": 0, "cemifaiz": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
  L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
  await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
  await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))])), "Portfel_Court.xlsx")])));
  try {
    { const $t11 = 100;
      L0["openedxlscnt"] = 1;
      let $t12 = true;
      for (;;) {
        if (!$t12) { L0["openedxlscnt"] = $.succ(L0["openedxlscnt"], 1); }
        $t12 = false;
        if (!($.ord(L0["openedxlscnt"]) <= $.ord($t11))) break;
        L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [L0["openedxlscnt"]])), "Worksheets")), ["sheet1"]));
        await $.tick();
      }
    }
  } catch ($t10) {
    $.rethrowControl($t10);
    $.handled($t10);
  }
  L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
  L0["a"] = 0;
  L0["i"] = 0;
  if ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "datamod")), "Main_court")), "Active"))))) {
    await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "close", []);
    await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "open", []);
  }
  await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "First", []);
  { const $t13 = $.sub((await $.mv((await $.mv((await $.v(C, "datamod")), "Main_court")), "RecordCount")), 1);
    L0["a"] = 0;
    let $t14 = true;
    for (;;) {
      if (!$t14) { L0["a"] = $.succ(L0["a"], 1); }
      $t14 = false;
      if (!($.ord(L0["a"]) <= $.ord($t13))) break;
      L0["esasborc"] = 0;
      L0["faizborc"] = 0;
      L0["cemiesas"] = 0;
      L0["cemifaiz"] = 0;
      L0["val"] = "AZN";
      { const $t15 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 1], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["rownum"])), "AsString"))); if ($t15 !== undefined) { await $.mset(L0["sheet"], "cells", $t15); } }
      { const $t16 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 2], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["credid"])), "AsString"))); if ($t16 !== undefined) { await $.mset(L0["sheet"], "cells", $t16); } }
      { const $t17 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 3], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["custid"])), "AsString"))); if ($t17 !== undefined) { await $.mset(L0["sheet"], "cells", $t17); } }
      { const $t18 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 4], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["PIN"])), "AsString"))); if ($t18 !== undefined) { await $.mset(L0["sheet"], "cells", $t18); } }
      { const $t19 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 5], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["names"])), "AsString"))); if ($t19 !== undefined) { await $.mset(L0["sheet"], "cells", $t19); } }
      { const $t20 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 6], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["COURT_AMMOUNT"])), "AsString"))); if ($t20 !== undefined) { await $.mset(L0["sheet"], "cells", $t20); } }
      { const $t21 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 7], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["COURT_STATUS"])), "AsString"))); if ($t21 !== undefined) { await $.mset(L0["sheet"], "cells", $t21); } }
      { const $t22 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 8], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["COURT_DATE_NUM"])), "AsString"))); if ($t22 !== undefined) { await $.mset(L0["sheet"], "cells", $t22); } }
      { const $t23 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 9], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["COURT_NAME"])), "AsString"))); if ($t23 !== undefined) { await $.mset(L0["sheet"], "cells", $t23); } }
      { const $t24 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 10], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["COURT_ACCEPTED_AMMOUNT"])), "AsString"))); if ($t24 !== undefined) { await $.mset(L0["sheet"], "cells", $t24); } }
      { const $t25 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 11], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["COURT_DESC"])), "AsString"))); if ($t25 !== undefined) { await $.mset(L0["sheet"], "cells", $t25); } }
      { const $t26 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 12], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["COURT_MANAGE"])), "AsString"))); if ($t26 !== undefined) { await $.mset(L0["sheet"], "cells", $t26); } }
      { const $t27 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 13], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["COURT_LASTSTAT"])), "AsString"))); if ($t27 !== undefined) { await $.mset(L0["sheet"], "cells", $t27); } }
      { const $t28 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 14], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["COURT_MEASURE"])), "AsString"))); if ($t28 !== undefined) { await $.mset(L0["sheet"], "cells", $t28); } }
      { const $t29 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 15], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["COURT_REPLACE"])), "AsString"))); if ($t29 !== undefined) { await $.mset(L0["sheet"], "cells", $t29); } }
      { const $t30 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 16], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["REPLACEMENT_COUNT"])), "AsString"))); if ($t30 !== undefined) { await $.mset(L0["sheet"], "cells", $t30); } }
      { const $t31 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 17], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["INVESTIGATION_ORG"])), "AsString"))); if ($t31 !== undefined) { await $.mset(L0["sheet"], "cells", $t31); } }
      { const $t32 = await $.iset((await $.mv(L0["sheet"], "cells")), [$.add(7, L0["i"]), 18], (await $.mv((await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "fieldbyname", ["INFOS"])), "AsString"))); if ($t32 !== undefined) { await $.mset(L0["sheet"], "cells", $t32); } }
      L0["i"] = $.add(L0["i"], 1);
      await $.mcall((await $.mv((await $.v(C, "datamod")), "Main_court")), "Next", []);
      await $.tick();
    }
  }
  { const $t33 = await $.iset((await $.mv((await $.v(C, "ExcelApplication1")), "Visible")), [0], true); if ($t33 !== undefined) { await $.mset((await $.v(C, "ExcelApplication1")), "Visible", $t33); } }
  await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLawmodule", "XFBitBtn4Click", async function XFBitBtn4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "Filtrs"))]))))) {
    await $.set(C, "Filtrs", (await $.mcall((await $.v(C, "TFiltrs")), "Create", [null])));
  }
  await $.mcall((await $.v(C, "Filtrs")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TLawmodule", "XFBitBtn5Click", async function XFBitBtn5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["SETT_GRANT"]])));
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "Settings"))]))))) {
    await $.set(C, "Settings", (await $.mcall((await $.v(C, "TSettings")), "Create", [null])));
  }
  await $.mcall((await $.v(C, "Settings")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
