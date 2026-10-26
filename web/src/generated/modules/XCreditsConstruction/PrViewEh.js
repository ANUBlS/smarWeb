// Generated from PrViewEh.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PrViewEh", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "PrntsEh", "ExtCtrls", "Printers", "PrvFrmEh"]);
  const C = [U];
  U.const("vm500", 0);
  U.const("vm200", 1);
  U.const("vm150", 2);
  U.const("vm100", 3);
  U.const("vm75", 4);
  U.const("vm50", 5);
  U.const("vm25", 6);
  U.const("vm10", 7);
  U.const("vmPageWidth", 8);
  U.const("vmFullPage", 9);
  U.defClass("TDrawPanel", "TPanel", {"foldmousepos": {"name": "FOldMousePos", "type": "TPoint"}}, {"canvas": {"name": "Canvas"}});
  U.defClass("TPreviewBox", "TScrollBox", {"fdrawpanel": {"name": "FDrawPanel", "type": "TDrawPanel"}, "fonopenpreviewer": {"name": "FOnOpenPreviewer", "type": "TNotifyEvent"}, "fonprinterpreviewchanged": {"name": "FOnPrinterPreviewChanged", "type": "TNotifyEvent"}, "fonprintersetupchanged": {"name": "FOnPrinterSetupChanged", "type": "TNotifyEvent"}, "fonprintersetupdialog": {"name": "FOnPrinterSetupDialog", "type": "TNotifyEvent"}, "fpagecount": {"name": "FPageCount", "type": "Integer"}, "fpageindex": {"name": "FPageIndex", "type": "Integer"}, "fprinter": {"name": "FPrinter", "type": "TPrinterPreview"}, "fprintersetupowner": {"name": "FPrinterSetupOwner", "type": "TComponent"}, "fviewmode": {"name": "FViewMode", "type": "TViewMode"}, "pnlshadow": {"name": "pnlShadow", "type": "TPanel"}, "fscalepercent": {"name": "FScalePercent", "type": "Integer"}}, {"onprintersetupchanged": {"name": "OnPrinterSetupChanged", "read": "FOnPrinterSetupChanged"}, "onprintersetupdialog": {"name": "OnPrinterSetupDialog", "read": "FOnPrinterSetupDialog"}, "pagecount": {"name": "PageCount", "read": "FPageCount"}, "pageindex": {"name": "PageIndex", "read": "FPageIndex", "write": "SetPageIndex"}, "printer": {"name": "Printer", "read": "FPrinter", "write": "SetPrinter"}, "printersetupowner": {"name": "PrinterSetupOwner", "read": "FPrinterSetupOwner", "write": "SetPrinterSetupOwner"}, "viewmode": {"name": "ViewMode", "read": "FViewMode", "write": "SetViewMode"}, "onopenpreviewer": {"name": "OnOpenPreviewer", "read": "FOnOpenPreviewer", "write": "FOnOpenPreviewer"}, "onprinterpreviewchanged": {"name": "OnPrinterPreviewChanged", "read": "FOnPrinterPreviewChanged", "write": "FOnPrinterPreviewChanged"}});
  U.defClass("TPrinterPreview", "TVirtualPrinter", {"faborted": {"name": "FAborted", "type": "Boolean"}, "fmetafilecanvas": {"name": "FMetafileCanvas", "type": "TMetafileCanvas"}, "fmetafilelist": {"name": "FMetafileList", "type": "TList"}, "fonprintersetupchanged": {"name": "FOnPrinterSetupChanged", "type": "TNotifyEvent"}, "fonprintersetupdialog": {"name": "FOnPrinterSetupDialog", "type": "TNotifyEvent"}, "fpagenumber": {"name": "FPageNumber", "type": "Integer"}, "fpreviewer": {"name": "FPreviewer", "type": "TPreviewBox"}, "fprinter": {"name": "FPrinter", "type": "TPrinter"}, "fprintersetupowner": {"name": "FPrinterSetupOwner", "type": "TComponent"}, "fprinting": {"name": "FPrinting", "type": "Boolean"}}, {"onprintersetupchanged": {"name": "OnPrinterSetupChanged", "read": "FOnPrinterSetupChanged", "write": "FOnPrinterSetupChanged"}, "onprintersetupdialog": {"name": "OnPrinterSetupDialog", "read": "FOnPrinterSetupDialog", "write": "SetOnPrinterSetupDialog"}, "previewer": {"name": "Previewer", "read": "FPreviewer", "write": "SetPreviewer"}, "printer": {"name": "Printer", "read": "GetPropPrinter"}, "printersetupowner": {"name": "PrinterSetupOwner", "read": "FPrinterSetupOwner", "write": "FPrinterSetupOwner"}});
  U.init(async () => {
    U.const("DefaultPrinterPhysicalOffSetX", 130);
    U.const("DefaultPrinterPhysicalOffSetY", 150);
    U.const("DefaultPrinterPageWidth", 4676);
    U.const("DefaultPrinterPageHeight", 6744);
    U.const("DefaultPrinterPixelsPerInchX", 600);
    U.const("DefaultPrinterPixelsPerInchY", 600);
    U.const("DefaultPrinterVerticalSizeMM", 285);
    U.const("DefaultPrinterHorizontalSizeMM", 198);
    U.var_("crMagnifier", 0, "Integer");
    U.var_("crHand", 0, "Integer");
    U.var_("FPrinterPreview", null, "TPrinterPreview");
  });
  U.func("PrintersSetPrinter", async function PrintersSetPrinter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"newprinter": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["newprinter"]);
  L0["result"] = (await $.call(C, "SetPrinter", [L0["newprinter"]]));
  return L0.result;
}, {"params": ["NewPrinter"], "kind": "function", "ptypes": ["TPrinter"]});
  U.func("PrintersPrinter", async function PrintersPrinter(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "Printer"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TDrawPanel", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TDrawPanel", "Create", [L0["aowner"]], arguments);
  await $.set(C, "Color", (await $.v(C, "clWhite")));
  await $.set(C, "Cursor", (await $.v(C, "crMagnifier")));
  await $.set(C, "ControlStyle", $.add((await $.v(C, "ControlStyle")), [(await $.v(C, "csCaptureMouse"))]));
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TDrawPanel", "CreateParams", async function CreateParams(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"params": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TDrawPanel", "CreateParams", [(await L0["params"].get())], arguments);
  await $.mset((await $.mv((await L0["params"].get()), "WindowClass")), "style", (await $.and_((await $.mv((await $.mv((await L0["params"].get()), "WindowClass")), "style")), async () => $.not(((await $.or_((await $.v(C, "CS_HREDRAW")), async () => (await $.v(C, "CS_VREDRAW")))))))));
  return L0.result;
}, {"params": ["Params"], "kind": "procedure", "ptypes": ["TCreateParams"]});
  U.method("TDrawPanel", "MouseDown", async function MouseDown(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"button": $.copyArg(p0), "shift": $.copyArg(p1), "x": $.copyArg(p2), "y": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["button", "shift", "x", "y"]);
  await $.inherited(Self, "TDrawPanel", "MouseDown", [L0["button"], L0["shift"], L0["x"], L0["y"]], arguments);
  await $.set(C, "FOldMousePos", (await $.call(C, "Point", [L0["x"], L0["y"]])));
  return L0.result;
}, {"params": ["Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TDrawPanel", "MouseMove", async function MouseMove(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"shift": $.copyArg(p0), "x": $.copyArg(p1), "y": $.copyArg(p2), result: undefined, "parent": null, "oldscrollpos": null};
  await $.fixArgs(L0, ["shift", "x", "y"]);
  await $.inherited(Self, "TDrawPanel", "MouseMove", [L0["shift"], L0["x"], L0["y"]], arguments);
  L0["parent"] = (await $.call(C, "TPreviewBox", [(await $.mv(Self, "Parent"))]));
  if ($.truthy((await $.and_((await $.and_(($.in_((await $.v(C, "ssLeft")), L0["shift"])), async () => ((await $.or_((await $.or_(($.ne((await $.mv((await $.v(C, "FOldMousePos")), "x")), L0["x"])), async () => ($.ne((await $.mv((await $.v(C, "FOldMousePos")), "y")), L0["y"])))), async () => ($.eq((await $.v(C, "Cursor")), (await $.v(C, "crHand"))))))))), async () => (await $.v(C, "MouseCapture")))))) {
    if ($.truthy(($.ne((await $.v(C, "Cursor")), (await $.v(C, "crHand")))))) {
      await $.set(C, "Cursor", (await $.v(C, "crHand")));
      await $.stmt((await $.call(C, "Perform", [(await $.v(C, "WM_SETCURSOR")), (await $.v(C, "Handle")), (await $.v(C, "HTCLIENT"))])));
    }
    L0["oldscrollpos"] = (await $.call(C, "Point", [(await $.mv((await $.mv(L0["parent"], "HorzScrollBar")), "Position")), (await $.mv((await $.mv(L0["parent"], "VertScrollBar")), "Position"))]));
    await $.mset((await $.mv(L0["parent"], "VertScrollBar")), "Position", $.sub($.add((await $.mv((await $.mv(L0["parent"], "VertScrollBar")), "Position")), (await $.mv((await $.v(C, "FOldMousePos")), "y"))), L0["y"]));
    await $.mset((await $.mv(L0["parent"], "HorzScrollBar")), "Position", $.sub($.add((await $.mv((await $.mv(L0["parent"], "HorzScrollBar")), "Position")), (await $.mv((await $.v(C, "FOldMousePos")), "x"))), L0["x"]));
    if ($.truthy($.eq((await $.mv(L0["oldscrollpos"], "x")), (await $.mv((await $.mv(L0["parent"], "HorzScrollBar")), "Position"))))) {
      await $.mset((await $.v(C, "FOldMousePos")), "x", L0["x"]);
    }
    if ($.truthy($.eq((await $.mv(L0["oldscrollpos"], "y")), (await $.mv((await $.mv(L0["parent"], "VertScrollBar")), "Position"))))) {
      await $.mset((await $.v(C, "FOldMousePos")), "y", L0["y"]);
    }
  }
  return L0.result;
}, {"params": ["Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TShiftState", "Integer", "Integer"]});
  U.method("TDrawPanel", "MouseUp", async function MouseUp(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"button": $.copyArg(p0), "shift": $.copyArg(p1), "x": $.copyArg(p2), "y": $.copyArg(p3), result: undefined, "oldh": 0, "oldw": 0, "oldl": 0, "oldt": 0, "parent": null};
  await $.fixArgs(L0, ["button", "shift", "x", "y"]);
  await $.inherited(Self, "TDrawPanel", "MouseUp", [L0["button"], L0["shift"], L0["x"], L0["y"]], arguments);
  if ($.truthy($.eq((await $.v(C, "Cursor")), (await $.v(C, "crMagnifier"))))) {
    L0["parent"] = (await $.call(C, "TPreviewBox", [(await $.mv(Self, "Parent"))]));
    if ($.truthy($.eq((await $.mv(L0["parent"], "ViewMode")), (await $.v(C, "vmFullPage"))))) {
      L0["oldh"] = (await $.v(C, "Height"));
      L0["oldw"] = (await $.v(C, "Width"));
      L0["oldl"] = (await $.v(C, "Left"));
      L0["oldt"] = (await $.v(C, "Top"));
      await $.mset(L0["parent"], "ViewMode", (await $.v(C, "vm150")));
      await $.mset((await $.mv(L0["parent"], "VertScrollBar")), "Position", $.sub($.sub($.add($.idiv($.mul((await $.v(C, "Height")), L0["y"]), L0["oldh"]), 16), L0["oldt"]), L0["y"]));
      await $.mset((await $.mv(L0["parent"], "HorzScrollBar")), "Position", $.sub($.sub($.add($.idiv($.mul((await $.v(C, "Width")), L0["x"]), L0["oldw"]), 16), L0["oldl"]), L0["x"]));
    } else {
      await $.mset(L0["parent"], "ViewMode", (await $.v(C, "vmFullPage")));
    }
  } else {
    await $.set(C, "Cursor", (await $.v(C, "crMagnifier")));
  }
  return L0.result;
}, {"params": ["Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TDrawPanel", "Paint", async function Paint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "fullwidth": 0, "fullheight": 0, "xoffset": 0, "yoffset": 0, "parent": null};
  L0["parent"] = (await $.call(C, "TPreviewBox", [(await $.mv(Self, "Parent"))]));
  if ($.truthy($.gt((await $.mv((await $.mv((await $.mv(L0["parent"], "Printer")), "Printers")), "Count")), 0))) {
    L0["xoffset"] = (await $.call(C, "GetDeviceCaps", [(await $.mv((await $.mv(L0["parent"], "Printer")), "Handle")), (await $.v(C, "PHYSICALOFFSETX"))]));
    L0["yoffset"] = (await $.call(C, "GetDeviceCaps", [(await $.mv((await $.mv(L0["parent"], "Printer")), "Handle")), (await $.v(C, "PHYSICALOFFSETY"))]));
  } else {
    L0["xoffset"] = (await $.v(C, "DefaultPrinterPhysicalOffSetX"));
    L0["yoffset"] = (await $.v(C, "DefaultPrinterPhysicalOffSetY"));
  }
  L0["fullwidth"] = $.add((await $.mv((await $.mv(L0["parent"], "Printer")), "PageWidth")), $.mul(L0["xoffset"], 2));
  L0["fullheight"] = $.add((await $.mv((await $.mv(L0["parent"], "Printer")), "PageHeight")), $.mul(L0["yoffset"], 2));
  {
    const $t1 = (await $.v(C, "Canvas"));
    await $.mset((await $.wv([$t1], "Brush", C, false)), "Color", (await $.wv([$t1], "clWhite", C, false)));
    await $.mset((await $.wv([$t1], "Brush", C, false)), "Style", (await $.wv([$t1], "bsSolid", C, false)));
    await $.stmt((await $.wcall([$t1], "FillRect", [(await $.wv([$t1], "ClientRect", C, false))], C)));
    await $.stmt((await $.wcall([$t1], "SetMapMode", [(await $.mv((await $.wv([$t1], "Canvas", C, false)), "Handle")), (await $.wv([$t1], "mm_AnIsotropic", C, false))], C)));
    await $.stmt((await $.wcall([$t1], "SetWindowExtEx", [(await $.mv((await $.wv([$t1], "Canvas", C, false)), "Handle")), (await $.wv([$t1], "FullWidth", { get: async () => L0["fullwidth"], set: async (v) => { L0["fullwidth"] = v; }, local: true }, false)), (await $.wv([$t1], "FullHeight", { get: async () => L0["fullheight"], set: async (v) => { L0["fullheight"] = v; }, local: true }, false)), null], C)));
    await $.stmt((await $.wcall([$t1], "SetViewportExtEx", [(await $.mv((await $.wv([$t1], "Canvas", C, false)), "Handle")), (await $.wv([$t1], "Width", C, false)), (await $.wv([$t1], "Height", C, false)), null], C)));
    await $.stmt((await $.wcall([$t1], "SetViewportOrgEx", [(await $.mv((await $.wv([$t1], "Canvas", C, false)), "Handle")), (await $.wcall([$t1], "Trunc", [$.fdiv($.mul((await $.wv([$t1], "XOffSet", { get: async () => L0["xoffset"], set: async (v) => { L0["xoffset"] = v; }, local: true }, false)), (await $.wv([$t1], "Width", C, false))), (await $.wv([$t1], "FullWidth", { get: async () => L0["fullwidth"], set: async (v) => { L0["fullwidth"] = v; }, local: true }, false)))], C)), (await $.wcall([$t1], "Trunc", [$.fdiv($.mul((await $.wv([$t1], "YOffSet", { get: async () => L0["yoffset"], set: async (v) => { L0["yoffset"] = v; }, local: true }, false)), (await $.wv([$t1], "Height", C, false))), (await $.wv([$t1], "FullHeight", { get: async () => L0["fullheight"], set: async (v) => { L0["fullheight"] = v; }, local: true }, false)))], C)), null], C)));
    if ($.truthy($.gt((await $.mv((await $.mv((await $.mv((await $.wv([$t1], "Parent", { get: async () => L0["parent"], set: async (v) => { L0["parent"] = v; }, local: true }, false)), "Printer")), "Printers")), "Count")), 0))) {
      await $.mset((await $.wv([$t1], "Font", C, false)), "PixelsPerInch", (await $.wcall([$t1], "GetDeviceCaps", [(await $.mv((await $.mv((await $.wv([$t1], "Parent", { get: async () => L0["parent"], set: async (v) => { L0["parent"] = v; }, local: true }, false)), "Printer")), "Handle")), (await $.wv([$t1], "LOGPIXELSX", C, false))], C)));
      if ($.truthy($.gt((await $.mv((await $.wv([$t1], "Font", C, false)), "PixelsPerInch")), (await $.wcall([$t1], "GetDeviceCaps", [(await $.mv((await $.mv((await $.wv([$t1], "Parent", { get: async () => L0["parent"], set: async (v) => { L0["parent"] = v; }, local: true }, false)), "Printer")), "Handle")), (await $.wv([$t1], "LOGPIXELSY", C, false))], C))))) {
        await $.mset((await $.wv([$t1], "Font", C, false)), "PixelsPerInch", (await $.wcall([$t1], "GetDeviceCaps", [(await $.mv((await $.mv((await $.wv([$t1], "Parent", { get: async () => L0["parent"], set: async (v) => { L0["parent"] = v; }, local: true }, false)), "Printer")), "Handle")), (await $.wv([$t1], "LOGPIXELSY", C, false))], C)));
      }
    } else {
      await $.mset((await $.wv([$t1], "Font", C, false)), "PixelsPerInch", (await $.wv([$t1], "DefaultPrinterPixelsPerInchX", C, false)));
    }
    if ($.truthy((await $.and_((await $.wcall([$t1], "Assigned", [(await $.mv((await $.wv([$t1], "Parent", { get: async () => L0["parent"], set: async (v) => { L0["parent"] = v; }, local: true }, false)), "Printer"))], C)), async () => ($.gt((await $.mv((await $.wv([$t1], "Parent", { get: async () => L0["parent"], set: async (v) => { L0["parent"] = v; }, local: true }, false)), "PageCount")), 0)))))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "Parent", { get: async () => L0["parent"], set: async (v) => { L0["parent"] = v; }, local: true }, false)), "Printer")), "DrawPage", [Self, (await $.mv(Self, "Canvas")), (await $.mv((await $.wv([$t1], "Parent", { get: async () => L0["parent"], set: async (v) => { L0["parent"] = v; }, local: true }, false)), "PageIndex"))])));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TDrawPanel", "WMCancelMode", async function WMCancelMode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TDrawPanel", "WMCancelMode", null, arguments);
  if ($.truthy($.eq((await $.v(C, "Cursor")), (await $.v(C, "crHand"))))) {
    await $.set(C, "Cursor", (await $.v(C, "crMagnifier")));
  }
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TWMCancelMode"]});
  U.method("TPreviewBox", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TPreviewBox", "Create", [L0["aowner"]], arguments);
  await $.set(C, "ControlStyle", $.sub((await $.v(C, "ControlStyle")), [(await $.v(C, "csAcceptsControls"))]));
  await $.set(C, "FViewMode", (await $.v(C, "vmFullPage")));
  await $.set(C, "FPageCount", 0);
  await $.set(C, "FPageIndex", 1);
  await $.set(C, "pnlShadow", (await $.mcall((await $.v(C, "TPanel")), "Create", [Self])));
  {
    const $t2 = (await $.v(C, "pnlShadow"));
    await $.wset([$t2], "ControlStyle", $.sub((await $.wv([$t2], "ControlStyle", C, false)), [(await $.wv([$t2], "csAcceptsControls", C, false))]), C);
    await $.wset([$t2], "Parent", Self, C);
    await $.wset([$t2], "BevelOuter", (await $.wv([$t2], "bvNone", C, false)), C);
    await $.wset([$t2], "Color", 4210752, C);
    await $.wset([$t2], "Enabled", (await $.wv([$t2], "False", C, false)), C);
    await $.wset([$t2], "TabOrder", 0, C);
  }
  await $.set(C, "FDrawPanel", (await $.mcall((await $.v(C, "TDrawPanel")), "Create", [Self])));
  {
    const $t3 = (await $.v(C, "FDrawPanel"));
    await $.wset([$t3], "ControlStyle", $.sub((await $.wv([$t3], "ControlStyle", C, false)), [(await $.wv([$t3], "csAcceptsControls", C, false))]), C);
    await $.wset([$t3], "Parent", Self, C);
    await $.wset([$t3], "BevelOuter", (await $.wv([$t3], "bvNone", C, false)), C);
    await $.wset([$t3], "ParentCtl3D", (await $.wv([$t3], "False", C, false)), C);
    await $.wset([$t3], "Ctl3D", (await $.wv([$t3], "False", C, false)), C);
    await $.wset([$t3], "BorderStyle", (await $.wv([$t3], "bsSingle", C, false)), C);
    await $.wset([$t3], "Left", 8, C);
    await $.wset([$t3], "Top", 8, C);
  }
  await $.set(C, "FPrinter", (await $.mv((await $.v(C, "TPrinterPreview")), "Create")));
  await $.mset((await $.v(C, "FPrinter")), "Previewer", Self);
  await $.mset((await $.v(C, "HorzScrollBar")), "Tracking", true);
  await $.mset((await $.v(C, "VertScrollBar")), "Tracking", true);
  await $.set(C, "FScalePercent", 100);
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TPreviewBox", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "FPrinter")), "Free", []);
  await $.inherited(Self, "TPreviewBox", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TPreviewBox", "CreateParams", async function CreateParams(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"params": $.asRef(p0), result: undefined};
  L0["borderstyles"] = [0, (await $.v(C, "WS_BORDER"))];
  await $.inherited(Self, "TPreviewBox", "CreateParams", [(await L0["params"].get())], arguments);
  await $.mset((await L0["params"].get()), "Style", (await $.or_((await $.mv((await L0["params"].get()), "Style")), async () => (await $.v(C, "WS_CLIPCHILDREN")))));
  return L0.result;
}, {"params": ["Params"], "kind": "procedure", "ptypes": ["TCreateParams"]});
  U.method("TPreviewBox", "KeyDown", async function KeyDown(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.asRef(p0), "shift": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["shift"]);
  await $.inherited(Self, "TPreviewBox", "KeyDown", null, arguments);
  {
    const $t4 = (await $.v(C, "VertScrollBar"));
    { const $t5 = (await $.wv([$t4], "Key", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true }, false));
      if ($.eq($t5, (await $.wv([$t4], "VK_UP", C, false)))) {
        if ($.truthy($.in_((await $.wv([$t4], "ssCtrl", C, false)), (await $.wv([$t4], "Shift", { get: async () => L0["shift"], set: async (v) => { L0["shift"] = v; }, local: true }, false))))) {
          await $.wset([$t4], "Position", $.add($.sub((await $.wv([$t4], "Position", C, false)), (await $.wv([$t4], "ClientHeight", C, false))), (await $.wv([$t4], "Increment", C, false))), C);
        } else {
          await $.wset([$t4], "Position", $.sub((await $.wv([$t4], "Position", C, false)), (await $.wv([$t4], "Increment", C, false))), C);
        }
      }
      else if ($.eq($t5, (await $.wv([$t4], "VK_Down", C, false)))) {
        if ($.truthy($.in_((await $.wv([$t4], "ssCtrl", C, false)), (await $.wv([$t4], "Shift", { get: async () => L0["shift"], set: async (v) => { L0["shift"] = v; }, local: true }, false))))) {
          await $.wset([$t4], "Position", $.sub($.add((await $.wv([$t4], "Position", C, false)), (await $.wv([$t4], "ClientHeight", C, false))), (await $.wv([$t4], "Increment", C, false))), C);
        } else {
          await $.wset([$t4], "Position", $.add((await $.wv([$t4], "Position", C, false)), (await $.wv([$t4], "Increment", C, false))), C);
        }
      }
      else if ($.eq($t5, (await $.wv([$t4], "VK_Prior", C, false)))) {
        if ($.truthy($.in_((await $.wv([$t4], "ssCtrl", C, false)), (await $.wv([$t4], "Shift", { get: async () => L0["shift"], set: async (v) => { L0["shift"] = v; }, local: true }, false))))) {
          await $.wset([$t4], "Position", 0, C);
        } else {
          await $.wset([$t4], "Position", $.add($.sub((await $.wv([$t4], "Position", C, false)), (await $.wv([$t4], "ClientHeight", C, false))), (await $.wv([$t4], "Increment", C, false))), C);
        }
      }
      else if ($.eq($t5, (await $.wv([$t4], "VK_Next", C, false)))) {
        if ($.truthy($.in_((await $.wv([$t4], "ssCtrl", C, false)), (await $.wv([$t4], "Shift", { get: async () => L0["shift"], set: async (v) => { L0["shift"] = v; }, local: true }, false))))) {
          await $.wset([$t4], "Position", (await $.wv([$t4], "Range", C, false)), C);
        } else {
          await $.wset([$t4], "Position", $.sub($.add((await $.wv([$t4], "Position", C, false)), (await $.wv([$t4], "ClientHeight", C, false))), (await $.wv([$t4], "Increment", C, false))), C);
        }
      }
    }
  }
  {
    const $t6 = (await $.v(C, "HorzScrollBar"));
    { const $t7 = (await $.wv([$t6], "Key", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true }, false));
      if ($.eq($t7, (await $.wv([$t6], "VK_Left", C, false)))) {
        if ($.truthy($.in_((await $.wv([$t6], "ssCtrl", C, false)), (await $.wv([$t6], "Shift", { get: async () => L0["shift"], set: async (v) => { L0["shift"] = v; }, local: true }, false))))) {
          await $.wset([$t6], "Position", $.add($.sub((await $.wv([$t6], "Position", C, false)), (await $.wv([$t6], "ClientWidth", C, false))), (await $.wv([$t6], "Increment", C, false))), C);
        } else {
          await $.wset([$t6], "Position", $.sub((await $.wv([$t6], "Position", C, false)), (await $.wv([$t6], "Increment", C, false))), C);
        }
      }
      else if ($.eq($t7, (await $.wv([$t6], "VK_Right", C, false)))) {
        if ($.truthy($.in_((await $.wv([$t6], "ssCtrl", C, false)), (await $.wv([$t6], "Shift", { get: async () => L0["shift"], set: async (v) => { L0["shift"] = v; }, local: true }, false))))) {
          await $.wset([$t6], "Position", $.sub($.add((await $.wv([$t6], "Position", C, false)), (await $.wv([$t6], "ClientWidth", C, false))), (await $.wv([$t6], "Increment", C, false))), C);
        } else {
          await $.wset([$t6], "Position", $.add((await $.wv([$t6], "Position", C, false)), (await $.wv([$t6], "Increment", C, false))), C);
        }
      }
      else if ($.eq($t7, (await $.wv([$t6], "VK_Home", C, false)))) {
        if ($.truthy($.in_((await $.wv([$t6], "ssCtrl", C, false)), (await $.wv([$t6], "Shift", { get: async () => L0["shift"], set: async (v) => { L0["shift"] = v; }, local: true }, false))))) {
          await $.wset([$t6], "Position", 0, C);
          await $.mset((await $.wv([$t6], "VertScrollBar", C, false)), "Position", 0);
        } else {
          await $.wset([$t6], "Position", 0, C);
        }
      }
      else if ($.eq($t7, (await $.wv([$t6], "VK_End", C, false)))) {
        if ($.truthy($.in_((await $.wv([$t6], "ssCtrl", C, false)), (await $.wv([$t6], "Shift", { get: async () => L0["shift"], set: async (v) => { L0["shift"] = v; }, local: true }, false))))) {
          await $.wset([$t6], "Position", (await $.wv([$t6], "Range", C, false)), C);
          await $.mset((await $.wv([$t6], "VertScrollBar", C, false)), "Position", (await $.mv((await $.wv([$t6], "VertScrollBar", C, false)), "Range")));
        } else {
          await $.wset([$t6], "Position", (await $.wv([$t6], "Range", C, false)), C);
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Key", "Shift"], "kind": "procedure", "ptypes": ["Word", "TShiftState"]});
  U.method("TPreviewBox", "MouseDown", async function MouseDown(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"button": $.copyArg(p0), "shift": $.copyArg(p1), "x": $.copyArg(p2), "y": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["button", "shift", "x", "y"]);
  await $.stmt($.call(C, "SetFocus", []));
  return L0.result;
}, {"params": ["Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TPreviewBox", "PrintDialog", async function PrintDialog(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "page": 0, "oldprinter": null};
  L0["oldprinter"] = (await $.call(C, "PrintersSetPrinter", [(await $.mv((await $.v(C, "Printer")), "Printer"))]));
  try {
    {
      const $t8 = (await $.mcall((await $.v(C, "TPrintDialog")), "Create", [(await $.v(C, "Owner"))]));
      try {
        await $.wset([$t8], "Options", $.add((await $.wv([$t8], "Options", C, false)), [(await $.wv([$t8], "poPageNums", C, false))]), C);
        await $.wset([$t8], "MinPage", 1, C);
        await $.wset([$t8], "MaxPage", (await $.wv([$t8], "PageCount", C, false)), C);
        await $.wset([$t8], "FromPage", 1, C);
        await $.wset([$t8], "ToPage", (await $.wv([$t8], "PageCount", C, false)), C);
        if ($.truthy((await $.wv([$t8], "Execute", C, false)))) {
          if ($.truthy((await $.wcall([$t8], "Assigned", [(await $.wv([$t8], "Printer", C, false))], C)))) {
            if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t8], "Printer", C, false)), "FMetafileList")), "Count")), 0))) {
              return L0.result;
            }
            {
              const $t9 = (await $.wv([$t8], "PrintersPrinter", C, false));
              await $.stmt($.wcall([$t8, $t9], "BeginDoc", [], C));
              { const $t10 = (await $.wv([$t8, $t9], "ToPage", C, false));
                await $.wset([$t8, $t9], "Page", (await $.wv([$t8, $t9], "FromPage", C, false)), { get: async () => L0["page"], set: async (v) => { L0["page"] = v; }, local: true });
                let $t11 = true;
                for (;;) {
                  if (!$t11) { await $.wset([$t8, $t9], "Page", $.succ((await $.wv([$t8, $t9], "Page", { get: async () => L0["page"], set: async (v) => { L0["page"] = v; }, local: true }, false)), 1), { get: async () => L0["page"], set: async (v) => { L0["page"] = v; }, local: true }); }
                  $t11 = false;
                  if (!($.ord((await $.wv([$t8, $t9], "Page", { get: async () => L0["page"], set: async (v) => { L0["page"] = v; }, local: true }, false))) <= $.ord($t10))) break;
                  await $.stmt((await $.mcall((await $.wv([$t8, $t9], "Printer", C, false)), "DrawPage", [(await $.wv([$t8, $t9], "Printer", C, false)), (await $.wv([$t8, $t9], "Canvas", C, false)), (await $.wv([$t8, $t9], "Page", { get: async () => L0["page"], set: async (v) => { L0["page"] = v; }, local: true }, false))])));
                  if ($.truthy($.lt((await $.wv([$t8, $t9], "Page", { get: async () => L0["page"], set: async (v) => { L0["page"] = v; }, local: true }, false)), (await $.wv([$t8, $t9], "ToPage", C, false))))) {
                    await $.stmt($.wcall([$t8, $t9], "NewPage", [], C));
                  }
                  await $.tick();
                }
              }
              await $.stmt($.wcall([$t8, $t9], "EndDoc", [], C));
            }
          }
        }
      } finally {
        await $.stmt($.wcall([$t8], "Free", [], C));
      }
    }
  } finally {
    await $.stmt((await $.call(C, "PrintersSetPrinter", [L0["oldprinter"]])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPreviewBox", "PrinterSetupDialog", async function PrinterSetupDialog(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "oldprinter": null};
  L0["oldprinter"] = (await $.call(C, "PrintersSetPrinter", [(await $.mv((await $.v(C, "Printer")), "Printer"))]));
  try {
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "OnPrinterSetupDialog"))])))) {
      await $.stmt((await $.call(C, "OnPrinterSetupDialog", [Self])));
    } else {
      {
        const $t12 = (await $.mcall((await $.v(C, "TPrinterSetupDialog")), "Create", [(await $.v(C, "Owner"))]));
        try {
          if ($.truthy((await $.wv([$t12], "Execute", C, false)))) {
            await $.stmt($.wcall([$t12], "UpdatePageSetup", [], C));
            if ($.truthy((await $.wcall([$t12], "Assigned", [(await $.wv([$t12], "FOnPrinterSetupChanged", C, false))], C)))) {
              await $.stmt((await $.wcall([$t12], "FOnPrinterSetupChanged", [Self], C)));
            }
          }
        } finally {
          await $.stmt($.wcall([$t12], "Free", [], C));
        }
      }
    }
  } finally {
    await $.stmt((await $.call(C, "PrintersSetPrinter", [L0["oldprinter"]])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPreviewBox", "SetPageIndex", async function SetPageIndex(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy($.lt(L0["value"], 1))) {
    L0["value"] = 1;
  }
  if ($.truthy($.gt(L0["value"], (await $.v(C, "PageCount"))))) {
    L0["value"] = (await $.v(C, "PageCount"));
  }
  if ($.truthy($.ne(L0["value"], (await $.v(C, "FPageIndex"))))) {
    await $.set(C, "FPageIndex", L0["value"]);
    await $.stmt($.call(C, "UpdatePreview", []));
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "OnPrinterPreviewChanged"))])))) {
      await $.stmt((await $.call(C, "OnPrinterPreviewChanged", [Self])));
    }
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TPreviewBox", "SetPrinter", async function SetPrinter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FPrinter", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TPrinterPreview"]});
  U.method("TPreviewBox", "SetViewMode", async function SetViewMode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy($.ne(L0["value"], (await $.v(C, "FViewMode"))))) {
    await $.set(C, "FViewMode", L0["value"]);
    await $.stmt($.call(C, "UpdatePageSetup", []));
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "OnPrinterPreviewChanged"))])))) {
    await $.stmt((await $.call(C, "OnPrinterPreviewChanged", [Self])));
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TViewMode"]});
  U.method("TPreviewBox", "UpdatePageSetup", async function UpdatePageSetup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "scaling": 0, "aleft": 0, "atop": 0, "awidth": 0, "aheight": 0};
  try {
    {
      const $t13 = (await $.v(C, "FDrawPanel"));
      const $t14 = (await $.wv([$t13], "Printer", C, false));
      await $.wset([$t13, $t14], "ALeft", (await $.wv([$t13, $t14], "Left", C, false)), { get: async () => L0["aleft"], set: async (v) => { L0["aleft"] = v; }, local: true });
      await $.wset([$t13, $t14], "ATop", (await $.wv([$t13, $t14], "Top", C, false)), { get: async () => L0["atop"], set: async (v) => { L0["atop"] = v; }, local: true });
      await $.wset([$t13, $t14], "AWidth", (await $.wv([$t13, $t14], "Width", C, false)), { get: async () => L0["awidth"], set: async (v) => { L0["awidth"] = v; }, local: true });
      await $.wset([$t13, $t14], "AHeight", (await $.wv([$t13, $t14], "Height", C, false)), { get: async () => L0["aheight"], set: async (v) => { L0["aheight"] = v; }, local: true });
      { const $t15 = (await $.wv([$t13, $t14], "FViewMode", C, false));
        if ($.eq($t15, (await $.wv([$t13, $t14], "vm500", C, false)))) {
          await $.wset([$t13, $t14], "Scaling", 500, { get: async () => L0["scaling"], set: async (v) => { L0["scaling"] = v; }, local: true });
        }
        else if ($.eq($t15, (await $.wv([$t13, $t14], "vm200", C, false)))) {
          await $.wset([$t13, $t14], "Scaling", 200, { get: async () => L0["scaling"], set: async (v) => { L0["scaling"] = v; }, local: true });
        }
        else if ($.eq($t15, (await $.wv([$t13, $t14], "vm150", C, false)))) {
          await $.wset([$t13, $t14], "Scaling", 150, { get: async () => L0["scaling"], set: async (v) => { L0["scaling"] = v; }, local: true });
        }
        else if ($.eq($t15, (await $.wv([$t13, $t14], "vm100", C, false)))) {
          await $.wset([$t13, $t14], "Scaling", 100, { get: async () => L0["scaling"], set: async (v) => { L0["scaling"] = v; }, local: true });
        }
        else if ($.eq($t15, (await $.wv([$t13, $t14], "vm75", C, false)))) {
          await $.wset([$t13, $t14], "Scaling", 75, { get: async () => L0["scaling"], set: async (v) => { L0["scaling"] = v; }, local: true });
        }
        else if ($.eq($t15, (await $.wv([$t13, $t14], "vm50", C, false)))) {
          await $.wset([$t13, $t14], "Scaling", 50, { get: async () => L0["scaling"], set: async (v) => { L0["scaling"] = v; }, local: true });
        }
        else if ($.eq($t15, (await $.wv([$t13, $t14], "vm25", C, false)))) {
          await $.wset([$t13, $t14], "Scaling", 25, { get: async () => L0["scaling"], set: async (v) => { L0["scaling"] = v; }, local: true });
        }
        else if ($.eq($t15, (await $.wv([$t13, $t14], "vm10", C, false)))) {
          await $.wset([$t13, $t14], "Scaling", 10, { get: async () => L0["scaling"], set: async (v) => { L0["scaling"] = v; }, local: true });
        }
        else if ($.eq($t15, (await $.wv([$t13, $t14], "vmPageWidth", C, false)))) {
          await $.mset((await $.wv([$t13, $t14], "VertScrollBar", C, false)), "Position", 0);
          await $.mset((await $.wv([$t13, $t14], "HorzScrollBar", C, false)), "Position", 0);
          await $.wset([$t13, $t14], "Scaling", 1, { get: async () => L0["scaling"], set: async (v) => { L0["scaling"] = v; }, local: true });
          await $.wset([$t13, $t14], "ALeft", 8, { get: async () => L0["aleft"], set: async (v) => { L0["aleft"] = v; }, local: true });
          await $.wset([$t13, $t14], "ATop", 8, { get: async () => L0["atop"], set: async (v) => { L0["atop"] = v; }, local: true });
          await $.wset([$t13, $t14], "AWidth", $.sub($.sub((await $.mv(Self, "Width")), 20), (await $.wcall([$t13, $t14], "GetSystemMetrics", [(await $.wv([$t13, $t14], "sm_CXVScroll", C, false))], C))), { get: async () => L0["awidth"], set: async (v) => { L0["awidth"] = v; }, local: true });
          if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t13, $t14], "Printer", C, false)), "Printers")), "Count")), 0))) {
            await $.wset([$t13, $t14], "AHeight", $.idiv($.mul((await $.wv([$t13, $t14], "AWidth", { get: async () => L0["awidth"], set: async (v) => { L0["awidth"] = v; }, local: true }, false)), (await $.wcall([$t13, $t14], "GetDeviceCaps", [(await $.mv((await $.wv([$t13, $t14], "Printer", C, false)), "Handle")), (await $.wv([$t13, $t14], "VertSize", C, false))], C))), (await $.wcall([$t13, $t14], "GetDeviceCaps", [(await $.mv((await $.wv([$t13, $t14], "Printer", C, false)), "Handle")), (await $.wv([$t13, $t14], "HorzSize", C, false))], C))), { get: async () => L0["aheight"], set: async (v) => { L0["aheight"] = v; }, local: true });
            await $.wset([$t13, $t14], "FScalePercent", $.idiv($.mul((await $.wv([$t13, $t14], "AWidth", { get: async () => L0["awidth"], set: async (v) => { L0["awidth"] = v; }, local: true }, false)), 100), ($.idiv($.mul((await $.wv([$t13, $t14], "PageWidth", C, false)), (await $.mv(((await $.mv(Self, "Owner"))), "PixelsPerInch"))), (await $.wcall([$t13, $t14], "GetDeviceCaps", [(await $.mv((await $.wv([$t13, $t14], "Printer", C, false)), "Handle")), (await $.wv([$t13, $t14], "LOGPIXELSX", C, false))], C))))), C);
          } else {
            await $.wset([$t13, $t14], "AHeight", $.idiv($.mul((await $.wv([$t13, $t14], "AWidth", { get: async () => L0["awidth"], set: async (v) => { L0["awidth"] = v; }, local: true }, false)), (await $.wv([$t13, $t14], "DefaultPrinterVerticalSizeMM", C, false))), (await $.wv([$t13, $t14], "DefaultPrinterHorizontalSizeMM", C, false))), { get: async () => L0["aheight"], set: async (v) => { L0["aheight"] = v; }, local: true });
            await $.wset([$t13, $t14], "FScalePercent", $.idiv($.mul((await $.wv([$t13, $t14], "AWidth", { get: async () => L0["awidth"], set: async (v) => { L0["awidth"] = v; }, local: true }, false)), 100), ($.idiv($.mul((await $.wv([$t13, $t14], "PageWidth", C, false)), (await $.mv(((await $.mv(Self, "Owner"))), "PixelsPerInch"))), (await $.wv([$t13, $t14], "DefaultPrinterPixelsPerInchX", C, false))))), C);
          }
          await $.mset((await $.wv([$t13, $t14], "VertScrollBar", C, false)), "Range", $.add((await $.wv([$t13, $t14], "AHeight", { get: async () => L0["aheight"], set: async (v) => { L0["aheight"] = v; }, local: true }, false)), 16));
          await $.mset((await $.wv([$t13, $t14], "HorzScrollBar", C, false)), "Range", 0);
        }
        else if ($.eq($t15, (await $.wv([$t13, $t14], "vmFullPage", C, false)))) {
          await $.wset([$t13, $t14], "Scaling", 1, { get: async () => L0["scaling"], set: async (v) => { L0["scaling"] = v; }, local: true });
          await $.mset((await $.wv([$t13, $t14], "VertScrollBar", C, false)), "Range", 0);
          await $.mset((await $.wv([$t13, $t14], "HorzScrollBar", C, false)), "Range", 0);
          await $.mset((await $.wv([$t13, $t14], "VertScrollBar", C, false)), "Position", 0);
          await $.mset((await $.wv([$t13, $t14], "HorzScrollBar", C, false)), "Position", 0);
          await $.wset([$t13, $t14], "AHeight", $.sub((await $.mv(Self, "ClientHeight")), 16), { get: async () => L0["aheight"], set: async (v) => { L0["aheight"] = v; }, local: true });
          if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t13, $t14], "Printer", C, false)), "Printers")), "Count")), 0))) {
            await $.wset([$t13, $t14], "AWidth", $.idiv($.mul((await $.wv([$t13, $t14], "AHeight", { get: async () => L0["aheight"], set: async (v) => { L0["aheight"] = v; }, local: true }, false)), (await $.wcall([$t13, $t14], "GetDeviceCaps", [(await $.mv((await $.wv([$t13, $t14], "Printer", C, false)), "Handle")), (await $.wv([$t13, $t14], "HorzSize", C, false))], C))), (await $.wcall([$t13, $t14], "GetDeviceCaps", [(await $.mv((await $.wv([$t13, $t14], "Printer", C, false)), "Handle")), (await $.wv([$t13, $t14], "VertSize", C, false))], C))), { get: async () => L0["awidth"], set: async (v) => { L0["awidth"] = v; }, local: true });
          } else {
            await $.wset([$t13, $t14], "AWidth", $.idiv($.mul((await $.wv([$t13, $t14], "AHeight", { get: async () => L0["aheight"], set: async (v) => { L0["aheight"] = v; }, local: true }, false)), (await $.wv([$t13, $t14], "DefaultPrinterHorizontalSizeMM", C, false))), (await $.wv([$t13, $t14], "DefaultPrinterVerticalSizeMM", C, false))), { get: async () => L0["awidth"], set: async (v) => { L0["awidth"] = v; }, local: true });
          }
          if ($.truthy($.gt((await $.wv([$t13, $t14], "AWidth", { get: async () => L0["awidth"], set: async (v) => { L0["awidth"] = v; }, local: true }, false)), $.sub((await $.mv(Self, "ClientWidth")), 16)))) {
            await $.wset([$t13, $t14], "AWidth", $.sub((await $.mv(Self, "ClientWidth")), 16), { get: async () => L0["awidth"], set: async (v) => { L0["awidth"] = v; }, local: true });
            if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t13, $t14], "Printer", C, false)), "Printers")), "Count")), 0))) {
              await $.wset([$t13, $t14], "AHeight", $.idiv($.mul((await $.wv([$t13, $t14], "AWidth", { get: async () => L0["awidth"], set: async (v) => { L0["awidth"] = v; }, local: true }, false)), (await $.wcall([$t13, $t14], "GetDeviceCaps", [(await $.mv((await $.wv([$t13, $t14], "Printer", C, false)), "Handle")), (await $.wv([$t13, $t14], "VertSize", C, false))], C))), (await $.wcall([$t13, $t14], "GetDeviceCaps", [(await $.mv((await $.wv([$t13, $t14], "Printer", C, false)), "Handle")), (await $.wv([$t13, $t14], "HorzSize", C, false))], C))), { get: async () => L0["aheight"], set: async (v) => { L0["aheight"] = v; }, local: true });
            } else {
              await $.wset([$t13, $t14], "AHeight", $.idiv($.mul((await $.wv([$t13, $t14], "AWidth", { get: async () => L0["awidth"], set: async (v) => { L0["awidth"] = v; }, local: true }, false)), (await $.wv([$t13, $t14], "DefaultPrinterVerticalSizeMM", C, false))), (await $.wv([$t13, $t14], "DefaultPrinterHorizontalSizeMM", C, false))), { get: async () => L0["aheight"], set: async (v) => { L0["aheight"] = v; }, local: true });
            }
          }
          await $.wset([$t13, $t14], "ALeft", $.idiv(($.sub((await $.mv(Self, "ClientWidth")), (await $.wv([$t13, $t14], "AWidth", { get: async () => L0["awidth"], set: async (v) => { L0["awidth"] = v; }, local: true }, false)))), 2), { get: async () => L0["aleft"], set: async (v) => { L0["aleft"] = v; }, local: true });
          await $.wset([$t13, $t14], "ATop", $.idiv(($.sub((await $.mv(Self, "ClientHeight")), (await $.wv([$t13, $t14], "AHeight", { get: async () => L0["aheight"], set: async (v) => { L0["aheight"] = v; }, local: true }, false)))), 2), { get: async () => L0["atop"], set: async (v) => { L0["atop"] = v; }, local: true });
          await $.wset([$t13, $t14], "FScalePercent", 100, C);
        }
        else {
          await $.wset([$t13, $t14], "Scaling", 1, { get: async () => L0["scaling"], set: async (v) => { L0["scaling"] = v; }, local: true });
        }
      }
      { const $t16 = (await $.wv([$t13, $t14], "FViewMode", C, false));
        if ($.inRange($t16, (await $.wv([$t13, $t14], "vm500", C, false)), (await $.wv([$t13, $t14], "vm10", C, false)))) {
          await $.mset((await $.wv([$t13, $t14], "VertScrollBar", C, false)), "Position", 0);
          await $.mset((await $.wv([$t13, $t14], "HorzScrollBar", C, false)), "Position", 0);
          await $.wset([$t13, $t14], "ALeft", 8, { get: async () => L0["aleft"], set: async (v) => { L0["aleft"] = v; }, local: true });
          await $.wset([$t13, $t14], "ATop", 8, { get: async () => L0["atop"], set: async (v) => { L0["atop"] = v; }, local: true });
          if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t13, $t14], "Printer", C, false)), "Printers")), "Count")), 0))) {
            await $.wset([$t13, $t14], "AWidth", $.idiv($.idiv($.mul($.mul((await $.wv([$t13, $t14], "Scaling", { get: async () => L0["scaling"], set: async (v) => { L0["scaling"] = v; }, local: true }, false)), (await $.wv([$t13, $t14], "PageWidth", C, false))), (await $.mv(((await $.mv(Self, "Owner"))), "PixelsPerInch"))), (await $.wcall([$t13, $t14], "GetDeviceCaps", [(await $.mv((await $.wv([$t13, $t14], "Printer", C, false)), "Handle")), (await $.wv([$t13, $t14], "LOGPIXELSX", C, false))], C))), 100), { get: async () => L0["awidth"], set: async (v) => { L0["awidth"] = v; }, local: true });
            await $.wset([$t13, $t14], "AHeight", $.idiv($.mul((await $.wv([$t13, $t14], "AWidth", { get: async () => L0["awidth"], set: async (v) => { L0["awidth"] = v; }, local: true }, false)), (await $.wcall([$t13, $t14], "GetDeviceCaps", [(await $.mv((await $.wv([$t13, $t14], "Printer", C, false)), "Handle")), (await $.wv([$t13, $t14], "VertSize", C, false))], C))), (await $.wcall([$t13, $t14], "GetDeviceCaps", [(await $.mv((await $.wv([$t13, $t14], "Printer", C, false)), "Handle")), (await $.wv([$t13, $t14], "HorzSize", C, false))], C))), { get: async () => L0["aheight"], set: async (v) => { L0["aheight"] = v; }, local: true });
          } else {
            await $.wset([$t13, $t14], "AWidth", $.idiv($.idiv($.mul($.mul((await $.wv([$t13, $t14], "Scaling", { get: async () => L0["scaling"], set: async (v) => { L0["scaling"] = v; }, local: true }, false)), (await $.wv([$t13, $t14], "PageWidth", C, false))), (await $.mv(((await $.mv(Self, "Owner"))), "PixelsPerInch"))), (await $.wv([$t13, $t14], "DefaultPrinterPixelsPerInchX", C, false))), 100), { get: async () => L0["awidth"], set: async (v) => { L0["awidth"] = v; }, local: true });
            await $.wset([$t13, $t14], "AHeight", $.idiv($.mul((await $.wv([$t13, $t14], "AWidth", { get: async () => L0["awidth"], set: async (v) => { L0["awidth"] = v; }, local: true }, false)), (await $.wv([$t13, $t14], "DefaultPrinterVerticalSizeMM", C, false))), (await $.wv([$t13, $t14], "DefaultPrinterHorizontalSizeMM", C, false))), { get: async () => L0["aheight"], set: async (v) => { L0["aheight"] = v; }, local: true });
          }
          await $.mset((await $.wv([$t13, $t14], "VertScrollBar", C, false)), "Range", $.add((await $.wv([$t13, $t14], "AHeight", { get: async () => L0["aheight"], set: async (v) => { L0["aheight"] = v; }, local: true }, false)), 16));
          await $.mset((await $.wv([$t13, $t14], "HorzScrollBar", C, false)), "Range", $.add((await $.wv([$t13, $t14], "AWidth", { get: async () => L0["awidth"], set: async (v) => { L0["awidth"] = v; }, local: true }, false)), 16));
          if ($.truthy($.lt(($.add((await $.wv([$t13, $t14], "AWidth", { get: async () => L0["awidth"], set: async (v) => { L0["awidth"] = v; }, local: true }, false)), 16)), (await $.mv(Self, "ClientWidth"))))) {
            await $.wset([$t13, $t14], "ALeft", $.idiv(($.sub((await $.mv(Self, "ClientWidth")), (await $.wv([$t13, $t14], "AWidth", { get: async () => L0["awidth"], set: async (v) => { L0["awidth"] = v; }, local: true }, false)))), 2), { get: async () => L0["aleft"], set: async (v) => { L0["aleft"] = v; }, local: true });
          }
          if ($.truthy($.lt(($.add((await $.wv([$t13, $t14], "AHeight", { get: async () => L0["aheight"], set: async (v) => { L0["aheight"] = v; }, local: true }, false)), 16)), (await $.mv(Self, "ClientHeight"))))) {
            await $.wset([$t13, $t14], "ATop", $.idiv(($.sub((await $.mv(Self, "ClientHeight")), (await $.wv([$t13, $t14], "AHeight", { get: async () => L0["aheight"], set: async (v) => { L0["aheight"] = v; }, local: true }, false)))), 2), { get: async () => L0["atop"], set: async (v) => { L0["atop"] = v; }, local: true });
          }
          await $.wset([$t13, $t14], "FScalePercent", (await $.wv([$t13, $t14], "Scaling", { get: async () => L0["scaling"], set: async (v) => { L0["scaling"] = v; }, local: true }, false)), C);
        }
      }
    }
    await $.mcall((await $.v(C, "FDrawPanel")), "Invalidate", []);
    await $.stmt((await $.mcall((await $.v(C, "FDrawPanel")), "SetBounds", [L0["aleft"], L0["atop"], L0["awidth"], L0["aheight"]])));
    await $.stmt((await $.mcall((await $.v(C, "pnlShadow")), "SetBounds", [$.add((await $.mv((await $.v(C, "FDrawPanel")), "Left")), 4), $.add((await $.mv((await $.v(C, "FDrawPanel")), "Top")), 4), (await $.mv((await $.v(C, "FDrawPanel")), "Width")), (await $.mv((await $.v(C, "FDrawPanel")), "Height"))])));
  } finally {
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPreviewBox", "UpdatePreview", async function UpdatePreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "Invalidate", []));
  await $.mcall((await $.v(C, "FDrawPanel")), "Invalidate", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPreviewBox", "WMGetDlgCode", async function WMGetDlgCode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.asRef(p0), result: undefined};
  await $.mset((await L0["msg"].get()), "Result", (await $.v(C, "DLGC_WANTARROWS")));
  return L0.result;
}, {"params": ["Msg"], "kind": "procedure", "ptypes": ["TWMGetDlgCode"]});
  U.method("TPreviewBox", "WMSize", async function WMSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TPreviewBox", "WMSize", null, arguments);
  if ($.truthy((await $.or_((await $.or_(($.in_((await $.v(C, "ViewMode")), [(await $.v(C, "vmPageWidth")), (await $.v(C, "vmFullPage"))])), async () => ($.lt(($.add((await $.mv((await $.v(C, "FDrawPanel")), "Width")), 16)), (await $.v(C, "ClientWidth")))))), async () => ($.lt(($.add((await $.mv((await $.v(C, "FDrawPanel")), "Height")), 16)), (await $.v(C, "ClientHeight")))))))) {
    await $.stmt($.call(C, "UpdatePageSetup", []));
  }
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TWMSize"]});
  U.method("TPreviewBox", "SetPrinterSetupOwner", async function SetPrinterSetupOwner(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy($.eq((await $.v(C, "FPrinterSetupOwner")), L0["value"]))) {
    return L0.result;
  }
  await $.set(C, "FPrinterSetupOwner", L0["value"]);
  if ($.truthy((await $.call(C, "Assigned", [L0["value"]])))) {
    await $.stmt((await $.mcall((await $.v(C, "FPrinterSetupOwner")), "FreeNotification", [Self])));
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "OnPrinterPreviewChanged"))])))) {
    await $.stmt((await $.call(C, "OnPrinterPreviewChanged", [Self])));
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TComponent"]});
  U.method("TPreviewBox", "Notification", async function Notification(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"acomponent": $.copyArg(p0), "operation": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["acomponent", "operation"]);
  await $.inherited(Self, "TPreviewBox", "Notification", [L0["acomponent"], L0["operation"]], arguments);
  if ($.truthy((await $.and_(($.eq(L0["operation"], (await $.v(C, "opRemove")))), async () => ($.eq(L0["acomponent"], (await $.v(C, "PrinterSetupOwner")))))))) {
    await $.set(C, "PrinterSetupOwner", null);
  }
  return L0.result;
}, {"params": ["AComponent", "Operation"], "kind": "procedure", "ptypes": ["TComponent", "TOperation"]});
  U.method("TPreviewBox", "DoMouseWheelDown", async function DoMouseWheelDown(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"shift": $.copyArg(p0), "mousepos": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["shift", "mousepos"]);
  L0["result"] = (await $.inherited(Self, "TPreviewBox", "DoMouseWheelDown", [L0["shift"], L0["mousepos"]], arguments));
  if ($.truthy($.not(L0["result"]))) {
    {
      const $t17 = (await $.v(C, "VertScrollBar"));
      if ($.truthy($.lt((await $.wv([$t17], "Range", C, false)), (await $.wv([$t17], "ClientHeight", C, false))))) {
        await $.wset([$t17], "PageIndex", $.add((await $.wv([$t17], "PageIndex", C, false)), 1), C);
      } else {
        await $.wset([$t17], "Position", $.add((await $.wv([$t17], "Position", C, false)), $.idiv($.mul($.mul((await $.wv([$t17], "Increment", C, false)), (await $.mv((await $.wv([$t17], "Mouse", C, false)), "WheelScrollLines"))), (await $.wv([$t17], "FScalePercent", C, false))), 100)), C);
      }
    }
    L0["result"] = true;
  }
  return L0.result;
}, {"params": ["Shift", "MousePos"], "kind": "function", "ptypes": ["TShiftState", "TPoint"]});
  U.method("TPreviewBox", "DoMouseWheelUp", async function DoMouseWheelUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"shift": $.copyArg(p0), "mousepos": $.copyArg(p1), result: false};
  await $.fixArgs(L0, ["shift", "mousepos"]);
  L0["result"] = (await $.inherited(Self, "TPreviewBox", "DoMouseWheelUp", [L0["shift"], L0["mousepos"]], arguments));
  if ($.truthy($.not(L0["result"]))) {
    {
      const $t18 = (await $.v(C, "VertScrollBar"));
      if ($.truthy($.lt((await $.wv([$t18], "Range", C, false)), (await $.wv([$t18], "ClientHeight", C, false))))) {
        await $.wset([$t18], "PageIndex", $.sub((await $.wv([$t18], "PageIndex", C, false)), 1), C);
      } else {
        await $.wset([$t18], "Position", $.sub((await $.wv([$t18], "Position", C, false)), $.idiv($.mul($.mul((await $.wv([$t18], "Increment", C, false)), (await $.mv((await $.wv([$t18], "Mouse", C, false)), "WheelScrollLines"))), (await $.wv([$t18], "FScalePercent", C, false))), 100)), C);
      }
    }
    L0["result"] = true;
  }
  return L0.result;
}, {"params": ["Shift", "MousePos"], "kind": "function", "ptypes": ["TShiftState", "TPoint"]});
  U.method("TPrinterPreview", "Create", async function Create(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TPrinterPreview", "Create", null, arguments);
  await $.set(C, "FMetafileList", (await $.mv((await $.v(C, "TList")), "Create")));
  await $.set(C, "FPrinter", (await $.mv((await $.v(C, "TPrinter")), "Create")));
  return L0.result;
}, {"params": [], "kind": "constructor", "ptypes": []});
  U.method("TPrinterPreview", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  { const $t19 = $.sub((await $.mv((await $.v(C, "FMetafileList")), "Count")), 1);
    L0["i"] = 0;
    let $t20 = true;
    for (;;) {
      if (!$t20) { L0["i"] = $.succ(L0["i"], 1); }
      $t20 = false;
      if (!($.ord(L0["i"]) <= $.ord($t19))) break;
      await $.mcall((await $.call(C, "TMetaFile", [(await $.idx((await $.v(C, "FMetafileList")), [L0["i"]]))])), "Free", []);
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "FMetafileList")), "Free", []);
  await $.mcall((await $.v(C, "FPrinter")), "Free", []);
  await $.inherited(Self, "TPrinterPreview", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TPrinterPreview", "Abort", async function Abort(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FAborted", true);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPrinterPreview", "BeginDoc", async function BeginDoc(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "fontsize": 0};
  { const $t21 = $.sub((await $.mv((await $.v(C, "FMetafileList")), "Count")), 1);
    L0["i"] = 0;
    let $t22 = true;
    for (;;) {
      if (!$t22) { L0["i"] = $.succ(L0["i"], 1); }
      $t22 = false;
      if (!($.ord(L0["i"]) <= $.ord($t21))) break;
      await $.mcall((await $.call(C, "TMetaFile", [(await $.idx((await $.v(C, "FMetafileList")), [L0["i"]]))])), "Free", []);
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "FMetafileList")), "Clear", []);
  await $.stmt((await $.mcall((await $.v(C, "FMetafileList")), "Add", [(await $.mcall((await $.v(C, "TMetaFile")), "Create", []))])));
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "Printer")), "Printers")), "Count")), 0))) {
    await $.set(C, "FMetafileCanvas", (await $.mcall((await $.v(C, "TMetafileCanvas")), "Create", [(await $.idx((await $.v(C, "FMetafileList")), [$.sub((await $.mv((await $.v(C, "FMetafileList")), "Count")), 1)])), (await $.mv((await $.v(C, "Printer")), "Handle"))])));
  } else {
    await $.set(C, "FMetafileCanvas", (await $.mcall((await $.v(C, "TMetafileCanvas")), "Create", [(await $.idx((await $.v(C, "FMetafileList")), [$.sub((await $.mv((await $.v(C, "FMetafileList")), "Count")), 1)])), 0])));
  }
  L0["fontsize"] = (await $.mv((await $.mv((await $.v(C, "FMetafileCanvas")), "Font")), "Size"));
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "Printer")), "Printers")), "Count")), 0))) {
    await $.mset((await $.mv((await $.v(C, "FMetafileCanvas")), "Font")), "PixelsPerInch", (await $.call(C, "GetDeviceCaps", [(await $.mv((await $.v(C, "Printer")), "Handle")), (await $.v(C, "LOGPIXELSX"))])));
    if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "FMetafileCanvas")), "Font")), "PixelsPerInch")), (await $.call(C, "GetDeviceCaps", [(await $.mv((await $.v(C, "Printer")), "Handle")), (await $.v(C, "LOGPIXELSY"))]))))) {
      await $.mset((await $.mv((await $.v(C, "FMetafileCanvas")), "Font")), "PixelsPerInch", (await $.call(C, "GetDeviceCaps", [(await $.mv((await $.v(C, "Printer")), "Handle")), (await $.v(C, "LOGPIXELSY"))])));
    }
  } else {
    await $.mset((await $.mv((await $.v(C, "FMetafileCanvas")), "Font")), "PixelsPerInch", (await $.v(C, "DefaultPrinterPixelsPerInchX")));
  }
  await $.mset((await $.mv((await $.v(C, "FMetafileCanvas")), "Font")), "Size", L0["fontsize"]);
  await $.set(C, "FPageNumber", 1);
  await $.set(C, "FAborted", false);
  await $.set(C, "FPrinting", true);
  await $.mset((await $.v(C, "Previewer")), "FPageCount", 1);
  await $.mset((await $.v(C, "Previewer")), "FPageIndex", 1);
  if ($.truthy((await $.call(C, "Assigned", [(await $.mv((await $.v(C, "Previewer")), "OnPrinterPreviewChanged"))])))) {
    await $.stmt((await $.mcall((await $.v(C, "Previewer")), "OnPrinterPreviewChanged", [Self])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPrinterPreview", "NewPage", async function NewPage(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "fontsize": 0};
  await $.stmt((await $.mcall((await $.v(C, "FMetafileList")), "Add", [(await $.mcall((await $.v(C, "TMetaFile")), "Create", []))])));
  await $.mcall((await $.v(C, "FMetafileCanvas")), "Free", []);
  if ($.truthy($.eq((await $.mv((await $.v(C, "FMetafileList")), "Count")), 2))) {
    await $.mcall((await $.v(C, "Previewer")), "UpdatePageSetup", []);
  }
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "Printer")), "Printers")), "Count")), 0))) {
    await $.set(C, "FMetafileCanvas", (await $.mcall((await $.v(C, "TMetafileCanvas")), "Create", [(await $.idx((await $.v(C, "FMetafileList")), [$.sub((await $.mv((await $.v(C, "FMetafileList")), "Count")), 1)])), (await $.mv((await $.v(C, "Printer")), "Handle"))])));
  } else {
    await $.set(C, "FMetafileCanvas", (await $.mcall((await $.v(C, "TMetafileCanvas")), "Create", [(await $.idx((await $.v(C, "FMetafileList")), [$.sub((await $.mv((await $.v(C, "FMetafileList")), "Count")), 1)])), 0])));
  }
  L0["fontsize"] = (await $.mv((await $.mv((await $.v(C, "FMetafileCanvas")), "Font")), "Size"));
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "Printer")), "Printers")), "Count")), 0))) {
    await $.mset((await $.mv((await $.v(C, "FMetafileCanvas")), "Font")), "PixelsPerInch", (await $.call(C, "GetDeviceCaps", [(await $.mv((await $.v(C, "Printer")), "Handle")), (await $.v(C, "LOGPIXELSX"))])));
    if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "FMetafileCanvas")), "Font")), "PixelsPerInch")), (await $.call(C, "GetDeviceCaps", [(await $.mv((await $.v(C, "Printer")), "Handle")), (await $.v(C, "LOGPIXELSY"))]))))) {
      await $.mset((await $.mv((await $.v(C, "FMetafileCanvas")), "Font")), "PixelsPerInch", (await $.call(C, "GetDeviceCaps", [(await $.mv((await $.v(C, "Printer")), "Handle")), (await $.v(C, "LOGPIXELSY"))])));
    }
  } else {
    await $.mset((await $.mv((await $.v(C, "FMetafileCanvas")), "Font")), "PixelsPerInch", (await $.v(C, "DefaultPrinterPixelsPerInchX")));
  }
  await $.mset((await $.mv((await $.v(C, "FMetafileCanvas")), "Font")), "Size", L0["fontsize"]);
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.v(C, "FPageNumber")), async ($t23) => { await $.set(C, "FPageNumber", $t23); })])));
  await $.mset((await $.v(C, "Previewer")), "FPageCount", $.sub((await $.mv((await $.v(C, "FMetafileList")), "Count")), 1));
  await $.stmt($.call(C, "OpenPreview", []));
  if ($.truthy((await $.call(C, "Assigned", [(await $.mv((await $.v(C, "Previewer")), "OnPrinterPreviewChanged"))])))) {
    await $.stmt((await $.mcall((await $.v(C, "Previewer")), "OnPrinterPreviewChanged", [Self])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPrinterPreview", "EndDoc", async function EndDoc(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "FMetafileCanvas")), "Free", []);
  await $.mset((await $.v(C, "Previewer")), "FPageCount", (await $.mv((await $.v(C, "FMetafileList")), "Count")));
  if ($.truthy($.eq((await $.mv((await $.v(C, "FMetafileList")), "Count")), 1))) {
    await $.mcall((await $.v(C, "Previewer")), "UpdatePageSetup", []);
  }
  await $.set(C, "FPageNumber", (-(1)));
  await $.set(C, "FPrinting", false);
  await $.mset((await $.v(C, "Previewer")), "FOnPrinterSetupDialog", (await $.v(C, "OnPrinterSetupDialog")));
  await $.set(C, "OnPrinterSetupDialog", null);
  await $.mset((await $.v(C, "Previewer")), "FOnPrinterSetupChanged", (await $.v(C, "OnPrinterSetupChanged")));
  await $.set(C, "OnPrinterSetupChanged", null);
  await $.mset((await $.v(C, "Previewer")), "PrinterSetupOwner", (await $.v(C, "PrinterSetupOwner")));
  await $.set(C, "PrinterSetupOwner", null);
  await $.stmt($.call(C, "OpenPreview", []));
  if ($.truthy((await $.call(C, "Assigned", [(await $.mv((await $.v(C, "Previewer")), "OnPrinterPreviewChanged"))])))) {
    await $.stmt((await $.mcall((await $.v(C, "Previewer")), "OnPrinterPreviewChanged", [Self])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPrinterPreview", "GetAborted", async function GetAborted(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "FAborted"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrinterPreview", "GetCanvas", async function GetCanvas(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "FMetafileCanvas"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrinterPreview", "GetFonts", async function GetFonts(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.mv((await $.v(C, "Printer")), "Fonts"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrinterPreview", "GetNumCopies", async function GetNumCopies(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.v(C, "Printer")), "Copies"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrinterPreview", "GetOrientation", async function GetOrientation(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.mv((await $.v(C, "Printer")), "Orientation"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrinterPreview", "GetPageHeight", async function GetPageHeight(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "Printer")), "Printers")), "Count")), 0))) {
    L0["result"] = (await $.mv((await $.v(C, "Printer")), "PageHeight"));
  } else {
    L0["result"] = (await $.v(C, "DefaultPrinterPageHeight"));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrinterPreview", "GetPageNumber", async function GetPageNumber(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "FPageNumber"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrinterPreview", "GetPageWidth", async function GetPageWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "Printer")), "Printers")), "Count")), 0))) {
    L0["result"] = (await $.mv((await $.v(C, "Printer")), "PageWidth"));
  } else {
    L0["result"] = (await $.v(C, "DefaultPrinterPageWidth"));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrinterPreview", "GetPrinting", async function GetPrinting(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "FPrinting"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrinterPreview", "GetTitle", async function GetTitle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.mv((await $.v(C, "Printer")), "Title"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrinterPreview", "DrawPage", async function DrawPage(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "canvas": $.copyArg(p1), "pagenumber": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "canvas", "pagenumber"]);
  await $.stmt((await $.mcall(L0["canvas"], "Draw", [0, 0, (await $.idx((await $.v(C, "FMetafileList")), [$.sub(L0["pagenumber"], 1)]))])));
  return L0.result;
}, {"params": ["Sender", "Canvas", "PageNumber"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "Integer"]});
  U.method("TPrinterPreview", "SetNumCopies", async function SetNumCopies(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.mset((await $.v(C, "Printer")), "Copies", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TPrinterPreview", "SetOnPrinterSetupDialog", async function SetOnPrinterSetupDialog(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FOnPrinterSetupDialog", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TNotifyEvent"]});
  U.method("TPrinterPreview", "SetOrientation", async function SetOrientation(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.mset((await $.v(C, "Printer")), "Orientation", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TPrinterOrientation"]});
  U.method("TPrinterPreview", "SetTitle", async function SetTitle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.mset((await $.v(C, "Printer")), "Title", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TPrinterPreview", "ShowProgress", async function ShowProgress(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"percent": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["percent"]);
  return L0.result;
}, {"params": ["Percent"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TPrinterPreview", "GetPropPrinter", async function GetPropPrinter(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.v(C, "FPrinter"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrinterPreview", "GetFullPageHeight", async function GetFullPageHeight(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "Printer")), "Printers")), "Count")), 0))) {
    L0["result"] = $.add((await $.mv((await $.v(C, "Printer")), "PageHeight")), $.mul((await $.call(C, "GetDeviceCaps", [(await $.mv((await $.v(C, "Printer")), "Handle")), (await $.v(C, "PHYSICALOFFSETY"))])), 2));
  } else {
    L0["result"] = $.add((await $.v(C, "DefaultPrinterPageHeight")), $.mul((await $.v(C, "DefaultPrinterPhysicalOffSetY")), 2));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrinterPreview", "GetFullPageWidth", async function GetFullPageWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "Printer")), "Printers")), "Count")), 0))) {
    L0["result"] = $.add((await $.mv((await $.v(C, "Printer")), "PageWidth")), $.mul((await $.call(C, "GetDeviceCaps", [(await $.mv((await $.v(C, "Printer")), "Handle")), (await $.v(C, "PHYSICALOFFSETX"))])), 2));
  } else {
    L0["result"] = $.add((await $.v(C, "DefaultPrinterPageWidth")), $.mul((await $.v(C, "DefaultPrinterPhysicalOffSetX")), 2));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrinterPreview", "GetHandle", async function GetHandle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.mv((await $.v(C, "Printer")), "Handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrinterPreview", "GetPrinter", async function GetPrinter(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"adevice": $.copyArg(p0), "adriver": $.copyArg(p1), "aport": $.copyArg(p2), "adevicemode": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["adevice", "adriver", "aport"]);
  await $.stmt((await $.mcall((await $.v(C, "Printer")), "GetPrinter", [L0["adevice"], L0["adriver"], L0["aport"], $.ref(async () => (await L0["adevicemode"].get()), async ($t24) => { await L0["adevicemode"].set($t24); })])));
  return L0.result;
}, {"params": ["ADevice", "ADriver", "APort", "ADeviceMode"], "kind": "procedure", "ptypes": ["PChar", "PChar", "PChar", "THandle"]});
  U.method("TPrinterPreview", "SetPrinter", async function SetPrinter(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"adevice": $.copyArg(p0), "adriver": $.copyArg(p1), "aport": $.copyArg(p2), "adevicemode": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["adevice", "adriver", "aport", "adevicemode"]);
  await $.stmt((await $.mcall((await $.v(C, "Printer")), "SetPrinter", [L0["adevice"], L0["adriver"], L0["aport"], L0["adevicemode"]])));
  return L0.result;
}, {"params": ["ADevice", "ADriver", "APort", "ADeviceMode"], "kind": "procedure", "ptypes": ["PChar", "PChar", "PChar", "THandle"]});
  U.method("TPrinterPreview", "GetCapabilities", async function GetCapabilities(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.mv((await $.v(C, "Printer")), "Capabilities"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrinterPreview", "GetPrinterIndex", async function GetPrinterIndex(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.v(C, "Printer")), "PrinterIndex"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrinterPreview", "GetPrinters", async function GetPrinters(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.mv((await $.v(C, "Printer")), "Printers"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrinterPreview", "SetPrinterIndex", async function SetPrinterIndex(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.mset((await $.v(C, "Printer")), "PrinterIndex", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TPrinterPreview", "OpenPreview", async function OpenPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.call(C, "Assigned", [(await $.mv((await $.v(C, "Previewer")), "OnOpenPreviewer"))])))) {
    await $.stmt((await $.mcall((await $.v(C, "Previewer")), "OnOpenPreviewer", [Self])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPrinterPreview", "Print", async function Print(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "page": 0, "oldprinter": null};
  if ($.truthy($.eq((await $.mv((await $.v(C, "FMetafileList")), "Count")), 0))) {
    return L0.result;
  }
  L0["oldprinter"] = (await $.call(C, "PrintersSetPrinter", [(await $.v(C, "Printer"))]));
  try {
    {
      const $t25 = (await $.v(C, "PrintersPrinter"));
      await $.stmt($.wcall([$t25], "BeginDoc", [], C));
      { const $t26 = $.sub((await $.mv((await $.wv([$t25], "FMetafileList", C, false)), "Count")), 1);
        await $.wset([$t25], "Page", 0, { get: async () => L0["page"], set: async (v) => { L0["page"] = v; }, local: true });
        let $t27 = true;
        for (;;) {
          if (!$t27) { await $.wset([$t25], "Page", $.succ((await $.wv([$t25], "Page", { get: async () => L0["page"], set: async (v) => { L0["page"] = v; }, local: true }, false)), 1), { get: async () => L0["page"], set: async (v) => { L0["page"] = v; }, local: true }); }
          $t27 = false;
          if (!($.ord((await $.wv([$t25], "Page", { get: async () => L0["page"], set: async (v) => { L0["page"] = v; }, local: true }, false))) <= $.ord($t26))) break;
          await $.stmt((await $.wcall([$t25], "DrawPage", [Self, (await $.wv([$t25], "Canvas", C, false)), $.add((await $.wv([$t25], "Page", { get: async () => L0["page"], set: async (v) => { L0["page"] = v; }, local: true }, false)), 1)], C)));
          if ($.truthy($.lt((await $.wv([$t25], "Page", { get: async () => L0["page"], set: async (v) => { L0["page"] = v; }, local: true }, false)), $.sub((await $.mv((await $.wv([$t25], "FMetafileList", C, false)), "Count")), 1)))) {
            await $.stmt($.wcall([$t25], "NewPage", [], C));
          }
          await $.tick();
        }
      }
      await $.stmt($.wcall([$t25], "EndDoc", [], C));
    }
  } finally {
    await $.stmt((await $.call(C, "PrintersSetPrinter", [L0["oldprinter"]])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("PrinterPreview", async function PrinterPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  if ($.truthy($.eq((await $.v(C, "FPrinterPreview")), null))) {
    await $.set(C, "PreviewFormEh", (await $.mcall((await $.v(C, "TPreviewFormEh")), "Create", [(await $.v(C, "Application"))])));
    await $.set(C, "FPrinterPreview", (await $.mv((await $.mv((await $.v(C, "PreviewFormEh")), "PreviewEh1")), "Printer")));
  }
  L0["result"] = (await $.v(C, "FPrinterPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("SetPrinterPreview", async function SetPrinterPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"newprinterpreview": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["newprinterpreview"]);
  L0["result"] = (await $.v(C, "FPrinterPreview"));
  await $.set(C, "FPrinterPreview", L0["newprinterpreview"]);
  return L0.result;
}, {"params": ["NewPrinterPreview"], "kind": "function", "ptypes": ["TPrinterPreview"]});
  U.method("TPrinterPreview", "SetPreviewer", async function SetPreviewer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FPreviewer", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TPreviewBox"]});
  U.func("DefineCursor", async function DefineCursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"identifier": $.copyArg(p0), result: null, "handle": null};
  await $.fixArgs(L0, ["identifier"]);
  L0["handle"] = (await $.call(C, "LoadCursor", [(await $.v(C, "hInstance")), L0["identifier"]]));
  if ($.truthy($.eq(L0["handle"], 0))) {
    throw $.raise((await $.mcall((await $.v(C, "EOutOfResources")), "Create", ["Cannot load cursor resource"])));
  }
  { const $t28 = (await $.call(C, "High", [(await $.v(C, "TCursor"))]));
    L0["result"] = 1;
    let $t29 = true;
    for (;;) {
      if (!$t29) { L0["result"] = $.succ(L0["result"], 1); }
      $t29 = false;
      if (!($.ord(L0["result"]) <= $.ord($t28))) break;
      if ($.truthy($.eq((await $.idx((await $.mv((await $.v(C, "Screen")), "Cursors")), [L0["result"]])), (await $.idx((await $.mv((await $.v(C, "Screen")), "Cursors")), [(await $.v(C, "crArrow"))]))))) {
        { const $t30 = await $.iset((await $.mv((await $.v(C, "Screen")), "Cursors")), [L0["result"]], L0["handle"]); if ($t30 !== undefined) { await $.mset((await $.v(C, "Screen")), "Cursors", $t30); } }
        return L0.result;
      }
      await $.tick();
    }
  }
  throw $.raise((await $.mcall((await $.v(C, "EOutOfResources")), "Create", ["Too many user-defined cursors"])));
  return L0.result;
}, {"params": ["Identifier"], "kind": "function", "ptypes": ["PChar"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "crMagnifier", (await $.call(C, "DefineCursor", ["MAGNIFIEREH"])));
  await $.set(C, "crHand", (await $.call(C, "DefineCursor", ["HANDEH"])));
  return L0.result;
});
  return U;
}
