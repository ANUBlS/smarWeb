// Generated from Online_court_conturolUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Online_court_conturolUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "Online_court_conturol_TLB", "StdVcl", "StdCtrls", "Buttons", "XFSCtrls", "ExtCtrls", "Oracle", "IdTCPConnection", "IdTCPClient", "IdHTTP", "IdBaseComponent", "IdComponent", "IdIOHandler", "IdIOHandlerSocket", "IdIOHandlerStack", "IdSSL", "IdSSLOpenSSL", "dbxjson", "encddecd", "DB", "OracleData", "Grids", "XDBGrids", "Mask", "DBCtrlsEh", "ComCtrls", "ComObj", "ComServ", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TOnline_court_conturolImpl", "TActiveForm", {"ssl": {"name": "ssl", "type": "TIdSSLIOHandlerSocketOpenSSL"}, "idhttp1": {"name": "IdHTTP1", "type": "TIdHTTP"}, "pg_court": {"name": "pg_court", "type": "TOraclePackage"}, "ods_court": {"name": "ods_court", "type": "TOracleDataSet"}, "ods_accountpasspin": {"name": "ods_accountpasspin", "type": "TOracleDataSet"}, "ods_accountinn": {"name": "ods_accountInn", "type": "TOracleDataSet"}, "ods_accountinnid": {"name": "ods_accountInnID", "type": "TIntegerField"}, "ods_accountinnservc_id": {"name": "ods_accountInnSERVC_ID", "type": "TFloatField"}, "ods_accountinntext": {"name": "ods_accountInnTEXT", "type": "TWideStringField"}, "ods_accountinninn": {"name": "ods_accountInnINN", "type": "TWideStringField"}, "ods_girovpasspin": {"name": "ods_girovpasspin", "type": "TOracleDataSet"}, "ods_girovinn": {"name": "ods_girovinn", "type": "TOracleDataSet"}, "ods_compespasspin": {"name": "ods_compespasspin", "type": "TOracleDataSet"}, "ods_compesinn": {"name": "ods_compesinn", "type": "TOracleDataSet"}, "ods_custpasspin": {"name": "ods_custpasspin", "type": "TOracleDataSet"}, "ods_custinn": {"name": "ods_custinn", "type": "TOracleDataSet"}, "ods_custpasspintext": {"name": "ods_custpasspinTEXT", "type": "TWideStringField"}, "ods_custinntext": {"name": "ods_custinnTEXT", "type": "TWideStringField"}, "ods_custinnchecked": {"name": "ods_custinnCHECKED", "type": "TWideStringField"}, "ods_custpasspinchecked": {"name": "ods_custpasspinCHECKED", "type": "TWideStringField"}, "ods_custinnservc_id": {"name": "ods_custinnSERVC_ID", "type": "TFloatField"}, "ods_depositinn": {"name": "ods_depositinn", "type": "TOracleDataSet"}, "ods_depositinntext": {"name": "ods_depositinnTEXT", "type": "TWideStringField"}, "dsrc_court": {"name": "dsrc_court", "type": "TDataSource"}, "ods_courtchecked": {"name": "ods_courtCHECKED", "type": "TWideStringField"}, "ods_courtid": {"name": "ods_courtID", "type": "TFloatField"}, "ods_courtperson": {"name": "ods_courtPERSON", "type": "TWideStringField"}, "ods_courtname": {"name": "ods_courtNAME", "type": "TWideStringField"}, "ods_courtchecked_id": {"name": "ods_courtCHECKED_ID", "type": "TFloatField"}, "ods_courtservc_id": {"name": "ods_courtSERVC_ID", "type": "TFloatField"}, "oraclequery1": {"name": "OracleQuery1", "type": "TOracleQuery"}, "query_inn": {"name": "query_inn", "type": "TOracleQuery"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "xfbitbtn2": {"name": "XFBitBtn2", "type": "TXFBitBtn"}, "button1": {"name": "Button1", "type": "TButton"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "date": {"name": "date", "type": "TDBDateTimeEditEh"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "ods_courtarxiv": {"name": "ods_courtarxiv", "type": "TOracleDataSet"}, "dsrc_courtarxiv": {"name": "dsrc_courtarxiv", "type": "TDataSource"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "ods_accountpasspinid": {"name": "ods_accountpasspinID", "type": "TFloatField"}, "ods_accountpasspinservc_id": {"name": "ods_accountpasspinSERVC_ID", "type": "TFloatField"}, "ods_accountpasspinpasspin": {"name": "ods_accountpasspinPASSPIN", "type": "TWideStringField"}, "ods_accountpasspintext": {"name": "ods_accountpasspinTEXT", "type": "TWideStringField"}, "ods_custpasspinservc_id": {"name": "ods_custpasspinSERVC_ID", "type": "TFloatField"}, "ods_depositpasspin": {"name": "ods_depositpasspin", "type": "TOracleDataSet"}, "ods_depositpasspintext": {"name": "ods_depositpasspinTEXT", "type": "TWideStringField"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}, "ods_courtpersontype": {"name": "ods_courtPERSONTYPE", "type": "TWideStringField"}, "ods_courtarxivchecked": {"name": "ods_courtarxivCHECKED", "type": "TWideStringField"}, "ods_courtarxivid": {"name": "ods_courtarxivID", "type": "TFloatField"}, "ods_courtarxivperson": {"name": "ods_courtarxivPERSON", "type": "TWideStringField"}, "ods_courtarxivname": {"name": "ods_courtarxivNAME", "type": "TWideStringField"}, "ods_courtarxivservc_id": {"name": "ods_courtarxivSERVC_ID", "type": "TFloatField"}, "ods_courtarxivchecked_id": {"name": "ods_courtarxivCHECKED_ID", "type": "TFloatField"}, "fevents": {"name": "FEvents", "type": "IOnline_court_conturolImplEvents"}}, {});
  U.init(async () => {
    U.var_("v_value", '', "String");
    U.var_("c_servc_id", '', "String");
    U.var_("v_servc_id", '', "String");
  });
  U.method("TOnline_court_conturolImpl", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TOnline_court_conturolImpl", "postt_", async function postt_(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"v_http": $.copyArg(p0), "v_jeson": $.copyArg(p1), result: null, "http": null, "jsontosend": null, "s": '', "ljsonobj": null, "lresult": null, "v_result": null};
  await $.fixArgs(L0, ["v_http", "v_jeson"]);
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
    L0["http"] = (await $.mcall((await $.v(C, "TIDHttp")), "Create", [null]));
    await $.mset(L0["http"], "HandleRedirects", true);
    await $.mset(L0["http"], "ReadTimeout", 3000);
    await $.mset((await $.mv(L0["http"], "Request")), "BasicAuthentication", false);
    await $.mset((await $.mv(L0["http"], "Request")), "ContentType", "application/json; charset=utf-8");
    await $.stmt((await $.mcall((await $.mv((await $.mv(L0["http"], "Request")), "CustomHeaders")), "AddValue", ["Authorization", (await $.v(C, "v_value"))])));
    await $.mset((await $.mv((await $.v(C, "Memo1")), "Lines")), "Text", (await $.mcall(L0["http"], "Post", [L0["v_http"], L0["v_jeson"]])));
    await $.mcall(L0["http"], "Destroy", []);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  } catch ($t1) {
    $.rethrowControl($t1);
    if ($.excIs($t1, "Exception")) {
      L0["e"] = $.exc($t1);
      await $.mcall(L0["http"], "Destroy", []);
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
      await $.stmt((await $.call(C, "ShowMessage", [$.add("Aqrar qoşulmada problem var qosmaaaaa: ", (await $.mv(L0["e"], "Message")))])));
      return L0.result;
    }
    else { throw $t1; }
  }
  L0["result"] = L0["v_result"];
  return L0.result;
}, {"params": ["v_http", "v_jeson"], "kind": "function", "ptypes": ["String", "TStringStream"]});
  U.method("TOnline_court_conturolImpl", "post_", async function post_(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"v_http": $.copyArg(p0), "v_jeson": $.copyArg(p1), result: null, "http": null, "jsontosend": null, "aa": '', "s": '', "json": null, "ljsonobj": null, "lresult": null, "v_result": null};
  await $.fixArgs(L0, ["v_http", "v_jeson"]);
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  L0["http"] = (await $.mcall((await $.v(C, "TIDHttp")), "Create", [null]));
  await $.mset(L0["http"], "HandleRedirects", true);
  await $.mset(L0["http"], "ReadTimeout", 3000);
  await $.mset((await $.mv(L0["http"], "Request")), "BasicAuthentication", false);
  await $.mset((await $.mv(L0["http"], "Request")), "ContentType", "application/json; charset=utf-8");
  await $.stmt((await $.mcall((await $.mv((await $.mv(L0["http"], "Request")), "CustomHeaders")), "AddValue", ["Authorization", (await $.v(C, "v_value"))])));
  await $.mset((await $.mv((await $.v(C, "Memo1")), "Lines")), "Text", (await $.mcall(L0["http"], "Post", [L0["v_http"], L0["v_jeson"]])));
  L0["json"] = (await $.mcall((await $.v(C, "TJSONObject")), "ParseJSONValue", [(await $.mv((await $.v(C, "memo1")), "Text"))]));
  L0["aa"] = (await $.mv((await $.mv((await $.mcall(L0["json"], "get", ["value"])), "JsonValue")), "ToString"));
  await $.stmt((await $.mcall((await $.v(C, "pg_court")), "CallProcedure", ["update_court", [(await $.v(C, "v_servc_id")), L0["aa"]]])));
  await $.mcall(L0["http"], "Destroy", []);
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  L0["result"] = L0["v_result"];
  return L0.result;
}, {"params": ["v_http", "v_jeson"], "kind": "function", "ptypes": ["String", "TStringStream"]});
  U.method("TOnline_court_conturolImpl", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  await $.inherited(Self, "TOnline_court_conturolImpl", "EventSinkChanged", [L0["eventsink"]], arguments);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TOnline_court_conturolImpl", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TOnline_court_conturolImpl", "Initialize", null, arguments);
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
  U.method("TOnline_court_conturolImpl", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_AlignDisabled", async function Get_AlignDisabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignDisabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_AlignWithMargins", async function Get_AlignWithMargins(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignWithMargins"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_BorderWidth", async function Get_BorderWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Integer", [(await $.v(C, "BorderWidth"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_DockSite", async function Get_DockSite(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DockSite"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_ExplicitHeight", async function Get_ExplicitHeight(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitHeight"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_ExplicitLeft", async function Get_ExplicitLeft(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitLeft"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_ExplicitTop", async function Get_ExplicitTop(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitTop"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_ExplicitWidth", async function Get_ExplicitWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitWidth"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_MouseInClient", async function Get_MouseInClient(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "MouseInClient"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_ParentCustomHint", async function Get_ParentCustomHint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentCustomHint"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_ParentDoubleBuffered", async function Get_ParentDoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentDoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_PopupMode", async function Get_PopupMode(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PopupMode"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_ScreenSnap", async function Get_ScreenSnap(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ScreenSnap"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_SnapBuffer", async function Get_SnapBuffer(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "SnapBuffer"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_UseDockManager", async function Get_UseDockManager(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "UseDockManager"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TOnline_court_conturolImpl", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TOnline_court_conturolImpl", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnline_court_conturolImpl", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "jsontosend": null, "cek": '', "cek1": '', "sqltext": '', "i": 0, "ii": 0, "jsontosend1": null, "jsontosend2": null};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ods_court")), "first", []);
  { const $t2 = $.sub((await $.mv((await $.v(C, "ods_court")), "RecordCount")), 1);
    L0["i"] = 0;
    let $t3 = true;
    for (;;) {
      if (!$t3) { L0["i"] = $.succ(L0["i"], 1); }
      $t3 = false;
      if (!($.ord(L0["i"]) <= $.ord($t2))) break;
      if ($.truthy($.eq((await $.mv((await $.v(C, "ods_courtPERSONTYPE")), "AsString")), "0"))) {
        if ($.truthy($.gt((await $.mv((await $.v(C, "ods_courtID")), "AsInteger")), 0))) {
          L0["cek1"] = (await $.mv((await $.v(C, "ods_courtCHECKED")), "AsString"));
          await $.set(C, "v_servc_id", (await $.mv((await $.v(C, "ods_courtSERVC_ID")), "AsString")));
          L0["jsontosend2"] = (await $.mcall((await $.v(C, "TStringStream")), "Create", [L0["cek1"]]));
          await $.stmt((await $.call(C, "post_", ["http://10.168.172.76:1111/bank/checked", L0["jsontosend2"]])));
          await $.mcall((await $.v(C, "ods_custinn")), "Close", []);
          await $.stmt((await $.mcall((await $.v(C, "ods_custinn")), "SetVariable", ["v_inn", (await $.mv((await $.v(C, "ods_courtPERSON")), "AsString"))])));
          await $.mcall((await $.v(C, "ods_custinn")), "Open", []);
          await $.mcall((await $.v(C, "ods_custinn")), "First", []);
          { const $t4 = $.sub((await $.mv((await $.v(C, "ods_custinn")), "RecordCount")), 1);
            L0["ii"] = 0;
            let $t5 = true;
            for (;;) {
              if (!$t5) { L0["ii"] = $.succ(L0["ii"], 1); }
              $t5 = false;
              if (!($.ord(L0["ii"]) <= $.ord($t4))) break;
              L0["cek"] = (await $.mv((await $.v(C, "ods_custinnTEXT")), "AsString"));
              L0["jsontosend1"] = (await $.mcall((await $.v(C, "TStringStream")), "Create", [L0["cek"]]));
              await $.stmt((await $.call(C, "postt_", ["http://10.168.172.76:1111/bank/SendCustomerInfo", L0["jsontosend1"]])));
              await $.tick();
            }
          }
          await $.mcall((await $.v(C, "ods_custinn")), "Next", []);
          await $.mcall((await $.v(C, "ods_accountInn")), "close", []);
          await $.stmt((await $.mcall((await $.v(C, "ods_accountInn")), "SetVariable", ["v_inn", (await $.mv((await $.v(C, "ods_courtPERSON")), "AsString"))])));
          await $.mcall((await $.v(C, "ods_accountInn")), "Open", []);
          await $.mcall((await $.v(C, "ods_accountInn")), "first", []);
          { const $t6 = $.sub((await $.mv((await $.v(C, "ods_accountInn")), "RecordCount")), 1);
            L0["ii"] = 0;
            let $t7 = true;
            for (;;) {
              if (!$t7) { L0["ii"] = $.succ(L0["ii"], 1); }
              $t7 = false;
              if (!($.ord(L0["ii"]) <= $.ord($t6))) break;
              L0["cek"] = (await $.mv((await $.v(C, "ods_accountInnTEXT")), "AsString"));
              L0["jsontosend1"] = (await $.mcall((await $.v(C, "TStringStream")), "Create", [L0["cek"]]));
              await $.stmt((await $.call(C, "postt_", ["http://10.168.172.76:1111/bank/SendAccountInfo", L0["jsontosend1"]])));
              await $.tick();
            }
          }
          await $.mcall((await $.v(C, "ods_accountInn")), "Next", []);
        }
        if ($.truthy($.gt((await $.mv((await $.v(C, "ods_courtID")), "AsInteger")), 0))) {
          await $.mset((await $.mv((await $.v(C, "query_inn")), "SQL")), "Text", "");
          L0["sqltext"] = "insert into court_online_arxive  select*from court_online where servc_id=";
          await $.mset((await $.mv((await $.v(C, "query_inn")), "SQL")), "Text", $.add($.add($.add(L0["sqltext"], "'"), (await $.mv((await $.v(C, "ods_courtSERVC_ID")), "AsString"))), "'"));
          await $.mcall((await $.v(C, "query_inn")), "Execute", []);
          await $.mset((await $.mv((await $.v(C, "query_inn")), "SQL")), "Text", "");
          await $.mset((await $.mv((await $.v(C, "query_inn")), "SQL")), "Text", $.add($.add("delete court_online where servc_id='", (await $.mv((await $.v(C, "ods_courtSERVC_ID")), "AsString"))), "'"));
          await $.mcall((await $.v(C, "query_inn")), "Execute", []);
          await $.mcall((await $.mv((await $.v(C, "query_inn")), "Session")), "Commit", []);
        }
      }
      await $.mcall((await $.v(C, "ods_court")), "Next", []);
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "ods_court")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnline_court_conturolImpl", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnline_court_conturolImpl", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnline_court_conturolImpl", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnline_court_conturolImpl", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnline_court_conturolImpl", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnline_court_conturolImpl", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TOnline_court_conturolImpl", "MouseEnterEvent", async function MouseEnterEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseEnter", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnline_court_conturolImpl", "MouseLeaveEvent", async function MouseLeaveEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseLeave", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnline_court_conturolImpl", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnline_court_conturolImpl", "Set_AlignWithMargins", async function Set_AlignWithMargins(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AlignWithMargins", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnline_court_conturolImpl", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnline_court_conturolImpl", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnline_court_conturolImpl", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TOnline_court_conturolImpl", "Set_BorderWidth", async function Set_BorderWidth(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "BorderWidth", (await $.call(C, "TBorderWidth", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TOnline_court_conturolImpl", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TOnline_court_conturolImpl", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TOnline_court_conturolImpl", "Set_DockSite", async function Set_DockSite(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DockSite", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnline_court_conturolImpl", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnline_court_conturolImpl", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnline_court_conturolImpl", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnline_court_conturolImpl", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TOnline_court_conturolImpl", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "string", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TOnline_court_conturolImpl", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnline_court_conturolImpl", "Set_ParentCustomHint", async function Set_ParentCustomHint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentCustomHint", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnline_court_conturolImpl", "Set_ParentDoubleBuffered", async function Set_ParentDoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentDoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnline_court_conturolImpl", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TOnline_court_conturolImpl", "Set_PopupMode", async function Set_PopupMode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PopupMode", (await $.call(C, "TPopupMode", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPopupMode"]});
  U.method("TOnline_court_conturolImpl", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TOnline_court_conturolImpl", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnline_court_conturolImpl", "Set_ScreenSnap", async function Set_ScreenSnap(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ScreenSnap", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnline_court_conturolImpl", "Set_SnapBuffer", async function Set_SnapBuffer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "SnapBuffer", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TOnline_court_conturolImpl", "Set_UseDockManager", async function Set_UseDockManager(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "UseDockManager", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnline_court_conturolImpl", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TOnline_court_conturolImpl", "XDBGrid1DrawColumnCell", async function XDBGrid1DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  { const $t8 = $.sub((await $.mv((await $.v(C, "ods_court")), "RecordCount")), 1);
    L0["i"] = 0;
    let $t9 = true;
    for (;;) {
      if (!$t9) { L0["i"] = $.succ(L0["i"], 1); }
      $t9 = false;
      if (!($.ord(L0["i"]) <= $.ord($t8))) break;
      if ($.truthy($.lt((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")), 0))) {
        await $.mset((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "Canvas")), "Brush")), "Color", (await $.v(C, "clFuchsia")));
      }
      await $.stmt((await $.mcall((await $.v(C, "XDBGrid1")), "DefaultDrawColumnCell", [L0["rect"], L0["datacol"], L0["column"], L0["state"]])));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TXColumn", "TGridDrawState"]});
  U.method("TOnline_court_conturolImpl", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "jsontosend": null, "http": null, "jobj": null, "json": null, "json_cust": null, "resarr": null, "jarr": null, "jinarr": null, "jarr_cust": null, "v_checkd": 0, "cour_id": 0, "re": 0, "a": 0, "i": 0, "ix": 0, "row": 0, "c_decisionnumber": null, "c_decisionnumber1": null, "c_servc_id1": null, "v_cust": '', "sss": '', "s": '', "s1": ''};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
    L0["http"] = (await $.mcall((await $.v(C, "TIDHttp")), "Create", [null]));
    await $.mset((await $.v(C, "IdHTTP1")), "IOHandler", (await $.v(C, "ssl")));
    await $.set(C, "ssl", (await $.mcall((await $.v(C, "ssl")), "Create", [null])));
    await $.mset(L0["http"], "HandleRedirects", true);
    await $.mset(L0["http"], "ReadTimeout", 3000);
    await $.mset((await $.mv(L0["http"], "Request")), "BasicAuthentication", false);
    await $.mset((await $.mv(L0["http"], "Request")), "ContentType", "application/json");
    await $.stmt((await $.mcall((await $.mv((await $.mv(L0["http"], "Request")), "CustomHeaders")), "AddValue", ["Authorization", (await $.v(C, "v_value"))])));
    await $.mcall((await $.v(C, "memo1")), "Clear", []);
    await $.mset((await $.v(C, "Memo1")), "Lines", (await $.mv((await $.mv(L0["http"], "Request")), "CustomHeaders")));
    await $.mset((await $.mv((await $.v(C, "Memo1")), "Lines")), "Text", (await $.mcall(L0["http"], "get", ["http://10.168.172.76:1111/bank/check"])));
    await $.mcall(L0["http"], "Destroy", []);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    L0["json"] = (await $.mcall((await $.v(C, "TJSONObject")), "ParseJSONValue", [(await $.mv((await $.v(C, "memo1")), "Text"))]));
    L0["jarr"] = ((await $.mv((await $.mcall(L0["json"], "Get", ["value"])), "JsonValue")));
  } catch ($t10) {
    $.rethrowControl($t10);
    if ($.excIs($t10, "Exception")) {
      L0["e"] = $.exc($t10);
      await $.mcall(L0["http"], "Destroy", []);
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
      await $.stmt((await $.call(C, "ShowMessage", [$.add("Asan fiansa qoşulmada problem var  esas: ", (await $.mv(L0["e"], "Message")))])));
      return L0.result;
    }
    else { throw $t10; }
  }
  await $.mset((await $.mv((await $.v(C, "OracleQuery1")), "SQL")), "Text", "truncate table court_online");
  await $.mcall((await $.v(C, "OracleQuery1")), "Execute", []);
  { const $t11 = $.sub((await $.mv(L0["jarr"], "Size")), 1);
    L0["ix"] = 0;
    let $t12 = true;
    for (;;) {
      if (!$t12) { L0["ix"] = $.succ(L0["ix"], 1); }
      $t12 = false;
      if (!($.ord(L0["ix"]) <= $.ord($t11))) break;
      L0["jobj"] = (await $.mcall(L0["jarr"], "Get", [L0["ix"]]));
      L0["resarr"] = ((await $.mv((await $.mcall(L0["jobj"], "Get", ["responseData"])), "JsonValue")));
      L0["c_decisionnumber"] = (await $.mv((await $.mv((await $.mcall(L0["jobj"], "Get", ["decisionNumber"])), "JsonValue")), "Value"));
      if ($.truthy($.ne(L0["c_decisionnumber"], ""))) {
        L0["c_decisionnumber1"] = L0["c_decisionnumber"];
      } else {
        L0["c_decisionnumber1"] = (-(1));
      }
      await $.set(C, "c_servc_id", (await $.mv((await $.mv((await $.mcall(L0["jobj"], "Get", ["id"])), "JsonValue")), "Value")));
      if ($.truthy($.ne((await $.v(C, "c_servc_id")), ""))) {
        L0["c_servc_id1"] = (await $.v(C, "c_servc_id"));
      } else {
        L0["c_servc_id1"] = (-(1));
      }
      try {
        L0["cour_id"] = (await $.mcall((await $.v(C, "pg_court")), "CallIntegerFunction", ["add_court", [(await $.mv((await $.mv((await $.mcall(L0["jobj"], "Get", ["person"])), "JsonValue")), "Value")), (await $.mv((await $.mv((await $.mcall(L0["jobj"], "Get", ["personType"])), "JsonValue")), "Value")), (await $.mv((await $.mv((await $.mcall(L0["jobj"], "Get", ["filePath"])), "JsonValue")), "Value")), (await $.mv((await $.mv((await $.mcall(L0["jobj"], "Get", ["beginDate"])), "JsonValue")), "Value")), (await $.mv((await $.mv((await $.mcall(L0["jobj"], "Get", ["endDate"])), "JsonValue")), "Value")), (await $.mv((await $.mv((await $.mcall(L0["jobj"], "Get", ["courtName"])), "JsonValue")), "Value")), (await $.mv((await $.mv((await $.mcall(L0["jobj"], "Get", ["judgeName"])), "JsonValue")), "Value")), (await $.mv((await $.mv((await $.mcall(L0["jobj"], "Get", ["decisionNumber"])), "JsonValue")), "Value")), (await $.mv((await $.mv((await $.mcall(L0["jobj"], "Get", ["decisionDate"])), "JsonValue")), "Value")), (await $.mv((await $.mv((await $.mcall(L0["jobj"], "Get", ["note"])), "JsonValue")), "Value")), (await $.call(C, "Strtoint", [L0["c_servc_id1"]]))]]));
        await $.mcall((await $.mv((await $.v(C, "pg_court")), "Session")), "Commit", []);
      } catch ($t13) {
        $.rethrowControl($t13);
        if ($.excIs($t13, "Exception")) {
          L0["e"] = $.exc($t13);
          await $.mcall((await $.mv((await $.v(C, "pg_court")), "Session")), "Commit", []);
        }
        else { throw $t13; }
      }
      await $.mcall((await $.v(C, "ods_court")), "Close", []);
      await $.mcall((await $.v(C, "ods_court")), "Open", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnline_court_conturolImpl", "XFBitBtn2Click", async function XFBitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "http": null, "jsontosend": null, "s": '', "ljsonobj": null, "lresult": null};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
    L0["http"] = (await $.mcall((await $.v(C, "TIDHttp")), "Create", [null]));
    await $.mset(L0["http"], "HandleRedirects", true);
    await $.mset(L0["http"], "ReadTimeout", 3000);
    await $.mset((await $.mv(L0["http"], "Request")), "BasicAuthentication", false);
    await $.mset((await $.mv(L0["http"], "Request")), "ContentType", "application/json; charset=utf-8");
    L0["s"] = "{ \"ClientId\":  \"aqrarkreditasctest\", \"ClientSecret\": \"xQg4zDy3\" }";
    L0["jsontosend"] = (await $.mcall((await $.v(C, "TStringStream")), "Create", [L0["s"]]));
    await $.mcall((await $.v(C, "Memo1")), "Clear", []);
    await $.mset((await $.mv((await $.v(C, "memo1")), "lines")), "text", (await $.mcall(L0["http"], "Post", ["http://10.168.172.76:1111/login", L0["jsontosend"]])));
    await $.mcall(L0["http"], "Destroy", []);
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  } catch ($t14) {
    $.rethrowControl($t14);
    if ($.excIs($t14, "Exception")) {
      L0["e"] = $.exc($t14);
      await $.mcall(L0["http"], "Destroy", []);
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
      await $.stmt((await $.call(C, "ShowMessage", [$.add("Aqrar qoşulmada problem var login: ", (await $.mv(L0["e"], "Message")))])));
      return L0.result;
    }
    else { throw $t14; }
  }
  L0["ljsonobj"] = (await $.mcall((await $.v(C, "TJSONObject")), "ParseJSONValue", [(await $.mcall((await $.mv((await $.v(C, "TEncoding")), "UTF8")), "GetBytes", [(await $.mv((await $.v(C, "Memo1")), "Text"))])), 0]));
  await $.set(C, "v_value", ((await $.mv((await $.mv((await $.mcall(L0["ljsonobj"], "Get", ["value"])), "JsonValue")), "Value"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnline_court_conturolImpl", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ods_courtarxiv")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "ods_courtarxiv")), "SetVariable", ["v_dat", (await $.mv((await $.v(C, "date")), "Value"))])));
  await $.mcall((await $.v(C, "ods_courtarxiv")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnline_court_conturolImpl", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Button1")), "Click", []);
  await $.mcall((await $.v(C, "XFButton3")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOnline_court_conturolImpl", "XFButton3Click", async function XFButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "jsontosend": null, "cek": '', "cek1": '', "sqltext": '', "i": 0, "ii": 0, "jsontosend1": null, "jsontosend2": null};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Ods_court")), "first", []);
  { const $t15 = $.sub((await $.mv((await $.v(C, "Ods_court")), "RecordCount")), 1);
    L0["i"] = 0;
    let $t16 = true;
    for (;;) {
      if (!$t16) { L0["i"] = $.succ(L0["i"], 1); }
      $t16 = false;
      if (!($.ord(L0["i"]) <= $.ord($t15))) break;
      if ($.truthy($.eq((await $.mv((await $.v(C, "ods_courtPERSONTYPE")), "AsString")), "1"))) {
        if ($.truthy($.gt((await $.mv((await $.v(C, "Ods_courtid")), "AsInteger")), 0))) {
          L0["cek1"] = (await $.mv((await $.v(C, "Ods_courtCHECKED")), "AsString"));
          await $.set(C, "v_servc_id", (await $.mv((await $.v(C, "Ods_courtSERVC_ID")), "AsString")));
          L0["jsontosend2"] = (await $.mcall((await $.v(C, "TStringStream")), "Create", [L0["cek1"]]));
          await $.stmt((await $.call(C, "post_", ["http://10.168.172.76:1111/bank/checked", L0["jsontosend2"]])));
          await $.mcall((await $.v(C, "ods_custpasspin")), "Close", []);
          await $.stmt((await $.mcall((await $.v(C, "ods_custpasspin")), "SetVariable", ["v_passpin", (await $.mv((await $.v(C, "Ods_courtPERSON")), "AsString"))])));
          await $.mcall((await $.v(C, "ods_custpasspin")), "Open", []);
          await $.mcall((await $.v(C, "ods_custpasspin")), "First", []);
          { const $t17 = $.sub((await $.mv((await $.v(C, "ods_custpasspin")), "RecordCount")), 1);
            L0["ii"] = 0;
            let $t18 = true;
            for (;;) {
              if (!$t18) { L0["ii"] = $.succ(L0["ii"], 1); }
              $t18 = false;
              if (!($.ord(L0["ii"]) <= $.ord($t17))) break;
              await $.stmt((await $.call(C, "showmessage", [$.add("reco", (await $.call(C, "inttostr", [$.sub((await $.mv((await $.v(C, "ods_custinn")), "RecordCount")), 1)])))])));
              L0["cek"] = (await $.mv((await $.v(C, "ods_custpasspinTEXT")), "AsString"));
              L0["jsontosend1"] = (await $.mcall((await $.v(C, "TStringStream")), "Create", [L0["cek"]]));
              await $.stmt((await $.call(C, "postt_", ["http://10.168.172.76:1111/bank/SendCustomerInfo", L0["jsontosend1"]])));
              await $.tick();
            }
          }
          await $.mcall((await $.v(C, "ods_custpasspin")), "Next", []);
          await $.mcall((await $.v(C, "ods_accountpasspin")), "close", []);
          await $.stmt((await $.mcall((await $.v(C, "ods_accountpasspin")), "SetVariable", ["v_passpin", (await $.mv((await $.v(C, "ods_courtPERSON")), "AsString"))])));
          await $.mcall((await $.v(C, "ods_accountpasspin")), "Open", []);
          await $.mcall((await $.v(C, "ods_accountpasspin")), "first", []);
          { const $t19 = $.sub((await $.mv((await $.v(C, "ods_accountpasspin")), "RecordCount")), 1);
            L0["ii"] = 0;
            let $t20 = true;
            for (;;) {
              if (!$t20) { L0["ii"] = $.succ(L0["ii"], 1); }
              $t20 = false;
              if (!($.ord(L0["ii"]) <= $.ord($t19))) break;
              L0["cek"] = (await $.mv((await $.v(C, "ods_accountpasspinTEXT")), "AsString"));
              L0["jsontosend1"] = (await $.mcall((await $.v(C, "TStringStream")), "Create", [L0["cek"]]));
              await $.stmt((await $.call(C, "postt_", ["http://10.168.172.76:1111/bank/SendAccountInfo", L0["jsontosend1"]])));
              await $.tick();
            }
          }
          await $.mcall((await $.v(C, "ods_accountpasspin")), "Next", []);
        }
        if ($.truthy($.gt((await $.mv((await $.v(C, "ods_courtID")), "AsInteger")), 0))) {
          await $.mset((await $.mv((await $.v(C, "query_inn")), "SQL")), "Text", "");
          L0["sqltext"] = "insert into court_online_arxive  select*from court_online where servc_id=";
          await $.mset((await $.mv((await $.v(C, "query_inn")), "SQL")), "Text", $.add($.add($.add(L0["sqltext"], "'"), (await $.mv((await $.v(C, "ods_courtSERVC_ID")), "AsString"))), "'"));
          await $.mcall((await $.v(C, "query_inn")), "Execute", []);
          await $.mset((await $.mv((await $.v(C, "query_inn")), "SQL")), "Text", "");
          await $.mset((await $.mv((await $.v(C, "query_inn")), "SQL")), "Text", $.add($.add("delete court_online where servc_id='", (await $.mv((await $.v(C, "ods_courtSERVC_ID")), "AsString"))), "'"));
          await $.mcall((await $.v(C, "query_inn")), "Execute", []);
          await $.mcall((await $.mv((await $.v(C, "query_inn")), "Session")), "Commit", []);
        }
      }
      await $.mcall((await $.v(C, "Ods_court")), "Next", []);
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "Ods_court")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
