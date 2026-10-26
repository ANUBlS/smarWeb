// Generated from Unit_FormADIF.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit_FormADIF", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "ProjectADIF_TLB", "StdVcl", "StdCtrls", "XFSCtrls", "ComCtrls", "ToolWin", "ExtCtrls", "Grids", "XDBGrids", "DBGridEhGrouping", "GridsEh", "DBGridEh", "Buttons", "Mask", "DBCtrlsEh", "DBCtrls", "DBGrids", "ComObj", "IniFiles", "ComServ", "UnitAdifData", "KretitXmlExpImpl", "UnitAdd_Edit", "Unit_interval", "Unit_accfile"]);
  const C = [U];
  U.defClass("TFormADIF", "TActiveForm", {"xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "müştərilər": {"name": "Müştərilər", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "hesablar": {"name": "Hesablar", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "maingrid": {"name": "MainGrid", "type": "TXDBGrid"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "tabsheet4": {"name": "TabSheet4", "type": "TTabSheet"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xfbitbtn2": {"name": "XFBitBtn2", "type": "TXFBitBtn"}, "xfbitbtn3": {"name": "XFBitBtn3", "type": "TXFBitBtn"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "button3": {"name": "Button3", "type": "TButton"}, "button4": {"name": "Button4", "type": "TButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "fevents": {"name": "FEvents", "type": "IFormADIFEvents"}}, {});
  U.init(async () => {
    U.var_("dey", false, "boolean");
    U.var_("f", null, "TextFile");
  });
  U.method("TFormADIF", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TFormADIF", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  await $.inherited(Self, "TFormADIF", "EventSinkChanged", [L0["eventsink"]], arguments);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TFormADIF", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TFormADIF", "Initialize", null, arguments);
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
  U.method("TFormADIF", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_AlignDisabled", async function Get_AlignDisabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignDisabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_AlignWithMargins", async function Get_AlignWithMargins(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignWithMargins"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_BorderWidth", async function Get_BorderWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Integer", [(await $.v(C, "BorderWidth"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_DockSite", async function Get_DockSite(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DockSite"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_ExplicitHeight", async function Get_ExplicitHeight(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitHeight"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_ExplicitLeft", async function Get_ExplicitLeft(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitLeft"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_ExplicitTop", async function Get_ExplicitTop(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitTop"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_ExplicitWidth", async function Get_ExplicitWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitWidth"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_MouseInClient", async function Get_MouseInClient(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "MouseInClient"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_ParentCustomHint", async function Get_ParentCustomHint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentCustomHint"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_ParentDoubleBuffered", async function Get_ParentDoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentDoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_PopupMode", async function Get_PopupMode(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PopupMode"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_ScreenSnap", async function Get_ScreenSnap(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ScreenSnap"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_SnapBuffer", async function Get_SnapBuffer(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "SnapBuffer"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_UseDockManager", async function Get_UseDockManager(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "UseDockManager"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormADIF", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TFormADIF", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormADIF", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Adif_Data", (await $.mcall((await $.v(C, "tAdif_Data")), "Create", [Self])));
  await $.set(C, "Formcust_file", (await $.mcall((await $.v(C, "TFormcust_file")), "create", [Self])));
  await $.set(C, "FormAcc_file", (await $.mcall((await $.v(C, "TFormAcc_file")), "create", [Self])));
  await $.set(C, "Form_Interval", (await $.mcall((await $.v(C, "TForm_Interval")), "create", [Self])));
  await $.set(C, "Kredit", (await $.mcall((await $.v(C, "TKredit")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormADIF", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "kredit")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("WriteString", async function WriteString(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => (await $.v(C, "f")), async ($t1) => { await $.set(C, "f", $t1); }), (await $.v(C, "FilePAth"))])));
  await $.stmt((await $.call(C, "Append", [$.ref(async () => (await $.v(C, "f")), async ($t2) => { await $.set(C, "f", $t2); })])));
  await $.stmt((await $.call(C, "Write", [(await $.v(C, "f")), (await $.call(C, "UTF8Encode", [(await $.call(C, "StringReplace", [L0["s"], $.add("\r", "\n"), "", [(await $.v(C, "rfReplaceAll"))]]))]))])));
  await $.stmt((await $.call(C, "Closefile", [$.ref(async () => (await $.v(C, "f")), async ($t3) => { await $.set(C, "f", $t3); })])));
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFormADIF", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormADIF", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "filename": '', "dir": '', "value1": '', "value2": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "InputQuery", ["Xml Fayl", "XML FAylın adını daxil edin", $.ref(async () => L0["value1"], async ($t4) => { L0["value1"] = $t4; })])));
  if ($.truthy($.not((await $.call(C, "DirectoryExists", ["C:\\ADIF\\REPORT\\"]))))) {
    await $.stmt((await $.call(C, "MKDIR", ["C:\\ADIF\\REPORT\\"])));
  }
  L0["dir"] = "C:\\ADIF\\REPORT\\";
  L0["filename"] = $.add($.add(L0["dir"], L0["value1"]), ".xml");
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => (await $.v(C, "f")), async ($t5) => { await $.set(C, "f", $t5); }), L0["filename"]])));
  await $.stmt((await $.call(C, "Rewrite", [$.ref(async () => (await $.v(C, "f")), async ($t6) => { await $.set(C, "f", $t6); })])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>"])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), "<BANK>"])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_CODE>", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankmain")), "FieldByName", ["kod_bfil"])), "AsString"))), "</BANK_CODE>")])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_NAME>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankmain")), "FieldByName", ["az_name"])), "AsString"))]))), "</BANK_NAME>")])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_CITY>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankmain")), "FieldByName", ["seher"])), "AsString"))]))), "</BANK_CITY>")])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_ADRESS>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankmain")), "FieldByName", ["adress"])), "AsString"))]))), "</BANK_ADRESS>")])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_ZIP_CODE>", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankmain")), "FieldByName", ["post_in"])), "AsString"))), "</BANK_ZIP_CODE>")])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_LICENSE_NO>", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankmain")), "FieldByName", ["license_no"])), "AsString"))), "</BANK_LICENSE_NO>")])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_LICENSE_DATE>", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankmain")), "FieldByName", ["license_date"])), "AsString"))), "</BANK_LICENSE_DATE>")])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_PHONE>", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankmain")), "FieldByName", ["tel"])), "AsString"))), "</BANK_PHONE>")])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_FAX>", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankmain")), "FieldByName", ["fax"])), "AsString"))), "</BANK_FAX>")])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_Email>", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankmain")), "FieldByName", ["email"])), "AsString"))), "</BANK_Email>")])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_WEBSITE>", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankmain")), "FieldByName", ["link"])), "AsString"))), "</BANK_WEBSITE>")])));
  await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "CloseAll", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "sql")), "clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "SQL")), "Add", ["select * from bankinfo_adif where kod_b=1"])));
  await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "open", []);
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<EXECUTOR_CN>", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "FieldByName", ["cn"])), "AsString"))), "</EXECUTOR_CN>")])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<EXECUTOR_NAME>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "FieldByName", ["name"])), "AsString"))]))), "</EXECUTOR_NAME>")])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<EXECUTOR_SURNAME>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "FieldByName", ["surname"])), "AsString"))]))), "</EXECUTOR_SURNAME>")])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<EXECUTOR_FATHERS_NAME>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "FieldByName", ["fname"])), "AsString"))]))), "</EXECUTOR_FATHERS_NAME>")])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), "<OWNERS>"])));
  await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "CloseAll", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "sql")), "clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "SQL")), "Add", ["select * from bankinfo_adif where kod_b=2"])));
  await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "First", []);
  while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "Eof"))))) {
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), "<OWNER>"])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_OWNERS_CN>", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "FieldByName", ["cn"])), "AsString"))), "</BANK_OWNERS_CN>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_OWNERS_NAME>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "FieldByName", ["name"])), "AsString"))]))), "</BANK_OWNERS_NAME>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_OWNERS_SURNAME>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "FieldByName", ["surname"])), "AsString"))]))), "</BANK_OWNERS_SURNAME>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_OWNERS_FATHERS_NAME>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "FieldByName", ["fname"])), "AsString"))]))), "</BANK_OWNERS_FATHERS_NAME>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), "</OWNER>"])));
    await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "Next", []);
    await $.tick();
  }
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), "</OWNERS>"])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), "<GOVS>"])));
  await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "CloseAll", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "sql")), "clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "SQL")), "Add", ["select * from bankinfo_adif where kod_b=3"])));
  await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "First", []);
  while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "Eof"))))) {
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), "<GOV>"])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_GOV_CN>", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "FieldByName", ["cn"])), "AsString"))), "</BANK_GOV_CN>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_GOV_NAME>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "FieldByName", ["name"])), "AsString"))]))), "</BANK_GOV_NAME>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_GOV_SURNAME>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "FieldByName", ["surname"])), "AsString"))]))), "</BANK_GOV_SURNAME>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_GOV_FATHERS_NAME>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "FieldByName", ["fname"])), "AsString"))]))), "</BANK_GOV_FATHERS_NAME>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), "</GOV>"])));
    await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "Next", []);
    await $.tick();
  }
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), "</GOVS>"])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), "<AUDITS>"])));
  await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "CloseAll", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "sql")), "clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "SQL")), "Add", ["select * from bankinfo_adif where kod_b=4"])));
  await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "First", []);
  while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "Eof"))))) {
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), "<AUDIT>"])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_AUDIT_CN>", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "FieldByName", ["cn"])), "AsString"))), "</BANK_AUDIT_CN>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_AUDIT_NAME>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "FieldByName", ["name"])), "AsString"))]))), "</BANK_AUDIT_NAME>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_AUDIT_SURNAME>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "FieldByName", ["surname"])), "AsString"))]))), "</BANK_AUDIT_SURNAME>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_AUDIT_FATHERS_NAME>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "FieldByName", ["fname"])), "AsString"))]))), "</BANK_AUDIT_FATHERS_NAME>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), "</AUDIT>"])));
    await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "Next", []);
    await $.tick();
  }
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), "</AUDITS>"])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), "<COMMITES>"])));
  await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "CloseAll", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "sql")), "clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "SQL")), "Add", ["select * from bankinfo_adif where kod_b=5"])));
  await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "First", []);
  while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "Eof"))))) {
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), "<COMMITE>"])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_COMMITE_CN>", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "FieldByName", ["cn"])), "AsString"))), "</BANK_COMMITE_CN>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_COMMITE_NAME>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "FieldByName", ["name"])), "AsString"))]))), "</BANK_COMMITE_NAME>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_COMMITE_SURNAME>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "FieldByName", ["surname"])), "AsString"))]))), "</BANK_COMMITE_SURNAME>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BANK_COMMITE_FATHERS_NAME>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "FieldByName", ["fname"])), "AsString"))]))), "</BANK_COMMITE_FATHERS_NAME>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), "</COMMITE>"])));
    await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "Next", []);
    await $.tick();
  }
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), "</COMMITES>"])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), "<BRANCHS>"])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<ROWCOUNT>", (await $.call(C, "inttostr", [(await $.mv((await $.mv((await $.v(C, "Adif_Data")), "bnkdata")), "RecordCount"))]))), "</ROWCOUNT>")])));
  await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bnkdata")), "First", []);
  while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "Adif_Data")), "bnkdata")), "Eof"))))) {
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), "<BRANCH>"])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BRANCH_CODE>", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bnkdata")), "FieldByName", ["kod_bfil"])), "AsString"))), "</BRANCH_CODE>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BRANCH_LISENCE_CODE>", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bnkdata")), "FieldByName", ["license_no"])), "AsString"))), "</BRANCH_LISENCE_CODE>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BRANCH_NAME>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bnkdata")), "FieldByName", ["AZ_NAME"])), "AsString"))]))), "</BRANCH_NAME>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BRANCH_CITY>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bnkdata")), "FieldByName", ["seher"])), "AsString"))]))), "</BRANCH_CITY>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BRANCH_ADRESS>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bnkdata")), "FieldByName", ["adress"])), "AsString"))]))), "</BRANCH_ADRESS>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BRANCH_ZIP_CODE>", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bnkdata")), "FieldByName", ["post_in"])), "AsString"))), "</BRANCH_ZIP_CODE>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BRANCH_PHONE>", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bnkdata")), "FieldByName", ["TEL"])), "AsString"))), "</BRANCH_PHONE>")])));
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BRANCH_PHONE>", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bnkdata")), "FieldByName", ["email"])), "AsString"))), "</BRANCH_PHONE>")])));
    await $.mcall((await $.mv((await $.v(C, "adif_Data")), "bankdata")), "CloseAll", []);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "sql")), "clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "SQL")), "Add", ["select * from bankinfo_adif where kod_b=6"])));
    await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "open", []);
    await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "First", []);
    while ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "Eof"))))) {
      await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BRANCH_DIRECTOR_CN>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bnkdata")), "FieldByName", ["NAME"])), "AsString"))]))), "</BRANCH_ADRESS>")])));
      await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BRANCH_DIRECTOR_CN>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bnkdata")), "FieldByName", ["NAME"])), "AsString"))]))), "</BRANCH_ADRESS>")])));
      await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BRANCH_DIRECTOR_CN>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bnkdata")), "FieldByName", ["NAME"])), "AsString"))]))), "</BRANCH_ADRESS>")])));
      await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), $.add($.add("<BRANCH_DIRECTOR_CN>", (await $.call(C, "UTF8String", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bnkdata")), "FieldByName", ["NAME"])), "AsString"))]))), "</BRANCH_ADRESS>")])));
      await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bankdata")), "Next", []);
      await $.tick();
    }
    await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), "</BRANCH>"])));
    await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "bnkdata")), "neXT", []);
    await $.tick();
  }
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), "</BRANCHS>"])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), "</BANK>"])));
  await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => (await $.v(C, "f")), async ($t7) => { await $.set(C, "f", $t7); })])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormADIF", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormADIF", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormADIF", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormADIF", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormADIF", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormADIF", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TFormADIF", "MouseEnterEvent", async function MouseEnterEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseEnter", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormADIF", "MouseLeaveEvent", async function MouseLeaveEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseLeave", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormADIF", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormADIF", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TFormADIF", "Set_AlignWithMargins", async function Set_AlignWithMargins(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AlignWithMargins", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormADIF", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormADIF", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormADIF", "Set_BorderWidth", async function Set_BorderWidth(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "BorderWidth", (await $.call(C, "TBorderWidth", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TFormADIF", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TFormADIF", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TFormADIF", "Set_DockSite", async function Set_DockSite(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DockSite", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormADIF", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormADIF", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormADIF", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormADIF", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TFormADIF", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "string", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TFormADIF", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormADIF", "Set_ParentCustomHint", async function Set_ParentCustomHint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentCustomHint", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormADIF", "Set_ParentDoubleBuffered", async function Set_ParentDoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentDoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormADIF", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TFormADIF", "Set_PopupMode", async function Set_PopupMode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PopupMode", (await $.call(C, "TPopupMode", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPopupMode"]});
  U.method("TFormADIF", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TFormADIF", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormADIF", "Set_ScreenSnap", async function Set_ScreenSnap(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ScreenSnap", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormADIF", "Set_SnapBuffer", async function Set_SnapBuffer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "SnapBuffer", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TFormADIF", "Set_UseDockManager", async function Set_UseDockManager(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "UseDockManager", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormADIF", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TFormADIF", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "dey")), true))) {
    await $.mcall((await $.v(C, "Formcust_file")), "ShowModal", []);
  } else {
    await $.stmt((await $.call(C, "Showmessage", ["  Heçbir məlumat yoxdu   ..!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormADIF", "XFBitBtn2Click", async function XFBitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a1": '', "a2": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Form_Interval")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormADIF", "XFBitBtn3Click", async function XFBitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormAcc_file")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormADIF", "XFButton3Click", async function XFButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "dey", true);
  await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "ods_cust")), "Open", []);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "Adif_Data")), "ods_cust")), "RecordCount")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "ods_cust")), "refresh", []);
    await $.mcall((await $.mv((await $.v(C, "Adif_Data")), "ods_cust")), "first", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
