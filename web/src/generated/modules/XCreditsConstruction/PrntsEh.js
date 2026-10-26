// Generated from PrntsEh.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PrntsEh", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Printers"]);
  const C = [U];
  U.defClass("TVirtualPrinter", "TObject", {}, {"aborted": {"name": "Aborted", "read": "GetAborted"}, "canvas": {"name": "Canvas", "read": "GetCanvas"}, "capabilities": {"name": "Capabilities", "read": "GetCapabilities"}, "copies": {"name": "Copies", "read": "GetNumCopies", "write": "SetNumCopies"}, "fonts": {"name": "Fonts", "read": "GetFonts"}, "handle": {"name": "Handle", "read": "GetHandle"}, "orientation": {"name": "Orientation", "read": "GetOrientation", "write": "SetOrientation"}, "pageheight": {"name": "PageHeight", "read": "GetPageHeight"}, "pagewidth": {"name": "PageWidth", "read": "GetPageWidth"}, "pagenumber": {"name": "PageNumber", "read": "GetPageNumber"}, "printerindex": {"name": "PrinterIndex", "read": "GetPrinterIndex", "write": "SetPrinterIndex"}, "fullpagewidth": {"name": "FullPageWidth", "read": "GetFullPageWidth"}, "fullpageheight": {"name": "FullPageHeight", "read": "GetFullPageHeight"}, "printing": {"name": "Printing", "read": "GetPrinting"}, "printers": {"name": "Printers", "read": "GetPrinters"}, "title": {"name": "Title", "read": "GetTitle", "write": "SetTitle"}});
  U.init(async () => {
    U.var_("VirtualPrinter", null, "TVirtualPrinter");
  });
  U.method("TVirtualPrinter", "Abort", async function Abort(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "Printer")), "Abort", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TVirtualPrinter", "BeginDoc", async function BeginDoc(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "Printer")), "BeginDoc", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TVirtualPrinter", "Create", async function Create(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TVirtualPrinter", "Create", null, arguments);
  return L0.result;
}, {"params": [], "kind": "constructor", "ptypes": []});
  U.method("TVirtualPrinter", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TVirtualPrinter", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TVirtualPrinter", "EndDoc", async function EndDoc(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "Printer")), "EndDoc", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TVirtualPrinter", "GetCanvas", async function GetCanvas(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.mv((await $.v(C, "Printer")), "Canvas"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TVirtualPrinter", "GetFonts", async function GetFonts(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.mv((await $.v(C, "Printer")), "Fonts"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TVirtualPrinter", "GetFullPageWidth", async function GetFullPageWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = $.add((await $.mv((await $.v(C, "Printer")), "PageWidth")), $.mul((await $.call(C, "GetDeviceCaps", [(await $.mv((await $.v(C, "Printer")), "Handle")), (await $.v(C, "PHYSICALOFFSETX"))])), 2));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TVirtualPrinter", "GetFullPageHeight", async function GetFullPageHeight(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = $.add((await $.mv((await $.v(C, "Printer")), "PageHeight")), $.mul((await $.call(C, "GetDeviceCaps", [(await $.mv((await $.v(C, "Printer")), "Handle")), (await $.v(C, "PHYSICALOFFSETY"))])), 2));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TVirtualPrinter", "GetNumCopies", async function GetNumCopies(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.v(C, "Printer")), "Copies"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TVirtualPrinter", "GetOrientation", async function GetOrientation(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.mv((await $.v(C, "Printer")), "Orientation"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TVirtualPrinter", "GetPageHeight", async function GetPageHeight(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.v(C, "Printer")), "PageHeight"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TVirtualPrinter", "GetPageNumber", async function GetPageNumber(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.v(C, "Printer")), "PageNumber"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TVirtualPrinter", "GetPageWidth", async function GetPageWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.v(C, "Printer")), "PageWidth"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TVirtualPrinter", "GetPrinting", async function GetPrinting(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.mv((await $.v(C, "Printer")), "Printing"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TVirtualPrinter", "GetTitle", async function GetTitle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.mv((await $.v(C, "Printer")), "Title"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TVirtualPrinter", "NewPage", async function NewPage(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "Printer")), "NewPage", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TVirtualPrinter", "SetNumCopies", async function SetNumCopies(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.mset((await $.v(C, "Printer")), "Copies", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TVirtualPrinter", "SetOrientation", async function SetOrientation(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.mset((await $.v(C, "Printer")), "Orientation", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TPrinterOrientation"]});
  U.method("TVirtualPrinter", "SetTitle", async function SetTitle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.mset((await $.v(C, "Printer")), "Title", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TVirtualPrinter", "GetAborted", async function GetAborted(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.mv((await $.v(C, "Printer")), "Aborted"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TVirtualPrinter", "GetHandle", async function GetHandle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.mv((await $.v(C, "Printer")), "Handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TVirtualPrinter", "GetPrinter", async function GetPrinter(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"adevice": $.copyArg(p0), "adriver": $.copyArg(p1), "aport": $.copyArg(p2), "adevicemode": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["adevice", "adriver", "aport"]);
  await $.stmt((await $.mcall((await $.v(C, "Printer")), "GetPrinter", [L0["adevice"], L0["adriver"], L0["aport"], $.ref(async () => (await L0["adevicemode"].get()), async ($t1) => { await L0["adevicemode"].set($t1); })])));
  return L0.result;
}, {"params": ["ADevice", "ADriver", "APort", "ADeviceMode"], "kind": "procedure", "ptypes": ["PChar", "PChar", "PChar", "THandle"]});
  U.method("TVirtualPrinter", "SetPrinter", async function SetPrinter(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"adevice": $.copyArg(p0), "adriver": $.copyArg(p1), "aport": $.copyArg(p2), "adevicemode": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["adevice", "adriver", "aport", "adevicemode"]);
  await $.stmt((await $.mcall((await $.v(C, "Printer")), "SetPrinter", [L0["adevice"], L0["adriver"], L0["aport"], L0["adevicemode"]])));
  return L0.result;
}, {"params": ["ADevice", "ADriver", "APort", "ADeviceMode"], "kind": "procedure", "ptypes": ["PChar", "PChar", "PChar", "THandle"]});
  U.method("TVirtualPrinter", "GetPrinterIndex", async function GetPrinterIndex(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.v(C, "Printer")), "PrinterIndex"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TVirtualPrinter", "GetPrinters", async function GetPrinters(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.mv((await $.v(C, "Printer")), "Printers"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TVirtualPrinter", "SetPrinterIndex", async function SetPrinterIndex(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.mset((await $.v(C, "Printer")), "PrinterIndex", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TVirtualPrinter", "GetCapabilities", async function GetCapabilities(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.mv((await $.v(C, "Printer")), "Capabilities"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "VirtualPrinter", (await $.mv((await $.v(C, "TVirtualPrinter")), "Create")));
  return L0.result;
});
  return U;
}
