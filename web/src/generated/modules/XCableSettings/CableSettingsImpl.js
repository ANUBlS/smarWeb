// Generated from CableSettingsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CableSettingsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ActiveX", "AxCtrls", "CableSet_TLB", "StdVcl", "ComCtrls", "Db", "OracleData", "Oracle", "ExtCtrls", "Grids", "DBGrids", "StdCtrls", "Buttons", "DBCtrls", "Mask", "AppEvnts", "Menus", "ComObj", "ComServ", "sboapidatamoduleimpl"]);
  const C = [U];
  U.defClass("TCableSettings", "TActiveForm", {"odsdoctypes": {"name": "odsDocTypes", "type": "TOracleDataSet"}, "cable_settings": {"name": "CABLE_SETTINGS", "type": "TOraclePackage"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "dsdoctypes": {"name": "dsDocTypes", "type": "TDataSource"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "odsstatuses": {"name": "odsStatuses", "type": "TOracleDataSet"}, "dsstatuses": {"name": "dsStatuses", "type": "TDataSource"}, "odsservices": {"name": "odsServices", "type": "TOracleDataSet"}, "dsservices": {"name": "dsServices", "type": "TDataSource"}, "tabsheet4": {"name": "TabSheet4", "type": "TTabSheet"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "dbgrid4": {"name": "DBGrid4", "type": "TDBGrid"}, "odscountries": {"name": "odsCountries", "type": "TOracleDataSet"}, "dscountries": {"name": "dsCountries", "type": "TDataSource"}, "tabsheet5": {"name": "TabSheet5", "type": "TTabSheet"}, "odschannels": {"name": "odsChannels", "type": "TOracleDataSet"}, "dschannels": {"name": "dsChannels", "type": "TDataSource"}, "tabsheet6": {"name": "TabSheet6", "type": "TTabSheet"}, "odspackages": {"name": "odsPackages", "type": "TOracleDataSet"}, "dspackages": {"name": "dsPackages", "type": "TDataSource"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "bitbtn4": {"name": "BitBtn4", "type": "TBitBtn"}, "bitbtn5": {"name": "BitBtn5", "type": "TBitBtn"}, "bitbtn6": {"name": "BitBtn6", "type": "TBitBtn"}, "bitbtn7": {"name": "BitBtn7", "type": "TBitBtn"}, "bitbtn8": {"name": "BitBtn8", "type": "TBitBtn"}, "bitbtn9": {"name": "BitBtn9", "type": "TBitBtn"}, "bitbtn10": {"name": "BitBtn10", "type": "TBitBtn"}, "bitbtn11": {"name": "BitBtn11", "type": "TBitBtn"}, "bitbtn12": {"name": "BitBtn12", "type": "TBitBtn"}, "dbgrid5": {"name": "DBGrid5", "type": "TDBGrid"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "bitbtn13": {"name": "BitBtn13", "type": "TBitBtn"}, "bitbtn14": {"name": "BitBtn14", "type": "TBitBtn"}, "bitbtn15": {"name": "BitBtn15", "type": "TBitBtn"}, "eddtname": {"name": "edDTName", "type": "TEdit"}, "edstname": {"name": "edStName", "type": "TEdit"}, "edsename": {"name": "edSeName", "type": "TEdit"}, "edconame": {"name": "edCoName", "type": "TEdit"}, "edchname": {"name": "edChName", "type": "TEdit"}, "cbchcountry": {"name": "cbChCountry", "type": "TDBLookupComboBox"}, "edchdesc": {"name": "edChDesc", "type": "TEdit"}, "odspackchan": {"name": "odsPackChan", "type": "TOracleDataSet"}, "dspackchan": {"name": "dsPackChan", "type": "TDataSource"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "dbgrid6": {"name": "DBGrid6", "type": "TDBGrid"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "dbgrid7": {"name": "DBGrid7", "type": "TDBGrid"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "bitbtn16": {"name": "BitBtn16", "type": "TBitBtn"}, "bitbtn17": {"name": "BitBtn17", "type": "TBitBtn"}, "bitbtn18": {"name": "BitBtn18", "type": "TBitBtn"}, "edpackname": {"name": "edPackName", "type": "TEdit"}, "edpackinst": {"name": "edPackInst", "type": "TEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "bitbtn19": {"name": "BitBtn19", "type": "TBitBtn"}, "bitbtn21": {"name": "BitBtn21", "type": "TBitBtn"}, "cbchannel": {"name": "cbChannel", "type": "TDBLookupComboBox"}, "edpackab": {"name": "edPackAb", "type": "TEdit"}, "edpackdep": {"name": "edPackDep", "type": "TEdit"}, "tabsheet7": {"name": "TabSheet7", "type": "TTabSheet"}, "dbgrid8": {"name": "DBGrid8", "type": "TDBGrid"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "bitbtn20": {"name": "BitBtn20", "type": "TBitBtn"}, "bitbtn22": {"name": "BitBtn22", "type": "TBitBtn"}, "bitbtn23": {"name": "BitBtn23", "type": "TBitBtn"}, "edengineername": {"name": "edEngineerName", "type": "TEdit"}, "odsengineers": {"name": "odsEngineers", "type": "TOracleDataSet"}, "dsengineers": {"name": "dsEngineers", "type": "TDataSource"}, "cbaccs": {"name": "cbAccs", "type": "TDBLookupComboBox"}, "odsaccs": {"name": "odsAccs", "type": "TOracleDataSet"}, "dsaccs": {"name": "dsAccs", "type": "TDataSource"}, "dbaccp": {"name": "dbAccP", "type": "TDBLookupComboBox"}, "tabsheet8": {"name": "TabSheet8", "type": "TTabSheet"}, "odssett": {"name": "odsSett", "type": "TOracleDataSet"}, "dssett": {"name": "dsSett", "type": "TDataSource"}, "odssettmaxrest": {"name": "odsSettMAXREST", "type": "TFloatField"}, "odssettdefbalcn": {"name": "odsSettDEFBALCN", "type": "TFloatField"}, "odssettdefcust": {"name": "odsSettDEFCUST", "type": "TFloatField"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "odspackagesid": {"name": "odsPackagesID", "type": "TFloatField"}, "odspackagesname": {"name": "odsPackagesNAME", "type": "TStringField"}, "odspackagesinst_price": {"name": "odsPackagesINST_PRICE", "type": "TFloatField"}, "odspackagesprice": {"name": "odsPackagesPRICE", "type": "TFloatField"}, "odspackagesdeposit": {"name": "odsPackagesDEPOSIT", "type": "TFloatField"}, "odspackagesacid": {"name": "odsPackagesACID", "type": "TFloatField"}, "odspackagesacc_no": {"name": "odsPackagesACC_NO", "type": "TStringField"}, "applicationevents1": {"name": "ApplicationEvents1", "type": "TApplicationEvents"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "yenile1": {"name": "Yenile1", "type": "TMenuItem"}, "odspackagessymb": {"name": "odsPackagesSYMB", "type": "TStringField"}, "edsymb": {"name": "edSymb", "type": "TEdit"}, "edtservprice": {"name": "EdtServPrice", "type": "TEdit"}, "fevents": {"name": "FEvents", "type": "ICableSettingsEvents"}}, {});
  U.init(async () => {
    U.var_("orderbyAD", '', "String");
  });
  U.method("TCableSettings", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TCableSettings", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TCableSettings", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TCableSettings", "Initialize", null, arguments);
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
  U.method("TCableSettings", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableSettings", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableSettings", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableSettings", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableSettings", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableSettings", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableSettings", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableSettings", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableSettings", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableSettings", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableSettings", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableSettings", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableSettings", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableSettings", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableSettings", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableSettings", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableSettings", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableSettings", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCableSettings", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCableSettings", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TCableSettings", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCableSettings", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCableSettings", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TCableSettings", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCableSettings", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TCableSettings", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TCableSettings", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCableSettings", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCableSettings", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCableSettings", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCableSettings", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCableSettings", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCableSettings", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCableSettings", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TCableSettings", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCableSettings", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCableSettings", "ActiveFormActivate", async function ActiveFormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t1 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      if ($.truthy((await $.and_(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TOracleDataSet")), async () => ($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 1)))))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
      }
      await $.tick();
    }
  }
  { const $t3 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t4 = true;
    for (;;) {
      if (!$t4) { L0["i"] = $.succ(L0["i"], 1); }
      $t4 = false;
      if (!($.ord(L0["i"]) <= $.ord($t3))) break;
      await $.set(C, "orderbyAD", " desc");
      if ($.truthy(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TDBGrid")))) {
        await $.stmt((await $.call(C, "OrderByColumn", [(await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv(((await $.idx((await $.v(C, "Components")), [L0["i"]]))), "datasource")), "dataset"))])), (await $.idx((await $.mv(((await $.idx((await $.v(C, "Components")), [L0["i"]]))), "Columns")), [0]))])));
      }
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
  await $.mcall((await $.v(C, "odsSett")), "Edit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "DBGrid1CellClick", async function DBGrid1CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.v(C, "edDTName")), "Text", (await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((await $.mv(L0["column"], "Grid")), "DataSource")), "DataSet")), "Fields")), [1])), "AsString")));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCableSettings", "DBGrid2CellClick", async function DBGrid2CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.v(C, "edStName")), "Text", (await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((await $.mv(L0["column"], "Grid")), "DataSource")), "DataSet")), "Fields")), [1])), "AsString")));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCableSettings", "DBGrid3CellClick", async function DBGrid3CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.v(C, "edSeName")), "Text", (await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((await $.mv(L0["column"], "Grid")), "DataSource")), "DataSet")), "Fields")), [1])), "AsString")));
  await $.mset((await $.v(C, "cbAccs")), "KeyValue", (await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((await $.mv(L0["column"], "Grid")), "DataSource")), "DataSet")), "Fields")), [2])), "AsString")));
  await $.mset((await $.v(C, "EdtServPrice")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv(L0["column"], "Grid")), "DataSource")), "DataSet")), "FieldByName", ["price"])), "AsString")));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCableSettings", "DBGrid4CellClick", async function DBGrid4CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.v(C, "edCoName")), "Text", (await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((await $.mv(L0["column"], "Grid")), "DataSource")), "DataSet")), "Fields")), [1])), "AsString")));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCableSettings", "DBGrid5CellClick", async function DBGrid5CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.v(C, "edChName")), "Text", (await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((await $.mv(L0["column"], "Grid")), "DataSource")), "DataSet")), "Fields")), [1])), "AsString")));
  await $.mset((await $.v(C, "cbChCountry")), "KeyValue", (await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((await $.mv(L0["column"], "Grid")), "DataSource")), "DataSet")), "Fields")), [4])), "AsVariant")));
  await $.mset((await $.v(C, "edChDesc")), "Text", (await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((await $.mv(L0["column"], "Grid")), "DataSource")), "DataSet")), "Fields")), [3])), "AsString")));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCableSettings", "DBGrid8CellClick", async function DBGrid8CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.v(C, "edEngineerName")), "Text", (await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((await $.mv(L0["column"], "Grid")), "DataSource")), "DataSet")), "Fields")), [1])), "AsString")));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCableSettings", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "res": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["res"] = (await $.mcall((await $.v(C, "CABLE_SETTINGS")), "CallIntegerFunction", ["doctypeadd", [(await $.mv((await $.v(C, "edDTName")), "Text"))]]));
  await $.mcall((await $.v(C, "odsDocTypes")), "Close", []);
  await $.mcall((await $.v(C, "odsDocTypes")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "BitBtn4Click", async function BitBtn4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "res": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["res"] = (await $.mcall((await $.v(C, "CABLE_SETTINGS")), "CallIntegerFunction", ["statusadd", [(await $.mv((await $.v(C, "edStName")), "Text"))]]));
  await $.mcall((await $.v(C, "odsStatuses")), "Close", []);
  await $.mcall((await $.v(C, "odsStatuses")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "BitBtn20Click", async function BitBtn20Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "res": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["res"] = (await $.mcall((await $.v(C, "CABLE_SETTINGS")), "CallIntegerFunction", ["engineeradd", [(await $.mv((await $.v(C, "edEngineerName")), "Text"))]]));
  await $.mcall((await $.v(C, "odsEngineers")), "Close", []);
  await $.mcall((await $.v(C, "odsEngineers")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "BitBtn7Click", async function BitBtn7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "res": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["res"] = (await $.mcall((await $.v(C, "CABLE_SETTINGS")), "CallIntegerFunction", ["serviceadd", [(await $.mv((await $.v(C, "edSeName")), "Text")), (await $.mv((await $.v(C, "cbAccs")), "KeyValue")), (await $.mv((await $.v(C, "EdtServPrice")), "Text"))]]));
  await $.mcall((await $.v(C, "odsServices")), "Close", []);
  await $.mcall((await $.v(C, "odsServices")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "BitBtn10Click", async function BitBtn10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "res": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["res"] = (await $.mcall((await $.v(C, "CABLE_SETTINGS")), "CallIntegerFunction", ["countryadd", [(await $.mv((await $.v(C, "edCoName")), "Text"))]]));
  await $.mcall((await $.v(C, "odsCountries")), "Close", []);
  await $.mcall((await $.v(C, "odsCountries")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "CABLE_SETTINGS")), "CallProcedure", ["doctypeupd", [(await $.mv((await $.idx((await $.mv((await $.v(C, "odsDocTypes")), "Fields")), [0])), "Value")), (await $.mv((await $.v(C, "edDTName")), "Text"))]])));
  await $.mcall((await $.v(C, "odsDocTypes")), "Close", []);
  await $.mcall((await $.v(C, "odsDocTypes")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "BitBtn5Click", async function BitBtn5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "CABLE_SETTINGS")), "CallProcedure", ["statusupd", [(await $.mv((await $.idx((await $.mv((await $.v(C, "odsStatuses")), "Fields")), [0])), "Value")), (await $.mv((await $.v(C, "edStName")), "Text"))]])));
  await $.mcall((await $.v(C, "odsStatuses")), "Close", []);
  await $.mcall((await $.v(C, "odsStatuses")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "BitBtn8Click", async function BitBtn8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "CABLE_SETTINGS")), "CallProcedure", ["serviceupd", [(await $.mv((await $.idx((await $.mv((await $.v(C, "odsServices")), "Fields")), [0])), "Value")), (await $.mv((await $.v(C, "edSeName")), "Text")), (await $.mv((await $.v(C, "cbAccs")), "KeyValue")), (await $.mv((await $.v(C, "EdtServPrice")), "Text"))]])));
  await $.mcall((await $.v(C, "odsServices")), "Close", []);
  await $.mcall((await $.v(C, "odsServices")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "BitBtn22Click", async function BitBtn22Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "CABLE_SETTINGS")), "CallProcedure", ["engineerupd", [(await $.mv((await $.idx((await $.mv((await $.v(C, "odsEngineers")), "Fields")), [0])), "Value")), (await $.mv((await $.v(C, "edEngineerName")), "Text"))]])));
  await $.mcall((await $.v(C, "odsEngineers")), "Close", []);
  await $.mcall((await $.v(C, "odsEngineers")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "BitBtn11Click", async function BitBtn11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "CABLE_SETTINGS")), "CallProcedure", ["countryupd", [(await $.mv((await $.idx((await $.mv((await $.v(C, "odsCountries")), "Fields")), [0])), "Value")), (await $.mv((await $.v(C, "edCoName")), "Text"))]])));
  await $.mcall((await $.v(C, "odsCountries")), "Close", []);
  await $.mcall((await $.v(C, "odsCountries")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Yazı silinəcək. Əminsiniz?", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], (await $.v(C, "sw_show"))])), (await $.v(C, "idno"))))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "CABLE_SETTINGS")), "CallProcedure", ["doctypedel", [(await $.mv((await $.idx((await $.mv((await $.v(C, "odsDocTypes")), "Fields")), [0])), "Value"))]])));
  await $.mcall((await $.v(C, "odsDocTypes")), "Close", []);
  await $.mcall((await $.v(C, "odsDocTypes")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "BitBtn6Click", async function BitBtn6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Yazı silinəcək. Əminsiniz?", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], (await $.v(C, "sw_show"))])), (await $.v(C, "idno"))))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "CABLE_SETTINGS")), "CallProcedure", ["statusdel", [(await $.mv((await $.idx((await $.mv((await $.v(C, "odsStatuses")), "Fields")), [0])), "Value"))]])));
  await $.mcall((await $.v(C, "odsStatuses")), "Close", []);
  await $.mcall((await $.v(C, "odsStatuses")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "BitBtn23Click", async function BitBtn23Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Yazı silinəcək. Əminsiniz?", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], (await $.v(C, "sw_show"))])), (await $.v(C, "idno"))))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "CABLE_SETTINGS")), "CallProcedure", ["engineerdel", [(await $.mv((await $.idx((await $.mv((await $.v(C, "odsEngineers")), "Fields")), [0])), "Value"))]])));
  await $.mcall((await $.v(C, "odsEngineers")), "Close", []);
  await $.mcall((await $.v(C, "odsEngineers")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "BitBtn9Click", async function BitBtn9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Yazı silinəcək. Əminsiniz?", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], (await $.v(C, "sw_show"))])), (await $.v(C, "idno"))))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "CABLE_SETTINGS")), "CallProcedure", ["servicedel", [(await $.mv((await $.idx((await $.mv((await $.v(C, "odsServices")), "Fields")), [0])), "Value"))]])));
  await $.mcall((await $.v(C, "odsServices")), "Close", []);
  await $.mcall((await $.v(C, "odsServices")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "BitBtn12Click", async function BitBtn12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Yazı silinəcək. Əminsiniz?", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], (await $.v(C, "sw_show"))])), (await $.v(C, "idno"))))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "CABLE_SETTINGS")), "CallProcedure", ["countrydel", [(await $.mv((await $.idx((await $.mv((await $.v(C, "odsCountries")), "Fields")), [0])), "Value"))]])));
  await $.mcall((await $.v(C, "odsCountries")), "Close", []);
  await $.mcall((await $.v(C, "odsCountries")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "BitBtn13Click", async function BitBtn13Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "res": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["res"] = (await $.mcall((await $.v(C, "CABLE_SETTINGS")), "CallIntegerFunction", ["channeladd", [(await $.mv((await $.v(C, "edChName")), "Text")), (await $.mv((await $.v(C, "cbChCountry")), "KeyValue")), (await $.mv((await $.v(C, "edChDesc")), "Text"))]]));
  await $.mcall((await $.v(C, "odsChannels")), "Close", []);
  await $.mcall((await $.v(C, "odsChannels")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "BitBtn14Click", async function BitBtn14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "CABLE_SETTINGS")), "CallProcedure", ["channelupd", [(await $.mv((await $.idx((await $.mv((await $.v(C, "odsChannels")), "Fields")), [0])), "Value")), (await $.mv((await $.v(C, "edChName")), "Text")), (await $.mv((await $.v(C, "cbChCountry")), "KeyValue")), (await $.mv((await $.v(C, "edChDesc")), "Text"))]])));
  await $.mcall((await $.v(C, "odsChannels")), "Close", []);
  await $.mcall((await $.v(C, "odsChannels")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "BitBtn15Click", async function BitBtn15Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Yazı silinəcək. Əminsiniz?", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], (await $.v(C, "sw_show"))])), (await $.v(C, "idno"))))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "CABLE_SETTINGS")), "CallProcedure", ["channeldel", [(await $.mv((await $.idx((await $.mv((await $.v(C, "odsChannels")), "Fields")), [0])), "Value"))]])));
  await $.mcall((await $.v(C, "odsChannels")), "Close", []);
  await $.mcall((await $.v(C, "odsChannels")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "DBGrid7CellClick", async function DBGrid7CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.v(C, "edPackName")), "Text", (await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((await $.mv(L0["column"], "Grid")), "DataSource")), "DataSet")), "Fields")), [1])), "AsString")));
  await $.mset((await $.v(C, "edPackAb")), "Text", (await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((await $.mv(L0["column"], "Grid")), "DataSource")), "DataSet")), "Fields")), [3])), "AsString")));
  await $.mset((await $.v(C, "edPackInst")), "Text", (await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((await $.mv(L0["column"], "Grid")), "DataSource")), "DataSet")), "Fields")), [2])), "AsString")));
  await $.mset((await $.v(C, "edPackDep")), "Text", (await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((await $.mv(L0["column"], "Grid")), "DataSource")), "DataSet")), "Fields")), [4])), "AsString")));
  await $.mset((await $.v(C, "dbAccP")), "KeyValue", (await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((await $.mv(L0["column"], "Grid")), "DataSource")), "DataSet")), "Fields")), [5])), "AsVariant")));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCableSettings", "BitBtn16Click", async function BitBtn16Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "res": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["res"] = (await $.mcall((await $.v(C, "CABLE_SETTINGS")), "CallIntegerFunction", ["packageadd", [(await $.mv((await $.v(C, "edPackName")), "Text")), (await $.mv((await $.v(C, "edPackInst")), "Text")), (await $.mv((await $.v(C, "edPackAb")), "Text")), (await $.mv((await $.v(C, "edPackDep")), "Text")), (await $.mv((await $.v(C, "dbAccP")), "KeyValue")), (await $.mv((await $.v(C, "edSymb")), "Text"))]]));
  await $.mcall((await $.v(C, "odsPackages")), "Close", []);
  await $.mcall((await $.v(C, "odsPackages")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "BitBtn17Click", async function BitBtn17Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "CABLE_SETTINGS")), "CallProcedure", ["packageupd", [(await $.mv((await $.idx((await $.mv((await $.v(C, "odsPackages")), "Fields")), [0])), "Value")), (await $.mv((await $.v(C, "edPackName")), "Text")), (await $.mv((await $.v(C, "edPackInst")), "Text")), (await $.mv((await $.v(C, "edPackAb")), "Text")), (await $.mv((await $.v(C, "edPackDep")), "Text")), (await $.mv((await $.v(C, "dbAccP")), "KeyValue")), (await $.mv((await $.v(C, "edSymb")), "Text"))]])));
  await $.mcall((await $.v(C, "odsPackages")), "Close", []);
  await $.mcall((await $.v(C, "odsPackages")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "BitBtn18Click", async function BitBtn18Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Yazı silinəcək. Əminsiniz?", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], (await $.v(C, "sw_show"))])), (await $.v(C, "idno"))))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "CABLE_SETTINGS")), "CallProcedure", ["packagedel", [(await $.mv((await $.idx((await $.mv((await $.v(C, "odsPackages")), "Fields")), [0])), "Value"))]])));
  await $.mcall((await $.v(C, "odsPackages")), "Close", []);
  await $.mcall((await $.v(C, "odsPackages")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "DBGrid6CellClick", async function DBGrid6CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.v(C, "cbChannel")), "KeyValue", (await $.mv((await $.idx((await $.mv((await $.mv((await $.mv((await $.mv(L0["column"], "Grid")), "DataSource")), "DataSet")), "Fields")), [0])), "AsString")));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCableSettings", "BitBtn19Click", async function BitBtn19Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "res": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["res"] = (await $.mcall((await $.v(C, "CABLE_SETTINGS")), "CallIntegerFunction", ["packchnadd", [(await $.mv((await $.v(C, "cbChannel")), "KeyValue")), (await $.mv((await $.idx((await $.mv((await $.v(C, "odsPackages")), "Fields")), [0])), "AsString"))]]));
  await $.mcall((await $.v(C, "odsPackChan")), "Close", []);
  await $.mcall((await $.v(C, "odsPackChan")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "BitBtn21Click", async function BitBtn21Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Yazı silinəcək. Əminsiniz?", (await $.v(C, "mtWarning")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], (await $.v(C, "sw_show"))])), (await $.v(C, "idno"))))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "CABLE_SETTINGS")), "CallProcedure", ["packchndel", [(await $.mv((await $.v(C, "cbChannel")), "KeyValue")), (await $.mv((await $.idx((await $.mv((await $.v(C, "odsPackages")), "Fields")), [0])), "Value"))]])));
  await $.mcall((await $.v(C, "odsPackChan")), "Close", []);
  await $.mcall((await $.v(C, "odsPackChan")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "OrderByColumn", async function OrderByColumn(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "column": $.copyArg(p1), result: undefined, "post": 0};
  await $.fixArgs(L0, ["dataset", "column"]);
  if ($.truthy(($.eq((await $.v(C, "orderbyAD")), " desc")))) {
    await $.set(C, "orderbyAD", " asc");
  } else {
    await $.set(C, "orderbyAD", " desc");
  }
  L0["post"] = (await $.mcall((await $.mv(L0["dataset"], "SQL")), "Add", [$.add($.add("order by ", (await $.mv(L0["column"], "FieldName"))), (await $.v(C, "orderbyAD")))]));
  await $.mcall(L0["dataset"], "Close", []);
  await $.mcall(L0["dataset"], "Open", []);
  await $.stmt((await $.mcall((await $.mv(L0["dataset"], "SQL")), "Delete", [$.ref(async () => L0["post"], async ($t5) => { L0["post"] = $t5; })])));
  return L0.result;
}, {"params": ["DataSet", "Column"], "kind": "procedure", "ptypes": ["TOracleDataSet", "TColumn"]});
  U.method("TCableSettings", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.stmt((await $.call(C, "OrderByColumn", [(await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.mv(L0["column"], "Grid")), "DataSource")), "DataSet"))])), L0["column"]])));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCableSettings", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "odsSett")), "Post", []);
  await $.mcall((await $.v(C, "odsSett")), "Edit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCableSettings", "ApplicationEvents1Exception", async function ApplicationEvents1Exception(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "e": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "e"]);
  if ($.truthy(($.eq((await $.call(C, "copy", [(await $.mv(L0["e"], "Message")), 5, 5])), "12899")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Yazı sahəyə yerləşmir."])));
  } else {
    await $.stmt((await $.call(C, "ShowMessage", [$.add("Məlumat səhv daxil olunur və ya naməlum səhv ", (await $.call(C, "copy", [(await $.mv(L0["e"], "Message")), 5, 5])))])));
  }
  return L0.result;
}, {"params": ["Sender", "E"], "kind": "procedure", "ptypes": ["TObject", "Exception"]});
  U.method("TCableSettings", "Yenile1Click", async function Yenile1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t6 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t7 = true;
    for (;;) {
      if (!$t7) { L0["i"] = $.succ(L0["i"], 1); }
      $t7 = false;
      if (!($.ord(L0["i"]) <= $.ord($t6))) break;
      if ($.truthy((await $.and_(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TOracleDataSet")), async () => ($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 1)))))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Close", []);
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
