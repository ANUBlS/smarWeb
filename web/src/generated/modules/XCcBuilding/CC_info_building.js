// Generated from CC_info_building.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CC_info_building", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "Db", "CC_Building_PR_TLB", "StdVcl", "Grids", "DBGrids", "StdCtrls", "ExtCtrls", "Buttons", "Mask", "DBCtrls", "ComCtrls", "NLSLocalizer", "ComObj", "ComServ", "CC_Company", "CC_Datamodule", "CC_info_house", "CC_Flat", "CC_Edit_Company", "CC_Edit_House", "CC_Edit_Flat"]);
  const C = [U];
  U.defClass("TCC_Building", "TActiveForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "c_searchbox": {"name": "C_Searchbox", "type": "TGroupBox"}, "editno": {"name": "Editno", "type": "TEdit"}, "editname": {"name": "Editname", "type": "TEdit"}, "c_searchbox_": {"name": "C_Searchbox_", "type": "TGroupBox"}, "speedbutton9": {"name": "SpeedButton9", "type": "TSpeedButton"}, "speedbutton10": {"name": "SpeedButton10", "type": "TSpeedButton"}, "speedbutton11": {"name": "SpeedButton11", "type": "TSpeedButton"}, "b_searchbox": {"name": "B_Searchbox", "type": "TGroupBox"}, "edit_name": {"name": "Edit_name", "type": "TEdit"}, "edit_adress": {"name": "Edit_adress", "type": "TEdit"}, "edit_entrance": {"name": "Edit_entrance", "type": "TEdit"}, "edit_flats": {"name": "Edit_flats", "type": "TEdit"}, "f_searchbox": {"name": "F_Searchbox", "type": "TGroupBox"}, "edit_code": {"name": "Edit_code", "type": "TEdit"}, "editflatnumber": {"name": "EditFlatnumber", "type": "TEdit"}, "editentrance": {"name": "editentrance", "type": "TEdit"}, "editfloor": {"name": "Editfloor", "type": "TEdit"}, "editroom": {"name": "Editroom", "type": "TEdit"}, "editarea": {"name": "Editarea", "type": "TEdit"}, "editprice1": {"name": "Editprice1", "type": "TEdit"}, "editpricegen": {"name": "editpricegen", "type": "TEdit"}, "speedbutton13": {"name": "SpeedButton13", "type": "TSpeedButton"}, "groupbox": {"name": "Groupbox", "type": "TGroupBox"}, "speedbutton5": {"name": "SpeedButton5", "type": "TSpeedButton"}, "speedbutton6": {"name": "SpeedButton6", "type": "TSpeedButton"}, "speedbutton7": {"name": "SpeedButton7", "type": "TSpeedButton"}, "speedbutton14": {"name": "SpeedButton14", "type": "TSpeedButton"}, "f_searchbox_": {"name": "F_Searchbox_", "type": "TGroupBox"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton15": {"name": "SpeedButton15", "type": "TSpeedButton"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "speedbutton12": {"name": "SpeedButton12", "type": "TSpeedButton"}, "speedbutton8": {"name": "SpeedButton8", "type": "TSpeedButton"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "speedbutton16": {"name": "SpeedButton16", "type": "TSpeedButton"}, "speedbutton17": {"name": "SpeedButton17", "type": "TSpeedButton"}, "speedbutton18": {"name": "SpeedButton18", "type": "TSpeedButton"}, "editid": {"name": "Editid", "type": "TEdit"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "fevents": {"name": "FEvents", "type": "ICC_BuildingEvents"}}, {});
  U.init(async () => {
  });
  U.method("TCC_Building", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TCC_Building", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TCC_Building", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TCC_Building", "Initialize", null, arguments);
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
  U.method("TCC_Building", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCC_Building", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCC_Building", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCC_Building", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCC_Building", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCC_Building", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCC_Building", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCC_Building", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCC_Building", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCC_Building", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCC_Building", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCC_Building", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCC_Building", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCC_Building", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCC_Building", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCC_Building", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCC_Building", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCC_Building", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCC_Building", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCC_Building", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TCC_Building", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCC_Building", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCC_Building", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TCC_Building", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCC_Building", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TCC_Building", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TCC_Building", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCC_Building", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCC_Building", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCC_Building", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCC_Building", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCC_Building", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCC_Building", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCC_Building", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TCC_Building", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCC_Building", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCC_Building", "SpeedButton8Click", async function SpeedButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "CC_DataMod")), "CC_building"));
    if ($.truthy((await $.wv([$t1], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t1], "ShowMessage", ["Heç bir bina qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      if ($.truthy($.eq((await $.mv((await $.wv([$t1], "B_Searchbox", C, false)), "Visible")), (await $.wv([$t1], "false", C, false))))) {
        await $.mset((await $.wv([$t1], "B_Searchbox", C, false)), "Visible", (await $.wv([$t1], "true", C, false)));
      } else {
        await $.mset((await $.wv([$t1], "B_Searchbox", C, false)), "Visible", (await $.wv([$t1], "false", C, false)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "SpeedButton4Click", async function SpeedButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit_code")), "Text", "");
  await $.mset((await $.v(C, "EditFlatnumber")), "Text", "");
  await $.mset((await $.v(C, "editentrance")), "Text", "");
  await $.mset((await $.v(C, "Editfloor")), "Text", "");
  await $.mset((await $.v(C, "Editroom")), "Text", "");
  await $.mset((await $.v(C, "Editarea")), "Text", "");
  await $.mset((await $.v(C, "Editprice1")), "Text", "");
  await $.mset((await $.v(C, "editpricegen")), "Text", "");
  if ($.truthy($.eq((await $.mv((await $.v(C, "F_Searchbox")), "Visible")), false))) {
    await $.mset((await $.v(C, "F_Searchbox")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "F_Searchbox")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "SpeedButton12Click", async function SpeedButton12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.mv((await $.v(C, "CC_DataMod")), "CC_Company"));
    if ($.truthy((await $.wv([$t2], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t2], "ShowMessage", ["Heç bir şirkət qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      if ($.truthy($.eq((await $.mv((await $.wv([$t2], "C_Searchbox", C, false)), "Visible")), (await $.wv([$t2], "false", C, false))))) {
        await $.mset((await $.wv([$t2], "C_Searchbox", C, false)), "Visible", (await $.wv([$t2], "true", C, false)));
      } else {
        await $.mset((await $.wv([$t2], "C_Searchbox", C, false)), "Visible", (await $.wv([$t2], "false", C, false)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "InData", async function InData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  L0["c_err_message"] = " Table or View in Dataset \"%s\" does not exist! ";
  {
    const $t3 = (await $.v(C, "CC_Datamod"));
    { const $t4 = $.sub((await $.wv([$t3], "ComponentCount", C, false)), 1);
      await $.wset([$t3], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t5 = true;
      for (;;) {
        if (!$t5) { await $.wset([$t3], "i", $.succ((await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t5 = false;
        if (!($.ord((await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t4))) break;
        if ($.truthy(($.is_((await $.idx((await $.wv([$t3], "Components", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDataSet")))) {
          if ($.truthy($.eq((await $.mv(((await $.idx((await $.wv([$t3], "Components", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Tag")), 1))) {
            try {
              await $.mcall((await $.idx((await $.wv([$t3], "Components", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Open", []);
            } catch ($t6) {
              $.rethrowControl($t6);
              $.handled($t6);
              throw $.raise((await $.mcall((await $.wv([$t3], "Exception", C, false)), "Create", [(await $.wcall([$t3], "Format", [(await $.wv([$t3], "c_err_message", { get: async () => L0["c_err_message"], set: async (v) => { L0["c_err_message"] = v; }, local: true }, false)), [(await $.mv(((await $.idx((await $.wv([$t3], "Components", C, false)), [(await $.wv([$t3], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name"))]], C))])));
            }
          }
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCC_Building", "SpeedButton9Click", async function SpeedButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "CC_Add_Company", (await $.mcall((await $.v(C, "TCC_Add_Company")), "Create", [Self])));
    await $.mcall((await $.v(C, "CC_Add_Company")), "Showmodal", []);
  } finally {
    await $.mcall((await $.v(C, "CC_Add_Company")), "Release", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CC_Datamod", (await $.mcall((await $.v(C, "TCC_Datamod")), "Create", [Self])));
  await $.stmt($.call(C, "Indata", []));
  await $.stmt((await $.call(C, "DBGrid1CellClick", [(await $.idx((await $.mv((await $.v(C, "DBGrid1")), "Columns")), [0]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ShowMessage", ["ozzun"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "SpeedButton5Click", async function SpeedButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.mv((await $.v(C, "CC_DataMod")), "CC_Company"));
    if ($.truthy((await $.wv([$t7], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t7], "ShowMessage", ["Heç bir şirkət qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      try {
        await $.wset([$t7], "CC_Add_House", (await $.mcall((await $.wv([$t7], "TCC_Add_House", C, false)), "Create", [Self])), C);
        await $.mcall((await $.wv([$t7], "CC_Add_House", C, false)), "Showmodal", []);
      } finally {
        await $.mcall((await $.wv([$t7], "CC_Add_House", C, false)), "Release", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "DBGrid1TitleClick", async function DBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t8 = (await $.mv((await $.v(C, "CC_DataMod")), "CC_Company"));
    await $.stmt((await $.wcall([$t8], "SetVariable", ["Title", (await $.wv([$t8], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t8], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCC_Building", "DBGrid1CellClick", async function DBGrid1CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.stmt((await $.call(C, "DBGrid2CellClick", [(await $.idx((await $.mv((await $.v(C, "DBGrid2")), "Columns")), [0]))])));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCC_Building", "DBGrid2TitleClick", async function DBGrid2TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t9 = (await $.mv((await $.v(C, "CC_DataMod")), "CC_building"));
    await $.stmt((await $.wcall([$t9], "SetVariable", ["Title", (await $.wv([$t9], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t9], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCC_Building", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.mv((await $.v(C, "CC_DataMod")), "CC_building"));
    if ($.truthy((await $.wv([$t10], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t10], "ShowMessage", ["Heç bir bina qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      try {
        await $.wset([$t10], "CC_Add_flats", (await $.mcall((await $.wv([$t10], "TCC_Add_flats", C, false)), "Create", [Self])), C);
        await $.mcall((await $.wv([$t10], "CC_Add_flats", C, false)), "Showmodal", []);
      } finally {
        await $.mcall((await $.wv([$t10], "CC_Add_flats", C, false)), "Release", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "DBGrid2CellClick", async function DBGrid2CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Close", []);
  { const $t11 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "sql")), [3], ""); if ($t11 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "sql", $t11); } }
  { const $t12 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "sql")), [4], ""); if ($t12 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "sql", $t12); } }
  { const $t13 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "sql")), [5], ""); if ($t13 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "sql", $t13); } }
  { const $t14 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "sql")), [6], ""); if ($t14 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "sql", $t14); } }
  { const $t15 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "sql")), [7], ""); if ($t15 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "sql", $t15); } }
  { const $t16 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "sql")), [8], ""); if ($t16 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "sql", $t16); } }
  { const $t17 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "sql")), [9], ""); if ($t17 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "sql", $t17); } }
  { const $t18 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "sql")), [10], ""); if ($t18 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "sql", $t18); } }
  { const $t19 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "sql")), [11], ""); if ($t19 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "sql", $t19); } }
  await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Open", []);
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCC_Building", "SpeedButton11Click", async function SpeedButton11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_id": 0, "p_table_name": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t20 = (await $.mv((await $.v(C, "CC_DataMod")), "CC_Company"));
    if ($.truthy((await $.wv([$t20], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t20], "ShowMessage", ["Heç bir şirkət qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      await $.wset([$t20], "p_ID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t20], "CC_DataMod", C, false)), "CC_Company")), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true });
      await $.wset([$t20], "p_Table_Name", "CC_Companies", { get: async () => L0["p_table_name"], set: async (v) => { L0["p_table_name"] = v; }, local: true });
      if ($.truthy($.eq((await $.wcall([$t20], "MessageDlg", [(await $.wcall([$t20], "Format", ["Şirkət silinsin?", [(await $.wv([$t20], "p_id", { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true }, false))]], C)), (await $.wv([$t20], "mtConfirmation", C, false)), (await $.wv([$t20], "mbYesNoCancel", C, false)), 0], C)), (await $.wv([$t20], "mrYes", C, false))))) {
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t20], "CC_DataMod", C, false)), "CC_OP")), "CallProcedure", ["del_fromTable", [(await $.wv([$t20], "p_Table_Name", { get: async () => L0["p_table_name"], set: async (v) => { L0["p_table_name"] = v; }, local: true }, false)), (await $.wv([$t20], "p_ID", { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true }, false))]])));
        await $.mcall((await $.mv((await $.wv([$t20], "CC_DataMod", C, false)), "CC_Company")), "Refresh", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "SpeedButton10Click", async function SpeedButton10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t21 = (await $.mv((await $.v(C, "CC_DataMod")), "CC_Company"));
    if ($.truthy((await $.wv([$t21], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t21], "ShowMessage", ["Heç bir şirkət qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      try {
        await $.wset([$t21], "CC_Update_Company", (await $.mcall((await $.wv([$t21], "TCC_Update_Company", C, false)), "Create", [Self])), C);
        await $.mcall((await $.wv([$t21], "CC_Update_Company", C, false)), "Showmodal", []);
      } finally {
        await $.mcall((await $.wv([$t21], "CC_Update_Company", C, false)), "Release", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "EditnoChange", async function EditnoChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Editno")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Company")), "Locate", ["id", (await $.mv((await $.v(C, "Editno")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGrid1")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  {
    const $t22 = (await $.mv((await $.v(C, "CC_DataMod")), "CC_Flat"));
    await $.stmt($.wcall([$t22], "Close", [], C));
    await $.mcall((await $.wv([$t22], "SQL", C, false)), "clear", []);
    await $.stmt((await $.mcall((await $.wv([$t22], "Sql", C, false)), "add", [$.add($.add("Select * from CC_FLATS where bld_id='", (await $.mv((await $.wv([$t22], "dbedit2", C, false)), "text"))), "' ")])));
    await $.stmt($.wcall([$t22], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "EditnameChange", async function EditnameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Editname")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Company")), "Locate", ["comp_name", (await $.mv((await $.v(C, "Editname")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGrid1")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "EditnoExit", async function EditnoExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "EditnameExit", async function EditnameExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "SpeedButton7Click", async function SpeedButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_id": 0, "p_table_name": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t23 = (await $.mv((await $.v(C, "CC_DataMod")), "CC_building"));
    if ($.truthy((await $.wv([$t23], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t23], "ShowMessage", ["Heç bir bina qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      await $.wset([$t23], "p_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t23], "CC_DataMod", C, false)), "CC_building")), "fieldbyname", ["id"])), "asinteger")), { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true });
      await $.wset([$t23], "p_table_name", "cc_buildings", { get: async () => L0["p_table_name"], set: async (v) => { L0["p_table_name"] = v; }, local: true });
      if ($.truthy($.eq((await $.wcall([$t23], "MessageDlg", [(await $.wcall([$t23], "Format", ["Bina silinsin?", [(await $.wv([$t23], "p_id", { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true }, false))]], C)), (await $.wv([$t23], "mtConfirmation", C, false)), (await $.wv([$t23], "mbYesNoCancel", C, false)), 0], C)), (await $.wv([$t23], "mrYes", C, false))))) {
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t23], "CC_DataMod", C, false)), "CC_OP")), "CallProcedure", ["del_fromTable", [(await $.wv([$t23], "p_table_name", { get: async () => L0["p_table_name"], set: async (v) => { L0["p_table_name"] = v; }, local: true }, false)), (await $.wv([$t23], "p_id", { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true }, false))]])));
        await $.mcall((await $.mv((await $.wv([$t23], "CC_DataMod", C, false)), "CC_building")), "close", []);
        await $.mcall((await $.mv((await $.wv([$t23], "CC_DataMod", C, false)), "CC_building")), "open", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_id": 0, "p_table_name": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t24 = (await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat"));
    if ($.truthy((await $.wv([$t24], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t24], "ShowMessage", ["Heç bir mənzil qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      await $.wset([$t24], "p_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t24], "CC_DataMod", C, false)), "CC_Buyer_Flat")), "fieldbyname", ["id"])), "asinteger")), { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true });
      await $.wset([$t24], "p_table_name", "cc_flats", { get: async () => L0["p_table_name"], set: async (v) => { L0["p_table_name"] = v; }, local: true });
      if ($.truthy($.eq((await $.wcall([$t24], "MessageDlg", [(await $.wcall([$t24], "Format", ["Mənzil silinsin?", [(await $.wv([$t24], "p_id", { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true }, false))]], C)), (await $.wv([$t24], "mtConfirmation", C, false)), (await $.wv([$t24], "mbYesNoCancel", C, false)), 0], C)), (await $.wv([$t24], "mrYes", C, false))))) {
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t24], "CC_DataMod", C, false)), "CC_OP")), "CallProcedure", ["del_fromTable", [(await $.wv([$t24], "p_table_name", { get: async () => L0["p_table_name"], set: async (v) => { L0["p_table_name"] = v; }, local: true }, false)), (await $.wv([$t24], "p_id", { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true }, false))]])));
        await $.mcall((await $.mv((await $.wv([$t24], "CC_DataMod", C, false)), "CC_Buyer_Flat")), "close", []);
        await $.mcall((await $.mv((await $.wv([$t24], "CC_DataMod", C, false)), "CC_Buyer_Flat")), "open", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "Edit_nameChange", async function Edit_nameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_name")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_building")), "Locate", ["bld_name", (await $.mv((await $.v(C, "Edit_name")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGrid2")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "Edit_adressChange", async function Edit_adressChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_adress")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_building")), "Locate", ["address", (await $.mv((await $.v(C, "Edit_adress")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGrid2")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "Edit_entranceChange", async function Edit_entranceChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_entrance")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_building")), "Locate", ["entrances", (await $.mv((await $.v(C, "Edit_entrance")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGrid2")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "Edit_flatsChange", async function Edit_flatsChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_flats")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_building")), "Locate", ["flats", (await $.mv((await $.v(C, "Edit_flats")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGrid2")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "Edit_nameExit", async function Edit_nameExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "Edit_adressExit", async function Edit_adressExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "Edit_entranceExit", async function Edit_entranceExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "Edit_flatsExit", async function Edit_flatsExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "Edit3Change", async function Edit3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t25 = (await $.mv((await $.v(C, "CC_DataMod")), "CC_Flat"));
    await $.stmt($.wcall([$t25], "Close", [], C));
    await $.mcall((await $.wv([$t25], "SQL", C, false)), "clear", []);
    await $.stmt((await $.mcall((await $.wv([$t25], "Sql", C, false)), "add", [$.add($.add("Select * from cc_flats where bld_id='", (await $.mv((await $.wv([$t25], "dbedit2", C, false)), "text"))), "' ")])));
    await $.stmt($.wcall([$t25], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t26 = (await $.mv((await $.v(C, "CC_DataMod")), "CC_building"));
    await $.stmt($.wcall([$t26], "Close", [], C));
    await $.mcall((await $.wv([$t26], "SQL", C, false)), "clear", []);
    await $.stmt((await $.mcall((await $.wv([$t26], "Sql", C, false)), "add", ["Select * from cc_buildings where entrances>0 and entrances<10 "])));
    await $.stmt($.wcall([$t26], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "SpeedButton16Click", async function SpeedButton16Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t27 = (await $.mv((await $.v(C, "CC_DataMod")), "CC_Company"));
    if ($.truthy((await $.wv([$t27], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t27], "ShowMessage", ["Heç bir şirkət qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      await $.mcall((await $.mv((await $.wv([$t27], "CC_DataMod", C, false)), "CC_Company")), "close", []);
      await $.mcall((await $.mv((await $.wv([$t27], "CC_DataMod", C, false)), "CC_Company")), "open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "SpeedButton17Click", async function SpeedButton17Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t28 = (await $.mv((await $.v(C, "CC_DataMod")), "CC_building"));
    if ($.truthy((await $.wv([$t28], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t28], "ShowMessage", ["Heç bir bina qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      await $.mcall((await $.mv((await $.wv([$t28], "CC_DataMod", C, false)), "CC_building")), "close", []);
      await $.mcall((await $.mv((await $.wv([$t28], "CC_DataMod", C, false)), "CC_building")), "open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "SpeedButton18Click", async function SpeedButton18Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t29 = (await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat"));
    if ($.truthy((await $.wv([$t29], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t29], "ShowMessage", ["Heç bir mənzil qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      await $.mcall((await $.mv((await $.wv([$t29], "CC_DataMod", C, false)), "CC_Buyer_Flat")), "close", []);
      await $.mcall((await $.mv((await $.wv([$t29], "CC_DataMod", C, false)), "CC_Buyer_Flat")), "open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "SpeedButton6Click", async function SpeedButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t30 = (await $.mv((await $.v(C, "CC_DataMod")), "CC_building"));
    if ($.truthy((await $.wv([$t30], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t30], "ShowMessage", ["Heç bir bina qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      try {
        await $.wset([$t30], "CC_Update_House", (await $.mcall((await $.wv([$t30], "TCC_Update_House", C, false)), "Create", [Self])), C);
        await $.mcall((await $.wv([$t30], "CC_Update_House", C, false)), "Showmodal", []);
      } finally {
        await $.mcall((await $.wv([$t30], "CC_Update_House", C, false)), "Release", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t31 = (await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat"));
    if ($.truthy((await $.wv([$t31], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t31], "ShowMessage", ["Heç bir mənzil qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      try {
        await $.wset([$t31], "CC_Update_flats", (await $.mcall((await $.wv([$t31], "TCC_Update_flats", C, false)), "Create", [Self])), C);
        await $.mcall((await $.wv([$t31], "CC_Update_flats", C, false)), "Showmodal", []);
      } finally {
        await $.mcall((await $.wv([$t31], "CC_Update_flats", C, false)), "Release", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "SpeedButton15Click", async function SpeedButton15Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t32 = (await $.mv((await $.v(C, "CC_DataMod")), "CC_Flat"));
    if ($.truthy((await $.wv([$t32], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t32], "ShowMessage", ["Heç bir mənzil qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "SpeedButton13Click", async function SpeedButton13Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t33 = (await $.mv((await $.v(C, "CC_DataMod")), "CC_Company"));
    if ($.truthy((await $.wv([$t33], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t33], "ShowMessage", ["Heç bir şirkət qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "EditidChange", async function EditidChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Editid")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_building")), "Locate", ["id", (await $.mv((await $.v(C, "Editid")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGrid2")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t34 = (await $.mv((await $.v(C, "CC_DataMod")), "CC_Company"));
    if ($.truthy((await $.wv([$t34], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t34], "ShowMessage", ["Heç bir şirkət qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      try {
        await $.wset([$t34], "CC_Update_Company", (await $.mcall((await $.wv([$t34], "TCC_Update_Company", C, false)), "Create", [Self])), C);
        await $.mcall((await $.wv([$t34], "CC_Update_Company", C, false)), "Showmodal", []);
      } finally {
        await $.mcall((await $.wv([$t34], "CC_Update_Company", C, false)), "Release", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "DBGrid2DblClick", async function DBGrid2DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t35 = (await $.mv((await $.v(C, "CC_DataMod")), "CC_building"));
    if ($.truthy((await $.wv([$t35], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t35], "ShowMessage", ["Heç bir bina qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      try {
        await $.wset([$t35], "CC_Update_House", (await $.mcall((await $.wv([$t35], "TCC_Update_House", C, false)), "Create", [Self])), C);
        await $.mcall((await $.wv([$t35], "CC_Update_House", C, false)), "Showmodal", []);
      } finally {
        await $.mcall((await $.wv([$t35], "CC_Update_House", C, false)), "Release", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "DBGrid3DblClick", async function DBGrid3DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t36 = (await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat"));
    if ($.truthy((await $.wv([$t36], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t36], "ShowMessage", ["Heç bir mənzil qeyd olunmayıb!"], C)));
      return L0.result;
    } else {
      try {
        await $.wset([$t36], "CC_Update_flats", (await $.mcall((await $.wv([$t36], "TCC_Update_flats", C, false)), "Create", [Self])), C);
        await $.mcall((await $.wv([$t36], "CC_Update_flats", C, false)), "Showmodal", []);
      } finally {
        await $.mcall((await $.wv([$t36], "CC_Update_flats", C, false)), "Release", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "EditidExit", async function EditidExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "DBGrid3TitleClick", async function DBGrid3TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t37 = (await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat"));
    await $.stmt((await $.wcall([$t37], "SetVariable", ["Title", (await $.wv([$t37], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t37], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCC_Building", "Edit_codeChange", async function Edit_codeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Close", []);
  { const $t38 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql")), [5], ""); if ($t38 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql", $t38); } }
  { const $t39 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql")), [5], $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("and nvl(code,0) like ", "'"), (await $.mv((await $.v(C, "Edit_code")), "Text"))), "%"), "'"), "and nvl(flatnumber,0) like "), "'"), (await $.mv((await $.v(C, "EditFlatnumber")), "Text"))), "%"), "'"), "and nvl(entrance,0) like "), "'"), (await $.mv((await $.v(C, "editentrance")), "Text"))), "%"), "'"), "and nvl(ffloor,0) like "), "'"), (await $.mv((await $.v(C, "Editfloor")), "Text"))), "%"), "'"), "and nvl(rooms,0) like "), "'"), (await $.mv((await $.v(C, "Editroom")), "Text"))), "%"), "'"), "and nvl(area,0) like "), "'"), (await $.mv((await $.v(C, "Editarea")), "Text"))), "%"), "'"), "and nvl(price1,0) like "), "'"), (await $.mv((await $.v(C, "Editprice1")), "Text"))), "%"), "'"), "and nvl(pricegen,0) like "), "'"), (await $.mv((await $.v(C, "editpricegen")), "Text"))), "%"), "'")); if ($t39 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql", $t39); } }
  await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "EditFlatnumberChange", async function EditFlatnumberChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Close", []);
  { const $t40 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql")), [5], ""); if ($t40 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql", $t40); } }
  { const $t41 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql")), [5], $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("and nvl(code,0) like ", "'"), (await $.mv((await $.v(C, "Edit_code")), "Text"))), "%"), "'"), "and nvl(flatnumber,0) like "), "'"), (await $.mv((await $.v(C, "EditFlatnumber")), "Text"))), "%"), "'"), "and nvl(entrance,0) like "), "'"), (await $.mv((await $.v(C, "editentrance")), "Text"))), "%"), "'"), "and nvl(ffloor,0) like "), "'"), (await $.mv((await $.v(C, "Editfloor")), "Text"))), "%"), "'"), "and nvl(rooms,0) like "), "'"), (await $.mv((await $.v(C, "Editroom")), "Text"))), "%"), "'"), "and nvl(area,0) like "), "'"), (await $.mv((await $.v(C, "Editarea")), "Text"))), "%"), "'"), "and nvl(price1,0) like "), "'"), (await $.mv((await $.v(C, "Editprice1")), "Text"))), "%"), "'"), "and nvl(pricegen,0) like "), "'"), (await $.mv((await $.v(C, "editpricegen")), "Text"))), "%"), "'")); if ($t41 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql", $t41); } }
  await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "editentranceChange", async function editentranceChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Close", []);
  { const $t42 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql")), [5], ""); if ($t42 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql", $t42); } }
  { const $t43 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql")), [5], $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("and nvl(code,0) like ", "'"), (await $.mv((await $.v(C, "Edit_code")), "Text"))), "%"), "'"), "and nvl(flatnumber,0) like "), "'"), (await $.mv((await $.v(C, "EditFlatnumber")), "Text"))), "%"), "'"), "and nvl(entrance,0) like "), "'"), (await $.mv((await $.v(C, "editentrance")), "Text"))), "%"), "'"), "and nvl(ffloor,0) like "), "'"), (await $.mv((await $.v(C, "Editfloor")), "Text"))), "%"), "'"), "and nvl(rooms,0) like "), "'"), (await $.mv((await $.v(C, "Editroom")), "Text"))), "%"), "'"), "and nvl(area,0) like "), "'"), (await $.mv((await $.v(C, "Editarea")), "Text"))), "%"), "'"), "and nvl(price1,0) like "), "'"), (await $.mv((await $.v(C, "Editprice1")), "Text"))), "%"), "'"), "and nvl(pricegen,0) like "), "'"), (await $.mv((await $.v(C, "editpricegen")), "Text"))), "%"), "'")); if ($t43 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql", $t43); } }
  await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "EditfloorChange", async function EditfloorChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Close", []);
  { const $t44 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql")), [5], ""); if ($t44 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql", $t44); } }
  { const $t45 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql")), [5], $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("and nvl(code,0) like ", "'"), (await $.mv((await $.v(C, "Edit_code")), "Text"))), "%"), "'"), "and nvl(flatnumber,0) like "), "'"), (await $.mv((await $.v(C, "EditFlatnumber")), "Text"))), "%"), "'"), "and nvl(entrance,0) like "), "'"), (await $.mv((await $.v(C, "editentrance")), "Text"))), "%"), "'"), "and nvl(ffloor,0) like "), "'"), (await $.mv((await $.v(C, "Editfloor")), "Text"))), "%"), "'"), "and nvl(rooms,0) like "), "'"), (await $.mv((await $.v(C, "Editroom")), "Text"))), "%"), "'"), "and nvl(area,0) like "), "'"), (await $.mv((await $.v(C, "Editarea")), "Text"))), "%"), "'"), "and nvl(price1,0) like "), "'"), (await $.mv((await $.v(C, "Editprice1")), "Text"))), "%"), "'"), "and nvl(pricegen,0) like "), "'"), (await $.mv((await $.v(C, "editpricegen")), "Text"))), "%"), "'")); if ($t45 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql", $t45); } }
  await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "EditroomChange", async function EditroomChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Close", []);
  { const $t46 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql")), [5], ""); if ($t46 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql", $t46); } }
  { const $t47 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql")), [5], $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("and nvl(code,0) like ", "'"), (await $.mv((await $.v(C, "Edit_code")), "Text"))), "%"), "'"), "and nvl(flatnumber,0) like "), "'"), (await $.mv((await $.v(C, "EditFlatnumber")), "Text"))), "%"), "'"), "and nvl(entrance,0) like "), "'"), (await $.mv((await $.v(C, "editentrance")), "Text"))), "%"), "'"), "and nvl(ffloor,0) like "), "'"), (await $.mv((await $.v(C, "Editfloor")), "Text"))), "%"), "'"), "and nvl(rooms,0) like "), "'"), (await $.mv((await $.v(C, "Editroom")), "Text"))), "%"), "'"), "and nvl(area,0) like "), "'"), (await $.mv((await $.v(C, "Editarea")), "Text"))), "%"), "'"), "and nvl(price1,0) like "), "'"), (await $.mv((await $.v(C, "Editprice1")), "Text"))), "%"), "'"), "and nvl(pricegen,0) like "), "'"), (await $.mv((await $.v(C, "editpricegen")), "Text"))), "%"), "'")); if ($t47 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql", $t47); } }
  await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "EditareaChange", async function EditareaChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Close", []);
  { const $t48 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql")), [5], ""); if ($t48 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql", $t48); } }
  { const $t49 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql")), [5], $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("and nvl(code,0) like ", "'"), (await $.mv((await $.v(C, "Edit_code")), "Text"))), "%"), "'"), "and nvl(flatnumber,0) like "), "'"), (await $.mv((await $.v(C, "EditFlatnumber")), "Text"))), "%"), "'"), "and nvl(entrance,0) like "), "'"), (await $.mv((await $.v(C, "editentrance")), "Text"))), "%"), "'"), "and nvl(ffloor,0) like "), "'"), (await $.mv((await $.v(C, "Editfloor")), "Text"))), "%"), "'"), "and nvl(rooms,0) like "), "'"), (await $.mv((await $.v(C, "Editroom")), "Text"))), "%"), "'"), "and nvl(area,0) like "), "'"), (await $.mv((await $.v(C, "Editarea")), "Text"))), "%"), "'"), "and nvl(price1,0) like "), "'"), (await $.mv((await $.v(C, "Editprice1")), "Text"))), "%"), "'"), "and nvl(pricegen,0) like "), "'"), (await $.mv((await $.v(C, "editpricegen")), "Text"))), "%"), "'")); if ($t49 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql", $t49); } }
  await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "Editprice1Change", async function Editprice1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Close", []);
  { const $t50 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql")), [5], ""); if ($t50 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql", $t50); } }
  { const $t51 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql")), [5], $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("and nvl(code,0) like ", "'"), (await $.mv((await $.v(C, "Edit_code")), "Text"))), "%"), "'"), "and nvl(flatnumber,0) like "), "'"), (await $.mv((await $.v(C, "EditFlatnumber")), "Text"))), "%"), "'"), "and nvl(entrance,0) like "), "'"), (await $.mv((await $.v(C, "editentrance")), "Text"))), "%"), "'"), "and nvl(ffloor,0) like "), "'"), (await $.mv((await $.v(C, "Editfloor")), "Text"))), "%"), "'"), "and nvl(rooms,0) like "), "'"), (await $.mv((await $.v(C, "Editroom")), "Text"))), "%"), "'"), "and nvl(area,0) like "), "'"), (await $.mv((await $.v(C, "Editarea")), "Text"))), "%"), "'"), "and nvl(price1,0) like "), "'"), (await $.mv((await $.v(C, "Editprice1")), "Text"))), "%"), "'"), "and nvl(pricegen,0) like "), "'"), (await $.mv((await $.v(C, "editpricegen")), "Text"))), "%"), "'")); if ($t51 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql", $t51); } }
  await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_Building", "editpricegenChange", async function editpricegenChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Close", []);
  { const $t52 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql")), [5], ""); if ($t52 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql", $t52); } }
  { const $t53 = await $.iset((await $.mv((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql")), [5], $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("and nvl(code,0) like ", "'"), (await $.mv((await $.v(C, "Edit_code")), "Text"))), "%"), "'"), "and nvl(flatnumber,0) like "), "'"), (await $.mv((await $.v(C, "EditFlatnumber")), "Text"))), "%"), "'"), "and nvl(entrance,0) like "), "'"), (await $.mv((await $.v(C, "editentrance")), "Text"))), "%"), "'"), "and nvl(ffloor,0) like "), "'"), (await $.mv((await $.v(C, "Editfloor")), "Text"))), "%"), "'"), "and nvl(rooms,0) like "), "'"), (await $.mv((await $.v(C, "Editroom")), "Text"))), "%"), "'"), "and nvl(area,0) like "), "'"), (await $.mv((await $.v(C, "Editarea")), "Text"))), "%"), "'"), "and nvl(price1,0) like "), "'"), (await $.mv((await $.v(C, "Editprice1")), "Text"))), "%"), "'"), "and nvl(pricegen,0) like "), "'"), (await $.mv((await $.v(C, "editpricegen")), "Text"))), "%"), "'")); if ($t53 !== undefined) { await $.mset((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Sql", $t53); } }
  await $.mcall((await $.mv((await $.v(C, "CC_DataMod")), "CC_Buyer_Flat")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
