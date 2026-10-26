// Generated from CreditsManagerForConstructionImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CreditsManagerForConstructionImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "CreditManagerConstructions_TLB", "StdVcl", "ExtCtrls", "ComCtrls", "ToolWin", "Grids", "DBGrids", "ActnList", "Menus", "ImgList", "OracleData", "oracle", "db", "Buttons", "StdCtrls", "DBViewComboBox", "DBCtrlsEh", "DBLookupEh", "CMExcelExport", "ComObj", "ComServ", "DatModConstructionImpl", "ContractAddEditImpl", "SettingsUnit", "PaymentPlaneMgrUnit", "OrderMgrUnit", "CloseContractUnit", "ExpiresPaymentsReportUnit", "Interestimpl", "BookMarkAddEditFormImpl", "BookMarkSetupFormImpl", "WReportImpl", "DescriptionImpl", "AReportImpl"]);
  const C = [U];
  U.defClass("TCreditsManagerForConstruction", "TActiveForm", {"panel3": {"name": "Panel3", "type": "TPanel"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "actnaddcontract": {"name": "ActnAddContract", "type": "TAction"}, "actneditcontract": {"name": "ActnEditContract", "type": "TAction"}, "actnclosecontract": {"name": "ActnCloseContract", "type": "TAction"}, "actnrefresh": {"name": "ActnRefresh", "type": "TAction"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "actnsettings": {"name": "ActnSettings", "type": "TAction"}, "actnoperations": {"name": "ActnOperations", "type": "TAction"}, "statusimages": {"name": "StatusImages", "type": "TImageList"}, "filterpanel": {"name": "FilterPanel", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "currencyviewer": {"name": "CurrencyViewer", "type": "TDBViewComboBox"}, "checkboxentrance": {"name": "Checkboxentrance", "type": "TCheckBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbviewcombobox1": {"name": "DBViewComboBox1", "type": "TDBViewComboBox"}, "checkboxbuilding": {"name": "CheckBoxBuilding", "type": "TCheckBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "cobcompany": {"name": "CoBCompany", "type": "TDBViewComboBox"}, "checkboxcompany": {"name": "CheckBoxCompany", "type": "TCheckBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "dbviewcombobox3": {"name": "DBViewComboBox3", "type": "TDBViewComboBox"}, "checkboxflats": {"name": "CheckBoxFlats", "type": "TCheckBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "dbviewcombobox4": {"name": "DBViewComboBox4", "type": "TDBViewComboBox"}, "checkboxfilials": {"name": "CheckBoxFilials", "type": "TCheckBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panelsearch": {"name": "Panelsearch", "type": "TGroupBox"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "editcontnum": {"name": "Editcontnum", "type": "TEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "editaccno": {"name": "EditACCNO", "type": "TEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "editcustname": {"name": "EditCUSTNAME", "type": "TEdit"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "editcreditscreditamount": {"name": "EditCreditsCREDITAMOUNT", "type": "TEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "editclosedate": {"name": "EditClosedate", "type": "TEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "editopendate": {"name": "Editopendate", "type": "TEdit"}, "actionlist2": {"name": "ActionList2", "type": "TActionList"}, "actnfilter": {"name": "ActnFilter", "type": "TAction"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "actnfilter1": {"name": "ActnFilter1", "type": "TMenuItem"}, "actnpaymentplane": {"name": "ActnPaymentPlane", "type": "TAction"}, "n5": {"name": "N5", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "actnsearchpanel": {"name": "ActnSearchPanel", "type": "TAction"}, "n9": {"name": "N9", "type": "TMenuItem"}, "n10": {"name": "N10", "type": "TMenuItem"}, "actnsearch": {"name": "ActnSearch", "type": "TAction"}, "n11": {"name": "N11", "type": "TMenuItem"}, "commongrid": {"name": "CommonGrid", "type": "TDBGrid"}, "n12": {"name": "N12", "type": "TMenuItem"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "mqavilapsazlanmas1": {"name": "Mqavilapsazlanmas1", "type": "TMenuItem"}, "mqavilap2": {"name": "Mqavilap2", "type": "TMenuItem"}, "hesabat1": {"name": "Hesabat1", "type": "TMenuItem"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "yinatnsazlanmas1": {"name": "yinatnsazlanmas1", "type": "TMenuItem"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "mqavildnimtina1": {"name": "Mqavildnimtina1", "type": "TMenuItem"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "dbviewcombobox2": {"name": "DBViewComboBox2", "type": "TDBViewComboBox"}, "checkboxusers": {"name": "CheckboxUsers", "type": "TCheckBox"}, "radiogrpcont": {"name": "RadioGrpCont", "type": "TRadioGroup"}, "gecikmlrbaxmaq1": {"name": "Gecikmlrbaxmaq1", "type": "TMenuItem"}, "frdidnicdvli1": {"name": "Frdidnicdvli1", "type": "TMenuItem"}, "fevents": {"name": "FEvents", "type": "ICreditsManagerForConstructionEvents"}}, {});
  U.init(async () => {
    U.var_("addupd", 0, "integer");
  });
  U.method("TCreditsManagerForConstruction", "SafeRefresh", async function SafeRefresh(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "saveplace": null};
  {
    const $t1 = (await $.mv((await $.v(C, "DatModConstruction")), "Credits"));
    await $.wset([$t1], "SavePlace", (await $.wv([$t1], "GetBookmark", C, false)), { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true });
    await $.stmt($.wcall([$t1], "Refresh", [], C));
    try {
      await $.stmt((await $.wcall([$t1], "GotoBookmark", [(await $.wv([$t1], "SavePlace", { get: async () => L0["saveplace"], set: async (v) => { L0["saveplace"] = v; }, local: true }, false))], C)));
    } catch ($t2) {
      $.rethrowControl($t2);
      $.handled($t2);
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCreditsManagerForConstruction", "Get_CreditID", async function Get_CreditID(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Credits")), "FieldByName", ["ID"])), "AsInteger"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCreditsManagerForConstruction", "Get_FlatID", async function Get_FlatID(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Credits")), "FieldByName", ["FLATID"])), "AsInteger"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCreditsManagerForConstruction", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TCreditsManagerForConstruction", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TCreditsManagerForConstruction", "Frdidnicdvli1Click", async function Frdidnicdvli1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "reportfrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TCreditsManagerForConstruction", "Initialize", null, arguments);
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
  U.method("TCreditsManagerForConstruction", "Gecikmlrbaxmaq1Click", async function Gecikmlrbaxmaq1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "ExpiresPaymentsForm"));
    await $.mcall((await $.wv([$t3], "Credits", C, false)), "Close", []);
    { const $t4 = await $.iset((await $.mv((await $.wv([$t3], "Credits", C, false)), "SQL")), [6], $.add($.add($.add("and cont.contnum=", "'"), (await $.mv((await $.mcall((await $.mv((await $.wv([$t3], "DatModConstruction", C, false)), "Credits")), "FieldByName", ["contnum"])), "AsString"))), "'")); if ($t4 !== undefined) { await $.mset((await $.wv([$t3], "Credits", C, false)), "SQL", $t4); } }
    await $.mcall((await $.wv([$t3], "Credits", C, false)), "Open", []);
  }
  await $.mcall((await $.v(C, "ExpiresPaymentsForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCreditsManagerForConstruction", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCreditsManagerForConstruction", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCreditsManagerForConstruction", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCreditsManagerForConstruction", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCreditsManagerForConstruction", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCreditsManagerForConstruction", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCreditsManagerForConstruction", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCreditsManagerForConstruction", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCreditsManagerForConstruction", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCreditsManagerForConstruction", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCreditsManagerForConstruction", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCreditsManagerForConstruction", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCreditsManagerForConstruction", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCreditsManagerForConstruction", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCreditsManagerForConstruction", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCreditsManagerForConstruction", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCreditsManagerForConstruction", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCreditsManagerForConstruction", "Hesabat1Click", async function Hesabat1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Hesabat")), "Open", []);
  await $.mcall((await $.v(C, "ExcelExport")), "Connect", []);
  await $.stmt((await $.mcall((await $.v(C, "ExcelExport")), "ExportDataset", [(await $.mv((await $.v(C, "DatModConstruction")), "Hesabat")), "gg", true])));
  await $.mcall((await $.v(C, "ExcelExport")), "Disconnect", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCreditsManagerForConstruction", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TCreditsManagerForConstruction", "Mqavilap2Click", async function Mqavilap2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "DatModConstruction")), "Credits")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Heç bir müqavilə seçilməyib"])));
    return L0.result;
  } else {
    await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "cc_bookmarkDataSet")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "cc_bookmarkDataSet")), "SetVariable", ["ContractID", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CommonGrid")), "DataSource")), "DataSet")), "fieldbyname", ["contnum"])), "asinteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "cc_bookmarkDataSet")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Templates")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Templates")), "Open", []);
    await $.set(C, "WReport", (await $.mcall((await $.v(C, "TWReport")), "Create", [Self])));
    await $.mcall((await $.v(C, "WReport")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "Mqavilapsazlanmas1Click", async function Mqavilapsazlanmas1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "BookMarkSetupForm", (await $.mcall((await $.v(C, "TBookMarkSetupForm")), "Create", [Self])));
  await $.mcall((await $.v(C, "BookMarkSetupForm")), "Showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "Mqavildnimtina1Click", async function Mqavildnimtina1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Müqavilədən imtina etmək istəyirsinizmi?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t5 = (await $.v(C, "DatModConstruction"));
      const $t6 = (await $.wv([$t5], "sbcm_construction", C, false));
      await $.stmt((await $.wcall([$t5, $t6], "CallProcedure", ["ContRefusal", ["p_ID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t5, $t6], "DatModConstruction", C, false)), "Credits")), "FieldByName", ["FLATID"])), "AsInteger"))]], C)));
    }
    await $.stmt($.call(C, "SafeRefresh", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "RadioGrpContClick", async function RadioGrpContClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "DatModConstruction"));
    if ($.truthy($.eq((await $.mv((await $.wv([$t7], "RadioGrpCont", C, false)), "ItemIndex")), 0))) {
      await $.mcall((await $.wv([$t7], "Credits", C, false)), "Close", []);
      { const $t8 = await $.iset((await $.mv((await $.wv([$t7], "Credits", C, false)), "SQL")), [8], ""); if ($t8 !== undefined) { await $.mset((await $.wv([$t7], "Credits", C, false)), "SQL", $t8); } }
      { const $t9 = await $.iset((await $.mv((await $.wv([$t7], "Credits", C, false)), "SQL")), [8], " and c.closedate is null "); if ($t9 !== undefined) { await $.mset((await $.wv([$t7], "Credits", C, false)), "SQL", $t9); } }
      await $.mcall((await $.wv([$t7], "Credits", C, false)), "Open", []);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t7], "RadioGrpCont", C, false)), "ItemIndex")), 1))) {
      await $.mcall((await $.wv([$t7], "Credits", C, false)), "Close", []);
      { const $t10 = await $.iset((await $.mv((await $.wv([$t7], "Credits", C, false)), "SQL")), [8], ""); if ($t10 !== undefined) { await $.mset((await $.wv([$t7], "Credits", C, false)), "SQL", $t10); } }
      { const $t11 = await $.iset((await $.mv((await $.wv([$t7], "Credits", C, false)), "SQL")), [8], " and c.closedate is not null "); if ($t11 !== undefined) { await $.mset((await $.wv([$t7], "Credits", C, false)), "SQL", $t11); } }
      await $.mcall((await $.wv([$t7], "Credits", C, false)), "Open", []);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t7], "RadioGrpCont", C, false)), "ItemIndex")), 2))) {
      await $.mcall((await $.wv([$t7], "Credits", C, false)), "Close", []);
      { const $t12 = await $.iset((await $.mv((await $.wv([$t7], "Credits", C, false)), "SQL")), [8], ""); if ($t12 !== undefined) { await $.mset((await $.wv([$t7], "Credits", C, false)), "SQL", $t12); } }
      { const $t13 = await $.iset((await $.mv((await $.wv([$t7], "Credits", C, false)), "SQL")), [8], " and c.closedate is  null and f.buyer is null"); if ($t13 !== undefined) { await $.mset((await $.wv([$t7], "Credits", C, false)), "SQL", $t13); } }
      await $.mcall((await $.wv([$t7], "Credits", C, false)), "Open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCreditsManagerForConstruction", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCreditsManagerForConstruction", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TCreditsManagerForConstruction", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCreditsManagerForConstruction", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TCreditsManagerForConstruction", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TCreditsManagerForConstruction", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCreditsManagerForConstruction", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCreditsManagerForConstruction", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCreditsManagerForConstruction", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCreditsManagerForConstruction", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCreditsManagerForConstruction", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCreditsManagerForConstruction", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCreditsManagerForConstruction", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TCreditsManagerForConstruction", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCreditsManagerForConstruction", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCreditsManagerForConstruction", "strtr1Click", async function strtr1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Panelsearch")), "Visible", $.not((await $.mv((await $.v(C, "Panelsearch")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DatModConstruction", (await $.mcall((await $.v(C, "TDatModConstruction")), "Create", [Self])));
  await $.set(C, "ReportFrm", (await $.mcall((await $.v(C, "TReportFrm")), "create", [Self])));
  await $.set(C, "AddEditContractForm", (await $.mcall((await $.v(C, "TAddEditContractForm")), "Create", [Self])));
  await $.set(C, "OrderForm", (await $.mcall((await $.v(C, "TOrderForm")), "Create", [Self])));
  await $.set(C, "ExpiresPaymentsForm", (await $.mcall((await $.v(C, "TExpiresPaymentsForm")), "create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Credits")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Credits")), "SetVariable", ["TITLE", "ROWNUM"])));
  await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Credits")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "ActnAddContractExecute", async function ActnAddContractExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "addupd", 1);
  {
    const $t14 = (await $.v(C, "DatModConstruction"));
    const $t15 = (await $.wv([$t14], "AddEditContractForm", C, false));
    {
      const $t16 = (await $.wv([$t14, $t15], "CreditPurpose", C, false));
      if ($.truthy((await $.wv([$t14, $t15, $t16], "Active", C, false)))) {
        await $.stmt($.wcall([$t14, $t15, $t16], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t14, $t15, $t16], "SetVariable", ["CRDID", 0], C)));
      await $.stmt($.wcall([$t14, $t15, $t16], "Open", [], C));
      await $.mset((await $.wcall([$t14, $t15, $t16], "FieldByname", ["INTERESTRATE"], C)), "AsFloat", 0);
      await $.stmt($.wcall([$t14, $t15, $t16], "Insert", [], C));
      await $.mset((await $.wv([$t14, $t15, $t16], "DTPOpenDate", C, false)), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14, $t15, $t16], "DatModConstruction", C, false)), "sysdat")), "fieldbyname", ["tek_dat"])), "asdatetime")));
      await $.mset((await $.wv([$t14, $t15, $t16], "DTPCloseDate", C, false)), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14, $t15, $t16], "DatModConstruction", C, false)), "sysdat")), "fieldbyname", ["tek_dat"])), "asdatetime")));
    }
    await $.mcall((await $.wv([$t14, $t15], "Customers", C, false)), "Refresh", []);
    await $.mset((await $.wv([$t14, $t15], "BranchCBEh", C, false)), "KeyValue", 0);
    await $.mset((await $.wv([$t14, $t15], "DBLookupComboboxEh5", C, false)), "KeyValue", 0);
    await $.mset((await $.wv([$t14, $t15], "Edit6", C, false)), "text", "0");
    await $.mset((await $.wv([$t14, $t15], "Edit1", C, false)), "text", "0");
    await $.mset((await $.wv([$t14, $t15], "Edit2", C, false)), "text", "0");
    await $.mset((await $.wv([$t14, $t15], "Edit3", C, false)), "text", "0");
    await $.mset((await $.wv([$t14, $t15], "Edit4", C, false)), "text", "0");
    await $.mset((await $.wv([$t14, $t15], "Edit5", C, false)), "text", "0");
    await $.mset((await $.mcall((await $.mv((await $.mv((await $.wv([$t14, $t15], "DBNumberEditEh3", C, false)), "DataSource")), "DataSet")), "FieldByName", ["INITIALAMOUNT"])), "AsFloat", 0);
    await $.stmt($.wcall([$t14, $t15], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "ActnEditContractExecute", async function ActnEditContractExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "addupd", 2);
  {
    const $t17 = (await $.v(C, "DatModConstruction"));
    const $t18 = (await $.wv([$t17], "CreditPurpose", C, false));
    if ($.truthy((await $.wv([$t17, $t18], "active", C, false)))) {
      await $.stmt($.wcall([$t17, $t18], "CloseAll", [], C));
    }
    await $.stmt($.wcall([$t17, $t18], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t17, $t18], "SetVariable", ["CRDID", (await $.wv([$t17, $t18], "Get_CreditID", C, false))], C)));
    await $.stmt($.wcall([$t17, $t18], "Open", [], C));
    await $.stmt($.wcall([$t17, $t18], "Edit", [], C));
    {
      const $t19 = (await $.wv([$t17, $t18], "AddEditContractForm", C, false));
      await $.mset((await $.wv([$t17, $t18, $t19], "DTPOpenDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t17, $t18, $t19], "FieldByName", ["opendate"], C)), "asdatetime")));
      await $.mset((await $.wv([$t17, $t18, $t19], "DTPCloseDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t17, $t18, $t19], "FieldByName", ["expdate"], C)), "asdatetime")));
      await $.mcall((await $.wv([$t17, $t18, $t19], "BldeditDataSet", C, false)), "CloseAll", []);
      await $.stmt((await $.mcall((await $.wv([$t17, $t18, $t19], "BldeditDataSet", C, false)), "SetVariable", ["id", (await $.mv((await $.wcall([$t17, $t18, $t19], "fieldbyname", ["FLATID"], C)), "asinteger"))])));
      await $.mcall((await $.wv([$t17, $t18, $t19], "BldeditDataSet", C, false)), "open", []);
      {
        const $t20 = (await $.wv([$t17, $t18, $t19], "AddEditContractForm", C, false));
        await $.mset((await $.wv([$t17, $t18, $t19, $t20], "Edit6", C, false)), "text", (await $.wcall([$t17, $t18, $t19, $t20], "floattostr", [(await $.mv((await $.mcall((await $.wv([$t17, $t18, $t19, $t20], "BldeditDataSet", C, false)), "FieldByName", ["PRICEGEN"])), "AsFloat"))], C)));
        await $.mset((await $.wv([$t17, $t18, $t19, $t20], "Edit1", C, false)), "text", (await $.mv((await $.mcall((await $.wv([$t17, $t18, $t19, $t20], "BldeditDataSet", C, false)), "FieldByName", ["BLD_NAME"])), "AsString")));
        await $.mset((await $.wv([$t17, $t18, $t19, $t20], "Edit2", C, false)), "text", (await $.mv((await $.mcall((await $.wv([$t17, $t18, $t19, $t20], "BldeditDataSet", C, false)), "FieldByName", ["ENTRANCE"])), "AsString")));
        await $.mset((await $.wv([$t17, $t18, $t19, $t20], "Edit3", C, false)), "text", (await $.mv((await $.mcall((await $.wv([$t17, $t18, $t19, $t20], "BldeditDataSet", C, false)), "FieldByName", ["FLATNUMBER"])), "AsString")));
        await $.mset((await $.wv([$t17, $t18, $t19, $t20], "Edit4", C, false)), "text", (await $.wcall([$t17, $t18, $t19, $t20], "floattostr", [(await $.mv((await $.mcall((await $.wv([$t17, $t18, $t19, $t20], "BldeditDataSet", C, false)), "FieldByName", ["AREA"])), "AsFloat"))], C)));
        await $.mset((await $.wv([$t17, $t18, $t19, $t20], "Edit5", C, false)), "text", (await $.wcall([$t17, $t18, $t19, $t20], "inttostr", [(await $.mv((await $.mcall((await $.wv([$t17, $t18, $t19, $t20], "BldeditDataSet", C, false)), "FieldByName", ["ROOMS"])), "AsInteger"))], C)));
        await $.mset((await $.wv([$t17, $t18, $t19, $t20], "EditPrice1", C, false)), "Text", (await $.wcall([$t17, $t18, $t19, $t20], "floatToStr", [(await $.mv((await $.mcall((await $.wv([$t17, $t18, $t19, $t20], "BldeditDataSet", C, false)), "FieldByName", ["PRICE1"])), "AsFloat"))], C)));
        await $.mset((await $.wv([$t17, $t18, $t19, $t20], "EditFlatCode", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t17, $t18, $t19, $t20], "BldeditDataSet", C, false)), "FieldByName", ["CODE"])), "AsString")));
      }
      await $.mcall((await $.wv([$t17, $t18, $t19], "Accounts", C, false)), "CloseAll", []);
      await $.stmt((await $.mcall((await $.wv([$t17, $t18, $t19], "Accounts", C, false)), "SetVariable", ["BID", (await $.mv((await $.wv([$t17, $t18, $t19], "DBLookupComboboxEh6", C, false)), "KeyValue"))])));
      await $.mcall((await $.wv([$t17, $t18, $t19], "Accounts", C, false)), "open", []);
      await $.mcall((await $.wv([$t17, $t18, $t19], "Customers", C, false)), "Refresh", []);
      await $.mset((await $.wv([$t17, $t18, $t19], "DBLookupComboboxEh2", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t17, $t18, $t19], "DBLookupComboboxEh2", C, false)), "ListSource")), "DataSet")), "FieldByName", [(await $.mv((await $.wv([$t17, $t18, $t19], "DBLookupComboboxEh2", C, false)), "KeyField"))])), "AsInteger")));
      await $.stmt($.wcall([$t17, $t18, $t19], "ShowModal", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "CommonGridTitleClick", async function CommonGridTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "orderkind": ''};
  await $.fixArgs(L0, ["column"]);
  L0["orderkind"] = (await $.call(C, "Copy", [(await $.mv((await $.mv(L0["column"], "Field")), "Name")), 8, (await $.call(C, "Length", [(await $.mv((await $.mv(L0["column"], "Field")), "Name"))]))]));
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  try {
    {
      const $t21 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "CommonGrid")), "DataSource")), "DataSet"))]));
      if ($.truthy((await $.wv([$t21], "Active", C, false)))) {
        await $.stmt($.wcall([$t21], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t21], "SetVariable", ["title", (await $.wv([$t21], "OrderKind", { get: async () => L0["orderkind"], set: async (v) => { L0["orderkind"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t21], "Open", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCreditsManagerForConstruction", "ActnRefreshExecute", async function ActnRefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SafeRefresh", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "ActnCloseContractExecute", async function ActnCloseContractExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Müqavilə bağlansın?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t22 = (await $.v(C, "DatModConstruction"));
      const $t23 = (await $.wv([$t22], "sbcm_construction", C, false));
      await $.stmt((await $.wcall([$t22, $t23], "CallProcedure", ["Close_Contract", ["p_ID", (await $.wv([$t22, $t23], "Get_CreditID", C, false))]], C)));
    }
    await $.stmt($.call(C, "SafeRefresh", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "ActnSettingsExecute", async function ActnSettingsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "SettingsForm", (await $.mcall((await $.v(C, "TSettingsForm")), "Create", [Self])));
  await $.mcall((await $.v(C, "SettingsForm")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "CommonGridDrawColumnCell", async function CommonGridDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["datacolindex"] = 1;
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TCreditsManagerForConstruction", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FilterPanel")), "Visible", false);
  await $.mset((await $.v(C, "ToolButton9")), "Down", (await $.mv((await $.v(C, "FilterPanel")), "Visible")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "ToolButton9Click", async function ToolButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FilterPanel")), "Visible", $.not((await $.mv((await $.v(C, "FilterPanel")), "Visible"))));
  await $.mset((await $.v(C, "ToolButton9")), "Down", (await $.mv((await $.v(C, "FilterPanel")), "Visible")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "yinatnsazlanmas1Click", async function yinatnsazlanmas1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Description", (await $.mcall((await $.v(C, "TDescription")), "Create", [Self])));
  await $.mcall((await $.v(C, "Description")), "Showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "ActnFilterExecute", async function ActnFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "companyf": '', "buildingf": '', "flatsf": '', "usersf": '', "filialf": '', "entrancef": '', "filterstr": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["companyfilter"] = "(COMPANYID=%d)";
  L0["filialfilter"] = "(Branchid=%d)";
  L0["usersfilter"] = "(userid=%d)";
  L0["checkfiltred"] = $.fn(async function CheckFiltred(p0, p1, p2) {
  const L1 = {"ischecked": $.copyArg(p0), "filterstr": $.copyArg(p1), "args": $.copyArg(p2), result: ''};
  await $.fixArgs(L1, ["ischecked", "filterstr", "args"]);
  L1["result"] = "";
  if ($.truthy(L1["ischecked"])) {
    L1["result"] = (await $.call(C, "Format", [L1["filterstr"], L1["args"]]));
  }
  return L1.result;
});
  L0["filterstr"] = "";
  {
    const $t24 = (await $.v(C, "DatModConstruction"));
    await $.wset([$t24], "CompanyF", (await $.wcall([$t24], "CheckFiltred", [(await $.mv((await $.wv([$t24], "CheckBoxCompany", C, false)), "Checked")), (await $.wv([$t24], "CompanyFilter", { get: async () => L0["companyfilter"], set: async (v) => { L0["companyfilter"] = v; }, local: true }, false)), [(await $.mv((await $.mcall((await $.wv([$t24], "Componies", C, false)), "FieldByName", ["ID"])), "AsInteger"))]], { get: async () => L0["checkfiltred"], set: async (v) => { L0["checkfiltred"] = v; }, local: true })), { get: async () => L0["companyf"], set: async (v) => { L0["companyf"] = v; }, local: true });
    if ($.truthy((await $.mv((await $.wv([$t24], "CheckBoxBuilding", C, false)), "Checked")))) {
      await $.wset([$t24], "BuildingF", $.add($.add($.add(" (bld_name=", "'"), (await $.mv((await $.mcall((await $.wv([$t24], "buildings", C, false)), "FieldByName", ["bld_Name"])), "asString"))), "')"), { get: async () => L0["buildingf"], set: async (v) => { L0["buildingf"] = v; }, local: true });
    } else {
      await $.wset([$t24], "BuildingF", "", { get: async () => L0["buildingf"], set: async (v) => { L0["buildingf"] = v; }, local: true });
    }
    if ($.truthy((await $.mv((await $.wv([$t24], "CheckBoxFlats", C, false)), "Checked")))) {
      await $.wset([$t24], "FlatsF", $.add($.add($.add(" (flatnumber=", "'"), (await $.wcall([$t24], "trim", [(await $.mv((await $.mcall((await $.wv([$t24], "Flats", C, false)), "FieldByName", ["flatnumber"])), "asstring"))], C))), "')"), { get: async () => L0["flatsf"], set: async (v) => { L0["flatsf"] = v; }, local: true });
    } else {
      await $.wset([$t24], "FlatsF", "", { get: async () => L0["flatsf"], set: async (v) => { L0["flatsf"] = v; }, local: true });
    }
    await $.wset([$t24], "UsersF", (await $.wcall([$t24], "CheckFiltred", [(await $.mv((await $.wv([$t24], "CheckboxUsers", C, false)), "Checked")), (await $.wv([$t24], "UsersFilter", { get: async () => L0["usersfilter"], set: async (v) => { L0["usersfilter"] = v; }, local: true }, false)), [(await $.mv((await $.mcall((await $.wv([$t24], "Users", C, false)), "FieldByName", ["ID"])), "AsInteger"))]], { get: async () => L0["checkfiltred"], set: async (v) => { L0["checkfiltred"] = v; }, local: true })), { get: async () => L0["usersf"], set: async (v) => { L0["usersf"] = v; }, local: true });
    if ($.truthy((await $.mv((await $.wv([$t24], "Checkboxentrance", C, false)), "Checked")))) {
      await $.wset([$t24], "EntranceF", $.add($.add($.add(" (entrance=", "'"), (await $.wcall([$t24], "trim", [(await $.mv((await $.mcall((await $.wv([$t24], "entranceDataSet", C, false)), "FieldByName", ["entrance"])), "asstring"))], C))), "')"), { get: async () => L0["entrancef"], set: async (v) => { L0["entrancef"] = v; }, local: true });
    } else {
      await $.wset([$t24], "EntranceF", "", { get: async () => L0["entrancef"], set: async (v) => { L0["entrancef"] = v; }, local: true });
    }
    await $.wset([$t24], "FilialF", (await $.wcall([$t24], "CheckFiltred", [(await $.mv((await $.wv([$t24], "CheckBoxFilials", C, false)), "Checked")), (await $.wv([$t24], "FilialFilter", { get: async () => L0["filialfilter"], set: async (v) => { L0["filialfilter"] = v; }, local: true }, false)), [(await $.mv((await $.mcall((await $.wv([$t24], "Filials", C, false)), "FieldByName", ["ID"])), "AsInteger"))]], { get: async () => L0["checkfiltred"], set: async (v) => { L0["checkfiltred"] = v; }, local: true })), { get: async () => L0["filialf"], set: async (v) => { L0["filialf"] = v; }, local: true });
  }
  L0["filterstr"] = L0["companyf"];
  if ($.truthy($.ne(L0["buildingf"], ""))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["buildingf"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], " AND "), L0["buildingf"]);
    }
  }
  if ($.truthy($.ne(L0["flatsf"], ""))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["flatsf"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], " AND "), L0["flatsf"]);
    }
  }
  if ($.truthy($.ne(L0["entrancef"], ""))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["entrancef"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], " AND "), L0["entrancef"]);
    }
  }
  if ($.truthy($.ne(L0["usersf"], ""))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["usersf"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], " AND "), L0["usersf"]);
    }
  }
  if ($.truthy($.ne(L0["filialf"], ""))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["filialf"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], " AND "), L0["filialf"]);
    }
  }
  {
    const $t25 = (await $.mv((await $.mv((await $.v(C, "CommonGrid")), "DataSource")), "DataSet"));
    await $.wset([$t25], "Filtered", (await $.wv([$t25], "False", C, false)), C);
    await $.wset([$t25], "Filter", (await $.wv([$t25], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false)), C);
    await $.wset([$t25], "Filtered", (await $.wv([$t25], "True", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "ActnPaymentPlaneExecute", async function ActnPaymentPlaneExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "PaymentPlaneForm", (await $.mcall((await $.v(C, "TPaymentPlaneForm")), "Create", [Self])));
  await $.mcall((await $.v(C, "PaymentPlaneForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "N1DrawItem", async function N1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t26 = L0["acanvas"];
    const $t27 = (await $.wv([$t26], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t28 = (await $.wv([$t26, $t27], "Font", C, false));
      await $.wset([$t26, $t27, $t28], "Name", "Tahoma", C);
      await $.wset([$t26, $t27, $t28], "Charset", (await $.wv([$t26, $t27, $t28], "DEFAULT_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t26, $t27, $t28], "Default", C, false)))) {
        await $.wset([$t26, $t27, $t28], "Style", [(await $.wv([$t26, $t27, $t28], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t26, $t27], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t26, $t27], "Pen", C, false)), "Color", (await $.wv([$t26, $t27], "clBlack", C, false)));
      await $.wset([$t26, $t27], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t26, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t26, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t26, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t26, $t27], "MoveTo", [(await $.mv((await $.wv([$t26, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t26, $t27], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "LineTo", [(await $.mv((await $.wv([$t26, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t26, $t27], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "inc", [$.ref(async () => (await $.wv([$t26, $t27], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t29) => { await $.wset([$t26, $t27], "LineBottom", $t29, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t26, $t27], "Pen", C, false)), "Color", (await $.wv([$t26, $t27], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t26, $t27], "MoveTo", [(await $.mv((await $.wv([$t26, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t26, $t27], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "LineTo", [(await $.mv((await $.wv([$t26, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t26, $t27], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t26, $t27], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t26, $t27], "Brush", C, false)), "Color", (await $.wv([$t26, $t27], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t26, $t27], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t26, $t27], "Font", C, false)), "Color", (await $.wv([$t26, $t27], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t26, $t27], "Font", C, false)), "Color", (await $.wv([$t26, $t27], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t26, $t27], "Brush", C, false)), "Color", (await $.wv([$t26, $t27], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t26, $t27], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t26, $t27], "Font", C, false)), "Color", (await $.wv([$t26, $t27], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t26, $t27], "Font", C, false)), "Color", (await $.wv([$t26, $t27], "clGrayText", C, false)));
        }
      }
      await $.wset([$t26, $t27], "Bar", (await $.wv([$t26, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t26, $t27], "FillRect", [(await $.wv([$t26, $t27], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t26, $t27], "TextOut", [$.add((await $.mv((await $.wv([$t26, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 2), $.add((await $.mv((await $.wv([$t26, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t26, $t27], "Caption", C, false))], C)));
    }
    await $.wset([$t26, $t27], "SText", (await $.wcall([$t26, $t27], "ShortCutToText", [(await $.wv([$t26, $t27], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t26, $t27], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t26, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t26, $t27], "TextWidth", [(await $.wv([$t26, $t27], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t26, $t27], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t26, $t27], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t26, $t27], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t30 = (await $.wv([$t26, $t27], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t26, $t27, $t30], "Assigned", [(await $.wv([$t26, $t27, $t30], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t26, $t27, $t30], "Checked", C, false)))) {
            await $.mset((await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t26, $t27, $t30], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t26, $t27, $t30], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t26, $t27, $t30], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t26, $t27, $t30], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t26, $t27, $t30], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t26, $t27, $t30], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t31) => { await $.mset((await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t31); }), 2], C)));
            await $.stmt((await $.wcall([$t26, $t27, $t30], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t32) => { await $.mset((await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t32); }), 2], C)));
            await $.stmt((await $.wcall([$t26, $t27, $t30], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t33) => { await $.mset((await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t33); }), 2], C)));
            await $.stmt((await $.wcall([$t26, $t27, $t30], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t34) => { await $.mset((await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t34); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t26, $t27, $t30], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t26, $t27, $t30], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t26, $t27, $t30], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t26, $t27, $t30], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t35) => { await $.mset((await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t35); }), 1], C)));
            await $.stmt((await $.wcall([$t26, $t27, $t30], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t36) => { await $.mset((await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t36); }), 1], C)));
            await $.stmt((await $.wcall([$t26, $t27, $t30], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t37) => { await $.mset((await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t37); }), 1], C)));
            await $.stmt((await $.wcall([$t26, $t27, $t30], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t38) => { await $.mset((await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t38); }), 1], C)));
            if ($.truthy((await $.wv([$t26, $t27, $t30], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t26, $t27, $t30], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t26, $t27, $t30], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t26, $t27, $t30], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t26, $t27, $t30], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t26, $t27, $t30], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t26, $t27, $t30], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t26, $t27, $t30], "Images", C, false)), "Draw", [(await $.wv([$t26, $t27, $t30], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t26, $t27, $t30], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t26, $t27, $t30], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t26, $t27, $t30], "ImageIndex", C, false)), (await $.wv([$t26, $t27, $t30], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TCreditsManagerForConstruction", "N6Click", async function N6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OrderForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "ActnSearchPanelExecute", async function ActnSearchPanelExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Panelsearch")), "Visible", $.not((await $.mv((await $.v(C, "Panelsearch")), "Visible"))));
  await $.mcall((await $.v(C, "Editcontnum")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "ActnSearchExecute", async function ActnSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t39 = L0["sender"];
    await $.wset([$t39], "SearchField", (await $.wcall([$t39], "copy", [(await $.wv([$t39], "Name", C, false)), 5, (await $.wcall([$t39], "length", [(await $.wv([$t39], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    await $.mcall((await $.mv((await $.wv([$t39], "CommonGrid", C, false)), "SelectedRows")), "Clear", []);
    {
      const $t40 = (await $.wcall([$t39], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t39], "CommonGrid", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t39, $t40], "SearchRecord", [(await $.wv([$t39, $t40], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t39, $t40], "Text", C, false)), $.add((await $.wv([$t39, $t40], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t39, $t40], "srFromCurrent", C, false)), (await $.wv([$t39, $t40], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t39, $t40], "MessageDlg", [$.add($.add("Axtarış sona çatdı ", "\r"), "Davam etmək istəyirsiniz?"), (await $.wv([$t39, $t40], "mtInformation", C, false)), [(await $.wv([$t39, $t40], "mbNo", C, false)), (await $.wv([$t39, $t40], "mbYes", C, false))], 0], C)), (await $.wv([$t39, $t40], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t39, $t40], "SearchRecord", [(await $.wv([$t39, $t40], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t39, $t40], "Text", C, false)), $.add((await $.wv([$t39, $t40], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t39, $t40], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t39, $t40], "MessageDlg", ["Yazı tapılmadı!", (await $.wv([$t39, $t40], "mtInformation", C, false)), [(await $.wv([$t39, $t40], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
    await $.mset((await $.mv((await $.wv([$t39], "CommonGrid", C, false)), "SelectedRows")), "CurrentRowSelected", (await $.wv([$t39], "True", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "EditcontnumKeyPress", async function EditcontnumKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActnSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCreditsManagerForConstruction", "EditcontnumExit", async function EditcontnumExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t41 = L0["sender"];
    await $.wset([$t41], "Text", "", C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "ActiveFormDestroy", async function ActiveFormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ExpiresPaymentsForm")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "N11Click", async function N11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t42 = (await $.v(C, "ExpiresPaymentsForm"));
    await $.mcall((await $.wv([$t42], "Credits", C, false)), "Close", []);
    { const $t43 = await $.iset((await $.mv((await $.wv([$t42], "Credits", C, false)), "SQL")), [6], ""); if ($t43 !== undefined) { await $.mset((await $.wv([$t42], "Credits", C, false)), "SQL", $t43); } }
    await $.mcall((await $.wv([$t42], "Credits", C, false)), "Open", []);
  }
  await $.mcall((await $.v(C, "ExpiresPaymentsForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditsManagerForConstruction", "N12Click", async function N12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FrmInterest", (await $.mcall((await $.v(C, "TFrmInterest")), "create", [Self])));
  await $.mcall((await $.v(C, "FrmInterest")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
