// Generated from ccBuildingsFormImpl1.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ccBuildingsFormImpl1", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "ccBuildings_TLB", "StdVcl", "Mask", "DBCtrls", "Buttons", "StdCtrls", "Grids", "DBGrids", "Db", "ComObj", "ComServ", "UnitCompany", "UnitDataModccBuildings", "UnitBuilding", "UnitFlat"]);
  const C = [U];
  U.defClass("TccBuildingsForm", "TActiveForm", {"grpboxcompanies": {"name": "GrpBoxCompanies", "type": "TGroupBox"}, "c_searchbox": {"name": "C_Searchbox", "type": "TGroupBox"}, "editno": {"name": "EditNo", "type": "TEdit"}, "editname": {"name": "EditName", "type": "TEdit"}, "c_searchbox_": {"name": "C_Searchbox_", "type": "TGroupBox"}, "btncompanyadd": {"name": "BtnCompanyAdd", "type": "TSpeedButton"}, "btncompanyedit": {"name": "BtnCompanyEdit", "type": "TSpeedButton"}, "btncompanydel": {"name": "BtnCompanyDel", "type": "TSpeedButton"}, "speedbutton13": {"name": "SpeedButton13", "type": "TSpeedButton"}, "btncompanysearch": {"name": "BtnCompanySearch", "type": "TSpeedButton"}, "btncompanyrefresh": {"name": "BtnCompanyRefresh", "type": "TSpeedButton"}, "grpboxbuildings": {"name": "GrpBoxBuildings", "type": "TGroupBox"}, "b_searchbox": {"name": "B_Searchbox", "type": "TGroupBox"}, "edit_name": {"name": "Edit_Name", "type": "TEdit"}, "edit_adress": {"name": "Edit_Adress", "type": "TEdit"}, "edit_entrance": {"name": "Edit_Entrance", "type": "TEdit"}, "edit_flats": {"name": "Edit_Flats", "type": "TEdit"}, "editid": {"name": "EditID", "type": "TEdit"}, "groupbox": {"name": "Groupbox", "type": "TGroupBox"}, "btnbuildingadd": {"name": "BtnBuildingAdd", "type": "TSpeedButton"}, "btnbuildingedit": {"name": "BtnBuildingEdit", "type": "TSpeedButton"}, "btnbuildingdel": {"name": "BtnBuildingDel", "type": "TSpeedButton"}, "speedbutton14": {"name": "SpeedButton14", "type": "TSpeedButton"}, "btnbuildingsearch": {"name": "BtnBuildingSearch", "type": "TSpeedButton"}, "btnbuildingrefresh": {"name": "BtnBuildingRefresh", "type": "TSpeedButton"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "grpboxflats": {"name": "GrpBoxFlats", "type": "TGroupBox"}, "f_searchbox": {"name": "F_Searchbox", "type": "TGroupBox"}, "edit_code": {"name": "Edit_Code", "type": "TEdit"}, "editflatnumber": {"name": "EditFlatNumber", "type": "TEdit"}, "editentrance": {"name": "EditEntrance", "type": "TEdit"}, "editfloor": {"name": "EditFloor", "type": "TEdit"}, "editroom": {"name": "EditRoom", "type": "TEdit"}, "editarea": {"name": "EditArea", "type": "TEdit"}, "editprice1": {"name": "EditPrice1", "type": "TEdit"}, "editpricegen": {"name": "EditPriceGen", "type": "TEdit"}, "f_searchbox_": {"name": "F_Searchbox_", "type": "TGroupBox"}, "btnflatadd": {"name": "BtnFlatAdd", "type": "TSpeedButton"}, "btnflatedit": {"name": "BtnFlatEdit", "type": "TSpeedButton"}, "btnflatdel": {"name": "BtnFlatDel", "type": "TSpeedButton"}, "speedbutton15": {"name": "SpeedButton15", "type": "TSpeedButton"}, "btnflatsearch": {"name": "BtnFlatSearch", "type": "TSpeedButton"}, "btnflatrefresh": {"name": "BtnFlatRefresh", "type": "TSpeedButton"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "edit_floor": {"name": "Edit_Floor", "type": "TEdit"}, "fevents": {"name": "FEvents", "type": "IccBuildingsFormEvents"}}, {});
  U.init(async () => {
    U.var_("i", 0, "integer");
  });
  U.method("TccBuildingsForm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TccBuildingsForm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TccBuildingsForm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TccBuildingsForm", "Initialize", null, arguments);
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
  U.method("TccBuildingsForm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TccBuildingsForm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TccBuildingsForm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TccBuildingsForm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TccBuildingsForm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TccBuildingsForm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TccBuildingsForm", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TccBuildingsForm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TccBuildingsForm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TccBuildingsForm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TccBuildingsForm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TccBuildingsForm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TccBuildingsForm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TccBuildingsForm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TccBuildingsForm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TccBuildingsForm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TccBuildingsForm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TccBuildingsForm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TccBuildingsForm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TccBuildingsForm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TccBuildingsForm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TccBuildingsForm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TccBuildingsForm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TccBuildingsForm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TccBuildingsForm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TccBuildingsForm", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TccBuildingsForm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TccBuildingsForm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TccBuildingsForm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TccBuildingsForm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TccBuildingsForm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TccBuildingsForm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TccBuildingsForm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TccBuildingsForm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TccBuildingsForm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TccBuildingsForm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TccBuildingsForm", "InData", async function InData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  L0["c_err_message"] = " Table or View in Dataset \"%s\" does not exist! ";
  {
    const $t1 = (await $.v(C, "DataModccBuildings"));
    { const $t2 = $.sub((await $.wv([$t1], "ComponentCount", C, false)), 1);
      await $.wset([$t1], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t3 = true;
      for (;;) {
        if (!$t3) { await $.wset([$t1], "i", $.succ((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t3 = false;
        if (!($.ord((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t2))) break;
        if ($.truthy(($.is_((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDataSet")))) {
          if ($.truthy($.eq((await $.mv(((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Tag")), 1))) {
            try {
              await $.mcall((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Open", []);
            } catch ($t4) {
              $.rethrowControl($t4);
              $.handled($t4);
              throw $.raise((await $.mcall((await $.wv([$t1], "Exception", C, false)), "Create", [(await $.wcall([$t1], "Format", [(await $.wv([$t1], "c_err_message", { get: async () => L0["c_err_message"], set: async (v) => { L0["c_err_message"] = v; }, local: true }, false)), [(await $.mv(((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name"))]], C))])));
            }
          }
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TccBuildingsForm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "DataModccBuildings"))]))))) {
    await $.set(C, "DataModccBuildings", (await $.mcall((await $.v(C, "TDataModccBuildings")), "Create", [Self])));
  }
  await $.stmt($.call(C, "Indata", []));
  await $.stmt((await $.call(C, "DBGrid1CellClick", [(await $.idx((await $.mv((await $.v(C, "DBGrid1")), "Columns")), [0]))])));
  {
    const $t5 = (await $.mv((await $.v(C, "Datamodccbuildings")), "CC_Buyer_Flat"));
    await $.stmt((await $.wcall([$t5], "SetVariable", ["Title", "Rownum"], C)));
    await $.stmt($.wcall([$t5], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "DBGrid1CellClick", async function DBGrid1CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.stmt((await $.call(C, "DBGrid2CellClick", [(await $.idx((await $.mv((await $.v(C, "DBGrid2")), "Columns")), [0]))])));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TccBuildingsForm", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BtnCompanyEdit")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "DBGrid2CellClick", async function DBGrid2CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  {
    const $t6 = (await $.v(C, "DataModccBuildings"));
    await $.mcall((await $.wv([$t6], "CC_Buyer_Flat", C, false)), "Close", []);
    { const $t7 = await $.iset((await $.mv((await $.wv([$t6], "CC_Buyer_Flat", C, false)), "sql")), [3], ""); if ($t7 !== undefined) { await $.mset((await $.wv([$t6], "CC_Buyer_Flat", C, false)), "sql", $t7); } }
    { const $t8 = await $.iset((await $.mv((await $.wv([$t6], "CC_Buyer_Flat", C, false)), "sql")), [4], ""); if ($t8 !== undefined) { await $.mset((await $.wv([$t6], "CC_Buyer_Flat", C, false)), "sql", $t8); } }
    { const $t9 = await $.iset((await $.mv((await $.wv([$t6], "CC_Buyer_Flat", C, false)), "sql")), [5], ""); if ($t9 !== undefined) { await $.mset((await $.wv([$t6], "CC_Buyer_Flat", C, false)), "sql", $t9); } }
    { const $t10 = await $.iset((await $.mv((await $.wv([$t6], "CC_Buyer_Flat", C, false)), "sql")), [6], ""); if ($t10 !== undefined) { await $.mset((await $.wv([$t6], "CC_Buyer_Flat", C, false)), "sql", $t10); } }
    { const $t11 = await $.iset((await $.mv((await $.wv([$t6], "CC_Buyer_Flat", C, false)), "sql")), [7], ""); if ($t11 !== undefined) { await $.mset((await $.wv([$t6], "CC_Buyer_Flat", C, false)), "sql", $t11); } }
    { const $t12 = await $.iset((await $.mv((await $.wv([$t6], "CC_Buyer_Flat", C, false)), "sql")), [8], ""); if ($t12 !== undefined) { await $.mset((await $.wv([$t6], "CC_Buyer_Flat", C, false)), "sql", $t12); } }
    { const $t13 = await $.iset((await $.mv((await $.wv([$t6], "CC_Buyer_Flat", C, false)), "sql")), [9], ""); if ($t13 !== undefined) { await $.mset((await $.wv([$t6], "CC_Buyer_Flat", C, false)), "sql", $t13); } }
    { const $t14 = await $.iset((await $.mv((await $.wv([$t6], "CC_Buyer_Flat", C, false)), "sql")), [10], ""); if ($t14 !== undefined) { await $.mset((await $.wv([$t6], "CC_Buyer_Flat", C, false)), "sql", $t14); } }
    { const $t15 = await $.iset((await $.mv((await $.wv([$t6], "CC_Buyer_Flat", C, false)), "sql")), [11], ""); if ($t15 !== undefined) { await $.mset((await $.wv([$t6], "CC_Buyer_Flat", C, false)), "sql", $t15); } }
    await $.mcall((await $.wv([$t6], "CC_Buyer_Flat", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TccBuildingsForm", "DBGrid2DblClick", async function DBGrid2DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BtnBuildingEdit")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "DBGrid2TitleClick", async function DBGrid2TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t16 = (await $.mv((await $.v(C, "Datamodccbuildings")), "CC_building"));
    await $.stmt((await $.wcall([$t16], "SetVariable", ["Title", (await $.wv([$t16], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t16], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TccBuildingsForm", "DBGrid3DblClick", async function DBGrid3DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BtnFlatEdit")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "DBGrid3TitleClick", async function DBGrid3TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t17 = (await $.mv((await $.v(C, "Datamodccbuildings")), "CC_Buyer_Flat"));
    await $.stmt((await $.wcall([$t17], "SetVariable", ["Title", (await $.wv([$t17], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t17], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TccBuildingsForm", "BtnCompanyAddClick", async function BtnCompanyAddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "FormCompany", (await $.mcall((await $.v(C, "TFormCompany")), "Create", [Self])));
    await $.mset((await $.mv((await $.v(C, "FormCompany")), "AddUpd")), "Text", "1");
    await $.mcall((await $.v(C, "FormCompany")), "ShowModal", []);
  } finally {
    await $.mcall((await $.v(C, "FormCompany")), "Release", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "BtnCompanyEditClick", async function BtnCompanyEditClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t18 = (await $.mv((await $.v(C, "DataModccBuildings")), "CC_Company"));
    if ($.truthy((await $.wv([$t18], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t18], "ShowMessage", ["Heç bir şirkət qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      try {
        await $.wset([$t18], "FormCompany", (await $.mcall((await $.wv([$t18], "TFormCompany", C, false)), "Create", [Self])), C);
        await $.mset((await $.mv((await $.wv([$t18], "FormCompany", C, false)), "AddUpd")), "Text", "2");
        await $.mset((await $.mv((await $.wv([$t18], "FormCompany", C, false)), "EditCompany")), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t18], "DataModccBuildings", C, false)), "CC_Company")), "FieldByName", ["comp_name"])), "AsString")));
        await $.mcall((await $.wv([$t18], "FormCompany", C, false)), "ShowModal", []);
      } finally {
        await $.mcall((await $.wv([$t18], "FormCompany", C, false)), "Release", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "BtnCompanyDelClick", async function BtnCompanyDelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_id": 0, "p_table_name": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.mv((await $.v(C, "Datamodccbuildings")), "CC_Company"));
    if ($.truthy((await $.wv([$t19], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t19], "ShowMessage", ["Heç bir şirkət qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      await $.wset([$t19], "p_ID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t19], "Datamodccbuildings", C, false)), "CC_Company")), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true });
      await $.wset([$t19], "p_Table_Name", "CC_Companies", { get: async () => L0["p_table_name"], set: async (v) => { L0["p_table_name"] = v; }, local: true });
      if ($.truthy($.eq((await $.wcall([$t19], "MessageDlg", [(await $.wcall([$t19], "Format", ["Şirkət silinsin?", [(await $.wv([$t19], "p_id", { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true }, false))]], C)), (await $.wv([$t19], "mtConfirmation", C, false)), (await $.wv([$t19], "mbYesNoCancel", C, false)), 0], C)), (await $.wv([$t19], "mrYes", C, false))))) {
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t19], "Datamodccbuildings", C, false)), "CC_OP")), "CallProcedure", ["del_fromTable", [(await $.wv([$t19], "p_Table_Name", { get: async () => L0["p_table_name"], set: async (v) => { L0["p_table_name"] = v; }, local: true }, false)), (await $.wv([$t19], "p_ID", { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true }, false))]])));
        await $.mcall((await $.mv((await $.wv([$t19], "Datamodccbuildings", C, false)), "CC_Company")), "Refresh", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "BtnCompanyRefreshClick", async function BtnCompanyRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t20 = (await $.mv((await $.v(C, "Datamodccbuildings")), "CC_Company"));
    if ($.truthy((await $.wv([$t20], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t20], "ShowMessage", ["Heç bir şirkət qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      await $.mcall((await $.mv((await $.wv([$t20], "Datamodccbuildings", C, false)), "CC_Company")), "close", []);
      await $.mcall((await $.mv((await $.wv([$t20], "Datamodccbuildings", C, false)), "CC_Company")), "open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "BtnBuildingRefreshClick", async function BtnBuildingRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModccBuildings")), "CC_building")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataModccBuildings")), "CC_building")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "BtnFlatRefreshClick", async function BtnFlatRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModccBuildings")), "CC_Buyer_Flat")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataModccBuildings")), "CC_Buyer_Flat")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "BtnFlatAddClick", async function BtnFlatAddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t21 = (await $.mv((await $.v(C, "DataModccBuildings")), "CC_building"));
    if ($.truthy((await $.wv([$t21], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t21], "ShowMessage", ["Heç bir bina qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      {
        const $t22 = (await $.wv([$t21], "FormFlat", C, false));
        try {
          await $.wset([$t21, $t22], "FormFlat", (await $.mcall((await $.wv([$t21, $t22], "TFormFlat", C, false)), "Create", [Self])), C);
          await $.wset([$t21, $t22], "AddUpd", 1, C);
          await $.stmt($.wcall([$t21, $t22], "ShowModal", [], C));
        } finally {
          await $.stmt($.wcall([$t21, $t22], "Release", [], C));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "BtnFlatEditClick", async function BtnFlatEditClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t23 = (await $.mv((await $.v(C, "DataModccBuildings")), "CC_Buyer_Flat"));
    if ($.truthy((await $.wv([$t23], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t23], "ShowMessage", ["Heç bir mənzil qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      {
        const $t24 = (await $.wv([$t23], "FormFlat", C, false));
        const $t25 = (await $.mv((await $.wv([$t23, $t24], "DataModccBuildings", C, false)), "CC_Buyer_Flat"));
        try {
          await $.wset([$t23, $t24, $t25], "FormFlat", (await $.mcall((await $.wv([$t23, $t24, $t25], "TFormFlat", C, false)), "Create", [Self])), C);
          await $.wset([$t23, $t24, $t25], "AddUpd", 2, C);
          await $.mset((await $.wv([$t23, $t24, $t25], "EditCode", C, false)), "Text", (await $.mv((await $.wcall([$t23, $t24, $t25], "FieldByName", ["code"], C)), "AsString")));
          await $.mset((await $.wv([$t23, $t24, $t25], "EditNo", C, false)), "Text", (await $.mv((await $.wcall([$t23, $t24, $t25], "FieldByName", ["FlatNumber"], C)), "AsString")));
          await $.mset((await $.wv([$t23, $t24, $t25], "EditEntrance", C, false)), "Text", (await $.mv((await $.wcall([$t23, $t24, $t25], "FieldByName", ["entrance"], C)), "AsString")));
          await $.mset((await $.wv([$t23, $t24, $t25], "EditFloor", C, false)), "Text", (await $.mv((await $.wcall([$t23, $t24, $t25], "FieldByName", ["ffloor"], C)), "AsString")));
          await $.mset((await $.wv([$t23, $t24, $t25], "EditRoom", C, false)), "Text", (await $.mv((await $.wcall([$t23, $t24, $t25], "FieldByName", ["rooms"], C)), "AsString")));
          await $.mset((await $.wv([$t23, $t24, $t25], "EditArea", C, false)), "Text", (await $.mv((await $.wcall([$t23, $t24, $t25], "FieldByName", ["area"], C)), "AsString")));
          await $.mset((await $.wv([$t23, $t24, $t25], "EditPrice1", C, false)), "Text", (await $.mv((await $.wcall([$t23, $t24, $t25], "FieldByName", ["price1"], C)), "AsString")));
          await $.mset((await $.wv([$t23, $t24, $t25], "EditPricegen", C, false)), "text", (await $.mv((await $.wcall([$t23, $t24, $t25], "FieldByName", ["pricegen"], C)), "AsString")));
          await $.stmt($.wcall([$t23, $t24, $t25], "ShowModal", [], C));
        } finally {
          await $.stmt($.wcall([$t23, $t24, $t25], "Release", [], C));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "BtnFlatDelClick", async function BtnFlatDelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_id": 0, "p_table_name": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t26 = (await $.mv((await $.v(C, "DataModccBuildings")), "CC_Buyer_Flat"));
    if ($.truthy((await $.wv([$t26], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t26], "ShowMessage", ["Heç bir mənzil qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      await $.wset([$t26], "p_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t26], "DataModccBuildings", C, false)), "CC_Buyer_Flat")), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true });
      await $.wset([$t26], "p_table_name", "cc_flats", { get: async () => L0["p_table_name"], set: async (v) => { L0["p_table_name"] = v; }, local: true });
      if ($.truthy($.eq((await $.wcall([$t26], "MessageDlg", [(await $.wcall([$t26], "Format", ["Mənzil silinsin?", [(await $.wv([$t26], "p_id", { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true }, false))]], C)), (await $.wv([$t26], "mtConfirmation", C, false)), (await $.wv([$t26], "mbYesNoCancel", C, false)), 0], C)), (await $.wv([$t26], "mrYes", C, false))))) {
        {
          const $t27 = (await $.wv([$t26], "DataModccBuildings", C, false));
          await $.stmt((await $.mcall((await $.wv([$t26, $t27], "CC_OP", C, false)), "CallProcedure", ["del_fromTable", [(await $.wv([$t26, $t27], "p_table_name", { get: async () => L0["p_table_name"], set: async (v) => { L0["p_table_name"] = v; }, local: true }, false)), (await $.wv([$t26, $t27], "p_id", { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true }, false))]])));
          await $.mcall((await $.wv([$t26, $t27], "CC_Buyer_Flat", C, false)), "Close", []);
          await $.mcall((await $.wv([$t26, $t27], "CC_Buyer_Flat", C, false)), "Open", []);
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "BtnFlatSearchClick", async function BtnFlatSearchClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit_Code")), "Text", "");
  await $.mset((await $.v(C, "EditFlatnumber")), "Text", "");
  await $.mset((await $.v(C, "EditEntrance")), "Text", "");
  await $.mset((await $.v(C, "EditFloor")), "Text", "");
  await $.mset((await $.v(C, "EditRoom")), "Text", "");
  await $.mset((await $.v(C, "EditArea")), "Text", "");
  await $.mset((await $.v(C, "EditPrice1")), "Text", "");
  await $.mset((await $.v(C, "EditPriceGen")), "Text", "");
  if ($.truthy($.eq((await $.mv((await $.v(C, "F_Searchbox")), "Visible")), false))) {
    await $.mset((await $.v(C, "F_Searchbox")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "F_Searchbox")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "BtnBuildingAddClick", async function BtnBuildingAddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t28 = (await $.mv((await $.v(C, "DataModccBuildings")), "CC_Company"));
    if ($.truthy((await $.wv([$t28], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t28], "ShowMessage", ["Heç bir şirkət qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      try {
        await $.wset([$t28], "FormBuilding", (await $.mcall((await $.wv([$t28], "TFormBuilding", C, false)), "Create", [Self])), C);
        await $.mset((await $.wv([$t28], "FormBuilding", C, false)), "AddUpd", 1);
        await $.mcall((await $.wv([$t28], "FormBuilding", C, false)), "ShowModal", []);
      } finally {
        await $.mcall((await $.wv([$t28], "FormBuilding", C, false)), "Release", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "BtnBuildingEditClick", async function BtnBuildingEditClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t29 = (await $.mv((await $.v(C, "DataModccBuildings")), "CC_building"));
    if ($.truthy((await $.wv([$t29], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t29], "ShowMessage", ["Heç bir bina qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      {
        const $t30 = (await $.wv([$t29], "FormBuilding", C, false));
        const $t31 = (await $.mv((await $.wv([$t29, $t30], "DataModccBuildings", C, false)), "CC_building"));
        try {
          await $.wset([$t29, $t30, $t31], "FormBuilding", (await $.mcall((await $.wv([$t29, $t30, $t31], "TFormBuilding", C, false)), "Create", [Self])), C);
          await $.wset([$t29, $t30, $t31], "AddUpd", 2, C);
          await $.mset((await $.wv([$t29, $t30, $t31], "EditName", C, false)), "Text", (await $.mv((await $.wcall([$t29, $t30, $t31], "FieldByName", ["bld_name"], C)), "AsString")));
          await $.mset((await $.wv([$t29, $t30, $t31], "EditAdress", C, false)), "Text", (await $.mv((await $.wcall([$t29, $t30, $t31], "FieldByName", ["address"], C)), "AsString")));
          await $.mset((await $.wv([$t29, $t30, $t31], "EditFloor", C, false)), "Text", (await $.mv((await $.wcall([$t29, $t30, $t31], "FieldByName", ["floors"], C)), "AsString")));
          await $.mset((await $.wv([$t29, $t30, $t31], "EditEntrance", C, false)), "Text", (await $.mv((await $.wcall([$t29, $t30, $t31], "FieldByName", ["entrances"], C)), "AsString")));
          await $.mset((await $.wv([$t29, $t30, $t31], "EditFlat", C, false)), "Text", (await $.mv((await $.wcall([$t29, $t30, $t31], "FieldByName", ["flats"], C)), "AsString")));
          await $.stmt($.wcall([$t29, $t30, $t31], "ShowModal", [], C));
        } finally {
          await $.stmt($.wcall([$t29, $t30, $t31], "Release", [], C));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "BtnBuildingDelClick", async function BtnBuildingDelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_id": 0, "p_table_name": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t32 = (await $.mv((await $.v(C, "DataModccBuildings")), "CC_building"));
    if ($.truthy((await $.wv([$t32], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t32], "ShowMessage", ["Heç bir bina qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      await $.wset([$t32], "p_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t32], "DataModccBuildings", C, false)), "CC_building")), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true });
      await $.wset([$t32], "p_table_name", "cc_buildings", { get: async () => L0["p_table_name"], set: async (v) => { L0["p_table_name"] = v; }, local: true });
      if ($.truthy($.eq((await $.wcall([$t32], "MessageDlg", [(await $.wcall([$t32], "Format", ["Bina silinsin?", [(await $.wv([$t32], "p_id", { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true }, false))]], C)), (await $.wv([$t32], "mtConfirmation", C, false)), (await $.wv([$t32], "mbYesNoCancel", C, false)), 0], C)), (await $.wv([$t32], "mrYes", C, false))))) {
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t32], "DataModccBuildings", C, false)), "CC_OP")), "CallProcedure", ["del_fromTable", [(await $.wv([$t32], "p_table_name", { get: async () => L0["p_table_name"], set: async (v) => { L0["p_table_name"] = v; }, local: true }, false)), (await $.wv([$t32], "p_id", { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true }, false))]])));
        await $.mcall((await $.mv((await $.wv([$t32], "DataModccBuildings", C, false)), "CC_building")), "Close", []);
        await $.mcall((await $.mv((await $.wv([$t32], "DataModccBuildings", C, false)), "CC_building")), "Open", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "BtnBuildingSearchClick", async function BtnBuildingSearchClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "B_Searchbox")), "Visible")), false))) {
    await $.mset((await $.v(C, "B_Searchbox")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "B_Searchbox")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "BtnCompanySearchClick", async function BtnCompanySearchClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t33 = (await $.mv((await $.v(C, "Datamodccbuildings")), "CC_Company"));
    if ($.truthy((await $.wv([$t33], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t33], "ShowMessage", ["Heç bir şirkət qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      if ($.truthy($.eq((await $.mv((await $.wv([$t33], "C_Searchbox", C, false)), "Visible")), (await $.wv([$t33], "false", C, false))))) {
        await $.mset((await $.wv([$t33], "C_Searchbox", C, false)), "Visible", (await $.wv([$t33], "true", C, false)));
      } else {
        await $.mset((await $.wv([$t33], "C_Searchbox", C, false)), "Visible", (await $.wv([$t33], "false", C, false)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "EditIDChange", async function EditIDChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditID")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModccBuildings")), "CC_building")), "Locate", ["ID", (await $.mv((await $.v(C, "EditID")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGrid2")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "EditNameChange", async function EditNameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Editname")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Datamodccbuildings")), "CC_Company")), "Locate", ["comp_name", (await $.mv((await $.v(C, "Editname")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGrid1")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "EditNoExit", async function EditNoExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "Edit_AdressChange", async function Edit_AdressChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_Adress")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModccBuildings")), "CC_building")), "Locate", ["Address", (await $.mv((await $.v(C, "Edit_Adress")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGrid2")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "Edit_CodeChange", async function Edit_CodeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t34 = (await $.mv((await $.v(C, "DataModccBuildings")), "CC_Buyer_Flat"));
    await $.stmt($.wcall([$t34], "Close", [], C));
    { const $t35 = await $.iset((await $.wv([$t34], "SQL", C, false)), [5], $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("and nvl(code,0) like ", "'"), (await $.mv((await $.wv([$t34], "Edit_Code", C, false)), "Text"))), "%"), "'"), "and nvl(flatnumber,0) like "), "'"), (await $.mv((await $.wv([$t34], "EditFlatNumber", C, false)), "Text"))), "%"), "'"), "and nvl(entrance,0) like "), "'"), (await $.mv((await $.wv([$t34], "EditEntrance", C, false)), "Text"))), "%"), "'"), "and nvl(ffloor,0) like "), "'"), (await $.mv((await $.wv([$t34], "EditFloor", C, false)), "Text"))), "%"), "'"), "and nvl(rooms,0) like "), "'"), (await $.mv((await $.wv([$t34], "EditRoom", C, false)), "Text"))), "%"), "'"), "and nvl(area,0) like "), "'"), (await $.mv((await $.wv([$t34], "EditArea", C, false)), "Text"))), "%"), "'"), "and nvl(price1,0) like "), "'"), (await $.mv((await $.wv([$t34], "EditPrice1", C, false)), "Text"))), "%"), "'"), "and nvl(pricegen,0) like "), "'"), (await $.mv((await $.wv([$t34], "EditPriceGen", C, false)), "Text"))), "%"), "'")); if ($t35 !== undefined) { await $.wset([$t34], "SQL", $t35, C); } }
    await $.stmt($.wcall([$t34], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "Edit_EntranceChange", async function Edit_EntranceChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_Entrance")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModccBuildings")), "CC_building")), "Locate", ["Entrances", (await $.mv((await $.v(C, "Edit_Entrance")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGrid2")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "Edit_FlatsChange", async function Edit_FlatsChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_Flats")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModccBuildings")), "CC_building")), "Locate", ["Flats", (await $.mv((await $.v(C, "Edit_Flats")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGrid2")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "Edit_FloorChange", async function Edit_FloorChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_Floor")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModccBuildings")), "CC_building")), "Locate", ["floors", (await $.mv((await $.v(C, "Edit_Floor")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "Edit_NameChange", async function Edit_NameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_Name")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModccBuildings")), "CC_building")), "Locate", ["bld_name", (await $.mv((await $.v(C, "Edit_Name")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGrid2")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "EditNoChange", async function EditNoChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditNo")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DatamodccBuildings")), "CC_Company")), "Locate", ["ID", (await $.mv((await $.v(C, "EditNo")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGrid1")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  {
    const $t36 = (await $.mv((await $.v(C, "DatamodccBuildings")), "CC_Flat"));
    await $.stmt($.wcall([$t36], "Close", [], C));
    await $.mcall((await $.wv([$t36], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t36], "SQL", C, false)), "Add", [$.add($.add("Select * from CC_FLATS where bld_id='", (await $.mv((await $.wv([$t36], "dbEdit2", C, false)), "Text"))), "' ")])));
    await $.stmt($.wcall([$t36], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TccBuildingsForm", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t37 = (await $.mv((await $.v(C, "Datamodccbuildings")), "CC_Company"));
    await $.stmt((await $.wcall([$t37], "SetVariable", ["Title", (await $.wv([$t37], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t37], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  return U;
}
