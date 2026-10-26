// Generated from AxLoader.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AxLoader", ["OleCtrls", "SysUtils", "Classes", "Graphics", "Windows", "ActiveX", "ComObj"]);
  const C = [U];
  U.defClass("TActiveFormX", "TOleControl", {"fonactivate": {"name": "FOnActivate", "type": "TNotifyEvent"}, "fonclick": {"name": "FOnClick", "type": "TNotifyEvent"}, "foncreate": {"name": "FOnCreate", "type": "TNotifyEvent"}, "fondblclick": {"name": "FOnDblClick", "type": "TNotifyEvent"}, "fondestroy": {"name": "FOnDestroy", "type": "TNotifyEvent"}, "fondeactivate": {"name": "FOnDeactivate", "type": "TNotifyEvent"}, "fonkeypress": {"name": "FOnKeyPress", "type": "TActiveFormXOnKeyPress"}, "fonpaint": {"name": "FOnPaint", "type": "TNotifyEvent"}, "fintf": {"name": "FIntf", "type": "IUnknown"}, "feventiid": {"name": "FEventIID", "type": "TGuid"}, "fclassid": {"name": "FClassID", "type": "TGuid"}}, {"controlinterface": {"name": "ControlInterface", "read": "GetControlInterface"}, "defaultinterface": {"name": "DefaultInterface", "read": "GetControlInterface"}, "visible": {"name": "Visible", "index": ["num", 1], "read": "GetWordBoolProp", "write": "SetWordBoolProp"}, "active": {"name": "Active", "index": ["num", 9], "read": "GetWordBoolProp"}, "droptarget": {"name": "DropTarget", "index": ["num", 10], "read": "GetWordBoolProp", "write": "SetWordBoolProp"}, "helpfile": {"name": "HelpFile", "index": ["num", 11], "read": "GetWideStringProp", "write": "SetWideStringProp"}, "doublebuffered": {"name": "DoubleBuffered", "index": ["num", 12], "read": "GetWordBoolProp", "write": "SetWordBoolProp"}, "visibledockclientcount": {"name": "VisibleDockClientCount", "index": ["num", 13], "read": "GetIntegerProp"}, "enabled": {"name": "Enabled", "index": ["un", "-", ["num", 514]], "read": "GetWordBoolProp", "write": "SetWordBoolProp"}, "parentcolor": {"name": "ParentColor"}, "parentfont": {"name": "ParentFont"}, "align": {"name": "Align"}, "dragcursor": {"name": "DragCursor"}, "dragmode": {"name": "DragMode"}, "parentshowhint": {"name": "ParentShowHint"}, "popupmenu": {"name": "PopupMenu"}, "showhint": {"name": "ShowHint"}, "taborder": {"name": "TabOrder"}, "ondragdrop": {"name": "OnDragDrop"}, "ondragover": {"name": "OnDragOver"}, "onenddrag": {"name": "OnEndDrag"}, "onenter": {"name": "OnEnter"}, "onexit": {"name": "OnExit"}, "onstartdrag": {"name": "OnStartDrag"}, "autoscroll": {"name": "AutoScroll", "index": ["num", 2], "read": "GetWordBoolProp", "write": "SetWordBoolProp"}, "autosize": {"name": "AutoSize", "index": ["num", 3], "read": "GetWordBoolProp", "write": "SetWordBoolProp"}, "axborderstyle": {"name": "AxBorderStyle", "index": ["num", 4], "read": "GetTOleEnumProp", "write": "SetTOleEnumProp"}, "caption": {"name": "Caption", "index": ["un", "-", ["num", 518]], "read": "GetWideStringProp", "write": "SetWideStringProp"}, "color": {"name": "Color", "index": ["un", "-", ["num", 501]], "read": "GetTColorProp", "write": "SetTColorProp"}, "font": {"name": "Font", "index": ["un", "-", ["num", 512]], "read": "GetTFontProp", "write": "SetTFontProp"}, "keypreview": {"name": "KeyPreview", "index": ["num", 5], "read": "GetWordBoolProp", "write": "SetWordBoolProp"}, "pixelsperinch": {"name": "PixelsPerInch", "index": ["num", 6], "read": "GetIntegerProp", "write": "SetIntegerProp"}, "printscale": {"name": "PrintScale", "index": ["num", 7], "read": "GetTOleEnumProp", "write": "SetTOleEnumProp"}, "scaled": {"name": "Scaled", "index": ["num", 8], "read": "GetWordBoolProp", "write": "SetWordBoolProp"}, "cursor": {"name": "Cursor", "index": ["num", 14], "read": "GetSmallintProp", "write": "SetSmallintProp"}, "onactivate": {"name": "OnActivate", "read": "FOnActivate", "write": "FOnActivate"}, "onclick": {"name": "OnClick", "read": "FOnClick", "write": "FOnClick"}, "oncreate": {"name": "OnCreate", "read": "FOnCreate", "write": "FOnCreate"}, "ondblclick": {"name": "OnDblClick", "read": "FOnDblClick", "write": "FOnDblClick"}, "ondestroy": {"name": "OnDestroy", "read": "FOnDestroy", "write": "FOnDestroy"}, "ondeactivate": {"name": "OnDeactivate", "read": "FOnDeactivate", "write": "FOnDeactivate"}, "onkeypress": {"name": "OnKeyPress", "read": "FOnKeyPress", "write": "FOnKeyPress"}, "onpaint": {"name": "OnPaint", "read": "FOnPaint", "write": "FOnPaint"}});
  U.init(async () => {
  });
  U.method("TActiveFormX", "InitControlData", async function InitControlData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  L0["ceventdispids"] = [1, 2, 3, 5, 6, 7, 11, 16];
  L0["ctfontids"] = [4294966784];
  L0["ccontroldata"] = {"classid": "", "eventiid": "", "eventcount": 8, "eventdispids": (await $.ref_(C, "CEventDispIDs")), "licensekey": null, "flags": 29, "version": 401, "fontcount": 1, "fontids": (await $.ref_(C, "CTFontIDs"))};
  await $.set(C, "ControlData", L0["ccontroldata"]);
  {
    const $t1 = (await $.call(C, "TControlData2", [L0["ccontroldata"]]));
    await $.wset([$t1], "ClassID", (await $.wv([$t1], "FClassID", C, false)), C);
    await $.wset([$t1], "EventIID", (await $.wv([$t1], "FEventIID", C, false)), C);
    await $.wset([$t1], "FirstEventOfs", $.sub((await $.wcall([$t1], "Cardinal", [(await $.wv([$t1], "FOnActivate", C, true))], C)), (await $.wcall([$t1], "Cardinal", [Self], C))), C);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TActiveFormX", "CreateControl", async function CreateControl(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  L0["docreate"] = $.fn(async function DoCreate() {
  const L1 = {result: undefined};
  await $.set(C, "FIntf", (await $.call(C, "IUnknown", [(await $.v(C, "OleObject"))])));
  return L1.result;
});
  if ($.truthy($.eq((await $.v(C, "FIntf")), null))) {
    await $.stmt($.callv(L0["docreate"], []));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TActiveFormX", "GetControlInterface", async function GetControlInterface(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt($.call(C, "CreateControl", []));
  L0["result"] = (await $.v(C, "FIntf"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TActiveFormX", "CreateObject", async function CreateObject(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), "classid": $.copyArg(p1), "eventiid": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["aowner", "classid", "eventiid"]);
  await $.set(C, "FClassID", L0["classid"]);
  await $.set(C, "FEventIID", L0["eventiid"]);
  await $.inherited(Self, "TActiveFormX", "Create", [L0["aowner"]], arguments);
  return L0.result;
}, {"params": ["AOwner", "ClassID", "EventIID"], "kind": "constructor", "ptypes": ["TComponent", "TGuid", "TGuid"]});
  return U;
}
